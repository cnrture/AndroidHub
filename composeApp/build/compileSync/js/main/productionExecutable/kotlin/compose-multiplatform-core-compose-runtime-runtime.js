(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-collection-collection.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-collection-collection.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-runtime-runtime'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-runtime-runtime'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-runtime-runtime'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-compose-runtime-runtime'.");
    }
    if (typeof this['compose-multiplatform-core-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-runtime-runtime'. Its dependency 'compose-multiplatform-core-collection-collection' was not found. Please, check whether 'compose-multiplatform-core-collection-collection' is loaded prior to 'compose-multiplatform-core-compose-runtime-runtime'.");
    }
    root['compose-multiplatform-core-compose-runtime-runtime'] = factory(typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined' ? {} : this['compose-multiplatform-core-compose-runtime-runtime'], this['kotlin-kotlin-stdlib'], this['kotlinx-coroutines-core'], this['compose-multiplatform-core-collection-collection']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_collection_internal_collection) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.ic;
  var interfaceMeta = kotlin_kotlin.$_$.mb;
  var setMetadataFor = kotlin_kotlin.$_$.jc;
  var Unit_instance = kotlin_kotlin.$_$.k5;
  var toString = kotlin_kotlin.$_$.nc;
  var classMeta = kotlin_kotlin.$_$.xa;
  var VOID = kotlin_kotlin.$_$.g;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.n;
  var THROW_CCE = kotlin_kotlin.$_$.ng;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.a2;
  var Companion_instance = kotlin_kotlin.$_$.f5;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.b3;
  var createFailure = kotlin_kotlin.$_$.eh;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.uh;
  var intercepted = kotlin_kotlin.$_$.x9;
  var get_MODE_CANCELLABLE = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i1;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x;
  var get = kotlin_kotlin.$_$.fa;
  var fold = kotlin_kotlin.$_$.ea;
  var minusKey = kotlin_kotlin.$_$.ga;
  var plus = kotlin_kotlin.$_$.ia;
  var isInterface = kotlin_kotlin.$_$.vb;
  var equals = kotlin_kotlin.$_$.ab;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.z;
  var fill = kotlin_kotlin.$_$.l7;
  var MutableIntIntMap = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.c;
  var rotateLeft = kotlin_kotlin.$_$.qh;
  var hashCode = kotlin_kotlin.$_$.kb;
  var Enum = kotlin_kotlin.$_$.bg;
  var emptyList = kotlin_kotlin.$_$.i7;
  var sortWith = kotlin_kotlin.$_$.e9;
  var rotateRight = kotlin_kotlin.$_$.rh;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.m;
  var to = kotlin_kotlin.$_$.zh;
  var Long = kotlin_kotlin.$_$.gg;
  var objectMeta = kotlin_kotlin.$_$.hc;
  var IllegalStateException = kotlin_kotlin.$_$.fg;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.x1;
  var captureStack = kotlin_kotlin.$_$.ra;
  var defineProp = kotlin_kotlin.$_$.za;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.v1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.q;
  var lazy = kotlin_kotlin.$_$.mh;
  var firstOrNull = kotlin_kotlin.$_$.q7;
  var compareTo = kotlin_kotlin.$_$.ya;
  var KProperty1 = kotlin_kotlin.$_$.kd;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ib;
  var isArray = kotlin_kotlin.$_$.nb;
  var Set = kotlin_kotlin.$_$.f6;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.u;
  var MutableScatterSet = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.g;
  var get_BitmaskMsb = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.a;
  var mutableScatterSetOf = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.i;
  var MutableCollection = kotlin_kotlin.$_$.a6;
  var Map = kotlin_kotlin.$_$.z5;
  var Exception = kotlin_kotlin.$_$.dg;
  var plus_0 = kotlin_kotlin.$_$.s8;
  var copyToArray = kotlin_kotlin.$_$.g7;
  var fillArrayVal = kotlin_kotlin.$_$.cb;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c1;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p1;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t1;
  var toString_0 = kotlin_kotlin.$_$.yh;
  var Element = kotlin_kotlin.$_$.ha;
  var getStringHashCode = kotlin_kotlin.$_$.jb;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var CoroutineImpl = kotlin_kotlin.$_$.ja;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.v9;
  var MutableObjectIntMap = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.e;
  var MutableScatterMap = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.f;
  var Collection = kotlin_kotlin.$_$.s5;
  var addAll = kotlin_kotlin.$_$.g6;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.o;
  var withContext = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.p;
  var toList = kotlin_kotlin.$_$.l9;
  var flatten = kotlin_kotlin.$_$.v7;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.e1;
  var CancellationException = kotlin_kotlin.$_$.u9;
  var addSuppressed = kotlin_kotlin.$_$.ah;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s1;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var returnIfSuspended = kotlin_kotlin.$_$.k;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.x;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var removeFirst = kotlin_kotlin.$_$.y8;
  var arrayCopy = kotlin_kotlin.$_$.h6;
  var fill_0 = kotlin_kotlin.$_$.n7;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.x4;
  var anyToString = kotlin_kotlin.$_$.oa;
  var ConcurrentModificationException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var first = kotlin_kotlin.$_$.s7;
  var last = kotlin_kotlin.$_$.k8;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.s4;
  var copyOf = kotlin_kotlin.$_$.f7;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.i1;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var plus_1 = kotlin_kotlin.$_$.w8;
  var coerceAtMost = kotlin_kotlin.$_$.yc;
  var coerceAtLeast = kotlin_kotlin.$_$.wc;
  var copyOf_0 = kotlin_kotlin.$_$.e7;
  var ensureNotNull = kotlin_kotlin.$_$.fh;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.h2;
  var Entry = kotlin_kotlin.$_$.y5;
  var SequenceScope = kotlin_kotlin.$_$.md;
  var until = kotlin_kotlin.$_$.gd;
  var sequence = kotlin_kotlin.$_$.sd;
  var joinToString = kotlin_kotlin.$_$.d8;
  var MutableList = kotlin_kotlin.$_$.b6;
  var checkIndexOverflow = kotlin_kotlin.$_$.q6;
  var sortWith_0 = kotlin_kotlin.$_$.f9;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.e2;
  var mutableScatterMapOf = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.h;
  var AbstractMap = kotlin_kotlin.$_$.m5;
  var AbstractMutableMap = kotlin_kotlin.$_$.o5;
  var MutableMap = kotlin_kotlin.$_$.d6;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.y1;
  var MutableEntry = kotlin_kotlin.$_$.c6;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.p2;
  var AbstractMutableSet = kotlin_kotlin.$_$.p5;
  var MutableSet = kotlin_kotlin.$_$.e6;
  var AbstractMutableCollection = kotlin_kotlin.$_$.n5;
  var NoSuchElementException_init_$Create$_0 = kotlin_kotlin.$_$.f2;
  var AbstractSet = kotlin_kotlin.$_$.q5;
  var AbstractCollection = kotlin_kotlin.$_$.l5;
  var objectCreate = kotlin_kotlin.$_$.gc;
  var step = kotlin_kotlin.$_$.fd;
  var countOneBits = kotlin_kotlin.$_$.ch;
  var takeLowestOneBit = kotlin_kotlin.$_$.sh;
  var ConcurrentModificationException_init_$Create$_0 = kotlin_kotlin.$_$.k1;
  var toString_1 = kotlin_kotlin.$_$.jf;
  var longArray = kotlin_kotlin.$_$.bc;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.t;
  var Char = kotlin_kotlin.$_$.wf;
  var isCharSequence = kotlin_kotlin.$_$.rb;
  var minus = kotlin_kotlin.$_$.q8;
  var contains = kotlin_kotlin.$_$.s6;
  var plus_2 = kotlin_kotlin.$_$.v8;
  var primitiveArrayConcat = kotlin_kotlin.$_$.f;
  var singleOrNull = kotlin_kotlin.$_$.d9;
  var intArrayIterator = kotlin_kotlin.$_$.lb;
  var Companion_getInstance = kotlin_kotlin.$_$.e5;
  var toIntArray = kotlin_kotlin.$_$.j9;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.r6;
  var listOf = kotlin_kotlin.$_$.m8;
  var List = kotlin_kotlin.$_$.x5;
  var listOf_0 = kotlin_kotlin.$_$.n8;
  var println = kotlin_kotlin.$_$.na;
  var printStackTrace = kotlin_kotlin.$_$.ph;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.h;
  var toDuration = kotlin_kotlin.$_$.tf;
  var _Duration___get_inWholeNanoseconds__impl__r5x4mr = kotlin_kotlin.$_$.r2;
  var SafeContinuation_init_$Create$ = kotlin_kotlin.$_$.f1;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.b1;
  //endregion
  //region block: pre-declaration
  function onBeginChanges() {
  }
  function onEndChanges() {
  }
  setMetadataFor(Applier, 'Applier', interfaceMeta);
  setMetadataFor(OffsetApplier, 'OffsetApplier', classMeta, VOID, [Applier]);
  setMetadataFor(AbstractApplier, 'AbstractApplier', classMeta, VOID, [Applier]);
  setMetadataFor(FrameAwaiter, 'FrameAwaiter', classMeta);
  function get_key() {
    return Key_instance_0;
  }
  setMetadataFor(MonotonicFrameClock, 'MonotonicFrameClock', interfaceMeta, VOID, [Element], VOID, VOID, VOID, [1]);
  setMetadataFor(BroadcastFrameClock, 'BroadcastFrameClock', classMeta, VOID, [MonotonicFrameClock], BroadcastFrameClock, VOID, VOID, [1]);
  setMetadataFor(ComposeNodeLifecycleCallback, 'ComposeNodeLifecycleCallback', interfaceMeta);
  setMetadataFor(Invalidation, 'Invalidation', classMeta);
  setMetadataFor(RememberObserver, 'RememberObserver', interfaceMeta);
  setMetadataFor(ReusableRememberObserver, 'ReusableRememberObserver', interfaceMeta, VOID, [RememberObserver]);
  setMetadataFor(CompositionContextHolder, 'CompositionContextHolder', classMeta, VOID, [ReusableRememberObserver]);
  setMetadataFor(ComposerImpl$derivedStateObserver$1, VOID, classMeta);
  function changed(value) {
    return this.a1t(value);
  }
  function changed_0(value) {
    return this.c1t(value);
  }
  function changed_1(value) {
    return this.b1t(value);
  }
  function changedInstance(value) {
    return this.s1j(value);
  }
  setMetadataFor(Composer, 'Composer', interfaceMeta);
  setMetadataFor(ComposerImpl, 'ComposerImpl', classMeta, VOID, [Composer]);
  setMetadataFor(Composer$Companion$Empty$1, VOID, classMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(InvalidationResult, 'InvalidationResult', classMeta, Enum);
  setMetadataFor(MovableContentStateReference, 'MovableContentStateReference', classMeta);
  setMetadataFor(MovableContentState, 'MovableContentState', classMeta);
  setMetadataFor(MovableContent, 'MovableContent', classMeta);
  setMetadataFor(ComposeRuntimeError, 'ComposeRuntimeError', classMeta, IllegalStateException);
  setMetadataFor(RememberObserverHolder, 'RememberObserverHolder', classMeta);
  setMetadataFor(Pending, 'Pending', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(ProvidedValue, 'ProvidedValue', classMeta);
  setMetadataFor(GroupInfo, 'GroupInfo', classMeta);
  setMetadataFor(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', classMeta);
  setMetadataFor(RememberEventDispatcher, 'RememberEventDispatcher', classMeta);
  setMetadataFor(RecomposeScopeOwner, 'RecomposeScopeOwner', interfaceMeta);
  setMetadataFor(CompositionImpl, 'CompositionImpl', classMeta, VOID, [RecomposeScopeOwner]);
  setMetadataFor(CompositionObserverHolder, 'CompositionObserverHolder', classMeta, VOID, VOID, CompositionObserverHolder);
  setMetadataFor(ComposableSingletons$CompositionKt, 'ComposableSingletons$CompositionKt', objectMeta);
  setMetadataFor(CompositionImplServiceKey$1, VOID, classMeta);
  setMetadataFor(CompositionContext, 'CompositionContext', classMeta);
  setMetadataFor(CompositionLocal, 'CompositionLocal', classMeta);
  setMetadataFor(ProvidableCompositionLocal, 'ProvidableCompositionLocal', classMeta, CompositionLocal);
  setMetadataFor(StaticProvidableCompositionLocal, 'StaticProvidableCompositionLocal', classMeta, ProvidableCompositionLocal);
  setMetadataFor(DynamicProvidableCompositionLocal, 'DynamicProvidableCompositionLocal', classMeta, ProvidableCompositionLocal);
  setMetadataFor(PersistentCompositionLocalMap, 'PersistentCompositionLocalMap', interfaceMeta, VOID, [Map]);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(State_0, 'State', interfaceMeta);
  setMetadataFor(DerivedState, 'DerivedState', interfaceMeta, VOID, [State_0]);
  setMetadataFor(DisposableEffectScope, 'DisposableEffectScope', classMeta, VOID, VOID, DisposableEffectScope);
  setMetadataFor(LaunchedEffectImpl, 'LaunchedEffectImpl', classMeta, VOID, [RememberObserver]);
  setMetadataFor(PlatformOptimizedCancellationException, 'PlatformOptimizedCancellationException', classMeta, CancellationException);
  setMetadataFor(LeftCompositionCancellationException, 'LeftCompositionCancellationException', classMeta, PlatformOptimizedCancellationException, VOID, LeftCompositionCancellationException);
  setMetadataFor(JoinedKey, 'JoinedKey', classMeta);
  setMetadataFor(Key, 'Key', objectMeta);
  setMetadataFor(OpaqueKey, 'OpaqueKey', classMeta);
  setMetadataFor(MutableState, 'MutableState', interfaceMeta, VOID, [State_0]);
  setMetadataFor(ProduceStateScope, 'ProduceStateScope', interfaceMeta, VOID, [MutableState, CoroutineScope_0], VOID, VOID, VOID, [1]);
  setMetadataFor(ProduceStateScopeImpl, 'ProduceStateScopeImpl', classMeta, VOID, [ProduceStateScope, MutableState], VOID, VOID, VOID, [1]);
  setMetadataFor(produceState$slambda, 'produceState$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(RecomposeScopeImpl, 'RecomposeScopeImpl', classMeta);
  setMetadataFor(Recomposer$recompositionRunner$slambda$slambda, 'Recomposer$recompositionRunner$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(State, 'State', classMeta, Enum);
  setMetadataFor(RecomposerInfoImpl, 'RecomposerInfoImpl', classMeta);
  setMetadataFor(RecomposerErrorState, 'RecomposerErrorState', classMeta);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(Recomposer$runRecomposeAndApplyChanges$slambda, 'Recomposer$runRecomposeAndApplyChanges$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(Recomposer$recompositionRunner$slambda, 'Recomposer$recompositionRunner$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($awaitWorkAvailableCOROUTINE$2, '$awaitWorkAvailableCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor(Recomposer, 'Recomposer', classMeta, CompositionContext, VOID, VOID, VOID, VOID, [0, 1, 2]);
  setMetadataFor(SlotTable, 'SlotTable', classMeta, VOID, VOID, SlotTable);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(SlotWriter$groupSlots$1, VOID, classMeta);
  setMetadataFor(SlotWriter, 'SlotWriter', classMeta);
  setMetadataFor(Anchor, 'Anchor', classMeta);
  setMetadataFor(GroupSourceInformation, 'GroupSourceInformation', classMeta);
  setMetadataFor(SlotReader, 'SlotReader', classMeta);
  setMetadataFor(GroupIterator, 'GroupIterator', classMeta);
  setMetadataFor(SlotTableGroup, 'SlotTableGroup', classMeta);
  setMetadataFor(PrioritySet, 'PrioritySet', classMeta, VOID, VOID, PrioritySet);
  setMetadataFor(KeyInfo, 'KeyInfo', classMeta);
  setMetadataFor(SourceInformationGroupIterator, 'SourceInformationGroupIterator', classMeta);
  setMetadataFor(SourceInformationSlotTableGroup, 'SourceInformationSlotTableGroup', classMeta);
  setMetadataFor(collectAsState$slambda$slambda$slambda, 'collectAsState$slambda$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(collectAsState$slambda$slambda, 'collectAsState$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(collectAsState$slambda$slambda_1, 'collectAsState$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(collectAsState$slambda, 'collectAsState$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  function merge(previous, current, applied) {
    return null;
  }
  setMetadataFor(SnapshotMutationPolicy, 'SnapshotMutationPolicy', interfaceMeta);
  setMetadataFor(StructuralEqualityPolicy, 'StructuralEqualityPolicy', objectMeta, VOID, [SnapshotMutationPolicy]);
  setMetadataFor(ReferentialEqualityPolicy, 'ReferentialEqualityPolicy', objectMeta, VOID, [SnapshotMutationPolicy]);
  setMetadataFor(NeverEqualPolicy, 'NeverEqualPolicy', objectMeta, VOID, [SnapshotMutationPolicy]);
  setMetadataFor(StateRecord, 'StateRecord', classMeta);
  setMetadataFor(StateStateRecord, 'StateStateRecord', classMeta, StateRecord);
  function mergeRecords(previous, current, applied) {
    return null;
  }
  setMetadataFor(StateObject, 'StateObject', interfaceMeta);
  setMetadataFor(StateObjectImpl, 'StateObjectImpl', classMeta, VOID, [StateObject]);
  setMetadataFor(SnapshotMutableState, 'SnapshotMutableState', interfaceMeta, VOID, [MutableState]);
  setMetadataFor(SnapshotMutableStateImpl, 'SnapshotMutableStateImpl', classMeta, StateObjectImpl, [StateObjectImpl, SnapshotMutableState]);
  setMetadataFor(SnapshotThreadLocal, 'SnapshotThreadLocal', classMeta, VOID, VOID, SnapshotThreadLocal);
  setMetadataFor(IntStack, 'IntStack', classMeta, VOID, VOID, IntStack);
  setMetadataFor(Stack, 'Stack', classMeta, VOID, VOID, Stack);
  setMetadataFor(SynchronizedObject, 'SynchronizedObject', classMeta, VOID, VOID, SynchronizedObject);
  setMetadataFor(LazyValueHolder, 'LazyValueHolder', classMeta, VOID, [State_0]);
  setMetadataFor(StaticValueHolder, 'StaticValueHolder', classMeta, VOID, [State_0]);
  setMetadataFor(ChangeList, 'ChangeList', classMeta, VOID, VOID, ChangeList);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(ComposerChangeListWriter, 'ComposerChangeListWriter', classMeta);
  setMetadataFor(FixupList, 'FixupList', classMeta, VOID, VOID, FixupList);
  setMetadataFor(Operation, 'Operation', classMeta);
  setMetadataFor(Ups, 'Ups', objectMeta, Operation);
  setMetadataFor(Downs, 'Downs', objectMeta, Operation);
  setMetadataFor(AdvanceSlotsBy, 'AdvanceSlotsBy', objectMeta, Operation);
  setMetadataFor(SideEffect_0, 'SideEffect', objectMeta, Operation);
  setMetadataFor(Remember, 'Remember', objectMeta, Operation);
  setMetadataFor(UpdateValue, 'UpdateValue', objectMeta, Operation);
  setMetadataFor(UpdateAuxData, 'UpdateAuxData', objectMeta, Operation);
  setMetadataFor(EnsureRootGroupStarted, 'EnsureRootGroupStarted', objectMeta, Operation);
  setMetadataFor(EnsureGroupStarted, 'EnsureGroupStarted', objectMeta, Operation);
  setMetadataFor(RemoveCurrentGroup, 'RemoveCurrentGroup', objectMeta, Operation);
  setMetadataFor(MoveCurrentGroup, 'MoveCurrentGroup', objectMeta, Operation);
  setMetadataFor(EndCurrentGroup, 'EndCurrentGroup', objectMeta, Operation);
  setMetadataFor(SkipToEndOfCurrentGroup, 'SkipToEndOfCurrentGroup', objectMeta, Operation);
  setMetadataFor(EndCompositionScope, 'EndCompositionScope', objectMeta, Operation);
  setMetadataFor(UseCurrentNode, 'UseCurrentNode', objectMeta, Operation);
  setMetadataFor(UpdateNode, 'UpdateNode', objectMeta, Operation);
  setMetadataFor(RemoveNode, 'RemoveNode', objectMeta, Operation);
  setMetadataFor(MoveNode, 'MoveNode', objectMeta, Operation);
  setMetadataFor(InsertSlots, 'InsertSlots', objectMeta, Operation);
  setMetadataFor(InsertSlotsWithFixups, 'InsertSlotsWithFixups', objectMeta, Operation);
  setMetadataFor(InsertNodeFixup, 'InsertNodeFixup', objectMeta, Operation);
  setMetadataFor(PostInsertNodeFixup, 'PostInsertNodeFixup', objectMeta, Operation);
  setMetadataFor(ResetSlots, 'ResetSlots', objectMeta, Operation);
  setMetadataFor(DetermineMovableContentNodeIndex, 'DetermineMovableContentNodeIndex', objectMeta, Operation);
  setMetadataFor(CopyNodesToNewAnchorLocation, 'CopyNodesToNewAnchorLocation', objectMeta, Operation);
  setMetadataFor(CopySlotTableToAnchorLocation, 'CopySlotTableToAnchorLocation', objectMeta, Operation);
  setMetadataFor(EndMovableContentPlacement, 'EndMovableContentPlacement', objectMeta, Operation);
  setMetadataFor(ReleaseMovableGroupAtCurrent, 'ReleaseMovableGroupAtCurrent', objectMeta, Operation);
  setMetadataFor(ApplyChangeList, 'ApplyChangeList', objectMeta, Operation);
  setMetadataFor(releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1, VOID, classMeta, VOID, [RecomposeScopeOwner]);
  setMetadataFor(OpIterator, 'OpIterator', classMeta);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(Operations, 'Operations', classMeta, VOID, VOID, Operations);
  setMetadataFor(IdentityArrayMap$asMap$1$entries$1$iterator$1$1, VOID, classMeta, VOID, [Entry]);
  setMetadataFor(IdentityArrayMap$asMap$o$_get_entries_$o$iterator$slambda_r160he, 'IdentityArrayMap$asMap$o$<get-entries>$o$iterator$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(IdentityArrayMap$asMap$o$_get_keys_$o$iterator$slambda_qj88bw, 'IdentityArrayMap$asMap$o$<get-keys>$o$iterator$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(IdentityArrayMap$asMap$o$_get_values_$o$iterator$slambda_qilghu, 'IdentityArrayMap$asMap$o$<get-values>$o$iterator$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(IdentityArrayMap$asMap$1$entries$1, VOID, classMeta, VOID, [Set]);
  setMetadataFor(IdentityArrayMap$asMap$1$keys$1, VOID, classMeta, VOID, [Set]);
  setMetadataFor(IdentityArrayMap$asMap$1$values$1, VOID, classMeta, VOID, [Collection]);
  setMetadataFor(IdentityArrayMap$asMap$1, VOID, classMeta, VOID, [Map]);
  setMetadataFor(IdentityArrayMap, 'IdentityArrayMap', classMeta, VOID, VOID, IdentityArrayMap);
  setMetadataFor(IdentityArraySet$iterator$1, VOID, classMeta);
  setMetadataFor(IdentityArraySet, 'IdentityArraySet', classMeta, VOID, [Set], IdentityArraySet);
  setMetadataFor(VectorListIterator, 'VectorListIterator', classMeta);
  setMetadataFor(MutableVectorList, 'MutableVectorList', classMeta, VOID, [MutableList]);
  setMetadataFor(SubList, 'SubList', classMeta, VOID, [MutableList]);
  setMetadataFor(MutableVector, 'MutableVector', classMeta);
  setMetadataFor(ScopeMap, 'ScopeMap', classMeta, VOID, VOID, ScopeMap);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(PersistentHashMap, 'PersistentHashMap', classMeta, AbstractMap, [AbstractMap, Map]);
  setMetadataFor(PersistentHashMapBuilder, 'PersistentHashMapBuilder', classMeta, AbstractMutableMap, [MutableMap, AbstractMutableMap]);
  setMetadataFor(PersistentHashMapBuilderEntriesIterator, 'PersistentHashMapBuilderEntriesIterator', classMeta);
  setMetadataFor(PersistentHashMapBaseIterator, 'PersistentHashMapBaseIterator', classMeta);
  setMetadataFor(PersistentHashMapBuilderBaseIterator, 'PersistentHashMapBuilderBaseIterator', classMeta, PersistentHashMapBaseIterator);
  setMetadataFor(PersistentHashMapBuilderKeysIterator, 'PersistentHashMapBuilderKeysIterator', classMeta, PersistentHashMapBuilderBaseIterator);
  setMetadataFor(PersistentHashMapBuilderValuesIterator, 'PersistentHashMapBuilderValuesIterator', classMeta, PersistentHashMapBuilderBaseIterator);
  setMetadataFor(TrieNodeBaseIterator, 'TrieNodeBaseIterator', classMeta);
  setMetadataFor(TrieNodeMutableEntriesIterator, 'TrieNodeMutableEntriesIterator', classMeta, TrieNodeBaseIterator);
  setMetadataFor(MapEntry, 'MapEntry', classMeta, VOID, [Entry]);
  setMetadataFor(MutableMapEntry, 'MutableMapEntry', classMeta, MapEntry, [MapEntry, MutableEntry]);
  setMetadataFor(AbstractMapBuilderEntries, 'AbstractMapBuilderEntries', classMeta, AbstractMutableSet);
  setMetadataFor(PersistentHashMapBuilderEntries, 'PersistentHashMapBuilderEntries', classMeta, AbstractMapBuilderEntries);
  setMetadataFor(PersistentHashMapBuilderKeys, 'PersistentHashMapBuilderKeys', classMeta, AbstractMutableSet, [MutableSet, AbstractMutableSet]);
  setMetadataFor(PersistentHashMapBuilderValues, 'PersistentHashMapBuilderValues', classMeta, AbstractMutableCollection, [MutableCollection, AbstractMutableCollection]);
  setMetadataFor(PersistentHashMapKeysIterator, 'PersistentHashMapKeysIterator', classMeta, PersistentHashMapBaseIterator);
  setMetadataFor(PersistentHashMapValuesIterator, 'PersistentHashMapValuesIterator', classMeta, PersistentHashMapBaseIterator);
  setMetadataFor(PersistentHashMapEntriesIterator, 'PersistentHashMapEntriesIterator', classMeta, PersistentHashMapBaseIterator);
  setMetadataFor(TrieNodeKeysIterator, 'TrieNodeKeysIterator', classMeta, TrieNodeBaseIterator, VOID, TrieNodeKeysIterator);
  setMetadataFor(TrieNodeValuesIterator, 'TrieNodeValuesIterator', classMeta, TrieNodeBaseIterator, VOID, TrieNodeValuesIterator);
  setMetadataFor(TrieNodeEntriesIterator, 'TrieNodeEntriesIterator', classMeta, TrieNodeBaseIterator, VOID, TrieNodeEntriesIterator);
  setMetadataFor(PersistentHashMapKeys, 'PersistentHashMapKeys', classMeta, AbstractSet, [Collection, Set, AbstractSet]);
  setMetadataFor(PersistentHashMapValues, 'PersistentHashMapValues', classMeta, AbstractCollection, [Collection, AbstractCollection]);
  setMetadataFor(PersistentHashMapEntries, 'PersistentHashMapEntries', classMeta, AbstractSet, [Collection, Set, AbstractSet]);
  setMetadataFor(ModificationResult, 'ModificationResult', classMeta);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(TrieNode, 'TrieNode', classMeta);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(PersistentOrderedSet, 'PersistentOrderedSet', classMeta, AbstractSet, [AbstractSet, Collection, Set]);
  setMetadataFor(Links, 'Links', classMeta, VOID, VOID, Links_init_$Create$);
  setMetadataFor(PersistentOrderedSetIterator, 'PersistentOrderedSetIterator', classMeta);
  setMetadataFor(EndOfChain, 'EndOfChain', objectMeta);
  setMetadataFor(MutabilityOwnership, 'MutabilityOwnership', classMeta, VOID, VOID, MutabilityOwnership);
  setMetadataFor(DeltaCounter, 'DeltaCounter', classMeta, VOID, VOID, DeltaCounter);
  setMetadataFor(IntRef, 'IntRef', classMeta, VOID, VOID, IntRef);
  setMetadataFor(Builder, 'Builder', classMeta, PersistentHashMapBuilder, [PersistentHashMapBuilder, MutableMap]);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor(PersistentCompositionLocalHashMap, 'PersistentCompositionLocalHashMap', classMeta, PersistentHashMap, [PersistentHashMap, PersistentCompositionLocalMap]);
  setMetadataFor(ThreadMap, 'ThreadMap', classMeta);
  setMetadataFor(sam$androidx_compose_runtime_snapshots_ObserverHandle$0, 'sam$androidx_compose_runtime_snapshots_ObserverHandle$0', classMeta);
  setMetadataFor(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0, 'sam$androidx_compose_runtime_snapshots_ObserverHandle$0', classMeta);
  setMetadataFor(Companion_11, 'Companion', objectMeta);
  setMetadataFor(Snapshot, 'Snapshot', classMeta);
  setMetadataFor(Companion_12, 'Companion', objectMeta);
  setMetadataFor(MutableSnapshot, 'MutableSnapshot', classMeta, Snapshot);
  setMetadataFor(SnapshotApplyResult, 'SnapshotApplyResult', classMeta);
  setMetadataFor(Success, 'Success', objectMeta, SnapshotApplyResult);
  setMetadataFor(Failure, 'Failure', classMeta, SnapshotApplyResult);
  setMetadataFor(GlobalSnapshot, 'GlobalSnapshot', classMeta, MutableSnapshot);
  setMetadataFor(TransparentObserverMutableSnapshot, 'TransparentObserverMutableSnapshot', classMeta, MutableSnapshot);
  setMetadataFor(NestedMutableSnapshot, 'NestedMutableSnapshot', classMeta, MutableSnapshot);
  setMetadataFor(NestedReadonlySnapshot, 'NestedReadonlySnapshot', classMeta, Snapshot);
  setMetadataFor(ReadonlySnapshot, 'ReadonlySnapshot', classMeta, Snapshot);
  setMetadataFor(TransparentObserverSnapshot, 'TransparentObserverSnapshot', classMeta, Snapshot);
  setMetadataFor(SnapshotDoubleIndexHeap, 'SnapshotDoubleIndexHeap', classMeta, VOID, VOID, SnapshotDoubleIndexHeap);
  setMetadataFor(Companion_13, 'Companion', objectMeta);
  setMetadataFor(SnapshotIdSet$iterator$slambda, 'SnapshotIdSet$iterator$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(SnapshotIdSet, 'SnapshotIdSet', classMeta);
  setMetadataFor(StateMapStateRecord, 'StateMapStateRecord', classMeta, StateRecord);
  setMetadataFor(SnapshotStateMap, 'SnapshotStateMap', classMeta, VOID, [StateObject, MutableMap], SnapshotStateMap);
  setMetadataFor(SnapshotMapSet, 'SnapshotMapSet', classMeta, VOID, [MutableSet]);
  setMetadataFor(SnapshotMapEntrySet, 'SnapshotMapEntrySet', classMeta, SnapshotMapSet);
  setMetadataFor(SnapshotMapKeySet, 'SnapshotMapKeySet', classMeta, SnapshotMapSet);
  setMetadataFor(SnapshotMapValueSet, 'SnapshotMapValueSet', classMeta, SnapshotMapSet);
  setMetadataFor(StateMapMutableEntriesIterator$next$1, VOID, classMeta, VOID, [MutableEntry]);
  setMetadataFor(StateMapMutableIterator, 'StateMapMutableIterator', classMeta);
  setMetadataFor(StateMapMutableEntriesIterator, 'StateMapMutableEntriesIterator', classMeta, StateMapMutableIterator);
  setMetadataFor(StateMapMutableKeysIterator, 'StateMapMutableKeysIterator', classMeta, StateMapMutableIterator);
  setMetadataFor(StateMapMutableValuesIterator, 'StateMapMutableValuesIterator', classMeta, StateMapMutableIterator);
  setMetadataFor(SnapshotStateObserver$ObservedScopeMap$derivedStateObserver$1, VOID, classMeta);
  setMetadataFor(ObservedScopeMap, 'ObservedScopeMap', classMeta);
  setMetadataFor(SnapshotStateObserver, 'SnapshotStateObserver', classMeta);
  setMetadataFor(SnapshotWeakSet, 'SnapshotWeakSet', classMeta, VOID, VOID, SnapshotWeakSet);
  setMetadataFor(Companion_14, 'Companion', objectMeta);
  setMetadataFor(AtomicReference, 'AtomicReference', classMeta);
  setMetadataFor(AtomicInt, 'AtomicInt', classMeta);
  setMetadataFor(ComposableLambdaImpl, 'ComposableLambdaImpl', classMeta);
  setMetadataFor($withFrameNanosCOROUTINE$5, '$withFrameNanosCOROUTINE$5', classMeta, CoroutineImpl);
  setMetadataFor(MonotonicClockImpl, 'MonotonicClockImpl', classMeta, VOID, [MonotonicFrameClock], MonotonicClockImpl, VOID, VOID, [1]);
  setMetadataFor(Trace, 'Trace', objectMeta);
  setMetadataFor(IntMap, 'IntMap', classMeta, VOID, VOID, IntMap);
  setMetadataFor(WeakReference, 'WeakReference', classMeta);
  //endregion
  function Applier() {
  }
  function OffsetApplier(applier, offset) {
    this.w1f_1 = applier;
    this.x1f_1 = offset;
    this.y1f_1 = 0;
  }
  protoOf(OffsetApplier).n1f = function () {
    return this.w1f_1.n1f();
  };
  protoOf(OffsetApplier).q1f = function (node) {
    this.y1f_1 = this.y1f_1 + 1 | 0;
    this.w1f_1.q1f(node);
  };
  protoOf(OffsetApplier).r1f = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.y1f_1 > 0)) {
      // Inline function 'androidx.compose.runtime.OffsetApplier.up.<anonymous>' call
      var message = 'OffsetApplier up called with no corresponding down';
      composeRuntimeError(toString(message));
    }
    this.y1f_1 = this.y1f_1 - 1 | 0;
    this.w1f_1.r1f();
  };
  protoOf(OffsetApplier).s1f = function (index, instance) {
    this.w1f_1.s1f(index + (this.y1f_1 === 0 ? this.x1f_1 : 0) | 0, instance);
  };
  protoOf(OffsetApplier).t1f = function (index, instance) {
    this.w1f_1.t1f(index + (this.y1f_1 === 0 ? this.x1f_1 : 0) | 0, instance);
  };
  protoOf(OffsetApplier).u1f = function (index, count) {
    this.w1f_1.u1f(index + (this.y1f_1 === 0 ? this.x1f_1 : 0) | 0, count);
  };
  protoOf(OffsetApplier).v1f = function (from, to, count) {
    var effectiveOffset = this.y1f_1 === 0 ? this.x1f_1 : 0;
    this.w1f_1.v1f(from + effectiveOffset | 0, to + effectiveOffset | 0, count);
  };
  protoOf(OffsetApplier).h1 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!false) {
      // Inline function 'androidx.compose.runtime.OffsetApplier.clear.<anonymous>' call
      var message = 'Clear is not valid on OffsetApplier';
      composeRuntimeError(toString(message));
    }
  };
  function AbstractApplier(root) {
    this.z1f_1 = root;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.a1g_1 = ArrayList_init_$Create$();
    this.b1g_1 = this.z1f_1;
  }
  protoOf(AbstractApplier).c1g = function (_set____db54di) {
    this.b1g_1 = _set____db54di;
  };
  protoOf(AbstractApplier).n1f = function () {
    return this.b1g_1;
  };
  protoOf(AbstractApplier).d1g = function (node) {
    this.a1g_1.a1(this.n1f());
    this.c1g(node);
  };
  protoOf(AbstractApplier).q1f = function (node) {
    return this.d1g((node == null ? true : !(node == null)) ? node : THROW_CCE());
  };
  protoOf(AbstractApplier).r1f = function () {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.a1g_1.u()) {
      // Inline function 'androidx.compose.runtime.AbstractApplier.up.<anonymous>' call
      var message = 'empty stack';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.c1g(this.a1g_1.m1(this.a1g_1.m() - 1 | 0));
  };
  protoOf(AbstractApplier).h1 = function () {
    this.a1g_1.h1();
    this.c1g(this.z1f_1);
    this.e1g();
  };
  function FrameAwaiter(onFrame, continuation) {
    this.f1g_1 = onFrame;
    this.g1g_1 = continuation;
  }
  protoOf(FrameAwaiter).h1g = function (timeNanos) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      // Inline function 'androidx.compose.runtime.FrameAwaiter.resume.<anonymous>' call
      var value = this.f1g_1(timeNanos);
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
    var tmp$ret$3 = tmp;
    this.g1g_1.t6(tmp$ret$3);
  };
  function fail($this, cause) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.j1g_1;
    if (!($this.k1g_1 == null))
      return Unit_instance;
    $this.k1g_1 = cause;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    var this_0 = $this.l1g_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.m() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.n(index);
        // Inline function 'androidx.compose.runtime.BroadcastFrameClock.fail.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.coroutines.resumeWithException' call
        var this_1 = item.g1g_1;
        // Inline function 'kotlin.Companion.failure' call
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
        this_1.t6(tmp$ret$0);
      }
       while (inductionVariable <= last);
    $this.l1g_1.h1();
  }
  function BroadcastFrameClock$withFrameNanos$lambda(this$0, $awaiter) {
    return function (it) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this$0.j1g_1;
      var tmp = this$0.l1g_1;
      var tmp_0;
      if ($awaiter._v == null) {
        throwUninitializedPropertyAccessException('awaiter');
      } else {
        tmp_0 = $awaiter._v;
      }
      tmp.b1(tmp_0);
      return Unit_instance;
    };
  }
  function BroadcastFrameClock(onNewAwaiters) {
    onNewAwaiters = onNewAwaiters === VOID ? null : onNewAwaiters;
    this.i1g_1 = onNewAwaiters;
    this.j1g_1 = createSynchronizedObject();
    this.k1g_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.l1g_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.m1g_1 = ArrayList_init_$Create$();
  }
  protoOf(BroadcastFrameClock).n1g = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.j1g_1;
    // Inline function 'androidx.compose.runtime.BroadcastFrameClock.<get-hasAwaiters>.<anonymous>' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    return !this.l1g_1.u();
  };
  protoOf(BroadcastFrameClock).o1g = function (timeNanos) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.j1g_1;
    var toResume = this.l1g_1;
    this.l1g_1 = this.m1g_1;
    this.m1g_1 = toResume;
    var inductionVariable = 0;
    var last = toResume.m();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        toResume.n(i).h1g(timeNanos);
      }
       while (inductionVariable < last);
    toResume.h1();
  };
  protoOf(BroadcastFrameClock).p1g = function (onFrame, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), get_MODE_CANCELLABLE());
    cancellable.zt();
    $l$block: {
      // Inline function 'androidx.compose.runtime.BroadcastFrameClock.withFrameNanos.<anonymous>' call
      var awaiter = {_v: null};
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this.j1g_1;
      // Inline function 'androidx.compose.runtime.BroadcastFrameClock.withFrameNanos.<anonymous>.<anonymous>' call
      var cause = this.k1g_1;
      if (!(cause == null)) {
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
        cancellable.t6(tmp$ret$0);
        break $l$block;
      }
      awaiter._v = new FrameAwaiter(onFrame, cancellable);
      // Inline function 'kotlin.collections.isNotEmpty' call
      var hadAwaiters = !this.l1g_1.u();
      var tmp = this.l1g_1;
      var tmp_0;
      if (awaiter._v == null) {
        throwUninitializedPropertyAccessException('awaiter');
      } else {
        tmp_0 = awaiter._v;
      }
      tmp.a1(tmp_0);
      var hasNewAwaiters = !hadAwaiters;
      cancellable.gs(BroadcastFrameClock$withFrameNanos$lambda(this, awaiter));
      if (hasNewAwaiters ? !(this.i1g_1 == null) : false) {
        try {
          this.i1g_1();
        } catch ($p) {
          if ($p instanceof Error) {
            var t = $p;
            fail(this, t);
          } else {
            throw $p;
          }
        }
      }
    }
    return cancellable.yq();
  };
  function get_currentCompositeKeyHash($composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(524444915, $changed, -1, 'androidx.compose.runtime.<get-currentCompositeKeyHash> (Composables.kt:224)');
    }
    var tmp0 = $composer_0.q1g();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return tmp0;
  }
  function invalidApplier() {
    var message = 'Invalid applier';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function ComposeNodeLifecycleCallback() {
  }
  function get_compositionTracer() {
    _init_properties_Composer_kt__bmp4g0();
    return compositionTracer;
  }
  var compositionTracer;
  function get_invocation() {
    _init_properties_Composer_kt__bmp4g0();
    return invocation;
  }
  var invocation;
  function get_provider() {
    _init_properties_Composer_kt__bmp4g0();
    return provider;
  }
  var provider;
  function get_compositionLocalMap() {
    _init_properties_Composer_kt__bmp4g0();
    return compositionLocalMap;
  }
  var compositionLocalMap;
  var providerValues;
  function get_providerMaps() {
    _init_properties_Composer_kt__bmp4g0();
    return providerMaps;
  }
  var providerMaps;
  function get_reference() {
    _init_properties_Composer_kt__bmp4g0();
    return reference;
  }
  var reference;
  function get_InvalidationLocationAscending() {
    _init_properties_Composer_kt__bmp4g0();
    return InvalidationLocationAscending;
  }
  var InvalidationLocationAscending;
  function Invalidation(scope, location, instances) {
    this.u1g_1 = scope;
    this.v1g_1 = location;
    this.w1g_1 = instances;
  }
  protoOf(Invalidation).x1g = function () {
    return this.u1g_1.g1h(this.w1g_1);
  };
  function startRoot($this) {
    $this.o1i_1 = $this.j1h_1.m1j();
    startGroup($this, 100);
    $this.i1h_1.n1j();
    $this.b1i_1 = $this.i1h_1.o1j();
    $this.e1i_1.r1j(asInt($this.d1i_1));
    $this.d1i_1 = $this.s1j($this.b1i_1);
    $this.s1i_1 = null;
    if (!$this.w1h_1) {
      $this.w1h_1 = $this.i1h_1.t1j();
    }
    if (!$this.j1i_1) {
      $this.j1i_1 = $this.i1h_1.u1j();
    }
    var tmp0_safe_receiver = read($this.b1i_1, get_LocalInspectionTables());
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.a1($this.j1h_1);
      $this.i1h_1.v1j(tmp0_safe_receiver);
    }
    startGroup($this, $this.i1h_1.w1j());
  }
  function endRoot($this) {
    endGroup($this);
    $this.i1h_1.x1j();
    endGroup($this);
    $this.u1i_1.k1k();
    finalizeCompose($this);
    $this.o1i_1.y1k();
    $this.x1h_1 = false;
  }
  function abortRoot($this) {
    cleanUpCompose($this);
    $this.o1h_1.h1();
    $this.r1h_1.h1();
    $this.t1h_1.h1();
    $this.a1i_1.h1();
    $this.e1i_1.h1();
    $this.c1i_1 = null;
    if (!$this.o1i_1.r1k_1) {
      $this.o1i_1.y1k();
    }
    if (!$this.q1i_1.u1l_1) {
      $this.q1i_1.y1k();
    }
    $this.w1i_1.h1();
    createFreshInsertTable($this);
    $this.y1i_1 = 0;
    $this.h1i_1 = 0;
    $this.y1h_1 = false;
    $this.x1i_1 = false;
    $this.f1i_1 = false;
    $this.m1i_1 = false;
    $this.x1h_1 = false;
    $this.g1i_1 = -1;
  }
  function startGroup($this, key) {
    return start($this, key, null, Companion_getInstance_1().y1l_1, null);
  }
  function startGroup_0($this, key, dataKey) {
    return start($this, key, dataKey, Companion_getInstance_1().y1l_1, null);
  }
  function endGroup($this) {
    return end($this, false);
  }
  function skipGroup($this) {
    $this.s1h_1 = $this.s1h_1 + $this.o1i_1.b1m() | 0;
  }
  function updateSlot($this, value) {
    $this.c1m();
    $this.d1m(value);
  }
  function currentCompositionLocalScope($this) {
    var tmp0_safe_receiver = $this.s1i_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    return currentCompositionLocalScope_0($this, $this.o1i_1.u1k_1);
  }
  function currentCompositionLocalScope_0($this, group) {
    if ($this.x1i_1 ? $this.r1i_1 : false) {
      var current = $this.q1i_1.t1l_1;
      while (current > 0) {
        if ($this.q1i_1.g1m(current) === 202 ? equals($this.q1i_1.f1m(current), get_compositionLocalMap()) : false) {
          var tmp = $this.q1i_1.e1m(current);
          var providers = (!(tmp == null) ? isInterface(tmp, PersistentCompositionLocalMap) : false) ? tmp : THROW_CCE();
          $this.s1i_1 = providers;
          return providers;
        }
        current = $this.q1i_1.h1m(current);
      }
    }
    if ($this.o1i_1.m() > 0) {
      var current_0 = group;
      while (current_0 > 0) {
        if ($this.o1i_1.g1m(current_0) === 202 ? equals($this.o1i_1.f1m(current_0), get_compositionLocalMap()) : false) {
          var tmp0_safe_receiver = $this.c1i_1;
          var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n(current_0);
          var tmp_0;
          if (tmp1_elvis_lhs == null) {
            var tmp_1 = $this.o1i_1.e1m(current_0);
            tmp_0 = (!(tmp_1 == null) ? isInterface(tmp_1, PersistentCompositionLocalMap) : false) ? tmp_1 : THROW_CCE();
          } else {
            tmp_0 = tmp1_elvis_lhs;
          }
          var providers_0 = tmp_0;
          $this.s1i_1 = providers_0;
          return providers_0;
        }
        current_0 = $this.o1i_1.h1m(current_0);
      }
    }
    $this.s1i_1 = $this.b1i_1;
    return $this.b1i_1;
  }
  function updateProviderMapGroup($this, parentScope, currentProviders) {
    // Inline function 'androidx.compose.runtime.mutate' call
    // Inline function 'kotlin.apply' call
    var this_0 = parentScope.j1m();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.updateProviderMapGroup.<anonymous>' call
    this_0.o2(currentProviders);
    var providerScope = this_0.e3();
    startGroup_0($this, 204, get_providerMaps());
    updateSlot($this, providerScope);
    updateSlot($this, currentProviders);
    endGroup($this);
    return providerScope;
  }
  function recordProviderUpdate($this, providers) {
    var tmp0_elvis_lhs = $this.c1i_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.recordProviderUpdate.<anonymous>' call
      var newProviderUpdates = new IntMap();
      $this.c1i_1 = newProviderUpdates;
      tmp = newProviderUpdates;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var providerUpdates = tmp;
    providerUpdates.k1m($this.o1i_1.s1k_1, providers);
  }
  function ensureWriter($this) {
    if ($this.q1i_1.u1l_1) {
      $this.q1i_1 = $this.p1i_1.l1m();
      $this.q1i_1.m1m();
      $this.r1i_1 = false;
      $this.s1i_1 = null;
    }
  }
  function createFreshInsertTable($this) {
    runtimeCheck($this.q1i_1.u1l_1);
    $this.p1i_1 = new SlotTable();
    var tmp = $this;
    // Inline function 'kotlin.also' call
    var this_0 = $this.p1i_1.l1m();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.createFreshInsertTable.<anonymous>' call
    this_0.y1k();
    tmp.q1i_1 = this_0;
  }
  function startReaderGroup($this, isNode, data) {
    if (isNode) {
      $this.o1i_1.q1m();
    } else {
      if (!(data == null) ? !($this.o1i_1.o1m() === data) : false) {
        $this.u1i_1.n1m(data);
      }
      $this.o1i_1.p1m();
    }
  }
  function start($this, key, objectKey, kind, data) {
    validateNodeNotExpected($this);
    updateCompoundKeyWhenWeEnterGroup($this, key, objectKey, data);
    // Inline function 'androidx.compose.runtime.GroupKind.isNode' call
    var isNode = !(_GroupKind___get_value__impl__cf5pqe(kind) === _GroupKind___get_value__impl__cf5pqe(Companion_getInstance_1().y1l_1));
    if ($this.x1i_1) {
      $this.o1i_1.r1m();
      var startIndex = $this.q1i_1.r1l_1;
      if (isNode) {
        $this.q1i_1.v1m(key, Companion_getInstance_0().s1m_1);
      } else if (!(data == null)) {
        var tmp = $this.q1i_1;
        tmp.u1m(key, objectKey == null ? Companion_getInstance_0().s1m_1 : objectKey, data);
      } else {
        var tmp_0 = $this.q1i_1;
        tmp_0.t1m(key, objectKey == null ? Companion_getInstance_0().s1m_1 : objectKey);
      }
      var tmp2_safe_receiver = $this.p1h_1;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.start.<anonymous>' call
        var insertKeyInfo = new KeyInfo(key, -1, insertedGroupVirtualIndex($this, startIndex), -1, 0);
        tmp2_safe_receiver.c1n(insertKeyInfo, $this.q1h_1 - tmp2_safe_receiver.x1m_1 | 0);
        tmp2_safe_receiver.d1n(insertKeyInfo);
      }
      enterGroup($this, isNode, null);
      return Unit_instance;
    }
    var tmp_1;
    // Inline function 'androidx.compose.runtime.GroupKind.isReusable' call
    if (!!(_GroupKind___get_value__impl__cf5pqe(kind) === _GroupKind___get_value__impl__cf5pqe(Companion_getInstance_1().z1l_1))) {
      tmp_1 = $this.f1i_1;
    } else {
      tmp_1 = false;
    }
    var forceReplace = tmp_1;
    if ($this.p1h_1 == null) {
      var slotKey = $this.o1i_1.e1n();
      if ((!forceReplace ? slotKey === key : false) ? equals(objectKey, $this.o1i_1.g1n()) : false) {
        startReaderGroup($this, isNode, data);
      } else {
        $this.p1h_1 = new Pending($this.o1i_1.f1n(), $this.q1h_1);
      }
    }
    var pending = $this.p1h_1;
    var newPending = null;
    if (!(pending == null)) {
      var keyInfo = pending.h1n(key, objectKey);
      if (!forceReplace ? !(keyInfo == null) : false) {
        pending.d1n(keyInfo);
        var location = keyInfo.m1n_1;
        $this.q1h_1 = pending.p1n(keyInfo) + pending.x1m_1 | 0;
        var relativePosition = pending.q1n(keyInfo);
        var currentRelativePosition = relativePosition - pending.y1m_1 | 0;
        pending.r1n(relativePosition, pending.y1m_1);
        $this.u1i_1.s1n(location);
        $this.o1i_1.t1n(location);
        if (currentRelativePosition > 0) {
          $this.u1i_1.u1n(currentRelativePosition);
        }
        startReaderGroup($this, isNode, data);
      } else {
        $this.o1i_1.r1m();
        $this.x1i_1 = true;
        $this.s1i_1 = null;
        ensureWriter($this);
        $this.q1i_1.i1n();
        var startIndex_0 = $this.q1i_1.r1l_1;
        if (isNode) {
          $this.q1i_1.v1m(key, Companion_getInstance_0().s1m_1);
        } else if (!(data == null)) {
          var tmp_2 = $this.q1i_1;
          tmp_2.u1m(key, objectKey == null ? Companion_getInstance_0().s1m_1 : objectKey, data);
        } else {
          var tmp_3 = $this.q1i_1;
          tmp_3.t1m(key, objectKey == null ? Companion_getInstance_0().s1m_1 : objectKey);
        }
        $this.v1i_1 = $this.q1i_1.j1n(startIndex_0);
        var insertKeyInfo_0 = new KeyInfo(key, -1, insertedGroupVirtualIndex($this, startIndex_0), -1, 0);
        pending.c1n(insertKeyInfo_0, $this.q1h_1 - pending.x1m_1 | 0);
        pending.d1n(insertKeyInfo_0);
        // Inline function 'kotlin.collections.mutableListOf' call
        var tmp$ret$4 = ArrayList_init_$Create$();
        newPending = new Pending(tmp$ret$4, isNode ? 0 : $this.q1h_1);
      }
    }
    enterGroup($this, isNode, newPending);
  }
  function enterGroup($this, isNode, newPending) {
    $this.o1h_1.v1n($this.p1h_1);
    $this.p1h_1 = newPending;
    $this.r1h_1.r1j($this.q1h_1);
    if (isNode)
      $this.q1h_1 = 0;
    $this.t1h_1.r1j($this.s1h_1);
    $this.s1h_1 = 0;
  }
  function exitGroup($this, expectedNodeCount, inserting) {
    var previousPending = $this.o1h_1.w1n();
    if (!(previousPending == null) ? !inserting : false) {
      previousPending.y1m_1 = previousPending.y1m_1 + 1 | 0;
    }
    $this.p1h_1 = previousPending;
    $this.q1h_1 = $this.r1h_1.w1n() + expectedNodeCount | 0;
    $this.s1h_1 = $this.t1h_1.w1n() + expectedNodeCount | 0;
  }
  function end($this, isNode) {
    if ($this.x1i_1) {
      var parent = $this.q1i_1.t1l_1;
      updateCompoundKeyWhenWeExitGroup($this, $this.q1i_1.g1m(parent), $this.q1i_1.f1m(parent), $this.q1i_1.e1m(parent));
    } else {
      var parent_0 = $this.o1i_1.u1k_1;
      updateCompoundKeyWhenWeExitGroup($this, $this.o1i_1.g1m(parent_0), $this.o1i_1.f1m(parent_0), $this.o1i_1.e1m(parent_0));
    }
    var expectedNodeCount = $this.s1h_1;
    var pending = $this.p1h_1;
    if (!(pending == null) ? pending.w1m_1.m() > 0 : false) {
      var previous = pending.w1m_1;
      var current = pending.x1n();
      var usedKeys = fastToSet(current);
      // Inline function 'kotlin.collections.mutableSetOf' call
      var placedKeys = LinkedHashSet_init_$Create$();
      var currentIndex = 0;
      var currentEnd = current.m();
      var previousIndex = 0;
      var previousEnd = previous.m();
      var nodeOffset = 0;
      $l$loop_0: while (previousIndex < previousEnd) {
        var previousInfo = previous.n(previousIndex);
        if (!usedKeys.s(previousInfo)) {
          var deleteOffset = pending.p1n(previousInfo);
          $this.u1i_1.y1n(deleteOffset + pending.x1m_1 | 0, previousInfo.n1n_1);
          pending.z1n(previousInfo.m1n_1, 0);
          $this.u1i_1.s1n(previousInfo.m1n_1);
          $this.o1i_1.t1n(previousInfo.m1n_1);
          recordDelete($this);
          $this.o1i_1.b1m();
          removeRange($this.z1h_1, previousInfo.m1n_1, previousInfo.m1n_1 + $this.o1i_1.a1o(previousInfo.m1n_1) | 0);
          previousIndex = previousIndex + 1 | 0;
          continue $l$loop_0;
        }
        if (placedKeys.s(previousInfo)) {
          previousIndex = previousIndex + 1 | 0;
          continue $l$loop_0;
        }
        if (currentIndex < currentEnd) {
          var currentInfo = current.n(currentIndex);
          if (!(currentInfo === previousInfo)) {
            var nodePosition = pending.p1n(currentInfo);
            placedKeys.a1(currentInfo);
            if (!(nodePosition === nodeOffset)) {
              var updatedCount = pending.b1o(currentInfo);
              $this.u1i_1.c1o(nodePosition + pending.x1m_1 | 0, nodeOffset + pending.x1m_1 | 0, updatedCount);
              pending.d1o(nodePosition, nodeOffset, updatedCount);
            }
          } else {
            previousIndex = previousIndex + 1 | 0;
          }
          currentIndex = currentIndex + 1 | 0;
          nodeOffset = nodeOffset + pending.b1o(currentInfo) | 0;
        }
      }
      $this.u1i_1.e1o();
      if (previous.m() > 0) {
        $this.u1i_1.s1n($this.o1i_1.f1o());
        $this.o1i_1.m1m();
      }
    }
    var removeIndex = $this.q1h_1;
    while (!$this.o1i_1.g1o()) {
      var startSlot = $this.o1i_1.s1k_1;
      recordDelete($this);
      var nodesToRemove = $this.o1i_1.b1m();
      $this.u1i_1.y1n(removeIndex, nodesToRemove);
      removeRange($this.z1h_1, startSlot, $this.o1i_1.s1k_1);
    }
    var inserting = $this.x1i_1;
    if (inserting) {
      if (isNode) {
        $this.w1i_1.k1o();
        expectedNodeCount = 1;
      }
      $this.o1i_1.l1o();
      var parentGroup = $this.q1i_1.t1l_1;
      $this.q1i_1.m1o();
      if (!$this.o1i_1.p1o()) {
        var virtualIndex = insertedGroupVirtualIndex($this, parentGroup);
        $this.q1i_1.n1o();
        $this.q1i_1.y1k();
        recordInsert($this, $this.v1i_1);
        $this.x1i_1 = false;
        if (!$this.j1h_1.o1o()) {
          updateNodeCount($this, virtualIndex, 0);
          updateNodeCountOverrides($this, virtualIndex, expectedNodeCount);
        }
      }
    } else {
      if (isNode) {
        $this.u1i_1.h1o();
      }
      $this.u1i_1.i1o();
      var parentGroup_0 = $this.o1i_1.u1k_1;
      var parentNodeCount = updatedNodeCount($this, parentGroup_0);
      if (!(expectedNodeCount === parentNodeCount)) {
        updateNodeCountOverrides($this, parentGroup_0, expectedNodeCount);
      }
      if (isNode) {
        expectedNodeCount = 1;
      }
      $this.o1i_1.j1o();
      $this.u1i_1.e1o();
    }
    exitGroup($this, expectedNodeCount, inserting);
  }
  function recomposeToGroupEnd($this) {
    var wasComposing = $this.m1i_1;
    $this.m1i_1 = true;
    var recomposed = false;
    var parent = $this.o1i_1.u1k_1;
    var end = parent + $this.o1i_1.a1o(parent) | 0;
    var recomposeIndex = $this.q1h_1;
    var recomposeCompoundKey = $this.y1i_1;
    var oldGroupNodeCount = $this.s1h_1;
    var oldGroup = parent;
    var firstInRange_0 = firstInRange($this.z1h_1, $this.o1i_1.s1k_1, end);
    while (!(firstInRange_0 == null)) {
      var location = firstInRange_0.v1g_1;
      removeLocation($this.z1h_1, location);
      if (firstInRange_0.x1g()) {
        recomposed = true;
        $this.o1i_1.t1n(location);
        var newGroup = $this.o1i_1.s1k_1;
        recordUpsAndDowns($this, oldGroup, newGroup, parent);
        oldGroup = newGroup;
        $this.q1h_1 = nodeIndexOf($this, location, newGroup, parent, recomposeIndex);
        $this.y1i_1 = compoundKeyOf($this, $this.o1i_1.h1m(newGroup), parent, recomposeCompoundKey);
        $this.s1i_1 = null;
        firstInRange_0.u1g_1.r1o($this);
        $this.s1i_1 = null;
        $this.o1i_1.s1o(parent);
      } else {
        $this.l1i_1.v1n(firstInRange_0.u1g_1);
        firstInRange_0.u1g_1.q1o();
        $this.l1i_1.w1n();
      }
      firstInRange_0 = firstInRange($this.z1h_1, $this.o1i_1.s1k_1, end);
    }
    if (recomposed) {
      recordUpsAndDowns($this, oldGroup, parent, parent);
      $this.o1i_1.m1m();
      var parentGroupNodes = updatedNodeCount($this, parent);
      $this.q1h_1 = recomposeIndex + parentGroupNodes | 0;
      $this.s1h_1 = oldGroupNodeCount + parentGroupNodes | 0;
    } else {
      skipReaderToGroupEnd($this);
    }
    $this.y1i_1 = recomposeCompoundKey;
    $this.m1i_1 = wasComposing;
  }
  function insertedGroupVirtualIndex($this, index) {
    return -2 - index | 0;
  }
  function updateNodeCountOverrides($this, group, newCount) {
    var currentCount = updatedNodeCount($this, group);
    if (!(currentCount === newCount)) {
      var delta = newCount - currentCount | 0;
      var current = group;
      var minPending = $this.o1h_1.m() - 1 | 0;
      $l$loop_0: while (!(current === -1)) {
        var newCurrentNodes = updatedNodeCount($this, current) + delta | 0;
        updateNodeCount($this, current, newCurrentNodes);
        var inductionVariable = minPending;
        if (0 <= inductionVariable)
          $l$loop: do {
            var pendingIndex = inductionVariable;
            inductionVariable = inductionVariable + -1 | 0;
            var pending = $this.o1h_1.t1o(pendingIndex);
            if (!(pending == null) ? pending.z1n(current, newCurrentNodes) : false) {
              minPending = pendingIndex - 1 | 0;
              break $l$loop;
            }
          }
           while (0 <= inductionVariable);
        if (current < 0) {
          current = $this.o1i_1.u1k_1;
        } else {
          if ($this.o1i_1.u1o(current))
            break $l$loop_0;
          current = $this.o1i_1.h1m(current);
        }
      }
    }
  }
  function nodeIndexOf($this, groupLocation, group, recomposeGroup, recomposeIndex) {
    var anchorGroup = $this.o1i_1.h1m(group);
    $l$loop: while (!(anchorGroup === recomposeGroup) && !$this.o1i_1.u1o(anchorGroup)) {
      anchorGroup = $this.o1i_1.h1m(anchorGroup);
    }
    var index = $this.o1i_1.u1o(anchorGroup) ? 0 : recomposeIndex;
    if (anchorGroup === group)
      return index;
    var current = anchorGroup;
    var nodeIndexLimit = index + (updatedNodeCount($this, anchorGroup) - $this.o1i_1.v1o(group) | 0) | 0;
    loop: while (index < nodeIndexLimit && current !== groupLocation) {
      current = current + 1 | 0;
      while (current < groupLocation) {
        var end = current + $this.o1i_1.a1o(current) | 0;
        if (groupLocation < end)
          continue loop;
        index = index + updatedNodeCount($this, current) | 0;
        current = end;
      }
      break loop;
    }
    return index;
  }
  function updatedNodeCount($this, group) {
    if (group < 0) {
      var tmp0_safe_receiver = $this.v1h_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.updatedNodeCount.<anonymous>' call
        tmp = tmp0_safe_receiver.vg(group) ? tmp0_safe_receiver.n(group) : 0;
      }
      var tmp1_elvis_lhs = tmp;
      return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    }
    var nodeCounts = $this.u1h_1;
    if (!(nodeCounts == null)) {
      var override = nodeCounts[group];
      if (override >= 0)
        return override;
    }
    return $this.o1i_1.v1o(group);
  }
  function updateNodeCount($this, group, count) {
    if (!(updatedNodeCount($this, group) === count)) {
      if (group < 0) {
        var tmp0_elvis_lhs = $this.v1h_1;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateNodeCount.<anonymous>' call
          var newCounts = new MutableIntIntMap();
          $this.v1h_1 = newCounts;
          tmp = newCounts;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var virtualCounts = tmp;
        virtualCounts.nl(group, count);
      } else {
        var tmp1_elvis_lhs = $this.u1h_1;
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateNodeCount.<anonymous>' call
          var newCounts_0 = new Int32Array($this.o1i_1.m());
          fill(newCounts_0, -1);
          $this.u1h_1 = newCounts_0;
          tmp_0 = newCounts_0;
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        var nodeCounts = tmp_0;
        nodeCounts[group] = count;
      }
    }
  }
  function clearUpdatedNodeCounts($this) {
    $this.u1h_1 = null;
    $this.v1h_1 = null;
  }
  function recordUpsAndDowns($this, oldGroup, newGroup, commonRoot) {
    var reader = $this.o1i_1;
    var nearestCommonRoot = nearestCommonRootOf(reader, oldGroup, newGroup, commonRoot);
    var current = oldGroup;
    while (current > 0 ? !(current === nearestCommonRoot) : false) {
      if (reader.u1o(current)) {
        $this.u1i_1.h1o();
      }
      current = reader.h1m(current);
    }
    doRecordDownsFor($this, newGroup, nearestCommonRoot);
  }
  function doRecordDownsFor($this, group, nearestCommonRoot) {
    if (group > 0 ? !(group === nearestCommonRoot) : false) {
      doRecordDownsFor($this, $this.o1i_1.h1m(group), nearestCommonRoot);
      if ($this.o1i_1.u1o(group)) {
        $this.u1i_1.w1o(nodeAt($this.o1i_1, $this, group));
      }
    }
  }
  function compoundKeyOf($this, group, recomposeGroup, recomposeKey) {
    var tmp;
    if (group === recomposeGroup) {
      tmp = recomposeKey;
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.compoundKeyOf.<anonymous>' call
      var groupKey = groupCompoundKeyPart($this.o1i_1, $this, group);
      var tmp_0;
      if (groupKey === get_movableContentKey()) {
        tmp_0 = groupKey;
      } else {
        // Inline function 'androidx.compose.runtime.rol' call
        var this_0 = compoundKeyOf($this, $this.o1i_1.h1m(group), recomposeGroup, recomposeKey);
        tmp_0 = rotateLeft(this_0, 3) ^ groupKey;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function groupCompoundKeyPart(_this__u8e3s4, $this, group) {
    var tmp;
    if (_this__u8e3s4.x1o(group)) {
      var tmp0_safe_receiver = _this__u8e3s4.f1m(group);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>' call
        var tmp_1;
        if (tmp0_safe_receiver instanceof Enum) {
          tmp_1 = tmp0_safe_receiver.t9_1;
        } else {
          if (tmp0_safe_receiver instanceof MovableContent) {
            tmp_1 = get_movableContentKey();
          } else {
            tmp_1 = hashCode(tmp0_safe_receiver);
          }
        }
        tmp_0 = tmp_1;
      }
      var tmp1_elvis_lhs = tmp_0;
      tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>' call
      var it = _this__u8e3s4.g1m(group);
      var tmp_2;
      if (it === 207) {
        var tmp0_safe_receiver_0 = _this__u8e3s4.e1m(group);
        var tmp_3;
        if (tmp0_safe_receiver_0 == null) {
          tmp_3 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>.<anonymous>' call
          tmp_3 = equals(tmp0_safe_receiver_0, Companion_getInstance_0().s1m_1) ? it : hashCode(tmp0_safe_receiver_0);
        }
        var tmp1_elvis_lhs_0 = tmp_3;
        tmp_2 = tmp1_elvis_lhs_0 == null ? it : tmp1_elvis_lhs_0;
      } else {
        tmp_2 = it;
      }
      tmp = tmp_2;
    }
    return tmp;
  }
  function skipReaderToGroupEnd($this) {
    $this.s1h_1 = $this.o1i_1.y1o();
    $this.o1i_1.m1m();
  }
  function addRecomposeScope($this) {
    if ($this.x1i_1) {
      var tmp = $this.n1h_1;
      var scope = new RecomposeScopeImpl(tmp instanceof CompositionImpl ? tmp : THROW_CCE());
      $this.l1i_1.v1n(scope);
      $this.d1m(scope);
      scope.c1p($this.i1i_1);
    } else {
      var invalidation = removeLocation($this.z1h_1, $this.o1i_1.u1k_1);
      var slot = $this.o1i_1.f1();
      var tmp_0;
      if (equals(slot, Companion_getInstance_0().s1m_1)) {
        var tmp_1 = $this.n1h_1;
        var newScope = new RecomposeScopeImpl(tmp_1 instanceof CompositionImpl ? tmp_1 : THROW_CCE());
        $this.d1m(newScope);
        tmp_0 = newScope;
      } else {
        tmp_0 = slot instanceof RecomposeScopeImpl ? slot : THROW_CCE();
      }
      var scope_0 = tmp_0;
      var tmp_2;
      if (!(invalidation == null)) {
        tmp_2 = true;
      } else {
        // Inline function 'kotlin.also' call
        var this_0 = scope_0.z1o();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.addRecomposeScope.<anonymous>' call
        if (this_0) {
          scope_0.a1p(false);
        }
        tmp_2 = this_0;
      }
      scope_0.b1p(tmp_2);
      $this.l1i_1.v1n(scope_0);
      scope_0.c1p($this.i1i_1);
    }
  }
  function invokeMovableContentLambda($this, content, locals, parameter, force) {
    $this.d1p(get_movableContentKey(), content);
    updateSlot($this, parameter);
    var savedCompoundKeyHash = $this.y1i_1;
    try {
      $this.y1i_1 = get_movableContentKey();
      if ($this.x1i_1) {
        $this.q1i_1.e1p();
      }
      var providersChanged = $this.x1i_1 ? false : !equals($this.o1i_1.o1m(), locals);
      if (providersChanged) {
        recordProviderUpdate($this, locals);
      }
      start($this, 202, get_compositionLocalMap(), Companion_getInstance_1().y1l_1, locals);
      $this.s1i_1 = null;
      if ($this.x1i_1 ? !force : false) {
        $this.r1i_1 = true;
        var anchor = $this.q1i_1.j1n($this.q1i_1.h1m($this.q1i_1.t1l_1));
        var reference = new MovableContentStateReference(content, parameter, $this.n1h_1, $this.p1i_1, anchor, emptyList(), currentCompositionLocalScope($this));
        $this.i1h_1.f1p(reference);
      } else {
        var savedProvidersInvalid = $this.d1i_1;
        $this.d1i_1 = providersChanged;
        invokeComposable($this, ComposableLambda$invoke$ref(composableLambdaInstance(316014703, true, ComposerImpl$invokeMovableContentLambda$lambda(content, parameter))));
        $this.d1i_1 = savedProvidersInvalid;
      }
    }finally {
      endGroup($this);
      $this.s1i_1 = null;
      $this.y1i_1 = savedCompoundKeyHash;
      $this.g1p();
    }
  }
  function insertMovableContentGuarded($this, references) {
    // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.withChangeList' call
    var this_0 = $this.u1i_1;
    var newChangeList = $this.m1h_1;
    var previousChangeList = this_0.z1j_1;
    try {
      this_0.z1j_1 = newChangeList;
      // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>' call
      $this.u1i_1.h1p();
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = references.m() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = references.n(index);
          // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>' call
          var to = item.se();
          var from = item.te();
          var anchor = to.m1p_1;
          var location = to.l1p_1.p1p(anchor);
          var effectiveNodeIndex = new IntRef();
          $this.u1i_1.q1p(effectiveNodeIndex, anchor);
          if (from == null) {
            var toSlotTable = to.l1p_1;
            if (equals(toSlotTable, $this.p1i_1)) {
              createFreshInsertTable($this);
            }
            // Inline function 'androidx.compose.runtime.SlotTable.read' call
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
            var reader = to.l1p_1.m1j();
            var tmp;
            try {
              reader.t1n(location);
              $this.u1i_1.v1p(location);
              var offsetChanges = new ChangeList();
              recomposeMovableContent$default($this, VOID, VOID, VOID, VOID, ComposerImpl$insertMovableContentGuarded$lambda($this, offsetChanges, reader, to));
              $this.u1i_1.w1p(offsetChanges, effectiveNodeIndex);
              tmp = Unit_instance;
            }finally {
              reader.y1k();
            }
          } else {
            var resolvedState = $this.i1h_1.r1p(from);
            var tmp1_elvis_lhs = resolvedState == null ? null : resolvedState.s1p_1;
            var fromTable = tmp1_elvis_lhs == null ? from.l1p_1 : tmp1_elvis_lhs;
            var tmp3_safe_receiver = resolvedState == null ? null : resolvedState.s1p_1;
            var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.j1n(0);
            var fromAnchor = tmp4_elvis_lhs == null ? from.m1p_1 : tmp4_elvis_lhs;
            var nodesToInsert = collectNodesFrom(fromTable, fromAnchor);
            // Inline function 'kotlin.collections.isNotEmpty' call
            if (!nodesToInsert.u()) {
              $this.u1i_1.t1p(nodesToInsert, effectiveNodeIndex);
              if (equals(to.l1p_1, $this.j1h_1)) {
                var group = $this.j1h_1.p1p(anchor);
                updateNodeCount($this, group, updatedNodeCount($this, group) + nodesToInsert.m() | 0);
              }
            }
            $this.u1i_1.u1p(resolvedState, $this.i1h_1, from, to);
            // Inline function 'androidx.compose.runtime.SlotTable.read' call
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
            var reader_0 = fromTable.m1j();
            var tmp_0;
            try {
              $l$block: {
                // Inline function 'androidx.compose.runtime.ComposerImpl.withReader' call
                var savedReader = $this.o1i_1;
                var savedCountOverrides = $this.u1h_1;
                var savedProviderUpdates = $this.c1i_1;
                $this.u1h_1 = null;
                $this.c1i_1 = null;
                try {
                  $this.o1i_1 = reader_0;
                  var newLocation = fromTable.p1p(fromAnchor);
                  reader_0.t1n(newLocation);
                  $this.u1i_1.v1p(newLocation);
                  var offsetChanges_0 = new ChangeList();
                  // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.withChangeList' call
                  var this_1 = $this.u1i_1;
                  var previousChangeList_0 = this_1.z1j_1;
                  try {
                    this_1.z1j_1 = offsetChanges_0;
                    // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.withoutImplicitRootStart' call
                    var this_2 = $this.u1i_1;
                    var previousImplicitRootStart = this_2.c1k_1;
                    try {
                      this_2.c1k_1 = false;
                      // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                      var tmp_1 = reader_0.s1k_1;
                      var tmp_2 = from.n1p_1;
                      recomposeMovableContent($this, from.k1p_1, to.k1p_1, tmp_1, tmp_2, ComposerImpl$insertMovableContentGuarded$lambda_0($this, to));
                    }finally {
                      this_2.c1k_1 = previousImplicitRootStart;
                    }
                  }finally {
                    this_1.z1j_1 = previousChangeList_0;
                  }
                  $this.u1i_1.w1p(offsetChanges_0, effectiveNodeIndex);
                  break $l$block;
                }finally {
                  $this.o1i_1 = savedReader;
                  $this.u1h_1 = savedCountOverrides;
                  $this.c1i_1 = savedProviderUpdates;
                }
              }
              tmp_0 = Unit_instance;
            }finally {
              reader_0.y1k();
            }
          }
          $this.u1i_1.x1p();
        }
         while (inductionVariable <= last);
      $this.u1i_1.y1p();
      $this.u1i_1.v1p(0);
    }finally {
      this_0.z1j_1 = previousChangeList;
    }
  }
  function recomposeMovableContent($this, from, to, index, invalidations, block) {
    var savedIsComposing = $this.m1i_1;
    var savedNodeIndex = $this.q1h_1;
    try {
      $this.m1i_1 = true;
      $this.q1h_1 = 0;
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = invalidations.m() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = invalidations.n(index_0);
          // Inline function 'androidx.compose.runtime.ComposerImpl.recomposeMovableContent.<anonymous>' call
          var scope = item.se();
          var instances = item.te();
          if (!(instances == null)) {
            // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
            // Inline function 'kotlin.contracts.contract' call
            var values = instances.b1q_1;
            var inductionVariable_0 = 0;
            var last_0 = instances.a1q_1;
            if (inductionVariable_0 < last_0)
              do {
                var i = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.compose.runtime.ComposerImpl.recomposeMovableContent.<anonymous>.<anonymous>' call
                var tmp = values[i];
                var instance = !(tmp == null) ? tmp : THROW_CCE();
                $this.z1p(scope, instance);
              }
               while (inductionVariable_0 < last_0);
          } else {
            $this.z1p(scope, null);
          }
        }
         while (inductionVariable <= last);
      var tmp_0;
      if (from == null) {
        tmp_0 = null;
      } else {
        tmp_0 = from.c1q(to, index == null ? -1 : index, block);
      }
      var tmp2_elvis_lhs = tmp_0;
      return tmp2_elvis_lhs == null ? block() : tmp2_elvis_lhs;
    }finally {
      $this.m1i_1 = savedIsComposing;
      $this.q1h_1 = savedNodeIndex;
    }
  }
  function recomposeMovableContent$default($this, from, to, index, invalidations, block, $super) {
    from = from === VOID ? null : from;
    to = to === VOID ? null : to;
    index = index === VOID ? null : index;
    invalidations = invalidations === VOID ? emptyList() : invalidations;
    return recomposeMovableContent($this, from, to, index, invalidations, block);
  }
  function doCompose($this, invalidationsRequested, content) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!$this.m1i_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose.<anonymous>' call
      var message = 'Reentrant composition is not supported';
      composeRuntimeError(toString(message));
    }
    $l$block: {
      // Inline function 'androidx.compose.runtime.trace' call
      var sectionName = 'Compose:recompose';
      var token = Trace_instance.d1q(sectionName);
      try {
        $this.i1i_1 = currentSnapshot().i1q();
        $this.c1i_1 = null;
        // Inline function 'androidx.compose.runtime.collection.IdentityArrayMap.forEach' call
        var inductionVariable = 0;
        var last = invalidationsRequested.l1q_1;
        if (inductionVariable < last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose.<anonymous>.<anonymous>' call
            var tmp = invalidationsRequested.j1q_1[index];
            var scope = !(tmp == null) ? tmp : THROW_CCE();
            var tmp_0 = invalidationsRequested.k1q_1[index];
            var set = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
            var tmp0_safe_receiver = scope.a1h_1;
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m1q_1;
            var tmp_1;
            if (tmp1_elvis_lhs == null) {
              return Unit_instance;
            } else {
              tmp_1 = tmp1_elvis_lhs;
            }
            var location = tmp_1;
            $this.z1h_1.a1(new Invalidation(scope, location, set));
          }
           while (inductionVariable < last);
        sortWith($this.z1h_1, get_InvalidationLocationAscending());
        $this.q1h_1 = 0;
        var complete = false;
        $this.m1i_1 = true;
        var tmp_2;
        try {
          startRoot($this);
          var savedContent = $this.c1m();
          if (!(savedContent === content) ? !(content == null) : false) {
            $this.d1m((content == null ? true : !(content == null)) ? content : THROW_CCE());
          }
          // Inline function 'androidx.compose.runtime.observeDerivedStateRecalculations' call
          var observer = $this.k1i_1;
          var observers = derivedStateObservers_0();
          try {
            observers.q1q(observer);
            // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose.<anonymous>.<anonymous>' call
            if (!(content == null)) {
              startGroup_0($this, 200, get_invocation());
              invokeComposable($this, content);
              endGroup($this);
            } else if ((($this.x1h_1 ? true : $this.d1i_1) ? !(savedContent == null) : false) ? !equals(savedContent, Companion_getInstance_0().s1m_1) : false) {
              startGroup_0($this, 200, get_invocation());
              invokeComposable($this, (!(savedContent == null) ? typeof savedContent === 'function' : false) ? savedContent : THROW_CCE());
              endGroup($this);
            } else {
              $this.r1q();
            }
          }finally {
            // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
            var tmp$ret$1 = observers.p1q_1 - 1 | 0;
            observers.m1(tmp$ret$1);
          }
          endRoot($this);
          complete = true;
          tmp_2 = Unit_instance;
        }finally {
          $this.m1i_1 = false;
          $this.z1h_1.h1();
          if (!complete) {
            abortRoot($this);
          }
          createFreshInsertTable($this);
        }
        break $l$block;
      }finally {
        Trace_instance.s1q(token);
      }
    }
  }
  function _get_node__db0vwp(_this__u8e3s4, $this) {
    return _this__u8e3s4.t1q(_this__u8e3s4.u1k_1);
  }
  function nodeAt(_this__u8e3s4, $this, index) {
    return _this__u8e3s4.t1q(index);
  }
  function validateNodeExpected($this) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!$this.y1h_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.validateNodeExpected.<anonymous>' call
      var message = 'A call to createNode(), emitNode() or useNode() expected was not expected';
      composeRuntimeError(toString(message));
    }
    $this.y1h_1 = false;
  }
  function validateNodeNotExpected($this) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!$this.y1h_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.validateNodeNotExpected.<anonymous>' call
      var message = 'A call to createNode(), emitNode() or useNode() expected';
      composeRuntimeError(toString(message));
    }
  }
  function recordInsert($this, anchor) {
    if ($this.w1i_1.u()) {
      $this.u1i_1.v1q(anchor, $this.p1i_1);
    } else {
      $this.u1i_1.u1q(anchor, $this.p1i_1, $this.w1i_1);
      $this.w1i_1 = new FixupList();
    }
  }
  function recordDelete($this) {
    reportFreeMovableContent($this, $this.o1i_1.s1k_1);
    $this.u1i_1.w1q();
  }
  function reportFreeMovableContent($this, groupBeingRemoved) {
    reportFreeMovableContent$reportGroup($this, groupBeingRemoved, false, 0);
    $this.u1i_1.e1o();
  }
  function reportAllMovableContent($this) {
    if ($this.j1h_1.y1q()) {
      var changes = new ChangeList();
      $this.t1i_1 = changes;
      // Inline function 'androidx.compose.runtime.SlotTable.read' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
      var reader = $this.j1h_1.m1j();
      var tmp;
      try {
        $this.o1i_1 = reader;
        var this_0 = $this.u1i_1;
        var previousChangeList = this_0.z1j_1;
        var tmp_0;
        try {
          this_0.z1j_1 = changes;
          reportFreeMovableContent($this, 0);
          $this.u1i_1.x1q();
          tmp_0 = Unit_instance;
        }finally {
          this_0.z1j_1 = previousChangeList;
        }
        tmp = tmp_0;
      }finally {
        reader.y1k();
      }
    }
  }
  function finalizeCompose($this) {
    $this.u1i_1.z1q();
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!$this.o1h_1.u()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.finalizeCompose.<anonymous>' call
      var message = 'Start/end imbalance';
      composeRuntimeError(toString(message));
    }
    cleanUpCompose($this);
  }
  function cleanUpCompose($this) {
    $this.p1h_1 = null;
    $this.q1h_1 = 0;
    $this.s1h_1 = 0;
    $this.y1i_1 = 0;
    $this.y1h_1 = false;
    $this.u1i_1.a1r();
    $this.l1i_1.h1();
    clearUpdatedNodeCounts($this);
  }
  function CompositionContextHolder() {
  }
  function updateCompoundKeyWhenWeEnterGroup($this, groupKey, dataKey, data) {
    if (dataKey == null)
      if ((!(data == null) ? groupKey === 207 : false) ? !equals(data, Companion_getInstance_0().s1m_1) : false) {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, hashCode(data));
      } else {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, groupKey);
      }
     else {
      if (dataKey instanceof Enum) {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, dataKey.t9_1);
      } else {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, hashCode(dataKey));
      }
    }
  }
  function updateCompoundKeyWhenWeEnterGroupKeyHash($this, keyHash) {
    var tmp = $this;
    // Inline function 'androidx.compose.runtime.rol' call
    var this_0 = $this.y1i_1;
    tmp.y1i_1 = rotateLeft(this_0, 3) ^ keyHash;
  }
  function updateCompoundKeyWhenWeExitGroup($this, groupKey, dataKey, data) {
    if (dataKey == null)
      if ((!(data == null) ? groupKey === 207 : false) ? !equals(data, Companion_getInstance_0().s1m_1) : false) {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, hashCode(data));
      } else {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, groupKey);
      }
     else {
      if (dataKey instanceof Enum) {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, dataKey.t9_1);
      } else {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, hashCode(dataKey));
      }
    }
  }
  function updateCompoundKeyWhenWeExitGroupKeyHash($this, groupKey) {
    var tmp = $this;
    // Inline function 'androidx.compose.runtime.ror' call
    var this_0 = $this.y1i_1 ^ groupKey;
    tmp.y1i_1 = rotateRight(this_0, 3);
  }
  function reportFreeMovableContent$reportGroup(this$0, group, needsNodeDelete, nodeIndex) {
    var reader = this$0.o1i_1;
    var tmp;
    if (reader.r1r(group)) {
      var key = reader.g1m(group);
      var objectKey = reader.f1m(group);
      var tmp_0;
      var tmp_1;
      if (key === get_movableContentKey()) {
        tmp_1 = objectKey instanceof MovableContent;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var movableContent = objectKey instanceof MovableContent ? objectKey : THROW_CCE();
        var parameter = reader.c1r(group, 0);
        var anchor = reader.j1n(group);
        var end = group + reader.a1o(group) | 0;
        // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
        var this_0 = filterToRange(this$0.z1h_1, group, end);
        // Inline function 'kotlin.contracts.contract' call
        var target = ArrayList_init_$Create$_0(this_0.m());
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = this_0.m() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = this_0.n(index);
            // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
            // Inline function 'kotlin.collections.plusAssign' call
            // Inline function 'androidx.compose.runtime.ComposerImpl.reportFreeMovableContent.reportGroup.<anonymous>' call
            var element = to(item.u1g_1, item.w1g_1);
            target.a1(element);
          }
           while (inductionVariable <= last);
        var invalidations = target;
        var reference = new MovableContentStateReference(movableContent, parameter, this$0.n1h_1, this$0.j1h_1, anchor, invalidations, currentCompositionLocalScope_0(this$0, group));
        this$0.i1h_1.n1r(reference);
        this$0.u1i_1.o1r();
        this$0.u1i_1.p1r(this$0.n1h_1, this$0.i1h_1, reference);
        var tmp_2;
        if (needsNodeDelete) {
          this$0.u1i_1.q1r(nodeIndex, group);
          tmp_2 = 0;
        } else {
          tmp_2 = reader.v1o(group);
        }
        tmp_0 = tmp_2;
      } else {
        if (key === 206 ? equals(objectKey, get_reference()) : false) {
          var tmp_3 = reader.c1r(group, 0);
          var contextHolder = tmp_3 instanceof CompositionContextHolder ? tmp_3 : null;
          if (!(contextHolder == null)) {
            var compositionContext = contextHolder.d1r_1;
            // Inline function 'kotlin.collections.forEach' call
            var tmp0_iterator = compositionContext.j1r_1.o();
            while (tmp0_iterator.d1()) {
              var element_0 = tmp0_iterator.f1();
              // Inline function 'androidx.compose.runtime.ComposerImpl.reportFreeMovableContent.reportGroup.<anonymous>' call
              reportAllMovableContent(element_0);
              this$0.i1h_1.m1r(element_0.n1h_1);
            }
          }
          tmp_0 = reader.v1o(group);
        } else {
          if (reader.u1o(group)) {
            tmp_0 = 1;
          } else {
            tmp_0 = reader.v1o(group);
          }
        }
      }
      tmp = tmp_0;
    } else if (reader.b1r(group)) {
      var size = reader.a1o(group);
      var end_0 = group + size | 0;
      var current = group + 1 | 0;
      var runningNodeCount = 0;
      while (current < end_0) {
        var isNode = reader.u1o(current);
        if (isNode) {
          this$0.u1i_1.e1o();
          this$0.u1i_1.w1o(reader.t1q(current));
        }
        runningNodeCount = runningNodeCount + reportFreeMovableContent$reportGroup(this$0, current, isNode ? true : needsNodeDelete, isNode ? 0 : nodeIndex + runningNodeCount | 0) | 0;
        if (isNode) {
          this$0.u1i_1.e1o();
          this$0.u1i_1.h1o();
        }
        current = current + reader.a1o(current) | 0;
      }
      tmp = reader.u1o(group) ? 1 : runningNodeCount;
    } else if (reader.u1o(group)) {
      tmp = 1;
    } else {
      tmp = reader.v1o(group);
    }
    return tmp;
  }
  function ComposerImpl$derivedStateObserver$1(this$0) {
    this.s1r_1 = this$0;
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.t1r(p0, p1);
    };
  }
  function ComposerImpl$invokeMovableContentLambda$lambda($content, $parameter) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C3005@114008L18:Composer.kt#9igjgp');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.v1r()) {
        if (isTraceInProgress()) {
          traceEventStart(316014703, $changed, -1, 'androidx.compose.runtime.ComposerImpl.invokeMovableContentLambda.<anonymous> (Composer.kt:3005)');
        }
        $content.u1r_1($parameter, $composer_0, 8);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.m1m();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda(this$0, $offsetChanges, $reader, $to) {
    return function () {
      var this_0 = this$0.u1i_1;
      var newChangeList = $offsetChanges;
      var previousChangeList = this_0.z1j_1;
      var tmp;
      try {
        this_0.z1j_1 = newChangeList;
        $l$block: {
          // Inline function 'androidx.compose.runtime.ComposerImpl.withReader' call
          var this_1 = this$0;
          var reader = $reader;
          var savedReader = this_1.o1i_1;
          var savedCountOverrides = this_1.u1h_1;
          var savedProviderUpdates = this_1.c1i_1;
          this_1.u1h_1 = null;
          this_1.c1i_1 = null;
          try {
            this_1.o1i_1 = reader;
            var this_2 = this$0.u1i_1;
            var previousImplicitRootStart = this_2.c1k_1;
            var tmp_0;
            try {
              this_2.c1k_1 = false;
              invokeMovableContentLambda(this$0, $to.i1p_1, $to.o1p_1, $to.j1p_1, true);
              tmp_0 = Unit_instance;
            }finally {
              this_2.c1k_1 = previousImplicitRootStart;
            }
            break $l$block;
          }finally {
            this_1.o1i_1 = savedReader;
            this_1.u1h_1 = savedCountOverrides;
            this_1.c1i_1 = savedProviderUpdates;
          }
        }
        tmp = tmp_0;
      }finally {
        this_0.z1j_1 = previousChangeList;
      }
      return Unit_instance;
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_0(this$0, $to) {
    return function () {
      invokeMovableContentLambda(this$0, $to.i1p_1, $to.o1p_1, $to.j1p_1, true);
      return Unit_instance;
    };
  }
  function ComposerImpl(applier, parentContext, slotTable, abandonSet, changes, lateChanges, composition) {
    this.h1h_1 = applier;
    this.i1h_1 = parentContext;
    this.j1h_1 = slotTable;
    this.k1h_1 = abandonSet;
    this.l1h_1 = changes;
    this.m1h_1 = lateChanges;
    this.n1h_1 = composition;
    this.o1h_1 = new Stack();
    this.p1h_1 = null;
    this.q1h_1 = 0;
    this.r1h_1 = new IntStack();
    this.s1h_1 = 0;
    this.t1h_1 = new IntStack();
    this.u1h_1 = null;
    this.v1h_1 = null;
    this.w1h_1 = false;
    this.x1h_1 = false;
    this.y1h_1 = false;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.z1h_1 = ArrayList_init_$Create$();
    this.a1i_1 = new IntStack();
    this.b1i_1 = persistentCompositionLocalHashMapOf();
    this.c1i_1 = null;
    this.d1i_1 = false;
    this.e1i_1 = new IntStack();
    this.f1i_1 = false;
    this.g1i_1 = -1;
    this.h1i_1 = 0;
    this.i1i_1 = 0;
    this.j1i_1 = false;
    var tmp_0 = this;
    tmp_0.k1i_1 = new ComposerImpl$derivedStateObserver$1(this);
    this.l1i_1 = new Stack();
    this.m1i_1 = false;
    this.n1i_1 = false;
    var tmp_1 = this;
    // Inline function 'kotlin.also' call
    var this_0 = this.j1h_1.m1j();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.reader.<anonymous>' call
    this_0.y1k();
    tmp_1.o1i_1 = this_0;
    this.p1i_1 = new SlotTable();
    var tmp_2 = this;
    // Inline function 'kotlin.also' call
    var this_1 = this.p1i_1.l1m();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.writer.<anonymous>' call
    this_1.y1k();
    tmp_2.q1i_1 = this_1;
    this.r1i_1 = false;
    this.s1i_1 = null;
    this.t1i_1 = null;
    this.u1i_1 = new ComposerChangeListWriter(this, this.l1h_1);
    var tmp_3 = this;
    // Inline function 'androidx.compose.runtime.SlotTable.read' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
    var reader = this.p1i_1.m1j();
    var tmp_4;
    try {
      // Inline function 'androidx.compose.runtime.ComposerImpl.insertAnchor.<anonymous>' call
      tmp_4 = reader.j1n(0);
    }finally {
      reader.y1k();
    }
    tmp_3.v1i_1 = tmp_4;
    this.w1i_1 = new FixupList();
    this.x1i_1 = false;
    this.y1i_1 = 0;
    this.z1i_1 = false;
    this.a1j_1 = true;
    this.b1j_1 = new IntStack();
  }
  protoOf(ComposerImpl).w1r = function () {
    return this.h1h_1;
  };
  protoOf(ComposerImpl).x1r = function () {
    return this.h1i_1 > 0;
  };
  protoOf(ComposerImpl).y1r = function () {
    return this.i1h_1.z1r();
  };
  protoOf(ComposerImpl).a1s = function (key) {
    return start(this, key, null, Companion_getInstance_1().y1l_1, null);
  };
  protoOf(ComposerImpl).b1s = function () {
    return endGroup(this);
  };
  protoOf(ComposerImpl).c1s = function () {
    return start(this, -127, null, Companion_getInstance_1().y1l_1, null);
  };
  protoOf(ComposerImpl).d1s = function () {
    endGroup(this);
    var scope = this.e1s();
    if (!(scope == null) ? scope.x1n() : false) {
      scope.f1s(true);
    }
  };
  protoOf(ComposerImpl).g1s = function () {
    var tmp;
    if (!this.v1r() ? true : this.d1i_1) {
      tmp = true;
    } else {
      var tmp0_safe_receiver = this.e1s();
      tmp = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.g1s()) === true;
    }
    return tmp;
  };
  protoOf(ComposerImpl).d1p = function (key, dataKey) {
    return start(this, key, dataKey, Companion_getInstance_1().y1l_1, null);
  };
  protoOf(ComposerImpl).g1p = function () {
    return endGroup(this);
  };
  protoOf(ComposerImpl).h1s = function () {
    this.c1i_1 = null;
  };
  protoOf(ComposerImpl).i1s = function () {
    return this.x1i_1;
  };
  protoOf(ComposerImpl).v1r = function () {
    var tmp;
    var tmp_0;
    if ((!this.x1i_1 ? !this.f1i_1 : false) ? !this.d1i_1 : false) {
      var tmp0_safe_receiver = this.e1s();
      tmp_0 = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j1s()) === false;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !this.x1h_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).q1g = function () {
    return this.y1i_1;
  };
  protoOf(ComposerImpl).ss = function () {
    $l$block: {
      // Inline function 'androidx.compose.runtime.trace' call
      var sectionName = 'Compose:Composer.dispose';
      var token = Trace_instance.d1q(sectionName);
      try {
        this.i1h_1.k1s(this);
        this.l1s();
        this.h1h_1.h1();
        this.n1i_1 = true;
        break $l$block;
      }finally {
        Trace_instance.s1q(token);
      }
    }
  };
  protoOf(ComposerImpl).l1s = function () {
    this.l1i_1.h1();
    this.z1h_1.h1();
    this.l1h_1.h1();
    this.c1i_1 = null;
  };
  protoOf(ComposerImpl).n1s = function () {
    start(this, 125, null, Companion_getInstance_1().a1m_1, null);
    this.y1h_1 = true;
  };
  protoOf(ComposerImpl).o1s = function (factory) {
    validateNodeExpected(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!this.x1i_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.createNode.<anonymous>' call
      var message = 'createNode() can only be called when inserting';
      composeRuntimeError(toString(message));
    }
    var insertIndex = this.r1h_1.p1s();
    var groupAnchor = this.q1i_1.j1n(this.q1i_1.t1l_1);
    this.s1h_1 = this.s1h_1 + 1 | 0;
    this.w1i_1.q1s(factory, insertIndex, groupAnchor);
  };
  protoOf(ComposerImpl).r1s = function () {
    validateNodeExpected(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.x1i_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.useNode.<anonymous>' call
      var message = 'useNode() called while inserting';
      composeRuntimeError(toString(message));
    }
    var node = _get_node__db0vwp(this.o1i_1, this);
    this.u1i_1.w1o(node);
    var tmp;
    if (this.f1i_1) {
      tmp = !(node == null) ? isInterface(node, ComposeNodeLifecycleCallback) : false;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.u1i_1.s1s(node);
    }
  };
  protoOf(ComposerImpl).t1s = function () {
    return end(this, true);
  };
  protoOf(ComposerImpl).u1s = function (value, block) {
    if (this.x1i_1) {
      this.w1i_1.w1s(value, block);
    } else {
      this.u1i_1.v1s(value, block);
    }
  };
  protoOf(ComposerImpl).c1m = function () {
    var tmp;
    if (this.x1i_1) {
      validateNodeNotExpected(this);
      tmp = Companion_getInstance_0().s1m_1;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.nextSlot.<anonymous>' call
      var it = this.o1i_1.f1();
      var tmp_0;
      var tmp_1;
      if (this.f1i_1) {
        tmp_1 = !(!(it == null) ? isInterface(it, ReusableRememberObserver) : false);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = Companion_getInstance_0().s1m_1;
      } else {
        tmp_0 = it;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(ComposerImpl).x1s = function () {
    var tmp;
    if (this.x1i_1) {
      validateNodeNotExpected(this);
      tmp = Companion_getInstance_0().s1m_1;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.nextSlotForCache.<anonymous>' call
      var it = this.o1i_1.f1();
      var tmp_0;
      var tmp_1;
      if (this.f1i_1) {
        tmp_1 = !(!(it == null) ? isInterface(it, ReusableRememberObserver) : false);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = Companion_getInstance_0().s1m_1;
      } else {
        if (it instanceof RememberObserverHolder) {
          tmp_0 = it.y1s_1;
        } else {
          tmp_0 = it;
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(ComposerImpl).s1j = function (value) {
    var tmp;
    if (!equals(this.c1m(), value)) {
      this.d1m(value);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).z1s = function (value) {
    var tmp;
    if (!(this.c1m() === value)) {
      this.d1m(value);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).a1t = function (value) {
    var next = this.c1m();
    if (!(next == null) ? typeof next === 'boolean' : false) {
      var nextPrimitive = next;
      if (value === nextPrimitive)
        return false;
    }
    this.d1m(value);
    return true;
  };
  protoOf(ComposerImpl).b1t = function (value) {
    var next = this.c1m();
    if (next instanceof Long) {
      var nextPrimitive = next;
      if (value.equals(nextPrimitive))
        return false;
    }
    this.d1m(value);
    return true;
  };
  protoOf(ComposerImpl).c1t = function (value) {
    var next = this.c1m();
    if (!(next == null) ? typeof next === 'number' : false) {
      var nextPrimitive = next;
      if (value === nextPrimitive)
        return false;
    }
    this.d1m(value);
    return true;
  };
  protoOf(ComposerImpl).d1m = function (value) {
    if (this.x1i_1) {
      this.q1i_1.f1t(value);
    } else {
      var groupSlotIndex = this.o1i_1.d1t() - 1 | 0;
      this.u1i_1.e1t(value, groupSlotIndex);
    }
  };
  protoOf(ComposerImpl).g1t = function (value) {
    var tmp;
    if (!(value == null) ? isInterface(value, RememberObserver) : false) {
      if (this.x1i_1) {
        this.u1i_1.h1t(value);
      }
      this.k1h_1.a1(value);
      tmp = new RememberObserverHolder(value);
    } else {
      tmp = value;
    }
    var toStore = tmp;
    this.d1m(toStore);
  };
  protoOf(ComposerImpl).i1t = function (effect) {
    this.u1i_1.j1t(effect);
  };
  protoOf(ComposerImpl).k1t = function () {
    return currentCompositionLocalScope(this);
  };
  protoOf(ComposerImpl).l1t = function (value) {
    var parentScope = currentCompositionLocalScope(this);
    startGroup_0(this, 201, get_provider());
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.startProvider.<anonymous>' call
    var it = this.m1t();
    var tmp;
    if (equals(it, Companion_getInstance_0().s1m_1)) {
      tmp = null;
    } else {
      tmp = (!(it == null) ? isInterface(it, State_0) : false) ? it : THROW_CCE();
    }
    var oldState = tmp;
    var tmp_0 = value.n1t_1;
    var local = tmp_0 instanceof CompositionLocal ? tmp_0 : THROW_CCE();
    var state = local.r1t(value.o1t_1, oldState);
    var change = !equals(state, oldState);
    if (change) {
      this.s1t(state);
    }
    var providers;
    var invalid;
    if (this.x1i_1) {
      providers = parentScope.t1t(local, state);
      invalid = false;
      this.r1i_1 = true;
    } else {
      var tmp_1 = this.o1i_1.e1m(this.o1i_1.s1k_1);
      var oldScope = (!(tmp_1 == null) ? isInterface(tmp_1, PersistentCompositionLocalMap) : false) ? tmp_1 : THROW_CCE();
      providers = ((!this.v1r() ? true : change) ? value.p1t_1 ? true : !contains_0(parentScope, local) : false) ? parentScope.t1t(local, state) : oldScope;
      invalid = this.f1i_1 ? true : !(oldScope === providers);
    }
    if (invalid ? !this.x1i_1 : false) {
      recordProviderUpdate(this, providers);
    }
    this.e1i_1.r1j(asInt(this.d1i_1));
    this.d1i_1 = invalid;
    this.s1i_1 = providers;
    start(this, 202, get_compositionLocalMap(), Companion_getInstance_1().y1l_1, providers);
  };
  protoOf(ComposerImpl).u1t = function () {
    endGroup(this);
    endGroup(this);
    this.d1i_1 = asBool(this.e1i_1.w1n());
    this.s1i_1 = null;
  };
  protoOf(ComposerImpl).v1t = function (values) {
    var parentScope = currentCompositionLocalScope(this);
    startGroup_0(this, 201, get_provider());
    var providers;
    var invalid;
    if (this.x1i_1) {
      var currentProviders = updateCompositionMap(values, parentScope);
      providers = updateProviderMapGroup(this, parentScope, currentProviders);
      invalid = false;
      this.r1i_1 = true;
    } else {
      var tmp = this.o1i_1.w1t(0);
      var oldScope = (!(tmp == null) ? isInterface(tmp, PersistentCompositionLocalMap) : false) ? tmp : THROW_CCE();
      var tmp_0 = this.o1i_1.w1t(1);
      var oldValues = (!(tmp_0 == null) ? isInterface(tmp_0, PersistentCompositionLocalMap) : false) ? tmp_0 : THROW_CCE();
      var currentProviders_0 = updateCompositionMap(values, parentScope, oldValues);
      if ((!this.v1r() ? true : this.f1i_1) ? true : !equals(oldValues, currentProviders_0)) {
        providers = updateProviderMapGroup(this, parentScope, currentProviders_0);
        invalid = this.f1i_1 ? true : !equals(providers, oldScope);
      } else {
        skipGroup(this);
        providers = oldScope;
        invalid = false;
      }
    }
    if (invalid ? !this.x1i_1 : false) {
      recordProviderUpdate(this, providers);
    }
    this.e1i_1.r1j(asInt(this.d1i_1));
    this.d1i_1 = invalid;
    this.s1i_1 = providers;
    start(this, 202, get_compositionLocalMap(), Companion_getInstance_1().y1l_1, providers);
  };
  protoOf(ComposerImpl).x1t = function () {
    endGroup(this);
    endGroup(this);
    this.d1i_1 = asBool(this.e1i_1.w1n());
    this.s1i_1 = null;
  };
  protoOf(ComposerImpl).y1t = function (key) {
    return read(currentCompositionLocalScope(this), key);
  };
  protoOf(ComposerImpl).e1s = function () {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.<get-currentRecomposeScope>.<anonymous>' call
    var it = this.l1i_1;
    return (this.h1i_1 === 0 ? it.pn() : false) ? it.p1s() : null;
  };
  protoOf(ComposerImpl).z1p = function (scope, instance) {
    var tmp0_elvis_lhs = scope.a1h_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var anchor = tmp;
    var slotTable = this.o1i_1.l1k_1;
    var location = anchor.z1t(slotTable);
    if (this.m1i_1 ? location >= this.o1i_1.s1k_1 : false) {
      insertIfMissing(this.z1h_1, location, scope, instance);
      return true;
    }
    return false;
  };
  protoOf(ComposerImpl).r1q = function () {
    if (this.z1h_1.u()) {
      skipGroup(this);
    } else {
      var reader = this.o1i_1;
      var key = reader.e1n();
      var dataKey = reader.g1n();
      var aux = reader.o1m();
      updateCompoundKeyWhenWeEnterGroup(this, key, dataKey, aux);
      startReaderGroup(this, reader.a1u(), null);
      recomposeToGroupEnd(this);
      reader.j1o();
      updateCompoundKeyWhenWeExitGroup(this, key, dataKey, aux);
    }
  };
  protoOf(ComposerImpl).m1m = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.s1h_1 === 0)) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.skipToGroupEnd.<anonymous>' call
      var message = 'No nodes can be emitted before calling skipAndEndGroup';
      composeRuntimeError(toString(message));
    }
    var tmp0_safe_receiver = this.e1s();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.b1u();
    }
    if (this.z1h_1.u()) {
      skipReaderToGroupEnd(this);
    } else {
      recomposeToGroupEnd(this);
    }
  };
  protoOf(ComposerImpl).c1u = function (key) {
    start(this, key, null, Companion_getInstance_1().y1l_1, null);
    addRecomposeScope(this);
    return this;
  };
  protoOf(ComposerImpl).d1u = function () {
    var scope = this.l1i_1.pn() ? this.l1i_1.w1n() : null;
    if (scope != null) {
      scope.b1p(false);
    }
    var tmp2_safe_receiver = scope == null ? null : scope.e1u(this.i1i_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.u1i_1.f1u(tmp2_safe_receiver, this.n1h_1);
    }
    var tmp;
    if ((!(scope == null) ? !scope.h1u() : false) ? scope.x1n() ? true : this.w1h_1 : false) {
      if (scope.a1h_1 == null) {
        var tmp_0 = scope;
        var tmp_1;
        if (this.x1i_1) {
          tmp_1 = this.q1i_1.j1n(this.q1i_1.t1l_1);
        } else {
          tmp_1 = this.o1i_1.j1n(this.o1i_1.u1k_1);
        }
        tmp_0.a1h_1 = tmp_1;
      }
      scope.g1u(false);
      tmp = scope;
    } else {
      tmp = null;
    }
    var result = tmp;
    end(this, false);
    return result;
  };
  protoOf(ComposerImpl).i1u = function (references) {
    var completed = false;
    try {
      insertMovableContentGuarded(this, references);
      completed = true;
    }finally {
      if (completed) {
        cleanUpCompose(this);
      } else {
        abortRoot(this);
      }
    }
  };
  protoOf(ComposerImpl).j1u = function (sourceInformation) {
    if (this.x1i_1 ? this.j1i_1 : false) {
      this.q1i_1.k1u(sourceInformation);
    }
  };
  protoOf(ComposerImpl).l1u = function (key, sourceInformation) {
    if (this.x1i_1 ? this.j1i_1 : false) {
      this.q1i_1.m1u(key, sourceInformation);
    }
  };
  protoOf(ComposerImpl).n1u = function () {
    if (this.x1i_1 ? this.j1i_1 : false) {
      this.q1i_1.o1u();
    }
  };
  protoOf(ComposerImpl).p1u = function (invalidationsRequested, content) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!this.l1h_1.u()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.composeContent.<anonymous>' call
      var message = 'Expected applyChanges() to have been called';
      composeRuntimeError(toString(message));
    }
    doCompose(this, invalidationsRequested, content);
  };
  protoOf(ComposerImpl).q1u = function (block) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.m1i_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.prepareCompose.<anonymous>' call
      var message = 'Preparing a composition while composing is not supported';
      composeRuntimeError(toString(message));
    }
    this.m1i_1 = true;
    try {
      block();
    }finally {
      this.m1i_1 = false;
    }
  };
  protoOf(ComposerImpl).r1u = function (invalidationsRequested) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!this.l1h_1.u()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.recompose.<anonymous>' call
      var message = 'Expected applyChanges() to have been called';
      composeRuntimeError(toString(message));
    }
    var tmp;
    var tmp_0;
    if (invalidationsRequested.pn()) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp_0 = !this.z1h_1.u();
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = this.x1h_1;
    }
    if (tmp) {
      doCompose(this, invalidationsRequested, null);
      return this.l1h_1.pn();
    }
    return false;
  };
  protoOf(ComposerImpl).s1u = function () {
    return this.e1s();
  };
  protoOf(ComposerImpl).m1t = function () {
    return this.x1s();
  };
  protoOf(ComposerImpl).s1t = function (value) {
    return this.g1t(value);
  };
  protoOf(ComposerImpl).t1u = function (scope) {
    var tmp0_safe_receiver = scope instanceof RecomposeScopeImpl ? scope : null;
    if (tmp0_safe_receiver != null) {
      tmp0_safe_receiver.u1u(true);
    }
  };
  function Composer$Companion$Empty$1() {
  }
  protoOf(Composer$Companion$Empty$1).toString = function () {
    return 'Empty';
  };
  function Companion() {
    Companion_instance_0 = this;
    var tmp = this;
    tmp.s1m_1 = new Composer$Companion$Empty$1();
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function Composer() {
  }
  var InvalidationResult_IGNORED_instance;
  var InvalidationResult_SCHEDULED_instance;
  var InvalidationResult_DEFERRED_instance;
  var InvalidationResult_IMMINENT_instance;
  var InvalidationResult_entriesInitialized;
  function InvalidationResult_initEntries() {
    if (InvalidationResult_entriesInitialized)
      return Unit_instance;
    InvalidationResult_entriesInitialized = true;
    InvalidationResult_IGNORED_instance = new InvalidationResult('IGNORED', 0);
    InvalidationResult_SCHEDULED_instance = new InvalidationResult('SCHEDULED', 1);
    InvalidationResult_DEFERRED_instance = new InvalidationResult('DEFERRED', 2);
    InvalidationResult_IMMINENT_instance = new InvalidationResult('IMMINENT', 3);
  }
  function InvalidationResult(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function composeRuntimeError(message) {
    _init_properties_Composer_kt__bmp4g0();
    throw new ComposeRuntimeError('Compose Runtime internal error. Unexpected or incorrect use of the Compose ' + ('internal runtime API (' + message + '). Please report to Google or use ') + 'https://goo.gle/compose-feedback');
  }
  function removeCurrentGroup(_this__u8e3s4, rememberManager) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = _this__u8e3s4.v1u();
    while (tmp0_iterator.d1()) {
      var slot = tmp0_iterator.f1();
      if (!(slot == null) ? isInterface(slot, ComposeNodeLifecycleCallback) : false) {
        rememberManager.w1u(slot);
      }
      if (slot instanceof RememberObserverHolder) {
        rememberManager.x1u(slot.y1s_1);
      }
      if (slot instanceof RecomposeScopeImpl) {
        slot.mv();
      }
    }
    _this__u8e3s4.y1u();
  }
  function MovableContentStateReference(content, parameter, composition, slotTable, anchor, invalidations, locals) {
    this.i1p_1 = content;
    this.j1p_1 = parameter;
    this.k1p_1 = composition;
    this.l1p_1 = slotTable;
    this.m1p_1 = anchor;
    this.n1p_1 = invalidations;
    this.o1p_1 = locals;
  }
  function runtimeCheck(value) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp;
    if (!value) {
      // Inline function 'androidx.compose.runtime.runtimeCheck.<anonymous>' call
      var message = 'Check failed';
      composeRuntimeError(toString(message));
    }
    return tmp;
  }
  function MovableContentState(slotTable) {
    this.s1p_1 = slotTable;
  }
  function deactivateCurrentGroup(_this__u8e3s4, rememberManager) {
    _init_properties_Composer_kt__bmp4g0();
    var start = _this__u8e3s4.r1l_1;
    var end = _this__u8e3s4.s1l_1;
    var inductionVariable = start;
    if (inductionVariable < end)
      do {
        var group = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var node = _this__u8e3s4.t1q(group);
        if (!(node == null) ? isInterface(node, ComposeNodeLifecycleCallback) : false) {
          rememberManager.z1u(node);
        }
        // Inline function 'androidx.compose.runtime.SlotWriter.forEachData' call
        var address = groupIndexToAddress(_this__u8e3s4, group);
        var slotsStart = slotIndex(_this__u8e3s4.b1l_1, _this__u8e3s4, address);
        var slotsEnd = dataIndex_0(_this__u8e3s4.b1l_1, _this__u8e3s4, groupIndexToAddress(_this__u8e3s4, group + 1 | 0));
        var inductionVariable_0 = slotsStart;
        if (inductionVariable_0 < slotsEnd)
          do {
            var slot = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'androidx.compose.runtime.deactivateCurrentGroup.<anonymous>' call
            var index = slot - slotsStart | 0;
            var data = _this__u8e3s4.c1l_1[dataIndexToDataAddress(_this__u8e3s4, slot)];
            if (data instanceof RememberObserverHolder) {
              var wrapped = data.y1s_1;
              if (!isInterface(wrapped, ReusableRememberObserver)) {
                removeData(_this__u8e3s4, group, index, data);
                rememberManager.x1u(wrapped);
              }
            } else {
              if (data instanceof RecomposeScopeImpl) {
                removeData(_this__u8e3s4, group, index, data);
                data.mv();
              }
            }
          }
           while (inductionVariable_0 < slotsEnd);
      }
       while (inductionVariable < end);
  }
  function sourceInformation(composer, sourceInformation) {
    _init_properties_Composer_kt__bmp4g0();
    composer.j1u(sourceInformation);
  }
  function isTraceInProgress() {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.isTraceInProgress.<anonymous>' call
    var it = get_compositionTracer();
    return !(it == null) ? it.a1v() : false;
  }
  function traceEventStart(key, dirty1, dirty2, info) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = get_compositionTracer();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.b1v(key, dirty1, dirty2, info);
    }
  }
  function traceEventEnd() {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = get_compositionTracer();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.c1v();
    }
  }
  function MovableContent() {
  }
  function ComposeRuntimeError(message) {
    IllegalStateException_init_$Init$(this);
    captureStack(this, ComposeRuntimeError);
    this.d1v_1 = message;
  }
  protoOf(ComposeRuntimeError).w6 = function () {
    return this.d1v_1;
  };
  function RememberObserverHolder(wrapped) {
    this.y1s_1 = wrapped;
  }
  function Pending$keyMap$delegate$lambda(this$0) {
    return function () {
      // Inline function 'kotlin.also' call
      var this_0 = multiMap();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Pending.keyMap$delegate.<anonymous>.<anonymous>' call
      var inductionVariable = 0;
      var last = this$0.w1m_1.m();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var keyInfo = this$0.w1m_1.n(index);
          put(this_0, get_joinedKey(keyInfo), keyInfo);
        }
         while (inductionVariable < last);
      return this_0;
    };
  }
  function Pending(keyInfos, startIndex) {
    this.w1m_1 = keyInfos;
    this.x1m_1 = startIndex;
    this.y1m_1 = 0;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.x1m_1 >= 0)) {
      // Inline function 'androidx.compose.runtime.Pending.<anonymous>' call
      var message = 'Invalid start index';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.z1m_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Pending.groupInfos.<anonymous>' call
    var runningNodeIndex = 0;
    // Inline function 'kotlin.collections.hashMapOf' call
    var result = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = this.w1m_1.m();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var keyInfo = this.w1m_1.n(index);
        // Inline function 'kotlin.collections.set' call
        var key = keyInfo.m1n_1;
        var value = new GroupInfo(index, runningNodeIndex, keyInfo.n1n_1);
        result.n2(key, value);
        runningNodeIndex = runningNodeIndex + keyInfo.n1n_1 | 0;
      }
       while (inductionVariable < last);
    tmp_0.a1n_1 = result;
    var tmp_1 = this;
    tmp_1.b1n_1 = lazy(Pending$keyMap$delegate$lambda(this));
  }
  protoOf(Pending).e1v = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.b1n_1;
    keyMap$factory();
    return this_0.q2();
  };
  protoOf(Pending).h1n = function (key, dataKey) {
    var joinedKey = !(dataKey == null) ? new JoinedKey(key, dataKey) : key;
    return pop(this.e1v(), joinedKey);
  };
  protoOf(Pending).d1n = function (keyInfo) {
    return this.z1m_1.a1(keyInfo);
  };
  protoOf(Pending).x1n = function () {
    return this.z1m_1;
  };
  protoOf(Pending).r1n = function (from, to) {
    if (from > to) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = this.a1n_1.l2().o();
      while (tmp0_iterator.d1()) {
        var element = tmp0_iterator.f1();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveSlot.<anonymous>' call
        var position = element.f1v_1;
        if (position === from)
          element.f1v_1 = to;
        else if (to <= position ? position < from : false)
          element.f1v_1 = position + 1 | 0;
      }
    } else if (to > from) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = this.a1n_1.l2().o();
      while (tmp0_iterator_0.d1()) {
        var element_0 = tmp0_iterator_0.f1();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveSlot.<anonymous>' call
        var position_0 = element_0.f1v_1;
        if (position_0 === from)
          element_0.f1v_1 = to;
        else if ((from + 1 | 0) <= position_0 ? position_0 < to : false)
          element_0.f1v_1 = position_0 - 1 | 0;
      }
    }
  };
  protoOf(Pending).d1o = function (from, to, count) {
    if (from > to) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = this.a1n_1.l2().o();
      while (tmp0_iterator.d1()) {
        var element = tmp0_iterator.f1();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveNode.<anonymous>' call
        var position = element.g1v_1;
        if (from <= position ? position < (from + count | 0) : false)
          element.g1v_1 = to + (position - from | 0) | 0;
        else if (to <= position ? position < from : false)
          element.g1v_1 = position + count | 0;
      }
    } else if (to > from) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = this.a1n_1.l2().o();
      while (tmp0_iterator_0.d1()) {
        var element_0 = tmp0_iterator_0.f1();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveNode.<anonymous>' call
        var position_0 = element_0.g1v_1;
        if (from <= position_0 ? position_0 < (from + count | 0) : false)
          element_0.g1v_1 = to + (position_0 - from | 0) | 0;
        else if ((from + 1 | 0) <= position_0 ? position_0 < to : false)
          element_0.g1v_1 = position_0 - count | 0;
      }
    }
  };
  protoOf(Pending).c1n = function (keyInfo, insertIndex) {
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.a1n_1;
    var key = keyInfo.m1n_1;
    var value = new GroupInfo(-1, insertIndex, 0);
    this_0.n2(key, value);
  };
  protoOf(Pending).z1n = function (group, newCount) {
    var groupInfo = this.a1n_1.x2(group);
    if (!(groupInfo == null)) {
      var index = groupInfo.g1v_1;
      var difference = newCount - groupInfo.h1v_1 | 0;
      groupInfo.h1v_1 = newCount;
      if (!(difference === 0)) {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = this.a1n_1.l2().o();
        while (tmp0_iterator.d1()) {
          var element = tmp0_iterator.f1();
          // Inline function 'androidx.compose.runtime.Pending.updateNodeCount.<anonymous>' call
          if (element.g1v_1 >= index ? !equals(element, groupInfo) : false) {
            var newIndex = element.g1v_1 + difference | 0;
            if (newIndex >= 0)
              element.g1v_1 = newIndex;
          }
        }
      }
      return true;
    }
    return false;
  };
  protoOf(Pending).q1n = function (keyInfo) {
    var tmp0_safe_receiver = this.a1n_1.x2(keyInfo.m1n_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.f1v_1;
    return tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
  };
  protoOf(Pending).p1n = function (keyInfo) {
    var tmp0_safe_receiver = this.a1n_1.x2(keyInfo.m1n_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.g1v_1;
    return tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
  };
  protoOf(Pending).b1o = function (keyInfo) {
    var tmp0_safe_receiver = this.a1n_1.x2(keyInfo.m1n_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h1v_1;
    return tmp1_elvis_lhs == null ? keyInfo.n1n_1 : tmp1_elvis_lhs;
  };
  function _GroupKind___init__impl__iwqg06(value) {
    return value;
  }
  function _GroupKind___get_value__impl__cf5pqe($this) {
    return $this;
  }
  function Companion_0() {
    Companion_instance_1 = this;
    this.y1l_1 = _GroupKind___init__impl__iwqg06(0);
    this.z1l_1 = _GroupKind___init__impl__iwqg06(1);
    this.a1m_1 = _GroupKind___init__impl__iwqg06(2);
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_0();
    return Companion_instance_1;
  }
  function asInt(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return _this__u8e3s4 ? 1 : 0;
  }
  function ReusableRememberObserver() {
  }
  function ProvidedValue(compositionLocal, value, canOverride) {
    this.n1t_1 = compositionLocal;
    this.o1t_1 = value;
    this.p1t_1 = canOverride;
  }
  function asBool(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return !(_this__u8e3s4 === 0);
  }
  function removeRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findInsertLocation(_this__u8e3s4, start);
    $l$loop: while (index < _this__u8e3s4.m()) {
      var validation = _this__u8e3s4.n(index);
      if (validation.v1g_1 < end) {
        _this__u8e3s4.m1(index);
      } else
        break $l$loop;
    }
  }
  function firstInRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findInsertLocation(_this__u8e3s4, start);
    if (index < _this__u8e3s4.m()) {
      var firstInvalidation = _this__u8e3s4.n(index);
      if (firstInvalidation.v1g_1 < end)
        return firstInvalidation;
    }
    return null;
  }
  function removeLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findLocation(_this__u8e3s4, location);
    return index >= 0 ? _this__u8e3s4.m1(index) : null;
  }
  function nearestCommonRootOf(_this__u8e3s4, a, b, common) {
    _init_properties_Composer_kt__bmp4g0();
    if (a === b)
      return a;
    if (a === common ? true : b === common)
      return common;
    if (_this__u8e3s4.h1m(a) === b)
      return b;
    if (_this__u8e3s4.h1m(b) === a)
      return a;
    if (_this__u8e3s4.h1m(a) === _this__u8e3s4.h1m(b))
      return _this__u8e3s4.h1m(a);
    var currentA = a;
    var currentB = b;
    var aDistance = distanceFrom(_this__u8e3s4, a, common);
    var bDistance = distanceFrom(_this__u8e3s4, b, common);
    // Inline function 'kotlin.repeat' call
    var times = aDistance - bDistance | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.nearestCommonRootOf.<anonymous>' call
        currentA = _this__u8e3s4.h1m(currentA);
      }
       while (inductionVariable < times);
    // Inline function 'kotlin.repeat' call
    var times_0 = bDistance - aDistance | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < times_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.runtime.nearestCommonRootOf.<anonymous>' call
        currentB = _this__u8e3s4.h1m(currentB);
      }
       while (inductionVariable_0 < times_0);
    while (!(currentA === currentB)) {
      currentA = _this__u8e3s4.h1m(currentA);
      currentB = _this__u8e3s4.h1m(currentB);
    }
    return currentA;
  }
  function insertIfMissing(_this__u8e3s4, location, scope, instance) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findLocation(_this__u8e3s4, location);
    if (index < 0) {
      var tmp = -(index + 1 | 0) | 0;
      var tmp_0;
      if (instance == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.insertIfMissing.<anonymous>' call
        // Inline function 'kotlin.also' call
        var this_0 = new IdentityArraySet();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.insertIfMissing.<anonymous>.<anonymous>' call
        this_0.i1v(instance);
        tmp_0 = this_0;
      }
      _this__u8e3s4.y1(tmp, new Invalidation(scope, location, tmp_0));
    } else {
      if (instance == null) {
        _this__u8e3s4.n(index).w1g_1 = null;
      } else {
        var tmp1_safe_receiver = _this__u8e3s4.n(index).w1g_1;
        if (tmp1_safe_receiver == null)
          null;
        else
          tmp1_safe_receiver.i1v(instance);
      }
    }
  }
  function collectNodesFrom(_this__u8e3s4, anchor) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    // Inline function 'androidx.compose.runtime.SlotTable.read' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
    var reader = _this__u8e3s4.m1j();
    var tmp;
    try {
      var index = _this__u8e3s4.p1p(anchor);
      collectNodesFrom$_anonymous_$collectFromGroup_lmwduz(reader, result, index);
      tmp = Unit_instance;
    }finally {
      reader.y1k();
    }
    return result;
  }
  function filterToRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    var index = findInsertLocation(_this__u8e3s4, start);
    $l$loop: while (index < _this__u8e3s4.m()) {
      var invalidation = _this__u8e3s4.n(index);
      if (invalidation.v1g_1 < end) {
        result.a1(invalidation);
      } else
        break $l$loop;
      index = index + 1 | 0;
    }
    return result;
  }
  function removeData(_this__u8e3s4, group, index, data) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(data === _this__u8e3s4.j1v(group, index, Companion_getInstance_0().s1m_1))) {
      // Inline function 'androidx.compose.runtime.removeData.<anonymous>' call
      var message = 'Slot table is out of sync';
      composeRuntimeError(toString(message));
    }
  }
  function GroupInfo(slotIndex, nodeIndex, nodeCount) {
    this.f1v_1 = slotIndex;
    this.g1v_1 = nodeIndex;
    this.h1v_1 = nodeCount;
  }
  function put(_this__u8e3s4, key, value) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.getOrPut' call
    var value_0 = _this__u8e3s4.x2(key);
    var tmp;
    if (value_0 == null) {
      // Inline function 'androidx.compose.runtime.put.<anonymous>' call
      var answer = LinkedHashSet_init_$Create$();
      _this__u8e3s4.n2(key, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    return tmp.a1(value);
  }
  function get_joinedKey(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return !(_this__u8e3s4.l1n_1 == null) ? new JoinedKey(_this__u8e3s4.k1n_1, _this__u8e3s4.l1n_1) : _this__u8e3s4.k1n_1;
  }
  function multiMap() {
    _init_properties_Composer_kt__bmp4g0();
    return HashMap_init_$Create$();
  }
  function pop(_this__u8e3s4, key) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = _this__u8e3s4.x2(key);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.pop.<anonymous>' call
      remove(_this__u8e3s4, key, tmp1_safe_receiver);
      tmp = tmp1_safe_receiver;
    }
    return tmp;
  }
  function findInsertLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.findInsertLocation.<anonymous>' call
    var it = findLocation(_this__u8e3s4, location);
    return it < 0 ? -(it + 1 | 0) | 0 : it;
  }
  function findLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    var low = 0;
    var high = _this__u8e3s4.m() - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4.n(mid);
      var cmp = compareTo(midVal.v1g_1, location);
      if (cmp < 0)
        low = mid + 1 | 0;
      else if (cmp > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function distanceFrom(_this__u8e3s4, index, root) {
    _init_properties_Composer_kt__bmp4g0();
    var count = 0;
    var current = index;
    while (current > 0 ? !(current === root) : false) {
      current = _this__u8e3s4.h1m(current);
      count = count + 1 | 0;
    }
    return count;
  }
  function remove(_this__u8e3s4, key, value) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = _this__u8e3s4.x2(key);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.b1(value);
      var tmp_0;
      if (tmp0_safe_receiver.u()) {
        _this__u8e3s4.r2(key);
        tmp_0 = Unit_instance;
      }
      tmp = Unit_instance;
    }
    return tmp;
  }
  function sourceInformationMarkerStart(composer, key, sourceInformation) {
    _init_properties_Composer_kt__bmp4g0();
    composer.l1u(key, sourceInformation);
  }
  function sourceInformationMarkerEnd(composer) {
    _init_properties_Composer_kt__bmp4g0();
    composer.n1u();
  }
  function _Updater___init__impl__rbfxm8(composer) {
    return composer;
  }
  function _Updater___get_composer__impl__9ty7av($this) {
    return $this;
  }
  function Updater__set_impl_v7kwss($this, value, block) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var $this$with = _Updater___get_composer__impl__9ty7av($this);
    var tmp;
    if ($this$with.i1s() ? true : !equals($this$with.m1t(), value)) {
      $this$with.s1t(value);
      _Updater___get_composer__impl__9ty7av($this).u1s(value, block);
      tmp = Unit_instance;
    }
    return tmp;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.k1v_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).j9 = function (a, b) {
    return this.k1v_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.j9(a, b);
  };
  function collectNodesFrom$_anonymous_$collectFromGroup_lmwduz($reader, result, group) {
    if ($reader.u1o(group)) {
      result.a1($reader.t1q(group));
    } else {
      var current = group + 1 | 0;
      var end = group + $reader.a1o(group) | 0;
      while (current < end) {
        collectNodesFrom$_anonymous_$collectFromGroup_lmwduz($reader, result, current);
        current = current + $reader.a1o(current) | 0;
      }
    }
  }
  function InvalidationLocationAscending$lambda(i1, i2) {
    _init_properties_Composer_kt__bmp4g0();
    return compareTo(i1.v1g_1, i2.v1g_1);
  }
  function InvalidationResult_IGNORED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_IGNORED_instance;
  }
  function InvalidationResult_SCHEDULED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_SCHEDULED_instance;
  }
  function InvalidationResult_DEFERRED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_DEFERRED_instance;
  }
  function InvalidationResult_IMMINENT_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_IMMINENT_instance;
  }
  function keyMap$factory() {
    return getPropertyCallableRef('keyMap', 1, KProperty1, function (receiver) {
      return receiver.e1v();
    }, null);
  }
  var properties_initialized_Composer_kt_89qzc2;
  function _init_properties_Composer_kt__bmp4g0() {
    if (!properties_initialized_Composer_kt_89qzc2) {
      properties_initialized_Composer_kt_89qzc2 = true;
      compositionTracer = null;
      invocation = new OpaqueKey('provider');
      provider = new OpaqueKey('provider');
      compositionLocalMap = new OpaqueKey('compositionLocalMap');
      providerValues = new OpaqueKey('providerValues');
      providerMaps = new OpaqueKey('providers');
      reference = new OpaqueKey('reference');
      var tmp = InvalidationLocationAscending$lambda;
      InvalidationLocationAscending = new sam$kotlin_Comparator$0(tmp);
    }
  }
  function get_PendingApplyNoModifications() {
    _init_properties_Composition_kt__t5pjw8();
    return PendingApplyNoModifications;
  }
  var PendingApplyNoModifications;
  var CompositionImplServiceKey;
  function _get_areChildrenComposing__c1uwup($this) {
    return $this.c1w_1.x1r();
  }
  function composeInitial($this, content) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.f1w_1) {
      // Inline function 'androidx.compose.runtime.CompositionImpl.composeInitial.<anonymous>' call
      var message = 'The composition is disposed';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    $this.g1w_1 = content;
    $this.l1v_1.h1w($this, $this.g1w_1);
  }
  function drainPendingModificationsForCompositionLocked($this) {
    var toRecord = $this.n1v_1.j1w(get_PendingApplyNoModifications());
    if (toRecord != null) {
      if (equals(toRecord, get_PendingApplyNoModifications())) {
        composeRuntimeError('pending composition has not been applied');
      } else {
        if (!(toRecord == null) ? isInterface(toRecord, Set) : false) {
          addPendingInvalidationsLocked_0($this, (!(toRecord == null) ? isInterface(toRecord, Set) : false) ? toRecord : THROW_CCE(), true);
        } else {
          if (!(toRecord == null) ? isArray(toRecord) : false) {
            var indexedObject = (!(toRecord == null) ? isArray(toRecord) : false) ? toRecord : THROW_CCE();
            var inductionVariable = 0;
            var last = indexedObject.length;
            while (inductionVariable < last) {
              var changed = indexedObject[inductionVariable];
              inductionVariable = inductionVariable + 1 | 0;
              addPendingInvalidationsLocked_0($this, changed, true);
            }
          } else {
            composeRuntimeError('corrupt pendingModifications drain: ' + $this.n1v_1);
          }
        }
      }
    }
  }
  function drainPendingModificationsLocked($this) {
    var toRecord = $this.n1v_1.j1w(null);
    if (!equals(toRecord, get_PendingApplyNoModifications())) {
      if (!(toRecord == null) ? isInterface(toRecord, Set) : false) {
        addPendingInvalidationsLocked_0($this, (!(toRecord == null) ? isInterface(toRecord, Set) : false) ? toRecord : THROW_CCE(), false);
      } else {
        if (!(toRecord == null) ? isArray(toRecord) : false) {
          var indexedObject = (!(toRecord == null) ? isArray(toRecord) : false) ? toRecord : THROW_CCE();
          var inductionVariable = 0;
          var last = indexedObject.length;
          while (inductionVariable < last) {
            var changed = indexedObject[inductionVariable];
            inductionVariable = inductionVariable + 1 | 0;
            addPendingInvalidationsLocked_0($this, changed, false);
          }
        } else {
          if (toRecord == null) {
            composeRuntimeError('calling recordModificationsOf and applyChanges concurrently is not supported');
          } else {
            composeRuntimeError('corrupt pendingModifications drain: ' + $this.n1v_1);
          }
        }
      }
    }
  }
  function addPendingInvalidationsLocked(_this__u8e3s4, $this, value, forgetConditionalScopes) {
    var set = _this__u8e3s4;
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
    var value_0 = $this.r1v_1.k1w_1.x2(value);
    if (value_0 != null) {
      if (value_0 instanceof MutableScatterSet) {
        // Inline function 'androidx.collection.ScatterSet.forEach' call
        var this_0 = value_0 instanceof MutableScatterSet ? value_0 : THROW_CCE();
        // Inline function 'kotlin.contracts.contract' call
        var k = this_0.rn_1;
        $l$block: {
          // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
          // Inline function 'kotlin.contracts.contract' call
          var m = this_0.qn_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              if (!this_1.ob(this_1.kb().lb(7)).ob(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.ob(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                      var index = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                      // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
                      var tmp = k[index];
                      var scope = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                      if (!$this.w1v_1.n1w(value, scope) ? !scope.m1w(value).equals(InvalidationResult_IGNORED_getInstance()) : false) {
                        if (scope.l1w() ? !forgetConditionalScopes : false) {
                          $this.s1v_1.a1(scope);
                        } else {
                          if (set == null)
                            set = HashSet_init_$Create$();
                          var tmp0_safe_receiver = set;
                          if (tmp0_safe_receiver == null)
                            null;
                          else
                            tmp0_safe_receiver.a1(scope);
                        }
                      }
                    }
                    slot = slot.mb(8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  break $l$block;
                }
              }
            }
             while (!(i === lastIndex));
        }
      } else {
        // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
        var scope_0 = !(value_0 == null) ? value_0 : THROW_CCE();
        if (!$this.w1v_1.n1w(value, scope_0) ? !scope_0.m1w(value).equals(InvalidationResult_IGNORED_getInstance()) : false) {
          if (scope_0.l1w() ? !forgetConditionalScopes : false) {
            $this.s1v_1.a1(scope_0);
          } else {
            if (set == null)
              set = HashSet_init_$Create$();
            var tmp0_safe_receiver_0 = set;
            if (tmp0_safe_receiver_0 == null)
              null;
            else
              tmp0_safe_receiver_0.a1(scope_0);
          }
        }
      }
    }
    return set;
  }
  function addPendingInvalidationsLocked_0($this, values, forgetConditionalScopes) {
    var invalidated = {_v: null};
    // Inline function 'androidx.compose.runtime.collection.fastForEach' call
    if (values instanceof IdentityArraySet) {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values_0 = values.b1q_1;
      var inductionVariable = 0;
      var last = values.a1q_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
          var tmp = values_0[i];
          var value = !(tmp == null) ? tmp : THROW_CCE();
          if (value instanceof RecomposeScopeImpl) {
            value.m1w(null);
          } else {
            invalidated._v = addPendingInvalidationsLocked(invalidated._v, $this, value, forgetConditionalScopes);
            // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
            var value_0 = $this.t1v_1.k1w_1.x2(value);
            if (value_0 != null) {
              if (value_0 instanceof MutableScatterSet) {
                // Inline function 'androidx.collection.ScatterSet.forEach' call
                var this_0 = value_0 instanceof MutableScatterSet ? value_0 : THROW_CCE();
                // Inline function 'kotlin.contracts.contract' call
                var k = this_0.rn_1;
                $l$block: {
                  // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                  // Inline function 'kotlin.contracts.contract' call
                  var m = this_0.qn_1;
                  var lastIndex = m.length - 2 | 0;
                  var inductionVariable_0 = 0;
                  if (inductionVariable_0 <= lastIndex)
                    do {
                      var i_0 = inductionVariable_0;
                      inductionVariable_0 = inductionVariable_0 + 1 | 0;
                      var slot = m[i_0];
                      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                      var this_1 = slot;
                      if (!this_1.ob(this_1.kb().lb(7)).ob(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                        var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
                        var inductionVariable_1 = 0;
                        if (inductionVariable_1 < bitCount)
                          do {
                            var j = inductionVariable_1;
                            inductionVariable_1 = inductionVariable_1 + 1 | 0;
                            // Inline function 'androidx.collection.isFull' call
                            if (slot.ob(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                              var index = (i_0 << 3) + j | 0;
                              // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                              // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                              var tmp_0 = k[index];
                              var it = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                              invalidated._v = addPendingInvalidationsLocked(invalidated._v, $this, it, forgetConditionalScopes);
                            }
                            slot = slot.mb(8);
                          }
                           while (inductionVariable_1 < bitCount);
                        if (!(bitCount === 8)) {
                          break $l$block;
                        }
                      }
                    }
                     while (!(i_0 === lastIndex));
                }
              } else {
                // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                var it_0 = !(value_0 == null) ? value_0 : THROW_CCE();
                invalidated._v = addPendingInvalidationsLocked(invalidated._v, $this, it_0, forgetConditionalScopes);
              }
            }
          }
        }
         while (inductionVariable < last);
    } else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = values.o();
      while (tmp0_iterator.d1()) {
        var element = tmp0_iterator.f1();
        // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
        if (element instanceof RecomposeScopeImpl) {
          element.m1w(null);
        } else {
          invalidated._v = addPendingInvalidationsLocked(invalidated._v, $this, element, forgetConditionalScopes);
          // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
          var value_1 = $this.t1v_1.k1w_1.x2(element);
          if (value_1 != null) {
            if (value_1 instanceof MutableScatterSet) {
              // Inline function 'androidx.collection.ScatterSet.forEach' call
              var this_2 = value_1 instanceof MutableScatterSet ? value_1 : THROW_CCE();
              // Inline function 'kotlin.contracts.contract' call
              var k_0 = this_2.rn_1;
              $l$block_0: {
                // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                // Inline function 'kotlin.contracts.contract' call
                var m_0 = this_2.qn_1;
                var lastIndex_0 = m_0.length - 2 | 0;
                var inductionVariable_2 = 0;
                if (inductionVariable_2 <= lastIndex_0)
                  do {
                    var i_1 = inductionVariable_2;
                    inductionVariable_2 = inductionVariable_2 + 1 | 0;
                    var slot_0 = m_0[i_1];
                    // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                    var this_3 = slot_0;
                    if (!this_3.ob(this_3.kb().lb(7)).ob(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                      var bitCount_0 = 8 - (~(i_1 - lastIndex_0 | 0) >>> 31 | 0) | 0;
                      var inductionVariable_3 = 0;
                      if (inductionVariable_3 < bitCount_0)
                        do {
                          var j_0 = inductionVariable_3;
                          inductionVariable_3 = inductionVariable_3 + 1 | 0;
                          // Inline function 'androidx.collection.isFull' call
                          if (slot_0.ob(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                            var index_0 = (i_1 << 3) + j_0 | 0;
                            // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                            // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                            var tmp_1 = k_0[index_0];
                            var it_1 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                            invalidated._v = addPendingInvalidationsLocked(invalidated._v, $this, it_1, forgetConditionalScopes);
                          }
                          slot_0 = slot_0.mb(8);
                        }
                         while (inductionVariable_3 < bitCount_0);
                      if (!(bitCount_0 === 8)) {
                        break $l$block_0;
                      }
                    }
                  }
                   while (!(i_1 === lastIndex_0));
              }
            } else {
              // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
              var it_2 = !(value_1 == null) ? value_1 : THROW_CCE();
              invalidated._v = addPendingInvalidationsLocked(invalidated._v, $this, it_2, forgetConditionalScopes);
            }
          }
        }
      }
    }
    var tmp_2;
    if (forgetConditionalScopes) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp_2 = !$this.s1v_1.u();
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf' call
      // Inline function 'androidx.collection.MutableScatterMap.removeIf' call
      var this_4 = $this.r1v_1.k1w_1;
      $l$block_2: {
        // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
        var m_1 = this_4.bn_1;
        var lastIndex_1 = m_1.length - 2 | 0;
        var inductionVariable_4 = 0;
        if (inductionVariable_4 <= lastIndex_1)
          do {
            var i_2 = inductionVariable_4;
            inductionVariable_4 = inductionVariable_4 + 1 | 0;
            var slot_1 = m_1[i_2];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_5 = slot_1;
            if (!this_5.ob(this_5.kb().lb(7)).ob(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
              var bitCount_1 = 8 - (~(i_2 - lastIndex_1 | 0) >>> 31 | 0) | 0;
              var inductionVariable_5 = 0;
              if (inductionVariable_5 < bitCount_1)
                do {
                  var j_1 = inductionVariable_5;
                  inductionVariable_5 = inductionVariable_5 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot_1.ob(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                    var index_1 = (i_2 << 3) + j_1 | 0;
                    // Inline function 'androidx.collection.MutableScatterMap.removeIf.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf.<anonymous>' call
                    var tmp_3 = this_4.cn_1[index_1];
                    (tmp_3 == null ? true : !(tmp_3 == null)) || THROW_CCE();
                    var tmp_4 = this_4.dn_1[index_1];
                    var value_2 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
                    var tmp_5;
                    if (value_2 instanceof MutableScatterSet) {
                      var set = value_2 instanceof MutableScatterSet ? value_2 : THROW_CCE();
                      // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
                      var elements = set.rn_1;
                      $l$block_1: {
                        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                        // Inline function 'kotlin.contracts.contract' call
                        var m_2 = set.qn_1;
                        var lastIndex_2 = m_2.length - 2 | 0;
                        var inductionVariable_6 = 0;
                        if (inductionVariable_6 <= lastIndex_2)
                          do {
                            var i_3 = inductionVariable_6;
                            inductionVariable_6 = inductionVariable_6 + 1 | 0;
                            var slot_2 = m_2[i_3];
                            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                            var this_6 = slot_2;
                            if (!this_6.ob(this_6.kb().lb(7)).ob(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                              var bitCount_2 = 8 - (~(i_3 - lastIndex_2 | 0) >>> 31 | 0) | 0;
                              var inductionVariable_7 = 0;
                              if (inductionVariable_7 < bitCount_2)
                                do {
                                  var j_2 = inductionVariable_7;
                                  inductionVariable_7 = inductionVariable_7 + 1 | 0;
                                  // Inline function 'androidx.collection.isFull' call
                                  if (slot_2.ob(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                                    var index_2 = (i_3 << 3) + j_2 | 0;
                                    // Inline function 'androidx.collection.MutableScatterSet.removeIf.<anonymous>' call
                                    // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
                                    var tmp_6 = elements[index_2];
                                    var scope = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
                                    var tmp_7;
                                    if ($this.s1v_1.s(scope)) {
                                      tmp_7 = true;
                                    } else {
                                      var tmp0_safe_receiver = invalidated._v;
                                      var tmp_8;
                                      if (tmp0_safe_receiver == null) {
                                        tmp_8 = null;
                                      } else {
                                        // Inline function 'kotlin.let' call
                                        // Inline function 'kotlin.contracts.contract' call
                                        // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                                        tmp_8 = tmp0_safe_receiver.s(scope);
                                      }
                                      tmp_7 = tmp_8 === true;
                                    }
                                    if (tmp_7) {
                                      set.co(index_2);
                                    }
                                  }
                                  slot_2 = slot_2.mb(8);
                                }
                                 while (inductionVariable_7 < bitCount_2);
                              if (!(bitCount_2 === 8)) {
                                break $l$block_1;
                              }
                            }
                          }
                           while (!(i_3 === lastIndex_2));
                      }
                      tmp_5 = set.u();
                    } else {
                      // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
                      var scope_0 = !(value_2 == null) ? value_2 : THROW_CCE();
                      var tmp_9;
                      if ($this.s1v_1.s(scope_0)) {
                        tmp_9 = true;
                      } else {
                        var tmp0_safe_receiver_0 = invalidated._v;
                        var tmp_10;
                        if (tmp0_safe_receiver_0 == null) {
                          tmp_10 = null;
                        } else {
                          // Inline function 'kotlin.let' call
                          // Inline function 'kotlin.contracts.contract' call
                          // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                          tmp_10 = tmp0_safe_receiver_0.s(scope_0);
                        }
                        tmp_9 = tmp_10 === true;
                      }
                      tmp_5 = tmp_9;
                    }
                    if (tmp_5) {
                      this_4.on(index_1);
                    }
                  }
                  slot_1 = slot_1.mb(8);
                }
                 while (inductionVariable_5 < bitCount_1);
              if (!(bitCount_1 === 8)) {
                break $l$block_2;
              }
            }
          }
           while (!(i_2 === lastIndex_1));
      }
      $this.s1v_1.h1();
      cleanUpDerivedStateObservations($this);
    } else {
      var tmp0_safe_receiver_1 = invalidated._v;
      if (tmp0_safe_receiver_1 == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf' call
        // Inline function 'androidx.collection.MutableScatterMap.removeIf' call
        var this_7 = $this.r1v_1.k1w_1;
        $l$block_4: {
          // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
          var m_3 = this_7.bn_1;
          var lastIndex_3 = m_3.length - 2 | 0;
          var inductionVariable_8 = 0;
          if (inductionVariable_8 <= lastIndex_3)
            do {
              var i_4 = inductionVariable_8;
              inductionVariable_8 = inductionVariable_8 + 1 | 0;
              var slot_3 = m_3[i_4];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_8 = slot_3;
              if (!this_8.ob(this_8.kb().lb(7)).ob(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                var bitCount_3 = 8 - (~(i_4 - lastIndex_3 | 0) >>> 31 | 0) | 0;
                var inductionVariable_9 = 0;
                if (inductionVariable_9 < bitCount_3)
                  do {
                    var j_3 = inductionVariable_9;
                    inductionVariable_9 = inductionVariable_9 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot_3.ob(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                      var index_3 = (i_4 << 3) + j_3 | 0;
                      // Inline function 'androidx.collection.MutableScatterMap.removeIf.<anonymous>' call
                      // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf.<anonymous>' call
                      var tmp_11 = this_7.cn_1[index_3];
                      (tmp_11 == null ? true : !(tmp_11 == null)) || THROW_CCE();
                      var tmp_12 = this_7.dn_1[index_3];
                      var value_3 = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
                      var tmp_13;
                      if (value_3 instanceof MutableScatterSet) {
                        var set_0 = value_3 instanceof MutableScatterSet ? value_3 : THROW_CCE();
                        // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
                        var elements_0 = set_0.rn_1;
                        $l$block_3: {
                          // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                          // Inline function 'kotlin.contracts.contract' call
                          var m_4 = set_0.qn_1;
                          var lastIndex_4 = m_4.length - 2 | 0;
                          var inductionVariable_10 = 0;
                          if (inductionVariable_10 <= lastIndex_4)
                            do {
                              var i_5 = inductionVariable_10;
                              inductionVariable_10 = inductionVariable_10 + 1 | 0;
                              var slot_4 = m_4[i_5];
                              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                              var this_9 = slot_4;
                              if (!this_9.ob(this_9.kb().lb(7)).ob(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                                var bitCount_4 = 8 - (~(i_5 - lastIndex_4 | 0) >>> 31 | 0) | 0;
                                var inductionVariable_11 = 0;
                                if (inductionVariable_11 < bitCount_4)
                                  do {
                                    var j_4 = inductionVariable_11;
                                    inductionVariable_11 = inductionVariable_11 + 1 | 0;
                                    // Inline function 'androidx.collection.isFull' call
                                    if (slot_4.ob(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                                      var index_4 = (i_5 << 3) + j_4 | 0;
                                      // Inline function 'androidx.collection.MutableScatterSet.removeIf.<anonymous>' call
                                      // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                                      var tmp_14 = elements_0[index_4];
                                      var scope_1 = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
                                      if (tmp0_safe_receiver_1.s(scope_1)) {
                                        set_0.co(index_4);
                                      }
                                    }
                                    slot_4 = slot_4.mb(8);
                                  }
                                   while (inductionVariable_11 < bitCount_4);
                                if (!(bitCount_4 === 8)) {
                                  break $l$block_3;
                                }
                              }
                            }
                             while (!(i_5 === lastIndex_4));
                        }
                        tmp_13 = set_0.u();
                      } else {
                        // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                        var scope_2 = !(value_3 == null) ? value_3 : THROW_CCE();
                        tmp_13 = tmp0_safe_receiver_1.s(scope_2);
                      }
                      if (tmp_13) {
                        this_7.on(index_3);
                      }
                    }
                    slot_3 = slot_3.mb(8);
                  }
                   while (inductionVariable_9 < bitCount_3);
                if (!(bitCount_3 === 8)) {
                  break $l$block_4;
                }
              }
            }
             while (!(i_4 === lastIndex_3));
        }
        cleanUpDerivedStateObservations($this);
      }
    }
  }
  function cleanUpDerivedStateObservations($this) {
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf' call
    // Inline function 'androidx.collection.MutableScatterMap.removeIf' call
    var this_0 = $this.t1v_1.k1w_1;
    $l$block_0: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this_0.bn_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_1 = slot;
          if (!this_1.ob(this_1.kb().lb(7)).ob(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.ob(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.MutableScatterMap.removeIf.<anonymous>' call
                  // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf.<anonymous>' call
                  var tmp = this_0.cn_1[index];
                  (tmp == null ? true : !(tmp == null)) || THROW_CCE();
                  var tmp_0 = this_0.dn_1[index];
                  var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  var tmp_1;
                  if (value instanceof MutableScatterSet) {
                    var set = value instanceof MutableScatterSet ? value : THROW_CCE();
                    // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
                    var elements = set.rn_1;
                    $l$block: {
                      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                      // Inline function 'kotlin.contracts.contract' call
                      var m_0 = set.qn_1;
                      var lastIndex_0 = m_0.length - 2 | 0;
                      var inductionVariable_1 = 0;
                      if (inductionVariable_1 <= lastIndex_0)
                        do {
                          var i_0 = inductionVariable_1;
                          inductionVariable_1 = inductionVariable_1 + 1 | 0;
                          var slot_0 = m_0[i_0];
                          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                          var this_2 = slot_0;
                          if (!this_2.ob(this_2.kb().lb(7)).ob(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                            var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
                            var inductionVariable_2 = 0;
                            if (inductionVariable_2 < bitCount_0)
                              do {
                                var j_0 = inductionVariable_2;
                                inductionVariable_2 = inductionVariable_2 + 1 | 0;
                                // Inline function 'androidx.collection.isFull' call
                                if (slot_0.ob(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                                  var index_0 = (i_0 << 3) + j_0 | 0;
                                  // Inline function 'androidx.collection.MutableScatterSet.removeIf.<anonymous>' call
                                  // Inline function 'androidx.compose.runtime.CompositionImpl.cleanUpDerivedStateObservations.<anonymous>' call
                                  var tmp_2 = elements[index_0];
                                  var derivedState = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
                                  if (!$this.r1v_1.o1w(derivedState)) {
                                    set.co(index_0);
                                  }
                                }
                                slot_0 = slot_0.mb(8);
                              }
                               while (inductionVariable_2 < bitCount_0);
                            if (!(bitCount_0 === 8)) {
                              break $l$block;
                            }
                          }
                        }
                         while (!(i_0 === lastIndex_0));
                    }
                    tmp_1 = set.u();
                  } else {
                    // Inline function 'androidx.compose.runtime.CompositionImpl.cleanUpDerivedStateObservations.<anonymous>' call
                    var derivedState_0 = !(value == null) ? value : THROW_CCE();
                    tmp_1 = !$this.r1v_1.o1w(derivedState_0);
                  }
                  if (tmp_1) {
                    this_0.on(index);
                  }
                }
                slot = slot.mb(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block_0;
            }
          }
        }
         while (!(i === lastIndex));
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.s1v_1.u()) {
      // Inline function 'androidx.compose.runtime.removeValueIf' call
      var iter = $this.s1v_1.o();
      while (iter.d1()) {
        // Inline function 'androidx.compose.runtime.CompositionImpl.cleanUpDerivedStateObservations.<anonymous>' call
        if (!iter.f1().l1w()) {
          iter.e1();
        }
      }
    }
  }
  function invalidateScopeOfLocked($this, value) {
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
    var value_0 = $this.r1v_1.k1w_1.x2(value);
    if (value_0 != null) {
      if (value_0 instanceof MutableScatterSet) {
        // Inline function 'androidx.collection.ScatterSet.forEach' call
        var this_0 = value_0 instanceof MutableScatterSet ? value_0 : THROW_CCE();
        // Inline function 'kotlin.contracts.contract' call
        var k = this_0.rn_1;
        $l$block: {
          // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
          // Inline function 'kotlin.contracts.contract' call
          var m = this_0.qn_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              if (!this_1.ob(this_1.kb().lb(7)).ob(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.ob(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                      var index = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateScopeOfLocked.<anonymous>' call
                      var tmp = k[index];
                      var scope = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                      if (scope.m1w(value).equals(InvalidationResult_IMMINENT_getInstance())) {
                        $this.w1v_1.p1w(value, scope);
                      }
                    }
                    slot = slot.mb(8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  break $l$block;
                }
              }
            }
             while (!(i === lastIndex));
        }
      } else {
        // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateScopeOfLocked.<anonymous>' call
        var scope_0 = !(value_0 == null) ? value_0 : THROW_CCE();
        if (scope_0.m1w(value).equals(InvalidationResult_IMMINENT_getInstance())) {
          $this.w1v_1.p1w(value, scope_0);
        }
      }
    }
  }
  function applyChangesInLocked($this, changes) {
    var manager = new RememberEventDispatcher($this.p1v_1);
    try {
      if (changes.u())
        return Unit_instance;
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName = 'Compose:applyChanges';
        var token = Trace_instance.d1q(sectionName);
        try {
          $this.m1v_1.o1f();
          // Inline function 'androidx.compose.runtime.SlotTable.write' call
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
          var writer = $this.q1v_1.l1m();
          var tmp;
          try {
            changes.q1w($this.m1v_1, writer, manager);
            tmp = Unit_instance;
          }finally {
            writer.y1k();
          }
          $this.m1v_1.p1f();
          break $l$block;
        }finally {
          Trace_instance.s1q(token);
        }
      }
      manager.w1w();
      manager.x1w();
      if ($this.y1v_1) {
        $l$block_2: {
          // Inline function 'androidx.compose.runtime.trace' call
          var sectionName_0 = 'Compose:unobserve';
          var token_0 = Trace_instance.d1q(sectionName_0);
          try {
            $this.y1v_1 = false;
            // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf' call
            // Inline function 'androidx.collection.MutableScatterMap.removeIf' call
            var this_0 = $this.r1v_1.k1w_1;
            $l$block_1: {
              // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
              var m = this_0.bn_1;
              var lastIndex = m.length - 2 | 0;
              var inductionVariable = 0;
              if (inductionVariable <= lastIndex)
                do {
                  var i = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var slot = m[i];
                  // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                  var this_1 = slot;
                  if (!this_1.ob(this_1.kb().lb(7)).ob(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                    var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                    var inductionVariable_0 = 0;
                    if (inductionVariable_0 < bitCount)
                      do {
                        var j = inductionVariable_0;
                        inductionVariable_0 = inductionVariable_0 + 1 | 0;
                        // Inline function 'androidx.collection.isFull' call
                        if (slot.ob(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                          var index = (i << 3) + j | 0;
                          // Inline function 'androidx.collection.MutableScatterMap.removeIf.<anonymous>' call
                          // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf.<anonymous>' call
                          var tmp_0 = this_0.cn_1[index];
                          (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
                          var tmp_1 = this_0.dn_1[index];
                          var value = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                          var tmp_2;
                          if (value instanceof MutableScatterSet) {
                            var set = value instanceof MutableScatterSet ? value : THROW_CCE();
                            // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
                            var elements = set.rn_1;
                            $l$block_0: {
                              // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                              // Inline function 'kotlin.contracts.contract' call
                              var m_0 = set.qn_1;
                              var lastIndex_0 = m_0.length - 2 | 0;
                              var inductionVariable_1 = 0;
                              if (inductionVariable_1 <= lastIndex_0)
                                do {
                                  var i_0 = inductionVariable_1;
                                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                                  var slot_0 = m_0[i_0];
                                  // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                                  var this_2 = slot_0;
                                  if (!this_2.ob(this_2.kb().lb(7)).ob(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                                    var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
                                    var inductionVariable_2 = 0;
                                    if (inductionVariable_2 < bitCount_0)
                                      do {
                                        var j_0 = inductionVariable_2;
                                        inductionVariable_2 = inductionVariable_2 + 1 | 0;
                                        // Inline function 'androidx.collection.isFull' call
                                        if (slot_0.ob(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                                          var index_0 = (i_0 << 3) + j_0 | 0;
                                          // Inline function 'androidx.collection.MutableScatterSet.removeIf.<anonymous>' call
                                          // Inline function 'androidx.compose.runtime.CompositionImpl.applyChangesInLocked.<anonymous>.<anonymous>' call
                                          var tmp_3 = elements[index_0];
                                          if (!((tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE()).y1w()) {
                                            set.co(index_0);
                                          }
                                        }
                                        slot_0 = slot_0.mb(8);
                                      }
                                       while (inductionVariable_2 < bitCount_0);
                                    if (!(bitCount_0 === 8)) {
                                      break $l$block_0;
                                    }
                                  }
                                }
                                 while (!(i_0 === lastIndex_0));
                            }
                            tmp_2 = set.u();
                          } else {
                            // Inline function 'androidx.compose.runtime.CompositionImpl.applyChangesInLocked.<anonymous>.<anonymous>' call
                            tmp_2 = !(!(value == null) ? value : THROW_CCE()).y1w();
                          }
                          if (tmp_2) {
                            this_0.on(index);
                          }
                        }
                        slot = slot.mb(8);
                      }
                       while (inductionVariable_0 < bitCount);
                    if (!(bitCount === 8)) {
                      break $l$block_1;
                    }
                  }
                }
                 while (!(i === lastIndex));
            }
            cleanUpDerivedStateObservations($this);
            break $l$block_2;
          }finally {
            Trace_instance.s1q(token_0);
          }
        }
      }
    }finally {
      if ($this.v1v_1.u()) {
        manager.z1w();
      }
    }
  }
  function abandonChanges($this) {
    $this.n1v_1.a1x(null);
    $this.u1v_1.h1();
    $this.v1v_1.h1();
    $this.p1v_1.h1();
  }
  function tryImminentInvalidation($this, scope, instance) {
    return $this.b1x() ? $this.c1w_1.z1p(scope, instance) : false;
  }
  function invalidateChecked($this, scope, anchor, instance) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.o1v_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateChecked.<anonymous>' call
    var tmp0_safe_receiver = $this.z1v_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateChecked.<anonymous>.<anonymous>' call
      var tmp_0;
      if ($this.q1v_1.c1x($this.a1w_1, anchor)) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    var delegate = tmp;
    if (delegate == null) {
      if (tryImminentInvalidation($this, scope, instance)) {
        return InvalidationResult_IMMINENT_getInstance();
      }
      if (instance == null) {
        $this.x1v_1.d1x(scope, null);
      } else {
        addValue($this.x1v_1, scope, instance);
      }
    }
    var delegate_0 = delegate;
    if (!(delegate_0 == null)) {
      return invalidateChecked(delegate_0, scope, anchor, instance);
    }
    $this.l1v_1.e1x($this);
    return $this.b1x() ? InvalidationResult_DEFERRED_getInstance() : InvalidationResult_SCHEDULED_getInstance();
  }
  function takeInvalidations($this) {
    var invalidations = $this.x1v_1;
    $this.x1v_1 = new IdentityArrayMap();
    return invalidations;
  }
  function observer($this) {
    var holder = $this.b1w_1;
    var tmp;
    if (holder.h1x_1) {
      tmp = holder.g1x_1;
    } else {
      var parentHolder = $this.l1v_1.f1x();
      var parentObserver = parentHolder == null ? null : parentHolder.g1x_1;
      if (!equals(parentObserver, holder.g1x_1)) {
        holder.g1x_1 = parentObserver;
      }
      tmp = parentObserver;
    }
    return tmp;
  }
  function RememberEventDispatcher(abandoning) {
    this.r1w_1 = abandoning;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.s1w_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.t1w_1 = ArrayList_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.u1w_1 = ArrayList_init_$Create$();
    this.v1w_1 = null;
  }
  protoOf(RememberEventDispatcher).i1x = function (instance) {
    this.s1w_1.a1(instance);
  };
  protoOf(RememberEventDispatcher).x1u = function (instance) {
    this.t1w_1.a1(instance);
  };
  protoOf(RememberEventDispatcher).j1t = function (effect) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.u1w_1.a1(effect);
  };
  protoOf(RememberEventDispatcher).z1u = function (instance) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.t1w_1.a1(instance);
  };
  protoOf(RememberEventDispatcher).w1u = function (instance) {
    var tmp0_elvis_lhs = this.v1w_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = mutableScatterSetOf();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RememberEventDispatcher.releasing.<anonymous>' call
      this.v1w_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var releasing = tmp;
    releasing.bo(instance);
    // Inline function 'kotlin.collections.plusAssign' call
    this.t1w_1.a1(instance);
  };
  protoOf(RememberEventDispatcher).w1w = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.t1w_1.u()) {
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName = 'Compose:onForgotten';
        var token = Trace_instance.d1q(sectionName);
        try {
          var releasing = this.v1w_1;
          var inductionVariable = this.t1w_1.m() - 1 | 0;
          var tmp;
          if (0 <= inductionVariable) {
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              var instance = this.t1w_1.n(i);
              // Inline function 'kotlin.collections.remove' call
              var this_0 = this.r1w_1;
              (isInterface(this_0, MutableCollection) ? this_0 : THROW_CCE()).b1(instance);
              if (isInterface(instance, RememberObserver)) {
                instance.j1x();
              }
              if (isInterface(instance, ComposeNodeLifecycleCallback)) {
                if (!(releasing == null) ? releasing.s(instance) : false) {
                  instance.t1g();
                } else {
                  instance.s1g();
                }
              }
            }
             while (0 <= inductionVariable);
            tmp = Unit_instance;
          }
          break $l$block;
        }finally {
          Trace_instance.s1q(token);
        }
      }
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.s1w_1.u()) {
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName_0 = 'Compose:onRemembered';
        var token_0 = Trace_instance.d1q(sectionName_0);
        try {
          var this_1 = this.s1w_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable_0 = 0;
          var last = this_1.m() - 1 | 0;
          var tmp_0;
          if (inductionVariable_0 <= last) {
            do {
              var index = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              var item = this_1.n(index);
              // Inline function 'androidx.compose.runtime.RememberEventDispatcher.dispatchRememberObservers.<anonymous>.<anonymous>' call
              this.r1w_1.b1(item);
              item.k1x();
            }
             while (inductionVariable_0 <= last);
            tmp_0 = Unit_instance;
          }
          break $l$block_0;
        }finally {
          Trace_instance.s1q(token_0);
        }
      }
    }
  };
  protoOf(RememberEventDispatcher).x1w = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.u1w_1.u()) {
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName = 'Compose:sideeffects';
        var token = Trace_instance.d1q(sectionName);
        try {
          // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
          var this_0 = this.u1w_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable = 0;
          var last = this_0.m() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item = this_0.n(index);
              // Inline function 'androidx.compose.runtime.RememberEventDispatcher.dispatchSideEffects.<anonymous>.<anonymous>' call
              item();
            }
             while (inductionVariable <= last);
          this.u1w_1.h1();
          break $l$block;
        }finally {
          Trace_instance.s1q(token);
        }
      }
    }
  };
  protoOf(RememberEventDispatcher).z1w = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.r1w_1.u()) {
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName = 'Compose:abandons';
        var token = Trace_instance.d1q(sectionName);
        try {
          var iterator = this.r1w_1.o();
          while (iterator.d1()) {
            var instance = iterator.f1();
            iterator.e1();
            instance.l1x();
          }
          break $l$block;
        }finally {
          Trace_instance.s1q(token);
        }
      }
    }
  };
  function CompositionImpl(parent, applier, recomposeContext) {
    recomposeContext = recomposeContext === VOID ? null : recomposeContext;
    this.l1v_1 = parent;
    this.m1v_1 = applier;
    this.n1v_1 = new AtomicReference(null);
    this.o1v_1 = createSynchronizedObject();
    this.p1v_1 = HashSet_init_$Create$();
    this.q1v_1 = new SlotTable();
    this.r1v_1 = new ScopeMap();
    this.s1v_1 = HashSet_init_$Create$();
    this.t1v_1 = new ScopeMap();
    this.u1v_1 = new ChangeList();
    this.v1v_1 = new ChangeList();
    this.w1v_1 = new ScopeMap();
    this.x1v_1 = new IdentityArrayMap();
    this.y1v_1 = false;
    this.z1v_1 = null;
    this.a1w_1 = 0;
    this.b1w_1 = new CompositionObserverHolder();
    var tmp = this;
    // Inline function 'kotlin.also' call
    var this_0 = new ComposerImpl(this.m1v_1, this.l1v_1, this.q1v_1, this.p1v_1, this.u1v_1, this.v1v_1, this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.CompositionImpl.composer.<anonymous>' call
    this.l1v_1.m1x(this_0);
    tmp.c1w_1 = this_0;
    this.d1w_1 = recomposeContext;
    var tmp_0 = this;
    var tmp_1 = this.l1v_1;
    tmp_0.e1w_1 = tmp_1 instanceof Recomposer;
    this.f1w_1 = false;
    this.g1w_1 = ComposableSingletons$CompositionKt_getInstance().n1x_1;
  }
  protoOf(CompositionImpl).b1x = function () {
    return this.c1w_1.m1i_1;
  };
  protoOf(CompositionImpl).p1x = function () {
    return this.f1w_1;
  };
  protoOf(CompositionImpl).q1x = function (content) {
    composeInitial(this, content);
  };
  protoOf(CompositionImpl).r1x = function (content) {
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.composeContent.<anonymous>' call
        // Inline function 'androidx.compose.runtime.synchronized' call
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        this.o1v_1;
        // Inline function 'androidx.compose.runtime.CompositionImpl.composeContent.<anonymous>.<anonymous>' call
        drainPendingModificationsForCompositionLocked(this);
        // Inline function 'androidx.compose.runtime.CompositionImpl.guardInvalidationsLocked' call
        var invalidations = takeInvalidations(this);
        var tmp_1;
        try {
          // Inline function 'androidx.compose.runtime.CompositionImpl.composeContent.<anonymous>.<anonymous>.<anonymous>' call
          var observer_0 = observer(this);
          if (observer_0 == null)
            null;
          else {
            var tmp_2 = invalidations.s1x();
            observer_0.t1x(this, isInterface(tmp_2, Map) ? tmp_2 : THROW_CCE());
          }
          this.c1w_1.p1u(invalidations, content);
          var tmp_3;
          if (observer_0 == null) {
            tmp_3 = null;
          } else {
            observer_0.u1x(this);
            tmp_3 = Unit_instance;
          }
          tmp_1 = tmp_3;
        } catch ($p) {
          var tmp_4;
          if ($p instanceof Exception) {
            var e = $p;
            this.x1v_1 = invalidations;
            throw e;
          } else {
            throw $p;
          }
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = tmp_1;
      }finally {
        var tmp_5;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_5 = !this.p1v_1.u();
        } else {
          tmp_5 = false;
        }
        if (tmp_5) {
          (new RememberEventDispatcher(this.p1v_1)).z1w();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_6;
      if ($p instanceof Exception) {
        var e_0 = $p;
        abandonChanges(this);
        throw e_0;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).ss = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.o1v_1;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.c1w_1.m1i_1) {
      // Inline function 'androidx.compose.runtime.CompositionImpl.dispose.<anonymous>.<anonymous>' call
      var message = 'Composition is disposed while composing. If dispose is triggered by a call in @Composable function, consider wrapping it with SideEffect block.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp;
    if (!this.f1w_1) {
      this.f1w_1 = true;
      this.g1w_1 = ComposableSingletons$CompositionKt_getInstance().o1x_1;
      var deferredChanges = this.c1w_1.t1i_1;
      if (!(deferredChanges == null)) {
        applyChangesInLocked(this, deferredChanges);
      }
      var nonEmptySlotTable = this.q1v_1.d1j_1 > 0;
      var tmp_0;
      if (nonEmptySlotTable) {
        tmp_0 = true;
      } else {
        // Inline function 'kotlin.collections.isNotEmpty' call
        tmp_0 = !this.p1v_1.u();
      }
      if (tmp_0) {
        var manager = new RememberEventDispatcher(this.p1v_1);
        if (nonEmptySlotTable) {
          this.m1v_1.o1f();
          // Inline function 'androidx.compose.runtime.SlotTable.write' call
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
          var writer = this.q1v_1.l1m();
          var tmp_1;
          try {
            removeCurrentGroup(writer, manager);
            tmp_1 = Unit_instance;
          }finally {
            writer.y1k();
          }
          this.m1v_1.h1();
          this.m1v_1.p1f();
          manager.w1w();
        }
        manager.z1w();
      }
      this.c1w_1.ss();
      tmp = Unit_instance;
    }
    this.l1v_1.v1x(this);
  };
  protoOf(CompositionImpl).w1x = function (values) {
    $l$loop: while (true) {
      var old = this.n1v_1.hw();
      var tmp;
      if (old == null ? true : equals(old, get_PendingApplyNoModifications())) {
        tmp = values;
      } else {
        if (!(old == null) ? isInterface(old, Set) : false) {
          // Inline function 'kotlin.arrayOf' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp = [old, values];
        } else {
          if (!(old == null) ? isArray(old) : false) {
            tmp = plus_0((!(old == null) ? isArray(old) : false) ? old : THROW_CCE(), values);
          } else {
            var message = 'corrupt pendingModifications: ' + this.n1v_1;
            throw IllegalStateException_init_$Create$(toString(message));
          }
        }
      }
      var new_0 = tmp;
      if (this.n1v_1.x1x(old, new_0)) {
        if (old == null) {
          // Inline function 'androidx.compose.runtime.synchronized' call
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          this.o1v_1;
          drainPendingModificationsLocked(this);
        }
        break $l$loop;
      }
    }
  };
  protoOf(CompositionImpl).y1x = function (values) {
    if (values instanceof IdentityArraySet) {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values_0 = values.b1q_1;
      var inductionVariable = 0;
      var last = values.a1q_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.CompositionImpl.observesAnyOf.<anonymous>' call
          var tmp = values_0[i];
          var value = !(tmp == null) ? tmp : THROW_CCE();
          if (this.r1v_1.o1w(value) ? true : this.t1v_1.o1w(value))
            return true;
        }
         while (inductionVariable < last);
      return false;
    }
    var tmp0_iterator = values.o();
    while (tmp0_iterator.d1()) {
      var value_0 = tmp0_iterator.f1();
      if (this.r1v_1.o1w(value_0) ? true : this.t1v_1.o1w(value_0))
        return true;
    }
    return false;
  };
  protoOf(CompositionImpl).q1u = function (block) {
    return this.c1w_1.q1u(block);
  };
  protoOf(CompositionImpl).z1x = function (value) {
    if (!_get_areChildrenComposing__c1uwup(this)) {
      var tmp0_safe_receiver = this.c1w_1.e1s();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_safe_receiver.u1u(true);
        var alreadyRead = tmp0_safe_receiver.a1y(value);
        var tmp;
        if (!alreadyRead) {
          if (value instanceof StateObjectImpl) {
            // Inline function 'androidx.compose.runtime.snapshots.Companion.Composition' call
            var tmp$ret$0 = _ReaderKind___init__impl__jqeebu(1);
            value.c1y(tmp$ret$0);
          }
          this.r1v_1.p1w(value, tmp0_safe_receiver);
          var tmp_0;
          if (isInterface(value, DerivedState)) {
            this.t1v_1.d1y(value);
            var this_0 = value.e1y().f1y();
            var k = this_0.om_1;
            var tmp$ret$4;
            $l$block: {
              // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
              var m = this_0.nm_1;
              var lastIndex = m.length - 2 | 0;
              var inductionVariable = 0;
              if (inductionVariable <= lastIndex)
                do {
                  var i = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var slot = m[i];
                  // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                  var this_1 = slot;
                  if (!this_1.ob(this_1.kb().lb(7)).ob(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                    var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                    var inductionVariable_0 = 0;
                    if (inductionVariable_0 < bitCount)
                      do {
                        var j = inductionVariable_0;
                        inductionVariable_0 = inductionVariable_0 + 1 | 0;
                        // Inline function 'androidx.collection.isFull' call
                        if (slot.ob(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                          var index = (i << 3) + j | 0;
                          // Inline function 'androidx.collection.ObjectIntMap.forEachKey.<anonymous>' call
                          // Inline function 'androidx.compose.runtime.CompositionImpl.recordReadOf.<anonymous>.<anonymous>' call
                          var tmp_1 = k[index];
                          var dependency = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                          if (dependency instanceof StateObjectImpl) {
                            // Inline function 'androidx.compose.runtime.snapshots.Companion.Composition' call
                            var tmp$ret$3 = _ReaderKind___init__impl__jqeebu(1);
                            dependency.c1y(tmp$ret$3);
                          }
                          this.t1v_1.p1w(dependency, value);
                        }
                        slot = slot.mb(8);
                      }
                       while (inductionVariable_0 < bitCount);
                    if (!(bitCount === 8)) {
                      tmp$ret$4 = Unit_instance;
                      break $l$block;
                    }
                  }
                }
                 while (!(i === lastIndex));
            }
            tmp_0 = tmp$ret$4;
          }
          tmp = tmp_0;
        }
      }
    }
  };
  protoOf(CompositionImpl).g1y = function (value) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.o1v_1;
    invalidateScopeOfLocked(this, value);
    var value_0 = this.t1v_1.k1w_1.x2(value);
    var tmp;
    if (value_0 == null) {
      tmp = Unit_instance;
    } else {
      if (value_0 instanceof MutableScatterSet) {
        var this_0 = value_0 instanceof MutableScatterSet ? value_0 : THROW_CCE();
        // Inline function 'kotlin.contracts.contract' call
        var k = this_0.rn_1;
        var tmp$ret$2;
        $l$block: {
          // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
          // Inline function 'kotlin.contracts.contract' call
          var m = this_0.qn_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              if (!this_1.ob(this_1.kb().lb(7)).ob(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.ob(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                      var index = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                      // Inline function 'androidx.compose.runtime.CompositionImpl.recordWriteOf.<anonymous>.<anonymous>' call
                      var tmp_0 = k[index];
                      var it = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                      invalidateScopeOfLocked(this, it);
                    }
                    slot = slot.mb(8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  tmp$ret$2 = Unit_instance;
                  break $l$block;
                }
              }
            }
             while (!(i === lastIndex));
        }
        tmp = tmp$ret$2;
      } else {
        var it_0 = !(value_0 == null) ? value_0 : THROW_CCE();
        invalidateScopeOfLocked(this, it_0);
        tmp = Unit_instance;
      }
    }
    return tmp;
  };
  protoOf(CompositionImpl).h1y = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.o1v_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>' call
    drainPendingModificationsForCompositionLocked(this);
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.guardInvalidationsLocked' call
        var invalidations = takeInvalidations(this);
        var tmp_1;
        try {
          // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>.<anonymous>' call
          var observer_0 = observer(this);
          if (observer_0 == null)
            null;
          else {
            var tmp_2 = invalidations.s1x();
            observer_0.t1x(this, isInterface(tmp_2, Map) ? tmp_2 : THROW_CCE());
          }
          // Inline function 'kotlin.also' call
          var this_0 = this.c1w_1.r1u(invalidations);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          if (!this_0) {
            drainPendingModificationsLocked(this);
          }
          if (observer_0 == null)
            null;
          else {
            observer_0.u1x(this);
          }
          tmp_1 = this_0;
        } catch ($p) {
          var tmp_3;
          if ($p instanceof Exception) {
            var e = $p;
            this.x1v_1 = invalidations;
            throw e;
          } else {
            throw $p;
          }
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = tmp_1;
      }finally {
        var tmp_4;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_4 = !this.p1v_1.u();
        } else {
          tmp_4 = false;
        }
        if (tmp_4) {
          (new RememberEventDispatcher(this.p1v_1)).z1w();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_5;
      if ($p instanceof Exception) {
        var e_0 = $p;
        abandonChanges(this);
        throw e_0;
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  protoOf(CompositionImpl).i1y = function (references) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.runtime.snapshots.fastAll' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = references.m() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = references.n(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastAll.<anonymous>' call
          // Inline function 'androidx.compose.runtime.CompositionImpl.insertMovableContent.<anonymous>' call
          if (!equals(item.qe_1.k1p_1, this)) {
            tmp$ret$1 = false;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = true;
    }
    runtimeCheck(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        this.c1w_1.i1u(references);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_instance;
      }finally {
        var tmp_1;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_1 = !this.p1v_1.u();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.p1v_1)).z1w();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var e = $p;
        abandonChanges(this);
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).j1y = function (state) {
    var manager = new RememberEventDispatcher(this.p1v_1);
    var slotTable = state.s1p_1;
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = slotTable.l1m();
    var tmp;
    try {
      removeCurrentGroup(writer, manager);
      tmp = Unit_instance;
    }finally {
      writer.y1k();
    }
    manager.w1w();
  };
  protoOf(CompositionImpl).k1y = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.o1v_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        applyChangesInLocked(this, this.u1v_1);
        drainPendingModificationsLocked(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_instance;
      }finally {
        var tmp_1;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_1 = !this.p1v_1.u();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.p1v_1)).z1w();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var e = $p;
        abandonChanges(this);
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).l1y = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.o1v_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.applyLateChanges.<anonymous>.<anonymous>' call
        if (this.v1v_1.pn()) {
          applyChangesInLocked(this, this.v1v_1);
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_instance;
      }finally {
        var tmp_1;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_1 = !this.p1v_1.u();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.p1v_1)).z1w();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var e = $p;
        abandonChanges(this);
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).h1s = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.o1v_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.changesApplied.<anonymous>.<anonymous>' call
        this.c1w_1.h1s();
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!this.p1v_1.u()) {
          (new RememberEventDispatcher(this.p1v_1)).z1w();
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_instance;
      }finally {
        var tmp_1;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_1 = !this.p1v_1.u();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.p1v_1)).z1w();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var e = $p;
        abandonChanges(this);
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).m1y = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.o1v_1;
    var indexedObject = this.q1v_1.e1j_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateAll.<anonymous>.<anonymous>' call
      var tmp0_safe_receiver = element instanceof RecomposeScopeImpl ? element : null;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.n1y();
      }
    }
  };
  protoOf(CompositionImpl).c1q = function (to, groupIndex, block) {
    var tmp;
    if ((!(to == null) ? !equals(to, this) : false) ? groupIndex >= 0 : false) {
      var tmp_0 = this;
      tmp_0.z1v_1 = to instanceof CompositionImpl ? to : THROW_CCE();
      this.a1w_1 = groupIndex;
      var tmp_1;
      try {
        tmp_1 = block();
      }finally {
        this.z1v_1 = null;
        this.a1w_1 = 0;
      }
      tmp = tmp_1;
    } else {
      tmp = block();
    }
    return tmp;
  };
  protoOf(CompositionImpl).o1y = function (scope, instance) {
    if (scope.p1y()) {
      scope.g1u(true);
    }
    var anchor = scope.a1h_1;
    if (anchor == null ? true : !anchor.y1w())
      return InvalidationResult_IGNORED_getInstance();
    if (!this.q1v_1.q1y(anchor)) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this.o1v_1;
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidate.<anonymous>' call
      var delegate = this.z1v_1;
      if ((delegate == null ? null : tryImminentInvalidation(delegate, scope, instance)) === true)
        return InvalidationResult_IMMINENT_getInstance();
      return InvalidationResult_IGNORED_getInstance();
    }
    if (!scope.r1y())
      return InvalidationResult_IGNORED_getInstance();
    return invalidateChecked(this, scope, anchor, instance);
  };
  protoOf(CompositionImpl).s1y = function (scope) {
    this.y1v_1 = true;
  };
  protoOf(CompositionImpl).t1y = function (instance, scope) {
    this.r1v_1.n1w(instance, scope);
  };
  protoOf(CompositionImpl).u1y = function (state) {
    if (!this.r1v_1.o1w(state)) {
      this.t1v_1.d1y(state);
    }
  };
  protoOf(CompositionImpl).l1s = function () {
    var nonEmptySlotTable = this.q1v_1.d1j_1 > 0;
    var tmp;
    if (nonEmptySlotTable) {
      tmp = true;
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp = !this.p1v_1.u();
    }
    if (tmp) {
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName = 'Compose:deactivate';
        var token = Trace_instance.d1q(sectionName);
        try {
          var manager = new RememberEventDispatcher(this.p1v_1);
          if (nonEmptySlotTable) {
            this.m1v_1.o1f();
            // Inline function 'androidx.compose.runtime.SlotTable.write' call
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
            var writer = this.q1v_1.l1m();
            var tmp_0;
            try {
              deactivateCurrentGroup(writer, manager);
              tmp_0 = Unit_instance;
            }finally {
              writer.y1k();
            }
            this.m1v_1.p1f();
            manager.w1w();
          }
          manager.z1w();
          break $l$block;
        }finally {
          Trace_instance.s1q(token);
        }
      }
    }
    this.r1v_1.h1();
    this.t1v_1.h1();
    this.x1v_1.h1();
    this.u1v_1.h1();
    this.c1w_1.l1s();
  };
  function CompositionObserverHolder(observer, root) {
    observer = observer === VOID ? null : observer;
    root = root === VOID ? false : root;
    this.g1x_1 = observer;
    this.h1x_1 = root;
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.t1r(p0, p1);
    };
  }
  function ComposableSingletons$CompositionKt$lambda_1$lambda_xm0u9s($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Composition.kt#9igjgp');
    if (!(($changed & 11) === 2) ? true : !$composer_0.v1r()) {
      if (isTraceInProgress()) {
        traceEventStart(954879418, $changed, -1, 'androidx.compose.runtime.ComposableSingletons$CompositionKt.lambda-1.<anonymous> (Composition.kt:607)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m1m();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.t1r(p0, p1);
    };
  }
  function ComposableSingletons$CompositionKt$lambda_2$lambda_8lgqn5($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Composition.kt#9igjgp');
    if (!(($changed & 11) === 2) ? true : !$composer_0.v1r()) {
      if (isTraceInProgress()) {
        traceEventStart(1918065384, $changed, -1, 'androidx.compose.runtime.ComposableSingletons$CompositionKt.lambda-2.<anonymous> (Composition.kt:739)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m1m();
    }
    return Unit_instance;
  }
  function ComposableSingletons$CompositionKt() {
    ComposableSingletons$CompositionKt_instance = this;
    var tmp = this;
    tmp.n1x_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(954879418, false, ComposableSingletons$CompositionKt$lambda_1$lambda_xm0u9s));
    var tmp_0 = this;
    tmp_0.o1x_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(1918065384, false, ComposableSingletons$CompositionKt$lambda_2$lambda_8lgqn5));
  }
  var ComposableSingletons$CompositionKt_instance;
  function ComposableSingletons$CompositionKt_getInstance() {
    if (ComposableSingletons$CompositionKt_instance == null)
      new ComposableSingletons$CompositionKt();
    return ComposableSingletons$CompositionKt_instance;
  }
  function addValue(_this__u8e3s4, key, value) {
    _init_properties_Composition_kt__t5pjw8();
    if (_this__u8e3s4.w1y(key)) {
      var tmp0_safe_receiver = _this__u8e3s4.v1y(key);
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.i1v(value);
    } else {
      // Inline function 'kotlin.also' call
      var this_0 = new IdentityArraySet();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.addValue.<anonymous>' call
      this_0.i1v(value);
      _this__u8e3s4.d1x(key, this_0);
    }
  }
  function Composition(applier, parent) {
    _init_properties_Composition_kt__t5pjw8();
    return new CompositionImpl(parent, applier);
  }
  function CompositionImplServiceKey$1() {
  }
  var properties_initialized_Composition_kt_u7hvq2;
  function _init_properties_Composition_kt__t5pjw8() {
    if (!properties_initialized_Composition_kt_u7hvq2) {
      properties_initialized_Composition_kt_u7hvq2 = true;
      PendingApplyNoModifications = new Object();
      CompositionImplServiceKey = new CompositionImplServiceKey$1();
    }
  }
  function get_EmptyPersistentCompositionLocalMap() {
    _init_properties_CompositionContext_kt__4g1p1h();
    return EmptyPersistentCompositionLocalMap;
  }
  var EmptyPersistentCompositionLocalMap;
  function CompositionContext() {
  }
  protoOf(CompositionContext).f1x = function () {
    return null;
  };
  protoOf(CompositionContext).v1j = function (table) {
  };
  protoOf(CompositionContext).m1x = function (composer) {
  };
  protoOf(CompositionContext).k1s = function (composer) {
  };
  protoOf(CompositionContext).o1j = function () {
    return get_EmptyPersistentCompositionLocalMap();
  };
  protoOf(CompositionContext).n1j = function () {
  };
  protoOf(CompositionContext).x1j = function () {
  };
  protoOf(CompositionContext).r1p = function (reference) {
    return null;
  };
  var properties_initialized_CompositionContext_kt_mk393b;
  function _init_properties_CompositionContext_kt__4g1p1h() {
    if (!properties_initialized_CompositionContext_kt_mk393b) {
      properties_initialized_CompositionContext_kt_mk393b = true;
      EmptyPersistentCompositionLocalMap = persistentCompositionLocalHashMapOf();
    }
  }
  function CompositionLocal(defaultFactory) {
    this.q1t_1 = new LazyValueHolder(defaultFactory);
  }
  function ProvidableCompositionLocal(defaultFactory) {
    CompositionLocal.call(this, defaultFactory);
  }
  protoOf(ProvidableCompositionLocal).z1y = function (value) {
    return new ProvidedValue(this, value, true);
  };
  protoOf(ProvidableCompositionLocal).a1z = function (value) {
    return new ProvidedValue(this, value, false);
  };
  function staticCompositionLocalOf(defaultFactory) {
    return new StaticProvidableCompositionLocal(defaultFactory);
  }
  function StaticProvidableCompositionLocal(defaultFactory) {
    ProvidableCompositionLocal.call(this, defaultFactory);
  }
  protoOf(StaticProvidableCompositionLocal).r1t = function (value, previous) {
    return (!(previous == null) ? equals(previous.q2(), value) : false) ? previous : new StaticValueHolder(value);
  };
  function compositionLocalOf(policy, defaultFactory) {
    policy = policy === VOID ? structuralEqualityPolicy() : policy;
    return new DynamicProvidableCompositionLocal(policy, defaultFactory);
  }
  function CompositionLocalProvider(value, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1u(-1350970552);
    sourceInformation($composer_0, 'C(CompositionLocalProvider)P(1)247@10835L9:CompositionLocal.kt#9igjgp');
    var $dirty = $changed;
    if (isTraceInProgress()) {
      traceEventStart(-1350970552, $dirty, -1, 'androidx.compose.runtime.CompositionLocalProvider (CompositionLocal.kt:245)');
    }
    $composer_0.l1t(value);
    content($composer_0, 14 & $dirty >> 3);
    $composer_0.u1t();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp0_safe_receiver = $composer_0.d1u();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.c1z(CompositionLocalProvider$lambda(value, content, $changed));
    }
  }
  function CompositionLocalProvider_0(values, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1u(-1390796515);
    sourceInformation($composer_0, 'C(CompositionLocalProvider)P(1)227@10122L9:CompositionLocal.kt#9igjgp');
    var $dirty = $changed;
    if (isTraceInProgress()) {
      traceEventStart(-1390796515, $dirty, -1, 'androidx.compose.runtime.CompositionLocalProvider (CompositionLocal.kt:225)');
    }
    $composer_0.v1t(values);
    content($composer_0, 14 & $dirty >> 3);
    $composer_0.x1t();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp0_safe_receiver = $composer_0.d1u();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.c1z(CompositionLocalProvider$lambda_0(values, content, $changed));
    }
  }
  function DynamicProvidableCompositionLocal(policy, defaultFactory) {
    ProvidableCompositionLocal.call(this, defaultFactory);
    this.e1z_1 = policy;
  }
  protoOf(DynamicProvidableCompositionLocal).r1t = function (value, previous) {
    var tmp;
    var tmp_0;
    if (!(previous == null)) {
      tmp_0 = !(previous == null) ? isInterface(previous, MutableState) : false;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      previous.d1a(value);
      tmp = previous;
    } else {
      tmp = mutableStateOf(value, this.e1z_1);
    }
    return tmp;
  };
  function CompositionLocalProvider_1(context, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1u(1853897736);
    sourceInformation($composer_0, 'C(CompositionLocalProvider)P(1)265@11477L209:CompositionLocal.kt#9igjgp');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.s1j(context) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.z1s(content) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.v1r()) {
      if (isTraceInProgress()) {
        traceEventStart(1853897736, $dirty, -1, 'androidx.compose.runtime.CompositionLocalProvider (CompositionLocal.kt:264)');
      }
      // Inline function 'kotlin.collections.toTypedArray' call
      // Inline function 'kotlin.collections.map' call
      var this_0 = context.f1z_1;
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(this_0.m());
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator = this_0.m2().o();
      while (tmp0_iterator.d1()) {
        var item = tmp0_iterator.f1();
        // Inline function 'androidx.compose.runtime.CompositionLocalProvider.<anonymous>' call
        var tmp = item.p2();
        var tmp$ret$1 = (tmp instanceof ProvidableCompositionLocal ? tmp : THROW_CCE()).z1y(item.q2().q2());
        destination.a1(tmp$ret$1);
      }
      var tmp$ret$4 = copyToArray(destination);
      CompositionLocalProvider_0(tmp$ret$4.slice(), content, $composer_0, 8 | 112 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m1m();
    }
    var tmp0_safe_receiver = $composer_0.d1u();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.c1z(CompositionLocalProvider$lambda_1(context, content, $changed));
    }
  }
  function CompositionLocalProvider$lambda($value, $content, $$changed) {
    return function ($composer, $force) {
      CompositionLocalProvider($value, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function CompositionLocalProvider$lambda_0($values, $content, $$changed) {
    return function ($composer, $force) {
      CompositionLocalProvider_0($values.slice(), $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function CompositionLocalProvider$lambda_1($context, $content, $$changed) {
    return function ($composer, $force) {
      CompositionLocalProvider_1($context, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function PersistentCompositionLocalMap() {
  }
  function Companion_1() {
    Companion_instance_2 = this;
    this.g1z_1 = persistentCompositionLocalHashMapOf();
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_1();
    return Companion_instance_2;
  }
  function read(_this__u8e3s4, key) {
    var tmp;
    if (contains_0(_this__u8e3s4, key)) {
      tmp = getValueOf(_this__u8e3s4, key);
    } else {
      tmp = key.q1t_1.q2();
    }
    return tmp;
  }
  function contains_0(_this__u8e3s4, key) {
    return _this__u8e3s4.u2(key instanceof CompositionLocal ? key : THROW_CCE());
  }
  function updateCompositionMap(values, parentScope, previous) {
    previous = previous === VOID ? persistentCompositionLocalHashMapOf() : previous;
    var builder = persistentCompositionLocalHashMapOf().j1m();
    var map = previous;
    var inductionVariable = 0;
    var last = values.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var provided = values[index];
        var tmp = provided.n1t_1;
        var local = tmp instanceof ProvidableCompositionLocal ? tmp : THROW_CCE();
        if (provided.p1t_1 ? true : !contains_0(parentScope, local)) {
          var previousState = map.x2(local);
          var newState = local.r1t(provided.o1t_1, previousState);
          // Inline function 'kotlin.collections.set' call
          builder.n2(local, newState);
        }
      }
       while (inductionVariable <= last);
    return builder.e3();
  }
  function getValueOf(_this__u8e3s4, key) {
    var tmp0_safe_receiver = _this__u8e3s4.x2(key instanceof CompositionLocal ? key : THROW_CCE());
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.q2();
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  }
  var calculationBlockNestedLevel;
  function get_derivedStateObservers() {
    _init_properties_DerivedState_kt__eqt0x8();
    return derivedStateObservers;
  }
  var derivedStateObservers;
  function DerivedState() {
  }
  function derivedStateObservers_0() {
    _init_properties_DerivedState_kt__eqt0x8();
    var tmp0_elvis_lhs = get_derivedStateObservers().hw();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.collection.MutableVector' call
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp$ret$0 = fillArrayVal(Array(0), null);
      var this_0 = new MutableVector(tmp$ret$0, 0);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.derivedStateObservers.<anonymous>' call
      get_derivedStateObservers().p1z(this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  var properties_initialized_DerivedState_kt_scch8q;
  function _init_properties_DerivedState_kt__eqt0x8() {
    if (!properties_initialized_DerivedState_kt_scch8q) {
      properties_initialized_DerivedState_kt_scch8q = true;
      calculationBlockNestedLevel = new SnapshotThreadLocal();
      derivedStateObservers = new SnapshotThreadLocal();
    }
  }
  var InternalDisposableEffectScope;
  function DisposableEffectScope() {
  }
  function LaunchedEffect(key1, block, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.a1s(1179185413);
    sourceInformation($composer_0, 'C(LaunchedEffect)P(1)338@14267L58:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(1179185413, $changed, -1, 'androidx.compose.runtime.LaunchedEffect (Effects.kt:336)');
    }
    var applyContext = $composer_0.y1r();
    $composer_0.a1s(1036442561);
    sourceInformation($composer_0, 'CC(remember):Effects.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.s1j(key1);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.m1t();
    var tmp;
    if (invalid ? true : it === Companion_getInstance_0().s1m_1) {
      // Inline function 'androidx.compose.runtime.LaunchedEffect.<anonymous>' call
      var value = new LaunchedEffectImpl(applyContext, block);
      $composer_0.s1t(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    $composer_0.b1s();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.b1s();
  }
  function LaunchedEffectImpl(parentCoroutineContext, task) {
    this.q1z_1 = task;
    this.r1z_1 = CoroutineScope(parentCoroutineContext);
    this.s1z_1 = null;
  }
  protoOf(LaunchedEffectImpl).k1x = function () {
    var tmp0_safe_receiver = this.s1z_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      cancel(tmp0_safe_receiver, 'Old job was still running!');
    }
    this.s1z_1 = launch(this.r1z_1, VOID, VOID, this.q1z_1);
  };
  protoOf(LaunchedEffectImpl).j1x = function () {
    var tmp0_safe_receiver = this.s1z_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.dq(new LeftCompositionCancellationException());
    }
    this.s1z_1 = null;
  };
  protoOf(LaunchedEffectImpl).l1x = function () {
    var tmp0_safe_receiver = this.s1z_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.dq(new LeftCompositionCancellationException());
    }
    this.s1z_1 = null;
  };
  function LeftCompositionCancellationException() {
    PlatformOptimizedCancellationException.call(this, 'The coroutine scope left the composition');
    captureStack(this, LeftCompositionCancellationException);
  }
  function LaunchedEffect_0(key1, key2, block, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.a1s(590241125);
    sourceInformation($composer_0, 'C(LaunchedEffect)P(1,2)361@15275L64:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(590241125, $changed, -1, 'androidx.compose.runtime.LaunchedEffect (Effects.kt:359)');
    }
    var applyContext = $composer_0.y1r();
    $composer_0.a1s(1036443569);
    sourceInformation($composer_0, 'CC(remember):Effects.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!($composer_0.s1j(key1) | $composer_0.s1j(key2));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.m1t();
    var tmp;
    if (invalid ? true : it === Companion_getInstance_0().s1m_1) {
      // Inline function 'androidx.compose.runtime.LaunchedEffect.<anonymous>' call
      var value = new LaunchedEffectImpl(applyContext, block);
      $composer_0.s1t(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    $composer_0.b1s();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.b1s();
  }
  function SideEffect(effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1288466761, $changed, -1, 'androidx.compose.runtime.SideEffect (Effects.kt:47)');
    }
    $composer_0.i1t(effect);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
  }
  var properties_initialized_Effects_kt_cj8kem;
  function _init_properties_Effects_kt__be5lps() {
    if (!properties_initialized_Effects_kt_cj8kem) {
      properties_initialized_Effects_kt_cj8kem = true;
      InternalDisposableEffectScope = new DisposableEffectScope();
    }
  }
  function hashCodeOf($this, value) {
    var tmp;
    if (value instanceof Enum) {
      tmp = value.t9_1;
    } else {
      var tmp1_elvis_lhs = value == null ? null : hashCode(value);
      tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    }
    return tmp;
  }
  function JoinedKey(left, right) {
    this.t1z_1 = left;
    this.u1z_1 = right;
  }
  protoOf(JoinedKey).hashCode = function () {
    return imul(hashCodeOf(this, this.t1z_1), 31) + hashCodeOf(this, this.u1z_1) | 0;
  };
  protoOf(JoinedKey).toString = function () {
    return 'JoinedKey(left=' + toString_0(this.t1z_1) + ', right=' + toString_0(this.u1z_1) + ')';
  };
  protoOf(JoinedKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof JoinedKey))
      return false;
    var tmp0_other_with_cast = other instanceof JoinedKey ? other : THROW_CCE();
    if (!equals(this.t1z_1, tmp0_other_with_cast.t1z_1))
      return false;
    if (!equals(this.u1z_1, tmp0_other_with_cast.u1z_1))
      return false;
    return true;
  };
  function Key() {
  }
  var Key_instance_0;
  function Key_getInstance() {
    return Key_instance_0;
  }
  function MonotonicFrameClock() {
  }
  function get_monotonicFrameClock(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.hc(Key_instance_0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'A MonotonicFrameClock is not available in this CoroutineContext. Callers should supply an appropriate MonotonicFrameClock using withContext.';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function get_movableContentKey() {
    return movableContentKey;
  }
  var movableContentKey;
  function OpaqueKey(key) {
    this.v1z_1 = key;
  }
  protoOf(OpaqueKey).toString = function () {
    return 'OpaqueKey(key=' + this.v1z_1 + ')';
  };
  protoOf(OpaqueKey).hashCode = function () {
    return getStringHashCode(this.v1z_1);
  };
  protoOf(OpaqueKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OpaqueKey))
      return false;
    var tmp0_other_with_cast = other instanceof OpaqueKey ? other : THROW_CCE();
    if (!(this.v1z_1 === tmp0_other_with_cast.v1z_1))
      return false;
    return true;
  };
  function produceState(initialValue, key1, key2, producer, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.a1s(-1703169085);
    sourceInformation($composer_0, 'C(produceState)147@5571L41,148@5617L101:ProduceState.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-1703169085, $changed, -1, 'androidx.compose.runtime.produceState (ProduceState.kt:146)');
    }
    $composer_0.a1s(-1870531045);
    sourceInformation($composer_0, 'CC(remember):ProduceState.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.m1t();
    var tmp;
    if (false ? true : it === Companion_getInstance_0().s1m_1) {
      // Inline function 'androidx.compose.runtime.produceState.<anonymous>' call
      var value = mutableStateOf(initialValue);
      $composer_0.s1t(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.b1s();
    var result = tmp1_group;
    LaunchedEffect_0(key1, key2, produceState$slambda_0(producer, result, null), $composer_0, 584);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.b1s();
    return result;
  }
  function ProduceStateScope() {
  }
  function ProduceStateScopeImpl(state, coroutineContext) {
    this.w1z_1 = coroutineContext;
    this.x1z_1 = state;
  }
  protoOf(ProduceStateScopeImpl).vo = function () {
    return this.w1z_1;
  };
  protoOf(ProduceStateScopeImpl).d1a = function (_set____db54di) {
    this.x1z_1.d1a(_set____db54di);
  };
  protoOf(ProduceStateScopeImpl).q2 = function () {
    return this.x1z_1.q2();
  };
  function produceState$slambda($producer, $result, resultContinuation) {
    this.g20_1 = $producer;
    this.h20_1 = $result;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(produceState$slambda).j20 = function ($this$LaunchedEffect, $completion) {
    var tmp = this.k20($this$LaunchedEffect, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(produceState$slambda).yc = function (p1, $completion) {
    return this.j20((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(produceState$slambda).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 2;
            this.ac_1 = 1;
            suspendResult = this.g20_1(new ProduceStateScopeImpl(this.h20_1, this.i20_1.vo()), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
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
  protoOf(produceState$slambda).k20 = function ($this$LaunchedEffect, completion) {
    var i = new produceState$slambda(this.g20_1, this.h20_1, completion);
    i.i20_1 = $this$LaunchedEffect;
    return i;
  };
  function produceState$slambda_0($producer, $result, resultContinuation) {
    var i = new produceState$slambda($producer, $result, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.j20($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  var callbackLock;
  function _set_rereading__pnqtpo($this, value) {
    if (value) {
      $this.y1g_1 = $this.y1g_1 | 32;
    } else {
      $this.y1g_1 = $this.y1g_1 & -33;
    }
  }
  function _get_rereading__g2iruw($this) {
    return !(($this.y1g_1 & 32) === 0);
  }
  function _set_skipped__p8q2c5($this, value) {
    if (value) {
      $this.y1g_1 = $this.y1g_1 | 16;
    } else {
      $this.y1g_1 = $this.y1g_1 & -17;
    }
  }
  function Companion_2() {
  }
  protoOf(Companion_2).l20 = function (slots, anchors, newOwner) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!anchors.u()) {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = anchors.m() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = anchors.n(index);
          // Inline function 'androidx.compose.runtime.Companion.adoptAnchoredScopes.<anonymous>' call
          var tmp = slots.m20(item, 0);
          var recomposeScope = tmp instanceof RecomposeScopeImpl ? tmp : null;
          if (recomposeScope == null)
            null;
          else {
            recomposeScope.n20(newOwner);
          }
        }
         while (inductionVariable <= last);
    }
  };
  protoOf(Companion_2).o20 = function (slots, anchors) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!anchors.u()) {
      var tmp$ret$2;
      $l$block: {
        // Inline function 'androidx.compose.runtime.snapshots.fastAny' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = anchors.m() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = anchors.n(index);
            // Inline function 'androidx.compose.runtime.snapshots.fastAny.<anonymous>' call
            // Inline function 'androidx.compose.runtime.Companion.hasAnchoredRecomposeScopes.<anonymous>' call
            var tmp_0;
            if (slots.q1y(item)) {
              var tmp_1 = slots.p20(slots.p1p(item), 0);
              tmp_0 = tmp_1 instanceof RecomposeScopeImpl;
            } else {
              tmp_0 = false;
            }
            if (tmp_0) {
              tmp$ret$2 = true;
              break $l$block;
            }
          }
           while (inductionVariable <= last);
        tmp$ret$2 = false;
      }
      tmp = tmp$ret$2;
    } else {
      tmp = false;
    }
    return tmp;
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    return Companion_instance_3;
  }
  function RecomposeScopeImpl$end$lambda(this$0, $token, $instances) {
    return function (composition) {
      var tmp;
      var tmp_0;
      if (this$0.d1h_1 === $token ? $instances.equals(this$0.e1h_1) : false) {
        tmp_0 = composition instanceof CompositionImpl;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        // Inline function 'androidx.collection.MutableObjectIntMap.removeIf' call
        var this_0 = $instances;
        $l$block: {
          // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
          var m = this_0.nm_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              if (!this_1.ob(this_1.kb().lb(7)).ob(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.ob(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                      var index = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.MutableObjectIntMap.removeIf.<anonymous>' call
                      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>.<anonymous>' call
                      var tmp_1 = this_0.om_1[index];
                      var instance = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                      // Inline function 'kotlin.also' call
                      var this_2 = !(this_0.pm_1[index] === $token);
                      // Inline function 'kotlin.contracts.contract' call
                      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                      if (this_2) {
                        composition.t1y(instance, this$0);
                        var tmp0_safe_receiver = isInterface(instance, DerivedState) ? instance : null;
                        if (tmp0_safe_receiver == null)
                          null;
                        else {
                          // Inline function 'kotlin.let' call
                          // Inline function 'kotlin.contracts.contract' call
                          // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                          composition.u1y(tmp0_safe_receiver);
                          var tmp0_safe_receiver_0 = this$0.f1h_1;
                          var tmp_2;
                          if (tmp0_safe_receiver_0 == null) {
                            tmp_2 = null;
                          } else {
                            // Inline function 'kotlin.let' call
                            // Inline function 'kotlin.contracts.contract' call
                            tmp0_safe_receiver_0.r2(tmp0_safe_receiver);
                            var tmp_3;
                            if (tmp0_safe_receiver_0.m() === 0) {
                              this$0.f1h_1 = null;
                              tmp_3 = Unit_instance;
                            }
                            tmp_2 = Unit_instance;
                          }
                        }
                      }
                      if (this_2) {
                        this_0.zm(index);
                      }
                    }
                    slot = slot.mb(8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  break $l$block;
                }
              }
            }
             while (!(i === lastIndex));
        }
        var tmp_4;
        if ($instances.m() === 0) {
          this$0.e1h_1 = null;
          tmp_4 = Unit_instance;
        }
        tmp = tmp_4;
      }
      return Unit_instance;
    };
  }
  function RecomposeScopeImpl(owner) {
    this.y1g_1 = 0;
    this.z1g_1 = owner;
    this.a1h_1 = null;
    this.b1h_1 = null;
    this.c1h_1 = null;
    this.d1h_1 = 0;
    this.e1h_1 = null;
    this.f1h_1 = null;
  }
  protoOf(RecomposeScopeImpl).y1w = function () {
    var tmp;
    if (!(this.z1g_1 == null)) {
      var tmp0_safe_receiver = this.a1h_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y1w();
      tmp = tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(RecomposeScopeImpl).r1y = function () {
    return !(this.b1h_1 == null);
  };
  protoOf(RecomposeScopeImpl).u1u = function (value) {
    if (value) {
      this.y1g_1 = this.y1g_1 | 1;
    } else {
      this.y1g_1 = this.y1g_1 & -2;
    }
  };
  protoOf(RecomposeScopeImpl).x1n = function () {
    return !((this.y1g_1 & 1) === 0);
  };
  protoOf(RecomposeScopeImpl).f1s = function (value) {
    if (value) {
      this.y1g_1 = this.y1g_1 | 2;
    } else {
      this.y1g_1 = this.y1g_1 & -3;
    }
  };
  protoOf(RecomposeScopeImpl).p1y = function () {
    return !((this.y1g_1 & 2) === 0);
  };
  protoOf(RecomposeScopeImpl).g1u = function (value) {
    if (value) {
      this.y1g_1 = this.y1g_1 | 4;
    } else {
      this.y1g_1 = this.y1g_1 & -5;
    }
  };
  protoOf(RecomposeScopeImpl).g1s = function () {
    return !((this.y1g_1 & 4) === 0);
  };
  protoOf(RecomposeScopeImpl).b1p = function (value) {
    if (value) {
      this.y1g_1 = this.y1g_1 | 8;
    } else {
      this.y1g_1 = this.y1g_1 & -9;
    }
  };
  protoOf(RecomposeScopeImpl).j1s = function () {
    return !((this.y1g_1 & 8) === 0);
  };
  protoOf(RecomposeScopeImpl).r1o = function (composer) {
    var block = this.b1h_1;
    var observer = this.c1h_1;
    if (!(observer == null) ? !(block == null) : false) {
      observer.q20(this);
      try {
        block(composer, 1);
      }finally {
        observer.r20(this);
      }
      return Unit_instance;
    }
    if ((block == null ? null : block(composer, 1)) == null) {
      // Inline function 'kotlin.error' call
      var message = 'Invalid restart scope';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(RecomposeScopeImpl).m1w = function (value) {
    var tmp0_safe_receiver = this.z1g_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o1y(this, value);
    return tmp1_elvis_lhs == null ? InvalidationResult_IGNORED_getInstance() : tmp1_elvis_lhs;
  };
  protoOf(RecomposeScopeImpl).mv = function () {
    var tmp0_safe_receiver = this.z1g_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.s1y(this);
    }
    this.z1g_1 = null;
    this.e1h_1 = null;
    this.f1h_1 = null;
    var tmp1_safe_receiver = this.c1h_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.s20(this);
    }
  };
  protoOf(RecomposeScopeImpl).n20 = function (owner) {
    this.z1g_1 = owner;
  };
  protoOf(RecomposeScopeImpl).n1y = function () {
    var tmp0_safe_receiver = this.z1g_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.o1y(this, null);
  };
  protoOf(RecomposeScopeImpl).c1z = function (block) {
    this.b1h_1 = block;
  };
  protoOf(RecomposeScopeImpl).a1p = function (value) {
    if (value) {
      this.y1g_1 = this.y1g_1 | 64;
    } else {
      this.y1g_1 = this.y1g_1 & -65;
    }
  };
  protoOf(RecomposeScopeImpl).z1o = function () {
    return !((this.y1g_1 & 64) === 0);
  };
  protoOf(RecomposeScopeImpl).h1u = function () {
    return !((this.y1g_1 & 16) === 0);
  };
  protoOf(RecomposeScopeImpl).c1p = function (token) {
    this.d1h_1 = token;
    _set_skipped__p8q2c5(this, false);
  };
  protoOf(RecomposeScopeImpl).b1u = function () {
    _set_skipped__p8q2c5(this, true);
  };
  protoOf(RecomposeScopeImpl).a1y = function (instance) {
    if (_get_rereading__g2iruw(this))
      return false;
    var tmp0_elvis_lhs = this.e1h_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new MutableObjectIntMap();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.recordRead.<anonymous>' call
      this.e1h_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var token = tmp.ym(instance, this.d1h_1, -1);
    if (token === this.d1h_1) {
      return true;
    }
    if (isInterface(instance, DerivedState)) {
      var tmp1_elvis_lhs = this.f1h_1;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_1 = new MutableScatterMap();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.recordRead.<anonymous>' call
        this.f1h_1 = this_1;
        tmp_0 = this_1;
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      var tracked = tmp_0;
      tracked.mn(instance, instance.e1y().t20());
    }
    return false;
  };
  protoOf(RecomposeScopeImpl).l1w = function () {
    return !(this.f1h_1 == null);
  };
  protoOf(RecomposeScopeImpl).g1h = function (instances) {
    if (instances == null)
      return true;
    var tmp0_elvis_lhs = this.f1h_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return true;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var trackedDependencies = tmp;
    var tmp_0;
    if (instances.pn()) {
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.all' call
        var tmp_1;
        if (isInterface(instances, Collection)) {
          tmp_1 = instances.u();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        var tmp0_iterator = instances.o();
        while (tmp0_iterator.d1()) {
          var element = tmp0_iterator.f1();
          // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.isInvalidFor.<anonymous>' call
          var tmp_2;
          if (isInterface(element, DerivedState)) {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.isInvalidFor.<anonymous>.<anonymous>' call
            if (!isInterface(element, DerivedState))
              THROW_CCE();
            var tmp0_elvis_lhs_0 = element.m1z();
            var policy = tmp0_elvis_lhs_0 == null ? structuralEqualityPolicy() : tmp0_elvis_lhs_0;
            tmp_2 = policy.u20(element.e1y().t20(), trackedDependencies.x2(element));
          } else {
            tmp_2 = false;
          }
          if (!tmp_2) {
            tmp$ret$0 = false;
            break $l$block_0;
          }
        }
        tmp$ret$0 = true;
      }
      tmp_0 = tmp$ret$0;
    } else {
      tmp_0 = false;
    }
    if (tmp_0)
      return false;
    return true;
  };
  protoOf(RecomposeScopeImpl).q1o = function () {
    var tmp0_safe_receiver = this.z1g_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.rereadTrackedInstances.<anonymous>' call
      var tmp0_safe_receiver_0 = this.e1h_1;
      var tmp;
      if (tmp0_safe_receiver_0 == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        _set_rereading__pnqtpo(this, true);
        var tmp_0;
        try {
          var k = tmp0_safe_receiver_0.om_1;
          var v = tmp0_safe_receiver_0.pm_1;
          var tmp$ret$2;
          $l$block: {
            // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
            var m = tmp0_safe_receiver_0.nm_1;
            var lastIndex = m.length - 2 | 0;
            var inductionVariable = 0;
            if (inductionVariable <= lastIndex)
              do {
                var i = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var slot = m[i];
                // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                var this_0 = slot;
                if (!this_0.ob(this_0.kb().lb(7)).ob(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                  var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                  var inductionVariable_0 = 0;
                  if (inductionVariable_0 < bitCount)
                    do {
                      var j = inductionVariable_0;
                      inductionVariable_0 = inductionVariable_0 + 1 | 0;
                      // Inline function 'androidx.collection.isFull' call
                      if (slot.ob(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                        var index = (i << 3) + j | 0;
                        // Inline function 'androidx.collection.ObjectIntMap.forEach.<anonymous>' call
                        // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.rereadTrackedInstances.<anonymous>.<anonymous>.<anonymous>' call
                        var tmp_1 = k[index];
                        var value = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                        v[index];
                        tmp0_safe_receiver.z1x(value);
                      }
                      slot = slot.mb(8);
                    }
                     while (inductionVariable_0 < bitCount);
                  if (!(bitCount === 8)) {
                    tmp$ret$2 = Unit_instance;
                    break $l$block;
                  }
                }
              }
               while (!(i === lastIndex));
          }
          tmp_0 = tmp$ret$2;
        }finally {
          _set_rereading__pnqtpo(this, false);
        }
        tmp = Unit_instance;
      }
    }
  };
  protoOf(RecomposeScopeImpl).e1u = function (token) {
    var tmp0_safe_receiver = this.e1h_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>' call
      var tmp_0;
      var tmp_1;
      if (!this.h1u()) {
        var tmp$ret$3;
        $l$block: {
          // Inline function 'androidx.collection.ObjectIntMap.any' call
          // Inline function 'androidx.collection.ObjectIntMap.forEach' call
          var k = tmp0_safe_receiver.om_1;
          var v = tmp0_safe_receiver.pm_1;
          $l$block_0: {
            // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
            var m = tmp0_safe_receiver.nm_1;
            var lastIndex = m.length - 2 | 0;
            var inductionVariable = 0;
            if (inductionVariable <= lastIndex)
              do {
                var i = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var slot = m[i];
                // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                var this_0 = slot;
                if (!this_0.ob(this_0.kb().lb(7)).ob(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                  var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                  var inductionVariable_0 = 0;
                  if (inductionVariable_0 < bitCount)
                    do {
                      var j = inductionVariable_0;
                      inductionVariable_0 = inductionVariable_0 + 1 | 0;
                      // Inline function 'androidx.collection.isFull' call
                      if (slot.ob(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                        var index = (i << 3) + j | 0;
                        // Inline function 'androidx.collection.ObjectIntMap.forEach.<anonymous>' call
                        // Inline function 'androidx.collection.ObjectIntMap.any.<anonymous>' call
                        var tmp_2 = k[index];
                        (tmp_2 == null ? true : !(tmp_2 == null)) || THROW_CCE();
                        // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>' call
                        if (!(v[index] === token)) {
                          tmp$ret$3 = true;
                          break $l$block;
                        }
                      }
                      slot = slot.mb(8);
                    }
                     while (inductionVariable_0 < bitCount);
                  if (!(bitCount === 8)) {
                    break $l$block_0;
                  }
                }
              }
               while (!(i === lastIndex));
          }
          tmp$ret$3 = false;
        }
        tmp_1 = tmp$ret$3;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = RecomposeScopeImpl$end$lambda(this, token, tmp0_safe_receiver);
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  function RecomposeScopeOwner() {
  }
  function updateChangedFlags(flags) {
    _init_properties_RecomposeScopeImpl_kt__t15emj();
    var lowBits = flags & 306783378;
    var highBits = flags & 613566756;
    return flags & -920350135 | (lowBits | highBits >> 1) | lowBits << 1 & highBits;
  }
  var properties_initialized_RecomposeScopeImpl_kt_pxgdx3;
  function _init_properties_RecomposeScopeImpl_kt__t15emj() {
    if (!properties_initialized_RecomposeScopeImpl_kt_pxgdx3) {
      properties_initialized_RecomposeScopeImpl_kt_pxgdx3 = true;
      callbackLock = new SynchronizedObject();
    }
  }
  var ProduceAnotherFrame;
  var FramePending;
  var State_ShutDown_instance;
  var State_ShuttingDown_instance;
  var State_Inactive_instance;
  var State_InactivePendingWork_instance;
  var State_Idle_instance;
  var State_PendingWork_instance;
  var State_entriesInitialized;
  function State_initEntries() {
    if (State_entriesInitialized)
      return Unit_instance;
    State_entriesInitialized = true;
    State_ShutDown_instance = new State('ShutDown', 0);
    State_ShuttingDown_instance = new State('ShuttingDown', 1);
    State_Inactive_instance = new State('Inactive', 2);
    State_InactivePendingWork_instance = new State('InactivePendingWork', 3);
    State_Idle_instance = new State('Idle', 4);
    State_PendingWork_instance = new State('PendingWork', 5);
  }
  function addRunning($this, info) {
    $l$loop: while (true) {
      var old = $this.v20_1.q2();
      var new_0 = old.a1(info);
      if (old === new_0 ? true : $this.v20_1.e1a(old, new_0))
        break $l$loop;
    }
  }
  function removeRunning($this, info) {
    $l$loop: while (true) {
      var old = $this.v20_1.q2();
      var new_0 = old.b1(info);
      if (old === new_0 ? true : $this.v20_1.e1a(old, new_0))
        break $l$loop;
    }
  }
  function invoke$clearRecompositionState(toRecompose, toInsert, toApply, toLateApply, toComplete, modifiedValues, alreadyComposed) {
    toRecompose.h1();
    toInsert.h1();
    toApply.h1();
    toLateApply.h1();
    toComplete.h1();
    modifiedValues.h1();
    alreadyComposed.h1();
  }
  function invoke$fillToInsert(toInsert, this$0) {
    toInsert.h1();
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this$0.z20_1;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    var this_0 = this$0.h21_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.m() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.n(index);
        // Inline function 'androidx.compose.runtime.Recomposer$runRecomposeAndApplyChanges$slambda.invoke.fillToInsert.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        toInsert.a1(item);
      }
       while (inductionVariable <= last);
    this$0.h21_1.h1();
  }
  function Recomposer$runRecomposeAndApplyChanges$slambda$lambda(this$0, $toRecompose, $modifiedValues, $alreadyComposed, $toInsert, $toApply, $toLateApply, $toComplete) {
    return function (frameTime) {
      var tmp;
      if (_get_hasBroadcastFrameClockAwaiters__y6inql(this$0)) {
        $l$block: {
          // Inline function 'androidx.compose.runtime.trace' call
          var sectionName = 'Recomposer:animation';
          var token = Trace_instance.d1q(sectionName);
          try {
            this$0.y20_1.o1g(frameTime);
            Companion_instance_12.v21();
            break $l$block;
          }finally {
            Trace_instance.s1q(token);
          }
        }
        tmp = Unit_instance;
      }
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName_0 = 'Recomposer:recompose';
        var token_0 = Trace_instance.d1q(sectionName_0);
        try {
          recordComposerModifications(this$0);
          // Inline function 'androidx.compose.runtime.synchronized' call
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          this$0.z20_1;
          // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
          var this_0 = this$0.f21_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable = 0;
          var last = this_0.m() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item = this_0.n(index);
              // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              // Inline function 'kotlin.collections.plusAssign' call
              $toRecompose.a1(item);
            }
             while (inductionVariable <= last);
          this$0.f21_1.h1();
          $modifiedValues.h1();
          $alreadyComposed.h1();
          $l$loop: while (true) {
            var tmp_0;
            // Inline function 'kotlin.collections.isNotEmpty' call
            if (!$toRecompose.u()) {
              tmp_0 = true;
            } else {
              // Inline function 'kotlin.collections.isNotEmpty' call
              tmp_0 = !$toInsert.u();
            }
            if (!tmp_0) {
              break $l$loop;
            }
            try {
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              var this_1 = $toRecompose;
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_0 = 0;
              var last_0 = this_1.m() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = this_1.n(index_0);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  $alreadyComposed.i1v(item_0);
                  var tmp0_safe_receiver = performRecompose(this$0, item_0, $modifiedValues);
                  if (tmp0_safe_receiver == null)
                    null;
                  else {
                    // Inline function 'kotlin.let' call
                    // Inline function 'kotlin.contracts.contract' call
                    $toApply.a1(tmp0_safe_receiver);
                  }
                }
                 while (inductionVariable_0 <= last_0);
            } catch ($p) {
              if ($p instanceof Exception) {
                var e = $p;
                processCompositionError$default(this$0, e, VOID, true);
                invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete, $modifiedValues, $alreadyComposed);
                return Unit_instance;
              } else {
                throw $p;
              }
            }
            finally {
              $toRecompose.h1();
            }
            if ($modifiedValues.pn()) {
              // Inline function 'androidx.compose.runtime.synchronized' call
              // Inline function 'kotlinx.atomicfu.locks.synchronized' call
              this$0.z20_1;
              var this_2 = _get_knownCompositions__y8veaj(this$0);
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_1 = 0;
              var last_1 = this_2.m() - 1 | 0;
              var tmp_1;
              if (inductionVariable_1 <= last_1) {
                do {
                  var index_1 = inductionVariable_1;
                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                  var item_1 = this_2.n(index_1);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  if (!$alreadyComposed.w21(item_1) ? item_1.y1x($modifiedValues) : false) {
                    // Inline function 'kotlin.collections.plusAssign' call
                    $toRecompose.a1(item_1);
                  }
                }
                 while (inductionVariable_1 <= last_1);
                tmp_1 = Unit_instance;
              }
            }
            if ($toRecompose.u()) {
              try {
                invoke$fillToInsert($toInsert, this$0);
                $l$loop_0: while (true) {
                  // Inline function 'kotlin.collections.isNotEmpty' call
                  if (!!$toInsert.u()) {
                    break $l$loop_0;
                  }
                  // Inline function 'kotlin.collections.plusAssign' call
                  var this_3 = $toLateApply;
                  var elements = performInsertValues(this$0, $toInsert, $modifiedValues);
                  addAll(this_3, elements);
                  invoke$fillToInsert($toInsert, this$0);
                }
              } catch ($p) {
                if ($p instanceof Exception) {
                  var e_0 = $p;
                  processCompositionError$default(this$0, e_0, VOID, true);
                  invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete, $modifiedValues, $alreadyComposed);
                  return Unit_instance;
                } else {
                  throw $p;
                }
              }
            }
          }
          // Inline function 'kotlin.collections.isNotEmpty' call
          if (!$toApply.u()) {
            var tmp0_this = this$0;
            tmp0_this.x20_1 = tmp0_this.x20_1.hb();
            try {
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              var this_4 = $toApply;
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_2 = 0;
              var last_2 = this_4.m() - 1 | 0;
              if (inductionVariable_2 <= last_2)
                do {
                  var index_2 = inductionVariable_2;
                  inductionVariable_2 = inductionVariable_2 + 1 | 0;
                  var item_2 = this_4.n(index_2);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  $toComplete.a1(item_2);
                }
                 while (inductionVariable_2 <= last_2);
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              var this_5 = $toApply;
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_3 = 0;
              var last_3 = this_5.m() - 1 | 0;
              if (inductionVariable_3 <= last_3)
                do {
                  var index_3 = inductionVariable_3;
                  inductionVariable_3 = inductionVariable_3 + 1 | 0;
                  var item_3 = this_5.n(index_3);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  item_3.k1y();
                }
                 while (inductionVariable_3 <= last_3);
            } catch ($p) {
              if ($p instanceof Exception) {
                var e_1 = $p;
                processCompositionError$default(this$0, e_1);
                invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete, $modifiedValues, $alreadyComposed);
                return Unit_instance;
              } else {
                throw $p;
              }
            }
            finally {
              $toApply.h1();
            }
          }
          // Inline function 'kotlin.collections.isNotEmpty' call
          if (!$toLateApply.u()) {
            try {
              // Inline function 'kotlin.collections.plusAssign' call
              var this_6 = $toComplete;
              var elements_0 = $toLateApply;
              addAll(this_6, elements_0);
              // Inline function 'kotlin.collections.forEach' call
              var tmp0_iterator = $toLateApply.o();
              while (tmp0_iterator.d1()) {
                var element = tmp0_iterator.f1();
                // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                element.l1y();
              }
            } catch ($p) {
              if ($p instanceof Exception) {
                var e_2 = $p;
                processCompositionError$default(this$0, e_2);
                invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete, $modifiedValues, $alreadyComposed);
                return Unit_instance;
              } else {
                throw $p;
              }
            }
            finally {
              $toLateApply.h1();
            }
          }
          // Inline function 'kotlin.collections.isNotEmpty' call
          if (!$toComplete.u()) {
            try {
              // Inline function 'kotlin.collections.forEach' call
              var tmp0_iterator_0 = $toComplete.o();
              while (tmp0_iterator_0.d1()) {
                var element_0 = tmp0_iterator_0.f1();
                // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                element_0.h1s();
              }
            } catch ($p) {
              if ($p instanceof Exception) {
                var e_3 = $p;
                processCompositionError$default(this$0, e_3);
                invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete, $modifiedValues, $alreadyComposed);
                return Unit_instance;
              } else {
                throw $p;
              }
            }
            finally {
              $toComplete.h1();
            }
          }
          // Inline function 'androidx.compose.runtime.synchronized' call
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          this$0.z20_1;
          // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          deriveStateLocked(this$0);
          Companion_instance_12.x21();
          $alreadyComposed.h1();
          $modifiedValues.h1();
          this$0.l21_1 = null;
          break $l$block_0;
        }finally {
          Trace_instance.s1q(token_0);
        }
      }
      return Unit_instance;
    };
  }
  function Recomposer$recompositionRunner$slambda$lambda(this$0) {
    return function (changed, _anonymous_parameter_1__qggqgd) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this$0.z20_1;
      // Inline function 'androidx.compose.runtime.Recomposer.recompositionRunner.<anonymous>.<anonymous>.<anonymous>' call
      var tmp;
      if (this$0.r21_1.q2().u9(State_Idle_getInstance()) >= 0) {
        // Inline function 'androidx.compose.runtime.collection.fastForEach' call
        if (changed instanceof IdentityArraySet) {
          // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
          // Inline function 'kotlin.contracts.contract' call
          var values = changed.b1q_1;
          var inductionVariable = 0;
          var last = changed.a1q_1;
          if (inductionVariable < last)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              $l$block: {
                // Inline function 'androidx.compose.runtime.Recomposer.recompositionRunner.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                var tmp_0 = values[i];
                var it = !(tmp_0 == null) ? tmp_0 : THROW_CCE();
                var tmp_1;
                if (it instanceof StateObjectImpl) {
                  // Inline function 'androidx.compose.runtime.snapshots.Companion.Composition' call
                  var tmp$ret$0 = _ReaderKind___init__impl__jqeebu(1);
                  tmp_1 = !it.y21(tmp$ret$0);
                } else {
                  tmp_1 = false;
                }
                if (tmp_1) {
                  break $l$block;
                }
                this$0.e21_1.i1v(it);
              }
            }
             while (inductionVariable < last);
        } else {
          // Inline function 'kotlin.collections.forEach' call
          var tmp0_iterator = changed.o();
          while (tmp0_iterator.d1()) {
            var element = tmp0_iterator.f1();
            $l$block_0: {
              // Inline function 'androidx.compose.runtime.Recomposer.recompositionRunner.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              var tmp_2;
              if (element instanceof StateObjectImpl) {
                // Inline function 'androidx.compose.runtime.snapshots.Companion.Composition' call
                var tmp$ret$2 = _ReaderKind___init__impl__jqeebu(1);
                tmp_2 = !element.y21(tmp$ret$2);
              } else {
                tmp_2 = false;
              }
              if (tmp_2) {
                break $l$block_0;
              }
              this$0.e21_1.i1v(element);
            }
          }
        }
        tmp = deriveStateLocked(this$0);
      } else {
        tmp = null;
      }
      var tmp0_safe_receiver = tmp;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$7 = _Result___init__impl__xyqfz8(Unit_instance);
        tmp0_safe_receiver.t6(tmp$ret$7);
      }
      return Unit_instance;
    };
  }
  function Recomposer$recompositionRunner$slambda$slambda($block, $parentFrameClock, resultContinuation) {
    this.h22_1 = $block;
    this.i22_1 = $parentFrameClock;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$recompositionRunner$slambda$slambda).j20 = function ($this$coroutineScope, $completion) {
    var tmp = this.k20($this$coroutineScope, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(Recomposer$recompositionRunner$slambda$slambda).yc = function (p1, $completion) {
    return this.j20((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$recompositionRunner$slambda$slambda).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 2;
            this.ac_1 = 1;
            suspendResult = this.h22_1(this.j22_1, this.i22_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
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
  protoOf(Recomposer$recompositionRunner$slambda$slambda).k20 = function ($this$coroutineScope, completion) {
    var i = new Recomposer$recompositionRunner$slambda$slambda(this.h22_1, this.i22_1, completion);
    i.j22_1 = $this$coroutineScope;
    return i;
  };
  function Recomposer$recompositionRunner$slambda$slambda_0($block, $parentFrameClock, resultContinuation) {
    var i = new Recomposer$recompositionRunner$slambda$slambda($block, $parentFrameClock, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.j20($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function State(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function _get_knownCompositions__y8veaj($this) {
    var tmp0_elvis_lhs = $this.d21_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.<get-knownCompositions>.<anonymous>' call
      var compositions = $this.c21_1;
      var newCache = compositions.u() ? emptyList() : ArrayList_init_$Create$_1(compositions);
      $this.d21_1 = newCache;
      tmp = newCache;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this) {
    return !$this.q21_1 ? $this.y20_1.n1g() : false;
  }
  function _get_hasBroadcastFrameClockAwaiters__y6inql($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.z20_1;
    // Inline function 'androidx.compose.runtime.Recomposer.<get-hasBroadcastFrameClockAwaiters>.<anonymous>' call
    return _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
  }
  function deriveStateLocked($this) {
    if ($this.r21_1.q2().u9(State_ShuttingDown_getInstance()) <= 0) {
      clearKnownCompositionsLocked($this);
      $this.e21_1 = new IdentityArraySet();
      $this.f21_1.h1();
      $this.g21_1.h1();
      $this.h21_1.h1();
      $this.k21_1 = null;
      var tmp0_safe_receiver = $this.m21_1;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.fs();
      $this.m21_1 = null;
      $this.p21_1 = null;
      return null;
    }
    var tmp;
    if (!($this.p21_1 == null)) {
      tmp = State_Inactive_getInstance();
    } else {
      if ($this.a21_1 == null) {
        $this.e21_1 = new IdentityArraySet();
        $this.f21_1.h1();
        tmp = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this) ? State_InactivePendingWork_getInstance() : State_Inactive_getInstance();
      } else {
        var tmp_0;
        var tmp_1;
        var tmp_2;
        var tmp_3;
        var tmp_4;
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!$this.f21_1.u()) {
          tmp_4 = true;
        } else {
          tmp_4 = $this.e21_1.pn();
        }
        if (tmp_4) {
          tmp_3 = true;
        } else {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_3 = !$this.g21_1.u();
        }
        if (tmp_3) {
          tmp_2 = true;
        } else {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_2 = !$this.h21_1.u();
        }
        if (tmp_2) {
          tmp_1 = true;
        } else {
          tmp_1 = $this.n21_1 > 0;
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
        }
        if (tmp_0) {
          tmp = State_PendingWork_getInstance();
        } else {
          tmp = State_Idle_getInstance();
        }
      }
    }
    var newState = tmp;
    $this.r21_1.d1a(newState);
    var tmp_5;
    if (newState.equals(State_PendingWork_getInstance())) {
      // Inline function 'kotlin.also' call
      var this_0 = $this.m21_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.deriveStateLocked.<anonymous>' call
      $this.m21_1 = null;
      tmp_5 = this_0;
    } else {
      tmp_5 = null;
    }
    return tmp_5;
  }
  function _get_shouldKeepRecomposing__5j79sd($this) {
    var tmp;
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.z20_1;
    // Inline function 'androidx.compose.runtime.Recomposer.<get-shouldKeepRecomposing>.<anonymous>' call
    if (!$this.o21_1) {
      tmp = true;
    } else {
      var tmp$ret$4;
      $l$block: {
        // Inline function 'kotlin.sequences.any' call
        var tmp0_iterator = $this.s21_1.dv().o();
        while (tmp0_iterator.d1()) {
          var element = tmp0_iterator.f1();
          // Inline function 'androidx.compose.runtime.Recomposer.<get-shouldKeepRecomposing>.<anonymous>' call
          if (element.wo()) {
            tmp$ret$4 = true;
            break $l$block;
          }
        }
        tmp$ret$4 = false;
      }
      tmp = tmp$ret$4;
    }
    return tmp;
  }
  function RecomposerInfoImpl($outer) {
    this.k22_1 = $outer;
  }
  function RecomposerErrorState(recoverable, cause) {
    this.l22_1 = recoverable;
    this.m22_1 = cause;
  }
  function recordComposerModifications($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.z20_1;
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
    if ($this.e21_1.u())
      return _get_hasFrameWorkLocked__1gtyf7($this);
    // Inline function 'kotlin.also' call
    var this_0 = $this.e21_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>.<anonymous>' call
    $this.e21_1 = new IdentityArraySet();
    var changes = this_0;
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.z20_1;
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
    var compositions = _get_knownCompositions__y8veaj($this);
    var complete = false;
    try {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      $l$block: {
        // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = compositions.m() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = compositions.n(index);
            // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>.<anonymous>' call
            item.w1x(changes);
            if ($this.r21_1.q2().u9(State_ShuttingDown_getInstance()) <= 0) {
              break $l$block;
            }
          }
           while (inductionVariable <= last);
      }
      $this.e21_1 = new IdentityArraySet();
      complete = true;
    }finally {
      if (!complete) {
        // Inline function 'androidx.compose.runtime.synchronized' call
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        $this.z20_1;
        $this.e21_1.n22(changes);
      }
    }
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.z20_1;
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
    if (!(deriveStateLocked($this) == null)) {
      // Inline function 'kotlin.error' call
      var message = 'called outside of runRecomposeAndApplyChanges';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return _get_hasFrameWorkLocked__1gtyf7($this);
  }
  function registerRunnerJob($this, callingJob) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.z20_1;
    // Inline function 'androidx.compose.runtime.Recomposer.registerRunnerJob.<anonymous>' call
    var tmp0_safe_receiver = $this.b21_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
    if ($this.r21_1.q2().u9(State_ShuttingDown_getInstance()) <= 0) {
      // Inline function 'kotlin.error' call
      var message = 'Recomposer shut down';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (!($this.a21_1 == null)) {
      // Inline function 'kotlin.error' call
      var message_0 = 'Recomposer already running';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    $this.a21_1 = callingJob;
    deriveStateLocked($this);
  }
  function processCompositionError($this, e, failedInitialComposition, recoverable) {
    var tmp;
    if (Companion_getInstance_4().w20_1.hw()) {
      tmp = !(e instanceof ComposeRuntimeError);
    } else {
      tmp = false;
    }
    if (tmp) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      $this.z20_1;
      // Inline function 'androidx.compose.runtime.Recomposer.processCompositionError.<anonymous>' call
      logError('Error was captured in composition while live edit was enabled.', e);
      $this.g21_1.h1();
      $this.f21_1.h1();
      $this.e21_1 = new IdentityArraySet();
      $this.h21_1.h1();
      $this.i21_1.h1();
      $this.j21_1.h1();
      $this.p21_1 = new RecomposerErrorState(recoverable, e);
      if (!(failedInitialComposition == null)) {
        var tmp0_elvis_lhs = $this.k21_1;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          // Inline function 'kotlin.also' call
          // Inline function 'kotlin.collections.mutableListOf' call
          var this_0 = ArrayList_init_$Create$();
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.Recomposer.processCompositionError.<anonymous>.<anonymous>' call
          $this.k21_1 = this_0;
          tmp_0 = this_0;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var failedCompositions = tmp_0;
        if (!failedCompositions.s(failedInitialComposition)) {
          // Inline function 'kotlin.collections.plusAssign' call
          failedCompositions.a1(failedInitialComposition);
        }
        removeKnownCompositionLocked($this, failedInitialComposition);
      }
      deriveStateLocked($this);
    } else {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      $this.z20_1;
      var errorState = $this.p21_1;
      var tmp_1;
      if (errorState == null) {
        $this.p21_1 = new RecomposerErrorState(false, e);
        tmp_1 = Unit_instance;
      } else {
        throw errorState.m22_1;
      }
      throw e;
    }
  }
  function processCompositionError$default($this, e, failedInitialComposition, recoverable, $super) {
    failedInitialComposition = failedInitialComposition === VOID ? null : failedInitialComposition;
    recoverable = recoverable === VOID ? false : recoverable;
    return processCompositionError($this, e, failedInitialComposition, recoverable);
  }
  function clearKnownCompositionsLocked($this) {
    $this.c21_1.h1();
    $this.d21_1 = emptyList();
  }
  function removeKnownCompositionLocked($this, composition) {
    // Inline function 'kotlin.collections.minusAssign' call
    $this.c21_1.b1(composition);
    $this.d21_1 = null;
  }
  function addKnownCompositionLocked($this, composition) {
    // Inline function 'kotlin.collections.plusAssign' call
    $this.c21_1.a1(composition);
    $this.d21_1 = null;
  }
  function _get_hasSchedulingWork__b617oy($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.z20_1;
    // Inline function 'androidx.compose.runtime.Recomposer.<get-hasSchedulingWork>.<anonymous>' call
    var tmp;
    var tmp_0;
    if ($this.e21_1.pn()) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp_0 = !$this.f21_1.u();
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
    }
    return tmp;
  }
  function awaitWorkAvailable($this, $completion) {
    var tmp = new $awaitWorkAvailableCOROUTINE$2($this, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  }
  function recompositionRunner($this, block, $completion) {
    // Inline function 'kotlin.js.getCoroutineContext' call
    var tmp$ret$0 = $completion.s6();
    var parentFrameClock = get_monotonicFrameClock(tmp$ret$0);
    return withContext($this.y20_1, Recomposer$recompositionRunner$slambda_0($this, block, parentFrameClock, null), $completion);
  }
  function performInitialMovableContentInserts($this, composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.z20_1;
    var tmp;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.runtime.snapshots.fastAny' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      var this_0 = $this.h21_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.m() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.n(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastAny.<anonymous>' call
          // Inline function 'androidx.compose.runtime.Recomposer.performInitialMovableContentInserts.<anonymous>.<anonymous>' call
          if (equals(item.k1p_1, composition)) {
            tmp$ret$1 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = false;
    }
    if (!tmp$ret$1) {
      return Unit_instance;
    }
    // Inline function 'kotlin.collections.mutableListOf' call
    var toInsert = ArrayList_init_$Create$();
    performInitialMovableContentInserts$fillToInsert(toInsert, $this, composition);
    $l$loop: while (true) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!!toInsert.u()) {
        break $l$loop;
      }
      performInsertValues($this, toInsert, null);
      performInitialMovableContentInserts$fillToInsert(toInsert, $this, composition);
    }
  }
  function performRecompose($this, composition, modifiedValues) {
    var tmp;
    if (composition.b1x() ? true : composition.p1x()) {
      tmp = true;
    } else {
      var tmp0_safe_receiver = $this.l21_1;
      tmp = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s(composition)) === true;
    }
    if (tmp)
      return null;
    var tmp_0;
    $l$block_0: {
      // Inline function 'androidx.compose.runtime.Recomposer.composing' call
      var snapshot = Companion_instance_12.x22(readObserverOf($this, composition), writeObserverOf($this, composition, modifiedValues));
      try {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
          var previous = snapshot.y22();
          try {
            // Inline function 'androidx.compose.runtime.Recomposer.performRecompose.<anonymous>' call
            if ((modifiedValues == null ? null : modifiedValues.pn()) === true) {
              composition.q1u(Recomposer$performRecompose$lambda(modifiedValues, composition));
            }
            tmp$ret$1 = composition.h1y();
            break $l$block;
          }finally {
            snapshot.z22(previous);
          }
        }
        break $l$block_0;
      }finally {
        applyAndCheck($this, snapshot);
      }
    }
    if (tmp$ret$1) {
      tmp_0 = composition;
    } else {
      tmp_0 = null;
    }
    return tmp_0;
  }
  function performInsertValues($this, references, modifiedValues) {
    // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy' call
    // Inline function 'kotlin.contracts.contract' call
    var destination = HashMap_init_$Create$_0(references.m());
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = references.m() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = references.n(index);
        // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy.<anonymous>' call
        // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>' call
        var key = item.k1p_1;
        // Inline function 'kotlin.collections.getOrPut' call
        var value = destination.x2(key);
        var tmp;
        if (value == null) {
          // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy.<anonymous>.<anonymous>' call
          var answer = ArrayList_init_$Create$();
          destination.n2(key, answer);
          tmp = answer;
        } else {
          tmp = value;
        }
        var list = tmp;
        list.a1(item);
      }
       while (inductionVariable <= last);
    var tasks = destination;
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = tasks.m2().o();
    while (tmp0_iterator.d1()) {
      var tmp1_loop_parameter = tmp0_iterator.f1();
      // Inline function 'kotlin.collections.component1' call
      var composition = tmp1_loop_parameter.p2();
      // Inline function 'kotlin.collections.component2' call
      var refs = tmp1_loop_parameter.q2();
      runtimeCheck(!composition.b1x());
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.Recomposer.composing' call
        var snapshot = Companion_instance_12.x22(readObserverOf($this, composition), writeObserverOf($this, composition, modifiedValues));
        try {
          $l$block: {
            // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
            var previous = snapshot.y22();
            try {
              // Inline function 'androidx.compose.runtime.synchronized' call
              // Inline function 'kotlinx.atomicfu.locks.synchronized' call
              $this.z20_1;
              // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>' call
              // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
              // Inline function 'kotlin.contracts.contract' call
              var target = ArrayList_init_$Create$_0(refs.m());
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_0 = 0;
              var last_0 = refs.m() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = refs.n(index_0);
                  // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
                  // Inline function 'kotlin.collections.plusAssign' call
                  // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>.<anonymous>' call
                  var element = to(item_0, removeLastMultiValue($this.i21_1, item_0.i1p_1));
                  target.a1(element);
                }
                 while (inductionVariable_0 <= last_0);
              var pairs = target;
              composition.i1y(pairs);
              break $l$block;
            }finally {
              snapshot.z22(previous);
            }
          }
          break $l$block_0;
        }finally {
          applyAndCheck($this, snapshot);
        }
      }
    }
    return toList(tasks.k2());
  }
  function discardUnusedValues($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.z20_1;
    // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>' call
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.i21_1.u()) {
      var references = flatten($this.i21_1.l2());
      $this.i21_1.h1();
      // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
      // Inline function 'kotlin.contracts.contract' call
      var target = ArrayList_init_$Create$_0(references.m());
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = references.m() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = references.n(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
          // Inline function 'kotlin.collections.plusAssign' call
          // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>.<anonymous>' call
          var element = to(item, $this.j21_1.x2(item));
          target.a1(element);
        }
         while (inductionVariable <= last);
      var unusedValues = target;
      $this.j21_1.h1();
      tmp = unusedValues;
    } else {
      tmp = emptyList();
    }
    var unusedValues_0 = tmp;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = unusedValues_0.m() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = unusedValues_0.n(index_0);
        // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>' call
        var reference = item_0.se();
        var state = item_0.te();
        if (!(state == null)) {
          reference.k1p_1.j1y(state);
        }
      }
       while (inductionVariable_0 <= last_0);
  }
  function readObserverOf($this, composition) {
    return Recomposer$readObserverOf$lambda(composition);
  }
  function writeObserverOf($this, composition, modifiedValues) {
    return Recomposer$writeObserverOf$lambda(composition, modifiedValues);
  }
  function applyAndCheck($this, snapshot) {
    try {
      var applyResult = snapshot.n23();
      if (applyResult instanceof Failure) {
        // Inline function 'kotlin.error' call
        var message = 'Unsupported concurrent change during composition. A state object was modified by composition as well as being modified outside composition.';
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }finally {
      snapshot.ss();
    }
  }
  function _get_hasFrameWorkLocked__1gtyf7($this) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.f21_1.u()) {
      tmp = true;
    } else {
      tmp = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
    }
    return tmp;
  }
  function Companion_3() {
    Companion_instance_4 = this;
    this.v20_1 = MutableStateFlow(persistentSetOf());
    this.w20_1 = new AtomicReference(false);
  }
  var Companion_instance_4;
  function Companion_getInstance_4() {
    if (Companion_instance_4 == null)
      new Companion_3();
    return Companion_instance_4;
  }
  function performInitialMovableContentInserts$fillToInsert(toInsert, this$0, $composition) {
    toInsert.h1();
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this$0.z20_1;
    var iterator = this$0.h21_1.o();
    while (iterator.d1()) {
      var value = iterator.f1();
      if (equals(value.k1p_1, $composition)) {
        toInsert.a1(value);
        iterator.e1();
      }
    }
  }
  function Recomposer$broadcastFrameClock$lambda(this$0) {
    return function () {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this$0.z20_1;
      // Inline function 'androidx.compose.runtime.Recomposer.broadcastFrameClock.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.also' call
      var this_0 = deriveStateLocked(this$0);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.broadcastFrameClock.<anonymous>.<anonymous>.<anonymous>' call
      if (this$0.r21_1.q2().u9(State_ShuttingDown_getInstance()) <= 0)
        throw CancellationException_init_$Create$('Recomposer shutdown; frame clock awaiter will never resume', this$0.b21_1);
      if (this_0 == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$4 = _Result___init__impl__xyqfz8(Unit_instance);
        this_0.t6(tmp$ret$4);
      }
      return Unit_instance;
    };
  }
  function Recomposer$effectJob$lambda$lambda(this$0, $throwable) {
    return function (runnerJobCause) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this$0.z20_1;
      var tmp = this$0;
      var tmp0_safe_receiver = $throwable;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.apply' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1;
        if (runnerJobCause == null) {
          tmp_1 = null;
        } else {
          // Inline function 'kotlin.takeIf' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp_2;
          // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          if (!(runnerJobCause instanceof CancellationException)) {
            tmp_2 = runnerJobCause;
          } else {
            tmp_2 = null;
          }
          tmp_1 = tmp_2;
        }
        var tmp1_safe_receiver = tmp_1;
        if (tmp1_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          addSuppressed(tmp0_safe_receiver, tmp1_safe_receiver);
        }
        tmp_0 = tmp0_safe_receiver;
      }
      tmp.b21_1 = tmp_0;
      this$0.r21_1.d1a(State_ShutDown_getInstance());
      return Unit_instance;
    };
  }
  function Recomposer$effectJob$lambda(this$0) {
    return function (throwable) {
      var cancellation = CancellationException_init_$Create$('Recomposer effect job completed', throwable);
      var continuationToResume = null;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this$0.z20_1;
      // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>' call
      var runnerJob = this$0.a21_1;
      var tmp;
      if (!(runnerJob == null)) {
        this$0.r21_1.d1a(State_ShuttingDown_getInstance());
        if (!this$0.o21_1) {
          runnerJob.dq(cancellation);
        } else if (!(this$0.m21_1 == null)) {
          continuationToResume = this$0.m21_1;
        }
        this$0.m21_1 = null;
        tmp = runnerJob.xp(Recomposer$effectJob$lambda$lambda(this$0, throwable));
      } else {
        this$0.b21_1 = cancellation;
        this$0.r21_1.d1a(State_ShutDown_getInstance());
        tmp = Unit_instance;
      }
      var tmp0_safe_receiver = continuationToResume;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_instance);
        tmp0_safe_receiver.t6(tmp$ret$3);
      }
      return Unit_instance;
    };
  }
  function Recomposer$runRecomposeAndApplyChanges$slambda(this$0, resultContinuation) {
    this.w23_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).g24 = function ($this$recompositionRunner, parentFrameClock, $completion) {
    var tmp = this.h24($this$recompositionRunner, parentFrameClock, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).oi = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE();
    return this.g24(tmp, (!(p2 == null) ? isInterface(p2, MonotonicFrameClock) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 6;
            var tmp_0 = this;
            tmp_0.z23_1 = ArrayList_init_$Create$();
            var tmp_1 = this;
            tmp_1.a24_1 = ArrayList_init_$Create$();
            var tmp_2 = this;
            tmp_2.b24_1 = ArrayList_init_$Create$();
            var tmp_3 = this;
            tmp_3.c24_1 = LinkedHashSet_init_$Create$();
            var tmp_4 = this;
            tmp_4.d24_1 = LinkedHashSet_init_$Create$();
            this.e24_1 = new IdentityArraySet();
            this.f24_1 = new IdentityArraySet();
            this.ac_1 = 1;
            continue $sm;
          case 1:
            if (!_get_shouldKeepRecomposing__5j79sd(this.w23_1)) {
              this.ac_1 = 5;
              continue $sm;
            }

            this.ac_1 = 2;
            suspendResult = awaitWorkAvailable(this.w23_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (!recordComposerModifications(this.w23_1)) {
              this.ac_1 = 1;
              continue $sm;
            } else {
              this.ac_1 = 3;
              continue $sm;
            }

          case 3:
            this.ac_1 = 4;
            suspendResult = this.y23_1.p1g(Recomposer$runRecomposeAndApplyChanges$slambda$lambda(this.w23_1, this.z23_1, this.e24_1, this.f24_1, this.a24_1, this.b24_1, this.c24_1, this.d24_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            discardUnusedValues(this.w23_1);
            this.ac_1 = 1;
            continue $sm;
          case 5:
            return Unit_instance;
          case 6:
            throw this.dc_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.bc_1 === 6) {
          throw e;
        } else {
          this.ac_1 = this.bc_1;
          this.dc_1 = e;
        }
      }
     while (true);
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).h24 = function ($this$recompositionRunner, parentFrameClock, completion) {
    var i = new Recomposer$runRecomposeAndApplyChanges$slambda(this.w23_1, completion);
    i.x23_1 = $this$recompositionRunner;
    i.y23_1 = parentFrameClock;
    return i;
  };
  function Recomposer$runRecomposeAndApplyChanges$slambda_0(this$0, resultContinuation) {
    var i = new Recomposer$runRecomposeAndApplyChanges$slambda(this$0, resultContinuation);
    var l = function ($this$recompositionRunner, parentFrameClock, $completion) {
      return i.g24($this$recompositionRunner, parentFrameClock, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Recomposer$recompositionRunner$slambda(this$0, $block, $parentFrameClock, resultContinuation) {
    this.q24_1 = this$0;
    this.r24_1 = $block;
    this.s24_1 = $parentFrameClock;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$recompositionRunner$slambda).j20 = function ($this$withContext, $completion) {
    var tmp = this.k20($this$withContext, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(Recomposer$recompositionRunner$slambda).yc = function (p1, $completion) {
    return this.j20((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$recompositionRunner$slambda).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 5;
            this.u24_1 = get_job(this.t24_1.vo());
            registerRunnerJob(this.q24_1, this.u24_1);
            var tmp_0 = this;
            var tmp_1 = Companion_instance_12;
            tmp_0.v24_1 = tmp_1.x24(Recomposer$recompositionRunner$slambda$lambda(this.q24_1));
            addRunning(Companion_getInstance_4(), this.q24_1.u21_1);
            this.ac_1 = 1;
            continue $sm;
          case 1:
            this.bc_1 = 4;
            this.q24_1.z20_1;
            var this_0 = _get_knownCompositions__y8veaj(this.q24_1);
            var inductionVariable = 0;
            var last = this_0.m() - 1 | 0;
            if (inductionVariable <= last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var item = this_0.n(index);
                item.m1y();
              }
               while (inductionVariable <= last);
            this.ac_1 = 2;
            suspendResult = coroutineScope(Recomposer$recompositionRunner$slambda$slambda_0(this.r24_1, this.s24_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.w24_1 = suspendResult;
            this.bc_1 = 5;
            this.ac_1 = 3;
            continue $sm;
          case 3:
            this.bc_1 = 5;
            this.v24_1.ss();
            this.q24_1.z20_1;
            if (this.q24_1.a21_1 === this.u24_1) {
              this.q24_1.a21_1 = null;
            }

            deriveStateLocked(this.q24_1);
            removeRunning(Companion_getInstance_4(), this.q24_1.u21_1);
            return Unit_instance;
          case 4:
            this.bc_1 = 5;
            var t = this.dc_1;
            this.v24_1.ss();
            this.q24_1.z20_1;
            if (this.q24_1.a21_1 === this.u24_1) {
              this.q24_1.a21_1 = null;
            }

            deriveStateLocked(this.q24_1);
            removeRunning(Companion_getInstance_4(), this.q24_1.u21_1);
            throw t;
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
  protoOf(Recomposer$recompositionRunner$slambda).k20 = function ($this$withContext, completion) {
    var i = new Recomposer$recompositionRunner$slambda(this.q24_1, this.r24_1, this.s24_1, completion);
    i.t24_1 = $this$withContext;
    return i;
  };
  function Recomposer$recompositionRunner$slambda_0(this$0, $block, $parentFrameClock, resultContinuation) {
    var i = new Recomposer$recompositionRunner$slambda(this$0, $block, $parentFrameClock, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.j20($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Recomposer$performRecompose$lambda($modifiedValues, $composition) {
    return function () {
      var this_0 = $modifiedValues;
      // Inline function 'kotlin.contracts.contract' call
      var values = this_0.b1q_1;
      var inductionVariable = 0;
      var last = this_0.a1q_1;
      var tmp;
      if (inductionVariable < last) {
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.Recomposer.performRecompose.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_0 = values[i];
          var it = !(tmp_0 == null) ? tmp_0 : THROW_CCE();
          $composition.g1y(it);
        }
         while (inductionVariable < last);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function Recomposer$readObserverOf$lambda($composition) {
    return function (value) {
      $composition.z1x(value);
      return Unit_instance;
    };
  }
  function Recomposer$writeObserverOf$lambda($composition, $modifiedValues) {
    return function (value) {
      $composition.g1y(value);
      var tmp0_safe_receiver = $modifiedValues;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.i1v(value);
      return Unit_instance;
    };
  }
  function State_ShutDown_getInstance() {
    State_initEntries();
    return State_ShutDown_instance;
  }
  function State_ShuttingDown_getInstance() {
    State_initEntries();
    return State_ShuttingDown_instance;
  }
  function State_Inactive_getInstance() {
    State_initEntries();
    return State_Inactive_instance;
  }
  function State_InactivePendingWork_getInstance() {
    State_initEntries();
    return State_InactivePendingWork_instance;
  }
  function State_Idle_getInstance() {
    State_initEntries();
    return State_Idle_instance;
  }
  function State_PendingWork_getInstance() {
    State_initEntries();
    return State_PendingWork_instance;
  }
  function $awaitWorkAvailableCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w22_1 = _this__u8e3s4;
  }
  protoOf($awaitWorkAvailableCOROUTINE$2).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 3;
            if (!_get_hasSchedulingWork__b617oy(this.w22_1)) {
              this.ac_1 = 1;
              var cancellable = new CancellableContinuationImpl(intercepted(this), get_MODE_CANCELLABLE());
              cancellable.zt();
              this.w22_1.z20_1;
              var tmp_0;
              if (_get_hasSchedulingWork__b617oy(this.w22_1)) {
                tmp_0 = cancellable;
              } else {
                this.w22_1.m21_1 = cancellable;
                tmp_0 = null;
              }
              var tmp0_safe_receiver = tmp_0;
              if (tmp0_safe_receiver == null)
                null;
              else {
                tmp0_safe_receiver.t6(_Result___init__impl__xyqfz8(Unit_instance));
              }
              suspendResult = returnIfSuspended(cancellable.yq(), this);
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
  function Recomposer(effectCoroutineContext) {
    Companion_getInstance_4();
    CompositionContext.call(this);
    this.x20_1 = new Long(0, 0);
    var tmp = this;
    tmp.y20_1 = new BroadcastFrameClock(Recomposer$broadcastFrameClock$lambda(this));
    this.z20_1 = createSynchronizedObject();
    this.a21_1 = null;
    this.b21_1 = null;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.c21_1 = ArrayList_init_$Create$();
    this.d21_1 = null;
    this.e21_1 = new IdentityArraySet();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.f21_1 = ArrayList_init_$Create$();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_2.g21_1 = ArrayList_init_$Create$();
    var tmp_3 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_3.h21_1 = ArrayList_init_$Create$();
    var tmp_4 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_4.i21_1 = LinkedHashMap_init_$Create$();
    var tmp_5 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_5.j21_1 = LinkedHashMap_init_$Create$();
    this.k21_1 = null;
    this.l21_1 = null;
    this.m21_1 = null;
    this.n21_1 = 0;
    this.o21_1 = false;
    this.p21_1 = null;
    this.q21_1 = false;
    this.r21_1 = MutableStateFlow(State_Inactive_getInstance());
    var tmp_6 = this;
    // Inline function 'kotlin.apply' call
    var this_0 = Job(effectCoroutineContext.hc(Key_instance));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>' call
    this_0.xp(Recomposer$effectJob$lambda(this));
    tmp_6.s21_1 = this_0;
    this.t21_1 = effectCoroutineContext.yf(this.y20_1).yf(this.s21_1);
    this.u21_1 = new RecomposerInfoImpl(this);
  }
  protoOf(Recomposer).z1r = function () {
    return this.t21_1;
  };
  protoOf(Recomposer).y24 = function ($completion) {
    return recompositionRunner(this, Recomposer$runRecomposeAndApplyChanges$slambda_0(this, null), $completion);
  };
  protoOf(Recomposer).h1w = function (composition, content) {
    var composerWasComposing = composition.b1x();
    try {
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.Recomposer.composing' call
        var snapshot = Companion_instance_12.x22(readObserverOf(this, composition), writeObserverOf(this, composition, null));
        try {
          $l$block: {
            // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
            var previous = snapshot.y22();
            try {
              composition.r1x(content);
              break $l$block;
            }finally {
              snapshot.z22(previous);
            }
          }
          break $l$block_0;
        }finally {
          applyAndCheck(this, snapshot);
        }
      }
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        processCompositionError(this, e, composition, true);
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    if (!composerWasComposing) {
      Companion_instance_12.x21();
    }
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.z20_1;
    var tmp;
    if (this.r21_1.q2().u9(State_ShuttingDown_getInstance()) > 0) {
      var tmp_0;
      if (!_get_knownCompositions__y8veaj(this).s(composition)) {
        addKnownCompositionLocked(this, composition);
        tmp_0 = Unit_instance;
      }
      tmp = tmp_0;
    }
    try {
      performInitialMovableContentInserts(this, composition);
    } catch ($p) {
      if ($p instanceof Exception) {
        var e_0 = $p;
        processCompositionError(this, e_0, composition, true);
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    try {
      composition.k1y();
      composition.l1y();
    } catch ($p) {
      if ($p instanceof Exception) {
        var e_1 = $p;
        processCompositionError$default(this, e_1);
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    if (!composerWasComposing) {
      Companion_instance_12.x21();
    }
  };
  protoOf(Recomposer).w1j = function () {
    return 1000;
  };
  protoOf(Recomposer).t1j = function () {
    return false;
  };
  protoOf(Recomposer).u1j = function () {
    return false;
  };
  protoOf(Recomposer).v1j = function (table) {
  };
  protoOf(Recomposer).v1x = function (composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.z20_1;
    removeKnownCompositionLocked(this, composition);
    // Inline function 'kotlin.collections.minusAssign' call
    this.f21_1.b1(composition);
    this.g21_1.b1(composition);
  };
  protoOf(Recomposer).e1x = function (composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.z20_1;
    // Inline function 'androidx.compose.runtime.Recomposer.invalidate.<anonymous>' call
    var tmp;
    if (!this.f21_1.s(composition)) {
      // Inline function 'kotlin.collections.plusAssign' call
      this.f21_1.a1(composition);
      tmp = deriveStateLocked(this);
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_instance);
      tmp0_safe_receiver.t6(tmp$ret$3);
    }
  };
  protoOf(Recomposer).f1p = function (reference) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.z20_1;
    // Inline function 'androidx.compose.runtime.Recomposer.insertMovableContent.<anonymous>' call
    // Inline function 'kotlin.collections.plusAssign' call
    this.h21_1.a1(reference);
    var tmp0_safe_receiver = deriveStateLocked(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_instance);
      tmp0_safe_receiver.t6(tmp$ret$3);
    }
  };
  protoOf(Recomposer).n1r = function (reference) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.z20_1;
    // Inline function 'androidx.compose.runtime.Recomposer.deletedMovableContent.<anonymous>' call
    addMultiValue(this.i21_1, reference.i1p_1, reference);
  };
  protoOf(Recomposer).x1y = function (reference, data) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.z20_1;
    this.j21_1.n2(reference, data);
  };
  protoOf(Recomposer).m1r = function (composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.z20_1;
    // Inline function 'androidx.compose.runtime.Recomposer.reportRemovedComposition.<anonymous>' call
    var tmp0_elvis_lhs = this.l21_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.collections.mutableSetOf' call
      var this_0 = LinkedHashSet_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.reportRemovedComposition.<anonymous>.<anonymous>' call
      this.l21_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var compositionsRemoved = tmp;
    compositionsRemoved.a1(composition);
  };
  protoOf(Recomposer).r1p = function (reference) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.z20_1;
    // Inline function 'androidx.compose.runtime.Recomposer.movableContentStateResolve.<anonymous>' call
    return this.j21_1.r2(reference);
  };
  function removeLastMultiValue(_this__u8e3s4, key) {
    _init_properties_Recomposer_kt__nj7w3x();
    var tmp0_safe_receiver = _this__u8e3s4.x2(key);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.removeLastMultiValue.<anonymous>' call
      // Inline function 'kotlin.also' call
      var this_0 = removeFirst(tmp0_safe_receiver);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.removeLastMultiValue.<anonymous>.<anonymous>' call
      if (tmp0_safe_receiver.u()) {
        _this__u8e3s4.r2(key);
      }
      tmp = this_0;
    }
    return tmp;
  }
  function addMultiValue(_this__u8e3s4, key, value) {
    _init_properties_Recomposer_kt__nj7w3x();
    // Inline function 'kotlin.collections.getOrPut' call
    var value_0 = _this__u8e3s4.x2(key);
    var tmp;
    if (value_0 == null) {
      // Inline function 'androidx.compose.runtime.addMultiValue.<anonymous>' call
      // Inline function 'kotlin.collections.mutableListOf' call
      var answer = ArrayList_init_$Create$();
      _this__u8e3s4.n2(key, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    return tmp.a1(value);
  }
  var properties_initialized_Recomposer_kt_k8q2ph;
  function _init_properties_Recomposer_kt__nj7w3x() {
    if (!properties_initialized_Recomposer_kt_k8q2ph) {
      properties_initialized_Recomposer_kt_k8q2ph = true;
      ProduceAnotherFrame = new Object();
      FramePending = new Object();
    }
  }
  function RememberObserver() {
  }
  function SlotTable() {
    this.c1j_1 = new Int32Array(0);
    this.d1j_1 = 0;
    var tmp = this;
    var tmp_0 = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(0), null);
    while (tmp_0 < 0) {
      tmp_1[tmp_0] = null;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.e1j_1 = tmp_1;
    this.f1j_1 = 0;
    this.g1j_1 = 0;
    this.h1j_1 = new SynchronizedObject();
    this.i1j_1 = false;
    this.j1j_1 = 0;
    var tmp_2 = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp_2.k1j_1 = ArrayList_init_$Create$();
    this.l1j_1 = null;
  }
  protoOf(SlotTable).o1o = function () {
    return this.d1j_1 === 0;
  };
  protoOf(SlotTable).m1j = function () {
    if (this.i1j_1) {
      // Inline function 'kotlin.error' call
      var message = 'Cannot read while a writer is pending';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.g1j_1 = this.g1j_1 + 1 | 0;
    return new SlotReader(this);
  };
  protoOf(SlotTable).l1m = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.i1j_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.openWriter.<anonymous>' call
      var message = 'Cannot start a writer when another writer is pending';
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.g1j_1 <= 0)) {
      // Inline function 'androidx.compose.runtime.SlotTable.openWriter.<anonymous>' call
      var message_0 = 'Cannot start a writer when a reader is pending';
      composeRuntimeError(toString(message_0));
    }
    this.i1j_1 = true;
    this.j1j_1 = this.j1j_1 + 1 | 0;
    return new SlotWriter(this);
  };
  protoOf(SlotTable).j1n = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.i1j_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      var message = 'use active SlotWriter to create an anchor location instead';
      composeRuntimeError(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= index ? index < this.d1j_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      var message_0 = 'Parameter index is out of range';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var this_0 = this.k1j_1;
    var effectiveSize = this.d1j_1;
    var location = search$accessor$10fp17g(this_0, index, effectiveSize);
    var tmp;
    if (location < 0) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      var anchor = new Anchor(index);
      this_0.y1(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = this_0.n(location);
    }
    return tmp;
  };
  protoOf(SlotTable).z24 = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.i1j_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.tryAnchor.<anonymous>' call
      var message = 'use active SlotWriter to crate an anchor for location instead';
      composeRuntimeError(toString(message));
    }
    return (0 <= index ? index < this.d1j_1 : false) ? find(this.k1j_1, index, this.d1j_1) : null;
  };
  protoOf(SlotTable).p1p = function (anchor) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.i1j_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchorIndex.<anonymous>' call
      var message = 'Use active SlotWriter to determine anchor location instead';
      composeRuntimeError(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!anchor.y1w()) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchorIndex.<anonymous>' call
      var message_0 = 'Anchor refers to a group that was removed';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    return anchor.m1q_1;
  };
  protoOf(SlotTable).q1y = function (anchor) {
    var tmp;
    if (anchor.y1w()) {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.ownsAnchor.<anonymous>' call
      var it = search$accessor$10fp17g(this.k1j_1, anchor.m1q_1, this.d1j_1);
      tmp = it >= 0 ? equals(this.k1j_1.n(it), anchor) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SlotTable).c1x = function (groupIndex, anchor) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.i1j_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.groupContainsAnchor.<anonymous>' call
      var message = 'Writer is active';
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(0 <= groupIndex ? groupIndex < this.d1j_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.groupContainsAnchor.<anonymous>' call
      var message_0 = 'Invalid group index';
      composeRuntimeError(toString(message_0));
    }
    var tmp;
    if (this.q1y(anchor)) {
      var containsUpper = groupIndex + groupSize(this.c1j_1, groupIndex) | 0;
      var containsArg = anchor.m1q_1;
      tmp = groupIndex <= containsArg ? containsArg < containsUpper : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SlotTable).a25 = function (reader, sourceInformationMap) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(reader.l1k_1 === this ? this.g1j_1 > 0 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.close.<anonymous>' call
      var message = 'Unexpected reader close()';
      composeRuntimeError(toString(message));
    }
    this.g1j_1 = this.g1j_1 - 1 | 0;
    if (!(sourceInformationMap == null)) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this.h1j_1;
      var thisMap = this.l1j_1;
      var tmp;
      if (!(thisMap == null)) {
        thisMap.o2(sourceInformationMap);
        tmp = Unit_instance;
      } else {
        this.l1j_1 = sourceInformationMap;
        tmp = Unit_instance;
      }
    }
  };
  protoOf(SlotTable).b25 = function (writer, groups, groupsSize, slots, slotsSize, anchors, sourceInformationMap) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(writer.a1l_1 === this ? this.i1j_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.close.<anonymous>' call
      var message = 'Unexpected writer close()';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.i1j_1 = false;
    this.c25(groups, groupsSize, slots, slotsSize, anchors, sourceInformationMap);
  };
  protoOf(SlotTable).c25 = function (groups, groupsSize, slots, slotsSize, anchors, sourceInformationMap) {
    this.c1j_1 = groups;
    this.d1j_1 = groupsSize;
    this.e1j_1 = slots;
    this.f1j_1 = slotsSize;
    this.k1j_1 = anchors;
    this.l1j_1 = sourceInformationMap;
  };
  protoOf(SlotTable).y1q = function () {
    return this.d1j_1 > 0 ? containsMark(this.c1j_1, 0) : false;
  };
  protoOf(SlotTable).d25 = function (group) {
    var tmp0_safe_receiver = this.l1j_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.sourceInformationOf.<anonymous>' call
      var tmp0_safe_receiver_0 = this.z24(group);
      var tmp_0;
      if (tmp0_safe_receiver_0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SlotTable.sourceInformationOf.<anonymous>.<anonymous>' call
        tmp_0 = tmp0_safe_receiver.x2(tmp0_safe_receiver_0);
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(SlotTable).p20 = function (group, slotIndex) {
    var start = slotAnchor(this.c1j_1, group);
    var end = (group + 1 | 0) < this.d1j_1 ? dataAnchor(this.c1j_1, group + 1 | 0) : this.e1j_1.length;
    var len = end - start | 0;
    var tmp;
    if (0 <= slotIndex ? slotIndex < len : false) {
      return this.e1j_1[start + slotIndex | 0];
    } else {
      tmp = Companion_getInstance_0().s1m_1;
    }
    return tmp;
  };
  protoOf(SlotTable).o = function () {
    return new GroupIterator(this, 0, this.d1j_1);
  };
  function moveGroup($this, fromWriter, fromIndex, toWriter, updateFromCursor, updateToCursor, removeSourceGroup) {
    var groupsToMove = fromWriter.a1o(fromIndex);
    var sourceGroupsEnd = fromIndex + groupsToMove | 0;
    var sourceSlotsStart = dataIndex(fromWriter, fromIndex);
    var sourceSlotsEnd = dataIndex(fromWriter, sourceGroupsEnd);
    var slotsToMove = sourceSlotsEnd - sourceSlotsStart | 0;
    var hasMarks = containsAnyGroupMarks(fromWriter, fromIndex);
    insertGroups(toWriter, groupsToMove);
    insertSlots(toWriter, slotsToMove, toWriter.r1l_1);
    if (fromWriter.f1l_1 < sourceGroupsEnd) {
      moveGroupGapTo(fromWriter, sourceGroupsEnd);
    }
    if (fromWriter.j1l_1 < sourceSlotsEnd) {
      moveSlotGapTo(fromWriter, sourceSlotsEnd, sourceGroupsEnd);
    }
    var groups = toWriter.b1l_1;
    var currentGroup = toWriter.r1l_1;
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = fromWriter.b1l_1;
    var destinationOffset = imul(currentGroup, 5);
    var startIndex = imul(fromIndex, 5);
    var endIndex = imul(sourceGroupsEnd, 5);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, groups, destinationOffset, startIndex, endIndex);
    var slots = toWriter.c1l_1;
    var currentSlot = toWriter.h1l_1;
    // Inline function 'kotlin.collections.copyInto' call
    var this_1 = fromWriter.c1l_1;
    arrayCopy(this_1, slots, currentSlot, sourceSlotsStart, sourceSlotsEnd);
    var parent = toWriter.t1l_1;
    updateParentAnchor(groups, currentGroup, parent);
    var parentDelta = currentGroup - fromIndex | 0;
    var moveEnd = currentGroup + groupsToMove | 0;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
    var dataIndexDelta = currentSlot - dataIndex_0(groups, toWriter, currentGroup) | 0;
    var slotsGapOwner = toWriter.l1l_1;
    var slotsGapLen = toWriter.k1l_1;
    var slotsCapacity = slots.length;
    var inductionVariable = currentGroup;
    if (inductionVariable < moveEnd)
      do {
        var groupAddress = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(groupAddress === currentGroup)) {
          var previousParent = parentAnchor(groups, groupAddress);
          updateParentAnchor(groups, groupAddress, previousParent + parentDelta | 0);
        }
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
        var newDataIndex = dataIndex_0(groups, toWriter, groupAddress) + dataIndexDelta | 0;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
        var newDataAnchor = dataIndexToDataAnchor(toWriter, newDataIndex, slotsGapOwner < groupAddress ? 0 : toWriter.j1l_1, slotsGapLen, slotsCapacity);
        updateDataAnchor(groups, groupAddress, newDataAnchor);
        if (groupAddress === slotsGapOwner) {
          slotsGapOwner = slotsGapOwner + 1 | 0;
        }
      }
       while (inductionVariable < moveEnd);
    toWriter.l1l_1 = slotsGapOwner;
    var startAnchors = locationOf(fromWriter.d1l_1, fromIndex, fromWriter.m());
    var endAnchors = locationOf(fromWriter.d1l_1, sourceGroupsEnd, fromWriter.m());
    var tmp_0;
    if (startAnchors < endAnchors) {
      var sourceAnchors = fromWriter.d1l_1;
      var anchors = ArrayList_init_$Create$_0(endAnchors - startAnchors | 0);
      var anchorDelta = currentGroup - fromIndex | 0;
      var inductionVariable_0 = startAnchors;
      if (inductionVariable_0 < endAnchors)
        do {
          var anchorIndex = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var sourceAnchor = sourceAnchors.n(anchorIndex);
          sourceAnchor.m1q_1 = sourceAnchor.m1q_1 + anchorDelta | 0;
          anchors.a1(sourceAnchor);
        }
         while (inductionVariable_0 < endAnchors);
      var insertLocation = locationOf(toWriter.d1l_1, toWriter.r1l_1, toWriter.m());
      toWriter.d1l_1.a2(insertLocation, anchors);
      sourceAnchors.r(startAnchors, endAnchors).h1();
      tmp_0 = anchors;
    } else {
      tmp_0 = emptyList();
    }
    var anchors_0 = tmp_0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!anchors_0.u()) {
      var sourceSourceInformationMap = fromWriter.e1l_1;
      if (!(sourceSourceInformationMap == null)) {
        var destinationSourceInformation = toWriter.e1l_1;
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_1 = 0;
        var last = anchors_0.m() - 1 | 0;
        if (inductionVariable_1 <= last)
          do {
            var index = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var item = anchors_0.n(index);
            // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
            var information = sourceSourceInformationMap.x2(item);
            if (!(information == null)) {
              sourceSourceInformationMap.r2(item);
              var tmp0_elvis_lhs = destinationSourceInformation;
              var tmp_1;
              if (tmp0_elvis_lhs == null) {
                // Inline function 'kotlin.run' call
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>.<anonymous>' call
                var map = HashMap_init_$Create$();
                destinationSourceInformation = map;
                toWriter.e1l_1 = destinationSourceInformation;
                tmp_1 = map;
              } else {
                tmp_1 = tmp0_elvis_lhs;
              }
              var map_0 = tmp_1;
              // Inline function 'kotlin.collections.set' call
              map_0.n2(item, information);
            }
          }
           while (inductionVariable_1 <= last);
        if (sourceSourceInformationMap.u()) {
          fromWriter.e1l_1 = null;
        }
      }
    }
    var toWriterParent = toWriter.t1l_1;
    var tmp4_safe_receiver = sourceInformationOf(toWriter, parent);
    if (tmp4_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var predecessor = -1;
      var child = toWriterParent + 1 | 0;
      var endGroup = toWriter.r1l_1;
      while (child < endGroup) {
        predecessor = child;
        child = child + groupSize(toWriter.b1l_1, child) | 0;
      }
      tmp4_safe_receiver.i25(toWriter, predecessor, endGroup);
    }
    var parentGroup = fromWriter.h1m(fromIndex);
    var tmp_2;
    if (!removeSourceGroup) {
      tmp_2 = false;
    } else if (updateFromCursor) {
      var needsStartGroups = parentGroup >= 0;
      if (needsStartGroups) {
        fromWriter.p1m();
        fromWriter.j25(parentGroup - fromWriter.r1l_1 | 0);
        fromWriter.p1m();
      }
      fromWriter.j25(fromIndex - fromWriter.r1l_1 | 0);
      var anchorsRemoved = fromWriter.y1u();
      if (needsStartGroups) {
        fromWriter.m1m();
        fromWriter.m1o();
        fromWriter.m1m();
        fromWriter.m1o();
      }
      tmp_2 = anchorsRemoved;
    } else {
      var anchorsRemoved_0 = removeGroups(fromWriter, fromIndex, groupsToMove);
      removeSlots(fromWriter, sourceSlotsStart, slotsToMove, fromIndex - 1 | 0);
      tmp_2 = anchorsRemoved_0;
    }
    var anchorsRemoved_1 = tmp_2;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!anchorsRemoved_1) {
      // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
      var message = 'Unexpectedly removed anchors';
      composeRuntimeError(toString(message));
    }
    toWriter.n1l_1 = toWriter.n1l_1 + (isNode(groups, currentGroup) ? 1 : nodeCount(groups, currentGroup)) | 0;
    if (updateToCursor) {
      toWriter.r1l_1 = currentGroup + groupsToMove | 0;
      toWriter.h1l_1 = currentSlot + slotsToMove | 0;
    }
    if (hasMarks) {
      updateContainsMark(toWriter, parent);
    }
    return anchors_0;
  }
  function moveGroup$default($this, fromWriter, fromIndex, toWriter, updateFromCursor, updateToCursor, removeSourceGroup, $super) {
    removeSourceGroup = removeSourceGroup === VOID ? true : removeSourceGroup;
    return moveGroup($this, fromWriter, fromIndex, toWriter, updateFromCursor, updateToCursor, removeSourceGroup);
  }
  function groupSourceInformationFor($this, parent, sourceInformation) {
    var tmp0_elvis_lhs = $this.e1l_1;
    var map = tmp0_elvis_lhs == null ? HashMap_init_$Create$() : tmp0_elvis_lhs;
    $this.e1l_1 = map;
    // Inline function 'kotlin.collections.getOrPut' call
    var key = $this.j1n(parent);
    var value = map.x2(key);
    var tmp;
    if (value == null) {
      // Inline function 'androidx.compose.runtime.SlotWriter.groupSourceInformationFor.<anonymous>' call
      var result = new GroupSourceInformation(0, sourceInformation);
      if (sourceInformation == null) {
        var child = parent + 1 | 0;
        var end = $this.r1l_1;
        while (child < end) {
          result.k25($this, child);
          child = child + groupSize($this.b1l_1, child) | 0;
        }
      }
      var answer = result;
      map.n2(key, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    return tmp;
  }
  function startGroup_1($this, key, objectKey, isNode, aux) {
    var previousParent = $this.t1l_1;
    var inserting = $this.m1l_1 > 0;
    $this.q1l_1.r1j($this.n1l_1);
    var tmp = $this;
    var tmp_0;
    if (inserting) {
      insertGroups($this, 1);
      var current = $this.r1l_1;
      var currentAddress = groupIndexToAddress($this, current);
      var hasObjectKey = !(objectKey === Companion_getInstance_0().s1m_1);
      var hasAux = !isNode ? !(aux === Companion_getInstance_0().s1m_1) : false;
      initGroup($this.b1l_1, currentAddress, key, isNode, hasObjectKey, hasAux, $this.t1l_1, $this.h1l_1);
      $this.i1l_1 = $this.h1l_1;
      var dataSlotsNeeded = ((isNode ? 1 : 0) + (hasObjectKey ? 1 : 0) | 0) + (hasAux ? 1 : 0) | 0;
      if (dataSlotsNeeded > 0) {
        insertSlots($this, dataSlotsNeeded, current);
        var slots = $this.c1l_1;
        var currentSlot = $this.h1l_1;
        if (isNode) {
          var tmp0 = currentSlot;
          currentSlot = tmp0 + 1 | 0;
          slots[tmp0] = aux;
        }
        if (hasObjectKey) {
          var tmp1 = currentSlot;
          currentSlot = tmp1 + 1 | 0;
          slots[tmp1] = objectKey;
        }
        if (hasAux) {
          var tmp2 = currentSlot;
          currentSlot = tmp2 + 1 | 0;
          slots[tmp2] = aux;
        }
        $this.h1l_1 = currentSlot;
      }
      $this.n1l_1 = 0;
      var newCurrent = current + 1 | 0;
      $this.t1l_1 = current;
      $this.r1l_1 = newCurrent;
      if (previousParent >= 0) {
        var tmp3_safe_receiver = sourceInformationOf($this, previousParent);
        if (tmp3_safe_receiver == null)
          null;
        else {
          tmp3_safe_receiver.k25($this, current);
        }
      }
      tmp_0 = newCurrent;
    } else {
      $this.o1l_1.r1j(previousParent);
      saveCurrentGroupEnd($this);
      var currentGroup = $this.r1l_1;
      var currentGroupAddress = groupIndexToAddress($this, currentGroup);
      if (!equals(aux, Companion_getInstance_0().s1m_1)) {
        if (isNode) {
          $this.m25(aux);
        } else {
          $this.l25(aux);
        }
      }
      $this.h1l_1 = slotIndex($this.b1l_1, $this, currentGroupAddress);
      $this.i1l_1 = dataIndex_0($this.b1l_1, $this, groupIndexToAddress($this, $this.r1l_1 + 1 | 0));
      $this.n1l_1 = nodeCount($this.b1l_1, currentGroupAddress);
      $this.t1l_1 = currentGroup;
      $this.r1l_1 = currentGroup + 1 | 0;
      tmp_0 = currentGroup + groupSize($this.b1l_1, currentGroupAddress) | 0;
    }
    tmp.s1l_1 = tmp_0;
  }
  function Companion_4() {
  }
  var Companion_instance_5;
  function Companion_getInstance_5() {
    return Companion_instance_5;
  }
  function containsGroupMark($this, group) {
    return group >= 0 ? containsMark($this.b1l_1, groupIndexToAddress($this, group)) : false;
  }
  function containsAnyGroupMarks($this, group) {
    return group >= 0 ? containsAnyMark($this.b1l_1, groupIndexToAddress($this, group)) : false;
  }
  function recalculateMarks($this) {
    var tmp0_safe_receiver = $this.v1l_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      while (tmp0_safe_receiver.pn()) {
        updateContainsMarkNow($this, tmp0_safe_receiver.o25(), tmp0_safe_receiver);
      }
    }
  }
  function updateContainsMark($this, group) {
    if (group >= 0) {
      var tmp0_elvis_lhs = $this.v1l_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_0 = new PrioritySet();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SlotWriter.updateContainsMark.<anonymous>' call
        $this.v1l_1 = this_0;
        tmp = this_0;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      tmp.p25(group);
    }
  }
  function updateContainsMarkNow($this, group, set) {
    var groupAddress = groupIndexToAddress($this, group);
    var containsAnyMarks = childContainsAnyMarks($this, group);
    var markChanges = !(containsMark($this.b1l_1, groupAddress) === containsAnyMarks);
    if (markChanges) {
      updateContainsMark_0($this.b1l_1, groupAddress, containsAnyMarks);
      var parent = $this.h1m(group);
      if (parent >= 0) {
        set.p25(parent);
      }
    }
  }
  function childContainsAnyMarks($this, group) {
    var child = group + 1 | 0;
    var end = group + $this.a1o(group) | 0;
    while (child < end) {
      if (containsAnyMark($this.b1l_1, groupIndexToAddress($this, child)))
        return true;
      child = child + $this.a1o(child) | 0;
    }
    return false;
  }
  function saveCurrentGroupEnd($this) {
    $this.p1l_1.r1j((_get_capacity__a9k9f3($this) - $this.g1l_1 | 0) - $this.s1l_1 | 0);
  }
  function restoreCurrentGroupEnd($this) {
    var newGroupEnd = (_get_capacity__a9k9f3($this) - $this.g1l_1 | 0) - $this.p1l_1.w1n() | 0;
    $this.s1l_1 = newGroupEnd;
    return newGroupEnd;
  }
  function fixParentAnchorsFor($this, parent, endGroup, firstChild) {
    var parentAnchor = parentIndexToAnchor($this, parent, $this.f1l_1);
    var child = firstChild;
    while (child < endGroup) {
      updateParentAnchor($this.b1l_1, groupIndexToAddress($this, child), parentAnchor);
      var childEnd = child + groupSize($this.b1l_1, groupIndexToAddress($this, child)) | 0;
      fixParentAnchorsFor($this, child, childEnd, child + 1 | 0);
      child = childEnd;
    }
  }
  function moveGroupGapTo($this, index) {
    var gapLen = $this.g1l_1;
    var gapStart = $this.f1l_1;
    if (!(gapStart === index)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!$this.d1l_1.u()) {
        updateAnchors($this, gapStart, index);
      }
      if (gapLen > 0) {
        var groups = $this.b1l_1;
        var groupPhysicalAddress = imul(index, 5);
        var groupPhysicalGapLen = imul(gapLen, 5);
        var groupPhysicalGapStart = imul(gapStart, 5);
        if (index < gapStart) {
          // Inline function 'kotlin.collections.copyInto' call
          var destinationOffset = groupPhysicalAddress + groupPhysicalGapLen | 0;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp = groups;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp, groups, destinationOffset, groupPhysicalAddress, groupPhysicalGapStart);
        } else {
          // Inline function 'kotlin.collections.copyInto' call
          var startIndex = groupPhysicalGapStart + groupPhysicalGapLen | 0;
          var endIndex = groupPhysicalAddress + groupPhysicalGapLen | 0;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_0 = groups;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp_0, groups, groupPhysicalGapStart, startIndex, endIndex);
        }
      }
      var groupAddress = index < gapStart ? index + gapLen | 0 : gapStart;
      var capacity = _get_capacity__a9k9f3($this);
      runtimeCheck(groupAddress < capacity);
      while (groupAddress < capacity) {
        var oldAnchor = parentAnchor($this.b1l_1, groupAddress);
        var oldIndex = parentAnchorToIndex($this, oldAnchor);
        var newAnchor = parentIndexToAnchor($this, oldIndex, index);
        if (!(newAnchor === oldAnchor)) {
          updateParentAnchor($this.b1l_1, groupAddress, newAnchor);
        }
        groupAddress = groupAddress + 1 | 0;
        if (groupAddress === index)
          groupAddress = groupAddress + gapLen | 0;
      }
    }
    $this.f1l_1 = index;
  }
  function moveSlotGapTo($this, index, group) {
    var gapLen = $this.k1l_1;
    var gapStart = $this.j1l_1;
    var slotsGapOwner = $this.l1l_1;
    if (!(gapStart === index)) {
      var slots = $this.c1l_1;
      if (index < gapStart) {
        // Inline function 'kotlin.collections.copyInto' call
        var destinationOffset = index + gapLen | 0;
        arrayCopy(slots, slots, destinationOffset, index, gapStart);
      } else {
        // Inline function 'kotlin.collections.copyInto' call
        var startIndex = gapStart + gapLen | 0;
        var endIndex = index + gapLen | 0;
        arrayCopy(slots, slots, gapStart, startIndex, endIndex);
      }
    }
    // Inline function 'kotlin.math.min' call
    var a = group + 1 | 0;
    var b = $this.m();
    var newSlotsGapOwner = Math.min(a, b);
    if (!(slotsGapOwner === newSlotsGapOwner)) {
      var slotsSize = $this.c1l_1.length - gapLen | 0;
      if (newSlotsGapOwner < slotsGapOwner) {
        var updateAddress = groupIndexToAddress($this, newSlotsGapOwner);
        var stopUpdateAddress = groupIndexToAddress($this, slotsGapOwner);
        var groupGapStart = $this.f1l_1;
        while (updateAddress < stopUpdateAddress) {
          var anchor = dataAnchor($this.b1l_1, updateAddress);
          // Inline function 'androidx.compose.runtime.runtimeCheck' call
          if (!(anchor >= 0)) {
            // Inline function 'androidx.compose.runtime.SlotWriter.moveSlotGapTo.<anonymous>' call
            var message = 'Unexpected anchor value, expected a positive anchor';
            composeRuntimeError(toString(message));
          }
          updateDataAnchor($this.b1l_1, updateAddress, -((slotsSize - anchor | 0) + 1 | 0) | 0);
          updateAddress = updateAddress + 1 | 0;
          if (updateAddress === groupGapStart)
            updateAddress = updateAddress + $this.g1l_1 | 0;
        }
      } else {
        var updateAddress_0 = groupIndexToAddress($this, slotsGapOwner);
        var stopUpdateAddress_0 = groupIndexToAddress($this, newSlotsGapOwner);
        while (updateAddress_0 < stopUpdateAddress_0) {
          var anchor_0 = dataAnchor($this.b1l_1, updateAddress_0);
          // Inline function 'androidx.compose.runtime.runtimeCheck' call
          if (!(anchor_0 < 0)) {
            // Inline function 'androidx.compose.runtime.SlotWriter.moveSlotGapTo.<anonymous>' call
            var message_0 = 'Unexpected anchor value, expected a negative anchor';
            composeRuntimeError(toString(message_0));
          }
          updateDataAnchor($this.b1l_1, updateAddress_0, (slotsSize + anchor_0 | 0) + 1 | 0);
          updateAddress_0 = updateAddress_0 + 1 | 0;
          if (updateAddress_0 === $this.f1l_1)
            updateAddress_0 = updateAddress_0 + $this.g1l_1 | 0;
        }
      }
      $this.l1l_1 = newSlotsGapOwner;
    }
    $this.j1l_1 = index;
  }
  function clearSlotGap($this) {
    var slotsGapStart = $this.j1l_1;
    var slotsGapEnd = slotsGapStart + $this.k1l_1 | 0;
    fill_0($this.c1l_1, null, slotsGapStart, slotsGapEnd);
  }
  function insertGroups($this, size) {
    if (size > 0) {
      var currentGroup = $this.r1l_1;
      moveGroupGapTo($this, currentGroup);
      var gapStart = $this.f1l_1;
      var gapLen = $this.g1l_1;
      var oldCapacity = $this.b1l_1.length / 5 | 0;
      var oldSize = oldCapacity - gapLen | 0;
      if (gapLen < size) {
        var groups = $this.b1l_1;
        // Inline function 'kotlin.math.max' call
        // Inline function 'kotlin.math.max' call
        var a = imul(oldCapacity, 2);
        var b = oldSize + size | 0;
        var a_0 = Math.max(a, b);
        var newCapacity = Math.max(a_0, 32);
        var newGroups = new Int32Array(imul(newCapacity, 5));
        var newGapLen = newCapacity - oldSize | 0;
        var oldGapEndAddress = gapStart + gapLen | 0;
        var newGapEndAddress = gapStart + newGapLen | 0;
        // Inline function 'kotlin.collections.copyInto' call
        var endIndex = imul(gapStart, 5);
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp = groups;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp, newGroups, 0, 0, endIndex);
        // Inline function 'kotlin.collections.copyInto' call
        var destinationOffset = imul(newGapEndAddress, 5);
        var startIndex = imul(oldGapEndAddress, 5);
        var endIndex_0 = imul(oldCapacity, 5);
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = groups;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp_0, newGroups, destinationOffset, startIndex, endIndex_0);
        $this.b1l_1 = newGroups;
        gapLen = newGapLen;
      }
      var currentEnd = $this.s1l_1;
      if (currentEnd >= gapStart)
        $this.s1l_1 = currentEnd + size | 0;
      $this.f1l_1 = gapStart + size | 0;
      $this.g1l_1 = gapLen - size | 0;
      var index = oldSize > 0 ? dataIndex($this, currentGroup + size | 0) : 0;
      var anchor = dataIndexToDataAnchor($this, index, $this.l1l_1 < gapStart ? 0 : $this.j1l_1, $this.k1l_1, $this.c1l_1.length);
      var inductionVariable = gapStart;
      var last = gapStart + size | 0;
      if (inductionVariable < last)
        do {
          var groupAddress = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          updateDataAnchor($this.b1l_1, groupAddress, anchor);
        }
         while (inductionVariable < last);
      var slotsGapOwner = $this.l1l_1;
      if (slotsGapOwner >= gapStart) {
        $this.l1l_1 = slotsGapOwner + size | 0;
      }
    }
  }
  function insertSlots($this, size, group) {
    if (size > 0) {
      moveSlotGapTo($this, $this.h1l_1, group);
      var gapStart = $this.j1l_1;
      var gapLen = $this.k1l_1;
      if (gapLen < size) {
        var slots = $this.c1l_1;
        var oldCapacity = slots.length;
        var oldSize = oldCapacity - gapLen | 0;
        // Inline function 'kotlin.math.max' call
        // Inline function 'kotlin.math.max' call
        var a = imul(oldCapacity, 2);
        var b = oldSize + size | 0;
        var a_0 = Math.max(a, b);
        var newCapacity = Math.max(a_0, 32);
        var tmp = 0;
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp_0 = fillArrayVal(Array(newCapacity), null);
        while (tmp < newCapacity) {
          tmp_0[tmp] = null;
          tmp = tmp + 1 | 0;
        }
        var newData = tmp_0;
        var newGapLen = newCapacity - oldSize | 0;
        var oldGapEndAddress = gapStart + gapLen | 0;
        var newGapEndAddress = gapStart + newGapLen | 0;
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(slots, newData, 0, 0, gapStart);
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(slots, newData, newGapEndAddress, oldGapEndAddress, oldCapacity);
        $this.c1l_1 = newData;
        gapLen = newGapLen;
      }
      var currentDataEnd = $this.i1l_1;
      if (currentDataEnd >= gapStart)
        $this.i1l_1 = currentDataEnd + size | 0;
      $this.j1l_1 = gapStart + size | 0;
      $this.k1l_1 = gapLen - size | 0;
    }
  }
  function removeGroups($this, start, len) {
    var tmp;
    if (len > 0) {
      var anchorsRemoved = false;
      var anchors = $this.d1l_1;
      moveGroupGapTo($this, start);
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!anchors.u()) {
        anchorsRemoved = removeAnchors($this, start, len, $this.e1l_1);
      }
      $this.f1l_1 = start;
      var previousGapLen = $this.g1l_1;
      var newGapLen = previousGapLen + len | 0;
      $this.g1l_1 = newGapLen;
      var slotsGapOwner = $this.l1l_1;
      if (slotsGapOwner > start) {
        var tmp_0 = $this;
        // Inline function 'kotlin.math.max' call
        var b = slotsGapOwner - len | 0;
        tmp_0.l1l_1 = Math.max(start, b);
      }
      if ($this.s1l_1 >= $this.f1l_1) {
        $this.s1l_1 = $this.s1l_1 - len | 0;
      }
      var parent = $this.t1l_1;
      if (containsGroupMark($this, parent)) {
        updateContainsMark($this, parent);
      }
      tmp = anchorsRemoved;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function sourceInformationOf($this, group) {
    var tmp0_safe_receiver = $this.e1l_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotWriter.sourceInformationOf.<anonymous>' call
      var tmp0_safe_receiver_0 = $this.z24(group);
      var tmp_0;
      if (tmp0_safe_receiver_0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SlotWriter.sourceInformationOf.<anonymous>.<anonymous>' call
        tmp_0 = tmp0_safe_receiver.x2(tmp0_safe_receiver_0);
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function removeSlots($this, start, len, group) {
    if (len > 0) {
      var gapLen = $this.k1l_1;
      var removeEnd = start + len | 0;
      moveSlotGapTo($this, removeEnd, group);
      $this.j1l_1 = start;
      $this.k1l_1 = gapLen + len | 0;
      fill_0($this.c1l_1, null, start, start + len | 0);
      var currentDataEnd = $this.i1l_1;
      if (currentDataEnd >= start)
        $this.i1l_1 = currentDataEnd - len | 0;
    }
  }
  function updateNodeOfGroup($this, index, value) {
    var address = groupIndexToAddress($this, index);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(address < $this.b1l_1.length ? isNode($this.b1l_1, address) : false)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.updateNodeOfGroup.<anonymous>' call
      var message = 'Updating the node of a group at ' + index + ' that was not created with as a node group';
      composeRuntimeError(toString(message));
    }
    $this.c1l_1[dataIndexToDataAddress($this, nodeIndex($this.b1l_1, $this, address))] = value;
  }
  function updateAnchors($this, previousGapStart, newGapStart) {
    var gapLen = $this.g1l_1;
    var size = _get_capacity__a9k9f3($this) - gapLen | 0;
    if (previousGapStart < newGapStart) {
      var index = locationOf($this.d1l_1, previousGapStart, size);
      $l$loop_0: while (index < $this.d1l_1.m()) {
        var anchor = $this.d1l_1.n(index);
        var location = anchor.m1q_1;
        if (location < 0) {
          var newLocation = size + location | 0;
          if (newLocation < newGapStart) {
            anchor.m1q_1 = size + location | 0;
            index = index + 1 | 0;
          } else
            break $l$loop_0;
        } else
          break $l$loop_0;
      }
    } else {
      var index_0 = locationOf($this.d1l_1, newGapStart, size);
      $l$loop_1: while (index_0 < $this.d1l_1.m()) {
        var anchor_0 = $this.d1l_1.n(index_0);
        var location_0 = anchor_0.m1q_1;
        if (location_0 >= 0) {
          anchor_0.m1q_1 = -(size - location_0 | 0) | 0;
          index_0 = index_0 + 1 | 0;
        } else
          break $l$loop_1;
      }
    }
  }
  function removeAnchors($this, gapStart, size, sourceInformationMap) {
    var gapLen = $this.g1l_1;
    var removeEnd = gapStart + size | 0;
    var groupsSize = _get_capacity__a9k9f3($this) - gapLen | 0;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotWriter.removeAnchors.<anonymous>' call
    var it = locationOf($this.d1l_1, gapStart + size | 0, groupsSize);
    var index = it >= $this.d1l_1.m() ? it - 1 | 0 : it;
    var removeAnchorEnd = 0;
    var removeAnchorStart = index + 1 | 0;
    $l$loop: while (index >= 0) {
      var anchor = $this.d1l_1.n(index);
      var location = $this.p1p(anchor);
      if (location >= gapStart) {
        if (location < removeEnd) {
          anchor.m1q_1 = IntCompanionObject_instance.MIN_VALUE;
          if (sourceInformationMap == null)
            null;
          else
            sourceInformationMap.r2(anchor);
          removeAnchorStart = index;
          if (removeAnchorEnd === 0)
            removeAnchorEnd = index + 1 | 0;
        }
        index = index - 1 | 0;
      } else
        break $l$loop;
    }
    // Inline function 'kotlin.also' call
    var this_0 = removeAnchorStart < removeAnchorEnd;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotWriter.removeAnchors.<anonymous>' call
    if (this_0) {
      $this.d1l_1.r(removeAnchorStart, removeAnchorEnd).h1();
    }
    return this_0;
  }
  function moveAnchors($this, originalLocation, newLocation, size) {
    var end = originalLocation + size | 0;
    var groupsSize = $this.m();
    var index = locationOf($this.d1l_1, originalLocation, groupsSize);
    // Inline function 'kotlin.collections.mutableListOf' call
    var removedAnchors = ArrayList_init_$Create$();
    if (index >= 0) {
      $l$loop: while (index < $this.d1l_1.m()) {
        var anchor = $this.d1l_1.n(index);
        var location = $this.p1p(anchor);
        if (location >= originalLocation ? location < end : false) {
          removedAnchors.a1(anchor);
          $this.d1l_1.m1(index);
        } else
          break $l$loop;
      }
    }
    var moveDelta = newLocation - originalLocation | 0;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = removedAnchors.m() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index_0 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = removedAnchors.n(index_0);
        // Inline function 'androidx.compose.runtime.SlotWriter.moveAnchors.<anonymous>' call
        var anchorIndex = $this.p1p(item);
        var newAnchorIndex = anchorIndex + moveDelta | 0;
        if (newAnchorIndex >= $this.f1l_1) {
          item.m1q_1 = -(groupsSize - newAnchorIndex | 0) | 0;
        } else {
          item.m1q_1 = newAnchorIndex;
        }
        var insertIndex = locationOf($this.d1l_1, newAnchorIndex, groupsSize);
        $this.d1l_1.y1(insertIndex, item);
      }
       while (inductionVariable <= last);
  }
  function _get_capacity__a9k9f3($this) {
    return $this.b1l_1.length / 5 | 0;
  }
  function groupIndexToAddress($this, index) {
    return index < $this.f1l_1 ? index : index + $this.g1l_1 | 0;
  }
  function dataIndexToDataAddress($this, dataIndex) {
    return dataIndex < $this.j1l_1 ? dataIndex : dataIndex + $this.k1l_1 | 0;
  }
  function parent(_this__u8e3s4, $this, index) {
    return parentAnchorToIndex($this, parentAnchor(_this__u8e3s4, groupIndexToAddress($this, index)));
  }
  function dataIndex($this, index) {
    return dataIndex_0($this.b1l_1, $this, groupIndexToAddress($this, index));
  }
  function dataIndex_0(_this__u8e3s4, $this, address) {
    return address >= _get_capacity__a9k9f3($this) ? $this.c1l_1.length - $this.k1l_1 | 0 : dataAnchorToDataIndex($this, dataAnchor(_this__u8e3s4, address), $this.k1l_1, $this.c1l_1.length);
  }
  function slotIndex(_this__u8e3s4, $this, address) {
    return address >= _get_capacity__a9k9f3($this) ? $this.c1l_1.length - $this.k1l_1 | 0 : dataAnchorToDataIndex($this, slotAnchor(_this__u8e3s4, address), $this.k1l_1, $this.c1l_1.length);
  }
  function updateDataIndex(_this__u8e3s4, $this, address, dataIndex) {
    updateDataAnchor(_this__u8e3s4, address, dataIndexToDataAnchor($this, dataIndex, $this.j1l_1, $this.k1l_1, $this.c1l_1.length));
  }
  function nodeIndex(_this__u8e3s4, $this, address) {
    return dataIndex_0(_this__u8e3s4, $this, address);
  }
  function auxIndex(_this__u8e3s4, $this, address) {
    return dataIndex_0(_this__u8e3s4, $this, address) + countOneBits_0(groupInfo(_this__u8e3s4, address) >> 29) | 0;
  }
  function dataIndexToDataAnchor($this, index, gapStart, gapLen, capacity) {
    return index > gapStart ? -(((capacity - gapLen | 0) - index | 0) + 1 | 0) | 0 : index;
  }
  function dataAnchorToDataIndex($this, anchor, gapLen, capacity) {
    return anchor < 0 ? ((capacity - gapLen | 0) + anchor | 0) + 1 | 0 : anchor;
  }
  function parentIndexToAnchor($this, index, gapStart) {
    return index < gapStart ? index : -(($this.m() - index | 0) - -2 | 0) | 0;
  }
  function parentAnchorToIndex($this, index) {
    return index > -2 ? index : ($this.m() + index | 0) - -2 | 0;
  }
  function SlotWriter$groupSlots$1($start, $end, this$0) {
    this.r25_1 = $end;
    this.s25_1 = this$0;
    this.q25_1 = $start;
  }
  protoOf(SlotWriter$groupSlots$1).d1 = function () {
    return this.q25_1 < this.r25_1;
  };
  protoOf(SlotWriter$groupSlots$1).f1 = function () {
    var tmp;
    if (this.d1()) {
      var tmp_0 = this.s25_1.c1l_1;
      var tmp1 = this.q25_1;
      this.q25_1 = tmp1 + 1 | 0;
      tmp = tmp_0[dataIndexToDataAddress(this.s25_1, tmp1)];
    } else {
      tmp = null;
    }
    return tmp;
  };
  function SlotWriter(table) {
    this.a1l_1 = table;
    this.b1l_1 = this.a1l_1.c1j_1;
    this.c1l_1 = this.a1l_1.e1j_1;
    this.d1l_1 = this.a1l_1.k1j_1;
    this.e1l_1 = this.a1l_1.l1j_1;
    this.f1l_1 = this.a1l_1.d1j_1;
    this.g1l_1 = (this.b1l_1.length / 5 | 0) - this.a1l_1.d1j_1 | 0;
    this.h1l_1 = 0;
    this.i1l_1 = 0;
    this.j1l_1 = this.a1l_1.f1j_1;
    this.k1l_1 = this.c1l_1.length - this.a1l_1.f1j_1 | 0;
    this.l1l_1 = this.a1l_1.d1j_1;
    this.m1l_1 = 0;
    this.n1l_1 = 0;
    this.o1l_1 = new IntStack();
    this.p1l_1 = new IntStack();
    this.q1l_1 = new IntStack();
    this.r1l_1 = 0;
    this.s1l_1 = this.a1l_1.d1j_1;
    this.t1l_1 = -1;
    this.u1l_1 = false;
    this.v1l_1 = null;
  }
  protoOf(SlotWriter).a1u = function () {
    return this.r1l_1 < this.s1l_1 ? isNode(this.b1l_1, groupIndexToAddress(this, this.r1l_1)) : false;
  };
  protoOf(SlotWriter).u1o = function (index) {
    return isNode(this.b1l_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).v1o = function (index) {
    return nodeCount(this.b1l_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).g1m = function (index) {
    return key(this.b1l_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).f1m = function (index) {
    var address = groupIndexToAddress(this, index);
    return hasObjectKey(this.b1l_1, address) ? this.c1l_1[objectKeyIndex(this.b1l_1, address)] : null;
  };
  protoOf(SlotWriter).a1o = function (index) {
    return groupSize(this.b1l_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).e1m = function (index) {
    var address = groupIndexToAddress(this, index);
    return hasAux(this.b1l_1, address) ? this.c1l_1[auxIndex(this.b1l_1, this, address)] : Companion_getInstance_0().s1m_1;
  };
  protoOf(SlotWriter).t25 = function (index) {
    return (index > this.t1l_1 ? index < this.s1l_1 : false) ? true : this.t1l_1 === 0 ? index === 0 : false;
  };
  protoOf(SlotWriter).u25 = function (index) {
    return this.v25(index, this.r1l_1);
  };
  protoOf(SlotWriter).v25 = function (index, group) {
    var tmp;
    if (group === this.t1l_1) {
      tmp = this.s1l_1;
    } else if (group > this.o1l_1.x25(0)) {
      tmp = group + this.a1o(group) | 0;
    } else {
      var openIndex = this.o1l_1.w25(group);
      tmp = openIndex < 0 ? group + this.a1o(group) | 0 : (_get_capacity__a9k9f3(this) - this.g1l_1 | 0) - this.p1l_1.t1o(openIndex) | 0;
    }
    var end = tmp;
    return index > group ? index < end : false;
  };
  protoOf(SlotWriter).t1q = function (index) {
    var address = groupIndexToAddress(this, index);
    return isNode(this.b1l_1, address) ? this.c1l_1[dataIndexToDataAddress(this, nodeIndex(this.b1l_1, this, address))] : null;
  };
  protoOf(SlotWriter).y25 = function (anchor) {
    return this.t1q(anchor.z25(this));
  };
  protoOf(SlotWriter).h1m = function (index) {
    return parent(this.b1l_1, this, index);
  };
  protoOf(SlotWriter).y1k = function () {
    this.u1l_1 = true;
    if (this.o1l_1.u()) {
      moveGroupGapTo(this, this.m());
      moveSlotGapTo(this, this.c1l_1.length - this.k1l_1 | 0, this.f1l_1);
      clearSlotGap(this);
      recalculateMarks(this);
    }
    this.a1l_1.b25(this, this.b1l_1, this.f1l_1, this.c1l_1, this.j1l_1, this.d1l_1, this.e1l_1);
  };
  protoOf(SlotWriter).a26 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.m1l_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.reset.<anonymous>' call
      var message = 'Cannot reset when inserting';
      composeRuntimeError(toString(message));
    }
    recalculateMarks(this);
    this.r1l_1 = 0;
    this.s1l_1 = _get_capacity__a9k9f3(this) - this.g1l_1 | 0;
    this.h1l_1 = 0;
    this.i1l_1 = 0;
    this.n1l_1 = 0;
  };
  protoOf(SlotWriter).f1t = function (value) {
    var result = this.b26();
    this.c26(value);
    return result;
  };
  protoOf(SlotWriter).l25 = function (value) {
    var address = groupIndexToAddress(this, this.r1l_1);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!hasAux(this.b1l_1, address)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.updateAux.<anonymous>' call
      var message = 'Updating the data of a group that was not created with a data slot';
      composeRuntimeError(toString(message));
    }
    this.c1l_1[dataIndexToDataAddress(this, auxIndex(this.b1l_1, this, address))] = value;
  };
  protoOf(SlotWriter).k1u = function (sourceInformation) {
    if (this.m1l_1 > 0) {
      groupSourceInformationFor(this, this.t1l_1, sourceInformation);
    }
  };
  protoOf(SlotWriter).m1u = function (key, value) {
    if (this.m1l_1 > 0) {
      groupSourceInformationFor(this, this.t1l_1, null).d26(key, value);
    }
  };
  protoOf(SlotWriter).o1u = function () {
    if (this.m1l_1 > 0) {
      groupSourceInformationFor(this, this.t1l_1, null).e26();
    }
  };
  protoOf(SlotWriter).m25 = function (value) {
    return updateNodeOfGroup(this, this.r1l_1, value);
  };
  protoOf(SlotWriter).f26 = function (anchor, value) {
    return updateNodeOfGroup(this, anchor.z25(this), value);
  };
  protoOf(SlotWriter).c26 = function (value) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.h1l_1 <= this.i1l_1)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.set.<anonymous>' call
      var message = 'Writing to an invalid slot';
      composeRuntimeError(toString(message));
    }
    this.c1l_1[dataIndexToDataAddress(this, this.h1l_1 - 1 | 0)] = value;
  };
  protoOf(SlotWriter).g26 = function (index, value) {
    return this.j1v(this.r1l_1, index, value);
  };
  protoOf(SlotWriter).j1v = function (group, index, value) {
    var address = groupIndexToAddress(this, group);
    var slotsStart = slotIndex(this.b1l_1, this, address);
    var slotsEnd = dataIndex_0(this.b1l_1, this, groupIndexToAddress(this, group + 1 | 0));
    var slotsIndex = slotsStart + index | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(slotsIndex >= slotsStart ? slotsIndex < slotsEnd : false)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.set.<anonymous>' call
      var message = 'Write to an invalid slot index ' + index + ' for group ' + group;
      composeRuntimeError(toString(message));
    }
    var slotAddress = dataIndexToDataAddress(this, slotsIndex);
    var result = this.c1l_1[slotAddress];
    this.c1l_1[slotAddress] = value;
    return result;
  };
  protoOf(SlotWriter).b26 = function () {
    if (this.m1l_1 > 0) {
      insertSlots(this, 1, this.t1l_1);
    }
    var tmp = this.c1l_1;
    var tmp1 = this.h1l_1;
    this.h1l_1 = tmp1 + 1 | 0;
    return tmp[dataIndexToDataAddress(this, tmp1)];
  };
  protoOf(SlotWriter).m20 = function (anchor, index) {
    return this.p20(this.p1p(anchor), index);
  };
  protoOf(SlotWriter).p20 = function (groupIndex, index) {
    var address = groupIndexToAddress(this, groupIndex);
    var slotsStart = slotIndex(this.b1l_1, this, address);
    var slotsEnd = dataIndex_0(this.b1l_1, this, groupIndexToAddress(this, groupIndex + 1 | 0));
    var slotsIndex = slotsStart + index | 0;
    if (!(slotsStart <= slotsIndex ? slotsIndex < slotsEnd : false)) {
      return Companion_getInstance_0().s1m_1;
    }
    var slotAddress = dataIndexToDataAddress(this, slotsIndex);
    return this.c1l_1[slotAddress];
  };
  protoOf(SlotWriter).j25 = function (amount) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(amount >= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      var message = 'Cannot seek backwards';
      composeRuntimeError(toString(message));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.m1l_1 <= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      var message_0 = 'Cannot call seek() while inserting';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    if (amount === 0)
      return Unit_instance;
    var index = this.r1l_1 + amount | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(index >= this.t1l_1 ? index <= this.s1l_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      var message_1 = 'Cannot seek outside the current group (' + this.t1l_1 + '-' + this.s1l_1 + ')';
      composeRuntimeError(toString(message_1));
    }
    this.r1l_1 = index;
    var newSlot = dataIndex_0(this.b1l_1, this, groupIndexToAddress(this, index));
    this.h1l_1 = newSlot;
    this.i1l_1 = newSlot;
  };
  protoOf(SlotWriter).m1m = function () {
    var newGroup = this.s1l_1;
    this.r1l_1 = newGroup;
    this.h1l_1 = dataIndex_0(this.b1l_1, this, groupIndexToAddress(this, newGroup));
  };
  protoOf(SlotWriter).i1n = function () {
    var tmp1 = this.m1l_1;
    this.m1l_1 = tmp1 + 1 | 0;
    if (tmp1 === 0) {
      saveCurrentGroupEnd(this);
    }
  };
  protoOf(SlotWriter).n1o = function () {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.m1l_1 > 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.endInsert.<anonymous>' call
      var message = 'Unbalanced begin/end insert';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.m1l_1 = this.m1l_1 - 1 | 0;
    if (this.m1l_1 === 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(this.q1l_1.m() === this.o1l_1.m())) {
        // Inline function 'androidx.compose.runtime.SlotWriter.endInsert.<anonymous>' call
        var message_0 = 'startGroup/endGroup mismatch while inserting';
        composeRuntimeError(toString(message_0));
      }
      restoreCurrentGroupEnd(this);
    }
  };
  protoOf(SlotWriter).p1m = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.m1l_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.startGroup.<anonymous>' call
      var message = 'Key must be supplied when inserting';
      composeRuntimeError(toString(message));
    }
    startGroup_1(this, 0, Companion_getInstance_0().s1m_1, false, Companion_getInstance_0().s1m_1);
  };
  protoOf(SlotWriter).t1m = function (key, dataKey) {
    return startGroup_1(this, key, dataKey, false, Companion_getInstance_0().s1m_1);
  };
  protoOf(SlotWriter).v1m = function (key, objectKey) {
    return startGroup_1(this, key, objectKey, true, Companion_getInstance_0().s1m_1);
  };
  protoOf(SlotWriter).u1m = function (key, objectKey, aux) {
    return startGroup_1(this, key, objectKey, false, aux);
  };
  protoOf(SlotWriter).m1o = function () {
    var inserting = this.m1l_1 > 0;
    var currentGroup = this.r1l_1;
    var currentGroupEnd = this.s1l_1;
    var groupIndex = this.t1l_1;
    var groupAddress = groupIndexToAddress(this, groupIndex);
    var newNodes = this.n1l_1;
    var newGroupSize = currentGroup - groupIndex | 0;
    var isNode_0 = isNode(this.b1l_1, groupAddress);
    if (inserting) {
      updateGroupSize(this.b1l_1, groupAddress, newGroupSize);
      updateNodeCount_0(this.b1l_1, groupAddress, newNodes);
      this.n1l_1 = this.q1l_1.w1n() + (isNode_0 ? 1 : newNodes) | 0;
      this.t1l_1 = parent(this.b1l_1, this, groupIndex);
    } else {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(currentGroup === currentGroupEnd)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.endGroup.<anonymous>' call
        var message = 'Expected to be at the end of a group';
        composeRuntimeError(toString(message));
      }
      var oldGroupSize = groupSize(this.b1l_1, groupAddress);
      var oldNodes = nodeCount(this.b1l_1, groupAddress);
      updateGroupSize(this.b1l_1, groupAddress, newGroupSize);
      updateNodeCount_0(this.b1l_1, groupAddress, newNodes);
      var newParent = this.o1l_1.w1n();
      restoreCurrentGroupEnd(this);
      this.t1l_1 = newParent;
      var groupParent = parent(this.b1l_1, this, groupIndex);
      this.n1l_1 = this.q1l_1.w1n();
      if (groupParent === newParent) {
        this.n1l_1 = this.n1l_1 + (isNode_0 ? 0 : newNodes - oldNodes | 0) | 0;
      } else {
        var groupSizeDelta = newGroupSize - oldGroupSize | 0;
        var nodesDelta = isNode_0 ? 0 : newNodes - oldNodes | 0;
        if (!(groupSizeDelta === 0) ? true : !(nodesDelta === 0)) {
          var current = groupParent;
          while ((!(current === 0) ? !(current === newParent) : false) ? !(nodesDelta === 0) ? true : !(groupSizeDelta === 0) : false) {
            var currentAddress = groupIndexToAddress(this, current);
            if (!(groupSizeDelta === 0)) {
              var newSize = groupSize(this.b1l_1, currentAddress) + groupSizeDelta | 0;
              updateGroupSize(this.b1l_1, currentAddress, newSize);
            }
            if (!(nodesDelta === 0)) {
              updateNodeCount_0(this.b1l_1, currentAddress, nodeCount(this.b1l_1, currentAddress) + nodesDelta | 0);
            }
            if (isNode(this.b1l_1, currentAddress))
              nodesDelta = 0;
            current = parent(this.b1l_1, this, current);
          }
        }
        this.n1l_1 = this.n1l_1 + nodesDelta | 0;
      }
    }
    return newNodes;
  };
  protoOf(SlotWriter).h26 = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.m1l_1 <= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.ensureStarted.<anonymous>' call
      var message = 'Cannot call ensureStarted() while inserting';
      composeRuntimeError(toString(message));
    }
    var parent = this.t1l_1;
    if (!(parent === index)) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(index >= parent ? index < this.s1l_1 : false)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.ensureStarted.<anonymous>' call
        var message_0 = 'Started group at ' + index + ' must be a subgroup of the group at ' + parent;
        composeRuntimeError(toString(message_0));
      }
      var oldCurrent = this.r1l_1;
      var oldCurrentSlot = this.h1l_1;
      var oldCurrentSlotEnd = this.i1l_1;
      this.r1l_1 = index;
      this.p1m();
      this.r1l_1 = oldCurrent;
      this.h1l_1 = oldCurrentSlot;
      this.i1l_1 = oldCurrentSlotEnd;
    }
  };
  protoOf(SlotWriter).i26 = function (anchor) {
    return this.h26(anchor.z25(this));
  };
  protoOf(SlotWriter).b1m = function () {
    var groupAddress = groupIndexToAddress(this, this.r1l_1);
    var newGroup = this.r1l_1 + groupSize(this.b1l_1, groupAddress) | 0;
    this.r1l_1 = newGroup;
    this.h1l_1 = dataIndex_0(this.b1l_1, this, groupIndexToAddress(this, newGroup));
    return isNode(this.b1l_1, groupAddress) ? 1 : nodeCount(this.b1l_1, groupAddress);
  };
  protoOf(SlotWriter).y1u = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.m1l_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.removeGroup.<anonymous>' call
      var message = 'Cannot remove group while inserting';
      composeRuntimeError(toString(message));
    }
    var oldGroup = this.r1l_1;
    var oldSlot = this.h1l_1;
    var count = this.b1m();
    var tmp0_safe_receiver = sourceInformationOf(this, this.t1l_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotWriter.removeGroup.<anonymous>' call
      var tmp0_safe_receiver_0 = this.z24(oldGroup);
      var tmp;
      if (tmp0_safe_receiver_0 == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SlotWriter.removeGroup.<anonymous>.<anonymous>' call
        tmp = tmp0_safe_receiver.j26(tmp0_safe_receiver_0);
      }
    }
    var tmp1_safe_receiver = this.v1l_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      while (tmp1_safe_receiver.pn() ? tmp1_safe_receiver.p1s() >= oldGroup : false) {
        tmp1_safe_receiver.o25();
      }
    }
    var anchorsRemoved = removeGroups(this, oldGroup, this.r1l_1 - oldGroup | 0);
    removeSlots(this, oldSlot, this.h1l_1 - oldSlot | 0, oldGroup - 1 | 0);
    this.r1l_1 = oldGroup;
    this.h1l_1 = oldSlot;
    this.n1l_1 = this.n1l_1 - count | 0;
    return anchorsRemoved;
  };
  protoOf(SlotWriter).v1u = function () {
    var start = dataIndex_0(this.b1l_1, this, groupIndexToAddress(this, this.r1l_1));
    var end = dataIndex_0(this.b1l_1, this, groupIndexToAddress(this, this.r1l_1 + this.a1o(this.r1l_1) | 0));
    return new SlotWriter$groupSlots$1(start, end, this);
  };
  protoOf(SlotWriter).k26 = function (offset) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.m1l_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      var message = 'Cannot move a group while inserting';
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(offset >= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      var message_0 = 'Parameter offset is out of bounds';
      composeRuntimeError(toString(message_0));
    }
    if (offset === 0)
      return Unit_instance;
    var current = this.r1l_1;
    var parent = this.t1l_1;
    var parentEnd = this.s1l_1;
    var count = offset;
    var groupToMove = current;
    while (count > 0) {
      groupToMove = groupToMove + groupSize(this.b1l_1, groupIndexToAddress(this, groupToMove)) | 0;
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(groupToMove <= parentEnd)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
        var message_1 = 'Parameter offset is out of bounds';
        composeRuntimeError(toString(message_1));
      }
      count = count - 1 | 0;
    }
    var moveLen = groupSize(this.b1l_1, groupIndexToAddress(this, groupToMove));
    var currentSlot = this.h1l_1;
    var dataStart = dataIndex_0(this.b1l_1, this, groupIndexToAddress(this, groupToMove));
    var dataEnd = dataIndex_0(this.b1l_1, this, groupIndexToAddress(this, groupToMove + moveLen | 0));
    var moveDataLen = dataEnd - dataStart | 0;
    // Inline function 'kotlin.math.max' call
    var a = this.r1l_1 - 1 | 0;
    var tmp$ret$3 = Math.max(a, 0);
    insertSlots(this, moveDataLen, tmp$ret$3);
    insertGroups(this, moveLen);
    var groups = this.b1l_1;
    var moveLocationAddress = groupIndexToAddress(this, groupToMove + moveLen | 0);
    var moveLocationOffset = imul(moveLocationAddress, 5);
    var currentAddress = groupIndexToAddress(this, current);
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = imul(currentAddress, 5);
    var endIndex = moveLocationOffset + imul(moveLen, 5) | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = groups;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, groups, destinationOffset, moveLocationOffset, endIndex);
    if (moveDataLen > 0) {
      var slots = this.c1l_1;
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = dataIndexToDataAddress(this, dataStart + moveDataLen | 0);
      var endIndex_0 = dataIndexToDataAddress(this, dataEnd + moveDataLen | 0);
      arrayCopy(slots, slots, currentSlot, startIndex, endIndex_0);
    }
    var dataMoveDistance = (dataStart + moveDataLen | 0) - currentSlot | 0;
    var slotsGapStart = this.j1l_1;
    var slotsGapLen = this.k1l_1;
    var slotsCapacity = this.c1l_1.length;
    var slotsGapOwner = this.l1l_1;
    var inductionVariable = current;
    var last = current + moveLen | 0;
    if (inductionVariable < last)
      do {
        var group = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var groupAddress = groupIndexToAddress(this, group);
        var oldIndex = dataIndex_0(groups, this, groupAddress);
        var newIndex = oldIndex - dataMoveDistance | 0;
        var newAnchor = dataIndexToDataAnchor(this, newIndex, slotsGapOwner < groupAddress ? 0 : slotsGapStart, slotsGapLen, slotsCapacity);
        updateDataIndex(groups, this, groupAddress, newAnchor);
      }
       while (inductionVariable < last);
    moveAnchors(this, groupToMove + moveLen | 0, current, moveLen);
    var anchorsRemoved = removeGroups(this, groupToMove + moveLen | 0, moveLen);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!anchorsRemoved) {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      var message_2 = 'Unexpectedly removed anchors';
      composeRuntimeError(toString(message_2));
    }
    fixParentAnchorsFor(this, parent, this.s1l_1, current);
    if (moveDataLen > 0) {
      removeSlots(this, dataStart + moveDataLen | 0, moveDataLen, (groupToMove + moveLen | 0) - 1 | 0);
    }
  };
  protoOf(SlotWriter).l26 = function (anchor, offset, writer) {
    runtimeCheck(writer.m1l_1 > 0);
    runtimeCheck(this.m1l_1 === 0);
    runtimeCheck(anchor.y1w());
    var location = this.p1p(anchor) + offset | 0;
    var currentGroup = this.r1l_1;
    runtimeCheck(currentGroup <= location ? location < this.s1l_1 : false);
    var parent = this.h1m(location);
    var size = this.a1o(location);
    var nodes = this.u1o(location) ? 1 : this.v1o(location);
    var result = moveGroup$default(Companion_instance_5, this, location, writer, false, false);
    updateContainsMark(this, parent);
    var current = parent;
    var updatingNodes = nodes > 0;
    while (current >= currentGroup) {
      var currentAddress = groupIndexToAddress(this, current);
      updateGroupSize(this.b1l_1, currentAddress, groupSize(this.b1l_1, currentAddress) - size | 0);
      if (updatingNodes) {
        if (isNode(this.b1l_1, currentAddress))
          updatingNodes = false;
        else {
          updateNodeCount_0(this.b1l_1, currentAddress, nodeCount(this.b1l_1, currentAddress) - nodes | 0);
        }
      }
      current = this.h1m(current);
    }
    if (updatingNodes) {
      runtimeCheck(this.n1l_1 >= nodes);
      this.n1l_1 = this.n1l_1 - nodes | 0;
    }
    return result;
  };
  protoOf(SlotWriter).m26 = function (table, index, removeSourceGroup) {
    runtimeCheck(this.m1l_1 > 0);
    if (((index === 0 ? this.r1l_1 === 0 : false) ? this.a1l_1.d1j_1 === 0 : false) ? groupSize(table.c1j_1, index) === table.d1j_1 : false) {
      var myGroups = this.b1l_1;
      var mySlots = this.c1l_1;
      var myAnchors = this.d1l_1;
      var mySourceInformation = this.e1l_1;
      var groups = table.c1j_1;
      var groupsSize = table.d1j_1;
      var slots = table.e1j_1;
      var slotsSize = table.f1j_1;
      var sourceInformation = table.l1j_1;
      this.b1l_1 = groups;
      this.c1l_1 = slots;
      this.d1l_1 = table.k1j_1;
      this.f1l_1 = groupsSize;
      this.g1l_1 = (groups.length / 5 | 0) - groupsSize | 0;
      this.j1l_1 = slotsSize;
      this.k1l_1 = slots.length - slotsSize | 0;
      this.l1l_1 = groupsSize;
      this.e1l_1 = sourceInformation;
      table.c25(myGroups, 0, mySlots, 0, myAnchors, mySourceInformation);
      return this.d1l_1;
    }
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = table.l1m();
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveFrom.<anonymous>' call
      tmp = moveGroup(Companion_instance_5, writer, index, this, true, true, removeSourceGroup);
    }finally {
      writer.y1k();
    }
    return tmp;
  };
  protoOf(SlotWriter).n26 = function (offset, table, index) {
    runtimeCheck(this.m1l_1 <= 0 ? this.a1o(this.r1l_1 + offset | 0) === 1 : false);
    var previousCurrentGroup = this.r1l_1;
    var previousCurrentSlot = this.h1l_1;
    var previousCurrentSlotEnd = this.i1l_1;
    this.j25(offset);
    this.p1m();
    this.i1n();
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = table.l1m();
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveIntoGroupFrom.<anonymous>' call
      tmp = moveGroup$default(Companion_instance_5, writer, index, this, false, true);
    }finally {
      writer.y1k();
    }
    var anchors = tmp;
    this.n1o();
    this.m1o();
    this.r1l_1 = previousCurrentGroup;
    this.h1l_1 = previousCurrentSlot;
    this.i1l_1 = previousCurrentSlotEnd;
    return anchors;
  };
  protoOf(SlotWriter).j1n = function (index) {
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var this_0 = this.d1l_1;
    var effectiveSize = this.m();
    var location = search$accessor$10fp17g(this_0, index, effectiveSize);
    var tmp;
    if (location < 0) {
      // Inline function 'androidx.compose.runtime.SlotWriter.anchor.<anonymous>' call
      var anchor = new Anchor(index <= this.f1l_1 ? index : -(this.m() - index | 0) | 0);
      this_0.y1(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = this_0.n(location);
    }
    return tmp;
  };
  protoOf(SlotWriter).o26 = function (group) {
    var groupAddress = groupIndexToAddress(this, group);
    if (!hasMark(this.b1l_1, groupAddress)) {
      updateMark(this.b1l_1, groupAddress, true);
      if (!containsMark(this.b1l_1, groupAddress)) {
        updateContainsMark(this, this.h1m(group));
      }
    }
  };
  protoOf(SlotWriter).e1p = function (group, $super) {
    group = group === VOID ? this.t1l_1 : group;
    var tmp;
    if ($super === VOID) {
      this.o26(group);
      tmp = Unit_instance;
    } else {
      tmp = $super.o26.call(this, group);
    }
    return tmp;
  };
  protoOf(SlotWriter).p1p = function (anchor) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotWriter.anchorIndex.<anonymous>' call
    var it = anchor.m1q_1;
    return it < 0 ? this.m() + it | 0 : it;
  };
  protoOf(SlotWriter).toString = function () {
    return 'SlotWriter(current = ' + this.r1l_1 + ' end=' + this.s1l_1 + ' size = ' + this.m() + ' ' + ('gap=' + this.f1l_1 + '-' + (this.f1l_1 + this.g1l_1 | 0) + ')');
  };
  protoOf(SlotWriter).z24 = function (group) {
    return (0 <= group ? group < this.m() : false) ? find(this.d1l_1, group, this.m()) : null;
  };
  protoOf(SlotWriter).m = function () {
    return _get_capacity__a9k9f3(this) - this.g1l_1 | 0;
  };
  function Anchor(loc) {
    this.m1q_1 = loc;
  }
  protoOf(Anchor).y1w = function () {
    return !(this.m1q_1 === IntCompanionObject_instance.MIN_VALUE);
  };
  protoOf(Anchor).z1t = function (slots) {
    return slots.p1p(this);
  };
  protoOf(Anchor).z25 = function (writer) {
    return writer.p1p(this);
  };
  protoOf(Anchor).toString = function () {
    return anyToString(this) + '{ location = ' + this.m1q_1 + ' }';
  };
  function openInformation($this) {
    var tmp0_safe_receiver = $this.g25_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.GroupSourceInformation.openInformation.<anonymous>' call
      var tmp$ret$1;
      $l$block: {
        // Inline function 'androidx.compose.runtime.fastLastOrNull' call
        var index = tmp0_safe_receiver.m() - 1 | 0;
        while (index >= 0) {
          var value = tmp0_safe_receiver.n(index);
          // Inline function 'androidx.compose.runtime.GroupSourceInformation.openInformation.<anonymous>.<anonymous>' call
          var tmp_0;
          if (value instanceof GroupSourceInformation) {
            tmp_0 = !value.h25_1;
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$1 = value;
            break $l$block;
          }
          index = index - 1 | 0;
        }
        tmp$ret$1 = null;
      }
      tmp = tmp$ret$1;
    }
    var tmp_1 = tmp;
    var tmp1_safe_receiver = tmp_1 instanceof GroupSourceInformation ? tmp_1 : null;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : openInformation(tmp1_safe_receiver);
    return tmp2_elvis_lhs == null ? $this : tmp2_elvis_lhs;
  }
  function add($this, group) {
    var tmp0_elvis_lhs = $this.g25_1;
    var groups = tmp0_elvis_lhs == null ? ArrayList_init_$Create$() : tmp0_elvis_lhs;
    $this.g25_1 = groups;
    groups.a1(group);
  }
  function hasAnchor($this, anchor) {
    var tmp0_safe_receiver = $this.g25_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'androidx.compose.runtime.snapshots.fastAny' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = tmp0_safe_receiver.m() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = tmp0_safe_receiver.n(index);
            // Inline function 'androidx.compose.runtime.snapshots.fastAny.<anonymous>' call
            // Inline function 'androidx.compose.runtime.GroupSourceInformation.hasAnchor.<anonymous>' call
            var tmp_0;
            if (equals(item, anchor)) {
              tmp_0 = true;
            } else {
              var tmp_1;
              if (item instanceof GroupSourceInformation) {
                tmp_1 = hasAnchor(item, anchor);
              } else {
                tmp_1 = false;
              }
              tmp_0 = tmp_1;
            }
            if (tmp_0) {
              tmp$ret$1 = true;
              break $l$block;
            }
          }
           while (inductionVariable <= last);
        tmp$ret$1 = false;
      }
      tmp = tmp$ret$1;
    }
    return tmp === true;
  }
  function GroupSourceInformation(key, sourceInformation) {
    this.e25_1 = key;
    this.f25_1 = sourceInformation;
    this.g25_1 = null;
    this.h25_1 = false;
  }
  protoOf(GroupSourceInformation).d26 = function (key, sourceInformation) {
    add(openInformation(this), new GroupSourceInformation(key, sourceInformation));
  };
  protoOf(GroupSourceInformation).e26 = function () {
    openInformation(this).y1k();
  };
  protoOf(GroupSourceInformation).k25 = function (writer, group) {
    add(openInformation(this), writer.j1n(group));
  };
  protoOf(GroupSourceInformation).p26 = function (table, group) {
    add(openInformation(this), table.j1n(group));
  };
  protoOf(GroupSourceInformation).i25 = function (writer, predecessor, group) {
    var tmp0_elvis_lhs = this.g25_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = ArrayList_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.GroupSourceInformation.addGroupAfter.<anonymous>' call
      this.g25_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var groups = tmp;
    var tmp_0;
    if (predecessor >= 0) {
      var anchor = writer.z24(predecessor);
      var tmp_1;
      if (!(anchor == null)) {
        var tmp$ret$2;
        $l$block: {
          // Inline function 'androidx.compose.runtime.fastIndexOf' call
          var index = 0;
          var size = groups.m();
          while (index < size) {
            var value = groups.n(index);
            // Inline function 'androidx.compose.runtime.GroupSourceInformation.addGroupAfter.<anonymous>' call
            var tmp_2;
            if (equals(value, anchor)) {
              tmp_2 = true;
            } else {
              var tmp_3;
              if (value instanceof GroupSourceInformation) {
                tmp_3 = hasAnchor(value, anchor);
              } else {
                tmp_3 = false;
              }
              tmp_2 = tmp_3;
            }
            if (tmp_2) {
              tmp$ret$2 = index;
              break $l$block;
            }
            index = index + 1 | 0;
          }
          tmp$ret$2 = -1;
        }
        tmp_1 = tmp$ret$2;
      } else {
        tmp_1 = 0;
      }
      tmp_0 = tmp_1;
    } else {
      tmp_0 = 0;
    }
    var index_0 = tmp_0;
    groups.y1(index_0, writer.j1n(group));
  };
  protoOf(GroupSourceInformation).y1k = function () {
    this.h25_1 = true;
  };
  protoOf(GroupSourceInformation).j26 = function (anchor) {
    var groups = this.g25_1;
    if (!(groups == null)) {
      var index = groups.m() - 1 | 0;
      while (index >= 0) {
        var item = groups.n(index);
        if (item instanceof Anchor) {
          if (equals(item, anchor)) {
            groups.m1(index);
          }
        } else {
          if (item instanceof GroupSourceInformation)
            if (!item.j26(anchor)) {
              groups.m1(index);
            }
        }
        index = index - 1 | 0;
      }
      if (groups.u()) {
        this.g25_1 = null;
        return false;
      }
      return true;
    }
    return true;
  };
  function node(_this__u8e3s4, $this, index) {
    var tmp;
    if (isNode(_this__u8e3s4, index)) {
      tmp = $this.o1k_1[nodeIndex_0(_this__u8e3s4, index)];
    } else {
      tmp = Companion_getInstance_0().s1m_1;
    }
    return tmp;
  }
  function aux(_this__u8e3s4, $this, index) {
    var tmp;
    if (hasAux(_this__u8e3s4, index)) {
      tmp = $this.o1k_1[auxIndex_0(_this__u8e3s4, index)];
    } else {
      tmp = Companion_getInstance_0().s1m_1;
    }
    return tmp;
  }
  function objectKey(_this__u8e3s4, $this, index) {
    var tmp;
    if (hasObjectKey(_this__u8e3s4, index)) {
      tmp = $this.o1k_1[objectKeyIndex(_this__u8e3s4, index)];
    } else {
      tmp = null;
    }
    return tmp;
  }
  function SlotReader(table) {
    this.l1k_1 = table;
    this.m1k_1 = this.l1k_1.c1j_1;
    this.n1k_1 = this.l1k_1.d1j_1;
    this.o1k_1 = this.l1k_1.e1j_1;
    this.p1k_1 = this.l1k_1.f1j_1;
    this.q1k_1 = null;
    this.r1k_1 = false;
    this.s1k_1 = 0;
    this.t1k_1 = this.n1k_1;
    this.u1k_1 = -1;
    this.v1k_1 = 0;
    this.w1k_1 = 0;
    this.x1k_1 = 0;
  }
  protoOf(SlotReader).m = function () {
    return this.n1k_1;
  };
  protoOf(SlotReader).h1m = function (index) {
    return parentAnchor(this.m1k_1, index);
  };
  protoOf(SlotReader).a1u = function () {
    return isNode(this.m1k_1, this.s1k_1);
  };
  protoOf(SlotReader).u1o = function (index) {
    return isNode(this.m1k_1, index);
  };
  protoOf(SlotReader).v1o = function (index) {
    return nodeCount(this.m1k_1, index);
  };
  protoOf(SlotReader).t1q = function (index) {
    return isNode(this.m1k_1, index) ? node(this.m1k_1, this, index) : null;
  };
  protoOf(SlotReader).g1o = function () {
    return this.p1o() ? true : this.s1k_1 === this.t1k_1;
  };
  protoOf(SlotReader).p1o = function () {
    return this.v1k_1 > 0;
  };
  protoOf(SlotReader).q26 = function () {
    return groupSize(this.m1k_1, this.s1k_1);
  };
  protoOf(SlotReader).a1o = function (index) {
    return groupSize(this.m1k_1, index);
  };
  protoOf(SlotReader).f1o = function () {
    return this.t1k_1;
  };
  protoOf(SlotReader).e1n = function () {
    var tmp;
    if (this.s1k_1 < this.t1k_1) {
      tmp = key(this.m1k_1, this.s1k_1);
    } else {
      tmp = 0;
    }
    return tmp;
  };
  protoOf(SlotReader).g1m = function (index) {
    return key(this.m1k_1, index);
  };
  protoOf(SlotReader).d1t = function () {
    return this.w1k_1 - slotAnchor(this.m1k_1, this.u1k_1) | 0;
  };
  protoOf(SlotReader).x1o = function (index) {
    return hasObjectKey(this.m1k_1, index);
  };
  protoOf(SlotReader).g1n = function () {
    return this.s1k_1 < this.t1k_1 ? objectKey(this.m1k_1, this, this.s1k_1) : null;
  };
  protoOf(SlotReader).f1m = function (index) {
    return objectKey(this.m1k_1, this, index);
  };
  protoOf(SlotReader).o1m = function () {
    return this.s1k_1 < this.t1k_1 ? aux(this.m1k_1, this, this.s1k_1) : 0;
  };
  protoOf(SlotReader).e1m = function (index) {
    return aux(this.m1k_1, this, index);
  };
  protoOf(SlotReader).r1r = function (index) {
    return hasMark(this.m1k_1, index);
  };
  protoOf(SlotReader).b1r = function (index) {
    return containsMark(this.m1k_1, index);
  };
  protoOf(SlotReader).y1o = function () {
    return this.u1k_1 >= 0 ? nodeCount(this.m1k_1, this.u1k_1) : 0;
  };
  protoOf(SlotReader).w1t = function (index) {
    return this.c1r(this.s1k_1, index);
  };
  protoOf(SlotReader).c1r = function (group, index) {
    var start = slotAnchor(this.m1k_1, group);
    var next = group + 1 | 0;
    var end = next < this.n1k_1 ? dataAnchor(this.m1k_1, next) : this.p1k_1;
    var address = start + index | 0;
    return address < end ? this.o1k_1[address] : Companion_getInstance_0().s1m_1;
  };
  protoOf(SlotReader).f1 = function () {
    if (this.v1k_1 > 0 ? true : this.w1k_1 >= this.x1k_1)
      return Companion_getInstance_0().s1m_1;
    var tmp1 = this.w1k_1;
    this.w1k_1 = tmp1 + 1 | 0;
    return this.o1k_1[tmp1];
  };
  protoOf(SlotReader).r1m = function () {
    this.v1k_1 = this.v1k_1 + 1 | 0;
  };
  protoOf(SlotReader).l1o = function () {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.v1k_1 > 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.endEmpty.<anonymous>' call
      var message = 'Unbalanced begin/end empty';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.v1k_1 = this.v1k_1 - 1 | 0;
  };
  protoOf(SlotReader).y1k = function () {
    this.r1k_1 = true;
    this.l1k_1.a25(this, this.q1k_1);
  };
  protoOf(SlotReader).p1m = function () {
    if (this.v1k_1 <= 0) {
      var parent = this.u1k_1;
      var currentGroup = this.s1k_1;
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(parentAnchor(this.m1k_1, currentGroup) === parent)) {
        // Inline function 'androidx.compose.runtime.SlotReader.startGroup.<anonymous>' call
        var message = 'Invalid slot table detected';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      var tmp0_safe_receiver = this.q1k_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x2(this.j1n(parent));
      if (tmp1_safe_receiver == null)
        null;
      else {
        tmp1_safe_receiver.p26(this.l1k_1, currentGroup);
      }
      this.u1k_1 = currentGroup;
      this.t1k_1 = currentGroup + groupSize(this.m1k_1, currentGroup) | 0;
      this.s1k_1 = currentGroup + 1 | 0;
      this.w1k_1 = slotAnchor(this.m1k_1, currentGroup);
      this.x1k_1 = currentGroup >= (this.n1k_1 - 1 | 0) ? this.p1k_1 : dataAnchor(this.m1k_1, currentGroup + 1 | 0);
    }
  };
  protoOf(SlotReader).q1m = function () {
    if (this.v1k_1 <= 0) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!isNode(this.m1k_1, this.s1k_1)) {
        // Inline function 'androidx.compose.runtime.SlotReader.startNode.<anonymous>' call
        var message = 'Expected a node group';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      this.p1m();
    }
  };
  protoOf(SlotReader).b1m = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.v1k_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.skipGroup.<anonymous>' call
      var message = 'Cannot skip while in an empty region';
      composeRuntimeError(toString(message));
    }
    var count = isNode(this.m1k_1, this.s1k_1) ? 1 : nodeCount(this.m1k_1, this.s1k_1);
    this.s1k_1 = this.s1k_1 + groupSize(this.m1k_1, this.s1k_1) | 0;
    return count;
  };
  protoOf(SlotReader).m1m = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.v1k_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.skipToGroupEnd.<anonymous>' call
      var message = 'Cannot skip the enclosing group while in an empty region';
      composeRuntimeError(toString(message));
    }
    this.s1k_1 = this.t1k_1;
  };
  protoOf(SlotReader).t1n = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.v1k_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.reposition.<anonymous>' call
      var message = 'Cannot reposition while in an empty region';
      composeRuntimeError(toString(message));
    }
    this.s1k_1 = index;
    var parent = index < this.n1k_1 ? parentAnchor(this.m1k_1, index) : -1;
    this.u1k_1 = parent;
    if (parent < 0)
      this.t1k_1 = this.n1k_1;
    else
      this.t1k_1 = parent + groupSize(this.m1k_1, parent) | 0;
    this.w1k_1 = 0;
    this.x1k_1 = 0;
  };
  protoOf(SlotReader).s1o = function (index) {
    var newCurrentEnd = index + groupSize(this.m1k_1, index) | 0;
    var current = this.s1k_1;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(current >= index ? current <= newCurrentEnd : false)) {
      // Inline function 'androidx.compose.runtime.SlotReader.restoreParent.<anonymous>' call
      var message = 'Index ' + index + ' is not a parent of ' + current;
      composeRuntimeError(toString(message));
    }
    this.u1k_1 = index;
    this.t1k_1 = newCurrentEnd;
    this.w1k_1 = 0;
    this.x1k_1 = 0;
  };
  protoOf(SlotReader).j1o = function () {
    if (this.v1k_1 === 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(this.s1k_1 === this.t1k_1)) {
        // Inline function 'androidx.compose.runtime.SlotReader.endGroup.<anonymous>' call
        var message = 'endGroup() not called at the end of a group';
        composeRuntimeError(toString(message));
      }
      var parent = parentAnchor(this.m1k_1, this.u1k_1);
      this.u1k_1 = parent;
      this.t1k_1 = parent < 0 ? this.n1k_1 : parent + groupSize(this.m1k_1, parent) | 0;
    }
  };
  protoOf(SlotReader).f1n = function () {
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    if (this.v1k_1 > 0)
      return result;
    var index = 0;
    var childIndex = this.s1k_1;
    while (childIndex < this.t1k_1) {
      var tmp = key(this.m1k_1, childIndex);
      var tmp_0 = objectKey(this.m1k_1, this, childIndex);
      var tmp_1 = childIndex;
      var tmp_2 = isNode(this.m1k_1, childIndex) ? 1 : nodeCount(this.m1k_1, childIndex);
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      result.a1(new KeyInfo(tmp, tmp_0, tmp_1, tmp_2, tmp0));
      childIndex = childIndex + groupSize(this.m1k_1, childIndex) | 0;
    }
    return result;
  };
  protoOf(SlotReader).toString = function () {
    return 'SlotReader(current=' + this.s1k_1 + ', key=' + this.e1n() + ', ' + ('parent=' + this.u1k_1 + ', end=' + this.t1k_1 + ')');
  };
  protoOf(SlotReader).j1n = function (index) {
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var this_0 = this.l1k_1.k1j_1;
    var effectiveSize = this.n1k_1;
    var location = search$accessor$10fp17g(this_0, index, effectiveSize);
    var tmp;
    if (location < 0) {
      // Inline function 'androidx.compose.runtime.SlotReader.anchor.<anonymous>' call
      var anchor = new Anchor(index);
      this_0.y1(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = this_0.n(location);
    }
    return tmp;
  };
  function find(_this__u8e3s4, index, effectiveSize) {
    var location = search$accessor$10fp17g(_this__u8e3s4, index, effectiveSize);
    return location >= 0 ? _this__u8e3s4.n(location) : null;
  }
  function search(_this__u8e3s4, location, effectiveSize) {
    var low = 0;
    var high = _this__u8e3s4.m() - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.search.<anonymous>' call
      var it = _this__u8e3s4.n(mid).m1q_1;
      var midVal = it < 0 ? effectiveSize + it | 0 : it;
      var cmp = compareTo(midVal, location);
      if (cmp < 0)
        low = mid + 1 | 0;
      else if (cmp > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function groupSize(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 3 | 0];
  }
  function containsMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 67108864) === 0);
  }
  function parentAnchor(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 2 | 0];
  }
  function dataAnchor(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 4 | 0];
  }
  function slotAnchor(_this__u8e3s4, address) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.slotAnchor.<anonymous>' call
    var slot = imul(address, 5);
    return _this__u8e3s4[slot + 4 | 0] + countOneBits_0(_this__u8e3s4[slot + 1 | 0] >> 28) | 0;
  }
  function hasAux(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 268435456) === 0);
  }
  function hasObjectKey(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 536870912) === 0);
  }
  function isNode(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 1073741824) === 0);
  }
  function nodeIndex_0(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 4 | 0];
  }
  function nodeCount(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 1 | 0] & 67108863;
  }
  function containsAnyMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 201326592) === 0);
  }
  function key(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5)];
  }
  function hasMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 134217728) === 0);
  }
  function objectKeyIndex(_this__u8e3s4, address) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.objectKeyIndex.<anonymous>' call
    var slot = imul(address, 5);
    return _this__u8e3s4[slot + 4 | 0] + countOneBits_0(_this__u8e3s4[slot + 1 | 0] >> 30) | 0;
  }
  function auxIndex_0(_this__u8e3s4, address) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.auxIndex.<anonymous>' call
    var slot = imul(address, 5);
    return slot >= _this__u8e3s4.length ? _this__u8e3s4.length : _this__u8e3s4[slot + 4 | 0] + countOneBits_0(_this__u8e3s4[slot + 1 | 0] >> 29) | 0;
  }
  function validateRead($this) {
    if (!($this.r26_1.j1j_1 === $this.u26_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function GroupIterator(table, start, end) {
    this.r26_1 = table;
    this.s26_1 = end;
    this.t26_1 = start;
    this.u26_1 = this.r26_1.j1j_1;
    if (this.r26_1.i1j_1)
      throw ConcurrentModificationException_init_$Create$();
  }
  protoOf(GroupIterator).d1 = function () {
    return this.t26_1 < this.s26_1;
  };
  protoOf(GroupIterator).f1 = function () {
    validateRead(this);
    var group = this.t26_1;
    this.t26_1 = this.t26_1 + groupSize(this.r26_1.c1j_1, group) | 0;
    return new SlotTableGroup(this.r26_1, group, this.u26_1);
  };
  function validateRead_0($this) {
    if (!($this.v26_1.j1j_1 === $this.x26_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function SlotTableGroup(table, group, version) {
    version = version === VOID ? table.j1j_1 : version;
    this.v26_1 = table;
    this.w26_1 = group;
    this.x26_1 = version;
  }
  protoOf(SlotTableGroup).o = function () {
    validateRead_0(this);
    var tmp0_safe_receiver = this.v26_1.d25(this.w26_1);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTableGroup.iterator.<anonymous>' call
      tmp = new SourceInformationGroupIterator(this.v26_1, tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? new GroupIterator(this.v26_1, this.w26_1 + 1 | 0, this.w26_1 + groupSize(this.v26_1.c1j_1, this.w26_1) | 0) : tmp1_elvis_lhs;
  };
  function initGroup(_this__u8e3s4, address, key, isNode, hasDataKey, hasData, parentAnchor, dataAnchor) {
    var nodeBit = isNode ? 1073741824 : 0;
    var dataKeyBit = hasDataKey ? 536870912 : 0;
    var dataBit = hasData ? 268435456 : 0;
    var arrayIndex = imul(address, 5);
    _this__u8e3s4[arrayIndex + 0 | 0] = key;
    _this__u8e3s4[arrayIndex + 1 | 0] = nodeBit | dataKeyBit | dataBit;
    _this__u8e3s4[arrayIndex + 2 | 0] = parentAnchor;
    _this__u8e3s4[arrayIndex + 3 | 0] = 0;
    _this__u8e3s4[arrayIndex + 4 | 0] = dataAnchor;
  }
  function updateGroupSize(_this__u8e3s4, address, value) {
    runtimeCheck(value >= 0);
    _this__u8e3s4[imul(address, 5) + 3 | 0] = value;
  }
  function updateNodeCount_0(_this__u8e3s4, address, value) {
    runtimeCheck(value >= 0 ? value < 67108863 : false);
    _this__u8e3s4[imul(address, 5) + 1 | 0] = _this__u8e3s4[imul(address, 5) + 1 | 0] & -67108864 | value;
  }
  function PrioritySet(list) {
    var tmp;
    if (list === VOID) {
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp = ArrayList_init_$Create$();
    } else {
      tmp = list;
    }
    list = tmp;
    this.n25_1 = list;
  }
  protoOf(PrioritySet).p25 = function (value) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.n25_1.u()) {
      tmp = this.n25_1.n(0) === value ? true : this.n25_1.n(this.n25_1.m() - 1 | 0) === value;
    } else {
      tmp = false;
    }
    if (tmp)
      return Unit_instance;
    var index = this.n25_1.m();
    this.n25_1.a1(value);
    $l$loop: while (index > 0) {
      var parent = ((index + 1 | 0) >>> 1 | 0) - 1 | 0;
      var parentValue = this.n25_1.n(parent);
      if (value > parentValue) {
        this.n25_1.z(index, parentValue);
      } else
        break $l$loop;
      index = parent;
    }
    this.n25_1.z(index, value);
  };
  protoOf(PrioritySet).pn = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    return !this.n25_1.u();
  };
  protoOf(PrioritySet).p1s = function () {
    return first(this.n25_1);
  };
  protoOf(PrioritySet).o25 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.n25_1.m() > 0)) {
      // Inline function 'androidx.compose.runtime.PrioritySet.takeMax.<anonymous>' call
      var message = 'Set is empty';
      composeRuntimeError(toString(message));
    }
    var value = this.n25_1.n(0);
    $l$loop: while (true) {
      var tmp;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!this.n25_1.u()) {
        tmp = this.n25_1.n(0) === value;
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      this.n25_1.z(0, last(this.n25_1));
      this.n25_1.m1(this.n25_1.m() - 1 | 0);
      var index = 0;
      var size = this.n25_1.m();
      var max = this.n25_1.m() >>> 1 | 0;
      $l$loop_2: while (index < max) {
        var indexValue = this.n25_1.n(index);
        var left = imul(index + 1 | 0, 2) - 1 | 0;
        var leftValue = this.n25_1.n(left);
        var right = imul(index + 1 | 0, 2);
        if (right < size) {
          var rightValue = this.n25_1.n(right);
          if (rightValue > leftValue) {
            if (rightValue > indexValue) {
              this.n25_1.z(index, rightValue);
              this.n25_1.z(right, indexValue);
              index = right;
              continue $l$loop_2;
            } else
              break $l$loop_2;
          }
        }
        if (leftValue > indexValue) {
          this.n25_1.z(index, leftValue);
          this.n25_1.z(left, indexValue);
          index = left;
        } else
          break $l$loop_2;
      }
    }
    return value;
  };
  function updateParentAnchor(_this__u8e3s4, address, value) {
    _this__u8e3s4[imul(address, 5) + 2 | 0] = value;
  }
  function updateDataAnchor(_this__u8e3s4, address, anchor) {
    _this__u8e3s4[imul(address, 5) + 4 | 0] = anchor;
  }
  function locationOf(_this__u8e3s4, index, effectiveSize) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.locationOf.<anonymous>' call
    var it = search$accessor$10fp17g(_this__u8e3s4, index, effectiveSize);
    return it >= 0 ? it : -(it + 1 | 0) | 0;
  }
  function updateMark(_this__u8e3s4, address, value) {
    var arrayIndex = imul(address, 5) + 1 | 0;
    if (value) {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] | 134217728;
    } else {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] & -134217729;
    }
  }
  function updateContainsMark_0(_this__u8e3s4, address, value) {
    var arrayIndex = imul(address, 5) + 1 | 0;
    if (value) {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] | 67108864;
    } else {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] & -67108865;
    }
  }
  function countOneBits_0(value) {
    switch (value) {
      case 0:
        return 0;
      case 1:
        return 1;
      case 2:
        return 1;
      case 3:
        return 2;
      case 4:
        return 1;
      case 5:
        return 2;
      case 6:
        return 2;
      default:
        return 3;
    }
  }
  function groupInfo(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 1 | 0];
  }
  function KeyInfo(key, objectKey, location, nodes, index) {
    this.k1n_1 = key;
    this.l1n_1 = objectKey;
    this.m1n_1 = location;
    this.n1n_1 = nodes;
    this.o1n_1 = index;
  }
  function SourceInformationGroupIterator(table, group) {
    this.y26_1 = table;
    this.z26_1 = group;
    this.a27_1 = this.y26_1.j1j_1;
    this.b27_1 = 0;
  }
  protoOf(SourceInformationGroupIterator).d1 = function () {
    var tmp0_safe_receiver = this.z26_1.g25_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SourceInformationGroupIterator.hasNext.<anonymous>' call
      tmp = this.b27_1 < tmp0_safe_receiver.m();
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(SourceInformationGroupIterator).f1 = function () {
    var tmp2_safe_receiver = this.z26_1.g25_1;
    var tmp;
    if (tmp2_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp1 = this.b27_1;
      this.b27_1 = tmp1 + 1 | 0;
      tmp = tmp2_safe_receiver.n(tmp1);
    }
    var group = tmp;
    var tmp_0;
    if (group instanceof Anchor) {
      tmp_0 = new SlotTableGroup(this.y26_1, group.m1q_1, this.a27_1);
    } else {
      if (group instanceof GroupSourceInformation) {
        tmp_0 = new SourceInformationSlotTableGroup(this.y26_1, group);
      } else {
        composeRuntimeError('Unexpected group information structure');
      }
    }
    return tmp_0;
  };
  function SourceInformationSlotTableGroup(table, sourceInformation) {
    this.c27_1 = table;
    this.d27_1 = sourceInformation;
    this.e27_1 = this.d27_1.e25_1;
    this.f27_1 = emptyList();
    this.g27_1 = this;
  }
  protoOf(SourceInformationSlotTableGroup).o = function () {
    return new SourceInformationGroupIterator(this.c27_1, this.d27_1);
  };
  function search$accessor$10fp17g(_this__u8e3s4, location, effectiveSize) {
    return search(_this__u8e3s4, location, effectiveSize);
  }
  function collectAsState(_this__u8e3s4, context, $composer, $changed, $default) {
    var context_0 = context;
    var $composer_0 = $composer;
    $composer_0.a1s(-1439883919);
    sourceInformation($composer_0, 'C(collectAsState)48@1858L30:SnapshotFlow.kt#9igjgp');
    if (!(($default & 1) === 0))
      context_0 = EmptyCoroutineContext_getInstance();
    if (isTraceInProgress()) {
      traceEventStart(-1439883919, $changed, -1, 'androidx.compose.runtime.collectAsState (SnapshotFlow.kt:48)');
    }
    var tmp0 = collectAsState_0(_this__u8e3s4, _this__u8e3s4.q2(), context_0, $composer_0, 520, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.b1s();
    return tmp0;
  }
  function collectAsState_0(_this__u8e3s4, initial, context, $composer, $changed, $default) {
    var context_0 = {_v: context};
    var $composer_0 = $composer;
    $composer_0.a1s(-606625098);
    sourceInformation($composer_0, 'C(collectAsState)P(1)63@2400L186:SnapshotFlow.kt#9igjgp');
    if (!(($default & 2) === 0)) {
      context_0._v = EmptyCoroutineContext_getInstance();
    }
    if (isTraceInProgress()) {
      traceEventStart(-606625098, $changed, -1, 'androidx.compose.runtime.collectAsState (SnapshotFlow.kt:63)');
    }
    var tmp = context_0._v;
    var tmp0 = produceState(initial, _this__u8e3s4, tmp, collectAsState$slambda_0(context_0, _this__u8e3s4, null), $composer_0, 4672 | 8 & $changed >> 3 | 14 & $changed >> 3);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.b1s();
    return tmp0;
  }
  function collectAsState$slambda$slambda$slambda($this_produceState, resultContinuation) {
    this.p27_1 = $this_produceState;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(collectAsState$slambda$slambda$slambda).r27 = function (it, $completion) {
    var tmp = this.s27(it, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(collectAsState$slambda$slambda$slambda).yc = function (p1, $completion) {
    return this.r27((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(collectAsState$slambda$slambda$slambda).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        if (tmp === 0) {
          this.bc_1 = 1;
          this.p27_1.d1a(this.q27_1);
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.dc_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(collectAsState$slambda$slambda$slambda).s27 = function (it, completion) {
    var i = new collectAsState$slambda$slambda$slambda(this.p27_1, completion);
    i.q27_1 = it;
    return i;
  };
  function collectAsState$slambda$slambda$slambda_0($this_produceState, resultContinuation) {
    var i = new collectAsState$slambda$slambda$slambda($this_produceState, resultContinuation);
    var l = function (it, $completion) {
      return i.r27(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.t27_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).f18 = function (value, $completion) {
    return this.t27_1(value, $completion);
  };
  function collectAsState$slambda$slambda($this_produceState, resultContinuation) {
    this.c28_1 = $this_produceState;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(collectAsState$slambda$slambda).r27 = function (it, $completion) {
    var tmp = this.s27(it, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(collectAsState$slambda$slambda).yc = function (p1, $completion) {
    return this.r27((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(collectAsState$slambda$slambda).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        if (tmp === 0) {
          this.bc_1 = 1;
          this.c28_1.d1a(this.d28_1);
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.dc_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(collectAsState$slambda$slambda).s27 = function (it, completion) {
    var i = new collectAsState$slambda$slambda(this.c28_1, completion);
    i.d28_1 = it;
    return i;
  };
  function collectAsState$slambda$slambda_0($this_produceState, resultContinuation) {
    var i = new collectAsState$slambda$slambda($this_produceState, resultContinuation);
    var l = function (it, $completion) {
      return i.r27(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function collectAsState$slambda$slambda_1($this_collectAsState, $this_produceState, resultContinuation) {
    this.m28_1 = $this_collectAsState;
    this.n28_1 = $this_produceState;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(collectAsState$slambda$slambda_1).j20 = function ($this$withContext, $completion) {
    var tmp = this.k20($this$withContext, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(collectAsState$slambda$slambda_1).yc = function (p1, $completion) {
    return this.j20((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(collectAsState$slambda$slambda_1).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 2;
            this.ac_1 = 1;
            var tmp_0 = collectAsState$slambda$slambda$slambda_0(this.n28_1, null);
            suspendResult = this.m28_1.g18(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
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
  protoOf(collectAsState$slambda$slambda_1).k20 = function ($this$withContext, completion) {
    var i = new collectAsState$slambda$slambda_1(this.m28_1, this.n28_1, completion);
    i.o28_1 = $this$withContext;
    return i;
  };
  function collectAsState$slambda$slambda_2($this_collectAsState, $this_produceState, resultContinuation) {
    var i = new collectAsState$slambda$slambda_1($this_collectAsState, $this_produceState, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.j20($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function collectAsState$slambda($context, $this_collectAsState, resultContinuation) {
    this.x28_1 = $context;
    this.y28_1 = $this_collectAsState;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(collectAsState$slambda).a29 = function ($this$produceState, $completion) {
    var tmp = this.b29($this$produceState, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(collectAsState$slambda).yc = function (p1, $completion) {
    return this.a29((!(p1 == null) ? isInterface(p1, ProduceStateScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(collectAsState$slambda).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 4;
            if (equals(this.x28_1._v, EmptyCoroutineContext_getInstance())) {
              this.ac_1 = 2;
              var tmp_0 = collectAsState$slambda$slambda_0(this.z28_1, null);
              suspendResult = this.y28_1.g18(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_0), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.ac_1 = 1;
              var tmp_1 = this.x28_1._v;
              suspendResult = withContext(tmp_1, collectAsState$slambda$slambda_2(this.y28_1, this.z28_1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.ac_1 = 3;
            continue $sm;
          case 2:
            this.ac_1 = 3;
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
  protoOf(collectAsState$slambda).b29 = function ($this$produceState, completion) {
    var i = new collectAsState$slambda(this.x28_1, this.y28_1, completion);
    i.z28_1 = $this$produceState;
    return i;
  };
  function collectAsState$slambda_0($context, $this_collectAsState, resultContinuation) {
    var i = new collectAsState$slambda($context, $this_collectAsState, resultContinuation);
    var l = function ($this$produceState, $completion) {
      return i.a29($this$produceState, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SnapshotMutationPolicy() {
  }
  function structuralEqualityPolicy() {
    var tmp = StructuralEqualityPolicy_instance;
    return isInterface(tmp, SnapshotMutationPolicy) ? tmp : THROW_CCE();
  }
  function StructuralEqualityPolicy() {
  }
  protoOf(StructuralEqualityPolicy).d29 = function (a, b) {
    return equals(a, b);
  };
  protoOf(StructuralEqualityPolicy).u20 = function (a, b) {
    var tmp = (a == null ? true : !(a == null)) ? a : THROW_CCE();
    return this.d29(tmp, (b == null ? true : !(b == null)) ? b : THROW_CCE());
  };
  protoOf(StructuralEqualityPolicy).toString = function () {
    return 'StructuralEqualityPolicy';
  };
  var StructuralEqualityPolicy_instance;
  function StructuralEqualityPolicy_getInstance() {
    return StructuralEqualityPolicy_instance;
  }
  function referentialEqualityPolicy() {
    var tmp = ReferentialEqualityPolicy_instance;
    return isInterface(tmp, SnapshotMutationPolicy) ? tmp : THROW_CCE();
  }
  function ReferentialEqualityPolicy() {
  }
  protoOf(ReferentialEqualityPolicy).d29 = function (a, b) {
    return a === b;
  };
  protoOf(ReferentialEqualityPolicy).u20 = function (a, b) {
    var tmp = (a == null ? true : !(a == null)) ? a : THROW_CCE();
    return this.d29(tmp, (b == null ? true : !(b == null)) ? b : THROW_CCE());
  };
  protoOf(ReferentialEqualityPolicy).toString = function () {
    return 'ReferentialEqualityPolicy';
  };
  var ReferentialEqualityPolicy_instance;
  function ReferentialEqualityPolicy_getInstance() {
    return ReferentialEqualityPolicy_instance;
  }
  function neverEqualPolicy() {
    var tmp = NeverEqualPolicy_instance;
    return isInterface(tmp, SnapshotMutationPolicy) ? tmp : THROW_CCE();
  }
  function NeverEqualPolicy() {
  }
  protoOf(NeverEqualPolicy).d29 = function (a, b) {
    return false;
  };
  protoOf(NeverEqualPolicy).u20 = function (a, b) {
    var tmp = (a == null ? true : !(a == null)) ? a : THROW_CCE();
    return this.d29(tmp, (b == null ? true : !(b == null)) ? b : THROW_CCE());
  };
  protoOf(NeverEqualPolicy).toString = function () {
    return 'NeverEqualPolicy';
  };
  var NeverEqualPolicy_instance;
  function NeverEqualPolicy_getInstance() {
    return NeverEqualPolicy_instance;
  }
  function State_0() {
  }
  function MutableState() {
  }
  function mutableStateOf(value, policy) {
    policy = policy === VOID ? structuralEqualityPolicy() : policy;
    return createSnapshotMutableState(value, policy);
  }
  function StateStateRecord(myValue) {
    StateRecord.call(this);
    this.g29_1 = myValue;
  }
  protoOf(StateStateRecord).h29 = function (value) {
    var tmp = this;
    tmp.g29_1 = (value instanceof StateStateRecord ? value : THROW_CCE()).g29_1;
  };
  protoOf(StateStateRecord).i29 = function () {
    return new StateStateRecord(this.g29_1);
  };
  function SnapshotMutableStateImpl(value, policy) {
    StateObjectImpl.call(this);
    this.k29_1 = policy;
    this.l29_1 = new StateStateRecord(value);
  }
  protoOf(SnapshotMutableStateImpl).m1z = function () {
    return this.k29_1;
  };
  protoOf(SnapshotMutableStateImpl).d1a = function (value) {
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var this_0 = this.l29_1;
    var it = current(this_0);
    var tmp;
    if (!this.m1z().u20(it.g29_1, value)) {
      // Inline function 'androidx.compose.runtime.snapshots.overwritable' call
      var this_1 = this.l29_1;
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
      snapshot = Companion_instance_12.n1f();
      overwritableRecord(this_1, this, snapshot, it).g29_1 = value;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
      notifyWrite(snapshot, this);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(SnapshotMutableStateImpl).q2 = function () {
    return readable_0(this.l29_1, this).g29_1;
  };
  protoOf(SnapshotMutableStateImpl).m29 = function () {
    return this.l29_1;
  };
  protoOf(SnapshotMutableStateImpl).n29 = function (value) {
    var tmp = this;
    tmp.l29_1 = value instanceof StateStateRecord ? value : THROW_CCE();
  };
  protoOf(SnapshotMutableStateImpl).o29 = function (previous, current, applied) {
    var previousRecord = previous instanceof StateStateRecord ? previous : THROW_CCE();
    var currentRecord = current instanceof StateStateRecord ? current : THROW_CCE();
    var appliedRecord = applied instanceof StateStateRecord ? applied : THROW_CCE();
    var tmp;
    if (this.m1z().u20(currentRecord.g29_1, appliedRecord.g29_1)) {
      tmp = current;
    } else {
      var merged = this.m1z().c29(previousRecord.g29_1, currentRecord.g29_1, appliedRecord.g29_1);
      var tmp_0;
      if (!(merged == null)) {
        // Inline function 'kotlin.also' call
        var this_0 = appliedRecord.i29();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.mergeRecords.<anonymous>' call
        (this_0 instanceof StateStateRecord ? this_0 : THROW_CCE()).g29_1 = merged;
        tmp_0 = this_0;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(SnapshotMutableStateImpl).toString = function () {
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var this_0 = this.l29_1;
    // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.toString.<anonymous>' call
    return 'MutableState(value=' + current(this_0).g29_1 + ')@' + hashCode(this);
  };
  function rememberUpdatedState(newValue, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.a1s(-1058319986);
    sourceInformation($composer_0, 'C(rememberUpdatedState)*303@10208L41:SnapshotState.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-1058319986, $changed, -1, 'androidx.compose.runtime.rememberUpdatedState (SnapshotState.kt:303)');
    }
    // Inline function 'kotlin.apply' call
    $composer_0.a1s(-1519466170);
    sourceInformation($composer_0, 'CC(remember):SnapshotState.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.m1t();
    var tmp;
    if (false ? true : it === Companion_getInstance_0().s1m_1) {
      // Inline function 'androidx.compose.runtime.rememberUpdatedState.<anonymous>' call
      var value = mutableStateOf(newValue);
      $composer_0.s1t(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.b1s();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.rememberUpdatedState.<anonymous>' call
    tmp1_group.d1a(newValue);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.b1s();
    return tmp1_group;
  }
  function mutableStateMapOf() {
    return new SnapshotStateMap();
  }
  function SnapshotThreadLocal() {
    this.n1z_1 = new AtomicReference(get_emptyThreadMap());
    this.o1z_1 = new SynchronizedObject();
  }
  protoOf(SnapshotThreadLocal).hw = function () {
    var tmp = this.n1z_1.hw().ho(currentThreadId());
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(SnapshotThreadLocal).p1z = function (value) {
    var key = currentThreadId();
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.o1z_1;
    var current = this.n1z_1.hw();
    if (current.s29(key, value))
      return Unit_instance;
    this.n1z_1.a1x(current.t29(key, value));
  };
  function IntStack() {
    this.p1j_1 = new Int32Array(10);
    this.q1j_1 = 0;
  }
  protoOf(IntStack).m = function () {
    return this.q1j_1;
  };
  protoOf(IntStack).r1j = function (value) {
    if (this.q1j_1 >= this.p1j_1.length) {
      this.p1j_1 = copyOf(this.p1j_1, imul(this.p1j_1.length, 2));
    }
    var tmp = this.p1j_1;
    var tmp1 = this.q1j_1;
    this.q1j_1 = tmp1 + 1 | 0;
    tmp[tmp1] = value;
  };
  protoOf(IntStack).w1n = function () {
    var tmp = this.p1j_1;
    this.q1j_1 = this.q1j_1 - 1 | 0;
    return tmp[this.q1j_1];
  };
  protoOf(IntStack).x25 = function (default_0) {
    return this.q1j_1 > 0 ? this.p1s() : default_0;
  };
  protoOf(IntStack).p1s = function () {
    return this.p1j_1[this.q1j_1 - 1 | 0];
  };
  protoOf(IntStack).t1o = function (index) {
    return this.p1j_1[index];
  };
  protoOf(IntStack).u = function () {
    return this.q1j_1 === 0;
  };
  protoOf(IntStack).h1 = function () {
    this.q1j_1 = 0;
  };
  protoOf(IntStack).w25 = function (value) {
    var inductionVariable = 0;
    var last = this.q1j_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (this.p1j_1[i] === value)
          return i;
      }
       while (inductionVariable < last);
    return -1;
  };
  function Stack() {
    this.z1k_1 = ArrayList_init_$Create$();
  }
  protoOf(Stack).m = function () {
    return this.z1k_1.m();
  };
  protoOf(Stack).v1n = function (value) {
    return this.z1k_1.a1(value);
  };
  protoOf(Stack).w1n = function () {
    return this.z1k_1.m1(this.m() - 1 | 0);
  };
  protoOf(Stack).p1s = function () {
    return this.z1k_1.n(this.m() - 1 | 0);
  };
  protoOf(Stack).t1o = function (index) {
    return this.z1k_1.n(index);
  };
  protoOf(Stack).u = function () {
    return this.z1k_1.u();
  };
  protoOf(Stack).pn = function () {
    return !this.u();
  };
  protoOf(Stack).h1 = function () {
    return this.z1k_1.h1();
  };
  protoOf(Stack).g3 = function () {
    var tmp = 0;
    var tmp_0 = this.z1k_1.m();
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(tmp_0), null);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      tmp_1[tmp_2] = this.z1k_1.n(tmp_2);
      tmp = tmp + 1 | 0;
    }
    var tmp_3 = tmp_1;
    return isArray(tmp_3) ? tmp_3 : THROW_CCE();
  };
  function SynchronizedObject() {
  }
  function createSynchronizedObject() {
    return new SynchronizedObject();
  }
  function _get_current__qcrdxk($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.h1z_1;
    current$factory();
    return this_0.q2();
  }
  function LazyValueHolder(valueProducer) {
    this.h1z_1 = lazy(valueProducer);
  }
  protoOf(LazyValueHolder).q2 = function () {
    return _get_current__qcrdxk(this);
  };
  function StaticValueHolder(value) {
    this.u29_1 = value;
  }
  protoOf(StaticValueHolder).q2 = function () {
    return this.u29_1;
  };
  protoOf(StaticValueHolder).toString = function () {
    return 'StaticValueHolder(value=' + this.u29_1 + ')';
  };
  protoOf(StaticValueHolder).hashCode = function () {
    return this.u29_1 == null ? 0 : hashCode(this.u29_1);
  };
  protoOf(StaticValueHolder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StaticValueHolder))
      return false;
    var tmp0_other_with_cast = other instanceof StaticValueHolder ? other : THROW_CCE();
    if (!equals(this.u29_1, tmp0_other_with_cast.u29_1))
      return false;
    return true;
  };
  function current$factory() {
    return getPropertyCallableRef('current', 1, KProperty1, function (receiver) {
      return _get_current__qcrdxk(receiver);
    }, null);
  }
  function ChangeList() {
    this.m1s_1 = new Operations();
  }
  protoOf(ChangeList).u = function () {
    return this.m1s_1.u();
  };
  protoOf(ChangeList).pn = function () {
    return this.m1s_1.pn();
  };
  protoOf(ChangeList).h1 = function () {
    this.m1s_1.h1();
  };
  protoOf(ChangeList).q1w = function (applier, slots, rememberManager) {
    return this.m1s_1.d2a(applier, slots, rememberManager);
  };
  protoOf(ChangeList).e2a = function (value) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.m1s_1;
    var operation = Remember_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.f2a(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushRemember.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.Remember.Value' call
    Remember_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, value);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.b2a_1 === createExpectedArgMask(this_0, operation.g2a_1) ? this_0.c2a_1 === createExpectedArgMask(this_0, operation.h2a_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.g2a_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.b2a_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.x5(', ');
            }
            this_1.x5(operation.i2a(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.h2a_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.c2a_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.x5(', ');
            }
            this_2.x5(operation.j2a(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).k2a = function (value, groupSlotIndex) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.m1s_1;
    var operation = UpdateValue_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.f2a(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushUpdateValue.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.Value' call
    UpdateValue_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, value);
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.GroupSlotIndex' call
    UpdateValue_getInstance();
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$1, groupSlotIndex);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.b2a_1 === createExpectedArgMask(this_0, operation.g2a_1) ? this_0.c2a_1 === createExpectedArgMask(this_0, operation.h2a_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.g2a_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.b2a_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.x5(', ');
            }
            this_1.x5(operation.i2a(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.h2a_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.c2a_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.x5(', ');
            }
            this_2.x5(operation.j2a(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).l2a = function () {
    this.m1s_1.m2a(ResetSlots_getInstance());
  };
  protoOf(ChangeList).n2a = function (data) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.m1s_1;
    var operation = UpdateAuxData_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.f2a(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushUpdateAuxData.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateAuxData.Data' call
    UpdateAuxData_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, data);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.b2a_1 === createExpectedArgMask(this_0, operation.g2a_1) ? this_0.c2a_1 === createExpectedArgMask(this_0, operation.h2a_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.g2a_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.b2a_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.x5(', ');
            }
            this_1.x5(operation.i2a(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.h2a_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.c2a_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.x5(', ');
            }
            this_2.x5(operation.j2a(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).o2a = function () {
    this.m1s_1.m2a(EnsureRootGroupStarted_getInstance());
  };
  protoOf(ChangeList).p2a = function (anchor) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.m1s_1;
    var operation = EnsureGroupStarted_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.f2a(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushEnsureGroupStarted.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.EnsureGroupStarted.Anchor' call
    EnsureGroupStarted_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, anchor);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.b2a_1 === createExpectedArgMask(this_0, operation.g2a_1) ? this_0.c2a_1 === createExpectedArgMask(this_0, operation.h2a_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.g2a_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.b2a_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.x5(', ');
            }
            this_1.x5(operation.i2a(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.h2a_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.c2a_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.x5(', ');
            }
            this_2.x5(operation.j2a(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).q2a = function () {
    this.m1s_1.m2a(EndCurrentGroup_getInstance());
  };
  protoOf(ChangeList).r2a = function () {
    this.m1s_1.m2a(SkipToEndOfCurrentGroup_getInstance());
  };
  protoOf(ChangeList).s2a = function () {
    this.m1s_1.m2a(RemoveCurrentGroup_getInstance());
  };
  protoOf(ChangeList).t2a = function (anchor, from) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.m1s_1;
    var operation = InsertSlots_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.f2a(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushInsertSlots.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlots.Anchor' call
    InsertSlots_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, anchor);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlots.FromSlotTable' call
    InsertSlots_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, from);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.b2a_1 === createExpectedArgMask(this_0, operation.g2a_1) ? this_0.c2a_1 === createExpectedArgMask(this_0, operation.h2a_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.g2a_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.b2a_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.x5(', ');
            }
            this_1.x5(operation.i2a(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.h2a_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.c2a_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.x5(', ');
            }
            this_2.x5(operation.j2a(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).u2a = function (anchor, from, fixups) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.m1s_1;
    var operation = InsertSlotsWithFixups_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.f2a(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushInsertSlots.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Anchor' call
    InsertSlotsWithFixups_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, anchor);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.FromSlotTable' call
    InsertSlotsWithFixups_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, from);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Fixups' call
    InsertSlotsWithFixups_getInstance();
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(2);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$2, fixups);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.b2a_1 === createExpectedArgMask(this_0, operation.g2a_1) ? this_0.c2a_1 === createExpectedArgMask(this_0, operation.h2a_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.g2a_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.b2a_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.x5(', ');
            }
            this_1.x5(operation.i2a(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.h2a_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.c2a_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.x5(', ');
            }
            this_2.x5(operation.j2a(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).v2a = function (offset) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.m1s_1;
    var operation = MoveCurrentGroup_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.f2a(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushMoveCurrentGroup.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.MoveCurrentGroup.Offset' call
    MoveCurrentGroup_getInstance();
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$0, offset);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.b2a_1 === createExpectedArgMask(this_0, operation.g2a_1) ? this_0.c2a_1 === createExpectedArgMask(this_0, operation.h2a_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.g2a_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.b2a_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.x5(', ');
            }
            this_1.x5(operation.i2a(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.h2a_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.c2a_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.x5(', ');
            }
            this_2.x5(operation.j2a(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).w2a = function (action, composition) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.m1s_1;
    var operation = EndCompositionScope_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.f2a(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushEndCompositionScope.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Action' call
    EndCompositionScope_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, action);
    // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Composition' call
    EndCompositionScope_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, composition);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.b2a_1 === createExpectedArgMask(this_0, operation.g2a_1) ? this_0.c2a_1 === createExpectedArgMask(this_0, operation.h2a_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.g2a_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.b2a_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.x5(', ');
            }
            this_1.x5(operation.i2a(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.h2a_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.c2a_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.x5(', ');
            }
            this_2.x5(operation.j2a(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).x2a = function (node) {
    if (!(node == null) ? isInterface(node, ComposeNodeLifecycleCallback) : false) {
      this.m1s_1.m2a(UseCurrentNode_getInstance());
    }
  };
  protoOf(ChangeList).y2a = function (value, block) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.m1s_1;
    var operation = UpdateNode_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.f2a(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushUpdateNode.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Value' call
    UpdateNode_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, value);
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Block' call
    UpdateNode_getInstance();
    var tmp = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp, typeof block === 'function' ? block : THROW_CCE());
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.b2a_1 === createExpectedArgMask(this_0, operation.g2a_1) ? this_0.c2a_1 === createExpectedArgMask(this_0, operation.h2a_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.g2a_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.b2a_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.x5(', ');
            }
            this_1.x5(operation.i2a(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.h2a_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.c2a_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.x5(', ');
            }
            this_2.x5(operation.j2a(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).z2a = function (removeFrom, moveCount) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.m1s_1;
    var operation = RemoveNode_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.f2a(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushRemoveNode.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.RemoveNode.RemoveIndex' call
    RemoveNode_getInstance();
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$0, removeFrom);
    // Inline function 'androidx.compose.runtime.changelist.RemoveNode.Count' call
    RemoveNode_getInstance();
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(1);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$1, moveCount);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.b2a_1 === createExpectedArgMask(this_0, operation.g2a_1) ? this_0.c2a_1 === createExpectedArgMask(this_0, operation.h2a_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.g2a_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.b2a_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.x5(', ');
            }
            this_1.x5(operation.i2a(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.h2a_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.c2a_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.x5(', ');
            }
            this_2.x5(operation.j2a(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).a2b = function (to, from, count) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.m1s_1;
    var operation = MoveNode_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.f2a(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushMoveNode.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.To' call
    MoveNode_getInstance();
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(1);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$0, to);
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.From' call
    MoveNode_getInstance();
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$1, from);
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.Count' call
    MoveNode_getInstance();
    var tmp$ret$2 = _IntParameter___init__impl__oy5xkp(2);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$2, count);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.b2a_1 === createExpectedArgMask(this_0, operation.g2a_1) ? this_0.c2a_1 === createExpectedArgMask(this_0, operation.h2a_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.g2a_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.b2a_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.x5(', ');
            }
            this_1.x5(operation.i2a(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.h2a_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.c2a_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.x5(', ');
            }
            this_2.x5(operation.j2a(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).b2b = function (distance) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.m1s_1;
    var operation = AdvanceSlotsBy_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.f2a(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushAdvanceSlotsBy.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.AdvanceSlotsBy.Distance' call
    AdvanceSlotsBy_getInstance();
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$0, distance);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.b2a_1 === createExpectedArgMask(this_0, operation.g2a_1) ? this_0.c2a_1 === createExpectedArgMask(this_0, operation.h2a_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.g2a_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.b2a_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.x5(', ');
            }
            this_1.x5(operation.i2a(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.h2a_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.c2a_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.x5(', ');
            }
            this_2.x5(operation.j2a(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).c2b = function (count) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.m1s_1;
    var operation = Ups_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.f2a(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushUps.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.Ups.Count' call
    Ups_getInstance();
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$0, count);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.b2a_1 === createExpectedArgMask(this_0, operation.g2a_1) ? this_0.c2a_1 === createExpectedArgMask(this_0, operation.h2a_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.g2a_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.b2a_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.x5(', ');
            }
            this_1.x5(operation.i2a(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.h2a_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.c2a_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.x5(', ');
            }
            this_2.x5(operation.j2a(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).d2b = function (nodes) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(nodes.length === 0)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
      var this_0 = this.m1s_1;
      var operation = Downs_getInstance();
      // Inline function 'kotlin.contracts.contract' call
      this_0.f2a(operation);
      // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushDowns.<anonymous>' call
      var $this$push = _WriteScope___init__impl__4xwato(this_0);
      // Inline function 'androidx.compose.runtime.changelist.Downs.Nodes' call
      Downs_getInstance();
      var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(0);
      WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$2, nodes);
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this_0.b2a_1 === createExpectedArgMask(this_0, operation.g2a_1) ? this_0.c2a_1 === createExpectedArgMask(this_0, operation.h2a_1) : false)) {
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
        var missingIntCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_1 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times = operation.g2a_1;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        if (inductionVariable < times)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index & this_0.b2a_1) === 0)) {
              if (missingIntCount > 0) {
                this_1.x5(', ');
              }
              this_1.x5(operation.i2a(_IntParameter___init__impl__oy5xkp(index)));
              missingIntCount = missingIntCount + 1 | 0;
            }
          }
           while (inductionVariable < times);
        var missingInts = this_1.toString();
        var missingObjectCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_2 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times_0 = operation.h2a_1;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < times_0)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index_0 & this_0.c2a_1) === 0)) {
              if (missingIntCount > 0) {
                this_2.x5(', ');
              }
              this_2.x5(operation.j2a(_ObjectParameter___init__impl__iyg1ip(index_0)));
              missingObjectCount = missingObjectCount + 1 | 0;
            }
          }
           while (inductionVariable_0 < times_0);
        var missingObjects = this_2.toString();
        var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  };
  protoOf(ChangeList).e2b = function (effect) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.m1s_1;
    var operation = SideEffect_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.f2a(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushSideEffect.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.SideEffect.Effect' call
    SideEffect_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, effect);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.b2a_1 === createExpectedArgMask(this_0, operation.g2a_1) ? this_0.c2a_1 === createExpectedArgMask(this_0, operation.h2a_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.g2a_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.b2a_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.x5(', ');
            }
            this_1.x5(operation.i2a(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.h2a_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.c2a_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.x5(', ');
            }
            this_2.x5(operation.j2a(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).f2b = function (effectiveNodeIndexOut, anchor) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.m1s_1;
    var operation = DetermineMovableContentNodeIndex_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.f2a(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushDetermineMovableContentNodeIndex.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.EffectiveNodeIndexOut' call
    DetermineMovableContentNodeIndex_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, effectiveNodeIndexOut);
    // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.Anchor' call
    DetermineMovableContentNodeIndex_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, anchor);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.b2a_1 === createExpectedArgMask(this_0, operation.g2a_1) ? this_0.c2a_1 === createExpectedArgMask(this_0, operation.h2a_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.g2a_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.b2a_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.x5(', ');
            }
            this_1.x5(operation.i2a(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.h2a_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.c2a_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.x5(', ');
            }
            this_2.x5(operation.j2a(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).g2b = function (nodes, effectiveNodeIndex) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!nodes.u()) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
      var this_0 = this.m1s_1;
      var operation = CopyNodesToNewAnchorLocation_getInstance();
      // Inline function 'kotlin.contracts.contract' call
      this_0.f2a(operation);
      // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushCopyNodesToNewAnchorLocation.<anonymous>' call
      var $this$push = _WriteScope___init__impl__4xwato(this_0);
      // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.Nodes' call
      CopyNodesToNewAnchorLocation_getInstance();
      var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
      WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, nodes);
      // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.EffectiveNodeIndex' call
      CopyNodesToNewAnchorLocation_getInstance();
      var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(0);
      WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$2, effectiveNodeIndex);
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this_0.b2a_1 === createExpectedArgMask(this_0, operation.g2a_1) ? this_0.c2a_1 === createExpectedArgMask(this_0, operation.h2a_1) : false)) {
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
        var missingIntCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_1 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times = operation.g2a_1;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        if (inductionVariable < times)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index & this_0.b2a_1) === 0)) {
              if (missingIntCount > 0) {
                this_1.x5(', ');
              }
              this_1.x5(operation.i2a(_IntParameter___init__impl__oy5xkp(index)));
              missingIntCount = missingIntCount + 1 | 0;
            }
          }
           while (inductionVariable < times);
        var missingInts = this_1.toString();
        var missingObjectCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_2 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times_0 = operation.h2a_1;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < times_0)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index_0 & this_0.c2a_1) === 0)) {
              if (missingIntCount > 0) {
                this_2.x5(', ');
              }
              this_2.x5(operation.j2a(_ObjectParameter___init__impl__iyg1ip(index_0)));
              missingObjectCount = missingObjectCount + 1 | 0;
            }
          }
           while (inductionVariable_0 < times_0);
        var missingObjects = this_2.toString();
        var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  };
  protoOf(ChangeList).h2b = function (resolvedState, parentContext, from, to) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.m1s_1;
    var operation = CopySlotTableToAnchorLocation_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.f2a(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushCopySlotTableToAnchorLocation.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ResolvedState' call
    CopySlotTableToAnchorLocation_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, resolvedState);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ParentCompositionContext' call
    CopySlotTableToAnchorLocation_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, parentContext);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.To' call
    CopySlotTableToAnchorLocation_getInstance();
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(3);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$2, to);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.From' call
    CopySlotTableToAnchorLocation_getInstance();
    var tmp$ret$3 = _ObjectParameter___init__impl__iyg1ip(2);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$3, from);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.b2a_1 === createExpectedArgMask(this_0, operation.g2a_1) ? this_0.c2a_1 === createExpectedArgMask(this_0, operation.h2a_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.g2a_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.b2a_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.x5(', ');
            }
            this_1.x5(operation.i2a(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.h2a_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.c2a_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.x5(', ');
            }
            this_2.x5(operation.j2a(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).i2b = function (composition, parentContext, reference) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.m1s_1;
    var operation = ReleaseMovableGroupAtCurrent_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.f2a(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushReleaseMovableGroupAtCurrent.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Composition' call
    ReleaseMovableGroupAtCurrent_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, composition);
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.ParentCompositionContext' call
    ReleaseMovableGroupAtCurrent_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, parentContext);
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Reference' call
    ReleaseMovableGroupAtCurrent_getInstance();
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(2);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$2, reference);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.b2a_1 === createExpectedArgMask(this_0, operation.g2a_1) ? this_0.c2a_1 === createExpectedArgMask(this_0, operation.h2a_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.g2a_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.b2a_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.x5(', ');
            }
            this_1.x5(operation.i2a(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.h2a_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.c2a_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.x5(', ');
            }
            this_2.x5(operation.j2a(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).j2b = function () {
    this.m1s_1.m2a(EndMovableContentPlacement_getInstance());
  };
  protoOf(ChangeList).k2b = function (changeList, effectiveNodeIndex) {
    if (changeList.pn()) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
      var this_0 = this.m1s_1;
      var operation = ApplyChangeList_getInstance();
      // Inline function 'kotlin.contracts.contract' call
      this_0.f2a(operation);
      // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushExecuteOperationsIn.<anonymous>' call
      var $this$push = _WriteScope___init__impl__4xwato(this_0);
      // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.Changes' call
      ApplyChangeList_getInstance();
      var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
      WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, changeList);
      // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.EffectiveNodeIndex' call
      ApplyChangeList_getInstance();
      var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
      WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, effectiveNodeIndex);
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this_0.b2a_1 === createExpectedArgMask(this_0, operation.g2a_1) ? this_0.c2a_1 === createExpectedArgMask(this_0, operation.h2a_1) : false)) {
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
        var missingIntCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_1 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times = operation.g2a_1;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        if (inductionVariable < times)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index & this_0.b2a_1) === 0)) {
              if (missingIntCount > 0) {
                this_1.x5(', ');
              }
              this_1.x5(operation.i2a(_IntParameter___init__impl__oy5xkp(index)));
              missingIntCount = missingIntCount + 1 | 0;
            }
          }
           while (inductionVariable < times);
        var missingInts = this_1.toString();
        var missingObjectCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_2 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times_0 = operation.h2a_1;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < times_0)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index_0 & this_0.c2a_1) === 0)) {
              if (missingIntCount > 0) {
                this_2.x5(', ');
              }
              this_2.x5(operation.j2a(_ObjectParameter___init__impl__iyg1ip(index_0)));
              missingObjectCount = missingObjectCount + 1 | 0;
            }
          }
           while (inductionVariable_0 < times_0);
        var missingObjects = this_2.toString();
        var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  };
  function _get_reader__fd8dw8($this) {
    return $this.y1j_1.o1i_1;
  }
  function pushApplierOperationPreamble($this) {
    pushPendingUpsAndDowns($this);
  }
  function pushSlotEditingOperationPreamble($this) {
    realizeOperationLocation$default($this);
    $this.o1r();
  }
  function pushSlotTableOperationPreamble($this, useParentSlot) {
    realizeOperationLocation($this, useParentSlot);
  }
  function pushSlotTableOperationPreamble$default($this, useParentSlot, $super) {
    useParentSlot = useParentSlot === VOID ? false : useParentSlot;
    return pushSlotTableOperationPreamble($this, useParentSlot);
  }
  function ensureRootStarted($this) {
    if (!$this.a1k_1 ? $this.c1k_1 : false) {
      pushSlotTableOperationPreamble$default($this);
      $this.z1j_1.o2a();
      $this.a1k_1 = true;
    }
  }
  function ensureGroupStarted($this, anchor) {
    pushSlotTableOperationPreamble$default($this);
    $this.z1j_1.p2a(anchor);
    $this.a1k_1 = true;
  }
  function realizeOperationLocation($this, forParent) {
    var location = forParent ? _get_reader__fd8dw8($this).u1k_1 : _get_reader__fd8dw8($this).s1k_1;
    var distance = location - $this.d1k_1 | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(distance >= 0)) {
      // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.realizeOperationLocation.<anonymous>' call
      var message = 'Tried to seek backward';
      composeRuntimeError(toString(message));
    }
    if (distance > 0) {
      $this.z1j_1.b2b(distance);
      $this.d1k_1 = location;
    }
  }
  function realizeOperationLocation$default($this, forParent, $super) {
    forParent = forParent === VOID ? false : forParent;
    return realizeOperationLocation($this, forParent);
  }
  function realizeNodeMovementOperations($this) {
    if ($this.j1k_1 > 0) {
      if ($this.g1k_1 >= 0) {
        realizeRemoveNode($this, $this.g1k_1, $this.j1k_1);
        $this.g1k_1 = -1;
      } else {
        realizeMoveNode($this, $this.i1k_1, $this.h1k_1, $this.j1k_1);
        $this.h1k_1 = -1;
        $this.i1k_1 = -1;
      }
      $this.j1k_1 = 0;
    }
  }
  function realizeRemoveNode($this, removeFrom, moveCount) {
    pushApplierOperationPreamble($this);
    $this.z1j_1.z2a(removeFrom, moveCount);
  }
  function realizeMoveNode($this, to, from, count) {
    pushApplierOperationPreamble($this);
    $this.z1j_1.a2b(to, from, count);
  }
  function pushPendingUpsAndDowns($this) {
    if ($this.e1k_1 > 0) {
      $this.z1j_1.c2b($this.e1k_1);
      $this.e1k_1 = 0;
    }
    if ($this.f1k_1.pn()) {
      $this.z1j_1.d2b($this.f1k_1.g3());
      $this.f1k_1.h1();
    }
  }
  function Companion_5() {
    this.l2b_1 = -2;
  }
  var Companion_instance_6;
  function Companion_getInstance_6() {
    return Companion_instance_6;
  }
  function ComposerChangeListWriter(composer, changeList) {
    this.y1j_1 = composer;
    this.z1j_1 = changeList;
    this.a1k_1 = false;
    this.b1k_1 = new IntStack();
    this.c1k_1 = true;
    this.d1k_1 = 0;
    this.e1k_1 = 0;
    this.f1k_1 = new Stack();
    this.g1k_1 = -1;
    this.h1k_1 = -1;
    this.i1k_1 = -1;
    this.j1k_1 = 0;
  }
  protoOf(ComposerChangeListWriter).s1n = function (location) {
    this.d1k_1 = this.d1k_1 + (location - _get_reader__fd8dw8(this).s1k_1 | 0) | 0;
  };
  protoOf(ComposerChangeListWriter).v1p = function (location) {
    this.d1k_1 = location;
  };
  protoOf(ComposerChangeListWriter).o1r = function () {
    if (_get_reader__fd8dw8(this).m() > 0) {
      var reader = _get_reader__fd8dw8(this);
      var location = reader.u1k_1;
      if (!(this.b1k_1.x25(-2) === location)) {
        ensureRootStarted(this);
        if (location > 0) {
          var anchor = reader.j1n(location);
          this.b1k_1.r1j(location);
          ensureGroupStarted(this, anchor);
        }
      }
    }
  };
  protoOf(ComposerChangeListWriter).h1t = function (value) {
    this.z1j_1.e2a(value);
  };
  protoOf(ComposerChangeListWriter).e1t = function (value, groupSlotIndex) {
    pushSlotTableOperationPreamble(this, true);
    this.z1j_1.k2a(value, groupSlotIndex);
  };
  protoOf(ComposerChangeListWriter).h1p = function () {
    this.z1j_1.l2a();
  };
  protoOf(ComposerChangeListWriter).n1m = function (data) {
    pushSlotTableOperationPreamble$default(this);
    this.z1j_1.n2a(data);
  };
  protoOf(ComposerChangeListWriter).k1k = function () {
    if (this.a1k_1) {
      pushSlotTableOperationPreamble$default(this);
      pushSlotTableOperationPreamble$default(this);
      this.z1j_1.q2a();
      this.a1k_1 = false;
    }
  };
  protoOf(ComposerChangeListWriter).i1o = function () {
    var location = _get_reader__fd8dw8(this).u1k_1;
    var currentStartedGroup = this.b1k_1.x25(-1);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(currentStartedGroup <= location)) {
      // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.endCurrentGroup.<anonymous>' call
      var message = 'Missed recording an endGroup';
      composeRuntimeError(toString(message));
    }
    if (this.b1k_1.x25(-1) === location) {
      pushSlotTableOperationPreamble$default(this);
      this.b1k_1.w1n();
      this.z1j_1.q2a();
    }
  };
  protoOf(ComposerChangeListWriter).x1p = function () {
    this.z1j_1.r2a();
  };
  protoOf(ComposerChangeListWriter).w1q = function () {
    pushSlotEditingOperationPreamble(this);
    this.z1j_1.s2a();
    this.d1k_1 = this.d1k_1 + _get_reader__fd8dw8(this).q26() | 0;
  };
  protoOf(ComposerChangeListWriter).v1q = function (anchor, from) {
    pushPendingUpsAndDowns(this);
    pushSlotEditingOperationPreamble(this);
    this.z1j_1.t2a(anchor, from);
  };
  protoOf(ComposerChangeListWriter).u1q = function (anchor, from, fixups) {
    pushPendingUpsAndDowns(this);
    pushSlotEditingOperationPreamble(this);
    this.z1j_1.u2a(anchor, from, fixups);
  };
  protoOf(ComposerChangeListWriter).u1n = function (offset) {
    pushSlotEditingOperationPreamble(this);
    this.z1j_1.v2a(offset);
  };
  protoOf(ComposerChangeListWriter).f1u = function (action, composition) {
    this.z1j_1.w2a(action, composition);
  };
  protoOf(ComposerChangeListWriter).s1s = function (node) {
    pushApplierOperationPreamble(this);
    this.z1j_1.x2a(node);
  };
  protoOf(ComposerChangeListWriter).v1s = function (value, block) {
    pushApplierOperationPreamble(this);
    this.z1j_1.y2a(value, block);
  };
  protoOf(ComposerChangeListWriter).y1n = function (nodeIndex, count) {
    if (count > 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(nodeIndex >= 0)) {
        // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.removeNode.<anonymous>' call
        var message = 'Invalid remove index ' + nodeIndex;
        composeRuntimeError(toString(message));
      }
      if (this.g1k_1 === nodeIndex) {
        this.j1k_1 = this.j1k_1 + count | 0;
      } else {
        realizeNodeMovementOperations(this);
        this.g1k_1 = nodeIndex;
        this.j1k_1 = count;
      }
    }
  };
  protoOf(ComposerChangeListWriter).c1o = function (from, to, count) {
    if (count > 0) {
      if ((this.j1k_1 > 0 ? this.h1k_1 === (from - this.j1k_1 | 0) : false) ? this.i1k_1 === (to - this.j1k_1 | 0) : false) {
        this.j1k_1 = this.j1k_1 + count | 0;
      } else {
        realizeNodeMovementOperations(this);
        this.h1k_1 = from;
        this.i1k_1 = to;
        this.j1k_1 = count;
      }
    }
  };
  protoOf(ComposerChangeListWriter).x1q = function () {
    pushPendingUpsAndDowns(this);
    if (this.a1k_1) {
      this.x1p();
      this.k1k();
    }
  };
  protoOf(ComposerChangeListWriter).e1o = function () {
    realizeNodeMovementOperations(this);
  };
  protoOf(ComposerChangeListWriter).q1r = function (nodeIndex, group) {
    this.e1o();
    pushPendingUpsAndDowns(this);
    var nodeCount = _get_reader__fd8dw8(this).u1o(group) ? 1 : _get_reader__fd8dw8(this).v1o(group);
    if (nodeCount > 0) {
      this.y1n(nodeIndex, nodeCount);
    }
  };
  protoOf(ComposerChangeListWriter).h1o = function () {
    if (this.f1k_1.pn()) {
      this.f1k_1.w1n();
    } else {
      this.e1k_1 = this.e1k_1 + 1 | 0;
    }
  };
  protoOf(ComposerChangeListWriter).w1o = function (node) {
    this.f1k_1.v1n(node);
  };
  protoOf(ComposerChangeListWriter).j1t = function (effect) {
    this.z1j_1.e2b(effect);
  };
  protoOf(ComposerChangeListWriter).q1p = function (effectiveNodeIndexOut, anchor) {
    pushPendingUpsAndDowns(this);
    this.z1j_1.f2b(effectiveNodeIndexOut, anchor);
  };
  protoOf(ComposerChangeListWriter).t1p = function (nodes, effectiveNodeIndex) {
    this.z1j_1.g2b(nodes, effectiveNodeIndex);
  };
  protoOf(ComposerChangeListWriter).u1p = function (resolvedState, parentContext, from, to) {
    this.z1j_1.h2b(resolvedState, parentContext, from, to);
  };
  protoOf(ComposerChangeListWriter).p1r = function (composition, parentContext, reference) {
    this.z1j_1.i2b(composition, parentContext, reference);
  };
  protoOf(ComposerChangeListWriter).y1p = function () {
    this.z1j_1.j2b();
    this.d1k_1 = 0;
  };
  protoOf(ComposerChangeListWriter).w1p = function (other, effectiveNodeIndex) {
    this.z1j_1.k2b(other, effectiveNodeIndex);
  };
  protoOf(ComposerChangeListWriter).z1q = function () {
    pushPendingUpsAndDowns(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!this.b1k_1.u()) {
      // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.finalizeComposition.<anonymous>' call
      var message = 'Missed recording an endGroup()';
      composeRuntimeError(toString(message));
    }
  };
  protoOf(ComposerChangeListWriter).a1r = function () {
    this.a1k_1 = false;
    this.b1k_1.h1();
    this.d1k_1 = 0;
  };
  function FixupList() {
    this.w1l_1 = new Operations();
    this.x1l_1 = new Operations();
  }
  protoOf(FixupList).u = function () {
    return this.w1l_1.u();
  };
  protoOf(FixupList).h1 = function () {
    this.x1l_1.h1();
    this.w1l_1.h1();
  };
  protoOf(FixupList).m2b = function (applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!this.x1l_1.u()) {
      // Inline function 'androidx.compose.runtime.changelist.FixupList.executeAndFlushAllPendingFixups.<anonymous>' call
      var message = 'FixupList has pending fixup operations that were not realized. Were there mismatched insertNode() and endNodeInsert() calls?';
      composeRuntimeError(toString(message));
    }
    this.w1l_1.d2a(applier, slots, rememberManager);
  };
  protoOf(FixupList).q1s = function (factory, insertIndex, groupAnchor) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.w1l_1;
    var operation = InsertNodeFixup_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.f2a(operation);
    // Inline function 'androidx.compose.runtime.changelist.FixupList.createAndInsertNode.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.Factory' call
    InsertNodeFixup_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, factory);
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.InsertIndex' call
    InsertNodeFixup_getInstance();
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$1, insertIndex);
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.GroupAnchor' call
    InsertNodeFixup_getInstance();
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$2, groupAnchor);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.b2a_1 === createExpectedArgMask(this_0, operation.g2a_1) ? this_0.c2a_1 === createExpectedArgMask(this_0, operation.h2a_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.g2a_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.b2a_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.x5(', ');
            }
            this_1.x5(operation.i2a(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.h2a_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.c2a_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.x5(', ');
            }
            this_2.x5(operation.j2a(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_3 = this.x1l_1;
    var operation_0 = PostInsertNodeFixup_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_3.f2a(operation_0);
    // Inline function 'androidx.compose.runtime.changelist.FixupList.createAndInsertNode.<anonymous>' call
    var $this$push_0 = _WriteScope___init__impl__4xwato(this_3);
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.InsertIndex' call
    PostInsertNodeFixup_getInstance();
    var tmp$ret$8 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push_0, tmp$ret$8, insertIndex);
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.GroupAnchor' call
    PostInsertNodeFixup_getInstance();
    var tmp$ret$9 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push_0, tmp$ret$9, groupAnchor);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_3.b2a_1 === createExpectedArgMask(this_3, operation_0.g2a_1) ? this_3.c2a_1 === createExpectedArgMask(this_3, operation_0.h2a_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount_0 = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_4 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_1 = operation_0.g2a_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_1 = 0;
      if (inductionVariable_1 < times_1)
        do {
          var index_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_1 & this_3.b2a_1) === 0)) {
            if (missingIntCount_0 > 0) {
              this_4.x5(', ');
            }
            this_4.x5(operation_0.i2a(_IntParameter___init__impl__oy5xkp(index_1)));
            missingIntCount_0 = missingIntCount_0 + 1 | 0;
          }
        }
         while (inductionVariable_1 < times_1);
      var missingInts_0 = this_4.toString();
      var missingObjectCount_0 = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_5 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_2 = operation_0.h2a_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_2 = 0;
      if (inductionVariable_2 < times_2)
        do {
          var index_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_2 & this_3.c2a_1) === 0)) {
            if (missingIntCount_0 > 0) {
              this_5.x5(', ');
            }
            this_5.x5(operation_0.j2a(_ObjectParameter___init__impl__iyg1ip(index_2)));
            missingObjectCount_0 = missingObjectCount_0 + 1 | 0;
          }
        }
         while (inductionVariable_2 < times_2);
      var missingObjects_0 = this_5.toString();
      var message_0 = 'Error while pushing ' + operation_0 + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount_0 + ' int arguments (' + missingInts_0 + ') ') + ('and ' + missingObjectCount_0 + ' object arguments (' + missingObjects_0 + ').');
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
  };
  protoOf(FixupList).k1o = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!this.x1l_1.pn()) {
      // Inline function 'androidx.compose.runtime.changelist.FixupList.endNodeInsert.<anonymous>' call
      var message = 'Cannot end node insertion, there are no pending operations that can be realized.';
      composeRuntimeError(toString(message));
    }
    this.x1l_1.n2b(this.w1l_1);
  };
  protoOf(FixupList).w1s = function (value, block) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.w1l_1;
    var operation = UpdateNode_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.f2a(operation);
    // Inline function 'androidx.compose.runtime.changelist.FixupList.updateNode.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Value' call
    UpdateNode_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, value);
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Block' call
    UpdateNode_getInstance();
    var tmp = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp, typeof block === 'function' ? block : THROW_CCE());
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.b2a_1 === createExpectedArgMask(this_0, operation.g2a_1) ? this_0.c2a_1 === createExpectedArgMask(this_0, operation.h2a_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.g2a_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.b2a_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.x5(', ');
            }
            this_1.x5(operation.i2a(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.h2a_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.c2a_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.x5(', ');
            }
            this_2.x5(operation.j2a(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  function _IntParameter___init__impl__oy5xkp(offset) {
    return offset;
  }
  function _IntParameter___get_offset__impl__xsdcin($this) {
    return $this;
  }
  function _ObjectParameter___init__impl__iyg1ip(offset) {
    return offset;
  }
  function _ObjectParameter___get_offset__impl__x7fx93($this) {
    return $this;
  }
  function Ups() {
    Ups_instance = this;
    Operation.call(this, 1);
  }
  protoOf(Ups).i2a = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.Ups.Count' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'count';
    } else {
      tmp = protoOf(Operation).i2a.call(this, parameter);
    }
    return tmp;
  };
  protoOf(Ups).q2b = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'kotlin.repeat' call
    // Inline function 'androidx.compose.runtime.changelist.Ups.Count' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    var times = _this__u8e3s4.r2b(tmp$ret$0);
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.changelist.Ups.execute.<anonymous>' call
        applier.r1f();
      }
       while (inductionVariable < times);
  };
  var Ups_instance;
  function Ups_getInstance() {
    if (Ups_instance == null)
      new Ups();
    return Ups_instance;
  }
  function Downs() {
    Downs_instance = this;
    Operation.call(this, VOID, 1);
  }
  protoOf(Downs).j2a = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.Downs.Nodes' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'nodes';
    } else {
      tmp = protoOf(Operation).j2a.call(this, parameter);
    }
    return tmp;
  };
  protoOf(Downs).q2b = function (_this__u8e3s4, applier, slots, rememberManager) {
    var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
    // Inline function 'androidx.compose.runtime.changelist.Downs.Nodes' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var nodes = _this__u8e3s4.v2b(tmp$ret$0);
    var inductionVariable = 0;
    var last = nodes.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        nodeApplier.q1f(nodes[index]);
      }
       while (inductionVariable <= last);
  };
  var Downs_instance;
  function Downs_getInstance() {
    if (Downs_instance == null)
      new Downs();
    return Downs_instance;
  }
  function AdvanceSlotsBy() {
    AdvanceSlotsBy_instance = this;
    Operation.call(this, 1);
  }
  protoOf(AdvanceSlotsBy).i2a = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.AdvanceSlotsBy.Distance' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'distance';
    } else {
      tmp = protoOf(Operation).i2a.call(this, parameter);
    }
    return tmp;
  };
  protoOf(AdvanceSlotsBy).q2b = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.AdvanceSlotsBy.Distance' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    slots.j25(_this__u8e3s4.r2b(tmp$ret$0));
  };
  var AdvanceSlotsBy_instance;
  function AdvanceSlotsBy_getInstance() {
    if (AdvanceSlotsBy_instance == null)
      new AdvanceSlotsBy();
    return AdvanceSlotsBy_instance;
  }
  function SideEffect_0() {
    SideEffect_instance = this;
    Operation.call(this, VOID, 1);
  }
  protoOf(SideEffect_0).j2a = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.SideEffect.Effect' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'effect';
    } else {
      tmp = protoOf(Operation).j2a.call(this, parameter);
    }
    return tmp;
  };
  protoOf(SideEffect_0).q2b = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.SideEffect.Effect' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    rememberManager.j1t(_this__u8e3s4.v2b(tmp$ret$0));
  };
  var SideEffect_instance;
  function SideEffect_getInstance() {
    if (SideEffect_instance == null)
      new SideEffect_0();
    return SideEffect_instance;
  }
  function Remember() {
    Remember_instance = this;
    Operation.call(this, VOID, 1);
  }
  protoOf(Remember).j2a = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.Remember.Value' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'value';
    } else {
      tmp = protoOf(Operation).j2a.call(this, parameter);
    }
    return tmp;
  };
  protoOf(Remember).q2b = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.Remember.Value' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    rememberManager.i1x(_this__u8e3s4.v2b(tmp$ret$0));
  };
  var Remember_instance;
  function Remember_getInstance() {
    if (Remember_instance == null)
      new Remember();
    return Remember_instance;
  }
  function UpdateValue() {
    UpdateValue_instance = this;
    Operation.call(this, 1, 1);
  }
  protoOf(UpdateValue).i2a = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.GroupSlotIndex' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'groupSlotIndex';
    } else {
      tmp = protoOf(Operation).i2a.call(this, parameter);
    }
    return tmp;
  };
  protoOf(UpdateValue).j2a = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.Value' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'value';
    } else {
      tmp = protoOf(Operation).j2a.call(this, parameter);
    }
    return tmp;
  };
  protoOf(UpdateValue).q2b = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.Value' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var value = _this__u8e3s4.v2b(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.GroupSlotIndex' call
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(0);
    var groupSlotIndex = _this__u8e3s4.r2b(tmp$ret$1);
    if (value instanceof RememberObserverHolder) {
      rememberManager.i1x(value.y1s_1);
    }
    var previous = slots.g26(groupSlotIndex, value);
    if (previous instanceof RememberObserverHolder) {
      rememberManager.x1u(previous.y1s_1);
    } else {
      if (previous instanceof RecomposeScopeImpl) {
        previous.mv();
      }
    }
  };
  var UpdateValue_instance;
  function UpdateValue_getInstance() {
    if (UpdateValue_instance == null)
      new UpdateValue();
    return UpdateValue_instance;
  }
  function UpdateAuxData() {
    UpdateAuxData_instance = this;
    Operation.call(this, VOID, 1);
  }
  protoOf(UpdateAuxData).j2a = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateAuxData.Data' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'data';
    } else {
      tmp = protoOf(Operation).j2a.call(this, parameter);
    }
    return tmp;
  };
  protoOf(UpdateAuxData).q2b = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.UpdateAuxData.Data' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    slots.l25(_this__u8e3s4.v2b(tmp$ret$0));
  };
  var UpdateAuxData_instance;
  function UpdateAuxData_getInstance() {
    if (UpdateAuxData_instance == null)
      new UpdateAuxData();
    return UpdateAuxData_instance;
  }
  function EnsureRootGroupStarted() {
    EnsureRootGroupStarted_instance = this;
    Operation.call(this);
  }
  protoOf(EnsureRootGroupStarted).q2b = function (_this__u8e3s4, applier, slots, rememberManager) {
    slots.h26(0);
  };
  var EnsureRootGroupStarted_instance;
  function EnsureRootGroupStarted_getInstance() {
    if (EnsureRootGroupStarted_instance == null)
      new EnsureRootGroupStarted();
    return EnsureRootGroupStarted_instance;
  }
  function EnsureGroupStarted() {
    EnsureGroupStarted_instance = this;
    Operation.call(this, VOID, 1);
  }
  protoOf(EnsureGroupStarted).j2a = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.EnsureGroupStarted.Anchor' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'anchor';
    } else {
      tmp = protoOf(Operation).j2a.call(this, parameter);
    }
    return tmp;
  };
  protoOf(EnsureGroupStarted).q2b = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.EnsureGroupStarted.Anchor' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    slots.i26(_this__u8e3s4.v2b(tmp$ret$0));
  };
  var EnsureGroupStarted_instance;
  function EnsureGroupStarted_getInstance() {
    if (EnsureGroupStarted_instance == null)
      new EnsureGroupStarted();
    return EnsureGroupStarted_instance;
  }
  function RemoveCurrentGroup() {
    RemoveCurrentGroup_instance = this;
    Operation.call(this);
  }
  protoOf(RemoveCurrentGroup).q2b = function (_this__u8e3s4, applier, slots, rememberManager) {
    removeCurrentGroup(slots, rememberManager);
  };
  var RemoveCurrentGroup_instance;
  function RemoveCurrentGroup_getInstance() {
    if (RemoveCurrentGroup_instance == null)
      new RemoveCurrentGroup();
    return RemoveCurrentGroup_instance;
  }
  function MoveCurrentGroup() {
    MoveCurrentGroup_instance = this;
    Operation.call(this, 1);
  }
  protoOf(MoveCurrentGroup).i2a = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.MoveCurrentGroup.Offset' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'offset';
    } else {
      tmp = protoOf(Operation).i2a.call(this, parameter);
    }
    return tmp;
  };
  protoOf(MoveCurrentGroup).q2b = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.MoveCurrentGroup.Offset' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    slots.k26(_this__u8e3s4.r2b(tmp$ret$0));
  };
  var MoveCurrentGroup_instance;
  function MoveCurrentGroup_getInstance() {
    if (MoveCurrentGroup_instance == null)
      new MoveCurrentGroup();
    return MoveCurrentGroup_instance;
  }
  function EndCurrentGroup() {
    EndCurrentGroup_instance = this;
    Operation.call(this);
  }
  protoOf(EndCurrentGroup).q2b = function (_this__u8e3s4, applier, slots, rememberManager) {
    slots.m1o();
  };
  var EndCurrentGroup_instance;
  function EndCurrentGroup_getInstance() {
    if (EndCurrentGroup_instance == null)
      new EndCurrentGroup();
    return EndCurrentGroup_instance;
  }
  function SkipToEndOfCurrentGroup() {
    SkipToEndOfCurrentGroup_instance = this;
    Operation.call(this);
  }
  protoOf(SkipToEndOfCurrentGroup).q2b = function (_this__u8e3s4, applier, slots, rememberManager) {
    slots.m1m();
  };
  var SkipToEndOfCurrentGroup_instance;
  function SkipToEndOfCurrentGroup_getInstance() {
    if (SkipToEndOfCurrentGroup_instance == null)
      new SkipToEndOfCurrentGroup();
    return SkipToEndOfCurrentGroup_instance;
  }
  function EndCompositionScope() {
    EndCompositionScope_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(EndCompositionScope).j2a = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Action' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'anchor';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Composition' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'composition';
      } else {
        tmp = protoOf(Operation).j2a.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(EndCompositionScope).q2b = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Action' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var action = _this__u8e3s4.v2b(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Composition' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var composition = _this__u8e3s4.v2b(tmp$ret$1);
    action(composition);
  };
  var EndCompositionScope_instance;
  function EndCompositionScope_getInstance() {
    if (EndCompositionScope_instance == null)
      new EndCompositionScope();
    return EndCompositionScope_instance;
  }
  function UseCurrentNode() {
    UseCurrentNode_instance = this;
    Operation.call(this);
  }
  protoOf(UseCurrentNode).q2b = function (_this__u8e3s4, applier, slots, rememberManager) {
    var tmp = applier.n1f();
    ((!(tmp == null) ? isInterface(tmp, ComposeNodeLifecycleCallback) : false) ? tmp : THROW_CCE()).r1g();
  };
  var UseCurrentNode_instance;
  function UseCurrentNode_getInstance() {
    if (UseCurrentNode_instance == null)
      new UseCurrentNode();
    return UseCurrentNode_instance;
  }
  function UpdateNode() {
    UpdateNode_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(UpdateNode).j2a = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Value' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'value';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Block' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'block';
      } else {
        tmp = protoOf(Operation).j2a.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(UpdateNode).q2b = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Value' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var value = _this__u8e3s4.v2b(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Block' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var block = _this__u8e3s4.v2b(tmp$ret$1);
    block(applier.n1f(), value);
  };
  var UpdateNode_instance;
  function UpdateNode_getInstance() {
    if (UpdateNode_instance == null)
      new UpdateNode();
    return UpdateNode_instance;
  }
  function RemoveNode() {
    RemoveNode_instance = this;
    Operation.call(this, 2);
  }
  protoOf(RemoveNode).i2a = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.RemoveNode.RemoveIndex' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'removeIndex';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.RemoveNode.Count' call
      if (parameter === _IntParameter___init__impl__oy5xkp(1)) {
        tmp = 'count';
      } else {
        tmp = protoOf(Operation).i2a.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(RemoveNode).q2b = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.RemoveNode.RemoveIndex' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    var tmp = _this__u8e3s4.r2b(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.RemoveNode.Count' call
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(1);
    applier.u1f(tmp, _this__u8e3s4.r2b(tmp$ret$1));
  };
  var RemoveNode_instance;
  function RemoveNode_getInstance() {
    if (RemoveNode_instance == null)
      new RemoveNode();
    return RemoveNode_instance;
  }
  function MoveNode() {
    MoveNode_instance = this;
    Operation.call(this, 3);
  }
  protoOf(MoveNode).i2a = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.From' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'from';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.MoveNode.To' call
      if (parameter === _IntParameter___init__impl__oy5xkp(1)) {
        tmp = 'to';
      } else {
        // Inline function 'androidx.compose.runtime.changelist.MoveNode.Count' call
        if (parameter === _IntParameter___init__impl__oy5xkp(2)) {
          tmp = 'count';
        } else {
          tmp = protoOf(Operation).i2a.call(this, parameter);
        }
      }
    }
    return tmp;
  };
  protoOf(MoveNode).q2b = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.From' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    var tmp = _this__u8e3s4.r2b(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.To' call
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(1);
    var tmp_0 = _this__u8e3s4.r2b(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.Count' call
    var tmp$ret$2 = _IntParameter___init__impl__oy5xkp(2);
    applier.v1f(tmp, tmp_0, _this__u8e3s4.r2b(tmp$ret$2));
  };
  var MoveNode_instance;
  function MoveNode_getInstance() {
    if (MoveNode_instance == null)
      new MoveNode();
    return MoveNode_instance;
  }
  function InsertSlots() {
    InsertSlots_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(InsertSlots).j2a = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.InsertSlots.Anchor' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'anchor';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.InsertSlots.FromSlotTable' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'from';
      } else {
        tmp = protoOf(Operation).j2a.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(InsertSlots).q2b = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.InsertSlots.FromSlotTable' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(1);
    var insertTable = _this__u8e3s4.v2b(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlots.Anchor' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(0);
    var anchor = _this__u8e3s4.v2b(tmp$ret$1);
    slots.i1n();
    slots.m26(insertTable, anchor.z1t(insertTable), false);
    slots.n1o();
  };
  var InsertSlots_instance;
  function InsertSlots_getInstance() {
    if (InsertSlots_instance == null)
      new InsertSlots();
    return InsertSlots_instance;
  }
  function InsertSlotsWithFixups() {
    InsertSlotsWithFixups_instance = this;
    Operation.call(this, VOID, 3);
  }
  protoOf(InsertSlotsWithFixups).j2a = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Anchor' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'anchor';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.FromSlotTable' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'from';
      } else {
        // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Fixups' call
        if (parameter === _ObjectParameter___init__impl__iyg1ip(2)) {
          tmp = 'fixups';
        } else {
          tmp = protoOf(Operation).j2a.call(this, parameter);
        }
      }
    }
    return tmp;
  };
  protoOf(InsertSlotsWithFixups).q2b = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.FromSlotTable' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(1);
    var insertTable = _this__u8e3s4.v2b(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Anchor' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(0);
    var anchor = _this__u8e3s4.v2b(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Fixups' call
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(2);
    var fixups = _this__u8e3s4.v2b(tmp$ret$2);
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = insertTable.l1m();
    var tmp;
    try {
      fixups.m2b(applier, writer, rememberManager);
      tmp = Unit_instance;
    }finally {
      writer.y1k();
    }
    slots.i1n();
    slots.m26(insertTable, anchor.z1t(insertTable), false);
    slots.n1o();
  };
  var InsertSlotsWithFixups_instance;
  function InsertSlotsWithFixups_getInstance() {
    if (InsertSlotsWithFixups_instance == null)
      new InsertSlotsWithFixups();
    return InsertSlotsWithFixups_instance;
  }
  function InsertNodeFixup() {
    InsertNodeFixup_instance = this;
    Operation.call(this, 1, 2);
  }
  protoOf(InsertNodeFixup).i2a = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.InsertIndex' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'insertIndex';
    } else {
      tmp = protoOf(Operation).i2a.call(this, parameter);
    }
    return tmp;
  };
  protoOf(InsertNodeFixup).j2a = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.Factory' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'factory';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.GroupAnchor' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'groupAnchor';
      } else {
        tmp = protoOf(Operation).j2a.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(InsertNodeFixup).q2b = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.Factory' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var node = _this__u8e3s4.v2b(tmp$ret$0)();
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.GroupAnchor' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var groupAnchor = _this__u8e3s4.v2b(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.InsertIndex' call
    var tmp$ret$2 = _IntParameter___init__impl__oy5xkp(0);
    var insertIndex = _this__u8e3s4.r2b(tmp$ret$2);
    var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
    slots.f26(groupAnchor, node);
    nodeApplier.s1f(insertIndex, node);
    nodeApplier.q1f(node);
  };
  var InsertNodeFixup_instance;
  function InsertNodeFixup_getInstance() {
    if (InsertNodeFixup_instance == null)
      new InsertNodeFixup();
    return InsertNodeFixup_instance;
  }
  function PostInsertNodeFixup() {
    PostInsertNodeFixup_instance = this;
    Operation.call(this, 1, 1);
  }
  protoOf(PostInsertNodeFixup).i2a = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.InsertIndex' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'insertIndex';
    } else {
      tmp = protoOf(Operation).i2a.call(this, parameter);
    }
    return tmp;
  };
  protoOf(PostInsertNodeFixup).j2a = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.GroupAnchor' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'groupAnchor';
    } else {
      tmp = protoOf(Operation).j2a.call(this, parameter);
    }
    return tmp;
  };
  protoOf(PostInsertNodeFixup).q2b = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.GroupAnchor' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var groupAnchor = _this__u8e3s4.v2b(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.InsertIndex' call
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(0);
    var insertIndex = _this__u8e3s4.r2b(tmp$ret$1);
    applier.r1f();
    var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
    var nodeToInsert = slots.y25(groupAnchor);
    nodeApplier.t1f(insertIndex, nodeToInsert);
  };
  var PostInsertNodeFixup_instance;
  function PostInsertNodeFixup_getInstance() {
    if (PostInsertNodeFixup_instance == null)
      new PostInsertNodeFixup();
    return PostInsertNodeFixup_instance;
  }
  function ResetSlots() {
    ResetSlots_instance = this;
    Operation.call(this);
  }
  protoOf(ResetSlots).q2b = function (_this__u8e3s4, applier, slots, rememberManager) {
    slots.a26();
  };
  var ResetSlots_instance;
  function ResetSlots_getInstance() {
    if (ResetSlots_instance == null)
      new ResetSlots();
    return ResetSlots_instance;
  }
  function DetermineMovableContentNodeIndex() {
    DetermineMovableContentNodeIndex_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(DetermineMovableContentNodeIndex).j2a = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.EffectiveNodeIndexOut' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'effectiveNodeIndexOut';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.Anchor' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'anchor';
      } else {
        tmp = protoOf(Operation).j2a.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(DetermineMovableContentNodeIndex).q2b = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.EffectiveNodeIndexOut' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var effectiveNodeIndexOut = _this__u8e3s4.v2b(tmp$ret$0);
    var tmp = effectiveNodeIndexOut;
    // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.Anchor' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var tmp_0 = _this__u8e3s4.v2b(tmp$ret$1);
    tmp.o2d_1 = positionToInsert(slots, tmp_0, isInterface(applier, Applier) ? applier : THROW_CCE());
  };
  var DetermineMovableContentNodeIndex_instance;
  function DetermineMovableContentNodeIndex_getInstance() {
    if (DetermineMovableContentNodeIndex_instance == null)
      new DetermineMovableContentNodeIndex();
    return DetermineMovableContentNodeIndex_instance;
  }
  function CopyNodesToNewAnchorLocation() {
    CopyNodesToNewAnchorLocation_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(CopyNodesToNewAnchorLocation).j2a = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.EffectiveNodeIndex' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'effectiveNodeIndex';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.Nodes' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'nodes';
      } else {
        tmp = protoOf(Operation).j2a.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(CopyNodesToNewAnchorLocation).q2b = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.EffectiveNodeIndex' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var effectiveNodeIndex = _this__u8e3s4.v2b(tmp$ret$0).o2d_1;
    // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.Nodes' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var nodesToInsert = _this__u8e3s4.v2b(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.snapshots.fastForEachIndexed' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = nodesToInsert.m() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = nodesToInsert.n(index);
        // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.execute.<anonymous>' call
        if (!isInterface(applier, Applier))
          THROW_CCE();
        applier.t1f(effectiveNodeIndex + index | 0, item);
        applier.s1f(effectiveNodeIndex + index | 0, item);
      }
       while (inductionVariable <= last);
  };
  var CopyNodesToNewAnchorLocation_instance;
  function CopyNodesToNewAnchorLocation_getInstance() {
    if (CopyNodesToNewAnchorLocation_instance == null)
      new CopyNodesToNewAnchorLocation();
    return CopyNodesToNewAnchorLocation_instance;
  }
  function CopySlotTableToAnchorLocation() {
    CopySlotTableToAnchorLocation_instance = this;
    Operation.call(this, VOID, 4);
  }
  protoOf(CopySlotTableToAnchorLocation).j2a = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ResolvedState' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'resolvedState';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ParentCompositionContext' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'resolvedCompositionContext';
      } else {
        // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.From' call
        if (parameter === _ObjectParameter___init__impl__iyg1ip(2)) {
          tmp = 'from';
        } else {
          // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.To' call
          if (parameter === _ObjectParameter___init__impl__iyg1ip(3)) {
            tmp = 'to';
          } else {
            tmp = protoOf(Operation).j2a.call(this, parameter);
          }
        }
      }
    }
    return tmp;
  };
  protoOf(CopySlotTableToAnchorLocation).q2b = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.From' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(2);
    var from = _this__u8e3s4.v2b(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.To' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(3);
    var to = _this__u8e3s4.v2b(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ParentCompositionContext' call
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(1);
    var parentCompositionContext = _this__u8e3s4.v2b(tmp$ret$2);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ResolvedState' call
    var tmp$ret$3 = _ObjectParameter___init__impl__iyg1ip(0);
    var tmp0_elvis_lhs = _this__u8e3s4.v2b(tmp$ret$3);
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? parentCompositionContext.r1p(from) : tmp0_elvis_lhs;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      composeRuntimeError('Could not resolve state for movable content');
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var resolvedState = tmp;
    var anchors = slots.n26(1, resolvedState.s1p_1, 2);
    var tmp_0 = Companion_instance_3;
    var tmp_1 = to.k1p_1;
    tmp_0.l20(slots, anchors, isInterface(tmp_1, RecomposeScopeOwner) ? tmp_1 : THROW_CCE());
  };
  var CopySlotTableToAnchorLocation_instance;
  function CopySlotTableToAnchorLocation_getInstance() {
    if (CopySlotTableToAnchorLocation_instance == null)
      new CopySlotTableToAnchorLocation();
    return CopySlotTableToAnchorLocation_instance;
  }
  function EndMovableContentPlacement() {
    EndMovableContentPlacement_instance = this;
    Operation.call(this);
  }
  protoOf(EndMovableContentPlacement).q2b = function (_this__u8e3s4, applier, slots, rememberManager) {
    positionToParentOf(slots, isInterface(applier, Applier) ? applier : THROW_CCE(), 0);
    slots.m1o();
  };
  var EndMovableContentPlacement_instance;
  function EndMovableContentPlacement_getInstance() {
    if (EndMovableContentPlacement_instance == null)
      new EndMovableContentPlacement();
    return EndMovableContentPlacement_instance;
  }
  function ReleaseMovableGroupAtCurrent() {
    ReleaseMovableGroupAtCurrent_instance = this;
    Operation.call(this, VOID, 3);
  }
  protoOf(ReleaseMovableGroupAtCurrent).j2a = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Composition' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'composition';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.ParentCompositionContext' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'parentCompositionContext';
      } else {
        // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Reference' call
        if (parameter === _ObjectParameter___init__impl__iyg1ip(2)) {
          tmp = 'reference';
        } else {
          tmp = protoOf(Operation).j2a.call(this, parameter);
        }
      }
    }
    return tmp;
  };
  protoOf(ReleaseMovableGroupAtCurrent).q2b = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Composition' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var tmp = _this__u8e3s4.v2b(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.ParentCompositionContext' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var tmp_0 = _this__u8e3s4.v2b(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Reference' call
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(2);
    releaseMovableGroupAtCurrent(tmp, tmp_0, _this__u8e3s4.v2b(tmp$ret$2), slots);
  };
  var ReleaseMovableGroupAtCurrent_instance;
  function ReleaseMovableGroupAtCurrent_getInstance() {
    if (ReleaseMovableGroupAtCurrent_instance == null)
      new ReleaseMovableGroupAtCurrent();
    return ReleaseMovableGroupAtCurrent_instance;
  }
  function ApplyChangeList() {
    ApplyChangeList_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(ApplyChangeList).j2a = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.Changes' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'changes';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.EffectiveNodeIndex' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'effectiveNodeIndex';
      } else {
        tmp = protoOf(Operation).j2a.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(ApplyChangeList).q2b = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.EffectiveNodeIndex' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(1);
    var tmp0_safe_receiver = _this__u8e3s4.v2b(tmp$ret$0);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o2d_1;
    var effectiveNodeIndex = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.Changes' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(0);
    var tmp = _this__u8e3s4.v2b(tmp$ret$1);
    var tmp_0;
    if (effectiveNodeIndex > 0) {
      tmp_0 = new OffsetApplier(applier, effectiveNodeIndex);
    } else {
      tmp_0 = applier;
    }
    tmp.q1w(tmp_0, slots, rememberManager);
  };
  var ApplyChangeList_instance;
  function ApplyChangeList_getInstance() {
    if (ApplyChangeList_instance == null)
      new ApplyChangeList();
    return ApplyChangeList_instance;
  }
  function Operation(ints, objects) {
    ints = ints === VOID ? 0 : ints;
    objects = objects === VOID ? 0 : objects;
    this.g2a_1 = ints;
    this.h2a_1 = objects;
  }
  protoOf(Operation).s2b = function () {
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = getKClassFromExpression(this).b7();
    return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
  };
  protoOf(Operation).i2a = function (parameter) {
    return 'IntParameter(' + _IntParameter___get_offset__impl__xsdcin(parameter) + ')';
  };
  protoOf(Operation).j2a = function (parameter) {
    return 'ObjectParameter(' + _ObjectParameter___get_offset__impl__x7fx93(parameter) + ')';
  };
  protoOf(Operation).toString = function () {
    return this.s2b();
  };
  function positionToInsert(slots, anchor, applier) {
    var destination = slots.p1p(anchor);
    runtimeCheck(slots.r1l_1 < destination);
    positionToParentOf(slots, applier, destination);
    var nodeIndex = currentNodeIndex(slots);
    while (slots.r1l_1 < destination) {
      if (slots.u25(destination)) {
        if (slots.a1u()) {
          applier.q1f(slots.t1q(slots.r1l_1));
          nodeIndex = 0;
        }
        slots.p1m();
      } else
        nodeIndex = nodeIndex + slots.b1m() | 0;
    }
    runtimeCheck(slots.r1l_1 === destination);
    return nodeIndex;
  }
  function positionToParentOf(slots, applier, index) {
    while (!slots.t25(index)) {
      slots.m1m();
      if (slots.u1o(slots.t1l_1)) {
        applier.r1f();
      }
      slots.m1o();
    }
  }
  function releaseMovableGroupAtCurrent(composition, parentContext, reference, slots) {
    var slotTable = new SlotTable();
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = slotTable.l1m();
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.changelist.releaseMovableGroupAtCurrent.<anonymous>' call
      writer.i1n();
      writer.t1m(get_movableContentKey(), reference.i1p_1);
      writer.e1p();
      writer.f1t(reference.j1p_1);
      var anchors = slots.l26(reference.m1p_1, 1, writer);
      writer.b1m();
      writer.m1o();
      writer.n1o();
      tmp = anchors;
    }finally {
      writer.y1k();
    }
    var anchors_0 = tmp;
    var state = new MovableContentState(slotTable);
    if (Companion_instance_3.o20(slotTable, anchors_0)) {
      var movableContentRecomposeScopeOwner = new releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1(composition, reference);
      // Inline function 'androidx.compose.runtime.SlotTable.write' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
      var writer_0 = slotTable.l1m();
      var tmp_0;
      try {
        Companion_instance_3.l20(writer_0, anchors_0, movableContentRecomposeScopeOwner);
        tmp_0 = Unit_instance;
      }finally {
        writer_0.y1k();
      }
    }
    parentContext.x1y(reference, state);
  }
  function currentNodeIndex(slots) {
    var original = slots.r1l_1;
    var current = slots.t1l_1;
    while (current >= 0 ? !slots.u1o(current) : false) {
      current = slots.h1m(current);
    }
    var index = 0;
    current = current + 1 | 0;
    while (current < original) {
      if (slots.v25(original, current)) {
        if (slots.u1o(current))
          index = 0;
        current = current + 1 | 0;
      } else {
        index = index + (slots.u1o(current) ? 1 : slots.v1o(current)) | 0;
        current = current + slots.a1o(current) | 0;
      }
    }
    return index;
  }
  function releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1($composition, $reference) {
    this.z2d_1 = $composition;
    this.a2e_1 = $reference;
  }
  protoOf(releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1).o1y = function (scope, instance) {
    var tmp = this.z2d_1;
    var tmp0_safe_receiver = isInterface(tmp, RecomposeScopeOwner) ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o1y(scope, instance);
    var result = tmp1_elvis_lhs == null ? InvalidationResult_IGNORED_getInstance() : tmp1_elvis_lhs;
    if (result.equals(InvalidationResult_IGNORED_getInstance())) {
      var tmp2_this = this.a2e_1;
      var tmp_0 = tmp2_this;
      var tmp_1 = tmp2_this.n1p_1;
      var tmp_2;
      if (instance == null) {
        tmp_2 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.changelist.<no name provided>.invalidate.<anonymous>' call
        // Inline function 'kotlin.also' call
        var this_0 = new IdentityArraySet();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.changelist.<no name provided>.invalidate.<anonymous>.<anonymous>' call
        this_0.i1v(this_0);
        tmp_2 = this_0;
      }
      tmp_0.n1p_1 = plus_1(tmp_1, to(scope, tmp_2));
      return InvalidationResult_SCHEDULED_getInstance();
    }
    return result;
  };
  protoOf(releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1).s1y = function (scope) {
  };
  protoOf(releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1).z1x = function (value) {
  };
  function _WriteScope___init__impl__4xwato(stack) {
    return stack;
  }
  function _get_stack__b8zp2v($this) {
    return $this;
  }
  function _WriteScope___get_operation__impl__krvgwa($this) {
    return peekOperation(_get_stack__b8zp2v($this));
  }
  function WriteScope__setInt_impl_yt2o8b($this, parameter, value) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var $this$with = _get_stack__b8zp2v($this);
    var mask = 1 << _IntParameter___get_offset__impl__xsdcin(parameter);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(($this$with.b2a_1 & mask) === 0)) {
      // Inline function 'androidx.compose.runtime.changelist.WriteScope.setInt.<anonymous>.<anonymous>' call
      var message = 'Already pushed argument ' + _WriteScope___get_operation__impl__krvgwa($this).i2a(parameter);
      throw IllegalStateException_init_$Create$(toString(message));
    }
    $this$with.b2a_1 = $this$with.b2a_1 | mask;
    $this$with.x29_1[topIntIndexOf($this$with, parameter)] = value;
    return Unit_instance;
  }
  function WriteScope__setObject_impl_rr41y9($this, parameter, value) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var $this$with = _get_stack__b8zp2v($this);
    var mask = 1 << _ObjectParameter___get_offset__impl__x7fx93(parameter);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(($this$with.c2a_1 & mask) === 0)) {
      // Inline function 'androidx.compose.runtime.changelist.WriteScope.setObject.<anonymous>.<anonymous>' call
      var message = 'Already pushed argument ' + _WriteScope___get_operation__impl__krvgwa($this).j2a(parameter);
      throw IllegalStateException_init_$Create$(toString(message));
    }
    $this$with.c2a_1 = $this$with.c2a_1 | mask;
    $this$with.z29_1[topObjectIndexOf($this$with, parameter)] = value;
    return Unit_instance;
  }
  function determineNewSize($this, currentSize, requiredSize) {
    var resizeAmount = coerceAtMost(currentSize, 1024);
    return coerceAtLeast(currentSize + resizeAmount | 0, requiredSize);
  }
  function ensureIntArgsSizeAtLeast($this, requiredSize) {
    var currentSize = $this.x29_1.length;
    if (requiredSize > currentSize) {
      $this.x29_1 = copyOf($this.x29_1, determineNewSize($this, currentSize, requiredSize));
    }
  }
  function ensureObjectArgsSizeAtLeast($this, requiredSize) {
    var currentSize = $this.z29_1.length;
    if (requiredSize > currentSize) {
      $this.z29_1 = copyOf_0($this.z29_1, determineNewSize($this, currentSize, requiredSize));
    }
  }
  function createExpectedArgMask($this, paramCount) {
    var tmp;
    if (paramCount === 0) {
      tmp = 0;
    } else {
      tmp = -1 >>> (32 - paramCount | 0) | 0;
    }
    return tmp;
  }
  function peekOperation($this) {
    return ensureNotNull($this.v29_1[$this.w29_1 - 1 | 0]);
  }
  function topIntIndexOf($this, parameter) {
    return ($this.y29_1 - peekOperation($this).g2a_1 | 0) + _IntParameter___get_offset__impl__xsdcin(parameter) | 0;
  }
  function topObjectIndexOf($this, parameter) {
    return ($this.a2a_1 - peekOperation($this).h2a_1 | 0) + _ObjectParameter___get_offset__impl__x7fx93(parameter) | 0;
  }
  function OpIterator($outer) {
    this.e2e_1 = $outer;
    this.b2e_1 = 0;
    this.c2e_1 = 0;
    this.d2e_1 = 0;
  }
  protoOf(OpIterator).f1 = function () {
    if (this.b2e_1 >= this.e2e_1.w29_1)
      return false;
    var op = this.f2e();
    this.c2e_1 = this.c2e_1 + op.g2a_1 | 0;
    this.d2e_1 = this.d2e_1 + op.h2a_1 | 0;
    this.b2e_1 = this.b2e_1 + 1 | 0;
    return this.b2e_1 < this.e2e_1.w29_1;
  };
  protoOf(OpIterator).f2e = function () {
    return ensureNotNull(this.e2e_1.v29_1[this.b2e_1]);
  };
  protoOf(OpIterator).r2b = function (parameter) {
    return this.e2e_1.x29_1[this.c2e_1 + _IntParameter___get_offset__impl__xsdcin(parameter) | 0];
  };
  protoOf(OpIterator).v2b = function (parameter) {
    var tmp = this.e2e_1.z29_1[this.d2e_1 + _ObjectParameter___get_offset__impl__x7fx93(parameter) | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  function Companion_6() {
    this.g2e_1 = 1024;
    this.h2e_1 = 16;
  }
  var Companion_instance_7;
  function Companion_getInstance_7() {
    return Companion_instance_7;
  }
  function Operations() {
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.v29_1 = fillArrayVal(Array(16), null);
    this.w29_1 = 0;
    this.x29_1 = new Int32Array(16);
    this.y29_1 = 0;
    var tmp_0 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.z29_1 = fillArrayVal(Array(16), null);
    this.a2a_1 = 0;
    this.b2a_1 = 0;
    this.c2a_1 = 0;
  }
  protoOf(Operations).m = function () {
    return this.w29_1;
  };
  protoOf(Operations).u = function () {
    return this.m() === 0;
  };
  protoOf(Operations).pn = function () {
    return !(this.m() === 0);
  };
  protoOf(Operations).h1 = function () {
    this.w29_1 = 0;
    this.y29_1 = 0;
    fill_0(this.z29_1, null, 0, this.a2a_1);
    this.a2a_1 = 0;
  };
  protoOf(Operations).f2a = function (operation) {
    this.b2a_1 = 0;
    this.c2a_1 = 0;
    if (this.w29_1 === this.v29_1.length) {
      var resizeAmount = coerceAtMost(this.w29_1, 1024);
      this.v29_1 = copyOf_0(this.v29_1, this.w29_1 + resizeAmount | 0);
    }
    ensureIntArgsSizeAtLeast(this, this.y29_1 + operation.g2a_1 | 0);
    ensureObjectArgsSizeAtLeast(this, this.a2a_1 + operation.h2a_1 | 0);
    var tmp = this.v29_1;
    var tmp1 = this.w29_1;
    this.w29_1 = tmp1 + 1 | 0;
    tmp[tmp1] = operation;
    this.y29_1 = this.y29_1 + operation.g2a_1 | 0;
    this.a2a_1 = this.a2a_1 + operation.h2a_1 | 0;
  };
  protoOf(Operations).m2a = function (operation) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(operation.g2a_1 === 0 ? operation.h2a_1 === 0 : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var message = 'Cannot push ' + operation + ' without arguments because it expects ' + ('' + operation.g2a_1 + ' ints and ' + operation.h2a_1 + ' objects.');
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.f2a(operation);
  };
  protoOf(Operations).n2b = function (other) {
    if (this.u()) {
      throw NoSuchElementException_init_$Create$('Cannot pop(), because the stack is empty.');
    }
    var tmp = this.v29_1;
    this.w29_1 = this.w29_1 - 1 | 0;
    var op = ensureNotNull(tmp[this.w29_1]);
    this.v29_1[this.w29_1] = null;
    other.f2a(op);
    var thisObjIdx = this.a2a_1;
    var otherObjIdx = other.a2a_1;
    // Inline function 'kotlin.repeat' call
    var times = op.h2a_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.changelist.Operations.popInto.<anonymous>' call
        otherObjIdx = otherObjIdx - 1 | 0;
        thisObjIdx = thisObjIdx - 1 | 0;
        other.z29_1[otherObjIdx] = this.z29_1[thisObjIdx];
        this.z29_1[thisObjIdx] = null;
      }
       while (inductionVariable < times);
    var thisIntIdx = this.y29_1;
    var otherIntIdx = other.y29_1;
    // Inline function 'kotlin.repeat' call
    var times_0 = op.g2a_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < times_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.runtime.changelist.Operations.popInto.<anonymous>' call
        otherIntIdx = otherIntIdx - 1 | 0;
        thisIntIdx = thisIntIdx - 1 | 0;
        other.x29_1[otherIntIdx] = this.x29_1[thisIntIdx];
        this.x29_1[thisIntIdx] = 0;
      }
       while (inductionVariable_0 < times_0);
    this.a2a_1 = this.a2a_1 - op.h2a_1 | 0;
    this.y29_1 = this.y29_1 - op.g2a_1 | 0;
  };
  protoOf(Operations).d2a = function (applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.drain' call
    // Inline function 'androidx.compose.runtime.changelist.Operations.forEach' call
    if (this.pn()) {
      var iterator = new OpIterator(this);
      do {
        // Inline function 'androidx.compose.runtime.changelist.Operations.executeAndFlushAllPendingOperations.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        iterator.f2e().q2b(iterator, applier, slots, rememberManager);
      }
       while (iterator.f1());
    }
    this.h1();
  };
  protoOf(Operations).toString = function () {
    return anyToString(this);
  };
  function IdentityArrayMap$asMap$1$entries$1$iterator$1$1(this$0, $index) {
    var tmp = this;
    var tmp_0 = this$0.j1q_1[$index];
    tmp.i2e_1 = !(tmp_0 == null) ? tmp_0 : THROW_CCE();
    var tmp_1 = this;
    var tmp_2 = this$0.k1q_1[$index];
    tmp_1.j2e_1 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
  }
  protoOf(IdentityArrayMap$asMap$1$entries$1$iterator$1$1).p2 = function () {
    return this.i2e_1;
  };
  protoOf(IdentityArrayMap$asMap$1$entries$1$iterator$1$1).q2 = function () {
    return this.j2e_1;
  };
  function IdentityArrayMap$asMap$o$_get_entries_$o$iterator$slambda_r160he(this$0, resultContinuation) {
    this.s2e_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(IdentityArrayMap$asMap$o$_get_entries_$o$iterator$slambda_r160he).w2e = function ($this$sequence, $completion) {
    var tmp = this.x2e($this$sequence, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(IdentityArrayMap$asMap$o$_get_entries_$o$iterator$slambda_r160he).yc = function (p1, $completion) {
    return this.w2e(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(IdentityArrayMap$asMap$o$_get_entries_$o$iterator$slambda_r160he).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 4;
            this.u2e_1 = until(0, this.s2e_1.l1q_1).o();
            this.ac_1 = 1;
            continue $sm;
          case 1:
            if (!this.u2e_1.d1()) {
              this.ac_1 = 3;
              continue $sm;
            }

            this.v2e_1 = this.u2e_1.f1();
            this.ac_1 = 2;
            suspendResult = this.t2e_1.df(new IdentityArrayMap$asMap$1$entries$1$iterator$1$1(this.s2e_1, this.v2e_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
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
  protoOf(IdentityArrayMap$asMap$o$_get_entries_$o$iterator$slambda_r160he).x2e = function ($this$sequence, completion) {
    var i = new IdentityArrayMap$asMap$o$_get_entries_$o$iterator$slambda_r160he(this.s2e_1, completion);
    i.t2e_1 = $this$sequence;
    return i;
  };
  function IdentityArrayMap$asMap$o$_get_entries_$o$iterator$slambda_r160he_0(this$0, resultContinuation) {
    var i = new IdentityArrayMap$asMap$o$_get_entries_$o$iterator$slambda_r160he(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.w2e($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function IdentityArrayMap$asMap$o$_get_keys_$o$iterator$slambda_qj88bw(this$0, resultContinuation) {
    this.g2f_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(IdentityArrayMap$asMap$o$_get_keys_$o$iterator$slambda_qj88bw).k2f = function ($this$sequence, $completion) {
    var tmp = this.l2f($this$sequence, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(IdentityArrayMap$asMap$o$_get_keys_$o$iterator$slambda_qj88bw).yc = function (p1, $completion) {
    return this.k2f(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(IdentityArrayMap$asMap$o$_get_keys_$o$iterator$slambda_qj88bw).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 4;
            this.i2f_1 = until(0, this.g2f_1.l1q_1).o();
            this.ac_1 = 1;
            continue $sm;
          case 1:
            if (!this.i2f_1.d1()) {
              this.ac_1 = 3;
              continue $sm;
            }

            this.j2f_1 = this.i2f_1.f1();
            this.ac_1 = 2;
            var tmp_0 = this.g2f_1.j1q_1[this.j2f_1];
            suspendResult = this.h2f_1.df(!(tmp_0 == null) ? tmp_0 : THROW_CCE(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
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
  protoOf(IdentityArrayMap$asMap$o$_get_keys_$o$iterator$slambda_qj88bw).l2f = function ($this$sequence, completion) {
    var i = new IdentityArrayMap$asMap$o$_get_keys_$o$iterator$slambda_qj88bw(this.g2f_1, completion);
    i.h2f_1 = $this$sequence;
    return i;
  };
  function IdentityArrayMap$asMap$o$_get_keys_$o$iterator$slambda_qj88bw_0(this$0, resultContinuation) {
    var i = new IdentityArrayMap$asMap$o$_get_keys_$o$iterator$slambda_qj88bw(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.k2f($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function IdentityArrayMap$asMap$o$_get_values_$o$iterator$slambda_qilghu(this$0, resultContinuation) {
    this.u2f_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(IdentityArrayMap$asMap$o$_get_values_$o$iterator$slambda_qilghu).y2f = function ($this$sequence, $completion) {
    var tmp = this.z2f($this$sequence, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(IdentityArrayMap$asMap$o$_get_values_$o$iterator$slambda_qilghu).yc = function (p1, $completion) {
    return this.y2f(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(IdentityArrayMap$asMap$o$_get_values_$o$iterator$slambda_qilghu).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 4;
            this.w2f_1 = until(0, this.u2f_1.l1q_1).o();
            this.ac_1 = 1;
            continue $sm;
          case 1:
            if (!this.w2f_1.d1()) {
              this.ac_1 = 3;
              continue $sm;
            }

            this.x2f_1 = this.w2f_1.f1();
            this.ac_1 = 2;
            var tmp_0 = this.u2f_1.k1q_1[this.x2f_1];
            suspendResult = this.v2f_1.df((tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
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
  protoOf(IdentityArrayMap$asMap$o$_get_values_$o$iterator$slambda_qilghu).z2f = function ($this$sequence, completion) {
    var i = new IdentityArrayMap$asMap$o$_get_values_$o$iterator$slambda_qilghu(this.u2f_1, completion);
    i.v2f_1 = $this$sequence;
    return i;
  };
  function IdentityArrayMap$asMap$o$_get_values_$o$iterator$slambda_qilghu_0(this$0, resultContinuation) {
    var i = new IdentityArrayMap$asMap$o$_get_values_$o$iterator$slambda_qilghu(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.y2f($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function IdentityArrayMap$asMap$1$entries$1(this$0) {
    this.a2g_1 = this$0;
  }
  protoOf(IdentityArrayMap$asMap$1$entries$1).m = function () {
    return this.a2g_1.l1q_1;
  };
  protoOf(IdentityArrayMap$asMap$1$entries$1).u = function () {
    return this.a2g_1.u();
  };
  protoOf(IdentityArrayMap$asMap$1$entries$1).o = function () {
    return sequence(IdentityArrayMap$asMap$o$_get_entries_$o$iterator$slambda_r160he_0(this.a2g_1, null)).o();
  };
  protoOf(IdentityArrayMap$asMap$1$entries$1).b2g = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.u();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.o();
      while (tmp0_iterator.d1()) {
        var element = tmp0_iterator.f1();
        // Inline function 'androidx.compose.runtime.collection.<no name provided>.containsAll.<anonymous>' call
        if (!this.c2g(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(IdentityArrayMap$asMap$1$entries$1).t = function (elements) {
    return this.b2g(elements);
  };
  protoOf(IdentityArrayMap$asMap$1$entries$1).c2g = function (element) {
    return this.a2g_1.v1y(element.p2()) === element.q2();
  };
  protoOf(IdentityArrayMap$asMap$1$entries$1).s = function (element) {
    if (!(!(element == null) ? isInterface(element, Entry) : false))
      return false;
    return this.c2g((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  function IdentityArrayMap$asMap$1$keys$1(this$0) {
    this.d2g_1 = this$0;
  }
  protoOf(IdentityArrayMap$asMap$1$keys$1).m = function () {
    return this.d2g_1.l1q_1;
  };
  protoOf(IdentityArrayMap$asMap$1$keys$1).u = function () {
    return this.d2g_1.u();
  };
  protoOf(IdentityArrayMap$asMap$1$keys$1).o = function () {
    return sequence(IdentityArrayMap$asMap$o$_get_keys_$o$iterator$slambda_qj88bw_0(this.d2g_1, null)).o();
  };
  protoOf(IdentityArrayMap$asMap$1$keys$1).e2g = function (elements) {
    var tmp0_iterator = elements.o();
    while (tmp0_iterator.d1()) {
      var key = tmp0_iterator.f1();
      if (!this.w1y(key))
        return false;
    }
    return true;
  };
  protoOf(IdentityArrayMap$asMap$1$keys$1).t = function (elements) {
    return this.e2g(elements);
  };
  protoOf(IdentityArrayMap$asMap$1$keys$1).w1y = function (element) {
    return this.d2g_1.w1y(element);
  };
  protoOf(IdentityArrayMap$asMap$1$keys$1).s = function (element) {
    if (!!(element == null))
      return false;
    return this.w1y(!(element == null) ? element : THROW_CCE());
  };
  function IdentityArrayMap$asMap$1$values$1(this$0) {
    this.f2g_1 = this$0;
  }
  protoOf(IdentityArrayMap$asMap$1$values$1).m = function () {
    return this.f2g_1.l1q_1;
  };
  protoOf(IdentityArrayMap$asMap$1$values$1).u = function () {
    return this.f2g_1.u();
  };
  protoOf(IdentityArrayMap$asMap$1$values$1).o = function () {
    return sequence(IdentityArrayMap$asMap$o$_get_values_$o$iterator$slambda_qilghu_0(this.f2g_1, null)).o();
  };
  protoOf(IdentityArrayMap$asMap$1$values$1).g2g = function (elements) {
    var tmp0_iterator = elements.o();
    while (tmp0_iterator.d1()) {
      var value = tmp0_iterator.f1();
      if (!this.h2g(value))
        return false;
    }
    return true;
  };
  protoOf(IdentityArrayMap$asMap$1$values$1).t = function (elements) {
    return this.g2g(elements);
  };
  protoOf(IdentityArrayMap$asMap$1$values$1).h2g = function (element) {
    var inductionVariable = 0;
    var last = this.f2g_1.l1q_1;
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals(this.f2g_1.k1q_1[index], element))
          return true;
      }
       while (inductionVariable < last);
    return false;
  };
  protoOf(IdentityArrayMap$asMap$1$values$1).s = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.h2g((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function find_0($this, key) {
    var keyIdentity = identityHashCode(key);
    var low = 0;
    var high = $this.l1q_1 - 1 | 0;
    var keys = $this.j1q_1;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midKey = keys[mid];
      var midKeyHash = identityHashCode(midKey);
      if (midKeyHash < keyIdentity)
        low = mid + 1 | 0;
      else if (midKeyHash > keyIdentity)
        high = mid - 1 | 0;
      else if (key === midKey)
        return mid;
      else
        return findExactIndex($this, mid, key, keyIdentity);
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex($this, midIndex, key, keyHash) {
    var keys = $this.j1q_1;
    var size = $this.l1q_1;
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var k = keys[i];
        if (k === key) {
          return i;
        }
        if (!(identityHashCode(k) === keyHash)) {
          break $l$loop;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    if (inductionVariable_0 < size)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var k_0 = keys[i_0];
        if (k_0 === key) {
          return i_0;
        }
        if (!(identityHashCode(k_0) === keyHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
      }
       while (inductionVariable_0 < size);
    return -(size + 1 | 0) | 0;
  }
  function IdentityArrayMap$asMap$1(this$0) {
    this.i2g_1 = this$0;
  }
  protoOf(IdentityArrayMap$asMap$1).m2 = function () {
    return new IdentityArrayMap$asMap$1$entries$1(this.i2g_1);
  };
  protoOf(IdentityArrayMap$asMap$1).k2 = function () {
    return new IdentityArrayMap$asMap$1$keys$1(this.i2g_1);
  };
  protoOf(IdentityArrayMap$asMap$1).m = function () {
    return this.i2g_1.l1q_1;
  };
  protoOf(IdentityArrayMap$asMap$1).l2 = function () {
    return new IdentityArrayMap$asMap$1$values$1(this.i2g_1);
  };
  protoOf(IdentityArrayMap$asMap$1).u = function () {
    return this.i2g_1.u();
  };
  protoOf(IdentityArrayMap$asMap$1).v1y = function (key) {
    return this.i2g_1.v1y(key);
  };
  protoOf(IdentityArrayMap$asMap$1).x2 = function (key) {
    if (!!(key == null))
      return null;
    return this.v1y(!(key == null) ? key : THROW_CCE());
  };
  protoOf(IdentityArrayMap$asMap$1).j2g = function (key) {
    return !(this.i2g_1.v1y(key) == null);
  };
  protoOf(IdentityArrayMap$asMap$1).u2 = function (key) {
    if (!!(key == null))
      return false;
    return this.j2g(!(key == null) ? key : THROW_CCE());
  };
  function IdentityArrayMap(capacity) {
    capacity = capacity === VOID ? 16 : capacity;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.j1q_1 = fillArrayVal(Array(capacity), null);
    var tmp_0 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.k1q_1 = fillArrayVal(Array(capacity), null);
    this.l1q_1 = 0;
  }
  protoOf(IdentityArrayMap).u = function () {
    return this.l1q_1 === 0;
  };
  protoOf(IdentityArrayMap).pn = function () {
    return this.l1q_1 > 0;
  };
  protoOf(IdentityArrayMap).w1y = function (key) {
    return find_0(this, key) >= 0;
  };
  protoOf(IdentityArrayMap).v1y = function (key) {
    var index = find_0(this, key);
    var tmp;
    if (index >= 0) {
      var tmp_0 = this.k1q_1[index];
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(IdentityArrayMap).d1x = function (key, value) {
    var keys = this.j1q_1;
    var values = this.k1q_1;
    var size = this.l1q_1;
    var index = find_0(this, key);
    if (index >= 0) {
      values[index] = value;
    } else {
      var insertIndex = -(index + 1 | 0) | 0;
      var resize = size === keys.length;
      var tmp;
      if (resize) {
        // Inline function 'kotlin.arrayOfNulls' call
        var size_0 = imul(size, 2);
        tmp = fillArrayVal(Array(size_0), null);
      } else {
        tmp = keys;
      }
      var destKeys = tmp;
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset = insertIndex + 1 | 0;
      arrayCopy(keys, destKeys, destinationOffset, insertIndex, size);
      if (resize) {
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(keys, destKeys, 0, 0, insertIndex);
      }
      destKeys[insertIndex] = key;
      this.j1q_1 = destKeys;
      var tmp_0;
      if (resize) {
        // Inline function 'kotlin.arrayOfNulls' call
        var size_1 = imul(size, 2);
        tmp_0 = fillArrayVal(Array(size_1), null);
      } else {
        tmp_0 = values;
      }
      var destValues = tmp_0;
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset_0 = insertIndex + 1 | 0;
      arrayCopy(values, destValues, destinationOffset_0, insertIndex, size);
      if (resize) {
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(values, destValues, 0, 0, insertIndex);
      }
      destValues[insertIndex] = value;
      this.k1q_1 = destValues;
      this.l1q_1 = this.l1q_1 + 1 | 0;
    }
  };
  protoOf(IdentityArrayMap).h1 = function () {
    this.l1q_1 = 0;
    fill_0(this.j1q_1, null);
    fill_0(this.k1q_1, null);
  };
  protoOf(IdentityArrayMap).s1x = function () {
    return new IdentityArrayMap$asMap$1(this);
  };
  function find_1($this, value) {
    var low = 0;
    var high = $this.a1q_1 - 1 | 0;
    var valueIdentity = identityHashCode(value);
    var values = $this.b1q_1;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = values[mid];
      var midIdentity = identityHashCode(midVal);
      if (midIdentity < valueIdentity)
        low = mid + 1 | 0;
      else if (midIdentity > valueIdentity)
        high = mid - 1 | 0;
      else if (midVal === value)
        return mid;
      else
        return findExactIndex_0($this, mid, value, valueIdentity);
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex_0($this, midIndex, value, valueHash) {
    var values = $this.b1q_1;
    var size = $this.a1q_1;
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var v = values[i];
        if (v === value) {
          return i;
        }
        if (!(identityHashCode(v) === valueHash)) {
          break $l$loop;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    if (inductionVariable_0 < size)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var v_0 = values[i_0];
        if (v_0 === value) {
          return i_0;
        }
        if (!(identityHashCode(v_0) === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
      }
       while (inductionVariable_0 < size);
    return -(size + 1 | 0) | 0;
  }
  function IdentityArraySet$iterator$1(this$0) {
    this.l2g_1 = this$0;
    this.k2g_1 = 0;
  }
  protoOf(IdentityArraySet$iterator$1).d1 = function () {
    return this.k2g_1 < this.l2g_1.a1q_1;
  };
  protoOf(IdentityArraySet$iterator$1).f1 = function () {
    var tmp = this.l2g_1.b1q_1;
    var tmp1 = this.k2g_1;
    this.k2g_1 = tmp1 + 1 | 0;
    var tmp_0 = tmp[tmp1];
    return !(tmp_0 == null) ? tmp_0 : THROW_CCE();
  };
  function IdentityArraySet$toString$lambda(it) {
    return toString(it);
  }
  function IdentityArraySet() {
    this.a1q_1 = 0;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.b1q_1 = fillArrayVal(Array(16), null);
  }
  protoOf(IdentityArraySet).m = function () {
    return this.a1q_1;
  };
  protoOf(IdentityArraySet).w21 = function (element) {
    return find_1(this, element) >= 0;
  };
  protoOf(IdentityArraySet).s = function (element) {
    if (!!(element == null))
      return false;
    return this.w21(!(element == null) ? element : THROW_CCE());
  };
  protoOf(IdentityArraySet).i1v = function (value) {
    var index;
    var size = this.a1q_1;
    var values = this.b1q_1;
    if (size > 0) {
      index = find_1(this, value);
      if (index >= 0) {
        return false;
      }
    } else {
      index = -1;
    }
    var insertIndex = -(index + 1 | 0) | 0;
    if (size === values.length) {
      // Inline function 'kotlin.arrayOfNulls' call
      var size_0 = imul(values.length, 2);
      var newSorted = fillArrayVal(Array(size_0), null);
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset = insertIndex + 1 | 0;
      arrayCopy(values, newSorted, destinationOffset, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      arrayCopy(values, newSorted, 0, 0, insertIndex);
      this.b1q_1 = newSorted;
    } else {
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset_0 = insertIndex + 1 | 0;
      arrayCopy(values, values, destinationOffset_0, insertIndex, size);
    }
    this.b1q_1[insertIndex] = value;
    this.a1q_1 = this.a1q_1 + 1 | 0;
    return true;
  };
  protoOf(IdentityArraySet).h1 = function () {
    fill_0(this.b1q_1, null);
    this.a1q_1 = 0;
  };
  protoOf(IdentityArraySet).n22 = function (collection) {
    if (collection.u())
      return Unit_instance;
    if (!(collection instanceof IdentityArraySet)) {
      var tmp0_iterator = collection.o();
      while (tmp0_iterator.d1()) {
        var value = tmp0_iterator.f1();
        this.i1v(value);
      }
    } else {
      var thisValues = this.b1q_1;
      var otherValues = collection.b1q_1;
      var thisSize = this.a1q_1;
      var otherSize = collection.a1q_1;
      var combinedSize = thisSize + otherSize | 0;
      var needsResize = this.b1q_1.length < combinedSize;
      var elementsInOrder = thisSize === 0 ? true : identityHashCode(thisValues[thisSize - 1 | 0]) < identityHashCode(otherValues[0]);
      if (!needsResize ? elementsInOrder : false) {
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(otherValues, thisValues, thisSize, 0, otherSize);
        this.a1q_1 = this.a1q_1 + otherSize | 0;
      } else {
        var tmp;
        if (needsResize) {
          // Inline function 'kotlin.arrayOfNulls' call
          var size = thisSize > otherSize ? imul(thisSize, 2) : imul(otherSize, 2);
          tmp = fillArrayVal(Array(size), null);
        } else {
          tmp = thisValues;
        }
        var newArray = tmp;
        var thisIndex = thisSize - 1 | 0;
        var otherIndex = otherSize - 1 | 0;
        var nextInsertIndex = combinedSize - 1 | 0;
        $l$loop_1: while (thisIndex >= 0 ? true : otherIndex >= 0) {
          var tmp_0;
          if (thisIndex < 0) {
            var tmp2 = otherIndex;
            otherIndex = tmp2 - 1 | 0;
            tmp_0 = otherValues[tmp2];
          } else if (otherIndex < 0) {
            var tmp3 = thisIndex;
            thisIndex = tmp3 - 1 | 0;
            tmp_0 = thisValues[tmp3];
          } else {
            var thisValue = thisValues[thisIndex];
            var otherValue = otherValues[otherIndex];
            var thisHash = identityHashCode(thisValue);
            var otherHash = identityHashCode(otherValue);
            var tmp_1;
            if (thisHash > otherHash) {
              thisIndex = thisIndex - 1 | 0;
              tmp_1 = thisValue;
            } else if (thisHash < otherHash) {
              otherIndex = otherIndex - 1 | 0;
              tmp_1 = otherValue;
            } else if (thisValue === otherValue) {
              thisIndex = thisIndex - 1 | 0;
              otherIndex = otherIndex - 1 | 0;
              tmp_1 = thisValue;
            } else {
              var i = thisIndex - 1 | 0;
              var foundDuplicate = false;
              $l$loop_0: while (i >= 0) {
                var tmp8 = i;
                i = tmp8 - 1 | 0;
                var value_0 = thisValues[tmp8];
                if (!(identityHashCode(value_0) === otherHash))
                  break $l$loop_0;
                if (otherValue === value_0) {
                  foundDuplicate = true;
                  break $l$loop_0;
                }
              }
              var tmp_2;
              if (foundDuplicate) {
                otherIndex = otherIndex - 1 | 0;
                continue $l$loop_1;
              } else {
                otherIndex = otherIndex - 1 | 0;
                tmp_2 = otherValue;
              }
              tmp_1 = tmp_2;
            }
            tmp_0 = tmp_1;
          }
          var nextValue = tmp_0;
          var tmp11 = nextInsertIndex;
          nextInsertIndex = tmp11 - 1 | 0;
          newArray[tmp11] = nextValue;
        }
        if (nextInsertIndex >= 0) {
          // Inline function 'kotlin.collections.copyInto' call
          var startIndex = nextInsertIndex + 1 | 0;
          arrayCopy(newArray, newArray, 0, startIndex, combinedSize);
        }
        var newSize = combinedSize - (nextInsertIndex + 1 | 0) | 0;
        fill_0(newArray, null, newSize, combinedSize);
        this.b1q_1 = newArray;
        this.a1q_1 = newSize;
      }
    }
  };
  protoOf(IdentityArraySet).u = function () {
    return this.a1q_1 === 0;
  };
  protoOf(IdentityArraySet).pn = function () {
    return this.a1q_1 > 0;
  };
  protoOf(IdentityArraySet).m2g = function (value) {
    var index = find_1(this, value);
    var values = this.b1q_1;
    var size = this.a1q_1;
    if (index >= 0) {
      if (index < (size - 1 | 0)) {
        // Inline function 'kotlin.collections.copyInto' call
        var startIndex = index + 1 | 0;
        arrayCopy(values, values, index, startIndex, size);
      }
      values[size - 1 | 0] = null;
      this.a1q_1 = this.a1q_1 - 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(IdentityArraySet).ge = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.u();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.o();
      while (tmp0_iterator.d1()) {
        var element = tmp0_iterator.f1();
        // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.containsAll.<anonymous>' call
        if (!this.w21(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(IdentityArraySet).t = function (elements) {
    return this.ge(elements);
  };
  protoOf(IdentityArraySet).o = function () {
    return new IdentityArraySet$iterator$1(this);
  };
  protoOf(IdentityArraySet).toString = function () {
    return joinToString(this, VOID, '[', ']', VOID, VOID, IdentityArraySet$toString$lambda);
  };
  function VectorListIterator(list, index) {
    this.n2g_1 = list;
    this.o2g_1 = index;
  }
  protoOf(VectorListIterator).d1 = function () {
    return this.o2g_1 < this.n2g_1.m();
  };
  protoOf(VectorListIterator).f1 = function () {
    var tmp1 = this.o2g_1;
    this.o2g_1 = tmp1 + 1 | 0;
    return this.n2g_1.n(tmp1);
  };
  protoOf(VectorListIterator).e1 = function () {
    this.o2g_1 = this.o2g_1 - 1 | 0;
    this.n2g_1.m1(this.o2g_1);
  };
  protoOf(VectorListIterator).s1 = function () {
    return this.o2g_1 > 0;
  };
  protoOf(VectorListIterator).t1 = function () {
    this.o2g_1 = this.o2g_1 - 1 | 0;
    return this.n2g_1.n(this.o2g_1);
  };
  function MutableVectorList(vector) {
    this.p2g_1 = vector;
  }
  protoOf(MutableVectorList).m = function () {
    return this.p2g_1.p1q_1;
  };
  protoOf(MutableVectorList).fe = function (element) {
    return this.p2g_1.fe(element);
  };
  protoOf(MutableVectorList).s = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.fe((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(MutableVectorList).ge = function (elements) {
    return this.p2g_1.ge(elements);
  };
  protoOf(MutableVectorList).t = function (elements) {
    return this.ge(elements);
  };
  protoOf(MutableVectorList).n = function (index) {
    checkIndex(this, index);
    // Inline function 'androidx.compose.runtime.collection.MutableVector.get' call
    var tmp = this.p2g_1.n1q_1[index];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(MutableVectorList).q2g = function (element) {
    return this.p2g_1.q2g(element);
  };
  protoOf(MutableVectorList).p = function (element) {
    if (!(element == null ? true : !(element == null)))
      return -1;
    return this.q2g((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(MutableVectorList).u = function () {
    return this.p2g_1.u();
  };
  protoOf(MutableVectorList).o = function () {
    return new VectorListIterator(this, 0);
  };
  protoOf(MutableVectorList).q1q = function (element) {
    return this.p2g_1.q1q(element);
  };
  protoOf(MutableVectorList).a1 = function (element) {
    return this.q1q((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(MutableVectorList).r2g = function (index, element) {
    return this.p2g_1.r2g(index, element);
  };
  protoOf(MutableVectorList).y1 = function (index, element) {
    return this.r2g(index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(MutableVectorList).s2g = function (index, elements) {
    return this.p2g_1.s2g(index, elements);
  };
  protoOf(MutableVectorList).a2 = function (index, elements) {
    return this.s2g(index, elements);
  };
  protoOf(MutableVectorList).t2g = function (elements) {
    return this.p2g_1.t2g(elements);
  };
  protoOf(MutableVectorList).g1 = function (elements) {
    return this.t2g(elements);
  };
  protoOf(MutableVectorList).h1 = function () {
    return this.p2g_1.h1();
  };
  protoOf(MutableVectorList).q = function (index) {
    return new VectorListIterator(this, index);
  };
  protoOf(MutableVectorList).u2g = function (element) {
    return this.p2g_1.u2g(element);
  };
  protoOf(MutableVectorList).b1 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.u2g((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(MutableVectorList).m1 = function (index) {
    checkIndex(this, index);
    return this.p2g_1.m1(index);
  };
  protoOf(MutableVectorList).v2g = function (index, element) {
    checkIndex(this, index);
    return this.p2g_1.v2g(index, element);
  };
  protoOf(MutableVectorList).z = function (index, element) {
    return this.v2g(index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(MutableVectorList).r = function (fromIndex, toIndex) {
    checkSubIndex(this, fromIndex, toIndex);
    return new SubList(this, fromIndex, toIndex);
  };
  function SubList(list, start, end) {
    this.w2g_1 = list;
    this.x2g_1 = start;
    this.y2g_1 = end;
  }
  protoOf(SubList).m = function () {
    return this.y2g_1 - this.x2g_1 | 0;
  };
  protoOf(SubList).fe = function (element) {
    var inductionVariable = this.x2g_1;
    var last = this.y2g_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals(this.w2g_1.n(i), element)) {
          return true;
        }
      }
       while (inductionVariable < last);
    return false;
  };
  protoOf(SubList).s = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.fe((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SubList).ge = function (elements) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = elements.o();
    while (tmp0_iterator.d1()) {
      var element = tmp0_iterator.f1();
      // Inline function 'androidx.compose.runtime.collection.SubList.containsAll.<anonymous>' call
      if (!this.fe(element)) {
        return false;
      }
    }
    return true;
  };
  protoOf(SubList).t = function (elements) {
    return this.ge(elements);
  };
  protoOf(SubList).n = function (index) {
    checkIndex(this, index);
    return this.w2g_1.n(index + this.x2g_1 | 0);
  };
  protoOf(SubList).q2g = function (element) {
    var inductionVariable = this.x2g_1;
    var last = this.y2g_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals(this.w2g_1.n(i), element)) {
          return i - this.x2g_1 | 0;
        }
      }
       while (inductionVariable < last);
    return -1;
  };
  protoOf(SubList).p = function (element) {
    if (!(element == null ? true : !(element == null)))
      return -1;
    return this.q2g((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SubList).u = function () {
    return this.y2g_1 === this.x2g_1;
  };
  protoOf(SubList).o = function () {
    return new VectorListIterator(this, 0);
  };
  protoOf(SubList).q1q = function (element) {
    var tmp1 = this.y2g_1;
    this.y2g_1 = tmp1 + 1 | 0;
    this.w2g_1.y1(tmp1, element);
    return true;
  };
  protoOf(SubList).a1 = function (element) {
    return this.q1q((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SubList).r2g = function (index, element) {
    this.w2g_1.y1(index + this.x2g_1 | 0, element);
    this.y2g_1 = this.y2g_1 + 1 | 0;
  };
  protoOf(SubList).y1 = function (index, element) {
    return this.r2g(index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SubList).s2g = function (index, elements) {
    this.w2g_1.a2(index + this.x2g_1 | 0, elements);
    this.y2g_1 = this.y2g_1 + elements.m() | 0;
    return elements.m() > 0;
  };
  protoOf(SubList).a2 = function (index, elements) {
    return this.s2g(index, elements);
  };
  protoOf(SubList).t2g = function (elements) {
    this.w2g_1.a2(this.y2g_1, elements);
    this.y2g_1 = this.y2g_1 + elements.m() | 0;
    return elements.m() > 0;
  };
  protoOf(SubList).g1 = function (elements) {
    return this.t2g(elements);
  };
  protoOf(SubList).h1 = function () {
    var inductionVariable = this.y2g_1 - 1 | 0;
    var last = this.x2g_1;
    if (last <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        this.w2g_1.m1(i);
      }
       while (!(i === last));
    this.y2g_1 = this.x2g_1;
  };
  protoOf(SubList).q = function (index) {
    return new VectorListIterator(this, index);
  };
  protoOf(SubList).u2g = function (element) {
    var inductionVariable = this.x2g_1;
    var last = this.y2g_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals(this.w2g_1.n(i), element)) {
          this.w2g_1.m1(i);
          this.y2g_1 = this.y2g_1 - 1 | 0;
          return true;
        }
      }
       while (inductionVariable < last);
    return false;
  };
  protoOf(SubList).b1 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.u2g((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SubList).m1 = function (index) {
    checkIndex(this, index);
    var item = this.w2g_1.m1(index + this.x2g_1 | 0);
    this.y2g_1 = this.y2g_1 - 1 | 0;
    return item;
  };
  protoOf(SubList).v2g = function (index, element) {
    checkIndex(this, index);
    return this.w2g_1.z(index + this.x2g_1 | 0, element);
  };
  protoOf(SubList).z = function (index, element) {
    return this.v2g(index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SubList).r = function (fromIndex, toIndex) {
    checkSubIndex(this, fromIndex, toIndex);
    return new SubList(this, fromIndex, toIndex);
  };
  function MutableVector(content, size) {
    this.n1q_1 = content;
    this.o1q_1 = null;
    this.p1q_1 = size;
  }
  protoOf(MutableVector).q1q = function (element) {
    this.f3(this.p1q_1 + 1 | 0);
    this.n1q_1[this.p1q_1] = element;
    this.p1q_1 = this.p1q_1 + 1 | 0;
    return true;
  };
  protoOf(MutableVector).r2g = function (index, element) {
    this.f3(this.p1q_1 + 1 | 0);
    var content = this.n1q_1;
    if (!(index === this.p1q_1)) {
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset = index + 1 | 0;
      var endIndex = this.p1q_1;
      arrayCopy(content, content, destinationOffset, index, endIndex);
    }
    content[index] = element;
    this.p1q_1 = this.p1q_1 + 1 | 0;
  };
  protoOf(MutableVector).z2g = function (index, elements) {
    if (elements.u())
      return false;
    this.f3(this.p1q_1 + elements.p1q_1 | 0);
    var content = this.n1q_1;
    if (!(index === this.p1q_1)) {
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset = index + elements.p1q_1 | 0;
      var endIndex = this.p1q_1;
      arrayCopy(content, content, destinationOffset, index, endIndex);
    }
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = elements.n1q_1;
    var endIndex_0 = elements.p1q_1;
    arrayCopy(this_0, content, index, 0, endIndex_0);
    this.p1q_1 = this.p1q_1 + elements.p1q_1 | 0;
    return true;
  };
  protoOf(MutableVector).s2g = function (index, elements) {
    if (elements.u())
      return false;
    this.f3(this.p1q_1 + elements.m() | 0);
    var content = this.n1q_1;
    if (!(index === this.p1q_1)) {
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset = index + elements.m() | 0;
      var endIndex = this.p1q_1;
      arrayCopy(content, content, destinationOffset, index, endIndex);
    }
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index_0 = 0;
    var tmp0_iterator = elements.o();
    while (tmp0_iterator.d1()) {
      var item = tmp0_iterator.f1();
      // Inline function 'androidx.compose.runtime.collection.MutableVector.addAll.<anonymous>' call
      var tmp1 = index_0;
      index_0 = tmp1 + 1 | 0;
      content[index + checkIndexOverflow(tmp1) | 0] = item;
    }
    this.p1q_1 = this.p1q_1 + elements.m() | 0;
    return true;
  };
  protoOf(MutableVector).t2g = function (elements) {
    return this.s2g(this.p1q_1, elements);
  };
  protoOf(MutableVector).a2h = function () {
    var tmp0_elvis_lhs = this.o1q_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new MutableVectorList(this);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.collection.MutableVector.asMutableList.<anonymous>' call
      this.o1q_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MutableVector).h1 = function () {
    var content = this.n1q_1;
    // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
    var inductionVariable = this.p1q_1 - 1 | 0;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        content[i] = null;
      }
       while (0 <= inductionVariable);
    this.p1q_1 = 0;
  };
  protoOf(MutableVector).fe = function (element) {
    var inductionVariable = 0;
    // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
    var last = this.p1q_1 - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.collection.MutableVector.get' call
        var index = i;
        var tmp = this.n1q_1[index];
        var tmp$ret$1 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
        if (equals(tmp$ret$1, element))
          return true;
      }
       while (!(i === last));
    return false;
  };
  protoOf(MutableVector).ge = function (elements) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = elements.o();
    while (tmp0_iterator.d1()) {
      var element = tmp0_iterator.f1();
      // Inline function 'androidx.compose.runtime.collection.MutableVector.containsAll.<anonymous>' call
      if (!this.fe(element))
        return false;
    }
    return true;
  };
  protoOf(MutableVector).f3 = function (capacity) {
    var oldContent = this.n1q_1;
    if (oldContent.length < capacity) {
      // Inline function 'kotlin.math.max' call
      var b = imul(oldContent.length, 2);
      var newSize = Math.max(capacity, b);
      this.n1q_1 = copyOf_0(oldContent, newSize);
    }
  };
  protoOf(MutableVector).q2g = function (element) {
    var size = this.p1q_1;
    if (size > 0) {
      var i = 0;
      var tmp = this.n1q_1;
      var content = isArray(tmp) ? tmp : THROW_CCE();
      do {
        if (equals(element, content[i]))
          return i;
        i = i + 1 | 0;
      }
       while (i < size);
    }
    return -1;
  };
  protoOf(MutableVector).u = function () {
    return this.p1q_1 === 0;
  };
  protoOf(MutableVector).pn = function () {
    return !(this.p1q_1 === 0);
  };
  protoOf(MutableVector).u2g = function (element) {
    var index = this.q2g(element);
    if (index >= 0) {
      this.m1(index);
      return true;
    }
    return false;
  };
  protoOf(MutableVector).m1 = function (index) {
    var content = this.n1q_1;
    var tmp = content[index];
    var item = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
    if (!(index === (this.p1q_1 - 1 | 0))) {
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = index + 1 | 0;
      var endIndex = this.p1q_1;
      arrayCopy(content, content, index, startIndex, endIndex);
    }
    this.p1q_1 = this.p1q_1 - 1 | 0;
    content[this.p1q_1] = null;
    return item;
  };
  protoOf(MutableVector).b2 = function (start, end) {
    if (end > start) {
      if (end < this.p1q_1) {
        // Inline function 'kotlin.collections.copyInto' call
        var this_0 = this.n1q_1;
        var destination = this.n1q_1;
        var endIndex = this.p1q_1;
        arrayCopy(this_0, destination, start, end, endIndex);
      }
      var newSize = this.p1q_1 - (end - start | 0) | 0;
      var inductionVariable = newSize;
      // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
      var last = this.p1q_1 - 1 | 0;
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          this.n1q_1[i] = null;
        }
         while (!(i === last));
      this.p1q_1 = newSize;
    }
  };
  protoOf(MutableVector).b2h = function (newSize) {
    this.p1q_1 = newSize;
  };
  protoOf(MutableVector).v2g = function (index, element) {
    var content = this.n1q_1;
    var tmp = content[index];
    var old = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    content[index] = element;
    return old;
  };
  protoOf(MutableVector).c2h = function (comparator) {
    var tmp = this.n1q_1;
    sortWith_0(isArray(tmp) ? tmp : THROW_CCE(), comparator, 0, this.p1q_1);
  };
  function checkIndex(_this__u8e3s4, index) {
    var size = _this__u8e3s4.m();
    if (index < 0 ? true : index >= size) {
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' is out of bounds. ' + ('The list has ' + size + ' elements.'));
    }
  }
  function checkSubIndex(_this__u8e3s4, fromIndex, toIndex) {
    var size = _this__u8e3s4.m();
    if (fromIndex > toIndex) {
      throw IllegalArgumentException_init_$Create$('Indices are out of order. fromIndex (' + fromIndex + ') is ' + ('greater than toIndex (' + toIndex + ').'));
    }
    if (fromIndex < 0) {
      throw IndexOutOfBoundsException_init_$Create$('fromIndex (' + fromIndex + ') is less than 0.');
    }
    if (toIndex > size) {
      throw IndexOutOfBoundsException_init_$Create$('toIndex (' + toIndex + ') is more than than the list size (' + size + ')');
    }
  }
  function ScopeMap() {
    this.k1w_1 = mutableScatterMapOf();
  }
  protoOf(ScopeMap).p1w = function (key, scope) {
    // Inline function 'androidx.collection.MutableScatterMap.compute' call
    var this_0 = this.k1w_1;
    var index = this_0.nn(key);
    var inserting = index < 0;
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.add.<anonymous>' call
    var tmp;
    if (inserting) {
      tmp = null;
    } else {
      var tmp_0 = this_0.dn_1[index];
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    }
    var value = tmp;
    var tmp_1;
    if (value == null) {
      tmp_1 = scope;
    } else {
      if (value instanceof MutableScatterSet) {
        (value instanceof MutableScatterSet ? value : THROW_CCE()).a1(scope);
        tmp_1 = value;
      } else {
        var tmp_2;
        if (!(value === scope)) {
          var set = new MutableScatterSet();
          set.a1(!(value == null) ? value : THROW_CCE());
          set.a1(scope);
          tmp_2 = set;
        } else {
          tmp_2 = value;
        }
        tmp_1 = tmp_2;
      }
    }
    var computedValue = tmp_1;
    if (inserting) {
      var insertionIndex = ~index;
      this_0.cn_1[insertionIndex] = key;
      this_0.dn_1[insertionIndex] = computedValue;
    } else {
      this_0.dn_1[index] = computedValue;
    }
  };
  protoOf(ScopeMap).o1w = function (element) {
    return this.k1w_1.u2(element);
  };
  protoOf(ScopeMap).h1 = function () {
    this.k1w_1.h1();
  };
  protoOf(ScopeMap).n1w = function (key, scope) {
    var tmp0_elvis_lhs = this.k1w_1.x2(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var value = tmp;
    var tmp_0;
    if (value instanceof MutableScatterSet) {
      var set = value instanceof MutableScatterSet ? value : THROW_CCE();
      var removed = set.b1(scope);
      if (removed ? set.u() : false) {
        this.k1w_1.r2(key);
      }
      return removed;
    } else {
      if (equals(value, scope)) {
        this.k1w_1.r2(key);
        tmp_0 = true;
      } else {
        tmp_0 = false;
      }
    }
    return tmp_0;
  };
  protoOf(ScopeMap).d1y = function (scope) {
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf' call
    // Inline function 'androidx.collection.MutableScatterMap.removeIf' call
    var this_0 = this.k1w_1;
    $l$block_0: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this_0.bn_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_1 = slot;
          if (!this_1.ob(this_1.kb().lb(7)).ob(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.ob(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.MutableScatterMap.removeIf.<anonymous>' call
                  // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf.<anonymous>' call
                  var tmp = this_0.cn_1[index];
                  (tmp == null ? true : !(tmp == null)) || THROW_CCE();
                  var tmp_0 = this_0.dn_1[index];
                  var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  var tmp_1;
                  if (value instanceof MutableScatterSet) {
                    var set = value instanceof MutableScatterSet ? value : THROW_CCE();
                    // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
                    var elements = set.rn_1;
                    $l$block: {
                      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                      // Inline function 'kotlin.contracts.contract' call
                      var m_0 = set.qn_1;
                      var lastIndex_0 = m_0.length - 2 | 0;
                      var inductionVariable_1 = 0;
                      if (inductionVariable_1 <= lastIndex_0)
                        do {
                          var i_0 = inductionVariable_1;
                          inductionVariable_1 = inductionVariable_1 + 1 | 0;
                          var slot_0 = m_0[i_0];
                          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                          var this_2 = slot_0;
                          if (!this_2.ob(this_2.kb().lb(7)).ob(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                            var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
                            var inductionVariable_2 = 0;
                            if (inductionVariable_2 < bitCount_0)
                              do {
                                var j_0 = inductionVariable_2;
                                inductionVariable_2 = inductionVariable_2 + 1 | 0;
                                // Inline function 'androidx.collection.isFull' call
                                if (slot_0.ob(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                                  var index_0 = (i_0 << 3) + j_0 | 0;
                                  // Inline function 'androidx.collection.MutableScatterSet.removeIf.<anonymous>' call
                                  // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScope.<anonymous>' call
                                  var tmp_2 = elements[index_0];
                                  if (((tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE()) === scope) {
                                    set.co(index_0);
                                  }
                                }
                                slot_0 = slot_0.mb(8);
                              }
                               while (inductionVariable_2 < bitCount_0);
                            if (!(bitCount_0 === 8)) {
                              break $l$block;
                            }
                          }
                        }
                         while (!(i_0 === lastIndex_0));
                    }
                    tmp_1 = set.u();
                  } else {
                    // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScope.<anonymous>' call
                    tmp_1 = (!(value == null) ? value : THROW_CCE()) === scope;
                  }
                  if (tmp_1) {
                    this_0.on(index);
                  }
                }
                slot = slot.mb(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block_0;
            }
          }
        }
         while (!(i === lastIndex));
    }
  };
  function persistentSetOf() {
    return Companion_getInstance_10().e2h();
  }
  function persistentHashMapOf() {
    return Companion_getInstance_8().g2h();
  }
  function createEntries($this) {
    return new PersistentHashMapEntries($this);
  }
  function Companion_7() {
    Companion_instance_8 = this;
    this.f2h_1 = new PersistentHashMap(Companion_getInstance_9().h2h_1, 0);
  }
  protoOf(Companion_7).g2h = function () {
    var tmp = this.f2h_1;
    return tmp instanceof PersistentHashMap ? tmp : THROW_CCE();
  };
  var Companion_instance_8;
  function Companion_getInstance_8() {
    if (Companion_instance_8 == null)
      new Companion_7();
    return Companion_instance_8;
  }
  function PersistentHashMap(node, size) {
    Companion_getInstance_8();
    AbstractMap.call(this);
    this.k2h_1 = node;
    this.l2h_1 = size;
  }
  protoOf(PersistentHashMap).m = function () {
    return this.l2h_1;
  };
  protoOf(PersistentHashMap).k2 = function () {
    return new PersistentHashMapKeys(this);
  };
  protoOf(PersistentHashMap).l2 = function () {
    return new PersistentHashMapValues(this);
  };
  protoOf(PersistentHashMap).m2 = function () {
    return createEntries(this);
  };
  protoOf(PersistentHashMap).u2 = function (key) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return this.k2h_1.q2h(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMap).x2 = function (key) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return this.k2h_1.r2h(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMap).n2 = function (key, value) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp0_elvis_lhs = this.k2h_1.s2h(tmp$ret$0, key, value, 0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var newNodeResult = tmp;
    return new PersistentHashMap(newNodeResult.t2h_1, this.m() + newNodeResult.u2h_1 | 0);
  };
  protoOf(PersistentHashMap).r2 = function (key) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var newNode = this.k2h_1.v2h(tmp$ret$0, key, 0);
    if (this.k2h_1 === newNode) {
      return this;
    }
    if (newNode == null) {
      return Companion_getInstance_8().g2h();
    }
    return new PersistentHashMap(newNode, this.m() - 1 | 0);
  };
  protoOf(PersistentHashMap).j1m = function () {
    return new PersistentHashMapBuilder(this);
  };
  function PersistentHashMapBuilder(map) {
    AbstractMutableMap.call(this);
    this.a2i_1 = map;
    this.b2i_1 = new MutabilityOwnership();
    this.c2i_1 = this.a2i_1.k2h_1;
    this.d2i_1 = null;
    this.e2i_1 = 0;
    this.f2i_1 = this.a2i_1.m();
  }
  protoOf(PersistentHashMapBuilder).g2i = function (value) {
    this.f2i_1 = value;
    this.e2i_1 = this.e2i_1 + 1 | 0;
  };
  protoOf(PersistentHashMapBuilder).m = function () {
    return this.f2i_1;
  };
  protoOf(PersistentHashMapBuilder).e3 = function () {
    var tmp = this;
    var tmp_0;
    if (this.c2i_1 === this.a2i_1.k2h_1) {
      tmp_0 = this.a2i_1;
    } else {
      this.b2i_1 = new MutabilityOwnership();
      tmp_0 = new PersistentHashMap(this.c2i_1, this.m());
    }
    tmp.a2i_1 = tmp_0;
    return this.a2i_1;
  };
  protoOf(PersistentHashMapBuilder).m2 = function () {
    return new PersistentHashMapBuilderEntries(this);
  };
  protoOf(PersistentHashMapBuilder).k2 = function () {
    return new PersistentHashMapBuilderKeys(this);
  };
  protoOf(PersistentHashMapBuilder).l2 = function () {
    return new PersistentHashMapBuilderValues(this);
  };
  protoOf(PersistentHashMapBuilder).u2 = function (key) {
    var tmp = this.c2i_1;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return tmp.q2h(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMapBuilder).x2 = function (key) {
    var tmp = this.c2i_1;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return tmp.r2h(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMapBuilder).n2 = function (key, value) {
    this.d2i_1 = null;
    var tmp = this;
    var tmp_0 = this.c2i_1;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    tmp.c2i_1 = tmp_0.h2i(tmp$ret$0, key, value, 0, this);
    return this.d2i_1;
  };
  protoOf(PersistentHashMapBuilder).o2 = function (from) {
    var tmp1_elvis_lhs = from instanceof PersistentHashMap ? from : null;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = from instanceof PersistentHashMapBuilder ? from : null;
      tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e3();
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var map = tmp;
    if (!(map == null)) {
      var intersectionCounter = new DeltaCounter();
      var oldSize = this.m();
      var tmp_0 = this;
      var tmp_1 = this.c2i_1;
      var tmp_2 = map.k2h_1;
      tmp_0.c2i_1 = tmp_1.i2i(tmp_2 instanceof TrieNode ? tmp_2 : THROW_CCE(), 0, intersectionCounter, this);
      var newSize = (oldSize + map.m() | 0) - intersectionCounter.j2i_1 | 0;
      if (!(oldSize === newSize)) {
        this.g2i(newSize);
      }
    } else {
      protoOf(AbstractMutableMap).o2.call(this, from);
    }
  };
  protoOf(PersistentHashMapBuilder).r2 = function (key) {
    this.d2i_1 = null;
    var tmp = this;
    var tmp_0 = this.c2i_1;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp0_elvis_lhs = tmp_0.k2i(tmp$ret$0, key, 0, this);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      var tmp_2 = Companion_getInstance_9().h2h_1;
      tmp_1 = tmp_2 instanceof TrieNode ? tmp_2 : THROW_CCE();
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    tmp.c2i_1 = tmp_1;
    return this.d2i_1;
  };
  protoOf(PersistentHashMapBuilder).l2i = function (key, value) {
    var oldSize = this.m();
    var tmp = this;
    var tmp_0 = this.c2i_1;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp0_elvis_lhs = tmp_0.m2i(tmp$ret$0, key, value, 0, this);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      var tmp_2 = Companion_getInstance_9().h2h_1;
      tmp_1 = tmp_2 instanceof TrieNode ? tmp_2 : THROW_CCE();
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    tmp.c2i_1 = tmp_1;
    return !(oldSize === this.m());
  };
  protoOf(PersistentHashMapBuilder).h1 = function () {
    var tmp = this;
    var tmp_0 = Companion_getInstance_9().h2h_1;
    tmp.c2i_1 = tmp_0 instanceof TrieNode ? tmp_0 : THROW_CCE();
    this.g2i(0);
  };
  function PersistentHashMapBuilderEntriesIterator(builder) {
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = get_TRIE_MAX_HEIGHT() + 1 | 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = fillArrayVal(Array(tmp_1), null);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = new TrieNodeMutableEntriesIterator(this);
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.n2i_1 = new PersistentHashMapBuilderBaseIterator(builder, tmp_2);
  }
  protoOf(PersistentHashMapBuilderEntriesIterator).d1 = function () {
    return this.n2i_1.d1();
  };
  protoOf(PersistentHashMapBuilderEntriesIterator).f1 = function () {
    return this.n2i_1.f1();
  };
  protoOf(PersistentHashMapBuilderEntriesIterator).e1 = function () {
    return this.n2i_1.e1();
  };
  function PersistentHashMapBuilderKeysIterator(builder) {
    var tmp = 0;
    var tmp_0 = get_TRIE_MAX_HEIGHT() + 1 | 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(tmp_0), null);
    while (tmp < tmp_0) {
      tmp_1[tmp] = new TrieNodeKeysIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBuilderBaseIterator.call(this, builder, tmp_1);
  }
  function PersistentHashMapBuilderValuesIterator(builder) {
    var tmp = 0;
    var tmp_0 = get_TRIE_MAX_HEIGHT() + 1 | 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(tmp_0), null);
    while (tmp < tmp_0) {
      tmp_1[tmp] = new TrieNodeValuesIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBuilderBaseIterator.call(this, builder, tmp_1);
  }
  function resetPath($this, keyHash, node, key, pathIndex) {
    var shift = imul(pathIndex, get_LOG_MAX_BRANCHING_FACTOR());
    if (shift > get_MAX_SHIFT()) {
      $this.o2i_1[pathIndex].c2j(node.p2h_1, node.p2h_1.length, 0);
      while (!equals($this.o2i_1[pathIndex].y2i(), key)) {
        $this.o2i_1[pathIndex].d2j();
      }
      $this.p2i_1 = pathIndex;
      return Unit_instance;
    }
    var keyPositionMask = 1 << indexSegment(keyHash, shift);
    if (node.g2j(keyPositionMask)) {
      var keyIndex = node.e2j(keyPositionMask);
      $this.o2i_1[pathIndex].c2j(node.p2h_1, imul(get_ENTRY_SIZE(), node.f2j()), keyIndex);
      $this.p2i_1 = pathIndex;
      return Unit_instance;
    }
    var nodeIndex = node.h2j(keyPositionMask);
    var targetNode = node.i2j(nodeIndex);
    $this.o2i_1[pathIndex].c2j(node.p2h_1, imul(get_ENTRY_SIZE(), node.f2j()), nodeIndex);
    resetPath($this, keyHash, targetNode, key, pathIndex + 1 | 0);
  }
  function checkNextWasInvoked($this) {
    if (!$this.w2i_1)
      throw IllegalStateException_init_$Create$_0();
  }
  function checkForComodification($this) {
    if (!($this.u2i_1.e2i_1 === $this.x2i_1))
      throw ConcurrentModificationException_init_$Create$();
  }
  function PersistentHashMapBuilderBaseIterator(builder, path) {
    PersistentHashMapBaseIterator.call(this, builder.c2i_1, path);
    this.u2i_1 = builder;
    this.v2i_1 = null;
    this.w2i_1 = false;
    this.x2i_1 = this.u2i_1.e2i_1;
  }
  protoOf(PersistentHashMapBuilderBaseIterator).f1 = function () {
    checkForComodification(this);
    this.v2i_1 = this.y2i();
    this.w2i_1 = true;
    return protoOf(PersistentHashMapBaseIterator).f1.call(this);
  };
  protoOf(PersistentHashMapBuilderBaseIterator).e1 = function () {
    checkNextWasInvoked(this);
    if (this.d1()) {
      var currentKey = this.y2i();
      // Inline function 'kotlin.collections.remove' call
      var this_0 = this.u2i_1;
      var key = this.v2i_1;
      (isInterface(this_0, MutableMap) ? this_0 : THROW_CCE()).r2(key);
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = currentKey == null ? null : hashCode(currentKey);
      var tmp$ret$1 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      resetPath(this, tmp$ret$1, this.u2i_1.c2i_1, currentKey, 0);
    } else {
      // Inline function 'kotlin.collections.remove' call
      var this_1 = this.u2i_1;
      var key_0 = this.v2i_1;
      (isInterface(this_1, MutableMap) ? this_1 : THROW_CCE()).r2(key_0);
    }
    this.v2i_1 = null;
    this.w2i_1 = false;
    this.x2i_1 = this.u2i_1.e2i_1;
  };
  function TrieNodeMutableEntriesIterator(parentIterator) {
    TrieNodeBaseIterator.call(this);
    this.m2j_1 = parentIterator;
  }
  protoOf(TrieNodeMutableEntriesIterator).f1 = function () {
    assert(this.n2j());
    this.b2j_1 = this.b2j_1 + 2 | 0;
    var tmp = this.z2i_1[this.b2j_1 - 2 | 0];
    var tmp_0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    var tmp_1 = this.z2i_1[this.b2j_1 - 1 | 0];
    return new MutableMapEntry(this.m2j_1, tmp_0, (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE());
  };
  function MutableMapEntry(parentIterator, key, value) {
    MapEntry.call(this, key, value);
    this.u2j_1 = parentIterator;
    this.v2j_1 = value;
  }
  protoOf(MutableMapEntry).q2 = function () {
    return this.v2j_1;
  };
  function PersistentHashMapBuilderEntries(builder) {
    AbstractMapBuilderEntries.call(this);
    this.y2j_1 = builder;
  }
  protoOf(PersistentHashMapBuilderEntries).z2j = function (element) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(PersistentHashMapBuilderEntries).a1 = function (element) {
    return this.z2j((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderEntries).h1 = function () {
    this.y2j_1.h1();
  };
  protoOf(PersistentHashMapBuilderEntries).o = function () {
    return new PersistentHashMapBuilderEntriesIterator(this.y2j_1);
  };
  protoOf(PersistentHashMapBuilderEntries).e4 = function (element) {
    return this.y2j_1.l2i(element.p2(), element.q2());
  };
  protoOf(PersistentHashMapBuilderEntries).m = function () {
    return this.y2j_1.m();
  };
  protoOf(PersistentHashMapBuilderEntries).d4 = function (element) {
    var tmp0_safe_receiver = this.y2j_1.x2(element.p2());
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapBuilderEntries.containsEntry.<anonymous>' call
      tmp = equals(tmp0_safe_receiver, element.q2());
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? element.q2() == null ? this.y2j_1.u2(element.p2()) : false : tmp1_elvis_lhs;
  };
  function PersistentHashMapBuilderKeys(builder) {
    AbstractMutableSet.call(this);
    this.a2k_1 = builder;
  }
  protoOf(PersistentHashMapBuilderKeys).i4 = function (element) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(PersistentHashMapBuilderKeys).a1 = function (element) {
    return this.i4((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderKeys).h1 = function () {
    this.a2k_1.h1();
  };
  protoOf(PersistentHashMapBuilderKeys).o = function () {
    return new PersistentHashMapBuilderKeysIterator(this.a2k_1);
  };
  protoOf(PersistentHashMapBuilderKeys).r2 = function (element) {
    if (this.a2k_1.u2(element)) {
      this.a2k_1.r2(element);
      return true;
    }
    return false;
  };
  protoOf(PersistentHashMapBuilderKeys).b1 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.r2((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderKeys).m = function () {
    return this.a2k_1.m();
  };
  protoOf(PersistentHashMapBuilderKeys).n3 = function (element) {
    return this.a2k_1.u2(element);
  };
  protoOf(PersistentHashMapBuilderKeys).s = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.n3((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function PersistentHashMapBuilderValues(builder) {
    AbstractMutableCollection.call(this);
    this.b2k_1 = builder;
  }
  protoOf(PersistentHashMapBuilderValues).m = function () {
    return this.b2k_1.m();
  };
  protoOf(PersistentHashMapBuilderValues).r3 = function (element) {
    return this.b2k_1.v2(element);
  };
  protoOf(PersistentHashMapBuilderValues).s = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.r3((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderValues).s3 = function (element) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(PersistentHashMapBuilderValues).a1 = function (element) {
    return this.s3((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderValues).o = function () {
    return new PersistentHashMapBuilderValuesIterator(this.b2k_1);
  };
  function AbstractMapBuilderEntries() {
    AbstractMutableSet.call(this);
  }
  protoOf(AbstractMapBuilderEntries).a4 = function (element) {
    var tmp = !(element == null) ? element : null;
    if (!(!(tmp == null) ? isInterface(tmp, Entry) : false))
      return false;
    return this.d4(element);
  };
  protoOf(AbstractMapBuilderEntries).s = function (element) {
    if (!(!(element == null) ? isInterface(element, Entry) : false))
      return false;
    return this.a4((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  protoOf(AbstractMapBuilderEntries).c4 = function (element) {
    var tmp = !(element == null) ? element : null;
    if (!(!(tmp == null) ? isInterface(tmp, Entry) : false))
      return false;
    return this.e4(element);
  };
  protoOf(AbstractMapBuilderEntries).b1 = function (element) {
    if (!(!(element == null) ? isInterface(element, Entry) : false))
      return false;
    return this.c4((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  function PersistentHashMapKeysIterator(node) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = fillArrayVal(Array(8), null);
    while (tmp < 8) {
      tmp_0[tmp] = new TrieNodeKeysIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_0);
  }
  function PersistentHashMapValuesIterator(node) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = fillArrayVal(Array(8), null);
    while (tmp < 8) {
      tmp_0[tmp] = new TrieNodeValuesIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_0);
  }
  function PersistentHashMapEntriesIterator(node) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = fillArrayVal(Array(8), null);
    while (tmp < 8) {
      tmp_0[tmp] = new TrieNodeEntriesIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_0);
  }
  function moveToNextNodeWithData($this, pathIndex) {
    if ($this.o2i_1[pathIndex].n2j()) {
      return pathIndex;
    }
    if ($this.o2i_1[pathIndex].p2j()) {
      var node = $this.o2i_1[pathIndex].q2j();
      if (pathIndex === 6) {
        $this.o2i_1[pathIndex + 1 | 0].o2j(node.p2h_1, node.p2h_1.length);
      } else {
        $this.o2i_1[pathIndex + 1 | 0].o2j(node.p2h_1, imul(get_ENTRY_SIZE(), node.f2j()));
      }
      return moveToNextNodeWithData($this, pathIndex + 1 | 0);
    }
    return -1;
  }
  function ensureNextEntryIsReady($this) {
    if ($this.o2i_1[$this.p2i_1].n2j()) {
      return Unit_instance;
    }
    var inductionVariable = $this.p2i_1;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var result = moveToNextNodeWithData($this, i);
        if (result === -1 ? $this.o2i_1[i].p2j() : false) {
          $this.o2i_1[i].r2j();
          result = moveToNextNodeWithData($this, i);
        }
        if (!(result === -1)) {
          $this.p2i_1 = result;
          return Unit_instance;
        }
        if (i > 0) {
          $this.o2i_1[i - 1 | 0].r2j();
        }
        $this.o2i_1[i].o2j(Companion_getInstance_9().h2h_1.p2h_1, 0);
      }
       while (0 <= inductionVariable);
    $this.q2i_1 = false;
  }
  function checkHasNext($this) {
    if (!$this.d1())
      throw NoSuchElementException_init_$Create$_0();
  }
  function PersistentHashMapBaseIterator(node, path) {
    this.o2i_1 = path;
    this.p2i_1 = 0;
    this.q2i_1 = true;
    this.o2i_1[0].o2j(node.p2h_1, imul(get_ENTRY_SIZE(), node.f2j()));
    this.p2i_1 = 0;
    ensureNextEntryIsReady(this);
  }
  protoOf(PersistentHashMapBaseIterator).y2i = function () {
    checkHasNext(this);
    return this.o2i_1[this.p2i_1].y2i();
  };
  protoOf(PersistentHashMapBaseIterator).d1 = function () {
    return this.q2i_1;
  };
  protoOf(PersistentHashMapBaseIterator).f1 = function () {
    checkHasNext(this);
    var result = this.o2i_1[this.p2i_1].f1();
    ensureNextEntryIsReady(this);
    return result;
  };
  function TrieNodeBaseIterator() {
    this.z2i_1 = Companion_getInstance_9().h2h_1.p2h_1;
    this.a2j_1 = 0;
    this.b2j_1 = 0;
  }
  protoOf(TrieNodeBaseIterator).c2j = function (buffer, dataSize, index) {
    this.z2i_1 = buffer;
    this.a2j_1 = dataSize;
    this.b2j_1 = index;
  };
  protoOf(TrieNodeBaseIterator).o2j = function (buffer, dataSize) {
    this.c2j(buffer, dataSize, 0);
  };
  protoOf(TrieNodeBaseIterator).n2j = function () {
    return this.b2j_1 < this.a2j_1;
  };
  protoOf(TrieNodeBaseIterator).y2i = function () {
    assert(this.n2j());
    var tmp = this.z2i_1[this.b2j_1];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(TrieNodeBaseIterator).d2j = function () {
    assert(this.n2j());
    this.b2j_1 = this.b2j_1 + 2 | 0;
  };
  protoOf(TrieNodeBaseIterator).p2j = function () {
    assert(this.b2j_1 >= this.a2j_1);
    return this.b2j_1 < this.z2i_1.length;
  };
  protoOf(TrieNodeBaseIterator).q2j = function () {
    assert(this.p2j());
    var tmp = this.z2i_1[this.b2j_1];
    return tmp instanceof TrieNode ? tmp : THROW_CCE();
  };
  protoOf(TrieNodeBaseIterator).r2j = function () {
    assert(this.p2j());
    this.b2j_1 = this.b2j_1 + 1 | 0;
  };
  protoOf(TrieNodeBaseIterator).d1 = function () {
    return this.n2j();
  };
  function get_TRIE_MAX_HEIGHT() {
    return TRIE_MAX_HEIGHT;
  }
  var TRIE_MAX_HEIGHT;
  function TrieNodeKeysIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeKeysIterator).f1 = function () {
    assert(this.n2j());
    this.b2j_1 = this.b2j_1 + 2 | 0;
    var tmp = this.z2i_1[this.b2j_1 - 2 | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  function TrieNodeValuesIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeValuesIterator).f1 = function () {
    assert(this.n2j());
    this.b2j_1 = this.b2j_1 + 2 | 0;
    var tmp = this.z2i_1[this.b2j_1 - 1 | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  function TrieNodeEntriesIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeEntriesIterator).f1 = function () {
    assert(this.n2j());
    this.b2j_1 = this.b2j_1 + 2 | 0;
    var tmp = this.z2i_1[this.b2j_1 - 2 | 0];
    var tmp_0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    var tmp_1 = this.z2i_1[this.b2j_1 - 1 | 0];
    return new MapEntry(tmp_0, (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE());
  };
  function MapEntry(key, value) {
    this.w2j_1 = key;
    this.x2j_1 = value;
  }
  protoOf(MapEntry).p2 = function () {
    return this.w2j_1;
  };
  protoOf(MapEntry).q2 = function () {
    return this.x2j_1;
  };
  protoOf(MapEntry).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.p2();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.q2();
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    return tmp ^ (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0);
  };
  protoOf(MapEntry).equals = function (other) {
    var tmp0_safe_receiver = (!(other == null) ? isInterface(other, Entry) : false) ? other : null;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.MapEntry.equals.<anonymous>' call
      tmp = equals(tmp0_safe_receiver.p2(), this.p2()) ? equals(tmp0_safe_receiver.q2(), this.q2()) : false;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(MapEntry).toString = function () {
    return toString_0(this.p2()) + '=' + toString_0(this.q2());
  };
  function PersistentHashMapKeys(map) {
    AbstractSet.call(this);
    this.l2k_1 = map;
  }
  protoOf(PersistentHashMapKeys).m = function () {
    return this.l2k_1.m();
  };
  protoOf(PersistentHashMapKeys).n3 = function (element) {
    return this.l2k_1.u2(element);
  };
  protoOf(PersistentHashMapKeys).s = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.n3((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapKeys).o = function () {
    return new PersistentHashMapKeysIterator(this.l2k_1.k2h_1);
  };
  function PersistentHashMapValues(map) {
    AbstractCollection.call(this);
    this.m2k_1 = map;
  }
  protoOf(PersistentHashMapValues).m = function () {
    return this.m2k_1.m();
  };
  protoOf(PersistentHashMapValues).r3 = function (element) {
    return this.m2k_1.v2(element);
  };
  protoOf(PersistentHashMapValues).s = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.r3((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapValues).o = function () {
    return new PersistentHashMapValuesIterator(this.m2k_1.k2h_1);
  };
  function PersistentHashMapEntries(map) {
    AbstractSet.call(this);
    this.n2k_1 = map;
  }
  protoOf(PersistentHashMapEntries).m = function () {
    return this.n2k_1.m();
  };
  protoOf(PersistentHashMapEntries).o2k = function (element) {
    var tmp = !(element == null) ? element : THROW_CCE();
    if (!(!(tmp == null) ? isInterface(tmp, Entry) : false))
      return false;
    var tmp0_safe_receiver = this.n2k_1.x2(element.p2());
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapEntries.contains.<anonymous>' call
      tmp_0 = equals(tmp0_safe_receiver, element.q2());
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? element.q2() == null ? this.n2k_1.u2(element.p2()) : false : tmp1_elvis_lhs;
  };
  protoOf(PersistentHashMapEntries).s = function (element) {
    if (!(!(element == null) ? isInterface(element, Entry) : false))
      return false;
    return this.o2k((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapEntries).o = function () {
    return new PersistentHashMapEntriesIterator(this.n2k_1.k2h_1);
  };
  function TrieNode_init_$Init$(dataMap, nodeMap, buffer, $this) {
    TrieNode.call($this, dataMap, nodeMap, buffer, null);
    return $this;
  }
  function TrieNode_init_$Create$(dataMap, nodeMap, buffer) {
    return TrieNode_init_$Init$(dataMap, nodeMap, buffer, objectCreate(protoOf(TrieNode)));
  }
  function ModificationResult(node, sizeDelta) {
    this.t2h_1 = node;
    this.u2h_1 = sizeDelta;
  }
  function asInsertResult($this) {
    return new ModificationResult($this, 1);
  }
  function asUpdateResult($this) {
    return new ModificationResult($this, 0);
  }
  function hasNodeAt($this, positionMask) {
    return !(($this.n2h_1 & positionMask) === 0);
  }
  function keyAtIndex($this, keyIndex) {
    var tmp = $this.p2h_1[keyIndex];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  }
  function valueAtKeyIndex($this, keyIndex) {
    var tmp = $this.p2h_1[keyIndex + 1 | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  }
  function insertEntryAt($this, positionMask, key, value) {
    var keyIndex = $this.e2j(positionMask);
    var newBuffer = insertEntryAtIndex($this.p2h_1, keyIndex, key, value);
    return TrieNode_init_$Create$($this.m2h_1 | positionMask, $this.n2h_1, newBuffer);
  }
  function mutableInsertEntryAt($this, positionMask, key, value, owner) {
    var keyIndex = $this.e2j(positionMask);
    if ($this.o2h_1 === owner) {
      $this.p2h_1 = insertEntryAtIndex($this.p2h_1, keyIndex, key, value);
      $this.m2h_1 = $this.m2h_1 | positionMask;
      return $this;
    }
    var newBuffer = insertEntryAtIndex($this.p2h_1, keyIndex, key, value);
    return new TrieNode($this.m2h_1 | positionMask, $this.n2h_1, newBuffer, owner);
  }
  function updateValueAtIndex($this, keyIndex, value) {
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var newBuffer = $this.p2h_1.slice();
    newBuffer[keyIndex + 1 | 0] = value;
    return TrieNode_init_$Create$($this.m2h_1, $this.n2h_1, newBuffer);
  }
  function mutableUpdateValueAtIndex($this, keyIndex, value, mutator) {
    if ($this.o2h_1 === mutator.b2i_1) {
      $this.p2h_1[keyIndex + 1 | 0] = value;
      return $this;
    }
    mutator.e2i_1 = mutator.e2i_1 + 1 | 0;
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var newBuffer = $this.p2h_1.slice();
    newBuffer[keyIndex + 1 | 0] = value;
    return new TrieNode($this.m2h_1, $this.n2h_1, newBuffer, mutator.b2i_1);
  }
  function updateNodeAtIndex($this, nodeIndex, positionMask, newNode) {
    var newNodeBuffer = newNode.p2h_1;
    if (newNodeBuffer.length === 2 ? newNode.n2h_1 === 0 : false) {
      if ($this.p2h_1.length === 1) {
        newNode.m2h_1 = $this.n2h_1;
        return newNode;
      }
      var keyIndex = $this.e2j(positionMask);
      var newBuffer = replaceNodeWithEntry($this.p2h_1, nodeIndex, keyIndex, newNodeBuffer[0], newNodeBuffer[1]);
      return TrieNode_init_$Create$($this.m2h_1 ^ positionMask, $this.n2h_1 ^ positionMask, newBuffer);
    }
    var newBuffer_0 = copyOf_0($this.p2h_1, $this.p2h_1.length);
    newBuffer_0[nodeIndex] = newNode;
    return TrieNode_init_$Create$($this.m2h_1, $this.n2h_1, newBuffer_0);
  }
  function mutableUpdateNodeAtIndex($this, nodeIndex, newNode, owner) {
    if (($this.p2h_1.length === 1 ? newNode.p2h_1.length === 2 : false) ? newNode.n2h_1 === 0 : false) {
      newNode.m2h_1 = $this.n2h_1;
      return newNode;
    }
    if ($this.o2h_1 === owner) {
      $this.p2h_1[nodeIndex] = newNode;
      return $this;
    }
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var newBuffer = $this.p2h_1.slice();
    newBuffer[nodeIndex] = newNode;
    return new TrieNode($this.m2h_1, $this.n2h_1, newBuffer, owner);
  }
  function removeNodeAtIndex($this, nodeIndex, positionMask) {
    if ($this.p2h_1.length === 1)
      return null;
    var newBuffer = removeNodeAtIndex_0($this.p2h_1, nodeIndex);
    return TrieNode_init_$Create$($this.m2h_1, $this.n2h_1 ^ positionMask, newBuffer);
  }
  function mutableRemoveNodeAtIndex($this, nodeIndex, positionMask, owner) {
    if ($this.p2h_1.length === 1)
      return null;
    if ($this.o2h_1 === owner) {
      $this.p2h_1 = removeNodeAtIndex_0($this.p2h_1, nodeIndex);
      $this.n2h_1 = $this.n2h_1 ^ positionMask;
      return $this;
    }
    var newBuffer = removeNodeAtIndex_0($this.p2h_1, nodeIndex);
    return new TrieNode($this.m2h_1, $this.n2h_1 ^ positionMask, newBuffer, owner);
  }
  function bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner) {
    var storedKey = keyAtIndex($this, keyIndex);
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = storedKey == null ? null : hashCode(storedKey);
    var storedKeyHash = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var storedValue = valueAtKeyIndex($this, keyIndex);
    var newNode = makeNode($this, storedKeyHash, storedKey, storedValue, newKeyHash, newKey, newValue, shift + 5 | 0, owner);
    var nodeIndex = $this.h2j(positionMask) + 1 | 0;
    return replaceEntryWithNode($this.p2h_1, keyIndex, nodeIndex, newNode);
  }
  function moveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift) {
    var newBuffer = bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, null);
    return TrieNode_init_$Create$($this.m2h_1 ^ positionMask, $this.n2h_1 | positionMask, newBuffer);
  }
  function mutableMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner) {
    if ($this.o2h_1 === owner) {
      $this.p2h_1 = bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner);
      $this.m2h_1 = $this.m2h_1 ^ positionMask;
      $this.n2h_1 = $this.n2h_1 | positionMask;
      return $this;
    }
    var newBuffer = bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner);
    return new TrieNode($this.m2h_1 ^ positionMask, $this.n2h_1 | positionMask, newBuffer, owner);
  }
  function makeNode($this, keyHash1, key1, value1, keyHash2, key2, value2, shift, owner) {
    if (shift > 30) {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$2 = [key1, value1, key2, value2];
      return new TrieNode(0, 0, tmp$ret$2, owner);
    }
    var setBit1 = indexSegment(keyHash1, shift);
    var setBit2 = indexSegment(keyHash2, shift);
    if (!(setBit1 === setBit2)) {
      var tmp;
      if (setBit1 < setBit2) {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = [key1, value1, key2, value2];
      } else {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = [key2, value2, key1, value1];
      }
      var nodeBuffer = tmp;
      return new TrieNode(1 << setBit1 | 1 << setBit2, 0, nodeBuffer, owner);
    }
    var node = makeNode($this, keyHash1, key1, value1, keyHash2, key2, value2, shift + 5 | 0, owner);
    var tmp_0 = 1 << setBit1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$11 = [node];
    return new TrieNode(0, tmp_0, tmp$ret$11, owner);
  }
  function removeEntryAtIndex($this, keyIndex, positionMask) {
    if ($this.p2h_1.length === 2)
      return null;
    var newBuffer = removeEntryAtIndex_0($this.p2h_1, keyIndex);
    return TrieNode_init_$Create$($this.m2h_1 ^ positionMask, $this.n2h_1, newBuffer);
  }
  function mutableRemoveEntryAtIndex($this, keyIndex, positionMask, mutator) {
    var tmp1 = mutator.m();
    mutator.g2i(tmp1 - 1 | 0);
    mutator.d2i_1 = valueAtKeyIndex($this, keyIndex);
    if ($this.p2h_1.length === 2)
      return null;
    if ($this.o2h_1 === mutator.b2i_1) {
      $this.p2h_1 = removeEntryAtIndex_0($this.p2h_1, keyIndex);
      $this.m2h_1 = $this.m2h_1 ^ positionMask;
      return $this;
    }
    var newBuffer = removeEntryAtIndex_0($this.p2h_1, keyIndex);
    return new TrieNode($this.m2h_1 ^ positionMask, $this.n2h_1, newBuffer, mutator.b2i_1);
  }
  function collisionRemoveEntryAtIndex($this, i) {
    if ($this.p2h_1.length === 2)
      return null;
    var newBuffer = removeEntryAtIndex_0($this.p2h_1, i);
    return TrieNode_init_$Create$(0, 0, newBuffer);
  }
  function mutableCollisionRemoveEntryAtIndex($this, i, mutator) {
    var tmp1 = mutator.m();
    mutator.g2i(tmp1 - 1 | 0);
    mutator.d2i_1 = valueAtKeyIndex($this, i);
    if ($this.p2h_1.length === 2)
      return null;
    if ($this.o2h_1 === mutator.b2i_1) {
      $this.p2h_1 = removeEntryAtIndex_0($this.p2h_1, i);
      return $this;
    }
    var newBuffer = removeEntryAtIndex_0($this.p2h_1, i);
    return new TrieNode(0, 0, newBuffer, mutator.b2i_1);
  }
  function collisionContainsKey($this, key) {
    var progression = step(until(0, $this.p2h_1.length), 2);
    var inductionVariable = progression.ba_1;
    var last = progression.ca_1;
    var step_0 = progression.da_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, $this.p2h_1[i]))
          return true;
      }
       while (!(i === last));
    return false;
  }
  function collisionGet($this, key) {
    var progression = step(until(0, $this.p2h_1.length), 2);
    var inductionVariable = progression.ba_1;
    var last = progression.ca_1;
    var step_0 = progression.da_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          return valueAtKeyIndex($this, i);
        }
      }
       while (!(i === last));
    return null;
  }
  function collisionPut($this, key, value) {
    var progression = step(until(0, $this.p2h_1.length), 2);
    var inductionVariable = progression.ba_1;
    var last = progression.ca_1;
    var step_0 = progression.da_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          if (value === valueAtKeyIndex($this, i)) {
            return null;
          }
          // Inline function 'kotlin.collections.copyOf' call
          // Inline function 'kotlin.js.asDynamic' call
          var newBuffer = $this.p2h_1.slice();
          newBuffer[i + 1 | 0] = value;
          return asUpdateResult(TrieNode_init_$Create$(0, 0, newBuffer));
        }
      }
       while (!(i === last));
    var newBuffer_0 = insertEntryAtIndex($this.p2h_1, 0, key, value);
    return asInsertResult(TrieNode_init_$Create$(0, 0, newBuffer_0));
  }
  function mutableCollisionPut($this, key, value, mutator) {
    var progression = step(until(0, $this.p2h_1.length), 2);
    var inductionVariable = progression.ba_1;
    var last = progression.ca_1;
    var step_0 = progression.da_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          mutator.d2i_1 = valueAtKeyIndex($this, i);
          if ($this.o2h_1 === mutator.b2i_1) {
            $this.p2h_1[i + 1 | 0] = value;
            return $this;
          }
          mutator.e2i_1 = mutator.e2i_1 + 1 | 0;
          // Inline function 'kotlin.collections.copyOf' call
          // Inline function 'kotlin.js.asDynamic' call
          var newBuffer = $this.p2h_1.slice();
          newBuffer[i + 1 | 0] = value;
          return new TrieNode(0, 0, newBuffer, mutator.b2i_1);
        }
      }
       while (!(i === last));
    var tmp4 = mutator.m();
    mutator.g2i(tmp4 + 1 | 0);
    var newBuffer_0 = insertEntryAtIndex($this.p2h_1, 0, key, value);
    return new TrieNode(0, 0, newBuffer_0, mutator.b2i_1);
  }
  function collisionRemove($this, key) {
    var progression = step(until(0, $this.p2h_1.length), 2);
    var inductionVariable = progression.ba_1;
    var last = progression.ca_1;
    var step_0 = progression.da_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          return collisionRemoveEntryAtIndex($this, i);
        }
      }
       while (!(i === last));
    return $this;
  }
  function mutableCollisionRemove($this, key, mutator) {
    var progression = step(until(0, $this.p2h_1.length), 2);
    var inductionVariable = progression.ba_1;
    var last = progression.ca_1;
    var step_0 = progression.da_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          return mutableCollisionRemoveEntryAtIndex($this, i, mutator);
        }
      }
       while (!(i === last));
    return $this;
  }
  function mutableCollisionRemove_0($this, key, value, mutator) {
    var progression = step(until(0, $this.p2h_1.length), 2);
    var inductionVariable = progression.ba_1;
    var last = progression.ca_1;
    var step_0 = progression.da_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i)) ? equals(value, valueAtKeyIndex($this, i)) : false) {
          return mutableCollisionRemoveEntryAtIndex($this, i, mutator);
        }
      }
       while (!(i === last));
    return $this;
  }
  function mutableCollisionPutAll($this, otherNode, intersectionCounter, owner) {
    assert($this.n2h_1 === 0);
    assert($this.m2h_1 === 0);
    assert(otherNode.n2h_1 === 0);
    assert(otherNode.m2h_1 === 0);
    var tempBuffer = copyOf_0($this.p2h_1, $this.p2h_1.length + otherNode.p2h_1.length | 0);
    var i = $this.p2h_1.length;
    var progression = step(until(0, otherNode.p2h_1.length), 2);
    var inductionVariable = progression.ba_1;
    var last = progression.ca_1;
    var step_0 = progression.da_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var j = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        var tmp = otherNode.p2h_1[j];
        if (!collisionContainsKey($this, (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE())) {
          tempBuffer[i] = otherNode.p2h_1[j];
          tempBuffer[i + 1 | 0] = otherNode.p2h_1[j + 1 | 0];
          i = i + 2 | 0;
        } else {
          intersectionCounter.j2i_1 = intersectionCounter.j2i_1 + 1 | 0;
        }
      }
       while (!(j === last));
    var newSize = i;
    return newSize === $this.p2h_1.length ? $this : newSize === otherNode.p2h_1.length ? otherNode : newSize === tempBuffer.length ? new TrieNode(0, 0, tempBuffer, owner) : new TrieNode(0, 0, copyOf_0(tempBuffer, newSize), owner);
  }
  function mutablePutAllFromOtherNodeCell($this, otherNode, positionMask, shift, intersectionCounter, mutator) {
    var tmp;
    if (hasNodeAt($this, positionMask)) {
      var targetNode = $this.i2j($this.h2j(positionMask));
      var tmp_0;
      if (hasNodeAt(otherNode, positionMask)) {
        var otherTargetNode = otherNode.i2j(otherNode.h2j(positionMask));
        tmp_0 = targetNode.i2i(otherTargetNode, shift + 5 | 0, intersectionCounter, mutator);
      } else if (otherNode.g2j(positionMask)) {
        var keyIndex = otherNode.e2j(positionMask);
        var key = keyAtIndex(otherNode, keyIndex);
        var value = valueAtKeyIndex(otherNode, keyIndex);
        var oldSize = mutator.m();
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.hashCode' call
        var tmp1_elvis_lhs = key == null ? null : hashCode(key);
        var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
        var this_0 = targetNode.h2i(tmp$ret$0, key, value, shift + 5 | 0, mutator);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.mutablePutAllFromOtherNodeCell.<anonymous>' call
        if (mutator.m() === oldSize) {
          intersectionCounter.j2i_1 = intersectionCounter.j2i_1 + 1 | 0;
        }
        tmp_0 = this_0;
      } else {
        tmp_0 = targetNode;
      }
      tmp = tmp_0;
    } else if (hasNodeAt(otherNode, positionMask)) {
      var otherTargetNode_0 = otherNode.i2j(otherNode.h2j(positionMask));
      var tmp_1;
      if ($this.g2j(positionMask)) {
        var keyIndex_0 = $this.e2j(positionMask);
        var key_0 = keyAtIndex($this, keyIndex_0);
        var tmp_2;
        // Inline function 'kotlin.hashCode' call
        var tmp1_elvis_lhs_0 = key_0 == null ? null : hashCode(key_0);
        var tmp$ret$2 = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
        if (otherTargetNode_0.q2h(tmp$ret$2, key_0, shift + 5 | 0)) {
          intersectionCounter.j2i_1 = intersectionCounter.j2i_1 + 1 | 0;
          tmp_2 = otherTargetNode_0;
        } else {
          var value_0 = valueAtKeyIndex($this, keyIndex_0);
          // Inline function 'kotlin.hashCode' call
          var tmp1_elvis_lhs_1 = key_0 == null ? null : hashCode(key_0);
          var tmp$ret$3 = tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1;
          tmp_2 = otherTargetNode_0.h2i(tmp$ret$3, key_0, value_0, shift + 5 | 0, mutator);
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = otherTargetNode_0;
      }
      tmp = tmp_1;
    } else {
      var thisKeyIndex = $this.e2j(positionMask);
      var thisKey = keyAtIndex($this, thisKeyIndex);
      var thisValue = valueAtKeyIndex($this, thisKeyIndex);
      var otherKeyIndex = otherNode.e2j(positionMask);
      var otherKey = keyAtIndex(otherNode, otherKeyIndex);
      var otherValue = valueAtKeyIndex(otherNode, otherKeyIndex);
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs_2 = thisKey == null ? null : hashCode(thisKey);
      var tmp_3 = tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2;
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs_3 = otherKey == null ? null : hashCode(otherKey);
      var tmp$ret$5 = tmp1_elvis_lhs_3 == null ? 0 : tmp1_elvis_lhs_3;
      tmp = makeNode($this, tmp_3, thisKey, thisValue, tmp$ret$5, otherKey, otherValue, shift + 5 | 0, mutator.b2i_1);
    }
    return tmp;
  }
  function calculateSize($this) {
    if ($this.n2h_1 === 0)
      return $this.p2h_1.length / 2 | 0;
    var numValues = countOneBits($this.m2h_1);
    var result = numValues;
    var inductionVariable = imul(numValues, 2);
    var last = $this.p2h_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result = result + calculateSize($this.i2j(i)) | 0;
      }
       while (inductionVariable < last);
    return result;
  }
  function elementsIdentityEquals($this, otherNode) {
    if ($this === otherNode)
      return true;
    if (!($this.n2h_1 === otherNode.n2h_1))
      return false;
    if (!($this.m2h_1 === otherNode.m2h_1))
      return false;
    var inductionVariable = 0;
    var last = $this.p2h_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!($this.p2h_1[i] === otherNode.p2h_1[i]))
          return false;
      }
       while (inductionVariable < last);
    return true;
  }
  function replaceNode($this, targetNode, newNode, nodeIndex, positionMask) {
    return newNode == null ? removeNodeAtIndex($this, nodeIndex, positionMask) : !(targetNode === newNode) ? updateNodeAtIndex($this, nodeIndex, positionMask, newNode) : $this;
  }
  function mutableReplaceNode($this, targetNode, newNode, nodeIndex, positionMask, owner) {
    return newNode == null ? mutableRemoveNodeAtIndex($this, nodeIndex, positionMask, owner) : ($this.o2h_1 === owner ? true : !(targetNode === newNode)) ? mutableUpdateNodeAtIndex($this, nodeIndex, newNode, owner) : $this;
  }
  function Companion_8() {
    Companion_instance_9 = this;
    var tmp = this;
    // Inline function 'kotlin.emptyArray' call
    var tmp$ret$0 = [];
    tmp.h2h_1 = TrieNode_init_$Create$(0, 0, tmp$ret$0);
  }
  var Companion_instance_9;
  function Companion_getInstance_9() {
    if (Companion_instance_9 == null)
      new Companion_8();
    return Companion_instance_9;
  }
  function TrieNode(dataMap, nodeMap, buffer, ownedBy) {
    Companion_getInstance_9();
    this.m2h_1 = dataMap;
    this.n2h_1 = nodeMap;
    this.o2h_1 = ownedBy;
    this.p2h_1 = buffer;
  }
  protoOf(TrieNode).f2j = function () {
    return countOneBits(this.m2h_1);
  };
  protoOf(TrieNode).g2j = function (positionMask) {
    return !((this.m2h_1 & positionMask) === 0);
  };
  protoOf(TrieNode).e2j = function (positionMask) {
    return imul(2, countOneBits(this.m2h_1 & (positionMask - 1 | 0)));
  };
  protoOf(TrieNode).h2j = function (positionMask) {
    return (this.p2h_1.length - 1 | 0) - countOneBits(this.n2h_1 & (positionMask - 1 | 0)) | 0;
  };
  protoOf(TrieNode).i2j = function (nodeIndex) {
    var tmp = this.p2h_1[nodeIndex];
    return tmp instanceof TrieNode ? tmp : THROW_CCE();
  };
  protoOf(TrieNode).q2h = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment(keyHash, shift);
    if (this.g2j(keyPositionMask)) {
      return equals(key, keyAtIndex(this, this.e2j(keyPositionMask)));
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var targetNode = this.i2j(this.h2j(keyPositionMask));
      if (shift === 30) {
        return collisionContainsKey(targetNode, key);
      }
      return targetNode.q2h(keyHash, key, shift + 5 | 0);
    }
    return false;
  };
  protoOf(TrieNode).r2h = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment(keyHash, shift);
    if (this.g2j(keyPositionMask)) {
      var keyIndex = this.e2j(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return valueAtKeyIndex(this, keyIndex);
      }
      return null;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var targetNode = this.i2j(this.h2j(keyPositionMask));
      if (shift === 30) {
        return collisionGet(targetNode, key);
      }
      return targetNode.r2h(keyHash, key, shift + 5 | 0);
    }
    return null;
  };
  protoOf(TrieNode).i2i = function (otherNode, shift, intersectionCounter, mutator) {
    if (this === otherNode) {
      intersectionCounter.p2k(calculateSize(this));
      return this;
    }
    if (shift > 30) {
      return mutableCollisionPutAll(this, otherNode, intersectionCounter, mutator.b2i_1);
    }
    var newNodeMap = this.n2h_1 | otherNode.n2h_1;
    var newDataMap = (this.m2h_1 ^ otherNode.m2h_1) & ~newNodeMap;
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.internal.forEachOneBit' call
    var mask = this.m2h_1 & otherNode.m2h_1;
    var index = 0;
    while (!(mask === 0)) {
      var bit = takeLowestOneBit(mask);
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.mutablePutAll.<anonymous>' call
      var leftKey = keyAtIndex(this, this.e2j(bit));
      var rightKey = keyAtIndex(otherNode, otherNode.e2j(bit));
      if (equals(leftKey, rightKey))
        newDataMap = newDataMap | bit;
      else
        newNodeMap = newNodeMap | bit;
      index = index + 1 | 0;
      mask = mask ^ bit;
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!((newNodeMap & newDataMap) === 0)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp;
    if ((equals(this.o2h_1, mutator.b2i_1) ? this.m2h_1 === newDataMap : false) ? this.n2h_1 === newNodeMap : false) {
      tmp = this;
    } else {
      // Inline function 'kotlin.arrayOfNulls' call
      var size = imul(countOneBits(newDataMap), 2) + countOneBits(newNodeMap) | 0;
      var newBuffer = fillArrayVal(Array(size), null);
      tmp = TrieNode_init_$Create$(newDataMap, newNodeMap, newBuffer);
    }
    var mutableNode = tmp;
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.internal.forEachOneBit' call
    var mask_0 = newNodeMap;
    var index_0 = 0;
    while (!(mask_0 === 0)) {
      var bit_0 = takeLowestOneBit(mask_0);
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.mutablePutAll.<anonymous>' call
      var index_1 = index_0;
      var newNodeIndex = (mutableNode.p2h_1.length - 1 | 0) - index_1 | 0;
      mutableNode.p2h_1[newNodeIndex] = mutablePutAllFromOtherNodeCell(this, otherNode, bit_0, shift, intersectionCounter, mutator);
      index_0 = index_0 + 1 | 0;
      mask_0 = mask_0 ^ bit_0;
    }
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.internal.forEachOneBit' call
    var mask_1 = newDataMap;
    var index_2 = 0;
    while (!(mask_1 === 0)) {
      var bit_1 = takeLowestOneBit(mask_1);
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.mutablePutAll.<anonymous>' call
      var index_3 = index_2;
      var newKeyIndex = imul(index_3, 2);
      if (!otherNode.g2j(bit_1)) {
        var oldKeyIndex = this.e2j(bit_1);
        mutableNode.p2h_1[newKeyIndex] = keyAtIndex(this, oldKeyIndex);
        mutableNode.p2h_1[newKeyIndex + 1 | 0] = valueAtKeyIndex(this, oldKeyIndex);
      } else {
        var oldKeyIndex_0 = otherNode.e2j(bit_1);
        mutableNode.p2h_1[newKeyIndex] = keyAtIndex(otherNode, oldKeyIndex_0);
        mutableNode.p2h_1[newKeyIndex + 1 | 0] = valueAtKeyIndex(otherNode, oldKeyIndex_0);
        if (this.g2j(bit_1)) {
          intersectionCounter.j2i_1 = intersectionCounter.j2i_1 + 1 | 0;
        }
      }
      index_2 = index_2 + 1 | 0;
      mask_1 = mask_1 ^ bit_1;
    }
    return elementsIdentityEquals(this, mutableNode) ? this : elementsIdentityEquals(otherNode, mutableNode) ? otherNode : mutableNode;
  };
  protoOf(TrieNode).s2h = function (keyHash, key, value, shift) {
    var keyPositionMask = 1 << indexSegment(keyHash, shift);
    if (this.g2j(keyPositionMask)) {
      var keyIndex = this.e2j(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        if (valueAtKeyIndex(this, keyIndex) === value)
          return null;
        return asUpdateResult(updateValueAtIndex(this, keyIndex, value));
      }
      return asInsertResult(moveEntryToNode(this, keyIndex, keyPositionMask, keyHash, key, value, shift));
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.h2j(keyPositionMask);
      var targetNode = this.i2j(nodeIndex);
      var tmp;
      if (shift === 30) {
        var tmp0_elvis_lhs = collisionPut(targetNode, key, value);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp = tmp_0;
      } else {
        var tmp1_elvis_lhs = targetNode.s2h(keyHash, key, value, shift + 5 | 0);
        var tmp_1;
        if (tmp1_elvis_lhs == null) {
          return null;
        } else {
          tmp_1 = tmp1_elvis_lhs;
        }
        tmp = tmp_1;
      }
      var putResult = tmp;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.ModificationResult.replaceNode' call
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.ModificationResult.replaceNode.<anonymous>' call
      var tmp_2 = putResult;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.put.<anonymous>' call
      var node = putResult.t2h_1;
      tmp_2.t2h_1 = updateNodeAtIndex(this, nodeIndex, keyPositionMask, node);
      return putResult;
    }
    return asInsertResult(insertEntryAt(this, keyPositionMask, key, value));
  };
  protoOf(TrieNode).h2i = function (keyHash, key, value, shift, mutator) {
    var keyPositionMask = 1 << indexSegment(keyHash, shift);
    if (this.g2j(keyPositionMask)) {
      var keyIndex = this.e2j(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        mutator.d2i_1 = valueAtKeyIndex(this, keyIndex);
        if (valueAtKeyIndex(this, keyIndex) === value) {
          return this;
        }
        return mutableUpdateValueAtIndex(this, keyIndex, value, mutator);
      }
      var tmp1 = mutator.m();
      mutator.g2i(tmp1 + 1 | 0);
      return mutableMoveEntryToNode(this, keyIndex, keyPositionMask, keyHash, key, value, shift, mutator.b2i_1);
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.h2j(keyPositionMask);
      var targetNode = this.i2j(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = mutableCollisionPut(targetNode, key, value, mutator);
      } else {
        tmp = targetNode.h2i(keyHash, key, value, shift + 5 | 0, mutator);
      }
      var newNode = tmp;
      if (targetNode === newNode) {
        return this;
      }
      return mutableUpdateNodeAtIndex(this, nodeIndex, newNode, mutator.b2i_1);
    }
    var tmp3 = mutator.m();
    mutator.g2i(tmp3 + 1 | 0);
    return mutableInsertEntryAt(this, keyPositionMask, key, value, mutator.b2i_1);
  };
  protoOf(TrieNode).v2h = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment(keyHash, shift);
    if (this.g2j(keyPositionMask)) {
      var keyIndex = this.e2j(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return removeEntryAtIndex(this, keyIndex, keyPositionMask);
      }
      return this;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.h2j(keyPositionMask);
      var targetNode = this.i2j(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = collisionRemove(targetNode, key);
      } else {
        tmp = targetNode.v2h(keyHash, key, shift + 5 | 0);
      }
      var newNode = tmp;
      return replaceNode(this, targetNode, newNode, nodeIndex, keyPositionMask);
    }
    return this;
  };
  protoOf(TrieNode).k2i = function (keyHash, key, shift, mutator) {
    var keyPositionMask = 1 << indexSegment(keyHash, shift);
    if (this.g2j(keyPositionMask)) {
      var keyIndex = this.e2j(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return mutableRemoveEntryAtIndex(this, keyIndex, keyPositionMask, mutator);
      }
      return this;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.h2j(keyPositionMask);
      var targetNode = this.i2j(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = mutableCollisionRemove(targetNode, key, mutator);
      } else {
        tmp = targetNode.k2i(keyHash, key, shift + 5 | 0, mutator);
      }
      var newNode = tmp;
      return mutableReplaceNode(this, targetNode, newNode, nodeIndex, keyPositionMask, mutator.b2i_1);
    }
    return this;
  };
  protoOf(TrieNode).m2i = function (keyHash, key, value, shift, mutator) {
    var keyPositionMask = 1 << indexSegment(keyHash, shift);
    if (this.g2j(keyPositionMask)) {
      var keyIndex = this.e2j(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex)) ? equals(value, valueAtKeyIndex(this, keyIndex)) : false) {
        return mutableRemoveEntryAtIndex(this, keyIndex, keyPositionMask, mutator);
      }
      return this;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.h2j(keyPositionMask);
      var targetNode = this.i2j(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = mutableCollisionRemove_0(targetNode, key, value, mutator);
      } else {
        tmp = targetNode.m2i(keyHash, key, value, shift + 5 | 0, mutator);
      }
      var newNode = tmp;
      return mutableReplaceNode(this, targetNode, newNode, nodeIndex, keyPositionMask, mutator.b2i_1);
    }
    return this;
  };
  function get_ENTRY_SIZE() {
    return ENTRY_SIZE;
  }
  var ENTRY_SIZE;
  function insertEntryAtIndex(_this__u8e3s4, keyIndex, key, value) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = _this__u8e3s4.length + 2 | 0;
    var newBuffer = fillArrayVal(Array(size), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = keyIndex + 2 | 0;
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, destinationOffset, keyIndex, endIndex);
    newBuffer[keyIndex] = key;
    newBuffer[keyIndex + 1 | 0] = value;
    return newBuffer;
  }
  function replaceNodeWithEntry(_this__u8e3s4, nodeIndex, keyIndex, key, value) {
    var newBuffer = copyOf_0(_this__u8e3s4, _this__u8e3s4.length + 1 | 0);
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = nodeIndex + 2 | 0;
    var startIndex = nodeIndex + 1 | 0;
    var endIndex = _this__u8e3s4.length;
    arrayCopy(newBuffer, newBuffer, destinationOffset, startIndex, endIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset_0 = keyIndex + 2 | 0;
    arrayCopy(newBuffer, newBuffer, destinationOffset_0, keyIndex, nodeIndex);
    newBuffer[keyIndex] = key;
    newBuffer[keyIndex + 1 | 0] = value;
    return newBuffer;
  }
  function removeNodeAtIndex_0(_this__u8e3s4, nodeIndex) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = _this__u8e3s4.length - 1 | 0;
    var newBuffer = fillArrayVal(Array(size), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, nodeIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var startIndex = nodeIndex + 1 | 0;
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, nodeIndex, startIndex, endIndex);
    return newBuffer;
  }
  function get_LOG_MAX_BRANCHING_FACTOR() {
    return LOG_MAX_BRANCHING_FACTOR;
  }
  var LOG_MAX_BRANCHING_FACTOR;
  function replaceEntryWithNode(_this__u8e3s4, keyIndex, nodeIndex, newNode) {
    var newNodeIndex = nodeIndex - 2 | 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = (_this__u8e3s4.length - 2 | 0) + 1 | 0;
    var newBuffer = fillArrayVal(Array(size), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var startIndex = keyIndex + 2 | 0;
    arrayCopy(_this__u8e3s4, newBuffer, keyIndex, startIndex, nodeIndex);
    newBuffer[newNodeIndex] = newNode;
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = newNodeIndex + 1 | 0;
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, destinationOffset, nodeIndex, endIndex);
    return newBuffer;
  }
  function get_MAX_SHIFT() {
    return MAX_SHIFT;
  }
  var MAX_SHIFT;
  function indexSegment(index, shift) {
    return index >> shift & 31;
  }
  function removeEntryAtIndex_0(_this__u8e3s4, keyIndex) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = _this__u8e3s4.length - 2 | 0;
    var newBuffer = fillArrayVal(Array(size), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var startIndex = keyIndex + 2 | 0;
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, keyIndex, startIndex, endIndex);
    return newBuffer;
  }
  function Companion_9() {
    Companion_instance_10 = this;
    this.d2h_1 = new PersistentOrderedSet(EndOfChain_instance, EndOfChain_instance, Companion_getInstance_8().g2h());
  }
  protoOf(Companion_9).e2h = function () {
    return this.d2h_1;
  };
  var Companion_instance_10;
  function Companion_getInstance_10() {
    if (Companion_instance_10 == null)
      new Companion_9();
    return Companion_instance_10;
  }
  function PersistentOrderedSet(firstElement, lastElement, hashMap) {
    Companion_getInstance_10();
    AbstractSet.call(this);
    this.q2k_1 = firstElement;
    this.r2k_1 = lastElement;
    this.s2k_1 = hashMap;
  }
  protoOf(PersistentOrderedSet).m = function () {
    return this.s2k_1.m();
  };
  protoOf(PersistentOrderedSet).s = function (element) {
    return this.s2k_1.u2(element);
  };
  protoOf(PersistentOrderedSet).a1 = function (element) {
    if (this.s2k_1.u2(element)) {
      return this;
    }
    if (this.u()) {
      var newMap = this.s2k_1.n2(element, Links_init_$Create$());
      return new PersistentOrderedSet(element, element, newMap);
    }
    var tmp = this.r2k_1;
    var lastElement = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    var lastLinks = ensureNotNull(this.s2k_1.x2(lastElement));
    var newMap_0 = this.s2k_1.n2(lastElement, lastLinks.v2k(element)).n2(element, Links_init_$Create$_0(lastElement));
    return new PersistentOrderedSet(this.q2k_1, element, newMap_0);
  };
  protoOf(PersistentOrderedSet).b1 = function (element) {
    var tmp0_elvis_lhs = this.s2k_1.x2(element);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var links = tmp;
    var newMap = this.s2k_1.r2(element);
    if (links.w2k()) {
      // Inline function 'kotlin.collections.get' call
      var this_0 = newMap;
      var key = links.t2k_1;
      var tmp$ret$0 = (isInterface(this_0, Map) ? this_0 : THROW_CCE()).x2(key);
      var previousLinks = ensureNotNull(tmp$ret$0);
      var tmp_0 = newMap;
      var tmp_1 = links.t2k_1;
      newMap = tmp_0.n2((tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE(), previousLinks.v2k(links.u2k_1));
    }
    if (links.y2k()) {
      // Inline function 'kotlin.collections.get' call
      var this_1 = newMap;
      var key_0 = links.u2k_1;
      var tmp$ret$1 = (isInterface(this_1, Map) ? this_1 : THROW_CCE()).x2(key_0);
      var nextLinks = ensureNotNull(tmp$ret$1);
      var tmp_2 = newMap;
      var tmp_3 = links.u2k_1;
      newMap = tmp_2.n2((tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE(), nextLinks.x2k(links.t2k_1));
    }
    var newFirstElement = !links.w2k() ? links.u2k_1 : this.q2k_1;
    var newLastElement = !links.y2k() ? links.t2k_1 : this.r2k_1;
    return new PersistentOrderedSet(newFirstElement, newLastElement, newMap);
  };
  protoOf(PersistentOrderedSet).o = function () {
    return new PersistentOrderedSetIterator(this.q2k_1, this.s2k_1);
  };
  function Links_init_$Init$($this) {
    Links.call($this, EndOfChain_instance, EndOfChain_instance);
    return $this;
  }
  function Links_init_$Create$() {
    return Links_init_$Init$(objectCreate(protoOf(Links)));
  }
  function Links_init_$Init$_0(previous, $this) {
    Links.call($this, previous, EndOfChain_instance);
    return $this;
  }
  function Links_init_$Create$_0(previous) {
    return Links_init_$Init$_0(previous, objectCreate(protoOf(Links)));
  }
  function Links(previous, next) {
    this.t2k_1 = previous;
    this.u2k_1 = next;
  }
  protoOf(Links).v2k = function (newNext) {
    return new Links(this.t2k_1, newNext);
  };
  protoOf(Links).x2k = function (newPrevious) {
    return new Links(newPrevious, this.u2k_1);
  };
  protoOf(Links).y2k = function () {
    return !(this.u2k_1 === EndOfChain_instance);
  };
  protoOf(Links).w2k = function () {
    return !(this.t2k_1 === EndOfChain_instance);
  };
  function checkHasNext_0($this) {
    if (!$this.d1())
      throw NoSuchElementException_init_$Create$_0();
  }
  function PersistentOrderedSetIterator(nextElement, map) {
    this.z2k_1 = nextElement;
    this.a2l_1 = map;
    this.b2l_1 = 0;
  }
  protoOf(PersistentOrderedSetIterator).d1 = function () {
    return this.b2l_1 < this.a2l_1.m();
  };
  protoOf(PersistentOrderedSetIterator).f1 = function () {
    checkHasNext_0(this);
    var tmp = this.z2k_1;
    var result = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    this.b2l_1 = this.b2l_1 + 1 | 0;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.getOrElse' call
    var tmp0_elvis_lhs = this.a2l_1.x2(result);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      throw ConcurrentModificationException_init_$Create$_0('Hash code of an element (' + result + ') has changed after it was added to the persistent set.');
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    tmp_0.z2k_1 = tmp_1.u2k_1;
    return result;
  };
  function EndOfChain() {
  }
  var EndOfChain_instance;
  function EndOfChain_getInstance() {
    return EndOfChain_instance;
  }
  function MutabilityOwnership() {
  }
  function DeltaCounter(count) {
    count = count === VOID ? 0 : count;
    this.j2i_1 = count;
  }
  protoOf(DeltaCounter).p2k = function (that) {
    this.j2i_1 = this.j2i_1 + that | 0;
  };
  protoOf(DeltaCounter).toString = function () {
    return 'DeltaCounter(count=' + this.j2i_1 + ')';
  };
  protoOf(DeltaCounter).hashCode = function () {
    return this.j2i_1;
  };
  protoOf(DeltaCounter).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DeltaCounter))
      return false;
    var tmp0_other_with_cast = other instanceof DeltaCounter ? other : THROW_CCE();
    if (!(this.j2i_1 === tmp0_other_with_cast.j2i_1))
      return false;
    return true;
  };
  function assert(condition) {
  }
  function composableLambdaInstance(key, tracked, block) {
    return new ComposableLambdaImpl(key, tracked, block);
  }
  function replacableWith(_this__u8e3s4, other) {
    var tmp;
    if (_this__u8e3s4 == null) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      if (_this__u8e3s4 instanceof RecomposeScopeImpl) {
        tmp_1 = other instanceof RecomposeScopeImpl;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = (!_this__u8e3s4.y1w() ? true : equals(_this__u8e3s4, other)) ? true : equals(_this__u8e3s4.a1h_1, other.a1h_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function differentBits(slot) {
    return bitsForSlot(2, slot);
  }
  function sameBits(slot) {
    return bitsForSlot(1, slot);
  }
  function bitsForSlot(bits, slot) {
    var realSlot = slot % 10 | 0;
    return bits << (imul(realSlot, 3) + 1 | 0);
  }
  function composableLambda(composer, key, tracked, block) {
    // Inline function 'androidx.compose.runtime.rol' call
    var tmp$ret$0 = rotateLeft(key, 1);
    composer.a1s(tmp$ret$0);
    var slot = composer.m1t();
    var tmp;
    if (slot === Companion_getInstance_0().s1m_1) {
      var value = new ComposableLambdaImpl(key, tracked, block);
      composer.s1t(value);
      tmp = value;
    } else {
      if (!(slot instanceof ComposableLambdaImpl))
        THROW_CCE();
      slot.h2l(block);
      tmp = slot;
    }
    var result = tmp;
    composer.b1s();
    return result;
  }
  function IntRef(element) {
    element = element === VOID ? 0 : element;
    this.o2d_1 = element;
  }
  protoOf(IntRef).toString = function () {
    return 'IntRef(element = ' + this.o2d_1 + ')@' + toString_1(hashCode(this), 16);
  };
  function Builder(map) {
    PersistentHashMapBuilder.call(this, map);
    this.s2l_1 = map;
  }
  protoOf(Builder).e3 = function () {
    var tmp = this;
    var tmp_0;
    if (this.c2i_1 === this.s2l_1.k2h_1) {
      tmp_0 = this.s2l_1;
    } else {
      this.b2i_1 = new MutabilityOwnership();
      tmp_0 = new PersistentCompositionLocalHashMap(this.c2i_1, this.m());
    }
    tmp.s2l_1 = tmp_0;
    return this.s2l_1;
  };
  function Companion_10() {
    Companion_instance_11 = this;
    var tmp = this;
    var tmp_0 = Companion_getInstance_9().h2h_1;
    tmp.t2l_1 = new PersistentCompositionLocalHashMap(tmp_0 instanceof TrieNode ? tmp_0 : THROW_CCE(), 0);
  }
  var Companion_instance_11;
  function Companion_getInstance_11() {
    if (Companion_instance_11 == null)
      new Companion_10();
    return Companion_instance_11;
  }
  function PersistentCompositionLocalHashMap(node, size) {
    Companion_getInstance_11();
    PersistentHashMap.call(this, node, size);
  }
  protoOf(PersistentCompositionLocalHashMap).m2 = function () {
    return protoOf(PersistentHashMap).m2.call(this);
  };
  protoOf(PersistentCompositionLocalHashMap).u2l = function (key) {
    return read(this, key);
  };
  protoOf(PersistentCompositionLocalHashMap).t1t = function (key, value) {
    var tmp0_elvis_lhs = this.k2h_1.s2h(hashCode(key), key, value, 0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var newNodeResult = tmp;
    return new PersistentCompositionLocalHashMap(newNodeResult.t2h_1, this.m() + newNodeResult.u2h_1 | 0);
  };
  protoOf(PersistentCompositionLocalHashMap).j1m = function () {
    return new Builder(this);
  };
  function persistentCompositionLocalHashMapOf() {
    return Companion_getInstance_11().t2l_1;
  }
  function get_emptyThreadMap() {
    _init_properties_ThreadMap_jvm_kt__b3bhkj();
    return emptyThreadMap;
  }
  var emptyThreadMap;
  function find_2($this, key) {
    var high = $this.p29_1 - 1 | 0;
    var tmp0_subject = high;
    if (tmp0_subject === -1)
      return -1;
    else if (tmp0_subject === 0)
      return $this.q29_1[0].equals(key) ? 0 : $this.q29_1[0].x9(key) > 0 ? -2 : -1;
    var low = 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = $this.q29_1[mid];
      var comparison = midVal.fb(key);
      if (comparison.x9(new Long(0, 0)) < 0)
        low = mid + 1 | 0;
      else if (comparison.x9(new Long(0, 0)) > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function ThreadMap(size, keys, values) {
    this.p29_1 = size;
    this.q29_1 = keys;
    this.r29_1 = values;
  }
  protoOf(ThreadMap).ho = function (key) {
    var index = find_2(this, key);
    return index >= 0 ? this.r29_1[index] : null;
  };
  protoOf(ThreadMap).s29 = function (key, value) {
    var index = find_2(this, key);
    if (index < 0)
      return false;
    this.r29_1[index] = value;
    return true;
  };
  protoOf(ThreadMap).t29 = function (key, value) {
    var size = this.p29_1;
    // Inline function 'kotlin.collections.count' call
    var count = 0;
    var indexedObject = this.r29_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.runtime.internal.ThreadMap.newWith.<anonymous>' call
      if (!(element == null)) {
        count = count + 1 | 0;
      }
    }
    var newSize = count + 1 | 0;
    var newKeys = longArray(newSize);
    // Inline function 'kotlin.arrayOfNulls' call
    var newValues = fillArrayVal(Array(newSize), null);
    if (newSize > 1) {
      var dest = 0;
      var source = 0;
      $l$loop: while (dest < newSize ? source < size : false) {
        var oldKey = this.q29_1[source];
        var oldValue = this.r29_1[source];
        if (oldKey.x9(key) > 0) {
          newKeys[dest] = key;
          newValues[dest] = value;
          dest = dest + 1 | 0;
          break $l$loop;
        }
        if (!(oldValue == null)) {
          newKeys[dest] = oldKey;
          newValues[dest] = oldValue;
          dest = dest + 1 | 0;
        }
        source = source + 1 | 0;
      }
      if (source === size) {
        newKeys[newSize - 1 | 0] = key;
        newValues[newSize - 1 | 0] = value;
      } else {
        while (dest < newSize) {
          var oldKey_0 = this.q29_1[source];
          var oldValue_0 = this.r29_1[source];
          if (!(oldValue_0 == null)) {
            newKeys[dest] = oldKey_0;
            newValues[dest] = oldValue_0;
            dest = dest + 1 | 0;
          }
          source = source + 1 | 0;
        }
      }
    } else {
      newKeys[0] = key;
      newValues[0] = value;
    }
    return new ThreadMap(newSize, newKeys, newValues);
  };
  var properties_initialized_ThreadMap_jvm_kt_y907p1;
  function _init_properties_ThreadMap_jvm_kt__b3bhkj() {
    if (!properties_initialized_ThreadMap_jvm_kt_y907p1) {
      properties_initialized_ThreadMap_jvm_kt_y907p1 = true;
      var tmp = longArray(0);
      // Inline function 'kotlin.emptyArray' call
      var tmp$ret$0 = [];
      emptyThreadMap = new ThreadMap(0, tmp, tmp$ret$0);
    }
  }
  function fastJoinToString(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return fastJoinTo(_this__u8e3s4, StringBuilder_init_$Create$(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function fastToSet(_this__u8e3s4) {
    // Inline function 'kotlin.also' call
    var this_0 = HashSet_init_$Create$_0(_this__u8e3s4.m());
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.fastToSet.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.m() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.n(index);
        // Inline function 'androidx.compose.runtime.snapshots.fastToSet.<anonymous>.<anonymous>' call
        this_0.a1(item);
      }
       while (inductionVariable <= last);
    return this_0;
  }
  function fastJoinTo(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    buffer.m8(prefix);
    var count = 0;
    var inductionVariable = 0;
    var last = _this__u8e3s4.m() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = _this__u8e3s4.n(index);
        count = count + 1 | 0;
        if (count > 1) {
          buffer.m8(separator);
        }
        if (limit < 0 ? true : count <= limit) {
          appendElement(buffer, element, transform);
        } else
          break $l$loop;
      }
       while (inductionVariable <= last);
    if (limit >= 0 ? count > limit : false) {
      buffer.m8(truncated);
    }
    buffer.m8(postfix);
    return buffer;
  }
  function appendElement(_this__u8e3s4, element, transform) {
    if (!(transform == null)) {
      _this__u8e3s4.m8(transform(element));
    } else {
      if (element == null ? true : isCharSequence(element)) {
        _this__u8e3s4.m8(element);
      } else {
        if (element instanceof Char) {
          _this__u8e3s4.y5(element.ja_1);
        } else {
          _this__u8e3s4.m8(toString_0(element));
        }
      }
    }
  }
  function get_emptyLambda() {
    _init_properties_Snapshot_kt__l6n1ng();
    return emptyLambda;
  }
  var emptyLambda;
  function get_threadSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    return threadSnapshot;
  }
  var threadSnapshot;
  function get_lock() {
    _init_properties_Snapshot_kt__l6n1ng();
    return lock;
  }
  var lock;
  function set_openSnapshots(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    openSnapshots = _set____db54di;
  }
  function get_openSnapshots() {
    _init_properties_Snapshot_kt__l6n1ng();
    return openSnapshots;
  }
  var openSnapshots;
  function set_nextSnapshotId(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    nextSnapshotId = _set____db54di;
  }
  function get_nextSnapshotId() {
    _init_properties_Snapshot_kt__l6n1ng();
    return nextSnapshotId;
  }
  var nextSnapshotId;
  function get_pinningTable() {
    _init_properties_Snapshot_kt__l6n1ng();
    return pinningTable;
  }
  var pinningTable;
  function get_extraStateObjects() {
    _init_properties_Snapshot_kt__l6n1ng();
    return extraStateObjects;
  }
  var extraStateObjects;
  function set_applyObservers(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    applyObservers = _set____db54di;
  }
  function get_applyObservers() {
    _init_properties_Snapshot_kt__l6n1ng();
    return applyObservers;
  }
  var applyObservers;
  function set_globalWriteObservers(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    globalWriteObservers = _set____db54di;
  }
  function get_globalWriteObservers() {
    _init_properties_Snapshot_kt__l6n1ng();
    return globalWriteObservers;
  }
  var globalWriteObservers;
  function get_currentGlobalSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    return currentGlobalSnapshot;
  }
  var currentGlobalSnapshot;
  function get_snapshotInitializer() {
    _init_properties_Snapshot_kt__l6n1ng();
    return snapshotInitializer;
  }
  var snapshotInitializer;
  function get_pendingApplyObserverCount() {
    _init_properties_Snapshot_kt__l6n1ng();
    return pendingApplyObserverCount;
  }
  var pendingApplyObserverCount;
  function StateObject() {
  }
  function sam$androidx_compose_runtime_snapshots_ObserverHandle$0(function_0) {
    this.v2l_1 = function_0;
  }
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0).ss = function () {
    return this.v2l_1();
  };
  function sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0(function_0) {
    this.w2l_1 = function_0;
  }
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0).ss = function () {
    return this.w2l_1();
  };
  function Snapshot$Companion$registerApplyObserver$lambda($observer) {
    return function () {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      set_applyObservers(minus(get_applyObservers(), $observer));
      return Unit_instance;
    };
  }
  function Snapshot$Companion$registerGlobalWriteObserver$lambda($observer) {
    return function () {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      set_globalWriteObservers(minus(get_globalWriteObservers(), $observer));
      advanceGlobalSnapshot_0();
      return Unit_instance;
    };
  }
  function Companion_11() {
  }
  protoOf(Companion_11).n1f = function () {
    return currentSnapshot();
  };
  protoOf(Companion_11).x22 = function (readObserver, writeObserver) {
    var tmp = currentSnapshot();
    var tmp0_safe_receiver = tmp instanceof MutableSnapshot ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x2l(readObserver, writeObserver);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var message = 'Cannot create a mutable snapshot of an read-only snapshot';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  };
  protoOf(Companion_11).y2l = function (readObserver, writeObserver, block) {
    if (!(readObserver == null) ? true : !(writeObserver == null)) {
      var currentSnapshot = get_threadSnapshot().hw();
      var tmp;
      var tmp_0;
      if (currentSnapshot == null) {
        tmp_0 = true;
      } else {
        tmp_0 = currentSnapshot instanceof MutableSnapshot;
      }
      if (tmp_0) {
        tmp = new TransparentObserverMutableSnapshot(currentSnapshot instanceof MutableSnapshot ? currentSnapshot : null, readObserver, writeObserver, true, false);
      } else {
        if (readObserver == null) {
          return block();
        } else {
          tmp = currentSnapshot.z2l(readObserver);
        }
      }
      var snapshot = tmp;
      try {
        var tmp$ret$0;
        $l$block: {
          // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
          var previous = snapshot.y22();
          try {
            tmp$ret$0 = block();
            break $l$block;
          }finally {
            snapshot.z22(previous);
          }
        }
        return tmp$ret$0;
      }finally {
        snapshot.ss();
      }
    } else
      return block();
  };
  protoOf(Companion_11).a2m = function () {
    return createTransparentSnapshotWithNoParentReadObserver(get_threadSnapshot().hw());
  };
  protoOf(Companion_11).x24 = function (observer) {
    advanceGlobalSnapshot(get_emptyLambda());
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    set_applyObservers(plus_1(get_applyObservers(), observer));
    var tmp = Snapshot$Companion$registerApplyObserver$lambda(observer);
    return new sam$androidx_compose_runtime_snapshots_ObserverHandle$0(tmp);
  };
  protoOf(Companion_11).b2m = function (observer) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    set_globalWriteObservers(plus_1(get_globalWriteObservers(), observer));
    advanceGlobalSnapshot_0();
    var tmp = Snapshot$Companion$registerGlobalWriteObserver$lambda(observer);
    return new sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0(tmp);
  };
  protoOf(Companion_11).x21 = function () {
    return currentSnapshot().x21();
  };
  protoOf(Companion_11).v21 = function () {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.Companion.sendApplyNotifications.<anonymous>' call
    var tmp0_safe_receiver = get_currentGlobalSnapshot().hw().c2m();
    var changes = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.pn()) === true;
    if (changes) {
      advanceGlobalSnapshot_0();
    }
  };
  var Companion_instance_12;
  function Companion_getInstance_12() {
    return Companion_instance_12;
  }
  function Snapshot(id, invalid) {
    this.e1q_1 = invalid;
    this.f1q_1 = id;
    this.g1q_1 = false;
    this.h1q_1 = !(id === 0) ? trackPinning(id, this.d2m()) : -1;
  }
  protoOf(Snapshot).e2m = function (_set____db54di) {
    this.e1q_1 = _set____db54di;
  };
  protoOf(Snapshot).d2m = function () {
    return this.e1q_1;
  };
  protoOf(Snapshot).f2m = function (_set____db54di) {
    this.f1q_1 = _set____db54di;
  };
  protoOf(Snapshot).i1q = function () {
    return this.f1q_1;
  };
  protoOf(Snapshot).g2m = function (value) {
    // Inline function 'kotlin.error' call
    var message = 'Updating write count is not supported for this snapshot';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(Snapshot).h2m = function () {
    return 0;
  };
  protoOf(Snapshot).ss = function () {
    this.g1q_1 = true;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    this.j2m();
  };
  protoOf(Snapshot).y22 = function () {
    var previous = get_threadSnapshot().hw();
    get_threadSnapshot().p1z(this);
    return previous;
  };
  protoOf(Snapshot).z22 = function (snapshot) {
    get_threadSnapshot().p1z(snapshot);
  };
  protoOf(Snapshot).p2m = function () {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    this.q2m();
    this.r2m();
  };
  protoOf(Snapshot).q2m = function () {
    set_openSnapshots(get_openSnapshots().w2m(this.i1q()));
  };
  protoOf(Snapshot).r2m = function () {
    this.j2m();
  };
  protoOf(Snapshot).x2m = function () {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.g1q_1) {
      // Inline function 'androidx.compose.runtime.snapshots.Snapshot.validateNotDisposed.<anonymous>' call
      var message = 'Cannot use a disposed snapshot';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  };
  protoOf(Snapshot).j2m = function () {
    if (this.h1q_1 >= 0) {
      releasePinningLocked(this.h1q_1);
      this.h1q_1 = -1;
    }
  };
  protoOf(Snapshot).y2m = function () {
    // Inline function 'kotlin.also' call
    var this_0 = this.h1q_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.Snapshot.takeoverPinnedSnapshot.<anonymous>' call
    this.h1q_1 = -1;
    return this_0;
  };
  function validateNotApplied($this) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.m23_1) {
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.validateNotApplied.<anonymous>' call
      var message = 'Unsupported operation on a snapshot that has been applied';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function validateNotAppliedOrPinned($this) {
    // Inline function 'kotlin.check' call
    var tmp;
    if (!$this.m23_1) {
      tmp = true;
    } else {
      // Inline function 'androidx.compose.runtime.snapshots.Snapshot.isPinned' call
      tmp = $this.h1q_1 >= 0;
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp) {
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.validateNotAppliedOrPinned.<anonymous>' call
      var message = 'Unsupported operation on a disposed or applied snapshot';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function abandon($this) {
    var modified = $this.c2m();
    if (!(modified == null)) {
      validateNotApplied($this);
      $this.z2m(null);
      var id = $this.i1q();
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values = modified.b1q_1;
      var inductionVariable = 0;
      var last = modified.a1q_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.abandon.<anonymous>' call
          var tmp = values[i];
          var current = (!(tmp == null) ? tmp : THROW_CCE()).m29();
          while (!(current == null)) {
            if (current.a2n_1 === id ? true : contains($this.j23_1, current.a2n_1)) {
              current.a2n_1 = 0;
            }
            current = current.b2n_1;
          }
        }
         while (inductionVariable < last);
    }
    $this.p2m();
  }
  function releasePreviouslyPinnedSnapshotsLocked($this) {
    var inductionVariable = 0;
    var last = $this.k23_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        releasePinningLocked($this.k23_1[index]);
      }
       while (inductionVariable <= last);
  }
  function Companion_12() {
    Companion_instance_13 = this;
    this.c2n_1 = new Int32Array(0);
  }
  var Companion_instance_13;
  function Companion_getInstance_13() {
    if (Companion_instance_13 == null)
      new Companion_12();
    return Companion_instance_13;
  }
  function MutableSnapshot(id, invalid, readObserver, writeObserver) {
    Companion_getInstance_13();
    Snapshot.call(this, id, invalid);
    this.e23_1 = readObserver;
    this.f23_1 = writeObserver;
    this.g23_1 = 0;
    this.h23_1 = null;
    this.i23_1 = null;
    this.j23_1 = Companion_getInstance_14().d2n_1;
    this.k23_1 = Companion_getInstance_13().c2n_1;
    this.l23_1 = 1;
    this.m23_1 = false;
  }
  protoOf(MutableSnapshot).k2m = function () {
    return this.e23_1;
  };
  protoOf(MutableSnapshot).l2m = function () {
    return this.f23_1;
  };
  protoOf(MutableSnapshot).x2l = function (readObserver, writeObserver) {
    this.x2m();
    validateNotAppliedOrPinned(this);
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance' call
    this.e2n(this.i1q());
    // Inline function 'kotlin.also' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.takeNestedMutableSnapshot.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.takeNestedMutableSnapshot.<anonymous>.<anonymous>' call
    var tmp0 = get_nextSnapshotId();
    set_nextSnapshotId(tmp0 + 1 | 0);
    var newId = tmp0;
    set_openSnapshots(get_openSnapshots().f2n(newId));
    var currentInvalid = this.d2m();
    this.e2m(currentInvalid.f2n(newId));
    var this_0 = new NestedMutableSnapshot(newId, addRange(currentInvalid, this.i1q() + 1 | 0, newId), mergedReadObserver(readObserver, this.k2m()), mergedWriteObserver(writeObserver, this.l2m()), this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    if (!this.m23_1 ? !this.g1q_1 : false) {
      var previousId = this.i1q();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      var tmp0_0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0_0 + 1 | 0);
      this.f2m(tmp0_0);
      set_openSnapshots(get_openSnapshots().f2n(this.i1q()));
      this.e2m(addRange(this.d2m(), previousId + 1 | 0, this.i1q()));
    }
    return this_0;
  };
  protoOf(MutableSnapshot).n23 = function () {
    var modified = this.c2m();
    var optimisticMerges_0 = !(modified == null) ? optimisticMerges(get_currentGlobalSnapshot().hw(), this, get_openSnapshots().w2m(get_currentGlobalSnapshot().hw().i1q())) : null;
    var observers = emptyList();
    var globalModified = null;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    validateOpen(this);
    var tmp;
    if (modified == null ? true : modified.a1q_1 === 0) {
      this.q2m();
      var previousGlobalSnapshot = get_currentGlobalSnapshot().hw();
      takeNewGlobalSnapshot(previousGlobalSnapshot, get_emptyLambda());
      var previousModified = previousGlobalSnapshot.c2m();
      var tmp_0;
      // Inline function 'kotlin.collections.isNullOrEmpty' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(previousModified == null ? true : previousModified.u())) {
        observers = get_applyObservers();
        globalModified = previousModified;
        tmp_0 = Unit_instance;
      }
      tmp = tmp_0;
    } else {
      var previousGlobalSnapshot_0 = get_currentGlobalSnapshot().hw();
      var result = this.g2n(get_nextSnapshotId(), optimisticMerges_0, get_openSnapshots().w2m(previousGlobalSnapshot_0.i1q()));
      if (!equals(result, Success_getInstance()))
        return result;
      this.q2m();
      takeNewGlobalSnapshot(previousGlobalSnapshot_0, get_emptyLambda());
      var previousModified_0 = previousGlobalSnapshot_0.c2m();
      this.z2m(null);
      previousGlobalSnapshot_0.z2m(null);
      observers = get_applyObservers();
      globalModified = previousModified_0;
      tmp = Unit_instance;
    }
    this.m23_1 = true;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    var this_0 = globalModified;
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0 == null ? true : this_0.u())) {
      var nonNullGlobalModified = ensureNotNull(globalModified);
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      var this_1 = observers;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_1.m() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_1.n(index);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>' call
          item(nonNullGlobalModified, this);
        }
         while (inductionVariable <= last);
    }
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(modified == null ? true : modified.u())) {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      var this_2 = observers;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = this_2.m() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = this_2.n(index_0);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>' call
          item_0(modified, this);
        }
         while (inductionVariable_0 <= last_0);
    }
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    this.r2m();
    checkAndOverwriteUnusedRecordsLocked();
    var tmp0_safe_receiver = globalModified;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values = tmp0_safe_receiver.b1q_1;
      var inductionVariable_1 = 0;
      var last_1 = tmp0_safe_receiver.a1q_1;
      if (inductionVariable_1 < last_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>.<anonymous>' call
          var tmp_1 = values[i];
          var it = !(tmp_1 == null) ? tmp_1 : THROW_CCE();
          processForUnusedRecordsLocked(it);
        }
         while (inductionVariable_1 < last_1);
    }
    if (modified == null)
      null;
    else {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values_0 = modified.b1q_1;
      var inductionVariable_2 = 0;
      var last_2 = modified.a1q_1;
      if (inductionVariable_2 < last_2)
        do {
          var i_0 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>.<anonymous>' call
          var tmp_2 = values_0[i_0];
          var it_0 = !(tmp_2 == null) ? tmp_2 : THROW_CCE();
          processForUnusedRecordsLocked(it_0);
        }
         while (inductionVariable_2 < last_2);
    }
    var tmp2_safe_receiver = this.i23_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_3 = 0;
      var last_3 = tmp2_safe_receiver.m() - 1 | 0;
      if (inductionVariable_3 <= last_3)
        do {
          var index_1 = inductionVariable_3;
          inductionVariable_3 = inductionVariable_3 + 1 | 0;
          var item_1 = tmp2_safe_receiver.n(index_1);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>.<anonymous>' call
          processForUnusedRecordsLocked(item_1);
        }
         while (inductionVariable_3 <= last_3);
    }
    this.i23_1 = null;
    return Success_getInstance();
  };
  protoOf(MutableSnapshot).i2m = function () {
    return false;
  };
  protoOf(MutableSnapshot).ss = function () {
    if (!this.g1q_1) {
      protoOf(Snapshot).ss.call(this);
      this.n2m(this);
    }
  };
  protoOf(MutableSnapshot).z2l = function (readObserver) {
    this.x2m();
    validateNotAppliedOrPinned(this);
    var previousId = this.i1q();
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance' call
    this.e2n(this.i1q());
    // Inline function 'kotlin.also' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.takeNestedSnapshot.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.takeNestedSnapshot.<anonymous>.<anonymous>' call
    var tmp0 = get_nextSnapshotId();
    set_nextSnapshotId(tmp0 + 1 | 0);
    var readonlyId = tmp0;
    set_openSnapshots(get_openSnapshots().f2n(readonlyId));
    var this_0 = new NestedReadonlySnapshot(readonlyId, addRange(this.d2m(), previousId + 1 | 0, readonlyId), readObserver, this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    if (!this.m23_1 ? !this.g1q_1 : false) {
      var previousId_0 = this.i1q();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      var tmp0_0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0_0 + 1 | 0);
      this.f2m(tmp0_0);
      set_openSnapshots(get_openSnapshots().f2n(this.i1q()));
      this.e2m(addRange(this.d2m(), previousId_0 + 1 | 0, this.i1q()));
    }
    return this_0;
  };
  protoOf(MutableSnapshot).m2m = function (snapshot) {
    this.l23_1 = this.l23_1 + 1 | 0;
  };
  protoOf(MutableSnapshot).n2m = function (snapshot) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.l23_1 > 0)) {
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.nestedDeactivated.<anonymous>' call
      var message = 'no pending nested snapshots';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.l23_1 = this.l23_1 - 1 | 0;
    if (this.l23_1 === 0) {
      if (!this.m23_1) {
        abandon(this);
      }
    }
  };
  protoOf(MutableSnapshot).x21 = function () {
    if (this.m23_1 ? true : this.g1q_1)
      return Unit_instance;
    this.h2n();
  };
  protoOf(MutableSnapshot).q2m = function () {
    set_openSnapshots(get_openSnapshots().w2m(this.i1q()).i2n(this.j23_1));
  };
  protoOf(MutableSnapshot).r2m = function () {
    releasePreviouslyPinnedSnapshotsLocked(this);
    protoOf(Snapshot).r2m.call(this);
  };
  protoOf(MutableSnapshot).g2n = function (snapshotId, optimisticMerges, invalidSnapshots) {
    var mergedRecords = null;
    var start = this.d2m().f2n(this.i1q()).j2n(this.j23_1);
    var modified = ensureNotNull(this.c2m());
    var statesToRemove = null;
    // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var values = modified.b1q_1;
    var inductionVariable = 0;
    var last = modified.a1q_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        $l$block_0: {
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>' call
          var tmp = values[i];
          var state = !(tmp == null) ? tmp : THROW_CCE();
          var first = state.m29();
          var tmp0_elvis_lhs = readable(first, snapshotId, invalidSnapshots);
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            break $l$block_0;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var current = tmp_0;
          var tmp1_elvis_lhs = readable(first, this.i1q(), start);
          var tmp_1;
          if (tmp1_elvis_lhs == null) {
            break $l$block_0;
          } else {
            tmp_1 = tmp1_elvis_lhs;
          }
          var previous = tmp_1;
          if (!equals(current, previous)) {
            var tmp2_elvis_lhs = readable(first, this.i1q(), this.d2m());
            var tmp_2;
            if (tmp2_elvis_lhs == null) {
              readError();
            } else {
              tmp_2 = tmp2_elvis_lhs;
            }
            var applied = tmp_2;
            var tmp4_elvis_lhs = optimisticMerges == null ? null : optimisticMerges.x2(current);
            var tmp_3;
            if (tmp4_elvis_lhs == null) {
              // Inline function 'kotlin.run' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
              tmp_3 = state.o29(previous, current, applied);
            } else {
              tmp_3 = tmp4_elvis_lhs;
            }
            var merged = tmp_3;
            if (merged == null)
              return new Failure(this);
            else if (!equals(merged, applied))
              if (equals(merged, current)) {
                var tmp6_elvis_lhs = mergedRecords;
                var tmp_4;
                if (tmp6_elvis_lhs == null) {
                  // Inline function 'kotlin.also' call
                  // Inline function 'kotlin.collections.mutableListOf' call
                  var this_0 = ArrayList_init_$Create$();
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
                  mergedRecords = this_0;
                  tmp_4 = this_0;
                } else {
                  tmp_4 = tmp6_elvis_lhs;
                }
                tmp_4.a1(to(state, current.i29()));
                var tmp7_elvis_lhs = statesToRemove;
                var tmp_5;
                if (tmp7_elvis_lhs == null) {
                  // Inline function 'kotlin.also' call
                  // Inline function 'kotlin.collections.mutableListOf' call
                  var this_1 = ArrayList_init_$Create$();
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
                  statesToRemove = this_1;
                  tmp_5 = this_1;
                } else {
                  tmp_5 = tmp7_elvis_lhs;
                }
                tmp_5.a1(state);
              } else {
                var tmp8_elvis_lhs = mergedRecords;
                var tmp_6;
                if (tmp8_elvis_lhs == null) {
                  // Inline function 'kotlin.also' call
                  // Inline function 'kotlin.collections.mutableListOf' call
                  var this_2 = ArrayList_init_$Create$();
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
                  mergedRecords = this_2;
                  tmp_6 = this_2;
                } else {
                  tmp_6 = tmp8_elvis_lhs;
                }
                tmp_6.a1(!equals(merged, previous) ? to(state, merged) : to(state, previous.i29()));
              }
          }
        }
      }
       while (inductionVariable < last);
    var tmp0_safe_receiver = mergedRecords;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.h2n();
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = tmp0_safe_receiver.m() - 1 | 0;
      var tmp_7;
      if (inductionVariable_0 <= last_0) {
        do {
          var index = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item = tmp0_safe_receiver.n(index);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
          var state_0 = item.se();
          var stateRecord = item.te();
          stateRecord.a2n_1 = this.i1q();
          // Inline function 'androidx.compose.runtime.snapshots.sync' call
          // Inline function 'androidx.compose.runtime.synchronized' call
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          get_lock();
          stateRecord.b2n_1 = state_0.m29();
          state_0.n29(stateRecord);
        }
         while (inductionVariable_0 <= last_0);
        tmp_7 = Unit_instance;
      }
    }
    var tmp1_safe_receiver = statesToRemove;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_1 = 0;
      var last_1 = tmp1_safe_receiver.m() - 1 | 0;
      if (inductionVariable_1 <= last_1)
        do {
          var index_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var item_0 = tmp1_safe_receiver.n(index_0);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
          modified.m2g(item_0);
        }
         while (inductionVariable_1 <= last_1);
      var mergedList = this.i23_1;
      this.i23_1 = mergedList == null ? tmp1_safe_receiver : plus_2(mergedList, tmp1_safe_receiver);
    }
    return Success_getInstance();
  };
  protoOf(MutableSnapshot).h2n = function () {
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance' call
    this.e2n(this.i1q());
    // Inline function 'kotlin.also' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    if (!this.m23_1 ? !this.g1q_1 : false) {
      var previousId = this.i1q();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      this.f2m(tmp0);
      set_openSnapshots(get_openSnapshots().f2n(this.i1q()));
      this.e2m(addRange(this.d2m(), previousId + 1 | 0, this.i1q()));
    }
    return Unit_instance;
  };
  protoOf(MutableSnapshot).e2n = function (id) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    this.j23_1 = this.j23_1.f2n(id);
  };
  protoOf(MutableSnapshot).k2n = function (id) {
    if (id >= 0) {
      var tmp = this;
      // Inline function 'kotlin.collections.plus' call
      // Inline function 'kotlin.collections.plus' call
      var this_0 = this.k23_1;
      // Inline function 'kotlin.intArrayOf' call
      var elements = new Int32Array([id]);
      tmp.k23_1 = primitiveArrayConcat([this_0, elements]);
    }
  };
  protoOf(MutableSnapshot).l2n = function (handles) {
    // Inline function 'kotlin.collections.isEmpty' call
    if (handles.length === 0)
      return Unit_instance;
    var pinned = this.k23_1;
    var tmp = this;
    var tmp_0;
    // Inline function 'kotlin.collections.isEmpty' call
    if (pinned.length === 0) {
      tmp_0 = handles;
    } else {
      // Inline function 'kotlin.collections.plus' call
      tmp_0 = primitiveArrayConcat([pinned, handles]);
    }
    tmp.k23_1 = tmp_0;
  };
  protoOf(MutableSnapshot).m2n = function (snapshots) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    this.j23_1 = this.j23_1.j2n(snapshots);
  };
  protoOf(MutableSnapshot).o2m = function (state) {
    var tmp0_elvis_lhs = this.c2m();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new IdentityArraySet();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.recordModified.<anonymous>' call
      this.z2m(this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp.i1v(state);
  };
  protoOf(MutableSnapshot).g2m = function (_set____db54di) {
    this.g23_1 = _set____db54di;
  };
  protoOf(MutableSnapshot).h2m = function () {
    return this.g23_1;
  };
  protoOf(MutableSnapshot).z2m = function (_set____db54di) {
    this.h23_1 = _set____db54di;
  };
  protoOf(MutableSnapshot).c2m = function () {
    return this.h23_1;
  };
  function Success() {
    Success_instance = this;
    SnapshotApplyResult.call(this);
  }
  var Success_instance;
  function Success_getInstance() {
    if (Success_instance == null)
      new Success();
    return Success_instance;
  }
  function Failure(snapshot) {
    SnapshotApplyResult.call(this);
    this.n2n_1 = snapshot;
  }
  function SnapshotApplyResult() {
  }
  function GlobalSnapshot$_init_$lambda_36kgl8($it) {
    return function (state) {
      var this_0 = $it;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.m() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.n(index);
          // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          item(state);
        }
         while (inductionVariable <= last);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function GlobalSnapshot$takeNestedSnapshot$lambda($readObserver) {
    return function (invalid) {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.takeNestedSnapshot.<anonymous>.<anonymous>' call
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      return new ReadonlySnapshot(tmp0, invalid, $readObserver);
    };
  }
  function GlobalSnapshot$takeNestedMutableSnapshot$lambda($readObserver, $writeObserver) {
    return function (invalid) {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.takeNestedMutableSnapshot.<anonymous>.<anonymous>' call
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      return new MutableSnapshot(tmp0, invalid, $readObserver, $writeObserver);
    };
  }
  function GlobalSnapshot(id, invalid) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>.<anonymous>' call
    var it = get_globalWriteObservers();
    var tmp0_elvis_lhs = singleOrNull(it);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      tmp = GlobalSnapshot$_init_$lambda_36kgl8(it);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp$ret$5 = tmp;
    MutableSnapshot.call(this, id, invalid, null, tmp$ret$5);
  }
  protoOf(GlobalSnapshot).z2l = function (readObserver) {
    return takeNewSnapshot(GlobalSnapshot$takeNestedSnapshot$lambda(readObserver));
  };
  protoOf(GlobalSnapshot).x2l = function (readObserver, writeObserver) {
    return takeNewSnapshot(GlobalSnapshot$takeNestedMutableSnapshot$lambda(readObserver, writeObserver));
  };
  protoOf(GlobalSnapshot).x21 = function () {
    advanceGlobalSnapshot_0();
  };
  protoOf(GlobalSnapshot).b2o = function (snapshot) {
    unsupported();
  };
  protoOf(GlobalSnapshot).n2m = function (snapshot) {
    return this.b2o(snapshot);
  };
  protoOf(GlobalSnapshot).c2o = function (snapshot) {
    unsupported();
  };
  protoOf(GlobalSnapshot).m2m = function (snapshot) {
    return this.c2o(snapshot);
  };
  protoOf(GlobalSnapshot).n23 = function () {
    var message = 'Cannot apply the global snapshot directly. Call Snapshot.advanceGlobalSnapshot';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(GlobalSnapshot).ss = function () {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    this.j2m();
  };
  function StateRecord() {
    this.a2n_1 = currentSnapshot().i1q();
    this.b2n_1 = null;
  }
  function trackPinning(id, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    var pinned = invalid.d2o(id);
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.trackPinning.<anonymous>' call
    return get_pinningTable().j2o(pinned);
  }
  function releasePinningLocked(handle) {
    _init_properties_Snapshot_kt__l6n1ng();
    get_pinningTable().k2o(handle);
  }
  function currentSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp0_elvis_lhs = get_threadSnapshot().hw();
    return tmp0_elvis_lhs == null ? get_currentGlobalSnapshot().hw() : tmp0_elvis_lhs;
  }
  function _get_currentSnapshot__9vker0($this) {
    var tmp0_elvis_lhs = $this.y2o_1;
    return tmp0_elvis_lhs == null ? get_currentGlobalSnapshot().hw() : tmp0_elvis_lhs;
  }
  function TransparentObserverMutableSnapshot(parentSnapshot, specifiedReadObserver, specifiedWriteObserver, mergeParentObservers, ownsParentSnapshot) {
    var tmp = Companion_getInstance_14().d2n_1;
    var tmp1_elvis_lhs = parentSnapshot == null ? null : parentSnapshot.k2m();
    var tmp_0 = mergedReadObserver(specifiedReadObserver, tmp1_elvis_lhs == null ? get_currentGlobalSnapshot().hw().k2m() : tmp1_elvis_lhs, mergeParentObservers);
    var tmp3_elvis_lhs = parentSnapshot == null ? null : parentSnapshot.l2m();
    MutableSnapshot.call(this, 0, tmp, tmp_0, mergedWriteObserver(specifiedWriteObserver, tmp3_elvis_lhs == null ? get_currentGlobalSnapshot().hw().l2m() : tmp3_elvis_lhs));
    this.y2o_1 = parentSnapshot;
    this.z2o_1 = mergeParentObservers;
    this.a2p_1 = ownsParentSnapshot;
  }
  protoOf(TransparentObserverMutableSnapshot).ss = function () {
    this.g1q_1 = true;
    if (this.a2p_1) {
      var tmp0_safe_receiver = this.y2o_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.ss();
      }
    }
  };
  protoOf(TransparentObserverMutableSnapshot).f2m = function (value) {
    unsupported();
  };
  protoOf(TransparentObserverMutableSnapshot).i1q = function () {
    return _get_currentSnapshot__9vker0(this).i1q();
  };
  protoOf(TransparentObserverMutableSnapshot).e2m = function (value) {
    unsupported();
  };
  protoOf(TransparentObserverMutableSnapshot).d2m = function () {
    return _get_currentSnapshot__9vker0(this).d2m();
  };
  protoOf(TransparentObserverMutableSnapshot).z2m = function (value) {
    unsupported();
  };
  protoOf(TransparentObserverMutableSnapshot).c2m = function () {
    return _get_currentSnapshot__9vker0(this).c2m();
  };
  protoOf(TransparentObserverMutableSnapshot).g2m = function (value) {
    _get_currentSnapshot__9vker0(this).g2m(value);
  };
  protoOf(TransparentObserverMutableSnapshot).h2m = function () {
    return _get_currentSnapshot__9vker0(this).h2m();
  };
  protoOf(TransparentObserverMutableSnapshot).i2m = function () {
    return _get_currentSnapshot__9vker0(this).i2m();
  };
  protoOf(TransparentObserverMutableSnapshot).n23 = function () {
    return _get_currentSnapshot__9vker0(this).n23();
  };
  protoOf(TransparentObserverMutableSnapshot).o2m = function (state) {
    return _get_currentSnapshot__9vker0(this).o2m(state);
  };
  protoOf(TransparentObserverMutableSnapshot).z2l = function (readObserver) {
    var mergedReadObserver_0 = mergedReadObserver(readObserver, this.k2m());
    var tmp;
    if (!this.z2o_1) {
      tmp = createTransparentSnapshotWithNoParentReadObserver(_get_currentSnapshot__9vker0(this).z2l(null), mergedReadObserver_0, true);
    } else {
      tmp = _get_currentSnapshot__9vker0(this).z2l(mergedReadObserver_0);
    }
    return tmp;
  };
  protoOf(TransparentObserverMutableSnapshot).x2l = function (readObserver, writeObserver) {
    var mergedReadObserver_0 = mergedReadObserver(readObserver, this.k2m());
    var mergedWriteObserver_0 = mergedWriteObserver(writeObserver, this.l2m());
    var tmp;
    if (!this.z2o_1) {
      var nestedSnapshot = _get_currentSnapshot__9vker0(this).x2l(null, mergedWriteObserver_0);
      tmp = new TransparentObserverMutableSnapshot(nestedSnapshot, mergedReadObserver_0, mergedWriteObserver_0, false, true);
    } else {
      tmp = _get_currentSnapshot__9vker0(this).x2l(mergedReadObserver_0, mergedWriteObserver_0);
    }
    return tmp;
  };
  protoOf(TransparentObserverMutableSnapshot).x21 = function () {
    return _get_currentSnapshot__9vker0(this).x21();
  };
  protoOf(TransparentObserverMutableSnapshot).c2o = function (snapshot) {
    unsupported();
  };
  protoOf(TransparentObserverMutableSnapshot).m2m = function (snapshot) {
    return this.c2o(snapshot);
  };
  protoOf(TransparentObserverMutableSnapshot).b2o = function (snapshot) {
    unsupported();
  };
  protoOf(TransparentObserverMutableSnapshot).n2m = function (snapshot) {
    return this.b2o(snapshot);
  };
  function createTransparentSnapshotWithNoParentReadObserver(previousSnapshot, readObserver, ownsPreviousSnapshot) {
    readObserver = readObserver === VOID ? null : readObserver;
    ownsPreviousSnapshot = ownsPreviousSnapshot === VOID ? false : ownsPreviousSnapshot;
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp;
    var tmp_0;
    if (previousSnapshot instanceof MutableSnapshot) {
      tmp_0 = true;
    } else {
      tmp_0 = previousSnapshot == null;
    }
    if (tmp_0) {
      tmp = new TransparentObserverMutableSnapshot(previousSnapshot instanceof MutableSnapshot ? previousSnapshot : null, readObserver, null, false, ownsPreviousSnapshot);
    } else {
      tmp = new TransparentObserverSnapshot(previousSnapshot, readObserver, false, ownsPreviousSnapshot);
    }
    return tmp;
  }
  function advanceGlobalSnapshot(block) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp = get_snapshotInitializer();
    var previousGlobalSnapshot = tmp instanceof GlobalSnapshot ? tmp : THROW_CCE();
    var modified = null;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>' call
    previousGlobalSnapshot = get_currentGlobalSnapshot().hw();
    modified = previousGlobalSnapshot.c2m();
    if (!(modified == null)) {
      get_pendingApplyObserverCount().j2o(1);
    }
    var result = takeNewGlobalSnapshot(previousGlobalSnapshot, block);
    var tmp0_safe_receiver = modified;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      try {
        var observers = get_applyObservers();
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = observers.m() - 1 | 0;
        var tmp_1;
        if (inductionVariable <= last) {
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = observers.n(index);
            // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>.<anonymous>' call
            item(tmp0_safe_receiver, previousGlobalSnapshot);
          }
           while (inductionVariable <= last);
          tmp_1 = Unit_instance;
        }
        tmp_0 = tmp_1;
      }finally {
        get_pendingApplyObserverCount().j2o(-1);
      }
    }
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>' call
    checkAndOverwriteUnusedRecordsLocked();
    var tmp0_safe_receiver_0 = modified;
    var tmp_2;
    if (tmp0_safe_receiver_0 == null) {
      tmp_2 = null;
    } else {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values = tmp0_safe_receiver_0.b1q_1;
      var inductionVariable_0 = 0;
      var last_0 = tmp0_safe_receiver_0.a1q_1;
      if (inductionVariable_0 < last_0)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>.<anonymous>' call
          var tmp_3 = values[i];
          var it = !(tmp_3 == null) ? tmp_3 : THROW_CCE();
          processForUnusedRecordsLocked(it);
        }
         while (inductionVariable_0 < last_0);
      tmp_2 = Unit_instance;
    }
    return result;
  }
  function advanceGlobalSnapshot_0() {
    _init_properties_Snapshot_kt__l6n1ng();
    return advanceGlobalSnapshot(advanceGlobalSnapshot$lambda);
  }
  function deactivate($this) {
    if (!$this.q2p_1) {
      $this.q2p_1 = true;
      $this.p2p_1.n2m($this);
    }
  }
  function NestedMutableSnapshot(id, invalid, readObserver, writeObserver, parent) {
    MutableSnapshot.call(this, id, invalid, readObserver, writeObserver);
    this.p2p_1 = parent;
    this.q2p_1 = false;
    this.p2p_1.m2m(this);
  }
  protoOf(NestedMutableSnapshot).ss = function () {
    if (!this.g1q_1) {
      protoOf(MutableSnapshot).ss.call(this);
      deactivate(this);
    }
  };
  protoOf(NestedMutableSnapshot).n23 = function () {
    if (this.p2p_1.m23_1 ? true : this.p2p_1.g1q_1)
      return new Failure(this);
    var modified = this.c2m();
    var id = this.i1q();
    var optimisticMerges_0 = !(modified == null) ? optimisticMerges(this.p2p_1, this, this.p2p_1.d2m()) : null;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    validateOpen(this);
    if (modified == null ? true : modified.a1q_1 === 0) {
      this.p2m();
    } else {
      var result = this.g2n(this.p2p_1.i1q(), optimisticMerges_0, this.p2p_1.d2m());
      if (!equals(result, Success_getInstance()))
        return result;
      var tmp0_safe_receiver = this.p2p_1.c2m();
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.apply' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.NestedMutableSnapshot.apply.<anonymous>.<anonymous>' call
        tmp0_safe_receiver.n22(modified);
        tmp = tmp0_safe_receiver;
      }
      if (tmp == null) {
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.NestedMutableSnapshot.apply.<anonymous>.<anonymous>' call
        this.p2p_1.z2m(modified);
        this.z2m(null);
      }
    }
    if (this.p2p_1.i1q() < id) {
      this.p2p_1.h2n();
    }
    this.p2p_1.e2m(this.p2p_1.d2m().w2m(id).i2n(this.j23_1));
    this.p2p_1.e2n(id);
    this.p2p_1.k2n(this.y2m());
    this.p2p_1.m2n(this.j23_1);
    this.p2p_1.l2n(this.k23_1);
    this.m23_1 = true;
    deactivate(this);
    return Success_getInstance();
  };
  function addRange(_this__u8e3s4, from, until) {
    _init_properties_Snapshot_kt__l6n1ng();
    var result = _this__u8e3s4;
    var inductionVariable = from;
    if (inductionVariable < until)
      do {
        var invalidId = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result = result.f2n(invalidId);
      }
       while (inductionVariable < until);
    return result;
  }
  function mergedReadObserver(readObserver, parentObserver, mergeReadObserver) {
    mergeReadObserver = mergeReadObserver === VOID ? true : mergeReadObserver;
    _init_properties_Snapshot_kt__l6n1ng();
    var parentObserver_0 = mergeReadObserver ? parentObserver : null;
    var tmp;
    if ((!(readObserver == null) ? !(parentObserver_0 == null) : false) ? !equals(readObserver, parentObserver_0) : false) {
      tmp = mergedReadObserver$lambda(readObserver, parentObserver_0);
    } else {
      tmp = readObserver == null ? parentObserver_0 : readObserver;
    }
    return tmp;
  }
  function mergedWriteObserver(writeObserver, parentObserver) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp;
    if ((!(writeObserver == null) ? !(parentObserver == null) : false) ? !equals(writeObserver, parentObserver) : false) {
      tmp = mergedWriteObserver$lambda(writeObserver, parentObserver);
    } else {
      tmp = writeObserver == null ? parentObserver : writeObserver;
    }
    return tmp;
  }
  function optimisticMerges(currentSnapshot, applyingSnapshot, invalidSnapshots) {
    _init_properties_Snapshot_kt__l6n1ng();
    var modified = applyingSnapshot.c2m();
    var id = currentSnapshot.i1q();
    if (modified == null)
      return null;
    var start = applyingSnapshot.d2m().f2n(applyingSnapshot.i1q()).j2n(applyingSnapshot.j23_1);
    var result = null;
    // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var values = modified.b1q_1;
    var inductionVariable = 0;
    var last = modified.a1q_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        $l$block_0: {
          // Inline function 'androidx.compose.runtime.snapshots.optimisticMerges.<anonymous>' call
          var tmp = values[i];
          var state = !(tmp == null) ? tmp : THROW_CCE();
          var first = state.m29();
          var tmp0_elvis_lhs = readable(first, id, invalidSnapshots);
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            break $l$block_0;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var current = tmp_0;
          var tmp1_elvis_lhs = readable(first, id, start);
          var tmp_1;
          if (tmp1_elvis_lhs == null) {
            break $l$block_0;
          } else {
            tmp_1 = tmp1_elvis_lhs;
          }
          var previous = tmp_1;
          if (!equals(current, previous)) {
            var tmp2_elvis_lhs = readable(first, applyingSnapshot.i1q(), applyingSnapshot.d2m());
            var tmp_2;
            if (tmp2_elvis_lhs == null) {
              readError();
            } else {
              tmp_2 = tmp2_elvis_lhs;
            }
            var applied = tmp_2;
            var merged = state.o29(previous, current, applied);
            if (!(merged == null)) {
              // Inline function 'kotlin.collections.set' call
              var tmp3_elvis_lhs = result;
              var tmp_3;
              if (tmp3_elvis_lhs == null) {
                // Inline function 'kotlin.also' call
                // Inline function 'kotlin.collections.hashMapOf' call
                var this_0 = HashMap_init_$Create$();
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'androidx.compose.runtime.snapshots.optimisticMerges.<anonymous>.<anonymous>' call
                result = this_0;
                tmp_3 = this_0;
              } else {
                tmp_3 = tmp3_elvis_lhs;
              }
              tmp_3.n2(current, merged);
            } else {
              return null;
            }
          }
        }
      }
       while (inductionVariable < last);
    return result;
  }
  function validateOpen(snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    var openSnapshots = get_openSnapshots();
    if (!openSnapshots.n(snapshot.i1q())) {
      // Inline function 'kotlin.error' call
      var tmp = snapshot.i1q();
      var tmp_0 = snapshot.g1q_1;
      var tmp0_safe_receiver = snapshot instanceof MutableSnapshot ? snapshot : null;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m23_1;
      var tmp_1 = toString(tmp1_elvis_lhs == null ? 'read-only' : tmp1_elvis_lhs);
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.validateOpen.<anonymous>' call
      var message = 'Snapshot is not open: id=' + tmp + ', disposed=' + tmp_0 + ', applied=' + tmp_1 + ', lowestPin=' + get_pinningTable().r2p(-1);
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function takeNewGlobalSnapshot(previousGlobalSnapshot, block) {
    _init_properties_Snapshot_kt__l6n1ng();
    var result = block(get_openSnapshots().w2m(previousGlobalSnapshot.i1q()));
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    var tmp0 = get_nextSnapshotId();
    set_nextSnapshotId(tmp0 + 1 | 0);
    var globalId = tmp0;
    set_openSnapshots(get_openSnapshots().w2m(previousGlobalSnapshot.i1q()));
    get_currentGlobalSnapshot().a1x(new GlobalSnapshot(globalId, get_openSnapshots()));
    previousGlobalSnapshot.ss();
    set_openSnapshots(get_openSnapshots().f2n(globalId));
    return result;
  }
  function checkAndOverwriteUnusedRecordsLocked() {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotWeakSet.removeIf' call
    var this_0 = get_extraStateObjects();
    var size = this_0.s2p_1;
    var currentUsed = 0;
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var entry = this_0.u2p_1[i];
        var value = entry == null ? null : entry.hw();
        var tmp;
        if (!(value == null)) {
          // Inline function 'androidx.compose.runtime.snapshots.checkAndOverwriteUnusedRecordsLocked.<anonymous>' call
          tmp = !!overwriteUnusedRecordsLocked(value);
        } else {
          tmp = false;
        }
        if (tmp) {
          if (!(currentUsed === i)) {
            this_0.u2p_1[currentUsed] = entry;
            this_0.t2p_1[currentUsed] = this_0.t2p_1[i];
          }
          currentUsed = currentUsed + 1 | 0;
        }
      }
       while (inductionVariable < size);
    var inductionVariable_0 = currentUsed;
    if (inductionVariable_0 < size)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        this_0.u2p_1[i_0] = null;
        this_0.t2p_1[i_0] = 0;
      }
       while (inductionVariable_0 < size);
    if (!(currentUsed === size)) {
      this_0.s2p_1 = currentUsed;
    }
  }
  function processForUnusedRecordsLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (overwriteUnusedRecordsLocked(state)) {
      get_extraStateObjects().i1v(state);
    }
  }
  function NestedReadonlySnapshot$readObserver$lambda($readObserver, $this) {
    return function (state) {
      $readObserver(state);
      $this(state);
      return Unit_instance;
    };
  }
  function NestedReadonlySnapshot(id, invalid, readObserver, parent) {
    Snapshot.call(this, id, invalid);
    this.a2q_1 = parent;
    this.a2q_1.m2m(this);
    var tmp = this;
    var tmp_0;
    if (readObserver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.NestedReadonlySnapshot.readObserver.<anonymous>' call
      var tmp0_safe_receiver = this.a2q_1.k2m();
      var tmp_1;
      if (tmp0_safe_receiver == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.NestedReadonlySnapshot.readObserver.<anonymous>.<anonymous>' call
        tmp_1 = NestedReadonlySnapshot$readObserver$lambda(readObserver, tmp0_safe_receiver);
      }
      var tmp1_elvis_lhs = tmp_1;
      tmp_0 = tmp1_elvis_lhs == null ? readObserver : tmp1_elvis_lhs;
    }
    var tmp1_elvis_lhs_0 = tmp_0;
    tmp.b2q_1 = tmp1_elvis_lhs_0 == null ? this.a2q_1.k2m() : tmp1_elvis_lhs_0;
  }
  protoOf(NestedReadonlySnapshot).i2m = function () {
    return true;
  };
  protoOf(NestedReadonlySnapshot).z2l = function (readObserver) {
    return new NestedReadonlySnapshot(this.i1q(), this.d2m(), readObserver, this.a2q_1);
  };
  protoOf(NestedReadonlySnapshot).x21 = function () {
  };
  protoOf(NestedReadonlySnapshot).k2m = function () {
    return this.b2q_1;
  };
  protoOf(NestedReadonlySnapshot).ss = function () {
    if (!this.g1q_1) {
      if (!(this.i1q() === this.a2q_1.i1q())) {
        this.p2m();
      }
      this.a2q_1.n2m(this);
      protoOf(Snapshot).ss.call(this);
    }
  };
  protoOf(NestedReadonlySnapshot).l2m = function () {
    return null;
  };
  protoOf(NestedReadonlySnapshot).c2q = function (state) {
    reportReadonlySnapshotWrite();
  };
  protoOf(NestedReadonlySnapshot).o2m = function (state) {
    return this.c2q(state);
  };
  protoOf(NestedReadonlySnapshot).b2o = function (snapshot) {
    unsupported();
  };
  protoOf(NestedReadonlySnapshot).n2m = function (snapshot) {
    return this.b2o(snapshot);
  };
  protoOf(NestedReadonlySnapshot).c2o = function (snapshot) {
    unsupported();
  };
  protoOf(NestedReadonlySnapshot).m2m = function (snapshot) {
    return this.c2o(snapshot);
  };
  function readable(r, id, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = r;
    var candidate = null;
    while (!(current == null)) {
      if (valid(current, id, invalid)) {
        candidate = candidate == null ? current : candidate.a2n_1 < current.a2n_1 ? current : candidate;
      }
      current = current.b2n_1;
    }
    if (!(candidate == null)) {
      return candidate instanceof StateRecord ? candidate : THROW_CCE();
    }
    return null;
  }
  function readError() {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'kotlin.error' call
    var message = 'Reading a state that was created after the snapshot was taken or in a snapshot that has not yet been applied';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function ReadonlySnapshot(id, invalid, readObserver) {
    Snapshot.call(this, id, invalid);
    this.h2q_1 = readObserver;
    this.i2q_1 = 1;
  }
  protoOf(ReadonlySnapshot).k2m = function () {
    return this.h2q_1;
  };
  protoOf(ReadonlySnapshot).i2m = function () {
    return true;
  };
  protoOf(ReadonlySnapshot).l2m = function () {
    return null;
  };
  protoOf(ReadonlySnapshot).z2l = function (readObserver) {
    validateOpen(this);
    return new NestedReadonlySnapshot(this.i1q(), this.d2m(), readObserver, this);
  };
  protoOf(ReadonlySnapshot).x21 = function () {
  };
  protoOf(ReadonlySnapshot).ss = function () {
    if (!this.g1q_1) {
      this.n2m(this);
      protoOf(Snapshot).ss.call(this);
    }
  };
  protoOf(ReadonlySnapshot).m2m = function (snapshot) {
    this.i2q_1 = this.i2q_1 + 1 | 0;
  };
  protoOf(ReadonlySnapshot).n2m = function (snapshot) {
    this.i2q_1 = this.i2q_1 - 1 | 0;
    if (this.i2q_1 === 0) {
      this.p2m();
    }
  };
  protoOf(ReadonlySnapshot).o2m = function (state) {
    reportReadonlySnapshotWrite();
  };
  function takeNewSnapshot(block) {
    _init_properties_Snapshot_kt__l6n1ng();
    return advanceGlobalSnapshot(takeNewSnapshot$lambda(block));
  }
  function _get_currentSnapshot__9vker0_0($this) {
    var tmp0_elvis_lhs = $this.n2q_1;
    return tmp0_elvis_lhs == null ? get_currentGlobalSnapshot().hw() : tmp0_elvis_lhs;
  }
  function TransparentObserverSnapshot(previousSnapshot, specifiedReadObserver, mergeParentObservers, ownsPreviousSnapshot) {
    Snapshot.call(this, 0, Companion_getInstance_14().d2n_1);
    this.n2q_1 = previousSnapshot;
    this.o2q_1 = mergeParentObservers;
    this.p2q_1 = ownsPreviousSnapshot;
    var tmp = this;
    var tmp0_safe_receiver = this.n2q_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k2m();
    tmp.q2q_1 = mergedReadObserver(specifiedReadObserver, tmp1_elvis_lhs == null ? get_currentGlobalSnapshot().hw().k2m() : tmp1_elvis_lhs, this.o2q_1);
    this.r2q_1 = null;
    this.s2q_1 = this;
  }
  protoOf(TransparentObserverSnapshot).k2m = function () {
    return this.q2q_1;
  };
  protoOf(TransparentObserverSnapshot).l2m = function () {
    return this.r2q_1;
  };
  protoOf(TransparentObserverSnapshot).ss = function () {
    this.g1q_1 = true;
    if (this.p2q_1) {
      var tmp0_safe_receiver = this.n2q_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.ss();
      }
    }
  };
  protoOf(TransparentObserverSnapshot).i1q = function () {
    return _get_currentSnapshot__9vker0_0(this).i1q();
  };
  protoOf(TransparentObserverSnapshot).d2m = function () {
    return _get_currentSnapshot__9vker0_0(this).d2m();
  };
  protoOf(TransparentObserverSnapshot).i2m = function () {
    return _get_currentSnapshot__9vker0_0(this).i2m();
  };
  protoOf(TransparentObserverSnapshot).o2m = function (state) {
    return _get_currentSnapshot__9vker0_0(this).o2m(state);
  };
  protoOf(TransparentObserverSnapshot).z2l = function (readObserver) {
    var mergedReadObserver_0 = mergedReadObserver(readObserver, this.q2q_1);
    var tmp;
    if (!this.o2q_1) {
      tmp = createTransparentSnapshotWithNoParentReadObserver(_get_currentSnapshot__9vker0_0(this).z2l(null), mergedReadObserver_0, true);
    } else {
      tmp = _get_currentSnapshot__9vker0_0(this).z2l(mergedReadObserver_0);
    }
    return tmp;
  };
  protoOf(TransparentObserverSnapshot).x21 = function () {
    return _get_currentSnapshot__9vker0_0(this).x21();
  };
  protoOf(TransparentObserverSnapshot).c2o = function (snapshot) {
    unsupported();
  };
  protoOf(TransparentObserverSnapshot).m2m = function (snapshot) {
    return this.c2o(snapshot);
  };
  protoOf(TransparentObserverSnapshot).b2o = function (snapshot) {
    unsupported();
  };
  protoOf(TransparentObserverSnapshot).n2m = function (snapshot) {
    return this.b2o(snapshot);
  };
  function overwriteUnusedRecordsLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = state.m29();
    var overwriteRecord = null;
    var validRecord = null;
    var reuseLimit = get_pinningTable().r2p(get_nextSnapshotId());
    var retainedRecords = 0;
    while (!(current == null)) {
      var currentId = current.a2n_1;
      if (!(currentId === 0)) {
        if (currentId < reuseLimit) {
          if (validRecord == null) {
            validRecord = current;
            retainedRecords = retainedRecords + 1 | 0;
          } else {
            var tmp;
            if (current.a2n_1 < validRecord.a2n_1) {
              tmp = current;
            } else {
              var result = validRecord;
              validRecord = current;
              tmp = result;
            }
            var recordToOverwrite = tmp;
            if (overwriteRecord == null) {
              var tmp$ret$1;
              $l$block: {
                // Inline function 'androidx.compose.runtime.snapshots.findYoungestOr' call
                var this_0 = state.m29();
                var current_0 = this_0;
                var youngest = this_0;
                while (!(current_0 == null)) {
                  // Inline function 'androidx.compose.runtime.snapshots.overwriteUnusedRecordsLocked.<anonymous>' call
                  if (current_0.a2n_1 >= reuseLimit) {
                    tmp$ret$1 = current_0;
                    break $l$block;
                  }
                  if (youngest.a2n_1 < current_0.a2n_1)
                    youngest = current_0;
                  current_0 = current_0.b2n_1;
                }
                tmp$ret$1 = youngest;
              }
              overwriteRecord = tmp$ret$1;
            }
            recordToOverwrite.a2n_1 = 0;
            recordToOverwrite.h29(overwriteRecord);
          }
        } else {
          retainedRecords = retainedRecords + 1 | 0;
        }
      }
      current = current.b2n_1;
    }
    return retainedRecords > 1;
  }
  function reportReadonlySnapshotWrite() {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'kotlin.error' call
    var message = 'Cannot modify a state object in a read-only snapshot';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function valid(data, snapshot, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    return valid_0(snapshot, data.a2n_1, invalid);
  }
  function valid_0(currentSnapshot, candidateSnapshot, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    return (!(candidateSnapshot === 0) ? candidateSnapshot <= currentSnapshot : false) ? !invalid.n(candidateSnapshot) : false;
  }
  function readable_0(_this__u8e3s4, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var snapshot = Companion_instance_12.n1f();
    var tmp0_safe_receiver = snapshot.k2m();
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(state);
    var tmp1_elvis_lhs = readable(_this__u8e3s4, snapshot.i1q(), snapshot.d2m());
    var tmp;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.readable.<anonymous>' call
      var syncSnapshot = Companion_instance_12.n1f();
      var tmp_0 = state.m29();
      var tmp0_elvis_lhs = readable(tmp_0 instanceof StateRecord ? tmp_0 : THROW_CCE(), syncSnapshot.i1q(), syncSnapshot.d2m());
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        readError();
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      tmp = tmp_1;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function current(r) {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>' call
    var snapshot = Companion_instance_12.n1f();
    var tmp0_elvis_lhs = readable(r, snapshot.i1q(), snapshot.d2m());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>.<anonymous>.<anonymous>' call
      var syncSnapshot = Companion_instance_12.n1f();
      tmp = readable(r, syncSnapshot.i1q(), syncSnapshot.d2m());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      readError();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  }
  function notifyWrite(snapshot, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    snapshot.g2m(snapshot.h2m() + 1 | 0);
    var tmp1_safe_receiver = snapshot.l2m();
    if (tmp1_safe_receiver == null)
      null;
    else
      tmp1_safe_receiver(state);
  }
  function overwritableRecord(_this__u8e3s4, state, snapshot, candidate) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (snapshot.i2m()) {
      snapshot.o2m(state);
    }
    var id = snapshot.i1q();
    if (candidate.a2n_1 === id)
      return candidate;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.overwritableRecord.<anonymous>' call
    var newData = newOverwritableRecordLocked(_this__u8e3s4, state);
    newData.a2n_1 = id;
    snapshot.o2m(state);
    return newData;
  }
  function newOverwritableRecordLocked(_this__u8e3s4, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp = usedLocked(state);
    var tmp0_safe_receiver = (tmp == null ? true : tmp instanceof StateRecord) ? tmp : THROW_CCE();
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.newOverwritableRecordLocked.<anonymous>' call
      tmp0_safe_receiver.a2n_1 = IntCompanionObject_instance.MAX_VALUE;
      tmp_0 = tmp0_safe_receiver;
    }
    var tmp1_elvis_lhs = tmp_0;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.apply' call
      var this_0 = _this__u8e3s4.i29();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.newOverwritableRecordLocked.<anonymous>' call
      this_0.a2n_1 = IntCompanionObject_instance.MAX_VALUE;
      this_0.b2n_1 = state.m29();
      state.n29(this_0 instanceof StateRecord ? this_0 : THROW_CCE());
      var tmp_2 = this_0;
      tmp_1 = tmp_2 instanceof StateRecord ? tmp_2 : THROW_CCE();
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function usedLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = state.m29();
    var validRecord = null;
    var reuseLimit = get_pinningTable().r2p(get_nextSnapshotId()) - 1 | 0;
    var invalid = Companion_getInstance_14().d2n_1;
    while (!(current == null)) {
      var currentId = current.a2n_1;
      if (currentId === 0) {
        return current;
      }
      if (valid(current, reuseLimit, invalid)) {
        if (validRecord == null) {
          validRecord = current;
        } else {
          return current.a2n_1 < validRecord.a2n_1 ? current : validRecord;
        }
      }
      current = current.b2n_1;
    }
    return null;
  }
  function writableRecord(_this__u8e3s4, state, snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (snapshot.i2m()) {
      snapshot.o2m(state);
    }
    var id = snapshot.i1q();
    var tmp0_elvis_lhs = readable(_this__u8e3s4, id, snapshot.d2m());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      readError();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var readData = tmp;
    if (readData.a2n_1 === snapshot.i1q())
      return readData;
    var newData = newWritableRecord(readData, state, snapshot);
    snapshot.o2m(state);
    return newData;
  }
  function newWritableRecord(_this__u8e3s4, state, snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.newWritableRecord.<anonymous>' call
    return newWritableRecordLocked(_this__u8e3s4, state, snapshot);
  }
  function newWritableRecordLocked(_this__u8e3s4, state, snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    var newData = newOverwritableRecordLocked(_this__u8e3s4, state);
    newData.h29(_this__u8e3s4);
    newData.a2n_1 = snapshot.i1q();
    return newData;
  }
  function emptyLambda$lambda(it) {
    _init_properties_Snapshot_kt__l6n1ng();
    return Unit_instance;
  }
  function advanceGlobalSnapshot$lambda(it) {
    _init_properties_Snapshot_kt__l6n1ng();
    return Unit_instance;
  }
  function mergedReadObserver$lambda($readObserver, $parentObserver) {
    return function (state) {
      $readObserver(state);
      $parentObserver(state);
      return Unit_instance;
    };
  }
  function mergedWriteObserver$lambda($writeObserver, $parentObserver) {
    return function (state) {
      $writeObserver(state);
      $parentObserver(state);
      return Unit_instance;
    };
  }
  function takeNewSnapshot$lambda($block) {
    return function (invalid) {
      var result = $block(invalid);
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      set_openSnapshots(get_openSnapshots().f2n(result.i1q()));
      return result;
    };
  }
  var properties_initialized_Snapshot_kt_2vlcoq;
  function _init_properties_Snapshot_kt__l6n1ng() {
    if (!properties_initialized_Snapshot_kt_2vlcoq) {
      properties_initialized_Snapshot_kt_2vlcoq = true;
      emptyLambda = emptyLambda$lambda;
      threadSnapshot = new SnapshotThreadLocal();
      lock = createSynchronizedObject();
      openSnapshots = Companion_getInstance_14().d2n_1;
      nextSnapshotId = 1;
      pinningTable = new SnapshotDoubleIndexHeap();
      extraStateObjects = new SnapshotWeakSet();
      applyObservers = emptyList();
      globalWriteObservers = emptyList();
      // Inline function 'kotlin.also' call
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      var this_0 = new GlobalSnapshot(tmp0, Companion_getInstance_14().d2n_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.currentGlobalSnapshot.<anonymous>' call
      set_openSnapshots(get_openSnapshots().f2n(this_0.i1q()));
      currentGlobalSnapshot = new AtomicReference(this_0);
      snapshotInitializer = get_currentGlobalSnapshot().hw();
      pendingApplyObserverCount = new AtomicInt(0);
    }
  }
  function shiftUp($this, index) {
    var values = $this.f2o_1;
    var value = values[index];
    var current = index;
    $l$loop: while (current > 0) {
      var parent = ((current + 1 | 0) >> 1) - 1 | 0;
      if (values[parent] > value) {
        swap($this, parent, current);
        current = parent;
        continue $l$loop;
      }
      break $l$loop;
    }
  }
  function shiftDown($this, index) {
    var values = $this.f2o_1;
    var half = $this.e2o_1 >> 1;
    var current = index;
    while (current < half) {
      var right = (current + 1 | 0) << 1;
      var left = right - 1 | 0;
      if (right < $this.e2o_1 ? values[right] < values[left] : false) {
        if (values[right] < values[current]) {
          swap($this, right, current);
          current = right;
        } else
          return Unit_instance;
      } else if (values[left] < values[current]) {
        swap($this, left, current);
        current = left;
      } else
        return Unit_instance;
    }
  }
  function swap($this, a, b) {
    var values = $this.f2o_1;
    var index = $this.g2o_1;
    var handles = $this.h2o_1;
    var t = values[a];
    values[a] = values[b];
    values[b] = t;
    t = index[a];
    index[a] = index[b];
    index[b] = t;
    handles[index[a]] = a;
    handles[index[b]] = b;
  }
  function ensure($this, atLeast) {
    var capacity = $this.f2o_1.length;
    if (atLeast <= capacity)
      return Unit_instance;
    var newCapacity = imul(capacity, 2);
    var newValues = new Int32Array(newCapacity);
    var newIndex = new Int32Array(newCapacity);
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = $this.f2o_1;
    var endIndex = this_0.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, newValues, 0, 0, endIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var this_1 = $this.g2o_1;
    var endIndex_0 = this_1.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = this_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_0, newIndex, 0, 0, endIndex_0);
    $this.f2o_1 = newValues;
    $this.g2o_1 = newIndex;
  }
  function allocateHandle($this) {
    var capacity = $this.h2o_1.length;
    if ($this.i2o_1 >= capacity) {
      var tmp = 0;
      var tmp_0 = imul(capacity, 2);
      var tmp_1 = new Int32Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        tmp_1[tmp_2] = tmp_2 + 1 | 0;
        tmp = tmp + 1 | 0;
      }
      var newHandles = tmp_1;
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = $this.h2o_1;
      var endIndex = this_0.length;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_3 = this_0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_3, newHandles, 0, 0, endIndex);
      $this.h2o_1 = newHandles;
    }
    var handle = $this.i2o_1;
    $this.i2o_1 = $this.h2o_1[$this.i2o_1];
    return handle;
  }
  function freeHandle($this, handle) {
    $this.h2o_1[handle] = $this.i2o_1;
    $this.i2o_1 = handle;
  }
  function SnapshotDoubleIndexHeap() {
    this.e2o_1 = 0;
    this.f2o_1 = new Int32Array(16);
    this.g2o_1 = new Int32Array(16);
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = new Int32Array(16);
    while (tmp_0 < 16) {
      var tmp_2 = tmp_0;
      tmp_1[tmp_2] = tmp_2 + 1 | 0;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.h2o_1 = tmp_1;
    this.i2o_1 = 0;
  }
  protoOf(SnapshotDoubleIndexHeap).r2p = function (default_0) {
    return this.e2o_1 > 0 ? this.f2o_1[0] : default_0;
  };
  protoOf(SnapshotDoubleIndexHeap).j2o = function (value) {
    ensure(this, this.e2o_1 + 1 | 0);
    var tmp1 = this.e2o_1;
    this.e2o_1 = tmp1 + 1 | 0;
    var i = tmp1;
    var handle = allocateHandle(this);
    this.f2o_1[i] = value;
    this.g2o_1[i] = handle;
    this.h2o_1[handle] = i;
    shiftUp(this, i);
    return handle;
  };
  protoOf(SnapshotDoubleIndexHeap).k2o = function (handle) {
    var i = this.h2o_1[handle];
    swap(this, i, this.e2o_1 - 1 | 0);
    this.e2o_1 = this.e2o_1 - 1 | 0;
    shiftUp(this, i);
    shiftDown(this, i);
    freeHandle(this, handle);
  };
  function Companion_13() {
    Companion_instance_14 = this;
    this.d2n_1 = new SnapshotIdSet(new Long(0, 0), new Long(0, 0), 0, null);
  }
  var Companion_instance_14;
  function Companion_getInstance_14() {
    if (Companion_instance_14 == null)
      new Companion_13();
    return Companion_instance_14;
  }
  function SnapshotIdSet$iterator$slambda(this$0, resultContinuation) {
    this.b2r_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SnapshotIdSet$iterator$slambda).k2r = function ($this$sequence, $completion) {
    var tmp = this.l2r($this$sequence, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(SnapshotIdSet$iterator$slambda).yc = function (p1, $completion) {
    return this.k2r(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SnapshotIdSet$iterator$slambda).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 15;
            this.d2r_1 = this.b2r_1.v2m_1;
            if (!(this.d2r_1 == null)) {
              this.e2r_1 = intArrayIterator(this.d2r_1);
              this.ac_1 = 1;
              continue $sm;
            } else {
              this.ac_1 = 4;
              continue $sm;
            }

          case 1:
            if (!this.e2r_1.d1()) {
              this.ac_1 = 3;
              continue $sm;
            }

            this.f2r_1 = this.e2r_1.f1();
            this.ac_1 = 2;
            suspendResult = this.c2r_1.df(this.f2r_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.ac_1 = 1;
            continue $sm;
          case 3:
            this.ac_1 = 4;
            continue $sm;
          case 4:
            if (!this.b2r_1.t2m_1.equals(new Long(0, 0))) {
              var tmp_0 = this;
              Companion_getInstance();
              tmp_0.g2r_1 = until(0, 64).o();
              this.ac_1 = 5;
              continue $sm;
            } else {
              this.ac_1 = 9;
              continue $sm;
            }

          case 5:
            if (!this.g2r_1.d1()) {
              this.ac_1 = 8;
              continue $sm;
            }

            this.h2r_1 = this.g2r_1.f1();
            if (!this.b2r_1.t2m_1.ob((new Long(1, 0)).lb(this.h2r_1)).equals(new Long(0, 0))) {
              this.ac_1 = 6;
              suspendResult = this.c2r_1.df(this.h2r_1 + this.b2r_1.u2m_1 | 0, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.ac_1 = 7;
              continue $sm;
            }

          case 6:
            this.ac_1 = 7;
            continue $sm;
          case 7:
            this.ac_1 = 5;
            continue $sm;
          case 8:
            this.ac_1 = 9;
            continue $sm;
          case 9:
            if (!this.b2r_1.s2m_1.equals(new Long(0, 0))) {
              var tmp_1 = this;
              Companion_getInstance();
              tmp_1.i2r_1 = until(0, 64).o();
              this.ac_1 = 10;
              continue $sm;
            } else {
              this.ac_1 = 14;
              continue $sm;
            }

          case 10:
            if (!this.i2r_1.d1()) {
              this.ac_1 = 13;
              continue $sm;
            }

            this.j2r_1 = this.i2r_1.f1();
            if (!this.b2r_1.s2m_1.ob((new Long(1, 0)).lb(this.j2r_1)).equals(new Long(0, 0))) {
              this.ac_1 = 11;
              Companion_getInstance();
              suspendResult = this.c2r_1.df((this.j2r_1 + 64 | 0) + this.b2r_1.u2m_1 | 0, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.ac_1 = 12;
              continue $sm;
            }

          case 11:
            this.ac_1 = 12;
            continue $sm;
          case 12:
            this.ac_1 = 10;
            continue $sm;
          case 13:
            this.ac_1 = 14;
            continue $sm;
          case 14:
            return Unit_instance;
          case 15:
            throw this.dc_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.bc_1 === 15) {
          throw e;
        } else {
          this.ac_1 = this.bc_1;
          this.dc_1 = e;
        }
      }
     while (true);
  };
  protoOf(SnapshotIdSet$iterator$slambda).l2r = function ($this$sequence, completion) {
    var i = new SnapshotIdSet$iterator$slambda(this.b2r_1, completion);
    i.c2r_1 = $this$sequence;
    return i;
  };
  function SnapshotIdSet$iterator$slambda_0(this$0, resultContinuation) {
    var i = new SnapshotIdSet$iterator$slambda(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.k2r($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SnapshotIdSet(upperSet, lowerSet, lowerBound, belowBound) {
    Companion_getInstance_14();
    this.s2m_1 = upperSet;
    this.t2m_1 = lowerSet;
    this.u2m_1 = lowerBound;
    this.v2m_1 = belowBound;
  }
  protoOf(SnapshotIdSet).n = function (bit) {
    var offset = bit - this.u2m_1 | 0;
    var tmp;
    if (offset >= 0) {
      Companion_getInstance();
      tmp = offset < 64;
    } else {
      tmp = false;
    }
    if (tmp) {
      return !(new Long(1, 0)).lb(offset).ob(this.t2m_1).equals(new Long(0, 0));
    } else {
      var tmp_0;
      Companion_getInstance();
      if (offset >= 64) {
        Companion_getInstance();
        tmp_0 = offset < imul(64, 2);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        var tmp_1 = new Long(1, 0);
        Companion_getInstance();
        return !tmp_1.lb(offset - 64 | 0).ob(this.s2m_1).equals(new Long(0, 0));
      } else {
        if (offset > 0) {
          return false;
        } else {
          var tmp0_safe_receiver = this.v2m_1;
          var tmp_2;
          if (tmp0_safe_receiver == null) {
            tmp_2 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.get.<anonymous>' call
            tmp_2 = binarySearch(tmp0_safe_receiver, bit) >= 0;
          }
          var tmp1_elvis_lhs = tmp_2;
          return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
        }
      }
    }
  };
  protoOf(SnapshotIdSet).f2n = function (bit) {
    var offset = bit - this.u2m_1 | 0;
    var tmp;
    if (offset >= 0) {
      Companion_getInstance();
      tmp = offset < 64;
    } else {
      tmp = false;
    }
    if (tmp) {
      var mask = (new Long(1, 0)).lb(offset);
      if (this.t2m_1.ob(mask).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.s2m_1, this.t2m_1.pb(mask), this.u2m_1, this.v2m_1);
      }
    } else {
      var tmp_0;
      Companion_getInstance();
      if (offset >= 64) {
        Companion_getInstance();
        tmp_0 = offset < imul(64, 2);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        var tmp_1 = new Long(1, 0);
        Companion_getInstance();
        var mask_0 = tmp_1.lb(offset - 64 | 0);
        if (this.s2m_1.ob(mask_0).equals(new Long(0, 0))) {
          return new SnapshotIdSet(this.s2m_1.pb(mask_0), this.t2m_1, this.u2m_1, this.v2m_1);
        }
      } else {
        Companion_getInstance();
        if (offset >= imul(64, 2)) {
          if (!this.n(bit)) {
            var newUpperSet = this.s2m_1;
            var newLowerSet = this.t2m_1;
            var newLowerBound = this.u2m_1;
            var newBelowBound = null;
            var tmp_2 = bit + 1 | 0;
            Companion_getInstance();
            var tmp_3 = tmp_2 / 64 | 0;
            Companion_getInstance();
            var targetLowerBound = imul(tmp_3, 64);
            $l$loop: while (newLowerBound < targetLowerBound) {
              if (!newLowerSet.equals(new Long(0, 0))) {
                if (newBelowBound == null) {
                  // Inline function 'kotlin.apply' call
                  // Inline function 'kotlin.collections.mutableListOf' call
                  var this_0 = ArrayList_init_$Create$();
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>' call
                  var tmp0_safe_receiver = this.v2m_1;
                  if (tmp0_safe_receiver == null)
                    null;
                  else {
                    // Inline function 'kotlin.let' call
                    // Inline function 'kotlin.contracts.contract' call
                    var inductionVariable = 0;
                    var last = tmp0_safe_receiver.length;
                    while (inductionVariable < last) {
                      var element = tmp0_safe_receiver[inductionVariable];
                      inductionVariable = inductionVariable + 1 | 0;
                      // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>.<anonymous>.<anonymous>' call
                      this_0.a1(element);
                    }
                  }
                  newBelowBound = this_0;
                }
                // Inline function 'kotlin.repeat' call
                Companion_getInstance();
                // Inline function 'kotlin.contracts.contract' call
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < 64)
                  do {
                    var index = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>' call
                    if (!newLowerSet.ob((new Long(1, 0)).lb(index)).equals(new Long(0, 0))) {
                      newBelowBound.a1(index + newLowerBound | 0);
                    }
                  }
                   while (inductionVariable_0 < 64);
              }
              if (newUpperSet.equals(new Long(0, 0))) {
                newLowerBound = targetLowerBound;
                newLowerSet = new Long(0, 0);
                break $l$loop;
              }
              newLowerSet = newUpperSet;
              newUpperSet = new Long(0, 0);
              var tmp_4 = newLowerBound;
              Companion_getInstance();
              newLowerBound = tmp_4 + 64 | 0;
            }
            var tmp_5 = newUpperSet;
            var tmp_6 = newLowerSet;
            var tmp_7 = newLowerBound;
            var tmp0_safe_receiver_0 = newBelowBound;
            var tmp1_elvis_lhs = tmp0_safe_receiver_0 == null ? null : toIntArray(tmp0_safe_receiver_0);
            return (new SnapshotIdSet(tmp_5, tmp_6, tmp_7, tmp1_elvis_lhs == null ? this.v2m_1 : tmp1_elvis_lhs)).f2n(bit);
          }
        } else {
          var tmp2_elvis_lhs = this.v2m_1;
          var tmp_8;
          if (tmp2_elvis_lhs == null) {
            // Inline function 'kotlin.intArrayOf' call
            var tmp$ret$3 = new Int32Array([bit]);
            return new SnapshotIdSet(this.s2m_1, this.t2m_1, this.u2m_1, tmp$ret$3);
          } else {
            tmp_8 = tmp2_elvis_lhs;
          }
          var array = tmp_8;
          var location = binarySearch(array, bit);
          if (location < 0) {
            var insertLocation = -(location + 1 | 0) | 0;
            var newSize = array.length + 1 | 0;
            var newBelowBound_0 = new Int32Array(newSize);
            // Inline function 'kotlin.collections.copyInto' call
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_9 = array;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            arrayCopy(tmp_9, newBelowBound_0, 0, 0, insertLocation);
            // Inline function 'kotlin.collections.copyInto' call
            var destinationOffset = insertLocation + 1 | 0;
            var endIndex = newSize - 1 | 0;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_10 = array;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            arrayCopy(tmp_10, newBelowBound_0, destinationOffset, insertLocation, endIndex);
            newBelowBound_0[insertLocation] = bit;
            return new SnapshotIdSet(this.s2m_1, this.t2m_1, this.u2m_1, newBelowBound_0);
          }
        }
      }
    }
    return this;
  };
  protoOf(SnapshotIdSet).w2m = function (bit) {
    var offset = bit - this.u2m_1 | 0;
    var tmp;
    if (offset >= 0) {
      Companion_getInstance();
      tmp = offset < 64;
    } else {
      tmp = false;
    }
    if (tmp) {
      var mask = (new Long(1, 0)).lb(offset);
      if (!this.t2m_1.ob(mask).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.s2m_1, this.t2m_1.ob(mask.kb()), this.u2m_1, this.v2m_1);
      }
    } else {
      var tmp_0;
      Companion_getInstance();
      if (offset >= 64) {
        Companion_getInstance();
        tmp_0 = offset < imul(64, 2);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        var tmp_1 = new Long(1, 0);
        Companion_getInstance();
        var mask_0 = tmp_1.lb(offset - 64 | 0);
        if (!this.s2m_1.ob(mask_0).equals(new Long(0, 0))) {
          return new SnapshotIdSet(this.s2m_1.ob(mask_0.kb()), this.t2m_1, this.u2m_1, this.v2m_1);
        }
      } else {
        if (offset < 0) {
          var array = this.v2m_1;
          if (!(array == null)) {
            var location = binarySearch(array, bit);
            if (location >= 0) {
              var newSize = array.length - 1 | 0;
              if (newSize === 0) {
                return new SnapshotIdSet(this.s2m_1, this.t2m_1, this.u2m_1, null);
              }
              var newBelowBound = new Int32Array(newSize);
              if (location > 0) {
                // Inline function 'kotlin.collections.copyInto' call
                // Inline function 'kotlin.js.unsafeCast' call
                // Inline function 'kotlin.js.asDynamic' call
                var tmp_2 = array;
                // Inline function 'kotlin.js.unsafeCast' call
                // Inline function 'kotlin.js.asDynamic' call
                arrayCopy(tmp_2, newBelowBound, 0, 0, location);
              }
              if (location < newSize) {
                // Inline function 'kotlin.collections.copyInto' call
                var startIndex = location + 1 | 0;
                var endIndex = newSize + 1 | 0;
                // Inline function 'kotlin.js.unsafeCast' call
                // Inline function 'kotlin.js.asDynamic' call
                var tmp_3 = array;
                // Inline function 'kotlin.js.unsafeCast' call
                // Inline function 'kotlin.js.asDynamic' call
                arrayCopy(tmp_3, newBelowBound, location, startIndex, endIndex);
              }
              return new SnapshotIdSet(this.s2m_1, this.t2m_1, this.u2m_1, newBelowBound);
            }
          }
        }
      }
    }
    return this;
  };
  protoOf(SnapshotIdSet).i2n = function (bits) {
    if (bits === Companion_getInstance_14().d2n_1)
      return this;
    if (this === Companion_getInstance_14().d2n_1)
      return Companion_getInstance_14().d2n_1;
    var tmp;
    if (bits.u2m_1 === this.u2m_1 ? bits.v2m_1 === this.v2m_1 : false) {
      tmp = new SnapshotIdSet(this.s2m_1.ob(bits.s2m_1.kb()), this.t2m_1.ob(bits.t2m_1.kb()), this.u2m_1, this.v2m_1);
    } else {
      // Inline function 'kotlin.collections.fold' call
      var accumulator = this;
      var tmp0_iterator = bits.o();
      while (tmp0_iterator.d1()) {
        var element = tmp0_iterator.f1();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.andNot.<anonymous>' call
        accumulator = accumulator.w2m(element);
      }
      tmp = accumulator;
    }
    return tmp;
  };
  protoOf(SnapshotIdSet).j2n = function (bits) {
    if (bits === Companion_getInstance_14().d2n_1)
      return this;
    if (this === Companion_getInstance_14().d2n_1)
      return bits;
    var tmp;
    if (bits.u2m_1 === this.u2m_1 ? bits.v2m_1 === this.v2m_1 : false) {
      tmp = new SnapshotIdSet(this.s2m_1.pb(bits.s2m_1), this.t2m_1.pb(bits.t2m_1), this.u2m_1, this.v2m_1);
    } else {
      var tmp_0;
      if (this.v2m_1 == null) {
        // Inline function 'kotlin.collections.fold' call
        var accumulator = bits;
        var tmp0_iterator = this.o();
        while (tmp0_iterator.d1()) {
          var element = tmp0_iterator.f1();
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
          accumulator = accumulator.f2n(element);
        }
        tmp_0 = accumulator;
      } else {
        // Inline function 'kotlin.collections.fold' call
        var accumulator_0 = this;
        var tmp0_iterator_0 = bits.o();
        while (tmp0_iterator_0.d1()) {
          var element_0 = tmp0_iterator_0.f1();
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
          accumulator_0 = accumulator_0.f2n(element_0);
        }
        tmp_0 = accumulator_0;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(SnapshotIdSet).o = function () {
    return sequence(SnapshotIdSet$iterator$slambda_0(this, null)).o();
  };
  protoOf(SnapshotIdSet).d2o = function (default_0) {
    var belowBound = this.v2m_1;
    if (!(belowBound == null))
      return belowBound[0];
    if (!this.t2m_1.equals(new Long(0, 0)))
      return this.u2m_1 + lowestBitOf(this.t2m_1) | 0;
    if (!this.s2m_1.equals(new Long(0, 0))) {
      Companion_getInstance();
      return (this.u2m_1 + 64 | 0) + lowestBitOf(this.s2m_1) | 0;
    }
    return default_0;
  };
  protoOf(SnapshotIdSet).toString = function () {
    var tmp = anyToString(this);
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this, 10));
    var tmp0_iterator = this.o();
    while (tmp0_iterator.d1()) {
      var item = tmp0_iterator.f1();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.toString.<anonymous>' call
      var tmp$ret$0 = item.toString();
      destination.a1(tmp$ret$0);
    }
    return tmp + ' [' + fastJoinToString(destination) + ']';
  };
  function binarySearch(_this__u8e3s4, value) {
    var low = 0;
    var high = _this__u8e3s4.length - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4[mid];
      if (value > midVal)
        low = mid + 1 | 0;
      else if (value < midVal)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function lowestBitOf(bits) {
    var b = bits;
    var base = 0;
    if (b.ob(new Long(-1, 0)).equals(new Long(0, 0))) {
      base = base + 32 | 0;
      b = b.mb(32);
    }
    if (b.ob(new Long(65535, 0)).equals(new Long(0, 0))) {
      base = base + 16 | 0;
      b = b.mb(16);
    }
    if (b.ob(new Long(255, 0)).equals(new Long(0, 0))) {
      base = base + 8 | 0;
      b = b.mb(8);
    }
    if (b.ob(new Long(15, 0)).equals(new Long(0, 0))) {
      base = base + 4 | 0;
      b = b.mb(4);
    }
    if (!b.ob(new Long(1, 0)).equals(new Long(0, 0)))
      return base;
    if (!b.ob(new Long(2, 0)).equals(new Long(0, 0)))
      return base + 1 | 0;
    if (!b.ob(new Long(4, 0)).equals(new Long(0, 0)))
      return base + 2 | 0;
    if (!b.ob(new Long(8, 0)).equals(new Long(0, 0)))
      return base + 3 | 0;
    return -1;
  }
  function SnapshotMutableState() {
  }
  function get_sync() {
    _init_properties_SnapshotStateMap_kt__p43o8h();
    return sync;
  }
  var sync;
  function unsupported() {
    _init_properties_SnapshotStateMap_kt__p43o8h();
    throw UnsupportedOperationException_init_$Create$();
  }
  function StateMapStateRecord(map) {
    StateRecord.call(this);
    this.o2r_1 = map;
    this.p2r_1 = 0;
  }
  protoOf(StateMapStateRecord).h29 = function (value) {
    var other = value instanceof StateMapStateRecord ? value : THROW_CCE();
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    _get_sync_$accessor$1495rdf_ktm4s();
    this.o2r_1 = other.o2r_1;
    this.p2r_1 = other.p2r_1;
  };
  protoOf(StateMapStateRecord).i29 = function () {
    return new StateMapStateRecord(this.o2r_1);
  };
  function SnapshotStateMap() {
    this.q2r_1 = new StateMapStateRecord(persistentHashMapOf());
    this.r2r_1 = new SnapshotMapEntrySet(this);
    this.s2r_1 = new SnapshotMapKeySet(this);
    this.t2r_1 = new SnapshotMapValueSet(this);
  }
  protoOf(SnapshotStateMap).m29 = function () {
    return this.q2r_1;
  };
  protoOf(SnapshotStateMap).n29 = function (value) {
    var tmp = this;
    tmp.q2r_1 = value instanceof StateMapStateRecord ? value : THROW_CCE();
  };
  protoOf(SnapshotStateMap).m = function () {
    return this.u2r().o2r_1.m();
  };
  protoOf(SnapshotStateMap).u2 = function (key) {
    return this.u2r().o2r_1.u2(key);
  };
  protoOf(SnapshotStateMap).v2 = function (value) {
    return this.u2r().o2r_1.v2(value);
  };
  protoOf(SnapshotStateMap).x2 = function (key) {
    return this.u2r().o2r_1.x2(key);
  };
  protoOf(SnapshotStateMap).u = function () {
    return this.u2r().o2r_1.u();
  };
  protoOf(SnapshotStateMap).m2 = function () {
    return this.r2r_1;
  };
  protoOf(SnapshotStateMap).k2 = function () {
    return this.s2r_1;
  };
  protoOf(SnapshotStateMap).l2 = function () {
    return this.t2r_1;
  };
  protoOf(SnapshotStateMap).h1 = function () {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.update' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.withCurrent' call
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var tmp = this.q2r_1;
    var this_0 = tmp instanceof StateMapStateRecord ? tmp : THROW_CCE();
    var $this$withCurrent = current(this_0);
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.clear.<anonymous>' call
    $this$withCurrent.o2r_1;
    var newMap = persistentHashMapOf();
    var tmp_0;
    if (!(newMap === $this$withCurrent.o2r_1)) {
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_1 = this.q2r_1;
      var this_1 = tmp_1 instanceof StateMapStateRecord ? tmp_1 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.n1f();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.update.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_1, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$1495rdf_ktm4s();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.update.<anonymous>.<anonymous>.<anonymous>' call
      $this$writable.o2r_1 = newMap;
      $this$writable.p2r_1 = $this$writable.p2r_1 + 1 | 0;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      tmp_0 = Unit_instance;
    }
    return tmp_0;
  };
  protoOf(SnapshotStateMap).n2 = function (key, value) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate' call
    var result;
    $l$loop: while (true) {
      var oldMap = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$1495rdf_ktm4s();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.q2r_1;
      var this_0 = tmp instanceof StateMapStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      oldMap = current_0.o2r_1;
      currentModification = current_0.p2r_1;
      var builder = ensureNotNull(oldMap).j1m();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.put.<anonymous>' call
      result = builder.n2(key, value);
      var newMap = builder.e3();
      var tmp_0;
      if (equals(newMap, oldMap)) {
        tmp_0 = true;
      } else {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.writable' call
        // Inline function 'androidx.compose.runtime.snapshots.writable' call
        var tmp_1 = this.q2r_1;
        var this_1 = tmp_1 instanceof StateMapStateRecord ? tmp_1 : THROW_CCE();
        var snapshot = get_snapshotInitializer();
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.snapshots.sync' call
        // Inline function 'androidx.compose.runtime.synchronized' call
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        get_lock();
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        snapshot = Companion_instance_12.n1f();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>' call
        var $this$writable = writableRecord(this_1, this, snapshot);
        // Inline function 'androidx.compose.runtime.synchronized' call
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        _get_sync_$accessor$1495rdf_ktm4s();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>.<anonymous>' call
        var tmp_2;
        if ($this$writable.p2r_1 === currentModification) {
          $this$writable.o2r_1 = newMap;
          $this$writable.p2r_1 = $this$writable.p2r_1 + 1 | 0;
          tmp_2 = true;
        } else {
          tmp_2 = false;
        }
        var this_2 = tmp_2;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        notifyWrite(snapshot, this);
        tmp_0 = this_2;
      }
      if (tmp_0)
        break $l$loop;
    }
    return result;
  };
  protoOf(SnapshotStateMap).o2 = function (from) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate' call
    var result;
    $l$loop: while (true) {
      var oldMap = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$1495rdf_ktm4s();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.q2r_1;
      var this_0 = tmp instanceof StateMapStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      oldMap = current_0.o2r_1;
      currentModification = current_0.p2r_1;
      var builder = ensureNotNull(oldMap).j1m();
      builder.o2(from);
      result = Unit_instance;
      var newMap = builder.e3();
      var tmp_0;
      if (equals(newMap, oldMap)) {
        tmp_0 = true;
      } else {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.writable' call
        // Inline function 'androidx.compose.runtime.snapshots.writable' call
        var tmp_1 = this.q2r_1;
        var this_1 = tmp_1 instanceof StateMapStateRecord ? tmp_1 : THROW_CCE();
        var snapshot = get_snapshotInitializer();
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.snapshots.sync' call
        // Inline function 'androidx.compose.runtime.synchronized' call
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        get_lock();
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        snapshot = Companion_instance_12.n1f();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>' call
        var $this$writable = writableRecord(this_1, this, snapshot);
        // Inline function 'androidx.compose.runtime.synchronized' call
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        _get_sync_$accessor$1495rdf_ktm4s();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>.<anonymous>' call
        var tmp_2;
        if ($this$writable.p2r_1 === currentModification) {
          $this$writable.o2r_1 = newMap;
          $this$writable.p2r_1 = $this$writable.p2r_1 + 1 | 0;
          tmp_2 = true;
        } else {
          tmp_2 = false;
        }
        var this_2 = tmp_2;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        notifyWrite(snapshot, this);
        tmp_0 = this_2;
      }
      if (tmp_0)
        break $l$loop;
    }
    return result;
  };
  protoOf(SnapshotStateMap).r2 = function (key) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate' call
    var result;
    $l$loop: while (true) {
      var oldMap = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$1495rdf_ktm4s();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.q2r_1;
      var this_0 = tmp instanceof StateMapStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      oldMap = current_0.o2r_1;
      currentModification = current_0.p2r_1;
      var builder = ensureNotNull(oldMap).j1m();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.remove.<anonymous>' call
      result = builder.r2(key);
      var newMap = builder.e3();
      var tmp_0;
      if (equals(newMap, oldMap)) {
        tmp_0 = true;
      } else {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.writable' call
        // Inline function 'androidx.compose.runtime.snapshots.writable' call
        var tmp_1 = this.q2r_1;
        var this_1 = tmp_1 instanceof StateMapStateRecord ? tmp_1 : THROW_CCE();
        var snapshot = get_snapshotInitializer();
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.snapshots.sync' call
        // Inline function 'androidx.compose.runtime.synchronized' call
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        get_lock();
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        snapshot = Companion_instance_12.n1f();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>' call
        var $this$writable = writableRecord(this_1, this, snapshot);
        // Inline function 'androidx.compose.runtime.synchronized' call
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        _get_sync_$accessor$1495rdf_ktm4s();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>.<anonymous>' call
        var tmp_2;
        if ($this$writable.p2r_1 === currentModification) {
          $this$writable.o2r_1 = newMap;
          $this$writable.p2r_1 = $this$writable.p2r_1 + 1 | 0;
          tmp_2 = true;
        } else {
          tmp_2 = false;
        }
        var this_2 = tmp_2;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        notifyWrite(snapshot, this);
        tmp_0 = this_2;
      }
      if (tmp_0)
        break $l$loop;
    }
    return result;
  };
  protoOf(SnapshotStateMap).v2r = function () {
    return this.u2r().p2r_1;
  };
  protoOf(SnapshotStateMap).w3 = function (value) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = this.r2r_1.o();
      while (tmp0_iterator.d1()) {
        var element = tmp0_iterator.f1();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.removeValue.<anonymous>' call
        if (equals(element.q2(), value)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.removeValue.<anonymous>' call
      this.r2(tmp0_safe_receiver.p2());
      tmp = true;
    }
    return tmp === true;
  };
  protoOf(SnapshotStateMap).u2r = function () {
    var tmp = this.q2r_1;
    return readable_0(tmp instanceof StateMapStateRecord ? tmp : THROW_CCE(), this);
  };
  function SnapshotMapEntrySet(map) {
    SnapshotMapSet.call(this, map);
  }
  protoOf(SnapshotMapEntrySet).z2j = function (element) {
    unsupported();
  };
  protoOf(SnapshotMapEntrySet).a1 = function (element) {
    return this.z2j((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  protoOf(SnapshotMapEntrySet).x2r = function (elements) {
    unsupported();
  };
  protoOf(SnapshotMapEntrySet).g1 = function (elements) {
    return this.x2r(elements);
  };
  protoOf(SnapshotMapEntrySet).o = function () {
    return new StateMapMutableEntriesIterator(this.y2r_1, this.y2r_1.u2r().o2r_1.m2().o());
  };
  protoOf(SnapshotMapEntrySet).z2r = function (element) {
    return !(this.y2r_1.r2(element.p2()) == null);
  };
  protoOf(SnapshotMapEntrySet).b1 = function (element) {
    if (!(!(element == null) ? isInterface(element, MutableEntry) : false))
      return false;
    return this.z2r((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  protoOf(SnapshotMapEntrySet).a2s = function (element) {
    return equals(this.y2r_1.x2(element.p2()), element.q2());
  };
  protoOf(SnapshotMapEntrySet).s = function (element) {
    if (!(!(element == null) ? isInterface(element, MutableEntry) : false))
      return false;
    return this.a2s((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  protoOf(SnapshotMapEntrySet).b2s = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.u();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.o();
      while (tmp0_iterator.d1()) {
        var element = tmp0_iterator.f1();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotMapEntrySet.containsAll.<anonymous>' call
        if (!this.a2s(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(SnapshotMapEntrySet).t = function (elements) {
    return this.b2s(elements);
  };
  function SnapshotMapKeySet(map) {
    SnapshotMapSet.call(this, map);
  }
  protoOf(SnapshotMapKeySet).i4 = function (element) {
    unsupported();
  };
  protoOf(SnapshotMapKeySet).a1 = function (element) {
    return this.i4((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotMapKeySet).d2s = function (elements) {
    unsupported();
  };
  protoOf(SnapshotMapKeySet).g1 = function (elements) {
    return this.d2s(elements);
  };
  protoOf(SnapshotMapKeySet).o = function () {
    return new StateMapMutableKeysIterator(this.y2r_1, this.y2r_1.u2r().o2r_1.m2().o());
  };
  protoOf(SnapshotMapKeySet).r2 = function (element) {
    return !(this.y2r_1.r2(element) == null);
  };
  protoOf(SnapshotMapKeySet).b1 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.r2((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotMapKeySet).n3 = function (element) {
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = this.y2r_1;
    return (isInterface(this_0, Map) ? this_0 : THROW_CCE()).u2(element);
  };
  protoOf(SnapshotMapKeySet).s = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.n3((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotMapKeySet).e2s = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.u();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.o();
      while (tmp0_iterator.d1()) {
        var element = tmp0_iterator.f1();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotMapKeySet.containsAll.<anonymous>' call
        // Inline function 'kotlin.collections.contains' call
        // Inline function 'kotlin.collections.containsKey' call
        var this_0 = this.y2r_1;
        if (!(isInterface(this_0, Map) ? this_0 : THROW_CCE()).u2(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(SnapshotMapKeySet).t = function (elements) {
    return this.e2s(elements);
  };
  function SnapshotMapValueSet(map) {
    SnapshotMapSet.call(this, map);
  }
  protoOf(SnapshotMapValueSet).s3 = function (element) {
    unsupported();
  };
  protoOf(SnapshotMapValueSet).a1 = function (element) {
    return this.s3((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotMapValueSet).t3 = function (elements) {
    unsupported();
  };
  protoOf(SnapshotMapValueSet).g1 = function (elements) {
    return this.t3(elements);
  };
  protoOf(SnapshotMapValueSet).o = function () {
    return new StateMapMutableValuesIterator(this.y2r_1, this.y2r_1.u2r().o2r_1.m2().o());
  };
  protoOf(SnapshotMapValueSet).v3 = function (element) {
    return this.y2r_1.w3(element);
  };
  protoOf(SnapshotMapValueSet).b1 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.v3((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotMapValueSet).r3 = function (element) {
    return this.y2r_1.v2(element);
  };
  protoOf(SnapshotMapValueSet).s = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.r3((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotMapValueSet).g2s = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.u();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.o();
      while (tmp0_iterator.d1()) {
        var element = tmp0_iterator.f1();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotMapValueSet.containsAll.<anonymous>' call
        if (!this.y2r_1.v2(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(SnapshotMapValueSet).t = function (elements) {
    return this.g2s(elements);
  };
  function SnapshotMapSet(map) {
    this.y2r_1 = map;
  }
  protoOf(SnapshotMapSet).m = function () {
    return this.y2r_1.m();
  };
  protoOf(SnapshotMapSet).h1 = function () {
    return this.y2r_1.h1();
  };
  protoOf(SnapshotMapSet).u = function () {
    return this.y2r_1.u();
  };
  function StateMapMutableEntriesIterator$next$1(this$0) {
    this.j2s_1 = this$0;
    this.h2s_1 = ensureNotNull(this$0.n2s_1).p2();
    this.i2s_1 = ensureNotNull(this$0.n2s_1).q2();
  }
  protoOf(StateMapMutableEntriesIterator$next$1).p2 = function () {
    return this.h2s_1;
  };
  protoOf(StateMapMutableEntriesIterator$next$1).q2 = function () {
    return this.i2s_1;
  };
  function StateMapMutableEntriesIterator(map, iterator) {
    StateMapMutableIterator.call(this, map, iterator);
  }
  protoOf(StateMapMutableEntriesIterator).f1 = function () {
    this.h2n();
    if (!(this.n2s_1 == null)) {
      return new StateMapMutableEntriesIterator$next$1(this);
    } else {
      throw IllegalStateException_init_$Create$_0();
    }
  };
  function StateMapMutableKeysIterator(map, iterator) {
    StateMapMutableIterator.call(this, map, iterator);
  }
  protoOf(StateMapMutableKeysIterator).f1 = function () {
    var tmp0_elvis_lhs = this.o2s_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$_0();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var result = tmp;
    this.h2n();
    return result.p2();
  };
  function StateMapMutableValuesIterator(map, iterator) {
    StateMapMutableIterator.call(this, map, iterator);
  }
  protoOf(StateMapMutableValuesIterator).f1 = function () {
    var tmp0_elvis_lhs = this.o2s_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$_0();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var result = tmp;
    this.h2n();
    return result.q2();
  };
  function StateMapMutableIterator(map, iterator) {
    this.k2s_1 = map;
    this.l2s_1 = iterator;
    this.m2s_1 = this.k2s_1.v2r();
    this.n2s_1 = null;
    this.o2s_1 = null;
    this.h2n();
  }
  protoOf(StateMapMutableIterator).e1 = function () {
    // Inline function 'androidx.compose.runtime.snapshots.StateMapMutableIterator.modify' call
    if (!(this.k2s_1.v2r() === this.m2s_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
    // Inline function 'kotlin.also' call
    // Inline function 'androidx.compose.runtime.snapshots.StateMapMutableIterator.remove.<anonymous>' call
    var value = this.n2s_1;
    if (!(value == null)) {
      this.k2s_1.r2(value.p2());
      this.n2s_1 = null;
    } else {
      throw IllegalStateException_init_$Create$_0();
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.StateMapMutableIterator.modify.<anonymous>' call
    this.m2s_1 = this.k2s_1.v2r();
    return Unit_instance;
  };
  protoOf(StateMapMutableIterator).d1 = function () {
    return !(this.o2s_1 == null);
  };
  protoOf(StateMapMutableIterator).h2n = function () {
    this.n2s_1 = this.o2s_1;
    this.o2s_1 = this.l2s_1.d1() ? this.l2s_1.f1() : null;
  };
  function _get_sync_$accessor$1495rdf_ktm4s() {
    _init_properties_SnapshotStateMap_kt__p43o8h();
    return get_sync();
  }
  var properties_initialized_SnapshotStateMap_kt_9i73ip;
  function _init_properties_SnapshotStateMap_kt__p43o8h() {
    if (!properties_initialized_SnapshotStateMap_kt_9i73ip) {
      properties_initialized_SnapshotStateMap_kt_9i73ip = true;
      sync = createSynchronizedObject();
    }
  }
  function recordRead($this, value, currentToken, currentScope, recordedValues) {
    if ($this.n2t_1 > 0) {
      return Unit_instance;
    }
    var previousToken = recordedValues.ym(value, currentToken, -1);
    var tmp;
    if (isInterface(value, DerivedState)) {
      tmp = !(previousToken === currentToken);
    } else {
      tmp = false;
    }
    if (tmp) {
      var record = value.e1y();
      // Inline function 'kotlin.collections.set' call
      var this_0 = $this.p2t_1;
      var value_0 = record.t20();
      this_0.n2(value, value_0);
      var dependencies = record.f1y();
      var dependencyToDerivedStates = $this.o2t_1;
      dependencyToDerivedStates.d1y(value);
      // Inline function 'androidx.collection.ObjectIntMap.forEachKey' call
      var k = dependencies.om_1;
      $l$block: {
        // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
        var m = dependencies.nm_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            if (!this_1.ob(this_1.kb().lb(7)).ob(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.ob(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                    var index = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.ObjectIntMap.forEachKey.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordRead.<anonymous>' call
                    var tmp_0 = k[index];
                    var dependency = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                    if (dependency instanceof StateObjectImpl) {
                      // Inline function 'androidx.compose.runtime.snapshots.Companion.SnapshotStateObserver' call
                      var tmp$ret$2 = _ReaderKind___init__impl__jqeebu(2);
                      dependency.c1y(tmp$ret$2);
                    }
                    dependencyToDerivedStates.p1w(dependency, value);
                  }
                  slot = slot.mb(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block;
              }
            }
          }
           while (!(i === lastIndex));
      }
    }
    if (previousToken === -1) {
      if (value instanceof StateObjectImpl) {
        // Inline function 'androidx.compose.runtime.snapshots.Companion.SnapshotStateObserver' call
        var tmp$ret$4 = _ReaderKind___init__impl__jqeebu(2);
        value.c1y(tmp$ret$4);
      }
      $this.i2t_1.p1w(value, currentScope);
    }
  }
  function clearObsoleteStateReads($this, scope) {
    var currentToken = $this.h2t_1;
    var tmp0_safe_receiver = $this.g2t_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.collection.MutableObjectIntMap.removeIf' call
      $l$block: {
        // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
        var m = tmp0_safe_receiver.nm_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_0 = slot;
            if (!this_0.ob(this_0.kb().lb(7)).ob(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.ob(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                    var index = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.MutableObjectIntMap.removeIf.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.clearObsoleteStateReads.<anonymous>' call
                    var tmp = tmp0_safe_receiver.om_1[index];
                    var value = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                    // Inline function 'kotlin.also' call
                    var this_1 = !(tmp0_safe_receiver.pm_1[index] === currentToken);
                    // Inline function 'kotlin.contracts.contract' call
                    // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.clearObsoleteStateReads.<anonymous>.<anonymous>' call
                    if (this_1) {
                      removeObservation($this, scope, value);
                    }
                    if (this_1) {
                      tmp0_safe_receiver.zm(index);
                    }
                  }
                  slot = slot.mb(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block;
              }
            }
          }
           while (!(i === lastIndex));
      }
    }
  }
  function removeObservation($this, scope, value) {
    $this.i2t_1.n1w(value, scope);
    var tmp;
    if (isInterface(value, DerivedState)) {
      tmp = !$this.i2t_1.o1w(value);
    } else {
      tmp = false;
    }
    if (tmp) {
      $this.o2t_1.d1y(value);
      $this.p2t_1.r2(value);
    }
  }
  function SnapshotStateObserver$ObservedScopeMap$derivedStateObserver$1(this$0) {
    this.q2t_1 = this$0;
  }
  function drainChanges($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.x2t_1;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.drainChanges.<anonymous>' call
    if ($this.t2t_1)
      return false;
    var hasValues = false;
    while (true) {
      var tmp0_elvis_lhs = removeChanges($this);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return hasValues;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var notifications = tmp;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.forEachScopeMap' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      $this.x2t_1;
      var this_0 = $this.w2t_1;
      // Inline function 'kotlin.contracts.contract' call
      var size = this_0.p1q_1;
      var tmp_0;
      if (size > 0) {
        var i = 0;
        var tmp_1 = this_0.n1q_1;
        var content = isArray(tmp_1) ? tmp_1 : THROW_CCE();
        do {
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.drainChanges.<anonymous>' call
          hasValues = content[i].c2u(notifications) ? true : hasValues;
          i = i + 1 | 0;
        }
         while (i < size);
        tmp_0 = Unit_instance;
      }
    }
  }
  function sendNotifications($this) {
    $this.r2t_1(SnapshotStateObserver$sendNotifications$lambda($this));
  }
  function addChanges($this, set) {
    $l$loop: while (true) {
      var old = $this.s2t_1.hw();
      var tmp;
      if (old == null) {
        tmp = set;
      } else {
        if (!(old == null) ? isInterface(old, Set) : false) {
          tmp = listOf_0([old, set]);
        } else {
          if (!(old == null) ? isInterface(old, List) : false) {
            tmp = plus_2(old, listOf(set));
          } else {
            report($this);
          }
        }
      }
      var new_0 = tmp;
      if ($this.s2t_1.x1x(old, new_0))
        break $l$loop;
    }
  }
  function removeChanges($this) {
    while (true) {
      var old = $this.s2t_1.hw();
      var result;
      var new_0;
      if (old == null)
        return null;
      else {
        if (!(old == null) ? isInterface(old, Set) : false) {
          result = (old == null ? true : isInterface(old, Set)) ? old : THROW_CCE();
          new_0 = null;
        } else {
          if (!(old == null) ? isInterface(old, List) : false) {
            var tmp = old.n(0);
            result = (tmp == null ? true : isInterface(tmp, Set)) ? tmp : THROW_CCE();
            new_0 = old.m() === 2 ? old.n(1) : old.m() > 2 ? old.r(1, old.m()) : null;
          } else {
            report($this);
          }
        }
      }
      if ($this.s2t_1.x1x(old, new_0)) {
        return result;
      }
    }
  }
  function report($this) {
    composeRuntimeError('Unexpected notification');
  }
  function ensureMap($this, onChanged) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.runtime.collection.MutableVector.firstOrNull' call
      var this_0 = $this.w2t_1;
      // Inline function 'kotlin.contracts.contract' call
      var size = this_0.p1q_1;
      if (size > 0) {
        var i = 0;
        var tmp = this_0.n1q_1;
        var content = isArray(tmp) ? tmp : THROW_CCE();
        do {
          var item = content[i];
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.ensureMap.<anonymous>' call
          if (item.e2t_1 === onChanged) {
            tmp$ret$1 = item;
            break $l$block;
          }
          i = i + 1 | 0;
        }
         while (i < size);
      }
      tmp$ret$1 = null;
    }
    var scopeMap = tmp$ret$1;
    if (scopeMap == null) {
      var map = new ObservedScopeMap(typeof onChanged === 'function' ? onChanged : THROW_CCE());
      // Inline function 'androidx.compose.runtime.collection.MutableVector.plusAssign' call
      $this.w2t_1.q1q(map);
      return map;
    }
    return scopeMap;
  }
  function ObservedScopeMap(onChanged) {
    this.e2t_1 = onChanged;
    this.f2t_1 = null;
    this.g2t_1 = null;
    this.h2t_1 = -1;
    this.i2t_1 = new ScopeMap();
    this.j2t_1 = new MutableScatterMap();
    this.k2t_1 = new MutableScatterSet();
    var tmp = this;
    // Inline function 'androidx.compose.runtime.collection.mutableVectorOf' call
    // Inline function 'androidx.compose.runtime.collection.MutableVector' call
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp$ret$0 = fillArrayVal(Array(16), null);
    tmp.l2t_1 = new MutableVector(tmp$ret$0, 0);
    var tmp_0 = this;
    tmp_0.m2t_1 = new SnapshotStateObserver$ObservedScopeMap$derivedStateObserver$1(this);
    this.n2t_1 = 0;
    this.o2t_1 = new ScopeMap();
    this.p2t_1 = HashMap_init_$Create$();
  }
  protoOf(ObservedScopeMap).d2u = function (value) {
    var scope = ensureNotNull(this.f2t_1);
    var tmp = this.h2t_1;
    var tmp0_elvis_lhs = this.g2t_1;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new MutableObjectIntMap();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordRead.<anonymous>' call
      this.g2t_1 = this_0;
      this.j2t_1.mn(scope, this_0);
      tmp_0 = this_0;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    recordRead(this, value, tmp, scope, tmp_0);
  };
  protoOf(ObservedScopeMap).e2u = function (scope, readObserver, block) {
    var previousScope = this.f2t_1;
    var previousReads = this.g2t_1;
    var previousToken = this.h2t_1;
    this.f2t_1 = scope;
    this.g2t_1 = this.j2t_1.x2(scope);
    if (this.h2t_1 === -1) {
      this.h2t_1 = currentSnapshot().i1q();
    }
    // Inline function 'androidx.compose.runtime.observeDerivedStateRecalculations' call
    var observer = this.m2t_1;
    var observers = derivedStateObservers_0();
    try {
      observers.q1q(observer);
      // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.observe.<anonymous>' call
      Companion_instance_12.y2l(readObserver, null, block);
    }finally {
      // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
      var tmp$ret$0 = observers.p1q_1 - 1 | 0;
      observers.m1(tmp$ret$0);
    }
    clearObsoleteStateReads(this, ensureNotNull(this.f2t_1));
    this.f2t_1 = previousScope;
    this.g2t_1 = previousReads;
    this.h2t_1 = previousToken;
  };
  protoOf(ObservedScopeMap).f2u = function (scope) {
    var tmp0_elvis_lhs = this.j2t_1.r2(scope);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var recordedValues = tmp;
    // Inline function 'androidx.collection.ObjectIntMap.forEach' call
    var k = recordedValues.om_1;
    var v = recordedValues.pm_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
      var m = recordedValues.nm_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.ob(this_0.kb().lb(7)).ob(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.ob(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ObjectIntMap.forEach.<anonymous>' call
                  // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.clearScopeObservations.<anonymous>' call
                  var tmp_0 = k[index];
                  var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  v[index];
                  removeObservation(this, scope, value);
                }
                slot = slot.mb(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
  };
  protoOf(ObservedScopeMap).g2u = function (predicate) {
    // Inline function 'androidx.collection.MutableScatterMap.removeIf' call
    var this_0 = this.j2t_1;
    $l$block_0: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this_0.bn_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_1 = slot;
          if (!this_1.ob(this_1.kb().lb(7)).ob(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.ob(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.MutableScatterMap.removeIf.<anonymous>' call
                  // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.removeScopeIf.<anonymous>' call
                  var tmp = this_0.cn_1[index];
                  var scope = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp_0 = this_0.dn_1[index];
                  var valueSet = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  // Inline function 'kotlin.also' call
                  var this_2 = predicate(scope);
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.removeScopeIf.<anonymous>.<anonymous>' call
                  if (this_2) {
                    // Inline function 'androidx.collection.ObjectIntMap.forEach' call
                    var k = valueSet.om_1;
                    var v = valueSet.pm_1;
                    $l$block: {
                      // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
                      var m_0 = valueSet.nm_1;
                      var lastIndex_0 = m_0.length - 2 | 0;
                      var inductionVariable_1 = 0;
                      if (inductionVariable_1 <= lastIndex_0)
                        do {
                          var i_0 = inductionVariable_1;
                          inductionVariable_1 = inductionVariable_1 + 1 | 0;
                          var slot_0 = m_0[i_0];
                          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                          var this_3 = slot_0;
                          if (!this_3.ob(this_3.kb().lb(7)).ob(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                            var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
                            var inductionVariable_2 = 0;
                            if (inductionVariable_2 < bitCount_0)
                              do {
                                var j_0 = inductionVariable_2;
                                inductionVariable_2 = inductionVariable_2 + 1 | 0;
                                // Inline function 'androidx.collection.isFull' call
                                if (slot_0.ob(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                                  var index_0 = (i_0 << 3) + j_0 | 0;
                                  // Inline function 'androidx.collection.ObjectIntMap.forEach.<anonymous>' call
                                  // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.removeScopeIf.<anonymous>.<anonymous>.<anonymous>' call
                                  var tmp_1 = k[index_0];
                                  var value = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                                  v[index_0];
                                  removeObservation(this, scope, value);
                                }
                                slot_0 = slot_0.mb(8);
                              }
                               while (inductionVariable_2 < bitCount_0);
                            if (!(bitCount_0 === 8)) {
                              break $l$block;
                            }
                          }
                        }
                         while (!(i_0 === lastIndex_0));
                    }
                  }
                  if (this_2) {
                    this_0.on(index);
                  }
                }
                slot = slot.mb(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block_0;
            }
          }
        }
         while (!(i === lastIndex));
    }
  };
  protoOf(ObservedScopeMap).h2u = function () {
    return this.j2t_1.pn();
  };
  protoOf(ObservedScopeMap).c2u = function (changes) {
    var hasValues = false;
    var dependencyToDerivedStates = this.o2t_1;
    var recordedDerivedStateValues = this.p2t_1;
    var valueToScopes = this.i2t_1;
    var invalidated = this.k2t_1;
    // Inline function 'androidx.compose.runtime.collection.fastForEach' call
    if (changes instanceof IdentityArraySet) {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values = changes.b1q_1;
      var inductionVariable = 0;
      var last = changes.a1q_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          $l$block: {
            // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordInvalidation.<anonymous>' call
            var tmp = values[i];
            var value = !(tmp == null) ? tmp : THROW_CCE();
            var tmp_0;
            if (value instanceof StateObjectImpl) {
              // Inline function 'androidx.compose.runtime.snapshots.Companion.SnapshotStateObserver' call
              var tmp$ret$0 = _ReaderKind___init__impl__jqeebu(2);
              tmp_0 = !value.y21(tmp$ret$0);
            } else {
              tmp_0 = false;
            }
            if (tmp_0) {
              break $l$block;
            }
            if (dependencyToDerivedStates.o1w(value)) {
              // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
              var value_0 = dependencyToDerivedStates.k1w_1.x2(value);
              if (value_0 != null) {
                if (value_0 instanceof MutableScatterSet) {
                  // Inline function 'androidx.collection.ScatterSet.forEach' call
                  var this_0 = value_0 instanceof MutableScatterSet ? value_0 : THROW_CCE();
                  // Inline function 'kotlin.contracts.contract' call
                  var k = this_0.rn_1;
                  $l$block_1: {
                    // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                    // Inline function 'kotlin.contracts.contract' call
                    var m = this_0.qn_1;
                    var lastIndex = m.length - 2 | 0;
                    var inductionVariable_0 = 0;
                    if (inductionVariable_0 <= lastIndex)
                      do {
                        var i_0 = inductionVariable_0;
                        inductionVariable_0 = inductionVariable_0 + 1 | 0;
                        var slot = m[i_0];
                        // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                        var this_1 = slot;
                        if (!this_1.ob(this_1.kb().lb(7)).ob(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                          var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
                          var inductionVariable_1 = 0;
                          if (inductionVariable_1 < bitCount)
                            do {
                              var j = inductionVariable_1;
                              inductionVariable_1 = inductionVariable_1 + 1 | 0;
                              // Inline function 'androidx.collection.isFull' call
                              if (slot.ob(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                                var index = (i_0 << 3) + j | 0;
                                // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                                // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordInvalidation.<anonymous>.<anonymous>' call
                                var tmp_1 = k[index];
                                var derivedState = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                                if (!isInterface(derivedState, DerivedState))
                                  THROW_CCE();
                                var previousValue = recordedDerivedStateValues.x2(derivedState);
                                var tmp0_elvis_lhs = derivedState.m1z();
                                var policy = tmp0_elvis_lhs == null ? structuralEqualityPolicy() : tmp0_elvis_lhs;
                                if (!policy.u20(derivedState.e1y().t20(), previousValue)) {
                                  // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
                                  var value_1 = valueToScopes.k1w_1.x2(derivedState);
                                  if (value_1 != null) {
                                    if (value_1 instanceof MutableScatterSet) {
                                      // Inline function 'androidx.collection.ScatterSet.forEach' call
                                      var this_2 = value_1 instanceof MutableScatterSet ? value_1 : THROW_CCE();
                                      // Inline function 'kotlin.contracts.contract' call
                                      var k_0 = this_2.rn_1;
                                      $l$block_0: {
                                        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                                        // Inline function 'kotlin.contracts.contract' call
                                        var m_0 = this_2.qn_1;
                                        var lastIndex_0 = m_0.length - 2 | 0;
                                        var inductionVariable_2 = 0;
                                        if (inductionVariable_2 <= lastIndex_0)
                                          do {
                                            var i_1 = inductionVariable_2;
                                            inductionVariable_2 = inductionVariable_2 + 1 | 0;
                                            var slot_0 = m_0[i_1];
                                            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                                            var this_3 = slot_0;
                                            if (!this_3.ob(this_3.kb().lb(7)).ob(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                                              var bitCount_0 = 8 - (~(i_1 - lastIndex_0 | 0) >>> 31 | 0) | 0;
                                              var inductionVariable_3 = 0;
                                              if (inductionVariable_3 < bitCount_0)
                                                do {
                                                  var j_0 = inductionVariable_3;
                                                  inductionVariable_3 = inductionVariable_3 + 1 | 0;
                                                  // Inline function 'androidx.collection.isFull' call
                                                  if (slot_0.ob(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                                                    var index_0 = (i_1 << 3) + j_0 | 0;
                                                    // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                                                    // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordInvalidation.<anonymous>.<anonymous>.<anonymous>' call
                                                    var tmp_2 = k_0[index_0];
                                                    var scope = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
                                                    invalidated.a1(scope);
                                                    hasValues = true;
                                                  }
                                                  slot_0 = slot_0.mb(8);
                                                }
                                                 while (inductionVariable_3 < bitCount_0);
                                              if (!(bitCount_0 === 8)) {
                                                break $l$block_0;
                                              }
                                            }
                                          }
                                           while (!(i_1 === lastIndex_0));
                                      }
                                    } else {
                                      // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordInvalidation.<anonymous>.<anonymous>.<anonymous>' call
                                      var scope_0 = !(value_1 == null) ? value_1 : THROW_CCE();
                                      invalidated.a1(scope_0);
                                      hasValues = true;
                                    }
                                  }
                                } else {
                                  this.l2t_1.q1q(derivedState);
                                }
                              }
                              slot = slot.mb(8);
                            }
                             while (inductionVariable_1 < bitCount);
                          if (!(bitCount === 8)) {
                            break $l$block_1;
                          }
                        }
                      }
                       while (!(i_0 === lastIndex));
                  }
                } else {
                  // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordInvalidation.<anonymous>.<anonymous>' call
                  var derivedState_0 = !(value_0 == null) ? value_0 : THROW_CCE();
                  if (!isInterface(derivedState_0, DerivedState))
                    THROW_CCE();
                  var previousValue_0 = recordedDerivedStateValues.x2(derivedState_0);
                  var tmp0_elvis_lhs_0 = derivedState_0.m1z();
                  var policy_0 = tmp0_elvis_lhs_0 == null ? structuralEqualityPolicy() : tmp0_elvis_lhs_0;
                  if (!policy_0.u20(derivedState_0.e1y().t20(), previousValue_0)) {
                    // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
                    var value_2 = valueToScopes.k1w_1.x2(derivedState_0);
                    if (value_2 != null) {
                      if (value_2 instanceof MutableScatterSet) {
                        // Inline function 'androidx.collection.ScatterSet.forEach' call
                        var this_4 = value_2 instanceof MutableScatterSet ? value_2 : THROW_CCE();
                        // Inline function 'kotlin.contracts.contract' call
                        var k_1 = this_4.rn_1;
                        $l$block_2: {
                          // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                          // Inline function 'kotlin.contracts.contract' call
                          var m_1 = this_4.qn_1;
                          var lastIndex_1 = m_1.length - 2 | 0;
                          var inductionVariable_4 = 0;
                          if (inductionVariable_4 <= lastIndex_1)
                            do {
                              var i_2 = inductionVariable_4;
                              inductionVariable_4 = inductionVariable_4 + 1 | 0;
                              var slot_1 = m_1[i_2];
                              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                              var this_5 = slot_1;
                              if (!this_5.ob(this_5.kb().lb(7)).ob(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                                var bitCount_1 = 8 - (~(i_2 - lastIndex_1 | 0) >>> 31 | 0) | 0;
                                var inductionVariable_5 = 0;
                                if (inductionVariable_5 < bitCount_1)
                                  do {
                                    var j_1 = inductionVariable_5;
                                    inductionVariable_5 = inductionVariable_5 + 1 | 0;
                                    // Inline function 'androidx.collection.isFull' call
                                    if (slot_1.ob(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                                      var index_1 = (i_2 << 3) + j_1 | 0;
                                      // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                                      // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordInvalidation.<anonymous>.<anonymous>.<anonymous>' call
                                      var tmp_3 = k_1[index_1];
                                      var scope_1 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
                                      invalidated.a1(scope_1);
                                      hasValues = true;
                                    }
                                    slot_1 = slot_1.mb(8);
                                  }
                                   while (inductionVariable_5 < bitCount_1);
                                if (!(bitCount_1 === 8)) {
                                  break $l$block_2;
                                }
                              }
                            }
                             while (!(i_2 === lastIndex_1));
                        }
                      } else {
                        // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordInvalidation.<anonymous>.<anonymous>.<anonymous>' call
                        var scope_2 = !(value_2 == null) ? value_2 : THROW_CCE();
                        invalidated.a1(scope_2);
                        hasValues = true;
                      }
                    }
                  } else {
                    this.l2t_1.q1q(derivedState_0);
                  }
                }
              }
            }
            // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
            var value_3 = valueToScopes.k1w_1.x2(value);
            if (value_3 != null) {
              if (value_3 instanceof MutableScatterSet) {
                // Inline function 'androidx.collection.ScatterSet.forEach' call
                var this_6 = value_3 instanceof MutableScatterSet ? value_3 : THROW_CCE();
                // Inline function 'kotlin.contracts.contract' call
                var k_2 = this_6.rn_1;
                $l$block_3: {
                  // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                  // Inline function 'kotlin.contracts.contract' call
                  var m_2 = this_6.qn_1;
                  var lastIndex_2 = m_2.length - 2 | 0;
                  var inductionVariable_6 = 0;
                  if (inductionVariable_6 <= lastIndex_2)
                    do {
                      var i_3 = inductionVariable_6;
                      inductionVariable_6 = inductionVariable_6 + 1 | 0;
                      var slot_2 = m_2[i_3];
                      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                      var this_7 = slot_2;
                      if (!this_7.ob(this_7.kb().lb(7)).ob(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                        var bitCount_2 = 8 - (~(i_3 - lastIndex_2 | 0) >>> 31 | 0) | 0;
                        var inductionVariable_7 = 0;
                        if (inductionVariable_7 < bitCount_2)
                          do {
                            var j_2 = inductionVariable_7;
                            inductionVariable_7 = inductionVariable_7 + 1 | 0;
                            // Inline function 'androidx.collection.isFull' call
                            if (slot_2.ob(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                              var index_2 = (i_3 << 3) + j_2 | 0;
                              // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                              // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordInvalidation.<anonymous>.<anonymous>' call
                              var tmp_4 = k_2[index_2];
                              var scope_3 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
                              invalidated.a1(scope_3);
                              hasValues = true;
                            }
                            slot_2 = slot_2.mb(8);
                          }
                           while (inductionVariable_7 < bitCount_2);
                        if (!(bitCount_2 === 8)) {
                          break $l$block_3;
                        }
                      }
                    }
                     while (!(i_3 === lastIndex_2));
                }
              } else {
                // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordInvalidation.<anonymous>.<anonymous>' call
                var scope_4 = !(value_3 == null) ? value_3 : THROW_CCE();
                invalidated.a1(scope_4);
                hasValues = true;
              }
            }
          }
        }
         while (inductionVariable < last);
    } else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = changes.o();
      while (tmp0_iterator.d1()) {
        var element = tmp0_iterator.f1();
        $l$block_4: {
          // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordInvalidation.<anonymous>' call
          var tmp_5;
          if (element instanceof StateObjectImpl) {
            // Inline function 'androidx.compose.runtime.snapshots.Companion.SnapshotStateObserver' call
            var tmp$ret$14 = _ReaderKind___init__impl__jqeebu(2);
            tmp_5 = !element.y21(tmp$ret$14);
          } else {
            tmp_5 = false;
          }
          if (tmp_5) {
            break $l$block_4;
          }
          if (dependencyToDerivedStates.o1w(element)) {
            // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
            var value_4 = dependencyToDerivedStates.k1w_1.x2(element);
            if (value_4 != null) {
              if (value_4 instanceof MutableScatterSet) {
                // Inline function 'androidx.collection.ScatterSet.forEach' call
                var this_8 = value_4 instanceof MutableScatterSet ? value_4 : THROW_CCE();
                // Inline function 'kotlin.contracts.contract' call
                var k_3 = this_8.rn_1;
                $l$block_6: {
                  // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                  // Inline function 'kotlin.contracts.contract' call
                  var m_3 = this_8.qn_1;
                  var lastIndex_3 = m_3.length - 2 | 0;
                  var inductionVariable_8 = 0;
                  if (inductionVariable_8 <= lastIndex_3)
                    do {
                      var i_4 = inductionVariable_8;
                      inductionVariable_8 = inductionVariable_8 + 1 | 0;
                      var slot_3 = m_3[i_4];
                      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                      var this_9 = slot_3;
                      if (!this_9.ob(this_9.kb().lb(7)).ob(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                        var bitCount_3 = 8 - (~(i_4 - lastIndex_3 | 0) >>> 31 | 0) | 0;
                        var inductionVariable_9 = 0;
                        if (inductionVariable_9 < bitCount_3)
                          do {
                            var j_3 = inductionVariable_9;
                            inductionVariable_9 = inductionVariable_9 + 1 | 0;
                            // Inline function 'androidx.collection.isFull' call
                            if (slot_3.ob(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                              var index_3 = (i_4 << 3) + j_3 | 0;
                              // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                              // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordInvalidation.<anonymous>.<anonymous>' call
                              var tmp_6 = k_3[index_3];
                              var derivedState_1 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
                              if (!isInterface(derivedState_1, DerivedState))
                                THROW_CCE();
                              var previousValue_1 = recordedDerivedStateValues.x2(derivedState_1);
                              var tmp0_elvis_lhs_1 = derivedState_1.m1z();
                              var policy_1 = tmp0_elvis_lhs_1 == null ? structuralEqualityPolicy() : tmp0_elvis_lhs_1;
                              if (!policy_1.u20(derivedState_1.e1y().t20(), previousValue_1)) {
                                // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
                                var value_5 = valueToScopes.k1w_1.x2(derivedState_1);
                                if (value_5 != null) {
                                  if (value_5 instanceof MutableScatterSet) {
                                    // Inline function 'androidx.collection.ScatterSet.forEach' call
                                    var this_10 = value_5 instanceof MutableScatterSet ? value_5 : THROW_CCE();
                                    // Inline function 'kotlin.contracts.contract' call
                                    var k_4 = this_10.rn_1;
                                    $l$block_5: {
                                      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                                      // Inline function 'kotlin.contracts.contract' call
                                      var m_4 = this_10.qn_1;
                                      var lastIndex_4 = m_4.length - 2 | 0;
                                      var inductionVariable_10 = 0;
                                      if (inductionVariable_10 <= lastIndex_4)
                                        do {
                                          var i_5 = inductionVariable_10;
                                          inductionVariable_10 = inductionVariable_10 + 1 | 0;
                                          var slot_4 = m_4[i_5];
                                          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                                          var this_11 = slot_4;
                                          if (!this_11.ob(this_11.kb().lb(7)).ob(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                                            var bitCount_4 = 8 - (~(i_5 - lastIndex_4 | 0) >>> 31 | 0) | 0;
                                            var inductionVariable_11 = 0;
                                            if (inductionVariable_11 < bitCount_4)
                                              do {
                                                var j_4 = inductionVariable_11;
                                                inductionVariable_11 = inductionVariable_11 + 1 | 0;
                                                // Inline function 'androidx.collection.isFull' call
                                                if (slot_4.ob(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                                                  var index_4 = (i_5 << 3) + j_4 | 0;
                                                  // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                                                  // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordInvalidation.<anonymous>.<anonymous>.<anonymous>' call
                                                  var tmp_7 = k_4[index_4];
                                                  var scope_5 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
                                                  invalidated.a1(scope_5);
                                                  hasValues = true;
                                                }
                                                slot_4 = slot_4.mb(8);
                                              }
                                               while (inductionVariable_11 < bitCount_4);
                                            if (!(bitCount_4 === 8)) {
                                              break $l$block_5;
                                            }
                                          }
                                        }
                                         while (!(i_5 === lastIndex_4));
                                    }
                                  } else {
                                    // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordInvalidation.<anonymous>.<anonymous>.<anonymous>' call
                                    var scope_6 = !(value_5 == null) ? value_5 : THROW_CCE();
                                    invalidated.a1(scope_6);
                                    hasValues = true;
                                  }
                                }
                              } else {
                                this.l2t_1.q1q(derivedState_1);
                              }
                            }
                            slot_3 = slot_3.mb(8);
                          }
                           while (inductionVariable_9 < bitCount_3);
                        if (!(bitCount_3 === 8)) {
                          break $l$block_6;
                        }
                      }
                    }
                     while (!(i_4 === lastIndex_3));
                }
              } else {
                // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordInvalidation.<anonymous>.<anonymous>' call
                var derivedState_2 = !(value_4 == null) ? value_4 : THROW_CCE();
                if (!isInterface(derivedState_2, DerivedState))
                  THROW_CCE();
                var previousValue_2 = recordedDerivedStateValues.x2(derivedState_2);
                var tmp0_elvis_lhs_2 = derivedState_2.m1z();
                var policy_2 = tmp0_elvis_lhs_2 == null ? structuralEqualityPolicy() : tmp0_elvis_lhs_2;
                if (!policy_2.u20(derivedState_2.e1y().t20(), previousValue_2)) {
                  // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
                  var value_6 = valueToScopes.k1w_1.x2(derivedState_2);
                  if (value_6 != null) {
                    if (value_6 instanceof MutableScatterSet) {
                      // Inline function 'androidx.collection.ScatterSet.forEach' call
                      var this_12 = value_6 instanceof MutableScatterSet ? value_6 : THROW_CCE();
                      // Inline function 'kotlin.contracts.contract' call
                      var k_5 = this_12.rn_1;
                      $l$block_7: {
                        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                        // Inline function 'kotlin.contracts.contract' call
                        var m_5 = this_12.qn_1;
                        var lastIndex_5 = m_5.length - 2 | 0;
                        var inductionVariable_12 = 0;
                        if (inductionVariable_12 <= lastIndex_5)
                          do {
                            var i_6 = inductionVariable_12;
                            inductionVariable_12 = inductionVariable_12 + 1 | 0;
                            var slot_5 = m_5[i_6];
                            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                            var this_13 = slot_5;
                            if (!this_13.ob(this_13.kb().lb(7)).ob(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                              var bitCount_5 = 8 - (~(i_6 - lastIndex_5 | 0) >>> 31 | 0) | 0;
                              var inductionVariable_13 = 0;
                              if (inductionVariable_13 < bitCount_5)
                                do {
                                  var j_5 = inductionVariable_13;
                                  inductionVariable_13 = inductionVariable_13 + 1 | 0;
                                  // Inline function 'androidx.collection.isFull' call
                                  if (slot_5.ob(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                                    var index_5 = (i_6 << 3) + j_5 | 0;
                                    // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                                    // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordInvalidation.<anonymous>.<anonymous>.<anonymous>' call
                                    var tmp_8 = k_5[index_5];
                                    var scope_7 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
                                    invalidated.a1(scope_7);
                                    hasValues = true;
                                  }
                                  slot_5 = slot_5.mb(8);
                                }
                                 while (inductionVariable_13 < bitCount_5);
                              if (!(bitCount_5 === 8)) {
                                break $l$block_7;
                              }
                            }
                          }
                           while (!(i_6 === lastIndex_5));
                      }
                    } else {
                      // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordInvalidation.<anonymous>.<anonymous>.<anonymous>' call
                      var scope_8 = !(value_6 == null) ? value_6 : THROW_CCE();
                      invalidated.a1(scope_8);
                      hasValues = true;
                    }
                  }
                } else {
                  this.l2t_1.q1q(derivedState_2);
                }
              }
            }
          }
          // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
          var value_7 = valueToScopes.k1w_1.x2(element);
          if (value_7 != null) {
            if (value_7 instanceof MutableScatterSet) {
              // Inline function 'androidx.collection.ScatterSet.forEach' call
              var this_14 = value_7 instanceof MutableScatterSet ? value_7 : THROW_CCE();
              // Inline function 'kotlin.contracts.contract' call
              var k_6 = this_14.rn_1;
              $l$block_8: {
                // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                // Inline function 'kotlin.contracts.contract' call
                var m_6 = this_14.qn_1;
                var lastIndex_6 = m_6.length - 2 | 0;
                var inductionVariable_14 = 0;
                if (inductionVariable_14 <= lastIndex_6)
                  do {
                    var i_7 = inductionVariable_14;
                    inductionVariable_14 = inductionVariable_14 + 1 | 0;
                    var slot_6 = m_6[i_7];
                    // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                    var this_15 = slot_6;
                    if (!this_15.ob(this_15.kb().lb(7)).ob(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                      var bitCount_6 = 8 - (~(i_7 - lastIndex_6 | 0) >>> 31 | 0) | 0;
                      var inductionVariable_15 = 0;
                      if (inductionVariable_15 < bitCount_6)
                        do {
                          var j_6 = inductionVariable_15;
                          inductionVariable_15 = inductionVariable_15 + 1 | 0;
                          // Inline function 'androidx.collection.isFull' call
                          if (slot_6.ob(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                            var index_6 = (i_7 << 3) + j_6 | 0;
                            // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                            // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordInvalidation.<anonymous>.<anonymous>' call
                            var tmp_9 = k_6[index_6];
                            var scope_9 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
                            invalidated.a1(scope_9);
                            hasValues = true;
                          }
                          slot_6 = slot_6.mb(8);
                        }
                         while (inductionVariable_15 < bitCount_6);
                      if (!(bitCount_6 === 8)) {
                        break $l$block_8;
                      }
                    }
                  }
                   while (!(i_7 === lastIndex_6));
              }
            } else {
              // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordInvalidation.<anonymous>.<anonymous>' call
              var scope_10 = !(value_7 == null) ? value_7 : THROW_CCE();
              invalidated.a1(scope_10);
              hasValues = true;
            }
          }
        }
      }
    }
    if (this.l2t_1.pn()) {
      // Inline function 'androidx.compose.runtime.collection.MutableVector.forEach' call
      var this_16 = this.l2t_1;
      // Inline function 'kotlin.contracts.contract' call
      var size = this_16.p1q_1;
      if (size > 0) {
        var i_8 = 0;
        var tmp_10 = this_16.n1q_1;
        var content = isArray(tmp_10) ? tmp_10 : THROW_CCE();
        do {
          // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordInvalidation.<anonymous>' call
          var it = content[i_8];
          this.i2u(it);
          i_8 = i_8 + 1 | 0;
        }
         while (i_8 < size);
      }
      this.l2t_1.h1();
    }
    return hasValues;
  };
  protoOf(ObservedScopeMap).i2u = function (derivedState) {
    var scopeToValues = this.j2t_1;
    var token = currentSnapshot().i1q();
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
    var value = this.i2t_1.k1w_1.x2(derivedState);
    if (value != null) {
      if (value instanceof MutableScatterSet) {
        // Inline function 'androidx.collection.ScatterSet.forEach' call
        var this_0 = value instanceof MutableScatterSet ? value : THROW_CCE();
        // Inline function 'kotlin.contracts.contract' call
        var k = this_0.rn_1;
        $l$block: {
          // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
          // Inline function 'kotlin.contracts.contract' call
          var m = this_0.qn_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              if (!this_1.ob(this_1.kb().lb(7)).ob(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.ob(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                      var index = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                      // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.rereadDerivedState.<anonymous>' call
                      var tmp = k[index];
                      var scope = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                      var tmp0_elvis_lhs = scopeToValues.x2(scope);
                      var tmp_0;
                      if (tmp0_elvis_lhs == null) {
                        // Inline function 'kotlin.also' call
                        var this_2 = new MutableObjectIntMap();
                        // Inline function 'kotlin.contracts.contract' call
                        // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.rereadDerivedState.<anonymous>.<anonymous>' call
                        scopeToValues.mn(scope, this_2);
                        tmp_0 = this_2;
                      } else {
                        tmp_0 = tmp0_elvis_lhs;
                      }
                      recordRead(this, derivedState, token, scope, tmp_0);
                    }
                    slot = slot.mb(8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  break $l$block;
                }
              }
            }
             while (!(i === lastIndex));
        }
      } else {
        // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.rereadDerivedState.<anonymous>' call
        var scope_0 = !(value == null) ? value : THROW_CCE();
        var tmp0_elvis_lhs_0 = scopeToValues.x2(scope_0);
        var tmp_1;
        if (tmp0_elvis_lhs_0 == null) {
          // Inline function 'kotlin.also' call
          var this_3 = new MutableObjectIntMap();
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.rereadDerivedState.<anonymous>.<anonymous>' call
          scopeToValues.mn(scope_0, this_3);
          tmp_1 = this_3;
        } else {
          tmp_1 = tmp0_elvis_lhs_0;
        }
        recordRead(this, derivedState, token, scope_0, tmp_1);
      }
    }
  };
  protoOf(ObservedScopeMap).j2u = function () {
    var invalidated = this.k2t_1;
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    var block = this.e2t_1;
    // Inline function 'kotlin.contracts.contract' call
    var k = invalidated.rn_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = invalidated.qn_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.ob(this_0.kb().lb(7)).ob(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.ob(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                  var tmp = k[index];
                  block((tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE());
                }
                slot = slot.mb(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    invalidated.h1();
  };
  function SnapshotStateObserver$applyObserver$lambda(this$0) {
    return function (applied, _anonymous_parameter_1__qggqgd) {
      addChanges(this$0, applied);
      var tmp;
      if (drainChanges(this$0)) {
        sendNotifications(this$0);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function SnapshotStateObserver$sendNotifications$lambda(this$0) {
    return function () {
      $l$loop: while (true) {
        // Inline function 'androidx.compose.runtime.synchronized' call
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        this$0.x2t_1;
        var tmp;
        if (!this$0.t2t_1) {
          this$0.t2t_1 = true;
          var tmp_0;
          try {
            var this_0 = this$0.w2t_1;
            // Inline function 'kotlin.contracts.contract' call
            var size = this_0.p1q_1;
            var tmp_1;
            if (size > 0) {
              var i = 0;
              var tmp_2 = this_0.n1q_1;
              var content = isArray(tmp_2) ? tmp_2 : THROW_CCE();
              do {
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.sendNotifications.<anonymous>.<anonymous>.<anonymous>' call
                content[i].j2u();
                i = i + 1 | 0;
              }
               while (i < size);
              tmp_1 = Unit_instance;
            }
            tmp_0 = tmp_1;
          }finally {
            this$0.t2t_1 = false;
          }
          tmp = tmp_0;
        }
        if (!drainChanges(this$0))
          break $l$loop;
      }
      return Unit_instance;
    };
  }
  function SnapshotStateObserver$readObserver$lambda(this$0) {
    return function (state) {
      var tmp;
      if (!this$0.z2t_1) {
        // Inline function 'androidx.compose.runtime.synchronized' call
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        this$0.x2t_1;
        ensureNotNull(this$0.a2u_1).d2u(state);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function SnapshotStateObserver(onChangedExecutor) {
    this.r2t_1 = onChangedExecutor;
    this.s2t_1 = new AtomicReference(null);
    this.t2t_1 = false;
    var tmp = this;
    tmp.u2t_1 = SnapshotStateObserver$applyObserver$lambda(this);
    var tmp_0 = this;
    tmp_0.v2t_1 = SnapshotStateObserver$readObserver$lambda(this);
    var tmp_1 = this;
    // Inline function 'androidx.compose.runtime.collection.mutableVectorOf' call
    // Inline function 'androidx.compose.runtime.collection.MutableVector' call
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp$ret$0 = fillArrayVal(Array(16), null);
    tmp_1.w2t_1 = new MutableVector(tmp$ret$0, 0);
    this.x2t_1 = createSynchronizedObject();
    this.y2t_1 = null;
    this.z2t_1 = false;
    this.a2u_1 = null;
    this.b2u_1 = new Long(-1, -1);
  }
  protoOf(SnapshotStateObserver).k2u = function (scope, onValueChangedForScope, block) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.x2t_1;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.observeReads.<anonymous>' call
    var scopeMap = ensureMap(this, onValueChangedForScope);
    var oldPaused = this.z2t_1;
    var oldMap = this.a2u_1;
    var oldThreadId = this.b2u_1;
    if (!oldThreadId.equals(new Long(-1, -1))) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!oldThreadId.equals(currentThreadId())) {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.observeReads.<anonymous>' call
        var message = 'Detected multithreaded access to SnapshotStateObserver: ' + ('previousThreadId=' + oldThreadId.toString() + '), ') + ('currentThread={id=' + currentThreadId().toString() + ', name=' + currentThreadName() + '}. ') + 'Note that observation on multiple threads in layout/draw is not supported. ' + 'Make sure your measure/layout/draw for each Owner (AndroidComposeView) ' + 'is executed on the same thread.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    try {
      this.z2t_1 = false;
      this.a2u_1 = scopeMap;
      this.b2u_1 = currentThreadId();
      scopeMap.e2u(scope, this.v2t_1, block);
    }finally {
      this.a2u_1 = oldMap;
      this.z2t_1 = oldPaused;
      this.b2u_1 = oldThreadId;
    }
  };
  protoOf(SnapshotStateObserver).l2u = function (scope) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.removeScopeMapIf' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.x2t_1;
    var this_0 = this.w2t_1;
    var gap = 0;
    var size = this_0.p1q_1;
    var inductionVariable = 0;
    if (inductionVariable < size)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.clear.<anonymous>' call
        var tmp = this_0.n1q_1[i];
        var it = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
        it.f2u(scope);
        if (!it.h2u()) {
          gap = gap + 1 | 0;
          continue $l$loop;
        }
        if (gap > 0) {
          this_0.n1q_1[i - gap | 0] = this_0.n1q_1[i];
        }
      }
       while (inductionVariable < size);
    fill_0(this_0.n1q_1, null, size - gap | 0, size);
    this_0.b2h(size - gap | 0);
  };
  protoOf(SnapshotStateObserver).m2u = function (predicate) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.removeScopeMapIf' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.x2t_1;
    var this_0 = this.w2t_1;
    var gap = 0;
    var size = this_0.p1q_1;
    var inductionVariable = 0;
    if (inductionVariable < size)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.clearIf.<anonymous>' call
        var tmp = this_0.n1q_1[i];
        var scopeMap = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
        scopeMap.g2u(predicate);
        if (!scopeMap.h2u()) {
          gap = gap + 1 | 0;
          continue $l$loop;
        }
        if (gap > 0) {
          this_0.n1q_1[i - gap | 0] = this_0.n1q_1[i];
        }
      }
       while (inductionVariable < size);
    fill_0(this_0.n1q_1, null, size - gap | 0, size);
    this_0.b2h(size - gap | 0);
  };
  protoOf(SnapshotStateObserver).n2u = function () {
    this.y2t_1 = Companion_instance_12.x24(this.u2t_1);
  };
  function find_3($this, value, hash) {
    var low = 0;
    var high = $this.s2p_1 - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midHash = $this.t2p_1[mid];
      if (midHash < hash)
        low = mid + 1 | 0;
      else if (midHash > hash)
        high = mid - 1 | 0;
      else {
        var tmp0_safe_receiver = $this.u2p_1[mid];
        var midVal = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hw();
        if (value === midVal)
          return mid;
        return findExactIndex_1($this, mid, value, hash);
      }
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex_1($this, midIndex, value, valueHash) {
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        if (!($this.t2p_1[i] === valueHash)) {
          break $l$loop;
        }
        var tmp1_safe_receiver = $this.u2p_1[i];
        var v = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.hw();
        if (v === value) {
          return i;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    var last = $this.s2p_1;
    if (inductionVariable_0 < last)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        if (!($this.t2p_1[i_0] === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
        var tmp3_safe_receiver = $this.u2p_1[i_0];
        var v_0 = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.hw();
        if (v_0 === value) {
          return i_0;
        }
      }
       while (inductionVariable_0 < last);
    return -($this.s2p_1 + 1 | 0) | 0;
  }
  function SnapshotWeakSet() {
    this.s2p_1 = 0;
    this.t2p_1 = new Int32Array(16);
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.u2p_1 = fillArrayVal(Array(16), null);
  }
  protoOf(SnapshotWeakSet).i1v = function (value) {
    var index;
    var size = this.s2p_1;
    var hash = identityHashCode(value);
    if (size > 0) {
      index = find_3(this, value, hash);
      if (index >= 0) {
        return false;
      }
    } else {
      index = -1;
    }
    var insertIndex = -(index + 1 | 0) | 0;
    var capacity = this.u2p_1.length;
    if (size === capacity) {
      var newCapacity = imul(capacity, 2);
      // Inline function 'kotlin.arrayOfNulls' call
      var newValues = fillArrayVal(Array(newCapacity), null);
      var newHashes = new Int32Array(newCapacity);
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = this.u2p_1;
      var destinationOffset = insertIndex + 1 | 0;
      arrayCopy(this_0, newValues, destinationOffset, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      var this_1 = this.u2p_1;
      arrayCopy(this_1, newValues, 0, 0, insertIndex);
      // Inline function 'kotlin.collections.copyInto' call
      var this_2 = this.t2p_1;
      var destinationOffset_0 = insertIndex + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = this_2;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, newHashes, destinationOffset_0, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = this.t2p_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_0, newHashes, 0, 0, insertIndex);
      this.u2p_1 = newValues;
      this.t2p_1 = newHashes;
    } else {
      // Inline function 'kotlin.collections.copyInto' call
      var this_3 = this.u2p_1;
      var destination = this.u2p_1;
      var destinationOffset_1 = insertIndex + 1 | 0;
      arrayCopy(this_3, destination, destinationOffset_1, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      var this_4 = this.t2p_1;
      var destination_0 = this.t2p_1;
      var destinationOffset_2 = insertIndex + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_1 = this_4;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_1, destination_0, destinationOffset_2, insertIndex, size);
    }
    this.u2p_1[insertIndex] = new WeakReference(value);
    this.t2p_1[insertIndex] = hash;
    this.s2p_1 = this.s2p_1 + 1 | 0;
    return true;
  };
  function StateObjectImpl() {
    this.b1y_1 = new AtomicInt(0);
  }
  protoOf(StateObjectImpl).c1y = function (reader) {
    do {
      var old = _ReaderKind___init__impl__jqeebu(this.b1y_1.hw());
      // Inline function 'androidx.compose.runtime.snapshots.ReaderKind.isReadIn' call
      var this_0 = old;
      if (!((_ReaderKind___get_mask__impl__gmhzqb(this_0) & _ReaderKind___get_mask__impl__gmhzqb(reader)) === 0))
        return Unit_instance;
      // Inline function 'androidx.compose.runtime.snapshots.ReaderKind.withReadIn' call
      var this_1 = old;
      var new_0 = _ReaderKind___init__impl__jqeebu(_ReaderKind___get_mask__impl__gmhzqb(this_1) | _ReaderKind___get_mask__impl__gmhzqb(reader));
    }
     while (!this.b1y_1.o2u(_ReaderKind___get_mask__impl__gmhzqb(old), _ReaderKind___get_mask__impl__gmhzqb(new_0)));
  };
  protoOf(StateObjectImpl).y21 = function (reader) {
    // Inline function 'androidx.compose.runtime.snapshots.ReaderKind.isReadIn' call
    var this_0 = _ReaderKind___init__impl__jqeebu(this.b1y_1.hw());
    return !((_ReaderKind___get_mask__impl__gmhzqb(this_0) & _ReaderKind___get_mask__impl__gmhzqb(reader)) === 0);
  };
  function _ReaderKind___init__impl__jqeebu(mask) {
    mask = mask === VOID ? 0 : mask;
    return mask;
  }
  function _ReaderKind___get_mask__impl__gmhzqb($this) {
    return $this;
  }
  function Companion_14() {
  }
  var Companion_instance_15;
  function Companion_getInstance_15() {
    return Companion_instance_15;
  }
  function get_LocalInspectionTables() {
    _init_properties_InspectionTables_kt__ovfk2v();
    return LocalInspectionTables;
  }
  var LocalInspectionTables;
  function LocalInspectionTables$lambda() {
    _init_properties_InspectionTables_kt__ovfk2v();
    return null;
  }
  var properties_initialized_InspectionTables_kt_tgdbmt;
  function _init_properties_InspectionTables_kt__ovfk2v() {
    if (!properties_initialized_InspectionTables_kt_tgdbmt) {
      properties_initialized_InspectionTables_kt_tgdbmt = true;
      LocalInspectionTables = staticCompositionLocalOf(LocalInspectionTables$lambda);
    }
  }
  function AtomicReference(value) {
    this.i1w_1 = value;
  }
  protoOf(AtomicReference).hw = function () {
    // Inline function 'kotlinx.atomicfu.atomicfu_getValue' call
    return this.i1w_1;
  };
  protoOf(AtomicReference).a1x = function (value) {
    // Inline function 'kotlinx.atomicfu.atomicfu_setValue' call
    // Inline function 'androidx.compose.runtime.AtomicReference.set.<set-delegate>' call
    this.i1w_1 = value;
  };
  protoOf(AtomicReference).j1w = function (value) {
    // Inline function 'kotlinx.atomicfu.atomicfu_getAndSet' call
    var oldValue = this.i1w_1;
    // Inline function 'androidx.compose.runtime.AtomicReference.getAndSet.<set-delegate>' call
    this.i1w_1 = value;
    return oldValue;
  };
  protoOf(AtomicReference).x1x = function (expect, newValue) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.atomicfu.atomicfu_compareAndSet' call
      if (equals(this.i1w_1, expect)) {
        // Inline function 'androidx.compose.runtime.AtomicReference.compareAndSet.<set-delegate>' call
        this.i1w_1 = newValue;
        tmp$ret$0 = true;
        break $l$block_0;
      } else {
        tmp$ret$0 = false;
        break $l$block_0;
      }
    }
    return tmp$ret$0;
  };
  function AtomicInt(value) {
    this.b2p_1 = value;
  }
  protoOf(AtomicInt).hw = function () {
    // Inline function 'kotlinx.atomicfu.atomicfu_getValue' call
    return this.b2p_1;
  };
  protoOf(AtomicInt).j2o = function (amount) {
    // Inline function 'kotlinx.atomicfu.atomicfu_addAndGet' call
    // Inline function 'androidx.compose.runtime.AtomicInt.add.<set-delegate>' call
    this.b2p_1 = this.b2p_1 + amount | 0;
    return this.b2p_1;
  };
  protoOf(AtomicInt).o2u = function (expect, newValue) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.atomicfu.atomicfu_compareAndSet' call
      if (equals(this.b2p_1, expect)) {
        // Inline function 'androidx.compose.runtime.AtomicInt.compareAndSet.<set-delegate>' call
        this.b2p_1 = newValue;
        tmp$ret$0 = true;
        break $l$block_0;
      } else {
        tmp$ret$0 = false;
        break $l$block_0;
      }
    }
    return tmp$ret$0;
  };
  function trackWrite($this) {
    if ($this.d2l_1) {
      var scope = $this.f2l_1;
      if (!(scope == null)) {
        scope.n1y();
        $this.f2l_1 = null;
      }
      var scopes = $this.g2l_1;
      if (!(scopes == null)) {
        var inductionVariable = 0;
        var last = scopes.m();
        if (inductionVariable < last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = scopes.n(index);
            item.n1y();
          }
           while (inductionVariable < last);
        scopes.h1();
      }
    }
  }
  function trackRead($this, composer) {
    if ($this.d2l_1) {
      var scope = composer.s1u();
      if (!(scope == null)) {
        composer.t1u(scope);
        var lastScope = $this.f2l_1;
        if (replacableWith(lastScope, scope)) {
          $this.f2l_1 = scope;
        } else {
          var lastScopes = $this.g2l_1;
          if (lastScopes == null) {
            // Inline function 'kotlin.collections.mutableListOf' call
            var newScopes = ArrayList_init_$Create$();
            $this.g2l_1 = newScopes;
            newScopes.a1(scope);
          } else {
            var inductionVariable = 0;
            var last = lastScopes.m();
            if (inductionVariable < last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var scopeAtIndex = lastScopes.n(index);
                if (replacableWith(scopeAtIndex, scope)) {
                  lastScopes.z(index, scope);
                  return Unit_instance;
                }
              }
               while (inductionVariable < last);
            lastScopes.a1(scope);
          }
        }
      }
    }
  }
  function invoke$invoke(receiver, p0, p1) {
    receiver.t1r(p0, p1);
  }
  function ComposableLambdaImpl$invoke$invoke$ref($boundThis) {
    return function (p0, p1) {
      invoke$invoke($boundThis, p0, p1);
      return Unit_instance;
    };
  }
  function ComposableLambdaImpl(key, tracked, block) {
    this.c2l_1 = key;
    this.d2l_1 = tracked;
    this.e2l_1 = block;
    this.f2l_1 = null;
    this.g2l_1 = null;
  }
  protoOf(ComposableLambdaImpl).h2l = function (block) {
    if (!equals(this.e2l_1, block)) {
      var oldBlockNull = this.e2l_1 == null;
      this.e2l_1 = block;
      if (!oldBlockNull) {
        trackWrite(this);
      }
    }
  };
  protoOf(ComposableLambdaImpl).t1r = function (c, changed) {
    var c_0 = c.c1u(this.c2l_1);
    trackRead(this, c_0);
    var dirty = changed | (c_0.s1j(this) ? differentBits(0) : sameBits(0));
    var tmp = this.e2l_1;
    var result = ((!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE())(c_0, dirty);
    var tmp0_safe_receiver = c_0.d1u();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.c1z(ComposableLambdaImpl$invoke$invoke$ref(this));
    }
    return result;
  };
  function set_nextHash(_set____db54di) {
    _init_properties_ActualJs_js_kt__rh77u6();
    nextHash = _set____db54di;
  }
  function get_nextHash() {
    _init_properties_ActualJs_js_kt__rh77u6();
    return nextHash;
  }
  var nextHash;
  var DefaultMonotonicFrameClock;
  function logError(message, e) {
    _init_properties_ActualJs_js_kt__rh77u6();
    println(message);
    printStackTrace(e);
  }
  function currentThreadId() {
    _init_properties_ActualJs_js_kt__rh77u6();
    return new Long(0, 0);
  }
  function identityHashCode(instance) {
    _init_properties_ActualJs_js_kt__rh77u6();
    if (instance == null) {
      return 0;
    }
    // Inline function 'kotlin.js.asDynamic' call
    var hashCode = instance['kotlinIdentityHashcodeValue$'];
    if (hashCode != null) {
      return hashCode;
    }
    var tmp;
    switch (typeof instance) {
      case 'object':
      case 'function':
        tmp = memoizeIdentityHashCode(instance);
        break;
      default:
        throw IllegalArgumentException_init_$Create$('identity hash code for ' + typeof instance + ' is not supported');
    }
    return tmp;
  }
  function MonotonicClockImpl$withFrameNanos$lambda($onFrame, $continuation) {
    return function (it) {
      var duration = toDuration(it, DurationUnit_MILLISECONDS_getInstance());
      var result = $onFrame(_Duration___get_inWholeNanoseconds__impl__r5x4mr(duration));
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $continuation;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(result);
      this_0.t6(tmp$ret$0);
      return Unit_instance;
    };
  }
  function $withFrameNanosCOROUTINE$5(_this__u8e3s4, onFrame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x2u_1 = _this__u8e3s4;
    this.y2u_1 = onFrame;
  }
  protoOf($withFrameNanosCOROUTINE$5).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 2;
            this.ac_1 = 1;
            var safe = SafeContinuation_init_$Create$(intercepted(this));
            var tmp_0 = window;
            tmp_0.requestAnimationFrame(MonotonicClockImpl$withFrameNanos$lambda(this.y2u_1, safe));
            suspendResult = returnIfSuspended(safe.u6(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  function MonotonicClockImpl() {
  }
  protoOf(MonotonicClockImpl).p1g = function (onFrame, $completion) {
    var tmp = new $withFrameNanosCOROUTINE$5(this, onFrame, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  function memoizeIdentityHashCode(instance) {
    _init_properties_ActualJs_js_kt__rh77u6();
    var tmp0 = get_nextHash();
    set_nextHash(tmp0 + 1 | 0);
    var value = tmp0;
    var descriptor = new Object();
    descriptor.value = value;
    descriptor.writable = false;
    descriptor.configurable = false;
    descriptor.enumerable = false;
    Object.defineProperty(instance, 'kotlinIdentityHashcodeValue$', descriptor);
    return value;
  }
  function currentThreadName() {
    _init_properties_ActualJs_js_kt__rh77u6();
    return 'main';
  }
  var properties_initialized_ActualJs_js_kt_azbr3k;
  function _init_properties_ActualJs_js_kt__rh77u6() {
    if (!properties_initialized_ActualJs_js_kt_azbr3k) {
      properties_initialized_ActualJs_js_kt_azbr3k = true;
      nextHash = 1;
      DefaultMonotonicFrameClock = new MonotonicClockImpl();
    }
  }
  function Trace() {
  }
  protoOf(Trace).d1q = function (name) {
    return null;
  };
  protoOf(Trace).s1q = function (token) {
  };
  var Trace_instance;
  function Trace_getInstance() {
    return Trace_instance;
  }
  function invokeComposable(composer, composable) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    composable(composer, 1);
  }
  function createSnapshotMutableState(value, policy) {
    return new SnapshotMutableStateImpl(value, policy);
  }
  function PlatformOptimizedCancellationException(message) {
    message = message === VOID ? null : message;
    CancellationException_init_$Init$(message, this);
    captureStack(this, PlatformOptimizedCancellationException);
  }
  function IntMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 10 : initialCapacity;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.i1m_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(IntMap).n = function (key) {
    return this.i1m_1.x2(key);
  };
  protoOf(IntMap).k1m = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    this.i1m_1.n2(key, value);
  };
  function WeakReference(reference) {
    this.v2p_1 = reference;
  }
  protoOf(WeakReference).hw = function () {
    return this.v2p_1;
  };
  //region block: post-declaration
  protoOf(OffsetApplier).o1f = onBeginChanges;
  protoOf(OffsetApplier).p1f = onEndChanges;
  protoOf(AbstractApplier).o1f = onBeginChanges;
  protoOf(AbstractApplier).p1f = onEndChanges;
  protoOf(BroadcastFrameClock).p2 = get_key;
  protoOf(BroadcastFrameClock).hc = get;
  protoOf(BroadcastFrameClock).xf = fold;
  protoOf(BroadcastFrameClock).wf = minusKey;
  protoOf(BroadcastFrameClock).yf = plus;
  defineProp(protoOf(ComposeRuntimeError), 'message', function () {
    return this.w6();
  });
  protoOf(StructuralEqualityPolicy).c29 = merge;
  protoOf(ReferentialEqualityPolicy).c29 = merge;
  protoOf(NeverEqualPolicy).c29 = merge;
  protoOf(StateObjectImpl).o29 = mergeRecords;
  protoOf(SnapshotStateMap).o29 = mergeRecords;
  protoOf(MonotonicClockImpl).p2 = get_key;
  protoOf(MonotonicClockImpl).hc = get;
  protoOf(MonotonicClockImpl).xf = fold;
  protoOf(MonotonicClockImpl).wf = minusKey;
  protoOf(MonotonicClockImpl).yf = plus;
  //endregion
  //region block: init
  Key_instance_0 = new Key();
  movableContentKey = 126665345;
  Companion_instance_3 = new Companion_2();
  Companion_instance_5 = new Companion_4();
  StructuralEqualityPolicy_instance = new StructuralEqualityPolicy();
  ReferentialEqualityPolicy_instance = new ReferentialEqualityPolicy();
  NeverEqualPolicy_instance = new NeverEqualPolicy();
  Companion_instance_6 = new Companion_5();
  Companion_instance_7 = new Companion_6();
  TRIE_MAX_HEIGHT = 7;
  ENTRY_SIZE = 2;
  LOG_MAX_BRANCHING_FACTOR = 5;
  MAX_SHIFT = 30;
  EndOfChain_instance = new EndOfChain();
  Companion_instance_12 = new Companion_11();
  Companion_instance_15 = new Companion_14();
  Trace_instance = new Trace();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = MutableVector;
  _.$_$.b = composableLambdaInstance;
  _.$_$.c = composableLambda;
  _.$_$.d = SnapshotMutableState;
  _.$_$.e = SnapshotStateObserver;
  _.$_$.f = AbstractApplier;
  _.$_$.g = Applier;
  _.$_$.h = BroadcastFrameClock;
  _.$_$.i = ComposeNodeLifecycleCallback;
  _.$_$.j = CompositionLocalProvider_0;
  _.$_$.k = CompositionLocalProvider;
  _.$_$.l = CompositionLocalProvider_1;
  _.$_$.m = Composition;
  _.$_$.n = LaunchedEffect;
  _.$_$.o = Recomposer;
  _.$_$.p = RememberObserver;
  _.$_$.q = SideEffect;
  _.$_$.r = State_0;
  _.$_$.s = collectAsState;
  _.$_$.t = compositionLocalOf;
  _.$_$.u = get_currentCompositeKeyHash;
  _.$_$.v = identityHashCode;
  _.$_$.w = invalidApplier;
  _.$_$.x = isTraceInProgress;
  _.$_$.y = mutableStateMapOf;
  _.$_$.z = mutableStateOf;
  _.$_$.a1 = neverEqualPolicy;
  _.$_$.b1 = referentialEqualityPolicy;
  _.$_$.c1 = rememberUpdatedState;
  _.$_$.d1 = sourceInformationMarkerEnd;
  _.$_$.e1 = sourceInformationMarkerStart;
  _.$_$.f1 = sourceInformation;
  _.$_$.g1 = staticCompositionLocalOf;
  _.$_$.h1 = structuralEqualityPolicy;
  _.$_$.i1 = traceEventEnd;
  _.$_$.j1 = traceEventStart;
  _.$_$.k1 = updateChangedFlags;
  _.$_$.l1 = _Updater___init__impl__rbfxm8;
  _.$_$.m1 = _Updater___get_composer__impl__9ty7av;
  _.$_$.n1 = Updater__set_impl_v7kwss;
  _.$_$.o1 = Companion_instance_12;
  _.$_$.p1 = Companion_getInstance_0;
  _.$_$.q1 = Companion_getInstance_2;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-runtime-runtime.js.map
