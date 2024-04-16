(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-geometry'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-geometry'.");
    }
    root['compose-multiplatform-core-compose-ui-ui-geometry'] = factory(typeof this['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined' ? {} : this['compose-multiplatform-core-compose-ui-ui-geometry'], this['kotlin-kotlin-stdlib']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.w4;
  var floatFromBits = kotlin_kotlin.$_$.db;
  var Long = kotlin_kotlin.$_$.gg;
  var numberToInt = kotlin_kotlin.$_$.ec;
  var protoOf = kotlin_kotlin.$_$.ic;
  var classMeta = kotlin_kotlin.$_$.xa;
  var setMetadataFor = kotlin_kotlin.$_$.jc;
  var toString = kotlin_kotlin.$_$.nc;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.a2;
  var objectMeta = kotlin_kotlin.$_$.hc;
  var THROW_CCE = kotlin_kotlin.$_$.ng;
  var toRawBits = kotlin_kotlin.$_$.xh;
  var toLong = kotlin_kotlin.$_$.lc;
  var isFinite = kotlin_kotlin.$_$.ih;
  var getNumberHashCode = kotlin_kotlin.$_$.gb;
  var equals = kotlin_kotlin.$_$.ab;
  //endregion
  //region block: pre-declaration
  setMetadataFor(MutableRect, 'MutableRect', classMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(Offset, 'Offset', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(Rect, 'Rect', classMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(Size, 'Size', classMeta);
  //endregion
  function _CornerRadius___get_packedValue__impl__okv4jq($this) {
    return $this;
  }
  function _CornerRadius___get_x__impl__1594cn($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'kotlin.fromBits' call
    var bits = _CornerRadius___get_packedValue__impl__okv4jq($this).mb(32).fa();
    return floatFromBits(bits);
  }
  function _CornerRadius___get_y__impl__tyvleu($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'kotlin.fromBits' call
    var bits = _CornerRadius___get_packedValue__impl__okv4jq($this).ob(new Long(-1, 0)).fa();
    return floatFromBits(bits);
  }
  function toStringAsFixed(_this__u8e3s4, digits) {
    // Inline function 'kotlin.math.max' call
    var clampedDigits = Math.max(digits, 0);
    // Inline function 'kotlin.math.pow' call
    var pow = Math.pow(10.0, clampedDigits);
    var shifted = _this__u8e3s4 * pow;
    var decimal = shifted - numberToInt(shifted);
    var tmp;
    if (decimal >= 0.5) {
      tmp = numberToInt(shifted) + 1 | 0;
    } else {
      tmp = numberToInt(shifted);
    }
    var roundedShifted = tmp;
    var rounded = roundedShifted / pow;
    var tmp_0;
    if (clampedDigits > 0) {
      tmp_0 = rounded.toString();
    } else {
      tmp_0 = numberToInt(rounded).toString();
    }
    return tmp_0;
  }
  function MutableRect(left, top, right, bottom) {
    this.q2v_1 = left;
    this.r2v_1 = top;
    this.s2v_1 = right;
    this.t2v_1 = bottom;
  }
  protoOf(MutableRect).o1o = function () {
    return this.q2v_1 >= this.s2v_1 ? true : this.r2v_1 >= this.t2v_1;
  };
  protoOf(MutableRect).u2v = function (left, top, right, bottom) {
    var tmp = this;
    // Inline function 'kotlin.math.max' call
    var b = this.q2v_1;
    tmp.q2v_1 = Math.max(left, b);
    var tmp_0 = this;
    // Inline function 'kotlin.math.max' call
    var b_0 = this.r2v_1;
    tmp_0.r2v_1 = Math.max(top, b_0);
    var tmp_1 = this;
    // Inline function 'kotlin.math.min' call
    var b_1 = this.s2v_1;
    tmp_1.s2v_1 = Math.min(right, b_1);
    var tmp_2 = this;
    // Inline function 'kotlin.math.min' call
    var b_2 = this.t2v_1;
    tmp_2.t2v_1 = Math.min(bottom, b_2);
  };
  protoOf(MutableRect).toString = function () {
    return 'MutableRect(' + (toStringAsFixed(this.q2v_1, 1) + ', ') + (toStringAsFixed(this.r2v_1, 1) + ', ') + (toStringAsFixed(this.s2v_1, 1) + ', ') + (toStringAsFixed(this.t2v_1, 1) + ')');
  };
  function toRect(_this__u8e3s4) {
    return new Rect(_this__u8e3s4.q2v_1, _this__u8e3s4.r2v_1, _this__u8e3s4.s2v_1, _this__u8e3s4.t2v_1);
  }
  function _Offset___init__impl__c168vi(packedValue) {
    return packedValue;
  }
  function _Offset___get_packedValue__impl__xh2k8q($this) {
    return $this;
  }
  function _Offset___get_x__impl__xvi35n($this) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!_Offset___get_packedValue__impl__xh2k8q($this).equals(_Offset___get_packedValue__impl__xh2k8q(Companion_getInstance().x2v_1))) {
      // Inline function 'androidx.compose.ui.geometry.Offset.<get-x>.<anonymous>' call
      var message = 'Offset is unspecified';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'kotlin.fromBits' call
    var bits = _Offset___get_packedValue__impl__xh2k8q($this).mb(32).fa();
    return floatFromBits(bits);
  }
  function _Offset___get_y__impl__8bzhra($this) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!_Offset___get_packedValue__impl__xh2k8q($this).equals(_Offset___get_packedValue__impl__xh2k8q(Companion_getInstance().x2v_1))) {
      // Inline function 'androidx.compose.ui.geometry.Offset.<get-y>.<anonymous>' call
      var message = 'Offset is unspecified';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'kotlin.fromBits' call
    var bits = _Offset___get_packedValue__impl__xh2k8q($this).ob(new Long(-1, 0)).fa();
    return floatFromBits(bits);
  }
  function Companion() {
    Companion_instance = this;
    this.v2v_1 = Offset_0(0.0, 0.0);
    var tmp = this;
    tmp.w2v_1 = Offset_0(Infinity, Infinity);
    var tmp_0 = this;
    tmp_0.x2v_1 = Offset_0(NaN, NaN);
  }
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Offset__getDistance_impl_pclvxn($this) {
    // Inline function 'kotlin.math.sqrt' call
    var x = _Offset___get_x__impl__xvi35n($this) * _Offset___get_x__impl__xvi35n($this) + _Offset___get_y__impl__8bzhra($this) * _Offset___get_y__impl__8bzhra($this);
    return Math.sqrt(x);
  }
  function Offset__getDistanceSquared_impl_97mhi6($this) {
    return _Offset___get_x__impl__xvi35n($this) * _Offset___get_x__impl__xvi35n($this) + _Offset___get_y__impl__8bzhra($this) * _Offset___get_y__impl__8bzhra($this);
  }
  function Offset__unaryMinus_impl_ssu2iv($this) {
    return Offset_0(-_Offset___get_x__impl__xvi35n($this), -_Offset___get_y__impl__8bzhra($this));
  }
  function Offset__minus_impl_hoj2c0($this, other) {
    return Offset_0(_Offset___get_x__impl__xvi35n($this) - _Offset___get_x__impl__xvi35n(other), _Offset___get_y__impl__8bzhra($this) - _Offset___get_y__impl__8bzhra(other));
  }
  function Offset__plus_impl_c78cg0($this, other) {
    return Offset_0(_Offset___get_x__impl__xvi35n($this) + _Offset___get_x__impl__xvi35n(other), _Offset___get_y__impl__8bzhra($this) + _Offset___get_y__impl__8bzhra(other));
  }
  function Offset__toString_impl_4ffbou($this) {
    var tmp;
    if (get_isSpecified($this)) {
      tmp = 'Offset(' + toStringAsFixed(_Offset___get_x__impl__xvi35n($this), 1) + ', ' + toStringAsFixed(_Offset___get_y__impl__8bzhra($this), 1) + ')';
    } else {
      tmp = 'Offset.Unspecified';
    }
    return tmp;
  }
  function Offset__hashCode_impl_hbql41($this) {
    return $this.hashCode();
  }
  function Offset__equals_impl_exf2yj($this, other) {
    if (!(other instanceof Offset))
      return false;
    var tmp0_other_with_cast = other instanceof Offset ? other.y2v_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function Offset(packedValue) {
    Companion_getInstance();
    this.y2v_1 = packedValue;
  }
  protoOf(Offset).toString = function () {
    return Offset__toString_impl_4ffbou(this.y2v_1);
  };
  protoOf(Offset).hashCode = function () {
    return Offset__hashCode_impl_hbql41(this.y2v_1);
  };
  protoOf(Offset).equals = function (other) {
    return Offset__equals_impl_exf2yj(this.y2v_1, other);
  };
  function Offset_0(x, y) {
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = toLong(toRawBits(x));
    var v2 = toLong(toRawBits(y));
    var tmp$ret$0 = v1.lb(32).pb(v2.ob(new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$0);
  }
  function get_isFinite(_this__u8e3s4) {
    return isFinite(_Offset___get_x__impl__xvi35n(_this__u8e3s4)) ? isFinite(_Offset___get_y__impl__8bzhra(_this__u8e3s4)) : false;
  }
  function get_isSpecified(_this__u8e3s4) {
    return !_Offset___get_packedValue__impl__xh2k8q(_this__u8e3s4).equals(_Offset___get_packedValue__impl__xh2k8q(Companion_getInstance().x2v_1));
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.z2v_1 = new Rect(0.0, 0.0, 0.0, 0.0);
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Rect(left, top, right, bottom) {
    Companion_getInstance_0();
    this.a2w_1 = left;
    this.b2w_1 = top;
    this.c2w_1 = right;
    this.d2w_1 = bottom;
  }
  protoOf(Rect).e2w = function () {
    return this.c2w_1 - this.a2w_1;
  };
  protoOf(Rect).f2w = function () {
    return this.d2w_1 - this.b2w_1;
  };
  protoOf(Rect).g2w = function (offset) {
    return new Rect(this.a2w_1 + _Offset___get_x__impl__xvi35n(offset), this.b2w_1 + _Offset___get_y__impl__8bzhra(offset), this.c2w_1 + _Offset___get_x__impl__xvi35n(offset), this.d2w_1 + _Offset___get_y__impl__8bzhra(offset));
  };
  protoOf(Rect).h2w = function (translateX, translateY) {
    return new Rect(this.a2w_1 + translateX, this.b2w_1 + translateY, this.c2w_1 + translateX, this.d2w_1 + translateY);
  };
  protoOf(Rect).toString = function () {
    return 'Rect.fromLTRB(' + (toStringAsFixed(this.a2w_1, 1) + ', ') + (toStringAsFixed(this.b2w_1, 1) + ', ') + (toStringAsFixed(this.c2w_1, 1) + ', ') + (toStringAsFixed(this.d2w_1, 1) + ')');
  };
  protoOf(Rect).hashCode = function () {
    var result = getNumberHashCode(this.a2w_1);
    result = imul(result, 31) + getNumberHashCode(this.b2w_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.c2w_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.d2w_1) | 0;
    return result;
  };
  protoOf(Rect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Rect))
      return false;
    var tmp0_other_with_cast = other instanceof Rect ? other : THROW_CCE();
    if (!equals(this.a2w_1, tmp0_other_with_cast.a2w_1))
      return false;
    if (!equals(this.b2w_1, tmp0_other_with_cast.b2w_1))
      return false;
    if (!equals(this.c2w_1, tmp0_other_with_cast.c2w_1))
      return false;
    if (!equals(this.d2w_1, tmp0_other_with_cast.d2w_1))
      return false;
    return true;
  };
  function Rect_0(offset, size) {
    return new Rect(_Offset___get_x__impl__xvi35n(offset), _Offset___get_y__impl__8bzhra(offset), _Offset___get_x__impl__xvi35n(offset) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(offset) + _Size___get_height__impl__a04p02(size));
  }
  function _Size___init__impl__aywn0g(packedValue) {
    return packedValue;
  }
  function _Size___get_packedValue__impl__7rlt1o($this) {
    return $this;
  }
  function _Size___get_width__impl__58y75t($this) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!_Size___get_packedValue__impl__7rlt1o($this).equals(_Size___get_packedValue__impl__7rlt1o(Companion_getInstance_1().j2w_1))) {
      // Inline function 'androidx.compose.ui.geometry.Size.<get-width>.<anonymous>' call
      var message = 'Size is unspecified';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'kotlin.fromBits' call
    var bits = _Size___get_packedValue__impl__7rlt1o($this).mb(32).fa();
    return floatFromBits(bits);
  }
  function _Size___get_height__impl__a04p02($this) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!_Size___get_packedValue__impl__7rlt1o($this).equals(_Size___get_packedValue__impl__7rlt1o(Companion_getInstance_1().j2w_1))) {
      // Inline function 'androidx.compose.ui.geometry.Size.<get-height>.<anonymous>' call
      var message = 'Size is unspecified';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'kotlin.fromBits' call
    var bits = _Size___get_packedValue__impl__7rlt1o($this).ob(new Long(-1, 0)).fa();
    return floatFromBits(bits);
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.i2w_1 = Size_0(0.0, 0.0);
    var tmp = this;
    tmp.j2w_1 = Size_0(NaN, NaN);
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Size__toString_impl_o87ni8($this) {
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.isSpecified' call
    if (!_Size___get_packedValue__impl__7rlt1o($this).equals(_Size___get_packedValue__impl__7rlt1o(Companion_getInstance_1().j2w_1))) {
      tmp = 'Size(' + toStringAsFixed(_Size___get_width__impl__58y75t($this), 1) + ', ' + toStringAsFixed(_Size___get_height__impl__a04p02($this), 1) + ')';
    } else {
      tmp = 'Size.Unspecified';
    }
    return tmp;
  }
  function Size__hashCode_impl_2h1qpd($this) {
    return $this.hashCode();
  }
  function Size__equals_impl_gzcc1f($this, other) {
    if (!(other instanceof Size))
      return false;
    var tmp0_other_with_cast = other instanceof Size ? other.k2w_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function Size(packedValue) {
    Companion_getInstance_1();
    this.k2w_1 = packedValue;
  }
  protoOf(Size).toString = function () {
    return Size__toString_impl_o87ni8(this.k2w_1);
  };
  protoOf(Size).hashCode = function () {
    return Size__hashCode_impl_2h1qpd(this.k2w_1);
  };
  protoOf(Size).equals = function (other) {
    return Size__equals_impl_gzcc1f(this.k2w_1, other);
  };
  function toRect_0(_this__u8e3s4) {
    return Rect_0(Companion_getInstance().v2v_1, _this__u8e3s4);
  }
  function Size_0(width, height) {
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = toLong(toRawBits(width));
    var v2 = toLong(toRawBits(height));
    var tmp$ret$0 = v1.lb(32).pb(v2.ob(new Long(-1, 0)));
    return _Size___init__impl__aywn0g(tmp$ret$0);
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = MutableRect;
  _.$_$.b = Offset_0;
  _.$_$.c = Offset;
  _.$_$.d = Rect_0;
  _.$_$.e = Rect;
  _.$_$.f = Size_0;
  _.$_$.g = Size;
  _.$_$.h = get_isFinite;
  _.$_$.i = toRect;
  _.$_$.j = toRect_0;
  _.$_$.k = _CornerRadius___get_x__impl__1594cn;
  _.$_$.l = _CornerRadius___get_y__impl__tyvleu;
  _.$_$.m = Offset__getDistanceSquared_impl_97mhi6;
  _.$_$.n = Offset__getDistance_impl_pclvxn;
  _.$_$.o = Offset__hashCode_impl_hbql41;
  _.$_$.p = Offset__minus_impl_hoj2c0;
  _.$_$.q = Offset__plus_impl_c78cg0;
  _.$_$.r = Offset__unaryMinus_impl_ssu2iv;
  _.$_$.s = _Offset___get_x__impl__xvi35n;
  _.$_$.t = _Offset___get_y__impl__8bzhra;
  _.$_$.u = Size__hashCode_impl_2h1qpd;
  _.$_$.v = _Size___get_height__impl__a04p02;
  _.$_$.w = _Size___get_packedValue__impl__7rlt1o;
  _.$_$.x = _Size___get_width__impl__58y75t;
  _.$_$.y = Companion_getInstance;
  _.$_$.z = Companion_getInstance_0;
  _.$_$.a1 = Companion_getInstance_1;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-ui-ui-geometry.js.map
