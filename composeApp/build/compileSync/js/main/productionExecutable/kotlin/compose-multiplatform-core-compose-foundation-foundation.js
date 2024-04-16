(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-compose-runtime-runtime.js', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-ui-ui.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-compose-ui-ui-text.js', './compose-multiplatform-core-compose-runtime-runtime-saveable.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './compose-multiplatform-core-compose-ui-ui-geometry.js', './skiko-kjs.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-compose-ui-ui-text.js'), require('./compose-multiplatform-core-compose-runtime-runtime-saveable.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./compose-multiplatform-core-compose-ui-ui-geometry.js'), require('./skiko-kjs.js'));
  else {
    if (typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation'.");
    }
    if (typeof this['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation'.");
    }
    if (typeof this['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation'.");
    }
    if (typeof this['compose-multiplatform-core-compose-ui-ui-text'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation'. Its dependency 'compose-multiplatform-core-compose-ui-ui-text' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-text' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation'.");
    }
    if (typeof this['compose-multiplatform-core-compose-runtime-runtime-saveable'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime-saveable' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime-saveable' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation'.");
    }
    if (typeof this['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation'.");
    }
    if (typeof this['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation'. Its dependency 'compose-multiplatform-core-compose-ui-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-geometry' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation'.");
    }
    if (typeof this['skiko-kjs'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation'. Its dependency 'skiko-kjs' was not found. Please, check whether 'skiko-kjs' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation'.");
    }
    root['compose-multiplatform-core-compose-foundation-foundation'] = factory(typeof this['compose-multiplatform-core-compose-foundation-foundation'] === 'undefined' ? {} : this['compose-multiplatform-core-compose-foundation-foundation'], this['compose-multiplatform-core-compose-runtime-runtime'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-compose-ui-ui'], this['compose-multiplatform-core-compose-ui-ui-unit'], this['kotlinx-coroutines-core'], this['compose-multiplatform-core-compose-ui-ui-text'], this['compose-multiplatform-core-compose-runtime-runtime-saveable'], this['compose-multiplatform-core-compose-ui-ui-graphics'], this['compose-multiplatform-core-compose-ui-ui-geometry'], this['skiko-kjs']);
  }
}(this, function (_, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_ui_ui_text, kotlin_org_jetbrains_compose_runtime_runtime_saveable, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_skiko_skiko) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e1;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var Unit_instance = kotlin_kotlin.$_$.k5;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var equals = kotlin_kotlin.$_$.ab;
  var protoOf = kotlin_kotlin.$_$.ic;
  var classMeta = kotlin_kotlin.$_$.xa;
  var setMetadataFor = kotlin_kotlin.$_$.jc;
  var VOID = kotlin_kotlin.$_$.g;
  var CoroutineImpl = kotlin_kotlin.$_$.ja;
  var THROW_CCE = kotlin_kotlin.$_$.ng;
  var AwaitPointerEventScope = kotlin_org_jetbrains_compose_ui_ui.$_$.b;
  var isInterface = kotlin_kotlin.$_$.vb;
  var PointerEventPass_Main_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.r1;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.v9;
  var changedToUpIgnoreConsumed = kotlin_org_jetbrains_compose_ui_ui.$_$.f;
  var isOutOfBounds = kotlin_org_jetbrains_compose_ui_ui.$_$.h;
  var PointerEventPass_Final_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.q1;
  var PointerEventTimeoutCancellationException = kotlin_org_jetbrains_compose_ui_ui.$_$.c;
  var positionChangedIgnoreConsumed = kotlin_org_jetbrains_compose_ui_ui.$_$.m;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f1;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g1;
  var get_isActive = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q1;
  var CancellationException = kotlin_kotlin.$_$.u9;
  var TextOverflow = kotlin_org_jetbrains_compose_ui_ui_text.$_$.g;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var _TextOverflow___get_value__impl__vugm5i = kotlin_org_jetbrains_compose_ui_ui_text.$_$.u;
  var Companion_instance = kotlin_org_jetbrains_compose_ui_ui.$_$.w1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_text.$_$.c1;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.b1;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.x4;
  var rememberSaveable = kotlin_org_jetbrains_compose_runtime_runtime_saveable.$_$.b;
  var _Color___get_value__impl__1pls5m = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c1;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.z3;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p1;
  var graphicsLayer = kotlin_org_jetbrains_compose_ui_ui.$_$.a;
  var get_LocalFontFamilyResolver = kotlin_org_jetbrains_compose_ui_ui.$_$.d1;
  var AnnotatedString_init_$Create$ = kotlin_org_jetbrains_compose_ui_ui_text.$_$.q;
  var get_currentCompositeKeyHash = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var materialize = kotlin_org_jetbrains_compose_ui_ui.$_$.p1;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui.$_$.v1;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n1;
  var _Updater___get_composer__impl__9ty7av = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m1;
  var Saver = kotlin_org_jetbrains_compose_runtime_runtime_saveable.$_$.a;
  var _Constraints___get_maxWidth__impl__uuyqc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c1;
  var _Constraints___get_maxHeight__impl__dt3e8z = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b1;
  var objectMeta = kotlin_kotlin.$_$.hc;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k1;
  var toString = kotlin_kotlin.$_$.nc;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.v1;
  var TextRange = kotlin_org_jetbrains_compose_ui_ui_text.$_$.n;
  var charSequenceGet = kotlin_kotlin.$_$.ua;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.t2;
  var charSequenceLength = kotlin_kotlin.$_$.va;
  var roundToInt = kotlin_kotlin.$_$.sc;
  var toRawBits = kotlin_kotlin.$_$.xh;
  var toLong = kotlin_kotlin.$_$.lc;
  var Long = kotlin_kotlin.$_$.gg;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.w4;
  var floatFromBits = kotlin_kotlin.$_$.db;
  var Constraints = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a;
  var coerceAtLeast = kotlin_kotlin.$_$.wc;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u1;
  var _Constraints___get_hasBoundedWidth__impl__7hd0wr = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z;
  var _Constraints___get_minWidth__impl__hi9lfi = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e1;
  var coerceIn = kotlin_kotlin.$_$.bd;
  var resolveDefaults = kotlin_org_jetbrains_compose_ui_ui_text.$_$.p;
  var Paragraph = kotlin_org_jetbrains_compose_ui_ui_text.$_$.l;
  var isNaN_0 = kotlin_kotlin.$_$.jh;
  var _Constraints___get_minHeight__impl__ev4bgx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d1;
  var coerceAtMost = kotlin_kotlin.$_$.yc;
  var repeat = kotlin_kotlin.$_$.qe;
  var emptyList = kotlin_kotlin.$_$.i7;
  var ensureNotNull = kotlin_kotlin.$_$.fh;
  var TextLayoutInput_init_$Create$ = kotlin_org_jetbrains_compose_ui_ui_text.$_$.r;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m;
  var constrain = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q;
  var TextLayoutResult = kotlin_org_jetbrains_compose_ui_ui_text.$_$.m;
  var MultiParagraphIntrinsics = kotlin_org_jetbrains_compose_ui_ui_text.$_$.h;
  var MultiParagraph = kotlin_org_jetbrains_compose_ui_ui_text.$_$.i;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.a2;
  var ParagraphIntrinsics = kotlin_org_jetbrains_compose_ui_ui_text.$_$.j;
  var Paragraph_0 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.k;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k1;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l1;
  var Constraints__copy$default_impl_f452rp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t1;
  var ModifierNodeElement = kotlin_org_jetbrains_compose_ui_ui.$_$.v;
  var hashCode = kotlin_kotlin.$_$.kb;
  var TextOverflow__hashCode_impl_kqdwgt = kotlin_org_jetbrains_compose_ui_ui_text.$_$.t;
  var getBooleanHashCode = kotlin_kotlin.$_$.eb;
  var DelegatingNode = kotlin_org_jetbrains_compose_ui_ui.$_$.q;
  var invalidateMeasurement = kotlin_org_jetbrains_compose_ui_ui.$_$.b1;
  var onMeasureResultChanged = kotlin_org_jetbrains_compose_ui_ui.$_$.r;
  var LayoutModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.u;
  var DrawModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.s;
  var GlobalPositionAwareModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.t;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.x;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.v;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s1;
  var RememberObserver = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.y;
  var Offset__plus_impl_c78cg0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.q;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.t1;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.f;
  var invalidateSemantics = kotlin_org_jetbrains_compose_ui_ui.$_$.c1;
  var invalidateDraw = kotlin_org_jetbrains_compose_ui_ui.$_$.z;
  var Node = kotlin_org_jetbrains_compose_ui_ui.$_$.n1;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var set_text = kotlin_org_jetbrains_compose_ui_ui.$_$.j1;
  var set_textSubstitution = kotlin_org_jetbrains_compose_ui_ui.$_$.k1;
  var set_isShowingTextSubstitution = kotlin_org_jetbrains_compose_ui_ui.$_$.g1;
  var setTextSubstitution = kotlin_org_jetbrains_compose_ui_ui.$_$.h1;
  var showTextSubstitution = kotlin_org_jetbrains_compose_ui_ui.$_$.i1;
  var clearTextSubstitution = kotlin_org_jetbrains_compose_ui_ui.$_$.e1;
  var getTextLayoutResult = kotlin_org_jetbrains_compose_ui_ui.$_$.f1;
  var invalidateLayer = kotlin_org_jetbrains_compose_ui_ui.$_$.a1;
  var get_FirstBaseline = kotlin_org_jetbrains_compose_ui_ui.$_$.o;
  var to = kotlin_kotlin.$_$.zh;
  var get_LastBaseline = kotlin_org_jetbrains_compose_ui_ui.$_$.p;
  var mapOf = kotlin_kotlin.$_$.p8;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f;
  var Rect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.a1;
  var Companion_getInstance_8 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.w1;
  var Fill_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.q1;
  var get_shouldClearDescendantSemantics = kotlin_org_jetbrains_compose_ui_ui.$_$.w;
  var get_shouldMergeDescendantSemantics = kotlin_org_jetbrains_compose_ui_ui.$_$.x;
  var SemanticsModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.y;
  var KMutableProperty1 = kotlin_kotlin.$_$.id;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ib;
  var getStringHashCode = kotlin_kotlin.$_$.jb;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.w;
  var TextRange_0 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.o;
  var LazyThreadSafetyMode_NONE_getInstance = kotlin_kotlin.$_$.i;
  var lazy = kotlin_kotlin.$_$.lh;
  var _TextRange___get_end__impl__gcdxpp = kotlin_org_jetbrains_compose_ui_ui_text.$_$.v;
  var _TextRange___get_start__impl__ww4t90 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.w;
  var KProperty0 = kotlin_kotlin.$_$.jd;
  var THROW_ISE = kotlin_kotlin.$_$.og;
  var getLocalDelegateReference = kotlin_kotlin.$_$.fb;
  var composed = kotlin_org_jetbrains_compose_ui_ui.$_$.o1;
  var Offset__minus_impl_hoj2c0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.p;
  var Offset__getDistance_impl_pclvxn = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.n;
  var Companion_getInstance_9 = kotlin_org_jetbrains_compose_ui_ui.$_$.u1;
  var get_isPrimaryPressed = kotlin_org_jetbrains_compose_ui_ui.$_$.i;
  var PointerInputScope = kotlin_org_jetbrains_compose_ui_ui.$_$.d;
  var rememberUpdatedState = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var pointerInput = kotlin_org_jetbrains_compose_ui_ui.$_$.l;
  var positionChange = kotlin_org_jetbrains_compose_ui_ui.$_$.n;
  var changedToDownIgnoreConsumed = kotlin_org_jetbrains_compose_ui_ui.$_$.e;
  var get_isShiftPressed = kotlin_org_jetbrains_compose_ui_ui.$_$.j;
  var changedToUp = kotlin_org_jetbrains_compose_ui_ui.$_$.g;
  var first = kotlin_kotlin.$_$.s7;
  var Enum = kotlin_kotlin.$_$.bg;
  var compositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var Color__hashCode_impl_vjyivj = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.b1;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.e;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m1;
  var get_LocalSystemTheme = kotlin_org_jetbrains_compose_ui_ui.$_$.m1;
  var SystemTheme_Dark_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.s1;
  var pointerHoverIcon = kotlin_org_jetbrains_compose_ui_ui.$_$.k;
  var Companion_getInstance_10 = kotlin_org_jetbrains_skiko_skiko.$_$.o7;
  var Companion_getInstance_11 = kotlin_org_jetbrains_compose_ui_ui.$_$.t1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(HorizontalPointerDirectionConfig$1, VOID, classMeta);
  setMetadataFor(VerticalPointerDirectionConfig$1, VOID, classMeta);
  setMetadataFor(BidirectionalPointerDirectionConfig$1, VOID, classMeta);
  setMetadataFor(awaitLongPressOrCancellation$slambda, 'awaitLongPressOrCancellation$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($dragCOROUTINE$0, '$dragCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor($awaitLongPressOrCancellationCOROUTINE$1, '$awaitLongPressOrCancellationCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor($awaitDragOrCancellationCOROUTINE$2, '$awaitDragOrCancellationCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor(awaitEachGesture$slambda, 'awaitEachGesture$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($awaitAllPointersUpCOROUTINE$4, '$awaitAllPointersUpCOROUTINE$4', classMeta, CoroutineImpl);
  setMetadataFor(EmptyMeasurePolicy, 'EmptyMeasurePolicy', objectMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(InlineDensity, 'InlineDensity', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(MinLinesConstrainer, 'MinLinesConstrainer', classMeta);
  setMetadataFor(MultiParagraphLayoutCache, 'MultiParagraphLayoutCache', classMeta);
  setMetadataFor(ParagraphLayoutCache, 'ParagraphLayoutCache', classMeta);
  setMetadataFor(SelectableTextAnnotatedStringElement, 'SelectableTextAnnotatedStringElement', classMeta, ModifierNodeElement);
  setMetadataFor(SelectableTextAnnotatedStringNode, 'SelectableTextAnnotatedStringNode', classMeta, DelegatingNode, [DelegatingNode, LayoutModifierNode, DrawModifierNode, GlobalPositionAwareModifierNode]);
  setMetadataFor(SelectionController, 'SelectionController', classMeta, VOID, [RememberObserver]);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(StaticTextSelectionParams, 'StaticTextSelectionParams', classMeta);
  setMetadataFor(makeDefaultSelectionModifier$longPressDragObserver$1, VOID, classMeta);
  setMetadataFor(makeDefaultSelectionModifier$mouseSelectionObserver$1, VOID, classMeta);
  setMetadataFor(TextAnnotatedStringElement, 'TextAnnotatedStringElement', classMeta, ModifierNodeElement);
  setMetadataFor(TextSubstitutionValue, 'TextSubstitutionValue', classMeta);
  setMetadataFor(TextAnnotatedStringNode, 'TextAnnotatedStringNode', classMeta, Node, [Node, LayoutModifierNode, DrawModifierNode, SemanticsModifierNode]);
  setMetadataFor(TextStringSimpleElement, 'TextStringSimpleElement', classMeta, ModifierNodeElement);
  setMetadataFor(TextSubstitutionValue_0, 'TextSubstitutionValue', classMeta);
  setMetadataFor(TextStringSimpleNode, 'TextStringSimpleNode', classMeta, Node, [Node, LayoutModifierNode, DrawModifierNode, SemanticsModifierNode]);
  setMetadataFor(MultiWidgetSelectionDelegate, 'MultiWidgetSelectionDelegate', classMeta);
  setMetadataFor(AnchorInfo, 'AnchorInfo', classMeta);
  setMetadataFor(Selection, 'Selection', classMeta);
  setMetadataFor(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0, 'sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0', classMeta);
  setMetadataFor(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_0, 'sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0', classMeta);
  setMetadataFor(sam$androidx_compose_foundation_text_selection_BoundaryFunction$0, 'sam$androidx_compose_foundation_text_selection_BoundaryFunction$0', classMeta);
  setMetadataFor(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_1, 'sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0', classMeta);
  setMetadataFor(sam$androidx_compose_foundation_text_selection_BoundaryFunction$0_0, 'sam$androidx_compose_foundation_text_selection_BoundaryFunction$0', classMeta);
  setMetadataFor(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_2, 'sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0', classMeta);
  setMetadataFor(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_3, 'sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0', classMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(ClicksCounter, 'ClicksCounter', classMeta);
  setMetadataFor(selectionGestureInput$lambda$slambda$slambda, 'selectionGestureInput$lambda$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(selectionGestureInput$lambda$slambda, 'selectionGestureInput$lambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($awaitDownCOROUTINE$7, '$awaitDownCOROUTINE$7', classMeta, CoroutineImpl);
  setMetadataFor($mouseSelectionCOROUTINE$8, '$mouseSelectionCOROUTINE$8', classMeta, CoroutineImpl);
  setMetadataFor($touchSelectionCOROUTINE$9, '$touchSelectionCOROUTINE$9', classMeta, CoroutineImpl);
  setMetadataFor(CrossStatus, 'CrossStatus', classMeta, Enum);
  setMetadataFor(TextSelectionColors, 'TextSelectionColors', classMeta);
  //endregion
  function isSystemInDarkTheme($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1100791446, 'C(isSystemInDarkTheme)40@1721L22:DarkTheme.kt#71ulvw');
    if (isTraceInProgress()) {
      traceEventStart(-1100791446, $changed, -1, 'androidx.compose.foundation.isSystemInDarkTheme (DarkTheme.kt:40)');
    }
    var tmp0 = _isSystemInDarkTheme($composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  var HorizontalPointerDirectionConfig;
  var VerticalPointerDirectionConfig;
  var BidirectionalPointerDirectionConfig;
  function get_mouseSlop() {
    _init_properties_DragGestureDetector_kt__sw7hnt();
    return mouseSlop;
  }
  var mouseSlop;
  function get_defaultTouchSlop() {
    _init_properties_DragGestureDetector_kt__sw7hnt();
    return defaultTouchSlop;
  }
  var defaultTouchSlop;
  var mouseToTouchSlopRatio;
  function drag(_this__u8e3s4, pointerId, onDrag, $completion) {
    var tmp = new $dragCOROUTINE$0(_this__u8e3s4, pointerId, onDrag, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  }
  function awaitLongPressOrCancellation(_this__u8e3s4, pointerId, $completion) {
    var tmp = new $awaitLongPressOrCancellationCOROUTINE$1(_this__u8e3s4, pointerId, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  }
  function awaitDragOrCancellation(_this__u8e3s4, pointerId, $completion) {
    var tmp = new $awaitDragOrCancellationCOROUTINE$2(_this__u8e3s4, pointerId, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  }
  function isPointerUp(_this__u8e3s4, pointerId) {
    _init_properties_DragGestureDetector_kt__sw7hnt();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastFirstOrNull' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var this_0 = _this__u8e3s4.z4y_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.m() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.n(index);
          // Inline function 'androidx.compose.ui.util.fastFirstOrNull.<anonymous>' call
          // Inline function 'androidx.compose.foundation.gestures.isPointerUp.<anonymous>' call
          if (equals(item.f4z_1, pointerId)) {
            tmp$ret$1 = item;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    return !((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i4z_1) === true);
  }
  function HorizontalPointerDirectionConfig$1() {
  }
  function VerticalPointerDirectionConfig$1() {
  }
  function BidirectionalPointerDirectionConfig$1() {
  }
  function awaitLongPressOrCancellation$slambda($currentDown, $longPress, resultContinuation) {
    this.t6t_1 = $currentDown;
    this.u6t_1 = $longPress;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(awaitLongPressOrCancellation$slambda).y6t = function ($this$withTimeout, $completion) {
    var tmp = this.z6t($this$withTimeout, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(awaitLongPressOrCancellation$slambda).yc = function (p1, $completion) {
    return this.y6t((!(p1 == null) ? isInterface(p1, AwaitPointerEventScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(awaitLongPressOrCancellation$slambda).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 5;
            this.w6t_1 = false;
            this.ac_1 = 1;
            continue $sm;
          case 1:
            if (!!this.w6t_1) {
              this.ac_1 = 4;
              continue $sm;
            }

            this.ac_1 = 2;
            suspendResult = this.v6t_1.g56(PointerEventPass_Main_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.x6t_1 = suspendResult;
            var tmp$ret$0;
            l$ret$1: do {
              var this_0 = this.x6t_1.z4y_1;
              var inductionVariable = 0;
              var last = this_0.m() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = this_0.n(index);
                  if (!changedToUpIgnoreConsumed(item)) {
                    tmp$ret$0 = false;
                    break l$ret$1;
                  }
                }
                 while (inductionVariable <= last);
              tmp$ret$0 = true;
            }
             while (false);
            if (tmp$ret$0) {
              this.w6t_1 = true;
            }

            var tmp$ret$2;
            l$ret$3: do {
              var this_1 = this.x6t_1.z4y_1;
              var inductionVariable_0 = 0;
              var last_0 = this_1.m() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = this_1.n(index_0);
                  if (item_0.a51() ? true : isOutOfBounds(item_0, this.v6t_1.d2y(), this.v6t_1.e56())) {
                    tmp$ret$2 = true;
                    break l$ret$3;
                  }
                }
                 while (inductionVariable_0 <= last_0);
              tmp$ret$2 = false;
            }
             while (false);
            if (tmp$ret$2) {
              this.w6t_1 = true;
            }

            this.ac_1 = 3;
            suspendResult = this.v6t_1.g56(PointerEventPass_Final_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var consumeCheck = suspendResult;
            var tmp$ret$4;
            l$ret$5: do {
              var this_2 = consumeCheck.z4y_1;
              var inductionVariable_1 = 0;
              var last_1 = this_2.m() - 1 | 0;
              if (inductionVariable_1 <= last_1)
                do {
                  var index_1 = inductionVariable_1;
                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                  var item_1 = this_2.n(index_1);
                  if (item_1.a51()) {
                    tmp$ret$4 = true;
                    break l$ret$5;
                  }
                }
                 while (inductionVariable_1 <= last_1);
              tmp$ret$4 = false;
            }
             while (false);
            if (tmp$ret$4) {
              this.w6t_1 = true;
            }

            if (isPointerUp(this.x6t_1, this.t6t_1._v.f4z_1)) {
              var tmp$ret$6;
              l$ret$7: do {
                var this_3 = this.x6t_1.z4y_1;
                var inductionVariable_2 = 0;
                var last_2 = this_3.m() - 1 | 0;
                if (inductionVariable_2 <= last_2)
                  do {
                    var index_2 = inductionVariable_2;
                    inductionVariable_2 = inductionVariable_2 + 1 | 0;
                    var item_2 = this_3.n(index_2);
                    if (item_2.i4z_1) {
                      tmp$ret$6 = item_2;
                      break l$ret$7;
                    }
                  }
                   while (inductionVariable_2 <= last_2);
                tmp$ret$6 = null;
              }
               while (false);
              var newPressed = tmp$ret$6;
              if (!(newPressed == null)) {
                this.t6t_1._v = newPressed;
                this.u6t_1._v = this.t6t_1._v;
              } else {
                this.w6t_1 = true;
              }
            } else {
              var tmp$ret$8;
              l$ret$9: do {
                var this_4 = this.x6t_1.z4y_1;
                var inductionVariable_3 = 0;
                var last_3 = this_4.m() - 1 | 0;
                if (inductionVariable_3 <= last_3)
                  do {
                    var index_3 = inductionVariable_3;
                    inductionVariable_3 = inductionVariable_3 + 1 | 0;
                    var item_3 = this_4.n(index_3);
                    if (equals(item_3.f4z_1, this.t6t_1._v.f4z_1)) {
                      tmp$ret$8 = item_3;
                      break l$ret$9;
                    }
                  }
                   while (inductionVariable_3 <= last_3);
                tmp$ret$8 = null;
              }
               while (false);
              this.u6t_1._v = tmp$ret$8;
            }

            this.ac_1 = 1;
            continue $sm;
          case 4:
            return Unit_instance;
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
  protoOf(awaitLongPressOrCancellation$slambda).z6t = function ($this$withTimeout, completion) {
    var i = new awaitLongPressOrCancellation$slambda(this.t6t_1, this.u6t_1, completion);
    i.v6t_1 = $this$withTimeout;
    return i;
  };
  function awaitLongPressOrCancellation$slambda_0($currentDown, $longPress, resultContinuation) {
    var i = new awaitLongPressOrCancellation$slambda($currentDown, $longPress, resultContinuation);
    var l = function ($this$withTimeout, $completion) {
      return i.y6t($this$withTimeout, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $dragCOROUTINE$0(_this__u8e3s4, pointerId, onDrag, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e6s_1 = _this__u8e3s4;
    this.f6s_1 = pointerId;
    this.g6s_1 = onDrag;
  }
  protoOf($dragCOROUTINE$0).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 3;
            this.h6s_1 = this.f6s_1;
            this.ac_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.ac_1 = 4;
              continue $sm;
            }

            this.ac_1 = 2;
            suspendResult = awaitDragOrCancellation(this.e6s_1, this.h6s_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp0_elvis_lhs = suspendResult;
            var tmp_0;
            if (tmp0_elvis_lhs == null) {
              return false;
            } else {
              tmp_0 = tmp0_elvis_lhs;
            }

            var change = tmp_0;
            if (changedToUpIgnoreConsumed(change)) {
              return true;
            }

            this.g6s_1(change);
            this.h6s_1 = change.f4z_1;
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
  function $awaitLongPressOrCancellationCOROUTINE$1(_this__u8e3s4, pointerId, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q6s_1 = _this__u8e3s4;
    this.r6s_1 = pointerId;
  }
  protoOf($awaitLongPressOrCancellationCOROUTINE$1).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 3;
            if (isPointerUp(this.q6s_1.c56(), this.r6s_1)) {
              return null;
            }

            var tmp_0 = this;
            var tmp$ret$0;
            l$ret$1: do {
              var this_0 = this.q6s_1.c56().z4y_1;
              var inductionVariable = 0;
              var last = this_0.m() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = this_0.n(index);
                  if (equals(item.f4z_1, this.r6s_1)) {
                    tmp$ret$0 = item;
                    break l$ret$1;
                  }
                }
                 while (inductionVariable <= last);
              tmp$ret$0 = null;
            }
             while (false);
            var tmp0_elvis_lhs = tmp$ret$0;
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              return null;
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.s6s_1 = tmp_1;
            this.t6s_1 = {_v: null};
            this.u6s_1 = {_v: this.s6s_1};
            this.v6s_1 = this.q6s_1.d56().y5o();
            this.bc_1 = 2;
            this.ac_1 = 1;
            suspendResult = this.q6s_1.i56(this.v6s_1, awaitLongPressOrCancellation$slambda_0(this.u6s_1, this.t6s_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.w6s_1 = null;
            this.bc_1 = 3;
            this.ac_1 = 4;
            continue $sm;
          case 2:
            this.bc_1 = 3;
            var tmp_2 = this.dc_1;
            if (tmp_2 instanceof PointerEventTimeoutCancellationException) {
              var _ = this.dc_1;
              var tmp_3 = this;
              var tmp1_elvis_lhs = this.t6s_1._v;
              tmp_3.w6s_1 = tmp1_elvis_lhs == null ? this.s6s_1 : tmp1_elvis_lhs;
              this.ac_1 = 4;
              continue $sm;
            } else {
              throw this.dc_1;
            }

          case 3:
            throw this.dc_1;
          case 4:
            this.bc_1 = 3;
            return this.w6s_1;
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
  function $awaitDragOrCancellationCOROUTINE$2(_this__u8e3s4, pointerId, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f6t_1 = _this__u8e3s4;
    this.g6t_1 = pointerId;
  }
  protoOf($awaitDragOrCancellationCOROUTINE$2).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 7;
            if (isPointerUp(this.f6t_1.c56(), this.g6t_1)) {
              return null;
            }

            this.ac_1 = 1;
            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.i6t_1 = this.f6t_1;
            var tmp_1 = this;
            tmp_1.j6t_1 = this.g6t_1;
            this.k6t_1 = this.j6t_1;
            this.ac_1 = 2;
            continue $sm;
          case 2:
            if (!true) {
              this.ac_1 = 8;
              continue $sm;
            }

            this.ac_1 = 3;
            suspendResult = this.i6t_1.h56(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var event = suspendResult;
            var tmp$ret$0;
            l$ret$1: do {
              var this_0 = event.z4y_1;
              var inductionVariable = 0;
              var last = this_0.m() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = this_0.n(index);
                  if (equals(item.f4z_1, this.k6t_1)) {
                    tmp$ret$0 = item;
                    break l$ret$1;
                  }
                }
                 while (inductionVariable <= last);
              tmp$ret$0 = null;
            }
             while (false);
            var tmp0_elvis_lhs = tmp$ret$0;
            var WHEN_RESULT;
            if (tmp0_elvis_lhs == null) {
              this.h6t_1 = null;
              this.ac_1 = 9;
              continue $sm;
            } else {
              WHEN_RESULT = tmp0_elvis_lhs;
              this.ac_1 = 4;
              continue $sm;
            }

          case 4:
            var dragEvent = WHEN_RESULT;
            if (changedToUpIgnoreConsumed(dragEvent)) {
              var tmp$ret$4;
              l$ret$5: do {
                var this_1 = event.z4y_1;
                var inductionVariable_0 = 0;
                var last_0 = this_1.m() - 1 | 0;
                if (inductionVariable_0 <= last_0)
                  do {
                    var index_0 = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    var item_0 = this_1.n(index_0);
                    if (item_0.i4z_1) {
                      tmp$ret$4 = item_0;
                      break l$ret$5;
                    }
                  }
                   while (inductionVariable_0 <= last_0);
                tmp$ret$4 = null;
              }
               while (false);
              var otherDown = tmp$ret$4;
              if (otherDown == null) {
                this.h6t_1 = dragEvent;
                this.ac_1 = 9;
                continue $sm;
              } else {
                this.k6t_1 = otherDown.f4z_1;
                this.ac_1 = 5;
                continue $sm;
              }
            } else {
              if (positionChangedIgnoreConsumed(dragEvent)) {
                this.h6t_1 = dragEvent;
                this.ac_1 = 9;
                continue $sm;
              } else {
                this.ac_1 = 6;
                continue $sm;
              }
            }

          case 5:
            this.ac_1 = 6;
            continue $sm;
          case 6:
            this.ac_1 = 2;
            continue $sm;
          case 7:
            throw this.dc_1;
          case 8:
            if (false) {
              this.ac_1 = 1;
              continue $sm;
            }

            this.ac_1 = 9;
            continue $sm;
          case 9:
            var change = this.h6t_1;
            var tmp_2;
            if ((change == null ? null : change.a51()) === false) {
              tmp_2 = change;
            } else {
              tmp_2 = null;
            }

            return tmp_2;
        }
      } catch ($p) {
        var e = $p;
        if (this.bc_1 === 7) {
          throw e;
        } else {
          this.ac_1 = this.bc_1;
          this.dc_1 = e;
        }
      }
     while (true);
  };
  var properties_initialized_DragGestureDetector_kt_xqxw6j;
  function _init_properties_DragGestureDetector_kt__sw7hnt() {
    if (!properties_initialized_DragGestureDetector_kt_xqxw6j) {
      properties_initialized_DragGestureDetector_kt_xqxw6j = true;
      HorizontalPointerDirectionConfig = new HorizontalPointerDirectionConfig$1();
      VerticalPointerDirectionConfig = new VerticalPointerDirectionConfig$1();
      BidirectionalPointerDirectionConfig = new BidirectionalPointerDirectionConfig$1();
      // Inline function 'androidx.compose.ui.unit.dp' call
      mouseSlop = _Dp___init__impl__ms3zkb(0.125);
      // Inline function 'androidx.compose.ui.unit.dp' call
      defaultTouchSlop = _Dp___init__impl__ms3zkb(18);
      // Inline function 'androidx.compose.ui.unit.Dp.div' call
      var this_0 = get_mouseSlop();
      var other = get_defaultTouchSlop();
      mouseToTouchSlopRatio = _Dp___get_value__impl__geb1vb(this_0) / _Dp___get_value__impl__geb1vb(other);
    }
  }
  function awaitEachGesture(_this__u8e3s4, block, $completion) {
    // Inline function 'kotlinx.coroutines.currentCoroutineContext' call
    // Inline function 'kotlin.js.getCoroutineContext' call
    var currentContext = $completion.s6();
    return _this__u8e3s4.v56(awaitEachGesture$slambda_0(currentContext, block, null), $completion);
  }
  function awaitAllPointersUp(_this__u8e3s4, $completion) {
    var tmp = new $awaitAllPointersUpCOROUTINE$4(_this__u8e3s4, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  }
  function allPointersUp(_this__u8e3s4) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastAny' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var this_0 = _this__u8e3s4.c56().z4y_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.m() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.n(index);
          // Inline function 'androidx.compose.ui.util.fastAny.<anonymous>' call
          // Inline function 'androidx.compose.foundation.gestures.allPointersUp.<anonymous>' call
          if (item.i4z_1) {
            tmp$ret$1 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = false;
    }
    return !tmp$ret$1;
  }
  function awaitEachGesture$slambda($currentContext, $block, resultContinuation) {
    this.r6u_1 = $currentContext;
    this.s6u_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(awaitEachGesture$slambda).y6t = function ($this$awaitPointerEventScope, $completion) {
    var tmp = this.z6t($this$awaitPointerEventScope, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(awaitEachGesture$slambda).yc = function (p1, $completion) {
    return this.y6t((!(p1 == null) ? isInterface(p1, AwaitPointerEventScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(awaitEachGesture$slambda).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 9;
            this.ac_1 = 1;
            continue $sm;
          case 1:
            if (!get_isActive(this.r6u_1)) {
              this.ac_1 = 8;
              continue $sm;
            }

            this.bc_1 = 4;
            this.ac_1 = 2;
            suspendResult = this.s6u_1(this.t6u_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.ac_1 = 3;
            suspendResult = awaitAllPointersUp(this.t6u_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.bc_1 = 9;
            this.ac_1 = 7;
            continue $sm;
          case 4:
            this.bc_1 = 9;
            var tmp_0 = this.dc_1;
            if (tmp_0 instanceof CancellationException) {
              this.u6u_1 = this.dc_1;
              if (get_isActive(this.r6u_1)) {
                this.ac_1 = 5;
                suspendResult = awaitAllPointersUp(this.t6u_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                throw this.u6u_1;
              }
            } else {
              throw this.dc_1;
            }

          case 5:
            this.ac_1 = 6;
            continue $sm;
          case 6:
            this.ac_1 = 7;
            continue $sm;
          case 7:
            this.bc_1 = 9;
            this.ac_1 = 1;
            continue $sm;
          case 8:
            return Unit_instance;
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
  protoOf(awaitEachGesture$slambda).z6t = function ($this$awaitPointerEventScope, completion) {
    var i = new awaitEachGesture$slambda(this.r6u_1, this.s6u_1, completion);
    i.t6u_1 = $this$awaitPointerEventScope;
    return i;
  };
  function awaitEachGesture$slambda_0($currentContext, $block, resultContinuation) {
    var i = new awaitEachGesture$slambda($currentContext, $block, resultContinuation);
    var l = function ($this$awaitPointerEventScope, $completion) {
      return i.y6t($this$awaitPointerEventScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $awaitAllPointersUpCOROUTINE$4(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i6u_1 = _this__u8e3s4;
  }
  protoOf($awaitAllPointersUpCOROUTINE$4).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 5;
            if (!allPointersUp(this.i6u_1)) {
              this.ac_1 = 1;
              continue $sm;
            } else {
              this.ac_1 = 4;
              continue $sm;
            }

          case 1:
            this.ac_1 = 2;
            suspendResult = this.i6u_1.g56(PointerEventPass_Final_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var events = suspendResult;
            var tmp$ret$0;
            l$ret$1: do {
              var this_0 = events.z4y_1;
              var inductionVariable = 0;
              var last = this_0.m() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = this_0.n(index);
                  if (item.i4z_1) {
                    tmp$ret$0 = true;
                    break l$ret$1;
                  }
                }
                 while (inductionVariable <= last);
              tmp$ret$0 = false;
            }
             while (false);
            if (tmp$ret$0) {
              this.ac_1 = 1;
              continue $sm;
            }

            this.ac_1 = 3;
            continue $sm;
          case 3:
            this.ac_1 = 4;
            continue $sm;
          case 4:
            return Unit_instance;
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
  function BasicText(text, modifier, style, onTextLayout, overflow, softWrap, maxLines, minLines, color, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var style_0 = {_v: style};
    var onTextLayout_0 = {_v: onTextLayout};
    var overflow_0 = {_v: new TextOverflow(overflow)};
    var softWrap_0 = {_v: softWrap};
    var maxLines_0 = {_v: maxLines};
    var minLines_0 = {_v: minLines};
    var color_0 = {_v: color};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1u(-1186827822);
    sourceInformation($composer_0, 'C(BasicText)P(8,3,7,4,5:c#ui.text.style.TextOverflow,6,1,2)95@4654L7,144@6466L41:BasicText.kt#423gt5');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.s1j(text) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.s1j(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.s1j(style_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.z1s(onTextLayout_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.c1t(_TextOverflow___get_value__impl__vugm5i(overflow_0._v.l4c_1)) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.a1t(softWrap_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.c1t(maxLines_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.c1t(minLines_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 33554432;
    if (!(($default & 256) === 256) ? true : !(($dirty & 191739611) === 38347922) ? true : !$composer_0.v1r()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 4) === 0)) {
        style_0._v = Companion_getInstance().d43_1;
      }
      if (!(($default & 8) === 0)) {
        onTextLayout_0._v = null;
      }
      if (!(($default & 16) === 0)) {
        overflow_0._v = new TextOverflow(Companion_getInstance_0().i4c_1);
      }
      if (!(($default & 32) === 0)) {
        softWrap_0._v = true;
      }
      if (!(($default & 64) === 0)) {
        maxLines_0._v = IntCompanionObject_instance.MAX_VALUE;
      }
      if (!(($default & 128) === 0)) {
        minLines_0._v = 1;
      }
      if (!(($default & 256) === 0)) {
        color_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1186827822, $dirty, -1, 'androidx.compose.foundation.text.BasicText (BasicText.kt:90)');
      }
      validateMinMaxLines(minLines_0._v, maxLines_0._v);
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var this_0 = get_LocalSelectionRegistrar();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.y1t(this_0);
      sourceInformationMarkerEnd($composer_1);
      var selectionRegistrar = tmp0;
      $composer_0.a1s(959238528);
      sourceInformation($composer_0, '97@4790L7,99@4853L152,102@5014L234');
      var tmp;
      if (!(selectionRegistrar == null)) {
        // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
        var this_1 = get_LocalTextSelectionColors();
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
        var tmp0_0 = $composer_2.y1t(this_1);
        sourceInformationMarkerEnd($composer_2);
        var backgroundSelectionColor = tmp0_0.w6u_1;
        var tmp_0 = selectionIdSaver(selectionRegistrar);
        var selectableId = rememberSaveable([selectionRegistrar], tmp_0, null, BasicText$lambda(selectionRegistrar), $composer_0, 72, 4);
        $composer_0.a1s(959238850);
        sourceInformation($composer_0, 'CC(remember):BasicText.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var this_2 = $composer_0;
        var invalid = !!(!!($composer_0.b1t(selectableId) | $composer_0.s1j(selectionRegistrar)) | $composer_0.b1t(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(backgroundSelectionColor))));
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = this_2.m1t();
        var tmp_1;
        if (invalid ? true : it === Companion_getInstance_1().s1m_1) {
          // Inline function 'androidx.compose.foundation.text.BasicText.<anonymous>' call
          var value = new SelectionController(selectableId, selectionRegistrar, backgroundSelectionColor);
          this_2.s1t(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_0.b1s();
        tmp = tmp0_group;
      } else {
        tmp = null;
      }
      var tmp1_group = tmp;
      $composer_0.b1s();
      var selectionController = tmp1_group;
      var tmp_3;
      if (!(selectionController == null) ? true : !(onTextLayout_0._v == null)) {
        $composer_0.a1s(959239198);
        sourceInformation($composer_0, '124@5828L7');
        var tmp_4 = graphicsLayer(modifier_0._v);
        var tmp_5 = AnnotatedString_init_$Create$(text);
        var tmp_6 = style_0._v;
        var tmp_7 = onTextLayout_0._v;
        var tmp_8 = overflow_0._v;
        var tmp_9 = softWrap_0._v;
        var tmp_10 = maxLines_0._v;
        var tmp_11 = minLines_0._v;
        // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
        var this_3 = get_LocalFontFamilyResolver();
        var $composer_3 = $composer_0;
        sourceInformationMarkerStart($composer_3, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
        var tmp0_1 = $composer_3.y1t(this_3);
        sourceInformationMarkerEnd($composer_3);
        var tmp2_group = textModifier(tmp_4, tmp_5, tmp_6, tmp_7, tmp_8.l4c_1, tmp_9, tmp_10, tmp_11, tmp0_1, null, null, selectionController, color_0._v);
        $composer_0.b1s();
        tmp_3 = tmp2_group;
      } else {
        $composer_0.a1s(959239868);
        sourceInformation($composer_0, '136@6279L7');
        var tmp_12 = graphicsLayer(modifier_0._v);
        var tmp_13 = style_0._v;
        // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
        var this_4 = get_LocalFontFamilyResolver();
        var $composer_4 = $composer_0;
        sourceInformationMarkerStart($composer_4, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
        var tmp0_2 = $composer_4.y1t(this_4);
        sourceInformationMarkerEnd($composer_4);
        var tmp3_group = tmp_12.j4i(new TextStringSimpleElement(text, tmp_13, tmp0_2, overflow_0._v.l4c_1, softWrap_0._v, maxLines_0._v, minLines_0._v, color_0._v));
        $composer_0.b1s();
        tmp_3 = tmp3_group;
      }
      var finalModifier = tmp_3;
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var measurePolicy = EmptyMeasurePolicy_getInstance();
      var modifier_1 = finalModifier;
      var $composer_5 = $composer_0;
      $composer_5.a1s(544976794);
      sourceInformation($composer_5, 'CC(Layout)P(1)124@4810L23,127@4961L385:Layout.kt#80mrfh');
      if (!((0 & 1) === 0))
        modifier_1 = Companion_instance;
      var compositeKeyHash = get_currentCompositeKeyHash($composer_5, 0);
      var materialized = materialize($composer_5, modifier_1);
      var localMap = $composer_5.k1t();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory = Companion_getInstance_2().q5i_1;
      var $composer_6 = $composer_5;
      $composer_6.a1s(1405779621);
      sourceInformation($composer_6, 'CC(ReusableComposeNode):Composables.kt#9igjgp');
      var tmp_14 = $composer_6.w1r();
      if (!isInterface(tmp_14, Applier)) {
        invalidApplier();
      }
      $composer_6.n1s();
      if ($composer_6.i1s()) {
        var tmp_15 = $composer_6;
        tmp_15.o1s(BasicText$lambda_0(factory));
      } else {
        $composer_6.r1s();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_6);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().v5i_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().u5i_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().s5i_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_2().y5i_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      var tmp_16;
      if ($this$with.i1s() ? true : !equals($this$with.m1t(), compositeKeyHash)) {
        $this$with.s1t(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).u1s(compositeKeyHash, block);
        tmp_16 = Unit_instance;
      }
      $composer_6.t1s();
      $composer_6.b1s();
      $composer_5.b1s();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m1m();
    }
    var tmp4_safe_receiver = $composer_0.d1u();
    if (tmp4_safe_receiver == null)
      null;
    else {
      tmp4_safe_receiver.c1z(BasicText$lambda_1(text, modifier_0, style_0, onTextLayout_0, overflow_0, softWrap_0, maxLines_0, minLines_0, color_0, $changed, $default));
    }
  }
  function selectionIdSaver(selectionRegistrar) {
    var tmp = selectionIdSaver$lambda(selectionRegistrar);
    return Saver(tmp, selectionIdSaver$lambda_0);
  }
  function textModifier(_this__u8e3s4, text, style, onTextLayout, overflow, softWrap, maxLines, minLines, fontFamilyResolver, placeholders, onPlaceholderLayout, selectionController, color) {
    if (selectionController == null) {
      var staticTextModifier = new TextAnnotatedStringElement(text, style, fontFamilyResolver, onTextLayout, overflow, softWrap, maxLines, minLines, placeholders, onPlaceholderLayout, null, color);
      return _this__u8e3s4.j4i(Companion_instance).j4i(staticTextModifier);
    } else {
      var selectableTextModifier = new SelectableTextAnnotatedStringElement(text, style, fontFamilyResolver, onTextLayout, overflow, softWrap, maxLines, minLines, placeholders, onPlaceholderLayout, selectionController, color);
      return _this__u8e3s4.j4i(selectionController.c6v_1).j4i(selectableTextModifier);
    }
  }
  function EmptyMeasurePolicy$placementBlock$lambda($this$null) {
    return Unit_instance;
  }
  function EmptyMeasurePolicy() {
    EmptyMeasurePolicy_instance = this;
    var tmp = this;
    tmp.d6v_1 = EmptyMeasurePolicy$placementBlock$lambda;
  }
  protoOf(EmptyMeasurePolicy).t5a = function (_this__u8e3s4, measurables, constraints) {
    return _this__u8e3s4.z4u(_Constraints___get_maxWidth__impl__uuyqc(constraints), _Constraints___get_maxHeight__impl__dt3e8z(constraints), VOID, this.d6v_1);
  };
  var EmptyMeasurePolicy_instance;
  function EmptyMeasurePolicy_getInstance() {
    if (EmptyMeasurePolicy_instance == null)
      new EmptyMeasurePolicy();
    return EmptyMeasurePolicy_instance;
  }
  function BasicText$lambda($selectionRegistrar) {
    return function () {
      return $selectionRegistrar.e6v();
    };
  }
  function BasicText$lambda_0($factory) {
    return function () {
      return $factory();
    };
  }
  function BasicText$lambda_1($text, $modifier, $style, $onTextLayout, $overflow, $softWrap, $maxLines, $minLines, $color, $$changed, $$default) {
    return function ($composer, $force) {
      BasicText($text, $modifier._v, $style._v, $onTextLayout._v, $overflow._v.l4c_1, $softWrap._v, $maxLines._v, $minLines._v, $color._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function selectionIdSaver$lambda($selectionRegistrar) {
    return function ($this$Saver, it) {
      return hasSelection($selectionRegistrar, it) ? it : null;
    };
  }
  function selectionIdSaver$lambda_0(it) {
    return it;
  }
  function validateMinMaxLines(minLines, maxLines) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(minLines > 0 ? maxLines > 0 : false)) {
      // Inline function 'androidx.compose.foundation.text.validateMinMaxLines.<anonymous>' call
      var message = 'both minLines ' + minLines + ' and maxLines ' + maxLines + ' must be greater than zero';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(minLines <= maxLines)) {
      // Inline function 'androidx.compose.foundation.text.validateMinMaxLines.<anonymous>' call
      var message_0 = 'minLines ' + minLines + ' must be less than or equal to maxLines ' + maxLines;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  function get_DefaultMinLines() {
    return DefaultMinLines;
  }
  var DefaultMinLines;
  function getParagraphBoundary(_this__u8e3s4, index) {
    return TextRange(findParagraphStart(_this__u8e3s4, index), findParagraphEnd(_this__u8e3s4, index));
  }
  function findParagraphStart(_this__u8e3s4, startIndex) {
    var inductionVariable = startIndex;
    if (1 <= inductionVariable)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        if (charSequenceGet(_this__u8e3s4, index - 1 | 0) === _Char___init__impl__6a9atx(10)) {
          return index;
        }
      }
       while (1 <= inductionVariable);
    return 0;
  }
  function findParagraphEnd(_this__u8e3s4, startIndex) {
    var inductionVariable = startIndex;
    var last = charSequenceLength(_this__u8e3s4);
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charSequenceGet(_this__u8e3s4, index) === _Char___init__impl__6a9atx(10)) {
          return index;
        }
      }
       while (inductionVariable < last);
    return charSequenceLength(_this__u8e3s4);
  }
  function ceilToIntPx(_this__u8e3s4) {
    // Inline function 'kotlin.math.roundToInt' call
    // Inline function 'kotlin.math.ceil' call
    var this_0 = Math.ceil(_this__u8e3s4);
    return roundToInt(this_0);
  }
  var SNAPSHOTS_INTERVAL_MILLIS;
  function _InlineDensity___init__impl__1m7u8m(packedValue) {
    return packedValue;
  }
  function _get_packedValue__aj623s($this) {
    return $this;
  }
  function _InlineDensity___init__impl__1m7u8m_0(density, fontScale) {
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = toLong(toRawBits(density));
    var v2 = toLong(toRawBits(fontScale));
    var tmp$ret$0 = v1.lb(32).pb(v2.ob(new Long(-1, 0)));
    return _InlineDensity___init__impl__1m7u8m(tmp$ret$0);
  }
  function _InlineDensity___init__impl__1m7u8m_1(density) {
    return _InlineDensity___init__impl__1m7u8m_0(density.g2x(), density.q2x());
  }
  function _InlineDensity___get_density__impl__uz12rr($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'kotlin.fromBits' call
    var bits = _get_packedValue__aj623s($this).mb(32).fa();
    return floatFromBits(bits);
  }
  function _InlineDensity___get_fontScale__impl__ao594c($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'kotlin.fromBits' call
    var bits = _get_packedValue__aj623s($this).ob(new Long(-1, 0)).fa();
    return floatFromBits(bits);
  }
  function InlineDensity__toString_impl_9jhvwu($this) {
    return 'InlineDensity(density=' + _InlineDensity___get_density__impl__uz12rr($this) + ', fontScale=' + _InlineDensity___get_fontScale__impl__ao594c($this) + ')';
  }
  function Companion() {
    Companion_instance_0 = this;
    var tmp = this;
    tmp.f6v_1 = _InlineDensity___init__impl__1m7u8m_0(NaN, NaN);
  }
  var Companion_instance_0;
  function Companion_getInstance_12() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function InlineDensity__hashCode_impl_vanspp($this) {
    return $this.hashCode();
  }
  function InlineDensity__equals_impl_ppdv5r($this, other) {
    if (!(other instanceof InlineDensity))
      return false;
    var tmp0_other_with_cast = other instanceof InlineDensity ? other.g6v_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function InlineDensity(packedValue) {
    Companion_getInstance_12();
    this.g6v_1 = packedValue;
  }
  protoOf(InlineDensity).toString = function () {
    return InlineDensity__toString_impl_9jhvwu(this.g6v_1);
  };
  protoOf(InlineDensity).hashCode = function () {
    return InlineDensity__hashCode_impl_vanspp(this.g6v_1);
  };
  protoOf(InlineDensity).equals = function (other) {
    return InlineDensity__equals_impl_ppdv5r(this.g6v_1, other);
  };
  function fixedCoerceHeightAndWidthForBits(_this__u8e3s4, width, height) {
    // Inline function 'kotlin.comparisons.minOf' call
    var safeWidth = Math.min(width, 262142);
    var tmp;
    if (safeWidth < 8191) {
      // Inline function 'kotlin.comparisons.minOf' call
      tmp = Math.min(height, 262142);
    } else if (safeWidth < 32767) {
      // Inline function 'kotlin.comparisons.minOf' call
      tmp = Math.min(height, 65534);
    } else if (safeWidth < 65535) {
      // Inline function 'kotlin.comparisons.minOf' call
      tmp = Math.min(height, 32766);
    } else {
      // Inline function 'kotlin.comparisons.minOf' call
      tmp = Math.min(height, 8190);
    }
    var safeHeight = tmp;
    return _this__u8e3s4.f2x(safeWidth, safeHeight);
  }
  function finalConstraints(constraints, softWrap, overflow, maxIntrinsicWidth) {
    return Constraints(VOID, finalMaxWidth(constraints, softWrap, overflow, maxIntrinsicWidth), VOID, _Constraints___get_maxHeight__impl__dt3e8z(constraints));
  }
  function finalMaxLines(softWrap, overflow, maxLinesIn) {
    var overwriteMaxLines = !softWrap ? overflow === Companion_getInstance_0().j4c_1 : false;
    return overwriteMaxLines ? 1 : coerceAtLeast(maxLinesIn, 1);
  }
  function finalMaxWidth(constraints, softWrap, overflow, maxIntrinsicWidth) {
    var widthMatters = softWrap ? true : overflow === Companion_getInstance_0().j4c_1;
    var tmp;
    if (widthMatters ? _Constraints___get_hasBoundedWidth__impl__7hd0wr(constraints) : false) {
      tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    } else {
      Companion_getInstance_3();
      tmp = 2147483647;
    }
    var maxWidth = tmp;
    var tmp_0;
    if (_Constraints___get_minWidth__impl__hi9lfi(constraints) === maxWidth) {
      tmp_0 = maxWidth;
    } else {
      tmp_0 = coerceIn(ceilToIntPx(maxIntrinsicWidth), _Constraints___get_minWidth__impl__hi9lfi(constraints), maxWidth);
    }
    return tmp_0;
  }
  function get_EmptyTextReplacement() {
    _init_properties_MinLinesConstrainer_kt__odtdjv();
    return EmptyTextReplacement;
  }
  var EmptyTextReplacement;
  function get_TwoLineTextReplacement() {
    _init_properties_MinLinesConstrainer_kt__odtdjv();
    return TwoLineTextReplacement;
  }
  var TwoLineTextReplacement;
  function Companion_0() {
    this.h6v_1 = null;
  }
  protoOf(Companion_0).i6v = function (minMaxUtil, layoutDirection, paramStyle, density, fontFamilyResolver) {
    if (minMaxUtil == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp;
      if (((layoutDirection.equals(minMaxUtil.j6v_1) ? paramStyle.equals(minMaxUtil.k6v_1) : false) ? density.g2x() === minMaxUtil.l6v_1.g2x() : false) ? fontFamilyResolver === minMaxUtil.m6v_1 : false) {
        return minMaxUtil;
      }
    }
    var tmp1_safe_receiver = this.h6v_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      if (((layoutDirection.equals(tmp1_safe_receiver.j6v_1) ? paramStyle.equals(tmp1_safe_receiver.k6v_1) : false) ? density.g2x() === tmp1_safe_receiver.l6v_1.g2x() : false) ? fontFamilyResolver === tmp1_safe_receiver.m6v_1 : false) {
        return tmp1_safe_receiver;
      }
    }
    // Inline function 'kotlin.also' call
    var this_0 = new MinLinesConstrainer(layoutDirection, resolveDefaults(paramStyle, layoutDirection), density, fontFamilyResolver);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.text.modifiers.Companion.from.<anonymous>' call
    Companion_instance_1.h6v_1 = this_0;
    return this_0;
  };
  var Companion_instance_1;
  function Companion_getInstance_13() {
    return Companion_instance_1;
  }
  function MinLinesConstrainer(layoutDirection, inputTextStyle, density, fontFamilyResolver) {
    this.j6v_1 = layoutDirection;
    this.k6v_1 = inputTextStyle;
    this.l6v_1 = density;
    this.m6v_1 = fontFamilyResolver;
    this.n6v_1 = resolveDefaults(this.k6v_1, this.j6v_1);
    var tmp = this;
    tmp.o6v_1 = NaN;
    var tmp_0 = this;
    tmp_0.p6v_1 = NaN;
  }
  protoOf(MinLinesConstrainer).q6v = function (inConstraints, minLines) {
    var oneLineHeight = this.p6v_1;
    var lineHeight = this.o6v_1;
    if (isNaN_0(oneLineHeight) ? true : isNaN_0(lineHeight)) {
      oneLineHeight = Paragraph(get_EmptyTextReplacement(), this.n6v_1, Constraints(), this.l6v_1, this.m6v_1, VOID, VOID, 1, false).f2w();
      var twoLineHeight = Paragraph(get_TwoLineTextReplacement(), this.n6v_1, Constraints(), this.l6v_1, this.m6v_1, VOID, VOID, 2, false).f2w();
      lineHeight = twoLineHeight - oneLineHeight;
      this.p6v_1 = oneLineHeight;
      this.o6v_1 = lineHeight;
    }
    var tmp;
    if (!(minLines === 1)) {
      // Inline function 'kotlin.math.roundToInt' call
      var this_0 = oneLineHeight + lineHeight * (minLines - 1 | 0);
      var tmp$ret$0 = roundToInt(this_0);
      tmp = coerceAtMost(coerceAtLeast(tmp$ret$0, 0), _Constraints___get_maxHeight__impl__dt3e8z(inConstraints));
    } else {
      tmp = _Constraints___get_minHeight__impl__ev4bgx(inConstraints);
    }
    var minHeight = tmp;
    var tmp0_maxHeight = _Constraints___get_maxHeight__impl__dt3e8z(inConstraints);
    var tmp1_minWidth = _Constraints___get_minWidth__impl__hi9lfi(inConstraints);
    var tmp2_maxWidth = _Constraints___get_maxWidth__impl__uuyqc(inConstraints);
    return Constraints(tmp1_minWidth, tmp2_maxWidth, minHeight, tmp0_maxHeight);
  };
  var properties_initialized_MinLinesConstrainer_kt_uvu6cn;
  function _init_properties_MinLinesConstrainer_kt__odtdjv() {
    if (!properties_initialized_MinLinesConstrainer_kt_uvu6cn) {
      properties_initialized_MinLinesConstrainer_kt_uvu6cn = true;
      EmptyTextReplacement = repeat('H', 10);
      TwoLineTextReplacement = get_EmptyTextReplacement() + '\n' + get_EmptyTextReplacement();
    }
  }
  function textLayoutResult($this, layoutDirection, finalConstraints, multiParagraph) {
    // Inline function 'kotlin.math.min' call
    var a = multiParagraph.h3w_1.q3a();
    var b = multiParagraph.k3w_1;
    var layoutWidth = Math.min(a, b);
    var tmp = $this.r6v_1;
    var tmp_0 = $this.s6v_1;
    // Inline function 'kotlin.collections.orEmpty' call
    var tmp0_elvis_lhs = $this.y6v_1;
    var tmp$ret$1 = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
    return new TextLayoutResult(TextLayoutInput_init_$Create$(tmp, tmp_0, tmp$ret$1, $this.w6v_1, $this.v6v_1, $this.u6v_1, ensureNotNull($this.b6w_1), layoutDirection, $this.t6v_1, finalConstraints), multiParagraph, constrain(finalConstraints, IntSize(ceilToIntPx(layoutWidth), ceilToIntPx(multiParagraph.l3w_1))));
  }
  function setLayoutDirection($this, layoutDirection) {
    var localIntrinsics = $this.c6w_1;
    var tmp;
    if ((localIntrinsics == null ? true : !layoutDirection.equals($this.d6w_1)) ? true : localIntrinsics.m3y()) {
      $this.d6w_1 = layoutDirection;
      var tmp0_annotatedString = $this.r6v_1;
      var tmp1_style = resolveDefaults($this.s6v_1, layoutDirection);
      var tmp2_density = ensureNotNull($this.b6w_1);
      var tmp3_fontFamilyResolver = $this.t6v_1;
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_elvis_lhs = $this.y6v_1;
      var tmp4_placeholders = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
      tmp = new MultiParagraphIntrinsics(tmp0_annotatedString, tmp1_style, tmp4_placeholders, tmp2_density, tmp3_fontFamilyResolver);
    } else {
      tmp = localIntrinsics;
    }
    var intrinsics = tmp;
    $this.c6w_1 = intrinsics;
    return intrinsics;
  }
  function layoutText($this, constraints, layoutDirection) {
    var localParagraphIntrinsics = setLayoutDirection($this, layoutDirection);
    return new MultiParagraph(localParagraphIntrinsics, finalConstraints(constraints, $this.v6v_1, $this.u6v_1, localParagraphIntrinsics.q3a()), finalMaxLines($this.v6v_1, $this.u6v_1, $this.w6v_1), $this.u6v_1 === Companion_getInstance_0().j4c_1);
  }
  function newLayoutWillBeDifferent(_this__u8e3s4, $this, constraints, layoutDirection) {
    if (_this__u8e3s4 == null)
      return true;
    if (_this__u8e3s4.d42_1.h3w_1.m3y())
      return true;
    if (!layoutDirection.equals(_this__u8e3s4.c42_1.v42_1))
      return true;
    if (equals(constraints, _this__u8e3s4.c42_1.x42_1))
      return false;
    if (!(_Constraints___get_maxWidth__impl__uuyqc(constraints) === _Constraints___get_maxWidth__impl__uuyqc(_this__u8e3s4.c42_1.x42_1)))
      return true;
    if (_Constraints___get_maxHeight__impl__dt3e8z(constraints) < _this__u8e3s4.d42_1.l3w_1 ? true : _this__u8e3s4.d42_1.j3w_1) {
      return true;
    }
    return false;
  }
  function markDirty($this) {
    $this.c6w_1 = null;
    $this.e6w_1 = null;
  }
  function MultiParagraphLayoutCache(text, style, fontFamilyResolver, overflow, softWrap, maxLines, minLines, placeholders) {
    overflow = overflow === VOID ? Companion_getInstance_0().i4c_1 : overflow;
    softWrap = softWrap === VOID ? true : softWrap;
    maxLines = maxLines === VOID ? IntCompanionObject_instance.MAX_VALUE : maxLines;
    minLines = minLines === VOID ? get_DefaultMinLines() : minLines;
    placeholders = placeholders === VOID ? null : placeholders;
    this.r6v_1 = text;
    this.s6v_1 = style;
    this.t6v_1 = fontFamilyResolver;
    this.u6v_1 = overflow;
    this.v6v_1 = softWrap;
    this.w6v_1 = maxLines;
    this.x6v_1 = minLines;
    this.y6v_1 = placeholders;
    this.z6v_1 = null;
    this.a6w_1 = Companion_getInstance_12().f6v_1;
    this.b6w_1 = null;
    this.c6w_1 = null;
    this.d6w_1 = null;
    this.e6w_1 = null;
    this.f6w_1 = -1;
    this.g6w_1 = -1;
  }
  protoOf(MultiParagraphLayoutCache).h6w = function (value) {
    var localField = this.b6w_1;
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.text.modifiers.MultiParagraphLayoutCache.<set-density>.<anonymous>' call
      tmp = _InlineDensity___init__impl__1m7u8m_1(value);
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    var tmp_1 = tmp1_elvis_lhs;
    if ((tmp_1 == null ? null : new InlineDensity(tmp_1)) == null) {
      tmp_0 = Companion_getInstance_12().f6v_1;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var newDensity = tmp_0;
    if (localField == null) {
      this.b6w_1 = value;
      this.a6w_1 = newDensity;
      return Unit_instance;
    }
    if (value == null ? true : !equals(this.a6w_1, newDensity)) {
      this.b6w_1 = value;
      this.a6w_1 = newDensity;
      markDirty(this);
    }
  };
  protoOf(MultiParagraphLayoutCache).i6w = function () {
    var tmp0_elvis_lhs = this.e6w_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('You must call layoutWithConstraints first');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MultiParagraphLayoutCache).j6w = function () {
    return this.e6w_1;
  };
  protoOf(MultiParagraphLayoutCache).k6w = function (constraints, layoutDirection) {
    var tmp;
    if (this.x6v_1 > 1) {
      // Inline function 'kotlin.also' call
      var this_0 = Companion_instance_1.i6v(this.z6v_1, layoutDirection, this.s6v_1, ensureNotNull(this.b6w_1), this.t6v_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.text.modifiers.MultiParagraphLayoutCache.layoutWithConstraints.<anonymous>' call
      this.z6v_1 = this_0;
      var localMin = this_0;
      tmp = localMin.q6v(constraints, this.x6v_1);
    } else {
      tmp = constraints;
    }
    var finalConstraints = tmp;
    if (!newLayoutWillBeDifferent(this.e6w_1, this, finalConstraints, layoutDirection)) {
      if (equals(finalConstraints, ensureNotNull(this.e6w_1).c42_1.x42_1))
        return false;
      this.e6w_1 = textLayoutResult(this, layoutDirection, finalConstraints, ensureNotNull(this.e6w_1).d42_1);
      return true;
    }
    var multiParagraph = layoutText(this, finalConstraints, layoutDirection);
    this.e6w_1 = textLayoutResult(this, layoutDirection, finalConstraints, multiParagraph);
    return true;
  };
  protoOf(MultiParagraphLayoutCache).l6w = function (text, style, fontFamilyResolver, overflow, softWrap, maxLines, minLines, placeholders) {
    this.r6v_1 = text;
    this.s6v_1 = style;
    this.t6v_1 = fontFamilyResolver;
    this.u6v_1 = overflow;
    this.v6v_1 = softWrap;
    this.w6v_1 = maxLines;
    this.x6v_1 = minLines;
    this.y6v_1 = placeholders;
    markDirty(this);
  };
  function setLayoutDirection_0($this, layoutDirection) {
    var localIntrinsics = $this.z6w_1;
    var tmp;
    if ((localIntrinsics == null ? true : !layoutDirection.equals($this.a6x_1)) ? true : localIntrinsics.m3y()) {
      $this.a6x_1 = layoutDirection;
      tmp = ParagraphIntrinsics($this.m6w_1, resolveDefaults($this.n6w_1, layoutDirection), VOID, VOID, ensureNotNull($this.u6w_1), $this.o6w_1);
    } else {
      tmp = localIntrinsics;
    }
    var intrinsics = tmp;
    $this.z6w_1 = intrinsics;
    return intrinsics;
  }
  function layoutText_0($this, constraints, layoutDirection) {
    var localParagraphIntrinsics = setLayoutDirection_0($this, layoutDirection);
    return Paragraph_0(localParagraphIntrinsics, finalConstraints(constraints, $this.q6w_1, $this.p6w_1, localParagraphIntrinsics.q3a()), finalMaxLines($this.q6w_1, $this.p6w_1, $this.r6w_1), $this.p6w_1 === Companion_getInstance_0().j4c_1);
  }
  function newLayoutWillBeDifferent_0($this, constraints, layoutDirection) {
    var tmp0_elvis_lhs = $this.v6w_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return true;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var localParagraph = tmp;
    var tmp1_elvis_lhs = $this.z6w_1;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return true;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var localParagraphIntrinsics = tmp_0;
    if (localParagraphIntrinsics.m3y())
      return true;
    if (!layoutDirection.equals($this.a6x_1))
      return true;
    if (equals(constraints, $this.b6x_1))
      return false;
    if (!(_Constraints___get_maxWidth__impl__uuyqc(constraints) === _Constraints___get_maxWidth__impl__uuyqc($this.b6x_1)))
      return true;
    if (_Constraints___get_maxHeight__impl__dt3e8z(constraints) < localParagraph.f2w() ? true : localParagraph.d3x()) {
      return true;
    }
    return false;
  }
  function markDirty_0($this) {
    $this.v6w_1 = null;
    $this.z6w_1 = null;
    $this.a6x_1 = null;
    $this.c6x_1 = -1;
    $this.d6x_1 = -1;
    $this.b6x_1 = Companion_getInstance_3().f2x(0, 0);
    $this.x6w_1 = IntSize(0, 0);
    $this.w6w_1 = false;
  }
  function ParagraphLayoutCache(text, style, fontFamilyResolver, overflow, softWrap, maxLines, minLines) {
    overflow = overflow === VOID ? Companion_getInstance_0().i4c_1 : overflow;
    softWrap = softWrap === VOID ? true : softWrap;
    maxLines = maxLines === VOID ? IntCompanionObject_instance.MAX_VALUE : maxLines;
    minLines = minLines === VOID ? get_DefaultMinLines() : minLines;
    this.m6w_1 = text;
    this.n6w_1 = style;
    this.o6w_1 = fontFamilyResolver;
    this.p6w_1 = overflow;
    this.q6w_1 = softWrap;
    this.r6w_1 = maxLines;
    this.s6w_1 = minLines;
    this.t6w_1 = Companion_getInstance_12().f6v_1;
    this.u6w_1 = null;
    this.v6w_1 = null;
    this.w6w_1 = false;
    this.x6w_1 = IntSize(0, 0);
    this.y6w_1 = null;
    this.z6w_1 = null;
    this.a6x_1 = null;
    this.b6x_1 = Companion_getInstance_3().f2x(0, 0);
    this.c6x_1 = -1;
    this.d6x_1 = -1;
  }
  protoOf(ParagraphLayoutCache).h6w = function (value) {
    var localField = this.u6w_1;
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.text.modifiers.ParagraphLayoutCache.<set-density>.<anonymous>' call
      tmp = _InlineDensity___init__impl__1m7u8m_1(value);
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    var tmp_1 = tmp1_elvis_lhs;
    if ((tmp_1 == null ? null : new InlineDensity(tmp_1)) == null) {
      tmp_0 = Companion_getInstance_12().f6v_1;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var newDensity = tmp_0;
    if (localField == null) {
      this.u6w_1 = value;
      this.t6w_1 = newDensity;
      return Unit_instance;
    }
    if (value == null ? true : !equals(this.t6w_1, newDensity)) {
      this.u6w_1 = value;
      this.t6w_1 = newDensity;
      markDirty_0(this);
    }
  };
  protoOf(ParagraphLayoutCache).e6x = function () {
    var tmp0_safe_receiver = this.z6w_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.m3y();
  };
  protoOf(ParagraphLayoutCache).k6w = function (constraints, layoutDirection) {
    var tmp;
    if (this.s6w_1 > 1) {
      // Inline function 'kotlin.also' call
      var this_0 = Companion_instance_1.i6v(this.y6w_1, layoutDirection, this.n6w_1, ensureNotNull(this.u6w_1), this.o6w_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.text.modifiers.ParagraphLayoutCache.layoutWithConstraints.<anonymous>' call
      this.y6w_1 = this_0;
      var localMin = this_0;
      tmp = localMin.q6v(constraints, this.s6w_1);
    } else {
      tmp = constraints;
    }
    var finalConstraints = tmp;
    if (!newLayoutWillBeDifferent_0(this, finalConstraints, layoutDirection)) {
      if (!equals(finalConstraints, this.b6x_1)) {
        var localParagraph = ensureNotNull(this.v6w_1);
        // Inline function 'kotlin.math.min' call
        var a = localParagraph.q3a();
        var b = localParagraph.e2w();
        var layoutWidth = Math.min(a, b);
        var localSize = constrain(finalConstraints, IntSize(ceilToIntPx(layoutWidth), ceilToIntPx(localParagraph.f2w())));
        this.x6w_1 = localSize;
        this.w6w_1 = !(this.p6w_1 === Companion_getInstance_0().k4c_1) ? _IntSize___get_width__impl__d9yl4o(localSize) < localParagraph.e2w() ? true : _IntSize___get_height__impl__prv63b(localSize) < localParagraph.f2w() : false;
        this.b6x_1 = finalConstraints;
      }
      return false;
    }
    var tmp_0 = this;
    // Inline function 'kotlin.also' call
    var this_1 = layoutText_0(this, finalConstraints, layoutDirection);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.text.modifiers.ParagraphLayoutCache.layoutWithConstraints.<anonymous>' call
    this.b6x_1 = finalConstraints;
    var localSize_0 = constrain(finalConstraints, IntSize(ceilToIntPx(this_1.e2w()), ceilToIntPx(this_1.f2w())));
    this.x6w_1 = localSize_0;
    this.w6w_1 = !(this.p6w_1 === Companion_getInstance_0().k4c_1) ? _IntSize___get_width__impl__d9yl4o(localSize_0) < this_1.e2w() ? true : _IntSize___get_height__impl__prv63b(localSize_0) < this_1.f2w() : false;
    tmp_0.v6w_1 = this_1;
    return true;
  };
  protoOf(ParagraphLayoutCache).f6x = function (text, style, fontFamilyResolver, overflow, softWrap, maxLines, minLines) {
    this.m6w_1 = text;
    this.n6w_1 = style;
    this.o6w_1 = fontFamilyResolver;
    this.p6w_1 = overflow;
    this.q6w_1 = softWrap;
    this.r6w_1 = maxLines;
    this.s6w_1 = minLines;
    markDirty_0(this);
  };
  protoOf(ParagraphLayoutCache).g6x = function (style) {
    var tmp0_elvis_lhs = this.a6x_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var localLayoutDirection = tmp;
    var tmp1_elvis_lhs = this.u6w_1;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return null;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var localDensity = tmp_0;
    var annotatedString = AnnotatedString_init_$Create$(this.m6w_1);
    if (this.v6w_1 == null)
      return null;
    if (this.z6w_1 == null)
      return null;
    var finalConstraints = Constraints__copy$default_impl_f452rp(this.b6x_1, 0, VOID, 0);
    return new TextLayoutResult(TextLayoutInput_init_$Create$(annotatedString, style, emptyList(), this.r6w_1, this.q6w_1, this.p6w_1, localDensity, localLayoutDirection, this.o6w_1, finalConstraints), new MultiParagraph(new MultiParagraphIntrinsics(annotatedString, style, emptyList(), localDensity, this.o6w_1), finalConstraints, this.r6w_1, this.p6w_1 === Companion_getInstance_0().j4c_1), this.x6w_1);
  };
  function SelectableTextAnnotatedStringElement(text, style, fontFamilyResolver, onTextLayout, overflow, softWrap, maxLines, minLines, placeholders, onPlaceholderLayout, selectionController, color) {
    onTextLayout = onTextLayout === VOID ? null : onTextLayout;
    overflow = overflow === VOID ? Companion_getInstance_0().i4c_1 : overflow;
    softWrap = softWrap === VOID ? true : softWrap;
    maxLines = maxLines === VOID ? IntCompanionObject_instance.MAX_VALUE : maxLines;
    minLines = minLines === VOID ? get_DefaultMinLines() : minLines;
    placeholders = placeholders === VOID ? null : placeholders;
    onPlaceholderLayout = onPlaceholderLayout === VOID ? null : onPlaceholderLayout;
    selectionController = selectionController === VOID ? null : selectionController;
    color = color === VOID ? null : color;
    ModifierNodeElement.call(this);
    this.i6x_1 = text;
    this.j6x_1 = style;
    this.k6x_1 = fontFamilyResolver;
    this.l6x_1 = onTextLayout;
    this.m6x_1 = overflow;
    this.n6x_1 = softWrap;
    this.o6x_1 = maxLines;
    this.p6x_1 = minLines;
    this.q6x_1 = placeholders;
    this.r6x_1 = onPlaceholderLayout;
    this.s6x_1 = selectionController;
    this.t6x_1 = color;
  }
  protoOf(SelectableTextAnnotatedStringElement).i29 = function () {
    return new SelectableTextAnnotatedStringNode(this.i6x_1, this.j6x_1, this.k6x_1, this.l6x_1, this.m6x_1, this.n6x_1, this.o6x_1, this.p6x_1, this.q6x_1, this.r6x_1, this.s6x_1, this.t6x_1);
  };
  protoOf(SelectableTextAnnotatedStringElement).u6x = function (node) {
    node.m6y(this.i6x_1, this.j6x_1, this.q6x_1, this.p6x_1, this.o6x_1, this.n6x_1, this.k6x_1, this.m6x_1, this.l6x_1, this.r6x_1, this.s6x_1, this.t6x_1);
  };
  protoOf(SelectableTextAnnotatedStringElement).r4o = function (node) {
    return this.u6x(node instanceof SelectableTextAnnotatedStringNode ? node : THROW_CCE());
  };
  protoOf(SelectableTextAnnotatedStringElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SelectableTextAnnotatedStringElement))
      return false;
    if (!equals(this.t6x_1, other.t6x_1))
      return false;
    if (!this.i6x_1.equals(other.i6x_1))
      return false;
    if (!this.j6x_1.equals(other.j6x_1))
      return false;
    if (!equals(this.q6x_1, other.q6x_1))
      return false;
    if (!equals(this.k6x_1, other.k6x_1))
      return false;
    if (!equals(this.l6x_1, other.l6x_1))
      return false;
    if (!(this.m6x_1 === other.m6x_1))
      return false;
    if (!(this.n6x_1 === other.n6x_1))
      return false;
    if (!(this.o6x_1 === other.o6x_1))
      return false;
    if (!(this.p6x_1 === other.p6x_1))
      return false;
    if (!equals(this.r6x_1, other.r6x_1))
      return false;
    if (!equals(this.s6x_1, other.s6x_1))
      return false;
    return true;
  };
  protoOf(SelectableTextAnnotatedStringElement).hashCode = function () {
    var result = this.i6x_1.hashCode();
    result = imul(31, result) + this.j6x_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.k6x_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.l6x_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + TextOverflow__hashCode_impl_kqdwgt(this.m6x_1) | 0;
    result = imul(31, result) + getBooleanHashCode(this.n6x_1) | 0;
    result = imul(31, result) + this.o6x_1 | 0;
    result = imul(31, result) + this.p6x_1 | 0;
    var tmp_0 = imul(31, result);
    var tmp2_safe_receiver = this.q6x_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : hashCode(tmp2_safe_receiver);
    result = tmp_0 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_1 = imul(31, result);
    var tmp4_safe_receiver = this.r6x_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : hashCode(tmp4_safe_receiver);
    result = tmp_1 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    var tmp_2 = imul(31, result);
    var tmp6_safe_receiver = this.s6x_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : hashCode(tmp6_safe_receiver);
    result = tmp_2 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    var tmp_3 = imul(31, result);
    var tmp8_safe_receiver = this.t6x_1;
    var tmp9_elvis_lhs = tmp8_safe_receiver == null ? null : hashCode(tmp8_safe_receiver);
    result = tmp_3 + (tmp9_elvis_lhs == null ? 0 : tmp9_elvis_lhs) | 0;
    return result;
  };
  protoOf(SelectableTextAnnotatedStringElement).toString = function () {
    return 'SelectableTextAnnotatedStringElement(text=' + this.i6x_1 + ', style=' + this.j6x_1 + ', fontFamilyResolver=' + this.k6x_1 + ', onTextLayout=' + this.l6x_1 + ', overflow=' + new TextOverflow(this.m6x_1) + ', softWrap=' + this.n6x_1 + ', maxLines=' + this.o6x_1 + ', minLines=' + this.p6x_1 + ', placeholders=' + this.q6x_1 + ', onPlaceholderLayout=' + this.r6x_1 + ', selectionController=' + this.s6x_1 + ', color=' + this.t6x_1 + ')';
  };
  function SelectableTextAnnotatedStringNode(text, style, fontFamilyResolver, onTextLayout, overflow, softWrap, maxLines, minLines, placeholders, onPlaceholderLayout, selectionController, overrideColor) {
    onTextLayout = onTextLayout === VOID ? null : onTextLayout;
    overflow = overflow === VOID ? Companion_getInstance_0().i4c_1 : overflow;
    softWrap = softWrap === VOID ? true : softWrap;
    maxLines = maxLines === VOID ? IntCompanionObject_instance.MAX_VALUE : maxLines;
    minLines = minLines === VOID ? get_DefaultMinLines() : minLines;
    placeholders = placeholders === VOID ? null : placeholders;
    onPlaceholderLayout = onPlaceholderLayout === VOID ? null : onPlaceholderLayout;
    selectionController = selectionController === VOID ? null : selectionController;
    overrideColor = overrideColor === VOID ? null : overrideColor;
    DelegatingNode.call(this);
    this.k6y_1 = selectionController;
    this.l6y_1 = this.g5j(new TextAnnotatedStringNode(text, style, fontFamilyResolver, onTextLayout, overflow, softWrap, maxLines, minLines, placeholders, onPlaceholderLayout, this.k6y_1, overrideColor));
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (this.k6y_1 == null) {
        // Inline function 'androidx.compose.foundation.text.modifiers.SelectableTextAnnotatedStringNode.<anonymous>' call
        var message = 'Do not use SelectionCapableStaticTextModifier unless selectionController != null';
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        break $l$block;
      }
    }
  }
  protoOf(SelectableTextAnnotatedStringNode).i5a = function (coordinates) {
    var tmp0_safe_receiver = this.k6y_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.n6y(coordinates);
    }
  };
  protoOf(SelectableTextAnnotatedStringNode).t4j = function (_this__u8e3s4) {
    return this.l6y_1.r6z(_this__u8e3s4);
  };
  protoOf(SelectableTextAnnotatedStringNode).s4u = function (_this__u8e3s4, measurable, constraints) {
    return this.l6y_1.s6z(_this__u8e3s4, measurable, constraints);
  };
  protoOf(SelectableTextAnnotatedStringNode).m6y = function (text, style, placeholders, minLines, maxLines, softWrap, fontFamilyResolver, overflow, onTextLayout, onPlaceholderLayout, selectionController, color) {
    this.l6y_1.x6z(this.l6y_1.t6z(color, style), this.l6y_1.u6z(text), this.l6y_1.v6z(style, placeholders, minLines, maxLines, softWrap, fontFamilyResolver, overflow), this.l6y_1.w6z(onTextLayout, onPlaceholderLayout, selectionController));
    this.k6y_1 = selectionController;
    invalidateMeasurement(this);
  };
  function SelectionController$modifier$lambda(this$0) {
    return function () {
      return this$0.a6v_1.y6z_1;
    };
  }
  function SelectionController$onRemembered$lambda(this$0) {
    return function () {
      return this$0.a6v_1.y6z_1;
    };
  }
  function SelectionController$onRemembered$lambda_0(this$0) {
    return function () {
      return this$0.a6v_1.z6z_1;
    };
  }
  function SelectionController(selectableId, selectionRegistrar, backgroundSelectionColor, params) {
    params = params === VOID ? Companion_getInstance_14().a70_1 : params;
    this.x6u_1 = selectableId;
    this.y6u_1 = selectionRegistrar;
    this.z6u_1 = backgroundSelectionColor;
    this.a6v_1 = params;
    this.b6v_1 = null;
    var tmp = this;
    tmp.c6v_1 = textPointerHoverIcon(makeSelectionModifier(this.y6u_1, this.x6u_1, SelectionController$modifier$lambda(this)), this.y6u_1);
  }
  protoOf(SelectionController).k1x = function () {
    var tmp = this;
    var tmp_0 = SelectionController$onRemembered$lambda(this);
    tmp.b6v_1 = this.y6u_1.b70(new MultiWidgetSelectionDelegate(this.x6u_1, tmp_0, SelectionController$onRemembered$lambda_0(this)));
  };
  protoOf(SelectionController).j1x = function () {
    var localSelectable = this.b6v_1;
    if (!(localSelectable == null)) {
      this.y6u_1.c70(localSelectable);
      this.b6v_1 = null;
    }
  };
  protoOf(SelectionController).l1x = function () {
    var localSelectable = this.b6v_1;
    if (!(localSelectable == null)) {
      this.y6u_1.c70(localSelectable);
      this.b6v_1 = null;
    }
  };
  protoOf(SelectionController).d70 = function (textLayoutResult) {
    this.a6v_1 = this.a6v_1.e70(VOID, textLayoutResult);
  };
  protoOf(SelectionController).n6y = function (coordinates) {
    this.a6v_1 = this.a6v_1.e70(coordinates);
    this.y6u_1.f70(this.x6u_1);
  };
  protoOf(SelectionController).g70 = function (drawScope) {
    var tmp0_elvis_lhs = this.y6u_1.h70().x2(this.x6u_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var selection = tmp;
    var tmp_0;
    if (!selection.n70_1) {
      tmp_0 = selection.l70_1.j70_1;
    } else {
      tmp_0 = selection.m70_1.j70_1;
    }
    var start = tmp_0;
    var tmp_1;
    if (!selection.n70_1) {
      tmp_1 = selection.m70_1.j70_1;
    } else {
      tmp_1 = selection.l70_1.j70_1;
    }
    var end = tmp_1;
    if (start === end)
      return Unit_instance;
    var tmp1_safe_receiver = this.b6v_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.o70();
    var lastOffset = tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs;
    var clippedStart = coerceAtMost(start, lastOffset);
    var clippedEnd = coerceAtMost(end, lastOffset);
    var tmp3_elvis_lhs = this.a6v_1.x3w(clippedStart, clippedEnd);
    var tmp_2;
    if (tmp3_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_2 = tmp3_elvis_lhs;
    }
    var selectionPath = tmp_2;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp_3;
    if (this.a6v_1.p70()) {
      // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect' call
      var right = _Size___get_width__impl__58y75t(drawScope.x3t());
      var bottom = _Size___get_height__impl__a04p02(drawScope.x3t());
      var clipOp = Companion_getInstance_4().g3j_1;
      // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = drawScope.z3t();
      var previousSize = $this$with.x3t();
      $this$with.t37().x3i();
      // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect.<anonymous>' call
      $this$with.y3t().d3j(0.0, 0.0, right, bottom, clipOp);
      // Inline function 'androidx.compose.foundation.text.modifiers.SelectionController.draw.<anonymous>.<anonymous>' call
      drawScope.b3u(selectionPath, this.z6u_1);
      $this$with.t37().y3i();
      $this$with.w3t(previousSize);
      tmp_3 = Unit_instance;
    } else {
      drawScope.b3u(selectionPath, this.z6u_1);
      tmp_3 = Unit_instance;
    }
  };
  function Companion_1() {
    Companion_instance_2 = this;
    this.a70_1 = new StaticTextSelectionParams(null, null);
  }
  var Companion_instance_2;
  function Companion_getInstance_14() {
    if (Companion_instance_2 == null)
      new Companion_1();
    return Companion_instance_2;
  }
  function StaticTextSelectionParams(layoutCoordinates, textLayoutResult) {
    Companion_getInstance_14();
    this.y6z_1 = layoutCoordinates;
    this.z6z_1 = textLayoutResult;
  }
  protoOf(StaticTextSelectionParams).x3w = function (start, end) {
    var tmp0_safe_receiver = this.z6z_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x3w(start, end);
  };
  protoOf(StaticTextSelectionParams).p70 = function () {
    var tmp0_safe_receiver = this.z6z_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.text.modifiers.StaticTextSelectionParams.<get-shouldClip>.<anonymous>' call
      tmp = !(tmp0_safe_receiver.c42_1.t42_1 === Companion_getInstance_0().k4c_1) ? tmp0_safe_receiver.k42() : false;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(StaticTextSelectionParams).q70 = function (layoutCoordinates, textLayoutResult) {
    return new StaticTextSelectionParams(layoutCoordinates, textLayoutResult);
  };
  protoOf(StaticTextSelectionParams).e70 = function (layoutCoordinates, textLayoutResult, $super) {
    layoutCoordinates = layoutCoordinates === VOID ? this.y6z_1 : layoutCoordinates;
    textLayoutResult = textLayoutResult === VOID ? this.z6z_1 : textLayoutResult;
    return $super === VOID ? this.q70(layoutCoordinates, textLayoutResult) : $super.q70.call(this, layoutCoordinates, textLayoutResult);
  };
  function makeDefaultSelectionModifier(_this__u8e3s4, selectableId, layoutCoordinates) {
    var longPressDragObserver = new makeDefaultSelectionModifier$longPressDragObserver$1(layoutCoordinates, _this__u8e3s4, selectableId);
    var mouseSelectionObserver = new makeDefaultSelectionModifier$mouseSelectionObserver$1(layoutCoordinates, _this__u8e3s4, selectableId);
    return selectionGestureInput(Companion_instance, mouseSelectionObserver, longPressDragObserver);
  }
  function makeDefaultSelectionModifier$longPressDragObserver$1($layoutCoordinates, $this_makeDefaultSelectionModifier, $selectableId) {
    this.t70_1 = $layoutCoordinates;
    this.u70_1 = $this_makeDefaultSelectionModifier;
    this.v70_1 = $selectableId;
    this.r70_1 = Companion_getInstance_5().v2v_1;
    this.s70_1 = Companion_getInstance_5().v2v_1;
  }
  protoOf(makeDefaultSelectionModifier$longPressDragObserver$1).w70 = function (startPoint) {
    var tmp0_safe_receiver = this.t70_1();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_safe_receiver.r4r())
        return Unit_instance;
      this.u70_1.c71(tmp0_safe_receiver, startPoint, Companion_getInstance_15().z70_1, true);
      this.r70_1 = startPoint;
    }
    if (!hasSelection(this.u70_1, this.v70_1))
      return Unit_instance;
    this.s70_1 = Companion_getInstance_5().v2v_1;
  };
  protoOf(makeDefaultSelectionModifier$longPressDragObserver$1).d71 = function (delta) {
    var tmp0_safe_receiver = this.t70_1();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_safe_receiver.r4r())
        return Unit_instance;
      if (!hasSelection(this.u70_1, this.v70_1))
        return Unit_instance;
      this.s70_1 = Offset__plus_impl_c78cg0(this.s70_1, delta);
      var newPosition = Offset__plus_impl_c78cg0(this.r70_1, this.s70_1);
      var tmp1_previousPosition = this.r70_1;
      var tmp2_adjustment = Companion_getInstance_15().b71_1;
      var consumed = this.u70_1.e71(tmp0_safe_receiver, newPosition, tmp1_previousPosition, false, tmp2_adjustment, true);
      var tmp;
      if (consumed) {
        this.r70_1 = newPosition;
        this.s70_1 = Companion_getInstance_5().v2v_1;
        tmp = Unit_instance;
      }
    }
  };
  protoOf(makeDefaultSelectionModifier$longPressDragObserver$1).f71 = function () {
    if (hasSelection(this.u70_1, this.v70_1)) {
      this.u70_1.g71();
    }
  };
  protoOf(makeDefaultSelectionModifier$longPressDragObserver$1).q5h = function () {
    if (hasSelection(this.u70_1, this.v70_1)) {
      this.u70_1.g71();
    }
  };
  function makeDefaultSelectionModifier$mouseSelectionObserver$1($layoutCoordinates, $this_makeDefaultSelectionModifier, $selectableId) {
    this.i71_1 = $layoutCoordinates;
    this.j71_1 = $this_makeDefaultSelectionModifier;
    this.k71_1 = $selectableId;
    this.h71_1 = Companion_getInstance_5().v2v_1;
  }
  protoOf(makeDefaultSelectionModifier$mouseSelectionObserver$1).l71 = function (downPosition) {
    var tmp0_safe_receiver = this.i71_1();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_safe_receiver.r4r())
        return false;
      var consumed = this.j71_1.e71(tmp0_safe_receiver, downPosition, this.h71_1, false, Companion_getInstance_15().x70_1, false);
      if (consumed) {
        this.h71_1 = downPosition;
      }
      return hasSelection(this.j71_1, this.k71_1);
    }
    return false;
  };
  protoOf(makeDefaultSelectionModifier$mouseSelectionObserver$1).m71 = function (dragPosition) {
    var tmp0_safe_receiver = this.i71_1();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_safe_receiver.r4r())
        return false;
      if (!hasSelection(this.j71_1, this.k71_1))
        return false;
      var consumed = this.j71_1.e71(tmp0_safe_receiver, dragPosition, this.h71_1, false, Companion_getInstance_15().x70_1, false);
      var tmp;
      if (consumed) {
        this.h71_1 = dragPosition;
        tmp = Unit_instance;
      }
    }
    return true;
  };
  protoOf(makeDefaultSelectionModifier$mouseSelectionObserver$1).n71 = function (downPosition, adjustment) {
    var tmp0_safe_receiver = this.i71_1();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_safe_receiver.r4r())
        return false;
      this.j71_1.c71(tmp0_safe_receiver, downPosition, adjustment, false);
      this.h71_1 = downPosition;
      return hasSelection(this.j71_1, this.k71_1);
    }
    return false;
  };
  protoOf(makeDefaultSelectionModifier$mouseSelectionObserver$1).o71 = function (dragPosition, adjustment) {
    var tmp0_safe_receiver = this.i71_1();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_safe_receiver.r4r())
        return false;
      if (!hasSelection(this.j71_1, this.k71_1))
        return false;
      var tmp0_previousPosition = this.h71_1;
      var consumed = this.j71_1.e71(tmp0_safe_receiver, dragPosition, tmp0_previousPosition, false, adjustment, false);
      var tmp;
      if (consumed) {
        this.h71_1 = dragPosition;
        tmp = Unit_instance;
      }
    }
    return true;
  };
  protoOf(makeDefaultSelectionModifier$mouseSelectionObserver$1).p71 = function () {
    this.j71_1.g71();
  };
  function TextAnnotatedStringElement(text, style, fontFamilyResolver, onTextLayout, overflow, softWrap, maxLines, minLines, placeholders, onPlaceholderLayout, selectionController, color) {
    onTextLayout = onTextLayout === VOID ? null : onTextLayout;
    overflow = overflow === VOID ? Companion_getInstance_0().i4c_1 : overflow;
    softWrap = softWrap === VOID ? true : softWrap;
    maxLines = maxLines === VOID ? IntCompanionObject_instance.MAX_VALUE : maxLines;
    minLines = minLines === VOID ? get_DefaultMinLines() : minLines;
    placeholders = placeholders === VOID ? null : placeholders;
    onPlaceholderLayout = onPlaceholderLayout === VOID ? null : onPlaceholderLayout;
    selectionController = selectionController === VOID ? null : selectionController;
    color = color === VOID ? null : color;
    ModifierNodeElement.call(this);
    this.r71_1 = text;
    this.s71_1 = style;
    this.t71_1 = fontFamilyResolver;
    this.u71_1 = onTextLayout;
    this.v71_1 = overflow;
    this.w71_1 = softWrap;
    this.x71_1 = maxLines;
    this.y71_1 = minLines;
    this.z71_1 = placeholders;
    this.a72_1 = onPlaceholderLayout;
    this.b72_1 = selectionController;
    this.c72_1 = color;
  }
  protoOf(TextAnnotatedStringElement).i29 = function () {
    return new TextAnnotatedStringNode(this.r71_1, this.s71_1, this.t71_1, this.u71_1, this.v71_1, this.w71_1, this.x71_1, this.y71_1, this.z71_1, this.a72_1, this.b72_1, this.c72_1);
  };
  protoOf(TextAnnotatedStringElement).d72 = function (node) {
    node.x6z(node.t6z(this.c72_1, this.s71_1), node.u6z(this.r71_1), node.v6z(this.s71_1, this.z71_1, this.y71_1, this.x71_1, this.w71_1, this.t71_1, this.v71_1), node.w6z(this.u71_1, this.a72_1, this.b72_1));
  };
  protoOf(TextAnnotatedStringElement).r4o = function (node) {
    return this.d72(node instanceof TextAnnotatedStringNode ? node : THROW_CCE());
  };
  protoOf(TextAnnotatedStringElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextAnnotatedStringElement))
      return false;
    if (!equals(this.c72_1, other.c72_1))
      return false;
    if (!this.r71_1.equals(other.r71_1))
      return false;
    if (!this.s71_1.equals(other.s71_1))
      return false;
    if (!equals(this.z71_1, other.z71_1))
      return false;
    if (!equals(this.t71_1, other.t71_1))
      return false;
    if (!equals(this.u71_1, other.u71_1))
      return false;
    if (!(this.v71_1 === other.v71_1))
      return false;
    if (!(this.w71_1 === other.w71_1))
      return false;
    if (!(this.x71_1 === other.x71_1))
      return false;
    if (!(this.y71_1 === other.y71_1))
      return false;
    if (!equals(this.a72_1, other.a72_1))
      return false;
    if (!equals(this.b72_1, other.b72_1))
      return false;
    return true;
  };
  protoOf(TextAnnotatedStringElement).hashCode = function () {
    var result = this.r71_1.hashCode();
    result = imul(31, result) + this.s71_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.t71_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.u71_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + TextOverflow__hashCode_impl_kqdwgt(this.v71_1) | 0;
    result = imul(31, result) + getBooleanHashCode(this.w71_1) | 0;
    result = imul(31, result) + this.x71_1 | 0;
    result = imul(31, result) + this.y71_1 | 0;
    var tmp_0 = imul(31, result);
    var tmp2_safe_receiver = this.z71_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : hashCode(tmp2_safe_receiver);
    result = tmp_0 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_1 = imul(31, result);
    var tmp4_safe_receiver = this.a72_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : hashCode(tmp4_safe_receiver);
    result = tmp_1 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    var tmp_2 = imul(31, result);
    var tmp6_safe_receiver = this.b72_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : hashCode(tmp6_safe_receiver);
    result = tmp_2 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    var tmp_3 = imul(31, result);
    var tmp8_safe_receiver = this.c72_1;
    var tmp9_elvis_lhs = tmp8_safe_receiver == null ? null : hashCode(tmp8_safe_receiver);
    result = tmp_3 + (tmp9_elvis_lhs == null ? 0 : tmp9_elvis_lhs) | 0;
    return result;
  };
  function _get_layoutCache__kch9ev($this) {
    if ($this.o6z_1 == null) {
      $this.o6z_1 = new MultiParagraphLayoutCache($this.b6z_1, $this.c6z_1, $this.d6z_1, $this.f6z_1, $this.g6z_1, $this.h6z_1, $this.i6z_1, $this.j6z_1);
    }
    return ensureNotNull($this.o6z_1);
  }
  function getLayoutCache($this, density) {
    var tmp0_safe_receiver = _get_textSubstitution__7vuyf3($this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp;
      if (tmp0_safe_receiver.g72_1) {
        var tmp0_safe_receiver_0 = tmp0_safe_receiver.h72_1;
        if (tmp0_safe_receiver_0 == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'kotlin.also' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.foundation.text.modifiers.TextAnnotatedStringNode.getLayoutCache.<anonymous>.<anonymous>.<anonymous>' call
          tmp0_safe_receiver_0.h6w(density);
          return tmp0_safe_receiver_0;
        }
        tmp = Unit_instance;
      }
    }
    // Inline function 'kotlin.also' call
    var this_0 = _get_layoutCache__kch9ev($this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.text.modifiers.TextAnnotatedStringNode.getLayoutCache.<anonymous>' call
    this_0.h6w(density);
    return this_0;
  }
  function TextSubstitutionValue(original, substitution, isShowingSubstitution, layoutCache) {
    isShowingSubstitution = isShowingSubstitution === VOID ? false : isShowingSubstitution;
    layoutCache = layoutCache === VOID ? null : layoutCache;
    this.e72_1 = original;
    this.f72_1 = substitution;
    this.g72_1 = isShowingSubstitution;
    this.h72_1 = layoutCache;
  }
  protoOf(TextSubstitutionValue).toString = function () {
    return 'TextSubstitutionValue(original=' + this.e72_1 + ', substitution=' + this.f72_1 + ', isShowingSubstitution=' + this.g72_1 + ', layoutCache=' + this.h72_1 + ')';
  };
  protoOf(TextSubstitutionValue).hashCode = function () {
    var result = this.e72_1.hashCode();
    result = imul(result, 31) + this.f72_1.hashCode() | 0;
    result = imul(result, 31) + getBooleanHashCode(this.g72_1) | 0;
    result = imul(result, 31) + (this.h72_1 == null ? 0 : hashCode(this.h72_1)) | 0;
    return result;
  };
  protoOf(TextSubstitutionValue).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextSubstitutionValue))
      return false;
    var tmp0_other_with_cast = other instanceof TextSubstitutionValue ? other : THROW_CCE();
    if (!this.e72_1.equals(tmp0_other_with_cast.e72_1))
      return false;
    if (!this.f72_1.equals(tmp0_other_with_cast.f72_1))
      return false;
    if (!(this.g72_1 === tmp0_other_with_cast.g72_1))
      return false;
    if (!equals(this.h72_1, tmp0_other_with_cast.h72_1))
      return false;
    return true;
  };
  function _set_textSubstitution__y24uh9($this, _set____db54di) {
    var this_0 = $this.q6z_1;
    textSubstitution$factory();
    this_0.d1a(_set____db54di);
    return Unit_instance;
  }
  function _get_textSubstitution__7vuyf3($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.q6z_1;
    textSubstitution$factory_0();
    return this_0.q2();
  }
  function setSubstitution($this, updatedText) {
    var currentTextSubstitution = _get_textSubstitution__7vuyf3($this);
    if (!(currentTextSubstitution == null)) {
      if (updatedText.equals(currentTextSubstitution.f72_1)) {
        return false;
      }
      currentTextSubstitution.f72_1 = updatedText;
      var tmp0_safe_receiver = currentTextSubstitution.h72_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        tmp0_safe_receiver.l6w(updatedText, $this.c6z_1, $this.d6z_1, $this.f6z_1, $this.g6z_1, $this.h6z_1, $this.i6z_1, $this.j6z_1);
        tmp = Unit_instance;
      }
      if (tmp == null)
        return false;
    } else {
      var newTextSubstitution = new TextSubstitutionValue($this.b6z_1, updatedText);
      var substitutionLayoutCache = new MultiParagraphLayoutCache(updatedText, $this.c6z_1, $this.d6z_1, $this.f6z_1, $this.g6z_1, $this.h6z_1, $this.i6z_1, $this.j6z_1);
      substitutionLayoutCache.h6w(_get_layoutCache__kch9ev($this).b6w_1);
      newTextSubstitution.h72_1 = substitutionLayoutCache;
      _set_textSubstitution__y24uh9($this, newTextSubstitution);
    }
    return true;
  }
  function clearSubstitution($this) {
    _set_textSubstitution__y24uh9($this, null);
  }
  function TextAnnotatedStringNode$applySemantics$lambda(this$0) {
    return function (textLayoutResult) {
      var inputLayout = _get_layoutCache__kch9ev(this$0).j6w();
      var tmp;
      if (inputLayout == null) {
        tmp = null;
      } else {
        var tmp_0 = this$0.c6z_1;
        var tmp0_safe_receiver = this$0.m6z_1;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i72();
        var tmp_1;
        var tmp_2 = tmp1_elvis_lhs;
        if ((tmp_2 == null ? null : new Color(tmp_2)) == null) {
          tmp_1 = Companion_getInstance_6().i3l_1;
        } else {
          tmp_1 = tmp1_elvis_lhs;
        }
        tmp = inputLayout.n42(TextLayoutInput_init_$Create$(inputLayout.c42_1.o42_1, tmp_0.g43(tmp_1), inputLayout.c42_1.q42_1, inputLayout.c42_1.r42_1, inputLayout.c42_1.s42_1, inputLayout.c42_1.t42_1, inputLayout.c42_1.u42_1, inputLayout.c42_1.v42_1, inputLayout.c42_1.w42_1, inputLayout.c42_1.x42_1));
      }
      var tmp3_safe_receiver = tmp;
      var tmp_3;
      if (tmp3_safe_receiver == null) {
        tmp_3 = null;
      } else {
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.foundation.text.modifiers.TextAnnotatedStringNode.applySemantics.<anonymous>.<anonymous>' call
        textLayoutResult.a1(tmp3_safe_receiver);
        tmp_3 = tmp3_safe_receiver;
      }
      var layout = tmp_3;
      return !(layout == null);
    };
  }
  function TextAnnotatedStringNode$applySemantics$lambda_0(this$0) {
    return function (updatedText) {
      setSubstitution(this$0, updatedText);
      invalidateSemantics(this$0);
      return true;
    };
  }
  function TextAnnotatedStringNode$applySemantics$lambda_1(this$0) {
    return function (it) {
      var tmp;
      if (_get_textSubstitution__7vuyf3(this$0) == null) {
        return false;
      }
      var tmp0_safe_receiver = _get_textSubstitution__7vuyf3(this$0);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = Unit_instance;
      } else {
        tmp0_safe_receiver.g72_1 = it;
        tmp_0 = Unit_instance;
      }
      invalidateSemantics(this$0);
      invalidateMeasurement(this$0);
      invalidateDraw(this$0);
      return true;
    };
  }
  function TextAnnotatedStringNode$applySemantics$lambda_2(this$0) {
    return function () {
      clearSubstitution(this$0);
      invalidateSemantics(this$0);
      invalidateMeasurement(this$0);
      invalidateDraw(this$0);
      return true;
    };
  }
  function TextAnnotatedStringNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.d5a($placeable, 0, 0);
      return Unit_instance;
    };
  }
  function TextAnnotatedStringNode(text, style, fontFamilyResolver, onTextLayout, overflow, softWrap, maxLines, minLines, placeholders, onPlaceholderLayout, selectionController, overrideColor) {
    onTextLayout = onTextLayout === VOID ? null : onTextLayout;
    overflow = overflow === VOID ? Companion_getInstance_0().i4c_1 : overflow;
    softWrap = softWrap === VOID ? true : softWrap;
    maxLines = maxLines === VOID ? IntCompanionObject_instance.MAX_VALUE : maxLines;
    minLines = minLines === VOID ? get_DefaultMinLines() : minLines;
    placeholders = placeholders === VOID ? null : placeholders;
    onPlaceholderLayout = onPlaceholderLayout === VOID ? null : onPlaceholderLayout;
    selectionController = selectionController === VOID ? null : selectionController;
    overrideColor = overrideColor === VOID ? null : overrideColor;
    Node.call(this);
    this.b6z_1 = text;
    this.c6z_1 = style;
    this.d6z_1 = fontFamilyResolver;
    this.e6z_1 = onTextLayout;
    this.f6z_1 = overflow;
    this.g6z_1 = softWrap;
    this.h6z_1 = maxLines;
    this.i6z_1 = minLines;
    this.j6z_1 = placeholders;
    this.k6z_1 = onPlaceholderLayout;
    this.l6z_1 = selectionController;
    this.m6z_1 = overrideColor;
    this.n6z_1 = null;
    this.o6z_1 = null;
    this.p6z_1 = null;
    this.q6z_1 = mutableStateOf(null);
  }
  protoOf(TextAnnotatedStringNode).t6z = function (color, style) {
    var changed = false;
    if (!equals(color, this.m6z_1)) {
      changed = true;
    }
    this.m6z_1 = color;
    changed = changed ? true : !style.i44(this.c6z_1);
    return changed;
  };
  protoOf(TextAnnotatedStringNode).u6z = function (text) {
    if (this.b6z_1.equals(text))
      return false;
    this.b6z_1 = text;
    clearSubstitution(this);
    return true;
  };
  protoOf(TextAnnotatedStringNode).v6z = function (style, placeholders, minLines, maxLines, softWrap, fontFamilyResolver, overflow) {
    var changed;
    changed = !this.c6z_1.h44(style);
    this.c6z_1 = style;
    if (!equals(this.j6z_1, placeholders)) {
      this.j6z_1 = placeholders;
      changed = true;
    }
    if (!(this.i6z_1 === minLines)) {
      this.i6z_1 = minLines;
      changed = true;
    }
    if (!(this.h6z_1 === maxLines)) {
      this.h6z_1 = maxLines;
      changed = true;
    }
    if (!(this.g6z_1 === softWrap)) {
      this.g6z_1 = softWrap;
      changed = true;
    }
    if (!equals(this.d6z_1, fontFamilyResolver)) {
      this.d6z_1 = fontFamilyResolver;
      changed = true;
    }
    if (!(this.f6z_1 === overflow)) {
      this.f6z_1 = overflow;
      changed = true;
    }
    return changed;
  };
  protoOf(TextAnnotatedStringNode).w6z = function (onTextLayout, onPlaceholderLayout, selectionController) {
    var changed = false;
    if (!equals(this.e6z_1, onTextLayout)) {
      this.e6z_1 = onTextLayout;
      changed = true;
    }
    if (!equals(this.k6z_1, onPlaceholderLayout)) {
      this.k6z_1 = onPlaceholderLayout;
      changed = true;
    }
    if (!equals(this.l6z_1, selectionController)) {
      this.l6z_1 = selectionController;
      changed = true;
    }
    return changed;
  };
  protoOf(TextAnnotatedStringNode).x6z = function (drawChanged, textChanged, layoutChanged, callbacksChanged) {
    if (!this.b4j_1) {
      return Unit_instance;
    }
    if (textChanged ? true : drawChanged ? !(this.p6z_1 == null) : false) {
      invalidateSemantics(this);
    }
    if ((textChanged ? true : layoutChanged) ? true : callbacksChanged) {
      _get_layoutCache__kch9ev(this).l6w(this.b6z_1, this.c6z_1, this.d6z_1, this.f6z_1, this.g6z_1, this.h6z_1, this.i6z_1, this.j6z_1);
      invalidateMeasurement(this);
      invalidateDraw(this);
    }
    if (drawChanged) {
      invalidateDraw(this);
    }
  };
  protoOf(TextAnnotatedStringNode).k5h = function (_this__u8e3s4) {
    var localSemanticsTextLayoutResult = this.p6z_1;
    if (localSemanticsTextLayoutResult == null) {
      localSemanticsTextLayoutResult = TextAnnotatedStringNode$applySemantics$lambda(this);
      this.p6z_1 = localSemanticsTextLayoutResult;
    }
    set_text(_this__u8e3s4, this.b6z_1);
    var currentTextSubstitution = _get_textSubstitution__7vuyf3(this);
    if (!(currentTextSubstitution == null)) {
      set_textSubstitution(_this__u8e3s4, currentTextSubstitution.f72_1);
      set_isShowingTextSubstitution(_this__u8e3s4, currentTextSubstitution.g72_1);
    }
    setTextSubstitution(_this__u8e3s4, VOID, TextAnnotatedStringNode$applySemantics$lambda_0(this));
    showTextSubstitution(_this__u8e3s4, VOID, TextAnnotatedStringNode$applySemantics$lambda_1(this));
    clearTextSubstitution(_this__u8e3s4, VOID, TextAnnotatedStringNode$applySemantics$lambda_2(this));
    getTextLayoutResult(_this__u8e3s4, VOID, localSemanticsTextLayoutResult);
  };
  protoOf(TextAnnotatedStringNode).s6z = function (measureScope, measurable, constraints) {
    return this.s4u(measureScope, measurable, constraints);
  };
  protoOf(TextAnnotatedStringNode).s4u = function (_this__u8e3s4, measurable, constraints) {
    var layoutCache = getLayoutCache(this, _this__u8e3s4);
    var didChangeLayout = layoutCache.k6w(constraints, _this__u8e3s4.x4o());
    var textLayoutResult = layoutCache.i6w();
    textLayoutResult.d42_1.h3w_1.m3y();
    if (didChangeLayout) {
      invalidateLayer(this);
      var tmp0_safe_receiver = this.e6z_1;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver(textLayoutResult);
      var tmp1_safe_receiver = this.l6z_1;
      if (tmp1_safe_receiver == null)
        null;
      else {
        tmp1_safe_receiver.d70(textLayoutResult);
      }
      var tmp = this;
      var tmp_0 = get_FirstBaseline();
      // Inline function 'kotlin.math.roundToInt' call
      var this_0 = textLayoutResult.f42_1;
      var tmp$ret$0 = roundToInt(this_0);
      var tmp_1 = to(tmp_0, tmp$ret$0);
      var tmp_2 = get_LastBaseline();
      // Inline function 'kotlin.math.roundToInt' call
      var this_1 = textLayoutResult.g42_1;
      var tmp$ret$1 = roundToInt(this_1);
      tmp.n6z_1 = mapOf([tmp_1, to(tmp_2, tmp$ret$1)]);
    }
    var tmp2_safe_receiver = this.k6z_1;
    if (tmp2_safe_receiver == null)
      null;
    else
      tmp2_safe_receiver(textLayoutResult.h42_1);
    var placeable = measurable.t4u(fixedCoerceHeightAndWidthForBits(Companion_getInstance_3(), _IntSize___get_width__impl__d9yl4o(textLayoutResult.e42_1), _IntSize___get_height__impl__prv63b(textLayoutResult.e42_1)));
    var tmp_3 = _IntSize___get_width__impl__d9yl4o(textLayoutResult.e42_1);
    var tmp_4 = _IntSize___get_height__impl__prv63b(textLayoutResult.e42_1);
    var tmp_5 = ensureNotNull(this.n6z_1);
    return _this__u8e3s4.v59(tmp_3, tmp_4, tmp_5, TextAnnotatedStringNode$measure$lambda(placeable));
  };
  protoOf(TextAnnotatedStringNode).r6z = function (contentDrawScope) {
    return this.t4j(contentDrawScope);
  };
  protoOf(TextAnnotatedStringNode).t4j = function (_this__u8e3s4) {
    if (!this.b4j_1) {
      return Unit_instance;
    }
    var tmp0_safe_receiver = this.l6z_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.g70(_this__u8e3s4);
    }
    // Inline function 'androidx.compose.ui.graphics.drawscope.drawIntoCanvas' call
    var canvas = _this__u8e3s4.z3t().t37();
    var layoutCache = getLayoutCache(this, _this__u8e3s4);
    var textLayoutResult = layoutCache.i6w();
    var localParagraph = textLayoutResult.d42_1;
    var willClip = textLayoutResult.k42() ? !(this.f6z_1 === Companion_getInstance_0().k4c_1) : false;
    if (willClip) {
      var width = _IntSize___get_width__impl__d9yl4o(textLayoutResult.e42_1);
      var height = _IntSize___get_height__impl__prv63b(textLayoutResult.e42_1);
      var bounds = Rect(Companion_getInstance_5().v2v_1, Size(width, height));
      canvas.x3i();
      canvas.e3j(bounds);
    }
    var tmp;
    try {
      var tmp0_elvis_lhs = this.c6z_1.w43();
      var textDecoration = tmp0_elvis_lhs == null ? Companion_getInstance_7().z41_1 : tmp0_elvis_lhs;
      var tmp1_elvis_lhs = this.c6z_1.x43();
      var shadow = tmp1_elvis_lhs == null ? Companion_getInstance_8().b3o_1 : tmp1_elvis_lhs;
      var tmp2_elvis_lhs = this.c6z_1.y43();
      var drawStyle = tmp2_elvis_lhs == null ? Fill_getInstance() : tmp2_elvis_lhs;
      var brush = this.c6z_1.i40();
      var tmp_0;
      if (!(brush == null)) {
        var alpha = this.c6z_1.p3g();
        localParagraph.m3x(canvas, brush, alpha, shadow, textDecoration, drawStyle);
        tmp_0 = Unit_instance;
      } else {
        var tmp3_safe_receiver = this.m6z_1;
        var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.i72();
        var tmp_1;
        var tmp_2 = tmp4_elvis_lhs;
        if ((tmp_2 == null ? null : new Color(tmp_2)) == null) {
          tmp_1 = Companion_getInstance_6().i3l_1;
        } else {
          tmp_1 = tmp4_elvis_lhs;
        }
        var overrideColorVal = tmp_1;
        var tmp_3;
        // Inline function 'androidx.compose.ui.graphics.isSpecified' call
        if (!equals(_Color___get_value__impl__1pls5m(overrideColorVal), _Color___get_value__impl__1pls5m(Companion_getInstance_6().i3l_1))) {
          tmp_3 = overrideColorVal;
        } else {
          // Inline function 'androidx.compose.ui.graphics.isSpecified' call
          var this_0 = this.c6z_1.e3t();
          if (!equals(_Color___get_value__impl__1pls5m(this_0), _Color___get_value__impl__1pls5m(Companion_getInstance_6().i3l_1))) {
            tmp_3 = this.c6z_1.e3t();
          } else {
            tmp_3 = Companion_getInstance_6().w3k_1;
          }
        }
        var color = tmp_3;
        localParagraph.k3x(canvas, color, shadow, textDecoration, drawStyle);
        tmp_0 = Unit_instance;
      }
      tmp = tmp_0;
    }finally {
      if (willClip) {
        canvas.y3i();
      }
    }
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    var this_1 = this.j6z_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_1 == null ? true : this_1.u())) {
      _this__u8e3s4.p5u();
    }
  };
  function textSubstitution$factory() {
    return getPropertyCallableRef('textSubstitution', 1, KMutableProperty1, function (receiver) {
      return _get_textSubstitution__7vuyf3(receiver);
    }, function (receiver, value) {
      return _set_textSubstitution__y24uh9(receiver, value);
    });
  }
  function textSubstitution$factory_0() {
    return getPropertyCallableRef('textSubstitution', 1, KMutableProperty1, function (receiver) {
      return _get_textSubstitution__7vuyf3(receiver);
    }, function (receiver, value) {
      return _set_textSubstitution__y24uh9(receiver, value);
    });
  }
  function TextStringSimpleElement(text, style, fontFamilyResolver, overflow, softWrap, maxLines, minLines, color) {
    overflow = overflow === VOID ? Companion_getInstance_0().i4c_1 : overflow;
    softWrap = softWrap === VOID ? true : softWrap;
    maxLines = maxLines === VOID ? IntCompanionObject_instance.MAX_VALUE : maxLines;
    minLines = minLines === VOID ? get_DefaultMinLines() : minLines;
    color = color === VOID ? null : color;
    ModifierNodeElement.call(this);
    this.k72_1 = text;
    this.l72_1 = style;
    this.m72_1 = fontFamilyResolver;
    this.n72_1 = overflow;
    this.o72_1 = softWrap;
    this.p72_1 = maxLines;
    this.q72_1 = minLines;
    this.r72_1 = color;
  }
  protoOf(TextStringSimpleElement).i29 = function () {
    return new TextStringSimpleNode(this.k72_1, this.l72_1, this.m72_1, this.n72_1, this.o72_1, this.p72_1, this.q72_1, this.r72_1);
  };
  protoOf(TextStringSimpleElement).s72 = function (node) {
    node.u73(node.t6z(this.r72_1, this.l72_1), node.s73(this.k72_1), node.t73(this.l72_1, this.q72_1, this.p72_1, this.o72_1, this.m72_1, this.n72_1));
  };
  protoOf(TextStringSimpleElement).r4o = function (node) {
    return this.s72(node instanceof TextStringSimpleNode ? node : THROW_CCE());
  };
  protoOf(TextStringSimpleElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextStringSimpleElement))
      return false;
    if (!equals(this.r72_1, other.r72_1))
      return false;
    if (!(this.k72_1 === other.k72_1))
      return false;
    if (!this.l72_1.equals(other.l72_1))
      return false;
    if (!equals(this.m72_1, other.m72_1))
      return false;
    if (!(this.n72_1 === other.n72_1))
      return false;
    if (!(this.o72_1 === other.o72_1))
      return false;
    if (!(this.p72_1 === other.p72_1))
      return false;
    if (!(this.q72_1 === other.q72_1))
      return false;
    return true;
  };
  protoOf(TextStringSimpleElement).hashCode = function () {
    var result = getStringHashCode(this.k72_1);
    result = imul(31, result) + this.l72_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.m72_1) | 0;
    result = imul(31, result) + TextOverflow__hashCode_impl_kqdwgt(this.n72_1) | 0;
    result = imul(31, result) + getBooleanHashCode(this.o72_1) | 0;
    result = imul(31, result) + this.p72_1 | 0;
    result = imul(31, result) + this.q72_1 | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.r72_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  function _get_layoutCache__kch9ev_0($this) {
    if ($this.p73_1 == null) {
      $this.p73_1 = new ParagraphLayoutCache($this.g73_1, $this.h73_1, $this.i73_1, $this.j73_1, $this.k73_1, $this.l73_1, $this.m73_1);
    }
    return ensureNotNull($this.p73_1);
  }
  function getLayoutCache_0($this, density) {
    var tmp0_safe_receiver = _get_textSubstitution__7vuyf3_0($this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp;
      if (tmp0_safe_receiver.x73_1) {
        var tmp0_safe_receiver_0 = tmp0_safe_receiver.y73_1;
        if (tmp0_safe_receiver_0 == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'kotlin.also' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.foundation.text.modifiers.TextStringSimpleNode.getLayoutCache.<anonymous>.<anonymous>.<anonymous>' call
          tmp0_safe_receiver_0.h6w(density);
          return tmp0_safe_receiver_0;
        }
        tmp = Unit_instance;
      }
    }
    // Inline function 'kotlin.also' call
    var this_0 = _get_layoutCache__kch9ev_0($this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.text.modifiers.TextStringSimpleNode.getLayoutCache.<anonymous>' call
    this_0.h6w(density);
    return this_0;
  }
  function TextSubstitutionValue_0(original, substitution, isShowingSubstitution, layoutCache) {
    isShowingSubstitution = isShowingSubstitution === VOID ? false : isShowingSubstitution;
    layoutCache = layoutCache === VOID ? null : layoutCache;
    this.v73_1 = original;
    this.w73_1 = substitution;
    this.x73_1 = isShowingSubstitution;
    this.y73_1 = layoutCache;
  }
  protoOf(TextSubstitutionValue_0).toString = function () {
    return 'TextSubstitutionValue(original=' + this.v73_1 + ', substitution=' + this.w73_1 + ', isShowingSubstitution=' + this.x73_1 + ', layoutCache=' + this.y73_1 + ')';
  };
  protoOf(TextSubstitutionValue_0).hashCode = function () {
    var result = getStringHashCode(this.v73_1);
    result = imul(result, 31) + getStringHashCode(this.w73_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.x73_1) | 0;
    result = imul(result, 31) + (this.y73_1 == null ? 0 : hashCode(this.y73_1)) | 0;
    return result;
  };
  protoOf(TextSubstitutionValue_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextSubstitutionValue_0))
      return false;
    var tmp0_other_with_cast = other instanceof TextSubstitutionValue_0 ? other : THROW_CCE();
    if (!(this.v73_1 === tmp0_other_with_cast.v73_1))
      return false;
    if (!(this.w73_1 === tmp0_other_with_cast.w73_1))
      return false;
    if (!(this.x73_1 === tmp0_other_with_cast.x73_1))
      return false;
    if (!equals(this.y73_1, tmp0_other_with_cast.y73_1))
      return false;
    return true;
  };
  function _set_textSubstitution__y24uh9_0($this, _set____db54di) {
    var this_0 = $this.r73_1;
    textSubstitution$factory_1();
    this_0.d1a(_set____db54di);
    return Unit_instance;
  }
  function _get_textSubstitution__7vuyf3_0($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.r73_1;
    textSubstitution$factory_2();
    return this_0.q2();
  }
  function setSubstitution_0($this, updatedText) {
    var currentTextSubstitution = _get_textSubstitution__7vuyf3_0($this);
    if (!(currentTextSubstitution == null)) {
      if (updatedText === currentTextSubstitution.w73_1) {
        return false;
      }
      currentTextSubstitution.w73_1 = updatedText;
      var tmp0_safe_receiver = currentTextSubstitution.y73_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        tmp0_safe_receiver.f6x(updatedText, $this.h73_1, $this.i73_1, $this.j73_1, $this.k73_1, $this.l73_1, $this.m73_1);
        tmp = Unit_instance;
      }
      if (tmp == null)
        return false;
    } else {
      var newTextSubstitution = new TextSubstitutionValue_0($this.g73_1, updatedText);
      var substitutionLayoutCache = new ParagraphLayoutCache(updatedText, $this.h73_1, $this.i73_1, $this.j73_1, $this.k73_1, $this.l73_1, $this.m73_1);
      substitutionLayoutCache.h6w(_get_layoutCache__kch9ev_0($this).u6w_1);
      newTextSubstitution.y73_1 = substitutionLayoutCache;
      _set_textSubstitution__y24uh9_0($this, newTextSubstitution);
    }
    return true;
  }
  function clearSubstitution_0($this) {
    _set_textSubstitution__y24uh9_0($this, null);
  }
  function TextStringSimpleNode$applySemantics$lambda(this$0) {
    return function (textLayoutResult) {
      var tmp = _get_layoutCache__kch9ev_0(this$0);
      var tmp_0 = this$0.h73_1;
      var tmp0_safe_receiver = this$0.n73_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i72();
      var tmp_1;
      var tmp_2 = tmp1_elvis_lhs;
      if ((tmp_2 == null ? null : new Color(tmp_2)) == null) {
        tmp_1 = Companion_getInstance_6().i3l_1;
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      var tmp2_safe_receiver = tmp.g6x(tmp_0.g43(tmp_1));
      var tmp_3;
      if (tmp2_safe_receiver == null) {
        tmp_3 = null;
      } else {
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.foundation.text.modifiers.TextStringSimpleNode.applySemantics.<anonymous>.<anonymous>' call
        textLayoutResult.a1(tmp2_safe_receiver);
        tmp_3 = tmp2_safe_receiver;
      }
      var layout = tmp_3;
      return !(layout == null);
    };
  }
  function TextStringSimpleNode$applySemantics$lambda_0(this$0) {
    return function (updatedText) {
      setSubstitution_0(this$0, updatedText.n3v_1);
      invalidateSemantics(this$0);
      return true;
    };
  }
  function TextStringSimpleNode$applySemantics$lambda_1(this$0) {
    return function (it) {
      var tmp;
      if (_get_textSubstitution__7vuyf3_0(this$0) == null) {
        return false;
      }
      var tmp0_safe_receiver = _get_textSubstitution__7vuyf3_0(this$0);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = Unit_instance;
      } else {
        tmp0_safe_receiver.x73_1 = it;
        tmp_0 = Unit_instance;
      }
      invalidateSemantics(this$0);
      invalidateMeasurement(this$0);
      invalidateDraw(this$0);
      return true;
    };
  }
  function TextStringSimpleNode$applySemantics$lambda_2(this$0) {
    return function () {
      clearSubstitution_0(this$0);
      invalidateSemantics(this$0);
      invalidateMeasurement(this$0);
      invalidateDraw(this$0);
      return true;
    };
  }
  function TextStringSimpleNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.d5a($placeable, 0, 0);
      return Unit_instance;
    };
  }
  function TextStringSimpleNode(text, style, fontFamilyResolver, overflow, softWrap, maxLines, minLines, overrideColor) {
    overflow = overflow === VOID ? Companion_getInstance_0().i4c_1 : overflow;
    softWrap = softWrap === VOID ? true : softWrap;
    maxLines = maxLines === VOID ? IntCompanionObject_instance.MAX_VALUE : maxLines;
    minLines = minLines === VOID ? get_DefaultMinLines() : minLines;
    overrideColor = overrideColor === VOID ? null : overrideColor;
    Node.call(this);
    this.g73_1 = text;
    this.h73_1 = style;
    this.i73_1 = fontFamilyResolver;
    this.j73_1 = overflow;
    this.k73_1 = softWrap;
    this.l73_1 = maxLines;
    this.m73_1 = minLines;
    this.n73_1 = overrideColor;
    this.o73_1 = null;
    this.p73_1 = null;
    this.q73_1 = null;
    this.r73_1 = mutableStateOf(null);
  }
  protoOf(TextStringSimpleNode).t6z = function (color, style) {
    var changed = false;
    if (!equals(color, this.n73_1)) {
      changed = true;
    }
    this.n73_1 = color;
    changed = changed ? true : !style.i44(this.h73_1);
    return changed;
  };
  protoOf(TextStringSimpleNode).s73 = function (text) {
    if (this.g73_1 === text)
      return false;
    this.g73_1 = text;
    clearSubstitution_0(this);
    return true;
  };
  protoOf(TextStringSimpleNode).t73 = function (style, minLines, maxLines, softWrap, fontFamilyResolver, overflow) {
    var changed;
    changed = !this.h73_1.h44(style);
    this.h73_1 = style;
    if (!(this.m73_1 === minLines)) {
      this.m73_1 = minLines;
      changed = true;
    }
    if (!(this.l73_1 === maxLines)) {
      this.l73_1 = maxLines;
      changed = true;
    }
    if (!(this.k73_1 === softWrap)) {
      this.k73_1 = softWrap;
      changed = true;
    }
    if (!equals(this.i73_1, fontFamilyResolver)) {
      this.i73_1 = fontFamilyResolver;
      changed = true;
    }
    if (!(this.j73_1 === overflow)) {
      this.j73_1 = overflow;
      changed = true;
    }
    return changed;
  };
  protoOf(TextStringSimpleNode).u73 = function (drawChanged, textChanged, layoutChanged) {
    if (!this.b4j_1) {
      return Unit_instance;
    }
    if (textChanged ? true : drawChanged ? !(this.q73_1 == null) : false) {
      invalidateSemantics(this);
    }
    if (textChanged ? true : layoutChanged) {
      _get_layoutCache__kch9ev_0(this).f6x(this.g73_1, this.h73_1, this.i73_1, this.j73_1, this.k73_1, this.l73_1, this.m73_1);
      invalidateMeasurement(this);
      invalidateDraw(this);
    }
    if (drawChanged) {
      invalidateDraw(this);
    }
  };
  protoOf(TextStringSimpleNode).k5h = function (_this__u8e3s4) {
    var localSemanticsTextLayoutResult = this.q73_1;
    if (localSemanticsTextLayoutResult == null) {
      localSemanticsTextLayoutResult = TextStringSimpleNode$applySemantics$lambda(this);
      this.q73_1 = localSemanticsTextLayoutResult;
    }
    set_text(_this__u8e3s4, AnnotatedString_init_$Create$(this.g73_1));
    var currentTextSubstitution = _get_textSubstitution__7vuyf3_0(this);
    if (!(currentTextSubstitution == null)) {
      set_isShowingTextSubstitution(_this__u8e3s4, currentTextSubstitution.x73_1);
      set_textSubstitution(_this__u8e3s4, AnnotatedString_init_$Create$(currentTextSubstitution.w73_1));
    }
    setTextSubstitution(_this__u8e3s4, VOID, TextStringSimpleNode$applySemantics$lambda_0(this));
    showTextSubstitution(_this__u8e3s4, VOID, TextStringSimpleNode$applySemantics$lambda_1(this));
    clearTextSubstitution(_this__u8e3s4, VOID, TextStringSimpleNode$applySemantics$lambda_2(this));
    getTextLayoutResult(_this__u8e3s4, VOID, localSemanticsTextLayoutResult);
  };
  protoOf(TextStringSimpleNode).s4u = function (_this__u8e3s4, measurable, constraints) {
    var layoutCache = getLayoutCache_0(this, _this__u8e3s4);
    var didChangeLayout = layoutCache.k6w(constraints, _this__u8e3s4.x4o());
    layoutCache.e6x();
    var paragraph = ensureNotNull(layoutCache.v6w_1);
    var layoutSize = layoutCache.x6w_1;
    if (didChangeLayout) {
      invalidateLayer(this);
      var cache = this.o73_1;
      if (cache == null) {
        cache = LinkedHashMap_init_$Create$(2);
      }
      // Inline function 'kotlin.collections.set' call
      var this_0 = cache;
      var key = get_FirstBaseline();
      // Inline function 'kotlin.math.roundToInt' call
      var this_1 = paragraph.g3x();
      var value = roundToInt(this_1);
      this_0.n2(key, value);
      // Inline function 'kotlin.collections.set' call
      var this_2 = cache;
      var key_0 = get_LastBaseline();
      // Inline function 'kotlin.math.roundToInt' call
      var this_3 = paragraph.h3x();
      var value_0 = roundToInt(this_3);
      this_2.n2(key_0, value_0);
      this.o73_1 = cache;
    }
    var placeable = measurable.t4u(fixedCoerceHeightAndWidthForBits(Companion_getInstance_3(), _IntSize___get_width__impl__d9yl4o(layoutSize), _IntSize___get_height__impl__prv63b(layoutSize)));
    var tmp = _IntSize___get_width__impl__d9yl4o(layoutSize);
    var tmp_0 = _IntSize___get_height__impl__prv63b(layoutSize);
    var tmp_1 = ensureNotNull(this.o73_1);
    return _this__u8e3s4.v59(tmp, tmp_0, tmp_1, TextStringSimpleNode$measure$lambda(placeable));
  };
  protoOf(TextStringSimpleNode).t4j = function (_this__u8e3s4) {
    if (!this.b4j_1) {
      return Unit_instance;
    }
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      var value = _get_layoutCache__kch9ev_0(this).v6w_1;
      // Inline function 'kotlin.contracts.contract' call
      if (value == null) {
        // Inline function 'androidx.compose.foundation.text.modifiers.TextStringSimpleNode.draw.<anonymous>' call
        var message = 'no paragraph';
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = value;
        break $l$block;
      }
    }
    var localParagraph = tmp$ret$1;
    // Inline function 'androidx.compose.ui.graphics.drawscope.drawIntoCanvas' call
    var canvas = _this__u8e3s4.z3t().t37();
    var willClip = _get_layoutCache__kch9ev_0(this).w6w_1;
    if (willClip) {
      var width = _IntSize___get_width__impl__d9yl4o(_get_layoutCache__kch9ev_0(this).x6w_1);
      var height = _IntSize___get_height__impl__prv63b(_get_layoutCache__kch9ev_0(this).x6w_1);
      var bounds = Rect(Companion_getInstance_5().v2v_1, Size(width, height));
      canvas.x3i();
      canvas.e3j(bounds);
    }
    var tmp;
    try {
      var tmp0_elvis_lhs = this.h73_1.w43();
      var textDecoration = tmp0_elvis_lhs == null ? Companion_getInstance_7().z41_1 : tmp0_elvis_lhs;
      var tmp1_elvis_lhs = this.h73_1.x43();
      var shadow = tmp1_elvis_lhs == null ? Companion_getInstance_8().b3o_1 : tmp1_elvis_lhs;
      var tmp2_elvis_lhs = this.h73_1.y43();
      var drawStyle = tmp2_elvis_lhs == null ? Fill_getInstance() : tmp2_elvis_lhs;
      var brush = this.h73_1.i40();
      var tmp_0;
      if (!(brush == null)) {
        var alpha = this.h73_1.p3g();
        localParagraph.a4e(canvas, brush, alpha, shadow, textDecoration, drawStyle);
        tmp_0 = Unit_instance;
      } else {
        var tmp3_safe_receiver = this.n73_1;
        var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.i72();
        var tmp_1;
        var tmp_2 = tmp4_elvis_lhs;
        if ((tmp_2 == null ? null : new Color(tmp_2)) == null) {
          tmp_1 = Companion_getInstance_6().i3l_1;
        } else {
          tmp_1 = tmp4_elvis_lhs;
        }
        var overrideColorVal = tmp_1;
        var tmp_3;
        // Inline function 'androidx.compose.ui.graphics.isSpecified' call
        if (!equals(_Color___get_value__impl__1pls5m(overrideColorVal), _Color___get_value__impl__1pls5m(Companion_getInstance_6().i3l_1))) {
          tmp_3 = overrideColorVal;
        } else {
          // Inline function 'androidx.compose.ui.graphics.isSpecified' call
          var this_0 = this.h73_1.e3t();
          if (!equals(_Color___get_value__impl__1pls5m(this_0), _Color___get_value__impl__1pls5m(Companion_getInstance_6().i3l_1))) {
            tmp_3 = this.h73_1.e3t();
          } else {
            tmp_3 = Companion_getInstance_6().w3k_1;
          }
        }
        var color = tmp_3;
        localParagraph.z4d(canvas, color, shadow, textDecoration, drawStyle);
        tmp_0 = Unit_instance;
      }
      tmp = tmp_0;
    }finally {
      if (willClip) {
        canvas.y3i();
      }
    }
  };
  function textSubstitution$factory_1() {
    return getPropertyCallableRef('textSubstitution', 1, KMutableProperty1, function (receiver) {
      return _get_textSubstitution__7vuyf3_0(receiver);
    }, function (receiver, value) {
      return _set_textSubstitution__y24uh9_0(receiver, value);
    });
  }
  function textSubstitution$factory_2() {
    return getPropertyCallableRef('textSubstitution', 1, KMutableProperty1, function (receiver) {
      return _get_textSubstitution__7vuyf3_0(receiver);
    }, function (receiver, value) {
      return _set_textSubstitution__y24uh9_0(receiver, value);
    });
  }
  function _get_lastVisibleOffset__v7xite(_this__u8e3s4, $this) {
    if (!($this.c74_1 === _this__u8e3s4)) {
      var tmp;
      if (!_this__u8e3s4.i42() ? true : _this__u8e3s4.d42_1.j3w_1) {
        tmp = _this__u8e3s4.c3x() - 1 | 0;
      } else {
        var finalVisibleLine = coerceAtMost(_this__u8e3s4.n3x(_IntSize___get_height__impl__prv63b(_this__u8e3s4.e42_1)), _this__u8e3s4.c3x() - 1 | 0);
        while (finalVisibleLine >= 0 ? _this__u8e3s4.v3x(finalVisibleLine) >= _IntSize___get_height__impl__prv63b(_this__u8e3s4.e42_1) : false) {
          finalVisibleLine = finalVisibleLine - 1 | 0;
        }
        tmp = coerceAtLeast(finalVisibleLine, 0);
      }
      var lastVisibleLine = tmp;
      $this.d74_1 = _this__u8e3s4.z3x(lastVisibleLine, true);
      $this.c74_1 = _this__u8e3s4;
    }
    return $this.d74_1;
  }
  function MultiWidgetSelectionDelegate(selectableId, coordinatesCallback, layoutResultCallback) {
    this.z73_1 = selectableId;
    this.a74_1 = coordinatesCallback;
    this.b74_1 = layoutResultCallback;
    this.c74_1 = null;
    this.d74_1 = -1;
  }
  protoOf(MultiWidgetSelectionDelegate).o70 = function () {
    var tmp0_elvis_lhs = this.b74_1();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return 0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var textLayoutResult = tmp;
    return _get_lastVisibleOffset__v7xite(textLayoutResult, this);
  };
  function AnchorInfo(direction, offset, selectableId) {
    this.i70_1 = direction;
    this.j70_1 = offset;
    this.k70_1 = selectableId;
  }
  protoOf(AnchorInfo).e74 = function (direction, offset, selectableId) {
    return new AnchorInfo(direction, offset, selectableId);
  };
  protoOf(AnchorInfo).f74 = function (direction, offset, selectableId, $super) {
    direction = direction === VOID ? this.i70_1 : direction;
    offset = offset === VOID ? this.j70_1 : offset;
    selectableId = selectableId === VOID ? this.k70_1 : selectableId;
    return $super === VOID ? this.e74(direction, offset, selectableId) : $super.e74.call(this, direction, offset, selectableId);
  };
  protoOf(AnchorInfo).toString = function () {
    return 'AnchorInfo(direction=' + this.i70_1 + ', offset=' + this.j70_1 + ', selectableId=' + this.k70_1.toString() + ')';
  };
  protoOf(AnchorInfo).hashCode = function () {
    var result = this.i70_1.hashCode();
    result = imul(result, 31) + this.j70_1 | 0;
    result = imul(result, 31) + this.k70_1.hashCode() | 0;
    return result;
  };
  protoOf(AnchorInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AnchorInfo))
      return false;
    var tmp0_other_with_cast = other instanceof AnchorInfo ? other : THROW_CCE();
    if (!this.i70_1.equals(tmp0_other_with_cast.i70_1))
      return false;
    if (!(this.j70_1 === tmp0_other_with_cast.j70_1))
      return false;
    if (!this.k70_1.equals(tmp0_other_with_cast.k70_1))
      return false;
    return true;
  };
  function Selection(start, end, handlesCrossed) {
    handlesCrossed = handlesCrossed === VOID ? false : handlesCrossed;
    this.l70_1 = start;
    this.m70_1 = end;
    this.n70_1 = handlesCrossed;
  }
  protoOf(Selection).g74 = function (start, end, handlesCrossed) {
    return new Selection(start, end, handlesCrossed);
  };
  protoOf(Selection).h74 = function (start, end, handlesCrossed, $super) {
    start = start === VOID ? this.l70_1 : start;
    end = end === VOID ? this.m70_1 : end;
    handlesCrossed = handlesCrossed === VOID ? this.n70_1 : handlesCrossed;
    return $super === VOID ? this.g74(start, end, handlesCrossed) : $super.g74.call(this, start, end, handlesCrossed);
  };
  protoOf(Selection).toString = function () {
    return 'Selection(start=' + this.l70_1 + ', end=' + this.m70_1 + ', handlesCrossed=' + this.n70_1 + ')';
  };
  protoOf(Selection).hashCode = function () {
    var result = this.l70_1.hashCode();
    result = imul(result, 31) + this.m70_1.hashCode() | 0;
    result = imul(result, 31) + getBooleanHashCode(this.n70_1) | 0;
    return result;
  };
  protoOf(Selection).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Selection))
      return false;
    var tmp0_other_with_cast = other instanceof Selection ? other : THROW_CCE();
    if (!this.l70_1.equals(tmp0_other_with_cast.l70_1))
      return false;
    if (!this.m70_1.equals(tmp0_other_with_cast.m70_1))
      return false;
    if (!(this.n70_1 === tmp0_other_with_cast.n70_1))
      return false;
    return true;
  };
  function sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0(function_0) {
    this.i74_1 = function_0;
  }
  protoOf(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0).j74 = function (layout) {
    return this.i74_1(layout);
  };
  function sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_0(function_0) {
    this.k74_1 = function_0;
  }
  protoOf(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_0).j74 = function (layout) {
    return this.k74_1(layout);
  };
  function sam$androidx_compose_foundation_text_selection_BoundaryFunction$0(function_0) {
    this.l74_1 = function_0;
  }
  protoOf(sam$androidx_compose_foundation_text_selection_BoundaryFunction$0).m74 = function (_this__u8e3s4, offset) {
    return this.l74_1(_this__u8e3s4, offset).a43_1;
  };
  function sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_1(function_0) {
    this.n74_1 = function_0;
  }
  protoOf(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_1).j74 = function (layout) {
    return this.n74_1(layout);
  };
  function sam$androidx_compose_foundation_text_selection_BoundaryFunction$0_0(function_0) {
    this.o74_1 = function_0;
  }
  protoOf(sam$androidx_compose_foundation_text_selection_BoundaryFunction$0_0).m74 = function (_this__u8e3s4, offset) {
    return this.o74_1(_this__u8e3s4, offset).a43_1;
  };
  function sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_2(function_0) {
    this.p74_1 = function_0;
  }
  protoOf(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_2).j74 = function (layout) {
    return this.p74_1(layout);
  };
  function sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_3(function_0) {
    this.q74_1 = function_0;
  }
  protoOf(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_3).j74 = function (layout) {
    return this.q74_1(layout);
  };
  function SelectionAdjustment$Companion$None$lambda(layout) {
    return new Selection(layout.r74().y74(layout.r74().u74_1), layout.z74().y74(layout.z74().v74_1), layout.a75().equals(CrossStatus_CROSSED_getInstance()));
  }
  function SelectionAdjustment$Companion$Character$lambda(layout) {
    return ensureAtLeastOneChar(Companion_getInstance_15().x70_1.j74(layout), layout);
  }
  function SelectionAdjustment$Companion$Word$lambda(layout) {
    var tmp = SelectionAdjustment$Companion$Word$lambda$lambda;
    return adjustToBoundaries(layout, new sam$androidx_compose_foundation_text_selection_BoundaryFunction$0(tmp));
  }
  function SelectionAdjustment$Companion$Word$lambda$lambda($this$adjustToBoundaries, it) {
    return new TextRange_0($this$adjustToBoundaries.x74_1.s3x(it));
  }
  function SelectionAdjustment$Companion$Paragraph$lambda(layout) {
    var tmp = SelectionAdjustment$Companion$Paragraph$lambda$lambda;
    return adjustToBoundaries(layout, new sam$androidx_compose_foundation_text_selection_BoundaryFunction$0_0(tmp));
  }
  function SelectionAdjustment$Companion$Paragraph$lambda$lambda($this$adjustToBoundaries, it) {
    return new TextRange_0(getParagraphBoundary($this$adjustToBoundaries.b75(), it));
  }
  function SelectionAdjustment$Companion$CharacterWithWordAccelerate$lambda(layout) {
    var tmp0_elvis_lhs = layout.c75();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Companion_getInstance_15().z70_1.j74(layout);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var previousSelection = tmp;
    var previousAnchor;
    var newAnchor;
    var startAnchor;
    var endAnchor;
    if (layout.d75()) {
      previousAnchor = previousSelection.l70_1;
      newAnchor = updateSelectionBoundary(layout, layout.r74(), previousAnchor);
      startAnchor = newAnchor;
      endAnchor = previousSelection.m70_1;
    } else {
      previousAnchor = previousSelection.m70_1;
      newAnchor = updateSelectionBoundary(layout, layout.z74(), previousAnchor);
      startAnchor = previousSelection.l70_1;
      endAnchor = newAnchor;
    }
    var tmp_0;
    if (newAnchor.equals(previousAnchor)) {
      tmp_0 = previousSelection;
    } else {
      var crossed = layout.a75().equals(CrossStatus_CROSSED_getInstance()) ? true : layout.a75().equals(CrossStatus_COLLAPSED_getInstance()) ? startAnchor.j70_1 > endAnchor.j70_1 : false;
      tmp_0 = ensureAtLeastOneChar(new Selection(startAnchor, endAnchor, crossed), layout);
    }
    return tmp_0;
  }
  function Companion_2() {
    Companion_instance_3 = this;
    var tmp = this;
    var tmp_0 = SelectionAdjustment$Companion$None$lambda;
    tmp.x70_1 = new sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0(tmp_0);
    var tmp_1 = this;
    var tmp_2 = SelectionAdjustment$Companion$Character$lambda;
    tmp_1.y70_1 = new sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_0(tmp_2);
    var tmp_3 = this;
    var tmp_4 = SelectionAdjustment$Companion$Word$lambda;
    tmp_3.z70_1 = new sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_1(tmp_4);
    var tmp_5 = this;
    var tmp_6 = SelectionAdjustment$Companion$Paragraph$lambda;
    tmp_5.a71_1 = new sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_2(tmp_6);
    var tmp_7 = this;
    var tmp_8 = SelectionAdjustment$Companion$CharacterWithWordAccelerate$lambda;
    tmp_7.b71_1 = new sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_3(tmp_8);
  }
  var Companion_instance_3;
  function Companion_getInstance_15() {
    if (Companion_instance_3 == null)
      new Companion_2();
    return Companion_instance_3;
  }
  function ensureAtLeastOneChar(_this__u8e3s4, layout) {
    if (!isCollapsed(_this__u8e3s4, layout)) {
      return _this__u8e3s4;
    }
    var text = layout.e75().b75();
    var tmp;
    if (layout.m() > 1 ? true : layout.c75() == null) {
      tmp = true;
    } else {
      // Inline function 'kotlin.text.isEmpty' call
      tmp = charSequenceLength(text) === 0;
    }
    if (tmp) {
      return _this__u8e3s4;
    }
    return expandOneChar(_this__u8e3s4, layout);
  }
  function adjustToBoundaries(layout, boundaryFunction) {
    var crossed = layout.a75().equals(CrossStatus_CROSSED_getInstance());
    return new Selection(anchorOnBoundary(layout.r74(), crossed, true, layout.f75(), boundaryFunction), anchorOnBoundary(layout.z74(), crossed, false, layout.g75(), boundaryFunction), crossed);
  }
  function updateSelectionBoundary(_this__u8e3s4, info, previousSelectionAnchor) {
    var currentRawOffset = _this__u8e3s4.d75() ? info.u74_1 : info.v74_1;
    var currentSlot = _this__u8e3s4.d75() ? _this__u8e3s4.f75() : _this__u8e3s4.g75();
    if (!(currentSlot === info.t74_1)) {
      return info.y74(currentRawOffset);
    }
    var tmp = LazyThreadSafetyMode_NONE_getInstance();
    var currentRawLine$delegate = lazy(tmp, updateSelectionBoundary$lambda_1(info, currentRawOffset));
    var otherRawOffset = _this__u8e3s4.d75() ? info.v74_1 : info.u74_1;
    var tmp_0 = LazyThreadSafetyMode_NONE_getInstance();
    var anchorSnappedToWordBoundary$delegate = lazy(tmp_0, updateSelectionBoundary$lambda_2(info, currentRawOffset, otherRawOffset, _this__u8e3s4, currentRawLine$delegate));
    if (!info.s74_1.equals(previousSelectionAnchor.k70_1)) {
      return updateSelectionBoundary$lambda_0(anchorSnappedToWordBoundary$delegate);
    }
    var rawPreviousHandleOffset = info.w74_1;
    if (currentRawOffset === rawPreviousHandleOffset) {
      return previousSelectionAnchor;
    }
    var previousRawLine = info.x74_1.u3x(rawPreviousHandleOffset);
    if (!(updateSelectionBoundary$lambda(currentRawLine$delegate) === previousRawLine)) {
      return updateSelectionBoundary$lambda_0(anchorSnappedToWordBoundary$delegate);
    }
    var previousSelectionOffset = previousSelectionAnchor.j70_1;
    var previousSelectionWordBoundary = info.x74_1.s3x(previousSelectionOffset);
    if (!isExpanding(info, currentRawOffset, _this__u8e3s4.d75())) {
      return info.y74(currentRawOffset);
    }
    if (previousSelectionOffset === _TextRange___get_start__impl__ww4t90(previousSelectionWordBoundary) ? true : previousSelectionOffset === _TextRange___get_end__impl__gcdxpp(previousSelectionWordBoundary)) {
      return updateSelectionBoundary$lambda_0(anchorSnappedToWordBoundary$delegate);
    }
    return info.y74(currentRawOffset);
  }
  function expandOneChar(_this__u8e3s4, layout) {
    var info = layout.e75();
    var text = info.b75();
    var offset = info.u74_1;
    var lastOffset = text.length;
    var tmp;
    if (offset === 0) {
      var followingBreak = findFollowingBreak(text, 0);
      var tmp_0;
      if (layout.d75()) {
        tmp_0 = _this__u8e3s4.h74(changeOffset(_this__u8e3s4.l70_1, info, followingBreak), VOID, true);
      } else {
        tmp_0 = _this__u8e3s4.h74(VOID, changeOffset(_this__u8e3s4.m70_1, info, followingBreak), false);
      }
      tmp = tmp_0;
    } else if (offset === lastOffset) {
      var precedingBreak = findPrecedingBreak(text, lastOffset);
      var tmp_1;
      if (layout.d75()) {
        tmp_1 = _this__u8e3s4.h74(changeOffset(_this__u8e3s4.l70_1, info, precedingBreak), VOID, false);
      } else {
        tmp_1 = _this__u8e3s4.h74(VOID, changeOffset(_this__u8e3s4.m70_1, info, precedingBreak), true);
      }
      tmp = tmp_1;
    } else {
      var tmp1_safe_receiver = layout.c75();
      var crossed = (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.n70_1) === true;
      var tmp_2;
      if (!!(layout.d75() ^ crossed)) {
        tmp_2 = findPrecedingBreak(text, offset);
      } else {
        tmp_2 = findFollowingBreak(text, offset);
      }
      var newOffset = tmp_2;
      var tmp_3;
      if (layout.d75()) {
        tmp_3 = _this__u8e3s4.h74(changeOffset(_this__u8e3s4.l70_1, info, newOffset), VOID, crossed);
      } else {
        tmp_3 = _this__u8e3s4.h74(VOID, changeOffset(_this__u8e3s4.m70_1, info, newOffset), crossed);
      }
      tmp = tmp_3;
    }
    return tmp;
  }
  function anchorOnBoundary(_this__u8e3s4, crossed, isStart, slot, boundaryFunction) {
    var offset = isStart ? _this__u8e3s4.u74_1 : _this__u8e3s4.v74_1;
    if (!(slot === _this__u8e3s4.t74_1)) {
      return _this__u8e3s4.y74(offset);
    }
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.text.selection.anchorOnBoundary.<anonymous>' call
    var range = boundaryFunction.m74(_this__u8e3s4, offset);
    return _this__u8e3s4.y74(!!(isStart ^ crossed) ? _TextRange___get_start__impl__ww4t90(range) : _TextRange___get_end__impl__gcdxpp(range));
  }
  function snapToWordBoundary(_this__u8e3s4, currentLine, currentOffset, otherOffset, isStart, crossed) {
    var wordBoundary = _this__u8e3s4.x74_1.s3x(currentOffset);
    var wordStartLine = _this__u8e3s4.x74_1.u3x(_TextRange___get_start__impl__ww4t90(wordBoundary));
    var tmp;
    if (wordStartLine === currentLine) {
      tmp = _TextRange___get_start__impl__ww4t90(wordBoundary);
    } else if (currentLine >= _this__u8e3s4.x74_1.c3x()) {
      tmp = _this__u8e3s4.x74_1.x3x(_this__u8e3s4.x74_1.c3x() - 1 | 0);
    } else {
      tmp = _this__u8e3s4.x74_1.x3x(currentLine);
    }
    var start = tmp;
    var wordEndLine = _this__u8e3s4.x74_1.u3x(_TextRange___get_end__impl__gcdxpp(wordBoundary));
    var tmp_0;
    if (wordEndLine === currentLine) {
      tmp_0 = _TextRange___get_end__impl__gcdxpp(wordBoundary);
    } else if (currentLine >= _this__u8e3s4.x74_1.c3x()) {
      tmp_0 = _this__u8e3s4.x74_1.l42(_this__u8e3s4.x74_1.c3x() - 1 | 0);
    } else {
      tmp_0 = _this__u8e3s4.x74_1.l42(currentLine);
    }
    var end = tmp_0;
    if (start === otherOffset) {
      return _this__u8e3s4.y74(end);
    }
    if (end === otherOffset) {
      return _this__u8e3s4.y74(start);
    }
    var tmp_1;
    if (!!(isStart ^ crossed)) {
      tmp_1 = currentOffset <= end ? start : end;
    } else {
      tmp_1 = currentOffset >= start ? end : start;
    }
    var resultOffset = tmp_1;
    return _this__u8e3s4.y74(resultOffset);
  }
  function isExpanding(_this__u8e3s4, currentRawOffset, isStart) {
    if (_this__u8e3s4.w74_1 === -1) {
      return true;
    }
    if (currentRawOffset === _this__u8e3s4.w74_1) {
      return false;
    }
    var crossed = _this__u8e3s4.h75().equals(CrossStatus_CROSSED_getInstance());
    var tmp;
    if (!!(isStart ^ crossed)) {
      tmp = currentRawOffset < _this__u8e3s4.w74_1;
    } else {
      tmp = currentRawOffset > _this__u8e3s4.w74_1;
    }
    return tmp;
  }
  function changeOffset(_this__u8e3s4, info, newOffset) {
    var tmp0_direction = info.x74_1.r3x(newOffset);
    return _this__u8e3s4.f74(tmp0_direction, newOffset);
  }
  function updateSelectionBoundary$lambda($currentRawLine$delegate) {
    // Inline function 'kotlin.getValue' call
    getLocalDelegateReference('currentRawLine', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $currentRawLine$delegate.q2();
  }
  function updateSelectionBoundary$lambda_0($anchorSnappedToWordBoundary$delegate) {
    // Inline function 'kotlin.getValue' call
    getLocalDelegateReference('anchorSnappedToWordBoundary', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $anchorSnappedToWordBoundary$delegate.q2();
  }
  function updateSelectionBoundary$lambda_1($info, $currentRawOffset) {
    return function () {
      return $info.x74_1.u3x($currentRawOffset);
    };
  }
  function updateSelectionBoundary$lambda_2($info, $currentRawOffset, $otherRawOffset, $this_updateSelectionBoundary, $currentRawLine$delegate) {
    return function () {
      return snapToWordBoundary($info, updateSelectionBoundary$lambda($currentRawLine$delegate), $currentRawOffset, $otherRawOffset, $this_updateSelectionBoundary.d75(), $this_updateSelectionBoundary.a75().equals(CrossStatus_CROSSED_getInstance()));
    };
  }
  function selectionGestureInput(_this__u8e3s4, mouseSelectionObserver, textDragObserver) {
    return composed(_this__u8e3s4, VOID, selectionGestureInput$lambda(mouseSelectionObserver, textDragObserver));
  }
  function ClicksCounter(viewConfiguration, clicksSlop) {
    this.i75_1 = viewConfiguration;
    this.j75_1 = clicksSlop;
    this.k75_1 = 0;
    this.l75_1 = null;
  }
  protoOf(ClicksCounter).m75 = function (event) {
    var currentPrevEvent = this.l75_1;
    if ((!(currentPrevEvent == null) ? this.o75(currentPrevEvent, event) : false) ? this.n75(currentPrevEvent, event) : false) {
      this.k75_1 = this.k75_1 + 1 | 0;
    } else {
      this.k75_1 = 1;
    }
    this.l75_1 = event;
  };
  protoOf(ClicksCounter).o75 = function (prevClick, newClick) {
    return newClick.g4z_1.fb(prevClick.g4z_1).x9(this.i75_1.z5o()) < 0;
  };
  protoOf(ClicksCounter).n75 = function (prevClick, newClick) {
    return Offset__getDistance_impl_pclvxn(Offset__minus_impl_hoj2c0(newClick.h4z_1, prevClick.h4z_1)) < this.j75_1;
  };
  function awaitDown(_this__u8e3s4, $completion) {
    var tmp = new $awaitDownCOROUTINE$7(_this__u8e3s4, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  }
  function get_isPrecisePointer(_this__u8e3s4) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastAll' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var this_0 = _this__u8e3s4.z4y_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.m() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.n(index);
          // Inline function 'androidx.compose.ui.util.fastAll.<anonymous>' call
          // Inline function 'androidx.compose.foundation.text.selection.<get-isPrecisePointer>.<anonymous>' call
          if (!(item.n4z_1 === Companion_getInstance_9().x50_1)) {
            tmp$ret$1 = false;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = true;
    }
    return tmp$ret$1;
  }
  function mouseSelection(_this__u8e3s4, observer, clicksCounter, down, $completion) {
    var tmp = new $mouseSelectionCOROUTINE$8(_this__u8e3s4, observer, clicksCounter, down, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  }
  function touchSelection(_this__u8e3s4, observer, down, $completion) {
    var tmp = new $touchSelectionCOROUTINE$9(_this__u8e3s4, observer, down, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  }
  function distanceIsTolerable(_this__u8e3s4, offset1, offset2) {
    return Offset__getDistance_impl_pclvxn(Offset__minus_impl_hoj2c0(offset1, offset2)) < _this__u8e3s4.d56().a5p();
  }
  function invoke$lambda($currentMouseSelectionObserver$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('currentMouseSelectionObserver', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $currentMouseSelectionObserver$delegate.q2();
  }
  function invoke$lambda_0($currentTextDragObserver$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('currentTextDragObserver', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $currentTextDragObserver$delegate.q2();
  }
  function selectionGestureInput$lambda$slambda$slambda($clicksCounter, $currentMouseSelectionObserver$delegate, $currentTextDragObserver$delegate, resultContinuation) {
    this.k77_1 = $clicksCounter;
    this.l77_1 = $currentMouseSelectionObserver$delegate;
    this.m77_1 = $currentTextDragObserver$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(selectionGestureInput$lambda$slambda$slambda).y6t = function ($this$awaitEachGesture, $completion) {
    var tmp = this.z6t($this$awaitEachGesture, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(selectionGestureInput$lambda$slambda$slambda).yc = function (p1, $completion) {
    return this.y6t((!(p1 == null) ? isInterface(p1, AwaitPointerEventScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(selectionGestureInput$lambda$slambda$slambda).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 5;
            this.ac_1 = 1;
            suspendResult = awaitDown(this.n77_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.o77_1 = suspendResult;
            var tmp_0;
            if (get_isPrecisePointer(this.o77_1) ? get_isPrimaryPressed(this.o77_1.a4z_1) : false) {
              var tmp$ret$0;
              l$ret$1: do {
                var this_0 = this.o77_1.z4y_1;
                var inductionVariable = 0;
                var last = this_0.m() - 1 | 0;
                if (inductionVariable <= last)
                  do {
                    var index = inductionVariable;
                    inductionVariable = inductionVariable + 1 | 0;
                    var item = this_0.n(index);
                    if (!!item.a51()) {
                      tmp$ret$0 = false;
                      break l$ret$1;
                    }
                  }
                   while (inductionVariable <= last);
                tmp$ret$0 = true;
              }
               while (false);
              tmp_0 = tmp$ret$0;
            } else {
              tmp_0 = false;
            }

            if (tmp_0) {
              this.ac_1 = 3;
              suspendResult = mouseSelection(this.n77_1, invoke$lambda(this.l77_1), this.k77_1, this.o77_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (!get_isPrecisePointer(this.o77_1)) {
                this.ac_1 = 2;
                suspendResult = touchSelection(this.n77_1, invoke$lambda_0(this.m77_1), this.o77_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.ac_1 = 4;
                continue $sm;
              }
            }

          case 2:
            this.ac_1 = 4;
            continue $sm;
          case 3:
            this.ac_1 = 4;
            continue $sm;
          case 4:
            return Unit_instance;
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
  protoOf(selectionGestureInput$lambda$slambda$slambda).z6t = function ($this$awaitEachGesture, completion) {
    var i = new selectionGestureInput$lambda$slambda$slambda(this.k77_1, this.l77_1, this.m77_1, completion);
    i.n77_1 = $this$awaitEachGesture;
    return i;
  };
  function selectionGestureInput$lambda$slambda$slambda_0($clicksCounter, $currentMouseSelectionObserver$delegate, $currentTextDragObserver$delegate, resultContinuation) {
    var i = new selectionGestureInput$lambda$slambda$slambda($clicksCounter, $currentMouseSelectionObserver$delegate, $currentTextDragObserver$delegate, resultContinuation);
    var l = function ($this$awaitEachGesture, $completion) {
      return i.y6t($this$awaitEachGesture, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function selectionGestureInput$lambda$slambda($currentMouseSelectionObserver$delegate, $currentTextDragObserver$delegate, resultContinuation) {
    this.x77_1 = $currentMouseSelectionObserver$delegate;
    this.y77_1 = $currentTextDragObserver$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(selectionGestureInput$lambda$slambda).b78 = function ($this$pointerInput, $completion) {
    var tmp = this.c78($this$pointerInput, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(selectionGestureInput$lambda$slambda).yc = function (p1, $completion) {
    return this.b78((!(p1 == null) ? isInterface(p1, PointerInputScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(selectionGestureInput$lambda$slambda).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 2;
            var tmp_0 = this;
            var tmp_1 = this.z77_1.d56();
            tmp_0.a78_1 = new ClicksCounter(tmp_1, this.z77_1.h2x(_Dp___init__impl__ms3zkb(50)));
            this.ac_1 = 1;
            suspendResult = awaitEachGesture(this.z77_1, selectionGestureInput$lambda$slambda$slambda_0(this.a78_1, this.x77_1, this.y77_1, null), this);
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
  protoOf(selectionGestureInput$lambda$slambda).c78 = function ($this$pointerInput, completion) {
    var i = new selectionGestureInput$lambda$slambda(this.x77_1, this.y77_1, completion);
    i.z77_1 = $this$pointerInput;
    return i;
  };
  function selectionGestureInput$lambda$slambda_0($currentMouseSelectionObserver$delegate, $currentTextDragObserver$delegate, resultContinuation) {
    var i = new selectionGestureInput$lambda$slambda($currentMouseSelectionObserver$delegate, $currentTextDragObserver$delegate, resultContinuation);
    var l = function ($this$pointerInput, $completion) {
      return i.b78($this$pointerInput, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function selectionGestureInput$lambda($mouseSelectionObserver, $textDragObserver) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.a1s(849554210);
      sourceInformation($composer_0, 'C103@4099L44,104@4179L38,105@4246L554:SelectionGestures.kt#eksfi3');
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(849554210, $changed, -1, 'androidx.compose.foundation.text.selection.selectionGestureInput.<anonymous> (SelectionGestures.kt:103)');
        tmp = Unit_instance;
      }
      var currentMouseSelectionObserver$delegate = rememberUpdatedState($mouseSelectionObserver, $composer_0, 0);
      var currentTextDragObserver$delegate = rememberUpdatedState($textDragObserver, $composer_0, 0);
      $composer_0.a1s(-1333381069);
      sourceInformation($composer_0, 'CC(remember):SelectionGestures.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!($composer_0.s1j(currentMouseSelectionObserver$delegate) | $composer_0.s1j(currentTextDragObserver$delegate));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.m1t();
      var tmp_0;
      if (invalid ? true : it === Companion_getInstance_1().s1m_1) {
        // Inline function 'androidx.compose.foundation.text.selection.selectionGestureInput.<anonymous>.<anonymous>' call
        var value = selectionGestureInput$lambda$slambda_0(currentMouseSelectionObserver$delegate, currentTextDragObserver$delegate, null);
        $composer_0.s1t(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp1_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.b1s();
      var tmp0 = pointerInput($this$composed, Unit_instance, tmp1_group);
      var tmp_2;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_2 = Unit_instance;
      }
      $composer_0.b1s();
      return tmp0;
    };
  }
  function mouseSelection$lambda($observer) {
    return function (it) {
      var tmp;
      if ($observer.m71(it.h4z_1)) {
        it.d51();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function mouseSelection$lambda_0($observer, $selectionAdjustment) {
    return function (it) {
      var tmp;
      if ($observer.o71(it.h4z_1, $selectionAdjustment)) {
        it.d51();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function touchSelection$lambda($observer) {
    return function (it) {
      $observer.d71(positionChange(it));
      it.d51();
      return Unit_instance;
    };
  }
  function $awaitDownCOROUTINE$7(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x75_1 = _this__u8e3s4;
  }
  protoOf($awaitDownCOROUTINE$7).mc = function () {
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
            this.ac_1 = 2;
            suspendResult = this.x75_1.g56(PointerEventPass_Main_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.y75_1 = suspendResult;
            var tmp$ret$0;
            l$ret$1: do {
              var this_0 = this.y75_1.z4y_1;
              var inductionVariable = 0;
              var last = this_0.m() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = this_0.n(index);
                  if (!changedToDownIgnoreConsumed(item)) {
                    tmp$ret$0 = false;
                    break l$ret$1;
                  }
                }
                 while (inductionVariable <= last);
              tmp$ret$0 = true;
            }
             while (false);
            if (!tmp$ret$0) {
              this.ac_1 = 1;
              continue $sm;
            }

            this.ac_1 = 3;
            continue $sm;
          case 3:
            return this.y75_1;
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
  function $mouseSelectionCOROUTINE$8(_this__u8e3s4, observer, clicksCounter, down, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h76_1 = _this__u8e3s4;
    this.i76_1 = observer;
    this.j76_1 = clicksCounter;
    this.k76_1 = down;
  }
  protoOf($mouseSelectionCOROUTINE$8).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 6;
            this.l76_1 = this.k76_1.z4y_1.n(0);
            this.j76_1.m75(this.l76_1);
            if (get_isShiftPressed(this.k76_1.b4z_1)) {
              this.m76_1 = this.i76_1.l71(this.l76_1.h4z_1);
              if (this.m76_1) {
                this.ac_1 = 3;
                suspendResult = drag(this.h76_1, this.l76_1.f4z_1, mouseSelection$lambda(this.i76_1), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.ac_1 = 4;
                continue $sm;
              }
            } else {
              var tmp_0 = this;
              switch (this.j76_1.k75_1) {
                case 1:
                  tmp_0.n76_1 = Companion_getInstance_15().x70_1;
                  break;
                case 2:
                  tmp_0.n76_1 = Companion_getInstance_15().z70_1;
                  break;
                default:
                  tmp_0.n76_1 = Companion_getInstance_15().a71_1;
                  break;
              }
              this.o76_1 = this.i76_1.n71(this.l76_1.h4z_1, this.n76_1);
              if (this.o76_1) {
                this.ac_1 = 1;
                suspendResult = drag(this.h76_1, this.l76_1.f4z_1, mouseSelection$lambda_0(this.i76_1, this.n76_1), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.ac_1 = 2;
                continue $sm;
              }
            }

          case 1:
            var shouldConsumeUp = suspendResult;
            if (shouldConsumeUp) {
              var this_0 = this.h76_1.c56().z4y_1;
              var inductionVariable = 0;
              var last = this_0.m() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = this_0.n(index);
                  if (changedToUp(item)) {
                    item.d51();
                  }
                }
                 while (inductionVariable <= last);
            }

            this.i76_1.p71();
            this.ac_1 = 2;
            continue $sm;
          case 2:
            this.ac_1 = 5;
            continue $sm;
          case 3:
            var shouldConsumeUp_0 = suspendResult;
            if (shouldConsumeUp_0) {
              var this_1 = this.h76_1.c56().z4y_1;
              var inductionVariable_0 = 0;
              var last_0 = this_1.m() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = this_1.n(index_0);
                  if (changedToUp(item_0)) {
                    item_0.d51();
                  }
                }
                 while (inductionVariable_0 <= last_0);
            }

            this.i76_1.p71();
            this.ac_1 = 4;
            continue $sm;
          case 4:
            this.ac_1 = 5;
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
  function $touchSelectionCOROUTINE$9(_this__u8e3s4, observer, down, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x76_1 = _this__u8e3s4;
    this.y76_1 = observer;
    this.z76_1 = down;
  }
  protoOf($touchSelectionCOROUTINE$9).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 6;
            this.bc_1 = 5;
            this.a77_1 = first(this.z76_1.z4y_1);
            this.ac_1 = 1;
            suspendResult = awaitLongPressOrCancellation(this.x76_1, this.a77_1.f4z_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.b77_1 = suspendResult;
            if (!(this.b77_1 == null) ? distanceIsTolerable(this.x76_1, this.a77_1.h4z_1, this.b77_1.h4z_1) : false) {
              this.y76_1.w70(this.b77_1.h4z_1);
              this.ac_1 = 2;
              suspendResult = drag(this.x76_1, this.b77_1.f4z_1, touchSelection$lambda(this.y76_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.ac_1 = 4;
              continue $sm;
            }

          case 2:
            if (suspendResult) {
              var this_0 = this.x76_1.c56().z4y_1;
              var inductionVariable = 0;
              var last = this_0.m() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = this_0.n(index);
                  if (changedToUp(item)) {
                    item.d51();
                  }
                }
                 while (inductionVariable <= last);
              this.y76_1.f71();
              this.ac_1 = 3;
              continue $sm;
            } else {
              this.y76_1.q5h();
              this.ac_1 = 3;
              continue $sm;
            }

          case 3:
            this.ac_1 = 4;
            continue $sm;
          case 4:
            this.bc_1 = 6;
            this.ac_1 = 7;
            continue $sm;
          case 5:
            this.bc_1 = 6;
            var tmp_0 = this.dc_1;
            if (tmp_0 instanceof CancellationException) {
              var c = this.dc_1;
              this.y76_1.q5h();
              throw c;
            } else {
              throw this.dc_1;
            }

          case 6:
            throw this.dc_1;
          case 7:
            this.bc_1 = 6;
            return Unit_instance;
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
  var CrossStatus_CROSSED_instance;
  var CrossStatus_NOT_CROSSED_instance;
  var CrossStatus_COLLAPSED_instance;
  var CrossStatus_entriesInitialized;
  function CrossStatus_initEntries() {
    if (CrossStatus_entriesInitialized)
      return Unit_instance;
    CrossStatus_entriesInitialized = true;
    CrossStatus_CROSSED_instance = new CrossStatus('CROSSED', 0);
    CrossStatus_NOT_CROSSED_instance = new CrossStatus('NOT_CROSSED', 1);
    CrossStatus_COLLAPSED_instance = new CrossStatus('COLLAPSED', 2);
  }
  function CrossStatus(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function isCollapsed(_this__u8e3s4, layout) {
    if (_this__u8e3s4 == null)
      return true;
    if (layout == null)
      return true;
    if (_this__u8e3s4.l70_1.k70_1.equals(_this__u8e3s4.m70_1.k70_1)) {
      return _this__u8e3s4.l70_1.j70_1 === _this__u8e3s4.m70_1.j70_1;
    }
    var maxAnchor = _this__u8e3s4.n70_1 ? _this__u8e3s4.l70_1 : _this__u8e3s4.m70_1;
    if (!(maxAnchor.j70_1 === 0)) {
      return false;
    }
    var minAnchor = _this__u8e3s4.n70_1 ? _this__u8e3s4.m70_1 : _this__u8e3s4.l70_1;
    if (!(layout.d78().e78() === minAnchor.j70_1)) {
      return false;
    }
    var allTextsEmpty = {_v: true};
    layout.f78(isCollapsed$lambda(allTextsEmpty));
    return allTextsEmpty._v;
  }
  function getTextDirectionForOffset(_this__u8e3s4, offset) {
    return isOffsetAnEmptyLine(_this__u8e3s4, offset) ? _this__u8e3s4.q3x(offset) : _this__u8e3s4.r3x(offset);
  }
  function isOffsetAnEmptyLine(_this__u8e3s4, offset) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    var this_0 = _this__u8e3s4.c42_1.o42_1;
    if (charSequenceLength(this_0) === 0) {
      tmp = true;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.text.selection.isOffsetAnEmptyLine.<anonymous>' call
      var currentLine = _this__u8e3s4.u3x(offset);
      tmp = (offset === 0 ? true : !(currentLine === _this__u8e3s4.u3x(offset - 1 | 0))) ? offset === _this__u8e3s4.c42_1.o42_1.a() ? true : !(currentLine === _this__u8e3s4.u3x(offset + 1 | 0)) : false;
    }
    return tmp;
  }
  function isCollapsed$lambda($allTextsEmpty) {
    return function (it) {
      var tmp;
      // Inline function 'kotlin.text.isNotEmpty' call
      var this_0 = it.b75();
      if (charSequenceLength(this_0) > 0) {
        $allTextsEmpty._v = false;
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function CrossStatus_CROSSED_getInstance() {
    CrossStatus_initEntries();
    return CrossStatus_CROSSED_instance;
  }
  function CrossStatus_NOT_CROSSED_getInstance() {
    CrossStatus_initEntries();
    return CrossStatus_NOT_CROSSED_instance;
  }
  function CrossStatus_COLLAPSED_getInstance() {
    CrossStatus_initEntries();
    return CrossStatus_COLLAPSED_instance;
  }
  function get_LocalSelectionRegistrar() {
    _init_properties_SelectionRegistrar_kt__oigj6p();
    return LocalSelectionRegistrar;
  }
  var LocalSelectionRegistrar;
  function hasSelection(_this__u8e3s4, selectableId) {
    _init_properties_SelectionRegistrar_kt__oigj6p();
    var tmp1_safe_receiver = _this__u8e3s4 == null ? null : _this__u8e3s4.h70();
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.u2(selectableId);
    return tmp2_elvis_lhs == null ? false : tmp2_elvis_lhs;
  }
  function LocalSelectionRegistrar$lambda() {
    _init_properties_SelectionRegistrar_kt__oigj6p();
    return null;
  }
  var properties_initialized_SelectionRegistrar_kt_shxs4d;
  function _init_properties_SelectionRegistrar_kt__oigj6p() {
    if (!properties_initialized_SelectionRegistrar_kt_shxs4d) {
      properties_initialized_SelectionRegistrar_kt_shxs4d = true;
      LocalSelectionRegistrar = compositionLocalOf(VOID, LocalSelectionRegistrar$lambda);
    }
  }
  function get_LocalTextSelectionColors() {
    _init_properties_TextSelectionColors_kt__lgomir();
    return LocalTextSelectionColors;
  }
  var LocalTextSelectionColors;
  function TextSelectionColors(handleColor, backgroundColor) {
    this.v6u_1 = handleColor;
    this.w6u_1 = backgroundColor;
  }
  protoOf(TextSelectionColors).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextSelectionColors))
      return false;
    if (!equals(this.v6u_1, other.v6u_1))
      return false;
    if (!equals(this.w6u_1, other.w6u_1))
      return false;
    return true;
  };
  protoOf(TextSelectionColors).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.v6u_1);
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.w6u_1) | 0;
    return result;
  };
  protoOf(TextSelectionColors).toString = function () {
    return 'SelectionColors(selectionHandleColor=' + new Color(this.v6u_1) + ', ' + ('selectionBackgroundColor=' + new Color(this.w6u_1) + ')');
  };
  function LocalTextSelectionColors$lambda() {
    _init_properties_TextSelectionColors_kt__lgomir();
    return get_DefaultTextSelectionColors();
  }
  var properties_initialized_TextSelectionColors_kt_x2xmyn;
  function _init_properties_TextSelectionColors_kt__lgomir() {
    if (!properties_initialized_TextSelectionColors_kt_x2xmyn) {
      properties_initialized_TextSelectionColors_kt_x2xmyn = true;
      LocalTextSelectionColors = compositionLocalOf(VOID, LocalTextSelectionColors$lambda);
    }
  }
  var TapIndicationDelay;
  var isInTouchMode;
  function makeSelectionModifier(_this__u8e3s4, selectableId, layoutCoordinates) {
    return makeDefaultSelectionModifier(_this__u8e3s4, selectableId, layoutCoordinates);
  }
  function get_DefaultSelectionColor() {
    _init_properties_DefaultTextSelectionColors_js_kt__ohmec7();
    return DefaultSelectionColor;
  }
  var DefaultSelectionColor;
  function get_DefaultTextSelectionColors() {
    _init_properties_DefaultTextSelectionColors_js_kt__ohmec7();
    return DefaultTextSelectionColors;
  }
  var DefaultTextSelectionColors;
  var properties_initialized_DefaultTextSelectionColors_js_kt_i7z293;
  function _init_properties_DefaultTextSelectionColors_js_kt__ohmec7() {
    if (!properties_initialized_DefaultTextSelectionColors_js_kt_i7z293) {
      properties_initialized_DefaultTextSelectionColors_js_kt_i7z293 = true;
      DefaultSelectionColor = Color_0(new Long(-12417292, 0));
      DefaultTextSelectionColors = new TextSelectionColors(get_DefaultSelectionColor(), Color__copy$default_impl_ectz3s(get_DefaultSelectionColor(), 0.4));
    }
  }
  function _isSystemInDarkTheme($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1974537350, 'C(_isSystemInDarkTheme)49@2205L7:DarkTheme.skiko.kt#71ulvw');
    if (isTraceInProgress()) {
      traceEventStart(1974537350, $changed, -1, 'androidx.compose.foundation._isSystemInDarkTheme (DarkTheme.skiko.kt:48)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalSystemTheme();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.y1t(this_0);
    sourceInformationMarkerEnd($composer_1);
    var tmp0_0 = tmp0.equals(SystemTheme_Dark_getInstance());
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0_0;
  }
  function textPointerHoverIcon(_this__u8e3s4, selectionRegistrar) {
    return selectionRegistrar == null ? _this__u8e3s4 : pointerHoverIcon(_this__u8e3s4, get_textPointerIcon());
  }
  function findFollowingBreak(_this__u8e3s4, index) {
    var it = Companion_getInstance_10().k2z();
    it.s2z(_this__u8e3s4);
    return it.r2z(index);
  }
  function findPrecedingBreak(_this__u8e3s4, index) {
    var it = Companion_getInstance_10().k2z();
    it.s2z(_this__u8e3s4);
    return it.q2z(index);
  }
  function get_textPointerIcon() {
    _init_properties_TextPointerIcon_skiko_kt__4sfdky();
    return textPointerIcon;
  }
  var textPointerIcon;
  var properties_initialized_TextPointerIcon_skiko_kt_3qxo0w;
  function _init_properties_TextPointerIcon_skiko_kt__4sfdky() {
    if (!properties_initialized_TextPointerIcon_skiko_kt_3qxo0w) {
      properties_initialized_TextPointerIcon_skiko_kt_3qxo0w = true;
      textPointerIcon = Companion_getInstance_11().p51_1;
    }
  }
  //region block: post-declaration
  protoOf(SelectableTextAnnotatedStringNode).h5h = onMeasureResultChanged;
  protoOf(TextAnnotatedStringNode).h5h = onMeasureResultChanged;
  protoOf(TextAnnotatedStringNode).t5h = get_shouldClearDescendantSemantics;
  protoOf(TextAnnotatedStringNode).u5h = get_shouldMergeDescendantSemantics;
  protoOf(TextStringSimpleNode).h5h = onMeasureResultChanged;
  protoOf(TextStringSimpleNode).t5h = get_shouldClearDescendantSemantics;
  protoOf(TextStringSimpleNode).u5h = get_shouldMergeDescendantSemantics;
  //endregion
  //region block: init
  DefaultMinLines = 1;
  SNAPSHOTS_INTERVAL_MILLIS = 5000;
  Companion_instance_1 = new Companion_0();
  TapIndicationDelay = new Long(0, 0);
  isInTouchMode = false;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = BasicText;
  _.$_$.b = isSystemInDarkTheme;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-foundation-foundation.js.map
