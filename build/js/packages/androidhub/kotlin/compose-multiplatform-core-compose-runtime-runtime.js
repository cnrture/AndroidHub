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
  var protoOf = kotlin_kotlin.$_$.fa;
  var interfaceMeta = kotlin_kotlin.$_$.h9;
  var setMetadataFor = kotlin_kotlin.$_$.ga;
  var Unit_instance = kotlin_kotlin.$_$.h4;
  var toString = kotlin_kotlin.$_$.ka;
  var classMeta = kotlin_kotlin.$_$.v8;
  var VOID = kotlin_kotlin.$_$.g;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var THROW_CCE = kotlin_kotlin.$_$.kd;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var Companion_instance = kotlin_kotlin.$_$.c4;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.j2;
  var createFailure = kotlin_kotlin.$_$.be;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.oe;
  var intercepted = kotlin_kotlin.$_$.w7;
  var get_MODE_CANCELLABLE = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var get = kotlin_kotlin.$_$.e8;
  var fold = kotlin_kotlin.$_$.d8;
  var minusKey = kotlin_kotlin.$_$.f8;
  var plus = kotlin_kotlin.$_$.h8;
  var isInterface = kotlin_kotlin.$_$.q9;
  var equals = kotlin_kotlin.$_$.y8;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.x;
  var fill = kotlin_kotlin.$_$.y5;
  var MutableIntIntMap = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.b;
  var rotateLeft = kotlin_kotlin.$_$.le;
  var hashCode = kotlin_kotlin.$_$.f9;
  var Enum = kotlin_kotlin.$_$.bd;
  var emptyList = kotlin_kotlin.$_$.v5;
  var sortWith = kotlin_kotlin.$_$.i7;
  var rotateRight = kotlin_kotlin.$_$.me;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.l;
  var to = kotlin_kotlin.$_$.qe;
  var objectMeta = kotlin_kotlin.$_$.ea;
  var IllegalStateException = kotlin_kotlin.$_$.fd;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.q1;
  var captureStack = kotlin_kotlin.$_$.p8;
  var defineProp = kotlin_kotlin.$_$.x8;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.p;
  var lazy = kotlin_kotlin.$_$.he;
  var firstOrNull = kotlin_kotlin.$_$.b6;
  var compareTo = kotlin_kotlin.$_$.w8;
  var KProperty1 = kotlin_kotlin.$_$.wa;
  var getPropertyCallableRef = kotlin_kotlin.$_$.d9;
  var isArray = kotlin_kotlin.$_$.i9;
  var Set = kotlin_kotlin.$_$.a5;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.s;
  var MutableScatterSet = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.e;
  var get_BitmaskMsb = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.a;
  var Long = kotlin_kotlin.$_$.gd;
  var mutableScatterSetOf = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.g;
  var MutableCollection = kotlin_kotlin.$_$.w4;
  var Map = kotlin_kotlin.$_$.v4;
  var Exception = kotlin_kotlin.$_$.dd;
  var plus_0 = kotlin_kotlin.$_$.y6;
  var fillArrayVal = kotlin_kotlin.$_$.z8;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var toString_0 = kotlin_kotlin.$_$.pe;
  var Element = kotlin_kotlin.$_$.g8;
  var getStringHashCode = kotlin_kotlin.$_$.e9;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var CoroutineImpl = kotlin_kotlin.$_$.i8;
  var returnIfSuspended = kotlin_kotlin.$_$.j;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.u7;
  var throwKotlinNothingValueException = kotlin_kotlin.$_$.ne;
  var MutableObjectIntMap = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.c;
  var MutableScatterMap = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.d;
  var Collection = kotlin_kotlin.$_$.o4;
  var addAll = kotlin_kotlin.$_$.c5;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.n;
  var withContext = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.o;
  var toList = kotlin_kotlin.$_$.m7;
  var flatten = kotlin_kotlin.$_$.d6;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var CancellationException = kotlin_kotlin.$_$.t7;
  var addSuppressed = kotlin_kotlin.$_$.xd;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.v;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var removeFirst = kotlin_kotlin.$_$.e7;
  var arrayCopy = kotlin_kotlin.$_$.d5;
  var fill_0 = kotlin_kotlin.$_$.a6;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.v3;
  var anyToString = kotlin_kotlin.$_$.m8;
  var ConcurrentModificationException_init_$Create$ = kotlin_kotlin.$_$.g1;
  var first = kotlin_kotlin.$_$.c6;
  var last = kotlin_kotlin.$_$.p6;
  var copyOf = kotlin_kotlin.$_$.s5;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.f1;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var plus_1 = kotlin_kotlin.$_$.c7;
  var coerceAtMost = kotlin_kotlin.$_$.na;
  var coerceAtLeast = kotlin_kotlin.$_$.ma;
  var copyOf_0 = kotlin_kotlin.$_$.r5;
  var ensureNotNull = kotlin_kotlin.$_$.ce;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.w1;
  var Entry = kotlin_kotlin.$_$.u4;
  var SequenceScope = kotlin_kotlin.$_$.ya;
  var until = kotlin_kotlin.$_$.ra;
  var sequence = kotlin_kotlin.$_$.za;
  var joinToString = kotlin_kotlin.$_$.j6;
  var mutableScatterMapOf = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.f;
  var NoSuchElementException_init_$Create$_0 = kotlin_kotlin.$_$.v1;
  var AbstractList = kotlin_kotlin.$_$.j4;
  var List = kotlin_kotlin.$_$.t4;
  var arrayIterator = kotlin_kotlin.$_$.n8;
  var AbstractMutableList = kotlin_kotlin.$_$.l4;
  var MutableList = kotlin_kotlin.$_$.x4;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.r1;
  var indexOf = kotlin_kotlin.$_$.g6;
  var AbstractMap = kotlin_kotlin.$_$.k4;
  var AbstractSet = kotlin_kotlin.$_$.m4;
  var AbstractCollection = kotlin_kotlin.$_$.i4;
  var objectCreate = kotlin_kotlin.$_$.da;
  var step = kotlin_kotlin.$_$.qa;
  var countOneBits = kotlin_kotlin.$_$.zd;
  var ConcurrentModificationException_init_$Create$_0 = kotlin_kotlin.$_$.h1;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.u1;
  var toString_1 = kotlin_kotlin.$_$.nc;
  var longArray = kotlin_kotlin.$_$.x9;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.r;
  var Char = kotlin_kotlin.$_$.yc;
  var isCharSequence = kotlin_kotlin.$_$.m9;
  var minus = kotlin_kotlin.$_$.w6;
  var contains = kotlin_kotlin.$_$.h5;
  var plus_2 = kotlin_kotlin.$_$.b7;
  var primitiveArrayConcat = kotlin_kotlin.$_$.f;
  var singleOrNull = kotlin_kotlin.$_$.h7;
  var intArrayIterator = kotlin_kotlin.$_$.g9;
  var Companion_getInstance = kotlin_kotlin.$_$.b4;
  var toIntArray = kotlin_kotlin.$_$.l7;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.g5;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.b2;
  var println = kotlin_kotlin.$_$.l8;
  var printStackTrace = kotlin_kotlin.$_$.ke;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.h;
  var toDuration = kotlin_kotlin.$_$.wc;
  var _Duration___get_inWholeNanoseconds__impl__r5x4mr = kotlin_kotlin.$_$.e2;
  var SafeContinuation_init_$Create$ = kotlin_kotlin.$_$.d1;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.z;
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
    return this.d1f(value);
  }
  function changed_0(value) {
    return this.e1f(value);
  }
  function changedInstance(value) {
    return this.a16(value);
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
  setMetadataFor(State_0, 'State', interfaceMeta);
  setMetadataFor(DerivedState, 'DerivedState', interfaceMeta, VOID, [State_0]);
  setMetadataFor(DisposableEffectScope, 'DisposableEffectScope', classMeta, VOID, VOID, DisposableEffectScope);
  setMetadataFor(LaunchedEffectImpl, 'LaunchedEffectImpl', classMeta, VOID, [RememberObserver]);
  setMetadataFor(PlatformOptimizedCancellationException, 'PlatformOptimizedCancellationException', classMeta, CancellationException);
  setMetadataFor(LeftCompositionCancellationException, 'LeftCompositionCancellationException', classMeta, PlatformOptimizedCancellationException, VOID, LeftCompositionCancellationException);
  setMetadataFor(DisposableEffectImpl, 'DisposableEffectImpl', classMeta, VOID, [RememberObserver]);
  setMetadataFor(JoinedKey, 'JoinedKey', classMeta);
  setMetadataFor(Key, 'Key', objectMeta);
  setMetadataFor(OpaqueKey, 'OpaqueKey', classMeta);
  setMetadataFor(MutableState, 'MutableState', interfaceMeta, VOID, [State_0]);
  setMetadataFor(ProduceStateScope, 'ProduceStateScope', interfaceMeta, VOID, [MutableState, CoroutineScope_0], VOID, VOID, VOID, [1]);
  setMetadataFor($awaitDisposeCOROUTINE$0, '$awaitDisposeCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(ProduceStateScopeImpl, 'ProduceStateScopeImpl', classMeta, VOID, [ProduceStateScope, MutableState], VOID, VOID, VOID, [1]);
  setMetadataFor(produceState$slambda, 'produceState$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(RecomposeScopeImpl, 'RecomposeScopeImpl', classMeta);
  setMetadataFor(Recomposer$recompositionRunner$slambda$slambda, 'Recomposer$recompositionRunner$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(State, 'State', classMeta, Enum);
  setMetadataFor(RecomposerInfoImpl, 'RecomposerInfoImpl', classMeta);
  setMetadataFor(RecomposerErrorState, 'RecomposerErrorState', classMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(Recomposer$runRecomposeAndApplyChanges$slambda, 'Recomposer$runRecomposeAndApplyChanges$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(Recomposer$recompositionRunner$slambda, 'Recomposer$recompositionRunner$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($awaitWorkAvailableCOROUTINE$2, '$awaitWorkAvailableCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor(Recomposer, 'Recomposer', classMeta, CompositionContext, VOID, VOID, VOID, VOID, [0, 1, 2]);
  setMetadataFor(SlotTable, 'SlotTable', classMeta, VOID, VOID, SlotTable);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
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
  function merge(previous, current, applied) {
    return null;
  }
  setMetadataFor(SnapshotMutationPolicy, 'SnapshotMutationPolicy', interfaceMeta);
  setMetadataFor(StructuralEqualityPolicy, 'StructuralEqualityPolicy', objectMeta, VOID, [SnapshotMutationPolicy]);
  setMetadataFor(StateRecord, 'StateRecord', classMeta);
  setMetadataFor(StateStateRecord, 'StateStateRecord', classMeta, StateRecord);
  function mergeRecords(previous, current, applied) {
    return null;
  }
  setMetadataFor(StateObject, 'StateObject', interfaceMeta);
  setMetadataFor(StateObjectImpl, 'StateObjectImpl', classMeta, VOID, [StateObject]);
  setMetadataFor(SnapshotMutableStateImpl, 'SnapshotMutableStateImpl', classMeta, StateObjectImpl, [StateObjectImpl, MutableState]);
  setMetadataFor(SnapshotThreadLocal, 'SnapshotThreadLocal', classMeta, VOID, VOID, SnapshotThreadLocal);
  setMetadataFor(IntStack, 'IntStack', classMeta, VOID, VOID, IntStack);
  setMetadataFor(Stack, 'Stack', classMeta, VOID, VOID, Stack);
  setMetadataFor(SynchronizedObject, 'SynchronizedObject', classMeta, VOID, VOID, SynchronizedObject);
  setMetadataFor(LazyValueHolder, 'LazyValueHolder', classMeta, VOID, [State_0]);
  setMetadataFor(StaticValueHolder, 'StaticValueHolder', classMeta, VOID, [State_0]);
  setMetadataFor(ChangeList, 'ChangeList', classMeta, VOID, VOID, ChangeList);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(ComposerChangeListWriter, 'ComposerChangeListWriter', classMeta);
  setMetadataFor(FixupList, 'FixupList', classMeta, VOID, VOID, FixupList);
  setMetadataFor(Operation, 'Operation', classMeta);
  setMetadataFor(Ups, 'Ups', objectMeta, Operation);
  setMetadataFor(Downs, 'Downs', objectMeta, Operation);
  setMetadataFor(AdvanceSlotsBy, 'AdvanceSlotsBy', objectMeta, Operation);
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
  setMetadataFor(Companion_5, 'Companion', objectMeta);
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
  setMetadataFor(MutableVector, 'MutableVector', classMeta);
  setMetadataFor(ScopeMap, 'ScopeMap', classMeta, VOID, VOID, ScopeMap);
  setMetadataFor(AbstractListIterator, 'AbstractListIterator', classMeta);
  setMetadataFor(AbstractPersistentList, 'AbstractPersistentList', classMeta, AbstractList, [Collection, List, AbstractList]);
  setMetadataFor(BufferIterator, 'BufferIterator', classMeta, AbstractListIterator);
  setMetadataFor(PersistentVector, 'PersistentVector', classMeta, AbstractPersistentList, [Collection, List, AbstractPersistentList]);
  setMetadataFor(PersistentVectorBuilder, 'PersistentVectorBuilder', classMeta, AbstractMutableList, [AbstractMutableList, MutableList, MutableCollection]);
  setMetadataFor(PersistentVectorIterator, 'PersistentVectorIterator', classMeta, AbstractListIterator);
  setMetadataFor(PersistentVectorMutableIterator, 'PersistentVectorMutableIterator', classMeta, AbstractListIterator);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(SmallPersistentVector, 'SmallPersistentVector', classMeta, AbstractPersistentList, [Collection, List, AbstractPersistentList]);
  setMetadataFor(TrieIterator, 'TrieIterator', classMeta, AbstractListIterator);
  setMetadataFor(ObjectRef, 'ObjectRef', classMeta);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(PersistentHashMap, 'PersistentHashMap', classMeta, AbstractMap, [AbstractMap, Map]);
  setMetadataFor(PersistentHashMapBaseIterator, 'PersistentHashMapBaseIterator', classMeta);
  setMetadataFor(PersistentHashMapKeysIterator, 'PersistentHashMapKeysIterator', classMeta, PersistentHashMapBaseIterator);
  setMetadataFor(PersistentHashMapValuesIterator, 'PersistentHashMapValuesIterator', classMeta, PersistentHashMapBaseIterator);
  setMetadataFor(PersistentHashMapEntriesIterator, 'PersistentHashMapEntriesIterator', classMeta, PersistentHashMapBaseIterator);
  setMetadataFor(TrieNodeBaseIterator, 'TrieNodeBaseIterator', classMeta);
  setMetadataFor(TrieNodeKeysIterator, 'TrieNodeKeysIterator', classMeta, TrieNodeBaseIterator, VOID, TrieNodeKeysIterator);
  setMetadataFor(TrieNodeValuesIterator, 'TrieNodeValuesIterator', classMeta, TrieNodeBaseIterator, VOID, TrieNodeValuesIterator);
  setMetadataFor(TrieNodeEntriesIterator, 'TrieNodeEntriesIterator', classMeta, TrieNodeBaseIterator, VOID, TrieNodeEntriesIterator);
  setMetadataFor(MapEntry, 'MapEntry', classMeta, VOID, [Entry]);
  setMetadataFor(PersistentHashMapKeys, 'PersistentHashMapKeys', classMeta, AbstractSet, [Set, Collection, AbstractSet]);
  setMetadataFor(PersistentHashMapValues, 'PersistentHashMapValues', classMeta, AbstractCollection, [Collection, AbstractCollection]);
  setMetadataFor(PersistentHashMapEntries, 'PersistentHashMapEntries', classMeta, AbstractSet, [Set, Collection, AbstractSet]);
  setMetadataFor(ModificationResult, 'ModificationResult', classMeta);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(TrieNode, 'TrieNode', classMeta);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(PersistentOrderedSet, 'PersistentOrderedSet', classMeta, AbstractSet, [AbstractSet, Collection, Set]);
  setMetadataFor(Links, 'Links', classMeta, VOID, VOID, Links_init_$Create$);
  setMetadataFor(PersistentOrderedSetIterator, 'PersistentOrderedSetIterator', classMeta);
  setMetadataFor(EndOfChain, 'EndOfChain', objectMeta);
  setMetadataFor(ListImplementation, 'ListImplementation', objectMeta);
  setMetadataFor(MutabilityOwnership, 'MutabilityOwnership', classMeta, VOID, VOID, MutabilityOwnership);
  setMetadataFor(IntRef, 'IntRef', classMeta, VOID, VOID, IntRef);
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
  setMetadataFor(NestedMutableSnapshot, 'NestedMutableSnapshot', classMeta, MutableSnapshot);
  setMetadataFor(SnapshotDoubleIndexHeap, 'SnapshotDoubleIndexHeap', classMeta, VOID, VOID, SnapshotDoubleIndexHeap);
  setMetadataFor(Companion_13, 'Companion', objectMeta);
  setMetadataFor(SnapshotIdSet$iterator$slambda, 'SnapshotIdSet$iterator$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(SnapshotIdSet, 'SnapshotIdSet', classMeta);
  setMetadataFor(StateListStateRecord, 'StateListStateRecord', classMeta, StateRecord);
  setMetadataFor(SnapshotStateList, 'SnapshotStateList', classMeta, VOID, [StateObject, MutableList], SnapshotStateList);
  setMetadataFor(StateListIterator, 'StateListIterator', classMeta);
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
    this.g12_1 = applier;
    this.h12_1 = offset;
    this.i12_1 = 0;
  }
  protoOf(OffsetApplier).x11 = function () {
    return this.g12_1.x11();
  };
  protoOf(OffsetApplier).a12 = function (node) {
    this.i12_1 = this.i12_1 + 1 | 0;
    this.g12_1.a12(node);
  };
  protoOf(OffsetApplier).b12 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.i12_1 > 0)) {
      // Inline function 'androidx.compose.runtime.OffsetApplier.up.<anonymous>' call
      var message = 'OffsetApplier up called with no corresponding down';
      composeRuntimeError(toString(message));
    }
    this.i12_1 = this.i12_1 - 1 | 0;
    this.g12_1.b12();
  };
  protoOf(OffsetApplier).c12 = function (index, instance) {
    this.g12_1.c12(index + (this.i12_1 === 0 ? this.h12_1 : 0) | 0, instance);
  };
  protoOf(OffsetApplier).d12 = function (index, instance) {
    this.g12_1.d12(index + (this.i12_1 === 0 ? this.h12_1 : 0) | 0, instance);
  };
  protoOf(OffsetApplier).e12 = function (index, count) {
    this.g12_1.e12(index + (this.i12_1 === 0 ? this.h12_1 : 0) | 0, count);
  };
  protoOf(OffsetApplier).f12 = function (from, to, count) {
    var effectiveOffset = this.i12_1 === 0 ? this.h12_1 : 0;
    this.g12_1.f12(from + effectiveOffset | 0, to + effectiveOffset | 0, count);
  };
  function AbstractApplier(root) {
    this.j12_1 = root;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.k12_1 = ArrayList_init_$Create$();
    this.l12_1 = this.j12_1;
  }
  protoOf(AbstractApplier).m12 = function (_set____db54di) {
    this.l12_1 = _set____db54di;
  };
  protoOf(AbstractApplier).x11 = function () {
    return this.l12_1;
  };
  protoOf(AbstractApplier).n12 = function (node) {
    this.k12_1.y(this.x11());
    this.m12(node);
  };
  protoOf(AbstractApplier).a12 = function (node) {
    return this.n12((node == null ? true : !(node == null)) ? node : THROW_CCE());
  };
  protoOf(AbstractApplier).b12 = function () {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.k12_1.s()) {
      // Inline function 'androidx.compose.runtime.AbstractApplier.up.<anonymous>' call
      var message = 'empty stack';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.m12(this.k12_1.k1(this.k12_1.l() - 1 | 0));
  };
  function FrameAwaiter(onFrame, continuation) {
    this.o12_1 = onFrame;
    this.p12_1 = continuation;
  }
  protoOf(FrameAwaiter).q12 = function (timeNanos) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      // Inline function 'androidx.compose.runtime.FrameAwaiter.resume.<anonymous>' call
      var value = this.o12_1(timeNanos);
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
    this.p12_1.s6(tmp$ret$3);
  };
  function fail($this, cause) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.s12_1;
    if (!($this.t12_1 == null))
      return Unit_instance;
    $this.t12_1 = cause;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    var this_0 = $this.u12_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.m(index);
        // Inline function 'androidx.compose.runtime.BroadcastFrameClock.fail.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.coroutines.resumeWithException' call
        var this_1 = item.p12_1;
        // Inline function 'kotlin.Companion.failure' call
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
        this_1.s6(tmp$ret$0);
      }
       while (inductionVariable <= last);
    $this.u12_1.f1();
  }
  function BroadcastFrameClock$withFrameNanos$lambda(this$0, $awaiter) {
    return function (it) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this$0.s12_1;
      var tmp = this$0.u12_1;
      var tmp_0;
      if ($awaiter._v == null) {
        throwUninitializedPropertyAccessException('awaiter');
      } else {
        tmp_0 = $awaiter._v;
      }
      tmp.z(tmp_0);
      return Unit_instance;
    };
  }
  function BroadcastFrameClock(onNewAwaiters) {
    onNewAwaiters = onNewAwaiters === VOID ? null : onNewAwaiters;
    this.r12_1 = onNewAwaiters;
    this.s12_1 = createSynchronizedObject();
    this.t12_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.u12_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.v12_1 = ArrayList_init_$Create$();
  }
  protoOf(BroadcastFrameClock).w12 = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.s12_1;
    // Inline function 'androidx.compose.runtime.BroadcastFrameClock.<get-hasAwaiters>.<anonymous>' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    return !this.u12_1.s();
  };
  protoOf(BroadcastFrameClock).x12 = function (timeNanos) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.s12_1;
    var toResume = this.u12_1;
    this.u12_1 = this.v12_1;
    this.v12_1 = toResume;
    var inductionVariable = 0;
    var last = toResume.l();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        toResume.m(i).q12(timeNanos);
      }
       while (inductionVariable < last);
    toResume.f1();
  };
  protoOf(BroadcastFrameClock).y12 = function (onFrame, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), get_MODE_CANCELLABLE());
    cancellable.mo();
    $l$block: {
      // Inline function 'androidx.compose.runtime.BroadcastFrameClock.withFrameNanos.<anonymous>' call
      var awaiter = {_v: null};
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this.s12_1;
      // Inline function 'androidx.compose.runtime.BroadcastFrameClock.withFrameNanos.<anonymous>.<anonymous>' call
      var cause = this.t12_1;
      if (!(cause == null)) {
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
        cancellable.s6(tmp$ret$0);
        break $l$block;
      }
      awaiter._v = new FrameAwaiter(onFrame, cancellable);
      // Inline function 'kotlin.collections.isNotEmpty' call
      var hadAwaiters = !this.u12_1.s();
      var tmp = this.u12_1;
      var tmp_0;
      if (awaiter._v == null) {
        throwUninitializedPropertyAccessException('awaiter');
      } else {
        tmp_0 = awaiter._v;
      }
      tmp.y(tmp_0);
      var hasNewAwaiters = !hadAwaiters;
      cancellable.cn(BroadcastFrameClock$withFrameNanos$lambda(this, awaiter));
      if (hasNewAwaiters ? !(this.r12_1 == null) : false) {
        try {
          this.r12_1();
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
    return cancellable.om();
  };
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
    this.c13_1 = scope;
    this.d13_1 = location;
    this.e13_1 = instances;
  }
  protoOf(Invalidation).f13 = function () {
    return this.c13_1.o13(this.e13_1);
  };
  function startRoot($this) {
    $this.w14_1 = $this.r13_1.u15();
    startGroup($this, 100);
    $this.q13_1.v15();
    $this.j14_1 = $this.q13_1.w15();
    $this.m14_1.z15(asInt($this.l14_1));
    $this.l14_1 = $this.a16($this.j14_1);
    $this.a15_1 = null;
    if (!$this.e14_1) {
      $this.e14_1 = $this.q13_1.b16();
    }
    if (!$this.r14_1) {
      $this.r14_1 = $this.q13_1.c16();
    }
    var tmp0_safe_receiver = read($this.j14_1, get_LocalInspectionTables());
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.y($this.r13_1);
      $this.q13_1.d16(tmp0_safe_receiver);
    }
    startGroup($this, $this.q13_1.e16());
  }
  function endRoot($this) {
    endGroup($this);
    $this.q13_1.f16();
    endGroup($this);
    $this.c15_1.s16();
    finalizeCompose($this);
    $this.w14_1.g17();
    $this.f14_1 = false;
  }
  function abortRoot($this) {
    cleanUpCompose($this);
    $this.w13_1.f1();
    $this.z13_1.f1();
    $this.b14_1.f1();
    $this.i14_1.f1();
    $this.m14_1.f1();
    $this.k14_1 = null;
    if (!$this.w14_1.z16_1) {
      $this.w14_1.g17();
    }
    if (!$this.y14_1.c18_1) {
      $this.y14_1.g17();
    }
    $this.e15_1.f1();
    createFreshInsertTable($this);
    $this.g15_1 = 0;
    $this.p14_1 = 0;
    $this.g14_1 = false;
    $this.f15_1 = false;
    $this.n14_1 = false;
    $this.u14_1 = false;
    $this.f14_1 = false;
    $this.o14_1 = -1;
  }
  function startGroup($this, key) {
    return start($this, key, null, Companion_getInstance_1().g18_1, null);
  }
  function startGroup_0($this, key, dataKey) {
    return start($this, key, dataKey, Companion_getInstance_1().g18_1, null);
  }
  function endGroup($this) {
    return end($this, false);
  }
  function skipGroup($this) {
    $this.a14_1 = $this.a14_1 + $this.w14_1.j18() | 0;
  }
  function updateSlot($this, value) {
    $this.k18();
    $this.l18(value);
  }
  function currentCompositionLocalScope($this) {
    var tmp0_safe_receiver = $this.a15_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    return currentCompositionLocalScope_0($this, $this.w14_1.c17_1);
  }
  function currentCompositionLocalScope_0($this, group) {
    if ($this.f15_1 ? $this.z14_1 : false) {
      var current = $this.y14_1.b18_1;
      while (current > 0) {
        if ($this.y14_1.o18(current) === 202 ? equals($this.y14_1.n18(current), get_compositionLocalMap()) : false) {
          var tmp = $this.y14_1.m18(current);
          var providers = (!(tmp == null) ? isInterface(tmp, PersistentCompositionLocalMap) : false) ? tmp : THROW_CCE();
          $this.a15_1 = providers;
          return providers;
        }
        current = $this.y14_1.p18(current);
      }
    }
    if ($this.w14_1.l() > 0) {
      var current_0 = group;
      while (current_0 > 0) {
        if ($this.w14_1.o18(current_0) === 202 ? equals($this.w14_1.n18(current_0), get_compositionLocalMap()) : false) {
          var tmp0_safe_receiver = $this.k14_1;
          var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m(current_0);
          var tmp_0;
          if (tmp1_elvis_lhs == null) {
            var tmp_1 = $this.w14_1.m18(current_0);
            tmp_0 = (!(tmp_1 == null) ? isInterface(tmp_1, PersistentCompositionLocalMap) : false) ? tmp_1 : THROW_CCE();
          } else {
            tmp_0 = tmp1_elvis_lhs;
          }
          var providers_0 = tmp_0;
          $this.a15_1 = providers_0;
          return providers_0;
        }
        current_0 = $this.w14_1.p18(current_0);
      }
    }
    $this.a15_1 = $this.j14_1;
    return $this.j14_1;
  }
  function recordProviderUpdate($this, providers) {
    var tmp0_elvis_lhs = $this.k14_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.recordProviderUpdate.<anonymous>' call
      var newProviderUpdates = new IntMap();
      $this.k14_1 = newProviderUpdates;
      tmp = newProviderUpdates;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var providerUpdates = tmp;
    providerUpdates.r18($this.w14_1.a17_1, providers);
  }
  function ensureWriter($this) {
    if ($this.y14_1.c18_1) {
      $this.y14_1 = $this.x14_1.s18();
      $this.y14_1.t18();
      $this.z14_1 = false;
      $this.a15_1 = null;
    }
  }
  function createFreshInsertTable($this) {
    runtimeCheck($this.y14_1.c18_1);
    $this.x14_1 = new SlotTable();
    var tmp = $this;
    // Inline function 'kotlin.also' call
    var this_0 = $this.x14_1.s18();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.createFreshInsertTable.<anonymous>' call
    this_0.g17();
    tmp.y14_1 = this_0;
  }
  function startReaderGroup($this, isNode, data) {
    if (isNode) {
      $this.w14_1.x18();
    } else {
      if (!(data == null) ? !($this.w14_1.v18() === data) : false) {
        $this.c15_1.u18(data);
      }
      $this.w14_1.w18();
    }
  }
  function start($this, key, objectKey, kind, data) {
    validateNodeNotExpected($this);
    updateCompoundKeyWhenWeEnterGroup($this, key, objectKey, data);
    // Inline function 'androidx.compose.runtime.GroupKind.isNode' call
    var isNode = !(_GroupKind___get_value__impl__cf5pqe(kind) === _GroupKind___get_value__impl__cf5pqe(Companion_getInstance_1().g18_1));
    if ($this.f15_1) {
      $this.w14_1.y18();
      var startIndex = $this.y14_1.z17_1;
      if (isNode) {
        $this.y14_1.c19(key, Companion_getInstance_0().z18_1);
      } else if (!(data == null)) {
        var tmp = $this.y14_1;
        tmp.b19(key, objectKey == null ? Companion_getInstance_0().z18_1 : objectKey, data);
      } else {
        var tmp_0 = $this.y14_1;
        tmp_0.a19(key, objectKey == null ? Companion_getInstance_0().z18_1 : objectKey);
      }
      var tmp2_safe_receiver = $this.x13_1;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.start.<anonymous>' call
        var insertKeyInfo = new KeyInfo(key, -1, insertedGroupVirtualIndex($this, startIndex), -1, 0);
        tmp2_safe_receiver.j19(insertKeyInfo, $this.y13_1 - tmp2_safe_receiver.e19_1 | 0);
        tmp2_safe_receiver.k19(insertKeyInfo);
      }
      enterGroup($this, isNode, null);
      return Unit_instance;
    }
    var tmp_1;
    // Inline function 'androidx.compose.runtime.GroupKind.isReusable' call
    if (!!(_GroupKind___get_value__impl__cf5pqe(kind) === _GroupKind___get_value__impl__cf5pqe(Companion_getInstance_1().h18_1))) {
      tmp_1 = $this.n14_1;
    } else {
      tmp_1 = false;
    }
    var forceReplace = tmp_1;
    if ($this.x13_1 == null) {
      var slotKey = $this.w14_1.l19();
      if ((!forceReplace ? slotKey === key : false) ? equals(objectKey, $this.w14_1.n19()) : false) {
        startReaderGroup($this, isNode, data);
      } else {
        $this.x13_1 = new Pending($this.w14_1.m19(), $this.y13_1);
      }
    }
    var pending = $this.x13_1;
    var newPending = null;
    if (!(pending == null)) {
      var keyInfo = pending.o19(key, objectKey);
      if (!forceReplace ? !(keyInfo == null) : false) {
        pending.k19(keyInfo);
        var location = keyInfo.t19_1;
        $this.y13_1 = pending.w19(keyInfo) + pending.e19_1 | 0;
        var relativePosition = pending.x19(keyInfo);
        var currentRelativePosition = relativePosition - pending.f19_1 | 0;
        pending.y19(relativePosition, pending.f19_1);
        $this.c15_1.z19(location);
        $this.w14_1.a1a(location);
        if (currentRelativePosition > 0) {
          $this.c15_1.b1a(currentRelativePosition);
        }
        startReaderGroup($this, isNode, data);
      } else {
        $this.w14_1.y18();
        $this.f15_1 = true;
        $this.a15_1 = null;
        ensureWriter($this);
        $this.y14_1.p19();
        var startIndex_0 = $this.y14_1.z17_1;
        if (isNode) {
          $this.y14_1.c19(key, Companion_getInstance_0().z18_1);
        } else if (!(data == null)) {
          var tmp_2 = $this.y14_1;
          tmp_2.b19(key, objectKey == null ? Companion_getInstance_0().z18_1 : objectKey, data);
        } else {
          var tmp_3 = $this.y14_1;
          tmp_3.a19(key, objectKey == null ? Companion_getInstance_0().z18_1 : objectKey);
        }
        $this.d15_1 = $this.y14_1.q19(startIndex_0);
        var insertKeyInfo_0 = new KeyInfo(key, -1, insertedGroupVirtualIndex($this, startIndex_0), -1, 0);
        pending.j19(insertKeyInfo_0, $this.y13_1 - pending.e19_1 | 0);
        pending.k19(insertKeyInfo_0);
        // Inline function 'kotlin.collections.mutableListOf' call
        var tmp$ret$4 = ArrayList_init_$Create$();
        newPending = new Pending(tmp$ret$4, isNode ? 0 : $this.y13_1);
      }
    }
    enterGroup($this, isNode, newPending);
  }
  function enterGroup($this, isNode, newPending) {
    $this.w13_1.c1a($this.x13_1);
    $this.x13_1 = newPending;
    $this.z13_1.z15($this.y13_1);
    if (isNode)
      $this.y13_1 = 0;
    $this.b14_1.z15($this.a14_1);
    $this.a14_1 = 0;
  }
  function exitGroup($this, expectedNodeCount, inserting) {
    var previousPending = $this.w13_1.d1a();
    if (!(previousPending == null) ? !inserting : false) {
      previousPending.f19_1 = previousPending.f19_1 + 1 | 0;
    }
    $this.x13_1 = previousPending;
    $this.y13_1 = $this.z13_1.d1a() + expectedNodeCount | 0;
    $this.a14_1 = $this.b14_1.d1a() + expectedNodeCount | 0;
  }
  function end($this, isNode) {
    if ($this.f15_1) {
      var parent = $this.y14_1.b18_1;
      updateCompoundKeyWhenWeExitGroup($this, $this.y14_1.o18(parent), $this.y14_1.n18(parent), $this.y14_1.m18(parent));
    } else {
      var parent_0 = $this.w14_1.c17_1;
      updateCompoundKeyWhenWeExitGroup($this, $this.w14_1.o18(parent_0), $this.w14_1.n18(parent_0), $this.w14_1.m18(parent_0));
    }
    var expectedNodeCount = $this.a14_1;
    var pending = $this.x13_1;
    if (!(pending == null) ? pending.d19_1.l() > 0 : false) {
      var previous = pending.d19_1;
      var current = pending.e1a();
      var usedKeys = fastToSet(current);
      // Inline function 'kotlin.collections.mutableSetOf' call
      var placedKeys = LinkedHashSet_init_$Create$();
      var currentIndex = 0;
      var currentEnd = current.l();
      var previousIndex = 0;
      var previousEnd = previous.l();
      var nodeOffset = 0;
      $l$loop_0: while (previousIndex < previousEnd) {
        var previousInfo = previous.m(previousIndex);
        if (!usedKeys.q(previousInfo)) {
          var deleteOffset = pending.w19(previousInfo);
          $this.c15_1.f1a(deleteOffset + pending.e19_1 | 0, previousInfo.u19_1);
          pending.g1a(previousInfo.t19_1, 0);
          $this.c15_1.z19(previousInfo.t19_1);
          $this.w14_1.a1a(previousInfo.t19_1);
          recordDelete($this);
          $this.w14_1.j18();
          removeRange($this.h14_1, previousInfo.t19_1, previousInfo.t19_1 + $this.w14_1.h1a(previousInfo.t19_1) | 0);
          previousIndex = previousIndex + 1 | 0;
          continue $l$loop_0;
        }
        if (placedKeys.q(previousInfo)) {
          previousIndex = previousIndex + 1 | 0;
          continue $l$loop_0;
        }
        if (currentIndex < currentEnd) {
          var currentInfo = current.m(currentIndex);
          if (!(currentInfo === previousInfo)) {
            var nodePosition = pending.w19(currentInfo);
            placedKeys.y(currentInfo);
            if (!(nodePosition === nodeOffset)) {
              var updatedCount = pending.i1a(currentInfo);
              $this.c15_1.j1a(nodePosition + pending.e19_1 | 0, nodeOffset + pending.e19_1 | 0, updatedCount);
              pending.k1a(nodePosition, nodeOffset, updatedCount);
            }
          } else {
            previousIndex = previousIndex + 1 | 0;
          }
          currentIndex = currentIndex + 1 | 0;
          nodeOffset = nodeOffset + pending.i1a(currentInfo) | 0;
        }
      }
      $this.c15_1.l1a();
      if (previous.l() > 0) {
        $this.c15_1.z19($this.w14_1.m1a());
        $this.w14_1.t18();
      }
    }
    var removeIndex = $this.y13_1;
    while (!$this.w14_1.n1a()) {
      var startSlot = $this.w14_1.a17_1;
      recordDelete($this);
      var nodesToRemove = $this.w14_1.j18();
      $this.c15_1.f1a(removeIndex, nodesToRemove);
      removeRange($this.h14_1, startSlot, $this.w14_1.a17_1);
    }
    var inserting = $this.f15_1;
    if (inserting) {
      if (isNode) {
        $this.e15_1.r1a();
        expectedNodeCount = 1;
      }
      $this.w14_1.s1a();
      var parentGroup = $this.y14_1.b18_1;
      $this.y14_1.t1a();
      if (!$this.w14_1.w1a()) {
        var virtualIndex = insertedGroupVirtualIndex($this, parentGroup);
        $this.y14_1.u1a();
        $this.y14_1.g17();
        recordInsert($this, $this.d15_1);
        $this.f15_1 = false;
        if (!$this.r13_1.v1a()) {
          updateNodeCount($this, virtualIndex, 0);
          updateNodeCountOverrides($this, virtualIndex, expectedNodeCount);
        }
      }
    } else {
      if (isNode) {
        $this.c15_1.o1a();
      }
      $this.c15_1.p1a();
      var parentGroup_0 = $this.w14_1.c17_1;
      var parentNodeCount = updatedNodeCount($this, parentGroup_0);
      if (!(expectedNodeCount === parentNodeCount)) {
        updateNodeCountOverrides($this, parentGroup_0, expectedNodeCount);
      }
      if (isNode) {
        expectedNodeCount = 1;
      }
      $this.w14_1.q1a();
      $this.c15_1.l1a();
    }
    exitGroup($this, expectedNodeCount, inserting);
  }
  function recomposeToGroupEnd($this) {
    var wasComposing = $this.u14_1;
    $this.u14_1 = true;
    var recomposed = false;
    var parent = $this.w14_1.c17_1;
    var end = parent + $this.w14_1.h1a(parent) | 0;
    var recomposeIndex = $this.y13_1;
    var recomposeCompoundKey = $this.g15_1;
    var oldGroupNodeCount = $this.a14_1;
    var oldGroup = parent;
    var firstInRange_0 = firstInRange($this.h14_1, $this.w14_1.a17_1, end);
    while (!(firstInRange_0 == null)) {
      var location = firstInRange_0.d13_1;
      removeLocation($this.h14_1, location);
      if (firstInRange_0.f13()) {
        recomposed = true;
        $this.w14_1.a1a(location);
        var newGroup = $this.w14_1.a17_1;
        recordUpsAndDowns($this, oldGroup, newGroup, parent);
        oldGroup = newGroup;
        $this.y13_1 = nodeIndexOf($this, location, newGroup, parent, recomposeIndex);
        $this.g15_1 = compoundKeyOf($this, $this.w14_1.p18(newGroup), parent, recomposeCompoundKey);
        $this.a15_1 = null;
        firstInRange_0.c13_1.y1a($this);
        $this.a15_1 = null;
        $this.w14_1.z1a(parent);
      } else {
        $this.t14_1.c1a(firstInRange_0.c13_1);
        firstInRange_0.c13_1.x1a();
        $this.t14_1.d1a();
      }
      firstInRange_0 = firstInRange($this.h14_1, $this.w14_1.a17_1, end);
    }
    if (recomposed) {
      recordUpsAndDowns($this, oldGroup, parent, parent);
      $this.w14_1.t18();
      var parentGroupNodes = updatedNodeCount($this, parent);
      $this.y13_1 = recomposeIndex + parentGroupNodes | 0;
      $this.a14_1 = oldGroupNodeCount + parentGroupNodes | 0;
    } else {
      skipReaderToGroupEnd($this);
    }
    $this.g15_1 = recomposeCompoundKey;
    $this.u14_1 = wasComposing;
  }
  function insertedGroupVirtualIndex($this, index) {
    return -2 - index | 0;
  }
  function updateNodeCountOverrides($this, group, newCount) {
    var currentCount = updatedNodeCount($this, group);
    if (!(currentCount === newCount)) {
      var delta = newCount - currentCount | 0;
      var current = group;
      var minPending = $this.w13_1.l() - 1 | 0;
      $l$loop_0: while (!(current === -1)) {
        var newCurrentNodes = updatedNodeCount($this, current) + delta | 0;
        updateNodeCount($this, current, newCurrentNodes);
        var inductionVariable = minPending;
        if (0 <= inductionVariable)
          $l$loop: do {
            var pendingIndex = inductionVariable;
            inductionVariable = inductionVariable + -1 | 0;
            var pending = $this.w13_1.a1b(pendingIndex);
            if (!(pending == null) ? pending.g1a(current, newCurrentNodes) : false) {
              minPending = pendingIndex - 1 | 0;
              break $l$loop;
            }
          }
           while (0 <= inductionVariable);
        if (current < 0) {
          current = $this.w14_1.c17_1;
        } else {
          if ($this.w14_1.b1b(current))
            break $l$loop_0;
          current = $this.w14_1.p18(current);
        }
      }
    }
  }
  function nodeIndexOf($this, groupLocation, group, recomposeGroup, recomposeIndex) {
    var anchorGroup = $this.w14_1.p18(group);
    $l$loop: while (!(anchorGroup === recomposeGroup) && !$this.w14_1.b1b(anchorGroup)) {
      anchorGroup = $this.w14_1.p18(anchorGroup);
    }
    var index = $this.w14_1.b1b(anchorGroup) ? 0 : recomposeIndex;
    if (anchorGroup === group)
      return index;
    var current = anchorGroup;
    var nodeIndexLimit = index + (updatedNodeCount($this, anchorGroup) - $this.w14_1.c1b(group) | 0) | 0;
    loop: while (index < nodeIndexLimit && current !== groupLocation) {
      current = current + 1 | 0;
      while (current < groupLocation) {
        var end = current + $this.w14_1.h1a(current) | 0;
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
      var tmp0_safe_receiver = $this.d14_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.updatedNodeCount.<anonymous>' call
        tmp = tmp0_safe_receiver.vg(group) ? tmp0_safe_receiver.m(group) : 0;
      }
      var tmp1_elvis_lhs = tmp;
      return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    }
    var nodeCounts = $this.c14_1;
    if (!(nodeCounts == null)) {
      var override = nodeCounts[group];
      if (override >= 0)
        return override;
    }
    return $this.w14_1.c1b(group);
  }
  function updateNodeCount($this, group, count) {
    if (!(updatedNodeCount($this, group) === count)) {
      if (group < 0) {
        var tmp0_elvis_lhs = $this.d14_1;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateNodeCount.<anonymous>' call
          var newCounts = new MutableIntIntMap();
          $this.d14_1 = newCounts;
          tmp = newCounts;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var virtualCounts = tmp;
        virtualCounts.vz(group, count);
      } else {
        var tmp1_elvis_lhs = $this.c14_1;
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateNodeCount.<anonymous>' call
          var newCounts_0 = new Int32Array($this.w14_1.l());
          fill(newCounts_0, -1);
          $this.c14_1 = newCounts_0;
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
    $this.c14_1 = null;
    $this.d14_1 = null;
  }
  function recordUpsAndDowns($this, oldGroup, newGroup, commonRoot) {
    var reader = $this.w14_1;
    var nearestCommonRoot = nearestCommonRootOf(reader, oldGroup, newGroup, commonRoot);
    var current = oldGroup;
    while (current > 0 ? !(current === nearestCommonRoot) : false) {
      if (reader.b1b(current)) {
        $this.c15_1.o1a();
      }
      current = reader.p18(current);
    }
    doRecordDownsFor($this, newGroup, nearestCommonRoot);
  }
  function doRecordDownsFor($this, group, nearestCommonRoot) {
    if (group > 0 ? !(group === nearestCommonRoot) : false) {
      doRecordDownsFor($this, $this.w14_1.p18(group), nearestCommonRoot);
      if ($this.w14_1.b1b(group)) {
        $this.c15_1.d1b(nodeAt($this.w14_1, $this, group));
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
      var groupKey = groupCompoundKeyPart($this.w14_1, $this, group);
      var tmp_0;
      if (groupKey === get_movableContentKey()) {
        tmp_0 = groupKey;
      } else {
        // Inline function 'androidx.compose.runtime.rol' call
        var this_0 = compoundKeyOf($this, $this.w14_1.p18(group), recomposeGroup, recomposeKey);
        tmp_0 = rotateLeft(this_0, 3) ^ groupKey;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function groupCompoundKeyPart(_this__u8e3s4, $this, group) {
    var tmp;
    if (_this__u8e3s4.e1b(group)) {
      var tmp0_safe_receiver = _this__u8e3s4.n18(group);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>' call
        var tmp_1;
        if (tmp0_safe_receiver instanceof Enum) {
          tmp_1 = tmp0_safe_receiver.ta_1;
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
      var it = _this__u8e3s4.o18(group);
      var tmp_2;
      if (it === 207) {
        var tmp0_safe_receiver_0 = _this__u8e3s4.m18(group);
        var tmp_3;
        if (tmp0_safe_receiver_0 == null) {
          tmp_3 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>.<anonymous>' call
          tmp_3 = equals(tmp0_safe_receiver_0, Companion_getInstance_0().z18_1) ? it : hashCode(tmp0_safe_receiver_0);
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
    $this.a14_1 = $this.w14_1.f1b();
    $this.w14_1.t18();
  }
  function addRecomposeScope($this) {
    if ($this.f15_1) {
      var tmp = $this.v13_1;
      var scope = new RecomposeScopeImpl(tmp instanceof CompositionImpl ? tmp : THROW_CCE());
      $this.t14_1.c1a(scope);
      $this.l18(scope);
      scope.j1b($this.q14_1);
    } else {
      var invalidation = removeLocation($this.h14_1, $this.w14_1.c17_1);
      var slot = $this.w14_1.d1();
      var tmp_0;
      if (equals(slot, Companion_getInstance_0().z18_1)) {
        var tmp_1 = $this.v13_1;
        var newScope = new RecomposeScopeImpl(tmp_1 instanceof CompositionImpl ? tmp_1 : THROW_CCE());
        $this.l18(newScope);
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
        var this_0 = scope_0.g1b();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.addRecomposeScope.<anonymous>' call
        if (this_0) {
          scope_0.h1b(false);
        }
        tmp_2 = this_0;
      }
      scope_0.i1b(tmp_2);
      $this.t14_1.c1a(scope_0);
      scope_0.j1b($this.q14_1);
    }
  }
  function invokeMovableContentLambda($this, content, locals, parameter, force) {
    $this.k1b(get_movableContentKey(), content);
    updateSlot($this, parameter);
    var savedCompoundKeyHash = $this.g15_1;
    try {
      $this.g15_1 = get_movableContentKey();
      if ($this.f15_1) {
        $this.y14_1.l1b();
      }
      var providersChanged = $this.f15_1 ? false : !equals($this.w14_1.v18(), locals);
      if (providersChanged) {
        recordProviderUpdate($this, locals);
      }
      start($this, 202, get_compositionLocalMap(), Companion_getInstance_1().g18_1, locals);
      $this.a15_1 = null;
      if ($this.f15_1 ? !force : false) {
        $this.z14_1 = true;
        var anchor = $this.y14_1.q19($this.y14_1.p18($this.y14_1.b18_1));
        var reference = new MovableContentStateReference(content, parameter, $this.v13_1, $this.x14_1, anchor, emptyList(), currentCompositionLocalScope($this));
        $this.q13_1.m1b(reference);
      } else {
        var savedProvidersInvalid = $this.l14_1;
        $this.l14_1 = providersChanged;
        invokeComposable($this, ComposableLambda$invoke$ref(composableLambdaInstance(316014703, true, ComposerImpl$invokeMovableContentLambda$lambda(content, parameter))));
        $this.l14_1 = savedProvidersInvalid;
      }
    }finally {
      endGroup($this);
      $this.a15_1 = null;
      $this.g15_1 = savedCompoundKeyHash;
      $this.n1b();
    }
  }
  function insertMovableContentGuarded($this, references) {
    // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.withChangeList' call
    var this_0 = $this.c15_1;
    var newChangeList = $this.u13_1;
    var previousChangeList = this_0.h16_1;
    try {
      this_0.h16_1 = newChangeList;
      // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>' call
      $this.c15_1.o1b();
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = references.l() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = references.m(index);
          // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>' call
          var to = item.z6();
          var from = item.a7();
          var anchor = to.t1b_1;
          var location = to.s1b_1.w1b(anchor);
          var effectiveNodeIndex = new IntRef();
          $this.c15_1.x1b(effectiveNodeIndex, anchor);
          if (from == null) {
            var toSlotTable = to.s1b_1;
            if (equals(toSlotTable, $this.x14_1)) {
              createFreshInsertTable($this);
            }
            // Inline function 'androidx.compose.runtime.SlotTable.read' call
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
            var reader = to.s1b_1.u15();
            var tmp;
            try {
              reader.a1a(location);
              $this.c15_1.c1c(location);
              var offsetChanges = new ChangeList();
              recomposeMovableContent$default($this, VOID, VOID, VOID, VOID, ComposerImpl$insertMovableContentGuarded$lambda($this, offsetChanges, reader, to));
              $this.c15_1.d1c(offsetChanges, effectiveNodeIndex);
              tmp = Unit_instance;
            }finally {
              reader.g17();
            }
          } else {
            var resolvedState = $this.q13_1.y1b(from);
            var tmp1_elvis_lhs = resolvedState == null ? null : resolvedState.z1b_1;
            var fromTable = tmp1_elvis_lhs == null ? from.s1b_1 : tmp1_elvis_lhs;
            var tmp3_safe_receiver = resolvedState == null ? null : resolvedState.z1b_1;
            var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.q19(0);
            var fromAnchor = tmp4_elvis_lhs == null ? from.t1b_1 : tmp4_elvis_lhs;
            var nodesToInsert = collectNodesFrom(fromTable, fromAnchor);
            // Inline function 'kotlin.collections.isNotEmpty' call
            if (!nodesToInsert.s()) {
              $this.c15_1.a1c(nodesToInsert, effectiveNodeIndex);
              if (equals(to.s1b_1, $this.r13_1)) {
                var group = $this.r13_1.w1b(anchor);
                updateNodeCount($this, group, updatedNodeCount($this, group) + nodesToInsert.l() | 0);
              }
            }
            $this.c15_1.b1c(resolvedState, $this.q13_1, from, to);
            // Inline function 'androidx.compose.runtime.SlotTable.read' call
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
            var reader_0 = fromTable.u15();
            var tmp_0;
            try {
              $l$block: {
                // Inline function 'androidx.compose.runtime.ComposerImpl.withReader' call
                var savedReader = $this.w14_1;
                var savedCountOverrides = $this.c14_1;
                var savedProviderUpdates = $this.k14_1;
                $this.c14_1 = null;
                $this.k14_1 = null;
                try {
                  $this.w14_1 = reader_0;
                  var newLocation = fromTable.w1b(fromAnchor);
                  reader_0.a1a(newLocation);
                  $this.c15_1.c1c(newLocation);
                  var offsetChanges_0 = new ChangeList();
                  // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.withChangeList' call
                  var this_1 = $this.c15_1;
                  var previousChangeList_0 = this_1.h16_1;
                  try {
                    this_1.h16_1 = offsetChanges_0;
                    // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.withoutImplicitRootStart' call
                    var this_2 = $this.c15_1;
                    var previousImplicitRootStart = this_2.k16_1;
                    try {
                      this_2.k16_1 = false;
                      // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                      var tmp_1 = reader_0.a17_1;
                      var tmp_2 = from.u1b_1;
                      recomposeMovableContent($this, from.r1b_1, to.r1b_1, tmp_1, tmp_2, ComposerImpl$insertMovableContentGuarded$lambda_0($this, to));
                    }finally {
                      this_2.k16_1 = previousImplicitRootStart;
                    }
                  }finally {
                    this_1.h16_1 = previousChangeList_0;
                  }
                  $this.c15_1.d1c(offsetChanges_0, effectiveNodeIndex);
                  break $l$block;
                }finally {
                  $this.w14_1 = savedReader;
                  $this.c14_1 = savedCountOverrides;
                  $this.k14_1 = savedProviderUpdates;
                }
              }
              tmp_0 = Unit_instance;
            }finally {
              reader_0.g17();
            }
          }
          $this.c15_1.e1c();
        }
         while (inductionVariable <= last);
      $this.c15_1.f1c();
      $this.c15_1.c1c(0);
    }finally {
      this_0.h16_1 = previousChangeList;
    }
  }
  function recomposeMovableContent($this, from, to, index, invalidations, block) {
    var savedIsComposing = $this.u14_1;
    var savedNodeIndex = $this.y13_1;
    try {
      $this.u14_1 = true;
      $this.y13_1 = 0;
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = invalidations.l() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = invalidations.m(index_0);
          // Inline function 'androidx.compose.runtime.ComposerImpl.recomposeMovableContent.<anonymous>' call
          var scope = item.z6();
          var instances = item.a7();
          if (!(instances == null)) {
            // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
            // Inline function 'kotlin.contracts.contract' call
            var values = instances.i1c_1;
            var inductionVariable_0 = 0;
            var last_0 = instances.h1c_1;
            if (inductionVariable_0 < last_0)
              do {
                var i = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.compose.runtime.ComposerImpl.recomposeMovableContent.<anonymous>.<anonymous>' call
                var tmp = values[i];
                var instance = !(tmp == null) ? tmp : THROW_CCE();
                $this.g1c(scope, instance);
              }
               while (inductionVariable_0 < last_0);
          } else {
            $this.g1c(scope, null);
          }
        }
         while (inductionVariable <= last);
      var tmp_0;
      if (from == null) {
        tmp_0 = null;
      } else {
        tmp_0 = from.j1c(to, index == null ? -1 : index, block);
      }
      var tmp2_elvis_lhs = tmp_0;
      return tmp2_elvis_lhs == null ? block() : tmp2_elvis_lhs;
    }finally {
      $this.u14_1 = savedIsComposing;
      $this.y13_1 = savedNodeIndex;
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
    if (!!$this.u14_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose.<anonymous>' call
      var message = 'Reentrant composition is not supported';
      composeRuntimeError(toString(message));
    }
    $l$block: {
      // Inline function 'androidx.compose.runtime.trace' call
      var sectionName = 'Compose:recompose';
      var token = Trace_instance.k1c(sectionName);
      try {
        $this.q14_1 = currentSnapshot().p1c();
        $this.k14_1 = null;
        // Inline function 'androidx.compose.runtime.collection.IdentityArrayMap.forEach' call
        var inductionVariable = 0;
        var last = invalidationsRequested.s1c_1;
        if (inductionVariable < last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose.<anonymous>.<anonymous>' call
            var tmp = invalidationsRequested.q1c_1[index];
            var scope = !(tmp == null) ? tmp : THROW_CCE();
            var tmp_0 = invalidationsRequested.r1c_1[index];
            var set = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
            var tmp0_safe_receiver = scope.i13_1;
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t1c_1;
            var tmp_1;
            if (tmp1_elvis_lhs == null) {
              return Unit_instance;
            } else {
              tmp_1 = tmp1_elvis_lhs;
            }
            var location = tmp_1;
            $this.h14_1.y(new Invalidation(scope, location, set));
          }
           while (inductionVariable < last);
        sortWith($this.h14_1, get_InvalidationLocationAscending());
        $this.y13_1 = 0;
        var complete = false;
        $this.u14_1 = true;
        var tmp_2;
        try {
          startRoot($this);
          var savedContent = $this.k18();
          if (!(savedContent === content) ? !(content == null) : false) {
            $this.l18((content == null ? true : !(content == null)) ? content : THROW_CCE());
          }
          // Inline function 'androidx.compose.runtime.observeDerivedStateRecalculations' call
          var observer = $this.s14_1;
          var observers = derivedStateObservers_0();
          try {
            observers.x1c(observer);
            // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose.<anonymous>.<anonymous>' call
            if (!(content == null)) {
              startGroup_0($this, 200, get_invocation());
              invokeComposable($this, content);
              endGroup($this);
            } else if ((($this.f14_1 ? true : $this.l14_1) ? !(savedContent == null) : false) ? !equals(savedContent, Companion_getInstance_0().z18_1) : false) {
              startGroup_0($this, 200, get_invocation());
              invokeComposable($this, (!(savedContent == null) ? typeof savedContent === 'function' : false) ? savedContent : THROW_CCE());
              endGroup($this);
            } else {
              $this.y1c();
            }
          }finally {
            // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
            var tmp$ret$1 = observers.w1c_1 - 1 | 0;
            observers.k1(tmp$ret$1);
          }
          endRoot($this);
          complete = true;
          tmp_2 = Unit_instance;
        }finally {
          $this.u14_1 = false;
          $this.h14_1.f1();
          if (!complete) {
            abortRoot($this);
          }
          createFreshInsertTable($this);
        }
        break $l$block;
      }finally {
        Trace_instance.z1c(token);
      }
    }
  }
  function _get_node__db0vwp(_this__u8e3s4, $this) {
    return _this__u8e3s4.a1d(_this__u8e3s4.c17_1);
  }
  function nodeAt(_this__u8e3s4, $this, index) {
    return _this__u8e3s4.a1d(index);
  }
  function validateNodeExpected($this) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!$this.g14_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.validateNodeExpected.<anonymous>' call
      var message = 'A call to createNode(), emitNode() or useNode() expected was not expected';
      composeRuntimeError(toString(message));
    }
    $this.g14_1 = false;
  }
  function validateNodeNotExpected($this) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!$this.g14_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.validateNodeNotExpected.<anonymous>' call
      var message = 'A call to createNode(), emitNode() or useNode() expected';
      composeRuntimeError(toString(message));
    }
  }
  function recordInsert($this, anchor) {
    if ($this.e15_1.s()) {
      $this.c15_1.c1d(anchor, $this.x14_1);
    } else {
      $this.c15_1.b1d(anchor, $this.x14_1, $this.e15_1);
      $this.e15_1 = new FixupList();
    }
  }
  function recordDelete($this) {
    reportFreeMovableContent($this, $this.w14_1.a17_1);
    $this.c15_1.d1d();
  }
  function reportFreeMovableContent($this, groupBeingRemoved) {
    reportFreeMovableContent$reportGroup($this, groupBeingRemoved, false, 0);
    $this.c15_1.l1a();
  }
  function reportAllMovableContent($this) {
    if ($this.r13_1.f1d()) {
      var changes = new ChangeList();
      $this.b15_1 = changes;
      // Inline function 'androidx.compose.runtime.SlotTable.read' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
      var reader = $this.r13_1.u15();
      var tmp;
      try {
        $this.w14_1 = reader;
        var this_0 = $this.c15_1;
        var previousChangeList = this_0.h16_1;
        var tmp_0;
        try {
          this_0.h16_1 = changes;
          reportFreeMovableContent($this, 0);
          $this.c15_1.e1d();
          tmp_0 = Unit_instance;
        }finally {
          this_0.h16_1 = previousChangeList;
        }
        tmp = tmp_0;
      }finally {
        reader.g17();
      }
    }
  }
  function finalizeCompose($this) {
    $this.c15_1.g1d();
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!$this.w13_1.s()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.finalizeCompose.<anonymous>' call
      var message = 'Start/end imbalance';
      composeRuntimeError(toString(message));
    }
    cleanUpCompose($this);
  }
  function cleanUpCompose($this) {
    $this.x13_1 = null;
    $this.y13_1 = 0;
    $this.a14_1 = 0;
    $this.g15_1 = 0;
    $this.g14_1 = false;
    $this.c15_1.h1d();
    $this.t14_1.f1();
    clearUpdatedNodeCounts($this);
  }
  function CompositionContextHolder() {
  }
  function updateCompoundKeyWhenWeEnterGroup($this, groupKey, dataKey, data) {
    if (dataKey == null)
      if ((!(data == null) ? groupKey === 207 : false) ? !equals(data, Companion_getInstance_0().z18_1) : false) {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, hashCode(data));
      } else {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, groupKey);
      }
     else {
      if (dataKey instanceof Enum) {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, dataKey.ta_1);
      } else {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, hashCode(dataKey));
      }
    }
  }
  function updateCompoundKeyWhenWeEnterGroupKeyHash($this, keyHash) {
    var tmp = $this;
    // Inline function 'androidx.compose.runtime.rol' call
    var this_0 = $this.g15_1;
    tmp.g15_1 = rotateLeft(this_0, 3) ^ keyHash;
  }
  function updateCompoundKeyWhenWeExitGroup($this, groupKey, dataKey, data) {
    if (dataKey == null)
      if ((!(data == null) ? groupKey === 207 : false) ? !equals(data, Companion_getInstance_0().z18_1) : false) {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, hashCode(data));
      } else {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, groupKey);
      }
     else {
      if (dataKey instanceof Enum) {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, dataKey.ta_1);
      } else {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, hashCode(dataKey));
      }
    }
  }
  function updateCompoundKeyWhenWeExitGroupKeyHash($this, groupKey) {
    var tmp = $this;
    // Inline function 'androidx.compose.runtime.ror' call
    var this_0 = $this.g15_1 ^ groupKey;
    tmp.g15_1 = rotateRight(this_0, 3);
  }
  function reportFreeMovableContent$reportGroup(this$0, group, needsNodeDelete, nodeIndex) {
    var reader = this$0.w14_1;
    var tmp;
    if (reader.y1d(group)) {
      var key = reader.o18(group);
      var objectKey = reader.n18(group);
      var tmp_0;
      var tmp_1;
      if (key === get_movableContentKey()) {
        tmp_1 = objectKey instanceof MovableContent;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var movableContent = objectKey instanceof MovableContent ? objectKey : THROW_CCE();
        var parameter = reader.j1d(group, 0);
        var anchor = reader.q19(group);
        var end = group + reader.h1a(group) | 0;
        // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
        var this_0 = filterToRange(this$0.h14_1, group, end);
        // Inline function 'kotlin.contracts.contract' call
        var target = ArrayList_init_$Create$_0(this_0.l());
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = this_0.l() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = this_0.m(index);
            // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
            // Inline function 'kotlin.collections.plusAssign' call
            // Inline function 'androidx.compose.runtime.ComposerImpl.reportFreeMovableContent.reportGroup.<anonymous>' call
            var element = to(item.c13_1, item.e13_1);
            target.y(element);
          }
           while (inductionVariable <= last);
        var invalidations = target;
        var reference = new MovableContentStateReference(movableContent, parameter, this$0.v13_1, this$0.r13_1, anchor, invalidations, currentCompositionLocalScope_0(this$0, group));
        this$0.q13_1.u1d(reference);
        this$0.c15_1.v1d();
        this$0.c15_1.w1d(this$0.v13_1, this$0.q13_1, reference);
        var tmp_2;
        if (needsNodeDelete) {
          this$0.c15_1.x1d(nodeIndex, group);
          tmp_2 = 0;
        } else {
          tmp_2 = reader.c1b(group);
        }
        tmp_0 = tmp_2;
      } else {
        if (key === 206 ? equals(objectKey, get_reference()) : false) {
          var tmp_3 = reader.j1d(group, 0);
          var contextHolder = tmp_3 instanceof CompositionContextHolder ? tmp_3 : null;
          if (!(contextHolder == null)) {
            var compositionContext = contextHolder.k1d_1;
            // Inline function 'kotlin.collections.forEach' call
            var tmp0_iterator = compositionContext.q1d_1.n();
            while (tmp0_iterator.b1()) {
              var element_0 = tmp0_iterator.d1();
              // Inline function 'androidx.compose.runtime.ComposerImpl.reportFreeMovableContent.reportGroup.<anonymous>' call
              reportAllMovableContent(element_0);
              this$0.q13_1.t1d(element_0.v13_1);
            }
          }
          tmp_0 = reader.c1b(group);
        } else {
          if (reader.b1b(group)) {
            tmp_0 = 1;
          } else {
            tmp_0 = reader.c1b(group);
          }
        }
      }
      tmp = tmp_0;
    } else if (reader.i1d(group)) {
      var size = reader.h1a(group);
      var end_0 = group + size | 0;
      var current = group + 1 | 0;
      var runningNodeCount = 0;
      while (current < end_0) {
        var isNode = reader.b1b(current);
        if (isNode) {
          this$0.c15_1.l1a();
          this$0.c15_1.d1b(reader.a1d(current));
        }
        runningNodeCount = runningNodeCount + reportFreeMovableContent$reportGroup(this$0, current, isNode ? true : needsNodeDelete, isNode ? 0 : nodeIndex + runningNodeCount | 0) | 0;
        if (isNode) {
          this$0.c15_1.l1a();
          this$0.c15_1.o1a();
        }
        current = current + reader.h1a(current) | 0;
      }
      tmp = reader.b1b(group) ? 1 : runningNodeCount;
    } else if (reader.b1b(group)) {
      tmp = 1;
    } else {
      tmp = reader.c1b(group);
    }
    return tmp;
  }
  function ComposerImpl$derivedStateObserver$1(this$0) {
    this.z1d_1 = this$0;
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.a1e(p0, p1);
    };
  }
  function ComposerImpl$invokeMovableContentLambda$lambda($content, $parameter) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C3005@114008L18:Composer.kt#9igjgp');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.c1e()) {
        if (isTraceInProgress()) {
          traceEventStart(316014703, $changed, -1, 'androidx.compose.runtime.ComposerImpl.invokeMovableContentLambda.<anonymous> (Composer.kt:3005)');
        }
        $content.b1e_1($parameter, $composer_0, 8);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.t18();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda(this$0, $offsetChanges, $reader, $to) {
    return function () {
      var this_0 = this$0.c15_1;
      var newChangeList = $offsetChanges;
      var previousChangeList = this_0.h16_1;
      var tmp;
      try {
        this_0.h16_1 = newChangeList;
        $l$block: {
          // Inline function 'androidx.compose.runtime.ComposerImpl.withReader' call
          var this_1 = this$0;
          var reader = $reader;
          var savedReader = this_1.w14_1;
          var savedCountOverrides = this_1.c14_1;
          var savedProviderUpdates = this_1.k14_1;
          this_1.c14_1 = null;
          this_1.k14_1 = null;
          try {
            this_1.w14_1 = reader;
            var this_2 = this$0.c15_1;
            var previousImplicitRootStart = this_2.k16_1;
            var tmp_0;
            try {
              this_2.k16_1 = false;
              invokeMovableContentLambda(this$0, $to.p1b_1, $to.v1b_1, $to.q1b_1, true);
              tmp_0 = Unit_instance;
            }finally {
              this_2.k16_1 = previousImplicitRootStart;
            }
            break $l$block;
          }finally {
            this_1.w14_1 = savedReader;
            this_1.c14_1 = savedCountOverrides;
            this_1.k14_1 = savedProviderUpdates;
          }
        }
        tmp = tmp_0;
      }finally {
        this_0.h16_1 = previousChangeList;
      }
      return Unit_instance;
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_0(this$0, $to) {
    return function () {
      invokeMovableContentLambda(this$0, $to.p1b_1, $to.v1b_1, $to.q1b_1, true);
      return Unit_instance;
    };
  }
  function ComposerImpl(applier, parentContext, slotTable, abandonSet, changes, lateChanges, composition) {
    this.p13_1 = applier;
    this.q13_1 = parentContext;
    this.r13_1 = slotTable;
    this.s13_1 = abandonSet;
    this.t13_1 = changes;
    this.u13_1 = lateChanges;
    this.v13_1 = composition;
    this.w13_1 = new Stack();
    this.x13_1 = null;
    this.y13_1 = 0;
    this.z13_1 = new IntStack();
    this.a14_1 = 0;
    this.b14_1 = new IntStack();
    this.c14_1 = null;
    this.d14_1 = null;
    this.e14_1 = false;
    this.f14_1 = false;
    this.g14_1 = false;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.h14_1 = ArrayList_init_$Create$();
    this.i14_1 = new IntStack();
    this.j14_1 = persistentCompositionLocalHashMapOf();
    this.k14_1 = null;
    this.l14_1 = false;
    this.m14_1 = new IntStack();
    this.n14_1 = false;
    this.o14_1 = -1;
    this.p14_1 = 0;
    this.q14_1 = 0;
    this.r14_1 = false;
    var tmp_0 = this;
    tmp_0.s14_1 = new ComposerImpl$derivedStateObserver$1(this);
    this.t14_1 = new Stack();
    this.u14_1 = false;
    this.v14_1 = false;
    var tmp_1 = this;
    // Inline function 'kotlin.also' call
    var this_0 = this.r13_1.u15();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.reader.<anonymous>' call
    this_0.g17();
    tmp_1.w14_1 = this_0;
    this.x14_1 = new SlotTable();
    var tmp_2 = this;
    // Inline function 'kotlin.also' call
    var this_1 = this.x14_1.s18();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.writer.<anonymous>' call
    this_1.g17();
    tmp_2.y14_1 = this_1;
    this.z14_1 = false;
    this.a15_1 = null;
    this.b15_1 = null;
    this.c15_1 = new ComposerChangeListWriter(this, this.t13_1);
    var tmp_3 = this;
    // Inline function 'androidx.compose.runtime.SlotTable.read' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
    var reader = this.x14_1.u15();
    var tmp_4;
    try {
      // Inline function 'androidx.compose.runtime.ComposerImpl.insertAnchor.<anonymous>' call
      tmp_4 = reader.q19(0);
    }finally {
      reader.g17();
    }
    tmp_3.d15_1 = tmp_4;
    this.e15_1 = new FixupList();
    this.f15_1 = false;
    this.g15_1 = 0;
    this.h15_1 = false;
    this.i15_1 = true;
    this.j15_1 = new IntStack();
  }
  protoOf(ComposerImpl).d1e = function () {
    return this.p13_1;
  };
  protoOf(ComposerImpl).e1e = function () {
    return this.p14_1 > 0;
  };
  protoOf(ComposerImpl).f1e = function () {
    return this.q13_1.g1e();
  };
  protoOf(ComposerImpl).h1e = function (key) {
    return start(this, key, null, Companion_getInstance_1().g18_1, null);
  };
  protoOf(ComposerImpl).i1e = function () {
    return endGroup(this);
  };
  protoOf(ComposerImpl).j1e = function () {
    return start(this, -127, null, Companion_getInstance_1().g18_1, null);
  };
  protoOf(ComposerImpl).k1e = function () {
    endGroup(this);
    var scope = this.l1e();
    if (!(scope == null) ? scope.e1a() : false) {
      scope.m1e(true);
    }
  };
  protoOf(ComposerImpl).n1e = function () {
    var tmp;
    if (!this.c1e() ? true : this.l14_1) {
      tmp = true;
    } else {
      var tmp0_safe_receiver = this.l1e();
      tmp = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n1e()) === true;
    }
    return tmp;
  };
  protoOf(ComposerImpl).k1b = function (key, dataKey) {
    return start(this, key, dataKey, Companion_getInstance_1().g18_1, null);
  };
  protoOf(ComposerImpl).n1b = function () {
    return endGroup(this);
  };
  protoOf(ComposerImpl).o1e = function () {
    this.k14_1 = null;
  };
  protoOf(ComposerImpl).p1e = function () {
    return this.f15_1;
  };
  protoOf(ComposerImpl).c1e = function () {
    var tmp;
    var tmp_0;
    if ((!this.f15_1 ? !this.n14_1 : false) ? !this.l14_1 : false) {
      var tmp0_safe_receiver = this.l1e();
      tmp_0 = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.q1e()) === false;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !this.f14_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).x18 = function () {
    start(this, 125, null, Companion_getInstance_1().h18_1, null);
    this.g14_1 = true;
  };
  protoOf(ComposerImpl).r1e = function (factory) {
    validateNodeExpected(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!this.f15_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.createNode.<anonymous>' call
      var message = 'createNode() can only be called when inserting';
      composeRuntimeError(toString(message));
    }
    var insertIndex = this.z13_1.s1e();
    var groupAnchor = this.y14_1.q19(this.y14_1.b18_1);
    this.a14_1 = this.a14_1 + 1 | 0;
    this.e15_1.t1e(factory, insertIndex, groupAnchor);
  };
  protoOf(ComposerImpl).u1e = function () {
    validateNodeExpected(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.f15_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.useNode.<anonymous>' call
      var message = 'useNode() called while inserting';
      composeRuntimeError(toString(message));
    }
    var node = _get_node__db0vwp(this.w14_1, this);
    this.c15_1.d1b(node);
    var tmp;
    if (this.n14_1) {
      tmp = !(node == null) ? isInterface(node, ComposeNodeLifecycleCallback) : false;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.c15_1.v1e(node);
    }
  };
  protoOf(ComposerImpl).w1e = function () {
    return end(this, true);
  };
  protoOf(ComposerImpl).x1e = function (value, block) {
    if (this.f15_1) {
      this.e15_1.z1e(value, block);
    } else {
      this.c15_1.y1e(value, block);
    }
  };
  protoOf(ComposerImpl).k18 = function () {
    var tmp;
    if (this.f15_1) {
      validateNodeNotExpected(this);
      tmp = Companion_getInstance_0().z18_1;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.nextSlot.<anonymous>' call
      var it = this.w14_1.d1();
      var tmp_0;
      var tmp_1;
      if (this.n14_1) {
        tmp_1 = !(!(it == null) ? isInterface(it, ReusableRememberObserver) : false);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = Companion_getInstance_0().z18_1;
      } else {
        tmp_0 = it;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(ComposerImpl).a1f = function () {
    var tmp;
    if (this.f15_1) {
      validateNodeNotExpected(this);
      tmp = Companion_getInstance_0().z18_1;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.nextSlotForCache.<anonymous>' call
      var it = this.w14_1.d1();
      var tmp_0;
      var tmp_1;
      if (this.n14_1) {
        tmp_1 = !(!(it == null) ? isInterface(it, ReusableRememberObserver) : false);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = Companion_getInstance_0().z18_1;
      } else {
        if (it instanceof RememberObserverHolder) {
          tmp_0 = it.b1f_1;
        } else {
          tmp_0 = it;
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(ComposerImpl).a16 = function (value) {
    var tmp;
    if (!equals(this.k18(), value)) {
      this.l18(value);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).c1f = function (value) {
    var tmp;
    if (!(this.k18() === value)) {
      this.l18(value);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).d1f = function (value) {
    var next = this.k18();
    if (!(next == null) ? typeof next === 'boolean' : false) {
      var nextPrimitive = next;
      if (value === nextPrimitive)
        return false;
    }
    this.l18(value);
    return true;
  };
  protoOf(ComposerImpl).e1f = function (value) {
    var next = this.k18();
    if (!(next == null) ? typeof next === 'number' : false) {
      var nextPrimitive = next;
      if (value === nextPrimitive)
        return false;
    }
    this.l18(value);
    return true;
  };
  protoOf(ComposerImpl).l18 = function (value) {
    if (this.f15_1) {
      this.y14_1.h1f(value);
    } else {
      var groupSlotIndex = this.w14_1.f1f() - 1 | 0;
      this.c15_1.g1f(value, groupSlotIndex);
    }
  };
  protoOf(ComposerImpl).i1f = function (value) {
    var tmp;
    if (!(value == null) ? isInterface(value, RememberObserver) : false) {
      if (this.f15_1) {
        this.c15_1.j1f(value);
      }
      this.s13_1.y(value);
      tmp = new RememberObserverHolder(value);
    } else {
      tmp = value;
    }
    var toStore = tmp;
    this.l18(toStore);
  };
  protoOf(ComposerImpl).k1f = function (value) {
    var parentScope = currentCompositionLocalScope(this);
    startGroup_0(this, 201, get_provider());
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.startProvider.<anonymous>' call
    var it = this.l1f();
    var tmp;
    if (equals(it, Companion_getInstance_0().z18_1)) {
      tmp = null;
    } else {
      tmp = (!(it == null) ? isInterface(it, State_0) : false) ? it : THROW_CCE();
    }
    var oldState = tmp;
    var tmp_0 = value.m1f_1;
    var local = tmp_0 instanceof CompositionLocal ? tmp_0 : THROW_CCE();
    var state = local.q1f(value.n1f_1, oldState);
    var change = !equals(state, oldState);
    if (change) {
      this.r1f(state);
    }
    var providers;
    var invalid;
    if (this.f15_1) {
      providers = parentScope.s1f(local, state);
      invalid = false;
      this.z14_1 = true;
    } else {
      var tmp_1 = this.w14_1.m18(this.w14_1.a17_1);
      var oldScope = (!(tmp_1 == null) ? isInterface(tmp_1, PersistentCompositionLocalMap) : false) ? tmp_1 : THROW_CCE();
      providers = ((!this.c1e() ? true : change) ? value.o1f_1 ? true : !contains_0(parentScope, local) : false) ? parentScope.s1f(local, state) : oldScope;
      invalid = this.n14_1 ? true : !(oldScope === providers);
    }
    if (invalid ? !this.f15_1 : false) {
      recordProviderUpdate(this, providers);
    }
    this.m14_1.z15(asInt(this.l14_1));
    this.l14_1 = invalid;
    this.a15_1 = providers;
    start(this, 202, get_compositionLocalMap(), Companion_getInstance_1().g18_1, providers);
  };
  protoOf(ComposerImpl).t1f = function () {
    endGroup(this);
    endGroup(this);
    this.l14_1 = asBool(this.m14_1.d1a());
    this.a15_1 = null;
  };
  protoOf(ComposerImpl).u1f = function (key) {
    return read(currentCompositionLocalScope(this), key);
  };
  protoOf(ComposerImpl).l1e = function () {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.<get-currentRecomposeScope>.<anonymous>' call
    var it = this.t14_1;
    return (this.p14_1 === 0 ? it.v1f() : false) ? it.s1e() : null;
  };
  protoOf(ComposerImpl).g1c = function (scope, instance) {
    var tmp0_elvis_lhs = scope.i13_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var anchor = tmp;
    var slotTable = this.w14_1.t16_1;
    var location = anchor.w1f(slotTable);
    if (this.u14_1 ? location >= this.w14_1.a17_1 : false) {
      insertIfMissing(this.h14_1, location, scope, instance);
      return true;
    }
    return false;
  };
  protoOf(ComposerImpl).y1c = function () {
    if (this.h14_1.s()) {
      skipGroup(this);
    } else {
      var reader = this.w14_1;
      var key = reader.l19();
      var dataKey = reader.n19();
      var aux = reader.v18();
      updateCompoundKeyWhenWeEnterGroup(this, key, dataKey, aux);
      startReaderGroup(this, reader.x1f(), null);
      recomposeToGroupEnd(this);
      reader.q1a();
      updateCompoundKeyWhenWeExitGroup(this, key, dataKey, aux);
    }
  };
  protoOf(ComposerImpl).t18 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.a14_1 === 0)) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.skipToGroupEnd.<anonymous>' call
      var message = 'No nodes can be emitted before calling skipAndEndGroup';
      composeRuntimeError(toString(message));
    }
    var tmp0_safe_receiver = this.l1e();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y1f();
    }
    if (this.h14_1.s()) {
      skipReaderToGroupEnd(this);
    } else {
      recomposeToGroupEnd(this);
    }
  };
  protoOf(ComposerImpl).z1f = function (key) {
    start(this, key, null, Companion_getInstance_1().g18_1, null);
    addRecomposeScope(this);
    return this;
  };
  protoOf(ComposerImpl).a1g = function () {
    var scope = this.t14_1.v1f() ? this.t14_1.d1a() : null;
    if (scope != null) {
      scope.i1b(false);
    }
    var tmp2_safe_receiver = scope == null ? null : scope.b1g(this.q14_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.c15_1.c1g(tmp2_safe_receiver, this.v13_1);
    }
    var tmp;
    if ((!(scope == null) ? !scope.e1g() : false) ? scope.e1a() ? true : this.e14_1 : false) {
      if (scope.i13_1 == null) {
        var tmp_0 = scope;
        var tmp_1;
        if (this.f15_1) {
          tmp_1 = this.y14_1.q19(this.y14_1.b18_1);
        } else {
          tmp_1 = this.w14_1.q19(this.w14_1.c17_1);
        }
        tmp_0.i13_1 = tmp_1;
      }
      scope.d1g(false);
      tmp = scope;
    } else {
      tmp = null;
    }
    var result = tmp;
    end(this, false);
    return result;
  };
  protoOf(ComposerImpl).f1g = function (references) {
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
  protoOf(ComposerImpl).g1g = function (sourceInformation) {
    if (this.f15_1 ? this.r14_1 : false) {
      this.y14_1.h1g(sourceInformation);
    }
  };
  protoOf(ComposerImpl).i1g = function (key, sourceInformation) {
    if (this.f15_1 ? this.r14_1 : false) {
      this.y14_1.j1g(key, sourceInformation);
    }
  };
  protoOf(ComposerImpl).k1g = function () {
    if (this.f15_1 ? this.r14_1 : false) {
      this.y14_1.l1g();
    }
  };
  protoOf(ComposerImpl).m1g = function (invalidationsRequested, content) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!this.t13_1.s()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.composeContent.<anonymous>' call
      var message = 'Expected applyChanges() to have been called';
      composeRuntimeError(toString(message));
    }
    doCompose(this, invalidationsRequested, content);
  };
  protoOf(ComposerImpl).o1g = function (block) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.u14_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.prepareCompose.<anonymous>' call
      var message = 'Preparing a composition while composing is not supported';
      composeRuntimeError(toString(message));
    }
    this.u14_1 = true;
    try {
      block();
    }finally {
      this.u14_1 = false;
    }
  };
  protoOf(ComposerImpl).p1g = function (invalidationsRequested) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!this.t13_1.s()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.recompose.<anonymous>' call
      var message = 'Expected applyChanges() to have been called';
      composeRuntimeError(toString(message));
    }
    var tmp;
    var tmp_0;
    if (invalidationsRequested.v1f()) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp_0 = !this.h14_1.s();
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = this.f14_1;
    }
    if (tmp) {
      doCompose(this, invalidationsRequested, null);
      return this.t13_1.v1f();
    }
    return false;
  };
  protoOf(ComposerImpl).q1g = function () {
    return this.l1e();
  };
  protoOf(ComposerImpl).l1f = function () {
    return this.a1f();
  };
  protoOf(ComposerImpl).r1f = function (value) {
    return this.i1f(value);
  };
  protoOf(ComposerImpl).r1g = function (scope) {
    var tmp0_safe_receiver = scope instanceof RecomposeScopeImpl ? scope : null;
    if (tmp0_safe_receiver != null) {
      tmp0_safe_receiver.s1g(true);
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
    tmp.z18_1 = new Composer$Companion$Empty$1();
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
    var tmp0_iterator = _this__u8e3s4.t1g();
    while (tmp0_iterator.b1()) {
      var slot = tmp0_iterator.d1();
      if (!(slot == null) ? isInterface(slot, ComposeNodeLifecycleCallback) : false) {
        rememberManager.u1g(slot);
      }
      if (slot instanceof RememberObserverHolder) {
        rememberManager.v1g(slot.b1f_1);
      }
      if (slot instanceof RecomposeScopeImpl) {
        slot.vp();
      }
    }
    _this__u8e3s4.w1g();
  }
  function MovableContentStateReference(content, parameter, composition, slotTable, anchor, invalidations, locals) {
    this.p1b_1 = content;
    this.q1b_1 = parameter;
    this.r1b_1 = composition;
    this.s1b_1 = slotTable;
    this.t1b_1 = anchor;
    this.u1b_1 = invalidations;
    this.v1b_1 = locals;
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
    this.z1b_1 = slotTable;
  }
  function sourceInformation(composer, sourceInformation) {
    _init_properties_Composer_kt__bmp4g0();
    composer.g1g(sourceInformation);
  }
  function isTraceInProgress() {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.isTraceInProgress.<anonymous>' call
    var it = get_compositionTracer();
    return !(it == null) ? it.x1g() : false;
  }
  function traceEventStart(key, dirty1, dirty2, info) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = get_compositionTracer();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y1g(key, dirty1, dirty2, info);
    }
  }
  function traceEventEnd() {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = get_compositionTracer();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1g();
    }
  }
  function MovableContent() {
  }
  function ComposeRuntimeError(message) {
    IllegalStateException_init_$Init$(this);
    captureStack(this, ComposeRuntimeError);
    this.a1h_1 = message;
  }
  protoOf(ComposeRuntimeError).v6 = function () {
    return this.a1h_1;
  };
  function RememberObserverHolder(wrapped) {
    this.b1f_1 = wrapped;
  }
  function Pending$keyMap$delegate$lambda(this$0) {
    return function () {
      // Inline function 'kotlin.also' call
      var this_0 = multiMap();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Pending.keyMap$delegate.<anonymous>.<anonymous>' call
      var inductionVariable = 0;
      var last = this$0.d19_1.l();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var keyInfo = this$0.d19_1.m(index);
          put(this_0, get_joinedKey(keyInfo), keyInfo);
        }
         while (inductionVariable < last);
      return this_0;
    };
  }
  function Pending(keyInfos, startIndex) {
    this.d19_1 = keyInfos;
    this.e19_1 = startIndex;
    this.f19_1 = 0;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.e19_1 >= 0)) {
      // Inline function 'androidx.compose.runtime.Pending.<anonymous>' call
      var message = 'Invalid start index';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.g19_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Pending.groupInfos.<anonymous>' call
    var runningNodeIndex = 0;
    // Inline function 'kotlin.collections.hashMapOf' call
    var result = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = this.d19_1.l();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var keyInfo = this.d19_1.m(index);
        // Inline function 'kotlin.collections.set' call
        var key = keyInfo.t19_1;
        var value = new GroupInfo(index, runningNodeIndex, keyInfo.u19_1);
        result.l2(key, value);
        runningNodeIndex = runningNodeIndex + keyInfo.u19_1 | 0;
      }
       while (inductionVariable < last);
    tmp_0.h19_1 = result;
    var tmp_1 = this;
    tmp_1.i19_1 = lazy(Pending$keyMap$delegate$lambda(this));
  }
  protoOf(Pending).b1h = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.i19_1;
    keyMap$factory();
    return this_0.o2();
  };
  protoOf(Pending).o19 = function (key, dataKey) {
    var joinedKey = !(dataKey == null) ? new JoinedKey(key, dataKey) : key;
    return pop(this.b1h(), joinedKey);
  };
  protoOf(Pending).k19 = function (keyInfo) {
    return this.g19_1.y(keyInfo);
  };
  protoOf(Pending).e1a = function () {
    return this.g19_1;
  };
  protoOf(Pending).y19 = function (from, to) {
    if (from > to) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = this.h19_1.j2().n();
      while (tmp0_iterator.b1()) {
        var element = tmp0_iterator.d1();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveSlot.<anonymous>' call
        var position = element.c1h_1;
        if (position === from)
          element.c1h_1 = to;
        else if (to <= position ? position < from : false)
          element.c1h_1 = position + 1 | 0;
      }
    } else if (to > from) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = this.h19_1.j2().n();
      while (tmp0_iterator_0.b1()) {
        var element_0 = tmp0_iterator_0.d1();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveSlot.<anonymous>' call
        var position_0 = element_0.c1h_1;
        if (position_0 === from)
          element_0.c1h_1 = to;
        else if ((from + 1 | 0) <= position_0 ? position_0 < to : false)
          element_0.c1h_1 = position_0 - 1 | 0;
      }
    }
  };
  protoOf(Pending).k1a = function (from, to, count) {
    if (from > to) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = this.h19_1.j2().n();
      while (tmp0_iterator.b1()) {
        var element = tmp0_iterator.d1();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveNode.<anonymous>' call
        var position = element.d1h_1;
        if (from <= position ? position < (from + count | 0) : false)
          element.d1h_1 = to + (position - from | 0) | 0;
        else if (to <= position ? position < from : false)
          element.d1h_1 = position + count | 0;
      }
    } else if (to > from) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = this.h19_1.j2().n();
      while (tmp0_iterator_0.b1()) {
        var element_0 = tmp0_iterator_0.d1();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveNode.<anonymous>' call
        var position_0 = element_0.d1h_1;
        if (from <= position_0 ? position_0 < (from + count | 0) : false)
          element_0.d1h_1 = to + (position_0 - from | 0) | 0;
        else if ((from + 1 | 0) <= position_0 ? position_0 < to : false)
          element_0.d1h_1 = position_0 - count | 0;
      }
    }
  };
  protoOf(Pending).j19 = function (keyInfo, insertIndex) {
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.h19_1;
    var key = keyInfo.t19_1;
    var value = new GroupInfo(-1, insertIndex, 0);
    this_0.l2(key, value);
  };
  protoOf(Pending).g1a = function (group, newCount) {
    var groupInfo = this.h19_1.u2(group);
    if (!(groupInfo == null)) {
      var index = groupInfo.d1h_1;
      var difference = newCount - groupInfo.e1h_1 | 0;
      groupInfo.e1h_1 = newCount;
      if (!(difference === 0)) {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = this.h19_1.j2().n();
        while (tmp0_iterator.b1()) {
          var element = tmp0_iterator.d1();
          // Inline function 'androidx.compose.runtime.Pending.updateNodeCount.<anonymous>' call
          if (element.d1h_1 >= index ? !equals(element, groupInfo) : false) {
            var newIndex = element.d1h_1 + difference | 0;
            if (newIndex >= 0)
              element.d1h_1 = newIndex;
          }
        }
      }
      return true;
    }
    return false;
  };
  protoOf(Pending).x19 = function (keyInfo) {
    var tmp0_safe_receiver = this.h19_1.u2(keyInfo.t19_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c1h_1;
    return tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
  };
  protoOf(Pending).w19 = function (keyInfo) {
    var tmp0_safe_receiver = this.h19_1.u2(keyInfo.t19_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.d1h_1;
    return tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
  };
  protoOf(Pending).i1a = function (keyInfo) {
    var tmp0_safe_receiver = this.h19_1.u2(keyInfo.t19_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e1h_1;
    return tmp1_elvis_lhs == null ? keyInfo.u19_1 : tmp1_elvis_lhs;
  };
  function _GroupKind___init__impl__iwqg06(value) {
    return value;
  }
  function _GroupKind___get_value__impl__cf5pqe($this) {
    return $this;
  }
  function Companion_0() {
    Companion_instance_1 = this;
    this.g18_1 = _GroupKind___init__impl__iwqg06(0);
    this.h18_1 = _GroupKind___init__impl__iwqg06(1);
    this.i18_1 = _GroupKind___init__impl__iwqg06(2);
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
    this.m1f_1 = compositionLocal;
    this.n1f_1 = value;
    this.o1f_1 = canOverride;
  }
  function asBool(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return !(_this__u8e3s4 === 0);
  }
  function removeRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findInsertLocation(_this__u8e3s4, start);
    $l$loop: while (index < _this__u8e3s4.l()) {
      var validation = _this__u8e3s4.m(index);
      if (validation.d13_1 < end) {
        _this__u8e3s4.k1(index);
      } else
        break $l$loop;
    }
  }
  function firstInRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findInsertLocation(_this__u8e3s4, start);
    if (index < _this__u8e3s4.l()) {
      var firstInvalidation = _this__u8e3s4.m(index);
      if (firstInvalidation.d13_1 < end)
        return firstInvalidation;
    }
    return null;
  }
  function removeLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findLocation(_this__u8e3s4, location);
    return index >= 0 ? _this__u8e3s4.k1(index) : null;
  }
  function nearestCommonRootOf(_this__u8e3s4, a, b, common) {
    _init_properties_Composer_kt__bmp4g0();
    if (a === b)
      return a;
    if (a === common ? true : b === common)
      return common;
    if (_this__u8e3s4.p18(a) === b)
      return b;
    if (_this__u8e3s4.p18(b) === a)
      return a;
    if (_this__u8e3s4.p18(a) === _this__u8e3s4.p18(b))
      return _this__u8e3s4.p18(a);
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
        currentA = _this__u8e3s4.p18(currentA);
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
        currentB = _this__u8e3s4.p18(currentB);
      }
       while (inductionVariable_0 < times_0);
    while (!(currentA === currentB)) {
      currentA = _this__u8e3s4.p18(currentA);
      currentB = _this__u8e3s4.p18(currentB);
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
        this_0.f1h(instance);
        tmp_0 = this_0;
      }
      _this__u8e3s4.w1(tmp, new Invalidation(scope, location, tmp_0));
    } else {
      if (instance == null) {
        _this__u8e3s4.m(index).e13_1 = null;
      } else {
        var tmp1_safe_receiver = _this__u8e3s4.m(index).e13_1;
        if (tmp1_safe_receiver == null)
          null;
        else
          tmp1_safe_receiver.f1h(instance);
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
    var reader = _this__u8e3s4.u15();
    var tmp;
    try {
      var index = _this__u8e3s4.w1b(anchor);
      collectNodesFrom$_anonymous_$collectFromGroup_lmwduz(reader, result, index);
      tmp = Unit_instance;
    }finally {
      reader.g17();
    }
    return result;
  }
  function filterToRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    var index = findInsertLocation(_this__u8e3s4, start);
    $l$loop: while (index < _this__u8e3s4.l()) {
      var invalidation = _this__u8e3s4.m(index);
      if (invalidation.d13_1 < end) {
        result.y(invalidation);
      } else
        break $l$loop;
      index = index + 1 | 0;
    }
    return result;
  }
  function GroupInfo(slotIndex, nodeIndex, nodeCount) {
    this.c1h_1 = slotIndex;
    this.d1h_1 = nodeIndex;
    this.e1h_1 = nodeCount;
  }
  function put(_this__u8e3s4, key, value) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.getOrPut' call
    var value_0 = _this__u8e3s4.u2(key);
    var tmp;
    if (value_0 == null) {
      // Inline function 'androidx.compose.runtime.put.<anonymous>' call
      var answer = LinkedHashSet_init_$Create$();
      _this__u8e3s4.l2(key, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    return tmp.y(value);
  }
  function get_joinedKey(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return !(_this__u8e3s4.s19_1 == null) ? new JoinedKey(_this__u8e3s4.r19_1, _this__u8e3s4.s19_1) : _this__u8e3s4.r19_1;
  }
  function multiMap() {
    _init_properties_Composer_kt__bmp4g0();
    return HashMap_init_$Create$();
  }
  function pop(_this__u8e3s4, key) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = _this__u8e3s4.u2(key);
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
    var high = _this__u8e3s4.l() - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4.m(mid);
      var cmp = compareTo(midVal.d13_1, location);
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
      current = _this__u8e3s4.p18(current);
      count = count + 1 | 0;
    }
    return count;
  }
  function remove(_this__u8e3s4, key, value) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = _this__u8e3s4.u2(key);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.z(value);
      var tmp_0;
      if (tmp0_safe_receiver.s()) {
        _this__u8e3s4.m2(key);
        tmp_0 = Unit_instance;
      }
      tmp = Unit_instance;
    }
    return tmp;
  }
  function sourceInformationMarkerStart(composer, key, sourceInformation) {
    _init_properties_Composer_kt__bmp4g0();
    composer.i1g(key, sourceInformation);
  }
  function sourceInformationMarkerEnd(composer) {
    _init_properties_Composer_kt__bmp4g0();
    composer.k1g();
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
    if ($this$with.p1e() ? true : !equals($this$with.l1f(), value)) {
      $this$with.r1f(value);
      _Updater___get_composer__impl__9ty7av($this).x1e(value, block);
      tmp = Unit_instance;
    }
    return tmp;
  }
  function _SkippableUpdater___init__impl__4ft0t9(composer) {
    return composer;
  }
  function _SkippableUpdater___get_composer__impl__6t7yne($this) {
    return $this;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.g1h_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).ja = function (a, b) {
    return this.g1h_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.ja(a, b);
  };
  function collectNodesFrom$_anonymous_$collectFromGroup_lmwduz($reader, result, group) {
    if ($reader.b1b(group)) {
      result.y($reader.a1d(group));
    } else {
      var current = group + 1 | 0;
      var end = group + $reader.h1a(group) | 0;
      while (current < end) {
        collectNodesFrom$_anonymous_$collectFromGroup_lmwduz($reader, result, current);
        current = current + $reader.h1a(current) | 0;
      }
    }
  }
  function InvalidationLocationAscending$lambda(i1, i2) {
    _init_properties_Composer_kt__bmp4g0();
    return compareTo(i1.d13_1, i2.d13_1);
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
      return receiver.b1h();
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
    return $this.y1h_1.e1e();
  }
  function composeInitial($this, content) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.b1i_1) {
      // Inline function 'androidx.compose.runtime.CompositionImpl.composeInitial.<anonymous>' call
      var message = 'The composition is disposed';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    $this.c1i_1 = content;
    $this.h1h_1.d1i($this, $this.c1i_1);
  }
  function drainPendingModificationsForCompositionLocked($this) {
    var toRecord = $this.j1h_1.f1i(get_PendingApplyNoModifications());
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
            composeRuntimeError('corrupt pendingModifications drain: ' + $this.j1h_1);
          }
        }
      }
    }
  }
  function drainPendingModificationsLocked($this) {
    var toRecord = $this.j1h_1.f1i(null);
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
            composeRuntimeError('corrupt pendingModifications drain: ' + $this.j1h_1);
          }
        }
      }
    }
  }
  function addPendingInvalidationsLocked(_this__u8e3s4, $this, value, forgetConditionalScopes) {
    var set = _this__u8e3s4;
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
    var value_0 = $this.n1h_1.g1i_1.u2(value);
    if (value_0 != null) {
      if (value_0 instanceof MutableScatterSet) {
        // Inline function 'androidx.collection.ScatterSet.forEach' call
        var this_0 = value_0 instanceof MutableScatterSet ? value_0 : THROW_CCE();
        // Inline function 'kotlin.contracts.contract' call
        var k = this_0.l11_1;
        $l$block: {
          // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
          // Inline function 'kotlin.contracts.contract' call
          var m = this_0.k11_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              if (!this_1.oc(this_1.kc().lc(7)).oc(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.oc(new Long(255, 0)).xa(new Long(128, 0)) < 0) {
                      var index = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                      // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
                      var tmp = k[index];
                      var scope = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                      if (!$this.s1h_1.j1i(value, scope) ? !scope.i1i(value).equals(InvalidationResult_IGNORED_getInstance()) : false) {
                        if (scope.h1i() ? !forgetConditionalScopes : false) {
                          $this.o1h_1.y(scope);
                        } else {
                          if (set == null)
                            set = HashSet_init_$Create$();
                          var tmp0_safe_receiver = set;
                          if (tmp0_safe_receiver == null)
                            null;
                          else
                            tmp0_safe_receiver.y(scope);
                        }
                      }
                    }
                    slot = slot.mc(8);
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
        if (!$this.s1h_1.j1i(value, scope_0) ? !scope_0.i1i(value).equals(InvalidationResult_IGNORED_getInstance()) : false) {
          if (scope_0.h1i() ? !forgetConditionalScopes : false) {
            $this.o1h_1.y(scope_0);
          } else {
            if (set == null)
              set = HashSet_init_$Create$();
            var tmp0_safe_receiver_0 = set;
            if (tmp0_safe_receiver_0 == null)
              null;
            else
              tmp0_safe_receiver_0.y(scope_0);
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
      var values_0 = values.i1c_1;
      var inductionVariable = 0;
      var last = values.h1c_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
          var tmp = values_0[i];
          var value = !(tmp == null) ? tmp : THROW_CCE();
          if (value instanceof RecomposeScopeImpl) {
            value.i1i(null);
          } else {
            invalidated._v = addPendingInvalidationsLocked(invalidated._v, $this, value, forgetConditionalScopes);
            // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
            var value_0 = $this.p1h_1.g1i_1.u2(value);
            if (value_0 != null) {
              if (value_0 instanceof MutableScatterSet) {
                // Inline function 'androidx.collection.ScatterSet.forEach' call
                var this_0 = value_0 instanceof MutableScatterSet ? value_0 : THROW_CCE();
                // Inline function 'kotlin.contracts.contract' call
                var k = this_0.l11_1;
                $l$block: {
                  // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                  // Inline function 'kotlin.contracts.contract' call
                  var m = this_0.k11_1;
                  var lastIndex = m.length - 2 | 0;
                  var inductionVariable_0 = 0;
                  if (inductionVariable_0 <= lastIndex)
                    do {
                      var i_0 = inductionVariable_0;
                      inductionVariable_0 = inductionVariable_0 + 1 | 0;
                      var slot = m[i_0];
                      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                      var this_1 = slot;
                      if (!this_1.oc(this_1.kc().lc(7)).oc(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                        var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
                        var inductionVariable_1 = 0;
                        if (inductionVariable_1 < bitCount)
                          do {
                            var j = inductionVariable_1;
                            inductionVariable_1 = inductionVariable_1 + 1 | 0;
                            // Inline function 'androidx.collection.isFull' call
                            if (slot.oc(new Long(255, 0)).xa(new Long(128, 0)) < 0) {
                              var index = (i_0 << 3) + j | 0;
                              // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                              // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                              var tmp_0 = k[index];
                              var it = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                              invalidated._v = addPendingInvalidationsLocked(invalidated._v, $this, it, forgetConditionalScopes);
                            }
                            slot = slot.mc(8);
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
      var tmp0_iterator = values.n();
      while (tmp0_iterator.b1()) {
        var element = tmp0_iterator.d1();
        // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
        if (element instanceof RecomposeScopeImpl) {
          element.i1i(null);
        } else {
          invalidated._v = addPendingInvalidationsLocked(invalidated._v, $this, element, forgetConditionalScopes);
          // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
          var value_1 = $this.p1h_1.g1i_1.u2(element);
          if (value_1 != null) {
            if (value_1 instanceof MutableScatterSet) {
              // Inline function 'androidx.collection.ScatterSet.forEach' call
              var this_2 = value_1 instanceof MutableScatterSet ? value_1 : THROW_CCE();
              // Inline function 'kotlin.contracts.contract' call
              var k_0 = this_2.l11_1;
              $l$block_0: {
                // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                // Inline function 'kotlin.contracts.contract' call
                var m_0 = this_2.k11_1;
                var lastIndex_0 = m_0.length - 2 | 0;
                var inductionVariable_2 = 0;
                if (inductionVariable_2 <= lastIndex_0)
                  do {
                    var i_1 = inductionVariable_2;
                    inductionVariable_2 = inductionVariable_2 + 1 | 0;
                    var slot_0 = m_0[i_1];
                    // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                    var this_3 = slot_0;
                    if (!this_3.oc(this_3.kc().lc(7)).oc(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                      var bitCount_0 = 8 - (~(i_1 - lastIndex_0 | 0) >>> 31 | 0) | 0;
                      var inductionVariable_3 = 0;
                      if (inductionVariable_3 < bitCount_0)
                        do {
                          var j_0 = inductionVariable_3;
                          inductionVariable_3 = inductionVariable_3 + 1 | 0;
                          // Inline function 'androidx.collection.isFull' call
                          if (slot_0.oc(new Long(255, 0)).xa(new Long(128, 0)) < 0) {
                            var index_0 = (i_1 << 3) + j_0 | 0;
                            // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                            // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                            var tmp_1 = k_0[index_0];
                            var it_1 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                            invalidated._v = addPendingInvalidationsLocked(invalidated._v, $this, it_1, forgetConditionalScopes);
                          }
                          slot_0 = slot_0.mc(8);
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
      tmp_2 = !$this.o1h_1.s();
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf' call
      // Inline function 'androidx.collection.MutableScatterMap.removeIf' call
      var this_4 = $this.n1h_1.g1i_1;
      $l$block_2: {
        // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
        var m_1 = this_4.w10_1;
        var lastIndex_1 = m_1.length - 2 | 0;
        var inductionVariable_4 = 0;
        if (inductionVariable_4 <= lastIndex_1)
          do {
            var i_2 = inductionVariable_4;
            inductionVariable_4 = inductionVariable_4 + 1 | 0;
            var slot_1 = m_1[i_2];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_5 = slot_1;
            if (!this_5.oc(this_5.kc().lc(7)).oc(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
              var bitCount_1 = 8 - (~(i_2 - lastIndex_1 | 0) >>> 31 | 0) | 0;
              var inductionVariable_5 = 0;
              if (inductionVariable_5 < bitCount_1)
                do {
                  var j_1 = inductionVariable_5;
                  inductionVariable_5 = inductionVariable_5 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot_1.oc(new Long(255, 0)).xa(new Long(128, 0)) < 0) {
                    var index_1 = (i_2 << 3) + j_1 | 0;
                    // Inline function 'androidx.collection.MutableScatterMap.removeIf.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf.<anonymous>' call
                    var tmp_3 = this_4.x10_1[index_1];
                    (tmp_3 == null ? true : !(tmp_3 == null)) || THROW_CCE();
                    var tmp_4 = this_4.y10_1[index_1];
                    var value_2 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
                    var tmp_5;
                    if (value_2 instanceof MutableScatterSet) {
                      var set = value_2 instanceof MutableScatterSet ? value_2 : THROW_CCE();
                      // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
                      var elements = set.l11_1;
                      $l$block_1: {
                        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                        // Inline function 'kotlin.contracts.contract' call
                        var m_2 = set.k11_1;
                        var lastIndex_2 = m_2.length - 2 | 0;
                        var inductionVariable_6 = 0;
                        if (inductionVariable_6 <= lastIndex_2)
                          do {
                            var i_3 = inductionVariable_6;
                            inductionVariable_6 = inductionVariable_6 + 1 | 0;
                            var slot_2 = m_2[i_3];
                            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                            var this_6 = slot_2;
                            if (!this_6.oc(this_6.kc().lc(7)).oc(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                              var bitCount_2 = 8 - (~(i_3 - lastIndex_2 | 0) >>> 31 | 0) | 0;
                              var inductionVariable_7 = 0;
                              if (inductionVariable_7 < bitCount_2)
                                do {
                                  var j_2 = inductionVariable_7;
                                  inductionVariable_7 = inductionVariable_7 + 1 | 0;
                                  // Inline function 'androidx.collection.isFull' call
                                  if (slot_2.oc(new Long(255, 0)).xa(new Long(128, 0)) < 0) {
                                    var index_2 = (i_3 << 3) + j_2 | 0;
                                    // Inline function 'androidx.collection.MutableScatterSet.removeIf.<anonymous>' call
                                    // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
                                    var tmp_6 = elements[index_2];
                                    var scope = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
                                    var tmp_7;
                                    if ($this.o1h_1.q(scope)) {
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
                                        tmp_8 = tmp0_safe_receiver.q(scope);
                                      }
                                      tmp_7 = tmp_8 === true;
                                    }
                                    if (tmp_7) {
                                      set.w11(index_2);
                                    }
                                  }
                                  slot_2 = slot_2.mc(8);
                                }
                                 while (inductionVariable_7 < bitCount_2);
                              if (!(bitCount_2 === 8)) {
                                break $l$block_1;
                              }
                            }
                          }
                           while (!(i_3 === lastIndex_2));
                      }
                      tmp_5 = set.s();
                    } else {
                      // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
                      var scope_0 = !(value_2 == null) ? value_2 : THROW_CCE();
                      var tmp_9;
                      if ($this.o1h_1.q(scope_0)) {
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
                          tmp_10 = tmp0_safe_receiver_0.q(scope_0);
                        }
                        tmp_9 = tmp_10 === true;
                      }
                      tmp_5 = tmp_9;
                    }
                    if (tmp_5) {
                      this_4.j11(index_1);
                    }
                  }
                  slot_1 = slot_1.mc(8);
                }
                 while (inductionVariable_5 < bitCount_1);
              if (!(bitCount_1 === 8)) {
                break $l$block_2;
              }
            }
          }
           while (!(i_2 === lastIndex_1));
      }
      $this.o1h_1.f1();
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
        var this_7 = $this.n1h_1.g1i_1;
        $l$block_4: {
          // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
          var m_3 = this_7.w10_1;
          var lastIndex_3 = m_3.length - 2 | 0;
          var inductionVariable_8 = 0;
          if (inductionVariable_8 <= lastIndex_3)
            do {
              var i_4 = inductionVariable_8;
              inductionVariable_8 = inductionVariable_8 + 1 | 0;
              var slot_3 = m_3[i_4];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_8 = slot_3;
              if (!this_8.oc(this_8.kc().lc(7)).oc(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                var bitCount_3 = 8 - (~(i_4 - lastIndex_3 | 0) >>> 31 | 0) | 0;
                var inductionVariable_9 = 0;
                if (inductionVariable_9 < bitCount_3)
                  do {
                    var j_3 = inductionVariable_9;
                    inductionVariable_9 = inductionVariable_9 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot_3.oc(new Long(255, 0)).xa(new Long(128, 0)) < 0) {
                      var index_3 = (i_4 << 3) + j_3 | 0;
                      // Inline function 'androidx.collection.MutableScatterMap.removeIf.<anonymous>' call
                      // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf.<anonymous>' call
                      var tmp_11 = this_7.x10_1[index_3];
                      (tmp_11 == null ? true : !(tmp_11 == null)) || THROW_CCE();
                      var tmp_12 = this_7.y10_1[index_3];
                      var value_3 = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
                      var tmp_13;
                      if (value_3 instanceof MutableScatterSet) {
                        var set_0 = value_3 instanceof MutableScatterSet ? value_3 : THROW_CCE();
                        // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
                        var elements_0 = set_0.l11_1;
                        $l$block_3: {
                          // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                          // Inline function 'kotlin.contracts.contract' call
                          var m_4 = set_0.k11_1;
                          var lastIndex_4 = m_4.length - 2 | 0;
                          var inductionVariable_10 = 0;
                          if (inductionVariable_10 <= lastIndex_4)
                            do {
                              var i_5 = inductionVariable_10;
                              inductionVariable_10 = inductionVariable_10 + 1 | 0;
                              var slot_4 = m_4[i_5];
                              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                              var this_9 = slot_4;
                              if (!this_9.oc(this_9.kc().lc(7)).oc(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                                var bitCount_4 = 8 - (~(i_5 - lastIndex_4 | 0) >>> 31 | 0) | 0;
                                var inductionVariable_11 = 0;
                                if (inductionVariable_11 < bitCount_4)
                                  do {
                                    var j_4 = inductionVariable_11;
                                    inductionVariable_11 = inductionVariable_11 + 1 | 0;
                                    // Inline function 'androidx.collection.isFull' call
                                    if (slot_4.oc(new Long(255, 0)).xa(new Long(128, 0)) < 0) {
                                      var index_4 = (i_5 << 3) + j_4 | 0;
                                      // Inline function 'androidx.collection.MutableScatterSet.removeIf.<anonymous>' call
                                      // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                                      var tmp_14 = elements_0[index_4];
                                      var scope_1 = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
                                      if (tmp0_safe_receiver_1.q(scope_1)) {
                                        set_0.w11(index_4);
                                      }
                                    }
                                    slot_4 = slot_4.mc(8);
                                  }
                                   while (inductionVariable_11 < bitCount_4);
                                if (!(bitCount_4 === 8)) {
                                  break $l$block_3;
                                }
                              }
                            }
                             while (!(i_5 === lastIndex_4));
                        }
                        tmp_13 = set_0.s();
                      } else {
                        // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                        var scope_2 = !(value_3 == null) ? value_3 : THROW_CCE();
                        tmp_13 = tmp0_safe_receiver_1.q(scope_2);
                      }
                      if (tmp_13) {
                        this_7.j11(index_3);
                      }
                    }
                    slot_3 = slot_3.mc(8);
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
    var this_0 = $this.p1h_1.g1i_1;
    $l$block_0: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this_0.w10_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_1 = slot;
          if (!this_1.oc(this_1.kc().lc(7)).oc(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.oc(new Long(255, 0)).xa(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.MutableScatterMap.removeIf.<anonymous>' call
                  // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf.<anonymous>' call
                  var tmp = this_0.x10_1[index];
                  (tmp == null ? true : !(tmp == null)) || THROW_CCE();
                  var tmp_0 = this_0.y10_1[index];
                  var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  var tmp_1;
                  if (value instanceof MutableScatterSet) {
                    var set = value instanceof MutableScatterSet ? value : THROW_CCE();
                    // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
                    var elements = set.l11_1;
                    $l$block: {
                      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                      // Inline function 'kotlin.contracts.contract' call
                      var m_0 = set.k11_1;
                      var lastIndex_0 = m_0.length - 2 | 0;
                      var inductionVariable_1 = 0;
                      if (inductionVariable_1 <= lastIndex_0)
                        do {
                          var i_0 = inductionVariable_1;
                          inductionVariable_1 = inductionVariable_1 + 1 | 0;
                          var slot_0 = m_0[i_0];
                          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                          var this_2 = slot_0;
                          if (!this_2.oc(this_2.kc().lc(7)).oc(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                            var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
                            var inductionVariable_2 = 0;
                            if (inductionVariable_2 < bitCount_0)
                              do {
                                var j_0 = inductionVariable_2;
                                inductionVariable_2 = inductionVariable_2 + 1 | 0;
                                // Inline function 'androidx.collection.isFull' call
                                if (slot_0.oc(new Long(255, 0)).xa(new Long(128, 0)) < 0) {
                                  var index_0 = (i_0 << 3) + j_0 | 0;
                                  // Inline function 'androidx.collection.MutableScatterSet.removeIf.<anonymous>' call
                                  // Inline function 'androidx.compose.runtime.CompositionImpl.cleanUpDerivedStateObservations.<anonymous>' call
                                  var tmp_2 = elements[index_0];
                                  var derivedState = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
                                  if (!$this.n1h_1.k1i(derivedState)) {
                                    set.w11(index_0);
                                  }
                                }
                                slot_0 = slot_0.mc(8);
                              }
                               while (inductionVariable_2 < bitCount_0);
                            if (!(bitCount_0 === 8)) {
                              break $l$block;
                            }
                          }
                        }
                         while (!(i_0 === lastIndex_0));
                    }
                    tmp_1 = set.s();
                  } else {
                    // Inline function 'androidx.compose.runtime.CompositionImpl.cleanUpDerivedStateObservations.<anonymous>' call
                    var derivedState_0 = !(value == null) ? value : THROW_CCE();
                    tmp_1 = !$this.n1h_1.k1i(derivedState_0);
                  }
                  if (tmp_1) {
                    this_0.j11(index);
                  }
                }
                slot = slot.mc(8);
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
    if (!$this.o1h_1.s()) {
      // Inline function 'androidx.compose.runtime.removeValueIf' call
      var iter = $this.o1h_1.n();
      while (iter.b1()) {
        // Inline function 'androidx.compose.runtime.CompositionImpl.cleanUpDerivedStateObservations.<anonymous>' call
        if (!iter.d1().h1i()) {
          iter.c1();
        }
      }
    }
  }
  function invalidateScopeOfLocked($this, value) {
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
    var value_0 = $this.n1h_1.g1i_1.u2(value);
    if (value_0 != null) {
      if (value_0 instanceof MutableScatterSet) {
        // Inline function 'androidx.collection.ScatterSet.forEach' call
        var this_0 = value_0 instanceof MutableScatterSet ? value_0 : THROW_CCE();
        // Inline function 'kotlin.contracts.contract' call
        var k = this_0.l11_1;
        $l$block: {
          // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
          // Inline function 'kotlin.contracts.contract' call
          var m = this_0.k11_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              if (!this_1.oc(this_1.kc().lc(7)).oc(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.oc(new Long(255, 0)).xa(new Long(128, 0)) < 0) {
                      var index = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateScopeOfLocked.<anonymous>' call
                      var tmp = k[index];
                      var scope = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                      if (scope.i1i(value).equals(InvalidationResult_IMMINENT_getInstance())) {
                        $this.s1h_1.l1i(value, scope);
                      }
                    }
                    slot = slot.mc(8);
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
        if (scope_0.i1i(value).equals(InvalidationResult_IMMINENT_getInstance())) {
          $this.s1h_1.l1i(value, scope_0);
        }
      }
    }
  }
  function applyChangesInLocked($this, changes) {
    var manager = new RememberEventDispatcher($this.l1h_1);
    try {
      if (changes.s())
        return Unit_instance;
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName = 'Compose:applyChanges';
        var token = Trace_instance.k1c(sectionName);
        try {
          $this.i1h_1.y11();
          // Inline function 'androidx.compose.runtime.SlotTable.write' call
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
          var writer = $this.m1h_1.s18();
          var tmp;
          try {
            changes.m1i($this.i1h_1, writer, manager);
            tmp = Unit_instance;
          }finally {
            writer.g17();
          }
          $this.i1h_1.z11();
          break $l$block;
        }finally {
          Trace_instance.z1c(token);
        }
      }
      manager.s1i();
      manager.t1i();
      if ($this.u1h_1) {
        $l$block_2: {
          // Inline function 'androidx.compose.runtime.trace' call
          var sectionName_0 = 'Compose:unobserve';
          var token_0 = Trace_instance.k1c(sectionName_0);
          try {
            $this.u1h_1 = false;
            // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf' call
            // Inline function 'androidx.collection.MutableScatterMap.removeIf' call
            var this_0 = $this.n1h_1.g1i_1;
            $l$block_1: {
              // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
              var m = this_0.w10_1;
              var lastIndex = m.length - 2 | 0;
              var inductionVariable = 0;
              if (inductionVariable <= lastIndex)
                do {
                  var i = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var slot = m[i];
                  // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                  var this_1 = slot;
                  if (!this_1.oc(this_1.kc().lc(7)).oc(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                    var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                    var inductionVariable_0 = 0;
                    if (inductionVariable_0 < bitCount)
                      do {
                        var j = inductionVariable_0;
                        inductionVariable_0 = inductionVariable_0 + 1 | 0;
                        // Inline function 'androidx.collection.isFull' call
                        if (slot.oc(new Long(255, 0)).xa(new Long(128, 0)) < 0) {
                          var index = (i << 3) + j | 0;
                          // Inline function 'androidx.collection.MutableScatterMap.removeIf.<anonymous>' call
                          // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf.<anonymous>' call
                          var tmp_0 = this_0.x10_1[index];
                          (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
                          var tmp_1 = this_0.y10_1[index];
                          var value = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                          var tmp_2;
                          if (value instanceof MutableScatterSet) {
                            var set = value instanceof MutableScatterSet ? value : THROW_CCE();
                            // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
                            var elements = set.l11_1;
                            $l$block_0: {
                              // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                              // Inline function 'kotlin.contracts.contract' call
                              var m_0 = set.k11_1;
                              var lastIndex_0 = m_0.length - 2 | 0;
                              var inductionVariable_1 = 0;
                              if (inductionVariable_1 <= lastIndex_0)
                                do {
                                  var i_0 = inductionVariable_1;
                                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                                  var slot_0 = m_0[i_0];
                                  // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                                  var this_2 = slot_0;
                                  if (!this_2.oc(this_2.kc().lc(7)).oc(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                                    var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
                                    var inductionVariable_2 = 0;
                                    if (inductionVariable_2 < bitCount_0)
                                      do {
                                        var j_0 = inductionVariable_2;
                                        inductionVariable_2 = inductionVariable_2 + 1 | 0;
                                        // Inline function 'androidx.collection.isFull' call
                                        if (slot_0.oc(new Long(255, 0)).xa(new Long(128, 0)) < 0) {
                                          var index_0 = (i_0 << 3) + j_0 | 0;
                                          // Inline function 'androidx.collection.MutableScatterSet.removeIf.<anonymous>' call
                                          // Inline function 'androidx.compose.runtime.CompositionImpl.applyChangesInLocked.<anonymous>.<anonymous>' call
                                          var tmp_3 = elements[index_0];
                                          if (!((tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE()).u1i()) {
                                            set.w11(index_0);
                                          }
                                        }
                                        slot_0 = slot_0.mc(8);
                                      }
                                       while (inductionVariable_2 < bitCount_0);
                                    if (!(bitCount_0 === 8)) {
                                      break $l$block_0;
                                    }
                                  }
                                }
                                 while (!(i_0 === lastIndex_0));
                            }
                            tmp_2 = set.s();
                          } else {
                            // Inline function 'androidx.compose.runtime.CompositionImpl.applyChangesInLocked.<anonymous>.<anonymous>' call
                            tmp_2 = !(!(value == null) ? value : THROW_CCE()).u1i();
                          }
                          if (tmp_2) {
                            this_0.j11(index);
                          }
                        }
                        slot = slot.mc(8);
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
            Trace_instance.z1c(token_0);
          }
        }
      }
    }finally {
      if ($this.r1h_1.s()) {
        manager.v1i();
      }
    }
  }
  function abandonChanges($this) {
    $this.j1h_1.w1i(null);
    $this.q1h_1.f1();
    $this.r1h_1.f1();
    $this.l1h_1.f1();
  }
  function tryImminentInvalidation($this, scope, instance) {
    return $this.x1i() ? $this.y1h_1.g1c(scope, instance) : false;
  }
  function invalidateChecked($this, scope, anchor, instance) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.k1h_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateChecked.<anonymous>' call
    var tmp0_safe_receiver = $this.v1h_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateChecked.<anonymous>.<anonymous>' call
      var tmp_0;
      if ($this.m1h_1.y1i($this.w1h_1, anchor)) {
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
        $this.t1h_1.z1i(scope, null);
      } else {
        addValue($this.t1h_1, scope, instance);
      }
    }
    var delegate_0 = delegate;
    if (!(delegate_0 == null)) {
      return invalidateChecked(delegate_0, scope, anchor, instance);
    }
    $this.h1h_1.a1j($this);
    return $this.x1i() ? InvalidationResult_DEFERRED_getInstance() : InvalidationResult_SCHEDULED_getInstance();
  }
  function takeInvalidations($this) {
    var invalidations = $this.t1h_1;
    $this.t1h_1 = new IdentityArrayMap();
    return invalidations;
  }
  function observer($this) {
    var holder = $this.x1h_1;
    var tmp;
    if (holder.d1j_1) {
      tmp = holder.c1j_1;
    } else {
      var parentHolder = $this.h1h_1.b1j();
      var parentObserver = parentHolder == null ? null : parentHolder.c1j_1;
      if (!equals(parentObserver, holder.c1j_1)) {
        holder.c1j_1 = parentObserver;
      }
      tmp = parentObserver;
    }
    return tmp;
  }
  function RememberEventDispatcher(abandoning) {
    this.n1i_1 = abandoning;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.o1i_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.p1i_1 = ArrayList_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.q1i_1 = ArrayList_init_$Create$();
    this.r1i_1 = null;
  }
  protoOf(RememberEventDispatcher).e1j = function (instance) {
    this.o1i_1.y(instance);
  };
  protoOf(RememberEventDispatcher).v1g = function (instance) {
    this.p1i_1.y(instance);
  };
  protoOf(RememberEventDispatcher).u1g = function (instance) {
    var tmp0_elvis_lhs = this.r1i_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = mutableScatterSetOf();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RememberEventDispatcher.releasing.<anonymous>' call
      this.r1i_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var releasing = tmp;
    releasing.v11(instance);
    // Inline function 'kotlin.collections.plusAssign' call
    this.p1i_1.y(instance);
  };
  protoOf(RememberEventDispatcher).s1i = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.p1i_1.s()) {
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName = 'Compose:onForgotten';
        var token = Trace_instance.k1c(sectionName);
        try {
          var releasing = this.r1i_1;
          var inductionVariable = this.p1i_1.l() - 1 | 0;
          var tmp;
          if (0 <= inductionVariable) {
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              var instance = this.p1i_1.m(i);
              // Inline function 'kotlin.collections.remove' call
              var this_0 = this.n1i_1;
              (isInterface(this_0, MutableCollection) ? this_0 : THROW_CCE()).z(instance);
              if (isInterface(instance, RememberObserver)) {
                instance.f1j();
              }
              if (isInterface(instance, ComposeNodeLifecycleCallback)) {
                if (!(releasing == null) ? releasing.q(instance) : false) {
                  instance.b13();
                } else {
                  instance.a13();
                }
              }
            }
             while (0 <= inductionVariable);
            tmp = Unit_instance;
          }
          break $l$block;
        }finally {
          Trace_instance.z1c(token);
        }
      }
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.o1i_1.s()) {
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName_0 = 'Compose:onRemembered';
        var token_0 = Trace_instance.k1c(sectionName_0);
        try {
          var this_1 = this.o1i_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable_0 = 0;
          var last = this_1.l() - 1 | 0;
          var tmp_0;
          if (inductionVariable_0 <= last) {
            do {
              var index = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              var item = this_1.m(index);
              // Inline function 'androidx.compose.runtime.RememberEventDispatcher.dispatchRememberObservers.<anonymous>.<anonymous>' call
              this.n1i_1.z(item);
              item.g1j();
            }
             while (inductionVariable_0 <= last);
            tmp_0 = Unit_instance;
          }
          break $l$block_0;
        }finally {
          Trace_instance.z1c(token_0);
        }
      }
    }
  };
  protoOf(RememberEventDispatcher).t1i = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.q1i_1.s()) {
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName = 'Compose:sideeffects';
        var token = Trace_instance.k1c(sectionName);
        try {
          // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
          var this_0 = this.q1i_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable = 0;
          var last = this_0.l() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item = this_0.m(index);
              // Inline function 'androidx.compose.runtime.RememberEventDispatcher.dispatchSideEffects.<anonymous>.<anonymous>' call
              item();
            }
             while (inductionVariable <= last);
          this.q1i_1.f1();
          break $l$block;
        }finally {
          Trace_instance.z1c(token);
        }
      }
    }
  };
  protoOf(RememberEventDispatcher).v1i = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.n1i_1.s()) {
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName = 'Compose:abandons';
        var token = Trace_instance.k1c(sectionName);
        try {
          var iterator = this.n1i_1.n();
          while (iterator.b1()) {
            var instance = iterator.d1();
            iterator.c1();
            instance.h1j();
          }
          break $l$block;
        }finally {
          Trace_instance.z1c(token);
        }
      }
    }
  };
  function CompositionImpl(parent, applier, recomposeContext) {
    recomposeContext = recomposeContext === VOID ? null : recomposeContext;
    this.h1h_1 = parent;
    this.i1h_1 = applier;
    this.j1h_1 = new AtomicReference(null);
    this.k1h_1 = createSynchronizedObject();
    this.l1h_1 = HashSet_init_$Create$();
    this.m1h_1 = new SlotTable();
    this.n1h_1 = new ScopeMap();
    this.o1h_1 = HashSet_init_$Create$();
    this.p1h_1 = new ScopeMap();
    this.q1h_1 = new ChangeList();
    this.r1h_1 = new ChangeList();
    this.s1h_1 = new ScopeMap();
    this.t1h_1 = new IdentityArrayMap();
    this.u1h_1 = false;
    this.v1h_1 = null;
    this.w1h_1 = 0;
    this.x1h_1 = new CompositionObserverHolder();
    var tmp = this;
    // Inline function 'kotlin.also' call
    var this_0 = new ComposerImpl(this.i1h_1, this.h1h_1, this.m1h_1, this.l1h_1, this.q1h_1, this.r1h_1, this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.CompositionImpl.composer.<anonymous>' call
    this.h1h_1.i1j(this_0);
    tmp.y1h_1 = this_0;
    this.z1h_1 = recomposeContext;
    var tmp_0 = this;
    var tmp_1 = this.h1h_1;
    tmp_0.a1i_1 = tmp_1 instanceof Recomposer;
    this.b1i_1 = false;
    this.c1i_1 = ComposableSingletons$CompositionKt_getInstance().j1j_1;
  }
  protoOf(CompositionImpl).x1i = function () {
    return this.y1h_1.u14_1;
  };
  protoOf(CompositionImpl).l1j = function () {
    return this.b1i_1;
  };
  protoOf(CompositionImpl).m1j = function (content) {
    composeInitial(this, content);
  };
  protoOf(CompositionImpl).n1j = function (content) {
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
        this.k1h_1;
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
            var tmp_2 = invalidations.o1j();
            observer_0.p1j(this, isInterface(tmp_2, Map) ? tmp_2 : THROW_CCE());
          }
          this.y1h_1.m1g(invalidations, content);
          var tmp_3;
          if (observer_0 == null) {
            tmp_3 = null;
          } else {
            observer_0.q1j(this);
            tmp_3 = Unit_instance;
          }
          tmp_1 = tmp_3;
        } catch ($p) {
          var tmp_4;
          if ($p instanceof Exception) {
            var e = $p;
            this.t1h_1 = invalidations;
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
          tmp_5 = !this.l1h_1.s();
        } else {
          tmp_5 = false;
        }
        if (tmp_5) {
          (new RememberEventDispatcher(this.l1h_1)).v1i();
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
  protoOf(CompositionImpl).r1j = function (values) {
    $l$loop: while (true) {
      var old = this.j1h_1.lq();
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
            var message = 'corrupt pendingModifications: ' + this.j1h_1;
            throw IllegalStateException_init_$Create$(toString(message));
          }
        }
      }
      var new_0 = tmp;
      if (this.j1h_1.s1j(old, new_0)) {
        if (old == null) {
          // Inline function 'androidx.compose.runtime.synchronized' call
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          this.k1h_1;
          drainPendingModificationsLocked(this);
        }
        break $l$loop;
      }
    }
  };
  protoOf(CompositionImpl).t1j = function (values) {
    if (values instanceof IdentityArraySet) {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values_0 = values.i1c_1;
      var inductionVariable = 0;
      var last = values.h1c_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.CompositionImpl.observesAnyOf.<anonymous>' call
          var tmp = values_0[i];
          var value = !(tmp == null) ? tmp : THROW_CCE();
          if (this.n1h_1.k1i(value) ? true : this.p1h_1.k1i(value))
            return true;
        }
         while (inductionVariable < last);
      return false;
    }
    var tmp0_iterator = values.n();
    while (tmp0_iterator.b1()) {
      var value_0 = tmp0_iterator.d1();
      if (this.n1h_1.k1i(value_0) ? true : this.p1h_1.k1i(value_0))
        return true;
    }
    return false;
  };
  protoOf(CompositionImpl).o1g = function (block) {
    return this.y1h_1.o1g(block);
  };
  protoOf(CompositionImpl).u1j = function (value) {
    if (!_get_areChildrenComposing__c1uwup(this)) {
      var tmp0_safe_receiver = this.y1h_1.l1e();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_safe_receiver.s1g(true);
        var alreadyRead = tmp0_safe_receiver.v1j(value);
        var tmp;
        if (!alreadyRead) {
          if (value instanceof StateObjectImpl) {
            // Inline function 'androidx.compose.runtime.snapshots.Companion.Composition' call
            var tmp$ret$0 = _ReaderKind___init__impl__jqeebu(1);
            value.x1j(tmp$ret$0);
          }
          this.n1h_1.l1i(value, tmp0_safe_receiver);
          var tmp_0;
          if (isInterface(value, DerivedState)) {
            this.p1h_1.y1j(value);
            var this_0 = value.z1j().a1k();
            var k = this_0.j10_1;
            var tmp$ret$4;
            $l$block: {
              // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
              var m = this_0.i10_1;
              var lastIndex = m.length - 2 | 0;
              var inductionVariable = 0;
              if (inductionVariable <= lastIndex)
                do {
                  var i = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var slot = m[i];
                  // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                  var this_1 = slot;
                  if (!this_1.oc(this_1.kc().lc(7)).oc(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                    var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                    var inductionVariable_0 = 0;
                    if (inductionVariable_0 < bitCount)
                      do {
                        var j = inductionVariable_0;
                        inductionVariable_0 = inductionVariable_0 + 1 | 0;
                        // Inline function 'androidx.collection.isFull' call
                        if (slot.oc(new Long(255, 0)).xa(new Long(128, 0)) < 0) {
                          var index = (i << 3) + j | 0;
                          // Inline function 'androidx.collection.ObjectIntMap.forEachKey.<anonymous>' call
                          // Inline function 'androidx.compose.runtime.CompositionImpl.recordReadOf.<anonymous>.<anonymous>' call
                          var tmp_1 = k[index];
                          var dependency = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                          if (dependency instanceof StateObjectImpl) {
                            // Inline function 'androidx.compose.runtime.snapshots.Companion.Composition' call
                            var tmp$ret$3 = _ReaderKind___init__impl__jqeebu(1);
                            dependency.x1j(tmp$ret$3);
                          }
                          this.p1h_1.l1i(dependency, value);
                        }
                        slot = slot.mc(8);
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
  protoOf(CompositionImpl).b1k = function (value) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.k1h_1;
    invalidateScopeOfLocked(this, value);
    var value_0 = this.p1h_1.g1i_1.u2(value);
    var tmp;
    if (value_0 == null) {
      tmp = Unit_instance;
    } else {
      if (value_0 instanceof MutableScatterSet) {
        var this_0 = value_0 instanceof MutableScatterSet ? value_0 : THROW_CCE();
        // Inline function 'kotlin.contracts.contract' call
        var k = this_0.l11_1;
        var tmp$ret$2;
        $l$block: {
          // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
          // Inline function 'kotlin.contracts.contract' call
          var m = this_0.k11_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              if (!this_1.oc(this_1.kc().lc(7)).oc(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.oc(new Long(255, 0)).xa(new Long(128, 0)) < 0) {
                      var index = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                      // Inline function 'androidx.compose.runtime.CompositionImpl.recordWriteOf.<anonymous>.<anonymous>' call
                      var tmp_0 = k[index];
                      var it = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                      invalidateScopeOfLocked(this, it);
                    }
                    slot = slot.mc(8);
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
  protoOf(CompositionImpl).c1k = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.k1h_1;
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
            var tmp_2 = invalidations.o1j();
            observer_0.p1j(this, isInterface(tmp_2, Map) ? tmp_2 : THROW_CCE());
          }
          // Inline function 'kotlin.also' call
          var this_0 = this.y1h_1.p1g(invalidations);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          if (!this_0) {
            drainPendingModificationsLocked(this);
          }
          if (observer_0 == null)
            null;
          else {
            observer_0.q1j(this);
          }
          tmp_1 = this_0;
        } catch ($p) {
          var tmp_3;
          if ($p instanceof Exception) {
            var e = $p;
            this.t1h_1 = invalidations;
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
          tmp_4 = !this.l1h_1.s();
        } else {
          tmp_4 = false;
        }
        if (tmp_4) {
          (new RememberEventDispatcher(this.l1h_1)).v1i();
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
  protoOf(CompositionImpl).d1k = function (references) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.runtime.snapshots.fastAll' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = references.l() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = references.m(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastAll.<anonymous>' call
          // Inline function 'androidx.compose.runtime.CompositionImpl.insertMovableContent.<anonymous>' call
          if (!equals(item.x6_1.r1b_1, this)) {
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
        this.y1h_1.f1g(references);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_instance;
      }finally {
        var tmp_1;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_1 = !this.l1h_1.s();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.l1h_1)).v1i();
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
  protoOf(CompositionImpl).e1k = function (state) {
    var manager = new RememberEventDispatcher(this.l1h_1);
    var slotTable = state.z1b_1;
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = slotTable.s18();
    var tmp;
    try {
      removeCurrentGroup(writer, manager);
      tmp = Unit_instance;
    }finally {
      writer.g17();
    }
    manager.s1i();
  };
  protoOf(CompositionImpl).f1k = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.k1h_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        applyChangesInLocked(this, this.q1h_1);
        drainPendingModificationsLocked(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_instance;
      }finally {
        var tmp_1;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_1 = !this.l1h_1.s();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.l1h_1)).v1i();
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
  protoOf(CompositionImpl).g1k = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.k1h_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.applyLateChanges.<anonymous>.<anonymous>' call
        if (this.r1h_1.v1f()) {
          applyChangesInLocked(this, this.r1h_1);
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_instance;
      }finally {
        var tmp_1;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_1 = !this.l1h_1.s();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.l1h_1)).v1i();
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
  protoOf(CompositionImpl).o1e = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.k1h_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.changesApplied.<anonymous>.<anonymous>' call
        this.y1h_1.o1e();
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!this.l1h_1.s()) {
          (new RememberEventDispatcher(this.l1h_1)).v1i();
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_instance;
      }finally {
        var tmp_1;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_1 = !this.l1h_1.s();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.l1h_1)).v1i();
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
  protoOf(CompositionImpl).h1k = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.k1h_1;
    var indexedObject = this.m1h_1.m15_1;
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
        tmp0_safe_receiver.i1k();
      }
    }
  };
  protoOf(CompositionImpl).j1c = function (to, groupIndex, block) {
    var tmp;
    if ((!(to == null) ? !equals(to, this) : false) ? groupIndex >= 0 : false) {
      var tmp_0 = this;
      tmp_0.v1h_1 = to instanceof CompositionImpl ? to : THROW_CCE();
      this.w1h_1 = groupIndex;
      var tmp_1;
      try {
        tmp_1 = block();
      }finally {
        this.v1h_1 = null;
        this.w1h_1 = 0;
      }
      tmp = tmp_1;
    } else {
      tmp = block();
    }
    return tmp;
  };
  protoOf(CompositionImpl).j1k = function (scope, instance) {
    if (scope.k1k()) {
      scope.d1g(true);
    }
    var anchor = scope.i13_1;
    if (anchor == null ? true : !anchor.u1i())
      return InvalidationResult_IGNORED_getInstance();
    if (!this.m1h_1.l1k(anchor)) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this.k1h_1;
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidate.<anonymous>' call
      var delegate = this.v1h_1;
      if ((delegate == null ? null : tryImminentInvalidation(delegate, scope, instance)) === true)
        return InvalidationResult_IMMINENT_getInstance();
      return InvalidationResult_IGNORED_getInstance();
    }
    if (!scope.m1k())
      return InvalidationResult_IGNORED_getInstance();
    return invalidateChecked(this, scope, anchor, instance);
  };
  protoOf(CompositionImpl).n1k = function (scope) {
    this.u1h_1 = true;
  };
  protoOf(CompositionImpl).o1k = function (instance, scope) {
    this.n1h_1.j1i(instance, scope);
  };
  protoOf(CompositionImpl).p1k = function (state) {
    if (!this.n1h_1.k1i(state)) {
      this.p1h_1.y1j(state);
    }
  };
  function CompositionObserverHolder(observer, root) {
    observer = observer === VOID ? null : observer;
    root = root === VOID ? false : root;
    this.c1j_1 = observer;
    this.d1j_1 = root;
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.a1e(p0, p1);
    };
  }
  function ComposableSingletons$CompositionKt$lambda_1$lambda_xm0u9s($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Composition.kt#9igjgp');
    if (!(($changed & 11) === 2) ? true : !$composer_0.c1e()) {
      if (isTraceInProgress()) {
        traceEventStart(954879418, $changed, -1, 'androidx.compose.runtime.ComposableSingletons$CompositionKt.lambda-1.<anonymous> (Composition.kt:607)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.t18();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.a1e(p0, p1);
    };
  }
  function ComposableSingletons$CompositionKt$lambda_2$lambda_8lgqn5($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Composition.kt#9igjgp');
    if (!(($changed & 11) === 2) ? true : !$composer_0.c1e()) {
      if (isTraceInProgress()) {
        traceEventStart(1918065384, $changed, -1, 'androidx.compose.runtime.ComposableSingletons$CompositionKt.lambda-2.<anonymous> (Composition.kt:739)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.t18();
    }
    return Unit_instance;
  }
  function ComposableSingletons$CompositionKt() {
    ComposableSingletons$CompositionKt_instance = this;
    var tmp = this;
    tmp.j1j_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(954879418, false, ComposableSingletons$CompositionKt$lambda_1$lambda_xm0u9s));
    var tmp_0 = this;
    tmp_0.k1j_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(1918065384, false, ComposableSingletons$CompositionKt$lambda_2$lambda_8lgqn5));
  }
  var ComposableSingletons$CompositionKt_instance;
  function ComposableSingletons$CompositionKt_getInstance() {
    if (ComposableSingletons$CompositionKt_instance == null)
      new ComposableSingletons$CompositionKt();
    return ComposableSingletons$CompositionKt_instance;
  }
  function addValue(_this__u8e3s4, key, value) {
    _init_properties_Composition_kt__t5pjw8();
    if (_this__u8e3s4.r1k(key)) {
      var tmp0_safe_receiver = _this__u8e3s4.q1k(key);
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.f1h(value);
    } else {
      // Inline function 'kotlin.also' call
      var this_0 = new IdentityArraySet();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.addValue.<anonymous>' call
      this_0.f1h(value);
      _this__u8e3s4.z1i(key, this_0);
    }
  }
  function ControlledComposition(applier, parent) {
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
  protoOf(CompositionContext).b1j = function () {
    return null;
  };
  protoOf(CompositionContext).d16 = function (table) {
  };
  protoOf(CompositionContext).i1j = function (composer) {
  };
  protoOf(CompositionContext).w15 = function () {
    return get_EmptyPersistentCompositionLocalMap();
  };
  protoOf(CompositionContext).v15 = function () {
  };
  protoOf(CompositionContext).f16 = function () {
  };
  protoOf(CompositionContext).y1b = function (reference) {
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
    this.p1f_1 = new LazyValueHolder(defaultFactory);
  }
  function ProvidableCompositionLocal(defaultFactory) {
    CompositionLocal.call(this, defaultFactory);
  }
  protoOf(ProvidableCompositionLocal).u1k = function (value) {
    return new ProvidedValue(this, value, true);
  };
  function staticCompositionLocalOf(defaultFactory) {
    return new StaticProvidableCompositionLocal(defaultFactory);
  }
  function StaticProvidableCompositionLocal(defaultFactory) {
    ProvidableCompositionLocal.call(this, defaultFactory);
  }
  protoOf(StaticProvidableCompositionLocal).q1f = function (value, previous) {
    return (!(previous == null) ? equals(previous.o2(), value) : false) ? previous : new StaticValueHolder(value);
  };
  function compositionLocalOf(policy, defaultFactory) {
    policy = policy === VOID ? structuralEqualityPolicy() : policy;
    return new DynamicProvidableCompositionLocal(policy, defaultFactory);
  }
  function CompositionLocalProvider(value, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z1f(-1350970552);
    sourceInformation($composer_0, 'C(CompositionLocalProvider)P(1)247@10835L9:CompositionLocal.kt#9igjgp');
    var $dirty = $changed;
    if (isTraceInProgress()) {
      traceEventStart(-1350970552, $dirty, -1, 'androidx.compose.runtime.CompositionLocalProvider (CompositionLocal.kt:245)');
    }
    $composer_0.k1f(value);
    content($composer_0, 14 & $dirty >> 3);
    $composer_0.t1f();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp0_safe_receiver = $composer_0.a1g();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.w1k(CompositionLocalProvider$lambda(value, content, $changed));
    }
  }
  function DynamicProvidableCompositionLocal(policy, defaultFactory) {
    ProvidableCompositionLocal.call(this, defaultFactory);
    this.y1k_1 = policy;
  }
  protoOf(DynamicProvidableCompositionLocal).q1f = function (value, previous) {
    var tmp;
    var tmp_0;
    if (!(previous == null)) {
      tmp_0 = !(previous == null) ? isInterface(previous, MutableState) : false;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      previous.kv(value);
      tmp = previous;
    } else {
      tmp = mutableStateOf(value, this.y1k_1);
    }
    return tmp;
  };
  function CompositionLocalProvider$lambda($value, $content, $$changed) {
    return function ($composer, $force) {
      CompositionLocalProvider($value, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function PersistentCompositionLocalMap() {
  }
  function read(_this__u8e3s4, key) {
    var tmp;
    if (contains_0(_this__u8e3s4, key)) {
      tmp = getValueOf(_this__u8e3s4, key);
    } else {
      tmp = key.p1f_1.o2();
    }
    return tmp;
  }
  function contains_0(_this__u8e3s4, key) {
    return _this__u8e3s4.r2(key instanceof CompositionLocal ? key : THROW_CCE());
  }
  function getValueOf(_this__u8e3s4, key) {
    var tmp0_safe_receiver = _this__u8e3s4.u2(key instanceof CompositionLocal ? key : THROW_CCE());
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o2();
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
    var tmp0_elvis_lhs = get_derivedStateObservers().lq();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.collection.MutableVector' call
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp$ret$0 = fillArrayVal(Array(0), null);
      var this_0 = new MutableVector(tmp$ret$0, 0);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.derivedStateObservers.<anonymous>' call
      get_derivedStateObservers().d1l(this_0);
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
  function get_InternalDisposableEffectScope() {
    _init_properties_Effects_kt__be5lps();
    return InternalDisposableEffectScope;
  }
  var InternalDisposableEffectScope;
  function DisposableEffectScope() {
  }
  function LaunchedEffect(key1, block, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.h1e(1179185413);
    sourceInformation($composer_0, 'C(LaunchedEffect)P(1)338@14267L58:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(1179185413, $changed, -1, 'androidx.compose.runtime.LaunchedEffect (Effects.kt:336)');
    }
    var applyContext = $composer_0.f1e();
    $composer_0.h1e(1036442561);
    sourceInformation($composer_0, 'CC(remember):Effects.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.a16(key1);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.l1f();
    var tmp;
    if (invalid ? true : it === Companion_getInstance_0().z18_1) {
      // Inline function 'androidx.compose.runtime.LaunchedEffect.<anonymous>' call
      var value = new LaunchedEffectImpl(applyContext, block);
      $composer_0.r1f(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    $composer_0.i1e();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.i1e();
  }
  function LaunchedEffectImpl(parentCoroutineContext, task) {
    this.e1l_1 = task;
    this.f1l_1 = CoroutineScope(parentCoroutineContext);
    this.g1l_1 = null;
  }
  protoOf(LaunchedEffectImpl).g1j = function () {
    var tmp0_safe_receiver = this.g1l_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      cancel(tmp0_safe_receiver, 'Old job was still running!');
    }
    this.g1l_1 = launch(this.f1l_1, VOID, VOID, this.e1l_1);
  };
  protoOf(LaunchedEffectImpl).f1j = function () {
    var tmp0_safe_receiver = this.g1l_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.wl(new LeftCompositionCancellationException());
    }
    this.g1l_1 = null;
  };
  protoOf(LaunchedEffectImpl).h1j = function () {
    var tmp0_safe_receiver = this.g1l_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.wl(new LeftCompositionCancellationException());
    }
    this.g1l_1 = null;
  };
  function LeftCompositionCancellationException() {
    PlatformOptimizedCancellationException.call(this, 'The coroutine scope left the composition');
    captureStack(this, LeftCompositionCancellationException);
  }
  function DisposableEffect(key1, effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.h1e(-1371986847);
    sourceInformation($composer_0, 'C(DisposableEffect)P(1)155@6197L47:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-1371986847, $changed, -1, 'androidx.compose.runtime.DisposableEffect (Effects.kt:154)');
    }
    $composer_0.h1e(592131181);
    sourceInformation($composer_0, 'CC(remember):Effects.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.a16(key1);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.l1f();
    var tmp;
    if (invalid ? true : it === Companion_getInstance_0().z18_1) {
      // Inline function 'androidx.compose.runtime.DisposableEffect.<anonymous>' call
      var value = new DisposableEffectImpl(effect);
      $composer_0.r1f(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    $composer_0.i1e();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.i1e();
  }
  function DisposableEffect_0(keys, effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.h1e(-1307627122);
    sourceInformation($composer_0, 'C(DisposableEffect)P(1)276@11903L48:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-1307627122, $changed, -1, 'androidx.compose.runtime.DisposableEffect (Effects.kt:275)');
    }
    // Inline function 'androidx.compose.runtime.remember' call
    var keys_0 = keys.slice();
    var $composer_1 = $composer_0;
    $composer_1.h1e(-568225417);
    sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
    var invalid = false;
    var inductionVariable = 0;
    var last = keys_0.length;
    while (inductionVariable < last) {
      var key = keys_0[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      invalid = !!(invalid | $composer_1.a16(key));
    }
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_0 = invalid;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.l1f();
    var tmp;
    if (invalid_0 ? true : it === Companion_getInstance_0().z18_1) {
      // Inline function 'androidx.compose.runtime.DisposableEffect.<anonymous>' call
      var value = new DisposableEffectImpl(effect);
      $composer_1.r1f(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    $composer_1.i1e();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.i1e();
  }
  function DisposableEffectImpl(effect) {
    this.h1l_1 = effect;
    this.i1l_1 = null;
  }
  protoOf(DisposableEffectImpl).g1j = function () {
    this.i1l_1 = this.h1l_1(get_InternalDisposableEffectScope());
  };
  protoOf(DisposableEffectImpl).f1j = function () {
    var tmp0_safe_receiver = this.i1l_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.fn();
    }
    this.i1l_1 = null;
  };
  protoOf(DisposableEffectImpl).h1j = function () {
  };
  function DisposableEffect_1(key1, key2, effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.h1e(1429097729);
    sourceInformation($composer_0, 'C(DisposableEffect)P(1,2)195@8083L53:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(1429097729, $changed, -1, 'androidx.compose.runtime.DisposableEffect (Effects.kt:194)');
    }
    $composer_0.h1e(592133067);
    sourceInformation($composer_0, 'CC(remember):Effects.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!($composer_0.a16(key1) | $composer_0.a16(key2));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.l1f();
    var tmp;
    if (invalid ? true : it === Companion_getInstance_0().z18_1) {
      // Inline function 'androidx.compose.runtime.DisposableEffect.<anonymous>' call
      var value = new DisposableEffectImpl(effect);
      $composer_0.r1f(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    $composer_0.i1e();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.i1e();
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
      tmp = value.ta_1;
    } else {
      var tmp1_elvis_lhs = value == null ? null : hashCode(value);
      tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    }
    return tmp;
  }
  function JoinedKey(left, right) {
    this.j1l_1 = left;
    this.k1l_1 = right;
  }
  protoOf(JoinedKey).hashCode = function () {
    return imul(hashCodeOf(this, this.j1l_1), 31) + hashCodeOf(this, this.k1l_1) | 0;
  };
  protoOf(JoinedKey).toString = function () {
    return 'JoinedKey(left=' + toString_0(this.j1l_1) + ', right=' + toString_0(this.k1l_1) + ')';
  };
  protoOf(JoinedKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof JoinedKey))
      return false;
    var tmp0_other_with_cast = other instanceof JoinedKey ? other : THROW_CCE();
    if (!equals(this.j1l_1, tmp0_other_with_cast.j1l_1))
      return false;
    if (!equals(this.k1l_1, tmp0_other_with_cast.k1l_1))
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
    var tmp0_elvis_lhs = _this__u8e3s4.hd(Key_instance_0);
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
    this.l1l_1 = key;
  }
  protoOf(OpaqueKey).toString = function () {
    return 'OpaqueKey(key=' + this.l1l_1 + ')';
  };
  protoOf(OpaqueKey).hashCode = function () {
    return getStringHashCode(this.l1l_1);
  };
  protoOf(OpaqueKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OpaqueKey))
      return false;
    var tmp0_other_with_cast = other instanceof OpaqueKey ? other : THROW_CCE();
    if (!(this.l1l_1 === tmp0_other_with_cast.l1l_1))
      return false;
    return true;
  };
  function produceState(initialValue, producer, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.h1e(10454275);
    sourceInformation($composer_0, 'C(produceState)80@2911L41,81@2957L95:ProduceState.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(10454275, $changed, -1, 'androidx.compose.runtime.produceState (ProduceState.kt:79)');
    }
    $composer_0.h1e(-1870533705);
    sourceInformation($composer_0, 'CC(remember):ProduceState.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.l1f();
    var tmp;
    if (false ? true : it === Companion_getInstance_0().z18_1) {
      // Inline function 'androidx.compose.runtime.produceState.<anonymous>' call
      var value = mutableStateOf(initialValue);
      $composer_0.r1f(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.i1e();
    var result = tmp1_group;
    LaunchedEffect(Unit_instance, produceState$slambda_0(producer, result, null), $composer_0, 70);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.i1e();
    return result;
  }
  function ProduceStateScope() {
  }
  function $awaitDisposeCOROUTINE$0(_this__u8e3s4, onDispose, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v1l_1 = _this__u8e3s4;
    this.w1l_1 = onDispose;
  }
  protoOf($awaitDisposeCOROUTINE$0).md = function () {
    var suspendResult = this.cd_1;
    $sm: do
      try {
        var tmp = this.ad_1;
        switch (tmp) {
          case 0:
            this.bd_1 = 5;
            this.ad_1 = 1;
            continue $sm;
          case 1:
            this.bd_1 = 4;
            this.ad_1 = 2;
            var cancellable = new CancellableContinuationImpl(intercepted(this), get_MODE_CANCELLABLE());
            cancellable.mo();
            suspendResult = returnIfSuspended(cancellable.om(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.x1l_1 = throwKotlinNothingValueException();
            this.bd_1 = 5;
            this.ad_1 = 3;
            continue $sm;
          case 3:
            this.bd_1 = 5;
            this.w1l_1();
            return Unit_instance;
          case 4:
            this.bd_1 = 5;
            var t = this.dd_1;
            this.w1l_1();
            throw t;
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
  function ProduceStateScopeImpl(state, coroutineContext) {
    this.y1l_1 = coroutineContext;
    this.z1l_1 = state;
  }
  protoOf(ProduceStateScopeImpl).qk = function () {
    return this.y1l_1;
  };
  protoOf(ProduceStateScopeImpl).kv = function (_set____db54di) {
    this.z1l_1.kv(_set____db54di);
  };
  protoOf(ProduceStateScopeImpl).o2 = function () {
    return this.z1l_1.o2();
  };
  protoOf(ProduceStateScopeImpl).m1l = function (onDispose, $completion) {
    var tmp = new $awaitDisposeCOROUTINE$0(this, onDispose, $completion);
    tmp.cd_1 = Unit_instance;
    tmp.dd_1 = null;
    return tmp.md();
  };
  function produceState$slambda($producer, $result, resultContinuation) {
    this.i1m_1 = $producer;
    this.j1m_1 = $result;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(produceState$slambda).az = function ($this$LaunchedEffect, $completion) {
    var tmp = this.bz($this$LaunchedEffect, $completion);
    tmp.cd_1 = Unit_instance;
    tmp.dd_1 = null;
    return tmp.md();
  };
  protoOf(produceState$slambda).yd = function (p1, $completion) {
    return this.az((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(produceState$slambda).md = function () {
    var suspendResult = this.cd_1;
    $sm: do
      try {
        var tmp = this.ad_1;
        switch (tmp) {
          case 0:
            this.bd_1 = 2;
            this.ad_1 = 1;
            suspendResult = this.i1m_1(new ProduceStateScopeImpl(this.j1m_1, this.k1m_1.qk()), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.dd_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.bd_1 === 2) {
          throw e;
        } else {
          this.ad_1 = this.bd_1;
          this.dd_1 = e;
        }
      }
     while (true);
  };
  protoOf(produceState$slambda).bz = function ($this$LaunchedEffect, completion) {
    var i = new produceState$slambda(this.i1m_1, this.j1m_1, completion);
    i.k1m_1 = $this$LaunchedEffect;
    return i;
  };
  function produceState$slambda_0($producer, $result, resultContinuation) {
    var i = new produceState$slambda($producer, $result, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.az($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  var callbackLock;
  function _set_rereading__pnqtpo($this, value) {
    if (value) {
      $this.g13_1 = $this.g13_1 | 32;
    } else {
      $this.g13_1 = $this.g13_1 & -33;
    }
  }
  function _get_rereading__g2iruw($this) {
    return !(($this.g13_1 & 32) === 0);
  }
  function _set_skipped__p8q2c5($this, value) {
    if (value) {
      $this.g13_1 = $this.g13_1 | 16;
    } else {
      $this.g13_1 = $this.g13_1 & -17;
    }
  }
  function Companion_1() {
  }
  protoOf(Companion_1).l1m = function (slots, anchors, newOwner) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!anchors.s()) {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = anchors.l() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = anchors.m(index);
          // Inline function 'androidx.compose.runtime.Companion.adoptAnchoredScopes.<anonymous>' call
          var tmp = slots.m1m(item, 0);
          var recomposeScope = tmp instanceof RecomposeScopeImpl ? tmp : null;
          if (recomposeScope == null)
            null;
          else {
            recomposeScope.n1m(newOwner);
          }
        }
         while (inductionVariable <= last);
    }
  };
  protoOf(Companion_1).o1m = function (slots, anchors) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!anchors.s()) {
      var tmp$ret$2;
      $l$block: {
        // Inline function 'androidx.compose.runtime.snapshots.fastAny' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = anchors.l() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = anchors.m(index);
            // Inline function 'androidx.compose.runtime.snapshots.fastAny.<anonymous>' call
            // Inline function 'androidx.compose.runtime.Companion.hasAnchoredRecomposeScopes.<anonymous>' call
            var tmp_0;
            if (slots.l1k(item)) {
              var tmp_1 = slots.p1m(slots.w1b(item), 0);
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
  var Companion_instance_2;
  function Companion_getInstance_2() {
    return Companion_instance_2;
  }
  function RecomposeScopeImpl$end$lambda(this$0, $token, $instances) {
    return function (composition) {
      var tmp;
      var tmp_0;
      if (this$0.l13_1 === $token ? $instances.equals(this$0.m13_1) : false) {
        tmp_0 = composition instanceof CompositionImpl;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        // Inline function 'androidx.collection.MutableObjectIntMap.removeIf' call
        var this_0 = $instances;
        $l$block: {
          // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
          var m = this_0.i10_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              if (!this_1.oc(this_1.kc().lc(7)).oc(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.oc(new Long(255, 0)).xa(new Long(128, 0)) < 0) {
                      var index = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.MutableObjectIntMap.removeIf.<anonymous>' call
                      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>.<anonymous>' call
                      var tmp_1 = this_0.j10_1[index];
                      var instance = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                      // Inline function 'kotlin.also' call
                      var this_2 = !(this_0.k10_1[index] === $token);
                      // Inline function 'kotlin.contracts.contract' call
                      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                      if (this_2) {
                        composition.o1k(instance, this$0);
                        var tmp0_safe_receiver = isInterface(instance, DerivedState) ? instance : null;
                        if (tmp0_safe_receiver == null)
                          null;
                        else {
                          // Inline function 'kotlin.let' call
                          // Inline function 'kotlin.contracts.contract' call
                          // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                          composition.p1k(tmp0_safe_receiver);
                          var tmp0_safe_receiver_0 = this$0.n13_1;
                          var tmp_2;
                          if (tmp0_safe_receiver_0 == null) {
                            tmp_2 = null;
                          } else {
                            // Inline function 'kotlin.let' call
                            // Inline function 'kotlin.contracts.contract' call
                            tmp0_safe_receiver_0.m2(tmp0_safe_receiver);
                            var tmp_3;
                            if (tmp0_safe_receiver_0.l() === 0) {
                              this$0.n13_1 = null;
                              tmp_3 = Unit_instance;
                            }
                            tmp_2 = Unit_instance;
                          }
                        }
                      }
                      if (this_2) {
                        this_0.u10(index);
                      }
                    }
                    slot = slot.mc(8);
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
        if ($instances.l() === 0) {
          this$0.m13_1 = null;
          tmp_4 = Unit_instance;
        }
        tmp = tmp_4;
      }
      return Unit_instance;
    };
  }
  function RecomposeScopeImpl(owner) {
    this.g13_1 = 0;
    this.h13_1 = owner;
    this.i13_1 = null;
    this.j13_1 = null;
    this.k13_1 = null;
    this.l13_1 = 0;
    this.m13_1 = null;
    this.n13_1 = null;
  }
  protoOf(RecomposeScopeImpl).u1i = function () {
    var tmp;
    if (!(this.h13_1 == null)) {
      var tmp0_safe_receiver = this.i13_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u1i();
      tmp = tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(RecomposeScopeImpl).m1k = function () {
    return !(this.j13_1 == null);
  };
  protoOf(RecomposeScopeImpl).s1g = function (value) {
    if (value) {
      this.g13_1 = this.g13_1 | 1;
    } else {
      this.g13_1 = this.g13_1 & -2;
    }
  };
  protoOf(RecomposeScopeImpl).e1a = function () {
    return !((this.g13_1 & 1) === 0);
  };
  protoOf(RecomposeScopeImpl).m1e = function (value) {
    if (value) {
      this.g13_1 = this.g13_1 | 2;
    } else {
      this.g13_1 = this.g13_1 & -3;
    }
  };
  protoOf(RecomposeScopeImpl).k1k = function () {
    return !((this.g13_1 & 2) === 0);
  };
  protoOf(RecomposeScopeImpl).d1g = function (value) {
    if (value) {
      this.g13_1 = this.g13_1 | 4;
    } else {
      this.g13_1 = this.g13_1 & -5;
    }
  };
  protoOf(RecomposeScopeImpl).n1e = function () {
    return !((this.g13_1 & 4) === 0);
  };
  protoOf(RecomposeScopeImpl).i1b = function (value) {
    if (value) {
      this.g13_1 = this.g13_1 | 8;
    } else {
      this.g13_1 = this.g13_1 & -9;
    }
  };
  protoOf(RecomposeScopeImpl).q1e = function () {
    return !((this.g13_1 & 8) === 0);
  };
  protoOf(RecomposeScopeImpl).y1a = function (composer) {
    var block = this.j13_1;
    var observer = this.k13_1;
    if (!(observer == null) ? !(block == null) : false) {
      observer.q1m(this);
      try {
        block(composer, 1);
      }finally {
        observer.r1m(this);
      }
      return Unit_instance;
    }
    if ((block == null ? null : block(composer, 1)) == null) {
      // Inline function 'kotlin.error' call
      var message = 'Invalid restart scope';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(RecomposeScopeImpl).i1i = function (value) {
    var tmp0_safe_receiver = this.h13_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j1k(this, value);
    return tmp1_elvis_lhs == null ? InvalidationResult_IGNORED_getInstance() : tmp1_elvis_lhs;
  };
  protoOf(RecomposeScopeImpl).vp = function () {
    var tmp0_safe_receiver = this.h13_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.n1k(this);
    }
    this.h13_1 = null;
    this.m13_1 = null;
    this.n13_1 = null;
    var tmp1_safe_receiver = this.k13_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.s1m(this);
    }
  };
  protoOf(RecomposeScopeImpl).n1m = function (owner) {
    this.h13_1 = owner;
  };
  protoOf(RecomposeScopeImpl).i1k = function () {
    var tmp0_safe_receiver = this.h13_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.j1k(this, null);
  };
  protoOf(RecomposeScopeImpl).w1k = function (block) {
    this.j13_1 = block;
  };
  protoOf(RecomposeScopeImpl).h1b = function (value) {
    if (value) {
      this.g13_1 = this.g13_1 | 64;
    } else {
      this.g13_1 = this.g13_1 & -65;
    }
  };
  protoOf(RecomposeScopeImpl).g1b = function () {
    return !((this.g13_1 & 64) === 0);
  };
  protoOf(RecomposeScopeImpl).e1g = function () {
    return !((this.g13_1 & 16) === 0);
  };
  protoOf(RecomposeScopeImpl).j1b = function (token) {
    this.l13_1 = token;
    _set_skipped__p8q2c5(this, false);
  };
  protoOf(RecomposeScopeImpl).y1f = function () {
    _set_skipped__p8q2c5(this, true);
  };
  protoOf(RecomposeScopeImpl).v1j = function (instance) {
    if (_get_rereading__g2iruw(this))
      return false;
    var tmp0_elvis_lhs = this.m13_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new MutableObjectIntMap();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.recordRead.<anonymous>' call
      this.m13_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var token = tmp.t10(instance, this.l13_1, -1);
    if (token === this.l13_1) {
      return true;
    }
    if (isInterface(instance, DerivedState)) {
      var tmp1_elvis_lhs = this.n13_1;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_1 = new MutableScatterMap();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.recordRead.<anonymous>' call
        this.n13_1 = this_1;
        tmp_0 = this_1;
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      var tracked = tmp_0;
      tracked.h11(instance, instance.z1j().t1m());
    }
    return false;
  };
  protoOf(RecomposeScopeImpl).h1i = function () {
    return !(this.n13_1 == null);
  };
  protoOf(RecomposeScopeImpl).o13 = function (instances) {
    if (instances == null)
      return true;
    var tmp0_elvis_lhs = this.n13_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return true;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var trackedDependencies = tmp;
    var tmp_0;
    if (instances.v1f()) {
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.all' call
        var tmp_1;
        if (isInterface(instances, Collection)) {
          tmp_1 = instances.s();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        var tmp0_iterator = instances.n();
        while (tmp0_iterator.b1()) {
          var element = tmp0_iterator.d1();
          // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.isInvalidFor.<anonymous>' call
          var tmp_2;
          if (isInterface(element, DerivedState)) {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.isInvalidFor.<anonymous>.<anonymous>' call
            if (!isInterface(element, DerivedState))
              THROW_CCE();
            var tmp0_elvis_lhs_0 = element.a1l();
            var policy = tmp0_elvis_lhs_0 == null ? structuralEqualityPolicy() : tmp0_elvis_lhs_0;
            tmp_2 = policy.u1m(element.z1j().t1m(), trackedDependencies.u2(element));
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
  protoOf(RecomposeScopeImpl).x1a = function () {
    var tmp0_safe_receiver = this.h13_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.rereadTrackedInstances.<anonymous>' call
      var tmp0_safe_receiver_0 = this.m13_1;
      var tmp;
      if (tmp0_safe_receiver_0 == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        _set_rereading__pnqtpo(this, true);
        var tmp_0;
        try {
          var k = tmp0_safe_receiver_0.j10_1;
          var v = tmp0_safe_receiver_0.k10_1;
          var tmp$ret$2;
          $l$block: {
            // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
            var m = tmp0_safe_receiver_0.i10_1;
            var lastIndex = m.length - 2 | 0;
            var inductionVariable = 0;
            if (inductionVariable <= lastIndex)
              do {
                var i = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var slot = m[i];
                // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                var this_0 = slot;
                if (!this_0.oc(this_0.kc().lc(7)).oc(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                  var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                  var inductionVariable_0 = 0;
                  if (inductionVariable_0 < bitCount)
                    do {
                      var j = inductionVariable_0;
                      inductionVariable_0 = inductionVariable_0 + 1 | 0;
                      // Inline function 'androidx.collection.isFull' call
                      if (slot.oc(new Long(255, 0)).xa(new Long(128, 0)) < 0) {
                        var index = (i << 3) + j | 0;
                        // Inline function 'androidx.collection.ObjectIntMap.forEach.<anonymous>' call
                        // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.rereadTrackedInstances.<anonymous>.<anonymous>.<anonymous>' call
                        var tmp_1 = k[index];
                        var value = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                        v[index];
                        tmp0_safe_receiver.u1j(value);
                      }
                      slot = slot.mc(8);
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
  protoOf(RecomposeScopeImpl).b1g = function (token) {
    var tmp0_safe_receiver = this.m13_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>' call
      var tmp_0;
      var tmp_1;
      if (!this.e1g()) {
        var tmp$ret$3;
        $l$block: {
          // Inline function 'androidx.collection.ObjectIntMap.any' call
          // Inline function 'androidx.collection.ObjectIntMap.forEach' call
          var k = tmp0_safe_receiver.j10_1;
          var v = tmp0_safe_receiver.k10_1;
          $l$block_0: {
            // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
            var m = tmp0_safe_receiver.i10_1;
            var lastIndex = m.length - 2 | 0;
            var inductionVariable = 0;
            if (inductionVariable <= lastIndex)
              do {
                var i = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var slot = m[i];
                // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                var this_0 = slot;
                if (!this_0.oc(this_0.kc().lc(7)).oc(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                  var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                  var inductionVariable_0 = 0;
                  if (inductionVariable_0 < bitCount)
                    do {
                      var j = inductionVariable_0;
                      inductionVariable_0 = inductionVariable_0 + 1 | 0;
                      // Inline function 'androidx.collection.isFull' call
                      if (slot.oc(new Long(255, 0)).xa(new Long(128, 0)) < 0) {
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
                      slot = slot.mc(8);
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
      var old = $this.v1m_1.o2();
      var new_0 = old.y(info);
      if (old === new_0 ? true : $this.v1m_1.lv(old, new_0))
        break $l$loop;
    }
  }
  function removeRunning($this, info) {
    $l$loop: while (true) {
      var old = $this.v1m_1.o2();
      var new_0 = old.z(info);
      if (old === new_0 ? true : $this.v1m_1.lv(old, new_0))
        break $l$loop;
    }
  }
  function invoke$clearRecompositionState(toRecompose, toInsert, toApply, toLateApply, toComplete, modifiedValues, alreadyComposed) {
    toRecompose.f1();
    toInsert.f1();
    toApply.f1();
    toLateApply.f1();
    toComplete.f1();
    modifiedValues.f1();
    alreadyComposed.f1();
  }
  function invoke$fillToInsert(toInsert, this$0) {
    toInsert.f1();
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this$0.z1m_1;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    var this_0 = this$0.h1n_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.m(index);
        // Inline function 'androidx.compose.runtime.Recomposer$runRecomposeAndApplyChanges$slambda.invoke.fillToInsert.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        toInsert.y(item);
      }
       while (inductionVariable <= last);
    this$0.h1n_1.f1();
  }
  function Recomposer$runRecomposeAndApplyChanges$slambda$lambda(this$0, $toRecompose, $modifiedValues, $alreadyComposed, $toInsert, $toApply, $toLateApply, $toComplete) {
    return function (frameTime) {
      var tmp;
      if (_get_hasBroadcastFrameClockAwaiters__y6inql(this$0)) {
        $l$block: {
          // Inline function 'androidx.compose.runtime.trace' call
          var sectionName = 'Recomposer:animation';
          var token = Trace_instance.k1c(sectionName);
          try {
            this$0.y1m_1.x12(frameTime);
            Companion_instance_12.v1n();
            break $l$block;
          }finally {
            Trace_instance.z1c(token);
          }
        }
        tmp = Unit_instance;
      }
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName_0 = 'Recomposer:recompose';
        var token_0 = Trace_instance.k1c(sectionName_0);
        try {
          recordComposerModifications(this$0);
          // Inline function 'androidx.compose.runtime.synchronized' call
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          this$0.z1m_1;
          // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
          var this_0 = this$0.f1n_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable = 0;
          var last = this_0.l() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item = this_0.m(index);
              // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              // Inline function 'kotlin.collections.plusAssign' call
              $toRecompose.y(item);
            }
             while (inductionVariable <= last);
          this$0.f1n_1.f1();
          $modifiedValues.f1();
          $alreadyComposed.f1();
          $l$loop: while (true) {
            var tmp_0;
            // Inline function 'kotlin.collections.isNotEmpty' call
            if (!$toRecompose.s()) {
              tmp_0 = true;
            } else {
              // Inline function 'kotlin.collections.isNotEmpty' call
              tmp_0 = !$toInsert.s();
            }
            if (!tmp_0) {
              break $l$loop;
            }
            try {
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              var this_1 = $toRecompose;
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_0 = 0;
              var last_0 = this_1.l() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = this_1.m(index_0);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  $alreadyComposed.f1h(item_0);
                  var tmp0_safe_receiver = performRecompose(this$0, item_0, $modifiedValues);
                  if (tmp0_safe_receiver == null)
                    null;
                  else {
                    // Inline function 'kotlin.let' call
                    // Inline function 'kotlin.contracts.contract' call
                    $toApply.y(tmp0_safe_receiver);
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
              $toRecompose.f1();
            }
            if ($modifiedValues.v1f()) {
              // Inline function 'androidx.compose.runtime.synchronized' call
              // Inline function 'kotlinx.atomicfu.locks.synchronized' call
              this$0.z1m_1;
              var this_2 = _get_knownCompositions__y8veaj(this$0);
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_1 = 0;
              var last_1 = this_2.l() - 1 | 0;
              var tmp_1;
              if (inductionVariable_1 <= last_1) {
                do {
                  var index_1 = inductionVariable_1;
                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                  var item_1 = this_2.m(index_1);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  if (!$alreadyComposed.w1n(item_1) ? item_1.t1j($modifiedValues) : false) {
                    // Inline function 'kotlin.collections.plusAssign' call
                    $toRecompose.y(item_1);
                  }
                }
                 while (inductionVariable_1 <= last_1);
                tmp_1 = Unit_instance;
              }
            }
            if ($toRecompose.s()) {
              try {
                invoke$fillToInsert($toInsert, this$0);
                $l$loop_0: while (true) {
                  // Inline function 'kotlin.collections.isNotEmpty' call
                  if (!!$toInsert.s()) {
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
          if (!$toApply.s()) {
            var tmp0_this = this$0;
            tmp0_this.x1m_1 = tmp0_this.x1m_1.ic();
            try {
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              var this_4 = $toApply;
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_2 = 0;
              var last_2 = this_4.l() - 1 | 0;
              if (inductionVariable_2 <= last_2)
                do {
                  var index_2 = inductionVariable_2;
                  inductionVariable_2 = inductionVariable_2 + 1 | 0;
                  var item_2 = this_4.m(index_2);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  $toComplete.y(item_2);
                }
                 while (inductionVariable_2 <= last_2);
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              var this_5 = $toApply;
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_3 = 0;
              var last_3 = this_5.l() - 1 | 0;
              if (inductionVariable_3 <= last_3)
                do {
                  var index_3 = inductionVariable_3;
                  inductionVariable_3 = inductionVariable_3 + 1 | 0;
                  var item_3 = this_5.m(index_3);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  item_3.f1k();
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
              $toApply.f1();
            }
          }
          // Inline function 'kotlin.collections.isNotEmpty' call
          if (!$toLateApply.s()) {
            try {
              // Inline function 'kotlin.collections.plusAssign' call
              var this_6 = $toComplete;
              var elements_0 = $toLateApply;
              addAll(this_6, elements_0);
              // Inline function 'kotlin.collections.forEach' call
              var tmp0_iterator = $toLateApply.n();
              while (tmp0_iterator.b1()) {
                var element = tmp0_iterator.d1();
                // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                element.g1k();
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
              $toLateApply.f1();
            }
          }
          // Inline function 'kotlin.collections.isNotEmpty' call
          if (!$toComplete.s()) {
            try {
              // Inline function 'kotlin.collections.forEach' call
              var tmp0_iterator_0 = $toComplete.n();
              while (tmp0_iterator_0.b1()) {
                var element_0 = tmp0_iterator_0.d1();
                // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                element_0.o1e();
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
              $toComplete.f1();
            }
          }
          // Inline function 'androidx.compose.runtime.synchronized' call
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          this$0.z1m_1;
          // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          deriveStateLocked(this$0);
          Companion_instance_12.x1n();
          $alreadyComposed.f1();
          $modifiedValues.f1();
          this$0.l1n_1 = null;
          break $l$block_0;
        }finally {
          Trace_instance.z1c(token_0);
        }
      }
      return Unit_instance;
    };
  }
  function Recomposer$recompositionRunner$slambda$lambda(this$0) {
    return function (changed, _anonymous_parameter_1__qggqgd) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this$0.z1m_1;
      // Inline function 'androidx.compose.runtime.Recomposer.recompositionRunner.<anonymous>.<anonymous>.<anonymous>' call
      var tmp;
      if (this$0.r1n_1.o2().ua(State_Idle_getInstance()) >= 0) {
        // Inline function 'androidx.compose.runtime.collection.fastForEach' call
        if (changed instanceof IdentityArraySet) {
          // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
          // Inline function 'kotlin.contracts.contract' call
          var values = changed.i1c_1;
          var inductionVariable = 0;
          var last = changed.h1c_1;
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
                  tmp_1 = !it.y1n(tmp$ret$0);
                } else {
                  tmp_1 = false;
                }
                if (tmp_1) {
                  break $l$block;
                }
                this$0.e1n_1.f1h(it);
              }
            }
             while (inductionVariable < last);
        } else {
          // Inline function 'kotlin.collections.forEach' call
          var tmp0_iterator = changed.n();
          while (tmp0_iterator.b1()) {
            var element = tmp0_iterator.d1();
            $l$block_0: {
              // Inline function 'androidx.compose.runtime.Recomposer.recompositionRunner.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              var tmp_2;
              if (element instanceof StateObjectImpl) {
                // Inline function 'androidx.compose.runtime.snapshots.Companion.Composition' call
                var tmp$ret$2 = _ReaderKind___init__impl__jqeebu(1);
                tmp_2 = !element.y1n(tmp$ret$2);
              } else {
                tmp_2 = false;
              }
              if (tmp_2) {
                break $l$block_0;
              }
              this$0.e1n_1.f1h(element);
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
        tmp0_safe_receiver.s6(tmp$ret$7);
      }
      return Unit_instance;
    };
  }
  function Recomposer$recompositionRunner$slambda$slambda($block, $parentFrameClock, resultContinuation) {
    this.h1o_1 = $block;
    this.i1o_1 = $parentFrameClock;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$recompositionRunner$slambda$slambda).az = function ($this$coroutineScope, $completion) {
    var tmp = this.bz($this$coroutineScope, $completion);
    tmp.cd_1 = Unit_instance;
    tmp.dd_1 = null;
    return tmp.md();
  };
  protoOf(Recomposer$recompositionRunner$slambda$slambda).yd = function (p1, $completion) {
    return this.az((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$recompositionRunner$slambda$slambda).md = function () {
    var suspendResult = this.cd_1;
    $sm: do
      try {
        var tmp = this.ad_1;
        switch (tmp) {
          case 0:
            this.bd_1 = 2;
            this.ad_1 = 1;
            suspendResult = this.h1o_1(this.j1o_1, this.i1o_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.dd_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.bd_1 === 2) {
          throw e;
        } else {
          this.ad_1 = this.bd_1;
          this.dd_1 = e;
        }
      }
     while (true);
  };
  protoOf(Recomposer$recompositionRunner$slambda$slambda).bz = function ($this$coroutineScope, completion) {
    var i = new Recomposer$recompositionRunner$slambda$slambda(this.h1o_1, this.i1o_1, completion);
    i.j1o_1 = $this$coroutineScope;
    return i;
  };
  function Recomposer$recompositionRunner$slambda$slambda_0($block, $parentFrameClock, resultContinuation) {
    var i = new Recomposer$recompositionRunner$slambda$slambda($block, $parentFrameClock, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.az($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function State(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function _get_knownCompositions__y8veaj($this) {
    var tmp0_elvis_lhs = $this.d1n_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.<get-knownCompositions>.<anonymous>' call
      var compositions = $this.c1n_1;
      var newCache = compositions.s() ? emptyList() : ArrayList_init_$Create$_1(compositions);
      $this.d1n_1 = newCache;
      tmp = newCache;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this) {
    return !$this.q1n_1 ? $this.y1m_1.w12() : false;
  }
  function _get_hasBroadcastFrameClockAwaiters__y6inql($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.z1m_1;
    // Inline function 'androidx.compose.runtime.Recomposer.<get-hasBroadcastFrameClockAwaiters>.<anonymous>' call
    return _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
  }
  function deriveStateLocked($this) {
    if ($this.r1n_1.o2().ua(State_ShuttingDown_getInstance()) <= 0) {
      clearKnownCompositionsLocked($this);
      $this.e1n_1 = new IdentityArraySet();
      $this.f1n_1.f1();
      $this.g1n_1.f1();
      $this.h1n_1.f1();
      $this.k1n_1 = null;
      var tmp0_safe_receiver = $this.m1n_1;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.bn();
      $this.m1n_1 = null;
      $this.p1n_1 = null;
      return null;
    }
    var tmp;
    if (!($this.p1n_1 == null)) {
      tmp = State_Inactive_getInstance();
    } else {
      if ($this.a1n_1 == null) {
        $this.e1n_1 = new IdentityArraySet();
        $this.f1n_1.f1();
        tmp = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this) ? State_InactivePendingWork_getInstance() : State_Inactive_getInstance();
      } else {
        var tmp_0;
        var tmp_1;
        var tmp_2;
        var tmp_3;
        var tmp_4;
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!$this.f1n_1.s()) {
          tmp_4 = true;
        } else {
          tmp_4 = $this.e1n_1.v1f();
        }
        if (tmp_4) {
          tmp_3 = true;
        } else {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_3 = !$this.g1n_1.s();
        }
        if (tmp_3) {
          tmp_2 = true;
        } else {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_2 = !$this.h1n_1.s();
        }
        if (tmp_2) {
          tmp_1 = true;
        } else {
          tmp_1 = $this.n1n_1 > 0;
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
    $this.r1n_1.kv(newState);
    var tmp_5;
    if (newState.equals(State_PendingWork_getInstance())) {
      // Inline function 'kotlin.also' call
      var this_0 = $this.m1n_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.deriveStateLocked.<anonymous>' call
      $this.m1n_1 = null;
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
    $this.z1m_1;
    // Inline function 'androidx.compose.runtime.Recomposer.<get-shouldKeepRecomposing>.<anonymous>' call
    if (!$this.o1n_1) {
      tmp = true;
    } else {
      var tmp$ret$4;
      $l$block: {
        // Inline function 'kotlin.sequences.any' call
        var tmp0_iterator = $this.s1n_1.nq().n();
        while (tmp0_iterator.b1()) {
          var element = tmp0_iterator.d1();
          // Inline function 'androidx.compose.runtime.Recomposer.<get-shouldKeepRecomposing>.<anonymous>' call
          if (element.rk()) {
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
    this.k1o_1 = $outer;
  }
  function RecomposerErrorState(recoverable, cause) {
    this.l1o_1 = recoverable;
    this.m1o_1 = cause;
  }
  function recordComposerModifications($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.z1m_1;
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
    if ($this.e1n_1.s())
      return _get_hasFrameWorkLocked__1gtyf7($this);
    // Inline function 'kotlin.also' call
    var this_0 = $this.e1n_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>.<anonymous>' call
    $this.e1n_1 = new IdentityArraySet();
    var changes = this_0;
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.z1m_1;
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
        var last = compositions.l() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = compositions.m(index);
            // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>.<anonymous>' call
            item.r1j(changes);
            if ($this.r1n_1.o2().ua(State_ShuttingDown_getInstance()) <= 0) {
              break $l$block;
            }
          }
           while (inductionVariable <= last);
      }
      $this.e1n_1 = new IdentityArraySet();
      complete = true;
    }finally {
      if (!complete) {
        // Inline function 'androidx.compose.runtime.synchronized' call
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        $this.z1m_1;
        $this.e1n_1.n1o(changes);
      }
    }
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.z1m_1;
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
    $this.z1m_1;
    // Inline function 'androidx.compose.runtime.Recomposer.registerRunnerJob.<anonymous>' call
    var tmp0_safe_receiver = $this.b1n_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
    if ($this.r1n_1.o2().ua(State_ShuttingDown_getInstance()) <= 0) {
      // Inline function 'kotlin.error' call
      var message = 'Recomposer shut down';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (!($this.a1n_1 == null)) {
      // Inline function 'kotlin.error' call
      var message_0 = 'Recomposer already running';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    $this.a1n_1 = callingJob;
    deriveStateLocked($this);
  }
  function processCompositionError($this, e, failedInitialComposition, recoverable) {
    var tmp;
    if (Companion_getInstance_3().w1m_1.lq()) {
      tmp = !(e instanceof ComposeRuntimeError);
    } else {
      tmp = false;
    }
    if (tmp) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      $this.z1m_1;
      // Inline function 'androidx.compose.runtime.Recomposer.processCompositionError.<anonymous>' call
      logError('Error was captured in composition while live edit was enabled.', e);
      $this.g1n_1.f1();
      $this.f1n_1.f1();
      $this.e1n_1 = new IdentityArraySet();
      $this.h1n_1.f1();
      $this.i1n_1.f1();
      $this.j1n_1.f1();
      $this.p1n_1 = new RecomposerErrorState(recoverable, e);
      if (!(failedInitialComposition == null)) {
        var tmp0_elvis_lhs = $this.k1n_1;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          // Inline function 'kotlin.also' call
          // Inline function 'kotlin.collections.mutableListOf' call
          var this_0 = ArrayList_init_$Create$();
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.Recomposer.processCompositionError.<anonymous>.<anonymous>' call
          $this.k1n_1 = this_0;
          tmp_0 = this_0;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var failedCompositions = tmp_0;
        if (!failedCompositions.q(failedInitialComposition)) {
          // Inline function 'kotlin.collections.plusAssign' call
          failedCompositions.y(failedInitialComposition);
        }
        removeKnownCompositionLocked($this, failedInitialComposition);
      }
      deriveStateLocked($this);
    } else {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      $this.z1m_1;
      var errorState = $this.p1n_1;
      var tmp_1;
      if (errorState == null) {
        $this.p1n_1 = new RecomposerErrorState(false, e);
        tmp_1 = Unit_instance;
      } else {
        throw errorState.m1o_1;
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
    $this.c1n_1.f1();
    $this.d1n_1 = emptyList();
  }
  function removeKnownCompositionLocked($this, composition) {
    // Inline function 'kotlin.collections.minusAssign' call
    $this.c1n_1.z(composition);
    $this.d1n_1 = null;
  }
  function addKnownCompositionLocked($this, composition) {
    // Inline function 'kotlin.collections.plusAssign' call
    $this.c1n_1.y(composition);
    $this.d1n_1 = null;
  }
  function _get_hasSchedulingWork__b617oy($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.z1m_1;
    // Inline function 'androidx.compose.runtime.Recomposer.<get-hasSchedulingWork>.<anonymous>' call
    var tmp;
    var tmp_0;
    if ($this.e1n_1.v1f()) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp_0 = !$this.f1n_1.s();
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
    tmp.cd_1 = Unit_instance;
    tmp.dd_1 = null;
    return tmp.md();
  }
  function recompositionRunner($this, block, $completion) {
    // Inline function 'kotlin.js.getCoroutineContext' call
    var tmp$ret$0 = $completion.r6();
    var parentFrameClock = get_monotonicFrameClock(tmp$ret$0);
    return withContext($this.y1m_1, Recomposer$recompositionRunner$slambda_0($this, block, parentFrameClock, null), $completion);
  }
  function performInitialMovableContentInserts($this, composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.z1m_1;
    var tmp;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.runtime.snapshots.fastAny' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      var this_0 = $this.h1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.l() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.m(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastAny.<anonymous>' call
          // Inline function 'androidx.compose.runtime.Recomposer.performInitialMovableContentInserts.<anonymous>.<anonymous>' call
          if (equals(item.r1b_1, composition)) {
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
      if (!!toInsert.s()) {
        break $l$loop;
      }
      performInsertValues($this, toInsert, null);
      performInitialMovableContentInserts$fillToInsert(toInsert, $this, composition);
    }
  }
  function performRecompose($this, composition, modifiedValues) {
    var tmp;
    if (composition.x1i() ? true : composition.l1j()) {
      tmp = true;
    } else {
      var tmp0_safe_receiver = $this.l1n_1;
      tmp = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.q(composition)) === true;
    }
    if (tmp)
      return null;
    var tmp_0;
    $l$block_0: {
      // Inline function 'androidx.compose.runtime.Recomposer.composing' call
      var snapshot = Companion_instance_12.x1o(readObserverOf($this, composition), writeObserverOf($this, composition, modifiedValues));
      try {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
          var previous = snapshot.y1o();
          try {
            // Inline function 'androidx.compose.runtime.Recomposer.performRecompose.<anonymous>' call
            if ((modifiedValues == null ? null : modifiedValues.v1f()) === true) {
              composition.o1g(Recomposer$performRecompose$lambda(modifiedValues, composition));
            }
            tmp$ret$1 = composition.c1k();
            break $l$block;
          }finally {
            snapshot.z1o(previous);
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
    var destination = HashMap_init_$Create$_0(references.l());
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = references.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = references.m(index);
        // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy.<anonymous>' call
        // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>' call
        var key = item.r1b_1;
        // Inline function 'kotlin.collections.getOrPut' call
        var value = destination.u2(key);
        var tmp;
        if (value == null) {
          // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy.<anonymous>.<anonymous>' call
          var answer = ArrayList_init_$Create$();
          destination.l2(key, answer);
          tmp = answer;
        } else {
          tmp = value;
        }
        var list = tmp;
        list.y(item);
      }
       while (inductionVariable <= last);
    var tasks = destination;
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = tasks.k2().n();
    while (tmp0_iterator.b1()) {
      var tmp1_loop_parameter = tmp0_iterator.d1();
      // Inline function 'kotlin.collections.component1' call
      var composition = tmp1_loop_parameter.n2();
      // Inline function 'kotlin.collections.component2' call
      var refs = tmp1_loop_parameter.o2();
      runtimeCheck(!composition.x1i());
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.Recomposer.composing' call
        var snapshot = Companion_instance_12.x1o(readObserverOf($this, composition), writeObserverOf($this, composition, modifiedValues));
        try {
          $l$block: {
            // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
            var previous = snapshot.y1o();
            try {
              // Inline function 'androidx.compose.runtime.synchronized' call
              // Inline function 'kotlinx.atomicfu.locks.synchronized' call
              $this.z1m_1;
              // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>' call
              // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
              // Inline function 'kotlin.contracts.contract' call
              var target = ArrayList_init_$Create$_0(refs.l());
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_0 = 0;
              var last_0 = refs.l() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = refs.m(index_0);
                  // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
                  // Inline function 'kotlin.collections.plusAssign' call
                  // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>.<anonymous>' call
                  var element = to(item_0, removeLastMultiValue($this.i1n_1, item_0.p1b_1));
                  target.y(element);
                }
                 while (inductionVariable_0 <= last_0);
              var pairs = target;
              composition.d1k(pairs);
              break $l$block;
            }finally {
              snapshot.z1o(previous);
            }
          }
          break $l$block_0;
        }finally {
          applyAndCheck($this, snapshot);
        }
      }
    }
    return toList(tasks.i2());
  }
  function discardUnusedValues($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.z1m_1;
    // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>' call
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.i1n_1.s()) {
      var references = flatten($this.i1n_1.j2());
      $this.i1n_1.f1();
      // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
      // Inline function 'kotlin.contracts.contract' call
      var target = ArrayList_init_$Create$_0(references.l());
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = references.l() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = references.m(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
          // Inline function 'kotlin.collections.plusAssign' call
          // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>.<anonymous>' call
          var element = to(item, $this.j1n_1.u2(item));
          target.y(element);
        }
         while (inductionVariable <= last);
      var unusedValues = target;
      $this.j1n_1.f1();
      tmp = unusedValues;
    } else {
      tmp = emptyList();
    }
    var unusedValues_0 = tmp;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = unusedValues_0.l() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = unusedValues_0.m(index_0);
        // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>' call
        var reference = item_0.z6();
        var state = item_0.a7();
        if (!(state == null)) {
          reference.r1b_1.e1k(state);
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
      var applyResult = snapshot.n1p();
      if (applyResult instanceof Failure) {
        // Inline function 'kotlin.error' call
        var message = 'Unsupported concurrent change during composition. A state object was modified by composition as well as being modified outside composition.';
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }finally {
      snapshot.fn();
    }
  }
  function _get_hasFrameWorkLocked__1gtyf7($this) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.f1n_1.s()) {
      tmp = true;
    } else {
      tmp = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
    }
    return tmp;
  }
  function Companion_2() {
    Companion_instance_3 = this;
    this.v1m_1 = MutableStateFlow(persistentSetOf());
    this.w1m_1 = new AtomicReference(false);
  }
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_2();
    return Companion_instance_3;
  }
  function performInitialMovableContentInserts$fillToInsert(toInsert, this$0, $composition) {
    toInsert.f1();
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this$0.z1m_1;
    var iterator = this$0.h1n_1.n();
    while (iterator.b1()) {
      var value = iterator.d1();
      if (equals(value.r1b_1, $composition)) {
        toInsert.y(value);
        iterator.c1();
      }
    }
  }
  function Recomposer$broadcastFrameClock$lambda(this$0) {
    return function () {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this$0.z1m_1;
      // Inline function 'androidx.compose.runtime.Recomposer.broadcastFrameClock.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.also' call
      var this_0 = deriveStateLocked(this$0);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.broadcastFrameClock.<anonymous>.<anonymous>.<anonymous>' call
      if (this$0.r1n_1.o2().ua(State_ShuttingDown_getInstance()) <= 0)
        throw CancellationException_init_$Create$('Recomposer shutdown; frame clock awaiter will never resume', this$0.b1n_1);
      if (this_0 == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$4 = _Result___init__impl__xyqfz8(Unit_instance);
        this_0.s6(tmp$ret$4);
      }
      return Unit_instance;
    };
  }
  function Recomposer$effectJob$lambda$lambda(this$0, $throwable) {
    return function (runnerJobCause) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this$0.z1m_1;
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
      tmp.b1n_1 = tmp_0;
      this$0.r1n_1.kv(State_ShutDown_getInstance());
      return Unit_instance;
    };
  }
  function Recomposer$effectJob$lambda(this$0) {
    return function (throwable) {
      var cancellation = CancellationException_init_$Create$('Recomposer effect job completed', throwable);
      var continuationToResume = null;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this$0.z1m_1;
      // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>' call
      var runnerJob = this$0.a1n_1;
      var tmp;
      if (!(runnerJob == null)) {
        this$0.r1n_1.kv(State_ShuttingDown_getInstance());
        if (!this$0.o1n_1) {
          runnerJob.wl(cancellation);
        } else if (!(this$0.m1n_1 == null)) {
          continuationToResume = this$0.m1n_1;
        }
        this$0.m1n_1 = null;
        tmp = runnerJob.rl(Recomposer$effectJob$lambda$lambda(this$0, throwable));
      } else {
        this$0.b1n_1 = cancellation;
        this$0.r1n_1.kv(State_ShutDown_getInstance());
        tmp = Unit_instance;
      }
      var tmp0_safe_receiver = continuationToResume;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_instance);
        tmp0_safe_receiver.s6(tmp$ret$3);
      }
      return Unit_instance;
    };
  }
  function Recomposer$runRecomposeAndApplyChanges$slambda(this$0, resultContinuation) {
    this.w1p_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).g1q = function ($this$recompositionRunner, parentFrameClock, $completion) {
    var tmp = this.h1q($this$recompositionRunner, parentFrameClock, $completion);
    tmp.cd_1 = Unit_instance;
    tmp.dd_1 = null;
    return tmp.md();
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).ai = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE();
    return this.g1q(tmp, (!(p2 == null) ? isInterface(p2, MonotonicFrameClock) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).md = function () {
    var suspendResult = this.cd_1;
    $sm: do
      try {
        var tmp = this.ad_1;
        switch (tmp) {
          case 0:
            this.bd_1 = 6;
            var tmp_0 = this;
            tmp_0.z1p_1 = ArrayList_init_$Create$();
            var tmp_1 = this;
            tmp_1.a1q_1 = ArrayList_init_$Create$();
            var tmp_2 = this;
            tmp_2.b1q_1 = ArrayList_init_$Create$();
            var tmp_3 = this;
            tmp_3.c1q_1 = LinkedHashSet_init_$Create$();
            var tmp_4 = this;
            tmp_4.d1q_1 = LinkedHashSet_init_$Create$();
            this.e1q_1 = new IdentityArraySet();
            this.f1q_1 = new IdentityArraySet();
            this.ad_1 = 1;
            continue $sm;
          case 1:
            if (!_get_shouldKeepRecomposing__5j79sd(this.w1p_1)) {
              this.ad_1 = 5;
              continue $sm;
            }

            this.ad_1 = 2;
            suspendResult = awaitWorkAvailable(this.w1p_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (!recordComposerModifications(this.w1p_1)) {
              this.ad_1 = 1;
              continue $sm;
            } else {
              this.ad_1 = 3;
              continue $sm;
            }

          case 3:
            this.ad_1 = 4;
            suspendResult = this.y1p_1.y12(Recomposer$runRecomposeAndApplyChanges$slambda$lambda(this.w1p_1, this.z1p_1, this.e1q_1, this.f1q_1, this.a1q_1, this.b1q_1, this.c1q_1, this.d1q_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            discardUnusedValues(this.w1p_1);
            this.ad_1 = 1;
            continue $sm;
          case 5:
            return Unit_instance;
          case 6:
            throw this.dd_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.bd_1 === 6) {
          throw e;
        } else {
          this.ad_1 = this.bd_1;
          this.dd_1 = e;
        }
      }
     while (true);
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).h1q = function ($this$recompositionRunner, parentFrameClock, completion) {
    var i = new Recomposer$runRecomposeAndApplyChanges$slambda(this.w1p_1, completion);
    i.x1p_1 = $this$recompositionRunner;
    i.y1p_1 = parentFrameClock;
    return i;
  };
  function Recomposer$runRecomposeAndApplyChanges$slambda_0(this$0, resultContinuation) {
    var i = new Recomposer$runRecomposeAndApplyChanges$slambda(this$0, resultContinuation);
    var l = function ($this$recompositionRunner, parentFrameClock, $completion) {
      return i.g1q($this$recompositionRunner, parentFrameClock, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Recomposer$recompositionRunner$slambda(this$0, $block, $parentFrameClock, resultContinuation) {
    this.q1q_1 = this$0;
    this.r1q_1 = $block;
    this.s1q_1 = $parentFrameClock;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$recompositionRunner$slambda).az = function ($this$withContext, $completion) {
    var tmp = this.bz($this$withContext, $completion);
    tmp.cd_1 = Unit_instance;
    tmp.dd_1 = null;
    return tmp.md();
  };
  protoOf(Recomposer$recompositionRunner$slambda).yd = function (p1, $completion) {
    return this.az((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$recompositionRunner$slambda).md = function () {
    var suspendResult = this.cd_1;
    $sm: do
      try {
        var tmp = this.ad_1;
        switch (tmp) {
          case 0:
            this.bd_1 = 5;
            this.u1q_1 = get_job(this.t1q_1.qk());
            registerRunnerJob(this.q1q_1, this.u1q_1);
            var tmp_0 = this;
            var tmp_1 = Companion_instance_12;
            tmp_0.v1q_1 = tmp_1.x1q(Recomposer$recompositionRunner$slambda$lambda(this.q1q_1));
            addRunning(Companion_getInstance_3(), this.q1q_1.u1n_1);
            this.ad_1 = 1;
            continue $sm;
          case 1:
            this.bd_1 = 4;
            this.q1q_1.z1m_1;
            var this_0 = _get_knownCompositions__y8veaj(this.q1q_1);
            var inductionVariable = 0;
            var last = this_0.l() - 1 | 0;
            if (inductionVariable <= last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var item = this_0.m(index);
                item.h1k();
              }
               while (inductionVariable <= last);
            this.ad_1 = 2;
            suspendResult = coroutineScope(Recomposer$recompositionRunner$slambda$slambda_0(this.r1q_1, this.s1q_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.w1q_1 = suspendResult;
            this.bd_1 = 5;
            this.ad_1 = 3;
            continue $sm;
          case 3:
            this.bd_1 = 5;
            this.v1q_1.fn();
            this.q1q_1.z1m_1;
            if (this.q1q_1.a1n_1 === this.u1q_1) {
              this.q1q_1.a1n_1 = null;
            }

            deriveStateLocked(this.q1q_1);
            removeRunning(Companion_getInstance_3(), this.q1q_1.u1n_1);
            return Unit_instance;
          case 4:
            this.bd_1 = 5;
            var t = this.dd_1;
            this.v1q_1.fn();
            this.q1q_1.z1m_1;
            if (this.q1q_1.a1n_1 === this.u1q_1) {
              this.q1q_1.a1n_1 = null;
            }

            deriveStateLocked(this.q1q_1);
            removeRunning(Companion_getInstance_3(), this.q1q_1.u1n_1);
            throw t;
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
  protoOf(Recomposer$recompositionRunner$slambda).bz = function ($this$withContext, completion) {
    var i = new Recomposer$recompositionRunner$slambda(this.q1q_1, this.r1q_1, this.s1q_1, completion);
    i.t1q_1 = $this$withContext;
    return i;
  };
  function Recomposer$recompositionRunner$slambda_0(this$0, $block, $parentFrameClock, resultContinuation) {
    var i = new Recomposer$recompositionRunner$slambda(this$0, $block, $parentFrameClock, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.az($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Recomposer$performRecompose$lambda($modifiedValues, $composition) {
    return function () {
      var this_0 = $modifiedValues;
      // Inline function 'kotlin.contracts.contract' call
      var values = this_0.i1c_1;
      var inductionVariable = 0;
      var last = this_0.h1c_1;
      var tmp;
      if (inductionVariable < last) {
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.Recomposer.performRecompose.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_0 = values[i];
          var it = !(tmp_0 == null) ? tmp_0 : THROW_CCE();
          $composition.b1k(it);
        }
         while (inductionVariable < last);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function Recomposer$readObserverOf$lambda($composition) {
    return function (value) {
      $composition.u1j(value);
      return Unit_instance;
    };
  }
  function Recomposer$writeObserverOf$lambda($composition, $modifiedValues) {
    return function (value) {
      $composition.b1k(value);
      var tmp0_safe_receiver = $modifiedValues;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.f1h(value);
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
    this.w1o_1 = _this__u8e3s4;
  }
  protoOf($awaitWorkAvailableCOROUTINE$2).md = function () {
    var suspendResult = this.cd_1;
    $sm: do
      try {
        var tmp = this.ad_1;
        switch (tmp) {
          case 0:
            this.bd_1 = 3;
            if (!_get_hasSchedulingWork__b617oy(this.w1o_1)) {
              this.ad_1 = 1;
              var cancellable = new CancellableContinuationImpl(intercepted(this), get_MODE_CANCELLABLE());
              cancellable.mo();
              this.w1o_1.z1m_1;
              var tmp_0;
              if (_get_hasSchedulingWork__b617oy(this.w1o_1)) {
                tmp_0 = cancellable;
              } else {
                this.w1o_1.m1n_1 = cancellable;
                tmp_0 = null;
              }
              var tmp0_safe_receiver = tmp_0;
              if (tmp0_safe_receiver == null)
                null;
              else {
                tmp0_safe_receiver.s6(_Result___init__impl__xyqfz8(Unit_instance));
              }
              suspendResult = returnIfSuspended(cancellable.om(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.ad_1 = 2;
              continue $sm;
            }

          case 1:
            this.ad_1 = 2;
            continue $sm;
          case 2:
            return Unit_instance;
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
  function Recomposer(effectCoroutineContext) {
    Companion_getInstance_3();
    CompositionContext.call(this);
    this.x1m_1 = new Long(0, 0);
    var tmp = this;
    tmp.y1m_1 = new BroadcastFrameClock(Recomposer$broadcastFrameClock$lambda(this));
    this.z1m_1 = createSynchronizedObject();
    this.a1n_1 = null;
    this.b1n_1 = null;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.c1n_1 = ArrayList_init_$Create$();
    this.d1n_1 = null;
    this.e1n_1 = new IdentityArraySet();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.f1n_1 = ArrayList_init_$Create$();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_2.g1n_1 = ArrayList_init_$Create$();
    var tmp_3 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_3.h1n_1 = ArrayList_init_$Create$();
    var tmp_4 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_4.i1n_1 = LinkedHashMap_init_$Create$();
    var tmp_5 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_5.j1n_1 = LinkedHashMap_init_$Create$();
    this.k1n_1 = null;
    this.l1n_1 = null;
    this.m1n_1 = null;
    this.n1n_1 = 0;
    this.o1n_1 = false;
    this.p1n_1 = null;
    this.q1n_1 = false;
    this.r1n_1 = MutableStateFlow(State_Inactive_getInstance());
    var tmp_6 = this;
    // Inline function 'kotlin.apply' call
    var this_0 = Job(effectCoroutineContext.hd(Key_instance));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>' call
    this_0.rl(Recomposer$effectJob$lambda(this));
    tmp_6.s1n_1 = this_0;
    this.t1n_1 = effectCoroutineContext.ng(this.y1m_1).ng(this.s1n_1);
    this.u1n_1 = new RecomposerInfoImpl(this);
  }
  protoOf(Recomposer).g1e = function () {
    return this.t1n_1;
  };
  protoOf(Recomposer).y1q = function ($completion) {
    return recompositionRunner(this, Recomposer$runRecomposeAndApplyChanges$slambda_0(this, null), $completion);
  };
  protoOf(Recomposer).d1i = function (composition, content) {
    var composerWasComposing = composition.x1i();
    try {
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.Recomposer.composing' call
        var snapshot = Companion_instance_12.x1o(readObserverOf(this, composition), writeObserverOf(this, composition, null));
        try {
          $l$block: {
            // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
            var previous = snapshot.y1o();
            try {
              composition.n1j(content);
              break $l$block;
            }finally {
              snapshot.z1o(previous);
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
      Companion_instance_12.x1n();
    }
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.z1m_1;
    var tmp;
    if (this.r1n_1.o2().ua(State_ShuttingDown_getInstance()) > 0) {
      var tmp_0;
      if (!_get_knownCompositions__y8veaj(this).q(composition)) {
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
      composition.f1k();
      composition.g1k();
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
      Companion_instance_12.x1n();
    }
  };
  protoOf(Recomposer).e16 = function () {
    return 1000;
  };
  protoOf(Recomposer).b16 = function () {
    return false;
  };
  protoOf(Recomposer).c16 = function () {
    return false;
  };
  protoOf(Recomposer).d16 = function (table) {
  };
  protoOf(Recomposer).a1j = function (composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.z1m_1;
    // Inline function 'androidx.compose.runtime.Recomposer.invalidate.<anonymous>' call
    var tmp;
    if (!this.f1n_1.q(composition)) {
      // Inline function 'kotlin.collections.plusAssign' call
      this.f1n_1.y(composition);
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
      tmp0_safe_receiver.s6(tmp$ret$3);
    }
  };
  protoOf(Recomposer).m1b = function (reference) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.z1m_1;
    // Inline function 'androidx.compose.runtime.Recomposer.insertMovableContent.<anonymous>' call
    // Inline function 'kotlin.collections.plusAssign' call
    this.h1n_1.y(reference);
    var tmp0_safe_receiver = deriveStateLocked(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_instance);
      tmp0_safe_receiver.s6(tmp$ret$3);
    }
  };
  protoOf(Recomposer).u1d = function (reference) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.z1m_1;
    // Inline function 'androidx.compose.runtime.Recomposer.deletedMovableContent.<anonymous>' call
    addMultiValue(this.i1n_1, reference.p1b_1, reference);
  };
  protoOf(Recomposer).s1k = function (reference, data) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.z1m_1;
    this.j1n_1.l2(reference, data);
  };
  protoOf(Recomposer).t1d = function (composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.z1m_1;
    // Inline function 'androidx.compose.runtime.Recomposer.reportRemovedComposition.<anonymous>' call
    var tmp0_elvis_lhs = this.l1n_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.collections.mutableSetOf' call
      var this_0 = LinkedHashSet_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.reportRemovedComposition.<anonymous>.<anonymous>' call
      this.l1n_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var compositionsRemoved = tmp;
    compositionsRemoved.y(composition);
  };
  protoOf(Recomposer).y1b = function (reference) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.z1m_1;
    // Inline function 'androidx.compose.runtime.Recomposer.movableContentStateResolve.<anonymous>' call
    return this.j1n_1.m2(reference);
  };
  function removeLastMultiValue(_this__u8e3s4, key) {
    _init_properties_Recomposer_kt__nj7w3x();
    var tmp0_safe_receiver = _this__u8e3s4.u2(key);
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
      if (tmp0_safe_receiver.s()) {
        _this__u8e3s4.m2(key);
      }
      tmp = this_0;
    }
    return tmp;
  }
  function addMultiValue(_this__u8e3s4, key, value) {
    _init_properties_Recomposer_kt__nj7w3x();
    // Inline function 'kotlin.collections.getOrPut' call
    var value_0 = _this__u8e3s4.u2(key);
    var tmp;
    if (value_0 == null) {
      // Inline function 'androidx.compose.runtime.addMultiValue.<anonymous>' call
      // Inline function 'kotlin.collections.mutableListOf' call
      var answer = ArrayList_init_$Create$();
      _this__u8e3s4.l2(key, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    return tmp.y(value);
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
    this.k15_1 = new Int32Array(0);
    this.l15_1 = 0;
    var tmp = this;
    var tmp_0 = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(0), null);
    while (tmp_0 < 0) {
      tmp_1[tmp_0] = null;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.m15_1 = tmp_1;
    this.n15_1 = 0;
    this.o15_1 = 0;
    this.p15_1 = new SynchronizedObject();
    this.q15_1 = false;
    this.r15_1 = 0;
    var tmp_2 = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp_2.s15_1 = ArrayList_init_$Create$();
    this.t15_1 = null;
  }
  protoOf(SlotTable).v1a = function () {
    return this.l15_1 === 0;
  };
  protoOf(SlotTable).u15 = function () {
    if (this.q15_1) {
      // Inline function 'kotlin.error' call
      var message = 'Cannot read while a writer is pending';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.o15_1 = this.o15_1 + 1 | 0;
    return new SlotReader(this);
  };
  protoOf(SlotTable).s18 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.q15_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.openWriter.<anonymous>' call
      var message = 'Cannot start a writer when another writer is pending';
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.o15_1 <= 0)) {
      // Inline function 'androidx.compose.runtime.SlotTable.openWriter.<anonymous>' call
      var message_0 = 'Cannot start a writer when a reader is pending';
      composeRuntimeError(toString(message_0));
    }
    this.q15_1 = true;
    this.r15_1 = this.r15_1 + 1 | 0;
    return new SlotWriter(this);
  };
  protoOf(SlotTable).q19 = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.q15_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      var message = 'use active SlotWriter to create an anchor location instead';
      composeRuntimeError(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= index ? index < this.l15_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      var message_0 = 'Parameter index is out of range';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var this_0 = this.s15_1;
    var effectiveSize = this.l15_1;
    var location = search$accessor$145qfty(this_0, index, effectiveSize);
    var tmp;
    if (location < 0) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      var anchor = new Anchor(index);
      this_0.w1(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = this_0.m(location);
    }
    return tmp;
  };
  protoOf(SlotTable).z1q = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.q15_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.tryAnchor.<anonymous>' call
      var message = 'use active SlotWriter to crate an anchor for location instead';
      composeRuntimeError(toString(message));
    }
    return (0 <= index ? index < this.l15_1 : false) ? find(this.s15_1, index, this.l15_1) : null;
  };
  protoOf(SlotTable).w1b = function (anchor) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.q15_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchorIndex.<anonymous>' call
      var message = 'Use active SlotWriter to determine anchor location instead';
      composeRuntimeError(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!anchor.u1i()) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchorIndex.<anonymous>' call
      var message_0 = 'Anchor refers to a group that was removed';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    return anchor.t1c_1;
  };
  protoOf(SlotTable).l1k = function (anchor) {
    var tmp;
    if (anchor.u1i()) {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.ownsAnchor.<anonymous>' call
      var it = search$accessor$145qfty(this.s15_1, anchor.t1c_1, this.l15_1);
      tmp = it >= 0 ? equals(this.s15_1.m(it), anchor) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SlotTable).y1i = function (groupIndex, anchor) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.q15_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.groupContainsAnchor.<anonymous>' call
      var message = 'Writer is active';
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(0 <= groupIndex ? groupIndex < this.l15_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.groupContainsAnchor.<anonymous>' call
      var message_0 = 'Invalid group index';
      composeRuntimeError(toString(message_0));
    }
    var tmp;
    if (this.l1k(anchor)) {
      var containsUpper = groupIndex + groupSize(this.k15_1, groupIndex) | 0;
      var containsArg = anchor.t1c_1;
      tmp = groupIndex <= containsArg ? containsArg < containsUpper : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SlotTable).a1r = function (reader, sourceInformationMap) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(reader.t16_1 === this ? this.o15_1 > 0 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.close.<anonymous>' call
      var message = 'Unexpected reader close()';
      composeRuntimeError(toString(message));
    }
    this.o15_1 = this.o15_1 - 1 | 0;
    if (!(sourceInformationMap == null)) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this.p15_1;
      var thisMap = this.t15_1;
      var tmp;
      if (!(thisMap == null)) {
        thisMap.m3(sourceInformationMap);
        tmp = Unit_instance;
      } else {
        this.t15_1 = sourceInformationMap;
        tmp = Unit_instance;
      }
    }
  };
  protoOf(SlotTable).b1r = function (writer, groups, groupsSize, slots, slotsSize, anchors, sourceInformationMap) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(writer.i17_1 === this ? this.q15_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.close.<anonymous>' call
      var message = 'Unexpected writer close()';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.q15_1 = false;
    this.c1r(groups, groupsSize, slots, slotsSize, anchors, sourceInformationMap);
  };
  protoOf(SlotTable).c1r = function (groups, groupsSize, slots, slotsSize, anchors, sourceInformationMap) {
    this.k15_1 = groups;
    this.l15_1 = groupsSize;
    this.m15_1 = slots;
    this.n15_1 = slotsSize;
    this.s15_1 = anchors;
    this.t15_1 = sourceInformationMap;
  };
  protoOf(SlotTable).f1d = function () {
    return this.l15_1 > 0 ? containsMark(this.k15_1, 0) : false;
  };
  protoOf(SlotTable).d1r = function (group) {
    var tmp0_safe_receiver = this.t15_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.sourceInformationOf.<anonymous>' call
      var tmp0_safe_receiver_0 = this.z1q(group);
      var tmp_0;
      if (tmp0_safe_receiver_0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SlotTable.sourceInformationOf.<anonymous>.<anonymous>' call
        tmp_0 = tmp0_safe_receiver.u2(tmp0_safe_receiver_0);
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(SlotTable).p1m = function (group, slotIndex) {
    var start = slotAnchor(this.k15_1, group);
    var end = (group + 1 | 0) < this.l15_1 ? dataAnchor(this.k15_1, group + 1 | 0) : this.m15_1.length;
    var len = end - start | 0;
    var tmp;
    if (0 <= slotIndex ? slotIndex < len : false) {
      return this.m15_1[start + slotIndex | 0];
    } else {
      tmp = Companion_getInstance_0().z18_1;
    }
    return tmp;
  };
  protoOf(SlotTable).n = function () {
    return new GroupIterator(this, 0, this.l15_1);
  };
  function moveGroup($this, fromWriter, fromIndex, toWriter, updateFromCursor, updateToCursor, removeSourceGroup) {
    var groupsToMove = fromWriter.h1a(fromIndex);
    var sourceGroupsEnd = fromIndex + groupsToMove | 0;
    var sourceSlotsStart = dataIndex(fromWriter, fromIndex);
    var sourceSlotsEnd = dataIndex(fromWriter, sourceGroupsEnd);
    var slotsToMove = sourceSlotsEnd - sourceSlotsStart | 0;
    var hasMarks = containsAnyGroupMarks(fromWriter, fromIndex);
    insertGroups(toWriter, groupsToMove);
    insertSlots(toWriter, slotsToMove, toWriter.z17_1);
    if (fromWriter.n17_1 < sourceGroupsEnd) {
      moveGroupGapTo(fromWriter, sourceGroupsEnd);
    }
    if (fromWriter.r17_1 < sourceSlotsEnd) {
      moveSlotGapTo(fromWriter, sourceSlotsEnd, sourceGroupsEnd);
    }
    var groups = toWriter.j17_1;
    var currentGroup = toWriter.z17_1;
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = fromWriter.j17_1;
    var destinationOffset = imul(currentGroup, 5);
    var startIndex = imul(fromIndex, 5);
    var endIndex = imul(sourceGroupsEnd, 5);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, groups, destinationOffset, startIndex, endIndex);
    var slots = toWriter.k17_1;
    var currentSlot = toWriter.p17_1;
    // Inline function 'kotlin.collections.copyInto' call
    var this_1 = fromWriter.k17_1;
    arrayCopy(this_1, slots, currentSlot, sourceSlotsStart, sourceSlotsEnd);
    var parent = toWriter.b18_1;
    updateParentAnchor(groups, currentGroup, parent);
    var parentDelta = currentGroup - fromIndex | 0;
    var moveEnd = currentGroup + groupsToMove | 0;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
    var dataIndexDelta = currentSlot - dataIndex_0(groups, toWriter, currentGroup) | 0;
    var slotsGapOwner = toWriter.t17_1;
    var slotsGapLen = toWriter.s17_1;
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
        var newDataAnchor = dataIndexToDataAnchor(toWriter, newDataIndex, slotsGapOwner < groupAddress ? 0 : toWriter.r17_1, slotsGapLen, slotsCapacity);
        updateDataAnchor(groups, groupAddress, newDataAnchor);
        if (groupAddress === slotsGapOwner) {
          slotsGapOwner = slotsGapOwner + 1 | 0;
        }
      }
       while (inductionVariable < moveEnd);
    toWriter.t17_1 = slotsGapOwner;
    var startAnchors = locationOf(fromWriter.l17_1, fromIndex, fromWriter.l());
    var endAnchors = locationOf(fromWriter.l17_1, sourceGroupsEnd, fromWriter.l());
    var tmp_0;
    if (startAnchors < endAnchors) {
      var sourceAnchors = fromWriter.l17_1;
      var anchors = ArrayList_init_$Create$_0(endAnchors - startAnchors | 0);
      var anchorDelta = currentGroup - fromIndex | 0;
      var inductionVariable_0 = startAnchors;
      if (inductionVariable_0 < endAnchors)
        do {
          var anchorIndex = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var sourceAnchor = sourceAnchors.m(anchorIndex);
          sourceAnchor.t1c_1 = sourceAnchor.t1c_1 + anchorDelta | 0;
          anchors.y(sourceAnchor);
        }
         while (inductionVariable_0 < endAnchors);
      var insertLocation = locationOf(toWriter.l17_1, toWriter.z17_1, toWriter.l());
      toWriter.l17_1.d3(insertLocation, anchors);
      sourceAnchors.z1(startAnchors, endAnchors).f1();
      tmp_0 = anchors;
    } else {
      tmp_0 = emptyList();
    }
    var anchors_0 = tmp_0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!anchors_0.s()) {
      var sourceSourceInformationMap = fromWriter.m17_1;
      if (!(sourceSourceInformationMap == null)) {
        var destinationSourceInformation = toWriter.m17_1;
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_1 = 0;
        var last = anchors_0.l() - 1 | 0;
        if (inductionVariable_1 <= last)
          do {
            var index = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var item = anchors_0.m(index);
            // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
            var information = sourceSourceInformationMap.u2(item);
            if (!(information == null)) {
              sourceSourceInformationMap.m2(item);
              var tmp0_elvis_lhs = destinationSourceInformation;
              var tmp_1;
              if (tmp0_elvis_lhs == null) {
                // Inline function 'kotlin.run' call
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>.<anonymous>' call
                var map = HashMap_init_$Create$();
                destinationSourceInformation = map;
                toWriter.m17_1 = destinationSourceInformation;
                tmp_1 = map;
              } else {
                tmp_1 = tmp0_elvis_lhs;
              }
              var map_0 = tmp_1;
              // Inline function 'kotlin.collections.set' call
              map_0.l2(item, information);
            }
          }
           while (inductionVariable_1 <= last);
        if (sourceSourceInformationMap.s()) {
          fromWriter.m17_1 = null;
        }
      }
    }
    var toWriterParent = toWriter.b18_1;
    var tmp4_safe_receiver = sourceInformationOf(toWriter, parent);
    if (tmp4_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var predecessor = -1;
      var child = toWriterParent + 1 | 0;
      var endGroup = toWriter.z17_1;
      while (child < endGroup) {
        predecessor = child;
        child = child + groupSize(toWriter.j17_1, child) | 0;
      }
      tmp4_safe_receiver.i1r(toWriter, predecessor, endGroup);
    }
    var parentGroup = fromWriter.p18(fromIndex);
    var tmp_2;
    if (!removeSourceGroup) {
      tmp_2 = false;
    } else if (updateFromCursor) {
      var needsStartGroups = parentGroup >= 0;
      if (needsStartGroups) {
        fromWriter.w18();
        fromWriter.j1r(parentGroup - fromWriter.z17_1 | 0);
        fromWriter.w18();
      }
      fromWriter.j1r(fromIndex - fromWriter.z17_1 | 0);
      var anchorsRemoved = fromWriter.w1g();
      if (needsStartGroups) {
        fromWriter.t18();
        fromWriter.t1a();
        fromWriter.t18();
        fromWriter.t1a();
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
    toWriter.v17_1 = toWriter.v17_1 + (isNode(groups, currentGroup) ? 1 : nodeCount(groups, currentGroup)) | 0;
    if (updateToCursor) {
      toWriter.z17_1 = currentGroup + groupsToMove | 0;
      toWriter.p17_1 = currentSlot + slotsToMove | 0;
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
    var tmp0_elvis_lhs = $this.m17_1;
    var map = tmp0_elvis_lhs == null ? HashMap_init_$Create$() : tmp0_elvis_lhs;
    $this.m17_1 = map;
    // Inline function 'kotlin.collections.getOrPut' call
    var key = $this.q19(parent);
    var value = map.u2(key);
    var tmp;
    if (value == null) {
      // Inline function 'androidx.compose.runtime.SlotWriter.groupSourceInformationFor.<anonymous>' call
      var result = new GroupSourceInformation(0, sourceInformation);
      if (sourceInformation == null) {
        var child = parent + 1 | 0;
        var end = $this.z17_1;
        while (child < end) {
          result.k1r($this, child);
          child = child + groupSize($this.j17_1, child) | 0;
        }
      }
      var answer = result;
      map.l2(key, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    return tmp;
  }
  function startGroup_1($this, key, objectKey, isNode, aux) {
    var previousParent = $this.b18_1;
    var inserting = $this.u17_1 > 0;
    $this.y17_1.z15($this.v17_1);
    var tmp = $this;
    var tmp_0;
    if (inserting) {
      insertGroups($this, 1);
      var current = $this.z17_1;
      var currentAddress = groupIndexToAddress($this, current);
      var hasObjectKey = !(objectKey === Companion_getInstance_0().z18_1);
      var hasAux = !isNode ? !(aux === Companion_getInstance_0().z18_1) : false;
      initGroup($this.j17_1, currentAddress, key, isNode, hasObjectKey, hasAux, $this.b18_1, $this.p17_1);
      $this.q17_1 = $this.p17_1;
      var dataSlotsNeeded = ((isNode ? 1 : 0) + (hasObjectKey ? 1 : 0) | 0) + (hasAux ? 1 : 0) | 0;
      if (dataSlotsNeeded > 0) {
        insertSlots($this, dataSlotsNeeded, current);
        var slots = $this.k17_1;
        var currentSlot = $this.p17_1;
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
        $this.p17_1 = currentSlot;
      }
      $this.v17_1 = 0;
      var newCurrent = current + 1 | 0;
      $this.b18_1 = current;
      $this.z17_1 = newCurrent;
      if (previousParent >= 0) {
        var tmp3_safe_receiver = sourceInformationOf($this, previousParent);
        if (tmp3_safe_receiver == null)
          null;
        else {
          tmp3_safe_receiver.k1r($this, current);
        }
      }
      tmp_0 = newCurrent;
    } else {
      $this.w17_1.z15(previousParent);
      saveCurrentGroupEnd($this);
      var currentGroup = $this.z17_1;
      var currentGroupAddress = groupIndexToAddress($this, currentGroup);
      if (!equals(aux, Companion_getInstance_0().z18_1)) {
        if (isNode) {
          $this.m1r(aux);
        } else {
          $this.l1r(aux);
        }
      }
      $this.p17_1 = slotIndex($this.j17_1, $this, currentGroupAddress);
      $this.q17_1 = dataIndex_0($this.j17_1, $this, groupIndexToAddress($this, $this.z17_1 + 1 | 0));
      $this.v17_1 = nodeCount($this.j17_1, currentGroupAddress);
      $this.b18_1 = currentGroup;
      $this.z17_1 = currentGroup + 1 | 0;
      tmp_0 = currentGroup + groupSize($this.j17_1, currentGroupAddress) | 0;
    }
    tmp.a18_1 = tmp_0;
  }
  function Companion_3() {
  }
  var Companion_instance_4;
  function Companion_getInstance_4() {
    return Companion_instance_4;
  }
  function containsGroupMark($this, group) {
    return group >= 0 ? containsMark($this.j17_1, groupIndexToAddress($this, group)) : false;
  }
  function containsAnyGroupMarks($this, group) {
    return group >= 0 ? containsAnyMark($this.j17_1, groupIndexToAddress($this, group)) : false;
  }
  function recalculateMarks($this) {
    var tmp0_safe_receiver = $this.d18_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      while (tmp0_safe_receiver.v1f()) {
        updateContainsMarkNow($this, tmp0_safe_receiver.o1r(), tmp0_safe_receiver);
      }
    }
  }
  function updateContainsMark($this, group) {
    if (group >= 0) {
      var tmp0_elvis_lhs = $this.d18_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_0 = new PrioritySet();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SlotWriter.updateContainsMark.<anonymous>' call
        $this.d18_1 = this_0;
        tmp = this_0;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      tmp.p1r(group);
    }
  }
  function updateContainsMarkNow($this, group, set) {
    var groupAddress = groupIndexToAddress($this, group);
    var containsAnyMarks = childContainsAnyMarks($this, group);
    var markChanges = !(containsMark($this.j17_1, groupAddress) === containsAnyMarks);
    if (markChanges) {
      updateContainsMark_0($this.j17_1, groupAddress, containsAnyMarks);
      var parent = $this.p18(group);
      if (parent >= 0) {
        set.p1r(parent);
      }
    }
  }
  function childContainsAnyMarks($this, group) {
    var child = group + 1 | 0;
    var end = group + $this.h1a(group) | 0;
    while (child < end) {
      if (containsAnyMark($this.j17_1, groupIndexToAddress($this, child)))
        return true;
      child = child + $this.h1a(child) | 0;
    }
    return false;
  }
  function saveCurrentGroupEnd($this) {
    $this.x17_1.z15((_get_capacity__a9k9f3($this) - $this.o17_1 | 0) - $this.a18_1 | 0);
  }
  function restoreCurrentGroupEnd($this) {
    var newGroupEnd = (_get_capacity__a9k9f3($this) - $this.o17_1 | 0) - $this.x17_1.d1a() | 0;
    $this.a18_1 = newGroupEnd;
    return newGroupEnd;
  }
  function fixParentAnchorsFor($this, parent, endGroup, firstChild) {
    var parentAnchor = parentIndexToAnchor($this, parent, $this.n17_1);
    var child = firstChild;
    while (child < endGroup) {
      updateParentAnchor($this.j17_1, groupIndexToAddress($this, child), parentAnchor);
      var childEnd = child + groupSize($this.j17_1, groupIndexToAddress($this, child)) | 0;
      fixParentAnchorsFor($this, child, childEnd, child + 1 | 0);
      child = childEnd;
    }
  }
  function moveGroupGapTo($this, index) {
    var gapLen = $this.o17_1;
    var gapStart = $this.n17_1;
    if (!(gapStart === index)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!$this.l17_1.s()) {
        updateAnchors($this, gapStart, index);
      }
      if (gapLen > 0) {
        var groups = $this.j17_1;
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
        var oldAnchor = parentAnchor($this.j17_1, groupAddress);
        var oldIndex = parentAnchorToIndex($this, oldAnchor);
        var newAnchor = parentIndexToAnchor($this, oldIndex, index);
        if (!(newAnchor === oldAnchor)) {
          updateParentAnchor($this.j17_1, groupAddress, newAnchor);
        }
        groupAddress = groupAddress + 1 | 0;
        if (groupAddress === index)
          groupAddress = groupAddress + gapLen | 0;
      }
    }
    $this.n17_1 = index;
  }
  function moveSlotGapTo($this, index, group) {
    var gapLen = $this.s17_1;
    var gapStart = $this.r17_1;
    var slotsGapOwner = $this.t17_1;
    if (!(gapStart === index)) {
      var slots = $this.k17_1;
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
    var b = $this.l();
    var newSlotsGapOwner = Math.min(a, b);
    if (!(slotsGapOwner === newSlotsGapOwner)) {
      var slotsSize = $this.k17_1.length - gapLen | 0;
      if (newSlotsGapOwner < slotsGapOwner) {
        var updateAddress = groupIndexToAddress($this, newSlotsGapOwner);
        var stopUpdateAddress = groupIndexToAddress($this, slotsGapOwner);
        var groupGapStart = $this.n17_1;
        while (updateAddress < stopUpdateAddress) {
          var anchor = dataAnchor($this.j17_1, updateAddress);
          // Inline function 'androidx.compose.runtime.runtimeCheck' call
          if (!(anchor >= 0)) {
            // Inline function 'androidx.compose.runtime.SlotWriter.moveSlotGapTo.<anonymous>' call
            var message = 'Unexpected anchor value, expected a positive anchor';
            composeRuntimeError(toString(message));
          }
          updateDataAnchor($this.j17_1, updateAddress, -((slotsSize - anchor | 0) + 1 | 0) | 0);
          updateAddress = updateAddress + 1 | 0;
          if (updateAddress === groupGapStart)
            updateAddress = updateAddress + $this.o17_1 | 0;
        }
      } else {
        var updateAddress_0 = groupIndexToAddress($this, slotsGapOwner);
        var stopUpdateAddress_0 = groupIndexToAddress($this, newSlotsGapOwner);
        while (updateAddress_0 < stopUpdateAddress_0) {
          var anchor_0 = dataAnchor($this.j17_1, updateAddress_0);
          // Inline function 'androidx.compose.runtime.runtimeCheck' call
          if (!(anchor_0 < 0)) {
            // Inline function 'androidx.compose.runtime.SlotWriter.moveSlotGapTo.<anonymous>' call
            var message_0 = 'Unexpected anchor value, expected a negative anchor';
            composeRuntimeError(toString(message_0));
          }
          updateDataAnchor($this.j17_1, updateAddress_0, (slotsSize + anchor_0 | 0) + 1 | 0);
          updateAddress_0 = updateAddress_0 + 1 | 0;
          if (updateAddress_0 === $this.n17_1)
            updateAddress_0 = updateAddress_0 + $this.o17_1 | 0;
        }
      }
      $this.t17_1 = newSlotsGapOwner;
    }
    $this.r17_1 = index;
  }
  function clearSlotGap($this) {
    var slotsGapStart = $this.r17_1;
    var slotsGapEnd = slotsGapStart + $this.s17_1 | 0;
    fill_0($this.k17_1, null, slotsGapStart, slotsGapEnd);
  }
  function insertGroups($this, size) {
    if (size > 0) {
      var currentGroup = $this.z17_1;
      moveGroupGapTo($this, currentGroup);
      var gapStart = $this.n17_1;
      var gapLen = $this.o17_1;
      var oldCapacity = $this.j17_1.length / 5 | 0;
      var oldSize = oldCapacity - gapLen | 0;
      if (gapLen < size) {
        var groups = $this.j17_1;
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
        $this.j17_1 = newGroups;
        gapLen = newGapLen;
      }
      var currentEnd = $this.a18_1;
      if (currentEnd >= gapStart)
        $this.a18_1 = currentEnd + size | 0;
      $this.n17_1 = gapStart + size | 0;
      $this.o17_1 = gapLen - size | 0;
      var index = oldSize > 0 ? dataIndex($this, currentGroup + size | 0) : 0;
      var anchor = dataIndexToDataAnchor($this, index, $this.t17_1 < gapStart ? 0 : $this.r17_1, $this.s17_1, $this.k17_1.length);
      var inductionVariable = gapStart;
      var last = gapStart + size | 0;
      if (inductionVariable < last)
        do {
          var groupAddress = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          updateDataAnchor($this.j17_1, groupAddress, anchor);
        }
         while (inductionVariable < last);
      var slotsGapOwner = $this.t17_1;
      if (slotsGapOwner >= gapStart) {
        $this.t17_1 = slotsGapOwner + size | 0;
      }
    }
  }
  function insertSlots($this, size, group) {
    if (size > 0) {
      moveSlotGapTo($this, $this.p17_1, group);
      var gapStart = $this.r17_1;
      var gapLen = $this.s17_1;
      if (gapLen < size) {
        var slots = $this.k17_1;
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
        $this.k17_1 = newData;
        gapLen = newGapLen;
      }
      var currentDataEnd = $this.q17_1;
      if (currentDataEnd >= gapStart)
        $this.q17_1 = currentDataEnd + size | 0;
      $this.r17_1 = gapStart + size | 0;
      $this.s17_1 = gapLen - size | 0;
    }
  }
  function removeGroups($this, start, len) {
    var tmp;
    if (len > 0) {
      var anchorsRemoved = false;
      var anchors = $this.l17_1;
      moveGroupGapTo($this, start);
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!anchors.s()) {
        anchorsRemoved = removeAnchors($this, start, len, $this.m17_1);
      }
      $this.n17_1 = start;
      var previousGapLen = $this.o17_1;
      var newGapLen = previousGapLen + len | 0;
      $this.o17_1 = newGapLen;
      var slotsGapOwner = $this.t17_1;
      if (slotsGapOwner > start) {
        var tmp_0 = $this;
        // Inline function 'kotlin.math.max' call
        var b = slotsGapOwner - len | 0;
        tmp_0.t17_1 = Math.max(start, b);
      }
      if ($this.a18_1 >= $this.n17_1) {
        $this.a18_1 = $this.a18_1 - len | 0;
      }
      var parent = $this.b18_1;
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
    var tmp0_safe_receiver = $this.m17_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotWriter.sourceInformationOf.<anonymous>' call
      var tmp0_safe_receiver_0 = $this.z1q(group);
      var tmp_0;
      if (tmp0_safe_receiver_0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SlotWriter.sourceInformationOf.<anonymous>.<anonymous>' call
        tmp_0 = tmp0_safe_receiver.u2(tmp0_safe_receiver_0);
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function removeSlots($this, start, len, group) {
    if (len > 0) {
      var gapLen = $this.s17_1;
      var removeEnd = start + len | 0;
      moveSlotGapTo($this, removeEnd, group);
      $this.r17_1 = start;
      $this.s17_1 = gapLen + len | 0;
      fill_0($this.k17_1, null, start, start + len | 0);
      var currentDataEnd = $this.q17_1;
      if (currentDataEnd >= start)
        $this.q17_1 = currentDataEnd - len | 0;
    }
  }
  function updateNodeOfGroup($this, index, value) {
    var address = groupIndexToAddress($this, index);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(address < $this.j17_1.length ? isNode($this.j17_1, address) : false)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.updateNodeOfGroup.<anonymous>' call
      var message = 'Updating the node of a group at ' + index + ' that was not created with as a node group';
      composeRuntimeError(toString(message));
    }
    $this.k17_1[dataIndexToDataAddress($this, nodeIndex($this.j17_1, $this, address))] = value;
  }
  function updateAnchors($this, previousGapStart, newGapStart) {
    var gapLen = $this.o17_1;
    var size = _get_capacity__a9k9f3($this) - gapLen | 0;
    if (previousGapStart < newGapStart) {
      var index = locationOf($this.l17_1, previousGapStart, size);
      $l$loop_0: while (index < $this.l17_1.l()) {
        var anchor = $this.l17_1.m(index);
        var location = anchor.t1c_1;
        if (location < 0) {
          var newLocation = size + location | 0;
          if (newLocation < newGapStart) {
            anchor.t1c_1 = size + location | 0;
            index = index + 1 | 0;
          } else
            break $l$loop_0;
        } else
          break $l$loop_0;
      }
    } else {
      var index_0 = locationOf($this.l17_1, newGapStart, size);
      $l$loop_1: while (index_0 < $this.l17_1.l()) {
        var anchor_0 = $this.l17_1.m(index_0);
        var location_0 = anchor_0.t1c_1;
        if (location_0 >= 0) {
          anchor_0.t1c_1 = -(size - location_0 | 0) | 0;
          index_0 = index_0 + 1 | 0;
        } else
          break $l$loop_1;
      }
    }
  }
  function removeAnchors($this, gapStart, size, sourceInformationMap) {
    var gapLen = $this.o17_1;
    var removeEnd = gapStart + size | 0;
    var groupsSize = _get_capacity__a9k9f3($this) - gapLen | 0;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotWriter.removeAnchors.<anonymous>' call
    var it = locationOf($this.l17_1, gapStart + size | 0, groupsSize);
    var index = it >= $this.l17_1.l() ? it - 1 | 0 : it;
    var removeAnchorEnd = 0;
    var removeAnchorStart = index + 1 | 0;
    $l$loop: while (index >= 0) {
      var anchor = $this.l17_1.m(index);
      var location = $this.w1b(anchor);
      if (location >= gapStart) {
        if (location < removeEnd) {
          anchor.t1c_1 = IntCompanionObject_instance.MIN_VALUE;
          if (sourceInformationMap == null)
            null;
          else
            sourceInformationMap.m2(anchor);
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
      $this.l17_1.z1(removeAnchorStart, removeAnchorEnd).f1();
    }
    return this_0;
  }
  function moveAnchors($this, originalLocation, newLocation, size) {
    var end = originalLocation + size | 0;
    var groupsSize = $this.l();
    var index = locationOf($this.l17_1, originalLocation, groupsSize);
    // Inline function 'kotlin.collections.mutableListOf' call
    var removedAnchors = ArrayList_init_$Create$();
    if (index >= 0) {
      $l$loop: while (index < $this.l17_1.l()) {
        var anchor = $this.l17_1.m(index);
        var location = $this.w1b(anchor);
        if (location >= originalLocation ? location < end : false) {
          removedAnchors.y(anchor);
          $this.l17_1.k1(index);
        } else
          break $l$loop;
      }
    }
    var moveDelta = newLocation - originalLocation | 0;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = removedAnchors.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index_0 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = removedAnchors.m(index_0);
        // Inline function 'androidx.compose.runtime.SlotWriter.moveAnchors.<anonymous>' call
        var anchorIndex = $this.w1b(item);
        var newAnchorIndex = anchorIndex + moveDelta | 0;
        if (newAnchorIndex >= $this.n17_1) {
          item.t1c_1 = -(groupsSize - newAnchorIndex | 0) | 0;
        } else {
          item.t1c_1 = newAnchorIndex;
        }
        var insertIndex = locationOf($this.l17_1, newAnchorIndex, groupsSize);
        $this.l17_1.w1(insertIndex, item);
      }
       while (inductionVariable <= last);
  }
  function _get_capacity__a9k9f3($this) {
    return $this.j17_1.length / 5 | 0;
  }
  function groupIndexToAddress($this, index) {
    return index < $this.n17_1 ? index : index + $this.o17_1 | 0;
  }
  function dataIndexToDataAddress($this, dataIndex) {
    return dataIndex < $this.r17_1 ? dataIndex : dataIndex + $this.s17_1 | 0;
  }
  function parent(_this__u8e3s4, $this, index) {
    return parentAnchorToIndex($this, parentAnchor(_this__u8e3s4, groupIndexToAddress($this, index)));
  }
  function dataIndex($this, index) {
    return dataIndex_0($this.j17_1, $this, groupIndexToAddress($this, index));
  }
  function dataIndex_0(_this__u8e3s4, $this, address) {
    return address >= _get_capacity__a9k9f3($this) ? $this.k17_1.length - $this.s17_1 | 0 : dataAnchorToDataIndex($this, dataAnchor(_this__u8e3s4, address), $this.s17_1, $this.k17_1.length);
  }
  function slotIndex(_this__u8e3s4, $this, address) {
    return address >= _get_capacity__a9k9f3($this) ? $this.k17_1.length - $this.s17_1 | 0 : dataAnchorToDataIndex($this, slotAnchor(_this__u8e3s4, address), $this.s17_1, $this.k17_1.length);
  }
  function updateDataIndex(_this__u8e3s4, $this, address, dataIndex) {
    updateDataAnchor(_this__u8e3s4, address, dataIndexToDataAnchor($this, dataIndex, $this.r17_1, $this.s17_1, $this.k17_1.length));
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
    return index < gapStart ? index : -(($this.l() - index | 0) - -2 | 0) | 0;
  }
  function parentAnchorToIndex($this, index) {
    return index > -2 ? index : ($this.l() + index | 0) - -2 | 0;
  }
  function SlotWriter$groupSlots$1($start, $end, this$0) {
    this.r1r_1 = $end;
    this.s1r_1 = this$0;
    this.q1r_1 = $start;
  }
  protoOf(SlotWriter$groupSlots$1).b1 = function () {
    return this.q1r_1 < this.r1r_1;
  };
  protoOf(SlotWriter$groupSlots$1).d1 = function () {
    var tmp;
    if (this.b1()) {
      var tmp_0 = this.s1r_1.k17_1;
      var tmp1 = this.q1r_1;
      this.q1r_1 = tmp1 + 1 | 0;
      tmp = tmp_0[dataIndexToDataAddress(this.s1r_1, tmp1)];
    } else {
      tmp = null;
    }
    return tmp;
  };
  function SlotWriter(table) {
    this.i17_1 = table;
    this.j17_1 = this.i17_1.k15_1;
    this.k17_1 = this.i17_1.m15_1;
    this.l17_1 = this.i17_1.s15_1;
    this.m17_1 = this.i17_1.t15_1;
    this.n17_1 = this.i17_1.l15_1;
    this.o17_1 = (this.j17_1.length / 5 | 0) - this.i17_1.l15_1 | 0;
    this.p17_1 = 0;
    this.q17_1 = 0;
    this.r17_1 = this.i17_1.n15_1;
    this.s17_1 = this.k17_1.length - this.i17_1.n15_1 | 0;
    this.t17_1 = this.i17_1.l15_1;
    this.u17_1 = 0;
    this.v17_1 = 0;
    this.w17_1 = new IntStack();
    this.x17_1 = new IntStack();
    this.y17_1 = new IntStack();
    this.z17_1 = 0;
    this.a18_1 = this.i17_1.l15_1;
    this.b18_1 = -1;
    this.c18_1 = false;
    this.d18_1 = null;
  }
  protoOf(SlotWriter).x1f = function () {
    return this.z17_1 < this.a18_1 ? isNode(this.j17_1, groupIndexToAddress(this, this.z17_1)) : false;
  };
  protoOf(SlotWriter).b1b = function (index) {
    return isNode(this.j17_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).c1b = function (index) {
    return nodeCount(this.j17_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).o18 = function (index) {
    return key(this.j17_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).n18 = function (index) {
    var address = groupIndexToAddress(this, index);
    return hasObjectKey(this.j17_1, address) ? this.k17_1[objectKeyIndex(this.j17_1, address)] : null;
  };
  protoOf(SlotWriter).h1a = function (index) {
    return groupSize(this.j17_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).m18 = function (index) {
    var address = groupIndexToAddress(this, index);
    return hasAux(this.j17_1, address) ? this.k17_1[auxIndex(this.j17_1, this, address)] : Companion_getInstance_0().z18_1;
  };
  protoOf(SlotWriter).t1r = function (index) {
    return (index > this.b18_1 ? index < this.a18_1 : false) ? true : this.b18_1 === 0 ? index === 0 : false;
  };
  protoOf(SlotWriter).u1r = function (index) {
    return this.v1r(index, this.z17_1);
  };
  protoOf(SlotWriter).v1r = function (index, group) {
    var tmp;
    if (group === this.b18_1) {
      tmp = this.a18_1;
    } else if (group > this.w17_1.x1r(0)) {
      tmp = group + this.h1a(group) | 0;
    } else {
      var openIndex = this.w17_1.w1r(group);
      tmp = openIndex < 0 ? group + this.h1a(group) | 0 : (_get_capacity__a9k9f3(this) - this.o17_1 | 0) - this.x17_1.a1b(openIndex) | 0;
    }
    var end = tmp;
    return index > group ? index < end : false;
  };
  protoOf(SlotWriter).a1d = function (index) {
    var address = groupIndexToAddress(this, index);
    return isNode(this.j17_1, address) ? this.k17_1[dataIndexToDataAddress(this, nodeIndex(this.j17_1, this, address))] : null;
  };
  protoOf(SlotWriter).y1r = function (anchor) {
    return this.a1d(anchor.z1r(this));
  };
  protoOf(SlotWriter).p18 = function (index) {
    return parent(this.j17_1, this, index);
  };
  protoOf(SlotWriter).g17 = function () {
    this.c18_1 = true;
    if (this.w17_1.s()) {
      moveGroupGapTo(this, this.l());
      moveSlotGapTo(this, this.k17_1.length - this.s17_1 | 0, this.n17_1);
      clearSlotGap(this);
      recalculateMarks(this);
    }
    this.i17_1.b1r(this, this.j17_1, this.n17_1, this.k17_1, this.r17_1, this.l17_1, this.m17_1);
  };
  protoOf(SlotWriter).a1s = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.u17_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.reset.<anonymous>' call
      var message = 'Cannot reset when inserting';
      composeRuntimeError(toString(message));
    }
    recalculateMarks(this);
    this.z17_1 = 0;
    this.a18_1 = _get_capacity__a9k9f3(this) - this.o17_1 | 0;
    this.p17_1 = 0;
    this.q17_1 = 0;
    this.v17_1 = 0;
  };
  protoOf(SlotWriter).h1f = function (value) {
    var result = this.b1s();
    this.c1s(value);
    return result;
  };
  protoOf(SlotWriter).l1r = function (value) {
    var address = groupIndexToAddress(this, this.z17_1);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!hasAux(this.j17_1, address)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.updateAux.<anonymous>' call
      var message = 'Updating the data of a group that was not created with a data slot';
      composeRuntimeError(toString(message));
    }
    this.k17_1[dataIndexToDataAddress(this, auxIndex(this.j17_1, this, address))] = value;
  };
  protoOf(SlotWriter).h1g = function (sourceInformation) {
    if (this.u17_1 > 0) {
      groupSourceInformationFor(this, this.b18_1, sourceInformation);
    }
  };
  protoOf(SlotWriter).j1g = function (key, value) {
    if (this.u17_1 > 0) {
      groupSourceInformationFor(this, this.b18_1, null).d1s(key, value);
    }
  };
  protoOf(SlotWriter).l1g = function () {
    if (this.u17_1 > 0) {
      groupSourceInformationFor(this, this.b18_1, null).e1s();
    }
  };
  protoOf(SlotWriter).m1r = function (value) {
    return updateNodeOfGroup(this, this.z17_1, value);
  };
  protoOf(SlotWriter).f1s = function (anchor, value) {
    return updateNodeOfGroup(this, anchor.z1r(this), value);
  };
  protoOf(SlotWriter).c1s = function (value) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.p17_1 <= this.q17_1)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.set.<anonymous>' call
      var message = 'Writing to an invalid slot';
      composeRuntimeError(toString(message));
    }
    this.k17_1[dataIndexToDataAddress(this, this.p17_1 - 1 | 0)] = value;
  };
  protoOf(SlotWriter).g1s = function (index, value) {
    return this.h1s(this.z17_1, index, value);
  };
  protoOf(SlotWriter).h1s = function (group, index, value) {
    var address = groupIndexToAddress(this, group);
    var slotsStart = slotIndex(this.j17_1, this, address);
    var slotsEnd = dataIndex_0(this.j17_1, this, groupIndexToAddress(this, group + 1 | 0));
    var slotsIndex = slotsStart + index | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(slotsIndex >= slotsStart ? slotsIndex < slotsEnd : false)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.set.<anonymous>' call
      var message = 'Write to an invalid slot index ' + index + ' for group ' + group;
      composeRuntimeError(toString(message));
    }
    var slotAddress = dataIndexToDataAddress(this, slotsIndex);
    var result = this.k17_1[slotAddress];
    this.k17_1[slotAddress] = value;
    return result;
  };
  protoOf(SlotWriter).b1s = function () {
    if (this.u17_1 > 0) {
      insertSlots(this, 1, this.b18_1);
    }
    var tmp = this.k17_1;
    var tmp1 = this.p17_1;
    this.p17_1 = tmp1 + 1 | 0;
    return tmp[dataIndexToDataAddress(this, tmp1)];
  };
  protoOf(SlotWriter).m1m = function (anchor, index) {
    return this.p1m(this.w1b(anchor), index);
  };
  protoOf(SlotWriter).p1m = function (groupIndex, index) {
    var address = groupIndexToAddress(this, groupIndex);
    var slotsStart = slotIndex(this.j17_1, this, address);
    var slotsEnd = dataIndex_0(this.j17_1, this, groupIndexToAddress(this, groupIndex + 1 | 0));
    var slotsIndex = slotsStart + index | 0;
    if (!(slotsStart <= slotsIndex ? slotsIndex < slotsEnd : false)) {
      return Companion_getInstance_0().z18_1;
    }
    var slotAddress = dataIndexToDataAddress(this, slotsIndex);
    return this.k17_1[slotAddress];
  };
  protoOf(SlotWriter).j1r = function (amount) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(amount >= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      var message = 'Cannot seek backwards';
      composeRuntimeError(toString(message));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.u17_1 <= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      var message_0 = 'Cannot call seek() while inserting';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    if (amount === 0)
      return Unit_instance;
    var index = this.z17_1 + amount | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(index >= this.b18_1 ? index <= this.a18_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      var message_1 = 'Cannot seek outside the current group (' + this.b18_1 + '-' + this.a18_1 + ')';
      composeRuntimeError(toString(message_1));
    }
    this.z17_1 = index;
    var newSlot = dataIndex_0(this.j17_1, this, groupIndexToAddress(this, index));
    this.p17_1 = newSlot;
    this.q17_1 = newSlot;
  };
  protoOf(SlotWriter).t18 = function () {
    var newGroup = this.a18_1;
    this.z17_1 = newGroup;
    this.p17_1 = dataIndex_0(this.j17_1, this, groupIndexToAddress(this, newGroup));
  };
  protoOf(SlotWriter).p19 = function () {
    var tmp1 = this.u17_1;
    this.u17_1 = tmp1 + 1 | 0;
    if (tmp1 === 0) {
      saveCurrentGroupEnd(this);
    }
  };
  protoOf(SlotWriter).u1a = function () {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.u17_1 > 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.endInsert.<anonymous>' call
      var message = 'Unbalanced begin/end insert';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.u17_1 = this.u17_1 - 1 | 0;
    if (this.u17_1 === 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(this.y17_1.l() === this.w17_1.l())) {
        // Inline function 'androidx.compose.runtime.SlotWriter.endInsert.<anonymous>' call
        var message_0 = 'startGroup/endGroup mismatch while inserting';
        composeRuntimeError(toString(message_0));
      }
      restoreCurrentGroupEnd(this);
    }
  };
  protoOf(SlotWriter).w18 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.u17_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.startGroup.<anonymous>' call
      var message = 'Key must be supplied when inserting';
      composeRuntimeError(toString(message));
    }
    startGroup_1(this, 0, Companion_getInstance_0().z18_1, false, Companion_getInstance_0().z18_1);
  };
  protoOf(SlotWriter).a19 = function (key, dataKey) {
    return startGroup_1(this, key, dataKey, false, Companion_getInstance_0().z18_1);
  };
  protoOf(SlotWriter).c19 = function (key, objectKey) {
    return startGroup_1(this, key, objectKey, true, Companion_getInstance_0().z18_1);
  };
  protoOf(SlotWriter).b19 = function (key, objectKey, aux) {
    return startGroup_1(this, key, objectKey, false, aux);
  };
  protoOf(SlotWriter).t1a = function () {
    var inserting = this.u17_1 > 0;
    var currentGroup = this.z17_1;
    var currentGroupEnd = this.a18_1;
    var groupIndex = this.b18_1;
    var groupAddress = groupIndexToAddress(this, groupIndex);
    var newNodes = this.v17_1;
    var newGroupSize = currentGroup - groupIndex | 0;
    var isNode_0 = isNode(this.j17_1, groupAddress);
    if (inserting) {
      updateGroupSize(this.j17_1, groupAddress, newGroupSize);
      updateNodeCount_0(this.j17_1, groupAddress, newNodes);
      this.v17_1 = this.y17_1.d1a() + (isNode_0 ? 1 : newNodes) | 0;
      this.b18_1 = parent(this.j17_1, this, groupIndex);
    } else {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(currentGroup === currentGroupEnd)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.endGroup.<anonymous>' call
        var message = 'Expected to be at the end of a group';
        composeRuntimeError(toString(message));
      }
      var oldGroupSize = groupSize(this.j17_1, groupAddress);
      var oldNodes = nodeCount(this.j17_1, groupAddress);
      updateGroupSize(this.j17_1, groupAddress, newGroupSize);
      updateNodeCount_0(this.j17_1, groupAddress, newNodes);
      var newParent = this.w17_1.d1a();
      restoreCurrentGroupEnd(this);
      this.b18_1 = newParent;
      var groupParent = parent(this.j17_1, this, groupIndex);
      this.v17_1 = this.y17_1.d1a();
      if (groupParent === newParent) {
        this.v17_1 = this.v17_1 + (isNode_0 ? 0 : newNodes - oldNodes | 0) | 0;
      } else {
        var groupSizeDelta = newGroupSize - oldGroupSize | 0;
        var nodesDelta = isNode_0 ? 0 : newNodes - oldNodes | 0;
        if (!(groupSizeDelta === 0) ? true : !(nodesDelta === 0)) {
          var current = groupParent;
          while ((!(current === 0) ? !(current === newParent) : false) ? !(nodesDelta === 0) ? true : !(groupSizeDelta === 0) : false) {
            var currentAddress = groupIndexToAddress(this, current);
            if (!(groupSizeDelta === 0)) {
              var newSize = groupSize(this.j17_1, currentAddress) + groupSizeDelta | 0;
              updateGroupSize(this.j17_1, currentAddress, newSize);
            }
            if (!(nodesDelta === 0)) {
              updateNodeCount_0(this.j17_1, currentAddress, nodeCount(this.j17_1, currentAddress) + nodesDelta | 0);
            }
            if (isNode(this.j17_1, currentAddress))
              nodesDelta = 0;
            current = parent(this.j17_1, this, current);
          }
        }
        this.v17_1 = this.v17_1 + nodesDelta | 0;
      }
    }
    return newNodes;
  };
  protoOf(SlotWriter).i1s = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.u17_1 <= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.ensureStarted.<anonymous>' call
      var message = 'Cannot call ensureStarted() while inserting';
      composeRuntimeError(toString(message));
    }
    var parent = this.b18_1;
    if (!(parent === index)) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(index >= parent ? index < this.a18_1 : false)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.ensureStarted.<anonymous>' call
        var message_0 = 'Started group at ' + index + ' must be a subgroup of the group at ' + parent;
        composeRuntimeError(toString(message_0));
      }
      var oldCurrent = this.z17_1;
      var oldCurrentSlot = this.p17_1;
      var oldCurrentSlotEnd = this.q17_1;
      this.z17_1 = index;
      this.w18();
      this.z17_1 = oldCurrent;
      this.p17_1 = oldCurrentSlot;
      this.q17_1 = oldCurrentSlotEnd;
    }
  };
  protoOf(SlotWriter).j1s = function (anchor) {
    return this.i1s(anchor.z1r(this));
  };
  protoOf(SlotWriter).j18 = function () {
    var groupAddress = groupIndexToAddress(this, this.z17_1);
    var newGroup = this.z17_1 + groupSize(this.j17_1, groupAddress) | 0;
    this.z17_1 = newGroup;
    this.p17_1 = dataIndex_0(this.j17_1, this, groupIndexToAddress(this, newGroup));
    return isNode(this.j17_1, groupAddress) ? 1 : nodeCount(this.j17_1, groupAddress);
  };
  protoOf(SlotWriter).w1g = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.u17_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.removeGroup.<anonymous>' call
      var message = 'Cannot remove group while inserting';
      composeRuntimeError(toString(message));
    }
    var oldGroup = this.z17_1;
    var oldSlot = this.p17_1;
    var count = this.j18();
    var tmp0_safe_receiver = sourceInformationOf(this, this.b18_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotWriter.removeGroup.<anonymous>' call
      var tmp0_safe_receiver_0 = this.z1q(oldGroup);
      var tmp;
      if (tmp0_safe_receiver_0 == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SlotWriter.removeGroup.<anonymous>.<anonymous>' call
        tmp = tmp0_safe_receiver.k1s(tmp0_safe_receiver_0);
      }
    }
    var tmp1_safe_receiver = this.d18_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      while (tmp1_safe_receiver.v1f() ? tmp1_safe_receiver.s1e() >= oldGroup : false) {
        tmp1_safe_receiver.o1r();
      }
    }
    var anchorsRemoved = removeGroups(this, oldGroup, this.z17_1 - oldGroup | 0);
    removeSlots(this, oldSlot, this.p17_1 - oldSlot | 0, oldGroup - 1 | 0);
    this.z17_1 = oldGroup;
    this.p17_1 = oldSlot;
    this.v17_1 = this.v17_1 - count | 0;
    return anchorsRemoved;
  };
  protoOf(SlotWriter).t1g = function () {
    var start = dataIndex_0(this.j17_1, this, groupIndexToAddress(this, this.z17_1));
    var end = dataIndex_0(this.j17_1, this, groupIndexToAddress(this, this.z17_1 + this.h1a(this.z17_1) | 0));
    return new SlotWriter$groupSlots$1(start, end, this);
  };
  protoOf(SlotWriter).l1s = function (offset) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.u17_1 === 0)) {
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
    var current = this.z17_1;
    var parent = this.b18_1;
    var parentEnd = this.a18_1;
    var count = offset;
    var groupToMove = current;
    while (count > 0) {
      groupToMove = groupToMove + groupSize(this.j17_1, groupIndexToAddress(this, groupToMove)) | 0;
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(groupToMove <= parentEnd)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
        var message_1 = 'Parameter offset is out of bounds';
        composeRuntimeError(toString(message_1));
      }
      count = count - 1 | 0;
    }
    var moveLen = groupSize(this.j17_1, groupIndexToAddress(this, groupToMove));
    var currentSlot = this.p17_1;
    var dataStart = dataIndex_0(this.j17_1, this, groupIndexToAddress(this, groupToMove));
    var dataEnd = dataIndex_0(this.j17_1, this, groupIndexToAddress(this, groupToMove + moveLen | 0));
    var moveDataLen = dataEnd - dataStart | 0;
    // Inline function 'kotlin.math.max' call
    var a = this.z17_1 - 1 | 0;
    var tmp$ret$3 = Math.max(a, 0);
    insertSlots(this, moveDataLen, tmp$ret$3);
    insertGroups(this, moveLen);
    var groups = this.j17_1;
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
      var slots = this.k17_1;
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = dataIndexToDataAddress(this, dataStart + moveDataLen | 0);
      var endIndex_0 = dataIndexToDataAddress(this, dataEnd + moveDataLen | 0);
      arrayCopy(slots, slots, currentSlot, startIndex, endIndex_0);
    }
    var dataMoveDistance = (dataStart + moveDataLen | 0) - currentSlot | 0;
    var slotsGapStart = this.r17_1;
    var slotsGapLen = this.s17_1;
    var slotsCapacity = this.k17_1.length;
    var slotsGapOwner = this.t17_1;
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
    fixParentAnchorsFor(this, parent, this.a18_1, current);
    if (moveDataLen > 0) {
      removeSlots(this, dataStart + moveDataLen | 0, moveDataLen, (groupToMove + moveLen | 0) - 1 | 0);
    }
  };
  protoOf(SlotWriter).m1s = function (anchor, offset, writer) {
    runtimeCheck(writer.u17_1 > 0);
    runtimeCheck(this.u17_1 === 0);
    runtimeCheck(anchor.u1i());
    var location = this.w1b(anchor) + offset | 0;
    var currentGroup = this.z17_1;
    runtimeCheck(currentGroup <= location ? location < this.a18_1 : false);
    var parent = this.p18(location);
    var size = this.h1a(location);
    var nodes = this.b1b(location) ? 1 : this.c1b(location);
    var result = moveGroup$default(Companion_instance_4, this, location, writer, false, false);
    updateContainsMark(this, parent);
    var current = parent;
    var updatingNodes = nodes > 0;
    while (current >= currentGroup) {
      var currentAddress = groupIndexToAddress(this, current);
      updateGroupSize(this.j17_1, currentAddress, groupSize(this.j17_1, currentAddress) - size | 0);
      if (updatingNodes) {
        if (isNode(this.j17_1, currentAddress))
          updatingNodes = false;
        else {
          updateNodeCount_0(this.j17_1, currentAddress, nodeCount(this.j17_1, currentAddress) - nodes | 0);
        }
      }
      current = this.p18(current);
    }
    if (updatingNodes) {
      runtimeCheck(this.v17_1 >= nodes);
      this.v17_1 = this.v17_1 - nodes | 0;
    }
    return result;
  };
  protoOf(SlotWriter).n1s = function (table, index, removeSourceGroup) {
    runtimeCheck(this.u17_1 > 0);
    if (((index === 0 ? this.z17_1 === 0 : false) ? this.i17_1.l15_1 === 0 : false) ? groupSize(table.k15_1, index) === table.l15_1 : false) {
      var myGroups = this.j17_1;
      var mySlots = this.k17_1;
      var myAnchors = this.l17_1;
      var mySourceInformation = this.m17_1;
      var groups = table.k15_1;
      var groupsSize = table.l15_1;
      var slots = table.m15_1;
      var slotsSize = table.n15_1;
      var sourceInformation = table.t15_1;
      this.j17_1 = groups;
      this.k17_1 = slots;
      this.l17_1 = table.s15_1;
      this.n17_1 = groupsSize;
      this.o17_1 = (groups.length / 5 | 0) - groupsSize | 0;
      this.r17_1 = slotsSize;
      this.s17_1 = slots.length - slotsSize | 0;
      this.t17_1 = groupsSize;
      this.m17_1 = sourceInformation;
      table.c1r(myGroups, 0, mySlots, 0, myAnchors, mySourceInformation);
      return this.l17_1;
    }
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = table.s18();
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveFrom.<anonymous>' call
      tmp = moveGroup(Companion_instance_4, writer, index, this, true, true, removeSourceGroup);
    }finally {
      writer.g17();
    }
    return tmp;
  };
  protoOf(SlotWriter).o1s = function (offset, table, index) {
    runtimeCheck(this.u17_1 <= 0 ? this.h1a(this.z17_1 + offset | 0) === 1 : false);
    var previousCurrentGroup = this.z17_1;
    var previousCurrentSlot = this.p17_1;
    var previousCurrentSlotEnd = this.q17_1;
    this.j1r(offset);
    this.w18();
    this.p19();
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = table.s18();
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveIntoGroupFrom.<anonymous>' call
      tmp = moveGroup$default(Companion_instance_4, writer, index, this, false, true);
    }finally {
      writer.g17();
    }
    var anchors = tmp;
    this.u1a();
    this.t1a();
    this.z17_1 = previousCurrentGroup;
    this.p17_1 = previousCurrentSlot;
    this.q17_1 = previousCurrentSlotEnd;
    return anchors;
  };
  protoOf(SlotWriter).q19 = function (index) {
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var this_0 = this.l17_1;
    var effectiveSize = this.l();
    var location = search$accessor$145qfty(this_0, index, effectiveSize);
    var tmp;
    if (location < 0) {
      // Inline function 'androidx.compose.runtime.SlotWriter.anchor.<anonymous>' call
      var anchor = new Anchor(index <= this.n17_1 ? index : -(this.l() - index | 0) | 0);
      this_0.w1(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = this_0.m(location);
    }
    return tmp;
  };
  protoOf(SlotWriter).p1s = function (group) {
    var groupAddress = groupIndexToAddress(this, group);
    if (!hasMark(this.j17_1, groupAddress)) {
      updateMark(this.j17_1, groupAddress, true);
      if (!containsMark(this.j17_1, groupAddress)) {
        updateContainsMark(this, this.p18(group));
      }
    }
  };
  protoOf(SlotWriter).l1b = function (group, $super) {
    group = group === VOID ? this.b18_1 : group;
    var tmp;
    if ($super === VOID) {
      this.p1s(group);
      tmp = Unit_instance;
    } else {
      tmp = $super.p1s.call(this, group);
    }
    return tmp;
  };
  protoOf(SlotWriter).w1b = function (anchor) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotWriter.anchorIndex.<anonymous>' call
    var it = anchor.t1c_1;
    return it < 0 ? this.l() + it | 0 : it;
  };
  protoOf(SlotWriter).toString = function () {
    return 'SlotWriter(current = ' + this.z17_1 + ' end=' + this.a18_1 + ' size = ' + this.l() + ' ' + ('gap=' + this.n17_1 + '-' + (this.n17_1 + this.o17_1 | 0) + ')');
  };
  protoOf(SlotWriter).z1q = function (group) {
    return (0 <= group ? group < this.l() : false) ? find(this.l17_1, group, this.l()) : null;
  };
  protoOf(SlotWriter).l = function () {
    return _get_capacity__a9k9f3(this) - this.o17_1 | 0;
  };
  function Anchor(loc) {
    this.t1c_1 = loc;
  }
  protoOf(Anchor).u1i = function () {
    return !(this.t1c_1 === IntCompanionObject_instance.MIN_VALUE);
  };
  protoOf(Anchor).w1f = function (slots) {
    return slots.w1b(this);
  };
  protoOf(Anchor).z1r = function (writer) {
    return writer.w1b(this);
  };
  protoOf(Anchor).toString = function () {
    return anyToString(this) + '{ location = ' + this.t1c_1 + ' }';
  };
  function openInformation($this) {
    var tmp0_safe_receiver = $this.g1r_1;
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
        var index = tmp0_safe_receiver.l() - 1 | 0;
        while (index >= 0) {
          var value = tmp0_safe_receiver.m(index);
          // Inline function 'androidx.compose.runtime.GroupSourceInformation.openInformation.<anonymous>.<anonymous>' call
          var tmp_0;
          if (value instanceof GroupSourceInformation) {
            tmp_0 = !value.h1r_1;
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
    var tmp0_elvis_lhs = $this.g1r_1;
    var groups = tmp0_elvis_lhs == null ? ArrayList_init_$Create$() : tmp0_elvis_lhs;
    $this.g1r_1 = groups;
    groups.y(group);
  }
  function hasAnchor($this, anchor) {
    var tmp0_safe_receiver = $this.g1r_1;
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
        var last = tmp0_safe_receiver.l() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = tmp0_safe_receiver.m(index);
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
    this.e1r_1 = key;
    this.f1r_1 = sourceInformation;
    this.g1r_1 = null;
    this.h1r_1 = false;
  }
  protoOf(GroupSourceInformation).d1s = function (key, sourceInformation) {
    add(openInformation(this), new GroupSourceInformation(key, sourceInformation));
  };
  protoOf(GroupSourceInformation).e1s = function () {
    openInformation(this).g17();
  };
  protoOf(GroupSourceInformation).k1r = function (writer, group) {
    add(openInformation(this), writer.q19(group));
  };
  protoOf(GroupSourceInformation).q1s = function (table, group) {
    add(openInformation(this), table.q19(group));
  };
  protoOf(GroupSourceInformation).i1r = function (writer, predecessor, group) {
    var tmp0_elvis_lhs = this.g1r_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = ArrayList_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.GroupSourceInformation.addGroupAfter.<anonymous>' call
      this.g1r_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var groups = tmp;
    var tmp_0;
    if (predecessor >= 0) {
      var anchor = writer.z1q(predecessor);
      var tmp_1;
      if (!(anchor == null)) {
        var tmp$ret$2;
        $l$block: {
          // Inline function 'androidx.compose.runtime.fastIndexOf' call
          var index = 0;
          var size = groups.l();
          while (index < size) {
            var value = groups.m(index);
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
    groups.w1(index_0, writer.q19(group));
  };
  protoOf(GroupSourceInformation).g17 = function () {
    this.h1r_1 = true;
  };
  protoOf(GroupSourceInformation).k1s = function (anchor) {
    var groups = this.g1r_1;
    if (!(groups == null)) {
      var index = groups.l() - 1 | 0;
      while (index >= 0) {
        var item = groups.m(index);
        if (item instanceof Anchor) {
          if (equals(item, anchor)) {
            groups.k1(index);
          }
        } else {
          if (item instanceof GroupSourceInformation)
            if (!item.k1s(anchor)) {
              groups.k1(index);
            }
        }
        index = index - 1 | 0;
      }
      if (groups.s()) {
        this.g1r_1 = null;
        return false;
      }
      return true;
    }
    return true;
  };
  function node(_this__u8e3s4, $this, index) {
    var tmp;
    if (isNode(_this__u8e3s4, index)) {
      tmp = $this.w16_1[nodeIndex_0(_this__u8e3s4, index)];
    } else {
      tmp = Companion_getInstance_0().z18_1;
    }
    return tmp;
  }
  function aux(_this__u8e3s4, $this, index) {
    var tmp;
    if (hasAux(_this__u8e3s4, index)) {
      tmp = $this.w16_1[auxIndex_0(_this__u8e3s4, index)];
    } else {
      tmp = Companion_getInstance_0().z18_1;
    }
    return tmp;
  }
  function objectKey(_this__u8e3s4, $this, index) {
    var tmp;
    if (hasObjectKey(_this__u8e3s4, index)) {
      tmp = $this.w16_1[objectKeyIndex(_this__u8e3s4, index)];
    } else {
      tmp = null;
    }
    return tmp;
  }
  function SlotReader(table) {
    this.t16_1 = table;
    this.u16_1 = this.t16_1.k15_1;
    this.v16_1 = this.t16_1.l15_1;
    this.w16_1 = this.t16_1.m15_1;
    this.x16_1 = this.t16_1.n15_1;
    this.y16_1 = null;
    this.z16_1 = false;
    this.a17_1 = 0;
    this.b17_1 = this.v16_1;
    this.c17_1 = -1;
    this.d17_1 = 0;
    this.e17_1 = 0;
    this.f17_1 = 0;
  }
  protoOf(SlotReader).l = function () {
    return this.v16_1;
  };
  protoOf(SlotReader).p18 = function (index) {
    return parentAnchor(this.u16_1, index);
  };
  protoOf(SlotReader).x1f = function () {
    return isNode(this.u16_1, this.a17_1);
  };
  protoOf(SlotReader).b1b = function (index) {
    return isNode(this.u16_1, index);
  };
  protoOf(SlotReader).c1b = function (index) {
    return nodeCount(this.u16_1, index);
  };
  protoOf(SlotReader).a1d = function (index) {
    return isNode(this.u16_1, index) ? node(this.u16_1, this, index) : null;
  };
  protoOf(SlotReader).n1a = function () {
    return this.w1a() ? true : this.a17_1 === this.b17_1;
  };
  protoOf(SlotReader).w1a = function () {
    return this.d17_1 > 0;
  };
  protoOf(SlotReader).r1s = function () {
    return groupSize(this.u16_1, this.a17_1);
  };
  protoOf(SlotReader).h1a = function (index) {
    return groupSize(this.u16_1, index);
  };
  protoOf(SlotReader).m1a = function () {
    return this.b17_1;
  };
  protoOf(SlotReader).l19 = function () {
    var tmp;
    if (this.a17_1 < this.b17_1) {
      tmp = key(this.u16_1, this.a17_1);
    } else {
      tmp = 0;
    }
    return tmp;
  };
  protoOf(SlotReader).o18 = function (index) {
    return key(this.u16_1, index);
  };
  protoOf(SlotReader).f1f = function () {
    return this.e17_1 - slotAnchor(this.u16_1, this.c17_1) | 0;
  };
  protoOf(SlotReader).e1b = function (index) {
    return hasObjectKey(this.u16_1, index);
  };
  protoOf(SlotReader).n19 = function () {
    return this.a17_1 < this.b17_1 ? objectKey(this.u16_1, this, this.a17_1) : null;
  };
  protoOf(SlotReader).n18 = function (index) {
    return objectKey(this.u16_1, this, index);
  };
  protoOf(SlotReader).v18 = function () {
    return this.a17_1 < this.b17_1 ? aux(this.u16_1, this, this.a17_1) : 0;
  };
  protoOf(SlotReader).m18 = function (index) {
    return aux(this.u16_1, this, index);
  };
  protoOf(SlotReader).y1d = function (index) {
    return hasMark(this.u16_1, index);
  };
  protoOf(SlotReader).i1d = function (index) {
    return containsMark(this.u16_1, index);
  };
  protoOf(SlotReader).f1b = function () {
    return this.c17_1 >= 0 ? nodeCount(this.u16_1, this.c17_1) : 0;
  };
  protoOf(SlotReader).j1d = function (group, index) {
    var start = slotAnchor(this.u16_1, group);
    var next = group + 1 | 0;
    var end = next < this.v16_1 ? dataAnchor(this.u16_1, next) : this.x16_1;
    var address = start + index | 0;
    return address < end ? this.w16_1[address] : Companion_getInstance_0().z18_1;
  };
  protoOf(SlotReader).d1 = function () {
    if (this.d17_1 > 0 ? true : this.e17_1 >= this.f17_1)
      return Companion_getInstance_0().z18_1;
    var tmp1 = this.e17_1;
    this.e17_1 = tmp1 + 1 | 0;
    return this.w16_1[tmp1];
  };
  protoOf(SlotReader).y18 = function () {
    this.d17_1 = this.d17_1 + 1 | 0;
  };
  protoOf(SlotReader).s1a = function () {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.d17_1 > 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.endEmpty.<anonymous>' call
      var message = 'Unbalanced begin/end empty';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.d17_1 = this.d17_1 - 1 | 0;
  };
  protoOf(SlotReader).g17 = function () {
    this.z16_1 = true;
    this.t16_1.a1r(this, this.y16_1);
  };
  protoOf(SlotReader).w18 = function () {
    if (this.d17_1 <= 0) {
      var parent = this.c17_1;
      var currentGroup = this.a17_1;
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(parentAnchor(this.u16_1, currentGroup) === parent)) {
        // Inline function 'androidx.compose.runtime.SlotReader.startGroup.<anonymous>' call
        var message = 'Invalid slot table detected';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      var tmp0_safe_receiver = this.y16_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u2(this.q19(parent));
      if (tmp1_safe_receiver == null)
        null;
      else {
        tmp1_safe_receiver.q1s(this.t16_1, currentGroup);
      }
      this.c17_1 = currentGroup;
      this.b17_1 = currentGroup + groupSize(this.u16_1, currentGroup) | 0;
      this.a17_1 = currentGroup + 1 | 0;
      this.e17_1 = slotAnchor(this.u16_1, currentGroup);
      this.f17_1 = currentGroup >= (this.v16_1 - 1 | 0) ? this.x16_1 : dataAnchor(this.u16_1, currentGroup + 1 | 0);
    }
  };
  protoOf(SlotReader).x18 = function () {
    if (this.d17_1 <= 0) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!isNode(this.u16_1, this.a17_1)) {
        // Inline function 'androidx.compose.runtime.SlotReader.startNode.<anonymous>' call
        var message = 'Expected a node group';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      this.w18();
    }
  };
  protoOf(SlotReader).j18 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.d17_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.skipGroup.<anonymous>' call
      var message = 'Cannot skip while in an empty region';
      composeRuntimeError(toString(message));
    }
    var count = isNode(this.u16_1, this.a17_1) ? 1 : nodeCount(this.u16_1, this.a17_1);
    this.a17_1 = this.a17_1 + groupSize(this.u16_1, this.a17_1) | 0;
    return count;
  };
  protoOf(SlotReader).t18 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.d17_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.skipToGroupEnd.<anonymous>' call
      var message = 'Cannot skip the enclosing group while in an empty region';
      composeRuntimeError(toString(message));
    }
    this.a17_1 = this.b17_1;
  };
  protoOf(SlotReader).a1a = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.d17_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.reposition.<anonymous>' call
      var message = 'Cannot reposition while in an empty region';
      composeRuntimeError(toString(message));
    }
    this.a17_1 = index;
    var parent = index < this.v16_1 ? parentAnchor(this.u16_1, index) : -1;
    this.c17_1 = parent;
    if (parent < 0)
      this.b17_1 = this.v16_1;
    else
      this.b17_1 = parent + groupSize(this.u16_1, parent) | 0;
    this.e17_1 = 0;
    this.f17_1 = 0;
  };
  protoOf(SlotReader).z1a = function (index) {
    var newCurrentEnd = index + groupSize(this.u16_1, index) | 0;
    var current = this.a17_1;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(current >= index ? current <= newCurrentEnd : false)) {
      // Inline function 'androidx.compose.runtime.SlotReader.restoreParent.<anonymous>' call
      var message = 'Index ' + index + ' is not a parent of ' + current;
      composeRuntimeError(toString(message));
    }
    this.c17_1 = index;
    this.b17_1 = newCurrentEnd;
    this.e17_1 = 0;
    this.f17_1 = 0;
  };
  protoOf(SlotReader).q1a = function () {
    if (this.d17_1 === 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(this.a17_1 === this.b17_1)) {
        // Inline function 'androidx.compose.runtime.SlotReader.endGroup.<anonymous>' call
        var message = 'endGroup() not called at the end of a group';
        composeRuntimeError(toString(message));
      }
      var parent = parentAnchor(this.u16_1, this.c17_1);
      this.c17_1 = parent;
      this.b17_1 = parent < 0 ? this.v16_1 : parent + groupSize(this.u16_1, parent) | 0;
    }
  };
  protoOf(SlotReader).m19 = function () {
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    if (this.d17_1 > 0)
      return result;
    var index = 0;
    var childIndex = this.a17_1;
    while (childIndex < this.b17_1) {
      var tmp = key(this.u16_1, childIndex);
      var tmp_0 = objectKey(this.u16_1, this, childIndex);
      var tmp_1 = childIndex;
      var tmp_2 = isNode(this.u16_1, childIndex) ? 1 : nodeCount(this.u16_1, childIndex);
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      result.y(new KeyInfo(tmp, tmp_0, tmp_1, tmp_2, tmp0));
      childIndex = childIndex + groupSize(this.u16_1, childIndex) | 0;
    }
    return result;
  };
  protoOf(SlotReader).toString = function () {
    return 'SlotReader(current=' + this.a17_1 + ', key=' + this.l19() + ', ' + ('parent=' + this.c17_1 + ', end=' + this.b17_1 + ')');
  };
  protoOf(SlotReader).q19 = function (index) {
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var this_0 = this.t16_1.s15_1;
    var effectiveSize = this.v16_1;
    var location = search$accessor$145qfty(this_0, index, effectiveSize);
    var tmp;
    if (location < 0) {
      // Inline function 'androidx.compose.runtime.SlotReader.anchor.<anonymous>' call
      var anchor = new Anchor(index);
      this_0.w1(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = this_0.m(location);
    }
    return tmp;
  };
  function find(_this__u8e3s4, index, effectiveSize) {
    var location = search$accessor$145qfty(_this__u8e3s4, index, effectiveSize);
    return location >= 0 ? _this__u8e3s4.m(location) : null;
  }
  function search(_this__u8e3s4, location, effectiveSize) {
    var low = 0;
    var high = _this__u8e3s4.l() - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.search.<anonymous>' call
      var it = _this__u8e3s4.m(mid).t1c_1;
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
    if (!($this.s1s_1.r15_1 === $this.v1s_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function GroupIterator(table, start, end) {
    this.s1s_1 = table;
    this.t1s_1 = end;
    this.u1s_1 = start;
    this.v1s_1 = this.s1s_1.r15_1;
    if (this.s1s_1.q15_1)
      throw ConcurrentModificationException_init_$Create$();
  }
  protoOf(GroupIterator).b1 = function () {
    return this.u1s_1 < this.t1s_1;
  };
  protoOf(GroupIterator).d1 = function () {
    validateRead(this);
    var group = this.u1s_1;
    this.u1s_1 = this.u1s_1 + groupSize(this.s1s_1.k15_1, group) | 0;
    return new SlotTableGroup(this.s1s_1, group, this.v1s_1);
  };
  function validateRead_0($this) {
    if (!($this.w1s_1.r15_1 === $this.y1s_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function SlotTableGroup(table, group, version) {
    version = version === VOID ? table.r15_1 : version;
    this.w1s_1 = table;
    this.x1s_1 = group;
    this.y1s_1 = version;
  }
  protoOf(SlotTableGroup).n = function () {
    validateRead_0(this);
    var tmp0_safe_receiver = this.w1s_1.d1r(this.x1s_1);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTableGroup.iterator.<anonymous>' call
      tmp = new SourceInformationGroupIterator(this.w1s_1, tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? new GroupIterator(this.w1s_1, this.x1s_1 + 1 | 0, this.x1s_1 + groupSize(this.w1s_1.k15_1, this.x1s_1) | 0) : tmp1_elvis_lhs;
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
    this.n1r_1 = list;
  }
  protoOf(PrioritySet).p1r = function (value) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.n1r_1.s()) {
      tmp = this.n1r_1.m(0) === value ? true : this.n1r_1.m(this.n1r_1.l() - 1 | 0) === value;
    } else {
      tmp = false;
    }
    if (tmp)
      return Unit_instance;
    var index = this.n1r_1.l();
    this.n1r_1.y(value);
    $l$loop: while (index > 0) {
      var parent = ((index + 1 | 0) >>> 1 | 0) - 1 | 0;
      var parentValue = this.n1r_1.m(parent);
      if (value > parentValue) {
        this.n1r_1.v(index, parentValue);
      } else
        break $l$loop;
      index = parent;
    }
    this.n1r_1.v(index, value);
  };
  protoOf(PrioritySet).v1f = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    return !this.n1r_1.s();
  };
  protoOf(PrioritySet).s1e = function () {
    return first(this.n1r_1);
  };
  protoOf(PrioritySet).o1r = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.n1r_1.l() > 0)) {
      // Inline function 'androidx.compose.runtime.PrioritySet.takeMax.<anonymous>' call
      var message = 'Set is empty';
      composeRuntimeError(toString(message));
    }
    var value = this.n1r_1.m(0);
    $l$loop: while (true) {
      var tmp;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!this.n1r_1.s()) {
        tmp = this.n1r_1.m(0) === value;
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      this.n1r_1.v(0, last(this.n1r_1));
      this.n1r_1.k1(this.n1r_1.l() - 1 | 0);
      var index = 0;
      var size = this.n1r_1.l();
      var max = this.n1r_1.l() >>> 1 | 0;
      $l$loop_2: while (index < max) {
        var indexValue = this.n1r_1.m(index);
        var left = imul(index + 1 | 0, 2) - 1 | 0;
        var leftValue = this.n1r_1.m(left);
        var right = imul(index + 1 | 0, 2);
        if (right < size) {
          var rightValue = this.n1r_1.m(right);
          if (rightValue > leftValue) {
            if (rightValue > indexValue) {
              this.n1r_1.v(index, rightValue);
              this.n1r_1.v(right, indexValue);
              index = right;
              continue $l$loop_2;
            } else
              break $l$loop_2;
          }
        }
        if (leftValue > indexValue) {
          this.n1r_1.v(index, leftValue);
          this.n1r_1.v(left, indexValue);
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
    var it = search$accessor$145qfty(_this__u8e3s4, index, effectiveSize);
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
    this.r19_1 = key;
    this.s19_1 = objectKey;
    this.t19_1 = location;
    this.u19_1 = nodes;
    this.v19_1 = index;
  }
  function SourceInformationGroupIterator(table, group) {
    this.z1s_1 = table;
    this.a1t_1 = group;
    this.b1t_1 = this.z1s_1.r15_1;
    this.c1t_1 = 0;
  }
  protoOf(SourceInformationGroupIterator).b1 = function () {
    var tmp0_safe_receiver = this.a1t_1.g1r_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SourceInformationGroupIterator.hasNext.<anonymous>' call
      tmp = this.c1t_1 < tmp0_safe_receiver.l();
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(SourceInformationGroupIterator).d1 = function () {
    var tmp2_safe_receiver = this.a1t_1.g1r_1;
    var tmp;
    if (tmp2_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp1 = this.c1t_1;
      this.c1t_1 = tmp1 + 1 | 0;
      tmp = tmp2_safe_receiver.m(tmp1);
    }
    var group = tmp;
    var tmp_0;
    if (group instanceof Anchor) {
      tmp_0 = new SlotTableGroup(this.z1s_1, group.t1c_1, this.b1t_1);
    } else {
      if (group instanceof GroupSourceInformation) {
        tmp_0 = new SourceInformationSlotTableGroup(this.z1s_1, group);
      } else {
        composeRuntimeError('Unexpected group information structure');
      }
    }
    return tmp_0;
  };
  function SourceInformationSlotTableGroup(table, sourceInformation) {
    this.d1t_1 = table;
    this.e1t_1 = sourceInformation;
    this.f1t_1 = this.e1t_1.e1r_1;
    this.g1t_1 = emptyList();
    this.h1t_1 = this;
  }
  protoOf(SourceInformationSlotTableGroup).n = function () {
    return new SourceInformationGroupIterator(this.d1t_1, this.e1t_1);
  };
  function search$accessor$145qfty(_this__u8e3s4, location, effectiveSize) {
    return search(_this__u8e3s4, location, effectiveSize);
  }
  function SnapshotMutationPolicy() {
  }
  function structuralEqualityPolicy() {
    var tmp = StructuralEqualityPolicy_instance;
    return isInterface(tmp, SnapshotMutationPolicy) ? tmp : THROW_CCE();
  }
  function StructuralEqualityPolicy() {
  }
  protoOf(StructuralEqualityPolicy).j1t = function (a, b) {
    return equals(a, b);
  };
  protoOf(StructuralEqualityPolicy).u1m = function (a, b) {
    var tmp = (a == null ? true : !(a == null)) ? a : THROW_CCE();
    return this.j1t(tmp, (b == null ? true : !(b == null)) ? b : THROW_CCE());
  };
  protoOf(StructuralEqualityPolicy).toString = function () {
    return 'StructuralEqualityPolicy';
  };
  var StructuralEqualityPolicy_instance;
  function StructuralEqualityPolicy_getInstance() {
    return StructuralEqualityPolicy_instance;
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
    this.m1t_1 = myValue;
  }
  protoOf(StateStateRecord).n1t = function (value) {
    var tmp = this;
    tmp.m1t_1 = (value instanceof StateStateRecord ? value : THROW_CCE()).m1t_1;
  };
  protoOf(StateStateRecord).o1t = function () {
    return new StateStateRecord(this.m1t_1);
  };
  function SnapshotMutableStateImpl(value, policy) {
    StateObjectImpl.call(this);
    this.q1t_1 = policy;
    this.r1t_1 = new StateStateRecord(value);
  }
  protoOf(SnapshotMutableStateImpl).a1l = function () {
    return this.q1t_1;
  };
  protoOf(SnapshotMutableStateImpl).kv = function (value) {
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var this_0 = this.r1t_1;
    var it = current(this_0);
    var tmp;
    if (!this.a1l().u1m(it.m1t_1, value)) {
      // Inline function 'androidx.compose.runtime.snapshots.overwritable' call
      var this_1 = this.r1t_1;
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
      snapshot = Companion_instance_12.x11();
      overwritableRecord(this_1, this, snapshot, it).m1t_1 = value;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
      notifyWrite(snapshot, this);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(SnapshotMutableStateImpl).o2 = function () {
    return readable_0(this.r1t_1, this).m1t_1;
  };
  protoOf(SnapshotMutableStateImpl).s1t = function () {
    return this.r1t_1;
  };
  protoOf(SnapshotMutableStateImpl).t1t = function (value) {
    var tmp = this;
    tmp.r1t_1 = value instanceof StateStateRecord ? value : THROW_CCE();
  };
  protoOf(SnapshotMutableStateImpl).u1t = function (previous, current, applied) {
    var previousRecord = previous instanceof StateStateRecord ? previous : THROW_CCE();
    var currentRecord = current instanceof StateStateRecord ? current : THROW_CCE();
    var appliedRecord = applied instanceof StateStateRecord ? applied : THROW_CCE();
    var tmp;
    if (this.a1l().u1m(currentRecord.m1t_1, appliedRecord.m1t_1)) {
      tmp = current;
    } else {
      var merged = this.a1l().i1t(previousRecord.m1t_1, currentRecord.m1t_1, appliedRecord.m1t_1);
      var tmp_0;
      if (!(merged == null)) {
        // Inline function 'kotlin.also' call
        var this_0 = appliedRecord.o1t();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.mergeRecords.<anonymous>' call
        (this_0 instanceof StateStateRecord ? this_0 : THROW_CCE()).m1t_1 = merged;
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
    var this_0 = this.r1t_1;
    // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.toString.<anonymous>' call
    return 'MutableState(value=' + current(this_0).m1t_1 + ')@' + hashCode(this);
  };
  function mutableStateListOf() {
    return new SnapshotStateList();
  }
  function SnapshotThreadLocal() {
    this.b1l_1 = new AtomicReference(get_emptyThreadMap());
    this.c1l_1 = new SynchronizedObject();
  }
  protoOf(SnapshotThreadLocal).lq = function () {
    var tmp = this.b1l_1.lq().y1t(currentThreadId());
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(SnapshotThreadLocal).d1l = function (value) {
    var key = currentThreadId();
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.c1l_1;
    var current = this.b1l_1.lq();
    if (current.z1t(key, value))
      return Unit_instance;
    this.b1l_1.w1i(current.a1u(key, value));
  };
  function IntStack() {
    this.x15_1 = new Int32Array(10);
    this.y15_1 = 0;
  }
  protoOf(IntStack).l = function () {
    return this.y15_1;
  };
  protoOf(IntStack).z15 = function (value) {
    if (this.y15_1 >= this.x15_1.length) {
      this.x15_1 = copyOf(this.x15_1, imul(this.x15_1.length, 2));
    }
    var tmp = this.x15_1;
    var tmp1 = this.y15_1;
    this.y15_1 = tmp1 + 1 | 0;
    tmp[tmp1] = value;
  };
  protoOf(IntStack).d1a = function () {
    var tmp = this.x15_1;
    this.y15_1 = this.y15_1 - 1 | 0;
    return tmp[this.y15_1];
  };
  protoOf(IntStack).x1r = function (default_0) {
    return this.y15_1 > 0 ? this.s1e() : default_0;
  };
  protoOf(IntStack).s1e = function () {
    return this.x15_1[this.y15_1 - 1 | 0];
  };
  protoOf(IntStack).a1b = function (index) {
    return this.x15_1[index];
  };
  protoOf(IntStack).s = function () {
    return this.y15_1 === 0;
  };
  protoOf(IntStack).f1 = function () {
    this.y15_1 = 0;
  };
  protoOf(IntStack).w1r = function (value) {
    var inductionVariable = 0;
    var last = this.y15_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (this.x15_1[i] === value)
          return i;
      }
       while (inductionVariable < last);
    return -1;
  };
  function Stack() {
    this.h17_1 = ArrayList_init_$Create$();
  }
  protoOf(Stack).l = function () {
    return this.h17_1.l();
  };
  protoOf(Stack).c1a = function (value) {
    return this.h17_1.y(value);
  };
  protoOf(Stack).d1a = function () {
    return this.h17_1.k1(this.l() - 1 | 0);
  };
  protoOf(Stack).s1e = function () {
    return this.h17_1.m(this.l() - 1 | 0);
  };
  protoOf(Stack).a1b = function (index) {
    return this.h17_1.m(index);
  };
  protoOf(Stack).s = function () {
    return this.h17_1.s();
  };
  protoOf(Stack).v1f = function () {
    return !this.s();
  };
  protoOf(Stack).f1 = function () {
    return this.h17_1.f1();
  };
  protoOf(Stack).e3 = function () {
    var tmp = 0;
    var tmp_0 = this.h17_1.l();
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(tmp_0), null);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      tmp_1[tmp_2] = this.h17_1.m(tmp_2);
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
    var this_0 = $this.z1k_1;
    current$factory();
    return this_0.o2();
  }
  function LazyValueHolder(valueProducer) {
    this.z1k_1 = lazy(valueProducer);
  }
  protoOf(LazyValueHolder).o2 = function () {
    return _get_current__qcrdxk(this);
  };
  function StaticValueHolder(value) {
    this.b1u_1 = value;
  }
  protoOf(StaticValueHolder).o2 = function () {
    return this.b1u_1;
  };
  protoOf(StaticValueHolder).toString = function () {
    return 'StaticValueHolder(value=' + this.b1u_1 + ')';
  };
  protoOf(StaticValueHolder).hashCode = function () {
    return this.b1u_1 == null ? 0 : hashCode(this.b1u_1);
  };
  protoOf(StaticValueHolder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StaticValueHolder))
      return false;
    var tmp0_other_with_cast = other instanceof StaticValueHolder ? other : THROW_CCE();
    if (!equals(this.b1u_1, tmp0_other_with_cast.b1u_1))
      return false;
    return true;
  };
  function current$factory() {
    return getPropertyCallableRef('current', 1, KProperty1, function (receiver) {
      return _get_current__qcrdxk(receiver);
    }, null);
  }
  function ChangeList() {
    this.n1g_1 = new Operations();
  }
  protoOf(ChangeList).s = function () {
    return this.n1g_1.s();
  };
  protoOf(ChangeList).v1f = function () {
    return this.n1g_1.v1f();
  };
  protoOf(ChangeList).f1 = function () {
    this.n1g_1.f1();
  };
  protoOf(ChangeList).m1i = function (applier, slots, rememberManager) {
    return this.n1g_1.k1u(applier, slots, rememberManager);
  };
  protoOf(ChangeList).l1u = function (value) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.n1g_1;
    var operation = Remember_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.m1u(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushRemember.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.Remember.Value' call
    Remember_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, value);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.i1u_1 === createExpectedArgMask(this_0, operation.n1u_1) ? this_0.j1u_1 === createExpectedArgMask(this_0, operation.o1u_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.n1u_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.i1u_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.w5(', ');
            }
            this_1.w5(operation.p1u(_IntParameter___init__impl__oy5xkp(index)));
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
      var times_0 = operation.o1u_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.j1u_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.w5(', ');
            }
            this_2.w5(operation.q1u(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).r1u = function (value, groupSlotIndex) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.n1g_1;
    var operation = UpdateValue_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.m1u(operation);
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
    if (!(this_0.i1u_1 === createExpectedArgMask(this_0, operation.n1u_1) ? this_0.j1u_1 === createExpectedArgMask(this_0, operation.o1u_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.n1u_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.i1u_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.w5(', ');
            }
            this_1.w5(operation.p1u(_IntParameter___init__impl__oy5xkp(index)));
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
      var times_0 = operation.o1u_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.j1u_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.w5(', ');
            }
            this_2.w5(operation.q1u(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).s1u = function () {
    this.n1g_1.t1u(ResetSlots_getInstance());
  };
  protoOf(ChangeList).u1u = function (data) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.n1g_1;
    var operation = UpdateAuxData_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.m1u(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushUpdateAuxData.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateAuxData.Data' call
    UpdateAuxData_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, data);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.i1u_1 === createExpectedArgMask(this_0, operation.n1u_1) ? this_0.j1u_1 === createExpectedArgMask(this_0, operation.o1u_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.n1u_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.i1u_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.w5(', ');
            }
            this_1.w5(operation.p1u(_IntParameter___init__impl__oy5xkp(index)));
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
      var times_0 = operation.o1u_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.j1u_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.w5(', ');
            }
            this_2.w5(operation.q1u(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).v1u = function () {
    this.n1g_1.t1u(EnsureRootGroupStarted_getInstance());
  };
  protoOf(ChangeList).w1u = function (anchor) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.n1g_1;
    var operation = EnsureGroupStarted_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.m1u(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushEnsureGroupStarted.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.EnsureGroupStarted.Anchor' call
    EnsureGroupStarted_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, anchor);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.i1u_1 === createExpectedArgMask(this_0, operation.n1u_1) ? this_0.j1u_1 === createExpectedArgMask(this_0, operation.o1u_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.n1u_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.i1u_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.w5(', ');
            }
            this_1.w5(operation.p1u(_IntParameter___init__impl__oy5xkp(index)));
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
      var times_0 = operation.o1u_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.j1u_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.w5(', ');
            }
            this_2.w5(operation.q1u(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).x1u = function () {
    this.n1g_1.t1u(EndCurrentGroup_getInstance());
  };
  protoOf(ChangeList).y1u = function () {
    this.n1g_1.t1u(SkipToEndOfCurrentGroup_getInstance());
  };
  protoOf(ChangeList).z1u = function () {
    this.n1g_1.t1u(RemoveCurrentGroup_getInstance());
  };
  protoOf(ChangeList).a1v = function (anchor, from) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.n1g_1;
    var operation = InsertSlots_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.m1u(operation);
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
    if (!(this_0.i1u_1 === createExpectedArgMask(this_0, operation.n1u_1) ? this_0.j1u_1 === createExpectedArgMask(this_0, operation.o1u_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.n1u_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.i1u_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.w5(', ');
            }
            this_1.w5(operation.p1u(_IntParameter___init__impl__oy5xkp(index)));
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
      var times_0 = operation.o1u_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.j1u_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.w5(', ');
            }
            this_2.w5(operation.q1u(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).b1v = function (anchor, from, fixups) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.n1g_1;
    var operation = InsertSlotsWithFixups_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.m1u(operation);
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
    if (!(this_0.i1u_1 === createExpectedArgMask(this_0, operation.n1u_1) ? this_0.j1u_1 === createExpectedArgMask(this_0, operation.o1u_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.n1u_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.i1u_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.w5(', ');
            }
            this_1.w5(operation.p1u(_IntParameter___init__impl__oy5xkp(index)));
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
      var times_0 = operation.o1u_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.j1u_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.w5(', ');
            }
            this_2.w5(operation.q1u(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).c1v = function (offset) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.n1g_1;
    var operation = MoveCurrentGroup_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.m1u(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushMoveCurrentGroup.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.MoveCurrentGroup.Offset' call
    MoveCurrentGroup_getInstance();
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$0, offset);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.i1u_1 === createExpectedArgMask(this_0, operation.n1u_1) ? this_0.j1u_1 === createExpectedArgMask(this_0, operation.o1u_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.n1u_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.i1u_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.w5(', ');
            }
            this_1.w5(operation.p1u(_IntParameter___init__impl__oy5xkp(index)));
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
      var times_0 = operation.o1u_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.j1u_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.w5(', ');
            }
            this_2.w5(operation.q1u(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).d1v = function (action, composition) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.n1g_1;
    var operation = EndCompositionScope_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.m1u(operation);
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
    if (!(this_0.i1u_1 === createExpectedArgMask(this_0, operation.n1u_1) ? this_0.j1u_1 === createExpectedArgMask(this_0, operation.o1u_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.n1u_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.i1u_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.w5(', ');
            }
            this_1.w5(operation.p1u(_IntParameter___init__impl__oy5xkp(index)));
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
      var times_0 = operation.o1u_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.j1u_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.w5(', ');
            }
            this_2.w5(operation.q1u(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).e1v = function (node) {
    if (!(node == null) ? isInterface(node, ComposeNodeLifecycleCallback) : false) {
      this.n1g_1.t1u(UseCurrentNode_getInstance());
    }
  };
  protoOf(ChangeList).f1v = function (value, block) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.n1g_1;
    var operation = UpdateNode_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.m1u(operation);
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
    if (!(this_0.i1u_1 === createExpectedArgMask(this_0, operation.n1u_1) ? this_0.j1u_1 === createExpectedArgMask(this_0, operation.o1u_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.n1u_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.i1u_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.w5(', ');
            }
            this_1.w5(operation.p1u(_IntParameter___init__impl__oy5xkp(index)));
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
      var times_0 = operation.o1u_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.j1u_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.w5(', ');
            }
            this_2.w5(operation.q1u(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).g1v = function (removeFrom, moveCount) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.n1g_1;
    var operation = RemoveNode_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.m1u(operation);
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
    if (!(this_0.i1u_1 === createExpectedArgMask(this_0, operation.n1u_1) ? this_0.j1u_1 === createExpectedArgMask(this_0, operation.o1u_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.n1u_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.i1u_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.w5(', ');
            }
            this_1.w5(operation.p1u(_IntParameter___init__impl__oy5xkp(index)));
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
      var times_0 = operation.o1u_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.j1u_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.w5(', ');
            }
            this_2.w5(operation.q1u(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).h1v = function (to, from, count) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.n1g_1;
    var operation = MoveNode_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.m1u(operation);
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
    if (!(this_0.i1u_1 === createExpectedArgMask(this_0, operation.n1u_1) ? this_0.j1u_1 === createExpectedArgMask(this_0, operation.o1u_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.n1u_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.i1u_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.w5(', ');
            }
            this_1.w5(operation.p1u(_IntParameter___init__impl__oy5xkp(index)));
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
      var times_0 = operation.o1u_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.j1u_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.w5(', ');
            }
            this_2.w5(operation.q1u(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).i1v = function (distance) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.n1g_1;
    var operation = AdvanceSlotsBy_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.m1u(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushAdvanceSlotsBy.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.AdvanceSlotsBy.Distance' call
    AdvanceSlotsBy_getInstance();
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$0, distance);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.i1u_1 === createExpectedArgMask(this_0, operation.n1u_1) ? this_0.j1u_1 === createExpectedArgMask(this_0, operation.o1u_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.n1u_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.i1u_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.w5(', ');
            }
            this_1.w5(operation.p1u(_IntParameter___init__impl__oy5xkp(index)));
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
      var times_0 = operation.o1u_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.j1u_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.w5(', ');
            }
            this_2.w5(operation.q1u(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).j1v = function (count) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.n1g_1;
    var operation = Ups_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.m1u(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushUps.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.Ups.Count' call
    Ups_getInstance();
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$0, count);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.i1u_1 === createExpectedArgMask(this_0, operation.n1u_1) ? this_0.j1u_1 === createExpectedArgMask(this_0, operation.o1u_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.n1u_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.i1u_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.w5(', ');
            }
            this_1.w5(operation.p1u(_IntParameter___init__impl__oy5xkp(index)));
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
      var times_0 = operation.o1u_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.j1u_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.w5(', ');
            }
            this_2.w5(operation.q1u(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).k1v = function (nodes) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(nodes.length === 0)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
      var this_0 = this.n1g_1;
      var operation = Downs_getInstance();
      // Inline function 'kotlin.contracts.contract' call
      this_0.m1u(operation);
      // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushDowns.<anonymous>' call
      var $this$push = _WriteScope___init__impl__4xwato(this_0);
      // Inline function 'androidx.compose.runtime.changelist.Downs.Nodes' call
      Downs_getInstance();
      var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(0);
      WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$2, nodes);
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this_0.i1u_1 === createExpectedArgMask(this_0, operation.n1u_1) ? this_0.j1u_1 === createExpectedArgMask(this_0, operation.o1u_1) : false)) {
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
        var missingIntCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_1 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times = operation.n1u_1;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        if (inductionVariable < times)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index & this_0.i1u_1) === 0)) {
              if (missingIntCount > 0) {
                this_1.w5(', ');
              }
              this_1.w5(operation.p1u(_IntParameter___init__impl__oy5xkp(index)));
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
        var times_0 = operation.o1u_1;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < times_0)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index_0 & this_0.j1u_1) === 0)) {
              if (missingIntCount > 0) {
                this_2.w5(', ');
              }
              this_2.w5(operation.q1u(_ObjectParameter___init__impl__iyg1ip(index_0)));
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
  protoOf(ChangeList).l1v = function (effectiveNodeIndexOut, anchor) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.n1g_1;
    var operation = DetermineMovableContentNodeIndex_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.m1u(operation);
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
    if (!(this_0.i1u_1 === createExpectedArgMask(this_0, operation.n1u_1) ? this_0.j1u_1 === createExpectedArgMask(this_0, operation.o1u_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.n1u_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.i1u_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.w5(', ');
            }
            this_1.w5(operation.p1u(_IntParameter___init__impl__oy5xkp(index)));
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
      var times_0 = operation.o1u_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.j1u_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.w5(', ');
            }
            this_2.w5(operation.q1u(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).m1v = function (nodes, effectiveNodeIndex) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!nodes.s()) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
      var this_0 = this.n1g_1;
      var operation = CopyNodesToNewAnchorLocation_getInstance();
      // Inline function 'kotlin.contracts.contract' call
      this_0.m1u(operation);
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
      if (!(this_0.i1u_1 === createExpectedArgMask(this_0, operation.n1u_1) ? this_0.j1u_1 === createExpectedArgMask(this_0, operation.o1u_1) : false)) {
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
        var missingIntCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_1 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times = operation.n1u_1;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        if (inductionVariable < times)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index & this_0.i1u_1) === 0)) {
              if (missingIntCount > 0) {
                this_1.w5(', ');
              }
              this_1.w5(operation.p1u(_IntParameter___init__impl__oy5xkp(index)));
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
        var times_0 = operation.o1u_1;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < times_0)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index_0 & this_0.j1u_1) === 0)) {
              if (missingIntCount > 0) {
                this_2.w5(', ');
              }
              this_2.w5(operation.q1u(_ObjectParameter___init__impl__iyg1ip(index_0)));
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
  protoOf(ChangeList).n1v = function (resolvedState, parentContext, from, to) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.n1g_1;
    var operation = CopySlotTableToAnchorLocation_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.m1u(operation);
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
    if (!(this_0.i1u_1 === createExpectedArgMask(this_0, operation.n1u_1) ? this_0.j1u_1 === createExpectedArgMask(this_0, operation.o1u_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.n1u_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.i1u_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.w5(', ');
            }
            this_1.w5(operation.p1u(_IntParameter___init__impl__oy5xkp(index)));
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
      var times_0 = operation.o1u_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.j1u_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.w5(', ');
            }
            this_2.w5(operation.q1u(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).o1v = function (composition, parentContext, reference) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.n1g_1;
    var operation = ReleaseMovableGroupAtCurrent_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.m1u(operation);
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
    if (!(this_0.i1u_1 === createExpectedArgMask(this_0, operation.n1u_1) ? this_0.j1u_1 === createExpectedArgMask(this_0, operation.o1u_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.n1u_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.i1u_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.w5(', ');
            }
            this_1.w5(operation.p1u(_IntParameter___init__impl__oy5xkp(index)));
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
      var times_0 = operation.o1u_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.j1u_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.w5(', ');
            }
            this_2.w5(operation.q1u(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).p1v = function () {
    this.n1g_1.t1u(EndMovableContentPlacement_getInstance());
  };
  protoOf(ChangeList).q1v = function (changeList, effectiveNodeIndex) {
    if (changeList.v1f()) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
      var this_0 = this.n1g_1;
      var operation = ApplyChangeList_getInstance();
      // Inline function 'kotlin.contracts.contract' call
      this_0.m1u(operation);
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
      if (!(this_0.i1u_1 === createExpectedArgMask(this_0, operation.n1u_1) ? this_0.j1u_1 === createExpectedArgMask(this_0, operation.o1u_1) : false)) {
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
        var missingIntCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_1 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times = operation.n1u_1;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        if (inductionVariable < times)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index & this_0.i1u_1) === 0)) {
              if (missingIntCount > 0) {
                this_1.w5(', ');
              }
              this_1.w5(operation.p1u(_IntParameter___init__impl__oy5xkp(index)));
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
        var times_0 = operation.o1u_1;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < times_0)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index_0 & this_0.j1u_1) === 0)) {
              if (missingIntCount > 0) {
                this_2.w5(', ');
              }
              this_2.w5(operation.q1u(_ObjectParameter___init__impl__iyg1ip(index_0)));
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
    return $this.g16_1.w14_1;
  }
  function pushApplierOperationPreamble($this) {
    pushPendingUpsAndDowns($this);
  }
  function pushSlotEditingOperationPreamble($this) {
    realizeOperationLocation$default($this);
    $this.v1d();
  }
  function pushSlotTableOperationPreamble($this, useParentSlot) {
    realizeOperationLocation($this, useParentSlot);
  }
  function pushSlotTableOperationPreamble$default($this, useParentSlot, $super) {
    useParentSlot = useParentSlot === VOID ? false : useParentSlot;
    return pushSlotTableOperationPreamble($this, useParentSlot);
  }
  function ensureRootStarted($this) {
    if (!$this.i16_1 ? $this.k16_1 : false) {
      pushSlotTableOperationPreamble$default($this);
      $this.h16_1.v1u();
      $this.i16_1 = true;
    }
  }
  function ensureGroupStarted($this, anchor) {
    pushSlotTableOperationPreamble$default($this);
    $this.h16_1.w1u(anchor);
    $this.i16_1 = true;
  }
  function realizeOperationLocation($this, forParent) {
    var location = forParent ? _get_reader__fd8dw8($this).c17_1 : _get_reader__fd8dw8($this).a17_1;
    var distance = location - $this.l16_1 | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(distance >= 0)) {
      // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.realizeOperationLocation.<anonymous>' call
      var message = 'Tried to seek backward';
      composeRuntimeError(toString(message));
    }
    if (distance > 0) {
      $this.h16_1.i1v(distance);
      $this.l16_1 = location;
    }
  }
  function realizeOperationLocation$default($this, forParent, $super) {
    forParent = forParent === VOID ? false : forParent;
    return realizeOperationLocation($this, forParent);
  }
  function realizeNodeMovementOperations($this) {
    if ($this.r16_1 > 0) {
      if ($this.o16_1 >= 0) {
        realizeRemoveNode($this, $this.o16_1, $this.r16_1);
        $this.o16_1 = -1;
      } else {
        realizeMoveNode($this, $this.q16_1, $this.p16_1, $this.r16_1);
        $this.p16_1 = -1;
        $this.q16_1 = -1;
      }
      $this.r16_1 = 0;
    }
  }
  function realizeRemoveNode($this, removeFrom, moveCount) {
    pushApplierOperationPreamble($this);
    $this.h16_1.g1v(removeFrom, moveCount);
  }
  function realizeMoveNode($this, to, from, count) {
    pushApplierOperationPreamble($this);
    $this.h16_1.h1v(to, from, count);
  }
  function pushPendingUpsAndDowns($this) {
    if ($this.m16_1 > 0) {
      $this.h16_1.j1v($this.m16_1);
      $this.m16_1 = 0;
    }
    if ($this.n16_1.v1f()) {
      $this.h16_1.k1v($this.n16_1.e3());
      $this.n16_1.f1();
    }
  }
  function Companion_4() {
    this.r1v_1 = -2;
  }
  var Companion_instance_5;
  function Companion_getInstance_5() {
    return Companion_instance_5;
  }
  function ComposerChangeListWriter(composer, changeList) {
    this.g16_1 = composer;
    this.h16_1 = changeList;
    this.i16_1 = false;
    this.j16_1 = new IntStack();
    this.k16_1 = true;
    this.l16_1 = 0;
    this.m16_1 = 0;
    this.n16_1 = new Stack();
    this.o16_1 = -1;
    this.p16_1 = -1;
    this.q16_1 = -1;
    this.r16_1 = 0;
  }
  protoOf(ComposerChangeListWriter).z19 = function (location) {
    this.l16_1 = this.l16_1 + (location - _get_reader__fd8dw8(this).a17_1 | 0) | 0;
  };
  protoOf(ComposerChangeListWriter).c1c = function (location) {
    this.l16_1 = location;
  };
  protoOf(ComposerChangeListWriter).v1d = function () {
    if (_get_reader__fd8dw8(this).l() > 0) {
      var reader = _get_reader__fd8dw8(this);
      var location = reader.c17_1;
      if (!(this.j16_1.x1r(-2) === location)) {
        ensureRootStarted(this);
        if (location > 0) {
          var anchor = reader.q19(location);
          this.j16_1.z15(location);
          ensureGroupStarted(this, anchor);
        }
      }
    }
  };
  protoOf(ComposerChangeListWriter).j1f = function (value) {
    this.h16_1.l1u(value);
  };
  protoOf(ComposerChangeListWriter).g1f = function (value, groupSlotIndex) {
    pushSlotTableOperationPreamble(this, true);
    this.h16_1.r1u(value, groupSlotIndex);
  };
  protoOf(ComposerChangeListWriter).o1b = function () {
    this.h16_1.s1u();
  };
  protoOf(ComposerChangeListWriter).u18 = function (data) {
    pushSlotTableOperationPreamble$default(this);
    this.h16_1.u1u(data);
  };
  protoOf(ComposerChangeListWriter).s16 = function () {
    if (this.i16_1) {
      pushSlotTableOperationPreamble$default(this);
      pushSlotTableOperationPreamble$default(this);
      this.h16_1.x1u();
      this.i16_1 = false;
    }
  };
  protoOf(ComposerChangeListWriter).p1a = function () {
    var location = _get_reader__fd8dw8(this).c17_1;
    var currentStartedGroup = this.j16_1.x1r(-1);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(currentStartedGroup <= location)) {
      // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.endCurrentGroup.<anonymous>' call
      var message = 'Missed recording an endGroup';
      composeRuntimeError(toString(message));
    }
    if (this.j16_1.x1r(-1) === location) {
      pushSlotTableOperationPreamble$default(this);
      this.j16_1.d1a();
      this.h16_1.x1u();
    }
  };
  protoOf(ComposerChangeListWriter).e1c = function () {
    this.h16_1.y1u();
  };
  protoOf(ComposerChangeListWriter).d1d = function () {
    pushSlotEditingOperationPreamble(this);
    this.h16_1.z1u();
    this.l16_1 = this.l16_1 + _get_reader__fd8dw8(this).r1s() | 0;
  };
  protoOf(ComposerChangeListWriter).c1d = function (anchor, from) {
    pushPendingUpsAndDowns(this);
    pushSlotEditingOperationPreamble(this);
    this.h16_1.a1v(anchor, from);
  };
  protoOf(ComposerChangeListWriter).b1d = function (anchor, from, fixups) {
    pushPendingUpsAndDowns(this);
    pushSlotEditingOperationPreamble(this);
    this.h16_1.b1v(anchor, from, fixups);
  };
  protoOf(ComposerChangeListWriter).b1a = function (offset) {
    pushSlotEditingOperationPreamble(this);
    this.h16_1.c1v(offset);
  };
  protoOf(ComposerChangeListWriter).c1g = function (action, composition) {
    this.h16_1.d1v(action, composition);
  };
  protoOf(ComposerChangeListWriter).v1e = function (node) {
    pushApplierOperationPreamble(this);
    this.h16_1.e1v(node);
  };
  protoOf(ComposerChangeListWriter).y1e = function (value, block) {
    pushApplierOperationPreamble(this);
    this.h16_1.f1v(value, block);
  };
  protoOf(ComposerChangeListWriter).f1a = function (nodeIndex, count) {
    if (count > 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(nodeIndex >= 0)) {
        // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.removeNode.<anonymous>' call
        var message = 'Invalid remove index ' + nodeIndex;
        composeRuntimeError(toString(message));
      }
      if (this.o16_1 === nodeIndex) {
        this.r16_1 = this.r16_1 + count | 0;
      } else {
        realizeNodeMovementOperations(this);
        this.o16_1 = nodeIndex;
        this.r16_1 = count;
      }
    }
  };
  protoOf(ComposerChangeListWriter).j1a = function (from, to, count) {
    if (count > 0) {
      if ((this.r16_1 > 0 ? this.p16_1 === (from - this.r16_1 | 0) : false) ? this.q16_1 === (to - this.r16_1 | 0) : false) {
        this.r16_1 = this.r16_1 + count | 0;
      } else {
        realizeNodeMovementOperations(this);
        this.p16_1 = from;
        this.q16_1 = to;
        this.r16_1 = count;
      }
    }
  };
  protoOf(ComposerChangeListWriter).e1d = function () {
    pushPendingUpsAndDowns(this);
    if (this.i16_1) {
      this.e1c();
      this.s16();
    }
  };
  protoOf(ComposerChangeListWriter).l1a = function () {
    realizeNodeMovementOperations(this);
  };
  protoOf(ComposerChangeListWriter).x1d = function (nodeIndex, group) {
    this.l1a();
    pushPendingUpsAndDowns(this);
    var nodeCount = _get_reader__fd8dw8(this).b1b(group) ? 1 : _get_reader__fd8dw8(this).c1b(group);
    if (nodeCount > 0) {
      this.f1a(nodeIndex, nodeCount);
    }
  };
  protoOf(ComposerChangeListWriter).o1a = function () {
    if (this.n16_1.v1f()) {
      this.n16_1.d1a();
    } else {
      this.m16_1 = this.m16_1 + 1 | 0;
    }
  };
  protoOf(ComposerChangeListWriter).d1b = function (node) {
    this.n16_1.c1a(node);
  };
  protoOf(ComposerChangeListWriter).x1b = function (effectiveNodeIndexOut, anchor) {
    pushPendingUpsAndDowns(this);
    this.h16_1.l1v(effectiveNodeIndexOut, anchor);
  };
  protoOf(ComposerChangeListWriter).a1c = function (nodes, effectiveNodeIndex) {
    this.h16_1.m1v(nodes, effectiveNodeIndex);
  };
  protoOf(ComposerChangeListWriter).b1c = function (resolvedState, parentContext, from, to) {
    this.h16_1.n1v(resolvedState, parentContext, from, to);
  };
  protoOf(ComposerChangeListWriter).w1d = function (composition, parentContext, reference) {
    this.h16_1.o1v(composition, parentContext, reference);
  };
  protoOf(ComposerChangeListWriter).f1c = function () {
    this.h16_1.p1v();
    this.l16_1 = 0;
  };
  protoOf(ComposerChangeListWriter).d1c = function (other, effectiveNodeIndex) {
    this.h16_1.q1v(other, effectiveNodeIndex);
  };
  protoOf(ComposerChangeListWriter).g1d = function () {
    pushPendingUpsAndDowns(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!this.j16_1.s()) {
      // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.finalizeComposition.<anonymous>' call
      var message = 'Missed recording an endGroup()';
      composeRuntimeError(toString(message));
    }
  };
  protoOf(ComposerChangeListWriter).h1d = function () {
    this.i16_1 = false;
    this.j16_1.f1();
    this.l16_1 = 0;
  };
  function FixupList() {
    this.e18_1 = new Operations();
    this.f18_1 = new Operations();
  }
  protoOf(FixupList).s = function () {
    return this.e18_1.s();
  };
  protoOf(FixupList).f1 = function () {
    this.f18_1.f1();
    this.e18_1.f1();
  };
  protoOf(FixupList).s1v = function (applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!this.f18_1.s()) {
      // Inline function 'androidx.compose.runtime.changelist.FixupList.executeAndFlushAllPendingFixups.<anonymous>' call
      var message = 'FixupList has pending fixup operations that were not realized. Were there mismatched insertNode() and endNodeInsert() calls?';
      composeRuntimeError(toString(message));
    }
    this.e18_1.k1u(applier, slots, rememberManager);
  };
  protoOf(FixupList).t1e = function (factory, insertIndex, groupAnchor) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.e18_1;
    var operation = InsertNodeFixup_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.m1u(operation);
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
    if (!(this_0.i1u_1 === createExpectedArgMask(this_0, operation.n1u_1) ? this_0.j1u_1 === createExpectedArgMask(this_0, operation.o1u_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.n1u_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.i1u_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.w5(', ');
            }
            this_1.w5(operation.p1u(_IntParameter___init__impl__oy5xkp(index)));
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
      var times_0 = operation.o1u_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.j1u_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.w5(', ');
            }
            this_2.w5(operation.q1u(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_3 = this.f18_1;
    var operation_0 = PostInsertNodeFixup_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_3.m1u(operation_0);
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
    if (!(this_3.i1u_1 === createExpectedArgMask(this_3, operation_0.n1u_1) ? this_3.j1u_1 === createExpectedArgMask(this_3, operation_0.o1u_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount_0 = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_4 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_1 = operation_0.n1u_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_1 = 0;
      if (inductionVariable_1 < times_1)
        do {
          var index_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_1 & this_3.i1u_1) === 0)) {
            if (missingIntCount_0 > 0) {
              this_4.w5(', ');
            }
            this_4.w5(operation_0.p1u(_IntParameter___init__impl__oy5xkp(index_1)));
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
      var times_2 = operation_0.o1u_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_2 = 0;
      if (inductionVariable_2 < times_2)
        do {
          var index_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_2 & this_3.j1u_1) === 0)) {
            if (missingIntCount_0 > 0) {
              this_5.w5(', ');
            }
            this_5.w5(operation_0.q1u(_ObjectParameter___init__impl__iyg1ip(index_2)));
            missingObjectCount_0 = missingObjectCount_0 + 1 | 0;
          }
        }
         while (inductionVariable_2 < times_2);
      var missingObjects_0 = this_5.toString();
      var message_0 = 'Error while pushing ' + operation_0 + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount_0 + ' int arguments (' + missingInts_0 + ') ') + ('and ' + missingObjectCount_0 + ' object arguments (' + missingObjects_0 + ').');
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
  };
  protoOf(FixupList).r1a = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!this.f18_1.v1f()) {
      // Inline function 'androidx.compose.runtime.changelist.FixupList.endNodeInsert.<anonymous>' call
      var message = 'Cannot end node insertion, there are no pending operations that can be realized.';
      composeRuntimeError(toString(message));
    }
    this.f18_1.t1v(this.e18_1);
  };
  protoOf(FixupList).z1e = function (value, block) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.e18_1;
    var operation = UpdateNode_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.m1u(operation);
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
    if (!(this_0.i1u_1 === createExpectedArgMask(this_0, operation.n1u_1) ? this_0.j1u_1 === createExpectedArgMask(this_0, operation.o1u_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.n1u_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.i1u_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.w5(', ');
            }
            this_1.w5(operation.p1u(_IntParameter___init__impl__oy5xkp(index)));
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
      var times_0 = operation.o1u_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.j1u_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.w5(', ');
            }
            this_2.w5(operation.q1u(_ObjectParameter___init__impl__iyg1ip(index_0)));
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
  protoOf(Ups).p1u = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.Ups.Count' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'count';
    } else {
      tmp = protoOf(Operation).p1u.call(this, parameter);
    }
    return tmp;
  };
  protoOf(Ups).w1v = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'kotlin.repeat' call
    // Inline function 'androidx.compose.runtime.changelist.Ups.Count' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    var times = _this__u8e3s4.x1v(tmp$ret$0);
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.changelist.Ups.execute.<anonymous>' call
        applier.b12();
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
  protoOf(Downs).q1u = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.Downs.Nodes' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'nodes';
    } else {
      tmp = protoOf(Operation).q1u.call(this, parameter);
    }
    return tmp;
  };
  protoOf(Downs).w1v = function (_this__u8e3s4, applier, slots, rememberManager) {
    var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
    // Inline function 'androidx.compose.runtime.changelist.Downs.Nodes' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var nodes = _this__u8e3s4.b1w(tmp$ret$0);
    var inductionVariable = 0;
    var last = nodes.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        nodeApplier.a12(nodes[index]);
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
  protoOf(AdvanceSlotsBy).p1u = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.AdvanceSlotsBy.Distance' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'distance';
    } else {
      tmp = protoOf(Operation).p1u.call(this, parameter);
    }
    return tmp;
  };
  protoOf(AdvanceSlotsBy).w1v = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.AdvanceSlotsBy.Distance' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    slots.j1r(_this__u8e3s4.x1v(tmp$ret$0));
  };
  var AdvanceSlotsBy_instance;
  function AdvanceSlotsBy_getInstance() {
    if (AdvanceSlotsBy_instance == null)
      new AdvanceSlotsBy();
    return AdvanceSlotsBy_instance;
  }
  function Remember() {
    Remember_instance = this;
    Operation.call(this, VOID, 1);
  }
  protoOf(Remember).q1u = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.Remember.Value' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'value';
    } else {
      tmp = protoOf(Operation).q1u.call(this, parameter);
    }
    return tmp;
  };
  protoOf(Remember).w1v = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.Remember.Value' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    rememberManager.e1j(_this__u8e3s4.b1w(tmp$ret$0));
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
  protoOf(UpdateValue).p1u = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.GroupSlotIndex' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'groupSlotIndex';
    } else {
      tmp = protoOf(Operation).p1u.call(this, parameter);
    }
    return tmp;
  };
  protoOf(UpdateValue).q1u = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.Value' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'value';
    } else {
      tmp = protoOf(Operation).q1u.call(this, parameter);
    }
    return tmp;
  };
  protoOf(UpdateValue).w1v = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.Value' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var value = _this__u8e3s4.b1w(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.GroupSlotIndex' call
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(0);
    var groupSlotIndex = _this__u8e3s4.x1v(tmp$ret$1);
    if (value instanceof RememberObserverHolder) {
      rememberManager.e1j(value.b1f_1);
    }
    var previous = slots.g1s(groupSlotIndex, value);
    if (previous instanceof RememberObserverHolder) {
      rememberManager.v1g(previous.b1f_1);
    } else {
      if (previous instanceof RecomposeScopeImpl) {
        previous.vp();
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
  protoOf(UpdateAuxData).q1u = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateAuxData.Data' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'data';
    } else {
      tmp = protoOf(Operation).q1u.call(this, parameter);
    }
    return tmp;
  };
  protoOf(UpdateAuxData).w1v = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.UpdateAuxData.Data' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    slots.l1r(_this__u8e3s4.b1w(tmp$ret$0));
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
  protoOf(EnsureRootGroupStarted).w1v = function (_this__u8e3s4, applier, slots, rememberManager) {
    slots.i1s(0);
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
  protoOf(EnsureGroupStarted).q1u = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.EnsureGroupStarted.Anchor' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'anchor';
    } else {
      tmp = protoOf(Operation).q1u.call(this, parameter);
    }
    return tmp;
  };
  protoOf(EnsureGroupStarted).w1v = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.EnsureGroupStarted.Anchor' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    slots.j1s(_this__u8e3s4.b1w(tmp$ret$0));
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
  protoOf(RemoveCurrentGroup).w1v = function (_this__u8e3s4, applier, slots, rememberManager) {
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
  protoOf(MoveCurrentGroup).p1u = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.MoveCurrentGroup.Offset' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'offset';
    } else {
      tmp = protoOf(Operation).p1u.call(this, parameter);
    }
    return tmp;
  };
  protoOf(MoveCurrentGroup).w1v = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.MoveCurrentGroup.Offset' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    slots.l1s(_this__u8e3s4.x1v(tmp$ret$0));
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
  protoOf(EndCurrentGroup).w1v = function (_this__u8e3s4, applier, slots, rememberManager) {
    slots.t1a();
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
  protoOf(SkipToEndOfCurrentGroup).w1v = function (_this__u8e3s4, applier, slots, rememberManager) {
    slots.t18();
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
  protoOf(EndCompositionScope).q1u = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Action' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'anchor';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Composition' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'composition';
      } else {
        tmp = protoOf(Operation).q1u.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(EndCompositionScope).w1v = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Action' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var action = _this__u8e3s4.b1w(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Composition' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var composition = _this__u8e3s4.b1w(tmp$ret$1);
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
  protoOf(UseCurrentNode).w1v = function (_this__u8e3s4, applier, slots, rememberManager) {
    var tmp = applier.x11();
    ((!(tmp == null) ? isInterface(tmp, ComposeNodeLifecycleCallback) : false) ? tmp : THROW_CCE()).z12();
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
  protoOf(UpdateNode).q1u = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Value' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'value';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Block' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'block';
      } else {
        tmp = protoOf(Operation).q1u.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(UpdateNode).w1v = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Value' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var value = _this__u8e3s4.b1w(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Block' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var block = _this__u8e3s4.b1w(tmp$ret$1);
    block(applier.x11(), value);
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
  protoOf(RemoveNode).p1u = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.RemoveNode.RemoveIndex' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'removeIndex';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.RemoveNode.Count' call
      if (parameter === _IntParameter___init__impl__oy5xkp(1)) {
        tmp = 'count';
      } else {
        tmp = protoOf(Operation).p1u.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(RemoveNode).w1v = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.RemoveNode.RemoveIndex' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    var tmp = _this__u8e3s4.x1v(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.RemoveNode.Count' call
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(1);
    applier.e12(tmp, _this__u8e3s4.x1v(tmp$ret$1));
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
  protoOf(MoveNode).p1u = function (parameter) {
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
          tmp = protoOf(Operation).p1u.call(this, parameter);
        }
      }
    }
    return tmp;
  };
  protoOf(MoveNode).w1v = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.From' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    var tmp = _this__u8e3s4.x1v(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.To' call
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(1);
    var tmp_0 = _this__u8e3s4.x1v(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.Count' call
    var tmp$ret$2 = _IntParameter___init__impl__oy5xkp(2);
    applier.f12(tmp, tmp_0, _this__u8e3s4.x1v(tmp$ret$2));
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
  protoOf(InsertSlots).q1u = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.InsertSlots.Anchor' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'anchor';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.InsertSlots.FromSlotTable' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'from';
      } else {
        tmp = protoOf(Operation).q1u.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(InsertSlots).w1v = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.InsertSlots.FromSlotTable' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(1);
    var insertTable = _this__u8e3s4.b1w(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlots.Anchor' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(0);
    var anchor = _this__u8e3s4.b1w(tmp$ret$1);
    slots.p19();
    slots.n1s(insertTable, anchor.w1f(insertTable), false);
    slots.u1a();
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
  protoOf(InsertSlotsWithFixups).q1u = function (parameter) {
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
          tmp = protoOf(Operation).q1u.call(this, parameter);
        }
      }
    }
    return tmp;
  };
  protoOf(InsertSlotsWithFixups).w1v = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.FromSlotTable' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(1);
    var insertTable = _this__u8e3s4.b1w(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Anchor' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(0);
    var anchor = _this__u8e3s4.b1w(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Fixups' call
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(2);
    var fixups = _this__u8e3s4.b1w(tmp$ret$2);
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = insertTable.s18();
    var tmp;
    try {
      fixups.s1v(applier, writer, rememberManager);
      tmp = Unit_instance;
    }finally {
      writer.g17();
    }
    slots.p19();
    slots.n1s(insertTable, anchor.w1f(insertTable), false);
    slots.u1a();
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
  protoOf(InsertNodeFixup).p1u = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.InsertIndex' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'insertIndex';
    } else {
      tmp = protoOf(Operation).p1u.call(this, parameter);
    }
    return tmp;
  };
  protoOf(InsertNodeFixup).q1u = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.Factory' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'factory';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.GroupAnchor' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'groupAnchor';
      } else {
        tmp = protoOf(Operation).q1u.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(InsertNodeFixup).w1v = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.Factory' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var node = _this__u8e3s4.b1w(tmp$ret$0)();
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.GroupAnchor' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var groupAnchor = _this__u8e3s4.b1w(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.InsertIndex' call
    var tmp$ret$2 = _IntParameter___init__impl__oy5xkp(0);
    var insertIndex = _this__u8e3s4.x1v(tmp$ret$2);
    var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
    slots.f1s(groupAnchor, node);
    nodeApplier.c12(insertIndex, node);
    nodeApplier.a12(node);
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
  protoOf(PostInsertNodeFixup).p1u = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.InsertIndex' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'insertIndex';
    } else {
      tmp = protoOf(Operation).p1u.call(this, parameter);
    }
    return tmp;
  };
  protoOf(PostInsertNodeFixup).q1u = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.GroupAnchor' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'groupAnchor';
    } else {
      tmp = protoOf(Operation).q1u.call(this, parameter);
    }
    return tmp;
  };
  protoOf(PostInsertNodeFixup).w1v = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.GroupAnchor' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var groupAnchor = _this__u8e3s4.b1w(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.InsertIndex' call
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(0);
    var insertIndex = _this__u8e3s4.x1v(tmp$ret$1);
    applier.b12();
    var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
    var nodeToInsert = slots.y1r(groupAnchor);
    nodeApplier.d12(insertIndex, nodeToInsert);
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
  protoOf(ResetSlots).w1v = function (_this__u8e3s4, applier, slots, rememberManager) {
    slots.a1s();
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
  protoOf(DetermineMovableContentNodeIndex).q1u = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.EffectiveNodeIndexOut' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'effectiveNodeIndexOut';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.Anchor' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'anchor';
      } else {
        tmp = protoOf(Operation).q1u.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(DetermineMovableContentNodeIndex).w1v = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.EffectiveNodeIndexOut' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var effectiveNodeIndexOut = _this__u8e3s4.b1w(tmp$ret$0);
    var tmp = effectiveNodeIndexOut;
    // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.Anchor' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var tmp_0 = _this__u8e3s4.b1w(tmp$ret$1);
    tmp.s1x_1 = positionToInsert(slots, tmp_0, isInterface(applier, Applier) ? applier : THROW_CCE());
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
  protoOf(CopyNodesToNewAnchorLocation).q1u = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.EffectiveNodeIndex' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'effectiveNodeIndex';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.Nodes' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'nodes';
      } else {
        tmp = protoOf(Operation).q1u.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(CopyNodesToNewAnchorLocation).w1v = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.EffectiveNodeIndex' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var effectiveNodeIndex = _this__u8e3s4.b1w(tmp$ret$0).s1x_1;
    // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.Nodes' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var nodesToInsert = _this__u8e3s4.b1w(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.snapshots.fastForEachIndexed' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = nodesToInsert.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = nodesToInsert.m(index);
        // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.execute.<anonymous>' call
        if (!isInterface(applier, Applier))
          THROW_CCE();
        applier.d12(effectiveNodeIndex + index | 0, item);
        applier.c12(effectiveNodeIndex + index | 0, item);
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
  protoOf(CopySlotTableToAnchorLocation).q1u = function (parameter) {
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
            tmp = protoOf(Operation).q1u.call(this, parameter);
          }
        }
      }
    }
    return tmp;
  };
  protoOf(CopySlotTableToAnchorLocation).w1v = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.From' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(2);
    var from = _this__u8e3s4.b1w(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.To' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(3);
    var to = _this__u8e3s4.b1w(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ParentCompositionContext' call
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(1);
    var parentCompositionContext = _this__u8e3s4.b1w(tmp$ret$2);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ResolvedState' call
    var tmp$ret$3 = _ObjectParameter___init__impl__iyg1ip(0);
    var tmp0_elvis_lhs = _this__u8e3s4.b1w(tmp$ret$3);
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? parentCompositionContext.y1b(from) : tmp0_elvis_lhs;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      composeRuntimeError('Could not resolve state for movable content');
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var resolvedState = tmp;
    var anchors = slots.o1s(1, resolvedState.z1b_1, 2);
    var tmp_0 = Companion_instance_2;
    var tmp_1 = to.r1b_1;
    tmp_0.l1m(slots, anchors, isInterface(tmp_1, RecomposeScopeOwner) ? tmp_1 : THROW_CCE());
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
  protoOf(EndMovableContentPlacement).w1v = function (_this__u8e3s4, applier, slots, rememberManager) {
    positionToParentOf(slots, isInterface(applier, Applier) ? applier : THROW_CCE(), 0);
    slots.t1a();
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
  protoOf(ReleaseMovableGroupAtCurrent).q1u = function (parameter) {
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
          tmp = protoOf(Operation).q1u.call(this, parameter);
        }
      }
    }
    return tmp;
  };
  protoOf(ReleaseMovableGroupAtCurrent).w1v = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Composition' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var tmp = _this__u8e3s4.b1w(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.ParentCompositionContext' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var tmp_0 = _this__u8e3s4.b1w(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Reference' call
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(2);
    releaseMovableGroupAtCurrent(tmp, tmp_0, _this__u8e3s4.b1w(tmp$ret$2), slots);
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
  protoOf(ApplyChangeList).q1u = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.Changes' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'changes';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.EffectiveNodeIndex' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'effectiveNodeIndex';
      } else {
        tmp = protoOf(Operation).q1u.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(ApplyChangeList).w1v = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.EffectiveNodeIndex' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(1);
    var tmp0_safe_receiver = _this__u8e3s4.b1w(tmp$ret$0);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s1x_1;
    var effectiveNodeIndex = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.Changes' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(0);
    var tmp = _this__u8e3s4.b1w(tmp$ret$1);
    var tmp_0;
    if (effectiveNodeIndex > 0) {
      tmp_0 = new OffsetApplier(applier, effectiveNodeIndex);
    } else {
      tmp_0 = applier;
    }
    tmp.m1i(tmp_0, slots, rememberManager);
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
    this.n1u_1 = ints;
    this.o1u_1 = objects;
  }
  protoOf(Operation).y1v = function () {
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = getKClassFromExpression(this).e7();
    return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
  };
  protoOf(Operation).p1u = function (parameter) {
    return 'IntParameter(' + _IntParameter___get_offset__impl__xsdcin(parameter) + ')';
  };
  protoOf(Operation).q1u = function (parameter) {
    return 'ObjectParameter(' + _ObjectParameter___get_offset__impl__x7fx93(parameter) + ')';
  };
  protoOf(Operation).toString = function () {
    return this.y1v();
  };
  function positionToInsert(slots, anchor, applier) {
    var destination = slots.w1b(anchor);
    runtimeCheck(slots.z17_1 < destination);
    positionToParentOf(slots, applier, destination);
    var nodeIndex = currentNodeIndex(slots);
    while (slots.z17_1 < destination) {
      if (slots.u1r(destination)) {
        if (slots.x1f()) {
          applier.a12(slots.a1d(slots.z17_1));
          nodeIndex = 0;
        }
        slots.w18();
      } else
        nodeIndex = nodeIndex + slots.j18() | 0;
    }
    runtimeCheck(slots.z17_1 === destination);
    return nodeIndex;
  }
  function positionToParentOf(slots, applier, index) {
    while (!slots.t1r(index)) {
      slots.t18();
      if (slots.b1b(slots.b18_1)) {
        applier.b12();
      }
      slots.t1a();
    }
  }
  function releaseMovableGroupAtCurrent(composition, parentContext, reference, slots) {
    var slotTable = new SlotTable();
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = slotTable.s18();
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.changelist.releaseMovableGroupAtCurrent.<anonymous>' call
      writer.p19();
      writer.a19(get_movableContentKey(), reference.p1b_1);
      writer.l1b();
      writer.h1f(reference.q1b_1);
      var anchors = slots.m1s(reference.t1b_1, 1, writer);
      writer.j18();
      writer.t1a();
      writer.u1a();
      tmp = anchors;
    }finally {
      writer.g17();
    }
    var anchors_0 = tmp;
    var state = new MovableContentState(slotTable);
    if (Companion_instance_2.o1m(slotTable, anchors_0)) {
      var movableContentRecomposeScopeOwner = new releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1(composition, reference);
      // Inline function 'androidx.compose.runtime.SlotTable.write' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
      var writer_0 = slotTable.s18();
      var tmp_0;
      try {
        Companion_instance_2.l1m(writer_0, anchors_0, movableContentRecomposeScopeOwner);
        tmp_0 = Unit_instance;
      }finally {
        writer_0.g17();
      }
    }
    parentContext.s1k(reference, state);
  }
  function currentNodeIndex(slots) {
    var original = slots.z17_1;
    var current = slots.b18_1;
    while (current >= 0 ? !slots.b1b(current) : false) {
      current = slots.p18(current);
    }
    var index = 0;
    current = current + 1 | 0;
    while (current < original) {
      if (slots.v1r(original, current)) {
        if (slots.b1b(current))
          index = 0;
        current = current + 1 | 0;
      } else {
        index = index + (slots.b1b(current) ? 1 : slots.c1b(current)) | 0;
        current = current + slots.h1a(current) | 0;
      }
    }
    return index;
  }
  function releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1($composition, $reference) {
    this.d1y_1 = $composition;
    this.e1y_1 = $reference;
  }
  protoOf(releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1).j1k = function (scope, instance) {
    var tmp = this.d1y_1;
    var tmp0_safe_receiver = isInterface(tmp, RecomposeScopeOwner) ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j1k(scope, instance);
    var result = tmp1_elvis_lhs == null ? InvalidationResult_IGNORED_getInstance() : tmp1_elvis_lhs;
    if (result.equals(InvalidationResult_IGNORED_getInstance())) {
      var tmp2_this = this.e1y_1;
      var tmp_0 = tmp2_this;
      var tmp_1 = tmp2_this.u1b_1;
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
        this_0.f1h(this_0);
        tmp_2 = this_0;
      }
      tmp_0.u1b_1 = plus_1(tmp_1, to(scope, tmp_2));
      return InvalidationResult_SCHEDULED_getInstance();
    }
    return result;
  };
  protoOf(releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1).n1k = function (scope) {
  };
  protoOf(releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1).u1j = function (value) {
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
    if (!(($this$with.i1u_1 & mask) === 0)) {
      // Inline function 'androidx.compose.runtime.changelist.WriteScope.setInt.<anonymous>.<anonymous>' call
      var message = 'Already pushed argument ' + _WriteScope___get_operation__impl__krvgwa($this).p1u(parameter);
      throw IllegalStateException_init_$Create$(toString(message));
    }
    $this$with.i1u_1 = $this$with.i1u_1 | mask;
    $this$with.e1u_1[topIntIndexOf($this$with, parameter)] = value;
    return Unit_instance;
  }
  function WriteScope__setObject_impl_rr41y9($this, parameter, value) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var $this$with = _get_stack__b8zp2v($this);
    var mask = 1 << _ObjectParameter___get_offset__impl__x7fx93(parameter);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(($this$with.j1u_1 & mask) === 0)) {
      // Inline function 'androidx.compose.runtime.changelist.WriteScope.setObject.<anonymous>.<anonymous>' call
      var message = 'Already pushed argument ' + _WriteScope___get_operation__impl__krvgwa($this).q1u(parameter);
      throw IllegalStateException_init_$Create$(toString(message));
    }
    $this$with.j1u_1 = $this$with.j1u_1 | mask;
    $this$with.g1u_1[topObjectIndexOf($this$with, parameter)] = value;
    return Unit_instance;
  }
  function determineNewSize($this, currentSize, requiredSize) {
    var resizeAmount = coerceAtMost(currentSize, 1024);
    return coerceAtLeast(currentSize + resizeAmount | 0, requiredSize);
  }
  function ensureIntArgsSizeAtLeast($this, requiredSize) {
    var currentSize = $this.e1u_1.length;
    if (requiredSize > currentSize) {
      $this.e1u_1 = copyOf($this.e1u_1, determineNewSize($this, currentSize, requiredSize));
    }
  }
  function ensureObjectArgsSizeAtLeast($this, requiredSize) {
    var currentSize = $this.g1u_1.length;
    if (requiredSize > currentSize) {
      $this.g1u_1 = copyOf_0($this.g1u_1, determineNewSize($this, currentSize, requiredSize));
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
    return ensureNotNull($this.c1u_1[$this.d1u_1 - 1 | 0]);
  }
  function topIntIndexOf($this, parameter) {
    return ($this.f1u_1 - peekOperation($this).n1u_1 | 0) + _IntParameter___get_offset__impl__xsdcin(parameter) | 0;
  }
  function topObjectIndexOf($this, parameter) {
    return ($this.h1u_1 - peekOperation($this).o1u_1 | 0) + _ObjectParameter___get_offset__impl__x7fx93(parameter) | 0;
  }
  function OpIterator($outer) {
    this.i1y_1 = $outer;
    this.f1y_1 = 0;
    this.g1y_1 = 0;
    this.h1y_1 = 0;
  }
  protoOf(OpIterator).d1 = function () {
    if (this.f1y_1 >= this.i1y_1.d1u_1)
      return false;
    var op = this.j1y();
    this.g1y_1 = this.g1y_1 + op.n1u_1 | 0;
    this.h1y_1 = this.h1y_1 + op.o1u_1 | 0;
    this.f1y_1 = this.f1y_1 + 1 | 0;
    return this.f1y_1 < this.i1y_1.d1u_1;
  };
  protoOf(OpIterator).j1y = function () {
    return ensureNotNull(this.i1y_1.c1u_1[this.f1y_1]);
  };
  protoOf(OpIterator).x1v = function (parameter) {
    return this.i1y_1.e1u_1[this.g1y_1 + _IntParameter___get_offset__impl__xsdcin(parameter) | 0];
  };
  protoOf(OpIterator).b1w = function (parameter) {
    var tmp = this.i1y_1.g1u_1[this.h1y_1 + _ObjectParameter___get_offset__impl__x7fx93(parameter) | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  function Companion_5() {
    this.k1y_1 = 1024;
    this.l1y_1 = 16;
  }
  var Companion_instance_6;
  function Companion_getInstance_6() {
    return Companion_instance_6;
  }
  function Operations() {
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.c1u_1 = fillArrayVal(Array(16), null);
    this.d1u_1 = 0;
    this.e1u_1 = new Int32Array(16);
    this.f1u_1 = 0;
    var tmp_0 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.g1u_1 = fillArrayVal(Array(16), null);
    this.h1u_1 = 0;
    this.i1u_1 = 0;
    this.j1u_1 = 0;
  }
  protoOf(Operations).l = function () {
    return this.d1u_1;
  };
  protoOf(Operations).s = function () {
    return this.l() === 0;
  };
  protoOf(Operations).v1f = function () {
    return !(this.l() === 0);
  };
  protoOf(Operations).f1 = function () {
    this.d1u_1 = 0;
    this.f1u_1 = 0;
    fill_0(this.g1u_1, null, 0, this.h1u_1);
    this.h1u_1 = 0;
  };
  protoOf(Operations).m1u = function (operation) {
    this.i1u_1 = 0;
    this.j1u_1 = 0;
    if (this.d1u_1 === this.c1u_1.length) {
      var resizeAmount = coerceAtMost(this.d1u_1, 1024);
      this.c1u_1 = copyOf_0(this.c1u_1, this.d1u_1 + resizeAmount | 0);
    }
    ensureIntArgsSizeAtLeast(this, this.f1u_1 + operation.n1u_1 | 0);
    ensureObjectArgsSizeAtLeast(this, this.h1u_1 + operation.o1u_1 | 0);
    var tmp = this.c1u_1;
    var tmp1 = this.d1u_1;
    this.d1u_1 = tmp1 + 1 | 0;
    tmp[tmp1] = operation;
    this.f1u_1 = this.f1u_1 + operation.n1u_1 | 0;
    this.h1u_1 = this.h1u_1 + operation.o1u_1 | 0;
  };
  protoOf(Operations).t1u = function (operation) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(operation.n1u_1 === 0 ? operation.o1u_1 === 0 : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var message = 'Cannot push ' + operation + ' without arguments because it expects ' + ('' + operation.n1u_1 + ' ints and ' + operation.o1u_1 + ' objects.');
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.m1u(operation);
  };
  protoOf(Operations).t1v = function (other) {
    if (this.s()) {
      throw NoSuchElementException_init_$Create$('Cannot pop(), because the stack is empty.');
    }
    var tmp = this.c1u_1;
    this.d1u_1 = this.d1u_1 - 1 | 0;
    var op = ensureNotNull(tmp[this.d1u_1]);
    this.c1u_1[this.d1u_1] = null;
    other.m1u(op);
    var thisObjIdx = this.h1u_1;
    var otherObjIdx = other.h1u_1;
    // Inline function 'kotlin.repeat' call
    var times = op.o1u_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.changelist.Operations.popInto.<anonymous>' call
        otherObjIdx = otherObjIdx - 1 | 0;
        thisObjIdx = thisObjIdx - 1 | 0;
        other.g1u_1[otherObjIdx] = this.g1u_1[thisObjIdx];
        this.g1u_1[thisObjIdx] = null;
      }
       while (inductionVariable < times);
    var thisIntIdx = this.f1u_1;
    var otherIntIdx = other.f1u_1;
    // Inline function 'kotlin.repeat' call
    var times_0 = op.n1u_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < times_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.runtime.changelist.Operations.popInto.<anonymous>' call
        otherIntIdx = otherIntIdx - 1 | 0;
        thisIntIdx = thisIntIdx - 1 | 0;
        other.e1u_1[otherIntIdx] = this.e1u_1[thisIntIdx];
        this.e1u_1[thisIntIdx] = 0;
      }
       while (inductionVariable_0 < times_0);
    this.h1u_1 = this.h1u_1 - op.o1u_1 | 0;
    this.f1u_1 = this.f1u_1 - op.n1u_1 | 0;
  };
  protoOf(Operations).k1u = function (applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.drain' call
    // Inline function 'androidx.compose.runtime.changelist.Operations.forEach' call
    if (this.v1f()) {
      var iterator = new OpIterator(this);
      do {
        // Inline function 'androidx.compose.runtime.changelist.Operations.executeAndFlushAllPendingOperations.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        iterator.j1y().w1v(iterator, applier, slots, rememberManager);
      }
       while (iterator.d1());
    }
    this.f1();
  };
  protoOf(Operations).toString = function () {
    return anyToString(this);
  };
  function IdentityArrayMap$asMap$1$entries$1$iterator$1$1(this$0, $index) {
    var tmp = this;
    var tmp_0 = this$0.q1c_1[$index];
    tmp.m1y_1 = !(tmp_0 == null) ? tmp_0 : THROW_CCE();
    var tmp_1 = this;
    var tmp_2 = this$0.r1c_1[$index];
    tmp_1.n1y_1 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
  }
  protoOf(IdentityArrayMap$asMap$1$entries$1$iterator$1$1).n2 = function () {
    return this.m1y_1;
  };
  protoOf(IdentityArrayMap$asMap$1$entries$1$iterator$1$1).o2 = function () {
    return this.n1y_1;
  };
  function IdentityArrayMap$asMap$o$_get_entries_$o$iterator$slambda_r160he(this$0, resultContinuation) {
    this.w1y_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(IdentityArrayMap$asMap$o$_get_entries_$o$iterator$slambda_r160he).a1z = function ($this$sequence, $completion) {
    var tmp = this.b1z($this$sequence, $completion);
    tmp.cd_1 = Unit_instance;
    tmp.dd_1 = null;
    return tmp.md();
  };
  protoOf(IdentityArrayMap$asMap$o$_get_entries_$o$iterator$slambda_r160he).yd = function (p1, $completion) {
    return this.a1z(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(IdentityArrayMap$asMap$o$_get_entries_$o$iterator$slambda_r160he).md = function () {
    var suspendResult = this.cd_1;
    $sm: do
      try {
        var tmp = this.ad_1;
        switch (tmp) {
          case 0:
            this.bd_1 = 4;
            this.y1y_1 = until(0, this.w1y_1.s1c_1).n();
            this.ad_1 = 1;
            continue $sm;
          case 1:
            if (!this.y1y_1.b1()) {
              this.ad_1 = 3;
              continue $sm;
            }

            this.z1y_1 = this.y1y_1.d1();
            this.ad_1 = 2;
            suspendResult = this.x1y_1.mf(new IdentityArrayMap$asMap$1$entries$1$iterator$1$1(this.w1y_1, this.z1y_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.ad_1 = 1;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.dd_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.bd_1 === 4) {
          throw e;
        } else {
          this.ad_1 = this.bd_1;
          this.dd_1 = e;
        }
      }
     while (true);
  };
  protoOf(IdentityArrayMap$asMap$o$_get_entries_$o$iterator$slambda_r160he).b1z = function ($this$sequence, completion) {
    var i = new IdentityArrayMap$asMap$o$_get_entries_$o$iterator$slambda_r160he(this.w1y_1, completion);
    i.x1y_1 = $this$sequence;
    return i;
  };
  function IdentityArrayMap$asMap$o$_get_entries_$o$iterator$slambda_r160he_0(this$0, resultContinuation) {
    var i = new IdentityArrayMap$asMap$o$_get_entries_$o$iterator$slambda_r160he(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.a1z($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function IdentityArrayMap$asMap$o$_get_keys_$o$iterator$slambda_qj88bw(this$0, resultContinuation) {
    this.k1z_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(IdentityArrayMap$asMap$o$_get_keys_$o$iterator$slambda_qj88bw).o1z = function ($this$sequence, $completion) {
    var tmp = this.p1z($this$sequence, $completion);
    tmp.cd_1 = Unit_instance;
    tmp.dd_1 = null;
    return tmp.md();
  };
  protoOf(IdentityArrayMap$asMap$o$_get_keys_$o$iterator$slambda_qj88bw).yd = function (p1, $completion) {
    return this.o1z(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(IdentityArrayMap$asMap$o$_get_keys_$o$iterator$slambda_qj88bw).md = function () {
    var suspendResult = this.cd_1;
    $sm: do
      try {
        var tmp = this.ad_1;
        switch (tmp) {
          case 0:
            this.bd_1 = 4;
            this.m1z_1 = until(0, this.k1z_1.s1c_1).n();
            this.ad_1 = 1;
            continue $sm;
          case 1:
            if (!this.m1z_1.b1()) {
              this.ad_1 = 3;
              continue $sm;
            }

            this.n1z_1 = this.m1z_1.d1();
            this.ad_1 = 2;
            var tmp_0 = this.k1z_1.q1c_1[this.n1z_1];
            suspendResult = this.l1z_1.mf(!(tmp_0 == null) ? tmp_0 : THROW_CCE(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.ad_1 = 1;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.dd_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.bd_1 === 4) {
          throw e;
        } else {
          this.ad_1 = this.bd_1;
          this.dd_1 = e;
        }
      }
     while (true);
  };
  protoOf(IdentityArrayMap$asMap$o$_get_keys_$o$iterator$slambda_qj88bw).p1z = function ($this$sequence, completion) {
    var i = new IdentityArrayMap$asMap$o$_get_keys_$o$iterator$slambda_qj88bw(this.k1z_1, completion);
    i.l1z_1 = $this$sequence;
    return i;
  };
  function IdentityArrayMap$asMap$o$_get_keys_$o$iterator$slambda_qj88bw_0(this$0, resultContinuation) {
    var i = new IdentityArrayMap$asMap$o$_get_keys_$o$iterator$slambda_qj88bw(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.o1z($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function IdentityArrayMap$asMap$o$_get_values_$o$iterator$slambda_qilghu(this$0, resultContinuation) {
    this.y1z_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(IdentityArrayMap$asMap$o$_get_values_$o$iterator$slambda_qilghu).c20 = function ($this$sequence, $completion) {
    var tmp = this.d20($this$sequence, $completion);
    tmp.cd_1 = Unit_instance;
    tmp.dd_1 = null;
    return tmp.md();
  };
  protoOf(IdentityArrayMap$asMap$o$_get_values_$o$iterator$slambda_qilghu).yd = function (p1, $completion) {
    return this.c20(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(IdentityArrayMap$asMap$o$_get_values_$o$iterator$slambda_qilghu).md = function () {
    var suspendResult = this.cd_1;
    $sm: do
      try {
        var tmp = this.ad_1;
        switch (tmp) {
          case 0:
            this.bd_1 = 4;
            this.a20_1 = until(0, this.y1z_1.s1c_1).n();
            this.ad_1 = 1;
            continue $sm;
          case 1:
            if (!this.a20_1.b1()) {
              this.ad_1 = 3;
              continue $sm;
            }

            this.b20_1 = this.a20_1.d1();
            this.ad_1 = 2;
            var tmp_0 = this.y1z_1.r1c_1[this.b20_1];
            suspendResult = this.z1z_1.mf((tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.ad_1 = 1;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.dd_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.bd_1 === 4) {
          throw e;
        } else {
          this.ad_1 = this.bd_1;
          this.dd_1 = e;
        }
      }
     while (true);
  };
  protoOf(IdentityArrayMap$asMap$o$_get_values_$o$iterator$slambda_qilghu).d20 = function ($this$sequence, completion) {
    var i = new IdentityArrayMap$asMap$o$_get_values_$o$iterator$slambda_qilghu(this.y1z_1, completion);
    i.z1z_1 = $this$sequence;
    return i;
  };
  function IdentityArrayMap$asMap$o$_get_values_$o$iterator$slambda_qilghu_0(this$0, resultContinuation) {
    var i = new IdentityArrayMap$asMap$o$_get_values_$o$iterator$slambda_qilghu(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.c20($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function IdentityArrayMap$asMap$1$entries$1(this$0) {
    this.e20_1 = this$0;
  }
  protoOf(IdentityArrayMap$asMap$1$entries$1).l = function () {
    return this.e20_1.s1c_1;
  };
  protoOf(IdentityArrayMap$asMap$1$entries$1).s = function () {
    return this.e20_1.s();
  };
  protoOf(IdentityArrayMap$asMap$1$entries$1).n = function () {
    return sequence(IdentityArrayMap$asMap$o$_get_entries_$o$iterator$slambda_r160he_0(this.e20_1, null)).n();
  };
  protoOf(IdentityArrayMap$asMap$1$entries$1).f20 = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.s();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.n();
      while (tmp0_iterator.b1()) {
        var element = tmp0_iterator.d1();
        // Inline function 'androidx.compose.runtime.collection.<no name provided>.containsAll.<anonymous>' call
        if (!this.g20(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(IdentityArrayMap$asMap$1$entries$1).r = function (elements) {
    return this.f20(elements);
  };
  protoOf(IdentityArrayMap$asMap$1$entries$1).g20 = function (element) {
    return this.e20_1.q1k(element.n2()) === element.o2();
  };
  protoOf(IdentityArrayMap$asMap$1$entries$1).q = function (element) {
    if (!(!(element == null) ? isInterface(element, Entry) : false))
      return false;
    return this.g20((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  function IdentityArrayMap$asMap$1$keys$1(this$0) {
    this.h20_1 = this$0;
  }
  protoOf(IdentityArrayMap$asMap$1$keys$1).l = function () {
    return this.h20_1.s1c_1;
  };
  protoOf(IdentityArrayMap$asMap$1$keys$1).s = function () {
    return this.h20_1.s();
  };
  protoOf(IdentityArrayMap$asMap$1$keys$1).n = function () {
    return sequence(IdentityArrayMap$asMap$o$_get_keys_$o$iterator$slambda_qj88bw_0(this.h20_1, null)).n();
  };
  protoOf(IdentityArrayMap$asMap$1$keys$1).i20 = function (elements) {
    var tmp0_iterator = elements.n();
    while (tmp0_iterator.b1()) {
      var key = tmp0_iterator.d1();
      if (!this.r1k(key))
        return false;
    }
    return true;
  };
  protoOf(IdentityArrayMap$asMap$1$keys$1).r = function (elements) {
    return this.i20(elements);
  };
  protoOf(IdentityArrayMap$asMap$1$keys$1).r1k = function (element) {
    return this.h20_1.r1k(element);
  };
  protoOf(IdentityArrayMap$asMap$1$keys$1).q = function (element) {
    if (!!(element == null))
      return false;
    return this.r1k(!(element == null) ? element : THROW_CCE());
  };
  function IdentityArrayMap$asMap$1$values$1(this$0) {
    this.j20_1 = this$0;
  }
  protoOf(IdentityArrayMap$asMap$1$values$1).l = function () {
    return this.j20_1.s1c_1;
  };
  protoOf(IdentityArrayMap$asMap$1$values$1).s = function () {
    return this.j20_1.s();
  };
  protoOf(IdentityArrayMap$asMap$1$values$1).n = function () {
    return sequence(IdentityArrayMap$asMap$o$_get_values_$o$iterator$slambda_qilghu_0(this.j20_1, null)).n();
  };
  protoOf(IdentityArrayMap$asMap$1$values$1).k20 = function (elements) {
    var tmp0_iterator = elements.n();
    while (tmp0_iterator.b1()) {
      var value = tmp0_iterator.d1();
      if (!this.l20(value))
        return false;
    }
    return true;
  };
  protoOf(IdentityArrayMap$asMap$1$values$1).r = function (elements) {
    return this.k20(elements);
  };
  protoOf(IdentityArrayMap$asMap$1$values$1).l20 = function (element) {
    var inductionVariable = 0;
    var last = this.j20_1.s1c_1;
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals(this.j20_1.r1c_1[index], element))
          return true;
      }
       while (inductionVariable < last);
    return false;
  };
  protoOf(IdentityArrayMap$asMap$1$values$1).q = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.l20((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function find_0($this, key) {
    var keyIdentity = identityHashCode(key);
    var low = 0;
    var high = $this.s1c_1 - 1 | 0;
    var keys = $this.q1c_1;
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
    var keys = $this.q1c_1;
    var size = $this.s1c_1;
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
    this.m20_1 = this$0;
  }
  protoOf(IdentityArrayMap$asMap$1).k2 = function () {
    return new IdentityArrayMap$asMap$1$entries$1(this.m20_1);
  };
  protoOf(IdentityArrayMap$asMap$1).i2 = function () {
    return new IdentityArrayMap$asMap$1$keys$1(this.m20_1);
  };
  protoOf(IdentityArrayMap$asMap$1).l = function () {
    return this.m20_1.s1c_1;
  };
  protoOf(IdentityArrayMap$asMap$1).j2 = function () {
    return new IdentityArrayMap$asMap$1$values$1(this.m20_1);
  };
  protoOf(IdentityArrayMap$asMap$1).s = function () {
    return this.m20_1.s();
  };
  protoOf(IdentityArrayMap$asMap$1).q1k = function (key) {
    return this.m20_1.q1k(key);
  };
  protoOf(IdentityArrayMap$asMap$1).u2 = function (key) {
    if (!!(key == null))
      return null;
    return this.q1k(!(key == null) ? key : THROW_CCE());
  };
  protoOf(IdentityArrayMap$asMap$1).n20 = function (key) {
    return !(this.m20_1.q1k(key) == null);
  };
  protoOf(IdentityArrayMap$asMap$1).r2 = function (key) {
    if (!!(key == null))
      return false;
    return this.n20(!(key == null) ? key : THROW_CCE());
  };
  function IdentityArrayMap(capacity) {
    capacity = capacity === VOID ? 16 : capacity;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.q1c_1 = fillArrayVal(Array(capacity), null);
    var tmp_0 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.r1c_1 = fillArrayVal(Array(capacity), null);
    this.s1c_1 = 0;
  }
  protoOf(IdentityArrayMap).s = function () {
    return this.s1c_1 === 0;
  };
  protoOf(IdentityArrayMap).v1f = function () {
    return this.s1c_1 > 0;
  };
  protoOf(IdentityArrayMap).r1k = function (key) {
    return find_0(this, key) >= 0;
  };
  protoOf(IdentityArrayMap).q1k = function (key) {
    var index = find_0(this, key);
    var tmp;
    if (index >= 0) {
      var tmp_0 = this.r1c_1[index];
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(IdentityArrayMap).z1i = function (key, value) {
    var keys = this.q1c_1;
    var values = this.r1c_1;
    var size = this.s1c_1;
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
      this.q1c_1 = destKeys;
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
      this.r1c_1 = destValues;
      this.s1c_1 = this.s1c_1 + 1 | 0;
    }
  };
  protoOf(IdentityArrayMap).o1j = function () {
    return new IdentityArrayMap$asMap$1(this);
  };
  function find_1($this, value) {
    var low = 0;
    var high = $this.h1c_1 - 1 | 0;
    var valueIdentity = identityHashCode(value);
    var values = $this.i1c_1;
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
    var values = $this.i1c_1;
    var size = $this.h1c_1;
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
    this.p20_1 = this$0;
    this.o20_1 = 0;
  }
  protoOf(IdentityArraySet$iterator$1).b1 = function () {
    return this.o20_1 < this.p20_1.h1c_1;
  };
  protoOf(IdentityArraySet$iterator$1).d1 = function () {
    var tmp = this.p20_1.i1c_1;
    var tmp1 = this.o20_1;
    this.o20_1 = tmp1 + 1 | 0;
    var tmp_0 = tmp[tmp1];
    return !(tmp_0 == null) ? tmp_0 : THROW_CCE();
  };
  function IdentityArraySet$toString$lambda(it) {
    return toString(it);
  }
  function IdentityArraySet() {
    this.h1c_1 = 0;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.i1c_1 = fillArrayVal(Array(16), null);
  }
  protoOf(IdentityArraySet).l = function () {
    return this.h1c_1;
  };
  protoOf(IdentityArraySet).w1n = function (element) {
    return find_1(this, element) >= 0;
  };
  protoOf(IdentityArraySet).q = function (element) {
    if (!!(element == null))
      return false;
    return this.w1n(!(element == null) ? element : THROW_CCE());
  };
  protoOf(IdentityArraySet).f1h = function (value) {
    var index;
    var size = this.h1c_1;
    var values = this.i1c_1;
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
      this.i1c_1 = newSorted;
    } else {
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset_0 = insertIndex + 1 | 0;
      arrayCopy(values, values, destinationOffset_0, insertIndex, size);
    }
    this.i1c_1[insertIndex] = value;
    this.h1c_1 = this.h1c_1 + 1 | 0;
    return true;
  };
  protoOf(IdentityArraySet).f1 = function () {
    fill_0(this.i1c_1, null);
    this.h1c_1 = 0;
  };
  protoOf(IdentityArraySet).n1o = function (collection) {
    if (collection.s())
      return Unit_instance;
    if (!(collection instanceof IdentityArraySet)) {
      var tmp0_iterator = collection.n();
      while (tmp0_iterator.b1()) {
        var value = tmp0_iterator.d1();
        this.f1h(value);
      }
    } else {
      var thisValues = this.i1c_1;
      var otherValues = collection.i1c_1;
      var thisSize = this.h1c_1;
      var otherSize = collection.h1c_1;
      var combinedSize = thisSize + otherSize | 0;
      var needsResize = this.i1c_1.length < combinedSize;
      var elementsInOrder = thisSize === 0 ? true : identityHashCode(thisValues[thisSize - 1 | 0]) < identityHashCode(otherValues[0]);
      if (!needsResize ? elementsInOrder : false) {
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(otherValues, thisValues, thisSize, 0, otherSize);
        this.h1c_1 = this.h1c_1 + otherSize | 0;
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
        this.i1c_1 = newArray;
        this.h1c_1 = newSize;
      }
    }
  };
  protoOf(IdentityArraySet).s = function () {
    return this.h1c_1 === 0;
  };
  protoOf(IdentityArraySet).v1f = function () {
    return this.h1c_1 > 0;
  };
  protoOf(IdentityArraySet).q20 = function (value) {
    var index = find_1(this, value);
    var values = this.i1c_1;
    var size = this.h1c_1;
    if (index >= 0) {
      if (index < (size - 1 | 0)) {
        // Inline function 'kotlin.collections.copyInto' call
        var startIndex = index + 1 | 0;
        arrayCopy(values, values, index, startIndex, size);
      }
      values[size - 1 | 0] = null;
      this.h1c_1 = this.h1c_1 - 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(IdentityArraySet).cf = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.s();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.n();
      while (tmp0_iterator.b1()) {
        var element = tmp0_iterator.d1();
        // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.containsAll.<anonymous>' call
        if (!this.w1n(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(IdentityArraySet).r = function (elements) {
    return this.cf(elements);
  };
  protoOf(IdentityArraySet).n = function () {
    return new IdentityArraySet$iterator$1(this);
  };
  protoOf(IdentityArraySet).toString = function () {
    return joinToString(this, VOID, '[', ']', VOID, VOID, IdentityArraySet$toString$lambda);
  };
  function MutableVector(content, size) {
    this.u1c_1 = content;
    this.v1c_1 = null;
    this.w1c_1 = size;
  }
  protoOf(MutableVector).x1c = function (element) {
    this.c3(this.w1c_1 + 1 | 0);
    this.u1c_1[this.w1c_1] = element;
    this.w1c_1 = this.w1c_1 + 1 | 0;
    return true;
  };
  protoOf(MutableVector).c3 = function (capacity) {
    var oldContent = this.u1c_1;
    if (oldContent.length < capacity) {
      // Inline function 'kotlin.math.max' call
      var b = imul(oldContent.length, 2);
      var newSize = Math.max(capacity, b);
      this.u1c_1 = copyOf_0(oldContent, newSize);
    }
  };
  protoOf(MutableVector).k1 = function (index) {
    var content = this.u1c_1;
    var tmp = content[index];
    var item = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
    if (!(index === (this.w1c_1 - 1 | 0))) {
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = index + 1 | 0;
      var endIndex = this.w1c_1;
      arrayCopy(content, content, index, startIndex, endIndex);
    }
    this.w1c_1 = this.w1c_1 - 1 | 0;
    content[this.w1c_1] = null;
    return item;
  };
  function ScopeMap() {
    this.g1i_1 = mutableScatterMapOf();
  }
  protoOf(ScopeMap).l1i = function (key, scope) {
    // Inline function 'androidx.collection.MutableScatterMap.compute' call
    var this_0 = this.g1i_1;
    var index = this_0.i11(key);
    var inserting = index < 0;
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.add.<anonymous>' call
    var tmp;
    if (inserting) {
      tmp = null;
    } else {
      var tmp_0 = this_0.y10_1[index];
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    }
    var value = tmp;
    var tmp_1;
    if (value == null) {
      tmp_1 = scope;
    } else {
      if (value instanceof MutableScatterSet) {
        (value instanceof MutableScatterSet ? value : THROW_CCE()).y(scope);
        tmp_1 = value;
      } else {
        var tmp_2;
        if (!(value === scope)) {
          var set = new MutableScatterSet();
          set.y(!(value == null) ? value : THROW_CCE());
          set.y(scope);
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
      this_0.x10_1[insertionIndex] = key;
      this_0.y10_1[insertionIndex] = computedValue;
    } else {
      this_0.y10_1[index] = computedValue;
    }
  };
  protoOf(ScopeMap).k1i = function (element) {
    return this.g1i_1.r2(element);
  };
  protoOf(ScopeMap).j1i = function (key, scope) {
    var tmp0_elvis_lhs = this.g1i_1.u2(key);
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
      var removed = set.z(scope);
      if (removed ? set.s() : false) {
        this.g1i_1.m2(key);
      }
      return removed;
    } else {
      if (equals(value, scope)) {
        this.g1i_1.m2(key);
        tmp_0 = true;
      } else {
        tmp_0 = false;
      }
    }
    return tmp_0;
  };
  protoOf(ScopeMap).y1j = function (scope) {
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf' call
    // Inline function 'androidx.collection.MutableScatterMap.removeIf' call
    var this_0 = this.g1i_1;
    $l$block_0: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this_0.w10_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_1 = slot;
          if (!this_1.oc(this_1.kc().lc(7)).oc(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.oc(new Long(255, 0)).xa(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.MutableScatterMap.removeIf.<anonymous>' call
                  // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf.<anonymous>' call
                  var tmp = this_0.x10_1[index];
                  (tmp == null ? true : !(tmp == null)) || THROW_CCE();
                  var tmp_0 = this_0.y10_1[index];
                  var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  var tmp_1;
                  if (value instanceof MutableScatterSet) {
                    var set = value instanceof MutableScatterSet ? value : THROW_CCE();
                    // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
                    var elements = set.l11_1;
                    $l$block: {
                      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                      // Inline function 'kotlin.contracts.contract' call
                      var m_0 = set.k11_1;
                      var lastIndex_0 = m_0.length - 2 | 0;
                      var inductionVariable_1 = 0;
                      if (inductionVariable_1 <= lastIndex_0)
                        do {
                          var i_0 = inductionVariable_1;
                          inductionVariable_1 = inductionVariable_1 + 1 | 0;
                          var slot_0 = m_0[i_0];
                          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                          var this_2 = slot_0;
                          if (!this_2.oc(this_2.kc().lc(7)).oc(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                            var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
                            var inductionVariable_2 = 0;
                            if (inductionVariable_2 < bitCount_0)
                              do {
                                var j_0 = inductionVariable_2;
                                inductionVariable_2 = inductionVariable_2 + 1 | 0;
                                // Inline function 'androidx.collection.isFull' call
                                if (slot_0.oc(new Long(255, 0)).xa(new Long(128, 0)) < 0) {
                                  var index_0 = (i_0 << 3) + j_0 | 0;
                                  // Inline function 'androidx.collection.MutableScatterSet.removeIf.<anonymous>' call
                                  // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScope.<anonymous>' call
                                  var tmp_2 = elements[index_0];
                                  if (((tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE()) === scope) {
                                    set.w11(index_0);
                                  }
                                }
                                slot_0 = slot_0.mc(8);
                              }
                               while (inductionVariable_2 < bitCount_0);
                            if (!(bitCount_0 === 8)) {
                              break $l$block;
                            }
                          }
                        }
                         while (!(i_0 === lastIndex_0));
                    }
                    tmp_1 = set.s();
                  } else {
                    // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScope.<anonymous>' call
                    tmp_1 = (!(value == null) ? value : THROW_CCE()) === scope;
                  }
                  if (tmp_1) {
                    this_0.j11(index);
                  }
                }
                slot = slot.mc(8);
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
    return Companion_getInstance_10().s20();
  }
  function persistentListOf() {
    return persistentVectorOf();
  }
  function AbstractListIterator(index, size) {
    this.t20_1 = index;
    this.u20_1 = size;
  }
  protoOf(AbstractListIterator).b1 = function () {
    return this.t20_1 < this.u20_1;
  };
  protoOf(AbstractListIterator).q1 = function () {
    return this.t20_1 > 0;
  };
  protoOf(AbstractListIterator).v20 = function () {
    if (!this.b1())
      throw NoSuchElementException_init_$Create$_0();
  };
  protoOf(AbstractListIterator).w20 = function () {
    if (!this.q1())
      throw NoSuchElementException_init_$Create$_0();
  };
  function AbstractPersistentList() {
    AbstractList.call(this);
  }
  protoOf(AbstractPersistentList).e1 = function (elements) {
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.mutate' call
    // Inline function 'kotlin.apply' call
    var this_0 = this.x20();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.AbstractPersistentList.addAll.<anonymous>' call
    this_0.e1(elements);
    return this_0.b3();
  };
  protoOf(AbstractPersistentList).z = function (element) {
    var index = this.o(element);
    if (!(index === -1)) {
      return this.k1(index);
    }
    return this;
  };
  protoOf(AbstractPersistentList).q = function (element) {
    return !(this.o(element) === -1);
  };
  protoOf(AbstractPersistentList).r = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.s();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.n();
      while (tmp0_iterator.b1()) {
        var element = tmp0_iterator.d1();
        // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.AbstractPersistentList.containsAll.<anonymous>' call
        if (!this.q(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(AbstractPersistentList).n = function () {
    return this.vb();
  };
  protoOf(AbstractPersistentList).vb = function () {
    return this.p(0);
  };
  function BufferIterator(buffer, index, size) {
    AbstractListIterator.call(this, index, size);
    this.b21_1 = buffer;
  }
  protoOf(BufferIterator).d1 = function () {
    if (!this.b1()) {
      throw NoSuchElementException_init_$Create$_0();
    }
    var tmp1 = this.t20_1;
    this.t20_1 = tmp1 + 1 | 0;
    return this.b21_1[tmp1];
  };
  protoOf(BufferIterator).r1 = function () {
    if (!this.q1()) {
      throw NoSuchElementException_init_$Create$_0();
    }
    this.t20_1 = this.t20_1 - 1 | 0;
    return this.b21_1[this.t20_1];
  };
  function rootSize($this) {
    return rootSize_1($this.e21_1);
  }
  function pushFilledTail($this, root, filledTail, newTail) {
    if ($this.e21_1 >> get_LOG_MAX_BUFFER_SIZE() > 1 << $this.f21_1) {
      var newRoot = presizedBufferWith(root);
      var newRootShift = $this.f21_1 + get_LOG_MAX_BUFFER_SIZE() | 0;
      newRoot = pushTail($this, newRoot, newRootShift, filledTail);
      return new PersistentVector(newRoot, newTail, $this.e21_1 + 1 | 0, newRootShift);
    }
    var newRoot_0 = pushTail($this, root, $this.f21_1, filledTail);
    return new PersistentVector(newRoot_0, newTail, $this.e21_1 + 1 | 0, $this.f21_1);
  }
  function pushTail($this, root, shift, tail) {
    var bufferIndex = indexSegment($this.e21_1 - 1 | 0, shift);
    var tmp1_elvis_lhs = root == null ? null : copyOf_0(root, get_MAX_BUFFER_SIZE());
    var tmp;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.arrayOfNulls' call
      var size = get_MAX_BUFFER_SIZE();
      tmp = fillArrayVal(Array(size), null);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var newRootNode = tmp;
    if (shift === get_LOG_MAX_BUFFER_SIZE()) {
      newRootNode[bufferIndex] = tail;
    } else {
      var tmp_0 = newRootNode[bufferIndex];
      newRootNode[bufferIndex] = pushTail($this, (tmp_0 == null ? true : isArray(tmp_0)) ? tmp_0 : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, tail);
    }
    return newRootNode;
  }
  function insertIntoTail($this, root, tailIndex, element) {
    var tailSize = $this.e21_1 - rootSize($this) | 0;
    var newTail = copyOf_0($this.d21_1, get_MAX_BUFFER_SIZE());
    if (tailSize < get_MAX_BUFFER_SIZE()) {
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = $this.d21_1;
      var destinationOffset = tailIndex + 1 | 0;
      arrayCopy(this_0, newTail, destinationOffset, tailIndex, tailSize);
      newTail[tailIndex] = element;
      return new PersistentVector(root, newTail, $this.e21_1 + 1 | 0, $this.f21_1);
    }
    var lastElement = $this.d21_1[get_MAX_BUFFER_SIZE_MINUS_ONE()];
    // Inline function 'kotlin.collections.copyInto' call
    var this_1 = $this.d21_1;
    var destinationOffset_0 = tailIndex + 1 | 0;
    var endIndex = tailSize - 1 | 0;
    arrayCopy(this_1, newTail, destinationOffset_0, tailIndex, endIndex);
    newTail[tailIndex] = element;
    return pushFilledTail($this, root, newTail, presizedBufferWith(lastElement));
  }
  function insertIntoRoot($this, root, shift, index, element, elementCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      var tmp;
      if (bufferIndex === 0) {
        // Inline function 'kotlin.arrayOfNulls' call
        var size = get_MAX_BUFFER_SIZE();
        tmp = fillArrayVal(Array(size), null);
      } else {
        tmp = copyOf_0(root, get_MAX_BUFFER_SIZE());
      }
      var newRoot = tmp;
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset = bufferIndex + 1 | 0;
      var endIndex = get_MAX_BUFFER_SIZE_MINUS_ONE();
      arrayCopy(root, newRoot, destinationOffset, bufferIndex, endIndex);
      elementCarry.g21_1 = root[get_MAX_BUFFER_SIZE_MINUS_ONE()];
      newRoot[bufferIndex] = element;
      return newRoot;
    }
    var newRoot_0 = copyOf_0(root, get_MAX_BUFFER_SIZE());
    var lowerLevelShift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    var tmp_0 = root[bufferIndex];
    newRoot_0[bufferIndex] = insertIntoRoot($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, index, element, elementCarry);
    var inductionVariable = bufferIndex + 1 | 0;
    var last = get_MAX_BUFFER_SIZE();
    if (inductionVariable < last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (newRoot_0[i] == null)
          break $l$loop;
        var tmp_1 = root[i];
        newRoot_0[i] = insertIntoRoot($this, (!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE(), lowerLevelShift, 0, elementCarry.g21_1, elementCarry);
      }
       while (inductionVariable < last);
    return newRoot_0;
  }
  function removeFromTailAt($this, root, rootSize, shift, index) {
    var tailSize = $this.e21_1 - rootSize | 0;
    assert(index < tailSize);
    if (tailSize === 1) {
      return pullLastBufferFromRoot($this, root, rootSize, shift);
    }
    var newTail = copyOf_0($this.d21_1, get_MAX_BUFFER_SIZE());
    if (index < (tailSize - 1 | 0)) {
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = $this.d21_1;
      var startIndex = index + 1 | 0;
      arrayCopy(this_0, newTail, index, startIndex, tailSize);
    }
    newTail[tailSize - 1 | 0] = null;
    return new PersistentVector(root, newTail, (rootSize + tailSize | 0) - 1 | 0, shift);
  }
  function pullLastBufferFromRoot($this, root, rootSize, shift) {
    if (shift === 0) {
      var buffer = root.length === get_MUTABLE_BUFFER_SIZE() ? copyOf_0(root, get_MAX_BUFFER_SIZE()) : root;
      return new SmallPersistentVector(buffer);
    }
    var tailCarry = new ObjectRef(null);
    var newRoot = ensureNotNull(pullLastBuffer($this, root, shift, rootSize - 1 | 0, tailCarry));
    var tmp = tailCarry.g21_1;
    var newTail = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
    if (newRoot[1] == null) {
      var tmp_0 = newRoot[0];
      var lowerLevelRoot = (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE();
      return new PersistentVector(lowerLevelRoot, newTail, rootSize, shift - get_LOG_MAX_BUFFER_SIZE() | 0);
    }
    return new PersistentVector(newRoot, newTail, rootSize, shift);
  }
  function pullLastBuffer($this, root, shift, index, tailCarry) {
    var bufferIndex = indexSegment(index, shift);
    var tmp;
    if (shift === get_LOG_MAX_BUFFER_SIZE()) {
      tailCarry.g21_1 = root[bufferIndex];
      tmp = null;
    } else {
      var tmp_0 = root[bufferIndex];
      tmp = pullLastBuffer($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, index, tailCarry);
    }
    var newBufferAtIndex = tmp;
    if (newBufferAtIndex == null ? bufferIndex === 0 : false) {
      return null;
    }
    var newRoot = copyOf_0(root, get_MAX_BUFFER_SIZE());
    newRoot[bufferIndex] = newBufferAtIndex;
    return newRoot;
  }
  function removeFromRootAt($this, root, shift, index, tailCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      var tmp;
      if (bufferIndex === 0) {
        // Inline function 'kotlin.arrayOfNulls' call
        var size = get_MAX_BUFFER_SIZE();
        tmp = fillArrayVal(Array(size), null);
      } else {
        tmp = copyOf_0(root, get_MAX_BUFFER_SIZE());
      }
      var newRoot = tmp;
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = bufferIndex + 1 | 0;
      var endIndex = get_MAX_BUFFER_SIZE();
      arrayCopy(root, newRoot, bufferIndex, startIndex, endIndex);
      newRoot[get_MAX_BUFFER_SIZE() - 1 | 0] = tailCarry.g21_1;
      tailCarry.g21_1 = root[bufferIndex];
      return newRoot;
    }
    var bufferLastIndex = get_MAX_BUFFER_SIZE_MINUS_ONE();
    if (root[bufferLastIndex] == null) {
      bufferLastIndex = indexSegment(rootSize($this) - 1 | 0, shift);
    }
    var newRoot_0 = copyOf_0(root, get_MAX_BUFFER_SIZE());
    var lowerLevelShift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    var inductionVariable = bufferLastIndex;
    var last = bufferIndex + 1 | 0;
    if (last <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp_0 = newRoot_0[i];
        newRoot_0[i] = removeFromRootAt($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, 0, tailCarry);
      }
       while (!(i === last));
    var tmp_1 = newRoot_0[bufferIndex];
    newRoot_0[bufferIndex] = removeFromRootAt($this, (!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE(), lowerLevelShift, index, tailCarry);
    return newRoot_0;
  }
  function bufferFor($this, index) {
    if (rootSize($this) <= index) {
      return $this.d21_1;
    }
    var buffer = $this.c21_1;
    var shift = $this.f21_1;
    while (shift > 0) {
      var tmp = buffer[indexSegment(index, shift)];
      buffer = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
      shift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    }
    return buffer;
  }
  function setInRoot($this, root, shift, index, e) {
    var bufferIndex = indexSegment(index, shift);
    var newRoot = copyOf_0(root, get_MAX_BUFFER_SIZE());
    if (shift === 0) {
      newRoot[bufferIndex] = e;
    } else {
      var tmp = newRoot[bufferIndex];
      newRoot[bufferIndex] = setInRoot($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, index, e);
    }
    return newRoot;
  }
  function PersistentVector(root, tail, size, rootShift) {
    AbstractPersistentList.call(this);
    this.c21_1 = root;
    this.d21_1 = tail;
    this.e21_1 = size;
    this.f21_1 = rootShift;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.e21_1 > get_MAX_BUFFER_SIZE())) {
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVector.<anonymous>' call
      var message = 'Trie-based persistent vector should have at least ' + (get_MAX_BUFFER_SIZE() + 1 | 0) + ' elements, got ' + this.e21_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    assert((this.e21_1 - rootSize_1(this.e21_1) | 0) <= coerceAtMost(this.d21_1.length, get_MAX_BUFFER_SIZE()));
  }
  protoOf(PersistentVector).l = function () {
    return this.e21_1;
  };
  protoOf(PersistentVector).y = function (element) {
    var tailSize = this.e21_1 - rootSize(this) | 0;
    if (tailSize < get_MAX_BUFFER_SIZE()) {
      var newTail = copyOf_0(this.d21_1, get_MAX_BUFFER_SIZE());
      newTail[tailSize] = element;
      return new PersistentVector(this.c21_1, newTail, this.e21_1 + 1 | 0, this.f21_1);
    }
    var newTail_0 = presizedBufferWith(element);
    return pushFilledTail(this, this.c21_1, this.d21_1, newTail_0);
  };
  protoOf(PersistentVector).y20 = function (index, element) {
    ListImplementation_instance.p1(index, this.e21_1);
    if (index === this.e21_1) {
      return this.y(element);
    }
    var rootSize_0 = rootSize(this);
    if (index >= rootSize_0) {
      return insertIntoTail(this, this.c21_1, index - rootSize_0 | 0, element);
    }
    var elementCarry = new ObjectRef(null);
    var newRoot = insertIntoRoot(this, this.c21_1, this.f21_1, index, element, elementCarry);
    return insertIntoTail(this, newRoot, 0, elementCarry.g21_1);
  };
  protoOf(PersistentVector).k1 = function (index) {
    ListImplementation_instance.x1(index, this.e21_1);
    var rootSize_0 = rootSize(this);
    if (index >= rootSize_0) {
      return removeFromTailAt(this, this.c21_1, rootSize_0, this.f21_1, index - rootSize_0 | 0);
    }
    var newRoot = removeFromRootAt(this, this.c21_1, this.f21_1, index, new ObjectRef(this.d21_1[0]));
    return removeFromTailAt(this, newRoot, rootSize_0, this.f21_1, 0);
  };
  protoOf(PersistentVector).x20 = function () {
    return new PersistentVectorBuilder(this, this.c21_1, this.d21_1, this.f21_1);
  };
  protoOf(PersistentVector).p = function (index) {
    ListImplementation_instance.p1(index, this.e21_1);
    var tmp = this.d21_1;
    return new PersistentVectorIterator(this.c21_1, isArray(tmp) ? tmp : THROW_CCE(), index, this.e21_1, (this.f21_1 / get_LOG_MAX_BUFFER_SIZE() | 0) + 1 | 0);
  };
  protoOf(PersistentVector).m = function (index) {
    ListImplementation_instance.x1(index, this.e21_1);
    var buffer = bufferFor(this, index);
    var tmp = buffer[index & get_MAX_BUFFER_SIZE_MINUS_ONE()];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(PersistentVector).v = function (index, element) {
    ListImplementation_instance.x1(index, this.e21_1);
    if (rootSize(this) <= index) {
      var newTail = copyOf_0(this.d21_1, get_MAX_BUFFER_SIZE());
      newTail[index & get_MAX_BUFFER_SIZE_MINUS_ONE()] = element;
      return new PersistentVector(this.c21_1, newTail, this.e21_1, this.f21_1);
    }
    var newRoot = setInRoot(this, this.c21_1, this.f21_1, index, element);
    return new PersistentVector(newRoot, this.d21_1, this.e21_1, this.f21_1);
  };
  function rootSize_0($this) {
    if ($this.p21_1 <= get_MAX_BUFFER_SIZE()) {
      return 0;
    }
    return rootSize_1($this.p21_1);
  }
  function tailSize($this, size) {
    if (size <= get_MAX_BUFFER_SIZE()) {
      return size;
    }
    return size - rootSize_1(size) | 0;
  }
  function tailSize_0($this) {
    return tailSize($this, $this.p21_1);
  }
  function isMutable($this, buffer) {
    return buffer.length === get_MUTABLE_BUFFER_SIZE() ? buffer[get_MUTABLE_BUFFER_SIZE() - 1 | 0] === $this.m21_1 : false;
  }
  function makeMutable($this, buffer) {
    if (buffer == null) {
      return mutableBuffer($this);
    }
    if (isMutable($this, buffer)) {
      return buffer;
    }
    // Inline function 'kotlin.collections.copyInto' call
    var destination = mutableBuffer($this);
    var endIndex = coerceAtMost(buffer.length, get_MAX_BUFFER_SIZE());
    arrayCopy(buffer, destination, 0, 0, endIndex);
    return destination;
  }
  function mutableBufferWith($this, element) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = get_MUTABLE_BUFFER_SIZE();
    var buffer = fillArrayVal(Array(size), null);
    buffer[0] = element;
    buffer[get_MUTABLE_BUFFER_SIZE() - 1 | 0] = $this.m21_1;
    return buffer;
  }
  function mutableBuffer($this) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = get_MUTABLE_BUFFER_SIZE();
    var buffer = fillArrayVal(Array(size), null);
    buffer[get_MUTABLE_BUFFER_SIZE() - 1 | 0] = $this.m21_1;
    return buffer;
  }
  function pushFilledTail_0($this, root, filledTail, newTail) {
    var tmp;
    if ($this.p21_1 >> get_LOG_MAX_BUFFER_SIZE() > 1 << $this.l21_1) {
      $this.n21_1 = pushTail_0($this, mutableBufferWith($this, root), filledTail, $this.l21_1 + get_LOG_MAX_BUFFER_SIZE() | 0);
      $this.o21_1 = newTail;
      $this.l21_1 = $this.l21_1 + get_LOG_MAX_BUFFER_SIZE() | 0;
      $this.p21_1 = $this.p21_1 + 1 | 0;
      tmp = Unit_instance;
    } else if (root == null) {
      $this.n21_1 = filledTail;
      $this.o21_1 = newTail;
      $this.p21_1 = $this.p21_1 + 1 | 0;
      tmp = Unit_instance;
    } else {
      $this.n21_1 = pushTail_0($this, root, filledTail, $this.l21_1);
      $this.o21_1 = newTail;
      $this.p21_1 = $this.p21_1 + 1 | 0;
      tmp = Unit_instance;
    }
    return tmp;
  }
  function pushTail_0($this, root, tail, shift) {
    var index = indexSegment($this.p21_1 - 1 | 0, shift);
    var mutableRoot = makeMutable($this, root);
    if (shift === get_LOG_MAX_BUFFER_SIZE()) {
      mutableRoot[index] = tail;
    } else {
      var tmp = mutableRoot[index];
      mutableRoot[index] = pushTail_0($this, (tmp == null ? true : isArray(tmp)) ? tmp : THROW_CCE(), tail, shift - get_LOG_MAX_BUFFER_SIZE() | 0);
    }
    return mutableRoot;
  }
  function copyToBuffer($this, buffer, bufferIndex, sourceIterator) {
    var index = bufferIndex;
    while (index < get_MAX_BUFFER_SIZE() ? sourceIterator.b1() : false) {
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      buffer[tmp0] = sourceIterator.d1();
    }
    return buffer;
  }
  function pushBuffersIncreasingHeightIfNeeded($this, root, rootSize, buffers) {
    var buffersIterator = arrayIterator(buffers);
    var mutableRoot = rootSize >> get_LOG_MAX_BUFFER_SIZE() < 1 << $this.l21_1 ? pushBuffers($this, root, rootSize, $this.l21_1, buffersIterator) : makeMutable($this, root);
    while (buffersIterator.b1()) {
      $this.l21_1 = $this.l21_1 + get_LOG_MAX_BUFFER_SIZE() | 0;
      mutableRoot = mutableBufferWith($this, mutableRoot);
      pushBuffers($this, mutableRoot, 1 << $this.l21_1, $this.l21_1, buffersIterator);
    }
    return mutableRoot;
  }
  function pushBuffers($this, root, rootSize, shift, buffersIterator) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!buffersIterator.b1()) {
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVectorBuilder.pushBuffers.<anonymous>' call
      var message = 'invalid buffersIterator';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(shift >= 0)) {
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVectorBuilder.pushBuffers.<anonymous>' call
      var message_0 = 'negative shift';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    if (shift === 0) {
      return buffersIterator.d1();
    }
    var mutableRoot = makeMutable($this, root);
    var index = indexSegment(rootSize, shift);
    var tmp = index;
    var tmp_0 = mutableRoot[index];
    mutableRoot[tmp] = pushBuffers($this, (tmp_0 == null ? true : isArray(tmp_0)) ? tmp_0 : THROW_CCE(), rootSize, shift - get_LOG_MAX_BUFFER_SIZE() | 0, buffersIterator);
    $l$loop: while (true) {
      var tmp_1;
      index = index + 1 | 0;
      if (index < get_MAX_BUFFER_SIZE()) {
        tmp_1 = buffersIterator.b1();
      } else {
        tmp_1 = false;
      }
      if (!tmp_1) {
        break $l$loop;
      }
      var tmp_2 = index;
      var tmp_3 = mutableRoot[index];
      mutableRoot[tmp_2] = pushBuffers($this, (tmp_3 == null ? true : isArray(tmp_3)) ? tmp_3 : THROW_CCE(), 0, shift - get_LOG_MAX_BUFFER_SIZE() | 0, buffersIterator);
    }
    return mutableRoot;
  }
  function insertIntoTail_0($this, root, index, element) {
    var tailSize = tailSize_0($this);
    var mutableTail = makeMutable($this, $this.o21_1);
    if (tailSize < get_MAX_BUFFER_SIZE()) {
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = $this.o21_1;
      var destinationOffset = index + 1 | 0;
      arrayCopy(this_0, mutableTail, destinationOffset, index, tailSize);
      mutableTail[index] = element;
      $this.n21_1 = root;
      $this.o21_1 = mutableTail;
      $this.p21_1 = $this.p21_1 + 1 | 0;
    } else {
      var lastElement = $this.o21_1[get_MAX_BUFFER_SIZE_MINUS_ONE()];
      // Inline function 'kotlin.collections.copyInto' call
      var this_1 = $this.o21_1;
      var destinationOffset_0 = index + 1 | 0;
      var endIndex = get_MAX_BUFFER_SIZE_MINUS_ONE();
      arrayCopy(this_1, mutableTail, destinationOffset_0, index, endIndex);
      mutableTail[index] = element;
      pushFilledTail_0($this, root, mutableTail, mutableBufferWith($this, lastElement));
    }
  }
  function insertIntoRoot_0($this, root, shift, index, element, elementCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      elementCarry.g21_1 = root[get_MAX_BUFFER_SIZE_MINUS_ONE()];
      // Inline function 'kotlin.collections.copyInto' call
      var destination = makeMutable($this, root);
      var destinationOffset = bufferIndex + 1 | 0;
      var endIndex = get_MAX_BUFFER_SIZE_MINUS_ONE();
      arrayCopy(root, destination, destinationOffset, bufferIndex, endIndex);
      var mutableRoot = destination;
      mutableRoot[bufferIndex] = element;
      return mutableRoot;
    }
    var mutableRoot_0 = makeMutable($this, root);
    var lowerLevelShift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    var tmp = mutableRoot_0[bufferIndex];
    mutableRoot_0[bufferIndex] = insertIntoRoot_0($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), lowerLevelShift, index, element, elementCarry);
    var inductionVariable = bufferIndex + 1 | 0;
    var last = get_MAX_BUFFER_SIZE();
    if (inductionVariable < last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (mutableRoot_0[i] == null)
          break $l$loop;
        var tmp_0 = mutableRoot_0[i];
        mutableRoot_0[i] = insertIntoRoot_0($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, 0, elementCarry.g21_1, elementCarry);
      }
       while (inductionVariable < last);
    return mutableRoot_0;
  }
  function bufferFor_0($this, index) {
    if (rootSize_0($this) <= index) {
      return $this.o21_1;
    }
    var buffer = ensureNotNull($this.n21_1);
    var shift = $this.l21_1;
    while (shift > 0) {
      var tmp = buffer[indexSegment(index, shift)];
      buffer = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
      shift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    }
    return buffer;
  }
  function removeFromTailAt_0($this, root, rootSize, shift, index) {
    var tailSize = $this.p21_1 - rootSize | 0;
    assert(index < tailSize);
    var removedElement;
    if (tailSize === 1) {
      removedElement = $this.o21_1[0];
      pullLastBufferFromRoot_0($this, root, rootSize, shift);
    } else {
      removedElement = $this.o21_1[index];
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = $this.o21_1;
      var destination = makeMutable($this, $this.o21_1);
      var startIndex = index + 1 | 0;
      arrayCopy(this_0, destination, index, startIndex, tailSize);
      var mutableTail = destination;
      mutableTail[tailSize - 1 | 0] = null;
      $this.n21_1 = root;
      $this.o21_1 = mutableTail;
      $this.p21_1 = (rootSize + tailSize | 0) - 1 | 0;
      $this.l21_1 = shift;
    }
    return removedElement;
  }
  function removeFromRootAt_0($this, root, shift, index, tailCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      var removedElement = root[bufferIndex];
      // Inline function 'kotlin.collections.copyInto' call
      var destination = makeMutable($this, root);
      var startIndex = bufferIndex + 1 | 0;
      var endIndex = get_MAX_BUFFER_SIZE();
      arrayCopy(root, destination, bufferIndex, startIndex, endIndex);
      var mutableRoot = destination;
      mutableRoot[get_MAX_BUFFER_SIZE() - 1 | 0] = tailCarry.g21_1;
      tailCarry.g21_1 = removedElement;
      return mutableRoot;
    }
    var bufferLastIndex = get_MAX_BUFFER_SIZE_MINUS_ONE();
    if (root[bufferLastIndex] == null) {
      bufferLastIndex = indexSegment(rootSize_0($this) - 1 | 0, shift);
    }
    var mutableRoot_0 = makeMutable($this, root);
    var lowerLevelShift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    var inductionVariable = bufferLastIndex;
    var last = bufferIndex + 1 | 0;
    if (last <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp = mutableRoot_0[i];
        mutableRoot_0[i] = removeFromRootAt_0($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), lowerLevelShift, 0, tailCarry);
      }
       while (!(i === last));
    var tmp_0 = mutableRoot_0[bufferIndex];
    mutableRoot_0[bufferIndex] = removeFromRootAt_0($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, index, tailCarry);
    return mutableRoot_0;
  }
  function pullLastBufferFromRoot_0($this, root, rootSize, shift) {
    if (shift === 0) {
      $this.n21_1 = null;
      var tmp = $this;
      var tmp_0;
      if (root == null) {
        // Inline function 'kotlin.emptyArray' call
        tmp_0 = [];
      } else {
        tmp_0 = root;
      }
      tmp.o21_1 = tmp_0;
      $this.p21_1 = rootSize;
      $this.l21_1 = shift;
      return Unit_instance;
    }
    var tailCarry = new ObjectRef(null);
    var newRoot = ensureNotNull(pullLastBuffer_0($this, ensureNotNull(root), shift, rootSize, tailCarry));
    var tmp_1 = $this;
    var tmp_2 = tailCarry.g21_1;
    tmp_1.o21_1 = (!(tmp_2 == null) ? isArray(tmp_2) : false) ? tmp_2 : THROW_CCE();
    $this.p21_1 = rootSize;
    if (newRoot[1] == null) {
      var tmp_3 = $this;
      var tmp_4 = newRoot[0];
      tmp_3.n21_1 = (tmp_4 == null ? true : isArray(tmp_4)) ? tmp_4 : THROW_CCE();
      $this.l21_1 = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    } else {
      $this.n21_1 = newRoot;
      $this.l21_1 = shift;
    }
  }
  function pullLastBuffer_0($this, root, shift, rootSize, tailCarry) {
    var bufferIndex = indexSegment(rootSize - 1 | 0, shift);
    var tmp;
    if (shift === get_LOG_MAX_BUFFER_SIZE()) {
      tailCarry.g21_1 = root[bufferIndex];
      tmp = null;
    } else {
      var tmp_0 = root[bufferIndex];
      tmp = pullLastBuffer_0($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, rootSize, tailCarry);
    }
    var newBufferAtIndex = tmp;
    if (newBufferAtIndex == null ? bufferIndex === 0 : false) {
      return null;
    }
    var mutableRoot = makeMutable($this, root);
    mutableRoot[bufferIndex] = newBufferAtIndex;
    return mutableRoot;
  }
  function setInRoot_0($this, root, shift, index, e, oldElementCarry) {
    var bufferIndex = indexSegment(index, shift);
    var mutableRoot = makeMutable($this, root);
    if (shift === 0) {
      if (!(mutableRoot === root)) {
        $this.j1_1 = $this.j1_1 + 1 | 0;
      }
      oldElementCarry.g21_1 = mutableRoot[bufferIndex];
      mutableRoot[bufferIndex] = e;
      return mutableRoot;
    }
    var tmp = mutableRoot[bufferIndex];
    mutableRoot[bufferIndex] = setInRoot_0($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, index, e, oldElementCarry);
    return mutableRoot;
  }
  function PersistentVectorBuilder(vector, vectorRoot, vectorTail, rootShift) {
    AbstractMutableList.call(this);
    this.i21_1 = vector;
    this.j21_1 = vectorRoot;
    this.k21_1 = vectorTail;
    this.l21_1 = rootShift;
    this.m21_1 = new MutabilityOwnership();
    this.n21_1 = this.j21_1;
    this.o21_1 = this.k21_1;
    this.p21_1 = this.i21_1.l();
  }
  protoOf(PersistentVectorBuilder).l = function () {
    return this.p21_1;
  };
  protoOf(PersistentVectorBuilder).q21 = function () {
    return this.j1_1;
  };
  protoOf(PersistentVectorBuilder).b3 = function () {
    var tmp = this;
    var tmp_0;
    if (this.n21_1 === this.j21_1 ? this.o21_1 === this.k21_1 : false) {
      tmp_0 = this.i21_1;
    } else {
      this.m21_1 = new MutabilityOwnership();
      this.j21_1 = this.n21_1;
      this.k21_1 = this.o21_1;
      var tmp_1;
      if (this.n21_1 == null) {
        var tmp_2;
        // Inline function 'kotlin.collections.isEmpty' call
        if (this.o21_1.length === 0) {
          tmp_2 = persistentVectorOf();
        } else {
          tmp_2 = new SmallPersistentVector(copyOf_0(this.o21_1, this.p21_1));
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = new PersistentVector(ensureNotNull(this.n21_1), this.o21_1, this.p21_1, this.l21_1);
      }
      tmp_0 = tmp_1;
    }
    tmp.i21_1 = tmp_0;
    return this.i21_1;
  };
  protoOf(PersistentVectorBuilder).y = function (element) {
    this.j1_1 = this.j1_1 + 1 | 0;
    var tailSize = tailSize_0(this);
    if (tailSize < get_MAX_BUFFER_SIZE()) {
      var mutableTail = makeMutable(this, this.o21_1);
      mutableTail[tailSize] = element;
      this.o21_1 = mutableTail;
      this.p21_1 = this.p21_1 + 1 | 0;
    } else {
      var newTail = mutableBufferWith(this, element);
      pushFilledTail_0(this, this.n21_1, this.o21_1, newTail);
    }
    return true;
  };
  protoOf(PersistentVectorBuilder).e1 = function (elements) {
    if (elements.s()) {
      return false;
    }
    this.j1_1 = this.j1_1 + 1 | 0;
    var tailSize = tailSize_0(this);
    var elementsIterator = elements.n();
    if ((get_MAX_BUFFER_SIZE() - tailSize | 0) >= elements.l()) {
      this.o21_1 = copyToBuffer(this, makeMutable(this, this.o21_1), tailSize, elementsIterator);
      this.p21_1 = this.p21_1 + elements.l() | 0;
    } else {
      var buffersSize = ((elements.l() + tailSize | 0) - 1 | 0) / get_MAX_BUFFER_SIZE() | 0;
      // Inline function 'kotlin.arrayOfNulls' call
      var buffers = fillArrayVal(Array(buffersSize), null);
      buffers[0] = copyToBuffer(this, makeMutable(this, this.o21_1), tailSize, elementsIterator);
      var inductionVariable = 1;
      if (inductionVariable < buffersSize)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          buffers[index] = copyToBuffer(this, mutableBuffer(this), 0, elementsIterator);
        }
         while (inductionVariable < buffersSize);
      var tmp = this;
      var tmp_0 = this.n21_1;
      var tmp_1 = rootSize_0(this);
      tmp.n21_1 = pushBuffersIncreasingHeightIfNeeded(this, tmp_0, tmp_1, isArray(buffers) ? buffers : THROW_CCE());
      this.o21_1 = copyToBuffer(this, mutableBuffer(this), 0, elementsIterator);
      this.p21_1 = this.p21_1 + elements.l() | 0;
    }
    return true;
  };
  protoOf(PersistentVectorBuilder).w1 = function (index, element) {
    ListImplementation_instance.p1(index, this.p21_1);
    if (index === this.p21_1) {
      this.y(element);
      return Unit_instance;
    }
    this.j1_1 = this.j1_1 + 1 | 0;
    var rootSize = rootSize_0(this);
    if (index >= rootSize) {
      insertIntoTail_0(this, this.n21_1, index - rootSize | 0, element);
      return Unit_instance;
    }
    var elementCarry = new ObjectRef(null);
    var newRest = insertIntoRoot_0(this, ensureNotNull(this.n21_1), this.l21_1, index, element, elementCarry);
    var tmp = elementCarry.g21_1;
    insertIntoTail_0(this, newRest, 0, (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE());
  };
  protoOf(PersistentVectorBuilder).m = function (index) {
    ListImplementation_instance.x1(index, this.p21_1);
    var buffer = bufferFor_0(this, index);
    var tmp = buffer[index & get_MAX_BUFFER_SIZE_MINUS_ONE()];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(PersistentVectorBuilder).k1 = function (index) {
    ListImplementation_instance.x1(index, this.p21_1);
    this.j1_1 = this.j1_1 + 1 | 0;
    var rootSize = rootSize_0(this);
    if (index >= rootSize) {
      var tmp = removeFromTailAt_0(this, this.n21_1, rootSize, this.l21_1, index - rootSize | 0);
      return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    }
    var elementCarry = new ObjectRef(this.o21_1[0]);
    var newRoot = removeFromRootAt_0(this, ensureNotNull(this.n21_1), this.l21_1, index, elementCarry);
    removeFromTailAt_0(this, newRoot, rootSize, this.l21_1, 0);
    var tmp_0 = elementCarry.g21_1;
    return (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
  };
  protoOf(PersistentVectorBuilder).v = function (index, element) {
    ListImplementation_instance.x1(index, this.p21_1);
    if (rootSize_0(this) <= index) {
      var mutableTail = makeMutable(this, this.o21_1);
      if (!(mutableTail === this.o21_1)) {
        this.j1_1 = this.j1_1 + 1 | 0;
      }
      var tailIndex = index & get_MAX_BUFFER_SIZE_MINUS_ONE();
      var oldElement = mutableTail[tailIndex];
      mutableTail[tailIndex] = element;
      this.o21_1 = mutableTail;
      return (oldElement == null ? true : !(oldElement == null)) ? oldElement : THROW_CCE();
    }
    var oldElementCarry = new ObjectRef(null);
    this.n21_1 = setInRoot_0(this, ensureNotNull(this.n21_1), this.l21_1, index, element, oldElementCarry);
    var tmp = oldElementCarry.g21_1;
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(PersistentVectorBuilder).n = function () {
    return this.vb();
  };
  protoOf(PersistentVectorBuilder).vb = function () {
    return this.p(0);
  };
  protoOf(PersistentVectorBuilder).p = function (index) {
    ListImplementation_instance.p1(index, this.p21_1);
    return new PersistentVectorMutableIterator(this, index);
  };
  function PersistentVectorIterator(root, tail, index, size, trieHeight) {
    AbstractListIterator.call(this, index, size);
    this.t21_1 = tail;
    var trieSize = rootSize_1(size);
    var trieIndex = coerceAtMost(index, trieSize);
    this.u21_1 = new TrieIterator(root, trieIndex, trieSize, trieHeight);
  }
  protoOf(PersistentVectorIterator).d1 = function () {
    this.v20();
    if (this.u21_1.b1()) {
      this.t20_1 = this.t20_1 + 1 | 0;
      return this.u21_1.d1();
    }
    var tmp3 = this.t20_1;
    this.t20_1 = tmp3 + 1 | 0;
    return this.t21_1[tmp3 - this.u21_1.u20_1 | 0];
  };
  protoOf(PersistentVectorIterator).r1 = function () {
    this.w20();
    if (this.t20_1 > this.u21_1.u20_1) {
      this.t20_1 = this.t20_1 - 1 | 0;
      return this.t21_1[this.t20_1 - this.u21_1.u20_1 | 0];
    }
    this.t20_1 = this.t20_1 - 1 | 0;
    return this.u21_1.r1();
  };
  function reset($this) {
    $this.u20_1 = $this.c22_1.p21_1;
    $this.d22_1 = $this.c22_1.q21();
    $this.f22_1 = -1;
    setupTrieIterator($this);
  }
  function setupTrieIterator($this) {
    var root = $this.c22_1.n21_1;
    if (root == null) {
      $this.e22_1 = null;
      return Unit_instance;
    }
    var trieSize = rootSize_1($this.c22_1.p21_1);
    var trieIndex = coerceAtMost($this.t20_1, trieSize);
    var trieHeight = ($this.c22_1.l21_1 / get_LOG_MAX_BUFFER_SIZE() | 0) + 1 | 0;
    if ($this.e22_1 == null) {
      $this.e22_1 = new TrieIterator(root, trieIndex, trieSize, trieHeight);
    } else {
      ensureNotNull($this.e22_1).g22(root, trieIndex, trieSize, trieHeight);
    }
  }
  function checkForComodification($this) {
    if (!($this.d22_1 === $this.c22_1.q21()))
      throw ConcurrentModificationException_init_$Create$();
  }
  function checkHasIterated($this) {
    if ($this.f22_1 === -1)
      throw IllegalStateException_init_$Create$_0();
  }
  function PersistentVectorMutableIterator(builder, index) {
    AbstractListIterator.call(this, index, builder.p21_1);
    this.c22_1 = builder;
    this.d22_1 = this.c22_1.q21();
    this.e22_1 = null;
    this.f22_1 = -1;
    setupTrieIterator(this);
  }
  protoOf(PersistentVectorMutableIterator).r1 = function () {
    checkForComodification(this);
    this.w20();
    this.f22_1 = this.t20_1 - 1 | 0;
    var tmp1_elvis_lhs = this.e22_1;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp_0 = this.c22_1.o21_1;
      this.t20_1 = this.t20_1 - 1 | 0;
      var tmp_1 = tmp_0[this.t20_1];
      return (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var trieIterator = tmp;
    if (this.t20_1 > trieIterator.u20_1) {
      var tmp_2 = this.c22_1.o21_1;
      this.t20_1 = this.t20_1 - 1 | 0;
      var tmp_3 = tmp_2[this.t20_1 - trieIterator.u20_1 | 0];
      return (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
    }
    this.t20_1 = this.t20_1 - 1 | 0;
    return trieIterator.r1();
  };
  protoOf(PersistentVectorMutableIterator).d1 = function () {
    checkForComodification(this);
    this.v20();
    this.f22_1 = this.t20_1;
    var tmp2_elvis_lhs = this.e22_1;
    var tmp;
    if (tmp2_elvis_lhs == null) {
      var tmp_0 = this.c22_1.o21_1;
      var tmp1 = this.t20_1;
      this.t20_1 = tmp1 + 1 | 0;
      var tmp_1 = tmp_0[tmp1];
      return (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      tmp = tmp2_elvis_lhs;
    }
    var trieIterator = tmp;
    if (trieIterator.b1()) {
      this.t20_1 = this.t20_1 + 1 | 0;
      return trieIterator.d1();
    }
    var tmp_2 = this.c22_1.o21_1;
    var tmp6 = this.t20_1;
    this.t20_1 = tmp6 + 1 | 0;
    var tmp_3 = tmp_2[tmp6 - trieIterator.u20_1 | 0];
    return (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
  };
  protoOf(PersistentVectorMutableIterator).c1 = function () {
    checkForComodification(this);
    checkHasIterated(this);
    this.c22_1.k1(this.f22_1);
    if (this.f22_1 < this.t20_1)
      this.t20_1 = this.f22_1;
    reset(this);
  };
  function bufferOfSize($this, size) {
    // Inline function 'kotlin.arrayOfNulls' call
    return fillArrayVal(Array(size), null);
  }
  function Companion_6() {
    Companion_instance_7 = this;
    var tmp = this;
    // Inline function 'kotlin.emptyArray' call
    var tmp$ret$0 = [];
    tmp.h22_1 = new SmallPersistentVector(tmp$ret$0);
  }
  var Companion_instance_7;
  function Companion_getInstance_7() {
    if (Companion_instance_7 == null)
      new Companion_6();
    return Companion_instance_7;
  }
  function SmallPersistentVector(buffer) {
    Companion_getInstance_7();
    AbstractPersistentList.call(this);
    this.i22_1 = buffer;
    assert(this.i22_1.length <= get_MAX_BUFFER_SIZE());
  }
  protoOf(SmallPersistentVector).l = function () {
    return this.i22_1.length;
  };
  protoOf(SmallPersistentVector).y = function (element) {
    if (this.l() < get_MAX_BUFFER_SIZE()) {
      var newBuffer = copyOf_0(this.i22_1, this.l() + 1 | 0);
      newBuffer[this.l()] = element;
      return new SmallPersistentVector(newBuffer);
    }
    var tail = presizedBufferWith(element);
    return new PersistentVector(this.i22_1, tail, this.l() + 1 | 0, 0);
  };
  protoOf(SmallPersistentVector).e1 = function (elements) {
    if ((this.l() + elements.l() | 0) <= get_MAX_BUFFER_SIZE()) {
      var newBuffer = copyOf_0(this.i22_1, this.l() + elements.l() | 0);
      var index = this.l();
      var tmp0_iterator = elements.n();
      while (tmp0_iterator.b1()) {
        var element = tmp0_iterator.d1();
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        newBuffer[tmp1] = element;
      }
      return new SmallPersistentVector(newBuffer);
    }
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.mutate' call
    // Inline function 'kotlin.apply' call
    var this_0 = this.x20();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.SmallPersistentVector.addAll.<anonymous>' call
    this_0.e1(elements);
    return this_0.b3();
  };
  protoOf(SmallPersistentVector).y20 = function (index, element) {
    ListImplementation_instance.p1(index, this.l());
    if (index === this.l()) {
      return this.y(element);
    }
    if (this.l() < get_MAX_BUFFER_SIZE()) {
      var newBuffer = bufferOfSize(this, this.l() + 1 | 0);
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = this.i22_1;
      arrayCopy(this_0, newBuffer, 0, 0, index);
      // Inline function 'kotlin.collections.copyInto' call
      var this_1 = this.i22_1;
      var destinationOffset = index + 1 | 0;
      var endIndex = this.l();
      arrayCopy(this_1, newBuffer, destinationOffset, index, endIndex);
      newBuffer[index] = element;
      return new SmallPersistentVector(newBuffer);
    }
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var root = this.i22_1.slice();
    // Inline function 'kotlin.collections.copyInto' call
    var this_2 = this.i22_1;
    var destinationOffset_0 = index + 1 | 0;
    var endIndex_0 = this.l() - 1 | 0;
    arrayCopy(this_2, root, destinationOffset_0, index, endIndex_0);
    root[index] = element;
    var tail = presizedBufferWith(this.i22_1[get_MAX_BUFFER_SIZE_MINUS_ONE()]);
    return new PersistentVector(root, tail, this.l() + 1 | 0, 0);
  };
  protoOf(SmallPersistentVector).k1 = function (index) {
    ListImplementation_instance.x1(index, this.l());
    if (this.l() === 1) {
      return Companion_getInstance_7().h22_1;
    }
    var newBuffer = copyOf_0(this.i22_1, this.l() - 1 | 0);
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = this.i22_1;
    var startIndex = index + 1 | 0;
    var endIndex = this.l();
    arrayCopy(this_0, newBuffer, index, startIndex, endIndex);
    return new SmallPersistentVector(newBuffer);
  };
  protoOf(SmallPersistentVector).x20 = function () {
    return new PersistentVectorBuilder(this, null, this.i22_1, 0);
  };
  protoOf(SmallPersistentVector).o = function (element) {
    return indexOf(this.i22_1, element);
  };
  protoOf(SmallPersistentVector).p = function (index) {
    ListImplementation_instance.p1(index, this.l());
    var tmp = this.i22_1;
    return new BufferIterator(isArray(tmp) ? tmp : THROW_CCE(), index, this.l());
  };
  protoOf(SmallPersistentVector).m = function (index) {
    ListImplementation_instance.x1(index, this.l());
    var tmp = this.i22_1[index];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(SmallPersistentVector).v = function (index, element) {
    ListImplementation_instance.x1(index, this.l());
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var newBuffer = this.i22_1.slice();
    newBuffer[index] = element;
    return new SmallPersistentVector(newBuffer);
  };
  function fillPath($this, index, startLevel) {
    var shift = imul($this.x21_1 - startLevel | 0, get_LOG_MAX_BUFFER_SIZE());
    var i = startLevel;
    while (i < $this.x21_1) {
      var tmp = $this.y21_1;
      var tmp_0 = i;
      var tmp_1 = $this.y21_1[i - 1 | 0];
      tmp[tmp_0] = ((!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE())[indexSegment(index, shift)];
      shift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
      i = i + 1 | 0;
    }
  }
  function fillPathIfNeeded($this, indexPredicate) {
    var shift = 0;
    while (indexSegment($this.t20_1, shift) === indexPredicate) {
      shift = shift + get_LOG_MAX_BUFFER_SIZE() | 0;
    }
    if (shift > 0) {
      var level = ($this.x21_1 - 1 | 0) - (shift / get_LOG_MAX_BUFFER_SIZE() | 0) | 0;
      fillPath($this, $this.t20_1, level + 1 | 0);
    }
  }
  function elementAtCurrentIndex($this) {
    var leafBufferIndex = $this.t20_1 & get_MAX_BUFFER_SIZE_MINUS_ONE();
    var tmp = $this.y21_1[$this.x21_1 - 1 | 0];
    return ((!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE())[leafBufferIndex];
  }
  function TrieIterator(root, index, size, height) {
    AbstractListIterator.call(this, index, size);
    this.x21_1 = height;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size_0 = this.x21_1;
    tmp.y21_1 = fillArrayVal(Array(size_0), null);
    this.z21_1 = index === size;
    this.y21_1[0] = root;
    fillPath(this, index - (this.z21_1 ? 1 : 0) | 0, 1);
  }
  protoOf(TrieIterator).g22 = function (root, index, size, height) {
    this.t20_1 = index;
    this.u20_1 = size;
    this.x21_1 = height;
    if (this.y21_1.length < height) {
      var tmp = this;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp.y21_1 = fillArrayVal(Array(height), null);
    }
    this.y21_1[0] = root;
    this.z21_1 = index === size;
    fillPath(this, index - (this.z21_1 ? 1 : 0) | 0, 1);
  };
  protoOf(TrieIterator).d1 = function () {
    if (!this.b1()) {
      throw NoSuchElementException_init_$Create$_0();
    }
    var result = elementAtCurrentIndex(this);
    this.t20_1 = this.t20_1 + 1 | 0;
    if (this.t20_1 === this.u20_1) {
      this.z21_1 = true;
      return result;
    }
    fillPathIfNeeded(this, 0);
    return result;
  };
  protoOf(TrieIterator).r1 = function () {
    if (!this.q1()) {
      throw NoSuchElementException_init_$Create$_0();
    }
    this.t20_1 = this.t20_1 - 1 | 0;
    if (this.z21_1) {
      this.z21_1 = false;
      return elementAtCurrentIndex(this);
    }
    fillPathIfNeeded(this, get_MAX_BUFFER_SIZE_MINUS_ONE());
    return elementAtCurrentIndex(this);
  };
  function persistentVectorOf() {
    return Companion_getInstance_7().h22_1;
  }
  function get_MAX_BUFFER_SIZE() {
    return MAX_BUFFER_SIZE;
  }
  var MAX_BUFFER_SIZE;
  function presizedBufferWith(element) {
    // Inline function 'kotlin.arrayOfNulls' call
    var buffer = fillArrayVal(Array(32), null);
    buffer[0] = element;
    return buffer;
  }
  function get_MAX_BUFFER_SIZE_MINUS_ONE() {
    return MAX_BUFFER_SIZE_MINUS_ONE;
  }
  var MAX_BUFFER_SIZE_MINUS_ONE;
  function rootSize_1(vectorSize) {
    return (vectorSize - 1 | 0) & -32;
  }
  function get_LOG_MAX_BUFFER_SIZE() {
    return LOG_MAX_BUFFER_SIZE;
  }
  var LOG_MAX_BUFFER_SIZE;
  function indexSegment(index, shift) {
    return index >> shift & 31;
  }
  function ObjectRef(value) {
    this.g21_1 = value;
  }
  function get_MUTABLE_BUFFER_SIZE() {
    return MUTABLE_BUFFER_SIZE;
  }
  var MUTABLE_BUFFER_SIZE;
  function createEntries($this) {
    return new PersistentHashMapEntries($this);
  }
  function Companion_7() {
    Companion_instance_8 = this;
    this.j22_1 = new PersistentHashMap(Companion_getInstance_9().k22_1, 0);
  }
  protoOf(Companion_7).l22 = function () {
    var tmp = this.j22_1;
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
    this.o22_1 = node;
    this.p22_1 = size;
  }
  protoOf(PersistentHashMap).l = function () {
    return this.p22_1;
  };
  protoOf(PersistentHashMap).i2 = function () {
    return new PersistentHashMapKeys(this);
  };
  protoOf(PersistentHashMap).j2 = function () {
    return new PersistentHashMapValues(this);
  };
  protoOf(PersistentHashMap).k2 = function () {
    return createEntries(this);
  };
  protoOf(PersistentHashMap).r2 = function (key) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return this.o22_1.u22(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMap).u2 = function (key) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return this.o22_1.v22(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMap).l2 = function (key, value) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp0_elvis_lhs = this.o22_1.w22(tmp$ret$0, key, value, 0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var newNodeResult = tmp;
    return new PersistentHashMap(newNodeResult.x22_1, this.l() + newNodeResult.y22_1 | 0);
  };
  protoOf(PersistentHashMap).m2 = function (key) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var newNode = this.o22_1.z22(tmp$ret$0, key, 0);
    if (this.o22_1 === newNode) {
      return this;
    }
    if (newNode == null) {
      return Companion_getInstance_8().l22();
    }
    return new PersistentHashMap(newNode, this.l() - 1 | 0);
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
    if ($this.a23_1[pathIndex].g23()) {
      return pathIndex;
    }
    if ($this.a23_1[pathIndex].k23()) {
      var node = $this.a23_1[pathIndex].h23();
      if (pathIndex === 6) {
        $this.a23_1[pathIndex + 1 | 0].j23(node.t22_1, node.t22_1.length);
      } else {
        $this.a23_1[pathIndex + 1 | 0].j23(node.t22_1, imul(get_ENTRY_SIZE(), node.i23()));
      }
      return moveToNextNodeWithData($this, pathIndex + 1 | 0);
    }
    return -1;
  }
  function ensureNextEntryIsReady($this) {
    if ($this.a23_1[$this.b23_1].g23()) {
      return Unit_instance;
    }
    var inductionVariable = $this.b23_1;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var result = moveToNextNodeWithData($this, i);
        if (result === -1 ? $this.a23_1[i].k23() : false) {
          $this.a23_1[i].l23();
          result = moveToNextNodeWithData($this, i);
        }
        if (!(result === -1)) {
          $this.b23_1 = result;
          return Unit_instance;
        }
        if (i > 0) {
          $this.a23_1[i - 1 | 0].l23();
        }
        $this.a23_1[i].j23(Companion_getInstance_9().k22_1.t22_1, 0);
      }
       while (0 <= inductionVariable);
    $this.c23_1 = false;
  }
  function checkHasNext($this) {
    if (!$this.b1())
      throw NoSuchElementException_init_$Create$_0();
  }
  function PersistentHashMapBaseIterator(node, path) {
    this.a23_1 = path;
    this.b23_1 = 0;
    this.c23_1 = true;
    this.a23_1[0].j23(node.t22_1, imul(get_ENTRY_SIZE(), node.i23()));
    this.b23_1 = 0;
    ensureNextEntryIsReady(this);
  }
  protoOf(PersistentHashMapBaseIterator).b1 = function () {
    return this.c23_1;
  };
  protoOf(PersistentHashMapBaseIterator).d1 = function () {
    checkHasNext(this);
    var result = this.a23_1[this.b23_1].d1();
    ensureNextEntryIsReady(this);
    return result;
  };
  function TrieNodeBaseIterator() {
    this.d23_1 = Companion_getInstance_9().k22_1.t22_1;
    this.e23_1 = 0;
    this.f23_1 = 0;
  }
  protoOf(TrieNodeBaseIterator).m23 = function (buffer, dataSize, index) {
    this.d23_1 = buffer;
    this.e23_1 = dataSize;
    this.f23_1 = index;
  };
  protoOf(TrieNodeBaseIterator).j23 = function (buffer, dataSize) {
    this.m23(buffer, dataSize, 0);
  };
  protoOf(TrieNodeBaseIterator).g23 = function () {
    return this.f23_1 < this.e23_1;
  };
  protoOf(TrieNodeBaseIterator).k23 = function () {
    assert(this.f23_1 >= this.e23_1);
    return this.f23_1 < this.d23_1.length;
  };
  protoOf(TrieNodeBaseIterator).h23 = function () {
    assert(this.k23());
    var tmp = this.d23_1[this.f23_1];
    return tmp instanceof TrieNode ? tmp : THROW_CCE();
  };
  protoOf(TrieNodeBaseIterator).l23 = function () {
    assert(this.k23());
    this.f23_1 = this.f23_1 + 1 | 0;
  };
  protoOf(TrieNodeBaseIterator).b1 = function () {
    return this.g23();
  };
  function TrieNodeKeysIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeKeysIterator).d1 = function () {
    assert(this.g23());
    this.f23_1 = this.f23_1 + 2 | 0;
    var tmp = this.d23_1[this.f23_1 - 2 | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  function TrieNodeValuesIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeValuesIterator).d1 = function () {
    assert(this.g23());
    this.f23_1 = this.f23_1 + 2 | 0;
    var tmp = this.d23_1[this.f23_1 - 1 | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  function TrieNodeEntriesIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeEntriesIterator).d1 = function () {
    assert(this.g23());
    this.f23_1 = this.f23_1 + 2 | 0;
    var tmp = this.d23_1[this.f23_1 - 2 | 0];
    var tmp_0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    var tmp_1 = this.d23_1[this.f23_1 - 1 | 0];
    return new MapEntry(tmp_0, (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE());
  };
  function MapEntry(key, value) {
    this.w23_1 = key;
    this.x23_1 = value;
  }
  protoOf(MapEntry).n2 = function () {
    return this.w23_1;
  };
  protoOf(MapEntry).o2 = function () {
    return this.x23_1;
  };
  protoOf(MapEntry).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.n2();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.o2();
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
      tmp = equals(tmp0_safe_receiver.n2(), this.n2()) ? equals(tmp0_safe_receiver.o2(), this.o2()) : false;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(MapEntry).toString = function () {
    return toString_0(this.n2()) + '=' + toString_0(this.o2());
  };
  function PersistentHashMapKeys(map) {
    AbstractSet.call(this);
    this.y23_1 = map;
  }
  protoOf(PersistentHashMapKeys).l = function () {
    return this.y23_1.l();
  };
  protoOf(PersistentHashMapKeys).l3 = function (element) {
    return this.y23_1.r2(element);
  };
  protoOf(PersistentHashMapKeys).q = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.l3((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapKeys).n = function () {
    return new PersistentHashMapKeysIterator(this.y23_1.o22_1);
  };
  function PersistentHashMapValues(map) {
    AbstractCollection.call(this);
    this.z23_1 = map;
  }
  protoOf(PersistentHashMapValues).l = function () {
    return this.z23_1.l();
  };
  protoOf(PersistentHashMapValues).q3 = function (element) {
    return this.z23_1.s2(element);
  };
  protoOf(PersistentHashMapValues).q = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.q3((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapValues).n = function () {
    return new PersistentHashMapValuesIterator(this.z23_1.o22_1);
  };
  function PersistentHashMapEntries(map) {
    AbstractSet.call(this);
    this.a24_1 = map;
  }
  protoOf(PersistentHashMapEntries).l = function () {
    return this.a24_1.l();
  };
  protoOf(PersistentHashMapEntries).b24 = function (element) {
    var tmp = !(element == null) ? element : THROW_CCE();
    if (!(!(tmp == null) ? isInterface(tmp, Entry) : false))
      return false;
    var tmp0_safe_receiver = this.a24_1.u2(element.n2());
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapEntries.contains.<anonymous>' call
      tmp_0 = equals(tmp0_safe_receiver, element.o2());
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? element.o2() == null ? this.a24_1.r2(element.n2()) : false : tmp1_elvis_lhs;
  };
  protoOf(PersistentHashMapEntries).q = function (element) {
    if (!(!(element == null) ? isInterface(element, Entry) : false))
      return false;
    return this.b24((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapEntries).n = function () {
    return new PersistentHashMapEntriesIterator(this.a24_1.o22_1);
  };
  function TrieNode_init_$Init$(dataMap, nodeMap, buffer, $this) {
    TrieNode.call($this, dataMap, nodeMap, buffer, null);
    return $this;
  }
  function TrieNode_init_$Create$(dataMap, nodeMap, buffer) {
    return TrieNode_init_$Init$(dataMap, nodeMap, buffer, objectCreate(protoOf(TrieNode)));
  }
  function ModificationResult(node, sizeDelta) {
    this.x22_1 = node;
    this.y22_1 = sizeDelta;
  }
  function asInsertResult($this) {
    return new ModificationResult($this, 1);
  }
  function asUpdateResult($this) {
    return new ModificationResult($this, 0);
  }
  function hasNodeAt($this, positionMask) {
    return !(($this.r22_1 & positionMask) === 0);
  }
  function keyAtIndex($this, keyIndex) {
    var tmp = $this.t22_1[keyIndex];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  }
  function valueAtKeyIndex($this, keyIndex) {
    var tmp = $this.t22_1[keyIndex + 1 | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  }
  function insertEntryAt($this, positionMask, key, value) {
    var keyIndex = $this.c24(positionMask);
    var newBuffer = insertEntryAtIndex($this.t22_1, keyIndex, key, value);
    return TrieNode_init_$Create$($this.q22_1 | positionMask, $this.r22_1, newBuffer);
  }
  function updateValueAtIndex($this, keyIndex, value) {
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var newBuffer = $this.t22_1.slice();
    newBuffer[keyIndex + 1 | 0] = value;
    return TrieNode_init_$Create$($this.q22_1, $this.r22_1, newBuffer);
  }
  function updateNodeAtIndex($this, nodeIndex, positionMask, newNode) {
    var newNodeBuffer = newNode.t22_1;
    if (newNodeBuffer.length === 2 ? newNode.r22_1 === 0 : false) {
      if ($this.t22_1.length === 1) {
        newNode.q22_1 = $this.r22_1;
        return newNode;
      }
      var keyIndex = $this.c24(positionMask);
      var newBuffer = replaceNodeWithEntry($this.t22_1, nodeIndex, keyIndex, newNodeBuffer[0], newNodeBuffer[1]);
      return TrieNode_init_$Create$($this.q22_1 ^ positionMask, $this.r22_1 ^ positionMask, newBuffer);
    }
    var newBuffer_0 = copyOf_0($this.t22_1, $this.t22_1.length);
    newBuffer_0[nodeIndex] = newNode;
    return TrieNode_init_$Create$($this.q22_1, $this.r22_1, newBuffer_0);
  }
  function removeNodeAtIndex($this, nodeIndex, positionMask) {
    if ($this.t22_1.length === 1)
      return null;
    var newBuffer = removeNodeAtIndex_0($this.t22_1, nodeIndex);
    return TrieNode_init_$Create$($this.q22_1, $this.r22_1 ^ positionMask, newBuffer);
  }
  function bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner) {
    var storedKey = keyAtIndex($this, keyIndex);
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = storedKey == null ? null : hashCode(storedKey);
    var storedKeyHash = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var storedValue = valueAtKeyIndex($this, keyIndex);
    var newNode = makeNode($this, storedKeyHash, storedKey, storedValue, newKeyHash, newKey, newValue, shift + 5 | 0, owner);
    var nodeIndex = $this.d24(positionMask) + 1 | 0;
    return replaceEntryWithNode($this.t22_1, keyIndex, nodeIndex, newNode);
  }
  function moveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift) {
    var newBuffer = bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, null);
    return TrieNode_init_$Create$($this.q22_1 ^ positionMask, $this.r22_1 | positionMask, newBuffer);
  }
  function makeNode($this, keyHash1, key1, value1, keyHash2, key2, value2, shift, owner) {
    if (shift > 30) {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$2 = [key1, value1, key2, value2];
      return new TrieNode(0, 0, tmp$ret$2, owner);
    }
    var setBit1 = indexSegment_0(keyHash1, shift);
    var setBit2 = indexSegment_0(keyHash2, shift);
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
    if ($this.t22_1.length === 2)
      return null;
    var newBuffer = removeEntryAtIndex_0($this.t22_1, keyIndex);
    return TrieNode_init_$Create$($this.q22_1 ^ positionMask, $this.r22_1, newBuffer);
  }
  function collisionRemoveEntryAtIndex($this, i) {
    if ($this.t22_1.length === 2)
      return null;
    var newBuffer = removeEntryAtIndex_0($this.t22_1, i);
    return TrieNode_init_$Create$(0, 0, newBuffer);
  }
  function collisionContainsKey($this, key) {
    var progression = step(until(0, $this.t22_1.length), 2);
    var inductionVariable = progression.bb_1;
    var last = progression.cb_1;
    var step_0 = progression.db_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, $this.t22_1[i]))
          return true;
      }
       while (!(i === last));
    return false;
  }
  function collisionGet($this, key) {
    var progression = step(until(0, $this.t22_1.length), 2);
    var inductionVariable = progression.bb_1;
    var last = progression.cb_1;
    var step_0 = progression.db_1;
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
    var progression = step(until(0, $this.t22_1.length), 2);
    var inductionVariable = progression.bb_1;
    var last = progression.cb_1;
    var step_0 = progression.db_1;
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
          var newBuffer = $this.t22_1.slice();
          newBuffer[i + 1 | 0] = value;
          return asUpdateResult(TrieNode_init_$Create$(0, 0, newBuffer));
        }
      }
       while (!(i === last));
    var newBuffer_0 = insertEntryAtIndex($this.t22_1, 0, key, value);
    return asInsertResult(TrieNode_init_$Create$(0, 0, newBuffer_0));
  }
  function collisionRemove($this, key) {
    var progression = step(until(0, $this.t22_1.length), 2);
    var inductionVariable = progression.bb_1;
    var last = progression.cb_1;
    var step_0 = progression.db_1;
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
  function replaceNode($this, targetNode, newNode, nodeIndex, positionMask) {
    return newNode == null ? removeNodeAtIndex($this, nodeIndex, positionMask) : !(targetNode === newNode) ? updateNodeAtIndex($this, nodeIndex, positionMask, newNode) : $this;
  }
  function Companion_8() {
    Companion_instance_9 = this;
    var tmp = this;
    // Inline function 'kotlin.emptyArray' call
    var tmp$ret$0 = [];
    tmp.k22_1 = TrieNode_init_$Create$(0, 0, tmp$ret$0);
  }
  var Companion_instance_9;
  function Companion_getInstance_9() {
    if (Companion_instance_9 == null)
      new Companion_8();
    return Companion_instance_9;
  }
  function TrieNode(dataMap, nodeMap, buffer, ownedBy) {
    Companion_getInstance_9();
    this.q22_1 = dataMap;
    this.r22_1 = nodeMap;
    this.s22_1 = ownedBy;
    this.t22_1 = buffer;
  }
  protoOf(TrieNode).i23 = function () {
    return countOneBits(this.q22_1);
  };
  protoOf(TrieNode).e24 = function (positionMask) {
    return !((this.q22_1 & positionMask) === 0);
  };
  protoOf(TrieNode).c24 = function (positionMask) {
    return imul(2, countOneBits(this.q22_1 & (positionMask - 1 | 0)));
  };
  protoOf(TrieNode).d24 = function (positionMask) {
    return (this.t22_1.length - 1 | 0) - countOneBits(this.r22_1 & (positionMask - 1 | 0)) | 0;
  };
  protoOf(TrieNode).f24 = function (nodeIndex) {
    var tmp = this.t22_1[nodeIndex];
    return tmp instanceof TrieNode ? tmp : THROW_CCE();
  };
  protoOf(TrieNode).u22 = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.e24(keyPositionMask)) {
      return equals(key, keyAtIndex(this, this.c24(keyPositionMask)));
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var targetNode = this.f24(this.d24(keyPositionMask));
      if (shift === 30) {
        return collisionContainsKey(targetNode, key);
      }
      return targetNode.u22(keyHash, key, shift + 5 | 0);
    }
    return false;
  };
  protoOf(TrieNode).v22 = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.e24(keyPositionMask)) {
      var keyIndex = this.c24(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return valueAtKeyIndex(this, keyIndex);
      }
      return null;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var targetNode = this.f24(this.d24(keyPositionMask));
      if (shift === 30) {
        return collisionGet(targetNode, key);
      }
      return targetNode.v22(keyHash, key, shift + 5 | 0);
    }
    return null;
  };
  protoOf(TrieNode).w22 = function (keyHash, key, value, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.e24(keyPositionMask)) {
      var keyIndex = this.c24(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        if (valueAtKeyIndex(this, keyIndex) === value)
          return null;
        return asUpdateResult(updateValueAtIndex(this, keyIndex, value));
      }
      return asInsertResult(moveEntryToNode(this, keyIndex, keyPositionMask, keyHash, key, value, shift));
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.d24(keyPositionMask);
      var targetNode = this.f24(nodeIndex);
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
        var tmp1_elvis_lhs = targetNode.w22(keyHash, key, value, shift + 5 | 0);
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
      var node = putResult.x22_1;
      tmp_2.x22_1 = updateNodeAtIndex(this, nodeIndex, keyPositionMask, node);
      return putResult;
    }
    return asInsertResult(insertEntryAt(this, keyPositionMask, key, value));
  };
  protoOf(TrieNode).z22 = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.e24(keyPositionMask)) {
      var keyIndex = this.c24(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return removeEntryAtIndex(this, keyIndex, keyPositionMask);
      }
      return this;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.d24(keyPositionMask);
      var targetNode = this.f24(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = collisionRemove(targetNode, key);
      } else {
        tmp = targetNode.z22(keyHash, key, shift + 5 | 0);
      }
      var newNode = tmp;
      return replaceNode(this, targetNode, newNode, nodeIndex, keyPositionMask);
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
  function indexSegment_0(index, shift) {
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
    this.r20_1 = new PersistentOrderedSet(EndOfChain_instance, EndOfChain_instance, Companion_getInstance_8().l22());
  }
  protoOf(Companion_9).s20 = function () {
    return this.r20_1;
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
    this.g24_1 = firstElement;
    this.h24_1 = lastElement;
    this.i24_1 = hashMap;
  }
  protoOf(PersistentOrderedSet).l = function () {
    return this.i24_1.l();
  };
  protoOf(PersistentOrderedSet).q = function (element) {
    return this.i24_1.r2(element);
  };
  protoOf(PersistentOrderedSet).y = function (element) {
    if (this.i24_1.r2(element)) {
      return this;
    }
    if (this.s()) {
      var newMap = this.i24_1.l2(element, Links_init_$Create$());
      return new PersistentOrderedSet(element, element, newMap);
    }
    var tmp = this.h24_1;
    var lastElement = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    var lastLinks = ensureNotNull(this.i24_1.u2(lastElement));
    var newMap_0 = this.i24_1.l2(lastElement, lastLinks.l24(element)).l2(element, Links_init_$Create$_0(lastElement));
    return new PersistentOrderedSet(this.g24_1, element, newMap_0);
  };
  protoOf(PersistentOrderedSet).z = function (element) {
    var tmp0_elvis_lhs = this.i24_1.u2(element);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var links = tmp;
    var newMap = this.i24_1.m2(element);
    if (links.m24()) {
      // Inline function 'kotlin.collections.get' call
      var this_0 = newMap;
      var key = links.j24_1;
      var tmp$ret$0 = (isInterface(this_0, Map) ? this_0 : THROW_CCE()).u2(key);
      var previousLinks = ensureNotNull(tmp$ret$0);
      var tmp_0 = newMap;
      var tmp_1 = links.j24_1;
      newMap = tmp_0.l2((tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE(), previousLinks.l24(links.k24_1));
    }
    if (links.o24()) {
      // Inline function 'kotlin.collections.get' call
      var this_1 = newMap;
      var key_0 = links.k24_1;
      var tmp$ret$1 = (isInterface(this_1, Map) ? this_1 : THROW_CCE()).u2(key_0);
      var nextLinks = ensureNotNull(tmp$ret$1);
      var tmp_2 = newMap;
      var tmp_3 = links.k24_1;
      newMap = tmp_2.l2((tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE(), nextLinks.n24(links.j24_1));
    }
    var newFirstElement = !links.m24() ? links.k24_1 : this.g24_1;
    var newLastElement = !links.o24() ? links.j24_1 : this.h24_1;
    return new PersistentOrderedSet(newFirstElement, newLastElement, newMap);
  };
  protoOf(PersistentOrderedSet).n = function () {
    return new PersistentOrderedSetIterator(this.g24_1, this.i24_1);
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
    this.j24_1 = previous;
    this.k24_1 = next;
  }
  protoOf(Links).l24 = function (newNext) {
    return new Links(this.j24_1, newNext);
  };
  protoOf(Links).n24 = function (newPrevious) {
    return new Links(newPrevious, this.k24_1);
  };
  protoOf(Links).o24 = function () {
    return !(this.k24_1 === EndOfChain_instance);
  };
  protoOf(Links).m24 = function () {
    return !(this.j24_1 === EndOfChain_instance);
  };
  function checkHasNext_0($this) {
    if (!$this.b1())
      throw NoSuchElementException_init_$Create$_0();
  }
  function PersistentOrderedSetIterator(nextElement, map) {
    this.p24_1 = nextElement;
    this.q24_1 = map;
    this.r24_1 = 0;
  }
  protoOf(PersistentOrderedSetIterator).b1 = function () {
    return this.r24_1 < this.q24_1.l();
  };
  protoOf(PersistentOrderedSetIterator).d1 = function () {
    checkHasNext_0(this);
    var tmp = this.p24_1;
    var result = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    this.r24_1 = this.r24_1 + 1 | 0;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.getOrElse' call
    var tmp0_elvis_lhs = this.q24_1.u2(result);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      throw ConcurrentModificationException_init_$Create$_0('Hash code of an element (' + result + ') has changed after it was added to the persistent set.');
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    tmp_0.p24_1 = tmp_1.k24_1;
    return result;
  };
  function EndOfChain() {
  }
  var EndOfChain_instance;
  function EndOfChain_getInstance() {
    return EndOfChain_instance;
  }
  function ListImplementation() {
  }
  protoOf(ListImplementation).x1 = function (index, size) {
    if (index < 0 ? true : index >= size) {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', size: ' + size);
    }
  };
  protoOf(ListImplementation).p1 = function (index, size) {
    if (index < 0 ? true : index > size) {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', size: ' + size);
    }
  };
  var ListImplementation_instance;
  function ListImplementation_getInstance() {
    return ListImplementation_instance;
  }
  function MutabilityOwnership() {
  }
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
        tmp_0 = (!_this__u8e3s4.u1i() ? true : equals(_this__u8e3s4, other)) ? true : equals(_this__u8e3s4.i13_1, other.i13_1);
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
    composer.h1e(tmp$ret$0);
    var slot = composer.l1f();
    var tmp;
    if (slot === Companion_getInstance_0().z18_1) {
      var value = new ComposableLambdaImpl(key, tracked, block);
      composer.r1f(value);
      tmp = value;
    } else {
      if (!(slot instanceof ComposableLambdaImpl))
        THROW_CCE();
      slot.x24(block);
      tmp = slot;
    }
    var result = tmp;
    composer.i1e();
    return result;
  }
  function IntRef(element) {
    element = element === VOID ? 0 : element;
    this.s1x_1 = element;
  }
  protoOf(IntRef).toString = function () {
    return 'IntRef(element = ' + this.s1x_1 + ')@' + toString_1(hashCode(this), 16);
  };
  function Companion_10() {
    Companion_instance_11 = this;
    var tmp = this;
    var tmp_0 = Companion_getInstance_9().k22_1;
    tmp.y24_1 = new PersistentCompositionLocalHashMap(tmp_0 instanceof TrieNode ? tmp_0 : THROW_CCE(), 0);
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
  protoOf(PersistentCompositionLocalHashMap).k2 = function () {
    return protoOf(PersistentHashMap).k2.call(this);
  };
  protoOf(PersistentCompositionLocalHashMap).s1f = function (key, value) {
    var tmp0_elvis_lhs = this.o22_1.w22(hashCode(key), key, value, 0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var newNodeResult = tmp;
    return new PersistentCompositionLocalHashMap(newNodeResult.x22_1, this.l() + newNodeResult.y22_1 | 0);
  };
  function persistentCompositionLocalHashMapOf() {
    return Companion_getInstance_11().y24_1;
  }
  function get_emptyThreadMap() {
    _init_properties_ThreadMap_jvm_kt__b3bhkj();
    return emptyThreadMap;
  }
  var emptyThreadMap;
  function find_2($this, key) {
    var high = $this.v1t_1 - 1 | 0;
    var tmp0_subject = high;
    if (tmp0_subject === -1)
      return -1;
    else if (tmp0_subject === 0)
      return $this.w1t_1[0].equals(key) ? 0 : $this.w1t_1[0].xa(key) > 0 ? -2 : -1;
    var low = 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = $this.w1t_1[mid];
      var comparison = midVal.gc(key);
      if (comparison.xa(new Long(0, 0)) < 0)
        low = mid + 1 | 0;
      else if (comparison.xa(new Long(0, 0)) > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function ThreadMap(size, keys, values) {
    this.v1t_1 = size;
    this.w1t_1 = keys;
    this.x1t_1 = values;
  }
  protoOf(ThreadMap).y1t = function (key) {
    var index = find_2(this, key);
    return index >= 0 ? this.x1t_1[index] : null;
  };
  protoOf(ThreadMap).z1t = function (key, value) {
    var index = find_2(this, key);
    if (index < 0)
      return false;
    this.x1t_1[index] = value;
    return true;
  };
  protoOf(ThreadMap).a1u = function (key, value) {
    var size = this.v1t_1;
    // Inline function 'kotlin.collections.count' call
    var count = 0;
    var indexedObject = this.x1t_1;
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
        var oldKey = this.w1t_1[source];
        var oldValue = this.x1t_1[source];
        if (oldKey.xa(key) > 0) {
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
          var oldKey_0 = this.w1t_1[source];
          var oldValue_0 = this.x1t_1[source];
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
    var this_0 = HashSet_init_$Create$_0(_this__u8e3s4.l());
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.fastToSet.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.m(index);
        // Inline function 'androidx.compose.runtime.snapshots.fastToSet.<anonymous>.<anonymous>' call
        this_0.y(item);
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
    buffer.o8(prefix);
    var count = 0;
    var inductionVariable = 0;
    var last = _this__u8e3s4.l() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = _this__u8e3s4.m(index);
        count = count + 1 | 0;
        if (count > 1) {
          buffer.o8(separator);
        }
        if (limit < 0 ? true : count <= limit) {
          appendElement(buffer, element, transform);
        } else
          break $l$loop;
      }
       while (inductionVariable <= last);
    if (limit >= 0 ? count > limit : false) {
      buffer.o8(truncated);
    }
    buffer.o8(postfix);
    return buffer;
  }
  function appendElement(_this__u8e3s4, element, transform) {
    if (!(transform == null)) {
      _this__u8e3s4.o8(transform(element));
    } else {
      if (element == null ? true : isCharSequence(element)) {
        _this__u8e3s4.o8(element);
      } else {
        if (element instanceof Char) {
          _this__u8e3s4.x5(element.ib_1);
        } else {
          _this__u8e3s4.o8(toString_0(element));
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
    this.d25_1 = function_0;
  }
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0).fn = function () {
    return this.d25_1();
  };
  function sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0(function_0) {
    this.e25_1 = function_0;
  }
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0).fn = function () {
    return this.e25_1();
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
  protoOf(Companion_11).x11 = function () {
    return currentSnapshot();
  };
  protoOf(Companion_11).x1o = function (readObserver, writeObserver) {
    var tmp = currentSnapshot();
    var tmp0_safe_receiver = tmp instanceof MutableSnapshot ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.f25(readObserver, writeObserver);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var message = 'Cannot create a mutable snapshot of an read-only snapshot';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  };
  protoOf(Companion_11).x1q = function (observer) {
    advanceGlobalSnapshot(get_emptyLambda());
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    set_applyObservers(plus_1(get_applyObservers(), observer));
    var tmp = Snapshot$Companion$registerApplyObserver$lambda(observer);
    return new sam$androidx_compose_runtime_snapshots_ObserverHandle$0(tmp);
  };
  protoOf(Companion_11).g25 = function (observer) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    set_globalWriteObservers(plus_1(get_globalWriteObservers(), observer));
    advanceGlobalSnapshot_0();
    var tmp = Snapshot$Companion$registerGlobalWriteObserver$lambda(observer);
    return new sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0(tmp);
  };
  protoOf(Companion_11).x1n = function () {
    return currentSnapshot().x1n();
  };
  protoOf(Companion_11).v1n = function () {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.Companion.sendApplyNotifications.<anonymous>' call
    var tmp0_safe_receiver = get_currentGlobalSnapshot().lq().h25();
    var changes = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v1f()) === true;
    if (changes) {
      advanceGlobalSnapshot_0();
    }
  };
  var Companion_instance_12;
  function Companion_getInstance_12() {
    return Companion_instance_12;
  }
  function Snapshot(id, invalid) {
    this.l1c_1 = invalid;
    this.m1c_1 = id;
    this.n1c_1 = false;
    this.o1c_1 = !(id === 0) ? trackPinning(id, this.i25()) : -1;
  }
  protoOf(Snapshot).j25 = function (_set____db54di) {
    this.l1c_1 = _set____db54di;
  };
  protoOf(Snapshot).i25 = function () {
    return this.l1c_1;
  };
  protoOf(Snapshot).k25 = function (_set____db54di) {
    this.m1c_1 = _set____db54di;
  };
  protoOf(Snapshot).p1c = function () {
    return this.m1c_1;
  };
  protoOf(Snapshot).l25 = function (value) {
    // Inline function 'kotlin.error' call
    var message = 'Updating write count is not supported for this snapshot';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(Snapshot).m25 = function () {
    return 0;
  };
  protoOf(Snapshot).fn = function () {
    this.n1c_1 = true;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    this.o25();
  };
  protoOf(Snapshot).y1o = function () {
    var previous = get_threadSnapshot().lq();
    get_threadSnapshot().d1l(this);
    return previous;
  };
  protoOf(Snapshot).z1o = function (snapshot) {
    get_threadSnapshot().d1l(snapshot);
  };
  protoOf(Snapshot).s25 = function () {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    this.t25();
    this.u25();
  };
  protoOf(Snapshot).t25 = function () {
    set_openSnapshots(get_openSnapshots().z25(this.p1c()));
  };
  protoOf(Snapshot).u25 = function () {
    this.o25();
  };
  protoOf(Snapshot).a26 = function () {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.n1c_1) {
      // Inline function 'androidx.compose.runtime.snapshots.Snapshot.validateNotDisposed.<anonymous>' call
      var message = 'Cannot use a disposed snapshot';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  };
  protoOf(Snapshot).o25 = function () {
    if (this.o1c_1 >= 0) {
      releasePinningLocked(this.o1c_1);
      this.o1c_1 = -1;
    }
  };
  protoOf(Snapshot).b26 = function () {
    // Inline function 'kotlin.also' call
    var this_0 = this.o1c_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.Snapshot.takeoverPinnedSnapshot.<anonymous>' call
    this.o1c_1 = -1;
    return this_0;
  };
  function validateNotApplied($this) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.m1p_1) {
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.validateNotApplied.<anonymous>' call
      var message = 'Unsupported operation on a snapshot that has been applied';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function validateNotAppliedOrPinned($this) {
    // Inline function 'kotlin.check' call
    var tmp;
    if (!$this.m1p_1) {
      tmp = true;
    } else {
      // Inline function 'androidx.compose.runtime.snapshots.Snapshot.isPinned' call
      tmp = $this.o1c_1 >= 0;
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp) {
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.validateNotAppliedOrPinned.<anonymous>' call
      var message = 'Unsupported operation on a disposed or applied snapshot';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function abandon($this) {
    var modified = $this.h25();
    if (!(modified == null)) {
      validateNotApplied($this);
      $this.c26(null);
      var id = $this.p1c();
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values = modified.i1c_1;
      var inductionVariable = 0;
      var last = modified.h1c_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.abandon.<anonymous>' call
          var tmp = values[i];
          var current = (!(tmp == null) ? tmp : THROW_CCE()).s1t();
          while (!(current == null)) {
            if (current.d26_1 === id ? true : contains($this.j1p_1, current.d26_1)) {
              current.d26_1 = 0;
            }
            current = current.e26_1;
          }
        }
         while (inductionVariable < last);
    }
    $this.s25();
  }
  function releasePreviouslyPinnedSnapshotsLocked($this) {
    var inductionVariable = 0;
    var last = $this.k1p_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        releasePinningLocked($this.k1p_1[index]);
      }
       while (inductionVariable <= last);
  }
  function Companion_12() {
    Companion_instance_13 = this;
    this.f26_1 = new Int32Array(0);
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
    this.e1p_1 = readObserver;
    this.f1p_1 = writeObserver;
    this.g1p_1 = 0;
    this.h1p_1 = null;
    this.i1p_1 = null;
    this.j1p_1 = Companion_getInstance_14().g26_1;
    this.k1p_1 = Companion_getInstance_13().f26_1;
    this.l1p_1 = 1;
    this.m1p_1 = false;
  }
  protoOf(MutableSnapshot).p25 = function () {
    return this.e1p_1;
  };
  protoOf(MutableSnapshot).q25 = function () {
    return this.f1p_1;
  };
  protoOf(MutableSnapshot).f25 = function (readObserver, writeObserver) {
    this.a26();
    validateNotAppliedOrPinned(this);
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance' call
    this.h26(this.p1c());
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
    set_openSnapshots(get_openSnapshots().i26(newId));
    var currentInvalid = this.i25();
    this.j25(currentInvalid.i26(newId));
    var this_0 = new NestedMutableSnapshot(newId, addRange(currentInvalid, this.p1c() + 1 | 0, newId), mergedReadObserver(readObserver, this.p25()), mergedWriteObserver(writeObserver, this.q25()), this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    if (!this.m1p_1 ? !this.n1c_1 : false) {
      var previousId = this.p1c();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      var tmp0_0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0_0 + 1 | 0);
      this.k25(tmp0_0);
      set_openSnapshots(get_openSnapshots().i26(this.p1c()));
      this.j25(addRange(this.i25(), previousId + 1 | 0, this.p1c()));
    }
    return this_0;
  };
  protoOf(MutableSnapshot).n1p = function () {
    var modified = this.h25();
    var optimisticMerges_0 = !(modified == null) ? optimisticMerges(get_currentGlobalSnapshot().lq(), this, get_openSnapshots().z25(get_currentGlobalSnapshot().lq().p1c())) : null;
    var observers = emptyList();
    var globalModified = null;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    validateOpen(this);
    var tmp;
    if (modified == null ? true : modified.h1c_1 === 0) {
      this.t25();
      var previousGlobalSnapshot = get_currentGlobalSnapshot().lq();
      takeNewGlobalSnapshot(previousGlobalSnapshot, get_emptyLambda());
      var previousModified = previousGlobalSnapshot.h25();
      var tmp_0;
      // Inline function 'kotlin.collections.isNullOrEmpty' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(previousModified == null ? true : previousModified.s())) {
        observers = get_applyObservers();
        globalModified = previousModified;
        tmp_0 = Unit_instance;
      }
      tmp = tmp_0;
    } else {
      var previousGlobalSnapshot_0 = get_currentGlobalSnapshot().lq();
      var result = this.j26(get_nextSnapshotId(), optimisticMerges_0, get_openSnapshots().z25(previousGlobalSnapshot_0.p1c()));
      if (!equals(result, Success_getInstance()))
        return result;
      this.t25();
      takeNewGlobalSnapshot(previousGlobalSnapshot_0, get_emptyLambda());
      var previousModified_0 = previousGlobalSnapshot_0.h25();
      this.c26(null);
      previousGlobalSnapshot_0.c26(null);
      observers = get_applyObservers();
      globalModified = previousModified_0;
      tmp = Unit_instance;
    }
    this.m1p_1 = true;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    var this_0 = globalModified;
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0 == null ? true : this_0.s())) {
      var nonNullGlobalModified = ensureNotNull(globalModified);
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      var this_1 = observers;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_1.l() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_1.m(index);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>' call
          item(nonNullGlobalModified, this);
        }
         while (inductionVariable <= last);
    }
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(modified == null ? true : modified.s())) {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      var this_2 = observers;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = this_2.l() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = this_2.m(index_0);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>' call
          item_0(modified, this);
        }
         while (inductionVariable_0 <= last_0);
    }
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    this.u25();
    checkAndOverwriteUnusedRecordsLocked();
    var tmp0_safe_receiver = globalModified;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values = tmp0_safe_receiver.i1c_1;
      var inductionVariable_1 = 0;
      var last_1 = tmp0_safe_receiver.h1c_1;
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
      var values_0 = modified.i1c_1;
      var inductionVariable_2 = 0;
      var last_2 = modified.h1c_1;
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
    var tmp2_safe_receiver = this.i1p_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_3 = 0;
      var last_3 = tmp2_safe_receiver.l() - 1 | 0;
      if (inductionVariable_3 <= last_3)
        do {
          var index_1 = inductionVariable_3;
          inductionVariable_3 = inductionVariable_3 + 1 | 0;
          var item_1 = tmp2_safe_receiver.m(index_1);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>.<anonymous>' call
          processForUnusedRecordsLocked(item_1);
        }
         while (inductionVariable_3 <= last_3);
    }
    this.i1p_1 = null;
    return Success_getInstance();
  };
  protoOf(MutableSnapshot).n25 = function () {
    return false;
  };
  protoOf(MutableSnapshot).fn = function () {
    if (!this.n1c_1) {
      protoOf(Snapshot).fn.call(this);
      this.k26(this);
    }
  };
  protoOf(MutableSnapshot).l26 = function (snapshot) {
    this.l1p_1 = this.l1p_1 + 1 | 0;
  };
  protoOf(MutableSnapshot).k26 = function (snapshot) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.l1p_1 > 0)) {
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.nestedDeactivated.<anonymous>' call
      var message = 'no pending nested snapshots';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.l1p_1 = this.l1p_1 - 1 | 0;
    if (this.l1p_1 === 0) {
      if (!this.m1p_1) {
        abandon(this);
      }
    }
  };
  protoOf(MutableSnapshot).x1n = function () {
    if (this.m1p_1 ? true : this.n1c_1)
      return Unit_instance;
    this.m26();
  };
  protoOf(MutableSnapshot).t25 = function () {
    set_openSnapshots(get_openSnapshots().z25(this.p1c()).n26(this.j1p_1));
  };
  protoOf(MutableSnapshot).u25 = function () {
    releasePreviouslyPinnedSnapshotsLocked(this);
    protoOf(Snapshot).u25.call(this);
  };
  protoOf(MutableSnapshot).j26 = function (snapshotId, optimisticMerges, invalidSnapshots) {
    var mergedRecords = null;
    var start = this.i25().i26(this.p1c()).o26(this.j1p_1);
    var modified = ensureNotNull(this.h25());
    var statesToRemove = null;
    // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var values = modified.i1c_1;
    var inductionVariable = 0;
    var last = modified.h1c_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        $l$block_0: {
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>' call
          var tmp = values[i];
          var state = !(tmp == null) ? tmp : THROW_CCE();
          var first = state.s1t();
          var tmp0_elvis_lhs = readable(first, snapshotId, invalidSnapshots);
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            break $l$block_0;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var current = tmp_0;
          var tmp1_elvis_lhs = readable(first, this.p1c(), start);
          var tmp_1;
          if (tmp1_elvis_lhs == null) {
            break $l$block_0;
          } else {
            tmp_1 = tmp1_elvis_lhs;
          }
          var previous = tmp_1;
          if (!equals(current, previous)) {
            var tmp2_elvis_lhs = readable(first, this.p1c(), this.i25());
            var tmp_2;
            if (tmp2_elvis_lhs == null) {
              readError();
            } else {
              tmp_2 = tmp2_elvis_lhs;
            }
            var applied = tmp_2;
            var tmp4_elvis_lhs = optimisticMerges == null ? null : optimisticMerges.u2(current);
            var tmp_3;
            if (tmp4_elvis_lhs == null) {
              // Inline function 'kotlin.run' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
              tmp_3 = state.u1t(previous, current, applied);
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
                tmp_4.y(to(state, current.o1t()));
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
                tmp_5.y(state);
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
                tmp_6.y(!equals(merged, previous) ? to(state, merged) : to(state, previous.o1t()));
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
      this.m26();
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = tmp0_safe_receiver.l() - 1 | 0;
      var tmp_7;
      if (inductionVariable_0 <= last_0) {
        do {
          var index = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item = tmp0_safe_receiver.m(index);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
          var state_0 = item.z6();
          var stateRecord = item.a7();
          stateRecord.d26_1 = this.p1c();
          // Inline function 'androidx.compose.runtime.snapshots.sync' call
          // Inline function 'androidx.compose.runtime.synchronized' call
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          get_lock();
          stateRecord.e26_1 = state_0.s1t();
          state_0.t1t(stateRecord);
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
      var last_1 = tmp1_safe_receiver.l() - 1 | 0;
      if (inductionVariable_1 <= last_1)
        do {
          var index_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var item_0 = tmp1_safe_receiver.m(index_0);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
          modified.q20(item_0);
        }
         while (inductionVariable_1 <= last_1);
      var mergedList = this.i1p_1;
      this.i1p_1 = mergedList == null ? tmp1_safe_receiver : plus_2(mergedList, tmp1_safe_receiver);
    }
    return Success_getInstance();
  };
  protoOf(MutableSnapshot).m26 = function () {
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance' call
    this.h26(this.p1c());
    // Inline function 'kotlin.also' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    if (!this.m1p_1 ? !this.n1c_1 : false) {
      var previousId = this.p1c();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      this.k25(tmp0);
      set_openSnapshots(get_openSnapshots().i26(this.p1c()));
      this.j25(addRange(this.i25(), previousId + 1 | 0, this.p1c()));
    }
    return Unit_instance;
  };
  protoOf(MutableSnapshot).h26 = function (id) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    this.j1p_1 = this.j1p_1.i26(id);
  };
  protoOf(MutableSnapshot).p26 = function (id) {
    if (id >= 0) {
      var tmp = this;
      // Inline function 'kotlin.collections.plus' call
      // Inline function 'kotlin.collections.plus' call
      var this_0 = this.k1p_1;
      // Inline function 'kotlin.intArrayOf' call
      var elements = new Int32Array([id]);
      tmp.k1p_1 = primitiveArrayConcat([this_0, elements]);
    }
  };
  protoOf(MutableSnapshot).q26 = function (handles) {
    // Inline function 'kotlin.collections.isEmpty' call
    if (handles.length === 0)
      return Unit_instance;
    var pinned = this.k1p_1;
    var tmp = this;
    var tmp_0;
    // Inline function 'kotlin.collections.isEmpty' call
    if (pinned.length === 0) {
      tmp_0 = handles;
    } else {
      // Inline function 'kotlin.collections.plus' call
      tmp_0 = primitiveArrayConcat([pinned, handles]);
    }
    tmp.k1p_1 = tmp_0;
  };
  protoOf(MutableSnapshot).r26 = function (snapshots) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    this.j1p_1 = this.j1p_1.o26(snapshots);
  };
  protoOf(MutableSnapshot).r25 = function (state) {
    var tmp0_elvis_lhs = this.h25();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new IdentityArraySet();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.recordModified.<anonymous>' call
      this.c26(this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp.f1h(state);
  };
  protoOf(MutableSnapshot).l25 = function (_set____db54di) {
    this.g1p_1 = _set____db54di;
  };
  protoOf(MutableSnapshot).m25 = function () {
    return this.g1p_1;
  };
  protoOf(MutableSnapshot).c26 = function (_set____db54di) {
    this.h1p_1 = _set____db54di;
  };
  protoOf(MutableSnapshot).h25 = function () {
    return this.h1p_1;
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
    this.s26_1 = snapshot;
  }
  function SnapshotApplyResult() {
  }
  function GlobalSnapshot$_init_$lambda_36kgl8($it) {
    return function (state) {
      var this_0 = $it;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.l() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.m(index);
          // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          item(state);
        }
         while (inductionVariable <= last);
        tmp = Unit_instance;
      }
      return Unit_instance;
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
  protoOf(GlobalSnapshot).f25 = function (readObserver, writeObserver) {
    return takeNewSnapshot(GlobalSnapshot$takeNestedMutableSnapshot$lambda(readObserver, writeObserver));
  };
  protoOf(GlobalSnapshot).x1n = function () {
    advanceGlobalSnapshot_0();
  };
  protoOf(GlobalSnapshot).g27 = function (snapshot) {
    unsupported();
  };
  protoOf(GlobalSnapshot).k26 = function (snapshot) {
    return this.g27(snapshot);
  };
  protoOf(GlobalSnapshot).h27 = function (snapshot) {
    unsupported();
  };
  protoOf(GlobalSnapshot).l26 = function (snapshot) {
    return this.h27(snapshot);
  };
  protoOf(GlobalSnapshot).n1p = function () {
    var message = 'Cannot apply the global snapshot directly. Call Snapshot.advanceGlobalSnapshot';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(GlobalSnapshot).fn = function () {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    this.o25();
  };
  function StateRecord() {
    this.d26_1 = currentSnapshot().p1c();
    this.e26_1 = null;
  }
  function trackPinning(id, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    var pinned = invalid.i27(id);
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.trackPinning.<anonymous>' call
    return get_pinningTable().o27(pinned);
  }
  function releasePinningLocked(handle) {
    _init_properties_Snapshot_kt__l6n1ng();
    get_pinningTable().p27(handle);
  }
  function currentSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp0_elvis_lhs = get_threadSnapshot().lq();
    return tmp0_elvis_lhs == null ? get_currentGlobalSnapshot().lq() : tmp0_elvis_lhs;
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
    previousGlobalSnapshot = get_currentGlobalSnapshot().lq();
    modified = previousGlobalSnapshot.h25();
    if (!(modified == null)) {
      get_pendingApplyObserverCount().o27(1);
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
        var last = observers.l() - 1 | 0;
        var tmp_1;
        if (inductionVariable <= last) {
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = observers.m(index);
            // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>.<anonymous>' call
            item(tmp0_safe_receiver, previousGlobalSnapshot);
          }
           while (inductionVariable <= last);
          tmp_1 = Unit_instance;
        }
        tmp_0 = tmp_1;
      }finally {
        get_pendingApplyObserverCount().o27(-1);
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
      var values = tmp0_safe_receiver_0.i1c_1;
      var inductionVariable_0 = 0;
      var last_0 = tmp0_safe_receiver_0.h1c_1;
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
    if (!$this.f28_1) {
      $this.f28_1 = true;
      $this.e28_1.k26($this);
    }
  }
  function NestedMutableSnapshot(id, invalid, readObserver, writeObserver, parent) {
    MutableSnapshot.call(this, id, invalid, readObserver, writeObserver);
    this.e28_1 = parent;
    this.f28_1 = false;
    this.e28_1.l26(this);
  }
  protoOf(NestedMutableSnapshot).fn = function () {
    if (!this.n1c_1) {
      protoOf(MutableSnapshot).fn.call(this);
      deactivate(this);
    }
  };
  protoOf(NestedMutableSnapshot).n1p = function () {
    if (this.e28_1.m1p_1 ? true : this.e28_1.n1c_1)
      return new Failure(this);
    var modified = this.h25();
    var id = this.p1c();
    var optimisticMerges_0 = !(modified == null) ? optimisticMerges(this.e28_1, this, this.e28_1.i25()) : null;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    validateOpen(this);
    if (modified == null ? true : modified.h1c_1 === 0) {
      this.s25();
    } else {
      var result = this.j26(this.e28_1.p1c(), optimisticMerges_0, this.e28_1.i25());
      if (!equals(result, Success_getInstance()))
        return result;
      var tmp0_safe_receiver = this.e28_1.h25();
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.apply' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.NestedMutableSnapshot.apply.<anonymous>.<anonymous>' call
        tmp0_safe_receiver.n1o(modified);
        tmp = tmp0_safe_receiver;
      }
      if (tmp == null) {
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.NestedMutableSnapshot.apply.<anonymous>.<anonymous>' call
        this.e28_1.c26(modified);
        this.c26(null);
      }
    }
    if (this.e28_1.p1c() < id) {
      this.e28_1.m26();
    }
    this.e28_1.j25(this.e28_1.i25().z25(id).n26(this.j1p_1));
    this.e28_1.h26(id);
    this.e28_1.p26(this.b26());
    this.e28_1.r26(this.j1p_1);
    this.e28_1.q26(this.k1p_1);
    this.m1p_1 = true;
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
        result = result.i26(invalidId);
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
    var modified = applyingSnapshot.h25();
    var id = currentSnapshot.p1c();
    if (modified == null)
      return null;
    var start = applyingSnapshot.i25().i26(applyingSnapshot.p1c()).o26(applyingSnapshot.j1p_1);
    var result = null;
    // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var values = modified.i1c_1;
    var inductionVariable = 0;
    var last = modified.h1c_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        $l$block_0: {
          // Inline function 'androidx.compose.runtime.snapshots.optimisticMerges.<anonymous>' call
          var tmp = values[i];
          var state = !(tmp == null) ? tmp : THROW_CCE();
          var first = state.s1t();
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
            var tmp2_elvis_lhs = readable(first, applyingSnapshot.p1c(), applyingSnapshot.i25());
            var tmp_2;
            if (tmp2_elvis_lhs == null) {
              readError();
            } else {
              tmp_2 = tmp2_elvis_lhs;
            }
            var applied = tmp_2;
            var merged = state.u1t(previous, current, applied);
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
              tmp_3.l2(current, merged);
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
    if (!openSnapshots.m(snapshot.p1c())) {
      // Inline function 'kotlin.error' call
      var tmp = snapshot.p1c();
      var tmp_0 = snapshot.n1c_1;
      var tmp0_safe_receiver = snapshot instanceof MutableSnapshot ? snapshot : null;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m1p_1;
      var tmp_1 = toString(tmp1_elvis_lhs == null ? 'read-only' : tmp1_elvis_lhs);
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.validateOpen.<anonymous>' call
      var message = 'Snapshot is not open: id=' + tmp + ', disposed=' + tmp_0 + ', applied=' + tmp_1 + ', lowestPin=' + get_pinningTable().g28(-1);
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function takeNewGlobalSnapshot(previousGlobalSnapshot, block) {
    _init_properties_Snapshot_kt__l6n1ng();
    var result = block(get_openSnapshots().z25(previousGlobalSnapshot.p1c()));
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    var tmp0 = get_nextSnapshotId();
    set_nextSnapshotId(tmp0 + 1 | 0);
    var globalId = tmp0;
    set_openSnapshots(get_openSnapshots().z25(previousGlobalSnapshot.p1c()));
    get_currentGlobalSnapshot().w1i(new GlobalSnapshot(globalId, get_openSnapshots()));
    previousGlobalSnapshot.fn();
    set_openSnapshots(get_openSnapshots().i26(globalId));
    return result;
  }
  function checkAndOverwriteUnusedRecordsLocked() {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotWeakSet.removeIf' call
    var this_0 = get_extraStateObjects();
    var size = this_0.h28_1;
    var currentUsed = 0;
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var entry = this_0.j28_1[i];
        var value = entry == null ? null : entry.lq();
        var tmp;
        if (!(value == null)) {
          // Inline function 'androidx.compose.runtime.snapshots.checkAndOverwriteUnusedRecordsLocked.<anonymous>' call
          tmp = !!overwriteUnusedRecordsLocked(value);
        } else {
          tmp = false;
        }
        if (tmp) {
          if (!(currentUsed === i)) {
            this_0.j28_1[currentUsed] = entry;
            this_0.i28_1[currentUsed] = this_0.i28_1[i];
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
        this_0.j28_1[i_0] = null;
        this_0.i28_1[i_0] = 0;
      }
       while (inductionVariable_0 < size);
    if (!(currentUsed === size)) {
      this_0.h28_1 = currentUsed;
    }
  }
  function processForUnusedRecordsLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (overwriteUnusedRecordsLocked(state)) {
      get_extraStateObjects().f1h(state);
    }
  }
  function readable(r, id, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = r;
    var candidate = null;
    while (!(current == null)) {
      if (valid(current, id, invalid)) {
        candidate = candidate == null ? current : candidate.d26_1 < current.d26_1 ? current : candidate;
      }
      current = current.e26_1;
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
  function takeNewSnapshot(block) {
    _init_properties_Snapshot_kt__l6n1ng();
    return advanceGlobalSnapshot(takeNewSnapshot$lambda(block));
  }
  function overwriteUnusedRecordsLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = state.s1t();
    var overwriteRecord = null;
    var validRecord = null;
    var reuseLimit = get_pinningTable().g28(get_nextSnapshotId());
    var retainedRecords = 0;
    while (!(current == null)) {
      var currentId = current.d26_1;
      if (!(currentId === 0)) {
        if (currentId < reuseLimit) {
          if (validRecord == null) {
            validRecord = current;
            retainedRecords = retainedRecords + 1 | 0;
          } else {
            var tmp;
            if (current.d26_1 < validRecord.d26_1) {
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
                var this_0 = state.s1t();
                var current_0 = this_0;
                var youngest = this_0;
                while (!(current_0 == null)) {
                  // Inline function 'androidx.compose.runtime.snapshots.overwriteUnusedRecordsLocked.<anonymous>' call
                  if (current_0.d26_1 >= reuseLimit) {
                    tmp$ret$1 = current_0;
                    break $l$block;
                  }
                  if (youngest.d26_1 < current_0.d26_1)
                    youngest = current_0;
                  current_0 = current_0.e26_1;
                }
                tmp$ret$1 = youngest;
              }
              overwriteRecord = tmp$ret$1;
            }
            recordToOverwrite.d26_1 = 0;
            recordToOverwrite.n1t(overwriteRecord);
          }
        } else {
          retainedRecords = retainedRecords + 1 | 0;
        }
      }
      current = current.e26_1;
    }
    return retainedRecords > 1;
  }
  function valid(data, snapshot, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    return valid_0(snapshot, data.d26_1, invalid);
  }
  function valid_0(currentSnapshot, candidateSnapshot, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    return (!(candidateSnapshot === 0) ? candidateSnapshot <= currentSnapshot : false) ? !invalid.m(candidateSnapshot) : false;
  }
  function readable_0(_this__u8e3s4, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var snapshot = Companion_instance_12.x11();
    var tmp0_safe_receiver = snapshot.p25();
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(state);
    var tmp1_elvis_lhs = readable(_this__u8e3s4, snapshot.p1c(), snapshot.i25());
    var tmp;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.readable.<anonymous>' call
      var syncSnapshot = Companion_instance_12.x11();
      var tmp_0 = state.s1t();
      var tmp0_elvis_lhs = readable(tmp_0 instanceof StateRecord ? tmp_0 : THROW_CCE(), syncSnapshot.p1c(), syncSnapshot.i25());
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
    var snapshot = Companion_instance_12.x11();
    var tmp0_elvis_lhs = readable(r, snapshot.p1c(), snapshot.i25());
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
      var syncSnapshot = Companion_instance_12.x11();
      tmp = readable(r, syncSnapshot.p1c(), syncSnapshot.i25());
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
    snapshot.l25(snapshot.m25() + 1 | 0);
    var tmp1_safe_receiver = snapshot.q25();
    if (tmp1_safe_receiver == null)
      null;
    else
      tmp1_safe_receiver(state);
  }
  function overwritableRecord(_this__u8e3s4, state, snapshot, candidate) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (snapshot.n25()) {
      snapshot.r25(state);
    }
    var id = snapshot.p1c();
    if (candidate.d26_1 === id)
      return candidate;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.overwritableRecord.<anonymous>' call
    var newData = newOverwritableRecordLocked(_this__u8e3s4, state);
    newData.d26_1 = id;
    snapshot.r25(state);
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
      tmp0_safe_receiver.d26_1 = IntCompanionObject_instance.MAX_VALUE;
      tmp_0 = tmp0_safe_receiver;
    }
    var tmp1_elvis_lhs = tmp_0;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.apply' call
      var this_0 = _this__u8e3s4.o1t();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.newOverwritableRecordLocked.<anonymous>' call
      this_0.d26_1 = IntCompanionObject_instance.MAX_VALUE;
      this_0.e26_1 = state.s1t();
      state.t1t(this_0 instanceof StateRecord ? this_0 : THROW_CCE());
      var tmp_2 = this_0;
      tmp_1 = tmp_2 instanceof StateRecord ? tmp_2 : THROW_CCE();
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function usedLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = state.s1t();
    var validRecord = null;
    var reuseLimit = get_pinningTable().g28(get_nextSnapshotId()) - 1 | 0;
    var invalid = Companion_getInstance_14().g26_1;
    while (!(current == null)) {
      var currentId = current.d26_1;
      if (currentId === 0) {
        return current;
      }
      if (valid(current, reuseLimit, invalid)) {
        if (validRecord == null) {
          validRecord = current;
        } else {
          return current.d26_1 < validRecord.d26_1 ? current : validRecord;
        }
      }
      current = current.e26_1;
    }
    return null;
  }
  function writableRecord(_this__u8e3s4, state, snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (snapshot.n25()) {
      snapshot.r25(state);
    }
    var id = snapshot.p1c();
    var tmp0_elvis_lhs = readable(_this__u8e3s4, id, snapshot.i25());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      readError();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var readData = tmp;
    if (readData.d26_1 === snapshot.p1c())
      return readData;
    var newData = newWritableRecord(readData, state, snapshot);
    snapshot.r25(state);
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
    newData.n1t(_this__u8e3s4);
    newData.d26_1 = snapshot.p1c();
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
      set_openSnapshots(get_openSnapshots().i26(result.p1c()));
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
      openSnapshots = Companion_getInstance_14().g26_1;
      nextSnapshotId = 1;
      pinningTable = new SnapshotDoubleIndexHeap();
      extraStateObjects = new SnapshotWeakSet();
      applyObservers = emptyList();
      globalWriteObservers = emptyList();
      // Inline function 'kotlin.also' call
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      var this_0 = new GlobalSnapshot(tmp0, Companion_getInstance_14().g26_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.currentGlobalSnapshot.<anonymous>' call
      set_openSnapshots(get_openSnapshots().i26(this_0.p1c()));
      currentGlobalSnapshot = new AtomicReference(this_0);
      snapshotInitializer = get_currentGlobalSnapshot().lq();
      pendingApplyObserverCount = new AtomicInt(0);
    }
  }
  function shiftUp($this, index) {
    var values = $this.k27_1;
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
    var values = $this.k27_1;
    var half = $this.j27_1 >> 1;
    var current = index;
    while (current < half) {
      var right = (current + 1 | 0) << 1;
      var left = right - 1 | 0;
      if (right < $this.j27_1 ? values[right] < values[left] : false) {
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
    var values = $this.k27_1;
    var index = $this.l27_1;
    var handles = $this.m27_1;
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
    var capacity = $this.k27_1.length;
    if (atLeast <= capacity)
      return Unit_instance;
    var newCapacity = imul(capacity, 2);
    var newValues = new Int32Array(newCapacity);
    var newIndex = new Int32Array(newCapacity);
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = $this.k27_1;
    var endIndex = this_0.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, newValues, 0, 0, endIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var this_1 = $this.l27_1;
    var endIndex_0 = this_1.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = this_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_0, newIndex, 0, 0, endIndex_0);
    $this.k27_1 = newValues;
    $this.l27_1 = newIndex;
  }
  function allocateHandle($this) {
    var capacity = $this.m27_1.length;
    if ($this.n27_1 >= capacity) {
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
      var this_0 = $this.m27_1;
      var endIndex = this_0.length;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_3 = this_0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_3, newHandles, 0, 0, endIndex);
      $this.m27_1 = newHandles;
    }
    var handle = $this.n27_1;
    $this.n27_1 = $this.m27_1[$this.n27_1];
    return handle;
  }
  function freeHandle($this, handle) {
    $this.m27_1[handle] = $this.n27_1;
    $this.n27_1 = handle;
  }
  function SnapshotDoubleIndexHeap() {
    this.j27_1 = 0;
    this.k27_1 = new Int32Array(16);
    this.l27_1 = new Int32Array(16);
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = new Int32Array(16);
    while (tmp_0 < 16) {
      var tmp_2 = tmp_0;
      tmp_1[tmp_2] = tmp_2 + 1 | 0;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.m27_1 = tmp_1;
    this.n27_1 = 0;
  }
  protoOf(SnapshotDoubleIndexHeap).g28 = function (default_0) {
    return this.j27_1 > 0 ? this.k27_1[0] : default_0;
  };
  protoOf(SnapshotDoubleIndexHeap).o27 = function (value) {
    ensure(this, this.j27_1 + 1 | 0);
    var tmp1 = this.j27_1;
    this.j27_1 = tmp1 + 1 | 0;
    var i = tmp1;
    var handle = allocateHandle(this);
    this.k27_1[i] = value;
    this.l27_1[i] = handle;
    this.m27_1[handle] = i;
    shiftUp(this, i);
    return handle;
  };
  protoOf(SnapshotDoubleIndexHeap).p27 = function (handle) {
    var i = this.m27_1[handle];
    swap(this, i, this.j27_1 - 1 | 0);
    this.j27_1 = this.j27_1 - 1 | 0;
    shiftUp(this, i);
    shiftDown(this, i);
    freeHandle(this, handle);
  };
  function Companion_13() {
    Companion_instance_14 = this;
    this.g26_1 = new SnapshotIdSet(new Long(0, 0), new Long(0, 0), 0, null);
  }
  var Companion_instance_14;
  function Companion_getInstance_14() {
    if (Companion_instance_14 == null)
      new Companion_13();
    return Companion_instance_14;
  }
  function SnapshotIdSet$iterator$slambda(this$0, resultContinuation) {
    this.t28_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SnapshotIdSet$iterator$slambda).c29 = function ($this$sequence, $completion) {
    var tmp = this.d29($this$sequence, $completion);
    tmp.cd_1 = Unit_instance;
    tmp.dd_1 = null;
    return tmp.md();
  };
  protoOf(SnapshotIdSet$iterator$slambda).yd = function (p1, $completion) {
    return this.c29(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SnapshotIdSet$iterator$slambda).md = function () {
    var suspendResult = this.cd_1;
    $sm: do
      try {
        var tmp = this.ad_1;
        switch (tmp) {
          case 0:
            this.bd_1 = 15;
            this.v28_1 = this.t28_1.y25_1;
            if (!(this.v28_1 == null)) {
              this.w28_1 = intArrayIterator(this.v28_1);
              this.ad_1 = 1;
              continue $sm;
            } else {
              this.ad_1 = 4;
              continue $sm;
            }

          case 1:
            if (!this.w28_1.b1()) {
              this.ad_1 = 3;
              continue $sm;
            }

            this.x28_1 = this.w28_1.d1();
            this.ad_1 = 2;
            suspendResult = this.u28_1.mf(this.x28_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.ad_1 = 1;
            continue $sm;
          case 3:
            this.ad_1 = 4;
            continue $sm;
          case 4:
            if (!this.t28_1.w25_1.equals(new Long(0, 0))) {
              var tmp_0 = this;
              Companion_getInstance();
              tmp_0.y28_1 = until(0, 64).n();
              this.ad_1 = 5;
              continue $sm;
            } else {
              this.ad_1 = 9;
              continue $sm;
            }

          case 5:
            if (!this.y28_1.b1()) {
              this.ad_1 = 8;
              continue $sm;
            }

            this.z28_1 = this.y28_1.d1();
            if (!this.t28_1.w25_1.oc((new Long(1, 0)).lc(this.z28_1)).equals(new Long(0, 0))) {
              this.ad_1 = 6;
              suspendResult = this.u28_1.mf(this.z28_1 + this.t28_1.x25_1 | 0, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.ad_1 = 7;
              continue $sm;
            }

          case 6:
            this.ad_1 = 7;
            continue $sm;
          case 7:
            this.ad_1 = 5;
            continue $sm;
          case 8:
            this.ad_1 = 9;
            continue $sm;
          case 9:
            if (!this.t28_1.v25_1.equals(new Long(0, 0))) {
              var tmp_1 = this;
              Companion_getInstance();
              tmp_1.a29_1 = until(0, 64).n();
              this.ad_1 = 10;
              continue $sm;
            } else {
              this.ad_1 = 14;
              continue $sm;
            }

          case 10:
            if (!this.a29_1.b1()) {
              this.ad_1 = 13;
              continue $sm;
            }

            this.b29_1 = this.a29_1.d1();
            if (!this.t28_1.v25_1.oc((new Long(1, 0)).lc(this.b29_1)).equals(new Long(0, 0))) {
              this.ad_1 = 11;
              Companion_getInstance();
              suspendResult = this.u28_1.mf((this.b29_1 + 64 | 0) + this.t28_1.x25_1 | 0, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.ad_1 = 12;
              continue $sm;
            }

          case 11:
            this.ad_1 = 12;
            continue $sm;
          case 12:
            this.ad_1 = 10;
            continue $sm;
          case 13:
            this.ad_1 = 14;
            continue $sm;
          case 14:
            return Unit_instance;
          case 15:
            throw this.dd_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.bd_1 === 15) {
          throw e;
        } else {
          this.ad_1 = this.bd_1;
          this.dd_1 = e;
        }
      }
     while (true);
  };
  protoOf(SnapshotIdSet$iterator$slambda).d29 = function ($this$sequence, completion) {
    var i = new SnapshotIdSet$iterator$slambda(this.t28_1, completion);
    i.u28_1 = $this$sequence;
    return i;
  };
  function SnapshotIdSet$iterator$slambda_0(this$0, resultContinuation) {
    var i = new SnapshotIdSet$iterator$slambda(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.c29($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SnapshotIdSet(upperSet, lowerSet, lowerBound, belowBound) {
    Companion_getInstance_14();
    this.v25_1 = upperSet;
    this.w25_1 = lowerSet;
    this.x25_1 = lowerBound;
    this.y25_1 = belowBound;
  }
  protoOf(SnapshotIdSet).m = function (bit) {
    var offset = bit - this.x25_1 | 0;
    var tmp;
    if (offset >= 0) {
      Companion_getInstance();
      tmp = offset < 64;
    } else {
      tmp = false;
    }
    if (tmp) {
      return !(new Long(1, 0)).lc(offset).oc(this.w25_1).equals(new Long(0, 0));
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
        return !tmp_1.lc(offset - 64 | 0).oc(this.v25_1).equals(new Long(0, 0));
      } else {
        if (offset > 0) {
          return false;
        } else {
          var tmp0_safe_receiver = this.y25_1;
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
  protoOf(SnapshotIdSet).i26 = function (bit) {
    var offset = bit - this.x25_1 | 0;
    var tmp;
    if (offset >= 0) {
      Companion_getInstance();
      tmp = offset < 64;
    } else {
      tmp = false;
    }
    if (tmp) {
      var mask = (new Long(1, 0)).lc(offset);
      if (this.w25_1.oc(mask).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.v25_1, this.w25_1.pc(mask), this.x25_1, this.y25_1);
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
        var mask_0 = tmp_1.lc(offset - 64 | 0);
        if (this.v25_1.oc(mask_0).equals(new Long(0, 0))) {
          return new SnapshotIdSet(this.v25_1.pc(mask_0), this.w25_1, this.x25_1, this.y25_1);
        }
      } else {
        Companion_getInstance();
        if (offset >= imul(64, 2)) {
          if (!this.m(bit)) {
            var newUpperSet = this.v25_1;
            var newLowerSet = this.w25_1;
            var newLowerBound = this.x25_1;
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
                  var tmp0_safe_receiver = this.y25_1;
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
                      this_0.y(element);
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
                    if (!newLowerSet.oc((new Long(1, 0)).lc(index)).equals(new Long(0, 0))) {
                      newBelowBound.y(index + newLowerBound | 0);
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
            return (new SnapshotIdSet(tmp_5, tmp_6, tmp_7, tmp1_elvis_lhs == null ? this.y25_1 : tmp1_elvis_lhs)).i26(bit);
          }
        } else {
          var tmp2_elvis_lhs = this.y25_1;
          var tmp_8;
          if (tmp2_elvis_lhs == null) {
            // Inline function 'kotlin.intArrayOf' call
            var tmp$ret$3 = new Int32Array([bit]);
            return new SnapshotIdSet(this.v25_1, this.w25_1, this.x25_1, tmp$ret$3);
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
            return new SnapshotIdSet(this.v25_1, this.w25_1, this.x25_1, newBelowBound_0);
          }
        }
      }
    }
    return this;
  };
  protoOf(SnapshotIdSet).z25 = function (bit) {
    var offset = bit - this.x25_1 | 0;
    var tmp;
    if (offset >= 0) {
      Companion_getInstance();
      tmp = offset < 64;
    } else {
      tmp = false;
    }
    if (tmp) {
      var mask = (new Long(1, 0)).lc(offset);
      if (!this.w25_1.oc(mask).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.v25_1, this.w25_1.oc(mask.kc()), this.x25_1, this.y25_1);
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
        var mask_0 = tmp_1.lc(offset - 64 | 0);
        if (!this.v25_1.oc(mask_0).equals(new Long(0, 0))) {
          return new SnapshotIdSet(this.v25_1.oc(mask_0.kc()), this.w25_1, this.x25_1, this.y25_1);
        }
      } else {
        if (offset < 0) {
          var array = this.y25_1;
          if (!(array == null)) {
            var location = binarySearch(array, bit);
            if (location >= 0) {
              var newSize = array.length - 1 | 0;
              if (newSize === 0) {
                return new SnapshotIdSet(this.v25_1, this.w25_1, this.x25_1, null);
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
              return new SnapshotIdSet(this.v25_1, this.w25_1, this.x25_1, newBelowBound);
            }
          }
        }
      }
    }
    return this;
  };
  protoOf(SnapshotIdSet).n26 = function (bits) {
    if (bits === Companion_getInstance_14().g26_1)
      return this;
    if (this === Companion_getInstance_14().g26_1)
      return Companion_getInstance_14().g26_1;
    var tmp;
    if (bits.x25_1 === this.x25_1 ? bits.y25_1 === this.y25_1 : false) {
      tmp = new SnapshotIdSet(this.v25_1.oc(bits.v25_1.kc()), this.w25_1.oc(bits.w25_1.kc()), this.x25_1, this.y25_1);
    } else {
      // Inline function 'kotlin.collections.fold' call
      var accumulator = this;
      var tmp0_iterator = bits.n();
      while (tmp0_iterator.b1()) {
        var element = tmp0_iterator.d1();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.andNot.<anonymous>' call
        accumulator = accumulator.z25(element);
      }
      tmp = accumulator;
    }
    return tmp;
  };
  protoOf(SnapshotIdSet).o26 = function (bits) {
    if (bits === Companion_getInstance_14().g26_1)
      return this;
    if (this === Companion_getInstance_14().g26_1)
      return bits;
    var tmp;
    if (bits.x25_1 === this.x25_1 ? bits.y25_1 === this.y25_1 : false) {
      tmp = new SnapshotIdSet(this.v25_1.pc(bits.v25_1), this.w25_1.pc(bits.w25_1), this.x25_1, this.y25_1);
    } else {
      var tmp_0;
      if (this.y25_1 == null) {
        // Inline function 'kotlin.collections.fold' call
        var accumulator = bits;
        var tmp0_iterator = this.n();
        while (tmp0_iterator.b1()) {
          var element = tmp0_iterator.d1();
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
          accumulator = accumulator.i26(element);
        }
        tmp_0 = accumulator;
      } else {
        // Inline function 'kotlin.collections.fold' call
        var accumulator_0 = this;
        var tmp0_iterator_0 = bits.n();
        while (tmp0_iterator_0.b1()) {
          var element_0 = tmp0_iterator_0.d1();
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
          accumulator_0 = accumulator_0.i26(element_0);
        }
        tmp_0 = accumulator_0;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(SnapshotIdSet).n = function () {
    return sequence(SnapshotIdSet$iterator$slambda_0(this, null)).n();
  };
  protoOf(SnapshotIdSet).i27 = function (default_0) {
    var belowBound = this.y25_1;
    if (!(belowBound == null))
      return belowBound[0];
    if (!this.w25_1.equals(new Long(0, 0)))
      return this.x25_1 + lowestBitOf(this.w25_1) | 0;
    if (!this.v25_1.equals(new Long(0, 0))) {
      Companion_getInstance();
      return (this.x25_1 + 64 | 0) + lowestBitOf(this.v25_1) | 0;
    }
    return default_0;
  };
  protoOf(SnapshotIdSet).toString = function () {
    var tmp = anyToString(this);
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this, 10));
    var tmp0_iterator = this.n();
    while (tmp0_iterator.b1()) {
      var item = tmp0_iterator.d1();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.toString.<anonymous>' call
      var tmp$ret$0 = item.toString();
      destination.y(tmp$ret$0);
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
    if (b.oc(new Long(-1, 0)).equals(new Long(0, 0))) {
      base = base + 32 | 0;
      b = b.mc(32);
    }
    if (b.oc(new Long(65535, 0)).equals(new Long(0, 0))) {
      base = base + 16 | 0;
      b = b.mc(16);
    }
    if (b.oc(new Long(255, 0)).equals(new Long(0, 0))) {
      base = base + 8 | 0;
      b = b.mc(8);
    }
    if (b.oc(new Long(15, 0)).equals(new Long(0, 0))) {
      base = base + 4 | 0;
      b = b.mc(4);
    }
    if (!b.oc(new Long(1, 0)).equals(new Long(0, 0)))
      return base;
    if (!b.oc(new Long(2, 0)).equals(new Long(0, 0)))
      return base + 1 | 0;
    if (!b.oc(new Long(4, 0)).equals(new Long(0, 0)))
      return base + 2 | 0;
    if (!b.oc(new Long(8, 0)).equals(new Long(0, 0)))
      return base + 3 | 0;
    return -1;
  }
  function get_sync() {
    _init_properties_SnapshotStateList_kt__mu1ud5();
    return sync;
  }
  var sync;
  function StateListStateRecord(list) {
    StateRecord.call(this);
    this.g29_1 = list;
    this.h29_1 = 0;
    this.i29_1 = 0;
  }
  protoOf(StateListStateRecord).n1t = function (value) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    _get_sync_$accessor$8381d7_hayxw0();
    var tmp = this;
    tmp.g29_1 = (value instanceof StateListStateRecord ? value : THROW_CCE()).g29_1;
    this.h29_1 = value.h29_1;
    this.i29_1 = value.i29_1;
  };
  protoOf(StateListStateRecord).o1t = function () {
    return new StateListStateRecord(this.g29_1);
  };
  function SnapshotStateList() {
    this.j29_1 = new StateListStateRecord(persistentListOf());
  }
  protoOf(SnapshotStateList).s1t = function () {
    return this.j29_1;
  };
  protoOf(SnapshotStateList).t1t = function (value) {
    value.e26_1 = this.j29_1;
    var tmp = this;
    tmp.j29_1 = value instanceof StateListStateRecord ? value : THROW_CCE();
  };
  protoOf(SnapshotStateList).k29 = function () {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var tmp = this.j29_1;
    var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.<get-structure>.<anonymous>' call
    return current(this_0).i29_1;
  };
  protoOf(SnapshotStateList).l29 = function () {
    var tmp = this.j29_1;
    return readable_0(tmp instanceof StateListStateRecord ? tmp : THROW_CCE(), this);
  };
  protoOf(SnapshotStateList).l = function () {
    return this.l29().g29_1.l();
  };
  protoOf(SnapshotStateList).bf = function (element) {
    return this.l29().g29_1.q(element);
  };
  protoOf(SnapshotStateList).q = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.bf((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).cf = function (elements) {
    return this.l29().g29_1.r(elements);
  };
  protoOf(SnapshotStateList).r = function (elements) {
    return this.cf(elements);
  };
  protoOf(SnapshotStateList).m = function (index) {
    return this.l29().g29_1.m(index);
  };
  protoOf(SnapshotStateList).m29 = function (element) {
    return this.l29().g29_1.o(element);
  };
  protoOf(SnapshotStateList).o = function (element) {
    if (!(element == null ? true : !(element == null)))
      return -1;
    return this.m29((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).s = function () {
    return this.l29().g29_1.s();
  };
  protoOf(SnapshotStateList).n = function () {
    return this.vb();
  };
  protoOf(SnapshotStateList).vb = function () {
    return new StateListIterator(this, 0);
  };
  protoOf(SnapshotStateList).p = function (index) {
    return new StateListIterator(this, index);
  };
  protoOf(SnapshotStateList).x1c = function (element) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$8381d7_hayxw0();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.j29_1;
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      currentModification = current_0.h29_1;
      oldList = current_0.g29_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.add.<anonymous>' call
      var newList = ensureNotNull(oldList).y(element);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.j29_1;
      var this_1 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.x11();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_1, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$8381d7_hayxw0();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.h29_1 === currentModification) {
        $this$writable.g29_1 = newList;
        if (true) {
          $this$writable.i29_1 = $this$writable.i29_1 + 1 | 0;
        }
        $this$writable.h29_1 = $this$writable.h29_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      var this_2 = tmp_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_2) {
        result = true;
        break $l$loop_0;
      }
    }
    return result;
  };
  protoOf(SnapshotStateList).y = function (element) {
    return this.x1c((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).n29 = function (index, element) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$8381d7_hayxw0();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.j29_1;
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      currentModification = current_0.h29_1;
      oldList = current_0.g29_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.add.<anonymous>' call
      var newList = ensureNotNull(oldList).y20(index, element);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.j29_1;
      var this_1 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.x11();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_1, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$8381d7_hayxw0();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.h29_1 === currentModification) {
        $this$writable.g29_1 = newList;
        if (true) {
          $this$writable.i29_1 = $this$writable.i29_1 + 1 | 0;
        }
        $this$writable.h29_1 = $this$writable.h29_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      var this_2 = tmp_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_2) {
        result = true;
        break $l$loop_0;
      }
    }
    return Unit_instance;
  };
  protoOf(SnapshotStateList).w1 = function (index, element) {
    return this.n29(index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).o29 = function (elements) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$8381d7_hayxw0();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.j29_1;
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      currentModification = current_0.h29_1;
      oldList = current_0.g29_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.addAll.<anonymous>' call
      var newList = ensureNotNull(oldList).e1(elements);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.j29_1;
      var this_1 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.x11();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_1, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$8381d7_hayxw0();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.h29_1 === currentModification) {
        $this$writable.g29_1 = newList;
        if (true) {
          $this$writable.i29_1 = $this$writable.i29_1 + 1 | 0;
        }
        $this$writable.h29_1 = $this$writable.h29_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      var this_2 = tmp_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_2) {
        result = true;
        break $l$loop_0;
      }
    }
    return result;
  };
  protoOf(SnapshotStateList).e1 = function (elements) {
    return this.o29(elements);
  };
  protoOf(SnapshotStateList).f1 = function () {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
    // Inline function 'androidx.compose.runtime.snapshots.writable' call
    var tmp = this.j29_1;
    var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
    var snapshot = get_snapshotInitializer();
    // Inline function 'kotlin.also' call
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
    snapshot = Companion_instance_12.x11();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.clear.<anonymous>' call
    var $this$writable = writableRecord(this_0, this, snapshot);
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    _get_sync_$accessor$8381d7_hayxw0();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.clear.<anonymous>.<anonymous>' call
    $this$writable.g29_1 = persistentListOf();
    $this$writable.h29_1 = $this$writable.h29_1 + 1 | 0;
    $this$writable.i29_1 = $this$writable.i29_1 + 1 | 0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
    notifyWrite(snapshot, this);
  };
  protoOf(SnapshotStateList).p29 = function (element) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$8381d7_hayxw0();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.j29_1;
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      currentModification = current_0.h29_1;
      oldList = current_0.g29_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.remove.<anonymous>' call
      var newList = ensureNotNull(oldList).z(element);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.j29_1;
      var this_1 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.x11();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_1, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$8381d7_hayxw0();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.h29_1 === currentModification) {
        $this$writable.g29_1 = newList;
        if (true) {
          $this$writable.i29_1 = $this$writable.i29_1 + 1 | 0;
        }
        $this$writable.h29_1 = $this$writable.h29_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      var this_2 = tmp_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_2) {
        result = true;
        break $l$loop_0;
      }
    }
    return result;
  };
  protoOf(SnapshotStateList).z = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.p29((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).k1 = function (index) {
    // Inline function 'kotlin.also' call
    var this_0 = this.m(index);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.removeAt.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.update' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$8381d7_hayxw0();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.j29_1;
      var this_1 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_1);
      currentModification = current_0.h29_1;
      oldList = current_0.g29_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.removeAt.<anonymous>.<anonymous>' call
      var newList = ensureNotNull(oldList).k1(index);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.j29_1;
      var this_2 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.x11();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_2, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$8381d7_hayxw0();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.h29_1 === currentModification) {
        $this$writable.g29_1 = newList;
        if (true) {
          $this$writable.i29_1 = $this$writable.i29_1 + 1 | 0;
        }
        $this$writable.h29_1 = $this$writable.h29_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      var this_3 = tmp_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_3) {
        result = true;
        break $l$loop_0;
      }
    }
    return this_0;
  };
  protoOf(SnapshotStateList).q29 = function (index, element) {
    // Inline function 'kotlin.also' call
    var this_0 = this.m(index);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.set.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.update' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$8381d7_hayxw0();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.j29_1;
      var this_1 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_1);
      currentModification = current_0.h29_1;
      oldList = current_0.g29_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.set.<anonymous>.<anonymous>' call
      var newList = ensureNotNull(oldList).v(index, element);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.j29_1;
      var this_2 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.x11();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_2, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$8381d7_hayxw0();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.h29_1 === currentModification) {
        $this$writable.g29_1 = newList;
        if (false) {
          $this$writable.i29_1 = $this$writable.i29_1 + 1 | 0;
        }
        $this$writable.h29_1 = $this$writable.h29_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      var this_3 = tmp_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_3) {
        result = true;
        break $l$loop_0;
      }
    }
    return this_0;
  };
  protoOf(SnapshotStateList).v = function (index, element) {
    return this.q29(index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function validateModification($this) {
    if (!($this.r29_1.k29() === $this.u29_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function StateListIterator(list, offset) {
    this.r29_1 = list;
    this.s29_1 = offset - 1 | 0;
    this.t29_1 = -1;
    this.u29_1 = this.r29_1.k29();
  }
  protoOf(StateListIterator).q1 = function () {
    return this.s29_1 >= 0;
  };
  protoOf(StateListIterator).r1 = function () {
    validateModification(this);
    validateRange(this.s29_1, this.r29_1.l());
    this.t29_1 = this.s29_1;
    // Inline function 'kotlin.also' call
    var this_0 = this.r29_1.m(this.s29_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.StateListIterator.previous.<anonymous>' call
    this.s29_1 = this.s29_1 - 1 | 0;
    return this_0;
  };
  protoOf(StateListIterator).b1 = function () {
    return this.s29_1 < (this.r29_1.l() - 1 | 0);
  };
  protoOf(StateListIterator).d1 = function () {
    validateModification(this);
    var newIndex = this.s29_1 + 1 | 0;
    this.t29_1 = newIndex;
    validateRange(newIndex, this.r29_1.l());
    // Inline function 'kotlin.also' call
    var this_0 = this.r29_1.m(newIndex);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.StateListIterator.next.<anonymous>' call
    this.s29_1 = newIndex;
    return this_0;
  };
  protoOf(StateListIterator).c1 = function () {
    validateModification(this);
    this.r29_1.k1(this.s29_1);
    this.s29_1 = this.s29_1 - 1 | 0;
    this.t29_1 = -1;
    this.u29_1 = this.r29_1.k29();
  };
  function validateRange(index, size) {
    _init_properties_SnapshotStateList_kt__mu1ud5();
    if (!(0 <= index ? index < size : false)) {
      throw IndexOutOfBoundsException_init_$Create$('index (' + index + ') is out of bound of [0, ' + size + ')');
    }
  }
  function _get_sync_$accessor$8381d7_hayxw0() {
    _init_properties_SnapshotStateList_kt__mu1ud5();
    return get_sync();
  }
  var properties_initialized_SnapshotStateList_kt_lcuarf;
  function _init_properties_SnapshotStateList_kt__mu1ud5() {
    if (!properties_initialized_SnapshotStateList_kt_lcuarf) {
      properties_initialized_SnapshotStateList_kt_lcuarf = true;
      sync = createSynchronizedObject();
    }
  }
  var sync_0;
  function unsupported() {
    _init_properties_SnapshotStateMap_kt__p43o8h();
    throw UnsupportedOperationException_init_$Create$();
  }
  var properties_initialized_SnapshotStateMap_kt_9i73ip;
  function _init_properties_SnapshotStateMap_kt__p43o8h() {
    if (!properties_initialized_SnapshotStateMap_kt_9i73ip) {
      properties_initialized_SnapshotStateMap_kt_9i73ip = true;
      sync_0 = createSynchronizedObject();
    }
  }
  function find_3($this, value, hash) {
    var low = 0;
    var high = $this.h28_1 - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midHash = $this.i28_1[mid];
      if (midHash < hash)
        low = mid + 1 | 0;
      else if (midHash > hash)
        high = mid - 1 | 0;
      else {
        var tmp0_safe_receiver = $this.j28_1[mid];
        var midVal = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.lq();
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
        if (!($this.i28_1[i] === valueHash)) {
          break $l$loop;
        }
        var tmp1_safe_receiver = $this.j28_1[i];
        var v = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.lq();
        if (v === value) {
          return i;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    var last = $this.h28_1;
    if (inductionVariable_0 < last)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        if (!($this.i28_1[i_0] === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
        var tmp3_safe_receiver = $this.j28_1[i_0];
        var v_0 = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.lq();
        if (v_0 === value) {
          return i_0;
        }
      }
       while (inductionVariable_0 < last);
    return -($this.h28_1 + 1 | 0) | 0;
  }
  function SnapshotWeakSet() {
    this.h28_1 = 0;
    this.i28_1 = new Int32Array(16);
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.j28_1 = fillArrayVal(Array(16), null);
  }
  protoOf(SnapshotWeakSet).f1h = function (value) {
    var index;
    var size = this.h28_1;
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
    var capacity = this.j28_1.length;
    if (size === capacity) {
      var newCapacity = imul(capacity, 2);
      // Inline function 'kotlin.arrayOfNulls' call
      var newValues = fillArrayVal(Array(newCapacity), null);
      var newHashes = new Int32Array(newCapacity);
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = this.j28_1;
      var destinationOffset = insertIndex + 1 | 0;
      arrayCopy(this_0, newValues, destinationOffset, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      var this_1 = this.j28_1;
      arrayCopy(this_1, newValues, 0, 0, insertIndex);
      // Inline function 'kotlin.collections.copyInto' call
      var this_2 = this.i28_1;
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
      var tmp_0 = this.i28_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_0, newHashes, 0, 0, insertIndex);
      this.j28_1 = newValues;
      this.i28_1 = newHashes;
    } else {
      // Inline function 'kotlin.collections.copyInto' call
      var this_3 = this.j28_1;
      var destination = this.j28_1;
      var destinationOffset_1 = insertIndex + 1 | 0;
      arrayCopy(this_3, destination, destinationOffset_1, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      var this_4 = this.i28_1;
      var destination_0 = this.i28_1;
      var destinationOffset_2 = insertIndex + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_1 = this_4;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_1, destination_0, destinationOffset_2, insertIndex, size);
    }
    this.j28_1[insertIndex] = new WeakReference(value);
    this.i28_1[insertIndex] = hash;
    this.h28_1 = this.h28_1 + 1 | 0;
    return true;
  };
  function StateObjectImpl() {
    this.w1j_1 = new AtomicInt(0);
  }
  protoOf(StateObjectImpl).x1j = function (reader) {
    do {
      var old = _ReaderKind___init__impl__jqeebu(this.w1j_1.lq());
      // Inline function 'androidx.compose.runtime.snapshots.ReaderKind.isReadIn' call
      var this_0 = old;
      if (!((_ReaderKind___get_mask__impl__gmhzqb(this_0) & _ReaderKind___get_mask__impl__gmhzqb(reader)) === 0))
        return Unit_instance;
      // Inline function 'androidx.compose.runtime.snapshots.ReaderKind.withReadIn' call
      var this_1 = old;
      var new_0 = _ReaderKind___init__impl__jqeebu(_ReaderKind___get_mask__impl__gmhzqb(this_1) | _ReaderKind___get_mask__impl__gmhzqb(reader));
    }
     while (!this.w1j_1.v29(_ReaderKind___get_mask__impl__gmhzqb(old), _ReaderKind___get_mask__impl__gmhzqb(new_0)));
  };
  protoOf(StateObjectImpl).y1n = function (reader) {
    // Inline function 'androidx.compose.runtime.snapshots.ReaderKind.isReadIn' call
    var this_0 = _ReaderKind___init__impl__jqeebu(this.w1j_1.lq());
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
    this.e1i_1 = value;
  }
  protoOf(AtomicReference).lq = function () {
    // Inline function 'kotlinx.atomicfu.atomicfu_getValue' call
    return this.e1i_1;
  };
  protoOf(AtomicReference).w1i = function (value) {
    // Inline function 'kotlinx.atomicfu.atomicfu_setValue' call
    // Inline function 'androidx.compose.runtime.AtomicReference.set.<set-delegate>' call
    this.e1i_1 = value;
  };
  protoOf(AtomicReference).f1i = function (value) {
    // Inline function 'kotlinx.atomicfu.atomicfu_getAndSet' call
    var oldValue = this.e1i_1;
    // Inline function 'androidx.compose.runtime.AtomicReference.getAndSet.<set-delegate>' call
    this.e1i_1 = value;
    return oldValue;
  };
  protoOf(AtomicReference).s1j = function (expect, newValue) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.atomicfu.atomicfu_compareAndSet' call
      if (equals(this.e1i_1, expect)) {
        // Inline function 'androidx.compose.runtime.AtomicReference.compareAndSet.<set-delegate>' call
        this.e1i_1 = newValue;
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
    this.q27_1 = value;
  }
  protoOf(AtomicInt).lq = function () {
    // Inline function 'kotlinx.atomicfu.atomicfu_getValue' call
    return this.q27_1;
  };
  protoOf(AtomicInt).o27 = function (amount) {
    // Inline function 'kotlinx.atomicfu.atomicfu_addAndGet' call
    // Inline function 'androidx.compose.runtime.AtomicInt.add.<set-delegate>' call
    this.q27_1 = this.q27_1 + amount | 0;
    return this.q27_1;
  };
  protoOf(AtomicInt).v29 = function (expect, newValue) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.atomicfu.atomicfu_compareAndSet' call
      if (equals(this.q27_1, expect)) {
        // Inline function 'androidx.compose.runtime.AtomicInt.compareAndSet.<set-delegate>' call
        this.q27_1 = newValue;
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
    if ($this.t24_1) {
      var scope = $this.v24_1;
      if (!(scope == null)) {
        scope.i1k();
        $this.v24_1 = null;
      }
      var scopes = $this.w24_1;
      if (!(scopes == null)) {
        var inductionVariable = 0;
        var last = scopes.l();
        if (inductionVariable < last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = scopes.m(index);
            item.i1k();
          }
           while (inductionVariable < last);
        scopes.f1();
      }
    }
  }
  function trackRead($this, composer) {
    if ($this.t24_1) {
      var scope = composer.q1g();
      if (!(scope == null)) {
        composer.r1g(scope);
        var lastScope = $this.v24_1;
        if (replacableWith(lastScope, scope)) {
          $this.v24_1 = scope;
        } else {
          var lastScopes = $this.w24_1;
          if (lastScopes == null) {
            // Inline function 'kotlin.collections.mutableListOf' call
            var newScopes = ArrayList_init_$Create$();
            $this.w24_1 = newScopes;
            newScopes.y(scope);
          } else {
            var inductionVariable = 0;
            var last = lastScopes.l();
            if (inductionVariable < last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var scopeAtIndex = lastScopes.m(index);
                if (replacableWith(scopeAtIndex, scope)) {
                  lastScopes.v(index, scope);
                  return Unit_instance;
                }
              }
               while (inductionVariable < last);
            lastScopes.y(scope);
          }
        }
      }
    }
  }
  function invoke$invoke(receiver, p0, p1) {
    receiver.a1e(p0, p1);
  }
  function ComposableLambdaImpl$invoke$invoke$ref($boundThis) {
    return function (p0, p1) {
      invoke$invoke($boundThis, p0, p1);
      return Unit_instance;
    };
  }
  function ComposableLambdaImpl$invoke$lambda(this$0, $p1, $changed) {
    return function (nc, _anonymous_parameter_1__qggqgd) {
      this$0.w29($p1, nc, updateChangedFlags($changed) | 1);
      return Unit_instance;
    };
  }
  function ComposableLambdaImpl(key, tracked, block) {
    this.s24_1 = key;
    this.t24_1 = tracked;
    this.u24_1 = block;
    this.v24_1 = null;
    this.w24_1 = null;
  }
  protoOf(ComposableLambdaImpl).x24 = function (block) {
    if (!equals(this.u24_1, block)) {
      var oldBlockNull = this.u24_1 == null;
      this.u24_1 = block;
      if (!oldBlockNull) {
        trackWrite(this);
      }
    }
  };
  protoOf(ComposableLambdaImpl).a1e = function (c, changed) {
    var c_0 = c.z1f(this.s24_1);
    trackRead(this, c_0);
    var dirty = changed | (c_0.a16(this) ? differentBits(0) : sameBits(0));
    var tmp = this.u24_1;
    var result = ((!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE())(c_0, dirty);
    var tmp0_safe_receiver = c_0.a1g();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.w1k(ComposableLambdaImpl$invoke$invoke$ref(this));
    }
    return result;
  };
  protoOf(ComposableLambdaImpl).w29 = function (p1, c, changed) {
    var c_0 = c.z1f(this.s24_1);
    trackRead(this, c_0);
    var dirty = changed | (c_0.a16(this) ? differentBits(1) : sameBits(1));
    var tmp = this.u24_1;
    var result = ((!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE())(p1, c_0, dirty);
    var tmp0_safe_receiver = c_0.a1g();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.w1k(ComposableLambdaImpl$invoke$lambda(this, p1, changed));
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
  function get_DefaultMonotonicFrameClock() {
    _init_properties_ActualJs_js_kt__rh77u6();
    return DefaultMonotonicFrameClock;
  }
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
      this_0.s6(tmp$ret$0);
      return Unit_instance;
    };
  }
  function $withFrameNanosCOROUTINE$5(_this__u8e3s4, onFrame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f2a_1 = _this__u8e3s4;
    this.g2a_1 = onFrame;
  }
  protoOf($withFrameNanosCOROUTINE$5).md = function () {
    var suspendResult = this.cd_1;
    $sm: do
      try {
        var tmp = this.ad_1;
        switch (tmp) {
          case 0:
            this.bd_1 = 2;
            this.ad_1 = 1;
            var safe = SafeContinuation_init_$Create$(intercepted(this));
            var tmp_0 = window;
            tmp_0.requestAnimationFrame(MonotonicClockImpl$withFrameNanos$lambda(this.g2a_1, safe));
            suspendResult = returnIfSuspended(safe.t6(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.dd_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.bd_1 === 2) {
          throw e;
        } else {
          this.ad_1 = this.bd_1;
          this.dd_1 = e;
        }
      }
     while (true);
  };
  function MonotonicClockImpl() {
  }
  protoOf(MonotonicClockImpl).y12 = function (onFrame, $completion) {
    var tmp = new $withFrameNanosCOROUTINE$5(this, onFrame, $completion);
    tmp.cd_1 = Unit_instance;
    tmp.dd_1 = null;
    return tmp.md();
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
  protoOf(Trace).k1c = function (name) {
    return null;
  };
  protoOf(Trace).z1c = function (token) {
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
    tmp.q18_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(IntMap).m = function (key) {
    return this.q18_1.u2(key);
  };
  protoOf(IntMap).r18 = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    this.q18_1.l2(key, value);
  };
  function WeakReference(reference) {
    this.k28_1 = reference;
  }
  protoOf(WeakReference).lq = function () {
    return this.k28_1;
  };
  //region block: post-declaration
  protoOf(OffsetApplier).y11 = onBeginChanges;
  protoOf(OffsetApplier).z11 = onEndChanges;
  protoOf(AbstractApplier).y11 = onBeginChanges;
  protoOf(AbstractApplier).z11 = onEndChanges;
  protoOf(BroadcastFrameClock).n2 = get_key;
  protoOf(BroadcastFrameClock).hd = get;
  protoOf(BroadcastFrameClock).mg = fold;
  protoOf(BroadcastFrameClock).lg = minusKey;
  protoOf(BroadcastFrameClock).ng = plus;
  defineProp(protoOf(ComposeRuntimeError), 'message', function () {
    return this.v6();
  });
  protoOf(StructuralEqualityPolicy).i1t = merge;
  protoOf(StateObjectImpl).u1t = mergeRecords;
  protoOf(SnapshotStateList).u1t = mergeRecords;
  protoOf(MonotonicClockImpl).n2 = get_key;
  protoOf(MonotonicClockImpl).hd = get;
  protoOf(MonotonicClockImpl).mg = fold;
  protoOf(MonotonicClockImpl).lg = minusKey;
  protoOf(MonotonicClockImpl).ng = plus;
  //endregion
  //region block: init
  Key_instance_0 = new Key();
  movableContentKey = 126665345;
  Companion_instance_2 = new Companion_1();
  Companion_instance_4 = new Companion_3();
  StructuralEqualityPolicy_instance = new StructuralEqualityPolicy();
  Companion_instance_5 = new Companion_4();
  Companion_instance_6 = new Companion_5();
  MAX_BUFFER_SIZE = 32;
  MAX_BUFFER_SIZE_MINUS_ONE = 31;
  LOG_MAX_BUFFER_SIZE = 5;
  MUTABLE_BUFFER_SIZE = 33;
  ENTRY_SIZE = 2;
  EndOfChain_instance = new EndOfChain();
  ListImplementation_instance = new ListImplementation();
  Companion_instance_12 = new Companion_11();
  Companion_instance_15 = new Companion_14();
  Trace_instance = new Trace();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = composableLambdaInstance;
  _.$_$.b = composableLambda;
  _.$_$.c = AbstractApplier;
  _.$_$.d = CompositionLocalProvider;
  _.$_$.e = ControlledComposition;
  _.$_$.f = get_DefaultMonotonicFrameClock;
  _.$_$.g = DisposableEffect_0;
  _.$_$.h = DisposableEffect_1;
  _.$_$.i = DisposableEffect;
  _.$_$.j = LaunchedEffect;
  _.$_$.k = ProduceStateScope;
  _.$_$.l = Recomposer;
  _.$_$.m = compositionLocalOf;
  _.$_$.n = invalidApplier;
  _.$_$.o = isTraceInProgress;
  _.$_$.p = mutableStateListOf;
  _.$_$.q = mutableStateOf;
  _.$_$.r = produceState;
  _.$_$.s = sourceInformationMarkerEnd;
  _.$_$.t = sourceInformationMarkerStart;
  _.$_$.u = sourceInformation;
  _.$_$.v = staticCompositionLocalOf;
  _.$_$.w = traceEventEnd;
  _.$_$.x = traceEventStart;
  _.$_$.y = updateChangedFlags;
  _.$_$.z = _SkippableUpdater___init__impl__4ft0t9;
  _.$_$.a1 = _SkippableUpdater___get_composer__impl__6t7yne;
  _.$_$.b1 = _Updater___init__impl__rbfxm8;
  _.$_$.c1 = Updater__set_impl_v7kwss;
  _.$_$.d1 = Companion_instance_12;
  _.$_$.e1 = Companion_getInstance_0;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-runtime-runtime.js.map
