(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-atomicfu.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-atomicfu.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-io'.");
    }
    if (typeof this['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'ktor-ktor-io'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktor-ktor-io'.");
    }
    root['ktor-ktor-io'] = factory(typeof this['ktor-ktor-io'] === 'undefined' ? {} : this['ktor-ktor-io'], this['kotlin-kotlin-stdlib'], this['kotlinx-atomicfu'], this['kotlinx-coroutines-core']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_atomicfu, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var ensureNotNull = kotlin_kotlin.$_$.fh;
  var Unit_instance = kotlin_kotlin.$_$.k5;
  var toString = kotlin_kotlin.$_$.nc;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.v1;
  var toLong = kotlin_kotlin.$_$.lc;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.a2;
  var CoroutineImpl = kotlin_kotlin.$_$.ja;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.v9;
  var protoOf = kotlin_kotlin.$_$.ic;
  var classMeta = kotlin_kotlin.$_$.xa;
  var setMetadataFor = kotlin_kotlin.$_$.jc;
  var Long = kotlin_kotlin.$_$.gg;
  var VOID = kotlin_kotlin.$_$.g;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var atomic$long$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.e;
  var THROW_CCE = kotlin_kotlin.$_$.ng;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var CancellationException = kotlin_kotlin.$_$.u9;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.b1;
  var captureStack = kotlin_kotlin.$_$.ra;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.s4;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var interfaceMeta = kotlin_kotlin.$_$.mb;
  var cancel$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var invokeOnCompletion$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h1;
  var Key_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t1;
  var isInterface = kotlin_kotlin.$_$.vb;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var equals = kotlin_kotlin.$_$.ab;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.x4;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.h1;
  var charSequenceLength = kotlin_kotlin.$_$.va;
  var objectMeta = kotlin_kotlin.$_$.hc;
  var hashCode = kotlin_kotlin.$_$.kb;
  var toString_0 = kotlin_kotlin.$_$.jf;
  var objectCreate = kotlin_kotlin.$_$.gc;
  var Exception = kotlin_kotlin.$_$.dg;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.p1;
  var numberToChar = kotlin_kotlin.$_$.dc;
  var coerceAtLeast = kotlin_kotlin.$_$.wc;
  var coerceAtMost = kotlin_kotlin.$_$.yc;
  var Companion_getInstance = kotlin_kotlin.$_$.e5;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.z2;
  var toByte = kotlin_kotlin.$_$.kc;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.j4;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.q2;
  var toShort = kotlin_kotlin.$_$.mc;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.i4;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.j5;
  var charSequenceGet = kotlin_kotlin.$_$.ua;
  var isLowSurrogate = kotlin_kotlin.$_$.ie;
  var isHighSurrogate = kotlin_kotlin.$_$.he;
  var Job_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var coerceAtMost_0 = kotlin_kotlin.$_$.xc;
  var lazy = kotlin_kotlin.$_$.mh;
  var KProperty1 = kotlin_kotlin.$_$.kd;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ib;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.e2;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.t2;
  var replace = kotlin_kotlin.$_$.re;
  var getStringHashCode = kotlin_kotlin.$_$.jb;
  var extendThrowable = kotlin_kotlin.$_$.bb;
  var charSequenceSubSequence = kotlin_kotlin.$_$.wa;
  var IndexOutOfBoundsException_init_$Create$_0 = kotlin_kotlin.$_$.d2;
  var Exception_init_$Init$_0 = kotlin_kotlin.$_$.r1;
  var isCharSequence = kotlin_kotlin.$_$.rb;
  var trim = kotlin_kotlin.$_$.rf;
  var decodeToString = kotlin_kotlin.$_$.yd;
  var setOf = kotlin_kotlin.$_$.c9;
  var fillArrayVal = kotlin_kotlin.$_$.cb;
  //endregion
  //region block: pre-declaration
  setMetadataFor($awaitAtLeastNBytesAvailableForWriteCOROUTINE$0, '$awaitAtLeastNBytesAvailableForWriteCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor($awaitAtLeastNBytesAvailableForReadCOROUTINE$1, '$awaitAtLeastNBytesAvailableForReadCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor($writeFullyCOROUTINE$9, '$writeFullyCOROUTINE$9', classMeta, CoroutineImpl);
  setMetadataFor($writeFullyCOROUTINE$10, '$writeFullyCOROUTINE$10', classMeta, CoroutineImpl);
  setMetadataFor($readRemainingCOROUTINE$26, '$readRemainingCOROUTINE$26', classMeta, CoroutineImpl);
  setMetadataFor($readRemainingSuspendCOROUTINE$27, '$readRemainingSuspendCOROUTINE$27', classMeta, CoroutineImpl);
  setMetadataFor($readAvailableCOROUTINE$30, '$readAvailableCOROUTINE$30', classMeta, CoroutineImpl);
  setMetadataFor($readAvailableCOROUTINE$33, '$readAvailableCOROUTINE$33', classMeta, CoroutineImpl);
  setMetadataFor($awaitInternalAtLeast1COROUTINE$38, '$awaitInternalAtLeast1COROUTINE$38', classMeta, CoroutineImpl);
  setMetadataFor($awaitSuspendCOROUTINE$39, '$awaitSuspendCOROUTINE$39', classMeta, CoroutineImpl);
  function readRemaining$default(limit, $completion, $super) {
    var tmp;
    if (limit === VOID) {
      Companion_getInstance();
      tmp = new Long(-1, 2147483647);
    } else {
      tmp = limit;
    }
    limit = tmp;
    return $super === VOID ? this.h7j(limit, $completion) : $super.h7j.call(this, limit, $completion);
  }
  setMetadataFor(ByteReadChannel_1, 'ByteReadChannel', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [3, 1, 2, 0, 5]);
  setMetadataFor(ByteChannelSequentialBase, 'ByteChannelSequentialBase', classMeta, VOID, [ByteReadChannel_1], VOID, VOID, VOID, [1, 3, 0, 2, 5]);
  setMetadataFor(ClosedWriteChannelException, 'ClosedWriteChannelException', classMeta, CancellationException);
  setMetadataFor(CloseElement, 'CloseElement', classMeta);
  setMetadataFor(WriterScope, 'WriterScope', interfaceMeta, VOID, [CoroutineScope]);
  setMetadataFor(ChannelJob, 'ChannelJob', classMeta, VOID, [Job], VOID, VOID, VOID, [0]);
  setMetadataFor(ChannelScope, 'ChannelScope', classMeta, VOID, [CoroutineScope, WriterScope]);
  setMetadataFor(launchChannel$slambda, 'launchChannel$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(Buffer, 'Buffer', classMeta);
  setMetadataFor(InsufficientSpaceException, 'InsufficientSpaceException', classMeta, Exception, VOID, InsufficientSpaceException);
  setMetadataFor(DefaultPool, 'DefaultPool', classMeta);
  setMetadataFor(DefaultBufferPool, 'DefaultBufferPool', classMeta, DefaultPool, VOID, DefaultBufferPool);
  setMetadataFor(Output, 'Output', classMeta);
  setMetadataFor(BytePacketBuilder, 'BytePacketBuilder', classMeta, Output, VOID, BytePacketBuilder);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(Input, 'Input', classMeta);
  setMetadataFor(ByteReadPacket, 'ByteReadPacket', classMeta, Input);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(ChunkBuffer$Companion$EmptyPool$1, VOID, classMeta);
  setMetadataFor(NoPoolImpl, 'NoPoolImpl', classMeta);
  setMetadataFor(ChunkBuffer$Companion$NoPool$1, VOID, classMeta, NoPoolImpl);
  setMetadataFor(ChunkBuffer$Companion$NoPoolManuallyManaged$1, VOID, classMeta, NoPoolImpl);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(ChunkBuffer, 'ChunkBuffer', classMeta, Buffer);
  setMetadataFor(MalformedUTF8InputException, 'MalformedUTF8InputException', classMeta, Exception);
  setMetadataFor($sleepCOROUTINE$52, '$sleepCOROUTINE$52', classMeta, CoroutineImpl);
  setMetadataFor($trySuspendCOROUTINE$53, '$trySuspendCOROUTINE$53', classMeta, CoroutineImpl);
  setMetadataFor(AwaitingSlot, 'AwaitingSlot', classMeta, VOID, VOID, AwaitingSlot, VOID, VOID, [1]);
  setMetadataFor($copyToSequentialImplCOROUTINE$54, '$copyToSequentialImplCOROUTINE$54', classMeta, CoroutineImpl);
  setMetadataFor($copyToTailCOROUTINE$55, '$copyToTailCOROUTINE$55', classMeta, CoroutineImpl);
  setMetadataFor(ByteArrayPool$1, VOID, classMeta, DefaultPool);
  setMetadataFor(ByteChannelJS, 'ByteChannelJS', classMeta, ByteChannelSequentialBase, VOID, VOID, VOID, VOID, [3, 1, 0, 2, 5]);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(DefaultAllocator, 'DefaultAllocator', objectMeta);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(Memory, 'Memory', classMeta);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(Charset, 'Charset', classMeta);
  setMetadataFor(Charsets, 'Charsets', objectMeta);
  setMetadataFor(MalformedInputException, 'MalformedInputException', classMeta, Error);
  setMetadataFor(CharsetDecoder, 'CharsetDecoder', classMeta);
  setMetadataFor(CharsetEncoder, 'CharsetEncoder', classMeta);
  setMetadataFor(CharsetImpl, 'CharsetImpl', classMeta, Charset);
  setMetadataFor(CharsetEncoderImpl, 'CharsetEncoderImpl', classMeta, CharsetEncoder);
  setMetadataFor(CharsetDecoderImpl, 'CharsetDecoderImpl', classMeta, CharsetDecoder);
  setMetadataFor(DecodeBufferResult, 'DecodeBufferResult', classMeta);
  setMetadataFor(IOException, 'IOException', classMeta, Exception);
  setMetadataFor(EOFException, 'EOFException', classMeta, IOException);
  setMetadataFor(toKtor$1, VOID, classMeta);
  setMetadataFor(TextDecoderFallback, 'TextDecoderFallback', classMeta);
  //endregion
  function ByteReadChannel(content) {
    return ByteReadChannel_0(content, 0, content.length);
  }
  function _get_isCancelled__nhbn6y($this) {
    var tmp0_safe_receiver = $this.l7c_1.kotlinx$atomicfu$value;
    return !((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t7c_1) == null);
  }
  function flushImpl($this) {
    if ($this.m7c_1.o1o()) {
      $this.q7c_1.v7c();
      return false;
    }
    flushWrittenBytes($this);
    $this.q7c_1.v7c();
    return true;
  }
  function flushWrittenBytes($this) {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.r7c_1;
    // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.flushWrittenBytes.<anonymous>' call
    var size = $this.m7c_1.m();
    var buffer = ensureNotNull($this.m7c_1.m7d());
    $this.s7c_1.n7d(buffer);
    $this.j7c_1.atomicfu$addAndGet(size);
  }
  function ensureNotClosed($this) {
    if ($this.p7d()) {
      var tmp0_elvis_lhs = $this.o7d();
      throw tmp0_elvis_lhs == null ? new ClosedWriteChannelException('Channel ' + $this + ' is already closed') : tmp0_elvis_lhs;
    }
  }
  function ensureNotFailed($this) {
    var tmp0_safe_receiver = $this.o7d();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
  }
  function ensureNotFailed_0($this, closeable) {
    var tmp0_safe_receiver = $this.o7d();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      closeable.mv();
      throw tmp0_safe_receiver;
    }
  }
  function readRemainingSuspend($this, builder, limit, $completion) {
    var tmp = new $readRemainingSuspendCOROUTINE$27($this, builder, limit, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  }
  function addBytesRead($this, count) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(count >= 0)) {
      // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.addBytesRead.<anonymous>' call
      var message = "Can't read negative amount of bytes: " + count;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlinx.atomicfu.AtomicInt.minusAssign' call
    $this.k7c_1.atomicfu$getAndAdd(-count | 0);
    $this.h7c_1.atomicfu$addAndGet$long(toLong(count));
    // Inline function 'kotlinx.atomicfu.AtomicInt.minusAssign' call
    $this.j7c_1.atomicfu$getAndAdd(-count | 0);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!($this.k7c_1.kotlinx$atomicfu$value >= 0)) {
      // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.addBytesRead.<anonymous>' call
      var message_0 = 'Readable bytes count is negative: ' + $this.c7e() + ', ' + count + ' in ' + $this;
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!($this.c7e() >= 0)) {
      // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.addBytesRead.<anonymous>' call
      var message_1 = 'Readable bytes count is negative: ' + $this.c7e() + ', ' + count + ' in ' + $this;
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
  }
  function addBytesWritten($this, count) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(count >= 0)) {
      // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.addBytesWritten.<anonymous>' call
      var message = "Can't write negative amount of bytes: " + count;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlinx.atomicfu.AtomicInt.plusAssign' call
    $this.k7c_1.atomicfu$getAndAdd(count);
    $this.i7c_1.atomicfu$addAndGet$long(toLong(count));
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!($this.k7c_1.kotlinx$atomicfu$value >= 0)) {
      // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.addBytesWritten.<anonymous>' call
      var message_0 = 'Readable bytes count is negative: ' + $this.k7c_1.kotlinx$atomicfu$value + ', ' + count + ' in ' + $this;
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
  }
  function ByteChannelSequentialBase$awaitAtLeastNBytesAvailableForWrite$lambda(this$0, $count) {
    return function () {
      return this$0.d7e() < $count ? !this$0.p7d() : false;
    };
  }
  function ByteChannelSequentialBase$awaitAtLeastNBytesAvailableForRead$lambda(this$0, $count) {
    return function () {
      return this$0.c7e() < $count ? !this$0.e7e() : false;
    };
  }
  function $awaitAtLeastNBytesAvailableForWriteCOROUTINE$0(_this__u8e3s4, count, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n7e_1 = _this__u8e3s4;
    this.o7e_1 = count;
  }
  protoOf($awaitAtLeastNBytesAvailableForWriteCOROUTINE$0).mc = function () {
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
            if (!(this.n7e_1.d7e() < this.o7e_1 ? !this.n7e_1.p7d() : false)) {
              this.ac_1 = 5;
              continue $sm;
            }

            if (!flushImpl(this.n7e_1)) {
              this.ac_1 = 2;
              suspendResult = this.n7e_1.q7c_1.p7e(ByteChannelSequentialBase$awaitAtLeastNBytesAvailableForWrite$lambda(this.n7e_1, this.o7e_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.ac_1 = 3;
              continue $sm;
            }

          case 2:
            this.ac_1 = 3;
            continue $sm;
          case 3:
            this.ac_1 = 1;
            continue $sm;
          case 4:
            throw this.dc_1;
          case 5:
            return Unit_instance;
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
  function $awaitAtLeastNBytesAvailableForReadCOROUTINE$1(_this__u8e3s4, count, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y7e_1 = _this__u8e3s4;
    this.z7e_1 = count;
  }
  protoOf($awaitAtLeastNBytesAvailableForReadCOROUTINE$1).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 3;
            this.ac_1 = 1;
            continue $sm;
          case 1:
            if (!(this.y7e_1.c7e() < this.z7e_1 ? !this.y7e_1.e7e() : false)) {
              this.ac_1 = 4;
              continue $sm;
            }

            this.ac_1 = 2;
            suspendResult = this.y7e_1.q7c_1.p7e(ByteChannelSequentialBase$awaitAtLeastNBytesAvailableForRead$lambda(this.y7e_1, this.z7e_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
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
  function $writeFullyCOROUTINE$9(_this__u8e3s4, src, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i7f_1 = _this__u8e3s4;
    this.j7f_1 = src;
  }
  protoOf($writeFullyCOROUTINE$9).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 2;
            this.ac_1 = 1;
            suspendResult = this.i7f_1.k7f(1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var this_0 = this.j7f_1;
            var count = this_0.n7f_1 - this_0.m7f_1 | 0;
            writeFully_2(this.i7f_1.m7c_1, this.j7f_1);
            this.i7f_1.r7f(count);
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
  function $writeFullyCOROUTINE$10(_this__u8e3s4, src, offset, length, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a7g_1 = _this__u8e3s4;
    this.b7g_1 = src;
    this.c7g_1 = offset;
    this.d7g_1 = length;
  }
  protoOf($writeFullyCOROUTINE$10).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 4;
            this.e7g_1 = this.c7g_1;
            this.f7g_1 = this.c7g_1 + this.d7g_1 | 0;
            this.ac_1 = 1;
            continue $sm;
          case 1:
            if (!(this.e7g_1 < this.f7g_1)) {
              this.ac_1 = 3;
              continue $sm;
            }

            this.ac_1 = 2;
            suspendResult = this.a7g_1.k7f(1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var a = this.a7g_1.d7e();
            var b = this.f7g_1 - this.e7g_1 | 0;
            var bytesCount = Math.min(a, b);
            writeFully_3(this.a7g_1.m7c_1, this.b7g_1, this.e7g_1, bytesCount);
            this.e7g_1 = this.e7g_1 + bytesCount | 0;
            this.a7g_1.r7f(bytesCount);
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
  function $readRemainingCOROUTINE$26(_this__u8e3s4, limit, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o7g_1 = _this__u8e3s4;
    this.p7g_1 = limit;
  }
  protoOf($readRemainingCOROUTINE$26).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 3;
            ensureNotFailed(this.o7g_1);
            this.q7g_1 = new BytePacketBuilder();
            var tmp_0 = this;
            var a = this.p7g_1;
            var b = this.o7g_1.n7c_1.b7h();
            tmp_0.r7g_1 = a.x9(b) <= 0 ? a : b;
            this.q7g_1.c7h(this.o7g_1.n7c_1, this.r7g_1);
            this.o7g_1.d7h(this.r7g_1.fa());
            var tmp_1 = this;
            var this_0 = this.p7g_1;
            var other = this.q7g_1.m();
            tmp_1.s7g_1 = this_0.fb(toLong(other));
            if (this.s7g_1.equals(new Long(0, 0)) ? true : this.o7g_1.e7e()) {
              var tmp_2 = this;
              ensureNotFailed_0(this.o7g_1, this.q7g_1);
              tmp_2.t7g_1 = this.q7g_1.e3();
              this.ac_1 = 2;
              continue $sm;
            } else {
              this.ac_1 = 1;
              suspendResult = readRemainingSuspend(this.o7g_1, this.q7g_1, this.p7g_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.t7g_1 = suspendResult;
            this.ac_1 = 2;
            continue $sm;
          case 2:
            return this.t7g_1;
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
  function $readRemainingSuspendCOROUTINE$27(_this__u8e3s4, builder, limit, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y7d_1 = _this__u8e3s4;
    this.z7d_1 = builder;
    this.a7e_1 = limit;
  }
  protoOf($readRemainingSuspendCOROUTINE$27).mc = function () {
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
            if (!(toLong(this.z7d_1.m()).x9(this.a7e_1) < 0)) {
              this.ac_1 = 4;
              continue $sm;
            }

            var tmp_0 = this;
            var this_0 = this.a7e_1;
            var other = this.z7d_1.m();
            var a = this_0.fb(toLong(other));
            var b = this.y7d_1.n7c_1.b7h();
            tmp_0.b7e_1 = a.x9(b) <= 0 ? a : b;
            this.z7d_1.c7h(this.y7d_1.n7c_1, this.b7e_1);
            this.y7d_1.d7h(this.b7e_1.fa());
            ensureNotFailed_0(this.y7d_1, this.z7d_1);
            if (this.y7d_1.e7e() ? true : this.z7d_1.m() === this.a7e_1.fa()) {
              this.ac_1 = 4;
              continue $sm;
            } else {
              this.ac_1 = 2;
              continue $sm;
            }

          case 2:
            this.ac_1 = 3;
            suspendResult = this.y7d_1.e7h(1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.ac_1 = 1;
            continue $sm;
          case 4:
            ensureNotFailed_0(this.y7d_1, this.z7d_1);
            return this.z7d_1.e3();
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
  function $readAvailableCOROUTINE$30(_this__u8e3s4, dst, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n7h_1 = _this__u8e3s4;
    this.o7h_1 = dst;
  }
  protoOf($readAvailableCOROUTINE$30).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 3;
            var tmp0_safe_receiver = this.n7h_1.o7d();
            if (tmp0_safe_receiver == null)
              null;
            else {
              throw tmp0_safe_receiver;
            }

            if (this.n7h_1.p7d() ? this.n7h_1.c7e() === 0 : false)
              return -1;
            var this_0 = this.o7h_1;
            if ((this_0.p7f_1 - this_0.n7f_1 | 0) === 0)
              return 0;
            if (this.n7h_1.c7e() === 0) {
              this.ac_1 = 1;
              suspendResult = this.n7h_1.e7h(1, this);
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
            if (!this.n7h_1.n7c_1.q7h()) {
              this.n7h_1.p7h();
            }

            var this_1 = this.o7h_1;
            var a = toLong(this_1.p7f_1 - this_1.n7f_1 | 0);
            var b = this.n7h_1.n7c_1.b7h();
            var size = (a.x9(b) <= 0 ? a : b).fa();
            readFully_2(this.n7h_1.n7c_1, this.o7h_1, size);
            this.n7h_1.d7h(size);
            return size;
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
  function $readAvailableCOROUTINE$33(_this__u8e3s4, dst, offset, length, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z7h_1 = _this__u8e3s4;
    this.a7i_1 = dst;
    this.b7i_1 = offset;
    this.c7i_1 = length;
  }
  protoOf($readAvailableCOROUTINE$33).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 3;
            var tmp0_safe_receiver = this.z7h_1.o7d();
            if (tmp0_safe_receiver == null)
              null;
            else {
              throw tmp0_safe_receiver;
            }

            if (this.z7h_1.p7d() ? this.z7h_1.c7e() === 0 : false)
              return -1;
            if (this.c7i_1 === 0)
              return 0;
            if (this.z7h_1.c7e() === 0) {
              this.ac_1 = 1;
              suspendResult = this.z7h_1.e7h(1, this);
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
            if (!this.z7h_1.n7c_1.q7h()) {
              this.z7h_1.p7h();
            }

            var a = toLong(this.c7i_1);
            var b = this.z7h_1.n7c_1.b7h();
            var size = (a.x9(b) <= 0 ? a : b).fa();
            readFully_1(this.z7h_1.n7c_1, this.a7i_1, this.b7i_1, size);
            this.z7h_1.d7h(size);
            return size;
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
  function $awaitInternalAtLeast1COROUTINE$38(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l7i_1 = _this__u8e3s4;
  }
  protoOf($awaitInternalAtLeast1COROUTINE$38).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 2;
            if (!this.l7i_1.n7c_1.n7i()) {
              var tmp_0 = this;
              tmp_0.m7i_1 = true;
              this.ac_1 = 3;
              continue $sm;
            } else {
              this.ac_1 = 1;
              suspendResult = this.l7i_1.e7h(1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.m7i_1 = suspendResult;
            this.ac_1 = 3;
            continue $sm;
          case 2:
            throw this.dc_1;
          case 3:
            return this.m7i_1;
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
  function $awaitSuspendCOROUTINE$39(_this__u8e3s4, atLeast, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w7i_1 = _this__u8e3s4;
    this.x7i_1 = atLeast;
  }
  protoOf($awaitSuspendCOROUTINE$39).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 2;
            if (!(this.x7i_1 >= 0)) {
              var message = 'Failed requirement.';
              throw IllegalArgumentException_init_$Create$(toString(message));
            }

            this.ac_1 = 1;
            suspendResult = this.w7i_1.y7i(this.x7i_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.w7i_1.p7h();
            var tmp0_safe_receiver = this.w7i_1.o7d();
            if (tmp0_safe_receiver == null)
              null;
            else {
              throw tmp0_safe_receiver;
            }

            return !this.w7i_1.e7e() ? this.w7i_1.c7e() >= this.x7i_1 : false;
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
  function ByteChannelSequentialBase(initial, autoFlush, pool) {
    pool = pool === VOID ? Companion_getInstance_4().d7j() : pool;
    this.f7c_1 = autoFlush;
    this.g7c_1 = atomic$ref$1(Companion_getInstance_4().a7j_1);
    this.h7c_1 = atomic$long$1(new Long(0, 0));
    this.i7c_1 = atomic$long$1(new Long(0, 0));
    this.j7c_1 = atomic$int$1(0);
    this.k7c_1 = atomic$int$1(0);
    this.l7c_1 = atomic$ref$1(null);
    this.m7c_1 = new BytePacketBuilder(pool);
    this.n7c_1 = ByteReadPacket_init_$Create$(initial, pool);
    this.o7c_1 = atomic$int$1(0);
    this.p7c_1 = atomic$ref$1(Companion_getInstance_4().a7j_1);
    this.q7c_1 = new AwaitingSlot();
    this.r7c_1 = new Object();
    this.s7c_1 = new BytePacketBuilder();
    var count = remainingAll(initial).fa();
    this.r7f(count);
    this.j7c_1.atomicfu$addAndGet(count);
  }
  protoOf(ByteChannelSequentialBase).e7j = function () {
    return this.f7c_1;
  };
  protoOf(ByteChannelSequentialBase).p7d = function () {
    return !(this.l7c_1.kotlinx$atomicfu$value == null);
  };
  protoOf(ByteChannelSequentialBase).c7e = function () {
    return this.j7c_1.kotlinx$atomicfu$value;
  };
  protoOf(ByteChannelSequentialBase).d7e = function () {
    // Inline function 'kotlin.comparisons.maxOf' call
    var b = 4088 - this.k7c_1.kotlinx$atomicfu$value | 0;
    return Math.max(0, b);
  };
  protoOf(ByteChannelSequentialBase).e7e = function () {
    return _get_isCancelled__nhbn6y(this) ? true : this.p7d() ? this.k7c_1.kotlinx$atomicfu$value === 0 : false;
  };
  protoOf(ByteChannelSequentialBase).o7d = function () {
    var tmp0_safe_receiver = this.l7c_1.kotlinx$atomicfu$value;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t7c_1;
  };
  protoOf(ByteChannelSequentialBase).k7f = function (count, $completion) {
    var tmp = new $awaitAtLeastNBytesAvailableForWriteCOROUTINE$0(this, count, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(ByteChannelSequentialBase).y7i = function (count, $completion) {
    var tmp = new $awaitAtLeastNBytesAvailableForReadCOROUTINE$1(this, count, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(ByteChannelSequentialBase).p6 = function () {
    flushImpl(this);
  };
  protoOf(ByteChannelSequentialBase).p7h = function () {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.r7c_1;
    // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.prepareFlushedBytes.<anonymous>' call
    unsafeAppend(this.n7c_1, this.s7c_1);
  };
  protoOf(ByteChannelSequentialBase).f7j = function (src, $completion) {
    var tmp = new $writeFullyCOROUTINE$9(this, src, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(ByteChannelSequentialBase).g7j = function (src, offset, length, $completion) {
    var tmp = new $writeFullyCOROUTINE$10(this, src, offset, length, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(ByteChannelSequentialBase).d7h = function (count) {
    addBytesRead(this, count);
    this.q7c_1.v7c();
  };
  protoOf(ByteChannelSequentialBase).h7j = function (limit, $completion) {
    var tmp = new $readRemainingCOROUTINE$26(this, limit, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(ByteChannelSequentialBase).j7j = function (dst, $completion) {
    return this.k7j(dst instanceof Buffer ? dst : THROW_CCE(), $completion);
  };
  protoOf(ByteChannelSequentialBase).k7j = function (dst, $completion) {
    var tmp = new $readAvailableCOROUTINE$30(this, dst, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(ByteChannelSequentialBase).l7j = function (dst, offset, length, $completion) {
    var tmp = new $readAvailableCOROUTINE$33(this, dst, offset, length, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(ByteChannelSequentialBase).m7j = function ($completion) {
    var tmp = new $awaitInternalAtLeast1COROUTINE$38(this, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(ByteChannelSequentialBase).e7h = function (atLeast, $completion) {
    var tmp = new $awaitSuspendCOROUTINE$39(this, atLeast, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(ByteChannelSequentialBase).es = function (cause) {
    if (!(this.o7d() == null) ? true : this.p7d()) {
      return false;
    }
    return this.n16(cause == null ? CancellationException_init_$Create$('Channel cancelled') : cause);
  };
  protoOf(ByteChannelSequentialBase).n16 = function (cause) {
    var closeElement = cause == null ? get_CLOSED_SUCCESS() : new CloseElement(cause);
    if (!this.l7c_1.atomicfu$compareAndSet(null, closeElement))
      return false;
    if (!(cause == null)) {
      this.n7c_1.mv();
      this.m7c_1.mv();
      this.s7c_1.mv();
    } else {
      this.p6();
      this.m7c_1.mv();
    }
    this.q7c_1.f56(cause);
    return true;
  };
  protoOf(ByteChannelSequentialBase).n7j = function (dst, limit) {
    var size = this.n7c_1.b7h();
    var tmp;
    if (size.x9(limit) <= 0) {
      dst.m7c_1.o7j(this.n7c_1);
      dst.r7f(size.fa());
      this.d7h(size.fa());
      tmp = size;
    } else {
      tmp = new Long(0, 0);
    }
    return tmp;
  };
  protoOf(ByteChannelSequentialBase).r7f = function (count) {
    addBytesWritten(this, count);
    if (this.p7d()) {
      this.m7c_1.mv();
      ensureNotClosed(this);
    }
    if (this.e7j() ? true : this.d7e() === 0) {
      this.p6();
    }
  };
  function cancel(_this__u8e3s4) {
    return _this__u8e3s4.es(null);
  }
  function readAvailable(_this__u8e3s4, dst, $completion) {
    return _this__u8e3s4.l7j(dst, 0, dst.length, $completion);
  }
  function close(_this__u8e3s4) {
    return _this__u8e3s4.n16(null);
  }
  function ClosedWriteChannelException(message) {
    CancellationException_init_$Init$(message, this);
    captureStack(this, ClosedWriteChannelException);
  }
  function writeFully(_this__u8e3s4, src, $completion) {
    return _this__u8e3s4.g7j(src, 0, src.length, $completion);
  }
  function get_CLOSED_SUCCESS() {
    _init_properties_CloseElement_kt__5e72ik();
    return CLOSED_SUCCESS;
  }
  var CLOSED_SUCCESS;
  function CloseElement(cause) {
    this.t7c_1 = cause;
  }
  var properties_initialized_CloseElement_kt_clkism;
  function _init_properties_CloseElement_kt__5e72ik() {
    if (!properties_initialized_CloseElement_kt_clkism) {
      properties_initialized_CloseElement_kt_clkism = true;
      CLOSED_SUCCESS = new CloseElement(null);
    }
  }
  function writer(_this__u8e3s4, coroutineContext, autoFlush, block) {
    coroutineContext = coroutineContext === VOID ? EmptyCoroutineContext_getInstance() : coroutineContext;
    autoFlush = autoFlush === VOID ? false : autoFlush;
    return launchChannel(_this__u8e3s4, coroutineContext, ByteChannel(autoFlush), true, block);
  }
  function WriterScope() {
  }
  function ChannelJob(delegate, channel) {
    this.q7j_1 = delegate;
    this.r7j_1 = channel;
  }
  protoOf(ChannelJob).b12 = function () {
    return this.r7j_1;
  };
  protoOf(ChannelJob).wo = function () {
    return this.q7j_1.wo();
  };
  protoOf(ChannelJob).p2 = function () {
    return this.q7j_1.p2();
  };
  protoOf(ChannelJob).pp = function () {
    return this.q7j_1.pp();
  };
  protoOf(ChannelJob).lq = function (child) {
    return this.q7j_1.lq(child);
  };
  protoOf(ChannelJob).dq = function (cause) {
    this.q7j_1.dq(cause);
  };
  protoOf(ChannelJob).xf = function (initial, operation) {
    return this.q7j_1.xf(initial, operation);
  };
  protoOf(ChannelJob).hc = function (key) {
    return this.q7j_1.hc(key);
  };
  protoOf(ChannelJob).up = function () {
    return this.q7j_1.up();
  };
  protoOf(ChannelJob).yp = function (onCancelling, invokeImmediately, handler) {
    return this.q7j_1.yp(onCancelling, invokeImmediately, handler);
  };
  protoOf(ChannelJob).xp = function (handler) {
    return this.q7j_1.xp(handler);
  };
  protoOf(ChannelJob).wf = function (key) {
    return this.q7j_1.wf(key);
  };
  protoOf(ChannelJob).yf = function (context) {
    return this.q7j_1.yf(context);
  };
  protoOf(ChannelJob).sp = function () {
    return this.q7j_1.sp();
  };
  protoOf(ChannelJob).toString = function () {
    return 'ChannelJob[' + this.q7j_1 + ']';
  };
  function launchChannel(_this__u8e3s4, context, channel, attachJob, block) {
    var dispatcher = _this__u8e3s4.vo().hc(Key_getInstance());
    var job = launch(_this__u8e3s4, context, VOID, launchChannel$slambda_0(attachJob, channel, block, dispatcher, null));
    job.xp(launchChannel$lambda(channel));
    return new ChannelJob(job, channel);
  }
  function ChannelScope(delegate, channel) {
    this.s7j_1 = channel;
    this.t7j_1 = delegate;
  }
  protoOf(ChannelScope).b12 = function () {
    return this.s7j_1;
  };
  protoOf(ChannelScope).vo = function () {
    return this.t7j_1.vo();
  };
  function launchChannel$slambda($attachJob, $channel, $block, $dispatcher, resultContinuation) {
    this.c7k_1 = $attachJob;
    this.d7k_1 = $channel;
    this.e7k_1 = $block;
    this.f7k_1 = $dispatcher;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(launchChannel$slambda).j20 = function ($this$launch, $completion) {
    var tmp = this.k20($this$launch, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(launchChannel$slambda).yc = function (p1, $completion) {
    return this.j20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(launchChannel$slambda).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 3;
            if (this.c7k_1) {
              this.d7k_1.p7j(ensureNotNull(this.g7k_1.vo().hc(Key_instance)));
            }

            var tmp_0 = this;
            var tmp_1 = new ChannelScope(this.g7k_1, this.d7k_1);
            tmp_0.h7k_1 = isInterface(tmp_1, CoroutineScope) ? tmp_1 : THROW_CCE();
            this.bc_1 = 2;
            this.ac_1 = 1;
            suspendResult = this.e7k_1(this.h7k_1, this);
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
            var tmp_2 = this.dc_1;
            if (tmp_2 instanceof Error) {
              var cause = this.dc_1;
              if (!equals(this.f7k_1, Dispatchers_getInstance().t10_1) ? !(this.f7k_1 == null) : false) {
                throw cause;
              }
              this.d7k_1.es(cause);
              this.ac_1 = 4;
              continue $sm;
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
  protoOf(launchChannel$slambda).k20 = function ($this$launch, completion) {
    var i = new launchChannel$slambda(this.c7k_1, this.d7k_1, this.e7k_1, this.f7k_1, completion);
    i.g7k_1 = $this$launch;
    return i;
  };
  function launchChannel$slambda_0($attachJob, $channel, $block, $dispatcher, resultContinuation) {
    var i = new launchChannel$slambda($attachJob, $channel, $block, $dispatcher, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.j20($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function launchChannel$lambda($channel) {
    return function (cause) {
      $channel.n16(cause);
      return Unit_instance;
    };
  }
  function unwrapCancellationException(_this__u8e3s4) {
    var exception = _this__u8e3s4;
    $l$loop: while (exception instanceof CancellationException) {
      if (equals(exception, exception.cause)) {
        return _this__u8e3s4;
      }
      var tmp0_elvis_lhs = exception.cause;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return exception;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      exception = tmp;
    }
    return exception;
  }
  function decode(_this__u8e3s4, input, max) {
    max = max === VOID ? IntCompanionObject_instance.MAX_VALUE : max;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.comparisons.minOf' call
    var a = toLong(max);
    var b = sizeEstimate(input);
    var capacity = (a.x9(b) <= 0 ? a : b).fa();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$(capacity);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.charsets.decode.<anonymous>' call
    decode_0(_this__u8e3s4, input, this_0, max);
    return this_0.toString();
  }
  function encodeToImpl(_this__u8e3s4, destination, input, fromIndex, toIndex) {
    var start = fromIndex;
    if (start >= toIndex)
      return 0;
    var bytesWritten = 0;
    // Inline function 'io.ktor.utils.io.core.writeWhileSize' call
    var tail = prepareWriteHead(destination, 1, null);
    try {
      var size;
      $l$loop: while (true) {
        // Inline function 'io.ktor.utils.io.charsets.encodeToImpl.<anonymous>' call
        var view = tail;
        // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
        var before = view.p7f_1 - view.n7f_1 | 0;
        var rc = encodeImpl(_this__u8e3s4, input, start, toIndex, view);
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(rc >= 0)) {
          // Inline function 'kotlin.check.<anonymous>' call
          var message = 'Check failed.';
          throw IllegalStateException_init_$Create$(toString(message));
        }
        start = start + rc | 0;
        var tmp = bytesWritten;
        // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
        bytesWritten = tmp + (before - (view.p7f_1 - view.n7f_1 | 0) | 0) | 0;
        size = start >= toIndex ? 0 : rc === 0 ? 8 : 1;
        if (size <= 0)
          break $l$loop;
        tail = prepareWriteHead(destination, size, tail);
      }
    }finally {
      destination.i7k();
    }
    bytesWritten = bytesWritten + encodeCompleteImpl(_this__u8e3s4, destination) | 0;
    return bytesWritten;
  }
  function sizeEstimate(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ByteReadPacket) {
      tmp = _this__u8e3s4.b7h();
    } else {
      // Inline function 'kotlin.comparisons.maxOf' call
      var a = _this__u8e3s4.b7h();
      var b = new Long(16, 0);
      tmp = a.x9(b) >= 0 ? a : b;
    }
    return tmp;
  }
  function encodeCompleteImpl(_this__u8e3s4, dst) {
    var size = 1;
    var bytesWritten = 0;
    // Inline function 'io.ktor.utils.io.core.writeWhile' call
    var tail = prepareWriteHead(dst, 1, null);
    try {
      $l$loop: while (true) {
        // Inline function 'io.ktor.utils.io.charsets.encodeCompleteImpl.<anonymous>' call
        var view = tail;
        // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
        var before = view.p7f_1 - view.n7f_1 | 0;
        if (encodeComplete(_this__u8e3s4, view)) {
          size = 0;
        } else {
          size = size + 1 | 0;
        }
        var tmp = bytesWritten;
        // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
        bytesWritten = tmp + (before - (view.p7f_1 - view.n7f_1 | 0) | 0) | 0;
        if (!(size > 0))
          break $l$loop;
        tail = prepareWriteHead(dst, 1, tail);
      }
    }finally {
      dst.i7k();
    }
    return bytesWritten;
  }
  function encode(_this__u8e3s4, input, fromIndex, toIndex) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.buildPacket' call
      // Inline function 'kotlin.contracts.contract' call
      var builder = new BytePacketBuilder();
      try {
        // Inline function 'io.ktor.utils.io.charsets.encode.<anonymous>' call
        encodeToImpl(_this__u8e3s4, builder, input, fromIndex, toIndex);
        tmp$ret$0 = builder.e3();
        break $l$block;
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
    return tmp$ret$0;
  }
  function Companion() {
    this.j7k_1 = 8;
  }
  protoOf(Companion).k7k = function () {
    return Companion_getInstance_4().a7j_1;
  };
  var Companion_instance;
  function Companion_getInstance_1() {
    return Companion_instance;
  }
  function Buffer(memory) {
    this.l7f_1 = memory;
    this.m7f_1 = 0;
    this.n7f_1 = 0;
    this.o7f_1 = 0;
    var tmp = this;
    // Inline function 'io.ktor.utils.io.bits.Memory.size32' call
    tmp.p7f_1 = this.l7f_1.l7k_1.byteLength;
    var tmp_0 = this;
    // Inline function 'io.ktor.utils.io.bits.Memory.size32' call
    tmp_0.q7f_1 = this.l7f_1.l7k_1.byteLength;
  }
  protoOf(Buffer).m7k = function (count) {
    if (count === 0)
      return Unit_instance;
    var newReadPosition = this.m7f_1 + count | 0;
    if (count < 0 ? true : newReadPosition > this.n7f_1) {
      // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
      var tmp$ret$1 = this.n7f_1 - this.m7f_1 | 0;
      discardFailed(count, tmp$ret$1);
    }
    this.m7f_1 = newReadPosition;
  };
  protoOf(Buffer).n7k = function (count) {
    var newWritePosition = this.n7f_1 + count | 0;
    if (count < 0 ? true : newWritePosition > this.p7f_1) {
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      var tmp$ret$0 = this.p7f_1 - this.n7f_1 | 0;
      commitWrittenFailed(count, tmp$ret$0);
    }
    this.n7f_1 = newWritePosition;
  };
  protoOf(Buffer).o7k = function (position) {
    var limit = this.p7f_1;
    if (position < this.n7f_1) {
      var tmp = position - this.n7f_1 | 0;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      var tmp$ret$0 = this.p7f_1 - this.n7f_1 | 0;
      commitWrittenFailed(tmp, tmp$ret$0);
    }
    if (position >= limit) {
      if (position === limit) {
        this.n7f_1 = position;
        return false;
      }
      var tmp_0 = position - this.n7f_1 | 0;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      var tmp$ret$1 = this.p7f_1 - this.n7f_1 | 0;
      commitWrittenFailed(tmp_0, tmp$ret$1);
    }
    this.n7f_1 = position;
    return true;
  };
  protoOf(Buffer).p7k = function (position) {
    if (position < 0 ? true : position > this.n7f_1) {
      var tmp = position - this.m7f_1 | 0;
      // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
      var tmp$ret$0 = this.n7f_1 - this.m7f_1 | 0;
      discardFailed(tmp, tmp$ret$0);
    }
    if (!(this.m7f_1 === position)) {
      this.m7f_1 = position;
    }
  };
  protoOf(Buffer).q7k = function (count) {
    var newReadPosition = this.m7f_1 - count | 0;
    if (newReadPosition < this.o7f_1) {
      rewindFailed(count, this.m7f_1 - this.o7f_1 | 0);
    }
    this.m7f_1 = newReadPosition;
  };
  protoOf(Buffer).r7k = function (startGap) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(startGap >= 0)) {
      // Inline function 'io.ktor.utils.io.core.Buffer.reserveStartGap.<anonymous>' call
      var message = "startGap shouldn't be negative: " + startGap;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (this.m7f_1 >= startGap) {
      this.o7f_1 = startGap;
      return Unit_instance;
    }
    if (this.m7f_1 === this.n7f_1) {
      if (startGap > this.p7f_1) {
        startGapReservationFailedDueToLimit(this, startGap);
      }
      this.n7f_1 = startGap;
      this.m7f_1 = startGap;
      this.o7f_1 = startGap;
      return Unit_instance;
    }
    startGapReservationFailed(this, startGap);
  };
  protoOf(Buffer).s7k = function (endGap) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(endGap >= 0)) {
      // Inline function 'io.ktor.utils.io.core.Buffer.reserveEndGap.<anonymous>' call
      var message = "endGap shouldn't be negative: " + endGap;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var newLimit = this.q7f_1 - endGap | 0;
    if (newLimit >= this.n7f_1) {
      this.p7f_1 = newLimit;
      return Unit_instance;
    }
    if (newLimit < 0) {
      endGapReservationFailedDueToCapacity(this, endGap);
    }
    if (newLimit < this.o7f_1) {
      endGapReservationFailedDueToStartGap(this, endGap);
    }
    if (this.m7f_1 === this.n7f_1) {
      this.p7f_1 = newLimit;
      this.m7f_1 = newLimit;
      this.n7f_1 = newLimit;
      return Unit_instance;
    }
    endGapReservationFailedDueToContent(this, endGap);
  };
  protoOf(Buffer).t7k = function () {
    this.o7f_1 = 0;
    this.m7f_1 = 0;
    var capacity = this.q7f_1;
    this.n7f_1 = capacity;
  };
  protoOf(Buffer).u7k = function () {
    this.v7k(this.q7f_1 - this.o7f_1 | 0);
  };
  protoOf(Buffer).v7k = function (limit) {
    var startGap = this.o7f_1;
    this.m7f_1 = startGap;
    this.n7f_1 = startGap;
    this.p7f_1 = limit;
  };
  protoOf(Buffer).w7k = function () {
    this.x7k(0);
    this.y7k();
  };
  protoOf(Buffer).y7k = function () {
    this.p7f_1 = this.q7f_1;
  };
  protoOf(Buffer).x7k = function (newReadPosition) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(newReadPosition >= 0)) {
      // Inline function 'io.ktor.utils.io.core.Buffer.releaseStartGap.<anonymous>' call
      var message = "newReadPosition shouldn't be negative: " + newReadPosition;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(newReadPosition <= this.m7f_1)) {
      // Inline function 'io.ktor.utils.io.core.Buffer.releaseStartGap.<anonymous>' call
      var message_0 = "newReadPosition shouldn't be ahead of the read position: " + newReadPosition + ' > ' + this.m7f_1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    this.m7f_1 = newReadPosition;
    if (this.o7f_1 > newReadPosition) {
      this.o7f_1 = newReadPosition;
    }
  };
  protoOf(Buffer).z7k = function (copy) {
    copy.p7f_1 = this.p7f_1;
    copy.o7f_1 = this.o7f_1;
    copy.m7f_1 = this.m7f_1;
    copy.n7f_1 = this.n7f_1;
  };
  protoOf(Buffer).a7l = function () {
    var readPosition = this.m7f_1;
    if (readPosition === this.n7f_1) {
      throw new EOFException('No readable bytes available.');
    }
    this.m7f_1 = readPosition + 1 | 0;
    // Inline function 'io.ktor.utils.io.bits.get' call
    // Inline function 'io.ktor.utils.io.bits.Memory.loadAt' call
    return this.l7f_1.l7k_1.getInt8(readPosition);
  };
  protoOf(Buffer).b7l = function (value) {
    var writePosition = this.n7f_1;
    if (writePosition === this.p7f_1) {
      throw new InsufficientSpaceException('No free space in the buffer to write a byte');
    }
    // Inline function 'io.ktor.utils.io.bits.set' call
    this.l7f_1.l7k_1.setInt8(writePosition, value);
    this.n7f_1 = writePosition + 1 | 0;
  };
  protoOf(Buffer).a26 = function () {
    this.w7k();
    this.u7k();
  };
  protoOf(Buffer).toString = function () {
    var tmp = 'Buffer[0x' + toString_0(hashCode(this), 16) + ']';
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    var tmp_0 = this.n7f_1 - this.m7f_1 | 0;
    // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
    var tmp_1 = this.p7f_1 - this.n7f_1 | 0;
    var tmp_2 = this.o7f_1;
    // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
    return tmp + ('(' + tmp_0 + ' used, ' + tmp_1 + ' free, ' + (tmp_2 + (this.q7f_1 - this.p7f_1 | 0) | 0) + ' reserved of ' + this.q7f_1 + ')');
  };
  function discardFailed(count, readRemaining) {
    throw new EOFException('Unable to discard ' + count + ' bytes: only ' + readRemaining + ' available for reading');
  }
  function commitWrittenFailed(count, writeRemaining) {
    throw new EOFException('Unable to discard ' + count + ' bytes: only ' + writeRemaining + ' available for writing');
  }
  function rewindFailed(count, rewindRemaining) {
    throw IllegalArgumentException_init_$Create$('Unable to rewind ' + count + ' bytes: only ' + rewindRemaining + ' could be rewinded');
  }
  function startGapReservationFailedDueToLimit(_this__u8e3s4, startGap) {
    if (startGap > _this__u8e3s4.q7f_1) {
      throw IllegalArgumentException_init_$Create$('Start gap ' + startGap + ' is bigger than the capacity ' + _this__u8e3s4.q7f_1);
    }
    // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
    var tmp$ret$0 = _this__u8e3s4.q7f_1 - _this__u8e3s4.p7f_1 | 0;
    throw IllegalStateException_init_$Create$('Unable to reserve ' + startGap + ' start gap: there are already ' + tmp$ret$0 + ' bytes reserved in the end');
  }
  function startGapReservationFailed(_this__u8e3s4, startGap) {
    var tmp = 'Unable to reserve ' + startGap + ' start gap: ';
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    var tmp$ret$0 = _this__u8e3s4.n7f_1 - _this__u8e3s4.m7f_1 | 0;
    throw IllegalStateException_init_$Create$(tmp + ('there are already ' + tmp$ret$0 + ' content bytes starting at offset ' + _this__u8e3s4.m7f_1));
  }
  function endGapReservationFailedDueToCapacity(_this__u8e3s4, endGap) {
    throw IllegalArgumentException_init_$Create$('End gap ' + endGap + ' is too big: capacity is ' + _this__u8e3s4.q7f_1);
  }
  function endGapReservationFailedDueToStartGap(_this__u8e3s4, endGap) {
    throw IllegalArgumentException_init_$Create$('End gap ' + endGap + ' is too big: there are already ' + _this__u8e3s4.o7f_1 + ' bytes reserved in the beginning');
  }
  function endGapReservationFailedDueToContent(_this__u8e3s4, endGap) {
    var tmp = 'Unable to reserve end gap ' + endGap + ':';
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    var tmp$ret$0 = _this__u8e3s4.n7f_1 - _this__u8e3s4.m7f_1 | 0;
    throw IllegalArgumentException_init_$Create$(tmp + (' there are already ' + tmp$ret$0 + ' content bytes at offset ' + _this__u8e3s4.m7f_1));
  }
  function InsufficientSpaceException_init_$Init$(name, size, availableSpace, $this) {
    InsufficientSpaceException.call($this, 'Not enough free space to write ' + name + ' of ' + size + ' bytes, available ' + availableSpace + ' bytes.');
    return $this;
  }
  function InsufficientSpaceException_init_$Create$(name, size, availableSpace) {
    var tmp = InsufficientSpaceException_init_$Init$(name, size, availableSpace, objectCreate(protoOf(InsufficientSpaceException)));
    captureStack(tmp, InsufficientSpaceException_init_$Create$);
    return tmp;
  }
  function InsufficientSpaceException(message) {
    message = message === VOID ? 'Not enough free space' : message;
    Exception_init_$Init$(message, this);
    captureStack(this, InsufficientSpaceException);
  }
  function restoreStartGap(_this__u8e3s4, size) {
    _this__u8e3s4.x7k(_this__u8e3s4.m7f_1 - size | 0);
  }
  function writeBufferAppend(_this__u8e3s4, other, maxSize) {
    // Inline function 'kotlin.comparisons.minOf' call
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    var a = other.n7f_1 - other.m7f_1 | 0;
    var size = Math.min(a, maxSize);
    // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
    if ((_this__u8e3s4.p7f_1 - _this__u8e3s4.n7f_1 | 0) <= size) {
      writeBufferAppendUnreserve(_this__u8e3s4, size);
    }
    // Inline function 'io.ktor.utils.io.core.write' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.writeBufferAppend.<anonymous>' call
    var dst = _this__u8e3s4.l7f_1;
    var dstOffset = _this__u8e3s4.n7f_1;
    _this__u8e3s4.p7f_1;
    // Inline function 'io.ktor.utils.io.core.read' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.writeBufferAppend.<anonymous>.<anonymous>' call
    var src = other.l7f_1;
    var srcOffset = other.m7f_1;
    other.n7f_1;
    src.c7l(dst, srcOffset, size, dstOffset);
    var rc = size;
    other.m7k(rc);
    var rc_0 = rc;
    _this__u8e3s4.n7k(rc_0);
    return rc_0;
  }
  function writeBufferAppendUnreserve(_this__u8e3s4, writeSize) {
    // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
    var tmp = _this__u8e3s4.p7f_1 - _this__u8e3s4.n7f_1 | 0;
    // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
    if ((tmp + (_this__u8e3s4.q7f_1 - _this__u8e3s4.p7f_1 | 0) | 0) < writeSize) {
      throw IllegalArgumentException_init_$Create$("Can't append buffer: not enough free space at the end");
    }
    var newWritePosition = _this__u8e3s4.n7f_1 + writeSize | 0;
    var overrunSize = newWritePosition - _this__u8e3s4.p7f_1 | 0;
    if (overrunSize > 0) {
      _this__u8e3s4.y7k();
    }
  }
  function writeBufferPrepend(_this__u8e3s4, other) {
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    var size = other.n7f_1 - other.m7f_1 | 0;
    var readPosition = _this__u8e3s4.m7f_1;
    if (readPosition < size) {
      throw IllegalArgumentException_init_$Create$('Not enough space in the beginning to prepend bytes');
    }
    var newReadPosition = readPosition - size | 0;
    other.l7f_1.c7l(_this__u8e3s4.l7f_1, other.m7f_1, size, newReadPosition);
    other.m7k(size);
    _this__u8e3s4.x7k(newReadPosition);
    return size;
  }
  function get_DefaultChunkedBufferPool() {
    _init_properties_BufferFactory_kt__uj6b48();
    return DefaultChunkedBufferPool;
  }
  var DefaultChunkedBufferPool;
  function DefaultBufferPool(bufferSize, capacity, allocator) {
    bufferSize = bufferSize === VOID ? 4096 : bufferSize;
    capacity = capacity === VOID ? 1000 : capacity;
    allocator = allocator === VOID ? DefaultAllocator_instance : allocator;
    DefaultPool.call(this, capacity);
    this.g7l_1 = bufferSize;
    this.h7l_1 = allocator;
  }
  protoOf(DefaultBufferPool).i7l = function () {
    return new ChunkBuffer(this.h7l_1.j7l(this.g7l_1), null, this);
  };
  protoOf(DefaultBufferPool).k7l = function (instance) {
    this.h7l_1.l7l(instance.l7f_1);
    protoOf(DefaultPool).p7l.call(this, instance);
    instance.a7m();
  };
  protoOf(DefaultBufferPool).p7l = function (instance) {
    return this.k7l(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  protoOf(DefaultBufferPool).b7m = function (instance) {
    protoOf(DefaultPool).c7m.call(this, instance);
    // Inline function 'kotlin.check' call
    // Inline function 'io.ktor.utils.io.bits.Memory.size' call
    var this_0 = instance.l7f_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!toLong(this_0.l7k_1.byteLength).equals(toLong(this.g7l_1))) {
      // Inline function 'io.ktor.utils.io.core.DefaultBufferPool.validateInstance.<anonymous>' call
      // Inline function 'io.ktor.utils.io.bits.Memory.size' call
      var this_1 = instance.l7f_1;
      var tmp$ret$1 = toLong(this_1.l7k_1.byteLength);
      var message = 'Buffer size mismatch. Expected: ' + this.g7l_1 + ', actual: ' + tmp$ret$1.toString();
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(instance === Companion_getInstance_4().a7j_1)) {
      // Inline function 'io.ktor.utils.io.core.DefaultBufferPool.validateInstance.<anonymous>' call
      var message_0 = "ChunkBuffer.Empty couldn't be recycled";
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(instance === Companion_instance.k7k())) {
      // Inline function 'io.ktor.utils.io.core.DefaultBufferPool.validateInstance.<anonymous>' call
      var message_1 = "Empty instance couldn't be recycled";
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(instance.d7m() === 0)) {
      // Inline function 'io.ktor.utils.io.core.DefaultBufferPool.validateInstance.<anonymous>' call
      var message_2 = 'Unable to clear buffer: it is still in use.';
      throw IllegalStateException_init_$Create$(toString(message_2));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(instance.f13() == null)) {
      // Inline function 'io.ktor.utils.io.core.DefaultBufferPool.validateInstance.<anonymous>' call
      var message_3 = "Recycled instance shouldn't be a part of a chain.";
      throw IllegalStateException_init_$Create$(toString(message_3));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(instance.z7l_1 == null)) {
      // Inline function 'io.ktor.utils.io.core.DefaultBufferPool.validateInstance.<anonymous>' call
      var message_4 = "Recycled instance shouldn't be a view or another buffer.";
      throw IllegalStateException_init_$Create$(toString(message_4));
    }
  };
  protoOf(DefaultBufferPool).c7m = function (instance) {
    return this.b7m(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  protoOf(DefaultBufferPool).e7m = function (instance) {
    // Inline function 'kotlin.apply' call
    var this_0 = protoOf(DefaultPool).f7m.call(this, instance);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.DefaultBufferPool.clearInstance.<anonymous>' call
    this_0.g7m();
    this_0.a26();
    return this_0;
  };
  protoOf(DefaultBufferPool).f7m = function (instance) {
    return this.e7m(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  function get_DEFAULT_BUFFER_SIZE() {
    return DEFAULT_BUFFER_SIZE;
  }
  var DEFAULT_BUFFER_SIZE;
  var properties_initialized_BufferFactory_kt_q9tgbq;
  function _init_properties_BufferFactory_kt__uj6b48() {
    if (!properties_initialized_BufferFactory_kt_q9tgbq) {
      properties_initialized_BufferFactory_kt_q9tgbq = true;
      DefaultChunkedBufferPool = new DefaultBufferPool();
    }
  }
  function writeFully_0(_this__u8e3s4, source, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? source.length - offset | 0 : length;
    // Inline function 'io.ktor.utils.io.core.writeExact' call
    var name = 'byte array';
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.write' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.writeExact.<anonymous>' call
    var memory = _this__u8e3s4.l7f_1;
    var start = _this__u8e3s4.n7f_1;
    var writeRemaining = _this__u8e3s4.p7f_1 - start | 0;
    if (writeRemaining < length) {
      throw InsufficientSpaceException_init_$Create$(name, length, writeRemaining);
    }
    // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
    // Inline function 'io.ktor.utils.io.bits.storeByteArray' call
    // Inline function 'io.ktor.utils.io.bits.useMemory' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    of(Companion_getInstance_6(), source, offset, length).c7l(memory, 0, length, start);
    var rc = length;
    _this__u8e3s4.n7k(rc);
  }
  function writeFully_1(_this__u8e3s4, src, length) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(length >= 0)) {
      // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
      var message = "length shouldn't be negative: " + length;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(length <= (src.n7f_1 - src.m7f_1 | 0))) {
      // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
      // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
      var message_0 = "length shouldn't be greater than the source read remaining: " + length + ' > ' + (src.n7f_1 - src.m7f_1 | 0);
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(length <= (_this__u8e3s4.p7f_1 - _this__u8e3s4.n7f_1 | 0))) {
      // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      var message_1 = "length shouldn't be greater than the destination write remaining space: " + length + ' > ' + (_this__u8e3s4.p7f_1 - _this__u8e3s4.n7f_1 | 0);
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    // Inline function 'io.ktor.utils.io.core.writeExact' call
    var name = 'buffer readable content';
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.write' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.writeExact.<anonymous>' call
    var memory = _this__u8e3s4.l7f_1;
    var start = _this__u8e3s4.n7f_1;
    var writeRemaining = _this__u8e3s4.p7f_1 - start | 0;
    if (writeRemaining < length) {
      throw InsufficientSpaceException_init_$Create$(name, length, writeRemaining);
    }
    // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
    src.l7f_1.c7l(memory, src.m7f_1, length, start);
    src.m7k(length);
    var rc = length;
    _this__u8e3s4.n7k(rc);
  }
  function readFully(_this__u8e3s4, destination, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? destination.length - offset | 0 : length;
    // Inline function 'io.ktor.utils.io.core.readExact' call
    var name = 'byte array';
    // Inline function 'kotlin.contracts.contract' call
    var value;
    // Inline function 'io.ktor.utils.io.core.read' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.readExact.<anonymous>' call
    var memory = _this__u8e3s4.l7f_1;
    var start = _this__u8e3s4.m7f_1;
    if ((_this__u8e3s4.n7f_1 - start | 0) < length) {
      throw new EOFException('Not enough bytes to read a ' + name + ' of size ' + length + '.');
    }
    copyTo_1(memory, destination, start, length, offset);
    value = Unit_instance;
    var rc = length;
    _this__u8e3s4.m7k(rc);
  }
  function readFully_0(_this__u8e3s4, dst, length) {
    var tmp;
    if (length === VOID) {
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp = dst.p7f_1 - dst.n7f_1 | 0;
    } else {
      tmp = length;
    }
    length = tmp;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(length >= 0)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(length <= (dst.p7f_1 - dst.n7f_1 | 0))) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message_0 = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'io.ktor.utils.io.core.readExact' call
    var name = 'buffer content';
    // Inline function 'kotlin.contracts.contract' call
    var value;
    // Inline function 'io.ktor.utils.io.core.read' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.readExact.<anonymous>' call
    var memory = _this__u8e3s4.l7f_1;
    var start = _this__u8e3s4.m7f_1;
    if ((_this__u8e3s4.n7f_1 - start | 0) < length) {
      throw new EOFException('Not enough bytes to read a ' + name + ' of size ' + length + '.');
    }
    memory.c7l(dst.l7f_1, start, length, dst.n7f_1);
    dst.n7k(length);
    value = Unit_instance;
    var rc = length;
    _this__u8e3s4.m7k(rc);
    return length;
  }
  function writeShort(_this__u8e3s4, value) {
    var name = 'short integer';
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.write' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.writeExact.<anonymous>' call
    var memory = _this__u8e3s4.l7f_1;
    var start = _this__u8e3s4.n7f_1;
    var writeRemaining = _this__u8e3s4.p7f_1 - start | 0;
    if (writeRemaining < 2) {
      throw InsufficientSpaceException_init_$Create$(name, 2, writeRemaining);
    }
    // Inline function 'io.ktor.utils.io.core.writeShort.<anonymous>' call
    // Inline function 'io.ktor.utils.io.bits.storeShortAt' call
    memory.l7k_1.setInt16(start, value, false);
    var rc = 2;
    _this__u8e3s4.n7k(rc);
    return Unit_instance;
  }
  function readShort(_this__u8e3s4) {
    // Inline function 'io.ktor.utils.io.core.readExact' call
    var name = 'short integer';
    // Inline function 'kotlin.contracts.contract' call
    var value;
    // Inline function 'io.ktor.utils.io.core.read' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.readExact.<anonymous>' call
    var memory = _this__u8e3s4.l7f_1;
    var start = _this__u8e3s4.m7f_1;
    if ((_this__u8e3s4.n7f_1 - start | 0) < 2) {
      throw new EOFException('Not enough bytes to read a ' + name + ' of size ' + 2 + '.');
    }
    // Inline function 'io.ktor.utils.io.core.readShort.<anonymous>' call
    // Inline function 'io.ktor.utils.io.bits.loadShortAt' call
    value = memory.l7k_1.getInt16(start, false);
    var rc = 2;
    _this__u8e3s4.m7k(rc);
    return value;
  }
  function remainingAll(_this__u8e3s4) {
    return remainingAll_0(_this__u8e3s4, new Long(0, 0));
  }
  function findTail(_this__u8e3s4) {
    var $this = _this__u8e3s4;
    $l$1: do {
      $l$0: do {
        var tmp0_elvis_lhs = $this.f13();
        var tmp;
        if (tmp0_elvis_lhs == null) {
          return $this;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var next = tmp;
        $this = next;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function releaseAll(_this__u8e3s4, pool) {
    var current = _this__u8e3s4;
    while (!(current == null)) {
      var next = current.j7m();
      current.k7m(pool);
      current = next;
    }
  }
  function remainingAll_0(_this__u8e3s4, n) {
    var $this = _this__u8e3s4;
    var n_0 = n;
    $l$1: do {
      $l$0: do {
        // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
        var this_0 = $this;
        var tmp$ret$0 = this_0.n7f_1 - this_0.m7f_1 | 0;
        var rem = toLong(tmp$ret$0).eb(n_0);
        var tmp0_elvis_lhs = $this.f13();
        var tmp;
        if (tmp0_elvis_lhs == null) {
          return rem;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var next = tmp;
        $this = next;
        n_0 = rem;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function BytePacketBuilder(pool) {
    pool = pool === VOID ? Companion_getInstance_4().d7j() : pool;
    Output.call(this, pool);
  }
  protoOf(BytePacketBuilder).m = function () {
    return this.l7m();
  };
  protoOf(BytePacketBuilder).o1o = function () {
    return this.l7m() === 0;
  };
  protoOf(BytePacketBuilder).m7m = function () {
  };
  protoOf(BytePacketBuilder).n7m = function (source, offset, length) {
  };
  protoOf(BytePacketBuilder).y5 = function (value) {
    var tmp = protoOf(Output).y5.call(this, value);
    return tmp instanceof BytePacketBuilder ? tmp : THROW_CCE();
  };
  protoOf(BytePacketBuilder).m8 = function (value) {
    var tmp = protoOf(Output).m8.call(this, value);
    return tmp instanceof BytePacketBuilder ? tmp : THROW_CCE();
  };
  protoOf(BytePacketBuilder).n8 = function (value, startIndex, endIndex) {
    var tmp = protoOf(Output).n8.call(this, value, startIndex, endIndex);
    return tmp instanceof BytePacketBuilder ? tmp : THROW_CCE();
  };
  protoOf(BytePacketBuilder).e3 = function () {
    var size = this.m();
    var head = this.m7d();
    return head == null ? Companion_getInstance_2().o7m_1 : new ByteReadPacket(head, toLong(size), this.e7d_1);
  };
  protoOf(BytePacketBuilder).toString = function () {
    return 'BytePacketBuilder[0x' + hashCode(this) + ']';
  };
  function ByteReadPacket_init_$Init$(head, pool, $this) {
    ByteReadPacket.call($this, head, remainingAll(head), pool);
    return $this;
  }
  function ByteReadPacket_init_$Create$(head, pool) {
    return ByteReadPacket_init_$Init$(head, pool, objectCreate(protoOf(ByteReadPacket)));
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.o7m_1 = new ByteReadPacket(Companion_getInstance_4().a7j_1, new Long(0, 0), Companion_getInstance_4().z7i_1);
  }
  var Companion_instance_0;
  function Companion_getInstance_2() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function ByteReadPacket(head, remaining, pool) {
    Companion_getInstance_2();
    Input.call(this, head, remaining, pool);
    this.u7m();
  }
  protoOf(ByteReadPacket).c7n = function () {
    return null;
  };
  protoOf(ByteReadPacket).d7n = function (destination, offset, length) {
    return 0;
  };
  protoOf(ByteReadPacket).toString = function () {
    return 'ByteReadPacket[' + hashCode(this) + ']';
  };
  function _set__head__b4pap2($this, newHead) {
    $this.v7g_1 = newHead;
    $this.w7g_1 = newHead.l7f_1;
    $this.x7g_1 = newHead.m7f_1;
    $this.y7g_1 = newHead.n7f_1;
  }
  function readASCII($this, out, min, max) {
    if (max === 0 ? min === 0 : false)
      return 0;
    else if ($this.n7i())
      if (min === 0)
        return 0;
      else {
        atLeastMinCharactersRequire($this, min);
      }
     else if (max < min) {
      minShouldBeLess($this, min, max);
    }
    var copied = 0;
    var utf8 = false;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.takeWhile' call
      var release = true;
      var tmp0_elvis_lhs = prepareReadFirstHead($this, 1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      try {
        $l$loop_0: do {
          // Inline function 'io.ktor.utils.io.core.Input.readASCII.<anonymous>' call
          var buffer = current;
          var tmp$ret$4;
          $l$block_0: {
            // Inline function 'io.ktor.utils.io.core.internal.decodeASCII' call
            // Inline function 'io.ktor.utils.io.core.read' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'io.ktor.utils.io.core.internal.decodeASCII.<anonymous>' call
            var memory = buffer.l7f_1;
            var start = buffer.m7f_1;
            var endExclusive = buffer.n7f_1;
            var inductionVariable = start;
            if (inductionVariable < endExclusive)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                // Inline function 'io.ktor.utils.io.bits.get' call
                // Inline function 'io.ktor.utils.io.bits.Memory.loadAt' call
                var codepoint = memory.l7k_1.getInt8(index) & 255;
                var tmp_0;
                if ((codepoint & 128) === 128) {
                  tmp_0 = true;
                } else {
                  // Inline function 'io.ktor.utils.io.core.Input.readASCII.<anonymous>.<anonymous>' call
                  var it = numberToChar(codepoint);
                  var tmp_1;
                  if (copied === max) {
                    tmp_1 = false;
                  } else {
                    out.y5(it);
                    copied = copied + 1 | 0;
                    tmp_1 = true;
                  }
                  tmp_0 = !tmp_1;
                }
                if (tmp_0) {
                  buffer.m7k(index - start | 0);
                  tmp$ret$4 = false;
                  break $l$block_0;
                }
              }
               while (inductionVariable < endExclusive);
            var rc = endExclusive - start | 0;
            buffer.m7k(rc);
            tmp$ret$4 = true;
          }
          var rc_0 = tmp$ret$4;
          var tmp_2;
          if (rc_0) {
            tmp_2 = true;
          } else if (copied === max) {
            tmp_2 = false;
          } else {
            utf8 = true;
            tmp_2 = false;
          }
          if (!tmp_2) {
            break $l$loop_0;
          }
          release = false;
          var tmp1_elvis_lhs = prepareReadNextHead($this, current);
          var tmp_3;
          if (tmp1_elvis_lhs == null) {
            break $l$loop_0;
          } else {
            tmp_3 = tmp1_elvis_lhs;
          }
          var next = tmp_3;
          current = next;
          release = true;
        }
         while (true);
      }finally {
        if (release) {
          completeReadHead($this, current);
        }
      }
    }
    if (utf8) {
      return copied + readUtf8($this, out, min - copied | 0, max - copied | 0) | 0;
    }
    if (copied < min) {
      prematureEndOfStreamChars($this, min, copied);
    }
    return copied;
  }
  function atLeastMinCharactersRequire($this, min) {
    throw new EOFException('at least ' + min + ' characters required but no bytes available');
  }
  function minShouldBeLess($this, min, max) {
    throw IllegalArgumentException_init_$Create$('min should be less or equal to max but min = ' + min + ', max = ' + max);
  }
  function prematureEndOfStreamChars($this, min, copied) {
    throw new MalformedUTF8InputException('Premature end of stream: expected at least ' + min + ' chars but had only ' + copied);
  }
  function readUtf8($this, out, min, max) {
    var copied = 0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.takeWhileSize' call
      var release = true;
      var tmp0_elvis_lhs = prepareReadFirstHead($this, 1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      var size = 1;
      try {
        $l$loop_0: do {
          // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
          var this_0 = current;
          var before = this_0.n7f_1 - this_0.m7f_1 | 0;
          var after;
          if (before >= size) {
            try {
              // Inline function 'io.ktor.utils.io.core.Input.readUtf8.<anonymous>' call
              var buffer = current;
              var tmp$ret$5;
              $l$block_3: {
                // Inline function 'io.ktor.utils.io.core.internal.decodeUTF8' call
                var byteCount = 0;
                var value = 0;
                var lastByteCount = 0;
                // Inline function 'io.ktor.utils.io.core.read' call
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'io.ktor.utils.io.core.internal.decodeUTF8.<anonymous>' call
                var memory = buffer.l7f_1;
                var start = buffer.m7f_1;
                var endExclusive = buffer.n7f_1;
                var inductionVariable = start;
                if (inductionVariable < endExclusive)
                  do {
                    var index = inductionVariable;
                    inductionVariable = inductionVariable + 1 | 0;
                    // Inline function 'io.ktor.utils.io.bits.get' call
                    // Inline function 'io.ktor.utils.io.bits.Memory.loadAt' call
                    var v = memory.l7k_1.getInt8(index) & 255;
                    if ((v & 128) === 0) {
                      if (!(byteCount === 0)) {
                        malformedByteCount(byteCount);
                      }
                      // Inline function 'io.ktor.utils.io.core.Input.readUtf8.<anonymous>.<anonymous>' call
                      var it = numberToChar(v);
                      var tmp_0;
                      if (copied === max) {
                        tmp_0 = false;
                      } else {
                        out.y5(it);
                        copied = copied + 1 | 0;
                        tmp_0 = true;
                      }
                      if (!tmp_0) {
                        buffer.m7k(index - start | 0);
                        tmp$ret$5 = -1;
                        break $l$block_3;
                      }
                    } else if (byteCount === 0) {
                      var mask = 128;
                      value = v;
                      var inductionVariable_0 = 1;
                      if (inductionVariable_0 <= 6)
                        $l$loop: do {
                          var i = inductionVariable_0;
                          inductionVariable_0 = inductionVariable_0 + 1 | 0;
                          if (!((value & mask) === 0)) {
                            value = value & ~mask;
                            mask = mask >> 1;
                            byteCount = byteCount + 1 | 0;
                          } else {
                            break $l$loop;
                          }
                        }
                         while (inductionVariable_0 <= 6);
                      lastByteCount = byteCount;
                      byteCount = byteCount - 1 | 0;
                      if (lastByteCount > (endExclusive - index | 0)) {
                        buffer.m7k(index - start | 0);
                        tmp$ret$5 = lastByteCount;
                        break $l$block_3;
                      }
                    } else {
                      value = value << 6 | v & 127;
                      byteCount = byteCount - 1 | 0;
                      if (byteCount === 0) {
                        if (isBmpCodePoint(value)) {
                          // Inline function 'io.ktor.utils.io.core.Input.readUtf8.<anonymous>.<anonymous>' call
                          var it_0 = numberToChar(value);
                          var tmp_1;
                          if (copied === max) {
                            tmp_1 = false;
                          } else {
                            out.y5(it_0);
                            copied = copied + 1 | 0;
                            tmp_1 = true;
                          }
                          if (!tmp_1) {
                            buffer.m7k(((index - start | 0) - lastByteCount | 0) + 1 | 0);
                            tmp$ret$5 = -1;
                            break $l$block_3;
                          }
                        } else if (!isValidCodePoint(value)) {
                          malformedCodePoint(value);
                        } else {
                          var tmp_2;
                          // Inline function 'io.ktor.utils.io.core.Input.readUtf8.<anonymous>.<anonymous>' call
                          var it_1 = numberToChar(highSurrogate(value));
                          var tmp_3;
                          if (copied === max) {
                            tmp_3 = false;
                          } else {
                            out.y5(it_1);
                            copied = copied + 1 | 0;
                            tmp_3 = true;
                          }
                          if (!tmp_3) {
                            tmp_2 = true;
                          } else {
                            // Inline function 'io.ktor.utils.io.core.Input.readUtf8.<anonymous>.<anonymous>' call
                            var it_2 = numberToChar(lowSurrogate(value));
                            var tmp_4;
                            if (copied === max) {
                              tmp_4 = false;
                            } else {
                              out.y5(it_2);
                              copied = copied + 1 | 0;
                              tmp_4 = true;
                            }
                            tmp_2 = !tmp_4;
                          }
                          if (tmp_2) {
                            buffer.m7k(((index - start | 0) - lastByteCount | 0) + 1 | 0);
                            tmp$ret$5 = -1;
                            break $l$block_3;
                          }
                        }
                        value = 0;
                      }
                    }
                  }
                   while (inductionVariable < endExclusive);
                var rc = endExclusive - start | 0;
                buffer.m7k(rc);
                tmp$ret$5 = 0;
              }
              var size_0 = tmp$ret$5;
              size = size_0 === 0 ? 1 : size_0 > 0 ? size_0 : 0;
            }finally {
              // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
              var this_1 = current;
              after = this_1.n7f_1 - this_1.m7f_1 | 0;
            }
          } else {
            after = before;
          }
          release = false;
          var tmp_5;
          if (after === 0) {
            tmp_5 = prepareReadNextHead($this, current);
          } else {
            var tmp_6;
            if (after < size) {
              tmp_6 = true;
            } else {
              // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
              var this_2 = current;
              var tmp_7 = this_2.q7f_1 - this_2.p7f_1 | 0;
              tmp_6 = tmp_7 < 8;
            }
            if (tmp_6) {
              completeReadHead($this, current);
              tmp_5 = prepareReadFirstHead($this, size);
            } else {
              tmp_5 = current;
            }
          }
          var tmp1_elvis_lhs = tmp_5;
          var tmp_8;
          if (tmp1_elvis_lhs == null) {
            break $l$loop_0;
          } else {
            tmp_8 = tmp1_elvis_lhs;
          }
          var next = tmp_8;
          current = next;
          release = true;
        }
         while (size > 0);
      }finally {
        if (release) {
          completeReadHead($this, current);
        }
      }
    }
    if (copied < min) {
      prematureEndOfStreamChars($this, min, copied);
    }
    return copied;
  }
  function discardAsMuchAsPossible($this, n, skipped) {
    var $this_0 = $this;
    var n_0 = n;
    var skipped_0 = skipped;
    $l$1: do {
      $l$0: do {
        if (n_0.equals(new Long(0, 0)))
          return skipped_0;
        var tmp0_elvis_lhs = $this_0.q7n(1);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          return skipped_0;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var current = tmp;
        // Inline function 'kotlin.comparisons.minOf' call
        // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
        var tmp$ret$0 = current.n7f_1 - current.m7f_1 | 0;
        var a = toLong(tmp$ret$0);
        var b = n_0;
        var size = (a.x9(b) <= 0 ? a : b).fa();
        current.m7k(size);
        var tmp1_this = $this_0;
        tmp1_this.x7g_1 = tmp1_this.x7g_1 + size | 0;
        afterRead($this_0, current);
        // Inline function 'kotlin.Long.minus' call
        // Inline function 'kotlin.Long.plus' call
        $this_0 = $this_0;
        n_0 = n_0.fb(toLong(size));
        skipped_0 = skipped_0.eb(toLong(size));
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function discardAsMuchAsPossible_0($this, n, skipped) {
    var currentCount = n;
    var currentSkipped = skipped;
    while (true) {
      if (currentCount === 0) {
        return currentSkipped;
      }
      var tmp0_elvis_lhs = $this.q7n(1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return currentSkipped;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      // Inline function 'kotlin.comparisons.minOf' call
      // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
      var a = current.n7f_1 - current.m7f_1 | 0;
      var b = currentCount;
      var size = Math.min(a, b);
      current.m7k(size);
      $this.x7g_1 = $this.x7g_1 + size | 0;
      afterRead($this, current);
      currentCount = currentCount - size | 0;
      currentSkipped = currentSkipped + size | 0;
    }
  }
  function fixGapAfterReadFallback($this, current) {
    if ($this.a7h_1 ? current.f13() == null : false) {
      $this.x7g_1 = current.m7f_1;
      $this.y7g_1 = current.n7f_1;
      $this.e7n(new Long(0, 0));
      return Unit_instance;
    }
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    var size = current.n7f_1 - current.m7f_1 | 0;
    // Inline function 'kotlin.comparisons.minOf' call
    // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
    var b = 8 - (current.q7f_1 - current.p7f_1 | 0) | 0;
    var overrun = Math.min(size, b);
    if (size > overrun) {
      fixGapAfterReadFallbackUnreserved($this, current, size, overrun);
    } else {
      var new_0 = $this.u7g_1.h7m();
      new_0.s7k(8);
      new_0.s7n(current.j7m());
      writeBufferAppend(new_0, current, size);
      _set__head__b4pap2($this, new_0);
    }
    current.k7m($this.u7g_1);
  }
  function fixGapAfterReadFallbackUnreserved($this, current, size, overrun) {
    var chunk1 = $this.u7g_1.h7m();
    var chunk2 = $this.u7g_1.h7m();
    chunk1.s7k(8);
    chunk2.s7k(8);
    chunk1.s7n(chunk2);
    chunk2.s7n(current.j7m());
    writeBufferAppend(chunk1, current, size - overrun | 0);
    writeBufferAppend(chunk2, current, overrun);
    _set__head__b4pap2($this, chunk1);
    $this.e7n(remainingAll(chunk2));
  }
  function ensureNext($this, current, empty) {
    var $this_0 = $this;
    var current_0 = current;
    var empty_0 = empty;
    $l$1: do {
      $l$0: do {
        if (current_0 === empty_0) {
          return doFill($this_0);
        }
        var next = current_0.j7m();
        current_0.k7m($this_0.u7g_1);
        var tmp;
        if (next == null) {
          _set__head__b4pap2($this_0, empty_0);
          $this_0.e7n(new Long(0, 0));
          $this_0 = $this_0;
          current_0 = empty_0;
          empty_0 = empty_0;
          continue $l$0;
        } else {
          // Inline function 'io.ktor.utils.io.core.canRead' call
          if (next.n7f_1 > next.m7f_1) {
            _set__head__b4pap2($this_0, next);
            var tmp0_this = $this_0;
            // Inline function 'kotlin.Long.minus' call
            var this_0 = tmp0_this.z7g_1;
            // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
            var other = next.n7f_1 - next.m7f_1 | 0;
            var tmp$ret$2 = this_0.fb(toLong(other));
            tmp0_this.e7n(tmp$ret$2);
            tmp = next;
          } else {
            $this_0 = $this_0;
            current_0 = next;
            empty_0 = empty_0;
            continue $l$0;
          }
        }
        return tmp;
      }
       while (false);
    }
     while (true);
  }
  function doFill($this) {
    if ($this.a7h_1)
      return null;
    var chunk = $this.c7n();
    if (chunk == null) {
      $this.a7h_1 = true;
      return null;
    }
    appendView($this, chunk);
    return chunk;
  }
  function appendView($this, chunk) {
    var tail = findTail($this.v7g_1);
    if (tail === Companion_getInstance_4().a7j_1) {
      _set__head__b4pap2($this, chunk);
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!$this.z7g_1.equals(new Long(0, 0))) {
        throw IllegalStateException_init_$Create$('It should be no tail remaining bytes if current tail is EmptyBuffer');
      }
      var tmp0_safe_receiver = chunk.f13();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : remainingAll(tmp0_safe_receiver);
      $this.e7n(tmp1_elvis_lhs == null ? new Long(0, 0) : tmp1_elvis_lhs);
    } else {
      tail.s7n(chunk);
      $this.e7n($this.z7g_1.eb(remainingAll(chunk)));
    }
  }
  function prepareReadLoop($this, minSize, head) {
    var $this_0 = $this;
    var minSize_0 = minSize;
    var head_0 = head;
    $l$1: do {
      $l$0: do {
        // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
        var this_0 = $this_0;
        var headSize = this_0.y7g_1 - this_0.x7g_1 | 0;
        if (headSize >= minSize_0)
          return head_0;
        var tmp0_elvis_lhs = head_0.f13();
        var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? doFill($this_0) : tmp0_elvis_lhs;
        var tmp;
        if (tmp1_elvis_lhs == null) {
          return null;
        } else {
          tmp = tmp1_elvis_lhs;
        }
        var next = tmp;
        if (headSize === 0) {
          if (!(head_0 === Companion_getInstance_4().a7j_1)) {
            $this_0.r7n(head_0);
          }
          $this_0 = $this_0;
          minSize_0 = minSize_0;
          head_0 = next;
          continue $l$0;
        } else {
          var desiredExtraBytes = minSize_0 - headSize | 0;
          var copied = writeBufferAppend(head_0, next, desiredExtraBytes);
          $this_0.y7g_1 = head_0.n7f_1;
          var tmp2_this = $this_0;
          // Inline function 'kotlin.Long.minus' call
          var tmp$ret$1 = tmp2_this.z7g_1.fb(toLong(copied));
          tmp2_this.e7n(tmp$ret$1);
          // Inline function 'io.ktor.utils.io.core.canRead' call
          if (!(next.n7f_1 > next.m7f_1)) {
            head_0.s7n(null);
            head_0.s7n(next.j7m());
            next.k7m($this_0.u7g_1);
          } else {
            next.r7k(copied);
          }
        }
        // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
        var this_1 = head_0;
        if ((this_1.n7f_1 - this_1.m7f_1 | 0) >= minSize_0)
          return head_0;
        var tmp_0 = minSize_0;
        if (tmp_0 > 8) {
          minSizeIsTooBig($this_0, minSize_0);
        }
        $this_0 = $this_0;
        minSize_0 = minSize_0;
        head_0 = head_0;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function minSizeIsTooBig($this, minSize) {
    throw IllegalStateException_init_$Create$('minSize of ' + minSize + ' is too big (should be less than ' + 8 + ')');
  }
  function afterRead($this, head) {
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    if ((head.n7f_1 - head.m7f_1 | 0) === 0) {
      $this.r7n(head);
    }
  }
  function Companion_1() {
  }
  var Companion_instance_1;
  function Companion_getInstance_3() {
    return Companion_instance_1;
  }
  function Input(head, remaining, pool) {
    head = head === VOID ? Companion_getInstance_4().a7j_1 : head;
    remaining = remaining === VOID ? remainingAll(head) : remaining;
    pool = pool === VOID ? Companion_getInstance_4().d7j() : pool;
    this.u7g_1 = pool;
    this.v7g_1 = head;
    this.w7g_1 = head.l7f_1;
    this.x7g_1 = head.m7f_1;
    this.y7g_1 = head.n7f_1;
    var tmp = this;
    // Inline function 'kotlin.Long.minus' call
    var other = this.y7g_1 - this.x7g_1 | 0;
    tmp.z7g_1 = remaining.fb(toLong(other));
    this.a7h_1 = false;
  }
  protoOf(Input).n7i = function () {
    var tmp;
    var tmp_0;
    // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
    if ((this.y7g_1 - this.x7g_1 | 0) === 0) {
      tmp_0 = this.z7g_1.equals(new Long(0, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.a7h_1 ? true : doFill(this) == null;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Input).p7m = function () {
    // Inline function 'kotlin.also' call
    var this_0 = this.v7g_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.Input.<get-head>.<anonymous>' call
    this_0.p7k(this.x7g_1);
    return this_0;
  };
  protoOf(Input).e7n = function (newValue) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(newValue.x9(new Long(0, 0)) >= 0)) {
      // Inline function 'io.ktor.utils.io.core.Input.<set-tailRemaining>.<anonymous>' call
      var message = "tailRemaining shouldn't be negative: " + newValue.toString();
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.z7g_1 = newValue;
  };
  protoOf(Input).b7h = function () {
    // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
    var tmp$ret$0 = this.y7g_1 - this.x7g_1 | 0;
    return toLong(tmp$ret$0).eb(this.z7g_1);
  };
  protoOf(Input).q7h = function () {
    return !(this.x7g_1 === this.y7g_1) ? true : !this.z7g_1.equals(new Long(0, 0));
  };
  protoOf(Input).mv = function () {
    var head = this.p7m();
    var empty = Companion_getInstance_4().a7j_1;
    if (!(head === empty)) {
      _set__head__b4pap2(this, empty);
      this.e7n(new Long(0, 0));
      releaseAll(head, this.u7g_1);
    }
  };
  protoOf(Input).m7d = function () {
    var head = this.p7m();
    var empty = Companion_getInstance_4().a7j_1;
    if (head === empty)
      return null;
    _set__head__b4pap2(this, empty);
    this.e7n(new Long(0, 0));
    return head;
  };
  protoOf(Input).f7n = function () {
    var head = this.p7m();
    var next = head.f13();
    var empty = Companion_getInstance_4().a7j_1;
    if (head === empty)
      return null;
    if (next == null) {
      _set__head__b4pap2(this, empty);
      this.e7n(new Long(0, 0));
    } else {
      _set__head__b4pap2(this, next);
      // Inline function 'kotlin.Long.minus' call
      var this_0 = this.z7g_1;
      // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
      var other = next.n7f_1 - next.m7f_1 | 0;
      var tmp$ret$1 = this_0.fb(toLong(other));
      this.e7n(tmp$ret$1);
    }
    head.s7n(null);
    return head;
  };
  protoOf(Input).g7n = function (chain) {
    if (chain === Companion_getInstance_4().a7j_1)
      return Unit_instance;
    var size = remainingAll(chain);
    if (this.v7g_1 === Companion_getInstance_4().a7j_1) {
      _set__head__b4pap2(this, chain);
      // Inline function 'kotlin.Long.minus' call
      // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
      var other = this.y7g_1 - this.x7g_1 | 0;
      var tmp$ret$1 = size.fb(toLong(other));
      this.e7n(tmp$ret$1);
    } else {
      findTail(this.v7g_1).s7n(chain);
      this.e7n(this.z7g_1.eb(size));
    }
  };
  protoOf(Input).h7n = function (chain) {
    var tail = findTail(this.p7m());
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    var size = chain.n7f_1 - chain.m7f_1 | 0;
    var tmp;
    if (size === 0) {
      tmp = true;
    } else {
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp = (tail.p7f_1 - tail.n7f_1 | 0) < size;
    }
    if (tmp)
      return false;
    writeBufferAppend(tail, chain, size);
    if (this.p7m() === tail) {
      this.y7g_1 = tail.n7f_1;
    } else {
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$2 = this.z7g_1.eb(toLong(size));
      this.e7n(tmp$ret$2);
    }
    return true;
  };
  protoOf(Input).i7n = function (n) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(n >= 0)) {
      // Inline function 'io.ktor.utils.io.core.Input.discard.<anonymous>' call
      var message = 'Negative discard is not allowed: ' + n;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return discardAsMuchAsPossible_0(this, n, 0);
  };
  protoOf(Input).m7k = function (n) {
    if (!(this.i7n(n) === n))
      throw new EOFException('Unable to discard ' + n + ' bytes due to end of packet');
  };
  protoOf(Input).j7n = function (n) {
    if (n.x9(new Long(0, 0)) <= 0)
      return new Long(0, 0);
    return discardAsMuchAsPossible(this, n, new Long(0, 0));
  };
  protoOf(Input).k7n = function (min, max) {
    if (min === 0 ? max === 0 ? true : this.n7i() : false)
      return '';
    var remaining = this.b7h();
    if (remaining.x9(new Long(0, 0)) > 0 ? toLong(max).x9(remaining) >= 0 : false)
      return readTextExactBytes(this, remaining.fa());
    // Inline function 'kotlin.text.buildString' call
    var capacity = coerceAtMost(coerceAtLeast(min, 16), max);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$(capacity);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.Input.readText.<anonymous>' call
    readASCII(this, this_0, min, max);
    return this_0.toString();
  };
  protoOf(Input).l7n = function (min, max, $super) {
    min = min === VOID ? 0 : min;
    max = max === VOID ? IntCompanionObject_instance.MAX_VALUE : max;
    return $super === VOID ? this.k7n(min, max) : $super.k7n.call(this, min, max);
  };
  protoOf(Input).m7n = function (minSize) {
    return prepareReadLoop(this, minSize, this.p7m());
  };
  protoOf(Input).n7n = function (current) {
    return this.o7n(current);
  };
  protoOf(Input).o7n = function (current) {
    return ensureNext(this, current, Companion_getInstance_4().a7j_1);
  };
  protoOf(Input).p7n = function (current) {
    var tmp0_elvis_lhs = current.f13();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return fixGapAfterReadFallback(this, current);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var next = tmp;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    var remaining = current.n7f_1 - current.m7f_1 | 0;
    // Inline function 'kotlin.comparisons.minOf' call
    // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
    var b = 8 - (current.q7f_1 - current.p7f_1 | 0) | 0;
    var overrunSize = Math.min(remaining, b);
    if (next.o7f_1 < overrunSize) {
      return fixGapAfterReadFallback(this, current);
    }
    restoreStartGap(next, overrunSize);
    if (remaining > overrunSize) {
      current.y7k();
      this.y7g_1 = current.n7f_1;
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$3 = this.z7g_1.eb(toLong(overrunSize));
      this.e7n(tmp$ret$3);
    } else {
      _set__head__b4pap2(this, next);
      // Inline function 'kotlin.Long.minus' call
      var this_0 = this.z7g_1;
      // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
      var other = (next.n7f_1 - next.m7f_1 | 0) - overrunSize | 0;
      var tmp$ret$5 = this_0.fb(toLong(other));
      this.e7n(tmp$ret$5);
      current.j7m();
      current.k7m(this.u7g_1);
    }
  };
  protoOf(Input).c7n = function () {
    var buffer = this.u7g_1.h7m();
    try {
      buffer.s7k(8);
      var tmp = buffer.n7f_1;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      var tmp$ret$0 = buffer.p7f_1 - buffer.n7f_1 | 0;
      var copied = this.d7n(buffer.l7f_1, tmp, tmp$ret$0);
      if (copied === 0) {
        this.a7h_1 = true;
        // Inline function 'io.ktor.utils.io.core.canRead' call
        if (!(buffer.n7f_1 > buffer.m7f_1)) {
          buffer.k7m(this.u7g_1);
          return null;
        }
      }
      buffer.n7k(copied);
      return buffer;
    } catch ($p) {
      if ($p instanceof Error) {
        var t = $p;
        buffer.k7m(this.u7g_1);
        throw t;
      } else {
        throw $p;
      }
    }
  };
  protoOf(Input).u7m = function () {
    if (!this.a7h_1) {
      this.a7h_1 = true;
    }
  };
  protoOf(Input).q7n = function (minSize) {
    var head = this.p7m();
    if ((this.y7g_1 - this.x7g_1 | 0) >= minSize)
      return head;
    return prepareReadLoop(this, minSize, head);
  };
  protoOf(Input).r7n = function (head) {
    var tmp0_elvis_lhs = head.j7m();
    var next = tmp0_elvis_lhs == null ? Companion_getInstance_4().a7j_1 : tmp0_elvis_lhs;
    _set__head__b4pap2(this, next);
    // Inline function 'kotlin.Long.minus' call
    var this_0 = this.z7g_1;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    var other = next.n7f_1 - next.m7f_1 | 0;
    var tmp$ret$1 = this_0.fb(toLong(other));
    this.e7n(tmp$ret$1);
    head.k7m(this.u7g_1);
    return next;
  };
  function discard(_this__u8e3s4) {
    Companion_getInstance();
    return _this__u8e3s4.j7n(new Long(-1, 2147483647));
  }
  function readFully_1(_this__u8e3s4, dst, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? dst.length - offset | 0 : length;
    // Inline function 'io.ktor.utils.io.core.requireNoRemaining' call
    // Inline function 'io.ktor.utils.io.core.readFullyBytesTemplate' call
    var remaining = length;
    var dstOffset = offset;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.takeWhile' call
      var release = true;
      var tmp0_elvis_lhs = prepareReadFirstHead(_this__u8e3s4, 1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      try {
        $l$loop_0: do {
          // Inline function 'io.ktor.utils.io.core.readFullyBytesTemplate.<anonymous>' call
          var buffer = current;
          // Inline function 'kotlin.comparisons.minOf' call
          var a = remaining;
          // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
          var b = buffer.n7f_1 - buffer.m7f_1 | 0;
          var count = Math.min(a, b);
          // Inline function 'io.ktor.utils.io.core.readFully.<anonymous>' call
          var dstOffset_0 = dstOffset;
          readFully(buffer, dst, dstOffset_0, count);
          remaining = remaining - count | 0;
          dstOffset = dstOffset + count | 0;
          if (!(remaining > 0)) {
            break $l$loop_0;
          }
          release = false;
          var tmp1_elvis_lhs = prepareReadNextHead(_this__u8e3s4, current);
          var tmp_0;
          if (tmp1_elvis_lhs == null) {
            break $l$loop_0;
          } else {
            tmp_0 = tmp1_elvis_lhs;
          }
          var next = tmp_0;
          current = next;
          release = true;
        }
         while (true);
      }finally {
        if (release) {
          completeReadHead(_this__u8e3s4, current);
        }
      }
    }
    var this_0 = remaining;
    if (this_0 > 0) {
      prematureEndOfStream(this_0);
    }
  }
  function readFully_2(_this__u8e3s4, dst, length) {
    var tmp;
    if (length === VOID) {
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp = dst.p7f_1 - dst.n7f_1 | 0;
    } else {
      tmp = length;
    }
    length = tmp;
    // Inline function 'io.ktor.utils.io.core.requireNoRemaining' call
    // Inline function 'io.ktor.utils.io.core.readFullyBytesTemplate' call
    var remaining = length;
    var dstOffset = 0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.takeWhile' call
      var release = true;
      var tmp0_elvis_lhs = prepareReadFirstHead(_this__u8e3s4, 1);
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        break $l$block;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var current = tmp_0;
      try {
        $l$loop_0: do {
          // Inline function 'io.ktor.utils.io.core.readFullyBytesTemplate.<anonymous>' call
          var buffer = current;
          // Inline function 'kotlin.comparisons.minOf' call
          var a = remaining;
          // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
          var b = buffer.n7f_1 - buffer.m7f_1 | 0;
          var count = Math.min(a, b);
          // Inline function 'io.ktor.utils.io.core.readFully.<anonymous>' call
          readFully_0(buffer, dst, count);
          remaining = remaining - count | 0;
          dstOffset = dstOffset + count | 0;
          if (!(remaining > 0)) {
            break $l$loop_0;
          }
          release = false;
          var tmp1_elvis_lhs = prepareReadNextHead(_this__u8e3s4, current);
          var tmp_1;
          if (tmp1_elvis_lhs == null) {
            break $l$loop_0;
          } else {
            tmp_1 = tmp1_elvis_lhs;
          }
          var next = tmp_1;
          current = next;
          release = true;
        }
         while (true);
      }finally {
        if (release) {
          completeReadHead(_this__u8e3s4, current);
        }
      }
    }
    var this_0 = remaining;
    if (this_0 > 0) {
      prematureEndOfStream(this_0);
    }
  }
  function readShort_0(_this__u8e3s4) {
    var tmp$ret$3;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.readPrimitive' call
      // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
      if ((_this__u8e3s4.y7g_1 - _this__u8e3s4.x7g_1 | 0) > 2) {
        var index = _this__u8e3s4.x7g_1;
        _this__u8e3s4.x7g_1 = index + 2 | 0;
        // Inline function 'io.ktor.utils.io.core.readShort.<anonymous>' call
        // Inline function 'io.ktor.utils.io.bits.loadShortAt' call
        tmp$ret$3 = _this__u8e3s4.w7g_1.l7k_1.getInt16(index, false);
        break $l$block;
      }
      // Inline function 'io.ktor.utils.io.core.readShort.<anonymous>' call
      tmp$ret$3 = readShortFallback(_this__u8e3s4);
    }
    return tmp$ret$3;
  }
  function readShortFallback(_this__u8e3s4) {
    // Inline function 'io.ktor.utils.io.core.readPrimitiveFallback' call
    var tmp0_elvis_lhs = prepareReadFirstHead(_this__u8e3s4, 2);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      prematureEndOfStream(2);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var head = tmp;
    // Inline function 'io.ktor.utils.io.core.readShortFallback.<anonymous>' call
    var value = readShort(head);
    completeReadHead(_this__u8e3s4, head);
    return value;
  }
  function flushChain($this) {
    var tmp0_elvis_lhs = $this.m7d();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var oldTail = tmp;
    try {
      // Inline function 'io.ktor.utils.io.core.forEachChunk' call
      // Inline function 'kotlin.contracts.contract' call
      var current = oldTail;
      $l$loop: do {
        // Inline function 'io.ktor.utils.io.core.Output.flushChain.<anonymous>' call
        var chunk = current;
        var tmp_0 = chunk.m7f_1;
        // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
        var tmp$ret$0 = chunk.n7f_1 - chunk.m7f_1 | 0;
        $this.n7m(chunk.l7f_1, tmp_0, tmp$ret$0);
        var tmp0_elvis_lhs_0 = current.f13();
        var tmp_1;
        if (tmp0_elvis_lhs_0 == null) {
          break $l$loop;
        } else {
          tmp_1 = tmp0_elvis_lhs_0;
        }
        current = tmp_1;
      }
       while (true);
    }finally {
      releaseAll(oldTail, $this.e7d_1);
    }
  }
  function appendNewChunk($this) {
    var new_0 = $this.e7d_1.h7m();
    new_0.s7k(8);
    $this.q7m(new_0);
    return new_0;
  }
  function appendChainImpl($this, head, newTail, chainedSizeDelta) {
    var _tail = $this.g7d_1;
    if (_tail == null) {
      $this.f7d_1 = head;
      $this.l7d_1 = 0;
    } else {
      _tail.s7n(head);
      var tailPosition = $this.i7d_1;
      _tail.o7k(tailPosition);
      $this.l7d_1 = $this.l7d_1 + (tailPosition - $this.k7d_1 | 0) | 0;
    }
    $this.g7d_1 = newTail;
    $this.l7d_1 = $this.l7d_1 + chainedSizeDelta | 0;
    $this.h7d_1 = newTail.l7f_1;
    $this.i7d_1 = newTail.n7f_1;
    $this.k7d_1 = newTail.m7f_1;
    $this.j7d_1 = newTail.p7f_1;
  }
  function writeByteFallback($this, v) {
    appendNewChunk($this).b7l(v);
    $this.i7d_1 = $this.i7d_1 + 1 | 0;
  }
  function appendCharFallback($this, c) {
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.Output.write' call
      var buffer = $this.s7m(3);
      try {
        // Inline function 'io.ktor.utils.io.core.Output.appendCharFallback.<anonymous>' call
        // Inline function 'io.ktor.utils.io.core.internal.putUtf8Char' call
        var this_0 = buffer.l7f_1;
        var offset = buffer.n7f_1;
        // Inline function 'kotlin.code' call
        var v = Char__toInt_impl_vasixd(c);
        var tmp;
        if (0 <= v ? v <= 127 : false) {
          // Inline function 'io.ktor.utils.io.bits.Memory.storeAt' call
          var value = toByte(v);
          this_0.l7k_1.setInt8(offset, value);
          tmp = 1;
        } else if (128 <= v ? v <= 2047 : false) {
          // Inline function 'io.ktor.utils.io.bits.set' call
          var value_0 = toByte(192 | v >> 6 & 31);
          this_0.l7k_1.setInt8(offset, value_0);
          // Inline function 'io.ktor.utils.io.bits.set' call
          var index = offset + 1 | 0;
          var value_1 = toByte(128 | v & 63);
          this_0.l7k_1.setInt8(index, value_1);
          tmp = 2;
        } else if (2048 <= v ? v <= 65535 : false) {
          // Inline function 'io.ktor.utils.io.bits.set' call
          var value_2 = toByte(224 | v >> 12 & 15);
          this_0.l7k_1.setInt8(offset, value_2);
          // Inline function 'io.ktor.utils.io.bits.set' call
          var index_0 = offset + 1 | 0;
          var value_3 = toByte(128 | v >> 6 & 63);
          this_0.l7k_1.setInt8(index_0, value_3);
          // Inline function 'io.ktor.utils.io.bits.set' call
          var index_1 = offset + 2 | 0;
          var value_4 = toByte(128 | v & 63);
          this_0.l7k_1.setInt8(index_1, value_4);
          tmp = 3;
        } else if (65536 <= v ? v <= 1114111 : false) {
          // Inline function 'io.ktor.utils.io.bits.set' call
          var value_5 = toByte(240 | v >> 18 & 7);
          this_0.l7k_1.setInt8(offset, value_5);
          // Inline function 'io.ktor.utils.io.bits.set' call
          var index_2 = offset + 1 | 0;
          var value_6 = toByte(128 | v >> 12 & 63);
          this_0.l7k_1.setInt8(index_2, value_6);
          // Inline function 'io.ktor.utils.io.bits.set' call
          var index_3 = offset + 2 | 0;
          var value_7 = toByte(128 | v >> 6 & 63);
          this_0.l7k_1.setInt8(index_3, value_7);
          // Inline function 'io.ktor.utils.io.bits.set' call
          var index_4 = offset + 3 | 0;
          var value_8 = toByte(128 | v & 63);
          this_0.l7k_1.setInt8(index_4, value_8);
          tmp = 4;
        } else {
          malformedCodePoint(v);
        }
        var size = tmp;
        buffer.n7k(size);
        var result = size;
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(result >= 0)) {
          // Inline function 'io.ktor.utils.io.core.Output.write.<anonymous>' call
          var message = "The returned value shouldn't be negative";
          throw IllegalStateException_init_$Create$(toString(message));
        }
        break $l$block;
      }finally {
        $this.i7k();
      }
    }
  }
  function writePacketMerging($this, tail, foreignStolen, pool) {
    tail.o7k($this.i7d_1);
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    var lastSize = tail.n7f_1 - tail.m7f_1 | 0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    var nextSize = foreignStolen.n7f_1 - foreignStolen.m7f_1 | 0;
    var maxCopySize = get_PACKET_MAX_COPY_SIZE();
    var tmp;
    var tmp_0;
    if (nextSize < maxCopySize) {
      // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
      var tmp_1 = tail.q7f_1 - tail.p7f_1 | 0;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp_0 = nextSize <= (tmp_1 + (tail.p7f_1 - tail.n7f_1 | 0) | 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = nextSize;
    } else {
      tmp = -1;
    }
    var appendSize = tmp;
    var tmp_2;
    if ((lastSize < maxCopySize ? lastSize <= foreignStolen.o7f_1 : false) ? isExclusivelyOwned(foreignStolen) : false) {
      tmp_2 = lastSize;
    } else {
      tmp_2 = -1;
    }
    var prependSize = tmp_2;
    if (appendSize === -1 ? prependSize === -1 : false) {
      $this.r7m(foreignStolen);
    } else if (prependSize === -1 ? true : appendSize <= prependSize) {
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      var tmp_3 = tail.p7f_1 - tail.n7f_1 | 0;
      // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
      var tmp$ret$5 = tail.q7f_1 - tail.p7f_1 | 0;
      writeBufferAppend(tail, foreignStolen, tmp_3 + tmp$ret$5 | 0);
      $this.i7k();
      var tmp0_safe_receiver = foreignStolen.j7m();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        $this.r7m(tmp0_safe_receiver);
      }
      foreignStolen.k7m(pool);
    } else if (appendSize === -1 ? true : prependSize < appendSize) {
      writePacketSlowPrepend($this, foreignStolen, tail);
    } else {
      throw IllegalStateException_init_$Create$('prep = ' + prependSize + ', app = ' + appendSize);
    }
  }
  function writePacketSlowPrepend($this, foreignStolen, tail) {
    writeBufferPrepend(foreignStolen, tail);
    var tmp0_elvis_lhs = $this.f7d_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = "head should't be null since it is already handled in the fast-path";
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var _head = tmp;
    if (_head === tail) {
      $this.f7d_1 = foreignStolen;
    } else {
      var pre = _head;
      $l$loop: while (true) {
        var next = ensureNotNull(pre.f13());
        if (next === tail)
          break $l$loop;
        pre = next;
      }
      pre.s7n(foreignStolen);
    }
    tail.k7m($this.e7d_1);
    $this.g7d_1 = findTail(foreignStolen);
  }
  function Output(pool) {
    this.e7d_1 = pool;
    this.f7d_1 = null;
    this.g7d_1 = null;
    this.h7d_1 = Companion_getInstance_6().t7n_1;
    this.i7d_1 = 0;
    this.j7d_1 = 0;
    this.k7d_1 = 0;
    this.l7d_1 = 0;
  }
  protoOf(Output).l7m = function () {
    return this.l7d_1 + (this.i7d_1 - this.k7d_1 | 0) | 0;
  };
  protoOf(Output).p7m = function () {
    var tmp0_elvis_lhs = this.f7d_1;
    return tmp0_elvis_lhs == null ? Companion_getInstance_4().a7j_1 : tmp0_elvis_lhs;
  };
  protoOf(Output).p6 = function () {
    flushChain(this);
  };
  protoOf(Output).m7d = function () {
    var tmp0_elvis_lhs = this.f7d_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var head = tmp;
    var tmp1_safe_receiver = this.g7d_1;
    if (tmp1_safe_receiver == null)
      null;
    else
      tmp1_safe_receiver.o7k(this.i7d_1);
    this.f7d_1 = null;
    this.g7d_1 = null;
    this.i7d_1 = 0;
    this.j7d_1 = 0;
    this.k7d_1 = 0;
    this.l7d_1 = 0;
    this.h7d_1 = Companion_getInstance_6().t7n_1;
    return head;
  };
  protoOf(Output).q7m = function (buffer) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(buffer.f13() == null)) {
      // Inline function 'io.ktor.utils.io.core.Output.appendSingleChunk.<anonymous>' call
      var message = 'It should be a single buffer chunk.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    appendChainImpl(this, buffer, buffer, 0);
  };
  protoOf(Output).r7m = function (head) {
    var tail = findTail(head);
    // Inline function 'io.ktor.utils.io.core.internal.toIntOrFail' call
    // Inline function 'kotlin.Long.minus' call
    var this_0 = remainingAll(head);
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    var other = tail.n7f_1 - tail.m7f_1 | 0;
    var this_1 = this_0.fb(toLong(other));
    var name = 'total size increase';
    if (this_1.x9(toLong(IntCompanionObject_instance.MAX_VALUE)) >= 0) {
      failLongToIntConversion(this_1, name);
    }
    var chainedSizeDelta = this_1.fa();
    appendChainImpl(this, head, tail, chainedSizeDelta);
  };
  protoOf(Output).b7l = function (v) {
    var index = this.i7d_1;
    if (index < this.j7d_1) {
      this.i7d_1 = index + 1 | 0;
      // Inline function 'io.ktor.utils.io.bits.set' call
      this.h7d_1.l7k_1.setInt8(index, v);
      return Unit_instance;
    }
    return writeByteFallback(this, v);
  };
  protoOf(Output).y1k = function () {
    try {
      this.p6();
    }finally {
      this.m7m();
    }
  };
  protoOf(Output).y5 = function (value) {
    var tailPosition = this.i7d_1;
    if ((this.j7d_1 - tailPosition | 0) >= 3) {
      // Inline function 'io.ktor.utils.io.core.internal.putUtf8Char' call
      var this_0 = this.h7d_1;
      // Inline function 'kotlin.code' call
      var v = Char__toInt_impl_vasixd(value);
      var tmp;
      if (0 <= v ? v <= 127 : false) {
        // Inline function 'io.ktor.utils.io.bits.Memory.storeAt' call
        var value_0 = toByte(v);
        this_0.l7k_1.setInt8(tailPosition, value_0);
        tmp = 1;
      } else if (128 <= v ? v <= 2047 : false) {
        // Inline function 'io.ktor.utils.io.bits.set' call
        var value_1 = toByte(192 | v >> 6 & 31);
        this_0.l7k_1.setInt8(tailPosition, value_1);
        // Inline function 'io.ktor.utils.io.bits.set' call
        var index = tailPosition + 1 | 0;
        var value_2 = toByte(128 | v & 63);
        this_0.l7k_1.setInt8(index, value_2);
        tmp = 2;
      } else if (2048 <= v ? v <= 65535 : false) {
        // Inline function 'io.ktor.utils.io.bits.set' call
        var value_3 = toByte(224 | v >> 12 & 15);
        this_0.l7k_1.setInt8(tailPosition, value_3);
        // Inline function 'io.ktor.utils.io.bits.set' call
        var index_0 = tailPosition + 1 | 0;
        var value_4 = toByte(128 | v >> 6 & 63);
        this_0.l7k_1.setInt8(index_0, value_4);
        // Inline function 'io.ktor.utils.io.bits.set' call
        var index_1 = tailPosition + 2 | 0;
        var value_5 = toByte(128 | v & 63);
        this_0.l7k_1.setInt8(index_1, value_5);
        tmp = 3;
      } else if (65536 <= v ? v <= 1114111 : false) {
        // Inline function 'io.ktor.utils.io.bits.set' call
        var value_6 = toByte(240 | v >> 18 & 7);
        this_0.l7k_1.setInt8(tailPosition, value_6);
        // Inline function 'io.ktor.utils.io.bits.set' call
        var index_2 = tailPosition + 1 | 0;
        var value_7 = toByte(128 | v >> 12 & 63);
        this_0.l7k_1.setInt8(index_2, value_7);
        // Inline function 'io.ktor.utils.io.bits.set' call
        var index_3 = tailPosition + 2 | 0;
        var value_8 = toByte(128 | v >> 6 & 63);
        this_0.l7k_1.setInt8(index_3, value_8);
        // Inline function 'io.ktor.utils.io.bits.set' call
        var index_4 = tailPosition + 3 | 0;
        var value_9 = toByte(128 | v & 63);
        this_0.l7k_1.setInt8(index_4, value_9);
        tmp = 4;
      } else {
        malformedCodePoint(v);
      }
      var size = tmp;
      this.i7d_1 = tailPosition + size | 0;
      return this;
    }
    appendCharFallback(this, value);
    return this;
  };
  protoOf(Output).m8 = function (value) {
    if (value == null) {
      this.n8('null', 0, 4);
    } else {
      this.n8(value, 0, charSequenceLength(value));
    }
    return this;
  };
  protoOf(Output).n8 = function (value, startIndex, endIndex) {
    if (value == null) {
      return this.n8('null', startIndex, endIndex);
    }
    writeText(this, value, startIndex, endIndex, Charsets_getInstance().u7n_1);
    return this;
  };
  protoOf(Output).o7j = function (packet) {
    var foreignStolen = packet.m7d();
    if (foreignStolen == null) {
      packet.mv();
      return Unit_instance;
    }
    var tail = this.g7d_1;
    if (tail == null) {
      this.r7m(foreignStolen);
      return Unit_instance;
    }
    writePacketMerging(this, tail, foreignStolen, packet.u7g_1);
  };
  protoOf(Output).n7d = function (chunkBuffer) {
    var _tail = this.g7d_1;
    if (_tail == null) {
      this.r7m(chunkBuffer);
      return Unit_instance;
    }
    writePacketMerging(this, _tail, chunkBuffer, this.e7d_1);
  };
  protoOf(Output).c7h = function (p, n) {
    var remaining = n;
    $l$loop: while (remaining.x9(new Long(0, 0)) > 0) {
      // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
      var tmp$ret$0 = p.y7g_1 - p.x7g_1 | 0;
      var headRemaining = toLong(tmp$ret$0);
      if (headRemaining.x9(remaining) <= 0) {
        remaining = remaining.fb(headRemaining);
        var tmp0_elvis_lhs = p.f7n();
        var tmp;
        if (tmp0_elvis_lhs == null) {
          throw new EOFException('Unexpected end of packet');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        this.q7m(tmp);
      } else {
        // Inline function 'io.ktor.utils.io.core.read' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp0_elvis_lhs_0 = p.q7n(1);
        var tmp_0;
        if (tmp0_elvis_lhs_0 == null) {
          prematureEndOfStream(1);
        } else {
          tmp_0 = tmp0_elvis_lhs_0;
        }
        var buffer = tmp_0;
        var positionBefore = buffer.m7f_1;
        try {
          // Inline function 'io.ktor.utils.io.core.Output.writePacket.<anonymous>' call
          writeFully_2(this, buffer, remaining.fa());
        }finally {
          var positionAfter = buffer.m7f_1;
          if (positionAfter < positionBefore) {
            throw IllegalStateException_init_$Create$("Buffer's position shouldn't be rewinded");
          }
          if (positionAfter === buffer.n7f_1) {
            p.o7n(buffer);
          } else {
            p.x7g_1 = positionAfter;
          }
        }
        break $l$loop;
      }
    }
  };
  protoOf(Output).mv = function () {
    this.y1k();
  };
  protoOf(Output).s7m = function (n) {
    // Inline function 'io.ktor.utils.io.core.Output.tailRemaining' call
    if ((this.j7d_1 - this.i7d_1 | 0) >= n) {
      var tmp0_safe_receiver = this.g7d_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_safe_receiver.o7k(this.i7d_1);
        return tmp0_safe_receiver;
      }
    }
    return appendNewChunk(this);
  };
  protoOf(Output).i7k = function () {
    var tmp0_safe_receiver = this.g7d_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.i7d_1 = tmp0_safe_receiver.n7f_1;
    }
  };
  protoOf(Output).t7m = function () {
    var head = this.p7m();
    if (!(head === Companion_getInstance_4().a7j_1)) {
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(head.f13() == null)) {
        // Inline function 'kotlin.check.<anonymous>' call
        var message = 'Check failed.';
        throw IllegalStateException_init_$Create$(toString(message));
      }
      head.u7k();
      head.s7k(8);
      this.i7d_1 = head.n7f_1;
      this.k7d_1 = this.i7d_1;
      this.j7d_1 = head.p7f_1;
    }
  };
  function writeFully_2(_this__u8e3s4, src, length) {
    var tmp;
    if (length === VOID) {
      // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
      tmp = src.n7f_1 - src.m7f_1 | 0;
    } else {
      tmp = length;
    }
    length = tmp;
    // Inline function 'io.ktor.utils.io.core.writeFullyBytesTemplate' call
    var currentOffset = 0;
    var remaining = length;
    // Inline function 'io.ktor.utils.io.core.writeWhile' call
    var tail = prepareWriteHead(_this__u8e3s4, 1, null);
    try {
      $l$loop: while (true) {
        // Inline function 'io.ktor.utils.io.core.writeFullyBytesTemplate.<anonymous>' call
        var buffer = tail;
        // Inline function 'kotlin.comparisons.minOf' call
        var a = remaining;
        // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
        var b = buffer.p7f_1 - buffer.n7f_1 | 0;
        var size = Math.min(a, b);
        // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
        writeFully_1(buffer, src, size);
        currentOffset = currentOffset + size | 0;
        remaining = remaining - size | 0;
        if (!(remaining > 0))
          break $l$loop;
        tail = prepareWriteHead(_this__u8e3s4, 1, tail);
      }
    }finally {
      _this__u8e3s4.i7k();
    }
  }
  function writeFully_3(_this__u8e3s4, src, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? src.length - offset | 0 : length;
    // Inline function 'io.ktor.utils.io.core.writeFullyBytesTemplate' call
    var currentOffset = offset;
    var remaining = length;
    // Inline function 'io.ktor.utils.io.core.writeWhile' call
    var tail = prepareWriteHead(_this__u8e3s4, 1, null);
    try {
      $l$loop: while (true) {
        // Inline function 'io.ktor.utils.io.core.writeFullyBytesTemplate.<anonymous>' call
        var buffer = tail;
        // Inline function 'kotlin.comparisons.minOf' call
        var a = remaining;
        // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
        var b = buffer.p7f_1 - buffer.n7f_1 | 0;
        var size = Math.min(a, b);
        // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
        var currentOffset_0 = currentOffset;
        writeFully_0(buffer, src, currentOffset_0, size);
        currentOffset = currentOffset + size | 0;
        remaining = remaining - size | 0;
        if (!(remaining > 0))
          break $l$loop;
        tail = prepareWriteHead(_this__u8e3s4, 1, tail);
      }
    }finally {
      _this__u8e3s4.i7k();
    }
  }
  function writeShort_0(_this__u8e3s4, value) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.writePrimitiveTemplate' call
      var index = _this__u8e3s4.i7d_1;
      if ((_this__u8e3s4.j7d_1 - index | 0) > 2) {
        _this__u8e3s4.i7d_1 = index + 2 | 0;
        // Inline function 'io.ktor.utils.io.core.writeShort.<anonymous>' call
        // Inline function 'io.ktor.utils.io.bits.storeShortAt' call
        _this__u8e3s4.h7d_1.l7k_1.setInt16(index, value, false);
        tmp$ret$0 = true;
        break $l$block;
      }
      tmp$ret$0 = false;
    }
    if (!tmp$ret$0) {
      writeShortFallback(_this__u8e3s4, value);
    }
  }
  function writeShortFallback(_this__u8e3s4, value) {
    // Inline function 'io.ktor.utils.io.core.writePrimitiveFallbackTemplate' call
    var tail = _this__u8e3s4.s7m(2);
    // Inline function 'io.ktor.utils.io.core.writeShortFallback.<anonymous>' call
    writeShort(tail, value);
    _this__u8e3s4.i7k();
    if (!true) {
      // Inline function 'io.ktor.utils.io.bits.highByte' call
      var tmp$ret$1 = toByte(value >>> 8 | 0);
      _this__u8e3s4.b7l(tmp$ret$1);
      // Inline function 'io.ktor.utils.io.bits.lowByte' call
      var tmp$ret$2 = toByte(value & 255);
      _this__u8e3s4.b7l(tmp$ret$2);
    }
  }
  function readText(_this__u8e3s4, charset, max) {
    charset = charset === VOID ? Charsets_getInstance().u7n_1 : charset;
    max = max === VOID ? IntCompanionObject_instance.MAX_VALUE : max;
    return decode(charset.x7n(), _this__u8e3s4, max);
  }
  function readBytes(_this__u8e3s4, n) {
    var tmp;
    if (n === VOID) {
      // Inline function 'io.ktor.utils.io.core.coerceAtMostMaxIntOrFail' call
      var this_0 = _this__u8e3s4.b7h();
      var message = 'Unable to convert to a ByteArray: packet is too big';
      if (this_0.x9(toLong(IntCompanionObject_instance.MAX_VALUE)) > 0)
        throw IllegalArgumentException_init_$Create$(message);
      tmp = this_0.fa();
    } else {
      tmp = n;
    }
    n = tmp;
    var tmp_0;
    if (!(n === 0)) {
      // Inline function 'kotlin.also' call
      var this_1 = new Int8Array(n);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'io.ktor.utils.io.core.readBytes.<anonymous>' call
      readFully_1(_this__u8e3s4, this_1, 0, n);
      tmp_0 = this_1;
    } else {
      tmp_0 = get_EmptyByteArray();
    }
    return tmp_0;
  }
  function prematureEndOfStream(size) {
    throw new EOFException('Premature end of stream: expected ' + size + ' bytes');
  }
  function readTextExactBytes(_this__u8e3s4, bytesCount, charset) {
    charset = charset === VOID ? Charsets_getInstance().u7n_1 : charset;
    return decodeExactBytes(charset.x7n(), _this__u8e3s4, bytesCount);
  }
  function writeText(_this__u8e3s4, text, fromIndex, toIndex, charset) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? charSequenceLength(text) : toIndex;
    charset = charset === VOID ? Charsets_getInstance().u7n_1 : charset;
    if (charset === Charsets_getInstance().u7n_1) {
      return writeTextUtf8(_this__u8e3s4, text, fromIndex, toIndex);
    }
    encodeToImpl(charset.y7n(), _this__u8e3s4, text, fromIndex, toIndex);
  }
  function writeTextUtf8(_this__u8e3s4, text, fromIndex, toIndex) {
    var index = fromIndex;
    // Inline function 'io.ktor.utils.io.core.writeWhileSize' call
    var tail = prepareWriteHead(_this__u8e3s4, 1, null);
    try {
      var size;
      $l$loop: while (true) {
        // Inline function 'io.ktor.utils.io.core.writeTextUtf8.<anonymous>' call
        var buffer = tail;
        var memory = buffer.l7f_1;
        var dstOffset = buffer.n7f_1;
        var dstLimit = buffer.p7f_1;
        var tmp0_container = encodeUTF8(memory, text, index, toIndex, dstOffset, dstLimit);
        var characters = EncodeResult__component1_impl_36tlhi(tmp0_container);
        var bytes = EncodeResult__component2_impl_3nv7vp(tmp0_container);
        var tmp = index;
        // Inline function 'kotlin.UShort.toInt' call
        index = tmp + (_UShort___get_data__impl__g0245(characters) & 65535) | 0;
        // Inline function 'kotlin.UShort.toInt' call
        var tmp$ret$1 = _UShort___get_data__impl__g0245(bytes) & 65535;
        buffer.n7k(tmp$ret$1);
        var tmp_0;
        var tmp_1;
        // Inline function 'kotlin.UShort.toInt' call
        if ((_UShort___get_data__impl__g0245(characters) & 65535) === 0) {
          tmp_1 = index < toIndex;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp_0 = 8;
        } else {
          if (index < toIndex) {
            tmp_0 = 1;
          } else {
            tmp_0 = 0;
          }
        }
        size = tmp_0;
        if (size <= 0)
          break $l$loop;
        tail = prepareWriteHead(_this__u8e3s4, size, tail);
      }
    }finally {
      _this__u8e3s4.i7k();
    }
  }
  function ChunkBuffer$Companion$EmptyPool$1() {
  }
  protoOf(ChunkBuffer$Companion$EmptyPool$1).h7m = function () {
    return Companion_getInstance_4().a7j_1;
  };
  protoOf(ChunkBuffer$Companion$EmptyPool$1).z7n = function (instance) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(instance === Companion_getInstance_4().a7j_1)) {
      // Inline function 'io.ktor.utils.io.core.internal.<no name provided>.recycle.<anonymous>' call
      var message = 'Only ChunkBuffer.Empty instance could be recycled.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  };
  protoOf(ChunkBuffer$Companion$EmptyPool$1).i7m = function (instance) {
    return this.z7n(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  function ChunkBuffer$Companion$NoPool$1() {
    NoPoolImpl.call(this);
  }
  protoOf(ChunkBuffer$Companion$NoPool$1).h7m = function () {
    return new ChunkBuffer(DefaultAllocator_instance.j7l(get_DEFAULT_BUFFER_SIZE()), null, this);
  };
  protoOf(ChunkBuffer$Companion$NoPool$1).z7n = function (instance) {
    DefaultAllocator_instance.l7l(instance.l7f_1);
  };
  protoOf(ChunkBuffer$Companion$NoPool$1).i7m = function (instance) {
    return this.z7n(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  function ChunkBuffer$Companion$NoPoolManuallyManaged$1() {
    NoPoolImpl.call(this);
  }
  protoOf(ChunkBuffer$Companion$NoPoolManuallyManaged$1).h7m = function () {
    throw UnsupportedOperationException_init_$Create$("This pool doesn't support borrow");
  };
  protoOf(ChunkBuffer$Companion$NoPoolManuallyManaged$1).z7n = function (instance) {
  };
  protoOf(ChunkBuffer$Companion$NoPoolManuallyManaged$1).i7m = function (instance) {
    return this.z7n(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  function appendNext($this, chunk) {
    if (!$this.x7l_1.atomicfu$compareAndSet(null, chunk)) {
      throw IllegalStateException_init_$Create$('This chunk has already a next chunk.');
    }
  }
  function Companion_2() {
    Companion_instance_2 = this;
    var tmp = this;
    tmp.z7i_1 = new ChunkBuffer$Companion$EmptyPool$1();
    this.a7j_1 = new ChunkBuffer(Companion_getInstance_6().t7n_1, null, this.z7i_1);
    var tmp_0 = this;
    tmp_0.b7j_1 = new ChunkBuffer$Companion$NoPool$1();
    var tmp_1 = this;
    tmp_1.c7j_1 = new ChunkBuffer$Companion$NoPoolManuallyManaged$1();
  }
  protoOf(Companion_2).d7j = function () {
    return get_DefaultChunkedBufferPool();
  };
  var Companion_instance_2;
  function Companion_getInstance_4() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function ChunkBuffer(memory, origin, parentPool) {
    Companion_getInstance_4();
    Buffer.call(this, memory);
    this.w7l_1 = parentPool;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(origin === this)) {
      // Inline function 'io.ktor.utils.io.core.internal.ChunkBuffer.<anonymous>' call
      var message = "A chunk couldn't be a view of itself.";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.x7l_1 = atomic$ref$1(null);
    this.y7l_1 = atomic$int$1(1);
    this.z7l_1 = origin;
  }
  protoOf(ChunkBuffer).s7n = function (newValue) {
    if (newValue == null) {
      this.j7m();
    } else {
      appendNext(this, newValue);
    }
  };
  protoOf(ChunkBuffer).f13 = function () {
    return this.x7l_1.kotlinx$atomicfu$value;
  };
  protoOf(ChunkBuffer).d7m = function () {
    return this.y7l_1.kotlinx$atomicfu$value;
  };
  protoOf(ChunkBuffer).j7m = function () {
    return this.x7l_1.atomicfu$getAndSet(null);
  };
  protoOf(ChunkBuffer).a7o = function () {
    // Inline function 'kotlin.let' call
    var tmp0_elvis_lhs = this.z7l_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.internal.ChunkBuffer.duplicate.<anonymous>' call
    var newOrigin = tmp0_elvis_lhs == null ? this : tmp0_elvis_lhs;
    newOrigin.b7o();
    // Inline function 'kotlin.also' call
    var this_0 = new ChunkBuffer(this.l7f_1, newOrigin, this.w7l_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.internal.ChunkBuffer.duplicate.<anonymous>.<anonymous>' call
    this.z7k(this_0);
    return this_0;
  };
  protoOf(ChunkBuffer).k7m = function (pool) {
    if (this.c7o()) {
      var origin = this.z7l_1;
      if (!(origin == null)) {
        this.a7m();
        origin.k7m(pool);
      } else {
        var tmp0_elvis_lhs = this.w7l_1;
        var poolToUse = tmp0_elvis_lhs == null ? pool : tmp0_elvis_lhs;
        poolToUse.i7m(this);
      }
    }
  };
  protoOf(ChunkBuffer).a7m = function () {
    if (!this.y7l_1.atomicfu$compareAndSet(0, -1)) {
      throw IllegalStateException_init_$Create$('Unable to unlink: buffer is in use.');
    }
    this.j7m();
    this.z7l_1 = null;
  };
  protoOf(ChunkBuffer).b7o = function () {
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      var this_0 = this.y7l_1;
      while (true) {
        var cur = this_0.kotlinx$atomicfu$value;
        // Inline function 'io.ktor.utils.io.core.internal.ChunkBuffer.acquire.<anonymous>' call
        if (cur <= 0)
          throw IllegalStateException_init_$Create$('Unable to acquire chunk: it is already released.');
        var upd = cur + 1 | 0;
        if (this_0.atomicfu$compareAndSet(cur, upd)) {
          break $l$block;
        }
      }
    }
  };
  protoOf(ChunkBuffer).g7m = function () {
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      var this_0 = this.y7l_1;
      while (true) {
        var cur = this_0.kotlinx$atomicfu$value;
        // Inline function 'io.ktor.utils.io.core.internal.ChunkBuffer.unpark.<anonymous>' call
        if (cur < 0) {
          throw IllegalStateException_init_$Create$("This instance is already disposed and couldn't be borrowed.");
        }
        if (cur > 0) {
          throw IllegalStateException_init_$Create$('This instance is already in use but somehow appeared in the pool.');
        }
        var upd = 1;
        if (this_0.atomicfu$compareAndSet(cur, upd)) {
          break $l$block;
        }
      }
    }
  };
  protoOf(ChunkBuffer).c7o = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.updateAndGet' call
      var this_0 = this.y7l_1;
      while (true) {
        var cur = this_0.kotlinx$atomicfu$value;
        // Inline function 'io.ktor.utils.io.core.internal.ChunkBuffer.release.<anonymous>' call
        if (cur <= 0)
          throw IllegalStateException_init_$Create$('Unable to release: it is already released.');
        var upd = cur - 1 | 0;
        if (this_0.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$1 = upd;
          break $l$block;
        }
      }
    }
    return tmp$ret$1 === 0;
  };
  protoOf(ChunkBuffer).a26 = function () {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.z7l_1 == null)) {
      // Inline function 'io.ktor.utils.io.core.internal.ChunkBuffer.reset.<anonymous>' call
      var message = 'Unable to reset buffer with origin';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    protoOf(Buffer).a26.call(this);
    this.x7l_1.kotlinx$atomicfu$value = null;
  };
  function isExclusivelyOwned(_this__u8e3s4) {
    return _this__u8e3s4.d7m() === 1;
  }
  function _EncodeResult___init__impl__vkc0cy(value) {
    return value;
  }
  function _EncodeResult___get_value__impl__h0r466($this) {
    return $this;
  }
  function _EncodeResult___init__impl__vkc0cy_0(characters, bytes) {
    // Inline function 'kotlin.UShort.toInt' call
    var tmp = (_UShort___get_data__impl__g0245(characters) & 65535) << 16;
    // Inline function 'kotlin.UShort.toInt' call
    var tmp$ret$1 = _UShort___get_data__impl__g0245(bytes) & 65535;
    return _EncodeResult___init__impl__vkc0cy(tmp | tmp$ret$1);
  }
  function _EncodeResult___get_characters__impl__rrxzcv($this) {
    // Inline function 'kotlin.toUShort' call
    // Inline function 'io.ktor.utils.io.bits.highShort' call
    var this_0 = _EncodeResult___get_value__impl__h0r466($this);
    var this_1 = toShort(this_0 >>> 16 | 0);
    return _UShort___init__impl__jigrne(this_1);
  }
  function _EncodeResult___get_bytes__impl__bt0kq0($this) {
    // Inline function 'kotlin.toUShort' call
    // Inline function 'io.ktor.utils.io.bits.lowShort' call
    var this_0 = _EncodeResult___get_value__impl__h0r466($this);
    var this_1 = toShort(this_0 & 65535);
    return _UShort___init__impl__jigrne(this_1);
  }
  function EncodeResult__component1_impl_36tlhi($this) {
    return _EncodeResult___get_characters__impl__rrxzcv($this);
  }
  function EncodeResult__component2_impl_3nv7vp($this) {
    return _EncodeResult___get_bytes__impl__bt0kq0($this);
  }
  function failLongToIntConversion(value, name) {
    throw IllegalArgumentException_init_$Create$('Long value ' + value.toString() + ' of ' + name + " doesn't fit into 32-bit integer");
  }
  function MalformedUTF8InputException(message) {
    Exception_init_$Init$(message, this);
    captureStack(this, MalformedUTF8InputException);
  }
  function malformedByteCount(byteCount) {
    throw new MalformedUTF8InputException('Expected ' + byteCount + ' more character bytes');
  }
  function isBmpCodePoint(cp) {
    return (cp >>> 16 | 0) === 0;
  }
  function isValidCodePoint(codePoint) {
    return codePoint <= 1114111;
  }
  function malformedCodePoint(value) {
    throw IllegalArgumentException_init_$Create$('Malformed code-point ' + value + ' found');
  }
  function highSurrogate(cp) {
    return (cp >>> 10 | 0) + 55232 | 0;
  }
  function lowSurrogate(cp) {
    return (cp & 1023) + 56320 | 0;
  }
  function encodeUTF8(_this__u8e3s4, text, from, to, dstOffset, dstLimit) {
    // Inline function 'kotlin.comparisons.minOf' call
    // Inline function 'kotlin.UShort.toInt' call
    Companion_getInstance_0();
    var this_0 = _UShort___init__impl__jigrne(-1);
    var b = from + (_UShort___get_data__impl__g0245(this_0) & 65535) | 0;
    var lastCharIndex = Math.min(to, b);
    // Inline function 'kotlin.UShort.toInt' call
    Companion_getInstance_0();
    var this_1 = _UShort___init__impl__jigrne(-1);
    var tmp$ret$2 = _UShort___get_data__impl__g0245(this_1) & 65535;
    var resultLimit = coerceAtMost(dstLimit, tmp$ret$2);
    var resultPosition = dstOffset;
    var index = from;
    $l$loop: do {
      if (resultPosition >= resultLimit ? true : index >= lastCharIndex) {
        // Inline function 'kotlin.toUShort' call
        var this_2 = index - from | 0;
        var tmp = _UShort___init__impl__jigrne(toShort(this_2));
        // Inline function 'kotlin.toUShort' call
        var this_3 = resultPosition - dstOffset | 0;
        var tmp$ret$4 = _UShort___init__impl__jigrne(toShort(this_3));
        return _EncodeResult___init__impl__vkc0cy_0(tmp, tmp$ret$4);
      }
      // Inline function 'kotlin.code' call
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      var this_4 = charSequenceGet(text, tmp0);
      var character = Char__toInt_impl_vasixd(this_4) & 65535;
      if ((character & 65408) === 0) {
        // Inline function 'io.ktor.utils.io.bits.Memory.storeAt' call
        var tmp1 = resultPosition;
        resultPosition = tmp1 + 1 | 0;
        var value = toByte(character);
        _this__u8e3s4.l7k_1.setInt8(tmp1, value);
      } else {
        break $l$loop;
      }
    }
     while (true);
    index = index - 1 | 0;
    return encodeUTF8Stage1(_this__u8e3s4, text, index, lastCharIndex, from, resultPosition, resultLimit, dstOffset);
  }
  function encodeUTF8Stage1(_this__u8e3s4, text, index1, lastCharIndex, from, resultPosition1, resultLimit, dstOffset) {
    var index = index1;
    var resultPosition = resultPosition1;
    var stage1Limit = resultLimit - 3 | 0;
    $l$loop: do {
      var freeSpace = stage1Limit - resultPosition | 0;
      if (freeSpace <= 0 ? true : index >= lastCharIndex) {
        break $l$loop;
      }
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      var character = charSequenceGet(text, tmp0);
      var tmp;
      if (isHighSurrogate(character)) {
        var tmp_0;
        if (index === lastCharIndex ? true : !isLowSurrogate(charSequenceGet(text, index))) {
          tmp_0 = 63;
        } else {
          var tmp1 = index;
          index = tmp1 + 1 | 0;
          tmp_0 = codePoint(character, charSequenceGet(text, tmp1));
        }
        tmp = tmp_0;
      } else {
        // Inline function 'kotlin.code' call
        tmp = Char__toInt_impl_vasixd(character);
      }
      var codepoint = tmp;
      // Inline function 'io.ktor.utils.io.core.internal.putUtf8Char' call
      var offset = resultPosition;
      var tmp_1;
      if (0 <= codepoint ? codepoint <= 127 : false) {
        // Inline function 'io.ktor.utils.io.bits.Memory.storeAt' call
        var value = toByte(codepoint);
        _this__u8e3s4.l7k_1.setInt8(offset, value);
        tmp_1 = 1;
      } else if (128 <= codepoint ? codepoint <= 2047 : false) {
        // Inline function 'io.ktor.utils.io.bits.set' call
        var value_0 = toByte(192 | codepoint >> 6 & 31);
        _this__u8e3s4.l7k_1.setInt8(offset, value_0);
        // Inline function 'io.ktor.utils.io.bits.set' call
        var index_0 = offset + 1 | 0;
        var value_1 = toByte(128 | codepoint & 63);
        _this__u8e3s4.l7k_1.setInt8(index_0, value_1);
        tmp_1 = 2;
      } else if (2048 <= codepoint ? codepoint <= 65535 : false) {
        // Inline function 'io.ktor.utils.io.bits.set' call
        var value_2 = toByte(224 | codepoint >> 12 & 15);
        _this__u8e3s4.l7k_1.setInt8(offset, value_2);
        // Inline function 'io.ktor.utils.io.bits.set' call
        var index_1 = offset + 1 | 0;
        var value_3 = toByte(128 | codepoint >> 6 & 63);
        _this__u8e3s4.l7k_1.setInt8(index_1, value_3);
        // Inline function 'io.ktor.utils.io.bits.set' call
        var index_2 = offset + 2 | 0;
        var value_4 = toByte(128 | codepoint & 63);
        _this__u8e3s4.l7k_1.setInt8(index_2, value_4);
        tmp_1 = 3;
      } else if (65536 <= codepoint ? codepoint <= 1114111 : false) {
        // Inline function 'io.ktor.utils.io.bits.set' call
        var value_5 = toByte(240 | codepoint >> 18 & 7);
        _this__u8e3s4.l7k_1.setInt8(offset, value_5);
        // Inline function 'io.ktor.utils.io.bits.set' call
        var index_3 = offset + 1 | 0;
        var value_6 = toByte(128 | codepoint >> 12 & 63);
        _this__u8e3s4.l7k_1.setInt8(index_3, value_6);
        // Inline function 'io.ktor.utils.io.bits.set' call
        var index_4 = offset + 2 | 0;
        var value_7 = toByte(128 | codepoint >> 6 & 63);
        _this__u8e3s4.l7k_1.setInt8(index_4, value_7);
        // Inline function 'io.ktor.utils.io.bits.set' call
        var index_5 = offset + 3 | 0;
        var value_8 = toByte(128 | codepoint & 63);
        _this__u8e3s4.l7k_1.setInt8(index_5, value_8);
        tmp_1 = 4;
      } else {
        malformedCodePoint(codepoint);
      }
      var size = tmp_1;
      resultPosition = resultPosition + size | 0;
    }
     while (true);
    if (resultPosition === stage1Limit) {
      return encodeUTF8Stage2(_this__u8e3s4, text, index, lastCharIndex, from, resultPosition, resultLimit, dstOffset);
    }
    // Inline function 'kotlin.toUShort' call
    var this_0 = index - from | 0;
    var tmp_2 = _UShort___init__impl__jigrne(toShort(this_0));
    // Inline function 'kotlin.toUShort' call
    var this_1 = resultPosition - dstOffset | 0;
    var tmp$ret$12 = _UShort___init__impl__jigrne(toShort(this_1));
    return _EncodeResult___init__impl__vkc0cy_0(tmp_2, tmp$ret$12);
  }
  function codePoint(high, low) {
    // Inline function 'kotlin.code' call
    var highValue = Char__toInt_impl_vasixd(high) - 55232 | 0;
    // Inline function 'kotlin.code' call
    var lowValue = Char__toInt_impl_vasixd(low) - 56320 | 0;
    return highValue << 10 | lowValue;
  }
  function encodeUTF8Stage2(_this__u8e3s4, text, index1, lastCharIndex, from, resultPosition1, resultLimit, dstOffset) {
    var index = index1;
    var resultPosition = resultPosition1;
    $l$loop_0: do {
      var freeSpace = resultLimit - resultPosition | 0;
      if (freeSpace <= 0 ? true : index >= lastCharIndex) {
        break $l$loop_0;
      }
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      var character = charSequenceGet(text, tmp0);
      var tmp;
      if (!isHighSurrogate(character)) {
        // Inline function 'kotlin.code' call
        tmp = Char__toInt_impl_vasixd(character);
      } else {
        var tmp_0;
        if (index === lastCharIndex ? true : !isLowSurrogate(charSequenceGet(text, index))) {
          tmp_0 = 63;
        } else {
          var tmp1 = index;
          index = tmp1 + 1 | 0;
          tmp_0 = codePoint(character, charSequenceGet(text, tmp1));
        }
        tmp = tmp_0;
      }
      var codepoint = tmp;
      // Inline function 'io.ktor.utils.io.core.internal.charactersSize' call
      var tmp_1;
      if (1 <= codepoint ? codepoint <= 127 : false) {
        tmp_1 = 1;
      } else if (128 <= codepoint ? codepoint <= 2047 : false) {
        tmp_1 = 2;
      } else if (2048 <= codepoint ? codepoint <= 65535 : false) {
        tmp_1 = 3;
      } else if (65536 <= codepoint ? codepoint <= 1114111 : false) {
        tmp_1 = 4;
      } else {
        malformedCodePoint(codepoint);
      }
      if (tmp_1 > freeSpace) {
        index = index - 1 | 0;
        break $l$loop_0;
      }
      // Inline function 'io.ktor.utils.io.core.internal.putUtf8Char' call
      var offset = resultPosition;
      var tmp_2;
      if (0 <= codepoint ? codepoint <= 127 : false) {
        // Inline function 'io.ktor.utils.io.bits.Memory.storeAt' call
        var value = toByte(codepoint);
        _this__u8e3s4.l7k_1.setInt8(offset, value);
        tmp_2 = 1;
      } else if (128 <= codepoint ? codepoint <= 2047 : false) {
        // Inline function 'io.ktor.utils.io.bits.set' call
        var value_0 = toByte(192 | codepoint >> 6 & 31);
        _this__u8e3s4.l7k_1.setInt8(offset, value_0);
        // Inline function 'io.ktor.utils.io.bits.set' call
        var index_0 = offset + 1 | 0;
        var value_1 = toByte(128 | codepoint & 63);
        _this__u8e3s4.l7k_1.setInt8(index_0, value_1);
        tmp_2 = 2;
      } else if (2048 <= codepoint ? codepoint <= 65535 : false) {
        // Inline function 'io.ktor.utils.io.bits.set' call
        var value_2 = toByte(224 | codepoint >> 12 & 15);
        _this__u8e3s4.l7k_1.setInt8(offset, value_2);
        // Inline function 'io.ktor.utils.io.bits.set' call
        var index_1 = offset + 1 | 0;
        var value_3 = toByte(128 | codepoint >> 6 & 63);
        _this__u8e3s4.l7k_1.setInt8(index_1, value_3);
        // Inline function 'io.ktor.utils.io.bits.set' call
        var index_2 = offset + 2 | 0;
        var value_4 = toByte(128 | codepoint & 63);
        _this__u8e3s4.l7k_1.setInt8(index_2, value_4);
        tmp_2 = 3;
      } else if (65536 <= codepoint ? codepoint <= 1114111 : false) {
        // Inline function 'io.ktor.utils.io.bits.set' call
        var value_5 = toByte(240 | codepoint >> 18 & 7);
        _this__u8e3s4.l7k_1.setInt8(offset, value_5);
        // Inline function 'io.ktor.utils.io.bits.set' call
        var index_3 = offset + 1 | 0;
        var value_6 = toByte(128 | codepoint >> 12 & 63);
        _this__u8e3s4.l7k_1.setInt8(index_3, value_6);
        // Inline function 'io.ktor.utils.io.bits.set' call
        var index_4 = offset + 2 | 0;
        var value_7 = toByte(128 | codepoint >> 6 & 63);
        _this__u8e3s4.l7k_1.setInt8(index_4, value_7);
        // Inline function 'io.ktor.utils.io.bits.set' call
        var index_5 = offset + 3 | 0;
        var value_8 = toByte(128 | codepoint & 63);
        _this__u8e3s4.l7k_1.setInt8(index_5, value_8);
        tmp_2 = 4;
      } else {
        malformedCodePoint(codepoint);
      }
      var size = tmp_2;
      resultPosition = resultPosition + size | 0;
    }
     while (true);
    // Inline function 'kotlin.toUShort' call
    var this_0 = index - from | 0;
    var tmp_3 = _UShort___init__impl__jigrne(toShort(this_0));
    // Inline function 'kotlin.toUShort' call
    var this_1 = resultPosition - dstOffset | 0;
    var tmp$ret$13 = _UShort___init__impl__jigrne(toShort(this_1));
    return _EncodeResult___init__impl__vkc0cy_0(tmp_3, tmp$ret$13);
  }
  function get_EmptyByteArray() {
    _init_properties_Unsafe_kt__orlvcq();
    return EmptyByteArray;
  }
  var EmptyByteArray;
  function completeReadHead(_this__u8e3s4, current) {
    _init_properties_Unsafe_kt__orlvcq();
    if (current === _this__u8e3s4)
      return Unit_instance;
    else {
      // Inline function 'io.ktor.utils.io.core.canRead' call
      if (!(current.n7f_1 > current.m7f_1)) {
        _this__u8e3s4.o7n(current);
      } else {
        // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
        var tmp = current.q7f_1 - current.p7f_1 | 0;
        if (tmp < 8) {
          _this__u8e3s4.p7n(current);
        } else {
          _this__u8e3s4.x7g_1 = current.m7f_1;
        }
      }
    }
  }
  function prepareReadFirstHead(_this__u8e3s4, minSize) {
    _init_properties_Unsafe_kt__orlvcq();
    return _this__u8e3s4.m7n(minSize);
  }
  function prepareReadNextHead(_this__u8e3s4, current) {
    _init_properties_Unsafe_kt__orlvcq();
    if (current === _this__u8e3s4) {
      return _this__u8e3s4.q7h() ? _this__u8e3s4 : null;
    }
    return _this__u8e3s4.n7n(current);
  }
  function unsafeAppend(_this__u8e3s4, builder) {
    _init_properties_Unsafe_kt__orlvcq();
    var builderSize = builder.m();
    var tmp0_elvis_lhs = builder.m7d();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return 0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var builderHead = tmp;
    if ((builderSize <= get_PACKET_MAX_COPY_SIZE() ? builderHead.f13() == null : false) ? _this__u8e3s4.h7n(builderHead) : false) {
      builder.t7m();
      return builderSize;
    }
    _this__u8e3s4.g7n(builderHead);
    return builderSize;
  }
  function prepareWriteHead(_this__u8e3s4, capacity, current) {
    _init_properties_Unsafe_kt__orlvcq();
    if (!(current == null)) {
      _this__u8e3s4.i7k();
    }
    return _this__u8e3s4.s7m(capacity);
  }
  var properties_initialized_Unsafe_kt_o5mw48;
  function _init_properties_Unsafe_kt__orlvcq() {
    if (!properties_initialized_Unsafe_kt_o5mw48) {
      properties_initialized_Unsafe_kt_o5mw48 = true;
      EmptyByteArray = new Int8Array(0);
    }
  }
  function trySuspend($this, sleepCondition, $completion) {
    var tmp = new $trySuspendCOROUTINE$53($this, sleepCondition, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  }
  function $sleepCOROUTINE$52(_this__u8e3s4, sleepCondition, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x7o_1 = _this__u8e3s4;
    this.y7o_1 = sleepCondition;
  }
  protoOf($sleepCOROUTINE$52).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 3;
            this.ac_1 = 1;
            suspendResult = trySuspend(this.x7o_1, this.y7o_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (suspendResult) {
              return Unit_instance;
            } else {
              this.ac_1 = 2;
              continue $sm;
            }

          case 2:
            this.x7o_1.v7c();
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
  function $trySuspendCOROUTINE$53(_this__u8e3s4, sleepCondition, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l7o_1 = _this__u8e3s4;
    this.m7o_1 = sleepCondition;
  }
  protoOf($trySuspendCOROUTINE$53).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 3;
            this.n7o_1 = false;
            this.o7o_1 = Job_0();
            if (this.l7o_1.u7c_1.atomicfu$compareAndSet(null, this.o7o_1) ? this.m7o_1() : false) {
              this.n7o_1 = true;
              this.ac_1 = 1;
              suspendResult = this.o7o_1.ev(this);
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
            return this.n7o_1;
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
  function AwaitingSlot() {
    this.u7c_1 = atomic$ref$1(null);
  }
  protoOf(AwaitingSlot).p7e = function (sleepCondition, $completion) {
    var tmp = new $sleepCOROUTINE$52(this, sleepCondition, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(AwaitingSlot).v7c = function () {
    var tmp0_safe_receiver = this.u7c_1.atomicfu$getAndSet(null);
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.cv();
  };
  protoOf(AwaitingSlot).f56 = function (cause) {
    var tmp0_elvis_lhs = this.u7c_1.atomicfu$getAndSet(null);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var continuation = tmp;
    if (!(cause == null)) {
      continuation.bv(cause);
    } else {
      continuation.cv();
    }
  };
  function copyToSequentialImpl(_this__u8e3s4, dst, limit, $completion) {
    var tmp = new $copyToSequentialImplCOROUTINE$54(_this__u8e3s4, dst, limit, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  }
  function copyToTail(_this__u8e3s4, dst, limit, $completion) {
    var tmp = new $copyToTailCOROUTINE$55(_this__u8e3s4, dst, limit, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  }
  function $copyToSequentialImplCOROUTINE$54(_this__u8e3s4, dst, limit, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h7p_1 = _this__u8e3s4;
    this.i7p_1 = dst;
    this.j7p_1 = limit;
  }
  protoOf($copyToSequentialImplCOROUTINE$54).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 10;
            if (!!(this.h7p_1 === this.i7p_1)) {
              var message = 'Failed requirement.';
              throw IllegalArgumentException_init_$Create$(toString(message));
            }

            if (!(this.h7p_1.o7d() == null)) {
              this.i7p_1.n16(this.h7p_1.o7d());
              return new Long(0, 0);
            }

            this.k7p_1 = this.j7p_1;
            this.ac_1 = 1;
            continue $sm;
          case 1:
            if (!(this.k7p_1.x9(new Long(0, 0)) > 0)) {
              this.ac_1 = 9;
              continue $sm;
            }

            this.ac_1 = 2;
            suspendResult = this.h7p_1.m7j(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.l7p_1 = suspendResult;
            if (!this.l7p_1) {
              this.ac_1 = 9;
              continue $sm;
            } else {
              this.ac_1 = 3;
              continue $sm;
            }

          case 3:
            this.m7p_1 = this.h7p_1.n7j(this.i7p_1, this.k7p_1);
            if (this.m7p_1.equals(new Long(0, 0))) {
              this.ac_1 = 6;
              suspendResult = copyToTail(this.h7p_1, this.i7p_1, this.k7p_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (this.i7p_1.d7e() === 0) {
                this.ac_1 = 4;
                suspendResult = this.i7p_1.k7f(1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.ac_1 = 5;
                continue $sm;
              }
            }

          case 4:
            this.ac_1 = 5;
            continue $sm;
          case 5:
            this.n7p_1 = this.m7p_1;
            this.ac_1 = 8;
            continue $sm;
          case 6:
            var tail = suspendResult;
            if (tail.equals(new Long(0, 0))) {
              this.ac_1 = 9;
              continue $sm;
            } else {
              this.ac_1 = 7;
              continue $sm;
            }

          case 7:
            this.n7p_1 = tail;
            this.ac_1 = 8;
            continue $sm;
          case 8:
            var copied = this.n7p_1;
            this.k7p_1 = this.k7p_1.fb(copied);
            if (copied.x9(new Long(0, 0)) > 0) {
              this.i7p_1.p6();
            }

            this.ac_1 = 1;
            continue $sm;
          case 9:
            return this.j7p_1.fb(this.k7p_1);
          case 10:
            throw this.dc_1;
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
  function $copyToTailCOROUTINE$55(_this__u8e3s4, dst, limit, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w7p_1 = _this__u8e3s4;
    this.x7p_1 = dst;
    this.y7p_1 = limit;
  }
  protoOf($copyToTailCOROUTINE$55).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 9;
            this.z7p_1 = Companion_getInstance_4().d7j().h7m();
            this.ac_1 = 1;
            continue $sm;
          case 1:
            this.ac_1 = 2;
            continue $sm;
          case 2:
            this.bc_1 = 8;
            this.z7p_1.v7k(coerceAtMost_0(this.y7p_1, toLong(this.z7p_1.q7f_1)).fa());
            this.ac_1 = 3;
            suspendResult = this.w7p_1.j7j(this.z7p_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.b7q_1 = suspendResult;
            if (this.b7q_1 === -1) {
              this.z7p_1.k7m(Companion_getInstance_4().d7j());
              this.a7q_1 = new Long(0, 0);
              this.bc_1 = 9;
              this.ac_1 = 6;
              continue $sm;
            } else {
              this.ac_1 = 4;
              continue $sm;
            }

          case 4:
            this.ac_1 = 5;
            suspendResult = this.x7p_1.f7j(this.z7p_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.a7q_1 = toLong(this.b7q_1);
            this.bc_1 = 9;
            this.ac_1 = 6;
            var tmp_0 = this;
            continue $sm;
          case 6:
            var tmp_1 = this.a7q_1;
            this.bc_1 = 9;
            this.z7p_1.k7m(Companion_getInstance_4().d7j());
            return tmp_1;
          case 7:
            this.bc_1 = 9;
            this.z7p_1.k7m(Companion_getInstance_4().d7j());
            return Unit_instance;
          case 8:
            this.bc_1 = 9;
            var t = this.dc_1;
            this.z7p_1.k7m(Companion_getInstance_4().d7j());
            throw t;
          case 9:
            throw this.dc_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.bc_1 === 9) {
          throw e;
        } else {
          this.ac_1 = this.bc_1;
          this.dc_1 = e;
        }
      }
     while (true);
  };
  function get_ByteArrayPool() {
    _init_properties_ByteArrayPool_kt__kfi3uj();
    return ByteArrayPool;
  }
  var ByteArrayPool;
  function ByteArrayPool$1() {
    DefaultPool.call(this, 128);
  }
  protoOf(ByteArrayPool$1).i7l = function () {
    return new Int8Array(4096);
  };
  var properties_initialized_ByteArrayPool_kt_td6pfh;
  function _init_properties_ByteArrayPool_kt__kfi3uj() {
    if (!properties_initialized_ByteArrayPool_kt_td6pfh) {
      properties_initialized_ByteArrayPool_kt_td6pfh = true;
      ByteArrayPool = new ByteArrayPool$1();
    }
  }
  function NoPoolImpl() {
  }
  protoOf(NoPoolImpl).i7m = function (instance) {
  };
  function ByteChannel(autoFlush) {
    autoFlush = autoFlush === VOID ? false : autoFlush;
    return new ByteChannelJS(Companion_getInstance_4().a7j_1, autoFlush);
  }
  function copyTo(_this__u8e3s4, dst, limit, $completion) {
    var tmp = _this__u8e3s4 instanceof ByteChannelSequentialBase ? _this__u8e3s4 : THROW_CCE();
    return copyToSequentialImpl(tmp, dst instanceof ByteChannelSequentialBase ? dst : THROW_CCE(), limit, $completion);
  }
  function ByteReadChannel_0(content, offset, length) {
    // Inline function 'kotlin.collections.isEmpty' call
    if (content.length === 0)
      return Companion_getInstance_5().k7k();
    var head = Companion_getInstance_4().d7j().h7m();
    var tail = head;
    var start = offset;
    var end = start + length | 0;
    $l$loop: while (true) {
      tail.s7k(8);
      // Inline function 'kotlin.comparisons.minOf' call
      var a = end - start | 0;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      var this_0 = tail;
      var b = this_0.p7f_1 - this_0.n7f_1 | 0;
      var size = Math.min(a, b);
      writeFully_0(tail instanceof Buffer ? tail : THROW_CCE(), content, start, size);
      start = start + size | 0;
      if (start === end)
        break $l$loop;
      var current = tail;
      tail = Companion_getInstance_4().d7j().h7m();
      current.s7n(tail);
    }
    // Inline function 'kotlin.apply' call
    var this_1 = new ByteChannelJS(head, false);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.ByteReadChannel.<anonymous>' call
    close(this_1);
    return this_1;
  }
  function ByteChannelJS$attachJob$lambda(this$0) {
    return function (cause) {
      this$0.u7q_1 = null;
      var tmp;
      if (!(cause == null)) {
        this$0.es(unwrapCancellationException(cause));
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ByteChannelJS(initial, autoFlush) {
    ByteChannelSequentialBase.call(this, initial, autoFlush);
    this.u7q_1 = null;
  }
  protoOf(ByteChannelJS).p7j = function (job) {
    var tmp0_safe_receiver = this.u7q_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.eq();
    }
    this.u7q_1 = job;
    job.zp(true, VOID, ByteChannelJS$attachJob$lambda(this));
  };
  protoOf(ByteChannelJS).toString = function () {
    return 'ByteChannel[' + this.u7q_1 + ', ' + hashCode(this) + ']';
  };
  function ByteReadChannel$Companion$Empty$delegate$lambda() {
    // Inline function 'kotlin.apply' call
    var this_0 = new ByteChannelJS(Companion_getInstance_4().a7j_1, false);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.Companion.Empty$delegate.<anonymous>.<anonymous>' call
    this_0.n16(null);
    return this_0;
  }
  function Companion_3() {
    Companion_instance_3 = this;
    var tmp = this;
    tmp.f7q_1 = lazy(ByteReadChannel$Companion$Empty$delegate$lambda);
  }
  protoOf(Companion_3).k7k = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.f7q_1;
    Empty$factory();
    return this_0.q2();
  };
  var Companion_instance_3;
  function Companion_getInstance_5() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function ByteReadChannel_1() {
  }
  function Empty$factory() {
    return getPropertyCallableRef('Empty', 1, KProperty1, function (receiver) {
      return receiver.k7k();
    }, null);
  }
  function DefaultAllocator() {
  }
  protoOf(DefaultAllocator).j7l = function (size) {
    return new Memory(new DataView(new ArrayBuffer(size)));
  };
  protoOf(DefaultAllocator).l7l = function (instance) {
  };
  var DefaultAllocator_instance;
  function DefaultAllocator_getInstance() {
    return DefaultAllocator_instance;
  }
  function of(_this__u8e3s4, array, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? array.length - offset | 0 : length;
    // Inline function 'kotlin.js.asDynamic' call
    var typedArray = array;
    return of_0(Companion_getInstance_6(), typedArray, offset, length);
  }
  function of_0(_this__u8e3s4, view, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? view.byteLength : length;
    return of_1(Companion_getInstance_6(), view.buffer, view.byteOffset + offset | 0, length);
  }
  function of_1(_this__u8e3s4, buffer, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? buffer.byteLength - offset | 0 : length;
    return new Memory(new DataView(buffer, offset, length));
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.t7n_1 = new Memory(new DataView(new ArrayBuffer(0)));
  }
  var Companion_instance_4;
  function Companion_getInstance_6() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function Memory(view) {
    Companion_getInstance_6();
    this.l7k_1 = view;
  }
  protoOf(Memory).v7q = function (offset, length) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(offset >= 0)) {
      // Inline function 'io.ktor.utils.io.bits.Memory.slice.<anonymous>' call
      var message = "offset shouldn't be negative: " + offset;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(length >= 0)) {
      // Inline function 'io.ktor.utils.io.bits.Memory.slice.<anonymous>' call
      var message_0 = "length shouldn't be negative: " + length;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var tmp = toLong(offset + length | 0);
    // Inline function 'io.ktor.utils.io.bits.Memory.size' call
    var tmp$ret$2 = toLong(this.l7k_1.byteLength);
    if (tmp.x9(tmp$ret$2) > 0) {
      // Inline function 'io.ktor.utils.io.bits.Memory.size' call
      var tmp$ret$3 = toLong(this.l7k_1.byteLength);
      throw IndexOutOfBoundsException_init_$Create$('offset + length > size: ' + offset + ' + ' + length + ' > ' + tmp$ret$3.toString());
    }
    return new Memory(new DataView(this.l7k_1.buffer, this.l7k_1.byteOffset + offset | 0, length));
  };
  protoOf(Memory).c7l = function (destination, offset, length, destinationOffset) {
    var src = new Int8Array(this.l7k_1.buffer, this.l7k_1.byteOffset + offset | 0, length);
    var dst = new Int8Array(destination.l7k_1.buffer, destination.l7k_1.byteOffset + destinationOffset | 0, length);
    dst.set(src);
  };
  function copyTo_0(_this__u8e3s4, destination, offset, length, destinationOffset) {
    copyTo_2(_this__u8e3s4.buffer, destination, offset + _this__u8e3s4.byteOffset | 0, length, destinationOffset);
  }
  function copyTo_1(_this__u8e3s4, destination, offset, length, destinationOffset) {
    // Inline function 'kotlin.js.asDynamic' call
    var to = destination;
    var from = new Int8Array(_this__u8e3s4.l7k_1.buffer, _this__u8e3s4.l7k_1.byteOffset + offset | 0, length);
    to.set(from, destinationOffset);
  }
  function copyTo_2(_this__u8e3s4, destination, offset, length, destinationOffset) {
    var from = new Int8Array(_this__u8e3s4, offset, length);
    var to = new Int8Array(destination.l7k_1.buffer, destination.l7k_1.byteOffset + destinationOffset | 0, length);
    to.set(from, 0);
  }
  function Companion_5() {
  }
  protoOf(Companion_5).w7q = function (name) {
    switch (name) {
      case 'UTF-8':
      case 'utf-8':
      case 'UTF8':
      case 'utf8':
        return Charsets_getInstance().u7n_1;
    }
    var tmp;
    var tmp_0;
    var tmp_1;
    switch (name) {
      case 'ISO-8859-1':
      case 'iso-8859-1':
        tmp_1 = true;
        break;
      default:
        // Inline function 'kotlin.let' call

        // Inline function 'kotlin.contracts.contract' call

        // Inline function 'io.ktor.utils.io.charsets.Companion.forName.<anonymous>' call

        var it = replace(name, _Char___init__impl__6a9atx(95), _Char___init__impl__6a9atx(45));
        var tmp_2;
        if (it === 'iso-8859-1') {
          tmp_2 = true;
        } else {
          // Inline function 'kotlin.text.lowercase' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_2 = it.toLowerCase() === 'iso-8859-1';
        }

        tmp_1 = tmp_2;
        break;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = name === 'latin1';
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = name === 'Latin1';
    }
    if (tmp) {
      return Charsets_getInstance().v7n_1;
    }
    throw IllegalArgumentException_init_$Create$('Charset ' + name + ' is not supported');
  };
  protoOf(Companion_5).x7q = function (charset) {
    var tmp;
    switch (charset) {
      case 'UTF-8':
      case 'utf-8':
      case 'UTF8':
      case 'utf8':
        tmp = true;
        break;
      default:
        var tmp_0;
        var tmp_1;
        switch (charset) {
          case 'ISO-8859-1':
          case 'iso-8859-1':
            tmp_1 = true;
            break;
          default:
            // Inline function 'kotlin.let' call

            // Inline function 'kotlin.contracts.contract' call

            // Inline function 'io.ktor.utils.io.charsets.Companion.isSupported.<anonymous>' call

            var it = replace(charset, _Char___init__impl__6a9atx(95), _Char___init__impl__6a9atx(45));
            var tmp_2;
            if (it === 'iso-8859-1') {
              tmp_2 = true;
            } else {
              // Inline function 'kotlin.text.lowercase' call
              // Inline function 'kotlin.js.asDynamic' call
              tmp_2 = it.toLowerCase() === 'iso-8859-1';
            }

            tmp_1 = tmp_2;
            break;
        }

        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = charset === 'latin1';
        }

        if (tmp_0) {
          tmp = true;
        } else {
          tmp = false;
        }

        break;
    }
    return tmp;
  };
  var Companion_instance_5;
  function Companion_getInstance_7() {
    return Companion_instance_5;
  }
  function Charset(_name) {
    this.w7n_1 = _name;
  }
  protoOf(Charset).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !(this.constructor == other.constructor))
      return false;
    if (!(other instanceof Charset))
      THROW_CCE();
    if (!(this.w7n_1 === other.w7n_1))
      return false;
    return true;
  };
  protoOf(Charset).hashCode = function () {
    return getStringHashCode(this.w7n_1);
  };
  protoOf(Charset).toString = function () {
    return this.w7n_1;
  };
  function get_name(_this__u8e3s4) {
    return _this__u8e3s4.w7n_1;
  }
  function Charsets() {
    Charsets_instance = this;
    this.u7n_1 = new CharsetImpl('UTF-8');
    this.v7n_1 = new CharsetImpl('ISO-8859-1');
  }
  var Charsets_instance;
  function Charsets_getInstance() {
    if (Charsets_instance == null)
      new Charsets();
    return Charsets_instance;
  }
  function MalformedInputException(message) {
    extendThrowable(this, message);
    captureStack(this, MalformedInputException);
  }
  function CharsetDecoder(_charset) {
    this.y7q_1 = _charset;
  }
  function encodeToByteArray(_this__u8e3s4, input, fromIndex, toIndex) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
    return encodeToByteArrayImpl1(_this__u8e3s4, input, fromIndex, toIndex);
  }
  function CharsetEncoder(_charset) {
    this.z7q_1 = _charset;
  }
  function CharsetImpl(name) {
    Charset.call(this, name);
    this.b7r_1 = name;
  }
  protoOf(CharsetImpl).y7n = function () {
    return new CharsetEncoderImpl(this);
  };
  protoOf(CharsetImpl).x7n = function () {
    return new CharsetDecoderImpl(this);
  };
  protoOf(CharsetImpl).toString = function () {
    return 'CharsetImpl(name=' + this.b7r_1 + ')';
  };
  protoOf(CharsetImpl).hashCode = function () {
    return getStringHashCode(this.b7r_1);
  };
  protoOf(CharsetImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetImpl))
      return false;
    var tmp0_other_with_cast = other instanceof CharsetImpl ? other : THROW_CCE();
    if (!(this.b7r_1 === tmp0_other_with_cast.b7r_1))
      return false;
    return true;
  };
  function encodeToByteArrayImpl1(_this__u8e3s4, input, fromIndex, toIndex) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
    var start = fromIndex;
    if (start >= toIndex)
      return get_EmptyByteArray();
    var single = Companion_getInstance_4().d7j().h7m();
    try {
      var rc = encodeImpl(_this__u8e3s4, input, start, toIndex, single);
      start = start + rc | 0;
      if (start === toIndex) {
        // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
        var tmp$ret$0 = single.n7f_1 - single.m7f_1 | 0;
        var result = new Int8Array(tmp$ret$0);
        // Inline function 'io.ktor.utils.io.core.readFully' call
        var length = result.length - 0 | 0;
        readFully(single instanceof Buffer ? single : THROW_CCE(), result, 0, length);
        return result;
      }
      var tmp$ret$1;
      $l$block: {
        // Inline function 'io.ktor.utils.io.core.buildPacket' call
        // Inline function 'kotlin.contracts.contract' call
        var builder = new BytePacketBuilder();
        try {
          // Inline function 'io.ktor.utils.io.charsets.encodeToByteArrayImpl1.<anonymous>' call
          builder.q7m(single.a7o());
          encodeToImpl(_this__u8e3s4, builder, input, start, toIndex);
          tmp$ret$1 = builder.e3();
          break $l$block;
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
      return readBytes(tmp$ret$1);
    }finally {
      single.k7m(Companion_getInstance_4().d7j());
    }
  }
  function CharsetEncoderImpl(charset) {
    CharsetEncoder.call(this, charset);
    this.d7r_1 = charset;
  }
  protoOf(CharsetEncoderImpl).toString = function () {
    return 'CharsetEncoderImpl(charset=' + this.d7r_1 + ')';
  };
  protoOf(CharsetEncoderImpl).hashCode = function () {
    return this.d7r_1.hashCode();
  };
  protoOf(CharsetEncoderImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetEncoderImpl))
      return false;
    var tmp0_other_with_cast = other instanceof CharsetEncoderImpl ? other : THROW_CCE();
    if (!this.d7r_1.equals(tmp0_other_with_cast.d7r_1))
      return false;
    return true;
  };
  function CharsetDecoderImpl(charset) {
    CharsetDecoder.call(this, charset);
    this.f7r_1 = charset;
  }
  protoOf(CharsetDecoderImpl).toString = function () {
    return 'CharsetDecoderImpl(charset=' + this.f7r_1 + ')';
  };
  protoOf(CharsetDecoderImpl).hashCode = function () {
    return this.f7r_1.hashCode();
  };
  protoOf(CharsetDecoderImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetDecoderImpl))
      return false;
    var tmp0_other_with_cast = other instanceof CharsetDecoderImpl ? other : THROW_CCE();
    if (!this.f7r_1.equals(tmp0_other_with_cast.f7r_1))
      return false;
    return true;
  };
  function encodeImpl(_this__u8e3s4, input, fromIndex, toIndex, dst) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(fromIndex <= toIndex)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (get_charset(_this__u8e3s4).equals(Charsets_getInstance().v7n_1)) {
      return encodeISO88591(input, fromIndex, toIndex, dst);
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(get_charset(_this__u8e3s4) === Charsets_getInstance().u7n_1)) {
      // Inline function 'io.ktor.utils.io.charsets.encodeImpl.<anonymous>' call
      var message_0 = 'Only UTF-8 encoding is supported in JS';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var encoder = new TextEncoder();
    var start = fromIndex;
    // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
    var dstRemaining = dst.p7f_1 - dst.n7f_1 | 0;
    $l$loop: while (start < toIndex ? dstRemaining > 0 : false) {
      // Inline function 'kotlin.comparisons.minOf' call
      var a = toIndex - start | 0;
      var b = dstRemaining / 6 | 0;
      var tmp$ret$3 = Math.min(a, b);
      var numChars = coerceAtLeast(tmp$ret$3, 1);
      var dropLastChar = isHighSurrogate(charSequenceGet(input, (start + numChars | 0) - 1 | 0));
      var endIndexExclusive = (dropLastChar ? numChars === 1 : false) ? start + 2 | 0 : dropLastChar ? (start + numChars | 0) - 1 | 0 : start + numChars | 0;
      // Inline function 'kotlin.text.substring' call
      var startIndex = start;
      var tmp$ret$4 = toString(charSequenceSubSequence(input, startIndex, endIndexExclusive));
      var array1 = encoder.encode(tmp$ret$4);
      if (array1.length > dstRemaining)
        break $l$loop;
      writeFully_4(dst, array1);
      start = endIndexExclusive;
      dstRemaining = dstRemaining - array1.length | 0;
    }
    return start - fromIndex | 0;
  }
  function get_charset(_this__u8e3s4) {
    return _this__u8e3s4.z7q_1;
  }
  function decode_0(_this__u8e3s4, input, dst, max) {
    var decoder = Decoder(get_name(get_charset_0(_this__u8e3s4)), true);
    var charactersCopied = 0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.takeWhileSize' call
      var release = true;
      var tmp0_elvis_lhs = prepareReadFirstHead(input, 1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      var size = 1;
      try {
        $l$loop: do {
          // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
          var this_0 = current;
          var before = this_0.n7f_1 - this_0.m7f_1 | 0;
          var after;
          if (before >= size) {
            try {
              var tmp$ret$3;
              $l$block_0: {
                // Inline function 'io.ktor.utils.io.charsets.decode.<anonymous>' call
                var buffer = current;
                var rem = max - charactersCopied | 0;
                // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
                var bufferSize = buffer.n7f_1 - buffer.m7f_1 | 0;
                if (rem < bufferSize) {
                  tmp$ret$3 = 0;
                  break $l$block_0;
                }
                // Inline function 'io.ktor.utils.io.core.readDirectInt8Array' call
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'io.ktor.utils.io.core.read' call
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'io.ktor.utils.io.core.readDirectInt8Array.<anonymous>' call
                var memory = buffer.l7f_1;
                var start = buffer.m7f_1;
                var endExclusive = buffer.n7f_1;
                // Inline function 'io.ktor.utils.io.charsets.decode.<anonymous>.<anonymous>' call
                var view = new Int8Array(memory.l7k_1.buffer, memory.l7k_1.byteOffset + start | 0, endExclusive - start | 0);
                $l$block_2: {
                  // Inline function 'io.ktor.utils.io.js.decodeWrap' call
                  try {
                    // Inline function 'io.ktor.utils.io.charsets.decode.<anonymous>.<anonymous>.<anonymous>' call
                    var tmp$ret$4;
                    $l$block_1: {
                      // Inline function 'io.ktor.utils.io.js.decodeStream' call
                      // Inline function 'io.ktor.utils.io.js.decodeWrap' call
                      try {
                        tmp$ret$4 = decoder.g7r(view, decodeOptions(true));
                        break $l$block_1;
                      } catch ($p) {
                        if ($p instanceof Error) {
                          var t = $p;
                          var tmp0_elvis_lhs_0 = t.message;
                          throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs_0 == null ? 'no cause provided' : tmp0_elvis_lhs_0));
                        } else {
                          throw $p;
                        }
                      }
                    }
                    break $l$block_2;
                  } catch ($p) {
                    if ($p instanceof Error) {
                      var t_0 = $p;
                      var tmp0_elvis_lhs_1 = t_0.message;
                      throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs_1 == null ? 'no cause provided' : tmp0_elvis_lhs_1));
                    } else {
                      throw $p;
                    }
                  }
                }
                var decodedText = tmp$ret$4;
                dst.m8(decodedText);
                charactersCopied = charactersCopied + decodedText.length | 0;
                var rc = view.byteLength;
                buffer.m7k(rc);
                var tmp_0;
                if (charactersCopied === max) {
                  var tmp_1;
                  try {
                    tmp_1 = decoder.h7r();
                  } catch ($p) {
                    var tmp_2;
                    var _ = $p;
                    tmp_2 = '';
                    tmp_1 = tmp_2;
                  }
                  var tail = tmp_1;
                  // Inline function 'kotlin.text.isNotEmpty' call
                  if (charSequenceLength(tail) > 0) {
                    buffer.q7k(bufferSize);
                  }
                  tmp_0 = 0;
                } else if (charactersCopied < max) {
                  tmp_0 = get_MAX_CHARACTERS_SIZE_IN_BYTES();
                } else {
                  tmp_0 = 0;
                }
                tmp$ret$3 = tmp_0;
              }
              size = tmp$ret$3;
            }finally {
              // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
              var this_1 = current;
              after = this_1.n7f_1 - this_1.m7f_1 | 0;
            }
          } else {
            after = before;
          }
          release = false;
          var tmp_3;
          if (after === 0) {
            tmp_3 = prepareReadNextHead(input, current);
          } else {
            var tmp_4;
            if (after < size) {
              tmp_4 = true;
            } else {
              // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
              var this_2 = current;
              var tmp_5 = this_2.q7f_1 - this_2.p7f_1 | 0;
              tmp_4 = tmp_5 < 8;
            }
            if (tmp_4) {
              completeReadHead(input, current);
              tmp_3 = prepareReadFirstHead(input, size);
            } else {
              tmp_3 = current;
            }
          }
          var tmp1_elvis_lhs = tmp_3;
          var tmp_6;
          if (tmp1_elvis_lhs == null) {
            break $l$loop;
          } else {
            tmp_6 = tmp1_elvis_lhs;
          }
          var next = tmp_6;
          current = next;
          release = true;
        }
         while (size > 0);
      }finally {
        if (release) {
          completeReadHead(input, current);
        }
      }
    }
    if (charactersCopied < max) {
      var size_0 = 1;
      $l$block_3: {
        // Inline function 'io.ktor.utils.io.core.takeWhileSize' call
        var release_0 = true;
        var tmp0_elvis_lhs_2 = prepareReadFirstHead(input, 1);
        var tmp_7;
        if (tmp0_elvis_lhs_2 == null) {
          break $l$block_3;
        } else {
          tmp_7 = tmp0_elvis_lhs_2;
        }
        var current_0 = tmp_7;
        var size_1 = 1;
        try {
          $l$loop_0: do {
            // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
            var this_3 = current_0;
            var before_0 = this_3.n7f_1 - this_3.m7f_1 | 0;
            var after_0;
            if (before_0 >= size_1) {
              try {
                // Inline function 'io.ktor.utils.io.charsets.decode.<anonymous>' call
                // Inline function 'io.ktor.utils.io.core.readDirectInt8Array' call
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'io.ktor.utils.io.core.read' call
                var this_4 = current_0;
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'io.ktor.utils.io.core.readDirectInt8Array.<anonymous>' call
                var memory_0 = this_4.l7f_1;
                var start_0 = this_4.m7f_1;
                var endExclusive_0 = this_4.n7f_1;
                // Inline function 'io.ktor.utils.io.charsets.decode.<anonymous>.<anonymous>' call
                var view_0 = new Int8Array(memory_0.l7k_1.buffer, memory_0.l7k_1.byteOffset + start_0 | 0, endExclusive_0 - start_0 | 0);
                var result = decodeBufferImpl(view_0, decoder, max - charactersCopied | 0);
                dst.m8(result.i7r_1);
                charactersCopied = charactersCopied + result.i7r_1.length | 0;
                var rc_0 = result.j7r_1;
                this_4.m7k(rc_0);
                var rc_1 = rc_0;
                if (rc_1 > 0)
                  size_0 = 1;
                else if (size_0 === get_MAX_CHARACTERS_SIZE_IN_BYTES())
                  size_0 = 0;
                else {
                  size_0 = size_0 + 1 | 0;
                }
                size_1 = size_0;
              }finally {
                // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
                var this_5 = current_0;
                after_0 = this_5.n7f_1 - this_5.m7f_1 | 0;
              }
            } else {
              after_0 = before_0;
            }
            release_0 = false;
            var tmp_8;
            if (after_0 === 0) {
              tmp_8 = prepareReadNextHead(input, current_0);
            } else {
              var tmp_9;
              if (after_0 < size_1) {
                tmp_9 = true;
              } else {
                // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
                var this_6 = current_0;
                var tmp_10 = this_6.q7f_1 - this_6.p7f_1 | 0;
                tmp_9 = tmp_10 < 8;
              }
              if (tmp_9) {
                completeReadHead(input, current_0);
                tmp_8 = prepareReadFirstHead(input, size_1);
              } else {
                tmp_8 = current_0;
              }
            }
            var tmp1_elvis_lhs_0 = tmp_8;
            var tmp_11;
            if (tmp1_elvis_lhs_0 == null) {
              break $l$loop_0;
            } else {
              tmp_11 = tmp1_elvis_lhs_0;
            }
            var next_0 = tmp_11;
            current_0 = next_0;
            release_0 = true;
          }
           while (size_1 > 0);
        }finally {
          if (release_0) {
            completeReadHead(input, current_0);
          }
        }
      }
    }
    return charactersCopied;
  }
  function encodeComplete(_this__u8e3s4, dst) {
    return true;
  }
  function decodeExactBytes(_this__u8e3s4, input, inputLength) {
    if (inputLength === 0)
      return '';
    // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
    if ((input.y7g_1 - input.x7g_1 | 0) >= inputLength) {
      var decoder = Decoder(get_charset_0(_this__u8e3s4).w7n_1, true);
      var head = input.p7m();
      var view = input.w7g_1.l7k_1;
      var tmp$ret$2;
      $l$block: {
        // Inline function 'io.ktor.utils.io.js.decodeWrap' call
        try {
          // Inline function 'io.ktor.utils.io.charsets.decodeExactBytes.<anonymous>' call
          var subView = (head.m7f_1 === 0 ? inputLength === view.byteLength : false) ? view : new DataView(view.buffer, view.byteOffset + head.m7f_1 | 0, inputLength);
          tmp$ret$2 = decoder.k7r(subView);
          break $l$block;
        } catch ($p) {
          if ($p instanceof Error) {
            var t = $p;
            var tmp0_elvis_lhs = t.message;
            throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs == null ? 'no cause provided' : tmp0_elvis_lhs));
          } else {
            throw $p;
          }
        }
      }
      var text = tmp$ret$2;
      input.m7k(inputLength);
      return text;
    }
    return decodeExactBytesSlow(_this__u8e3s4, input, inputLength);
  }
  function get_charset_0(_this__u8e3s4) {
    return _this__u8e3s4.y7q_1;
  }
  function decodeExactBytesSlow(_this__u8e3s4, input, inputLength) {
    var decoder = Decoder(get_name(get_charset_0(_this__u8e3s4)), true);
    var inputRemaining = inputLength;
    var sb = StringBuilder_init_$Create$(inputLength);
    $l$block_4: {
      // Inline function 'io.ktor.utils.io.js.decodeWrap' call
      try {
        // Inline function 'io.ktor.utils.io.charsets.decodeExactBytesSlow.<anonymous>' call
        $l$block: {
          // Inline function 'io.ktor.utils.io.core.takeWhileSize' call
          var release = true;
          var tmp0_elvis_lhs = prepareReadFirstHead(input, 6);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            break $l$block;
          } else {
            tmp = tmp0_elvis_lhs;
          }
          var current = tmp;
          var size = 6;
          try {
            $l$loop: do {
              // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
              var this_0 = current;
              var before = this_0.n7f_1 - this_0.m7f_1 | 0;
              var after;
              if (before >= size) {
                try {
                  // Inline function 'io.ktor.utils.io.charsets.decodeExactBytesSlow.<anonymous>.<anonymous>' call
                  var buffer = current;
                  // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
                  var chunkSize = buffer.n7f_1 - buffer.m7f_1 | 0;
                  // Inline function 'kotlin.comparisons.minOf' call
                  var b = inputRemaining;
                  var size_0 = Math.min(chunkSize, b);
                  var tmp_0;
                  if (buffer.m7f_1 === 0 ? buffer.l7f_1.l7k_1.byteLength === size_0 : false) {
                    var tmp$ret$4;
                    $l$block_0: {
                      // Inline function 'io.ktor.utils.io.js.decodeStream' call
                      var buffer_0 = buffer.l7f_1.l7k_1;
                      // Inline function 'io.ktor.utils.io.js.decodeWrap' call
                      try {
                        tmp$ret$4 = decoder.g7r(buffer_0, decodeOptions(true));
                        break $l$block_0;
                      } catch ($p) {
                        if ($p instanceof Error) {
                          var t = $p;
                          var tmp0_elvis_lhs_0 = t.message;
                          throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs_0 == null ? 'no cause provided' : tmp0_elvis_lhs_0));
                        } else {
                          throw $p;
                        }
                      }
                    }
                    tmp_0 = tmp$ret$4;
                  } else {
                    var tmp$ret$6;
                    $l$block_1: {
                      // Inline function 'io.ktor.utils.io.js.decodeStream' call
                      var buffer_1 = new Int8Array(buffer.l7f_1.l7k_1.buffer, buffer.l7f_1.l7k_1.byteOffset + buffer.m7f_1 | 0, size_0);
                      // Inline function 'io.ktor.utils.io.js.decodeWrap' call
                      try {
                        tmp$ret$6 = decoder.g7r(buffer_1, decodeOptions(true));
                        break $l$block_1;
                      } catch ($p) {
                        if ($p instanceof Error) {
                          var t_0 = $p;
                          var tmp0_elvis_lhs_1 = t_0.message;
                          throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs_1 == null ? 'no cause provided' : tmp0_elvis_lhs_1));
                        } else {
                          throw $p;
                        }
                      }
                    }
                    tmp_0 = tmp$ret$6;
                  }
                  var text = tmp_0;
                  sb.x5(text);
                  buffer.m7k(size_0);
                  inputRemaining = inputRemaining - size_0 | 0;
                  size = inputRemaining > 0 ? 6 : 0;
                }finally {
                  // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
                  var this_1 = current;
                  after = this_1.n7f_1 - this_1.m7f_1 | 0;
                }
              } else {
                after = before;
              }
              release = false;
              var tmp_1;
              if (after === 0) {
                tmp_1 = prepareReadNextHead(input, current);
              } else {
                var tmp_2;
                if (after < size) {
                  tmp_2 = true;
                } else {
                  // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
                  var this_2 = current;
                  var tmp_3 = this_2.q7f_1 - this_2.p7f_1 | 0;
                  tmp_2 = tmp_3 < 8;
                }
                if (tmp_2) {
                  completeReadHead(input, current);
                  tmp_1 = prepareReadFirstHead(input, size);
                } else {
                  tmp_1 = current;
                }
              }
              var tmp1_elvis_lhs = tmp_1;
              var tmp_4;
              if (tmp1_elvis_lhs == null) {
                break $l$loop;
              } else {
                tmp_4 = tmp1_elvis_lhs;
              }
              var next = tmp_4;
              current = next;
              release = true;
            }
             while (size > 0);
          }finally {
            if (release) {
              completeReadHead(input, current);
            }
          }
        }
        if (inputRemaining > 0) {
          $l$block_2: {
            // Inline function 'io.ktor.utils.io.core.takeWhile' call
            var release_0 = true;
            var tmp0_elvis_lhs_2 = prepareReadFirstHead(input, 1);
            var tmp_5;
            if (tmp0_elvis_lhs_2 == null) {
              break $l$block_2;
            } else {
              tmp_5 = tmp0_elvis_lhs_2;
            }
            var current_0 = tmp_5;
            try {
              $l$loop_1: do {
                // Inline function 'io.ktor.utils.io.charsets.decodeExactBytesSlow.<anonymous>.<anonymous>' call
                var buffer_2 = current_0;
                // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
                var chunkSize_0 = buffer_2.n7f_1 - buffer_2.m7f_1 | 0;
                // Inline function 'kotlin.comparisons.minOf' call
                var b_0 = inputRemaining;
                var size_1 = Math.min(chunkSize_0, b_0);
                var tmp_6;
                if (buffer_2.m7f_1 === 0 ? buffer_2.l7f_1.l7k_1.byteLength === size_1 : false) {
                  tmp_6 = decoder.k7r(buffer_2.l7f_1.l7k_1);
                } else {
                  var tmp$ret$14;
                  $l$block_3: {
                    // Inline function 'io.ktor.utils.io.js.decodeStream' call
                    var buffer_3 = new Int8Array(buffer_2.l7f_1.l7k_1.buffer, buffer_2.l7f_1.l7k_1.byteOffset + buffer_2.m7f_1 | 0, size_1);
                    // Inline function 'io.ktor.utils.io.js.decodeWrap' call
                    try {
                      tmp$ret$14 = decoder.g7r(buffer_3, decodeOptions(true));
                      break $l$block_3;
                    } catch ($p) {
                      if ($p instanceof Error) {
                        var t_1 = $p;
                        var tmp0_elvis_lhs_3 = t_1.message;
                        throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs_3 == null ? 'no cause provided' : tmp0_elvis_lhs_3));
                      } else {
                        throw $p;
                      }
                    }
                  }
                  tmp_6 = tmp$ret$14;
                }
                var text_0 = tmp_6;
                sb.x5(text_0);
                buffer_2.m7k(size_1);
                inputRemaining = inputRemaining - size_1 | 0;
                if (!true) {
                  break $l$loop_1;
                }
                release_0 = false;
                var tmp1_elvis_lhs_0 = prepareReadNextHead(input, current_0);
                var tmp_7;
                if (tmp1_elvis_lhs_0 == null) {
                  break $l$loop_1;
                } else {
                  tmp_7 = tmp1_elvis_lhs_0;
                }
                var next_0 = tmp_7;
                current_0 = next_0;
                release_0 = true;
              }
               while (true);
            }finally {
              if (release_0) {
                completeReadHead(input, current_0);
              }
            }
          }
        }
        sb.x5(decoder.h7r());
        break $l$block_4;
      } catch ($p) {
        if ($p instanceof Error) {
          var t_2 = $p;
          var tmp0_elvis_lhs_4 = t_2.message;
          throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs_4 == null ? 'no cause provided' : tmp0_elvis_lhs_4));
        } else {
          throw $p;
        }
      }
    }
    if (inputRemaining > 0) {
      throw new EOFException('Not enough bytes available: had only ' + (inputLength - inputRemaining | 0) + ' instead of ' + inputLength);
    }
    return sb.toString();
  }
  function get_MAX_CHARACTERS_SIZE_IN_BYTES() {
    return MAX_CHARACTERS_SIZE_IN_BYTES;
  }
  var MAX_CHARACTERS_SIZE_IN_BYTES;
  function DecodeBufferResult(charactersDecoded, bytesConsumed) {
    this.i7r_1 = charactersDecoded;
    this.j7r_1 = bytesConsumed;
  }
  protoOf(DecodeBufferResult).toString = function () {
    return 'DecodeBufferResult(charactersDecoded=' + this.i7r_1 + ', bytesConsumed=' + this.j7r_1 + ')';
  };
  protoOf(DecodeBufferResult).hashCode = function () {
    var result = getStringHashCode(this.i7r_1);
    result = imul(result, 31) + this.j7r_1 | 0;
    return result;
  };
  protoOf(DecodeBufferResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DecodeBufferResult))
      return false;
    var tmp0_other_with_cast = other instanceof DecodeBufferResult ? other : THROW_CCE();
    if (!(this.i7r_1 === tmp0_other_with_cast.i7r_1))
      return false;
    if (!(this.j7r_1 === tmp0_other_with_cast.j7r_1))
      return false;
    return true;
  };
  function decodeBufferImpl(_this__u8e3s4, nativeDecoder, maxCharacters) {
    if (maxCharacters === 0) {
      return new DecodeBufferResult('', 0);
    }
    try {
      var sizeInBytes = coerceAtMost(maxCharacters, _this__u8e3s4.byteLength);
      var text = nativeDecoder.k7r(_this__u8e3s4.subarray(0, sizeInBytes));
      if (text.length <= maxCharacters) {
        return new DecodeBufferResult(text, sizeInBytes);
      }
    } catch ($p) {
      var _ = $p;
    }
    return decodeBufferImplSlow(_this__u8e3s4, nativeDecoder, maxCharacters);
  }
  function decodeBufferImplSlow(_this__u8e3s4, nativeDecoder, maxCharacters) {
    var maxBytes = coerceAtMost(maxCharacters >= 268435455 ? IntCompanionObject_instance.MAX_VALUE : imul(maxCharacters, 8), _this__u8e3s4.byteLength);
    var sizeInBytes = maxBytes;
    while (sizeInBytes > 8) {
      try {
        var text = nativeDecoder.k7r(_this__u8e3s4.subarray(0, sizeInBytes));
        if (text.length <= maxCharacters) {
          return new DecodeBufferResult(text, sizeInBytes);
        }
      } catch ($p) {
        var _ = $p;
      }
      sizeInBytes = sizeInBytes / 2 | 0;
    }
    sizeInBytes = 8;
    while (sizeInBytes > 0) {
      try {
        var text_0 = nativeDecoder.k7r(_this__u8e3s4.subarray(0, sizeInBytes));
        if (text_0.length <= maxCharacters) {
          return new DecodeBufferResult(text_0, sizeInBytes);
        }
      } catch ($p) {
        var __0 = $p;
      }
      sizeInBytes = sizeInBytes - 1 | 0;
    }
    $l$block: {
      // Inline function 'io.ktor.utils.io.js.decodeWrap' call
      try {
        // Inline function 'io.ktor.utils.io.charsets.decodeBufferImplSlow.<anonymous>' call
        nativeDecoder.k7r(_this__u8e3s4);
        break $l$block;
      } catch ($p) {
        if ($p instanceof Error) {
          var t = $p;
          var tmp0_elvis_lhs = t.message;
          throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs == null ? 'no cause provided' : tmp0_elvis_lhs));
        } else {
          throw $p;
        }
      }
    }
    throw new MalformedInputException('Unable to decode buffer');
  }
  function encodeISO88591(input, fromIndex, toIndex, dst) {
    if (fromIndex >= toIndex)
      return 0;
    // Inline function 'io.ktor.utils.io.core.writeDirect' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.write' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.writeDirect.<anonymous>' call
    var memory = dst.l7f_1;
    var start = dst.n7f_1;
    var endExclusive = dst.p7f_1;
    // Inline function 'io.ktor.utils.io.charsets.encodeISO88591.<anonymous>' call
    var view = memory.v7q(start, endExclusive - start | 0).l7k_1;
    var i8 = new Int8Array(view.buffer, view.byteOffset, view.byteLength);
    var writeIndex = 0;
    var inductionVariable = fromIndex;
    if (inductionVariable < toIndex)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_0 = charSequenceGet(input, index);
        var character = Char__toInt_impl_vasixd(this_0);
        if (character > 255) {
          failedToMapError(character);
        }
        // Inline function 'org.khronos.webgl.set' call
        var tmp1 = writeIndex;
        writeIndex = tmp1 + 1 | 0;
        // Inline function 'kotlin.js.asDynamic' call
        i8[tmp1] = toByte(character);
      }
       while (inductionVariable < toIndex);
    var rc = writeIndex;
    dst.n7k(rc);
    return toIndex - fromIndex | 0;
  }
  function failedToMapError(ch) {
    throw new MalformedInputException('The character with unicode point ' + ch + " couldn't be mapped to ISO-8859-1 character");
  }
  function writeFully_4(_this__u8e3s4, src, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? src.byteLength - offset | 0 : length;
    // Inline function 'io.ktor.utils.io.core.write' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
    var memory = _this__u8e3s4.l7f_1;
    var dstOffset = _this__u8e3s4.n7f_1;
    if ((_this__u8e3s4.p7f_1 - dstOffset | 0) < length) {
      throw new InsufficientSpaceException('Not enough free space to write ' + length + ' bytes');
    }
    copyTo_0(src, memory, offset, length, dstOffset);
    var rc = length;
    _this__u8e3s4.n7k(rc);
  }
  function get_PACKET_MAX_COPY_SIZE() {
    return PACKET_MAX_COPY_SIZE;
  }
  var PACKET_MAX_COPY_SIZE;
  function String_0(bytes, offset, length, charset) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? bytes.length : length;
    charset = charset === VOID ? Charsets_getInstance().u7n_1 : charset;
    if ((offset < 0 ? true : length < 0) ? true : (offset + length | 0) > bytes.length) {
      checkIndices(offset, length, bytes);
    }
    // Inline function 'kotlin.js.asDynamic' call
    var i8 = bytes;
    var bufferOffset = i8.byteOffset + offset | 0;
    var buffer = i8.buffer.slice(bufferOffset, bufferOffset + length | 0);
    var view = new ChunkBuffer(of_1(Companion_getInstance_6(), buffer), null, Companion_getInstance_4().b7j_1);
    view.t7k();
    var packet = ByteReadPacket_init_$Create$(view, Companion_getInstance_4().c7j_1);
    return decode(charset.x7n(), packet, IntCompanionObject_instance.MAX_VALUE);
  }
  function checkIndices(offset, length, bytes) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(offset >= 0)) {
      throw IndexOutOfBoundsException_init_$Create$('offset (' + offset + ") shouldn't be negative");
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(length >= 0)) {
      throw IndexOutOfBoundsException_init_$Create$('length (' + length + ") shouldn't be negative");
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!((offset + length | 0) <= bytes.length)) {
      throw IndexOutOfBoundsException_init_$Create$('offset (' + offset + ') + length (' + length + ') > bytes.size (' + bytes.length + ')');
    }
    throw IndexOutOfBoundsException_init_$Create$_0();
  }
  function EOFException(message) {
    IOException_init_$Init$(message, this);
    captureStack(this, EOFException);
  }
  function IOException_init_$Init$(message, $this) {
    IOException.call($this, message, null);
    return $this;
  }
  function IOException(message, cause) {
    Exception_init_$Init$_0(message, cause, this);
    captureStack(this, IOException);
  }
  function Decoder(encoding, fatal) {
    fatal = fatal === VOID ? true : fatal;
    var tmp;
    try {
      tmp = toKtor(new TextDecoder(encoding, textDecoderOptions(fatal)));
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var cause = $p;
        tmp_0 = new TextDecoderFallback(encoding, fatal);
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function decodeOptions(stream) {
    // Inline function 'kotlin.apply' call
    var this_0 = new Object();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.js.decodeOptions.<anonymous>' call
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.contracts.contract' call
    this_0.stream = stream;
    return this_0;
  }
  function toKtor(_this__u8e3s4) {
    return new toKtor$1(_this__u8e3s4);
  }
  function textDecoderOptions(fatal) {
    fatal = fatal === VOID ? false : fatal;
    // Inline function 'kotlin.apply' call
    var this_0 = new Object();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.js.textDecoderOptions.<anonymous>' call
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.contracts.contract' call
    this_0.fatal = fatal;
    return this_0;
  }
  function toKtor$1($this_toKtor) {
    this.l7r_1 = $this_toKtor;
  }
  protoOf(toKtor$1).h7r = function () {
    return this.l7r_1.decode();
  };
  protoOf(toKtor$1).k7r = function (buffer) {
    return this.l7r_1.decode(buffer);
  };
  protoOf(toKtor$1).g7r = function (buffer, options) {
    return this.l7r_1.decode(buffer, options);
  };
  function get_ENCODING_ALIASES() {
    _init_properties_TextDecoderFallback_kt__nrrftl();
    return ENCODING_ALIASES;
  }
  var ENCODING_ALIASES;
  function get_REPLACEMENT() {
    _init_properties_TextDecoderFallback_kt__nrrftl();
    return REPLACEMENT;
  }
  var REPLACEMENT;
  function TextDecoderFallback(encoding, fatal) {
    this.m7r_1 = fatal;
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.text.trim' call
    // Inline function 'kotlin.js.asDynamic' call
    var requestedEncoding = toString(trim(isCharSequence(encoding) ? encoding : THROW_CCE())).toLowerCase();
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!get_ENCODING_ALIASES().s(requestedEncoding)) {
      // Inline function 'io.ktor.utils.io.js.TextDecoderFallback.<anonymous>' call
      var message = encoding + ' is not supported.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  protoOf(TextDecoderFallback).h7r = function () {
    return '';
  };
  protoOf(TextDecoderFallback).k7r = function (buffer) {
    var tmp$ret$3;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.buildPacket' call
      // Inline function 'kotlin.contracts.contract' call
      var builder = new BytePacketBuilder();
      try {
        // Inline function 'io.ktor.utils.io.js.TextDecoderFallback.decode.<anonymous>' call
        var bytes = buffer instanceof Int8Array ? buffer : THROW_CCE();
        var inductionVariable = 0;
        var last = bytes.length;
        if (inductionVariable < last)
          $l$loop: do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var byte = bytes[index];
            var point = toCodePoint(byte);
            if (point < 0) {
              // Inline function 'kotlin.check' call
              // Inline function 'kotlin.contracts.contract' call
              if (!!this.m7r_1) {
                // Inline function 'io.ktor.utils.io.js.TextDecoderFallback.decode.<anonymous>.<anonymous>' call
                var message = 'Invalid character: ' + point;
                throw IllegalStateException_init_$Create$(toString(message));
              }
              writeFully_3(builder, get_REPLACEMENT());
              continue $l$loop;
            }
            if (point > 255) {
              builder.b7l(toByte(point >> 8));
            }
            builder.b7l(toByte(point & 255));
          }
           while (inductionVariable < last);
        tmp$ret$3 = builder.e3();
        break $l$block;
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
    return decodeToString(readBytes(tmp$ret$3));
  };
  protoOf(TextDecoderFallback).g7r = function (buffer, options) {
    return this.k7r(buffer);
  };
  function toCodePoint(_this__u8e3s4) {
    _init_properties_TextDecoderFallback_kt__nrrftl();
    var value = _this__u8e3s4 & 255;
    if (isASCII(value)) {
      return value;
    }
    return get_WIN1252_TABLE()[value - 128 | 0];
  }
  function isASCII(_this__u8e3s4) {
    _init_properties_TextDecoderFallback_kt__nrrftl();
    return 0 <= _this__u8e3s4 ? _this__u8e3s4 <= 127 : false;
  }
  var properties_initialized_TextDecoderFallback_kt_7y92ax;
  function _init_properties_TextDecoderFallback_kt__nrrftl() {
    if (!properties_initialized_TextDecoderFallback_kt_7y92ax) {
      properties_initialized_TextDecoderFallback_kt_7y92ax = true;
      ENCODING_ALIASES = setOf(['ansi_x3.4-1968', 'ascii', 'cp1252', 'cp819', 'csisolatin1', 'ibm819', 'iso-8859-1', 'iso-ir-100', 'iso8859-1', 'iso88591', 'iso_8859-1', 'iso_8859-1:1987', 'l1', 'latin1', 'us-ascii', 'windows-1252', 'x-cp1252']);
      // Inline function 'kotlin.byteArrayOf' call
      REPLACEMENT = new Int8Array([-17, -65, -67]);
    }
  }
  function get_WIN1252_TABLE() {
    _init_properties_Win1252Table_kt__tl0v64();
    return WIN1252_TABLE;
  }
  var WIN1252_TABLE;
  var properties_initialized_Win1252Table_kt_pkmjoq;
  function _init_properties_Win1252Table_kt__tl0v64() {
    if (!properties_initialized_Win1252Table_kt_pkmjoq) {
      properties_initialized_Win1252Table_kt_pkmjoq = true;
      // Inline function 'kotlin.intArrayOf' call
      WIN1252_TABLE = new Int32Array([8364, -1, 8218, 402, 8222, 8230, 8224, 8225, 710, 8240, 352, 8249, 338, -1, 381, -1, -1, 8216, 8217, 8220, 8221, 8226, 8211, 8212, 732, 8482, 353, 8250, 339, -1, 382, 376, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255]);
    }
  }
  function DefaultPool(capacity) {
    this.m7l_1 = capacity;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.m7l_1;
    tmp.n7l_1 = fillArrayVal(Array(size), null);
    this.o7l_1 = 0;
  }
  protoOf(DefaultPool).p7l = function (instance) {
  };
  protoOf(DefaultPool).f7m = function (instance) {
    return instance;
  };
  protoOf(DefaultPool).c7m = function (instance) {
  };
  protoOf(DefaultPool).h7m = function () {
    if (this.o7l_1 === 0)
      return this.i7l();
    this.o7l_1 = this.o7l_1 - 1 | 0;
    var idx = this.o7l_1;
    var tmp = this.n7l_1[idx];
    var instance = !(tmp == null) ? tmp : THROW_CCE();
    this.n7l_1[idx] = null;
    return this.f7m(instance);
  };
  protoOf(DefaultPool).i7m = function (instance) {
    this.c7m(instance);
    if (this.o7l_1 === this.m7l_1) {
      this.p7l(instance);
    } else {
      var tmp1 = this.o7l_1;
      this.o7l_1 = tmp1 + 1 | 0;
      this.n7l_1[tmp1] = instance;
    }
  };
  //region block: post-declaration
  protoOf(ByteChannelSequentialBase).i7j = readRemaining$default;
  protoOf(ChannelJob).eq = cancel$default;
  protoOf(ChannelJob).zp = invokeOnCompletion$default;
  //endregion
  //region block: init
  Companion_instance = new Companion();
  DEFAULT_BUFFER_SIZE = 4096;
  Companion_instance_1 = new Companion_1();
  DefaultAllocator_instance = new DefaultAllocator();
  Companion_instance_5 = new Companion_5();
  MAX_CHARACTERS_SIZE_IN_BYTES = 8;
  PACKET_MAX_COPY_SIZE = 200;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = copyTo;
  _.$_$.b = readAvailable;
  _.$_$.c = writeFully;
  _.$_$.d = IOException_init_$Init$;
  _.$_$.e = Companion_instance_5;
  _.$_$.f = Charsets_getInstance;
  _.$_$.g = Companion_getInstance_5;
  _.$_$.h = MalformedInputException;
  _.$_$.i = decode;
  _.$_$.j = encodeToByteArray;
  _.$_$.k = encode;
  _.$_$.l = get_name;
  _.$_$.m = completeReadHead;
  _.$_$.n = prepareReadFirstHead;
  _.$_$.o = prepareReadNextHead;
  _.$_$.p = BytePacketBuilder;
  _.$_$.q = ByteReadPacket;
  _.$_$.r = Input;
  _.$_$.s = String_0;
  _.$_$.t = discard;
  _.$_$.u = readBytes;
  _.$_$.v = readShort_0;
  _.$_$.w = readText;
  _.$_$.x = writeFully_3;
  _.$_$.y = writeShort_0;
  _.$_$.z = writeText;
  _.$_$.a1 = IOException;
  _.$_$.b1 = get_ByteArrayPool;
  _.$_$.c1 = ByteReadChannel;
  _.$_$.d1 = ByteReadChannel_1;
  _.$_$.e1 = WriterScope;
  _.$_$.f1 = cancel;
  _.$_$.g1 = writer;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-io.js.map
