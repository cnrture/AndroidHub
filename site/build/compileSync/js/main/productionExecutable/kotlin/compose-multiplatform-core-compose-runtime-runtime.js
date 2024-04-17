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
  var protoOf = kotlin_kotlin.$_$.j6;
  var interfaceMeta = kotlin_kotlin.$_$.y5;
  var setMetadataFor = kotlin_kotlin.$_$.k6;
  var Unit_instance = kotlin_kotlin.$_$.d2;
  var toString = kotlin_kotlin.$_$.m6;
  var classMeta = kotlin_kotlin.$_$.n5;
  var VOID = kotlin_kotlin.$_$.c;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h;
  var THROW_CCE = kotlin_kotlin.$_$.p8;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.e1;
  var Companion_instance = kotlin_kotlin.$_$.c2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.s1;
  var createFailure = kotlin_kotlin.$_$.v8;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.c9;
  var intercepted = kotlin_kotlin.$_$.r4;
  var get_MODE_CANCELLABLE = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var get = kotlin_kotlin.$_$.z4;
  var fold = kotlin_kotlin.$_$.y4;
  var minusKey = kotlin_kotlin.$_$.a5;
  var plus = kotlin_kotlin.$_$.c5;
  var isInterface = kotlin_kotlin.$_$.b6;
  var equals = kotlin_kotlin.$_$.q5;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.p;
  var fill = kotlin_kotlin.$_$.c3;
  var MutableIntIntMap = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.b;
  var rotateLeft = kotlin_kotlin.$_$.a9;
  var hashCode = kotlin_kotlin.$_$.w5;
  var Enum = kotlin_kotlin.$_$.j8;
  var emptyList = kotlin_kotlin.$_$.a3;
  var sortWith = kotlin_kotlin.$_$.h4;
  var rotateRight = kotlin_kotlin.$_$.b9;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.g;
  var to = kotlin_kotlin.$_$.e9;
  var objectMeta = kotlin_kotlin.$_$.i6;
  var IllegalStateException = kotlin_kotlin.$_$.m8;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.c1;
  var captureStack = kotlin_kotlin.$_$.j5;
  var defineProp = kotlin_kotlin.$_$.p5;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.b1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.k;
  var lazy = kotlin_kotlin.$_$.x8;
  var firstOrNull = kotlin_kotlin.$_$.f3;
  var compareTo = kotlin_kotlin.$_$.o5;
  var KProperty1 = kotlin_kotlin.$_$.v6;
  var getPropertyCallableRef = kotlin_kotlin.$_$.u5;
  var isArray = kotlin_kotlin.$_$.z5;
  var Set = kotlin_kotlin.$_$.p2;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.m;
  var MutableScatterSet = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.e;
  var get_BitmaskMsb = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.a;
  var Long = kotlin_kotlin.$_$.n8;
  var mutableScatterSetOf = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.g;
  var MutableCollection = kotlin_kotlin.$_$.o2;
  var Map = kotlin_kotlin.$_$.n2;
  var Exception = kotlin_kotlin.$_$.l8;
  var plus_0 = kotlin_kotlin.$_$.y3;
  var fillArrayVal = kotlin_kotlin.$_$.r5;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var toString_0 = kotlin_kotlin.$_$.d9;
  var Element = kotlin_kotlin.$_$.b5;
  var getStringHashCode = kotlin_kotlin.$_$.v5;
  var MutableObjectIntMap = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.c;
  var MutableScatterMap = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.d;
  var Collection = kotlin_kotlin.$_$.k2;
  var addAll = kotlin_kotlin.$_$.r2;
  var CoroutineImpl = kotlin_kotlin.$_$.d5;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.p4;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.i;
  var withContext = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.j;
  var toList = kotlin_kotlin.$_$.j4;
  var flatten = kotlin_kotlin.$_$.h3;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.t;
  var CancellationException = kotlin_kotlin.$_$.o4;
  var addSuppressed = kotlin_kotlin.$_$.s8;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var returnIfSuspended = kotlin_kotlin.$_$.e;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.o;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var removeFirst = kotlin_kotlin.$_$.e4;
  var arrayCopy = kotlin_kotlin.$_$.s2;
  var fill_0 = kotlin_kotlin.$_$.e3;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.z1;
  var anyToString = kotlin_kotlin.$_$.h5;
  var ConcurrentModificationException_init_$Create$ = kotlin_kotlin.$_$.x;
  var first = kotlin_kotlin.$_$.g3;
  var last = kotlin_kotlin.$_$.q3;
  var copyOf = kotlin_kotlin.$_$.x2;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.w;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var plus_1 = kotlin_kotlin.$_$.c4;
  var coerceAtMost = kotlin_kotlin.$_$.o6;
  var coerceAtLeast = kotlin_kotlin.$_$.n6;
  var copyOf_0 = kotlin_kotlin.$_$.w2;
  var ensureNotNull = kotlin_kotlin.$_$.w8;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.i1;
  var Entry = kotlin_kotlin.$_$.m2;
  var SequenceScope = kotlin_kotlin.$_$.w6;
  var until = kotlin_kotlin.$_$.r6;
  var sequence = kotlin_kotlin.$_$.x6;
  var joinToString = kotlin_kotlin.$_$.l3;
  var mutableScatterMapOf = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.f;
  var NoSuchElementException_init_$Create$_0 = kotlin_kotlin.$_$.h1;
  var AbstractList = kotlin_kotlin.$_$.f2;
  var List = kotlin_kotlin.$_$.l2;
  var arrayIterator = kotlin_kotlin.$_$.i5;
  var AbstractMutableList = kotlin_kotlin.$_$.h2;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.d1;
  var indexOf = kotlin_kotlin.$_$.k3;
  var AbstractMap = kotlin_kotlin.$_$.g2;
  var AbstractSet = kotlin_kotlin.$_$.i2;
  var AbstractCollection = kotlin_kotlin.$_$.e2;
  var objectCreate = kotlin_kotlin.$_$.h6;
  var step = kotlin_kotlin.$_$.q6;
  var countOneBits = kotlin_kotlin.$_$.t8;
  var ConcurrentModificationException_init_$Create$_0 = kotlin_kotlin.$_$.y;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.g1;
  var toString_1 = kotlin_kotlin.$_$.d8;
  var longArray = kotlin_kotlin.$_$.e6;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.l;
  var Char = kotlin_kotlin.$_$.i8;
  var isCharSequence = kotlin_kotlin.$_$.a6;
  var minus = kotlin_kotlin.$_$.w3;
  var contains = kotlin_kotlin.$_$.v2;
  var plus_2 = kotlin_kotlin.$_$.b4;
  var primitiveArrayConcat = kotlin_kotlin.$_$.b;
  var singleOrNull = kotlin_kotlin.$_$.g4;
  var intArrayIterator = kotlin_kotlin.$_$.x5;
  var Companion_getInstance = kotlin_kotlin.$_$.b2;
  var toIntArray = kotlin_kotlin.$_$.i4;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.u2;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var println = kotlin_kotlin.$_$.g5;
  var printStackTrace = kotlin_kotlin.$_$.z8;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.d;
  var toDuration = kotlin_kotlin.$_$.g8;
  var _Duration___get_inWholeNanoseconds__impl__r5x4mr = kotlin_kotlin.$_$.p1;
  var SafeContinuation_init_$Create$ = kotlin_kotlin.$_$.u;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.q;
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
    return this.o18(value);
  }
  function changed_0(value) {
    return this.p18(value);
  }
  function changedInstance(value) {
    return this.lz(value);
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
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(RecomposeScopeImpl, 'RecomposeScopeImpl', classMeta);
  setMetadataFor(Recomposer$recompositionRunner$slambda$slambda, 'Recomposer$recompositionRunner$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(State, 'State', classMeta, Enum);
  setMetadataFor(RecomposerInfoImpl, 'RecomposerInfoImpl', classMeta);
  setMetadataFor(RecomposerErrorState, 'RecomposerErrorState', classMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(Recomposer$runRecomposeAndApplyChanges$slambda, 'Recomposer$runRecomposeAndApplyChanges$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(Recomposer$recompositionRunner$slambda, 'Recomposer$recompositionRunner$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($awaitWorkAvailableCOROUTINE$1, '$awaitWorkAvailableCOROUTINE$1', classMeta, CoroutineImpl);
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
  setMetadataFor(MutableState, 'MutableState', interfaceMeta, VOID, [State_0]);
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
  setMetadataFor(AbstractPersistentList, 'AbstractPersistentList', classMeta, AbstractList, [List, Collection, AbstractList]);
  setMetadataFor(BufferIterator, 'BufferIterator', classMeta, AbstractListIterator);
  setMetadataFor(PersistentVector, 'PersistentVector', classMeta, AbstractPersistentList, [List, Collection, AbstractPersistentList]);
  setMetadataFor(PersistentVectorBuilder, 'PersistentVectorBuilder', classMeta, AbstractMutableList, [AbstractMutableList, List, MutableCollection]);
  setMetadataFor(PersistentVectorIterator, 'PersistentVectorIterator', classMeta, AbstractListIterator);
  setMetadataFor(PersistentVectorMutableIterator, 'PersistentVectorMutableIterator', classMeta, AbstractListIterator);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(SmallPersistentVector, 'SmallPersistentVector', classMeta, AbstractPersistentList, [List, Collection, AbstractPersistentList]);
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
  setMetadataFor(PersistentOrderedSet, 'PersistentOrderedSet', classMeta, AbstractSet, [AbstractSet, Set, Collection]);
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
  setMetadataFor(SnapshotStateList, 'SnapshotStateList', classMeta, VOID, [StateObject, List, MutableCollection], SnapshotStateList);
  setMetadataFor(StateListIterator, 'StateListIterator', classMeta);
  setMetadataFor(SnapshotWeakSet, 'SnapshotWeakSet', classMeta, VOID, VOID, SnapshotWeakSet);
  setMetadataFor(Companion_14, 'Companion', objectMeta);
  setMetadataFor(AtomicReference, 'AtomicReference', classMeta);
  setMetadataFor(AtomicInt, 'AtomicInt', classMeta);
  setMetadataFor(ComposableLambdaImpl, 'ComposableLambdaImpl', classMeta);
  setMetadataFor($withFrameNanosCOROUTINE$4, '$withFrameNanosCOROUTINE$4', classMeta, CoroutineImpl);
  setMetadataFor(MonotonicClockImpl, 'MonotonicClockImpl', classMeta, VOID, [MonotonicFrameClock], MonotonicClockImpl, VOID, VOID, [1]);
  setMetadataFor(Trace, 'Trace', objectMeta);
  setMetadataFor(IntMap, 'IntMap', classMeta, VOID, VOID, IntMap);
  setMetadataFor(WeakReference, 'WeakReference', classMeta);
  //endregion
  function Applier() {
  }
  function OffsetApplier(applier, offset) {
    this.rv_1 = applier;
    this.sv_1 = offset;
    this.tv_1 = 0;
  }
  protoOf(OffsetApplier).iv = function () {
    return this.rv_1.iv();
  };
  protoOf(OffsetApplier).lv = function (node) {
    this.tv_1 = this.tv_1 + 1 | 0;
    this.rv_1.lv(node);
  };
  protoOf(OffsetApplier).mv = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.tv_1 > 0)) {
      // Inline function 'androidx.compose.runtime.OffsetApplier.up.<anonymous>' call
      var message = 'OffsetApplier up called with no corresponding down';
      composeRuntimeError(toString(message));
    }
    this.tv_1 = this.tv_1 - 1 | 0;
    this.rv_1.mv();
  };
  protoOf(OffsetApplier).nv = function (index, instance) {
    this.rv_1.nv(index + (this.tv_1 === 0 ? this.sv_1 : 0) | 0, instance);
  };
  protoOf(OffsetApplier).ov = function (index, instance) {
    this.rv_1.ov(index + (this.tv_1 === 0 ? this.sv_1 : 0) | 0, instance);
  };
  protoOf(OffsetApplier).pv = function (index, count) {
    this.rv_1.pv(index + (this.tv_1 === 0 ? this.sv_1 : 0) | 0, count);
  };
  protoOf(OffsetApplier).qv = function (from, to, count) {
    var effectiveOffset = this.tv_1 === 0 ? this.sv_1 : 0;
    this.rv_1.qv(from + effectiveOffset | 0, to + effectiveOffset | 0, count);
  };
  function AbstractApplier(root) {
    this.uv_1 = root;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.vv_1 = ArrayList_init_$Create$();
    this.wv_1 = this.uv_1;
  }
  protoOf(AbstractApplier).xv = function (_set____db54di) {
    this.wv_1 = _set____db54di;
  };
  protoOf(AbstractApplier).iv = function () {
    return this.wv_1;
  };
  protoOf(AbstractApplier).yv = function (node) {
    this.vv_1.u(this.iv());
    this.xv(node);
  };
  protoOf(AbstractApplier).lv = function (node) {
    return this.yv((node == null ? true : !(node == null)) ? node : THROW_CCE());
  };
  protoOf(AbstractApplier).mv = function () {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.vv_1.o()) {
      // Inline function 'androidx.compose.runtime.AbstractApplier.up.<anonymous>' call
      var message = 'empty stack';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.xv(this.vv_1.g1(this.vv_1.i() - 1 | 0));
  };
  function FrameAwaiter(onFrame, continuation) {
    this.zv_1 = onFrame;
    this.aw_1 = continuation;
  }
  protoOf(FrameAwaiter).bw = function (timeNanos) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      // Inline function 'androidx.compose.runtime.FrameAwaiter.resume.<anonymous>' call
      var value = this.zv_1(timeNanos);
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
    this.aw_1.m6(tmp$ret$3);
  };
  function fail($this, cause) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.dw_1;
    if (!($this.ew_1 == null))
      return Unit_instance;
    $this.ew_1 = cause;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    var this_0 = $this.fw_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.i() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.j(index);
        // Inline function 'androidx.compose.runtime.BroadcastFrameClock.fail.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.coroutines.resumeWithException' call
        var this_1 = item.aw_1;
        // Inline function 'kotlin.Companion.failure' call
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
        this_1.m6(tmp$ret$0);
      }
       while (inductionVariable <= last);
    $this.fw_1.b1();
  }
  function BroadcastFrameClock$withFrameNanos$lambda(this$0, $awaiter) {
    return function (it) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this$0.dw_1;
      var tmp = this$0.fw_1;
      var tmp_0;
      if ($awaiter._v == null) {
        throwUninitializedPropertyAccessException('awaiter');
      } else {
        tmp_0 = $awaiter._v;
      }
      tmp.v(tmp_0);
      return Unit_instance;
    };
  }
  function BroadcastFrameClock(onNewAwaiters) {
    onNewAwaiters = onNewAwaiters === VOID ? null : onNewAwaiters;
    this.cw_1 = onNewAwaiters;
    this.dw_1 = createSynchronizedObject();
    this.ew_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.fw_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.gw_1 = ArrayList_init_$Create$();
  }
  protoOf(BroadcastFrameClock).hw = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.dw_1;
    // Inline function 'androidx.compose.runtime.BroadcastFrameClock.<get-hasAwaiters>.<anonymous>' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    return !this.fw_1.o();
  };
  protoOf(BroadcastFrameClock).iw = function (timeNanos) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.dw_1;
    var toResume = this.fw_1;
    this.fw_1 = this.gw_1;
    this.gw_1 = toResume;
    var inductionVariable = 0;
    var last = toResume.i();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        toResume.j(i).bw(timeNanos);
      }
       while (inductionVariable < last);
    toResume.b1();
  };
  protoOf(BroadcastFrameClock).jw = function (onFrame, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), get_MODE_CANCELLABLE());
    cancellable.nk();
    $l$block: {
      // Inline function 'androidx.compose.runtime.BroadcastFrameClock.withFrameNanos.<anonymous>' call
      var awaiter = {_v: null};
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this.dw_1;
      // Inline function 'androidx.compose.runtime.BroadcastFrameClock.withFrameNanos.<anonymous>.<anonymous>' call
      var cause = this.ew_1;
      if (!(cause == null)) {
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
        cancellable.m6(tmp$ret$0);
        break $l$block;
      }
      awaiter._v = new FrameAwaiter(onFrame, cancellable);
      // Inline function 'kotlin.collections.isNotEmpty' call
      var hadAwaiters = !this.fw_1.o();
      var tmp = this.fw_1;
      var tmp_0;
      if (awaiter._v == null) {
        throwUninitializedPropertyAccessException('awaiter');
      } else {
        tmp_0 = awaiter._v;
      }
      tmp.u(tmp_0);
      var hasNewAwaiters = !hadAwaiters;
      cancellable.gj(BroadcastFrameClock$withFrameNanos$lambda(this, awaiter));
      if (hasNewAwaiters ? !(this.cw_1 == null) : false) {
        try {
          this.cw_1();
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
    return cancellable.si();
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
    this.nw_1 = scope;
    this.ow_1 = location;
    this.pw_1 = instances;
  }
  protoOf(Invalidation).qw = function () {
    return this.nw_1.zw(this.pw_1);
  };
  function startRoot($this) {
    $this.hy_1 = $this.cx_1.fz();
    startGroup($this, 100);
    $this.bx_1.gz();
    $this.ux_1 = $this.bx_1.hz();
    $this.xx_1.kz(asInt($this.wx_1));
    $this.wx_1 = $this.lz($this.ux_1);
    $this.ly_1 = null;
    if (!$this.px_1) {
      $this.px_1 = $this.bx_1.mz();
    }
    if (!$this.cy_1) {
      $this.cy_1 = $this.bx_1.nz();
    }
    var tmp0_safe_receiver = read($this.ux_1, get_LocalInspectionTables());
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.u($this.cx_1);
      $this.bx_1.oz(tmp0_safe_receiver);
    }
    startGroup($this, $this.bx_1.pz());
  }
  function endRoot($this) {
    endGroup($this);
    $this.bx_1.qz();
    endGroup($this);
    $this.ny_1.d10();
    finalizeCompose($this);
    $this.hy_1.r10();
    $this.qx_1 = false;
  }
  function abortRoot($this) {
    cleanUpCompose($this);
    $this.hx_1.b1();
    $this.kx_1.b1();
    $this.mx_1.b1();
    $this.tx_1.b1();
    $this.xx_1.b1();
    $this.vx_1 = null;
    if (!$this.hy_1.k10_1) {
      $this.hy_1.r10();
    }
    if (!$this.jy_1.n11_1) {
      $this.jy_1.r10();
    }
    $this.py_1.b1();
    createFreshInsertTable($this);
    $this.ry_1 = 0;
    $this.ay_1 = 0;
    $this.rx_1 = false;
    $this.qy_1 = false;
    $this.yx_1 = false;
    $this.fy_1 = false;
    $this.qx_1 = false;
    $this.zx_1 = -1;
  }
  function startGroup($this, key) {
    return start($this, key, null, Companion_getInstance_1().r11_1, null);
  }
  function startGroup_0($this, key, dataKey) {
    return start($this, key, dataKey, Companion_getInstance_1().r11_1, null);
  }
  function endGroup($this) {
    return end($this, false);
  }
  function skipGroup($this) {
    $this.lx_1 = $this.lx_1 + $this.hy_1.u11() | 0;
  }
  function updateSlot($this, value) {
    $this.v11();
    $this.w11(value);
  }
  function currentCompositionLocalScope($this) {
    var tmp0_safe_receiver = $this.ly_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    return currentCompositionLocalScope_0($this, $this.hy_1.n10_1);
  }
  function currentCompositionLocalScope_0($this, group) {
    if ($this.qy_1 ? $this.ky_1 : false) {
      var current = $this.jy_1.m11_1;
      while (current > 0) {
        if ($this.jy_1.z11(current) === 202 ? equals($this.jy_1.y11(current), get_compositionLocalMap()) : false) {
          var tmp = $this.jy_1.x11(current);
          var providers = (!(tmp == null) ? isInterface(tmp, PersistentCompositionLocalMap) : false) ? tmp : THROW_CCE();
          $this.ly_1 = providers;
          return providers;
        }
        current = $this.jy_1.a12(current);
      }
    }
    if ($this.hy_1.i() > 0) {
      var current_0 = group;
      while (current_0 > 0) {
        if ($this.hy_1.z11(current_0) === 202 ? equals($this.hy_1.y11(current_0), get_compositionLocalMap()) : false) {
          var tmp0_safe_receiver = $this.vx_1;
          var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j(current_0);
          var tmp_0;
          if (tmp1_elvis_lhs == null) {
            var tmp_1 = $this.hy_1.x11(current_0);
            tmp_0 = (!(tmp_1 == null) ? isInterface(tmp_1, PersistentCompositionLocalMap) : false) ? tmp_1 : THROW_CCE();
          } else {
            tmp_0 = tmp1_elvis_lhs;
          }
          var providers_0 = tmp_0;
          $this.ly_1 = providers_0;
          return providers_0;
        }
        current_0 = $this.hy_1.a12(current_0);
      }
    }
    $this.ly_1 = $this.ux_1;
    return $this.ux_1;
  }
  function recordProviderUpdate($this, providers) {
    var tmp0_elvis_lhs = $this.vx_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.recordProviderUpdate.<anonymous>' call
      var newProviderUpdates = new IntMap();
      $this.vx_1 = newProviderUpdates;
      tmp = newProviderUpdates;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var providerUpdates = tmp;
    providerUpdates.c12($this.hy_1.l10_1, providers);
  }
  function ensureWriter($this) {
    if ($this.jy_1.n11_1) {
      $this.jy_1 = $this.iy_1.d12();
      $this.jy_1.e12();
      $this.ky_1 = false;
      $this.ly_1 = null;
    }
  }
  function createFreshInsertTable($this) {
    runtimeCheck($this.jy_1.n11_1);
    $this.iy_1 = new SlotTable();
    var tmp = $this;
    // Inline function 'kotlin.also' call
    var this_0 = $this.iy_1.d12();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.createFreshInsertTable.<anonymous>' call
    this_0.r10();
    tmp.jy_1 = this_0;
  }
  function startReaderGroup($this, isNode, data) {
    if (isNode) {
      $this.hy_1.i12();
    } else {
      if (!(data == null) ? !($this.hy_1.g12() === data) : false) {
        $this.ny_1.f12(data);
      }
      $this.hy_1.h12();
    }
  }
  function start($this, key, objectKey, kind, data) {
    validateNodeNotExpected($this);
    updateCompoundKeyWhenWeEnterGroup($this, key, objectKey, data);
    // Inline function 'androidx.compose.runtime.GroupKind.isNode' call
    var isNode = !(_GroupKind___get_value__impl__cf5pqe(kind) === _GroupKind___get_value__impl__cf5pqe(Companion_getInstance_1().r11_1));
    if ($this.qy_1) {
      $this.hy_1.j12();
      var startIndex = $this.jy_1.k11_1;
      if (isNode) {
        $this.jy_1.n12(key, Companion_getInstance_0().k12_1);
      } else if (!(data == null)) {
        var tmp = $this.jy_1;
        tmp.m12(key, objectKey == null ? Companion_getInstance_0().k12_1 : objectKey, data);
      } else {
        var tmp_0 = $this.jy_1;
        tmp_0.l12(key, objectKey == null ? Companion_getInstance_0().k12_1 : objectKey);
      }
      var tmp2_safe_receiver = $this.ix_1;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.start.<anonymous>' call
        var insertKeyInfo = new KeyInfo(key, -1, insertedGroupVirtualIndex($this, startIndex), -1, 0);
        tmp2_safe_receiver.u12(insertKeyInfo, $this.jx_1 - tmp2_safe_receiver.p12_1 | 0);
        tmp2_safe_receiver.v12(insertKeyInfo);
      }
      enterGroup($this, isNode, null);
      return Unit_instance;
    }
    var tmp_1;
    // Inline function 'androidx.compose.runtime.GroupKind.isReusable' call
    if (!!(_GroupKind___get_value__impl__cf5pqe(kind) === _GroupKind___get_value__impl__cf5pqe(Companion_getInstance_1().s11_1))) {
      tmp_1 = $this.yx_1;
    } else {
      tmp_1 = false;
    }
    var forceReplace = tmp_1;
    if ($this.ix_1 == null) {
      var slotKey = $this.hy_1.w12();
      if ((!forceReplace ? slotKey === key : false) ? equals(objectKey, $this.hy_1.y12()) : false) {
        startReaderGroup($this, isNode, data);
      } else {
        $this.ix_1 = new Pending($this.hy_1.x12(), $this.jx_1);
      }
    }
    var pending = $this.ix_1;
    var newPending = null;
    if (!(pending == null)) {
      var keyInfo = pending.z12(key, objectKey);
      if (!forceReplace ? !(keyInfo == null) : false) {
        pending.v12(keyInfo);
        var location = keyInfo.e13_1;
        $this.jx_1 = pending.h13(keyInfo) + pending.p12_1 | 0;
        var relativePosition = pending.i13(keyInfo);
        var currentRelativePosition = relativePosition - pending.q12_1 | 0;
        pending.j13(relativePosition, pending.q12_1);
        $this.ny_1.k13(location);
        $this.hy_1.l13(location);
        if (currentRelativePosition > 0) {
          $this.ny_1.m13(currentRelativePosition);
        }
        startReaderGroup($this, isNode, data);
      } else {
        $this.hy_1.j12();
        $this.qy_1 = true;
        $this.ly_1 = null;
        ensureWriter($this);
        $this.jy_1.a13();
        var startIndex_0 = $this.jy_1.k11_1;
        if (isNode) {
          $this.jy_1.n12(key, Companion_getInstance_0().k12_1);
        } else if (!(data == null)) {
          var tmp_2 = $this.jy_1;
          tmp_2.m12(key, objectKey == null ? Companion_getInstance_0().k12_1 : objectKey, data);
        } else {
          var tmp_3 = $this.jy_1;
          tmp_3.l12(key, objectKey == null ? Companion_getInstance_0().k12_1 : objectKey);
        }
        $this.oy_1 = $this.jy_1.b13(startIndex_0);
        var insertKeyInfo_0 = new KeyInfo(key, -1, insertedGroupVirtualIndex($this, startIndex_0), -1, 0);
        pending.u12(insertKeyInfo_0, $this.jx_1 - pending.p12_1 | 0);
        pending.v12(insertKeyInfo_0);
        // Inline function 'kotlin.collections.mutableListOf' call
        var tmp$ret$4 = ArrayList_init_$Create$();
        newPending = new Pending(tmp$ret$4, isNode ? 0 : $this.jx_1);
      }
    }
    enterGroup($this, isNode, newPending);
  }
  function enterGroup($this, isNode, newPending) {
    $this.hx_1.n13($this.ix_1);
    $this.ix_1 = newPending;
    $this.kx_1.kz($this.jx_1);
    if (isNode)
      $this.jx_1 = 0;
    $this.mx_1.kz($this.lx_1);
    $this.lx_1 = 0;
  }
  function exitGroup($this, expectedNodeCount, inserting) {
    var previousPending = $this.hx_1.o13();
    if (!(previousPending == null) ? !inserting : false) {
      previousPending.q12_1 = previousPending.q12_1 + 1 | 0;
    }
    $this.ix_1 = previousPending;
    $this.jx_1 = $this.kx_1.o13() + expectedNodeCount | 0;
    $this.lx_1 = $this.mx_1.o13() + expectedNodeCount | 0;
  }
  function end($this, isNode) {
    if ($this.qy_1) {
      var parent = $this.jy_1.m11_1;
      updateCompoundKeyWhenWeExitGroup($this, $this.jy_1.z11(parent), $this.jy_1.y11(parent), $this.jy_1.x11(parent));
    } else {
      var parent_0 = $this.hy_1.n10_1;
      updateCompoundKeyWhenWeExitGroup($this, $this.hy_1.z11(parent_0), $this.hy_1.y11(parent_0), $this.hy_1.x11(parent_0));
    }
    var expectedNodeCount = $this.lx_1;
    var pending = $this.ix_1;
    if (!(pending == null) ? pending.o12_1.i() > 0 : false) {
      var previous = pending.o12_1;
      var current = pending.p13();
      var usedKeys = fastToSet(current);
      // Inline function 'kotlin.collections.mutableSetOf' call
      var placedKeys = LinkedHashSet_init_$Create$();
      var currentIndex = 0;
      var currentEnd = current.i();
      var previousIndex = 0;
      var previousEnd = previous.i();
      var nodeOffset = 0;
      $l$loop_0: while (previousIndex < previousEnd) {
        var previousInfo = previous.j(previousIndex);
        if (!usedKeys.m(previousInfo)) {
          var deleteOffset = pending.h13(previousInfo);
          $this.ny_1.q13(deleteOffset + pending.p12_1 | 0, previousInfo.f13_1);
          pending.r13(previousInfo.e13_1, 0);
          $this.ny_1.k13(previousInfo.e13_1);
          $this.hy_1.l13(previousInfo.e13_1);
          recordDelete($this);
          $this.hy_1.u11();
          removeRange($this.sx_1, previousInfo.e13_1, previousInfo.e13_1 + $this.hy_1.s13(previousInfo.e13_1) | 0);
          previousIndex = previousIndex + 1 | 0;
          continue $l$loop_0;
        }
        if (placedKeys.m(previousInfo)) {
          previousIndex = previousIndex + 1 | 0;
          continue $l$loop_0;
        }
        if (currentIndex < currentEnd) {
          var currentInfo = current.j(currentIndex);
          if (!(currentInfo === previousInfo)) {
            var nodePosition = pending.h13(currentInfo);
            placedKeys.u(currentInfo);
            if (!(nodePosition === nodeOffset)) {
              var updatedCount = pending.t13(currentInfo);
              $this.ny_1.u13(nodePosition + pending.p12_1 | 0, nodeOffset + pending.p12_1 | 0, updatedCount);
              pending.v13(nodePosition, nodeOffset, updatedCount);
            }
          } else {
            previousIndex = previousIndex + 1 | 0;
          }
          currentIndex = currentIndex + 1 | 0;
          nodeOffset = nodeOffset + pending.t13(currentInfo) | 0;
        }
      }
      $this.ny_1.w13();
      if (previous.i() > 0) {
        $this.ny_1.k13($this.hy_1.x13());
        $this.hy_1.e12();
      }
    }
    var removeIndex = $this.jx_1;
    while (!$this.hy_1.y13()) {
      var startSlot = $this.hy_1.l10_1;
      recordDelete($this);
      var nodesToRemove = $this.hy_1.u11();
      $this.ny_1.q13(removeIndex, nodesToRemove);
      removeRange($this.sx_1, startSlot, $this.hy_1.l10_1);
    }
    var inserting = $this.qy_1;
    if (inserting) {
      if (isNode) {
        $this.py_1.c14();
        expectedNodeCount = 1;
      }
      $this.hy_1.d14();
      var parentGroup = $this.jy_1.m11_1;
      $this.jy_1.e14();
      if (!$this.hy_1.h14()) {
        var virtualIndex = insertedGroupVirtualIndex($this, parentGroup);
        $this.jy_1.f14();
        $this.jy_1.r10();
        recordInsert($this, $this.oy_1);
        $this.qy_1 = false;
        if (!$this.cx_1.g14()) {
          updateNodeCount($this, virtualIndex, 0);
          updateNodeCountOverrides($this, virtualIndex, expectedNodeCount);
        }
      }
    } else {
      if (isNode) {
        $this.ny_1.z13();
      }
      $this.ny_1.a14();
      var parentGroup_0 = $this.hy_1.n10_1;
      var parentNodeCount = updatedNodeCount($this, parentGroup_0);
      if (!(expectedNodeCount === parentNodeCount)) {
        updateNodeCountOverrides($this, parentGroup_0, expectedNodeCount);
      }
      if (isNode) {
        expectedNodeCount = 1;
      }
      $this.hy_1.b14();
      $this.ny_1.w13();
    }
    exitGroup($this, expectedNodeCount, inserting);
  }
  function recomposeToGroupEnd($this) {
    var wasComposing = $this.fy_1;
    $this.fy_1 = true;
    var recomposed = false;
    var parent = $this.hy_1.n10_1;
    var end = parent + $this.hy_1.s13(parent) | 0;
    var recomposeIndex = $this.jx_1;
    var recomposeCompoundKey = $this.ry_1;
    var oldGroupNodeCount = $this.lx_1;
    var oldGroup = parent;
    var firstInRange_0 = firstInRange($this.sx_1, $this.hy_1.l10_1, end);
    while (!(firstInRange_0 == null)) {
      var location = firstInRange_0.ow_1;
      removeLocation($this.sx_1, location);
      if (firstInRange_0.qw()) {
        recomposed = true;
        $this.hy_1.l13(location);
        var newGroup = $this.hy_1.l10_1;
        recordUpsAndDowns($this, oldGroup, newGroup, parent);
        oldGroup = newGroup;
        $this.jx_1 = nodeIndexOf($this, location, newGroup, parent, recomposeIndex);
        $this.ry_1 = compoundKeyOf($this, $this.hy_1.a12(newGroup), parent, recomposeCompoundKey);
        $this.ly_1 = null;
        firstInRange_0.nw_1.j14($this);
        $this.ly_1 = null;
        $this.hy_1.k14(parent);
      } else {
        $this.ey_1.n13(firstInRange_0.nw_1);
        firstInRange_0.nw_1.i14();
        $this.ey_1.o13();
      }
      firstInRange_0 = firstInRange($this.sx_1, $this.hy_1.l10_1, end);
    }
    if (recomposed) {
      recordUpsAndDowns($this, oldGroup, parent, parent);
      $this.hy_1.e12();
      var parentGroupNodes = updatedNodeCount($this, parent);
      $this.jx_1 = recomposeIndex + parentGroupNodes | 0;
      $this.lx_1 = oldGroupNodeCount + parentGroupNodes | 0;
    } else {
      skipReaderToGroupEnd($this);
    }
    $this.ry_1 = recomposeCompoundKey;
    $this.fy_1 = wasComposing;
  }
  function insertedGroupVirtualIndex($this, index) {
    return -2 - index | 0;
  }
  function updateNodeCountOverrides($this, group, newCount) {
    var currentCount = updatedNodeCount($this, group);
    if (!(currentCount === newCount)) {
      var delta = newCount - currentCount | 0;
      var current = group;
      var minPending = $this.hx_1.i() - 1 | 0;
      $l$loop_0: while (!(current === -1)) {
        var newCurrentNodes = updatedNodeCount($this, current) + delta | 0;
        updateNodeCount($this, current, newCurrentNodes);
        var inductionVariable = minPending;
        if (0 <= inductionVariable)
          $l$loop: do {
            var pendingIndex = inductionVariable;
            inductionVariable = inductionVariable + -1 | 0;
            var pending = $this.hx_1.l14(pendingIndex);
            if (!(pending == null) ? pending.r13(current, newCurrentNodes) : false) {
              minPending = pendingIndex - 1 | 0;
              break $l$loop;
            }
          }
           while (0 <= inductionVariable);
        if (current < 0) {
          current = $this.hy_1.n10_1;
        } else {
          if ($this.hy_1.m14(current))
            break $l$loop_0;
          current = $this.hy_1.a12(current);
        }
      }
    }
  }
  function nodeIndexOf($this, groupLocation, group, recomposeGroup, recomposeIndex) {
    var anchorGroup = $this.hy_1.a12(group);
    $l$loop: while (!(anchorGroup === recomposeGroup) && !$this.hy_1.m14(anchorGroup)) {
      anchorGroup = $this.hy_1.a12(anchorGroup);
    }
    var index = $this.hy_1.m14(anchorGroup) ? 0 : recomposeIndex;
    if (anchorGroup === group)
      return index;
    var current = anchorGroup;
    var nodeIndexLimit = index + (updatedNodeCount($this, anchorGroup) - $this.hy_1.n14(group) | 0) | 0;
    loop: while (index < nodeIndexLimit && current !== groupLocation) {
      current = current + 1 | 0;
      while (current < groupLocation) {
        var end = current + $this.hy_1.s13(current) | 0;
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
      var tmp0_safe_receiver = $this.ox_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.updatedNodeCount.<anonymous>' call
        tmp = tmp0_safe_receiver.gt(group) ? tmp0_safe_receiver.j(group) : 0;
      }
      var tmp1_elvis_lhs = tmp;
      return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    }
    var nodeCounts = $this.nx_1;
    if (!(nodeCounts == null)) {
      var override = nodeCounts[group];
      if (override >= 0)
        return override;
    }
    return $this.hy_1.n14(group);
  }
  function updateNodeCount($this, group, count) {
    if (!(updatedNodeCount($this, group) === count)) {
      if (group < 0) {
        var tmp0_elvis_lhs = $this.ox_1;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateNodeCount.<anonymous>' call
          var newCounts = new MutableIntIntMap();
          $this.ox_1 = newCounts;
          tmp = newCounts;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var virtualCounts = tmp;
        virtualCounts.ft(group, count);
      } else {
        var tmp1_elvis_lhs = $this.nx_1;
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateNodeCount.<anonymous>' call
          var newCounts_0 = new Int32Array($this.hy_1.i());
          fill(newCounts_0, -1);
          $this.nx_1 = newCounts_0;
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
    $this.nx_1 = null;
    $this.ox_1 = null;
  }
  function recordUpsAndDowns($this, oldGroup, newGroup, commonRoot) {
    var reader = $this.hy_1;
    var nearestCommonRoot = nearestCommonRootOf(reader, oldGroup, newGroup, commonRoot);
    var current = oldGroup;
    while (current > 0 ? !(current === nearestCommonRoot) : false) {
      if (reader.m14(current)) {
        $this.ny_1.z13();
      }
      current = reader.a12(current);
    }
    doRecordDownsFor($this, newGroup, nearestCommonRoot);
  }
  function doRecordDownsFor($this, group, nearestCommonRoot) {
    if (group > 0 ? !(group === nearestCommonRoot) : false) {
      doRecordDownsFor($this, $this.hy_1.a12(group), nearestCommonRoot);
      if ($this.hy_1.m14(group)) {
        $this.ny_1.o14(nodeAt($this.hy_1, $this, group));
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
      var groupKey = groupCompoundKeyPart($this.hy_1, $this, group);
      var tmp_0;
      if (groupKey === get_movableContentKey()) {
        tmp_0 = groupKey;
      } else {
        // Inline function 'androidx.compose.runtime.rol' call
        var this_0 = compoundKeyOf($this, $this.hy_1.a12(group), recomposeGroup, recomposeKey);
        tmp_0 = rotateLeft(this_0, 3) ^ groupKey;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function groupCompoundKeyPart(_this__u8e3s4, $this, group) {
    var tmp;
    if (_this__u8e3s4.p14(group)) {
      var tmp0_safe_receiver = _this__u8e3s4.y11(group);
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
      var it = _this__u8e3s4.z11(group);
      var tmp_2;
      if (it === 207) {
        var tmp0_safe_receiver_0 = _this__u8e3s4.x11(group);
        var tmp_3;
        if (tmp0_safe_receiver_0 == null) {
          tmp_3 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>.<anonymous>' call
          tmp_3 = equals(tmp0_safe_receiver_0, Companion_getInstance_0().k12_1) ? it : hashCode(tmp0_safe_receiver_0);
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
    $this.lx_1 = $this.hy_1.q14();
    $this.hy_1.e12();
  }
  function addRecomposeScope($this) {
    if ($this.qy_1) {
      var tmp = $this.gx_1;
      var scope = new RecomposeScopeImpl(tmp instanceof CompositionImpl ? tmp : THROW_CCE());
      $this.ey_1.n13(scope);
      $this.w11(scope);
      scope.u14($this.by_1);
    } else {
      var invalidation = removeLocation($this.sx_1, $this.hy_1.n10_1);
      var slot = $this.hy_1.z();
      var tmp_0;
      if (equals(slot, Companion_getInstance_0().k12_1)) {
        var tmp_1 = $this.gx_1;
        var newScope = new RecomposeScopeImpl(tmp_1 instanceof CompositionImpl ? tmp_1 : THROW_CCE());
        $this.w11(newScope);
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
        var this_0 = scope_0.r14();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.addRecomposeScope.<anonymous>' call
        if (this_0) {
          scope_0.s14(false);
        }
        tmp_2 = this_0;
      }
      scope_0.t14(tmp_2);
      $this.ey_1.n13(scope_0);
      scope_0.u14($this.by_1);
    }
  }
  function invokeMovableContentLambda($this, content, locals, parameter, force) {
    $this.v14(get_movableContentKey(), content);
    updateSlot($this, parameter);
    var savedCompoundKeyHash = $this.ry_1;
    try {
      $this.ry_1 = get_movableContentKey();
      if ($this.qy_1) {
        $this.jy_1.w14();
      }
      var providersChanged = $this.qy_1 ? false : !equals($this.hy_1.g12(), locals);
      if (providersChanged) {
        recordProviderUpdate($this, locals);
      }
      start($this, 202, get_compositionLocalMap(), Companion_getInstance_1().r11_1, locals);
      $this.ly_1 = null;
      if ($this.qy_1 ? !force : false) {
        $this.ky_1 = true;
        var anchor = $this.jy_1.b13($this.jy_1.a12($this.jy_1.m11_1));
        var reference = new MovableContentStateReference(content, parameter, $this.gx_1, $this.iy_1, anchor, emptyList(), currentCompositionLocalScope($this));
        $this.bx_1.x14(reference);
      } else {
        var savedProvidersInvalid = $this.wx_1;
        $this.wx_1 = providersChanged;
        invokeComposable($this, ComposableLambda$invoke$ref(composableLambdaInstance(316014703, true, ComposerImpl$invokeMovableContentLambda$lambda(content, parameter))));
        $this.wx_1 = savedProvidersInvalid;
      }
    }finally {
      endGroup($this);
      $this.ly_1 = null;
      $this.ry_1 = savedCompoundKeyHash;
      $this.y14();
    }
  }
  function insertMovableContentGuarded($this, references) {
    // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.withChangeList' call
    var this_0 = $this.ny_1;
    var newChangeList = $this.fx_1;
    var previousChangeList = this_0.sz_1;
    try {
      this_0.sz_1 = newChangeList;
      // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>' call
      $this.ny_1.z14();
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = references.i() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = references.j(index);
          // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>' call
          var to = item.fe();
          var from = item.ge();
          var anchor = to.e15_1;
          var location = to.d15_1.h15(anchor);
          var effectiveNodeIndex = new IntRef();
          $this.ny_1.i15(effectiveNodeIndex, anchor);
          if (from == null) {
            var toSlotTable = to.d15_1;
            if (equals(toSlotTable, $this.iy_1)) {
              createFreshInsertTable($this);
            }
            // Inline function 'androidx.compose.runtime.SlotTable.read' call
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
            var reader = to.d15_1.fz();
            var tmp;
            try {
              reader.l13(location);
              $this.ny_1.n15(location);
              var offsetChanges = new ChangeList();
              recomposeMovableContent$default($this, VOID, VOID, VOID, VOID, ComposerImpl$insertMovableContentGuarded$lambda($this, offsetChanges, reader, to));
              $this.ny_1.o15(offsetChanges, effectiveNodeIndex);
              tmp = Unit_instance;
            }finally {
              reader.r10();
            }
          } else {
            var resolvedState = $this.bx_1.j15(from);
            var tmp1_elvis_lhs = resolvedState == null ? null : resolvedState.k15_1;
            var fromTable = tmp1_elvis_lhs == null ? from.d15_1 : tmp1_elvis_lhs;
            var tmp3_safe_receiver = resolvedState == null ? null : resolvedState.k15_1;
            var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.b13(0);
            var fromAnchor = tmp4_elvis_lhs == null ? from.e15_1 : tmp4_elvis_lhs;
            var nodesToInsert = collectNodesFrom(fromTable, fromAnchor);
            // Inline function 'kotlin.collections.isNotEmpty' call
            if (!nodesToInsert.o()) {
              $this.ny_1.l15(nodesToInsert, effectiveNodeIndex);
              if (equals(to.d15_1, $this.cx_1)) {
                var group = $this.cx_1.h15(anchor);
                updateNodeCount($this, group, updatedNodeCount($this, group) + nodesToInsert.i() | 0);
              }
            }
            $this.ny_1.m15(resolvedState, $this.bx_1, from, to);
            // Inline function 'androidx.compose.runtime.SlotTable.read' call
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
            var reader_0 = fromTable.fz();
            var tmp_0;
            try {
              $l$block: {
                // Inline function 'androidx.compose.runtime.ComposerImpl.withReader' call
                var savedReader = $this.hy_1;
                var savedCountOverrides = $this.nx_1;
                var savedProviderUpdates = $this.vx_1;
                $this.nx_1 = null;
                $this.vx_1 = null;
                try {
                  $this.hy_1 = reader_0;
                  var newLocation = fromTable.h15(fromAnchor);
                  reader_0.l13(newLocation);
                  $this.ny_1.n15(newLocation);
                  var offsetChanges_0 = new ChangeList();
                  // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.withChangeList' call
                  var this_1 = $this.ny_1;
                  var previousChangeList_0 = this_1.sz_1;
                  try {
                    this_1.sz_1 = offsetChanges_0;
                    // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.withoutImplicitRootStart' call
                    var this_2 = $this.ny_1;
                    var previousImplicitRootStart = this_2.vz_1;
                    try {
                      this_2.vz_1 = false;
                      // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                      var tmp_1 = reader_0.l10_1;
                      var tmp_2 = from.f15_1;
                      recomposeMovableContent($this, from.c15_1, to.c15_1, tmp_1, tmp_2, ComposerImpl$insertMovableContentGuarded$lambda_0($this, to));
                    }finally {
                      this_2.vz_1 = previousImplicitRootStart;
                    }
                  }finally {
                    this_1.sz_1 = previousChangeList_0;
                  }
                  $this.ny_1.o15(offsetChanges_0, effectiveNodeIndex);
                  break $l$block;
                }finally {
                  $this.hy_1 = savedReader;
                  $this.nx_1 = savedCountOverrides;
                  $this.vx_1 = savedProviderUpdates;
                }
              }
              tmp_0 = Unit_instance;
            }finally {
              reader_0.r10();
            }
          }
          $this.ny_1.p15();
        }
         while (inductionVariable <= last);
      $this.ny_1.q15();
      $this.ny_1.n15(0);
    }finally {
      this_0.sz_1 = previousChangeList;
    }
  }
  function recomposeMovableContent($this, from, to, index, invalidations, block) {
    var savedIsComposing = $this.fy_1;
    var savedNodeIndex = $this.jx_1;
    try {
      $this.fy_1 = true;
      $this.jx_1 = 0;
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = invalidations.i() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = invalidations.j(index_0);
          // Inline function 'androidx.compose.runtime.ComposerImpl.recomposeMovableContent.<anonymous>' call
          var scope = item.fe();
          var instances = item.ge();
          if (!(instances == null)) {
            // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
            // Inline function 'kotlin.contracts.contract' call
            var values = instances.t15_1;
            var inductionVariable_0 = 0;
            var last_0 = instances.s15_1;
            if (inductionVariable_0 < last_0)
              do {
                var i = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.compose.runtime.ComposerImpl.recomposeMovableContent.<anonymous>.<anonymous>' call
                var tmp = values[i];
                var instance = !(tmp == null) ? tmp : THROW_CCE();
                $this.r15(scope, instance);
              }
               while (inductionVariable_0 < last_0);
          } else {
            $this.r15(scope, null);
          }
        }
         while (inductionVariable <= last);
      var tmp_0;
      if (from == null) {
        tmp_0 = null;
      } else {
        tmp_0 = from.u15(to, index == null ? -1 : index, block);
      }
      var tmp2_elvis_lhs = tmp_0;
      return tmp2_elvis_lhs == null ? block() : tmp2_elvis_lhs;
    }finally {
      $this.fy_1 = savedIsComposing;
      $this.jx_1 = savedNodeIndex;
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
    if (!!$this.fy_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose.<anonymous>' call
      var message = 'Reentrant composition is not supported';
      composeRuntimeError(toString(message));
    }
    $l$block: {
      // Inline function 'androidx.compose.runtime.trace' call
      var sectionName = 'Compose:recompose';
      var token = Trace_instance.v15(sectionName);
      try {
        $this.by_1 = currentSnapshot().a16();
        $this.vx_1 = null;
        // Inline function 'androidx.compose.runtime.collection.IdentityArrayMap.forEach' call
        var inductionVariable = 0;
        var last = invalidationsRequested.d16_1;
        if (inductionVariable < last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose.<anonymous>.<anonymous>' call
            var tmp = invalidationsRequested.b16_1[index];
            var scope = !(tmp == null) ? tmp : THROW_CCE();
            var tmp_0 = invalidationsRequested.c16_1[index];
            var set = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
            var tmp0_safe_receiver = scope.tw_1;
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e16_1;
            var tmp_1;
            if (tmp1_elvis_lhs == null) {
              return Unit_instance;
            } else {
              tmp_1 = tmp1_elvis_lhs;
            }
            var location = tmp_1;
            $this.sx_1.u(new Invalidation(scope, location, set));
          }
           while (inductionVariable < last);
        sortWith($this.sx_1, get_InvalidationLocationAscending());
        $this.jx_1 = 0;
        var complete = false;
        $this.fy_1 = true;
        var tmp_2;
        try {
          startRoot($this);
          var savedContent = $this.v11();
          if (!(savedContent === content) ? !(content == null) : false) {
            $this.w11((content == null ? true : !(content == null)) ? content : THROW_CCE());
          }
          // Inline function 'androidx.compose.runtime.observeDerivedStateRecalculations' call
          var observer = $this.dy_1;
          var observers = derivedStateObservers_0();
          try {
            observers.i16(observer);
            // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose.<anonymous>.<anonymous>' call
            if (!(content == null)) {
              startGroup_0($this, 200, get_invocation());
              invokeComposable($this, content);
              endGroup($this);
            } else if ((($this.qx_1 ? true : $this.wx_1) ? !(savedContent == null) : false) ? !equals(savedContent, Companion_getInstance_0().k12_1) : false) {
              startGroup_0($this, 200, get_invocation());
              invokeComposable($this, (!(savedContent == null) ? typeof savedContent === 'function' : false) ? savedContent : THROW_CCE());
              endGroup($this);
            } else {
              $this.j16();
            }
          }finally {
            // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
            var tmp$ret$1 = observers.h16_1 - 1 | 0;
            observers.g1(tmp$ret$1);
          }
          endRoot($this);
          complete = true;
          tmp_2 = Unit_instance;
        }finally {
          $this.fy_1 = false;
          $this.sx_1.b1();
          if (!complete) {
            abortRoot($this);
          }
          createFreshInsertTable($this);
        }
        break $l$block;
      }finally {
        Trace_instance.k16(token);
      }
    }
  }
  function _get_node__db0vwp(_this__u8e3s4, $this) {
    return _this__u8e3s4.l16(_this__u8e3s4.n10_1);
  }
  function nodeAt(_this__u8e3s4, $this, index) {
    return _this__u8e3s4.l16(index);
  }
  function validateNodeExpected($this) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!$this.rx_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.validateNodeExpected.<anonymous>' call
      var message = 'A call to createNode(), emitNode() or useNode() expected was not expected';
      composeRuntimeError(toString(message));
    }
    $this.rx_1 = false;
  }
  function validateNodeNotExpected($this) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!$this.rx_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.validateNodeNotExpected.<anonymous>' call
      var message = 'A call to createNode(), emitNode() or useNode() expected';
      composeRuntimeError(toString(message));
    }
  }
  function recordInsert($this, anchor) {
    if ($this.py_1.o()) {
      $this.ny_1.n16(anchor, $this.iy_1);
    } else {
      $this.ny_1.m16(anchor, $this.iy_1, $this.py_1);
      $this.py_1 = new FixupList();
    }
  }
  function recordDelete($this) {
    reportFreeMovableContent($this, $this.hy_1.l10_1);
    $this.ny_1.o16();
  }
  function reportFreeMovableContent($this, groupBeingRemoved) {
    reportFreeMovableContent$reportGroup($this, groupBeingRemoved, false, 0);
    $this.ny_1.w13();
  }
  function reportAllMovableContent($this) {
    if ($this.cx_1.q16()) {
      var changes = new ChangeList();
      $this.my_1 = changes;
      // Inline function 'androidx.compose.runtime.SlotTable.read' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
      var reader = $this.cx_1.fz();
      var tmp;
      try {
        $this.hy_1 = reader;
        var this_0 = $this.ny_1;
        var previousChangeList = this_0.sz_1;
        var tmp_0;
        try {
          this_0.sz_1 = changes;
          reportFreeMovableContent($this, 0);
          $this.ny_1.p16();
          tmp_0 = Unit_instance;
        }finally {
          this_0.sz_1 = previousChangeList;
        }
        tmp = tmp_0;
      }finally {
        reader.r10();
      }
    }
  }
  function finalizeCompose($this) {
    $this.ny_1.r16();
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!$this.hx_1.o()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.finalizeCompose.<anonymous>' call
      var message = 'Start/end imbalance';
      composeRuntimeError(toString(message));
    }
    cleanUpCompose($this);
  }
  function cleanUpCompose($this) {
    $this.ix_1 = null;
    $this.jx_1 = 0;
    $this.lx_1 = 0;
    $this.ry_1 = 0;
    $this.rx_1 = false;
    $this.ny_1.s16();
    $this.ey_1.b1();
    clearUpdatedNodeCounts($this);
  }
  function CompositionContextHolder() {
  }
  function updateCompoundKeyWhenWeEnterGroup($this, groupKey, dataKey, data) {
    if (dataKey == null)
      if ((!(data == null) ? groupKey === 207 : false) ? !equals(data, Companion_getInstance_0().k12_1) : false) {
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
    var this_0 = $this.ry_1;
    tmp.ry_1 = rotateLeft(this_0, 3) ^ keyHash;
  }
  function updateCompoundKeyWhenWeExitGroup($this, groupKey, dataKey, data) {
    if (dataKey == null)
      if ((!(data == null) ? groupKey === 207 : false) ? !equals(data, Companion_getInstance_0().k12_1) : false) {
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
    var this_0 = $this.ry_1 ^ groupKey;
    tmp.ry_1 = rotateRight(this_0, 3);
  }
  function reportFreeMovableContent$reportGroup(this$0, group, needsNodeDelete, nodeIndex) {
    var reader = this$0.hy_1;
    var tmp;
    if (reader.j17(group)) {
      var key = reader.z11(group);
      var objectKey = reader.y11(group);
      var tmp_0;
      var tmp_1;
      if (key === get_movableContentKey()) {
        tmp_1 = objectKey instanceof MovableContent;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var movableContent = objectKey instanceof MovableContent ? objectKey : THROW_CCE();
        var parameter = reader.u16(group, 0);
        var anchor = reader.b13(group);
        var end = group + reader.s13(group) | 0;
        // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
        var this_0 = filterToRange(this$0.sx_1, group, end);
        // Inline function 'kotlin.contracts.contract' call
        var target = ArrayList_init_$Create$_0(this_0.i());
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = this_0.i() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = this_0.j(index);
            // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
            // Inline function 'kotlin.collections.plusAssign' call
            // Inline function 'androidx.compose.runtime.ComposerImpl.reportFreeMovableContent.reportGroup.<anonymous>' call
            var element = to(item.nw_1, item.pw_1);
            target.u(element);
          }
           while (inductionVariable <= last);
        var invalidations = target;
        var reference = new MovableContentStateReference(movableContent, parameter, this$0.gx_1, this$0.cx_1, anchor, invalidations, currentCompositionLocalScope_0(this$0, group));
        this$0.bx_1.f17(reference);
        this$0.ny_1.g17();
        this$0.ny_1.h17(this$0.gx_1, this$0.bx_1, reference);
        var tmp_2;
        if (needsNodeDelete) {
          this$0.ny_1.i17(nodeIndex, group);
          tmp_2 = 0;
        } else {
          tmp_2 = reader.n14(group);
        }
        tmp_0 = tmp_2;
      } else {
        if (key === 206 ? equals(objectKey, get_reference()) : false) {
          var tmp_3 = reader.u16(group, 0);
          var contextHolder = tmp_3 instanceof CompositionContextHolder ? tmp_3 : null;
          if (!(contextHolder == null)) {
            var compositionContext = contextHolder.v16_1;
            // Inline function 'kotlin.collections.forEach' call
            var tmp0_iterator = compositionContext.b17_1.k();
            while (tmp0_iterator.x()) {
              var element_0 = tmp0_iterator.z();
              // Inline function 'androidx.compose.runtime.ComposerImpl.reportFreeMovableContent.reportGroup.<anonymous>' call
              reportAllMovableContent(element_0);
              this$0.bx_1.e17(element_0.gx_1);
            }
          }
          tmp_0 = reader.n14(group);
        } else {
          if (reader.m14(group)) {
            tmp_0 = 1;
          } else {
            tmp_0 = reader.n14(group);
          }
        }
      }
      tmp = tmp_0;
    } else if (reader.t16(group)) {
      var size = reader.s13(group);
      var end_0 = group + size | 0;
      var current = group + 1 | 0;
      var runningNodeCount = 0;
      while (current < end_0) {
        var isNode = reader.m14(current);
        if (isNode) {
          this$0.ny_1.w13();
          this$0.ny_1.o14(reader.l16(current));
        }
        runningNodeCount = runningNodeCount + reportFreeMovableContent$reportGroup(this$0, current, isNode ? true : needsNodeDelete, isNode ? 0 : nodeIndex + runningNodeCount | 0) | 0;
        if (isNode) {
          this$0.ny_1.w13();
          this$0.ny_1.z13();
        }
        current = current + reader.s13(current) | 0;
      }
      tmp = reader.m14(group) ? 1 : runningNodeCount;
    } else if (reader.m14(group)) {
      tmp = 1;
    } else {
      tmp = reader.n14(group);
    }
    return tmp;
  }
  function ComposerImpl$derivedStateObserver$1(this$0) {
    this.k17_1 = this$0;
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.l17(p0, p1);
    };
  }
  function ComposerImpl$invokeMovableContentLambda$lambda($content, $parameter) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C3005@114008L18:Composer.kt#9igjgp');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.n17()) {
        if (isTraceInProgress()) {
          traceEventStart(316014703, $changed, -1, 'androidx.compose.runtime.ComposerImpl.invokeMovableContentLambda.<anonymous> (Composer.kt:3005)');
        }
        $content.m17_1($parameter, $composer_0, 8);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.e12();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda(this$0, $offsetChanges, $reader, $to) {
    return function () {
      var this_0 = this$0.ny_1;
      var newChangeList = $offsetChanges;
      var previousChangeList = this_0.sz_1;
      var tmp;
      try {
        this_0.sz_1 = newChangeList;
        $l$block: {
          // Inline function 'androidx.compose.runtime.ComposerImpl.withReader' call
          var this_1 = this$0;
          var reader = $reader;
          var savedReader = this_1.hy_1;
          var savedCountOverrides = this_1.nx_1;
          var savedProviderUpdates = this_1.vx_1;
          this_1.nx_1 = null;
          this_1.vx_1 = null;
          try {
            this_1.hy_1 = reader;
            var this_2 = this$0.ny_1;
            var previousImplicitRootStart = this_2.vz_1;
            var tmp_0;
            try {
              this_2.vz_1 = false;
              invokeMovableContentLambda(this$0, $to.a15_1, $to.g15_1, $to.b15_1, true);
              tmp_0 = Unit_instance;
            }finally {
              this_2.vz_1 = previousImplicitRootStart;
            }
            break $l$block;
          }finally {
            this_1.hy_1 = savedReader;
            this_1.nx_1 = savedCountOverrides;
            this_1.vx_1 = savedProviderUpdates;
          }
        }
        tmp = tmp_0;
      }finally {
        this_0.sz_1 = previousChangeList;
      }
      return Unit_instance;
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_0(this$0, $to) {
    return function () {
      invokeMovableContentLambda(this$0, $to.a15_1, $to.g15_1, $to.b15_1, true);
      return Unit_instance;
    };
  }
  function ComposerImpl(applier, parentContext, slotTable, abandonSet, changes, lateChanges, composition) {
    this.ax_1 = applier;
    this.bx_1 = parentContext;
    this.cx_1 = slotTable;
    this.dx_1 = abandonSet;
    this.ex_1 = changes;
    this.fx_1 = lateChanges;
    this.gx_1 = composition;
    this.hx_1 = new Stack();
    this.ix_1 = null;
    this.jx_1 = 0;
    this.kx_1 = new IntStack();
    this.lx_1 = 0;
    this.mx_1 = new IntStack();
    this.nx_1 = null;
    this.ox_1 = null;
    this.px_1 = false;
    this.qx_1 = false;
    this.rx_1 = false;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.sx_1 = ArrayList_init_$Create$();
    this.tx_1 = new IntStack();
    this.ux_1 = persistentCompositionLocalHashMapOf();
    this.vx_1 = null;
    this.wx_1 = false;
    this.xx_1 = new IntStack();
    this.yx_1 = false;
    this.zx_1 = -1;
    this.ay_1 = 0;
    this.by_1 = 0;
    this.cy_1 = false;
    var tmp_0 = this;
    tmp_0.dy_1 = new ComposerImpl$derivedStateObserver$1(this);
    this.ey_1 = new Stack();
    this.fy_1 = false;
    this.gy_1 = false;
    var tmp_1 = this;
    // Inline function 'kotlin.also' call
    var this_0 = this.cx_1.fz();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.reader.<anonymous>' call
    this_0.r10();
    tmp_1.hy_1 = this_0;
    this.iy_1 = new SlotTable();
    var tmp_2 = this;
    // Inline function 'kotlin.also' call
    var this_1 = this.iy_1.d12();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.writer.<anonymous>' call
    this_1.r10();
    tmp_2.jy_1 = this_1;
    this.ky_1 = false;
    this.ly_1 = null;
    this.my_1 = null;
    this.ny_1 = new ComposerChangeListWriter(this, this.ex_1);
    var tmp_3 = this;
    // Inline function 'androidx.compose.runtime.SlotTable.read' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
    var reader = this.iy_1.fz();
    var tmp_4;
    try {
      // Inline function 'androidx.compose.runtime.ComposerImpl.insertAnchor.<anonymous>' call
      tmp_4 = reader.b13(0);
    }finally {
      reader.r10();
    }
    tmp_3.oy_1 = tmp_4;
    this.py_1 = new FixupList();
    this.qy_1 = false;
    this.ry_1 = 0;
    this.sy_1 = false;
    this.ty_1 = true;
    this.uy_1 = new IntStack();
  }
  protoOf(ComposerImpl).o17 = function () {
    return this.ax_1;
  };
  protoOf(ComposerImpl).p17 = function () {
    return this.ay_1 > 0;
  };
  protoOf(ComposerImpl).q17 = function () {
    return this.bx_1.r17();
  };
  protoOf(ComposerImpl).s17 = function (key) {
    return start(this, key, null, Companion_getInstance_1().r11_1, null);
  };
  protoOf(ComposerImpl).t17 = function () {
    return endGroup(this);
  };
  protoOf(ComposerImpl).u17 = function () {
    return start(this, -127, null, Companion_getInstance_1().r11_1, null);
  };
  protoOf(ComposerImpl).v17 = function () {
    endGroup(this);
    var scope = this.w17();
    if (!(scope == null) ? scope.p13() : false) {
      scope.x17(true);
    }
  };
  protoOf(ComposerImpl).y17 = function () {
    var tmp;
    if (!this.n17() ? true : this.wx_1) {
      tmp = true;
    } else {
      var tmp0_safe_receiver = this.w17();
      tmp = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y17()) === true;
    }
    return tmp;
  };
  protoOf(ComposerImpl).v14 = function (key, dataKey) {
    return start(this, key, dataKey, Companion_getInstance_1().r11_1, null);
  };
  protoOf(ComposerImpl).y14 = function () {
    return endGroup(this);
  };
  protoOf(ComposerImpl).z17 = function () {
    this.vx_1 = null;
  };
  protoOf(ComposerImpl).a18 = function () {
    return this.qy_1;
  };
  protoOf(ComposerImpl).n17 = function () {
    var tmp;
    var tmp_0;
    if ((!this.qy_1 ? !this.yx_1 : false) ? !this.wx_1 : false) {
      var tmp0_safe_receiver = this.w17();
      tmp_0 = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.b18()) === false;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !this.qx_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).i12 = function () {
    start(this, 125, null, Companion_getInstance_1().s11_1, null);
    this.rx_1 = true;
  };
  protoOf(ComposerImpl).c18 = function (factory) {
    validateNodeExpected(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!this.qy_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.createNode.<anonymous>' call
      var message = 'createNode() can only be called when inserting';
      composeRuntimeError(toString(message));
    }
    var insertIndex = this.kx_1.d18();
    var groupAnchor = this.jy_1.b13(this.jy_1.m11_1);
    this.lx_1 = this.lx_1 + 1 | 0;
    this.py_1.e18(factory, insertIndex, groupAnchor);
  };
  protoOf(ComposerImpl).f18 = function () {
    validateNodeExpected(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.qy_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.useNode.<anonymous>' call
      var message = 'useNode() called while inserting';
      composeRuntimeError(toString(message));
    }
    var node = _get_node__db0vwp(this.hy_1, this);
    this.ny_1.o14(node);
    var tmp;
    if (this.yx_1) {
      tmp = !(node == null) ? isInterface(node, ComposeNodeLifecycleCallback) : false;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.ny_1.g18(node);
    }
  };
  protoOf(ComposerImpl).h18 = function () {
    return end(this, true);
  };
  protoOf(ComposerImpl).i18 = function (value, block) {
    if (this.qy_1) {
      this.py_1.k18(value, block);
    } else {
      this.ny_1.j18(value, block);
    }
  };
  protoOf(ComposerImpl).v11 = function () {
    var tmp;
    if (this.qy_1) {
      validateNodeNotExpected(this);
      tmp = Companion_getInstance_0().k12_1;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.nextSlot.<anonymous>' call
      var it = this.hy_1.z();
      var tmp_0;
      var tmp_1;
      if (this.yx_1) {
        tmp_1 = !(!(it == null) ? isInterface(it, ReusableRememberObserver) : false);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = Companion_getInstance_0().k12_1;
      } else {
        tmp_0 = it;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(ComposerImpl).l18 = function () {
    var tmp;
    if (this.qy_1) {
      validateNodeNotExpected(this);
      tmp = Companion_getInstance_0().k12_1;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.nextSlotForCache.<anonymous>' call
      var it = this.hy_1.z();
      var tmp_0;
      var tmp_1;
      if (this.yx_1) {
        tmp_1 = !(!(it == null) ? isInterface(it, ReusableRememberObserver) : false);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = Companion_getInstance_0().k12_1;
      } else {
        if (it instanceof RememberObserverHolder) {
          tmp_0 = it.m18_1;
        } else {
          tmp_0 = it;
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(ComposerImpl).lz = function (value) {
    var tmp;
    if (!equals(this.v11(), value)) {
      this.w11(value);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).n18 = function (value) {
    var tmp;
    if (!(this.v11() === value)) {
      this.w11(value);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).o18 = function (value) {
    var next = this.v11();
    if (!(next == null) ? typeof next === 'boolean' : false) {
      var nextPrimitive = next;
      if (value === nextPrimitive)
        return false;
    }
    this.w11(value);
    return true;
  };
  protoOf(ComposerImpl).p18 = function (value) {
    var next = this.v11();
    if (!(next == null) ? typeof next === 'number' : false) {
      var nextPrimitive = next;
      if (value === nextPrimitive)
        return false;
    }
    this.w11(value);
    return true;
  };
  protoOf(ComposerImpl).w11 = function (value) {
    if (this.qy_1) {
      this.jy_1.s18(value);
    } else {
      var groupSlotIndex = this.hy_1.q18() - 1 | 0;
      this.ny_1.r18(value, groupSlotIndex);
    }
  };
  protoOf(ComposerImpl).t18 = function (value) {
    var tmp;
    if (!(value == null) ? isInterface(value, RememberObserver) : false) {
      if (this.qy_1) {
        this.ny_1.u18(value);
      }
      this.dx_1.u(value);
      tmp = new RememberObserverHolder(value);
    } else {
      tmp = value;
    }
    var toStore = tmp;
    this.w11(toStore);
  };
  protoOf(ComposerImpl).v18 = function (value) {
    var parentScope = currentCompositionLocalScope(this);
    startGroup_0(this, 201, get_provider());
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.startProvider.<anonymous>' call
    var it = this.w18();
    var tmp;
    if (equals(it, Companion_getInstance_0().k12_1)) {
      tmp = null;
    } else {
      tmp = (!(it == null) ? isInterface(it, State_0) : false) ? it : THROW_CCE();
    }
    var oldState = tmp;
    var tmp_0 = value.x18_1;
    var local = tmp_0 instanceof CompositionLocal ? tmp_0 : THROW_CCE();
    var state = local.b19(value.y18_1, oldState);
    var change = !equals(state, oldState);
    if (change) {
      this.c19(state);
    }
    var providers;
    var invalid;
    if (this.qy_1) {
      providers = parentScope.d19(local, state);
      invalid = false;
      this.ky_1 = true;
    } else {
      var tmp_1 = this.hy_1.x11(this.hy_1.l10_1);
      var oldScope = (!(tmp_1 == null) ? isInterface(tmp_1, PersistentCompositionLocalMap) : false) ? tmp_1 : THROW_CCE();
      providers = ((!this.n17() ? true : change) ? value.z18_1 ? true : !contains_0(parentScope, local) : false) ? parentScope.d19(local, state) : oldScope;
      invalid = this.yx_1 ? true : !(oldScope === providers);
    }
    if (invalid ? !this.qy_1 : false) {
      recordProviderUpdate(this, providers);
    }
    this.xx_1.kz(asInt(this.wx_1));
    this.wx_1 = invalid;
    this.ly_1 = providers;
    start(this, 202, get_compositionLocalMap(), Companion_getInstance_1().r11_1, providers);
  };
  protoOf(ComposerImpl).e19 = function () {
    endGroup(this);
    endGroup(this);
    this.wx_1 = asBool(this.xx_1.o13());
    this.ly_1 = null;
  };
  protoOf(ComposerImpl).f19 = function (key) {
    return read(currentCompositionLocalScope(this), key);
  };
  protoOf(ComposerImpl).w17 = function () {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.<get-currentRecomposeScope>.<anonymous>' call
    var it = this.ey_1;
    return (this.ay_1 === 0 ? it.g19() : false) ? it.d18() : null;
  };
  protoOf(ComposerImpl).r15 = function (scope, instance) {
    var tmp0_elvis_lhs = scope.tw_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var anchor = tmp;
    var slotTable = this.hy_1.e10_1;
    var location = anchor.h19(slotTable);
    if (this.fy_1 ? location >= this.hy_1.l10_1 : false) {
      insertIfMissing(this.sx_1, location, scope, instance);
      return true;
    }
    return false;
  };
  protoOf(ComposerImpl).j16 = function () {
    if (this.sx_1.o()) {
      skipGroup(this);
    } else {
      var reader = this.hy_1;
      var key = reader.w12();
      var dataKey = reader.y12();
      var aux = reader.g12();
      updateCompoundKeyWhenWeEnterGroup(this, key, dataKey, aux);
      startReaderGroup(this, reader.i19(), null);
      recomposeToGroupEnd(this);
      reader.b14();
      updateCompoundKeyWhenWeExitGroup(this, key, dataKey, aux);
    }
  };
  protoOf(ComposerImpl).e12 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.lx_1 === 0)) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.skipToGroupEnd.<anonymous>' call
      var message = 'No nodes can be emitted before calling skipAndEndGroup';
      composeRuntimeError(toString(message));
    }
    var tmp0_safe_receiver = this.w17();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.j19();
    }
    if (this.sx_1.o()) {
      skipReaderToGroupEnd(this);
    } else {
      recomposeToGroupEnd(this);
    }
  };
  protoOf(ComposerImpl).k19 = function (key) {
    start(this, key, null, Companion_getInstance_1().r11_1, null);
    addRecomposeScope(this);
    return this;
  };
  protoOf(ComposerImpl).l19 = function () {
    var scope = this.ey_1.g19() ? this.ey_1.o13() : null;
    if (scope != null) {
      scope.t14(false);
    }
    var tmp2_safe_receiver = scope == null ? null : scope.m19(this.by_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.ny_1.n19(tmp2_safe_receiver, this.gx_1);
    }
    var tmp;
    if ((!(scope == null) ? !scope.p19() : false) ? scope.p13() ? true : this.px_1 : false) {
      if (scope.tw_1 == null) {
        var tmp_0 = scope;
        var tmp_1;
        if (this.qy_1) {
          tmp_1 = this.jy_1.b13(this.jy_1.m11_1);
        } else {
          tmp_1 = this.hy_1.b13(this.hy_1.n10_1);
        }
        tmp_0.tw_1 = tmp_1;
      }
      scope.o19(false);
      tmp = scope;
    } else {
      tmp = null;
    }
    var result = tmp;
    end(this, false);
    return result;
  };
  protoOf(ComposerImpl).q19 = function (references) {
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
  protoOf(ComposerImpl).r19 = function (sourceInformation) {
    if (this.qy_1 ? this.cy_1 : false) {
      this.jy_1.s19(sourceInformation);
    }
  };
  protoOf(ComposerImpl).t19 = function (key, sourceInformation) {
    if (this.qy_1 ? this.cy_1 : false) {
      this.jy_1.u19(key, sourceInformation);
    }
  };
  protoOf(ComposerImpl).v19 = function () {
    if (this.qy_1 ? this.cy_1 : false) {
      this.jy_1.w19();
    }
  };
  protoOf(ComposerImpl).x19 = function (invalidationsRequested, content) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!this.ex_1.o()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.composeContent.<anonymous>' call
      var message = 'Expected applyChanges() to have been called';
      composeRuntimeError(toString(message));
    }
    doCompose(this, invalidationsRequested, content);
  };
  protoOf(ComposerImpl).z19 = function (block) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.fy_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.prepareCompose.<anonymous>' call
      var message = 'Preparing a composition while composing is not supported';
      composeRuntimeError(toString(message));
    }
    this.fy_1 = true;
    try {
      block();
    }finally {
      this.fy_1 = false;
    }
  };
  protoOf(ComposerImpl).a1a = function (invalidationsRequested) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!this.ex_1.o()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.recompose.<anonymous>' call
      var message = 'Expected applyChanges() to have been called';
      composeRuntimeError(toString(message));
    }
    var tmp;
    var tmp_0;
    if (invalidationsRequested.g19()) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp_0 = !this.sx_1.o();
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = this.qx_1;
    }
    if (tmp) {
      doCompose(this, invalidationsRequested, null);
      return this.ex_1.g19();
    }
    return false;
  };
  protoOf(ComposerImpl).b1a = function () {
    return this.w17();
  };
  protoOf(ComposerImpl).w18 = function () {
    return this.l18();
  };
  protoOf(ComposerImpl).c19 = function (value) {
    return this.t18(value);
  };
  protoOf(ComposerImpl).c1a = function (scope) {
    var tmp0_safe_receiver = scope instanceof RecomposeScopeImpl ? scope : null;
    if (tmp0_safe_receiver != null) {
      tmp0_safe_receiver.d1a(true);
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
    tmp.k12_1 = new Composer$Companion$Empty$1();
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
    var tmp0_iterator = _this__u8e3s4.e1a();
    while (tmp0_iterator.x()) {
      var slot = tmp0_iterator.z();
      if (!(slot == null) ? isInterface(slot, ComposeNodeLifecycleCallback) : false) {
        rememberManager.f1a(slot);
      }
      if (slot instanceof RememberObserverHolder) {
        rememberManager.g1a(slot.m18_1);
      }
      if (slot instanceof RecomposeScopeImpl) {
        slot.il();
      }
    }
    _this__u8e3s4.h1a();
  }
  function MovableContentStateReference(content, parameter, composition, slotTable, anchor, invalidations, locals) {
    this.a15_1 = content;
    this.b15_1 = parameter;
    this.c15_1 = composition;
    this.d15_1 = slotTable;
    this.e15_1 = anchor;
    this.f15_1 = invalidations;
    this.g15_1 = locals;
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
    this.k15_1 = slotTable;
  }
  function sourceInformation(composer, sourceInformation) {
    _init_properties_Composer_kt__bmp4g0();
    composer.r19(sourceInformation);
  }
  function isTraceInProgress() {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.isTraceInProgress.<anonymous>' call
    var it = get_compositionTracer();
    return !(it == null) ? it.i1a() : false;
  }
  function traceEventStart(key, dirty1, dirty2, info) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = get_compositionTracer();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.j1a(key, dirty1, dirty2, info);
    }
  }
  function traceEventEnd() {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = get_compositionTracer();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.k1a();
    }
  }
  function MovableContent() {
  }
  function ComposeRuntimeError(message) {
    IllegalStateException_init_$Init$(this);
    captureStack(this, ComposeRuntimeError);
    this.l1a_1 = message;
  }
  protoOf(ComposeRuntimeError).p6 = function () {
    return this.l1a_1;
  };
  function RememberObserverHolder(wrapped) {
    this.m18_1 = wrapped;
  }
  function Pending$keyMap$delegate$lambda(this$0) {
    return function () {
      // Inline function 'kotlin.also' call
      var this_0 = multiMap();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Pending.keyMap$delegate.<anonymous>.<anonymous>' call
      var inductionVariable = 0;
      var last = this$0.o12_1.i();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var keyInfo = this$0.o12_1.j(index);
          put(this_0, get_joinedKey(keyInfo), keyInfo);
        }
         while (inductionVariable < last);
      return this_0;
    };
  }
  function Pending(keyInfos, startIndex) {
    this.o12_1 = keyInfos;
    this.p12_1 = startIndex;
    this.q12_1 = 0;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.p12_1 >= 0)) {
      // Inline function 'androidx.compose.runtime.Pending.<anonymous>' call
      var message = 'Invalid start index';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.r12_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Pending.groupInfos.<anonymous>' call
    var runningNodeIndex = 0;
    // Inline function 'kotlin.collections.hashMapOf' call
    var result = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = this.o12_1.i();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var keyInfo = this.o12_1.j(index);
        // Inline function 'kotlin.collections.set' call
        var key = keyInfo.e13_1;
        var value = new GroupInfo(index, runningNodeIndex, keyInfo.f13_1);
        result.g2(key, value);
        runningNodeIndex = runningNodeIndex + keyInfo.f13_1 | 0;
      }
       while (inductionVariable < last);
    tmp_0.s12_1 = result;
    var tmp_1 = this;
    tmp_1.t12_1 = lazy(Pending$keyMap$delegate$lambda(this));
  }
  protoOf(Pending).m1a = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.t12_1;
    keyMap$factory();
    return this_0.j2();
  };
  protoOf(Pending).z12 = function (key, dataKey) {
    var joinedKey = !(dataKey == null) ? new JoinedKey(key, dataKey) : key;
    return pop(this.m1a(), joinedKey);
  };
  protoOf(Pending).v12 = function (keyInfo) {
    return this.r12_1.u(keyInfo);
  };
  protoOf(Pending).p13 = function () {
    return this.r12_1;
  };
  protoOf(Pending).j13 = function (from, to) {
    if (from > to) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = this.s12_1.e2().k();
      while (tmp0_iterator.x()) {
        var element = tmp0_iterator.z();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveSlot.<anonymous>' call
        var position = element.n1a_1;
        if (position === from)
          element.n1a_1 = to;
        else if (to <= position ? position < from : false)
          element.n1a_1 = position + 1 | 0;
      }
    } else if (to > from) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = this.s12_1.e2().k();
      while (tmp0_iterator_0.x()) {
        var element_0 = tmp0_iterator_0.z();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveSlot.<anonymous>' call
        var position_0 = element_0.n1a_1;
        if (position_0 === from)
          element_0.n1a_1 = to;
        else if ((from + 1 | 0) <= position_0 ? position_0 < to : false)
          element_0.n1a_1 = position_0 - 1 | 0;
      }
    }
  };
  protoOf(Pending).v13 = function (from, to, count) {
    if (from > to) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = this.s12_1.e2().k();
      while (tmp0_iterator.x()) {
        var element = tmp0_iterator.z();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveNode.<anonymous>' call
        var position = element.o1a_1;
        if (from <= position ? position < (from + count | 0) : false)
          element.o1a_1 = to + (position - from | 0) | 0;
        else if (to <= position ? position < from : false)
          element.o1a_1 = position + count | 0;
      }
    } else if (to > from) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = this.s12_1.e2().k();
      while (tmp0_iterator_0.x()) {
        var element_0 = tmp0_iterator_0.z();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveNode.<anonymous>' call
        var position_0 = element_0.o1a_1;
        if (from <= position_0 ? position_0 < (from + count | 0) : false)
          element_0.o1a_1 = to + (position_0 - from | 0) | 0;
        else if ((from + 1 | 0) <= position_0 ? position_0 < to : false)
          element_0.o1a_1 = position_0 - count | 0;
      }
    }
  };
  protoOf(Pending).u12 = function (keyInfo, insertIndex) {
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.s12_1;
    var key = keyInfo.e13_1;
    var value = new GroupInfo(-1, insertIndex, 0);
    this_0.g2(key, value);
  };
  protoOf(Pending).r13 = function (group, newCount) {
    var groupInfo = this.s12_1.p2(group);
    if (!(groupInfo == null)) {
      var index = groupInfo.o1a_1;
      var difference = newCount - groupInfo.p1a_1 | 0;
      groupInfo.p1a_1 = newCount;
      if (!(difference === 0)) {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = this.s12_1.e2().k();
        while (tmp0_iterator.x()) {
          var element = tmp0_iterator.z();
          // Inline function 'androidx.compose.runtime.Pending.updateNodeCount.<anonymous>' call
          if (element.o1a_1 >= index ? !equals(element, groupInfo) : false) {
            var newIndex = element.o1a_1 + difference | 0;
            if (newIndex >= 0)
              element.o1a_1 = newIndex;
          }
        }
      }
      return true;
    }
    return false;
  };
  protoOf(Pending).i13 = function (keyInfo) {
    var tmp0_safe_receiver = this.s12_1.p2(keyInfo.e13_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n1a_1;
    return tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
  };
  protoOf(Pending).h13 = function (keyInfo) {
    var tmp0_safe_receiver = this.s12_1.p2(keyInfo.e13_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o1a_1;
    return tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
  };
  protoOf(Pending).t13 = function (keyInfo) {
    var tmp0_safe_receiver = this.s12_1.p2(keyInfo.e13_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.p1a_1;
    return tmp1_elvis_lhs == null ? keyInfo.f13_1 : tmp1_elvis_lhs;
  };
  function _GroupKind___init__impl__iwqg06(value) {
    return value;
  }
  function _GroupKind___get_value__impl__cf5pqe($this) {
    return $this;
  }
  function Companion_0() {
    Companion_instance_1 = this;
    this.r11_1 = _GroupKind___init__impl__iwqg06(0);
    this.s11_1 = _GroupKind___init__impl__iwqg06(1);
    this.t11_1 = _GroupKind___init__impl__iwqg06(2);
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
    this.x18_1 = compositionLocal;
    this.y18_1 = value;
    this.z18_1 = canOverride;
  }
  function asBool(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return !(_this__u8e3s4 === 0);
  }
  function removeRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findInsertLocation(_this__u8e3s4, start);
    $l$loop: while (index < _this__u8e3s4.i()) {
      var validation = _this__u8e3s4.j(index);
      if (validation.ow_1 < end) {
        _this__u8e3s4.g1(index);
      } else
        break $l$loop;
    }
  }
  function firstInRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findInsertLocation(_this__u8e3s4, start);
    if (index < _this__u8e3s4.i()) {
      var firstInvalidation = _this__u8e3s4.j(index);
      if (firstInvalidation.ow_1 < end)
        return firstInvalidation;
    }
    return null;
  }
  function removeLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findLocation(_this__u8e3s4, location);
    return index >= 0 ? _this__u8e3s4.g1(index) : null;
  }
  function nearestCommonRootOf(_this__u8e3s4, a, b, common) {
    _init_properties_Composer_kt__bmp4g0();
    if (a === b)
      return a;
    if (a === common ? true : b === common)
      return common;
    if (_this__u8e3s4.a12(a) === b)
      return b;
    if (_this__u8e3s4.a12(b) === a)
      return a;
    if (_this__u8e3s4.a12(a) === _this__u8e3s4.a12(b))
      return _this__u8e3s4.a12(a);
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
        currentA = _this__u8e3s4.a12(currentA);
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
        currentB = _this__u8e3s4.a12(currentB);
      }
       while (inductionVariable_0 < times_0);
    while (!(currentA === currentB)) {
      currentA = _this__u8e3s4.a12(currentA);
      currentB = _this__u8e3s4.a12(currentB);
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
        this_0.q1a(instance);
        tmp_0 = this_0;
      }
      _this__u8e3s4.q1(tmp, new Invalidation(scope, location, tmp_0));
    } else {
      if (instance == null) {
        _this__u8e3s4.j(index).pw_1 = null;
      } else {
        var tmp1_safe_receiver = _this__u8e3s4.j(index).pw_1;
        if (tmp1_safe_receiver == null)
          null;
        else
          tmp1_safe_receiver.q1a(instance);
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
    var reader = _this__u8e3s4.fz();
    var tmp;
    try {
      var index = _this__u8e3s4.h15(anchor);
      collectNodesFrom$_anonymous_$collectFromGroup_lmwduz(reader, result, index);
      tmp = Unit_instance;
    }finally {
      reader.r10();
    }
    return result;
  }
  function filterToRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    var index = findInsertLocation(_this__u8e3s4, start);
    $l$loop: while (index < _this__u8e3s4.i()) {
      var invalidation = _this__u8e3s4.j(index);
      if (invalidation.ow_1 < end) {
        result.u(invalidation);
      } else
        break $l$loop;
      index = index + 1 | 0;
    }
    return result;
  }
  function GroupInfo(slotIndex, nodeIndex, nodeCount) {
    this.n1a_1 = slotIndex;
    this.o1a_1 = nodeIndex;
    this.p1a_1 = nodeCount;
  }
  function put(_this__u8e3s4, key, value) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.getOrPut' call
    var value_0 = _this__u8e3s4.p2(key);
    var tmp;
    if (value_0 == null) {
      // Inline function 'androidx.compose.runtime.put.<anonymous>' call
      var answer = LinkedHashSet_init_$Create$();
      _this__u8e3s4.g2(key, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    return tmp.u(value);
  }
  function get_joinedKey(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return !(_this__u8e3s4.d13_1 == null) ? new JoinedKey(_this__u8e3s4.c13_1, _this__u8e3s4.d13_1) : _this__u8e3s4.c13_1;
  }
  function multiMap() {
    _init_properties_Composer_kt__bmp4g0();
    return HashMap_init_$Create$();
  }
  function pop(_this__u8e3s4, key) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = _this__u8e3s4.p2(key);
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
    var high = _this__u8e3s4.i() - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4.j(mid);
      var cmp = compareTo(midVal.ow_1, location);
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
      current = _this__u8e3s4.a12(current);
      count = count + 1 | 0;
    }
    return count;
  }
  function remove(_this__u8e3s4, key, value) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = _this__u8e3s4.p2(key);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.v(value);
      var tmp_0;
      if (tmp0_safe_receiver.o()) {
        _this__u8e3s4.h2(key);
        tmp_0 = Unit_instance;
      }
      tmp = Unit_instance;
    }
    return tmp;
  }
  function sourceInformationMarkerStart(composer, key, sourceInformation) {
    _init_properties_Composer_kt__bmp4g0();
    composer.t19(key, sourceInformation);
  }
  function sourceInformationMarkerEnd(composer) {
    _init_properties_Composer_kt__bmp4g0();
    composer.v19();
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
    if ($this$with.a18() ? true : !equals($this$with.w18(), value)) {
      $this$with.c19(value);
      _Updater___get_composer__impl__9ty7av($this).i18(value, block);
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
    this.r1a_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).s1a = function (a, b) {
    return this.r1a_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.s1a(a, b);
  };
  function collectNodesFrom$_anonymous_$collectFromGroup_lmwduz($reader, result, group) {
    if ($reader.m14(group)) {
      result.u($reader.l16(group));
    } else {
      var current = group + 1 | 0;
      var end = group + $reader.s13(group) | 0;
      while (current < end) {
        collectNodesFrom$_anonymous_$collectFromGroup_lmwduz($reader, result, current);
        current = current + $reader.s13(current) | 0;
      }
    }
  }
  function InvalidationLocationAscending$lambda(i1, i2) {
    _init_properties_Composer_kt__bmp4g0();
    return compareTo(i1.ow_1, i2.ow_1);
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
      return receiver.m1a();
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
    return $this.k1b_1.p17();
  }
  function composeInitial($this, content) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.n1b_1) {
      // Inline function 'androidx.compose.runtime.CompositionImpl.composeInitial.<anonymous>' call
      var message = 'The composition is disposed';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    $this.o1b_1 = content;
    $this.t1a_1.p1b($this, $this.o1b_1);
  }
  function drainPendingModificationsForCompositionLocked($this) {
    var toRecord = $this.v1a_1.r1b(get_PendingApplyNoModifications());
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
            composeRuntimeError('corrupt pendingModifications drain: ' + $this.v1a_1);
          }
        }
      }
    }
  }
  function drainPendingModificationsLocked($this) {
    var toRecord = $this.v1a_1.r1b(null);
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
            composeRuntimeError('corrupt pendingModifications drain: ' + $this.v1a_1);
          }
        }
      }
    }
  }
  function addPendingInvalidationsLocked(_this__u8e3s4, $this, value, forgetConditionalScopes) {
    var set = _this__u8e3s4;
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
    var value_0 = $this.z1a_1.s1b_1.p2(value);
    if (value_0 != null) {
      if (value_0 instanceof MutableScatterSet) {
        // Inline function 'androidx.collection.ScatterSet.forEach' call
        var this_0 = value_0 instanceof MutableScatterSet ? value_0 : THROW_CCE();
        // Inline function 'kotlin.contracts.contract' call
        var k = this_0.wu_1;
        $l$block: {
          // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
          // Inline function 'kotlin.contracts.contract' call
          var m = this_0.vu_1;
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
                      var index = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                      // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
                      var tmp = k[index];
                      var scope = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                      if (!$this.e1b_1.v1b(value, scope) ? !scope.u1b(value).equals(InvalidationResult_IGNORED_getInstance()) : false) {
                        if (scope.t1b() ? !forgetConditionalScopes : false) {
                          $this.a1b_1.u(scope);
                        } else {
                          if (set == null)
                            set = HashSet_init_$Create$();
                          var tmp0_safe_receiver = set;
                          if (tmp0_safe_receiver == null)
                            null;
                          else
                            tmp0_safe_receiver.u(scope);
                        }
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
      } else {
        // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
        var scope_0 = !(value_0 == null) ? value_0 : THROW_CCE();
        if (!$this.e1b_1.v1b(value, scope_0) ? !scope_0.u1b(value).equals(InvalidationResult_IGNORED_getInstance()) : false) {
          if (scope_0.t1b() ? !forgetConditionalScopes : false) {
            $this.a1b_1.u(scope_0);
          } else {
            if (set == null)
              set = HashSet_init_$Create$();
            var tmp0_safe_receiver_0 = set;
            if (tmp0_safe_receiver_0 == null)
              null;
            else
              tmp0_safe_receiver_0.u(scope_0);
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
      var values_0 = values.t15_1;
      var inductionVariable = 0;
      var last = values.s15_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
          var tmp = values_0[i];
          var value = !(tmp == null) ? tmp : THROW_CCE();
          if (value instanceof RecomposeScopeImpl) {
            value.u1b(null);
          } else {
            invalidated._v = addPendingInvalidationsLocked(invalidated._v, $this, value, forgetConditionalScopes);
            // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
            var value_0 = $this.b1b_1.s1b_1.p2(value);
            if (value_0 != null) {
              if (value_0 instanceof MutableScatterSet) {
                // Inline function 'androidx.collection.ScatterSet.forEach' call
                var this_0 = value_0 instanceof MutableScatterSet ? value_0 : THROW_CCE();
                // Inline function 'kotlin.contracts.contract' call
                var k = this_0.wu_1;
                $l$block: {
                  // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                  // Inline function 'kotlin.contracts.contract' call
                  var m = this_0.vu_1;
                  var lastIndex = m.length - 2 | 0;
                  var inductionVariable_0 = 0;
                  if (inductionVariable_0 <= lastIndex)
                    do {
                      var i_0 = inductionVariable_0;
                      inductionVariable_0 = inductionVariable_0 + 1 | 0;
                      var slot = m[i_0];
                      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                      var this_1 = slot;
                      if (!this_1.lb(this_1.hb().ib(7)).lb(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                        var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
                        var inductionVariable_1 = 0;
                        if (inductionVariable_1 < bitCount)
                          do {
                            var j = inductionVariable_1;
                            inductionVariable_1 = inductionVariable_1 + 1 | 0;
                            // Inline function 'androidx.collection.isFull' call
                            if (slot.lb(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                              var index = (i_0 << 3) + j | 0;
                              // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                              // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                              var tmp_0 = k[index];
                              var it = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                              invalidated._v = addPendingInvalidationsLocked(invalidated._v, $this, it, forgetConditionalScopes);
                            }
                            slot = slot.jb(8);
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
      var tmp0_iterator = values.k();
      while (tmp0_iterator.x()) {
        var element = tmp0_iterator.z();
        // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
        if (element instanceof RecomposeScopeImpl) {
          element.u1b(null);
        } else {
          invalidated._v = addPendingInvalidationsLocked(invalidated._v, $this, element, forgetConditionalScopes);
          // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
          var value_1 = $this.b1b_1.s1b_1.p2(element);
          if (value_1 != null) {
            if (value_1 instanceof MutableScatterSet) {
              // Inline function 'androidx.collection.ScatterSet.forEach' call
              var this_2 = value_1 instanceof MutableScatterSet ? value_1 : THROW_CCE();
              // Inline function 'kotlin.contracts.contract' call
              var k_0 = this_2.wu_1;
              $l$block_0: {
                // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                // Inline function 'kotlin.contracts.contract' call
                var m_0 = this_2.vu_1;
                var lastIndex_0 = m_0.length - 2 | 0;
                var inductionVariable_2 = 0;
                if (inductionVariable_2 <= lastIndex_0)
                  do {
                    var i_1 = inductionVariable_2;
                    inductionVariable_2 = inductionVariable_2 + 1 | 0;
                    var slot_0 = m_0[i_1];
                    // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                    var this_3 = slot_0;
                    if (!this_3.lb(this_3.hb().ib(7)).lb(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                      var bitCount_0 = 8 - (~(i_1 - lastIndex_0 | 0) >>> 31 | 0) | 0;
                      var inductionVariable_3 = 0;
                      if (inductionVariable_3 < bitCount_0)
                        do {
                          var j_0 = inductionVariable_3;
                          inductionVariable_3 = inductionVariable_3 + 1 | 0;
                          // Inline function 'androidx.collection.isFull' call
                          if (slot_0.lb(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                            var index_0 = (i_1 << 3) + j_0 | 0;
                            // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                            // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                            var tmp_1 = k_0[index_0];
                            var it_1 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                            invalidated._v = addPendingInvalidationsLocked(invalidated._v, $this, it_1, forgetConditionalScopes);
                          }
                          slot_0 = slot_0.jb(8);
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
      tmp_2 = !$this.a1b_1.o();
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf' call
      // Inline function 'androidx.collection.MutableScatterMap.removeIf' call
      var this_4 = $this.z1a_1.s1b_1;
      $l$block_2: {
        // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
        var m_1 = this_4.hu_1;
        var lastIndex_1 = m_1.length - 2 | 0;
        var inductionVariable_4 = 0;
        if (inductionVariable_4 <= lastIndex_1)
          do {
            var i_2 = inductionVariable_4;
            inductionVariable_4 = inductionVariable_4 + 1 | 0;
            var slot_1 = m_1[i_2];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_5 = slot_1;
            if (!this_5.lb(this_5.hb().ib(7)).lb(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
              var bitCount_1 = 8 - (~(i_2 - lastIndex_1 | 0) >>> 31 | 0) | 0;
              var inductionVariable_5 = 0;
              if (inductionVariable_5 < bitCount_1)
                do {
                  var j_1 = inductionVariable_5;
                  inductionVariable_5 = inductionVariable_5 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot_1.lb(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                    var index_1 = (i_2 << 3) + j_1 | 0;
                    // Inline function 'androidx.collection.MutableScatterMap.removeIf.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf.<anonymous>' call
                    var tmp_3 = this_4.iu_1[index_1];
                    (tmp_3 == null ? true : !(tmp_3 == null)) || THROW_CCE();
                    var tmp_4 = this_4.ju_1[index_1];
                    var value_2 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
                    var tmp_5;
                    if (value_2 instanceof MutableScatterSet) {
                      var set = value_2 instanceof MutableScatterSet ? value_2 : THROW_CCE();
                      // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
                      var elements = set.wu_1;
                      $l$block_1: {
                        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                        // Inline function 'kotlin.contracts.contract' call
                        var m_2 = set.vu_1;
                        var lastIndex_2 = m_2.length - 2 | 0;
                        var inductionVariable_6 = 0;
                        if (inductionVariable_6 <= lastIndex_2)
                          do {
                            var i_3 = inductionVariable_6;
                            inductionVariable_6 = inductionVariable_6 + 1 | 0;
                            var slot_2 = m_2[i_3];
                            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                            var this_6 = slot_2;
                            if (!this_6.lb(this_6.hb().ib(7)).lb(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                              var bitCount_2 = 8 - (~(i_3 - lastIndex_2 | 0) >>> 31 | 0) | 0;
                              var inductionVariable_7 = 0;
                              if (inductionVariable_7 < bitCount_2)
                                do {
                                  var j_2 = inductionVariable_7;
                                  inductionVariable_7 = inductionVariable_7 + 1 | 0;
                                  // Inline function 'androidx.collection.isFull' call
                                  if (slot_2.lb(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                                    var index_2 = (i_3 << 3) + j_2 | 0;
                                    // Inline function 'androidx.collection.MutableScatterSet.removeIf.<anonymous>' call
                                    // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
                                    var tmp_6 = elements[index_2];
                                    var scope = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
                                    var tmp_7;
                                    if ($this.a1b_1.m(scope)) {
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
                                        tmp_8 = tmp0_safe_receiver.m(scope);
                                      }
                                      tmp_7 = tmp_8 === true;
                                    }
                                    if (tmp_7) {
                                      set.hv(index_2);
                                    }
                                  }
                                  slot_2 = slot_2.jb(8);
                                }
                                 while (inductionVariable_7 < bitCount_2);
                              if (!(bitCount_2 === 8)) {
                                break $l$block_1;
                              }
                            }
                          }
                           while (!(i_3 === lastIndex_2));
                      }
                      tmp_5 = set.o();
                    } else {
                      // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
                      var scope_0 = !(value_2 == null) ? value_2 : THROW_CCE();
                      var tmp_9;
                      if ($this.a1b_1.m(scope_0)) {
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
                          tmp_10 = tmp0_safe_receiver_0.m(scope_0);
                        }
                        tmp_9 = tmp_10 === true;
                      }
                      tmp_5 = tmp_9;
                    }
                    if (tmp_5) {
                      this_4.uu(index_1);
                    }
                  }
                  slot_1 = slot_1.jb(8);
                }
                 while (inductionVariable_5 < bitCount_1);
              if (!(bitCount_1 === 8)) {
                break $l$block_2;
              }
            }
          }
           while (!(i_2 === lastIndex_1));
      }
      $this.a1b_1.b1();
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
        var this_7 = $this.z1a_1.s1b_1;
        $l$block_4: {
          // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
          var m_3 = this_7.hu_1;
          var lastIndex_3 = m_3.length - 2 | 0;
          var inductionVariable_8 = 0;
          if (inductionVariable_8 <= lastIndex_3)
            do {
              var i_4 = inductionVariable_8;
              inductionVariable_8 = inductionVariable_8 + 1 | 0;
              var slot_3 = m_3[i_4];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_8 = slot_3;
              if (!this_8.lb(this_8.hb().ib(7)).lb(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                var bitCount_3 = 8 - (~(i_4 - lastIndex_3 | 0) >>> 31 | 0) | 0;
                var inductionVariable_9 = 0;
                if (inductionVariable_9 < bitCount_3)
                  do {
                    var j_3 = inductionVariable_9;
                    inductionVariable_9 = inductionVariable_9 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot_3.lb(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                      var index_3 = (i_4 << 3) + j_3 | 0;
                      // Inline function 'androidx.collection.MutableScatterMap.removeIf.<anonymous>' call
                      // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf.<anonymous>' call
                      var tmp_11 = this_7.iu_1[index_3];
                      (tmp_11 == null ? true : !(tmp_11 == null)) || THROW_CCE();
                      var tmp_12 = this_7.ju_1[index_3];
                      var value_3 = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
                      var tmp_13;
                      if (value_3 instanceof MutableScatterSet) {
                        var set_0 = value_3 instanceof MutableScatterSet ? value_3 : THROW_CCE();
                        // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
                        var elements_0 = set_0.wu_1;
                        $l$block_3: {
                          // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                          // Inline function 'kotlin.contracts.contract' call
                          var m_4 = set_0.vu_1;
                          var lastIndex_4 = m_4.length - 2 | 0;
                          var inductionVariable_10 = 0;
                          if (inductionVariable_10 <= lastIndex_4)
                            do {
                              var i_5 = inductionVariable_10;
                              inductionVariable_10 = inductionVariable_10 + 1 | 0;
                              var slot_4 = m_4[i_5];
                              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                              var this_9 = slot_4;
                              if (!this_9.lb(this_9.hb().ib(7)).lb(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                                var bitCount_4 = 8 - (~(i_5 - lastIndex_4 | 0) >>> 31 | 0) | 0;
                                var inductionVariable_11 = 0;
                                if (inductionVariable_11 < bitCount_4)
                                  do {
                                    var j_4 = inductionVariable_11;
                                    inductionVariable_11 = inductionVariable_11 + 1 | 0;
                                    // Inline function 'androidx.collection.isFull' call
                                    if (slot_4.lb(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                                      var index_4 = (i_5 << 3) + j_4 | 0;
                                      // Inline function 'androidx.collection.MutableScatterSet.removeIf.<anonymous>' call
                                      // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                                      var tmp_14 = elements_0[index_4];
                                      var scope_1 = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
                                      if (tmp0_safe_receiver_1.m(scope_1)) {
                                        set_0.hv(index_4);
                                      }
                                    }
                                    slot_4 = slot_4.jb(8);
                                  }
                                   while (inductionVariable_11 < bitCount_4);
                                if (!(bitCount_4 === 8)) {
                                  break $l$block_3;
                                }
                              }
                            }
                             while (!(i_5 === lastIndex_4));
                        }
                        tmp_13 = set_0.o();
                      } else {
                        // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                        var scope_2 = !(value_3 == null) ? value_3 : THROW_CCE();
                        tmp_13 = tmp0_safe_receiver_1.m(scope_2);
                      }
                      if (tmp_13) {
                        this_7.uu(index_3);
                      }
                    }
                    slot_3 = slot_3.jb(8);
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
    var this_0 = $this.b1b_1.s1b_1;
    $l$block_0: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this_0.hu_1;
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
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.MutableScatterMap.removeIf.<anonymous>' call
                  // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf.<anonymous>' call
                  var tmp = this_0.iu_1[index];
                  (tmp == null ? true : !(tmp == null)) || THROW_CCE();
                  var tmp_0 = this_0.ju_1[index];
                  var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  var tmp_1;
                  if (value instanceof MutableScatterSet) {
                    var set = value instanceof MutableScatterSet ? value : THROW_CCE();
                    // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
                    var elements = set.wu_1;
                    $l$block: {
                      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                      // Inline function 'kotlin.contracts.contract' call
                      var m_0 = set.vu_1;
                      var lastIndex_0 = m_0.length - 2 | 0;
                      var inductionVariable_1 = 0;
                      if (inductionVariable_1 <= lastIndex_0)
                        do {
                          var i_0 = inductionVariable_1;
                          inductionVariable_1 = inductionVariable_1 + 1 | 0;
                          var slot_0 = m_0[i_0];
                          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                          var this_2 = slot_0;
                          if (!this_2.lb(this_2.hb().ib(7)).lb(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                            var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
                            var inductionVariable_2 = 0;
                            if (inductionVariable_2 < bitCount_0)
                              do {
                                var j_0 = inductionVariable_2;
                                inductionVariable_2 = inductionVariable_2 + 1 | 0;
                                // Inline function 'androidx.collection.isFull' call
                                if (slot_0.lb(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                                  var index_0 = (i_0 << 3) + j_0 | 0;
                                  // Inline function 'androidx.collection.MutableScatterSet.removeIf.<anonymous>' call
                                  // Inline function 'androidx.compose.runtime.CompositionImpl.cleanUpDerivedStateObservations.<anonymous>' call
                                  var tmp_2 = elements[index_0];
                                  var derivedState = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
                                  if (!$this.z1a_1.w1b(derivedState)) {
                                    set.hv(index_0);
                                  }
                                }
                                slot_0 = slot_0.jb(8);
                              }
                               while (inductionVariable_2 < bitCount_0);
                            if (!(bitCount_0 === 8)) {
                              break $l$block;
                            }
                          }
                        }
                         while (!(i_0 === lastIndex_0));
                    }
                    tmp_1 = set.o();
                  } else {
                    // Inline function 'androidx.compose.runtime.CompositionImpl.cleanUpDerivedStateObservations.<anonymous>' call
                    var derivedState_0 = !(value == null) ? value : THROW_CCE();
                    tmp_1 = !$this.z1a_1.w1b(derivedState_0);
                  }
                  if (tmp_1) {
                    this_0.uu(index);
                  }
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
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.a1b_1.o()) {
      // Inline function 'androidx.compose.runtime.removeValueIf' call
      var iter = $this.a1b_1.k();
      while (iter.x()) {
        // Inline function 'androidx.compose.runtime.CompositionImpl.cleanUpDerivedStateObservations.<anonymous>' call
        if (!iter.z().t1b()) {
          iter.y();
        }
      }
    }
  }
  function invalidateScopeOfLocked($this, value) {
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
    var value_0 = $this.z1a_1.s1b_1.p2(value);
    if (value_0 != null) {
      if (value_0 instanceof MutableScatterSet) {
        // Inline function 'androidx.collection.ScatterSet.forEach' call
        var this_0 = value_0 instanceof MutableScatterSet ? value_0 : THROW_CCE();
        // Inline function 'kotlin.contracts.contract' call
        var k = this_0.wu_1;
        $l$block: {
          // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
          // Inline function 'kotlin.contracts.contract' call
          var m = this_0.vu_1;
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
                      var index = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateScopeOfLocked.<anonymous>' call
                      var tmp = k[index];
                      var scope = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                      if (scope.u1b(value).equals(InvalidationResult_IMMINENT_getInstance())) {
                        $this.e1b_1.x1b(value, scope);
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
      } else {
        // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateScopeOfLocked.<anonymous>' call
        var scope_0 = !(value_0 == null) ? value_0 : THROW_CCE();
        if (scope_0.u1b(value).equals(InvalidationResult_IMMINENT_getInstance())) {
          $this.e1b_1.x1b(value, scope_0);
        }
      }
    }
  }
  function applyChangesInLocked($this, changes) {
    var manager = new RememberEventDispatcher($this.x1a_1);
    try {
      if (changes.o())
        return Unit_instance;
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName = 'Compose:applyChanges';
        var token = Trace_instance.v15(sectionName);
        try {
          $this.u1a_1.jv();
          // Inline function 'androidx.compose.runtime.SlotTable.write' call
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
          var writer = $this.y1a_1.d12();
          var tmp;
          try {
            changes.y1b($this.u1a_1, writer, manager);
            tmp = Unit_instance;
          }finally {
            writer.r10();
          }
          $this.u1a_1.kv();
          break $l$block;
        }finally {
          Trace_instance.k16(token);
        }
      }
      manager.e1c();
      manager.f1c();
      if ($this.g1b_1) {
        $l$block_2: {
          // Inline function 'androidx.compose.runtime.trace' call
          var sectionName_0 = 'Compose:unobserve';
          var token_0 = Trace_instance.v15(sectionName_0);
          try {
            $this.g1b_1 = false;
            // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf' call
            // Inline function 'androidx.collection.MutableScatterMap.removeIf' call
            var this_0 = $this.z1a_1.s1b_1;
            $l$block_1: {
              // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
              var m = this_0.hu_1;
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
                          var index = (i << 3) + j | 0;
                          // Inline function 'androidx.collection.MutableScatterMap.removeIf.<anonymous>' call
                          // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf.<anonymous>' call
                          var tmp_0 = this_0.iu_1[index];
                          (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
                          var tmp_1 = this_0.ju_1[index];
                          var value = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                          var tmp_2;
                          if (value instanceof MutableScatterSet) {
                            var set = value instanceof MutableScatterSet ? value : THROW_CCE();
                            // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
                            var elements = set.wu_1;
                            $l$block_0: {
                              // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                              // Inline function 'kotlin.contracts.contract' call
                              var m_0 = set.vu_1;
                              var lastIndex_0 = m_0.length - 2 | 0;
                              var inductionVariable_1 = 0;
                              if (inductionVariable_1 <= lastIndex_0)
                                do {
                                  var i_0 = inductionVariable_1;
                                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                                  var slot_0 = m_0[i_0];
                                  // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                                  var this_2 = slot_0;
                                  if (!this_2.lb(this_2.hb().ib(7)).lb(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                                    var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
                                    var inductionVariable_2 = 0;
                                    if (inductionVariable_2 < bitCount_0)
                                      do {
                                        var j_0 = inductionVariable_2;
                                        inductionVariable_2 = inductionVariable_2 + 1 | 0;
                                        // Inline function 'androidx.collection.isFull' call
                                        if (slot_0.lb(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                                          var index_0 = (i_0 << 3) + j_0 | 0;
                                          // Inline function 'androidx.collection.MutableScatterSet.removeIf.<anonymous>' call
                                          // Inline function 'androidx.compose.runtime.CompositionImpl.applyChangesInLocked.<anonymous>.<anonymous>' call
                                          var tmp_3 = elements[index_0];
                                          if (!((tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE()).g1c()) {
                                            set.hv(index_0);
                                          }
                                        }
                                        slot_0 = slot_0.jb(8);
                                      }
                                       while (inductionVariable_2 < bitCount_0);
                                    if (!(bitCount_0 === 8)) {
                                      break $l$block_0;
                                    }
                                  }
                                }
                                 while (!(i_0 === lastIndex_0));
                            }
                            tmp_2 = set.o();
                          } else {
                            // Inline function 'androidx.compose.runtime.CompositionImpl.applyChangesInLocked.<anonymous>.<anonymous>' call
                            tmp_2 = !(!(value == null) ? value : THROW_CCE()).g1c();
                          }
                          if (tmp_2) {
                            this_0.uu(index);
                          }
                        }
                        slot = slot.jb(8);
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
            Trace_instance.k16(token_0);
          }
        }
      }
    }finally {
      if ($this.d1b_1.o()) {
        manager.h1c();
      }
    }
  }
  function abandonChanges($this) {
    $this.v1a_1.i1c(null);
    $this.c1b_1.b1();
    $this.d1b_1.b1();
    $this.x1a_1.b1();
  }
  function tryImminentInvalidation($this, scope, instance) {
    return $this.j1c() ? $this.k1b_1.r15(scope, instance) : false;
  }
  function invalidateChecked($this, scope, anchor, instance) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.w1a_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateChecked.<anonymous>' call
    var tmp0_safe_receiver = $this.h1b_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateChecked.<anonymous>.<anonymous>' call
      var tmp_0;
      if ($this.y1a_1.k1c($this.i1b_1, anchor)) {
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
        $this.f1b_1.l1c(scope, null);
      } else {
        addValue($this.f1b_1, scope, instance);
      }
    }
    var delegate_0 = delegate;
    if (!(delegate_0 == null)) {
      return invalidateChecked(delegate_0, scope, anchor, instance);
    }
    $this.t1a_1.m1c($this);
    return $this.j1c() ? InvalidationResult_DEFERRED_getInstance() : InvalidationResult_SCHEDULED_getInstance();
  }
  function takeInvalidations($this) {
    var invalidations = $this.f1b_1;
    $this.f1b_1 = new IdentityArrayMap();
    return invalidations;
  }
  function observer($this) {
    var holder = $this.j1b_1;
    var tmp;
    if (holder.p1c_1) {
      tmp = holder.o1c_1;
    } else {
      var parentHolder = $this.t1a_1.n1c();
      var parentObserver = parentHolder == null ? null : parentHolder.o1c_1;
      if (!equals(parentObserver, holder.o1c_1)) {
        holder.o1c_1 = parentObserver;
      }
      tmp = parentObserver;
    }
    return tmp;
  }
  function RememberEventDispatcher(abandoning) {
    this.z1b_1 = abandoning;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.a1c_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.b1c_1 = ArrayList_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.c1c_1 = ArrayList_init_$Create$();
    this.d1c_1 = null;
  }
  protoOf(RememberEventDispatcher).q1c = function (instance) {
    this.a1c_1.u(instance);
  };
  protoOf(RememberEventDispatcher).g1a = function (instance) {
    this.b1c_1.u(instance);
  };
  protoOf(RememberEventDispatcher).f1a = function (instance) {
    var tmp0_elvis_lhs = this.d1c_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = mutableScatterSetOf();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RememberEventDispatcher.releasing.<anonymous>' call
      this.d1c_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var releasing = tmp;
    releasing.gv(instance);
    // Inline function 'kotlin.collections.plusAssign' call
    this.b1c_1.u(instance);
  };
  protoOf(RememberEventDispatcher).e1c = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.b1c_1.o()) {
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName = 'Compose:onForgotten';
        var token = Trace_instance.v15(sectionName);
        try {
          var releasing = this.d1c_1;
          var inductionVariable = this.b1c_1.i() - 1 | 0;
          var tmp;
          if (0 <= inductionVariable) {
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              var instance = this.b1c_1.j(i);
              // Inline function 'kotlin.collections.remove' call
              var this_0 = this.z1b_1;
              (isInterface(this_0, MutableCollection) ? this_0 : THROW_CCE()).v(instance);
              if (isInterface(instance, RememberObserver)) {
                instance.r1c();
              }
              if (isInterface(instance, ComposeNodeLifecycleCallback)) {
                if (!(releasing == null) ? releasing.m(instance) : false) {
                  instance.mw();
                } else {
                  instance.lw();
                }
              }
            }
             while (0 <= inductionVariable);
            tmp = Unit_instance;
          }
          break $l$block;
        }finally {
          Trace_instance.k16(token);
        }
      }
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.a1c_1.o()) {
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName_0 = 'Compose:onRemembered';
        var token_0 = Trace_instance.v15(sectionName_0);
        try {
          var this_1 = this.a1c_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable_0 = 0;
          var last = this_1.i() - 1 | 0;
          var tmp_0;
          if (inductionVariable_0 <= last) {
            do {
              var index = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              var item = this_1.j(index);
              // Inline function 'androidx.compose.runtime.RememberEventDispatcher.dispatchRememberObservers.<anonymous>.<anonymous>' call
              this.z1b_1.v(item);
              item.s1c();
            }
             while (inductionVariable_0 <= last);
            tmp_0 = Unit_instance;
          }
          break $l$block_0;
        }finally {
          Trace_instance.k16(token_0);
        }
      }
    }
  };
  protoOf(RememberEventDispatcher).f1c = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.c1c_1.o()) {
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName = 'Compose:sideeffects';
        var token = Trace_instance.v15(sectionName);
        try {
          // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
          var this_0 = this.c1c_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable = 0;
          var last = this_0.i() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item = this_0.j(index);
              // Inline function 'androidx.compose.runtime.RememberEventDispatcher.dispatchSideEffects.<anonymous>.<anonymous>' call
              item();
            }
             while (inductionVariable <= last);
          this.c1c_1.b1();
          break $l$block;
        }finally {
          Trace_instance.k16(token);
        }
      }
    }
  };
  protoOf(RememberEventDispatcher).h1c = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.z1b_1.o()) {
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName = 'Compose:abandons';
        var token = Trace_instance.v15(sectionName);
        try {
          var iterator = this.z1b_1.k();
          while (iterator.x()) {
            var instance = iterator.z();
            iterator.y();
            instance.t1c();
          }
          break $l$block;
        }finally {
          Trace_instance.k16(token);
        }
      }
    }
  };
  function CompositionImpl(parent, applier, recomposeContext) {
    recomposeContext = recomposeContext === VOID ? null : recomposeContext;
    this.t1a_1 = parent;
    this.u1a_1 = applier;
    this.v1a_1 = new AtomicReference(null);
    this.w1a_1 = createSynchronizedObject();
    this.x1a_1 = HashSet_init_$Create$();
    this.y1a_1 = new SlotTable();
    this.z1a_1 = new ScopeMap();
    this.a1b_1 = HashSet_init_$Create$();
    this.b1b_1 = new ScopeMap();
    this.c1b_1 = new ChangeList();
    this.d1b_1 = new ChangeList();
    this.e1b_1 = new ScopeMap();
    this.f1b_1 = new IdentityArrayMap();
    this.g1b_1 = false;
    this.h1b_1 = null;
    this.i1b_1 = 0;
    this.j1b_1 = new CompositionObserverHolder();
    var tmp = this;
    // Inline function 'kotlin.also' call
    var this_0 = new ComposerImpl(this.u1a_1, this.t1a_1, this.y1a_1, this.x1a_1, this.c1b_1, this.d1b_1, this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.CompositionImpl.composer.<anonymous>' call
    this.t1a_1.u1c(this_0);
    tmp.k1b_1 = this_0;
    this.l1b_1 = recomposeContext;
    var tmp_0 = this;
    var tmp_1 = this.t1a_1;
    tmp_0.m1b_1 = tmp_1 instanceof Recomposer;
    this.n1b_1 = false;
    this.o1b_1 = ComposableSingletons$CompositionKt_getInstance().v1c_1;
  }
  protoOf(CompositionImpl).j1c = function () {
    return this.k1b_1.fy_1;
  };
  protoOf(CompositionImpl).x1c = function () {
    return this.n1b_1;
  };
  protoOf(CompositionImpl).y1c = function (content) {
    composeInitial(this, content);
  };
  protoOf(CompositionImpl).z1c = function (content) {
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
        this.w1a_1;
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
            var tmp_2 = invalidations.a1d();
            observer_0.b1d(this, isInterface(tmp_2, Map) ? tmp_2 : THROW_CCE());
          }
          this.k1b_1.x19(invalidations, content);
          var tmp_3;
          if (observer_0 == null) {
            tmp_3 = null;
          } else {
            observer_0.c1d(this);
            tmp_3 = Unit_instance;
          }
          tmp_1 = tmp_3;
        } catch ($p) {
          var tmp_4;
          if ($p instanceof Exception) {
            var e = $p;
            this.f1b_1 = invalidations;
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
          tmp_5 = !this.x1a_1.o();
        } else {
          tmp_5 = false;
        }
        if (tmp_5) {
          (new RememberEventDispatcher(this.x1a_1)).h1c();
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
  protoOf(CompositionImpl).d1d = function (values) {
    $l$loop: while (true) {
      var old = this.v1a_1.yl();
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
            var message = 'corrupt pendingModifications: ' + this.v1a_1;
            throw IllegalStateException_init_$Create$(toString(message));
          }
        }
      }
      var new_0 = tmp;
      if (this.v1a_1.e1d(old, new_0)) {
        if (old == null) {
          // Inline function 'androidx.compose.runtime.synchronized' call
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          this.w1a_1;
          drainPendingModificationsLocked(this);
        }
        break $l$loop;
      }
    }
  };
  protoOf(CompositionImpl).f1d = function (values) {
    if (values instanceof IdentityArraySet) {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values_0 = values.t15_1;
      var inductionVariable = 0;
      var last = values.s15_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.CompositionImpl.observesAnyOf.<anonymous>' call
          var tmp = values_0[i];
          var value = !(tmp == null) ? tmp : THROW_CCE();
          if (this.z1a_1.w1b(value) ? true : this.b1b_1.w1b(value))
            return true;
        }
         while (inductionVariable < last);
      return false;
    }
    var tmp0_iterator = values.k();
    while (tmp0_iterator.x()) {
      var value_0 = tmp0_iterator.z();
      if (this.z1a_1.w1b(value_0) ? true : this.b1b_1.w1b(value_0))
        return true;
    }
    return false;
  };
  protoOf(CompositionImpl).z19 = function (block) {
    return this.k1b_1.z19(block);
  };
  protoOf(CompositionImpl).g1d = function (value) {
    if (!_get_areChildrenComposing__c1uwup(this)) {
      var tmp0_safe_receiver = this.k1b_1.w17();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_safe_receiver.d1a(true);
        var alreadyRead = tmp0_safe_receiver.h1d(value);
        var tmp;
        if (!alreadyRead) {
          if (value instanceof StateObjectImpl) {
            // Inline function 'androidx.compose.runtime.snapshots.Companion.Composition' call
            var tmp$ret$0 = _ReaderKind___init__impl__jqeebu(1);
            value.j1d(tmp$ret$0);
          }
          this.z1a_1.x1b(value, tmp0_safe_receiver);
          var tmp_0;
          if (isInterface(value, DerivedState)) {
            this.b1b_1.k1d(value);
            var this_0 = value.l1d().m1d();
            var k = this_0.ut_1;
            var tmp$ret$4;
            $l$block: {
              // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
              var m = this_0.tt_1;
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
                          var index = (i << 3) + j | 0;
                          // Inline function 'androidx.collection.ObjectIntMap.forEachKey.<anonymous>' call
                          // Inline function 'androidx.compose.runtime.CompositionImpl.recordReadOf.<anonymous>.<anonymous>' call
                          var tmp_1 = k[index];
                          var dependency = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                          if (dependency instanceof StateObjectImpl) {
                            // Inline function 'androidx.compose.runtime.snapshots.Companion.Composition' call
                            var tmp$ret$3 = _ReaderKind___init__impl__jqeebu(1);
                            dependency.j1d(tmp$ret$3);
                          }
                          this.b1b_1.x1b(dependency, value);
                        }
                        slot = slot.jb(8);
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
  protoOf(CompositionImpl).n1d = function (value) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.w1a_1;
    invalidateScopeOfLocked(this, value);
    var value_0 = this.b1b_1.s1b_1.p2(value);
    var tmp;
    if (value_0 == null) {
      tmp = Unit_instance;
    } else {
      if (value_0 instanceof MutableScatterSet) {
        var this_0 = value_0 instanceof MutableScatterSet ? value_0 : THROW_CCE();
        // Inline function 'kotlin.contracts.contract' call
        var k = this_0.wu_1;
        var tmp$ret$2;
        $l$block: {
          // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
          // Inline function 'kotlin.contracts.contract' call
          var m = this_0.vu_1;
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
                      var index = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                      // Inline function 'androidx.compose.runtime.CompositionImpl.recordWriteOf.<anonymous>.<anonymous>' call
                      var tmp_0 = k[index];
                      var it = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                      invalidateScopeOfLocked(this, it);
                    }
                    slot = slot.jb(8);
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
  protoOf(CompositionImpl).o1d = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.w1a_1;
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
            var tmp_2 = invalidations.a1d();
            observer_0.b1d(this, isInterface(tmp_2, Map) ? tmp_2 : THROW_CCE());
          }
          // Inline function 'kotlin.also' call
          var this_0 = this.k1b_1.a1a(invalidations);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          if (!this_0) {
            drainPendingModificationsLocked(this);
          }
          if (observer_0 == null)
            null;
          else {
            observer_0.c1d(this);
          }
          tmp_1 = this_0;
        } catch ($p) {
          var tmp_3;
          if ($p instanceof Exception) {
            var e = $p;
            this.f1b_1 = invalidations;
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
          tmp_4 = !this.x1a_1.o();
        } else {
          tmp_4 = false;
        }
        if (tmp_4) {
          (new RememberEventDispatcher(this.x1a_1)).h1c();
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
  protoOf(CompositionImpl).p1d = function (references) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.runtime.snapshots.fastAll' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = references.i() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = references.j(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastAll.<anonymous>' call
          // Inline function 'androidx.compose.runtime.CompositionImpl.insertMovableContent.<anonymous>' call
          if (!equals(item.de_1.c15_1, this)) {
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
        this.k1b_1.q19(references);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_instance;
      }finally {
        var tmp_1;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_1 = !this.x1a_1.o();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.x1a_1)).h1c();
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
  protoOf(CompositionImpl).q1d = function (state) {
    var manager = new RememberEventDispatcher(this.x1a_1);
    var slotTable = state.k15_1;
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = slotTable.d12();
    var tmp;
    try {
      removeCurrentGroup(writer, manager);
      tmp = Unit_instance;
    }finally {
      writer.r10();
    }
    manager.e1c();
  };
  protoOf(CompositionImpl).r1d = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.w1a_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        applyChangesInLocked(this, this.c1b_1);
        drainPendingModificationsLocked(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_instance;
      }finally {
        var tmp_1;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_1 = !this.x1a_1.o();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.x1a_1)).h1c();
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
  protoOf(CompositionImpl).s1d = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.w1a_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.applyLateChanges.<anonymous>.<anonymous>' call
        if (this.d1b_1.g19()) {
          applyChangesInLocked(this, this.d1b_1);
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_instance;
      }finally {
        var tmp_1;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_1 = !this.x1a_1.o();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.x1a_1)).h1c();
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
  protoOf(CompositionImpl).z17 = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.w1a_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.changesApplied.<anonymous>.<anonymous>' call
        this.k1b_1.z17();
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!this.x1a_1.o()) {
          (new RememberEventDispatcher(this.x1a_1)).h1c();
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_instance;
      }finally {
        var tmp_1;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_1 = !this.x1a_1.o();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.x1a_1)).h1c();
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
  protoOf(CompositionImpl).t1d = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.w1a_1;
    var indexedObject = this.y1a_1.xy_1;
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
        tmp0_safe_receiver.u1d();
      }
    }
  };
  protoOf(CompositionImpl).u15 = function (to, groupIndex, block) {
    var tmp;
    if ((!(to == null) ? !equals(to, this) : false) ? groupIndex >= 0 : false) {
      var tmp_0 = this;
      tmp_0.h1b_1 = to instanceof CompositionImpl ? to : THROW_CCE();
      this.i1b_1 = groupIndex;
      var tmp_1;
      try {
        tmp_1 = block();
      }finally {
        this.h1b_1 = null;
        this.i1b_1 = 0;
      }
      tmp = tmp_1;
    } else {
      tmp = block();
    }
    return tmp;
  };
  protoOf(CompositionImpl).v1d = function (scope, instance) {
    if (scope.w1d()) {
      scope.o19(true);
    }
    var anchor = scope.tw_1;
    if (anchor == null ? true : !anchor.g1c())
      return InvalidationResult_IGNORED_getInstance();
    if (!this.y1a_1.x1d(anchor)) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this.w1a_1;
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidate.<anonymous>' call
      var delegate = this.h1b_1;
      if ((delegate == null ? null : tryImminentInvalidation(delegate, scope, instance)) === true)
        return InvalidationResult_IMMINENT_getInstance();
      return InvalidationResult_IGNORED_getInstance();
    }
    if (!scope.y1d())
      return InvalidationResult_IGNORED_getInstance();
    return invalidateChecked(this, scope, anchor, instance);
  };
  protoOf(CompositionImpl).z1d = function (scope) {
    this.g1b_1 = true;
  };
  protoOf(CompositionImpl).a1e = function (instance, scope) {
    this.z1a_1.v1b(instance, scope);
  };
  protoOf(CompositionImpl).b1e = function (state) {
    if (!this.z1a_1.w1b(state)) {
      this.b1b_1.k1d(state);
    }
  };
  function CompositionObserverHolder(observer, root) {
    observer = observer === VOID ? null : observer;
    root = root === VOID ? false : root;
    this.o1c_1 = observer;
    this.p1c_1 = root;
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.l17(p0, p1);
    };
  }
  function ComposableSingletons$CompositionKt$lambda_1$lambda_xm0u9s($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Composition.kt#9igjgp');
    if (!(($changed & 11) === 2) ? true : !$composer_0.n17()) {
      if (isTraceInProgress()) {
        traceEventStart(954879418, $changed, -1, 'androidx.compose.runtime.ComposableSingletons$CompositionKt.lambda-1.<anonymous> (Composition.kt:607)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e12();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.l17(p0, p1);
    };
  }
  function ComposableSingletons$CompositionKt$lambda_2$lambda_8lgqn5($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Composition.kt#9igjgp');
    if (!(($changed & 11) === 2) ? true : !$composer_0.n17()) {
      if (isTraceInProgress()) {
        traceEventStart(1918065384, $changed, -1, 'androidx.compose.runtime.ComposableSingletons$CompositionKt.lambda-2.<anonymous> (Composition.kt:739)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e12();
    }
    return Unit_instance;
  }
  function ComposableSingletons$CompositionKt() {
    ComposableSingletons$CompositionKt_instance = this;
    var tmp = this;
    tmp.v1c_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(954879418, false, ComposableSingletons$CompositionKt$lambda_1$lambda_xm0u9s));
    var tmp_0 = this;
    tmp_0.w1c_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(1918065384, false, ComposableSingletons$CompositionKt$lambda_2$lambda_8lgqn5));
  }
  var ComposableSingletons$CompositionKt_instance;
  function ComposableSingletons$CompositionKt_getInstance() {
    if (ComposableSingletons$CompositionKt_instance == null)
      new ComposableSingletons$CompositionKt();
    return ComposableSingletons$CompositionKt_instance;
  }
  function addValue(_this__u8e3s4, key, value) {
    _init_properties_Composition_kt__t5pjw8();
    if (_this__u8e3s4.d1e(key)) {
      var tmp0_safe_receiver = _this__u8e3s4.c1e(key);
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.q1a(value);
    } else {
      // Inline function 'kotlin.also' call
      var this_0 = new IdentityArraySet();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.addValue.<anonymous>' call
      this_0.q1a(value);
      _this__u8e3s4.l1c(key, this_0);
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
  protoOf(CompositionContext).n1c = function () {
    return null;
  };
  protoOf(CompositionContext).oz = function (table) {
  };
  protoOf(CompositionContext).u1c = function (composer) {
  };
  protoOf(CompositionContext).hz = function () {
    return get_EmptyPersistentCompositionLocalMap();
  };
  protoOf(CompositionContext).gz = function () {
  };
  protoOf(CompositionContext).qz = function () {
  };
  protoOf(CompositionContext).j15 = function (reference) {
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
    this.a19_1 = new LazyValueHolder(defaultFactory);
  }
  function ProvidableCompositionLocal(defaultFactory) {
    CompositionLocal.call(this, defaultFactory);
  }
  protoOf(ProvidableCompositionLocal).g1e = function (value) {
    return new ProvidedValue(this, value, true);
  };
  function staticCompositionLocalOf(defaultFactory) {
    return new StaticProvidableCompositionLocal(defaultFactory);
  }
  function StaticProvidableCompositionLocal(defaultFactory) {
    ProvidableCompositionLocal.call(this, defaultFactory);
  }
  protoOf(StaticProvidableCompositionLocal).b19 = function (value, previous) {
    return (!(previous == null) ? equals(previous.j2(), value) : false) ? previous : new StaticValueHolder(value);
  };
  function compositionLocalOf(policy, defaultFactory) {
    policy = policy === VOID ? structuralEqualityPolicy() : policy;
    return new DynamicProvidableCompositionLocal(policy, defaultFactory);
  }
  function CompositionLocalProvider(value, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.k19(-1350970552);
    sourceInformation($composer_0, 'C(CompositionLocalProvider)P(1)247@10835L9:CompositionLocal.kt#9igjgp');
    var $dirty = $changed;
    if (isTraceInProgress()) {
      traceEventStart(-1350970552, $dirty, -1, 'androidx.compose.runtime.CompositionLocalProvider (CompositionLocal.kt:245)');
    }
    $composer_0.v18(value);
    content($composer_0, 14 & $dirty >> 3);
    $composer_0.e19();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp0_safe_receiver = $composer_0.l19();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.i1e(CompositionLocalProvider$lambda(value, content, $changed));
    }
  }
  function DynamicProvidableCompositionLocal(policy, defaultFactory) {
    ProvidableCompositionLocal.call(this, defaultFactory);
    this.k1e_1 = policy;
  }
  protoOf(DynamicProvidableCompositionLocal).b19 = function (value, previous) {
    var tmp;
    var tmp_0;
    if (!(previous == null)) {
      tmp_0 = !(previous == null) ? isInterface(previous, MutableState) : false;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      previous.lq(value);
      tmp = previous;
    } else {
      tmp = mutableStateOf(value, this.k1e_1);
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
      tmp = key.a19_1.j2();
    }
    return tmp;
  }
  function contains_0(_this__u8e3s4, key) {
    return _this__u8e3s4.m2(key instanceof CompositionLocal ? key : THROW_CCE());
  }
  function getValueOf(_this__u8e3s4, key) {
    var tmp0_safe_receiver = _this__u8e3s4.p2(key instanceof CompositionLocal ? key : THROW_CCE());
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j2();
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
    var tmp0_elvis_lhs = get_derivedStateObservers().yl();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.collection.MutableVector' call
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp$ret$0 = fillArrayVal(Array(0), null);
      var this_0 = new MutableVector(tmp$ret$0, 0);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.derivedStateObservers.<anonymous>' call
      get_derivedStateObservers().p1e(this_0);
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
    $composer_0.s17(1179185413);
    sourceInformation($composer_0, 'C(LaunchedEffect)P(1)338@14267L58:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(1179185413, $changed, -1, 'androidx.compose.runtime.LaunchedEffect (Effects.kt:336)');
    }
    var applyContext = $composer_0.q17();
    $composer_0.s17(1036442561);
    sourceInformation($composer_0, 'CC(remember):Effects.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.lz(key1);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.w18();
    var tmp;
    if (invalid ? true : it === Companion_getInstance_0().k12_1) {
      // Inline function 'androidx.compose.runtime.LaunchedEffect.<anonymous>' call
      var value = new LaunchedEffectImpl(applyContext, block);
      $composer_0.c19(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    $composer_0.t17();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.t17();
  }
  function LaunchedEffectImpl(parentCoroutineContext, task) {
    this.q1e_1 = task;
    this.r1e_1 = CoroutineScope(parentCoroutineContext);
    this.s1e_1 = null;
  }
  protoOf(LaunchedEffectImpl).s1c = function () {
    var tmp0_safe_receiver = this.s1e_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      cancel(tmp0_safe_receiver, 'Old job was still running!');
    }
    this.s1e_1 = launch(this.r1e_1, VOID, VOID, this.q1e_1);
  };
  protoOf(LaunchedEffectImpl).r1c = function () {
    var tmp0_safe_receiver = this.s1e_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.ai(new LeftCompositionCancellationException());
    }
    this.s1e_1 = null;
  };
  protoOf(LaunchedEffectImpl).t1c = function () {
    var tmp0_safe_receiver = this.s1e_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.ai(new LeftCompositionCancellationException());
    }
    this.s1e_1 = null;
  };
  function LeftCompositionCancellationException() {
    PlatformOptimizedCancellationException.call(this, 'The coroutine scope left the composition');
    captureStack(this, LeftCompositionCancellationException);
  }
  function DisposableEffect(key1, effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.s17(-1371986847);
    sourceInformation($composer_0, 'C(DisposableEffect)P(1)155@6197L47:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-1371986847, $changed, -1, 'androidx.compose.runtime.DisposableEffect (Effects.kt:154)');
    }
    $composer_0.s17(592131181);
    sourceInformation($composer_0, 'CC(remember):Effects.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.lz(key1);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.w18();
    var tmp;
    if (invalid ? true : it === Companion_getInstance_0().k12_1) {
      // Inline function 'androidx.compose.runtime.DisposableEffect.<anonymous>' call
      var value = new DisposableEffectImpl(effect);
      $composer_0.c19(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    $composer_0.t17();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.t17();
  }
  function DisposableEffect_0(keys, effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.s17(-1307627122);
    sourceInformation($composer_0, 'C(DisposableEffect)P(1)276@11903L48:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-1307627122, $changed, -1, 'androidx.compose.runtime.DisposableEffect (Effects.kt:275)');
    }
    // Inline function 'androidx.compose.runtime.remember' call
    var keys_0 = keys.slice();
    var $composer_1 = $composer_0;
    $composer_1.s17(-568225417);
    sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
    var invalid = false;
    var inductionVariable = 0;
    var last = keys_0.length;
    while (inductionVariable < last) {
      var key = keys_0[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      invalid = !!(invalid | $composer_1.lz(key));
    }
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_0 = invalid;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.w18();
    var tmp;
    if (invalid_0 ? true : it === Companion_getInstance_0().k12_1) {
      // Inline function 'androidx.compose.runtime.DisposableEffect.<anonymous>' call
      var value = new DisposableEffectImpl(effect);
      $composer_1.c19(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    $composer_1.t17();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.t17();
  }
  function DisposableEffectImpl(effect) {
    this.t1e_1 = effect;
    this.u1e_1 = null;
  }
  protoOf(DisposableEffectImpl).s1c = function () {
    this.u1e_1 = this.t1e_1(get_InternalDisposableEffectScope());
  };
  protoOf(DisposableEffectImpl).r1c = function () {
    var tmp0_safe_receiver = this.u1e_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.ok();
    }
    this.u1e_1 = null;
  };
  protoOf(DisposableEffectImpl).t1c = function () {
  };
  function DisposableEffect_1(key1, key2, effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.s17(1429097729);
    sourceInformation($composer_0, 'C(DisposableEffect)P(1,2)195@8083L53:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(1429097729, $changed, -1, 'androidx.compose.runtime.DisposableEffect (Effects.kt:194)');
    }
    $composer_0.s17(592133067);
    sourceInformation($composer_0, 'CC(remember):Effects.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!($composer_0.lz(key1) | $composer_0.lz(key2));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.w18();
    var tmp;
    if (invalid ? true : it === Companion_getInstance_0().k12_1) {
      // Inline function 'androidx.compose.runtime.DisposableEffect.<anonymous>' call
      var value = new DisposableEffectImpl(effect);
      $composer_0.c19(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    $composer_0.t17();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.t17();
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
    this.v1e_1 = left;
    this.w1e_1 = right;
  }
  protoOf(JoinedKey).hashCode = function () {
    return imul(hashCodeOf(this, this.v1e_1), 31) + hashCodeOf(this, this.w1e_1) | 0;
  };
  protoOf(JoinedKey).toString = function () {
    return 'JoinedKey(left=' + toString_0(this.v1e_1) + ', right=' + toString_0(this.w1e_1) + ')';
  };
  protoOf(JoinedKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof JoinedKey))
      return false;
    var tmp0_other_with_cast = other instanceof JoinedKey ? other : THROW_CCE();
    if (!equals(this.v1e_1, tmp0_other_with_cast.v1e_1))
      return false;
    if (!equals(this.w1e_1, tmp0_other_with_cast.w1e_1))
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
    var tmp0_elvis_lhs = _this__u8e3s4.dc(Key_instance_0);
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
    this.x1e_1 = key;
  }
  protoOf(OpaqueKey).toString = function () {
    return 'OpaqueKey(key=' + this.x1e_1 + ')';
  };
  protoOf(OpaqueKey).hashCode = function () {
    return getStringHashCode(this.x1e_1);
  };
  protoOf(OpaqueKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OpaqueKey))
      return false;
    var tmp0_other_with_cast = other instanceof OpaqueKey ? other : THROW_CCE();
    if (!(this.x1e_1 === tmp0_other_with_cast.x1e_1))
      return false;
    return true;
  };
  var callbackLock;
  function _set_rereading__pnqtpo($this, value) {
    if (value) {
      $this.rw_1 = $this.rw_1 | 32;
    } else {
      $this.rw_1 = $this.rw_1 & -33;
    }
  }
  function _get_rereading__g2iruw($this) {
    return !(($this.rw_1 & 32) === 0);
  }
  function _set_skipped__p8q2c5($this, value) {
    if (value) {
      $this.rw_1 = $this.rw_1 | 16;
    } else {
      $this.rw_1 = $this.rw_1 & -17;
    }
  }
  function Companion_1() {
  }
  protoOf(Companion_1).y1e = function (slots, anchors, newOwner) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!anchors.o()) {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = anchors.i() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = anchors.j(index);
          // Inline function 'androidx.compose.runtime.Companion.adoptAnchoredScopes.<anonymous>' call
          var tmp = slots.z1e(item, 0);
          var recomposeScope = tmp instanceof RecomposeScopeImpl ? tmp : null;
          if (recomposeScope == null)
            null;
          else {
            recomposeScope.a1f(newOwner);
          }
        }
         while (inductionVariable <= last);
    }
  };
  protoOf(Companion_1).b1f = function (slots, anchors) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!anchors.o()) {
      var tmp$ret$2;
      $l$block: {
        // Inline function 'androidx.compose.runtime.snapshots.fastAny' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = anchors.i() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = anchors.j(index);
            // Inline function 'androidx.compose.runtime.snapshots.fastAny.<anonymous>' call
            // Inline function 'androidx.compose.runtime.Companion.hasAnchoredRecomposeScopes.<anonymous>' call
            var tmp_0;
            if (slots.x1d(item)) {
              var tmp_1 = slots.c1f(slots.h15(item), 0);
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
      if (this$0.ww_1 === $token ? $instances.equals(this$0.xw_1) : false) {
        tmp_0 = composition instanceof CompositionImpl;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        // Inline function 'androidx.collection.MutableObjectIntMap.removeIf' call
        var this_0 = $instances;
        $l$block: {
          // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
          var m = this_0.tt_1;
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
                      var index = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.MutableObjectIntMap.removeIf.<anonymous>' call
                      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>.<anonymous>' call
                      var tmp_1 = this_0.ut_1[index];
                      var instance = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                      // Inline function 'kotlin.also' call
                      var this_2 = !(this_0.vt_1[index] === $token);
                      // Inline function 'kotlin.contracts.contract' call
                      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                      if (this_2) {
                        composition.a1e(instance, this$0);
                        var tmp0_safe_receiver = isInterface(instance, DerivedState) ? instance : null;
                        if (tmp0_safe_receiver == null)
                          null;
                        else {
                          // Inline function 'kotlin.let' call
                          // Inline function 'kotlin.contracts.contract' call
                          // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                          composition.b1e(tmp0_safe_receiver);
                          var tmp0_safe_receiver_0 = this$0.yw_1;
                          var tmp_2;
                          if (tmp0_safe_receiver_0 == null) {
                            tmp_2 = null;
                          } else {
                            // Inline function 'kotlin.let' call
                            // Inline function 'kotlin.contracts.contract' call
                            tmp0_safe_receiver_0.h2(tmp0_safe_receiver);
                            var tmp_3;
                            if (tmp0_safe_receiver_0.i() === 0) {
                              this$0.yw_1 = null;
                              tmp_3 = Unit_instance;
                            }
                            tmp_2 = Unit_instance;
                          }
                        }
                      }
                      if (this_2) {
                        this_0.fu(index);
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
        var tmp_4;
        if ($instances.i() === 0) {
          this$0.xw_1 = null;
          tmp_4 = Unit_instance;
        }
        tmp = tmp_4;
      }
      return Unit_instance;
    };
  }
  function RecomposeScopeImpl(owner) {
    this.rw_1 = 0;
    this.sw_1 = owner;
    this.tw_1 = null;
    this.uw_1 = null;
    this.vw_1 = null;
    this.ww_1 = 0;
    this.xw_1 = null;
    this.yw_1 = null;
  }
  protoOf(RecomposeScopeImpl).g1c = function () {
    var tmp;
    if (!(this.sw_1 == null)) {
      var tmp0_safe_receiver = this.tw_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.g1c();
      tmp = tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(RecomposeScopeImpl).y1d = function () {
    return !(this.uw_1 == null);
  };
  protoOf(RecomposeScopeImpl).d1a = function (value) {
    if (value) {
      this.rw_1 = this.rw_1 | 1;
    } else {
      this.rw_1 = this.rw_1 & -2;
    }
  };
  protoOf(RecomposeScopeImpl).p13 = function () {
    return !((this.rw_1 & 1) === 0);
  };
  protoOf(RecomposeScopeImpl).x17 = function (value) {
    if (value) {
      this.rw_1 = this.rw_1 | 2;
    } else {
      this.rw_1 = this.rw_1 & -3;
    }
  };
  protoOf(RecomposeScopeImpl).w1d = function () {
    return !((this.rw_1 & 2) === 0);
  };
  protoOf(RecomposeScopeImpl).o19 = function (value) {
    if (value) {
      this.rw_1 = this.rw_1 | 4;
    } else {
      this.rw_1 = this.rw_1 & -5;
    }
  };
  protoOf(RecomposeScopeImpl).y17 = function () {
    return !((this.rw_1 & 4) === 0);
  };
  protoOf(RecomposeScopeImpl).t14 = function (value) {
    if (value) {
      this.rw_1 = this.rw_1 | 8;
    } else {
      this.rw_1 = this.rw_1 & -9;
    }
  };
  protoOf(RecomposeScopeImpl).b18 = function () {
    return !((this.rw_1 & 8) === 0);
  };
  protoOf(RecomposeScopeImpl).j14 = function (composer) {
    var block = this.uw_1;
    var observer = this.vw_1;
    if (!(observer == null) ? !(block == null) : false) {
      observer.d1f(this);
      try {
        block(composer, 1);
      }finally {
        observer.e1f(this);
      }
      return Unit_instance;
    }
    if ((block == null ? null : block(composer, 1)) == null) {
      // Inline function 'kotlin.error' call
      var message = 'Invalid restart scope';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(RecomposeScopeImpl).u1b = function (value) {
    var tmp0_safe_receiver = this.sw_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v1d(this, value);
    return tmp1_elvis_lhs == null ? InvalidationResult_IGNORED_getInstance() : tmp1_elvis_lhs;
  };
  protoOf(RecomposeScopeImpl).il = function () {
    var tmp0_safe_receiver = this.sw_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1d(this);
    }
    this.sw_1 = null;
    this.xw_1 = null;
    this.yw_1 = null;
    var tmp1_safe_receiver = this.vw_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.f1f(this);
    }
  };
  protoOf(RecomposeScopeImpl).a1f = function (owner) {
    this.sw_1 = owner;
  };
  protoOf(RecomposeScopeImpl).u1d = function () {
    var tmp0_safe_receiver = this.sw_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.v1d(this, null);
  };
  protoOf(RecomposeScopeImpl).i1e = function (block) {
    this.uw_1 = block;
  };
  protoOf(RecomposeScopeImpl).s14 = function (value) {
    if (value) {
      this.rw_1 = this.rw_1 | 64;
    } else {
      this.rw_1 = this.rw_1 & -65;
    }
  };
  protoOf(RecomposeScopeImpl).r14 = function () {
    return !((this.rw_1 & 64) === 0);
  };
  protoOf(RecomposeScopeImpl).p19 = function () {
    return !((this.rw_1 & 16) === 0);
  };
  protoOf(RecomposeScopeImpl).u14 = function (token) {
    this.ww_1 = token;
    _set_skipped__p8q2c5(this, false);
  };
  protoOf(RecomposeScopeImpl).j19 = function () {
    _set_skipped__p8q2c5(this, true);
  };
  protoOf(RecomposeScopeImpl).h1d = function (instance) {
    if (_get_rereading__g2iruw(this))
      return false;
    var tmp0_elvis_lhs = this.xw_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new MutableObjectIntMap();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.recordRead.<anonymous>' call
      this.xw_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var token = tmp.eu(instance, this.ww_1, -1);
    if (token === this.ww_1) {
      return true;
    }
    if (isInterface(instance, DerivedState)) {
      var tmp1_elvis_lhs = this.yw_1;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_1 = new MutableScatterMap();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.recordRead.<anonymous>' call
        this.yw_1 = this_1;
        tmp_0 = this_1;
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      var tracked = tmp_0;
      tracked.su(instance, instance.l1d().g1f());
    }
    return false;
  };
  protoOf(RecomposeScopeImpl).t1b = function () {
    return !(this.yw_1 == null);
  };
  protoOf(RecomposeScopeImpl).zw = function (instances) {
    if (instances == null)
      return true;
    var tmp0_elvis_lhs = this.yw_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return true;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var trackedDependencies = tmp;
    var tmp_0;
    if (instances.g19()) {
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.all' call
        var tmp_1;
        if (isInterface(instances, Collection)) {
          tmp_1 = instances.o();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        var tmp0_iterator = instances.k();
        while (tmp0_iterator.x()) {
          var element = tmp0_iterator.z();
          // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.isInvalidFor.<anonymous>' call
          var tmp_2;
          if (isInterface(element, DerivedState)) {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.isInvalidFor.<anonymous>.<anonymous>' call
            if (!isInterface(element, DerivedState))
              THROW_CCE();
            var tmp0_elvis_lhs_0 = element.m1e();
            var policy = tmp0_elvis_lhs_0 == null ? structuralEqualityPolicy() : tmp0_elvis_lhs_0;
            tmp_2 = policy.h1f(element.l1d().g1f(), trackedDependencies.p2(element));
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
  protoOf(RecomposeScopeImpl).i14 = function () {
    var tmp0_safe_receiver = this.sw_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.rereadTrackedInstances.<anonymous>' call
      var tmp0_safe_receiver_0 = this.xw_1;
      var tmp;
      if (tmp0_safe_receiver_0 == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        _set_rereading__pnqtpo(this, true);
        var tmp_0;
        try {
          var k = tmp0_safe_receiver_0.ut_1;
          var v = tmp0_safe_receiver_0.vt_1;
          var tmp$ret$2;
          $l$block: {
            // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
            var m = tmp0_safe_receiver_0.tt_1;
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
                        // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.rereadTrackedInstances.<anonymous>.<anonymous>.<anonymous>' call
                        var tmp_1 = k[index];
                        var value = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                        v[index];
                        tmp0_safe_receiver.g1d(value);
                      }
                      slot = slot.jb(8);
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
  protoOf(RecomposeScopeImpl).m19 = function (token) {
    var tmp0_safe_receiver = this.xw_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>' call
      var tmp_0;
      var tmp_1;
      if (!this.p19()) {
        var tmp$ret$3;
        $l$block: {
          // Inline function 'androidx.collection.ObjectIntMap.any' call
          // Inline function 'androidx.collection.ObjectIntMap.forEach' call
          var k = tmp0_safe_receiver.ut_1;
          var v = tmp0_safe_receiver.vt_1;
          $l$block_0: {
            // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
            var m = tmp0_safe_receiver.tt_1;
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
                        // Inline function 'androidx.collection.ObjectIntMap.any.<anonymous>' call
                        var tmp_2 = k[index];
                        (tmp_2 == null ? true : !(tmp_2 == null)) || THROW_CCE();
                        // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>' call
                        if (!(v[index] === token)) {
                          tmp$ret$3 = true;
                          break $l$block;
                        }
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
      var old = $this.i1f_1.j2();
      var new_0 = old.u(info);
      if (old === new_0 ? true : $this.i1f_1.mq(old, new_0))
        break $l$loop;
    }
  }
  function removeRunning($this, info) {
    $l$loop: while (true) {
      var old = $this.i1f_1.j2();
      var new_0 = old.v(info);
      if (old === new_0 ? true : $this.i1f_1.mq(old, new_0))
        break $l$loop;
    }
  }
  function invoke$clearRecompositionState(toRecompose, toInsert, toApply, toLateApply, toComplete, modifiedValues, alreadyComposed) {
    toRecompose.b1();
    toInsert.b1();
    toApply.b1();
    toLateApply.b1();
    toComplete.b1();
    modifiedValues.b1();
    alreadyComposed.b1();
  }
  function invoke$fillToInsert(toInsert, this$0) {
    toInsert.b1();
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this$0.m1f_1;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    var this_0 = this$0.u1f_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.i() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.j(index);
        // Inline function 'androidx.compose.runtime.Recomposer$runRecomposeAndApplyChanges$slambda.invoke.fillToInsert.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        toInsert.u(item);
      }
       while (inductionVariable <= last);
    this$0.u1f_1.b1();
  }
  function Recomposer$runRecomposeAndApplyChanges$slambda$lambda(this$0, $toRecompose, $modifiedValues, $alreadyComposed, $toInsert, $toApply, $toLateApply, $toComplete) {
    return function (frameTime) {
      var tmp;
      if (_get_hasBroadcastFrameClockAwaiters__y6inql(this$0)) {
        $l$block: {
          // Inline function 'androidx.compose.runtime.trace' call
          var sectionName = 'Recomposer:animation';
          var token = Trace_instance.v15(sectionName);
          try {
            this$0.l1f_1.iw(frameTime);
            Companion_instance_12.i1g();
            break $l$block;
          }finally {
            Trace_instance.k16(token);
          }
        }
        tmp = Unit_instance;
      }
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName_0 = 'Recomposer:recompose';
        var token_0 = Trace_instance.v15(sectionName_0);
        try {
          recordComposerModifications(this$0);
          // Inline function 'androidx.compose.runtime.synchronized' call
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          this$0.m1f_1;
          // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
          var this_0 = this$0.s1f_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable = 0;
          var last = this_0.i() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item = this_0.j(index);
              // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              // Inline function 'kotlin.collections.plusAssign' call
              $toRecompose.u(item);
            }
             while (inductionVariable <= last);
          this$0.s1f_1.b1();
          $modifiedValues.b1();
          $alreadyComposed.b1();
          $l$loop: while (true) {
            var tmp_0;
            // Inline function 'kotlin.collections.isNotEmpty' call
            if (!$toRecompose.o()) {
              tmp_0 = true;
            } else {
              // Inline function 'kotlin.collections.isNotEmpty' call
              tmp_0 = !$toInsert.o();
            }
            if (!tmp_0) {
              break $l$loop;
            }
            try {
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              var this_1 = $toRecompose;
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_0 = 0;
              var last_0 = this_1.i() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = this_1.j(index_0);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  $alreadyComposed.q1a(item_0);
                  var tmp0_safe_receiver = performRecompose(this$0, item_0, $modifiedValues);
                  if (tmp0_safe_receiver == null)
                    null;
                  else {
                    // Inline function 'kotlin.let' call
                    // Inline function 'kotlin.contracts.contract' call
                    $toApply.u(tmp0_safe_receiver);
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
              $toRecompose.b1();
            }
            if ($modifiedValues.g19()) {
              // Inline function 'androidx.compose.runtime.synchronized' call
              // Inline function 'kotlinx.atomicfu.locks.synchronized' call
              this$0.m1f_1;
              var this_2 = _get_knownCompositions__y8veaj(this$0);
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_1 = 0;
              var last_1 = this_2.i() - 1 | 0;
              var tmp_1;
              if (inductionVariable_1 <= last_1) {
                do {
                  var index_1 = inductionVariable_1;
                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                  var item_1 = this_2.j(index_1);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  if (!$alreadyComposed.j1g(item_1) ? item_1.f1d($modifiedValues) : false) {
                    // Inline function 'kotlin.collections.plusAssign' call
                    $toRecompose.u(item_1);
                  }
                }
                 while (inductionVariable_1 <= last_1);
                tmp_1 = Unit_instance;
              }
            }
            if ($toRecompose.o()) {
              try {
                invoke$fillToInsert($toInsert, this$0);
                $l$loop_0: while (true) {
                  // Inline function 'kotlin.collections.isNotEmpty' call
                  if (!!$toInsert.o()) {
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
          if (!$toApply.o()) {
            var tmp0_this = this$0;
            tmp0_this.k1f_1 = tmp0_this.k1f_1.fb();
            try {
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              var this_4 = $toApply;
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_2 = 0;
              var last_2 = this_4.i() - 1 | 0;
              if (inductionVariable_2 <= last_2)
                do {
                  var index_2 = inductionVariable_2;
                  inductionVariable_2 = inductionVariable_2 + 1 | 0;
                  var item_2 = this_4.j(index_2);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  $toComplete.u(item_2);
                }
                 while (inductionVariable_2 <= last_2);
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              var this_5 = $toApply;
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_3 = 0;
              var last_3 = this_5.i() - 1 | 0;
              if (inductionVariable_3 <= last_3)
                do {
                  var index_3 = inductionVariable_3;
                  inductionVariable_3 = inductionVariable_3 + 1 | 0;
                  var item_3 = this_5.j(index_3);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  item_3.r1d();
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
              $toApply.b1();
            }
          }
          // Inline function 'kotlin.collections.isNotEmpty' call
          if (!$toLateApply.o()) {
            try {
              // Inline function 'kotlin.collections.plusAssign' call
              var this_6 = $toComplete;
              var elements_0 = $toLateApply;
              addAll(this_6, elements_0);
              // Inline function 'kotlin.collections.forEach' call
              var tmp0_iterator = $toLateApply.k();
              while (tmp0_iterator.x()) {
                var element = tmp0_iterator.z();
                // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                element.s1d();
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
              $toLateApply.b1();
            }
          }
          // Inline function 'kotlin.collections.isNotEmpty' call
          if (!$toComplete.o()) {
            try {
              // Inline function 'kotlin.collections.forEach' call
              var tmp0_iterator_0 = $toComplete.k();
              while (tmp0_iterator_0.x()) {
                var element_0 = tmp0_iterator_0.z();
                // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                element_0.z17();
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
              $toComplete.b1();
            }
          }
          // Inline function 'androidx.compose.runtime.synchronized' call
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          this$0.m1f_1;
          // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          deriveStateLocked(this$0);
          Companion_instance_12.k1g();
          $alreadyComposed.b1();
          $modifiedValues.b1();
          this$0.y1f_1 = null;
          break $l$block_0;
        }finally {
          Trace_instance.k16(token_0);
        }
      }
      return Unit_instance;
    };
  }
  function Recomposer$recompositionRunner$slambda$lambda(this$0) {
    return function (changed, _anonymous_parameter_1__qggqgd) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this$0.m1f_1;
      // Inline function 'androidx.compose.runtime.Recomposer.recompositionRunner.<anonymous>.<anonymous>.<anonymous>' call
      var tmp;
      if (this$0.e1g_1.j2().u9(State_Idle_getInstance()) >= 0) {
        // Inline function 'androidx.compose.runtime.collection.fastForEach' call
        if (changed instanceof IdentityArraySet) {
          // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
          // Inline function 'kotlin.contracts.contract' call
          var values = changed.t15_1;
          var inductionVariable = 0;
          var last = changed.s15_1;
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
                  tmp_1 = !it.l1g(tmp$ret$0);
                } else {
                  tmp_1 = false;
                }
                if (tmp_1) {
                  break $l$block;
                }
                this$0.r1f_1.q1a(it);
              }
            }
             while (inductionVariable < last);
        } else {
          // Inline function 'kotlin.collections.forEach' call
          var tmp0_iterator = changed.k();
          while (tmp0_iterator.x()) {
            var element = tmp0_iterator.z();
            $l$block_0: {
              // Inline function 'androidx.compose.runtime.Recomposer.recompositionRunner.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              var tmp_2;
              if (element instanceof StateObjectImpl) {
                // Inline function 'androidx.compose.runtime.snapshots.Companion.Composition' call
                var tmp$ret$2 = _ReaderKind___init__impl__jqeebu(1);
                tmp_2 = !element.l1g(tmp$ret$2);
              } else {
                tmp_2 = false;
              }
              if (tmp_2) {
                break $l$block_0;
              }
              this$0.r1f_1.q1a(element);
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
        tmp0_safe_receiver.m6(tmp$ret$7);
      }
      return Unit_instance;
    };
  }
  function Recomposer$recompositionRunner$slambda$slambda($block, $parentFrameClock, resultContinuation) {
    this.u1g_1 = $block;
    this.v1g_1 = $parentFrameClock;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$recompositionRunner$slambda$slambda).x1g = function ($this$coroutineScope, $completion) {
    var tmp = this.y1g($this$coroutineScope, $completion);
    tmp.yb_1 = Unit_instance;
    tmp.zb_1 = null;
    return tmp.ic();
  };
  protoOf(Recomposer$recompositionRunner$slambda$slambda).uc = function (p1, $completion) {
    return this.x1g((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$recompositionRunner$slambda$slambda).ic = function () {
    var suspendResult = this.yb_1;
    $sm: do
      try {
        var tmp = this.wb_1;
        switch (tmp) {
          case 0:
            this.xb_1 = 2;
            this.wb_1 = 1;
            suspendResult = this.u1g_1(this.w1g_1, this.v1g_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.zb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.xb_1 === 2) {
          throw e;
        } else {
          this.wb_1 = this.xb_1;
          this.zb_1 = e;
        }
      }
     while (true);
  };
  protoOf(Recomposer$recompositionRunner$slambda$slambda).y1g = function ($this$coroutineScope, completion) {
    var i = new Recomposer$recompositionRunner$slambda$slambda(this.u1g_1, this.v1g_1, completion);
    i.w1g_1 = $this$coroutineScope;
    return i;
  };
  function Recomposer$recompositionRunner$slambda$slambda_0($block, $parentFrameClock, resultContinuation) {
    var i = new Recomposer$recompositionRunner$slambda$slambda($block, $parentFrameClock, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.x1g($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function State(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function _get_knownCompositions__y8veaj($this) {
    var tmp0_elvis_lhs = $this.q1f_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.<get-knownCompositions>.<anonymous>' call
      var compositions = $this.p1f_1;
      var newCache = compositions.o() ? emptyList() : ArrayList_init_$Create$_1(compositions);
      $this.q1f_1 = newCache;
      tmp = newCache;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this) {
    return !$this.d1g_1 ? $this.l1f_1.hw() : false;
  }
  function _get_hasBroadcastFrameClockAwaiters__y6inql($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.m1f_1;
    // Inline function 'androidx.compose.runtime.Recomposer.<get-hasBroadcastFrameClockAwaiters>.<anonymous>' call
    return _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
  }
  function deriveStateLocked($this) {
    if ($this.e1g_1.j2().u9(State_ShuttingDown_getInstance()) <= 0) {
      clearKnownCompositionsLocked($this);
      $this.r1f_1 = new IdentityArraySet();
      $this.s1f_1.b1();
      $this.t1f_1.b1();
      $this.u1f_1.b1();
      $this.x1f_1 = null;
      var tmp0_safe_receiver = $this.z1f_1;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.fj();
      $this.z1f_1 = null;
      $this.c1g_1 = null;
      return null;
    }
    var tmp;
    if (!($this.c1g_1 == null)) {
      tmp = State_Inactive_getInstance();
    } else {
      if ($this.n1f_1 == null) {
        $this.r1f_1 = new IdentityArraySet();
        $this.s1f_1.b1();
        tmp = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this) ? State_InactivePendingWork_getInstance() : State_Inactive_getInstance();
      } else {
        var tmp_0;
        var tmp_1;
        var tmp_2;
        var tmp_3;
        var tmp_4;
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!$this.s1f_1.o()) {
          tmp_4 = true;
        } else {
          tmp_4 = $this.r1f_1.g19();
        }
        if (tmp_4) {
          tmp_3 = true;
        } else {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_3 = !$this.t1f_1.o();
        }
        if (tmp_3) {
          tmp_2 = true;
        } else {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_2 = !$this.u1f_1.o();
        }
        if (tmp_2) {
          tmp_1 = true;
        } else {
          tmp_1 = $this.a1g_1 > 0;
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
    $this.e1g_1.lq(newState);
    var tmp_5;
    if (newState.equals(State_PendingWork_getInstance())) {
      // Inline function 'kotlin.also' call
      var this_0 = $this.z1f_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.deriveStateLocked.<anonymous>' call
      $this.z1f_1 = null;
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
    $this.m1f_1;
    // Inline function 'androidx.compose.runtime.Recomposer.<get-shouldKeepRecomposing>.<anonymous>' call
    if (!$this.b1g_1) {
      tmp = true;
    } else {
      var tmp$ret$4;
      $l$block: {
        // Inline function 'kotlin.sequences.any' call
        var tmp0_iterator = $this.f1g_1.am().k();
        while (tmp0_iterator.x()) {
          var element = tmp0_iterator.z();
          // Inline function 'androidx.compose.runtime.Recomposer.<get-shouldKeepRecomposing>.<anonymous>' call
          if (element.vg()) {
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
    this.z1g_1 = $outer;
  }
  function RecomposerErrorState(recoverable, cause) {
    this.a1h_1 = recoverable;
    this.b1h_1 = cause;
  }
  function recordComposerModifications($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.m1f_1;
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
    if ($this.r1f_1.o())
      return _get_hasFrameWorkLocked__1gtyf7($this);
    // Inline function 'kotlin.also' call
    var this_0 = $this.r1f_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>.<anonymous>' call
    $this.r1f_1 = new IdentityArraySet();
    var changes = this_0;
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.m1f_1;
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
        var last = compositions.i() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = compositions.j(index);
            // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>.<anonymous>' call
            item.d1d(changes);
            if ($this.e1g_1.j2().u9(State_ShuttingDown_getInstance()) <= 0) {
              break $l$block;
            }
          }
           while (inductionVariable <= last);
      }
      $this.r1f_1 = new IdentityArraySet();
      complete = true;
    }finally {
      if (!complete) {
        // Inline function 'androidx.compose.runtime.synchronized' call
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        $this.m1f_1;
        $this.r1f_1.c1h(changes);
      }
    }
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.m1f_1;
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
    $this.m1f_1;
    // Inline function 'androidx.compose.runtime.Recomposer.registerRunnerJob.<anonymous>' call
    var tmp0_safe_receiver = $this.o1f_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
    if ($this.e1g_1.j2().u9(State_ShuttingDown_getInstance()) <= 0) {
      // Inline function 'kotlin.error' call
      var message = 'Recomposer shut down';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (!($this.n1f_1 == null)) {
      // Inline function 'kotlin.error' call
      var message_0 = 'Recomposer already running';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    $this.n1f_1 = callingJob;
    deriveStateLocked($this);
  }
  function processCompositionError($this, e, failedInitialComposition, recoverable) {
    var tmp;
    if (Companion_getInstance_3().j1f_1.yl()) {
      tmp = !(e instanceof ComposeRuntimeError);
    } else {
      tmp = false;
    }
    if (tmp) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      $this.m1f_1;
      // Inline function 'androidx.compose.runtime.Recomposer.processCompositionError.<anonymous>' call
      logError('Error was captured in composition while live edit was enabled.', e);
      $this.t1f_1.b1();
      $this.s1f_1.b1();
      $this.r1f_1 = new IdentityArraySet();
      $this.u1f_1.b1();
      $this.v1f_1.b1();
      $this.w1f_1.b1();
      $this.c1g_1 = new RecomposerErrorState(recoverable, e);
      if (!(failedInitialComposition == null)) {
        var tmp0_elvis_lhs = $this.x1f_1;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          // Inline function 'kotlin.also' call
          // Inline function 'kotlin.collections.mutableListOf' call
          var this_0 = ArrayList_init_$Create$();
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.Recomposer.processCompositionError.<anonymous>.<anonymous>' call
          $this.x1f_1 = this_0;
          tmp_0 = this_0;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var failedCompositions = tmp_0;
        if (!failedCompositions.m(failedInitialComposition)) {
          // Inline function 'kotlin.collections.plusAssign' call
          failedCompositions.u(failedInitialComposition);
        }
        removeKnownCompositionLocked($this, failedInitialComposition);
      }
      deriveStateLocked($this);
    } else {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      $this.m1f_1;
      var errorState = $this.c1g_1;
      var tmp_1;
      if (errorState == null) {
        $this.c1g_1 = new RecomposerErrorState(false, e);
        tmp_1 = Unit_instance;
      } else {
        throw errorState.b1h_1;
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
    $this.p1f_1.b1();
    $this.q1f_1 = emptyList();
  }
  function removeKnownCompositionLocked($this, composition) {
    // Inline function 'kotlin.collections.minusAssign' call
    $this.p1f_1.v(composition);
    $this.q1f_1 = null;
  }
  function addKnownCompositionLocked($this, composition) {
    // Inline function 'kotlin.collections.plusAssign' call
    $this.p1f_1.u(composition);
    $this.q1f_1 = null;
  }
  function _get_hasSchedulingWork__b617oy($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.m1f_1;
    // Inline function 'androidx.compose.runtime.Recomposer.<get-hasSchedulingWork>.<anonymous>' call
    var tmp;
    var tmp_0;
    if ($this.r1f_1.g19()) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp_0 = !$this.s1f_1.o();
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
    }
    return tmp;
  }
  function awaitWorkAvailable($this, $completion) {
    var tmp = new $awaitWorkAvailableCOROUTINE$1($this, $completion);
    tmp.yb_1 = Unit_instance;
    tmp.zb_1 = null;
    return tmp.ic();
  }
  function recompositionRunner($this, block, $completion) {
    // Inline function 'kotlin.js.getCoroutineContext' call
    var tmp$ret$0 = $completion.l6();
    var parentFrameClock = get_monotonicFrameClock(tmp$ret$0);
    return withContext($this.l1f_1, Recomposer$recompositionRunner$slambda_0($this, block, parentFrameClock, null), $completion);
  }
  function performInitialMovableContentInserts($this, composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.m1f_1;
    var tmp;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.runtime.snapshots.fastAny' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      var this_0 = $this.u1f_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.i() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.j(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastAny.<anonymous>' call
          // Inline function 'androidx.compose.runtime.Recomposer.performInitialMovableContentInserts.<anonymous>.<anonymous>' call
          if (equals(item.c15_1, composition)) {
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
      if (!!toInsert.o()) {
        break $l$loop;
      }
      performInsertValues($this, toInsert, null);
      performInitialMovableContentInserts$fillToInsert(toInsert, $this, composition);
    }
  }
  function performRecompose($this, composition, modifiedValues) {
    var tmp;
    if (composition.j1c() ? true : composition.x1c()) {
      tmp = true;
    } else {
      var tmp0_safe_receiver = $this.y1f_1;
      tmp = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m(composition)) === true;
    }
    if (tmp)
      return null;
    var tmp_0;
    $l$block_0: {
      // Inline function 'androidx.compose.runtime.Recomposer.composing' call
      var snapshot = Companion_instance_12.m1h(readObserverOf($this, composition), writeObserverOf($this, composition, modifiedValues));
      try {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
          var previous = snapshot.n1h();
          try {
            // Inline function 'androidx.compose.runtime.Recomposer.performRecompose.<anonymous>' call
            if ((modifiedValues == null ? null : modifiedValues.g19()) === true) {
              composition.z19(Recomposer$performRecompose$lambda(modifiedValues, composition));
            }
            tmp$ret$1 = composition.o1d();
            break $l$block;
          }finally {
            snapshot.o1h(previous);
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
    var destination = HashMap_init_$Create$_0(references.i());
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = references.i() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = references.j(index);
        // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy.<anonymous>' call
        // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>' call
        var key = item.c15_1;
        // Inline function 'kotlin.collections.getOrPut' call
        var value = destination.p2(key);
        var tmp;
        if (value == null) {
          // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy.<anonymous>.<anonymous>' call
          var answer = ArrayList_init_$Create$();
          destination.g2(key, answer);
          tmp = answer;
        } else {
          tmp = value;
        }
        var list = tmp;
        list.u(item);
      }
       while (inductionVariable <= last);
    var tasks = destination;
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = tasks.f2().k();
    while (tmp0_iterator.x()) {
      var tmp1_loop_parameter = tmp0_iterator.z();
      // Inline function 'kotlin.collections.component1' call
      var composition = tmp1_loop_parameter.i2();
      // Inline function 'kotlin.collections.component2' call
      var refs = tmp1_loop_parameter.j2();
      runtimeCheck(!composition.j1c());
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.Recomposer.composing' call
        var snapshot = Companion_instance_12.m1h(readObserverOf($this, composition), writeObserverOf($this, composition, modifiedValues));
        try {
          $l$block: {
            // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
            var previous = snapshot.n1h();
            try {
              // Inline function 'androidx.compose.runtime.synchronized' call
              // Inline function 'kotlinx.atomicfu.locks.synchronized' call
              $this.m1f_1;
              // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>' call
              // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
              // Inline function 'kotlin.contracts.contract' call
              var target = ArrayList_init_$Create$_0(refs.i());
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_0 = 0;
              var last_0 = refs.i() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = refs.j(index_0);
                  // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
                  // Inline function 'kotlin.collections.plusAssign' call
                  // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>.<anonymous>' call
                  var element = to(item_0, removeLastMultiValue($this.v1f_1, item_0.a15_1));
                  target.u(element);
                }
                 while (inductionVariable_0 <= last_0);
              var pairs = target;
              composition.p1d(pairs);
              break $l$block;
            }finally {
              snapshot.o1h(previous);
            }
          }
          break $l$block_0;
        }finally {
          applyAndCheck($this, snapshot);
        }
      }
    }
    return toList(tasks.d2());
  }
  function discardUnusedValues($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.m1f_1;
    // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>' call
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.v1f_1.o()) {
      var references = flatten($this.v1f_1.e2());
      $this.v1f_1.b1();
      // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
      // Inline function 'kotlin.contracts.contract' call
      var target = ArrayList_init_$Create$_0(references.i());
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = references.i() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = references.j(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
          // Inline function 'kotlin.collections.plusAssign' call
          // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>.<anonymous>' call
          var element = to(item, $this.w1f_1.p2(item));
          target.u(element);
        }
         while (inductionVariable <= last);
      var unusedValues = target;
      $this.w1f_1.b1();
      tmp = unusedValues;
    } else {
      tmp = emptyList();
    }
    var unusedValues_0 = tmp;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = unusedValues_0.i() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = unusedValues_0.j(index_0);
        // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>' call
        var reference = item_0.fe();
        var state = item_0.ge();
        if (!(state == null)) {
          reference.c15_1.q1d(state);
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
      var applyResult = snapshot.c1i();
      if (applyResult instanceof Failure) {
        // Inline function 'kotlin.error' call
        var message = 'Unsupported concurrent change during composition. A state object was modified by composition as well as being modified outside composition.';
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }finally {
      snapshot.ok();
    }
  }
  function _get_hasFrameWorkLocked__1gtyf7($this) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.s1f_1.o()) {
      tmp = true;
    } else {
      tmp = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
    }
    return tmp;
  }
  function Companion_2() {
    Companion_instance_3 = this;
    this.i1f_1 = MutableStateFlow(persistentSetOf());
    this.j1f_1 = new AtomicReference(false);
  }
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_2();
    return Companion_instance_3;
  }
  function performInitialMovableContentInserts$fillToInsert(toInsert, this$0, $composition) {
    toInsert.b1();
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this$0.m1f_1;
    var iterator = this$0.u1f_1.k();
    while (iterator.x()) {
      var value = iterator.z();
      if (equals(value.c15_1, $composition)) {
        toInsert.u(value);
        iterator.y();
      }
    }
  }
  function Recomposer$broadcastFrameClock$lambda(this$0) {
    return function () {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this$0.m1f_1;
      // Inline function 'androidx.compose.runtime.Recomposer.broadcastFrameClock.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.also' call
      var this_0 = deriveStateLocked(this$0);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.broadcastFrameClock.<anonymous>.<anonymous>.<anonymous>' call
      if (this$0.e1g_1.j2().u9(State_ShuttingDown_getInstance()) <= 0)
        throw CancellationException_init_$Create$('Recomposer shutdown; frame clock awaiter will never resume', this$0.o1f_1);
      if (this_0 == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$4 = _Result___init__impl__xyqfz8(Unit_instance);
        this_0.m6(tmp$ret$4);
      }
      return Unit_instance;
    };
  }
  function Recomposer$effectJob$lambda$lambda(this$0, $throwable) {
    return function (runnerJobCause) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this$0.m1f_1;
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
      tmp.o1f_1 = tmp_0;
      this$0.e1g_1.lq(State_ShutDown_getInstance());
      return Unit_instance;
    };
  }
  function Recomposer$effectJob$lambda(this$0) {
    return function (throwable) {
      var cancellation = CancellationException_init_$Create$('Recomposer effect job completed', throwable);
      var continuationToResume = null;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this$0.m1f_1;
      // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>' call
      var runnerJob = this$0.n1f_1;
      var tmp;
      if (!(runnerJob == null)) {
        this$0.e1g_1.lq(State_ShuttingDown_getInstance());
        if (!this$0.b1g_1) {
          runnerJob.ai(cancellation);
        } else if (!(this$0.z1f_1 == null)) {
          continuationToResume = this$0.z1f_1;
        }
        this$0.z1f_1 = null;
        tmp = runnerJob.vh(Recomposer$effectJob$lambda$lambda(this$0, throwable));
      } else {
        this$0.o1f_1 = cancellation;
        this$0.e1g_1.lq(State_ShutDown_getInstance());
        tmp = Unit_instance;
      }
      var tmp0_safe_receiver = continuationToResume;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_instance);
        tmp0_safe_receiver.m6(tmp$ret$3);
      }
      return Unit_instance;
    };
  }
  function Recomposer$runRecomposeAndApplyChanges$slambda(this$0, resultContinuation) {
    this.l1i_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).v1i = function ($this$recompositionRunner, parentFrameClock, $completion) {
    var tmp = this.w1i($this$recompositionRunner, parentFrameClock, $completion);
    tmp.yb_1 = Unit_instance;
    tmp.zb_1 = null;
    return tmp.ic();
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).x1i = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE();
    return this.v1i(tmp, (!(p2 == null) ? isInterface(p2, MonotonicFrameClock) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).ic = function () {
    var suspendResult = this.yb_1;
    $sm: do
      try {
        var tmp = this.wb_1;
        switch (tmp) {
          case 0:
            this.xb_1 = 6;
            var tmp_0 = this;
            tmp_0.o1i_1 = ArrayList_init_$Create$();
            var tmp_1 = this;
            tmp_1.p1i_1 = ArrayList_init_$Create$();
            var tmp_2 = this;
            tmp_2.q1i_1 = ArrayList_init_$Create$();
            var tmp_3 = this;
            tmp_3.r1i_1 = LinkedHashSet_init_$Create$();
            var tmp_4 = this;
            tmp_4.s1i_1 = LinkedHashSet_init_$Create$();
            this.t1i_1 = new IdentityArraySet();
            this.u1i_1 = new IdentityArraySet();
            this.wb_1 = 1;
            continue $sm;
          case 1:
            if (!_get_shouldKeepRecomposing__5j79sd(this.l1i_1)) {
              this.wb_1 = 5;
              continue $sm;
            }

            this.wb_1 = 2;
            suspendResult = awaitWorkAvailable(this.l1i_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (!recordComposerModifications(this.l1i_1)) {
              this.wb_1 = 1;
              continue $sm;
            } else {
              this.wb_1 = 3;
              continue $sm;
            }

          case 3:
            this.wb_1 = 4;
            suspendResult = this.n1i_1.jw(Recomposer$runRecomposeAndApplyChanges$slambda$lambda(this.l1i_1, this.o1i_1, this.t1i_1, this.u1i_1, this.p1i_1, this.q1i_1, this.r1i_1, this.s1i_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            discardUnusedValues(this.l1i_1);
            this.wb_1 = 1;
            continue $sm;
          case 5:
            return Unit_instance;
          case 6:
            throw this.zb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.xb_1 === 6) {
          throw e;
        } else {
          this.wb_1 = this.xb_1;
          this.zb_1 = e;
        }
      }
     while (true);
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).w1i = function ($this$recompositionRunner, parentFrameClock, completion) {
    var i = new Recomposer$runRecomposeAndApplyChanges$slambda(this.l1i_1, completion);
    i.m1i_1 = $this$recompositionRunner;
    i.n1i_1 = parentFrameClock;
    return i;
  };
  function Recomposer$runRecomposeAndApplyChanges$slambda_0(this$0, resultContinuation) {
    var i = new Recomposer$runRecomposeAndApplyChanges$slambda(this$0, resultContinuation);
    var l = function ($this$recompositionRunner, parentFrameClock, $completion) {
      return i.v1i($this$recompositionRunner, parentFrameClock, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Recomposer$recompositionRunner$slambda(this$0, $block, $parentFrameClock, resultContinuation) {
    this.g1j_1 = this$0;
    this.h1j_1 = $block;
    this.i1j_1 = $parentFrameClock;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$recompositionRunner$slambda).x1g = function ($this$withContext, $completion) {
    var tmp = this.y1g($this$withContext, $completion);
    tmp.yb_1 = Unit_instance;
    tmp.zb_1 = null;
    return tmp.ic();
  };
  protoOf(Recomposer$recompositionRunner$slambda).uc = function (p1, $completion) {
    return this.x1g((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$recompositionRunner$slambda).ic = function () {
    var suspendResult = this.yb_1;
    $sm: do
      try {
        var tmp = this.wb_1;
        switch (tmp) {
          case 0:
            this.xb_1 = 5;
            this.k1j_1 = get_job(this.j1j_1.ug());
            registerRunnerJob(this.g1j_1, this.k1j_1);
            var tmp_0 = this;
            var tmp_1 = Companion_instance_12;
            tmp_0.l1j_1 = tmp_1.n1j(Recomposer$recompositionRunner$slambda$lambda(this.g1j_1));
            addRunning(Companion_getInstance_3(), this.g1j_1.h1g_1);
            this.wb_1 = 1;
            continue $sm;
          case 1:
            this.xb_1 = 4;
            this.g1j_1.m1f_1;
            var this_0 = _get_knownCompositions__y8veaj(this.g1j_1);
            var inductionVariable = 0;
            var last = this_0.i() - 1 | 0;
            if (inductionVariable <= last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var item = this_0.j(index);
                item.t1d();
              }
               while (inductionVariable <= last);
            this.wb_1 = 2;
            suspendResult = coroutineScope(Recomposer$recompositionRunner$slambda$slambda_0(this.h1j_1, this.i1j_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.m1j_1 = suspendResult;
            this.xb_1 = 5;
            this.wb_1 = 3;
            continue $sm;
          case 3:
            this.xb_1 = 5;
            this.l1j_1.ok();
            this.g1j_1.m1f_1;
            if (this.g1j_1.n1f_1 === this.k1j_1) {
              this.g1j_1.n1f_1 = null;
            }

            deriveStateLocked(this.g1j_1);
            removeRunning(Companion_getInstance_3(), this.g1j_1.h1g_1);
            return Unit_instance;
          case 4:
            this.xb_1 = 5;
            var t = this.zb_1;
            this.l1j_1.ok();
            this.g1j_1.m1f_1;
            if (this.g1j_1.n1f_1 === this.k1j_1) {
              this.g1j_1.n1f_1 = null;
            }

            deriveStateLocked(this.g1j_1);
            removeRunning(Companion_getInstance_3(), this.g1j_1.h1g_1);
            throw t;
          case 5:
            throw this.zb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.xb_1 === 5) {
          throw e;
        } else {
          this.wb_1 = this.xb_1;
          this.zb_1 = e;
        }
      }
     while (true);
  };
  protoOf(Recomposer$recompositionRunner$slambda).y1g = function ($this$withContext, completion) {
    var i = new Recomposer$recompositionRunner$slambda(this.g1j_1, this.h1j_1, this.i1j_1, completion);
    i.j1j_1 = $this$withContext;
    return i;
  };
  function Recomposer$recompositionRunner$slambda_0(this$0, $block, $parentFrameClock, resultContinuation) {
    var i = new Recomposer$recompositionRunner$slambda(this$0, $block, $parentFrameClock, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.x1g($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Recomposer$performRecompose$lambda($modifiedValues, $composition) {
    return function () {
      var this_0 = $modifiedValues;
      // Inline function 'kotlin.contracts.contract' call
      var values = this_0.t15_1;
      var inductionVariable = 0;
      var last = this_0.s15_1;
      var tmp;
      if (inductionVariable < last) {
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.Recomposer.performRecompose.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_0 = values[i];
          var it = !(tmp_0 == null) ? tmp_0 : THROW_CCE();
          $composition.n1d(it);
        }
         while (inductionVariable < last);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function Recomposer$readObserverOf$lambda($composition) {
    return function (value) {
      $composition.g1d(value);
      return Unit_instance;
    };
  }
  function Recomposer$writeObserverOf$lambda($composition, $modifiedValues) {
    return function (value) {
      $composition.n1d(value);
      var tmp0_safe_receiver = $modifiedValues;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.q1a(value);
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
  function $awaitWorkAvailableCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l1h_1 = _this__u8e3s4;
  }
  protoOf($awaitWorkAvailableCOROUTINE$1).ic = function () {
    var suspendResult = this.yb_1;
    $sm: do
      try {
        var tmp = this.wb_1;
        switch (tmp) {
          case 0:
            this.xb_1 = 3;
            if (!_get_hasSchedulingWork__b617oy(this.l1h_1)) {
              this.wb_1 = 1;
              var cancellable = new CancellableContinuationImpl(intercepted(this), get_MODE_CANCELLABLE());
              cancellable.nk();
              this.l1h_1.m1f_1;
              var tmp_0;
              if (_get_hasSchedulingWork__b617oy(this.l1h_1)) {
                tmp_0 = cancellable;
              } else {
                this.l1h_1.z1f_1 = cancellable;
                tmp_0 = null;
              }
              var tmp0_safe_receiver = tmp_0;
              if (tmp0_safe_receiver == null)
                null;
              else {
                tmp0_safe_receiver.m6(_Result___init__impl__xyqfz8(Unit_instance));
              }
              suspendResult = returnIfSuspended(cancellable.si(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.wb_1 = 2;
              continue $sm;
            }

          case 1:
            this.wb_1 = 2;
            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.zb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.xb_1 === 3) {
          throw e;
        } else {
          this.wb_1 = this.xb_1;
          this.zb_1 = e;
        }
      }
     while (true);
  };
  function Recomposer(effectCoroutineContext) {
    Companion_getInstance_3();
    CompositionContext.call(this);
    this.k1f_1 = new Long(0, 0);
    var tmp = this;
    tmp.l1f_1 = new BroadcastFrameClock(Recomposer$broadcastFrameClock$lambda(this));
    this.m1f_1 = createSynchronizedObject();
    this.n1f_1 = null;
    this.o1f_1 = null;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.p1f_1 = ArrayList_init_$Create$();
    this.q1f_1 = null;
    this.r1f_1 = new IdentityArraySet();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.s1f_1 = ArrayList_init_$Create$();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_2.t1f_1 = ArrayList_init_$Create$();
    var tmp_3 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_3.u1f_1 = ArrayList_init_$Create$();
    var tmp_4 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_4.v1f_1 = LinkedHashMap_init_$Create$();
    var tmp_5 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_5.w1f_1 = LinkedHashMap_init_$Create$();
    this.x1f_1 = null;
    this.y1f_1 = null;
    this.z1f_1 = null;
    this.a1g_1 = 0;
    this.b1g_1 = false;
    this.c1g_1 = null;
    this.d1g_1 = false;
    this.e1g_1 = MutableStateFlow(State_Inactive_getInstance());
    var tmp_6 = this;
    // Inline function 'kotlin.apply' call
    var this_0 = Job(effectCoroutineContext.dc(Key_instance));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>' call
    this_0.vh(Recomposer$effectJob$lambda(this));
    tmp_6.f1g_1 = this_0;
    this.g1g_1 = effectCoroutineContext.if(this.l1f_1).if(this.f1g_1);
    this.h1g_1 = new RecomposerInfoImpl(this);
  }
  protoOf(Recomposer).r17 = function () {
    return this.g1g_1;
  };
  protoOf(Recomposer).o1j = function ($completion) {
    return recompositionRunner(this, Recomposer$runRecomposeAndApplyChanges$slambda_0(this, null), $completion);
  };
  protoOf(Recomposer).p1b = function (composition, content) {
    var composerWasComposing = composition.j1c();
    try {
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.Recomposer.composing' call
        var snapshot = Companion_instance_12.m1h(readObserverOf(this, composition), writeObserverOf(this, composition, null));
        try {
          $l$block: {
            // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
            var previous = snapshot.n1h();
            try {
              composition.z1c(content);
              break $l$block;
            }finally {
              snapshot.o1h(previous);
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
      Companion_instance_12.k1g();
    }
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.m1f_1;
    var tmp;
    if (this.e1g_1.j2().u9(State_ShuttingDown_getInstance()) > 0) {
      var tmp_0;
      if (!_get_knownCompositions__y8veaj(this).m(composition)) {
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
      composition.r1d();
      composition.s1d();
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
      Companion_instance_12.k1g();
    }
  };
  protoOf(Recomposer).pz = function () {
    return 1000;
  };
  protoOf(Recomposer).mz = function () {
    return false;
  };
  protoOf(Recomposer).nz = function () {
    return false;
  };
  protoOf(Recomposer).oz = function (table) {
  };
  protoOf(Recomposer).m1c = function (composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.m1f_1;
    // Inline function 'androidx.compose.runtime.Recomposer.invalidate.<anonymous>' call
    var tmp;
    if (!this.s1f_1.m(composition)) {
      // Inline function 'kotlin.collections.plusAssign' call
      this.s1f_1.u(composition);
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
      tmp0_safe_receiver.m6(tmp$ret$3);
    }
  };
  protoOf(Recomposer).x14 = function (reference) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.m1f_1;
    // Inline function 'androidx.compose.runtime.Recomposer.insertMovableContent.<anonymous>' call
    // Inline function 'kotlin.collections.plusAssign' call
    this.u1f_1.u(reference);
    var tmp0_safe_receiver = deriveStateLocked(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_instance);
      tmp0_safe_receiver.m6(tmp$ret$3);
    }
  };
  protoOf(Recomposer).f17 = function (reference) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.m1f_1;
    // Inline function 'androidx.compose.runtime.Recomposer.deletedMovableContent.<anonymous>' call
    addMultiValue(this.v1f_1, reference.a15_1, reference);
  };
  protoOf(Recomposer).e1e = function (reference, data) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.m1f_1;
    this.w1f_1.g2(reference, data);
  };
  protoOf(Recomposer).e17 = function (composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.m1f_1;
    // Inline function 'androidx.compose.runtime.Recomposer.reportRemovedComposition.<anonymous>' call
    var tmp0_elvis_lhs = this.y1f_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.collections.mutableSetOf' call
      var this_0 = LinkedHashSet_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.reportRemovedComposition.<anonymous>.<anonymous>' call
      this.y1f_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var compositionsRemoved = tmp;
    compositionsRemoved.u(composition);
  };
  protoOf(Recomposer).j15 = function (reference) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.m1f_1;
    // Inline function 'androidx.compose.runtime.Recomposer.movableContentStateResolve.<anonymous>' call
    return this.w1f_1.h2(reference);
  };
  function removeLastMultiValue(_this__u8e3s4, key) {
    _init_properties_Recomposer_kt__nj7w3x();
    var tmp0_safe_receiver = _this__u8e3s4.p2(key);
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
      if (tmp0_safe_receiver.o()) {
        _this__u8e3s4.h2(key);
      }
      tmp = this_0;
    }
    return tmp;
  }
  function addMultiValue(_this__u8e3s4, key, value) {
    _init_properties_Recomposer_kt__nj7w3x();
    // Inline function 'kotlin.collections.getOrPut' call
    var value_0 = _this__u8e3s4.p2(key);
    var tmp;
    if (value_0 == null) {
      // Inline function 'androidx.compose.runtime.addMultiValue.<anonymous>' call
      // Inline function 'kotlin.collections.mutableListOf' call
      var answer = ArrayList_init_$Create$();
      _this__u8e3s4.g2(key, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    return tmp.u(value);
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
    this.vy_1 = new Int32Array(0);
    this.wy_1 = 0;
    var tmp = this;
    var tmp_0 = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(0), null);
    while (tmp_0 < 0) {
      tmp_1[tmp_0] = null;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.xy_1 = tmp_1;
    this.yy_1 = 0;
    this.zy_1 = 0;
    this.az_1 = new SynchronizedObject();
    this.bz_1 = false;
    this.cz_1 = 0;
    var tmp_2 = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp_2.dz_1 = ArrayList_init_$Create$();
    this.ez_1 = null;
  }
  protoOf(SlotTable).g14 = function () {
    return this.wy_1 === 0;
  };
  protoOf(SlotTable).fz = function () {
    if (this.bz_1) {
      // Inline function 'kotlin.error' call
      var message = 'Cannot read while a writer is pending';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.zy_1 = this.zy_1 + 1 | 0;
    return new SlotReader(this);
  };
  protoOf(SlotTable).d12 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.bz_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.openWriter.<anonymous>' call
      var message = 'Cannot start a writer when another writer is pending';
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.zy_1 <= 0)) {
      // Inline function 'androidx.compose.runtime.SlotTable.openWriter.<anonymous>' call
      var message_0 = 'Cannot start a writer when a reader is pending';
      composeRuntimeError(toString(message_0));
    }
    this.bz_1 = true;
    this.cz_1 = this.cz_1 + 1 | 0;
    return new SlotWriter(this);
  };
  protoOf(SlotTable).b13 = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.bz_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      var message = 'use active SlotWriter to create an anchor location instead';
      composeRuntimeError(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= index ? index < this.wy_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      var message_0 = 'Parameter index is out of range';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var this_0 = this.dz_1;
    var effectiveSize = this.wy_1;
    var location = search$accessor$145qfty(this_0, index, effectiveSize);
    var tmp;
    if (location < 0) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      var anchor = new Anchor(index);
      this_0.q1(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = this_0.j(location);
    }
    return tmp;
  };
  protoOf(SlotTable).p1j = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.bz_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.tryAnchor.<anonymous>' call
      var message = 'use active SlotWriter to crate an anchor for location instead';
      composeRuntimeError(toString(message));
    }
    return (0 <= index ? index < this.wy_1 : false) ? find(this.dz_1, index, this.wy_1) : null;
  };
  protoOf(SlotTable).h15 = function (anchor) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.bz_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchorIndex.<anonymous>' call
      var message = 'Use active SlotWriter to determine anchor location instead';
      composeRuntimeError(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!anchor.g1c()) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchorIndex.<anonymous>' call
      var message_0 = 'Anchor refers to a group that was removed';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    return anchor.e16_1;
  };
  protoOf(SlotTable).x1d = function (anchor) {
    var tmp;
    if (anchor.g1c()) {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.ownsAnchor.<anonymous>' call
      var it = search$accessor$145qfty(this.dz_1, anchor.e16_1, this.wy_1);
      tmp = it >= 0 ? equals(this.dz_1.j(it), anchor) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SlotTable).k1c = function (groupIndex, anchor) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.bz_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.groupContainsAnchor.<anonymous>' call
      var message = 'Writer is active';
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(0 <= groupIndex ? groupIndex < this.wy_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.groupContainsAnchor.<anonymous>' call
      var message_0 = 'Invalid group index';
      composeRuntimeError(toString(message_0));
    }
    var tmp;
    if (this.x1d(anchor)) {
      var containsUpper = groupIndex + groupSize(this.vy_1, groupIndex) | 0;
      var containsArg = anchor.e16_1;
      tmp = groupIndex <= containsArg ? containsArg < containsUpper : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SlotTable).q1j = function (reader, sourceInformationMap) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(reader.e10_1 === this ? this.zy_1 > 0 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.close.<anonymous>' call
      var message = 'Unexpected reader close()';
      composeRuntimeError(toString(message));
    }
    this.zy_1 = this.zy_1 - 1 | 0;
    if (!(sourceInformationMap == null)) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this.az_1;
      var thisMap = this.ez_1;
      var tmp;
      if (!(thisMap == null)) {
        thisMap.g3(sourceInformationMap);
        tmp = Unit_instance;
      } else {
        this.ez_1 = sourceInformationMap;
        tmp = Unit_instance;
      }
    }
  };
  protoOf(SlotTable).r1j = function (writer, groups, groupsSize, slots, slotsSize, anchors, sourceInformationMap) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(writer.t10_1 === this ? this.bz_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.close.<anonymous>' call
      var message = 'Unexpected writer close()';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.bz_1 = false;
    this.s1j(groups, groupsSize, slots, slotsSize, anchors, sourceInformationMap);
  };
  protoOf(SlotTable).s1j = function (groups, groupsSize, slots, slotsSize, anchors, sourceInformationMap) {
    this.vy_1 = groups;
    this.wy_1 = groupsSize;
    this.xy_1 = slots;
    this.yy_1 = slotsSize;
    this.dz_1 = anchors;
    this.ez_1 = sourceInformationMap;
  };
  protoOf(SlotTable).q16 = function () {
    return this.wy_1 > 0 ? containsMark(this.vy_1, 0) : false;
  };
  protoOf(SlotTable).t1j = function (group) {
    var tmp0_safe_receiver = this.ez_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.sourceInformationOf.<anonymous>' call
      var tmp0_safe_receiver_0 = this.p1j(group);
      var tmp_0;
      if (tmp0_safe_receiver_0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SlotTable.sourceInformationOf.<anonymous>.<anonymous>' call
        tmp_0 = tmp0_safe_receiver.p2(tmp0_safe_receiver_0);
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(SlotTable).c1f = function (group, slotIndex) {
    var start = slotAnchor(this.vy_1, group);
    var end = (group + 1 | 0) < this.wy_1 ? dataAnchor(this.vy_1, group + 1 | 0) : this.xy_1.length;
    var len = end - start | 0;
    var tmp;
    if (0 <= slotIndex ? slotIndex < len : false) {
      return this.xy_1[start + slotIndex | 0];
    } else {
      tmp = Companion_getInstance_0().k12_1;
    }
    return tmp;
  };
  protoOf(SlotTable).k = function () {
    return new GroupIterator(this, 0, this.wy_1);
  };
  function moveGroup($this, fromWriter, fromIndex, toWriter, updateFromCursor, updateToCursor, removeSourceGroup) {
    var groupsToMove = fromWriter.s13(fromIndex);
    var sourceGroupsEnd = fromIndex + groupsToMove | 0;
    var sourceSlotsStart = dataIndex(fromWriter, fromIndex);
    var sourceSlotsEnd = dataIndex(fromWriter, sourceGroupsEnd);
    var slotsToMove = sourceSlotsEnd - sourceSlotsStart | 0;
    var hasMarks = containsAnyGroupMarks(fromWriter, fromIndex);
    insertGroups(toWriter, groupsToMove);
    insertSlots(toWriter, slotsToMove, toWriter.k11_1);
    if (fromWriter.y10_1 < sourceGroupsEnd) {
      moveGroupGapTo(fromWriter, sourceGroupsEnd);
    }
    if (fromWriter.c11_1 < sourceSlotsEnd) {
      moveSlotGapTo(fromWriter, sourceSlotsEnd, sourceGroupsEnd);
    }
    var groups = toWriter.u10_1;
    var currentGroup = toWriter.k11_1;
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = fromWriter.u10_1;
    var destinationOffset = imul(currentGroup, 5);
    var startIndex = imul(fromIndex, 5);
    var endIndex = imul(sourceGroupsEnd, 5);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, groups, destinationOffset, startIndex, endIndex);
    var slots = toWriter.v10_1;
    var currentSlot = toWriter.a11_1;
    // Inline function 'kotlin.collections.copyInto' call
    var this_1 = fromWriter.v10_1;
    arrayCopy(this_1, slots, currentSlot, sourceSlotsStart, sourceSlotsEnd);
    var parent = toWriter.m11_1;
    updateParentAnchor(groups, currentGroup, parent);
    var parentDelta = currentGroup - fromIndex | 0;
    var moveEnd = currentGroup + groupsToMove | 0;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
    var dataIndexDelta = currentSlot - dataIndex_0(groups, toWriter, currentGroup) | 0;
    var slotsGapOwner = toWriter.e11_1;
    var slotsGapLen = toWriter.d11_1;
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
        var newDataAnchor = dataIndexToDataAnchor(toWriter, newDataIndex, slotsGapOwner < groupAddress ? 0 : toWriter.c11_1, slotsGapLen, slotsCapacity);
        updateDataAnchor(groups, groupAddress, newDataAnchor);
        if (groupAddress === slotsGapOwner) {
          slotsGapOwner = slotsGapOwner + 1 | 0;
        }
      }
       while (inductionVariable < moveEnd);
    toWriter.e11_1 = slotsGapOwner;
    var startAnchors = locationOf(fromWriter.w10_1, fromIndex, fromWriter.i());
    var endAnchors = locationOf(fromWriter.w10_1, sourceGroupsEnd, fromWriter.i());
    var tmp_0;
    if (startAnchors < endAnchors) {
      var sourceAnchors = fromWriter.w10_1;
      var anchors = ArrayList_init_$Create$_0(endAnchors - startAnchors | 0);
      var anchorDelta = currentGroup - fromIndex | 0;
      var inductionVariable_0 = startAnchors;
      if (inductionVariable_0 < endAnchors)
        do {
          var anchorIndex = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var sourceAnchor = sourceAnchors.j(anchorIndex);
          sourceAnchor.e16_1 = sourceAnchor.e16_1 + anchorDelta | 0;
          anchors.u(sourceAnchor);
        }
         while (inductionVariable_0 < endAnchors);
      var insertLocation = locationOf(toWriter.w10_1, toWriter.k11_1, toWriter.i());
      toWriter.w10_1.x2(insertLocation, anchors);
      sourceAnchors.u1(startAnchors, endAnchors).b1();
      tmp_0 = anchors;
    } else {
      tmp_0 = emptyList();
    }
    var anchors_0 = tmp_0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!anchors_0.o()) {
      var sourceSourceInformationMap = fromWriter.x10_1;
      if (!(sourceSourceInformationMap == null)) {
        var destinationSourceInformation = toWriter.x10_1;
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_1 = 0;
        var last = anchors_0.i() - 1 | 0;
        if (inductionVariable_1 <= last)
          do {
            var index = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var item = anchors_0.j(index);
            // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
            var information = sourceSourceInformationMap.p2(item);
            if (!(information == null)) {
              sourceSourceInformationMap.h2(item);
              var tmp0_elvis_lhs = destinationSourceInformation;
              var tmp_1;
              if (tmp0_elvis_lhs == null) {
                // Inline function 'kotlin.run' call
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>.<anonymous>' call
                var map = HashMap_init_$Create$();
                destinationSourceInformation = map;
                toWriter.x10_1 = destinationSourceInformation;
                tmp_1 = map;
              } else {
                tmp_1 = tmp0_elvis_lhs;
              }
              var map_0 = tmp_1;
              // Inline function 'kotlin.collections.set' call
              map_0.g2(item, information);
            }
          }
           while (inductionVariable_1 <= last);
        if (sourceSourceInformationMap.o()) {
          fromWriter.x10_1 = null;
        }
      }
    }
    var toWriterParent = toWriter.m11_1;
    var tmp4_safe_receiver = sourceInformationOf(toWriter, parent);
    if (tmp4_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var predecessor = -1;
      var child = toWriterParent + 1 | 0;
      var endGroup = toWriter.k11_1;
      while (child < endGroup) {
        predecessor = child;
        child = child + groupSize(toWriter.u10_1, child) | 0;
      }
      tmp4_safe_receiver.y1j(toWriter, predecessor, endGroup);
    }
    var parentGroup = fromWriter.a12(fromIndex);
    var tmp_2;
    if (!removeSourceGroup) {
      tmp_2 = false;
    } else if (updateFromCursor) {
      var needsStartGroups = parentGroup >= 0;
      if (needsStartGroups) {
        fromWriter.h12();
        fromWriter.z1j(parentGroup - fromWriter.k11_1 | 0);
        fromWriter.h12();
      }
      fromWriter.z1j(fromIndex - fromWriter.k11_1 | 0);
      var anchorsRemoved = fromWriter.h1a();
      if (needsStartGroups) {
        fromWriter.e12();
        fromWriter.e14();
        fromWriter.e12();
        fromWriter.e14();
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
    toWriter.g11_1 = toWriter.g11_1 + (isNode(groups, currentGroup) ? 1 : nodeCount(groups, currentGroup)) | 0;
    if (updateToCursor) {
      toWriter.k11_1 = currentGroup + groupsToMove | 0;
      toWriter.a11_1 = currentSlot + slotsToMove | 0;
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
    var tmp0_elvis_lhs = $this.x10_1;
    var map = tmp0_elvis_lhs == null ? HashMap_init_$Create$() : tmp0_elvis_lhs;
    $this.x10_1 = map;
    // Inline function 'kotlin.collections.getOrPut' call
    var key = $this.b13(parent);
    var value = map.p2(key);
    var tmp;
    if (value == null) {
      // Inline function 'androidx.compose.runtime.SlotWriter.groupSourceInformationFor.<anonymous>' call
      var result = new GroupSourceInformation(0, sourceInformation);
      if (sourceInformation == null) {
        var child = parent + 1 | 0;
        var end = $this.k11_1;
        while (child < end) {
          result.a1k($this, child);
          child = child + groupSize($this.u10_1, child) | 0;
        }
      }
      var answer = result;
      map.g2(key, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    return tmp;
  }
  function startGroup_1($this, key, objectKey, isNode, aux) {
    var previousParent = $this.m11_1;
    var inserting = $this.f11_1 > 0;
    $this.j11_1.kz($this.g11_1);
    var tmp = $this;
    var tmp_0;
    if (inserting) {
      insertGroups($this, 1);
      var current = $this.k11_1;
      var currentAddress = groupIndexToAddress($this, current);
      var hasObjectKey = !(objectKey === Companion_getInstance_0().k12_1);
      var hasAux = !isNode ? !(aux === Companion_getInstance_0().k12_1) : false;
      initGroup($this.u10_1, currentAddress, key, isNode, hasObjectKey, hasAux, $this.m11_1, $this.a11_1);
      $this.b11_1 = $this.a11_1;
      var dataSlotsNeeded = ((isNode ? 1 : 0) + (hasObjectKey ? 1 : 0) | 0) + (hasAux ? 1 : 0) | 0;
      if (dataSlotsNeeded > 0) {
        insertSlots($this, dataSlotsNeeded, current);
        var slots = $this.v10_1;
        var currentSlot = $this.a11_1;
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
        $this.a11_1 = currentSlot;
      }
      $this.g11_1 = 0;
      var newCurrent = current + 1 | 0;
      $this.m11_1 = current;
      $this.k11_1 = newCurrent;
      if (previousParent >= 0) {
        var tmp3_safe_receiver = sourceInformationOf($this, previousParent);
        if (tmp3_safe_receiver == null)
          null;
        else {
          tmp3_safe_receiver.a1k($this, current);
        }
      }
      tmp_0 = newCurrent;
    } else {
      $this.h11_1.kz(previousParent);
      saveCurrentGroupEnd($this);
      var currentGroup = $this.k11_1;
      var currentGroupAddress = groupIndexToAddress($this, currentGroup);
      if (!equals(aux, Companion_getInstance_0().k12_1)) {
        if (isNode) {
          $this.c1k(aux);
        } else {
          $this.b1k(aux);
        }
      }
      $this.a11_1 = slotIndex($this.u10_1, $this, currentGroupAddress);
      $this.b11_1 = dataIndex_0($this.u10_1, $this, groupIndexToAddress($this, $this.k11_1 + 1 | 0));
      $this.g11_1 = nodeCount($this.u10_1, currentGroupAddress);
      $this.m11_1 = currentGroup;
      $this.k11_1 = currentGroup + 1 | 0;
      tmp_0 = currentGroup + groupSize($this.u10_1, currentGroupAddress) | 0;
    }
    tmp.l11_1 = tmp_0;
  }
  function Companion_3() {
  }
  var Companion_instance_4;
  function Companion_getInstance_4() {
    return Companion_instance_4;
  }
  function containsGroupMark($this, group) {
    return group >= 0 ? containsMark($this.u10_1, groupIndexToAddress($this, group)) : false;
  }
  function containsAnyGroupMarks($this, group) {
    return group >= 0 ? containsAnyMark($this.u10_1, groupIndexToAddress($this, group)) : false;
  }
  function recalculateMarks($this) {
    var tmp0_safe_receiver = $this.o11_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      while (tmp0_safe_receiver.g19()) {
        updateContainsMarkNow($this, tmp0_safe_receiver.e1k(), tmp0_safe_receiver);
      }
    }
  }
  function updateContainsMark($this, group) {
    if (group >= 0) {
      var tmp0_elvis_lhs = $this.o11_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_0 = new PrioritySet();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SlotWriter.updateContainsMark.<anonymous>' call
        $this.o11_1 = this_0;
        tmp = this_0;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      tmp.f1k(group);
    }
  }
  function updateContainsMarkNow($this, group, set) {
    var groupAddress = groupIndexToAddress($this, group);
    var containsAnyMarks = childContainsAnyMarks($this, group);
    var markChanges = !(containsMark($this.u10_1, groupAddress) === containsAnyMarks);
    if (markChanges) {
      updateContainsMark_0($this.u10_1, groupAddress, containsAnyMarks);
      var parent = $this.a12(group);
      if (parent >= 0) {
        set.f1k(parent);
      }
    }
  }
  function childContainsAnyMarks($this, group) {
    var child = group + 1 | 0;
    var end = group + $this.s13(group) | 0;
    while (child < end) {
      if (containsAnyMark($this.u10_1, groupIndexToAddress($this, child)))
        return true;
      child = child + $this.s13(child) | 0;
    }
    return false;
  }
  function saveCurrentGroupEnd($this) {
    $this.i11_1.kz((_get_capacity__a9k9f3($this) - $this.z10_1 | 0) - $this.l11_1 | 0);
  }
  function restoreCurrentGroupEnd($this) {
    var newGroupEnd = (_get_capacity__a9k9f3($this) - $this.z10_1 | 0) - $this.i11_1.o13() | 0;
    $this.l11_1 = newGroupEnd;
    return newGroupEnd;
  }
  function fixParentAnchorsFor($this, parent, endGroup, firstChild) {
    var parentAnchor = parentIndexToAnchor($this, parent, $this.y10_1);
    var child = firstChild;
    while (child < endGroup) {
      updateParentAnchor($this.u10_1, groupIndexToAddress($this, child), parentAnchor);
      var childEnd = child + groupSize($this.u10_1, groupIndexToAddress($this, child)) | 0;
      fixParentAnchorsFor($this, child, childEnd, child + 1 | 0);
      child = childEnd;
    }
  }
  function moveGroupGapTo($this, index) {
    var gapLen = $this.z10_1;
    var gapStart = $this.y10_1;
    if (!(gapStart === index)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!$this.w10_1.o()) {
        updateAnchors($this, gapStart, index);
      }
      if (gapLen > 0) {
        var groups = $this.u10_1;
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
        var oldAnchor = parentAnchor($this.u10_1, groupAddress);
        var oldIndex = parentAnchorToIndex($this, oldAnchor);
        var newAnchor = parentIndexToAnchor($this, oldIndex, index);
        if (!(newAnchor === oldAnchor)) {
          updateParentAnchor($this.u10_1, groupAddress, newAnchor);
        }
        groupAddress = groupAddress + 1 | 0;
        if (groupAddress === index)
          groupAddress = groupAddress + gapLen | 0;
      }
    }
    $this.y10_1 = index;
  }
  function moveSlotGapTo($this, index, group) {
    var gapLen = $this.d11_1;
    var gapStart = $this.c11_1;
    var slotsGapOwner = $this.e11_1;
    if (!(gapStart === index)) {
      var slots = $this.v10_1;
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
    var b = $this.i();
    var newSlotsGapOwner = Math.min(a, b);
    if (!(slotsGapOwner === newSlotsGapOwner)) {
      var slotsSize = $this.v10_1.length - gapLen | 0;
      if (newSlotsGapOwner < slotsGapOwner) {
        var updateAddress = groupIndexToAddress($this, newSlotsGapOwner);
        var stopUpdateAddress = groupIndexToAddress($this, slotsGapOwner);
        var groupGapStart = $this.y10_1;
        while (updateAddress < stopUpdateAddress) {
          var anchor = dataAnchor($this.u10_1, updateAddress);
          // Inline function 'androidx.compose.runtime.runtimeCheck' call
          if (!(anchor >= 0)) {
            // Inline function 'androidx.compose.runtime.SlotWriter.moveSlotGapTo.<anonymous>' call
            var message = 'Unexpected anchor value, expected a positive anchor';
            composeRuntimeError(toString(message));
          }
          updateDataAnchor($this.u10_1, updateAddress, -((slotsSize - anchor | 0) + 1 | 0) | 0);
          updateAddress = updateAddress + 1 | 0;
          if (updateAddress === groupGapStart)
            updateAddress = updateAddress + $this.z10_1 | 0;
        }
      } else {
        var updateAddress_0 = groupIndexToAddress($this, slotsGapOwner);
        var stopUpdateAddress_0 = groupIndexToAddress($this, newSlotsGapOwner);
        while (updateAddress_0 < stopUpdateAddress_0) {
          var anchor_0 = dataAnchor($this.u10_1, updateAddress_0);
          // Inline function 'androidx.compose.runtime.runtimeCheck' call
          if (!(anchor_0 < 0)) {
            // Inline function 'androidx.compose.runtime.SlotWriter.moveSlotGapTo.<anonymous>' call
            var message_0 = 'Unexpected anchor value, expected a negative anchor';
            composeRuntimeError(toString(message_0));
          }
          updateDataAnchor($this.u10_1, updateAddress_0, (slotsSize + anchor_0 | 0) + 1 | 0);
          updateAddress_0 = updateAddress_0 + 1 | 0;
          if (updateAddress_0 === $this.y10_1)
            updateAddress_0 = updateAddress_0 + $this.z10_1 | 0;
        }
      }
      $this.e11_1 = newSlotsGapOwner;
    }
    $this.c11_1 = index;
  }
  function clearSlotGap($this) {
    var slotsGapStart = $this.c11_1;
    var slotsGapEnd = slotsGapStart + $this.d11_1 | 0;
    fill_0($this.v10_1, null, slotsGapStart, slotsGapEnd);
  }
  function insertGroups($this, size) {
    if (size > 0) {
      var currentGroup = $this.k11_1;
      moveGroupGapTo($this, currentGroup);
      var gapStart = $this.y10_1;
      var gapLen = $this.z10_1;
      var oldCapacity = $this.u10_1.length / 5 | 0;
      var oldSize = oldCapacity - gapLen | 0;
      if (gapLen < size) {
        var groups = $this.u10_1;
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
        $this.u10_1 = newGroups;
        gapLen = newGapLen;
      }
      var currentEnd = $this.l11_1;
      if (currentEnd >= gapStart)
        $this.l11_1 = currentEnd + size | 0;
      $this.y10_1 = gapStart + size | 0;
      $this.z10_1 = gapLen - size | 0;
      var index = oldSize > 0 ? dataIndex($this, currentGroup + size | 0) : 0;
      var anchor = dataIndexToDataAnchor($this, index, $this.e11_1 < gapStart ? 0 : $this.c11_1, $this.d11_1, $this.v10_1.length);
      var inductionVariable = gapStart;
      var last = gapStart + size | 0;
      if (inductionVariable < last)
        do {
          var groupAddress = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          updateDataAnchor($this.u10_1, groupAddress, anchor);
        }
         while (inductionVariable < last);
      var slotsGapOwner = $this.e11_1;
      if (slotsGapOwner >= gapStart) {
        $this.e11_1 = slotsGapOwner + size | 0;
      }
    }
  }
  function insertSlots($this, size, group) {
    if (size > 0) {
      moveSlotGapTo($this, $this.a11_1, group);
      var gapStart = $this.c11_1;
      var gapLen = $this.d11_1;
      if (gapLen < size) {
        var slots = $this.v10_1;
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
        $this.v10_1 = newData;
        gapLen = newGapLen;
      }
      var currentDataEnd = $this.b11_1;
      if (currentDataEnd >= gapStart)
        $this.b11_1 = currentDataEnd + size | 0;
      $this.c11_1 = gapStart + size | 0;
      $this.d11_1 = gapLen - size | 0;
    }
  }
  function removeGroups($this, start, len) {
    var tmp;
    if (len > 0) {
      var anchorsRemoved = false;
      var anchors = $this.w10_1;
      moveGroupGapTo($this, start);
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!anchors.o()) {
        anchorsRemoved = removeAnchors($this, start, len, $this.x10_1);
      }
      $this.y10_1 = start;
      var previousGapLen = $this.z10_1;
      var newGapLen = previousGapLen + len | 0;
      $this.z10_1 = newGapLen;
      var slotsGapOwner = $this.e11_1;
      if (slotsGapOwner > start) {
        var tmp_0 = $this;
        // Inline function 'kotlin.math.max' call
        var b = slotsGapOwner - len | 0;
        tmp_0.e11_1 = Math.max(start, b);
      }
      if ($this.l11_1 >= $this.y10_1) {
        $this.l11_1 = $this.l11_1 - len | 0;
      }
      var parent = $this.m11_1;
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
    var tmp0_safe_receiver = $this.x10_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotWriter.sourceInformationOf.<anonymous>' call
      var tmp0_safe_receiver_0 = $this.p1j(group);
      var tmp_0;
      if (tmp0_safe_receiver_0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SlotWriter.sourceInformationOf.<anonymous>.<anonymous>' call
        tmp_0 = tmp0_safe_receiver.p2(tmp0_safe_receiver_0);
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function removeSlots($this, start, len, group) {
    if (len > 0) {
      var gapLen = $this.d11_1;
      var removeEnd = start + len | 0;
      moveSlotGapTo($this, removeEnd, group);
      $this.c11_1 = start;
      $this.d11_1 = gapLen + len | 0;
      fill_0($this.v10_1, null, start, start + len | 0);
      var currentDataEnd = $this.b11_1;
      if (currentDataEnd >= start)
        $this.b11_1 = currentDataEnd - len | 0;
    }
  }
  function updateNodeOfGroup($this, index, value) {
    var address = groupIndexToAddress($this, index);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(address < $this.u10_1.length ? isNode($this.u10_1, address) : false)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.updateNodeOfGroup.<anonymous>' call
      var message = 'Updating the node of a group at ' + index + ' that was not created with as a node group';
      composeRuntimeError(toString(message));
    }
    $this.v10_1[dataIndexToDataAddress($this, nodeIndex($this.u10_1, $this, address))] = value;
  }
  function updateAnchors($this, previousGapStart, newGapStart) {
    var gapLen = $this.z10_1;
    var size = _get_capacity__a9k9f3($this) - gapLen | 0;
    if (previousGapStart < newGapStart) {
      var index = locationOf($this.w10_1, previousGapStart, size);
      $l$loop_0: while (index < $this.w10_1.i()) {
        var anchor = $this.w10_1.j(index);
        var location = anchor.e16_1;
        if (location < 0) {
          var newLocation = size + location | 0;
          if (newLocation < newGapStart) {
            anchor.e16_1 = size + location | 0;
            index = index + 1 | 0;
          } else
            break $l$loop_0;
        } else
          break $l$loop_0;
      }
    } else {
      var index_0 = locationOf($this.w10_1, newGapStart, size);
      $l$loop_1: while (index_0 < $this.w10_1.i()) {
        var anchor_0 = $this.w10_1.j(index_0);
        var location_0 = anchor_0.e16_1;
        if (location_0 >= 0) {
          anchor_0.e16_1 = -(size - location_0 | 0) | 0;
          index_0 = index_0 + 1 | 0;
        } else
          break $l$loop_1;
      }
    }
  }
  function removeAnchors($this, gapStart, size, sourceInformationMap) {
    var gapLen = $this.z10_1;
    var removeEnd = gapStart + size | 0;
    var groupsSize = _get_capacity__a9k9f3($this) - gapLen | 0;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotWriter.removeAnchors.<anonymous>' call
    var it = locationOf($this.w10_1, gapStart + size | 0, groupsSize);
    var index = it >= $this.w10_1.i() ? it - 1 | 0 : it;
    var removeAnchorEnd = 0;
    var removeAnchorStart = index + 1 | 0;
    $l$loop: while (index >= 0) {
      var anchor = $this.w10_1.j(index);
      var location = $this.h15(anchor);
      if (location >= gapStart) {
        if (location < removeEnd) {
          anchor.e16_1 = IntCompanionObject_instance.MIN_VALUE;
          if (sourceInformationMap == null)
            null;
          else
            sourceInformationMap.h2(anchor);
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
      $this.w10_1.u1(removeAnchorStart, removeAnchorEnd).b1();
    }
    return this_0;
  }
  function moveAnchors($this, originalLocation, newLocation, size) {
    var end = originalLocation + size | 0;
    var groupsSize = $this.i();
    var index = locationOf($this.w10_1, originalLocation, groupsSize);
    // Inline function 'kotlin.collections.mutableListOf' call
    var removedAnchors = ArrayList_init_$Create$();
    if (index >= 0) {
      $l$loop: while (index < $this.w10_1.i()) {
        var anchor = $this.w10_1.j(index);
        var location = $this.h15(anchor);
        if (location >= originalLocation ? location < end : false) {
          removedAnchors.u(anchor);
          $this.w10_1.g1(index);
        } else
          break $l$loop;
      }
    }
    var moveDelta = newLocation - originalLocation | 0;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = removedAnchors.i() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index_0 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = removedAnchors.j(index_0);
        // Inline function 'androidx.compose.runtime.SlotWriter.moveAnchors.<anonymous>' call
        var anchorIndex = $this.h15(item);
        var newAnchorIndex = anchorIndex + moveDelta | 0;
        if (newAnchorIndex >= $this.y10_1) {
          item.e16_1 = -(groupsSize - newAnchorIndex | 0) | 0;
        } else {
          item.e16_1 = newAnchorIndex;
        }
        var insertIndex = locationOf($this.w10_1, newAnchorIndex, groupsSize);
        $this.w10_1.q1(insertIndex, item);
      }
       while (inductionVariable <= last);
  }
  function _get_capacity__a9k9f3($this) {
    return $this.u10_1.length / 5 | 0;
  }
  function groupIndexToAddress($this, index) {
    return index < $this.y10_1 ? index : index + $this.z10_1 | 0;
  }
  function dataIndexToDataAddress($this, dataIndex) {
    return dataIndex < $this.c11_1 ? dataIndex : dataIndex + $this.d11_1 | 0;
  }
  function parent(_this__u8e3s4, $this, index) {
    return parentAnchorToIndex($this, parentAnchor(_this__u8e3s4, groupIndexToAddress($this, index)));
  }
  function dataIndex($this, index) {
    return dataIndex_0($this.u10_1, $this, groupIndexToAddress($this, index));
  }
  function dataIndex_0(_this__u8e3s4, $this, address) {
    return address >= _get_capacity__a9k9f3($this) ? $this.v10_1.length - $this.d11_1 | 0 : dataAnchorToDataIndex($this, dataAnchor(_this__u8e3s4, address), $this.d11_1, $this.v10_1.length);
  }
  function slotIndex(_this__u8e3s4, $this, address) {
    return address >= _get_capacity__a9k9f3($this) ? $this.v10_1.length - $this.d11_1 | 0 : dataAnchorToDataIndex($this, slotAnchor(_this__u8e3s4, address), $this.d11_1, $this.v10_1.length);
  }
  function updateDataIndex(_this__u8e3s4, $this, address, dataIndex) {
    updateDataAnchor(_this__u8e3s4, address, dataIndexToDataAnchor($this, dataIndex, $this.c11_1, $this.d11_1, $this.v10_1.length));
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
    return index < gapStart ? index : -(($this.i() - index | 0) - -2 | 0) | 0;
  }
  function parentAnchorToIndex($this, index) {
    return index > -2 ? index : ($this.i() + index | 0) - -2 | 0;
  }
  function SlotWriter$groupSlots$1($start, $end, this$0) {
    this.h1k_1 = $end;
    this.i1k_1 = this$0;
    this.g1k_1 = $start;
  }
  protoOf(SlotWriter$groupSlots$1).x = function () {
    return this.g1k_1 < this.h1k_1;
  };
  protoOf(SlotWriter$groupSlots$1).z = function () {
    var tmp;
    if (this.x()) {
      var tmp_0 = this.i1k_1.v10_1;
      var tmp1 = this.g1k_1;
      this.g1k_1 = tmp1 + 1 | 0;
      tmp = tmp_0[dataIndexToDataAddress(this.i1k_1, tmp1)];
    } else {
      tmp = null;
    }
    return tmp;
  };
  function SlotWriter(table) {
    this.t10_1 = table;
    this.u10_1 = this.t10_1.vy_1;
    this.v10_1 = this.t10_1.xy_1;
    this.w10_1 = this.t10_1.dz_1;
    this.x10_1 = this.t10_1.ez_1;
    this.y10_1 = this.t10_1.wy_1;
    this.z10_1 = (this.u10_1.length / 5 | 0) - this.t10_1.wy_1 | 0;
    this.a11_1 = 0;
    this.b11_1 = 0;
    this.c11_1 = this.t10_1.yy_1;
    this.d11_1 = this.v10_1.length - this.t10_1.yy_1 | 0;
    this.e11_1 = this.t10_1.wy_1;
    this.f11_1 = 0;
    this.g11_1 = 0;
    this.h11_1 = new IntStack();
    this.i11_1 = new IntStack();
    this.j11_1 = new IntStack();
    this.k11_1 = 0;
    this.l11_1 = this.t10_1.wy_1;
    this.m11_1 = -1;
    this.n11_1 = false;
    this.o11_1 = null;
  }
  protoOf(SlotWriter).i19 = function () {
    return this.k11_1 < this.l11_1 ? isNode(this.u10_1, groupIndexToAddress(this, this.k11_1)) : false;
  };
  protoOf(SlotWriter).m14 = function (index) {
    return isNode(this.u10_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).n14 = function (index) {
    return nodeCount(this.u10_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).z11 = function (index) {
    return key(this.u10_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).y11 = function (index) {
    var address = groupIndexToAddress(this, index);
    return hasObjectKey(this.u10_1, address) ? this.v10_1[objectKeyIndex(this.u10_1, address)] : null;
  };
  protoOf(SlotWriter).s13 = function (index) {
    return groupSize(this.u10_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).x11 = function (index) {
    var address = groupIndexToAddress(this, index);
    return hasAux(this.u10_1, address) ? this.v10_1[auxIndex(this.u10_1, this, address)] : Companion_getInstance_0().k12_1;
  };
  protoOf(SlotWriter).j1k = function (index) {
    return (index > this.m11_1 ? index < this.l11_1 : false) ? true : this.m11_1 === 0 ? index === 0 : false;
  };
  protoOf(SlotWriter).k1k = function (index) {
    return this.l1k(index, this.k11_1);
  };
  protoOf(SlotWriter).l1k = function (index, group) {
    var tmp;
    if (group === this.m11_1) {
      tmp = this.l11_1;
    } else if (group > this.h11_1.n1k(0)) {
      tmp = group + this.s13(group) | 0;
    } else {
      var openIndex = this.h11_1.m1k(group);
      tmp = openIndex < 0 ? group + this.s13(group) | 0 : (_get_capacity__a9k9f3(this) - this.z10_1 | 0) - this.i11_1.l14(openIndex) | 0;
    }
    var end = tmp;
    return index > group ? index < end : false;
  };
  protoOf(SlotWriter).l16 = function (index) {
    var address = groupIndexToAddress(this, index);
    return isNode(this.u10_1, address) ? this.v10_1[dataIndexToDataAddress(this, nodeIndex(this.u10_1, this, address))] : null;
  };
  protoOf(SlotWriter).o1k = function (anchor) {
    return this.l16(anchor.p1k(this));
  };
  protoOf(SlotWriter).a12 = function (index) {
    return parent(this.u10_1, this, index);
  };
  protoOf(SlotWriter).r10 = function () {
    this.n11_1 = true;
    if (this.h11_1.o()) {
      moveGroupGapTo(this, this.i());
      moveSlotGapTo(this, this.v10_1.length - this.d11_1 | 0, this.y10_1);
      clearSlotGap(this);
      recalculateMarks(this);
    }
    this.t10_1.r1j(this, this.u10_1, this.y10_1, this.v10_1, this.c11_1, this.w10_1, this.x10_1);
  };
  protoOf(SlotWriter).q1k = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.f11_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.reset.<anonymous>' call
      var message = 'Cannot reset when inserting';
      composeRuntimeError(toString(message));
    }
    recalculateMarks(this);
    this.k11_1 = 0;
    this.l11_1 = _get_capacity__a9k9f3(this) - this.z10_1 | 0;
    this.a11_1 = 0;
    this.b11_1 = 0;
    this.g11_1 = 0;
  };
  protoOf(SlotWriter).s18 = function (value) {
    var result = this.r1k();
    this.s1k(value);
    return result;
  };
  protoOf(SlotWriter).b1k = function (value) {
    var address = groupIndexToAddress(this, this.k11_1);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!hasAux(this.u10_1, address)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.updateAux.<anonymous>' call
      var message = 'Updating the data of a group that was not created with a data slot';
      composeRuntimeError(toString(message));
    }
    this.v10_1[dataIndexToDataAddress(this, auxIndex(this.u10_1, this, address))] = value;
  };
  protoOf(SlotWriter).s19 = function (sourceInformation) {
    if (this.f11_1 > 0) {
      groupSourceInformationFor(this, this.m11_1, sourceInformation);
    }
  };
  protoOf(SlotWriter).u19 = function (key, value) {
    if (this.f11_1 > 0) {
      groupSourceInformationFor(this, this.m11_1, null).t1k(key, value);
    }
  };
  protoOf(SlotWriter).w19 = function () {
    if (this.f11_1 > 0) {
      groupSourceInformationFor(this, this.m11_1, null).u1k();
    }
  };
  protoOf(SlotWriter).c1k = function (value) {
    return updateNodeOfGroup(this, this.k11_1, value);
  };
  protoOf(SlotWriter).v1k = function (anchor, value) {
    return updateNodeOfGroup(this, anchor.p1k(this), value);
  };
  protoOf(SlotWriter).s1k = function (value) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.a11_1 <= this.b11_1)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.set.<anonymous>' call
      var message = 'Writing to an invalid slot';
      composeRuntimeError(toString(message));
    }
    this.v10_1[dataIndexToDataAddress(this, this.a11_1 - 1 | 0)] = value;
  };
  protoOf(SlotWriter).w1k = function (index, value) {
    return this.x1k(this.k11_1, index, value);
  };
  protoOf(SlotWriter).x1k = function (group, index, value) {
    var address = groupIndexToAddress(this, group);
    var slotsStart = slotIndex(this.u10_1, this, address);
    var slotsEnd = dataIndex_0(this.u10_1, this, groupIndexToAddress(this, group + 1 | 0));
    var slotsIndex = slotsStart + index | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(slotsIndex >= slotsStart ? slotsIndex < slotsEnd : false)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.set.<anonymous>' call
      var message = 'Write to an invalid slot index ' + index + ' for group ' + group;
      composeRuntimeError(toString(message));
    }
    var slotAddress = dataIndexToDataAddress(this, slotsIndex);
    var result = this.v10_1[slotAddress];
    this.v10_1[slotAddress] = value;
    return result;
  };
  protoOf(SlotWriter).r1k = function () {
    if (this.f11_1 > 0) {
      insertSlots(this, 1, this.m11_1);
    }
    var tmp = this.v10_1;
    var tmp1 = this.a11_1;
    this.a11_1 = tmp1 + 1 | 0;
    return tmp[dataIndexToDataAddress(this, tmp1)];
  };
  protoOf(SlotWriter).z1e = function (anchor, index) {
    return this.c1f(this.h15(anchor), index);
  };
  protoOf(SlotWriter).c1f = function (groupIndex, index) {
    var address = groupIndexToAddress(this, groupIndex);
    var slotsStart = slotIndex(this.u10_1, this, address);
    var slotsEnd = dataIndex_0(this.u10_1, this, groupIndexToAddress(this, groupIndex + 1 | 0));
    var slotsIndex = slotsStart + index | 0;
    if (!(slotsStart <= slotsIndex ? slotsIndex < slotsEnd : false)) {
      return Companion_getInstance_0().k12_1;
    }
    var slotAddress = dataIndexToDataAddress(this, slotsIndex);
    return this.v10_1[slotAddress];
  };
  protoOf(SlotWriter).z1j = function (amount) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(amount >= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      var message = 'Cannot seek backwards';
      composeRuntimeError(toString(message));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.f11_1 <= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      var message_0 = 'Cannot call seek() while inserting';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    if (amount === 0)
      return Unit_instance;
    var index = this.k11_1 + amount | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(index >= this.m11_1 ? index <= this.l11_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      var message_1 = 'Cannot seek outside the current group (' + this.m11_1 + '-' + this.l11_1 + ')';
      composeRuntimeError(toString(message_1));
    }
    this.k11_1 = index;
    var newSlot = dataIndex_0(this.u10_1, this, groupIndexToAddress(this, index));
    this.a11_1 = newSlot;
    this.b11_1 = newSlot;
  };
  protoOf(SlotWriter).e12 = function () {
    var newGroup = this.l11_1;
    this.k11_1 = newGroup;
    this.a11_1 = dataIndex_0(this.u10_1, this, groupIndexToAddress(this, newGroup));
  };
  protoOf(SlotWriter).a13 = function () {
    var tmp1 = this.f11_1;
    this.f11_1 = tmp1 + 1 | 0;
    if (tmp1 === 0) {
      saveCurrentGroupEnd(this);
    }
  };
  protoOf(SlotWriter).f14 = function () {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.f11_1 > 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.endInsert.<anonymous>' call
      var message = 'Unbalanced begin/end insert';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.f11_1 = this.f11_1 - 1 | 0;
    if (this.f11_1 === 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(this.j11_1.i() === this.h11_1.i())) {
        // Inline function 'androidx.compose.runtime.SlotWriter.endInsert.<anonymous>' call
        var message_0 = 'startGroup/endGroup mismatch while inserting';
        composeRuntimeError(toString(message_0));
      }
      restoreCurrentGroupEnd(this);
    }
  };
  protoOf(SlotWriter).h12 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.f11_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.startGroup.<anonymous>' call
      var message = 'Key must be supplied when inserting';
      composeRuntimeError(toString(message));
    }
    startGroup_1(this, 0, Companion_getInstance_0().k12_1, false, Companion_getInstance_0().k12_1);
  };
  protoOf(SlotWriter).l12 = function (key, dataKey) {
    return startGroup_1(this, key, dataKey, false, Companion_getInstance_0().k12_1);
  };
  protoOf(SlotWriter).n12 = function (key, objectKey) {
    return startGroup_1(this, key, objectKey, true, Companion_getInstance_0().k12_1);
  };
  protoOf(SlotWriter).m12 = function (key, objectKey, aux) {
    return startGroup_1(this, key, objectKey, false, aux);
  };
  protoOf(SlotWriter).e14 = function () {
    var inserting = this.f11_1 > 0;
    var currentGroup = this.k11_1;
    var currentGroupEnd = this.l11_1;
    var groupIndex = this.m11_1;
    var groupAddress = groupIndexToAddress(this, groupIndex);
    var newNodes = this.g11_1;
    var newGroupSize = currentGroup - groupIndex | 0;
    var isNode_0 = isNode(this.u10_1, groupAddress);
    if (inserting) {
      updateGroupSize(this.u10_1, groupAddress, newGroupSize);
      updateNodeCount_0(this.u10_1, groupAddress, newNodes);
      this.g11_1 = this.j11_1.o13() + (isNode_0 ? 1 : newNodes) | 0;
      this.m11_1 = parent(this.u10_1, this, groupIndex);
    } else {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(currentGroup === currentGroupEnd)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.endGroup.<anonymous>' call
        var message = 'Expected to be at the end of a group';
        composeRuntimeError(toString(message));
      }
      var oldGroupSize = groupSize(this.u10_1, groupAddress);
      var oldNodes = nodeCount(this.u10_1, groupAddress);
      updateGroupSize(this.u10_1, groupAddress, newGroupSize);
      updateNodeCount_0(this.u10_1, groupAddress, newNodes);
      var newParent = this.h11_1.o13();
      restoreCurrentGroupEnd(this);
      this.m11_1 = newParent;
      var groupParent = parent(this.u10_1, this, groupIndex);
      this.g11_1 = this.j11_1.o13();
      if (groupParent === newParent) {
        this.g11_1 = this.g11_1 + (isNode_0 ? 0 : newNodes - oldNodes | 0) | 0;
      } else {
        var groupSizeDelta = newGroupSize - oldGroupSize | 0;
        var nodesDelta = isNode_0 ? 0 : newNodes - oldNodes | 0;
        if (!(groupSizeDelta === 0) ? true : !(nodesDelta === 0)) {
          var current = groupParent;
          while ((!(current === 0) ? !(current === newParent) : false) ? !(nodesDelta === 0) ? true : !(groupSizeDelta === 0) : false) {
            var currentAddress = groupIndexToAddress(this, current);
            if (!(groupSizeDelta === 0)) {
              var newSize = groupSize(this.u10_1, currentAddress) + groupSizeDelta | 0;
              updateGroupSize(this.u10_1, currentAddress, newSize);
            }
            if (!(nodesDelta === 0)) {
              updateNodeCount_0(this.u10_1, currentAddress, nodeCount(this.u10_1, currentAddress) + nodesDelta | 0);
            }
            if (isNode(this.u10_1, currentAddress))
              nodesDelta = 0;
            current = parent(this.u10_1, this, current);
          }
        }
        this.g11_1 = this.g11_1 + nodesDelta | 0;
      }
    }
    return newNodes;
  };
  protoOf(SlotWriter).y1k = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.f11_1 <= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.ensureStarted.<anonymous>' call
      var message = 'Cannot call ensureStarted() while inserting';
      composeRuntimeError(toString(message));
    }
    var parent = this.m11_1;
    if (!(parent === index)) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(index >= parent ? index < this.l11_1 : false)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.ensureStarted.<anonymous>' call
        var message_0 = 'Started group at ' + index + ' must be a subgroup of the group at ' + parent;
        composeRuntimeError(toString(message_0));
      }
      var oldCurrent = this.k11_1;
      var oldCurrentSlot = this.a11_1;
      var oldCurrentSlotEnd = this.b11_1;
      this.k11_1 = index;
      this.h12();
      this.k11_1 = oldCurrent;
      this.a11_1 = oldCurrentSlot;
      this.b11_1 = oldCurrentSlotEnd;
    }
  };
  protoOf(SlotWriter).z1k = function (anchor) {
    return this.y1k(anchor.p1k(this));
  };
  protoOf(SlotWriter).u11 = function () {
    var groupAddress = groupIndexToAddress(this, this.k11_1);
    var newGroup = this.k11_1 + groupSize(this.u10_1, groupAddress) | 0;
    this.k11_1 = newGroup;
    this.a11_1 = dataIndex_0(this.u10_1, this, groupIndexToAddress(this, newGroup));
    return isNode(this.u10_1, groupAddress) ? 1 : nodeCount(this.u10_1, groupAddress);
  };
  protoOf(SlotWriter).h1a = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.f11_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.removeGroup.<anonymous>' call
      var message = 'Cannot remove group while inserting';
      composeRuntimeError(toString(message));
    }
    var oldGroup = this.k11_1;
    var oldSlot = this.a11_1;
    var count = this.u11();
    var tmp0_safe_receiver = sourceInformationOf(this, this.m11_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotWriter.removeGroup.<anonymous>' call
      var tmp0_safe_receiver_0 = this.p1j(oldGroup);
      var tmp;
      if (tmp0_safe_receiver_0 == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SlotWriter.removeGroup.<anonymous>.<anonymous>' call
        tmp = tmp0_safe_receiver.a1l(tmp0_safe_receiver_0);
      }
    }
    var tmp1_safe_receiver = this.o11_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      while (tmp1_safe_receiver.g19() ? tmp1_safe_receiver.d18() >= oldGroup : false) {
        tmp1_safe_receiver.e1k();
      }
    }
    var anchorsRemoved = removeGroups(this, oldGroup, this.k11_1 - oldGroup | 0);
    removeSlots(this, oldSlot, this.a11_1 - oldSlot | 0, oldGroup - 1 | 0);
    this.k11_1 = oldGroup;
    this.a11_1 = oldSlot;
    this.g11_1 = this.g11_1 - count | 0;
    return anchorsRemoved;
  };
  protoOf(SlotWriter).e1a = function () {
    var start = dataIndex_0(this.u10_1, this, groupIndexToAddress(this, this.k11_1));
    var end = dataIndex_0(this.u10_1, this, groupIndexToAddress(this, this.k11_1 + this.s13(this.k11_1) | 0));
    return new SlotWriter$groupSlots$1(start, end, this);
  };
  protoOf(SlotWriter).b1l = function (offset) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.f11_1 === 0)) {
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
    var current = this.k11_1;
    var parent = this.m11_1;
    var parentEnd = this.l11_1;
    var count = offset;
    var groupToMove = current;
    while (count > 0) {
      groupToMove = groupToMove + groupSize(this.u10_1, groupIndexToAddress(this, groupToMove)) | 0;
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(groupToMove <= parentEnd)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
        var message_1 = 'Parameter offset is out of bounds';
        composeRuntimeError(toString(message_1));
      }
      count = count - 1 | 0;
    }
    var moveLen = groupSize(this.u10_1, groupIndexToAddress(this, groupToMove));
    var currentSlot = this.a11_1;
    var dataStart = dataIndex_0(this.u10_1, this, groupIndexToAddress(this, groupToMove));
    var dataEnd = dataIndex_0(this.u10_1, this, groupIndexToAddress(this, groupToMove + moveLen | 0));
    var moveDataLen = dataEnd - dataStart | 0;
    // Inline function 'kotlin.math.max' call
    var a = this.k11_1 - 1 | 0;
    var tmp$ret$3 = Math.max(a, 0);
    insertSlots(this, moveDataLen, tmp$ret$3);
    insertGroups(this, moveLen);
    var groups = this.u10_1;
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
      var slots = this.v10_1;
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = dataIndexToDataAddress(this, dataStart + moveDataLen | 0);
      var endIndex_0 = dataIndexToDataAddress(this, dataEnd + moveDataLen | 0);
      arrayCopy(slots, slots, currentSlot, startIndex, endIndex_0);
    }
    var dataMoveDistance = (dataStart + moveDataLen | 0) - currentSlot | 0;
    var slotsGapStart = this.c11_1;
    var slotsGapLen = this.d11_1;
    var slotsCapacity = this.v10_1.length;
    var slotsGapOwner = this.e11_1;
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
    fixParentAnchorsFor(this, parent, this.l11_1, current);
    if (moveDataLen > 0) {
      removeSlots(this, dataStart + moveDataLen | 0, moveDataLen, (groupToMove + moveLen | 0) - 1 | 0);
    }
  };
  protoOf(SlotWriter).c1l = function (anchor, offset, writer) {
    runtimeCheck(writer.f11_1 > 0);
    runtimeCheck(this.f11_1 === 0);
    runtimeCheck(anchor.g1c());
    var location = this.h15(anchor) + offset | 0;
    var currentGroup = this.k11_1;
    runtimeCheck(currentGroup <= location ? location < this.l11_1 : false);
    var parent = this.a12(location);
    var size = this.s13(location);
    var nodes = this.m14(location) ? 1 : this.n14(location);
    var result = moveGroup$default(Companion_instance_4, this, location, writer, false, false);
    updateContainsMark(this, parent);
    var current = parent;
    var updatingNodes = nodes > 0;
    while (current >= currentGroup) {
      var currentAddress = groupIndexToAddress(this, current);
      updateGroupSize(this.u10_1, currentAddress, groupSize(this.u10_1, currentAddress) - size | 0);
      if (updatingNodes) {
        if (isNode(this.u10_1, currentAddress))
          updatingNodes = false;
        else {
          updateNodeCount_0(this.u10_1, currentAddress, nodeCount(this.u10_1, currentAddress) - nodes | 0);
        }
      }
      current = this.a12(current);
    }
    if (updatingNodes) {
      runtimeCheck(this.g11_1 >= nodes);
      this.g11_1 = this.g11_1 - nodes | 0;
    }
    return result;
  };
  protoOf(SlotWriter).d1l = function (table, index, removeSourceGroup) {
    runtimeCheck(this.f11_1 > 0);
    if (((index === 0 ? this.k11_1 === 0 : false) ? this.t10_1.wy_1 === 0 : false) ? groupSize(table.vy_1, index) === table.wy_1 : false) {
      var myGroups = this.u10_1;
      var mySlots = this.v10_1;
      var myAnchors = this.w10_1;
      var mySourceInformation = this.x10_1;
      var groups = table.vy_1;
      var groupsSize = table.wy_1;
      var slots = table.xy_1;
      var slotsSize = table.yy_1;
      var sourceInformation = table.ez_1;
      this.u10_1 = groups;
      this.v10_1 = slots;
      this.w10_1 = table.dz_1;
      this.y10_1 = groupsSize;
      this.z10_1 = (groups.length / 5 | 0) - groupsSize | 0;
      this.c11_1 = slotsSize;
      this.d11_1 = slots.length - slotsSize | 0;
      this.e11_1 = groupsSize;
      this.x10_1 = sourceInformation;
      table.s1j(myGroups, 0, mySlots, 0, myAnchors, mySourceInformation);
      return this.w10_1;
    }
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = table.d12();
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveFrom.<anonymous>' call
      tmp = moveGroup(Companion_instance_4, writer, index, this, true, true, removeSourceGroup);
    }finally {
      writer.r10();
    }
    return tmp;
  };
  protoOf(SlotWriter).e1l = function (offset, table, index) {
    runtimeCheck(this.f11_1 <= 0 ? this.s13(this.k11_1 + offset | 0) === 1 : false);
    var previousCurrentGroup = this.k11_1;
    var previousCurrentSlot = this.a11_1;
    var previousCurrentSlotEnd = this.b11_1;
    this.z1j(offset);
    this.h12();
    this.a13();
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = table.d12();
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveIntoGroupFrom.<anonymous>' call
      tmp = moveGroup$default(Companion_instance_4, writer, index, this, false, true);
    }finally {
      writer.r10();
    }
    var anchors = tmp;
    this.f14();
    this.e14();
    this.k11_1 = previousCurrentGroup;
    this.a11_1 = previousCurrentSlot;
    this.b11_1 = previousCurrentSlotEnd;
    return anchors;
  };
  protoOf(SlotWriter).b13 = function (index) {
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var this_0 = this.w10_1;
    var effectiveSize = this.i();
    var location = search$accessor$145qfty(this_0, index, effectiveSize);
    var tmp;
    if (location < 0) {
      // Inline function 'androidx.compose.runtime.SlotWriter.anchor.<anonymous>' call
      var anchor = new Anchor(index <= this.y10_1 ? index : -(this.i() - index | 0) | 0);
      this_0.q1(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = this_0.j(location);
    }
    return tmp;
  };
  protoOf(SlotWriter).f1l = function (group) {
    var groupAddress = groupIndexToAddress(this, group);
    if (!hasMark(this.u10_1, groupAddress)) {
      updateMark(this.u10_1, groupAddress, true);
      if (!containsMark(this.u10_1, groupAddress)) {
        updateContainsMark(this, this.a12(group));
      }
    }
  };
  protoOf(SlotWriter).w14 = function (group, $super) {
    group = group === VOID ? this.m11_1 : group;
    var tmp;
    if ($super === VOID) {
      this.f1l(group);
      tmp = Unit_instance;
    } else {
      tmp = $super.f1l.call(this, group);
    }
    return tmp;
  };
  protoOf(SlotWriter).h15 = function (anchor) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotWriter.anchorIndex.<anonymous>' call
    var it = anchor.e16_1;
    return it < 0 ? this.i() + it | 0 : it;
  };
  protoOf(SlotWriter).toString = function () {
    return 'SlotWriter(current = ' + this.k11_1 + ' end=' + this.l11_1 + ' size = ' + this.i() + ' ' + ('gap=' + this.y10_1 + '-' + (this.y10_1 + this.z10_1 | 0) + ')');
  };
  protoOf(SlotWriter).p1j = function (group) {
    return (0 <= group ? group < this.i() : false) ? find(this.w10_1, group, this.i()) : null;
  };
  protoOf(SlotWriter).i = function () {
    return _get_capacity__a9k9f3(this) - this.z10_1 | 0;
  };
  function Anchor(loc) {
    this.e16_1 = loc;
  }
  protoOf(Anchor).g1c = function () {
    return !(this.e16_1 === IntCompanionObject_instance.MIN_VALUE);
  };
  protoOf(Anchor).h19 = function (slots) {
    return slots.h15(this);
  };
  protoOf(Anchor).p1k = function (writer) {
    return writer.h15(this);
  };
  protoOf(Anchor).toString = function () {
    return anyToString(this) + '{ location = ' + this.e16_1 + ' }';
  };
  function openInformation($this) {
    var tmp0_safe_receiver = $this.w1j_1;
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
        var index = tmp0_safe_receiver.i() - 1 | 0;
        while (index >= 0) {
          var value = tmp0_safe_receiver.j(index);
          // Inline function 'androidx.compose.runtime.GroupSourceInformation.openInformation.<anonymous>.<anonymous>' call
          var tmp_0;
          if (value instanceof GroupSourceInformation) {
            tmp_0 = !value.x1j_1;
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
    var tmp0_elvis_lhs = $this.w1j_1;
    var groups = tmp0_elvis_lhs == null ? ArrayList_init_$Create$() : tmp0_elvis_lhs;
    $this.w1j_1 = groups;
    groups.u(group);
  }
  function hasAnchor($this, anchor) {
    var tmp0_safe_receiver = $this.w1j_1;
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
        var last = tmp0_safe_receiver.i() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = tmp0_safe_receiver.j(index);
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
    this.u1j_1 = key;
    this.v1j_1 = sourceInformation;
    this.w1j_1 = null;
    this.x1j_1 = false;
  }
  protoOf(GroupSourceInformation).t1k = function (key, sourceInformation) {
    add(openInformation(this), new GroupSourceInformation(key, sourceInformation));
  };
  protoOf(GroupSourceInformation).u1k = function () {
    openInformation(this).r10();
  };
  protoOf(GroupSourceInformation).a1k = function (writer, group) {
    add(openInformation(this), writer.b13(group));
  };
  protoOf(GroupSourceInformation).g1l = function (table, group) {
    add(openInformation(this), table.b13(group));
  };
  protoOf(GroupSourceInformation).y1j = function (writer, predecessor, group) {
    var tmp0_elvis_lhs = this.w1j_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = ArrayList_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.GroupSourceInformation.addGroupAfter.<anonymous>' call
      this.w1j_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var groups = tmp;
    var tmp_0;
    if (predecessor >= 0) {
      var anchor = writer.p1j(predecessor);
      var tmp_1;
      if (!(anchor == null)) {
        var tmp$ret$2;
        $l$block: {
          // Inline function 'androidx.compose.runtime.fastIndexOf' call
          var index = 0;
          var size = groups.i();
          while (index < size) {
            var value = groups.j(index);
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
    groups.q1(index_0, writer.b13(group));
  };
  protoOf(GroupSourceInformation).r10 = function () {
    this.x1j_1 = true;
  };
  protoOf(GroupSourceInformation).a1l = function (anchor) {
    var groups = this.w1j_1;
    if (!(groups == null)) {
      var index = groups.i() - 1 | 0;
      while (index >= 0) {
        var item = groups.j(index);
        if (item instanceof Anchor) {
          if (equals(item, anchor)) {
            groups.g1(index);
          }
        } else {
          if (item instanceof GroupSourceInformation)
            if (!item.a1l(anchor)) {
              groups.g1(index);
            }
        }
        index = index - 1 | 0;
      }
      if (groups.o()) {
        this.w1j_1 = null;
        return false;
      }
      return true;
    }
    return true;
  };
  function node(_this__u8e3s4, $this, index) {
    var tmp;
    if (isNode(_this__u8e3s4, index)) {
      tmp = $this.h10_1[nodeIndex_0(_this__u8e3s4, index)];
    } else {
      tmp = Companion_getInstance_0().k12_1;
    }
    return tmp;
  }
  function aux(_this__u8e3s4, $this, index) {
    var tmp;
    if (hasAux(_this__u8e3s4, index)) {
      tmp = $this.h10_1[auxIndex_0(_this__u8e3s4, index)];
    } else {
      tmp = Companion_getInstance_0().k12_1;
    }
    return tmp;
  }
  function objectKey(_this__u8e3s4, $this, index) {
    var tmp;
    if (hasObjectKey(_this__u8e3s4, index)) {
      tmp = $this.h10_1[objectKeyIndex(_this__u8e3s4, index)];
    } else {
      tmp = null;
    }
    return tmp;
  }
  function SlotReader(table) {
    this.e10_1 = table;
    this.f10_1 = this.e10_1.vy_1;
    this.g10_1 = this.e10_1.wy_1;
    this.h10_1 = this.e10_1.xy_1;
    this.i10_1 = this.e10_1.yy_1;
    this.j10_1 = null;
    this.k10_1 = false;
    this.l10_1 = 0;
    this.m10_1 = this.g10_1;
    this.n10_1 = -1;
    this.o10_1 = 0;
    this.p10_1 = 0;
    this.q10_1 = 0;
  }
  protoOf(SlotReader).i = function () {
    return this.g10_1;
  };
  protoOf(SlotReader).a12 = function (index) {
    return parentAnchor(this.f10_1, index);
  };
  protoOf(SlotReader).i19 = function () {
    return isNode(this.f10_1, this.l10_1);
  };
  protoOf(SlotReader).m14 = function (index) {
    return isNode(this.f10_1, index);
  };
  protoOf(SlotReader).n14 = function (index) {
    return nodeCount(this.f10_1, index);
  };
  protoOf(SlotReader).l16 = function (index) {
    return isNode(this.f10_1, index) ? node(this.f10_1, this, index) : null;
  };
  protoOf(SlotReader).y13 = function () {
    return this.h14() ? true : this.l10_1 === this.m10_1;
  };
  protoOf(SlotReader).h14 = function () {
    return this.o10_1 > 0;
  };
  protoOf(SlotReader).h1l = function () {
    return groupSize(this.f10_1, this.l10_1);
  };
  protoOf(SlotReader).s13 = function (index) {
    return groupSize(this.f10_1, index);
  };
  protoOf(SlotReader).x13 = function () {
    return this.m10_1;
  };
  protoOf(SlotReader).w12 = function () {
    var tmp;
    if (this.l10_1 < this.m10_1) {
      tmp = key(this.f10_1, this.l10_1);
    } else {
      tmp = 0;
    }
    return tmp;
  };
  protoOf(SlotReader).z11 = function (index) {
    return key(this.f10_1, index);
  };
  protoOf(SlotReader).q18 = function () {
    return this.p10_1 - slotAnchor(this.f10_1, this.n10_1) | 0;
  };
  protoOf(SlotReader).p14 = function (index) {
    return hasObjectKey(this.f10_1, index);
  };
  protoOf(SlotReader).y12 = function () {
    return this.l10_1 < this.m10_1 ? objectKey(this.f10_1, this, this.l10_1) : null;
  };
  protoOf(SlotReader).y11 = function (index) {
    return objectKey(this.f10_1, this, index);
  };
  protoOf(SlotReader).g12 = function () {
    return this.l10_1 < this.m10_1 ? aux(this.f10_1, this, this.l10_1) : 0;
  };
  protoOf(SlotReader).x11 = function (index) {
    return aux(this.f10_1, this, index);
  };
  protoOf(SlotReader).j17 = function (index) {
    return hasMark(this.f10_1, index);
  };
  protoOf(SlotReader).t16 = function (index) {
    return containsMark(this.f10_1, index);
  };
  protoOf(SlotReader).q14 = function () {
    return this.n10_1 >= 0 ? nodeCount(this.f10_1, this.n10_1) : 0;
  };
  protoOf(SlotReader).u16 = function (group, index) {
    var start = slotAnchor(this.f10_1, group);
    var next = group + 1 | 0;
    var end = next < this.g10_1 ? dataAnchor(this.f10_1, next) : this.i10_1;
    var address = start + index | 0;
    return address < end ? this.h10_1[address] : Companion_getInstance_0().k12_1;
  };
  protoOf(SlotReader).z = function () {
    if (this.o10_1 > 0 ? true : this.p10_1 >= this.q10_1)
      return Companion_getInstance_0().k12_1;
    var tmp1 = this.p10_1;
    this.p10_1 = tmp1 + 1 | 0;
    return this.h10_1[tmp1];
  };
  protoOf(SlotReader).j12 = function () {
    this.o10_1 = this.o10_1 + 1 | 0;
  };
  protoOf(SlotReader).d14 = function () {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.o10_1 > 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.endEmpty.<anonymous>' call
      var message = 'Unbalanced begin/end empty';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.o10_1 = this.o10_1 - 1 | 0;
  };
  protoOf(SlotReader).r10 = function () {
    this.k10_1 = true;
    this.e10_1.q1j(this, this.j10_1);
  };
  protoOf(SlotReader).h12 = function () {
    if (this.o10_1 <= 0) {
      var parent = this.n10_1;
      var currentGroup = this.l10_1;
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(parentAnchor(this.f10_1, currentGroup) === parent)) {
        // Inline function 'androidx.compose.runtime.SlotReader.startGroup.<anonymous>' call
        var message = 'Invalid slot table detected';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      var tmp0_safe_receiver = this.j10_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.p2(this.b13(parent));
      if (tmp1_safe_receiver == null)
        null;
      else {
        tmp1_safe_receiver.g1l(this.e10_1, currentGroup);
      }
      this.n10_1 = currentGroup;
      this.m10_1 = currentGroup + groupSize(this.f10_1, currentGroup) | 0;
      this.l10_1 = currentGroup + 1 | 0;
      this.p10_1 = slotAnchor(this.f10_1, currentGroup);
      this.q10_1 = currentGroup >= (this.g10_1 - 1 | 0) ? this.i10_1 : dataAnchor(this.f10_1, currentGroup + 1 | 0);
    }
  };
  protoOf(SlotReader).i12 = function () {
    if (this.o10_1 <= 0) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!isNode(this.f10_1, this.l10_1)) {
        // Inline function 'androidx.compose.runtime.SlotReader.startNode.<anonymous>' call
        var message = 'Expected a node group';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      this.h12();
    }
  };
  protoOf(SlotReader).u11 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.o10_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.skipGroup.<anonymous>' call
      var message = 'Cannot skip while in an empty region';
      composeRuntimeError(toString(message));
    }
    var count = isNode(this.f10_1, this.l10_1) ? 1 : nodeCount(this.f10_1, this.l10_1);
    this.l10_1 = this.l10_1 + groupSize(this.f10_1, this.l10_1) | 0;
    return count;
  };
  protoOf(SlotReader).e12 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.o10_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.skipToGroupEnd.<anonymous>' call
      var message = 'Cannot skip the enclosing group while in an empty region';
      composeRuntimeError(toString(message));
    }
    this.l10_1 = this.m10_1;
  };
  protoOf(SlotReader).l13 = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.o10_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.reposition.<anonymous>' call
      var message = 'Cannot reposition while in an empty region';
      composeRuntimeError(toString(message));
    }
    this.l10_1 = index;
    var parent = index < this.g10_1 ? parentAnchor(this.f10_1, index) : -1;
    this.n10_1 = parent;
    if (parent < 0)
      this.m10_1 = this.g10_1;
    else
      this.m10_1 = parent + groupSize(this.f10_1, parent) | 0;
    this.p10_1 = 0;
    this.q10_1 = 0;
  };
  protoOf(SlotReader).k14 = function (index) {
    var newCurrentEnd = index + groupSize(this.f10_1, index) | 0;
    var current = this.l10_1;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(current >= index ? current <= newCurrentEnd : false)) {
      // Inline function 'androidx.compose.runtime.SlotReader.restoreParent.<anonymous>' call
      var message = 'Index ' + index + ' is not a parent of ' + current;
      composeRuntimeError(toString(message));
    }
    this.n10_1 = index;
    this.m10_1 = newCurrentEnd;
    this.p10_1 = 0;
    this.q10_1 = 0;
  };
  protoOf(SlotReader).b14 = function () {
    if (this.o10_1 === 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(this.l10_1 === this.m10_1)) {
        // Inline function 'androidx.compose.runtime.SlotReader.endGroup.<anonymous>' call
        var message = 'endGroup() not called at the end of a group';
        composeRuntimeError(toString(message));
      }
      var parent = parentAnchor(this.f10_1, this.n10_1);
      this.n10_1 = parent;
      this.m10_1 = parent < 0 ? this.g10_1 : parent + groupSize(this.f10_1, parent) | 0;
    }
  };
  protoOf(SlotReader).x12 = function () {
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    if (this.o10_1 > 0)
      return result;
    var index = 0;
    var childIndex = this.l10_1;
    while (childIndex < this.m10_1) {
      var tmp = key(this.f10_1, childIndex);
      var tmp_0 = objectKey(this.f10_1, this, childIndex);
      var tmp_1 = childIndex;
      var tmp_2 = isNode(this.f10_1, childIndex) ? 1 : nodeCount(this.f10_1, childIndex);
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      result.u(new KeyInfo(tmp, tmp_0, tmp_1, tmp_2, tmp0));
      childIndex = childIndex + groupSize(this.f10_1, childIndex) | 0;
    }
    return result;
  };
  protoOf(SlotReader).toString = function () {
    return 'SlotReader(current=' + this.l10_1 + ', key=' + this.w12() + ', ' + ('parent=' + this.n10_1 + ', end=' + this.m10_1 + ')');
  };
  protoOf(SlotReader).b13 = function (index) {
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var this_0 = this.e10_1.dz_1;
    var effectiveSize = this.g10_1;
    var location = search$accessor$145qfty(this_0, index, effectiveSize);
    var tmp;
    if (location < 0) {
      // Inline function 'androidx.compose.runtime.SlotReader.anchor.<anonymous>' call
      var anchor = new Anchor(index);
      this_0.q1(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = this_0.j(location);
    }
    return tmp;
  };
  function find(_this__u8e3s4, index, effectiveSize) {
    var location = search$accessor$145qfty(_this__u8e3s4, index, effectiveSize);
    return location >= 0 ? _this__u8e3s4.j(location) : null;
  }
  function search(_this__u8e3s4, location, effectiveSize) {
    var low = 0;
    var high = _this__u8e3s4.i() - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.search.<anonymous>' call
      var it = _this__u8e3s4.j(mid).e16_1;
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
    if (!($this.i1l_1.cz_1 === $this.l1l_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function GroupIterator(table, start, end) {
    this.i1l_1 = table;
    this.j1l_1 = end;
    this.k1l_1 = start;
    this.l1l_1 = this.i1l_1.cz_1;
    if (this.i1l_1.bz_1)
      throw ConcurrentModificationException_init_$Create$();
  }
  protoOf(GroupIterator).x = function () {
    return this.k1l_1 < this.j1l_1;
  };
  protoOf(GroupIterator).z = function () {
    validateRead(this);
    var group = this.k1l_1;
    this.k1l_1 = this.k1l_1 + groupSize(this.i1l_1.vy_1, group) | 0;
    return new SlotTableGroup(this.i1l_1, group, this.l1l_1);
  };
  function validateRead_0($this) {
    if (!($this.m1l_1.cz_1 === $this.o1l_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function SlotTableGroup(table, group, version) {
    version = version === VOID ? table.cz_1 : version;
    this.m1l_1 = table;
    this.n1l_1 = group;
    this.o1l_1 = version;
  }
  protoOf(SlotTableGroup).k = function () {
    validateRead_0(this);
    var tmp0_safe_receiver = this.m1l_1.t1j(this.n1l_1);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTableGroup.iterator.<anonymous>' call
      tmp = new SourceInformationGroupIterator(this.m1l_1, tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? new GroupIterator(this.m1l_1, this.n1l_1 + 1 | 0, this.n1l_1 + groupSize(this.m1l_1.vy_1, this.n1l_1) | 0) : tmp1_elvis_lhs;
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
    this.d1k_1 = list;
  }
  protoOf(PrioritySet).f1k = function (value) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.d1k_1.o()) {
      tmp = this.d1k_1.j(0) === value ? true : this.d1k_1.j(this.d1k_1.i() - 1 | 0) === value;
    } else {
      tmp = false;
    }
    if (tmp)
      return Unit_instance;
    var index = this.d1k_1.i();
    this.d1k_1.u(value);
    $l$loop: while (index > 0) {
      var parent = ((index + 1 | 0) >>> 1 | 0) - 1 | 0;
      var parentValue = this.d1k_1.j(parent);
      if (value > parentValue) {
        this.d1k_1.r(index, parentValue);
      } else
        break $l$loop;
      index = parent;
    }
    this.d1k_1.r(index, value);
  };
  protoOf(PrioritySet).g19 = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    return !this.d1k_1.o();
  };
  protoOf(PrioritySet).d18 = function () {
    return first(this.d1k_1);
  };
  protoOf(PrioritySet).e1k = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.d1k_1.i() > 0)) {
      // Inline function 'androidx.compose.runtime.PrioritySet.takeMax.<anonymous>' call
      var message = 'Set is empty';
      composeRuntimeError(toString(message));
    }
    var value = this.d1k_1.j(0);
    $l$loop: while (true) {
      var tmp;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!this.d1k_1.o()) {
        tmp = this.d1k_1.j(0) === value;
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      this.d1k_1.r(0, last(this.d1k_1));
      this.d1k_1.g1(this.d1k_1.i() - 1 | 0);
      var index = 0;
      var size = this.d1k_1.i();
      var max = this.d1k_1.i() >>> 1 | 0;
      $l$loop_2: while (index < max) {
        var indexValue = this.d1k_1.j(index);
        var left = imul(index + 1 | 0, 2) - 1 | 0;
        var leftValue = this.d1k_1.j(left);
        var right = imul(index + 1 | 0, 2);
        if (right < size) {
          var rightValue = this.d1k_1.j(right);
          if (rightValue > leftValue) {
            if (rightValue > indexValue) {
              this.d1k_1.r(index, rightValue);
              this.d1k_1.r(right, indexValue);
              index = right;
              continue $l$loop_2;
            } else
              break $l$loop_2;
          }
        }
        if (leftValue > indexValue) {
          this.d1k_1.r(index, leftValue);
          this.d1k_1.r(left, indexValue);
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
    this.c13_1 = key;
    this.d13_1 = objectKey;
    this.e13_1 = location;
    this.f13_1 = nodes;
    this.g13_1 = index;
  }
  function SourceInformationGroupIterator(table, group) {
    this.p1l_1 = table;
    this.q1l_1 = group;
    this.r1l_1 = this.p1l_1.cz_1;
    this.s1l_1 = 0;
  }
  protoOf(SourceInformationGroupIterator).x = function () {
    var tmp0_safe_receiver = this.q1l_1.w1j_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SourceInformationGroupIterator.hasNext.<anonymous>' call
      tmp = this.s1l_1 < tmp0_safe_receiver.i();
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(SourceInformationGroupIterator).z = function () {
    var tmp2_safe_receiver = this.q1l_1.w1j_1;
    var tmp;
    if (tmp2_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp1 = this.s1l_1;
      this.s1l_1 = tmp1 + 1 | 0;
      tmp = tmp2_safe_receiver.j(tmp1);
    }
    var group = tmp;
    var tmp_0;
    if (group instanceof Anchor) {
      tmp_0 = new SlotTableGroup(this.p1l_1, group.e16_1, this.r1l_1);
    } else {
      if (group instanceof GroupSourceInformation) {
        tmp_0 = new SourceInformationSlotTableGroup(this.p1l_1, group);
      } else {
        composeRuntimeError('Unexpected group information structure');
      }
    }
    return tmp_0;
  };
  function SourceInformationSlotTableGroup(table, sourceInformation) {
    this.t1l_1 = table;
    this.u1l_1 = sourceInformation;
    this.v1l_1 = this.u1l_1.u1j_1;
    this.w1l_1 = emptyList();
    this.x1l_1 = this;
  }
  protoOf(SourceInformationSlotTableGroup).k = function () {
    return new SourceInformationGroupIterator(this.t1l_1, this.u1l_1);
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
  protoOf(StructuralEqualityPolicy).z1l = function (a, b) {
    return equals(a, b);
  };
  protoOf(StructuralEqualityPolicy).h1f = function (a, b) {
    var tmp = (a == null ? true : !(a == null)) ? a : THROW_CCE();
    return this.z1l(tmp, (b == null ? true : !(b == null)) ? b : THROW_CCE());
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
    this.c1m_1 = myValue;
  }
  protoOf(StateStateRecord).d1m = function (value) {
    var tmp = this;
    tmp.c1m_1 = (value instanceof StateStateRecord ? value : THROW_CCE()).c1m_1;
  };
  protoOf(StateStateRecord).e1m = function () {
    return new StateStateRecord(this.c1m_1);
  };
  function SnapshotMutableStateImpl(value, policy) {
    StateObjectImpl.call(this);
    this.g1m_1 = policy;
    this.h1m_1 = new StateStateRecord(value);
  }
  protoOf(SnapshotMutableStateImpl).m1e = function () {
    return this.g1m_1;
  };
  protoOf(SnapshotMutableStateImpl).lq = function (value) {
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var this_0 = this.h1m_1;
    var it = current(this_0);
    var tmp;
    if (!this.m1e().h1f(it.c1m_1, value)) {
      // Inline function 'androidx.compose.runtime.snapshots.overwritable' call
      var this_1 = this.h1m_1;
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
      snapshot = Companion_instance_12.iv();
      overwritableRecord(this_1, this, snapshot, it).c1m_1 = value;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
      notifyWrite(snapshot, this);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(SnapshotMutableStateImpl).j2 = function () {
    return readable_0(this.h1m_1, this).c1m_1;
  };
  protoOf(SnapshotMutableStateImpl).i1m = function () {
    return this.h1m_1;
  };
  protoOf(SnapshotMutableStateImpl).j1m = function (value) {
    var tmp = this;
    tmp.h1m_1 = value instanceof StateStateRecord ? value : THROW_CCE();
  };
  protoOf(SnapshotMutableStateImpl).k1m = function (previous, current, applied) {
    var previousRecord = previous instanceof StateStateRecord ? previous : THROW_CCE();
    var currentRecord = current instanceof StateStateRecord ? current : THROW_CCE();
    var appliedRecord = applied instanceof StateStateRecord ? applied : THROW_CCE();
    var tmp;
    if (this.m1e().h1f(currentRecord.c1m_1, appliedRecord.c1m_1)) {
      tmp = current;
    } else {
      var merged = this.m1e().y1l(previousRecord.c1m_1, currentRecord.c1m_1, appliedRecord.c1m_1);
      var tmp_0;
      if (!(merged == null)) {
        // Inline function 'kotlin.also' call
        var this_0 = appliedRecord.e1m();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.mergeRecords.<anonymous>' call
        (this_0 instanceof StateStateRecord ? this_0 : THROW_CCE()).c1m_1 = merged;
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
    var this_0 = this.h1m_1;
    // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.toString.<anonymous>' call
    return 'MutableState(value=' + current(this_0).c1m_1 + ')@' + hashCode(this);
  };
  function mutableStateListOf() {
    return new SnapshotStateList();
  }
  function SnapshotThreadLocal() {
    this.n1e_1 = new AtomicReference(get_emptyThreadMap());
    this.o1e_1 = new SynchronizedObject();
  }
  protoOf(SnapshotThreadLocal).yl = function () {
    var tmp = this.n1e_1.yl().o1m(currentThreadId());
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(SnapshotThreadLocal).p1e = function (value) {
    var key = currentThreadId();
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.o1e_1;
    var current = this.n1e_1.yl();
    if (current.p1m(key, value))
      return Unit_instance;
    this.n1e_1.i1c(current.q1m(key, value));
  };
  function IntStack() {
    this.iz_1 = new Int32Array(10);
    this.jz_1 = 0;
  }
  protoOf(IntStack).i = function () {
    return this.jz_1;
  };
  protoOf(IntStack).kz = function (value) {
    if (this.jz_1 >= this.iz_1.length) {
      this.iz_1 = copyOf(this.iz_1, imul(this.iz_1.length, 2));
    }
    var tmp = this.iz_1;
    var tmp1 = this.jz_1;
    this.jz_1 = tmp1 + 1 | 0;
    tmp[tmp1] = value;
  };
  protoOf(IntStack).o13 = function () {
    var tmp = this.iz_1;
    this.jz_1 = this.jz_1 - 1 | 0;
    return tmp[this.jz_1];
  };
  protoOf(IntStack).n1k = function (default_0) {
    return this.jz_1 > 0 ? this.d18() : default_0;
  };
  protoOf(IntStack).d18 = function () {
    return this.iz_1[this.jz_1 - 1 | 0];
  };
  protoOf(IntStack).l14 = function (index) {
    return this.iz_1[index];
  };
  protoOf(IntStack).o = function () {
    return this.jz_1 === 0;
  };
  protoOf(IntStack).b1 = function () {
    this.jz_1 = 0;
  };
  protoOf(IntStack).m1k = function (value) {
    var inductionVariable = 0;
    var last = this.jz_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (this.iz_1[i] === value)
          return i;
      }
       while (inductionVariable < last);
    return -1;
  };
  function Stack() {
    this.s10_1 = ArrayList_init_$Create$();
  }
  protoOf(Stack).i = function () {
    return this.s10_1.i();
  };
  protoOf(Stack).n13 = function (value) {
    return this.s10_1.u(value);
  };
  protoOf(Stack).o13 = function () {
    return this.s10_1.g1(this.i() - 1 | 0);
  };
  protoOf(Stack).d18 = function () {
    return this.s10_1.j(this.i() - 1 | 0);
  };
  protoOf(Stack).l14 = function (index) {
    return this.s10_1.j(index);
  };
  protoOf(Stack).o = function () {
    return this.s10_1.o();
  };
  protoOf(Stack).g19 = function () {
    return !this.o();
  };
  protoOf(Stack).b1 = function () {
    return this.s10_1.b1();
  };
  protoOf(Stack).y2 = function () {
    var tmp = 0;
    var tmp_0 = this.s10_1.i();
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(tmp_0), null);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      tmp_1[tmp_2] = this.s10_1.j(tmp_2);
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
    var this_0 = $this.l1e_1;
    current$factory();
    return this_0.j2();
  }
  function LazyValueHolder(valueProducer) {
    this.l1e_1 = lazy(valueProducer);
  }
  protoOf(LazyValueHolder).j2 = function () {
    return _get_current__qcrdxk(this);
  };
  function StaticValueHolder(value) {
    this.r1m_1 = value;
  }
  protoOf(StaticValueHolder).j2 = function () {
    return this.r1m_1;
  };
  protoOf(StaticValueHolder).toString = function () {
    return 'StaticValueHolder(value=' + this.r1m_1 + ')';
  };
  protoOf(StaticValueHolder).hashCode = function () {
    return this.r1m_1 == null ? 0 : hashCode(this.r1m_1);
  };
  protoOf(StaticValueHolder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StaticValueHolder))
      return false;
    var tmp0_other_with_cast = other instanceof StaticValueHolder ? other : THROW_CCE();
    if (!equals(this.r1m_1, tmp0_other_with_cast.r1m_1))
      return false;
    return true;
  };
  function current$factory() {
    return getPropertyCallableRef('current', 1, KProperty1, function (receiver) {
      return _get_current__qcrdxk(receiver);
    }, null);
  }
  function ChangeList() {
    this.y19_1 = new Operations();
  }
  protoOf(ChangeList).o = function () {
    return this.y19_1.o();
  };
  protoOf(ChangeList).g19 = function () {
    return this.y19_1.g19();
  };
  protoOf(ChangeList).b1 = function () {
    this.y19_1.b1();
  };
  protoOf(ChangeList).y1b = function (applier, slots, rememberManager) {
    return this.y19_1.a1n(applier, slots, rememberManager);
  };
  protoOf(ChangeList).b1n = function (value) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.y19_1;
    var operation = Remember_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.c1n(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushRemember.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.Remember.Value' call
    Remember_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, value);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.y1m_1 === createExpectedArgMask(this_0, operation.d1n_1) ? this_0.z1m_1 === createExpectedArgMask(this_0, operation.e1n_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.d1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.y1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.q5(', ');
            }
            this_1.q5(operation.f1n(_IntParameter___init__impl__oy5xkp(index)));
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
      var times_0 = operation.e1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.z1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.q5(', ');
            }
            this_2.q5(operation.g1n(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).h1n = function (value, groupSlotIndex) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.y19_1;
    var operation = UpdateValue_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.c1n(operation);
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
    if (!(this_0.y1m_1 === createExpectedArgMask(this_0, operation.d1n_1) ? this_0.z1m_1 === createExpectedArgMask(this_0, operation.e1n_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.d1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.y1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.q5(', ');
            }
            this_1.q5(operation.f1n(_IntParameter___init__impl__oy5xkp(index)));
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
      var times_0 = operation.e1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.z1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.q5(', ');
            }
            this_2.q5(operation.g1n(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).i1n = function () {
    this.y19_1.j1n(ResetSlots_getInstance());
  };
  protoOf(ChangeList).k1n = function (data) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.y19_1;
    var operation = UpdateAuxData_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.c1n(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushUpdateAuxData.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateAuxData.Data' call
    UpdateAuxData_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, data);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.y1m_1 === createExpectedArgMask(this_0, operation.d1n_1) ? this_0.z1m_1 === createExpectedArgMask(this_0, operation.e1n_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.d1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.y1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.q5(', ');
            }
            this_1.q5(operation.f1n(_IntParameter___init__impl__oy5xkp(index)));
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
      var times_0 = operation.e1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.z1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.q5(', ');
            }
            this_2.q5(operation.g1n(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).l1n = function () {
    this.y19_1.j1n(EnsureRootGroupStarted_getInstance());
  };
  protoOf(ChangeList).m1n = function (anchor) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.y19_1;
    var operation = EnsureGroupStarted_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.c1n(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushEnsureGroupStarted.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.EnsureGroupStarted.Anchor' call
    EnsureGroupStarted_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, anchor);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.y1m_1 === createExpectedArgMask(this_0, operation.d1n_1) ? this_0.z1m_1 === createExpectedArgMask(this_0, operation.e1n_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.d1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.y1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.q5(', ');
            }
            this_1.q5(operation.f1n(_IntParameter___init__impl__oy5xkp(index)));
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
      var times_0 = operation.e1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.z1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.q5(', ');
            }
            this_2.q5(operation.g1n(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).n1n = function () {
    this.y19_1.j1n(EndCurrentGroup_getInstance());
  };
  protoOf(ChangeList).o1n = function () {
    this.y19_1.j1n(SkipToEndOfCurrentGroup_getInstance());
  };
  protoOf(ChangeList).p1n = function () {
    this.y19_1.j1n(RemoveCurrentGroup_getInstance());
  };
  protoOf(ChangeList).q1n = function (anchor, from) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.y19_1;
    var operation = InsertSlots_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.c1n(operation);
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
    if (!(this_0.y1m_1 === createExpectedArgMask(this_0, operation.d1n_1) ? this_0.z1m_1 === createExpectedArgMask(this_0, operation.e1n_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.d1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.y1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.q5(', ');
            }
            this_1.q5(operation.f1n(_IntParameter___init__impl__oy5xkp(index)));
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
      var times_0 = operation.e1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.z1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.q5(', ');
            }
            this_2.q5(operation.g1n(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).r1n = function (anchor, from, fixups) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.y19_1;
    var operation = InsertSlotsWithFixups_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.c1n(operation);
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
    if (!(this_0.y1m_1 === createExpectedArgMask(this_0, operation.d1n_1) ? this_0.z1m_1 === createExpectedArgMask(this_0, operation.e1n_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.d1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.y1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.q5(', ');
            }
            this_1.q5(operation.f1n(_IntParameter___init__impl__oy5xkp(index)));
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
      var times_0 = operation.e1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.z1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.q5(', ');
            }
            this_2.q5(operation.g1n(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).s1n = function (offset) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.y19_1;
    var operation = MoveCurrentGroup_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.c1n(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushMoveCurrentGroup.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.MoveCurrentGroup.Offset' call
    MoveCurrentGroup_getInstance();
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$0, offset);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.y1m_1 === createExpectedArgMask(this_0, operation.d1n_1) ? this_0.z1m_1 === createExpectedArgMask(this_0, operation.e1n_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.d1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.y1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.q5(', ');
            }
            this_1.q5(operation.f1n(_IntParameter___init__impl__oy5xkp(index)));
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
      var times_0 = operation.e1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.z1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.q5(', ');
            }
            this_2.q5(operation.g1n(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).t1n = function (action, composition) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.y19_1;
    var operation = EndCompositionScope_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.c1n(operation);
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
    if (!(this_0.y1m_1 === createExpectedArgMask(this_0, operation.d1n_1) ? this_0.z1m_1 === createExpectedArgMask(this_0, operation.e1n_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.d1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.y1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.q5(', ');
            }
            this_1.q5(operation.f1n(_IntParameter___init__impl__oy5xkp(index)));
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
      var times_0 = operation.e1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.z1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.q5(', ');
            }
            this_2.q5(operation.g1n(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).u1n = function (node) {
    if (!(node == null) ? isInterface(node, ComposeNodeLifecycleCallback) : false) {
      this.y19_1.j1n(UseCurrentNode_getInstance());
    }
  };
  protoOf(ChangeList).v1n = function (value, block) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.y19_1;
    var operation = UpdateNode_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.c1n(operation);
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
    if (!(this_0.y1m_1 === createExpectedArgMask(this_0, operation.d1n_1) ? this_0.z1m_1 === createExpectedArgMask(this_0, operation.e1n_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.d1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.y1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.q5(', ');
            }
            this_1.q5(operation.f1n(_IntParameter___init__impl__oy5xkp(index)));
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
      var times_0 = operation.e1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.z1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.q5(', ');
            }
            this_2.q5(operation.g1n(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).w1n = function (removeFrom, moveCount) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.y19_1;
    var operation = RemoveNode_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.c1n(operation);
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
    if (!(this_0.y1m_1 === createExpectedArgMask(this_0, operation.d1n_1) ? this_0.z1m_1 === createExpectedArgMask(this_0, operation.e1n_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.d1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.y1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.q5(', ');
            }
            this_1.q5(operation.f1n(_IntParameter___init__impl__oy5xkp(index)));
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
      var times_0 = operation.e1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.z1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.q5(', ');
            }
            this_2.q5(operation.g1n(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).x1n = function (to, from, count) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.y19_1;
    var operation = MoveNode_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.c1n(operation);
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
    if (!(this_0.y1m_1 === createExpectedArgMask(this_0, operation.d1n_1) ? this_0.z1m_1 === createExpectedArgMask(this_0, operation.e1n_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.d1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.y1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.q5(', ');
            }
            this_1.q5(operation.f1n(_IntParameter___init__impl__oy5xkp(index)));
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
      var times_0 = operation.e1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.z1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.q5(', ');
            }
            this_2.q5(operation.g1n(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).y1n = function (distance) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.y19_1;
    var operation = AdvanceSlotsBy_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.c1n(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushAdvanceSlotsBy.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.AdvanceSlotsBy.Distance' call
    AdvanceSlotsBy_getInstance();
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$0, distance);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.y1m_1 === createExpectedArgMask(this_0, operation.d1n_1) ? this_0.z1m_1 === createExpectedArgMask(this_0, operation.e1n_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.d1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.y1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.q5(', ');
            }
            this_1.q5(operation.f1n(_IntParameter___init__impl__oy5xkp(index)));
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
      var times_0 = operation.e1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.z1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.q5(', ');
            }
            this_2.q5(operation.g1n(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).z1n = function (count) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.y19_1;
    var operation = Ups_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.c1n(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushUps.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.Ups.Count' call
    Ups_getInstance();
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$0, count);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.y1m_1 === createExpectedArgMask(this_0, operation.d1n_1) ? this_0.z1m_1 === createExpectedArgMask(this_0, operation.e1n_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.d1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.y1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.q5(', ');
            }
            this_1.q5(operation.f1n(_IntParameter___init__impl__oy5xkp(index)));
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
      var times_0 = operation.e1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.z1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.q5(', ');
            }
            this_2.q5(operation.g1n(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).a1o = function (nodes) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(nodes.length === 0)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
      var this_0 = this.y19_1;
      var operation = Downs_getInstance();
      // Inline function 'kotlin.contracts.contract' call
      this_0.c1n(operation);
      // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushDowns.<anonymous>' call
      var $this$push = _WriteScope___init__impl__4xwato(this_0);
      // Inline function 'androidx.compose.runtime.changelist.Downs.Nodes' call
      Downs_getInstance();
      var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(0);
      WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$2, nodes);
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this_0.y1m_1 === createExpectedArgMask(this_0, operation.d1n_1) ? this_0.z1m_1 === createExpectedArgMask(this_0, operation.e1n_1) : false)) {
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
        var missingIntCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_1 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times = operation.d1n_1;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        if (inductionVariable < times)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index & this_0.y1m_1) === 0)) {
              if (missingIntCount > 0) {
                this_1.q5(', ');
              }
              this_1.q5(operation.f1n(_IntParameter___init__impl__oy5xkp(index)));
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
        var times_0 = operation.e1n_1;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < times_0)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index_0 & this_0.z1m_1) === 0)) {
              if (missingIntCount > 0) {
                this_2.q5(', ');
              }
              this_2.q5(operation.g1n(_ObjectParameter___init__impl__iyg1ip(index_0)));
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
  protoOf(ChangeList).b1o = function (effectiveNodeIndexOut, anchor) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.y19_1;
    var operation = DetermineMovableContentNodeIndex_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.c1n(operation);
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
    if (!(this_0.y1m_1 === createExpectedArgMask(this_0, operation.d1n_1) ? this_0.z1m_1 === createExpectedArgMask(this_0, operation.e1n_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.d1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.y1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.q5(', ');
            }
            this_1.q5(operation.f1n(_IntParameter___init__impl__oy5xkp(index)));
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
      var times_0 = operation.e1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.z1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.q5(', ');
            }
            this_2.q5(operation.g1n(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).c1o = function (nodes, effectiveNodeIndex) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!nodes.o()) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
      var this_0 = this.y19_1;
      var operation = CopyNodesToNewAnchorLocation_getInstance();
      // Inline function 'kotlin.contracts.contract' call
      this_0.c1n(operation);
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
      if (!(this_0.y1m_1 === createExpectedArgMask(this_0, operation.d1n_1) ? this_0.z1m_1 === createExpectedArgMask(this_0, operation.e1n_1) : false)) {
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
        var missingIntCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_1 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times = operation.d1n_1;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        if (inductionVariable < times)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index & this_0.y1m_1) === 0)) {
              if (missingIntCount > 0) {
                this_1.q5(', ');
              }
              this_1.q5(operation.f1n(_IntParameter___init__impl__oy5xkp(index)));
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
        var times_0 = operation.e1n_1;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < times_0)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index_0 & this_0.z1m_1) === 0)) {
              if (missingIntCount > 0) {
                this_2.q5(', ');
              }
              this_2.q5(operation.g1n(_ObjectParameter___init__impl__iyg1ip(index_0)));
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
  protoOf(ChangeList).d1o = function (resolvedState, parentContext, from, to) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.y19_1;
    var operation = CopySlotTableToAnchorLocation_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.c1n(operation);
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
    if (!(this_0.y1m_1 === createExpectedArgMask(this_0, operation.d1n_1) ? this_0.z1m_1 === createExpectedArgMask(this_0, operation.e1n_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.d1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.y1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.q5(', ');
            }
            this_1.q5(operation.f1n(_IntParameter___init__impl__oy5xkp(index)));
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
      var times_0 = operation.e1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.z1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.q5(', ');
            }
            this_2.q5(operation.g1n(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).e1o = function (composition, parentContext, reference) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.y19_1;
    var operation = ReleaseMovableGroupAtCurrent_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.c1n(operation);
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
    if (!(this_0.y1m_1 === createExpectedArgMask(this_0, operation.d1n_1) ? this_0.z1m_1 === createExpectedArgMask(this_0, operation.e1n_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.d1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.y1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.q5(', ');
            }
            this_1.q5(operation.f1n(_IntParameter___init__impl__oy5xkp(index)));
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
      var times_0 = operation.e1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.z1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.q5(', ');
            }
            this_2.q5(operation.g1n(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).f1o = function () {
    this.y19_1.j1n(EndMovableContentPlacement_getInstance());
  };
  protoOf(ChangeList).g1o = function (changeList, effectiveNodeIndex) {
    if (changeList.g19()) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
      var this_0 = this.y19_1;
      var operation = ApplyChangeList_getInstance();
      // Inline function 'kotlin.contracts.contract' call
      this_0.c1n(operation);
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
      if (!(this_0.y1m_1 === createExpectedArgMask(this_0, operation.d1n_1) ? this_0.z1m_1 === createExpectedArgMask(this_0, operation.e1n_1) : false)) {
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
        var missingIntCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_1 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times = operation.d1n_1;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        if (inductionVariable < times)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index & this_0.y1m_1) === 0)) {
              if (missingIntCount > 0) {
                this_1.q5(', ');
              }
              this_1.q5(operation.f1n(_IntParameter___init__impl__oy5xkp(index)));
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
        var times_0 = operation.e1n_1;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < times_0)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index_0 & this_0.z1m_1) === 0)) {
              if (missingIntCount > 0) {
                this_2.q5(', ');
              }
              this_2.q5(operation.g1n(_ObjectParameter___init__impl__iyg1ip(index_0)));
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
    return $this.rz_1.hy_1;
  }
  function pushApplierOperationPreamble($this) {
    pushPendingUpsAndDowns($this);
  }
  function pushSlotEditingOperationPreamble($this) {
    realizeOperationLocation$default($this);
    $this.g17();
  }
  function pushSlotTableOperationPreamble($this, useParentSlot) {
    realizeOperationLocation($this, useParentSlot);
  }
  function pushSlotTableOperationPreamble$default($this, useParentSlot, $super) {
    useParentSlot = useParentSlot === VOID ? false : useParentSlot;
    return pushSlotTableOperationPreamble($this, useParentSlot);
  }
  function ensureRootStarted($this) {
    if (!$this.tz_1 ? $this.vz_1 : false) {
      pushSlotTableOperationPreamble$default($this);
      $this.sz_1.l1n();
      $this.tz_1 = true;
    }
  }
  function ensureGroupStarted($this, anchor) {
    pushSlotTableOperationPreamble$default($this);
    $this.sz_1.m1n(anchor);
    $this.tz_1 = true;
  }
  function realizeOperationLocation($this, forParent) {
    var location = forParent ? _get_reader__fd8dw8($this).n10_1 : _get_reader__fd8dw8($this).l10_1;
    var distance = location - $this.wz_1 | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(distance >= 0)) {
      // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.realizeOperationLocation.<anonymous>' call
      var message = 'Tried to seek backward';
      composeRuntimeError(toString(message));
    }
    if (distance > 0) {
      $this.sz_1.y1n(distance);
      $this.wz_1 = location;
    }
  }
  function realizeOperationLocation$default($this, forParent, $super) {
    forParent = forParent === VOID ? false : forParent;
    return realizeOperationLocation($this, forParent);
  }
  function realizeNodeMovementOperations($this) {
    if ($this.c10_1 > 0) {
      if ($this.zz_1 >= 0) {
        realizeRemoveNode($this, $this.zz_1, $this.c10_1);
        $this.zz_1 = -1;
      } else {
        realizeMoveNode($this, $this.b10_1, $this.a10_1, $this.c10_1);
        $this.a10_1 = -1;
        $this.b10_1 = -1;
      }
      $this.c10_1 = 0;
    }
  }
  function realizeRemoveNode($this, removeFrom, moveCount) {
    pushApplierOperationPreamble($this);
    $this.sz_1.w1n(removeFrom, moveCount);
  }
  function realizeMoveNode($this, to, from, count) {
    pushApplierOperationPreamble($this);
    $this.sz_1.x1n(to, from, count);
  }
  function pushPendingUpsAndDowns($this) {
    if ($this.xz_1 > 0) {
      $this.sz_1.z1n($this.xz_1);
      $this.xz_1 = 0;
    }
    if ($this.yz_1.g19()) {
      $this.sz_1.a1o($this.yz_1.y2());
      $this.yz_1.b1();
    }
  }
  function Companion_4() {
    this.h1o_1 = -2;
  }
  var Companion_instance_5;
  function Companion_getInstance_5() {
    return Companion_instance_5;
  }
  function ComposerChangeListWriter(composer, changeList) {
    this.rz_1 = composer;
    this.sz_1 = changeList;
    this.tz_1 = false;
    this.uz_1 = new IntStack();
    this.vz_1 = true;
    this.wz_1 = 0;
    this.xz_1 = 0;
    this.yz_1 = new Stack();
    this.zz_1 = -1;
    this.a10_1 = -1;
    this.b10_1 = -1;
    this.c10_1 = 0;
  }
  protoOf(ComposerChangeListWriter).k13 = function (location) {
    this.wz_1 = this.wz_1 + (location - _get_reader__fd8dw8(this).l10_1 | 0) | 0;
  };
  protoOf(ComposerChangeListWriter).n15 = function (location) {
    this.wz_1 = location;
  };
  protoOf(ComposerChangeListWriter).g17 = function () {
    if (_get_reader__fd8dw8(this).i() > 0) {
      var reader = _get_reader__fd8dw8(this);
      var location = reader.n10_1;
      if (!(this.uz_1.n1k(-2) === location)) {
        ensureRootStarted(this);
        if (location > 0) {
          var anchor = reader.b13(location);
          this.uz_1.kz(location);
          ensureGroupStarted(this, anchor);
        }
      }
    }
  };
  protoOf(ComposerChangeListWriter).u18 = function (value) {
    this.sz_1.b1n(value);
  };
  protoOf(ComposerChangeListWriter).r18 = function (value, groupSlotIndex) {
    pushSlotTableOperationPreamble(this, true);
    this.sz_1.h1n(value, groupSlotIndex);
  };
  protoOf(ComposerChangeListWriter).z14 = function () {
    this.sz_1.i1n();
  };
  protoOf(ComposerChangeListWriter).f12 = function (data) {
    pushSlotTableOperationPreamble$default(this);
    this.sz_1.k1n(data);
  };
  protoOf(ComposerChangeListWriter).d10 = function () {
    if (this.tz_1) {
      pushSlotTableOperationPreamble$default(this);
      pushSlotTableOperationPreamble$default(this);
      this.sz_1.n1n();
      this.tz_1 = false;
    }
  };
  protoOf(ComposerChangeListWriter).a14 = function () {
    var location = _get_reader__fd8dw8(this).n10_1;
    var currentStartedGroup = this.uz_1.n1k(-1);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(currentStartedGroup <= location)) {
      // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.endCurrentGroup.<anonymous>' call
      var message = 'Missed recording an endGroup';
      composeRuntimeError(toString(message));
    }
    if (this.uz_1.n1k(-1) === location) {
      pushSlotTableOperationPreamble$default(this);
      this.uz_1.o13();
      this.sz_1.n1n();
    }
  };
  protoOf(ComposerChangeListWriter).p15 = function () {
    this.sz_1.o1n();
  };
  protoOf(ComposerChangeListWriter).o16 = function () {
    pushSlotEditingOperationPreamble(this);
    this.sz_1.p1n();
    this.wz_1 = this.wz_1 + _get_reader__fd8dw8(this).h1l() | 0;
  };
  protoOf(ComposerChangeListWriter).n16 = function (anchor, from) {
    pushPendingUpsAndDowns(this);
    pushSlotEditingOperationPreamble(this);
    this.sz_1.q1n(anchor, from);
  };
  protoOf(ComposerChangeListWriter).m16 = function (anchor, from, fixups) {
    pushPendingUpsAndDowns(this);
    pushSlotEditingOperationPreamble(this);
    this.sz_1.r1n(anchor, from, fixups);
  };
  protoOf(ComposerChangeListWriter).m13 = function (offset) {
    pushSlotEditingOperationPreamble(this);
    this.sz_1.s1n(offset);
  };
  protoOf(ComposerChangeListWriter).n19 = function (action, composition) {
    this.sz_1.t1n(action, composition);
  };
  protoOf(ComposerChangeListWriter).g18 = function (node) {
    pushApplierOperationPreamble(this);
    this.sz_1.u1n(node);
  };
  protoOf(ComposerChangeListWriter).j18 = function (value, block) {
    pushApplierOperationPreamble(this);
    this.sz_1.v1n(value, block);
  };
  protoOf(ComposerChangeListWriter).q13 = function (nodeIndex, count) {
    if (count > 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(nodeIndex >= 0)) {
        // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.removeNode.<anonymous>' call
        var message = 'Invalid remove index ' + nodeIndex;
        composeRuntimeError(toString(message));
      }
      if (this.zz_1 === nodeIndex) {
        this.c10_1 = this.c10_1 + count | 0;
      } else {
        realizeNodeMovementOperations(this);
        this.zz_1 = nodeIndex;
        this.c10_1 = count;
      }
    }
  };
  protoOf(ComposerChangeListWriter).u13 = function (from, to, count) {
    if (count > 0) {
      if ((this.c10_1 > 0 ? this.a10_1 === (from - this.c10_1 | 0) : false) ? this.b10_1 === (to - this.c10_1 | 0) : false) {
        this.c10_1 = this.c10_1 + count | 0;
      } else {
        realizeNodeMovementOperations(this);
        this.a10_1 = from;
        this.b10_1 = to;
        this.c10_1 = count;
      }
    }
  };
  protoOf(ComposerChangeListWriter).p16 = function () {
    pushPendingUpsAndDowns(this);
    if (this.tz_1) {
      this.p15();
      this.d10();
    }
  };
  protoOf(ComposerChangeListWriter).w13 = function () {
    realizeNodeMovementOperations(this);
  };
  protoOf(ComposerChangeListWriter).i17 = function (nodeIndex, group) {
    this.w13();
    pushPendingUpsAndDowns(this);
    var nodeCount = _get_reader__fd8dw8(this).m14(group) ? 1 : _get_reader__fd8dw8(this).n14(group);
    if (nodeCount > 0) {
      this.q13(nodeIndex, nodeCount);
    }
  };
  protoOf(ComposerChangeListWriter).z13 = function () {
    if (this.yz_1.g19()) {
      this.yz_1.o13();
    } else {
      this.xz_1 = this.xz_1 + 1 | 0;
    }
  };
  protoOf(ComposerChangeListWriter).o14 = function (node) {
    this.yz_1.n13(node);
  };
  protoOf(ComposerChangeListWriter).i15 = function (effectiveNodeIndexOut, anchor) {
    pushPendingUpsAndDowns(this);
    this.sz_1.b1o(effectiveNodeIndexOut, anchor);
  };
  protoOf(ComposerChangeListWriter).l15 = function (nodes, effectiveNodeIndex) {
    this.sz_1.c1o(nodes, effectiveNodeIndex);
  };
  protoOf(ComposerChangeListWriter).m15 = function (resolvedState, parentContext, from, to) {
    this.sz_1.d1o(resolvedState, parentContext, from, to);
  };
  protoOf(ComposerChangeListWriter).h17 = function (composition, parentContext, reference) {
    this.sz_1.e1o(composition, parentContext, reference);
  };
  protoOf(ComposerChangeListWriter).q15 = function () {
    this.sz_1.f1o();
    this.wz_1 = 0;
  };
  protoOf(ComposerChangeListWriter).o15 = function (other, effectiveNodeIndex) {
    this.sz_1.g1o(other, effectiveNodeIndex);
  };
  protoOf(ComposerChangeListWriter).r16 = function () {
    pushPendingUpsAndDowns(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!this.uz_1.o()) {
      // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.finalizeComposition.<anonymous>' call
      var message = 'Missed recording an endGroup()';
      composeRuntimeError(toString(message));
    }
  };
  protoOf(ComposerChangeListWriter).s16 = function () {
    this.tz_1 = false;
    this.uz_1.b1();
    this.wz_1 = 0;
  };
  function FixupList() {
    this.p11_1 = new Operations();
    this.q11_1 = new Operations();
  }
  protoOf(FixupList).o = function () {
    return this.p11_1.o();
  };
  protoOf(FixupList).b1 = function () {
    this.q11_1.b1();
    this.p11_1.b1();
  };
  protoOf(FixupList).i1o = function (applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!this.q11_1.o()) {
      // Inline function 'androidx.compose.runtime.changelist.FixupList.executeAndFlushAllPendingFixups.<anonymous>' call
      var message = 'FixupList has pending fixup operations that were not realized. Were there mismatched insertNode() and endNodeInsert() calls?';
      composeRuntimeError(toString(message));
    }
    this.p11_1.a1n(applier, slots, rememberManager);
  };
  protoOf(FixupList).e18 = function (factory, insertIndex, groupAnchor) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.p11_1;
    var operation = InsertNodeFixup_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.c1n(operation);
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
    if (!(this_0.y1m_1 === createExpectedArgMask(this_0, operation.d1n_1) ? this_0.z1m_1 === createExpectedArgMask(this_0, operation.e1n_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.d1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.y1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.q5(', ');
            }
            this_1.q5(operation.f1n(_IntParameter___init__impl__oy5xkp(index)));
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
      var times_0 = operation.e1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.z1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.q5(', ');
            }
            this_2.q5(operation.g1n(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_3 = this.q11_1;
    var operation_0 = PostInsertNodeFixup_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_3.c1n(operation_0);
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
    if (!(this_3.y1m_1 === createExpectedArgMask(this_3, operation_0.d1n_1) ? this_3.z1m_1 === createExpectedArgMask(this_3, operation_0.e1n_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount_0 = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_4 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_1 = operation_0.d1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_1 = 0;
      if (inductionVariable_1 < times_1)
        do {
          var index_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_1 & this_3.y1m_1) === 0)) {
            if (missingIntCount_0 > 0) {
              this_4.q5(', ');
            }
            this_4.q5(operation_0.f1n(_IntParameter___init__impl__oy5xkp(index_1)));
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
      var times_2 = operation_0.e1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_2 = 0;
      if (inductionVariable_2 < times_2)
        do {
          var index_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_2 & this_3.z1m_1) === 0)) {
            if (missingIntCount_0 > 0) {
              this_5.q5(', ');
            }
            this_5.q5(operation_0.g1n(_ObjectParameter___init__impl__iyg1ip(index_2)));
            missingObjectCount_0 = missingObjectCount_0 + 1 | 0;
          }
        }
         while (inductionVariable_2 < times_2);
      var missingObjects_0 = this_5.toString();
      var message_0 = 'Error while pushing ' + operation_0 + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount_0 + ' int arguments (' + missingInts_0 + ') ') + ('and ' + missingObjectCount_0 + ' object arguments (' + missingObjects_0 + ').');
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
  };
  protoOf(FixupList).c14 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!this.q11_1.g19()) {
      // Inline function 'androidx.compose.runtime.changelist.FixupList.endNodeInsert.<anonymous>' call
      var message = 'Cannot end node insertion, there are no pending operations that can be realized.';
      composeRuntimeError(toString(message));
    }
    this.q11_1.j1o(this.p11_1);
  };
  protoOf(FixupList).k18 = function (value, block) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.p11_1;
    var operation = UpdateNode_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.c1n(operation);
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
    if (!(this_0.y1m_1 === createExpectedArgMask(this_0, operation.d1n_1) ? this_0.z1m_1 === createExpectedArgMask(this_0, operation.e1n_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.d1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.y1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.q5(', ');
            }
            this_1.q5(operation.f1n(_IntParameter___init__impl__oy5xkp(index)));
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
      var times_0 = operation.e1n_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.z1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.q5(', ');
            }
            this_2.q5(operation.g1n(_ObjectParameter___init__impl__iyg1ip(index_0)));
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
  protoOf(Ups).f1n = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.Ups.Count' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'count';
    } else {
      tmp = protoOf(Operation).f1n.call(this, parameter);
    }
    return tmp;
  };
  protoOf(Ups).m1o = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'kotlin.repeat' call
    // Inline function 'androidx.compose.runtime.changelist.Ups.Count' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    var times = _this__u8e3s4.n1o(tmp$ret$0);
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.changelist.Ups.execute.<anonymous>' call
        applier.mv();
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
  protoOf(Downs).g1n = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.Downs.Nodes' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'nodes';
    } else {
      tmp = protoOf(Operation).g1n.call(this, parameter);
    }
    return tmp;
  };
  protoOf(Downs).m1o = function (_this__u8e3s4, applier, slots, rememberManager) {
    var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
    // Inline function 'androidx.compose.runtime.changelist.Downs.Nodes' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var nodes = _this__u8e3s4.r1o(tmp$ret$0);
    var inductionVariable = 0;
    var last = nodes.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        nodeApplier.lv(nodes[index]);
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
  protoOf(AdvanceSlotsBy).f1n = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.AdvanceSlotsBy.Distance' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'distance';
    } else {
      tmp = protoOf(Operation).f1n.call(this, parameter);
    }
    return tmp;
  };
  protoOf(AdvanceSlotsBy).m1o = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.AdvanceSlotsBy.Distance' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    slots.z1j(_this__u8e3s4.n1o(tmp$ret$0));
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
  protoOf(Remember).g1n = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.Remember.Value' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'value';
    } else {
      tmp = protoOf(Operation).g1n.call(this, parameter);
    }
    return tmp;
  };
  protoOf(Remember).m1o = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.Remember.Value' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    rememberManager.q1c(_this__u8e3s4.r1o(tmp$ret$0));
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
  protoOf(UpdateValue).f1n = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.GroupSlotIndex' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'groupSlotIndex';
    } else {
      tmp = protoOf(Operation).f1n.call(this, parameter);
    }
    return tmp;
  };
  protoOf(UpdateValue).g1n = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.Value' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'value';
    } else {
      tmp = protoOf(Operation).g1n.call(this, parameter);
    }
    return tmp;
  };
  protoOf(UpdateValue).m1o = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.Value' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var value = _this__u8e3s4.r1o(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.GroupSlotIndex' call
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(0);
    var groupSlotIndex = _this__u8e3s4.n1o(tmp$ret$1);
    if (value instanceof RememberObserverHolder) {
      rememberManager.q1c(value.m18_1);
    }
    var previous = slots.w1k(groupSlotIndex, value);
    if (previous instanceof RememberObserverHolder) {
      rememberManager.g1a(previous.m18_1);
    } else {
      if (previous instanceof RecomposeScopeImpl) {
        previous.il();
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
  protoOf(UpdateAuxData).g1n = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateAuxData.Data' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'data';
    } else {
      tmp = protoOf(Operation).g1n.call(this, parameter);
    }
    return tmp;
  };
  protoOf(UpdateAuxData).m1o = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.UpdateAuxData.Data' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    slots.b1k(_this__u8e3s4.r1o(tmp$ret$0));
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
  protoOf(EnsureRootGroupStarted).m1o = function (_this__u8e3s4, applier, slots, rememberManager) {
    slots.y1k(0);
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
  protoOf(EnsureGroupStarted).g1n = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.EnsureGroupStarted.Anchor' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'anchor';
    } else {
      tmp = protoOf(Operation).g1n.call(this, parameter);
    }
    return tmp;
  };
  protoOf(EnsureGroupStarted).m1o = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.EnsureGroupStarted.Anchor' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    slots.z1k(_this__u8e3s4.r1o(tmp$ret$0));
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
  protoOf(RemoveCurrentGroup).m1o = function (_this__u8e3s4, applier, slots, rememberManager) {
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
  protoOf(MoveCurrentGroup).f1n = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.MoveCurrentGroup.Offset' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'offset';
    } else {
      tmp = protoOf(Operation).f1n.call(this, parameter);
    }
    return tmp;
  };
  protoOf(MoveCurrentGroup).m1o = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.MoveCurrentGroup.Offset' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    slots.b1l(_this__u8e3s4.n1o(tmp$ret$0));
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
  protoOf(EndCurrentGroup).m1o = function (_this__u8e3s4, applier, slots, rememberManager) {
    slots.e14();
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
  protoOf(SkipToEndOfCurrentGroup).m1o = function (_this__u8e3s4, applier, slots, rememberManager) {
    slots.e12();
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
  protoOf(EndCompositionScope).g1n = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Action' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'anchor';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Composition' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'composition';
      } else {
        tmp = protoOf(Operation).g1n.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(EndCompositionScope).m1o = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Action' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var action = _this__u8e3s4.r1o(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Composition' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var composition = _this__u8e3s4.r1o(tmp$ret$1);
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
  protoOf(UseCurrentNode).m1o = function (_this__u8e3s4, applier, slots, rememberManager) {
    var tmp = applier.iv();
    ((!(tmp == null) ? isInterface(tmp, ComposeNodeLifecycleCallback) : false) ? tmp : THROW_CCE()).kw();
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
  protoOf(UpdateNode).g1n = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Value' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'value';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Block' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'block';
      } else {
        tmp = protoOf(Operation).g1n.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(UpdateNode).m1o = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Value' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var value = _this__u8e3s4.r1o(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Block' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var block = _this__u8e3s4.r1o(tmp$ret$1);
    block(applier.iv(), value);
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
  protoOf(RemoveNode).f1n = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.RemoveNode.RemoveIndex' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'removeIndex';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.RemoveNode.Count' call
      if (parameter === _IntParameter___init__impl__oy5xkp(1)) {
        tmp = 'count';
      } else {
        tmp = protoOf(Operation).f1n.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(RemoveNode).m1o = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.RemoveNode.RemoveIndex' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    var tmp = _this__u8e3s4.n1o(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.RemoveNode.Count' call
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(1);
    applier.pv(tmp, _this__u8e3s4.n1o(tmp$ret$1));
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
  protoOf(MoveNode).f1n = function (parameter) {
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
          tmp = protoOf(Operation).f1n.call(this, parameter);
        }
      }
    }
    return tmp;
  };
  protoOf(MoveNode).m1o = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.From' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    var tmp = _this__u8e3s4.n1o(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.To' call
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(1);
    var tmp_0 = _this__u8e3s4.n1o(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.Count' call
    var tmp$ret$2 = _IntParameter___init__impl__oy5xkp(2);
    applier.qv(tmp, tmp_0, _this__u8e3s4.n1o(tmp$ret$2));
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
  protoOf(InsertSlots).g1n = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.InsertSlots.Anchor' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'anchor';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.InsertSlots.FromSlotTable' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'from';
      } else {
        tmp = protoOf(Operation).g1n.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(InsertSlots).m1o = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.InsertSlots.FromSlotTable' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(1);
    var insertTable = _this__u8e3s4.r1o(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlots.Anchor' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(0);
    var anchor = _this__u8e3s4.r1o(tmp$ret$1);
    slots.a13();
    slots.d1l(insertTable, anchor.h19(insertTable), false);
    slots.f14();
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
  protoOf(InsertSlotsWithFixups).g1n = function (parameter) {
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
          tmp = protoOf(Operation).g1n.call(this, parameter);
        }
      }
    }
    return tmp;
  };
  protoOf(InsertSlotsWithFixups).m1o = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.FromSlotTable' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(1);
    var insertTable = _this__u8e3s4.r1o(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Anchor' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(0);
    var anchor = _this__u8e3s4.r1o(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Fixups' call
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(2);
    var fixups = _this__u8e3s4.r1o(tmp$ret$2);
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = insertTable.d12();
    var tmp;
    try {
      fixups.i1o(applier, writer, rememberManager);
      tmp = Unit_instance;
    }finally {
      writer.r10();
    }
    slots.a13();
    slots.d1l(insertTable, anchor.h19(insertTable), false);
    slots.f14();
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
  protoOf(InsertNodeFixup).f1n = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.InsertIndex' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'insertIndex';
    } else {
      tmp = protoOf(Operation).f1n.call(this, parameter);
    }
    return tmp;
  };
  protoOf(InsertNodeFixup).g1n = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.Factory' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'factory';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.GroupAnchor' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'groupAnchor';
      } else {
        tmp = protoOf(Operation).g1n.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(InsertNodeFixup).m1o = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.Factory' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var node = _this__u8e3s4.r1o(tmp$ret$0)();
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.GroupAnchor' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var groupAnchor = _this__u8e3s4.r1o(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.InsertIndex' call
    var tmp$ret$2 = _IntParameter___init__impl__oy5xkp(0);
    var insertIndex = _this__u8e3s4.n1o(tmp$ret$2);
    var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
    slots.v1k(groupAnchor, node);
    nodeApplier.nv(insertIndex, node);
    nodeApplier.lv(node);
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
  protoOf(PostInsertNodeFixup).f1n = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.InsertIndex' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'insertIndex';
    } else {
      tmp = protoOf(Operation).f1n.call(this, parameter);
    }
    return tmp;
  };
  protoOf(PostInsertNodeFixup).g1n = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.GroupAnchor' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'groupAnchor';
    } else {
      tmp = protoOf(Operation).g1n.call(this, parameter);
    }
    return tmp;
  };
  protoOf(PostInsertNodeFixup).m1o = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.GroupAnchor' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var groupAnchor = _this__u8e3s4.r1o(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.InsertIndex' call
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(0);
    var insertIndex = _this__u8e3s4.n1o(tmp$ret$1);
    applier.mv();
    var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
    var nodeToInsert = slots.o1k(groupAnchor);
    nodeApplier.ov(insertIndex, nodeToInsert);
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
  protoOf(ResetSlots).m1o = function (_this__u8e3s4, applier, slots, rememberManager) {
    slots.q1k();
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
  protoOf(DetermineMovableContentNodeIndex).g1n = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.EffectiveNodeIndexOut' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'effectiveNodeIndexOut';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.Anchor' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'anchor';
      } else {
        tmp = protoOf(Operation).g1n.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(DetermineMovableContentNodeIndex).m1o = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.EffectiveNodeIndexOut' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var effectiveNodeIndexOut = _this__u8e3s4.r1o(tmp$ret$0);
    var tmp = effectiveNodeIndexOut;
    // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.Anchor' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var tmp_0 = _this__u8e3s4.r1o(tmp$ret$1);
    tmp.i1q_1 = positionToInsert(slots, tmp_0, isInterface(applier, Applier) ? applier : THROW_CCE());
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
  protoOf(CopyNodesToNewAnchorLocation).g1n = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.EffectiveNodeIndex' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'effectiveNodeIndex';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.Nodes' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'nodes';
      } else {
        tmp = protoOf(Operation).g1n.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(CopyNodesToNewAnchorLocation).m1o = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.EffectiveNodeIndex' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var effectiveNodeIndex = _this__u8e3s4.r1o(tmp$ret$0).i1q_1;
    // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.Nodes' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var nodesToInsert = _this__u8e3s4.r1o(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.snapshots.fastForEachIndexed' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = nodesToInsert.i() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = nodesToInsert.j(index);
        // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.execute.<anonymous>' call
        if (!isInterface(applier, Applier))
          THROW_CCE();
        applier.ov(effectiveNodeIndex + index | 0, item);
        applier.nv(effectiveNodeIndex + index | 0, item);
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
  protoOf(CopySlotTableToAnchorLocation).g1n = function (parameter) {
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
            tmp = protoOf(Operation).g1n.call(this, parameter);
          }
        }
      }
    }
    return tmp;
  };
  protoOf(CopySlotTableToAnchorLocation).m1o = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.From' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(2);
    var from = _this__u8e3s4.r1o(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.To' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(3);
    var to = _this__u8e3s4.r1o(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ParentCompositionContext' call
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(1);
    var parentCompositionContext = _this__u8e3s4.r1o(tmp$ret$2);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ResolvedState' call
    var tmp$ret$3 = _ObjectParameter___init__impl__iyg1ip(0);
    var tmp0_elvis_lhs = _this__u8e3s4.r1o(tmp$ret$3);
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? parentCompositionContext.j15(from) : tmp0_elvis_lhs;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      composeRuntimeError('Could not resolve state for movable content');
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var resolvedState = tmp;
    var anchors = slots.e1l(1, resolvedState.k15_1, 2);
    var tmp_0 = Companion_instance_2;
    var tmp_1 = to.c15_1;
    tmp_0.y1e(slots, anchors, isInterface(tmp_1, RecomposeScopeOwner) ? tmp_1 : THROW_CCE());
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
  protoOf(EndMovableContentPlacement).m1o = function (_this__u8e3s4, applier, slots, rememberManager) {
    positionToParentOf(slots, isInterface(applier, Applier) ? applier : THROW_CCE(), 0);
    slots.e14();
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
  protoOf(ReleaseMovableGroupAtCurrent).g1n = function (parameter) {
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
          tmp = protoOf(Operation).g1n.call(this, parameter);
        }
      }
    }
    return tmp;
  };
  protoOf(ReleaseMovableGroupAtCurrent).m1o = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Composition' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var tmp = _this__u8e3s4.r1o(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.ParentCompositionContext' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var tmp_0 = _this__u8e3s4.r1o(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Reference' call
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(2);
    releaseMovableGroupAtCurrent(tmp, tmp_0, _this__u8e3s4.r1o(tmp$ret$2), slots);
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
  protoOf(ApplyChangeList).g1n = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.Changes' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'changes';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.EffectiveNodeIndex' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'effectiveNodeIndex';
      } else {
        tmp = protoOf(Operation).g1n.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(ApplyChangeList).m1o = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.EffectiveNodeIndex' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(1);
    var tmp0_safe_receiver = _this__u8e3s4.r1o(tmp$ret$0);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i1q_1;
    var effectiveNodeIndex = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.Changes' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(0);
    var tmp = _this__u8e3s4.r1o(tmp$ret$1);
    var tmp_0;
    if (effectiveNodeIndex > 0) {
      tmp_0 = new OffsetApplier(applier, effectiveNodeIndex);
    } else {
      tmp_0 = applier;
    }
    tmp.y1b(tmp_0, slots, rememberManager);
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
    this.d1n_1 = ints;
    this.e1n_1 = objects;
  }
  protoOf(Operation).o1o = function () {
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = getKClassFromExpression(this).s6();
    return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
  };
  protoOf(Operation).f1n = function (parameter) {
    return 'IntParameter(' + _IntParameter___get_offset__impl__xsdcin(parameter) + ')';
  };
  protoOf(Operation).g1n = function (parameter) {
    return 'ObjectParameter(' + _ObjectParameter___get_offset__impl__x7fx93(parameter) + ')';
  };
  protoOf(Operation).toString = function () {
    return this.o1o();
  };
  function positionToInsert(slots, anchor, applier) {
    var destination = slots.h15(anchor);
    runtimeCheck(slots.k11_1 < destination);
    positionToParentOf(slots, applier, destination);
    var nodeIndex = currentNodeIndex(slots);
    while (slots.k11_1 < destination) {
      if (slots.k1k(destination)) {
        if (slots.i19()) {
          applier.lv(slots.l16(slots.k11_1));
          nodeIndex = 0;
        }
        slots.h12();
      } else
        nodeIndex = nodeIndex + slots.u11() | 0;
    }
    runtimeCheck(slots.k11_1 === destination);
    return nodeIndex;
  }
  function positionToParentOf(slots, applier, index) {
    while (!slots.j1k(index)) {
      slots.e12();
      if (slots.m14(slots.m11_1)) {
        applier.mv();
      }
      slots.e14();
    }
  }
  function releaseMovableGroupAtCurrent(composition, parentContext, reference, slots) {
    var slotTable = new SlotTable();
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = slotTable.d12();
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.changelist.releaseMovableGroupAtCurrent.<anonymous>' call
      writer.a13();
      writer.l12(get_movableContentKey(), reference.a15_1);
      writer.w14();
      writer.s18(reference.b15_1);
      var anchors = slots.c1l(reference.e15_1, 1, writer);
      writer.u11();
      writer.e14();
      writer.f14();
      tmp = anchors;
    }finally {
      writer.r10();
    }
    var anchors_0 = tmp;
    var state = new MovableContentState(slotTable);
    if (Companion_instance_2.b1f(slotTable, anchors_0)) {
      var movableContentRecomposeScopeOwner = new releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1(composition, reference);
      // Inline function 'androidx.compose.runtime.SlotTable.write' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
      var writer_0 = slotTable.d12();
      var tmp_0;
      try {
        Companion_instance_2.y1e(writer_0, anchors_0, movableContentRecomposeScopeOwner);
        tmp_0 = Unit_instance;
      }finally {
        writer_0.r10();
      }
    }
    parentContext.e1e(reference, state);
  }
  function currentNodeIndex(slots) {
    var original = slots.k11_1;
    var current = slots.m11_1;
    while (current >= 0 ? !slots.m14(current) : false) {
      current = slots.a12(current);
    }
    var index = 0;
    current = current + 1 | 0;
    while (current < original) {
      if (slots.l1k(original, current)) {
        if (slots.m14(current))
          index = 0;
        current = current + 1 | 0;
      } else {
        index = index + (slots.m14(current) ? 1 : slots.n14(current)) | 0;
        current = current + slots.s13(current) | 0;
      }
    }
    return index;
  }
  function releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1($composition, $reference) {
    this.t1q_1 = $composition;
    this.u1q_1 = $reference;
  }
  protoOf(releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1).v1d = function (scope, instance) {
    var tmp = this.t1q_1;
    var tmp0_safe_receiver = isInterface(tmp, RecomposeScopeOwner) ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v1d(scope, instance);
    var result = tmp1_elvis_lhs == null ? InvalidationResult_IGNORED_getInstance() : tmp1_elvis_lhs;
    if (result.equals(InvalidationResult_IGNORED_getInstance())) {
      var tmp2_this = this.u1q_1;
      var tmp_0 = tmp2_this;
      var tmp_1 = tmp2_this.f15_1;
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
        this_0.q1a(this_0);
        tmp_2 = this_0;
      }
      tmp_0.f15_1 = plus_1(tmp_1, to(scope, tmp_2));
      return InvalidationResult_SCHEDULED_getInstance();
    }
    return result;
  };
  protoOf(releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1).z1d = function (scope) {
  };
  protoOf(releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1).g1d = function (value) {
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
    if (!(($this$with.y1m_1 & mask) === 0)) {
      // Inline function 'androidx.compose.runtime.changelist.WriteScope.setInt.<anonymous>.<anonymous>' call
      var message = 'Already pushed argument ' + _WriteScope___get_operation__impl__krvgwa($this).f1n(parameter);
      throw IllegalStateException_init_$Create$(toString(message));
    }
    $this$with.y1m_1 = $this$with.y1m_1 | mask;
    $this$with.u1m_1[topIntIndexOf($this$with, parameter)] = value;
    return Unit_instance;
  }
  function WriteScope__setObject_impl_rr41y9($this, parameter, value) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var $this$with = _get_stack__b8zp2v($this);
    var mask = 1 << _ObjectParameter___get_offset__impl__x7fx93(parameter);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(($this$with.z1m_1 & mask) === 0)) {
      // Inline function 'androidx.compose.runtime.changelist.WriteScope.setObject.<anonymous>.<anonymous>' call
      var message = 'Already pushed argument ' + _WriteScope___get_operation__impl__krvgwa($this).g1n(parameter);
      throw IllegalStateException_init_$Create$(toString(message));
    }
    $this$with.z1m_1 = $this$with.z1m_1 | mask;
    $this$with.w1m_1[topObjectIndexOf($this$with, parameter)] = value;
    return Unit_instance;
  }
  function determineNewSize($this, currentSize, requiredSize) {
    var resizeAmount = coerceAtMost(currentSize, 1024);
    return coerceAtLeast(currentSize + resizeAmount | 0, requiredSize);
  }
  function ensureIntArgsSizeAtLeast($this, requiredSize) {
    var currentSize = $this.u1m_1.length;
    if (requiredSize > currentSize) {
      $this.u1m_1 = copyOf($this.u1m_1, determineNewSize($this, currentSize, requiredSize));
    }
  }
  function ensureObjectArgsSizeAtLeast($this, requiredSize) {
    var currentSize = $this.w1m_1.length;
    if (requiredSize > currentSize) {
      $this.w1m_1 = copyOf_0($this.w1m_1, determineNewSize($this, currentSize, requiredSize));
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
    return ensureNotNull($this.s1m_1[$this.t1m_1 - 1 | 0]);
  }
  function topIntIndexOf($this, parameter) {
    return ($this.v1m_1 - peekOperation($this).d1n_1 | 0) + _IntParameter___get_offset__impl__xsdcin(parameter) | 0;
  }
  function topObjectIndexOf($this, parameter) {
    return ($this.x1m_1 - peekOperation($this).e1n_1 | 0) + _ObjectParameter___get_offset__impl__x7fx93(parameter) | 0;
  }
  function OpIterator($outer) {
    this.y1q_1 = $outer;
    this.v1q_1 = 0;
    this.w1q_1 = 0;
    this.x1q_1 = 0;
  }
  protoOf(OpIterator).z = function () {
    if (this.v1q_1 >= this.y1q_1.t1m_1)
      return false;
    var op = this.z1q();
    this.w1q_1 = this.w1q_1 + op.d1n_1 | 0;
    this.x1q_1 = this.x1q_1 + op.e1n_1 | 0;
    this.v1q_1 = this.v1q_1 + 1 | 0;
    return this.v1q_1 < this.y1q_1.t1m_1;
  };
  protoOf(OpIterator).z1q = function () {
    return ensureNotNull(this.y1q_1.s1m_1[this.v1q_1]);
  };
  protoOf(OpIterator).n1o = function (parameter) {
    return this.y1q_1.u1m_1[this.w1q_1 + _IntParameter___get_offset__impl__xsdcin(parameter) | 0];
  };
  protoOf(OpIterator).r1o = function (parameter) {
    var tmp = this.y1q_1.w1m_1[this.x1q_1 + _ObjectParameter___get_offset__impl__x7fx93(parameter) | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  function Companion_5() {
    this.a1r_1 = 1024;
    this.b1r_1 = 16;
  }
  var Companion_instance_6;
  function Companion_getInstance_6() {
    return Companion_instance_6;
  }
  function Operations() {
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.s1m_1 = fillArrayVal(Array(16), null);
    this.t1m_1 = 0;
    this.u1m_1 = new Int32Array(16);
    this.v1m_1 = 0;
    var tmp_0 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.w1m_1 = fillArrayVal(Array(16), null);
    this.x1m_1 = 0;
    this.y1m_1 = 0;
    this.z1m_1 = 0;
  }
  protoOf(Operations).i = function () {
    return this.t1m_1;
  };
  protoOf(Operations).o = function () {
    return this.i() === 0;
  };
  protoOf(Operations).g19 = function () {
    return !(this.i() === 0);
  };
  protoOf(Operations).b1 = function () {
    this.t1m_1 = 0;
    this.v1m_1 = 0;
    fill_0(this.w1m_1, null, 0, this.x1m_1);
    this.x1m_1 = 0;
  };
  protoOf(Operations).c1n = function (operation) {
    this.y1m_1 = 0;
    this.z1m_1 = 0;
    if (this.t1m_1 === this.s1m_1.length) {
      var resizeAmount = coerceAtMost(this.t1m_1, 1024);
      this.s1m_1 = copyOf_0(this.s1m_1, this.t1m_1 + resizeAmount | 0);
    }
    ensureIntArgsSizeAtLeast(this, this.v1m_1 + operation.d1n_1 | 0);
    ensureObjectArgsSizeAtLeast(this, this.x1m_1 + operation.e1n_1 | 0);
    var tmp = this.s1m_1;
    var tmp1 = this.t1m_1;
    this.t1m_1 = tmp1 + 1 | 0;
    tmp[tmp1] = operation;
    this.v1m_1 = this.v1m_1 + operation.d1n_1 | 0;
    this.x1m_1 = this.x1m_1 + operation.e1n_1 | 0;
  };
  protoOf(Operations).j1n = function (operation) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(operation.d1n_1 === 0 ? operation.e1n_1 === 0 : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var message = 'Cannot push ' + operation + ' without arguments because it expects ' + ('' + operation.d1n_1 + ' ints and ' + operation.e1n_1 + ' objects.');
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.c1n(operation);
  };
  protoOf(Operations).j1o = function (other) {
    if (this.o()) {
      throw NoSuchElementException_init_$Create$('Cannot pop(), because the stack is empty.');
    }
    var tmp = this.s1m_1;
    this.t1m_1 = this.t1m_1 - 1 | 0;
    var op = ensureNotNull(tmp[this.t1m_1]);
    this.s1m_1[this.t1m_1] = null;
    other.c1n(op);
    var thisObjIdx = this.x1m_1;
    var otherObjIdx = other.x1m_1;
    // Inline function 'kotlin.repeat' call
    var times = op.e1n_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.changelist.Operations.popInto.<anonymous>' call
        otherObjIdx = otherObjIdx - 1 | 0;
        thisObjIdx = thisObjIdx - 1 | 0;
        other.w1m_1[otherObjIdx] = this.w1m_1[thisObjIdx];
        this.w1m_1[thisObjIdx] = null;
      }
       while (inductionVariable < times);
    var thisIntIdx = this.v1m_1;
    var otherIntIdx = other.v1m_1;
    // Inline function 'kotlin.repeat' call
    var times_0 = op.d1n_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < times_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.runtime.changelist.Operations.popInto.<anonymous>' call
        otherIntIdx = otherIntIdx - 1 | 0;
        thisIntIdx = thisIntIdx - 1 | 0;
        other.u1m_1[otherIntIdx] = this.u1m_1[thisIntIdx];
        this.u1m_1[thisIntIdx] = 0;
      }
       while (inductionVariable_0 < times_0);
    this.x1m_1 = this.x1m_1 - op.e1n_1 | 0;
    this.v1m_1 = this.v1m_1 - op.d1n_1 | 0;
  };
  protoOf(Operations).a1n = function (applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.drain' call
    // Inline function 'androidx.compose.runtime.changelist.Operations.forEach' call
    if (this.g19()) {
      var iterator = new OpIterator(this);
      do {
        // Inline function 'androidx.compose.runtime.changelist.Operations.executeAndFlushAllPendingOperations.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        iterator.z1q().m1o(iterator, applier, slots, rememberManager);
      }
       while (iterator.z());
    }
    this.b1();
  };
  protoOf(Operations).toString = function () {
    return anyToString(this);
  };
  function IdentityArrayMap$asMap$1$entries$1$iterator$1$1(this$0, $index) {
    var tmp = this;
    var tmp_0 = this$0.b16_1[$index];
    tmp.c1r_1 = !(tmp_0 == null) ? tmp_0 : THROW_CCE();
    var tmp_1 = this;
    var tmp_2 = this$0.c16_1[$index];
    tmp_1.d1r_1 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
  }
  protoOf(IdentityArrayMap$asMap$1$entries$1$iterator$1$1).i2 = function () {
    return this.c1r_1;
  };
  protoOf(IdentityArrayMap$asMap$1$entries$1$iterator$1$1).j2 = function () {
    return this.d1r_1;
  };
  function IdentityArrayMap$asMap$o$_get_entries_$o$iterator$slambda_r160he(this$0, resultContinuation) {
    this.m1r_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(IdentityArrayMap$asMap$o$_get_entries_$o$iterator$slambda_r160he).q1r = function ($this$sequence, $completion) {
    var tmp = this.r1r($this$sequence, $completion);
    tmp.yb_1 = Unit_instance;
    tmp.zb_1 = null;
    return tmp.ic();
  };
  protoOf(IdentityArrayMap$asMap$o$_get_entries_$o$iterator$slambda_r160he).uc = function (p1, $completion) {
    return this.q1r(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(IdentityArrayMap$asMap$o$_get_entries_$o$iterator$slambda_r160he).ic = function () {
    var suspendResult = this.yb_1;
    $sm: do
      try {
        var tmp = this.wb_1;
        switch (tmp) {
          case 0:
            this.xb_1 = 4;
            this.o1r_1 = until(0, this.m1r_1.d16_1).k();
            this.wb_1 = 1;
            continue $sm;
          case 1:
            if (!this.o1r_1.x()) {
              this.wb_1 = 3;
              continue $sm;
            }

            this.p1r_1 = this.o1r_1.z();
            this.wb_1 = 2;
            suspendResult = this.n1r_1.he(new IdentityArrayMap$asMap$1$entries$1$iterator$1$1(this.m1r_1, this.p1r_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.wb_1 = 1;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.zb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.xb_1 === 4) {
          throw e;
        } else {
          this.wb_1 = this.xb_1;
          this.zb_1 = e;
        }
      }
     while (true);
  };
  protoOf(IdentityArrayMap$asMap$o$_get_entries_$o$iterator$slambda_r160he).r1r = function ($this$sequence, completion) {
    var i = new IdentityArrayMap$asMap$o$_get_entries_$o$iterator$slambda_r160he(this.m1r_1, completion);
    i.n1r_1 = $this$sequence;
    return i;
  };
  function IdentityArrayMap$asMap$o$_get_entries_$o$iterator$slambda_r160he_0(this$0, resultContinuation) {
    var i = new IdentityArrayMap$asMap$o$_get_entries_$o$iterator$slambda_r160he(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.q1r($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function IdentityArrayMap$asMap$o$_get_keys_$o$iterator$slambda_qj88bw(this$0, resultContinuation) {
    this.a1s_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(IdentityArrayMap$asMap$o$_get_keys_$o$iterator$slambda_qj88bw).e1s = function ($this$sequence, $completion) {
    var tmp = this.f1s($this$sequence, $completion);
    tmp.yb_1 = Unit_instance;
    tmp.zb_1 = null;
    return tmp.ic();
  };
  protoOf(IdentityArrayMap$asMap$o$_get_keys_$o$iterator$slambda_qj88bw).uc = function (p1, $completion) {
    return this.e1s(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(IdentityArrayMap$asMap$o$_get_keys_$o$iterator$slambda_qj88bw).ic = function () {
    var suspendResult = this.yb_1;
    $sm: do
      try {
        var tmp = this.wb_1;
        switch (tmp) {
          case 0:
            this.xb_1 = 4;
            this.c1s_1 = until(0, this.a1s_1.d16_1).k();
            this.wb_1 = 1;
            continue $sm;
          case 1:
            if (!this.c1s_1.x()) {
              this.wb_1 = 3;
              continue $sm;
            }

            this.d1s_1 = this.c1s_1.z();
            this.wb_1 = 2;
            var tmp_0 = this.a1s_1.b16_1[this.d1s_1];
            suspendResult = this.b1s_1.he(!(tmp_0 == null) ? tmp_0 : THROW_CCE(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.wb_1 = 1;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.zb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.xb_1 === 4) {
          throw e;
        } else {
          this.wb_1 = this.xb_1;
          this.zb_1 = e;
        }
      }
     while (true);
  };
  protoOf(IdentityArrayMap$asMap$o$_get_keys_$o$iterator$slambda_qj88bw).f1s = function ($this$sequence, completion) {
    var i = new IdentityArrayMap$asMap$o$_get_keys_$o$iterator$slambda_qj88bw(this.a1s_1, completion);
    i.b1s_1 = $this$sequence;
    return i;
  };
  function IdentityArrayMap$asMap$o$_get_keys_$o$iterator$slambda_qj88bw_0(this$0, resultContinuation) {
    var i = new IdentityArrayMap$asMap$o$_get_keys_$o$iterator$slambda_qj88bw(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.e1s($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function IdentityArrayMap$asMap$o$_get_values_$o$iterator$slambda_qilghu(this$0, resultContinuation) {
    this.o1s_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(IdentityArrayMap$asMap$o$_get_values_$o$iterator$slambda_qilghu).s1s = function ($this$sequence, $completion) {
    var tmp = this.t1s($this$sequence, $completion);
    tmp.yb_1 = Unit_instance;
    tmp.zb_1 = null;
    return tmp.ic();
  };
  protoOf(IdentityArrayMap$asMap$o$_get_values_$o$iterator$slambda_qilghu).uc = function (p1, $completion) {
    return this.s1s(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(IdentityArrayMap$asMap$o$_get_values_$o$iterator$slambda_qilghu).ic = function () {
    var suspendResult = this.yb_1;
    $sm: do
      try {
        var tmp = this.wb_1;
        switch (tmp) {
          case 0:
            this.xb_1 = 4;
            this.q1s_1 = until(0, this.o1s_1.d16_1).k();
            this.wb_1 = 1;
            continue $sm;
          case 1:
            if (!this.q1s_1.x()) {
              this.wb_1 = 3;
              continue $sm;
            }

            this.r1s_1 = this.q1s_1.z();
            this.wb_1 = 2;
            var tmp_0 = this.o1s_1.c16_1[this.r1s_1];
            suspendResult = this.p1s_1.he((tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.wb_1 = 1;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.zb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.xb_1 === 4) {
          throw e;
        } else {
          this.wb_1 = this.xb_1;
          this.zb_1 = e;
        }
      }
     while (true);
  };
  protoOf(IdentityArrayMap$asMap$o$_get_values_$o$iterator$slambda_qilghu).t1s = function ($this$sequence, completion) {
    var i = new IdentityArrayMap$asMap$o$_get_values_$o$iterator$slambda_qilghu(this.o1s_1, completion);
    i.p1s_1 = $this$sequence;
    return i;
  };
  function IdentityArrayMap$asMap$o$_get_values_$o$iterator$slambda_qilghu_0(this$0, resultContinuation) {
    var i = new IdentityArrayMap$asMap$o$_get_values_$o$iterator$slambda_qilghu(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.s1s($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function IdentityArrayMap$asMap$1$entries$1(this$0) {
    this.u1s_1 = this$0;
  }
  protoOf(IdentityArrayMap$asMap$1$entries$1).i = function () {
    return this.u1s_1.d16_1;
  };
  protoOf(IdentityArrayMap$asMap$1$entries$1).o = function () {
    return this.u1s_1.o();
  };
  protoOf(IdentityArrayMap$asMap$1$entries$1).k = function () {
    return sequence(IdentityArrayMap$asMap$o$_get_entries_$o$iterator$slambda_r160he_0(this.u1s_1, null)).k();
  };
  protoOf(IdentityArrayMap$asMap$1$entries$1).v1s = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.o();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.k();
      while (tmp0_iterator.x()) {
        var element = tmp0_iterator.z();
        // Inline function 'androidx.compose.runtime.collection.<no name provided>.containsAll.<anonymous>' call
        if (!this.w1s(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(IdentityArrayMap$asMap$1$entries$1).n = function (elements) {
    return this.v1s(elements);
  };
  protoOf(IdentityArrayMap$asMap$1$entries$1).w1s = function (element) {
    return this.u1s_1.c1e(element.i2()) === element.j2();
  };
  protoOf(IdentityArrayMap$asMap$1$entries$1).m = function (element) {
    if (!(!(element == null) ? isInterface(element, Entry) : false))
      return false;
    return this.w1s((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  function IdentityArrayMap$asMap$1$keys$1(this$0) {
    this.x1s_1 = this$0;
  }
  protoOf(IdentityArrayMap$asMap$1$keys$1).i = function () {
    return this.x1s_1.d16_1;
  };
  protoOf(IdentityArrayMap$asMap$1$keys$1).o = function () {
    return this.x1s_1.o();
  };
  protoOf(IdentityArrayMap$asMap$1$keys$1).k = function () {
    return sequence(IdentityArrayMap$asMap$o$_get_keys_$o$iterator$slambda_qj88bw_0(this.x1s_1, null)).k();
  };
  protoOf(IdentityArrayMap$asMap$1$keys$1).y1s = function (elements) {
    var tmp0_iterator = elements.k();
    while (tmp0_iterator.x()) {
      var key = tmp0_iterator.z();
      if (!this.d1e(key))
        return false;
    }
    return true;
  };
  protoOf(IdentityArrayMap$asMap$1$keys$1).n = function (elements) {
    return this.y1s(elements);
  };
  protoOf(IdentityArrayMap$asMap$1$keys$1).d1e = function (element) {
    return this.x1s_1.d1e(element);
  };
  protoOf(IdentityArrayMap$asMap$1$keys$1).m = function (element) {
    if (!!(element == null))
      return false;
    return this.d1e(!(element == null) ? element : THROW_CCE());
  };
  function IdentityArrayMap$asMap$1$values$1(this$0) {
    this.z1s_1 = this$0;
  }
  protoOf(IdentityArrayMap$asMap$1$values$1).i = function () {
    return this.z1s_1.d16_1;
  };
  protoOf(IdentityArrayMap$asMap$1$values$1).o = function () {
    return this.z1s_1.o();
  };
  protoOf(IdentityArrayMap$asMap$1$values$1).k = function () {
    return sequence(IdentityArrayMap$asMap$o$_get_values_$o$iterator$slambda_qilghu_0(this.z1s_1, null)).k();
  };
  protoOf(IdentityArrayMap$asMap$1$values$1).a1t = function (elements) {
    var tmp0_iterator = elements.k();
    while (tmp0_iterator.x()) {
      var value = tmp0_iterator.z();
      if (!this.b1t(value))
        return false;
    }
    return true;
  };
  protoOf(IdentityArrayMap$asMap$1$values$1).n = function (elements) {
    return this.a1t(elements);
  };
  protoOf(IdentityArrayMap$asMap$1$values$1).b1t = function (element) {
    var inductionVariable = 0;
    var last = this.z1s_1.d16_1;
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals(this.z1s_1.c16_1[index], element))
          return true;
      }
       while (inductionVariable < last);
    return false;
  };
  protoOf(IdentityArrayMap$asMap$1$values$1).m = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.b1t((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function find_0($this, key) {
    var keyIdentity = identityHashCode(key);
    var low = 0;
    var high = $this.d16_1 - 1 | 0;
    var keys = $this.b16_1;
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
    var keys = $this.b16_1;
    var size = $this.d16_1;
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
    this.c1t_1 = this$0;
  }
  protoOf(IdentityArrayMap$asMap$1).f2 = function () {
    return new IdentityArrayMap$asMap$1$entries$1(this.c1t_1);
  };
  protoOf(IdentityArrayMap$asMap$1).d2 = function () {
    return new IdentityArrayMap$asMap$1$keys$1(this.c1t_1);
  };
  protoOf(IdentityArrayMap$asMap$1).i = function () {
    return this.c1t_1.d16_1;
  };
  protoOf(IdentityArrayMap$asMap$1).e2 = function () {
    return new IdentityArrayMap$asMap$1$values$1(this.c1t_1);
  };
  protoOf(IdentityArrayMap$asMap$1).o = function () {
    return this.c1t_1.o();
  };
  protoOf(IdentityArrayMap$asMap$1).c1e = function (key) {
    return this.c1t_1.c1e(key);
  };
  protoOf(IdentityArrayMap$asMap$1).p2 = function (key) {
    if (!!(key == null))
      return null;
    return this.c1e(!(key == null) ? key : THROW_CCE());
  };
  protoOf(IdentityArrayMap$asMap$1).d1t = function (key) {
    return !(this.c1t_1.c1e(key) == null);
  };
  protoOf(IdentityArrayMap$asMap$1).m2 = function (key) {
    if (!!(key == null))
      return false;
    return this.d1t(!(key == null) ? key : THROW_CCE());
  };
  function IdentityArrayMap(capacity) {
    capacity = capacity === VOID ? 16 : capacity;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.b16_1 = fillArrayVal(Array(capacity), null);
    var tmp_0 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.c16_1 = fillArrayVal(Array(capacity), null);
    this.d16_1 = 0;
  }
  protoOf(IdentityArrayMap).o = function () {
    return this.d16_1 === 0;
  };
  protoOf(IdentityArrayMap).g19 = function () {
    return this.d16_1 > 0;
  };
  protoOf(IdentityArrayMap).d1e = function (key) {
    return find_0(this, key) >= 0;
  };
  protoOf(IdentityArrayMap).c1e = function (key) {
    var index = find_0(this, key);
    var tmp;
    if (index >= 0) {
      var tmp_0 = this.c16_1[index];
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(IdentityArrayMap).l1c = function (key, value) {
    var keys = this.b16_1;
    var values = this.c16_1;
    var size = this.d16_1;
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
      this.b16_1 = destKeys;
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
      this.c16_1 = destValues;
      this.d16_1 = this.d16_1 + 1 | 0;
    }
  };
  protoOf(IdentityArrayMap).a1d = function () {
    return new IdentityArrayMap$asMap$1(this);
  };
  function find_1($this, value) {
    var low = 0;
    var high = $this.s15_1 - 1 | 0;
    var valueIdentity = identityHashCode(value);
    var values = $this.t15_1;
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
    var values = $this.t15_1;
    var size = $this.s15_1;
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
    this.f1t_1 = this$0;
    this.e1t_1 = 0;
  }
  protoOf(IdentityArraySet$iterator$1).x = function () {
    return this.e1t_1 < this.f1t_1.s15_1;
  };
  protoOf(IdentityArraySet$iterator$1).z = function () {
    var tmp = this.f1t_1.t15_1;
    var tmp1 = this.e1t_1;
    this.e1t_1 = tmp1 + 1 | 0;
    var tmp_0 = tmp[tmp1];
    return !(tmp_0 == null) ? tmp_0 : THROW_CCE();
  };
  function IdentityArraySet$toString$lambda(it) {
    return toString(it);
  }
  function IdentityArraySet() {
    this.s15_1 = 0;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.t15_1 = fillArrayVal(Array(16), null);
  }
  protoOf(IdentityArraySet).i = function () {
    return this.s15_1;
  };
  protoOf(IdentityArraySet).j1g = function (element) {
    return find_1(this, element) >= 0;
  };
  protoOf(IdentityArraySet).m = function (element) {
    if (!!(element == null))
      return false;
    return this.j1g(!(element == null) ? element : THROW_CCE());
  };
  protoOf(IdentityArraySet).q1a = function (value) {
    var index;
    var size = this.s15_1;
    var values = this.t15_1;
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
      this.t15_1 = newSorted;
    } else {
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset_0 = insertIndex + 1 | 0;
      arrayCopy(values, values, destinationOffset_0, insertIndex, size);
    }
    this.t15_1[insertIndex] = value;
    this.s15_1 = this.s15_1 + 1 | 0;
    return true;
  };
  protoOf(IdentityArraySet).b1 = function () {
    fill_0(this.t15_1, null);
    this.s15_1 = 0;
  };
  protoOf(IdentityArraySet).c1h = function (collection) {
    if (collection.o())
      return Unit_instance;
    if (!(collection instanceof IdentityArraySet)) {
      var tmp0_iterator = collection.k();
      while (tmp0_iterator.x()) {
        var value = tmp0_iterator.z();
        this.q1a(value);
      }
    } else {
      var thisValues = this.t15_1;
      var otherValues = collection.t15_1;
      var thisSize = this.s15_1;
      var otherSize = collection.s15_1;
      var combinedSize = thisSize + otherSize | 0;
      var needsResize = this.t15_1.length < combinedSize;
      var elementsInOrder = thisSize === 0 ? true : identityHashCode(thisValues[thisSize - 1 | 0]) < identityHashCode(otherValues[0]);
      if (!needsResize ? elementsInOrder : false) {
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(otherValues, thisValues, thisSize, 0, otherSize);
        this.s15_1 = this.s15_1 + otherSize | 0;
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
        this.t15_1 = newArray;
        this.s15_1 = newSize;
      }
    }
  };
  protoOf(IdentityArraySet).o = function () {
    return this.s15_1 === 0;
  };
  protoOf(IdentityArraySet).g19 = function () {
    return this.s15_1 > 0;
  };
  protoOf(IdentityArraySet).g1t = function (value) {
    var index = find_1(this, value);
    var values = this.t15_1;
    var size = this.s15_1;
    if (index >= 0) {
      if (index < (size - 1 | 0)) {
        // Inline function 'kotlin.collections.copyInto' call
        var startIndex = index + 1 | 0;
        arrayCopy(values, values, index, startIndex, size);
      }
      values[size - 1 | 0] = null;
      this.s15_1 = this.s15_1 - 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(IdentityArraySet).yd = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.o();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.k();
      while (tmp0_iterator.x()) {
        var element = tmp0_iterator.z();
        // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.containsAll.<anonymous>' call
        if (!this.j1g(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(IdentityArraySet).n = function (elements) {
    return this.yd(elements);
  };
  protoOf(IdentityArraySet).k = function () {
    return new IdentityArraySet$iterator$1(this);
  };
  protoOf(IdentityArraySet).toString = function () {
    return joinToString(this, VOID, '[', ']', VOID, VOID, IdentityArraySet$toString$lambda);
  };
  function MutableVector(content, size) {
    this.f16_1 = content;
    this.g16_1 = null;
    this.h16_1 = size;
  }
  protoOf(MutableVector).i16 = function (element) {
    this.h1t(this.h16_1 + 1 | 0);
    this.f16_1[this.h16_1] = element;
    this.h16_1 = this.h16_1 + 1 | 0;
    return true;
  };
  protoOf(MutableVector).h1t = function (capacity) {
    var oldContent = this.f16_1;
    if (oldContent.length < capacity) {
      // Inline function 'kotlin.math.max' call
      var b = imul(oldContent.length, 2);
      var newSize = Math.max(capacity, b);
      this.f16_1 = copyOf_0(oldContent, newSize);
    }
  };
  protoOf(MutableVector).g1 = function (index) {
    var content = this.f16_1;
    var tmp = content[index];
    var item = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
    if (!(index === (this.h16_1 - 1 | 0))) {
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = index + 1 | 0;
      var endIndex = this.h16_1;
      arrayCopy(content, content, index, startIndex, endIndex);
    }
    this.h16_1 = this.h16_1 - 1 | 0;
    content[this.h16_1] = null;
    return item;
  };
  function ScopeMap() {
    this.s1b_1 = mutableScatterMapOf();
  }
  protoOf(ScopeMap).x1b = function (key, scope) {
    // Inline function 'androidx.collection.MutableScatterMap.compute' call
    var this_0 = this.s1b_1;
    var index = this_0.tu(key);
    var inserting = index < 0;
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.add.<anonymous>' call
    var tmp;
    if (inserting) {
      tmp = null;
    } else {
      var tmp_0 = this_0.ju_1[index];
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    }
    var value = tmp;
    var tmp_1;
    if (value == null) {
      tmp_1 = scope;
    } else {
      if (value instanceof MutableScatterSet) {
        (value instanceof MutableScatterSet ? value : THROW_CCE()).u(scope);
        tmp_1 = value;
      } else {
        var tmp_2;
        if (!(value === scope)) {
          var set = new MutableScatterSet();
          set.u(!(value == null) ? value : THROW_CCE());
          set.u(scope);
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
      this_0.iu_1[insertionIndex] = key;
      this_0.ju_1[insertionIndex] = computedValue;
    } else {
      this_0.ju_1[index] = computedValue;
    }
  };
  protoOf(ScopeMap).w1b = function (element) {
    return this.s1b_1.m2(element);
  };
  protoOf(ScopeMap).v1b = function (key, scope) {
    var tmp0_elvis_lhs = this.s1b_1.p2(key);
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
      var removed = set.v(scope);
      if (removed ? set.o() : false) {
        this.s1b_1.h2(key);
      }
      return removed;
    } else {
      if (equals(value, scope)) {
        this.s1b_1.h2(key);
        tmp_0 = true;
      } else {
        tmp_0 = false;
      }
    }
    return tmp_0;
  };
  protoOf(ScopeMap).k1d = function (scope) {
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf' call
    // Inline function 'androidx.collection.MutableScatterMap.removeIf' call
    var this_0 = this.s1b_1;
    $l$block_0: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this_0.hu_1;
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
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.MutableScatterMap.removeIf.<anonymous>' call
                  // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf.<anonymous>' call
                  var tmp = this_0.iu_1[index];
                  (tmp == null ? true : !(tmp == null)) || THROW_CCE();
                  var tmp_0 = this_0.ju_1[index];
                  var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  var tmp_1;
                  if (value instanceof MutableScatterSet) {
                    var set = value instanceof MutableScatterSet ? value : THROW_CCE();
                    // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
                    var elements = set.wu_1;
                    $l$block: {
                      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                      // Inline function 'kotlin.contracts.contract' call
                      var m_0 = set.vu_1;
                      var lastIndex_0 = m_0.length - 2 | 0;
                      var inductionVariable_1 = 0;
                      if (inductionVariable_1 <= lastIndex_0)
                        do {
                          var i_0 = inductionVariable_1;
                          inductionVariable_1 = inductionVariable_1 + 1 | 0;
                          var slot_0 = m_0[i_0];
                          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                          var this_2 = slot_0;
                          if (!this_2.lb(this_2.hb().ib(7)).lb(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                            var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
                            var inductionVariable_2 = 0;
                            if (inductionVariable_2 < bitCount_0)
                              do {
                                var j_0 = inductionVariable_2;
                                inductionVariable_2 = inductionVariable_2 + 1 | 0;
                                // Inline function 'androidx.collection.isFull' call
                                if (slot_0.lb(new Long(255, 0)).x9(new Long(128, 0)) < 0) {
                                  var index_0 = (i_0 << 3) + j_0 | 0;
                                  // Inline function 'androidx.collection.MutableScatterSet.removeIf.<anonymous>' call
                                  // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScope.<anonymous>' call
                                  var tmp_2 = elements[index_0];
                                  if (((tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE()) === scope) {
                                    set.hv(index_0);
                                  }
                                }
                                slot_0 = slot_0.jb(8);
                              }
                               while (inductionVariable_2 < bitCount_0);
                            if (!(bitCount_0 === 8)) {
                              break $l$block;
                            }
                          }
                        }
                         while (!(i_0 === lastIndex_0));
                    }
                    tmp_1 = set.o();
                  } else {
                    // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScope.<anonymous>' call
                    tmp_1 = (!(value == null) ? value : THROW_CCE()) === scope;
                  }
                  if (tmp_1) {
                    this_0.uu(index);
                  }
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
  };
  function persistentSetOf() {
    return Companion_getInstance_10().j1t();
  }
  function persistentListOf() {
    return persistentVectorOf();
  }
  function AbstractListIterator(index, size) {
    this.k1t_1 = index;
    this.l1t_1 = size;
  }
  protoOf(AbstractListIterator).x = function () {
    return this.k1t_1 < this.l1t_1;
  };
  protoOf(AbstractListIterator).m1t = function () {
    if (!this.x())
      throw NoSuchElementException_init_$Create$_0();
  };
  function AbstractPersistentList() {
    AbstractList.call(this);
  }
  protoOf(AbstractPersistentList).a1 = function (elements) {
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.mutate' call
    // Inline function 'kotlin.apply' call
    var this_0 = this.n1t();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.AbstractPersistentList.addAll.<anonymous>' call
    this_0.a1(elements);
    return this_0.w2();
  };
  protoOf(AbstractPersistentList).v = function (element) {
    var index = this.l(element);
    if (!(index === -1)) {
      return this.g1(index);
    }
    return this;
  };
  protoOf(AbstractPersistentList).m = function (element) {
    return !(this.l(element) === -1);
  };
  protoOf(AbstractPersistentList).n = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.o();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.k();
      while (tmp0_iterator.x()) {
        var element = tmp0_iterator.z();
        // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.AbstractPersistentList.containsAll.<anonymous>' call
        if (!this.m(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(AbstractPersistentList).k = function () {
    return this.ta();
  };
  protoOf(AbstractPersistentList).ta = function () {
    return this.s1(0);
  };
  function BufferIterator(buffer, index, size) {
    AbstractListIterator.call(this, index, size);
    this.r1t_1 = buffer;
  }
  protoOf(BufferIterator).z = function () {
    if (!this.x()) {
      throw NoSuchElementException_init_$Create$_0();
    }
    var tmp1 = this.k1t_1;
    this.k1t_1 = tmp1 + 1 | 0;
    return this.r1t_1[tmp1];
  };
  function rootSize($this) {
    return rootSize_1($this.u1t_1);
  }
  function pushFilledTail($this, root, filledTail, newTail) {
    if ($this.u1t_1 >> get_LOG_MAX_BUFFER_SIZE() > 1 << $this.v1t_1) {
      var newRoot = presizedBufferWith(root);
      var newRootShift = $this.v1t_1 + get_LOG_MAX_BUFFER_SIZE() | 0;
      newRoot = pushTail($this, newRoot, newRootShift, filledTail);
      return new PersistentVector(newRoot, newTail, $this.u1t_1 + 1 | 0, newRootShift);
    }
    var newRoot_0 = pushTail($this, root, $this.v1t_1, filledTail);
    return new PersistentVector(newRoot_0, newTail, $this.u1t_1 + 1 | 0, $this.v1t_1);
  }
  function pushTail($this, root, shift, tail) {
    var bufferIndex = indexSegment($this.u1t_1 - 1 | 0, shift);
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
    var tailSize = $this.u1t_1 - rootSize($this) | 0;
    var newTail = copyOf_0($this.t1t_1, get_MAX_BUFFER_SIZE());
    if (tailSize < get_MAX_BUFFER_SIZE()) {
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = $this.t1t_1;
      var destinationOffset = tailIndex + 1 | 0;
      arrayCopy(this_0, newTail, destinationOffset, tailIndex, tailSize);
      newTail[tailIndex] = element;
      return new PersistentVector(root, newTail, $this.u1t_1 + 1 | 0, $this.v1t_1);
    }
    var lastElement = $this.t1t_1[get_MAX_BUFFER_SIZE_MINUS_ONE()];
    // Inline function 'kotlin.collections.copyInto' call
    var this_1 = $this.t1t_1;
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
      elementCarry.w1t_1 = root[get_MAX_BUFFER_SIZE_MINUS_ONE()];
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
        newRoot_0[i] = insertIntoRoot($this, (!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE(), lowerLevelShift, 0, elementCarry.w1t_1, elementCarry);
      }
       while (inductionVariable < last);
    return newRoot_0;
  }
  function removeFromTailAt($this, root, rootSize, shift, index) {
    var tailSize = $this.u1t_1 - rootSize | 0;
    assert(index < tailSize);
    if (tailSize === 1) {
      return pullLastBufferFromRoot($this, root, rootSize, shift);
    }
    var newTail = copyOf_0($this.t1t_1, get_MAX_BUFFER_SIZE());
    if (index < (tailSize - 1 | 0)) {
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = $this.t1t_1;
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
    var tmp = tailCarry.w1t_1;
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
      tailCarry.w1t_1 = root[bufferIndex];
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
      newRoot[get_MAX_BUFFER_SIZE() - 1 | 0] = tailCarry.w1t_1;
      tailCarry.w1t_1 = root[bufferIndex];
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
      return $this.t1t_1;
    }
    var buffer = $this.s1t_1;
    var shift = $this.v1t_1;
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
    this.s1t_1 = root;
    this.t1t_1 = tail;
    this.u1t_1 = size;
    this.v1t_1 = rootShift;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.u1t_1 > get_MAX_BUFFER_SIZE())) {
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVector.<anonymous>' call
      var message = 'Trie-based persistent vector should have at least ' + (get_MAX_BUFFER_SIZE() + 1 | 0) + ' elements, got ' + this.u1t_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    assert((this.u1t_1 - rootSize_1(this.u1t_1) | 0) <= coerceAtMost(this.t1t_1.length, get_MAX_BUFFER_SIZE()));
  }
  protoOf(PersistentVector).i = function () {
    return this.u1t_1;
  };
  protoOf(PersistentVector).u = function (element) {
    var tailSize = this.u1t_1 - rootSize(this) | 0;
    if (tailSize < get_MAX_BUFFER_SIZE()) {
      var newTail = copyOf_0(this.t1t_1, get_MAX_BUFFER_SIZE());
      newTail[tailSize] = element;
      return new PersistentVector(this.s1t_1, newTail, this.u1t_1 + 1 | 0, this.v1t_1);
    }
    var newTail_0 = presizedBufferWith(element);
    return pushFilledTail(this, this.s1t_1, this.t1t_1, newTail_0);
  };
  protoOf(PersistentVector).o1t = function (index, element) {
    ListImplementation_instance.l1(index, this.u1t_1);
    if (index === this.u1t_1) {
      return this.u(element);
    }
    var rootSize_0 = rootSize(this);
    if (index >= rootSize_0) {
      return insertIntoTail(this, this.s1t_1, index - rootSize_0 | 0, element);
    }
    var elementCarry = new ObjectRef(null);
    var newRoot = insertIntoRoot(this, this.s1t_1, this.v1t_1, index, element, elementCarry);
    return insertIntoTail(this, newRoot, 0, elementCarry.w1t_1);
  };
  protoOf(PersistentVector).g1 = function (index) {
    ListImplementation_instance.r1(index, this.u1t_1);
    var rootSize_0 = rootSize(this);
    if (index >= rootSize_0) {
      return removeFromTailAt(this, this.s1t_1, rootSize_0, this.v1t_1, index - rootSize_0 | 0);
    }
    var newRoot = removeFromRootAt(this, this.s1t_1, this.v1t_1, index, new ObjectRef(this.t1t_1[0]));
    return removeFromTailAt(this, newRoot, rootSize_0, this.v1t_1, 0);
  };
  protoOf(PersistentVector).n1t = function () {
    return new PersistentVectorBuilder(this, this.s1t_1, this.t1t_1, this.v1t_1);
  };
  protoOf(PersistentVector).s1 = function (index) {
    ListImplementation_instance.l1(index, this.u1t_1);
    var tmp = this.t1t_1;
    return new PersistentVectorIterator(this.s1t_1, isArray(tmp) ? tmp : THROW_CCE(), index, this.u1t_1, (this.v1t_1 / get_LOG_MAX_BUFFER_SIZE() | 0) + 1 | 0);
  };
  protoOf(PersistentVector).j = function (index) {
    ListImplementation_instance.r1(index, this.u1t_1);
    var buffer = bufferFor(this, index);
    var tmp = buffer[index & get_MAX_BUFFER_SIZE_MINUS_ONE()];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(PersistentVector).r = function (index, element) {
    ListImplementation_instance.r1(index, this.u1t_1);
    if (rootSize(this) <= index) {
      var newTail = copyOf_0(this.t1t_1, get_MAX_BUFFER_SIZE());
      newTail[index & get_MAX_BUFFER_SIZE_MINUS_ONE()] = element;
      return new PersistentVector(this.s1t_1, newTail, this.u1t_1, this.v1t_1);
    }
    var newRoot = setInRoot(this, this.s1t_1, this.v1t_1, index, element);
    return new PersistentVector(newRoot, this.t1t_1, this.u1t_1, this.v1t_1);
  };
  function rootSize_0($this) {
    if ($this.f1u_1 <= get_MAX_BUFFER_SIZE()) {
      return 0;
    }
    return rootSize_1($this.f1u_1);
  }
  function tailSize($this, size) {
    if (size <= get_MAX_BUFFER_SIZE()) {
      return size;
    }
    return size - rootSize_1(size) | 0;
  }
  function tailSize_0($this) {
    return tailSize($this, $this.f1u_1);
  }
  function isMutable($this, buffer) {
    return buffer.length === get_MUTABLE_BUFFER_SIZE() ? buffer[get_MUTABLE_BUFFER_SIZE() - 1 | 0] === $this.c1u_1 : false;
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
    buffer[get_MUTABLE_BUFFER_SIZE() - 1 | 0] = $this.c1u_1;
    return buffer;
  }
  function mutableBuffer($this) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = get_MUTABLE_BUFFER_SIZE();
    var buffer = fillArrayVal(Array(size), null);
    buffer[get_MUTABLE_BUFFER_SIZE() - 1 | 0] = $this.c1u_1;
    return buffer;
  }
  function pushFilledTail_0($this, root, filledTail, newTail) {
    var tmp;
    if ($this.f1u_1 >> get_LOG_MAX_BUFFER_SIZE() > 1 << $this.b1u_1) {
      $this.d1u_1 = pushTail_0($this, mutableBufferWith($this, root), filledTail, $this.b1u_1 + get_LOG_MAX_BUFFER_SIZE() | 0);
      $this.e1u_1 = newTail;
      $this.b1u_1 = $this.b1u_1 + get_LOG_MAX_BUFFER_SIZE() | 0;
      $this.f1u_1 = $this.f1u_1 + 1 | 0;
      tmp = Unit_instance;
    } else if (root == null) {
      $this.d1u_1 = filledTail;
      $this.e1u_1 = newTail;
      $this.f1u_1 = $this.f1u_1 + 1 | 0;
      tmp = Unit_instance;
    } else {
      $this.d1u_1 = pushTail_0($this, root, filledTail, $this.b1u_1);
      $this.e1u_1 = newTail;
      $this.f1u_1 = $this.f1u_1 + 1 | 0;
      tmp = Unit_instance;
    }
    return tmp;
  }
  function pushTail_0($this, root, tail, shift) {
    var index = indexSegment($this.f1u_1 - 1 | 0, shift);
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
    while (index < get_MAX_BUFFER_SIZE() ? sourceIterator.x() : false) {
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      buffer[tmp0] = sourceIterator.z();
    }
    return buffer;
  }
  function pushBuffersIncreasingHeightIfNeeded($this, root, rootSize, buffers) {
    var buffersIterator = arrayIterator(buffers);
    var mutableRoot = rootSize >> get_LOG_MAX_BUFFER_SIZE() < 1 << $this.b1u_1 ? pushBuffers($this, root, rootSize, $this.b1u_1, buffersIterator) : makeMutable($this, root);
    while (buffersIterator.x()) {
      $this.b1u_1 = $this.b1u_1 + get_LOG_MAX_BUFFER_SIZE() | 0;
      mutableRoot = mutableBufferWith($this, mutableRoot);
      pushBuffers($this, mutableRoot, 1 << $this.b1u_1, $this.b1u_1, buffersIterator);
    }
    return mutableRoot;
  }
  function pushBuffers($this, root, rootSize, shift, buffersIterator) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!buffersIterator.x()) {
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
      return buffersIterator.z();
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
        tmp_1 = buffersIterator.x();
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
    var mutableTail = makeMutable($this, $this.e1u_1);
    if (tailSize < get_MAX_BUFFER_SIZE()) {
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = $this.e1u_1;
      var destinationOffset = index + 1 | 0;
      arrayCopy(this_0, mutableTail, destinationOffset, index, tailSize);
      mutableTail[index] = element;
      $this.d1u_1 = root;
      $this.e1u_1 = mutableTail;
      $this.f1u_1 = $this.f1u_1 + 1 | 0;
    } else {
      var lastElement = $this.e1u_1[get_MAX_BUFFER_SIZE_MINUS_ONE()];
      // Inline function 'kotlin.collections.copyInto' call
      var this_1 = $this.e1u_1;
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
      elementCarry.w1t_1 = root[get_MAX_BUFFER_SIZE_MINUS_ONE()];
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
        mutableRoot_0[i] = insertIntoRoot_0($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, 0, elementCarry.w1t_1, elementCarry);
      }
       while (inductionVariable < last);
    return mutableRoot_0;
  }
  function bufferFor_0($this, index) {
    if (rootSize_0($this) <= index) {
      return $this.e1u_1;
    }
    var buffer = ensureNotNull($this.d1u_1);
    var shift = $this.b1u_1;
    while (shift > 0) {
      var tmp = buffer[indexSegment(index, shift)];
      buffer = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
      shift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    }
    return buffer;
  }
  function removeFromTailAt_0($this, root, rootSize, shift, index) {
    var tailSize = $this.f1u_1 - rootSize | 0;
    assert(index < tailSize);
    var removedElement;
    if (tailSize === 1) {
      removedElement = $this.e1u_1[0];
      pullLastBufferFromRoot_0($this, root, rootSize, shift);
    } else {
      removedElement = $this.e1u_1[index];
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = $this.e1u_1;
      var destination = makeMutable($this, $this.e1u_1);
      var startIndex = index + 1 | 0;
      arrayCopy(this_0, destination, index, startIndex, tailSize);
      var mutableTail = destination;
      mutableTail[tailSize - 1 | 0] = null;
      $this.d1u_1 = root;
      $this.e1u_1 = mutableTail;
      $this.f1u_1 = (rootSize + tailSize | 0) - 1 | 0;
      $this.b1u_1 = shift;
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
      mutableRoot[get_MAX_BUFFER_SIZE() - 1 | 0] = tailCarry.w1t_1;
      tailCarry.w1t_1 = removedElement;
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
      $this.d1u_1 = null;
      var tmp = $this;
      var tmp_0;
      if (root == null) {
        // Inline function 'kotlin.emptyArray' call
        tmp_0 = [];
      } else {
        tmp_0 = root;
      }
      tmp.e1u_1 = tmp_0;
      $this.f1u_1 = rootSize;
      $this.b1u_1 = shift;
      return Unit_instance;
    }
    var tailCarry = new ObjectRef(null);
    var newRoot = ensureNotNull(pullLastBuffer_0($this, ensureNotNull(root), shift, rootSize, tailCarry));
    var tmp_1 = $this;
    var tmp_2 = tailCarry.w1t_1;
    tmp_1.e1u_1 = (!(tmp_2 == null) ? isArray(tmp_2) : false) ? tmp_2 : THROW_CCE();
    $this.f1u_1 = rootSize;
    if (newRoot[1] == null) {
      var tmp_3 = $this;
      var tmp_4 = newRoot[0];
      tmp_3.d1u_1 = (tmp_4 == null ? true : isArray(tmp_4)) ? tmp_4 : THROW_CCE();
      $this.b1u_1 = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    } else {
      $this.d1u_1 = newRoot;
      $this.b1u_1 = shift;
    }
  }
  function pullLastBuffer_0($this, root, shift, rootSize, tailCarry) {
    var bufferIndex = indexSegment(rootSize - 1 | 0, shift);
    var tmp;
    if (shift === get_LOG_MAX_BUFFER_SIZE()) {
      tailCarry.w1t_1 = root[bufferIndex];
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
        $this.f1_1 = $this.f1_1 + 1 | 0;
      }
      oldElementCarry.w1t_1 = mutableRoot[bufferIndex];
      mutableRoot[bufferIndex] = e;
      return mutableRoot;
    }
    var tmp = mutableRoot[bufferIndex];
    mutableRoot[bufferIndex] = setInRoot_0($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, index, e, oldElementCarry);
    return mutableRoot;
  }
  function PersistentVectorBuilder(vector, vectorRoot, vectorTail, rootShift) {
    AbstractMutableList.call(this);
    this.y1t_1 = vector;
    this.z1t_1 = vectorRoot;
    this.a1u_1 = vectorTail;
    this.b1u_1 = rootShift;
    this.c1u_1 = new MutabilityOwnership();
    this.d1u_1 = this.z1t_1;
    this.e1u_1 = this.a1u_1;
    this.f1u_1 = this.y1t_1.i();
  }
  protoOf(PersistentVectorBuilder).i = function () {
    return this.f1u_1;
  };
  protoOf(PersistentVectorBuilder).g1u = function () {
    return this.f1_1;
  };
  protoOf(PersistentVectorBuilder).w2 = function () {
    var tmp = this;
    var tmp_0;
    if (this.d1u_1 === this.z1t_1 ? this.e1u_1 === this.a1u_1 : false) {
      tmp_0 = this.y1t_1;
    } else {
      this.c1u_1 = new MutabilityOwnership();
      this.z1t_1 = this.d1u_1;
      this.a1u_1 = this.e1u_1;
      var tmp_1;
      if (this.d1u_1 == null) {
        var tmp_2;
        // Inline function 'kotlin.collections.isEmpty' call
        if (this.e1u_1.length === 0) {
          tmp_2 = persistentVectorOf();
        } else {
          tmp_2 = new SmallPersistentVector(copyOf_0(this.e1u_1, this.f1u_1));
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = new PersistentVector(ensureNotNull(this.d1u_1), this.e1u_1, this.f1u_1, this.b1u_1);
      }
      tmp_0 = tmp_1;
    }
    tmp.y1t_1 = tmp_0;
    return this.y1t_1;
  };
  protoOf(PersistentVectorBuilder).u = function (element) {
    this.f1_1 = this.f1_1 + 1 | 0;
    var tailSize = tailSize_0(this);
    if (tailSize < get_MAX_BUFFER_SIZE()) {
      var mutableTail = makeMutable(this, this.e1u_1);
      mutableTail[tailSize] = element;
      this.e1u_1 = mutableTail;
      this.f1u_1 = this.f1u_1 + 1 | 0;
    } else {
      var newTail = mutableBufferWith(this, element);
      pushFilledTail_0(this, this.d1u_1, this.e1u_1, newTail);
    }
    return true;
  };
  protoOf(PersistentVectorBuilder).a1 = function (elements) {
    if (elements.o()) {
      return false;
    }
    this.f1_1 = this.f1_1 + 1 | 0;
    var tailSize = tailSize_0(this);
    var elementsIterator = elements.k();
    if ((get_MAX_BUFFER_SIZE() - tailSize | 0) >= elements.i()) {
      this.e1u_1 = copyToBuffer(this, makeMutable(this, this.e1u_1), tailSize, elementsIterator);
      this.f1u_1 = this.f1u_1 + elements.i() | 0;
    } else {
      var buffersSize = ((elements.i() + tailSize | 0) - 1 | 0) / get_MAX_BUFFER_SIZE() | 0;
      // Inline function 'kotlin.arrayOfNulls' call
      var buffers = fillArrayVal(Array(buffersSize), null);
      buffers[0] = copyToBuffer(this, makeMutable(this, this.e1u_1), tailSize, elementsIterator);
      var inductionVariable = 1;
      if (inductionVariable < buffersSize)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          buffers[index] = copyToBuffer(this, mutableBuffer(this), 0, elementsIterator);
        }
         while (inductionVariable < buffersSize);
      var tmp = this;
      var tmp_0 = this.d1u_1;
      var tmp_1 = rootSize_0(this);
      tmp.d1u_1 = pushBuffersIncreasingHeightIfNeeded(this, tmp_0, tmp_1, isArray(buffers) ? buffers : THROW_CCE());
      this.e1u_1 = copyToBuffer(this, mutableBuffer(this), 0, elementsIterator);
      this.f1u_1 = this.f1u_1 + elements.i() | 0;
    }
    return true;
  };
  protoOf(PersistentVectorBuilder).q1 = function (index, element) {
    ListImplementation_instance.l1(index, this.f1u_1);
    if (index === this.f1u_1) {
      this.u(element);
      return Unit_instance;
    }
    this.f1_1 = this.f1_1 + 1 | 0;
    var rootSize = rootSize_0(this);
    if (index >= rootSize) {
      insertIntoTail_0(this, this.d1u_1, index - rootSize | 0, element);
      return Unit_instance;
    }
    var elementCarry = new ObjectRef(null);
    var newRest = insertIntoRoot_0(this, ensureNotNull(this.d1u_1), this.b1u_1, index, element, elementCarry);
    var tmp = elementCarry.w1t_1;
    insertIntoTail_0(this, newRest, 0, (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE());
  };
  protoOf(PersistentVectorBuilder).j = function (index) {
    ListImplementation_instance.r1(index, this.f1u_1);
    var buffer = bufferFor_0(this, index);
    var tmp = buffer[index & get_MAX_BUFFER_SIZE_MINUS_ONE()];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(PersistentVectorBuilder).g1 = function (index) {
    ListImplementation_instance.r1(index, this.f1u_1);
    this.f1_1 = this.f1_1 + 1 | 0;
    var rootSize = rootSize_0(this);
    if (index >= rootSize) {
      var tmp = removeFromTailAt_0(this, this.d1u_1, rootSize, this.b1u_1, index - rootSize | 0);
      return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    }
    var elementCarry = new ObjectRef(this.e1u_1[0]);
    var newRoot = removeFromRootAt_0(this, ensureNotNull(this.d1u_1), this.b1u_1, index, elementCarry);
    removeFromTailAt_0(this, newRoot, rootSize, this.b1u_1, 0);
    var tmp_0 = elementCarry.w1t_1;
    return (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
  };
  protoOf(PersistentVectorBuilder).r = function (index, element) {
    ListImplementation_instance.r1(index, this.f1u_1);
    if (rootSize_0(this) <= index) {
      var mutableTail = makeMutable(this, this.e1u_1);
      if (!(mutableTail === this.e1u_1)) {
        this.f1_1 = this.f1_1 + 1 | 0;
      }
      var tailIndex = index & get_MAX_BUFFER_SIZE_MINUS_ONE();
      var oldElement = mutableTail[tailIndex];
      mutableTail[tailIndex] = element;
      this.e1u_1 = mutableTail;
      return (oldElement == null ? true : !(oldElement == null)) ? oldElement : THROW_CCE();
    }
    var oldElementCarry = new ObjectRef(null);
    this.d1u_1 = setInRoot_0(this, ensureNotNull(this.d1u_1), this.b1u_1, index, element, oldElementCarry);
    var tmp = oldElementCarry.w1t_1;
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(PersistentVectorBuilder).k = function () {
    return this.ta();
  };
  protoOf(PersistentVectorBuilder).ta = function () {
    return this.s1(0);
  };
  protoOf(PersistentVectorBuilder).s1 = function (index) {
    ListImplementation_instance.l1(index, this.f1u_1);
    return new PersistentVectorMutableIterator(this, index);
  };
  function PersistentVectorIterator(root, tail, index, size, trieHeight) {
    AbstractListIterator.call(this, index, size);
    this.j1u_1 = tail;
    var trieSize = rootSize_1(size);
    var trieIndex = coerceAtMost(index, trieSize);
    this.k1u_1 = new TrieIterator(root, trieIndex, trieSize, trieHeight);
  }
  protoOf(PersistentVectorIterator).z = function () {
    this.m1t();
    if (this.k1u_1.x()) {
      this.k1t_1 = this.k1t_1 + 1 | 0;
      return this.k1u_1.z();
    }
    var tmp3 = this.k1t_1;
    this.k1t_1 = tmp3 + 1 | 0;
    return this.j1u_1[tmp3 - this.k1u_1.l1t_1 | 0];
  };
  function reset($this) {
    $this.l1t_1 = $this.s1u_1.f1u_1;
    $this.t1u_1 = $this.s1u_1.g1u();
    $this.v1u_1 = -1;
    setupTrieIterator($this);
  }
  function setupTrieIterator($this) {
    var root = $this.s1u_1.d1u_1;
    if (root == null) {
      $this.u1u_1 = null;
      return Unit_instance;
    }
    var trieSize = rootSize_1($this.s1u_1.f1u_1);
    var trieIndex = coerceAtMost($this.k1t_1, trieSize);
    var trieHeight = ($this.s1u_1.b1u_1 / get_LOG_MAX_BUFFER_SIZE() | 0) + 1 | 0;
    if ($this.u1u_1 == null) {
      $this.u1u_1 = new TrieIterator(root, trieIndex, trieSize, trieHeight);
    } else {
      ensureNotNull($this.u1u_1).w1u(root, trieIndex, trieSize, trieHeight);
    }
  }
  function checkForComodification($this) {
    if (!($this.t1u_1 === $this.s1u_1.g1u()))
      throw ConcurrentModificationException_init_$Create$();
  }
  function checkHasIterated($this) {
    if ($this.v1u_1 === -1)
      throw IllegalStateException_init_$Create$_0();
  }
  function PersistentVectorMutableIterator(builder, index) {
    AbstractListIterator.call(this, index, builder.f1u_1);
    this.s1u_1 = builder;
    this.t1u_1 = this.s1u_1.g1u();
    this.u1u_1 = null;
    this.v1u_1 = -1;
    setupTrieIterator(this);
  }
  protoOf(PersistentVectorMutableIterator).z = function () {
    checkForComodification(this);
    this.m1t();
    this.v1u_1 = this.k1t_1;
    var tmp2_elvis_lhs = this.u1u_1;
    var tmp;
    if (tmp2_elvis_lhs == null) {
      var tmp_0 = this.s1u_1.e1u_1;
      var tmp1 = this.k1t_1;
      this.k1t_1 = tmp1 + 1 | 0;
      var tmp_1 = tmp_0[tmp1];
      return (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      tmp = tmp2_elvis_lhs;
    }
    var trieIterator = tmp;
    if (trieIterator.x()) {
      this.k1t_1 = this.k1t_1 + 1 | 0;
      return trieIterator.z();
    }
    var tmp_2 = this.s1u_1.e1u_1;
    var tmp6 = this.k1t_1;
    this.k1t_1 = tmp6 + 1 | 0;
    var tmp_3 = tmp_2[tmp6 - trieIterator.l1t_1 | 0];
    return (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
  };
  protoOf(PersistentVectorMutableIterator).y = function () {
    checkForComodification(this);
    checkHasIterated(this);
    this.s1u_1.g1(this.v1u_1);
    if (this.v1u_1 < this.k1t_1)
      this.k1t_1 = this.v1u_1;
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
    tmp.x1u_1 = new SmallPersistentVector(tmp$ret$0);
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
    this.y1u_1 = buffer;
    assert(this.y1u_1.length <= get_MAX_BUFFER_SIZE());
  }
  protoOf(SmallPersistentVector).i = function () {
    return this.y1u_1.length;
  };
  protoOf(SmallPersistentVector).u = function (element) {
    if (this.i() < get_MAX_BUFFER_SIZE()) {
      var newBuffer = copyOf_0(this.y1u_1, this.i() + 1 | 0);
      newBuffer[this.i()] = element;
      return new SmallPersistentVector(newBuffer);
    }
    var tail = presizedBufferWith(element);
    return new PersistentVector(this.y1u_1, tail, this.i() + 1 | 0, 0);
  };
  protoOf(SmallPersistentVector).a1 = function (elements) {
    if ((this.i() + elements.i() | 0) <= get_MAX_BUFFER_SIZE()) {
      var newBuffer = copyOf_0(this.y1u_1, this.i() + elements.i() | 0);
      var index = this.i();
      var tmp0_iterator = elements.k();
      while (tmp0_iterator.x()) {
        var element = tmp0_iterator.z();
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        newBuffer[tmp1] = element;
      }
      return new SmallPersistentVector(newBuffer);
    }
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.mutate' call
    // Inline function 'kotlin.apply' call
    var this_0 = this.n1t();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.SmallPersistentVector.addAll.<anonymous>' call
    this_0.a1(elements);
    return this_0.w2();
  };
  protoOf(SmallPersistentVector).o1t = function (index, element) {
    ListImplementation_instance.l1(index, this.i());
    if (index === this.i()) {
      return this.u(element);
    }
    if (this.i() < get_MAX_BUFFER_SIZE()) {
      var newBuffer = bufferOfSize(this, this.i() + 1 | 0);
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = this.y1u_1;
      arrayCopy(this_0, newBuffer, 0, 0, index);
      // Inline function 'kotlin.collections.copyInto' call
      var this_1 = this.y1u_1;
      var destinationOffset = index + 1 | 0;
      var endIndex = this.i();
      arrayCopy(this_1, newBuffer, destinationOffset, index, endIndex);
      newBuffer[index] = element;
      return new SmallPersistentVector(newBuffer);
    }
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var root = this.y1u_1.slice();
    // Inline function 'kotlin.collections.copyInto' call
    var this_2 = this.y1u_1;
    var destinationOffset_0 = index + 1 | 0;
    var endIndex_0 = this.i() - 1 | 0;
    arrayCopy(this_2, root, destinationOffset_0, index, endIndex_0);
    root[index] = element;
    var tail = presizedBufferWith(this.y1u_1[get_MAX_BUFFER_SIZE_MINUS_ONE()]);
    return new PersistentVector(root, tail, this.i() + 1 | 0, 0);
  };
  protoOf(SmallPersistentVector).g1 = function (index) {
    ListImplementation_instance.r1(index, this.i());
    if (this.i() === 1) {
      return Companion_getInstance_7().x1u_1;
    }
    var newBuffer = copyOf_0(this.y1u_1, this.i() - 1 | 0);
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = this.y1u_1;
    var startIndex = index + 1 | 0;
    var endIndex = this.i();
    arrayCopy(this_0, newBuffer, index, startIndex, endIndex);
    return new SmallPersistentVector(newBuffer);
  };
  protoOf(SmallPersistentVector).n1t = function () {
    return new PersistentVectorBuilder(this, null, this.y1u_1, 0);
  };
  protoOf(SmallPersistentVector).l = function (element) {
    return indexOf(this.y1u_1, element);
  };
  protoOf(SmallPersistentVector).s1 = function (index) {
    ListImplementation_instance.l1(index, this.i());
    var tmp = this.y1u_1;
    return new BufferIterator(isArray(tmp) ? tmp : THROW_CCE(), index, this.i());
  };
  protoOf(SmallPersistentVector).j = function (index) {
    ListImplementation_instance.r1(index, this.i());
    var tmp = this.y1u_1[index];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(SmallPersistentVector).r = function (index, element) {
    ListImplementation_instance.r1(index, this.i());
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var newBuffer = this.y1u_1.slice();
    newBuffer[index] = element;
    return new SmallPersistentVector(newBuffer);
  };
  function fillPath($this, index, startLevel) {
    var shift = imul($this.n1u_1 - startLevel | 0, get_LOG_MAX_BUFFER_SIZE());
    var i = startLevel;
    while (i < $this.n1u_1) {
      var tmp = $this.o1u_1;
      var tmp_0 = i;
      var tmp_1 = $this.o1u_1[i - 1 | 0];
      tmp[tmp_0] = ((!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE())[indexSegment(index, shift)];
      shift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
      i = i + 1 | 0;
    }
  }
  function fillPathIfNeeded($this, indexPredicate) {
    var shift = 0;
    while (indexSegment($this.k1t_1, shift) === indexPredicate) {
      shift = shift + get_LOG_MAX_BUFFER_SIZE() | 0;
    }
    if (shift > 0) {
      var level = ($this.n1u_1 - 1 | 0) - (shift / get_LOG_MAX_BUFFER_SIZE() | 0) | 0;
      fillPath($this, $this.k1t_1, level + 1 | 0);
    }
  }
  function elementAtCurrentIndex($this) {
    var leafBufferIndex = $this.k1t_1 & get_MAX_BUFFER_SIZE_MINUS_ONE();
    var tmp = $this.o1u_1[$this.n1u_1 - 1 | 0];
    return ((!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE())[leafBufferIndex];
  }
  function TrieIterator(root, index, size, height) {
    AbstractListIterator.call(this, index, size);
    this.n1u_1 = height;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size_0 = this.n1u_1;
    tmp.o1u_1 = fillArrayVal(Array(size_0), null);
    this.p1u_1 = index === size;
    this.o1u_1[0] = root;
    fillPath(this, index - (this.p1u_1 ? 1 : 0) | 0, 1);
  }
  protoOf(TrieIterator).w1u = function (root, index, size, height) {
    this.k1t_1 = index;
    this.l1t_1 = size;
    this.n1u_1 = height;
    if (this.o1u_1.length < height) {
      var tmp = this;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp.o1u_1 = fillArrayVal(Array(height), null);
    }
    this.o1u_1[0] = root;
    this.p1u_1 = index === size;
    fillPath(this, index - (this.p1u_1 ? 1 : 0) | 0, 1);
  };
  protoOf(TrieIterator).z = function () {
    if (!this.x()) {
      throw NoSuchElementException_init_$Create$_0();
    }
    var result = elementAtCurrentIndex(this);
    this.k1t_1 = this.k1t_1 + 1 | 0;
    if (this.k1t_1 === this.l1t_1) {
      this.p1u_1 = true;
      return result;
    }
    fillPathIfNeeded(this, 0);
    return result;
  };
  function persistentVectorOf() {
    return Companion_getInstance_7().x1u_1;
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
    this.w1t_1 = value;
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
    this.z1u_1 = new PersistentHashMap(Companion_getInstance_9().a1v_1, 0);
  }
  protoOf(Companion_7).b1v = function () {
    var tmp = this.z1u_1;
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
    this.e1v_1 = node;
    this.f1v_1 = size;
  }
  protoOf(PersistentHashMap).i = function () {
    return this.f1v_1;
  };
  protoOf(PersistentHashMap).d2 = function () {
    return new PersistentHashMapKeys(this);
  };
  protoOf(PersistentHashMap).e2 = function () {
    return new PersistentHashMapValues(this);
  };
  protoOf(PersistentHashMap).f2 = function () {
    return createEntries(this);
  };
  protoOf(PersistentHashMap).m2 = function (key) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return this.e1v_1.k1v(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMap).p2 = function (key) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return this.e1v_1.l1v(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMap).g2 = function (key, value) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp0_elvis_lhs = this.e1v_1.m1v(tmp$ret$0, key, value, 0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var newNodeResult = tmp;
    return new PersistentHashMap(newNodeResult.n1v_1, this.i() + newNodeResult.o1v_1 | 0);
  };
  protoOf(PersistentHashMap).h2 = function (key) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var newNode = this.e1v_1.p1v(tmp$ret$0, key, 0);
    if (this.e1v_1 === newNode) {
      return this;
    }
    if (newNode == null) {
      return Companion_getInstance_8().b1v();
    }
    return new PersistentHashMap(newNode, this.i() - 1 | 0);
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
    if ($this.q1v_1[pathIndex].w1v()) {
      return pathIndex;
    }
    if ($this.q1v_1[pathIndex].a1w()) {
      var node = $this.q1v_1[pathIndex].x1v();
      if (pathIndex === 6) {
        $this.q1v_1[pathIndex + 1 | 0].z1v(node.j1v_1, node.j1v_1.length);
      } else {
        $this.q1v_1[pathIndex + 1 | 0].z1v(node.j1v_1, imul(get_ENTRY_SIZE(), node.y1v()));
      }
      return moveToNextNodeWithData($this, pathIndex + 1 | 0);
    }
    return -1;
  }
  function ensureNextEntryIsReady($this) {
    if ($this.q1v_1[$this.r1v_1].w1v()) {
      return Unit_instance;
    }
    var inductionVariable = $this.r1v_1;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var result = moveToNextNodeWithData($this, i);
        if (result === -1 ? $this.q1v_1[i].a1w() : false) {
          $this.q1v_1[i].b1w();
          result = moveToNextNodeWithData($this, i);
        }
        if (!(result === -1)) {
          $this.r1v_1 = result;
          return Unit_instance;
        }
        if (i > 0) {
          $this.q1v_1[i - 1 | 0].b1w();
        }
        $this.q1v_1[i].z1v(Companion_getInstance_9().a1v_1.j1v_1, 0);
      }
       while (0 <= inductionVariable);
    $this.s1v_1 = false;
  }
  function checkHasNext($this) {
    if (!$this.x())
      throw NoSuchElementException_init_$Create$_0();
  }
  function PersistentHashMapBaseIterator(node, path) {
    this.q1v_1 = path;
    this.r1v_1 = 0;
    this.s1v_1 = true;
    this.q1v_1[0].z1v(node.j1v_1, imul(get_ENTRY_SIZE(), node.y1v()));
    this.r1v_1 = 0;
    ensureNextEntryIsReady(this);
  }
  protoOf(PersistentHashMapBaseIterator).x = function () {
    return this.s1v_1;
  };
  protoOf(PersistentHashMapBaseIterator).z = function () {
    checkHasNext(this);
    var result = this.q1v_1[this.r1v_1].z();
    ensureNextEntryIsReady(this);
    return result;
  };
  function TrieNodeBaseIterator() {
    this.t1v_1 = Companion_getInstance_9().a1v_1.j1v_1;
    this.u1v_1 = 0;
    this.v1v_1 = 0;
  }
  protoOf(TrieNodeBaseIterator).c1w = function (buffer, dataSize, index) {
    this.t1v_1 = buffer;
    this.u1v_1 = dataSize;
    this.v1v_1 = index;
  };
  protoOf(TrieNodeBaseIterator).z1v = function (buffer, dataSize) {
    this.c1w(buffer, dataSize, 0);
  };
  protoOf(TrieNodeBaseIterator).w1v = function () {
    return this.v1v_1 < this.u1v_1;
  };
  protoOf(TrieNodeBaseIterator).a1w = function () {
    assert(this.v1v_1 >= this.u1v_1);
    return this.v1v_1 < this.t1v_1.length;
  };
  protoOf(TrieNodeBaseIterator).x1v = function () {
    assert(this.a1w());
    var tmp = this.t1v_1[this.v1v_1];
    return tmp instanceof TrieNode ? tmp : THROW_CCE();
  };
  protoOf(TrieNodeBaseIterator).b1w = function () {
    assert(this.a1w());
    this.v1v_1 = this.v1v_1 + 1 | 0;
  };
  protoOf(TrieNodeBaseIterator).x = function () {
    return this.w1v();
  };
  function TrieNodeKeysIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeKeysIterator).z = function () {
    assert(this.w1v());
    this.v1v_1 = this.v1v_1 + 2 | 0;
    var tmp = this.t1v_1[this.v1v_1 - 2 | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  function TrieNodeValuesIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeValuesIterator).z = function () {
    assert(this.w1v());
    this.v1v_1 = this.v1v_1 + 2 | 0;
    var tmp = this.t1v_1[this.v1v_1 - 1 | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  function TrieNodeEntriesIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeEntriesIterator).z = function () {
    assert(this.w1v());
    this.v1v_1 = this.v1v_1 + 2 | 0;
    var tmp = this.t1v_1[this.v1v_1 - 2 | 0];
    var tmp_0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    var tmp_1 = this.t1v_1[this.v1v_1 - 1 | 0];
    return new MapEntry(tmp_0, (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE());
  };
  function MapEntry(key, value) {
    this.m1w_1 = key;
    this.n1w_1 = value;
  }
  protoOf(MapEntry).i2 = function () {
    return this.m1w_1;
  };
  protoOf(MapEntry).j2 = function () {
    return this.n1w_1;
  };
  protoOf(MapEntry).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.i2();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.j2();
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
      tmp = equals(tmp0_safe_receiver.i2(), this.i2()) ? equals(tmp0_safe_receiver.j2(), this.j2()) : false;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(MapEntry).toString = function () {
    return toString_0(this.i2()) + '=' + toString_0(this.j2());
  };
  function PersistentHashMapKeys(map) {
    AbstractSet.call(this);
    this.o1w_1 = map;
  }
  protoOf(PersistentHashMapKeys).i = function () {
    return this.o1w_1.i();
  };
  protoOf(PersistentHashMapKeys).f3 = function (element) {
    return this.o1w_1.m2(element);
  };
  protoOf(PersistentHashMapKeys).m = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.f3((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapKeys).k = function () {
    return new PersistentHashMapKeysIterator(this.o1w_1.e1v_1);
  };
  function PersistentHashMapValues(map) {
    AbstractCollection.call(this);
    this.p1w_1 = map;
  }
  protoOf(PersistentHashMapValues).i = function () {
    return this.p1w_1.i();
  };
  protoOf(PersistentHashMapValues).k3 = function (element) {
    return this.p1w_1.n2(element);
  };
  protoOf(PersistentHashMapValues).m = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.k3((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapValues).k = function () {
    return new PersistentHashMapValuesIterator(this.p1w_1.e1v_1);
  };
  function PersistentHashMapEntries(map) {
    AbstractSet.call(this);
    this.q1w_1 = map;
  }
  protoOf(PersistentHashMapEntries).i = function () {
    return this.q1w_1.i();
  };
  protoOf(PersistentHashMapEntries).r1w = function (element) {
    var tmp = !(element == null) ? element : THROW_CCE();
    if (!(!(tmp == null) ? isInterface(tmp, Entry) : false))
      return false;
    var tmp0_safe_receiver = this.q1w_1.p2(element.i2());
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapEntries.contains.<anonymous>' call
      tmp_0 = equals(tmp0_safe_receiver, element.j2());
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? element.j2() == null ? this.q1w_1.m2(element.i2()) : false : tmp1_elvis_lhs;
  };
  protoOf(PersistentHashMapEntries).m = function (element) {
    if (!(!(element == null) ? isInterface(element, Entry) : false))
      return false;
    return this.r1w((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapEntries).k = function () {
    return new PersistentHashMapEntriesIterator(this.q1w_1.e1v_1);
  };
  function TrieNode_init_$Init$(dataMap, nodeMap, buffer, $this) {
    TrieNode.call($this, dataMap, nodeMap, buffer, null);
    return $this;
  }
  function TrieNode_init_$Create$(dataMap, nodeMap, buffer) {
    return TrieNode_init_$Init$(dataMap, nodeMap, buffer, objectCreate(protoOf(TrieNode)));
  }
  function ModificationResult(node, sizeDelta) {
    this.n1v_1 = node;
    this.o1v_1 = sizeDelta;
  }
  function asInsertResult($this) {
    return new ModificationResult($this, 1);
  }
  function asUpdateResult($this) {
    return new ModificationResult($this, 0);
  }
  function hasNodeAt($this, positionMask) {
    return !(($this.h1v_1 & positionMask) === 0);
  }
  function keyAtIndex($this, keyIndex) {
    var tmp = $this.j1v_1[keyIndex];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  }
  function valueAtKeyIndex($this, keyIndex) {
    var tmp = $this.j1v_1[keyIndex + 1 | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  }
  function insertEntryAt($this, positionMask, key, value) {
    var keyIndex = $this.s1w(positionMask);
    var newBuffer = insertEntryAtIndex($this.j1v_1, keyIndex, key, value);
    return TrieNode_init_$Create$($this.g1v_1 | positionMask, $this.h1v_1, newBuffer);
  }
  function updateValueAtIndex($this, keyIndex, value) {
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var newBuffer = $this.j1v_1.slice();
    newBuffer[keyIndex + 1 | 0] = value;
    return TrieNode_init_$Create$($this.g1v_1, $this.h1v_1, newBuffer);
  }
  function updateNodeAtIndex($this, nodeIndex, positionMask, newNode) {
    var newNodeBuffer = newNode.j1v_1;
    if (newNodeBuffer.length === 2 ? newNode.h1v_1 === 0 : false) {
      if ($this.j1v_1.length === 1) {
        newNode.g1v_1 = $this.h1v_1;
        return newNode;
      }
      var keyIndex = $this.s1w(positionMask);
      var newBuffer = replaceNodeWithEntry($this.j1v_1, nodeIndex, keyIndex, newNodeBuffer[0], newNodeBuffer[1]);
      return TrieNode_init_$Create$($this.g1v_1 ^ positionMask, $this.h1v_1 ^ positionMask, newBuffer);
    }
    var newBuffer_0 = copyOf_0($this.j1v_1, $this.j1v_1.length);
    newBuffer_0[nodeIndex] = newNode;
    return TrieNode_init_$Create$($this.g1v_1, $this.h1v_1, newBuffer_0);
  }
  function removeNodeAtIndex($this, nodeIndex, positionMask) {
    if ($this.j1v_1.length === 1)
      return null;
    var newBuffer = removeNodeAtIndex_0($this.j1v_1, nodeIndex);
    return TrieNode_init_$Create$($this.g1v_1, $this.h1v_1 ^ positionMask, newBuffer);
  }
  function bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner) {
    var storedKey = keyAtIndex($this, keyIndex);
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = storedKey == null ? null : hashCode(storedKey);
    var storedKeyHash = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var storedValue = valueAtKeyIndex($this, keyIndex);
    var newNode = makeNode($this, storedKeyHash, storedKey, storedValue, newKeyHash, newKey, newValue, shift + 5 | 0, owner);
    var nodeIndex = $this.t1w(positionMask) + 1 | 0;
    return replaceEntryWithNode($this.j1v_1, keyIndex, nodeIndex, newNode);
  }
  function moveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift) {
    var newBuffer = bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, null);
    return TrieNode_init_$Create$($this.g1v_1 ^ positionMask, $this.h1v_1 | positionMask, newBuffer);
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
    if ($this.j1v_1.length === 2)
      return null;
    var newBuffer = removeEntryAtIndex_0($this.j1v_1, keyIndex);
    return TrieNode_init_$Create$($this.g1v_1 ^ positionMask, $this.h1v_1, newBuffer);
  }
  function collisionRemoveEntryAtIndex($this, i) {
    if ($this.j1v_1.length === 2)
      return null;
    var newBuffer = removeEntryAtIndex_0($this.j1v_1, i);
    return TrieNode_init_$Create$(0, 0, newBuffer);
  }
  function collisionContainsKey($this, key) {
    var progression = step(until(0, $this.j1v_1.length), 2);
    var inductionVariable = progression.ba_1;
    var last = progression.ca_1;
    var step_0 = progression.da_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, $this.j1v_1[i]))
          return true;
      }
       while (!(i === last));
    return false;
  }
  function collisionGet($this, key) {
    var progression = step(until(0, $this.j1v_1.length), 2);
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
    var progression = step(until(0, $this.j1v_1.length), 2);
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
          var newBuffer = $this.j1v_1.slice();
          newBuffer[i + 1 | 0] = value;
          return asUpdateResult(TrieNode_init_$Create$(0, 0, newBuffer));
        }
      }
       while (!(i === last));
    var newBuffer_0 = insertEntryAtIndex($this.j1v_1, 0, key, value);
    return asInsertResult(TrieNode_init_$Create$(0, 0, newBuffer_0));
  }
  function collisionRemove($this, key) {
    var progression = step(until(0, $this.j1v_1.length), 2);
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
  function replaceNode($this, targetNode, newNode, nodeIndex, positionMask) {
    return newNode == null ? removeNodeAtIndex($this, nodeIndex, positionMask) : !(targetNode === newNode) ? updateNodeAtIndex($this, nodeIndex, positionMask, newNode) : $this;
  }
  function Companion_8() {
    Companion_instance_9 = this;
    var tmp = this;
    // Inline function 'kotlin.emptyArray' call
    var tmp$ret$0 = [];
    tmp.a1v_1 = TrieNode_init_$Create$(0, 0, tmp$ret$0);
  }
  var Companion_instance_9;
  function Companion_getInstance_9() {
    if (Companion_instance_9 == null)
      new Companion_8();
    return Companion_instance_9;
  }
  function TrieNode(dataMap, nodeMap, buffer, ownedBy) {
    Companion_getInstance_9();
    this.g1v_1 = dataMap;
    this.h1v_1 = nodeMap;
    this.i1v_1 = ownedBy;
    this.j1v_1 = buffer;
  }
  protoOf(TrieNode).y1v = function () {
    return countOneBits(this.g1v_1);
  };
  protoOf(TrieNode).u1w = function (positionMask) {
    return !((this.g1v_1 & positionMask) === 0);
  };
  protoOf(TrieNode).s1w = function (positionMask) {
    return imul(2, countOneBits(this.g1v_1 & (positionMask - 1 | 0)));
  };
  protoOf(TrieNode).t1w = function (positionMask) {
    return (this.j1v_1.length - 1 | 0) - countOneBits(this.h1v_1 & (positionMask - 1 | 0)) | 0;
  };
  protoOf(TrieNode).v1w = function (nodeIndex) {
    var tmp = this.j1v_1[nodeIndex];
    return tmp instanceof TrieNode ? tmp : THROW_CCE();
  };
  protoOf(TrieNode).k1v = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.u1w(keyPositionMask)) {
      return equals(key, keyAtIndex(this, this.s1w(keyPositionMask)));
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var targetNode = this.v1w(this.t1w(keyPositionMask));
      if (shift === 30) {
        return collisionContainsKey(targetNode, key);
      }
      return targetNode.k1v(keyHash, key, shift + 5 | 0);
    }
    return false;
  };
  protoOf(TrieNode).l1v = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.u1w(keyPositionMask)) {
      var keyIndex = this.s1w(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return valueAtKeyIndex(this, keyIndex);
      }
      return null;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var targetNode = this.v1w(this.t1w(keyPositionMask));
      if (shift === 30) {
        return collisionGet(targetNode, key);
      }
      return targetNode.l1v(keyHash, key, shift + 5 | 0);
    }
    return null;
  };
  protoOf(TrieNode).m1v = function (keyHash, key, value, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.u1w(keyPositionMask)) {
      var keyIndex = this.s1w(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        if (valueAtKeyIndex(this, keyIndex) === value)
          return null;
        return asUpdateResult(updateValueAtIndex(this, keyIndex, value));
      }
      return asInsertResult(moveEntryToNode(this, keyIndex, keyPositionMask, keyHash, key, value, shift));
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.t1w(keyPositionMask);
      var targetNode = this.v1w(nodeIndex);
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
        var tmp1_elvis_lhs = targetNode.m1v(keyHash, key, value, shift + 5 | 0);
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
      var node = putResult.n1v_1;
      tmp_2.n1v_1 = updateNodeAtIndex(this, nodeIndex, keyPositionMask, node);
      return putResult;
    }
    return asInsertResult(insertEntryAt(this, keyPositionMask, key, value));
  };
  protoOf(TrieNode).p1v = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.u1w(keyPositionMask)) {
      var keyIndex = this.s1w(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return removeEntryAtIndex(this, keyIndex, keyPositionMask);
      }
      return this;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.t1w(keyPositionMask);
      var targetNode = this.v1w(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = collisionRemove(targetNode, key);
      } else {
        tmp = targetNode.p1v(keyHash, key, shift + 5 | 0);
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
    this.i1t_1 = new PersistentOrderedSet(EndOfChain_instance, EndOfChain_instance, Companion_getInstance_8().b1v());
  }
  protoOf(Companion_9).j1t = function () {
    return this.i1t_1;
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
    this.w1w_1 = firstElement;
    this.x1w_1 = lastElement;
    this.y1w_1 = hashMap;
  }
  protoOf(PersistentOrderedSet).i = function () {
    return this.y1w_1.i();
  };
  protoOf(PersistentOrderedSet).m = function (element) {
    return this.y1w_1.m2(element);
  };
  protoOf(PersistentOrderedSet).u = function (element) {
    if (this.y1w_1.m2(element)) {
      return this;
    }
    if (this.o()) {
      var newMap = this.y1w_1.g2(element, Links_init_$Create$());
      return new PersistentOrderedSet(element, element, newMap);
    }
    var tmp = this.x1w_1;
    var lastElement = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    var lastLinks = ensureNotNull(this.y1w_1.p2(lastElement));
    var newMap_0 = this.y1w_1.g2(lastElement, lastLinks.b1x(element)).g2(element, Links_init_$Create$_0(lastElement));
    return new PersistentOrderedSet(this.w1w_1, element, newMap_0);
  };
  protoOf(PersistentOrderedSet).v = function (element) {
    var tmp0_elvis_lhs = this.y1w_1.p2(element);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var links = tmp;
    var newMap = this.y1w_1.h2(element);
    if (links.c1x()) {
      // Inline function 'kotlin.collections.get' call
      var this_0 = newMap;
      var key = links.z1w_1;
      var tmp$ret$0 = (isInterface(this_0, Map) ? this_0 : THROW_CCE()).p2(key);
      var previousLinks = ensureNotNull(tmp$ret$0);
      var tmp_0 = newMap;
      var tmp_1 = links.z1w_1;
      newMap = tmp_0.g2((tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE(), previousLinks.b1x(links.a1x_1));
    }
    if (links.e1x()) {
      // Inline function 'kotlin.collections.get' call
      var this_1 = newMap;
      var key_0 = links.a1x_1;
      var tmp$ret$1 = (isInterface(this_1, Map) ? this_1 : THROW_CCE()).p2(key_0);
      var nextLinks = ensureNotNull(tmp$ret$1);
      var tmp_2 = newMap;
      var tmp_3 = links.a1x_1;
      newMap = tmp_2.g2((tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE(), nextLinks.d1x(links.z1w_1));
    }
    var newFirstElement = !links.c1x() ? links.a1x_1 : this.w1w_1;
    var newLastElement = !links.e1x() ? links.z1w_1 : this.x1w_1;
    return new PersistentOrderedSet(newFirstElement, newLastElement, newMap);
  };
  protoOf(PersistentOrderedSet).k = function () {
    return new PersistentOrderedSetIterator(this.w1w_1, this.y1w_1);
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
    this.z1w_1 = previous;
    this.a1x_1 = next;
  }
  protoOf(Links).b1x = function (newNext) {
    return new Links(this.z1w_1, newNext);
  };
  protoOf(Links).d1x = function (newPrevious) {
    return new Links(newPrevious, this.a1x_1);
  };
  protoOf(Links).e1x = function () {
    return !(this.a1x_1 === EndOfChain_instance);
  };
  protoOf(Links).c1x = function () {
    return !(this.z1w_1 === EndOfChain_instance);
  };
  function checkHasNext_0($this) {
    if (!$this.x())
      throw NoSuchElementException_init_$Create$_0();
  }
  function PersistentOrderedSetIterator(nextElement, map) {
    this.f1x_1 = nextElement;
    this.g1x_1 = map;
    this.h1x_1 = 0;
  }
  protoOf(PersistentOrderedSetIterator).x = function () {
    return this.h1x_1 < this.g1x_1.i();
  };
  protoOf(PersistentOrderedSetIterator).z = function () {
    checkHasNext_0(this);
    var tmp = this.f1x_1;
    var result = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    this.h1x_1 = this.h1x_1 + 1 | 0;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.getOrElse' call
    var tmp0_elvis_lhs = this.g1x_1.p2(result);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      throw ConcurrentModificationException_init_$Create$_0('Hash code of an element (' + result + ') has changed after it was added to the persistent set.');
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    tmp_0.f1x_1 = tmp_1.a1x_1;
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
  protoOf(ListImplementation).r1 = function (index, size) {
    if (index < 0 ? true : index >= size) {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', size: ' + size);
    }
  };
  protoOf(ListImplementation).l1 = function (index, size) {
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
        tmp_0 = (!_this__u8e3s4.g1c() ? true : equals(_this__u8e3s4, other)) ? true : equals(_this__u8e3s4.tw_1, other.tw_1);
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
    composer.s17(tmp$ret$0);
    var slot = composer.w18();
    var tmp;
    if (slot === Companion_getInstance_0().k12_1) {
      var value = new ComposableLambdaImpl(key, tracked, block);
      composer.c19(value);
      tmp = value;
    } else {
      if (!(slot instanceof ComposableLambdaImpl))
        THROW_CCE();
      slot.n1x(block);
      tmp = slot;
    }
    var result = tmp;
    composer.t17();
    return result;
  }
  function IntRef(element) {
    element = element === VOID ? 0 : element;
    this.i1q_1 = element;
  }
  protoOf(IntRef).toString = function () {
    return 'IntRef(element = ' + this.i1q_1 + ')@' + toString_1(hashCode(this), 16);
  };
  function Companion_10() {
    Companion_instance_11 = this;
    var tmp = this;
    var tmp_0 = Companion_getInstance_9().a1v_1;
    tmp.o1x_1 = new PersistentCompositionLocalHashMap(tmp_0 instanceof TrieNode ? tmp_0 : THROW_CCE(), 0);
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
  protoOf(PersistentCompositionLocalHashMap).f2 = function () {
    return protoOf(PersistentHashMap).f2.call(this);
  };
  protoOf(PersistentCompositionLocalHashMap).d19 = function (key, value) {
    var tmp0_elvis_lhs = this.e1v_1.m1v(hashCode(key), key, value, 0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var newNodeResult = tmp;
    return new PersistentCompositionLocalHashMap(newNodeResult.n1v_1, this.i() + newNodeResult.o1v_1 | 0);
  };
  function persistentCompositionLocalHashMapOf() {
    return Companion_getInstance_11().o1x_1;
  }
  function get_emptyThreadMap() {
    _init_properties_ThreadMap_jvm_kt__b3bhkj();
    return emptyThreadMap;
  }
  var emptyThreadMap;
  function find_2($this, key) {
    var high = $this.l1m_1 - 1 | 0;
    var tmp0_subject = high;
    if (tmp0_subject === -1)
      return -1;
    else if (tmp0_subject === 0)
      return $this.m1m_1[0].equals(key) ? 0 : $this.m1m_1[0].x9(key) > 0 ? -2 : -1;
    var low = 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = $this.m1m_1[mid];
      var comparison = midVal.eb(key);
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
    this.l1m_1 = size;
    this.m1m_1 = keys;
    this.n1m_1 = values;
  }
  protoOf(ThreadMap).o1m = function (key) {
    var index = find_2(this, key);
    return index >= 0 ? this.n1m_1[index] : null;
  };
  protoOf(ThreadMap).p1m = function (key, value) {
    var index = find_2(this, key);
    if (index < 0)
      return false;
    this.n1m_1[index] = value;
    return true;
  };
  protoOf(ThreadMap).q1m = function (key, value) {
    var size = this.l1m_1;
    // Inline function 'kotlin.collections.count' call
    var count = 0;
    var indexedObject = this.n1m_1;
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
        var oldKey = this.m1m_1[source];
        var oldValue = this.n1m_1[source];
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
          var oldKey_0 = this.m1m_1[source];
          var oldValue_0 = this.n1m_1[source];
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
    var this_0 = HashSet_init_$Create$_0(_this__u8e3s4.i());
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.fastToSet.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.i() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.j(index);
        // Inline function 'androidx.compose.runtime.snapshots.fastToSet.<anonymous>.<anonymous>' call
        this_0.u(item);
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
    buffer.w7(prefix);
    var count = 0;
    var inductionVariable = 0;
    var last = _this__u8e3s4.i() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = _this__u8e3s4.j(index);
        count = count + 1 | 0;
        if (count > 1) {
          buffer.w7(separator);
        }
        if (limit < 0 ? true : count <= limit) {
          appendElement(buffer, element, transform);
        } else
          break $l$loop;
      }
       while (inductionVariable <= last);
    if (limit >= 0 ? count > limit : false) {
      buffer.w7(truncated);
    }
    buffer.w7(postfix);
    return buffer;
  }
  function appendElement(_this__u8e3s4, element, transform) {
    if (!(transform == null)) {
      _this__u8e3s4.w7(transform(element));
    } else {
      if (element == null ? true : isCharSequence(element)) {
        _this__u8e3s4.w7(element);
      } else {
        if (element instanceof Char) {
          _this__u8e3s4.r5(element.ga_1);
        } else {
          _this__u8e3s4.w7(toString_0(element));
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
    this.t1x_1 = function_0;
  }
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0).ok = function () {
    return this.t1x_1();
  };
  function sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0(function_0) {
    this.u1x_1 = function_0;
  }
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0).ok = function () {
    return this.u1x_1();
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
  protoOf(Companion_11).iv = function () {
    return currentSnapshot();
  };
  protoOf(Companion_11).m1h = function (readObserver, writeObserver) {
    var tmp = currentSnapshot();
    var tmp0_safe_receiver = tmp instanceof MutableSnapshot ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v1x(readObserver, writeObserver);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var message = 'Cannot create a mutable snapshot of an read-only snapshot';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  };
  protoOf(Companion_11).n1j = function (observer) {
    advanceGlobalSnapshot(get_emptyLambda());
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    set_applyObservers(plus_1(get_applyObservers(), observer));
    var tmp = Snapshot$Companion$registerApplyObserver$lambda(observer);
    return new sam$androidx_compose_runtime_snapshots_ObserverHandle$0(tmp);
  };
  protoOf(Companion_11).w1x = function (observer) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    set_globalWriteObservers(plus_1(get_globalWriteObservers(), observer));
    advanceGlobalSnapshot_0();
    var tmp = Snapshot$Companion$registerGlobalWriteObserver$lambda(observer);
    return new sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0(tmp);
  };
  protoOf(Companion_11).k1g = function () {
    return currentSnapshot().k1g();
  };
  protoOf(Companion_11).i1g = function () {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.Companion.sendApplyNotifications.<anonymous>' call
    var tmp0_safe_receiver = get_currentGlobalSnapshot().yl().x1x();
    var changes = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.g19()) === true;
    if (changes) {
      advanceGlobalSnapshot_0();
    }
  };
  var Companion_instance_12;
  function Companion_getInstance_12() {
    return Companion_instance_12;
  }
  function Snapshot(id, invalid) {
    this.w15_1 = invalid;
    this.x15_1 = id;
    this.y15_1 = false;
    this.z15_1 = !(id === 0) ? trackPinning(id, this.y1x()) : -1;
  }
  protoOf(Snapshot).z1x = function (_set____db54di) {
    this.w15_1 = _set____db54di;
  };
  protoOf(Snapshot).y1x = function () {
    return this.w15_1;
  };
  protoOf(Snapshot).a1y = function (_set____db54di) {
    this.x15_1 = _set____db54di;
  };
  protoOf(Snapshot).a16 = function () {
    return this.x15_1;
  };
  protoOf(Snapshot).b1y = function (value) {
    // Inline function 'kotlin.error' call
    var message = 'Updating write count is not supported for this snapshot';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(Snapshot).c1y = function () {
    return 0;
  };
  protoOf(Snapshot).ok = function () {
    this.y15_1 = true;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    this.e1y();
  };
  protoOf(Snapshot).n1h = function () {
    var previous = get_threadSnapshot().yl();
    get_threadSnapshot().p1e(this);
    return previous;
  };
  protoOf(Snapshot).o1h = function (snapshot) {
    get_threadSnapshot().p1e(snapshot);
  };
  protoOf(Snapshot).i1y = function () {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    this.j1y();
    this.k1y();
  };
  protoOf(Snapshot).j1y = function () {
    set_openSnapshots(get_openSnapshots().p1y(this.a16()));
  };
  protoOf(Snapshot).k1y = function () {
    this.e1y();
  };
  protoOf(Snapshot).q1y = function () {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.y15_1) {
      // Inline function 'androidx.compose.runtime.snapshots.Snapshot.validateNotDisposed.<anonymous>' call
      var message = 'Cannot use a disposed snapshot';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  };
  protoOf(Snapshot).e1y = function () {
    if (this.z15_1 >= 0) {
      releasePinningLocked(this.z15_1);
      this.z15_1 = -1;
    }
  };
  protoOf(Snapshot).r1y = function () {
    // Inline function 'kotlin.also' call
    var this_0 = this.z15_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.Snapshot.takeoverPinnedSnapshot.<anonymous>' call
    this.z15_1 = -1;
    return this_0;
  };
  function validateNotApplied($this) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.b1i_1) {
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.validateNotApplied.<anonymous>' call
      var message = 'Unsupported operation on a snapshot that has been applied';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function validateNotAppliedOrPinned($this) {
    // Inline function 'kotlin.check' call
    var tmp;
    if (!$this.b1i_1) {
      tmp = true;
    } else {
      // Inline function 'androidx.compose.runtime.snapshots.Snapshot.isPinned' call
      tmp = $this.z15_1 >= 0;
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp) {
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.validateNotAppliedOrPinned.<anonymous>' call
      var message = 'Unsupported operation on a disposed or applied snapshot';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function abandon($this) {
    var modified = $this.x1x();
    if (!(modified == null)) {
      validateNotApplied($this);
      $this.s1y(null);
      var id = $this.a16();
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values = modified.t15_1;
      var inductionVariable = 0;
      var last = modified.s15_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.abandon.<anonymous>' call
          var tmp = values[i];
          var current = (!(tmp == null) ? tmp : THROW_CCE()).i1m();
          while (!(current == null)) {
            if (current.t1y_1 === id ? true : contains($this.y1h_1, current.t1y_1)) {
              current.t1y_1 = 0;
            }
            current = current.u1y_1;
          }
        }
         while (inductionVariable < last);
    }
    $this.i1y();
  }
  function releasePreviouslyPinnedSnapshotsLocked($this) {
    var inductionVariable = 0;
    var last = $this.z1h_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        releasePinningLocked($this.z1h_1[index]);
      }
       while (inductionVariable <= last);
  }
  function Companion_12() {
    Companion_instance_13 = this;
    this.v1y_1 = new Int32Array(0);
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
    this.t1h_1 = readObserver;
    this.u1h_1 = writeObserver;
    this.v1h_1 = 0;
    this.w1h_1 = null;
    this.x1h_1 = null;
    this.y1h_1 = Companion_getInstance_14().w1y_1;
    this.z1h_1 = Companion_getInstance_13().v1y_1;
    this.a1i_1 = 1;
    this.b1i_1 = false;
  }
  protoOf(MutableSnapshot).f1y = function () {
    return this.t1h_1;
  };
  protoOf(MutableSnapshot).g1y = function () {
    return this.u1h_1;
  };
  protoOf(MutableSnapshot).v1x = function (readObserver, writeObserver) {
    this.q1y();
    validateNotAppliedOrPinned(this);
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance' call
    this.x1y(this.a16());
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
    set_openSnapshots(get_openSnapshots().y1y(newId));
    var currentInvalid = this.y1x();
    this.z1x(currentInvalid.y1y(newId));
    var this_0 = new NestedMutableSnapshot(newId, addRange(currentInvalid, this.a16() + 1 | 0, newId), mergedReadObserver(readObserver, this.f1y()), mergedWriteObserver(writeObserver, this.g1y()), this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    if (!this.b1i_1 ? !this.y15_1 : false) {
      var previousId = this.a16();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      var tmp0_0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0_0 + 1 | 0);
      this.a1y(tmp0_0);
      set_openSnapshots(get_openSnapshots().y1y(this.a16()));
      this.z1x(addRange(this.y1x(), previousId + 1 | 0, this.a16()));
    }
    return this_0;
  };
  protoOf(MutableSnapshot).c1i = function () {
    var modified = this.x1x();
    var optimisticMerges_0 = !(modified == null) ? optimisticMerges(get_currentGlobalSnapshot().yl(), this, get_openSnapshots().p1y(get_currentGlobalSnapshot().yl().a16())) : null;
    var observers = emptyList();
    var globalModified = null;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    validateOpen(this);
    var tmp;
    if (modified == null ? true : modified.s15_1 === 0) {
      this.j1y();
      var previousGlobalSnapshot = get_currentGlobalSnapshot().yl();
      takeNewGlobalSnapshot(previousGlobalSnapshot, get_emptyLambda());
      var previousModified = previousGlobalSnapshot.x1x();
      var tmp_0;
      // Inline function 'kotlin.collections.isNullOrEmpty' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(previousModified == null ? true : previousModified.o())) {
        observers = get_applyObservers();
        globalModified = previousModified;
        tmp_0 = Unit_instance;
      }
      tmp = tmp_0;
    } else {
      var previousGlobalSnapshot_0 = get_currentGlobalSnapshot().yl();
      var result = this.z1y(get_nextSnapshotId(), optimisticMerges_0, get_openSnapshots().p1y(previousGlobalSnapshot_0.a16()));
      if (!equals(result, Success_getInstance()))
        return result;
      this.j1y();
      takeNewGlobalSnapshot(previousGlobalSnapshot_0, get_emptyLambda());
      var previousModified_0 = previousGlobalSnapshot_0.x1x();
      this.s1y(null);
      previousGlobalSnapshot_0.s1y(null);
      observers = get_applyObservers();
      globalModified = previousModified_0;
      tmp = Unit_instance;
    }
    this.b1i_1 = true;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    var this_0 = globalModified;
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0 == null ? true : this_0.o())) {
      var nonNullGlobalModified = ensureNotNull(globalModified);
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      var this_1 = observers;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_1.i() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_1.j(index);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>' call
          item(nonNullGlobalModified, this);
        }
         while (inductionVariable <= last);
    }
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(modified == null ? true : modified.o())) {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      var this_2 = observers;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = this_2.i() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = this_2.j(index_0);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>' call
          item_0(modified, this);
        }
         while (inductionVariable_0 <= last_0);
    }
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    this.k1y();
    checkAndOverwriteUnusedRecordsLocked();
    var tmp0_safe_receiver = globalModified;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values = tmp0_safe_receiver.t15_1;
      var inductionVariable_1 = 0;
      var last_1 = tmp0_safe_receiver.s15_1;
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
      var values_0 = modified.t15_1;
      var inductionVariable_2 = 0;
      var last_2 = modified.s15_1;
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
    var tmp2_safe_receiver = this.x1h_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_3 = 0;
      var last_3 = tmp2_safe_receiver.i() - 1 | 0;
      if (inductionVariable_3 <= last_3)
        do {
          var index_1 = inductionVariable_3;
          inductionVariable_3 = inductionVariable_3 + 1 | 0;
          var item_1 = tmp2_safe_receiver.j(index_1);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>.<anonymous>' call
          processForUnusedRecordsLocked(item_1);
        }
         while (inductionVariable_3 <= last_3);
    }
    this.x1h_1 = null;
    return Success_getInstance();
  };
  protoOf(MutableSnapshot).d1y = function () {
    return false;
  };
  protoOf(MutableSnapshot).ok = function () {
    if (!this.y15_1) {
      protoOf(Snapshot).ok.call(this);
      this.a1z(this);
    }
  };
  protoOf(MutableSnapshot).b1z = function (snapshot) {
    this.a1i_1 = this.a1i_1 + 1 | 0;
  };
  protoOf(MutableSnapshot).a1z = function (snapshot) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.a1i_1 > 0)) {
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.nestedDeactivated.<anonymous>' call
      var message = 'no pending nested snapshots';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.a1i_1 = this.a1i_1 - 1 | 0;
    if (this.a1i_1 === 0) {
      if (!this.b1i_1) {
        abandon(this);
      }
    }
  };
  protoOf(MutableSnapshot).k1g = function () {
    if (this.b1i_1 ? true : this.y15_1)
      return Unit_instance;
    this.c1z();
  };
  protoOf(MutableSnapshot).j1y = function () {
    set_openSnapshots(get_openSnapshots().p1y(this.a16()).d1z(this.y1h_1));
  };
  protoOf(MutableSnapshot).k1y = function () {
    releasePreviouslyPinnedSnapshotsLocked(this);
    protoOf(Snapshot).k1y.call(this);
  };
  protoOf(MutableSnapshot).z1y = function (snapshotId, optimisticMerges, invalidSnapshots) {
    var mergedRecords = null;
    var start = this.y1x().y1y(this.a16()).e1z(this.y1h_1);
    var modified = ensureNotNull(this.x1x());
    var statesToRemove = null;
    // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var values = modified.t15_1;
    var inductionVariable = 0;
    var last = modified.s15_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        $l$block_0: {
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>' call
          var tmp = values[i];
          var state = !(tmp == null) ? tmp : THROW_CCE();
          var first = state.i1m();
          var tmp0_elvis_lhs = readable(first, snapshotId, invalidSnapshots);
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            break $l$block_0;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var current = tmp_0;
          var tmp1_elvis_lhs = readable(first, this.a16(), start);
          var tmp_1;
          if (tmp1_elvis_lhs == null) {
            break $l$block_0;
          } else {
            tmp_1 = tmp1_elvis_lhs;
          }
          var previous = tmp_1;
          if (!equals(current, previous)) {
            var tmp2_elvis_lhs = readable(first, this.a16(), this.y1x());
            var tmp_2;
            if (tmp2_elvis_lhs == null) {
              readError();
            } else {
              tmp_2 = tmp2_elvis_lhs;
            }
            var applied = tmp_2;
            var tmp4_elvis_lhs = optimisticMerges == null ? null : optimisticMerges.p2(current);
            var tmp_3;
            if (tmp4_elvis_lhs == null) {
              // Inline function 'kotlin.run' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
              tmp_3 = state.k1m(previous, current, applied);
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
                tmp_4.u(to(state, current.e1m()));
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
                tmp_5.u(state);
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
                tmp_6.u(!equals(merged, previous) ? to(state, merged) : to(state, previous.e1m()));
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
      this.c1z();
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = tmp0_safe_receiver.i() - 1 | 0;
      var tmp_7;
      if (inductionVariable_0 <= last_0) {
        do {
          var index = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item = tmp0_safe_receiver.j(index);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
          var state_0 = item.fe();
          var stateRecord = item.ge();
          stateRecord.t1y_1 = this.a16();
          // Inline function 'androidx.compose.runtime.snapshots.sync' call
          // Inline function 'androidx.compose.runtime.synchronized' call
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          get_lock();
          stateRecord.u1y_1 = state_0.i1m();
          state_0.j1m(stateRecord);
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
      var last_1 = tmp1_safe_receiver.i() - 1 | 0;
      if (inductionVariable_1 <= last_1)
        do {
          var index_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var item_0 = tmp1_safe_receiver.j(index_0);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
          modified.g1t(item_0);
        }
         while (inductionVariable_1 <= last_1);
      var mergedList = this.x1h_1;
      this.x1h_1 = mergedList == null ? tmp1_safe_receiver : plus_2(mergedList, tmp1_safe_receiver);
    }
    return Success_getInstance();
  };
  protoOf(MutableSnapshot).c1z = function () {
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance' call
    this.x1y(this.a16());
    // Inline function 'kotlin.also' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    if (!this.b1i_1 ? !this.y15_1 : false) {
      var previousId = this.a16();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      this.a1y(tmp0);
      set_openSnapshots(get_openSnapshots().y1y(this.a16()));
      this.z1x(addRange(this.y1x(), previousId + 1 | 0, this.a16()));
    }
    return Unit_instance;
  };
  protoOf(MutableSnapshot).x1y = function (id) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    this.y1h_1 = this.y1h_1.y1y(id);
  };
  protoOf(MutableSnapshot).f1z = function (id) {
    if (id >= 0) {
      var tmp = this;
      // Inline function 'kotlin.collections.plus' call
      // Inline function 'kotlin.collections.plus' call
      var this_0 = this.z1h_1;
      // Inline function 'kotlin.intArrayOf' call
      var elements = new Int32Array([id]);
      tmp.z1h_1 = primitiveArrayConcat([this_0, elements]);
    }
  };
  protoOf(MutableSnapshot).g1z = function (handles) {
    // Inline function 'kotlin.collections.isEmpty' call
    if (handles.length === 0)
      return Unit_instance;
    var pinned = this.z1h_1;
    var tmp = this;
    var tmp_0;
    // Inline function 'kotlin.collections.isEmpty' call
    if (pinned.length === 0) {
      tmp_0 = handles;
    } else {
      // Inline function 'kotlin.collections.plus' call
      tmp_0 = primitiveArrayConcat([pinned, handles]);
    }
    tmp.z1h_1 = tmp_0;
  };
  protoOf(MutableSnapshot).h1z = function (snapshots) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    this.y1h_1 = this.y1h_1.e1z(snapshots);
  };
  protoOf(MutableSnapshot).h1y = function (state) {
    var tmp0_elvis_lhs = this.x1x();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new IdentityArraySet();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.recordModified.<anonymous>' call
      this.s1y(this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp.q1a(state);
  };
  protoOf(MutableSnapshot).b1y = function (_set____db54di) {
    this.v1h_1 = _set____db54di;
  };
  protoOf(MutableSnapshot).c1y = function () {
    return this.v1h_1;
  };
  protoOf(MutableSnapshot).s1y = function (_set____db54di) {
    this.w1h_1 = _set____db54di;
  };
  protoOf(MutableSnapshot).x1x = function () {
    return this.w1h_1;
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
    this.i1z_1 = snapshot;
  }
  function SnapshotApplyResult() {
  }
  function GlobalSnapshot$_init_$lambda_36kgl8($it) {
    return function (state) {
      var this_0 = $it;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.i() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.j(index);
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
  protoOf(GlobalSnapshot).v1x = function (readObserver, writeObserver) {
    return takeNewSnapshot(GlobalSnapshot$takeNestedMutableSnapshot$lambda(readObserver, writeObserver));
  };
  protoOf(GlobalSnapshot).k1g = function () {
    advanceGlobalSnapshot_0();
  };
  protoOf(GlobalSnapshot).w1z = function (snapshot) {
    unsupported();
  };
  protoOf(GlobalSnapshot).a1z = function (snapshot) {
    return this.w1z(snapshot);
  };
  protoOf(GlobalSnapshot).x1z = function (snapshot) {
    unsupported();
  };
  protoOf(GlobalSnapshot).b1z = function (snapshot) {
    return this.x1z(snapshot);
  };
  protoOf(GlobalSnapshot).c1i = function () {
    var message = 'Cannot apply the global snapshot directly. Call Snapshot.advanceGlobalSnapshot';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(GlobalSnapshot).ok = function () {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    this.e1y();
  };
  function StateRecord() {
    this.t1y_1 = currentSnapshot().a16();
    this.u1y_1 = null;
  }
  function trackPinning(id, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    var pinned = invalid.y1z(id);
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.trackPinning.<anonymous>' call
    return get_pinningTable().e20(pinned);
  }
  function releasePinningLocked(handle) {
    _init_properties_Snapshot_kt__l6n1ng();
    get_pinningTable().f20(handle);
  }
  function currentSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp0_elvis_lhs = get_threadSnapshot().yl();
    return tmp0_elvis_lhs == null ? get_currentGlobalSnapshot().yl() : tmp0_elvis_lhs;
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
    previousGlobalSnapshot = get_currentGlobalSnapshot().yl();
    modified = previousGlobalSnapshot.x1x();
    if (!(modified == null)) {
      get_pendingApplyObserverCount().e20(1);
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
        var last = observers.i() - 1 | 0;
        var tmp_1;
        if (inductionVariable <= last) {
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = observers.j(index);
            // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>.<anonymous>' call
            item(tmp0_safe_receiver, previousGlobalSnapshot);
          }
           while (inductionVariable <= last);
          tmp_1 = Unit_instance;
        }
        tmp_0 = tmp_1;
      }finally {
        get_pendingApplyObserverCount().e20(-1);
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
      var values = tmp0_safe_receiver_0.t15_1;
      var inductionVariable_0 = 0;
      var last_0 = tmp0_safe_receiver_0.s15_1;
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
    if (!$this.v20_1) {
      $this.v20_1 = true;
      $this.u20_1.a1z($this);
    }
  }
  function NestedMutableSnapshot(id, invalid, readObserver, writeObserver, parent) {
    MutableSnapshot.call(this, id, invalid, readObserver, writeObserver);
    this.u20_1 = parent;
    this.v20_1 = false;
    this.u20_1.b1z(this);
  }
  protoOf(NestedMutableSnapshot).ok = function () {
    if (!this.y15_1) {
      protoOf(MutableSnapshot).ok.call(this);
      deactivate(this);
    }
  };
  protoOf(NestedMutableSnapshot).c1i = function () {
    if (this.u20_1.b1i_1 ? true : this.u20_1.y15_1)
      return new Failure(this);
    var modified = this.x1x();
    var id = this.a16();
    var optimisticMerges_0 = !(modified == null) ? optimisticMerges(this.u20_1, this, this.u20_1.y1x()) : null;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    validateOpen(this);
    if (modified == null ? true : modified.s15_1 === 0) {
      this.i1y();
    } else {
      var result = this.z1y(this.u20_1.a16(), optimisticMerges_0, this.u20_1.y1x());
      if (!equals(result, Success_getInstance()))
        return result;
      var tmp0_safe_receiver = this.u20_1.x1x();
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.apply' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.NestedMutableSnapshot.apply.<anonymous>.<anonymous>' call
        tmp0_safe_receiver.c1h(modified);
        tmp = tmp0_safe_receiver;
      }
      if (tmp == null) {
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.NestedMutableSnapshot.apply.<anonymous>.<anonymous>' call
        this.u20_1.s1y(modified);
        this.s1y(null);
      }
    }
    if (this.u20_1.a16() < id) {
      this.u20_1.c1z();
    }
    this.u20_1.z1x(this.u20_1.y1x().p1y(id).d1z(this.y1h_1));
    this.u20_1.x1y(id);
    this.u20_1.f1z(this.r1y());
    this.u20_1.h1z(this.y1h_1);
    this.u20_1.g1z(this.z1h_1);
    this.b1i_1 = true;
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
        result = result.y1y(invalidId);
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
    var modified = applyingSnapshot.x1x();
    var id = currentSnapshot.a16();
    if (modified == null)
      return null;
    var start = applyingSnapshot.y1x().y1y(applyingSnapshot.a16()).e1z(applyingSnapshot.y1h_1);
    var result = null;
    // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var values = modified.t15_1;
    var inductionVariable = 0;
    var last = modified.s15_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        $l$block_0: {
          // Inline function 'androidx.compose.runtime.snapshots.optimisticMerges.<anonymous>' call
          var tmp = values[i];
          var state = !(tmp == null) ? tmp : THROW_CCE();
          var first = state.i1m();
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
            var tmp2_elvis_lhs = readable(first, applyingSnapshot.a16(), applyingSnapshot.y1x());
            var tmp_2;
            if (tmp2_elvis_lhs == null) {
              readError();
            } else {
              tmp_2 = tmp2_elvis_lhs;
            }
            var applied = tmp_2;
            var merged = state.k1m(previous, current, applied);
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
              tmp_3.g2(current, merged);
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
    if (!openSnapshots.j(snapshot.a16())) {
      // Inline function 'kotlin.error' call
      var tmp = snapshot.a16();
      var tmp_0 = snapshot.y15_1;
      var tmp0_safe_receiver = snapshot instanceof MutableSnapshot ? snapshot : null;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.b1i_1;
      var tmp_1 = toString(tmp1_elvis_lhs == null ? 'read-only' : tmp1_elvis_lhs);
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.validateOpen.<anonymous>' call
      var message = 'Snapshot is not open: id=' + tmp + ', disposed=' + tmp_0 + ', applied=' + tmp_1 + ', lowestPin=' + get_pinningTable().w20(-1);
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function takeNewGlobalSnapshot(previousGlobalSnapshot, block) {
    _init_properties_Snapshot_kt__l6n1ng();
    var result = block(get_openSnapshots().p1y(previousGlobalSnapshot.a16()));
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    var tmp0 = get_nextSnapshotId();
    set_nextSnapshotId(tmp0 + 1 | 0);
    var globalId = tmp0;
    set_openSnapshots(get_openSnapshots().p1y(previousGlobalSnapshot.a16()));
    get_currentGlobalSnapshot().i1c(new GlobalSnapshot(globalId, get_openSnapshots()));
    previousGlobalSnapshot.ok();
    set_openSnapshots(get_openSnapshots().y1y(globalId));
    return result;
  }
  function checkAndOverwriteUnusedRecordsLocked() {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotWeakSet.removeIf' call
    var this_0 = get_extraStateObjects();
    var size = this_0.x20_1;
    var currentUsed = 0;
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var entry = this_0.z20_1[i];
        var value = entry == null ? null : entry.yl();
        var tmp;
        if (!(value == null)) {
          // Inline function 'androidx.compose.runtime.snapshots.checkAndOverwriteUnusedRecordsLocked.<anonymous>' call
          tmp = !!overwriteUnusedRecordsLocked(value);
        } else {
          tmp = false;
        }
        if (tmp) {
          if (!(currentUsed === i)) {
            this_0.z20_1[currentUsed] = entry;
            this_0.y20_1[currentUsed] = this_0.y20_1[i];
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
        this_0.z20_1[i_0] = null;
        this_0.y20_1[i_0] = 0;
      }
       while (inductionVariable_0 < size);
    if (!(currentUsed === size)) {
      this_0.x20_1 = currentUsed;
    }
  }
  function processForUnusedRecordsLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (overwriteUnusedRecordsLocked(state)) {
      get_extraStateObjects().q1a(state);
    }
  }
  function readable(r, id, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = r;
    var candidate = null;
    while (!(current == null)) {
      if (valid(current, id, invalid)) {
        candidate = candidate == null ? current : candidate.t1y_1 < current.t1y_1 ? current : candidate;
      }
      current = current.u1y_1;
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
    var current = state.i1m();
    var overwriteRecord = null;
    var validRecord = null;
    var reuseLimit = get_pinningTable().w20(get_nextSnapshotId());
    var retainedRecords = 0;
    while (!(current == null)) {
      var currentId = current.t1y_1;
      if (!(currentId === 0)) {
        if (currentId < reuseLimit) {
          if (validRecord == null) {
            validRecord = current;
            retainedRecords = retainedRecords + 1 | 0;
          } else {
            var tmp;
            if (current.t1y_1 < validRecord.t1y_1) {
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
                var this_0 = state.i1m();
                var current_0 = this_0;
                var youngest = this_0;
                while (!(current_0 == null)) {
                  // Inline function 'androidx.compose.runtime.snapshots.overwriteUnusedRecordsLocked.<anonymous>' call
                  if (current_0.t1y_1 >= reuseLimit) {
                    tmp$ret$1 = current_0;
                    break $l$block;
                  }
                  if (youngest.t1y_1 < current_0.t1y_1)
                    youngest = current_0;
                  current_0 = current_0.u1y_1;
                }
                tmp$ret$1 = youngest;
              }
              overwriteRecord = tmp$ret$1;
            }
            recordToOverwrite.t1y_1 = 0;
            recordToOverwrite.d1m(overwriteRecord);
          }
        } else {
          retainedRecords = retainedRecords + 1 | 0;
        }
      }
      current = current.u1y_1;
    }
    return retainedRecords > 1;
  }
  function valid(data, snapshot, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    return valid_0(snapshot, data.t1y_1, invalid);
  }
  function valid_0(currentSnapshot, candidateSnapshot, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    return (!(candidateSnapshot === 0) ? candidateSnapshot <= currentSnapshot : false) ? !invalid.j(candidateSnapshot) : false;
  }
  function readable_0(_this__u8e3s4, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var snapshot = Companion_instance_12.iv();
    var tmp0_safe_receiver = snapshot.f1y();
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(state);
    var tmp1_elvis_lhs = readable(_this__u8e3s4, snapshot.a16(), snapshot.y1x());
    var tmp;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.readable.<anonymous>' call
      var syncSnapshot = Companion_instance_12.iv();
      var tmp_0 = state.i1m();
      var tmp0_elvis_lhs = readable(tmp_0 instanceof StateRecord ? tmp_0 : THROW_CCE(), syncSnapshot.a16(), syncSnapshot.y1x());
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
    var snapshot = Companion_instance_12.iv();
    var tmp0_elvis_lhs = readable(r, snapshot.a16(), snapshot.y1x());
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
      var syncSnapshot = Companion_instance_12.iv();
      tmp = readable(r, syncSnapshot.a16(), syncSnapshot.y1x());
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
    snapshot.b1y(snapshot.c1y() + 1 | 0);
    var tmp1_safe_receiver = snapshot.g1y();
    if (tmp1_safe_receiver == null)
      null;
    else
      tmp1_safe_receiver(state);
  }
  function overwritableRecord(_this__u8e3s4, state, snapshot, candidate) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (snapshot.d1y()) {
      snapshot.h1y(state);
    }
    var id = snapshot.a16();
    if (candidate.t1y_1 === id)
      return candidate;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.overwritableRecord.<anonymous>' call
    var newData = newOverwritableRecordLocked(_this__u8e3s4, state);
    newData.t1y_1 = id;
    snapshot.h1y(state);
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
      tmp0_safe_receiver.t1y_1 = IntCompanionObject_instance.MAX_VALUE;
      tmp_0 = tmp0_safe_receiver;
    }
    var tmp1_elvis_lhs = tmp_0;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.apply' call
      var this_0 = _this__u8e3s4.e1m();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.newOverwritableRecordLocked.<anonymous>' call
      this_0.t1y_1 = IntCompanionObject_instance.MAX_VALUE;
      this_0.u1y_1 = state.i1m();
      state.j1m(this_0 instanceof StateRecord ? this_0 : THROW_CCE());
      var tmp_2 = this_0;
      tmp_1 = tmp_2 instanceof StateRecord ? tmp_2 : THROW_CCE();
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function usedLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = state.i1m();
    var validRecord = null;
    var reuseLimit = get_pinningTable().w20(get_nextSnapshotId()) - 1 | 0;
    var invalid = Companion_getInstance_14().w1y_1;
    while (!(current == null)) {
      var currentId = current.t1y_1;
      if (currentId === 0) {
        return current;
      }
      if (valid(current, reuseLimit, invalid)) {
        if (validRecord == null) {
          validRecord = current;
        } else {
          return current.t1y_1 < validRecord.t1y_1 ? current : validRecord;
        }
      }
      current = current.u1y_1;
    }
    return null;
  }
  function writableRecord(_this__u8e3s4, state, snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (snapshot.d1y()) {
      snapshot.h1y(state);
    }
    var id = snapshot.a16();
    var tmp0_elvis_lhs = readable(_this__u8e3s4, id, snapshot.y1x());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      readError();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var readData = tmp;
    if (readData.t1y_1 === snapshot.a16())
      return readData;
    var newData = newWritableRecord(readData, state, snapshot);
    snapshot.h1y(state);
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
    newData.d1m(_this__u8e3s4);
    newData.t1y_1 = snapshot.a16();
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
      set_openSnapshots(get_openSnapshots().y1y(result.a16()));
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
      openSnapshots = Companion_getInstance_14().w1y_1;
      nextSnapshotId = 1;
      pinningTable = new SnapshotDoubleIndexHeap();
      extraStateObjects = new SnapshotWeakSet();
      applyObservers = emptyList();
      globalWriteObservers = emptyList();
      // Inline function 'kotlin.also' call
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      var this_0 = new GlobalSnapshot(tmp0, Companion_getInstance_14().w1y_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.currentGlobalSnapshot.<anonymous>' call
      set_openSnapshots(get_openSnapshots().y1y(this_0.a16()));
      currentGlobalSnapshot = new AtomicReference(this_0);
      snapshotInitializer = get_currentGlobalSnapshot().yl();
      pendingApplyObserverCount = new AtomicInt(0);
    }
  }
  function shiftUp($this, index) {
    var values = $this.a20_1;
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
    var values = $this.a20_1;
    var half = $this.z1z_1 >> 1;
    var current = index;
    while (current < half) {
      var right = (current + 1 | 0) << 1;
      var left = right - 1 | 0;
      if (right < $this.z1z_1 ? values[right] < values[left] : false) {
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
    var values = $this.a20_1;
    var index = $this.b20_1;
    var handles = $this.c20_1;
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
    var capacity = $this.a20_1.length;
    if (atLeast <= capacity)
      return Unit_instance;
    var newCapacity = imul(capacity, 2);
    var newValues = new Int32Array(newCapacity);
    var newIndex = new Int32Array(newCapacity);
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = $this.a20_1;
    var endIndex = this_0.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, newValues, 0, 0, endIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var this_1 = $this.b20_1;
    var endIndex_0 = this_1.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = this_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_0, newIndex, 0, 0, endIndex_0);
    $this.a20_1 = newValues;
    $this.b20_1 = newIndex;
  }
  function allocateHandle($this) {
    var capacity = $this.c20_1.length;
    if ($this.d20_1 >= capacity) {
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
      var this_0 = $this.c20_1;
      var endIndex = this_0.length;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_3 = this_0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_3, newHandles, 0, 0, endIndex);
      $this.c20_1 = newHandles;
    }
    var handle = $this.d20_1;
    $this.d20_1 = $this.c20_1[$this.d20_1];
    return handle;
  }
  function freeHandle($this, handle) {
    $this.c20_1[handle] = $this.d20_1;
    $this.d20_1 = handle;
  }
  function SnapshotDoubleIndexHeap() {
    this.z1z_1 = 0;
    this.a20_1 = new Int32Array(16);
    this.b20_1 = new Int32Array(16);
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = new Int32Array(16);
    while (tmp_0 < 16) {
      var tmp_2 = tmp_0;
      tmp_1[tmp_2] = tmp_2 + 1 | 0;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.c20_1 = tmp_1;
    this.d20_1 = 0;
  }
  protoOf(SnapshotDoubleIndexHeap).w20 = function (default_0) {
    return this.z1z_1 > 0 ? this.a20_1[0] : default_0;
  };
  protoOf(SnapshotDoubleIndexHeap).e20 = function (value) {
    ensure(this, this.z1z_1 + 1 | 0);
    var tmp1 = this.z1z_1;
    this.z1z_1 = tmp1 + 1 | 0;
    var i = tmp1;
    var handle = allocateHandle(this);
    this.a20_1[i] = value;
    this.b20_1[i] = handle;
    this.c20_1[handle] = i;
    shiftUp(this, i);
    return handle;
  };
  protoOf(SnapshotDoubleIndexHeap).f20 = function (handle) {
    var i = this.c20_1[handle];
    swap(this, i, this.z1z_1 - 1 | 0);
    this.z1z_1 = this.z1z_1 - 1 | 0;
    shiftUp(this, i);
    shiftDown(this, i);
    freeHandle(this, handle);
  };
  function Companion_13() {
    Companion_instance_14 = this;
    this.w1y_1 = new SnapshotIdSet(new Long(0, 0), new Long(0, 0), 0, null);
  }
  var Companion_instance_14;
  function Companion_getInstance_14() {
    if (Companion_instance_14 == null)
      new Companion_13();
    return Companion_instance_14;
  }
  function SnapshotIdSet$iterator$slambda(this$0, resultContinuation) {
    this.j21_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SnapshotIdSet$iterator$slambda).s21 = function ($this$sequence, $completion) {
    var tmp = this.t21($this$sequence, $completion);
    tmp.yb_1 = Unit_instance;
    tmp.zb_1 = null;
    return tmp.ic();
  };
  protoOf(SnapshotIdSet$iterator$slambda).uc = function (p1, $completion) {
    return this.s21(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SnapshotIdSet$iterator$slambda).ic = function () {
    var suspendResult = this.yb_1;
    $sm: do
      try {
        var tmp = this.wb_1;
        switch (tmp) {
          case 0:
            this.xb_1 = 15;
            this.l21_1 = this.j21_1.o1y_1;
            if (!(this.l21_1 == null)) {
              this.m21_1 = intArrayIterator(this.l21_1);
              this.wb_1 = 1;
              continue $sm;
            } else {
              this.wb_1 = 4;
              continue $sm;
            }

          case 1:
            if (!this.m21_1.x()) {
              this.wb_1 = 3;
              continue $sm;
            }

            this.n21_1 = this.m21_1.z();
            this.wb_1 = 2;
            suspendResult = this.k21_1.he(this.n21_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.wb_1 = 1;
            continue $sm;
          case 3:
            this.wb_1 = 4;
            continue $sm;
          case 4:
            if (!this.j21_1.m1y_1.equals(new Long(0, 0))) {
              var tmp_0 = this;
              Companion_getInstance();
              tmp_0.o21_1 = until(0, 64).k();
              this.wb_1 = 5;
              continue $sm;
            } else {
              this.wb_1 = 9;
              continue $sm;
            }

          case 5:
            if (!this.o21_1.x()) {
              this.wb_1 = 8;
              continue $sm;
            }

            this.p21_1 = this.o21_1.z();
            if (!this.j21_1.m1y_1.lb((new Long(1, 0)).ib(this.p21_1)).equals(new Long(0, 0))) {
              this.wb_1 = 6;
              suspendResult = this.k21_1.he(this.p21_1 + this.j21_1.n1y_1 | 0, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.wb_1 = 7;
              continue $sm;
            }

          case 6:
            this.wb_1 = 7;
            continue $sm;
          case 7:
            this.wb_1 = 5;
            continue $sm;
          case 8:
            this.wb_1 = 9;
            continue $sm;
          case 9:
            if (!this.j21_1.l1y_1.equals(new Long(0, 0))) {
              var tmp_1 = this;
              Companion_getInstance();
              tmp_1.q21_1 = until(0, 64).k();
              this.wb_1 = 10;
              continue $sm;
            } else {
              this.wb_1 = 14;
              continue $sm;
            }

          case 10:
            if (!this.q21_1.x()) {
              this.wb_1 = 13;
              continue $sm;
            }

            this.r21_1 = this.q21_1.z();
            if (!this.j21_1.l1y_1.lb((new Long(1, 0)).ib(this.r21_1)).equals(new Long(0, 0))) {
              this.wb_1 = 11;
              Companion_getInstance();
              suspendResult = this.k21_1.he((this.r21_1 + 64 | 0) + this.j21_1.n1y_1 | 0, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.wb_1 = 12;
              continue $sm;
            }

          case 11:
            this.wb_1 = 12;
            continue $sm;
          case 12:
            this.wb_1 = 10;
            continue $sm;
          case 13:
            this.wb_1 = 14;
            continue $sm;
          case 14:
            return Unit_instance;
          case 15:
            throw this.zb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.xb_1 === 15) {
          throw e;
        } else {
          this.wb_1 = this.xb_1;
          this.zb_1 = e;
        }
      }
     while (true);
  };
  protoOf(SnapshotIdSet$iterator$slambda).t21 = function ($this$sequence, completion) {
    var i = new SnapshotIdSet$iterator$slambda(this.j21_1, completion);
    i.k21_1 = $this$sequence;
    return i;
  };
  function SnapshotIdSet$iterator$slambda_0(this$0, resultContinuation) {
    var i = new SnapshotIdSet$iterator$slambda(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.s21($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SnapshotIdSet(upperSet, lowerSet, lowerBound, belowBound) {
    Companion_getInstance_14();
    this.l1y_1 = upperSet;
    this.m1y_1 = lowerSet;
    this.n1y_1 = lowerBound;
    this.o1y_1 = belowBound;
  }
  protoOf(SnapshotIdSet).j = function (bit) {
    var offset = bit - this.n1y_1 | 0;
    var tmp;
    if (offset >= 0) {
      Companion_getInstance();
      tmp = offset < 64;
    } else {
      tmp = false;
    }
    if (tmp) {
      return !(new Long(1, 0)).ib(offset).lb(this.m1y_1).equals(new Long(0, 0));
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
        return !tmp_1.ib(offset - 64 | 0).lb(this.l1y_1).equals(new Long(0, 0));
      } else {
        if (offset > 0) {
          return false;
        } else {
          var tmp0_safe_receiver = this.o1y_1;
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
  protoOf(SnapshotIdSet).y1y = function (bit) {
    var offset = bit - this.n1y_1 | 0;
    var tmp;
    if (offset >= 0) {
      Companion_getInstance();
      tmp = offset < 64;
    } else {
      tmp = false;
    }
    if (tmp) {
      var mask = (new Long(1, 0)).ib(offset);
      if (this.m1y_1.lb(mask).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.l1y_1, this.m1y_1.mb(mask), this.n1y_1, this.o1y_1);
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
        var mask_0 = tmp_1.ib(offset - 64 | 0);
        if (this.l1y_1.lb(mask_0).equals(new Long(0, 0))) {
          return new SnapshotIdSet(this.l1y_1.mb(mask_0), this.m1y_1, this.n1y_1, this.o1y_1);
        }
      } else {
        Companion_getInstance();
        if (offset >= imul(64, 2)) {
          if (!this.j(bit)) {
            var newUpperSet = this.l1y_1;
            var newLowerSet = this.m1y_1;
            var newLowerBound = this.n1y_1;
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
                  var tmp0_safe_receiver = this.o1y_1;
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
                      this_0.u(element);
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
                    if (!newLowerSet.lb((new Long(1, 0)).ib(index)).equals(new Long(0, 0))) {
                      newBelowBound.u(index + newLowerBound | 0);
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
            return (new SnapshotIdSet(tmp_5, tmp_6, tmp_7, tmp1_elvis_lhs == null ? this.o1y_1 : tmp1_elvis_lhs)).y1y(bit);
          }
        } else {
          var tmp2_elvis_lhs = this.o1y_1;
          var tmp_8;
          if (tmp2_elvis_lhs == null) {
            // Inline function 'kotlin.intArrayOf' call
            var tmp$ret$3 = new Int32Array([bit]);
            return new SnapshotIdSet(this.l1y_1, this.m1y_1, this.n1y_1, tmp$ret$3);
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
            return new SnapshotIdSet(this.l1y_1, this.m1y_1, this.n1y_1, newBelowBound_0);
          }
        }
      }
    }
    return this;
  };
  protoOf(SnapshotIdSet).p1y = function (bit) {
    var offset = bit - this.n1y_1 | 0;
    var tmp;
    if (offset >= 0) {
      Companion_getInstance();
      tmp = offset < 64;
    } else {
      tmp = false;
    }
    if (tmp) {
      var mask = (new Long(1, 0)).ib(offset);
      if (!this.m1y_1.lb(mask).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.l1y_1, this.m1y_1.lb(mask.hb()), this.n1y_1, this.o1y_1);
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
        var mask_0 = tmp_1.ib(offset - 64 | 0);
        if (!this.l1y_1.lb(mask_0).equals(new Long(0, 0))) {
          return new SnapshotIdSet(this.l1y_1.lb(mask_0.hb()), this.m1y_1, this.n1y_1, this.o1y_1);
        }
      } else {
        if (offset < 0) {
          var array = this.o1y_1;
          if (!(array == null)) {
            var location = binarySearch(array, bit);
            if (location >= 0) {
              var newSize = array.length - 1 | 0;
              if (newSize === 0) {
                return new SnapshotIdSet(this.l1y_1, this.m1y_1, this.n1y_1, null);
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
              return new SnapshotIdSet(this.l1y_1, this.m1y_1, this.n1y_1, newBelowBound);
            }
          }
        }
      }
    }
    return this;
  };
  protoOf(SnapshotIdSet).d1z = function (bits) {
    if (bits === Companion_getInstance_14().w1y_1)
      return this;
    if (this === Companion_getInstance_14().w1y_1)
      return Companion_getInstance_14().w1y_1;
    var tmp;
    if (bits.n1y_1 === this.n1y_1 ? bits.o1y_1 === this.o1y_1 : false) {
      tmp = new SnapshotIdSet(this.l1y_1.lb(bits.l1y_1.hb()), this.m1y_1.lb(bits.m1y_1.hb()), this.n1y_1, this.o1y_1);
    } else {
      // Inline function 'kotlin.collections.fold' call
      var accumulator = this;
      var tmp0_iterator = bits.k();
      while (tmp0_iterator.x()) {
        var element = tmp0_iterator.z();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.andNot.<anonymous>' call
        accumulator = accumulator.p1y(element);
      }
      tmp = accumulator;
    }
    return tmp;
  };
  protoOf(SnapshotIdSet).e1z = function (bits) {
    if (bits === Companion_getInstance_14().w1y_1)
      return this;
    if (this === Companion_getInstance_14().w1y_1)
      return bits;
    var tmp;
    if (bits.n1y_1 === this.n1y_1 ? bits.o1y_1 === this.o1y_1 : false) {
      tmp = new SnapshotIdSet(this.l1y_1.mb(bits.l1y_1), this.m1y_1.mb(bits.m1y_1), this.n1y_1, this.o1y_1);
    } else {
      var tmp_0;
      if (this.o1y_1 == null) {
        // Inline function 'kotlin.collections.fold' call
        var accumulator = bits;
        var tmp0_iterator = this.k();
        while (tmp0_iterator.x()) {
          var element = tmp0_iterator.z();
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
          accumulator = accumulator.y1y(element);
        }
        tmp_0 = accumulator;
      } else {
        // Inline function 'kotlin.collections.fold' call
        var accumulator_0 = this;
        var tmp0_iterator_0 = bits.k();
        while (tmp0_iterator_0.x()) {
          var element_0 = tmp0_iterator_0.z();
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
          accumulator_0 = accumulator_0.y1y(element_0);
        }
        tmp_0 = accumulator_0;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(SnapshotIdSet).k = function () {
    return sequence(SnapshotIdSet$iterator$slambda_0(this, null)).k();
  };
  protoOf(SnapshotIdSet).y1z = function (default_0) {
    var belowBound = this.o1y_1;
    if (!(belowBound == null))
      return belowBound[0];
    if (!this.m1y_1.equals(new Long(0, 0)))
      return this.n1y_1 + lowestBitOf(this.m1y_1) | 0;
    if (!this.l1y_1.equals(new Long(0, 0))) {
      Companion_getInstance();
      return (this.n1y_1 + 64 | 0) + lowestBitOf(this.l1y_1) | 0;
    }
    return default_0;
  };
  protoOf(SnapshotIdSet).toString = function () {
    var tmp = anyToString(this);
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this, 10));
    var tmp0_iterator = this.k();
    while (tmp0_iterator.x()) {
      var item = tmp0_iterator.z();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.toString.<anonymous>' call
      var tmp$ret$0 = item.toString();
      destination.u(tmp$ret$0);
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
    if (b.lb(new Long(-1, 0)).equals(new Long(0, 0))) {
      base = base + 32 | 0;
      b = b.jb(32);
    }
    if (b.lb(new Long(65535, 0)).equals(new Long(0, 0))) {
      base = base + 16 | 0;
      b = b.jb(16);
    }
    if (b.lb(new Long(255, 0)).equals(new Long(0, 0))) {
      base = base + 8 | 0;
      b = b.jb(8);
    }
    if (b.lb(new Long(15, 0)).equals(new Long(0, 0))) {
      base = base + 4 | 0;
      b = b.jb(4);
    }
    if (!b.lb(new Long(1, 0)).equals(new Long(0, 0)))
      return base;
    if (!b.lb(new Long(2, 0)).equals(new Long(0, 0)))
      return base + 1 | 0;
    if (!b.lb(new Long(4, 0)).equals(new Long(0, 0)))
      return base + 2 | 0;
    if (!b.lb(new Long(8, 0)).equals(new Long(0, 0)))
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
    this.w21_1 = list;
    this.x21_1 = 0;
    this.y21_1 = 0;
  }
  protoOf(StateListStateRecord).d1m = function (value) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    _get_sync_$accessor$8381d7_hayxw0();
    var tmp = this;
    tmp.w21_1 = (value instanceof StateListStateRecord ? value : THROW_CCE()).w21_1;
    this.x21_1 = value.x21_1;
    this.y21_1 = value.y21_1;
  };
  protoOf(StateListStateRecord).e1m = function () {
    return new StateListStateRecord(this.w21_1);
  };
  function SnapshotStateList() {
    this.z21_1 = new StateListStateRecord(persistentListOf());
  }
  protoOf(SnapshotStateList).i1m = function () {
    return this.z21_1;
  };
  protoOf(SnapshotStateList).j1m = function (value) {
    value.u1y_1 = this.z21_1;
    var tmp = this;
    tmp.z21_1 = value instanceof StateListStateRecord ? value : THROW_CCE();
  };
  protoOf(SnapshotStateList).a22 = function () {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var tmp = this.z21_1;
    var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.<get-structure>.<anonymous>' call
    return current(this_0).y21_1;
  };
  protoOf(SnapshotStateList).b22 = function () {
    var tmp = this.z21_1;
    return readable_0(tmp instanceof StateListStateRecord ? tmp : THROW_CCE(), this);
  };
  protoOf(SnapshotStateList).i = function () {
    return this.b22().w21_1.i();
  };
  protoOf(SnapshotStateList).xd = function (element) {
    return this.b22().w21_1.m(element);
  };
  protoOf(SnapshotStateList).m = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.xd((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).yd = function (elements) {
    return this.b22().w21_1.n(elements);
  };
  protoOf(SnapshotStateList).n = function (elements) {
    return this.yd(elements);
  };
  protoOf(SnapshotStateList).j = function (index) {
    return this.b22().w21_1.j(index);
  };
  protoOf(SnapshotStateList).c22 = function (element) {
    return this.b22().w21_1.l(element);
  };
  protoOf(SnapshotStateList).l = function (element) {
    if (!(element == null ? true : !(element == null)))
      return -1;
    return this.c22((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).o = function () {
    return this.b22().w21_1.o();
  };
  protoOf(SnapshotStateList).k = function () {
    return this.ta();
  };
  protoOf(SnapshotStateList).ta = function () {
    return new StateListIterator(this, 0);
  };
  protoOf(SnapshotStateList).i16 = function (element) {
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
      var tmp = this.z21_1;
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      currentModification = current_0.x21_1;
      oldList = current_0.w21_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.add.<anonymous>' call
      var newList = ensureNotNull(oldList).u(element);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.z21_1;
      var this_1 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.iv();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_1, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$8381d7_hayxw0();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.x21_1 === currentModification) {
        $this$writable.w21_1 = newList;
        if (true) {
          $this$writable.y21_1 = $this$writable.y21_1 + 1 | 0;
        }
        $this$writable.x21_1 = $this$writable.x21_1 + 1 | 0;
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
  protoOf(SnapshotStateList).u = function (element) {
    return this.i16((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).d22 = function (index, element) {
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
      var tmp = this.z21_1;
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      currentModification = current_0.x21_1;
      oldList = current_0.w21_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.add.<anonymous>' call
      var newList = ensureNotNull(oldList).o1t(index, element);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.z21_1;
      var this_1 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.iv();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_1, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$8381d7_hayxw0();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.x21_1 === currentModification) {
        $this$writable.w21_1 = newList;
        if (true) {
          $this$writable.y21_1 = $this$writable.y21_1 + 1 | 0;
        }
        $this$writable.x21_1 = $this$writable.x21_1 + 1 | 0;
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
  protoOf(SnapshotStateList).q1 = function (index, element) {
    return this.d22(index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).e22 = function (elements) {
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
      var tmp = this.z21_1;
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      currentModification = current_0.x21_1;
      oldList = current_0.w21_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.addAll.<anonymous>' call
      var newList = ensureNotNull(oldList).a1(elements);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.z21_1;
      var this_1 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.iv();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_1, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$8381d7_hayxw0();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.x21_1 === currentModification) {
        $this$writable.w21_1 = newList;
        if (true) {
          $this$writable.y21_1 = $this$writable.y21_1 + 1 | 0;
        }
        $this$writable.x21_1 = $this$writable.x21_1 + 1 | 0;
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
  protoOf(SnapshotStateList).a1 = function (elements) {
    return this.e22(elements);
  };
  protoOf(SnapshotStateList).b1 = function () {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
    // Inline function 'androidx.compose.runtime.snapshots.writable' call
    var tmp = this.z21_1;
    var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
    var snapshot = get_snapshotInitializer();
    // Inline function 'kotlin.also' call
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
    snapshot = Companion_instance_12.iv();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.clear.<anonymous>' call
    var $this$writable = writableRecord(this_0, this, snapshot);
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    _get_sync_$accessor$8381d7_hayxw0();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.clear.<anonymous>.<anonymous>' call
    $this$writable.w21_1 = persistentListOf();
    $this$writable.x21_1 = $this$writable.x21_1 + 1 | 0;
    $this$writable.y21_1 = $this$writable.y21_1 + 1 | 0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
    notifyWrite(snapshot, this);
  };
  protoOf(SnapshotStateList).f22 = function (element) {
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
      var tmp = this.z21_1;
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      currentModification = current_0.x21_1;
      oldList = current_0.w21_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.remove.<anonymous>' call
      var newList = ensureNotNull(oldList).v(element);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.z21_1;
      var this_1 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.iv();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_1, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$8381d7_hayxw0();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.x21_1 === currentModification) {
        $this$writable.w21_1 = newList;
        if (true) {
          $this$writable.y21_1 = $this$writable.y21_1 + 1 | 0;
        }
        $this$writable.x21_1 = $this$writable.x21_1 + 1 | 0;
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
  protoOf(SnapshotStateList).v = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.f22((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).g1 = function (index) {
    // Inline function 'kotlin.also' call
    var this_0 = this.j(index);
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
      var tmp = this.z21_1;
      var this_1 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_1);
      currentModification = current_0.x21_1;
      oldList = current_0.w21_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.removeAt.<anonymous>.<anonymous>' call
      var newList = ensureNotNull(oldList).g1(index);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.z21_1;
      var this_2 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.iv();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_2, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$8381d7_hayxw0();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.x21_1 === currentModification) {
        $this$writable.w21_1 = newList;
        if (true) {
          $this$writable.y21_1 = $this$writable.y21_1 + 1 | 0;
        }
        $this$writable.x21_1 = $this$writable.x21_1 + 1 | 0;
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
  protoOf(SnapshotStateList).g22 = function (index, element) {
    // Inline function 'kotlin.also' call
    var this_0 = this.j(index);
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
      var tmp = this.z21_1;
      var this_1 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_1);
      currentModification = current_0.x21_1;
      oldList = current_0.w21_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.set.<anonymous>.<anonymous>' call
      var newList = ensureNotNull(oldList).r(index, element);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.z21_1;
      var this_2 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.iv();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_2, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$8381d7_hayxw0();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.x21_1 === currentModification) {
        $this$writable.w21_1 = newList;
        if (false) {
          $this$writable.y21_1 = $this$writable.y21_1 + 1 | 0;
        }
        $this$writable.x21_1 = $this$writable.x21_1 + 1 | 0;
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
  protoOf(SnapshotStateList).r = function (index, element) {
    return this.g22(index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function validateModification($this) {
    if (!($this.h22_1.a22() === $this.k22_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function StateListIterator(list, offset) {
    this.h22_1 = list;
    this.i22_1 = offset - 1 | 0;
    this.j22_1 = -1;
    this.k22_1 = this.h22_1.a22();
  }
  protoOf(StateListIterator).x = function () {
    return this.i22_1 < (this.h22_1.i() - 1 | 0);
  };
  protoOf(StateListIterator).z = function () {
    validateModification(this);
    var newIndex = this.i22_1 + 1 | 0;
    this.j22_1 = newIndex;
    validateRange(newIndex, this.h22_1.i());
    // Inline function 'kotlin.also' call
    var this_0 = this.h22_1.j(newIndex);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.StateListIterator.next.<anonymous>' call
    this.i22_1 = newIndex;
    return this_0;
  };
  protoOf(StateListIterator).y = function () {
    validateModification(this);
    this.h22_1.g1(this.i22_1);
    this.i22_1 = this.i22_1 - 1 | 0;
    this.j22_1 = -1;
    this.k22_1 = this.h22_1.a22();
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
    var high = $this.x20_1 - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midHash = $this.y20_1[mid];
      if (midHash < hash)
        low = mid + 1 | 0;
      else if (midHash > hash)
        high = mid - 1 | 0;
      else {
        var tmp0_safe_receiver = $this.z20_1[mid];
        var midVal = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.yl();
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
        if (!($this.y20_1[i] === valueHash)) {
          break $l$loop;
        }
        var tmp1_safe_receiver = $this.z20_1[i];
        var v = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.yl();
        if (v === value) {
          return i;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    var last = $this.x20_1;
    if (inductionVariable_0 < last)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        if (!($this.y20_1[i_0] === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
        var tmp3_safe_receiver = $this.z20_1[i_0];
        var v_0 = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.yl();
        if (v_0 === value) {
          return i_0;
        }
      }
       while (inductionVariable_0 < last);
    return -($this.x20_1 + 1 | 0) | 0;
  }
  function SnapshotWeakSet() {
    this.x20_1 = 0;
    this.y20_1 = new Int32Array(16);
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.z20_1 = fillArrayVal(Array(16), null);
  }
  protoOf(SnapshotWeakSet).q1a = function (value) {
    var index;
    var size = this.x20_1;
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
    var capacity = this.z20_1.length;
    if (size === capacity) {
      var newCapacity = imul(capacity, 2);
      // Inline function 'kotlin.arrayOfNulls' call
      var newValues = fillArrayVal(Array(newCapacity), null);
      var newHashes = new Int32Array(newCapacity);
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = this.z20_1;
      var destinationOffset = insertIndex + 1 | 0;
      arrayCopy(this_0, newValues, destinationOffset, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      var this_1 = this.z20_1;
      arrayCopy(this_1, newValues, 0, 0, insertIndex);
      // Inline function 'kotlin.collections.copyInto' call
      var this_2 = this.y20_1;
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
      var tmp_0 = this.y20_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_0, newHashes, 0, 0, insertIndex);
      this.z20_1 = newValues;
      this.y20_1 = newHashes;
    } else {
      // Inline function 'kotlin.collections.copyInto' call
      var this_3 = this.z20_1;
      var destination = this.z20_1;
      var destinationOffset_1 = insertIndex + 1 | 0;
      arrayCopy(this_3, destination, destinationOffset_1, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      var this_4 = this.y20_1;
      var destination_0 = this.y20_1;
      var destinationOffset_2 = insertIndex + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_1 = this_4;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_1, destination_0, destinationOffset_2, insertIndex, size);
    }
    this.z20_1[insertIndex] = new WeakReference(value);
    this.y20_1[insertIndex] = hash;
    this.x20_1 = this.x20_1 + 1 | 0;
    return true;
  };
  function StateObjectImpl() {
    this.i1d_1 = new AtomicInt(0);
  }
  protoOf(StateObjectImpl).j1d = function (reader) {
    do {
      var old = _ReaderKind___init__impl__jqeebu(this.i1d_1.yl());
      // Inline function 'androidx.compose.runtime.snapshots.ReaderKind.isReadIn' call
      var this_0 = old;
      if (!((_ReaderKind___get_mask__impl__gmhzqb(this_0) & _ReaderKind___get_mask__impl__gmhzqb(reader)) === 0))
        return Unit_instance;
      // Inline function 'androidx.compose.runtime.snapshots.ReaderKind.withReadIn' call
      var this_1 = old;
      var new_0 = _ReaderKind___init__impl__jqeebu(_ReaderKind___get_mask__impl__gmhzqb(this_1) | _ReaderKind___get_mask__impl__gmhzqb(reader));
    }
     while (!this.i1d_1.l22(_ReaderKind___get_mask__impl__gmhzqb(old), _ReaderKind___get_mask__impl__gmhzqb(new_0)));
  };
  protoOf(StateObjectImpl).l1g = function (reader) {
    // Inline function 'androidx.compose.runtime.snapshots.ReaderKind.isReadIn' call
    var this_0 = _ReaderKind___init__impl__jqeebu(this.i1d_1.yl());
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
    this.q1b_1 = value;
  }
  protoOf(AtomicReference).yl = function () {
    // Inline function 'kotlinx.atomicfu.atomicfu_getValue' call
    return this.q1b_1;
  };
  protoOf(AtomicReference).i1c = function (value) {
    // Inline function 'kotlinx.atomicfu.atomicfu_setValue' call
    // Inline function 'androidx.compose.runtime.AtomicReference.set.<set-delegate>' call
    this.q1b_1 = value;
  };
  protoOf(AtomicReference).r1b = function (value) {
    // Inline function 'kotlinx.atomicfu.atomicfu_getAndSet' call
    var oldValue = this.q1b_1;
    // Inline function 'androidx.compose.runtime.AtomicReference.getAndSet.<set-delegate>' call
    this.q1b_1 = value;
    return oldValue;
  };
  protoOf(AtomicReference).e1d = function (expect, newValue) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.atomicfu.atomicfu_compareAndSet' call
      if (equals(this.q1b_1, expect)) {
        // Inline function 'androidx.compose.runtime.AtomicReference.compareAndSet.<set-delegate>' call
        this.q1b_1 = newValue;
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
    this.g20_1 = value;
  }
  protoOf(AtomicInt).yl = function () {
    // Inline function 'kotlinx.atomicfu.atomicfu_getValue' call
    return this.g20_1;
  };
  protoOf(AtomicInt).e20 = function (amount) {
    // Inline function 'kotlinx.atomicfu.atomicfu_addAndGet' call
    // Inline function 'androidx.compose.runtime.AtomicInt.add.<set-delegate>' call
    this.g20_1 = this.g20_1 + amount | 0;
    return this.g20_1;
  };
  protoOf(AtomicInt).l22 = function (expect, newValue) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.atomicfu.atomicfu_compareAndSet' call
      if (equals(this.g20_1, expect)) {
        // Inline function 'androidx.compose.runtime.AtomicInt.compareAndSet.<set-delegate>' call
        this.g20_1 = newValue;
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
    if ($this.j1x_1) {
      var scope = $this.l1x_1;
      if (!(scope == null)) {
        scope.u1d();
        $this.l1x_1 = null;
      }
      var scopes = $this.m1x_1;
      if (!(scopes == null)) {
        var inductionVariable = 0;
        var last = scopes.i();
        if (inductionVariable < last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = scopes.j(index);
            item.u1d();
          }
           while (inductionVariable < last);
        scopes.b1();
      }
    }
  }
  function trackRead($this, composer) {
    if ($this.j1x_1) {
      var scope = composer.b1a();
      if (!(scope == null)) {
        composer.c1a(scope);
        var lastScope = $this.l1x_1;
        if (replacableWith(lastScope, scope)) {
          $this.l1x_1 = scope;
        } else {
          var lastScopes = $this.m1x_1;
          if (lastScopes == null) {
            // Inline function 'kotlin.collections.mutableListOf' call
            var newScopes = ArrayList_init_$Create$();
            $this.m1x_1 = newScopes;
            newScopes.u(scope);
          } else {
            var inductionVariable = 0;
            var last = lastScopes.i();
            if (inductionVariable < last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var scopeAtIndex = lastScopes.j(index);
                if (replacableWith(scopeAtIndex, scope)) {
                  lastScopes.r(index, scope);
                  return Unit_instance;
                }
              }
               while (inductionVariable < last);
            lastScopes.u(scope);
          }
        }
      }
    }
  }
  function invoke$invoke(receiver, p0, p1) {
    receiver.l17(p0, p1);
  }
  function ComposableLambdaImpl$invoke$invoke$ref($boundThis) {
    return function (p0, p1) {
      invoke$invoke($boundThis, p0, p1);
      return Unit_instance;
    };
  }
  function ComposableLambdaImpl$invoke$lambda(this$0, $p1, $changed) {
    return function (nc, _anonymous_parameter_1__qggqgd) {
      this$0.m22($p1, nc, updateChangedFlags($changed) | 1);
      return Unit_instance;
    };
  }
  function ComposableLambdaImpl(key, tracked, block) {
    this.i1x_1 = key;
    this.j1x_1 = tracked;
    this.k1x_1 = block;
    this.l1x_1 = null;
    this.m1x_1 = null;
  }
  protoOf(ComposableLambdaImpl).n1x = function (block) {
    if (!equals(this.k1x_1, block)) {
      var oldBlockNull = this.k1x_1 == null;
      this.k1x_1 = block;
      if (!oldBlockNull) {
        trackWrite(this);
      }
    }
  };
  protoOf(ComposableLambdaImpl).l17 = function (c, changed) {
    var c_0 = c.k19(this.i1x_1);
    trackRead(this, c_0);
    var dirty = changed | (c_0.lz(this) ? differentBits(0) : sameBits(0));
    var tmp = this.k1x_1;
    var result = ((!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE())(c_0, dirty);
    var tmp0_safe_receiver = c_0.l19();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.i1e(ComposableLambdaImpl$invoke$invoke$ref(this));
    }
    return result;
  };
  protoOf(ComposableLambdaImpl).m22 = function (p1, c, changed) {
    var c_0 = c.k19(this.i1x_1);
    trackRead(this, c_0);
    var dirty = changed | (c_0.lz(this) ? differentBits(1) : sameBits(1));
    var tmp = this.k1x_1;
    var result = ((!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE())(p1, c_0, dirty);
    var tmp0_safe_receiver = c_0.l19();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.i1e(ComposableLambdaImpl$invoke$lambda(this, p1, changed));
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
      this_0.m6(tmp$ret$0);
      return Unit_instance;
    };
  }
  function $withFrameNanosCOROUTINE$4(_this__u8e3s4, onFrame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v22_1 = _this__u8e3s4;
    this.w22_1 = onFrame;
  }
  protoOf($withFrameNanosCOROUTINE$4).ic = function () {
    var suspendResult = this.yb_1;
    $sm: do
      try {
        var tmp = this.wb_1;
        switch (tmp) {
          case 0:
            this.xb_1 = 2;
            this.wb_1 = 1;
            var safe = SafeContinuation_init_$Create$(intercepted(this));
            var tmp_0 = window;
            tmp_0.requestAnimationFrame(MonotonicClockImpl$withFrameNanos$lambda(this.w22_1, safe));
            suspendResult = returnIfSuspended(safe.n6(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.zb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.xb_1 === 2) {
          throw e;
        } else {
          this.wb_1 = this.xb_1;
          this.zb_1 = e;
        }
      }
     while (true);
  };
  function MonotonicClockImpl() {
  }
  protoOf(MonotonicClockImpl).jw = function (onFrame, $completion) {
    var tmp = new $withFrameNanosCOROUTINE$4(this, onFrame, $completion);
    tmp.yb_1 = Unit_instance;
    tmp.zb_1 = null;
    return tmp.ic();
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
  protoOf(Trace).v15 = function (name) {
    return null;
  };
  protoOf(Trace).k16 = function (token) {
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
    tmp.b12_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(IntMap).j = function (key) {
    return this.b12_1.p2(key);
  };
  protoOf(IntMap).c12 = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    this.b12_1.g2(key, value);
  };
  function WeakReference(reference) {
    this.a21_1 = reference;
  }
  protoOf(WeakReference).yl = function () {
    return this.a21_1;
  };
  //region block: post-declaration
  protoOf(OffsetApplier).jv = onBeginChanges;
  protoOf(OffsetApplier).kv = onEndChanges;
  protoOf(AbstractApplier).jv = onBeginChanges;
  protoOf(AbstractApplier).kv = onEndChanges;
  protoOf(BroadcastFrameClock).i2 = get_key;
  protoOf(BroadcastFrameClock).dc = get;
  protoOf(BroadcastFrameClock).hf = fold;
  protoOf(BroadcastFrameClock).gf = minusKey;
  protoOf(BroadcastFrameClock).if = plus;
  defineProp(protoOf(ComposeRuntimeError), 'message', function () {
    return this.p6();
  });
  protoOf(StructuralEqualityPolicy).y1l = merge;
  protoOf(StateObjectImpl).k1m = mergeRecords;
  protoOf(SnapshotStateList).k1m = mergeRecords;
  protoOf(MonotonicClockImpl).i2 = get_key;
  protoOf(MonotonicClockImpl).dc = get;
  protoOf(MonotonicClockImpl).hf = fold;
  protoOf(MonotonicClockImpl).gf = minusKey;
  protoOf(MonotonicClockImpl).if = plus;
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
  _.$_$.k = Recomposer;
  _.$_$.l = compositionLocalOf;
  _.$_$.m = invalidApplier;
  _.$_$.n = isTraceInProgress;
  _.$_$.o = mutableStateListOf;
  _.$_$.p = mutableStateOf;
  _.$_$.q = sourceInformationMarkerEnd;
  _.$_$.r = sourceInformationMarkerStart;
  _.$_$.s = sourceInformation;
  _.$_$.t = staticCompositionLocalOf;
  _.$_$.u = traceEventEnd;
  _.$_$.v = traceEventStart;
  _.$_$.w = updateChangedFlags;
  _.$_$.x = _SkippableUpdater___init__impl__4ft0t9;
  _.$_$.y = _SkippableUpdater___get_composer__impl__6t7yne;
  _.$_$.z = _Updater___init__impl__rbfxm8;
  _.$_$.a1 = Updater__set_impl_v7kwss;
  _.$_$.b1 = Companion_instance_12;
  _.$_$.c1 = Companion_getInstance_0;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-runtime-runtime.js.map
