(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "3Kre":
/*!************************************************************!*\
  !*** ./node_modules/@firebase/analytics/dist/index.esm.js ***!
  \************************************************************/
/*! exports provided: factory, getGlobalVars, registerAnalytics, resetGlobalVars, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "factory", function() { return factory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGlobalVars", function() { return getGlobalVars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerAnalytics", function() { return registerAnalytics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetGlobalVars", function() { return resetGlobalVars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "WVRz");
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/app */ "zIRd");
/* harmony import */ var _firebase_installations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/installations */ "fSjL");
/* harmony import */ var _firebase_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase/logger */ "q/0M");
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @firebase/util */ "qOnz");
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @firebase/component */ "/6Yf");






/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Key to attach FID to in gtag params.

var GA_FID_KEY = 'firebase_id';
var ORIGIN_KEY = 'origin';
var FETCH_TIMEOUT_MILLIS = 60 * 1000;
var DYNAMIC_CONFIG_URL = 'https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig';
var GTAG_URL = 'https://www.googletagmanager.com/gtag/js';
var GtagCommand;

(function (GtagCommand) {
  GtagCommand["EVENT"] = "event";
  GtagCommand["SET"] = "set";
  GtagCommand["CONFIG"] = "config";
})(GtagCommand || (GtagCommand = {}));
/**
 * Officially recommended event names for gtag.js
 * Any other string is also allowed.
 *
 * @public
 */


var EventName;

(function (EventName) {
  EventName["ADD_SHIPPING_INFO"] = "add_shipping_info";
  EventName["ADD_PAYMENT_INFO"] = "add_payment_info";
  EventName["ADD_TO_CART"] = "add_to_cart";
  EventName["ADD_TO_WISHLIST"] = "add_to_wishlist";
  EventName["BEGIN_CHECKOUT"] = "begin_checkout";
  /**
   * @deprecated
   * This event name is deprecated and is unsupported in updated
   * Enhanced Ecommerce reports.
   */

  EventName["CHECKOUT_PROGRESS"] = "checkout_progress";
  EventName["EXCEPTION"] = "exception";
  EventName["GENERATE_LEAD"] = "generate_lead";
  EventName["LOGIN"] = "login";
  EventName["PAGE_VIEW"] = "page_view";
  EventName["PURCHASE"] = "purchase";
  EventName["REFUND"] = "refund";
  EventName["REMOVE_FROM_CART"] = "remove_from_cart";
  EventName["SCREEN_VIEW"] = "screen_view";
  EventName["SEARCH"] = "search";
  EventName["SELECT_CONTENT"] = "select_content";
  EventName["SELECT_ITEM"] = "select_item";
  EventName["SELECT_PROMOTION"] = "select_promotion";
  /** @deprecated */

  EventName["SET_CHECKOUT_OPTION"] = "set_checkout_option";
  EventName["SHARE"] = "share";
  EventName["SIGN_UP"] = "sign_up";
  EventName["TIMING_COMPLETE"] = "timing_complete";
  EventName["VIEW_CART"] = "view_cart";
  EventName["VIEW_ITEM"] = "view_item";
  EventName["VIEW_ITEM_LIST"] = "view_item_list";
  EventName["VIEW_PROMOTION"] = "view_promotion";
  EventName["VIEW_SEARCH_RESULTS"] = "view_search_results";
})(EventName || (EventName = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Logs an analytics event through the Firebase SDK.
 *
 * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
 * @param eventName Google Analytics event name, choose from standard list or use a custom string.
 * @param eventParams Analytics event parameters.
 */


function _logEvent(gtagFunction, initializationPromise, eventName, eventParams, options) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
    var measurementId, params;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (!(options && options.global)) return [3
          /*break*/
          , 1];
          gtagFunction(GtagCommand.EVENT, eventName, eventParams);
          return [2
          /*return*/
          ];

        case 1:
          return [4
          /*yield*/
          , initializationPromise];

        case 2:
          measurementId = _a.sent();
          params = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, eventParams), {
            'send_to': measurementId
          });
          gtagFunction(GtagCommand.EVENT, eventName, params);
          _a.label = 3;

        case 3:
          return [2
          /*return*/
          ];
      }
    });
  });
}
/**
 * Set screen_name parameter for this Google Analytics ID.
 *
 * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
 * @param screenName Screen name string to set.
 */


function _setCurrentScreen(gtagFunction, initializationPromise, screenName, options) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
    var measurementId;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (!(options && options.global)) return [3
          /*break*/
          , 1];
          gtagFunction(GtagCommand.SET, {
            'screen_name': screenName
          });
          return [2
          /*return*/
          , Promise.resolve()];

        case 1:
          return [4
          /*yield*/
          , initializationPromise];

        case 2:
          measurementId = _a.sent();
          gtagFunction(GtagCommand.CONFIG, measurementId, {
            update: true,
            'screen_name': screenName
          });
          _a.label = 3;

        case 3:
          return [2
          /*return*/
          ];
      }
    });
  });
}
/**
 * Set user_id parameter for this Google Analytics ID.
 *
 * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
 * @param id User ID string to set
 */


function _setUserId(gtagFunction, initializationPromise, id, options) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
    var measurementId;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (!(options && options.global)) return [3
          /*break*/
          , 1];
          gtagFunction(GtagCommand.SET, {
            'user_id': id
          });
          return [2
          /*return*/
          , Promise.resolve()];

        case 1:
          return [4
          /*yield*/
          , initializationPromise];

        case 2:
          measurementId = _a.sent();
          gtagFunction(GtagCommand.CONFIG, measurementId, {
            update: true,
            'user_id': id
          });
          _a.label = 3;

        case 3:
          return [2
          /*return*/
          ];
      }
    });
  });
}
/**
 * Set all other user properties other than user_id and screen_name.
 *
 * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
 * @param properties Map of user properties to set
 */


function _setUserProperties(gtagFunction, initializationPromise, properties, options) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
    var flatProperties, _i, _a, key, measurementId;

    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
      switch (_b.label) {
        case 0:
          if (!(options && options.global)) return [3
          /*break*/
          , 1];
          flatProperties = {};

          for (_i = 0, _a = Object.keys(properties); _i < _a.length; _i++) {
            key = _a[_i]; // use dot notation for merge behavior in gtag.js

            flatProperties["user_properties." + key] = properties[key];
          }

          gtagFunction(GtagCommand.SET, flatProperties);
          return [2
          /*return*/
          , Promise.resolve()];

        case 1:
          return [4
          /*yield*/
          , initializationPromise];

        case 2:
          measurementId = _b.sent();
          gtagFunction(GtagCommand.CONFIG, measurementId, {
            update: true,
            'user_properties': properties
          });
          _b.label = 3;

        case 3:
          return [2
          /*return*/
          ];
      }
    });
  });
}
/**
 * Set whether collection is enabled for this ID.
 *
 * @param enabled If true, collection is enabled for this ID.
 */


function _setAnalyticsCollectionEnabled(initializationPromise, enabled) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
    var measurementId;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , initializationPromise];

        case 1:
          measurementId = _a.sent();
          window["ga-disable-" + measurementId] = !enabled;
          return [2
          /*return*/
          ];
      }
    });
  });
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var logger = new _firebase_logger__WEBPACK_IMPORTED_MODULE_3__["Logger"]('@firebase/analytics');
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Inserts gtag script tag into the page to asynchronously download gtag.
 * @param dataLayerName Name of datalayer (most often the default, "_dataLayer").
 */

function insertScriptTag(dataLayerName, measurementId) {
  var script = document.createElement('script');
  script.src = GTAG_URL + "?l=" + dataLayerName + "&id=" + measurementId;
  script.async = true;
  document.head.appendChild(script);
}
/**
 * Get reference to, or create, global datalayer.
 * @param dataLayerName Name of datalayer (most often the default, "_dataLayer").
 */


function getOrCreateDataLayer(dataLayerName) {
  // Check for existing dataLayer and create if needed.
  var dataLayer = [];

  if (Array.isArray(window[dataLayerName])) {
    dataLayer = window[dataLayerName];
  } else {
    window[dataLayerName] = dataLayer;
  }

  return dataLayer;
}
/**
 * Wrapped gtag logic when gtag is called with 'config' command.
 *
 * @param gtagCore Basic gtag function that just appends to dataLayer.
 * @param initializationPromisesMap Map of appIds to their initialization promises.
 * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
 * @param measurementIdToAppId Map of GA measurementIDs to corresponding Firebase appId.
 * @param measurementId GA Measurement ID to set config for.
 * @param gtagParams Gtag config params to set.
 */


function gtagOnConfig(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId, measurementId, gtagParams) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
    var correspondingAppId, dynamicConfigResults, foundConfig, e_1;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
      switch (_a.label) {
        case 0:
          correspondingAppId = measurementIdToAppId[measurementId];
          _a.label = 1;

        case 1:
          _a.trys.push([1, 7,, 8]);

          if (!correspondingAppId) return [3
          /*break*/
          , 3];
          return [4
          /*yield*/
          , initializationPromisesMap[correspondingAppId]];

        case 2:
          _a.sent();

          return [3
          /*break*/
          , 6];

        case 3:
          return [4
          /*yield*/
          , Promise.all(dynamicConfigPromisesList)];

        case 4:
          dynamicConfigResults = _a.sent();
          foundConfig = dynamicConfigResults.find(function (config) {
            return config.measurementId === measurementId;
          });
          if (!foundConfig) return [3
          /*break*/
          , 6];
          return [4
          /*yield*/
          , initializationPromisesMap[foundConfig.appId]];

        case 5:
          _a.sent();

          _a.label = 6;

        case 6:
          return [3
          /*break*/
          , 8];

        case 7:
          e_1 = _a.sent();
          logger.error(e_1);
          return [3
          /*break*/
          , 8];

        case 8:
          gtagCore(GtagCommand.CONFIG, measurementId, gtagParams);
          return [2
          /*return*/
          ];
      }
    });
  });
}
/**
 * Wrapped gtag logic when gtag is called with 'event' command.
 *
 * @param gtagCore Basic gtag function that just appends to dataLayer.
 * @param initializationPromisesMap Map of appIds to their initialization promises.
 * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
 * @param measurementId GA Measurement ID to log event to.
 * @param gtagParams Params to log with this event.
 */


function gtagOnEvent(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, measurementId, gtagParams) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
    var initializationPromisesToWaitFor, gaSendToList, dynamicConfigResults, _loop_1, _i, gaSendToList_1, sendToId, state_1, e_2;

    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 4,, 5]);

          initializationPromisesToWaitFor = [];
          if (!(gtagParams && gtagParams['send_to'])) return [3
          /*break*/
          , 2];
          gaSendToList = gtagParams['send_to']; // Make it an array if is isn't, so it can be dealt with the same way.

          if (!Array.isArray(gaSendToList)) {
            gaSendToList = [gaSendToList];
          }

          return [4
          /*yield*/
          , Promise.all(dynamicConfigPromisesList)];

        case 1:
          dynamicConfigResults = _a.sent();

          _loop_1 = function _loop_1(sendToId) {
            // Any fetched dynamic measurement ID that matches this 'send_to' ID
            var foundConfig = dynamicConfigResults.find(function (config) {
              return config.measurementId === sendToId;
            });
            var initializationPromise = foundConfig && initializationPromisesMap[foundConfig.appId];

            if (initializationPromise) {
              initializationPromisesToWaitFor.push(initializationPromise);
            } else {
              // Found an item in 'send_to' that is not associated
              // directly with an FID, possibly a group.  Empty this array,
              // exit the loop early, and let it get populated below.
              initializationPromisesToWaitFor = [];
              return "break";
            }
          };

          for (_i = 0, gaSendToList_1 = gaSendToList; _i < gaSendToList_1.length; _i++) {
            sendToId = gaSendToList_1[_i];
            state_1 = _loop_1(sendToId);
            if (state_1 === "break") break;
          }

          _a.label = 2;

        case 2:
          // This will be unpopulated if there was no 'send_to' field , or
          // if not all entries in the 'send_to' field could be mapped to
          // a FID. In these cases, wait on all pending initialization promises.
          if (initializationPromisesToWaitFor.length === 0) {
            initializationPromisesToWaitFor = Object.values(initializationPromisesMap);
          } // Run core gtag function with args after all relevant initialization
          // promises have been resolved.


          return [4
          /*yield*/
          , Promise.all(initializationPromisesToWaitFor)];

        case 3:
          // Run core gtag function with args after all relevant initialization
          // promises have been resolved.
          _a.sent(); // Workaround for http://b/141370449 - third argument cannot be undefined.


          gtagCore(GtagCommand.EVENT, measurementId, gtagParams || {});
          return [3
          /*break*/
          , 5];

        case 4:
          e_2 = _a.sent();
          logger.error(e_2);
          return [3
          /*break*/
          , 5];

        case 5:
          return [2
          /*return*/
          ];
      }
    });
  });
}
/**
 * Wraps a standard gtag function with extra code to wait for completion of
 * relevant initialization promises before sending requests.
 *
 * @param gtagCore Basic gtag function that just appends to dataLayer.
 * @param initializationPromisesMap Map of appIds to their initialization promises.
 * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
 * @param measurementIdToAppId Map of GA measurementIDs to corresponding Firebase appId.
 */


function wrapGtag(gtagCore,
/**
 * Allows wrapped gtag calls to wait on whichever intialization promises are required,
 * depending on the contents of the gtag params' `send_to` field, if any.
 */
initializationPromisesMap,
/**
 * Wrapped gtag calls sometimes require all dynamic config fetches to have returned
 * before determining what initialization promises (which include FIDs) to wait for.
 */
dynamicConfigPromisesList,
/**
 * Wrapped gtag config calls can narrow down which initialization promise (with FID)
 * to wait for if the measurementId is already fetched, by getting the corresponding appId,
 * which is the key for the initialization promises map.
 */
measurementIdToAppId) {
  /**
   * Wrapper around gtag that ensures FID is sent with gtag calls.
   * @param command Gtag command type.
   * @param idOrNameOrParams Measurement ID if command is EVENT/CONFIG, params if command is SET.
   * @param gtagParams Params if event is EVENT/CONFIG.
   */
  function gtagWrapper(command, idOrNameOrParams, gtagParams) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      var e_3;
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 6,, 7]);

            if (!(command === GtagCommand.EVENT)) return [3
            /*break*/
            , 2]; // If EVENT, second arg must be measurementId.

            return [4
            /*yield*/
            , gtagOnEvent(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, idOrNameOrParams, gtagParams)];

          case 1:
            // If EVENT, second arg must be measurementId.
            _a.sent();

            return [3
            /*break*/
            , 5];

          case 2:
            if (!(command === GtagCommand.CONFIG)) return [3
            /*break*/
            , 4]; // If CONFIG, second arg must be measurementId.

            return [4
            /*yield*/
            , gtagOnConfig(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId, idOrNameOrParams, gtagParams)];

          case 3:
            // If CONFIG, second arg must be measurementId.
            _a.sent();

            return [3
            /*break*/
            , 5];

          case 4:
            // If SET, second arg must be params.
            gtagCore(GtagCommand.SET, idOrNameOrParams);
            _a.label = 5;

          case 5:
            return [3
            /*break*/
            , 7];

          case 6:
            e_3 = _a.sent();
            logger.error(e_3);
            return [3
            /*break*/
            , 7];

          case 7:
            return [2
            /*return*/
            ];
        }
      });
    });
  }

  return gtagWrapper;
}
/**
 * Creates global gtag function or wraps existing one if found.
 * This wrapped function attaches Firebase instance ID (FID) to gtag 'config' and
 * 'event' calls that belong to the GAID associated with this Firebase instance.
 *
 * @param initializationPromisesMap Map of appIds to their initialization promises.
 * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
 * @param measurementIdToAppId Map of GA measurementIDs to corresponding Firebase appId.
 * @param dataLayerName Name of global GA datalayer array.
 * @param gtagFunctionName Name of global gtag function ("gtag" if not user-specified).
 */


function wrapOrCreateGtag(initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId, dataLayerName, gtagFunctionName) {
  // Create a basic core gtag function
  var gtagCore = function gtagCore() {
    var _args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      _args[_i] = arguments[_i];
    } // Must push IArguments object, not an array.


    window[dataLayerName].push(arguments);
  }; // Replace it with existing one if found


  if (window[gtagFunctionName] && typeof window[gtagFunctionName] === 'function') {
    // @ts-ignore
    gtagCore = window[gtagFunctionName];
  }

  window[gtagFunctionName] = wrapGtag(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId);
  return {
    gtagCore: gtagCore,
    wrappedGtag: window[gtagFunctionName]
  };
}
/**
 * Returns first script tag in DOM matching our gtag url pattern.
 */


function findGtagScriptOnPage() {
  var scriptTags = window.document.getElementsByTagName('script');

  for (var _i = 0, _a = Object.values(scriptTags); _i < _a.length; _i++) {
    var tag = _a[_i];

    if (tag.src && tag.src.includes(GTAG_URL)) {
      return tag;
    }
  }

  return null;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var _a;

var ERRORS = (_a = {}, _a["already-exists"
/* ALREADY_EXISTS */
] = 'A Firebase Analytics instance with the appId {$id} ' + ' already exists. ' + 'Only one Firebase Analytics instance can be created for each appId.', _a["already-initialized"
/* ALREADY_INITIALIZED */
] = 'Firebase Analytics has already been initialized.' + 'settings() must be called before initializing any Analytics instance' + 'or it will have no effect.', _a["interop-component-reg-failed"
/* INTEROP_COMPONENT_REG_FAILED */
] = 'Firebase Analytics Interop Component failed to instantiate: {$reason}', _a["invalid-analytics-context"
/* INVALID_ANALYTICS_CONTEXT */
] = 'Firebase Analytics is not supported in this environment. ' + 'Wrap initialization of analytics in analytics.isSupported() ' + 'to prevent initialization in unsupported environments. Details: {$errorInfo}', _a["indexeddb-unavailable"
/* INDEXEDDB_UNAVAILABLE */
] = 'IndexedDB unavailable or restricted in this environment. ' + 'Wrap initialization of analytics in analytics.isSupported() ' + 'to prevent initialization in unsupported environments. Details: {$errorInfo}', _a["fetch-throttle"
/* FETCH_THROTTLE */
] = 'The config fetch request timed out while in an exponential backoff state.' + ' Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.', _a["config-fetch-failed"
/* CONFIG_FETCH_FAILED */
] = 'Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}', _a["no-api-key"
/* NO_API_KEY */
] = 'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field to' + 'contain a valid API key.', _a["no-app-id"
/* NO_APP_ID */
] = 'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field to' + 'contain a valid app ID.', _a);
var ERROR_FACTORY = new _firebase_util__WEBPACK_IMPORTED_MODULE_4__["ErrorFactory"]('analytics', 'Analytics', ERRORS);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Backoff factor for 503 errors, which we want to be conservative about
 * to avoid overloading servers. Each retry interval will be
 * BASE_INTERVAL_MILLIS * LONG_RETRY_FACTOR ^ retryCount, so the second one
 * will be ~30 seconds (with fuzzing).
 */

var LONG_RETRY_FACTOR = 30;
/**
 * Base wait interval to multiplied by backoffFactor^backoffCount.
 */

var BASE_INTERVAL_MILLIS = 1000;
/**
 * Stubbable retry data storage class.
 */

var RetryData =
/** @class */
function () {
  function RetryData(throttleMetadata, intervalMillis) {
    if (throttleMetadata === void 0) {
      throttleMetadata = {};
    }

    if (intervalMillis === void 0) {
      intervalMillis = BASE_INTERVAL_MILLIS;
    }

    this.throttleMetadata = throttleMetadata;
    this.intervalMillis = intervalMillis;
  }

  RetryData.prototype.getThrottleMetadata = function (appId) {
    return this.throttleMetadata[appId];
  };

  RetryData.prototype.setThrottleMetadata = function (appId, metadata) {
    this.throttleMetadata[appId] = metadata;
  };

  RetryData.prototype.deleteThrottleMetadata = function (appId) {
    delete this.throttleMetadata[appId];
  };

  return RetryData;
}();

var defaultRetryData = new RetryData();
/**
 * Set GET request headers.
 * @param apiKey App API key.
 */

function getHeaders(apiKey) {
  return new Headers({
    Accept: 'application/json',
    'x-goog-api-key': apiKey
  });
}
/**
 * Fetches dynamic config from backend.
 * @param app Firebase app to fetch config for.
 */


function fetchDynamicConfig(appFields) {
  var _a;

  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
    var appId, apiKey, request, appUrl, response, errorMessage, jsonResponse, _ignored_1;

    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
      switch (_b.label) {
        case 0:
          appId = appFields.appId, apiKey = appFields.apiKey;
          request = {
            method: 'GET',
            headers: getHeaders(apiKey)
          };
          appUrl = DYNAMIC_CONFIG_URL.replace('{app-id}', appId);
          return [4
          /*yield*/
          , fetch(appUrl, request)];

        case 1:
          response = _b.sent();
          if (!(response.status !== 200 && response.status !== 304)) return [3
          /*break*/
          , 6];
          errorMessage = '';
          _b.label = 2;

        case 2:
          _b.trys.push([2, 4,, 5]);

          return [4
          /*yield*/
          , response.json()];

        case 3:
          jsonResponse = _b.sent();

          if ((_a = jsonResponse.error) === null || _a === void 0 ? void 0 : _a.message) {
            errorMessage = jsonResponse.error.message;
          }

          return [3
          /*break*/
          , 5];

        case 4:
          _ignored_1 = _b.sent();
          return [3
          /*break*/
          , 5];

        case 5:
          throw ERROR_FACTORY.create("config-fetch-failed"
          /* CONFIG_FETCH_FAILED */
          , {
            httpStatus: response.status,
            responseMessage: errorMessage
          });

        case 6:
          return [2
          /*return*/
          , response.json()];
      }
    });
  });
}
/**
 * Fetches dynamic config from backend, retrying if failed.
 * @param app Firebase app to fetch config for.
 */


function fetchDynamicConfigWithRetry(app, // retryData and timeoutMillis are parameterized to allow passing a different value for testing.
retryData, timeoutMillis) {
  if (retryData === void 0) {
    retryData = defaultRetryData;
  }

  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
    var _a, appId, apiKey, measurementId, throttleMetadata, signal;

    var _this = this;

    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
      _a = app.options, appId = _a.appId, apiKey = _a.apiKey, measurementId = _a.measurementId;

      if (!appId) {
        throw ERROR_FACTORY.create("no-app-id"
        /* NO_APP_ID */
        );
      }

      if (!apiKey) {
        if (measurementId) {
          return [2
          /*return*/
          , {
            measurementId: measurementId,
            appId: appId
          }];
        }

        throw ERROR_FACTORY.create("no-api-key"
        /* NO_API_KEY */
        );
      }

      throttleMetadata = retryData.getThrottleMetadata(appId) || {
        backoffCount: 0,
        throttleEndTimeMillis: Date.now()
      };
      signal = new AnalyticsAbortSignal();
      setTimeout(function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            // Note a very low delay, eg < 10ms, can elapse before listeners are initialized.
            signal.abort();
            return [2
            /*return*/
            ];
          });
        });
      }, timeoutMillis !== undefined ? timeoutMillis : FETCH_TIMEOUT_MILLIS);
      return [2
      /*return*/
      , attemptFetchDynamicConfigWithRetry({
        appId: appId,
        apiKey: apiKey,
        measurementId: measurementId
      }, throttleMetadata, signal, retryData)];
    });
  });
}
/**
 * Runs one retry attempt.
 * @param appFields Necessary app config fields.
 * @param throttleMetadata Ongoing metadata to determine throttling times.
 * @param signal Abort signal.
 */


function attemptFetchDynamicConfigWithRetry(appFields, _a, signal, retryData // for testing
) {
  var throttleEndTimeMillis = _a.throttleEndTimeMillis,
      backoffCount = _a.backoffCount;

  if (retryData === void 0) {
    retryData = defaultRetryData;
  }

  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
    var appId, measurementId, e_1, response, e_2, backoffMillis, throttleMetadata;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
      switch (_b.label) {
        case 0:
          appId = appFields.appId, measurementId = appFields.measurementId;
          _b.label = 1;

        case 1:
          _b.trys.push([1, 3,, 4]);

          return [4
          /*yield*/
          , setAbortableTimeout(signal, throttleEndTimeMillis)];

        case 2:
          _b.sent();

          return [3
          /*break*/
          , 4];

        case 3:
          e_1 = _b.sent();

          if (measurementId) {
            logger.warn("Timed out fetching this Firebase app's measurement ID from the server." + (" Falling back to the measurement ID " + measurementId) + (" provided in the \"measurementId\" field in the local Firebase config. [" + e_1.message + "]"));
            return [2
            /*return*/
            , {
              appId: appId,
              measurementId: measurementId
            }];
          }

          throw e_1;

        case 4:
          _b.trys.push([4, 6,, 7]);

          return [4
          /*yield*/
          , fetchDynamicConfig(appFields)];

        case 5:
          response = _b.sent(); // Note the SDK only clears throttle state if response is success or non-retriable.

          retryData.deleteThrottleMetadata(appId);
          return [2
          /*return*/
          , response];

        case 6:
          e_2 = _b.sent();

          if (!isRetriableError(e_2)) {
            retryData.deleteThrottleMetadata(appId);

            if (measurementId) {
              logger.warn("Failed to fetch this Firebase app's measurement ID from the server." + (" Falling back to the measurement ID " + measurementId) + (" provided in the \"measurementId\" field in the local Firebase config. [" + e_2.message + "]"));
              return [2
              /*return*/
              , {
                appId: appId,
                measurementId: measurementId
              }];
            } else {
              throw e_2;
            }
          }

          backoffMillis = Number(e_2.customData.httpStatus) === 503 ? Object(_firebase_util__WEBPACK_IMPORTED_MODULE_4__["calculateBackoffMillis"])(backoffCount, retryData.intervalMillis, LONG_RETRY_FACTOR) : Object(_firebase_util__WEBPACK_IMPORTED_MODULE_4__["calculateBackoffMillis"])(backoffCount, retryData.intervalMillis);
          throttleMetadata = {
            throttleEndTimeMillis: Date.now() + backoffMillis,
            backoffCount: backoffCount + 1
          }; // Persists state.

          retryData.setThrottleMetadata(appId, throttleMetadata);
          logger.debug("Calling attemptFetch again in " + backoffMillis + " millis");
          return [2
          /*return*/
          , attemptFetchDynamicConfigWithRetry(appFields, throttleMetadata, signal, retryData)];

        case 7:
          return [2
          /*return*/
          ];
      }
    });
  });
}
/**
 * Supports waiting on a backoff by:
 *
 * <ul>
 *   <li>Promisifying setTimeout, so we can set a timeout in our Promise chain</li>
 *   <li>Listening on a signal bus for abort events, just like the Fetch API</li>
 *   <li>Failing in the same way the Fetch API fails, so timing out a live request and a throttled
 *       request appear the same.</li>
 * </ul>
 *
 * <p>Visible for testing.
 */


function setAbortableTimeout(signal, throttleEndTimeMillis) {
  return new Promise(function (resolve, reject) {
    // Derives backoff from given end time, normalizing negative numbers to zero.
    var backoffMillis = Math.max(throttleEndTimeMillis - Date.now(), 0);
    var timeout = setTimeout(resolve, backoffMillis); // Adds listener, rather than sets onabort, because signal is a shared object.

    signal.addEventListener(function () {
      clearTimeout(timeout); // If the request completes before this timeout, the rejection has no effect.

      reject(ERROR_FACTORY.create("fetch-throttle"
      /* FETCH_THROTTLE */
      , {
        throttleEndTimeMillis: throttleEndTimeMillis
      }));
    });
  });
}
/**
 * Returns true if the {@link Error} indicates a fetch request may succeed later.
 */


function isRetriableError(e) {
  if (!(e instanceof _firebase_util__WEBPACK_IMPORTED_MODULE_4__["FirebaseError"]) || !e.customData) {
    return false;
  } // Uses string index defined by ErrorData, which FirebaseError implements.


  var httpStatus = Number(e.customData['httpStatus']);
  return httpStatus === 429 || httpStatus === 500 || httpStatus === 503 || httpStatus === 504;
}
/**
 * Shims a minimal AbortSignal (copied from Remote Config).
 *
 * <p>AbortController's AbortSignal conveniently decouples fetch timeout logic from other aspects
 * of networking, such as retries. Firebase doesn't use AbortController enough to justify a
 * polyfill recommendation, like we do with the Fetch API, but this minimal shim can easily be
 * swapped out if/when we do.
 */


var AnalyticsAbortSignal =
/** @class */
function () {
  function AnalyticsAbortSignal() {
    this.listeners = [];
  }

  AnalyticsAbortSignal.prototype.addEventListener = function (listener) {
    this.listeners.push(listener);
  };

  AnalyticsAbortSignal.prototype.abort = function () {
    this.listeners.forEach(function (listener) {
      return listener();
    });
  };

  return AnalyticsAbortSignal;
}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function validateIndexedDB() {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
    var e_1;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (!!Object(_firebase_util__WEBPACK_IMPORTED_MODULE_4__["isIndexedDBAvailable"])()) return [3
          /*break*/
          , 1];
          logger.warn(ERROR_FACTORY.create("indexeddb-unavailable"
          /* INDEXEDDB_UNAVAILABLE */
          , {
            errorInfo: 'IndexedDB is not available in this environment.'
          }).message);
          return [2
          /*return*/
          , false];

        case 1:
          _a.trys.push([1, 3,, 4]);

          return [4
          /*yield*/
          , Object(_firebase_util__WEBPACK_IMPORTED_MODULE_4__["validateIndexedDBOpenable"])()];

        case 2:
          _a.sent();

          return [3
          /*break*/
          , 4];

        case 3:
          e_1 = _a.sent();
          logger.warn(ERROR_FACTORY.create("indexeddb-unavailable"
          /* INDEXEDDB_UNAVAILABLE */
          , {
            errorInfo: e_1
          }).message);
          return [2
          /*return*/
          , false];

        case 4:
          return [2
          /*return*/
          , true];
      }
    });
  });
}
/**
 * Initialize the analytics instance in gtag.js by calling config command with fid.
 *
 * NOTE: We combine analytics initialization and setting fid together because we want fid to be
 * part of the `page_view` event that's sent during the initialization
 * @param app Firebase app
 * @param gtagCore The gtag function that's not wrapped.
 * @param dynamicConfigPromisesList Array of all dynamic config promises.
 * @param measurementIdToAppId Maps measurementID to appID.
 * @param installations FirebaseInstallations instance.
 *
 * @returns Measurement ID.
 */


function initializeIds(app, dynamicConfigPromisesList, measurementIdToAppId, installations, gtagCore, dataLayerName) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
    var dynamicConfigPromise, fidPromise, _a, dynamicConfig, fid, configProperties;

    var _b;

    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
      switch (_c.label) {
        case 0:
          dynamicConfigPromise = fetchDynamicConfigWithRetry(app); // Once fetched, map measurementIds to appId, for ease of lookup in wrapped gtag function.

          dynamicConfigPromise.then(function (config) {
            measurementIdToAppId[config.measurementId] = config.appId;

            if (app.options.measurementId && config.measurementId !== app.options.measurementId) {
              logger.warn("The measurement ID in the local Firebase config (" + app.options.measurementId + ")" + (" does not match the measurement ID fetched from the server (" + config.measurementId + ").") + " To ensure analytics events are always sent to the correct Analytics property," + " update the" + " measurement ID field in the local config or remove it from the local config.");
            }
          }).catch(function (e) {
            return logger.error(e);
          }); // Add to list to track state of all dynamic config promises.

          dynamicConfigPromisesList.push(dynamicConfigPromise);
          fidPromise = validateIndexedDB().then(function (envIsValid) {
            if (envIsValid) {
              return installations.getId();
            } else {
              return undefined;
            }
          });
          return [4
          /*yield*/
          , Promise.all([dynamicConfigPromise, fidPromise])];

        case 1:
          _a = _c.sent(), dynamicConfig = _a[0], fid = _a[1]; // Detect if user has already put the gtag <script> tag on this page.

          if (!findGtagScriptOnPage()) {
            insertScriptTag(dataLayerName, dynamicConfig.measurementId);
          } // This command initializes gtag.js and only needs to be called once for the entire web app,
          // but since it is idempotent, we can call it multiple times.
          // We keep it together with other initialization logic for better code structure.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any


          gtagCore('js', new Date());
          configProperties = (_b = {}, // guard against developers accidentally setting properties with prefix `firebase_`
          _b[ORIGIN_KEY] = 'firebase', _b.update = true, _b);

          if (fid != null) {
            configProperties[GA_FID_KEY] = fid;
          } // It should be the first config command called on this GA-ID
          // Initialize this GA-ID and set FID on it using the gtag config API.
          // Note: This will trigger a page_view event unless 'send_page_view' is set to false in
          // `configProperties`.


          gtagCore(GtagCommand.CONFIG, dynamicConfig.measurementId, configProperties);
          return [2
          /*return*/
          , dynamicConfig.measurementId];
      }
    });
  });
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Maps appId to full initialization promise. Wrapped gtag calls must wait on
 * all or some of these, depending on the call's `send_to` param and the status
 * of the dynamic config fetches (see below).
 */


var initializationPromisesMap = {};
/**
 * List of dynamic config fetch promises. In certain cases, wrapped gtag calls
 * wait on all these to be complete in order to determine if it can selectively
 * wait for only certain initialization (FID) promises or if it must wait for all.
 */

var dynamicConfigPromisesList = [];
/**
 * Maps fetched measurementIds to appId. Populated when the app's dynamic config
 * fetch completes. If already populated, gtag config calls can use this to
 * selectively wait for only this app's initialization promise (FID) instead of all
 * initialization promises.
 */

var measurementIdToAppId = {};
/**
 * Name for window global data layer array used by GA: defaults to 'dataLayer'.
 */

var dataLayerName = 'dataLayer';
/**
 * Name for window global gtag function used by GA: defaults to 'gtag'.
 */

var gtagName = 'gtag';
/**
 * Reproduction of standard gtag function or reference to existing
 * gtag function on window object.
 */

var gtagCoreFunction;
/**
 * Wrapper around gtag function that ensures FID is sent with all
 * relevant event and config calls.
 */

var wrappedGtagFunction;
/**
 * Flag to ensure page initialization steps (creation or wrapping of
 * dataLayer and gtag script) are only run once per page load.
 */

var globalInitDone = false;
/**
 * For testing
 */

function resetGlobalVars(newGlobalInitDone, newInitializationPromisesMap, newDynamicPromises) {
  if (newGlobalInitDone === void 0) {
    newGlobalInitDone = false;
  }

  if (newInitializationPromisesMap === void 0) {
    newInitializationPromisesMap = {};
  }

  if (newDynamicPromises === void 0) {
    newDynamicPromises = [];
  }

  globalInitDone = newGlobalInitDone;
  initializationPromisesMap = newInitializationPromisesMap;
  dynamicConfigPromisesList = newDynamicPromises;
  dataLayerName = 'dataLayer';
  gtagName = 'gtag';
}
/**
 * For testing
 */


function getGlobalVars() {
  return {
    initializationPromisesMap: initializationPromisesMap,
    dynamicConfigPromisesList: dynamicConfigPromisesList
  };
}
/**
 * This must be run before calling firebase.analytics() or it won't
 * have any effect.
 * @param options Custom gtag and dataLayer names.
 */


function settings(options) {
  if (globalInitDone) {
    throw ERROR_FACTORY.create("already-initialized"
    /* ALREADY_INITIALIZED */
    );
  }

  if (options.dataLayerName) {
    dataLayerName = options.dataLayerName;
  }

  if (options.gtagName) {
    gtagName = options.gtagName;
  }
}
/**
 * Returns true if no environment mismatch is found.
 * If environment mismatches are found, throws an INVALID_ANALYTICS_CONTEXT
 * error that also lists details for each mismatch found.
 */


function warnOnBrowserContextMismatch() {
  var mismatchedEnvMessages = [];

  if (Object(_firebase_util__WEBPACK_IMPORTED_MODULE_4__["isBrowserExtension"])()) {
    mismatchedEnvMessages.push('This is a browser extension environment.');
  }

  if (!Object(_firebase_util__WEBPACK_IMPORTED_MODULE_4__["areCookiesEnabled"])()) {
    mismatchedEnvMessages.push('Cookies are not available.');
  }

  if (mismatchedEnvMessages.length > 0) {
    var details = mismatchedEnvMessages.map(function (message, index) {
      return "(" + (index + 1) + ") " + message;
    }).join(' ');
    var err = ERROR_FACTORY.create("invalid-analytics-context"
    /* INVALID_ANALYTICS_CONTEXT */
    , {
      errorInfo: details
    });
    logger.warn(err.message);
  }
}

function factory(app, installations) {
  warnOnBrowserContextMismatch();
  var appId = app.options.appId;

  if (!appId) {
    throw ERROR_FACTORY.create("no-app-id"
    /* NO_APP_ID */
    );
  }

  if (!app.options.apiKey) {
    if (app.options.measurementId) {
      logger.warn("The \"apiKey\" field is empty in the local Firebase config. This is needed to fetch the latest" + (" measurement ID for this Firebase app. Falling back to the measurement ID " + app.options.measurementId) + " provided in the \"measurementId\" field in the local Firebase config.");
    } else {
      throw ERROR_FACTORY.create("no-api-key"
      /* NO_API_KEY */
      );
    }
  }

  if (initializationPromisesMap[appId] != null) {
    throw ERROR_FACTORY.create("already-exists"
    /* ALREADY_EXISTS */
    , {
      id: appId
    });
  }

  if (!globalInitDone) {
    // Steps here should only be done once per page: creation or wrapping
    // of dataLayer and global gtag function.
    getOrCreateDataLayer(dataLayerName);

    var _a = wrapOrCreateGtag(initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId, dataLayerName, gtagName),
        wrappedGtag = _a.wrappedGtag,
        gtagCore = _a.gtagCore;

    wrappedGtagFunction = wrappedGtag;
    gtagCoreFunction = gtagCore;
    globalInitDone = true;
  } // Async but non-blocking.
  // This map reflects the completion state of all promises for each appId.


  initializationPromisesMap[appId] = initializeIds(app, dynamicConfigPromisesList, measurementIdToAppId, installations, gtagCoreFunction, dataLayerName);
  var analyticsInstance = {
    app: app,
    // Public methods return void for API simplicity and to better match gtag,
    // while internal implementations return promises.
    logEvent: function logEvent(eventName, eventParams, options) {
      _logEvent(wrappedGtagFunction, initializationPromisesMap[appId], eventName, eventParams, options).catch(function (e) {
        return logger.error(e);
      });
    },
    setCurrentScreen: function setCurrentScreen(screenName, options) {
      _setCurrentScreen(wrappedGtagFunction, initializationPromisesMap[appId], screenName, options).catch(function (e) {
        return logger.error(e);
      });
    },
    setUserId: function setUserId(id, options) {
      _setUserId(wrappedGtagFunction, initializationPromisesMap[appId], id, options).catch(function (e) {
        return logger.error(e);
      });
    },
    setUserProperties: function setUserProperties(properties, options) {
      _setUserProperties(wrappedGtagFunction, initializationPromisesMap[appId], properties, options).catch(function (e) {
        return logger.error(e);
      });
    },
    setAnalyticsCollectionEnabled: function setAnalyticsCollectionEnabled(enabled) {
      _setAnalyticsCollectionEnabled(initializationPromisesMap[appId], enabled).catch(function (e) {
        return logger.error(e);
      });
    },
    INTERNAL: {
      delete: function _delete() {
        delete initializationPromisesMap[appId];
        return Promise.resolve();
      }
    }
  };
  return analyticsInstance;
}

var name = "@firebase/analytics";
var version = "0.6.4";
/**
 * Type constant for Firebase Analytics.
 */

var ANALYTICS_TYPE = 'analytics';

function registerAnalytics(instance) {
  instance.INTERNAL.registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_5__["Component"](ANALYTICS_TYPE, function (container) {
    // getImmediate for FirebaseApp will always succeed
    var app = container.getProvider('app').getImmediate();
    var installations = container.getProvider('installations').getImmediate();
    return factory(app, installations);
  }, "PUBLIC"
  /* PUBLIC */
  ).setServiceProps({
    settings: settings,
    EventName: EventName,
    isSupported: isSupported
  }));
  instance.INTERNAL.registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_5__["Component"]('analytics-internal', internalFactory, "PRIVATE"
  /* PRIVATE */
  ));
  instance.registerVersion(name, version);

  function internalFactory(container) {
    try {
      var analytics = container.getProvider(ANALYTICS_TYPE).getImmediate();
      return {
        logEvent: analytics.logEvent
      };
    } catch (e) {
      throw ERROR_FACTORY.create("interop-component-reg-failed"
      /* INTEROP_COMPONENT_REG_FAILED */
      , {
        reason: e
      });
    }
  }
}

registerAnalytics(_firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"]);
/**
 * this is a public static method provided to users that wraps four different checks:
 *
 * 1. check if it's not a browser extension environment.
 * 1. check if cookie is enabled in current browser.
 * 3. check if IndexedDB is supported by the browser environment.
 * 4. check if the current browser context is valid for using IndexedDB.
 *
 */

function isSupported() {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
    var isDBOpenable, error_1;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (Object(_firebase_util__WEBPACK_IMPORTED_MODULE_4__["isBrowserExtension"])()) {
            return [2
            /*return*/
            , false];
          }

          if (!Object(_firebase_util__WEBPACK_IMPORTED_MODULE_4__["areCookiesEnabled"])()) {
            return [2
            /*return*/
            , false];
          }

          if (!Object(_firebase_util__WEBPACK_IMPORTED_MODULE_4__["isIndexedDBAvailable"])()) {
            return [2
            /*return*/
            , false];
          }

          _a.label = 1;

        case 1:
          _a.trys.push([1, 3,, 4]);

          return [4
          /*yield*/
          , Object(_firebase_util__WEBPACK_IMPORTED_MODULE_4__["validateIndexedDBOpenable"])()];

        case 2:
          isDBOpenable = _a.sent();
          return [2
          /*return*/
          , isDBOpenable];

        case 3:
          error_1 = _a.sent();
          return [2
          /*return*/
          , false];

        case 4:
          return [2
          /*return*/
          ];
      }
    });
  });
}



/***/ }),

/***/ "5Zbi":
/*!*******************************************************************************!*\
  !*** ./src/app/login/components/forget-password/forget-password.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ForgetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordComponent", function() { return ForgetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "JZFu");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "6Hrc");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _shared_services_noti_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/noti.service */ "y1Wr");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









var ForgetPasswordComponent = /** @class */ (function () {
    function ForgetPasswordComponent(dialogRef, data, auth, angularFireAuth, notiService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.auth = auth;
        this.angularFireAuth = angularFireAuth;
        this.notiService = notiService;
        this.email = "";
        this.authError = "";
        this.isSendSuccessfully = false;
    }
    ForgetPasswordComponent.prototype.ngOnInit = function () {
        // this.auth.eventAuthError$.subscribe(data => {
        //   if (data["message"].includes("signInWithEmailAndPassword ")) {
        //     this.authError = "";
        //   }
        //   this.authError = data;
        //   console.log("err:" + data)
        // })
    };
    ForgetPasswordComponent.prototype.closeForgetPass = function () {
        this.dialogRef.close();
    };
    ForgetPasswordComponent.prototype.sendResetPass = function () {
        var _this = this;
        if (this.validateEmail(this.email)) {
            firebase__WEBPACK_IMPORTED_MODULE_2__["default"].auth().languageCode = "en";
            this.authError = "";
            this.auth.resetPassword(this.email).then(function () {
                _this.auth.eventAuthError$.subscribe(function (data) {
                    console.log("has err?", data["message"]);
                    if (data["message"]) {
                        _this.authError = data["message"];
                    }
                    else {
                        _this.authError = "";
                        // show noti success and close dialog
                        _this.notiService.success("Đã gửi email reset mật khẩu!");
                        _this.closeForgetPass();
                    }
                }).unsubscribe();
            });
        }
        else {
            this.authError = "Email không hợp lệ";
        }
    };
    ForgetPasswordComponent.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    ForgetPasswordComponent.ɵfac = function ForgetPasswordComponent_Factory(t) { return new (t || ForgetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_noti_service__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"])); };
    ForgetPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForgetPasswordComponent, selectors: [["app-forget-password"]], decls: 16, vars: 2, consts: [[1, "forgetPass"], [1, "container"], [1, "closeBtn", "btn", "material-icons", 3, "click"], [1, "forgetPass__title"], [1, "error-text"], [1, "input__wrapper"], [1, "material-icons"], ["type", "email", "name", "email", "required", "", "placeholder", "Email c\u1EE7a b\u1EA1n", 1, "email", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "sendBtn", "btn", 3, "click"]], template: function ForgetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgetPasswordComponent_Template_button_click_2_listener() { return ctx.closeForgetPass(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "close");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "B\u1EA1n qu\u00EAn m\u1EADt kh\u1EA9u?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Nh\u1EADp email c\u1EE7a b\u1EA1n \u0111\u1EC3 \u0111\u1EB7t l\u1EA1i m\u1EADt kh\u1EA9u");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " mail ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ForgetPasswordComponent_Template_input_ngModelChange_13_listener($event) { return ctx.email = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgetPasswordComponent_Template_button_click_14_listener() { return ctx.sendResetPass(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "G\u1EEDi");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.authError);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]], styles: [".forgetPass[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  width: 100vw;\n  height: 85vh;\n  background: #fff;\n  right: 0;\n  border-top-right-radius: 20px;\n  border-top-left-radius: 20px;\n}\n.forgetPass[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  position: relative;\n  padding-top: 2rem;\n  display: flex;\n  flex-direction: column;\n}\n.forgetPass[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .closeBtn[_ngcontent-%COMP%] {\n  position: absolute;\n  content: \"\";\n  right: 5px;\n  top: 0;\n  font-size: 2rem;\n  font-weight: bold;\n}\n.forgetPass[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .forgetPass__title[_ngcontent-%COMP%] {\n  margin: 3rem 0 2rem 0;\n}\n.forgetPass[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.forgetPass[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .error-text[_ngcontent-%COMP%] {\n  color: red;\n}\n.forgetPass[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .input__wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.forgetPass[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .input__wrapper[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  position: absolute;\n  content: \"\";\n  left: 14px;\n  color: #c8ccd1;\n}\n.forgetPass[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .input__wrapper[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 20px;\n  padding: 0.85rem;\n  padding-left: 4rem;\n  outline: none;\n  border: 1px solid #ced6e1;\n  font-size: 14px;\n}\n.forgetPass[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .sendBtn[_ngcontent-%COMP%] {\n  margin: 2rem auto;\n  background-color: #d5e7f7;\n  border-radius: 2rem;\n  font-size: 1.6rem;\n  font-weight: 500;\n  color: #224177;\n  padding: 0.75rem 6rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsUUFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7QUFBRjtBQUVFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUFKO0FBRUk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUFOO0FBR0k7RUFDRSxxQkFBQTtBQUROO0FBSUk7RUFDRSxlQUFBO0FBRk47QUFLSTtFQUNFLFVBQUE7QUFITjtBQU1JO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFKTjtBQU1NO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFKUjtBQU9NO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUFMUjtBQVNJO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQVBOIiwiZmlsZSI6ImZvcmdldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZvcmdldCBQYXNzd29yZFxyXG4uZm9yZ2V0UGFzcyB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiA4NXZoO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIC5jbG9zZUJ0biB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgcmlnaHQ6IDVweDtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb3JnZXRQYXNzX190aXRsZSB7XHJcbiAgICAgIG1hcmdpbjogM3JlbSAwIDJyZW0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5lcnJvci10ZXh0IHtcclxuICAgICAgY29sb3I6IHJlZDtcclxuICAgIH1cclxuXHJcbiAgICAuaW5wdXRfX3dyYXBwZXIge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgIC5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgbGVmdDogMTRweDtcclxuICAgICAgICBjb2xvcjogI2M4Y2NkMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmVtYWlsIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDAuODVyZW07XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0cmVtO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDZlMTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2VuZEJ0biB7XHJcbiAgICAgIG1hcmdpbjogMnJlbSBhdXRvO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDVlN2Y3O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gICAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgY29sb3I6ICMyMjQxNzc7XHJcbiAgICAgIHBhZGRpbmc6IDAuNzVyZW0gNnJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
    return ForgetPasswordComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgetPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forget-password',
                templateUrl: './forget-password.component.html',
                styleUrls: ['./forget-password.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] }, { type: _shared_services_noti_service__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"] }]; }, null); })();


/***/ }),

/***/ "6Uf2":
/*!***********************************************************!*\
  !*** ./node_modules/@firebase/database/dist/index.esm.js ***!
  \***********************************************************/
/*! exports provided: DataSnapshot, Database, OnDisconnect, Query, Reference, ServerValue, enableLogging, registerDatabase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSnapshot", function() { return DataSnapshot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Database", function() { return Database; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnDisconnect", function() { return OnDisconnect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Query", function() { return Query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reference", function() { return Reference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerValue", function() { return ServerValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableLogging", function() { return enableLogging; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerDatabase", function() { return registerDatabase; });
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app */ "zIRd");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "WVRz");
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/util */ "qOnz");
/* harmony import */ var _firebase_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase/logger */ "q/0M");
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @firebase/component */ "/6Yf");





/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Wraps a DOM Storage object and:
 * - automatically encode objects as JSON strings before storing them to allow us to store arbitrary types.
 * - prefixes names with "firebase:" to avoid collisions with app data.
 *
 * We automatically (see storage.js) create two such wrappers, one for sessionStorage,
 * and one for localStorage.
 *
 */

var DOMStorageWrapper =
/** @class */
function () {
  /**
   * @param domStorage_ The underlying storage object (e.g. localStorage or sessionStorage)
   */
  function DOMStorageWrapper(domStorage_) {
    this.domStorage_ = domStorage_; // Use a prefix to avoid collisions with other stuff saved by the app.

    this.prefix_ = 'firebase:';
  }
  /**
   * @param key The key to save the value under
   * @param value The value being stored, or null to remove the key.
   */


  DOMStorageWrapper.prototype.set = function (key, value) {
    if (value == null) {
      this.domStorage_.removeItem(this.prefixedName_(key));
    } else {
      this.domStorage_.setItem(this.prefixedName_(key), Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["stringify"])(value));
    }
  };
  /**
   * @return The value that was stored under this key, or null
   */


  DOMStorageWrapper.prototype.get = function (key) {
    var storedVal = this.domStorage_.getItem(this.prefixedName_(key));

    if (storedVal == null) {
      return null;
    } else {
      return Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["jsonEval"])(storedVal);
    }
  };

  DOMStorageWrapper.prototype.remove = function (key) {
    this.domStorage_.removeItem(this.prefixedName_(key));
  };

  DOMStorageWrapper.prototype.prefixedName_ = function (name) {
    return this.prefix_ + name;
  };

  DOMStorageWrapper.prototype.toString = function () {
    return this.domStorage_.toString();
  };

  return DOMStorageWrapper;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * An in-memory storage implementation that matches the API of DOMStorageWrapper
 * (TODO: create interface for both to implement).
 */


var MemoryStorage =
/** @class */
function () {
  function MemoryStorage() {
    this.cache_ = {};
    this.isInMemoryStorage = true;
  }

  MemoryStorage.prototype.set = function (key, value) {
    if (value == null) {
      delete this.cache_[key];
    } else {
      this.cache_[key] = value;
    }
  };

  MemoryStorage.prototype.get = function (key) {
    if (Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["contains"])(this.cache_, key)) {
      return this.cache_[key];
    }

    return null;
  };

  MemoryStorage.prototype.remove = function (key) {
    delete this.cache_[key];
  };

  return MemoryStorage;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Helper to create a DOMStorageWrapper or else fall back to MemoryStorage.
 * TODO: Once MemoryStorage and DOMStorageWrapper have a shared interface this method annotation should change
 * to reflect this type
 *
 * @param domStorageName Name of the underlying storage object
 *   (e.g. 'localStorage' or 'sessionStorage').
 * @return Turning off type information until a common interface is defined.
 */


var createStoragefor = function createStoragefor(domStorageName) {
  try {
    // NOTE: just accessing "localStorage" or "window['localStorage']" may throw a security exception,
    // so it must be inside the try/catch.
    if (typeof window !== 'undefined' && typeof window[domStorageName] !== 'undefined') {
      // Need to test cache. Just because it's here doesn't mean it works
      var domStorage = window[domStorageName];
      domStorage.setItem('firebase:sentinel', 'cache');
      domStorage.removeItem('firebase:sentinel');
      return new DOMStorageWrapper(domStorage);
    }
  } catch (e) {} // Failed to create wrapper.  Just return in-memory storage.
  // TODO: log?


  return new MemoryStorage();
};
/** A storage object that lasts across sessions */


var PersistentStorage = createStoragefor('localStorage');
/** A storage object that only lasts one session */

var SessionStorage = createStoragefor('sessionStorage');
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var logClient = new _firebase_logger__WEBPACK_IMPORTED_MODULE_3__["Logger"]('@firebase/database');
/**
 * Returns a locally-unique ID (generated by just incrementing up from 0 each time its called).
 */

var LUIDGenerator = function () {
  var id = 1;
  return function () {
    return id++;
  };
}();
/**
 * Sha1 hash of the input string
 * @param str The string to hash
 * @return {!string} The resulting hash
 */


var sha1 = function sha1(str) {
  var utf8Bytes = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["stringToByteArray"])(str);
  var sha1 = new _firebase_util__WEBPACK_IMPORTED_MODULE_2__["Sha1"]();
  sha1.update(utf8Bytes);
  var sha1Bytes = sha1.digest();
  return _firebase_util__WEBPACK_IMPORTED_MODULE_2__["base64"].encodeByteArray(sha1Bytes);
};

var buildLogMessage_ = function buildLogMessage_() {
  var varArgs = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    varArgs[_i] = arguments[_i];
  }

  var message = '';

  for (var i = 0; i < varArgs.length; i++) {
    var arg = varArgs[i];

    if (Array.isArray(arg) || arg && typeof arg === 'object' && // eslint-disable-next-line @typescript-eslint/no-explicit-any
    typeof arg.length === 'number') {
      message += buildLogMessage_.apply(null, arg);
    } else if (typeof arg === 'object') {
      message += Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["stringify"])(arg);
    } else {
      message += arg;
    }

    message += ' ';
  }

  return message;
};
/**
 * Use this for all debug messages in Firebase.
 */


var logger = null;
/**
 * Flag to check for log availability on first log message
 */

var firstLog_ = true;
/**
 * The implementation of Firebase.enableLogging (defined here to break dependencies)
 * @param logger_ A flag to turn on logging, or a custom logger
 * @param persistent Whether or not to persist logging settings across refreshes
 */

var enableLogging = function enableLogging(logger_, persistent) {
  Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(!persistent || logger_ === true || logger_ === false, "Can't turn on custom loggers persistently.");

  if (logger_ === true) {
    logClient.logLevel = _firebase_logger__WEBPACK_IMPORTED_MODULE_3__["LogLevel"].VERBOSE;
    logger = logClient.log.bind(logClient);

    if (persistent) {
      SessionStorage.set('logging_enabled', true);
    }
  } else if (typeof logger_ === 'function') {
    logger = logger_;
  } else {
    logger = null;
    SessionStorage.remove('logging_enabled');
  }
};

var log = function log() {
  var varArgs = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    varArgs[_i] = arguments[_i];
  }

  if (firstLog_ === true) {
    firstLog_ = false;

    if (logger === null && SessionStorage.get('logging_enabled') === true) {
      enableLogging(true);
    }
  }

  if (logger) {
    var message = buildLogMessage_.apply(null, varArgs);
    logger(message);
  }
};

var logWrapper = function logWrapper(prefix) {
  return function () {
    var varArgs = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      varArgs[_i] = arguments[_i];
    }

    log.apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])([prefix], varArgs));
  };
};

var error = function error() {
  var varArgs = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    varArgs[_i] = arguments[_i];
  }

  var message = 'FIREBASE INTERNAL ERROR: ' + buildLogMessage_.apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(varArgs));
  logClient.error(message);
};

var fatal = function fatal() {
  var varArgs = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    varArgs[_i] = arguments[_i];
  }

  var message = "FIREBASE FATAL ERROR: " + buildLogMessage_.apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(varArgs));
  logClient.error(message);
  throw new Error(message);
};

var warn = function warn() {
  var varArgs = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    varArgs[_i] = arguments[_i];
  }

  var message = 'FIREBASE WARNING: ' + buildLogMessage_.apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(varArgs));
  logClient.warn(message);
};
/**
 * Logs a warning if the containing page uses https. Called when a call to new Firebase
 * does not use https.
 */


var warnIfPageIsSecure = function warnIfPageIsSecure() {
  // Be very careful accessing browser globals. Who knows what may or may not exist.
  if (typeof window !== 'undefined' && window.location && window.location.protocol && window.location.protocol.indexOf('https:') !== -1) {
    warn('Insecure Firebase access from a secure page. ' + 'Please use https in calls to new Firebase().');
  }
};
/**
 * Returns true if data is NaN, or +/- Infinity.
 */


var isInvalidJSONNumber = function isInvalidJSONNumber(data) {
  return typeof data === 'number' && (data !== data || // NaN
  data === Number.POSITIVE_INFINITY || data === Number.NEGATIVE_INFINITY);
};

var executeWhenDOMReady = function executeWhenDOMReady(fn) {
  if (Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["isNodeSdk"])() || document.readyState === 'complete') {
    fn();
  } else {
    // Modeled after jQuery. Try DOMContentLoaded and onreadystatechange (which
    // fire before onload), but fall back to onload.
    var called_1 = false;

    var wrappedFn_1 = function wrappedFn_1() {
      if (!document.body) {
        setTimeout(wrappedFn_1, Math.floor(10));
        return;
      }

      if (!called_1) {
        called_1 = true;
        fn();
      }
    };

    if (document.addEventListener) {
      document.addEventListener('DOMContentLoaded', wrappedFn_1, false); // fallback to onload.

      window.addEventListener('load', wrappedFn_1, false); // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } else if (document.attachEvent) {
      // IE.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      document.attachEvent('onreadystatechange', function () {
        if (document.readyState === 'complete') {
          wrappedFn_1();
        }
      }); // fallback to onload.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any

      window.attachEvent('onload', wrappedFn_1); // jQuery has an extra hack for IE that we could employ (based on
      // http://javascript.nwbox.com/IEContentLoaded/) But it looks really old.
      // I'm hoping we don't need it.
    }
  }
};
/**
 * Minimum key name. Invalid for actual data, used as a marker to sort before any valid names
 */


var MIN_NAME = '[MIN_NAME]';
/**
 * Maximum key name. Invalid for actual data, used as a marker to sort above any valid names
 */

var MAX_NAME = '[MAX_NAME]';
/**
 * Compares valid Firebase key names, plus min and max name
 */

var nameCompare = function nameCompare(a, b) {
  if (a === b) {
    return 0;
  } else if (a === MIN_NAME || b === MAX_NAME) {
    return -1;
  } else if (b === MIN_NAME || a === MAX_NAME) {
    return 1;
  } else {
    var aAsInt = tryParseInt(a),
        bAsInt = tryParseInt(b);

    if (aAsInt !== null) {
      if (bAsInt !== null) {
        return aAsInt - bAsInt === 0 ? a.length - b.length : aAsInt - bAsInt;
      } else {
        return -1;
      }
    } else if (bAsInt !== null) {
      return 1;
    } else {
      return a < b ? -1 : 1;
    }
  }
};
/**
 * @return {!number} comparison result.
 */


var stringCompare = function stringCompare(a, b) {
  if (a === b) {
    return 0;
  } else if (a < b) {
    return -1;
  } else {
    return 1;
  }
};

var requireKey = function requireKey(key, obj) {
  if (obj && key in obj) {
    return obj[key];
  } else {
    throw new Error('Missing required key (' + key + ') in object: ' + Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["stringify"])(obj));
  }
};

var ObjectToUniqueKey = function ObjectToUniqueKey(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["stringify"])(obj);
  }

  var keys = []; // eslint-disable-next-line guard-for-in

  for (var k in obj) {
    keys.push(k);
  } // Export as json, but with the keys sorted.


  keys.sort();
  var key = '{';

  for (var i = 0; i < keys.length; i++) {
    if (i !== 0) {
      key += ',';
    }

    key += Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["stringify"])(keys[i]);
    key += ':';
    key += ObjectToUniqueKey(obj[keys[i]]);
  }

  key += '}';
  return key;
};
/**
 * Splits a string into a number of smaller segments of maximum size
 * @param str The string
 * @param segsize The maximum number of chars in the string.
 * @return The string, split into appropriately-sized chunks
 */


var splitStringBySize = function splitStringBySize(str, segsize) {
  var len = str.length;

  if (len <= segsize) {
    return [str];
  }

  var dataSegs = [];

  for (var c = 0; c < len; c += segsize) {
    if (c + segsize > len) {
      dataSegs.push(str.substring(c, len));
    } else {
      dataSegs.push(str.substring(c, c + segsize));
    }
  }

  return dataSegs;
};
/**
 * Apply a function to each (key, value) pair in an object or
 * apply a function to each (index, value) pair in an array
 * @param obj The object or array to iterate over
 * @param fn The function to apply
 */


function each(obj, fn) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      fn(key, obj[key]);
    }
  }
}
/**
 * Borrowed from http://hg.secondlife.com/llsd/src/tip/js/typedarray.js (MIT License)
 * I made one modification at the end and removed the NaN / Infinity
 * handling (since it seemed broken [caused an overflow] and we don't need it).  See MJL comments.
 * @param v A double
 *
 */


var doubleToIEEE754String = function doubleToIEEE754String(v) {
  Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(!isInvalidJSONNumber(v), 'Invalid JSON number'); // MJL

  var ebits = 11,
      fbits = 52;
  var bias = (1 << ebits - 1) - 1;
  var s, e, f, ln, i; // Compute sign, exponent, fraction
  // Skip NaN / Infinity handling --MJL.

  if (v === 0) {
    e = 0;
    f = 0;
    s = 1 / v === -Infinity ? 1 : 0;
  } else {
    s = v < 0;
    v = Math.abs(v);

    if (v >= Math.pow(2, 1 - bias)) {
      // Normalized
      ln = Math.min(Math.floor(Math.log(v) / Math.LN2), bias);
      e = ln + bias;
      f = Math.round(v * Math.pow(2, fbits - ln) - Math.pow(2, fbits));
    } else {
      // Denormalized
      e = 0;
      f = Math.round(v / Math.pow(2, 1 - bias - fbits));
    }
  } // Pack sign, exponent, fraction


  var bits = [];

  for (i = fbits; i; i -= 1) {
    bits.push(f % 2 ? 1 : 0);
    f = Math.floor(f / 2);
  }

  for (i = ebits; i; i -= 1) {
    bits.push(e % 2 ? 1 : 0);
    e = Math.floor(e / 2);
  }

  bits.push(s ? 1 : 0);
  bits.reverse();
  var str = bits.join(''); // Return the data as a hex string. --MJL

  var hexByteString = '';

  for (i = 0; i < 64; i += 8) {
    var hexByte = parseInt(str.substr(i, 8), 2).toString(16);

    if (hexByte.length === 1) {
      hexByte = '0' + hexByte;
    }

    hexByteString = hexByteString + hexByte;
  }

  return hexByteString.toLowerCase();
};
/**
 * Used to detect if we're in a Chrome content script (which executes in an
 * isolated environment where long-polling doesn't work).
 */


var isChromeExtensionContentScript = function isChromeExtensionContentScript() {
  return !!(typeof window === 'object' && window['chrome'] && window['chrome']['extension'] && !/^chrome/.test(window.location.href));
};
/**
 * Used to detect if we're in a Windows 8 Store app.
 */


var isWindowsStoreApp = function isWindowsStoreApp() {
  // Check for the presence of a couple WinRT globals
  return typeof Windows === 'object' && typeof Windows.UI === 'object';
};
/**
 * Converts a server error code to a Javascript Error
 */


var errorForServerCode = function errorForServerCode(code, query) {
  var reason = 'Unknown Error';

  if (code === 'too_big') {
    reason = 'The data requested exceeds the maximum size ' + 'that can be accessed with a single request.';
  } else if (code === 'permission_denied') {
    reason = "Client doesn't have permission to access the desired data.";
  } else if (code === 'unavailable') {
    reason = 'The service is unavailable';
  }

  var error = new Error(code + ' at ' + query.path.toString() + ': ' + reason); // eslint-disable-next-line @typescript-eslint/no-explicit-any

  error.code = code.toUpperCase();
  return error;
};
/**
 * Used to test for integer-looking strings
 */


var INTEGER_REGEXP_ = new RegExp('^-?(0*)\\d{1,10}$');
/**
 * For use in keys, the minimum possible 32-bit integer.
 */

var INTEGER_32_MIN = -2147483648;
/**
 * For use in kyes, the maximum possible 32-bit integer.
 */

var INTEGER_32_MAX = 2147483647;
/**
 * If the string contains a 32-bit integer, return it.  Else return null.
 */

var tryParseInt = function tryParseInt(str) {
  if (INTEGER_REGEXP_.test(str)) {
    var intVal = Number(str);

    if (intVal >= INTEGER_32_MIN && intVal <= INTEGER_32_MAX) {
      return intVal;
    }
  }

  return null;
};
/**
 * Helper to run some code but catch any exceptions and re-throw them later.
 * Useful for preventing user callbacks from breaking internal code.
 *
 * Re-throwing the exception from a setTimeout is a little evil, but it's very
 * convenient (we don't have to try to figure out when is a safe point to
 * re-throw it), and the behavior seems reasonable:
 *
 * * If you aren't pausing on exceptions, you get an error in the console with
 *   the correct stack trace.
 * * If you're pausing on all exceptions, the debugger will pause on your
 *   exception and then again when we rethrow it.
 * * If you're only pausing on uncaught exceptions, the debugger will only pause
 *   on us re-throwing it.
 *
 * @param fn The code to guard.
 */


var exceptionGuard = function exceptionGuard(fn) {
  try {
    fn();
  } catch (e) {
    // Re-throw exception when it's safe.
    setTimeout(function () {
      // It used to be that "throw e" would result in a good console error with
      // relevant context, but as of Chrome 39, you just get the firebase.js
      // file/line number where we re-throw it, which is useless. So we log
      // e.stack explicitly.
      var stack = e.stack || '';
      warn('Exception was thrown by user callback.', stack);
      throw e;
    }, Math.floor(0));
  }
};
/**
 * @return {boolean} true if we think we're currently being crawled.
 */


var beingCrawled = function beingCrawled() {
  var userAgent = typeof window === 'object' && window['navigator'] && window['navigator']['userAgent'] || ''; // For now we whitelist the most popular crawlers.  We should refine this to be the set of crawlers we
  // believe to support JavaScript/AJAX rendering.
  // NOTE: Google Webmaster Tools doesn't really belong, but their "This is how a visitor to your website
  // would have seen the page" is flaky if we don't treat it as a crawler.

  return userAgent.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i) >= 0;
};
/**
 * Same as setTimeout() except on Node.JS it will /not/ prevent the process from exiting.
 *
 * It is removed with clearTimeout() as normal.
 *
 * @param fn Function to run.
 * @param time Milliseconds to wait before running.
 * @return The setTimeout() return value.
 */


var setTimeoutNonBlocking = function setTimeoutNonBlocking(fn, time) {
  var timeout = setTimeout(fn, time); // eslint-disable-next-line @typescript-eslint/no-explicit-any

  if (typeof timeout === 'object' && timeout['unref']) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    timeout['unref']();
  }

  return timeout;
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * An immutable object representing a parsed path.  It's immutable so that you
 * can pass them around to other functions without worrying about them changing
 * it.
 */


var Path =
/** @class */
function () {
  /**
   * @param pathOrString Path string to parse, or another path, or the raw
   * tokens array
   */
  function Path(pathOrString, pieceNum) {
    if (pieceNum === void 0) {
      this.pieces_ = pathOrString.split('/'); // Remove empty pieces.

      var copyTo = 0;

      for (var i = 0; i < this.pieces_.length; i++) {
        if (this.pieces_[i].length > 0) {
          this.pieces_[copyTo] = this.pieces_[i];
          copyTo++;
        }
      }

      this.pieces_.length = copyTo;
      this.pieceNum_ = 0;
    } else {
      this.pieces_ = pathOrString;
      this.pieceNum_ = pieceNum;
    }
  }

  Path.prototype.toString = function () {
    var pathString = '';

    for (var i = this.pieceNum_; i < this.pieces_.length; i++) {
      if (this.pieces_[i] !== '') {
        pathString += '/' + this.pieces_[i];
      }
    }

    return pathString || '/';
  };

  return Path;
}();

function newEmptyPath() {
  return new Path('');
}

function pathGetFront(path) {
  if (path.pieceNum_ >= path.pieces_.length) {
    return null;
  }

  return path.pieces_[path.pieceNum_];
}
/**
 * @return The number of segments in this path
 */


function pathGetLength(path) {
  return path.pieces_.length - path.pieceNum_;
}

function pathPopFront(path) {
  var pieceNum = path.pieceNum_;

  if (pieceNum < path.pieces_.length) {
    pieceNum++;
  }

  return new Path(path.pieces_, pieceNum);
}

function pathGetBack(path) {
  if (path.pieceNum_ < path.pieces_.length) {
    return path.pieces_[path.pieces_.length - 1];
  }

  return null;
}

function pathToUrlEncodedString(path) {
  var pathString = '';

  for (var i = path.pieceNum_; i < path.pieces_.length; i++) {
    if (path.pieces_[i] !== '') {
      pathString += '/' + encodeURIComponent(String(path.pieces_[i]));
    }
  }

  return pathString || '/';
}
/**
 * Shallow copy of the parts of the path.
 *
 */


function pathSlice(path, begin) {
  if (begin === void 0) {
    begin = 0;
  }

  return path.pieces_.slice(path.pieceNum_ + begin);
}

function pathParent(path) {
  if (path.pieceNum_ >= path.pieces_.length) {
    return null;
  }

  var pieces = [];

  for (var i = path.pieceNum_; i < path.pieces_.length - 1; i++) {
    pieces.push(path.pieces_[i]);
  }

  return new Path(pieces, 0);
}

function pathChild(path, childPathObj) {
  var pieces = [];

  for (var i = path.pieceNum_; i < path.pieces_.length; i++) {
    pieces.push(path.pieces_[i]);
  }

  if (childPathObj instanceof Path) {
    for (var i = childPathObj.pieceNum_; i < childPathObj.pieces_.length; i++) {
      pieces.push(childPathObj.pieces_[i]);
    }
  } else {
    var childPieces = childPathObj.split('/');

    for (var i = 0; i < childPieces.length; i++) {
      if (childPieces[i].length > 0) {
        pieces.push(childPieces[i]);
      }
    }
  }

  return new Path(pieces, 0);
}
/**
 * @return True if there are no segments in this path
 */


function pathIsEmpty(path) {
  return path.pieceNum_ >= path.pieces_.length;
}
/**
 * @return The path from outerPath to innerPath
 */


function newRelativePath(outerPath, innerPath) {
  var outer = pathGetFront(outerPath),
      inner = pathGetFront(innerPath);

  if (outer === null) {
    return innerPath;
  } else if (outer === inner) {
    return newRelativePath(pathPopFront(outerPath), pathPopFront(innerPath));
  } else {
    throw new Error('INTERNAL ERROR: innerPath (' + innerPath + ') is not within ' + 'outerPath (' + outerPath + ')');
  }
}
/**
 * @return -1, 0, 1 if left is less, equal, or greater than the right.
 */


function pathCompare(left, right) {
  var leftKeys = pathSlice(left, 0);
  var rightKeys = pathSlice(right, 0);

  for (var i = 0; i < leftKeys.length && i < rightKeys.length; i++) {
    var cmp = nameCompare(leftKeys[i], rightKeys[i]);

    if (cmp !== 0) {
      return cmp;
    }
  }

  if (leftKeys.length === rightKeys.length) {
    return 0;
  }

  return leftKeys.length < rightKeys.length ? -1 : 1;
}
/**
 * @return true if paths are the same.
 */


function pathEquals(path, other) {
  if (pathGetLength(path) !== pathGetLength(other)) {
    return false;
  }

  for (var i = path.pieceNum_, j = other.pieceNum_; i <= path.pieces_.length; i++, j++) {
    if (path.pieces_[i] !== other.pieces_[j]) {
      return false;
    }
  }

  return true;
}
/**
 * @return True if this path is a parent (or the same as) other
 */


function pathContains(path, other) {
  var i = path.pieceNum_;
  var j = other.pieceNum_;

  if (pathGetLength(path) > pathGetLength(other)) {
    return false;
  }

  while (i < path.pieces_.length) {
    if (path.pieces_[i] !== other.pieces_[j]) {
      return false;
    }

    ++i;
    ++j;
  }

  return true;
}
/**
 * Dynamic (mutable) path used to count path lengths.
 *
 * This class is used to efficiently check paths for valid
 * length (in UTF8 bytes) and depth (used in path validation).
 *
 * Throws Error exception if path is ever invalid.
 *
 * The definition of a path always begins with '/'.
 */


var ValidationPath =
/** @class */
function () {
  /**
   * @param path Initial Path.
   * @param errorPrefix_ Prefix for any error messages.
   */
  function ValidationPath(path, errorPrefix_) {
    this.errorPrefix_ = errorPrefix_;
    this.parts_ = pathSlice(path, 0);
    /** Initialize to number of '/' chars needed in path. */

    this.byteLength_ = Math.max(1, this.parts_.length);

    for (var i = 0; i < this.parts_.length; i++) {
      this.byteLength_ += Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["stringLength"])(this.parts_[i]);
    }

    this.checkValid_();
  }

  Object.defineProperty(ValidationPath, "MAX_PATH_DEPTH", {
    /** @const {number} Maximum key depth. */
    get: function get() {
      return 32;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ValidationPath, "MAX_PATH_LENGTH_BYTES", {
    /** @const {number} Maximum number of (UTF8) bytes in a Firebase path. */
    get: function get() {
      return 768;
    },
    enumerable: false,
    configurable: true
  });
  /** @param child */

  ValidationPath.prototype.push = function (child) {
    // Count the needed '/'
    if (this.parts_.length > 0) {
      this.byteLength_ += 1;
    }

    this.parts_.push(child);
    this.byteLength_ += Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["stringLength"])(child);
    this.checkValid_();
  };

  ValidationPath.prototype.pop = function () {
    var last = this.parts_.pop();
    this.byteLength_ -= Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["stringLength"])(last); // Un-count the previous '/'

    if (this.parts_.length > 0) {
      this.byteLength_ -= 1;
    }
  };

  ValidationPath.prototype.checkValid_ = function () {
    if (this.byteLength_ > ValidationPath.MAX_PATH_LENGTH_BYTES) {
      throw new Error(this.errorPrefix_ + 'has a key path longer than ' + ValidationPath.MAX_PATH_LENGTH_BYTES + ' bytes (' + this.byteLength_ + ').');
    }

    if (this.parts_.length > ValidationPath.MAX_PATH_DEPTH) {
      throw new Error(this.errorPrefix_ + 'path specified exceeds the maximum depth that can be written (' + ValidationPath.MAX_PATH_DEPTH + ') or object contains a cycle ' + this.toErrorString());
    }
  };
  /**
   * String for use in error messages - uses '.' notation for path.
   */


  ValidationPath.prototype.toErrorString = function () {
    if (this.parts_.length === 0) {
      return '';
    }

    return "in property '" + this.parts_.join('.') + "'";
  };

  return ValidationPath;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var PROTOCOL_VERSION = '5';
var VERSION_PARAM = 'v';
var TRANSPORT_SESSION_PARAM = 's';
var REFERER_PARAM = 'r';
var FORGE_REF = 'f'; // Matches console.firebase.google.com, firebase-console-*.corp.google.com and
// firebase.corp.google.com

var FORGE_DOMAIN_RE = /(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
var LAST_SESSION_PARAM = 'ls';
var APPLICATION_ID_PARAM = 'p';
var WEBSOCKET = 'websocket';
var LONG_POLLING = 'long_polling';
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * A class that holds metadata about a Repo object
 */

var RepoInfo =
/** @class */
function () {
  /**
   * @param host Hostname portion of the url for the repo
   * @param secure Whether or not this repo is accessed over ssl
   * @param namespace The namespace represented by the repo
   * @param webSocketOnly Whether to prefer websockets over all other transports (used by Nest).
   * @param nodeAdmin Whether this instance uses Admin SDK credentials
   * @param persistenceKey Override the default session persistence storage key
   */
  function RepoInfo(host, secure, namespace, webSocketOnly, nodeAdmin, persistenceKey, includeNamespaceInQueryParams) {
    if (nodeAdmin === void 0) {
      nodeAdmin = false;
    }

    if (persistenceKey === void 0) {
      persistenceKey = '';
    }

    if (includeNamespaceInQueryParams === void 0) {
      includeNamespaceInQueryParams = false;
    }

    this.secure = secure;
    this.namespace = namespace;
    this.webSocketOnly = webSocketOnly;
    this.nodeAdmin = nodeAdmin;
    this.persistenceKey = persistenceKey;
    this.includeNamespaceInQueryParams = includeNamespaceInQueryParams;
    this.host = host.toLowerCase();
    this.domain = this.host.substr(this.host.indexOf('.') + 1);
    this.internalHost = PersistentStorage.get('host:' + host) || this.host;
  }

  RepoInfo.prototype.needsQueryParam = function () {
    return this.host !== this.internalHost || this.isCustomHost() || this.includeNamespaceInQueryParams;
  };

  RepoInfo.prototype.isCacheableHost = function () {
    return this.internalHost.substr(0, 2) === 's-';
  };

  RepoInfo.prototype.isDemoHost = function () {
    return this.domain === 'firebaseio-demo.com';
  };

  RepoInfo.prototype.isCustomHost = function () {
    return this.domain !== 'firebaseio.com' && this.domain !== 'firebaseio-demo.com';
  };

  RepoInfo.prototype.updateHost = function (newHost) {
    if (newHost !== this.internalHost) {
      this.internalHost = newHost;

      if (this.isCacheableHost()) {
        PersistentStorage.set('host:' + this.host, this.internalHost);
      }
    }
  };
  /**
   * Returns the websocket URL for this repo
   * @param type of connection
   * @param params list
   * @return The URL for this repo
   */


  RepoInfo.prototype.connectionURL = function (type, params) {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(typeof type === 'string', 'typeof type must == string');
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(typeof params === 'object', 'typeof params must == object');
    var connURL;

    if (type === WEBSOCKET) {
      connURL = (this.secure ? 'wss://' : 'ws://') + this.internalHost + '/.ws?';
    } else if (type === LONG_POLLING) {
      connURL = (this.secure ? 'https://' : 'http://') + this.internalHost + '/.lp?';
    } else {
      throw new Error('Unknown connection type: ' + type);
    }

    if (this.needsQueryParam()) {
      params['ns'] = this.namespace;
    }

    var pairs = [];
    each(params, function (key, value) {
      pairs.push(key + '=' + value);
    });
    return connURL + pairs.join('&');
  };
  /** @return {string} */


  RepoInfo.prototype.toString = function () {
    var str = this.toURLString();

    if (this.persistenceKey) {
      str += '<' + this.persistenceKey + '>';
    }

    return str;
  };
  /** @return {string} */


  RepoInfo.prototype.toURLString = function () {
    var protocol = this.secure ? 'https://' : 'http://';
    var query = this.includeNamespaceInQueryParams ? "?ns=" + this.namespace : '';
    return "" + protocol + this.host + "/" + query;
  };

  return RepoInfo;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function decodePath(pathString) {
  var pathStringDecoded = '';
  var pieces = pathString.split('/');

  for (var i = 0; i < pieces.length; i++) {
    if (pieces[i].length > 0) {
      var piece = pieces[i];

      try {
        piece = decodeURIComponent(piece.replace(/\+/g, ' '));
      } catch (e) {}

      pathStringDecoded += '/' + piece;
    }
  }

  return pathStringDecoded;
}
/**
 * @return key value hash
 */


function decodeQuery(queryString) {
  var e_1, _a;

  var results = {};

  if (queryString.charAt(0) === '?') {
    queryString = queryString.substring(1);
  }

  try {
    for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(queryString.split('&')), _c = _b.next(); !_c.done; _c = _b.next()) {
      var segment = _c.value;

      if (segment.length === 0) {
        continue;
      }

      var kv = segment.split('=');

      if (kv.length === 2) {
        results[decodeURIComponent(kv[0])] = decodeURIComponent(kv[1]);
      } else {
        warn("Invalid query segment '" + segment + "' in query '" + queryString + "'");
      }
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    } finally {
      if (e_1) throw e_1.error;
    }
  }

  return results;
}

var parseRepoInfo = function parseRepoInfo(dataURL, nodeAdmin) {
  var parsedUrl = parseDatabaseURL(dataURL),
      namespace = parsedUrl.namespace;

  if (parsedUrl.domain === 'firebase.com') {
    fatal(parsedUrl.host + ' is no longer supported. ' + 'Please use <YOUR FIREBASE>.firebaseio.com instead');
  } // Catch common error of uninitialized namespace value.


  if ((!namespace || namespace === 'undefined') && parsedUrl.domain !== 'localhost') {
    fatal('Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com');
  }

  if (!parsedUrl.secure) {
    warnIfPageIsSecure();
  }

  var webSocketOnly = parsedUrl.scheme === 'ws' || parsedUrl.scheme === 'wss';
  return {
    repoInfo: new RepoInfo(parsedUrl.host, parsedUrl.secure, namespace, nodeAdmin, webSocketOnly,
    /*persistenceKey=*/
    '',
    /*includeNamespaceInQueryParams=*/
    namespace !== parsedUrl.subdomain),
    path: new Path(parsedUrl.pathString)
  };
};

var parseDatabaseURL = function parseDatabaseURL(dataURL) {
  // Default to empty strings in the event of a malformed string.
  var host = '',
      domain = '',
      subdomain = '',
      pathString = '',
      namespace = ''; // Always default to SSL, unless otherwise specified.

  var secure = true,
      scheme = 'https',
      port = 443; // Don't do any validation here. The caller is responsible for validating the result of parsing.

  if (typeof dataURL === 'string') {
    // Parse scheme.
    var colonInd = dataURL.indexOf('//');

    if (colonInd >= 0) {
      scheme = dataURL.substring(0, colonInd - 1);
      dataURL = dataURL.substring(colonInd + 2);
    } // Parse host, path, and query string.


    var slashInd = dataURL.indexOf('/');

    if (slashInd === -1) {
      slashInd = dataURL.length;
    }

    var questionMarkInd = dataURL.indexOf('?');

    if (questionMarkInd === -1) {
      questionMarkInd = dataURL.length;
    }

    host = dataURL.substring(0, Math.min(slashInd, questionMarkInd));

    if (slashInd < questionMarkInd) {
      // For pathString, questionMarkInd will always come after slashInd
      pathString = decodePath(dataURL.substring(slashInd, questionMarkInd));
    }

    var queryParams = decodeQuery(dataURL.substring(Math.min(dataURL.length, questionMarkInd))); // If we have a port, use scheme for determining if it's secure.

    colonInd = host.indexOf(':');

    if (colonInd >= 0) {
      secure = scheme === 'https' || scheme === 'wss';
      port = parseInt(host.substring(colonInd + 1), 10);
    } else {
      colonInd = host.length;
    }

    var hostWithoutPort = host.slice(0, colonInd);

    if (hostWithoutPort.toLowerCase() === 'localhost') {
      domain = 'localhost';
    } else if (hostWithoutPort.split('.').length <= 2) {
      domain = hostWithoutPort;
    } else {
      // Interpret the subdomain of a 3 or more component URL as the namespace name.
      var dotInd = host.indexOf('.');
      subdomain = host.substring(0, dotInd).toLowerCase();
      domain = host.substring(dotInd + 1); // Normalize namespaces to lowercase to share storage / connection.

      namespace = subdomain;
    } // Always treat the value of the `ns` as the namespace name if it is present.


    if ('ns' in queryParams) {
      namespace = queryParams['ns'];
    }
  }

  return {
    host: host,
    port: port,
    domain: domain,
    subdomain: subdomain,
    secure: secure,
    scheme: scheme,
    pathString: pathString,
    namespace: namespace
  };
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * True for invalid Firebase keys
 */


var INVALID_KEY_REGEX_ = /[\[\].#$\/\u0000-\u001F\u007F]/;
/**
 * True for invalid Firebase paths.
 * Allows '/' in paths.
 */

var INVALID_PATH_REGEX_ = /[\[\].#$\u0000-\u001F\u007F]/;
/**
 * Maximum number of characters to allow in leaf value
 */

var MAX_LEAF_SIZE_ = 10 * 1024 * 1024;

var isValidKey = function isValidKey(key) {
  return typeof key === 'string' && key.length !== 0 && !INVALID_KEY_REGEX_.test(key);
};

var isValidPathString = function isValidPathString(pathString) {
  return typeof pathString === 'string' && pathString.length !== 0 && !INVALID_PATH_REGEX_.test(pathString);
};

var isValidRootPathString = function isValidRootPathString(pathString) {
  if (pathString) {
    // Allow '/.info/' at the beginning.
    pathString = pathString.replace(/^\/*\.info(\/|$)/, '/');
  }

  return isValidPathString(pathString);
};

var isValidPriority = function isValidPriority(priority) {
  return priority === null || typeof priority === 'string' || typeof priority === 'number' && !isInvalidJSONNumber(priority) || priority && typeof priority === 'object' && // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["contains"])(priority, '.sv');
};
/**
 * Pre-validate a datum passed as an argument to Firebase function.
 */


var validateFirebaseDataArg = function validateFirebaseDataArg(fnName, argumentNumber, data, path, optional) {
  if (optional && data === undefined) {
    return;
  }

  validateFirebaseData(Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["errorPrefix"])(fnName, argumentNumber, optional), data, path);
};
/**
 * Validate a data object client-side before sending to server.
 */


var validateFirebaseData = function validateFirebaseData(errorPrefix, data, path_) {
  var path = path_ instanceof Path ? new ValidationPath(path_, errorPrefix) : path_;

  if (data === undefined) {
    throw new Error(errorPrefix + 'contains undefined ' + path.toErrorString());
  }

  if (typeof data === 'function') {
    throw new Error(errorPrefix + 'contains a function ' + path.toErrorString() + ' with contents = ' + data.toString());
  }

  if (isInvalidJSONNumber(data)) {
    throw new Error(errorPrefix + 'contains ' + data.toString() + ' ' + path.toErrorString());
  } // Check max leaf size, but try to avoid the utf8 conversion if we can.


  if (typeof data === 'string' && data.length > MAX_LEAF_SIZE_ / 3 && Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["stringLength"])(data) > MAX_LEAF_SIZE_) {
    throw new Error(errorPrefix + 'contains a string greater than ' + MAX_LEAF_SIZE_ + ' utf8 bytes ' + path.toErrorString() + " ('" + data.substring(0, 50) + "...')");
  } // TODO = Perf = Consider combining the recursive validation of keys into NodeFromJSON
  // to save extra walking of large objects.


  if (data && typeof data === 'object') {
    var hasDotValue_1 = false;
    var hasActualChild_1 = false;
    each(data, function (key, value) {
      if (key === '.value') {
        hasDotValue_1 = true;
      } else if (key !== '.priority' && key !== '.sv') {
        hasActualChild_1 = true;

        if (!isValidKey(key)) {
          throw new Error(errorPrefix + ' contains an invalid key (' + key + ') ' + path.toErrorString() + '.  Keys must be non-empty strings ' + 'and can\'t contain ".", "#", "$", "/", "[", or "]"');
        }
      }

      path.push(key);
      validateFirebaseData(errorPrefix, value, path);
      path.pop();
    });

    if (hasDotValue_1 && hasActualChild_1) {
      throw new Error(errorPrefix + ' contains ".value" child ' + path.toErrorString() + ' in addition to actual children.');
    }
  }
};
/**
 * Pre-validate paths passed in the firebase function.
 */


var validateFirebaseMergePaths = function validateFirebaseMergePaths(errorPrefix, mergePaths) {
  var i, curPath;

  for (i = 0; i < mergePaths.length; i++) {
    curPath = mergePaths[i];
    var keys = pathSlice(curPath);

    for (var j = 0; j < keys.length; j++) {
      if (keys[j] === '.priority' && j === keys.length - 1) ;else if (!isValidKey(keys[j])) {
        throw new Error(errorPrefix + 'contains an invalid key (' + keys[j] + ') in path ' + curPath.toString() + '. Keys must be non-empty strings ' + 'and can\'t contain ".", "#", "$", "/", "[", or "]"');
      }
    }
  } // Check that update keys are not descendants of each other.
  // We rely on the property that sorting guarantees that ancestors come
  // right before descendants.


  mergePaths.sort(pathCompare);
  var prevPath = null;

  for (i = 0; i < mergePaths.length; i++) {
    curPath = mergePaths[i];

    if (prevPath !== null && pathContains(prevPath, curPath)) {
      throw new Error(errorPrefix + 'contains a path ' + prevPath.toString() + ' that is ancestor of another path ' + curPath.toString());
    }

    prevPath = curPath;
  }
};
/**
 * pre-validate an object passed as an argument to firebase function (
 * must be an object - e.g. for firebase.update()).
 */


var validateFirebaseMergeDataArg = function validateFirebaseMergeDataArg(fnName, argumentNumber, data, path, optional) {
  if (optional && data === undefined) {
    return;
  }

  var errorPrefix$1 = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["errorPrefix"])(fnName, argumentNumber, optional);

  if (!(data && typeof data === 'object') || Array.isArray(data)) {
    throw new Error(errorPrefix$1 + ' must be an object containing the children to replace.');
  }

  var mergePaths = [];
  each(data, function (key, value) {
    var curPath = new Path(key);
    validateFirebaseData(errorPrefix$1, value, pathChild(path, curPath));

    if (pathGetBack(curPath) === '.priority') {
      if (!isValidPriority(value)) {
        throw new Error(errorPrefix$1 + "contains an invalid value for '" + curPath.toString() + "', which must be a valid " + 'Firebase priority (a string, finite number, server value, or null).');
      }
    }

    mergePaths.push(curPath);
  });
  validateFirebaseMergePaths(errorPrefix$1, mergePaths);
};

var validatePriority = function validatePriority(fnName, argumentNumber, priority, optional) {
  if (optional && priority === undefined) {
    return;
  }

  if (isInvalidJSONNumber(priority)) {
    throw new Error(Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["errorPrefix"])(fnName, argumentNumber, optional) + 'is ' + priority.toString() + ', but must be a valid Firebase priority (a string, finite number, ' + 'server value, or null).');
  } // Special case to allow importing data with a .sv.


  if (!isValidPriority(priority)) {
    throw new Error(Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["errorPrefix"])(fnName, argumentNumber, optional) + 'must be a valid Firebase priority ' + '(a string, finite number, server value, or null).');
  }
};

var validateEventType = function validateEventType(fnName, argumentNumber, eventType, optional) {
  if (optional && eventType === undefined) {
    return;
  }

  switch (eventType) {
    case 'value':
    case 'child_added':
    case 'child_removed':
    case 'child_changed':
    case 'child_moved':
      break;

    default:
      throw new Error(Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["errorPrefix"])(fnName, argumentNumber, optional) + 'must be a valid event type = "value", "child_added", "child_removed", ' + '"child_changed", or "child_moved".');
  }
};

var validateKey = function validateKey(fnName, argumentNumber, key, optional) {
  if (optional && key === undefined) {
    return;
  }

  if (!isValidKey(key)) {
    throw new Error(Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["errorPrefix"])(fnName, argumentNumber, optional) + 'was an invalid key = "' + key + '".  Firebase keys must be non-empty strings and ' + 'can\'t contain ".", "#", "$", "/", "[", or "]").');
  }
};

var validatePathString = function validatePathString(fnName, argumentNumber, pathString, optional) {
  if (optional && pathString === undefined) {
    return;
  }

  if (!isValidPathString(pathString)) {
    throw new Error(Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["errorPrefix"])(fnName, argumentNumber, optional) + 'was an invalid path = "' + pathString + '". Paths must be non-empty strings and ' + 'can\'t contain ".", "#", "$", "[", or "]"');
  }
};

var validateRootPathString = function validateRootPathString(fnName, argumentNumber, pathString, optional) {
  if (pathString) {
    // Allow '/.info/' at the beginning.
    pathString = pathString.replace(/^\/*\.info(\/|$)/, '/');
  }

  validatePathString(fnName, argumentNumber, pathString, optional);
};

var validateWritablePath = function validateWritablePath(fnName, path) {
  if (pathGetFront(path) === '.info') {
    throw new Error(fnName + " failed = Can't modify data under /.info/");
  }
};

var validateUrl = function validateUrl(fnName, argumentNumber, parsedUrl) {
  // TODO = Validate server better.
  var pathString = parsedUrl.path.toString();

  if (!(typeof parsedUrl.repoInfo.host === 'string') || parsedUrl.repoInfo.host.length === 0 || !isValidKey(parsedUrl.repoInfo.namespace) && parsedUrl.repoInfo.host.split(':')[0] !== 'localhost' || pathString.length !== 0 && !isValidRootPathString(pathString)) {
    throw new Error(Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["errorPrefix"])(fnName, argumentNumber, false) + 'must be a valid firebase URL and ' + 'the path can\'t contain ".", "#", "$", "[", or "]".');
  }
};

var validateBoolean = function validateBoolean(fnName, argumentNumber, bool, optional) {
  if (optional && bool === undefined) {
    return;
  }

  if (typeof bool !== 'boolean') {
    throw new Error(Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["errorPrefix"])(fnName, argumentNumber, optional) + 'must be a boolean.');
  }
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var OnDisconnect =
/** @class */
function () {
  function OnDisconnect(repo_, path_) {
    this.repo_ = repo_;
    this.path_ = path_;
  }

  OnDisconnect.prototype.cancel = function (onComplete) {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateArgCount"])('OnDisconnect.cancel', 0, 1, arguments.length);
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateCallback"])('OnDisconnect.cancel', 1, onComplete, true);
    var deferred = new _firebase_util__WEBPACK_IMPORTED_MODULE_2__["Deferred"]();
    this.repo_.onDisconnectCancel(this.path_, deferred.wrapCallback(onComplete));
    return deferred.promise;
  };

  OnDisconnect.prototype.remove = function (onComplete) {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateArgCount"])('OnDisconnect.remove', 0, 1, arguments.length);
    validateWritablePath('OnDisconnect.remove', this.path_);
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateCallback"])('OnDisconnect.remove', 1, onComplete, true);
    var deferred = new _firebase_util__WEBPACK_IMPORTED_MODULE_2__["Deferred"]();
    this.repo_.onDisconnectSet(this.path_, null, deferred.wrapCallback(onComplete));
    return deferred.promise;
  };

  OnDisconnect.prototype.set = function (value, onComplete) {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateArgCount"])('OnDisconnect.set', 1, 2, arguments.length);
    validateWritablePath('OnDisconnect.set', this.path_);
    validateFirebaseDataArg('OnDisconnect.set', 1, value, this.path_, false);
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateCallback"])('OnDisconnect.set', 2, onComplete, true);
    var deferred = new _firebase_util__WEBPACK_IMPORTED_MODULE_2__["Deferred"]();
    this.repo_.onDisconnectSet(this.path_, value, deferred.wrapCallback(onComplete));
    return deferred.promise;
  };

  OnDisconnect.prototype.setWithPriority = function (value, priority, onComplete) {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateArgCount"])('OnDisconnect.setWithPriority', 2, 3, arguments.length);
    validateWritablePath('OnDisconnect.setWithPriority', this.path_);
    validateFirebaseDataArg('OnDisconnect.setWithPriority', 1, value, this.path_, false);
    validatePriority('OnDisconnect.setWithPriority', 2, priority, false);
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateCallback"])('OnDisconnect.setWithPriority', 3, onComplete, true);
    var deferred = new _firebase_util__WEBPACK_IMPORTED_MODULE_2__["Deferred"]();
    this.repo_.onDisconnectSetWithPriority(this.path_, value, priority, deferred.wrapCallback(onComplete));
    return deferred.promise;
  };

  OnDisconnect.prototype.update = function (objectToMerge, onComplete) {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateArgCount"])('OnDisconnect.update', 1, 2, arguments.length);
    validateWritablePath('OnDisconnect.update', this.path_);

    if (Array.isArray(objectToMerge)) {
      var newObjectToMerge = {};

      for (var i = 0; i < objectToMerge.length; ++i) {
        newObjectToMerge['' + i] = objectToMerge[i];
      }

      objectToMerge = newObjectToMerge;
      warn('Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the ' + 'existing data, or an Object with integer keys if you really do want to only update some of the children.');
    }

    validateFirebaseMergeDataArg('OnDisconnect.update', 1, objectToMerge, this.path_, false);
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateCallback"])('OnDisconnect.update', 2, onComplete, true);
    var deferred = new _firebase_util__WEBPACK_IMPORTED_MODULE_2__["Deferred"]();
    this.repo_.onDisconnectUpdate(this.path_, objectToMerge, deferred.wrapCallback(onComplete));
    return deferred.promise;
  };

  return OnDisconnect;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var TransactionResult =
/** @class */
function () {
  /**
   * A type for the resolve value of Firebase.transaction.
   */
  function TransactionResult(committed, snapshot) {
    this.committed = committed;
    this.snapshot = snapshot;
  } // Do not create public documentation. This is intended to make JSON serialization work but is otherwise unnecessary
  // for end-users


  TransactionResult.prototype.toJSON = function () {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateArgCount"])('TransactionResult.toJSON', 0, 1, arguments.length);
    return {
      committed: this.committed,
      snapshot: this.snapshot.toJSON()
    };
  };

  return TransactionResult;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Modeled after base64 web-safe chars, but ordered by ASCII.


var PUSH_CHARS = '-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz';
var MIN_PUSH_CHAR = '-';
var MAX_PUSH_CHAR = 'z';
var MAX_KEY_LEN = 786;
/**
 * Fancy ID generator that creates 20-character string identifiers with the
 * following properties:
 *
 * 1. They're based on timestamp so that they sort *after* any existing ids.
 * 2. They contain 72-bits of random data after the timestamp so that IDs won't
 *    collide with other clients' IDs.
 * 3. They sort *lexicographically* (so the timestamp is converted to characters
 *    that will sort properly).
 * 4. They're monotonically increasing. Even if you generate more than one in
 *    the same timestamp, the latter ones will sort after the former ones. We do
 *    this by using the previous random bits but "incrementing" them by 1 (only
 *    in the case of a timestamp collision).
 */

var nextPushId = function () {
  // Timestamp of last push, used to prevent local collisions if you push twice
  // in one ms.
  var lastPushTime = 0; // We generate 72-bits of randomness which get turned into 12 characters and
  // appended to the timestamp to prevent collisions with other clients. We
  // store the last characters we generated because in the event of a collision,
  // we'll use those same characters except "incremented" by one.

  var lastRandChars = [];
  return function (now) {
    var duplicateTime = now === lastPushTime;
    lastPushTime = now;
    var i;
    var timeStampChars = new Array(8);

    for (i = 7; i >= 0; i--) {
      timeStampChars[i] = PUSH_CHARS.charAt(now % 64); // NOTE: Can't use << here because javascript will convert to int and lose
      // the upper bits.

      now = Math.floor(now / 64);
    }

    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(now === 0, 'Cannot push at time == 0');
    var id = timeStampChars.join('');

    if (!duplicateTime) {
      for (i = 0; i < 12; i++) {
        lastRandChars[i] = Math.floor(Math.random() * 64);
      }
    } else {
      // If the timestamp hasn't changed since last push, use the same random
      // number, except incremented by 1.
      for (i = 11; i >= 0 && lastRandChars[i] === 63; i--) {
        lastRandChars[i] = 0;
      }

      lastRandChars[i]++;
    }

    for (i = 0; i < 12; i++) {
      id += PUSH_CHARS.charAt(lastRandChars[i]);
    }

    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(id.length === 20, 'nextPushId: Length should be 20.');
    return id;
  };
}();

var successor = function successor(key) {
  if (key === '' + INTEGER_32_MAX) {
    // See https://firebase.google.com/docs/database/web/lists-of-data#data-order
    return MIN_PUSH_CHAR;
  }

  var keyAsInt = tryParseInt(key);

  if (keyAsInt != null) {
    return '' + (keyAsInt + 1);
  }

  var next = new Array(key.length);

  for (var i_1 = 0; i_1 < next.length; i_1++) {
    next[i_1] = key.charAt(i_1);
  }

  if (next.length < MAX_KEY_LEN) {
    next.push(MIN_PUSH_CHAR);
    return next.join('');
  }

  var i = next.length - 1;

  while (i >= 0 && next[i] === MAX_PUSH_CHAR) {
    i--;
  } // `successor` was called on the largest possible key, so return the
  // MAX_NAME, which sorts larger than all keys.


  if (i === -1) {
    return MAX_NAME;
  }

  var source = next[i];
  var sourcePlusOne = PUSH_CHARS.charAt(PUSH_CHARS.indexOf(source) + 1);
  next[i] = sourcePlusOne;
  return next.slice(0, i + 1).join('');
}; // `key` is assumed to be non-empty.


var predecessor = function predecessor(key) {
  if (key === '' + INTEGER_32_MIN) {
    return MIN_NAME;
  }

  var keyAsInt = tryParseInt(key);

  if (keyAsInt != null) {
    return '' + (keyAsInt - 1);
  }

  var next = new Array(key.length);

  for (var i = 0; i < next.length; i++) {
    next[i] = key.charAt(i);
  } // If `key` ends in `MIN_PUSH_CHAR`, the largest key lexicographically
  // smaller than `key`, is `key[0:key.length - 1]`. The next key smaller
  // than that, `predecessor(predecessor(key))`, is
  //
  // `key[0:key.length - 2] + (key[key.length - 1] - 1) + \
  //   { MAX_PUSH_CHAR repeated MAX_KEY_LEN - (key.length - 1) times }
  //
  // analogous to increment/decrement for base-10 integers.
  //
  // This works because lexigographic comparison works character-by-character,
  // using length as a tie-breaker if one key is a prefix of the other.


  if (next[next.length - 1] === MIN_PUSH_CHAR) {
    if (next.length === 1) {
      // See https://firebase.google.com/docs/database/web/lists-of-data#orderbykey
      return '' + INTEGER_32_MAX;
    }

    delete next[next.length - 1];
    return next.join('');
  } // Replace the last character with it's immediate predecessor, and
  // fill the suffix of the key with MAX_PUSH_CHAR. This is the
  // lexicographically largest possible key smaller than `key`.


  next[next.length - 1] = PUSH_CHARS.charAt(PUSH_CHARS.indexOf(next[next.length - 1]) - 1);
  return next.join('') + MAX_PUSH_CHAR.repeat(MAX_KEY_LEN - next.length);
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var NamedNode =
/** @class */
function () {
  function NamedNode(name, node) {
    this.name = name;
    this.node = node;
  }

  NamedNode.Wrap = function (name, node) {
    return new NamedNode(name, node);
  };

  return NamedNode;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var Index =
/** @class */
function () {
  function Index() {}
  /**
   * @return A standalone comparison function for
   * this index
   */


  Index.prototype.getCompare = function () {
    return this.compare.bind(this);
  };
  /**
   * Given a before and after value for a node, determine if the indexed value has changed. Even if they are different,
   * it's possible that the changes are isolated to parts of the snapshot that are not indexed.
   *
   *
   * @return True if the portion of the snapshot being indexed changed between oldNode and newNode
   */


  Index.prototype.indexedValueChanged = function (oldNode, newNode) {
    var oldWrapped = new NamedNode(MIN_NAME, oldNode);
    var newWrapped = new NamedNode(MIN_NAME, newNode);
    return this.compare(oldWrapped, newWrapped) !== 0;
  };
  /**
   * @return a node wrapper that will sort equal to or less than
   * any other node wrapper, using this index
   */


  Index.prototype.minPost = function () {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return NamedNode.MIN;
  };

  return Index;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var __EMPTY_NODE;

var KeyIndex =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(KeyIndex, _super);

  function KeyIndex() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Object.defineProperty(KeyIndex, "__EMPTY_NODE", {
    get: function get() {
      return __EMPTY_NODE;
    },
    set: function set(val) {
      __EMPTY_NODE = val;
    },
    enumerable: false,
    configurable: true
  });
  /**
   * @inheritDoc
   */

  KeyIndex.prototype.compare = function (a, b) {
    return nameCompare(a.name, b.name);
  };
  /**
   * @inheritDoc
   */


  KeyIndex.prototype.isDefinedOn = function (node) {
    // We could probably return true here (since every node has a key), but it's never called
    // so just leaving unimplemented for now.
    throw Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assertionError"])('KeyIndex.isDefinedOn not expected to be called.');
  };
  /**
   * @inheritDoc
   */


  KeyIndex.prototype.indexedValueChanged = function (oldNode, newNode) {
    return false; // The key for a node never changes.
  };
  /**
   * @inheritDoc
   */


  KeyIndex.prototype.minPost = function () {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return NamedNode.MIN;
  };
  /**
   * @inheritDoc
   */


  KeyIndex.prototype.maxPost = function () {
    // TODO: This should really be created once and cached in a static property, but
    // NamedNode isn't defined yet, so I can't use it in a static.  Bleh.
    return new NamedNode(MAX_NAME, __EMPTY_NODE);
  };

  KeyIndex.prototype.makePost = function (indexValue, name) {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(typeof indexValue === 'string', 'KeyIndex indexValue must always be a string.'); // We just use empty node, but it'll never be compared, since our comparator only looks at name.

    return new NamedNode(indexValue, __EMPTY_NODE);
  };
  /**
   * @return String representation for inclusion in a query spec
   */


  KeyIndex.prototype.toString = function () {
    return '.key';
  };

  return KeyIndex;
}(Index);

var KEY_INDEX = new KeyIndex();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var MAX_NODE;

function setMaxNode(val) {
  MAX_NODE = val;
}

var priorityHashText = function priorityHashText(priority) {
  if (typeof priority === 'number') {
    return 'number:' + doubleToIEEE754String(priority);
  } else {
    return 'string:' + priority;
  }
};
/**
 * Validates that a priority snapshot Node is valid.
 */


var validatePriorityNode = function validatePriorityNode(priorityNode) {
  if (priorityNode.isLeafNode()) {
    var val = priorityNode.val();
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(typeof val === 'string' || typeof val === 'number' || typeof val === 'object' && Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["contains"])(val, '.sv'), 'Priority must be a string or number.');
  } else {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(priorityNode === MAX_NODE || priorityNode.isEmpty(), 'priority of unexpected type.');
  } // Don't call getPriority() on MAX_NODE to avoid hitting assertion.


  Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(priorityNode === MAX_NODE || priorityNode.getPriority().isEmpty(), "Priority nodes can't have a priority of their own.");
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var __childrenNodeConstructor;
/**
 * LeafNode is a class for storing leaf nodes in a DataSnapshot.  It
 * implements Node and stores the value of the node (a string,
 * number, or boolean) accessible via getValue().
 */


var LeafNode =
/** @class */
function () {
  /**
   * @param value_ The value to store in this leaf node. The object type is
   * possible in the event of a deferred value
   * @param priorityNode_ The priority of this node.
   */
  function LeafNode(value_, priorityNode_) {
    if (priorityNode_ === void 0) {
      priorityNode_ = LeafNode.__childrenNodeConstructor.EMPTY_NODE;
    }

    this.value_ = value_;
    this.priorityNode_ = priorityNode_;
    this.lazyHash_ = null;
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(this.value_ !== undefined && this.value_ !== null, "LeafNode shouldn't be created with null/undefined value.");
    validatePriorityNode(this.priorityNode_);
  }

  Object.defineProperty(LeafNode, "__childrenNodeConstructor", {
    get: function get() {
      return __childrenNodeConstructor;
    },
    set: function set(val) {
      __childrenNodeConstructor = val;
    },
    enumerable: false,
    configurable: true
  });
  /** @inheritDoc */

  LeafNode.prototype.isLeafNode = function () {
    return true;
  };
  /** @inheritDoc */


  LeafNode.prototype.getPriority = function () {
    return this.priorityNode_;
  };
  /** @inheritDoc */


  LeafNode.prototype.updatePriority = function (newPriorityNode) {
    return new LeafNode(this.value_, newPriorityNode);
  };
  /** @inheritDoc */


  LeafNode.prototype.getImmediateChild = function (childName) {
    // Hack to treat priority as a regular child
    if (childName === '.priority') {
      return this.priorityNode_;
    } else {
      return LeafNode.__childrenNodeConstructor.EMPTY_NODE;
    }
  };
  /** @inheritDoc */


  LeafNode.prototype.getChild = function (path) {
    if (pathIsEmpty(path)) {
      return this;
    } else if (pathGetFront(path) === '.priority') {
      return this.priorityNode_;
    } else {
      return LeafNode.__childrenNodeConstructor.EMPTY_NODE;
    }
  };
  /**
   * @inheritDoc
   */


  LeafNode.prototype.hasChild = function () {
    return false;
  };
  /** @inheritDoc */


  LeafNode.prototype.getPredecessorChildName = function (childName, childNode) {
    return null;
  };
  /** @inheritDoc */


  LeafNode.prototype.updateImmediateChild = function (childName, newChildNode) {
    if (childName === '.priority') {
      return this.updatePriority(newChildNode);
    } else if (newChildNode.isEmpty() && childName !== '.priority') {
      return this;
    } else {
      return LeafNode.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(childName, newChildNode).updatePriority(this.priorityNode_);
    }
  };
  /** @inheritDoc */


  LeafNode.prototype.updateChild = function (path, newChildNode) {
    var front = pathGetFront(path);

    if (front === null) {
      return newChildNode;
    } else if (newChildNode.isEmpty() && front !== '.priority') {
      return this;
    } else {
      Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(front !== '.priority' || pathGetLength(path) === 1, '.priority must be the last token in a path');
      return this.updateImmediateChild(front, LeafNode.__childrenNodeConstructor.EMPTY_NODE.updateChild(pathPopFront(path), newChildNode));
    }
  };
  /** @inheritDoc */


  LeafNode.prototype.isEmpty = function () {
    return false;
  };
  /** @inheritDoc */


  LeafNode.prototype.numChildren = function () {
    return 0;
  };
  /** @inheritDoc */


  LeafNode.prototype.forEachChild = function (index, action) {
    return false;
  };
  /**
   * @inheritDoc
   */


  LeafNode.prototype.val = function (exportFormat) {
    if (exportFormat && !this.getPriority().isEmpty()) {
      return {
        '.value': this.getValue(),
        '.priority': this.getPriority().val()
      };
    } else {
      return this.getValue();
    }
  };
  /** @inheritDoc */


  LeafNode.prototype.hash = function () {
    if (this.lazyHash_ === null) {
      var toHash = '';

      if (!this.priorityNode_.isEmpty()) {
        toHash += 'priority:' + priorityHashText(this.priorityNode_.val()) + ':';
      }

      var type = typeof this.value_;
      toHash += type + ':';

      if (type === 'number') {
        toHash += doubleToIEEE754String(this.value_);
      } else {
        toHash += this.value_;
      }

      this.lazyHash_ = sha1(toHash);
    }

    return this.lazyHash_;
  };
  /**
   * Returns the value of the leaf node.
   * @return The value of the node.
   */


  LeafNode.prototype.getValue = function () {
    return this.value_;
  };
  /**
   * @inheritDoc
   */


  LeafNode.prototype.compareTo = function (other) {
    if (other === LeafNode.__childrenNodeConstructor.EMPTY_NODE) {
      return 1;
    } else if (other instanceof LeafNode.__childrenNodeConstructor) {
      return -1;
    } else {
      Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(other.isLeafNode(), 'Unknown node type');
      return this.compareToLeafNode_(other);
    }
  };
  /**
   * Comparison specifically for two leaf nodes
   */


  LeafNode.prototype.compareToLeafNode_ = function (otherLeaf) {
    var otherLeafType = typeof otherLeaf.value_;
    var thisLeafType = typeof this.value_;
    var otherIndex = LeafNode.VALUE_TYPE_ORDER.indexOf(otherLeafType);
    var thisIndex = LeafNode.VALUE_TYPE_ORDER.indexOf(thisLeafType);
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(otherIndex >= 0, 'Unknown leaf type: ' + otherLeafType);
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(thisIndex >= 0, 'Unknown leaf type: ' + thisLeafType);

    if (otherIndex === thisIndex) {
      // Same type, compare values
      if (thisLeafType === 'object') {
        // Deferred value nodes are all equal, but we should also never get to this point...
        return 0;
      } else {
        // Note that this works because true > false, all others are number or string comparisons
        if (this.value_ < otherLeaf.value_) {
          return -1;
        } else if (this.value_ === otherLeaf.value_) {
          return 0;
        } else {
          return 1;
        }
      }
    } else {
      return thisIndex - otherIndex;
    }
  };
  /**
   * @inheritDoc
   */


  LeafNode.prototype.withIndex = function () {
    return this;
  };
  /**
   * @inheritDoc
   */


  LeafNode.prototype.isIndexed = function () {
    return true;
  };
  /**
   * @inheritDoc
   */


  LeafNode.prototype.equals = function (other) {
    /**
     * @inheritDoc
     */
    if (other === this) {
      return true;
    } else if (other.isLeafNode()) {
      var otherLeaf = other;
      return this.value_ === otherLeaf.value_ && this.priorityNode_.equals(otherLeaf.priorityNode_);
    } else {
      return false;
    }
  };
  /**
   * The sort order for comparing leaf nodes of different types. If two leaf nodes have
   * the same type, the comparison falls back to their value
   */


  LeafNode.VALUE_TYPE_ORDER = ['object', 'boolean', 'number', 'string'];
  return LeafNode;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var nodeFromJSON;
var MAX_NODE$1;

function setNodeFromJSON(val) {
  nodeFromJSON = val;
}

function setMaxNode$1(val) {
  MAX_NODE$1 = val;
}

var PriorityIndex =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(PriorityIndex, _super);

  function PriorityIndex() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  /**
   * @inheritDoc
   */


  PriorityIndex.prototype.compare = function (a, b) {
    var aPriority = a.node.getPriority();
    var bPriority = b.node.getPriority();
    var indexCmp = aPriority.compareTo(bPriority);

    if (indexCmp === 0) {
      return nameCompare(a.name, b.name);
    } else {
      return indexCmp;
    }
  };
  /**
   * @inheritDoc
   */


  PriorityIndex.prototype.isDefinedOn = function (node) {
    return !node.getPriority().isEmpty();
  };
  /**
   * @inheritDoc
   */


  PriorityIndex.prototype.indexedValueChanged = function (oldNode, newNode) {
    return !oldNode.getPriority().equals(newNode.getPriority());
  };
  /**
   * @inheritDoc
   */


  PriorityIndex.prototype.minPost = function () {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return NamedNode.MIN;
  };
  /**
   * @inheritDoc
   */


  PriorityIndex.prototype.maxPost = function () {
    return new NamedNode(MAX_NAME, new LeafNode('[PRIORITY-POST]', MAX_NODE$1));
  };

  PriorityIndex.prototype.makePost = function (indexValue, name) {
    var priorityNode = nodeFromJSON(indexValue);
    return new NamedNode(name, new LeafNode('[PRIORITY-POST]', priorityNode));
  };
  /**
   * @return String representation for inclusion in a query spec
   */


  PriorityIndex.prototype.toString = function () {
    return '.priority';
  };

  return PriorityIndex;
}(Index);

var PRIORITY_INDEX = new PriorityIndex();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * An iterator over an LLRBNode.
 */

var SortedMapIterator =
/** @class */
function () {
  /**
   * @param node Node to iterate.
   * @param isReverse_ Whether or not to iterate in reverse
   * @param resultGenerator_
   */
  function SortedMapIterator(node, startKey, comparator, isReverse_, resultGenerator_) {
    if (resultGenerator_ === void 0) {
      resultGenerator_ = null;
    }

    this.isReverse_ = isReverse_;
    this.resultGenerator_ = resultGenerator_;
    this.nodeStack_ = [];
    var cmp = 1;

    while (!node.isEmpty()) {
      node = node;
      cmp = startKey ? comparator(node.key, startKey) : 1; // flip the comparison if we're going in reverse

      if (isReverse_) {
        cmp *= -1;
      }

      if (cmp < 0) {
        // This node is less than our start key. ignore it
        if (this.isReverse_) {
          node = node.left;
        } else {
          node = node.right;
        }
      } else if (cmp === 0) {
        // This node is exactly equal to our start key. Push it on the stack, but stop iterating;
        this.nodeStack_.push(node);
        break;
      } else {
        // This node is greater than our start key, add it to the stack and move to the next one
        this.nodeStack_.push(node);

        if (this.isReverse_) {
          node = node.right;
        } else {
          node = node.left;
        }
      }
    }
  }

  SortedMapIterator.prototype.getNext = function () {
    if (this.nodeStack_.length === 0) {
      return null;
    }

    var node = this.nodeStack_.pop();
    var result;

    if (this.resultGenerator_) {
      result = this.resultGenerator_(node.key, node.value);
    } else {
      result = {
        key: node.key,
        value: node.value
      };
    }

    if (this.isReverse_) {
      node = node.left;

      while (!node.isEmpty()) {
        this.nodeStack_.push(node);
        node = node.right;
      }
    } else {
      node = node.right;

      while (!node.isEmpty()) {
        this.nodeStack_.push(node);
        node = node.left;
      }
    }

    return result;
  };

  SortedMapIterator.prototype.hasNext = function () {
    return this.nodeStack_.length > 0;
  };

  SortedMapIterator.prototype.peek = function () {
    if (this.nodeStack_.length === 0) {
      return null;
    }

    var node = this.nodeStack_[this.nodeStack_.length - 1];

    if (this.resultGenerator_) {
      return this.resultGenerator_(node.key, node.value);
    } else {
      return {
        key: node.key,
        value: node.value
      };
    }
  };

  return SortedMapIterator;
}();
/**
 * Represents a node in a Left-leaning Red-Black tree.
 */


var LLRBNode =
/** @class */
function () {
  /**
   * @param key Key associated with this node.
   * @param value Value associated with this node.
   * @param color Whether this node is red.
   * @param left Left child.
   * @param right Right child.
   */
  function LLRBNode(key, value, color, left, right) {
    this.key = key;
    this.value = value;
    this.color = color != null ? color : LLRBNode.RED;
    this.left = left != null ? left : SortedMap.EMPTY_NODE;
    this.right = right != null ? right : SortedMap.EMPTY_NODE;
  }
  /**
   * Returns a copy of the current node, optionally replacing pieces of it.
   *
   * @param key New key for the node, or null.
   * @param value New value for the node, or null.
   * @param color New color for the node, or null.
   * @param left New left child for the node, or null.
   * @param right New right child for the node, or null.
   * @return The node copy.
   */


  LLRBNode.prototype.copy = function (key, value, color, left, right) {
    return new LLRBNode(key != null ? key : this.key, value != null ? value : this.value, color != null ? color : this.color, left != null ? left : this.left, right != null ? right : this.right);
  };
  /**
   * @return The total number of nodes in the tree.
   */


  LLRBNode.prototype.count = function () {
    return this.left.count() + 1 + this.right.count();
  };
  /**
   * @return True if the tree is empty.
   */


  LLRBNode.prototype.isEmpty = function () {
    return false;
  };
  /**
   * Traverses the tree in key order and calls the specified action function
   * for each node.
   *
   * @param action Callback function to be called for each
   *   node.  If it returns true, traversal is aborted.
   * @return The first truthy value returned by action, or the last falsey
   *   value returned by action
   */


  LLRBNode.prototype.inorderTraversal = function (action) {
    return this.left.inorderTraversal(action) || !!action(this.key, this.value) || this.right.inorderTraversal(action);
  };
  /**
   * Traverses the tree in reverse key order and calls the specified action function
   * for each node.
   *
   * @param action Callback function to be called for each
   * node.  If it returns true, traversal is aborted.
   * @return True if traversal was aborted.
   */


  LLRBNode.prototype.reverseTraversal = function (action) {
    return this.right.reverseTraversal(action) || action(this.key, this.value) || this.left.reverseTraversal(action);
  };
  /**
   * @return The minimum node in the tree.
   */


  LLRBNode.prototype.min_ = function () {
    if (this.left.isEmpty()) {
      return this;
    } else {
      return this.left.min_();
    }
  };
  /**
   * @return The maximum key in the tree.
   */


  LLRBNode.prototype.minKey = function () {
    return this.min_().key;
  };
  /**
   * @return The maximum key in the tree.
   */


  LLRBNode.prototype.maxKey = function () {
    if (this.right.isEmpty()) {
      return this.key;
    } else {
      return this.right.maxKey();
    }
  };
  /**
   * @param key Key to insert.
   * @param value Value to insert.
   * @param comparator Comparator.
   * @return New tree, with the key/value added.
   */


  LLRBNode.prototype.insert = function (key, value, comparator) {
    var n = this;
    var cmp = comparator(key, n.key);

    if (cmp < 0) {
      n = n.copy(null, null, null, n.left.insert(key, value, comparator), null);
    } else if (cmp === 0) {
      n = n.copy(null, value, null, null, null);
    } else {
      n = n.copy(null, null, null, null, n.right.insert(key, value, comparator));
    }

    return n.fixUp_();
  };
  /**
   * @return New tree, with the minimum key removed.
   */


  LLRBNode.prototype.removeMin_ = function () {
    if (this.left.isEmpty()) {
      return SortedMap.EMPTY_NODE;
    }

    var n = this;

    if (!n.left.isRed_() && !n.left.left.isRed_()) {
      n = n.moveRedLeft_();
    }

    n = n.copy(null, null, null, n.left.removeMin_(), null);
    return n.fixUp_();
  };
  /**
   * @param key The key of the item to remove.
   * @param comparator Comparator.
   * @return New tree, with the specified item removed.
   */


  LLRBNode.prototype.remove = function (key, comparator) {
    var n, smallest;
    n = this;

    if (comparator(key, n.key) < 0) {
      if (!n.left.isEmpty() && !n.left.isRed_() && !n.left.left.isRed_()) {
        n = n.moveRedLeft_();
      }

      n = n.copy(null, null, null, n.left.remove(key, comparator), null);
    } else {
      if (n.left.isRed_()) {
        n = n.rotateRight_();
      }

      if (!n.right.isEmpty() && !n.right.isRed_() && !n.right.left.isRed_()) {
        n = n.moveRedRight_();
      }

      if (comparator(key, n.key) === 0) {
        if (n.right.isEmpty()) {
          return SortedMap.EMPTY_NODE;
        } else {
          smallest = n.right.min_();
          n = n.copy(smallest.key, smallest.value, null, null, n.right.removeMin_());
        }
      }

      n = n.copy(null, null, null, null, n.right.remove(key, comparator));
    }

    return n.fixUp_();
  };
  /**
   * @return Whether this is a RED node.
   */


  LLRBNode.prototype.isRed_ = function () {
    return this.color;
  };
  /**
   * @return New tree after performing any needed rotations.
   */


  LLRBNode.prototype.fixUp_ = function () {
    var n = this;

    if (n.right.isRed_() && !n.left.isRed_()) {
      n = n.rotateLeft_();
    }

    if (n.left.isRed_() && n.left.left.isRed_()) {
      n = n.rotateRight_();
    }

    if (n.left.isRed_() && n.right.isRed_()) {
      n = n.colorFlip_();
    }

    return n;
  };
  /**
   * @return New tree, after moveRedLeft.
   */


  LLRBNode.prototype.moveRedLeft_ = function () {
    var n = this.colorFlip_();

    if (n.right.left.isRed_()) {
      n = n.copy(null, null, null, null, n.right.rotateRight_());
      n = n.rotateLeft_();
      n = n.colorFlip_();
    }

    return n;
  };
  /**
   * @return New tree, after moveRedRight.
   */


  LLRBNode.prototype.moveRedRight_ = function () {
    var n = this.colorFlip_();

    if (n.left.left.isRed_()) {
      n = n.rotateRight_();
      n = n.colorFlip_();
    }

    return n;
  };
  /**
   * @return New tree, after rotateLeft.
   */


  LLRBNode.prototype.rotateLeft_ = function () {
    var nl = this.copy(null, null, LLRBNode.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, nl, null);
  };
  /**
   * @return New tree, after rotateRight.
   */


  LLRBNode.prototype.rotateRight_ = function () {
    var nr = this.copy(null, null, LLRBNode.RED, this.left.right, null);
    return this.left.copy(null, null, this.color, null, nr);
  };
  /**
   * @return Newt ree, after colorFlip.
   */


  LLRBNode.prototype.colorFlip_ = function () {
    var left = this.left.copy(null, null, !this.left.color, null, null);
    var right = this.right.copy(null, null, !this.right.color, null, null);
    return this.copy(null, null, !this.color, left, right);
  };
  /**
   * For testing.
   *
   * @return True if all is well.
   */


  LLRBNode.prototype.checkMaxDepth_ = function () {
    var blackDepth = this.check_();
    return Math.pow(2.0, blackDepth) <= this.count() + 1;
  };

  LLRBNode.prototype.check_ = function () {
    if (this.isRed_() && this.left.isRed_()) {
      throw new Error('Red node has red child(' + this.key + ',' + this.value + ')');
    }

    if (this.right.isRed_()) {
      throw new Error('Right child of (' + this.key + ',' + this.value + ') is red');
    }

    var blackDepth = this.left.check_();

    if (blackDepth !== this.right.check_()) {
      throw new Error('Black depths differ');
    } else {
      return blackDepth + (this.isRed_() ? 0 : 1);
    }
  };

  LLRBNode.RED = true;
  LLRBNode.BLACK = false;
  return LLRBNode;
}();
/**
 * Represents an empty node (a leaf node in the Red-Black Tree).
 */


var LLRBEmptyNode =
/** @class */
function () {
  function LLRBEmptyNode() {}
  /**
   * Returns a copy of the current node.
   *
   * @return The node copy.
   */


  LLRBEmptyNode.prototype.copy = function (key, value, color, left, right) {
    return this;
  };
  /**
   * Returns a copy of the tree, with the specified key/value added.
   *
   * @param key Key to be added.
   * @param value Value to be added.
   * @param comparator Comparator.
   * @return New tree, with item added.
   */


  LLRBEmptyNode.prototype.insert = function (key, value, comparator) {
    return new LLRBNode(key, value, null);
  };
  /**
   * Returns a copy of the tree, with the specified key removed.
   *
   * @param key The key to remove.
   * @param comparator Comparator.
   * @return New tree, with item removed.
   */


  LLRBEmptyNode.prototype.remove = function (key, comparator) {
    return this;
  };
  /**
   * @return The total number of nodes in the tree.
   */


  LLRBEmptyNode.prototype.count = function () {
    return 0;
  };
  /**
   * @return True if the tree is empty.
   */


  LLRBEmptyNode.prototype.isEmpty = function () {
    return true;
  };
  /**
   * Traverses the tree in key order and calls the specified action function
   * for each node.
   *
   * @param action Callback function to be called for each
   * node.  If it returns true, traversal is aborted.
   * @return True if traversal was aborted.
   */


  LLRBEmptyNode.prototype.inorderTraversal = function (action) {
    return false;
  };
  /**
   * Traverses the tree in reverse key order and calls the specified action function
   * for each node.
   *
   * @param action Callback function to be called for each
   * node.  If it returns true, traversal is aborted.
   * @return True if traversal was aborted.
   */


  LLRBEmptyNode.prototype.reverseTraversal = function (action) {
    return false;
  };

  LLRBEmptyNode.prototype.minKey = function () {
    return null;
  };

  LLRBEmptyNode.prototype.maxKey = function () {
    return null;
  };

  LLRBEmptyNode.prototype.check_ = function () {
    return 0;
  };
  /**
   * @return Whether this node is red.
   */


  LLRBEmptyNode.prototype.isRed_ = function () {
    return false;
  };

  return LLRBEmptyNode;
}();
/**
 * An immutable sorted map implementation, based on a Left-leaning Red-Black
 * tree.
 */


var SortedMap =
/** @class */
function () {
  /**
   * @param comparator_ Key comparator.
   * @param root_ (Optional) Root node for the map.
   */
  function SortedMap(comparator_, root_) {
    if (root_ === void 0) {
      root_ = SortedMap.EMPTY_NODE;
    }

    this.comparator_ = comparator_;
    this.root_ = root_;
  }
  /**
   * Returns a copy of the map, with the specified key/value added or replaced.
   * (TODO: We should perhaps rename this method to 'put')
   *
   * @param key Key to be added.
   * @param value Value to be added.
   * @return New map, with item added.
   */


  SortedMap.prototype.insert = function (key, value) {
    return new SortedMap(this.comparator_, this.root_.insert(key, value, this.comparator_).copy(null, null, LLRBNode.BLACK, null, null));
  };
  /**
   * Returns a copy of the map, with the specified key removed.
   *
   * @param key The key to remove.
   * @return New map, with item removed.
   */


  SortedMap.prototype.remove = function (key) {
    return new SortedMap(this.comparator_, this.root_.remove(key, this.comparator_).copy(null, null, LLRBNode.BLACK, null, null));
  };
  /**
   * Returns the value of the node with the given key, or null.
   *
   * @param key The key to look up.
   * @return The value of the node with the given key, or null if the
   * key doesn't exist.
   */


  SortedMap.prototype.get = function (key) {
    var cmp;
    var node = this.root_;

    while (!node.isEmpty()) {
      cmp = this.comparator_(key, node.key);

      if (cmp === 0) {
        return node.value;
      } else if (cmp < 0) {
        node = node.left;
      } else if (cmp > 0) {
        node = node.right;
      }
    }

    return null;
  };
  /**
   * Returns the key of the item *before* the specified key, or null if key is the first item.
   * @param key The key to find the predecessor of
   * @return The predecessor key.
   */


  SortedMap.prototype.getPredecessorKey = function (key) {
    var cmp,
        node = this.root_,
        rightParent = null;

    while (!node.isEmpty()) {
      cmp = this.comparator_(key, node.key);

      if (cmp === 0) {
        if (!node.left.isEmpty()) {
          node = node.left;

          while (!node.right.isEmpty()) {
            node = node.right;
          }

          return node.key;
        } else if (rightParent) {
          return rightParent.key;
        } else {
          return null; // first item.
        }
      } else if (cmp < 0) {
        node = node.left;
      } else if (cmp > 0) {
        rightParent = node;
        node = node.right;
      }
    }

    throw new Error('Attempted to find predecessor key for a nonexistent key.  What gives?');
  };
  /**
   * @return True if the map is empty.
   */


  SortedMap.prototype.isEmpty = function () {
    return this.root_.isEmpty();
  };
  /**
   * @return The total number of nodes in the map.
   */


  SortedMap.prototype.count = function () {
    return this.root_.count();
  };
  /**
   * @return The minimum key in the map.
   */


  SortedMap.prototype.minKey = function () {
    return this.root_.minKey();
  };
  /**
   * @return The maximum key in the map.
   */


  SortedMap.prototype.maxKey = function () {
    return this.root_.maxKey();
  };
  /**
   * Traverses the map in key order and calls the specified action function
   * for each key/value pair.
   *
   * @param action Callback function to be called
   * for each key/value pair.  If action returns true, traversal is aborted.
   * @return The first truthy value returned by action, or the last falsey
   *   value returned by action
   */


  SortedMap.prototype.inorderTraversal = function (action) {
    return this.root_.inorderTraversal(action);
  };
  /**
   * Traverses the map in reverse key order and calls the specified action function
   * for each key/value pair.
   *
   * @param action Callback function to be called
   * for each key/value pair.  If action returns true, traversal is aborted.
   * @return True if the traversal was aborted.
   */


  SortedMap.prototype.reverseTraversal = function (action) {
    return this.root_.reverseTraversal(action);
  };
  /**
   * Returns an iterator over the SortedMap.
   * @return The iterator.
   */


  SortedMap.prototype.getIterator = function (resultGenerator) {
    return new SortedMapIterator(this.root_, null, this.comparator_, false, resultGenerator);
  };

  SortedMap.prototype.getIteratorFrom = function (key, resultGenerator) {
    return new SortedMapIterator(this.root_, key, this.comparator_, false, resultGenerator);
  };

  SortedMap.prototype.getReverseIteratorFrom = function (key, resultGenerator) {
    return new SortedMapIterator(this.root_, key, this.comparator_, true, resultGenerator);
  };

  SortedMap.prototype.getReverseIterator = function (resultGenerator) {
    return new SortedMapIterator(this.root_, null, this.comparator_, true, resultGenerator);
  };
  /**
   * Always use the same empty node, to reduce memory.
   */


  SortedMap.EMPTY_NODE = new LLRBEmptyNode();
  return SortedMap;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var LOG_2 = Math.log(2);

var Base12Num =
/** @class */
function () {
  function Base12Num(length) {
    var logBase2 = function logBase2(num) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return parseInt(Math.log(num) / LOG_2, 10);
    };

    var bitMask = function bitMask(bits) {
      return parseInt(Array(bits + 1).join('1'), 2);
    };

    this.count = logBase2(length + 1);
    this.current_ = this.count - 1;
    var mask = bitMask(this.count);
    this.bits_ = length + 1 & mask;
  }

  Base12Num.prototype.nextBitIsOne = function () {
    //noinspection JSBitwiseOperatorUsage
    var result = !(this.bits_ & 0x1 << this.current_);
    this.current_--;
    return result;
  };

  return Base12Num;
}();
/**
 * Takes a list of child nodes and constructs a SortedSet using the given comparison
 * function
 *
 * Uses the algorithm described in the paper linked here:
 * http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.46.1458
 *
 * @param childList Unsorted list of children
 * @param cmp The comparison method to be used
 * @param keyFn An optional function to extract K from a node wrapper, if K's
 * type is not NamedNode
 * @param mapSortFn An optional override for comparator used by the generated sorted map
 */


var buildChildSet = function buildChildSet(childList, cmp, keyFn, mapSortFn) {
  childList.sort(cmp);

  var buildBalancedTree = function buildBalancedTree(low, high) {
    var length = high - low;
    var namedNode;
    var key;

    if (length === 0) {
      return null;
    } else if (length === 1) {
      namedNode = childList[low];
      key = keyFn ? keyFn(namedNode) : namedNode;
      return new LLRBNode(key, namedNode.node, LLRBNode.BLACK, null, null);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      var middle = parseInt(length / 2, 10) + low;
      var left = buildBalancedTree(low, middle);
      var right = buildBalancedTree(middle + 1, high);
      namedNode = childList[middle];
      key = keyFn ? keyFn(namedNode) : namedNode;
      return new LLRBNode(key, namedNode.node, LLRBNode.BLACK, left, right);
    }
  };

  var buildFrom12Array = function buildFrom12Array(base12) {
    var node = null;
    var root = null;
    var index = childList.length;

    var buildPennant = function buildPennant(chunkSize, color) {
      var low = index - chunkSize;
      var high = index;
      index -= chunkSize;
      var childTree = buildBalancedTree(low + 1, high);
      var namedNode = childList[low];
      var key = keyFn ? keyFn(namedNode) : namedNode;
      attachPennant(new LLRBNode(key, namedNode.node, color, null, childTree));
    };

    var attachPennant = function attachPennant(pennant) {
      if (node) {
        node.left = pennant;
        node = pennant;
      } else {
        root = pennant;
        node = pennant;
      }
    };

    for (var i = 0; i < base12.count; ++i) {
      var isOne = base12.nextBitIsOne(); // The number of nodes taken in each slice is 2^(arr.length - (i + 1))

      var chunkSize = Math.pow(2, base12.count - (i + 1));

      if (isOne) {
        buildPennant(chunkSize, LLRBNode.BLACK);
      } else {
        // current == 2
        buildPennant(chunkSize, LLRBNode.BLACK);
        buildPennant(chunkSize, LLRBNode.RED);
      }
    }

    return root;
  };

  var base12 = new Base12Num(childList.length);
  var root = buildFrom12Array(base12); // eslint-disable-next-line @typescript-eslint/no-explicit-any

  return new SortedMap(mapSortFn || cmp, root);
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var _defaultIndexMap;

var fallbackObject = {};

var IndexMap =
/** @class */
function () {
  function IndexMap(indexes_, indexSet_) {
    this.indexes_ = indexes_;
    this.indexSet_ = indexSet_;
  }

  Object.defineProperty(IndexMap, "Default", {
    /**
     * The default IndexMap for nodes without a priority
     */
    get: function get() {
      Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(fallbackObject && PRIORITY_INDEX, 'ChildrenNode.ts has not been loaded');
      _defaultIndexMap = _defaultIndexMap || new IndexMap({
        '.priority': fallbackObject
      }, {
        '.priority': PRIORITY_INDEX
      });
      return _defaultIndexMap;
    },
    enumerable: false,
    configurable: true
  });

  IndexMap.prototype.get = function (indexKey) {
    var sortedMap = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["safeGet"])(this.indexes_, indexKey);

    if (!sortedMap) {
      throw new Error('No index defined for ' + indexKey);
    }

    if (sortedMap instanceof SortedMap) {
      return sortedMap;
    } else {
      // The index exists, but it falls back to just name comparison. Return null so that the calling code uses the
      // regular child map
      return null;
    }
  };

  IndexMap.prototype.hasIndex = function (indexDefinition) {
    return Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["contains"])(this.indexSet_, indexDefinition.toString());
  };

  IndexMap.prototype.addIndex = function (indexDefinition, existingChildren) {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(indexDefinition !== KEY_INDEX, "KeyIndex always exists and isn't meant to be added to the IndexMap.");
    var childList = [];
    var sawIndexedValue = false;
    var iter = existingChildren.getIterator(NamedNode.Wrap);
    var next = iter.getNext();

    while (next) {
      sawIndexedValue = sawIndexedValue || indexDefinition.isDefinedOn(next.node);
      childList.push(next);
      next = iter.getNext();
    }

    var newIndex;

    if (sawIndexedValue) {
      newIndex = buildChildSet(childList, indexDefinition.getCompare());
    } else {
      newIndex = fallbackObject;
    }

    var indexName = indexDefinition.toString();

    var newIndexSet = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, this.indexSet_);

    newIndexSet[indexName] = indexDefinition;

    var newIndexes = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, this.indexes_);

    newIndexes[indexName] = newIndex;
    return new IndexMap(newIndexes, newIndexSet);
  };
  /**
   * Ensure that this node is properly tracked in any indexes that we're maintaining
   */


  IndexMap.prototype.addToIndexes = function (namedNode, existingChildren) {
    var _this = this;

    var newIndexes = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["map"])(this.indexes_, function (indexedChildren, indexName) {
      var index = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["safeGet"])(_this.indexSet_, indexName);
      Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(index, 'Missing index implementation for ' + indexName);

      if (indexedChildren === fallbackObject) {
        // Check to see if we need to index everything
        if (index.isDefinedOn(namedNode.node)) {
          // We need to build this index
          var childList = [];
          var iter = existingChildren.getIterator(NamedNode.Wrap);
          var next = iter.getNext();

          while (next) {
            if (next.name !== namedNode.name) {
              childList.push(next);
            }

            next = iter.getNext();
          }

          childList.push(namedNode);
          return buildChildSet(childList, index.getCompare());
        } else {
          // No change, this remains a fallback
          return fallbackObject;
        }
      } else {
        var existingSnap = existingChildren.get(namedNode.name);
        var newChildren = indexedChildren;

        if (existingSnap) {
          newChildren = newChildren.remove(new NamedNode(namedNode.name, existingSnap));
        }

        return newChildren.insert(namedNode, namedNode.node);
      }
    });
    return new IndexMap(newIndexes, this.indexSet_);
  };
  /**
   * Create a new IndexMap instance with the given value removed
   */


  IndexMap.prototype.removeFromIndexes = function (namedNode, existingChildren) {
    var newIndexes = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["map"])(this.indexes_, function (indexedChildren) {
      if (indexedChildren === fallbackObject) {
        // This is the fallback. Just return it, nothing to do in this case
        return indexedChildren;
      } else {
        var existingSnap = existingChildren.get(namedNode.name);

        if (existingSnap) {
          return indexedChildren.remove(new NamedNode(namedNode.name, existingSnap));
        } else {
          // No record of this child
          return indexedChildren;
        }
      }
    });
    return new IndexMap(newIndexes, this.indexSet_);
  };

  return IndexMap;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function NAME_ONLY_COMPARATOR(left, right) {
  return nameCompare(left.name, right.name);
}

function NAME_COMPARATOR(left, right) {
  return nameCompare(left, right);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// TODO: For memory savings, don't store priorityNode_ if it's empty.


var EMPTY_NODE;
/**
 * ChildrenNode is a class for storing internal nodes in a DataSnapshot
 * (i.e. nodes with children).  It implements Node and stores the
 * list of children in the children property, sorted by child name.
 */

var ChildrenNode =
/** @class */
function () {
  /**
   * @param children_ List of children of this node..
   * @param priorityNode_ The priority of this node (as a snapshot node).
   */
  function ChildrenNode(children_, priorityNode_, indexMap_) {
    this.children_ = children_;
    this.priorityNode_ = priorityNode_;
    this.indexMap_ = indexMap_;
    this.lazyHash_ = null;
    /**
     * Note: The only reason we allow null priority is for EMPTY_NODE, since we can't use
     * EMPTY_NODE as the priority of EMPTY_NODE.  We might want to consider making EMPTY_NODE its own
     * class instead of an empty ChildrenNode.
     */

    if (this.priorityNode_) {
      validatePriorityNode(this.priorityNode_);
    }

    if (this.children_.isEmpty()) {
      Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(!this.priorityNode_ || this.priorityNode_.isEmpty(), 'An empty node cannot have a priority');
    }
  }

  Object.defineProperty(ChildrenNode, "EMPTY_NODE", {
    get: function get() {
      return EMPTY_NODE || (EMPTY_NODE = new ChildrenNode(new SortedMap(NAME_COMPARATOR), null, IndexMap.Default));
    },
    enumerable: false,
    configurable: true
  });
  /** @inheritDoc */

  ChildrenNode.prototype.isLeafNode = function () {
    return false;
  };
  /** @inheritDoc */


  ChildrenNode.prototype.getPriority = function () {
    return this.priorityNode_ || EMPTY_NODE;
  };
  /** @inheritDoc */


  ChildrenNode.prototype.updatePriority = function (newPriorityNode) {
    if (this.children_.isEmpty()) {
      // Don't allow priorities on empty nodes
      return this;
    } else {
      return new ChildrenNode(this.children_, newPriorityNode, this.indexMap_);
    }
  };
  /** @inheritDoc */


  ChildrenNode.prototype.getImmediateChild = function (childName) {
    // Hack to treat priority as a regular child
    if (childName === '.priority') {
      return this.getPriority();
    } else {
      var child = this.children_.get(childName);
      return child === null ? EMPTY_NODE : child;
    }
  };
  /** @inheritDoc */


  ChildrenNode.prototype.getChild = function (path) {
    var front = pathGetFront(path);

    if (front === null) {
      return this;
    }

    return this.getImmediateChild(front).getChild(pathPopFront(path));
  };
  /** @inheritDoc */


  ChildrenNode.prototype.hasChild = function (childName) {
    return this.children_.get(childName) !== null;
  };
  /** @inheritDoc */


  ChildrenNode.prototype.updateImmediateChild = function (childName, newChildNode) {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(newChildNode, 'We should always be passing snapshot nodes');

    if (childName === '.priority') {
      return this.updatePriority(newChildNode);
    } else {
      var namedNode = new NamedNode(childName, newChildNode);
      var newChildren = void 0,
          newIndexMap = void 0;

      if (newChildNode.isEmpty()) {
        newChildren = this.children_.remove(childName);
        newIndexMap = this.indexMap_.removeFromIndexes(namedNode, this.children_);
      } else {
        newChildren = this.children_.insert(childName, newChildNode);
        newIndexMap = this.indexMap_.addToIndexes(namedNode, this.children_);
      }

      var newPriority = newChildren.isEmpty() ? EMPTY_NODE : this.priorityNode_;
      return new ChildrenNode(newChildren, newPriority, newIndexMap);
    }
  };
  /** @inheritDoc */


  ChildrenNode.prototype.updateChild = function (path, newChildNode) {
    var front = pathGetFront(path);

    if (front === null) {
      return newChildNode;
    } else {
      Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(pathGetFront(path) !== '.priority' || pathGetLength(path) === 1, '.priority must be the last token in a path');
      var newImmediateChild = this.getImmediateChild(front).updateChild(pathPopFront(path), newChildNode);
      return this.updateImmediateChild(front, newImmediateChild);
    }
  };
  /** @inheritDoc */


  ChildrenNode.prototype.isEmpty = function () {
    return this.children_.isEmpty();
  };
  /** @inheritDoc */


  ChildrenNode.prototype.numChildren = function () {
    return this.children_.count();
  };
  /** @inheritDoc */


  ChildrenNode.prototype.val = function (exportFormat) {
    if (this.isEmpty()) {
      return null;
    }

    var obj = {};
    var numKeys = 0,
        maxKey = 0,
        allIntegerKeys = true;
    this.forEachChild(PRIORITY_INDEX, function (key, childNode) {
      obj[key] = childNode.val(exportFormat);
      numKeys++;

      if (allIntegerKeys && ChildrenNode.INTEGER_REGEXP_.test(key)) {
        maxKey = Math.max(maxKey, Number(key));
      } else {
        allIntegerKeys = false;
      }
    });

    if (!exportFormat && allIntegerKeys && maxKey < 2 * numKeys) {
      // convert to array.
      var array = []; // eslint-disable-next-line guard-for-in

      for (var key in obj) {
        array[key] = obj[key];
      }

      return array;
    } else {
      if (exportFormat && !this.getPriority().isEmpty()) {
        obj['.priority'] = this.getPriority().val();
      }

      return obj;
    }
  };
  /** @inheritDoc */


  ChildrenNode.prototype.hash = function () {
    if (this.lazyHash_ === null) {
      var toHash_1 = '';

      if (!this.getPriority().isEmpty()) {
        toHash_1 += 'priority:' + priorityHashText(this.getPriority().val()) + ':';
      }

      this.forEachChild(PRIORITY_INDEX, function (key, childNode) {
        var childHash = childNode.hash();

        if (childHash !== '') {
          toHash_1 += ':' + key + ':' + childHash;
        }
      });
      this.lazyHash_ = toHash_1 === '' ? '' : sha1(toHash_1);
    }

    return this.lazyHash_;
  };
  /** @inheritDoc */


  ChildrenNode.prototype.getPredecessorChildName = function (childName, childNode, index) {
    var idx = this.resolveIndex_(index);

    if (idx) {
      var predecessor = idx.getPredecessorKey(new NamedNode(childName, childNode));
      return predecessor ? predecessor.name : null;
    } else {
      return this.children_.getPredecessorKey(childName);
    }
  };

  ChildrenNode.prototype.getFirstChildName = function (indexDefinition) {
    var idx = this.resolveIndex_(indexDefinition);

    if (idx) {
      var minKey = idx.minKey();
      return minKey && minKey.name;
    } else {
      return this.children_.minKey();
    }
  };

  ChildrenNode.prototype.getFirstChild = function (indexDefinition) {
    var minKey = this.getFirstChildName(indexDefinition);

    if (minKey) {
      return new NamedNode(minKey, this.children_.get(minKey));
    } else {
      return null;
    }
  };
  /**
   * Given an index, return the key name of the largest value we have, according to that index
   */


  ChildrenNode.prototype.getLastChildName = function (indexDefinition) {
    var idx = this.resolveIndex_(indexDefinition);

    if (idx) {
      var maxKey = idx.maxKey();
      return maxKey && maxKey.name;
    } else {
      return this.children_.maxKey();
    }
  };

  ChildrenNode.prototype.getLastChild = function (indexDefinition) {
    var maxKey = this.getLastChildName(indexDefinition);

    if (maxKey) {
      return new NamedNode(maxKey, this.children_.get(maxKey));
    } else {
      return null;
    }
  };
  /**
   * @inheritDoc
   */


  ChildrenNode.prototype.forEachChild = function (index, action) {
    var idx = this.resolveIndex_(index);

    if (idx) {
      return idx.inorderTraversal(function (wrappedNode) {
        return action(wrappedNode.name, wrappedNode.node);
      });
    } else {
      return this.children_.inorderTraversal(action);
    }
  };

  ChildrenNode.prototype.getIterator = function (indexDefinition) {
    return this.getIteratorFrom(indexDefinition.minPost(), indexDefinition);
  };

  ChildrenNode.prototype.getIteratorFrom = function (startPost, indexDefinition) {
    var idx = this.resolveIndex_(indexDefinition);

    if (idx) {
      return idx.getIteratorFrom(startPost, function (key) {
        return key;
      });
    } else {
      var iterator = this.children_.getIteratorFrom(startPost.name, NamedNode.Wrap);
      var next = iterator.peek();

      while (next != null && indexDefinition.compare(next, startPost) < 0) {
        iterator.getNext();
        next = iterator.peek();
      }

      return iterator;
    }
  };

  ChildrenNode.prototype.getReverseIterator = function (indexDefinition) {
    return this.getReverseIteratorFrom(indexDefinition.maxPost(), indexDefinition);
  };

  ChildrenNode.prototype.getReverseIteratorFrom = function (endPost, indexDefinition) {
    var idx = this.resolveIndex_(indexDefinition);

    if (idx) {
      return idx.getReverseIteratorFrom(endPost, function (key) {
        return key;
      });
    } else {
      var iterator = this.children_.getReverseIteratorFrom(endPost.name, NamedNode.Wrap);
      var next = iterator.peek();

      while (next != null && indexDefinition.compare(next, endPost) > 0) {
        iterator.getNext();
        next = iterator.peek();
      }

      return iterator;
    }
  };
  /**
   * @inheritDoc
   */


  ChildrenNode.prototype.compareTo = function (other) {
    if (this.isEmpty()) {
      if (other.isEmpty()) {
        return 0;
      } else {
        return -1;
      }
    } else if (other.isLeafNode() || other.isEmpty()) {
      return 1;
    } else if (other === MAX_NODE$2) {
      return -1;
    } else {
      // Must be another node with children.
      return 0;
    }
  };
  /**
   * @inheritDoc
   */


  ChildrenNode.prototype.withIndex = function (indexDefinition) {
    if (indexDefinition === KEY_INDEX || this.indexMap_.hasIndex(indexDefinition)) {
      return this;
    } else {
      var newIndexMap = this.indexMap_.addIndex(indexDefinition, this.children_);
      return new ChildrenNode(this.children_, this.priorityNode_, newIndexMap);
    }
  };
  /**
   * @inheritDoc
   */


  ChildrenNode.prototype.isIndexed = function (index) {
    return index === KEY_INDEX || this.indexMap_.hasIndex(index);
  };
  /**
   * @inheritDoc
   */


  ChildrenNode.prototype.equals = function (other) {
    if (other === this) {
      return true;
    } else if (other.isLeafNode()) {
      return false;
    } else {
      var otherChildrenNode = other;

      if (!this.getPriority().equals(otherChildrenNode.getPriority())) {
        return false;
      } else if (this.children_.count() === otherChildrenNode.children_.count()) {
        var thisIter = this.getIterator(PRIORITY_INDEX);
        var otherIter = otherChildrenNode.getIterator(PRIORITY_INDEX);
        var thisCurrent = thisIter.getNext();
        var otherCurrent = otherIter.getNext();

        while (thisCurrent && otherCurrent) {
          if (thisCurrent.name !== otherCurrent.name || !thisCurrent.node.equals(otherCurrent.node)) {
            return false;
          }

          thisCurrent = thisIter.getNext();
          otherCurrent = otherIter.getNext();
        }

        return thisCurrent === null && otherCurrent === null;
      } else {
        return false;
      }
    }
  };
  /**
   * Returns a SortedMap ordered by index, or null if the default (by-key) ordering can be used
   * instead.
   *
   */


  ChildrenNode.prototype.resolveIndex_ = function (indexDefinition) {
    if (indexDefinition === KEY_INDEX) {
      return null;
    } else {
      return this.indexMap_.get(indexDefinition.toString());
    }
  };

  ChildrenNode.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/;
  return ChildrenNode;
}();

var MaxNode =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(MaxNode, _super);

  function MaxNode() {
    return _super.call(this, new SortedMap(NAME_COMPARATOR), ChildrenNode.EMPTY_NODE, IndexMap.Default) || this;
  }

  MaxNode.prototype.compareTo = function (other) {
    if (other === this) {
      return 0;
    } else {
      return 1;
    }
  };

  MaxNode.prototype.equals = function (other) {
    // Not that we every compare it, but MAX_NODE is only ever equal to itself
    return other === this;
  };

  MaxNode.prototype.getPriority = function () {
    return this;
  };

  MaxNode.prototype.getImmediateChild = function (childName) {
    return ChildrenNode.EMPTY_NODE;
  };

  MaxNode.prototype.isEmpty = function () {
    return false;
  };

  return MaxNode;
}(ChildrenNode);
/**
 * Marker that will sort higher than any other snapshot.
 */


var MAX_NODE$2 = new MaxNode();
Object.defineProperties(NamedNode, {
  MIN: {
    value: new NamedNode(MIN_NAME, ChildrenNode.EMPTY_NODE)
  },
  MAX: {
    value: new NamedNode(MAX_NAME, MAX_NODE$2)
  }
});
/**
 * Reference Extensions
 */

KeyIndex.__EMPTY_NODE = ChildrenNode.EMPTY_NODE;
LeafNode.__childrenNodeConstructor = ChildrenNode;
setMaxNode(MAX_NODE$2);
setMaxNode$1(MAX_NODE$2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var USE_HINZE = true;
/**
 * Constructs a snapshot node representing the passed JSON and returns it.
 * @param json JSON to create a node for.
 * @param priority Optional priority to use.  This will be ignored if the
 * passed JSON contains a .priority property.
 */

function nodeFromJSON$1(json, priority) {
  if (priority === void 0) {
    priority = null;
  }

  if (json === null) {
    return ChildrenNode.EMPTY_NODE;
  }

  if (typeof json === 'object' && '.priority' in json) {
    priority = json['.priority'];
  }

  Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(priority === null || typeof priority === 'string' || typeof priority === 'number' || typeof priority === 'object' && '.sv' in priority, 'Invalid priority type found: ' + typeof priority);

  if (typeof json === 'object' && '.value' in json && json['.value'] !== null) {
    json = json['.value'];
  } // Valid leaf nodes include non-objects or server-value wrapper objects


  if (typeof json !== 'object' || '.sv' in json) {
    var jsonLeaf = json;
    return new LeafNode(jsonLeaf, nodeFromJSON$1(priority));
  }

  if (!(json instanceof Array) && USE_HINZE) {
    var children_1 = [];
    var childrenHavePriority_1 = false;
    var hinzeJsonObj = json;
    each(hinzeJsonObj, function (key, child) {
      if (key.substring(0, 1) !== '.') {
        // Ignore metadata nodes
        var childNode = nodeFromJSON$1(child);

        if (!childNode.isEmpty()) {
          childrenHavePriority_1 = childrenHavePriority_1 || !childNode.getPriority().isEmpty();
          children_1.push(new NamedNode(key, childNode));
        }
      }
    });

    if (children_1.length === 0) {
      return ChildrenNode.EMPTY_NODE;
    }

    var childSet = buildChildSet(children_1, NAME_ONLY_COMPARATOR, function (namedNode) {
      return namedNode.name;
    }, NAME_COMPARATOR);

    if (childrenHavePriority_1) {
      var sortedChildSet = buildChildSet(children_1, PRIORITY_INDEX.getCompare());
      return new ChildrenNode(childSet, nodeFromJSON$1(priority), new IndexMap({
        '.priority': sortedChildSet
      }, {
        '.priority': PRIORITY_INDEX
      }));
    } else {
      return new ChildrenNode(childSet, nodeFromJSON$1(priority), IndexMap.Default);
    }
  } else {
    var node_1 = ChildrenNode.EMPTY_NODE;
    each(json, function (key, childData) {
      if (Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["contains"])(json, key)) {
        if (key.substring(0, 1) !== '.') {
          // ignore metadata nodes.
          var childNode = nodeFromJSON$1(childData);

          if (childNode.isLeafNode() || !childNode.isEmpty()) {
            node_1 = node_1.updateImmediateChild(key, childNode);
          }
        }
      }
    });
    return node_1.updatePriority(nodeFromJSON$1(priority));
  }
}

setNodeFromJSON(nodeFromJSON$1);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var ValueIndex =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(ValueIndex, _super);

  function ValueIndex() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  /**
   * @inheritDoc
   */


  ValueIndex.prototype.compare = function (a, b) {
    var indexCmp = a.node.compareTo(b.node);

    if (indexCmp === 0) {
      return nameCompare(a.name, b.name);
    } else {
      return indexCmp;
    }
  };
  /**
   * @inheritDoc
   */


  ValueIndex.prototype.isDefinedOn = function (node) {
    return true;
  };
  /**
   * @inheritDoc
   */


  ValueIndex.prototype.indexedValueChanged = function (oldNode, newNode) {
    return !oldNode.equals(newNode);
  };
  /**
   * @inheritDoc
   */


  ValueIndex.prototype.minPost = function () {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return NamedNode.MIN;
  };
  /**
   * @inheritDoc
   */


  ValueIndex.prototype.maxPost = function () {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return NamedNode.MAX;
  };

  ValueIndex.prototype.makePost = function (indexValue, name) {
    var valueNode = nodeFromJSON$1(indexValue);
    return new NamedNode(name, valueNode);
  };
  /**
   * @return String representation for inclusion in a query spec
   */


  ValueIndex.prototype.toString = function () {
    return '.value';
  };

  return ValueIndex;
}(Index);

var VALUE_INDEX = new ValueIndex();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var PathIndex =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(PathIndex, _super);

  function PathIndex(indexPath_) {
    var _this = _super.call(this) || this;

    _this.indexPath_ = indexPath_;
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(!pathIsEmpty(indexPath_) && pathGetFront(indexPath_) !== '.priority', "Can't create PathIndex with empty path or .priority key");
    return _this;
  }

  PathIndex.prototype.extractChild = function (snap) {
    return snap.getChild(this.indexPath_);
  };
  /**
   * @inheritDoc
   */


  PathIndex.prototype.isDefinedOn = function (node) {
    return !node.getChild(this.indexPath_).isEmpty();
  };
  /**
   * @inheritDoc
   */


  PathIndex.prototype.compare = function (a, b) {
    var aChild = this.extractChild(a.node);
    var bChild = this.extractChild(b.node);
    var indexCmp = aChild.compareTo(bChild);

    if (indexCmp === 0) {
      return nameCompare(a.name, b.name);
    } else {
      return indexCmp;
    }
  };
  /**
   * @inheritDoc
   */


  PathIndex.prototype.makePost = function (indexValue, name) {
    var valueNode = nodeFromJSON$1(indexValue);
    var node = ChildrenNode.EMPTY_NODE.updateChild(this.indexPath_, valueNode);
    return new NamedNode(name, node);
  };
  /**
   * @inheritDoc
   */


  PathIndex.prototype.maxPost = function () {
    var node = ChildrenNode.EMPTY_NODE.updateChild(this.indexPath_, MAX_NODE$2);
    return new NamedNode(MAX_NAME, node);
  };
  /**
   * @inheritDoc
   */


  PathIndex.prototype.toString = function () {
    return pathSlice(this.indexPath_, 0).join('/');
  };

  return PathIndex;
}(Index);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Class representing a firebase data snapshot.  It wraps a SnapshotNode and
 * surfaces the public methods (val, forEach, etc.) we want to expose.
 */


var DataSnapshot =
/** @class */
function () {
  /**
   * @param node_ A SnapshotNode to wrap.
   * @param ref_ The ref of the location this snapshot came from.
   * @param index_ The iteration order for this snapshot
   */
  function DataSnapshot(node_, ref_, index_) {
    this.node_ = node_;
    this.ref_ = ref_;
    this.index_ = index_;
  }
  /**
   * Retrieves the snapshot contents as JSON.  Returns null if the snapshot is
   * empty.
   *
   * @return JSON representation of the DataSnapshot contents, or null if empty.
   */


  DataSnapshot.prototype.val = function () {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateArgCount"])('DataSnapshot.val', 0, 0, arguments.length);
    return this.node_.val();
  };
  /**
   * Returns the snapshot contents as JSON, including priorities of node.  Suitable for exporting
   * the entire node contents.
   * @return JSON representation of the DataSnapshot contents, or null if empty.
   */


  DataSnapshot.prototype.exportVal = function () {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateArgCount"])('DataSnapshot.exportVal', 0, 0, arguments.length);
    return this.node_.val(true);
  }; // Do not create public documentation. This is intended to make JSON serialization work but is otherwise unnecessary
  // for end-users


  DataSnapshot.prototype.toJSON = function () {
    // Optional spacer argument is unnecessary because we're depending on recursion rather than stringifying the content
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateArgCount"])('DataSnapshot.toJSON', 0, 1, arguments.length);
    return this.exportVal();
  };
  /**
   * Returns whether the snapshot contains a non-null value.
   *
   * @return Whether the snapshot contains a non-null value, or is empty.
   */


  DataSnapshot.prototype.exists = function () {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateArgCount"])('DataSnapshot.exists', 0, 0, arguments.length);
    return !this.node_.isEmpty();
  };
  /**
   * Returns a DataSnapshot of the specified child node's contents.
   *
   * @param childPathString Path to a child.
   * @return DataSnapshot for child node.
   */


  DataSnapshot.prototype.child = function (childPathString) {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateArgCount"])('DataSnapshot.child', 0, 1, arguments.length); // Ensure the childPath is a string (can be a number)

    childPathString = String(childPathString);
    validatePathString('DataSnapshot.child', 1, childPathString, false);
    var childPath = new Path(childPathString);
    var childRef = this.ref_.child(childPath);
    return new DataSnapshot(this.node_.getChild(childPath), childRef, PRIORITY_INDEX);
  };
  /**
   * Returns whether the snapshot contains a child at the specified path.
   *
   * @param childPathString Path to a child.
   * @return Whether the child exists.
   */


  DataSnapshot.prototype.hasChild = function (childPathString) {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateArgCount"])('DataSnapshot.hasChild', 1, 1, arguments.length);
    validatePathString('DataSnapshot.hasChild', 1, childPathString, false);
    var childPath = new Path(childPathString);
    return !this.node_.getChild(childPath).isEmpty();
  };
  /**
   * Returns the priority of the object, or null if no priority was set.
   *
   * @return The priority.
   */


  DataSnapshot.prototype.getPriority = function () {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateArgCount"])('DataSnapshot.getPriority', 0, 0, arguments.length); // typecast here because we never return deferred values or internal priorities (MAX_PRIORITY)

    return this.node_.getPriority().val();
  };
  /**
   * Iterates through child nodes and calls the specified action for each one.
   *
   * @param action Callback function to be called
   * for each child.
   * @return True if forEach was canceled by action returning true for
   * one of the child nodes.
   */


  DataSnapshot.prototype.forEach = function (action) {
    var _this = this;

    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateArgCount"])('DataSnapshot.forEach', 1, 1, arguments.length);
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateCallback"])('DataSnapshot.forEach', 1, action, false);

    if (this.node_.isLeafNode()) {
      return false;
    }

    var childrenNode = this.node_; // Sanitize the return value to a boolean. ChildrenNode.forEachChild has a weird return type...

    return !!childrenNode.forEachChild(this.index_, function (key, node) {
      return action(new DataSnapshot(node, _this.ref_.child(key), PRIORITY_INDEX));
    });
  };
  /**
   * Returns whether this DataSnapshot has children.
   * @return True if the DataSnapshot contains 1 or more child nodes.
   */


  DataSnapshot.prototype.hasChildren = function () {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateArgCount"])('DataSnapshot.hasChildren', 0, 0, arguments.length);

    if (this.node_.isLeafNode()) {
      return false;
    } else {
      return !this.node_.isEmpty();
    }
  };

  Object.defineProperty(DataSnapshot.prototype, "key", {
    get: function get() {
      return this.ref_.getKey();
    },
    enumerable: false,
    configurable: true
  });
  /**
   * Returns the number of children for this DataSnapshot.
   * @return The number of children that this DataSnapshot contains.
   */

  DataSnapshot.prototype.numChildren = function () {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateArgCount"])('DataSnapshot.numChildren', 0, 0, arguments.length);
    return this.node_.numChildren();
  };
  /**
   * @return The Firebase reference for the location this snapshot's data came
   * from.
   */


  DataSnapshot.prototype.getRef = function () {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateArgCount"])('DataSnapshot.ref', 0, 0, arguments.length);
    return this.ref_;
  };

  Object.defineProperty(DataSnapshot.prototype, "ref", {
    get: function get() {
      return this.getRef();
    },
    enumerable: false,
    configurable: true
  });
  return DataSnapshot;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Encapsulates the data needed to raise an event
 */


var DataEvent =
/** @class */
function () {
  /**
   * @param eventType One of: value, child_added, child_changed, child_moved, child_removed
   * @param eventRegistration The function to call to with the event data. User provided
   * @param snapshot The data backing the event
   * @param prevName Optional, the name of the previous child for child_* events.
   */
  function DataEvent(eventType, eventRegistration, snapshot, prevName) {
    this.eventType = eventType;
    this.eventRegistration = eventRegistration;
    this.snapshot = snapshot;
    this.prevName = prevName;
  }
  /**
   * @inheritDoc
   */


  DataEvent.prototype.getPath = function () {
    var ref = this.snapshot.getRef();

    if (this.eventType === 'value') {
      return ref.path;
    } else {
      return ref.getParent().path;
    }
  };
  /**
   * @inheritDoc
   */


  DataEvent.prototype.getEventType = function () {
    return this.eventType;
  };
  /**
   * @inheritDoc
   */


  DataEvent.prototype.getEventRunner = function () {
    return this.eventRegistration.getEventRunner(this);
  };
  /**
   * @inheritDoc
   */


  DataEvent.prototype.toString = function () {
    return this.getPath().toString() + ':' + this.eventType + ':' + Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["stringify"])(this.snapshot.exportVal());
  };

  return DataEvent;
}();

var CancelEvent =
/** @class */
function () {
  function CancelEvent(eventRegistration, error, path) {
    this.eventRegistration = eventRegistration;
    this.error = error;
    this.path = path;
  }
  /**
   * @inheritDoc
   */


  CancelEvent.prototype.getPath = function () {
    return this.path;
  };
  /**
   * @inheritDoc
   */


  CancelEvent.prototype.getEventType = function () {
    return 'cancel';
  };
  /**
   * @inheritDoc
   */


  CancelEvent.prototype.getEventRunner = function () {
    return this.eventRegistration.getEventRunner(this);
  };
  /**
   * @inheritDoc
   */


  CancelEvent.prototype.toString = function () {
    return this.path.toString() + ':cancel';
  };

  return CancelEvent;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Represents registration for 'value' events.
 */


var ValueEventRegistration =
/** @class */
function () {
  function ValueEventRegistration(callback_, cancelCallback_, context_) {
    this.callback_ = callback_;
    this.cancelCallback_ = cancelCallback_;
    this.context_ = context_;
  }
  /**
   * @inheritDoc
   */


  ValueEventRegistration.prototype.respondsTo = function (eventType) {
    return eventType === 'value';
  };
  /**
   * @inheritDoc
   */


  ValueEventRegistration.prototype.createEvent = function (change, query) {
    var index = query.getQueryParams().getIndex();
    return new DataEvent('value', this, new DataSnapshot(change.snapshotNode, query.getRef(), index));
  };
  /**
   * @inheritDoc
   */


  ValueEventRegistration.prototype.getEventRunner = function (eventData) {
    var ctx = this.context_;

    if (eventData.getEventType() === 'cancel') {
      Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(this.cancelCallback_, 'Raising a cancel event on a listener with no cancel callback');
      var cancelCB_1 = this.cancelCallback_;
      return function () {
        // We know that error exists, we checked above that this is a cancel event
        cancelCB_1.call(ctx, eventData.error);
      };
    } else {
      var cb_1 = this.callback_;
      return function () {
        cb_1.call(ctx, eventData.snapshot);
      };
    }
  };
  /**
   * @inheritDoc
   */


  ValueEventRegistration.prototype.createCancelEvent = function (error, path) {
    if (this.cancelCallback_) {
      return new CancelEvent(this, error, path);
    } else {
      return null;
    }
  };
  /**
   * @inheritDoc
   */


  ValueEventRegistration.prototype.matches = function (other) {
    if (!(other instanceof ValueEventRegistration)) {
      return false;
    } else if (!other.callback_ || !this.callback_) {
      // If no callback specified, we consider it to match any callback.
      return true;
    } else {
      return other.callback_ === this.callback_ && other.context_ === this.context_;
    }
  };
  /**
   * @inheritDoc
   */


  ValueEventRegistration.prototype.hasAnyCallback = function () {
    return this.callback_ !== null;
  };

  return ValueEventRegistration;
}();
/**
 * Represents the registration of 1 or more child_xxx events.
 *
 * Currently, it is always exactly 1 child_xxx event, but the idea is we might let you
 * register a group of callbacks together in the future.
 */


var ChildEventRegistration =
/** @class */
function () {
  function ChildEventRegistration(callbacks_, cancelCallback_, context_) {
    this.callbacks_ = callbacks_;
    this.cancelCallback_ = cancelCallback_;
    this.context_ = context_;
  }
  /**
   * @inheritDoc
   */


  ChildEventRegistration.prototype.respondsTo = function (eventType) {
    var eventToCheck = eventType === 'children_added' ? 'child_added' : eventType;
    eventToCheck = eventToCheck === 'children_removed' ? 'child_removed' : eventToCheck;
    return Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["contains"])(this.callbacks_, eventToCheck);
  };
  /**
   * @inheritDoc
   */


  ChildEventRegistration.prototype.createCancelEvent = function (error, path) {
    if (this.cancelCallback_) {
      return new CancelEvent(this, error, path);
    } else {
      return null;
    }
  };
  /**
   * @inheritDoc
   */


  ChildEventRegistration.prototype.createEvent = function (change, query) {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(change.childName != null, 'Child events should have a childName.');
    var ref = query.getRef().child(change.childName);
    var index = query.getQueryParams().getIndex();
    return new DataEvent(change.type, this, new DataSnapshot(change.snapshotNode, ref, index), change.prevName);
  };
  /**
   * @inheritDoc
   */


  ChildEventRegistration.prototype.getEventRunner = function (eventData) {
    var ctx = this.context_;

    if (eventData.getEventType() === 'cancel') {
      Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(this.cancelCallback_, 'Raising a cancel event on a listener with no cancel callback');
      var cancelCB_2 = this.cancelCallback_;
      return function () {
        // We know that error exists, we checked above that this is a cancel event
        cancelCB_2.call(ctx, eventData.error);
      };
    } else {
      var cb_2 = this.callbacks_[eventData.eventType];
      return function () {
        cb_2.call(ctx, eventData.snapshot, eventData.prevName);
      };
    }
  };
  /**
   * @inheritDoc
   */


  ChildEventRegistration.prototype.matches = function (other) {
    var _this = this;

    if (other instanceof ChildEventRegistration) {
      if (!this.callbacks_ || !other.callbacks_) {
        return true;
      } else if (this.context_ === other.context_) {
        var otherKeys = Object.keys(other.callbacks_);
        var thisKeys = Object.keys(this.callbacks_);
        var otherCount = otherKeys.length;
        var thisCount = thisKeys.length;

        if (otherCount === thisCount) {
          // If count is 1, do an exact match on eventType, if either is defined but null, it's a match.
          // If event types don't match, not a match
          // If count is not 1, exact match across all
          if (otherCount === 1) {
            var otherKey = otherKeys[0];
            var thisKey = thisKeys[0];
            return thisKey === otherKey && (!other.callbacks_[otherKey] || !this.callbacks_[thisKey] || other.callbacks_[otherKey] === this.callbacks_[thisKey]);
          } else {
            // Exact match on each key.
            return thisKeys.every(function (eventType) {
              return other.callbacks_[eventType] === _this.callbacks_[eventType];
            });
          }
        }
      }
    }

    return false;
  };
  /**
   * @inheritDoc
   */


  ChildEventRegistration.prototype.hasAnyCallback = function () {
    return this.callbacks_ !== null;
  };

  return ChildEventRegistration;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function changeValue(snapshotNode) {
  return {
    type: "value"
    /* VALUE */
    ,
    snapshotNode: snapshotNode
  };
}

function changeChildAdded(childName, snapshotNode) {
  return {
    type: "child_added"
    /* CHILD_ADDED */
    ,
    snapshotNode: snapshotNode,
    childName: childName
  };
}

function changeChildRemoved(childName, snapshotNode) {
  return {
    type: "child_removed"
    /* CHILD_REMOVED */
    ,
    snapshotNode: snapshotNode,
    childName: childName
  };
}

function changeChildChanged(childName, snapshotNode, oldSnap) {
  return {
    type: "child_changed"
    /* CHILD_CHANGED */
    ,
    snapshotNode: snapshotNode,
    childName: childName,
    oldSnap: oldSnap
  };
}

function changeChildMoved(childName, snapshotNode) {
  return {
    type: "child_moved"
    /* CHILD_MOVED */
    ,
    snapshotNode: snapshotNode,
    childName: childName
  };
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Doesn't really filter nodes but applies an index to the node and keeps track of any changes
 */


var IndexedFilter =
/** @class */
function () {
  function IndexedFilter(index_) {
    this.index_ = index_;
  }

  IndexedFilter.prototype.updateChild = function (snap, key, newChild, affectedPath, source, optChangeAccumulator) {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(snap.isIndexed(this.index_), 'A node must be indexed if only a child is updated');
    var oldChild = snap.getImmediateChild(key); // Check if anything actually changed.

    if (oldChild.getChild(affectedPath).equals(newChild.getChild(affectedPath))) {
      // There's an edge case where a child can enter or leave the view because affectedPath was set to null.
      // In this case, affectedPath will appear null in both the old and new snapshots.  So we need
      // to avoid treating these cases as "nothing changed."
      if (oldChild.isEmpty() === newChild.isEmpty()) {
        // Nothing changed.
        // This assert should be valid, but it's expensive (can dominate perf testing) so don't actually do it.
        //assert(oldChild.equals(newChild), 'Old and new snapshots should be equal.');
        return snap;
      }
    }

    if (optChangeAccumulator != null) {
      if (newChild.isEmpty()) {
        if (snap.hasChild(key)) {
          optChangeAccumulator.trackChildChange(changeChildRemoved(key, oldChild));
        } else {
          Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(snap.isLeafNode(), 'A child remove without an old child only makes sense on a leaf node');
        }
      } else if (oldChild.isEmpty()) {
        optChangeAccumulator.trackChildChange(changeChildAdded(key, newChild));
      } else {
        optChangeAccumulator.trackChildChange(changeChildChanged(key, newChild, oldChild));
      }
    }

    if (snap.isLeafNode() && newChild.isEmpty()) {
      return snap;
    } else {
      // Make sure the node is indexed
      return snap.updateImmediateChild(key, newChild).withIndex(this.index_);
    }
  };
  /**
   * @inheritDoc
   */


  IndexedFilter.prototype.updateFullNode = function (oldSnap, newSnap, optChangeAccumulator) {
    if (optChangeAccumulator != null) {
      if (!oldSnap.isLeafNode()) {
        oldSnap.forEachChild(PRIORITY_INDEX, function (key, childNode) {
          if (!newSnap.hasChild(key)) {
            optChangeAccumulator.trackChildChange(changeChildRemoved(key, childNode));
          }
        });
      }

      if (!newSnap.isLeafNode()) {
        newSnap.forEachChild(PRIORITY_INDEX, function (key, childNode) {
          if (oldSnap.hasChild(key)) {
            var oldChild = oldSnap.getImmediateChild(key);

            if (!oldChild.equals(childNode)) {
              optChangeAccumulator.trackChildChange(changeChildChanged(key, childNode, oldChild));
            }
          } else {
            optChangeAccumulator.trackChildChange(changeChildAdded(key, childNode));
          }
        });
      }
    }

    return newSnap.withIndex(this.index_);
  };
  /**
   * @inheritDoc
   */


  IndexedFilter.prototype.updatePriority = function (oldSnap, newPriority) {
    if (oldSnap.isEmpty()) {
      return ChildrenNode.EMPTY_NODE;
    } else {
      return oldSnap.updatePriority(newPriority);
    }
  };
  /**
   * @inheritDoc
   */


  IndexedFilter.prototype.filtersNodes = function () {
    return false;
  };
  /**
   * @inheritDoc
   */


  IndexedFilter.prototype.getIndexedFilter = function () {
    return this;
  };
  /**
   * @inheritDoc
   */


  IndexedFilter.prototype.getIndex = function () {
    return this.index_;
  };

  return IndexedFilter;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Filters nodes by range and uses an IndexFilter to track any changes after filtering the node
 */


var RangedFilter =
/** @class */
function () {
  function RangedFilter(params) {
    this.indexedFilter_ = new IndexedFilter(params.getIndex());
    this.index_ = params.getIndex();
    this.startPost_ = RangedFilter.getStartPost_(params);
    this.endPost_ = RangedFilter.getEndPost_(params);
  }

  RangedFilter.prototype.getStartPost = function () {
    return this.startPost_;
  };

  RangedFilter.prototype.getEndPost = function () {
    return this.endPost_;
  };

  RangedFilter.prototype.matches = function (node) {
    return this.index_.compare(this.getStartPost(), node) <= 0 && this.index_.compare(node, this.getEndPost()) <= 0;
  };
  /**
   * @inheritDoc
   */


  RangedFilter.prototype.updateChild = function (snap, key, newChild, affectedPath, source, optChangeAccumulator) {
    if (!this.matches(new NamedNode(key, newChild))) {
      newChild = ChildrenNode.EMPTY_NODE;
    }

    return this.indexedFilter_.updateChild(snap, key, newChild, affectedPath, source, optChangeAccumulator);
  };
  /**
   * @inheritDoc
   */


  RangedFilter.prototype.updateFullNode = function (oldSnap, newSnap, optChangeAccumulator) {
    if (newSnap.isLeafNode()) {
      // Make sure we have a children node with the correct index, not a leaf node;
      newSnap = ChildrenNode.EMPTY_NODE;
    }

    var filtered = newSnap.withIndex(this.index_); // Don't support priorities on queries

    filtered = filtered.updatePriority(ChildrenNode.EMPTY_NODE);
    var self = this;
    newSnap.forEachChild(PRIORITY_INDEX, function (key, childNode) {
      if (!self.matches(new NamedNode(key, childNode))) {
        filtered = filtered.updateImmediateChild(key, ChildrenNode.EMPTY_NODE);
      }
    });
    return this.indexedFilter_.updateFullNode(oldSnap, filtered, optChangeAccumulator);
  };
  /**
   * @inheritDoc
   */


  RangedFilter.prototype.updatePriority = function (oldSnap, newPriority) {
    // Don't support priorities on queries
    return oldSnap;
  };
  /**
   * @inheritDoc
   */


  RangedFilter.prototype.filtersNodes = function () {
    return true;
  };
  /**
   * @inheritDoc
   */


  RangedFilter.prototype.getIndexedFilter = function () {
    return this.indexedFilter_;
  };
  /**
   * @inheritDoc
   */


  RangedFilter.prototype.getIndex = function () {
    return this.index_;
  };

  RangedFilter.getStartPost_ = function (params) {
    if (params.hasStart()) {
      var startName = params.getIndexStartName();
      return params.getIndex().makePost(params.getIndexStartValue(), startName);
    } else {
      return params.getIndex().minPost();
    }
  };

  RangedFilter.getEndPost_ = function (params) {
    if (params.hasEnd()) {
      var endName = params.getIndexEndName();
      return params.getIndex().makePost(params.getIndexEndValue(), endName);
    } else {
      return params.getIndex().maxPost();
    }
  };

  return RangedFilter;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Applies a limit and a range to a node and uses RangedFilter to do the heavy lifting where possible
 */


var LimitedFilter =
/** @class */
function () {
  function LimitedFilter(params) {
    this.rangedFilter_ = new RangedFilter(params);
    this.index_ = params.getIndex();
    this.limit_ = params.getLimit();
    this.reverse_ = !params.isViewFromLeft();
  }
  /**
   * @inheritDoc
   */


  LimitedFilter.prototype.updateChild = function (snap, key, newChild, affectedPath, source, optChangeAccumulator) {
    if (!this.rangedFilter_.matches(new NamedNode(key, newChild))) {
      newChild = ChildrenNode.EMPTY_NODE;
    }

    if (snap.getImmediateChild(key).equals(newChild)) {
      // No change
      return snap;
    } else if (snap.numChildren() < this.limit_) {
      return this.rangedFilter_.getIndexedFilter().updateChild(snap, key, newChild, affectedPath, source, optChangeAccumulator);
    } else {
      return this.fullLimitUpdateChild_(snap, key, newChild, source, optChangeAccumulator);
    }
  };
  /**
   * @inheritDoc
   */


  LimitedFilter.prototype.updateFullNode = function (oldSnap, newSnap, optChangeAccumulator) {
    var filtered;

    if (newSnap.isLeafNode() || newSnap.isEmpty()) {
      // Make sure we have a children node with the correct index, not a leaf node;
      filtered = ChildrenNode.EMPTY_NODE.withIndex(this.index_);
    } else {
      if (this.limit_ * 2 < newSnap.numChildren() && newSnap.isIndexed(this.index_)) {
        // Easier to build up a snapshot, since what we're given has more than twice the elements we want
        filtered = ChildrenNode.EMPTY_NODE.withIndex(this.index_); // anchor to the startPost, endPost, or last element as appropriate

        var iterator = void 0;

        if (this.reverse_) {
          iterator = newSnap.getReverseIteratorFrom(this.rangedFilter_.getEndPost(), this.index_);
        } else {
          iterator = newSnap.getIteratorFrom(this.rangedFilter_.getStartPost(), this.index_);
        }

        var count = 0;

        while (iterator.hasNext() && count < this.limit_) {
          var next = iterator.getNext();
          var inRange = void 0;

          if (this.reverse_) {
            inRange = this.index_.compare(this.rangedFilter_.getStartPost(), next) <= 0;
          } else {
            inRange = this.index_.compare(next, this.rangedFilter_.getEndPost()) <= 0;
          }

          if (inRange) {
            filtered = filtered.updateImmediateChild(next.name, next.node);
            count++;
          } else {
            // if we have reached the end post, we cannot keep adding elemments
            break;
          }
        }
      } else {
        // The snap contains less than twice the limit. Faster to delete from the snap than build up a new one
        filtered = newSnap.withIndex(this.index_); // Don't support priorities on queries

        filtered = filtered.updatePriority(ChildrenNode.EMPTY_NODE);
        var startPost = void 0;
        var endPost = void 0;
        var cmp = void 0;
        var iterator = void 0;

        if (this.reverse_) {
          iterator = filtered.getReverseIterator(this.index_);
          startPost = this.rangedFilter_.getEndPost();
          endPost = this.rangedFilter_.getStartPost();
          var indexCompare_1 = this.index_.getCompare();

          cmp = function cmp(a, b) {
            return indexCompare_1(b, a);
          };
        } else {
          iterator = filtered.getIterator(this.index_);
          startPost = this.rangedFilter_.getStartPost();
          endPost = this.rangedFilter_.getEndPost();
          cmp = this.index_.getCompare();
        }

        var count = 0;
        var foundStartPost = false;

        while (iterator.hasNext()) {
          var next = iterator.getNext();

          if (!foundStartPost && cmp(startPost, next) <= 0) {
            // start adding
            foundStartPost = true;
          }

          var inRange = foundStartPost && count < this.limit_ && cmp(next, endPost) <= 0;

          if (inRange) {
            count++;
          } else {
            filtered = filtered.updateImmediateChild(next.name, ChildrenNode.EMPTY_NODE);
          }
        }
      }
    }

    return this.rangedFilter_.getIndexedFilter().updateFullNode(oldSnap, filtered, optChangeAccumulator);
  };
  /**
   * @inheritDoc
   */


  LimitedFilter.prototype.updatePriority = function (oldSnap, newPriority) {
    // Don't support priorities on queries
    return oldSnap;
  };
  /**
   * @inheritDoc
   */


  LimitedFilter.prototype.filtersNodes = function () {
    return true;
  };
  /**
   * @inheritDoc
   */


  LimitedFilter.prototype.getIndexedFilter = function () {
    return this.rangedFilter_.getIndexedFilter();
  };
  /**
   * @inheritDoc
   */


  LimitedFilter.prototype.getIndex = function () {
    return this.index_;
  };

  LimitedFilter.prototype.fullLimitUpdateChild_ = function (snap, childKey, childSnap, source, changeAccumulator) {
    // TODO: rename all cache stuff etc to general snap terminology
    var cmp;

    if (this.reverse_) {
      var indexCmp_1 = this.index_.getCompare();

      cmp = function cmp(a, b) {
        return indexCmp_1(b, a);
      };
    } else {
      cmp = this.index_.getCompare();
    }

    var oldEventCache = snap;
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(oldEventCache.numChildren() === this.limit_, '');
    var newChildNamedNode = new NamedNode(childKey, childSnap);
    var windowBoundary = this.reverse_ ? oldEventCache.getFirstChild(this.index_) : oldEventCache.getLastChild(this.index_);
    var inRange = this.rangedFilter_.matches(newChildNamedNode);

    if (oldEventCache.hasChild(childKey)) {
      var oldChildSnap = oldEventCache.getImmediateChild(childKey);
      var nextChild = source.getChildAfterChild(this.index_, windowBoundary, this.reverse_);

      while (nextChild != null && (nextChild.name === childKey || oldEventCache.hasChild(nextChild.name))) {
        // There is a weird edge case where a node is updated as part of a merge in the write tree, but hasn't
        // been applied to the limited filter yet. Ignore this next child which will be updated later in
        // the limited filter...
        nextChild = source.getChildAfterChild(this.index_, nextChild, this.reverse_);
      }

      var compareNext = nextChild == null ? 1 : cmp(nextChild, newChildNamedNode);
      var remainsInWindow = inRange && !childSnap.isEmpty() && compareNext >= 0;

      if (remainsInWindow) {
        if (changeAccumulator != null) {
          changeAccumulator.trackChildChange(changeChildChanged(childKey, childSnap, oldChildSnap));
        }

        return oldEventCache.updateImmediateChild(childKey, childSnap);
      } else {
        if (changeAccumulator != null) {
          changeAccumulator.trackChildChange(changeChildRemoved(childKey, oldChildSnap));
        }

        var newEventCache = oldEventCache.updateImmediateChild(childKey, ChildrenNode.EMPTY_NODE);
        var nextChildInRange = nextChild != null && this.rangedFilter_.matches(nextChild);

        if (nextChildInRange) {
          if (changeAccumulator != null) {
            changeAccumulator.trackChildChange(changeChildAdded(nextChild.name, nextChild.node));
          }

          return newEventCache.updateImmediateChild(nextChild.name, nextChild.node);
        } else {
          return newEventCache;
        }
      }
    } else if (childSnap.isEmpty()) {
      // we're deleting a node, but it was not in the window, so ignore it
      return snap;
    } else if (inRange) {
      if (cmp(windowBoundary, newChildNamedNode) >= 0) {
        if (changeAccumulator != null) {
          changeAccumulator.trackChildChange(changeChildRemoved(windowBoundary.name, windowBoundary.node));
          changeAccumulator.trackChildChange(changeChildAdded(childKey, childSnap));
        }

        return oldEventCache.updateImmediateChild(childKey, childSnap).updateImmediateChild(windowBoundary.name, ChildrenNode.EMPTY_NODE);
      } else {
        return snap;
      }
    } else {
      return snap;
    }
  };

  return LimitedFilter;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * This class is an immutable-from-the-public-api struct containing a set of query parameters defining a
 * range to be returned for a particular location. It is assumed that validation of parameters is done at the
 * user-facing API level, so it is not done here.
 */


var QueryParams =
/** @class */
function () {
  function QueryParams() {
    this.limitSet_ = false;
    this.startSet_ = false;
    this.startNameSet_ = false;
    this.startAfterSet_ = false;
    this.endSet_ = false;
    this.endNameSet_ = false;
    this.endBeforeSet_ = false;
    this.limit_ = 0;
    this.viewFrom_ = '';
    this.indexStartValue_ = null;
    this.indexStartName_ = '';
    this.indexEndValue_ = null;
    this.indexEndName_ = '';
    this.index_ = PRIORITY_INDEX;
  }

  QueryParams.prototype.hasStart = function () {
    return this.startSet_;
  };

  QueryParams.prototype.hasStartAfter = function () {
    return this.startAfterSet_;
  };

  QueryParams.prototype.hasEndBefore = function () {
    return this.endBeforeSet_;
  };
  /**
   * @return True if it would return from left.
   */


  QueryParams.prototype.isViewFromLeft = function () {
    if (this.viewFrom_ === '') {
      // limit(), rather than limitToFirst or limitToLast was called.
      // This means that only one of startSet_ and endSet_ is true. Use them
      // to calculate which side of the view to anchor to. If neither is set,
      // anchor to the end.
      return this.startSet_;
    } else {
      return this.viewFrom_ === "l"
      /* VIEW_FROM_LEFT */
      ;
    }
  };
  /**
   * Only valid to call if hasStart() returns true
   */


  QueryParams.prototype.getIndexStartValue = function () {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(this.startSet_, 'Only valid if start has been set');
    return this.indexStartValue_;
  };
  /**
   * Only valid to call if hasStart() returns true.
   * Returns the starting key name for the range defined by these query parameters
   */


  QueryParams.prototype.getIndexStartName = function () {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(this.startSet_, 'Only valid if start has been set');

    if (this.startNameSet_) {
      return this.indexStartName_;
    } else {
      return MIN_NAME;
    }
  };

  QueryParams.prototype.hasEnd = function () {
    return this.endSet_;
  };
  /**
   * Only valid to call if hasEnd() returns true.
   */


  QueryParams.prototype.getIndexEndValue = function () {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(this.endSet_, 'Only valid if end has been set');
    return this.indexEndValue_;
  };
  /**
   * Only valid to call if hasEnd() returns true.
   * Returns the end key name for the range defined by these query parameters
   */


  QueryParams.prototype.getIndexEndName = function () {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(this.endSet_, 'Only valid if end has been set');

    if (this.endNameSet_) {
      return this.indexEndName_;
    } else {
      return MAX_NAME;
    }
  };

  QueryParams.prototype.hasLimit = function () {
    return this.limitSet_;
  };
  /**
   * @return True if a limit has been set and it has been explicitly anchored
   */


  QueryParams.prototype.hasAnchoredLimit = function () {
    return this.limitSet_ && this.viewFrom_ !== '';
  };
  /**
   * Only valid to call if hasLimit() returns true
   */


  QueryParams.prototype.getLimit = function () {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(this.limitSet_, 'Only valid if limit has been set');
    return this.limit_;
  };

  QueryParams.prototype.getIndex = function () {
    return this.index_;
  };

  QueryParams.prototype.loadsAllData = function () {
    return !(this.startSet_ || this.endSet_ || this.limitSet_);
  };

  QueryParams.prototype.isDefault = function () {
    return this.loadsAllData() && this.index_ === PRIORITY_INDEX;
  };

  QueryParams.prototype.copy = function () {
    var copy = new QueryParams();
    copy.limitSet_ = this.limitSet_;
    copy.limit_ = this.limit_;
    copy.startSet_ = this.startSet_;
    copy.indexStartValue_ = this.indexStartValue_;
    copy.startNameSet_ = this.startNameSet_;
    copy.indexStartName_ = this.indexStartName_;
    copy.endSet_ = this.endSet_;
    copy.indexEndValue_ = this.indexEndValue_;
    copy.endNameSet_ = this.endNameSet_;
    copy.indexEndName_ = this.indexEndName_;
    copy.index_ = this.index_;
    copy.viewFrom_ = this.viewFrom_;
    return copy;
  };

  return QueryParams;
}();

function queryParamsGetNodeFilter(queryParams) {
  if (queryParams.loadsAllData()) {
    return new IndexedFilter(queryParams.getIndex());
  } else if (queryParams.hasLimit()) {
    return new LimitedFilter(queryParams);
  } else {
    return new RangedFilter(queryParams);
  }
}

function queryParamsLimitToFirst(queryParams, newLimit) {
  var newParams = queryParams.copy();
  newParams.limitSet_ = true;
  newParams.limit_ = newLimit;
  newParams.viewFrom_ = "l"
  /* VIEW_FROM_LEFT */
  ;
  return newParams;
}

function queryParamsLimitToLast(queryParams, newLimit) {
  var newParams = queryParams.copy();
  newParams.limitSet_ = true;
  newParams.limit_ = newLimit;
  newParams.viewFrom_ = "r"
  /* VIEW_FROM_RIGHT */
  ;
  return newParams;
}

function queryParamsStartAt(queryParams, indexValue, key) {
  var newParams = queryParams.copy();
  newParams.startSet_ = true;

  if (indexValue === undefined) {
    indexValue = null;
  }

  newParams.indexStartValue_ = indexValue;

  if (key != null) {
    newParams.startNameSet_ = true;
    newParams.indexStartName_ = key;
  } else {
    newParams.startNameSet_ = false;
    newParams.indexStartName_ = '';
  }

  return newParams;
}

function queryParamsStartAfter(queryParams, indexValue, key) {
  var params;

  if (queryParams.index_ === KEY_INDEX) {
    if (typeof indexValue === 'string') {
      indexValue = successor(indexValue);
    }

    params = queryParamsStartAt(queryParams, indexValue, key);
  } else {
    var childKey = void 0;

    if (key == null) {
      childKey = MAX_NAME;
    } else {
      childKey = successor(key);
    }

    params = queryParamsStartAt(queryParams, indexValue, childKey);
  }

  params.startAfterSet_ = true;
  return params;
}

function queryParamsEndAt(queryParams, indexValue, key) {
  var newParams = queryParams.copy();
  newParams.endSet_ = true;

  if (indexValue === undefined) {
    indexValue = null;
  }

  newParams.indexEndValue_ = indexValue;

  if (key !== undefined) {
    newParams.endNameSet_ = true;
    newParams.indexEndName_ = key;
  } else {
    newParams.endNameSet_ = false;
    newParams.indexEndName_ = '';
  }

  return newParams;
}

function queryParamsEndBefore(queryParams, indexValue, key) {
  var childKey;
  var params;

  if (queryParams.index_ === KEY_INDEX) {
    if (typeof indexValue === 'string') {
      indexValue = predecessor(indexValue);
    }

    params = queryParamsEndAt(queryParams, indexValue, key);
  } else {
    if (key == null) {
      childKey = MIN_NAME;
    } else {
      childKey = predecessor(key);
    }

    params = queryParamsEndAt(queryParams, indexValue, childKey);
  }

  params.endBeforeSet_ = true;
  return params;
}

function queryParamsOrderBy(queryParams, index) {
  var newParams = queryParams.copy();
  newParams.index_ = index;
  return newParams;
}
/**
 * Returns a set of REST query string parameters representing this query.
 *
 * @return query string parameters
 */


function queryParamsToRestQueryStringParameters(queryParams) {
  var qs = {};

  if (queryParams.isDefault()) {
    return qs;
  }

  var orderBy;

  if (queryParams.index_ === PRIORITY_INDEX) {
    orderBy = "$priority"
    /* PRIORITY_INDEX */
    ;
  } else if (queryParams.index_ === VALUE_INDEX) {
    orderBy = "$value"
    /* VALUE_INDEX */
    ;
  } else if (queryParams.index_ === KEY_INDEX) {
    orderBy = "$key"
    /* KEY_INDEX */
    ;
  } else {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(queryParams.index_ instanceof PathIndex, 'Unrecognized index type!');
    orderBy = queryParams.index_.toString();
  }

  qs["orderBy"
  /* ORDER_BY */
  ] = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["stringify"])(orderBy);

  if (queryParams.startSet_) {
    qs["startAt"
    /* START_AT */
    ] = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["stringify"])(queryParams.indexStartValue_);

    if (queryParams.startNameSet_) {
      qs["startAt"
      /* START_AT */
      ] += ',' + Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["stringify"])(queryParams.indexStartName_);
    }
  }

  if (queryParams.endSet_) {
    qs["endAt"
    /* END_AT */
    ] = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["stringify"])(queryParams.indexEndValue_);

    if (queryParams.endNameSet_) {
      qs["endAt"
      /* END_AT */
      ] += ',' + Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["stringify"])(queryParams.indexEndName_);
    }
  }

  if (queryParams.limitSet_) {
    if (queryParams.isViewFromLeft()) {
      qs["limitToFirst"
      /* LIMIT_TO_FIRST */
      ] = queryParams.limit_;
    } else {
      qs["limitToLast"
      /* LIMIT_TO_LAST */
      ] = queryParams.limit_;
    }
  }

  return qs;
}

function queryParamsGetQueryObject(queryParams) {
  var obj = {};

  if (queryParams.startSet_) {
    obj["sp"
    /* INDEX_START_VALUE */
    ] = queryParams.indexStartValue_;

    if (queryParams.startNameSet_) {
      obj["sn"
      /* INDEX_START_NAME */
      ] = queryParams.indexStartName_;
    }
  }

  if (queryParams.endSet_) {
    obj["ep"
    /* INDEX_END_VALUE */
    ] = queryParams.indexEndValue_;

    if (queryParams.endNameSet_) {
      obj["en"
      /* INDEX_END_NAME */
      ] = queryParams.indexEndName_;
    }
  }

  if (queryParams.limitSet_) {
    obj["l"
    /* LIMIT */
    ] = queryParams.limit_;
    var viewFrom = queryParams.viewFrom_;

    if (viewFrom === '') {
      if (queryParams.isViewFromLeft()) {
        viewFrom = "l"
        /* VIEW_FROM_LEFT */
        ;
      } else {
        viewFrom = "r"
        /* VIEW_FROM_RIGHT */
        ;
      }
    }

    obj["vf"
    /* VIEW_FROM */
    ] = viewFrom;
  } // For now, priority index is the default, so we only specify if it's some other index


  if (queryParams.index_ !== PRIORITY_INDEX) {
    obj["i"
    /* INDEX */
    ] = queryParams.index_.toString();
  }

  return obj;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var __referenceConstructor;
/**
 * A Query represents a filter to be applied to a firebase location.  This object purely represents the
 * query expression (and exposes our public API to build the query).  The actual query logic is in ViewBase.js.
 *
 * Since every Firebase reference is a query, Firebase inherits from this object.
 */


var Query =
/** @class */
function () {
  function Query(repo, path, queryParams_, orderByCalled_) {
    this.repo = repo;
    this.path = path;
    this.queryParams_ = queryParams_;
    this.orderByCalled_ = orderByCalled_;
  }

  Object.defineProperty(Query, "__referenceConstructor", {
    get: function get() {
      Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(__referenceConstructor, 'Reference.ts has not been loaded');
      return __referenceConstructor;
    },
    set: function set(val) {
      __referenceConstructor = val;
    },
    enumerable: false,
    configurable: true
  });
  /**
   * Validates start/end values for queries.
   */

  Query.validateQueryEndpoints_ = function (params) {
    var startNode = null;
    var endNode = null;

    if (params.hasStart()) {
      startNode = params.getIndexStartValue();
    }

    if (params.hasEnd()) {
      endNode = params.getIndexEndValue();
    }

    if (params.getIndex() === KEY_INDEX) {
      var tooManyArgsError = 'Query: When ordering by key, you may only pass one argument to ' + 'startAt(), endAt(), or equalTo().';
      var wrongArgTypeError = 'Query: When ordering by key, the argument passed to startAt(), startAfter(), ' + 'endAt(), endBefore(), or equalTo() must be a string.';

      if (params.hasStart()) {
        var startName = params.getIndexStartName();

        if (startName !== MIN_NAME) {
          throw new Error(tooManyArgsError);
        } else if (typeof startNode !== 'string') {
          throw new Error(wrongArgTypeError);
        }
      }

      if (params.hasEnd()) {
        var endName = params.getIndexEndName();

        if (endName !== MAX_NAME) {
          throw new Error(tooManyArgsError);
        } else if (typeof endNode !== 'string') {
          throw new Error(wrongArgTypeError);
        }
      }
    } else if (params.getIndex() === PRIORITY_INDEX) {
      if (startNode != null && !isValidPriority(startNode) || endNode != null && !isValidPriority(endNode)) {
        throw new Error('Query: When ordering by priority, the first argument passed to startAt(), ' + 'startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value ' + '(null, a number, or a string).');
      }
    } else {
      Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(params.getIndex() instanceof PathIndex || params.getIndex() === VALUE_INDEX, 'unknown index type.');

      if (startNode != null && typeof startNode === 'object' || endNode != null && typeof endNode === 'object') {
        throw new Error('Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or ' + 'equalTo() cannot be an object.');
      }
    }
  };
  /**
   * Validates that limit* has been called with the correct combination of parameters
   */


  Query.validateLimit_ = function (params) {
    if (params.hasStart() && params.hasEnd() && params.hasLimit() && !params.hasAnchoredLimit()) {
      throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use " + 'limitToFirst() or limitToLast() instead.');
    }
  };
  /**
   * Validates that no other order by call has been made
   */


  Query.prototype.validateNoPreviousOrderByCall_ = function (fnName) {
    if (this.orderByCalled_ === true) {
      throw new Error(fnName + ": You can't combine multiple orderBy calls.");
    }
  };

  Query.prototype.getQueryParams = function () {
    return this.queryParams_;
  };

  Query.prototype.getRef = function () {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateArgCount"])('Query.ref', 0, 0, arguments.length); // This is a slight hack. We cannot goog.require('fb.api.Firebase'), since Firebase requires fb.api.Query.
    // However, we will always export 'Firebase' to the global namespace, so it's guaranteed to exist by the time this
    // method gets called.

    return new Query.__referenceConstructor(this.repo, this.path);
  };

  Query.prototype.on = function (eventType, callback, cancelCallbackOrContext, context) {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateArgCount"])('Query.on', 2, 4, arguments.length);
    validateEventType('Query.on', 1, eventType, false);
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateCallback"])('Query.on', 2, callback, false);
    var ret = Query.getCancelAndContextArgs_('Query.on', cancelCallbackOrContext, context);

    if (eventType === 'value') {
      this.onValueEvent(callback, ret.cancel, ret.context);
    } else {
      var callbacks = {};
      callbacks[eventType] = callback;
      this.onChildEvent(callbacks, ret.cancel, ret.context);
    }

    return callback;
  };

  Query.prototype.onValueEvent = function (callback, cancelCallback, context) {
    var container = new ValueEventRegistration(callback, cancelCallback || null, context || null);
    this.repo.addEventCallbackForQuery(this, container);
  };

  Query.prototype.onChildEvent = function (callbacks, cancelCallback, context) {
    var container = new ChildEventRegistration(callbacks, cancelCallback, context);
    this.repo.addEventCallbackForQuery(this, container);
  };

  Query.prototype.off = function (eventType, callback, context) {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateArgCount"])('Query.off', 0, 3, arguments.length);
    validateEventType('Query.off', 1, eventType, true);
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateCallback"])('Query.off', 2, callback, true);
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateContextObject"])('Query.off', 3, context, true);
    var container = null;
    var callbacks = null;

    if (eventType === 'value') {
      var valueCallback = callback || null;
      container = new ValueEventRegistration(valueCallback, null, context || null);
    } else if (eventType) {
      if (callback) {
        callbacks = {};
        callbacks[eventType] = callback;
      }

      container = new ChildEventRegistration(callbacks, null, context || null);
    }

    this.repo.removeEventCallbackForQuery(this, container);
  };
  /**
   * Get the server-value for this query, or return a cached value if not connected.
   */


  Query.prototype.get = function () {
    return this.repo.getValue(this);
  };
  /**
   * Attaches a listener, waits for the first event, and then removes the listener
   */


  Query.prototype.once = function (eventType, userCallback, failureCallbackOrContext, context) {
    var _this = this;

    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateArgCount"])('Query.once', 1, 4, arguments.length);
    validateEventType('Query.once', 1, eventType, false);
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateCallback"])('Query.once', 2, userCallback, true);
    var ret = Query.getCancelAndContextArgs_('Query.once', failureCallbackOrContext, context); // TODO: Implement this more efficiently (in particular, use 'get' wire protocol for 'value' event)
    // TODO: consider actually wiring the callbacks into the promise. We cannot do this without a breaking change
    // because the API currently expects callbacks will be called synchronously if the data is cached, but this is
    // against the Promise specification.

    var firstCall = true;
    var deferred = new _firebase_util__WEBPACK_IMPORTED_MODULE_2__["Deferred"](); // A dummy error handler in case a user wasn't expecting promises

    deferred.promise.catch(function () {});

    var onceCallback = function onceCallback(snapshot) {
      // NOTE: Even though we unsubscribe, we may get called multiple times if a single action (e.g. set() with JSON)
      // triggers multiple events (e.g. child_added or child_changed).
      if (firstCall) {
        firstCall = false;

        _this.off(eventType, onceCallback);

        if (userCallback) {
          userCallback.bind(ret.context)(snapshot);
        }

        deferred.resolve(snapshot);
      }
    };

    this.on(eventType, onceCallback,
    /*cancel=*/
    function (err) {
      _this.off(eventType, onceCallback);

      if (ret.cancel) {
        ret.cancel.bind(ret.context)(err);
      }

      deferred.reject(err);
    });
    return deferred.promise;
  };
  /**
   * Set a limit and anchor it to the start of the window.
   */


  Query.prototype.limitToFirst = function (limit) {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateArgCount"])('Query.limitToFirst', 1, 1, arguments.length);

    if (typeof limit !== 'number' || Math.floor(limit) !== limit || limit <= 0) {
      throw new Error('Query.limitToFirst: First argument must be a positive integer.');
    }

    if (this.queryParams_.hasLimit()) {
      throw new Error('Query.limitToFirst: Limit was already set (by another call to limit, ' + 'limitToFirst, or limitToLast).');
    }

    return new Query(this.repo, this.path, queryParamsLimitToFirst(this.queryParams_, limit), this.orderByCalled_);
  };
  /**
   * Set a limit and anchor it to the end of the window.
   */


  Query.prototype.limitToLast = function (limit) {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateArgCount"])('Query.limitToLast', 1, 1, arguments.length);

    if (typeof limit !== 'number' || Math.floor(limit) !== limit || limit <= 0) {
      throw new Error('Query.limitToLast: First argument must be a positive integer.');
    }

    if (this.queryParams_.hasLimit()) {
      throw new Error('Query.limitToLast: Limit was already set (by another call to limit, ' + 'limitToFirst, or limitToLast).');
    }

    return new Query(this.repo, this.path, queryParamsLimitToLast(this.queryParams_, limit), this.orderByCalled_);
  };
  /**
   * Given a child path, return a new query ordered by the specified grandchild path.
   */


  Query.prototype.orderByChild = function (path) {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateArgCount"])('Query.orderByChild', 1, 1, arguments.length);

    if (path === '$key') {
      throw new Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');
    } else if (path === '$priority') {
      throw new Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');
    } else if (path === '$value') {
      throw new Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');
    }

    validatePathString('Query.orderByChild', 1, path, false);
    this.validateNoPreviousOrderByCall_('Query.orderByChild');
    var parsedPath = new Path(path);

    if (pathIsEmpty(parsedPath)) {
      throw new Error('Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead.');
    }

    var index = new PathIndex(parsedPath);
    var newParams = queryParamsOrderBy(this.queryParams_, index);
    Query.validateQueryEndpoints_(newParams);
    return new Query(this.repo, this.path, newParams,
    /*orderByCalled=*/
    true);
  };
  /**
   * Return a new query ordered by the KeyIndex
   */


  Query.prototype.orderByKey = function () {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateArgCount"])('Query.orderByKey', 0, 0, arguments.length);
    this.validateNoPreviousOrderByCall_('Query.orderByKey');
    var newParams = queryParamsOrderBy(this.queryParams_, KEY_INDEX);
    Query.validateQueryEndpoints_(newParams);
    return new Query(this.repo, this.path, newParams,
    /*orderByCalled=*/
    true);
  };
  /**
   * Return a new query ordered by the PriorityIndex
   */


  Query.prototype.orderByPriority = function () {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateArgCount"])('Query.orderByPriority', 0, 0, arguments.length);
    this.validateNoPreviousOrderByCall_('Query.orderByPriority');
    var newParams = queryParamsOrderBy(this.queryParams_, PRIORITY_INDEX);
    Query.validateQueryEndpoints_(newParams);
    return new Query(this.repo, this.path, newParams,
    /*orderByCalled=*/
    true);
  };
  /**
   * Return a new query ordered by the ValueIndex
   */


  Query.prototype.orderByValue = function () {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateArgCount"])('Query.orderByValue', 0, 0, arguments.length);
    this.validateNoPreviousOrderByCall_('Query.orderByValue');
    var newParams = queryParamsOrderBy(this.queryParams_, VALUE_INDEX);
    Query.validateQueryEndpoints_(newParams);
    return new Query(this.repo, this.path, newParams,
    /*orderByCalled=*/
    true);
  };

  Query.prototype.startAt = function (value, name) {
    if (value === void 0) {
      value = null;
    }

    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateArgCount"])('Query.startAt', 0, 2, arguments.length);
    validateFirebaseDataArg('Query.startAt', 1, value, this.path, true);
    validateKey('Query.startAt', 2, name, true);
    var newParams = queryParamsStartAt(this.queryParams_, value, name);
    Query.validateLimit_(newParams);
    Query.validateQueryEndpoints_(newParams);

    if (this.queryParams_.hasStart()) {
      throw new Error('Query.startAt: Starting point was already set (by another call to startAt ' + 'or equalTo).');
    } // Calling with no params tells us to start at the beginning.


    if (value === undefined) {
      value = null;
      name = null;
    }

    return new Query(this.repo, this.path, newParams, this.orderByCalled_);
  };

  Query.prototype.startAfter = function (value, name) {
    if (value === void 0) {
      value = null;
    }

    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateArgCount"])('Query.startAfter', 0, 2, arguments.length);
    validateFirebaseDataArg('Query.startAfter', 1, value, this.path, false);
    validateKey('Query.startAfter', 2, name, true);
    var newParams = queryParamsStartAfter(this.queryParams_, value, name);
    Query.validateLimit_(newParams);
    Query.validateQueryEndpoints_(newParams);

    if (this.queryParams_.hasStart()) {
      throw new Error('Query.startAfter: Starting point was already set (by another call to startAt, startAfter ' + 'or equalTo).');
    }

    return new Query(this.repo, this.path, newParams, this.orderByCalled_);
  };

  Query.prototype.endAt = function (value, name) {
    if (value === void 0) {
      value = null;
    }

    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateArgCount"])('Query.endAt', 0, 2, arguments.length);
    validateFirebaseDataArg('Query.endAt', 1, value, this.path, true);
    validateKey('Query.endAt', 2, name, true);
    var newParams = queryParamsEndAt(this.queryParams_, value, name);
    Query.validateLimit_(newParams);
    Query.validateQueryEndpoints_(newParams);

    if (this.queryParams_.hasEnd()) {
      throw new Error('Query.endAt: Ending point was already set (by another call to endAt, endBefore, or ' + 'equalTo).');
    }

    return new Query(this.repo, this.path, newParams, this.orderByCalled_);
  };

  Query.prototype.endBefore = function (value, name) {
    if (value === void 0) {
      value = null;
    }

    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateArgCount"])('Query.endBefore', 0, 2, arguments.length);
    validateFirebaseDataArg('Query.endBefore', 1, value, this.path, false);
    validateKey('Query.endBefore', 2, name, true);
    var newParams = queryParamsEndBefore(this.queryParams_, value, name);
    Query.validateLimit_(newParams);
    Query.validateQueryEndpoints_(newParams);

    if (this.queryParams_.hasEnd()) {
      throw new Error('Query.endBefore: Ending point was already set (by another call to endAt, endBefore, or ' + 'equalTo).');
    }

    return new Query(this.repo, this.path, newParams, this.orderByCalled_);
  };
  /**
   * Load the selection of children with exactly the specified value, and, optionally,
   * the specified name.
   */


  Query.prototype.equalTo = function (value, name) {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateArgCount"])('Query.equalTo', 1, 2, arguments.length);
    validateFirebaseDataArg('Query.equalTo', 1, value, this.path, false);
    validateKey('Query.equalTo', 2, name, true);

    if (this.queryParams_.hasStart()) {
      throw new Error('Query.equalTo: Starting point was already set (by another call to startAt/startAfter or ' + 'equalTo).');
    }

    if (this.queryParams_.hasEnd()) {
      throw new Error('Query.equalTo: Ending point was already set (by another call to endAt/endBefore or ' + 'equalTo).');
    }

    return this.startAt(value, name).endAt(value, name);
  };
  /**
   * @return URL for this location.
   */


  Query.prototype.toString = function () {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateArgCount"])('Query.toString', 0, 0, arguments.length);
    return this.repo.toString() + pathToUrlEncodedString(this.path);
  }; // Do not create public documentation. This is intended to make JSON serialization work but is otherwise unnecessary
  // for end-users.


  Query.prototype.toJSON = function () {
    // An optional spacer argument is unnecessary for a string.
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateArgCount"])('Query.toJSON', 0, 1, arguments.length);
    return this.toString();
  };
  /**
   * An object representation of the query parameters used by this Query.
   */


  Query.prototype.queryObject = function () {
    return queryParamsGetQueryObject(this.queryParams_);
  };

  Query.prototype.queryIdentifier = function () {
    var obj = this.queryObject();
    var id = ObjectToUniqueKey(obj);
    return id === '{}' ? 'default' : id;
  };
  /**
   * Return true if this query and the provided query are equivalent; otherwise, return false.
   */


  Query.prototype.isEqual = function (other) {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateArgCount"])('Query.isEqual', 1, 1, arguments.length);

    if (!(other instanceof Query)) {
      var error = 'Query.isEqual failed: First argument must be an instance of firebase.database.Query.';
      throw new Error(error);
    }

    var sameRepo = this.repo === other.repo;
    var samePath = pathEquals(this.path, other.path);
    var sameQueryIdentifier = this.queryIdentifier() === other.queryIdentifier();
    return sameRepo && samePath && sameQueryIdentifier;
  };
  /**
   * Helper used by .on and .once to extract the context and or cancel arguments.
   * @param fnName The function name (on or once)
   *
   */


  Query.getCancelAndContextArgs_ = function (fnName, cancelOrContext, context) {
    var ret = {
      cancel: null,
      context: null
    };

    if (cancelOrContext && context) {
      ret.cancel = cancelOrContext;
      Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateCallback"])(fnName, 3, ret.cancel, true);
      ret.context = context;
      Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateContextObject"])(fnName, 4, ret.context, true);
    } else if (cancelOrContext) {
      // we have either a cancel callback or a context.
      if (typeof cancelOrContext === 'object' && cancelOrContext !== null) {
        // it's a context!
        ret.context = cancelOrContext;
      } else if (typeof cancelOrContext === 'function') {
        ret.cancel = cancelOrContext;
      } else {
        throw new Error(Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["errorPrefix"])(fnName, 3, true) + ' must either be a cancel callback or a context object.');
      }
    }

    return ret;
  };

  Object.defineProperty(Query.prototype, "ref", {
    get: function get() {
      return this.getRef();
    },
    enumerable: false,
    configurable: true
  });
  return Query;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var ExistingValueProvider =
/** @class */
function () {
  function ExistingValueProvider(node_) {
    this.node_ = node_;
  }

  ExistingValueProvider.prototype.getImmediateChild = function (childName) {
    var child = this.node_.getImmediateChild(childName);
    return new ExistingValueProvider(child);
  };

  ExistingValueProvider.prototype.node = function () {
    return this.node_;
  };

  return ExistingValueProvider;
}();

var DeferredValueProvider =
/** @class */
function () {
  function DeferredValueProvider(syncTree, path) {
    this.syncTree_ = syncTree;
    this.path_ = path;
  }

  DeferredValueProvider.prototype.getImmediateChild = function (childName) {
    var childPath = pathChild(this.path_, childName);
    return new DeferredValueProvider(this.syncTree_, childPath);
  };

  DeferredValueProvider.prototype.node = function () {
    return this.syncTree_.calcCompleteEventCache(this.path_);
  };

  return DeferredValueProvider;
}();
/**
 * Generate placeholders for deferred values.
 */


var generateWithValues = function generateWithValues(values) {
  values = values || {};
  values['timestamp'] = values['timestamp'] || new Date().getTime();
  return values;
};
/**
 * Value to use when firing local events. When writing server values, fire
 * local events with an approximate value, otherwise return value as-is.
 */


var resolveDeferredLeafValue = function resolveDeferredLeafValue(value, existingVal, serverValues) {
  if (!value || typeof value !== 'object') {
    return value;
  }

  Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])('.sv' in value, 'Unexpected leaf node or priority contents');

  if (typeof value['.sv'] === 'string') {
    return resolveScalarDeferredValue(value['.sv'], existingVal, serverValues);
  } else if (typeof value['.sv'] === 'object') {
    return resolveComplexDeferredValue(value['.sv'], existingVal);
  } else {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(false, 'Unexpected server value: ' + JSON.stringify(value, null, 2));
  }
};

var resolveScalarDeferredValue = function resolveScalarDeferredValue(op, existing, serverValues) {
  switch (op) {
    case 'timestamp':
      return serverValues['timestamp'];

    default:
      Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(false, 'Unexpected server value: ' + op);
  }
};

var resolveComplexDeferredValue = function resolveComplexDeferredValue(op, existing, unused) {
  if (!op.hasOwnProperty('increment')) {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(false, 'Unexpected server value: ' + JSON.stringify(op, null, 2));
  }

  var delta = op['increment'];

  if (typeof delta !== 'number') {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(false, 'Unexpected increment value: ' + delta);
  }

  var existingNode = existing.node();
  Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(existingNode !== null && typeof existingNode !== 'undefined', 'Expected ChildrenNode.EMPTY_NODE for nulls'); // Incrementing a non-number sets the value to the incremented amount

  if (!existingNode.isLeafNode()) {
    return delta;
  }

  var leaf = existingNode;
  var existingVal = leaf.getValue();

  if (typeof existingVal !== 'number') {
    return delta;
  } // No need to do over/underflow arithmetic here because JS only handles floats under the covers


  return existingVal + delta;
};
/**
 * Recursively replace all deferred values and priorities in the tree with the
 * specified generated replacement values.
 * @param path path to which write is relative
 * @param node new data written at path
 * @param syncTree current data
 */


var resolveDeferredValueTree = function resolveDeferredValueTree(path, node, syncTree, serverValues) {
  return resolveDeferredValue(node, new DeferredValueProvider(syncTree, path), serverValues);
};
/**
 * Recursively replace all deferred values and priorities in the node with the
 * specified generated replacement values.  If there are no server values in the node,
 * it'll be returned as-is.
 */


var resolveDeferredValueSnapshot = function resolveDeferredValueSnapshot(node, existing, serverValues) {
  return resolveDeferredValue(node, new ExistingValueProvider(existing), serverValues);
};

function resolveDeferredValue(node, existingVal, serverValues) {
  var rawPri = node.getPriority().val();
  var priority = resolveDeferredLeafValue(rawPri, existingVal.getImmediateChild('.priority'), serverValues);
  var newNode;

  if (node.isLeafNode()) {
    var leafNode = node;
    var value = resolveDeferredLeafValue(leafNode.getValue(), existingVal, serverValues);

    if (value !== leafNode.getValue() || priority !== leafNode.getPriority().val()) {
      return new LeafNode(value, nodeFromJSON$1(priority));
    } else {
      return node;
    }
  } else {
    var childrenNode = node;
    newNode = childrenNode;

    if (priority !== childrenNode.getPriority().val()) {
      newNode = newNode.updatePriority(new LeafNode(priority));
    }

    childrenNode.forEachChild(PRIORITY_INDEX, function (childName, childNode) {
      var newChildNode = resolveDeferredValue(childNode, existingVal.getImmediateChild(childName), serverValues);

      if (newChildNode !== childNode) {
        newNode = newNode.updateImmediateChild(childName, newChildNode);
      }
    });
    return newNode;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Helper class to store a sparse set of snapshots.
 */


var SparseSnapshotTree =
/** @class */
function () {
  function SparseSnapshotTree() {
    this.value = null;
    this.children = new Map();
  }
  /**
   * Gets the node stored at the given path if one exists.
   *
   * @param path Path to look up snapshot for.
   * @return The retrieved node, or null.
   */


  SparseSnapshotTree.prototype.find = function (path) {
    if (this.value != null) {
      return this.value.getChild(path);
    } else if (!pathIsEmpty(path) && this.children.size > 0) {
      var childKey = pathGetFront(path);
      path = pathPopFront(path);

      if (this.children.has(childKey)) {
        var childTree = this.children.get(childKey);
        return childTree.find(path);
      } else {
        return null;
      }
    } else {
      return null;
    }
  };
  /**
   * Stores the given node at the specified path. If there is already a node
   * at a shallower path, it merges the new data into that snapshot node.
   *
   * @param path Path to look up snapshot for.
   * @param data The new data, or null.
   */


  SparseSnapshotTree.prototype.remember = function (path, data) {
    if (pathIsEmpty(path)) {
      this.value = data;
      this.children.clear();
    } else if (this.value !== null) {
      this.value = this.value.updateChild(path, data);
    } else {
      var childKey = pathGetFront(path);

      if (!this.children.has(childKey)) {
        this.children.set(childKey, new SparseSnapshotTree());
      }

      var child = this.children.get(childKey);
      path = pathPopFront(path);
      child.remember(path, data);
    }
  };
  /**
   * Purge the data at path from the cache.
   *
   * @param path Path to look up snapshot for.
   * @return True if this node should now be removed.
   */


  SparseSnapshotTree.prototype.forget = function (path) {
    if (pathIsEmpty(path)) {
      this.value = null;
      this.children.clear();
      return true;
    } else {
      if (this.value !== null) {
        if (this.value.isLeafNode()) {
          // We're trying to forget a node that doesn't exist
          return false;
        } else {
          var value = this.value;
          this.value = null;
          var self_1 = this;
          value.forEachChild(PRIORITY_INDEX, function (key, tree) {
            self_1.remember(new Path(key), tree);
          });
          return this.forget(path);
        }
      } else if (this.children.size > 0) {
        var childKey = pathGetFront(path);
        path = pathPopFront(path);

        if (this.children.has(childKey)) {
          var safeToRemove = this.children.get(childKey).forget(path);

          if (safeToRemove) {
            this.children.delete(childKey);
          }
        }

        return this.children.size === 0;
      } else {
        return true;
      }
    }
  };
  /**
   * Recursively iterates through all of the stored tree and calls the
   * callback on each one.
   *
   * @param prefixPath Path to look up node for.
   * @param func The function to invoke for each tree.
   */


  SparseSnapshotTree.prototype.forEachTree = function (prefixPath, func) {
    if (this.value !== null) {
      func(prefixPath, this.value);
    } else {
      this.forEachChild(function (key, tree) {
        var path = new Path(prefixPath.toString() + '/' + key);
        tree.forEachTree(path, func);
      });
    }
  };
  /**
   * Iterates through each immediate child and triggers the callback.
   *
   * @param func The function to invoke for each child.
   */


  SparseSnapshotTree.prototype.forEachChild = function (func) {
    this.children.forEach(function (tree, key) {
      func(key, tree);
    });
  };

  return SparseSnapshotTree;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 *
 * @enum
 */


var OperationType;

(function (OperationType) {
  OperationType[OperationType["OVERWRITE"] = 0] = "OVERWRITE";
  OperationType[OperationType["MERGE"] = 1] = "MERGE";
  OperationType[OperationType["ACK_USER_WRITE"] = 2] = "ACK_USER_WRITE";
  OperationType[OperationType["LISTEN_COMPLETE"] = 3] = "LISTEN_COMPLETE";
})(OperationType || (OperationType = {}));

function newOperationSourceUser() {
  return {
    fromUser: true,
    fromServer: false,
    queryId: null,
    tagged: false
  };
}

function newOperationSourceServer() {
  return {
    fromUser: false,
    fromServer: true,
    queryId: null,
    tagged: false
  };
}

function newOperationSourceServerTaggedQuery(queryId) {
  return {
    fromUser: false,
    fromServer: true,
    queryId: queryId,
    tagged: true
  };
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var AckUserWrite =
/** @class */
function () {
  /**
   * @param affectedTree A tree containing true for each affected path. Affected paths can't overlap.
   */
  function AckUserWrite(
  /** @inheritDoc */
  path,
  /** @inheritDoc */
  affectedTree,
  /** @inheritDoc */
  revert) {
    this.path = path;
    this.affectedTree = affectedTree;
    this.revert = revert;
    /** @inheritDoc */

    this.type = OperationType.ACK_USER_WRITE;
    /** @inheritDoc */

    this.source = newOperationSourceUser();
  }
  /**
   * @inheritDoc
   */


  AckUserWrite.prototype.operationForChild = function (childName) {
    if (!pathIsEmpty(this.path)) {
      Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(pathGetFront(this.path) === childName, 'operationForChild called for unrelated child.');
      return new AckUserWrite(pathPopFront(this.path), this.affectedTree, this.revert);
    } else if (this.affectedTree.value != null) {
      Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(this.affectedTree.children.isEmpty(), 'affectedTree should not have overlapping affected paths.'); // All child locations are affected as well; just return same operation.

      return this;
    } else {
      var childTree = this.affectedTree.subtree(new Path(childName));
      return new AckUserWrite(newEmptyPath(), childTree, this.revert);
    }
  };

  return AckUserWrite;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var emptyChildrenSingleton;
/**
 * Singleton empty children collection.
 *
 */

var EmptyChildren = function EmptyChildren() {
  if (!emptyChildrenSingleton) {
    emptyChildrenSingleton = new SortedMap(stringCompare);
  }

  return emptyChildrenSingleton;
};
/**
 * A tree with immutable elements.
 */


var ImmutableTree =
/** @class */
function () {
  function ImmutableTree(value, children) {
    if (children === void 0) {
      children = EmptyChildren();
    }

    this.value = value;
    this.children = children;
  }

  ImmutableTree.fromObject = function (obj) {
    var tree = new ImmutableTree(null);
    each(obj, function (childPath, childSnap) {
      tree = tree.set(new Path(childPath), childSnap);
    });
    return tree;
  };
  /**
   * True if the value is empty and there are no children
   */


  ImmutableTree.prototype.isEmpty = function () {
    return this.value === null && this.children.isEmpty();
  };
  /**
   * Given a path and predicate, return the first node and the path to that node
   * where the predicate returns true.
   *
   * TODO Do a perf test -- If we're creating a bunch of {path: value:} objects
   * on the way back out, it may be better to pass down a pathSoFar obj.
   *
   * @param relativePath The remainder of the path
   * @param predicate The predicate to satisfy to return a node
   */


  ImmutableTree.prototype.findRootMostMatchingPathAndValue = function (relativePath, predicate) {
    if (this.value != null && predicate(this.value)) {
      return {
        path: newEmptyPath(),
        value: this.value
      };
    } else {
      if (pathIsEmpty(relativePath)) {
        return null;
      } else {
        var front = pathGetFront(relativePath);
        var child = this.children.get(front);

        if (child !== null) {
          var childExistingPathAndValue = child.findRootMostMatchingPathAndValue(pathPopFront(relativePath), predicate);

          if (childExistingPathAndValue != null) {
            var fullPath = pathChild(new Path(front), childExistingPathAndValue.path);
            return {
              path: fullPath,
              value: childExistingPathAndValue.value
            };
          } else {
            return null;
          }
        } else {
          return null;
        }
      }
    }
  };
  /**
   * Find, if it exists, the shortest subpath of the given path that points a defined
   * value in the tree
   */


  ImmutableTree.prototype.findRootMostValueAndPath = function (relativePath) {
    return this.findRootMostMatchingPathAndValue(relativePath, function () {
      return true;
    });
  };
  /**
   * @return The subtree at the given path
   */


  ImmutableTree.prototype.subtree = function (relativePath) {
    if (pathIsEmpty(relativePath)) {
      return this;
    } else {
      var front = pathGetFront(relativePath);
      var childTree = this.children.get(front);

      if (childTree !== null) {
        return childTree.subtree(pathPopFront(relativePath));
      } else {
        return new ImmutableTree(null);
      }
    }
  };
  /**
   * Sets a value at the specified path.
   *
   * @param relativePath Path to set value at.
   * @param toSet Value to set.
   * @return Resulting tree.
   */


  ImmutableTree.prototype.set = function (relativePath, toSet) {
    if (pathIsEmpty(relativePath)) {
      return new ImmutableTree(toSet, this.children);
    } else {
      var front = pathGetFront(relativePath);
      var child = this.children.get(front) || new ImmutableTree(null);
      var newChild = child.set(pathPopFront(relativePath), toSet);
      var newChildren = this.children.insert(front, newChild);
      return new ImmutableTree(this.value, newChildren);
    }
  };
  /**
   * Removes the value at the specified path.
   *
   * @param relativePath Path to value to remove.
   * @return Resulting tree.
   */


  ImmutableTree.prototype.remove = function (relativePath) {
    if (pathIsEmpty(relativePath)) {
      if (this.children.isEmpty()) {
        return new ImmutableTree(null);
      } else {
        return new ImmutableTree(null, this.children);
      }
    } else {
      var front = pathGetFront(relativePath);
      var child = this.children.get(front);

      if (child) {
        var newChild = child.remove(pathPopFront(relativePath));
        var newChildren = void 0;

        if (newChild.isEmpty()) {
          newChildren = this.children.remove(front);
        } else {
          newChildren = this.children.insert(front, newChild);
        }

        if (this.value === null && newChildren.isEmpty()) {
          return new ImmutableTree(null);
        } else {
          return new ImmutableTree(this.value, newChildren);
        }
      } else {
        return this;
      }
    }
  };
  /**
   * Gets a value from the tree.
   *
   * @param relativePath Path to get value for.
   * @return Value at path, or null.
   */


  ImmutableTree.prototype.get = function (relativePath) {
    if (pathIsEmpty(relativePath)) {
      return this.value;
    } else {
      var front = pathGetFront(relativePath);
      var child = this.children.get(front);

      if (child) {
        return child.get(pathPopFront(relativePath));
      } else {
        return null;
      }
    }
  };
  /**
   * Replace the subtree at the specified path with the given new tree.
   *
   * @param relativePath Path to replace subtree for.
   * @param newTree New tree.
   * @return Resulting tree.
   */


  ImmutableTree.prototype.setTree = function (relativePath, newTree) {
    if (pathIsEmpty(relativePath)) {
      return newTree;
    } else {
      var front = pathGetFront(relativePath);
      var child = this.children.get(front) || new ImmutableTree(null);
      var newChild = child.setTree(pathPopFront(relativePath), newTree);
      var newChildren = void 0;

      if (newChild.isEmpty()) {
        newChildren = this.children.remove(front);
      } else {
        newChildren = this.children.insert(front, newChild);
      }

      return new ImmutableTree(this.value, newChildren);
    }
  };
  /**
   * Performs a depth first fold on this tree. Transforms a tree into a single
   * value, given a function that operates on the path to a node, an optional
   * current value, and a map of child names to folded subtrees
   */


  ImmutableTree.prototype.fold = function (fn) {
    return this.fold_(newEmptyPath(), fn);
  };
  /**
   * Recursive helper for public-facing fold() method
   */


  ImmutableTree.prototype.fold_ = function (pathSoFar, fn) {
    var accum = {};
    this.children.inorderTraversal(function (childKey, childTree) {
      accum[childKey] = childTree.fold_(pathChild(pathSoFar, childKey), fn);
    });
    return fn(pathSoFar, this.value, accum);
  };
  /**
   * Find the first matching value on the given path. Return the result of applying f to it.
   */


  ImmutableTree.prototype.findOnPath = function (path, f) {
    return this.findOnPath_(path, newEmptyPath(), f);
  };

  ImmutableTree.prototype.findOnPath_ = function (pathToFollow, pathSoFar, f) {
    var result = this.value ? f(pathSoFar, this.value) : false;

    if (result) {
      return result;
    } else {
      if (pathIsEmpty(pathToFollow)) {
        return null;
      } else {
        var front = pathGetFront(pathToFollow);
        var nextChild = this.children.get(front);

        if (nextChild) {
          return nextChild.findOnPath_(pathPopFront(pathToFollow), pathChild(pathSoFar, front), f);
        } else {
          return null;
        }
      }
    }
  };

  ImmutableTree.prototype.foreachOnPath = function (path, f) {
    return this.foreachOnPath_(path, newEmptyPath(), f);
  };

  ImmutableTree.prototype.foreachOnPath_ = function (pathToFollow, currentRelativePath, f) {
    if (pathIsEmpty(pathToFollow)) {
      return this;
    } else {
      if (this.value) {
        f(currentRelativePath, this.value);
      }

      var front = pathGetFront(pathToFollow);
      var nextChild = this.children.get(front);

      if (nextChild) {
        return nextChild.foreachOnPath_(pathPopFront(pathToFollow), pathChild(currentRelativePath, front), f);
      } else {
        return new ImmutableTree(null);
      }
    }
  };
  /**
   * Calls the given function for each node in the tree that has a value.
   *
   * @param f A function to be called with the path from the root of the tree to
   * a node, and the value at that node. Called in depth-first order.
   */


  ImmutableTree.prototype.foreach = function (f) {
    this.foreach_(newEmptyPath(), f);
  };

  ImmutableTree.prototype.foreach_ = function (currentRelativePath, f) {
    this.children.inorderTraversal(function (childName, childTree) {
      childTree.foreach_(pathChild(currentRelativePath, childName), f);
    });

    if (this.value) {
      f(currentRelativePath, this.value);
    }
  };

  ImmutableTree.prototype.foreachChild = function (f) {
    this.children.inorderTraversal(function (childName, childTree) {
      if (childTree.value) {
        f(childName, childTree.value);
      }
    });
  };

  return ImmutableTree;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var ListenComplete =
/** @class */
function () {
  function ListenComplete(source, path) {
    this.source = source;
    this.path = path;
    /** @inheritDoc */

    this.type = OperationType.LISTEN_COMPLETE;
  }

  ListenComplete.prototype.operationForChild = function (childName) {
    if (pathIsEmpty(this.path)) {
      return new ListenComplete(this.source, newEmptyPath());
    } else {
      return new ListenComplete(this.source, pathPopFront(this.path));
    }
  };

  return ListenComplete;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var Overwrite =
/** @class */
function () {
  function Overwrite(source, path, snap) {
    this.source = source;
    this.path = path;
    this.snap = snap;
    /** @inheritDoc */

    this.type = OperationType.OVERWRITE;
  }

  Overwrite.prototype.operationForChild = function (childName) {
    if (pathIsEmpty(this.path)) {
      return new Overwrite(this.source, newEmptyPath(), this.snap.getImmediateChild(childName));
    } else {
      return new Overwrite(this.source, pathPopFront(this.path), this.snap);
    }
  };

  return Overwrite;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var Merge =
/** @class */
function () {
  function Merge(
  /** @inheritDoc */
  source,
  /** @inheritDoc */
  path,
  /** @inheritDoc */
  children) {
    this.source = source;
    this.path = path;
    this.children = children;
    /** @inheritDoc */

    this.type = OperationType.MERGE;
  }
  /**
   * @inheritDoc
   */


  Merge.prototype.operationForChild = function (childName) {
    if (pathIsEmpty(this.path)) {
      var childTree = this.children.subtree(new Path(childName));

      if (childTree.isEmpty()) {
        // This child is unaffected
        return null;
      } else if (childTree.value) {
        // We have a snapshot for the child in question.  This becomes an overwrite of the child.
        return new Overwrite(this.source, newEmptyPath(), childTree.value);
      } else {
        // This is a merge at a deeper level
        return new Merge(this.source, newEmptyPath(), childTree);
      }
    } else {
      Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(pathGetFront(this.path) === childName, "Can't get a merge for a child not on the path of the operation");
      return new Merge(this.source, pathPopFront(this.path), this.children);
    }
  };
  /**
   * @inheritDoc
   */


  Merge.prototype.toString = function () {
    return 'Operation(' + this.path + ': ' + this.source.toString() + ' merge: ' + this.children.toString() + ')';
  };

  return Merge;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * A cache node only stores complete children. Additionally it holds a flag whether the node can be considered fully
 * initialized in the sense that we know at one point in time this represented a valid state of the world, e.g.
 * initialized with data from the server, or a complete overwrite by the client. The filtered flag also tracks
 * whether a node potentially had children removed due to a filter.
 */


var CacheNode =
/** @class */
function () {
  function CacheNode(node_, fullyInitialized_, filtered_) {
    this.node_ = node_;
    this.fullyInitialized_ = fullyInitialized_;
    this.filtered_ = filtered_;
  }
  /**
   * Returns whether this node was fully initialized with either server data or a complete overwrite by the client
   */


  CacheNode.prototype.isFullyInitialized = function () {
    return this.fullyInitialized_;
  };
  /**
   * Returns whether this node is potentially missing children due to a filter applied to the node
   */


  CacheNode.prototype.isFiltered = function () {
    return this.filtered_;
  };

  CacheNode.prototype.isCompleteForPath = function (path) {
    if (pathIsEmpty(path)) {
      return this.isFullyInitialized() && !this.filtered_;
    }

    var childKey = pathGetFront(path);
    return this.isCompleteForChild(childKey);
  };

  CacheNode.prototype.isCompleteForChild = function (key) {
    return this.isFullyInitialized() && !this.filtered_ || this.node_.hasChild(key);
  };

  CacheNode.prototype.getNode = function () {
    return this.node_;
  };

  return CacheNode;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Stores the data we have cached for a view.
 *
 * serverSnap is the cached server data, eventSnap is the cached event data (server data plus any local writes).
 */


var ViewCache =
/** @class */
function () {
  function ViewCache(eventCache_, serverCache_) {
    this.eventCache_ = eventCache_;
    this.serverCache_ = serverCache_;
  }

  ViewCache.prototype.updateEventSnap = function (eventSnap, complete, filtered) {
    return new ViewCache(new CacheNode(eventSnap, complete, filtered), this.serverCache_);
  };

  ViewCache.prototype.updateServerSnap = function (serverSnap, complete, filtered) {
    return new ViewCache(this.eventCache_, new CacheNode(serverSnap, complete, filtered));
  };

  ViewCache.prototype.getEventCache = function () {
    return this.eventCache_;
  };

  ViewCache.prototype.getCompleteEventSnap = function () {
    return this.eventCache_.isFullyInitialized() ? this.eventCache_.getNode() : null;
  };

  ViewCache.prototype.getServerCache = function () {
    return this.serverCache_;
  };

  ViewCache.prototype.getCompleteServerSnap = function () {
    return this.serverCache_.isFullyInitialized() ? this.serverCache_.getNode() : null;
  };

  return ViewCache;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var ChildChangeAccumulator =
/** @class */
function () {
  function ChildChangeAccumulator() {
    this.changeMap = new Map();
  }

  ChildChangeAccumulator.prototype.trackChildChange = function (change) {
    var type = change.type;
    var childKey = change.childName;
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(type === "child_added"
    /* CHILD_ADDED */
    || type === "child_changed"
    /* CHILD_CHANGED */
    || type === "child_removed"
    /* CHILD_REMOVED */
    , 'Only child changes supported for tracking');
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(childKey !== '.priority', 'Only non-priority child changes can be tracked.');
    var oldChange = this.changeMap.get(childKey);

    if (oldChange) {
      var oldType = oldChange.type;

      if (type === "child_added"
      /* CHILD_ADDED */
      && oldType === "child_removed"
      /* CHILD_REMOVED */
      ) {
          this.changeMap.set(childKey, changeChildChanged(childKey, change.snapshotNode, oldChange.snapshotNode));
        } else if (type === "child_removed"
      /* CHILD_REMOVED */
      && oldType === "child_added"
      /* CHILD_ADDED */
      ) {
          this.changeMap.delete(childKey);
        } else if (type === "child_removed"
      /* CHILD_REMOVED */
      && oldType === "child_changed"
      /* CHILD_CHANGED */
      ) {
          this.changeMap.set(childKey, changeChildRemoved(childKey, oldChange.oldSnap));
        } else if (type === "child_changed"
      /* CHILD_CHANGED */
      && oldType === "child_added"
      /* CHILD_ADDED */
      ) {
          this.changeMap.set(childKey, changeChildAdded(childKey, change.snapshotNode));
        } else if (type === "child_changed"
      /* CHILD_CHANGED */
      && oldType === "child_changed"
      /* CHILD_CHANGED */
      ) {
          this.changeMap.set(childKey, changeChildChanged(childKey, change.snapshotNode, oldChange.oldSnap));
        } else {
        throw Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assertionError"])('Illegal combination of changes: ' + change + ' occurred after ' + oldChange);
      }
    } else {
      this.changeMap.set(childKey, change);
    }
  };

  ChildChangeAccumulator.prototype.getChanges = function () {
    return Array.from(this.changeMap.values());
  };

  return ChildChangeAccumulator;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * An implementation of CompleteChildSource that never returns any additional children
 */
// eslint-disable-next-line @typescript-eslint/naming-convention


var NoCompleteChildSource_ =
/** @class */
function () {
  function NoCompleteChildSource_() {}
  /**
   * @inheritDoc
   */


  NoCompleteChildSource_.prototype.getCompleteChild = function (childKey) {
    return null;
  };
  /**
   * @inheritDoc
   */


  NoCompleteChildSource_.prototype.getChildAfterChild = function (index, child, reverse) {
    return null;
  };

  return NoCompleteChildSource_;
}();
/**
 * Singleton instance.
 */


var NO_COMPLETE_CHILD_SOURCE = new NoCompleteChildSource_();
/**
 * An implementation of CompleteChildSource that uses a WriteTree in addition to any other server data or
 * old event caches available to calculate complete children.
 */

var WriteTreeCompleteChildSource =
/** @class */
function () {
  function WriteTreeCompleteChildSource(writes_, viewCache_, optCompleteServerCache_) {
    if (optCompleteServerCache_ === void 0) {
      optCompleteServerCache_ = null;
    }

    this.writes_ = writes_;
    this.viewCache_ = viewCache_;
    this.optCompleteServerCache_ = optCompleteServerCache_;
  }
  /**
   * @inheritDoc
   */


  WriteTreeCompleteChildSource.prototype.getCompleteChild = function (childKey) {
    var node = this.viewCache_.getEventCache();

    if (node.isCompleteForChild(childKey)) {
      return node.getNode().getImmediateChild(childKey);
    } else {
      var serverNode = this.optCompleteServerCache_ != null ? new CacheNode(this.optCompleteServerCache_, true, false) : this.viewCache_.getServerCache();
      return this.writes_.calcCompleteChild(childKey, serverNode);
    }
  };
  /**
   * @inheritDoc
   */


  WriteTreeCompleteChildSource.prototype.getChildAfterChild = function (index, child, reverse) {
    var completeServerData = this.optCompleteServerCache_ != null ? this.optCompleteServerCache_ : this.viewCache_.getCompleteServerSnap();
    var nodes = this.writes_.calcIndexedSlice(completeServerData, child, 1, reverse, index);

    if (nodes.length === 0) {
      return null;
    } else {
      return nodes[0];
    }
  };

  return WriteTreeCompleteChildSource;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var ProcessorResult =
/** @class */
function () {
  function ProcessorResult(viewCache, changes) {
    this.viewCache = viewCache;
    this.changes = changes;
  }

  return ProcessorResult;
}();
/**
 */


var ViewProcessor =
/** @class */
function () {
  function ViewProcessor(filter_) {
    this.filter_ = filter_;
  }

  ViewProcessor.prototype.assertIndexed = function (viewCache) {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(viewCache.getEventCache().getNode().isIndexed(this.filter_.getIndex()), 'Event snap not indexed');
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(viewCache.getServerCache().getNode().isIndexed(this.filter_.getIndex()), 'Server snap not indexed');
  };

  ViewProcessor.prototype.applyOperation = function (oldViewCache, operation, writesCache, completeCache) {
    var accumulator = new ChildChangeAccumulator();
    var newViewCache, filterServerNode;

    if (operation.type === OperationType.OVERWRITE) {
      var overwrite = operation;

      if (overwrite.source.fromUser) {
        newViewCache = this.applyUserOverwrite_(oldViewCache, overwrite.path, overwrite.snap, writesCache, completeCache, accumulator);
      } else {
        Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(overwrite.source.fromServer, 'Unknown source.'); // We filter the node if it's a tagged update or the node has been previously filtered  and the
        // update is not at the root in which case it is ok (and necessary) to mark the node unfiltered
        // again

        filterServerNode = overwrite.source.tagged || oldViewCache.getServerCache().isFiltered() && !pathIsEmpty(overwrite.path);
        newViewCache = this.applyServerOverwrite_(oldViewCache, overwrite.path, overwrite.snap, writesCache, completeCache, filterServerNode, accumulator);
      }
    } else if (operation.type === OperationType.MERGE) {
      var merge = operation;

      if (merge.source.fromUser) {
        newViewCache = this.applyUserMerge_(oldViewCache, merge.path, merge.children, writesCache, completeCache, accumulator);
      } else {
        Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(merge.source.fromServer, 'Unknown source.'); // We filter the node if it's a tagged update or the node has been previously filtered

        filterServerNode = merge.source.tagged || oldViewCache.getServerCache().isFiltered();
        newViewCache = this.applyServerMerge_(oldViewCache, merge.path, merge.children, writesCache, completeCache, filterServerNode, accumulator);
      }
    } else if (operation.type === OperationType.ACK_USER_WRITE) {
      var ackUserWrite = operation;

      if (!ackUserWrite.revert) {
        newViewCache = this.ackUserWrite_(oldViewCache, ackUserWrite.path, ackUserWrite.affectedTree, writesCache, completeCache, accumulator);
      } else {
        newViewCache = this.revertUserWrite_(oldViewCache, ackUserWrite.path, writesCache, completeCache, accumulator);
      }
    } else if (operation.type === OperationType.LISTEN_COMPLETE) {
      newViewCache = this.listenComplete_(oldViewCache, operation.path, writesCache, accumulator);
    } else {
      throw Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assertionError"])('Unknown operation type: ' + operation.type);
    }

    var changes = accumulator.getChanges();
    ViewProcessor.maybeAddValueEvent_(oldViewCache, newViewCache, changes);
    return new ProcessorResult(newViewCache, changes);
  };

  ViewProcessor.maybeAddValueEvent_ = function (oldViewCache, newViewCache, accumulator) {
    var eventSnap = newViewCache.getEventCache();

    if (eventSnap.isFullyInitialized()) {
      var isLeafOrEmpty = eventSnap.getNode().isLeafNode() || eventSnap.getNode().isEmpty();
      var oldCompleteSnap = oldViewCache.getCompleteEventSnap();

      if (accumulator.length > 0 || !oldViewCache.getEventCache().isFullyInitialized() || isLeafOrEmpty && !eventSnap.getNode().equals(oldCompleteSnap) || !eventSnap.getNode().getPriority().equals(oldCompleteSnap.getPriority())) {
        accumulator.push(changeValue(newViewCache.getCompleteEventSnap()));
      }
    }
  };

  ViewProcessor.prototype.generateEventCacheAfterServerEvent_ = function (viewCache, changePath, writesCache, source, accumulator) {
    var oldEventSnap = viewCache.getEventCache();

    if (writesCache.shadowingWrite(changePath) != null) {
      // we have a shadowing write, ignore changes
      return viewCache;
    } else {
      var newEventCache = void 0,
          serverNode = void 0;

      if (pathIsEmpty(changePath)) {
        // TODO: figure out how this plays with "sliding ack windows"
        Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(viewCache.getServerCache().isFullyInitialized(), 'If change path is empty, we must have complete server data');

        if (viewCache.getServerCache().isFiltered()) {
          // We need to special case this, because we need to only apply writes to complete children, or
          // we might end up raising events for incomplete children. If the server data is filtered deep
          // writes cannot be guaranteed to be complete
          var serverCache = viewCache.getCompleteServerSnap();
          var completeChildren = serverCache instanceof ChildrenNode ? serverCache : ChildrenNode.EMPTY_NODE;
          var completeEventChildren = writesCache.calcCompleteEventChildren(completeChildren);
          newEventCache = this.filter_.updateFullNode(viewCache.getEventCache().getNode(), completeEventChildren, accumulator);
        } else {
          var completeNode = writesCache.calcCompleteEventCache(viewCache.getCompleteServerSnap());
          newEventCache = this.filter_.updateFullNode(viewCache.getEventCache().getNode(), completeNode, accumulator);
        }
      } else {
        var childKey = pathGetFront(changePath);

        if (childKey === '.priority') {
          Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(pathGetLength(changePath) === 1, "Can't have a priority with additional path components");
          var oldEventNode = oldEventSnap.getNode();
          serverNode = viewCache.getServerCache().getNode(); // we might have overwrites for this priority

          var updatedPriority = writesCache.calcEventCacheAfterServerOverwrite(changePath, oldEventNode, serverNode);

          if (updatedPriority != null) {
            newEventCache = this.filter_.updatePriority(oldEventNode, updatedPriority);
          } else {
            // priority didn't change, keep old node
            newEventCache = oldEventSnap.getNode();
          }
        } else {
          var childChangePath = pathPopFront(changePath); // update child

          var newEventChild = void 0;

          if (oldEventSnap.isCompleteForChild(childKey)) {
            serverNode = viewCache.getServerCache().getNode();
            var eventChildUpdate = writesCache.calcEventCacheAfterServerOverwrite(changePath, oldEventSnap.getNode(), serverNode);

            if (eventChildUpdate != null) {
              newEventChild = oldEventSnap.getNode().getImmediateChild(childKey).updateChild(childChangePath, eventChildUpdate);
            } else {
              // Nothing changed, just keep the old child
              newEventChild = oldEventSnap.getNode().getImmediateChild(childKey);
            }
          } else {
            newEventChild = writesCache.calcCompleteChild(childKey, viewCache.getServerCache());
          }

          if (newEventChild != null) {
            newEventCache = this.filter_.updateChild(oldEventSnap.getNode(), childKey, newEventChild, childChangePath, source, accumulator);
          } else {
            // no complete child available or no change
            newEventCache = oldEventSnap.getNode();
          }
        }
      }

      return viewCache.updateEventSnap(newEventCache, oldEventSnap.isFullyInitialized() || pathIsEmpty(changePath), this.filter_.filtersNodes());
    }
  };

  ViewProcessor.prototype.applyServerOverwrite_ = function (oldViewCache, changePath, changedSnap, writesCache, completeCache, filterServerNode, accumulator) {
    var oldServerSnap = oldViewCache.getServerCache();
    var newServerCache;
    var serverFilter = filterServerNode ? this.filter_ : this.filter_.getIndexedFilter();

    if (pathIsEmpty(changePath)) {
      newServerCache = serverFilter.updateFullNode(oldServerSnap.getNode(), changedSnap, null);
    } else if (serverFilter.filtersNodes() && !oldServerSnap.isFiltered()) {
      // we want to filter the server node, but we didn't filter the server node yet, so simulate a full update
      var newServerNode = oldServerSnap.getNode().updateChild(changePath, changedSnap);
      newServerCache = serverFilter.updateFullNode(oldServerSnap.getNode(), newServerNode, null);
    } else {
      var childKey = pathGetFront(changePath);

      if (!oldServerSnap.isCompleteForPath(changePath) && pathGetLength(changePath) > 1) {
        // We don't update incomplete nodes with updates intended for other listeners
        return oldViewCache;
      }

      var childChangePath = pathPopFront(changePath);
      var childNode = oldServerSnap.getNode().getImmediateChild(childKey);
      var newChildNode = childNode.updateChild(childChangePath, changedSnap);

      if (childKey === '.priority') {
        newServerCache = serverFilter.updatePriority(oldServerSnap.getNode(), newChildNode);
      } else {
        newServerCache = serverFilter.updateChild(oldServerSnap.getNode(), childKey, newChildNode, childChangePath, NO_COMPLETE_CHILD_SOURCE, null);
      }
    }

    var newViewCache = oldViewCache.updateServerSnap(newServerCache, oldServerSnap.isFullyInitialized() || pathIsEmpty(changePath), serverFilter.filtersNodes());
    var source = new WriteTreeCompleteChildSource(writesCache, newViewCache, completeCache);
    return this.generateEventCacheAfterServerEvent_(newViewCache, changePath, writesCache, source, accumulator);
  };

  ViewProcessor.prototype.applyUserOverwrite_ = function (oldViewCache, changePath, changedSnap, writesCache, completeCache, accumulator) {
    var oldEventSnap = oldViewCache.getEventCache();
    var newViewCache, newEventCache;
    var source = new WriteTreeCompleteChildSource(writesCache, oldViewCache, completeCache);

    if (pathIsEmpty(changePath)) {
      newEventCache = this.filter_.updateFullNode(oldViewCache.getEventCache().getNode(), changedSnap, accumulator);
      newViewCache = oldViewCache.updateEventSnap(newEventCache, true, this.filter_.filtersNodes());
    } else {
      var childKey = pathGetFront(changePath);

      if (childKey === '.priority') {
        newEventCache = this.filter_.updatePriority(oldViewCache.getEventCache().getNode(), changedSnap);
        newViewCache = oldViewCache.updateEventSnap(newEventCache, oldEventSnap.isFullyInitialized(), oldEventSnap.isFiltered());
      } else {
        var childChangePath = pathPopFront(changePath);
        var oldChild = oldEventSnap.getNode().getImmediateChild(childKey);
        var newChild = void 0;

        if (pathIsEmpty(childChangePath)) {
          // Child overwrite, we can replace the child
          newChild = changedSnap;
        } else {
          var childNode = source.getCompleteChild(childKey);

          if (childNode != null) {
            if (pathGetBack(childChangePath) === '.priority' && childNode.getChild(pathParent(childChangePath)).isEmpty()) {
              // This is a priority update on an empty node. If this node exists on the server, the
              // server will send down the priority in the update, so ignore for now
              newChild = childNode;
            } else {
              newChild = childNode.updateChild(childChangePath, changedSnap);
            }
          } else {
            // There is no complete child node available
            newChild = ChildrenNode.EMPTY_NODE;
          }
        }

        if (!oldChild.equals(newChild)) {
          var newEventSnap = this.filter_.updateChild(oldEventSnap.getNode(), childKey, newChild, childChangePath, source, accumulator);
          newViewCache = oldViewCache.updateEventSnap(newEventSnap, oldEventSnap.isFullyInitialized(), this.filter_.filtersNodes());
        } else {
          newViewCache = oldViewCache;
        }
      }
    }

    return newViewCache;
  };

  ViewProcessor.cacheHasChild_ = function (viewCache, childKey) {
    return viewCache.getEventCache().isCompleteForChild(childKey);
  };

  ViewProcessor.prototype.applyUserMerge_ = function (viewCache, path, changedChildren, writesCache, serverCache, accumulator) {
    var _this = this; // HACK: In the case of a limit query, there may be some changes that bump things out of the
    // window leaving room for new items.  It's important we process these changes first, so we
    // iterate the changes twice, first processing any that affect items currently in view.
    // TODO: I consider an item "in view" if cacheHasChild is true, which checks both the server
    // and event snap.  I'm not sure if this will result in edge cases when a child is in one but
    // not the other.


    var curViewCache = viewCache;
    changedChildren.foreach(function (relativePath, childNode) {
      var writePath = pathChild(path, relativePath);

      if (ViewProcessor.cacheHasChild_(viewCache, pathGetFront(writePath))) {
        curViewCache = _this.applyUserOverwrite_(curViewCache, writePath, childNode, writesCache, serverCache, accumulator);
      }
    });
    changedChildren.foreach(function (relativePath, childNode) {
      var writePath = pathChild(path, relativePath);

      if (!ViewProcessor.cacheHasChild_(viewCache, pathGetFront(writePath))) {
        curViewCache = _this.applyUserOverwrite_(curViewCache, writePath, childNode, writesCache, serverCache, accumulator);
      }
    });
    return curViewCache;
  };

  ViewProcessor.prototype.applyMerge_ = function (node, merge) {
    merge.foreach(function (relativePath, childNode) {
      node = node.updateChild(relativePath, childNode);
    });
    return node;
  };

  ViewProcessor.prototype.applyServerMerge_ = function (viewCache, path, changedChildren, writesCache, serverCache, filterServerNode, accumulator) {
    var _this = this; // If we don't have a cache yet, this merge was intended for a previously listen in the same location. Ignore it and
    // wait for the complete data update coming soon.


    if (viewCache.getServerCache().getNode().isEmpty() && !viewCache.getServerCache().isFullyInitialized()) {
      return viewCache;
    } // HACK: In the case of a limit query, there may be some changes that bump things out of the
    // window leaving room for new items.  It's important we process these changes first, so we
    // iterate the changes twice, first processing any that affect items currently in view.
    // TODO: I consider an item "in view" if cacheHasChild is true, which checks both the server
    // and event snap.  I'm not sure if this will result in edge cases when a child is in one but
    // not the other.


    var curViewCache = viewCache;
    var viewMergeTree;

    if (pathIsEmpty(path)) {
      viewMergeTree = changedChildren;
    } else {
      viewMergeTree = new ImmutableTree(null).setTree(path, changedChildren);
    }

    var serverNode = viewCache.getServerCache().getNode();
    viewMergeTree.children.inorderTraversal(function (childKey, childTree) {
      if (serverNode.hasChild(childKey)) {
        var serverChild = viewCache.getServerCache().getNode().getImmediateChild(childKey);

        var newChild = _this.applyMerge_(serverChild, childTree);

        curViewCache = _this.applyServerOverwrite_(curViewCache, new Path(childKey), newChild, writesCache, serverCache, filterServerNode, accumulator);
      }
    });
    viewMergeTree.children.inorderTraversal(function (childKey, childMergeTree) {
      var isUnknownDeepMerge = !viewCache.getServerCache().isCompleteForChild(childKey) && childMergeTree.value == null;

      if (!serverNode.hasChild(childKey) && !isUnknownDeepMerge) {
        var serverChild = viewCache.getServerCache().getNode().getImmediateChild(childKey);

        var newChild = _this.applyMerge_(serverChild, childMergeTree);

        curViewCache = _this.applyServerOverwrite_(curViewCache, new Path(childKey), newChild, writesCache, serverCache, filterServerNode, accumulator);
      }
    });
    return curViewCache;
  };

  ViewProcessor.prototype.ackUserWrite_ = function (viewCache, ackPath, affectedTree, writesCache, completeCache, accumulator) {
    if (writesCache.shadowingWrite(ackPath) != null) {
      return viewCache;
    } // Only filter server node if it is currently filtered


    var filterServerNode = viewCache.getServerCache().isFiltered(); // Essentially we'll just get our existing server cache for the affected paths and re-apply it as a server update
    // now that it won't be shadowed.

    var serverCache = viewCache.getServerCache();

    if (affectedTree.value != null) {
      // This is an overwrite.
      if (pathIsEmpty(ackPath) && serverCache.isFullyInitialized() || serverCache.isCompleteForPath(ackPath)) {
        return this.applyServerOverwrite_(viewCache, ackPath, serverCache.getNode().getChild(ackPath), writesCache, completeCache, filterServerNode, accumulator);
      } else if (pathIsEmpty(ackPath)) {
        // This is a goofy edge case where we are acking data at this location but don't have full data.  We
        // should just re-apply whatever we have in our cache as a merge.
        var changedChildren_1 = new ImmutableTree(null);
        serverCache.getNode().forEachChild(KEY_INDEX, function (name, node) {
          changedChildren_1 = changedChildren_1.set(new Path(name), node);
        });
        return this.applyServerMerge_(viewCache, ackPath, changedChildren_1, writesCache, completeCache, filterServerNode, accumulator);
      } else {
        return viewCache;
      }
    } else {
      // This is a merge.
      var changedChildren_2 = new ImmutableTree(null);
      affectedTree.foreach(function (mergePath, value) {
        var serverCachePath = pathChild(ackPath, mergePath);

        if (serverCache.isCompleteForPath(serverCachePath)) {
          changedChildren_2 = changedChildren_2.set(mergePath, serverCache.getNode().getChild(serverCachePath));
        }
      });
      return this.applyServerMerge_(viewCache, ackPath, changedChildren_2, writesCache, completeCache, filterServerNode, accumulator);
    }
  };

  ViewProcessor.prototype.listenComplete_ = function (viewCache, path, writesCache, accumulator) {
    var oldServerNode = viewCache.getServerCache();
    var newViewCache = viewCache.updateServerSnap(oldServerNode.getNode(), oldServerNode.isFullyInitialized() || pathIsEmpty(path), oldServerNode.isFiltered());
    return this.generateEventCacheAfterServerEvent_(newViewCache, path, writesCache, NO_COMPLETE_CHILD_SOURCE, accumulator);
  };

  ViewProcessor.prototype.revertUserWrite_ = function (viewCache, path, writesCache, completeServerCache, accumulator) {
    var complete;

    if (writesCache.shadowingWrite(path) != null) {
      return viewCache;
    } else {
      var source = new WriteTreeCompleteChildSource(writesCache, viewCache, completeServerCache);
      var oldEventCache = viewCache.getEventCache().getNode();
      var newEventCache = void 0;

      if (pathIsEmpty(path) || pathGetFront(path) === '.priority') {
        var newNode = void 0;

        if (viewCache.getServerCache().isFullyInitialized()) {
          newNode = writesCache.calcCompleteEventCache(viewCache.getCompleteServerSnap());
        } else {
          var serverChildren = viewCache.getServerCache().getNode();
          Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(serverChildren instanceof ChildrenNode, 'serverChildren would be complete if leaf node');
          newNode = writesCache.calcCompleteEventChildren(serverChildren);
        }

        newNode = newNode;
        newEventCache = this.filter_.updateFullNode(oldEventCache, newNode, accumulator);
      } else {
        var childKey = pathGetFront(path);
        var newChild = writesCache.calcCompleteChild(childKey, viewCache.getServerCache());

        if (newChild == null && viewCache.getServerCache().isCompleteForChild(childKey)) {
          newChild = oldEventCache.getImmediateChild(childKey);
        }

        if (newChild != null) {
          newEventCache = this.filter_.updateChild(oldEventCache, childKey, newChild, pathPopFront(path), source, accumulator);
        } else if (viewCache.getEventCache().getNode().hasChild(childKey)) {
          // No complete child available, delete the existing one, if any
          newEventCache = this.filter_.updateChild(oldEventCache, childKey, ChildrenNode.EMPTY_NODE, pathPopFront(path), source, accumulator);
        } else {
          newEventCache = oldEventCache;
        }

        if (newEventCache.isEmpty() && viewCache.getServerCache().isFullyInitialized()) {
          // We might have reverted all child writes. Maybe the old event was a leaf node
          complete = writesCache.calcCompleteEventCache(viewCache.getCompleteServerSnap());

          if (complete.isLeafNode()) {
            newEventCache = this.filter_.updateFullNode(newEventCache, complete, accumulator);
          }
        }
      }

      complete = viewCache.getServerCache().isFullyInitialized() || writesCache.shadowingWrite(newEmptyPath()) != null;
      return viewCache.updateEventSnap(newEventCache, complete, this.filter_.filtersNodes());
    }
  };

  return ViewProcessor;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * An EventGenerator is used to convert "raw" changes (Change) as computed by the
 * CacheDiffer into actual events (Event) that can be raised.  See generateEventsForChanges()
 * for details.
 *
 */


var EventGenerator =
/** @class */
function () {
  function EventGenerator(query_) {
    this.query_ = query_;
    this.index_ = this.query_.getQueryParams().getIndex();
  }

  return EventGenerator;
}();
/**
 * Given a set of raw changes (no moved events and prevName not specified yet), and a set of
 * EventRegistrations that should be notified of these changes, generate the actual events to be raised.
 *
 * Notes:
 *  - child_moved events will be synthesized at this time for any child_changed events that affect
 *    our index.
 *  - prevName will be calculated based on the index ordering.
 */


function eventGeneratorGenerateEventsForChanges(eventGenerator, changes, eventCache, eventRegistrations) {
  var events = [];
  var moves = [];
  changes.forEach(function (change) {
    if (change.type === "child_changed"
    /* CHILD_CHANGED */
    && eventGenerator.index_.indexedValueChanged(change.oldSnap, change.snapshotNode)) {
      moves.push(changeChildMoved(change.childName, change.snapshotNode));
    }
  });
  eventGeneratorGenerateEventsForType(eventGenerator, events, "child_removed"
  /* CHILD_REMOVED */
  , changes, eventRegistrations, eventCache);
  eventGeneratorGenerateEventsForType(eventGenerator, events, "child_added"
  /* CHILD_ADDED */
  , changes, eventRegistrations, eventCache);
  eventGeneratorGenerateEventsForType(eventGenerator, events, "child_moved"
  /* CHILD_MOVED */
  , moves, eventRegistrations, eventCache);
  eventGeneratorGenerateEventsForType(eventGenerator, events, "child_changed"
  /* CHILD_CHANGED */
  , changes, eventRegistrations, eventCache);
  eventGeneratorGenerateEventsForType(eventGenerator, events, "value"
  /* VALUE */
  , changes, eventRegistrations, eventCache);
  return events;
}
/**
 * Given changes of a single change type, generate the corresponding events.
 */


function eventGeneratorGenerateEventsForType(eventGenerator, events, eventType, changes, registrations, eventCache) {
  var filteredChanges = changes.filter(function (change) {
    return change.type === eventType;
  });
  filteredChanges.sort(function (a, b) {
    return eventGeneratorCompareChanges(eventGenerator, a, b);
  });
  filteredChanges.forEach(function (change) {
    var materializedChange = eventGeneratorMaterializeSingleChange(eventGenerator, change, eventCache);
    registrations.forEach(function (registration) {
      if (registration.respondsTo(change.type)) {
        events.push(registration.createEvent(materializedChange, eventGenerator.query_));
      }
    });
  });
}

function eventGeneratorMaterializeSingleChange(eventGenerator, change, eventCache) {
  if (change.type === 'value' || change.type === 'child_removed') {
    return change;
  } else {
    change.prevName = eventCache.getPredecessorChildName(change.childName, change.snapshotNode, eventGenerator.index_);
    return change;
  }
}

function eventGeneratorCompareChanges(eventGenerator, a, b) {
  if (a.childName == null || b.childName == null) {
    throw Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assertionError"])('Should only compare child_ events.');
  }

  var aWrapped = new NamedNode(a.childName, a.snapshotNode);
  var bWrapped = new NamedNode(b.childName, b.snapshotNode);
  return eventGenerator.index_.compare(aWrapped, bWrapped);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * A view represents a specific location and query that has 1 or more event registrations.
 *
 * It does several things:
 *  - Maintains the list of event registrations for this location/query.
 *  - Maintains a cache of the data visible for this location/query.
 *  - Applies new operations (via applyOperation), updates the cache, and based on the event
 *    registrations returns the set of events to be raised.
 */


var View =
/** @class */
function () {
  function View(query_, initialViewCache) {
    this.query_ = query_;
    this.eventRegistrations_ = [];
    var params = this.query_.getQueryParams();
    var indexFilter = new IndexedFilter(params.getIndex());
    var filter = queryParamsGetNodeFilter(params);
    this.processor_ = new ViewProcessor(filter);
    var initialServerCache = initialViewCache.getServerCache();
    var initialEventCache = initialViewCache.getEventCache(); // Don't filter server node with other filter than index, wait for tagged listen

    var serverSnap = indexFilter.updateFullNode(ChildrenNode.EMPTY_NODE, initialServerCache.getNode(), null);
    var eventSnap = filter.updateFullNode(ChildrenNode.EMPTY_NODE, initialEventCache.getNode(), null);
    var newServerCache = new CacheNode(serverSnap, initialServerCache.isFullyInitialized(), indexFilter.filtersNodes());
    var newEventCache = new CacheNode(eventSnap, initialEventCache.isFullyInitialized(), filter.filtersNodes());
    this.viewCache_ = new ViewCache(newEventCache, newServerCache);
    this.eventGenerator_ = new EventGenerator(this.query_);
  }

  View.prototype.getQuery = function () {
    return this.query_;
  };

  View.prototype.getServerCache = function () {
    return this.viewCache_.getServerCache().getNode();
  };

  View.prototype.getCompleteNode = function () {
    return this.viewCache_.getCompleteEventSnap();
  };

  View.prototype.getCompleteServerCache = function (path) {
    var cache = this.viewCache_.getCompleteServerSnap();

    if (cache) {
      // If this isn't a "loadsAllData" view, then cache isn't actually a complete cache and
      // we need to see if it contains the child we're interested in.
      if (this.query_.getQueryParams().loadsAllData() || !pathIsEmpty(path) && !cache.getImmediateChild(pathGetFront(path)).isEmpty()) {
        return cache.getChild(path);
      }
    }

    return null;
  };

  View.prototype.isEmpty = function () {
    return this.eventRegistrations_.length === 0;
  };

  View.prototype.addEventRegistration = function (eventRegistration) {
    this.eventRegistrations_.push(eventRegistration);
  };
  /**
   * @param eventRegistration If null, remove all callbacks.
   * @param cancelError If a cancelError is provided, appropriate cancel events will be returned.
   * @return Cancel events, if cancelError was provided.
   */


  View.prototype.removeEventRegistration = function (eventRegistration, cancelError) {
    var cancelEvents = [];

    if (cancelError) {
      Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(eventRegistration == null, 'A cancel should cancel all event registrations.');
      var path_1 = this.query_.path;
      this.eventRegistrations_.forEach(function (registration) {
        var maybeEvent = registration.createCancelEvent(cancelError, path_1);

        if (maybeEvent) {
          cancelEvents.push(maybeEvent);
        }
      });
    }

    if (eventRegistration) {
      var remaining = [];

      for (var i = 0; i < this.eventRegistrations_.length; ++i) {
        var existing = this.eventRegistrations_[i];

        if (!existing.matches(eventRegistration)) {
          remaining.push(existing);
        } else if (eventRegistration.hasAnyCallback()) {
          // We're removing just this one
          remaining = remaining.concat(this.eventRegistrations_.slice(i + 1));
          break;
        }
      }

      this.eventRegistrations_ = remaining;
    } else {
      this.eventRegistrations_ = [];
    }

    return cancelEvents;
  };
  /**
   * Applies the given Operation, updates our cache, and returns the appropriate events.
   */


  View.prototype.applyOperation = function (operation, writesCache, completeServerCache) {
    if (operation.type === OperationType.MERGE && operation.source.queryId !== null) {
      Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(this.viewCache_.getCompleteServerSnap(), 'We should always have a full cache before handling merges');
      Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(this.viewCache_.getCompleteEventSnap(), 'Missing event cache, even though we have a server cache');
    }

    var oldViewCache = this.viewCache_;
    var result = this.processor_.applyOperation(oldViewCache, operation, writesCache, completeServerCache);
    this.processor_.assertIndexed(result.viewCache);
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(result.viewCache.getServerCache().isFullyInitialized() || !oldViewCache.getServerCache().isFullyInitialized(), 'Once a server snap is complete, it should never go back');
    this.viewCache_ = result.viewCache;
    return this.generateEventsForChanges_(result.changes, result.viewCache.getEventCache().getNode(), null);
  };

  View.prototype.getInitialEvents = function (registration) {
    var eventSnap = this.viewCache_.getEventCache();
    var initialChanges = [];

    if (!eventSnap.getNode().isLeafNode()) {
      var eventNode = eventSnap.getNode();
      eventNode.forEachChild(PRIORITY_INDEX, function (key, childNode) {
        initialChanges.push(changeChildAdded(key, childNode));
      });
    }

    if (eventSnap.isFullyInitialized()) {
      initialChanges.push(changeValue(eventSnap.getNode()));
    }

    return this.generateEventsForChanges_(initialChanges, eventSnap.getNode(), registration);
  };

  View.prototype.generateEventsForChanges_ = function (changes, eventCache, eventRegistration) {
    var registrations = eventRegistration ? [eventRegistration] : this.eventRegistrations_;
    return eventGeneratorGenerateEventsForChanges(this.eventGenerator_, changes, eventCache, registrations);
  };

  return View;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var __referenceConstructor$1;
/**
 * SyncPoint represents a single location in a SyncTree with 1 or more event registrations, meaning we need to
 * maintain 1 or more Views at this location to cache server data and raise appropriate events for server changes
 * and user writes (set, transaction, update).
 *
 * It's responsible for:
 *  - Maintaining the set of 1 or more views necessary at this location (a SyncPoint with 0 views should be removed).
 *  - Proxying user / server operations to the views as appropriate (i.e. applyServerOverwrite,
 *    applyUserOverwrite, etc.)
 */


var SyncPoint =
/** @class */
function () {
  function SyncPoint() {
    /**
     * The Views being tracked at this location in the tree, stored as a map where the key is a
     * queryId and the value is the View for that query.
     *
     * NOTE: This list will be quite small (usually 1, but perhaps 2 or 3; any more is an odd use case).
     */
    this.views = new Map();
  }

  Object.defineProperty(SyncPoint, "__referenceConstructor", {
    get: function get() {
      Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(__referenceConstructor$1, 'Reference.ts has not been loaded');
      return __referenceConstructor$1;
    },
    set: function set(val) {
      Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(!__referenceConstructor$1, '__referenceConstructor has already been defined');
      __referenceConstructor$1 = val;
    },
    enumerable: false,
    configurable: true
  });

  SyncPoint.prototype.isEmpty = function () {
    return this.views.size === 0;
  };

  SyncPoint.prototype.applyOperation = function (operation, writesCache, optCompleteServerCache) {
    var e_1, _a;

    var queryId = operation.source.queryId;

    if (queryId !== null) {
      var view = this.views.get(queryId);
      Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(view != null, 'SyncTree gave us an op for an invalid query.');
      return view.applyOperation(operation, writesCache, optCompleteServerCache);
    } else {
      var events = [];

      try {
        for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(this.views.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
          var view = _c.value;
          events = events.concat(view.applyOperation(operation, writesCache, optCompleteServerCache));
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        } finally {
          if (e_1) throw e_1.error;
        }
      }

      return events;
    }
  };
  /**
   * Get a view for the specified query.
   *
   * @param query The query to return a view for
   * @param writesCache
   * @param serverCache
   * @param serverCacheComplete
   * @return Events to raise.
   */


  SyncPoint.prototype.getView = function (query, writesCache, serverCache, serverCacheComplete) {
    var queryId = query.queryIdentifier();
    var view = this.views.get(queryId);

    if (!view) {
      // TODO: make writesCache take flag for complete server node
      var eventCache = writesCache.calcCompleteEventCache(serverCacheComplete ? serverCache : null);
      var eventCacheComplete = false;

      if (eventCache) {
        eventCacheComplete = true;
      } else if (serverCache instanceof ChildrenNode) {
        eventCache = writesCache.calcCompleteEventChildren(serverCache);
        eventCacheComplete = false;
      } else {
        eventCache = ChildrenNode.EMPTY_NODE;
        eventCacheComplete = false;
      }

      var viewCache = new ViewCache(new CacheNode(eventCache, eventCacheComplete, false), new CacheNode(serverCache, serverCacheComplete, false));
      return new View(query, viewCache);
    }

    return view;
  };
  /**
   * Add an event callback for the specified query.
   *
   * @param query
   * @param eventRegistration
   * @param writesCache
   * @param serverCache Complete server cache, if we have it.
   * @param serverCacheComplete
   * @return Events to raise.
   */


  SyncPoint.prototype.addEventRegistration = function (query, eventRegistration, writesCache, serverCache, serverCacheComplete) {
    var view = this.getView(query, writesCache, serverCache, serverCacheComplete);

    if (!this.views.has(query.queryIdentifier())) {
      this.views.set(query.queryIdentifier(), view);
    } // This is guaranteed to exist now, we just created anything that was missing


    view.addEventRegistration(eventRegistration);
    return view.getInitialEvents(eventRegistration);
  };
  /**
   * Remove event callback(s).  Return cancelEvents if a cancelError is specified.
   *
   * If query is the default query, we'll check all views for the specified eventRegistration.
   * If eventRegistration is null, we'll remove all callbacks for the specified view(s).
   *
   * @param eventRegistration If null, remove all callbacks.
   * @param cancelError If a cancelError is provided, appropriate cancel events will be returned.
   * @return removed queries and any cancel events
   */


  SyncPoint.prototype.removeEventRegistration = function (query, eventRegistration, cancelError) {
    var e_2, _a;

    var queryId = query.queryIdentifier();
    var removed = [];
    var cancelEvents = [];
    var hadCompleteView = this.hasCompleteView();

    if (queryId === 'default') {
      try {
        // When you do ref.off(...), we search all views for the registration to remove.
        for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(this.views.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
          var _d = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__read"])(_c.value, 2),
              viewQueryId = _d[0],
              view = _d[1];

          cancelEvents = cancelEvents.concat(view.removeEventRegistration(eventRegistration, cancelError));

          if (view.isEmpty()) {
            this.views.delete(viewQueryId); // We'll deal with complete views later.

            if (!view.getQuery().getQueryParams().loadsAllData()) {
              removed.push(view.getQuery());
            }
          }
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        } finally {
          if (e_2) throw e_2.error;
        }
      }
    } else {
      // remove the callback from the specific view.
      var view = this.views.get(queryId);

      if (view) {
        cancelEvents = cancelEvents.concat(view.removeEventRegistration(eventRegistration, cancelError));

        if (view.isEmpty()) {
          this.views.delete(queryId); // We'll deal with complete views later.

          if (!view.getQuery().getQueryParams().loadsAllData()) {
            removed.push(view.getQuery());
          }
        }
      }
    }

    if (hadCompleteView && !this.hasCompleteView()) {
      // We removed our last complete view.
      removed.push(new SyncPoint.__referenceConstructor(query.repo, query.path));
    }

    return {
      removed: removed,
      events: cancelEvents
    };
  };

  SyncPoint.prototype.getQueryViews = function () {
    var e_3, _a;

    var result = [];

    try {
      for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(this.views.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
        var view = _c.value;

        if (!view.getQuery().getQueryParams().loadsAllData()) {
          result.push(view);
        }
      }
    } catch (e_3_1) {
      e_3 = {
        error: e_3_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_3) throw e_3.error;
      }
    }

    return result;
  };
  /**
   * @param path The path to the desired complete snapshot
   * @return A complete cache, if it exists
   */


  SyncPoint.prototype.getCompleteServerCache = function (path) {
    var e_4, _a;

    var serverCache = null;

    try {
      for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(this.views.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
        var view = _c.value;
        serverCache = serverCache || view.getCompleteServerCache(path);
      }
    } catch (e_4_1) {
      e_4 = {
        error: e_4_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_4) throw e_4.error;
      }
    }

    return serverCache;
  };

  SyncPoint.prototype.viewForQuery = function (query) {
    var params = query.getQueryParams();

    if (params.loadsAllData()) {
      return this.getCompleteView();
    } else {
      var queryId = query.queryIdentifier();
      return this.views.get(queryId);
    }
  };

  SyncPoint.prototype.viewExistsForQuery = function (query) {
    return this.viewForQuery(query) != null;
  };

  SyncPoint.prototype.hasCompleteView = function () {
    return this.getCompleteView() != null;
  };

  SyncPoint.prototype.getCompleteView = function () {
    var e_5, _a;

    try {
      for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(this.views.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
        var view = _c.value;

        if (view.getQuery().getQueryParams().loadsAllData()) {
          return view;
        }
      }
    } catch (e_5_1) {
      e_5 = {
        error: e_5_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_5) throw e_5.error;
      }
    }

    return null;
  };

  return SyncPoint;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * This class holds a collection of writes that can be applied to nodes in unison. It abstracts away the logic with
 * dealing with priority writes and multiple nested writes. At any given path there is only allowed to be one write
 * modifying that path. Any write to an existing path or shadowing an existing path will modify that existing write
 * to reflect the write added.
 */


var CompoundWrite =
/** @class */
function () {
  function CompoundWrite(writeTree_) {
    this.writeTree_ = writeTree_;
  }

  CompoundWrite.empty = function () {
    return new CompoundWrite(new ImmutableTree(null));
  };

  return CompoundWrite;
}();

function compoundWriteAddWrite(compoundWrite, path, node) {
  if (pathIsEmpty(path)) {
    return new CompoundWrite(new ImmutableTree(node));
  } else {
    var rootmost = compoundWrite.writeTree_.findRootMostValueAndPath(path);

    if (rootmost != null) {
      var rootMostPath = rootmost.path;
      var value = rootmost.value;
      var relativePath = newRelativePath(rootMostPath, path);
      value = value.updateChild(relativePath, node);
      return new CompoundWrite(compoundWrite.writeTree_.set(rootMostPath, value));
    } else {
      var subtree = new ImmutableTree(node);
      var newWriteTree = compoundWrite.writeTree_.setTree(path, subtree);
      return new CompoundWrite(newWriteTree);
    }
  }
}

function compoundWriteAddWrites(compoundWrite, path, updates) {
  var newWrite = compoundWrite;
  each(updates, function (childKey, node) {
    newWrite = compoundWriteAddWrite(newWrite, pathChild(path, childKey), node);
  });
  return newWrite;
}
/**
 * Will remove a write at the given path and deeper paths. This will <em>not</em> modify a write at a higher
 * location, which must be removed by calling this method with that path.
 *
 * @param compoundWrite The CompoundWrite to remove.
 * @param path The path at which a write and all deeper writes should be removed
 * @return The new CompoundWrite with the removed path
 */


function compoundWriteRemoveWrite(compoundWrite, path) {
  if (pathIsEmpty(path)) {
    return CompoundWrite.empty();
  } else {
    var newWriteTree = compoundWrite.writeTree_.setTree(path, new ImmutableTree(null));
    return new CompoundWrite(newWriteTree);
  }
}
/**
 * Returns whether this CompoundWrite will fully overwrite a node at a given location and can therefore be
 * considered "complete".
 *
 * @param compoundWrite The CompoundWrite to check.
 * @param path The path to check for
 * @return Whether there is a complete write at that path
 */


function compoundWriteHasCompleteWrite(compoundWrite, path) {
  return compoundWriteGetCompleteNode(compoundWrite, path) != null;
}
/**
 * Returns a node for a path if and only if the node is a "complete" overwrite at that path. This will not aggregate
 * writes from deeper paths, but will return child nodes from a more shallow path.
 *
 * @param compoundWrite The CompoundWrite to get the node from.
 * @param path The path to get a complete write
 * @return The node if complete at that path, or null otherwise.
 */


function compoundWriteGetCompleteNode(compoundWrite, path) {
  var rootmost = compoundWrite.writeTree_.findRootMostValueAndPath(path);

  if (rootmost != null) {
    return compoundWrite.writeTree_.get(rootmost.path).getChild(newRelativePath(rootmost.path, path));
  } else {
    return null;
  }
}
/**
 * Returns all children that are guaranteed to be a complete overwrite.
 *
 * @param compoundWrite The CompoundWrite to get children from.
 * @return A list of all complete children.
 */


function compoundWriteGetCompleteChildren(compoundWrite) {
  var children = [];
  var node = compoundWrite.writeTree_.value;

  if (node != null) {
    // If it's a leaf node, it has no children; so nothing to do.
    if (!node.isLeafNode()) {
      node.forEachChild(PRIORITY_INDEX, function (childName, childNode) {
        children.push(new NamedNode(childName, childNode));
      });
    }
  } else {
    compoundWrite.writeTree_.children.inorderTraversal(function (childName, childTree) {
      if (childTree.value != null) {
        children.push(new NamedNode(childName, childTree.value));
      }
    });
  }

  return children;
}

function compoundWriteChildCompoundWrite(compoundWrite, path) {
  if (pathIsEmpty(path)) {
    return compoundWrite;
  } else {
    var shadowingNode = compoundWriteGetCompleteNode(compoundWrite, path);

    if (shadowingNode != null) {
      return new CompoundWrite(new ImmutableTree(shadowingNode));
    } else {
      return new CompoundWrite(compoundWrite.writeTree_.subtree(path));
    }
  }
}
/**
 * Returns true if this CompoundWrite is empty and therefore does not modify any nodes.
 * @return Whether this CompoundWrite is empty
 */


function compoundWriteIsEmpty(compoundWrite) {
  return compoundWrite.writeTree_.isEmpty();
}
/**
 * Applies this CompoundWrite to a node. The node is returned with all writes from this CompoundWrite applied to the
 * node
 * @param node The node to apply this CompoundWrite to
 * @return The node with all writes applied
 */


function compoundWriteApply(compoundWrite, node) {
  return applySubtreeWrite(newEmptyPath(), compoundWrite.writeTree_, node);
}

function applySubtreeWrite(relativePath, writeTree, node) {
  if (writeTree.value != null) {
    // Since there a write is always a leaf, we're done here
    return node.updateChild(relativePath, writeTree.value);
  } else {
    var priorityWrite_1 = null;
    writeTree.children.inorderTraversal(function (childKey, childTree) {
      if (childKey === '.priority') {
        // Apply priorities at the end so we don't update priorities for either empty nodes or forget
        // to apply priorities to empty nodes that are later filled
        Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(childTree.value !== null, 'Priority writes must always be leaf nodes');
        priorityWrite_1 = childTree.value;
      } else {
        node = applySubtreeWrite(pathChild(relativePath, childKey), childTree, node);
      }
    }); // If there was a priority write, we only apply it if the node is not empty

    if (!node.getChild(relativePath).isEmpty() && priorityWrite_1 !== null) {
      node = node.updateChild(pathChild(relativePath, '.priority'), priorityWrite_1);
    }

    return node;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * WriteTree tracks all pending user-initiated writes and has methods to calculate the result of merging them
 * with underlying server data (to create "event cache" data).  Pending writes are added with addOverwrite()
 * and addMerge(), and removed with removeWrite().
 */


var WriteTree =
/** @class */
function () {
  function WriteTree() {
    /**
     * A tree tracking the result of applying all visible writes.  This does not include transactions with
     * applyLocally=false or writes that are completely shadowed by other writes.
     */
    this.visibleWrites_ = CompoundWrite.empty();
    /**
     * A list of all pending writes, regardless of visibility and shadowed-ness.  Used to calculate arbitrary
     * sets of the changed data, such as hidden writes (from transactions) or changes with certain writes excluded (also
     * used by transactions).
     */

    this.allWrites_ = [];
    this.lastWriteId_ = -1;
  }
  /**
   * Create a new WriteTreeRef for the given path. For use with a new sync point at the given path.
   *
   */


  WriteTree.prototype.childWrites = function (path) {
    return new WriteTreeRef(path, this);
  };
  /**
   * Record a new overwrite from user code.
   *
   * @param visible This is set to false by some transactions. It should be excluded from event caches
   */


  WriteTree.prototype.addOverwrite = function (path, snap, writeId, visible) {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(writeId > this.lastWriteId_, 'Stacking an older write on top of newer ones');

    if (visible === undefined) {
      visible = true;
    }

    this.allWrites_.push({
      path: path,
      snap: snap,
      writeId: writeId,
      visible: visible
    });

    if (visible) {
      this.visibleWrites_ = compoundWriteAddWrite(this.visibleWrites_, path, snap);
    }

    this.lastWriteId_ = writeId;
  };
  /**
   * Record a new merge from user code.
   */


  WriteTree.prototype.addMerge = function (path, changedChildren, writeId) {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(writeId > this.lastWriteId_, 'Stacking an older merge on top of newer ones');
    this.allWrites_.push({
      path: path,
      children: changedChildren,
      writeId: writeId,
      visible: true
    });
    this.visibleWrites_ = compoundWriteAddWrites(this.visibleWrites_, path, changedChildren);
    this.lastWriteId_ = writeId;
  };

  WriteTree.prototype.getWrite = function (writeId) {
    for (var i = 0; i < this.allWrites_.length; i++) {
      var record = this.allWrites_[i];

      if (record.writeId === writeId) {
        return record;
      }
    }

    return null;
  };
  /**
   * Remove a write (either an overwrite or merge) that has been successfully acknowledge by the server. Recalculates
   * the tree if necessary.  We return true if it may have been visible, meaning views need to reevaluate.
   *
   * @return true if the write may have been visible (meaning we'll need to reevaluate / raise
   * events as a result).
   */


  WriteTree.prototype.removeWrite = function (writeId) {
    // Note: disabling this check. It could be a transaction that preempted another transaction, and thus was applied
    // out of order.
    //const validClear = revert || this.allWrites_.length === 0 || writeId <= this.allWrites_[0].writeId;
    //assert(validClear, "Either we don't have this write, or it's the first one in the queue");
    var _this = this;

    var idx = this.allWrites_.findIndex(function (s) {
      return s.writeId === writeId;
    });
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(idx >= 0, 'removeWrite called with nonexistent writeId.');
    var writeToRemove = this.allWrites_[idx];
    this.allWrites_.splice(idx, 1);
    var removedWriteWasVisible = writeToRemove.visible;
    var removedWriteOverlapsWithOtherWrites = false;
    var i = this.allWrites_.length - 1;

    while (removedWriteWasVisible && i >= 0) {
      var currentWrite = this.allWrites_[i];

      if (currentWrite.visible) {
        if (i >= idx && this.recordContainsPath_(currentWrite, writeToRemove.path)) {
          // The removed write was completely shadowed by a subsequent write.
          removedWriteWasVisible = false;
        } else if (pathContains(writeToRemove.path, currentWrite.path)) {
          // Either we're covering some writes or they're covering part of us (depending on which came first).
          removedWriteOverlapsWithOtherWrites = true;
        }
      }

      i--;
    }

    if (!removedWriteWasVisible) {
      return false;
    } else if (removedWriteOverlapsWithOtherWrites) {
      // There's some shadowing going on. Just rebuild the visible writes from scratch.
      this.resetTree_();
      return true;
    } else {
      // There's no shadowing.  We can safely just remove the write(s) from visibleWrites.
      if (writeToRemove.snap) {
        this.visibleWrites_ = compoundWriteRemoveWrite(this.visibleWrites_, writeToRemove.path);
      } else {
        var children = writeToRemove.children;
        each(children, function (childName) {
          _this.visibleWrites_ = compoundWriteRemoveWrite(_this.visibleWrites_, pathChild(writeToRemove.path, childName));
        });
      }

      return true;
    }
  };
  /**
   * Return a complete snapshot for the given path if there's visible write data at that path, else null.
   * No server data is considered.
   *
   */


  WriteTree.prototype.getCompleteWriteData = function (path) {
    return compoundWriteGetCompleteNode(this.visibleWrites_, path);
  };
  /**
   * Given optional, underlying server data, and an optional set of constraints (exclude some sets, include hidden
   * writes), attempt to calculate a complete snapshot for the given path
   *
   * @param writeIdsToExclude An optional set to be excluded
   * @param includeHiddenWrites Defaults to false, whether or not to layer on writes with visible set to false
   */


  WriteTree.prototype.calcCompleteEventCache = function (treePath, completeServerCache, writeIdsToExclude, includeHiddenWrites) {
    if (!writeIdsToExclude && !includeHiddenWrites) {
      var shadowingNode = compoundWriteGetCompleteNode(this.visibleWrites_, treePath);

      if (shadowingNode != null) {
        return shadowingNode;
      } else {
        var subMerge = compoundWriteChildCompoundWrite(this.visibleWrites_, treePath);

        if (compoundWriteIsEmpty(subMerge)) {
          return completeServerCache;
        } else if (completeServerCache == null && !compoundWriteHasCompleteWrite(subMerge, newEmptyPath())) {
          // We wouldn't have a complete snapshot, since there's no underlying data and no complete shadow
          return null;
        } else {
          var layeredCache = completeServerCache || ChildrenNode.EMPTY_NODE;
          return compoundWriteApply(subMerge, layeredCache);
        }
      }
    } else {
      var merge = compoundWriteChildCompoundWrite(this.visibleWrites_, treePath);

      if (!includeHiddenWrites && compoundWriteIsEmpty(merge)) {
        return completeServerCache;
      } else {
        // If the server cache is null, and we don't have a complete cache, we need to return null
        if (!includeHiddenWrites && completeServerCache == null && !compoundWriteHasCompleteWrite(merge, newEmptyPath())) {
          return null;
        } else {
          var filter = function filter(write) {
            return (write.visible || includeHiddenWrites) && (!writeIdsToExclude || !~writeIdsToExclude.indexOf(write.writeId)) && (pathContains(write.path, treePath) || pathContains(treePath, write.path));
          };

          var mergeAtPath = WriteTree.layerTree_(this.allWrites_, filter, treePath);
          var layeredCache = completeServerCache || ChildrenNode.EMPTY_NODE;
          return compoundWriteApply(mergeAtPath, layeredCache);
        }
      }
    }
  };
  /**
   * With optional, underlying server data, attempt to return a children node of children that we have complete data for.
   * Used when creating new views, to pre-fill their complete event children snapshot.
   */


  WriteTree.prototype.calcCompleteEventChildren = function (treePath, completeServerChildren) {
    var completeChildren = ChildrenNode.EMPTY_NODE;
    var topLevelSet = compoundWriteGetCompleteNode(this.visibleWrites_, treePath);

    if (topLevelSet) {
      if (!topLevelSet.isLeafNode()) {
        // we're shadowing everything. Return the children.
        topLevelSet.forEachChild(PRIORITY_INDEX, function (childName, childSnap) {
          completeChildren = completeChildren.updateImmediateChild(childName, childSnap);
        });
      }

      return completeChildren;
    } else if (completeServerChildren) {
      // Layer any children we have on top of this
      // We know we don't have a top-level set, so just enumerate existing children
      var merge_1 = compoundWriteChildCompoundWrite(this.visibleWrites_, treePath);
      completeServerChildren.forEachChild(PRIORITY_INDEX, function (childName, childNode) {
        var node = compoundWriteApply(compoundWriteChildCompoundWrite(merge_1, new Path(childName)), childNode);
        completeChildren = completeChildren.updateImmediateChild(childName, node);
      }); // Add any complete children we have from the set

      compoundWriteGetCompleteChildren(merge_1).forEach(function (namedNode) {
        completeChildren = completeChildren.updateImmediateChild(namedNode.name, namedNode.node);
      });
      return completeChildren;
    } else {
      // We don't have anything to layer on top of. Layer on any children we have
      // Note that we can return an empty snap if we have a defined delete
      var merge = compoundWriteChildCompoundWrite(this.visibleWrites_, treePath);
      compoundWriteGetCompleteChildren(merge).forEach(function (namedNode) {
        completeChildren = completeChildren.updateImmediateChild(namedNode.name, namedNode.node);
      });
      return completeChildren;
    }
  };
  /**
   * Given that the underlying server data has updated, determine what, if anything, needs to be
   * applied to the event cache.
   *
   * Possibilities:
   *
   * 1. No writes are shadowing. Events should be raised, the snap to be applied comes from the server data
   *
   * 2. Some write is completely shadowing. No events to be raised
   *
   * 3. Is partially shadowed. Events
   *
   * Either existingEventSnap or existingServerSnap must exist
   */


  WriteTree.prototype.calcEventCacheAfterServerOverwrite = function (treePath, childPath, existingEventSnap, existingServerSnap) {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(existingEventSnap || existingServerSnap, 'Either existingEventSnap or existingServerSnap must exist');
    var path = pathChild(treePath, childPath);

    if (compoundWriteHasCompleteWrite(this.visibleWrites_, path)) {
      // At this point we can probably guarantee that we're in case 2, meaning no events
      // May need to check visibility while doing the findRootMostValueAndPath call
      return null;
    } else {
      // No complete shadowing. We're either partially shadowing or not shadowing at all.
      var childMerge = compoundWriteChildCompoundWrite(this.visibleWrites_, path);

      if (compoundWriteIsEmpty(childMerge)) {
        // We're not shadowing at all. Case 1
        return existingServerSnap.getChild(childPath);
      } else {
        // This could be more efficient if the serverNode + updates doesn't change the eventSnap
        // However this is tricky to find out, since user updates don't necessary change the server
        // snap, e.g. priority updates on empty nodes, or deep deletes. Another special case is if the server
        // adds nodes, but doesn't change any existing writes. It is therefore not enough to
        // only check if the updates change the serverNode.
        // Maybe check if the merge tree contains these special cases and only do a full overwrite in that case?
        return compoundWriteApply(childMerge, existingServerSnap.getChild(childPath));
      }
    }
  };
  /**
   * Returns a complete child for a given server snap after applying all user writes or null if there is no
   * complete child for this ChildKey.
   */


  WriteTree.prototype.calcCompleteChild = function (treePath, childKey, existingServerSnap) {
    var path = pathChild(treePath, childKey);
    var shadowingNode = compoundWriteGetCompleteNode(this.visibleWrites_, path);

    if (shadowingNode != null) {
      return shadowingNode;
    } else {
      if (existingServerSnap.isCompleteForChild(childKey)) {
        var childMerge = compoundWriteChildCompoundWrite(this.visibleWrites_, path);
        return compoundWriteApply(childMerge, existingServerSnap.getNode().getImmediateChild(childKey));
      } else {
        return null;
      }
    }
  };
  /**
   * Returns a node if there is a complete overwrite for this path. More specifically, if there is a write at
   * a higher path, this will return the child of that write relative to the write and this path.
   * Returns null if there is no write at this path.
   */


  WriteTree.prototype.shadowingWrite = function (path) {
    return compoundWriteGetCompleteNode(this.visibleWrites_, path);
  };
  /**
   * This method is used when processing child remove events on a query. If we can, we pull in children that were outside
   * the window, but may now be in the window.
   */


  WriteTree.prototype.calcIndexedSlice = function (treePath, completeServerData, startPost, count, reverse, index) {
    var toIterate;
    var merge = compoundWriteChildCompoundWrite(this.visibleWrites_, treePath);
    var shadowingNode = compoundWriteGetCompleteNode(merge, newEmptyPath());

    if (shadowingNode != null) {
      toIterate = shadowingNode;
    } else if (completeServerData != null) {
      toIterate = compoundWriteApply(merge, completeServerData);
    } else {
      // no children to iterate on
      return [];
    }

    toIterate = toIterate.withIndex(index);

    if (!toIterate.isEmpty() && !toIterate.isLeafNode()) {
      var nodes = [];
      var cmp = index.getCompare();
      var iter = reverse ? toIterate.getReverseIteratorFrom(startPost, index) : toIterate.getIteratorFrom(startPost, index);
      var next = iter.getNext();

      while (next && nodes.length < count) {
        if (cmp(next, startPost) !== 0) {
          nodes.push(next);
        }

        next = iter.getNext();
      }

      return nodes;
    } else {
      return [];
    }
  };

  WriteTree.prototype.recordContainsPath_ = function (writeRecord, path) {
    if (writeRecord.snap) {
      return pathContains(writeRecord.path, path);
    } else {
      for (var childName in writeRecord.children) {
        if (writeRecord.children.hasOwnProperty(childName) && pathContains(pathChild(writeRecord.path, childName), path)) {
          return true;
        }
      }

      return false;
    }
  };
  /**
   * Re-layer the writes and merges into a tree so we can efficiently calculate event snapshots
   */


  WriteTree.prototype.resetTree_ = function () {
    this.visibleWrites_ = WriteTree.layerTree_(this.allWrites_, WriteTree.DefaultFilter_, newEmptyPath());

    if (this.allWrites_.length > 0) {
      this.lastWriteId_ = this.allWrites_[this.allWrites_.length - 1].writeId;
    } else {
      this.lastWriteId_ = -1;
    }
  };
  /**
   * The default filter used when constructing the tree. Keep everything that's visible.
   */


  WriteTree.DefaultFilter_ = function (write) {
    return write.visible;
  };
  /**
   * Static method. Given an array of WriteRecords, a filter for which ones to include, and a path, construct the tree of
   * event data at that path.
   */


  WriteTree.layerTree_ = function (writes, filter, treeRoot) {
    var compoundWrite = CompoundWrite.empty();

    for (var i = 0; i < writes.length; ++i) {
      var write = writes[i]; // Theory, a later set will either:
      // a) abort a relevant transaction, so no need to worry about excluding it from calculating that transaction
      // b) not be relevant to a transaction (separate branch), so again will not affect the data for that transaction

      if (filter(write)) {
        var writePath = write.path;
        var relativePath = void 0;

        if (write.snap) {
          if (pathContains(treeRoot, writePath)) {
            relativePath = newRelativePath(treeRoot, writePath);
            compoundWrite = compoundWriteAddWrite(compoundWrite, relativePath, write.snap);
          } else if (pathContains(writePath, treeRoot)) {
            relativePath = newRelativePath(writePath, treeRoot);
            compoundWrite = compoundWriteAddWrite(compoundWrite, newEmptyPath(), write.snap.getChild(relativePath));
          } else ;
        } else if (write.children) {
          if (pathContains(treeRoot, writePath)) {
            relativePath = newRelativePath(treeRoot, writePath);
            compoundWrite = compoundWriteAddWrites(compoundWrite, relativePath, write.children);
          } else if (pathContains(writePath, treeRoot)) {
            relativePath = newRelativePath(writePath, treeRoot);

            if (pathIsEmpty(relativePath)) {
              compoundWrite = compoundWriteAddWrites(compoundWrite, newEmptyPath(), write.children);
            } else {
              var child = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["safeGet"])(write.children, pathGetFront(relativePath));

              if (child) {
                // There exists a child in this node that matches the root path
                var deepNode = child.getChild(pathPopFront(relativePath));
                compoundWrite = compoundWriteAddWrite(compoundWrite, newEmptyPath(), deepNode);
              }
            }
          } else ;
        } else {
          throw Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assertionError"])('WriteRecord should have .snap or .children');
        }
      }
    }

    return compoundWrite;
  };

  return WriteTree;
}();
/**
 * A WriteTreeRef wraps a WriteTree and a path, for convenient access to a particular subtree.  All of the methods
 * just proxy to the underlying WriteTree.
 *
 */


var WriteTreeRef =
/** @class */
function () {
  function WriteTreeRef(path, writeTree) {
    this.treePath_ = path;
    this.writeTree_ = writeTree;
  }
  /**
   * If possible, returns a complete event cache, using the underlying server data if possible. In addition, can be used
   * to get a cache that includes hidden writes, and excludes arbitrary writes. Note that customizing the returned node
   * can lead to a more expensive calculation.
   *
   * @param writeIdsToExclude Optional writes to exclude.
   * @param includeHiddenWrites Defaults to false, whether or not to layer on writes with visible set to false
   */


  WriteTreeRef.prototype.calcCompleteEventCache = function (completeServerCache, writeIdsToExclude, includeHiddenWrites) {
    return this.writeTree_.calcCompleteEventCache(this.treePath_, completeServerCache, writeIdsToExclude, includeHiddenWrites);
  };
  /**
   * If possible, returns a children node containing all of the complete children we have data for. The returned data is a
   * mix of the given server data and write data.
   *
   */


  WriteTreeRef.prototype.calcCompleteEventChildren = function (completeServerChildren) {
    return this.writeTree_.calcCompleteEventChildren(this.treePath_, completeServerChildren);
  };
  /**
   * Given that either the underlying server data has updated or the outstanding writes have updated, determine what,
   * if anything, needs to be applied to the event cache.
   *
   * Possibilities:
   *
   * 1. No writes are shadowing. Events should be raised, the snap to be applied comes from the server data
   *
   * 2. Some write is completely shadowing. No events to be raised
   *
   * 3. Is partially shadowed. Events should be raised
   *
   * Either existingEventSnap or existingServerSnap must exist, this is validated via an assert
   *
   *
   */


  WriteTreeRef.prototype.calcEventCacheAfterServerOverwrite = function (path, existingEventSnap, existingServerSnap) {
    return this.writeTree_.calcEventCacheAfterServerOverwrite(this.treePath_, path, existingEventSnap, existingServerSnap);
  };
  /**
   * Returns a node if there is a complete overwrite for this path. More specifically, if there is a write at
   * a higher path, this will return the child of that write relative to the write and this path.
   * Returns null if there is no write at this path.
   *
   */


  WriteTreeRef.prototype.shadowingWrite = function (path) {
    return this.writeTree_.shadowingWrite(pathChild(this.treePath_, path));
  };
  /**
   * This method is used when processing child remove events on a query. If we can, we pull in children that were outside
   * the window, but may now be in the window
   */


  WriteTreeRef.prototype.calcIndexedSlice = function (completeServerData, startPost, count, reverse, index) {
    return this.writeTree_.calcIndexedSlice(this.treePath_, completeServerData, startPost, count, reverse, index);
  };
  /**
   * Returns a complete child for a given server snap after applying all user writes or null if there is no
   * complete child for this ChildKey.
   */


  WriteTreeRef.prototype.calcCompleteChild = function (childKey, existingServerCache) {
    return this.writeTree_.calcCompleteChild(this.treePath_, childKey, existingServerCache);
  };
  /**
   * Return a WriteTreeRef for a child.
   */


  WriteTreeRef.prototype.child = function (childName) {
    return new WriteTreeRef(pathChild(this.treePath_, childName), this.writeTree_);
  };

  return WriteTreeRef;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * SyncTree is the central class for managing event callback registration, data caching, views
 * (query processing), and event generation.  There are typically two SyncTree instances for
 * each Repo, one for the normal Firebase data, and one for the .info data.
 *
 * It has a number of responsibilities, including:
 *  - Tracking all user event callbacks (registered via addEventRegistration() and removeEventRegistration()).
 *  - Applying and caching data changes for user set(), transaction(), and update() calls
 *    (applyUserOverwrite(), applyUserMerge()).
 *  - Applying and caching data changes for server data changes (applyServerOverwrite(),
 *    applyServerMerge()).
 *  - Generating user-facing events for server and user changes (all of the apply* methods
 *    return the set of events that need to be raised as a result).
 *  - Maintaining the appropriate set of server listens to ensure we are always subscribed
 *    to the correct set of paths and queries to satisfy the current set of user event
 *    callbacks (listens are started/stopped using the provided listenProvider).
 *
 * NOTE: Although SyncTree tracks event callbacks and calculates events to raise, the actual
 * events are returned to the caller rather than raised synchronously.
 *
 */


var SyncTree =
/** @class */
function () {
  /**
   * @param listenProvider_ Used by SyncTree to start / stop listening
   *   to server data.
   */
  function SyncTree(listenProvider_) {
    this.listenProvider_ = listenProvider_;
    /**
     * Tree of SyncPoints.  There's a SyncPoint at any location that has 1 or more views.
     */

    this.syncPointTree_ = new ImmutableTree(null);
    /**
     * A tree of all pending user writes (user-initiated set()'s, transaction()'s, update()'s, etc.).
     */

    this.pendingWriteTree_ = new WriteTree();
    this.tagToQueryMap = new Map();
    this.queryToTagMap = new Map();
  }
  /**
   * Apply the data changes for a user-generated set() or transaction() call.
   *
   * @return Events to raise.
   */


  SyncTree.prototype.applyUserOverwrite = function (path, newData, writeId, visible) {
    // Record pending write.
    this.pendingWriteTree_.addOverwrite(path, newData, writeId, visible);

    if (!visible) {
      return [];
    } else {
      return this.applyOperationToSyncPoints_(new Overwrite(newOperationSourceUser(), path, newData));
    }
  };
  /**
   * Apply the data from a user-generated update() call
   *
   * @return Events to raise.
   */


  SyncTree.prototype.applyUserMerge = function (path, changedChildren, writeId) {
    // Record pending merge.
    this.pendingWriteTree_.addMerge(path, changedChildren, writeId);
    var changeTree = ImmutableTree.fromObject(changedChildren);
    return this.applyOperationToSyncPoints_(new Merge(newOperationSourceUser(), path, changeTree));
  };
  /**
   * Acknowledge a pending user write that was previously registered with applyUserOverwrite() or applyUserMerge().
   *
   * @param revert True if the given write failed and needs to be reverted
   * @return Events to raise.
   */


  SyncTree.prototype.ackUserWrite = function (writeId, revert) {
    if (revert === void 0) {
      revert = false;
    }

    var write = this.pendingWriteTree_.getWrite(writeId);
    var needToReevaluate = this.pendingWriteTree_.removeWrite(writeId);

    if (!needToReevaluate) {
      return [];
    } else {
      var affectedTree_1 = new ImmutableTree(null);

      if (write.snap != null) {
        // overwrite
        affectedTree_1 = affectedTree_1.set(newEmptyPath(), true);
      } else {
        each(write.children, function (pathString) {
          affectedTree_1 = affectedTree_1.set(new Path(pathString), true);
        });
      }

      return this.applyOperationToSyncPoints_(new AckUserWrite(write.path, affectedTree_1, revert));
    }
  };
  /**
   * Apply new server data for the specified path..
   *
   * @return Events to raise.
   */


  SyncTree.prototype.applyServerOverwrite = function (path, newData) {
    return this.applyOperationToSyncPoints_(new Overwrite(newOperationSourceServer(), path, newData));
  };
  /**
   * Apply new server data to be merged in at the specified path.
   *
   * @return Events to raise.
   */


  SyncTree.prototype.applyServerMerge = function (path, changedChildren) {
    var changeTree = ImmutableTree.fromObject(changedChildren);
    return this.applyOperationToSyncPoints_(new Merge(newOperationSourceServer(), path, changeTree));
  };
  /**
   * Apply a listen complete for a query
   *
   * @return Events to raise.
   */


  SyncTree.prototype.applyListenComplete = function (path) {
    return this.applyOperationToSyncPoints_(new ListenComplete(newOperationSourceServer(), path));
  };
  /**
   * Apply new server data for the specified tagged query.
   *
   * @return Events to raise.
   */


  SyncTree.prototype.applyTaggedQueryOverwrite = function (path, snap, tag) {
    var queryKey = this.queryKeyForTag_(tag);

    if (queryKey != null) {
      var r = SyncTree.parseQueryKey_(queryKey);
      var queryPath = r.path,
          queryId = r.queryId;
      var relativePath = newRelativePath(queryPath, path);
      var op = new Overwrite(newOperationSourceServerTaggedQuery(queryId), relativePath, snap);
      return this.applyTaggedOperation_(queryPath, op);
    } else {
      // Query must have been removed already
      return [];
    }
  };
  /**
   * Apply server data to be merged in for the specified tagged query.
   *
   * @return Events to raise.
   */


  SyncTree.prototype.applyTaggedQueryMerge = function (path, changedChildren, tag) {
    var queryKey = this.queryKeyForTag_(tag);

    if (queryKey) {
      var r = SyncTree.parseQueryKey_(queryKey);
      var queryPath = r.path,
          queryId = r.queryId;
      var relativePath = newRelativePath(queryPath, path);
      var changeTree = ImmutableTree.fromObject(changedChildren);
      var op = new Merge(newOperationSourceServerTaggedQuery(queryId), relativePath, changeTree);
      return this.applyTaggedOperation_(queryPath, op);
    } else {
      // We've already removed the query. No big deal, ignore the update
      return [];
    }
  };
  /**
   * Apply a listen complete for a tagged query
   *
   * @return Events to raise.
   */


  SyncTree.prototype.applyTaggedListenComplete = function (path, tag) {
    var queryKey = this.queryKeyForTag_(tag);

    if (queryKey) {
      var r = SyncTree.parseQueryKey_(queryKey);
      var queryPath = r.path,
          queryId = r.queryId;
      var relativePath = newRelativePath(queryPath, path);
      var op = new ListenComplete(newOperationSourceServerTaggedQuery(queryId), relativePath);
      return this.applyTaggedOperation_(queryPath, op);
    } else {
      // We've already removed the query. No big deal, ignore the update
      return [];
    }
  };
  /**
   * Add an event callback for the specified query.
   *
   * @return Events to raise.
   */


  SyncTree.prototype.addEventRegistration = function (query, eventRegistration) {
    var path = query.path;
    var serverCache = null;
    var foundAncestorDefaultView = false; // Any covering writes will necessarily be at the root, so really all we need to find is the server cache.
    // Consider optimizing this once there's a better understanding of what actual behavior will be.

    this.syncPointTree_.foreachOnPath(path, function (pathToSyncPoint, sp) {
      var relativePath = newRelativePath(pathToSyncPoint, path);
      serverCache = serverCache || sp.getCompleteServerCache(relativePath);
      foundAncestorDefaultView = foundAncestorDefaultView || sp.hasCompleteView();
    });
    var syncPoint = this.syncPointTree_.get(path);

    if (!syncPoint) {
      syncPoint = new SyncPoint();
      this.syncPointTree_ = this.syncPointTree_.set(path, syncPoint);
    } else {
      foundAncestorDefaultView = foundAncestorDefaultView || syncPoint.hasCompleteView();
      serverCache = serverCache || syncPoint.getCompleteServerCache(newEmptyPath());
    }

    var serverCacheComplete;

    if (serverCache != null) {
      serverCacheComplete = true;
    } else {
      serverCacheComplete = false;
      serverCache = ChildrenNode.EMPTY_NODE;
      var subtree = this.syncPointTree_.subtree(path);
      subtree.foreachChild(function (childName, childSyncPoint) {
        var completeCache = childSyncPoint.getCompleteServerCache(newEmptyPath());

        if (completeCache) {
          serverCache = serverCache.updateImmediateChild(childName, completeCache);
        }
      });
    }

    var viewAlreadyExists = syncPoint.viewExistsForQuery(query);

    if (!viewAlreadyExists && !query.getQueryParams().loadsAllData()) {
      // We need to track a tag for this query
      var queryKey = SyncTree.makeQueryKey_(query);
      Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(!this.queryToTagMap.has(queryKey), 'View does not exist, but we have a tag');
      var tag = SyncTree.getNextQueryTag_();
      this.queryToTagMap.set(queryKey, tag);
      this.tagToQueryMap.set(tag, queryKey);
    }

    var writesCache = this.pendingWriteTree_.childWrites(path);
    var events = syncPoint.addEventRegistration(query, eventRegistration, writesCache, serverCache, serverCacheComplete);

    if (!viewAlreadyExists && !foundAncestorDefaultView) {
      var view = syncPoint.viewForQuery(query);
      events = events.concat(this.setupListener_(query, view));
    }

    return events;
  };
  /**
   * Remove event callback(s).
   *
   * If query is the default query, we'll check all queries for the specified eventRegistration.
   * If eventRegistration is null, we'll remove all callbacks for the specified query/queries.
   *
   * @param eventRegistration If null, all callbacks are removed.
   * @param cancelError If a cancelError is provided, appropriate cancel events will be returned.
   * @return Cancel events, if cancelError was provided.
   */


  SyncTree.prototype.removeEventRegistration = function (query, eventRegistration, cancelError) {
    var _this = this; // Find the syncPoint first. Then deal with whether or not it has matching listeners


    var path = query.path;
    var maybeSyncPoint = this.syncPointTree_.get(path);
    var cancelEvents = []; // A removal on a default query affects all queries at that location. A removal on an indexed query, even one without
    // other query constraints, does *not* affect all queries at that location. So this check must be for 'default', and
    // not loadsAllData().

    if (maybeSyncPoint && (query.queryIdentifier() === 'default' || maybeSyncPoint.viewExistsForQuery(query))) {
      var removedAndEvents = maybeSyncPoint.removeEventRegistration(query, eventRegistration, cancelError);

      if (maybeSyncPoint.isEmpty()) {
        this.syncPointTree_ = this.syncPointTree_.remove(path);
      }

      var removed = removedAndEvents.removed;
      cancelEvents = removedAndEvents.events; // We may have just removed one of many listeners and can short-circuit this whole process
      // We may also not have removed a default listener, in which case all of the descendant listeners should already be
      // properly set up.
      //
      // Since indexed queries can shadow if they don't have other query constraints, check for loadsAllData(), instead of
      // queryId === 'default'

      var removingDefault = -1 !== removed.findIndex(function (query) {
        return query.getQueryParams().loadsAllData();
      });
      var covered = this.syncPointTree_.findOnPath(path, function (relativePath, parentSyncPoint) {
        return parentSyncPoint.hasCompleteView();
      });

      if (removingDefault && !covered) {
        var subtree = this.syncPointTree_.subtree(path); // There are potentially child listeners. Determine what if any listens we need to send before executing the
        // removal

        if (!subtree.isEmpty()) {
          // We need to fold over our subtree and collect the listeners to send
          var newViews = this.collectDistinctViewsForSubTree_(subtree); // Ok, we've collected all the listens we need. Set them up.

          for (var i = 0; i < newViews.length; ++i) {
            var view = newViews[i],
                newQuery = view.getQuery();
            var listener = this.createListenerForView_(view);
            this.listenProvider_.startListening(SyncTree.queryForListening_(newQuery), this.tagForQuery_(newQuery), listener.hashFn, listener.onComplete);
          }
        }
      } // If we removed anything and we're not covered by a higher up listen, we need to stop listening on this query
      // The above block has us covered in terms of making sure we're set up on listens lower in the tree.
      // Also, note that if we have a cancelError, it's already been removed at the provider level.


      if (!covered && removed.length > 0 && !cancelError) {
        // If we removed a default, then we weren't listening on any of the other queries here. Just cancel the one
        // default. Otherwise, we need to iterate through and cancel each individual query
        if (removingDefault) {
          // We don't tag default listeners
          var defaultTag = null;
          this.listenProvider_.stopListening(SyncTree.queryForListening_(query), defaultTag);
        } else {
          removed.forEach(function (queryToRemove) {
            var tagToRemove = _this.queryToTagMap.get(SyncTree.makeQueryKey_(queryToRemove));

            _this.listenProvider_.stopListening(SyncTree.queryForListening_(queryToRemove), tagToRemove);
          });
        }
      } // Now, clear all of the tags we're tracking for the removed listens


      this.removeTags_(removed);
    }

    return cancelEvents;
  };
  /**
   * Returns a complete cache, if we have one, of the data at a particular path. If the location does not have a
   * listener above it, we will get a false "null". This shouldn't be a problem because transactions will always
   * have a listener above, and atomic operations would correctly show a jitter of <increment value> ->
   *     <incremented total> as the write is applied locally and then acknowledged at the server.
   *
   * Note: this method will *include* hidden writes from transaction with applyLocally set to false.
   *
   * @param path The path to the data we want
   * @param writeIdsToExclude A specific set to be excluded
   */


  SyncTree.prototype.calcCompleteEventCache = function (path, writeIdsToExclude) {
    var includeHiddenSets = true;
    var writeTree = this.pendingWriteTree_;
    var serverCache = this.syncPointTree_.findOnPath(path, function (pathSoFar, syncPoint) {
      var relativePath = newRelativePath(pathSoFar, path);
      var serverCache = syncPoint.getCompleteServerCache(relativePath);

      if (serverCache) {
        return serverCache;
      }
    });
    return writeTree.calcCompleteEventCache(path, serverCache, writeIdsToExclude, includeHiddenSets);
  };

  SyncTree.prototype.getServerValue = function (query) {
    var path = query.path;
    var serverCache = null; // Any covering writes will necessarily be at the root, so really all we need to find is the server cache.
    // Consider optimizing this once there's a better understanding of what actual behavior will be.

    this.syncPointTree_.foreachOnPath(path, function (pathToSyncPoint, sp) {
      var relativePath = newRelativePath(pathToSyncPoint, path);
      serverCache = serverCache || sp.getCompleteServerCache(relativePath);
    });
    var syncPoint = this.syncPointTree_.get(path);

    if (!syncPoint) {
      syncPoint = new SyncPoint();
      this.syncPointTree_ = this.syncPointTree_.set(path, syncPoint);
    } else {
      serverCache = serverCache || syncPoint.getCompleteServerCache(newEmptyPath());
    }

    var serverCacheComplete = serverCache != null;
    var serverCacheNode = serverCacheComplete ? new CacheNode(serverCache, true, false) : null;
    var writesCache = this.pendingWriteTree_.childWrites(query.path);
    var view = syncPoint.getView(query, writesCache, serverCacheComplete ? serverCacheNode.getNode() : ChildrenNode.EMPTY_NODE, serverCacheComplete);
    return view.getCompleteNode();
  };
  /**
   * This collapses multiple unfiltered views into a single view, since we only need a single
   * listener for them.
   */


  SyncTree.prototype.collectDistinctViewsForSubTree_ = function (subtree) {
    return subtree.fold(function (relativePath, maybeChildSyncPoint, childMap) {
      if (maybeChildSyncPoint && maybeChildSyncPoint.hasCompleteView()) {
        var completeView = maybeChildSyncPoint.getCompleteView();
        return [completeView];
      } else {
        // No complete view here, flatten any deeper listens into an array
        var views_1 = [];

        if (maybeChildSyncPoint) {
          views_1 = maybeChildSyncPoint.getQueryViews();
        }

        each(childMap, function (_key, childViews) {
          views_1 = views_1.concat(childViews);
        });
        return views_1;
      }
    });
  };

  SyncTree.prototype.removeTags_ = function (queries) {
    for (var j = 0; j < queries.length; ++j) {
      var removedQuery = queries[j];

      if (!removedQuery.getQueryParams().loadsAllData()) {
        // We should have a tag for this
        var removedQueryKey = SyncTree.makeQueryKey_(removedQuery);
        var removedQueryTag = this.queryToTagMap.get(removedQueryKey);
        this.queryToTagMap.delete(removedQueryKey);
        this.tagToQueryMap.delete(removedQueryTag);
      }
    }
  };
  /**
   * Normalizes a query to a query we send the server for listening
   *
   * @return The normalized query
   */


  SyncTree.queryForListening_ = function (query) {
    if (query.getQueryParams().loadsAllData() && !query.getQueryParams().isDefault()) {
      // We treat queries that load all data as default queries
      // Cast is necessary because ref() technically returns Firebase which is actually fb.api.Firebase which inherits
      // from Query
      return query.getRef();
    } else {
      return query;
    }
  };
  /**
   * For a given new listen, manage the de-duplication of outstanding subscriptions.
   *
   * @return This method can return events to support synchronous data sources
   */


  SyncTree.prototype.setupListener_ = function (query, view) {
    var path = query.path;
    var tag = this.tagForQuery_(query);
    var listener = this.createListenerForView_(view);
    var events = this.listenProvider_.startListening(SyncTree.queryForListening_(query), tag, listener.hashFn, listener.onComplete);
    var subtree = this.syncPointTree_.subtree(path); // The root of this subtree has our query. We're here because we definitely need to send a listen for that, but we
    // may need to shadow other listens as well.

    if (tag) {
      Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(!subtree.value.hasCompleteView(), "If we're adding a query, it shouldn't be shadowed");
    } else {
      // Shadow everything at or below this location, this is a default listener.
      var queriesToStop = subtree.fold(function (relativePath, maybeChildSyncPoint, childMap) {
        if (!pathIsEmpty(relativePath) && maybeChildSyncPoint && maybeChildSyncPoint.hasCompleteView()) {
          return [maybeChildSyncPoint.getCompleteView().getQuery()];
        } else {
          // No default listener here, flatten any deeper queries into an array
          var queries_1 = [];

          if (maybeChildSyncPoint) {
            queries_1 = queries_1.concat(maybeChildSyncPoint.getQueryViews().map(function (view) {
              return view.getQuery();
            }));
          }

          each(childMap, function (_key, childQueries) {
            queries_1 = queries_1.concat(childQueries);
          });
          return queries_1;
        }
      });

      for (var i = 0; i < queriesToStop.length; ++i) {
        var queryToStop = queriesToStop[i];
        this.listenProvider_.stopListening(SyncTree.queryForListening_(queryToStop), this.tagForQuery_(queryToStop));
      }
    }

    return events;
  };

  SyncTree.prototype.createListenerForView_ = function (view) {
    var _this = this;

    var query = view.getQuery();
    var tag = this.tagForQuery_(query);
    return {
      hashFn: function hashFn() {
        var cache = view.getServerCache() || ChildrenNode.EMPTY_NODE;
        return cache.hash();
      },
      onComplete: function onComplete(status) {
        if (status === 'ok') {
          if (tag) {
            return _this.applyTaggedListenComplete(query.path, tag);
          } else {
            return _this.applyListenComplete(query.path);
          }
        } else {
          // If a listen failed, kill all of the listeners here, not just the one that triggered the error.
          // Note that this may need to be scoped to just this listener if we change permissions on filtered children
          var error = errorForServerCode(status, query);
          return _this.removeEventRegistration(query,
          /*eventRegistration*/
          null, error);
        }
      }
    };
  };
  /**
   * Given a query, computes a "queryKey" suitable for use in our queryToTagMap_.
   */


  SyncTree.makeQueryKey_ = function (query) {
    return query.path.toString() + '$' + query.queryIdentifier();
  };
  /**
   * Given a queryKey (created by makeQueryKey), parse it back into a path and queryId.
   */


  SyncTree.parseQueryKey_ = function (queryKey) {
    var splitIndex = queryKey.indexOf('$');
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(splitIndex !== -1 && splitIndex < queryKey.length - 1, 'Bad queryKey.');
    return {
      queryId: queryKey.substr(splitIndex + 1),
      path: new Path(queryKey.substr(0, splitIndex))
    };
  };
  /**
   * Return the query associated with the given tag, if we have one
   */


  SyncTree.prototype.queryKeyForTag_ = function (tag) {
    return this.tagToQueryMap.get(tag);
  };
  /**
   * Return the tag associated with the given query.
   */


  SyncTree.prototype.tagForQuery_ = function (query) {
    var queryKey = SyncTree.makeQueryKey_(query);
    return this.queryToTagMap.get(queryKey);
  };
  /**
   * Static accessor for query tags.
   */


  SyncTree.getNextQueryTag_ = function () {
    return SyncTree.nextQueryTag_++;
  };
  /**
   * A helper method to apply tagged operations
   */


  SyncTree.prototype.applyTaggedOperation_ = function (queryPath, operation) {
    var syncPoint = this.syncPointTree_.get(queryPath);
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(syncPoint, "Missing sync point for query tag that we're tracking");
    var writesCache = this.pendingWriteTree_.childWrites(queryPath);
    return syncPoint.applyOperation(operation, writesCache,
    /*serverCache=*/
    null);
  };
  /**
   * A helper method that visits all descendant and ancestor SyncPoints, applying the operation.
   *
   * NOTES:
   * - Descendant SyncPoints will be visited first (since we raise events depth-first).
   *
   * - We call applyOperation() on each SyncPoint passing three things:
   *   1. A version of the Operation that has been made relative to the SyncPoint location.
   *   2. A WriteTreeRef of any writes we have cached at the SyncPoint location.
   *   3. A snapshot Node with cached server data, if we have it.
   *
   * - We concatenate all of the events returned by each SyncPoint and return the result.
   */


  SyncTree.prototype.applyOperationToSyncPoints_ = function (operation) {
    return this.applyOperationHelper_(operation, this.syncPointTree_,
    /*serverCache=*/
    null, this.pendingWriteTree_.childWrites(newEmptyPath()));
  };
  /**
   * Recursive helper for applyOperationToSyncPoints_
   */


  SyncTree.prototype.applyOperationHelper_ = function (operation, syncPointTree, serverCache, writesCache) {
    if (pathIsEmpty(operation.path)) {
      return this.applyOperationDescendantsHelper_(operation, syncPointTree, serverCache, writesCache);
    } else {
      var syncPoint = syncPointTree.get(newEmptyPath()); // If we don't have cached server data, see if we can get it from this SyncPoint.

      if (serverCache == null && syncPoint != null) {
        serverCache = syncPoint.getCompleteServerCache(newEmptyPath());
      }

      var events = [];
      var childName = pathGetFront(operation.path);
      var childOperation = operation.operationForChild(childName);
      var childTree = syncPointTree.children.get(childName);

      if (childTree && childOperation) {
        var childServerCache = serverCache ? serverCache.getImmediateChild(childName) : null;
        var childWritesCache = writesCache.child(childName);
        events = events.concat(this.applyOperationHelper_(childOperation, childTree, childServerCache, childWritesCache));
      }

      if (syncPoint) {
        events = events.concat(syncPoint.applyOperation(operation, writesCache, serverCache));
      }

      return events;
    }
  };
  /**
   * Recursive helper for applyOperationToSyncPoints_
   */


  SyncTree.prototype.applyOperationDescendantsHelper_ = function (operation, syncPointTree, serverCache, writesCache) {
    var _this = this;

    var syncPoint = syncPointTree.get(newEmptyPath()); // If we don't have cached server data, see if we can get it from this SyncPoint.

    if (serverCache == null && syncPoint != null) {
      serverCache = syncPoint.getCompleteServerCache(newEmptyPath());
    }

    var events = [];
    syncPointTree.children.inorderTraversal(function (childName, childTree) {
      var childServerCache = serverCache ? serverCache.getImmediateChild(childName) : null;
      var childWritesCache = writesCache.child(childName);
      var childOperation = operation.operationForChild(childName);

      if (childOperation) {
        events = events.concat(_this.applyOperationDescendantsHelper_(childOperation, childTree, childServerCache, childWritesCache));
      }
    });

    if (syncPoint) {
      events = events.concat(syncPoint.applyOperation(operation, writesCache, serverCache));
    }

    return events;
  };
  /**
   * Static tracker for next query tag.
   */


  SyncTree.nextQueryTag_ = 1;
  return SyncTree;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Mutable object which basically just stores a reference to the "latest" immutable snapshot.
 */


var SnapshotHolder =
/** @class */
function () {
  function SnapshotHolder() {
    this.rootNode_ = ChildrenNode.EMPTY_NODE;
  }

  SnapshotHolder.prototype.getNode = function (path) {
    return this.rootNode_.getChild(path);
  };

  SnapshotHolder.prototype.updateSnapshot = function (path, newSnapshotNode) {
    this.rootNode_ = this.rootNode_.updateChild(path, newSnapshotNode);
  };

  return SnapshotHolder;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Tracks a collection of stats.
 */


var StatsCollection =
/** @class */
function () {
  function StatsCollection() {
    this.counters_ = {};
  }

  StatsCollection.prototype.incrementCounter = function (name, amount) {
    if (amount === void 0) {
      amount = 1;
    }

    if (!Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["contains"])(this.counters_, name)) {
      this.counters_[name] = 0;
    }

    this.counters_[name] += amount;
  };

  StatsCollection.prototype.get = function () {
    return Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["deepCopy"])(this.counters_);
  };

  return StatsCollection;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var StatsManager =
/** @class */
function () {
  function StatsManager() {}

  StatsManager.getCollection = function (repoInfo) {
    var hashString = repoInfo.toString();

    if (!this.collections_[hashString]) {
      this.collections_[hashString] = new StatsCollection();
    }

    return this.collections_[hashString];
  };

  StatsManager.getOrCreateReporter = function (repoInfo, creatorFunction) {
    var hashString = repoInfo.toString();

    if (!this.reporters_[hashString]) {
      this.reporters_[hashString] = creatorFunction();
    }

    return this.reporters_[hashString];
  };

  StatsManager.collections_ = {};
  StatsManager.reporters_ = {};
  return StatsManager;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Returns the delta from the previous call to get stats.
 *
 * @param collection_ The collection to "listen" to.
 */


var StatsListener =
/** @class */
function () {
  function StatsListener(collection_) {
    this.collection_ = collection_;
    this.last_ = null;
  }

  StatsListener.prototype.get = function () {
    var newStats = this.collection_.get();

    var delta = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, newStats);

    if (this.last_) {
      each(this.last_, function (stat, value) {
        delta[stat] = delta[stat] - value;
      });
    }

    this.last_ = newStats;
    return delta;
  };

  return StatsListener;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Assuming some apps may have a short amount of time on page, and a bulk of firebase operations probably
// happen on page load, we try to report our first set of stats pretty quickly, but we wait at least 10
// seconds to try to ensure the Firebase connection is established / settled.


var FIRST_STATS_MIN_TIME = 10 * 1000;
var FIRST_STATS_MAX_TIME = 30 * 1000; // We'll continue to report stats on average every 5 minutes.

var REPORT_STATS_INTERVAL = 5 * 60 * 1000;

var StatsReporter =
/** @class */
function () {
  /**
   * @param collection
   * @param server_
   */
  function StatsReporter(collection, server_) {
    this.server_ = server_;
    this.statsToReport_ = {};
    this.statsListener_ = new StatsListener(collection);
    var timeout = FIRST_STATS_MIN_TIME + (FIRST_STATS_MAX_TIME - FIRST_STATS_MIN_TIME) * Math.random();
    setTimeoutNonBlocking(this.reportStats_.bind(this), Math.floor(timeout));
  }

  StatsReporter.prototype.includeStat = function (stat) {
    this.statsToReport_[stat] = true;
  };

  StatsReporter.prototype.reportStats_ = function () {
    var _this = this;

    var stats = this.statsListener_.get();
    var reportedStats = {};
    var haveStatsToReport = false;
    each(stats, function (stat, value) {
      if (value > 0 && Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["contains"])(_this.statsToReport_, stat)) {
        reportedStats[stat] = value;
        haveStatsToReport = true;
      }
    });

    if (haveStatsToReport) {
      this.server_.reportStats(reportedStats);
    } // queue our next run.


    setTimeoutNonBlocking(this.reportStats_.bind(this), Math.floor(Math.random() * 2 * REPORT_STATS_INTERVAL));
  };

  return StatsReporter;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * The event queue serves a few purposes:
 * 1. It ensures we maintain event order in the face of event callbacks doing operations that result in more
 *    events being queued.
 * 2. raiseQueuedEvents() handles being called reentrantly nicely.  That is, if in the course of raising events,
 *    raiseQueuedEvents() is called again, the "inner" call will pick up raising events where the "outer" call
 *    left off, ensuring that the events are still raised synchronously and in order.
 * 3. You can use raiseEventsAtPath and raiseEventsForChangedPath to ensure only relevant previously-queued
 *    events are raised synchronously.
 *
 * NOTE: This can all go away if/when we move to async events.
 *
 */


var EventQueue =
/** @class */
function () {
  function EventQueue() {
    this.eventLists_ = [];
    /**
     * Tracks recursion depth of raiseQueuedEvents_, for debugging purposes.
     */

    this.recursionDepth_ = 0;
  }

  return EventQueue;
}();
/**
 * @param eventDataList The new events to queue.
 */


function eventQueueQueueEvents(eventQueue, eventDataList) {
  // We group events by path, storing them in a single EventList, to make it easier to skip over them quickly.
  var currList = null;

  for (var i = 0; i < eventDataList.length; i++) {
    var data = eventDataList[i];
    var path = data.getPath();

    if (currList !== null && !pathEquals(path, currList.path)) {
      eventQueue.eventLists_.push(currList);
      currList = null;
    }

    if (currList === null) {
      currList = {
        events: [],
        path: path
      };
    }

    currList.events.push(data);
  }

  if (currList) {
    eventQueue.eventLists_.push(currList);
  }
}
/**
 * Queues the specified events and synchronously raises all events (including previously queued ones)
 * for the specified path.
 *
 * It is assumed that the new events are all for the specified path.
 *
 * @param path The path to raise events for.
 * @param eventDataList The new events to raise.
 */


function eventQueueRaiseEventsAtPath(eventQueue, path, eventDataList) {
  eventQueueQueueEvents(eventQueue, eventDataList);
  eventQueueRaiseQueuedEventsMatchingPredicate(eventQueue, function (eventPath) {
    return pathEquals(eventPath, path);
  });
}
/**
 * Queues the specified events and synchronously raises all events (including previously queued ones) for
 * locations related to the specified change path (i.e. all ancestors and descendants).
 *
 * It is assumed that the new events are all related (ancestor or descendant) to the specified path.
 *
 * @param changedPath The path to raise events for.
 * @param eventDataList The events to raise
 */


function eventQueueRaiseEventsForChangedPath(eventQueue, changedPath, eventDataList) {
  eventQueueQueueEvents(eventQueue, eventDataList);
  eventQueueRaiseQueuedEventsMatchingPredicate(eventQueue, function (eventPath) {
    return pathContains(eventPath, changedPath) || pathContains(changedPath, eventPath);
  });
}

function eventQueueRaiseQueuedEventsMatchingPredicate(eventQueue, predicate) {
  eventQueue.recursionDepth_++;
  var sentAll = true;

  for (var i = 0; i < eventQueue.eventLists_.length; i++) {
    var eventList = eventQueue.eventLists_[i];

    if (eventList) {
      var eventPath = eventList.path;

      if (predicate(eventPath)) {
        eventListRaise(eventQueue.eventLists_[i]);
        eventQueue.eventLists_[i] = null;
      } else {
        sentAll = false;
      }
    }
  }

  if (sentAll) {
    eventQueue.eventLists_ = [];
  }

  eventQueue.recursionDepth_--;
}
/**
 * Iterates through the list and raises each event
 */


function eventListRaise(eventList) {
  for (var i = 0; i < eventList.events.length; i++) {
    var eventData = eventList.events[i];

    if (eventData !== null) {
      eventList.events[i] = null;
      var eventFn = eventData.getEventRunner();

      if (logger) {
        log('event: ' + eventData.toString());
      }

      exceptionGuard(eventFn);
    }
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Base class to be used if you want to emit events. Call the constructor with
 * the set of allowed event names.
 */


var EventEmitter =
/** @class */
function () {
  function EventEmitter(allowedEvents_) {
    this.allowedEvents_ = allowedEvents_;
    this.listeners_ = {};
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(Array.isArray(allowedEvents_) && allowedEvents_.length > 0, 'Requires a non-empty array');
  }
  /**
   * To be called by derived classes to trigger events.
   */


  EventEmitter.prototype.trigger = function (eventType) {
    var varArgs = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      varArgs[_i - 1] = arguments[_i];
    }

    if (Array.isArray(this.listeners_[eventType])) {
      // Clone the list, since callbacks could add/remove listeners.
      var listeners = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(this.listeners_[eventType]);

      for (var i = 0; i < listeners.length; i++) {
        listeners[i].callback.apply(listeners[i].context, varArgs);
      }
    }
  };

  EventEmitter.prototype.on = function (eventType, callback, context) {
    this.validateEventType_(eventType);
    this.listeners_[eventType] = this.listeners_[eventType] || [];
    this.listeners_[eventType].push({
      callback: callback,
      context: context
    });
    var eventData = this.getInitialEvent(eventType);

    if (eventData) {
      callback.apply(context, eventData);
    }
  };

  EventEmitter.prototype.off = function (eventType, callback, context) {
    this.validateEventType_(eventType);
    var listeners = this.listeners_[eventType] || [];

    for (var i = 0; i < listeners.length; i++) {
      if (listeners[i].callback === callback && (!context || context === listeners[i].context)) {
        listeners.splice(i, 1);
        return;
      }
    }
  };

  EventEmitter.prototype.validateEventType_ = function (eventType) {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(this.allowedEvents_.find(function (et) {
      return et === eventType;
    }), 'Unknown event: ' + eventType);
  };

  return EventEmitter;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var VisibilityMonitor =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(VisibilityMonitor, _super);

  function VisibilityMonitor() {
    var _this = _super.call(this, ['visible']) || this;

    var hidden;
    var visibilityChange;

    if (typeof document !== 'undefined' && typeof document.addEventListener !== 'undefined') {
      if (typeof document['hidden'] !== 'undefined') {
        // Opera 12.10 and Firefox 18 and later support
        visibilityChange = 'visibilitychange';
        hidden = 'hidden';
      } else if (typeof document['mozHidden'] !== 'undefined') {
        visibilityChange = 'mozvisibilitychange';
        hidden = 'mozHidden';
      } else if (typeof document['msHidden'] !== 'undefined') {
        visibilityChange = 'msvisibilitychange';
        hidden = 'msHidden';
      } else if (typeof document['webkitHidden'] !== 'undefined') {
        visibilityChange = 'webkitvisibilitychange';
        hidden = 'webkitHidden';
      }
    } // Initially, we always assume we are visible. This ensures that in browsers
    // without page visibility support or in cases where we are never visible
    // (e.g. chrome extension), we act as if we are visible, i.e. don't delay
    // reconnects


    _this.visible_ = true;

    if (visibilityChange) {
      document.addEventListener(visibilityChange, function () {
        var visible = !document[hidden];

        if (visible !== _this.visible_) {
          _this.visible_ = visible;

          _this.trigger('visible', visible);
        }
      }, false);
    }

    return _this;
  }

  VisibilityMonitor.getInstance = function () {
    return new VisibilityMonitor();
  };

  VisibilityMonitor.prototype.getInitialEvent = function (eventType) {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(eventType === 'visible', 'Unknown event type: ' + eventType);
    return [this.visible_];
  };

  return VisibilityMonitor;
}(EventEmitter);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Monitors online state (as reported by window.online/offline events).
 *
 * The expectation is that this could have many false positives (thinks we are online
 * when we're not), but no false negatives.  So we can safely use it to determine when
 * we definitely cannot reach the internet.
 */


var OnlineMonitor =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(OnlineMonitor, _super);

  function OnlineMonitor() {
    var _this = _super.call(this, ['online']) || this;

    _this.online_ = true; // We've had repeated complaints that Cordova apps can get stuck "offline", e.g.
    // https://forum.ionicframework.com/t/firebase-connection-is-lost-and-never-come-back/43810
    // It would seem that the 'online' event does not always fire consistently. So we disable it
    // for Cordova.

    if (typeof window !== 'undefined' && typeof window.addEventListener !== 'undefined' && !Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["isMobileCordova"])()) {
      window.addEventListener('online', function () {
        if (!_this.online_) {
          _this.online_ = true;

          _this.trigger('online', true);
        }
      }, false);
      window.addEventListener('offline', function () {
        if (_this.online_) {
          _this.online_ = false;

          _this.trigger('online', false);
        }
      }, false);
    }

    return _this;
  }

  OnlineMonitor.getInstance = function () {
    return new OnlineMonitor();
  };

  OnlineMonitor.prototype.getInitialEvent = function (eventType) {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(eventType === 'online', 'Unknown event type: ' + eventType);
    return [this.online_];
  };

  OnlineMonitor.prototype.currentlyOnline = function () {
    return this.online_;
  };

  return OnlineMonitor;
}(EventEmitter);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * This class ensures the packets from the server arrive in order
 * This class takes data from the server and ensures it gets passed into the callbacks in order.
 */


var PacketReceiver =
/** @class */
function () {
  /**
   * @param onMessage_
   */
  function PacketReceiver(onMessage_) {
    this.onMessage_ = onMessage_;
    this.pendingResponses = [];
    this.currentResponseNum = 0;
    this.closeAfterResponse = -1;
    this.onClose = null;
  }

  PacketReceiver.prototype.closeAfter = function (responseNum, callback) {
    this.closeAfterResponse = responseNum;
    this.onClose = callback;

    if (this.closeAfterResponse < this.currentResponseNum) {
      this.onClose();
      this.onClose = null;
    }
  };
  /**
   * Each message from the server comes with a response number, and an array of data. The responseNumber
   * allows us to ensure that we process them in the right order, since we can't be guaranteed that all
   * browsers will respond in the same order as the requests we sent
   */


  PacketReceiver.prototype.handleResponse = function (requestNum, data) {
    var _this = this;

    this.pendingResponses[requestNum] = data;

    var _loop_1 = function _loop_1() {
      var toProcess = this_1.pendingResponses[this_1.currentResponseNum];
      delete this_1.pendingResponses[this_1.currentResponseNum];

      var _loop_2 = function _loop_2(i) {
        if (toProcess[i]) {
          exceptionGuard(function () {
            _this.onMessage_(toProcess[i]);
          });
        }
      };

      for (var i = 0; i < toProcess.length; ++i) {
        _loop_2(i);
      }

      if (this_1.currentResponseNum === this_1.closeAfterResponse) {
        if (this_1.onClose) {
          this_1.onClose();
          this_1.onClose = null;
        }

        return "break";
      }

      this_1.currentResponseNum++;
    };

    var this_1 = this;

    while (this.pendingResponses[this.currentResponseNum]) {
      var state_1 = _loop_1();

      if (state_1 === "break") break;
    }
  };

  return PacketReceiver;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// URL query parameters associated with longpolling


var FIREBASE_LONGPOLL_START_PARAM = 'start';
var FIREBASE_LONGPOLL_CLOSE_COMMAND = 'close';
var FIREBASE_LONGPOLL_COMMAND_CB_NAME = 'pLPCommand';
var FIREBASE_LONGPOLL_DATA_CB_NAME = 'pRTLPCB';
var FIREBASE_LONGPOLL_ID_PARAM = 'id';
var FIREBASE_LONGPOLL_PW_PARAM = 'pw';
var FIREBASE_LONGPOLL_SERIAL_PARAM = 'ser';
var FIREBASE_LONGPOLL_CALLBACK_ID_PARAM = 'cb';
var FIREBASE_LONGPOLL_SEGMENT_NUM_PARAM = 'seg';
var FIREBASE_LONGPOLL_SEGMENTS_IN_PACKET = 'ts';
var FIREBASE_LONGPOLL_DATA_PARAM = 'd';
var FIREBASE_LONGPOLL_DISCONN_FRAME_REQUEST_PARAM = 'dframe'; //Data size constants.
//TODO: Perf: the maximum length actually differs from browser to browser.
// We should check what browser we're on and set accordingly.

var MAX_URL_DATA_SIZE = 1870;
var SEG_HEADER_SIZE = 30; //ie: &seg=8299234&ts=982389123&d=

var MAX_PAYLOAD_SIZE = MAX_URL_DATA_SIZE - SEG_HEADER_SIZE;
/**
 * Keepalive period
 * send a fresh request at minimum every 25 seconds. Opera has a maximum request
 * length of 30 seconds that we can't exceed.
 */

var KEEPALIVE_REQUEST_INTERVAL = 25000;
/**
 * How long to wait before aborting a long-polling connection attempt.
 */

var LP_CONNECT_TIMEOUT = 30000;
/**
 * This class manages a single long-polling connection.
 */

var BrowserPollConnection =
/** @class */
function () {
  /**
   * @param connId An identifier for this connection, used for logging
   * @param repoInfo The info for the endpoint to send data to.
   * @param applicationId The Firebase App ID for this project.
   * @param transportSessionId Optional transportSessionid if we are reconnecting for an existing
   *                                         transport session
   * @param lastSessionId Optional lastSessionId if the PersistentConnection has already created a
   *                                     connection previously
   */
  function BrowserPollConnection(connId, repoInfo, applicationId, transportSessionId, lastSessionId) {
    this.connId = connId;
    this.repoInfo = repoInfo;
    this.applicationId = applicationId;
    this.transportSessionId = transportSessionId;
    this.lastSessionId = lastSessionId;
    this.bytesSent = 0;
    this.bytesReceived = 0;
    this.everConnected_ = false;
    this.log_ = logWrapper(connId);
    this.stats_ = StatsManager.getCollection(repoInfo);

    this.urlFn = function (params) {
      return repoInfo.connectionURL(LONG_POLLING, params);
    };
  }
  /**
   * @param onMessage Callback when messages arrive
   * @param onDisconnect Callback with connection lost.
   */


  BrowserPollConnection.prototype.open = function (onMessage, onDisconnect) {
    var _this = this;

    this.curSegmentNum = 0;
    this.onDisconnect_ = onDisconnect;
    this.myPacketOrderer = new PacketReceiver(onMessage);
    this.isClosed_ = false;
    this.connectTimeoutTimer_ = setTimeout(function () {
      _this.log_('Timed out trying to connect.'); // Make sure we clear the host cache


      _this.onClosed_();

      _this.connectTimeoutTimer_ = null; // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }, Math.floor(LP_CONNECT_TIMEOUT)); // Ensure we delay the creation of the iframe until the DOM is loaded.

    executeWhenDOMReady(function () {
      if (_this.isClosed_) {
        return;
      } //Set up a callback that gets triggered once a connection is set up.


      _this.scriptTagHolder = new FirebaseIFrameScriptHolder(function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__read"])(args, 5),
            command = _a[0],
            arg1 = _a[1],
            arg2 = _a[2],
            arg3 = _a[3],
            arg4 = _a[4];

        _this.incrementIncomingBytes_(args);

        if (!_this.scriptTagHolder) {
          return; // we closed the connection.
        }

        if (_this.connectTimeoutTimer_) {
          clearTimeout(_this.connectTimeoutTimer_);
          _this.connectTimeoutTimer_ = null;
        }

        _this.everConnected_ = true;

        if (command === FIREBASE_LONGPOLL_START_PARAM) {
          _this.id = arg1;
          _this.password = arg2;
        } else if (command === FIREBASE_LONGPOLL_CLOSE_COMMAND) {
          // Don't clear the host cache. We got a response from the server, so we know it's reachable
          if (arg1) {
            // We aren't expecting any more data (other than what the server's already in the process of sending us
            // through our already open polls), so don't send any more.
            _this.scriptTagHolder.sendNewPolls = false; // arg1 in this case is the last response number sent by the server. We should try to receive
            // all of the responses up to this one before closing

            _this.myPacketOrderer.closeAfter(arg1, function () {
              _this.onClosed_();
            });
          } else {
            _this.onClosed_();
          }
        } else {
          throw new Error('Unrecognized command received: ' + command);
        }
      }, function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__read"])(args, 2),
            pN = _a[0],
            data = _a[1];

        _this.incrementIncomingBytes_(args);

        _this.myPacketOrderer.handleResponse(pN, data);
      }, function () {
        _this.onClosed_();
      }, _this.urlFn); //Send the initial request to connect. The serial number is simply to keep the browser from pulling previous results
      //from cache.

      var urlParams = {};
      urlParams[FIREBASE_LONGPOLL_START_PARAM] = 't';
      urlParams[FIREBASE_LONGPOLL_SERIAL_PARAM] = Math.floor(Math.random() * 100000000);

      if (_this.scriptTagHolder.uniqueCallbackIdentifier) {
        urlParams[FIREBASE_LONGPOLL_CALLBACK_ID_PARAM] = _this.scriptTagHolder.uniqueCallbackIdentifier;
      }

      urlParams[VERSION_PARAM] = PROTOCOL_VERSION;

      if (_this.transportSessionId) {
        urlParams[TRANSPORT_SESSION_PARAM] = _this.transportSessionId;
      }

      if (_this.lastSessionId) {
        urlParams[LAST_SESSION_PARAM] = _this.lastSessionId;
      }

      if (_this.applicationId) {
        urlParams[APPLICATION_ID_PARAM] = _this.applicationId;
      }

      if (typeof location !== 'undefined' && location.hostname && FORGE_DOMAIN_RE.test(location.hostname)) {
        urlParams[REFERER_PARAM] = FORGE_REF;
      }

      var connectURL = _this.urlFn(urlParams);

      _this.log_('Connecting via long-poll to ' + connectURL);

      _this.scriptTagHolder.addTag(connectURL, function () {
        /* do nothing */
      });
    });
  };
  /**
   * Call this when a handshake has completed successfully and we want to consider the connection established
   */


  BrowserPollConnection.prototype.start = function () {
    this.scriptTagHolder.startLongPoll(this.id, this.password);
    this.addDisconnectPingFrame(this.id, this.password);
  };
  /**
   * Forces long polling to be considered as a potential transport
   */


  BrowserPollConnection.forceAllow = function () {
    BrowserPollConnection.forceAllow_ = true;
  };
  /**
   * Forces longpolling to not be considered as a potential transport
   */


  BrowserPollConnection.forceDisallow = function () {
    BrowserPollConnection.forceDisallow_ = true;
  }; // Static method, use string literal so it can be accessed in a generic way


  BrowserPollConnection.isAvailable = function () {
    if (Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["isNodeSdk"])()) {
      return false;
    } else if (BrowserPollConnection.forceAllow_) {
      return true;
    } else {
      // NOTE: In React-Native there's normally no 'document', but if you debug a React-Native app in
      // the Chrome debugger, 'document' is defined, but document.createElement is null (2015/06/08).
      return !BrowserPollConnection.forceDisallow_ && typeof document !== 'undefined' && document.createElement != null && !isChromeExtensionContentScript() && !isWindowsStoreApp();
    }
  };
  /**
   * No-op for polling
   */


  BrowserPollConnection.prototype.markConnectionHealthy = function () {};
  /**
   * Stops polling and cleans up the iframe
   */


  BrowserPollConnection.prototype.shutdown_ = function () {
    this.isClosed_ = true;

    if (this.scriptTagHolder) {
      this.scriptTagHolder.close();
      this.scriptTagHolder = null;
    } //remove the disconnect frame, which will trigger an XHR call to the server to tell it we're leaving.


    if (this.myDisconnFrame) {
      document.body.removeChild(this.myDisconnFrame);
      this.myDisconnFrame = null;
    }

    if (this.connectTimeoutTimer_) {
      clearTimeout(this.connectTimeoutTimer_);
      this.connectTimeoutTimer_ = null;
    }
  };
  /**
   * Triggered when this transport is closed
   */


  BrowserPollConnection.prototype.onClosed_ = function () {
    if (!this.isClosed_) {
      this.log_('Longpoll is closing itself');
      this.shutdown_();

      if (this.onDisconnect_) {
        this.onDisconnect_(this.everConnected_);
        this.onDisconnect_ = null;
      }
    }
  };
  /**
   * External-facing close handler. RealTime has requested we shut down. Kill our connection and tell the server
   * that we've left.
   */


  BrowserPollConnection.prototype.close = function () {
    if (!this.isClosed_) {
      this.log_('Longpoll is being closed.');
      this.shutdown_();
    }
  };
  /**
   * Send the JSON object down to the server. It will need to be stringified, base64 encoded, and then
   * broken into chunks (since URLs have a small maximum length).
   * @param data The JSON data to transmit.
   */


  BrowserPollConnection.prototype.send = function (data) {
    var dataStr = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["stringify"])(data);
    this.bytesSent += dataStr.length;
    this.stats_.incrementCounter('bytes_sent', dataStr.length); //first, lets get the base64-encoded data

    var base64data = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["base64Encode"])(dataStr); //We can only fit a certain amount in each URL, so we need to split this request
    //up into multiple pieces if it doesn't fit in one request.

    var dataSegs = splitStringBySize(base64data, MAX_PAYLOAD_SIZE); //Enqueue each segment for transmission. We assign each chunk a sequential ID and a total number
    //of segments so that we can reassemble the packet on the server.

    for (var i = 0; i < dataSegs.length; i++) {
      this.scriptTagHolder.enqueueSegment(this.curSegmentNum, dataSegs.length, dataSegs[i]);
      this.curSegmentNum++;
    }
  };
  /**
   * This is how we notify the server that we're leaving.
   * We aren't able to send requests with DHTML on a window close event, but we can
   * trigger XHR requests in some browsers (everything but Opera basically).
   */


  BrowserPollConnection.prototype.addDisconnectPingFrame = function (id, pw) {
    if (Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["isNodeSdk"])()) {
      return;
    }

    this.myDisconnFrame = document.createElement('iframe');
    var urlParams = {};
    urlParams[FIREBASE_LONGPOLL_DISCONN_FRAME_REQUEST_PARAM] = 't';
    urlParams[FIREBASE_LONGPOLL_ID_PARAM] = id;
    urlParams[FIREBASE_LONGPOLL_PW_PARAM] = pw;
    this.myDisconnFrame.src = this.urlFn(urlParams);
    this.myDisconnFrame.style.display = 'none';
    document.body.appendChild(this.myDisconnFrame);
  };
  /**
   * Used to track the bytes received by this client
   */


  BrowserPollConnection.prototype.incrementIncomingBytes_ = function (args) {
    // TODO: This is an annoying perf hit just to track the number of incoming bytes.  Maybe it should be opt-in.
    var bytesReceived = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["stringify"])(args).length;
    this.bytesReceived += bytesReceived;
    this.stats_.incrementCounter('bytes_received', bytesReceived);
  };

  return BrowserPollConnection;
}();
/*********************************************************************************************
 * A wrapper around an iframe that is used as a long-polling script holder.
 *********************************************************************************************/


var FirebaseIFrameScriptHolder =
/** @class */
function () {
  /**
   * @param commandCB - The callback to be called when control commands are recevied from the server.
   * @param onMessageCB - The callback to be triggered when responses arrive from the server.
   * @param onDisconnect - The callback to be triggered when this tag holder is closed
   * @param urlFn - A function that provides the URL of the endpoint to send data to.
   */
  function FirebaseIFrameScriptHolder(commandCB, onMessageCB, onDisconnect, urlFn) {
    this.onDisconnect = onDisconnect;
    this.urlFn = urlFn; //We maintain a count of all of the outstanding requests, because if we have too many active at once it can cause
    //problems in some browsers.

    this.outstandingRequests = new Set(); //A queue of the pending segments waiting for transmission to the server.

    this.pendingSegs = []; //A serial number. We use this for two things:
    // 1) A way to ensure the browser doesn't cache responses to polls
    // 2) A way to make the server aware when long-polls arrive in a different order than we started them. The
    //    server needs to release both polls in this case or it will cause problems in Opera since Opera can only execute
    //    JSONP code in the order it was added to the iframe.

    this.currentSerial = Math.floor(Math.random() * 100000000); // This gets set to false when we're "closing down" the connection (e.g. we're switching transports but there's still
    // incoming data from the server that we're waiting for).

    this.sendNewPolls = true;

    if (!Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["isNodeSdk"])()) {
      //Each script holder registers a couple of uniquely named callbacks with the window. These are called from the
      //iframes where we put the long-polling script tags. We have two callbacks:
      //   1) Command Callback - Triggered for control issues, like starting a connection.
      //   2) Message Callback - Triggered when new data arrives.
      this.uniqueCallbackIdentifier = LUIDGenerator();
      window[FIREBASE_LONGPOLL_COMMAND_CB_NAME + this.uniqueCallbackIdentifier] = commandCB;
      window[FIREBASE_LONGPOLL_DATA_CB_NAME + this.uniqueCallbackIdentifier] = onMessageCB; //Create an iframe for us to add script tags to.

      this.myIFrame = FirebaseIFrameScriptHolder.createIFrame_(); // Set the iframe's contents.

      var script = ''; // if we set a javascript url, it's IE and we need to set the document domain. The javascript url is sufficient
      // for ie9, but ie8 needs to do it again in the document itself.

      if (this.myIFrame.src && this.myIFrame.src.substr(0, 'javascript:'.length) === 'javascript:') {
        var currentDomain = document.domain;
        script = '<script>document.domain="' + currentDomain + '";</script>';
      }

      var iframeContents = '<html><body>' + script + '</body></html>';

      try {
        this.myIFrame.doc.open();
        this.myIFrame.doc.write(iframeContents);
        this.myIFrame.doc.close();
      } catch (e) {
        log('frame writing exception');

        if (e.stack) {
          log(e.stack);
        }

        log(e);
      }
    } else {
      this.commandCB = commandCB;
      this.onMessageCB = onMessageCB;
    }
  }
  /**
   * Each browser has its own funny way to handle iframes. Here we mush them all together into one object that I can
   * actually use.
   */


  FirebaseIFrameScriptHolder.createIFrame_ = function () {
    var iframe = document.createElement('iframe');
    iframe.style.display = 'none'; // This is necessary in order to initialize the document inside the iframe

    if (document.body) {
      document.body.appendChild(iframe);

      try {
        // If document.domain has been modified in IE, this will throw an error, and we need to set the
        // domain of the iframe's document manually. We can do this via a javascript: url as the src attribute
        // Also note that we must do this *after* the iframe has been appended to the page. Otherwise it doesn't work.
        var a = iframe.contentWindow.document;

        if (!a) {
          // Apologies for the log-spam, I need to do something to keep closure from optimizing out the assignment above.
          log('No IE domain setting required');
        }
      } catch (e) {
        var domain = document.domain;
        iframe.src = "javascript:void((function(){document.open();document.domain='" + domain + "';document.close();})())";
      }
    } else {
      // LongPollConnection attempts to delay initialization until the document is ready, so hopefully this
      // never gets hit.
      throw 'Document body has not initialized. Wait to initialize Firebase until after the document is ready.';
    } // Get the document of the iframe in a browser-specific way.


    if (iframe.contentDocument) {
      iframe.doc = iframe.contentDocument; // Firefox, Opera, Safari
    } else if (iframe.contentWindow) {
      iframe.doc = iframe.contentWindow.document; // Internet Explorer
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } else if (iframe.document) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      iframe.doc = iframe.document; //others?
    }

    return iframe;
  };
  /**
   * Cancel all outstanding queries and remove the frame.
   */


  FirebaseIFrameScriptHolder.prototype.close = function () {
    var _this = this; //Mark this iframe as dead, so no new requests are sent.


    this.alive = false;

    if (this.myIFrame) {
      //We have to actually remove all of the html inside this iframe before removing it from the
      //window, or IE will continue loading and executing the script tags we've already added, which
      //can lead to some errors being thrown. Setting innerHTML seems to be the easiest way to do this.
      this.myIFrame.doc.body.innerHTML = '';
      setTimeout(function () {
        if (_this.myIFrame !== null) {
          document.body.removeChild(_this.myIFrame);
          _this.myIFrame = null;
        }
      }, Math.floor(0));
    } // Protect from being called recursively.


    var onDisconnect = this.onDisconnect;

    if (onDisconnect) {
      this.onDisconnect = null;
      onDisconnect();
    }
  };
  /**
   * Actually start the long-polling session by adding the first script tag(s) to the iframe.
   * @param id - The ID of this connection
   * @param pw - The password for this connection
   */


  FirebaseIFrameScriptHolder.prototype.startLongPoll = function (id, pw) {
    this.myID = id;
    this.myPW = pw;
    this.alive = true; //send the initial request. If there are requests queued, make sure that we transmit as many as we are currently able to.

    while (this.newRequest_()) {}
  };
  /**
   * This is called any time someone might want a script tag to be added. It adds a script tag when there aren't
   * too many outstanding requests and we are still alive.
   *
   * If there are outstanding packet segments to send, it sends one. If there aren't, it sends a long-poll anyways if
   * needed.
   */


  FirebaseIFrameScriptHolder.prototype.newRequest_ = function () {
    // We keep one outstanding request open all the time to receive data, but if we need to send data
    // (pendingSegs.length > 0) then we create a new request to send the data.  The server will automatically
    // close the old request.
    if (this.alive && this.sendNewPolls && this.outstandingRequests.size < (this.pendingSegs.length > 0 ? 2 : 1)) {
      //construct our url
      this.currentSerial++;
      var urlParams = {};
      urlParams[FIREBASE_LONGPOLL_ID_PARAM] = this.myID;
      urlParams[FIREBASE_LONGPOLL_PW_PARAM] = this.myPW;
      urlParams[FIREBASE_LONGPOLL_SERIAL_PARAM] = this.currentSerial;
      var theURL = this.urlFn(urlParams); //Now add as much data as we can.

      var curDataString = '';
      var i = 0;

      while (this.pendingSegs.length > 0) {
        //first, lets see if the next segment will fit.
        var nextSeg = this.pendingSegs[0];

        if (nextSeg.d.length + SEG_HEADER_SIZE + curDataString.length <= MAX_URL_DATA_SIZE) {
          //great, the segment will fit. Lets append it.
          var theSeg = this.pendingSegs.shift();
          curDataString = curDataString + '&' + FIREBASE_LONGPOLL_SEGMENT_NUM_PARAM + i + '=' + theSeg.seg + '&' + FIREBASE_LONGPOLL_SEGMENTS_IN_PACKET + i + '=' + theSeg.ts + '&' + FIREBASE_LONGPOLL_DATA_PARAM + i + '=' + theSeg.d;
          i++;
        } else {
          break;
        }
      }

      theURL = theURL + curDataString;
      this.addLongPollTag_(theURL, this.currentSerial);
      return true;
    } else {
      return false;
    }
  };
  /**
   * Queue a packet for transmission to the server.
   * @param segnum - A sequential id for this packet segment used for reassembly
   * @param totalsegs - The total number of segments in this packet
   * @param data - The data for this segment.
   */


  FirebaseIFrameScriptHolder.prototype.enqueueSegment = function (segnum, totalsegs, data) {
    //add this to the queue of segments to send.
    this.pendingSegs.push({
      seg: segnum,
      ts: totalsegs,
      d: data
    }); //send the data immediately if there isn't already data being transmitted, unless
    //startLongPoll hasn't been called yet.

    if (this.alive) {
      this.newRequest_();
    }
  };
  /**
   * Add a script tag for a regular long-poll request.
   * @param url - The URL of the script tag.
   * @param serial - The serial number of the request.
   */


  FirebaseIFrameScriptHolder.prototype.addLongPollTag_ = function (url, serial) {
    var _this = this; //remember that we sent this request.


    this.outstandingRequests.add(serial);

    var doNewRequest = function doNewRequest() {
      _this.outstandingRequests.delete(serial);

      _this.newRequest_();
    }; // If this request doesn't return on its own accord (by the server sending us some data), we'll
    // create a new one after the KEEPALIVE interval to make sure we always keep a fresh request open.


    var keepaliveTimeout = setTimeout(doNewRequest, Math.floor(KEEPALIVE_REQUEST_INTERVAL));

    var readyStateCB = function readyStateCB() {
      // Request completed.  Cancel the keepalive.
      clearTimeout(keepaliveTimeout); // Trigger a new request so we can continue receiving data.

      doNewRequest();
    };

    this.addTag(url, readyStateCB);
  };
  /**
   * Add an arbitrary script tag to the iframe.
   * @param url - The URL for the script tag source.
   * @param loadCB - A callback to be triggered once the script has loaded.
   */


  FirebaseIFrameScriptHolder.prototype.addTag = function (url, loadCB) {
    var _this = this;

    if (Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["isNodeSdk"])()) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.doNodeLongPoll(url, loadCB);
    } else {
      setTimeout(function () {
        try {
          // if we're already closed, don't add this poll
          if (!_this.sendNewPolls) {
            return;
          }

          var newScript_1 = _this.myIFrame.doc.createElement('script');

          newScript_1.type = 'text/javascript';
          newScript_1.async = true;
          newScript_1.src = url; // eslint-disable-next-line @typescript-eslint/no-explicit-any

          newScript_1.onload = newScript_1.onreadystatechange = function () {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var rstate = newScript_1.readyState;

            if (!rstate || rstate === 'loaded' || rstate === 'complete') {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              newScript_1.onload = newScript_1.onreadystatechange = null;

              if (newScript_1.parentNode) {
                newScript_1.parentNode.removeChild(newScript_1);
              }

              loadCB();
            }
          };

          newScript_1.onerror = function () {
            log('Long-poll script failed to load: ' + url);
            _this.sendNewPolls = false;

            _this.close();
          };

          _this.myIFrame.doc.body.appendChild(newScript_1);
        } catch (e) {// TODO: we should make this error visible somehow
        }
      }, Math.floor(1));
    }
  };

  return FirebaseIFrameScriptHolder;
}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** The semver (www.semver.org) version of the SDK. */


var SDK_VERSION = ''; // SDK_VERSION should be set before any database instance is created

function setSDKVersion(version) {
  SDK_VERSION = version;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var WEBSOCKET_MAX_FRAME_SIZE = 16384;
var WEBSOCKET_KEEPALIVE_INTERVAL = 45000;
var WebSocketImpl = null;

if (typeof MozWebSocket !== 'undefined') {
  WebSocketImpl = MozWebSocket;
} else if (typeof WebSocket !== 'undefined') {
  WebSocketImpl = WebSocket;
}
/**
 * Create a new websocket connection with the given callbacks.
 */


var WebSocketConnection =
/** @class */
function () {
  /**
   * @param connId identifier for this transport
   * @param repoInfo The info for the websocket endpoint.
   * @param applicationId The Firebase App ID for this project.
   * @param transportSessionId Optional transportSessionId if this is connecting to an existing transport
   *                                         session
   * @param lastSessionId Optional lastSessionId if there was a previous connection
   */
  function WebSocketConnection(connId, repoInfo, applicationId, transportSessionId, lastSessionId) {
    this.connId = connId;
    this.applicationId = applicationId;
    this.keepaliveTimer = null;
    this.frames = null;
    this.totalFrames = 0;
    this.bytesSent = 0;
    this.bytesReceived = 0;
    this.log_ = logWrapper(this.connId);
    this.stats_ = StatsManager.getCollection(repoInfo);
    this.connURL = WebSocketConnection.connectionURL_(repoInfo, transportSessionId, lastSessionId);
    this.nodeAdmin = repoInfo.nodeAdmin;
  }
  /**
   * @param repoInfo The info for the websocket endpoint.
   * @param transportSessionId Optional transportSessionId if this is connecting to an existing transport
   *                                         session
   * @param lastSessionId Optional lastSessionId if there was a previous connection
   * @return connection url
   */


  WebSocketConnection.connectionURL_ = function (repoInfo, transportSessionId, lastSessionId) {
    var urlParams = {};
    urlParams[VERSION_PARAM] = PROTOCOL_VERSION;

    if (!Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["isNodeSdk"])() && typeof location !== 'undefined' && location.hostname && FORGE_DOMAIN_RE.test(location.hostname)) {
      urlParams[REFERER_PARAM] = FORGE_REF;
    }

    if (transportSessionId) {
      urlParams[TRANSPORT_SESSION_PARAM] = transportSessionId;
    }

    if (lastSessionId) {
      urlParams[LAST_SESSION_PARAM] = lastSessionId;
    }

    return repoInfo.connectionURL(WEBSOCKET, urlParams);
  };
  /**
   * @param onMessage Callback when messages arrive
   * @param onDisconnect Callback with connection lost.
   */


  WebSocketConnection.prototype.open = function (onMessage, onDisconnect) {
    var _this = this;

    this.onDisconnect = onDisconnect;
    this.onMessage = onMessage;
    this.log_('Websocket connecting to ' + this.connURL);
    this.everConnected_ = false; // Assume failure until proven otherwise.

    PersistentStorage.set('previous_websocket_failure', true);

    try {
      if (Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["isNodeSdk"])()) {
        var device = this.nodeAdmin ? 'AdminNode' : 'Node'; // UA Format: Firebase/<wire_protocol>/<sdk_version>/<platform>/<device>

        var options = {
          headers: {
            'User-Agent': "Firebase/" + PROTOCOL_VERSION + "/" + SDK_VERSION + "/" + process.platform + "/" + device,
            'X-Firebase-GMPID': this.applicationId || ''
          }
        }; // Plumb appropriate http_proxy environment variable into faye-websocket if it exists.

        var env = process['env'];
        var proxy = this.connURL.indexOf('wss://') === 0 ? env['HTTPS_PROXY'] || env['https_proxy'] : env['HTTP_PROXY'] || env['http_proxy'];

        if (proxy) {
          options['proxy'] = {
            origin: proxy
          };
        }

        this.mySock = new WebSocketImpl(this.connURL, [], options);
      } else {
        var options = {
          headers: {
            'X-Firebase-GMPID': this.applicationId || ''
          }
        };
        this.mySock = new WebSocketImpl(this.connURL, [], options);
      }
    } catch (e) {
      this.log_('Error instantiating WebSocket.');
      var error = e.message || e.data;

      if (error) {
        this.log_(error);
      }

      this.onClosed_();
      return;
    }

    this.mySock.onopen = function () {
      _this.log_('Websocket connected.');

      _this.everConnected_ = true;
    };

    this.mySock.onclose = function () {
      _this.log_('Websocket connection was disconnected.');

      _this.mySock = null;

      _this.onClosed_();
    };

    this.mySock.onmessage = function (m) {
      _this.handleIncomingFrame(m);
    };

    this.mySock.onerror = function (e) {
      _this.log_('WebSocket error.  Closing connection.'); // eslint-disable-next-line @typescript-eslint/no-explicit-any


      var error = e.message || e.data;

      if (error) {
        _this.log_(error);
      }

      _this.onClosed_();
    };
  };
  /**
   * No-op for websockets, we don't need to do anything once the connection is confirmed as open
   */


  WebSocketConnection.prototype.start = function () {};

  WebSocketConnection.forceDisallow = function () {
    WebSocketConnection.forceDisallow_ = true;
  };

  WebSocketConnection.isAvailable = function () {
    var isOldAndroid = false;

    if (typeof navigator !== 'undefined' && navigator.userAgent) {
      var oldAndroidRegex = /Android ([0-9]{0,}\.[0-9]{0,})/;
      var oldAndroidMatch = navigator.userAgent.match(oldAndroidRegex);

      if (oldAndroidMatch && oldAndroidMatch.length > 1) {
        if (parseFloat(oldAndroidMatch[1]) < 4.4) {
          isOldAndroid = true;
        }
      }
    }

    return !isOldAndroid && WebSocketImpl !== null && !WebSocketConnection.forceDisallow_;
  };
  /**
   * Returns true if we previously failed to connect with this transport.
   */


  WebSocketConnection.previouslyFailed = function () {
    // If our persistent storage is actually only in-memory storage,
    // we default to assuming that it previously failed to be safe.
    return PersistentStorage.isInMemoryStorage || PersistentStorage.get('previous_websocket_failure') === true;
  };

  WebSocketConnection.prototype.markConnectionHealthy = function () {
    PersistentStorage.remove('previous_websocket_failure');
  };

  WebSocketConnection.prototype.appendFrame_ = function (data) {
    this.frames.push(data);

    if (this.frames.length === this.totalFrames) {
      var fullMess = this.frames.join('');
      this.frames = null;
      var jsonMess = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["jsonEval"])(fullMess); //handle the message

      this.onMessage(jsonMess);
    }
  };
  /**
   * @param frameCount The number of frames we are expecting from the server
   */


  WebSocketConnection.prototype.handleNewFrameCount_ = function (frameCount) {
    this.totalFrames = frameCount;
    this.frames = [];
  };
  /**
   * Attempts to parse a frame count out of some text. If it can't, assumes a value of 1
   * @return Any remaining data to be process, or null if there is none
   */


  WebSocketConnection.prototype.extractFrameCount_ = function (data) {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(this.frames === null, 'We already have a frame buffer'); // TODO: The server is only supposed to send up to 9999 frames (i.e. length <= 4), but that isn't being enforced
    // currently.  So allowing larger frame counts (length <= 6).  See https://app.asana.com/0/search/8688598998380/8237608042508

    if (data.length <= 6) {
      var frameCount = Number(data);

      if (!isNaN(frameCount)) {
        this.handleNewFrameCount_(frameCount);
        return null;
      }
    }

    this.handleNewFrameCount_(1);
    return data;
  };
  /**
   * Process a websocket frame that has arrived from the server.
   * @param mess The frame data
   */


  WebSocketConnection.prototype.handleIncomingFrame = function (mess) {
    if (this.mySock === null) {
      return; // Chrome apparently delivers incoming packets even after we .close() the connection sometimes.
    }

    var data = mess['data'];
    this.bytesReceived += data.length;
    this.stats_.incrementCounter('bytes_received', data.length);
    this.resetKeepAlive();

    if (this.frames !== null) {
      // we're buffering
      this.appendFrame_(data);
    } else {
      // try to parse out a frame count, otherwise, assume 1 and process it
      var remainingData = this.extractFrameCount_(data);

      if (remainingData !== null) {
        this.appendFrame_(remainingData);
      }
    }
  };
  /**
   * Send a message to the server
   * @param data The JSON object to transmit
   */


  WebSocketConnection.prototype.send = function (data) {
    this.resetKeepAlive();
    var dataStr = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["stringify"])(data);
    this.bytesSent += dataStr.length;
    this.stats_.incrementCounter('bytes_sent', dataStr.length); //We can only fit a certain amount in each websocket frame, so we need to split this request
    //up into multiple pieces if it doesn't fit in one request.

    var dataSegs = splitStringBySize(dataStr, WEBSOCKET_MAX_FRAME_SIZE); //Send the length header

    if (dataSegs.length > 1) {
      this.sendString_(String(dataSegs.length));
    } //Send the actual data in segments.


    for (var i = 0; i < dataSegs.length; i++) {
      this.sendString_(dataSegs[i]);
    }
  };

  WebSocketConnection.prototype.shutdown_ = function () {
    this.isClosed_ = true;

    if (this.keepaliveTimer) {
      clearInterval(this.keepaliveTimer);
      this.keepaliveTimer = null;
    }

    if (this.mySock) {
      this.mySock.close();
      this.mySock = null;
    }
  };

  WebSocketConnection.prototype.onClosed_ = function () {
    if (!this.isClosed_) {
      this.log_('WebSocket is closing itself');
      this.shutdown_(); // since this is an internal close, trigger the close listener

      if (this.onDisconnect) {
        this.onDisconnect(this.everConnected_);
        this.onDisconnect = null;
      }
    }
  };
  /**
   * External-facing close handler.
   * Close the websocket and kill the connection.
   */


  WebSocketConnection.prototype.close = function () {
    if (!this.isClosed_) {
      this.log_('WebSocket is being closed');
      this.shutdown_();
    }
  };
  /**
   * Kill the current keepalive timer and start a new one, to ensure that it always fires N seconds after
   * the last activity.
   */


  WebSocketConnection.prototype.resetKeepAlive = function () {
    var _this = this;

    clearInterval(this.keepaliveTimer);
    this.keepaliveTimer = setInterval(function () {
      //If there has been no websocket activity for a while, send a no-op
      if (_this.mySock) {
        _this.sendString_('0');
      }

      _this.resetKeepAlive(); // eslint-disable-next-line @typescript-eslint/no-explicit-any

    }, Math.floor(WEBSOCKET_KEEPALIVE_INTERVAL));
  };
  /**
   * Send a string over the websocket.
   *
   * @param str String to send.
   */


  WebSocketConnection.prototype.sendString_ = function (str) {
    // Firefox seems to sometimes throw exceptions (NS_ERROR_UNEXPECTED) from websocket .send()
    // calls for some unknown reason.  We treat these as an error and disconnect.
    // See https://app.asana.com/0/58926111402292/68021340250410
    try {
      this.mySock.send(str);
    } catch (e) {
      this.log_('Exception thrown from WebSocket.send():', e.message || e.data, 'Closing connection.');
      setTimeout(this.onClosed_.bind(this), 0);
    }
  };
  /**
   * Number of response before we consider the connection "healthy."
   */


  WebSocketConnection.responsesRequiredToBeHealthy = 2;
  /**
   * Time to wait for the connection te become healthy before giving up.
   */

  WebSocketConnection.healthyTimeout = 30000;
  return WebSocketConnection;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Currently simplistic, this class manages what transport a Connection should use at various stages of its
 * lifecycle.
 *
 * It starts with longpolling in a browser, and httppolling on node. It then upgrades to websockets if
 * they are available.
 */


var TransportManager =
/** @class */
function () {
  /**
   * @param repoInfo Metadata around the namespace we're connecting to
   */
  function TransportManager(repoInfo) {
    this.initTransports_(repoInfo);
  }

  Object.defineProperty(TransportManager, "ALL_TRANSPORTS", {
    get: function get() {
      return [BrowserPollConnection, WebSocketConnection];
    },
    enumerable: false,
    configurable: true
  });

  TransportManager.prototype.initTransports_ = function (repoInfo) {
    var e_1, _a;

    var isWebSocketsAvailable = WebSocketConnection && WebSocketConnection['isAvailable']();
    var isSkipPollConnection = isWebSocketsAvailable && !WebSocketConnection.previouslyFailed();

    if (repoInfo.webSocketOnly) {
      if (!isWebSocketsAvailable) {
        warn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway.");
      }

      isSkipPollConnection = true;
    }

    if (isSkipPollConnection) {
      this.transports_ = [WebSocketConnection];
    } else {
      var transports = this.transports_ = [];

      try {
        for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(TransportManager.ALL_TRANSPORTS), _c = _b.next(); !_c.done; _c = _b.next()) {
          var transport = _c.value;

          if (transport && transport['isAvailable']()) {
            transports.push(transport);
          }
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
    }
  };
  /**
   * @return The constructor for the initial transport to use
   */


  TransportManager.prototype.initialTransport = function () {
    if (this.transports_.length > 0) {
      return this.transports_[0];
    } else {
      throw new Error('No transports available');
    }
  };
  /**
   * @return The constructor for the next transport, or null
   */


  TransportManager.prototype.upgradeTransport = function () {
    if (this.transports_.length > 1) {
      return this.transports_[1];
    } else {
      return null;
    }
  };

  return TransportManager;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Abort upgrade attempt if it takes longer than 60s.


var UPGRADE_TIMEOUT = 60000; // For some transports (WebSockets), we need to "validate" the transport by exchanging a few requests and responses.
// If we haven't sent enough requests within 5s, we'll start sending noop ping requests.

var DELAY_BEFORE_SENDING_EXTRA_REQUESTS = 5000; // If the initial data sent triggers a lot of bandwidth (i.e. it's a large put or a listen for a large amount of data)
// then we may not be able to exchange our ping/pong requests within the healthy timeout.  So if we reach the timeout
// but we've sent/received enough bytes, we don't cancel the connection.

var BYTES_SENT_HEALTHY_OVERRIDE = 10 * 1024;
var BYTES_RECEIVED_HEALTHY_OVERRIDE = 100 * 1024;
var MESSAGE_TYPE = 't';
var MESSAGE_DATA = 'd';
var CONTROL_SHUTDOWN = 's';
var CONTROL_RESET = 'r';
var CONTROL_ERROR = 'e';
var CONTROL_PONG = 'o';
var SWITCH_ACK = 'a';
var END_TRANSMISSION = 'n';
var PING = 'p';
var SERVER_HELLO = 'h';
/**
 * Creates a new real-time connection to the server using whichever method works
 * best in the current browser.
 */

var Connection =
/** @class */
function () {
  /**
   * @param id - an id for this connection
   * @param repoInfo_ - the info for the endpoint to connect to
   * @param applicationId_ - the Firebase App ID for this project
   * @param onMessage_ - the callback to be triggered when a server-push message arrives
   * @param onReady_ - the callback to be triggered when this connection is ready to send messages.
   * @param onDisconnect_ - the callback to be triggered when a connection was lost
   * @param onKill_ - the callback to be triggered when this connection has permanently shut down.
   * @param lastSessionId - last session id in persistent connection. is used to clean up old session in real-time server
   */
  function Connection(id, repoInfo_, applicationId_, onMessage_, onReady_, onDisconnect_, onKill_, lastSessionId) {
    this.id = id;
    this.repoInfo_ = repoInfo_;
    this.applicationId_ = applicationId_;
    this.onMessage_ = onMessage_;
    this.onReady_ = onReady_;
    this.onDisconnect_ = onDisconnect_;
    this.onKill_ = onKill_;
    this.lastSessionId = lastSessionId;
    this.connectionCount = 0;
    this.pendingDataMessages = [];
    this.state_ = 0
    /* CONNECTING */
    ;
    this.log_ = logWrapper('c:' + this.id + ':');
    this.transportManager_ = new TransportManager(repoInfo_);
    this.log_('Connection created');
    this.start_();
  }
  /**
   * Starts a connection attempt
   */


  Connection.prototype.start_ = function () {
    var _this = this;

    var conn = this.transportManager_.initialTransport();
    this.conn_ = new conn(this.nextTransportId_(), this.repoInfo_, this.applicationId_, undefined, this.lastSessionId); // For certain transports (WebSockets), we need to send and receive several messages back and forth before we
    // can consider the transport healthy.

    this.primaryResponsesRequired_ = conn['responsesRequiredToBeHealthy'] || 0;
    var onMessageReceived = this.connReceiver_(this.conn_);
    var onConnectionLost = this.disconnReceiver_(this.conn_);
    this.tx_ = this.conn_;
    this.rx_ = this.conn_;
    this.secondaryConn_ = null;
    this.isHealthy_ = false;
    /*
     * Firefox doesn't like when code from one iframe tries to create another iframe by way of the parent frame.
     * This can occur in the case of a redirect, i.e. we guessed wrong on what server to connect to and received a reset.
     * Somehow, setTimeout seems to make this ok. That doesn't make sense from a security perspective, since you should
     * still have the context of your originating frame.
     */

    setTimeout(function () {
      // this.conn_ gets set to null in some of the tests. Check to make sure it still exists before using it
      _this.conn_ && _this.conn_.open(onMessageReceived, onConnectionLost);
    }, Math.floor(0));
    var healthyTimeoutMS = conn['healthyTimeout'] || 0;

    if (healthyTimeoutMS > 0) {
      this.healthyTimeout_ = setTimeoutNonBlocking(function () {
        _this.healthyTimeout_ = null;

        if (!_this.isHealthy_) {
          if (_this.conn_ && _this.conn_.bytesReceived > BYTES_RECEIVED_HEALTHY_OVERRIDE) {
            _this.log_('Connection exceeded healthy timeout but has received ' + _this.conn_.bytesReceived + ' bytes.  Marking connection healthy.');

            _this.isHealthy_ = true;

            _this.conn_.markConnectionHealthy();
          } else if (_this.conn_ && _this.conn_.bytesSent > BYTES_SENT_HEALTHY_OVERRIDE) {
            _this.log_('Connection exceeded healthy timeout but has sent ' + _this.conn_.bytesSent + ' bytes.  Leaving connection alive.'); // NOTE: We don't want to mark it healthy, since we have no guarantee that the bytes have made it to
            // the server.

          } else {
            _this.log_('Closing unhealthy connection after timeout.');

            _this.close();
          }
        } // eslint-disable-next-line @typescript-eslint/no-explicit-any

      }, Math.floor(healthyTimeoutMS));
    }
  };

  Connection.prototype.nextTransportId_ = function () {
    return 'c:' + this.id + ':' + this.connectionCount++;
  };

  Connection.prototype.disconnReceiver_ = function (conn) {
    var _this = this;

    return function (everConnected) {
      if (conn === _this.conn_) {
        _this.onConnectionLost_(everConnected);
      } else if (conn === _this.secondaryConn_) {
        _this.log_('Secondary connection lost.');

        _this.onSecondaryConnectionLost_();
      } else {
        _this.log_('closing an old connection');
      }
    };
  };

  Connection.prototype.connReceiver_ = function (conn) {
    var _this = this;

    return function (message) {
      if (_this.state_ !== 2
      /* DISCONNECTED */
      ) {
          if (conn === _this.rx_) {
            _this.onPrimaryMessageReceived_(message);
          } else if (conn === _this.secondaryConn_) {
            _this.onSecondaryMessageReceived_(message);
          } else {
            _this.log_('message on old connection');
          }
        }
    };
  };
  /**
   * @param dataMsg An arbitrary data message to be sent to the server
   */


  Connection.prototype.sendRequest = function (dataMsg) {
    // wrap in a data message envelope and send it on
    var msg = {
      t: 'd',
      d: dataMsg
    };
    this.sendData_(msg);
  };

  Connection.prototype.tryCleanupConnection = function () {
    if (this.tx_ === this.secondaryConn_ && this.rx_ === this.secondaryConn_) {
      this.log_('cleaning up and promoting a connection: ' + this.secondaryConn_.connId);
      this.conn_ = this.secondaryConn_;
      this.secondaryConn_ = null; // the server will shutdown the old connection
    }
  };

  Connection.prototype.onSecondaryControl_ = function (controlData) {
    if (MESSAGE_TYPE in controlData) {
      var cmd = controlData[MESSAGE_TYPE];

      if (cmd === SWITCH_ACK) {
        this.upgradeIfSecondaryHealthy_();
      } else if (cmd === CONTROL_RESET) {
        // Most likely the session wasn't valid. Abandon the switch attempt
        this.log_('Got a reset on secondary, closing it');
        this.secondaryConn_.close(); // If we were already using this connection for something, than we need to fully close

        if (this.tx_ === this.secondaryConn_ || this.rx_ === this.secondaryConn_) {
          this.close();
        }
      } else if (cmd === CONTROL_PONG) {
        this.log_('got pong on secondary.');
        this.secondaryResponsesRequired_--;
        this.upgradeIfSecondaryHealthy_();
      }
    }
  };

  Connection.prototype.onSecondaryMessageReceived_ = function (parsedData) {
    var layer = requireKey('t', parsedData);
    var data = requireKey('d', parsedData);

    if (layer === 'c') {
      this.onSecondaryControl_(data);
    } else if (layer === 'd') {
      // got a data message, but we're still second connection. Need to buffer it up
      this.pendingDataMessages.push(data);
    } else {
      throw new Error('Unknown protocol layer: ' + layer);
    }
  };

  Connection.prototype.upgradeIfSecondaryHealthy_ = function () {
    if (this.secondaryResponsesRequired_ <= 0) {
      this.log_('Secondary connection is healthy.');
      this.isHealthy_ = true;
      this.secondaryConn_.markConnectionHealthy();
      this.proceedWithUpgrade_();
    } else {
      // Send a ping to make sure the connection is healthy.
      this.log_('sending ping on secondary.');
      this.secondaryConn_.send({
        t: 'c',
        d: {
          t: PING,
          d: {}
        }
      });
    }
  };

  Connection.prototype.proceedWithUpgrade_ = function () {
    // tell this connection to consider itself open
    this.secondaryConn_.start(); // send ack

    this.log_('sending client ack on secondary');
    this.secondaryConn_.send({
      t: 'c',
      d: {
        t: SWITCH_ACK,
        d: {}
      }
    }); // send end packet on primary transport, switch to sending on this one
    // can receive on this one, buffer responses until end received on primary transport

    this.log_('Ending transmission on primary');
    this.conn_.send({
      t: 'c',
      d: {
        t: END_TRANSMISSION,
        d: {}
      }
    });
    this.tx_ = this.secondaryConn_;
    this.tryCleanupConnection();
  };

  Connection.prototype.onPrimaryMessageReceived_ = function (parsedData) {
    // Must refer to parsedData properties in quotes, so closure doesn't touch them.
    var layer = requireKey('t', parsedData);
    var data = requireKey('d', parsedData);

    if (layer === 'c') {
      this.onControl_(data);
    } else if (layer === 'd') {
      this.onDataMessage_(data);
    }
  };

  Connection.prototype.onDataMessage_ = function (message) {
    this.onPrimaryResponse_(); // We don't do anything with data messages, just kick them up a level

    this.onMessage_(message);
  };

  Connection.prototype.onPrimaryResponse_ = function () {
    if (!this.isHealthy_) {
      this.primaryResponsesRequired_--;

      if (this.primaryResponsesRequired_ <= 0) {
        this.log_('Primary connection is healthy.');
        this.isHealthy_ = true;
        this.conn_.markConnectionHealthy();
      }
    }
  };

  Connection.prototype.onControl_ = function (controlData) {
    var cmd = requireKey(MESSAGE_TYPE, controlData);

    if (MESSAGE_DATA in controlData) {
      var payload = controlData[MESSAGE_DATA];

      if (cmd === SERVER_HELLO) {
        this.onHandshake_(payload);
      } else if (cmd === END_TRANSMISSION) {
        this.log_('recvd end transmission on primary');
        this.rx_ = this.secondaryConn_;

        for (var i = 0; i < this.pendingDataMessages.length; ++i) {
          this.onDataMessage_(this.pendingDataMessages[i]);
        }

        this.pendingDataMessages = [];
        this.tryCleanupConnection();
      } else if (cmd === CONTROL_SHUTDOWN) {
        // This was previously the 'onKill' callback passed to the lower-level connection
        // payload in this case is the reason for the shutdown. Generally a human-readable error
        this.onConnectionShutdown_(payload);
      } else if (cmd === CONTROL_RESET) {
        // payload in this case is the host we should contact
        this.onReset_(payload);
      } else if (cmd === CONTROL_ERROR) {
        error('Server Error: ' + payload);
      } else if (cmd === CONTROL_PONG) {
        this.log_('got pong on primary.');
        this.onPrimaryResponse_();
        this.sendPingOnPrimaryIfNecessary_();
      } else {
        error('Unknown control packet command: ' + cmd);
      }
    }
  };
  /**
   * @param handshake The handshake data returned from the server
   */


  Connection.prototype.onHandshake_ = function (handshake) {
    var timestamp = handshake.ts;
    var version = handshake.v;
    var host = handshake.h;
    this.sessionId = handshake.s;
    this.repoInfo_.updateHost(host); // if we've already closed the connection, then don't bother trying to progress further

    if (this.state_ === 0
    /* CONNECTING */
    ) {
        this.conn_.start();
        this.onConnectionEstablished_(this.conn_, timestamp);

        if (PROTOCOL_VERSION !== version) {
          warn('Protocol version mismatch detected');
        } // TODO: do we want to upgrade? when? maybe a delay?


        this.tryStartUpgrade_();
      }
  };

  Connection.prototype.tryStartUpgrade_ = function () {
    var conn = this.transportManager_.upgradeTransport();

    if (conn) {
      this.startUpgrade_(conn);
    }
  };

  Connection.prototype.startUpgrade_ = function (conn) {
    var _this = this;

    this.secondaryConn_ = new conn(this.nextTransportId_(), this.repoInfo_, this.applicationId_, this.sessionId); // For certain transports (WebSockets), we need to send and receive several messages back and forth before we
    // can consider the transport healthy.

    this.secondaryResponsesRequired_ = conn['responsesRequiredToBeHealthy'] || 0;
    var onMessage = this.connReceiver_(this.secondaryConn_);
    var onDisconnect = this.disconnReceiver_(this.secondaryConn_);
    this.secondaryConn_.open(onMessage, onDisconnect); // If we haven't successfully upgraded after UPGRADE_TIMEOUT, give up and kill the secondary.

    setTimeoutNonBlocking(function () {
      if (_this.secondaryConn_) {
        _this.log_('Timed out trying to upgrade.');

        _this.secondaryConn_.close();
      }
    }, Math.floor(UPGRADE_TIMEOUT));
  };

  Connection.prototype.onReset_ = function (host) {
    this.log_('Reset packet received.  New host: ' + host);
    this.repoInfo_.updateHost(host); // TODO: if we're already "connected", we need to trigger a disconnect at the next layer up.
    // We don't currently support resets after the connection has already been established

    if (this.state_ === 1
    /* CONNECTED */
    ) {
        this.close();
      } else {
      // Close whatever connections we have open and start again.
      this.closeConnections_();
      this.start_();
    }
  };

  Connection.prototype.onConnectionEstablished_ = function (conn, timestamp) {
    var _this = this;

    this.log_('Realtime connection established.');
    this.conn_ = conn;
    this.state_ = 1
    /* CONNECTED */
    ;

    if (this.onReady_) {
      this.onReady_(timestamp, this.sessionId);
      this.onReady_ = null;
    } // If after 5 seconds we haven't sent enough requests to the server to get the connection healthy,
    // send some pings.


    if (this.primaryResponsesRequired_ === 0) {
      this.log_('Primary connection is healthy.');
      this.isHealthy_ = true;
    } else {
      setTimeoutNonBlocking(function () {
        _this.sendPingOnPrimaryIfNecessary_();
      }, Math.floor(DELAY_BEFORE_SENDING_EXTRA_REQUESTS));
    }
  };

  Connection.prototype.sendPingOnPrimaryIfNecessary_ = function () {
    // If the connection isn't considered healthy yet, we'll send a noop ping packet request.
    if (!this.isHealthy_ && this.state_ === 1
    /* CONNECTED */
    ) {
        this.log_('sending ping on primary.');
        this.sendData_({
          t: 'c',
          d: {
            t: PING,
            d: {}
          }
        });
      }
  };

  Connection.prototype.onSecondaryConnectionLost_ = function () {
    var conn = this.secondaryConn_;
    this.secondaryConn_ = null;

    if (this.tx_ === conn || this.rx_ === conn) {
      // we are relying on this connection already in some capacity. Therefore, a failure is real
      this.close();
    }
  };
  /**
   * @param everConnected Whether or not the connection ever reached a server. Used to determine if
   * we should flush the host cache
   */


  Connection.prototype.onConnectionLost_ = function (everConnected) {
    this.conn_ = null; // NOTE: IF you're seeing a Firefox error for this line, I think it might be because it's getting
    // called on window close and RealtimeState.CONNECTING is no longer defined.  Just a guess.

    if (!everConnected && this.state_ === 0
    /* CONNECTING */
    ) {
        this.log_('Realtime connection failed.'); // Since we failed to connect at all, clear any cached entry for this namespace in case the machine went away

        if (this.repoInfo_.isCacheableHost()) {
          PersistentStorage.remove('host:' + this.repoInfo_.host); // reset the internal host to what we would show the user, i.e. <ns>.firebaseio.com

          this.repoInfo_.internalHost = this.repoInfo_.host;
        }
      } else if (this.state_ === 1
    /* CONNECTED */
    ) {
        this.log_('Realtime connection lost.');
      }

    this.close();
  };

  Connection.prototype.onConnectionShutdown_ = function (reason) {
    this.log_('Connection shutdown command received. Shutting down...');

    if (this.onKill_) {
      this.onKill_(reason);
      this.onKill_ = null;
    } // We intentionally don't want to fire onDisconnect (kill is a different case),
    // so clear the callback.


    this.onDisconnect_ = null;
    this.close();
  };

  Connection.prototype.sendData_ = function (data) {
    if (this.state_ !== 1
    /* CONNECTED */
    ) {
        throw 'Connection is not connected';
      } else {
      this.tx_.send(data);
    }
  };
  /**
   * Cleans up this connection, calling the appropriate callbacks
   */


  Connection.prototype.close = function () {
    if (this.state_ !== 2
    /* DISCONNECTED */
    ) {
        this.log_('Closing realtime connection.');
        this.state_ = 2
        /* DISCONNECTED */
        ;
        this.closeConnections_();

        if (this.onDisconnect_) {
          this.onDisconnect_();
          this.onDisconnect_ = null;
        }
      }
  };

  Connection.prototype.closeConnections_ = function () {
    this.log_('Shutting down all connections');

    if (this.conn_) {
      this.conn_.close();
      this.conn_ = null;
    }

    if (this.secondaryConn_) {
      this.secondaryConn_.close();
      this.secondaryConn_ = null;
    }

    if (this.healthyTimeout_) {
      clearTimeout(this.healthyTimeout_);
      this.healthyTimeout_ = null;
    }
  };

  return Connection;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Interface defining the set of actions that can be performed against the Firebase server
 * (basically corresponds to our wire protocol).
 *
 * @interface
 */


var ServerActions =
/** @class */
function () {
  function ServerActions() {}

  ServerActions.prototype.put = function (pathString, data, onComplete, hash) {};

  ServerActions.prototype.merge = function (pathString, data, onComplete, hash) {};
  /**
   * Refreshes the auth token for the current connection.
   * @param token The authentication token
   */


  ServerActions.prototype.refreshAuthToken = function (token) {};

  ServerActions.prototype.onDisconnectPut = function (pathString, data, onComplete) {};

  ServerActions.prototype.onDisconnectMerge = function (pathString, data, onComplete) {};

  ServerActions.prototype.onDisconnectCancel = function (pathString, onComplete) {};

  ServerActions.prototype.reportStats = function (stats) {};

  return ServerActions;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var RECONNECT_MIN_DELAY = 1000;
var RECONNECT_MAX_DELAY_DEFAULT = 60 * 5 * 1000; // 5 minutes in milliseconds (Case: 1858)

var GET_CONNECT_TIMEOUT = 3 * 1000;
var RECONNECT_MAX_DELAY_FOR_ADMINS = 30 * 1000; // 30 seconds for admin clients (likely to be a backend server)

var RECONNECT_DELAY_MULTIPLIER = 1.3;
var RECONNECT_DELAY_RESET_TIMEOUT = 30000; // Reset delay back to MIN_DELAY after being connected for 30sec.

var SERVER_KILL_INTERRUPT_REASON = 'server_kill'; // If auth fails repeatedly, we'll assume something is wrong and log a warning / back off.

var INVALID_AUTH_TOKEN_THRESHOLD = 3;
/**
 * Firebase connection.  Abstracts wire protocol and handles reconnecting.
 *
 * NOTE: All JSON objects sent to the realtime connection must have property names enclosed
 * in quotes to make sure the closure compiler does not minify them.
 */

var PersistentConnection =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(PersistentConnection, _super);
  /**
   * @param repoInfo_ Data about the namespace we are connecting to
   * @param applicationId_ The Firebase App ID for this project
   * @param onDataUpdate_ A callback for new data from the server
   */


  function PersistentConnection(repoInfo_, applicationId_, onDataUpdate_, onConnectStatus_, onServerInfoUpdate_, authTokenProvider_, authOverride_) {
    var _this = _super.call(this) || this;

    _this.repoInfo_ = repoInfo_;
    _this.applicationId_ = applicationId_;
    _this.onDataUpdate_ = onDataUpdate_;
    _this.onConnectStatus_ = onConnectStatus_;
    _this.onServerInfoUpdate_ = onServerInfoUpdate_;
    _this.authTokenProvider_ = authTokenProvider_;
    _this.authOverride_ = authOverride_; // Used for diagnostic logging.

    _this.id = PersistentConnection.nextPersistentConnectionId_++;
    _this.log_ = logWrapper('p:' + _this.id + ':');
    _this.interruptReasons_ = {};
    /** Map<path, Map<queryId, ListenSpec>> */

    _this.listens = new Map();
    _this.outstandingPuts_ = [];
    _this.outstandingGets_ = [];
    _this.outstandingPutCount_ = 0;
    _this.outstandingGetCount_ = 0;
    _this.onDisconnectRequestQueue_ = [];
    _this.connected_ = false;
    _this.reconnectDelay_ = RECONNECT_MIN_DELAY;
    _this.maxReconnectDelay_ = RECONNECT_MAX_DELAY_DEFAULT;
    _this.securityDebugCallback_ = null;
    _this.lastSessionId = null;
    _this.establishConnectionTimer_ = null;
    _this.visible_ = false; // Before we get connected, we keep a queue of pending messages to send.

    _this.requestCBHash_ = {};
    _this.requestNumber_ = 0;
    _this.realtime_ = null;
    _this.authToken_ = null;
    _this.forceTokenRefresh_ = false;
    _this.invalidAuthTokenCount_ = 0;
    _this.firstConnection_ = true;
    _this.lastConnectionAttemptTime_ = null;
    _this.lastConnectionEstablishedTime_ = null;

    if (authOverride_ && !Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["isNodeSdk"])()) {
      throw new Error('Auth override specified in options, but not supported on non Node.js platforms');
    }

    _this.scheduleConnect_(0);

    VisibilityMonitor.getInstance().on('visible', _this.onVisible_, _this);

    if (repoInfo_.host.indexOf('fblocal') === -1) {
      OnlineMonitor.getInstance().on('online', _this.onOnline_, _this);
    }

    return _this;
  }

  PersistentConnection.prototype.sendRequest = function (action, body, onResponse) {
    var curReqNum = ++this.requestNumber_;
    var msg = {
      r: curReqNum,
      a: action,
      b: body
    };
    this.log_(Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["stringify"])(msg));
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(this.connected_, "sendRequest call when we're not connected not allowed.");
    this.realtime_.sendRequest(msg);

    if (onResponse) {
      this.requestCBHash_[curReqNum] = onResponse;
    }
  };

  PersistentConnection.prototype.get = function (query) {
    var _this = this;

    var deferred = new _firebase_util__WEBPACK_IMPORTED_MODULE_2__["Deferred"]();
    var request = {
      p: query.path.toString(),
      q: query.queryObject()
    };
    var outstandingGet = {
      action: 'g',
      request: request,
      onComplete: function onComplete(message) {
        var payload = message['d'];

        if (message['s'] === 'ok') {
          _this.onDataUpdate_(request['p'], payload,
          /*isMerge*/
          false,
          /*tag*/
          null);

          deferred.resolve(payload);
        } else {
          deferred.reject(payload);
        }
      }
    };
    this.outstandingGets_.push(outstandingGet);
    this.outstandingGetCount_++;
    var index = this.outstandingGets_.length - 1;

    if (!this.connected_) {
      setTimeout(function () {
        var get = _this.outstandingGets_[index];

        if (get === undefined || outstandingGet !== get) {
          return;
        }

        delete _this.outstandingGets_[index];
        _this.outstandingGetCount_--;

        if (_this.outstandingGetCount_ === 0) {
          _this.outstandingGets_ = [];
        }

        _this.log_('get ' + index + ' timed out on connection');

        deferred.reject(new Error('Client is offline.'));
      }, GET_CONNECT_TIMEOUT);
    }

    if (this.connected_) {
      this.sendGet_(index);
    }

    return deferred.promise;
  };
  /**
   * @inheritDoc
   */


  PersistentConnection.prototype.listen = function (query, currentHashFn, tag, onComplete) {
    var queryId = query.queryIdentifier();
    var pathString = query.path.toString();
    this.log_('Listen called for ' + pathString + ' ' + queryId);

    if (!this.listens.has(pathString)) {
      this.listens.set(pathString, new Map());
    }

    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(query.getQueryParams().isDefault() || !query.getQueryParams().loadsAllData(), 'listen() called for non-default but complete query');
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(!this.listens.get(pathString).has(queryId), 'listen() called twice for same path/queryId.');
    var listenSpec = {
      onComplete: onComplete,
      hashFn: currentHashFn,
      query: query,
      tag: tag
    };
    this.listens.get(pathString).set(queryId, listenSpec);

    if (this.connected_) {
      this.sendListen_(listenSpec);
    }
  };

  PersistentConnection.prototype.sendGet_ = function (index) {
    var _this = this;

    var get = this.outstandingGets_[index];
    this.sendRequest('g', get.request, function (message) {
      delete _this.outstandingGets_[index];
      _this.outstandingGetCount_--;

      if (_this.outstandingGetCount_ === 0) {
        _this.outstandingGets_ = [];
      }

      if (get.onComplete) {
        get.onComplete(message);
      }
    });
  };

  PersistentConnection.prototype.sendListen_ = function (listenSpec) {
    var _this = this;

    var query = listenSpec.query;
    var pathString = query.path.toString();
    var queryId = query.queryIdentifier();
    this.log_('Listen on ' + pathString + ' for ' + queryId);
    var req = {
      /*path*/
      p: pathString
    };
    var action = 'q'; // Only bother to send query if it's non-default.

    if (listenSpec.tag) {
      req['q'] = query.queryObject();
      req['t'] = listenSpec.tag;
    }

    req[
    /*hash*/
    'h'] = listenSpec.hashFn();
    this.sendRequest(action, req, function (message) {
      var payload = message[
      /*data*/
      'd'];
      var status = message[
      /*status*/
      's']; // print warnings in any case...

      PersistentConnection.warnOnListenWarnings_(payload, query);

      var currentListenSpec = _this.listens.get(pathString) && _this.listens.get(pathString).get(queryId); // only trigger actions if the listen hasn't been removed and readded


      if (currentListenSpec === listenSpec) {
        _this.log_('listen response', message);

        if (status !== 'ok') {
          _this.removeListen_(pathString, queryId);
        }

        if (listenSpec.onComplete) {
          listenSpec.onComplete(status, payload);
        }
      }
    });
  };

  PersistentConnection.warnOnListenWarnings_ = function (payload, query) {
    if (payload && typeof payload === 'object' && Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["contains"])(payload, 'w')) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      var warnings = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["safeGet"])(payload, 'w');

      if (Array.isArray(warnings) && ~warnings.indexOf('no_index')) {
        var indexSpec = '".indexOn": "' + query.getQueryParams().getIndex().toString() + '"';
        var indexPath = query.path.toString();
        warn("Using an unspecified index. Your data will be downloaded and " + ("filtered on the client. Consider adding " + indexSpec + " at ") + (indexPath + " to your security rules for better performance."));
      }
    }
  };
  /**
   * @inheritDoc
   */


  PersistentConnection.prototype.refreshAuthToken = function (token) {
    this.authToken_ = token;
    this.log_('Auth token refreshed');

    if (this.authToken_) {
      this.tryAuth();
    } else {
      //If we're connected we want to let the server know to unauthenticate us. If we're not connected, simply delete
      //the credential so we dont become authenticated next time we connect.
      if (this.connected_) {
        this.sendRequest('unauth', {}, function () {});
      }
    }

    this.reduceReconnectDelayIfAdminCredential_(token);
  };

  PersistentConnection.prototype.reduceReconnectDelayIfAdminCredential_ = function (credential) {
    // NOTE: This isn't intended to be bulletproof (a malicious developer can always just modify the client).
    // Additionally, we don't bother resetting the max delay back to the default if auth fails / expires.
    var isFirebaseSecret = credential && credential.length === 40;

    if (isFirebaseSecret || Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["isAdmin"])(credential)) {
      this.log_('Admin auth credential detected.  Reducing max reconnect time.');
      this.maxReconnectDelay_ = RECONNECT_MAX_DELAY_FOR_ADMINS;
    }
  };
  /**
   * Attempts to authenticate with the given credentials. If the authentication attempt fails, it's triggered like
   * a auth revoked (the connection is closed).
   */


  PersistentConnection.prototype.tryAuth = function () {
    var _this = this;

    if (this.connected_ && this.authToken_) {
      var token_1 = this.authToken_;
      var authMethod = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["isValidFormat"])(token_1) ? 'auth' : 'gauth';
      var requestData = {
        cred: token_1
      };

      if (this.authOverride_ === null) {
        requestData['noauth'] = true;
      } else if (typeof this.authOverride_ === 'object') {
        requestData['authvar'] = this.authOverride_;
      }

      this.sendRequest(authMethod, requestData, function (res) {
        var status = res[
        /*status*/
        's'];
        var data = res[
        /*data*/
        'd'] || 'error';

        if (_this.authToken_ === token_1) {
          if (status === 'ok') {
            _this.invalidAuthTokenCount_ = 0;
          } else {
            // Triggers reconnect and force refresh for auth token
            _this.onAuthRevoked_(status, data);
          }
        }
      });
    }
  };
  /**
   * @inheritDoc
   */


  PersistentConnection.prototype.unlisten = function (query, tag) {
    var pathString = query.path.toString();
    var queryId = query.queryIdentifier();
    this.log_('Unlisten called for ' + pathString + ' ' + queryId);
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(query.getQueryParams().isDefault() || !query.getQueryParams().loadsAllData(), 'unlisten() called for non-default but complete query');
    var listen = this.removeListen_(pathString, queryId);

    if (listen && this.connected_) {
      this.sendUnlisten_(pathString, queryId, query.queryObject(), tag);
    }
  };

  PersistentConnection.prototype.sendUnlisten_ = function (pathString, queryId, queryObj, tag) {
    this.log_('Unlisten on ' + pathString + ' for ' + queryId);
    var req = {
      /*path*/
      p: pathString
    };
    var action = 'n'; // Only bother sending queryId if it's non-default.

    if (tag) {
      req['q'] = queryObj;
      req['t'] = tag;
    }

    this.sendRequest(action, req);
  };
  /**
   * @inheritDoc
   */


  PersistentConnection.prototype.onDisconnectPut = function (pathString, data, onComplete) {
    if (this.connected_) {
      this.sendOnDisconnect_('o', pathString, data, onComplete);
    } else {
      this.onDisconnectRequestQueue_.push({
        pathString: pathString,
        action: 'o',
        data: data,
        onComplete: onComplete
      });
    }
  };
  /**
   * @inheritDoc
   */


  PersistentConnection.prototype.onDisconnectMerge = function (pathString, data, onComplete) {
    if (this.connected_) {
      this.sendOnDisconnect_('om', pathString, data, onComplete);
    } else {
      this.onDisconnectRequestQueue_.push({
        pathString: pathString,
        action: 'om',
        data: data,
        onComplete: onComplete
      });
    }
  };
  /**
   * @inheritDoc
   */


  PersistentConnection.prototype.onDisconnectCancel = function (pathString, onComplete) {
    if (this.connected_) {
      this.sendOnDisconnect_('oc', pathString, null, onComplete);
    } else {
      this.onDisconnectRequestQueue_.push({
        pathString: pathString,
        action: 'oc',
        data: null,
        onComplete: onComplete
      });
    }
  };

  PersistentConnection.prototype.sendOnDisconnect_ = function (action, pathString, data, onComplete) {
    var request = {
      /*path*/
      p: pathString,

      /*data*/
      d: data
    };
    this.log_('onDisconnect ' + action, request);
    this.sendRequest(action, request, function (response) {
      if (onComplete) {
        setTimeout(function () {
          onComplete(response[
          /*status*/
          's'], response[
          /* data */
          'd']);
        }, Math.floor(0));
      }
    });
  };
  /**
   * @inheritDoc
   */


  PersistentConnection.prototype.put = function (pathString, data, onComplete, hash) {
    this.putInternal('p', pathString, data, onComplete, hash);
  };
  /**
   * @inheritDoc
   */


  PersistentConnection.prototype.merge = function (pathString, data, onComplete, hash) {
    this.putInternal('m', pathString, data, onComplete, hash);
  };

  PersistentConnection.prototype.putInternal = function (action, pathString, data, onComplete, hash) {
    var request = {
      /*path*/
      p: pathString,

      /*data*/
      d: data
    };

    if (hash !== undefined) {
      request[
      /*hash*/
      'h'] = hash;
    } // TODO: Only keep track of the most recent put for a given path?


    this.outstandingPuts_.push({
      action: action,
      request: request,
      onComplete: onComplete
    });
    this.outstandingPutCount_++;
    var index = this.outstandingPuts_.length - 1;

    if (this.connected_) {
      this.sendPut_(index);
    } else {
      this.log_('Buffering put: ' + pathString);
    }
  };

  PersistentConnection.prototype.sendPut_ = function (index) {
    var _this = this;

    var action = this.outstandingPuts_[index].action;
    var request = this.outstandingPuts_[index].request;
    var onComplete = this.outstandingPuts_[index].onComplete;
    this.outstandingPuts_[index].queued = this.connected_;
    this.sendRequest(action, request, function (message) {
      _this.log_(action + ' response', message);

      delete _this.outstandingPuts_[index];
      _this.outstandingPutCount_--; // Clean up array occasionally.

      if (_this.outstandingPutCount_ === 0) {
        _this.outstandingPuts_ = [];
      }

      if (onComplete) {
        onComplete(message[
        /*status*/
        's'], message[
        /* data */
        'd']);
      }
    });
  };
  /**
   * @inheritDoc
   */


  PersistentConnection.prototype.reportStats = function (stats) {
    var _this = this; // If we're not connected, we just drop the stats.


    if (this.connected_) {
      var request = {
        /*counters*/
        c: stats
      };
      this.log_('reportStats', request);
      this.sendRequest(
      /*stats*/
      's', request, function (result) {
        var status = result[
        /*status*/
        's'];

        if (status !== 'ok') {
          var errorReason = result[
          /* data */
          'd'];

          _this.log_('reportStats', 'Error sending stats: ' + errorReason);
        }
      });
    }
  };

  PersistentConnection.prototype.onDataMessage_ = function (message) {
    if ('r' in message) {
      // this is a response
      this.log_('from server: ' + Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["stringify"])(message));
      var reqNum = message['r'];
      var onResponse = this.requestCBHash_[reqNum];

      if (onResponse) {
        delete this.requestCBHash_[reqNum];
        onResponse(message[
        /*body*/
        'b']);
      }
    } else if ('error' in message) {
      throw 'A server-side error has occurred: ' + message['error'];
    } else if ('a' in message) {
      // a and b are action and body, respectively
      this.onDataPush_(message['a'], message['b']);
    }
  };

  PersistentConnection.prototype.onDataPush_ = function (action, body) {
    this.log_('handleServerMessage', action, body);

    if (action === 'd') {
      this.onDataUpdate_(body[
      /*path*/
      'p'], body[
      /*data*/
      'd'],
      /*isMerge*/
      false, body['t']);
    } else if (action === 'm') {
      this.onDataUpdate_(body[
      /*path*/
      'p'], body[
      /*data*/
      'd'],
      /*isMerge=*/
      true, body['t']);
    } else if (action === 'c') {
      this.onListenRevoked_(body[
      /*path*/
      'p'], body[
      /*query*/
      'q']);
    } else if (action === 'ac') {
      this.onAuthRevoked_(body[
      /*status code*/
      's'], body[
      /* explanation */
      'd']);
    } else if (action === 'sd') {
      this.onSecurityDebugPacket_(body);
    } else {
      error('Unrecognized action received from server: ' + Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["stringify"])(action) + '\nAre you using the latest client?');
    }
  };

  PersistentConnection.prototype.onReady_ = function (timestamp, sessionId) {
    this.log_('connection ready');
    this.connected_ = true;
    this.lastConnectionEstablishedTime_ = new Date().getTime();
    this.handleTimestamp_(timestamp);
    this.lastSessionId = sessionId;

    if (this.firstConnection_) {
      this.sendConnectStats_();
    }

    this.restoreState_();
    this.firstConnection_ = false;
    this.onConnectStatus_(true);
  };

  PersistentConnection.prototype.scheduleConnect_ = function (timeout) {
    var _this = this;

    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(!this.realtime_, "Scheduling a connect when we're already connected/ing?");

    if (this.establishConnectionTimer_) {
      clearTimeout(this.establishConnectionTimer_);
    } // NOTE: Even when timeout is 0, it's important to do a setTimeout to work around an infuriating "Security Error" in
    // Firefox when trying to write to our long-polling iframe in some scenarios (e.g. Forge or our unit tests).


    this.establishConnectionTimer_ = setTimeout(function () {
      _this.establishConnectionTimer_ = null;

      _this.establishConnection_(); // eslint-disable-next-line @typescript-eslint/no-explicit-any

    }, Math.floor(timeout));
  };

  PersistentConnection.prototype.onVisible_ = function (visible) {
    // NOTE: Tabbing away and back to a window will defeat our reconnect backoff, but I think that's fine.
    if (visible && !this.visible_ && this.reconnectDelay_ === this.maxReconnectDelay_) {
      this.log_('Window became visible.  Reducing delay.');
      this.reconnectDelay_ = RECONNECT_MIN_DELAY;

      if (!this.realtime_) {
        this.scheduleConnect_(0);
      }
    }

    this.visible_ = visible;
  };

  PersistentConnection.prototype.onOnline_ = function (online) {
    if (online) {
      this.log_('Browser went online.');
      this.reconnectDelay_ = RECONNECT_MIN_DELAY;

      if (!this.realtime_) {
        this.scheduleConnect_(0);
      }
    } else {
      this.log_('Browser went offline.  Killing connection.');

      if (this.realtime_) {
        this.realtime_.close();
      }
    }
  };

  PersistentConnection.prototype.onRealtimeDisconnect_ = function () {
    this.log_('data client disconnected');
    this.connected_ = false;
    this.realtime_ = null; // Since we don't know if our sent transactions succeeded or not, we need to cancel them.

    this.cancelSentTransactions_(); // Clear out the pending requests.

    this.requestCBHash_ = {};

    if (this.shouldReconnect_()) {
      if (!this.visible_) {
        this.log_("Window isn't visible.  Delaying reconnect.");
        this.reconnectDelay_ = this.maxReconnectDelay_;
        this.lastConnectionAttemptTime_ = new Date().getTime();
      } else if (this.lastConnectionEstablishedTime_) {
        // If we've been connected long enough, reset reconnect delay to minimum.
        var timeSinceLastConnectSucceeded = new Date().getTime() - this.lastConnectionEstablishedTime_;

        if (timeSinceLastConnectSucceeded > RECONNECT_DELAY_RESET_TIMEOUT) {
          this.reconnectDelay_ = RECONNECT_MIN_DELAY;
        }

        this.lastConnectionEstablishedTime_ = null;
      }

      var timeSinceLastConnectAttempt = new Date().getTime() - this.lastConnectionAttemptTime_;
      var reconnectDelay = Math.max(0, this.reconnectDelay_ - timeSinceLastConnectAttempt);
      reconnectDelay = Math.random() * reconnectDelay;
      this.log_('Trying to reconnect in ' + reconnectDelay + 'ms');
      this.scheduleConnect_(reconnectDelay); // Adjust reconnect delay for next time.

      this.reconnectDelay_ = Math.min(this.maxReconnectDelay_, this.reconnectDelay_ * RECONNECT_DELAY_MULTIPLIER);
    }

    this.onConnectStatus_(false);
  };

  PersistentConnection.prototype.establishConnection_ = function () {
    var _this = this;

    if (this.shouldReconnect_()) {
      this.log_('Making a connection attempt');
      this.lastConnectionAttemptTime_ = new Date().getTime();
      this.lastConnectionEstablishedTime_ = null;
      var onDataMessage_1 = this.onDataMessage_.bind(this);
      var onReady_1 = this.onReady_.bind(this);
      var onDisconnect_1 = this.onRealtimeDisconnect_.bind(this);
      var connId_1 = this.id + ':' + PersistentConnection.nextConnectionId_++;
      var self_1 = this;
      var lastSessionId_1 = this.lastSessionId;
      var canceled_1 = false;
      var connection_1 = null;

      var closeFn_1 = function closeFn_1() {
        if (connection_1) {
          connection_1.close();
        } else {
          canceled_1 = true;
          onDisconnect_1();
        }
      };

      var sendRequestFn = function sendRequestFn(msg) {
        Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(connection_1, "sendRequest call when we're not connected not allowed.");
        connection_1.sendRequest(msg);
      };

      this.realtime_ = {
        close: closeFn_1,
        sendRequest: sendRequestFn
      };
      var forceRefresh = this.forceTokenRefresh_;
      this.forceTokenRefresh_ = false; // First fetch auth token, and establish connection after fetching the token was successful

      this.authTokenProvider_.getToken(forceRefresh).then(function (result) {
        if (!canceled_1) {
          log('getToken() completed. Creating connection.');
          self_1.authToken_ = result && result.accessToken;
          connection_1 = new Connection(connId_1, self_1.repoInfo_, self_1.applicationId_, onDataMessage_1, onReady_1, onDisconnect_1,
          /* onKill= */
          function (reason) {
            warn(reason + ' (' + self_1.repoInfo_.toString() + ')');
            self_1.interrupt(SERVER_KILL_INTERRUPT_REASON);
          }, lastSessionId_1);
        } else {
          log('getToken() completed but was canceled');
        }
      }).then(null, function (error) {
        self_1.log_('Failed to get token: ' + error);

        if (!canceled_1) {
          if (_this.repoInfo_.nodeAdmin) {
            // This may be a critical error for the Admin Node.js SDK, so log a warning.
            // But getToken() may also just have temporarily failed, so we still want to
            // continue retrying.
            warn(error);
          }

          closeFn_1();
        }
      });
    }
  };

  PersistentConnection.prototype.interrupt = function (reason) {
    log('Interrupting connection for reason: ' + reason);
    this.interruptReasons_[reason] = true;

    if (this.realtime_) {
      this.realtime_.close();
    } else {
      if (this.establishConnectionTimer_) {
        clearTimeout(this.establishConnectionTimer_);
        this.establishConnectionTimer_ = null;
      }

      if (this.connected_) {
        this.onRealtimeDisconnect_();
      }
    }
  };

  PersistentConnection.prototype.resume = function (reason) {
    log('Resuming connection for reason: ' + reason);
    delete this.interruptReasons_[reason];

    if (Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(this.interruptReasons_)) {
      this.reconnectDelay_ = RECONNECT_MIN_DELAY;

      if (!this.realtime_) {
        this.scheduleConnect_(0);
      }
    }
  };

  PersistentConnection.prototype.handleTimestamp_ = function (timestamp) {
    var delta = timestamp - new Date().getTime();
    this.onServerInfoUpdate_({
      serverTimeOffset: delta
    });
  };

  PersistentConnection.prototype.cancelSentTransactions_ = function () {
    for (var i = 0; i < this.outstandingPuts_.length; i++) {
      var put = this.outstandingPuts_[i];

      if (put &&
      /*hash*/
      'h' in put.request && put.queued) {
        if (put.onComplete) {
          put.onComplete('disconnect');
        }

        delete this.outstandingPuts_[i];
        this.outstandingPutCount_--;
      }
    } // Clean up array occasionally.


    if (this.outstandingPutCount_ === 0) {
      this.outstandingPuts_ = [];
    }
  };

  PersistentConnection.prototype.onListenRevoked_ = function (pathString, query) {
    // Remove the listen and manufacture a "permission_denied" error for the failed listen.
    var queryId;

    if (!query) {
      queryId = 'default';
    } else {
      queryId = query.map(function (q) {
        return ObjectToUniqueKey(q);
      }).join('$');
    }

    var listen = this.removeListen_(pathString, queryId);

    if (listen && listen.onComplete) {
      listen.onComplete('permission_denied');
    }
  };

  PersistentConnection.prototype.removeListen_ = function (pathString, queryId) {
    var normalizedPathString = new Path(pathString).toString(); // normalize path.

    var listen;

    if (this.listens.has(normalizedPathString)) {
      var map = this.listens.get(normalizedPathString);
      listen = map.get(queryId);
      map.delete(queryId);

      if (map.size === 0) {
        this.listens.delete(normalizedPathString);
      }
    } else {
      // all listens for this path has already been removed
      listen = undefined;
    }

    return listen;
  };

  PersistentConnection.prototype.onAuthRevoked_ = function (statusCode, explanation) {
    log('Auth token revoked: ' + statusCode + '/' + explanation);
    this.authToken_ = null;
    this.forceTokenRefresh_ = true;
    this.realtime_.close();

    if (statusCode === 'invalid_token' || statusCode === 'permission_denied') {
      // We'll wait a couple times before logging the warning / increasing the
      // retry period since oauth tokens will report as "invalid" if they're
      // just expired. Plus there may be transient issues that resolve themselves.
      this.invalidAuthTokenCount_++;

      if (this.invalidAuthTokenCount_ >= INVALID_AUTH_TOKEN_THRESHOLD) {
        // Set a long reconnect delay because recovery is unlikely
        this.reconnectDelay_ = RECONNECT_MAX_DELAY_FOR_ADMINS; // Notify the auth token provider that the token is invalid, which will log
        // a warning

        this.authTokenProvider_.notifyForInvalidToken();
      }
    }
  };

  PersistentConnection.prototype.onSecurityDebugPacket_ = function (body) {
    if (this.securityDebugCallback_) {
      this.securityDebugCallback_(body);
    } else {
      if ('msg' in body) {
        console.log('FIREBASE: ' + body['msg'].replace('\n', '\nFIREBASE: '));
      }
    }
  };

  PersistentConnection.prototype.restoreState_ = function () {
    var e_1, _a, e_2, _b; //Re-authenticate ourselves if we have a credential stored.


    this.tryAuth();

    try {
      // Puts depend on having received the corresponding data update from the server before they complete, so we must
      // make sure to send listens before puts.
      for (var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(this.listens.values()), _d = _c.next(); !_d.done; _d = _c.next()) {
        var queries = _d.value;

        try {
          for (var _e = (e_2 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(queries.values())), _f = _e.next(); !_f.done; _f = _e.next()) {
            var listenSpec = _f.value;
            this.sendListen_(listenSpec);
          }
        } catch (e_2_1) {
          e_2 = {
            error: e_2_1
          };
        } finally {
          try {
            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
          } finally {
            if (e_2) throw e_2.error;
          }
        }
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
      } finally {
        if (e_1) throw e_1.error;
      }
    }

    for (var i = 0; i < this.outstandingPuts_.length; i++) {
      if (this.outstandingPuts_[i]) {
        this.sendPut_(i);
      }
    }

    while (this.onDisconnectRequestQueue_.length) {
      var request = this.onDisconnectRequestQueue_.shift();
      this.sendOnDisconnect_(request.action, request.pathString, request.data, request.onComplete);
    }

    for (var i = 0; i < this.outstandingGets_.length; i++) {
      if (this.outstandingGets_[i]) {
        this.sendGet_(i);
      }
    }
  };
  /**
   * Sends client stats for first connection
   */


  PersistentConnection.prototype.sendConnectStats_ = function () {
    var stats = {};
    var clientName = 'js';

    if (Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["isNodeSdk"])()) {
      if (this.repoInfo_.nodeAdmin) {
        clientName = 'admin_node';
      } else {
        clientName = 'node';
      }
    }

    stats['sdk.' + clientName + '.' + SDK_VERSION.replace(/\./g, '-')] = 1;

    if (Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["isMobileCordova"])()) {
      stats['framework.cordova'] = 1;
    } else if (Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["isReactNative"])()) {
      stats['framework.reactnative'] = 1;
    }

    this.reportStats(stats);
  };

  PersistentConnection.prototype.shouldReconnect_ = function () {
    var online = OnlineMonitor.getInstance().currentlyOnline();
    return Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(this.interruptReasons_) && online;
  };

  PersistentConnection.nextPersistentConnectionId_ = 0;
  /**
   * Counter for number of connections created. Mainly used for tagging in the logs
   */

  PersistentConnection.nextConnectionId_ = 0;
  return PersistentConnection;
}(ServerActions);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * An implementation of ServerActions that communicates with the server via REST requests.
 * This is mostly useful for compatibility with crawlers, where we don't want to spin up a full
 * persistent connection (using WebSockets or long-polling)
 */


var ReadonlyRestClient =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(ReadonlyRestClient, _super);
  /**
   * @param repoInfo_ Data about the namespace we are connecting to
   * @param onDataUpdate_ A callback for new data from the server
   */


  function ReadonlyRestClient(repoInfo_, onDataUpdate_, authTokenProvider_) {
    var _this = _super.call(this) || this;

    _this.repoInfo_ = repoInfo_;
    _this.onDataUpdate_ = onDataUpdate_;
    _this.authTokenProvider_ = authTokenProvider_;
    /** @private {function(...[*])} */

    _this.log_ = logWrapper('p:rest:');
    /**
     * We don't actually need to track listens, except to prevent us calling an onComplete for a listen
     * that's been removed. :-/
     */

    _this.listens_ = {};
    return _this;
  }

  ReadonlyRestClient.prototype.reportStats = function (stats) {
    throw new Error('Method not implemented.');
  };

  ReadonlyRestClient.getListenId_ = function (query, tag) {
    if (tag !== undefined) {
      return 'tag$' + tag;
    } else {
      Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(query.getQueryParams().isDefault(), "should have a tag if it's not a default query.");
      return query.path.toString();
    }
  };
  /** @inheritDoc */


  ReadonlyRestClient.prototype.listen = function (query, currentHashFn, tag, onComplete) {
    var _this = this;

    var pathString = query.path.toString();
    this.log_('Listen called for ' + pathString + ' ' + query.queryIdentifier()); // Mark this listener so we can tell if it's removed.

    var listenId = ReadonlyRestClient.getListenId_(query, tag);
    var thisListen = {};
    this.listens_[listenId] = thisListen;
    var queryStringParameters = queryParamsToRestQueryStringParameters(query.getQueryParams());
    this.restRequest_(pathString + '.json', queryStringParameters, function (error, result) {
      var data = result;

      if (error === 404) {
        data = null;
        error = null;
      }

      if (error === null) {
        _this.onDataUpdate_(pathString, data,
        /*isMerge=*/
        false, tag);
      }

      if (Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["safeGet"])(_this.listens_, listenId) === thisListen) {
        var status_1;

        if (!error) {
          status_1 = 'ok';
        } else if (error === 401) {
          status_1 = 'permission_denied';
        } else {
          status_1 = 'rest_error:' + error;
        }

        onComplete(status_1, null);
      }
    });
  };
  /** @inheritDoc */


  ReadonlyRestClient.prototype.unlisten = function (query, tag) {
    var listenId = ReadonlyRestClient.getListenId_(query, tag);
    delete this.listens_[listenId];
  };

  ReadonlyRestClient.prototype.get = function (query) {
    var _this = this;

    var queryStringParameters = queryParamsToRestQueryStringParameters(query.getQueryParams());
    var pathString = query.path.toString();
    var deferred = new _firebase_util__WEBPACK_IMPORTED_MODULE_2__["Deferred"]();
    this.restRequest_(pathString + '.json', queryStringParameters, function (error, result) {
      var data = result;

      if (error === 404) {
        data = null;
        error = null;
      }

      if (error === null) {
        _this.onDataUpdate_(pathString, data,
        /*isMerge=*/
        false,
        /*tag=*/
        null);

        deferred.resolve(data);
      } else {
        deferred.reject(new Error(data));
      }
    });
    return deferred.promise;
  };
  /** @inheritDoc */


  ReadonlyRestClient.prototype.refreshAuthToken = function (token) {// no-op since we just always call getToken.
  };
  /**
   * Performs a REST request to the given path, with the provided query string parameters,
   * and any auth credentials we have.
   */


  ReadonlyRestClient.prototype.restRequest_ = function (pathString, queryStringParameters, callback) {
    var _this = this;

    if (queryStringParameters === void 0) {
      queryStringParameters = {};
    }

    queryStringParameters['format'] = 'export';
    this.authTokenProvider_.getToken(
    /*forceRefresh=*/
    false).then(function (authTokenData) {
      var authToken = authTokenData && authTokenData.accessToken;

      if (authToken) {
        queryStringParameters['auth'] = authToken;
      }

      var url = (_this.repoInfo_.secure ? 'https://' : 'http://') + _this.repoInfo_.host + pathString + '?' + 'ns=' + _this.repoInfo_.namespace + Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["querystring"])(queryStringParameters);

      _this.log_('Sending REST request for ' + url);

      var xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (callback && xhr.readyState === 4) {
          _this.log_('REST Response for ' + url + ' received. status:', xhr.status, 'response:', xhr.responseText);

          var res = null;

          if (xhr.status >= 200 && xhr.status < 300) {
            try {
              res = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["jsonEval"])(xhr.responseText);
            } catch (e) {
              warn('Failed to parse JSON response for ' + url + ': ' + xhr.responseText);
            }

            callback(null, res);
          } else {
            // 401 and 404 are expected.
            if (xhr.status !== 401 && xhr.status !== 404) {
              warn('Got unsuccessful REST response for ' + url + ' Status: ' + xhr.status);
            }

            callback(xhr.status);
          }

          callback = null;
        }
      };

      xhr.open('GET', url,
      /*asynchronous=*/
      true);
      xhr.send();
    });
  };

  return ReadonlyRestClient;
}(ServerActions);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Node in a Tree.
 */


var TreeNode =
/** @class */
function () {
  function TreeNode() {
    // TODO: Consider making accessors that create children and value lazily or
    // separate Internal / Leaf 'types'.
    this.children = {};
    this.childCount = 0;
    this.value = null;
  }

  return TreeNode;
}();
/**
 * A light-weight tree, traversable by path.  Nodes can have both values and children.
 * Nodes are not enumerated (by forEachChild) unless they have a value or non-empty
 * children.
 */


var Tree =
/** @class */
function () {
  /**
   * @param name_ Optional name of the node.
   * @param parent_ Optional parent node.
   * @param node_ Optional node to wrap.
   */
  function Tree(name_, parent_, node_) {
    if (name_ === void 0) {
      name_ = '';
    }

    if (parent_ === void 0) {
      parent_ = null;
    }

    if (node_ === void 0) {
      node_ = new TreeNode();
    }

    this.name_ = name_;
    this.parent_ = parent_;
    this.node_ = node_;
  }
  /**
   * Returns a sub-Tree for the given path.
   *
   * @param pathObj Path to look up.
   * @return Tree for path.
   */


  Tree.prototype.subTree = function (pathObj) {
    // TODO: Require pathObj to be Path?
    var path = pathObj instanceof Path ? pathObj : new Path(pathObj);
    var child = this,
        next = pathGetFront(path);

    while (next !== null) {
      var childNode = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["safeGet"])(child.node_.children, next) || new TreeNode();
      child = new Tree(next, child, childNode);
      path = pathPopFront(path);
      next = pathGetFront(path);
    }

    return child;
  };
  /**
   * Returns the data associated with this tree node.
   *
   * @return The data or null if no data exists.
   */


  Tree.prototype.getValue = function () {
    return this.node_.value;
  };
  /**
   * Sets data to this tree node.
   *
   * @param value Value to set.
   */


  Tree.prototype.setValue = function (value) {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(typeof value !== 'undefined', 'Cannot set value to undefined');
    this.node_.value = value;
    this.updateParents_();
  };
  /**
   * Clears the contents of the tree node (its value and all children).
   */


  Tree.prototype.clear = function () {
    this.node_.value = null;
    this.node_.children = {};
    this.node_.childCount = 0;
    this.updateParents_();
  };
  /**
   * @return Whether the tree has any children.
   */


  Tree.prototype.hasChildren = function () {
    return this.node_.childCount > 0;
  };
  /**
   * @return Whethe rthe tree is empty (no value or children).
   */


  Tree.prototype.isEmpty = function () {
    return this.getValue() === null && !this.hasChildren();
  };
  /**
   * Calls action for each child of this tree node.
   *
   * @param action Action to be called for each child.
   */


  Tree.prototype.forEachChild = function (action) {
    var _this = this;

    each(this.node_.children, function (child, childTree) {
      action(new Tree(child, _this, childTree));
    });
  };
  /**
   * Does a depth-first traversal of this node's descendants, calling action for each one.
   *
   * @param action Action to be called for each child.
   * @param includeSelf Whether to call action on this node as well. Defaults to
   *   false.
   * @param childrenFirst Whether to call action on children before calling it on
   *   parent.
   */


  Tree.prototype.forEachDescendant = function (action, includeSelf, childrenFirst) {
    if (includeSelf && !childrenFirst) {
      action(this);
    }

    this.forEachChild(function (child) {
      child.forEachDescendant(action,
      /*includeSelf=*/
      true, childrenFirst);
    });

    if (includeSelf && childrenFirst) {
      action(this);
    }
  };
  /**
   * Calls action on each ancestor node.
   *
   * @param action Action to be called on each parent; return
   *   true to abort.
   * @param includeSelf Whether to call action on this node as well.
   * @return true if the action callback returned true.
   */


  Tree.prototype.forEachAncestor = function (action, includeSelf) {
    var node = includeSelf ? this : this.parent();

    while (node !== null) {
      if (action(node)) {
        return true;
      }

      node = node.parent();
    }

    return false;
  };
  /**
   * Does a depth-first traversal of this node's descendants.  When a descendant with a value
   * is found, action is called on it and traversal does not continue inside the node.
   * Action is *not* called on this node.
   *
   * @param action Action to be called for each child.
   */


  Tree.prototype.forEachImmediateDescendantWithValue = function (action) {
    this.forEachChild(function (child) {
      if (child.getValue() !== null) {
        action(child);
      } else {
        child.forEachImmediateDescendantWithValue(action);
      }
    });
  };
  /**
   * @return The path of this tree node, as a Path.
   */


  Tree.prototype.path = function () {
    return new Path(this.parent_ === null ? this.name_ : this.parent_.path() + '/' + this.name_);
  };
  /**
   * @return The name of the tree node.
   */


  Tree.prototype.name = function () {
    return this.name_;
  };
  /**
   * @return The parent tree node, or null if this is the root of the tree.
   */


  Tree.prototype.parent = function () {
    return this.parent_;
  };
  /**
   * Adds or removes this child from its parent based on whether it's empty or not.
   */


  Tree.prototype.updateParents_ = function () {
    if (this.parent_ !== null) {
      this.parent_.updateChild_(this.name_, this);
    }
  };
  /**
   * Adds or removes the passed child to this tree node, depending on whether it's empty.
   *
   * @param childName The name of the child to update.
   * @param child The child to update.
   */


  Tree.prototype.updateChild_ = function (childName, child) {
    var childEmpty = child.isEmpty();
    var childExists = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["contains"])(this.node_.children, childName);

    if (childEmpty && childExists) {
      delete this.node_.children[childName];
      this.node_.childCount--;
      this.updateParents_();
    } else if (!childEmpty && !childExists) {
      this.node_.children[childName] = child.node_;
      this.node_.childCount++;
      this.updateParents_();
    }
  };

  return Tree;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var INTERRUPT_REASON = 'repo_interrupt';
/**
 * If a transaction does not succeed after 25 retries, we abort it. Among other
 * things this ensure that if there's ever a bug causing a mismatch between
 * client / server hashes for some data, we won't retry indefinitely.
 */

var MAX_TRANSACTION_RETRIES = 25;
var TransactionStatus;

(function (TransactionStatus) {
  // We've run the transaction and updated transactionResultData_ with the result, but it isn't currently sent to the
  // server. A transaction will go from RUN -> SENT -> RUN if it comes back from the server as rejected due to
  // mismatched hash.
  TransactionStatus[TransactionStatus["RUN"] = 0] = "RUN"; // We've run the transaction and sent it to the server and it's currently outstanding (hasn't come back as accepted
  // or rejected yet).

  TransactionStatus[TransactionStatus["SENT"] = 1] = "SENT"; // Temporary state used to mark completed transactions (whether successful or aborted).  The transaction will be
  // removed when we get a chance to prune completed ones.

  TransactionStatus[TransactionStatus["COMPLETED"] = 2] = "COMPLETED"; // Used when an already-sent transaction needs to be aborted (e.g. due to a conflicting set() call that was made).
  // If it comes back as unsuccessful, we'll abort it.

  TransactionStatus[TransactionStatus["SENT_NEEDS_ABORT"] = 3] = "SENT_NEEDS_ABORT"; // Temporary state used to mark transactions that need to be aborted.

  TransactionStatus[TransactionStatus["NEEDS_ABORT"] = 4] = "NEEDS_ABORT";
})(TransactionStatus || (TransactionStatus = {}));
/**
 * A connection to a single data repository.
 */


var Repo =
/** @class */
function () {
  function Repo(repoInfo_, forceRestClient_, app, authTokenProvider_) {
    this.repoInfo_ = repoInfo_;
    this.forceRestClient_ = forceRestClient_;
    this.app = app;
    this.authTokenProvider_ = authTokenProvider_;
    this.dataUpdateCount = 0;
    this.statsListener_ = null;
    this.eventQueue_ = new EventQueue();
    this.nextWriteId_ = 1;
    this.interceptServerDataCallback_ = null;
    /** A list of data pieces and paths to be set when this client disconnects. */

    this.onDisconnect_ = new SparseSnapshotTree();
    /** Stores queues of outstanding transactions for Firebase locations. */

    this.transactionQueueTree_ = new Tree(); // TODO: This should be @private but it's used by test_access.js and internal.js

    this.persistentConnection_ = null; // This key is intentionally not updated if RepoInfo is later changed or replaced

    this.key = this.repoInfo_.toURLString();
  }

  Repo.prototype.start = function () {
    var _this = this;

    this.stats_ = StatsManager.getCollection(this.repoInfo_);

    if (this.forceRestClient_ || beingCrawled()) {
      this.server_ = new ReadonlyRestClient(this.repoInfo_, this.onDataUpdate_.bind(this), this.authTokenProvider_); // Minor hack: Fire onConnect immediately, since there's no actual connection.

      setTimeout(this.onConnectStatus_.bind(this, true), 0);
    } else {
      var authOverride = this.app.options['databaseAuthVariableOverride']; // Validate authOverride

      if (typeof authOverride !== 'undefined' && authOverride !== null) {
        if (typeof authOverride !== 'object') {
          throw new Error('Only objects are supported for option databaseAuthVariableOverride');
        }

        try {
          Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["stringify"])(authOverride);
        } catch (e) {
          throw new Error('Invalid authOverride provided: ' + e);
        }
      }

      this.persistentConnection_ = new PersistentConnection(this.repoInfo_, this.app.options.appId, this.onDataUpdate_.bind(this), this.onConnectStatus_.bind(this), this.onServerInfoUpdate_.bind(this), this.authTokenProvider_, authOverride);
      this.server_ = this.persistentConnection_;
    }

    this.authTokenProvider_.addTokenChangeListener(function (token) {
      _this.server_.refreshAuthToken(token);
    }); // In the case of multiple Repos for the same repoInfo (i.e. there are multiple Firebase.Contexts being used),
    // we only want to create one StatsReporter.  As such, we'll report stats over the first Repo created.

    this.statsReporter_ = StatsManager.getOrCreateReporter(this.repoInfo_, function () {
      return new StatsReporter(_this.stats_, _this.server_);
    }); // Used for .info.

    this.infoData_ = new SnapshotHolder();
    this.infoSyncTree_ = new SyncTree({
      startListening: function startListening(query, tag, currentHashFn, onComplete) {
        var infoEvents = [];

        var node = _this.infoData_.getNode(query.path); // This is possibly a hack, but we have different semantics for .info endpoints. We don't raise null events
        // on initial data...


        if (!node.isEmpty()) {
          infoEvents = _this.infoSyncTree_.applyServerOverwrite(query.path, node);
          setTimeout(function () {
            onComplete('ok');
          }, 0);
        }

        return infoEvents;
      },
      stopListening: function stopListening() {}
    });
    this.updateInfo_('connected', false);
    this.serverSyncTree_ = new SyncTree({
      startListening: function startListening(query, tag, currentHashFn, onComplete) {
        _this.server_.listen(query, currentHashFn, tag, function (status, data) {
          var events = onComplete(status, data);
          eventQueueRaiseEventsForChangedPath(_this.eventQueue_, query.path, events);
        }); // No synchronous events for network-backed sync trees


        return [];
      },
      stopListening: function stopListening(query, tag) {
        _this.server_.unlisten(query, tag);
      }
    });
  };
  /**
   * @return The URL corresponding to the root of this Firebase.
   */


  Repo.prototype.toString = function () {
    return (this.repoInfo_.secure ? 'https://' : 'http://') + this.repoInfo_.host;
  };
  /**
   * @return The namespace represented by the repo.
   */


  Repo.prototype.name = function () {
    return this.repoInfo_.namespace;
  };
  /**
   * @return The time in milliseconds, taking the server offset into account if we have one.
   */


  Repo.prototype.serverTime = function () {
    var offsetNode = this.infoData_.getNode(new Path('.info/serverTimeOffset'));
    var offset = offsetNode.val() || 0;
    return new Date().getTime() + offset;
  };
  /**
   * Generate ServerValues using some variables from the repo object.
   */


  Repo.prototype.generateServerValues = function () {
    return generateWithValues({
      timestamp: this.serverTime()
    });
  };
  /**
   * Called by realtime when we get new messages from the server.
   */


  Repo.prototype.onDataUpdate_ = function (pathString, data, isMerge, tag) {
    // For testing.
    this.dataUpdateCount++;
    var path = new Path(pathString);
    data = this.interceptServerDataCallback_ ? this.interceptServerDataCallback_(pathString, data) : data;
    var events = [];

    if (tag) {
      if (isMerge) {
        var taggedChildren = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["map"])(data, function (raw) {
          return nodeFromJSON$1(raw);
        });
        events = this.serverSyncTree_.applyTaggedQueryMerge(path, taggedChildren, tag);
      } else {
        var taggedSnap = nodeFromJSON$1(data);
        events = this.serverSyncTree_.applyTaggedQueryOverwrite(path, taggedSnap, tag);
      }
    } else if (isMerge) {
      var changedChildren = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["map"])(data, function (raw) {
        return nodeFromJSON$1(raw);
      });
      events = this.serverSyncTree_.applyServerMerge(path, changedChildren);
    } else {
      var snap = nodeFromJSON$1(data);
      events = this.serverSyncTree_.applyServerOverwrite(path, snap);
    }

    var affectedPath = path;

    if (events.length > 0) {
      // Since we have a listener outstanding for each transaction, receiving any events
      // is a proxy for some change having occurred.
      affectedPath = this.rerunTransactions_(path);
    }

    eventQueueRaiseEventsForChangedPath(this.eventQueue_, affectedPath, events);
  }; // TODO: This should be @private but it's used by test_access.js and internal.js


  Repo.prototype.interceptServerData_ = function (callback) {
    this.interceptServerDataCallback_ = callback;
  };

  Repo.prototype.onConnectStatus_ = function (connectStatus) {
    this.updateInfo_('connected', connectStatus);

    if (connectStatus === false) {
      this.runOnDisconnectEvents_();
    }
  };

  Repo.prototype.onServerInfoUpdate_ = function (updates) {
    var _this = this;

    each(updates, function (key, value) {
      _this.updateInfo_(key, value);
    });
  };

  Repo.prototype.updateInfo_ = function (pathString, value) {
    var path = new Path('/.info/' + pathString);
    var newNode = nodeFromJSON$1(value);
    this.infoData_.updateSnapshot(path, newNode);
    var events = this.infoSyncTree_.applyServerOverwrite(path, newNode);
    eventQueueRaiseEventsForChangedPath(this.eventQueue_, path, events);
  };

  Repo.prototype.getNextWriteId_ = function () {
    return this.nextWriteId_++;
  };
  /**
   * The purpose of `getValue` is to return the latest known value
   * satisfying `query`.
   *
   * This method will first check for in-memory cached values
   * belonging to active listeners. If they are found, such values
   * are considered to be the most up-to-date.
   *
   * If the client is not connected, this method will try to
   * establish a connection and request the value for `query`. If
   * the client is not able to retrieve the query result, it reports
   * an error.
   *
   * @param query - The query to surface a value for.
   */


  Repo.prototype.getValue = function (query) {
    var _this = this; // Only active queries are cached. There is no persisted cache.


    var cached = this.serverSyncTree_.getServerValue(query);

    if (cached != null) {
      return Promise.resolve(new DataSnapshot(cached, query.getRef(), query.getQueryParams().getIndex()));
    }

    return this.server_.get(query).then(function (payload) {
      var node = nodeFromJSON$1(payload);

      var events = _this.serverSyncTree_.applyServerOverwrite(query.path, node);

      eventQueueRaiseEventsAtPath(_this.eventQueue_, query.path, events);
      return Promise.resolve(new DataSnapshot(node, query.getRef(), query.getQueryParams().getIndex()));
    }, function (err) {
      _this.log_('get for query ' + Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["stringify"])(query) + ' failed: ' + err);

      return Promise.reject(new Error(err));
    });
  };

  Repo.prototype.setWithPriority = function (path, newVal, newPriority, onComplete) {
    var _this = this;

    this.log_('set', {
      path: path.toString(),
      value: newVal,
      priority: newPriority
    }); // TODO: Optimize this behavior to either (a) store flag to skip resolving where possible and / or
    // (b) store unresolved paths on JSON parse

    var serverValues = this.generateServerValues();
    var newNodeUnresolved = nodeFromJSON$1(newVal, newPriority);
    var existing = this.serverSyncTree_.calcCompleteEventCache(path);
    var newNode = resolveDeferredValueSnapshot(newNodeUnresolved, existing, serverValues);
    var writeId = this.getNextWriteId_();
    var events = this.serverSyncTree_.applyUserOverwrite(path, newNode, writeId, true);
    eventQueueQueueEvents(this.eventQueue_, events);
    this.server_.put(path.toString(), newNodeUnresolved.val(
    /*export=*/
    true), function (status, errorReason) {
      var success = status === 'ok';

      if (!success) {
        warn('set at ' + path + ' failed: ' + status);
      }

      var clearEvents = _this.serverSyncTree_.ackUserWrite(writeId, !success);

      eventQueueRaiseEventsForChangedPath(_this.eventQueue_, path, clearEvents);

      _this.callOnCompleteCallback(onComplete, status, errorReason);
    });
    var affectedPath = this.abortTransactions_(path);
    this.rerunTransactions_(affectedPath); // We queued the events above, so just flush the queue here

    eventQueueRaiseEventsForChangedPath(this.eventQueue_, affectedPath, []);
  };

  Repo.prototype.update = function (path, childrenToMerge, onComplete) {
    var _this = this;

    this.log_('update', {
      path: path.toString(),
      value: childrenToMerge
    }); // Start with our existing data and merge each child into it.

    var empty = true;
    var serverValues = this.generateServerValues();
    var changedChildren = {};
    each(childrenToMerge, function (changedKey, changedValue) {
      empty = false;
      changedChildren[changedKey] = resolveDeferredValueTree(pathChild(path, changedKey), nodeFromJSON$1(changedValue), _this.serverSyncTree_, serverValues);
    });

    if (!empty) {
      var writeId_1 = this.getNextWriteId_();
      var events = this.serverSyncTree_.applyUserMerge(path, changedChildren, writeId_1);
      eventQueueQueueEvents(this.eventQueue_, events);
      this.server_.merge(path.toString(), childrenToMerge, function (status, errorReason) {
        var success = status === 'ok';

        if (!success) {
          warn('update at ' + path + ' failed: ' + status);
        }

        var clearEvents = _this.serverSyncTree_.ackUserWrite(writeId_1, !success);

        var affectedPath = clearEvents.length > 0 ? _this.rerunTransactions_(path) : path;
        eventQueueRaiseEventsForChangedPath(_this.eventQueue_, affectedPath, clearEvents);

        _this.callOnCompleteCallback(onComplete, status, errorReason);
      });
      each(childrenToMerge, function (changedPath) {
        var affectedPath = _this.abortTransactions_(pathChild(path, changedPath));

        _this.rerunTransactions_(affectedPath);
      }); // We queued the events above, so just flush the queue here

      eventQueueRaiseEventsForChangedPath(this.eventQueue_, path, []);
    } else {
      log("update() called with empty data.  Don't do anything.");
      this.callOnCompleteCallback(onComplete, 'ok');
    }
  };
  /**
   * Applies all of the changes stored up in the onDisconnect_ tree.
   */


  Repo.prototype.runOnDisconnectEvents_ = function () {
    var _this = this;

    this.log_('onDisconnectEvents');
    var serverValues = this.generateServerValues();
    var resolvedOnDisconnectTree = new SparseSnapshotTree();
    this.onDisconnect_.forEachTree(newEmptyPath(), function (path, node) {
      var resolved = resolveDeferredValueTree(path, node, _this.serverSyncTree_, serverValues);
      resolvedOnDisconnectTree.remember(path, resolved);
    });
    var events = [];
    resolvedOnDisconnectTree.forEachTree(newEmptyPath(), function (path, snap) {
      events = events.concat(_this.serverSyncTree_.applyServerOverwrite(path, snap));

      var affectedPath = _this.abortTransactions_(path);

      _this.rerunTransactions_(affectedPath);
    });
    this.onDisconnect_ = new SparseSnapshotTree();
    eventQueueRaiseEventsForChangedPath(this.eventQueue_, newEmptyPath(), events);
  };

  Repo.prototype.onDisconnectCancel = function (path, onComplete) {
    var _this = this;

    this.server_.onDisconnectCancel(path.toString(), function (status, errorReason) {
      if (status === 'ok') {
        _this.onDisconnect_.forget(path);
      }

      _this.callOnCompleteCallback(onComplete, status, errorReason);
    });
  };

  Repo.prototype.onDisconnectSet = function (path, value, onComplete) {
    var _this = this;

    var newNode = nodeFromJSON$1(value);
    this.server_.onDisconnectPut(path.toString(), newNode.val(
    /*export=*/
    true), function (status, errorReason) {
      if (status === 'ok') {
        _this.onDisconnect_.remember(path, newNode);
      }

      _this.callOnCompleteCallback(onComplete, status, errorReason);
    });
  };

  Repo.prototype.onDisconnectSetWithPriority = function (path, value, priority, onComplete) {
    var _this = this;

    var newNode = nodeFromJSON$1(value, priority);
    this.server_.onDisconnectPut(path.toString(), newNode.val(
    /*export=*/
    true), function (status, errorReason) {
      if (status === 'ok') {
        _this.onDisconnect_.remember(path, newNode);
      }

      _this.callOnCompleteCallback(onComplete, status, errorReason);
    });
  };

  Repo.prototype.onDisconnectUpdate = function (path, childrenToMerge, onComplete) {
    var _this = this;

    if (Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(childrenToMerge)) {
      log("onDisconnect().update() called with empty data.  Don't do anything.");
      this.callOnCompleteCallback(onComplete, 'ok');
      return;
    }

    this.server_.onDisconnectMerge(path.toString(), childrenToMerge, function (status, errorReason) {
      if (status === 'ok') {
        each(childrenToMerge, function (childName, childNode) {
          var newChildNode = nodeFromJSON$1(childNode);

          _this.onDisconnect_.remember(pathChild(path, childName), newChildNode);
        });
      }

      _this.callOnCompleteCallback(onComplete, status, errorReason);
    });
  };

  Repo.prototype.addEventCallbackForQuery = function (query, eventRegistration) {
    var events;

    if (pathGetFront(query.path) === '.info') {
      events = this.infoSyncTree_.addEventRegistration(query, eventRegistration);
    } else {
      events = this.serverSyncTree_.addEventRegistration(query, eventRegistration);
    }

    eventQueueRaiseEventsAtPath(this.eventQueue_, query.path, events);
  };

  Repo.prototype.removeEventCallbackForQuery = function (query, eventRegistration) {
    // These are guaranteed not to raise events, since we're not passing in a cancelError. However, we can future-proof
    // a little bit by handling the return values anyways.
    var events;

    if (pathGetFront(query.path) === '.info') {
      events = this.infoSyncTree_.removeEventRegistration(query, eventRegistration);
    } else {
      events = this.serverSyncTree_.removeEventRegistration(query, eventRegistration);
    }

    eventQueueRaiseEventsAtPath(this.eventQueue_, query.path, events);
  };

  Repo.prototype.interrupt = function () {
    if (this.persistentConnection_) {
      this.persistentConnection_.interrupt(INTERRUPT_REASON);
    }
  };

  Repo.prototype.resume = function () {
    if (this.persistentConnection_) {
      this.persistentConnection_.resume(INTERRUPT_REASON);
    }
  };

  Repo.prototype.stats = function (showDelta) {
    if (showDelta === void 0) {
      showDelta = false;
    }

    if (typeof console === 'undefined') {
      return;
    }

    var stats;

    if (showDelta) {
      if (!this.statsListener_) {
        this.statsListener_ = new StatsListener(this.stats_);
      }

      stats = this.statsListener_.get();
    } else {
      stats = this.stats_.get();
    }

    var longestName = Object.keys(stats).reduce(function (previousValue, currentValue) {
      return Math.max(currentValue.length, previousValue);
    }, 0);
    each(stats, function (stat, value) {
      var paddedStat = stat; // pad stat names to be the same length (plus 2 extra spaces).

      for (var i = stat.length; i < longestName + 2; i++) {
        paddedStat += ' ';
      }

      console.log(paddedStat + value);
    });
  };

  Repo.prototype.statsIncrementCounter = function (metric) {
    this.stats_.incrementCounter(metric);
    this.statsReporter_.includeStat(metric);
  };

  Repo.prototype.log_ = function () {
    var varArgs = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      varArgs[_i] = arguments[_i];
    }

    var prefix = '';

    if (this.persistentConnection_) {
      prefix = this.persistentConnection_.id + ':';
    }

    log.apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])([prefix], varArgs));
  };

  Repo.prototype.callOnCompleteCallback = function (callback, status, errorReason) {
    if (callback) {
      exceptionGuard(function () {
        if (status === 'ok') {
          callback(null);
        } else {
          var code = (status || 'error').toUpperCase();
          var message = code;

          if (errorReason) {
            message += ': ' + errorReason;
          }

          var error = new Error(message); // eslint-disable-next-line @typescript-eslint/no-explicit-any

          error.code = code;
          callback(error);
        }
      });
    }
  };

  Object.defineProperty(Repo.prototype, "database", {
    get: function get() {
      return this.__database || (this.__database = new Database(this));
    },
    enumerable: false,
    configurable: true
  });
  /**
   * Creates a new transaction, adds it to the transactions we're tracking, and
   * sends it to the server if possible.
   *
   * @param path Path at which to do transaction.
   * @param transactionUpdate Update callback.
   * @param onComplete Completion callback.
   * @param applyLocally Whether or not to make intermediate results visible
   */

  Repo.prototype.startTransaction = function (path, transactionUpdate, onComplete, applyLocally) {
    this.log_('transaction on ' + path); // Add a watch to make sure we get server updates.

    var valueCallback = function valueCallback() {};

    var watchRef = new Reference(this, path);
    watchRef.on('value', valueCallback);

    var unwatcher = function unwatcher() {
      watchRef.off('value', valueCallback);
    }; // Initialize transaction.


    var transaction = {
      path: path,
      update: transactionUpdate,
      onComplete: onComplete,
      // One of TransactionStatus enums.
      status: null,
      // Used when combining transactions at different locations to figure out
      // which one goes first.
      order: LUIDGenerator(),
      // Whether to raise local events for this transaction.
      applyLocally: applyLocally,
      // Count of how many times we've retried the transaction.
      retryCount: 0,
      // Function to call to clean up our .on() listener.
      unwatcher: unwatcher,
      // Stores why a transaction was aborted.
      abortReason: null,
      currentWriteId: null,
      currentInputSnapshot: null,
      currentOutputSnapshotRaw: null,
      currentOutputSnapshotResolved: null
    }; // Run transaction initially.

    var currentState = this.getLatestState_(path);
    transaction.currentInputSnapshot = currentState;
    var newVal = transaction.update(currentState.val());

    if (newVal === undefined) {
      // Abort transaction.
      transaction.unwatcher();
      transaction.currentOutputSnapshotRaw = null;
      transaction.currentOutputSnapshotResolved = null;

      if (transaction.onComplete) {
        // We just set the input snapshot, so this cast should be safe
        var snapshot = new DataSnapshot(transaction.currentInputSnapshot, new Reference(this, transaction.path), PRIORITY_INDEX);
        transaction.onComplete(null, false, snapshot);
      }
    } else {
      validateFirebaseData('transaction failed: Data returned ', newVal, transaction.path); // Mark as run and add to our queue.

      transaction.status = TransactionStatus.RUN;
      var queueNode = this.transactionQueueTree_.subTree(path);
      var nodeQueue = queueNode.getValue() || [];
      nodeQueue.push(transaction);
      queueNode.setValue(nodeQueue); // Update visibleData and raise events
      // Note: We intentionally raise events after updating all of our
      // transaction state, since the user could start new transactions from the
      // event callbacks.

      var priorityForNode = void 0;

      if (typeof newVal === 'object' && newVal !== null && Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["contains"])(newVal, '.priority')) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        priorityForNode = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["safeGet"])(newVal, '.priority');
        Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(isValidPriority(priorityForNode), 'Invalid priority returned by transaction. ' + 'Priority must be a valid string, finite number, server value, or null.');
      } else {
        var currentNode = this.serverSyncTree_.calcCompleteEventCache(path) || ChildrenNode.EMPTY_NODE;
        priorityForNode = currentNode.getPriority().val();
      }

      var serverValues = this.generateServerValues();
      var newNodeUnresolved = nodeFromJSON$1(newVal, priorityForNode);
      var newNode = resolveDeferredValueSnapshot(newNodeUnresolved, currentState, serverValues);
      transaction.currentOutputSnapshotRaw = newNodeUnresolved;
      transaction.currentOutputSnapshotResolved = newNode;
      transaction.currentWriteId = this.getNextWriteId_();
      var events = this.serverSyncTree_.applyUserOverwrite(path, newNode, transaction.currentWriteId, transaction.applyLocally);
      eventQueueRaiseEventsForChangedPath(this.eventQueue_, path, events);
      this.sendReadyTransactions_();
    }
  };
  /**
   * @param excludeSets A specific set to exclude
   */


  Repo.prototype.getLatestState_ = function (path, excludeSets) {
    return this.serverSyncTree_.calcCompleteEventCache(path, excludeSets) || ChildrenNode.EMPTY_NODE;
  };
  /**
   * Sends any already-run transactions that aren't waiting for outstanding
   * transactions to complete.
   *
   * Externally it's called with no arguments, but it calls itself recursively
   * with a particular transactionQueueTree node to recurse through the tree.
   *
   * @param node transactionQueueTree node to start at.
   */


  Repo.prototype.sendReadyTransactions_ = function (node) {
    var _this = this;

    if (node === void 0) {
      node = this.transactionQueueTree_;
    } // Before recursing, make sure any completed transactions are removed.


    if (!node) {
      this.pruneCompletedTransactionsBelowNode_(node);
    }

    if (node.getValue() !== null) {
      var queue = this.buildTransactionQueue_(node);
      Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(queue.length > 0, 'Sending zero length transaction queue');
      var allRun = queue.every(function (transaction) {
        return transaction.status === TransactionStatus.RUN;
      }); // If they're all run (and not sent), we can send them.  Else, we must wait.

      if (allRun) {
        this.sendTransactionQueue_(node.path(), queue);
      }
    } else if (node.hasChildren()) {
      node.forEachChild(function (childNode) {
        _this.sendReadyTransactions_(childNode);
      });
    }
  };
  /**
   * Given a list of run transactions, send them to the server and then handle
   * the result (success or failure).
   *
   * @param path The location of the queue.
   * @param queue Queue of transactions under the specified location.
   */


  Repo.prototype.sendTransactionQueue_ = function (path, queue) {
    var _this = this; // Mark transactions as sent and increment retry count!


    var setsToIgnore = queue.map(function (txn) {
      return txn.currentWriteId;
    });
    var latestState = this.getLatestState_(path, setsToIgnore);
    var snapToSend = latestState;
    var latestHash = latestState.hash();

    for (var i = 0; i < queue.length; i++) {
      var txn = queue[i];
      Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(txn.status === TransactionStatus.RUN, 'tryToSendTransactionQueue_: items in queue should all be run.');
      txn.status = TransactionStatus.SENT;
      txn.retryCount++;
      var relativePath = newRelativePath(path, txn.path); // If we've gotten to this point, the output snapshot must be defined.

      snapToSend = snapToSend.updateChild(relativePath
      /** @type {!Node} */
      , txn.currentOutputSnapshotRaw);
    }

    var dataToSend = snapToSend.val(true);
    var pathToSend = path; // Send the put.

    this.server_.put(pathToSend.toString(), dataToSend, function (status) {
      _this.log_('transaction put response', {
        path: pathToSend.toString(),
        status: status
      });

      var events = [];

      if (status === 'ok') {
        // Queue up the callbacks and fire them after cleaning up all of our
        // transaction state, since the callback could trigger more
        // transactions or sets.
        var callbacks = [];

        for (var i = 0; i < queue.length; i++) {
          queue[i].status = TransactionStatus.COMPLETED;
          events = events.concat(_this.serverSyncTree_.ackUserWrite(queue[i].currentWriteId));

          if (queue[i].onComplete) {
            // We never unset the output snapshot, and given that this
            // transaction is complete, it should be set
            var node = queue[i].currentOutputSnapshotResolved;
            var ref = new Reference(_this, queue[i].path);
            var snapshot = new DataSnapshot(node, ref, PRIORITY_INDEX);
            callbacks.push(queue[i].onComplete.bind(null, null, true, snapshot));
          }

          queue[i].unwatcher();
        } // Now remove the completed transactions.


        _this.pruneCompletedTransactionsBelowNode_(_this.transactionQueueTree_.subTree(path)); // There may be pending transactions that we can now send.


        _this.sendReadyTransactions_();

        eventQueueRaiseEventsForChangedPath(_this.eventQueue_, path, events); // Finally, trigger onComplete callbacks.

        for (var i = 0; i < callbacks.length; i++) {
          exceptionGuard(callbacks[i]);
        }
      } else {
        // transactions are no longer sent.  Update their status appropriately.
        if (status === 'datastale') {
          for (var i = 0; i < queue.length; i++) {
            if (queue[i].status === TransactionStatus.SENT_NEEDS_ABORT) {
              queue[i].status = TransactionStatus.NEEDS_ABORT;
            } else {
              queue[i].status = TransactionStatus.RUN;
            }
          }
        } else {
          warn('transaction at ' + pathToSend.toString() + ' failed: ' + status);

          for (var i = 0; i < queue.length; i++) {
            queue[i].status = TransactionStatus.NEEDS_ABORT;
            queue[i].abortReason = status;
          }
        }

        _this.rerunTransactions_(path);
      }
    }, latestHash);
  };
  /**
   * Finds all transactions dependent on the data at changedPath and reruns them.
   *
   * Should be called any time cached data changes.
   *
   * Return the highest path that was affected by rerunning transactions. This
   * is the path at which events need to be raised for.
   *
   * @param changedPath The path in mergedData that changed.
   * @return The rootmost path that was affected by rerunning transactions.
   */


  Repo.prototype.rerunTransactions_ = function (changedPath) {
    var rootMostTransactionNode = this.getAncestorTransactionNode_(changedPath);
    var path = rootMostTransactionNode.path();
    var queue = this.buildTransactionQueue_(rootMostTransactionNode);
    this.rerunTransactionQueue_(queue, path);
    return path;
  };
  /**
   * Does all the work of rerunning transactions (as well as cleans up aborted
   * transactions and whatnot).
   *
   * @param queue The queue of transactions to run.
   * @param path The path the queue is for.
   */


  Repo.prototype.rerunTransactionQueue_ = function (queue, path) {
    if (queue.length === 0) {
      return; // Nothing to do!
    } // Queue up the callbacks and fire them after cleaning up all of our
    // transaction state, since the callback could trigger more transactions or
    // sets.


    var callbacks = [];
    var events = []; // Ignore all of the sets we're going to re-run.

    var txnsToRerun = queue.filter(function (q) {
      return q.status === TransactionStatus.RUN;
    });
    var setsToIgnore = txnsToRerun.map(function (q) {
      return q.currentWriteId;
    });

    for (var i = 0; i < queue.length; i++) {
      var transaction = queue[i];
      var relativePath = newRelativePath(path, transaction.path);
      var abortTransaction = false,
          abortReason = void 0;
      Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(relativePath !== null, 'rerunTransactionsUnderNode_: relativePath should not be null.');

      if (transaction.status === TransactionStatus.NEEDS_ABORT) {
        abortTransaction = true;
        abortReason = transaction.abortReason;
        events = events.concat(this.serverSyncTree_.ackUserWrite(transaction.currentWriteId, true));
      } else if (transaction.status === TransactionStatus.RUN) {
        if (transaction.retryCount >= MAX_TRANSACTION_RETRIES) {
          abortTransaction = true;
          abortReason = 'maxretry';
          events = events.concat(this.serverSyncTree_.ackUserWrite(transaction.currentWriteId, true));
        } else {
          // This code reruns a transaction
          var currentNode = this.getLatestState_(transaction.path, setsToIgnore);
          transaction.currentInputSnapshot = currentNode;
          var newData = queue[i].update(currentNode.val());

          if (newData !== undefined) {
            validateFirebaseData('transaction failed: Data returned ', newData, transaction.path);
            var newDataNode = nodeFromJSON$1(newData);
            var hasExplicitPriority = typeof newData === 'object' && newData != null && Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["contains"])(newData, '.priority');

            if (!hasExplicitPriority) {
              // Keep the old priority if there wasn't a priority explicitly specified.
              newDataNode = newDataNode.updatePriority(currentNode.getPriority());
            }

            var oldWriteId = transaction.currentWriteId;
            var serverValues = this.generateServerValues();
            var newNodeResolved = resolveDeferredValueSnapshot(newDataNode, currentNode, serverValues);
            transaction.currentOutputSnapshotRaw = newDataNode;
            transaction.currentOutputSnapshotResolved = newNodeResolved;
            transaction.currentWriteId = this.getNextWriteId_(); // Mutates setsToIgnore in place

            setsToIgnore.splice(setsToIgnore.indexOf(oldWriteId), 1);
            events = events.concat(this.serverSyncTree_.applyUserOverwrite(transaction.path, newNodeResolved, transaction.currentWriteId, transaction.applyLocally));
            events = events.concat(this.serverSyncTree_.ackUserWrite(oldWriteId, true));
          } else {
            abortTransaction = true;
            abortReason = 'nodata';
            events = events.concat(this.serverSyncTree_.ackUserWrite(transaction.currentWriteId, true));
          }
        }
      }

      eventQueueRaiseEventsForChangedPath(this.eventQueue_, path, events);
      events = [];

      if (abortTransaction) {
        // Abort.
        queue[i].status = TransactionStatus.COMPLETED; // Removing a listener can trigger pruning which can muck with
        // mergedData/visibleData (as it prunes data). So defer the unwatcher
        // until we're done.

        (function (unwatcher) {
          setTimeout(unwatcher, Math.floor(0));
        })(queue[i].unwatcher);

        if (queue[i].onComplete) {
          if (abortReason === 'nodata') {
            var ref = new Reference(this, queue[i].path); // We set this field immediately, so it's safe to cast to an actual snapshot

            var lastInput
            /** @type {!Node} */
            = queue[i].currentInputSnapshot;
            var snapshot = new DataSnapshot(lastInput, ref, PRIORITY_INDEX);
            callbacks.push(queue[i].onComplete.bind(null, null, false, snapshot));
          } else {
            callbacks.push(queue[i].onComplete.bind(null, new Error(abortReason), false, null));
          }
        }
      }
    } // Clean up completed transactions.


    this.pruneCompletedTransactionsBelowNode_(this.transactionQueueTree_); // Now fire callbacks, now that we're in a good, known state.

    for (var i = 0; i < callbacks.length; i++) {
      exceptionGuard(callbacks[i]);
    } // Try to send the transaction result to the server.


    this.sendReadyTransactions_();
  };
  /**
   * Returns the rootmost ancestor node of the specified path that has a pending
   * transaction on it, or just returns the node for the given path if there are
   * no pending transactions on any ancestor.
   *
   * @param path The location to start at.
   * @return The rootmost node with a transaction.
   */


  Repo.prototype.getAncestorTransactionNode_ = function (path) {
    var front; // Start at the root and walk deeper into the tree towards path until we
    // find a node with pending transactions.

    var transactionNode = this.transactionQueueTree_;
    front = pathGetFront(path);

    while (front !== null && transactionNode.getValue() === null) {
      transactionNode = transactionNode.subTree(front);
      path = pathPopFront(path);
      front = pathGetFront(path);
    }

    return transactionNode;
  };
  /**
   * Builds the queue of all transactions at or below the specified
   * transactionNode.
   *
   * @param transactionNode
   * @return The generated queue.
   */


  Repo.prototype.buildTransactionQueue_ = function (transactionNode) {
    // Walk any child transaction queues and aggregate them into a single queue.
    var transactionQueue = [];
    this.aggregateTransactionQueuesForNode_(transactionNode, transactionQueue); // Sort them by the order the transactions were created.

    transactionQueue.sort(function (a, b) {
      return a.order - b.order;
    });
    return transactionQueue;
  };

  Repo.prototype.aggregateTransactionQueuesForNode_ = function (node, queue) {
    var _this = this;

    var nodeQueue = node.getValue();

    if (nodeQueue !== null) {
      for (var i = 0; i < nodeQueue.length; i++) {
        queue.push(nodeQueue[i]);
      }
    }

    node.forEachChild(function (child) {
      _this.aggregateTransactionQueuesForNode_(child, queue);
    });
  };
  /**
   * Remove COMPLETED transactions at or below this node in the transactionQueueTree_.
   */


  Repo.prototype.pruneCompletedTransactionsBelowNode_ = function (node) {
    var _this = this;

    var queue = node.getValue();

    if (queue) {
      var to = 0;

      for (var from = 0; from < queue.length; from++) {
        if (queue[from].status !== TransactionStatus.COMPLETED) {
          queue[to] = queue[from];
          to++;
        }
      }

      queue.length = to;
      node.setValue(queue.length > 0 ? queue : null);
    }

    node.forEachChild(function (childNode) {
      _this.pruneCompletedTransactionsBelowNode_(childNode);
    });
  };
  /**
   * Aborts all transactions on ancestors or descendants of the specified path.
   * Called when doing a set() or update() since we consider them incompatible
   * with transactions.
   *
   * @param path Path for which we want to abort related transactions.
   */


  Repo.prototype.abortTransactions_ = function (path) {
    var _this = this;

    var affectedPath = this.getAncestorTransactionNode_(path).path();
    var transactionNode = this.transactionQueueTree_.subTree(path);
    transactionNode.forEachAncestor(function (node) {
      _this.abortTransactionsOnNode_(node);
    });
    this.abortTransactionsOnNode_(transactionNode);
    transactionNode.forEachDescendant(function (node) {
      _this.abortTransactionsOnNode_(node);
    });
    return affectedPath;
  };
  /**
   * Abort transactions stored in this transaction queue node.
   *
   * @param node Node to abort transactions for.
   */


  Repo.prototype.abortTransactionsOnNode_ = function (node) {
    var queue = node.getValue();

    if (queue !== null) {
      // Queue up the callbacks and fire them after cleaning up all of our
      // transaction state, since the callback could trigger more transactions
      // or sets.
      var callbacks = []; // Go through queue.  Any already-sent transactions must be marked for
      // abort, while the unsent ones can be immediately aborted and removed.

      var events = [];
      var lastSent = -1;

      for (var i = 0; i < queue.length; i++) {
        if (queue[i].status === TransactionStatus.SENT_NEEDS_ABORT) ;else if (queue[i].status === TransactionStatus.SENT) {
          Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(lastSent === i - 1, 'All SENT items should be at beginning of queue.');
          lastSent = i; // Mark transaction for abort when it comes back.

          queue[i].status = TransactionStatus.SENT_NEEDS_ABORT;
          queue[i].abortReason = 'set';
        } else {
          Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(queue[i].status === TransactionStatus.RUN, 'Unexpected transaction status in abort'); // We can abort it immediately.

          queue[i].unwatcher();
          events = events.concat(this.serverSyncTree_.ackUserWrite(queue[i].currentWriteId, true));

          if (queue[i].onComplete) {
            var snapshot = null;
            callbacks.push(queue[i].onComplete.bind(null, new Error('set'), false, snapshot));
          }
        }
      }

      if (lastSent === -1) {
        // We're not waiting for any sent transactions.  We can clear the queue.
        node.setValue(null);
      } else {
        // Remove the transactions we aborted.
        queue.length = lastSent + 1;
      } // Now fire the callbacks.


      eventQueueRaiseEventsForChangedPath(this.eventQueue_, node.path(), events);

      for (var i = 0; i < callbacks.length; i++) {
        exceptionGuard(callbacks[i]);
      }
    }
  };

  return Repo;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var Reference =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(Reference, _super);
  /**
   * Call options:
   *   new Reference(Repo, Path) or
   *   new Reference(url: string, string|RepoManager)
   *
   * Externally - this is the firebase.database.Reference type.
   */


  function Reference(repo, path) {
    var _this = this;

    if (!(repo instanceof Repo)) {
      throw new Error('new Reference() no longer supported - use app.database().');
    } // call Query's constructor, passing in the repo and path.


    _this = _super.call(this, repo, path, new QueryParams(), false) || this;
    return _this;
  }
  /** @return {?string} */


  Reference.prototype.getKey = function () {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateArgCount"])('Reference.key', 0, 0, arguments.length);

    if (pathIsEmpty(this.path)) {
      return null;
    } else {
      return pathGetBack(this.path);
    }
  };

  Reference.prototype.child = function (pathString) {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateArgCount"])('Reference.child', 1, 1, arguments.length);

    if (typeof pathString === 'number') {
      pathString = String(pathString);
    } else if (!(pathString instanceof Path)) {
      if (pathGetFront(this.path) === null) {
        validateRootPathString('Reference.child', 1, pathString, false);
      } else {
        validatePathString('Reference.child', 1, pathString, false);
      }
    }

    return new Reference(this.repo, pathChild(this.path, pathString));
  };
  /** @return {?Reference} */


  Reference.prototype.getParent = function () {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateArgCount"])('Reference.parent', 0, 0, arguments.length);
    var parentPath = pathParent(this.path);
    return parentPath === null ? null : new Reference(this.repo, parentPath);
  };
  /** @return {!Reference} */


  Reference.prototype.getRoot = function () {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateArgCount"])('Reference.root', 0, 0, arguments.length);
    var ref = this;

    while (ref.getParent() !== null) {
      ref = ref.getParent();
    }

    return ref;
  };
  /** @return {!Database} */


  Reference.prototype.databaseProp = function () {
    return this.repo.database;
  };

  Reference.prototype.set = function (newVal, onComplete) {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateArgCount"])('Reference.set', 1, 2, arguments.length);
    validateWritablePath('Reference.set', this.path);
    validateFirebaseDataArg('Reference.set', 1, newVal, this.path, false);
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateCallback"])('Reference.set', 2, onComplete, true);
    var deferred = new _firebase_util__WEBPACK_IMPORTED_MODULE_2__["Deferred"]();
    this.repo.setWithPriority(this.path, newVal,
    /*priority=*/
    null, deferred.wrapCallback(onComplete));
    return deferred.promise;
  };

  Reference.prototype.update = function (objectToMerge, onComplete) {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateArgCount"])('Reference.update', 1, 2, arguments.length);
    validateWritablePath('Reference.update', this.path);

    if (Array.isArray(objectToMerge)) {
      var newObjectToMerge = {};

      for (var i = 0; i < objectToMerge.length; ++i) {
        newObjectToMerge['' + i] = objectToMerge[i];
      }

      objectToMerge = newObjectToMerge;
      warn('Passing an Array to Firebase.update() is deprecated. ' + 'Use set() if you want to overwrite the existing data, or ' + 'an Object with integer keys if you really do want to ' + 'only update some of the children.');
    }

    validateFirebaseMergeDataArg('Reference.update', 1, objectToMerge, this.path, false);
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateCallback"])('Reference.update', 2, onComplete, true);
    var deferred = new _firebase_util__WEBPACK_IMPORTED_MODULE_2__["Deferred"]();
    this.repo.update(this.path, objectToMerge, deferred.wrapCallback(onComplete));
    return deferred.promise;
  };

  Reference.prototype.setWithPriority = function (newVal, newPriority, onComplete) {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateArgCount"])('Reference.setWithPriority', 2, 3, arguments.length);
    validateWritablePath('Reference.setWithPriority', this.path);
    validateFirebaseDataArg('Reference.setWithPriority', 1, newVal, this.path, false);
    validatePriority('Reference.setWithPriority', 2, newPriority, false);
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateCallback"])('Reference.setWithPriority', 3, onComplete, true);

    if (this.getKey() === '.length' || this.getKey() === '.keys') {
      throw 'Reference.setWithPriority failed: ' + this.getKey() + ' is a read-only object.';
    }

    var deferred = new _firebase_util__WEBPACK_IMPORTED_MODULE_2__["Deferred"]();
    this.repo.setWithPriority(this.path, newVal, newPriority, deferred.wrapCallback(onComplete));
    return deferred.promise;
  };

  Reference.prototype.remove = function (onComplete) {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateArgCount"])('Reference.remove', 0, 1, arguments.length);
    validateWritablePath('Reference.remove', this.path);
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateCallback"])('Reference.remove', 1, onComplete, true);
    return this.set(null, onComplete);
  };

  Reference.prototype.transaction = function (transactionUpdate, onComplete, applyLocally) {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateArgCount"])('Reference.transaction', 1, 3, arguments.length);
    validateWritablePath('Reference.transaction', this.path);
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateCallback"])('Reference.transaction', 1, transactionUpdate, false);
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateCallback"])('Reference.transaction', 2, onComplete, true); // NOTE: applyLocally is an internal-only option for now.  We need to decide if we want to keep it and how
    // to expose it.

    validateBoolean('Reference.transaction', 3, applyLocally, true);

    if (this.getKey() === '.length' || this.getKey() === '.keys') {
      throw 'Reference.transaction failed: ' + this.getKey() + ' is a read-only object.';
    }

    if (applyLocally === undefined) {
      applyLocally = true;
    }

    var deferred = new _firebase_util__WEBPACK_IMPORTED_MODULE_2__["Deferred"]();

    if (typeof onComplete === 'function') {
      deferred.promise.catch(function () {});
    }

    var promiseComplete = function promiseComplete(error, committed, snapshot) {
      if (error) {
        deferred.reject(error);
      } else {
        deferred.resolve(new TransactionResult(committed, snapshot));
      }

      if (typeof onComplete === 'function') {
        onComplete(error, committed, snapshot);
      }
    };

    this.repo.startTransaction(this.path, transactionUpdate, promiseComplete, applyLocally);
    return deferred.promise;
  };

  Reference.prototype.setPriority = function (priority, onComplete) {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateArgCount"])('Reference.setPriority', 1, 2, arguments.length);
    validateWritablePath('Reference.setPriority', this.path);
    validatePriority('Reference.setPriority', 1, priority, false);
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateCallback"])('Reference.setPriority', 2, onComplete, true);
    var deferred = new _firebase_util__WEBPACK_IMPORTED_MODULE_2__["Deferred"]();
    this.repo.setWithPriority(pathChild(this.path, '.priority'), priority, null, deferred.wrapCallback(onComplete));
    return deferred.promise;
  };

  Reference.prototype.push = function (value, onComplete) {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateArgCount"])('Reference.push', 0, 2, arguments.length);
    validateWritablePath('Reference.push', this.path);
    validateFirebaseDataArg('Reference.push', 1, value, this.path, true);
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateCallback"])('Reference.push', 2, onComplete, true);
    var now = this.repo.serverTime();
    var name = nextPushId(now); // push() returns a ThennableReference whose promise is fulfilled with a regular Reference.
    // We use child() to create handles to two different references. The first is turned into a
    // ThennableReference below by adding then() and catch() methods and is used as the
    // return value of push(). The second remains a regular Reference and is used as the fulfilled
    // value of the first ThennableReference.

    var thennablePushRef = this.child(name);
    var pushRef = this.child(name);
    var promise;

    if (value != null) {
      promise = thennablePushRef.set(value, onComplete).then(function () {
        return pushRef;
      });
    } else {
      promise = Promise.resolve(pushRef);
    }

    thennablePushRef.then = promise.then.bind(promise);
    thennablePushRef.catch = promise.then.bind(promise, undefined);

    if (typeof onComplete === 'function') {
      promise.catch(function () {});
    }

    return thennablePushRef;
  };

  Reference.prototype.onDisconnect = function () {
    validateWritablePath('Reference.onDisconnect', this.path);
    return new OnDisconnect(this.repo, this.path);
  };

  Object.defineProperty(Reference.prototype, "database", {
    get: function get() {
      return this.databaseProp();
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Reference.prototype, "key", {
    get: function get() {
      return this.getKey();
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Reference.prototype, "parent", {
    get: function get() {
      return this.getParent();
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Reference.prototype, "root", {
    get: function get() {
      return this.getRoot();
    },
    enumerable: false,
    configurable: true
  });
  return Reference;
}(Query);
/**
 * Define reference constructor in various modules
 *
 * We are doing this here to avoid several circular
 * dependency issues
 */


Query.__referenceConstructor = Reference;
SyncPoint.__referenceConstructor = Reference;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Abstraction around FirebaseApp's token fetching capabilities.
 */

var FirebaseAuthTokenProvider =
/** @class */
function () {
  function FirebaseAuthTokenProvider(app_, authProvider_) {
    var _this = this;

    this.app_ = app_;
    this.authProvider_ = authProvider_;
    this.auth_ = null;
    this.auth_ = authProvider_.getImmediate({
      optional: true
    });

    if (!this.auth_) {
      authProvider_.get().then(function (auth) {
        return _this.auth_ = auth;
      });
    }
  }

  FirebaseAuthTokenProvider.prototype.getToken = function (forceRefresh) {
    if (!this.auth_) {
      return Promise.resolve(null);
    }

    return this.auth_.getToken(forceRefresh).catch(function (error) {
      // TODO: Need to figure out all the cases this is raised and whether
      // this makes sense.
      if (error && error.code === 'auth/token-not-initialized') {
        log('Got auth/token-not-initialized error.  Treating as null token.');
        return null;
      } else {
        return Promise.reject(error);
      }
    });
  };

  FirebaseAuthTokenProvider.prototype.addTokenChangeListener = function (listener) {
    // TODO: We might want to wrap the listener and call it with no args to
    // avoid a leaky abstraction, but that makes removing the listener harder.
    if (this.auth_) {
      this.auth_.addAuthTokenListener(listener);
    } else {
      setTimeout(function () {
        return listener(null);
      }, 0);
      this.authProvider_.get().then(function (auth) {
        return auth.addAuthTokenListener(listener);
      });
    }
  };

  FirebaseAuthTokenProvider.prototype.removeTokenChangeListener = function (listener) {
    this.authProvider_.get().then(function (auth) {
      return auth.removeAuthTokenListener(listener);
    });
  };

  FirebaseAuthTokenProvider.prototype.notifyForInvalidToken = function () {
    var errorMessage = 'Provided authentication credentials for the app named "' + this.app_.name + '" are invalid. This usually indicates your app was not ' + 'initialized correctly. ';

    if ('credential' in this.app_.options) {
      errorMessage += 'Make sure the "credential" property provided to initializeApp() ' + 'is authorized to access the specified "databaseURL" and is from the correct ' + 'project.';
    } else if ('serviceAccount' in this.app_.options) {
      errorMessage += 'Make sure the "serviceAccount" property provided to initializeApp() ' + 'is authorized to access the specified "databaseURL" and is from the correct ' + 'project.';
    } else {
      errorMessage += 'Make sure the "apiKey" and "databaseURL" properties provided to ' + 'initializeApp() match the values provided for your app at ' + 'https://console.firebase.google.com/.';
    }

    warn(errorMessage);
  };

  return FirebaseAuthTokenProvider;
}();
/* Auth token provider that the Admin SDK uses to connect to the Emulator. */


var EmulatorAdminTokenProvider =
/** @class */
function () {
  function EmulatorAdminTokenProvider() {}

  EmulatorAdminTokenProvider.prototype.getToken = function (forceRefresh) {
    return Promise.resolve({
      accessToken: EmulatorAdminTokenProvider.EMULATOR_AUTH_TOKEN
    });
  };

  EmulatorAdminTokenProvider.prototype.addTokenChangeListener = function (listener) {
    // Invoke the listener immediately to match the behavior in Firebase Auth
    // (see packages/auth/src/auth.js#L1807)
    listener(EmulatorAdminTokenProvider.EMULATOR_AUTH_TOKEN);
  };

  EmulatorAdminTokenProvider.prototype.removeTokenChangeListener = function (listener) {};

  EmulatorAdminTokenProvider.prototype.notifyForInvalidToken = function () {};

  EmulatorAdminTokenProvider.EMULATOR_AUTH_TOKEN = 'owner';
  return EmulatorAdminTokenProvider;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * This variable is also defined in the firebase node.js admin SDK. Before
 * modifying this definition, consult the definition in:
 *
 * https://github.com/firebase/firebase-admin-node
 *
 * and make sure the two are consistent.
 */


var FIREBASE_DATABASE_EMULATOR_HOST_VAR = 'FIREBASE_DATABASE_EMULATOR_HOST';

var _staticInstance;
/**
 * Creates and caches Repo instances.
 */


var RepoManager =
/** @class */
function () {
  function RepoManager() {
    this.repos_ = {};
    /**
     * If true, new Repos will be created to use ReadonlyRestClient (for testing purposes).
     */

    this.useRestClient_ = false;
  }

  RepoManager.getInstance = function () {
    if (!_staticInstance) {
      _staticInstance = new RepoManager();
    }

    return _staticInstance;
  }; // TODO(koss): Remove these functions unless used in tests?


  RepoManager.prototype.interrupt = function () {
    var e_1, _a, e_2, _b;

    try {
      for (var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(Object.keys(this.repos_)), _d = _c.next(); !_d.done; _d = _c.next()) {
        var appName = _d.value;

        try {
          for (var _e = (e_2 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(Object.keys(this.repos_[appName]))), _f = _e.next(); !_f.done; _f = _e.next()) {
            var dbUrl = _f.value;
            this.repos_[appName][dbUrl].interrupt();
          }
        } catch (e_2_1) {
          e_2 = {
            error: e_2_1
          };
        } finally {
          try {
            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
          } finally {
            if (e_2) throw e_2.error;
          }
        }
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
  };

  RepoManager.prototype.resume = function () {
    var e_3, _a, e_4, _b;

    try {
      for (var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(Object.keys(this.repos_)), _d = _c.next(); !_d.done; _d = _c.next()) {
        var appName = _d.value;

        try {
          for (var _e = (e_4 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(Object.keys(this.repos_[appName]))), _f = _e.next(); !_f.done; _f = _e.next()) {
            var dbUrl = _f.value;
            this.repos_[appName][dbUrl].resume();
          }
        } catch (e_4_1) {
          e_4 = {
            error: e_4_1
          };
        } finally {
          try {
            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
          } finally {
            if (e_4) throw e_4.error;
          }
        }
      }
    } catch (e_3_1) {
      e_3 = {
        error: e_3_1
      };
    } finally {
      try {
        if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
      } finally {
        if (e_3) throw e_3.error;
      }
    }
  };
  /**
   * Update an existing repo in place to point to a new host/port.
   */


  RepoManager.prototype.applyEmulatorSettings = function (repo, host, port) {
    repo.repoInfo_ = new RepoInfo(host + ":" + port,
    /* secure= */
    false, repo.repoInfo_.namespace, repo.repoInfo_.webSocketOnly, repo.repoInfo_.nodeAdmin, repo.repoInfo_.persistenceKey, repo.repoInfo_.includeNamespaceInQueryParams);

    if (repo.repoInfo_.nodeAdmin) {
      repo.authTokenProvider_ = new EmulatorAdminTokenProvider();
    }
  };
  /**
   * This function should only ever be called to CREATE a new database instance.
   */


  RepoManager.prototype.databaseFromApp = function (app, authProvider, url, nodeAdmin) {
    var dbUrl = url || app.options.databaseURL;

    if (dbUrl === undefined) {
      if (!app.options.projectId) {
        fatal("Can't determine Firebase Database URL. Be sure to include " + ' a Project ID when calling firebase.initializeApp().');
      }

      log('Using default host for project ', app.options.projectId);
      dbUrl = app.options.projectId + "-default-rtdb.firebaseio.com";
    }

    var parsedUrl = parseRepoInfo(dbUrl, nodeAdmin);
    var repoInfo = parsedUrl.repoInfo;
    var isEmulator;
    var dbEmulatorHost = undefined;

    if (typeof process !== 'undefined') {
      dbEmulatorHost = process.env[FIREBASE_DATABASE_EMULATOR_HOST_VAR];
    }

    if (dbEmulatorHost) {
      isEmulator = true;
      dbUrl = "http://" + dbEmulatorHost + "?ns=" + repoInfo.namespace;
      parsedUrl = parseRepoInfo(dbUrl, nodeAdmin);
      repoInfo = parsedUrl.repoInfo;
    } else {
      isEmulator = !parsedUrl.repoInfo.secure;
    }

    var authTokenProvider = nodeAdmin && isEmulator ? new EmulatorAdminTokenProvider() : new FirebaseAuthTokenProvider(app, authProvider);
    validateUrl('Invalid Firebase Database URL', 1, parsedUrl);

    if (!pathIsEmpty(parsedUrl.path)) {
      fatal('Database URL must point to the root of a Firebase Database ' + '(not including a child path).');
    }

    var repo = this.createRepo(repoInfo, app, authTokenProvider);
    return repo.database;
  };
  /**
   * Remove the repo and make sure it is disconnected.
   *
   */


  RepoManager.prototype.deleteRepo = function (repo) {
    var appRepos = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["safeGet"])(this.repos_, repo.app.name); // This should never happen...

    if (!appRepos || Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["safeGet"])(appRepos, repo.key) !== repo) {
      fatal("Database " + repo.app.name + "(" + repo.repoInfo_ + ") has already been deleted.");
    }

    repo.interrupt();
    delete appRepos[repo.key];
  };
  /**
   * Ensures a repo doesn't already exist and then creates one using the
   * provided app.
   *
   * @param repoInfo The metadata about the Repo
   * @return The Repo object for the specified server / repoName.
   */


  RepoManager.prototype.createRepo = function (repoInfo, app, authTokenProvider) {
    var appRepos = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["safeGet"])(this.repos_, app.name);

    if (!appRepos) {
      appRepos = {};
      this.repos_[app.name] = appRepos;
    }

    var repo = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["safeGet"])(appRepos, repoInfo.toURLString());

    if (repo) {
      fatal('Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.');
    }

    repo = new Repo(repoInfo, this.useRestClient_, app, authTokenProvider);
    appRepos[repoInfo.toURLString()] = repo;
    return repo;
  };
  /**
   * Forces us to use ReadonlyRestClient instead of PersistentConnection for new Repos.
   */


  RepoManager.prototype.forceRestClient = function (forceRestClient) {
    this.useRestClient_ = forceRestClient;
  };

  return RepoManager;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Class representing a firebase database.
 */


var Database =
/** @class */
function () {
  /**
   * The constructor should not be called by users of our public API.
   */
  function Database(repoInternal_) {
    var _this = this;

    this.repoInternal_ = repoInternal_;
    /** Track if the instance has been used (root or repo accessed) */

    this.instanceStarted_ = false;
    this.INTERNAL = {
      delete: function _delete() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(_this, void 0, void 0, function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
            this.checkDeleted_('delete');
            RepoManager.getInstance().deleteRepo(this.repo_);
            this.repoInternal_ = null;
            this.rootInternal_ = null;
            return [2
            /*return*/
            ];
          });
        });
      }
    };

    if (!(repoInternal_ instanceof Repo)) {
      fatal("Don't call new Database() directly - please use firebase.database().");
    }
  }

  Object.defineProperty(Database.prototype, "repo_", {
    get: function get() {
      if (!this.instanceStarted_) {
        this.repoInternal_.start();
        this.instanceStarted_ = true;
      }

      return this.repoInternal_;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Database.prototype, "root_", {
    get: function get() {
      if (!this.rootInternal_) {
        this.rootInternal_ = new Reference(this.repo_, newEmptyPath());
      }

      return this.rootInternal_;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Database.prototype, "app", {
    get: function get() {
      return this.repo_.app;
    },
    enumerable: false,
    configurable: true
  });
  /**
   * Modify this instance to communicate with the Realtime Database emulator.
   *
   * <p>Note: This method must be called before performing any other operation.
   *
   * @param host the emulator host (ex: localhost)
   * @param port the emulator port (ex: 8080)
   */

  Database.prototype.useEmulator = function (host, port) {
    this.checkDeleted_('useEmulator');

    if (this.instanceStarted_) {
      fatal('Cannot call useEmulator() after instance has already been initialized.');
      return;
    } // Modify the repo to apply emulator settings


    RepoManager.getInstance().applyEmulatorSettings(this.repoInternal_, host, port);
  };

  Database.prototype.ref = function (path) {
    this.checkDeleted_('ref');
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateArgCount"])('database.ref', 0, 1, arguments.length);

    if (path instanceof Reference) {
      return this.refFromURL(path.toString());
    }

    return path !== undefined ? this.root_.child(path) : this.root_;
  };
  /**
   * Returns a reference to the root or the path specified in url.
   * We throw a exception if the url is not in the same domain as the
   * current repo.
   * @return Firebase reference.
   */


  Database.prototype.refFromURL = function (url) {
    /** @const {string} */
    var apiName = 'database.refFromURL';
    this.checkDeleted_(apiName);
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateArgCount"])(apiName, 1, 1, arguments.length);
    var parsedURL = parseRepoInfo(url, this.repo_.repoInfo_.nodeAdmin);
    validateUrl(apiName, 1, parsedURL);
    var repoInfo = parsedURL.repoInfo;

    if (!this.repo_.repoInfo_.isCustomHost() && repoInfo.host !== this.repo_.repoInfo_.host) {
      fatal(apiName + ': Host name does not match the current database: ' + '(found ' + repoInfo.host + ' but expected ' + this.repo_.repoInfo_.host + ')');
    }

    return this.ref(parsedURL.path.toString());
  };

  Database.prototype.checkDeleted_ = function (apiName) {
    if (this.repoInternal_ === null) {
      fatal('Cannot call ' + apiName + ' on a deleted database.');
    }
  }; // Make individual repo go offline.


  Database.prototype.goOffline = function () {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateArgCount"])('database.goOffline', 0, 0, arguments.length);
    this.checkDeleted_('goOffline');
    this.repo_.interrupt();
  };

  Database.prototype.goOnline = function () {
    Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["validateArgCount"])('database.goOnline', 0, 0, arguments.length);
    this.checkDeleted_('goOnline');
    this.repo_.resume();
  };

  Database.ServerValue = {
    TIMESTAMP: {
      '.sv': 'timestamp'
    },
    increment: function increment(delta) {
      return {
        '.sv': {
          'increment': delta
        }
      };
    }
  };
  return Database;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * INTERNAL methods for internal-use only (tests, etc.).
 *
 * Customers shouldn't use these or else should be aware that they could break at any time.
 */


var forceLongPolling = function forceLongPolling() {
  WebSocketConnection.forceDisallow();
  BrowserPollConnection.forceAllow();
};

var forceWebSockets = function forceWebSockets() {
  BrowserPollConnection.forceDisallow();
};
/* Used by App Manager */


var isWebSocketsAvailable = function isWebSocketsAvailable() {
  return WebSocketConnection['isAvailable']();
};

var setSecurityDebugCallback = function setSecurityDebugCallback(ref, callback) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref.repo.persistentConnection_.securityDebugCallback_ = callback;
};

var stats = function stats(ref, showDelta) {
  ref.repo.stats(showDelta);
};

var statsIncrementCounter = function statsIncrementCounter(ref, metric) {
  ref.repo.statsIncrementCounter(metric);
};

var dataUpdateCount = function dataUpdateCount(ref) {
  return ref.repo.dataUpdateCount;
};

var interceptServerData = function interceptServerData(ref, callback) {
  return ref.repo.interceptServerData_(callback);
};
/**
 * Used by console to create a database based on the app,
 * passed database URL and a custom auth implementation.
 *
 * @param app A valid FirebaseApp-like object
 * @param url A valid Firebase databaseURL
 * @param version custom version e.g. firebase-admin version
 * @param customAuthImpl custom auth implementation
 */


function initStandalone(_a) {
  var app = _a.app,
      url = _a.url,
      version = _a.version,
      customAuthImpl = _a.customAuthImpl,
      namespace = _a.namespace,
      _b = _a.nodeAdmin,
      nodeAdmin = _b === void 0 ? false : _b;
  setSDKVersion(version);
  /**
   * ComponentContainer('database-standalone') is just a placeholder that doesn't perform
   * any actual function.
   */

  var authProvider = new _firebase_component__WEBPACK_IMPORTED_MODULE_4__["Provider"]('auth-internal', new _firebase_component__WEBPACK_IMPORTED_MODULE_4__["ComponentContainer"]('database-standalone'));
  authProvider.setComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_4__["Component"]('auth-internal', function () {
    return customAuthImpl;
  }, "PRIVATE"
  /* PRIVATE */
  ));
  return {
    instance: RepoManager.getInstance().databaseFromApp(app, authProvider, url, nodeAdmin),
    namespace: namespace
  };
}

var INTERNAL = /*#__PURE__*/Object.freeze({
  __proto__: null,
  forceLongPolling: forceLongPolling,
  forceWebSockets: forceWebSockets,
  isWebSocketsAvailable: isWebSocketsAvailable,
  setSecurityDebugCallback: setSecurityDebugCallback,
  stats: stats,
  statsIncrementCounter: statsIncrementCounter,
  dataUpdateCount: dataUpdateCount,
  interceptServerData: interceptServerData,
  initStandalone: initStandalone
});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var DataConnection = PersistentConnection; // eslint-disable-next-line @typescript-eslint/no-explicit-any

PersistentConnection.prototype.simpleListen = function (pathString, onComplete) {
  this.sendRequest('q', {
    p: pathString
  }, onComplete);
}; // eslint-disable-next-line @typescript-eslint/no-explicit-any


PersistentConnection.prototype.echo = function (data, onEcho) {
  this.sendRequest('echo', {
    d: data
  }, onEcho);
}; // RealTimeConnection properties that we use in tests.


var RealTimeConnection = Connection;

var hijackHash = function hijackHash(newHash) {
  var oldPut = PersistentConnection.prototype.put;

  PersistentConnection.prototype.put = function (pathString, data, onComplete, hash) {
    if (hash !== undefined) {
      hash = newHash();
    }

    oldPut.call(this, pathString, data, onComplete, hash);
  };

  return function () {
    PersistentConnection.prototype.put = oldPut;
  };
};

var ConnectionTarget = RepoInfo;

var queryIdentifier = function queryIdentifier(query) {
  return query.queryIdentifier();
};
/**
 * Forces the RepoManager to create Repos that use ReadonlyRestClient instead of PersistentConnection.
 */


var forceRestClient = function forceRestClient(_forceRestClient) {
  RepoManager.getInstance().forceRestClient(_forceRestClient);
};

var TEST_ACCESS = /*#__PURE__*/Object.freeze({
  __proto__: null,
  DataConnection: DataConnection,
  RealTimeConnection: RealTimeConnection,
  hijackHash: hijackHash,
  ConnectionTarget: ConnectionTarget,
  queryIdentifier: queryIdentifier,
  forceRestClient: forceRestClient
});
var name = "@firebase/database";
var version = "0.9.4";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var ServerValue = Database.ServerValue;

function registerDatabase(instance) {
  // set SDK_VERSION
  setSDKVersion(instance.SDK_VERSION); // Register the Database Service with the 'firebase' namespace.

  var namespace = instance.INTERNAL.registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_4__["Component"]('database', function (container, url) {
    /* Dependencies */
    // getImmediate for FirebaseApp will always succeed
    var app = container.getProvider('app').getImmediate();
    var authProvider = container.getProvider('auth-internal');
    return RepoManager.getInstance().databaseFromApp(app, authProvider, url);
  }, "PUBLIC"
  /* PUBLIC */
  ).setServiceProps( // firebase.database namespace properties
  {
    Reference: Reference,
    Query: Query,
    Database: Database,
    DataSnapshot: DataSnapshot,
    enableLogging: enableLogging,
    INTERNAL: INTERNAL,
    ServerValue: ServerValue,
    TEST_ACCESS: TEST_ACCESS
  }).setMultipleInstances(true));
  instance.registerVersion(name, version);

  if (Object(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["isNodeSdk"])()) {
    module.exports = namespace;
  }
}

registerDatabase(_firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "BQLa":
/*!**************************************************!*\
  !*** ./src/app/login/services/window.service.ts ***!
  \**************************************************/
/*! exports provided: WindowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowService", function() { return WindowService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var WindowService = /** @class */ (function () {
    function WindowService() {
    }
    Object.defineProperty(WindowService.prototype, "windowRef", {
        get: function () {
            return window;
        },
        enumerable: false,
        configurable: true
    });
    WindowService.ɵfac = function WindowService_Factory(t) { return new (t || WindowService)(); };
    WindowService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WindowService, factory: WindowService.ɵfac, providedIn: 'root' });
    return WindowService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WindowService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "IUDT":
/*!*****************************************************************!*\
  !*** ./src/app/login/components/register/register.component.ts ***!
  \*****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "6Hrc");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth, test) {
        this.auth = auth;
        this.test = test;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        // console.log('test', this.test.collection('Users').get());
        var _this = this;
        this.auth.eventAuthError$.subscribe(function (data) {
            _this.authError = data;
        });
    };
    RegisterComponent.prototype.createUser = function (form) {
        console.log("click register button");
        console.log("form value: " + form.value);
        this.auth.createUser(form.value);
    };
    RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"])); };
    RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 24, vars: 1, consts: [[1, "register"], [1, "register__header"], [1, "container-fluid"], ["routerLink", "/login", 1, "back", "btn", "material-icons"], [1, "register__header-title"], [1, "error-text"], [1, "register__form", 3, "ngSubmit"], ["registerForm", "ngForm"], ["type", "text", "placeholder", "H\u1ECD t\u00EAn", "ngModel", "", "name", "fullName", "required", "", 1, "name", "register__form-input"], ["fullName", "ngModel"], ["type", "email", "placeholder", "Email c\u1EE7a b\u1EA1n", "ngModel", "", "name", "email", "required", "", 1, "email", "register__form-input"], ["email", "ngModel"], ["type", "text", "placeholder", "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i", "ngModel", "", "name", "phone", "required", "", 1, "phone", "register__form-input"], ["phone", "ngModel"], ["type", "text", "placeholder", "\u0110\u1ECBa ch\u1EC9", "ngModel", "", "name", "address", "required", "", 1, "address", "register__form-input"], ["address", "ngModel"], ["type", "password", "placeholder", "M\u1EADt kh\u1EA9u ( 8 k\u00ED t\u1EF1)", "ngModel", "", "name", "password", "required", "", 1, "password", "register__form-input"], ["password", "ngModel"], ["type", "submit", 1, "registerBtn", "btn"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " arrow_right_alt ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u0110\u0103ng k\u00FD t\u00E0i kho\u1EA3n ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 6, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); return ctx.createUser(_r0); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8, 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10, 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 12, 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 14, 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 16, 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u0110\u0103ng k\u00FD");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.authError == null ? null : ctx.authError.message);
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"]], styles: [".register[_ngcontent-%COMP%] {\n  height: 100%;\n  position: relative;\n  background-color: #9e9e9e0f;\n}\n.register[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.register[_ngcontent-%COMP%]   .error-text[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 13px;\n  margin-top: 2rem;\n  margin-bottom: 0;\n  display: block;\n  width: 100%;\n}\n.register__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: white;\n  border-bottom: 1.5px solid #cecece;\n  box-shadow: 0px -2px 3px 5px #cec8c8c2;\n}\n.register__header[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  position: absolute;\n  content: \"\";\n  left: 0;\n  font-weight: bold;\n  transform: rotate(180deg);\n}\n.register__header-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  padding: 0.375rem 0;\n}\n.register__form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  align-items: center;\n}\n.register__form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #ced6e1;\n  border-radius: 2.5rem;\n  padding: 1rem 1.5rem;\n  margin-top: 2vh;\n  color: #224177;\n  outline: none;\n  font-size: 14px;\n}\n.register[_ngcontent-%COMP%]   .registerBtn[_ngcontent-%COMP%] {\n  width: 19rem;\n  height: 4rem;\n  background-color: #d5e7f7;\n  border: none;\n  border-radius: 2rem;\n  font-size: 1.6rem;\n  font-weight: 500;\n  color: #224177;\n  margin-top: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQUFGO0FBRUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUFKO0FBR0U7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQURKO0FBSUU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsa0NBQUE7RUFDQSxzQ0FBQTtBQUhKO0FBS0k7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFITjtBQU1JO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBSk47QUFRRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQU5KO0FBT0k7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUxOO0FBU0U7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQVBKIiwiZmlsZSI6InJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUmVnaXN0ZXJcclxuLnJlZ2lzdGVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5ZTllOWUwZjtcclxuXHJcbiAgLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuZXJyb3ItdGV4dCB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJl9faGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICBib3JkZXItYm90dG9tOiAxLjVweCBzb2xpZCAjY2VjZWNlO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IC0ycHggM3B4IDVweCAjY2VjOGM4YzI7XHJcblxyXG4gICAgLmJhY2sge1xyXG4gICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICB9XHJcblxyXG4gICAgJi10aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgcGFkZGluZzogMC4zNzVyZW0gMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2Zvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAmLWlucHV0IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ2ZTE7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIuNXJlbTtcclxuICAgICAgcGFkZGluZzogMXJlbSAxLjVyZW07XHJcbiAgICAgIG1hcmdpbi10b3A6IDJ2aDtcclxuICAgICAgY29sb3I6ICMyMjQxNzc7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5yZWdpc3RlckJ0biB7XHJcbiAgICB3aWR0aDogMTlyZW07XHJcbiAgICBoZWlnaHQ6IDRyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDVlN2Y3O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjMjI0MTc3O1xyXG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
    return RegisterComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.scss']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "JZFu":
/*!*************************************************!*\
  !*** ./node_modules/firebase/dist/index.esm.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app */ "zIRd");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/auth */ "t6oF");
/* harmony import */ var _firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/database */ "6Uf2");
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase/firestore */ "xo5E");
/* harmony import */ var _firebase_firestore_bundle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @firebase/firestore/bundle */ "wu3+");
/* harmony import */ var _firebase_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @firebase/functions */ "fceV");
/* harmony import */ var _firebase_messaging__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @firebase/messaging */ "gHGA");
/* harmony import */ var _firebase_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @firebase/storage */ "LmZi");
/* harmony import */ var _firebase_performance__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @firebase/performance */ "VkNa");
/* harmony import */ var _firebase_analytics__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @firebase/analytics */ "3Kre");
/* harmony import */ var _firebase_remote_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @firebase/remote-config */ "bhLY");












var name = "firebase";
var version = "8.2.9";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

_firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].registerVersion(name, version, 'app');
var name$1 = "firebase";
var version$1 = "8.2.9";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

console.warn("\nIt looks like you're using the development build of the Firebase JS SDK.\nWhen deploying Firebase apps to production, it is advisable to only import\nthe individual SDK components you intend to use.\n\nFor the module builds, these are available in the following manner\n(replace <PACKAGE> with the name of a component - i.e. auth, database, etc):\n\nCommonJS Modules:\nconst firebase = require('firebase/app');\nrequire('firebase/<PACKAGE>');\n\nES Modules:\nimport firebase from 'firebase/app';\nimport 'firebase/<PACKAGE>';\n\nTypescript:\nimport firebase from 'firebase/app';\nimport 'firebase/<PACKAGE>';\n");
_firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].registerVersion(name$1, version$1);

/***/ }),

/***/ "VkNa":
/*!**************************************************************!*\
  !*** ./node_modules/@firebase/performance/dist/index.esm.js ***!
  \**************************************************************/
/*! exports provided: registerPerformance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerPerformance", function() { return registerPerformance; });
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app */ "zIRd");
/* harmony import */ var _firebase_installations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/installations */ "fSjL");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "WVRz");
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase/util */ "qOnz");
/* harmony import */ var _firebase_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @firebase/logger */ "q/0M");
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @firebase/component */ "/6Yf");






var name = "@firebase/performance";
var version = "0.4.6";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var SDK_VERSION = version;
/** The prefix for start User Timing marks used for creating Traces. */

var TRACE_START_MARK_PREFIX = 'FB-PERF-TRACE-START';
/** The prefix for stop User Timing marks used for creating Traces. */

var TRACE_STOP_MARK_PREFIX = 'FB-PERF-TRACE-STOP';
/** The prefix for User Timing measure used for creating Traces. */

var TRACE_MEASURE_PREFIX = 'FB-PERF-TRACE-MEASURE';
/** The prefix for out of the box page load Trace name. */

var OOB_TRACE_PAGE_LOAD_PREFIX = '_wt_';
var FIRST_PAINT_COUNTER_NAME = '_fp';
var FIRST_CONTENTFUL_PAINT_COUNTER_NAME = '_fcp';
var FIRST_INPUT_DELAY_COUNTER_NAME = '_fid';
var CONFIG_LOCAL_STORAGE_KEY = '@firebase/performance/config';
var CONFIG_EXPIRY_LOCAL_STORAGE_KEY = '@firebase/performance/configexpire';
var SERVICE = 'performance';
var SERVICE_NAME = 'Performance';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _a;

var ERROR_DESCRIPTION_MAP = (_a = {}, _a["trace started"
/* TRACE_STARTED_BEFORE */
] = 'Trace {$traceName} was started before.', _a["trace stopped"
/* TRACE_STOPPED_BEFORE */
] = 'Trace {$traceName} is not running.', _a["nonpositive trace startTime"
/* NONPOSITIVE_TRACE_START_TIME */
] = 'Trace {$traceName} startTime should be positive.', _a["nonpositive trace duration"
/* NONPOSITIVE_TRACE_DURATION */
] = 'Trace {$traceName} duration should be positive.', _a["no window"
/* NO_WINDOW */
] = 'Window is not available.', _a["no app id"
/* NO_APP_ID */
] = 'App id is not available.', _a["no project id"
/* NO_PROJECT_ID */
] = 'Project id is not available.', _a["no api key"
/* NO_API_KEY */
] = 'Api key is not available.', _a["invalid cc log"
/* INVALID_CC_LOG */
] = 'Attempted to queue invalid cc event', _a["FB not default"
/* FB_NOT_DEFAULT */
] = 'Performance can only start when Firebase app instance is the default one.', _a["RC response not ok"
/* RC_NOT_OK */
] = 'RC response is not ok', _a["invalid attribute name"
/* INVALID_ATTRIBUTE_NAME */
] = 'Attribute name {$attributeName} is invalid.', _a["invalid attribute value"
/* INVALID_ATTRIBUTE_VALUE */
] = 'Attribute value {$attributeValue} is invalid.', _a["invalid custom metric name"
/* INVALID_CUSTOM_METRIC_NAME */
] = 'Custom metric name {$customMetricName} is invalid', _a["invalid String merger input"
/* INVALID_STRING_MERGER_PARAMETER */
] = 'Input for String merger is invalid, contact support team to resolve.', _a);
var ERROR_FACTORY = new _firebase_util__WEBPACK_IMPORTED_MODULE_3__["ErrorFactory"](SERVICE, SERVICE_NAME, ERROR_DESCRIPTION_MAP);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var consoleLogger = new _firebase_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"](SERVICE_NAME);
consoleLogger.logLevel = _firebase_logger__WEBPACK_IMPORTED_MODULE_4__["LogLevel"].INFO;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var apiInstance;
var windowInstance;
/**
 * This class holds a reference to various browser related objects injected by
 * set methods.
 */

var Api =
/** @class */
function () {
  function Api(window) {
    this.window = window;

    if (!window) {
      throw ERROR_FACTORY.create("no window"
      /* NO_WINDOW */
      );
    }

    this.performance = window.performance;
    this.PerformanceObserver = window.PerformanceObserver;
    this.windowLocation = window.location;
    this.navigator = window.navigator;
    this.document = window.document;

    if (this.navigator && this.navigator.cookieEnabled) {
      // If user blocks cookies on the browser, accessing localStorage will
      // throw an exception.
      this.localStorage = window.localStorage;
    }

    if (window.perfMetrics && window.perfMetrics.onFirstInputDelay) {
      this.onFirstInputDelay = window.perfMetrics.onFirstInputDelay;
    }
  }

  Api.prototype.getUrl = function () {
    // Do not capture the string query part of url.
    return this.windowLocation.href.split('?')[0];
  };

  Api.prototype.mark = function (name) {
    if (!this.performance || !this.performance.mark) {
      return;
    }

    this.performance.mark(name);
  };

  Api.prototype.measure = function (measureName, mark1, mark2) {
    if (!this.performance || !this.performance.measure) {
      return;
    }

    this.performance.measure(measureName, mark1, mark2);
  };

  Api.prototype.getEntriesByType = function (type) {
    if (!this.performance || !this.performance.getEntriesByType) {
      return [];
    }

    return this.performance.getEntriesByType(type);
  };

  Api.prototype.getEntriesByName = function (name) {
    if (!this.performance || !this.performance.getEntriesByName) {
      return [];
    }

    return this.performance.getEntriesByName(name);
  };

  Api.prototype.getTimeOrigin = function () {
    // Polyfill the time origin with performance.timing.navigationStart.
    return this.performance && (this.performance.timeOrigin || this.performance.timing.navigationStart);
  };

  Api.prototype.requiredApisAvailable = function () {
    if (!fetch || !Promise || !this.navigator || !this.navigator.cookieEnabled) {
      consoleLogger.info('Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled.');
      return false;
    }

    if (!Object(_firebase_util__WEBPACK_IMPORTED_MODULE_3__["isIndexedDBAvailable"])()) {
      consoleLogger.info('IndexedDB is not supported by current browswer');
      return false;
    }

    return true;
  };

  Api.prototype.setupObserver = function (entryType, callback) {
    if (!this.PerformanceObserver) {
      return;
    }

    var observer = new this.PerformanceObserver(function (list) {
      for (var _i = 0, _a = list.getEntries(); _i < _a.length; _i++) {
        var entry = _a[_i]; // `entry` is a PerformanceEntry instance.

        callback(entry);
      }
    }); // Start observing the entry types you care about.

    observer.observe({
      entryTypes: [entryType]
    });
  };

  Api.getInstance = function () {
    if (apiInstance === undefined) {
      apiInstance = new Api(windowInstance);
    }

    return apiInstance;
  };

  return Api;
}();

function setupApi(window) {
  windowInstance = window;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function mergeStrings(part1, part2) {
  var sizeDiff = part1.length - part2.length;

  if (sizeDiff < 0 || sizeDiff > 1) {
    throw ERROR_FACTORY.create("invalid String merger input"
    /* INVALID_STRING_MERGER_PARAMETER */
    );
  }

  var resultArray = [];

  for (var i = 0; i < part1.length; i++) {
    resultArray.push(part1.charAt(i));

    if (part2.length > i) {
      resultArray.push(part2.charAt(i));
    }
  }

  return resultArray.join('');
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var settingsServiceInstance;

var SettingsService =
/** @class */
function () {
  function SettingsService() {
    // The variable which controls logging of automatic traces and HTTP/S network monitoring.
    this.instrumentationEnabled = true; // The variable which controls logging of custom traces.

    this.dataCollectionEnabled = true; // Configuration flags set through remote config.

    this.loggingEnabled = false; // Sampling rate between 0 and 1.

    this.tracesSamplingRate = 1;
    this.networkRequestsSamplingRate = 1; // Address of logging service.

    this.logEndPointUrl = 'https://firebaselogging.googleapis.com/v0cc/log?format=json_proto'; // Performance event transport endpoint URL which should be compatible with proto3.
    // New Address for transport service, not configurable via Remote Config.

    this.flTransportEndpointUrl = mergeStrings('hts/frbslgigp.ogepscmv/ieo/eaylg', 'tp:/ieaeogn-agolai.o/1frlglgc/o');
    this.transportKey = mergeStrings('AzSC8r6ReiGqFMyfvgow', 'Iayx0u-XT3vksVM-pIV'); // Source type for performance event logs.

    this.logSource = 462; // Flags which control per session logging of traces and network requests.

    this.logTraceAfterSampling = false;
    this.logNetworkAfterSampling = false; // TTL of config retrieved from remote config in hours.

    this.configTimeToLive = 12;
  }

  SettingsService.prototype.getAppId = function () {
    var appId = this.firebaseAppInstance && this.firebaseAppInstance.options && this.firebaseAppInstance.options.appId;

    if (!appId) {
      throw ERROR_FACTORY.create("no app id"
      /* NO_APP_ID */
      );
    }

    return appId;
  };

  SettingsService.prototype.getProjectId = function () {
    var projectId = this.firebaseAppInstance && this.firebaseAppInstance.options && this.firebaseAppInstance.options.projectId;

    if (!projectId) {
      throw ERROR_FACTORY.create("no project id"
      /* NO_PROJECT_ID */
      );
    }

    return projectId;
  };

  SettingsService.prototype.getApiKey = function () {
    var apiKey = this.firebaseAppInstance && this.firebaseAppInstance.options && this.firebaseAppInstance.options.apiKey;

    if (!apiKey) {
      throw ERROR_FACTORY.create("no api key"
      /* NO_API_KEY */
      );
    }

    return apiKey;
  };

  SettingsService.prototype.getFlTransportFullUrl = function () {
    return this.flTransportEndpointUrl.concat('?key=', this.transportKey);
  };

  SettingsService.getInstance = function () {
    if (settingsServiceInstance === undefined) {
      settingsServiceInstance = new SettingsService();
    }

    return settingsServiceInstance;
  };

  return SettingsService;
}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var iid;

function getIidPromise() {
  var iidPromise = SettingsService.getInstance().installationsService.getId(); // eslint-disable-next-line @typescript-eslint/no-floating-promises

  iidPromise.then(function (iidVal) {
    iid = iidVal;
  });
  return iidPromise;
} // This method should be used after the iid is retrieved by getIidPromise method.


function getIid() {
  return iid;
}

function getAuthTokenPromise() {
  var authTokenPromise = SettingsService.getInstance().installationsService.getToken(); // eslint-disable-next-line @typescript-eslint/no-floating-promises

  authTokenPromise.then(function (authTokenVal) {});
  return authTokenPromise;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var VisibilityState;

(function (VisibilityState) {
  VisibilityState[VisibilityState["UNKNOWN"] = 0] = "UNKNOWN";
  VisibilityState[VisibilityState["VISIBLE"] = 1] = "VISIBLE";
  VisibilityState[VisibilityState["HIDDEN"] = 2] = "HIDDEN";
})(VisibilityState || (VisibilityState = {}));

var RESERVED_ATTRIBUTE_PREFIXES = ['firebase_', 'google_', 'ga_'];
var ATTRIBUTE_FORMAT_REGEX = new RegExp('^[a-zA-Z]\\w*$');
var MAX_ATTRIBUTE_NAME_LENGTH = 40;
var MAX_ATTRIBUTE_VALUE_LENGTH = 100;

function getServiceWorkerStatus() {
  var navigator = Api.getInstance().navigator;

  if ('serviceWorker' in navigator) {
    if (navigator.serviceWorker.controller) {
      return 2
      /* CONTROLLED */
      ;
    } else {
        return 3
        /* UNCONTROLLED */
        ;
      }
  } else {
      return 1
      /* UNSUPPORTED */
      ;
    }
}

function getVisibilityState() {
  var document = Api.getInstance().document;
  var visibilityState = document.visibilityState;

  switch (visibilityState) {
    case 'visible':
      return VisibilityState.VISIBLE;

    case 'hidden':
      return VisibilityState.HIDDEN;

    default:
      return VisibilityState.UNKNOWN;
  }
}

function getEffectiveConnectionType() {
  var navigator = Api.getInstance().navigator;
  var navigatorConnection = navigator.connection;
  var effectiveType = navigatorConnection && navigatorConnection.effectiveType;

  switch (effectiveType) {
    case 'slow-2g':
      return 1
      /* CONNECTION_SLOW_2G */
      ;

    case '2g':
      return 2
      /* CONNECTION_2G */
      ;

    case '3g':
      return 3
      /* CONNECTION_3G */
      ;

    case '4g':
      return 4
      /* CONNECTION_4G */
      ;

    default:
      return 0
      /* UNKNOWN */
      ;
  }
}

function isValidCustomAttributeName(name) {
  if (name.length === 0 || name.length > MAX_ATTRIBUTE_NAME_LENGTH) {
    return false;
  }

  var matchesReservedPrefix = RESERVED_ATTRIBUTE_PREFIXES.some(function (prefix) {
    return name.startsWith(prefix);
  });
  return !matchesReservedPrefix && !!name.match(ATTRIBUTE_FORMAT_REGEX);
}

function isValidCustomAttributeValue(value) {
  return value.length !== 0 && value.length <= MAX_ATTRIBUTE_VALUE_LENGTH;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var REMOTE_CONFIG_SDK_VERSION = '0.0.1'; // These values will be used if the remote config object is successfully
// retrieved, but the template does not have these fields.

var DEFAULT_CONFIGS = {
  loggingEnabled: true
};
var FIS_AUTH_PREFIX = 'FIREBASE_INSTALLATIONS_AUTH';

function getConfig(iid) {
  var config = getStoredConfig();

  if (config) {
    processConfig(config);
    return Promise.resolve();
  }

  return getRemoteConfig(iid).then(processConfig).then(function (config) {
    return storeConfig(config);
  },
  /** Do nothing for error, use defaults set in settings service. */
  function () {});
}

function getStoredConfig() {
  var localStorage = Api.getInstance().localStorage;

  if (!localStorage) {
    return;
  }

  var expiryString = localStorage.getItem(CONFIG_EXPIRY_LOCAL_STORAGE_KEY);

  if (!expiryString || !configValid(expiryString)) {
    return;
  }

  var configStringified = localStorage.getItem(CONFIG_LOCAL_STORAGE_KEY);

  if (!configStringified) {
    return;
  }

  try {
    var configResponse = JSON.parse(configStringified);
    return configResponse;
  } catch (_a) {
    return;
  }
}

function storeConfig(config) {
  var localStorage = Api.getInstance().localStorage;

  if (!config || !localStorage) {
    return;
  }

  localStorage.setItem(CONFIG_LOCAL_STORAGE_KEY, JSON.stringify(config));
  localStorage.setItem(CONFIG_EXPIRY_LOCAL_STORAGE_KEY, String(Date.now() + SettingsService.getInstance().configTimeToLive * 60 * 60 * 1000));
}

var COULD_NOT_GET_CONFIG_MSG = 'Could not fetch config, will use default configs';

function getRemoteConfig(iid) {
  // Perf needs auth token only to retrieve remote config.
  return getAuthTokenPromise().then(function (authToken) {
    var projectId = SettingsService.getInstance().getProjectId();
    var configEndPoint = "https://firebaseremoteconfig.googleapis.com/v1/projects/" + projectId + "/namespaces/fireperf:fetch?key=" + SettingsService.getInstance().getApiKey();
    var request = new Request(configEndPoint, {
      method: 'POST',
      headers: {
        Authorization: FIS_AUTH_PREFIX + " " + authToken
      },

      /* eslint-disable camelcase */
      body: JSON.stringify({
        app_instance_id: iid,
        app_instance_id_token: authToken,
        app_id: SettingsService.getInstance().getAppId(),
        app_version: SDK_VERSION,
        sdk_version: REMOTE_CONFIG_SDK_VERSION
      })
      /* eslint-enable camelcase */

    });
    return fetch(request).then(function (response) {
      if (response.ok) {
        return response.json();
      } // In case response is not ok. This will be caught by catch.


      throw ERROR_FACTORY.create("RC response not ok"
      /* RC_NOT_OK */
      );
    });
  }).catch(function () {
    consoleLogger.info(COULD_NOT_GET_CONFIG_MSG);
    return undefined;
  });
}
/**
 * Processes config coming either from calling RC or from local storage.
 * This method only runs if call is successful or config in storage
 * is valid.
 */


function processConfig(config) {
  if (!config) {
    return config;
  }

  var settingsServiceInstance = SettingsService.getInstance();
  var entries = config.entries || {};

  if (entries.fpr_enabled !== undefined) {
    // TODO: Change the assignment of loggingEnabled once the received type is
    // known.
    settingsServiceInstance.loggingEnabled = String(entries.fpr_enabled) === 'true';
  } else {
    // Config retrieved successfully, but there is no fpr_enabled in template.
    // Use secondary configs value.
    settingsServiceInstance.loggingEnabled = DEFAULT_CONFIGS.loggingEnabled;
  }

  if (entries.fpr_log_source) {
    settingsServiceInstance.logSource = Number(entries.fpr_log_source);
  }

  if (entries.fpr_log_endpoint_url) {
    settingsServiceInstance.logEndPointUrl = entries.fpr_log_endpoint_url;
  } // Key from Remote Config has to be non-empty string, otherwsie use local value.


  if (entries.fpr_log_transport_key) {
    settingsServiceInstance.transportKey = entries.fpr_log_transport_key;
  }

  if (entries.fpr_vc_network_request_sampling_rate !== undefined) {
    settingsServiceInstance.networkRequestsSamplingRate = Number(entries.fpr_vc_network_request_sampling_rate);
  }

  if (entries.fpr_vc_trace_sampling_rate !== undefined) {
    settingsServiceInstance.tracesSamplingRate = Number(entries.fpr_vc_trace_sampling_rate);
  } // Set the per session trace and network logging flags.


  settingsServiceInstance.logTraceAfterSampling = shouldLogAfterSampling(settingsServiceInstance.tracesSamplingRate);
  settingsServiceInstance.logNetworkAfterSampling = shouldLogAfterSampling(settingsServiceInstance.networkRequestsSamplingRate);
  return config;
}

function configValid(expiry) {
  return Number(expiry) > Date.now();
}

function shouldLogAfterSampling(samplingRate) {
  return Math.random() <= samplingRate;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var initializationStatus = 1
/* notInitialized */
;
var initializationPromise;

function getInitializationPromise() {
  initializationStatus = 2
  /* initializationPending */
  ;
  initializationPromise = initializationPromise || initializePerf();
  return initializationPromise;
}

function isPerfInitialized() {
  return initializationStatus === 3
  /* initialized */
  ;
}

function initializePerf() {
  return getDocumentReadyComplete().then(function () {
    return getIidPromise();
  }).then(function (iid) {
    return getConfig(iid);
  }).then(function () {
    return changeInitializationStatus();
  }, function () {
    return changeInitializationStatus();
  });
}
/**
 * Returns a promise which resolves whenever the document readystate is complete or
 * immediately if it is called after page load complete.
 */


function getDocumentReadyComplete() {
  var document = Api.getInstance().document;
  return new Promise(function (resolve) {
    if (document && document.readyState !== 'complete') {
      var handler_1 = function handler_1() {
        if (document.readyState === 'complete') {
          document.removeEventListener('readystatechange', handler_1);
          resolve();
        }
      };

      document.addEventListener('readystatechange', handler_1);
    } else {
      resolve();
    }
  });
}

function changeInitializationStatus() {
  initializationStatus = 3
  /* initialized */
  ;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var DEFAULT_SEND_INTERVAL_MS = 10 * 1000;
var INITIAL_SEND_TIME_DELAY_MS = 5.5 * 1000; // If end point does not work, the call will be tried for these many times.

var DEFAULT_REMAINING_TRIES = 3;
var MAX_EVENT_COUNT_PER_REQUEST = 1000;
var remainingTries = DEFAULT_REMAINING_TRIES;
/* eslint-enable camelcase */

var queue = [];
var isTransportSetup = false;

function setupTransportService() {
  if (!isTransportSetup) {
    processQueue(INITIAL_SEND_TIME_DELAY_MS);
    isTransportSetup = true;
  }
}

function processQueue(timeOffset) {
  setTimeout(function () {
    // If there is no remainingTries left, stop retrying.
    if (remainingTries === 0) {
      return;
    } // If there are no events to process, wait for DEFAULT_SEND_INTERVAL_MS and try again.


    if (!queue.length) {
      return processQueue(DEFAULT_SEND_INTERVAL_MS);
    }

    dispatchQueueEvents();
  }, timeOffset);
}

function dispatchQueueEvents() {
  // Extract events up to the maximum cap of single logRequest from top of "official queue".
  // The staged events will be used for current logRequest attempt, remaining events will be kept
  // for next attempt.
  var staged = queue.splice(0, MAX_EVENT_COUNT_PER_REQUEST);
  /* eslint-disable camelcase */
  // We will pass the JSON serialized event to the backend.

  var log_event = staged.map(function (evt) {
    return {
      source_extension_json_proto3: evt.message,
      event_time_ms: String(evt.eventTime)
    };
  });
  var data = {
    request_time_ms: String(Date.now()),
    client_info: {
      client_type: 1,
      js_client_info: {}
    },
    log_source: SettingsService.getInstance().logSource,
    log_event: log_event
  };
  /* eslint-enable camelcase */

  sendEventsToFl(data, staged).catch(function () {
    // If the request fails for some reason, add the events that were attempted
    // back to the primary queue to retry later.
    queue = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spreadArrays"])(staged, queue);
    remainingTries--;
    consoleLogger.info("Tries left: " + remainingTries + ".");
    processQueue(DEFAULT_SEND_INTERVAL_MS);
  });
}

function sendEventsToFl(data, staged) {
  return postToFlEndpoint(data).then(function (res) {
    if (!res.ok) {
      consoleLogger.info('Call to Firebase backend failed.');
    }

    return res.json();
  }).then(function (res) {
    // Find the next call wait time from the response.
    var transportWait = Number(res.nextRequestWaitMillis);
    var requestOffset = DEFAULT_SEND_INTERVAL_MS;

    if (!isNaN(transportWait)) {
      requestOffset = Math.max(transportWait, requestOffset);
    } // Delete request if response include RESPONSE_ACTION_UNKNOWN or DELETE_REQUEST action.
    // Otherwise, retry request using normal scheduling if response include RETRY_REQUEST_LATER.


    var logResponseDetails = res.logResponseDetails;

    if (Array.isArray(logResponseDetails) && logResponseDetails.length > 0 && logResponseDetails[0].responseAction === 'RETRY_REQUEST_LATER') {
      queue = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spreadArrays"])(staged, queue);
      consoleLogger.info("Retry transport request later.");
    }

    remainingTries = DEFAULT_REMAINING_TRIES; // Schedule the next process.

    processQueue(requestOffset);
  });
}

function postToFlEndpoint(data) {
  var flTransportFullUrl = SettingsService.getInstance().getFlTransportFullUrl();
  return fetch(flTransportFullUrl, {
    method: 'POST',
    body: JSON.stringify(data)
  });
}

function addToQueue(evt) {
  if (!evt.eventTime || !evt.message) {
    throw ERROR_FACTORY.create("invalid cc log"
    /* INVALID_CC_LOG */
    );
  } // Add the new event to the queue.


  queue = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spreadArrays"])(queue, [evt]);
}
/** Log handler for cc service to send the performance logs to the server. */


function transportHandler( // eslint-disable-next-line @typescript-eslint/no-explicit-any
serializer) {
  return function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    var message = serializer.apply(void 0, args);
    addToQueue({
      message: message,
      eventTime: Date.now()
    });
  };
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint-enble camelcase */


var logger; // This method is not called before initialization.

function sendLog(resource, resourceType) {
  if (!logger) {
    logger = transportHandler(serializer);
  }

  logger(resource, resourceType);
}

function logTrace(trace) {
  var settingsService = SettingsService.getInstance(); // Do not log if trace is auto generated and instrumentation is disabled.

  if (!settingsService.instrumentationEnabled && trace.isAuto) {
    return;
  } // Do not log if trace is custom and data collection is disabled.


  if (!settingsService.dataCollectionEnabled && !trace.isAuto) {
    return;
  } // Do not log if required apis are not available.


  if (!Api.getInstance().requiredApisAvailable()) {
    return;
  } // Only log the page load auto traces if page is visible.


  if (trace.isAuto && getVisibilityState() !== VisibilityState.VISIBLE) {
    return;
  }

  if (isPerfInitialized()) {
    sendTraceLog(trace);
  } else {
    // Custom traces can be used before the initialization but logging
    // should wait until after.
    getInitializationPromise().then(function () {
      return sendTraceLog(trace);
    }, function () {
      return sendTraceLog(trace);
    });
  }
}

function sendTraceLog(trace) {
  if (!getIid()) {
    return;
  }

  var settingsService = SettingsService.getInstance();

  if (!settingsService.loggingEnabled || !settingsService.logTraceAfterSampling) {
    return;
  }

  setTimeout(function () {
    return sendLog(trace, 1
    /* Trace */
    );
  }, 0);
}

function logNetworkRequest(networkRequest) {
  var settingsService = SettingsService.getInstance(); // Do not log network requests if instrumentation is disabled.

  if (!settingsService.instrumentationEnabled) {
    return;
  } // Do not log the js sdk's call to transport service domain to avoid unnecessary cycle.
  // Need to blacklist both old and new endpoints to avoid migration gap.


  var networkRequestUrl = networkRequest.url; // Blacklist old log endpoint and new transport endpoint.
  // Because Performance SDK doesn't instrument requests sent from SDK itself.

  var logEndpointUrl = settingsService.logEndPointUrl.split('?')[0];
  var flEndpointUrl = settingsService.flTransportEndpointUrl.split('?')[0];

  if (networkRequestUrl === logEndpointUrl || networkRequestUrl === flEndpointUrl) {
    return;
  }

  if (!settingsService.loggingEnabled || !settingsService.logNetworkAfterSampling) {
    return;
  }

  setTimeout(function () {
    return sendLog(networkRequest, 0
    /* NetworkRequest */
    );
  }, 0);
}

function serializer(resource, resourceType) {
  if (resourceType === 0
  /* NetworkRequest */
  ) {
      return serializeNetworkRequest(resource);
    }

  return serializeTrace(resource);
}

function serializeNetworkRequest(networkRequest) {
  var networkRequestMetric = {
    url: networkRequest.url,
    http_method: networkRequest.httpMethod || 0,
    http_response_code: 200,
    response_payload_bytes: networkRequest.responsePayloadBytes,
    client_start_time_us: networkRequest.startTimeUs,
    time_to_response_initiated_us: networkRequest.timeToResponseInitiatedUs,
    time_to_response_completed_us: networkRequest.timeToResponseCompletedUs
  };
  var perfMetric = {
    application_info: getApplicationInfo(),
    network_request_metric: networkRequestMetric
  };
  return JSON.stringify(perfMetric);
}

function serializeTrace(trace) {
  var traceMetric = {
    name: trace.name,
    is_auto: trace.isAuto,
    client_start_time_us: trace.startTimeUs,
    duration_us: trace.durationUs
  };

  if (Object.keys(trace.counters).length !== 0) {
    traceMetric.counters = trace.counters;
  }

  var customAttributes = trace.getAttributes();

  if (Object.keys(customAttributes).length !== 0) {
    traceMetric.custom_attributes = customAttributes;
  }

  var perfMetric = {
    application_info: getApplicationInfo(),
    trace_metric: traceMetric
  };
  return JSON.stringify(perfMetric);
}

function getApplicationInfo() {
  return {
    google_app_id: SettingsService.getInstance().getAppId(),
    app_instance_id: getIid(),
    web_app_info: {
      sdk_version: SDK_VERSION,
      page_url: Api.getInstance().getUrl(),
      service_worker_status: getServiceWorkerStatus(),
      visibility_state: getVisibilityState(),
      effective_connection_type: getEffectiveConnectionType()
    },
    application_process_state: 0
  };
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var MAX_METRIC_NAME_LENGTH = 100;
var RESERVED_AUTO_PREFIX = '_';
var oobMetrics = [FIRST_PAINT_COUNTER_NAME, FIRST_CONTENTFUL_PAINT_COUNTER_NAME, FIRST_INPUT_DELAY_COUNTER_NAME];
/**
 * Returns true if the metric is custom and does not start with reserved prefix, or if
 * the metric is one of out of the box page load trace metrics.
 */

function isValidMetricName(name, traceName) {
  if (name.length === 0 || name.length > MAX_METRIC_NAME_LENGTH) {
    return false;
  }

  return traceName && traceName.startsWith(OOB_TRACE_PAGE_LOAD_PREFIX) && oobMetrics.indexOf(name) > -1 || !name.startsWith(RESERVED_AUTO_PREFIX);
}
/**
 * Converts the provided value to an integer value to be used in case of a metric.
 * @param providedValue Provided number value of the metric that needs to be converted to an integer.
 *
 * @returns Converted integer number to be set for the metric.
 */


function convertMetricValueToInteger(providedValue) {
  var valueAsInteger = Math.floor(providedValue);

  if (valueAsInteger < providedValue) {
    consoleLogger.info("Metric value should be an Integer, setting the value as : " + valueAsInteger + ".");
  }

  return valueAsInteger;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var Trace =
/** @class */
function () {
  /**
   * @param name The name of the trace.
   * @param isAuto If the trace is auto-instrumented.
   * @param traceMeasureName The name of the measure marker in user timing specification. This field
   * is only set when the trace is built for logging when the user directly uses the user timing
   * api (performance.mark and performance.measure).
   */
  function Trace(name, isAuto, traceMeasureName) {
    if (isAuto === void 0) {
      isAuto = false;
    }

    this.name = name;
    this.isAuto = isAuto;
    this.state = 1
    /* UNINITIALIZED */
    ;
    this.customAttributes = {};
    this.counters = {};
    this.api = Api.getInstance();
    this.randomId = Math.floor(Math.random() * 1000000);

    if (!this.isAuto) {
      this.traceStartMark = TRACE_START_MARK_PREFIX + "-" + this.randomId + "-" + this.name;
      this.traceStopMark = TRACE_STOP_MARK_PREFIX + "-" + this.randomId + "-" + this.name;
      this.traceMeasure = traceMeasureName || TRACE_MEASURE_PREFIX + "-" + this.randomId + "-" + this.name;

      if (traceMeasureName) {
        // For the case of direct user timing traces, no start stop will happen. The measure object
        // is already available.
        this.calculateTraceMetrics();
      }
    }
  }
  /**
   * Starts a trace. The measurement of the duration starts at this point.
   */


  Trace.prototype.start = function () {
    if (this.state !== 1
    /* UNINITIALIZED */
    ) {
        throw ERROR_FACTORY.create("trace started"
        /* TRACE_STARTED_BEFORE */
        , {
          traceName: this.name
        });
      }

    this.api.mark(this.traceStartMark);
    this.state = 2
    /* RUNNING */
    ;
  };
  /**
   * Stops the trace. The measurement of the duration of the trace stops at this point and trace
   * is logged.
   */


  Trace.prototype.stop = function () {
    if (this.state !== 2
    /* RUNNING */
    ) {
        throw ERROR_FACTORY.create("trace stopped"
        /* TRACE_STOPPED_BEFORE */
        , {
          traceName: this.name
        });
      }

    this.state = 3
    /* TERMINATED */
    ;
    this.api.mark(this.traceStopMark);
    this.api.measure(this.traceMeasure, this.traceStartMark, this.traceStopMark);
    this.calculateTraceMetrics();
    logTrace(this);
  };
  /**
   * Records a trace with predetermined values. If this method is used a trace is created and logged
   * directly. No need to use start and stop methods.
   * @param startTime Trace start time since epoch in millisec
   * @param duration The duraction of the trace in millisec
   * @param options An object which can optionally hold maps of custom metrics and custom attributes
   */


  Trace.prototype.record = function (startTime, duration, options) {
    if (startTime <= 0) {
      throw ERROR_FACTORY.create("nonpositive trace startTime"
      /* NONPOSITIVE_TRACE_START_TIME */
      , {
        traceName: this.name
      });
    }

    if (duration <= 0) {
      throw ERROR_FACTORY.create("nonpositive trace duration"
      /* NONPOSITIVE_TRACE_DURATION */
      , {
        traceName: this.name
      });
    }

    this.durationUs = Math.floor(duration * 1000);
    this.startTimeUs = Math.floor(startTime * 1000);

    if (options && options.attributes) {
      this.customAttributes = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, options.attributes);
    }

    if (options && options.metrics) {
      for (var _i = 0, _a = Object.keys(options.metrics); _i < _a.length; _i++) {
        var metric = _a[_i];

        if (!isNaN(Number(options.metrics[metric]))) {
          this.counters[metric] = Number(Math.floor(options.metrics[metric]));
        }
      }
    }

    logTrace(this);
  };
  /**
   * Increments a custom metric by a certain number or 1 if number not specified. Will create a new
   * custom metric if one with the given name does not exist. The value will be floored down to an
   * integer.
   * @param counter Name of the custom metric
   * @param numAsInteger Increment by value
   */


  Trace.prototype.incrementMetric = function (counter, numAsInteger) {
    if (numAsInteger === void 0) {
      numAsInteger = 1;
    }

    if (this.counters[counter] === undefined) {
      this.putMetric(counter, numAsInteger);
    } else {
      this.putMetric(counter, this.counters[counter] + numAsInteger);
    }
  };
  /**
   * Sets a custom metric to a specified value. Will create a new custom metric if one with the
   * given name does not exist. The value will be floored down to an integer.
   * @param counter Name of the custom metric
   * @param numAsInteger Set custom metric to this value
   */


  Trace.prototype.putMetric = function (counter, numAsInteger) {
    if (isValidMetricName(counter, this.name)) {
      this.counters[counter] = convertMetricValueToInteger(numAsInteger);
    } else {
      throw ERROR_FACTORY.create("invalid custom metric name"
      /* INVALID_CUSTOM_METRIC_NAME */
      , {
        customMetricName: counter
      });
    }
  };
  /**
   * Returns the value of the custom metric by that name. If a custom metric with that name does
   * not exist will return zero.
   * @param counter
   */


  Trace.prototype.getMetric = function (counter) {
    return this.counters[counter] || 0;
  };
  /**
   * Sets a custom attribute of a trace to a certain value.
   * @param attr
   * @param value
   */


  Trace.prototype.putAttribute = function (attr, value) {
    var isValidName = isValidCustomAttributeName(attr);
    var isValidValue = isValidCustomAttributeValue(value);

    if (isValidName && isValidValue) {
      this.customAttributes[attr] = value;
      return;
    } // Throw appropriate error when the attribute name or value is invalid.


    if (!isValidName) {
      throw ERROR_FACTORY.create("invalid attribute name"
      /* INVALID_ATTRIBUTE_NAME */
      , {
        attributeName: attr
      });
    }

    if (!isValidValue) {
      throw ERROR_FACTORY.create("invalid attribute value"
      /* INVALID_ATTRIBUTE_VALUE */
      , {
        attributeValue: value
      });
    }
  };
  /**
   * Retrieves the value a custom attribute of a trace is set to.
   * @param attr
   */


  Trace.prototype.getAttribute = function (attr) {
    return this.customAttributes[attr];
  };

  Trace.prototype.removeAttribute = function (attr) {
    if (this.customAttributes[attr] === undefined) {
      return;
    }

    delete this.customAttributes[attr];
  };

  Trace.prototype.getAttributes = function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, this.customAttributes);
  };

  Trace.prototype.setStartTime = function (startTime) {
    this.startTimeUs = startTime;
  };

  Trace.prototype.setDuration = function (duration) {
    this.durationUs = duration;
  };
  /**
   * Calculates and assigns the duration and start time of the trace using the measure performance
   * entry.
   */


  Trace.prototype.calculateTraceMetrics = function () {
    var perfMeasureEntries = this.api.getEntriesByName(this.traceMeasure);
    var perfMeasureEntry = perfMeasureEntries && perfMeasureEntries[0];

    if (perfMeasureEntry) {
      this.durationUs = Math.floor(perfMeasureEntry.duration * 1000);
      this.startTimeUs = Math.floor((perfMeasureEntry.startTime + this.api.getTimeOrigin()) * 1000);
    }
  };
  /**
   * @param navigationTimings A single element array which contains the navigationTIming object of
   * the page load
   * @param paintTimings A array which contains paintTiming object of the page load
   * @param firstInputDelay First input delay in millisec
   */


  Trace.createOobTrace = function (navigationTimings, paintTimings, firstInputDelay) {
    var route = Api.getInstance().getUrl();

    if (!route) {
      return;
    }

    var trace = new Trace(OOB_TRACE_PAGE_LOAD_PREFIX + route, true);
    var timeOriginUs = Math.floor(Api.getInstance().getTimeOrigin() * 1000);
    trace.setStartTime(timeOriginUs); // navigationTimings includes only one element.

    if (navigationTimings && navigationTimings[0]) {
      trace.setDuration(Math.floor(navigationTimings[0].duration * 1000));
      trace.putMetric('domInteractive', Math.floor(navigationTimings[0].domInteractive * 1000));
      trace.putMetric('domContentLoadedEventEnd', Math.floor(navigationTimings[0].domContentLoadedEventEnd * 1000));
      trace.putMetric('loadEventEnd', Math.floor(navigationTimings[0].loadEventEnd * 1000));
    }

    var FIRST_PAINT = 'first-paint';
    var FIRST_CONTENTFUL_PAINT = 'first-contentful-paint';

    if (paintTimings) {
      var firstPaint = paintTimings.find(function (paintObject) {
        return paintObject.name === FIRST_PAINT;
      });

      if (firstPaint && firstPaint.startTime) {
        trace.putMetric(FIRST_PAINT_COUNTER_NAME, Math.floor(firstPaint.startTime * 1000));
      }

      var firstContentfulPaint = paintTimings.find(function (paintObject) {
        return paintObject.name === FIRST_CONTENTFUL_PAINT;
      });

      if (firstContentfulPaint && firstContentfulPaint.startTime) {
        trace.putMetric(FIRST_CONTENTFUL_PAINT_COUNTER_NAME, Math.floor(firstContentfulPaint.startTime * 1000));
      }

      if (firstInputDelay) {
        trace.putMetric(FIRST_INPUT_DELAY_COUNTER_NAME, Math.floor(firstInputDelay * 1000));
      }
    }

    logTrace(trace);
  };

  Trace.createUserTimingTrace = function (measureName) {
    var trace = new Trace(measureName, false, measureName);
    logTrace(trace);
  };

  return Trace;
}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function createNetworkRequestEntry(entry) {
  var performanceEntry = entry;

  if (!performanceEntry || performanceEntry.responseStart === undefined) {
    return;
  }

  var timeOrigin = Api.getInstance().getTimeOrigin();
  var startTimeUs = Math.floor((performanceEntry.startTime + timeOrigin) * 1000);
  var timeToResponseInitiatedUs = performanceEntry.responseStart ? Math.floor((performanceEntry.responseStart - performanceEntry.startTime) * 1000) : undefined;
  var timeToResponseCompletedUs = Math.floor((performanceEntry.responseEnd - performanceEntry.startTime) * 1000); // Remove the query params from logged network request url.

  var url = performanceEntry.name && performanceEntry.name.split('?')[0];
  var networkRequest = {
    url: url,
    responsePayloadBytes: performanceEntry.transferSize,
    startTimeUs: startTimeUs,
    timeToResponseInitiatedUs: timeToResponseInitiatedUs,
    timeToResponseCompletedUs: timeToResponseCompletedUs
  };
  logNetworkRequest(networkRequest);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var FID_WAIT_TIME_MS = 5000;

function setupOobResources() {
  // Do not initialize unless iid is available.
  if (!getIid()) {
    return;
  } // The load event might not have fired yet, and that means performance navigation timing
  // object has a duration of 0. The setup should run after all current tasks in js queue.


  setTimeout(function () {
    return setupOobTraces();
  }, 0);
  setTimeout(function () {
    return setupNetworkRequests();
  }, 0);
  setTimeout(function () {
    return setupUserTimingTraces();
  }, 0);
}

function setupNetworkRequests() {
  var api = Api.getInstance();
  var resources = api.getEntriesByType('resource');

  for (var _i = 0, resources_1 = resources; _i < resources_1.length; _i++) {
    var resource = resources_1[_i];
    createNetworkRequestEntry(resource);
  }

  api.setupObserver('resource', createNetworkRequestEntry);
}

function setupOobTraces() {
  var api = Api.getInstance();
  var navigationTimings = api.getEntriesByType('navigation');
  var paintTimings = api.getEntriesByType('paint'); // If First Input Desly polyfill is added to the page, report the fid value.
  // https://github.com/GoogleChromeLabs/first-input-delay

  if (api.onFirstInputDelay) {
    // If the fid call back is not called for certain time, continue without it.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var timeoutId_1 = setTimeout(function () {
      Trace.createOobTrace(navigationTimings, paintTimings);
      timeoutId_1 = undefined;
    }, FID_WAIT_TIME_MS);
    api.onFirstInputDelay(function (fid) {
      if (timeoutId_1) {
        clearTimeout(timeoutId_1);
        Trace.createOobTrace(navigationTimings, paintTimings, fid);
      }
    });
  } else {
    Trace.createOobTrace(navigationTimings, paintTimings);
  }
}

function setupUserTimingTraces() {
  var api = Api.getInstance(); // Run through the measure performance entries collected up to this point.

  var measures = api.getEntriesByType('measure');

  for (var _i = 0, measures_1 = measures; _i < measures_1.length; _i++) {
    var measure = measures_1[_i];
    createUserTimingTrace(measure);
  } // Setup an observer to capture the measures from this point on.


  api.setupObserver('measure', createUserTimingTrace);
}

function createUserTimingTrace(measure) {
  var measureName = measure.name; // Do not create a trace, if the user timing marks and measures are created by the sdk itself.

  if (measureName.substring(0, TRACE_MEASURE_PREFIX.length) === TRACE_MEASURE_PREFIX) {
    return;
  }

  Trace.createUserTimingTrace(measureName);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var PerformanceController =
/** @class */
function () {
  function PerformanceController(app) {
    this.app = app;

    if (Api.getInstance().requiredApisAvailable()) {
      Object(_firebase_util__WEBPACK_IMPORTED_MODULE_3__["validateIndexedDBOpenable"])().then(function (isAvailable) {
        if (isAvailable) {
          setupTransportService();
          getInitializationPromise().then(setupOobResources, setupOobResources);
        }
      }).catch(function (error) {
        consoleLogger.info("Environment doesn't support IndexedDB: " + error);
      });
    }
  }

  PerformanceController.prototype.trace = function (name) {
    return new Trace(name);
  };

  Object.defineProperty(PerformanceController.prototype, "instrumentationEnabled", {
    get: function get() {
      return SettingsService.getInstance().instrumentationEnabled;
    },
    set: function set(val) {
      SettingsService.getInstance().instrumentationEnabled = val;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(PerformanceController.prototype, "dataCollectionEnabled", {
    get: function get() {
      return SettingsService.getInstance().dataCollectionEnabled;
    },
    set: function set(val) {
      SettingsService.getInstance().dataCollectionEnabled = val;
    },
    enumerable: false,
    configurable: true
  });
  return PerformanceController;
}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var DEFAULT_ENTRY_NAME = '[DEFAULT]';

function registerPerformance(instance) {
  var factoryMethod = function factoryMethod(app, installations) {
    if (app.name !== DEFAULT_ENTRY_NAME) {
      throw ERROR_FACTORY.create("FB not default"
      /* FB_NOT_DEFAULT */
      );
    }

    if (typeof window === 'undefined') {
      throw ERROR_FACTORY.create("no window"
      /* NO_WINDOW */
      );
    }

    setupApi(window);
    SettingsService.getInstance().firebaseAppInstance = app;
    SettingsService.getInstance().installationsService = installations;
    return new PerformanceController(app);
  }; // Register performance with firebase-app.


  instance.INTERNAL.registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_5__["Component"]('performance', function (container) {
    /* Dependencies */
    // getImmediate for FirebaseApp will always succeed
    var app = container.getProvider('app').getImmediate(); // The following call will always succeed because perf has `import '@firebase/installations'`

    var installations = container.getProvider('installations').getImmediate();
    return factoryMethod(app, installations);
  }, "PUBLIC"
  /* PUBLIC */
  ));
  instance.registerVersion(name, version);
}

registerPerformance(_firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "X3zk":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "vtpD");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-routing.module */ "euwS");
/* harmony import */ var _components_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/forget-password/forget-password.component */ "5Zbi");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/register/register.component */ "IUDT");








var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoginModule });
    LoginModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoginModule_Factory(t) { return new (t || LoginModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoginRoutingModule"],
            ]] });
    return LoginModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginModule, { declarations: [_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _components_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_5__["ForgetPasswordComponent"], _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _login_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoginRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _components_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_5__["ForgetPasswordComponent"], _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _login_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoginRoutingModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "bhLY":
/*!****************************************************************!*\
  !*** ./node_modules/@firebase/remote-config/dist/index.esm.js ***!
  \****************************************************************/
/*! exports provided: registerRemoteConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerRemoteConfig", function() { return registerRemoteConfig; });
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app */ "zIRd");
/* harmony import */ var _firebase_installations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/installations */ "fSjL");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "WVRz");
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase/util */ "qOnz");
/* harmony import */ var _firebase_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @firebase/logger */ "q/0M");
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @firebase/component */ "/6Yf");






/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Implements the {@link RemoteConfigClient} abstraction with success response caching.
 *
 * <p>Comparable to the browser's Cache API for responses, but the Cache API requires a Service
 * Worker, which requires HTTPS, which would significantly complicate SDK installation. Also, the
 * Cache API doesn't support matching entries by time.
 */

var CachingClient =
/** @class */
function () {
  function CachingClient(client, storage, storageCache, logger) {
    this.client = client;
    this.storage = storage;
    this.storageCache = storageCache;
    this.logger = logger;
  }
  /**
   * Returns true if the age of the cached fetched configs is less than or equal to
   * {@link Settings#minimumFetchIntervalInSeconds}.
   *
   * <p>This is comparable to passing `headers = { 'Cache-Control': max-age <maxAge> }` to the
   * native Fetch API.
   *
   * <p>Visible for testing.
   */


  CachingClient.prototype.isCachedDataFresh = function (cacheMaxAgeMillis, lastSuccessfulFetchTimestampMillis) {
    // Cache can only be fresh if it's populated.
    if (!lastSuccessfulFetchTimestampMillis) {
      this.logger.debug('Config fetch cache check. Cache unpopulated.');
      return false;
    } // Calculates age of cache entry.


    var cacheAgeMillis = Date.now() - lastSuccessfulFetchTimestampMillis;
    var isCachedDataFresh = cacheAgeMillis <= cacheMaxAgeMillis;
    this.logger.debug('Config fetch cache check.' + (" Cache age millis: " + cacheAgeMillis + ".") + (" Cache max age millis (minimumFetchIntervalMillis setting): " + cacheMaxAgeMillis + ".") + (" Is cache hit: " + isCachedDataFresh + "."));
    return isCachedDataFresh;
  };

  CachingClient.prototype.fetch = function (request) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
      var _a, lastSuccessfulFetchTimestampMillis, lastSuccessfulFetchResponse, response, storageOperations;

      return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_b) {
        switch (_b.label) {
          case 0:
            return [4
            /*yield*/
            , Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(), this.storage.getLastSuccessfulFetchResponse()])];

          case 1:
            _a = _b.sent(), lastSuccessfulFetchTimestampMillis = _a[0], lastSuccessfulFetchResponse = _a[1]; // Exits early on cache hit.

            if (lastSuccessfulFetchResponse && this.isCachedDataFresh(request.cacheMaxAgeMillis, lastSuccessfulFetchTimestampMillis)) {
              return [2
              /*return*/
              , lastSuccessfulFetchResponse];
            } // Deviates from pure decorator by not honoring a passed ETag since we don't have a public API
            // that allows the caller to pass an ETag.


            request.eTag = lastSuccessfulFetchResponse && lastSuccessfulFetchResponse.eTag;
            return [4
            /*yield*/
            , this.client.fetch(request)];

          case 2:
            response = _b.sent();
            storageOperations = [// Uses write-through cache for consistency with synchronous public API.
            this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())];

            if (response.status === 200) {
              // Caches response only if it has changed, ie non-304 responses.
              storageOperations.push(this.storage.setLastSuccessfulFetchResponse(response));
            }

            return [4
            /*yield*/
            , Promise.all(storageOperations)];

          case 3:
            _b.sent();

            return [2
            /*return*/
            , response];
        }
      });
    });
  };

  return CachingClient;
}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var _a;

var ERROR_DESCRIPTION_MAP = (_a = {}, _a["registration-window"
/* REGISTRATION_WINDOW */
] = 'Undefined window object. This SDK only supports usage in a browser environment.', _a["registration-project-id"
/* REGISTRATION_PROJECT_ID */
] = 'Undefined project identifier. Check Firebase app initialization.', _a["registration-api-key"
/* REGISTRATION_API_KEY */
] = 'Undefined API key. Check Firebase app initialization.', _a["registration-app-id"
/* REGISTRATION_APP_ID */
] = 'Undefined app identifier. Check Firebase app initialization.', _a["storage-open"
/* STORAGE_OPEN */
] = 'Error thrown when opening storage. Original error: {$originalErrorMessage}.', _a["storage-get"
/* STORAGE_GET */
] = 'Error thrown when reading from storage. Original error: {$originalErrorMessage}.', _a["storage-set"
/* STORAGE_SET */
] = 'Error thrown when writing to storage. Original error: {$originalErrorMessage}.', _a["storage-delete"
/* STORAGE_DELETE */
] = 'Error thrown when deleting from storage. Original error: {$originalErrorMessage}.', _a["fetch-client-network"
/* FETCH_NETWORK */
] = 'Fetch client failed to connect to a network. Check Internet connection.' + ' Original error: {$originalErrorMessage}.', _a["fetch-timeout"
/* FETCH_TIMEOUT */
] = 'The config fetch request timed out. ' + ' Configure timeout using "fetchTimeoutMillis" SDK setting.', _a["fetch-throttle"
/* FETCH_THROTTLE */
] = 'The config fetch request timed out while in an exponential backoff state.' + ' Configure timeout using "fetchTimeoutMillis" SDK setting.' + ' Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.', _a["fetch-client-parse"
/* FETCH_PARSE */
] = 'Fetch client could not parse response.' + ' Original error: {$originalErrorMessage}.', _a["fetch-status"
/* FETCH_STATUS */
] = 'Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.', _a);
var ERROR_FACTORY = new _firebase_util__WEBPACK_IMPORTED_MODULE_3__["ErrorFactory"]('remoteconfig'
/* service */
, 'Remote Config'
/* service name */
, ERROR_DESCRIPTION_MAP); // Note how this is like typeof/instanceof, but for ErrorCode.

function hasErrorCode(e, errorCode) {
  return e instanceof _firebase_util__WEBPACK_IMPORTED_MODULE_3__["FirebaseError"] && e.code.indexOf(errorCode) !== -1;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Attempts to get the most accurate browser language setting.
 *
 * <p>Adapted from getUserLanguage in packages/auth/src/utils.js for TypeScript.
 *
 * <p>Defers default language specification to server logic for consistency.
 *
 * @param navigatorLanguage Enables tests to override read-only {@link NavigatorLanguage}.
 */


function getUserLanguage(navigatorLanguage) {
  if (navigatorLanguage === void 0) {
    navigatorLanguage = navigator;
  }

  return (// Most reliable, but only supported in Chrome/Firefox.
    navigatorLanguage.languages && navigatorLanguage.languages[0] || // Supported in most browsers, but returns the language of the browser
    // UI, not the language set in browser settings.
    navigatorLanguage.language // Polyfill otherwise.

  );
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Implements the Client abstraction for the Remote Config REST API.
 */


var RestClient =
/** @class */
function () {
  function RestClient(firebaseInstallations, sdkVersion, namespace, projectId, apiKey, appId) {
    this.firebaseInstallations = firebaseInstallations;
    this.sdkVersion = sdkVersion;
    this.namespace = namespace;
    this.projectId = projectId;
    this.apiKey = apiKey;
    this.appId = appId;
  }
  /**
   * Fetches from the Remote Config REST API.
   *
   * @throws a {@link ErrorCode.FETCH_NETWORK} error if {@link GlobalFetch#fetch} can't
   * connect to the network.
   * @throws a {@link ErrorCode.FETCH_PARSE} error if {@link Response#json} can't parse the
   * fetch response.
   * @throws a {@link ErrorCode.FETCH_STATUS} error if the service returns an HTTP error status.
   */


  RestClient.prototype.fetch = function (request) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
      var _a, installationId, installationToken, urlBase, url, headers, requestBody, options, fetchPromise, timeoutPromise, response, originalError_1, errorCode, status, responseEtag, config, state, responseBody, originalError_2;

      return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_b) {
        switch (_b.label) {
          case 0:
            return [4
            /*yield*/
            , Promise.all([this.firebaseInstallations.getId(), this.firebaseInstallations.getToken()])];

          case 1:
            _a = _b.sent(), installationId = _a[0], installationToken = _a[1];
            urlBase = window.FIREBASE_REMOTE_CONFIG_URL_BASE || 'https://firebaseremoteconfig.googleapis.com';
            url = urlBase + "/v1/projects/" + this.projectId + "/namespaces/" + this.namespace + ":fetch?key=" + this.apiKey;
            headers = {
              'Content-Type': 'application/json',
              'Content-Encoding': 'gzip',
              // Deviates from pure decorator by not passing max-age header since we don't currently have
              // service behavior using that header.
              'If-None-Match': request.eTag || '*'
            };
            requestBody = {
              /* eslint-disable camelcase */
              sdk_version: this.sdkVersion,
              app_instance_id: installationId,
              app_instance_id_token: installationToken,
              app_id: this.appId,
              language_code: getUserLanguage()
              /* eslint-enable camelcase */

            };
            options = {
              method: 'POST',
              headers: headers,
              body: JSON.stringify(requestBody)
            };
            fetchPromise = fetch(url, options);
            timeoutPromise = new Promise(function (_resolve, reject) {
              // Maps async event listener to Promise API.
              request.signal.addEventListener(function () {
                // Emulates https://heycam.github.io/webidl/#aborterror
                var error = new Error('The operation was aborted.');
                error.name = 'AbortError';
                reject(error);
              });
            });
            _b.label = 2;

          case 2:
            _b.trys.push([2, 5,, 6]);

            return [4
            /*yield*/
            , Promise.race([fetchPromise, timeoutPromise])];

          case 3:
            _b.sent();

            return [4
            /*yield*/
            , fetchPromise];

          case 4:
            response = _b.sent();
            return [3
            /*break*/
            , 6];

          case 5:
            originalError_1 = _b.sent();
            errorCode = "fetch-client-network"
            /* FETCH_NETWORK */
            ;

            if (originalError_1.name === 'AbortError') {
              errorCode = "fetch-timeout"
              /* FETCH_TIMEOUT */
              ;
            }

            throw ERROR_FACTORY.create(errorCode, {
              originalErrorMessage: originalError_1.message
            });

          case 6:
            status = response.status;
            responseEtag = response.headers.get('ETag') || undefined;
            if (!(response.status === 200)) return [3
            /*break*/
            , 11];
            responseBody = void 0;
            _b.label = 7;

          case 7:
            _b.trys.push([7, 9,, 10]);

            return [4
            /*yield*/
            , response.json()];

          case 8:
            responseBody = _b.sent();
            return [3
            /*break*/
            , 10];

          case 9:
            originalError_2 = _b.sent();
            throw ERROR_FACTORY.create("fetch-client-parse"
            /* FETCH_PARSE */
            , {
              originalErrorMessage: originalError_2.message
            });

          case 10:
            config = responseBody['entries'];
            state = responseBody['state'];
            _b.label = 11;

          case 11:
            // Normalizes based on legacy state.
            if (state === 'INSTANCE_STATE_UNSPECIFIED') {
              status = 500;
            } else if (state === 'NO_CHANGE') {
              status = 304;
            } else if (state === 'NO_TEMPLATE' || state === 'EMPTY_CONFIG') {
              // These cases can be fixed remotely, so normalize to safe value.
              config = {};
            } // Normalize to exception-based control flow for non-success cases.
            // Encapsulates HTTP specifics in this class as much as possible. Status is still the best for
            // differentiating success states (200 from 304; the state body param is undefined in a
            // standard 304).


            if (status !== 304 && status !== 200) {
              throw ERROR_FACTORY.create("fetch-status"
              /* FETCH_STATUS */
              , {
                httpStatus: status
              });
            }

            return [2
            /*return*/
            , {
              status: status,
              eTag: responseEtag,
              config: config
            }];
        }
      });
    });
  };

  return RestClient;
}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Shims a minimal AbortSignal.
 *
 * <p>AbortController's AbortSignal conveniently decouples fetch timeout logic from other aspects
 * of networking, such as retries. Firebase doesn't use AbortController enough to justify a
 * polyfill recommendation, like we do with the Fetch API, but this minimal shim can easily be
 * swapped out if/when we do.
 */


var RemoteConfigAbortSignal =
/** @class */
function () {
  function RemoteConfigAbortSignal() {
    this.listeners = [];
  }

  RemoteConfigAbortSignal.prototype.addEventListener = function (listener) {
    this.listeners.push(listener);
  };

  RemoteConfigAbortSignal.prototype.abort = function () {
    this.listeners.forEach(function (listener) {
      return listener();
    });
  };

  return RemoteConfigAbortSignal;
}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var DEFAULT_VALUE_FOR_BOOLEAN = false;
var DEFAULT_VALUE_FOR_STRING = '';
var DEFAULT_VALUE_FOR_NUMBER = 0;
var BOOLEAN_TRUTHY_VALUES = ['1', 'true', 't', 'yes', 'y', 'on'];

var Value =
/** @class */
function () {
  function Value(_source, _value) {
    if (_value === void 0) {
      _value = DEFAULT_VALUE_FOR_STRING;
    }

    this._source = _source;
    this._value = _value;
  }

  Value.prototype.asString = function () {
    return this._value;
  };

  Value.prototype.asBoolean = function () {
    if (this._source === 'static') {
      return DEFAULT_VALUE_FOR_BOOLEAN;
    }

    return BOOLEAN_TRUTHY_VALUES.indexOf(this._value.toLowerCase()) >= 0;
  };

  Value.prototype.asNumber = function () {
    if (this._source === 'static') {
      return DEFAULT_VALUE_FOR_NUMBER;
    }

    var num = Number(this._value);

    if (isNaN(num)) {
      num = DEFAULT_VALUE_FOR_NUMBER;
    }

    return num;
  };

  Value.prototype.getSource = function () {
    return this._source;
  };

  return Value;
}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var DEFAULT_FETCH_TIMEOUT_MILLIS = 60 * 1000; // One minute

var DEFAULT_CACHE_MAX_AGE_MILLIS = 12 * 60 * 60 * 1000; // Twelve hours.

/**
 * Encapsulates business logic mapping network and storage dependencies to the public SDK API.
 *
 * See {@link https://github.com/FirebasePrivate/firebase-js-sdk/blob/master/packages/firebase/index.d.ts|interface documentation} for method descriptions.
 */

var RemoteConfig =
/** @class */
function () {
  function RemoteConfig( // Required by FirebaseServiceFactory interface.
  app, // JS doesn't support private yet
  // (https://github.com/tc39/proposal-class-fields#private-fields), so we hint using an
  // underscore prefix.
  _client, _storageCache, _storage, _logger) {
    this.app = app;
    this._client = _client;
    this._storageCache = _storageCache;
    this._storage = _storage;
    this._logger = _logger; // Tracks completion of initialization promise.

    this._isInitializationComplete = false;
    this.settings = {
      fetchTimeoutMillis: DEFAULT_FETCH_TIMEOUT_MILLIS,
      minimumFetchIntervalMillis: DEFAULT_CACHE_MAX_AGE_MILLIS
    };
    this.defaultConfig = {};
  } // Based on packages/firestore/src/util/log.ts but not static because we need per-instance levels
  // to differentiate 2p and 3p use-cases.


  RemoteConfig.prototype.setLogLevel = function (logLevel) {
    switch (logLevel) {
      case 'debug':
        this._logger.logLevel = _firebase_logger__WEBPACK_IMPORTED_MODULE_4__["LogLevel"].DEBUG;
        break;

      case 'silent':
        this._logger.logLevel = _firebase_logger__WEBPACK_IMPORTED_MODULE_4__["LogLevel"].SILENT;
        break;

      default:
        this._logger.logLevel = _firebase_logger__WEBPACK_IMPORTED_MODULE_4__["LogLevel"].ERROR;
    }
  };

  Object.defineProperty(RemoteConfig.prototype, "fetchTimeMillis", {
    get: function get() {
      return this._storageCache.getLastSuccessfulFetchTimestampMillis() || -1;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(RemoteConfig.prototype, "lastFetchStatus", {
    get: function get() {
      return this._storageCache.getLastFetchStatus() || 'no-fetch-yet';
    },
    enumerable: false,
    configurable: true
  });

  RemoteConfig.prototype.activate = function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
      var _a, lastSuccessfulFetchResponse, activeConfigEtag;

      return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_b) {
        switch (_b.label) {
          case 0:
            return [4
            /*yield*/
            , Promise.all([this._storage.getLastSuccessfulFetchResponse(), this._storage.getActiveConfigEtag()])];

          case 1:
            _a = _b.sent(), lastSuccessfulFetchResponse = _a[0], activeConfigEtag = _a[1];

            if (!lastSuccessfulFetchResponse || !lastSuccessfulFetchResponse.config || !lastSuccessfulFetchResponse.eTag || lastSuccessfulFetchResponse.eTag === activeConfigEtag) {
              // Either there is no successful fetched config, or is the same as current active
              // config.
              return [2
              /*return*/
              , false];
            }

            return [4
            /*yield*/
            , Promise.all([this._storageCache.setActiveConfig(lastSuccessfulFetchResponse.config), this._storage.setActiveConfigEtag(lastSuccessfulFetchResponse.eTag)])];

          case 2:
            _b.sent();

            return [2
            /*return*/
            , true];
        }
      });
    });
  };

  RemoteConfig.prototype.ensureInitialized = function () {
    var _this = this;

    if (!this._initializePromise) {
      this._initializePromise = this._storageCache.loadFromStorage().then(function () {
        _this._isInitializationComplete = true;
      });
    }

    return this._initializePromise;
  };
  /**
   * @throws a {@link ErrorCode.FETCH_CLIENT_TIMEOUT} if the request takes longer than
   * {@link Settings.fetchTimeoutInSeconds} or
   * {@link DEFAULT_FETCH_TIMEOUT_SECONDS}.
   */


  RemoteConfig.prototype.fetch = function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
      var abortSignal, e_1, lastFetchStatus;

      var _this = this;

      return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
        switch (_a.label) {
          case 0:
            abortSignal = new RemoteConfigAbortSignal();
            setTimeout(function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(_this, void 0, void 0, function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
                  // Note a very low delay, eg < 10ms, can elapse before listeners are initialized.
                  abortSignal.abort();
                  return [2
                  /*return*/
                  ];
                });
              });
            }, this.settings.fetchTimeoutMillis);
            _a.label = 1;

          case 1:
            _a.trys.push([1, 4,, 6]);

            return [4
            /*yield*/
            , this._client.fetch({
              cacheMaxAgeMillis: this.settings.minimumFetchIntervalMillis,
              signal: abortSignal
            })];

          case 2:
            _a.sent();

            return [4
            /*yield*/
            , this._storageCache.setLastFetchStatus('success')];

          case 3:
            _a.sent();

            return [3
            /*break*/
            , 6];

          case 4:
            e_1 = _a.sent();
            lastFetchStatus = hasErrorCode(e_1, "fetch-throttle"
            /* FETCH_THROTTLE */
            ) ? 'throttle' : 'failure';
            return [4
            /*yield*/
            , this._storageCache.setLastFetchStatus(lastFetchStatus)];

          case 5:
            _a.sent();

            throw e_1;

          case 6:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  RemoteConfig.prototype.fetchAndActivate = function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.fetch()];

          case 1:
            _a.sent();

            return [2
            /*return*/
            , this.activate()];
        }
      });
    });
  };

  RemoteConfig.prototype.getAll = function () {
    var _this = this;

    return getAllKeys(this._storageCache.getActiveConfig(), this.defaultConfig).reduce(function (allConfigs, key) {
      allConfigs[key] = _this.getValue(key);
      return allConfigs;
    }, {});
  };

  RemoteConfig.prototype.getBoolean = function (key) {
    return this.getValue(key).asBoolean();
  };

  RemoteConfig.prototype.getNumber = function (key) {
    return this.getValue(key).asNumber();
  };

  RemoteConfig.prototype.getString = function (key) {
    return this.getValue(key).asString();
  };

  RemoteConfig.prototype.getValue = function (key) {
    if (!this._isInitializationComplete) {
      this._logger.debug("A value was requested for key \"" + key + "\" before SDK initialization completed." + ' Await on ensureInitialized if the intent was to get a previously activated value.');
    }

    var activeConfig = this._storageCache.getActiveConfig();

    if (activeConfig && activeConfig[key] !== undefined) {
      return new Value('remote', activeConfig[key]);
    } else if (this.defaultConfig && this.defaultConfig[key] !== undefined) {
      return new Value('default', String(this.defaultConfig[key]));
    }

    this._logger.debug("Returning static value for key \"" + key + "\"." + ' Define a default or remote value if this is unintentional.');

    return new Value('static');
  };

  return RemoteConfig;
}();
/**
 * Dedupes and returns an array of all the keys of the received objects.
 */


function getAllKeys(obj1, obj2) {
  if (obj1 === void 0) {
    obj1 = {};
  }

  if (obj2 === void 0) {
    obj2 = {};
  }

  return Object.keys(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, obj1), obj2));
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Converts an error event associated with a {@link IDBRequest} to a {@link FirebaseError}.
 */


function toFirebaseError(event, errorCode) {
  var originalError = event.target.error || undefined;
  return ERROR_FACTORY.create(errorCode, {
    originalErrorMessage: originalError && originalError.message
  });
}
/**
 * A general-purpose store keyed by app + namespace + {@link
 * ProjectNamespaceKeyFieldValue}.
 *
 * <p>The Remote Config SDK can be used with multiple app installations, and each app can interact
 * with multiple namespaces, so this store uses app (ID + name) and namespace as common parent keys
 * for a set of key-value pairs. See {@link Storage#createCompositeKey}.
 *
 * <p>Visible for testing.
 */


var APP_NAMESPACE_STORE = 'app_namespace_store';
var DB_NAME = 'firebase_remote_config';
var DB_VERSION = 1; // Visible for testing.

function openDatabase() {
  return new Promise(function (resolve, reject) {
    var request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = function (event) {
      reject(toFirebaseError(event, "storage-open"
      /* STORAGE_OPEN */
      ));
    };

    request.onsuccess = function (event) {
      resolve(event.target.result);
    };

    request.onupgradeneeded = function (event) {
      var db = event.target.result; // We don't use 'break' in this switch statement, the fall-through
      // behavior is what we want, because if there are multiple versions between
      // the old version and the current version, we want ALL the migrations
      // that correspond to those versions to run, not only the last one.
      // eslint-disable-next-line default-case

      switch (event.oldVersion) {
        case 0:
          db.createObjectStore(APP_NAMESPACE_STORE, {
            keyPath: 'compositeKey'
          });
      }
    };
  });
}
/**
 * Abstracts data persistence.
 */


var Storage =
/** @class */
function () {
  /**
   * @param appId enables storage segmentation by app (ID + name).
   * @param appName enables storage segmentation by app (ID + name).
   * @param namespace enables storage segmentation by namespace.
   */
  function Storage(appId, appName, namespace, openDbPromise) {
    if (openDbPromise === void 0) {
      openDbPromise = openDatabase();
    }

    this.appId = appId;
    this.appName = appName;
    this.namespace = namespace;
    this.openDbPromise = openDbPromise;
  }

  Storage.prototype.getLastFetchStatus = function () {
    return this.get('last_fetch_status');
  };

  Storage.prototype.setLastFetchStatus = function (status) {
    return this.set('last_fetch_status', status);
  }; // This is comparable to a cache entry timestamp. If we need to expire other data, we could
  // consider adding timestamp to all storage records and an optional max age arg to getters.


  Storage.prototype.getLastSuccessfulFetchTimestampMillis = function () {
    return this.get('last_successful_fetch_timestamp_millis');
  };

  Storage.prototype.setLastSuccessfulFetchTimestampMillis = function (timestamp) {
    return this.set('last_successful_fetch_timestamp_millis', timestamp);
  };

  Storage.prototype.getLastSuccessfulFetchResponse = function () {
    return this.get('last_successful_fetch_response');
  };

  Storage.prototype.setLastSuccessfulFetchResponse = function (response) {
    return this.set('last_successful_fetch_response', response);
  };

  Storage.prototype.getActiveConfig = function () {
    return this.get('active_config');
  };

  Storage.prototype.setActiveConfig = function (config) {
    return this.set('active_config', config);
  };

  Storage.prototype.getActiveConfigEtag = function () {
    return this.get('active_config_etag');
  };

  Storage.prototype.setActiveConfigEtag = function (etag) {
    return this.set('active_config_etag', etag);
  };

  Storage.prototype.getThrottleMetadata = function () {
    return this.get('throttle_metadata');
  };

  Storage.prototype.setThrottleMetadata = function (metadata) {
    return this.set('throttle_metadata', metadata);
  };

  Storage.prototype.deleteThrottleMetadata = function () {
    return this.delete('throttle_metadata');
  };

  Storage.prototype.get = function (key) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
      var db;

      var _this = this;

      return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.openDbPromise];

          case 1:
            db = _a.sent();
            return [2
            /*return*/
            , new Promise(function (resolve, reject) {
              var transaction = db.transaction([APP_NAMESPACE_STORE], 'readonly');
              var objectStore = transaction.objectStore(APP_NAMESPACE_STORE);

              var compositeKey = _this.createCompositeKey(key);

              try {
                var request = objectStore.get(compositeKey);

                request.onerror = function (event) {
                  reject(toFirebaseError(event, "storage-get"
                  /* STORAGE_GET */
                  ));
                };

                request.onsuccess = function (event) {
                  var result = event.target.result;

                  if (result) {
                    resolve(result.value);
                  } else {
                    resolve(undefined);
                  }
                };
              } catch (e) {
                reject(ERROR_FACTORY.create("storage-get"
                /* STORAGE_GET */
                , {
                  originalErrorMessage: e && e.message
                }));
              }
            })];
        }
      });
    });
  };

  Storage.prototype.set = function (key, value) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
      var db;

      var _this = this;

      return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.openDbPromise];

          case 1:
            db = _a.sent();
            return [2
            /*return*/
            , new Promise(function (resolve, reject) {
              var transaction = db.transaction([APP_NAMESPACE_STORE], 'readwrite');
              var objectStore = transaction.objectStore(APP_NAMESPACE_STORE);

              var compositeKey = _this.createCompositeKey(key);

              try {
                var request = objectStore.put({
                  compositeKey: compositeKey,
                  value: value
                });

                request.onerror = function (event) {
                  reject(toFirebaseError(event, "storage-set"
                  /* STORAGE_SET */
                  ));
                };

                request.onsuccess = function () {
                  resolve();
                };
              } catch (e) {
                reject(ERROR_FACTORY.create("storage-set"
                /* STORAGE_SET */
                , {
                  originalErrorMessage: e && e.message
                }));
              }
            })];
        }
      });
    });
  };

  Storage.prototype.delete = function (key) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
      var db;

      var _this = this;

      return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.openDbPromise];

          case 1:
            db = _a.sent();
            return [2
            /*return*/
            , new Promise(function (resolve, reject) {
              var transaction = db.transaction([APP_NAMESPACE_STORE], 'readwrite');
              var objectStore = transaction.objectStore(APP_NAMESPACE_STORE);

              var compositeKey = _this.createCompositeKey(key);

              try {
                var request = objectStore.delete(compositeKey);

                request.onerror = function (event) {
                  reject(toFirebaseError(event, "storage-delete"
                  /* STORAGE_DELETE */
                  ));
                };

                request.onsuccess = function () {
                  resolve();
                };
              } catch (e) {
                reject(ERROR_FACTORY.create("storage-delete"
                /* STORAGE_DELETE */
                , {
                  originalErrorMessage: e && e.message
                }));
              }
            })];
        }
      });
    });
  }; // Facilitates composite key functionality (which is unsupported in IE).


  Storage.prototype.createCompositeKey = function (key) {
    return [this.appId, this.appName, this.namespace, key].join();
  };

  return Storage;
}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * A memory cache layer over storage to support the SDK's synchronous read requirements.
 */


var StorageCache =
/** @class */
function () {
  function StorageCache(storage) {
    this.storage = storage;
  }
  /**
   * Memory-only getters
   */


  StorageCache.prototype.getLastFetchStatus = function () {
    return this.lastFetchStatus;
  };

  StorageCache.prototype.getLastSuccessfulFetchTimestampMillis = function () {
    return this.lastSuccessfulFetchTimestampMillis;
  };

  StorageCache.prototype.getActiveConfig = function () {
    return this.activeConfig;
  };
  /**
   * Read-ahead getter
   */


  StorageCache.prototype.loadFromStorage = function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
      var lastFetchStatusPromise, lastSuccessfulFetchTimestampMillisPromise, activeConfigPromise, lastFetchStatus, lastSuccessfulFetchTimestampMillis, activeConfig;
      return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
        switch (_a.label) {
          case 0:
            lastFetchStatusPromise = this.storage.getLastFetchStatus();
            lastSuccessfulFetchTimestampMillisPromise = this.storage.getLastSuccessfulFetchTimestampMillis();
            activeConfigPromise = this.storage.getActiveConfig();
            return [4
            /*yield*/
            , lastFetchStatusPromise];

          case 1:
            lastFetchStatus = _a.sent();

            if (lastFetchStatus) {
              this.lastFetchStatus = lastFetchStatus;
            }

            return [4
            /*yield*/
            , lastSuccessfulFetchTimestampMillisPromise];

          case 2:
            lastSuccessfulFetchTimestampMillis = _a.sent();

            if (lastSuccessfulFetchTimestampMillis) {
              this.lastSuccessfulFetchTimestampMillis = lastSuccessfulFetchTimestampMillis;
            }

            return [4
            /*yield*/
            , activeConfigPromise];

          case 3:
            activeConfig = _a.sent();

            if (activeConfig) {
              this.activeConfig = activeConfig;
            }

            return [2
            /*return*/
            ];
        }
      });
    });
  };
  /**
   * Write-through setters
   */


  StorageCache.prototype.setLastFetchStatus = function (status) {
    this.lastFetchStatus = status;
    return this.storage.setLastFetchStatus(status);
  };

  StorageCache.prototype.setLastSuccessfulFetchTimestampMillis = function (timestampMillis) {
    this.lastSuccessfulFetchTimestampMillis = timestampMillis;
    return this.storage.setLastSuccessfulFetchTimestampMillis(timestampMillis);
  };

  StorageCache.prototype.setActiveConfig = function (activeConfig) {
    this.activeConfig = activeConfig;
    return this.storage.setActiveConfig(activeConfig);
  };

  return StorageCache;
}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Supports waiting on a backoff by:
 *
 * <ul>
 *   <li>Promisifying setTimeout, so we can set a timeout in our Promise chain</li>
 *   <li>Listening on a signal bus for abort events, just like the Fetch API</li>
 *   <li>Failing in the same way the Fetch API fails, so timing out a live request and a throttled
 *       request appear the same.</li>
 * </ul>
 *
 * <p>Visible for testing.
 */


function setAbortableTimeout(signal, throttleEndTimeMillis) {
  return new Promise(function (resolve, reject) {
    // Derives backoff from given end time, normalizing negative numbers to zero.
    var backoffMillis = Math.max(throttleEndTimeMillis - Date.now(), 0);
    var timeout = setTimeout(resolve, backoffMillis); // Adds listener, rather than sets onabort, because signal is a shared object.

    signal.addEventListener(function () {
      clearTimeout(timeout); // If the request completes before this timeout, the rejection has no effect.

      reject(ERROR_FACTORY.create("fetch-throttle"
      /* FETCH_THROTTLE */
      , {
        throttleEndTimeMillis: throttleEndTimeMillis
      }));
    });
  });
}
/**
 * Returns true if the {@link Error} indicates a fetch request may succeed later.
 */


function isRetriableError(e) {
  if (!(e instanceof _firebase_util__WEBPACK_IMPORTED_MODULE_3__["FirebaseError"]) || !e.customData) {
    return false;
  } // Uses string index defined by ErrorData, which FirebaseError implements.


  var httpStatus = Number(e.customData['httpStatus']);
  return httpStatus === 429 || httpStatus === 500 || httpStatus === 503 || httpStatus === 504;
}
/**
 * Decorates a Client with retry logic.
 *
 * <p>Comparable to CachingClient, but uses backoff logic instead of cache max age and doesn't cache
 * responses (because the SDK has no use for error responses).
 */


var RetryingClient =
/** @class */
function () {
  function RetryingClient(client, storage) {
    this.client = client;
    this.storage = storage;
  }

  RetryingClient.prototype.fetch = function (request) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
      var throttleMetadata;
      return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.storage.getThrottleMetadata()];

          case 1:
            throttleMetadata = _a.sent() || {
              backoffCount: 0,
              throttleEndTimeMillis: Date.now()
            };
            return [2
            /*return*/
            , this.attemptFetch(request, throttleMetadata)];
        }
      });
    });
  };
  /**
   * A recursive helper for attempting a fetch request repeatedly.
   *
   * @throws any non-retriable errors.
   */


  RetryingClient.prototype.attemptFetch = function (request, _a) {
    var throttleEndTimeMillis = _a.throttleEndTimeMillis,
        backoffCount = _a.backoffCount;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
      var response, e_1, throttleMetadata;
      return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_b) {
        switch (_b.label) {
          case 0:
            // Starts with a (potentially zero) timeout to support resumption from stored state.
            // Ensures the throttle end time is honored if the last attempt timed out.
            // Note the SDK will never make a request if the fetch timeout expires at this point.
            return [4
            /*yield*/
            , setAbortableTimeout(request.signal, throttleEndTimeMillis)];

          case 1:
            // Starts with a (potentially zero) timeout to support resumption from stored state.
            // Ensures the throttle end time is honored if the last attempt timed out.
            // Note the SDK will never make a request if the fetch timeout expires at this point.
            _b.sent();

            _b.label = 2;

          case 2:
            _b.trys.push([2, 5,, 7]);

            return [4
            /*yield*/
            , this.client.fetch(request)];

          case 3:
            response = _b.sent(); // Note the SDK only clears throttle state if response is success or non-retriable.

            return [4
            /*yield*/
            , this.storage.deleteThrottleMetadata()];

          case 4:
            // Note the SDK only clears throttle state if response is success or non-retriable.
            _b.sent();

            return [2
            /*return*/
            , response];

          case 5:
            e_1 = _b.sent();

            if (!isRetriableError(e_1)) {
              throw e_1;
            }

            throttleMetadata = {
              throttleEndTimeMillis: Date.now() + Object(_firebase_util__WEBPACK_IMPORTED_MODULE_3__["calculateBackoffMillis"])(backoffCount),
              backoffCount: backoffCount + 1
            }; // Persists state.

            return [4
            /*yield*/
            , this.storage.setThrottleMetadata(throttleMetadata)];

          case 6:
            // Persists state.
            _b.sent();

            return [2
            /*return*/
            , this.attemptFetch(request, throttleMetadata)];

          case 7:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  return RetryingClient;
}();

var name = "@firebase/remote-config";
var version = "0.1.31";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function registerRemoteConfig(firebaseInstance) {
  firebaseInstance.INTERNAL.registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_5__["Component"]('remoteConfig', remoteConfigFactory, "PUBLIC"
  /* PUBLIC */
  ).setMultipleInstances(true));
  firebaseInstance.registerVersion(name, version);

  function remoteConfigFactory(container, namespace) {
    /* Dependencies */
    // getImmediate for FirebaseApp will always succeed
    var app = container.getProvider('app').getImmediate(); // The following call will always succeed because rc has `import '@firebase/installations'`

    var installations = container.getProvider('installations').getImmediate(); // Guards against the SDK being used in non-browser environments.

    if (typeof window === 'undefined') {
      throw ERROR_FACTORY.create("registration-window"
      /* REGISTRATION_WINDOW */
      );
    } // Normalizes optional inputs.


    var _a = app.options,
        projectId = _a.projectId,
        apiKey = _a.apiKey,
        appId = _a.appId;

    if (!projectId) {
      throw ERROR_FACTORY.create("registration-project-id"
      /* REGISTRATION_PROJECT_ID */
      );
    }

    if (!apiKey) {
      throw ERROR_FACTORY.create("registration-api-key"
      /* REGISTRATION_API_KEY */
      );
    }

    if (!appId) {
      throw ERROR_FACTORY.create("registration-app-id"
      /* REGISTRATION_APP_ID */
      );
    }

    namespace = namespace || 'firebase';
    var storage = new Storage(appId, app.name, namespace);
    var storageCache = new StorageCache(storage);
    var logger = new _firebase_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"](name); // Sets ERROR as the default log level.
    // See RemoteConfig#setLogLevel for corresponding normalization to ERROR log level.

    logger.logLevel = _firebase_logger__WEBPACK_IMPORTED_MODULE_4__["LogLevel"].ERROR;
    var restClient = new RestClient(installations, // Uses the JS SDK version, by which the RC package version can be deduced, if necessary.
    firebaseInstance.SDK_VERSION, namespace, projectId, apiKey, appId);
    var retryingClient = new RetryingClient(restClient, storage);
    var cachingClient = new CachingClient(retryingClient, storage, storageCache, logger);
    var remoteConfigInstance = new RemoteConfig(app, cachingClient, storageCache, storage, logger); // Starts warming cache.
    // eslint-disable-next-line @typescript-eslint/no-floating-promises

    remoteConfigInstance.ensureInitialized();
    return remoteConfigInstance;
  }
}

registerRemoteConfig(_firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "euwS":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "vtpD");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/register/register.component */ "IUDT");


// component




var routes = [
    {
        path: "",
        component: _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
    },
    {
        path: "register",
        component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"],
    }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoginRoutingModule });
    LoginRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoginRoutingModule_Factory(t) { return new (t || LoginRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return LoginRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "fSjL":
/*!****************************************************************!*\
  !*** ./node_modules/@firebase/installations/dist/index.esm.js ***!
  \****************************************************************/
/*! exports provided: registerInstallations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerInstallations", function() { return registerInstallations; });
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app */ "zIRd");
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/component */ "/6Yf");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "WVRz");
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase/util */ "qOnz");
/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! idb */ "nbvr");
/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(idb__WEBPACK_IMPORTED_MODULE_4__);





var name = "@firebase/installations";
var version = "0.4.20";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var PENDING_TIMEOUT_MS = 10000;
var PACKAGE_VERSION = "w:" + version;
var INTERNAL_AUTH_VERSION = 'FIS_v2';
var INSTALLATIONS_API_URL = 'https://firebaseinstallations.googleapis.com/v1';
var TOKEN_EXPIRATION_BUFFER = 60 * 60 * 1000; // One hour

var SERVICE = 'installations';
var SERVICE_NAME = 'Installations';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _a;

var ERROR_DESCRIPTION_MAP = (_a = {}, _a["missing-app-config-values"
/* MISSING_APP_CONFIG_VALUES */
] = 'Missing App configuration value: "{$valueName}"', _a["not-registered"
/* NOT_REGISTERED */
] = 'Firebase Installation is not registered.', _a["installation-not-found"
/* INSTALLATION_NOT_FOUND */
] = 'Firebase Installation not found.', _a["request-failed"
/* REQUEST_FAILED */
] = '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"', _a["app-offline"
/* APP_OFFLINE */
] = 'Could not process request. Application offline.', _a["delete-pending-registration"
/* DELETE_PENDING_REGISTRATION */
] = "Can't delete installation while there is a pending registration request.", _a);
var ERROR_FACTORY = new _firebase_util__WEBPACK_IMPORTED_MODULE_3__["ErrorFactory"](SERVICE, SERVICE_NAME, ERROR_DESCRIPTION_MAP);
/** Returns true if error is a FirebaseError that is based on an error from the server. */

function isServerError(error) {
  return error instanceof _firebase_util__WEBPACK_IMPORTED_MODULE_3__["FirebaseError"] && error.code.includes("request-failed"
  /* REQUEST_FAILED */
  );
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function getInstallationsEndpoint(_a) {
  var projectId = _a.projectId;
  return INSTALLATIONS_API_URL + "/projects/" + projectId + "/installations";
}

function extractAuthTokenInfoFromResponse(response) {
  return {
    token: response.token,
    requestStatus: 2
    /* COMPLETED */
    ,
    expiresIn: getExpiresInFromResponseExpiresIn(response.expiresIn),
    creationTime: Date.now()
  };
}

function getErrorFromResponse(requestName, response) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
    var responseJson, errorData;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , response.json()];

        case 1:
          responseJson = _a.sent();
          errorData = responseJson.error;
          return [2
          /*return*/
          , ERROR_FACTORY.create("request-failed"
          /* REQUEST_FAILED */
          , {
            requestName: requestName,
            serverCode: errorData.code,
            serverMessage: errorData.message,
            serverStatus: errorData.status
          })];
      }
    });
  });
}

function getHeaders(_a) {
  var apiKey = _a.apiKey;
  return new Headers({
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'x-goog-api-key': apiKey
  });
}

function getHeadersWithAuth(appConfig, _a) {
  var refreshToken = _a.refreshToken;
  var headers = getHeaders(appConfig);
  headers.append('Authorization', getAuthorizationHeader(refreshToken));
  return headers;
}
/**
 * Calls the passed in fetch wrapper and returns the response.
 * If the returned response has a status of 5xx, re-runs the function once and
 * returns the response.
 */


function retryIfServerError(fn) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
    var result;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , fn()];

        case 1:
          result = _a.sent();

          if (result.status >= 500 && result.status < 600) {
            // Internal Server Error. Retry request.
            return [2
            /*return*/
            , fn()];
          }

          return [2
          /*return*/
          , result];
      }
    });
  });
}

function getExpiresInFromResponseExpiresIn(responseExpiresIn) {
  // This works because the server will never respond with fractions of a second.
  return Number(responseExpiresIn.replace('s', '000'));
}

function getAuthorizationHeader(refreshToken) {
  return INTERNAL_AUTH_VERSION + " " + refreshToken;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function createInstallationRequest(appConfig, _a) {
  var fid = _a.fid;
  return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
    var endpoint, headers, body, request, response, responseValue, registeredInstallationEntry;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_b) {
      switch (_b.label) {
        case 0:
          endpoint = getInstallationsEndpoint(appConfig);
          headers = getHeaders(appConfig);
          body = {
            fid: fid,
            authVersion: INTERNAL_AUTH_VERSION,
            appId: appConfig.appId,
            sdkVersion: PACKAGE_VERSION
          };
          request = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
          };
          return [4
          /*yield*/
          , retryIfServerError(function () {
            return fetch(endpoint, request);
          })];

        case 1:
          response = _b.sent();
          if (!response.ok) return [3
          /*break*/
          , 3];
          return [4
          /*yield*/
          , response.json()];

        case 2:
          responseValue = _b.sent();
          registeredInstallationEntry = {
            fid: responseValue.fid || fid,
            registrationStatus: 2
            /* COMPLETED */
            ,
            refreshToken: responseValue.refreshToken,
            authToken: extractAuthTokenInfoFromResponse(responseValue.authToken)
          };
          return [2
          /*return*/
          , registeredInstallationEntry];

        case 3:
          return [4
          /*yield*/
          , getErrorFromResponse('Create Installation', response)];

        case 4:
          throw _b.sent();
      }
    });
  });
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** Returns a promise that resolves after given time passes. */


function sleep(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function bufferToBase64UrlSafe(array) {
  var b64 = btoa(String.fromCharCode.apply(String, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spread"])(array)));
  return b64.replace(/\+/g, '-').replace(/\//g, '_');
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var VALID_FID_PATTERN = /^[cdef][\w-]{21}$/;
var INVALID_FID = '';
/**
 * Generates a new FID using random values from Web Crypto API.
 * Returns an empty string if FID generation fails for any reason.
 */

function generateFid() {
  try {
    // A valid FID has exactly 22 base64 characters, which is 132 bits, or 16.5
    // bytes. our implementation generates a 17 byte array instead.
    var fidByteArray = new Uint8Array(17);
    var crypto_1 = self.crypto || self.msCrypto;
    crypto_1.getRandomValues(fidByteArray); // Replace the first 4 random bits with the constant FID header of 0b0111.

    fidByteArray[0] = 112 + fidByteArray[0] % 16;
    var fid = encode(fidByteArray);
    return VALID_FID_PATTERN.test(fid) ? fid : INVALID_FID;
  } catch (_a) {
    // FID generation errored
    return INVALID_FID;
  }
}
/** Converts a FID Uint8Array to a base64 string representation. */


function encode(fidByteArray) {
  var b64String = bufferToBase64UrlSafe(fidByteArray); // Remove the 23rd character that was added because of the extra 4 bits at the
  // end of our 17 byte array, and the '=' padding.

  return b64String.substr(0, 22);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** Returns a string key that can be used to identify the app. */


function getKey(appConfig) {
  return appConfig.appName + "!" + appConfig.appId;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var fidChangeCallbacks = new Map();
/**
 * Calls the onIdChange callbacks with the new FID value, and broadcasts the
 * change to other tabs.
 */

function fidChanged(appConfig, fid) {
  var key = getKey(appConfig);
  callFidChangeCallbacks(key, fid);
  broadcastFidChange(key, fid);
}

function addCallback(appConfig, callback) {
  // Open the broadcast channel if it's not already open,
  // to be able to listen to change events from other tabs.
  getBroadcastChannel();
  var key = getKey(appConfig);
  var callbackSet = fidChangeCallbacks.get(key);

  if (!callbackSet) {
    callbackSet = new Set();
    fidChangeCallbacks.set(key, callbackSet);
  }

  callbackSet.add(callback);
}

function removeCallback(appConfig, callback) {
  var key = getKey(appConfig);
  var callbackSet = fidChangeCallbacks.get(key);

  if (!callbackSet) {
    return;
  }

  callbackSet.delete(callback);

  if (callbackSet.size === 0) {
    fidChangeCallbacks.delete(key);
  } // Close broadcast channel if there are no more callbacks.


  closeBroadcastChannel();
}

function callFidChangeCallbacks(key, fid) {
  var e_1, _a;

  var callbacks = fidChangeCallbacks.get(key);

  if (!callbacks) {
    return;
  }

  try {
    for (var callbacks_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__values"])(callbacks), callbacks_1_1 = callbacks_1.next(); !callbacks_1_1.done; callbacks_1_1 = callbacks_1.next()) {
      var callback = callbacks_1_1.value;
      callback(fid);
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (callbacks_1_1 && !callbacks_1_1.done && (_a = callbacks_1.return)) _a.call(callbacks_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }
}

function broadcastFidChange(key, fid) {
  var channel = getBroadcastChannel();

  if (channel) {
    channel.postMessage({
      key: key,
      fid: fid
    });
  }

  closeBroadcastChannel();
}

var broadcastChannel = null;
/** Opens and returns a BroadcastChannel if it is supported by the browser. */

function getBroadcastChannel() {
  if (!broadcastChannel && 'BroadcastChannel' in self) {
    broadcastChannel = new BroadcastChannel('[Firebase] FID Change');

    broadcastChannel.onmessage = function (e) {
      callFidChangeCallbacks(e.data.key, e.data.fid);
    };
  }

  return broadcastChannel;
}

function closeBroadcastChannel() {
  if (fidChangeCallbacks.size === 0 && broadcastChannel) {
    broadcastChannel.close();
    broadcastChannel = null;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var DATABASE_NAME = 'firebase-installations-database';
var DATABASE_VERSION = 1;
var OBJECT_STORE_NAME = 'firebase-installations-store';
var dbPromise = null;

function getDbPromise() {
  if (!dbPromise) {
    dbPromise = Object(idb__WEBPACK_IMPORTED_MODULE_4__["openDb"])(DATABASE_NAME, DATABASE_VERSION, function (upgradeDB) {
      // We don't use 'break' in this switch statement, the fall-through
      // behavior is what we want, because if there are multiple versions between
      // the old version and the current version, we want ALL the migrations
      // that correspond to those versions to run, not only the last one.
      // eslint-disable-next-line default-case
      switch (upgradeDB.oldVersion) {
        case 0:
          upgradeDB.createObjectStore(OBJECT_STORE_NAME);
      }
    });
  }

  return dbPromise;
}
/** Assigns or overwrites the record for the given key with the given value. */


function set(appConfig, value) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
    var key, db, tx, objectStore, oldValue;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
      switch (_a.label) {
        case 0:
          key = getKey(appConfig);
          return [4
          /*yield*/
          , getDbPromise()];

        case 1:
          db = _a.sent();
          tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
          objectStore = tx.objectStore(OBJECT_STORE_NAME);
          return [4
          /*yield*/
          , objectStore.get(key)];

        case 2:
          oldValue = _a.sent();
          return [4
          /*yield*/
          , objectStore.put(value, key)];

        case 3:
          _a.sent();

          return [4
          /*yield*/
          , tx.complete];

        case 4:
          _a.sent();

          if (!oldValue || oldValue.fid !== value.fid) {
            fidChanged(appConfig, value.fid);
          }

          return [2
          /*return*/
          , value];
      }
    });
  });
}
/** Removes record(s) from the objectStore that match the given key. */


function remove(appConfig) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
    var key, db, tx;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
      switch (_a.label) {
        case 0:
          key = getKey(appConfig);
          return [4
          /*yield*/
          , getDbPromise()];

        case 1:
          db = _a.sent();
          tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
          return [4
          /*yield*/
          , tx.objectStore(OBJECT_STORE_NAME).delete(key)];

        case 2:
          _a.sent();

          return [4
          /*yield*/
          , tx.complete];

        case 3:
          _a.sent();

          return [2
          /*return*/
          ];
      }
    });
  });
}
/**
 * Atomically updates a record with the result of updateFn, which gets
 * called with the current value. If newValue is undefined, the record is
 * deleted instead.
 * @return Updated value
 */


function update(appConfig, updateFn) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
    var key, db, tx, store, oldValue, newValue;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
      switch (_a.label) {
        case 0:
          key = getKey(appConfig);
          return [4
          /*yield*/
          , getDbPromise()];

        case 1:
          db = _a.sent();
          tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
          store = tx.objectStore(OBJECT_STORE_NAME);
          return [4
          /*yield*/
          , store.get(key)];

        case 2:
          oldValue = _a.sent();
          newValue = updateFn(oldValue);
          if (!(newValue === undefined)) return [3
          /*break*/
          , 4];
          return [4
          /*yield*/
          , store.delete(key)];

        case 3:
          _a.sent();

          return [3
          /*break*/
          , 6];

        case 4:
          return [4
          /*yield*/
          , store.put(newValue, key)];

        case 5:
          _a.sent();

          _a.label = 6;

        case 6:
          return [4
          /*yield*/
          , tx.complete];

        case 7:
          _a.sent();

          if (newValue && (!oldValue || oldValue.fid !== newValue.fid)) {
            fidChanged(appConfig, newValue.fid);
          }

          return [2
          /*return*/
          , newValue];
      }
    });
  });
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Updates and returns the InstallationEntry from the database.
 * Also triggers a registration request if it is necessary and possible.
 */


function getInstallationEntry(appConfig) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
    var registrationPromise, installationEntry;

    var _a;

    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_b) {
      switch (_b.label) {
        case 0:
          return [4
          /*yield*/
          , update(appConfig, function (oldEntry) {
            var installationEntry = updateOrCreateInstallationEntry(oldEntry);
            var entryWithPromise = triggerRegistrationIfNecessary(appConfig, installationEntry);
            registrationPromise = entryWithPromise.registrationPromise;
            return entryWithPromise.installationEntry;
          })];

        case 1:
          installationEntry = _b.sent();
          if (!(installationEntry.fid === INVALID_FID)) return [3
          /*break*/
          , 3];
          _a = {};
          return [4
          /*yield*/
          , registrationPromise];

        case 2:
          // FID generation failed. Waiting for the FID from the server.
          return [2
          /*return*/
          , (_a.installationEntry = _b.sent(), _a)];

        case 3:
          return [2
          /*return*/
          , {
            installationEntry: installationEntry,
            registrationPromise: registrationPromise
          }];
      }
    });
  });
}
/**
 * Creates a new Installation Entry if one does not exist.
 * Also clears timed out pending requests.
 */


function updateOrCreateInstallationEntry(oldEntry) {
  var entry = oldEntry || {
    fid: generateFid(),
    registrationStatus: 0
    /* NOT_STARTED */

  };
  return clearTimedOutRequest(entry);
}
/**
 * If the Firebase Installation is not registered yet, this will trigger the
 * registration and return an InProgressInstallationEntry.
 *
 * If registrationPromise does not exist, the installationEntry is guaranteed
 * to be registered.
 */


function triggerRegistrationIfNecessary(appConfig, installationEntry) {
  if (installationEntry.registrationStatus === 0
  /* NOT_STARTED */
  ) {
      if (!navigator.onLine) {
        // Registration required but app is offline.
        var registrationPromiseWithError = Promise.reject(ERROR_FACTORY.create("app-offline"
        /* APP_OFFLINE */
        ));
        return {
          installationEntry: installationEntry,
          registrationPromise: registrationPromiseWithError
        };
      } // Try registering. Change status to IN_PROGRESS.


      var inProgressEntry = {
        fid: installationEntry.fid,
        registrationStatus: 1
        /* IN_PROGRESS */
        ,
        registrationTime: Date.now()
      };
      var registrationPromise = registerInstallation(appConfig, inProgressEntry);
      return {
        installationEntry: inProgressEntry,
        registrationPromise: registrationPromise
      };
    } else if (installationEntry.registrationStatus === 1
  /* IN_PROGRESS */
  ) {
      return {
        installationEntry: installationEntry,
        registrationPromise: waitUntilFidRegistration(appConfig)
      };
    } else {
    return {
      installationEntry: installationEntry
    };
  }
}
/** This will be executed only once for each new Firebase Installation. */


function registerInstallation(appConfig, installationEntry) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
    var registeredInstallationEntry, e_1;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 2,, 7]);

          return [4
          /*yield*/
          , createInstallationRequest(appConfig, installationEntry)];

        case 1:
          registeredInstallationEntry = _a.sent();
          return [2
          /*return*/
          , set(appConfig, registeredInstallationEntry)];

        case 2:
          e_1 = _a.sent();
          if (!(isServerError(e_1) && e_1.customData.serverCode === 409)) return [3
          /*break*/
          , 4]; // Server returned a "FID can not be used" error.
          // Generate a new ID next time.

          return [4
          /*yield*/
          , remove(appConfig)];

        case 3:
          // Server returned a "FID can not be used" error.
          // Generate a new ID next time.
          _a.sent();

          return [3
          /*break*/
          , 6];

        case 4:
          // Registration failed. Set FID as not registered.
          return [4
          /*yield*/
          , set(appConfig, {
            fid: installationEntry.fid,
            registrationStatus: 0
            /* NOT_STARTED */

          })];

        case 5:
          // Registration failed. Set FID as not registered.
          _a.sent();

          _a.label = 6;

        case 6:
          throw e_1;

        case 7:
          return [2
          /*return*/
          ];
      }
    });
  });
}
/** Call if FID registration is pending in another request. */


function waitUntilFidRegistration(appConfig) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
    var entry, _a, installationEntry, registrationPromise;

    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_b) {
      switch (_b.label) {
        case 0:
          return [4
          /*yield*/
          , updateInstallationRequest(appConfig)];

        case 1:
          entry = _b.sent();
          _b.label = 2;

        case 2:
          if (!(entry.registrationStatus === 1
          /* IN_PROGRESS */
          )) return [3
            /*break*/
            , 5]; // createInstallation request still in progress.

          return [4
          /*yield*/
          , sleep(100)];

        case 3:
          // createInstallation request still in progress.
          _b.sent();

          return [4
          /*yield*/
          , updateInstallationRequest(appConfig)];

        case 4:
          entry = _b.sent();
          return [3
          /*break*/
          , 2];

        case 5:
          if (!(entry.registrationStatus === 0
          /* NOT_STARTED */
          )) return [3
            /*break*/
            , 7];
          return [4
          /*yield*/
          , getInstallationEntry(appConfig)];

        case 6:
          _a = _b.sent(), installationEntry = _a.installationEntry, registrationPromise = _a.registrationPromise;

          if (registrationPromise) {
            return [2
            /*return*/
            , registrationPromise];
          } else {
            // if there is no registrationPromise, entry is registered.
            return [2
            /*return*/
            , installationEntry];
          }

        case 7:
          return [2
          /*return*/
          , entry];
      }
    });
  });
}
/**
 * Called only if there is a CreateInstallation request in progress.
 *
 * Updates the InstallationEntry in the DB based on the status of the
 * CreateInstallation request.
 *
 * Returns the updated InstallationEntry.
 */


function updateInstallationRequest(appConfig) {
  return update(appConfig, function (oldEntry) {
    if (!oldEntry) {
      throw ERROR_FACTORY.create("installation-not-found"
      /* INSTALLATION_NOT_FOUND */
      );
    }

    return clearTimedOutRequest(oldEntry);
  });
}

function clearTimedOutRequest(entry) {
  if (hasInstallationRequestTimedOut(entry)) {
    return {
      fid: entry.fid,
      registrationStatus: 0
      /* NOT_STARTED */

    };
  }

  return entry;
}

function hasInstallationRequestTimedOut(installationEntry) {
  return installationEntry.registrationStatus === 1
  /* IN_PROGRESS */
  && installationEntry.registrationTime + PENDING_TIMEOUT_MS < Date.now();
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function generateAuthTokenRequest(_a, installationEntry) {
  var appConfig = _a.appConfig,
      platformLoggerProvider = _a.platformLoggerProvider;
  return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
    var endpoint, headers, platformLogger, body, request, response, responseValue, completedAuthToken;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_b) {
      switch (_b.label) {
        case 0:
          endpoint = getGenerateAuthTokenEndpoint(appConfig, installationEntry);
          headers = getHeadersWithAuth(appConfig, installationEntry);
          platformLogger = platformLoggerProvider.getImmediate({
            optional: true
          });

          if (platformLogger) {
            headers.append('x-firebase-client', platformLogger.getPlatformInfoString());
          }

          body = {
            installation: {
              sdkVersion: PACKAGE_VERSION
            }
          };
          request = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
          };
          return [4
          /*yield*/
          , retryIfServerError(function () {
            return fetch(endpoint, request);
          })];

        case 1:
          response = _b.sent();
          if (!response.ok) return [3
          /*break*/
          , 3];
          return [4
          /*yield*/
          , response.json()];

        case 2:
          responseValue = _b.sent();
          completedAuthToken = extractAuthTokenInfoFromResponse(responseValue);
          return [2
          /*return*/
          , completedAuthToken];

        case 3:
          return [4
          /*yield*/
          , getErrorFromResponse('Generate Auth Token', response)];

        case 4:
          throw _b.sent();
      }
    });
  });
}

function getGenerateAuthTokenEndpoint(appConfig, _a) {
  var fid = _a.fid;
  return getInstallationsEndpoint(appConfig) + "/" + fid + "/authTokens:generate";
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Returns a valid authentication token for the installation. Generates a new
 * token if one doesn't exist, is expired or about to expire.
 *
 * Should only be called if the Firebase Installation is registered.
 */


function refreshAuthToken(dependencies, forceRefresh) {
  if (forceRefresh === void 0) {
    forceRefresh = false;
  }

  return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
    var tokenPromise, entry, authToken, _a;

    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_b) {
      switch (_b.label) {
        case 0:
          return [4
          /*yield*/
          , update(dependencies.appConfig, function (oldEntry) {
            if (!isEntryRegistered(oldEntry)) {
              throw ERROR_FACTORY.create("not-registered"
              /* NOT_REGISTERED */
              );
            }

            var oldAuthToken = oldEntry.authToken;

            if (!forceRefresh && isAuthTokenValid(oldAuthToken)) {
              // There is a valid token in the DB.
              return oldEntry;
            } else if (oldAuthToken.requestStatus === 1
            /* IN_PROGRESS */
            ) {
                // There already is a token request in progress.
                tokenPromise = waitUntilAuthTokenRequest(dependencies, forceRefresh);
                return oldEntry;
              } else {
              // No token or token expired.
              if (!navigator.onLine) {
                throw ERROR_FACTORY.create("app-offline"
                /* APP_OFFLINE */
                );
              }

              var inProgressEntry = makeAuthTokenRequestInProgressEntry(oldEntry);
              tokenPromise = fetchAuthTokenFromServer(dependencies, inProgressEntry);
              return inProgressEntry;
            }
          })];

        case 1:
          entry = _b.sent();
          if (!tokenPromise) return [3
          /*break*/
          , 3];
          return [4
          /*yield*/
          , tokenPromise];

        case 2:
          _a = _b.sent();
          return [3
          /*break*/
          , 4];

        case 3:
          _a = entry.authToken;
          _b.label = 4;

        case 4:
          authToken = _a;
          return [2
          /*return*/
          , authToken];
      }
    });
  });
}
/**
 * Call only if FID is registered and Auth Token request is in progress.
 *
 * Waits until the current pending request finishes. If the request times out,
 * tries once in this thread as well.
 */


function waitUntilAuthTokenRequest(dependencies, forceRefresh) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
    var entry, authToken;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , updateAuthTokenRequest(dependencies.appConfig)];

        case 1:
          entry = _a.sent();
          _a.label = 2;

        case 2:
          if (!(entry.authToken.requestStatus === 1
          /* IN_PROGRESS */
          )) return [3
            /*break*/
            , 5]; // generateAuthToken still in progress.

          return [4
          /*yield*/
          , sleep(100)];

        case 3:
          // generateAuthToken still in progress.
          _a.sent();

          return [4
          /*yield*/
          , updateAuthTokenRequest(dependencies.appConfig)];

        case 4:
          entry = _a.sent();
          return [3
          /*break*/
          , 2];

        case 5:
          authToken = entry.authToken;

          if (authToken.requestStatus === 0
          /* NOT_STARTED */
          ) {
              // The request timed out or failed in a different call. Try again.
              return [2
              /*return*/
              , refreshAuthToken(dependencies, forceRefresh)];
            } else {
            return [2
            /*return*/
            , authToken];
          }

      }
    });
  });
}
/**
 * Called only if there is a GenerateAuthToken request in progress.
 *
 * Updates the InstallationEntry in the DB based on the status of the
 * GenerateAuthToken request.
 *
 * Returns the updated InstallationEntry.
 */


function updateAuthTokenRequest(appConfig) {
  return update(appConfig, function (oldEntry) {
    if (!isEntryRegistered(oldEntry)) {
      throw ERROR_FACTORY.create("not-registered"
      /* NOT_REGISTERED */
      );
    }

    var oldAuthToken = oldEntry.authToken;

    if (hasAuthTokenRequestTimedOut(oldAuthToken)) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, oldEntry), {
        authToken: {
          requestStatus: 0
          /* NOT_STARTED */

        }
      });
    }

    return oldEntry;
  });
}

function fetchAuthTokenFromServer(dependencies, installationEntry) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
    var authToken, updatedInstallationEntry, e_1, updatedInstallationEntry;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 3,, 8]);

          return [4
          /*yield*/
          , generateAuthTokenRequest(dependencies, installationEntry)];

        case 1:
          authToken = _a.sent();
          updatedInstallationEntry = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, installationEntry), {
            authToken: authToken
          });
          return [4
          /*yield*/
          , set(dependencies.appConfig, updatedInstallationEntry)];

        case 2:
          _a.sent();

          return [2
          /*return*/
          , authToken];

        case 3:
          e_1 = _a.sent();
          if (!(isServerError(e_1) && (e_1.customData.serverCode === 401 || e_1.customData.serverCode === 404))) return [3
          /*break*/
          , 5]; // Server returned a "FID not found" or a "Invalid authentication" error.
          // Generate a new ID next time.

          return [4
          /*yield*/
          , remove(dependencies.appConfig)];

        case 4:
          // Server returned a "FID not found" or a "Invalid authentication" error.
          // Generate a new ID next time.
          _a.sent();

          return [3
          /*break*/
          , 7];

        case 5:
          updatedInstallationEntry = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, installationEntry), {
            authToken: {
              requestStatus: 0
              /* NOT_STARTED */

            }
          });
          return [4
          /*yield*/
          , set(dependencies.appConfig, updatedInstallationEntry)];

        case 6:
          _a.sent();

          _a.label = 7;

        case 7:
          throw e_1;

        case 8:
          return [2
          /*return*/
          ];
      }
    });
  });
}

function isEntryRegistered(installationEntry) {
  return installationEntry !== undefined && installationEntry.registrationStatus === 2
  /* COMPLETED */
  ;
}

function isAuthTokenValid(authToken) {
  return authToken.requestStatus === 2
  /* COMPLETED */
  && !isAuthTokenExpired(authToken);
}

function isAuthTokenExpired(authToken) {
  var now = Date.now();
  return now < authToken.creationTime || authToken.creationTime + authToken.expiresIn < now + TOKEN_EXPIRATION_BUFFER;
}
/** Returns an updated InstallationEntry with an InProgressAuthToken. */


function makeAuthTokenRequestInProgressEntry(oldEntry) {
  var inProgressAuthToken = {
    requestStatus: 1
    /* IN_PROGRESS */
    ,
    requestTime: Date.now()
  };
  return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, oldEntry), {
    authToken: inProgressAuthToken
  });
}

function hasAuthTokenRequestTimedOut(authToken) {
  return authToken.requestStatus === 1
  /* IN_PROGRESS */
  && authToken.requestTime + PENDING_TIMEOUT_MS < Date.now();
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function _getId(dependencies) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
    var _a, installationEntry, registrationPromise;

    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_b) {
      switch (_b.label) {
        case 0:
          return [4
          /*yield*/
          , getInstallationEntry(dependencies.appConfig)];

        case 1:
          _a = _b.sent(), installationEntry = _a.installationEntry, registrationPromise = _a.registrationPromise;

          if (registrationPromise) {
            registrationPromise.catch(console.error);
          } else {
            // If the installation is already registered, update the authentication
            // token if needed.
            refreshAuthToken(dependencies).catch(console.error);
          }

          return [2
          /*return*/
          , installationEntry.fid];
      }
    });
  });
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function _getToken(dependencies, forceRefresh) {
  if (forceRefresh === void 0) {
    forceRefresh = false;
  }

  return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
    var authToken;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , completeInstallationRegistration(dependencies.appConfig)];

        case 1:
          _a.sent();

          return [4
          /*yield*/
          , refreshAuthToken(dependencies, forceRefresh)];

        case 2:
          authToken = _a.sent();
          return [2
          /*return*/
          , authToken.token];
      }
    });
  });
}

function completeInstallationRegistration(appConfig) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
    var registrationPromise;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , getInstallationEntry(appConfig)];

        case 1:
          registrationPromise = _a.sent().registrationPromise;
          if (!registrationPromise) return [3
          /*break*/
          , 3]; // A createInstallation request is in progress. Wait until it finishes.

          return [4
          /*yield*/
          , registrationPromise];

        case 2:
          // A createInstallation request is in progress. Wait until it finishes.
          _a.sent();

          _a.label = 3;

        case 3:
          return [2
          /*return*/
          ];
      }
    });
  });
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function deleteInstallationRequest(appConfig, installationEntry) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
    var endpoint, headers, request, response;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
      switch (_a.label) {
        case 0:
          endpoint = getDeleteEndpoint(appConfig, installationEntry);
          headers = getHeadersWithAuth(appConfig, installationEntry);
          request = {
            method: 'DELETE',
            headers: headers
          };
          return [4
          /*yield*/
          , retryIfServerError(function () {
            return fetch(endpoint, request);
          })];

        case 1:
          response = _a.sent();
          if (!!response.ok) return [3
          /*break*/
          , 3];
          return [4
          /*yield*/
          , getErrorFromResponse('Delete Installation', response)];

        case 2:
          throw _a.sent();

        case 3:
          return [2
          /*return*/
          ];
      }
    });
  });
}

function getDeleteEndpoint(appConfig, _a) {
  var fid = _a.fid;
  return getInstallationsEndpoint(appConfig) + "/" + fid;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function deleteInstallation(dependencies) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
    var appConfig, entry;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
      switch (_a.label) {
        case 0:
          appConfig = dependencies.appConfig;
          return [4
          /*yield*/
          , update(appConfig, function (oldEntry) {
            if (oldEntry && oldEntry.registrationStatus === 0
            /* NOT_STARTED */
            ) {
                // Delete the unregistered entry without sending a deleteInstallation request.
                return undefined;
              }

            return oldEntry;
          })];

        case 1:
          entry = _a.sent();
          if (!entry) return [3
          /*break*/
          , 6];
          if (!(entry.registrationStatus === 1
          /* IN_PROGRESS */
          )) return [3
            /*break*/
            , 2]; // Can't delete while trying to register.

          throw ERROR_FACTORY.create("delete-pending-registration"
          /* DELETE_PENDING_REGISTRATION */
          );

        case 2:
          if (!(entry.registrationStatus === 2
          /* COMPLETED */
          )) return [3
            /*break*/
            , 6];
          if (!!navigator.onLine) return [3
          /*break*/
          , 3];
          throw ERROR_FACTORY.create("app-offline"
          /* APP_OFFLINE */
          );

        case 3:
          return [4
          /*yield*/
          , deleteInstallationRequest(appConfig, entry)];

        case 4:
          _a.sent();

          return [4
          /*yield*/
          , remove(appConfig)];

        case 5:
          _a.sent();

          _a.label = 6;

        case 6:
          return [2
          /*return*/
          ];
      }
    });
  });
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Sets a new callback that will get called when Installation ID changes.
 * Returns an unsubscribe function that will remove the callback when called.
 */


function _onIdChange(_a, callback) {
  var appConfig = _a.appConfig;
  addCallback(appConfig, callback);
  return function () {
    removeCallback(appConfig, callback);
  };
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function extractAppConfig(app) {
  var e_1, _a;

  if (!app || !app.options) {
    throw getMissingValueError('App Configuration');
  }

  if (!app.name) {
    throw getMissingValueError('App Name');
  } // Required app config keys


  var configKeys = ['projectId', 'apiKey', 'appId'];

  try {
    for (var configKeys_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__values"])(configKeys), configKeys_1_1 = configKeys_1.next(); !configKeys_1_1.done; configKeys_1_1 = configKeys_1.next()) {
      var keyName = configKeys_1_1.value;

      if (!app.options[keyName]) {
        throw getMissingValueError(keyName);
      }
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (configKeys_1_1 && !configKeys_1_1.done && (_a = configKeys_1.return)) _a.call(configKeys_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }

  return {
    appName: app.name,
    projectId: app.options.projectId,
    apiKey: app.options.apiKey,
    appId: app.options.appId
  };
}

function getMissingValueError(valueName) {
  return ERROR_FACTORY.create("missing-app-config-values"
  /* MISSING_APP_CONFIG_VALUES */
  , {
    valueName: valueName
  });
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function registerInstallations(instance) {
  var installationsName = 'installations';
  instance.INTERNAL.registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_1__["Component"](installationsName, function (container) {
    var app = container.getProvider('app').getImmediate(); // Throws if app isn't configured properly.

    var appConfig = extractAppConfig(app);
    var platformLoggerProvider = container.getProvider('platform-logger');
    var dependencies = {
      appConfig: appConfig,
      platformLoggerProvider: platformLoggerProvider
    };
    var installations = {
      app: app,
      getId: function getId() {
        return _getId(dependencies);
      },
      getToken: function getToken(forceRefresh) {
        return _getToken(dependencies, forceRefresh);
      },
      delete: function _delete() {
        return deleteInstallation(dependencies);
      },
      onIdChange: function onIdChange(callback) {
        return _onIdChange(dependencies, callback);
      }
    };
    return installations;
  }, "PUBLIC"
  /* PUBLIC */
  ));
  instance.registerVersion(name, version);
}

registerInstallations(_firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "fceV":
/*!************************************************************!*\
  !*** ./node_modules/@firebase/functions/dist/index.esm.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app */ "zIRd");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "WVRz");
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/component */ "/6Yf");



/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Standard error codes for different ways a request can fail, as defined by:
 * https://github.com/googleapis/googleapis/blob/master/google/rpc/code.proto
 *
 * This map is used primarily to convert from a backend error code string to
 * a client SDK error code string, and make sure it's in the supported set.
 */

var errorCodeMap = {
  OK: 'ok',
  CANCELLED: 'cancelled',
  UNKNOWN: 'unknown',
  INVALID_ARGUMENT: 'invalid-argument',
  DEADLINE_EXCEEDED: 'deadline-exceeded',
  NOT_FOUND: 'not-found',
  ALREADY_EXISTS: 'already-exists',
  PERMISSION_DENIED: 'permission-denied',
  UNAUTHENTICATED: 'unauthenticated',
  RESOURCE_EXHAUSTED: 'resource-exhausted',
  FAILED_PRECONDITION: 'failed-precondition',
  ABORTED: 'aborted',
  OUT_OF_RANGE: 'out-of-range',
  UNIMPLEMENTED: 'unimplemented',
  INTERNAL: 'internal',
  UNAVAILABLE: 'unavailable',
  DATA_LOSS: 'data-loss'
};
/**
 * An explicit error that can be thrown from a handler to send an error to the
 * client that called the function.
 */

var HttpsErrorImpl =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(HttpsErrorImpl, _super);

  function HttpsErrorImpl(code, message, details) {
    var _this = _super.call(this, message) || this; // This is a workaround for a bug in TypeScript when extending Error:
    // tslint:disable-next-line
    // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work


    Object.setPrototypeOf(_this, HttpsErrorImpl.prototype);
    _this.code = code;
    _this.details = details;
    return _this;
  }

  return HttpsErrorImpl;
}(Error);
/**
 * Takes an HTTP status code and returns the corresponding ErrorCode.
 * This is the standard HTTP status code -> error mapping defined in:
 * https://github.com/googleapis/googleapis/blob/master/google/rpc/code.proto
 *
 * @param status An HTTP status code.
 * @return The corresponding ErrorCode, or ErrorCode.UNKNOWN if none.
 */


function codeForHTTPStatus(status) {
  // Make sure any successful status is OK.
  if (status >= 200 && status < 300) {
    return 'ok';
  }

  switch (status) {
    case 0:
      // This can happen if the server returns 500.
      return 'internal';

    case 400:
      return 'invalid-argument';

    case 401:
      return 'unauthenticated';

    case 403:
      return 'permission-denied';

    case 404:
      return 'not-found';

    case 409:
      return 'aborted';

    case 429:
      return 'resource-exhausted';

    case 499:
      return 'cancelled';

    case 500:
      return 'internal';

    case 501:
      return 'unimplemented';

    case 503:
      return 'unavailable';

    case 504:
      return 'deadline-exceeded';
  }

  return 'unknown';
}
/**
 * Takes an HTTP response and returns the corresponding Error, if any.
 */


function _errorForResponse(status, bodyJSON, serializer) {
  var code = codeForHTTPStatus(status); // Start with reasonable defaults from the status code.

  var description = code;
  var details = undefined; // Then look through the body for explicit details.

  try {
    var errorJSON = bodyJSON && bodyJSON.error;

    if (errorJSON) {
      var status_1 = errorJSON.status;

      if (typeof status_1 === 'string') {
        if (!errorCodeMap[status_1]) {
          // They must've included an unknown error code in the body.
          return new HttpsErrorImpl('internal', 'internal');
        }

        code = errorCodeMap[status_1]; // TODO(klimt): Add better default descriptions for error enums.
        // The default description needs to be updated for the new code.

        description = status_1;
      }

      var message = errorJSON.message;

      if (typeof message === 'string') {
        description = message;
      }

      details = errorJSON.details;

      if (details !== undefined) {
        details = serializer.decode(details);
      }
    }
  } catch (e) {// If we couldn't parse explicit error data, that's fine.
  }

  if (code === 'ok') {
    // Technically, there's an edge case where a developer could explicitly
    // return an error code of OK, and we will treat it as success, but that
    // seems reasonable.
    return null;
  }

  return new HttpsErrorImpl(code, description, details);
}
/**
 * Helper class to get metadata that should be included with a function call.
 */


var ContextProvider =
/** @class */
function () {
  function ContextProvider(authProvider, messagingProvider) {
    var _this = this;

    this.auth = null;
    this.messaging = null;
    this.auth = authProvider.getImmediate({
      optional: true
    });
    this.messaging = messagingProvider.getImmediate({
      optional: true
    });

    if (!this.auth) {
      authProvider.get().then(function (auth) {
        return _this.auth = auth;
      }, function () {
        /* get() never rejects */
      });
    }

    if (!this.messaging) {
      messagingProvider.get().then(function (messaging) {
        return _this.messaging = messaging;
      }, function () {
        /* get() never rejects */
      });
    }
  }

  ContextProvider.prototype.getAuthToken = function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
      var token, e_1;
      return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!this.auth) {
              return [2
              /*return*/
              , undefined];
            }

            _a.label = 1;

          case 1:
            _a.trys.push([1, 3,, 4]);

            return [4
            /*yield*/
            , this.auth.getToken()];

          case 2:
            token = _a.sent();

            if (!token) {
              return [2
              /*return*/
              , undefined];
            }

            return [2
            /*return*/
            , token.accessToken];

          case 3:
            e_1 = _a.sent(); // If there's any error when trying to get the auth token, leave it off.

            return [2
            /*return*/
            , undefined];

          case 4:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  ContextProvider.prototype.getInstanceIdToken = function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
        if (!this.messaging || !('Notification' in self) || Notification.permission !== 'granted') {
          return [2
          /*return*/
          , undefined];
        }

        try {
          return [2
          /*return*/
          , this.messaging.getToken()];
        } catch (e) {
          // We don't warn on this, because it usually means messaging isn't set up.
          // console.warn('Failed to retrieve instance id token.', e);
          // If there's any error when trying to get the token, leave it off.
          return [2
          /*return*/
          , undefined];
        }

        return [2
        /*return*/
        ];
      });
    });
  };

  ContextProvider.prototype.getContext = function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
      var authToken, instanceIdToken;
      return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.getAuthToken()];

          case 1:
            authToken = _a.sent();
            return [4
            /*yield*/
            , this.getInstanceIdToken()];

          case 2:
            instanceIdToken = _a.sent();
            return [2
            /*return*/
            , {
              authToken: authToken,
              instanceIdToken: instanceIdToken
            }];
        }
      });
    });
  };

  return ContextProvider;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var LONG_TYPE = 'type.googleapis.com/google.protobuf.Int64Value';
var UNSIGNED_LONG_TYPE = 'type.googleapis.com/google.protobuf.UInt64Value';

function mapValues( // { [k: string]: unknown } is no longer a wildcard assignment target after typescript 3.5
// eslint-disable-next-line @typescript-eslint/no-explicit-any
o, f) {
  var result = {};

  for (var key in o) {
    if (o.hasOwnProperty(key)) {
      result[key] = f(o[key]);
    }
  }

  return result;
}

var Serializer =
/** @class */
function () {
  function Serializer() {} // Takes data and encodes it in a JSON-friendly way, such that types such as
  // Date are preserved.


  Serializer.prototype.encode = function (data) {
    var _this = this;

    if (data == null) {
      return null;
    }

    if (data instanceof Number) {
      data = data.valueOf();
    }

    if (typeof data === 'number' && isFinite(data)) {
      // Any number in JS is safe to put directly in JSON and parse as a double
      // without any loss of precision.
      return data;
    }

    if (data === true || data === false) {
      return data;
    }

    if (Object.prototype.toString.call(data) === '[object String]') {
      return data;
    }

    if (Array.isArray(data)) {
      return data.map(function (x) {
        return _this.encode(x);
      });
    }

    if (typeof data === 'function' || typeof data === 'object') {
      return mapValues(data, function (x) {
        return _this.encode(x);
      });
    } // If we got this far, the data is not encodable.


    throw new Error('Data cannot be encoded in JSON: ' + data);
  }; // Takes data that's been encoded in a JSON-friendly form and returns a form
  // with richer datatypes, such as Dates, etc.


  Serializer.prototype.decode = function (json) {
    var _this = this;

    if (json == null) {
      return json;
    }

    if (json['@type']) {
      switch (json['@type']) {
        case LONG_TYPE: // Fall through and handle this the same as unsigned.

        case UNSIGNED_LONG_TYPE:
          {
            // Technically, this could work return a valid number for malformed
            // data if there was a number followed by garbage. But it's just not
            // worth all the extra code to detect that case.
            var value = Number(json['value']);

            if (isNaN(value)) {
              throw new Error('Data cannot be decoded from JSON: ' + json);
            }

            return value;
          }

        default:
          {
            throw new Error('Data cannot be decoded from JSON: ' + json);
          }
      }
    }

    if (Array.isArray(json)) {
      return json.map(function (x) {
        return _this.decode(x);
      });
    }

    if (typeof json === 'function' || typeof json === 'object') {
      return mapValues(json, function (x) {
        return _this.decode(x);
      });
    } // Anything else is safe to return.


    return json;
  };

  return Serializer;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Returns a Promise that will be rejected after the given duration.
 * The error will be of type HttpsErrorImpl.
 *
 * @param millis Number of milliseconds to wait before rejecting.
 */


function failAfter(millis) {
  var timer;
  var promise = new Promise(function (_, reject) {
    timer = setTimeout(function () {
      reject(new HttpsErrorImpl('deadline-exceeded', 'deadline-exceeded'));
    }, millis);
  });
  return {
    timer: timer,
    promise: promise
  };
}
/**
 * The main class for the Firebase Functions SDK.
 */


var Service =
/** @class */
function () {
  /**
   * Creates a new Functions service for the given app and (optional) region or custom domain.
   * @param app_ The FirebaseApp to use.
   * @param regionOrCustomDomain_ one of:
   *   a) A region to call functions from, such as us-central1
   *   b) A custom domain to use as a functions prefix, such as https://mydomain.com
   */
  function Service(app_, authProvider, messagingProvider, regionOrCustomDomain_, fetchImpl) {
    var _this = this;

    if (regionOrCustomDomain_ === void 0) {
      regionOrCustomDomain_ = 'us-central1';
    }

    this.app_ = app_;
    this.fetchImpl = fetchImpl;
    this.serializer = new Serializer();
    this.emulatorOrigin = null;
    this.INTERNAL = {
      delete: function _delete() {
        return Promise.resolve(_this.deleteService());
      }
    };
    this.contextProvider = new ContextProvider(authProvider, messagingProvider); // Cancels all ongoing requests when resolved.

    this.cancelAllRequests = new Promise(function (resolve) {
      _this.deleteService = function () {
        return resolve();
      };
    }); // Resolve the region or custom domain overload by attempting to parse it.

    try {
      var url = new URL(regionOrCustomDomain_);
      this.customDomain = url.origin;
      this.region = 'us-central1';
    } catch (e) {
      this.customDomain = null;
      this.region = regionOrCustomDomain_;
    }
  }

  Object.defineProperty(Service.prototype, "app", {
    get: function get() {
      return this.app_;
    },
    enumerable: false,
    configurable: true
  });
  /**
   * Returns the URL for a callable with the given name.
   * @param name The name of the callable.
   */

  Service.prototype._url = function (name) {
    var projectId = this.app_.options.projectId;

    if (this.emulatorOrigin !== null) {
      var origin_1 = this.emulatorOrigin;
      return origin_1 + "/" + projectId + "/" + this.region + "/" + name;
    }

    if (this.customDomain !== null) {
      return this.customDomain + "/" + name;
    }

    return "https://" + this.region + "-" + projectId + ".cloudfunctions.net/" + name;
  };
  /**
   * Modify this instance to communicate with the Cloud Functions emulator.
   *
   * Note: this must be called before this instance has been used to do any operations.
   *
   * @param host The emulator host (ex: localhost)
   * @param port The emulator port (ex: 5001)
   */


  Service.prototype.useEmulator = function (host, port) {
    this.emulatorOrigin = "http://" + host + ":" + port;
  };
  /**
   * Changes this instance to point to a Cloud Functions emulator running
   * locally. See https://firebase.google.com/docs/functions/local-emulator
   *
   * @deprecated Prefer the useEmulator(host, port) method.
   * @param origin The origin of the local emulator, such as
   * "http://localhost:5005".
   */


  Service.prototype.useFunctionsEmulator = function (origin) {
    this.emulatorOrigin = origin;
  };
  /**
   * Returns a reference to the callable https trigger with the given name.
   * @param name The name of the trigger.
   */


  Service.prototype.httpsCallable = function (name, options) {
    var _this = this;

    return function (data) {
      return _this.call(name, data, options || {});
    };
  };
  /**
   * Does an HTTP POST and returns the completed response.
   * @param url The url to post to.
   * @param body The JSON body of the post.
   * @param headers The HTTP headers to include in the request.
   * @return A Promise that will succeed when the request finishes.
   */


  Service.prototype.postJSON = function (url, body, headers) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
      var response, e_1, json, e_2;
      return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
        switch (_a.label) {
          case 0:
            headers['Content-Type'] = 'application/json';
            _a.label = 1;

          case 1:
            _a.trys.push([1, 3,, 4]);

            return [4
            /*yield*/
            , this.fetchImpl(url, {
              method: 'POST',
              body: JSON.stringify(body),
              headers: headers
            })];

          case 2:
            response = _a.sent();
            return [3
            /*break*/
            , 4];

          case 3:
            e_1 = _a.sent(); // This could be an unhandled error on the backend, or it could be a
            // network error. There's no way to know, since an unhandled error on the
            // backend will fail to set the proper CORS header, and thus will be
            // treated as a network error by fetch.

            return [2
            /*return*/
            , {
              status: 0,
              json: null
            }];

          case 4:
            json = null;
            _a.label = 5;

          case 5:
            _a.trys.push([5, 7,, 8]);

            return [4
            /*yield*/
            , response.json()];

          case 6:
            json = _a.sent();
            return [3
            /*break*/
            , 8];

          case 7:
            e_2 = _a.sent();
            return [3
            /*break*/
            , 8];

          case 8:
            return [2
            /*return*/
            , {
              status: response.status,
              json: json
            }];
        }
      });
    });
  };
  /**
   * Calls a callable function asynchronously and returns the result.
   * @param name The name of the callable trigger.
   * @param data The data to pass as params to the function.s
   */


  Service.prototype.call = function (name, data, options) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
      var url, body, headers, context, timeout, _a, timer, failAfterPromise, response, error, responseData, decodedData;

      return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_b) {
        switch (_b.label) {
          case 0:
            url = this._url(name); // Encode any special types, such as dates, in the input data.

            data = this.serializer.encode(data);
            body = {
              data: data
            };
            headers = {};
            return [4
            /*yield*/
            , this.contextProvider.getContext()];

          case 1:
            context = _b.sent();

            if (context.authToken) {
              headers['Authorization'] = 'Bearer ' + context.authToken;
            }

            if (context.instanceIdToken) {
              headers['Firebase-Instance-ID-Token'] = context.instanceIdToken;
            }

            timeout = options.timeout || 70000;
            _a = failAfter(timeout), timer = _a.timer, failAfterPromise = _a.promise;
            return [4
            /*yield*/
            , Promise.race([clearTimeoutWrapper(timer, this.postJSON(url, body, headers)), failAfterPromise, clearTimeoutWrapper(timer, this.cancelAllRequests)])];

          case 2:
            response = _b.sent(); // If service was deleted, interrupted response throws an error.

            if (!response) {
              throw new HttpsErrorImpl('cancelled', 'Firebase Functions instance was deleted.');
            }

            error = _errorForResponse(response.status, response.json, this.serializer);

            if (error) {
              throw error;
            }

            if (!response.json) {
              throw new HttpsErrorImpl('internal', 'Response is not valid JSON object.');
            }

            responseData = response.json.data; // TODO(klimt): For right now, allow "result" instead of "data", for
            // backwards compatibility.

            if (typeof responseData === 'undefined') {
              responseData = response.json.result;
            }

            if (typeof responseData === 'undefined') {
              // Consider the response malformed.
              throw new HttpsErrorImpl('internal', 'Response is missing data field.');
            }

            decodedData = this.serializer.decode(responseData);
            return [2
            /*return*/
            , {
              data: decodedData
            }];
        }
      });
    });
  };

  return Service;
}();

function clearTimeoutWrapper(timer, promise) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
    var result;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , promise];

        case 1:
          result = _a.sent(); // eslint-disable-next-line @typescript-eslint/no-explicit-any

          clearTimeout(timer);
          return [2
          /*return*/
          , result];
      }
    });
  });
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Type constant for Firebase Functions.
 */


var FUNCTIONS_TYPE = 'functions';

function registerFunctions(instance, fetchImpl) {
  var namespaceExports = {
    // no-inline
    Functions: Service
  };

  function factory(container, regionOrCustomDomain) {
    // Dependencies
    var app = container.getProvider('app').getImmediate();
    var authProvider = container.getProvider('auth-internal');
    var messagingProvider = container.getProvider('messaging'); // eslint-disable-next-line @typescript-eslint/no-explicit-any

    return new Service(app, authProvider, messagingProvider, regionOrCustomDomain, fetchImpl);
  }

  instance.INTERNAL.registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_2__["Component"](FUNCTIONS_TYPE, factory, "PUBLIC"
  /* PUBLIC */
  ).setServiceProps(namespaceExports).setMultipleInstances(true));
}

var name = "@firebase/functions";
var version = "0.6.2";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

registerFunctions(_firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"], fetch.bind(self));
_firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].registerVersion(name, version);

/***/ }),

/***/ "gHGA":
/*!************************************************************!*\
  !*** ./node_modules/@firebase/messaging/dist/index.esm.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_installations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/installations */ "fSjL");
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/component */ "/6Yf");
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/util */ "qOnz");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "WVRz");
/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! idb */ "nbvr");
/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(idb__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @firebase/app */ "zIRd");






/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _a;

var ERROR_MAP = (_a = {}, _a["missing-app-config-values"
/* MISSING_APP_CONFIG_VALUES */
] = 'Missing App configuration value: "{$valueName}"', _a["only-available-in-window"
/* AVAILABLE_IN_WINDOW */
] = 'This method is available in a Window context.', _a["only-available-in-sw"
/* AVAILABLE_IN_SW */
] = 'This method is available in a service worker context.', _a["permission-default"
/* PERMISSION_DEFAULT */
] = 'The notification permission was not granted and dismissed instead.', _a["permission-blocked"
/* PERMISSION_BLOCKED */
] = 'The notification permission was not granted and blocked instead.', _a["unsupported-browser"
/* UNSUPPORTED_BROWSER */
] = "This browser doesn't support the API's required to use the firebase SDK.", _a["failed-service-worker-registration"
/* FAILED_DEFAULT_REGISTRATION */
] = 'We are unable to register the default service worker. {$browserErrorMessage}', _a["token-subscribe-failed"
/* TOKEN_SUBSCRIBE_FAILED */
] = 'A problem occurred while subscribing the user to FCM: {$errorInfo}', _a["token-subscribe-no-token"
/* TOKEN_SUBSCRIBE_NO_TOKEN */
] = 'FCM returned no token when subscribing the user to push.', _a["token-unsubscribe-failed"
/* TOKEN_UNSUBSCRIBE_FAILED */
] = 'A problem occurred while unsubscribing the ' + 'user from FCM: {$errorInfo}', _a["token-update-failed"
/* TOKEN_UPDATE_FAILED */
] = 'A problem occurred while updating the user from FCM: {$errorInfo}', _a["token-update-no-token"
/* TOKEN_UPDATE_NO_TOKEN */
] = 'FCM returned no token when updating the user to push.', _a["use-sw-after-get-token"
/* USE_SW_AFTER_GET_TOKEN */
] = 'The useServiceWorker() method may only be called once and must be ' + 'called before calling getToken() to ensure your service worker is used.', _a["invalid-sw-registration"
/* INVALID_SW_REGISTRATION */
] = 'The input to useServiceWorker() must be a ServiceWorkerRegistration.', _a["invalid-bg-handler"
/* INVALID_BG_HANDLER */
] = 'The input to setBackgroundMessageHandler() must be a function.', _a["invalid-vapid-key"
/* INVALID_VAPID_KEY */
] = 'The public VAPID key must be a string.', _a["use-vapid-key-after-get-token"
/* USE_VAPID_KEY_AFTER_GET_TOKEN */
] = 'The usePublicVapidKey() method may only be called once and must be ' + 'called before calling getToken() to ensure your VAPID key is used.', _a);
var ERROR_FACTORY = new _firebase_util__WEBPACK_IMPORTED_MODULE_2__["ErrorFactory"]('messaging', 'Messaging', ERROR_MAP);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var DEFAULT_SW_PATH = '/firebase-messaging-sw.js';
var DEFAULT_SW_SCOPE = '/firebase-cloud-messaging-push-scope';
var DEFAULT_VAPID_KEY = 'BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4';
var ENDPOINT = 'https://fcmregistrations.googleapis.com/v1'; // Key of FCM Payload in Notification's data field.

var FCM_MSG = 'FCM_MSG';
var TAG = 'FirebaseMessaging: '; // Set to '1' if Analytics is enabled for the campaign

var CONSOLE_CAMPAIGN_ANALYTICS_ENABLED = 'google.c.a.e';
var CONSOLE_CAMPAIGN_ID = 'google.c.a.c_id';
var CONSOLE_CAMPAIGN_TIME = 'google.c.a.ts';
var CONSOLE_CAMPAIGN_NAME = 'google.c.a.c_l'; // Due to the fact that onBackgroundMessage can't be awaited (to support rxjs), a silent push
// warning might be shown by the browser if the callback fails to completes by the end of onPush.
// Experiments were ran to determine the majority onBackground message clock time. This brief
// blocking time would allow majority of the onBackgroundMessage callback to finish.

var BACKGROUND_HANDLE_EXECUTION_TIME_LIMIT_MS = 1000; // Preparation time for client to initialize and set up the message handler.

var FOREGROUND_HANDLE_PREPARATION_TIME_MS = 3000;
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */

var MessageType;

(function (MessageType) {
  MessageType["PUSH_RECEIVED"] = "push-received";
  MessageType["NOTIFICATION_CLICKED"] = "notification-clicked";
})(MessageType || (MessageType = {}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function arrayToBase64(array) {
  var uint8Array = new Uint8Array(array);
  var base64String = btoa(String.fromCharCode.apply(String, Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__spread"])(uint8Array)));
  return base64String.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}

function base64ToArray(base64String) {
  var padding = '='.repeat((4 - base64String.length % 4) % 4);
  var base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
  var rawData = atob(base64);
  var outputArray = new Uint8Array(rawData.length);

  for (var i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }

  return outputArray;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var OLD_DB_NAME = 'fcm_token_details_db';
/**
 * The last DB version of 'fcm_token_details_db' was 4. This is one higher, so that the upgrade
 * callback is called for all versions of the old DB.
 */

var OLD_DB_VERSION = 5;
var OLD_OBJECT_STORE_NAME = 'fcm_token_object_Store';

function migrateOldDatabase(senderId) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
    var databases, dbNames, tokenDetails, db;

    var _this = this;

    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (!('databases' in indexedDB)) return [3
          /*break*/
          , 2];
          return [4
          /*yield*/
          , indexedDB.databases()];

        case 1:
          databases = _a.sent();
          dbNames = databases.map(function (db) {
            return db.name;
          });

          if (!dbNames.includes(OLD_DB_NAME)) {
            // old DB didn't exist, no need to open.
            return [2
            /*return*/
            , null];
          }

          _a.label = 2;

        case 2:
          tokenDetails = null;
          return [4
          /*yield*/
          , Object(idb__WEBPACK_IMPORTED_MODULE_4__["openDb"])(OLD_DB_NAME, OLD_DB_VERSION, function (db) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(_this, void 0, void 0, function () {
              var objectStore, value, oldDetails, oldDetails, oldDetails;

              var _a;

              return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_b) {
                switch (_b.label) {
                  case 0:
                    if (db.oldVersion < 2) {
                      // Database too old, skip migration.
                      return [2
                      /*return*/
                      ];
                    }

                    if (!db.objectStoreNames.contains(OLD_OBJECT_STORE_NAME)) {
                      // Database did not exist. Nothing to do.
                      return [2
                      /*return*/
                      ];
                    }

                    objectStore = db.transaction.objectStore(OLD_OBJECT_STORE_NAME);
                    return [4
                    /*yield*/
                    , objectStore.index('fcmSenderId').get(senderId)];

                  case 1:
                    value = _b.sent();
                    return [4
                    /*yield*/
                    , objectStore.clear()];

                  case 2:
                    _b.sent();

                    if (!value) {
                      // No entry in the database, nothing to migrate.
                      return [2
                      /*return*/
                      ];
                    }

                    if (db.oldVersion === 2) {
                      oldDetails = value;

                      if (!oldDetails.auth || !oldDetails.p256dh || !oldDetails.endpoint) {
                        return [2
                        /*return*/
                        ];
                      }

                      tokenDetails = {
                        token: oldDetails.fcmToken,
                        createTime: (_a = oldDetails.createTime) !== null && _a !== void 0 ? _a : Date.now(),
                        subscriptionOptions: {
                          auth: oldDetails.auth,
                          p256dh: oldDetails.p256dh,
                          endpoint: oldDetails.endpoint,
                          swScope: oldDetails.swScope,
                          vapidKey: typeof oldDetails.vapidKey === 'string' ? oldDetails.vapidKey : arrayToBase64(oldDetails.vapidKey)
                        }
                      };
                    } else if (db.oldVersion === 3) {
                      oldDetails = value;
                      tokenDetails = {
                        token: oldDetails.fcmToken,
                        createTime: oldDetails.createTime,
                        subscriptionOptions: {
                          auth: arrayToBase64(oldDetails.auth),
                          p256dh: arrayToBase64(oldDetails.p256dh),
                          endpoint: oldDetails.endpoint,
                          swScope: oldDetails.swScope,
                          vapidKey: arrayToBase64(oldDetails.vapidKey)
                        }
                      };
                    } else if (db.oldVersion === 4) {
                      oldDetails = value;
                      tokenDetails = {
                        token: oldDetails.fcmToken,
                        createTime: oldDetails.createTime,
                        subscriptionOptions: {
                          auth: arrayToBase64(oldDetails.auth),
                          p256dh: arrayToBase64(oldDetails.p256dh),
                          endpoint: oldDetails.endpoint,
                          swScope: oldDetails.swScope,
                          vapidKey: arrayToBase64(oldDetails.vapidKey)
                        }
                      };
                    }

                    return [2
                    /*return*/
                    ];
                }
              });
            });
          })];

        case 3:
          db = _a.sent();
          db.close(); // Delete all old databases.

          return [4
          /*yield*/
          , Object(idb__WEBPACK_IMPORTED_MODULE_4__["deleteDb"])(OLD_DB_NAME)];

        case 4:
          // Delete all old databases.
          _a.sent();

          return [4
          /*yield*/
          , Object(idb__WEBPACK_IMPORTED_MODULE_4__["deleteDb"])('fcm_vapid_details_db')];

        case 5:
          _a.sent();

          return [4
          /*yield*/
          , Object(idb__WEBPACK_IMPORTED_MODULE_4__["deleteDb"])('undefined')];

        case 6:
          _a.sent();

          return [2
          /*return*/
          , checkTokenDetails(tokenDetails) ? tokenDetails : null];
      }
    });
  });
}

function checkTokenDetails(tokenDetails) {
  if (!tokenDetails || !tokenDetails.subscriptionOptions) {
    return false;
  }

  var subscriptionOptions = tokenDetails.subscriptionOptions;
  return typeof tokenDetails.createTime === 'number' && tokenDetails.createTime > 0 && typeof tokenDetails.token === 'string' && tokenDetails.token.length > 0 && typeof subscriptionOptions.auth === 'string' && subscriptionOptions.auth.length > 0 && typeof subscriptionOptions.p256dh === 'string' && subscriptionOptions.p256dh.length > 0 && typeof subscriptionOptions.endpoint === 'string' && subscriptionOptions.endpoint.length > 0 && typeof subscriptionOptions.swScope === 'string' && subscriptionOptions.swScope.length > 0 && typeof subscriptionOptions.vapidKey === 'string' && subscriptionOptions.vapidKey.length > 0;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Exported for tests.


var DATABASE_NAME = 'firebase-messaging-database';
var DATABASE_VERSION = 1;
var OBJECT_STORE_NAME = 'firebase-messaging-store';
var dbPromise = null;

function getDbPromise() {
  if (!dbPromise) {
    dbPromise = Object(idb__WEBPACK_IMPORTED_MODULE_4__["openDb"])(DATABASE_NAME, DATABASE_VERSION, function (upgradeDb) {
      // We don't use 'break' in this switch statement, the fall-through behavior is what we want,
      // because if there are multiple versions between the old version and the current version, we
      // want ALL the migrations that correspond to those versions to run, not only the last one.
      // eslint-disable-next-line default-case
      switch (upgradeDb.oldVersion) {
        case 0:
          upgradeDb.createObjectStore(OBJECT_STORE_NAME);
      }
    });
  }

  return dbPromise;
}
/** Gets record(s) from the objectStore that match the given key. */


function dbGet(firebaseDependencies) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
    var key, db, tokenDetails, oldTokenDetails;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
      switch (_a.label) {
        case 0:
          key = getKey(firebaseDependencies);
          return [4
          /*yield*/
          , getDbPromise()];

        case 1:
          db = _a.sent();
          return [4
          /*yield*/
          , db.transaction(OBJECT_STORE_NAME).objectStore(OBJECT_STORE_NAME).get(key)];

        case 2:
          tokenDetails = _a.sent();
          if (!tokenDetails) return [3
          /*break*/
          , 3];
          return [2
          /*return*/
          , tokenDetails];

        case 3:
          return [4
          /*yield*/
          , migrateOldDatabase(firebaseDependencies.appConfig.senderId)];

        case 4:
          oldTokenDetails = _a.sent();
          if (!oldTokenDetails) return [3
          /*break*/
          , 6];
          return [4
          /*yield*/
          , dbSet(firebaseDependencies, oldTokenDetails)];

        case 5:
          _a.sent();

          return [2
          /*return*/
          , oldTokenDetails];

        case 6:
          return [2
          /*return*/
          ];
      }
    });
  });
}
/** Assigns or overwrites the record for the given key with the given value. */


function dbSet(firebaseDependencies, tokenDetails) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
    var key, db, tx;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
      switch (_a.label) {
        case 0:
          key = getKey(firebaseDependencies);
          return [4
          /*yield*/
          , getDbPromise()];

        case 1:
          db = _a.sent();
          tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
          return [4
          /*yield*/
          , tx.objectStore(OBJECT_STORE_NAME).put(tokenDetails, key)];

        case 2:
          _a.sent();

          return [4
          /*yield*/
          , tx.complete];

        case 3:
          _a.sent();

          return [2
          /*return*/
          , tokenDetails];
      }
    });
  });
}
/** Removes record(s) from the objectStore that match the given key. */


function dbRemove(firebaseDependencies) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
    var key, db, tx;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
      switch (_a.label) {
        case 0:
          key = getKey(firebaseDependencies);
          return [4
          /*yield*/
          , getDbPromise()];

        case 1:
          db = _a.sent();
          tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
          return [4
          /*yield*/
          , tx.objectStore(OBJECT_STORE_NAME).delete(key)];

        case 2:
          _a.sent();

          return [4
          /*yield*/
          , tx.complete];

        case 3:
          _a.sent();

          return [2
          /*return*/
          ];
      }
    });
  });
}

function getKey(_a) {
  var appConfig = _a.appConfig;
  return appConfig.appId;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function requestGetToken(firebaseDependencies, subscriptionOptions) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
    var headers, body, subscribeOptions, responseData, response, err_1, message;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , getHeaders(firebaseDependencies)];

        case 1:
          headers = _a.sent();
          body = getBody(subscriptionOptions);
          subscribeOptions = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
          };
          _a.label = 2;

        case 2:
          _a.trys.push([2, 5,, 6]);

          return [4
          /*yield*/
          , fetch(getEndpoint(firebaseDependencies.appConfig), subscribeOptions)];

        case 3:
          response = _a.sent();
          return [4
          /*yield*/
          , response.json()];

        case 4:
          responseData = _a.sent();
          return [3
          /*break*/
          , 6];

        case 5:
          err_1 = _a.sent();
          throw ERROR_FACTORY.create("token-subscribe-failed"
          /* TOKEN_SUBSCRIBE_FAILED */
          , {
            errorInfo: err_1
          });

        case 6:
          if (responseData.error) {
            message = responseData.error.message;
            throw ERROR_FACTORY.create("token-subscribe-failed"
            /* TOKEN_SUBSCRIBE_FAILED */
            , {
              errorInfo: message
            });
          }

          if (!responseData.token) {
            throw ERROR_FACTORY.create("token-subscribe-no-token"
            /* TOKEN_SUBSCRIBE_NO_TOKEN */
            );
          }

          return [2
          /*return*/
          , responseData.token];
      }
    });
  });
}

function requestUpdateToken(firebaseDependencies, tokenDetails) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
    var headers, body, updateOptions, responseData, response, err_2, message;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , getHeaders(firebaseDependencies)];

        case 1:
          headers = _a.sent();
          body = getBody(tokenDetails.subscriptionOptions);
          updateOptions = {
            method: 'PATCH',
            headers: headers,
            body: JSON.stringify(body)
          };
          _a.label = 2;

        case 2:
          _a.trys.push([2, 5,, 6]);

          return [4
          /*yield*/
          , fetch(getEndpoint(firebaseDependencies.appConfig) + "/" + tokenDetails.token, updateOptions)];

        case 3:
          response = _a.sent();
          return [4
          /*yield*/
          , response.json()];

        case 4:
          responseData = _a.sent();
          return [3
          /*break*/
          , 6];

        case 5:
          err_2 = _a.sent();
          throw ERROR_FACTORY.create("token-update-failed"
          /* TOKEN_UPDATE_FAILED */
          , {
            errorInfo: err_2
          });

        case 6:
          if (responseData.error) {
            message = responseData.error.message;
            throw ERROR_FACTORY.create("token-update-failed"
            /* TOKEN_UPDATE_FAILED */
            , {
              errorInfo: message
            });
          }

          if (!responseData.token) {
            throw ERROR_FACTORY.create("token-update-no-token"
            /* TOKEN_UPDATE_NO_TOKEN */
            );
          }

          return [2
          /*return*/
          , responseData.token];
      }
    });
  });
}

function requestDeleteToken(firebaseDependencies, token) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
    var headers, unsubscribeOptions, response, responseData, message, err_3;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , getHeaders(firebaseDependencies)];

        case 1:
          headers = _a.sent();
          unsubscribeOptions = {
            method: 'DELETE',
            headers: headers
          };
          _a.label = 2;

        case 2:
          _a.trys.push([2, 5,, 6]);

          return [4
          /*yield*/
          , fetch(getEndpoint(firebaseDependencies.appConfig) + "/" + token, unsubscribeOptions)];

        case 3:
          response = _a.sent();
          return [4
          /*yield*/
          , response.json()];

        case 4:
          responseData = _a.sent();

          if (responseData.error) {
            message = responseData.error.message;
            throw ERROR_FACTORY.create("token-unsubscribe-failed"
            /* TOKEN_UNSUBSCRIBE_FAILED */
            , {
              errorInfo: message
            });
          }

          return [3
          /*break*/
          , 6];

        case 5:
          err_3 = _a.sent();
          throw ERROR_FACTORY.create("token-unsubscribe-failed"
          /* TOKEN_UNSUBSCRIBE_FAILED */
          , {
            errorInfo: err_3
          });

        case 6:
          return [2
          /*return*/
          ];
      }
    });
  });
}

function getEndpoint(_a) {
  var projectId = _a.projectId;
  return ENDPOINT + "/projects/" + projectId + "/registrations";
}

function getHeaders(_a) {
  var appConfig = _a.appConfig,
      installations = _a.installations;
  return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
    var authToken;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_b) {
      switch (_b.label) {
        case 0:
          return [4
          /*yield*/
          , installations.getToken()];

        case 1:
          authToken = _b.sent();
          return [2
          /*return*/
          , new Headers({
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'x-goog-api-key': appConfig.apiKey,
            'x-goog-firebase-installations-auth': "FIS " + authToken
          })];
      }
    });
  });
}

function getBody(_a) {
  var p256dh = _a.p256dh,
      auth = _a.auth,
      endpoint = _a.endpoint,
      vapidKey = _a.vapidKey;
  var body = {
    web: {
      endpoint: endpoint,
      auth: auth,
      p256dh: p256dh
    }
  };

  if (vapidKey !== DEFAULT_VAPID_KEY) {
    body.web.applicationPubKey = vapidKey;
  }

  return body;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** UpdateRegistration will be called once every week. */


var TOKEN_EXPIRATION_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

function getToken(firebaseDependencies, swRegistration, vapidKey) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
    var pushSubscription, tokenDetails, subscriptionOptions, e_1;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (Notification.permission !== 'granted') {
            throw ERROR_FACTORY.create("permission-blocked"
            /* PERMISSION_BLOCKED */
            );
          }

          return [4
          /*yield*/
          , getPushSubscription(swRegistration, vapidKey)];

        case 1:
          pushSubscription = _a.sent();
          return [4
          /*yield*/
          , dbGet(firebaseDependencies)];

        case 2:
          tokenDetails = _a.sent();
          subscriptionOptions = {
            vapidKey: vapidKey,
            swScope: swRegistration.scope,
            endpoint: pushSubscription.endpoint,
            auth: arrayToBase64(pushSubscription.getKey('auth')),
            p256dh: arrayToBase64(pushSubscription.getKey('p256dh'))
          };
          if (!!tokenDetails) return [3
          /*break*/
          , 3]; // No token, get a new one.

          return [2
          /*return*/
          , getNewToken(firebaseDependencies, subscriptionOptions)];

        case 3:
          if (!!isTokenValid(tokenDetails.subscriptionOptions, subscriptionOptions)) return [3
          /*break*/
          , 8];
          _a.label = 4;

        case 4:
          _a.trys.push([4, 6,, 7]);

          return [4
          /*yield*/
          , requestDeleteToken(firebaseDependencies, tokenDetails.token)];

        case 5:
          _a.sent();

          return [3
          /*break*/
          , 7];

        case 6:
          e_1 = _a.sent(); // Suppress errors because of #2364

          console.warn(e_1);
          return [3
          /*break*/
          , 7];

        case 7:
          return [2
          /*return*/
          , getNewToken(firebaseDependencies, subscriptionOptions)];

        case 8:
          if (Date.now() >= tokenDetails.createTime + TOKEN_EXPIRATION_MS) {
            // Weekly token refresh
            return [2
            /*return*/
            , updateToken({
              token: tokenDetails.token,
              createTime: Date.now(),
              subscriptionOptions: subscriptionOptions
            }, firebaseDependencies, swRegistration)];
          } else {
            // Valid token, nothing to do.
            return [2
            /*return*/
            , tokenDetails.token];
          }

        case 9:
          return [2
          /*return*/
          ];
      }
    });
  });
}
/**
 * This method deletes the token from the database, unsubscribes the token from FCM, and unregisters
 * the push subscription if it exists.
 */


function deleteToken(firebaseDependencies, swRegistration) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
    var tokenDetails, pushSubscription;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , dbGet(firebaseDependencies)];

        case 1:
          tokenDetails = _a.sent();
          if (!tokenDetails) return [3
          /*break*/
          , 4];
          return [4
          /*yield*/
          , requestDeleteToken(firebaseDependencies, tokenDetails.token)];

        case 2:
          _a.sent();

          return [4
          /*yield*/
          , dbRemove(firebaseDependencies)];

        case 3:
          _a.sent();

          _a.label = 4;

        case 4:
          return [4
          /*yield*/
          , swRegistration.pushManager.getSubscription()];

        case 5:
          pushSubscription = _a.sent();

          if (pushSubscription) {
            return [2
            /*return*/
            , pushSubscription.unsubscribe()];
          } // If there's no SW, consider it a success.


          return [2
          /*return*/
          , true];
      }
    });
  });
}

function updateToken(tokenDetails, firebaseDependencies, swRegistration) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
    var updatedToken, updatedTokenDetails, e_2;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 3,, 5]);

          return [4
          /*yield*/
          , requestUpdateToken(firebaseDependencies, tokenDetails)];

        case 1:
          updatedToken = _a.sent();
          updatedTokenDetails = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__assign"])({}, tokenDetails), {
            token: updatedToken,
            createTime: Date.now()
          });
          return [4
          /*yield*/
          , dbSet(firebaseDependencies, updatedTokenDetails)];

        case 2:
          _a.sent();

          return [2
          /*return*/
          , updatedToken];

        case 3:
          e_2 = _a.sent();
          return [4
          /*yield*/
          , deleteToken(firebaseDependencies, swRegistration)];

        case 4:
          _a.sent();

          throw e_2;

        case 5:
          return [2
          /*return*/
          ];
      }
    });
  });
}

function getNewToken(firebaseDependencies, subscriptionOptions) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
    var token, tokenDetails;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , requestGetToken(firebaseDependencies, subscriptionOptions)];

        case 1:
          token = _a.sent();
          tokenDetails = {
            token: token,
            createTime: Date.now(),
            subscriptionOptions: subscriptionOptions
          };
          return [4
          /*yield*/
          , dbSet(firebaseDependencies, tokenDetails)];

        case 2:
          _a.sent();

          return [2
          /*return*/
          , tokenDetails.token];
      }
    });
  });
}
/**
 * Gets a PushSubscription for the current user.
 */


function getPushSubscription(swRegistration, vapidKey) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
    var subscription;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , swRegistration.pushManager.getSubscription()];

        case 1:
          subscription = _a.sent();

          if (subscription) {
            return [2
            /*return*/
            , subscription];
          }

          return [2
          /*return*/
          , swRegistration.pushManager.subscribe({
            userVisibleOnly: true,
            // Chrome <= 75 doesn't support base64-encoded VAPID key. For backward compatibility, VAPID key
            // submitted to pushManager#subscribe must be of type Uint8Array.
            applicationServerKey: base64ToArray(vapidKey)
          })];
      }
    });
  });
}
/**
 * Checks if the saved tokenDetails object matches the configuration provided.
 */


function isTokenValid(dbOptions, currentOptions) {
  var isVapidKeyEqual = currentOptions.vapidKey === dbOptions.vapidKey;
  var isEndpointEqual = currentOptions.endpoint === dbOptions.endpoint;
  var isAuthEqual = currentOptions.auth === dbOptions.auth;
  var isP256dhEqual = currentOptions.p256dh === dbOptions.p256dh;
  return isVapidKeyEqual && isEndpointEqual && isAuthEqual && isP256dhEqual;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function externalizePayload(internalPayload) {
  var payload = {
    from: internalPayload.from,
    // eslint-disable-next-line camelcase
    collapseKey: internalPayload.collapse_key
  };
  propagateNotificationPayload(payload, internalPayload);
  propagateDataPayload(payload, internalPayload);
  propagateFcmOptions(payload, internalPayload);
  return payload;
}

function propagateNotificationPayload(payload, messagePayloadInternal) {
  if (!messagePayloadInternal.notification) {
    return;
  }

  payload.notification = {};
  var title = messagePayloadInternal.notification.title;

  if (!!title) {
    payload.notification.title = title;
  }

  var body = messagePayloadInternal.notification.body;

  if (!!body) {
    payload.notification.body = body;
  }

  var image = messagePayloadInternal.notification.image;

  if (!!image) {
    payload.notification.image = image;
  }
}

function propagateDataPayload(payload, messagePayloadInternal) {
  if (!messagePayloadInternal.data) {
    return;
  }

  payload.data = messagePayloadInternal.data;
}

function propagateFcmOptions(payload, messagePayloadInternal) {
  if (!messagePayloadInternal.fcmOptions) {
    return;
  }

  payload.fcmOptions = {};
  var link = messagePayloadInternal.fcmOptions.link;

  if (!!link) {
    payload.fcmOptions.link = link;
  } // eslint-disable-next-line camelcase


  var analyticsLabel = messagePayloadInternal.fcmOptions.analytics_label;

  if (!!analyticsLabel) {
    payload.fcmOptions.analyticsLabel = analyticsLabel;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function isConsoleMessage(data) {
  // This message has a campaign ID, meaning it was sent using the Firebase Console.
  return typeof data === 'object' && !!data && CONSOLE_CAMPAIGN_ID in data;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** Returns a promise that resolves after given time passes. */


function sleep(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var SwController =
/** @class */
function () {
  function SwController(firebaseDependencies) {
    var _this = this;

    this.firebaseDependencies = firebaseDependencies; // A boolean flag to determine wether an app is using onBackgroundMessage or
    // setBackgroundMessageHandler. onBackgroundMessage will receive a MessagePayload regardless of if
    // a notification is displayed. Whereas, setBackgroundMessageHandler will swallow the
    // MessagePayload if a NotificationPayload is included.

    this.isOnBackgroundMessageUsed = null;
    this.vapidKey = null;
    this.bgMessageHandler = null;
    self.addEventListener('push', function (e) {
      e.waitUntil(_this.onPush(e));
    });
    self.addEventListener('pushsubscriptionchange', function (e) {
      e.waitUntil(_this.onSubChange(e));
    });
    self.addEventListener('notificationclick', function (e) {
      e.waitUntil(_this.onNotificationClick(e));
    });
  }

  Object.defineProperty(SwController.prototype, "app", {
    get: function get() {
      return this.firebaseDependencies.app;
    },
    enumerable: false,
    configurable: true
  });
  /**
   * @deprecated. Use onBackgroundMessage(nextOrObserver: NextFn<object> | Observer<object>):
   * Unsubscribe instead.
   *
   * Calling setBackgroundMessageHandler will opt in to some specific behaviors.
   *
   * 1.) If a notification doesn't need to be shown due to a window already being visible, then push
   * messages will be sent to the page. 2.) If a notification needs to be shown, and the message
   * contains no notification data this method will be called and the promise it returns will be
   * passed to event.waitUntil. If you do not set this callback then all push messages will let and
   * the developer can handle them in a their own 'push' event callback
   *
   * @param callback The callback to be called when a push message is received and a notification
   * must be shown. The callback will be given the data from the push message.
   */

  SwController.prototype.setBackgroundMessageHandler = function (callback) {
    this.isOnBackgroundMessageUsed = false;

    if (!callback || typeof callback !== 'function') {
      throw ERROR_FACTORY.create("invalid-bg-handler"
      /* INVALID_BG_HANDLER */
      );
    }

    this.bgMessageHandler = callback;
  };

  SwController.prototype.onBackgroundMessage = function (nextOrObserver) {
    var _this = this;

    this.isOnBackgroundMessageUsed = true;
    this.bgMessageHandler = nextOrObserver;
    return function () {
      _this.bgMessageHandler = null;
    };
  }; // TODO: Remove getToken from SW Controller. Calling this from an old SW can cause all kinds of
  // trouble.


  SwController.prototype.getToken = function () {
    var _a, _b;

    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
      var tokenDetails;
      return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_c) {
        switch (_c.label) {
          case 0:
            if (!!this.vapidKey) return [3
            /*break*/
            , 2];
            return [4
            /*yield*/
            , dbGet(this.firebaseDependencies)];

          case 1:
            tokenDetails = _c.sent();
            this.vapidKey = (_b = (_a = tokenDetails === null || tokenDetails === void 0 ? void 0 : tokenDetails.subscriptionOptions) === null || _a === void 0 ? void 0 : _a.vapidKey) !== null && _b !== void 0 ? _b : DEFAULT_VAPID_KEY;
            _c.label = 2;

          case 2:
            return [2
            /*return*/
            , getToken(this.firebaseDependencies, self.registration, this.vapidKey)];
        }
      });
    });
  }; // TODO: Remove deleteToken from SW Controller. Calling this from an old SW can cause all kinds of
  // trouble.


  SwController.prototype.deleteToken = function () {
    return deleteToken(this.firebaseDependencies, self.registration);
  };

  SwController.prototype.requestPermission = function () {
    throw ERROR_FACTORY.create("only-available-in-window"
    /* AVAILABLE_IN_WINDOW */
    );
  }; // TODO: Remove this together with getToken from SW Controller.


  SwController.prototype.usePublicVapidKey = function (vapidKey) {
    if (this.vapidKey !== null) {
      throw ERROR_FACTORY.create("use-vapid-key-after-get-token"
      /* USE_VAPID_KEY_AFTER_GET_TOKEN */
      );
    }

    if (typeof vapidKey !== 'string' || vapidKey.length === 0) {
      throw ERROR_FACTORY.create("invalid-vapid-key"
      /* INVALID_VAPID_KEY */
      );
    }

    this.vapidKey = vapidKey;
  };

  SwController.prototype.useServiceWorker = function () {
    throw ERROR_FACTORY.create("only-available-in-window"
    /* AVAILABLE_IN_WINDOW */
    );
  };

  SwController.prototype.onMessage = function () {
    throw ERROR_FACTORY.create("only-available-in-window"
    /* AVAILABLE_IN_WINDOW */
    );
  };

  SwController.prototype.onTokenRefresh = function () {
    throw ERROR_FACTORY.create("only-available-in-window"
    /* AVAILABLE_IN_WINDOW */
    );
  };
  /**
   * A handler for push events that shows notifications based on the content of the payload.
   *
   * The payload must be a JSON-encoded Object with a `notification` key. The value of the
   * `notification` property will be used as the NotificationOptions object passed to
   * showNotification. Additionally, the `title` property of the notification object will be used as
   * the title.
   *
   * If there is no notification data in the payload then no notification will be shown.
   */


  SwController.prototype.onPush = function (event) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
      var internalPayload, clientList, isNotificationShown, payload;
      return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
        switch (_a.label) {
          case 0:
            internalPayload = getMessagePayloadInternal(event);

            if (!internalPayload) {
              console.debug(TAG + 'failed to get parsed MessagePayload from the PushEvent. Skip handling the push.');
              return [2
              /*return*/
              ];
            }

            return [4
            /*yield*/
            , getClientList()];

          case 1:
            clientList = _a.sent();

            if (hasVisibleClients(clientList)) {
              return [2
              /*return*/
              , sendMessagePayloadInternalToWindows(clientList, internalPayload)];
            }

            isNotificationShown = false;
            if (!!!internalPayload.notification) return [3
            /*break*/
            , 3];
            return [4
            /*yield*/
            , showNotification(wrapInternalPayload(internalPayload))];

          case 2:
            _a.sent();

            isNotificationShown = true;
            _a.label = 3;

          case 3:
            // MessagePayload is only passed to `onBackgroundMessage`. Skip passing MessagePayload for
            // the legacy `setBackgroundMessageHandler` to preserve the SDK behaviors.
            if (isNotificationShown === true && this.isOnBackgroundMessageUsed === false) {
              return [2
              /*return*/
              ];
            }

            if (!!this.bgMessageHandler) {
              payload = externalizePayload(internalPayload);

              if (typeof this.bgMessageHandler === 'function') {
                this.bgMessageHandler(payload);
              } else {
                this.bgMessageHandler.next(payload);
              }
            } // wait briefly to allow onBackgroundMessage to complete


            return [4
            /*yield*/
            , sleep(BACKGROUND_HANDLE_EXECUTION_TIME_LIMIT_MS)];

          case 4:
            // wait briefly to allow onBackgroundMessage to complete
            _a.sent();

            return [2
            /*return*/
            ];
        }
      });
    });
  };

  SwController.prototype.onSubChange = function (event) {
    var _a, _b;

    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
      var newSubscription, tokenDetails;
      return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_c) {
        switch (_c.label) {
          case 0:
            newSubscription = event.newSubscription;
            if (!!newSubscription) return [3
            /*break*/
            , 2]; // Subscription revoked, delete token

            return [4
            /*yield*/
            , deleteToken(this.firebaseDependencies, self.registration)];

          case 1:
            // Subscription revoked, delete token
            _c.sent();

            return [2
            /*return*/
            ];

          case 2:
            return [4
            /*yield*/
            , dbGet(this.firebaseDependencies)];

          case 3:
            tokenDetails = _c.sent();
            return [4
            /*yield*/
            , deleteToken(this.firebaseDependencies, self.registration)];

          case 4:
            _c.sent();

            return [4
            /*yield*/
            , getToken(this.firebaseDependencies, self.registration, (_b = (_a = tokenDetails === null || tokenDetails === void 0 ? void 0 : tokenDetails.subscriptionOptions) === null || _a === void 0 ? void 0 : _a.vapidKey) !== null && _b !== void 0 ? _b : DEFAULT_VAPID_KEY)];

          case 5:
            _c.sent();

            return [2
            /*return*/
            ];
        }
      });
    });
  };

  SwController.prototype.onNotificationClick = function (event) {
    var _a, _b;

    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
      var internalPayload, link, url, originUrl, client;
      return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_c) {
        switch (_c.label) {
          case 0:
            internalPayload = (_b = (_a = event.notification) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b[FCM_MSG];

            if (!internalPayload) {
              return [2
              /*return*/
              ];
            } else if (event.action) {
              // User clicked on an action button. This will allow developers to act on action button clicks
              // by using a custom onNotificationClick listener that they define.
              return [2
              /*return*/
              ];
            } // Prevent other listeners from receiving the event


            event.stopImmediatePropagation();
            event.notification.close();
            link = getLink(internalPayload);

            if (!link) {
              return [2
              /*return*/
              ];
            }

            url = new URL(link, self.location.href);
            originUrl = new URL(self.location.origin);

            if (url.host !== originUrl.host) {
              return [2
              /*return*/
              ];
            }

            return [4
            /*yield*/
            , getWindowClient(url)];

          case 1:
            client = _c.sent();
            if (!!client) return [3
            /*break*/
            , 4];
            return [4
            /*yield*/
            , self.clients.openWindow(link)];

          case 2:
            client = _c.sent(); // Wait three seconds for the client to initialize and set up the message handler so that it
            // can receive the message.

            return [4
            /*yield*/
            , sleep(FOREGROUND_HANDLE_PREPARATION_TIME_MS)];

          case 3:
            // Wait three seconds for the client to initialize and set up the message handler so that it
            // can receive the message.
            _c.sent();

            return [3
            /*break*/
            , 6];

          case 4:
            return [4
            /*yield*/
            , client.focus()];

          case 5:
            client = _c.sent();
            _c.label = 6;

          case 6:
            if (!client) {
              // Window Client will not be returned if it's for a third party origin.
              return [2
              /*return*/
              ];
            }

            internalPayload.messageType = MessageType.NOTIFICATION_CLICKED;
            internalPayload.isFirebaseMessaging = true;
            return [2
            /*return*/
            , client.postMessage(internalPayload)];
        }
      });
    });
  };

  return SwController;
}();

function wrapInternalPayload(internalPayload) {
  var _a;

  var wrappedInternalPayload = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__assign"])({}, internalPayload.notification); // Put the message payload under FCM_MSG name so we can identify the notification as being an FCM
  // notification vs a notification from somewhere else (i.e. normal web push or developer generated
  // notification).


  wrappedInternalPayload.data = (_a = {}, _a[FCM_MSG] = internalPayload, _a);
  return wrappedInternalPayload;
}

function getMessagePayloadInternal(_a) {
  var data = _a.data;

  if (!data) {
    return null;
  }

  try {
    return data.json();
  } catch (err) {
    // Not JSON so not an FCM message.
    return null;
  }
}
/**
 * @param url The URL to look for when focusing a client.
 * @return Returns an existing window client or a newly opened WindowClient.
 */


function getWindowClient(url) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
    var clientList, clientList_1, clientList_1_1, client, clientUrl;

    var e_1, _a;

    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_b) {
      switch (_b.label) {
        case 0:
          return [4
          /*yield*/
          , getClientList()];

        case 1:
          clientList = _b.sent();

          try {
            for (clientList_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__values"])(clientList), clientList_1_1 = clientList_1.next(); !clientList_1_1.done; clientList_1_1 = clientList_1.next()) {
              client = clientList_1_1.value;
              clientUrl = new URL(client.url, self.location.href);

              if (url.host === clientUrl.host) {
                return [2
                /*return*/
                , client];
              }
            }
          } catch (e_1_1) {
            e_1 = {
              error: e_1_1
            };
          } finally {
            try {
              if (clientList_1_1 && !clientList_1_1.done && (_a = clientList_1.return)) _a.call(clientList_1);
            } finally {
              if (e_1) throw e_1.error;
            }
          }

          return [2
          /*return*/
          , null];
      }
    });
  });
}
/**
 * @returns If there is currently a visible WindowClient, this method will resolve to true,
 * otherwise false.
 */


function hasVisibleClients(clientList) {
  return clientList.some(function (client) {
    return client.visibilityState === 'visible' && // Ignore chrome-extension clients as that matches the background pages of extensions, which
    // are always considered visible for some reason.
    !client.url.startsWith('chrome-extension://');
  });
}

function sendMessagePayloadInternalToWindows(clientList, internalPayload) {
  var e_2, _a;

  internalPayload.isFirebaseMessaging = true;
  internalPayload.messageType = MessageType.PUSH_RECEIVED;

  try {
    for (var clientList_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__values"])(clientList), clientList_2_1 = clientList_2.next(); !clientList_2_1.done; clientList_2_1 = clientList_2.next()) {
      var client = clientList_2_1.value;
      client.postMessage(internalPayload);
    }
  } catch (e_2_1) {
    e_2 = {
      error: e_2_1
    };
  } finally {
    try {
      if (clientList_2_1 && !clientList_2_1.done && (_a = clientList_2.return)) _a.call(clientList_2);
    } finally {
      if (e_2) throw e_2.error;
    }
  }
}

function getClientList() {
  return self.clients.matchAll({
    type: 'window',
    includeUncontrolled: true // TS doesn't know that "type: 'window'" means it'll return WindowClient[]

  });
}

function showNotification(notificationPayloadInternal) {
  var _a; // Note: Firefox does not support the maxActions property.
  // https://developer.mozilla.org/en-US/docs/Web/API/notification/maxActions


  var actions = notificationPayloadInternal.actions;
  var maxActions = Notification.maxActions;

  if (actions && maxActions && actions.length > maxActions) {
    console.warn("This browser only supports " + maxActions + " actions. The remaining actions will not be displayed.");
  }

  return self.registration.showNotification((_a =
  /* title= */
  notificationPayloadInternal.title) !== null && _a !== void 0 ? _a : '', notificationPayloadInternal);
}

function getLink(payload) {
  var _a, _b, _c; // eslint-disable-next-line camelcase


  var link = (_b = (_a = payload.fcmOptions) === null || _a === void 0 ? void 0 : _a.link) !== null && _b !== void 0 ? _b : (_c = payload.notification) === null || _c === void 0 ? void 0 : _c.click_action;

  if (link) {
    return link;
  }

  if (isConsoleMessage(payload.data)) {
    // Notification created in the Firebase Console. Redirect to origin.
    return self.location.origin;
  } else {
    return null;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var WindowController =
/** @class */
function () {
  function WindowController(firebaseDependencies) {
    var _this = this;

    this.firebaseDependencies = firebaseDependencies;
    this.vapidKey = null;
    this.onMessageCallback = null;
    navigator.serviceWorker.addEventListener('message', function (e) {
      return _this.messageEventListener(e);
    });
  }

  Object.defineProperty(WindowController.prototype, "app", {
    get: function get() {
      return this.firebaseDependencies.app;
    },
    enumerable: false,
    configurable: true
  });

  WindowController.prototype.messageEventListener = function (event) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
      var internalPayload, dataPayload;
      return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
        switch (_a.label) {
          case 0:
            internalPayload = event.data;

            if (!internalPayload.isFirebaseMessaging) {
              return [2
              /*return*/
              ];
            } // onMessageCallback is either a function or observer/subscriber.
            // TODO: in the modularization release, have onMessage handle type MessagePayload as supposed to
            // the legacy payload where some fields are in snake cases.


            if (this.onMessageCallback && internalPayload.messageType === MessageType.PUSH_RECEIVED) {
              if (typeof this.onMessageCallback === 'function') {
                this.onMessageCallback(stripInternalFields(Object.assign({}, internalPayload)));
              } else {
                this.onMessageCallback.next(Object.assign({}, internalPayload));
              }
            }

            dataPayload = internalPayload.data;
            if (!(isConsoleMessage(dataPayload) && dataPayload[CONSOLE_CAMPAIGN_ANALYTICS_ENABLED] === '1')) return [3
            /*break*/
            , 2];
            return [4
            /*yield*/
            , this.logEvent(internalPayload.messageType, dataPayload)];

          case 1:
            _a.sent();

            _a.label = 2;

          case 2:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  WindowController.prototype.getVapidKey = function () {
    return this.vapidKey;
  };

  WindowController.prototype.getSwReg = function () {
    return this.swRegistration;
  };

  WindowController.prototype.getToken = function (options) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!(Notification.permission === 'default')) return [3
            /*break*/
            , 2];
            return [4
            /*yield*/
            , Notification.requestPermission()];

          case 1:
            _a.sent();

            _a.label = 2;

          case 2:
            if (Notification.permission !== 'granted') {
              throw ERROR_FACTORY.create("permission-blocked"
              /* PERMISSION_BLOCKED */
              );
            }

            return [4
            /*yield*/
            , this.updateVapidKey(options === null || options === void 0 ? void 0 : options.vapidKey)];

          case 3:
            _a.sent();

            return [4
            /*yield*/
            , this.updateSwReg(options === null || options === void 0 ? void 0 : options.serviceWorkerRegistration)];

          case 4:
            _a.sent();

            return [2
            /*return*/
            , getToken(this.firebaseDependencies, this.swRegistration, this.vapidKey)];
        }
      });
    });
  };

  WindowController.prototype.updateVapidKey = function (vapidKey) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
        if (!!vapidKey) {
          this.vapidKey = vapidKey;
        } else if (!this.vapidKey) {
          this.vapidKey = DEFAULT_VAPID_KEY;
        }

        return [2
        /*return*/
        ];
      });
    });
  };

  WindowController.prototype.updateSwReg = function (swRegistration) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!(!swRegistration && !this.swRegistration)) return [3
            /*break*/
            , 2];
            return [4
            /*yield*/
            , this.registerDefaultSw()];

          case 1:
            _a.sent();

            _a.label = 2;

          case 2:
            if (!swRegistration && !!this.swRegistration) {
              return [2
              /*return*/
              ];
            }

            if (!(swRegistration instanceof ServiceWorkerRegistration)) {
              throw ERROR_FACTORY.create("invalid-sw-registration"
              /* INVALID_SW_REGISTRATION */
              );
            }

            this.swRegistration = swRegistration;
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  WindowController.prototype.registerDefaultSw = function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
      var _a, e_1;

      return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_b) {
        switch (_b.label) {
          case 0:
            _b.trys.push([0, 2,, 3]);

            _a = this;
            return [4
            /*yield*/
            , navigator.serviceWorker.register(DEFAULT_SW_PATH, {
              scope: DEFAULT_SW_SCOPE
            })];

          case 1:
            _a.swRegistration = _b.sent(); // The timing when browser updates sw when sw has an update is unreliable by my experiment. It
            // leads to version conflict when the SDK upgrades to a newer version in the main page, but sw
            // is stuck with the old version. For example,
            // https://github.com/firebase/firebase-js-sdk/issues/2590 The following line reliably updates
            // sw if there was an update.

            this.swRegistration.update().catch(function () {
              /* it is non blocking and we don't care if it failed */
            });
            return [3
            /*break*/
            , 3];

          case 2:
            e_1 = _b.sent();
            throw ERROR_FACTORY.create("failed-service-worker-registration"
            /* FAILED_DEFAULT_REGISTRATION */
            , {
              browserErrorMessage: e_1.message
            });

          case 3:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  WindowController.prototype.deleteToken = function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!!this.swRegistration) return [3
            /*break*/
            , 2];
            return [4
            /*yield*/
            , this.registerDefaultSw()];

          case 1:
            _a.sent();

            _a.label = 2;

          case 2:
            return [2
            /*return*/
            , deleteToken(this.firebaseDependencies, this.swRegistration)];
        }
      });
    });
  };
  /**
   * Request permission if it is not currently granted.
   *
   * @return Resolves if the permission was granted, rejects otherwise.
   *
   * @deprecated Use Notification.requestPermission() instead.
   * https://developer.mozilla.org/en-US/docs/Web/API/Notification/requestPermission
   */


  WindowController.prototype.requestPermission = function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
      var permissionResult;
      return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (Notification.permission === 'granted') {
              return [2
              /*return*/
              ];
            }

            return [4
            /*yield*/
            , Notification.requestPermission()];

          case 1:
            permissionResult = _a.sent();

            if (permissionResult === 'granted') {
              return [2
              /*return*/
              ];
            } else if (permissionResult === 'denied') {
              throw ERROR_FACTORY.create("permission-blocked"
              /* PERMISSION_BLOCKED */
              );
            } else {
              throw ERROR_FACTORY.create("permission-default"
              /* PERMISSION_DEFAULT */
              );
            }

        }
      });
    });
  };
  /**
   * @deprecated. Use getToken(options?: {vapidKey?: string; serviceWorkerRegistration?:
   * ServiceWorkerRegistration;}): Promise<string> instead.
   */


  WindowController.prototype.usePublicVapidKey = function (vapidKey) {
    if (this.vapidKey !== null) {
      throw ERROR_FACTORY.create("use-vapid-key-after-get-token"
      /* USE_VAPID_KEY_AFTER_GET_TOKEN */
      );
    }

    if (typeof vapidKey !== 'string' || vapidKey.length === 0) {
      throw ERROR_FACTORY.create("invalid-vapid-key"
      /* INVALID_VAPID_KEY */
      );
    }

    this.vapidKey = vapidKey;
  };
  /**
   * @deprecated. Use getToken(options?: {vapidKey?: string; serviceWorkerRegistration?:
   * ServiceWorkerRegistration;}): Promise<string> instead.
   */


  WindowController.prototype.useServiceWorker = function (swRegistration) {
    if (!(swRegistration instanceof ServiceWorkerRegistration)) {
      throw ERROR_FACTORY.create("invalid-sw-registration"
      /* INVALID_SW_REGISTRATION */
      );
    }

    if (this.swRegistration) {
      throw ERROR_FACTORY.create("use-sw-after-get-token"
      /* USE_SW_AFTER_GET_TOKEN */
      );
    }

    this.swRegistration = swRegistration;
  };
  /**
   * @param nextOrObserver An observer object or a function triggered on message.
   *
   * @return The unsubscribe function for the observer.
   */


  WindowController.prototype.onMessage = function (nextOrObserver) {
    var _this = this;

    this.onMessageCallback = nextOrObserver;
    return function () {
      _this.onMessageCallback = null;
    };
  };

  WindowController.prototype.setBackgroundMessageHandler = function () {
    throw ERROR_FACTORY.create("only-available-in-sw"
    /* AVAILABLE_IN_SW */
    );
  };

  WindowController.prototype.onBackgroundMessage = function () {
    throw ERROR_FACTORY.create("only-available-in-sw"
    /* AVAILABLE_IN_SW */
    );
  };
  /**
   * @deprecated No-op. It was initially designed with token rotation requests from server in mind.
   * However, the plan to implement such feature was abandoned.
   */


  WindowController.prototype.onTokenRefresh = function () {
    return function () {};
  };

  WindowController.prototype.logEvent = function (messageType, data) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
      var eventType, analytics;
      return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
        switch (_a.label) {
          case 0:
            eventType = getEventType(messageType);
            return [4
            /*yield*/
            , this.firebaseDependencies.analyticsProvider.get()];

          case 1:
            analytics = _a.sent();
            analytics.logEvent(eventType, {
              /* eslint-disable camelcase */
              message_id: data[CONSOLE_CAMPAIGN_ID],
              message_name: data[CONSOLE_CAMPAIGN_NAME],
              message_time: data[CONSOLE_CAMPAIGN_TIME],
              message_device_time: Math.floor(Date.now() / 1000)
              /* eslint-enable camelcase */

            });
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  return WindowController;
}();

function getEventType(messageType) {
  switch (messageType) {
    case MessageType.NOTIFICATION_CLICKED:
      return 'notification_open';

    case MessageType.PUSH_RECEIVED:
      return 'notification_foreground';

    default:
      throw new Error();
  }
}

function stripInternalFields(internalPayload) {
  delete internalPayload.messageType;
  delete internalPayload.isFirebaseMessaging;
  return internalPayload;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function extractAppConfig(app) {
  var e_1, _a;

  if (!app || !app.options) {
    throw getMissingValueError('App Configuration Object');
  }

  if (!app.name) {
    throw getMissingValueError('App Name');
  } // Required app config keys


  var configKeys = ['projectId', 'apiKey', 'appId', 'messagingSenderId'];
  var options = app.options;

  try {
    for (var configKeys_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__values"])(configKeys), configKeys_1_1 = configKeys_1.next(); !configKeys_1_1.done; configKeys_1_1 = configKeys_1.next()) {
      var keyName = configKeys_1_1.value;

      if (!options[keyName]) {
        throw getMissingValueError(keyName);
      }
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (configKeys_1_1 && !configKeys_1_1.done && (_a = configKeys_1.return)) _a.call(configKeys_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }

  return {
    appName: app.name,
    projectId: options.projectId,
    apiKey: options.apiKey,
    appId: options.appId,
    senderId: options.messagingSenderId
  };
}

function getMissingValueError(valueName) {
  return ERROR_FACTORY.create("missing-app-config-values"
  /* MISSING_APP_CONFIG_VALUES */
  , {
    valueName: valueName
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var MESSAGING_NAME = 'messaging';

function factoryMethod(container) {
  // Dependencies.
  var app = container.getProvider('app').getImmediate();
  var appConfig = extractAppConfig(app);
  var installations = container.getProvider('installations').getImmediate();
  var analyticsProvider = container.getProvider('analytics-internal');
  var firebaseDependencies = {
    app: app,
    appConfig: appConfig,
    installations: installations,
    analyticsProvider: analyticsProvider
  };

  if (!isSupported()) {
    throw ERROR_FACTORY.create("unsupported-browser"
    /* UNSUPPORTED_BROWSER */
    );
  }

  if (self && 'ServiceWorkerGlobalScope' in self) {
    // Running in ServiceWorker context
    return new SwController(firebaseDependencies);
  } else {
    // Assume we are in the window context.
    return new WindowController(firebaseDependencies);
  }
}

var NAMESPACE_EXPORTS = {
  isSupported: isSupported
};
_firebase_app__WEBPACK_IMPORTED_MODULE_5__["default"].INTERNAL.registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_1__["Component"](MESSAGING_NAME, factoryMethod, "PUBLIC"
/* PUBLIC */
).setServiceProps(NAMESPACE_EXPORTS));

function isSupported() {
  if (self && 'ServiceWorkerGlobalScope' in self) {
    // Running in ServiceWorker context
    return isSWControllerSupported();
  } else {
    // Assume we are in the window context.
    return isWindowControllerSupported();
  }
}
/**
 * Checks to see if the required APIs exist.
 */


function isWindowControllerSupported() {
  return 'indexedDB' in window && indexedDB !== null && navigator.cookieEnabled && 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window && 'fetch' in window && ServiceWorkerRegistration.prototype.hasOwnProperty('showNotification') && PushSubscription.prototype.hasOwnProperty('getKey');
}
/**
 * Checks to see if the required APIs exist within SW Context.
 */


function isSWControllerSupported() {
  return 'indexedDB' in self && indexedDB !== null && 'PushManager' in self && 'Notification' in self && ServiceWorkerRegistration.prototype.hasOwnProperty('showNotification') && PushSubscription.prototype.hasOwnProperty('getKey');
}

/***/ }),

/***/ "nbvr":
/*!***************************************!*\
  !*** ./node_modules/idb/build/idb.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory(exports) : undefined;
})(this, function (exports) {
  'use strict';

  function toArray(arr) {
    return Array.prototype.slice.call(arr);
  }

  function promisifyRequest(request) {
    return new Promise(function (resolve, reject) {
      request.onsuccess = function () {
        resolve(request.result);
      };

      request.onerror = function () {
        reject(request.error);
      };
    });
  }

  function promisifyRequestCall(obj, method, args) {
    var request;
    var p = new Promise(function (resolve, reject) {
      request = obj[method].apply(obj, args);
      promisifyRequest(request).then(resolve, reject);
    });
    p.request = request;
    return p;
  }

  function promisifyCursorRequestCall(obj, method, args) {
    var p = promisifyRequestCall(obj, method, args);
    return p.then(function (value) {
      if (!value) return;
      return new Cursor(value, p.request);
    });
  }

  function proxyProperties(ProxyClass, targetProp, properties) {
    properties.forEach(function (prop) {
      Object.defineProperty(ProxyClass.prototype, prop, {
        get: function get() {
          return this[targetProp][prop];
        },
        set: function set(val) {
          this[targetProp][prop] = val;
        }
      });
    });
  }

  function proxyRequestMethods(ProxyClass, targetProp, Constructor, properties) {
    properties.forEach(function (prop) {
      if (!(prop in Constructor.prototype)) return;

      ProxyClass.prototype[prop] = function () {
        return promisifyRequestCall(this[targetProp], prop, arguments);
      };
    });
  }

  function proxyMethods(ProxyClass, targetProp, Constructor, properties) {
    properties.forEach(function (prop) {
      if (!(prop in Constructor.prototype)) return;

      ProxyClass.prototype[prop] = function () {
        return this[targetProp][prop].apply(this[targetProp], arguments);
      };
    });
  }

  function proxyCursorRequestMethods(ProxyClass, targetProp, Constructor, properties) {
    properties.forEach(function (prop) {
      if (!(prop in Constructor.prototype)) return;

      ProxyClass.prototype[prop] = function () {
        return promisifyCursorRequestCall(this[targetProp], prop, arguments);
      };
    });
  }

  function Index(index) {
    this._index = index;
  }

  proxyProperties(Index, '_index', ['name', 'keyPath', 'multiEntry', 'unique']);
  proxyRequestMethods(Index, '_index', IDBIndex, ['get', 'getKey', 'getAll', 'getAllKeys', 'count']);
  proxyCursorRequestMethods(Index, '_index', IDBIndex, ['openCursor', 'openKeyCursor']);

  function Cursor(cursor, request) {
    this._cursor = cursor;
    this._request = request;
  }

  proxyProperties(Cursor, '_cursor', ['direction', 'key', 'primaryKey', 'value']);
  proxyRequestMethods(Cursor, '_cursor', IDBCursor, ['update', 'delete']); // proxy 'next' methods

  ['advance', 'continue', 'continuePrimaryKey'].forEach(function (methodName) {
    if (!(methodName in IDBCursor.prototype)) return;

    Cursor.prototype[methodName] = function () {
      var cursor = this;
      var args = arguments;
      return Promise.resolve().then(function () {
        cursor._cursor[methodName].apply(cursor._cursor, args);

        return promisifyRequest(cursor._request).then(function (value) {
          if (!value) return;
          return new Cursor(value, cursor._request);
        });
      });
    };
  });

  function ObjectStore(store) {
    this._store = store;
  }

  ObjectStore.prototype.createIndex = function () {
    return new Index(this._store.createIndex.apply(this._store, arguments));
  };

  ObjectStore.prototype.index = function () {
    return new Index(this._store.index.apply(this._store, arguments));
  };

  proxyProperties(ObjectStore, '_store', ['name', 'keyPath', 'indexNames', 'autoIncrement']);
  proxyRequestMethods(ObjectStore, '_store', IDBObjectStore, ['put', 'add', 'delete', 'clear', 'get', 'getAll', 'getKey', 'getAllKeys', 'count']);
  proxyCursorRequestMethods(ObjectStore, '_store', IDBObjectStore, ['openCursor', 'openKeyCursor']);
  proxyMethods(ObjectStore, '_store', IDBObjectStore, ['deleteIndex']);

  function Transaction(idbTransaction) {
    this._tx = idbTransaction;
    this.complete = new Promise(function (resolve, reject) {
      idbTransaction.oncomplete = function () {
        resolve();
      };

      idbTransaction.onerror = function () {
        reject(idbTransaction.error);
      };

      idbTransaction.onabort = function () {
        reject(idbTransaction.error);
      };
    });
  }

  Transaction.prototype.objectStore = function () {
    return new ObjectStore(this._tx.objectStore.apply(this._tx, arguments));
  };

  proxyProperties(Transaction, '_tx', ['objectStoreNames', 'mode']);
  proxyMethods(Transaction, '_tx', IDBTransaction, ['abort']);

  function UpgradeDB(db, oldVersion, transaction) {
    this._db = db;
    this.oldVersion = oldVersion;
    this.transaction = new Transaction(transaction);
  }

  UpgradeDB.prototype.createObjectStore = function () {
    return new ObjectStore(this._db.createObjectStore.apply(this._db, arguments));
  };

  proxyProperties(UpgradeDB, '_db', ['name', 'version', 'objectStoreNames']);
  proxyMethods(UpgradeDB, '_db', IDBDatabase, ['deleteObjectStore', 'close']);

  function DB(db) {
    this._db = db;
  }

  DB.prototype.transaction = function () {
    return new Transaction(this._db.transaction.apply(this._db, arguments));
  };

  proxyProperties(DB, '_db', ['name', 'version', 'objectStoreNames']);
  proxyMethods(DB, '_db', IDBDatabase, ['close']); // Add cursor iterators
  // TODO: remove this once browsers do the right thing with promises

  ['openCursor', 'openKeyCursor'].forEach(function (funcName) {
    [ObjectStore, Index].forEach(function (Constructor) {
      // Don't create iterateKeyCursor if openKeyCursor doesn't exist.
      if (!(funcName in Constructor.prototype)) return;

      Constructor.prototype[funcName.replace('open', 'iterate')] = function () {
        var args = toArray(arguments);
        var callback = args[args.length - 1];
        var nativeObject = this._store || this._index;
        var request = nativeObject[funcName].apply(nativeObject, args.slice(0, -1));

        request.onsuccess = function () {
          callback(request.result);
        };
      };
    });
  }); // polyfill getAll

  [Index, ObjectStore].forEach(function (Constructor) {
    if (Constructor.prototype.getAll) return;

    Constructor.prototype.getAll = function (query, count) {
      var instance = this;
      var items = [];
      return new Promise(function (resolve) {
        instance.iterateCursor(query, function (cursor) {
          if (!cursor) {
            resolve(items);
            return;
          }

          items.push(cursor.value);

          if (count !== undefined && items.length == count) {
            resolve(items);
            return;
          }

          cursor.continue();
        });
      });
    };
  });

  function openDb(name, version, upgradeCallback) {
    var p = promisifyRequestCall(indexedDB, 'open', [name, version]);
    var request = p.request;

    if (request) {
      request.onupgradeneeded = function (event) {
        if (upgradeCallback) {
          upgradeCallback(new UpgradeDB(request.result, event.oldVersion, request.transaction));
        }
      };
    }

    return p.then(function (db) {
      return new DB(db);
    });
  }

  function deleteDb(name) {
    return promisifyRequestCall(indexedDB, 'deleteDatabase', [name]);
  }

  exports.openDb = openDb;
  exports.deleteDb = deleteDb;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/forget-password/forget-password.component */ "5Zbi");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_window_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/window.service */ "BQLa");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/auth.service */ "6Hrc");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");










var LoginComponent = /** @class */ (function () {
    function LoginComponent(dialog, authMethod, database, router, windowService, auth) {
        this.dialog = dialog;
        this.authMethod = authMethod;
        this.database = database;
        this.router = router;
        this.windowService = windowService;
        this.auth = auth;
        this.isOTP = true;
        this.phoneNumber = "+84";
        this.email = "";
        this.windowRef = this.windowService.windowRef;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.windowRef = this.windowService.windowRef;
        this.auth.eventAuthError$.subscribe(function (data) {
            console.log("err log", data);
            _this.authError = data;
        });
    };
    LoginComponent.prototype.logIn = function () {
        console.log("click login");
        this.auth.logIn(this.email, this.password);
    };
    LoginComponent.prototype.openForgetPass = function () {
        this.dialog.open(_components_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_1__["ForgetPasswordComponent"], { autoFocus: false });
    };
    LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_window_service__WEBPACK_IMPORTED_MODULE_6__["WindowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"])); };
    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 24, vars: 3, consts: [[1, "login"], [1, "container-fluid"], [1, "logo"], [1, "wrapper"], [1, "login__form"], [1, "login__form-title"], [1, "error-text"], [1, "container"], [1, "input__wrapper"], [1, "material-icons"], ["type", "email", "placeholder", "Nh\u1EADp email c\u1EE7a b\u1EA1n", 1, "email", 3, "ngModel", "ngModelChange"], ["type", "password", "placeholder", "Nh\u1EADp m\u1EADt kh\u1EA9u c\u1EE7a b\u1EA1n", 1, "password", 3, "ngModel", "ngModelChange"], [1, "signBtn", "btn", 3, "click"], [1, "forgetPass", 3, "click"], [1, "register"], ["routerLink", "/login/register", 1, "register__link"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Ch\u00E0o m\u1EEBng t\u1EDBi c\u1EEDa h\u00E0ng ch\u00FAng t\u00F4i");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " email ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_13_listener($event) { return ctx.email = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_15_listener($event) { return ctx.password = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_16_listener() { return ctx.logIn(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0110\u0103ng nh\u1EADp");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_18_listener() { return ctx.openForgetPass(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Qu\u00EAn m\u1EADt kh\u1EA9u?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " B\u1EA1n ch\u01B0a c\u00F3 t\u00E0i kho\u1EA3n? ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u0110\u0103ng k\u00FD");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.authError == null ? null : ctx.authError.message);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: [".login[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.login[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.login[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .login__form[_ngcontent-%COMP%] {\n  margin: 2rem 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.login[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .login__form[_ngcontent-%COMP%]   .error-text[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 13px;\n  margin: 0 20px 0.5rem 20px;\n}\n.login[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .login__form-title[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.login[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .login__form[_ngcontent-%COMP%]   .input__wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.login[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .login__form[_ngcontent-%COMP%]   .input__wrapper[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  position: absolute;\n  content: \"\";\n  left: 15px;\n  color: #c8ccd1;\n}\n.login[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .login__form[_ngcontent-%COMP%]   .input__wrapper[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%], .login[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .login__form[_ngcontent-%COMP%]   .input__wrapper[_ngcontent-%COMP%]   .password[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 20px;\n  padding: 0.85rem;\n  padding-left: 5rem;\n  outline: none;\n  border: 1px solid #ced6e1;\n  font-size: 14px;\n  margin: 0.5rem 0;\n}\n.login[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .otpBtn[_ngcontent-%COMP%], .login[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .signBtn[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  border-radius: 10px;\n  padding: 0.5rem 1rem;\n  font-size: 14px;\n}\n.login[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .signBtn[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.login[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .divider-text[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin: 1rem 0;\n  font-size: 13px;\n}\n.login[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n.login[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .forgetPass[_ngcontent-%COMP%], .login[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .register[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-top: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUFGO0FBS0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUhKO0FBS0k7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFITjtBQUtNO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtBQUhSO0FBTU07RUFDRSxxQkFBQTtBQUpSO0FBTU07RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUpSO0FBTVE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQUpWO0FBT1E7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBTFY7QUFhSTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUFYTjtBQWNJO0VBRUUsZ0JBQUE7QUFiTjtBQWdCSTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFkTjtBQWlCSTtFQUNFLDBCQUFBO0FBZk47QUFrQkk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFoQk4iLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMb2dpblxyXG4ubG9naW4ge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIC5sb2dvIHtcclxuICB9XHJcblxyXG4gIC53cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAubG9naW5fX2Zvcm0ge1xyXG4gICAgICBtYXJnaW46IDJyZW0gMDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgIC5lcnJvci10ZXh0IHtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBtYXJnaW46IDAgMjBweCAwLjVyZW0gMjBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi10aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgICB9XHJcbiAgICAgIC5pbnB1dF9fd3JhcHBlciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgLm1hdGVyaWFsLWljb25zIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICBsZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgY29sb3I6ICNjOGNjZDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZW1haWwge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMC44NXJlbTtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogNXJlbTtcclxuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNmUxO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwLjVyZW0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBhc3N3b3JkIHtcclxuICAgICAgICAgIEBleHRlbmQgLmVtYWlsO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5vdHBCdG4ge1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuXHJcbiAgICAuc2lnbkJ0biB7XHJcbiAgICAgIEBleHRlbmQgLm90cEJ0bjtcclxuICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuZGl2aWRlci10ZXh0IHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgbWFyZ2luOiAxcmVtIDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIH1cclxuXHJcbiAgICBhIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcmdldFBhc3Mge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnJlZ2lzdGVyIHtcclxuICAgICAgQGV4dGVuZCAuZm9yZ2V0UGFzcztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
    return LoginComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }, { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _services_window_service__WEBPACK_IMPORTED_MODULE_6__["WindowService"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "wu3+":
/*!**************************************************************!*\
  !*** ./node_modules/@firebase/firestore/dist/esm5/bundle.js ***!
  \**************************************************************/
/*! exports provided: registerBundle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerBundle", function() { return t; });
/* harmony import */ var _firebase_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/logger */ "q/0M");
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/util */ "qOnz");
/* harmony import */ var _firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/webchannel-wrapper */ "x7I3");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "WVRz");
/* harmony import */ var _prebuilt_67479dbf_318e5a2c_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prebuilt-67479dbf-318e5a2c.js */ "7q11");





/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Prototype patches bundle loading to Firestore.
 */

function t(o) {
  o.prototype.loadBundle = _prebuilt_67479dbf_318e5a2c_js__WEBPACK_IMPORTED_MODULE_4__["b"], o.prototype.namedQuery = _prebuilt_67479dbf_318e5a2c_js__WEBPACK_IMPORTED_MODULE_4__["u"];
}

t(_prebuilt_67479dbf_318e5a2c_js__WEBPACK_IMPORTED_MODULE_4__["Q"]);


/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map