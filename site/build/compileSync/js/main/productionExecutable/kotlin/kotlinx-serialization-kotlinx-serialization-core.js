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
  var protoOf = kotlin_kotlin.$_$.fa;
  var interfaceMeta = kotlin_kotlin.$_$.h9;
  var setMetadataFor = kotlin_kotlin.$_$.ga;
  var VOID = kotlin_kotlin.$_$.g;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.x3;
  var Unit_instance = kotlin_kotlin.$_$.h4;
  var emptyList = kotlin_kotlin.$_$.v5;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.i;
  var lazy = kotlin_kotlin.$_$.ge;
  var classMeta = kotlin_kotlin.$_$.v8;
  var KProperty1 = kotlin_kotlin.$_$.wa;
  var getPropertyCallableRef = kotlin_kotlin.$_$.d9;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.l1;
  var objectCreate = kotlin_kotlin.$_$.da;
  var captureStack = kotlin_kotlin.$_$.p8;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.n1;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.p1;
  var IllegalArgumentException = kotlin_kotlin.$_$.ed;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.g5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.l;
  var THROW_CCE = kotlin_kotlin.$_$.kd;
  var KClass = kotlin_kotlin.$_$.sa;
  var isInterface = kotlin_kotlin.$_$.q9;
  var Triple = kotlin_kotlin.$_$.md;
  var getKClass = kotlin_kotlin.$_$.e;
  var Pair = kotlin_kotlin.$_$.hd;
  var Entry = kotlin_kotlin.$_$.u4;
  var LinkedHashMap = kotlin_kotlin.$_$.r4;
  var MutableMap = kotlin_kotlin.$_$.y4;
  var Map = kotlin_kotlin.$_$.v4;
  var HashMap = kotlin_kotlin.$_$.p4;
  var LinkedHashSet = kotlin_kotlin.$_$.s4;
  var MutableSet = kotlin_kotlin.$_$.z4;
  var Set = kotlin_kotlin.$_$.a5;
  var HashSet = kotlin_kotlin.$_$.q4;
  var ArrayList = kotlin_kotlin.$_$.n4;
  var MutableList = kotlin_kotlin.$_$.x4;
  var List = kotlin_kotlin.$_$.t4;
  var Collection = kotlin_kotlin.$_$.o4;
  var copyToArray = kotlin_kotlin.$_$.t5;
  var toString = kotlin_kotlin.$_$.ka;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.m2;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.l2;
  var Result = kotlin_kotlin.$_$.id;
  var ensureNotNull = kotlin_kotlin.$_$.ce;
  var equals = kotlin_kotlin.$_$.y8;
  var getStringHashCode = kotlin_kotlin.$_$.e9;
  var isBlank = kotlin_kotlin.$_$.mb;
  var toList = kotlin_kotlin.$_$.n7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.m;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.s;
  var toHashSet = kotlin_kotlin.$_$.k7;
  var toBooleanArray = kotlin_kotlin.$_$.j7;
  var withIndex = kotlin_kotlin.$_$.s7;
  var to = kotlin_kotlin.$_$.qe;
  var toMap = kotlin_kotlin.$_$.o7;
  var lazy_0 = kotlin_kotlin.$_$.he;
  var contentEquals = kotlin_kotlin.$_$.i5;
  var until = kotlin_kotlin.$_$.ra;
  var joinToString = kotlin_kotlin.$_$.j6;
  var objectMeta = kotlin_kotlin.$_$.ea;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var Long = kotlin_kotlin.$_$.gd;
  var Char = kotlin_kotlin.$_$.yc;
  var Companion_getInstance = kotlin_kotlin.$_$.z3;
  var Duration = kotlin_kotlin.$_$.vc;
  var toIntOrNull = kotlin_kotlin.$_$.lc;
  var hashCode = kotlin_kotlin.$_$.f9;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.n;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.t;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.x;
  var LinkedHashSet_init_$Create$_0 = kotlin_kotlin.$_$.y;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.p;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.q;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.v;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.w;
  var asList = kotlin_kotlin.$_$.e5;
  var isArray = kotlin_kotlin.$_$.i9;
  var step = kotlin_kotlin.$_$.qa;
  var getValue = kotlin_kotlin.$_$.f6;
  var longArray = kotlin_kotlin.$_$.x9;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.b4;
  var get_lastIndex = kotlin_kotlin.$_$.m6;
  var countTrailingZeroBits = kotlin_kotlin.$_$.ae;
  var fillArrayVal = kotlin_kotlin.$_$.z8;
  var HashSet_init_$Create$_1 = kotlin_kotlin.$_$.r;
  var KTypeParameter = kotlin_kotlin.$_$.xa;
  var booleanArray = kotlin_kotlin.$_$.o8;
  var emptyMap = kotlin_kotlin.$_$.w5;
  var contentHashCode = kotlin_kotlin.$_$.j5;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.a4;
  var isCharArray = kotlin_kotlin.$_$.l9;
  var charArray = kotlin_kotlin.$_$.r8;
  var DoubleCompanionObject_instance = kotlin_kotlin.$_$.t3;
  var isDoubleArray = kotlin_kotlin.$_$.n9;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.u3;
  var isFloatArray = kotlin_kotlin.$_$.o9;
  var isLongArray = kotlin_kotlin.$_$.r9;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.f4;
  var ULongArray = kotlin_kotlin.$_$.rd;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.d3;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.b3;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.v3;
  var isIntArray = kotlin_kotlin.$_$.p9;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.e4;
  var UIntArray = kotlin_kotlin.$_$.pd;
  var _UIntArray___init__impl__ghjpc6 = kotlin_kotlin.$_$.w2;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.u2;
  var ShortCompanionObject_instance = kotlin_kotlin.$_$.w3;
  var isShortArray = kotlin_kotlin.$_$.t9;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.g4;
  var UShortArray = kotlin_kotlin.$_$.td;
  var _UShortArray___init__impl__9b26ef = kotlin_kotlin.$_$.k3;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.i3;
  var ByteCompanionObject_instance = kotlin_kotlin.$_$.s3;
  var isByteArray = kotlin_kotlin.$_$.k9;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.d4;
  var UByteArray = kotlin_kotlin.$_$.nd;
  var _UByteArray___init__impl__ip4y9n = kotlin_kotlin.$_$.q2;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.n2;
  var BooleanCompanionObject_instance = kotlin_kotlin.$_$.r3;
  var isBooleanArray = kotlin_kotlin.$_$.j9;
  var coerceAtLeast = kotlin_kotlin.$_$.ma;
  var copyOf = kotlin_kotlin.$_$.n5;
  var copyOf_0 = kotlin_kotlin.$_$.p5;
  var copyOf_1 = kotlin_kotlin.$_$.q5;
  var copyOf_2 = kotlin_kotlin.$_$.l5;
  var _ULongArray___get_size__impl__ju6dtr = kotlin_kotlin.$_$.g3;
  var _ULongArray___get_storage__impl__28e64j = kotlin_kotlin.$_$.h3;
  var _ULongArray___init__impl__twm1l3_0 = kotlin_kotlin.$_$.e3;
  var ULongArray__set_impl_z19mvh = kotlin_kotlin.$_$.f3;
  var copyOf_3 = kotlin_kotlin.$_$.s5;
  var _UIntArray___get_size__impl__r6l8ci = kotlin_kotlin.$_$.z2;
  var _UIntArray___get_storage__impl__92a0v0 = kotlin_kotlin.$_$.a3;
  var _UIntArray___init__impl__ghjpc6_0 = kotlin_kotlin.$_$.x2;
  var UIntArray__set_impl_7f2zu2 = kotlin_kotlin.$_$.y2;
  var copyOf_4 = kotlin_kotlin.$_$.k5;
  var _UShortArray___get_size__impl__jqto1b = kotlin_kotlin.$_$.n3;
  var _UShortArray___get_storage__impl__t2jpv5 = kotlin_kotlin.$_$.o3;
  var _UShortArray___init__impl__9b26ef_0 = kotlin_kotlin.$_$.l3;
  var UShortArray__set_impl_6d8whp = kotlin_kotlin.$_$.m3;
  var copyOf_5 = kotlin_kotlin.$_$.o5;
  var _UByteArray___get_size__impl__h6pkdv = kotlin_kotlin.$_$.s2;
  var _UByteArray___get_storage__impl__d4kctt = kotlin_kotlin.$_$.t2;
  var _UByteArray___init__impl__ip4y9n_0 = kotlin_kotlin.$_$.p2;
  var UByteArray__set_impl_jvcicn = kotlin_kotlin.$_$.r2;
  var copyOf_6 = kotlin_kotlin.$_$.m5;
  var trimIndent = kotlin_kotlin.$_$.sc;
  var equals_0 = kotlin_kotlin.$_$.jb;
  var charSequenceLength = kotlin_kotlin.$_$.t8;
  var charSequenceGet = kotlin_kotlin.$_$.s8;
  var toString_0 = kotlin_kotlin.$_$.i2;
  var titlecase = kotlin_kotlin.$_$.jc;
  var isLowerCase = kotlin_kotlin.$_$.nb;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.y3;
  var ULong = kotlin_kotlin.$_$.sd;
  var UInt = kotlin_kotlin.$_$.qd;
  var UShort = kotlin_kotlin.$_$.ud;
  var UByte = kotlin_kotlin.$_$.od;
  var Unit = kotlin_kotlin.$_$.vd;
  var mapOf = kotlin_kotlin.$_$.v6;
  var lastOrNull = kotlin_kotlin.$_$.o6;
  var get_lastIndex_0 = kotlin_kotlin.$_$.n6;
  var get_js = kotlin_kotlin.$_$.u9;
  var findAssociatedObject = kotlin_kotlin.$_$.c;
  var get_indices = kotlin_kotlin.$_$.i6;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.u1;
  var get_indices_0 = kotlin_kotlin.$_$.h6;
  var Companion_instance = kotlin_kotlin.$_$.c4;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.j2;
  var createFailure = kotlin_kotlin.$_$.be;
  //endregion
  //region block: pre-declaration
  setMetadataFor(DeserializationStrategy, 'DeserializationStrategy', interfaceMeta);
  setMetadataFor(KSerializer, 'KSerializer', interfaceMeta, VOID, [DeserializationStrategy]);
  setMetadataFor(AbstractPolymorphicSerializer, 'AbstractPolymorphicSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(PolymorphicSerializer, 'PolymorphicSerializer', classMeta, AbstractPolymorphicSerializer);
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
  setMetadataFor(elementNames$1$1, VOID, classMeta);
  setMetadataFor(_no_name_provided__qut3iv_0, VOID, classMeta);
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
    return deserializer.l2q(this);
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
    return $super === VOID ? this.s2t(descriptor, index, deserializer, previousValue) : $super.s2t.call(this, descriptor, index, deserializer, previousValue);
  }
  setMetadataFor(CompositeDecoder, 'CompositeDecoder', interfaceMeta);
  setMetadataFor(AbstractDecoder, 'AbstractDecoder', classMeta, VOID, [Decoder, CompositeDecoder]);
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
  setMetadataFor(EnumSerializer, 'EnumSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(PluginGeneratedSerialDescriptor, 'PluginGeneratedSerialDescriptor', classMeta, VOID, [SerialDescriptor, CachedNames]);
  setMetadataFor(EnumDescriptor, 'EnumDescriptor', classMeta, PluginGeneratedSerialDescriptor);
  setMetadataFor(InlineClassDescriptor, 'InlineClassDescriptor', classMeta, PluginGeneratedSerialDescriptor);
  function typeParametersSerializers() {
    return get_EMPTY_SERIALIZER_ARRAY();
  }
  setMetadataFor(GeneratedSerializer, 'GeneratedSerializer', interfaceMeta, VOID, [KSerializer]);
  setMetadataFor(InlinePrimitiveDescriptor$1, VOID, classMeta, VOID, [GeneratedSerializer]);
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
  setMetadataFor(SerializableWith, 'SerializableWith', classMeta, VOID, VOID, VOID, 0);
  setMetadataFor(createCache$1, VOID, classMeta);
  setMetadataFor(createParametrizedCache$1, VOID, classMeta);
  //endregion
  function KSerializer() {
  }
  function DeserializationStrategy() {
  }
  function PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.u2q('type', serializer_0(StringCompanionObject_instance).k2q());
      $this$buildSerialDescriptor.u2q('value', buildSerialDescriptor('kotlinx.serialization.Polymorphic<' + this$0.v2q_1.e7() + '>', CONTEXTUAL_getInstance(), []));
      $this$buildSerialDescriptor.o2q_1 = this$0.w2q_1;
      return Unit_instance;
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0)), this$0.v2q_1);
    };
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.v2q_1 = baseClass;
    this.w2q_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.x2q_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  protoOf(PolymorphicSerializer).y2q = function () {
    return this.v2q_1;
  };
  protoOf(PolymorphicSerializer).k2q = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.x2q_1;
    descriptor$factory();
    return this_0.o2();
  };
  protoOf(PolymorphicSerializer).toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + this.v2q_1 + ')';
  };
  function findPolymorphicSerializer(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.z2q(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(klassName, _this__u8e3s4.y2q());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function descriptor$factory() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.k2q();
    }, null);
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
    MissingFieldException.call($this, missingFields, missingFields.l() === 1 ? "Field '" + missingFields.m(0) + "' is required for type with serial name '" + serialName + "', but it was missing" : 'Fields ' + missingFields + " are required for type with serial name '" + serialName + "', but they were missing", null);
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
    this.a2r_1 = missingFields;
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
      var tmp0_iterator = typeArguments.n();
      while (tmp0_iterator.b1()) {
        var item = tmp0_iterator.d1();
        // Inline function 'kotlinx.serialization.serializersForParameters.<anonymous>' call
        var tmp$ret$0 = serializer(_this__u8e3s4, item);
        destination.y(tmp$ret$0);
      }
      tmp = destination;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var tmp0_iterator_0 = typeArguments.n();
      while (tmp0_iterator_0.b1()) {
        var item_0 = tmp0_iterator_0.d1();
        // Inline function 'kotlinx.serialization.serializersForParameters.<anonymous>' call
        var tmp0_elvis_lhs = serializerOrNull_0(_this__u8e3s4, item_0);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var tmp$ret$3 = tmp_0;
        destination_0.y(tmp$ret$3);
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
      tmp = new ArrayListSerializer(serializers.m(0));
    } else if (_this__u8e3s4.equals(getKClass(HashSet))) {
      tmp = new HashSetSerializer(serializers.m(0));
    } else if ((_this__u8e3s4.equals(getKClass(Set)) ? true : _this__u8e3s4.equals(getKClass(MutableSet))) ? true : _this__u8e3s4.equals(getKClass(LinkedHashSet))) {
      tmp = new LinkedHashSetSerializer(serializers.m(0));
    } else if (_this__u8e3s4.equals(getKClass(HashMap))) {
      tmp = new HashMapSerializer(serializers.m(0), serializers.m(1));
    } else if ((_this__u8e3s4.equals(getKClass(Map)) ? true : _this__u8e3s4.equals(getKClass(MutableMap))) ? true : _this__u8e3s4.equals(getKClass(LinkedHashMap))) {
      tmp = new LinkedHashMapSerializer(serializers.m(0), serializers.m(1));
    } else if (_this__u8e3s4.equals(getKClass(Entry))) {
      tmp = MapEntrySerializer(serializers.m(0), serializers.m(1));
    } else if (_this__u8e3s4.equals(getKClass(Pair))) {
      tmp = PairSerializer(serializers.m(0), serializers.m(1));
    } else if (_this__u8e3s4.equals(getKClass(Triple))) {
      tmp = TripleSerializer(serializers.m(0), serializers.m(1), serializers.m(2));
    } else {
      var tmp_0;
      if (isReferenceArray(_this__u8e3s4)) {
        var tmp_1 = elementClassifierIfArray();
        tmp_0 = ArraySerializer((!(tmp_1 == null) ? isInterface(tmp_1, KClass) : false) ? tmp_1 : THROW_CCE(), serializers.m(0));
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
    var isNullable = type.t7();
    // Inline function 'kotlin.collections.map' call
    var this_0 = type.s7();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.n();
    while (tmp0_iterator.b1()) {
      var item = tmp0_iterator.d1();
      // Inline function 'kotlinx.serialization.serializerByKTypeImpl.<anonymous>' call
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.requireNotNull' call
        var value = item.bh_1;
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
      destination.y(tmp$ret$2);
    }
    var typeArguments = destination;
    var tmp;
    if (typeArguments.s()) {
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
    if (typeArguments.s()) {
      tmp_2 = _this__u8e3s4.c2r(rootClass);
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
      tmp_2 = tmp2_elvis_lhs == null ? _this__u8e3s4.b2r(rootClass, serializers) : tmp2_elvis_lhs;
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
  function serializerByKTypeImpl$lambda($typeArguments) {
    return function () {
      return $typeArguments.m(0).r7();
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
      var tmp0_safe_receiver = get_SERIALIZERS_CACHE().d2r(clazz);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp_0 = isInterface(tmp0_safe_receiver, KSerializer) ? tmp0_safe_receiver : THROW_CCE();
      }
      tmp = tmp_0;
    } else {
      tmp = get_SERIALIZERS_CACHE_NULLABLE().d2r(clazz);
    }
    return tmp;
  }
  function findParametrizedCachedSerializer(clazz, types, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp_0 = get_PARAMETRIZED_SERIALIZERS_CACHE().e2r(clazz, types);
      tmp = new Result(tmp_0) instanceof Result ? tmp_0 : THROW_CCE();
    } else {
      tmp = get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE().e2r(clazz, types);
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
      return $types.m(0).r7();
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
      return $types.m(0).r7();
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
    if (_this__u8e3s4.k2q().f2r()) {
      tmp = isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
    } else {
      tmp = new NullableSerializer(_this__u8e3s4);
    }
    return tmp;
  }
  function serializer_0(_this__u8e3s4) {
    return StringSerializer_getInstance();
  }
  function serializer_1(_this__u8e3s4) {
    return CharSerializer_getInstance();
  }
  function CharArraySerializer() {
    return CharArraySerializer_getInstance();
  }
  function serializer_2(_this__u8e3s4) {
    return DoubleSerializer_getInstance();
  }
  function DoubleArraySerializer() {
    return DoubleArraySerializer_getInstance();
  }
  function serializer_3(_this__u8e3s4) {
    return FloatSerializer_getInstance();
  }
  function FloatArraySerializer() {
    return FloatArraySerializer_getInstance();
  }
  function serializer_4(_this__u8e3s4) {
    return LongSerializer_getInstance();
  }
  function LongArraySerializer() {
    return LongArraySerializer_getInstance();
  }
  function serializer_5(_this__u8e3s4) {
    return ULongSerializer_getInstance();
  }
  function ULongArraySerializer() {
    return ULongArraySerializer_getInstance();
  }
  function serializer_6(_this__u8e3s4) {
    return IntSerializer_getInstance();
  }
  function IntArraySerializer() {
    return IntArraySerializer_getInstance();
  }
  function serializer_7(_this__u8e3s4) {
    return UIntSerializer_getInstance();
  }
  function UIntArraySerializer() {
    return UIntArraySerializer_getInstance();
  }
  function serializer_8(_this__u8e3s4) {
    return ShortSerializer_getInstance();
  }
  function ShortArraySerializer() {
    return ShortArraySerializer_getInstance();
  }
  function serializer_9(_this__u8e3s4) {
    return UShortSerializer_getInstance();
  }
  function UShortArraySerializer() {
    return UShortArraySerializer_getInstance();
  }
  function serializer_10(_this__u8e3s4) {
    return ByteSerializer_getInstance();
  }
  function ByteArraySerializer() {
    return ByteArraySerializer_getInstance();
  }
  function serializer_11(_this__u8e3s4) {
    return UByteSerializer_getInstance();
  }
  function UByteArraySerializer() {
    return UByteArraySerializer_getInstance();
  }
  function serializer_12(_this__u8e3s4) {
    return BooleanSerializer_getInstance();
  }
  function BooleanArraySerializer() {
    return BooleanArraySerializer_getInstance();
  }
  function serializer_13(_this__u8e3s4) {
    return UnitSerializer_getInstance();
  }
  function NothingSerializer() {
    return NothingSerializer_getInstance();
  }
  function serializer_14(_this__u8e3s4) {
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
  function withContext(_this__u8e3s4, context) {
    return new ContextDescriptor(_this__u8e3s4, context);
  }
  function ContextDescriptor(original, kClass) {
    this.g2r_1 = original;
    this.h2r_1 = kClass;
    this.i2r_1 = this.g2r_1.j2r() + '<' + this.h2r_1.e7() + '>';
  }
  protoOf(ContextDescriptor).k2r = function () {
    return this.g2r_1.k2r();
  };
  protoOf(ContextDescriptor).l2r = function () {
    return this.g2r_1.l2r();
  };
  protoOf(ContextDescriptor).m2r = function () {
    return this.g2r_1.m2r();
  };
  protoOf(ContextDescriptor).f2r = function () {
    return this.g2r_1.f2r();
  };
  protoOf(ContextDescriptor).n2r = function () {
    return this.g2r_1.n2r();
  };
  protoOf(ContextDescriptor).o2r = function (index) {
    return this.g2r_1.o2r(index);
  };
  protoOf(ContextDescriptor).p2r = function (index) {
    return this.g2r_1.p2r(index);
  };
  protoOf(ContextDescriptor).q2r = function (name) {
    return this.g2r_1.q2r(name);
  };
  protoOf(ContextDescriptor).r2r = function (index) {
    return this.g2r_1.r2r(index);
  };
  protoOf(ContextDescriptor).s2r = function (index) {
    return this.g2r_1.s2r(index);
  };
  protoOf(ContextDescriptor).j2r = function () {
    return this.i2r_1;
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
    return equals(this.g2r_1, another.g2r_1) ? another.h2r_1.equals(this.h2r_1) : false;
  };
  protoOf(ContextDescriptor).hashCode = function () {
    var result = this.h2r_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.i2r_1) | 0;
    return result;
  };
  protoOf(ContextDescriptor).toString = function () {
    return 'ContextDescriptor(kClass: ' + this.h2r_1 + ', original: ' + this.g2r_1 + ')';
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
      var tmp0_safe_receiver_0 = _this__u8e3s4.c2r(tmp0_safe_receiver);
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.k2q();
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.h2r_1;
    } else {
      if (_this__u8e3s4 instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.t2r_1);
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
  function get_elementNames(_this__u8e3s4) {
    // Inline function 'kotlin.collections.Iterable' call
    return new _no_name_provided__qut3iv_0(_this__u8e3s4);
  }
  function elementDescriptors$1$1($this_elementDescriptors) {
    this.x2r_1 = $this_elementDescriptors;
    this.w2r_1 = $this_elementDescriptors.l2r();
  }
  protoOf(elementDescriptors$1$1).b1 = function () {
    return this.w2r_1 > 0;
  };
  protoOf(elementDescriptors$1$1).d1 = function () {
    var tmp = this.x2r_1.l2r();
    var tmp1 = this.w2r_1;
    this.w2r_1 = tmp1 - 1 | 0;
    return this.x2r_1.p2r(tmp - tmp1 | 0);
  };
  function _no_name_provided__qut3iv($this_elementDescriptors) {
    this.y2r_1 = $this_elementDescriptors;
  }
  protoOf(_no_name_provided__qut3iv).n = function () {
    // Inline function 'kotlinx.serialization.descriptors.<get-elementDescriptors>.<anonymous>' call
    return new elementDescriptors$1$1(this.y2r_1);
  };
  function elementNames$1$1($this_elementNames) {
    this.a2s_1 = $this_elementNames;
    this.z2r_1 = $this_elementNames.l2r();
  }
  protoOf(elementNames$1$1).b1 = function () {
    return this.z2r_1 > 0;
  };
  protoOf(elementNames$1$1).d1 = function () {
    var tmp = this.a2s_1.l2r();
    var tmp1 = this.z2r_1;
    this.z2r_1 = tmp1 - 1 | 0;
    return this.a2s_1.r2r(tmp - tmp1 | 0);
  };
  function _no_name_provided__qut3iv_0($this_elementNames) {
    this.b2s_1 = $this_elementNames;
  }
  protoOf(_no_name_provided__qut3iv_0).n = function () {
    // Inline function 'kotlinx.serialization.descriptors.<get-elementNames>.<anonymous>' call
    return new elementNames$1$1(this.b2s_1);
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
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.p2q_1.l(), toList(typeParameters), sdBuilder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.m2q_1 = serialName;
    this.n2q_1 = false;
    this.o2q_1 = emptyList();
    this.p2q_1 = ArrayList_init_$Create$_0();
    this.q2q_1 = HashSet_init_$Create$();
    this.r2q_1 = ArrayList_init_$Create$_0();
    this.s2q_1 = ArrayList_init_$Create$_0();
    this.t2q_1 = ArrayList_init_$Create$_0();
  }
  protoOf(ClassSerialDescriptorBuilder).c2s = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.q2q_1.y(elementName)) {
      // Inline function 'kotlinx.serialization.descriptors.ClassSerialDescriptorBuilder.element.<anonymous>' call
      var message = "Element with name '" + elementName + "' is already registered in " + this.m2q_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.plusAssign' call
    this.p2q_1.y(elementName);
    // Inline function 'kotlin.collections.plusAssign' call
    this.r2q_1.y(descriptor);
    // Inline function 'kotlin.collections.plusAssign' call
    this.s2q_1.y(annotations);
    // Inline function 'kotlin.collections.plusAssign' call
    this.t2q_1.y(isOptional);
  };
  protoOf(ClassSerialDescriptorBuilder).u2q = function (elementName, descriptor, annotations, isOptional, $super) {
    annotations = annotations === VOID ? emptyList() : annotations;
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.c2s(elementName, descriptor, annotations, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.c2s.call(this, elementName, descriptor, annotations, isOptional);
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
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.p2q_1.l(), toList(typeParameters), sdBuilder);
  }
  function _get__hashCode__tgwhef($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.o2s_1;
    _hashCode$factory();
    return this_0.o2();
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.n2s_1);
    };
  }
  function SerialDescriptorImpl$toString$lambda(this$0) {
    return function (it) {
      return this$0.r2r(it) + ': ' + this$0.p2r(it).j2r();
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.d2s_1 = serialName;
    this.e2s_1 = kind;
    this.f2s_1 = elementsCount;
    this.g2s_1 = builder.o2q_1;
    this.h2s_1 = toHashSet(builder.p2q_1);
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = builder.p2q_1;
    tmp.i2s_1 = copyToArray(this_0);
    this.j2s_1 = compactArray(builder.r2q_1);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = builder.s2q_1;
    tmp_0.k2s_1 = copyToArray(this_1);
    this.l2s_1 = toBooleanArray(builder.t2q_1);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    var this_2 = withIndex(this.i2s_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var tmp0_iterator = this_2.n();
    while (tmp0_iterator.b1()) {
      var item = tmp0_iterator.d1();
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.name2Index.<anonymous>' call
      var tmp$ret$2 = to(item.ef_1, item.df_1);
      destination.y(tmp$ret$2);
    }
    tmp_1.m2s_1 = toMap(destination);
    this.n2s_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.o2s_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  protoOf(SerialDescriptorImpl).j2r = function () {
    return this.d2s_1;
  };
  protoOf(SerialDescriptorImpl).n2r = function () {
    return this.e2s_1;
  };
  protoOf(SerialDescriptorImpl).l2r = function () {
    return this.f2s_1;
  };
  protoOf(SerialDescriptorImpl).k2r = function () {
    return this.g2s_1;
  };
  protoOf(SerialDescriptorImpl).p2s = function () {
    return this.h2s_1;
  };
  protoOf(SerialDescriptorImpl).r2r = function (index) {
    return getChecked(this.i2s_1, index);
  };
  protoOf(SerialDescriptorImpl).q2r = function (name) {
    var tmp0_elvis_lhs = this.m2s_1.u2(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(SerialDescriptorImpl).o2r = function (index) {
    return getChecked(this.k2s_1, index);
  };
  protoOf(SerialDescriptorImpl).p2r = function (index) {
    return getChecked(this.j2s_1, index);
  };
  protoOf(SerialDescriptorImpl).s2r = function (index) {
    return getChecked_0(this.l2s_1, index);
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
      if (!(this.j2r() === other.j2r())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.equals.<anonymous>' call
      if (!contentEquals(this.n2s_1, other.n2s_1)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.l2r() === other.l2r())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.l2r();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.p2r(index).j2r() === other.p2r(index).j2r())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.p2r(index).n2r(), other.p2r(index).n2r())) {
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
    var tmp = until(0, this.f2s_1);
    var tmp_0 = this.d2s_1 + '(';
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
    return ensureNotNull(getKClassFromExpression(this).e7());
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
  protoOf(AbstractDecoder).q2s = function () {
    throw SerializationException_init_$Create$_0('' + getKClassFromExpression(this) + " can't retrieve untyped values");
  };
  protoOf(AbstractDecoder).r2s = function () {
    return true;
  };
  protoOf(AbstractDecoder).s2s = function () {
    return null;
  };
  protoOf(AbstractDecoder).t2s = function () {
    var tmp = this.q2s();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).u2s = function () {
    var tmp = this.q2s();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).v2s = function () {
    var tmp = this.q2s();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).w2s = function () {
    var tmp = this.q2s();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).x2s = function () {
    var tmp = this.q2s();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).y2s = function () {
    var tmp = this.q2s();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).z2s = function () {
    var tmp = this.q2s();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).a2t = function () {
    var tmp = this.q2s();
    return tmp instanceof Char ? tmp.ib_1 : THROW_CCE();
  };
  protoOf(AbstractDecoder).b2t = function () {
    var tmp = this.q2s();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).c2t = function (enumDescriptor) {
    var tmp = this.q2s();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).d2t = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).e2t = function (deserializer, previousValue) {
    return this.f2t(deserializer);
  };
  protoOf(AbstractDecoder).g2t = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).h2t = function (descriptor) {
  };
  protoOf(AbstractDecoder).i2t = function (descriptor, index) {
    return this.t2s();
  };
  protoOf(AbstractDecoder).j2t = function (descriptor, index) {
    return this.u2s();
  };
  protoOf(AbstractDecoder).k2t = function (descriptor, index) {
    return this.v2s();
  };
  protoOf(AbstractDecoder).l2t = function (descriptor, index) {
    return this.w2s();
  };
  protoOf(AbstractDecoder).m2t = function (descriptor, index) {
    return this.x2s();
  };
  protoOf(AbstractDecoder).n2t = function (descriptor, index) {
    return this.y2s();
  };
  protoOf(AbstractDecoder).o2t = function (descriptor, index) {
    return this.z2s();
  };
  protoOf(AbstractDecoder).p2t = function (descriptor, index) {
    return this.a2t();
  };
  protoOf(AbstractDecoder).q2t = function (descriptor, index) {
    return this.b2t();
  };
  protoOf(AbstractDecoder).r2t = function (descriptor, index) {
    return this.d2t(descriptor.p2r(index));
  };
  protoOf(AbstractDecoder).s2t = function (descriptor, index, deserializer, previousValue) {
    return this.e2t(deserializer, previousValue);
  };
  function Decoder() {
  }
  function Companion() {
    this.y2t_1 = -1;
    this.z2t_1 = -3;
  }
  var Companion_instance_0;
  function Companion_getInstance_6() {
    return Companion_instance_0;
  }
  function CompositeDecoder() {
  }
  function decodeSequentially_0($this, compositeDecoder) {
    var klassName = compositeDecoder.q2t($this.k2q(), 0);
    var serializer = findPolymorphicSerializer($this, compositeDecoder, klassName);
    return compositeDecoder.t2t($this.k2q(), 1, serializer);
  }
  function AbstractPolymorphicSerializer() {
  }
  protoOf(AbstractPolymorphicSerializer).l2q = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.k2q();
    var composite = decoder.g2t(descriptor);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>' call
      var klassName = null;
      var value = null;
      if (composite.v2t()) {
        tmp$ret$0 = decodeSequentially_0(this, composite);
        break $l$block;
      }
      mainLoop: while (true) {
        var index = composite.w2t(this.k2q());
        if (index === -1) {
          break mainLoop;
        } else {
          if (index === 0) {
            klassName = composite.q2t(this.k2q(), index);
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
              var serializer = findPolymorphicSerializer(this, composite, klassName);
              value = composite.t2t(this.k2q(), index, serializer);
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
    composite.h2t(descriptor);
    return result;
  };
  protoOf(AbstractPolymorphicSerializer).z2q = function (decoder, klassName) {
    return decoder.u2t().a2u(this.y2q(), klassName);
  };
  function throwSubtypeNotRegistered(subClassName, baseClass) {
    var scope = "in the scope of '" + baseClass.e7() + "'";
    throw SerializationException_init_$Create$_0(subClassName == null ? 'Class discriminator was missing and no default polymorphic serializers were registered ' + scope : "Class '" + subClassName + "' is not registered for polymorphic serialization " + scope + '.\n' + ("To be registered automatically, class '" + subClassName + "' has to be '@Serializable', and the base class '" + baseClass.e7() + "' has to be sealed and '@Serializable'.\n") + ("Alternatively, register the serializer for '" + subClassName + "' explicitly in a corresponding SerializersModule."));
  }
  function NothingSerializer_0() {
    NothingSerializer_instance = this;
    this.b2u_1 = NothingSerialDescriptor_getInstance();
  }
  protoOf(NothingSerializer_0).k2q = function () {
    return this.b2u_1;
  };
  protoOf(NothingSerializer_0).l2q = function (decoder) {
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
    this.c2u_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Duration', STRING_getInstance());
  }
  protoOf(DurationSerializer).k2q = function () {
    return this.c2u_1;
  };
  protoOf(DurationSerializer).d2u = function (decoder) {
    return Companion_getInstance().ph(decoder.b2t());
  };
  protoOf(DurationSerializer).l2q = function (decoder) {
    return new Duration(this.d2u(decoder));
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
  protoOf(ArrayListClassDesc).j2r = function () {
    return 'kotlin.collections.ArrayList';
  };
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(HashSetClassDesc).j2r = function () {
    return 'kotlin.collections.HashSet';
  };
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(LinkedHashSetClassDesc).j2r = function () {
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
  protoOf(ArrayClassDesc).j2r = function () {
    return 'kotlin.Array';
  };
  function ListLikeDescriptor(elementDescriptor) {
    this.g2u_1 = elementDescriptor;
    this.h2u_1 = 1;
  }
  protoOf(ListLikeDescriptor).n2r = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).l2r = function () {
    return this.h2u_1;
  };
  protoOf(ListLikeDescriptor).r2r = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).q2r = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ListLikeDescriptor).s2r = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.isElementOptional.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.j2r() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(ListLikeDescriptor).o2r = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementAnnotations.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.j2r() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(ListLikeDescriptor).p2r = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementDescriptor.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.j2r() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.g2u_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.g2u_1, other.g2u_1) ? this.j2r() === other.j2r() : false)
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.g2u_1), 31) + getStringHashCode(this.j2r()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.j2r() + '(' + this.g2u_1 + ')';
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.m2u_1 = serialName;
    this.n2u_1 = keyDescriptor;
    this.o2u_1 = valueDescriptor;
    this.p2u_1 = 2;
  }
  protoOf(MapLikeDescriptor).j2r = function () {
    return this.m2u_1;
  };
  protoOf(MapLikeDescriptor).n2r = function () {
    return MAP_getInstance();
  };
  protoOf(MapLikeDescriptor).l2r = function () {
    return this.p2u_1;
  };
  protoOf(MapLikeDescriptor).r2r = function (index) {
    return index.toString();
  };
  protoOf(MapLikeDescriptor).q2r = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).s2r = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.isElementOptional.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.j2r() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(MapLikeDescriptor).o2r = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementAnnotations.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.j2r() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(MapLikeDescriptor).p2r = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementDescriptor.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.j2r() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    switch (index % 2 | 0) {
      case 0:
        tmp = this.n2u_1;
        break;
      case 1:
        tmp = this.o2u_1;
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
    if (!(this.j2r() === other.j2r()))
      return false;
    if (!equals(this.n2u_1, other.n2u_1))
      return false;
    if (!equals(this.o2u_1, other.o2u_1))
      return false;
    return true;
  };
  protoOf(MapLikeDescriptor).hashCode = function () {
    var result = getStringHashCode(this.j2r());
    result = imul(31, result) + hashCode(this.n2u_1) | 0;
    result = imul(31, result) + hashCode(this.o2u_1) | 0;
    return result;
  };
  protoOf(MapLikeDescriptor).toString = function () {
    return this.j2r() + '(' + this.n2u_1 + ', ' + this.o2u_1 + ')';
  };
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.u2u_1 = primitive.j2r() + 'Array';
  }
  protoOf(PrimitiveArrayDescriptor).j2r = function () {
    return this.u2u_1;
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.w2u_1 = new ArrayListClassDesc(element.k2q());
  }
  protoOf(ArrayListSerializer).k2q = function () {
    return this.w2u_1;
  };
  protoOf(ArrayListSerializer).z20 = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ArrayListSerializer).x2u = function (_this__u8e3s4) {
    return _this__u8e3s4.l();
  };
  protoOf(ArrayListSerializer).y2u = function (_this__u8e3s4) {
    return this.x2u(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).z2u = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(ArrayListSerializer).a2v = function (_this__u8e3s4) {
    return this.z2u(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).b2v = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(ArrayListSerializer).c2v = function (_this__u8e3s4) {
    return this.b2v((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, List) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).d2v = function (_this__u8e3s4, size) {
    return _this__u8e3s4.c3(size);
  };
  protoOf(ArrayListSerializer).e2v = function (_this__u8e3s4, size) {
    return this.d2v(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ArrayListSerializer).f2v = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.w1(index, element);
  };
  protoOf(ArrayListSerializer).g2v = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.f2v(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function HashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.n2v_1 = new HashSetClassDesc(eSerializer.k2q());
  }
  protoOf(HashSetSerializer).k2q = function () {
    return this.n2v_1;
  };
  protoOf(HashSetSerializer).z20 = function () {
    return HashSet_init_$Create$();
  };
  protoOf(HashSetSerializer).o2v = function (_this__u8e3s4) {
    return _this__u8e3s4.l();
  };
  protoOf(HashSetSerializer).y2u = function (_this__u8e3s4) {
    return this.o2v(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).p2v = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashSetSerializer).a2v = function (_this__u8e3s4) {
    return this.p2v(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).q2v = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashSetSerializer).c2v = function (_this__u8e3s4) {
    return this.q2v((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Set) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).r2v = function (_this__u8e3s4, size) {
  };
  protoOf(HashSetSerializer).e2v = function (_this__u8e3s4, size) {
    return this.r2v(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(HashSetSerializer).s2v = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.y(element);
  };
  protoOf(HashSetSerializer).g2v = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE();
    return this.s2v(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function LinkedHashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.u2v_1 = new LinkedHashSetClassDesc(eSerializer.k2q());
  }
  protoOf(LinkedHashSetSerializer).k2q = function () {
    return this.u2v_1;
  };
  protoOf(LinkedHashSetSerializer).z20 = function () {
    // Inline function 'kotlin.collections.linkedSetOf' call
    return LinkedHashSet_init_$Create$();
  };
  protoOf(LinkedHashSetSerializer).v2v = function (_this__u8e3s4) {
    return _this__u8e3s4.l();
  };
  protoOf(LinkedHashSetSerializer).y2u = function (_this__u8e3s4) {
    return this.v2v(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).w2v = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashSetSerializer).a2v = function (_this__u8e3s4) {
    return this.w2v(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).q2v = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashSetSerializer).c2v = function (_this__u8e3s4) {
    return this.q2v((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Set) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).x2v = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashSetSerializer).e2v = function (_this__u8e3s4, size) {
    return this.x2v(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(LinkedHashSetSerializer).y2v = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.y(element);
  };
  protoOf(LinkedHashSetSerializer).g2v = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE();
    return this.y2v(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.b2w_1 = new HashMapClassDesc(kSerializer.k2q(), vSerializer.k2q());
  }
  protoOf(HashMapSerializer).k2q = function () {
    return this.b2w_1;
  };
  protoOf(HashMapSerializer).z20 = function () {
    return HashMap_init_$Create$();
  };
  protoOf(HashMapSerializer).c2w = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.l(), 2);
  };
  protoOf(HashMapSerializer).y2u = function (_this__u8e3s4) {
    return this.c2w(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).d2w = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashMapSerializer).a2v = function (_this__u8e3s4) {
    return this.d2w(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).e2w = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashMapSerializer).c2v = function (_this__u8e3s4) {
    return this.e2w((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).f2w = function (_this__u8e3s4, size) {
  };
  protoOf(HashMapSerializer).e2v = function (_this__u8e3s4, size) {
    return this.f2w(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.m2w_1 = new LinkedHashMapClassDesc(kSerializer.k2q(), vSerializer.k2q());
  }
  protoOf(LinkedHashMapSerializer).k2q = function () {
    return this.m2w_1;
  };
  protoOf(LinkedHashMapSerializer).z20 = function () {
    return LinkedHashMap_init_$Create$();
  };
  protoOf(LinkedHashMapSerializer).n2w = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.l(), 2);
  };
  protoOf(LinkedHashMapSerializer).y2u = function (_this__u8e3s4) {
    return this.n2w(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).o2w = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashMapSerializer).a2v = function (_this__u8e3s4) {
    return this.o2w(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).e2w = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashMapSerializer).c2v = function (_this__u8e3s4) {
    return this.e2w((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).p2w = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashMapSerializer).e2v = function (_this__u8e3s4, size) {
    return this.p2w(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.r2w_1 = kClass;
    this.s2w_1 = new ArrayClassDesc(eSerializer.k2q());
  }
  protoOf(ReferenceArraySerializer).k2q = function () {
    return this.s2w_1;
  };
  protoOf(ReferenceArraySerializer).z20 = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ReferenceArraySerializer).t2w = function (_this__u8e3s4) {
    return _this__u8e3s4.l();
  };
  protoOf(ReferenceArraySerializer).y2u = function (_this__u8e3s4) {
    return this.t2w(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).u2w = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.r2w_1);
  };
  protoOf(ReferenceArraySerializer).a2v = function (_this__u8e3s4) {
    return this.u2w(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).v2w = function (_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asList(_this__u8e3s4));
  };
  protoOf(ReferenceArraySerializer).c2v = function (_this__u8e3s4) {
    return this.v2w((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).w2w = function (_this__u8e3s4, size) {
    return _this__u8e3s4.c3(size);
  };
  protoOf(ReferenceArraySerializer).e2v = function (_this__u8e3s4, size) {
    return this.w2w(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ReferenceArraySerializer).x2w = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.w1(index, element);
  };
  protoOf(ReferenceArraySerializer).g2v = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.x2w(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.g2w_1 = keySerializer;
    this.h2w_1 = valueSerializer;
  }
  protoOf(MapLikeSerializer).i2w = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(size >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readAll.<anonymous>' call
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var progression = step(until(0, imul(size, 2)), 2);
    var inductionVariable = progression.bb_1;
    var last = progression.cb_1;
    var step_0 = progression.db_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        this.j2w(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  protoOf(MapLikeSerializer).i2v = function (decoder, builder, startIndex, size) {
    return this.i2w(decoder, (!(builder == null) ? isInterface(builder, MutableMap) : false) ? builder : THROW_CCE(), startIndex, size);
  };
  protoOf(MapLikeSerializer).j2w = function (decoder, index, builder, checkIndex) {
    var key = decoder.t2t(this.k2q(), index, this.g2w_1);
    var tmp;
    if (checkIndex) {
      // Inline function 'kotlin.also' call
      var this_0 = decoder.w2t(this.k2q());
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
    if (builder.r2(key)) {
      var tmp_2 = this.h2w_1.k2q().n2r();
      tmp_1 = !(tmp_2 instanceof PrimitiveKind);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = decoder.s2t(this.k2q(), vIndex, this.h2w_1, getValue(builder, key));
    } else {
      tmp_0 = decoder.t2t(this.k2q(), vIndex, this.h2w_1);
    }
    var value = tmp_0;
    // Inline function 'kotlin.collections.set' call
    builder.l2(key, value);
  };
  protoOf(MapLikeSerializer).j2v = function (decoder, index, builder, checkIndex) {
    return this.j2w(decoder, index, (!(builder == null) ? isInterface(builder, MutableMap) : false) ? builder : THROW_CCE(), checkIndex);
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.h2v_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).i2v = function (decoder, builder, startIndex, size) {
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
        this.j2v(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).j2v = function (decoder, index, builder, checkIndex) {
    this.g2v(builder, index, decoder.t2t(this.k2q(), index, this.h2v_1));
  };
  function readSize($this, decoder, builder) {
    var size = decoder.x2t($this.k2q());
    $this.e2v(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).l2v = function (decoder, previous) {
    var tmp1_elvis_lhs = previous == null ? null : this.c2v(previous);
    var builder = tmp1_elvis_lhs == null ? this.z20() : tmp1_elvis_lhs;
    var startIndex = this.y2u(builder);
    var compositeDecoder = decoder.g2t(this.k2q());
    if (compositeDecoder.v2t()) {
      this.i2v(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.w2t(this.k2q());
        if (index === -1)
          break $l$loop;
        this.k2v(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.h2t(this.k2q());
    return this.a2v(builder);
  };
  protoOf(AbstractCollectionSerializer).l2q = function (decoder) {
    return this.l2v(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).k2v = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.j2v(decoder, index, builder, checkIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.j2v.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.z2w_1 = new PrimitiveArrayDescriptor(primitiveSerializer.k2q());
  }
  protoOf(PrimitiveArraySerializer).k2q = function () {
    return this.z2w_1;
  };
  protoOf(PrimitiveArraySerializer).a2x = function (_this__u8e3s4) {
    return _this__u8e3s4.b2x();
  };
  protoOf(PrimitiveArraySerializer).y2u = function (_this__u8e3s4) {
    return this.a2x(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).c2x = function (_this__u8e3s4) {
    return _this__u8e3s4.b3();
  };
  protoOf(PrimitiveArraySerializer).a2v = function (_this__u8e3s4) {
    return this.c2x(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).d2x = function (_this__u8e3s4, size) {
    return _this__u8e3s4.c3(size);
  };
  protoOf(PrimitiveArraySerializer).e2v = function (_this__u8e3s4, size) {
    return this.d2x(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(PrimitiveArraySerializer).e2x = function (_this__u8e3s4, index, element) {
    var message = 'This method lead to boxing and must not be used, use Builder.append instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).g2v = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE();
    return this.e2x(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).z20 = function () {
    return this.c2v(this.f2x());
  };
  protoOf(PrimitiveArraySerializer).l2q = function (decoder) {
    return this.l2v(decoder, null);
  };
  function PrimitiveArrayBuilder() {
  }
  protoOf(PrimitiveArrayBuilder).h2x = function (requiredCapacity, $super) {
    requiredCapacity = requiredCapacity === VOID ? this.b2x() + 1 | 0 : requiredCapacity;
    var tmp;
    if ($super === VOID) {
      this.c3(requiredCapacity);
      tmp = Unit_instance;
    } else {
      tmp = $super.c3.call(this, requiredCapacity);
    }
    return tmp;
  };
  function Companion_0() {
    Companion_instance_1 = this;
    this.i2x_1 = longArray(0);
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
      highMarks[get_lastIndex(highMarks)] = (new Long(-1, -1)).lc(elementsCount);
    }
    return highMarks;
  }
  function markHigh($this, index) {
    var slot = (index >>> 6 | 0) - 1 | 0;
    Companion_getInstance_0();
    var offsetInSlot = index & (64 - 1 | 0);
    $this.m2x_1[slot] = $this.m2x_1[slot].pc((new Long(1, 0)).lc(offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.m2x_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = slot + 1 | 0;
        Companion_getInstance_0();
        var slotOffset = imul(tmp, 64);
        var slotMarks = $this.m2x_1[slot];
        while (!slotMarks.equals(new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(slotMarks.kc());
          slotMarks = slotMarks.pc((new Long(1, 0)).lc(indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.k2x_1($this.j2x_1, index)) {
            $this.m2x_1[slot] = slotMarks;
            return index;
          }
        }
        $this.m2x_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance_7();
    this.j2x_1 = descriptor;
    this.k2x_1 = readIfAbsent;
    var elementsCount = this.j2x_1.l2r();
    Companion_getInstance_0();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      Companion_getInstance_0();
      if (elementsCount === 64) {
        tmp_0 = new Long(0, 0);
      } else {
        tmp_0 = (new Long(-1, -1)).lc(elementsCount);
      }
      tmp.l2x_1 = tmp_0;
      this.m2x_1 = Companion_getInstance_7().i2x_1;
    } else {
      this.l2x_1 = new Long(0, 0);
      this.m2x_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  protoOf(ElementMarker).n2x = function (index) {
    Companion_getInstance_0();
    if (index < 64) {
      this.l2x_1 = this.l2x_1.pc((new Long(1, 0)).lc(index));
    } else {
      markHigh(this, index);
    }
  };
  protoOf(ElementMarker).o2x = function () {
    var elementsCount = this.j2x_1.l2r();
    while (!this.l2x_1.equals(new Long(-1, -1))) {
      var index = countTrailingZeroBits(this.l2x_1.kc());
      this.l2x_1 = this.l2x_1.pc((new Long(1, 0)).lc(index));
      if (this.k2x_1(this.j2x_1, index)) {
        return index;
      }
    }
    Companion_getInstance_0();
    if (elementsCount > 64) {
      return nextUnmarkedHighIndex(this);
    }
    return -1;
  };
  function createUnmarkedDescriptor($this, serialName) {
    var d = new EnumDescriptor(serialName, $this.p2x_1.length);
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = $this.p2x_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlinx.serialization.internal.EnumSerializer.createUnmarkedDescriptor.<anonymous>' call
      d.e2y(element.sa_1);
    }
    return d;
  }
  function EnumSerializer$descriptor$delegate$lambda(this$0, $serialName) {
    return function () {
      var tmp0_elvis_lhs = this$0.q2x_1;
      return tmp0_elvis_lhs == null ? createUnmarkedDescriptor(this$0, $serialName) : tmp0_elvis_lhs;
    };
  }
  function EnumSerializer(serialName, values) {
    this.p2x_1 = values;
    this.q2x_1 = null;
    var tmp = this;
    tmp.r2x_1 = lazy_0(EnumSerializer$descriptor$delegate$lambda(this, serialName));
  }
  protoOf(EnumSerializer).k2q = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.r2x_1;
    descriptor$factory_0();
    return this_0.o2();
  };
  protoOf(EnumSerializer).l2q = function (decoder) {
    var index = decoder.c2t(this.k2q());
    if (!(0 <= index ? index <= (this.p2x_1.length - 1 | 0) : false)) {
      throw SerializationException_init_$Create$_0('' + index + ' is not among valid ' + this.k2q().j2r() + ' enum values, ' + ('values size is ' + this.p2x_1.length));
    }
    return this.p2x_1[index];
  };
  protoOf(EnumSerializer).toString = function () {
    return 'kotlinx.serialization.internal.EnumSerializer<' + this.k2q().j2r() + '>';
  };
  function _get_elementDescriptors__y23q9p($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.s2y_1;
    elementDescriptors$factory();
    return this_0.o2();
  }
  function EnumDescriptor$elementDescriptors$delegate$lambda($elementsCount, $name, this$0) {
    return function () {
      var tmp = 0;
      var tmp_0 = $elementsCount;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = fillArrayVal(Array(tmp_0), null);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        tmp_1[tmp_2] = buildSerialDescriptor($name + '.' + this$0.r2r(tmp_2), OBJECT_getInstance(), []);
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  function EnumDescriptor(name, elementsCount) {
    PluginGeneratedSerialDescriptor.call(this, name, VOID, elementsCount);
    this.r2y_1 = ENUM_getInstance();
    var tmp = this;
    tmp.s2y_1 = lazy_0(EnumDescriptor$elementDescriptors$delegate$lambda(elementsCount, name, this));
  }
  protoOf(EnumDescriptor).n2r = function () {
    return this.r2y_1;
  };
  protoOf(EnumDescriptor).p2r = function (index) {
    return getChecked(_get_elementDescriptors__y23q9p(this), index);
  };
  protoOf(EnumDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (other == null)
      return false;
    if (!(!(other == null) ? isInterface(other, SerialDescriptor) : false))
      return false;
    if (!(other.n2r() === ENUM_getInstance()))
      return false;
    if (!(this.j2r() === other.j2r()))
      return false;
    if (!equals(cachedSerialNames(this), cachedSerialNames(other)))
      return false;
    return true;
  };
  protoOf(EnumDescriptor).toString = function () {
    return joinToString(get_elementNames(this), ', ', this.j2r() + '(', ')');
  };
  protoOf(EnumDescriptor).hashCode = function () {
    var result = getStringHashCode(this.j2r());
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var tmp0_iterator = get_elementNames(this).n();
    while (tmp0_iterator.b1()) {
      var element = tmp0_iterator.d1();
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var hash = accumulator;
      var tmp = imul(31, hash);
      // Inline function 'kotlin.hashCode' call
      // Inline function 'kotlinx.serialization.internal.EnumDescriptor.hashCode.<anonymous>' call
      var tmp1_elvis_lhs = element == null ? null : hashCode(element);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var elementsHashCode = accumulator;
    result = imul(31, result) + elementsHashCode | 0;
    return result;
  };
  function descriptor$factory_0() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.k2q();
    }, null);
  }
  function elementDescriptors$factory() {
    return getPropertyCallableRef('elementDescriptors', 1, KProperty1, function (receiver) {
      return _get_elementDescriptors__y23q9p(receiver);
    }, null);
  }
  function InlinePrimitiveDescriptor(name, primitiveSerializer) {
    return new InlineClassDescriptor(name, new InlinePrimitiveDescriptor$1(primitiveSerializer));
  }
  function InlineClassDescriptor(name, generatedSerializer) {
    PluginGeneratedSerialDescriptor.call(this, name, generatedSerializer, 1);
    this.h2z_1 = true;
  }
  protoOf(InlineClassDescriptor).m2r = function () {
    return this.h2z_1;
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
      if (!(this.j2r() === other.j2r())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.InlineClassDescriptor.equals.<anonymous>' call
      if (!(other.h2z_1 ? contentEquals(this.t2y(), other.t2y()) : false)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.l2r() === other.l2r())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.l2r();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.p2r(index).j2r() === other.p2r(index).j2r())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.p2r(index).n2r(), other.p2r(index).n2r())) {
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
    this.i2z_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).j2z = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.i2z_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).k2q = function () {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).l2q = function (decoder) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function error($this) {
    throw IllegalStateException_init_$Create$('Descriptor for type `kotlin.Nothing` does not have elements');
  }
  function NothingSerialDescriptor() {
    NothingSerialDescriptor_instance = this;
    this.l2z_1 = OBJECT_getInstance();
    this.m2z_1 = 'kotlin.Nothing';
  }
  protoOf(NothingSerialDescriptor).n2r = function () {
    return this.l2z_1;
  };
  protoOf(NothingSerialDescriptor).j2r = function () {
    return this.m2z_1;
  };
  protoOf(NothingSerialDescriptor).l2r = function () {
    return 0;
  };
  protoOf(NothingSerialDescriptor).r2r = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).q2r = function (name) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).s2r = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).p2r = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).o2r = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).toString = function () {
    return 'NothingSerialDescriptor';
  };
  protoOf(NothingSerialDescriptor).equals = function (other) {
    return this === other;
  };
  protoOf(NothingSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.m2z_1) + imul(31, this.l2z_1.hashCode()) | 0;
  };
  var NothingSerialDescriptor_instance;
  function NothingSerialDescriptor_getInstance() {
    if (NothingSerialDescriptor_instance == null)
      new NothingSerialDescriptor();
    return NothingSerialDescriptor_instance;
  }
  function NullableSerializer(serializer) {
    this.n2z_1 = serializer;
    this.o2z_1 = new SerialDescriptorForNullable(this.n2z_1.k2q());
  }
  protoOf(NullableSerializer).k2q = function () {
    return this.o2z_1;
  };
  protoOf(NullableSerializer).l2q = function (decoder) {
    return decoder.r2s() ? decoder.f2t(this.n2z_1) : decoder.s2s();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.n2z_1, other.n2z_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.n2z_1);
  };
  function SerialDescriptorForNullable(original) {
    this.t2r_1 = original;
    this.u2r_1 = this.t2r_1.j2r() + '?';
    this.v2r_1 = cachedSerialNames(this.t2r_1);
  }
  protoOf(SerialDescriptorForNullable).k2r = function () {
    return this.t2r_1.k2r();
  };
  protoOf(SerialDescriptorForNullable).l2r = function () {
    return this.t2r_1.l2r();
  };
  protoOf(SerialDescriptorForNullable).m2r = function () {
    return this.t2r_1.m2r();
  };
  protoOf(SerialDescriptorForNullable).n2r = function () {
    return this.t2r_1.n2r();
  };
  protoOf(SerialDescriptorForNullable).o2r = function (index) {
    return this.t2r_1.o2r(index);
  };
  protoOf(SerialDescriptorForNullable).p2r = function (index) {
    return this.t2r_1.p2r(index);
  };
  protoOf(SerialDescriptorForNullable).q2r = function (name) {
    return this.t2r_1.q2r(name);
  };
  protoOf(SerialDescriptorForNullable).r2r = function (index) {
    return this.t2r_1.r2r(index);
  };
  protoOf(SerialDescriptorForNullable).s2r = function (index) {
    return this.t2r_1.s2r(index);
  };
  protoOf(SerialDescriptorForNullable).j2r = function () {
    return this.u2r_1;
  };
  protoOf(SerialDescriptorForNullable).p2s = function () {
    return this.v2r_1;
  };
  protoOf(SerialDescriptorForNullable).f2r = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.t2r_1, other.t2r_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return '' + this.t2r_1 + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.t2r_1), 31);
  };
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.o2q_1 = this$0.q2z_1;
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
    this.p2z_1 = objectInstance;
    this.q2z_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.r2z_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  protoOf(ObjectSerializer).k2q = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.r2z_1;
    descriptor$factory_1();
    return this_0.o2();
  };
  protoOf(ObjectSerializer).l2q = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.k2q();
    var composite = decoder.g2t(descriptor);
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.serialization.internal.ObjectSerializer.deserialize.<anonymous>' call
      if (composite.v2t()) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      }
      var index = composite.w2t(this.k2q());
      if (index === -1) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      } else {
        throw SerializationException_init_$Create$_0('Unexpected index ' + index);
      }
    }
    var result = tmp$ret$0;
    composite.h2t(descriptor);
    return this.p2z_1;
  };
  function descriptor$factory_1() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.k2q();
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
      return _this__u8e3s4.p2s();
    var result = HashSet_init_$Create$_1(_this__u8e3s4.l2r());
    var inductionVariable = 0;
    var last = _this__u8e3s4.l2r();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.r2r(i);
        result.y(element);
      }
       while (inductionVariable < last);
    return result;
  }
  function kclass(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var t = _this__u8e3s4.r7();
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
    var tmp0_elvis_lhs = _this__u8e3s4.e7();
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
    if (!(_this__u8e3s4 == null ? true : _this__u8e3s4.s())) {
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
          var element = descriptor.r2r(i);
          missingFields.y(element);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.j2r());
  }
  function _get_childSerializers__7vnyfa($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.b2y_1;
    childSerializers$factory();
    return this_0.o2();
  }
  function _get__hashCode__tgwhef_0($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.d2y_1;
    _hashCode$factory_0();
    return this_0.o2();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.w2x_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = $this.w2x_1[i];
        indices.l2(key, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.t2x_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j2z();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.t2x_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k2z();
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
          var tmp$ret$0 = item.k2q();
          destination.y(tmp$ret$0);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.t2y());
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.r2r(i) + ': ' + this$0.p2r(i).j2r();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.s2x_1 = serialName;
    this.t2x_1 = generatedSerializer;
    this.u2x_1 = elementsCount;
    this.v2x_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.u2x_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = fillArrayVal(Array(tmp_1), null);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.w2x_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.u2x_1;
    tmp_3.x2x_1 = fillArrayVal(Array(size), null);
    this.y2x_1 = null;
    this.z2x_1 = booleanArray(this.u2x_1);
    this.a2y_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.b2y_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.c2y_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.d2y_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).j2r = function () {
    return this.s2x_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).l2r = function () {
    return this.u2x_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).n2r = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).k2r = function () {
    var tmp0_elvis_lhs = this.y2x_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).p2s = function () {
    return this.a2y_1.i2();
  };
  protoOf(PluginGeneratedSerialDescriptor).t2y = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.c2y_1;
    typeParameterDescriptors$factory();
    return this_0.o2();
  };
  protoOf(PluginGeneratedSerialDescriptor).u2y = function (name, isOptional) {
    this.v2x_1 = this.v2x_1 + 1 | 0;
    this.w2x_1[this.v2x_1] = name;
    this.z2x_1[this.v2x_1] = isOptional;
    this.x2x_1[this.v2x_1] = null;
    if (this.v2x_1 === (this.u2x_1 - 1 | 0)) {
      this.a2y_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).e2y = function (name, isOptional, $super) {
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.u2y(name, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.u2y.call(this, name, isOptional);
    }
    return tmp;
  };
  protoOf(PluginGeneratedSerialDescriptor).p2r = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).k2q();
  };
  protoOf(PluginGeneratedSerialDescriptor).s2r = function (index) {
    return getChecked_0(this.z2x_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).o2r = function (index) {
    var tmp0_elvis_lhs = getChecked(this.x2x_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).r2r = function (index) {
    return getChecked(this.w2x_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).q2r = function (name) {
    var tmp0_elvis_lhs = this.a2y_1.u2(name);
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
      if (!(this.j2r() === other.j2r())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.equals.<anonymous>' call
      if (!contentEquals(this.t2y(), other.t2y())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.l2r() === other.l2r())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.l2r();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.p2r(index).j2r() === other.p2r(index).j2r())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.p2r(index).n2r(), other.p2r(index).n2r())) {
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
    var tmp = until(0, this.u2x_1);
    var tmp_0 = this.j2r() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, PluginGeneratedSerialDescriptor$toString$lambda(this));
  };
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.j2r());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var tmp0_iterator = elementDescriptors.n();
    while (tmp0_iterator.b1()) {
      var element = tmp0_iterator.d1();
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var hash = accumulator;
      var tmp = imul(31, hash);
      // Inline function 'kotlin.hashCode' call
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      var tmp0_safe_receiver = element.j2r();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var namesHash = accumulator;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator_0 = 1;
    var tmp0_iterator_0 = elementDescriptors.n();
    while (tmp0_iterator_0.b1()) {
      var element_0 = tmp0_iterator_0.d1();
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var hash_0 = accumulator_0;
      var tmp_0 = imul(31, hash_0);
      // Inline function 'kotlin.hashCode' call
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      var tmp0_safe_receiver_0 = element_0.n2r();
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
      return receiver.t2y();
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
    PrimitiveArraySerializer.call(this, serializer_1(Companion_getInstance_1()));
  }
  protoOf(CharArraySerializer_0).v2z = function (_this__u8e3s4) {
    return new CharArrayBuilder(_this__u8e3s4);
  };
  protoOf(CharArraySerializer_0).c2v = function (_this__u8e3s4) {
    return this.v2z((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).f2x = function () {
    return charArray(0);
  };
  protoOf(CharArraySerializer_0).w2z = function (decoder, index, builder, checkIndex) {
    builder.z2z(decoder.p2t(this.z2w_1, index));
  };
  protoOf(CharArraySerializer_0).j2v = function (decoder, index, builder, checkIndex) {
    return this.w2z(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).g2x = function (decoder, index, builder, checkIndex) {
    return this.w2z(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var CharArraySerializer_instance;
  function CharArraySerializer_getInstance() {
    if (CharArraySerializer_instance == null)
      new CharArraySerializer_0();
    return CharArraySerializer_instance;
  }
  function DoubleArraySerializer_0() {
    DoubleArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_2(DoubleCompanionObject_instance));
  }
  protoOf(DoubleArraySerializer_0).c30 = function (_this__u8e3s4) {
    return new DoubleArrayBuilder(_this__u8e3s4);
  };
  protoOf(DoubleArraySerializer_0).c2v = function (_this__u8e3s4) {
    return this.c30((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).f2x = function () {
    return new Float64Array(0);
  };
  protoOf(DoubleArraySerializer_0).d30 = function (decoder, index, builder, checkIndex) {
    builder.g30(decoder.o2t(this.z2w_1, index));
  };
  protoOf(DoubleArraySerializer_0).j2v = function (decoder, index, builder, checkIndex) {
    return this.d30(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).g2x = function (decoder, index, builder, checkIndex) {
    return this.d30(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var DoubleArraySerializer_instance;
  function DoubleArraySerializer_getInstance() {
    if (DoubleArraySerializer_instance == null)
      new DoubleArraySerializer_0();
    return DoubleArraySerializer_instance;
  }
  function FloatArraySerializer_0() {
    FloatArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_3(FloatCompanionObject_instance));
  }
  protoOf(FloatArraySerializer_0).j30 = function (_this__u8e3s4) {
    return new FloatArrayBuilder(_this__u8e3s4);
  };
  protoOf(FloatArraySerializer_0).c2v = function (_this__u8e3s4) {
    return this.j30((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).f2x = function () {
    return new Float32Array(0);
  };
  protoOf(FloatArraySerializer_0).k30 = function (decoder, index, builder, checkIndex) {
    builder.n30(decoder.n2t(this.z2w_1, index));
  };
  protoOf(FloatArraySerializer_0).j2v = function (decoder, index, builder, checkIndex) {
    return this.k30(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).g2x = function (decoder, index, builder, checkIndex) {
    return this.k30(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var FloatArraySerializer_instance;
  function FloatArraySerializer_getInstance() {
    if (FloatArraySerializer_instance == null)
      new FloatArraySerializer_0();
    return FloatArraySerializer_instance;
  }
  function LongArraySerializer_0() {
    LongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_4(Companion_getInstance_0()));
  }
  protoOf(LongArraySerializer_0).q30 = function (_this__u8e3s4) {
    return new LongArrayBuilder(_this__u8e3s4);
  };
  protoOf(LongArraySerializer_0).c2v = function (_this__u8e3s4) {
    return this.q30((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).f2x = function () {
    return longArray(0);
  };
  protoOf(LongArraySerializer_0).r30 = function (decoder, index, builder, checkIndex) {
    builder.u30(decoder.m2t(this.z2w_1, index));
  };
  protoOf(LongArraySerializer_0).j2v = function (decoder, index, builder, checkIndex) {
    return this.r30(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).g2x = function (decoder, index, builder, checkIndex) {
    return this.r30(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var LongArraySerializer_instance;
  function LongArraySerializer_getInstance() {
    if (LongArraySerializer_instance == null)
      new LongArraySerializer_0();
    return LongArraySerializer_instance;
  }
  function ULongArraySerializer_0() {
    ULongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_5(Companion_getInstance_2()));
  }
  protoOf(ULongArraySerializer_0).x30 = function (_this__u8e3s4) {
    return new ULongArrayBuilder(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).c2v = function (_this__u8e3s4) {
    return this.x30(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.pj_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).y30 = function () {
    return _ULongArray___init__impl__twm1l3(0);
  };
  protoOf(ULongArraySerializer_0).f2x = function () {
    return new ULongArray(this.y30());
  };
  protoOf(ULongArraySerializer_0).z30 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.r2t(this.z2w_1, index).x2s();
    var tmp$ret$0 = _ULong___init__impl__c78o9k(this_0);
    builder.c31(tmp$ret$0);
  };
  protoOf(ULongArraySerializer_0).j2v = function (decoder, index, builder, checkIndex) {
    return this.z30(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).g2x = function (decoder, index, builder, checkIndex) {
    return this.z30(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var ULongArraySerializer_instance;
  function ULongArraySerializer_getInstance() {
    if (ULongArraySerializer_instance == null)
      new ULongArraySerializer_0();
    return ULongArraySerializer_instance;
  }
  function IntArraySerializer_0() {
    IntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_6(IntCompanionObject_instance));
  }
  protoOf(IntArraySerializer_0).f31 = function (_this__u8e3s4) {
    return new IntArrayBuilder(_this__u8e3s4);
  };
  protoOf(IntArraySerializer_0).c2v = function (_this__u8e3s4) {
    return this.f31((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).f2x = function () {
    return new Int32Array(0);
  };
  protoOf(IntArraySerializer_0).g31 = function (decoder, index, builder, checkIndex) {
    builder.j31(decoder.l2t(this.z2w_1, index));
  };
  protoOf(IntArraySerializer_0).j2v = function (decoder, index, builder, checkIndex) {
    return this.g31(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).g2x = function (decoder, index, builder, checkIndex) {
    return this.g31(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var IntArraySerializer_instance;
  function IntArraySerializer_getInstance() {
    if (IntArraySerializer_instance == null)
      new IntArraySerializer_0();
    return IntArraySerializer_instance;
  }
  function UIntArraySerializer_0() {
    UIntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_7(Companion_getInstance_3()));
  }
  protoOf(UIntArraySerializer_0).m31 = function (_this__u8e3s4) {
    return new UIntArrayBuilder(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).c2v = function (_this__u8e3s4) {
    return this.m31(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.dj_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).n31 = function () {
    return _UIntArray___init__impl__ghjpc6(0);
  };
  protoOf(UIntArraySerializer_0).f2x = function () {
    return new UIntArray(this.n31());
  };
  protoOf(UIntArraySerializer_0).o31 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.r2t(this.z2w_1, index).w2s();
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(this_0);
    builder.r31(tmp$ret$0);
  };
  protoOf(UIntArraySerializer_0).j2v = function (decoder, index, builder, checkIndex) {
    return this.o31(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).g2x = function (decoder, index, builder, checkIndex) {
    return this.o31(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var UIntArraySerializer_instance;
  function UIntArraySerializer_getInstance() {
    if (UIntArraySerializer_instance == null)
      new UIntArraySerializer_0();
    return UIntArraySerializer_instance;
  }
  function ShortArraySerializer_0() {
    ShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_8(ShortCompanionObject_instance));
  }
  protoOf(ShortArraySerializer_0).u31 = function (_this__u8e3s4) {
    return new ShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(ShortArraySerializer_0).c2v = function (_this__u8e3s4) {
    return this.u31((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).f2x = function () {
    return new Int16Array(0);
  };
  protoOf(ShortArraySerializer_0).v31 = function (decoder, index, builder, checkIndex) {
    builder.y31(decoder.k2t(this.z2w_1, index));
  };
  protoOf(ShortArraySerializer_0).j2v = function (decoder, index, builder, checkIndex) {
    return this.v31(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).g2x = function (decoder, index, builder, checkIndex) {
    return this.v31(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var ShortArraySerializer_instance;
  function ShortArraySerializer_getInstance() {
    if (ShortArraySerializer_instance == null)
      new ShortArraySerializer_0();
    return ShortArraySerializer_instance;
  }
  function UShortArraySerializer_0() {
    UShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_9(Companion_getInstance_4()));
  }
  protoOf(UShortArraySerializer_0).b32 = function (_this__u8e3s4) {
    return new UShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).c2v = function (_this__u8e3s4) {
    return this.b32(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.bk_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).c32 = function () {
    return _UShortArray___init__impl__9b26ef(0);
  };
  protoOf(UShortArraySerializer_0).f2x = function () {
    return new UShortArray(this.c32());
  };
  protoOf(UShortArraySerializer_0).d32 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.r2t(this.z2w_1, index).v2s();
    var tmp$ret$0 = _UShort___init__impl__jigrne(this_0);
    builder.g32(tmp$ret$0);
  };
  protoOf(UShortArraySerializer_0).j2v = function (decoder, index, builder, checkIndex) {
    return this.d32(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).g2x = function (decoder, index, builder, checkIndex) {
    return this.d32(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var UShortArraySerializer_instance;
  function UShortArraySerializer_getInstance() {
    if (UShortArraySerializer_instance == null)
      new UShortArraySerializer_0();
    return UShortArraySerializer_instance;
  }
  function ByteArraySerializer_0() {
    ByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_10(ByteCompanionObject_instance));
  }
  protoOf(ByteArraySerializer_0).j32 = function (_this__u8e3s4) {
    return new ByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(ByteArraySerializer_0).c2v = function (_this__u8e3s4) {
    return this.j32((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).f2x = function () {
    return new Int8Array(0);
  };
  protoOf(ByteArraySerializer_0).k32 = function (decoder, index, builder, checkIndex) {
    builder.n32(decoder.j2t(this.z2w_1, index));
  };
  protoOf(ByteArraySerializer_0).j2v = function (decoder, index, builder, checkIndex) {
    return this.k32(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).g2x = function (decoder, index, builder, checkIndex) {
    return this.k32(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var ByteArraySerializer_instance;
  function ByteArraySerializer_getInstance() {
    if (ByteArraySerializer_instance == null)
      new ByteArraySerializer_0();
    return ByteArraySerializer_instance;
  }
  function UByteArraySerializer_0() {
    UByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_11(Companion_getInstance_5()));
  }
  protoOf(UByteArraySerializer_0).q32 = function (_this__u8e3s4) {
    return new UByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).c2v = function (_this__u8e3s4) {
    return this.q32(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.ri_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).r32 = function () {
    return _UByteArray___init__impl__ip4y9n(0);
  };
  protoOf(UByteArraySerializer_0).f2x = function () {
    return new UByteArray(this.r32());
  };
  protoOf(UByteArraySerializer_0).s32 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.r2t(this.z2w_1, index).u2s();
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(this_0);
    builder.v32(tmp$ret$0);
  };
  protoOf(UByteArraySerializer_0).j2v = function (decoder, index, builder, checkIndex) {
    return this.s32(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).g2x = function (decoder, index, builder, checkIndex) {
    return this.s32(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var UByteArraySerializer_instance;
  function UByteArraySerializer_getInstance() {
    if (UByteArraySerializer_instance == null)
      new UByteArraySerializer_0();
    return UByteArraySerializer_instance;
  }
  function BooleanArraySerializer_0() {
    BooleanArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_12(BooleanCompanionObject_instance));
  }
  protoOf(BooleanArraySerializer_0).y32 = function (_this__u8e3s4) {
    return new BooleanArrayBuilder(_this__u8e3s4);
  };
  protoOf(BooleanArraySerializer_0).c2v = function (_this__u8e3s4) {
    return this.y32((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).f2x = function () {
    return booleanArray(0);
  };
  protoOf(BooleanArraySerializer_0).z32 = function (decoder, index, builder, checkIndex) {
    builder.c33(decoder.i2t(this.z2w_1, index));
  };
  protoOf(BooleanArraySerializer_0).j2v = function (decoder, index, builder, checkIndex) {
    return this.z32(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).g2x = function (decoder, index, builder, checkIndex) {
    return this.z32(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function CharArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.x2z_1 = bufferWithData;
    this.y2z_1 = bufferWithData.length;
    this.c3(10);
  }
  protoOf(CharArrayBuilder).b2x = function () {
    return this.y2z_1;
  };
  protoOf(CharArrayBuilder).c3 = function (requiredCapacity) {
    if (this.x2z_1.length < requiredCapacity)
      this.x2z_1 = copyOf(this.x2z_1, coerceAtLeast(requiredCapacity, imul(this.x2z_1.length, 2)));
  };
  protoOf(CharArrayBuilder).z2z = function (c) {
    this.h2x();
    var tmp = this.x2z_1;
    var tmp1 = this.y2z_1;
    this.y2z_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(CharArrayBuilder).b3 = function () {
    return copyOf(this.x2z_1, this.y2z_1);
  };
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.e30_1 = bufferWithData;
    this.f30_1 = bufferWithData.length;
    this.c3(10);
  }
  protoOf(DoubleArrayBuilder).b2x = function () {
    return this.f30_1;
  };
  protoOf(DoubleArrayBuilder).c3 = function (requiredCapacity) {
    if (this.e30_1.length < requiredCapacity)
      this.e30_1 = copyOf_0(this.e30_1, coerceAtLeast(requiredCapacity, imul(this.e30_1.length, 2)));
  };
  protoOf(DoubleArrayBuilder).g30 = function (c) {
    this.h2x();
    var tmp = this.e30_1;
    var tmp1 = this.f30_1;
    this.f30_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(DoubleArrayBuilder).b3 = function () {
    return copyOf_0(this.e30_1, this.f30_1);
  };
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.l30_1 = bufferWithData;
    this.m30_1 = bufferWithData.length;
    this.c3(10);
  }
  protoOf(FloatArrayBuilder).b2x = function () {
    return this.m30_1;
  };
  protoOf(FloatArrayBuilder).c3 = function (requiredCapacity) {
    if (this.l30_1.length < requiredCapacity)
      this.l30_1 = copyOf_1(this.l30_1, coerceAtLeast(requiredCapacity, imul(this.l30_1.length, 2)));
  };
  protoOf(FloatArrayBuilder).n30 = function (c) {
    this.h2x();
    var tmp = this.l30_1;
    var tmp1 = this.m30_1;
    this.m30_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(FloatArrayBuilder).b3 = function () {
    return copyOf_1(this.l30_1, this.m30_1);
  };
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.s30_1 = bufferWithData;
    this.t30_1 = bufferWithData.length;
    this.c3(10);
  }
  protoOf(LongArrayBuilder).b2x = function () {
    return this.t30_1;
  };
  protoOf(LongArrayBuilder).c3 = function (requiredCapacity) {
    if (this.s30_1.length < requiredCapacity)
      this.s30_1 = copyOf_2(this.s30_1, coerceAtLeast(requiredCapacity, imul(this.s30_1.length, 2)));
  };
  protoOf(LongArrayBuilder).u30 = function (c) {
    this.h2x();
    var tmp = this.s30_1;
    var tmp1 = this.t30_1;
    this.t30_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(LongArrayBuilder).b3 = function () {
    return copyOf_2(this.s30_1, this.t30_1);
  };
  function ULongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.a31_1 = bufferWithData;
    this.b31_1 = _ULongArray___get_size__impl__ju6dtr(bufferWithData);
    this.c3(10);
  }
  protoOf(ULongArrayBuilder).b2x = function () {
    return this.b31_1;
  };
  protoOf(ULongArrayBuilder).c3 = function (requiredCapacity) {
    if (_ULongArray___get_size__impl__ju6dtr(this.a31_1) < requiredCapacity) {
      var tmp = this;
      // Inline function 'kotlin.collections.copyOf' call
      var this_0 = this.a31_1;
      var newSize = coerceAtLeast(requiredCapacity, imul(_ULongArray___get_size__impl__ju6dtr(this.a31_1), 2));
      tmp.a31_1 = _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(this_0), newSize));
    }
  };
  protoOf(ULongArrayBuilder).c31 = function (c) {
    this.h2x();
    var tmp = this.a31_1;
    var tmp1 = this.b31_1;
    this.b31_1 = tmp1 + 1 | 0;
    ULongArray__set_impl_z19mvh(tmp, tmp1, c);
  };
  protoOf(ULongArrayBuilder).d33 = function () {
    // Inline function 'kotlin.collections.copyOf' call
    var this_0 = this.a31_1;
    var newSize = this.b31_1;
    return _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(this_0), newSize));
  };
  protoOf(ULongArrayBuilder).b3 = function () {
    return new ULongArray(this.d33());
  };
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.h31_1 = bufferWithData;
    this.i31_1 = bufferWithData.length;
    this.c3(10);
  }
  protoOf(IntArrayBuilder).b2x = function () {
    return this.i31_1;
  };
  protoOf(IntArrayBuilder).c3 = function (requiredCapacity) {
    if (this.h31_1.length < requiredCapacity)
      this.h31_1 = copyOf_3(this.h31_1, coerceAtLeast(requiredCapacity, imul(this.h31_1.length, 2)));
  };
  protoOf(IntArrayBuilder).j31 = function (c) {
    this.h2x();
    var tmp = this.h31_1;
    var tmp1 = this.i31_1;
    this.i31_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(IntArrayBuilder).b3 = function () {
    return copyOf_3(this.h31_1, this.i31_1);
  };
  function UIntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.p31_1 = bufferWithData;
    this.q31_1 = _UIntArray___get_size__impl__r6l8ci(bufferWithData);
    this.c3(10);
  }
  protoOf(UIntArrayBuilder).b2x = function () {
    return this.q31_1;
  };
  protoOf(UIntArrayBuilder).c3 = function (requiredCapacity) {
    if (_UIntArray___get_size__impl__r6l8ci(this.p31_1) < requiredCapacity) {
      var tmp = this;
      // Inline function 'kotlin.collections.copyOf' call
      var this_0 = this.p31_1;
      var newSize = coerceAtLeast(requiredCapacity, imul(_UIntArray___get_size__impl__r6l8ci(this.p31_1), 2));
      tmp.p31_1 = _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(this_0), newSize));
    }
  };
  protoOf(UIntArrayBuilder).r31 = function (c) {
    this.h2x();
    var tmp = this.p31_1;
    var tmp1 = this.q31_1;
    this.q31_1 = tmp1 + 1 | 0;
    UIntArray__set_impl_7f2zu2(tmp, tmp1, c);
  };
  protoOf(UIntArrayBuilder).e33 = function () {
    // Inline function 'kotlin.collections.copyOf' call
    var this_0 = this.p31_1;
    var newSize = this.q31_1;
    return _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(this_0), newSize));
  };
  protoOf(UIntArrayBuilder).b3 = function () {
    return new UIntArray(this.e33());
  };
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.w31_1 = bufferWithData;
    this.x31_1 = bufferWithData.length;
    this.c3(10);
  }
  protoOf(ShortArrayBuilder).b2x = function () {
    return this.x31_1;
  };
  protoOf(ShortArrayBuilder).c3 = function (requiredCapacity) {
    if (this.w31_1.length < requiredCapacity)
      this.w31_1 = copyOf_4(this.w31_1, coerceAtLeast(requiredCapacity, imul(this.w31_1.length, 2)));
  };
  protoOf(ShortArrayBuilder).y31 = function (c) {
    this.h2x();
    var tmp = this.w31_1;
    var tmp1 = this.x31_1;
    this.x31_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(ShortArrayBuilder).b3 = function () {
    return copyOf_4(this.w31_1, this.x31_1);
  };
  function UShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.e32_1 = bufferWithData;
    this.f32_1 = _UShortArray___get_size__impl__jqto1b(bufferWithData);
    this.c3(10);
  }
  protoOf(UShortArrayBuilder).b2x = function () {
    return this.f32_1;
  };
  protoOf(UShortArrayBuilder).c3 = function (requiredCapacity) {
    if (_UShortArray___get_size__impl__jqto1b(this.e32_1) < requiredCapacity) {
      var tmp = this;
      // Inline function 'kotlin.collections.copyOf' call
      var this_0 = this.e32_1;
      var newSize = coerceAtLeast(requiredCapacity, imul(_UShortArray___get_size__impl__jqto1b(this.e32_1), 2));
      tmp.e32_1 = _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(this_0), newSize));
    }
  };
  protoOf(UShortArrayBuilder).g32 = function (c) {
    this.h2x();
    var tmp = this.e32_1;
    var tmp1 = this.f32_1;
    this.f32_1 = tmp1 + 1 | 0;
    UShortArray__set_impl_6d8whp(tmp, tmp1, c);
  };
  protoOf(UShortArrayBuilder).f33 = function () {
    // Inline function 'kotlin.collections.copyOf' call
    var this_0 = this.e32_1;
    var newSize = this.f32_1;
    return _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(this_0), newSize));
  };
  protoOf(UShortArrayBuilder).b3 = function () {
    return new UShortArray(this.f33());
  };
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.l32_1 = bufferWithData;
    this.m32_1 = bufferWithData.length;
    this.c3(10);
  }
  protoOf(ByteArrayBuilder).b2x = function () {
    return this.m32_1;
  };
  protoOf(ByteArrayBuilder).c3 = function (requiredCapacity) {
    if (this.l32_1.length < requiredCapacity)
      this.l32_1 = copyOf_5(this.l32_1, coerceAtLeast(requiredCapacity, imul(this.l32_1.length, 2)));
  };
  protoOf(ByteArrayBuilder).n32 = function (c) {
    this.h2x();
    var tmp = this.l32_1;
    var tmp1 = this.m32_1;
    this.m32_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(ByteArrayBuilder).b3 = function () {
    return copyOf_5(this.l32_1, this.m32_1);
  };
  function UByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.t32_1 = bufferWithData;
    this.u32_1 = _UByteArray___get_size__impl__h6pkdv(bufferWithData);
    this.c3(10);
  }
  protoOf(UByteArrayBuilder).b2x = function () {
    return this.u32_1;
  };
  protoOf(UByteArrayBuilder).c3 = function (requiredCapacity) {
    if (_UByteArray___get_size__impl__h6pkdv(this.t32_1) < requiredCapacity) {
      var tmp = this;
      // Inline function 'kotlin.collections.copyOf' call
      var this_0 = this.t32_1;
      var newSize = coerceAtLeast(requiredCapacity, imul(_UByteArray___get_size__impl__h6pkdv(this.t32_1), 2));
      tmp.t32_1 = _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(this_0), newSize));
    }
  };
  protoOf(UByteArrayBuilder).v32 = function (c) {
    this.h2x();
    var tmp = this.t32_1;
    var tmp1 = this.u32_1;
    this.u32_1 = tmp1 + 1 | 0;
    UByteArray__set_impl_jvcicn(tmp, tmp1, c);
  };
  protoOf(UByteArrayBuilder).g33 = function () {
    // Inline function 'kotlin.collections.copyOf' call
    var this_0 = this.t32_1;
    var newSize = this.u32_1;
    return _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(this_0), newSize));
  };
  protoOf(UByteArrayBuilder).b3 = function () {
    return new UByteArray(this.g33());
  };
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.a33_1 = bufferWithData;
    this.b33_1 = bufferWithData.length;
    this.c3(10);
  }
  protoOf(BooleanArrayBuilder).b2x = function () {
    return this.b33_1;
  };
  protoOf(BooleanArrayBuilder).c3 = function (requiredCapacity) {
    if (this.a33_1.length < requiredCapacity)
      this.a33_1 = copyOf_6(this.a33_1, coerceAtLeast(requiredCapacity, imul(this.a33_1.length, 2)));
  };
  protoOf(BooleanArrayBuilder).c33 = function (c) {
    this.h2x();
    var tmp = this.a33_1;
    var tmp1 = this.b33_1;
    this.b33_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(BooleanArrayBuilder).b3 = function () {
    return copyOf_6(this.a33_1, this.b33_1);
  };
  function get_BUILTIN_SERIALIZERS() {
    _init_properties_Primitives_kt__k0eto4();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function builtinSerializerOrNull(_this__u8e3s4) {
    _init_properties_Primitives_kt__k0eto4();
    var tmp = get_BUILTIN_SERIALIZERS().u2(_this__u8e3s4);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : THROW_CCE();
  }
  function StringSerializer() {
    StringSerializer_instance = this;
    this.h33_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).k2q = function () {
    return this.h33_1;
  };
  protoOf(StringSerializer).l2q = function (decoder) {
    return decoder.b2t();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.i33_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  protoOf(CharSerializer).k2q = function () {
    return this.i33_1;
  };
  protoOf(CharSerializer).j33 = function (decoder) {
    return decoder.a2t();
  };
  protoOf(CharSerializer).l2q = function (decoder) {
    return new Char(this.j33(decoder));
  };
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.k33_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).k2q = function () {
    return this.k33_1;
  };
  protoOf(DoubleSerializer).l2q = function (decoder) {
    return decoder.z2s();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.l33_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  protoOf(FloatSerializer).k2q = function () {
    return this.l33_1;
  };
  protoOf(FloatSerializer).l2q = function (decoder) {
    return decoder.y2s();
  };
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.m33_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).k2q = function () {
    return this.m33_1;
  };
  protoOf(LongSerializer).l2q = function (decoder) {
    return decoder.x2s();
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.n33_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).k2q = function () {
    return this.n33_1;
  };
  protoOf(IntSerializer).l2q = function (decoder) {
    return decoder.w2s();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.o33_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  protoOf(ShortSerializer).k2q = function () {
    return this.o33_1;
  };
  protoOf(ShortSerializer).l2q = function (decoder) {
    return decoder.v2s();
  };
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.p33_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  protoOf(ByteSerializer).k2q = function () {
    return this.p33_1;
  };
  protoOf(ByteSerializer).l2q = function (decoder) {
    return decoder.u2s();
  };
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.q33_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).k2q = function () {
    return this.q33_1;
  };
  protoOf(BooleanSerializer).l2q = function (decoder) {
    return decoder.t2s();
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.r33_1 = new ObjectSerializer('kotlin.Unit', Unit_instance);
  }
  protoOf(UnitSerializer).k2q = function () {
    return this.r33_1.k2q();
  };
  protoOf(UnitSerializer).s33 = function (decoder) {
    this.r33_1.l2q(decoder);
  };
  protoOf(UnitSerializer).l2q = function (decoder) {
    this.s33(decoder);
    return Unit_instance;
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
    this.t33_1 = serialName;
    this.u33_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor_0).j2r = function () {
    return this.t33_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).n2r = function () {
    return this.u33_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).l2r = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor_0).r2r = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).q2r = function (name) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).s2r = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).p2r = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).o2r = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).toString = function () {
    return 'PrimitiveDescriptor(' + this.t33_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor_0))
      return false;
    if (this.t33_1 === other.t33_1 ? equals(this.u33_1, other.u33_1) : false)
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor_0).hashCode = function () {
    return getStringHashCode(this.t33_1) + imul(31, this.u33_1.hashCode()) | 0;
  };
  function PrimitiveDescriptorSafe(serialName, kind) {
    _init_properties_Primitives_kt__k0eto4();
    checkName(serialName);
    return new PrimitiveSerialDescriptor_0(serialName, kind);
  }
  function checkName(serialName) {
    _init_properties_Primitives_kt__k0eto4();
    var keys = get_BUILTIN_SERIALIZERS().i2();
    var tmp0_iterator = keys.n();
    while (tmp0_iterator.b1()) {
      var primitive = tmp0_iterator.d1();
      var simpleName = capitalize(ensureNotNull(primitive.e7()));
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
      BUILTIN_SERIALIZERS = mapOf([to(PrimitiveClasses_getInstance().e8(), serializer_0(StringCompanionObject_instance)), to(getKClass(Char), serializer_1(Companion_getInstance_1())), to(PrimitiveClasses_getInstance().h8(), CharArraySerializer()), to(PrimitiveClasses_getInstance().c8(), serializer_2(DoubleCompanionObject_instance)), to(PrimitiveClasses_getInstance().n8(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().b8(), serializer_3(FloatCompanionObject_instance)), to(PrimitiveClasses_getInstance().m8(), FloatArraySerializer()), to(getKClass(Long), serializer_4(Companion_getInstance_0())), to(PrimitiveClasses_getInstance().l8(), LongArraySerializer()), to(getKClass(ULong), serializer_5(Companion_getInstance_2())), to(getKClass(ULongArray), ULongArraySerializer()), to(PrimitiveClasses_getInstance().a8(), serializer_6(IntCompanionObject_instance)), to(PrimitiveClasses_getInstance().k8(), IntArraySerializer()), to(getKClass(UInt), serializer_7(Companion_getInstance_3())), to(getKClass(UIntArray), UIntArraySerializer()), to(PrimitiveClasses_getInstance().z7(), serializer_8(ShortCompanionObject_instance)), to(PrimitiveClasses_getInstance().j8(), ShortArraySerializer()), to(getKClass(UShort), serializer_9(Companion_getInstance_4())), to(getKClass(UShortArray), UShortArraySerializer()), to(PrimitiveClasses_getInstance().y7(), serializer_10(ByteCompanionObject_instance)), to(PrimitiveClasses_getInstance().i8(), ByteArraySerializer()), to(getKClass(UByte), serializer_11(Companion_getInstance_5())), to(getKClass(UByteArray), UByteArraySerializer()), to(PrimitiveClasses_getInstance().x7(), serializer_12(BooleanCompanionObject_instance)), to(PrimitiveClasses_getInstance().g8(), BooleanArraySerializer()), to(getKClass(Unit), serializer_13(Unit_instance)), to(PrimitiveClasses_getInstance().w7(), NothingSerializer()), to(getKClass(Duration), serializer_14(Companion_getInstance()))]);
    }
  }
  function NamedValueDecoder() {
    TaggedDecoder.call(this);
  }
  protoOf(NamedValueDecoder).x33 = function (_this__u8e3s4, index) {
    return this.z33(this.y33(_this__u8e3s4, index));
  };
  protoOf(NamedValueDecoder).z33 = function (nestedName) {
    var tmp0_elvis_lhs = this.c34();
    return this.d34(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueDecoder).y33 = function (descriptor, index) {
    return descriptor.r2r(index);
  };
  protoOf(NamedValueDecoder).d34 = function (parentName, childName) {
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
    $this.r34(tag);
    var r = block();
    if (!$this.b34_1) {
      $this.s34();
    }
    $this.b34_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.e2t($deserializer, $previousValue);
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.a34_1 = ArrayList_init_$Create$_0();
    this.b34_1 = false;
  }
  protoOf(TaggedDecoder).u2t = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedDecoder).e34 = function (tag) {
    throw SerializationException_init_$Create$_0('' + getKClassFromExpression(this) + " can't retrieve untyped values");
  };
  protoOf(TaggedDecoder).f34 = function (tag) {
    return true;
  };
  protoOf(TaggedDecoder).g34 = function (tag) {
    var tmp = this.e34(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).h34 = function (tag) {
    var tmp = this.e34(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).i34 = function (tag) {
    var tmp = this.e34(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).j34 = function (tag) {
    var tmp = this.e34(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).k34 = function (tag) {
    var tmp = this.e34(tag);
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).l34 = function (tag) {
    var tmp = this.e34(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).m34 = function (tag) {
    var tmp = this.e34(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).n34 = function (tag) {
    var tmp = this.e34(tag);
    return tmp instanceof Char ? tmp.ib_1 : THROW_CCE();
  };
  protoOf(TaggedDecoder).o34 = function (tag) {
    var tmp = this.e34(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).p34 = function (tag, enumDescriptor) {
    var tmp = this.e34(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).q34 = function (tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.internal.TaggedDecoder.decodeTaggedInline.<anonymous>' call
    this.r34(tag);
    return this;
  };
  protoOf(TaggedDecoder).e2t = function (deserializer, previousValue) {
    return this.f2t(deserializer);
  };
  protoOf(TaggedDecoder).d2t = function (descriptor) {
    return this.q34(this.s34(), descriptor);
  };
  protoOf(TaggedDecoder).r2s = function () {
    var tmp0_elvis_lhs = this.c34();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.f34(currentTag);
  };
  protoOf(TaggedDecoder).s2s = function () {
    return null;
  };
  protoOf(TaggedDecoder).t2s = function () {
    return this.g34(this.s34());
  };
  protoOf(TaggedDecoder).u2s = function () {
    return this.h34(this.s34());
  };
  protoOf(TaggedDecoder).v2s = function () {
    return this.i34(this.s34());
  };
  protoOf(TaggedDecoder).w2s = function () {
    return this.j34(this.s34());
  };
  protoOf(TaggedDecoder).x2s = function () {
    return this.k34(this.s34());
  };
  protoOf(TaggedDecoder).y2s = function () {
    return this.l34(this.s34());
  };
  protoOf(TaggedDecoder).z2s = function () {
    return this.m34(this.s34());
  };
  protoOf(TaggedDecoder).a2t = function () {
    return this.n34(this.s34());
  };
  protoOf(TaggedDecoder).b2t = function () {
    return this.o34(this.s34());
  };
  protoOf(TaggedDecoder).c2t = function (enumDescriptor) {
    return this.p34(this.s34(), enumDescriptor);
  };
  protoOf(TaggedDecoder).g2t = function (descriptor) {
    return this;
  };
  protoOf(TaggedDecoder).h2t = function (descriptor) {
  };
  protoOf(TaggedDecoder).i2t = function (descriptor, index) {
    return this.g34(this.x33(descriptor, index));
  };
  protoOf(TaggedDecoder).j2t = function (descriptor, index) {
    return this.h34(this.x33(descriptor, index));
  };
  protoOf(TaggedDecoder).k2t = function (descriptor, index) {
    return this.i34(this.x33(descriptor, index));
  };
  protoOf(TaggedDecoder).l2t = function (descriptor, index) {
    return this.j34(this.x33(descriptor, index));
  };
  protoOf(TaggedDecoder).m2t = function (descriptor, index) {
    return this.k34(this.x33(descriptor, index));
  };
  protoOf(TaggedDecoder).n2t = function (descriptor, index) {
    return this.l34(this.x33(descriptor, index));
  };
  protoOf(TaggedDecoder).o2t = function (descriptor, index) {
    return this.m34(this.x33(descriptor, index));
  };
  protoOf(TaggedDecoder).p2t = function (descriptor, index) {
    return this.n34(this.x33(descriptor, index));
  };
  protoOf(TaggedDecoder).q2t = function (descriptor, index) {
    return this.o34(this.x33(descriptor, index));
  };
  protoOf(TaggedDecoder).r2t = function (descriptor, index) {
    return this.q34(this.x33(descriptor, index), descriptor.p2r(index));
  };
  protoOf(TaggedDecoder).s2t = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.x33(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).c34 = function () {
    return lastOrNull(this.a34_1);
  };
  protoOf(TaggedDecoder).r34 = function (name) {
    this.a34_1.y(name);
  };
  protoOf(TaggedDecoder).s34 = function () {
    var r = this.a34_1.k1(get_lastIndex_0(this.a34_1));
    this.b34_1 = true;
    return r;
  };
  function get_NULL() {
    _init_properties_Tuples_kt__dz0qyd();
    return NULL;
  }
  var NULL;
  function MapEntry(key, value) {
    this.t34_1 = key;
    this.u34_1 = value;
  }
  protoOf(MapEntry).n2 = function () {
    return this.t34_1;
  };
  protoOf(MapEntry).o2 = function () {
    return this.u34_1;
  };
  protoOf(MapEntry).toString = function () {
    return 'MapEntry(key=' + this.t34_1 + ', value=' + this.u34_1 + ')';
  };
  protoOf(MapEntry).hashCode = function () {
    var result = this.t34_1 == null ? 0 : hashCode(this.t34_1);
    result = imul(result, 31) + (this.u34_1 == null ? 0 : hashCode(this.u34_1)) | 0;
    return result;
  };
  protoOf(MapEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    var tmp0_other_with_cast = other instanceof MapEntry ? other : THROW_CCE();
    if (!equals(this.t34_1, tmp0_other_with_cast.t34_1))
      return false;
    if (!equals(this.u34_1, tmp0_other_with_cast.u34_1))
      return false;
    return true;
  };
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.u2q('key', $keySerializer.k2q());
      $this$buildSerialDescriptor.u2q('value', $valueSerializer.k2q());
      return Unit_instance;
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.x34_1 = buildSerialDescriptor('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(MapEntrySerializer_0).k2q = function () {
    return this.x34_1;
  };
  protoOf(MapEntrySerializer_0).y34 = function (key, value) {
    return new MapEntry(key, value);
  };
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.u2q('first', $keySerializer.k2q());
      $this$buildClassSerialDescriptor.u2q('second', $valueSerializer.k2q());
      return Unit_instance;
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.d35_1 = buildClassSerialDescriptor('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(PairSerializer_0).k2q = function () {
    return this.d35_1;
  };
  protoOf(PairSerializer_0).y34 = function (key, value) {
    return to(key, value);
  };
  function decodeSequentially_1($this, composite) {
    var a = composite.t2t($this.h35_1, 0, $this.e35_1);
    var b = composite.t2t($this.h35_1, 1, $this.f35_1);
    var c = composite.t2t($this.h35_1, 2, $this.g35_1);
    composite.h2t($this.h35_1);
    return new Triple(a, b, c);
  }
  function decodeStructure($this, composite) {
    var a = get_NULL();
    var b = get_NULL();
    var c = get_NULL();
    mainLoop: while (true) {
      var index = composite.w2t($this.h35_1);
      if (index === -1) {
        break mainLoop;
      } else {
        if (index === 0) {
          a = composite.t2t($this.h35_1, 0, $this.e35_1);
        } else {
          if (index === 1) {
            b = composite.t2t($this.h35_1, 1, $this.f35_1);
          } else {
            if (index === 2) {
              c = composite.t2t($this.h35_1, 2, $this.g35_1);
            } else {
              throw SerializationException_init_$Create$_0('Unexpected index ' + index);
            }
          }
        }
      }
    }
    composite.h2t($this.h35_1);
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
      $this$buildClassSerialDescriptor.u2q('first', this$0.e35_1.k2q());
      $this$buildClassSerialDescriptor.u2q('second', this$0.f35_1.k2q());
      $this$buildClassSerialDescriptor.u2q('third', this$0.g35_1.k2q());
      return Unit_instance;
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.e35_1 = aSerializer;
    this.f35_1 = bSerializer;
    this.g35_1 = cSerializer;
    var tmp = this;
    tmp.h35_1 = buildClassSerialDescriptor('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this));
  }
  protoOf(TripleSerializer_0).k2q = function () {
    return this.h35_1;
  };
  protoOf(TripleSerializer_0).l2q = function (decoder) {
    var composite = decoder.g2t(this.h35_1);
    if (composite.v2t()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure(this, composite);
  };
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.z34_1 = keySerializer;
    this.a35_1 = valueSerializer;
  }
  protoOf(KeyValueSerializer).l2q = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.k2q();
    var composite = decoder.g2t(descriptor);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.internal.KeyValueSerializer.deserialize.<anonymous>' call
      if (composite.v2t()) {
        var key = composite.t2t(this.k2q(), 0, this.z34_1);
        var value = composite.t2t(this.k2q(), 1, this.a35_1);
        tmp$ret$0 = this.y34(key, value);
        break $l$block;
      }
      var key_0 = get_NULL();
      var value_0 = get_NULL();
      mainLoop: while (true) {
        var idx = composite.w2t(this.k2q());
        if (idx === -1) {
          break mainLoop;
        } else {
          if (idx === 0) {
            key_0 = composite.t2t(this.k2q(), 0, this.z34_1);
          } else {
            if (idx === 1) {
              value_0 = composite.t2t(this.k2q(), 1, this.a35_1);
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
      tmp$ret$0 = this.y34(tmp, (value_0 == null ? true : !(value_0 == null)) ? value_0 : THROW_CCE());
    }
    var result = tmp$ret$0;
    composite.h2t(descriptor);
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
    this.i35_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_4(Companion_getInstance_0()));
  }
  protoOf(ULongSerializer).k2q = function () {
    return this.i35_1;
  };
  protoOf(ULongSerializer).j35 = function (decoder) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.d2t(this.i35_1).x2s();
    return _ULong___init__impl__c78o9k(this_0);
  };
  protoOf(ULongSerializer).l2q = function (decoder) {
    return new ULong(this.j35(decoder));
  };
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.k35_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_6(IntCompanionObject_instance));
  }
  protoOf(UIntSerializer).k2q = function () {
    return this.k35_1;
  };
  protoOf(UIntSerializer).l35 = function (decoder) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.d2t(this.k35_1).w2s();
    return _UInt___init__impl__l7qpdl(this_0);
  };
  protoOf(UIntSerializer).l2q = function (decoder) {
    return new UInt(this.l35(decoder));
  };
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.m35_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_8(ShortCompanionObject_instance));
  }
  protoOf(UShortSerializer).k2q = function () {
    return this.m35_1;
  };
  protoOf(UShortSerializer).n35 = function (decoder) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.d2t(this.m35_1).v2s();
    return _UShort___init__impl__jigrne(this_0);
  };
  protoOf(UShortSerializer).l2q = function (decoder) {
    return new UShort(this.n35(decoder));
  };
  var UShortSerializer_instance;
  function UShortSerializer_getInstance() {
    if (UShortSerializer_instance == null)
      new UShortSerializer();
    return UShortSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.o35_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_10(ByteCompanionObject_instance));
  }
  protoOf(UByteSerializer).k2q = function () {
    return this.o35_1;
  };
  protoOf(UByteSerializer).p35 = function (decoder) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.d2t(this.o35_1).u2s();
    return _UByte___init__impl__g9hnc4(this_0);
  };
  protoOf(UByteSerializer).l2q = function (decoder) {
    return new UByte(this.p35(decoder));
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
  protoOf(SerializersModule).c2r = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.b2r(kClass, typeArgumentsSerializers) : $super.b2r.call(this, kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider) {
    SerializersModule.call(this);
    this.q35_1 = class2ContextualFactory;
    this.r35_1 = polyBase2Serializers;
    this.s35_1 = polyBase2DefaultSerializerProvider;
    this.t35_1 = polyBase2NamedSerializers;
    this.u35_1 = polyBase2DefaultDeserializerProvider;
  }
  protoOf(SerialModuleImpl).a2u = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.t35_1.u2(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.get' call
      tmp = (isInterface(tmp0_safe_receiver, Map) ? tmp0_safe_receiver : THROW_CCE()).u2(serializedClassName);
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.u35_1.u2(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).b2r = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.q35_1.u2(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v35(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
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
  function SerializableWith(serializer) {
    this.w35_1 = serializer;
  }
  protoOf(SerializableWith).equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.w35_1.equals(tmp0_other_with_cast.w35_1))
      return false;
    return true;
  };
  protoOf(SerializableWith).hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.w35_1.hashCode();
  };
  protoOf(SerializableWith).toString = function () {
    return '@kotlinx.serialization.SerializableWith(serializer=' + this.w35_1 + ')';
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
      if (_this__u8e3s4 === PrimitiveClasses_getInstance().w7()) {
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
    return rootClass.equals(PrimitiveClasses_getInstance().d8());
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
          var tmp_1 = assocObject.s2z(args.slice());
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
    this.x35_1 = $factory;
  }
  protoOf(createCache$1).d2r = function (key) {
    return this.x35_1(key);
  };
  function createParametrizedCache$1($factory) {
    this.y35_1 = $factory;
  }
  protoOf(createParametrizedCache$1).e2r = function (key, types) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      // Inline function 'kotlinx.serialization.internal.<no name provided>.get.<anonymous>' call
      var value = this.y35_1(key, types);
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
  protoOf(SerialDescriptorImpl).f2r = get_isNullable;
  protoOf(SerialDescriptorImpl).m2r = get_isInline;
  protoOf(AbstractDecoder).t2t = decodeSerializableElement$default;
  protoOf(AbstractDecoder).f2t = decodeSerializableValue;
  protoOf(AbstractDecoder).v2t = decodeSequentially;
  protoOf(AbstractDecoder).x2t = decodeCollectionSize;
  protoOf(ListLikeDescriptor).f2r = get_isNullable;
  protoOf(ListLikeDescriptor).m2r = get_isInline;
  protoOf(ListLikeDescriptor).k2r = get_annotations;
  protoOf(MapLikeDescriptor).f2r = get_isNullable;
  protoOf(MapLikeDescriptor).m2r = get_isInline;
  protoOf(MapLikeDescriptor).k2r = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).f2r = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).m2r = get_isInline;
  protoOf(InlinePrimitiveDescriptor$1).k2z = typeParametersSerializers;
  protoOf(NothingSerialDescriptor).f2r = get_isNullable;
  protoOf(NothingSerialDescriptor).m2r = get_isInline;
  protoOf(NothingSerialDescriptor).k2r = get_annotations;
  protoOf(PrimitiveSerialDescriptor_0).f2r = get_isNullable;
  protoOf(PrimitiveSerialDescriptor_0).m2r = get_isInline;
  protoOf(PrimitiveSerialDescriptor_0).k2r = get_annotations;
  protoOf(TaggedDecoder).t2t = decodeSerializableElement$default;
  protoOf(TaggedDecoder).f2t = decodeSerializableValue;
  protoOf(TaggedDecoder).v2t = decodeSequentially;
  protoOf(TaggedDecoder).x2t = decodeCollectionSize;
  //endregion
  //region block: init
  Companion_instance_0 = new Companion();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = SerializationException_init_$Init$_0;
  _.$_$.b = SerializationException_init_$Create$_0;
  _.$_$.c = UnknownFieldException_init_$Create$;
  _.$_$.d = SEALED_getInstance;
  _.$_$.e = STRING_getInstance;
  _.$_$.f = CONTEXTUAL_getInstance;
  _.$_$.g = ENUM_getInstance;
  _.$_$.h = CLASS_getInstance;
  _.$_$.i = LIST_getInstance;
  _.$_$.j = MAP_getInstance;
  _.$_$.k = Companion_instance_0;
  _.$_$.l = BooleanSerializer_getInstance;
  _.$_$.m = DoubleSerializer_getInstance;
  _.$_$.n = StringSerializer_getInstance;
  _.$_$.o = ListSerializer;
  _.$_$.p = MapSerializer;
  _.$_$.q = serializer_0;
  _.$_$.r = serializer_9;
  _.$_$.s = serializer_7;
  _.$_$.t = serializer_11;
  _.$_$.u = serializer_5;
  _.$_$.v = PolymorphicKind;
  _.$_$.w = PrimitiveKind;
  _.$_$.x = PrimitiveSerialDescriptor;
  _.$_$.y = get_annotations;
  _.$_$.z = get_isInline;
  _.$_$.a1 = get_isNullable;
  _.$_$.b1 = SerialDescriptor;
  _.$_$.c1 = buildSerialDescriptor;
  _.$_$.d1 = getContextualDescriptor;
  _.$_$.e1 = AbstractDecoder;
  _.$_$.f1 = CompositeDecoder;
  _.$_$.g1 = Decoder;
  _.$_$.h1 = AbstractPolymorphicSerializer;
  _.$_$.i1 = ElementMarker;
  _.$_$.j1 = EnumSerializer;
  _.$_$.k1 = typeParametersSerializers;
  _.$_$.l1 = GeneratedSerializer;
  _.$_$.m1 = InlinePrimitiveDescriptor;
  _.$_$.n1 = NamedValueDecoder;
  _.$_$.o1 = PluginGeneratedSerialDescriptor;
  _.$_$.p1 = SerializerFactory;
  _.$_$.q1 = jsonCachedSerialNames;
  _.$_$.r1 = throwMissingFieldException;
  _.$_$.s1 = EmptySerializersModule_0;
  _.$_$.t1 = DeserializationStrategy;
  _.$_$.u1 = KSerializer;
  _.$_$.v1 = MissingFieldException;
  _.$_$.w1 = SerializationException;
  _.$_$.x1 = serializer;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core.js.map
