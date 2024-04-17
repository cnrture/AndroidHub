(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-runtime-runtime.js', './kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'html-internal-html-core-runtime'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'html-internal-html-core-runtime'.");
    }
    if (typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'html-internal-html-core-runtime'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'html-internal-html-core-runtime'.");
    }
    if (typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined') {
      throw new Error("Error loading module 'html-internal-html-core-runtime'. Its dependency 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' was not found. Please, check whether 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' is loaded prior to 'html-internal-html-core-runtime'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'html-internal-html-core-runtime'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'html-internal-html-core-runtime'.");
    }
    root['html-internal-html-core-runtime'] = factory(typeof this['html-internal-html-core-runtime'] === 'undefined' ? {} : this['html-internal-html-core-runtime'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-compose-runtime-runtime'], kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, this['kotlinx-coroutines-core']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.ob;
  var interfaceMeta = kotlin_kotlin.$_$.qa;
  var setMetadataFor = kotlin_kotlin.$_$.pb;
  var THROW_CCE = kotlin_kotlin.$_$.re;
  var Annotation = kotlin_kotlin.$_$.de;
  var classMeta = kotlin_kotlin.$_$.ea;
  var VOID = kotlin_kotlin.$_$.e;
  var ensureNotNull = kotlin_kotlin.$_$.kf;
  var Unit_getInstance = kotlin_kotlin.$_$.l4;
  var AbstractApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var clear = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.b;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var CoroutineImpl = kotlin_kotlin.$_$.q9;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var isInterface = kotlin_kotlin.$_$.za;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.k;
  var objectMeta = kotlin_kotlin.$_$.nb;
  var SuspendFunction1 = kotlin_kotlin.$_$.r9;
  var CoroutineDispatcher = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var get_DefaultMonotonicFrameClock = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f;
  var Recomposer = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var ControlledComposition = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.b9;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  //endregion
  //region block: pre-declaration
  setMetadataFor(DOMScope, 'DOMScope', interfaceMeta);
  setMetadataFor(ComposeWebInternalApi, 'ComposeWebInternalApi', classMeta, VOID, [Annotation]);
  setMetadataFor(DomNodeWrapper, 'DomNodeWrapper', classMeta);
  setMetadataFor(DomApplier, 'DomApplier', classMeta, AbstractApplier);
  setMetadataFor(NamedEventListener, 'NamedEventListener', interfaceMeta);
  setMetadataFor(GlobalSnapshotManager$schedule$slambda, 'GlobalSnapshotManager$schedule$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(GlobalSnapshotManager, 'GlobalSnapshotManager', objectMeta);
  setMetadataFor(JsMicrotasksDispatcher, 'JsMicrotasksDispatcher', classMeta, CoroutineDispatcher, VOID, JsMicrotasksDispatcher);
  setMetadataFor(renderComposable$slambda, 'renderComposable$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(renderComposable$scope$1, VOID, classMeta, VOID, [DOMScope]);
  //endregion
  function DOMScope() {
  }
  function ComposeWebInternalApi() {
  }
  protoOf(ComposeWebInternalApi).equals = function (other) {
    if (!(other instanceof ComposeWebInternalApi))
      return false;
    other instanceof ComposeWebInternalApi || THROW_CCE();
    return true;
  };
  protoOf(ComposeWebInternalApi).hashCode = function () {
    return 0;
  };
  protoOf(ComposeWebInternalApi).toString = function () {
    return '@org.jetbrains.compose.web.internal.runtime.ComposeWebInternalApi()';
  };
  function get_$stableprop() {
    return 0;
  }
  function DomNodeWrapper(node) {
    this.node_1 = node;
    this.$stable_1 = 0;
  }
  protoOf(DomNodeWrapper).get_node_wor8sr_k$ = function () {
    return this.node_1;
  };
  protoOf(DomNodeWrapper).insert_az6e9j_k$ = function (index, nodeWrapper) {
    var length = this.get_node_wor8sr_k$().childNodes.length;
    if (index < length) {
      var tmp = this.get_node_wor8sr_k$();
      var tmp_0 = nodeWrapper.get_node_wor8sr_k$();
      // Inline function 'org.w3c.dom.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = this.get_node_wor8sr_k$().childNodes[index];
      tmp.insertBefore(tmp_0, ensureNotNull(tmp$ret$1));
    } else {
      this.get_node_wor8sr_k$().appendChild(nodeWrapper.get_node_wor8sr_k$());
    }
  };
  protoOf(DomNodeWrapper).remove_ispuic_k$ = function (index, count) {
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < count)
      do {
        var index_0 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.jetbrains.compose.web.internal.runtime.DomNodeWrapper.remove.<anonymous>' call
        var tmp = this.get_node_wor8sr_k$();
        // Inline function 'org.w3c.dom.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = this.get_node_wor8sr_k$().childNodes[index];
        tmp.removeChild(ensureNotNull(tmp$ret$1));
      }
       while (inductionVariable < count);
  };
  protoOf(DomNodeWrapper).move_vgi6vr_k$ = function (from, to, count) {
    if (from === to) {
      return Unit_getInstance();
    }
    var inductionVariable = 0;
    if (inductionVariable < count)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var fromIndex = from > to ? from + i | 0 : from;
        var toIndex = from > to ? to + i | 0 : (to + count | 0) - 2 | 0;
        var tmp = this.get_node_wor8sr_k$();
        // Inline function 'org.w3c.dom.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = this.get_node_wor8sr_k$().childNodes[fromIndex];
        var child = tmp.removeChild(ensureNotNull(tmp$ret$1));
        var tmp_0 = this.get_node_wor8sr_k$();
        // Inline function 'org.w3c.dom.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$3 = this.get_node_wor8sr_k$().childNodes[toIndex];
        tmp_0.insertBefore(child, ensureNotNull(tmp$ret$3));
      }
       while (inductionVariable < count);
  };
  function get_$stableprop_0() {
    return 0;
  }
  function DomApplier(root) {
    AbstractApplier.call(this, root);
    this.$stable_1 = 0;
  }
  protoOf(DomApplier).insertTopDown_9q9hy4_k$ = function (index, instance) {
  };
  protoOf(DomApplier).insertTopDown_7i64np_k$ = function (index, instance) {
    return this.insertTopDown_9q9hy4_k$(index, instance instanceof DomNodeWrapper ? instance : THROW_CCE());
  };
  protoOf(DomApplier).insertBottomUp_ekvw8t_k$ = function (index, instance) {
    this.get_current_jwi6j4_k$().insert_az6e9j_k$(index, instance);
  };
  protoOf(DomApplier).insertBottomUp_31tc4s_k$ = function (index, instance) {
    return this.insertBottomUp_ekvw8t_k$(index, instance instanceof DomNodeWrapper ? instance : THROW_CCE());
  };
  protoOf(DomApplier).remove_ispuic_k$ = function (index, count) {
    this.get_current_jwi6j4_k$().remove_ispuic_k$(index, count);
  };
  protoOf(DomApplier).move_vgi6vr_k$ = function (from, to, count) {
    this.get_current_jwi6j4_k$().move_vgi6vr_k$(from, to, count);
  };
  protoOf(DomApplier).onClear_8zx9zy_k$ = function () {
    clear(this.get_root_wott0r_k$().get_node_wor8sr_k$());
  };
  function NamedEventListener() {
  }
  function _set_started__bivodg($this, _set____db54di) {
    $this.started_1 = _set____db54di;
  }
  function _get_started__e3clzk($this) {
    return $this.started_1;
  }
  function _set_commitPending__h24hyd($this, _set____db54di) {
    $this.commitPending_1 = _set____db54di;
  }
  function _get_commitPending__1uczg1($this) {
    return $this.commitPending_1;
  }
  function _set_removeWriteObserver__20x1n0($this, _set____db54di) {
    $this.removeWriteObserver_1 = _set____db54di;
  }
  function _get_removeWriteObserver__b9t79c($this) {
    return $this.removeWriteObserver_1;
  }
  function _get_scheduleScope__akh4s4($this) {
    return $this.scheduleScope_1;
  }
  function _get_globalWriteObserver__fs5j33($this) {
    return $this.globalWriteObserver_1;
  }
  function _get_scheduledCallbacks__o3ivhy($this) {
    return $this.scheduledCallbacks_1;
  }
  function _set_isSynchronizeScheduled__kzsbyo($this, _set____db54di) {
    $this.isSynchronizeScheduled_1 = _set____db54di;
  }
  function _get_isSynchronizeScheduled__19b4h0($this) {
    return $this.isSynchronizeScheduled_1;
  }
  function synchronize($this) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = $this.scheduledCallbacks_1.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.jetbrains.compose.web.internal.runtime.GlobalSnapshotManager.synchronize.<anonymous>' call
      element();
    }
    $this.scheduledCallbacks_1.clear_j9egeb_k$();
    $this.isSynchronizeScheduled_1 = false;
  }
  function schedule($this, block) {
    $this.scheduledCallbacks_1.add_utx5q5_k$(block);
    if (!$this.isSynchronizeScheduled_1) {
      $this.isSynchronizeScheduled_1 = true;
      launch($this.scheduleScope_1, VOID, VOID, GlobalSnapshotManager$schedule$slambda_0(null));
    }
  }
  function get_$stableprop_1() {
    return 8;
  }
  function GlobalSnapshotManager$globalWriteObserver$lambda(it) {
    if (!GlobalSnapshotManager_getInstance().commitPending_1) {
      GlobalSnapshotManager_getInstance().commitPending_1 = true;
      var tmp = GlobalSnapshotManager_getInstance();
      schedule(tmp, GlobalSnapshotManager$globalWriteObserver$lambda$lambda);
    }
    return Unit_getInstance();
  }
  function GlobalSnapshotManager$globalWriteObserver$lambda$lambda() {
    GlobalSnapshotManager_getInstance().commitPending_1 = false;
    Companion_getInstance().sendApplyNotifications_z1qgb2_k$();
    return Unit_getInstance();
  }
  function GlobalSnapshotManager$schedule$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(GlobalSnapshotManager$schedule$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(GlobalSnapshotManager$schedule$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(GlobalSnapshotManager$schedule$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          synchronize(GlobalSnapshotManager_getInstance());
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(GlobalSnapshotManager$schedule$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new GlobalSnapshotManager$schedule$slambda(completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(GlobalSnapshotManager$schedule$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function GlobalSnapshotManager$schedule$slambda_0(resultContinuation) {
    var i = new GlobalSnapshotManager$schedule$slambda(resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function GlobalSnapshotManager() {
    GlobalSnapshotManager_instance = this;
    this.started_1 = false;
    this.commitPending_1 = false;
    this.removeWriteObserver_1 = null;
    this.scheduleScope_1 = CoroutineScope_0((new JsMicrotasksDispatcher()).plus_s13ygv_k$(SupervisorJob()));
    var tmp = this;
    tmp.globalWriteObserver_1 = GlobalSnapshotManager$globalWriteObserver$lambda;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.scheduledCallbacks_1 = ArrayList_init_$Create$();
    this.isSynchronizeScheduled_1 = false;
    this.$stable_1 = 8;
  }
  protoOf(GlobalSnapshotManager).ensureStarted_v31jmb_k$ = function () {
    if (!this.started_1) {
      this.started_1 = true;
      this.removeWriteObserver_1 = Companion_getInstance().registerGlobalWriteObserver_cr7nn5_k$(this.globalWriteObserver_1);
    }
  };
  var GlobalSnapshotManager_instance;
  function GlobalSnapshotManager_getInstance() {
    if (GlobalSnapshotManager_instance == null)
      new GlobalSnapshotManager();
    return GlobalSnapshotManager_instance;
  }
  function get_$stableprop_2() {
    return 0;
  }
  function JsMicrotasksDispatcher$dispatch$lambda($block) {
    return function (it) {
      $block.run_mvkpxh_k$();
      return Unit_getInstance();
    };
  }
  function JsMicrotasksDispatcher() {
    CoroutineDispatcher.call(this);
    this.$stable_1 = 0;
  }
  protoOf(JsMicrotasksDispatcher).dispatch_qa3n0o_k$ = function (context, block) {
    var tmp = Promise.resolve(Unit_getInstance());
    tmp.then(JsMicrotasksDispatcher$dispatch$lambda(block));
  };
  function renderComposable(rootElementId, content) {
    return renderComposable_0(ensureNotNull(document.getElementById(rootElementId)), VOID, content);
  }
  function renderComposable_0(root, monotonicFrameClock, content) {
    monotonicFrameClock = monotonicFrameClock === VOID ? get_DefaultMonotonicFrameClock() : monotonicFrameClock;
    GlobalSnapshotManager_getInstance().ensureStarted_v31jmb_k$();
    var context = monotonicFrameClock.plus_s13ygv_k$(new JsMicrotasksDispatcher());
    var recomposer = new Recomposer(context);
    var tmp = CoroutineScope_0(context);
    var tmp_0 = CoroutineStart_UNDISPATCHED_getInstance();
    launch(tmp, VOID, tmp_0, renderComposable$slambda_0(recomposer, null));
    var composition = ControlledComposition(new DomApplier(new DomNodeWrapper(root)), recomposer);
    var scope = new renderComposable$scope$1(root);
    composition.setContent_fpn0d7_k$(ComposableLambda$invoke$ref(composableLambdaInstance(-1520853124, true, renderComposable$lambda(content, scope))));
    return composition;
  }
  function renderComposable$slambda($recomposer, resultContinuation) {
    this.$recomposer_1 = $recomposer;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(renderComposable$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(renderComposable$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(renderComposable$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.$recomposer_1.runRecomposeAndApplyChanges_pn3q81_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
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
  protoOf(renderComposable$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new renderComposable$slambda(this.$recomposer_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(renderComposable$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function renderComposable$slambda_0($recomposer, resultContinuation) {
    var i = new renderComposable$slambda($recomposer, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function renderComposable$scope$1($root) {
    this.$root_1 = $root;
  }
  protoOf(renderComposable$scope$1).get_scopeElement_61kop2_k$ = function (_this__u8e3s4) {
    return this.$root_1;
  };
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function renderComposable$lambda($content, $scope) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1520853124, $changed, -1, 'org.jetbrains.compose.web.renderComposable.<anonymous> (renderComposable.kt:60)');
        }
        $content($scope, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = DOMScope;
  _.$_$.b = DomApplier;
  _.$_$.c = DomNodeWrapper;
  _.$_$.d = NamedEventListener;
  _.$_$.e = renderComposable;
  //endregion
  return _;
}));
