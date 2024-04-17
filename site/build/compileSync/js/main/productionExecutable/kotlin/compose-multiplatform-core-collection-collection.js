(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-collection-collection'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-collection-collection'.");
    }
    root['compose-multiplatform-core-collection-collection'] = factory(typeof this['compose-multiplatform-core-collection-collection'] === 'undefined' ? {} : this['compose-multiplatform-core-collection-collection'], this['kotlin-kotlin-stdlib']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var clz32 = Math.clz32;
  var longArray = kotlin_kotlin.$_$.e6;
  var fill = kotlin_kotlin.$_$.d3;
  var Unit_instance = kotlin_kotlin.$_$.d2;
  var Long = kotlin_kotlin.$_$.n8;
  var toLong = kotlin_kotlin.$_$.l6;
  var countTrailingZeroBits = kotlin_kotlin.$_$.u8;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.v1;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.w1;
  var ulongCompare = kotlin_kotlin.$_$.f9;
  var VOID = kotlin_kotlin.$_$.c;
  var toString = kotlin_kotlin.$_$.m6;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.b1;
  var protoOf = kotlin_kotlin.$_$.j6;
  var classMeta = kotlin_kotlin.$_$.n5;
  var setMetadataFor = kotlin_kotlin.$_$.k6;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.i1;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.w;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.q1;
  var fillArrayVal = kotlin_kotlin.$_$.r5;
  var hashCode = kotlin_kotlin.$_$.w5;
  var equals = kotlin_kotlin.$_$.q5;
  var THROW_CCE = kotlin_kotlin.$_$.p8;
  var longArrayOf = kotlin_kotlin.$_$.d6;
  var toString_0 = kotlin_kotlin.$_$.d9;
  //endregion
  //region block: pre-declaration
  setMetadataFor(IntIntMap, 'IntIntMap', classMeta);
  setMetadataFor(MutableIntIntMap, 'MutableIntIntMap', classMeta, IntIntMap, VOID, MutableIntIntMap);
  setMetadataFor(IntSet, 'IntSet', classMeta);
  setMetadataFor(MutableIntSet, 'MutableIntSet', classMeta, IntSet, VOID, MutableIntSet);
  setMetadataFor(ObjectIntMap, 'ObjectIntMap', classMeta);
  setMetadataFor(MutableObjectIntMap, 'MutableObjectIntMap', classMeta, ObjectIntMap, VOID, MutableObjectIntMap);
  setMetadataFor(ScatterMap, 'ScatterMap', classMeta);
  setMetadataFor(MutableScatterMap, 'MutableScatterMap', classMeta, ScatterMap, VOID, MutableScatterMap);
  setMetadataFor(ScatterSet, 'ScatterSet', classMeta);
  setMetadataFor(MutableScatterSet, 'MutableScatterSet', classMeta, ScatterSet, VOID, MutableScatterSet);
  //endregion
  function initializeStorage($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.ws_1 = newCapacity;
    initializeMetadata($this, newCapacity);
    $this.us_1 = new Int32Array(newCapacity);
    $this.vs_1 = new Int32Array(newCapacity);
  }
  function initializeMetadata($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + get_ClonedMetadataCount() | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.collection.MutableIntIntMap.initializeMetadata.<anonymous>' call
      fill(this_0, get_AllEmpty());
      tmp_0 = this_0;
    }
    tmp.ts_1 = tmp_0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var data = $this.ts_1;
    var value = get_Sentinel();
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    data[i] = data[i].lb((new Long(255, 0)).ib(b).hb()).mb(value.ib(b));
    initializeGrowth($this);
  }
  function initializeGrowth($this) {
    $this.dt_1 = loadedCapacity($this.et()) - $this.xs_1 | 0;
  }
  function findInsertIndex($this, key) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(key, get_MurmurHashC1());
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.ws_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = $this.ts_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].kb(b).mb(metadata[i + 1 | 0].ib(64 - b | 0).lb(toLong(b).gb().jb(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$4 = get_BitmaskLsb().w9(toLong(hash2));
      var x = g.nb(tmp$ret$4);
      var m = x.eb(get_BitmaskLsb()).lb(x.hb()).lb(get_BitmaskMsb());
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if ($this.us_1[index] === key) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.lb(this_1.eb(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.lb(g.hb().ib(6)).lb(get_BitmaskMsb()).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + get_GroupWidth() | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot($this, hash1);
    var tmp_0;
    if ($this.dt_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !$this.ts_1[offset_0 >> 3].jb((offset_0 & 7) << 3).lb(new Long(255, 0)).equals(get_Deleted());
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      adjustStorage($this);
      index_0 = findFirstAvailableSlot($this, hash1);
    }
    $this.xs_1 = $this.xs_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.dt_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if ($this.ts_1[offset_1 >> 3].jb((offset_1 & 7) << 3).lb(new Long(255, 0)).equals(get_Empty())) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.dt_1 = tmp_2 - tmp_3 | 0;
    // Inline function 'androidx.collection.MutableIntIntMap.writeMetadata' call
    var index_1 = index_0;
    var value = toLong(hash2);
    var m_0 = $this.ts_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_0 = index_1 >> 3;
    var b_0 = (index_1 & 7) << 3;
    m_0[i_0] = m_0[i_0].lb((new Long(255, 0)).ib(b_0).hb()).mb(value.ib(b_0));
    var c = $this.ws_1;
    var cloneIndex = ((index_1 - get_ClonedMetadataCount() | 0) & c) + (get_ClonedMetadataCount() & c) | 0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_1 = cloneIndex >> 3;
    var b_1 = (cloneIndex & 7) << 3;
    m_0[i_1] = m_0[i_1].lb((new Long(255, 0)).ib(b_1).hb()).mb(value.ib(b_1));
    return ~index_0;
  }
  function findFirstAvailableSlot($this, hash1) {
    var probeMask = $this.ws_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = $this.ts_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].kb(b).mb(metadata[i + 1 | 0].ib(64 - b | 0).lb(toLong(b).gb().jb(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.lb(g.hb().ib(7)).lb(get_BitmaskMsb());
      if (!m.equals(new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + get_GroupWidth() | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function adjustStorage($this) {
    var tmp;
    if ($this.ws_1 > get_GroupWidth()) {
      // Inline function 'kotlin.ULong.compareTo' call
      // Inline function 'kotlin.ULong.times' call
      // Inline function 'kotlin.toULong' call
      var this_0 = $this.xs_1;
      var this_1 = _ULong___init__impl__c78o9k(toLong(this_0));
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).w9(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.ULong.times' call
      // Inline function 'kotlin.toULong' call
      var this_3 = $this.ws_1;
      var this_4 = _ULong___init__impl__c78o9k(toLong(this_3));
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).w9(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(this_2), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      resizeStorage($this, nextCapacity($this.ws_1));
    } else {
      resizeStorage($this, nextCapacity($this.ws_1));
    }
  }
  function resizeStorage($this, newCapacity) {
    var previousMetadata = $this.ts_1;
    var previousKeys = $this.us_1;
    var previousValues = $this.vs_1;
    var previousCapacity = $this.ws_1;
    initializeStorage($this, newCapacity);
    var newKeys = $this.us_1;
    var newValues = $this.vs_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].jb((i & 7) << 3).lb(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
          var previousKey = previousKeys[i];
          // Inline function 'androidx.collection.hash' call
          var hash = imul(previousKey, get_MurmurHashC1());
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$3 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot($this, tmp$ret$3);
          // Inline function 'androidx.collection.MutableIntIntMap.writeMetadata' call
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$4 = hash_0 & 127;
          var value = toLong(tmp$ret$4);
          var m = $this.ts_1;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          m[i_0] = m[i_0].lb((new Long(255, 0)).ib(b).hb()).mb(value.ib(b));
          var c = $this.ws_1;
          var cloneIndex = ((index - get_ClonedMetadataCount() | 0) & c) + (get_ClonedMetadataCount() & c) | 0;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_1 = cloneIndex >> 3;
          var b_0 = (cloneIndex & 7) << 3;
          m[i_1] = m[i_1].lb((new Long(255, 0)).ib(b_0).hb()).mb(value.ib(b_0));
          newKeys[index] = previousKey;
          newValues[index] = previousValues[i];
        }
      }
       while (inductionVariable < previousCapacity);
  }
  function MutableIntIntMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? get_DefaultScatterCapacity() : initialCapacity;
    IntIntMap.call(this);
    this.dt_1 = 0;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'androidx.collection.MutableIntIntMap.<anonymous>' call
      var message = 'Capacity must be a positive value.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    initializeStorage(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableIntIntMap).ft = function (key, value) {
    var index = findInsertIndex(this, key);
    if (index < 0)
      index = ~index;
    this.us_1[index] = key;
    this.vs_1[index] = value;
  };
  function IntIntMap() {
    this.ts_1 = get_EmptyGroup();
    this.us_1 = get_EmptyIntArray();
    this.vs_1 = get_EmptyIntArray();
    this.ws_1 = 0;
    this.xs_1 = 0;
  }
  protoOf(IntIntMap).et = function () {
    return this.ws_1;
  };
  protoOf(IntIntMap).i = function () {
    return this.xs_1;
  };
  protoOf(IntIntMap).o = function () {
    return this.xs_1 === 0;
  };
  protoOf(IntIntMap).j = function (key) {
    var index = this.ht(key);
    if (index < 0) {
      throw NoSuchElementException_init_$Create$('Cannot find value for key ' + key);
    }
    return this.vs_1[index];
  };
  protoOf(IntIntMap).gt = function (key) {
    return this.ht(key) >= 0;
  };
  protoOf(IntIntMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.IntIntMap.forEach' call
    var k = this.us_1;
    var v = this.vs_1;
    $l$block: {
      // Inline function 'androidx.collection.IntIntMap.forEachIndexed' call
      var m = this.ts_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.lb(this_0.hb().ib(7)).lb(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.lb(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.IntIntMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.IntIntMap.hashCode.<anonymous>' call
                  hash = hash + (k[index] ^ v[index]) | 0;
                }
                slot = slot.jb(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return hash;
  };
  protoOf(IntIntMap).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof IntIntMap)) {
      return false;
    }
    if (!(other.i() === this.i())) {
      return false;
    }
    // Inline function 'androidx.collection.IntIntMap.forEach' call
    var k = this.us_1;
    var v = this.vs_1;
    $l$block: {
      // Inline function 'androidx.collection.IntIntMap.forEachIndexed' call
      var m = this.ts_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.lb(this_0.hb().ib(7)).lb(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.lb(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.IntIntMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.IntIntMap.equals.<anonymous>' call
                  var key = k[index];
                  if (!(v[index] === other.j(key))) {
                    return false;
                  }
                }
                slot = slot.jb(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return true;
  };
  protoOf(IntIntMap).toString = function () {
    if (this.o()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().r5(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.IntIntMap.forEach' call
    var k = this.us_1;
    var v = this.vs_1;
    $l$block: {
      // Inline function 'androidx.collection.IntIntMap.forEachIndexed' call
      var m = this.ts_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.lb(this_0.hb().ib(7)).lb(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.lb(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  // Inline function 'androidx.collection.IntIntMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.IntIntMap.toString.<anonymous>' call
                  var key = k[index];
                  var value = v[index];
                  s.x7(key);
                  s.q5('=');
                  s.x7(value);
                  i = i + 1 | 0;
                  if (i < this.xs_1) {
                    s.r5(_Char___init__impl__6a9atx(44)).r5(_Char___init__impl__6a9atx(32));
                  }
                }
                slot = slot.jb(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i_0 === lastIndex));
    }
    return s.r5(_Char___init__impl__6a9atx(125)).toString();
  };
  protoOf(IntIntMap).ht = function (key) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(key, get_MurmurHashC1());
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = this.ws_1;
    // Inline function 'androidx.collection.h1' call
    var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = this.ts_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].kb(b).mb(metadata[i + 1 | 0].ib(64 - b | 0).lb(toLong(b).gb().jb(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$4 = get_BitmaskLsb().w9(toLong(hash2));
      var x = g.nb(tmp$ret$4);
      var m = x.eb(get_BitmaskLsb()).lb(x.hb()).lb(get_BitmaskMsb());
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if (this.us_1[index] === key) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.lb(this_1.eb(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.lb(g.hb().ib(6)).lb(get_BitmaskMsb()).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + get_GroupWidth() | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    return -1;
  };
  var EmptyIntSet;
  function get_EmptyIntArray() {
    _init_properties_IntSet_kt__km4dgt();
    return EmptyIntArray;
  }
  var EmptyIntArray;
  function IntSet() {
    this.it_1 = get_EmptyGroup();
    this.jt_1 = get_EmptyIntArray();
    this.kt_1 = 0;
    this.lt_1 = 0;
  }
  protoOf(IntSet).et = function () {
    return this.kt_1;
  };
  protoOf(IntSet).gt = function (element) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.IntSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(element, get_MurmurHashC1());
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.kt_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        // Inline function 'androidx.collection.group' call
        var metadata = this.it_1;
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = metadata[i].kb(b).mb(metadata[i + 1 | 0].ib(64 - b | 0).lb(toLong(b).gb().jb(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$4 = get_BitmaskLsb().w9(toLong(hash2));
        var x = g.nb(tmp$ret$4);
        var m = x.eb(get_BitmaskLsb()).lb(x.hb()).lb(get_BitmaskMsb());
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (this.jt_1[index] === element) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.lb(this_1.eb(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.lb(g.hb().ib(6)).lb(get_BitmaskMsb()).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + get_GroupWidth() | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$9 = -1;
    }
    return tmp$ret$9 >= 0;
  };
  protoOf(IntSet).mt = function (separator, prefix, postfix, limit, truncated) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    $l$block: {
      // Inline function 'androidx.collection.IntSet.joinToString.<anonymous>' call
      this_0.w7(prefix);
      var index = 0;
      // Inline function 'androidx.collection.IntSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var k = this.jt_1;
      $l$block_0: {
        // Inline function 'androidx.collection.IntSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = this.it_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            if (!this_1.lb(this_1.hb().ib(7)).lb(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.lb(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                    var index_0 = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.IntSet.forEach.<anonymous>' call
                    // Inline function 'androidx.collection.IntSet.joinToString.<anonymous>.<anonymous>' call
                    var element = k[index_0];
                    if (index === limit) {
                      this_0.w7(truncated);
                      break $l$block;
                    }
                    if (!(index === 0)) {
                      this_0.w7(separator);
                    }
                    this_0.x7(element);
                    index = index + 1 | 0;
                  }
                  slot = slot.jb(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block_0;
              }
            }
          }
           while (!(i === lastIndex));
      }
      this_0.w7(postfix);
    }
    return this_0.toString();
  };
  protoOf(IntSet).nt = function (separator, prefix, postfix, limit, truncated, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    return $super === VOID ? this.mt(separator, prefix, postfix, limit, truncated) : $super.mt.call(this, separator, prefix, postfix, limit, truncated);
  };
  protoOf(IntSet).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.IntSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = this.jt_1;
    $l$block: {
      // Inline function 'androidx.collection.IntSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.it_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.lb(this_0.hb().ib(7)).lb(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.lb(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.IntSet.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.IntSet.hashCode.<anonymous>' call
                  hash = hash + k[index] | 0;
                }
                slot = slot.jb(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return hash;
  };
  protoOf(IntSet).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof IntSet)) {
      return false;
    }
    if (!(other.lt_1 === this.lt_1)) {
      return false;
    }
    // Inline function 'androidx.collection.IntSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = this.jt_1;
    $l$block: {
      // Inline function 'androidx.collection.IntSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.it_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.lb(this_0.hb().ib(7)).lb(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.lb(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.IntSet.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.IntSet.equals.<anonymous>' call
                  var element = k[index];
                  if (!other.gt(element)) {
                    return false;
                  }
                }
                slot = slot.jb(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return true;
  };
  protoOf(IntSet).toString = function () {
    return this.nt(VOID, '[', ']');
  };
  function initializeStorage_0($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.kt_1 = newCapacity;
    initializeMetadata_0($this, newCapacity);
    $this.jt_1 = new Int32Array(newCapacity);
  }
  function initializeMetadata_0($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + get_ClonedMetadataCount() | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.collection.MutableIntSet.initializeMetadata.<anonymous>' call
      fill(this_0, get_AllEmpty());
      tmp_0 = this_0;
    }
    tmp.it_1 = tmp_0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var data = $this.it_1;
    var value = get_Sentinel();
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    data[i] = data[i].lb((new Long(255, 0)).ib(b).hb()).mb(value.ib(b));
    initializeGrowth_0($this);
  }
  function initializeGrowth_0($this) {
    $this.st_1 = loadedCapacity($this.et()) - $this.lt_1 | 0;
  }
  function MutableIntSet(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? get_DefaultScatterCapacity() : initialCapacity;
    IntSet.call(this);
    this.st_1 = 0;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'androidx.collection.MutableIntSet.<anonymous>' call
      var message = 'Capacity must be a positive value.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    initializeStorage_0(this, unloadedCapacity(initialCapacity));
  }
  var properties_initialized_IntSet_kt_za7tcl;
  function _init_properties_IntSet_kt__km4dgt() {
    if (!properties_initialized_IntSet_kt_za7tcl) {
      properties_initialized_IntSet_kt_za7tcl = true;
      EmptyIntSet = new MutableIntSet(0);
      EmptyIntArray = new Int32Array(0);
    }
  }
  function initializeStorage_1($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.wt_1 = newCapacity;
    initializeMetadata_1($this, newCapacity);
    var tmp_0 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.ut_1 = fillArrayVal(Array(newCapacity), null);
    $this.vt_1 = new Int32Array(newCapacity);
  }
  function initializeMetadata_1($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + get_ClonedMetadataCount() | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.collection.MutableObjectIntMap.initializeMetadata.<anonymous>' call
      fill(this_0, get_AllEmpty());
      tmp_0 = this_0;
    }
    tmp.tt_1 = tmp_0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var data = $this.tt_1;
    var value = get_Sentinel();
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    data[i] = data[i].lb((new Long(255, 0)).ib(b).hb()).mb(value.ib(b));
    initializeGrowth_1($this);
  }
  function initializeGrowth_1($this) {
    $this.du_1 = loadedCapacity($this.et()) - $this.xt_1 | 0;
  }
  function findIndex($this, key) {
    // Inline function 'androidx.collection.hash' call
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var hash = imul(tmp$ret$0, get_MurmurHashC1());
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.wt_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = $this.tt_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].kb(b).mb(metadata[i + 1 | 0].ib(64 - b | 0).lb(toLong(b).gb().jb(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$5 = get_BitmaskLsb().w9(toLong(hash2));
      var x = g.nb(tmp$ret$5);
      var m = x.eb(get_BitmaskLsb()).lb(x.hb()).lb(get_BitmaskMsb());
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if (equals($this.ut_1[index], key)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.lb(this_1.eb(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.lb(g.hb().ib(6)).lb(get_BitmaskMsb()).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + get_GroupWidth() | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_0($this, hash1);
    var tmp_0;
    if ($this.du_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !$this.tt_1[offset_0 >> 3].jb((offset_0 & 7) << 3).lb(new Long(255, 0)).equals(get_Deleted());
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      adjustStorage_0($this);
      index_0 = findFirstAvailableSlot_0($this, hash1);
    }
    $this.xt_1 = $this.xt_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.du_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if ($this.tt_1[offset_1 >> 3].jb((offset_1 & 7) << 3).lb(new Long(255, 0)).equals(get_Empty())) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.du_1 = tmp_2 - tmp_3 | 0;
    // Inline function 'androidx.collection.MutableObjectIntMap.writeMetadata' call
    var index_1 = index_0;
    var value = toLong(hash2);
    var m_0 = $this.tt_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_0 = index_1 >> 3;
    var b_0 = (index_1 & 7) << 3;
    m_0[i_0] = m_0[i_0].lb((new Long(255, 0)).ib(b_0).hb()).mb(value.ib(b_0));
    var c = $this.wt_1;
    var cloneIndex = ((index_1 - get_ClonedMetadataCount() | 0) & c) + (get_ClonedMetadataCount() & c) | 0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_1 = cloneIndex >> 3;
    var b_1 = (cloneIndex & 7) << 3;
    m_0[i_1] = m_0[i_1].lb((new Long(255, 0)).ib(b_1).hb()).mb(value.ib(b_1));
    return ~index_0;
  }
  function findFirstAvailableSlot_0($this, hash1) {
    var probeMask = $this.wt_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = $this.tt_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].kb(b).mb(metadata[i + 1 | 0].ib(64 - b | 0).lb(toLong(b).gb().jb(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.lb(g.hb().ib(7)).lb(get_BitmaskMsb());
      if (!m.equals(new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + get_GroupWidth() | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function adjustStorage_0($this) {
    var tmp;
    if ($this.wt_1 > get_GroupWidth()) {
      // Inline function 'kotlin.ULong.compareTo' call
      // Inline function 'kotlin.ULong.times' call
      // Inline function 'kotlin.toULong' call
      var this_0 = $this.xt_1;
      var this_1 = _ULong___init__impl__c78o9k(toLong(this_0));
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).w9(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.ULong.times' call
      // Inline function 'kotlin.toULong' call
      var this_3 = $this.wt_1;
      var this_4 = _ULong___init__impl__c78o9k(toLong(this_3));
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).w9(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(this_2), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      resizeStorage_0($this, nextCapacity($this.wt_1));
    } else {
      resizeStorage_0($this, nextCapacity($this.wt_1));
    }
  }
  function resizeStorage_0($this, newCapacity) {
    var previousMetadata = $this.tt_1;
    var previousKeys = $this.ut_1;
    var previousValues = $this.vt_1;
    var previousCapacity = $this.wt_1;
    initializeStorage_1($this, newCapacity);
    var newKeys = $this.ut_1;
    var newValues = $this.vt_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].jb((i & 7) << 3).lb(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
          var previousKey = previousKeys[i];
          // Inline function 'androidx.collection.hash' call
          // Inline function 'kotlin.hashCode' call
          var tmp1_elvis_lhs = previousKey == null ? null : hashCode(previousKey);
          var tmp$ret$2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
          var hash = imul(tmp$ret$2, get_MurmurHashC1());
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$4 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_0($this, tmp$ret$4);
          // Inline function 'androidx.collection.MutableObjectIntMap.writeMetadata' call
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$5 = hash_0 & 127;
          var value = toLong(tmp$ret$5);
          var m = $this.tt_1;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          m[i_0] = m[i_0].lb((new Long(255, 0)).ib(b).hb()).mb(value.ib(b));
          var c = $this.wt_1;
          var cloneIndex = ((index - get_ClonedMetadataCount() | 0) & c) + (get_ClonedMetadataCount() & c) | 0;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_1 = cloneIndex >> 3;
          var b_0 = (cloneIndex & 7) << 3;
          m[i_1] = m[i_1].lb((new Long(255, 0)).ib(b_0).hb()).mb(value.ib(b_0));
          newKeys[index] = previousKey;
          newValues[index] = previousValues[i];
        }
      }
       while (inductionVariable < previousCapacity);
  }
  function MutableObjectIntMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? get_DefaultScatterCapacity() : initialCapacity;
    ObjectIntMap.call(this);
    this.du_1 = 0;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'androidx.collection.MutableObjectIntMap.<anonymous>' call
      var message = 'Capacity must be a positive value.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    initializeStorage_1(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableObjectIntMap).eu = function (key, value, default_0) {
    var index = findIndex(this, key);
    var previous = default_0;
    if (index < 0) {
      index = ~index;
    } else {
      previous = this.vt_1[index];
    }
    this.ut_1[index] = key;
    this.vt_1[index] = value;
    return previous;
  };
  protoOf(MutableObjectIntMap).fu = function (index) {
    this.xt_1 = this.xt_1 - 1 | 0;
    // Inline function 'androidx.collection.MutableObjectIntMap.writeMetadata' call
    var value = get_Deleted();
    var m = this.tt_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i = index >> 3;
    var b = (index & 7) << 3;
    m[i] = m[i].lb((new Long(255, 0)).ib(b).hb()).mb(value.ib(b));
    var c = this.wt_1;
    var cloneIndex = ((index - get_ClonedMetadataCount() | 0) & c) + (get_ClonedMetadataCount() & c) | 0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_0 = cloneIndex >> 3;
    var b_0 = (cloneIndex & 7) << 3;
    m[i_0] = m[i_0].lb((new Long(255, 0)).ib(b_0).hb()).mb(value.ib(b_0));
    this.ut_1[index] = null;
  };
  function ObjectIntMap() {
    this.tt_1 = get_EmptyGroup();
    this.ut_1 = get_EMPTY_OBJECTS();
    this.vt_1 = get_EmptyIntArray();
    this.wt_1 = 0;
    this.xt_1 = 0;
  }
  protoOf(ObjectIntMap).et = function () {
    return this.wt_1;
  };
  protoOf(ObjectIntMap).i = function () {
    return this.xt_1;
  };
  protoOf(ObjectIntMap).o = function () {
    return this.xt_1 === 0;
  };
  protoOf(ObjectIntMap).p2 = function (key) {
    var index = this.gu(key);
    if (index < 0) {
      throw NoSuchElementException_init_$Create$('There is no key ' + key + ' in the map');
    }
    return this.vt_1[index];
  };
  protoOf(ObjectIntMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.ObjectIntMap.forEach' call
    var k = this.ut_1;
    var v = this.vt_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
      var m = this.tt_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.lb(this_0.hb().ib(7)).lb(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.lb(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ObjectIntMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.ObjectIntMap.hashCode.<anonymous>' call
                  var tmp = k[index];
                  var key = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp_0 = hash;
                  // Inline function 'kotlin.hashCode' call
                  var tmp1_elvis_lhs = key == null ? null : hashCode(key);
                  hash = tmp_0 + ((tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) ^ v[index]) | 0;
                }
                slot = slot.jb(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return hash;
  };
  protoOf(ObjectIntMap).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof ObjectIntMap)) {
      return false;
    }
    if (!(other.i() === this.i())) {
      return false;
    }
    var o = other instanceof ObjectIntMap ? other : THROW_CCE();
    // Inline function 'androidx.collection.ObjectIntMap.forEach' call
    var k = this.ut_1;
    var v = this.vt_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
      var m = this.tt_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.lb(this_0.hb().ib(7)).lb(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.lb(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ObjectIntMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.ObjectIntMap.equals.<anonymous>' call
                  var tmp = k[index];
                  var key = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  if (!(v[index] === o.p2(key))) {
                    return false;
                  }
                }
                slot = slot.jb(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return true;
  };
  protoOf(ObjectIntMap).toString = function () {
    if (this.o()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().r5(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.ObjectIntMap.forEach' call
    var k = this.ut_1;
    var v = this.vt_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
      var m = this.tt_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.lb(this_0.hb().ib(7)).lb(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.lb(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  // Inline function 'androidx.collection.ObjectIntMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.ObjectIntMap.toString.<anonymous>' call
                  var tmp = k[index];
                  var key = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var value = v[index];
                  s.p5(key === this ? '(this)' : key);
                  s.q5('=');
                  s.x7(value);
                  i = i + 1 | 0;
                  if (i < this.xt_1) {
                    s.r5(_Char___init__impl__6a9atx(44)).r5(_Char___init__impl__6a9atx(32));
                  }
                }
                slot = slot.jb(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i_0 === lastIndex));
    }
    return s.r5(_Char___init__impl__6a9atx(125)).toString();
  };
  protoOf(ObjectIntMap).gu = function (key) {
    // Inline function 'androidx.collection.hash' call
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var hash = imul(tmp$ret$0, get_MurmurHashC1());
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = this.wt_1;
    // Inline function 'androidx.collection.h1' call
    var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = this.tt_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].kb(b).mb(metadata[i + 1 | 0].ib(64 - b | 0).lb(toLong(b).gb().jb(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$5 = get_BitmaskLsb().w9(toLong(hash2));
      var x = g.nb(tmp$ret$5);
      var m = x.eb(get_BitmaskLsb()).lb(x.hb()).lb(get_BitmaskMsb());
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if (equals(this.ut_1[index], key)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.lb(this_1.eb(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.lb(g.hb().ib(6)).lb(get_BitmaskMsb()).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + get_GroupWidth() | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    return -1;
  };
  function get_EmptyGroup() {
    _init_properties_ScatterMap_kt__cygxb2();
    return EmptyGroup;
  }
  var EmptyGroup;
  var EmptyScatterMap;
  function get_DefaultScatterCapacity() {
    return DefaultScatterCapacity;
  }
  var DefaultScatterCapacity;
  function unloadedCapacity(capacity) {
    _init_properties_ScatterMap_kt__cygxb2();
    if (capacity === 7) {
      return 8;
    }
    return capacity + ((capacity - 1 | 0) / 7 | 0) | 0;
  }
  function normalizeCapacity(n) {
    _init_properties_ScatterMap_kt__cygxb2();
    var tmp;
    if (n > 0) {
      // Inline function 'kotlin.countLeadingZeroBits' call
      tmp = -1 >>> clz32(n) | 0;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function get_ClonedMetadataCount() {
    return ClonedMetadataCount;
  }
  var ClonedMetadataCount;
  function get_AllEmpty() {
    return AllEmpty;
  }
  var AllEmpty;
  function get_Sentinel() {
    return Sentinel;
  }
  var Sentinel;
  function loadedCapacity(capacity) {
    _init_properties_ScatterMap_kt__cygxb2();
    if (capacity === 7) {
      return 6;
    }
    return capacity - (capacity / 8 | 0) | 0;
  }
  function get_Deleted() {
    return Deleted;
  }
  var Deleted;
  function get_GroupWidth() {
    return GroupWidth;
  }
  var GroupWidth;
  function nextCapacity(capacity) {
    _init_properties_ScatterMap_kt__cygxb2();
    var tmp;
    if (capacity === 0) {
      tmp = 6;
    } else {
      tmp = imul(capacity, 2) + 1 | 0;
    }
    return tmp;
  }
  function get_BitmaskMsb() {
    return BitmaskMsb;
  }
  var BitmaskMsb;
  function get_MurmurHashC1() {
    return MurmurHashC1;
  }
  var MurmurHashC1;
  function initializeStorage_2($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.math.max' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.ku_1 = newCapacity;
    initializeMetadata_2($this, newCapacity);
    var tmp_0 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.iu_1 = fillArrayVal(Array(newCapacity), null);
    var tmp_1 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_1.ju_1 = fillArrayVal(Array(newCapacity), null);
  }
  function initializeMetadata_2($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.collection.MutableScatterMap.initializeMetadata.<anonymous>' call
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.hu_1 = tmp_0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var data = $this.hu_1;
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    data[i] = data[i].lb((new Long(255, 0)).ib(b).hb()).mb(value.ib(b));
    initializeGrowth_2($this);
  }
  function initializeGrowth_2($this) {
    $this.ru_1 = loadedCapacity($this.et()) - $this.lu_1 | 0;
  }
  function findFirstAvailableSlot_1($this, hash1) {
    var probeMask = $this.ku_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = $this.hu_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].kb(b).mb(metadata[i + 1 | 0].ib(64 - b | 0).lb(toLong(b).gb().jb(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.lb(g.hb().ib(7)).lb(new Long(-2139062144, -2139062144));
      if (!m.equals(new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function adjustStorage_1($this) {
    var tmp;
    if ($this.ku_1 > 8) {
      // Inline function 'kotlin.ULong.compareTo' call
      // Inline function 'kotlin.ULong.times' call
      // Inline function 'kotlin.toULong' call
      var this_0 = $this.lu_1;
      var this_1 = _ULong___init__impl__c78o9k(toLong(this_0));
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).w9(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.ULong.times' call
      // Inline function 'kotlin.toULong' call
      var this_3 = $this.ku_1;
      var this_4 = _ULong___init__impl__c78o9k(toLong(this_3));
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).w9(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(this_2), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      resizeStorage_1($this, nextCapacity($this.ku_1));
    } else {
      resizeStorage_1($this, nextCapacity($this.ku_1));
    }
  }
  function resizeStorage_1($this, newCapacity) {
    var previousMetadata = $this.hu_1;
    var previousKeys = $this.iu_1;
    var previousValues = $this.ju_1;
    var previousCapacity = $this.ku_1;
    initializeStorage_2($this, newCapacity);
    var newKeys = $this.iu_1;
    var newValues = $this.ju_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].jb((i & 7) << 3).lb(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
          var previousKey = previousKeys[i];
          // Inline function 'androidx.collection.hash' call
          // Inline function 'kotlin.hashCode' call
          var tmp1_elvis_lhs = previousKey == null ? null : hashCode(previousKey);
          var tmp$ret$2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
          var hash = imul(tmp$ret$2, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$4 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_1($this, tmp$ret$4);
          // Inline function 'androidx.collection.MutableScatterMap.writeMetadata' call
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$5 = hash_0 & 127;
          var value = toLong(tmp$ret$5);
          var m = $this.hu_1;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          m[i_0] = m[i_0].lb((new Long(255, 0)).ib(b).hb()).mb(value.ib(b));
          var c = $this.ku_1;
          var cloneIndex = ((index - 7 | 0) & c) + (7 & c) | 0;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_1 = cloneIndex >> 3;
          var b_0 = (cloneIndex & 7) << 3;
          m[i_1] = m[i_1].lb((new Long(255, 0)).ib(b_0).hb()).mb(value.ib(b_0));
          newKeys[index] = previousKey;
          newValues[index] = previousValues[i];
        }
      }
       while (inductionVariable < previousCapacity);
  }
  function MutableScatterMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    ScatterMap.call(this);
    this.ru_1 = 0;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'androidx.collection.MutableScatterMap.<anonymous>' call
      var message = 'Capacity must be a positive value.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    initializeStorage_2(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableScatterMap).su = function (key, value) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.collection.MutableScatterMap.set.<anonymous>' call
    var index = this.tu(key);
    var index_0 = index < 0 ? ~index : index;
    this.iu_1[index_0] = key;
    this.ju_1[index_0] = value;
  };
  protoOf(MutableScatterMap).h2 = function (key) {
    var tmp$ret$10;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = key == null ? null : hashCode(key);
      var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$0, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.ku_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        // Inline function 'androidx.collection.group' call
        var metadata = this.hu_1;
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = metadata[i].kb(b).mb(metadata[i + 1 | 0].ib(64 - b | 0).lb(toLong(b).gb().jb(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$5 = (new Long(16843009, 16843009)).w9(toLong(hash2));
        var x = g.nb(tmp$ret$5);
        var m = x.eb(new Long(16843009, 16843009)).lb(x.hb()).lb(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (equals(this.iu_1[index], key)) {
            tmp$ret$10 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.lb(this_1.eb(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.lb(g.hb().ib(6)).lb(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$10 = -1;
    }
    var index_0 = tmp$ret$10;
    if (index_0 >= 0) {
      return this.uu(index_0);
    }
    return null;
  };
  protoOf(MutableScatterMap).uu = function (index) {
    this.lu_1 = this.lu_1 - 1 | 0;
    // Inline function 'androidx.collection.MutableScatterMap.writeMetadata' call
    var value = new Long(254, 0);
    var m = this.hu_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i = index >> 3;
    var b = (index & 7) << 3;
    m[i] = m[i].lb((new Long(255, 0)).ib(b).hb()).mb(value.ib(b));
    var c = this.ku_1;
    var cloneIndex = ((index - 7 | 0) & c) + (7 & c) | 0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_0 = cloneIndex >> 3;
    var b_0 = (cloneIndex & 7) << 3;
    m[i_0] = m[i_0].lb((new Long(255, 0)).ib(b_0).hb()).mb(value.ib(b_0));
    this.iu_1[index] = null;
    var oldValue = this.ju_1[index];
    this.ju_1[index] = null;
    return (oldValue == null ? true : !(oldValue == null)) ? oldValue : THROW_CCE();
  };
  protoOf(MutableScatterMap).tu = function (key) {
    // Inline function 'androidx.collection.hash' call
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var hash = imul(tmp$ret$0, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = this.ku_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = this.hu_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].kb(b).mb(metadata[i + 1 | 0].ib(64 - b | 0).lb(toLong(b).gb().jb(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$5 = (new Long(16843009, 16843009)).w9(toLong(hash2));
      var x = g.nb(tmp$ret$5);
      var m = x.eb(new Long(16843009, 16843009)).lb(x.hb()).lb(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if (equals(this.iu_1[index], key)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.lb(this_1.eb(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.lb(g.hb().ib(6)).lb(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_1(this, hash1);
    var tmp_0;
    if (this.ru_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !this.hu_1[offset_0 >> 3].jb((offset_0 & 7) << 3).lb(new Long(255, 0)).equals(new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      adjustStorage_1(this);
      index_0 = findFirstAvailableSlot_1(this, hash1);
    }
    this.lu_1 = this.lu_1 + 1 | 0;
    var tmp_1 = this;
    var tmp_2 = this.ru_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if (this.hu_1[offset_1 >> 3].jb((offset_1 & 7) << 3).lb(new Long(255, 0)).equals(new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.ru_1 = tmp_2 - tmp_3 | 0;
    // Inline function 'androidx.collection.MutableScatterMap.writeMetadata' call
    var index_1 = index_0;
    var value = toLong(hash2);
    var m_0 = this.hu_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_0 = index_1 >> 3;
    var b_0 = (index_1 & 7) << 3;
    m_0[i_0] = m_0[i_0].lb((new Long(255, 0)).ib(b_0).hb()).mb(value.ib(b_0));
    var c = this.ku_1;
    var cloneIndex = ((index_1 - 7 | 0) & c) + (7 & c) | 0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_1 = cloneIndex >> 3;
    var b_1 = (cloneIndex & 7) << 3;
    m_0[i_1] = m_0[i_1].lb((new Long(255, 0)).ib(b_1).hb()).mb(value.ib(b_1));
    return ~index_0;
  };
  function get_BitmaskLsb() {
    return BitmaskLsb;
  }
  var BitmaskLsb;
  function get_Empty() {
    return Empty;
  }
  var Empty;
  function ScatterMap() {
    this.hu_1 = get_EmptyGroup();
    this.iu_1 = get_EMPTY_OBJECTS();
    this.ju_1 = get_EMPTY_OBJECTS();
    this.ku_1 = 0;
    this.lu_1 = 0;
  }
  protoOf(ScatterMap).et = function () {
    return this.ku_1;
  };
  protoOf(ScatterMap).i = function () {
    return this.lu_1;
  };
  protoOf(ScatterMap).o = function () {
    return this.lu_1 === 0;
  };
  protoOf(ScatterMap).p2 = function (key) {
    var tmp$ret$10;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = key == null ? null : hashCode(key);
      var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$0, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.ku_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        // Inline function 'androidx.collection.group' call
        var metadata = this.hu_1;
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = metadata[i].kb(b).mb(metadata[i + 1 | 0].ib(64 - b | 0).lb(toLong(b).gb().jb(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$5 = (new Long(16843009, 16843009)).w9(toLong(hash2));
        var x = g.nb(tmp$ret$5);
        var m = x.eb(new Long(16843009, 16843009)).lb(x.hb()).lb(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (equals(this.iu_1[index], key)) {
            tmp$ret$10 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.lb(this_1.eb(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.lb(g.hb().ib(6)).lb(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$10 = -1;
    }
    var index_0 = tmp$ret$10;
    var tmp_0;
    if (index_0 >= 0) {
      var tmp_1 = this.ju_1[index_0];
      tmp_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      tmp_0 = null;
    }
    return tmp_0;
  };
  protoOf(ScatterMap).m2 = function (key) {
    var tmp$ret$10;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = key == null ? null : hashCode(key);
      var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$0, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.ku_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        // Inline function 'androidx.collection.group' call
        var metadata = this.hu_1;
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = metadata[i].kb(b).mb(metadata[i + 1 | 0].ib(64 - b | 0).lb(toLong(b).gb().jb(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$5 = (new Long(16843009, 16843009)).w9(toLong(hash2));
        var x = g.nb(tmp$ret$5);
        var m = x.eb(new Long(16843009, 16843009)).lb(x.hb()).lb(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (equals(this.iu_1[index], key)) {
            tmp$ret$10 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.lb(this_1.eb(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.lb(g.hb().ib(6)).lb(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$10 = -1;
    }
    return tmp$ret$10 >= 0;
  };
  protoOf(ScatterMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var k = this.iu_1;
    var v = this.ju_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this.hu_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.lb(this_0.hb().ib(7)).lb(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.lb(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.ScatterMap.hashCode.<anonymous>' call
                  var tmp = k[index];
                  var key = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp_0 = v[index];
                  var tmp_1 = hash;
                  // Inline function 'kotlin.hashCode' call
                  var tmp1_elvis_lhs = key == null ? null : hashCode(key);
                  var tmp_2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
                  // Inline function 'kotlin.hashCode' call
                  var tmp0_safe_receiver = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  var tmp1_elvis_lhs_0 = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
                  hash = tmp_1 + (tmp_2 ^ (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0)) | 0;
                }
                slot = slot.jb(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return hash;
  };
  protoOf(ScatterMap).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof ScatterMap)) {
      return false;
    }
    if (!(other.i() === this.i())) {
      return false;
    }
    var o = other instanceof ScatterMap ? other : THROW_CCE();
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var k = this.iu_1;
    var v = this.ju_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this.hu_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.lb(this_0.hb().ib(7)).lb(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.lb(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.ScatterMap.equals.<anonymous>' call
                  var tmp = k[index];
                  var key = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp_0 = v[index];
                  var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  if (value == null) {
                    if (!(o.p2(key) == null) ? true : !o.m2(key)) {
                      return false;
                    }
                  } else if (!equals(value, o.p2(key))) {
                    return false;
                  }
                }
                slot = slot.jb(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return true;
  };
  protoOf(ScatterMap).toString = function () {
    if (this.o()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().r5(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var k = this.iu_1;
    var v = this.ju_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this.hu_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.lb(this_0.hb().ib(7)).lb(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.lb(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.ScatterMap.toString.<anonymous>' call
                  var tmp = k[index];
                  var key = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp_0 = v[index];
                  var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  s.p5(key === this ? '(this)' : key);
                  s.q5('=');
                  s.p5(value === this ? '(this)' : value);
                  i = i + 1 | 0;
                  if (i < this.lu_1) {
                    s.r5(_Char___init__impl__6a9atx(44)).r5(_Char___init__impl__6a9atx(32));
                  }
                }
                slot = slot.jb(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i_0 === lastIndex));
    }
    return s.r5(_Char___init__impl__6a9atx(125)).toString();
  };
  function mutableScatterMapOf() {
    _init_properties_ScatterMap_kt__cygxb2();
    return new MutableScatterMap();
  }
  var properties_initialized_ScatterMap_kt_apzngg;
  function _init_properties_ScatterMap_kt__cygxb2() {
    if (!properties_initialized_ScatterMap_kt_apzngg) {
      properties_initialized_ScatterMap_kt_apzngg = true;
      // Inline function 'kotlin.longArrayOf' call
      EmptyGroup = longArrayOf([new Long(-2139062017, -2139062144), new Long(-1, -1)]);
      EmptyScatterMap = new MutableScatterMap(0);
    }
  }
  var EmptyScatterSet;
  function ScatterSet$toString$lambda(this$0) {
    return function (element) {
      var tmp;
      if (element === this$0) {
        tmp = '(this)';
      } else {
        tmp = toString_0(element);
      }
      return tmp;
    };
  }
  function ScatterSet() {
    this.vu_1 = get_EmptyGroup();
    this.wu_1 = get_EMPTY_OBJECTS();
    this.xu_1 = 0;
    this.yu_1 = 0;
  }
  protoOf(ScatterSet).et = function () {
    return this.xu_1;
  };
  protoOf(ScatterSet).i = function () {
    return this.yu_1;
  };
  protoOf(ScatterSet).o = function () {
    return this.yu_1 === 0;
  };
  protoOf(ScatterSet).m = function (element) {
    var tmp$ret$10;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = element == null ? null : hashCode(element);
      var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$0, get_MurmurHashC1());
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.xu_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        // Inline function 'androidx.collection.group' call
        var metadata = this.vu_1;
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = metadata[i].kb(b).mb(metadata[i + 1 | 0].ib(64 - b | 0).lb(toLong(b).gb().jb(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$5 = get_BitmaskLsb().w9(toLong(hash2));
        var x = g.nb(tmp$ret$5);
        var m = x.eb(get_BitmaskLsb()).lb(x.hb()).lb(get_BitmaskMsb());
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (equals(this.wu_1[index], element)) {
            tmp$ret$10 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.lb(this_1.eb(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.lb(g.hb().ib(6)).lb(get_BitmaskMsb()).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + get_GroupWidth() | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$10 = -1;
    }
    return tmp$ret$10 >= 0;
  };
  protoOf(ScatterSet).zu = function (separator, prefix, postfix, limit, truncated, transform) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.joinToString.<anonymous>' call
      this_0.w7(prefix);
      var index = 0;
      // Inline function 'androidx.collection.ScatterSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var k = this.wu_1;
      $l$block_0: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = this.vu_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            if (!this_1.lb(this_1.hb().ib(7)).lb(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.lb(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                    var index_0 = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                    // Inline function 'androidx.collection.ScatterSet.joinToString.<anonymous>.<anonymous>' call
                    var tmp = k[index_0];
                    var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                    if (index === limit) {
                      this_0.w7(truncated);
                      break $l$block;
                    }
                    if (!(index === 0)) {
                      this_0.w7(separator);
                    }
                    if (transform == null) {
                      this_0.p5(element);
                    } else {
                      this_0.w7(transform(element));
                    }
                    index = index + 1 | 0;
                  }
                  slot = slot.jb(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block_0;
              }
            }
          }
           while (!(i === lastIndex));
      }
      this_0.w7(postfix);
    }
    return this_0.toString();
  };
  protoOf(ScatterSet).av = function (separator, prefix, postfix, limit, truncated, transform, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return $super === VOID ? this.zu(separator, prefix, postfix, limit, truncated, transform) : $super.zu.call(this, separator, prefix, postfix, limit, truncated, transform);
  };
  protoOf(ScatterSet).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = this.wu_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.vu_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.lb(this_0.hb().ib(7)).lb(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.lb(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.ScatterSet.hashCode.<anonymous>' call
                  var tmp = k[index];
                  var tmp_0 = hash;
                  // Inline function 'kotlin.hashCode' call
                  var tmp0_safe_receiver = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
                  hash = tmp_0 + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
                }
                slot = slot.jb(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return hash;
  };
  protoOf(ScatterSet).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof ScatterSet)) {
      return false;
    }
    if (!(other.i() === this.i())) {
      return false;
    }
    var o = other instanceof ScatterSet ? other : THROW_CCE();
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = this.wu_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.vu_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.lb(this_0.hb().ib(7)).lb(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.lb(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.ScatterSet.equals.<anonymous>' call
                  var tmp = k[index];
                  var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  if (!o.m(element)) {
                    return false;
                  }
                }
                slot = slot.jb(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return true;
  };
  protoOf(ScatterSet).toString = function () {
    return this.av(VOID, '[', ']', VOID, VOID, ScatterSet$toString$lambda(this));
  };
  function initializeStorage_3($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.xu_1 = newCapacity;
    initializeMetadata_3($this, newCapacity);
    var tmp_0 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.wu_1 = fillArrayVal(Array(newCapacity), null);
  }
  function initializeMetadata_3($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + get_ClonedMetadataCount() | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.collection.MutableScatterSet.initializeMetadata.<anonymous>' call
      fill(this_0, get_AllEmpty());
      tmp_0 = this_0;
    }
    tmp.vu_1 = tmp_0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var data = $this.vu_1;
    var value = get_Sentinel();
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    data[i] = data[i].lb((new Long(255, 0)).ib(b).hb()).mb(value.ib(b));
    initializeGrowth_3($this);
  }
  function initializeGrowth_3($this) {
    $this.fv_1 = loadedCapacity($this.et()) - $this.yu_1 | 0;
  }
  function findAbsoluteInsertIndex($this, element) {
    // Inline function 'androidx.collection.hash' call
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = element == null ? null : hashCode(element);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var hash = imul(tmp$ret$0, get_MurmurHashC1());
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.xu_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = $this.vu_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].kb(b).mb(metadata[i + 1 | 0].ib(64 - b | 0).lb(toLong(b).gb().jb(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$5 = get_BitmaskLsb().w9(toLong(hash2));
      var x = g.nb(tmp$ret$5);
      var m = x.eb(get_BitmaskLsb()).lb(x.hb()).lb(get_BitmaskMsb());
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if (equals($this.wu_1[index], element)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.lb(this_1.eb(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.lb(g.hb().ib(6)).lb(get_BitmaskMsb()).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + get_GroupWidth() | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_2($this, hash1);
    var tmp_0;
    if ($this.fv_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !$this.vu_1[offset_0 >> 3].jb((offset_0 & 7) << 3).lb(new Long(255, 0)).equals(get_Deleted());
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      adjustStorage_2($this);
      index_0 = findFirstAvailableSlot_2($this, hash1);
    }
    $this.yu_1 = $this.yu_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.fv_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if ($this.vu_1[offset_1 >> 3].jb((offset_1 & 7) << 3).lb(new Long(255, 0)).equals(get_Empty())) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.fv_1 = tmp_2 - tmp_3 | 0;
    // Inline function 'androidx.collection.MutableScatterSet.writeMetadata' call
    var index_1 = index_0;
    var value = toLong(hash2);
    var m_0 = $this.vu_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_0 = index_1 >> 3;
    var b_0 = (index_1 & 7) << 3;
    m_0[i_0] = m_0[i_0].lb((new Long(255, 0)).ib(b_0).hb()).mb(value.ib(b_0));
    var c = $this.xu_1;
    var cloneIndex = ((index_1 - get_ClonedMetadataCount() | 0) & c) + (get_ClonedMetadataCount() & c) | 0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_1 = cloneIndex >> 3;
    var b_1 = (cloneIndex & 7) << 3;
    m_0[i_1] = m_0[i_1].lb((new Long(255, 0)).ib(b_1).hb()).mb(value.ib(b_1));
    return index_0;
  }
  function findFirstAvailableSlot_2($this, hash1) {
    var probeMask = $this.xu_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = $this.vu_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].kb(b).mb(metadata[i + 1 | 0].ib(64 - b | 0).lb(toLong(b).gb().jb(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.lb(g.hb().ib(7)).lb(get_BitmaskMsb());
      if (!m.equals(new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + get_GroupWidth() | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function adjustStorage_2($this) {
    var tmp;
    if ($this.xu_1 > get_GroupWidth()) {
      // Inline function 'kotlin.ULong.compareTo' call
      // Inline function 'kotlin.ULong.times' call
      // Inline function 'kotlin.toULong' call
      var this_0 = $this.yu_1;
      var this_1 = _ULong___init__impl__c78o9k(toLong(this_0));
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).w9(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.ULong.times' call
      // Inline function 'kotlin.toULong' call
      var this_3 = $this.xu_1;
      var this_4 = _ULong___init__impl__c78o9k(toLong(this_3));
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).w9(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(this_2), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      resizeStorage_2($this, nextCapacity($this.xu_1));
    } else {
      resizeStorage_2($this, nextCapacity($this.xu_1));
    }
  }
  function resizeStorage_2($this, newCapacity) {
    var previousMetadata = $this.vu_1;
    var previousElements = $this.wu_1;
    var previousCapacity = $this.xu_1;
    initializeStorage_3($this, newCapacity);
    var newElements = $this.wu_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].jb((i & 7) << 3).lb(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
          var previousElement = previousElements[i];
          // Inline function 'androidx.collection.hash' call
          // Inline function 'kotlin.hashCode' call
          var tmp1_elvis_lhs = previousElement == null ? null : hashCode(previousElement);
          var tmp$ret$2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
          var hash = imul(tmp$ret$2, get_MurmurHashC1());
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$4 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_2($this, tmp$ret$4);
          // Inline function 'androidx.collection.MutableScatterSet.writeMetadata' call
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$5 = hash_0 & 127;
          var value = toLong(tmp$ret$5);
          var m = $this.vu_1;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          m[i_0] = m[i_0].lb((new Long(255, 0)).ib(b).hb()).mb(value.ib(b));
          var c = $this.xu_1;
          var cloneIndex = ((index - get_ClonedMetadataCount() | 0) & c) + (get_ClonedMetadataCount() & c) | 0;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_1 = cloneIndex >> 3;
          var b_0 = (cloneIndex & 7) << 3;
          m[i_1] = m[i_1].lb((new Long(255, 0)).ib(b_0).hb()).mb(value.ib(b_0));
          newElements[index] = previousElement;
        }
      }
       while (inductionVariable < previousCapacity);
  }
  function MutableScatterSet(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? get_DefaultScatterCapacity() : initialCapacity;
    ScatterSet.call(this);
    this.fv_1 = 0;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'androidx.collection.MutableScatterSet.<anonymous>' call
      var message = 'Capacity must be a positive value.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    initializeStorage_3(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableScatterSet).u = function (element) {
    var oldSize = this.i();
    var index = findAbsoluteInsertIndex(this, element);
    this.wu_1[index] = element;
    return !(this.i() === oldSize);
  };
  protoOf(MutableScatterSet).gv = function (element) {
    var index = findAbsoluteInsertIndex(this, element);
    this.wu_1[index] = element;
  };
  protoOf(MutableScatterSet).v = function (element) {
    var tmp$ret$10;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = element == null ? null : hashCode(element);
      var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$0, get_MurmurHashC1());
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.xu_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        // Inline function 'androidx.collection.group' call
        var metadata = this.vu_1;
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = metadata[i].kb(b).mb(metadata[i + 1 | 0].ib(64 - b | 0).lb(toLong(b).gb().jb(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$5 = get_BitmaskLsb().w9(toLong(hash2));
        var x = g.nb(tmp$ret$5);
        var m = x.eb(get_BitmaskLsb()).lb(x.hb()).lb(get_BitmaskMsb());
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (equals(this.wu_1[index], element)) {
            tmp$ret$10 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.lb(this_1.eb(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.lb(g.hb().ib(6)).lb(get_BitmaskMsb()).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + get_GroupWidth() | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$10 = -1;
    }
    var index_0 = tmp$ret$10;
    var exists = index_0 >= 0;
    if (exists) {
      this.hv(index_0);
    }
    return exists;
  };
  protoOf(MutableScatterSet).hv = function (index) {
    this.yu_1 = this.yu_1 - 1 | 0;
    // Inline function 'androidx.collection.MutableScatterSet.writeMetadata' call
    var value = get_Deleted();
    var m = this.vu_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i = index >> 3;
    var b = (index & 7) << 3;
    m[i] = m[i].lb((new Long(255, 0)).ib(b).hb()).mb(value.ib(b));
    var c = this.xu_1;
    var cloneIndex = ((index - get_ClonedMetadataCount() | 0) & c) + (get_ClonedMetadataCount() & c) | 0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_0 = cloneIndex >> 3;
    var b_0 = (cloneIndex & 7) << 3;
    m[i_0] = m[i_0].lb((new Long(255, 0)).ib(b_0).hb()).mb(value.ib(b_0));
    this.wu_1[index] = null;
  };
  function mutableScatterSetOf() {
    _init_properties_ScatterSet_kt__vy48mc();
    return new MutableScatterSet();
  }
  var properties_initialized_ScatterSet_kt_dmj456;
  function _init_properties_ScatterSet_kt__vy48mc() {
    if (!properties_initialized_ScatterSet_kt_dmj456) {
      properties_initialized_ScatterSet_kt_dmj456 = true;
      EmptyScatterSet = new MutableScatterSet(0);
    }
  }
  var EMPTY_INTS;
  var EMPTY_LONGS;
  function get_EMPTY_OBJECTS() {
    _init_properties_ContainerHelpers_kt__6fon4s();
    return EMPTY_OBJECTS;
  }
  var EMPTY_OBJECTS;
  var properties_initialized_ContainerHelpers_kt_9fe6be;
  function _init_properties_ContainerHelpers_kt__6fon4s() {
    if (!properties_initialized_ContainerHelpers_kt_9fe6be) {
      properties_initialized_ContainerHelpers_kt_9fe6be = true;
      EMPTY_INTS = new Int32Array(0);
      EMPTY_LONGS = longArray(0);
      // Inline function 'kotlin.arrayOfNulls' call
      EMPTY_OBJECTS = fillArrayVal(Array(0), null);
    }
  }
  //region block: init
  DefaultScatterCapacity = 6;
  ClonedMetadataCount = 7;
  AllEmpty = new Long(-2139062144, -2139062144);
  Sentinel = new Long(255, 0);
  Deleted = new Long(254, 0);
  GroupWidth = 8;
  BitmaskMsb = new Long(-2139062144, -2139062144);
  MurmurHashC1 = -862048943;
  BitmaskLsb = new Long(16843009, 16843009);
  Empty = new Long(128, 0);
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_BitmaskMsb;
  _.$_$.b = MutableIntIntMap;
  _.$_$.c = MutableObjectIntMap;
  _.$_$.d = MutableScatterMap;
  _.$_$.e = MutableScatterSet;
  _.$_$.f = mutableScatterMapOf;
  _.$_$.g = mutableScatterSetOf;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-collection-collection.js.map
