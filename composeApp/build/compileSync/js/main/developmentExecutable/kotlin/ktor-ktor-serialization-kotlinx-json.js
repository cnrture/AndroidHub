(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './ktor-ktor-http.js', './ktor-ktor-serialization-kotlinx.js', './kotlinx-serialization-kotlinx-serialization-json.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./ktor-ktor-http.js'), require('./ktor-ktor-serialization-kotlinx.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx-json'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-serialization-kotlinx-json'.");
    }
    if (typeof this['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx-json'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'ktor-ktor-serialization-kotlinx-json'.");
    }
    if (typeof this['ktor-ktor-serialization-kotlinx'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx-json'. Its dependency 'ktor-ktor-serialization-kotlinx' was not found. Please, check whether 'ktor-ktor-serialization-kotlinx' is loaded prior to 'ktor-ktor-serialization-kotlinx-json'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx-json'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'ktor-ktor-serialization-kotlinx-json'.");
    }
    root['ktor-ktor-serialization-kotlinx-json'] = factory(typeof this['ktor-ktor-serialization-kotlinx-json'] === 'undefined' ? {} : this['ktor-ktor-serialization-kotlinx-json'], this['kotlin-kotlin-stdlib'], this['ktor-ktor-http'], this['ktor-ktor-serialization-kotlinx'], this['kotlinx-serialization-kotlinx-serialization-json']);
  }
}(this, function (_, kotlin_kotlin, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_serialization_kotlinx, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json) {
  'use strict';
  //region block: imports
  var VOID = kotlin_kotlin.$_$.g;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.b;
  var serialization = kotlin_io_ktor_ktor_serialization_kotlinx.$_$.a;
  var Unit_getInstance = kotlin_kotlin.$_$.v5;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  //endregion
  //region block: pre-declaration
  //endregion
  function get_DefaultJson() {
    _init_properties_JsonSupport_kt__yf438r();
    return DefaultJson;
  }
  var DefaultJson;
  function json(_this__u8e3s4, json, contentType) {
    json = json === VOID ? get_DefaultJson() : json;
    contentType = contentType === VOID ? Application_getInstance().get_Json_wo4ci9_k$() : contentType;
    _init_properties_JsonSupport_kt__yf438r();
    serialization(_this__u8e3s4, contentType, json);
  }
  function DefaultJson$lambda($this$Json) {
    _init_properties_JsonSupport_kt__yf438r();
    $this$Json.set_encodeDefaults_c5evsg_k$(true);
    $this$Json.set_isLenient_kuajk5_k$(true);
    $this$Json.set_allowSpecialFloatingPointValues_xyc2ru_k$(true);
    $this$Json.set_allowStructuredMapKeys_sxzxe_k$(true);
    $this$Json.set_prettyPrint_v2gnff_k$(false);
    $this$Json.set_useArrayPolymorphism_54w3tr_k$(false);
    return Unit_getInstance();
  }
  var properties_initialized_JsonSupport_kt_9cgd93;
  function _init_properties_JsonSupport_kt__yf438r() {
    if (!properties_initialized_JsonSupport_kt_9cgd93) {
      properties_initialized_JsonSupport_kt_9cgd93 = true;
      DefaultJson = Json(VOID, DefaultJson$lambda);
    }
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = json;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-serialization-kotlinx-json.js.map
