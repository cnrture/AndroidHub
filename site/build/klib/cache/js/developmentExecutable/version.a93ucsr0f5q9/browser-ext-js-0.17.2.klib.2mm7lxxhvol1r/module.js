(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-browser-ext'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-browser-ext'.");
    }
    if (typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-browser-ext'. Its dependency 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' was not found. Please, check whether 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' is loaded prior to 'kobweb-frontend-browser-ext'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-browser-ext'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'kobweb-frontend-browser-ext'.");
    }
    root['kobweb-frontend-browser-ext'] = factory(typeof this['kobweb-frontend-browser-ext'] === 'undefined' ? {} : this['kobweb-frontend-browser-ext'], this['kotlin-kotlin-stdlib'], kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, this['kotlinx-coroutines-core']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.ob;
  var classMeta = kotlin_kotlin.$_$.ea;
  var setMetadataFor = kotlin_kotlin.$_$.pb;
  var VOID = kotlin_kotlin.$_$.e;
  var drop = kotlin_kotlin.$_$.jc;
  var objectMeta = kotlin_kotlin.$_$.nb;
  var interfaceMeta = kotlin_kotlin.$_$.qa;
  var sequence = kotlin_kotlin.$_$.lc;
  var CoroutineImpl = kotlin_kotlin.$_$.q9;
  var Unit_getInstance = kotlin_kotlin.$_$.l4;
  var THROW_CCE = kotlin_kotlin.$_$.ve;
  var SequenceScope = kotlin_kotlin.$_$.hc;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.b9;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.k;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.f2;
  var Char__rangeTo_impl_tkncvp = kotlin_kotlin.$_$.g2;
  var plus = kotlin_kotlin.$_$.w7;
  var plus_0 = kotlin_kotlin.$_$.x7;
  var SuspendFunction1 = kotlin_kotlin.$_$.r9;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.j;
  var THROW_IAE = kotlin_kotlin.$_$.we;
  var enumEntries = kotlin_kotlin.$_$.u9;
  var objectCreate = kotlin_kotlin.$_$.mb;
  var Enum = kotlin_kotlin.$_$.ke;
  var json = kotlin_kotlin.$_$.fb;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.t;
  var EventListener = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.e;
  var CompletableDeferred = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var asCoroutineDispatcher = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var Exception = kotlin_kotlin.$_$.me;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.d1;
  var decodeToString = kotlin_kotlin.$_$.qc;
  var isCharSequence = kotlin_kotlin.$_$.va;
  var trim = kotlin_kotlin.$_$.de;
  var toString = kotlin_kotlin.$_$.rb;
  var isBlank = kotlin_kotlin.$_$.yc;
  var split = kotlin_kotlin.$_$.ld;
  var compareTo = kotlin_kotlin.$_$.fa;
  var repeat = kotlin_kotlin.$_$.hd;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.i1;
  var captureStack = kotlin_kotlin.$_$.z9;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r;
  var isInterface = kotlin_kotlin.$_$.za;
  var Companion_getInstance = kotlin_kotlin.$_$.g4;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.j2;
  var intercepted = kotlin_kotlin.$_$.d9;
  var SafeContinuation_init_$Create$ = kotlin_kotlin.$_$.b1;
  var returnIfSuspended = kotlin_kotlin.$_$.h;
  var KProperty1 = kotlin_kotlin.$_$.fc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ma;
  var lazy = kotlin_kotlin.$_$.qf;
  var decapitalize = kotlin_kotlin.$_$.pc;
  var joinToString = kotlin_kotlin.$_$.e7;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var charSequenceLength = kotlin_kotlin.$_$.da;
  var charSequenceGet = kotlin_kotlin.$_$.ca;
  var isUpperCase = kotlin_kotlin.$_$.ad;
  var Char = kotlin_kotlin.$_$.ie;
  var isLowerCase = kotlin_kotlin.$_$.zc;
  var get_lastIndex = kotlin_kotlin.$_$.cd;
  var toString_0 = kotlin_kotlin.$_$.i2;
  var replace = kotlin_kotlin.$_$.id;
  var last = kotlin_kotlin.$_$.dd;
  var first = kotlin_kotlin.$_$.vc;
  var capitalize = kotlin_kotlin.$_$.mc;
  var _Duration___get_inWholeMilliseconds__impl__msfiry = kotlin_kotlin.$_$.c2;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.d4;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.f;
  var toDuration = kotlin_kotlin.$_$.ge;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ElementTarget, 'ElementTarget', interfaceMeta);
  setMetadataFor(ElementTarget$Companion$Parent$1, VOID, classMeta, VOID, [ElementTarget]);
  setMetadataFor(ElementTarget$Companion$PreviousSibling$1, VOID, classMeta, VOID, [ElementTarget]);
  setMetadataFor(ElementTarget$Companion$NextSibling$1, VOID, classMeta, VOID, [ElementTarget]);
  setMetadataFor(ElementTarget$Companion$of$1, VOID, classMeta, VOID, [ElementTarget]);
  setMetadataFor(ElementTarget$Companion$findAncestor$1, VOID, classMeta, VOID, [ElementTarget]);
  setMetadataFor(ElementTarget$Companion$findDescendant$1, VOID, classMeta, VOID, [ElementTarget]);
  setMetadataFor(ElementTarget$Companion$withId$1, VOID, classMeta, VOID, [ElementTarget]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(_get_ancestors_$slambda_pfk3hj, '<get-ancestors>$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(_get_descendantsBfs_$slambda_xfszpk, '<get-descendantsBfs>$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(Size, 'Size', classMeta);
  setMetadataFor(Entry, 'Entry', classMeta);
  setMetadataFor(BoxType, 'BoxType', classMeta, Enum);
  setMetadataFor(ObserveOptions, 'ObserveOptions', classMeta, VOID, VOID, ObserveOptions);
  setMetadataFor(ResizeObserver_0, 'ResizeObserver', classMeta);
  setMetadataFor(EventListenerManager, 'EventListenerManager', classMeta);
  setMetadataFor(HttpMethod, 'HttpMethod', classMeta, Enum);
  setMetadataFor(ResponseException, 'ResponseException', classMeta, Exception);
  setMetadataFor(getBodyBytesAsync$slambda, 'getBodyBytesAsync$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor($tryFetchCOROUTINE$0, '$tryFetchCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor($getBodyBytesCOROUTINE$1, '$getBodyBytesCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(HttpFetcher, 'HttpFetcher', classMeta, VOID, VOID, VOID, VOID, VOID, [3, 4]);
  setMetadataFor(AbortController_0, 'AbortController', classMeta, VOID, VOID, AbortController_0);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(CancellableActionHandle, 'CancellableActionHandle', classMeta);
  //endregion
  function ElementTarget$Companion$Parent$1() {
  }
  protoOf(ElementTarget$Companion$Parent$1).invoke_eqenwi_k$ = function (startingFrom) {
    var tmp = startingFrom.parentElement;
    return tmp instanceof HTMLElement ? tmp : null;
  };
  function ElementTarget$Companion$PreviousSibling$1() {
  }
  protoOf(ElementTarget$Companion$PreviousSibling$1).invoke_eqenwi_k$ = function (startingFrom) {
    var tmp = startingFrom.previousElementSibling;
    return tmp instanceof HTMLElement ? tmp : null;
  };
  function ElementTarget$Companion$NextSibling$1() {
  }
  protoOf(ElementTarget$Companion$NextSibling$1).invoke_eqenwi_k$ = function (startingFrom) {
    var tmp = startingFrom.nextElementSibling;
    return tmp instanceof HTMLElement ? tmp : null;
  };
  function ElementTarget$Companion$of$1($element) {
    this.$element_1 = $element;
  }
  protoOf(ElementTarget$Companion$of$1).invoke_eqenwi_k$ = function (startingFrom) {
    return this.$element_1;
  };
  function ElementTarget$Companion$findAncestor$1($matching) {
    this.$matching_1 = $matching;
  }
  protoOf(ElementTarget$Companion$findAncestor$1).invoke_eqenwi_k$ = function (startingFrom) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.sequences.firstOrNull' call
      var tmp0_iterator = drop(get_ancestors(startingFrom), 1).iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'com.varabyte.kobweb.browser.dom.<no name provided>.invoke.<anonymous>' call
        if (this.$matching_1(element)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  };
  function ElementTarget$Companion$findDescendant$1($root, $matching) {
    this.$root_1 = $root;
    this.$matching_1 = $matching;
  }
  protoOf(ElementTarget$Companion$findDescendant$1).invoke_eqenwi_k$ = function (startingFrom) {
    var tmp0_safe_receiver = this.$root_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_descendantsBfs(tmp0_safe_receiver);
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : drop(tmp1_safe_receiver, 1);
    var tmp;
    if (tmp2_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.sequences.firstOrNull' call
        var tmp0_iterator = tmp2_safe_receiver.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          // Inline function 'com.varabyte.kobweb.browser.dom.<no name provided>.invoke.<anonymous>' call
          if (this.$matching_1(element)) {
            tmp$ret$1 = element;
            break $l$block;
          }
        }
        tmp$ret$1 = null;
      }
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  function ElementTarget$Companion$withId$1($elementId) {
    this.$elementId_1 = $elementId;
  }
  protoOf(ElementTarget$Companion$withId$1).invoke_eqenwi_k$ = function (startingFrom) {
    var tmp = document.getElementById(this.$elementId_1);
    return tmp instanceof HTMLElement ? tmp : null;
  };
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).get_Parent_2sous3_k$ = function () {
    return new ElementTarget$Companion$Parent$1();
  };
  protoOf(Companion).get_PreviousSibling_b9lu4i_k$ = function () {
    return new ElementTarget$Companion$PreviousSibling$1();
  };
  protoOf(Companion).get_NextSibling_r9gnnq_k$ = function () {
    return new ElementTarget$Companion$NextSibling$1();
  };
  protoOf(Companion).of_3l2l1d_k$ = function (element) {
    return new ElementTarget$Companion$of$1(element);
  };
  protoOf(Companion).findAncestor_7l9m5i_k$ = function (matching) {
    return new ElementTarget$Companion$findAncestor$1(matching);
  };
  protoOf(Companion).findDescendant_1jwbl1_k$ = function (root, matching) {
    return new ElementTarget$Companion$findDescendant$1(root, matching);
  };
  protoOf(Companion).findDescendant$default_i86gkb_k$ = function (root, matching, $super) {
    root = root === VOID ? document.body : root;
    return $super === VOID ? this.findDescendant_1jwbl1_k$(root, matching) : $super.findDescendant_1jwbl1_k$.call(this, root, matching);
  };
  protoOf(Companion).withId_30dnix_k$ = function (elementId) {
    return new ElementTarget$Companion$withId$1(elementId);
  };
  var Companion_instance;
  function Companion_getInstance_1() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function ElementTarget() {
  }
  function get_ALPHANUMERICS() {
    _init_properties_ElementUtils_kt__9yjtit();
    return ALPHANUMERICS;
  }
  var ALPHANUMERICS;
  function get_ancestors(_this__u8e3s4) {
    _init_properties_ElementUtils_kt__9yjtit();
    return sequence(_get_ancestors_$slambda_pfk3hj_0(_this__u8e3s4, null));
  }
  function get_descendantsBfs(_this__u8e3s4) {
    _init_properties_ElementUtils_kt__9yjtit();
    return sequence(_get_descendantsBfs_$slambda_xfszpk_0(_this__u8e3s4, null));
  }
  function _get_ancestors_$slambda_pfk3hj($this_ancestors, resultContinuation) {
    this.$this_ancestors_1 = $this_ancestors;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(_get_ancestors_$slambda_pfk3hj).invoke_c6zub9_k$ = function ($this$sequence, $completion) {
    var tmp = this.create_hlhcav_k$($this$sequence, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(_get_ancestors_$slambda_pfk3hj).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_c6zub9_k$(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(_get_ancestors_$slambda_pfk3hj).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            this.current0__1 = this.$this_ancestors_1;
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!!(this.current0__1 == null)) {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

            var tmp_0 = this.current0__1;
            if (tmp_0 instanceof HTMLElement) {
              this.set_state_rjd8d0_k$(2);
              suspendResult = this.$this$sequence_1.yield_3xhcex_k$(this.current0__1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

          case 2:
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            this.current0__1 = this.current0__1.parentElement;
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 4:
            return Unit_getInstance();
          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(_get_ancestors_$slambda_pfk3hj).create_hlhcav_k$ = function ($this$sequence, completion) {
    var i = new _get_ancestors_$slambda_pfk3hj(this.$this_ancestors_1, completion);
    i.$this$sequence_1 = $this$sequence;
    return i;
  };
  protoOf(_get_ancestors_$slambda_pfk3hj).create_wyq9v6_k$ = function (value, completion) {
    return this.create_hlhcav_k$(value instanceof SequenceScope ? value : THROW_CCE(), completion);
  };
  function _get_ancestors_$slambda_pfk3hj_0($this_ancestors, resultContinuation) {
    var i = new _get_ancestors_$slambda_pfk3hj($this_ancestors, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.invoke_c6zub9_k$($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _get_descendantsBfs_$slambda_xfszpk($this_descendantsBfs, resultContinuation) {
    this.$this_descendantsBfs_1 = $this_descendantsBfs;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(_get_descendantsBfs_$slambda_xfszpk).invoke_c6zub9_k$ = function ($this$sequence, $completion) {
    var tmp = this.create_hlhcav_k$($this$sequence, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(_get_descendantsBfs_$slambda_xfszpk).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_c6zub9_k$(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(_get_descendantsBfs_$slambda_xfszpk).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_0 = this;
            tmp_0.queue0__1 = ArrayList_init_$Create$();
            this.queue0__1.add_utx5q5_k$(this.$this_descendantsBfs_1);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!!this.queue0__1.isEmpty_y1axqb_k$()) {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

            this.node1__1 = this.queue0__1.removeAt_6niowx_k$(0);
            this.set_state_rjd8d0_k$(2);
            suspendResult = this.$this$sequence_1.yield_3xhcex_k$(this.node1__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var inductionVariable = 0;
            var last = this.node1__1.children.length;
            if (inductionVariable < last)
              $l$loop: do {
                var i = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var tmp_1 = this.node1__1.children[i];
                var tmp1_elvis_lhs = tmp_1 instanceof HTMLElement ? tmp_1 : null;
                var tmp_2;
                if (tmp1_elvis_lhs == null) {
                  continue $l$loop;
                } else {
                  tmp_2 = tmp1_elvis_lhs;
                }
                var child = tmp_2;
                this.queue0__1.add_utx5q5_k$(child);
              }
               while (inductionVariable < last);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            return Unit_getInstance();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(_get_descendantsBfs_$slambda_xfszpk).create_hlhcav_k$ = function ($this$sequence, completion) {
    var i = new _get_descendantsBfs_$slambda_xfszpk(this.$this_descendantsBfs_1, completion);
    i.$this$sequence_1 = $this$sequence;
    return i;
  };
  protoOf(_get_descendantsBfs_$slambda_xfszpk).create_wyq9v6_k$ = function (value, completion) {
    return this.create_hlhcav_k$(value instanceof SequenceScope ? value : THROW_CCE(), completion);
  };
  function _get_descendantsBfs_$slambda_xfszpk_0($this_descendantsBfs, resultContinuation) {
    var i = new _get_descendantsBfs_$slambda_xfszpk($this_descendantsBfs, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.invoke_c6zub9_k$($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  var properties_initialized_ElementUtils_kt_gopq0n;
  function _init_properties_ElementUtils_kt__9yjtit() {
    if (!properties_initialized_ElementUtils_kt_gopq0n) {
      properties_initialized_ElementUtils_kt_gopq0n = true;
      ALPHANUMERICS = plus_0(plus(Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(122)), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(65), _Char___init__impl__6a9atx(90))), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(57)));
    }
  }
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).from_jt6ngh_k$ = function (actualSize) {
    return new Size(actualSize.blockSize, actualSize.inlineSize);
  };
  var Companion_instance_0;
  function Companion_getInstance_2() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).from_jo53ki_k$ = function (actualEntry) {
    var tmp = actualEntry.target;
    // Inline function 'kotlin.collections.map' call
    var this_0 = actualEntry.borderBoxSize;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(this_0.length);
    var inductionVariable = 0;
    var last = this_0.length;
    while (inductionVariable < last) {
      var item = this_0[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.varabyte.kobweb.browser.dom.observers.Companion.from.<anonymous>' call
      var tmp$ret$0 = Companion_getInstance_2().from_jt6ngh_k$(item);
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    var tmp_0 = destination;
    // Inline function 'kotlin.collections.map' call
    var this_1 = actualEntry.contentBoxSize;
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$_0(this_1.length);
    var inductionVariable_0 = 0;
    var last_0 = this_1.length;
    while (inductionVariable_0 < last_0) {
      var item_0 = this_1[inductionVariable_0];
      inductionVariable_0 = inductionVariable_0 + 1 | 0;
      // Inline function 'com.varabyte.kobweb.browser.dom.observers.Companion.from.<anonymous>' call
      var tmp$ret$3 = Companion_getInstance_2().from_jt6ngh_k$(item_0);
      destination_0.add_utx5q5_k$(tmp$ret$3);
    }
    var tmp_1 = destination_0;
    var tmp_2 = actualEntry.contentRect;
    // Inline function 'kotlin.collections.map' call
    var this_2 = actualEntry.devicePixelContentBoxSize;
    // Inline function 'kotlin.collections.mapTo' call
    var destination_1 = ArrayList_init_$Create$_0(this_2.length);
    var inductionVariable_1 = 0;
    var last_1 = this_2.length;
    while (inductionVariable_1 < last_1) {
      var item_1 = this_2[inductionVariable_1];
      inductionVariable_1 = inductionVariable_1 + 1 | 0;
      // Inline function 'com.varabyte.kobweb.browser.dom.observers.Companion.from.<anonymous>' call
      var tmp$ret$6 = Companion_getInstance_2().from_jt6ngh_k$(item_1);
      destination_1.add_utx5q5_k$(tmp$ret$6);
    }
    return new Entry(tmp, tmp_0, tmp_1, tmp_2, destination_1);
  };
  var Companion_instance_1;
  function Companion_getInstance_3() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  var BoxType_ContentBox_instance;
  var BoxType_BorderBox_instance;
  var BoxType_DevicePixelContentBox_instance;
  function values() {
    return [BoxType_ContentBox_getInstance(), BoxType_BorderBox_getInstance(), BoxType_DevicePixelContentBox_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'ContentBox':
        return BoxType_ContentBox_getInstance();
      case 'BorderBox':
        return BoxType_BorderBox_getInstance();
      case 'DevicePixelContentBox':
        return BoxType_DevicePixelContentBox_getInstance();
      default:
        BoxType_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var BoxType_entriesInitialized;
  function BoxType_initEntries() {
    if (BoxType_entriesInitialized)
      return Unit_getInstance();
    BoxType_entriesInitialized = true;
    BoxType_ContentBox_instance = new BoxType('ContentBox', 0);
    BoxType_BorderBox_instance = new BoxType('BorderBox', 1);
    BoxType_DevicePixelContentBox_instance = new BoxType('DevicePixelContentBox', 2);
  }
  var $ENTRIES;
  function ResizeObserver_init_$Init$(resized, $this) {
    ResizeObserver_0.call($this, ResizeObserver$_init_$lambda_4ha6n5(resized));
    return $this;
  }
  function ResizeObserver_init_$Create$(resized) {
    return ResizeObserver_init_$Init$(resized, objectCreate(protoOf(ResizeObserver_0)));
  }
  function _get__actualObserver__lxfsqa($this) {
    return $this._actualObserver_1;
  }
  function Size(blockSize, inlineSize) {
    Companion_getInstance_2();
    this.blockSize_1 = blockSize;
    this.inlineSize_1 = inlineSize;
  }
  protoOf(Size).get_blockSize_mxxr45_k$ = function () {
    return this.blockSize_1;
  };
  protoOf(Size).get_inlineSize_7b0w1p_k$ = function () {
    return this.inlineSize_1;
  };
  function Entry(target, borderBoxSize, contentBoxSize, contentRect, devicePixelContentBoxSize) {
    Companion_getInstance_3();
    this.target_1 = target;
    this.borderBoxSize_1 = borderBoxSize;
    this.contentBoxSize_1 = contentBoxSize;
    this.contentRect_1 = contentRect;
    this.devicePixelContentBoxSize_1 = devicePixelContentBoxSize;
  }
  protoOf(Entry).get_target_juba8q_k$ = function () {
    return this.target_1;
  };
  protoOf(Entry).get_borderBoxSize_yn7wcp_k$ = function () {
    return this.borderBoxSize_1;
  };
  protoOf(Entry).get_contentBoxSize_ull1z8_k$ = function () {
    return this.contentBoxSize_1;
  };
  protoOf(Entry).get_contentRect_7gh40k_k$ = function () {
    return this.contentRect_1;
  };
  protoOf(Entry).get_devicePixelContentBoxSize_wedm9m_k$ = function () {
    return this.devicePixelContentBoxSize_1;
  };
  function BoxType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ObserveOptions(boxType) {
    boxType = boxType === VOID ? null : boxType;
    this.boxType_1 = boxType;
  }
  protoOf(ObserveOptions).get_boxType_2gm6rg_k$ = function () {
    return this.boxType_1;
  };
  protoOf(ObserveOptions).toJson_edh1bx_k$ = function () {
    // Inline function 'kotlin.apply' call
    var this_0 = json([]);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.browser.dom.observers.ObserveOptions.toJson.<anonymous>' call
    var tmp0_safe_receiver = this.boxType_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this_0['box'] = titleCamelCaseToKebabCase(tmp0_safe_receiver.get_name_woqyms_k$());
    }
    return this_0;
  };
  function ResizeObserver$_init_$lambda_4ha6n5($resized) {
    return function (entries, _anonymous_parameter_1__qggqgd) {
      $resized(entries);
      return Unit_getInstance();
    };
  }
  function ResizeObserver$_actualObserver$lambda($resized, this$0) {
    return function (actualEntries, _anonymous_parameter_1__qggqgd) {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(actualEntries.length);
      var inductionVariable = 0;
      var last = actualEntries.length;
      while (inductionVariable < last) {
        var item = actualEntries[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'com.varabyte.kobweb.browser.dom.observers.ResizeObserver._actualObserver.<anonymous>.<anonymous>' call
        var tmp$ret$0 = Companion_getInstance_3().from_jo53ki_k$(item);
        destination.add_utx5q5_k$(tmp$ret$0);
      }
      $resized(destination, this$0);
      return Unit_getInstance();
    };
  }
  function BoxType_ContentBox_getInstance() {
    BoxType_initEntries();
    return BoxType_ContentBox_instance;
  }
  function BoxType_BorderBox_getInstance() {
    BoxType_initEntries();
    return BoxType_BorderBox_instance;
  }
  function BoxType_DevicePixelContentBox_getInstance() {
    BoxType_initEntries();
    return BoxType_DevicePixelContentBox_instance;
  }
  function ResizeObserver_0(resized) {
    var tmp = this;
    tmp._actualObserver_1 = new ResizeObserver(ResizeObserver$_actualObserver$lambda(resized, this));
  }
  protoOf(ResizeObserver_0).observe_kts85w_k$ = function (element) {
    return this._actualObserver_1.observe(element);
  };
  protoOf(ResizeObserver_0).unobserve_r2e9az_k$ = function (element) {
    return this._actualObserver_1.unobserve(element);
  };
  protoOf(ResizeObserver_0).disconnect_t9cc0c_k$ = function () {
    return this._actualObserver_1.disconnect();
  };
  function _get_element__z0t21h($this) {
    return $this.element_1;
  }
  function _get_listeners__760gzy($this) {
    return $this.listeners_1;
  }
  function EventListenerManager(element) {
    this.element_1 = element;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.listeners_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(EventListenerManager).addEventListener_t7ubij_k$ = function (type, listener) {
    // Inline function 'kotlin.collections.set' call
    this.listeners_1.put_4fpzoq_k$(type, listener);
    this.element_1.addEventListener(type, listener);
  };
  protoOf(EventListenerManager).addEventListener_q0srgg_k$ = function (type, listener) {
    this.addEventListener_t7ubij_k$(type, EventListener(listener));
  };
  protoOf(EventListenerManager).clearAllListeners_1m8p17_k$ = function () {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this.listeners_1.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.browser.events.EventListenerManager.clearAllListeners.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var type = element.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var listener = element.get_value_j01efc_k$();
      this.element_1.removeEventListener(type, listener);
    }
    this.listeners_1.clear_j9egeb_k$();
  };
  function fetch(_this__u8e3s4, method, resource, headers, body, abortController, $completion) {
    headers = headers === VOID ? null : headers;
    body = body === VOID ? null : body;
    abortController = abortController === VOID ? null : abortController;
    var responseBytesDeferred = CompletableDeferred();
    var tmp;
    var tmp_0;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(headers == null ? true : headers.isEmpty_y1axqb_k$())) {
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
        var tmp0_iterator = headers.get_entries_p20ztl_k$().iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var tmp1_loop_parameter = tmp0_iterator.next_20eer_k$();
          // Inline function 'kotlin.collections.component1' call
          var key = tmp1_loop_parameter.get_key_18j28a_k$();
          // Inline function 'kotlin.collections.component2' call
          var value = tmp1_loop_parameter.get_value_j01efc_k$();
          this_0[key] = value;
        }
      }
      tmp = this_0;
    } else {
      tmp = null;
    }
    var headersJson = tmp;
    // Inline function 'org.w3c.fetch.RequestInit' call
    var method_0 = method.get_name_woqyms_k$();
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
      requestInitDynamic['signal'] = abortController.get_signal_jhh4tt_k$();
    }
    var tmp_1 = _this__u8e3s4.window.fetch(resource, requestInit);
    var tmp_2 = fetch$lambda(responseBytesDeferred);
    tmp_1.then(tmp_2, fetch$lambda_0(responseBytesDeferred));
    return responseBytesDeferred.await_4rdzbx_k$($completion);
  }
  var HttpMethod_DELETE_instance;
  var HttpMethod_GET_instance;
  var HttpMethod_HEAD_instance;
  var HttpMethod_OPTIONS_instance;
  var HttpMethod_PATCH_instance;
  var HttpMethod_POST_instance;
  var HttpMethod_PUT_instance;
  function values_0() {
    return [HttpMethod_DELETE_getInstance(), HttpMethod_GET_getInstance(), HttpMethod_HEAD_getInstance(), HttpMethod_OPTIONS_getInstance(), HttpMethod_PATCH_getInstance(), HttpMethod_POST_getInstance(), HttpMethod_PUT_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'DELETE':
        return HttpMethod_DELETE_getInstance();
      case 'GET':
        return HttpMethod_GET_getInstance();
      case 'HEAD':
        return HttpMethod_HEAD_getInstance();
      case 'OPTIONS':
        return HttpMethod_OPTIONS_getInstance();
      case 'PATCH':
        return HttpMethod_PATCH_getInstance();
      case 'POST':
        return HttpMethod_POST_getInstance();
      case 'PUT':
        return HttpMethod_PUT_getInstance();
      default:
        HttpMethod_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var HttpMethod_entriesInitialized;
  function HttpMethod_initEntries() {
    if (HttpMethod_entriesInitialized)
      return Unit_getInstance();
    HttpMethod_entriesInitialized = true;
    HttpMethod_DELETE_instance = new HttpMethod('DELETE', 0);
    HttpMethod_GET_instance = new HttpMethod('GET', 1);
    HttpMethod_HEAD_instance = new HttpMethod('HEAD', 2);
    HttpMethod_OPTIONS_instance = new HttpMethod('OPTIONS', 3);
    HttpMethod_PATCH_instance = new HttpMethod('PATCH', 4);
    HttpMethod_POST_instance = new HttpMethod('POST', 5);
    HttpMethod_PUT_instance = new HttpMethod('PUT', 6);
  }
  var $ENTRIES_0;
  function HttpMethod(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function tryFetch(_this__u8e3s4, method, resource, headers, body, logOnError, abortController, $completion) {
    headers = headers === VOID ? null : headers;
    body = body === VOID ? null : body;
    logOnError = logOnError === VOID ? false : logOnError;
    abortController = abortController === VOID ? null : abortController;
    var tmp = new $tryFetchCOROUTINE$0(_this__u8e3s4, method, resource, headers, body, logOnError, abortController, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
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
    this_0.append_22ad7x_k$('URL = ' + response.url + ', Status = ' + response.status + ', Status Text = ' + response.statusText);
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
      this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(10));
      var lines = split(bodyString, ['\n']);
      var tmp$ret$5;
      $l$block: {
        // Inline function 'kotlin.collections.maxOfOrNull' call
        var iterator = lines.iterator_jk1svi_k$();
        if (!iterator.hasNext_bitz1p_k$()) {
          tmp$ret$5 = null;
          break $l$block;
        }
        // Inline function 'com.varabyte.kobweb.browser.http.ResponseException.<init>.<anonymous>.<anonymous>' call
        var maxValue = iterator.next_20eer_k$().length;
        while (iterator.hasNext_bitz1p_k$()) {
          // Inline function 'com.varabyte.kobweb.browser.http.ResponseException.<init>.<anonymous>.<anonymous>' call
          var v = iterator.next_20eer_k$().length;
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
      this_0.append_22ad7x_k$(boundary).append_am5a4z_k$(_Char___init__impl__6a9atx(10));
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = lines.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'com.varabyte.kobweb.browser.http.ResponseException.<init>.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.text.appendLine' call
        var value = indent + element;
        // Inline function 'kotlin.text.appendLine' call
        this_0.append_22ad7x_k$(value).append_am5a4z_k$(_Char___init__impl__6a9atx(10));
      }
      // Inline function 'kotlin.text.appendLine' call
      // Inline function 'kotlin.text.appendLine' call
      this_0.append_22ad7x_k$(boundary).append_am5a4z_k$(_Char___init__impl__6a9atx(10));
    }
    var tmp$ret$15 = this_0.toString();
    Exception_init_$Init$(tmp$ret$15, this);
    captureStack(this, ResponseException);
    this.response_1 = response;
    this.bodyBytes_1 = bodyBytes;
  }
  protoOf(ResponseException).get_response_xlk07e_k$ = function () {
    return this.response_1;
  };
  protoOf(ResponseException).get_bodyBytes_ssopc0_k$ = function () {
    return this.bodyBytes_1;
  };
  function getBodyBytes(_this__u8e3s4, $completion) {
    var tmp = new $getBodyBytesCOROUTINE$1(_this__u8e3s4, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function fetch$lambda$lambda($responseBytesDeferred) {
    return function (bodyBytes) {
      $responseBytesDeferred.complete_ixf84q_k$(bodyBytes);
      return Unit_getInstance();
    };
  }
  function fetch$lambda$lambda_0($responseBytesDeferred, $res) {
    return function (bodyBytes) {
      $responseBytesDeferred.completeExceptionally_xyzekf_k$(new ResponseException($res, bodyBytes));
      return Unit_getInstance();
    };
  }
  function fetch$lambda($responseBytesDeferred) {
    return function (res) {
      var tmp;
      if (res.ok) {
        getBodyBytesAsync(res, fetch$lambda$lambda($responseBytesDeferred));
        tmp = Unit_getInstance();
      } else {
        getBodyBytesAsync(res, fetch$lambda$lambda_0($responseBytesDeferred, res));
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function fetch$lambda_0($responseBytesDeferred) {
    return function (t) {
      return $responseBytesDeferred.completeExceptionally_xyzekf_k$(t);
    };
  }
  function getBodyBytesAsync$slambda($result, $this_getBodyBytesAsync, resultContinuation) {
    this.$result_1 = $result;
    this.$this_getBodyBytesAsync_1 = $this_getBodyBytesAsync;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(getBodyBytesAsync$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(getBodyBytesAsync$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(getBodyBytesAsync$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = getBodyBytes(this.$this_getBodyBytesAsync_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            this.$result_1(ARGUMENT);
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(getBodyBytesAsync$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new getBodyBytesAsync$slambda(this.$result_1, this.$this_getBodyBytesAsync_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(getBodyBytesAsync$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope_0) : false) ? value : THROW_CCE(), completion);
  };
  function getBodyBytesAsync$slambda_0($result, $this_getBodyBytesAsync, resultContinuation) {
    var i = new getBodyBytesAsync$slambda($result, $this_getBodyBytesAsync, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
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
      Companion_getInstance();
      var tmp$ret$3 = _Result___init__impl__xyqfz8(tmp_1);
      this_0.resumeWith_dtxwbr_k$(tmp$ret$3);
      return Unit_getInstance();
    };
  }
  function getBodyBytes$lambda_0($cont) {
    return function (it) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $cont;
      var value = new Int8Array(0);
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      var tmp$ret$0 = _Result___init__impl__xyqfz8(value);
      this_0.resumeWith_dtxwbr_k$(tmp$ret$0);
      return Unit_getInstance();
    };
  }
  function HttpMethod_DELETE_getInstance() {
    HttpMethod_initEntries();
    return HttpMethod_DELETE_instance;
  }
  function HttpMethod_GET_getInstance() {
    HttpMethod_initEntries();
    return HttpMethod_GET_instance;
  }
  function HttpMethod_HEAD_getInstance() {
    HttpMethod_initEntries();
    return HttpMethod_HEAD_instance;
  }
  function HttpMethod_OPTIONS_getInstance() {
    HttpMethod_initEntries();
    return HttpMethod_OPTIONS_instance;
  }
  function HttpMethod_PATCH_getInstance() {
    HttpMethod_initEntries();
    return HttpMethod_PATCH_instance;
  }
  function HttpMethod_POST_getInstance() {
    HttpMethod_initEntries();
    return HttpMethod_POST_instance;
  }
  function HttpMethod_PUT_getInstance() {
    HttpMethod_initEntries();
    return HttpMethod_PUT_instance;
  }
  function $tryFetchCOROUTINE$0(_this__u8e3s4, method, resource, headers, body, logOnError, abortController, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.method_1 = method;
    this.resource_1 = resource;
    this.headers_1 = headers;
    this.body_1 = body;
    this.logOnError_1 = logOnError;
    this.abortController_1 = abortController;
  }
  protoOf($tryFetchCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = fetch(this._this__u8e3s4__1, this.method_1, this.resource_1, this.headers_1, this.body_1, this.abortController_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.TRY_RESULT0__1 = suspendResult;
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof Error) {
              var t = this.get_exception_x0n6w6_k$();
              var tmp_1 = this;
              if (this.logOnError_1) {
                console.log('Error fetching resource "' + this.resource_1 + '"\n\n' + t);
              }
              tmp_1.TRY_RESULT0__1 = null;
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_fex74n_k$(3);
            return this.TRY_RESULT0__1;
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $getBodyBytesCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($getBodyBytesCOROUTINE$1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var safe = SafeContinuation_init_$Create$(intercepted(this));
            var tmp_0 = this._this__u8e3s4__1.arrayBuffer();
            var tmp_1 = tmp_0.then(getBodyBytes$lambda(safe));
            tmp_1.catch(getBodyBytes$lambda_0(safe));
            suspendResult = returnIfSuspended(safe.getOrThrow_323tdf_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function get_http(_this__u8e3s4) {
    _init_properties_HttpFetcher_kt__6mmkul();
    // Inline function 'kotlin.getValue' call
    var this_0 = http$delegate;
    http$factory();
    return this_0.get_value_j01efc_k$();
  }
  var http$delegate;
  function _get_window__ax0zxh($this) {
    return $this.window_1;
  }
  function HttpFetcher(window_0) {
    this.window_1 = window_0;
    this.logOnError_1 = false;
  }
  protoOf(HttpFetcher).set_logOnError_wi584t_k$ = function (_set____db54di) {
    this.logOnError_1 = _set____db54di;
  };
  protoOf(HttpFetcher).get_logOnError_4wpkhe_k$ = function () {
    return this.logOnError_1;
  };
  protoOf(HttpFetcher).delete_czyy2p_k$ = function (resource, headers, abortController, $completion) {
    return fetch(this.window_1, HttpMethod_DELETE_getInstance(), resource, headers, null, abortController, $completion);
  };
  protoOf(HttpFetcher).delete$default_7wcx2q_k$ = function (resource, headers, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.delete_czyy2p_k$(resource, headers, abortController, $completion) : $super.delete_czyy2p_k$.call(this, resource, headers, abortController, $completion);
  };
  protoOf(HttpFetcher).tryDelete_l20sgr_k$ = function (resource, headers, abortController, $completion) {
    return tryFetch(this.window_1, HttpMethod_DELETE_getInstance(), resource, headers, null, this.logOnError_1, abortController, $completion);
  };
  protoOf(HttpFetcher).tryDelete$default_sz9iqu_k$ = function (resource, headers, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.tryDelete_l20sgr_k$(resource, headers, abortController, $completion) : $super.tryDelete_l20sgr_k$.call(this, resource, headers, abortController, $completion);
  };
  protoOf(HttpFetcher).get_89f2h8_k$ = function (resource, headers, abortController, $completion) {
    return fetch(this.window_1, HttpMethod_GET_getInstance(), resource, headers, null, abortController, $completion);
  };
  protoOf(HttpFetcher).get$default_sm141l_k$ = function (resource, headers, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.get_89f2h8_k$(resource, headers, abortController, $completion) : $super.get_89f2h8_k$.call(this, resource, headers, abortController, $completion);
  };
  protoOf(HttpFetcher).tryGet_34zl6u_k$ = function (resource, headers, abortController, $completion) {
    return tryFetch(this.window_1, HttpMethod_GET_getInstance(), resource, headers, null, this.logOnError_1, abortController, $completion);
  };
  protoOf(HttpFetcher).tryGet$default_75ohzj_k$ = function (resource, headers, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.tryGet_34zl6u_k$(resource, headers, abortController, $completion) : $super.tryGet_34zl6u_k$.call(this, resource, headers, abortController, $completion);
  };
  protoOf(HttpFetcher).head_pjkk9i_k$ = function (resource, headers, abortController, $completion) {
    return fetch(this.window_1, HttpMethod_HEAD_getInstance(), resource, headers, null, abortController, $completion);
  };
  protoOf(HttpFetcher).head$default_ngo9xf_k$ = function (resource, headers, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.head_pjkk9i_k$(resource, headers, abortController, $completion) : $super.head_pjkk9i_k$.call(this, resource, headers, abortController, $completion);
  };
  protoOf(HttpFetcher).tryHead_lpxy06_k$ = function (resource, headers, abortController, $completion) {
    return tryFetch(this.window_1, HttpMethod_HEAD_getInstance(), resource, headers, null, this.logOnError_1, abortController, $completion);
  };
  protoOf(HttpFetcher).tryHead$default_2i2oxb_k$ = function (resource, headers, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.tryHead_lpxy06_k$(resource, headers, abortController, $completion) : $super.tryHead_lpxy06_k$.call(this, resource, headers, abortController, $completion);
  };
  protoOf(HttpFetcher).options_3iya98_k$ = function (resource, headers, abortController, $completion) {
    return fetch(this.window_1, HttpMethod_OPTIONS_getInstance(), resource, headers, null, abortController, $completion);
  };
  protoOf(HttpFetcher).options$default_jv94w1_k$ = function (resource, headers, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.options_3iya98_k$(resource, headers, abortController, $completion) : $super.options_3iya98_k$.call(this, resource, headers, abortController, $completion);
  };
  protoOf(HttpFetcher).tryOptions_obw9j2_k$ = function (resource, headers, abortController, $completion) {
    return tryFetch(this.window_1, HttpMethod_OPTIONS_getInstance(), resource, headers, null, this.logOnError_1, abortController, $completion);
  };
  protoOf(HttpFetcher).tryOptions$default_9iim21_k$ = function (resource, headers, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.tryOptions_obw9j2_k$(resource, headers, abortController, $completion) : $super.tryOptions_obw9j2_k$.call(this, resource, headers, abortController, $completion);
  };
  protoOf(HttpFetcher).patch_cfzfvp_k$ = function (resource, headers, body, abortController, $completion) {
    return fetch(this.window_1, HttpMethod_PATCH_getInstance(), resource, headers, body, abortController, $completion);
  };
  protoOf(HttpFetcher).patch$default_3eerpp_k$ = function (resource, headers, body, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    body = body === VOID ? null : body;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.patch_cfzfvp_k$(resource, headers, body, abortController, $completion) : $super.patch_cfzfvp_k$.call(this, resource, headers, body, abortController, $completion);
  };
  protoOf(HttpFetcher).tryPatch_d2m29j_k$ = function (resource, headers, body, abortController, $completion) {
    return tryFetch(this.window_1, HttpMethod_PATCH_getInstance(), resource, headers, body, this.logOnError_1, abortController, $completion);
  };
  protoOf(HttpFetcher).tryPatch$default_oc15tj_k$ = function (resource, headers, body, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    body = body === VOID ? null : body;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.tryPatch_d2m29j_k$(resource, headers, body, abortController, $completion) : $super.tryPatch_d2m29j_k$.call(this, resource, headers, body, abortController, $completion);
  };
  protoOf(HttpFetcher).post_ghi243_k$ = function (resource, headers, body, abortController, $completion) {
    return fetch(this.window_1, HttpMethod_POST_getInstance(), resource, headers, body, abortController, $completion);
  };
  protoOf(HttpFetcher).post$default_wx6c1h_k$ = function (resource, headers, body, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    body = body === VOID ? null : body;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.post_ghi243_k$(resource, headers, body, abortController, $completion) : $super.post_ghi243_k$.call(this, resource, headers, body, abortController, $completion);
  };
  protoOf(HttpFetcher).tryPost_2me7ol_k$ = function (resource, headers, body, abortController, $completion) {
    return tryFetch(this.window_1, HttpMethod_POST_getInstance(), resource, headers, body, this.logOnError_1, abortController, $completion);
  };
  protoOf(HttpFetcher).tryPost$default_qa8095_k$ = function (resource, headers, body, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    body = body === VOID ? null : body;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.tryPost_2me7ol_k$(resource, headers, body, abortController, $completion) : $super.tryPost_2me7ol_k$.call(this, resource, headers, body, abortController, $completion);
  };
  protoOf(HttpFetcher).put_7rx0te_k$ = function (resource, headers, body, abortController, $completion) {
    return fetch(this.window_1, HttpMethod_PUT_getInstance(), resource, headers, body, abortController, $completion);
  };
  protoOf(HttpFetcher).put$default_49ak7a_k$ = function (resource, headers, body, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    body = body === VOID ? null : body;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.put_7rx0te_k$(resource, headers, body, abortController, $completion) : $super.put_7rx0te_k$.call(this, resource, headers, body, abortController, $completion);
  };
  protoOf(HttpFetcher).tryPut_nzvd26_k$ = function (resource, headers, body, abortController, $completion) {
    return tryFetch(this.window_1, HttpMethod_PUT_getInstance(), resource, headers, body, this.logOnError_1, abortController, $completion);
  };
  protoOf(HttpFetcher).tryPut$default_b1ocz4_k$ = function (resource, headers, body, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    body = body === VOID ? null : body;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.tryPut_nzvd26_k$(resource, headers, body, abortController, $completion) : $super.tryPut_nzvd26_k$.call(this, resource, headers, body, abortController, $completion);
  };
  function _get_controller__bh9bov($this) {
    return $this.controller_1;
  }
  function AbortController_0() {
    this.controller_1 = new AbortController();
    this.signal_1 = this.controller_1.signal;
  }
  protoOf(AbortController_0).get_signal_jhh4tt_k$ = function () {
    return this.signal_1;
  };
  protoOf(AbortController_0).abort_lahfmo_k$ = function () {
    this.controller_1.abort();
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
            this_0.append_22ad7x_k$('-');
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
      this_0.append_t8pm91_k$(cFinal);
      lastIsUpper = isUpper;
    }
    return this_0.toString();
  }
  function wrapQuotesIfNecessary(_this__u8e3s4) {
    var tmp;
    if ((_this__u8e3s4.length >= 2 ? first(_this__u8e3s4) === _Char___init__impl__6a9atx(34) : false) ? last(_this__u8e3s4) === _Char___init__impl__6a9atx(34) : false) {
      tmp = _this__u8e3s4;
    } else {
      tmp = '"' + replace(_this__u8e3s4, '"', '\\"') + '"';
    }
    return tmp;
  }
  function kebabCaseToTitleCamelCase$lambda(it) {
    return capitalize(it);
  }
  function _set_isInterval__bobeco($this, _set____db54di) {
    $this.isInterval_1 = _set____db54di;
  }
  function _get_isInterval__3dx6sk($this) {
    return $this.isInterval_1;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.Stub_1 = new CancellableActionHandle(0);
  }
  protoOf(Companion_2).get_Stub_woa49j_k$ = function () {
    return this.Stub_1;
  };
  var Companion_instance_2;
  function Companion_getInstance_4() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function _set_id__dl8o4k($this, _set____db54di) {
    $this.id_1 = _set____db54di;
  }
  function CancellableActionHandle(id, isInterval) {
    Companion_getInstance_4();
    isInterval = isInterval === VOID ? false : isInterval;
    this.isInterval_1 = isInterval;
    this.id_1 = id;
  }
  protoOf(CancellableActionHandle).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(CancellableActionHandle).cancel_2l89ey_k$ = function () {
    if (this.isInterval_1) {
      self.clearInterval(this.id_1);
    } else {
      self.clearTimeout(this.id_1);
    }
    this.id_1 = 0;
  };
  protoOf(CancellableActionHandle).setTo_3osy9f_k$ = function (other) {
    this.id_1 = other.id_1;
    this.isInterval_1 = other.isInterval_1;
  };
  function setInterval(_this__u8e3s4, delay, block) {
    var id = _this__u8e3s4.setInterval(block, _Duration___get_inWholeMilliseconds__impl__msfiry(delay).toInt_1tsl84_k$());
    return new CancellableActionHandle(id, true);
  }
  function invokeLater(_this__u8e3s4, block) {
    // Inline function 'kotlin.time.Companion.milliseconds' call
    Companion_getInstance_0();
    var tmp$ret$0 = toDuration(0, DurationUnit_MILLISECONDS_getInstance());
    return setTimeout(_this__u8e3s4, tmp$ret$0, block);
  }
  function setTimeout(_this__u8e3s4, timeout, block) {
    var id = _this__u8e3s4.setTimeout(block, _Duration___get_inWholeMilliseconds__impl__msfiry(timeout).toInt_1tsl84_k$());
    return new CancellableActionHandle(id);
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = EventListenerManager;
  _.$_$.b = get_http;
  _.$_$.c = invokeLater;
  _.$_$.d = kebabCaseToCamelCase;
  _.$_$.e = kebabCaseToTitleCamelCase;
  _.$_$.f = setInterval;
  _.$_$.g = titleCamelCaseToKebabCase;
  _.$_$.h = wrapQuotesIfNecessary;
  _.$_$.i = ResizeObserver_init_$Create$;
  _.$_$.j = Companion_getInstance_1;
  _.$_$.k = Companion_getInstance_4;
  //endregion
  return _;
}));
