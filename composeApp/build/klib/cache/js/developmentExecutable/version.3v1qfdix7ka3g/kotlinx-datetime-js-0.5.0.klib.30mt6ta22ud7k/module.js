(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', '@js-joda/core', './kotlin-kotlin-stdlib.js', './kotlinx-serialization-kotlinx-serialization-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('@js-joda/core'), require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'));
  else {
    if (typeof this['@js-joda/core'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-DateTime-library-kotlinx-datetime'. Its dependency '@js-joda/core' was not found. Please, check whether '@js-joda/core' is loaded prior to 'Kotlin-DateTime-library-kotlinx-datetime'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-DateTime-library-kotlinx-datetime'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'Kotlin-DateTime-library-kotlinx-datetime'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-DateTime-library-kotlinx-datetime'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'Kotlin-DateTime-library-kotlinx-datetime'.");
    }
    root['Kotlin-DateTime-library-kotlinx-datetime'] = factory(typeof this['Kotlin-DateTime-library-kotlinx-datetime'] === 'undefined' ? {} : this['Kotlin-DateTime-library-kotlinx-datetime'], this['@js-joda/core'], this['kotlin-kotlin-stdlib'], this['kotlinx-serialization-kotlinx-serialization-core']);
  }
}(this, function (_, $module$_js_joda_core_gcv2k, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core) {
  'use strict';
  //region block: imports
  var LocalTime = $module$_js_joda_core_gcv2k.LocalTime;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.y1;
  var protoOf = kotlin_kotlin.$_$.cf;
  var objectCreate = kotlin_kotlin.$_$.af;
  var captureStack = kotlin_kotlin.$_$.kd;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.a2;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.w1;
  var IllegalArgumentException_init_$Init$_2 = kotlin_kotlin.$_$.c2;
  var IllegalArgumentException = kotlin_kotlin.$_$.tj;
  var classMeta = kotlin_kotlin.$_$.qd;
  var setMetadataFor = kotlin_kotlin.$_$.df;
  var VOID = kotlin_kotlin.$_$.g;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var THROW_CCE = kotlin_kotlin.$_$.ck;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f2;
  var objectMeta = kotlin_kotlin.$_$.bf;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var numberToInt = kotlin_kotlin.$_$.ye;
  var numberToLong = kotlin_kotlin.$_$.ze;
  var Comparable = kotlin_kotlin.$_$.mj;
  //endregion
  //region block: pre-declaration
  setMetadataFor(DateTimeFormatException, 'DateTimeFormatException', classMeta, IllegalArgumentException, VOID, DateTimeFormatException_init_$Create$);
  setMetadataFor(LocalTimeIso8601Serializer, 'LocalTimeIso8601Serializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(LocalTime_0, 'LocalTime', classMeta, VOID, [Comparable], VOID, VOID, {0: LocalTimeIso8601Serializer_getInstance});
  //endregion
  function DateTimeFormatException_init_$Init$($this) {
    IllegalArgumentException_init_$Init$($this);
    DateTimeFormatException.call($this);
    return $this;
  }
  function DateTimeFormatException_init_$Create$() {
    var tmp = DateTimeFormatException_init_$Init$(objectCreate(protoOf(DateTimeFormatException)));
    captureStack(tmp, DateTimeFormatException_init_$Create$);
    return tmp;
  }
  function DateTimeFormatException_init_$Init$_0(message, $this) {
    IllegalArgumentException_init_$Init$_0(message, $this);
    DateTimeFormatException.call($this);
    return $this;
  }
  function DateTimeFormatException_init_$Create$_0(message) {
    var tmp = DateTimeFormatException_init_$Init$_0(message, objectCreate(protoOf(DateTimeFormatException)));
    captureStack(tmp, DateTimeFormatException_init_$Create$_0);
    return tmp;
  }
  function DateTimeFormatException_init_$Init$_1(cause, $this) {
    IllegalArgumentException_init_$Init$_1(cause, $this);
    DateTimeFormatException.call($this);
    return $this;
  }
  function DateTimeFormatException_init_$Create$_1(cause) {
    var tmp = DateTimeFormatException_init_$Init$_1(cause, objectCreate(protoOf(DateTimeFormatException)));
    captureStack(tmp, DateTimeFormatException_init_$Create$_1);
    return tmp;
  }
  function DateTimeFormatException_init_$Init$_2(message, cause, $this) {
    IllegalArgumentException_init_$Init$_2(message, cause, $this);
    DateTimeFormatException.call($this);
    return $this;
  }
  function DateTimeFormatException_init_$Create$_2(message, cause) {
    var tmp = DateTimeFormatException_init_$Init$_2(message, cause, objectCreate(protoOf(DateTimeFormatException)));
    captureStack(tmp, DateTimeFormatException_init_$Create$_2);
    return tmp;
  }
  function DateTimeFormatException() {
    captureStack(this, DateTimeFormatException);
  }
  function get_NANOS_PER_MILLI() {
    return NANOS_PER_MILLI;
  }
  var NANOS_PER_MILLI;
  function LocalTimeIso8601Serializer() {
    LocalTimeIso8601Serializer_instance = this;
    this.descriptor_1 = PrimitiveSerialDescriptor('LocalTime', STRING_getInstance());
  }
  protoOf(LocalTimeIso8601Serializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(LocalTimeIso8601Serializer).deserialize_sy6x50_k$ = function (decoder) {
    return Companion_getInstance().parse_pc1q8p_k$(decoder.decodeString_x3hxsx_k$());
  };
  protoOf(LocalTimeIso8601Serializer).serialize_401kjc_k$ = function (encoder, value) {
    encoder.encodeString_424b5v_k$(value.toString());
  };
  protoOf(LocalTimeIso8601Serializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_401kjc_k$(encoder, value instanceof LocalTime_0 ? value : THROW_CCE());
  };
  var LocalTimeIso8601Serializer_instance;
  function LocalTimeIso8601Serializer_getInstance() {
    if (LocalTimeIso8601Serializer_instance == null)
      new LocalTimeIso8601Serializer();
    return LocalTimeIso8601Serializer_instance;
  }
  function isJodaDateTimeException(_this__u8e3s4) {
    return hasJsExceptionName(_this__u8e3s4, 'DateTimeException');
  }
  function isJodaDateTimeParseException(_this__u8e3s4) {
    return hasJsExceptionName(_this__u8e3s4, 'DateTimeParseException');
  }
  function LocalTime_init_$Init$(hour, minute, second, nanosecond, $this) {
    second = second === VOID ? 0 : second;
    nanosecond = nanosecond === VOID ? 0 : nanosecond;
    var tmp;
    try {
      // Inline function 'kotlinx.datetime.jsTry' call
      // Inline function 'kotlinx.datetime.LocalTime.<init>.<anonymous>' call
      tmp = LocalTime.of(hour, minute, second, nanosecond);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeException(e))
          throw IllegalArgumentException_init_$Create$(e);
        throw e;
      } else {
        throw $p;
      }
    }
    LocalTime_0.call($this, tmp);
    return $this;
  }
  function LocalTime_init_$Create$(hour, minute, second, nanosecond) {
    return LocalTime_init_$Init$(hour, minute, second, nanosecond, objectCreate(protoOf(LocalTime_0)));
  }
  function Companion() {
    Companion_instance = this;
    this.MIN_1 = new LocalTime_0(LocalTime.MIN);
    this.MAX_1 = new LocalTime_0(LocalTime.MAX);
  }
  protoOf(Companion).parse_pc1q8p_k$ = function (isoString) {
    var tmp;
    try {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.datetime.jsTry' call
      // Inline function 'kotlinx.datetime.Companion.parse.<anonymous>' call
      var this_0 = LocalTime.parse(isoString);
      // Inline function 'kotlin.contracts.contract' call
      tmp = new LocalTime_0(this_0);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeParseException(e))
          throw DateTimeFormatException_init_$Create$_1(e);
        throw e;
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  protoOf(Companion).fromSecondOfDay_ahegcx_k$ = function (secondOfDay) {
    var tmp;
    try {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.datetime.jsTry' call
      // Inline function 'kotlinx.datetime.Companion.fromSecondOfDay.<anonymous>' call
      var this_0 = LocalTime.ofSecondOfDay(secondOfDay, 0);
      // Inline function 'kotlin.contracts.contract' call
      tmp = new LocalTime_0(this_0);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        throw IllegalArgumentException_init_$Create$(e);
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  protoOf(Companion).fromMillisecondOfDay_pjhtva_k$ = function (millisecondOfDay) {
    var tmp;
    try {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.datetime.jsTry' call
      // Inline function 'kotlinx.datetime.Companion.fromMillisecondOfDay.<anonymous>' call
      var this_0 = LocalTime.ofNanoOfDay(millisecondOfDay * 1000000.0);
      // Inline function 'kotlin.contracts.contract' call
      tmp = new LocalTime_0(this_0);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        throw IllegalArgumentException_init_$Create$(e);
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  protoOf(Companion).fromNanosecondOfDay_iksazp_k$ = function (nanosecondOfDay) {
    var tmp;
    try {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.datetime.jsTry' call
      // Inline function 'kotlinx.datetime.Companion.fromNanosecondOfDay.<anonymous>' call
      var this_0 = LocalTime.ofNanoOfDay(nanosecondOfDay.toDouble_ygsx0s_k$());
      // Inline function 'kotlin.contracts.contract' call
      tmp = new LocalTime_0(this_0);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        throw IllegalArgumentException_init_$Create$(e);
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  protoOf(Companion).get_MIN_18jp6f_k$ = function () {
    return this.MIN_1;
  };
  protoOf(Companion).get_MAX_18jpd1_k$ = function () {
    return this.MAX_1;
  };
  protoOf(Companion).serializer_9w0wvi_k$ = function () {
    return LocalTimeIso8601Serializer_getInstance();
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function LocalTime_0(value) {
    Companion_getInstance();
    this.value_1 = value;
  }
  protoOf(LocalTime_0).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(LocalTime_0).get_hour_wonfal_k$ = function () {
    return this.value_1.hour();
  };
  protoOf(LocalTime_0).get_minute_gnc10d_k$ = function () {
    return this.value_1.minute();
  };
  protoOf(LocalTime_0).get_second_jf7fjx_k$ = function () {
    return this.value_1.second();
  };
  protoOf(LocalTime_0).get_nanosecond_fws9td_k$ = function () {
    return numberToInt(this.value_1.nano());
  };
  protoOf(LocalTime_0).toSecondOfDay_a2clsa_k$ = function () {
    return this.value_1.toSecondOfDay();
  };
  protoOf(LocalTime_0).toMillisecondOfDay_936hwh_k$ = function () {
    return numberToInt(this.value_1.toNanoOfDay() / get_NANOS_PER_MILLI());
  };
  protoOf(LocalTime_0).toNanosecondOfDay_dywvsy_k$ = function () {
    return numberToLong(this.value_1.toNanoOfDay());
  };
  protoOf(LocalTime_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof LocalTime_0) {
        tmp_0 = this.value_1 === other.value_1 ? true : this.value_1.equals(other.value_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(LocalTime_0).hashCode = function () {
    return this.value_1.hashCode();
  };
  protoOf(LocalTime_0).toString = function () {
    return this.value_1.toString();
  };
  protoOf(LocalTime_0).compareTo_ax7xad_k$ = function (other) {
    return this.value_1.compareTo(other.value_1);
  };
  protoOf(LocalTime_0).compareTo_hpufkf_k$ = function (other) {
    return this.compareTo_ax7xad_k$(other instanceof LocalTime_0 ? other : THROW_CCE());
  };
  function hasJsExceptionName(_this__u8e3s4, name) {
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4.name == name;
  }
  //region block: init
  NANOS_PER_MILLI = 1000000;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = LocalTime_init_$Create$;
  //endregion
  return _;
}));
