(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './compose-multiplatform-core-compose-ui-ui.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-compose-runtime-runtime.js', './compose-multiplatform-core-compose-ui-ui-text.js', './compose-multiplatform-core-compose-foundation-foundation.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./compose-multiplatform-core-compose-ui-ui-text.js'), require('./compose-multiplatform-core-compose-foundation-foundation.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'components-resources-library'.");
    }
    if (typeof this['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'components-resources-library'.");
    }
    if (typeof this['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'components-resources-library'.");
    }
    if (typeof this['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'components-resources-library'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'components-resources-library'.");
    }
    if (typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'components-resources-library'.");
    }
    if (typeof this['compose-multiplatform-core-compose-ui-ui-text'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'compose-multiplatform-core-compose-ui-ui-text' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-text' is loaded prior to 'components-resources-library'.");
    }
    if (typeof this['compose-multiplatform-core-compose-foundation-foundation'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'compose-multiplatform-core-compose-foundation-foundation' was not found. Please, check whether 'compose-multiplatform-core-compose-foundation-foundation' is loaded prior to 'components-resources-library'.");
    }
    root['components-resources-library'] = factory(typeof this['components-resources-library'] === 'undefined' ? {} : this['components-resources-library'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-compose-ui-ui-graphics'], this['compose-multiplatform-core-compose-ui-ui-unit'], this['compose-multiplatform-core-compose-ui-ui'], this['kotlinx-coroutines-core'], this['compose-multiplatform-core-compose-runtime-runtime'], this['compose-multiplatform-core-compose-ui-ui-text'], this['compose-multiplatform-core-compose-foundation-foundation']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui_text, kotlin_org_jetbrains_compose_foundation_foundation) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.cf;
  var classMeta = kotlin_kotlin.$_$.qd;
  var setMetadataFor = kotlin_kotlin.$_$.df;
  var VOID = kotlin_kotlin.$_$.g;
  var interfaceMeta = kotlin_kotlin.$_$.ge;
  var ImageBitmap = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g2;
  var Builder = kotlin_org_jetbrains_compose_ui_ui.$_$.f;
  var KProperty0 = kotlin_kotlin.$_$.lg;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ce;
  var lazy = kotlin_kotlin.$_$.el;
  var Mutex = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n1;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.z;
  var getStringHashCode = kotlin_kotlin.$_$.de;
  var THROW_CCE = kotlin_kotlin.$_$.ck;
  var objectMeta = kotlin_kotlin.$_$.bf;
  var THROW_IAE = kotlin_kotlin.$_$.dk;
  var enumEntries = kotlin_kotlin.$_$.fd;
  var Unit_getInstance = kotlin_kotlin.$_$.v5;
  var Enum = kotlin_kotlin.$_$.qj;
  var Annotation = kotlin_kotlin.$_$.ij;
  var hashCode = kotlin_kotlin.$_$.ee;
  var equals = kotlin_kotlin.$_$.ud;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_text.$_$.j1;
  var isSystemInDarkTheme = kotlin_org_jetbrains_compose_foundation_foundation.$_$.k;
  var get_LocalDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.s2;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q1;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v1;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t1;
  var Exception = kotlin_kotlin.$_$.sj;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.t1;
  var captureStack = kotlin_kotlin.$_$.kd;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.j1;
  var numberToInt = kotlin_kotlin.$_$.ye;
  var CoroutineImpl = kotlin_kotlin.$_$.zc;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.kc;
  var Default_getInstance = kotlin_kotlin.$_$.c5;
  var Font = kotlin_org_jetbrains_compose_ui_ui_text.$_$.k;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ImageCache, 'ImageCache', interfaceMeta);
  setMetadataFor(Bitmap, 'Bitmap', classMeta, VOID, [ImageCache]);
  setMetadataFor(Vector, 'Vector', classMeta, VOID, [ImageCache]);
  setMetadataFor(Resource, 'Resource', classMeta);
  setMetadataFor(DrawableResource, 'DrawableResource', classMeta, Resource);
  setMetadataFor(Qualifier, 'Qualifier', interfaceMeta);
  setMetadataFor(LanguageQualifier, 'LanguageQualifier', classMeta, VOID, [Qualifier]);
  setMetadataFor(RegionQualifier, 'RegionQualifier', classMeta, VOID, [Qualifier]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(ThemeQualifier, 'ThemeQualifier', classMeta, Enum, [Enum, Qualifier]);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(DensityQualifier, 'DensityQualifier', classMeta, Enum, [Enum, Qualifier]);
  setMetadataFor(InternalResourceApi, 'InternalResourceApi', classMeta, VOID, [Annotation]);
  setMetadataFor(ExperimentalResourceApi, 'ExperimentalResourceApi', classMeta, VOID, [Annotation]);
  setMetadataFor(ResourceItem, 'ResourceItem', classMeta);
  setMetadataFor(ComposeEnvironment, 'ComposeEnvironment', interfaceMeta);
  setMetadataFor(ResourceEnvironment, 'ResourceEnvironment', classMeta);
  setMetadataFor(DefaultComposeEnvironment$1, VOID, classMeta, VOID, [ComposeEnvironment]);
  setMetadataFor(ResourceReader, 'ResourceReader', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(MissingResourceException, 'MissingResourceException', classMeta, Exception);
  setMetadataFor(DefaultResourceReader$1, VOID, classMeta, VOID, [ResourceReader], VOID, VOID, VOID, [1]);
  setMetadataFor(StringItem, 'StringItem', interfaceMeta);
  setMetadataFor(Value, 'Value', classMeta, VOID, [StringItem]);
  setMetadataFor(Array_0, 'Array', classMeta, VOID, [StringItem]);
  setMetadataFor($readResourceBytesCOROUTINE$0, '$readResourceBytesCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(WebResourcesConfiguration, 'WebResourcesConfiguration', objectMeta);
  //endregion
  function get_emptyImageBitmap() {
    _init_properties_ImageResources_kt__6e1y7e();
    // Inline function 'kotlin.getValue' call
    var this_0 = emptyImageBitmap$delegate;
    emptyImageBitmap$factory();
    return this_0.get_value_j01efc_k$();
  }
  var emptyImageBitmap$delegate;
  function get_emptyImageVector() {
    _init_properties_ImageResources_kt__6e1y7e();
    // Inline function 'kotlin.getValue' call
    var this_0 = emptyImageVector$delegate;
    emptyImageVector$factory();
    return this_0.get_value_j01efc_k$();
  }
  var emptyImageVector$delegate;
  function get_imageCacheMutex() {
    _init_properties_ImageResources_kt__6e1y7e();
    return imageCacheMutex;
  }
  var imageCacheMutex;
  function get_imageCache() {
    _init_properties_ImageResources_kt__6e1y7e();
    return imageCache;
  }
  var imageCache;
  function Bitmap(bitmap) {
    this.bitmap_1 = bitmap;
  }
  protoOf(Bitmap).get_bitmap_bfxu7s_k$ = function () {
    return this.bitmap_1;
  };
  function Vector(vector) {
    this.vector_1 = vector;
  }
  protoOf(Vector).get_vector_kuceh8_k$ = function () {
    return this.vector_1;
  };
  function ImageCache() {
  }
  function DrawableResource(id, items) {
    Resource.call(this, id, items);
  }
  function emptyImageBitmap$delegate$lambda() {
    _init_properties_ImageResources_kt__6e1y7e();
    return ImageBitmap(1, 1);
  }
  function emptyImageVector$delegate$lambda() {
    _init_properties_ImageResources_kt__6e1y7e();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp = _Dp___init__impl__ms3zkb(1);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(1);
    return (new Builder('emptyImageVector', tmp, tmp$ret$1, 1.0, 1.0)).build_1k0s4u_k$();
  }
  function emptyImageBitmap$factory() {
    return getPropertyCallableRef('emptyImageBitmap', 0, KProperty0, function () {
      return get_emptyImageBitmap();
    }, null);
  }
  function emptyImageVector$factory() {
    return getPropertyCallableRef('emptyImageVector', 0, KProperty0, function () {
      return get_emptyImageVector();
    }, null);
  }
  var properties_initialized_ImageResources_kt_9gvoi4;
  function _init_properties_ImageResources_kt__6e1y7e() {
    if (!properties_initialized_ImageResources_kt_9gvoi4) {
      properties_initialized_ImageResources_kt_9gvoi4 = true;
      emptyImageBitmap$delegate = lazy(emptyImageBitmap$delegate$lambda);
      emptyImageVector$delegate = lazy(emptyImageVector$delegate$lambda);
      imageCacheMutex = Mutex();
      // Inline function 'kotlin.collections.mutableMapOf' call
      imageCache = LinkedHashMap_init_$Create$();
    }
  }
  function LanguageQualifier(language) {
    this.language_1 = language;
  }
  protoOf(LanguageQualifier).get_language_cjhhk1_k$ = function () {
    return this.language_1;
  };
  protoOf(LanguageQualifier).component1_7eebsc_k$ = function () {
    return this.language_1;
  };
  protoOf(LanguageQualifier).copy_a35qlh_k$ = function (language) {
    return new LanguageQualifier(language);
  };
  protoOf(LanguageQualifier).copy$default_xh84it_k$ = function (language, $super) {
    language = language === VOID ? this.language_1 : language;
    return $super === VOID ? this.copy_a35qlh_k$(language) : $super.copy_a35qlh_k$.call(this, language);
  };
  protoOf(LanguageQualifier).toString = function () {
    return 'LanguageQualifier(language=' + this.language_1 + ')';
  };
  protoOf(LanguageQualifier).hashCode = function () {
    return getStringHashCode(this.language_1);
  };
  protoOf(LanguageQualifier).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LanguageQualifier))
      return false;
    var tmp0_other_with_cast = other instanceof LanguageQualifier ? other : THROW_CCE();
    if (!(this.language_1 === tmp0_other_with_cast.language_1))
      return false;
    return true;
  };
  function RegionQualifier(region) {
    this.region_1 = region;
  }
  protoOf(RegionQualifier).get_region_iy88ot_k$ = function () {
    return this.region_1;
  };
  protoOf(RegionQualifier).component1_7eebsc_k$ = function () {
    return this.region_1;
  };
  protoOf(RegionQualifier).copy_a35qlh_k$ = function (region) {
    return new RegionQualifier(region);
  };
  protoOf(RegionQualifier).copy$default_7kme0n_k$ = function (region, $super) {
    region = region === VOID ? this.region_1 : region;
    return $super === VOID ? this.copy_a35qlh_k$(region) : $super.copy_a35qlh_k$.call(this, region);
  };
  protoOf(RegionQualifier).toString = function () {
    return 'RegionQualifier(region=' + this.region_1 + ')';
  };
  protoOf(RegionQualifier).hashCode = function () {
    return getStringHashCode(this.region_1);
  };
  protoOf(RegionQualifier).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RegionQualifier))
      return false;
    var tmp0_other_with_cast = other instanceof RegionQualifier ? other : THROW_CCE();
    if (!(this.region_1 === tmp0_other_with_cast.region_1))
      return false;
    return true;
  };
  var ThemeQualifier_LIGHT_instance;
  var ThemeQualifier_DARK_instance;
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).selectByValue_7mr6mx_k$ = function (isDark) {
    return isDark ? ThemeQualifier_DARK_getInstance() : ThemeQualifier_LIGHT_getInstance();
  };
  var Companion_instance;
  function Companion_getInstance_1() {
    ThemeQualifier_initEntries();
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function values() {
    return [ThemeQualifier_LIGHT_getInstance(), ThemeQualifier_DARK_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'LIGHT':
        return ThemeQualifier_LIGHT_getInstance();
      case 'DARK':
        return ThemeQualifier_DARK_getInstance();
      default:
        ThemeQualifier_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var ThemeQualifier_entriesInitialized;
  function ThemeQualifier_initEntries() {
    if (ThemeQualifier_entriesInitialized)
      return Unit_getInstance();
    ThemeQualifier_entriesInitialized = true;
    ThemeQualifier_LIGHT_instance = new ThemeQualifier('LIGHT', 0);
    ThemeQualifier_DARK_instance = new ThemeQualifier('DARK', 1);
    Companion_getInstance_1();
  }
  var $ENTRIES;
  function ThemeQualifier(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  var DensityQualifier_LDPI_instance;
  var DensityQualifier_MDPI_instance;
  var DensityQualifier_HDPI_instance;
  var DensityQualifier_XHDPI_instance;
  var DensityQualifier_XXHDPI_instance;
  var DensityQualifier_XXXHDPI_instance;
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).selectByValue_h7gwd6_k$ = function (dpi) {
    return dpi <= DensityQualifier_LDPI_getInstance().dpi_1 ? DensityQualifier_LDPI_getInstance() : dpi <= DensityQualifier_MDPI_getInstance().dpi_1 ? DensityQualifier_MDPI_getInstance() : dpi <= DensityQualifier_HDPI_getInstance().dpi_1 ? DensityQualifier_HDPI_getInstance() : dpi <= DensityQualifier_XHDPI_getInstance().dpi_1 ? DensityQualifier_XHDPI_getInstance() : dpi <= DensityQualifier_XXHDPI_getInstance().dpi_1 ? DensityQualifier_XXHDPI_getInstance() : DensityQualifier_XXXHDPI_getInstance();
  };
  protoOf(Companion_0).selectByDensity_fkp6e5_k$ = function (density) {
    return density <= 0.75 ? DensityQualifier_LDPI_getInstance() : density <= 1.0 ? DensityQualifier_MDPI_getInstance() : density <= 1.5 ? DensityQualifier_HDPI_getInstance() : density <= 2.0 ? DensityQualifier_XHDPI_getInstance() : density <= 3.0 ? DensityQualifier_XXHDPI_getInstance() : DensityQualifier_XXXHDPI_getInstance();
  };
  var Companion_instance_0;
  function Companion_getInstance_2() {
    DensityQualifier_initEntries();
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function values_0() {
    return [DensityQualifier_LDPI_getInstance(), DensityQualifier_MDPI_getInstance(), DensityQualifier_HDPI_getInstance(), DensityQualifier_XHDPI_getInstance(), DensityQualifier_XXHDPI_getInstance(), DensityQualifier_XXXHDPI_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'LDPI':
        return DensityQualifier_LDPI_getInstance();
      case 'MDPI':
        return DensityQualifier_MDPI_getInstance();
      case 'HDPI':
        return DensityQualifier_HDPI_getInstance();
      case 'XHDPI':
        return DensityQualifier_XHDPI_getInstance();
      case 'XXHDPI':
        return DensityQualifier_XXHDPI_getInstance();
      case 'XXXHDPI':
        return DensityQualifier_XXXHDPI_getInstance();
      default:
        DensityQualifier_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var DensityQualifier_entriesInitialized;
  function DensityQualifier_initEntries() {
    if (DensityQualifier_entriesInitialized)
      return Unit_getInstance();
    DensityQualifier_entriesInitialized = true;
    DensityQualifier_LDPI_instance = new DensityQualifier('LDPI', 0, 120);
    DensityQualifier_MDPI_instance = new DensityQualifier('MDPI', 1, 160);
    DensityQualifier_HDPI_instance = new DensityQualifier('HDPI', 2, 240);
    DensityQualifier_XHDPI_instance = new DensityQualifier('XHDPI', 3, 320);
    DensityQualifier_XXHDPI_instance = new DensityQualifier('XXHDPI', 4, 480);
    DensityQualifier_XXXHDPI_instance = new DensityQualifier('XXXHDPI', 5, 640);
    Companion_getInstance_2();
  }
  var $ENTRIES_0;
  function DensityQualifier(name, ordinal, dpi) {
    Enum.call(this, name, ordinal);
    this.dpi_1 = dpi;
  }
  protoOf(DensityQualifier).get_dpi_18j764_k$ = function () {
    return this.dpi_1;
  };
  function Qualifier() {
  }
  function ThemeQualifier_LIGHT_getInstance() {
    ThemeQualifier_initEntries();
    return ThemeQualifier_LIGHT_instance;
  }
  function ThemeQualifier_DARK_getInstance() {
    ThemeQualifier_initEntries();
    return ThemeQualifier_DARK_instance;
  }
  function DensityQualifier_LDPI_getInstance() {
    DensityQualifier_initEntries();
    return DensityQualifier_LDPI_instance;
  }
  function DensityQualifier_MDPI_getInstance() {
    DensityQualifier_initEntries();
    return DensityQualifier_MDPI_instance;
  }
  function DensityQualifier_HDPI_getInstance() {
    DensityQualifier_initEntries();
    return DensityQualifier_HDPI_instance;
  }
  function DensityQualifier_XHDPI_getInstance() {
    DensityQualifier_initEntries();
    return DensityQualifier_XHDPI_instance;
  }
  function DensityQualifier_XXHDPI_getInstance() {
    DensityQualifier_initEntries();
    return DensityQualifier_XXHDPI_instance;
  }
  function DensityQualifier_XXXHDPI_getInstance() {
    DensityQualifier_initEntries();
    return DensityQualifier_XXXHDPI_instance;
  }
  function InternalResourceApi() {
  }
  protoOf(InternalResourceApi).equals = function (other) {
    if (!(other instanceof InternalResourceApi))
      return false;
    other instanceof InternalResourceApi || THROW_CCE();
    return true;
  };
  protoOf(InternalResourceApi).hashCode = function () {
    return 0;
  };
  protoOf(InternalResourceApi).toString = function () {
    return '@org.jetbrains.compose.resources.InternalResourceApi()';
  };
  function ExperimentalResourceApi() {
  }
  protoOf(ExperimentalResourceApi).equals = function (other) {
    if (!(other instanceof ExperimentalResourceApi))
      return false;
    other instanceof ExperimentalResourceApi || THROW_CCE();
    return true;
  };
  protoOf(ExperimentalResourceApi).hashCode = function () {
    return 0;
  };
  protoOf(ExperimentalResourceApi).toString = function () {
    return '@org.jetbrains.compose.resources.ExperimentalResourceApi()';
  };
  function ResourceItem(qualifiers, path) {
    this.qualifiers_1 = qualifiers;
    this.path_1 = path;
  }
  protoOf(ResourceItem).get_qualifiers_koz3vy_k$ = function () {
    return this.qualifiers_1;
  };
  protoOf(ResourceItem).get_path_wos8ry_k$ = function () {
    return this.path_1;
  };
  protoOf(ResourceItem).component1_7eebsc_k$ = function () {
    return this.qualifiers_1;
  };
  protoOf(ResourceItem).component2_7eebsb_k$ = function () {
    return this.path_1;
  };
  protoOf(ResourceItem).copy_oct18e_k$ = function (qualifiers, path) {
    return new ResourceItem(qualifiers, path);
  };
  protoOf(ResourceItem).copy$default_cgknt6_k$ = function (qualifiers, path, $super) {
    qualifiers = qualifiers === VOID ? this.qualifiers_1 : qualifiers;
    path = path === VOID ? this.path_1 : path;
    return $super === VOID ? this.copy_oct18e_k$(qualifiers, path) : $super.copy_oct18e_k$.call(this, qualifiers, path);
  };
  protoOf(ResourceItem).toString = function () {
    return 'ResourceItem(qualifiers=' + this.qualifiers_1 + ', path=' + this.path_1 + ')';
  };
  protoOf(ResourceItem).hashCode = function () {
    var result = hashCode(this.qualifiers_1);
    result = imul(result, 31) + getStringHashCode(this.path_1) | 0;
    return result;
  };
  protoOf(ResourceItem).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ResourceItem))
      return false;
    var tmp0_other_with_cast = other instanceof ResourceItem ? other : THROW_CCE();
    if (!equals(this.qualifiers_1, tmp0_other_with_cast.qualifiers_1))
      return false;
    if (!(this.path_1 === tmp0_other_with_cast.path_1))
      return false;
    return true;
  };
  function Resource(id, items) {
    this.id_1 = id;
    this.items_1 = items;
  }
  protoOf(Resource).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(Resource).get_items_it823b_k$ = function () {
    return this.items_1;
  };
  protoOf(Resource).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof Resource))
      THROW_CCE();
    return this.id_1 === other.id_1;
  };
  protoOf(Resource).hashCode = function () {
    return getStringHashCode(this.id_1);
  };
  function get_DefaultComposeEnvironment() {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    return DefaultComposeEnvironment;
  }
  var DefaultComposeEnvironment;
  function get_LocalComposeEnvironment() {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    return LocalComposeEnvironment;
  }
  var LocalComposeEnvironment;
  function set_getResourceEnvironment(_set____db54di) {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    getResourceEnvironment = _set____db54di;
  }
  function get_getResourceEnvironment() {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    return getResourceEnvironment;
  }
  var getResourceEnvironment;
  function ComposeEnvironment() {
  }
  function ResourceEnvironment(language, region, theme, density) {
    this.language_1 = language;
    this.region_1 = region;
    this.theme_1 = theme;
    this.density_1 = density;
  }
  protoOf(ResourceEnvironment).get_language_cjhhk1_k$ = function () {
    return this.language_1;
  };
  protoOf(ResourceEnvironment).get_region_iy88ot_k$ = function () {
    return this.region_1;
  };
  protoOf(ResourceEnvironment).get_theme_iz24rk_k$ = function () {
    return this.theme_1;
  };
  protoOf(ResourceEnvironment).get_density_qy0267_k$ = function () {
    return this.density_1;
  };
  protoOf(ResourceEnvironment).component1_7eebsc_k$ = function () {
    return this.language_1;
  };
  protoOf(ResourceEnvironment).component2_7eebsb_k$ = function () {
    return this.region_1;
  };
  protoOf(ResourceEnvironment).component3_7eebsa_k$ = function () {
    return this.theme_1;
  };
  protoOf(ResourceEnvironment).component4_7eebs9_k$ = function () {
    return this.density_1;
  };
  protoOf(ResourceEnvironment).copy_oytmn3_k$ = function (language, region, theme, density) {
    return new ResourceEnvironment(language, region, theme, density);
  };
  protoOf(ResourceEnvironment).copy$default_ejgcpp_k$ = function (language, region, theme, density, $super) {
    language = language === VOID ? this.language_1 : language;
    region = region === VOID ? this.region_1 : region;
    theme = theme === VOID ? this.theme_1 : theme;
    density = density === VOID ? this.density_1 : density;
    return $super === VOID ? this.copy_oytmn3_k$(language, region, theme, density) : $super.copy_oytmn3_k$.call(this, language, region, theme, density);
  };
  protoOf(ResourceEnvironment).toString = function () {
    return 'ResourceEnvironment(language=' + this.language_1 + ', region=' + this.region_1 + ', theme=' + this.theme_1 + ', density=' + this.density_1 + ')';
  };
  protoOf(ResourceEnvironment).hashCode = function () {
    var result = this.language_1.hashCode();
    result = imul(result, 31) + this.region_1.hashCode() | 0;
    result = imul(result, 31) + this.theme_1.hashCode() | 0;
    result = imul(result, 31) + this.density_1.hashCode() | 0;
    return result;
  };
  protoOf(ResourceEnvironment).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ResourceEnvironment))
      return false;
    var tmp0_other_with_cast = other instanceof ResourceEnvironment ? other : THROW_CCE();
    if (!this.language_1.equals(tmp0_other_with_cast.language_1))
      return false;
    if (!this.region_1.equals(tmp0_other_with_cast.region_1))
      return false;
    if (!this.theme_1.equals(tmp0_other_with_cast.theme_1))
      return false;
    if (!this.density_1.equals(tmp0_other_with_cast.density_1))
      return false;
    return true;
  };
  function DefaultComposeEnvironment$1() {
  }
  protoOf(DefaultComposeEnvironment$1).rememberEnvironment_3peo8j_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(1808039825);
    if (isTraceInProgress()) {
      traceEventStart(1808039825, $changed, -1, 'org.jetbrains.compose.resources.DefaultComposeEnvironment.<no name provided>.rememberEnvironment (ResourceEnvironment.kt:23)');
    }
    var composeLocale = Companion_getInstance().get_current_jwi6j4_k$();
    var composeTheme = isSystemInDarkTheme($composer_0, 0);
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalDensity();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.consume_ebzcrh_k$(this_0);
    sourceInformationMarkerEnd($composer_1);
    var composeDensity = tmp0;
    $composer_0.startReplaceableGroup_ip860b_k$(1717316880);
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!(!!($composer_0.changed_ga7h3f_k$(composeLocale) | $composer_0.changed_jpyyrz_k$(composeTheme)) | $composer_0.changed_ga7h3f_k$(composeDensity));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'org.jetbrains.compose.resources.<no name provided>.rememberEnvironment.<anonymous>' call
      var value = new ResourceEnvironment(new LanguageQualifier(composeLocale.get_language_cjhhk1_k$()), new RegionQualifier(composeLocale.get_region_iy88ot_k$()), Companion_getInstance_1().selectByValue_7mr6mx_k$(composeTheme), Companion_getInstance_2().selectByDensity_fkp6e5_k$(composeDensity.get_density_qy0267_k$()));
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp1_group;
  };
  function LocalComposeEnvironment$lambda() {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    return get_DefaultComposeEnvironment();
  }
  function getSystemEnvironment$ref() {
    var l = function () {
      return getSystemEnvironment();
    };
    l.callableName = 'getSystemEnvironment';
    return l;
  }
  var properties_initialized_ResourceEnvironment_kt_6hb9vv;
  function _init_properties_ResourceEnvironment_kt__2jx9u5() {
    if (!properties_initialized_ResourceEnvironment_kt_6hb9vv) {
      properties_initialized_ResourceEnvironment_kt_6hb9vv = true;
      DefaultComposeEnvironment = new DefaultComposeEnvironment$1();
      LocalComposeEnvironment = staticCompositionLocalOf(LocalComposeEnvironment$lambda);
      getResourceEnvironment = getSystemEnvironment$ref();
    }
  }
  function get_DefaultResourceReader() {
    _init_properties_ResourceReader_kt__hdc5sh();
    return DefaultResourceReader;
  }
  var DefaultResourceReader;
  function get_LocalResourceReader() {
    _init_properties_ResourceReader_kt__hdc5sh();
    return LocalResourceReader;
  }
  var LocalResourceReader;
  function ResourceReader() {
  }
  function MissingResourceException(path) {
    Exception_init_$Init$('Missing resource with path: ' + path, this);
    captureStack(this, MissingResourceException);
  }
  function DefaultResourceReader$1() {
  }
  protoOf(DefaultResourceReader$1).read_3sms9f_k$ = function (path, $completion) {
    return readResourceBytes(path, $completion);
  };
  function LocalResourceReader$lambda() {
    _init_properties_ResourceReader_kt__hdc5sh();
    return get_DefaultResourceReader();
  }
  var properties_initialized_ResourceReader_kt_tqilcj;
  function _init_properties_ResourceReader_kt__hdc5sh() {
    if (!properties_initialized_ResourceReader_kt_tqilcj) {
      properties_initialized_ResourceReader_kt_tqilcj = true;
      DefaultResourceReader = new DefaultResourceReader$1();
      LocalResourceReader = staticCompositionLocalOf(LocalResourceReader$lambda);
    }
  }
  function get_SimpleStringFormatRegex() {
    _init_properties_StringResources_kt__d7x7ha();
    return SimpleStringFormatRegex;
  }
  var SimpleStringFormatRegex;
  function get_stringsCacheMutex() {
    _init_properties_StringResources_kt__d7x7ha();
    return stringsCacheMutex;
  }
  var stringsCacheMutex;
  function get_parsedStringsCache() {
    _init_properties_StringResources_kt__d7x7ha();
    return parsedStringsCache;
  }
  var parsedStringsCache;
  function Value(text) {
    this.text_1 = text;
  }
  protoOf(Value).get_text_wouvsm_k$ = function () {
    return this.text_1;
  };
  protoOf(Value).component1_7eebsc_k$ = function () {
    return this.text_1;
  };
  protoOf(Value).copy_a35qlh_k$ = function (text) {
    return new Value(text);
  };
  protoOf(Value).copy$default_hb93vy_k$ = function (text, $super) {
    text = text === VOID ? this.text_1 : text;
    return $super === VOID ? this.copy_a35qlh_k$(text) : $super.copy_a35qlh_k$.call(this, text);
  };
  protoOf(Value).toString = function () {
    return 'Value(text=' + this.text_1 + ')';
  };
  protoOf(Value).hashCode = function () {
    return getStringHashCode(this.text_1);
  };
  protoOf(Value).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Value))
      return false;
    var tmp0_other_with_cast = other instanceof Value ? other : THROW_CCE();
    if (!(this.text_1 === tmp0_other_with_cast.text_1))
      return false;
    return true;
  };
  function Array_0(items) {
    this.items_1 = items;
  }
  protoOf(Array_0).get_items_it823b_k$ = function () {
    return this.items_1;
  };
  protoOf(Array_0).component1_7eebsc_k$ = function () {
    return this.items_1;
  };
  protoOf(Array_0).copy_is4t59_k$ = function (items) {
    return new Array_0(items);
  };
  protoOf(Array_0).copy$default_2kft8e_k$ = function (items, $super) {
    items = items === VOID ? this.items_1 : items;
    return $super === VOID ? this.copy_is4t59_k$(items) : $super.copy_is4t59_k$.call(this, items);
  };
  protoOf(Array_0).toString = function () {
    return 'Array(items=' + this.items_1 + ')';
  };
  protoOf(Array_0).hashCode = function () {
    return hashCode(this.items_1);
  };
  protoOf(Array_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Array_0))
      return false;
    var tmp0_other_with_cast = other instanceof Array_0 ? other : THROW_CCE();
    if (!equals(this.items_1, tmp0_other_with_cast.items_1))
      return false;
    return true;
  };
  function StringItem() {
  }
  var properties_initialized_StringResources_kt_9crv2c;
  function _init_properties_StringResources_kt__d7x7ha() {
    if (!properties_initialized_StringResources_kt_9crv2c) {
      properties_initialized_StringResources_kt_9crv2c = true;
      SimpleStringFormatRegex = Regex_init_$Create$('%(\\d)\\$[ds]');
      stringsCacheMutex = Mutex();
      // Inline function 'kotlin.collections.mutableMapOf' call
      parsedStringsCache = LinkedHashMap_init_$Create$();
    }
  }
  function getSystemEnvironment() {
    var locale = new Intl.Locale(window.navigator.language);
    var isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var dpi = numberToInt(window.devicePixelRatio * 96);
    return new ResourceEnvironment(new LanguageQualifier(locale.language), new RegionQualifier(locale.region), Companion_getInstance_1().selectByValue_7mr6mx_k$(isDarkTheme), Companion_getInstance_2().selectByValue_h7gwd6_k$(dpi));
  }
  function readResourceBytes(path, $completion) {
    var tmp = new $readResourceBytesCOROUTINE$0(path, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function toByteArray(_this__u8e3s4) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new Int8Array(_this__u8e3s4, 0, _this__u8e3s4.byteLength);
  }
  function $readResourceBytesCOROUTINE$0(path, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.path_1 = path;
  }
  protoOf($readResourceBytesCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.resPath0__1 = WebResourcesConfiguration_getInstance().get_getResourcePath_ar6k9s_k$()(this.path_1);
            this.set_state_rjd8d0_k$(1);
            suspendResult = await_0(window.fetch(this.resPath0__1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.response1__1 = suspendResult;
            if (!this.response1__1.ok) {
              throw new MissingResourceException(this.resPath0__1);
            }

            this.set_state_rjd8d0_k$(2);
            suspendResult = await_0(this.response1__1.arrayBuffer(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            return toByteArray(ARGUMENT);
          case 3:
            throw this.get_exception_x0n6w6_k$();
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
  function get_emptyFontBase64() {
    _init_properties_FontResources_skiko_kt__g77iad();
    return emptyFontBase64;
  }
  var emptyFontBase64;
  function get_defaultEmptyFont() {
    _init_properties_FontResources_skiko_kt__g77iad();
    // Inline function 'kotlin.getValue' call
    var this_0 = defaultEmptyFont$delegate;
    defaultEmptyFont$factory();
    return this_0.get_value_j01efc_k$();
  }
  var defaultEmptyFont$delegate;
  function defaultEmptyFont$delegate$lambda() {
    _init_properties_FontResources_skiko_kt__g77iad();
    return Font('org.jetbrains.compose.emptyFont', Default_getInstance().decode$default_mne14l_k$(get_emptyFontBase64()));
  }
  function defaultEmptyFont$factory() {
    return getPropertyCallableRef('defaultEmptyFont', 0, KProperty0, function () {
      return get_defaultEmptyFont();
    }, null);
  }
  var properties_initialized_FontResources_skiko_kt_wwtlnx;
  function _init_properties_FontResources_skiko_kt__g77iad() {
    if (!properties_initialized_FontResources_skiko_kt_wwtlnx) {
      properties_initialized_FontResources_skiko_kt_wwtlnx = true;
      emptyFontBase64 = 'T1RUTwAJAIAAAwAQQ0ZGIML7MfIAAAQIAAAA2U9TLzJmMV8PAAABAAAAAGBjbWFwANUAVwAAA6QAAABEaGVhZCMuU7IAAACcAAAANmhoZWECvgAmAAAA1AAAACRobXR4Az4AAAAABOQAAAAQbWF4cAAEUAAAAAD4AAAABm5hbWUpw3nbAAABYAAAAkNwb3N0AAMAAAAAA+gAAAAgAAEAAAABAADs7nftXw889QADA+gAAAAA4WWJaQAAAADhZYlpAAAAAAFNAAAAAAADAAIAAAAAAAAAAQAAArz+1AAAAU0AAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAQAAFAAAAQAAAADAHwB9AAFAAACigK7AAAAjAKKArsAAAHfADEBAgAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAABYWFhYAEAAIABfArz+1AAAAAAAAAAAAAEAAAAAAV4AAAAgACAAAAAAACIBngABAAAAAAAAAAIAbwABAAAAAAABAAUAAAABAAAAAAACAAcADwABAAAAAAADABAAdQABAAAAAAAEAA0AJAABAAAAAAAFAAIAbwABAAAAAAAGAAwASwABAAAAAAAHAAIAbwABAAAAAAAIAAIAbwABAAAAAAAJAAIAbwABAAAAAAAKAAIAbwABAAAAAAALAAIAbwABAAAAAAAMAAIAbwABAAAAAAANAAIAbwABAAAAAAAOAAIAbwABAAAAAAAQAAUAAAABAAAAAAARAAcADwADAAEECQAAAAQAcQADAAEECQABAAoABQADAAEECQACAA4AFgADAAEECQADACAAhQADAAEECQAEABoAMQADAAEECQAFAAQAcQADAAEECQAGABgAVwADAAEECQAHAAQAcQADAAEECQAIAAQAcQADAAEECQAJAAQAcQADAAEECQAKAAQAcQADAAEECQALAAQAcQADAAEECQAMAAQAcQADAAEECQANAAQAcQADAAEECQAOAAQAcQADAAEECQAQAAoABQADAAEECQARAA4AFmVtcHR5AGUAbQBwAHQAeVJlZ3VsYXIAUgBlAGcAdQBsAGEAcmVtcHR5IFJlZ3VsYXIAZQBtAHAAdAB5ACAAUgBlAGcAdQBsAGEAcmVtcHR5UmVndWxhcgBlAG0AcAB0AHkAUgBlAGcAdQBsAGEAciIiACIAIiIiOmVtcHR5IFJlZ3VsYXIAIgAiADoAZQBtAHAAdAB5ACAAUgBlAGcAdQBsAGEAcgAAAAABAAMAAQAAAAwABAA4AAAACgAIAAIAAgAAACAAQQBf//8AAAAAACAAQQBf//8AAP/h/8H/pAABAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAEAQABAQENZW1wdHlSZWd1bGFyAAEBASf4GwD4HAL4HQP4HgSLi/lQ9+EFHQAAAHgPHQAAAH8Rix0AAADZEgAHAQEDEBUcISIsIiJlbXB0eSBSZWd1bGFyZW1wdHlSZWd1bGFyc3BhY2VBdW5kZXJzY29yZQAAAAGLAYwBjQAEAQFMT1FT+F2f+TcVi4uL/TeLiwiLi/g1i4uLCIuLi/k3i4sIi4v8NYuLiwi7/QcVi4uL+NeLiwiLi/fUi4uLCIuLi/zXi4sIi4v71IuLiwgO9+EOnw6fDgAAAAHJAAABTQAAABQAAAAUAAA=';
      defaultEmptyFont$delegate = lazy(defaultEmptyFont$delegate$lambda);
    }
  }
  function WebResourcesConfiguration$getResourcePath$lambda(it) {
    return './' + it;
  }
  function WebResourcesConfiguration() {
    WebResourcesConfiguration_instance = this;
    var tmp = this;
    tmp.getResourcePath_1 = WebResourcesConfiguration$getResourcePath$lambda;
  }
  protoOf(WebResourcesConfiguration).set_getResourcePath_43b72j_k$ = function (_set____db54di) {
    this.getResourcePath_1 = _set____db54di;
  };
  protoOf(WebResourcesConfiguration).get_getResourcePath_ar6k9s_k$ = function () {
    return this.getResourcePath_1;
  };
  protoOf(WebResourcesConfiguration).resourcePathMapping_vnuvms_k$ = function (map) {
    this.getResourcePath_1 = map;
  };
  var WebResourcesConfiguration_instance;
  function WebResourcesConfiguration_getInstance() {
    if (WebResourcesConfiguration_instance == null)
      new WebResourcesConfiguration();
    return WebResourcesConfiguration_instance;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = readResourceBytes;
  _.$_$.b = DrawableResource;
  _.$_$.c = ResourceItem;
  //endregion
  return _;
}));

//# sourceMappingURL=components-resources-library.js.map
