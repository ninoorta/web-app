(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "6Qg2":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");




var UsersService = /** @class */ (function () {
    function UsersService(auth, database) {
        this.auth = auth;
        this.database = database;
    }
    UsersService.prototype.getAllUser = function () {
        return this.database.collection("Users").get();
    };
    UsersService.prototype.updateUser = function (uid, userData) {
        return this.database.collection("Users").doc(uid).update(userData);
    };
    UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"])); };
    UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsersService, factory: UsersService.ɵfac, providedIn: 'root' });
    return UsersService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "723k":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-routing.module */ "x0XS");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile.component */ "Y5Lh");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");





// import this to prevent not receiving matmenutriggerfor



var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProfileModule });
    ProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProfileModule_Factory(t) { return new (t || ProfileModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _profile_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProfileRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"]
            ]] });
    return ProfileModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileModule, { declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _profile_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProfileRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _profile_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProfileRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Vaw3":
/*!**********************************************************************************!*\
  !*** ./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js ***!
  \**********************************************************************************/
/*! exports provided: AngularFireStorage, AngularFireStorageModule, BUCKET, GetDownloadURLPipe, GetDownloadURLPipeModule, MAX_OPERATION_RETRY_TIME, MAX_UPLOAD_RETRY_TIME, createStorageRef, createUploadTask, fromTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFireStorage", function() { return AngularFireStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFireStorageModule", function() { return AngularFireStorageModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUCKET", function() { return BUCKET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetDownloadURLPipe", function() { return GetDownloadURLPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetDownloadURLPipeModule", function() { return GetDownloadURLPipeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_OPERATION_RETRY_TIME", function() { return MAX_OPERATION_RETRY_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_UPLOAD_RETRY_TIME", function() { return MAX_UPLOAD_RETRY_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStorageRef", function() { return createStorageRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUploadTask", function() { return createUploadTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromTask", function() { return fromTask; });
/* harmony import */ var C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/storage */ "WI49");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");








/**
 * @fileoverview added by tsickle
 * Generated from: observable/fromTask.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Things aren't working great, I'm having to put in a lot of work-arounds for what
// appear to be Firebase JS SDK bugs https://github.com/firebase/firebase-js-sdk/issues/4158

/**
 * @param {?} task
 * @return {?}
 */



function fromTask(task) {
  return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](
  /**
  * @param {?} subscriber
  * @return {?}
  */
  function (subscriber) {
    /** @type {?} */
    var progress =
    /**
    * @param {?} snap
    * @return {?}
    */
    function progress(snap) {
      return subscriber.next(snap);
    };
    /** @type {?} */


    var error =
    /**
    * @param {?} e
    * @return {?}
    */
    function error(e) {
      return subscriber.error(e);
    };
    /** @type {?} */


    var complete =
    /**
    * @return {?}
    */
    function complete() {
      return subscriber.complete();
    }; // emit the current snapshot, so they don't have to wait for state_changes
    // to fire next... this is stale if the task is no longer running :(


    progress(task.snapshot);
    /** @type {?} */

    var unsub = task.on('state_changed', progress); // it turns out that neither task snapshot nor 'state_changed' fire the last
    // snapshot before completion, the one with status 'success" and 100% progress
    // so let's use the promise form of the task for that

    task.then(
    /**
    * @param {?} snapshot
    * @return {?}
    */
    function (snapshot) {
      progress(snapshot);
      complete();
    },
    /**
    * @param {?} e
    * @return {?}
    */
    function (e) {
      // TODO investigate, again this is stale, we never fire a canceled or error it seems
      progress(task.snapshot);
      error(e);
    }); // on's type if Function, rather than () => void, need to wrap

    return (
      /**
      * @return {?}
      */
      function unsubscribe() {
        unsub();
      }
    );
  }).pipe( // deal with sync emissions from first emitting `task.snapshot`, this makes sure
  // that if the task is already finished we don't emit the old running state
  Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(0));
}
/**
 * @fileoverview added by tsickle
 * Generated from: task.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @record
 */


function AngularFireUploadTask() {}

if (false) {}
/**
 * Create an AngularFireUploadTask from a regular UploadTask from the Storage SDK.
 * This method creates an observable of the upload and returns on object that provides
 * multiple methods for controlling and monitoring the file upload.
 * @param {?} task
 * @return {?}
 */


function createUploadTask(task) {
  /** @type {?} */
  var inner$ = fromTask(task);
  return {
    task: task,
    then: task.then.bind(task),
    catch: task.catch.bind(task),
    pause: task.pause.bind(task),
    cancel: task.cancel.bind(task),
    resume: task.resume.bind(task),
    snapshotChanges:
    /**
    * @return {?}
    */
    function snapshotChanges() {
      return inner$;
    },
    percentageChanges:
    /**
    * @return {?}
    */
    function percentageChanges() {
      return inner$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(
      /**
      * @param {?} s
      * @return {?}
      */
      function (s) {
        return s.bytesTransferred / s.totalBytes * 100;
      }));
    }
  };
}
/**
 * @fileoverview added by tsickle
 * Generated from: ref.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @record
 */


function AngularFireStorageReference() {}

if (false) {}
/**
 * Create an AngularFire wrapped Storage Reference. This object
 * creates observable methods from promise based methods.
 * @param {?} ref
 * @param {?} schedulers
 * @param {?} keepUnstableUntilFirst
 * @return {?}
 */


function createStorageRef(ref, schedulers, keepUnstableUntilFirst) {
  return {
    getDownloadURL:
    /**
    * @return {?}
    */
    function getDownloadURL() {
      return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(undefined).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["observeOn"])(schedulers.outsideAngular), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(
      /**
      * @return {?}
      */
      function () {
        return ref.getDownloadURL();
      }), keepUnstableUntilFirst);
    },
    getMetadata:
    /**
    * @return {?}
    */
    function getMetadata() {
      return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(undefined).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["observeOn"])(schedulers.outsideAngular), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(
      /**
      * @return {?}
      */
      function () {
        return ref.getMetadata();
      }), keepUnstableUntilFirst);
    },
    delete:
    /**
    * @return {?}
    */
    function _delete() {
      return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(ref.delete());
    },
    child:
    /**
    * @param {?} path
    * @return {?}
    */
    function child(path) {
      return createStorageRef(ref.child(path), schedulers, keepUnstableUntilFirst);
    },
    updateMetadata:
    /**
    * @param {?} meta
    * @return {?}
    */
    function updateMetadata(meta) {
      return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(ref.updateMetadata(meta));
    },
    put:
    /**
    * @param {?} data
    * @param {?=} metadata
    * @return {?}
    */
    function put(data, metadata) {
      /** @type {?} */
      var task = ref.put(data, metadata);
      return createUploadTask(task);
    },
    putString:
    /**
    * @param {?} data
    * @param {?=} format
    * @param {?=} metadata
    * @return {?}
    */
    function putString(data, format, metadata) {
      /** @type {?} */
      var task = ref.putString(data, format, metadata);
      return createUploadTask(task);
    },
    listAll:
    /**
    * @return {?}
    */
    function listAll() {
      return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(ref.listAll());
    }
  };
}
/**
 * @fileoverview added by tsickle
 * Generated from: storage.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @type {?} */


var BUCKET = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('angularfire2.storageBucket');
/** @type {?} */

var MAX_UPLOAD_RETRY_TIME = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('angularfire2.storage.maxUploadRetryTime');
/** @type {?} */

var MAX_OPERATION_RETRY_TIME = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('angularfire2.storage.maxOperationRetryTime');
/**
 * AngularFireStorage Service
 *
 * This service is the main entry point for this feature module. It provides
 * an API for uploading and downloading binary files from Cloud Storage for
 * Firebase.
 */

var AngularFireStorage = /*#__PURE__*/function () {
  /**
   * @param {?} options
   * @param {?} nameOrConfig
   * @param {?} storageBucket
   * @param {?} platformId
   * @param {?} zone
   * @param {?} maxUploadRetryTime
   * @param {?} maxOperationRetryTime
   */
  function AngularFireStorage(options, nameOrConfig, storageBucket, // tslint:disable-next-line:ban-types
  platformId, zone, maxUploadRetryTime, maxOperationRetryTime) {
    Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AngularFireStorage);

    this.schedulers = new _angular_fire__WEBPACK_IMPORTED_MODULE_5__["ɵAngularFireSchedulers"](zone);
    this.keepUnstableUntilFirst = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_5__["ɵkeepUnstableUntilFirstFactory"])(this.schedulers);
    /** @type {?} */

    var app = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_5__["ɵfirebaseAppFactory"])(options, zone, nameOrConfig);
    this.storage = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_5__["ɵfetchInstance"])("".concat(app.name, ".storage.").concat(storageBucket), 'AngularFireStorage', app,
    /**
    * @return {?}
    */
    function () {
      /** @type {?} */
      var storage = zone.runOutsideAngular(
      /**
      * @return {?}
      */
      function () {
        return app.storage(storageBucket || undefined);
      });

      if (maxUploadRetryTime) {
        storage.setMaxUploadRetryTime(maxUploadRetryTime);
      }

      if (maxOperationRetryTime) {
        storage.setMaxOperationRetryTime(maxOperationRetryTime);
      }

      return storage;
    }, [maxUploadRetryTime, maxOperationRetryTime]);
  }
  /**
   * @param {?} path
   * @return {?}
   */


  Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AngularFireStorage, [{
    key: "ref",
    value: function ref(path) {
      return createStorageRef(this.storage.ref(path), this.schedulers, this.keepUnstableUntilFirst);
    }
    /**
     * @param {?} path
     * @return {?}
     */

  }, {
    key: "refFromURL",
    value: function refFromURL(path) {
      return createStorageRef(this.storage.refFromURL(path), this.schedulers, this.keepUnstableUntilFirst);
    }
    /**
     * @param {?} path
     * @param {?} data
     * @param {?=} metadata
     * @return {?}
     */

  }, {
    key: "upload",
    value: function upload(path, data, metadata) {
      /** @type {?} */
      var storageRef = this.storage.ref(path);
      /** @type {?} */

      var ref = createStorageRef(storageRef, this.schedulers, this.keepUnstableUntilFirst);
      return ref.put(data, metadata);
    }
  }]);

  return AngularFireStorage;
}();

AngularFireStorage.ɵfac = function AngularFireStorage_Factory(t) {
  return new (t || AngularFireStorage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_fire__WEBPACK_IMPORTED_MODULE_5__["FIREBASE_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_fire__WEBPACK_IMPORTED_MODULE_5__["FIREBASE_APP_NAME"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](BUCKET, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](MAX_UPLOAD_RETRY_TIME, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](MAX_OPERATION_RETRY_TIME, 8));
};
/** @nocollapse */


AngularFireStorage.ctorParameters = function () {
  return [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
      args: [_angular_fire__WEBPACK_IMPORTED_MODULE_5__["FIREBASE_OPTIONS"]]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
      args: [_angular_fire__WEBPACK_IMPORTED_MODULE_5__["FIREBASE_APP_NAME"]]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
      args: [BUCKET]
    }]
  }, {
    type: Object,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["PLATFORM_ID"]]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
      args: [MAX_UPLOAD_RETRY_TIME]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
      args: [MAX_OPERATION_RETRY_TIME]
    }]
  }];
};
/** @nocollapse */


AngularFireStorage.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"])({
  factory: function AngularFireStorage_Factory() {
    return new AngularFireStorage(Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_5__["FIREBASE_OPTIONS"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_5__["FIREBASE_APP_NAME"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(BUCKET, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_4__["PLATFORM_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(MAX_UPLOAD_RETRY_TIME, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(MAX_OPERATION_RETRY_TIME, 8));
  },
  token: AngularFireStorage,
  providedIn: "any"
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AngularFireStorage, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"],
    args: [{
      providedIn: 'any'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
        args: [_angular_fire__WEBPACK_IMPORTED_MODULE_5__["FIREBASE_OPTIONS"]]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
        args: [_angular_fire__WEBPACK_IMPORTED_MODULE_5__["FIREBASE_APP_NAME"]]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
        args: [BUCKET]
      }]
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["PLATFORM_ID"]]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
        args: [MAX_UPLOAD_RETRY_TIME]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
        args: [MAX_OPERATION_RETRY_TIME]
      }]
    }];
  }, null);
})();

if (false) {}
/**
 * @fileoverview added by tsickle
 * Generated from: pipes/storageUrl.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * to be used with in combination with | async
 */


var GetDownloadURLPipe = /*#__PURE__*/function () {
  /**
   * @param {?} storage
   * @param {?} cdr
   */
  function GetDownloadURLPipe(storage, cdr) {
    Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GetDownloadURLPipe);

    this.storage = storage;
    this.asyncPipe = new _angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"](cdr);
  }
  /**
   * @param {?} path
   * @return {?}
   */


  Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(GetDownloadURLPipe, [{
    key: "transform",
    value: function transform(path) {
      if (path !== this.path) {
        this.path = path;
        this.downloadUrl$ = this.storage.ref(path).getDownloadURL();
      }

      return this.asyncPipe.transform(this.downloadUrl$);
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.asyncPipe.ngOnDestroy();
    }
  }]);

  return GetDownloadURLPipe;
}();

GetDownloadURLPipe.ɵfac = function GetDownloadURLPipe_Factory(t) {
  return new (t || GetDownloadURLPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](AngularFireStorage), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinjectPipeChangeDetectorRef"]());
};

GetDownloadURLPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefinePipe"]({
  name: "getDownloadURL",
  type: GetDownloadURLPipe,
  pure: false
});
/** @nocollapse */

GetDownloadURLPipe.ctorParameters = function () {
  return [{
    type: AngularFireStorage
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](GetDownloadURLPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Pipe"],
    args: [{
      name: 'getDownloadURL',
      pure: false
    }]
  }], function () {
    return [{
      type: AngularFireStorage
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
    }];
  }, null);
})();

if (false) {}

var GetDownloadURLPipeModule = function GetDownloadURLPipeModule() {
  Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GetDownloadURLPipeModule);
};

GetDownloadURLPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: GetDownloadURLPipeModule
});
GetDownloadURLPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  factory: function GetDownloadURLPipeModule_Factory(t) {
    return new (t || GetDownloadURLPipeModule)();
  }
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](GetDownloadURLPipeModule, {
    declarations: [GetDownloadURLPipe],
    exports: [GetDownloadURLPipe]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](GetDownloadURLPipeModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
    args: [{
      declarations: [GetDownloadURLPipe],
      exports: [GetDownloadURLPipe]
    }]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * Generated from: storage.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var AngularFireStorageModule = function AngularFireStorageModule() {
  Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AngularFireStorageModule);
};

AngularFireStorageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: AngularFireStorageModule
});
AngularFireStorageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  factory: function AngularFireStorageModule_Factory(t) {
    return new (t || AngularFireStorageModule)();
  },
  providers: [AngularFireStorage],
  imports: [GetDownloadURLPipeModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AngularFireStorageModule, {
    exports: [GetDownloadURLPipeModule]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AngularFireStorageModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
    args: [{
      exports: [GetDownloadURLPipeModule],
      providers: [AngularFireStorage]
    }]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: angular-fire-storage.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




/***/ }),

/***/ "WI49":
/*!*********************************************************!*\
  !*** ./node_modules/firebase/storage/dist/index.esm.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/storage */ "LmZi");


/***/ }),

/***/ "Y5Lh":
/*!****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _login_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../login/services/auth.service */ "6Hrc");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/users.service */ "6Qg2");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");











function ProfileComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.editMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " create ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.saveChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " done ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_p_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ch\u01B0a c\u00F3 \u1EA3nh \u0111\u1EA1i di\u1EC7n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_img_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 42);
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r4.userAvatarLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ProfileComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Th\u00F4ng tin ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_ng_template_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Th\u1ED1ng k\u00EA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " B\u1EA1n c\u1EA7n \u0111\u0103ng nh\u1EADp \u0111\u1EC3 s\u1EED d\u1EE5ng ch\u1EE9c n\u0103ng n\u00E0y ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0110\u0103ng nh\u1EADp");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " B\u1EA1n ch\u01B0a c\u00F3 t\u00E0i kho\u1EA3n? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0110\u0103ng k\u00FD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(db, auth, userService, fireStorage) {
        this.db = db;
        this.auth = auth;
        this.userService = userService;
        this.fireStorage = fireStorage;
        // Edit
        this.isEdit = false;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.getCurrentUser();
        // Call all users in collection Users
        // this.db.collection("Users").valueChanges()
        //   .subscribe(data => console.log(data))
        var inputs = document.querySelectorAll(".input-text");
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].classList.remove("font-weight-bold");
        }
    };
    ProfileComponent.prototype.getCurrentUser = function () {
        var _this = this;
        this.auth.getUserState().subscribe(function (user) {
            // If have a current user
            _this.currentUser = user;
            _this.db.collection("Users").doc(_this.currentUser.uid).valueChanges().subscribe(function (data) {
                _this.currentUserData = data;
                console.log("current user Data: ", _this.currentUserData);
                // Display this user data
                _this.userAvatarLink = _this.currentUserData.avatar;
                _this.fullName = _this.currentUserData.fullName;
                _this.address = _this.currentUserData.address;
                _this.phone = _this.currentUserData.phone;
                _this.email = _this.currentUserData.email;
                _this.gender = _this.currentUserData.gender;
                _this.birthday = _this.currentUserData.birthday;
            });
        });
    };
    ProfileComponent.prototype.userChangeAvatar = function ($event) {
        var _this = this;
        this.userAvatarPath = $event.target.files[0];
        console.log("avatar path: ", this.userAvatarPath);
        this.fireStorage.upload("/userAvatars/" + ("avatar-" + this.currentUser.uid), this.userAvatarPath)
            .then(function () {
            _this.fireStorage.storage.ref('/userAvatars/' + ("avatar-" + _this.currentUser.uid)).getDownloadURL()
                .then(function (link) {
                _this.userAvatarLink = link;
                console.log("link: " + _this.userAvatarLink);
            });
        });
    };
    ProfileComponent.prototype.chooseGenderType = function (type) {
        this.gender = type;
    };
    ProfileComponent.prototype.editMode = function () {
        this.isEdit = true;
        var inputs = document.querySelectorAll(".input-text");
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].classList.add("font-weight-bold");
        }
    };
    ProfileComponent.prototype.saveChange = function () {
        console.log("click save change");
        this.isEdit = false;
        var inputs = document.querySelectorAll(".input-text");
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].classList.remove("font-weight-bold");
        }
        var dataChange = {
            avatar: this.userAvatarLink,
            fullName: this.fullName,
            phone: this.phone,
            address: this.address,
            email: this.email,
            gender: this.gender,
            birthday: this.birthday
        };
        this.userService.updateUser(this.currentUser.uid, dataChange);
    };
    ProfileComponent.prototype.logOut = function () {
        console.log("click log out");
        this.auth.logOut();
    };
    ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"])); };
    ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 75, vars: 21, consts: [[1, "profile"], [1, "container-fluid"], [1, "profile__header"], ["class", "editBtn btn material-icons", 3, "click", 4, "ngIf"], ["class", "checkBtn btn material-icons", 3, "click", 4, "ngIf"], [1, "profile__header-title"], [1, "moreBtn", "btn", "material-icons", 3, "matMenuTriggerFor"], [1, "matMenu-actions"], ["menu", "matMenu"], ["mat-menu-item", "", 1, "matMenu-actions__logOut", 3, "click"], [1, "row"], [1, "col", "text-center"], [1, "avatar"], ["class", "avatar__notice", 4, "ngIf"], [3, "src", 4, "ngIf"], ["for", "userAvatar"], [1, "material-icons"], ["type", "file", "accept", "image/*", "id", "userAvatar", "hidden", "", 3, "change"], ["userAvatar", ""], [1, "align-items-center"], ["label", "Th\u00F4ng tin"], ["mat-tab-label", ""], [1, "information"], [1, "container"], [1, "col-4", "input-text"], [1, "col-8"], ["type", "text", 1, "input", 2, "cursor", "pointer", 3, "ngModel", "readonly", "ngModelChange"], [1, "gender__form"], [1, "gender__form-label"], ["type", "radio", "name", "gender", "value", "male", 1, "gender", "gender-male", 2, "color", "#224177", 3, "checked", "disabled", "change"], ["type", "radio", "name", "gender", "value", "female", 1, "gender", "gender-female", 2, "color", "#224177", 3, "checked", "disabled", "change"], ["type", "date", 1, "input", 3, "ngModel", "readonly", "ngModelChange"], ["type", "text", 1, "input", 3, "ngModel", "readonly", "ngModelChange"], ["type", "text", 1, "input", "profile-address", 3, "ngModel", "readonly", "ngModelChange"], ["type", "text", 1, "input", "profile-gmail", 3, "ngModel", "readonly", "ngModelChange"], ["label", "Th\u1ED1ng k\u00EA"], [1, "report"], [1, "report__total"], ["class", "overlaySign", 4, "ngIf"], [1, "editBtn", "btn", "material-icons", 3, "click"], [1, "checkBtn", "btn", "material-icons", 3, "click"], [1, "avatar__notice"], [3, "src"], [1, "overlaySign"], [1, "wrapper"], [1, "overlaySign__title"], [1, "action__wrapper"], ["routerLink", "/login", 1, "signInBtn", "actionBtn"], [1, "register__wrapper"], ["routerLink", "/login/register", 1, "register"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileComponent_button_3_Template, 2, 0, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileComponent_button_4_Template, 2, 0, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "T\u00E0i kho\u1EA3n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "more_horiz");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-menu", 7, 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_11_listener() { return ctx.logOut(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u0110\u0103ng xu\u1EA5t ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProfileComponent_p_16_Template, 2, 0, "p", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ProfileComponent_img_17_Template, 1, 1, "img", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " add_a_photo ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 17, 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProfileComponent_Template_input_change_21_listener($event) { return ctx.userChangeAvatar($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-tab-group", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-tab", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ProfileComponent_ng_template_25_Template, 2, 0, "ng-template", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " H\u1ECD t\u00EAn: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_32_listener($event) { return ctx.fullName = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Gi\u1EDBi t\u00EDnh: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "form", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Nam ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProfileComponent_Template_input_change_40_listener() { return ctx.chooseGenderType(1); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " N\u1EEF ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProfileComponent_Template_input_change_44_listener() { return ctx.chooseGenderType(2); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Ng\u00E0y sinh: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "input", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_50_listener($event) { return ctx.birthday = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " \u0110i\u1EC7n tho\u1EA1i: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "input", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_55_listener($event) { return ctx.phone = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " \u0110\u1ECBa ch\u1EC9: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "input", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_60_listener($event) { return ctx.address = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Email: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "input", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_65_listener($event) { return ctx.email = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-tab", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, ProfileComponent_ng_template_67_Template, 2, 0, "ng-template", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " T\u1ED5ng ti\u1EC1n b\u1EA1n \u0111\u00E3 mua s\u1EAFm: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, ProfileComponent_div_74_Template, 12, 0, "div", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isEdit);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEdit);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userAvatarLink);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userAvatarLink);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.fullName)("readonly", !ctx.isEdit);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.gender == 1)("disabled", !ctx.isEdit);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.gender == 2)("disabled", !ctx.isEdit);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.birthday)("readonly", !ctx.isEdit);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.phone)("readonly", !ctx.isEdit);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.address)("readonly", !ctx.isEdit);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email)("readonly", !ctx.isEdit);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.totalSpentMoney);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.currentUser);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuItem"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"]], styles: [".profile[_ngcontent-%COMP%] {\n  height: 100%;\n  position: relative;\n}\n.profile__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  font-size: 2rem;\n  padding-top: 1rem;\n  margin-bottom: 2rem;\n}\n.profile__header[_ngcontent-%COMP%]   .editBtn[_ngcontent-%COMP%], .profile__header[_ngcontent-%COMP%]   .checkBtn[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  position: absolute;\n  content: \"\";\n  left: 0;\n  font-weight: bold;\n}\n.profile__header[_ngcontent-%COMP%]   .moreBtn[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  position: absolute;\n  content: \"\";\n  right: 0;\n  color: black;\n  font-weight: bold;\n}\n.profile[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 12rem;\n  height: 12rem;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  background: #fafafa;\n  border-radius: 50%;\n}\n.profile[_ngcontent-%COMP%]   .avatar__notice[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 14px;\n}\n.profile[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.profile[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   .add-photo[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 40px;\n  height: 40px;\n  bottom: 5px;\n  right: 5px;\n  filter: contrast(0.5);\n  border-radius: 20px;\n}\n.profile[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 11%;\n  right: -3%;\n  color: #224177;\n  font-size: 21px;\n  background-color: #fff;\n  width: 2.4rem;\n  height: 2.4rem;\n  border-radius: 50%;\n}\n.profile[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n.profile[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin: 1em 0em;\n  width: 100%;\n  align-items: center;\n}\n.profile[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   .input-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-family: Segoe UI;\n  color: #9caac2;\n  padding-right: 0px;\n}\n.profile[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\n  border-bottom: 0.1px solid #9caac2;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  color: #224177;\n  font-weight: 600;\n  font-family: Segoe UI;\n  font-size: 15px;\n  width: 100%;\n  border-radius: 0.5rem;\n  padding: 0.25rem 0.5rem;\n  outline: none;\n}\n.profile[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   .gender__form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  color: #224177;\n  font-size: 15px;\n  font-weight: 600;\n  font-family: Segoe UI;\n  align-items: center;\n}\n.profile[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   .gender__form-label[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 2rem;\n  margin-right: 1rem;\n}\n.profile[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   .gender__form-label[_ngcontent-%COMP%]   .gender[_ngcontent-%COMP%] {\n  color: #224177;\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: unset;\n}\n.profile[_ngcontent-%COMP%]   .report__total[_ngcontent-%COMP%] {\n  font-size: 15pxss;\n}\n.profile[_ngcontent-%COMP%]   mat-tab-group[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding: 0 15px;\n}\n.profile[_ngcontent-%COMP%]   .overlaySign[_ngcontent-%COMP%] {\n  position: absolute;\n  content: \"\";\n  top: 0;\n  width: 100%;\n  height: 92%;\n  background-color: white;\n  z-index: 999;\n}\n.profile[_ngcontent-%COMP%]   .overlaySign[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: inherit;\n}\n.profile[_ngcontent-%COMP%]   .overlaySign[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  padding: 2rem;\n  background: #9e9e9e0f;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\n  border-radius: 25px;\n}\n.profile[_ngcontent-%COMP%]   .overlaySign[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .action__wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.profile[_ngcontent-%COMP%]   .overlaySign[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .action__wrapper[_ngcontent-%COMP%]   .actionBtn[_ngcontent-%COMP%] {\n  margin: 1.5rem 0;\n  outline: none;\n  border: none;\n  font-size: 14px;\n  padding: 0.75rem 3rem;\n  border-radius: 25px;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;\n  font-weight: 500;\n}\n.profile[_ngcontent-%COMP%]   .overlaySign[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .register__wrapper[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 14px;\n}\n.profile[_ngcontent-%COMP%]   .overlaySign[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .register__wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBQUY7QUFDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQ0k7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLGlCQUFBO0FBQ047QUFNSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBSk47QUFRRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFOSjtBQVFJO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQU5OO0FBUUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFOTjtBQVFJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFFQSxtQkFBQTtBQVBOO0FBU0k7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFQTjtBQVdFO0VBQ0UsZ0JBQUE7QUFUSjtBQVVJO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQVJOO0FBV0k7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFUTjtBQVlJO0VBQ0Usa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUFWTjtBQWFJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFYTjtBQWFNO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBWFI7QUFhUTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0FBWFY7QUFrQkk7RUFDRSxpQkFBQTtBQWhCTjtBQW9CRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQWxCSjtBQXFCRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQW5CSjtBQXFCSTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQW5CTjtBQXFCTTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHdGQUFBO0VBRUEsbUJBQUE7QUFwQlI7QUF3QlE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBdEJWO0FBd0JVO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUZBQUE7RUFFQSxnQkFBQTtBQXZCWjtBQTBCUTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQXhCVjtBQXlCVTtFQUNFLDBCQUFBO0FBdkJaIiwiZmlsZSI6InByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBQcm9maWxlXHJcbi5wcm9maWxlIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICZfX2hlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG5cclxuICAgIC5lZGl0QnRuIHtcclxuICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuICAgIC5jaGVja0J0biB7XHJcbiAgICAgIEBleHRlbmQgLmVkaXRCdG47XHJcbiAgICB9XHJcblxyXG4gICAgLm1vcmVCdG4ge1xyXG4gICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYXZhdGFyIHtcclxuICAgIHdpZHRoOiAxMnJlbTtcclxuICAgIGhlaWdodDogMTJyZW07XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHJcbiAgICAmX19ub3RpY2Uge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgfVxyXG4gICAgLmFkZC1waG90byB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgYm90dG9tOiA1cHg7XHJcbiAgICAgIHJpZ2h0OiA1cHg7XHJcbiAgICAgIGZpbHRlcjogY29udHJhc3QoMC41KTtcclxuICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAubWF0ZXJpYWwtaWNvbnMge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvdHRvbTogMTElO1xyXG4gICAgICByaWdodDogLTMlO1xyXG4gICAgICBjb2xvcjogIzIyNDE3NztcclxuICAgICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICB3aWR0aDogMi40cmVtO1xyXG4gICAgICBoZWlnaHQ6IDIuNHJlbTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmluZm9ybWF0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICAucm93IHtcclxuICAgICAgbWFyZ2luOiAxZW0gMGVtO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuaW5wdXQtdGV4dCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgZm9udC1mYW1pbHk6IFNlZ29lIFVJO1xyXG4gICAgICBjb2xvcjogIzljYWFjMjtcclxuICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pbnB1dCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDAuMXB4IHNvbGlkICM5Y2FhYzI7XHJcbiAgICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgIGNvbG9yOiAjMjI0MTc3O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBmb250LWZhbWlseTogU2Vnb2UgVUk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmdlbmRlcl9fZm9ybSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGNvbG9yOiAjMjI0MTc3O1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBTZWdvZSBVSTtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICYtbGFiZWwge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG5cclxuICAgICAgICAuZ2VuZGVyIHtcclxuICAgICAgICAgIGNvbG9yOiAjMjI0MTc3O1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgd2lkdGg6IHVuc2V0O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnJlcG9ydCB7XHJcbiAgICAmX190b3RhbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweHNzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbWF0LXRhYi1ncm91cCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMCAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLm92ZXJsYXlTaWduIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogOTIlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcblxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcblxyXG4gICAgICAud3JhcHBlciB7XHJcbiAgICAgICAgcGFkZGluZzogMnJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjOWU5ZTllMGY7XHJcbiAgICAgICAgYm94LXNoYWRvdzogcmdiKDUwIDUwIDkzIC8gMjUlKSAwcHggMnB4IDVweCAtMXB4LFxyXG4gICAgICAgICAgcmdiKDAgMCAwIC8gMzAlKSAwcHggMXB4IDNweCAtMXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcblxyXG4gICAgICAgIC5vdmVybGF5U2lnbl9fdGl0bGUge1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYWN0aW9uX193cmFwcGVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgIC5hY3Rpb25CdG4ge1xyXG4gICAgICAgICAgICBtYXJnaW46IDEuNXJlbSAwO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMC43NXJlbSAzcmVtO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiByZ2IoNTAgNTAgOTMgLyAyNSUpIDBweCA2cHggMTJweCAtMnB4LFxyXG4gICAgICAgICAgICAgIHJnYigwIDAgMCAvIDMwJSkgMHB4IDNweCA3cHggLTNweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnJlZ2lzdGVyX193cmFwcGVyIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
    return ProfileComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.scss']
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }, { type: _login_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] }, { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"] }]; }, null); })();


/***/ }),

/***/ "wZkO":
/*!**********************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js ***!
  \**********************************************************************/
/*! exports provided: MAT_TABS_CONFIG, MAT_TAB_GROUP, MatInkBar, MatTab, MatTabBody, MatTabBodyPortal, MatTabChangeEvent, MatTabContent, MatTabGroup, MatTabHeader, MatTabLabel, MatTabLabelWrapper, MatTabLink, MatTabNav, MatTabsModule, _MAT_INK_BAR_POSITIONER, _MatTabBodyBase, _MatTabGroupBase, _MatTabHeaderBase, _MatTabLinkBase, _MatTabNavBase, matTabsAnimations, ɵangular_material_src_material_tabs_tabs_a, ɵangular_material_src_material_tabs_tabs_b, ɵangular_material_src_material_tabs_tabs_c, ɵangular_material_src_material_tabs_tabs_d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_TABS_CONFIG", function() { return MAT_TABS_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_TAB_GROUP", function() { return MAT_TAB_GROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatInkBar", function() { return MatInkBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTab", function() { return MatTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTabBody", function() { return MatTabBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTabBodyPortal", function() { return MatTabBodyPortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTabChangeEvent", function() { return MatTabChangeEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTabContent", function() { return MatTabContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTabGroup", function() { return MatTabGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTabHeader", function() { return MatTabHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTabLabel", function() { return MatTabLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTabLabelWrapper", function() { return MatTabLabelWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTabLink", function() { return MatTabLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTabNav", function() { return MatTabNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTabsModule", function() { return MatTabsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MAT_INK_BAR_POSITIONER", function() { return _MAT_INK_BAR_POSITIONER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatTabBodyBase", function() { return _MatTabBodyBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatTabGroupBase", function() { return _MatTabGroupBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatTabHeaderBase", function() { return _MatTabHeaderBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatTabLinkBase", function() { return _MatTabLinkBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatTabNavBase", function() { return _MatTabNavBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matTabsAnimations", function() { return matTabsAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_tabs_tabs_a", function() { return _MAT_INK_BAR_POSITIONER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_tabs_tabs_b", function() { return MAT_TAB_LABEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_tabs_tabs_c", function() { return MAT_TAB_CONTENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_tabs_tabs_d", function() { return MatPaginatedTabHeader; });
/* harmony import */ var C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "JX7q");
/* harmony import */ var C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "KQm4");
/* harmony import */ var C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/get */ "ReuC");
/* harmony import */ var C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "foSv");
/* harmony import */ var C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "Ji7U");
/* harmony import */ var C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "LK+K");
/* harmony import */ var C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/observers */ "GU7r");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");























/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Injection token for the MatInkBar's Positioner. */











function MatTab_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵprojection"](0);
  }
}

var _c0 = ["*"];

function MatTabBody_ng_template_2_Template(rf, ctx) {}

var _c1 = function _c1(a0) {
  return {
    animationDuration: a0
  };
};

var _c2 = function _c2(a0, a1) {
  return {
    value: a0,
    params: a1
  };
};

var _c3 = ["tabBodyWrapper"];
var _c4 = ["tabHeader"];

function MatTabGroup_div_2_ng_template_2_ng_template_0_Template(rf, ctx) {}

function MatTabGroup_div_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, MatTabGroup_div_2_ng_template_2_ng_template_0_Template, 0, 0, "ng-template", 9);
  }

  if (rf & 2) {
    var tab_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("cdkPortalOutlet", tab_r4.templateLabel);
  }
}

function MatTabGroup_div_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](0);
  }

  if (rf & 2) {
    var tab_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](tab_r4.textLabel);
  }
}

function MatTabGroup_div_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function MatTabGroup_div_2_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r12);
      var tab_r4 = ctx.$implicit;
      var i_r5 = ctx.index;
      var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

      var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](1);

      return ctx_r11._handleClick(tab_r4, _r0, i_r5);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, MatTabGroup_div_2_ng_template_2_Template, 1, 1, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, MatTabGroup_div_2_ng_template_3_Template, 1, 1, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var tab_r4 = ctx.$implicit;
    var i_r5 = ctx.index;
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("mat-tab-label-active", ctx_r1.selectedIndex == i_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("id", ctx_r1._getTabLabelId(i_r5))("disabled", tab_r4.disabled)("matRippleDisabled", tab_r4.disabled || ctx_r1.disableRipple);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("tabIndex", ctx_r1._getTabIndex(tab_r4, i_r5))("aria-posinset", i_r5 + 1)("aria-setsize", ctx_r1._tabs.length)("aria-controls", ctx_r1._getTabContentId(i_r5))("aria-selected", ctx_r1.selectedIndex == i_r5)("aria-label", tab_r4.ariaLabel || null)("aria-labelledby", !tab_r4.ariaLabel && tab_r4.ariaLabelledby ? tab_r4.ariaLabelledby : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", tab_r4.templateLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !tab_r4.templateLabel);
  }
}

function MatTabGroup_mat_tab_body_5_Template(rf, ctx) {
  if (rf & 1) {
    var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-tab-body", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("_onCentered", function MatTabGroup_mat_tab_body_5_Template_mat_tab_body__onCentered_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r16);
      var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r15._removeTabBodyWrapperHeight();
    })("_onCentering", function MatTabGroup_mat_tab_body_5_Template_mat_tab_body__onCentering_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r16);
      var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r17._setTabBodyWrapperHeight($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var tab_r13 = ctx.$implicit;
    var i_r14 = ctx.index;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("mat-tab-body-active", ctx_r3.selectedIndex == i_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("id", ctx_r3._getTabContentId(i_r14))("content", tab_r13.content)("position", tab_r13.position)("origin", tab_r13.origin)("animationDuration", ctx_r3.animationDuration);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("aria-labelledby", ctx_r3._getTabLabelId(i_r14));
  }
}

var _c5 = ["tabListContainer"];
var _c6 = ["tabList"];
var _c7 = ["nextPaginator"];
var _c8 = ["previousPaginator"];
var _c9 = ["mat-tab-nav-bar", ""];

var _MAT_INK_BAR_POSITIONER = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["InjectionToken"]('MatInkBarPositioner', {
  providedIn: 'root',
  factory: _MAT_INK_BAR_POSITIONER_FACTORY
});
/**
 * The default positioner function for the MatInkBar.
 * @docs-private
 */


function _MAT_INK_BAR_POSITIONER_FACTORY() {
  var method = function method(element) {
    return {
      left: element ? (element.offsetLeft || 0) + 'px' : '0',
      width: element ? (element.offsetWidth || 0) + 'px' : '0'
    };
  };

  return method;
}
/**
 * The ink-bar is used to display and animate the line underneath the current active tab label.
 * @docs-private
 */


var MatInkBar = /*#__PURE__*/function () {
  function MatInkBar(_elementRef, _ngZone, _inkBarPositioner, _animationMode) {
    Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatInkBar);

    this._elementRef = _elementRef;
    this._ngZone = _ngZone;
    this._inkBarPositioner = _inkBarPositioner;
    this._animationMode = _animationMode;
  }
  /**
   * Calculates the styles from the provided element in order to align the ink-bar to that element.
   * Shows the ink bar if previously set as hidden.
   * @param element
   */


  Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(MatInkBar, [{
    key: "alignToElement",
    value: function alignToElement(element) {
      var _this = this;

      this.show();

      if (typeof requestAnimationFrame !== 'undefined') {
        this._ngZone.runOutsideAngular(function () {
          requestAnimationFrame(function () {
            return _this._setStyles(element);
          });
        });
      } else {
        this._setStyles(element);
      }
    }
    /** Shows the ink bar. */

  }, {
    key: "show",
    value: function show() {
      this._elementRef.nativeElement.style.visibility = 'visible';
    }
    /** Hides the ink bar. */

  }, {
    key: "hide",
    value: function hide() {
      this._elementRef.nativeElement.style.visibility = 'hidden';
    }
    /**
     * Sets the proper styles to the ink bar element.
     * @param element
     */

  }, {
    key: "_setStyles",
    value: function _setStyles(element) {
      var positions = this._inkBarPositioner(element);

      var inkBar = this._elementRef.nativeElement;
      inkBar.style.left = positions.left;
      inkBar.style.width = positions.width;
    }
  }]);

  return MatInkBar;
}();

MatInkBar.ɵfac = function MatInkBar_Factory(t) {
  return new (t || MatInkBar)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_MAT_INK_BAR_POSITIONER), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ANIMATION_MODULE_TYPE"], 8));
};

MatInkBar.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineDirective"]({
  type: MatInkBar,
  selectors: [["mat-ink-bar"]],
  hostAttrs: [1, "mat-ink-bar"],
  hostVars: 2,
  hostBindings: function MatInkBar_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
    }
  }
});

MatInkBar.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["NgZone"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
      args: [_MAT_INK_BAR_POSITIONER]
    }]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
      args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ANIMATION_MODULE_TYPE"]]
    }]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵsetClassMetadata"](MatInkBar, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Directive"],
    args: [{
      selector: 'mat-ink-bar',
      host: {
        'class': 'mat-ink-bar',
        '[class._mat-animation-noopable]': "_animationMode === 'NoopAnimations'"
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["NgZone"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
        args: [_MAT_INK_BAR_POSITIONER]
      }]
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
        args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ANIMATION_MODULE_TYPE"]]
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injection token that can be used to reference instances of `MatTabContent`. It serves as
 * alternative token to the actual `MatTabContent` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */


var MAT_TAB_CONTENT = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["InjectionToken"]('MatTabContent');
/** Decorates the `ng-template` tags and reads out the template from it. */

var MatTabContent = function MatTabContent(
/** Content for the tab. */
template) {
  Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatTabContent);

  this.template = template;
};

MatTabContent.ɵfac = function MatTabContent_Factory(t) {
  return new (t || MatTabContent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["TemplateRef"]));
};

MatTabContent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineDirective"]({
  type: MatTabContent,
  selectors: [["", "matTabContent", ""]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵProvidersFeature"]([{
    provide: MAT_TAB_CONTENT,
    useExisting: MatTabContent
  }])]
});

MatTabContent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["TemplateRef"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵsetClassMetadata"](MatTabContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Directive"],
    args: [{
      selector: '[matTabContent]',
      providers: [{
        provide: MAT_TAB_CONTENT,
        useExisting: MatTabContent
      }]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["TemplateRef"]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injection token that can be used to reference instances of `MatTabLabel`. It serves as
 * alternative token to the actual `MatTabLabel` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */


var MAT_TAB_LABEL = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["InjectionToken"]('MatTabLabel');
/** Used to flag tab labels for use with the portal directive */

var MatTabLabel = /*#__PURE__*/function (_CdkPortal) {
  Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MatTabLabel, _CdkPortal);

  var _super = Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(MatTabLabel);

  function MatTabLabel() {
    Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatTabLabel);

    return _super.apply(this, arguments);
  }

  return MatTabLabel;
}(_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__["CdkPortal"]);

MatTabLabel.ɵfac = function MatTabLabel_Factory(t) {
  return ɵMatTabLabel_BaseFactory(t || MatTabLabel);
};

MatTabLabel.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineDirective"]({
  type: MatTabLabel,
  selectors: [["", "mat-tab-label", ""], ["", "matTabLabel", ""]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵProvidersFeature"]([{
    provide: MAT_TAB_LABEL,
    useExisting: MatTabLabel
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]]
});
var ɵMatTabLabel_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetInheritedFactory"](MatTabLabel);
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵsetClassMetadata"](MatTabLabel, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Directive"],
    args: [{
      selector: '[mat-tab-label], [matTabLabel]',
      providers: [{
        provide: MAT_TAB_LABEL,
        useExisting: MatTabLabel
      }]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Boilerplate for applying mixins to MatTab.

/** @docs-private */


var MatTabBase = function MatTabBase() {
  Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatTabBase);
};

var _MatTabMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_13__["mixinDisabled"])(MatTabBase);
/**
 * Used to provide a tab group to a tab without causing a circular dependency.
 * @docs-private
 */


var MAT_TAB_GROUP = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["InjectionToken"]('MAT_TAB_GROUP');

var MatTab = /*#__PURE__*/function (_MatTabMixinBase2) {
  Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MatTab, _MatTabMixinBase2);

  var _super2 = Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(MatTab);

  function MatTab(_viewContainerRef, _closestTabGroup) {
    var _this2;

    Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatTab);

    _this2 = _super2.call(this);
    _this2._viewContainerRef = _viewContainerRef;
    _this2._closestTabGroup = _closestTabGroup;
    /** Plain text label for the tab, used when there is no template label. */

    _this2.textLabel = '';
    /** Portal that will be the hosted content of the tab */

    _this2._contentPortal = null;
    /** Emits whenever the internal state of the tab changes. */

    _this2._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_15__["Subject"]();
    /**
     * The relatively indexed position where 0 represents the center, negative is left, and positive
     * represents the right.
     */

    _this2.position = null;
    /**
     * The initial relatively index origin of the tab if it was created and selected after there
     * was already a selected tab. Provides context of what position the tab should originate from.
     */

    _this2.origin = null;
    /**
     * Whether the tab is currently active.
     */

    _this2.isActive = false;
    return _this2;
  }
  /** Content for the tab label given by `<ng-template mat-tab-label>`. */


  Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(MatTab, [{
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (changes.hasOwnProperty('textLabel') || changes.hasOwnProperty('disabled')) {
        this._stateChanges.next();
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._stateChanges.complete();
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      this._contentPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__["TemplatePortal"](this._explicitContent || this._implicitContent, this._viewContainerRef);
    }
    /**
     * This has been extracted to a util because of TS 4 and VE.
     * View Engine doesn't support property rename inheritance.
     * TS 4.0 doesn't allow properties to override accessors or vice-versa.
     * @docs-private
     */

  }, {
    key: "_setTemplateLabelInput",
    value: function _setTemplateLabelInput(value) {
      // Only update the templateLabel via query if there is actually
      // a MatTabLabel found. This works around an issue where a user may have
      // manually set `templateLabel` during creation mode, which would then get clobbered
      // by `undefined` when this query resolves.
      if (value) {
        this._templateLabel = value;
      }
    }
  }, {
    key: "templateLabel",
    get: function get() {
      return this._templateLabel;
    },
    set: function set(value) {
      this._setTemplateLabelInput(value);
    }
    /** @docs-private */

  }, {
    key: "content",
    get: function get() {
      return this._contentPortal;
    }
  }]);

  return MatTab;
}(_MatTabMixinBase);

MatTab.ɵfac = function MatTab_Factory(t) {
  return new (t || MatTab)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](MAT_TAB_GROUP));
};

MatTab.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: MatTab,
  selectors: [["mat-tab"]],
  contentQueries: function MatTab_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵcontentQuery"](dirIndex, MAT_TAB_LABEL, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstaticContentQuery"](dirIndex, MAT_TAB_CONTENT, true, _angular_core__WEBPACK_IMPORTED_MODULE_12__["TemplateRef"]);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.templateLabel = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx._explicitContent = _t.first);
    }
  },
  viewQuery: function MatTab_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstaticViewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["TemplateRef"], true);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx._implicitContent = _t.first);
    }
  },
  inputs: {
    disabled: "disabled",
    textLabel: ["label", "textLabel"],
    ariaLabel: ["aria-label", "ariaLabel"],
    ariaLabelledby: ["aria-labelledby", "ariaLabelledby"]
  },
  exportAs: ["matTab"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function MatTab_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, MatTab_ng_template_0_Template, 1, 0, "ng-template");
    }
  },
  encapsulation: 2
});

MatTab.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewContainerRef"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
      args: [MAT_TAB_GROUP]
    }]
  }];
};

MatTab.propDecorators = {
  templateLabel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ContentChild"],
    args: [MAT_TAB_LABEL]
  }],
  _explicitContent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ContentChild"],
    args: [MAT_TAB_CONTENT, {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_12__["TemplateRef"],
      static: true
    }]
  }],
  _implicitContent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
    args: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["TemplateRef"], {
      static: true
    }]
  }],
  textLabel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"],
    args: ['label']
  }],
  ariaLabel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"],
    args: ['aria-label']
  }],
  ariaLabelledby: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"],
    args: ['aria-labelledby']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵsetClassMetadata"](MatTab, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Component"],
    args: [{
      selector: 'mat-tab',
      template: "<!-- Create a template for the content of the <mat-tab> so that we can grab a reference to this\n    TemplateRef and use it in a Portal to render the tab content in the appropriate place in the\n    tab-group. -->\n<ng-template><ng-content></ng-content></ng-template>\n",
      inputs: ['disabled'],
      // tslint:disable-next-line:validate-decorators
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectionStrategy"].Default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewEncapsulation"].None,
      exportAs: 'matTab'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewContainerRef"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
        args: [MAT_TAB_GROUP]
      }]
    }];
  }, {
    textLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"],
      args: ['label']
    }],
    templateLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ContentChild"],
      args: [MAT_TAB_LABEL]
    }],
    _explicitContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ContentChild"],
      args: [MAT_TAB_CONTENT, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_12__["TemplateRef"],
        static: true
      }]
    }],
    _implicitContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["TemplateRef"], {
        static: true
      }]
    }],
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"],
      args: ['aria-label']
    }],
    ariaLabelledby: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"],
      args: ['aria-labelledby']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Animations used by the Material tabs.
 * @docs-private
 */


var matTabsAnimations = {
  /** Animation translates a tab along the X axis. */
  translateTab: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["trigger"])('translateTab', [// Note: transitions to `none` instead of 0, because some browsers might blur the content.
  Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["state"])('center, void, left-origin-center, right-origin-center', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["style"])({
    transform: 'none'
  })), // If the tab is either on the left or right, we additionally add a `min-height` of 1px
  // in order to ensure that the element has a height before its state changes. This is
  // necessary because Chrome does seem to skip the transition in RTL mode if the element does
  // not have a static height and is not rendered. See related issue: #9465
  Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["state"])('left', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["style"])({
    transform: 'translate3d(-100%, 0, 0)',
    minHeight: '1px'
  })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["state"])('right', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["style"])({
    transform: 'translate3d(100%, 0, 0)',
    minHeight: '1px'
  })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["transition"])('* => left, * => right, left => center, right => center', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["animate"])('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["transition"])('void => left-origin-center', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["style"])({
    transform: 'translate3d(-100%, 0, 0)'
  }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["animate"])('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["transition"])('void => right-origin-center', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["style"])({
    transform: 'translate3d(100%, 0, 0)'
  }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["animate"])('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')])])
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * The portal host directive for the contents of the tab.
 * @docs-private
 */

var MatTabBodyPortal = /*#__PURE__*/function (_CdkPortalOutlet) {
  Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MatTabBodyPortal, _CdkPortalOutlet);

  var _super3 = Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(MatTabBodyPortal);

  function MatTabBodyPortal(componentFactoryResolver, viewContainerRef, _host, _document) {
    var _this3;

    Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatTabBodyPortal);

    _this3 = _super3.call(this, componentFactoryResolver, viewContainerRef, _document);
    _this3._host = _host;
    /** Subscription to events for when the tab body begins centering. */

    _this3._centeringSub = rxjs__WEBPACK_IMPORTED_MODULE_15__["Subscription"].EMPTY;
    /** Subscription to events for when the tab body finishes leaving from center position. */

    _this3._leavingSub = rxjs__WEBPACK_IMPORTED_MODULE_15__["Subscription"].EMPTY;
    return _this3;
  }
  /** Set initial visibility or set up subscription for changing visibility. */


  Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(MatTabBodyPortal, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this4 = this;

      Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MatTabBodyPortal.prototype), "ngOnInit", this).call(this);

      this._centeringSub = this._host._beforeCentering.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["startWith"])(this._host._isCenterPosition(this._host._position))).subscribe(function (isCentering) {
        if (isCentering && !_this4.hasAttached()) {
          _this4.attach(_this4._host._content);
        }
      });
      this._leavingSub = this._host._afterLeavingCenter.subscribe(function () {
        _this4.detach();
      });
    }
    /** Clean up centering subscription. */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MatTabBodyPortal.prototype), "ngOnDestroy", this).call(this);

      this._centeringSub.unsubscribe();

      this._leavingSub.unsubscribe();
    }
  }]);

  return MatTabBodyPortal;
}(_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__["CdkPortalOutlet"]);

MatTabBodyPortal.ɵfac = function MatTabBodyPortal_Factory(t) {
  return new (t || MatTabBodyPortal)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_12__["forwardRef"])(function () {
    return MatTabBody;
  })), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"]));
};

MatTabBodyPortal.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineDirective"]({
  type: MatTabBodyPortal,
  selectors: [["", "matTabBodyHost", ""]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]]
});

MatTabBodyPortal.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ComponentFactoryResolver"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewContainerRef"]
  }, {
    type: MatTabBody,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
      args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_12__["forwardRef"])(function () {
        return MatTabBody;
      })]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"]]
    }]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵsetClassMetadata"](MatTabBodyPortal, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Directive"],
    args: [{
      selector: '[matTabBodyHost]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ComponentFactoryResolver"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewContainerRef"]
    }, {
      type: MatTabBody,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
        args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_12__["forwardRef"])(function () {
          return MatTabBody;
        })]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"]]
      }]
    }];
  }, null);
})();
/**
 * Base class with all of the `MatTabBody` functionality.
 * @docs-private
 */


var _MatTabBodyBase = /*#__PURE__*/function () {
  function _MatTabBodyBase(_elementRef, _dir, changeDetectorRef) {
    var _this5 = this;

    Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, _MatTabBodyBase);

    this._elementRef = _elementRef;
    this._dir = _dir;
    /** Subscription to the directionality change observable. */

    this._dirChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_15__["Subscription"].EMPTY;
    /** Emits when an animation on the tab is complete. */

    this._translateTabComplete = new rxjs__WEBPACK_IMPORTED_MODULE_15__["Subject"]();
    /** Event emitted when the tab begins to animate towards the center as the active tab. */

    this._onCentering = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["EventEmitter"]();
    /** Event emitted before the centering of the tab begins. */

    this._beforeCentering = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["EventEmitter"]();
    /** Event emitted before the centering of the tab begins. */

    this._afterLeavingCenter = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["EventEmitter"]();
    /** Event emitted when the tab completes its animation towards the center. */

    this._onCentered = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["EventEmitter"](true); // Note that the default value will always be overwritten by `MatTabBody`, but we need one
    // anyway to prevent the animations module from throwing an error if the body is used on its own.

    /** Duration for the tab's animation. */

    this.animationDuration = '500ms';

    if (_dir) {
      this._dirChangeSubscription = _dir.change.subscribe(function (dir) {
        _this5._computePositionAnimationState(dir);

        changeDetectorRef.markForCheck();
      });
    } // Ensure that we get unique animation events, because the `.done` callback can get
    // invoked twice in some browsers. See https://github.com/angular/angular/issues/24084.


    this._translateTabComplete.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["distinctUntilChanged"])(function (x, y) {
      return x.fromState === y.fromState && x.toState === y.toState;
    })).subscribe(function (event) {
      // If the transition to the center is complete, emit an event.
      if (_this5._isCenterPosition(event.toState) && _this5._isCenterPosition(_this5._position)) {
        _this5._onCentered.emit();
      }

      if (_this5._isCenterPosition(event.fromState) && !_this5._isCenterPosition(_this5._position)) {
        _this5._afterLeavingCenter.emit();
      }
    });
  }
  /** The shifted index position of the tab body, where zero represents the active center tab. */


  Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(_MatTabBodyBase, [{
    key: "ngOnInit",

    /**
     * After initialized, check if the content is centered and has an origin. If so, set the
     * special position states that transition the tab from the left or right before centering.
     */
    value: function ngOnInit() {
      if (this._position == 'center' && this.origin != null) {
        this._position = this._computePositionFromOrigin(this.origin);
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._dirChangeSubscription.unsubscribe();

      this._translateTabComplete.complete();
    }
  }, {
    key: "_onTranslateTabStarted",
    value: function _onTranslateTabStarted(event) {
      var isCentering = this._isCenterPosition(event.toState);

      this._beforeCentering.emit(isCentering);

      if (isCentering) {
        this._onCentering.emit(this._elementRef.nativeElement.clientHeight);
      }
    }
    /** The text direction of the containing app. */

  }, {
    key: "_getLayoutDirection",
    value: function _getLayoutDirection() {
      return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
    }
    /** Whether the provided position state is considered center, regardless of origin. */

  }, {
    key: "_isCenterPosition",
    value: function _isCenterPosition(position) {
      return position == 'center' || position == 'left-origin-center' || position == 'right-origin-center';
    }
    /** Computes the position state that will be used for the tab-body animation trigger. */

  }, {
    key: "_computePositionAnimationState",
    value: function _computePositionAnimationState() {
      var dir = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._getLayoutDirection();

      if (this._positionIndex < 0) {
        this._position = dir == 'ltr' ? 'left' : 'right';
      } else if (this._positionIndex > 0) {
        this._position = dir == 'ltr' ? 'right' : 'left';
      } else {
        this._position = 'center';
      }
    }
    /**
     * Computes the position state based on the specified origin position. This is used if the
     * tab is becoming visible immediately after creation.
     */

  }, {
    key: "_computePositionFromOrigin",
    value: function _computePositionFromOrigin(origin) {
      var dir = this._getLayoutDirection();

      if (dir == 'ltr' && origin <= 0 || dir == 'rtl' && origin > 0) {
        return 'left-origin-center';
      }

      return 'right-origin-center';
    }
  }, {
    key: "position",
    set: function set(position) {
      this._positionIndex = position;

      this._computePositionAnimationState();
    }
  }]);

  return _MatTabBodyBase;
}();

_MatTabBodyBase.ɵfac = function _MatTabBodyBase_Factory(t) {
  return new (t || _MatTabBodyBase)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]));
};

_MatTabBodyBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineDirective"]({
  type: _MatTabBodyBase,
  inputs: {
    animationDuration: "animationDuration",
    position: "position",
    _content: ["content", "_content"],
    origin: "origin"
  },
  outputs: {
    _onCentering: "_onCentering",
    _beforeCentering: "_beforeCentering",
    _afterLeavingCenter: "_afterLeavingCenter",
    _onCentered: "_onCentered"
  }
});

_MatTabBodyBase.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__["Directionality"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]
  }];
};

_MatTabBodyBase.propDecorators = {
  _onCentering: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
  }],
  _beforeCentering: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
  }],
  _afterLeavingCenter: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
  }],
  _onCentered: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
  }],
  _content: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"],
    args: ['content']
  }],
  origin: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  animationDuration: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  position: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵsetClassMetadata"](_MatTabBodyBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Directive"]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__["Directionality"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]
    }];
  }, {
    _onCentering: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
    }],
    _beforeCentering: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
    }],
    _afterLeavingCenter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
    }],
    _onCentered: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
    }],
    animationDuration: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    _content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"],
      args: ['content']
    }],
    origin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }]
  });
})();
/**
 * Wrapper for the contents of a tab.
 * @docs-private
 */


var MatTabBody = /*#__PURE__*/function (_MatTabBodyBase2) {
  Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MatTabBody, _MatTabBodyBase2);

  var _super4 = Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(MatTabBody);

  function MatTabBody(elementRef, dir, changeDetectorRef) {
    Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatTabBody);

    return _super4.call(this, elementRef, dir, changeDetectorRef);
  }

  return MatTabBody;
}(_MatTabBodyBase);

MatTabBody.ɵfac = function MatTabBody_Factory(t) {
  return new (t || MatTabBody)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]));
};

MatTabBody.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: MatTabBody,
  selectors: [["mat-tab-body"]],
  viewQuery: function MatTabBody_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__["PortalHostDirective"], true);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx._portalHost = _t.first);
    }
  },
  hostAttrs: [1, "mat-tab-body"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]],
  decls: 3,
  vars: 6,
  consts: [[1, "mat-tab-body-content"], ["content", ""], ["matTabBodyHost", ""]],
  template: function MatTabBody_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("@translateTab.start", function MatTabBody_Template_div_animation_translateTab_start_0_listener($event) {
        return ctx._onTranslateTabStarted($event);
      })("@translateTab.done", function MatTabBody_Template_div_animation_translateTab_done_0_listener($event) {
        return ctx._translateTabComplete.next($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, MatTabBody_ng_template_2_Template, 0, 0, "ng-template", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("@translateTab", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction2"](3, _c2, ctx._position, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](1, _c1, ctx.animationDuration)));
    }
  },
  directives: [MatTabBodyPortal],
  styles: [".mat-tab-body-content{height:100%;overflow:auto}.mat-tab-group-dynamic-height .mat-tab-body-content{overflow:hidden}\n"],
  encapsulation: 2,
  data: {
    animation: [matTabsAnimations.translateTab]
  }
});

MatTabBody.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__["Directionality"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]
  }];
};

MatTabBody.propDecorators = {
  _portalHost: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
    args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__["PortalHostDirective"]]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵsetClassMetadata"](MatTabBody, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Component"],
    args: [{
      selector: 'mat-tab-body',
      template: "<div class=\"mat-tab-body-content\" #content\n     [@translateTab]=\"{\n        value: _position,\n        params: {animationDuration: animationDuration}\n     }\"\n     (@translateTab.start)=\"_onTranslateTabStarted($event)\"\n     (@translateTab.done)=\"_translateTabComplete.next($event)\">\n  <ng-template matTabBodyHost></ng-template>\n</div>\n",
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewEncapsulation"].None,
      // tslint:disable-next-line:validate-decorators
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectionStrategy"].Default,
      animations: [matTabsAnimations.translateTab],
      host: {
        'class': 'mat-tab-body'
      },
      styles: [".mat-tab-body-content{height:100%;overflow:auto}.mat-tab-group-dynamic-height .mat-tab-body-content{overflow:hidden}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__["Directionality"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]
    }];
  }, {
    _portalHost: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
      args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__["PortalHostDirective"]]
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Injection token that can be used to provide the default options the tabs module. */


var MAT_TABS_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["InjectionToken"]('MAT_TABS_CONFIG');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Used to generate unique ID's for each tab component */

var nextId = 0;
/** A simple change event emitted on focus or selection changes. */

var MatTabChangeEvent = function MatTabChangeEvent() {
  Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatTabChangeEvent);
}; // Boilerplate for applying mixins to MatTabGroup.

/** @docs-private */


var MatTabGroupMixinBase = function MatTabGroupMixinBase(_elementRef) {
  Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatTabGroupMixinBase);

  this._elementRef = _elementRef;
};

var _MatTabGroupMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_13__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_13__["mixinDisableRipple"])(MatTabGroupMixinBase), 'primary');
/**
 * Base class with all of the `MatTabGroupBase` functionality.
 * @docs-private
 */


var _MatTabGroupBase = /*#__PURE__*/function (_MatTabGroupMixinBase2) {
  Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(_MatTabGroupBase, _MatTabGroupMixinBase2);

  var _super5 = Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(_MatTabGroupBase);

  function _MatTabGroupBase(elementRef, _changeDetectorRef, defaultConfig, _animationMode) {
    var _this6;

    Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, _MatTabGroupBase);

    _this6 = _super5.call(this, elementRef);
    _this6._changeDetectorRef = _changeDetectorRef;
    _this6._animationMode = _animationMode;
    /** All of the tabs that belong to the group. */

    _this6._tabs = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["QueryList"]();
    /** The tab index that should be selected after the content has been checked. */

    _this6._indexToSelect = 0;
    /** Snapshot of the height of the tab body wrapper before another tab is activated. */

    _this6._tabBodyWrapperHeight = 0;
    /** Subscription to tabs being added/removed. */

    _this6._tabsSubscription = rxjs__WEBPACK_IMPORTED_MODULE_15__["Subscription"].EMPTY;
    /** Subscription to changes in the tab labels. */

    _this6._tabLabelSubscription = rxjs__WEBPACK_IMPORTED_MODULE_15__["Subscription"].EMPTY;
    _this6._selectedIndex = null;
    /** Position of the tab header. */

    _this6.headerPosition = 'above';
    /** Output to enable support for two-way binding on `[(selectedIndex)]` */

    _this6.selectedIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["EventEmitter"]();
    /** Event emitted when focus has changed within a tab group. */

    _this6.focusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["EventEmitter"]();
    /** Event emitted when the body animation has completed */

    _this6.animationDone = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["EventEmitter"]();
    /** Event emitted when the tab selection has changed. */

    _this6.selectedTabChange = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["EventEmitter"](true);
    _this6._groupId = nextId++;
    _this6.animationDuration = defaultConfig && defaultConfig.animationDuration ? defaultConfig.animationDuration : '500ms';
    _this6.disablePagination = defaultConfig && defaultConfig.disablePagination != null ? defaultConfig.disablePagination : false;
    _this6.dynamicHeight = defaultConfig && defaultConfig.dynamicHeight != null ? defaultConfig.dynamicHeight : false;
    return _this6;
  }
  /** Whether the tab group should grow to the size of the active tab. */


  Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(_MatTabGroupBase, [{
    key: "ngAfterContentChecked",

    /**
     * After the content is checked, this component knows what tabs have been defined
     * and what the selected index should be. This is where we can know exactly what position
     * each tab should be in according to the new selected index, and additionally we know how
     * a new selected tab should transition in (from the left or right).
     */
    value: function ngAfterContentChecked() {
      var _this7 = this;

      // Don't clamp the `indexToSelect` immediately in the setter because it can happen that
      // the amount of tabs changes before the actual change detection runs.
      var indexToSelect = this._indexToSelect = this._clampTabIndex(this._indexToSelect); // If there is a change in selected index, emit a change event. Should not trigger if
      // the selected index has not yet been initialized.


      if (this._selectedIndex != indexToSelect) {
        var isFirstRun = this._selectedIndex == null;

        if (!isFirstRun) {
          this.selectedTabChange.emit(this._createChangeEvent(indexToSelect));
        } // Changing these values after change detection has run
        // since the checked content may contain references to them.


        Promise.resolve().then(function () {
          _this7._tabs.forEach(function (tab, index) {
            return tab.isActive = index === indexToSelect;
          });

          if (!isFirstRun) {
            _this7.selectedIndexChange.emit(indexToSelect);
          }
        });
      } // Setup the position for each tab and optionally setup an origin on the next selected tab.


      this._tabs.forEach(function (tab, index) {
        tab.position = index - indexToSelect; // If there is already a selected tab, then set up an origin for the next selected tab
        // if it doesn't have one already.

        if (_this7._selectedIndex != null && tab.position == 0 && !tab.origin) {
          tab.origin = indexToSelect - _this7._selectedIndex;
        }
      });

      if (this._selectedIndex !== indexToSelect) {
        this._selectedIndex = indexToSelect;

        this._changeDetectorRef.markForCheck();
      }
    }
  }, {
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      var _this8 = this;

      this._subscribeToAllTabChanges();

      this._subscribeToTabLabels(); // Subscribe to changes in the amount of tabs, in order to be
      // able to re-render the content as new tabs are added or removed.


      this._tabsSubscription = this._tabs.changes.subscribe(function () {
        var indexToSelect = _this8._clampTabIndex(_this8._indexToSelect); // Maintain the previously-selected tab if a new tab is added or removed and there is no
        // explicit change that selects a different tab.


        if (indexToSelect === _this8._selectedIndex) {
          var tabs = _this8._tabs.toArray();

          for (var i = 0; i < tabs.length; i++) {
            if (tabs[i].isActive) {
              // Assign both to the `_indexToSelect` and `_selectedIndex` so we don't fire a changed
              // event, otherwise the consumer may end up in an infinite loop in some edge cases like
              // adding a tab within the `selectedIndexChange` event.
              _this8._indexToSelect = _this8._selectedIndex = i;
              break;
            }
          }
        }

        _this8._changeDetectorRef.markForCheck();
      });
    }
    /** Listens to changes in all of the tabs. */

  }, {
    key: "_subscribeToAllTabChanges",
    value: function _subscribeToAllTabChanges() {
      var _this9 = this;

      // Since we use a query with `descendants: true` to pick up the tabs, we may end up catching
      // some that are inside of nested tab groups. We filter them out manually by checking that
      // the closest group to the tab is the current one.
      this._allTabs.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["startWith"])(this._allTabs)).subscribe(function (tabs) {
        _this9._tabs.reset(tabs.filter(function (tab) {
          return tab._closestTabGroup === _this9;
        }));

        _this9._tabs.notifyOnChanges();
      });
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._tabs.destroy();

      this._tabsSubscription.unsubscribe();

      this._tabLabelSubscription.unsubscribe();
    }
    /** Re-aligns the ink bar to the selected tab element. */

  }, {
    key: "realignInkBar",
    value: function realignInkBar() {
      if (this._tabHeader) {
        this._tabHeader._alignInkBarToSelectedTab();
      }
    }
  }, {
    key: "_focusChanged",
    value: function _focusChanged(index) {
      this.focusChange.emit(this._createChangeEvent(index));
    }
  }, {
    key: "_createChangeEvent",
    value: function _createChangeEvent(index) {
      var event = new MatTabChangeEvent();
      event.index = index;

      if (this._tabs && this._tabs.length) {
        event.tab = this._tabs.toArray()[index];
      }

      return event;
    }
    /**
     * Subscribes to changes in the tab labels. This is needed, because the @Input for the label is
     * on the MatTab component, whereas the data binding is inside the MatTabGroup. In order for the
     * binding to be updated, we need to subscribe to changes in it and trigger change detection
     * manually.
     */

  }, {
    key: "_subscribeToTabLabels",
    value: function _subscribeToTabLabels() {
      var _this10 = this;

      if (this._tabLabelSubscription) {
        this._tabLabelSubscription.unsubscribe();
      }

      this._tabLabelSubscription = rxjs__WEBPACK_IMPORTED_MODULE_15__["merge"].apply(void 0, Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(this._tabs.map(function (tab) {
        return tab._stateChanges;
      }))).subscribe(function () {
        return _this10._changeDetectorRef.markForCheck();
      });
    }
    /** Clamps the given index to the bounds of 0 and the tabs length. */

  }, {
    key: "_clampTabIndex",
    value: function _clampTabIndex(index) {
      // Note the `|| 0`, which ensures that values like NaN can't get through
      // and which would otherwise throw the component into an infinite loop
      // (since Math.max(NaN, 0) === NaN).
      return Math.min(this._tabs.length - 1, Math.max(index || 0, 0));
    }
    /** Returns a unique id for each tab label element */

  }, {
    key: "_getTabLabelId",
    value: function _getTabLabelId(i) {
      return "mat-tab-label-".concat(this._groupId, "-").concat(i);
    }
    /** Returns a unique id for each tab content element */

  }, {
    key: "_getTabContentId",
    value: function _getTabContentId(i) {
      return "mat-tab-content-".concat(this._groupId, "-").concat(i);
    }
    /**
     * Sets the height of the body wrapper to the height of the activating tab if dynamic
     * height property is true.
     */

  }, {
    key: "_setTabBodyWrapperHeight",
    value: function _setTabBodyWrapperHeight(tabHeight) {
      if (!this._dynamicHeight || !this._tabBodyWrapperHeight) {
        return;
      }

      var wrapper = this._tabBodyWrapper.nativeElement;
      wrapper.style.height = this._tabBodyWrapperHeight + 'px'; // This conditional forces the browser to paint the height so that
      // the animation to the new height can have an origin.

      if (this._tabBodyWrapper.nativeElement.offsetHeight) {
        wrapper.style.height = tabHeight + 'px';
      }
    }
    /** Removes the height of the tab body wrapper. */

  }, {
    key: "_removeTabBodyWrapperHeight",
    value: function _removeTabBodyWrapperHeight() {
      var wrapper = this._tabBodyWrapper.nativeElement;
      this._tabBodyWrapperHeight = wrapper.clientHeight;
      wrapper.style.height = '';
      this.animationDone.emit();
    }
    /** Handle click events, setting new selected index if appropriate. */

  }, {
    key: "_handleClick",
    value: function _handleClick(tab, tabHeader, index) {
      if (!tab.disabled) {
        this.selectedIndex = tabHeader.focusIndex = index;
      }
    }
    /** Retrieves the tabindex for the tab. */

  }, {
    key: "_getTabIndex",
    value: function _getTabIndex(tab, idx) {
      if (tab.disabled) {
        return null;
      }

      return this.selectedIndex === idx ? 0 : -1;
    }
  }, {
    key: "dynamicHeight",
    get: function get() {
      return this._dynamicHeight;
    },
    set: function set(value) {
      this._dynamicHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_19__["coerceBooleanProperty"])(value);
    }
    /** The index of the active tab. */

  }, {
    key: "selectedIndex",
    get: function get() {
      return this._selectedIndex;
    },
    set: function set(value) {
      this._indexToSelect = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_19__["coerceNumberProperty"])(value, null);
    }
    /** Duration for the tab animation. Will be normalized to milliseconds if no units are set. */

  }, {
    key: "animationDuration",
    get: function get() {
      return this._animationDuration;
    },
    set: function set(value) {
      this._animationDuration = /^\d+$/.test(value) ? value + 'ms' : value;
    }
    /** Background color of the tab group. */

  }, {
    key: "backgroundColor",
    get: function get() {
      return this._backgroundColor;
    },
    set: function set(value) {
      var nativeElement = this._elementRef.nativeElement;
      nativeElement.classList.remove("mat-background-".concat(this.backgroundColor));

      if (value) {
        nativeElement.classList.add("mat-background-".concat(value));
      }

      this._backgroundColor = value;
    }
  }]);

  return _MatTabGroupBase;
}(_MatTabGroupMixinBase);

_MatTabGroupBase.ɵfac = function _MatTabGroupBase_Factory(t) {
  return new (t || _MatTabGroupBase)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](MAT_TABS_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ANIMATION_MODULE_TYPE"], 8));
};

_MatTabGroupBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineDirective"]({
  type: _MatTabGroupBase,
  inputs: {
    headerPosition: "headerPosition",
    animationDuration: "animationDuration",
    disablePagination: "disablePagination",
    dynamicHeight: "dynamicHeight",
    selectedIndex: "selectedIndex",
    backgroundColor: "backgroundColor"
  },
  outputs: {
    selectedIndexChange: "selectedIndexChange",
    focusChange: "focusChange",
    animationDone: "animationDone",
    selectedTabChange: "selectedTabChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]]
});

_MatTabGroupBase.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
      args: [MAT_TABS_CONFIG]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
      args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ANIMATION_MODULE_TYPE"]]
    }]
  }];
};

_MatTabGroupBase.propDecorators = {
  dynamicHeight: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  selectedIndex: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  headerPosition: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  animationDuration: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  disablePagination: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  backgroundColor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  selectedIndexChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
  }],
  focusChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
  }],
  animationDone: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
  }],
  selectedTabChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵsetClassMetadata"](_MatTabGroupBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Directive"]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
        args: [MAT_TABS_CONFIG]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }]
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
        args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ANIMATION_MODULE_TYPE"]]
      }]
    }];
  }, {
    headerPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    selectedIndexChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
    }],
    focusChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
    }],
    animationDone: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
    }],
    selectedTabChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Output"]
    }],
    animationDuration: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    disablePagination: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    dynamicHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    selectedIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    backgroundColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }]
  });
})();
/**
 * Material design tab-group component. Supports basic tab pairs (label + content) and includes
 * animated ink-bar, keyboard navigation, and screen reader.
 * See: https://material.io/design/components/tabs.html
 */


var MatTabGroup = /*#__PURE__*/function (_MatTabGroupBase2) {
  Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MatTabGroup, _MatTabGroupBase2);

  var _super6 = Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(MatTabGroup);

  function MatTabGroup(elementRef, changeDetectorRef, defaultConfig, animationMode) {
    Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatTabGroup);

    return _super6.call(this, elementRef, changeDetectorRef, defaultConfig, animationMode);
  }

  return MatTabGroup;
}(_MatTabGroupBase);

MatTabGroup.ɵfac = function MatTabGroup_Factory(t) {
  return new (t || MatTabGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](MAT_TABS_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ANIMATION_MODULE_TYPE"], 8));
};

MatTabGroup.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: MatTabGroup,
  selectors: [["mat-tab-group"]],
  contentQueries: function MatTabGroup_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵcontentQuery"](dirIndex, MatTab, true);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx._allTabs = _t);
    }
  },
  viewQuery: function MatTabGroup_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c3, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c4, true);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx._tabBodyWrapper = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx._tabHeader = _t.first);
    }
  },
  hostAttrs: [1, "mat-tab-group"],
  hostVars: 4,
  hostBindings: function MatTabGroup_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("mat-tab-group-dynamic-height", ctx.dynamicHeight)("mat-tab-group-inverted-header", ctx.headerPosition === "below");
    }
  },
  inputs: {
    color: "color",
    disableRipple: "disableRipple"
  },
  exportAs: ["matTabGroup"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵProvidersFeature"]([{
    provide: MAT_TAB_GROUP,
    useExisting: MatTabGroup
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]],
  decls: 6,
  vars: 7,
  consts: [[3, "selectedIndex", "disableRipple", "disablePagination", "indexFocused", "selectFocusedIndex"], ["tabHeader", ""], ["class", "mat-tab-label mat-focus-indicator", "role", "tab", "matTabLabelWrapper", "", "mat-ripple", "", "cdkMonitorElementFocus", "", 3, "id", "mat-tab-label-active", "disabled", "matRippleDisabled", "click", 4, "ngFor", "ngForOf"], [1, "mat-tab-body-wrapper"], ["tabBodyWrapper", ""], ["role", "tabpanel", 3, "id", "mat-tab-body-active", "content", "position", "origin", "animationDuration", "_onCentered", "_onCentering", 4, "ngFor", "ngForOf"], ["role", "tab", "matTabLabelWrapper", "", "mat-ripple", "", "cdkMonitorElementFocus", "", 1, "mat-tab-label", "mat-focus-indicator", 3, "id", "disabled", "matRippleDisabled", "click"], [1, "mat-tab-label-content"], [3, "ngIf"], [3, "cdkPortalOutlet"], ["role", "tabpanel", 3, "id", "content", "position", "origin", "animationDuration", "_onCentered", "_onCentering"]],
  template: function MatTabGroup_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-tab-header", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("indexFocused", function MatTabGroup_Template_mat_tab_header_indexFocused_0_listener($event) {
        return ctx._focusChanged($event);
      })("selectFocusedIndex", function MatTabGroup_Template_mat_tab_header_selectFocusedIndex_0_listener($event) {
        return ctx.selectedIndex = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, MatTabGroup_div_2_Template, 4, 14, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, MatTabGroup_mat_tab_body_5_Template, 1, 8, "mat-tab-body", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("selectedIndex", ctx.selectedIndex || 0)("disableRipple", ctx.disableRipple)("disablePagination", ctx.disablePagination);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx._tabs);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx._tabs);
    }
  },
  directives: function directives() {
    return [MatTabHeader, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], MatTabLabelWrapper, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatRipple"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["CdkMonitorFocus"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__["CdkPortalOutlet"], MatTabBody];
  },
  styles: [".mat-tab-group{display:flex;flex-direction:column}.mat-tab-group.mat-tab-group-inverted-header{flex-direction:column-reverse}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{padding:0 12px}}@media(max-width: 959px){.mat-tab-label{padding:0 12px}}.mat-tab-group[mat-stretch-tabs]>.mat-tab-header .mat-tab-label{flex-basis:0;flex-grow:1}.mat-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-tab-body-wrapper{transition:none;animation:none}.mat-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;flex-basis:100%}.mat-tab-body.mat-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-tab-group.mat-tab-group-dynamic-height .mat-tab-body.mat-tab-body-active{overflow-y:hidden}\n"],
  encapsulation: 2
});

MatTabGroup.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
      args: [MAT_TABS_CONFIG]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
      args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ANIMATION_MODULE_TYPE"]]
    }]
  }];
};

MatTabGroup.propDecorators = {
  _allTabs: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ContentChildren"],
    args: [MatTab, {
      descendants: true
    }]
  }],
  _tabBodyWrapper: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
    args: ['tabBodyWrapper']
  }],
  _tabHeader: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
    args: ['tabHeader']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵsetClassMetadata"](MatTabGroup, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Component"],
    args: [{
      selector: 'mat-tab-group',
      exportAs: 'matTabGroup',
      template: "<mat-tab-header #tabHeader\n               [selectedIndex]=\"selectedIndex || 0\"\n               [disableRipple]=\"disableRipple\"\n               [disablePagination]=\"disablePagination\"\n               (indexFocused)=\"_focusChanged($event)\"\n               (selectFocusedIndex)=\"selectedIndex = $event\">\n  <div class=\"mat-tab-label mat-focus-indicator\" role=\"tab\" matTabLabelWrapper mat-ripple cdkMonitorElementFocus\n       *ngFor=\"let tab of _tabs; let i = index\"\n       [id]=\"_getTabLabelId(i)\"\n       [attr.tabIndex]=\"_getTabIndex(tab, i)\"\n       [attr.aria-posinset]=\"i + 1\"\n       [attr.aria-setsize]=\"_tabs.length\"\n       [attr.aria-controls]=\"_getTabContentId(i)\"\n       [attr.aria-selected]=\"selectedIndex == i\"\n       [attr.aria-label]=\"tab.ariaLabel || null\"\n       [attr.aria-labelledby]=\"(!tab.ariaLabel && tab.ariaLabelledby) ? tab.ariaLabelledby : null\"\n       [class.mat-tab-label-active]=\"selectedIndex == i\"\n       [disabled]=\"tab.disabled\"\n       [matRippleDisabled]=\"tab.disabled || disableRipple\"\n       (click)=\"_handleClick(tab, tabHeader, i)\">\n\n\n    <div class=\"mat-tab-label-content\">\n      <!-- If there is a label template, use it. -->\n      <ng-template [ngIf]=\"tab.templateLabel\">\n        <ng-template [cdkPortalOutlet]=\"tab.templateLabel\"></ng-template>\n      </ng-template>\n\n      <!-- If there is not a label template, fall back to the text label. -->\n      <ng-template [ngIf]=\"!tab.templateLabel\">{{tab.textLabel}}</ng-template>\n    </div>\n  </div>\n</mat-tab-header>\n\n<div\n  class=\"mat-tab-body-wrapper\"\n  [class._mat-animation-noopable]=\"_animationMode === 'NoopAnimations'\"\n  #tabBodyWrapper>\n  <mat-tab-body role=\"tabpanel\"\n               *ngFor=\"let tab of _tabs; let i = index\"\n               [id]=\"_getTabContentId(i)\"\n               [attr.aria-labelledby]=\"_getTabLabelId(i)\"\n               [class.mat-tab-body-active]=\"selectedIndex == i\"\n               [content]=\"tab.content!\"\n               [position]=\"tab.position!\"\n               [origin]=\"tab.origin\"\n               [animationDuration]=\"animationDuration\"\n               (_onCentered)=\"_removeTabBodyWrapperHeight()\"\n               (_onCentering)=\"_setTabBodyWrapperHeight($event)\">\n  </mat-tab-body>\n</div>\n",
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewEncapsulation"].None,
      // tslint:disable-next-line:validate-decorators
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectionStrategy"].Default,
      inputs: ['color', 'disableRipple'],
      providers: [{
        provide: MAT_TAB_GROUP,
        useExisting: MatTabGroup
      }],
      host: {
        'class': 'mat-tab-group',
        '[class.mat-tab-group-dynamic-height]': 'dynamicHeight',
        '[class.mat-tab-group-inverted-header]': 'headerPosition === "below"'
      },
      styles: [".mat-tab-group{display:flex;flex-direction:column}.mat-tab-group.mat-tab-group-inverted-header{flex-direction:column-reverse}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{padding:0 12px}}@media(max-width: 959px){.mat-tab-label{padding:0 12px}}.mat-tab-group[mat-stretch-tabs]>.mat-tab-header .mat-tab-label{flex-basis:0;flex-grow:1}.mat-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-tab-body-wrapper{transition:none;animation:none}.mat-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;flex-basis:100%}.mat-tab-body.mat-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-tab-group.mat-tab-group-dynamic-height .mat-tab-body.mat-tab-body-active{overflow-y:hidden}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
        args: [MAT_TABS_CONFIG]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }]
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
        args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ANIMATION_MODULE_TYPE"]]
      }]
    }];
  }, {
    _allTabs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ContentChildren"],
      args: [MatTab, {
        descendants: true
      }]
    }],
    _tabBodyWrapper: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
      args: ['tabBodyWrapper']
    }],
    _tabHeader: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
      args: ['tabHeader']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Boilerplate for applying mixins to MatTabLabelWrapper.

/** @docs-private */


var MatTabLabelWrapperBase = function MatTabLabelWrapperBase() {
  Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatTabLabelWrapperBase);
};

var _MatTabLabelWrapperMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_13__["mixinDisabled"])(MatTabLabelWrapperBase);
/**
 * Used in the `mat-tab-group` view to display tab labels.
 * @docs-private
 */


var MatTabLabelWrapper = /*#__PURE__*/function (_MatTabLabelWrapperMi) {
  Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MatTabLabelWrapper, _MatTabLabelWrapperMi);

  var _super7 = Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(MatTabLabelWrapper);

  function MatTabLabelWrapper(elementRef) {
    var _this11;

    Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatTabLabelWrapper);

    _this11 = _super7.call(this);
    _this11.elementRef = elementRef;
    return _this11;
  }
  /** Sets focus on the wrapper element */


  Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(MatTabLabelWrapper, [{
    key: "focus",
    value: function focus() {
      this.elementRef.nativeElement.focus();
    }
  }, {
    key: "getOffsetLeft",
    value: function getOffsetLeft() {
      return this.elementRef.nativeElement.offsetLeft;
    }
  }, {
    key: "getOffsetWidth",
    value: function getOffsetWidth() {
      return this.elementRef.nativeElement.offsetWidth;
    }
  }]);

  return MatTabLabelWrapper;
}(_MatTabLabelWrapperMixinBase);

MatTabLabelWrapper.ɵfac = function MatTabLabelWrapper_Factory(t) {
  return new (t || MatTabLabelWrapper)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]));
};

MatTabLabelWrapper.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineDirective"]({
  type: MatTabLabelWrapper,
  selectors: [["", "matTabLabelWrapper", ""]],
  hostVars: 3,
  hostBindings: function MatTabLabelWrapper_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("aria-disabled", !!ctx.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("mat-tab-disabled", ctx.disabled);
    }
  },
  inputs: {
    disabled: "disabled"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]]
});

MatTabLabelWrapper.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵsetClassMetadata"](MatTabLabelWrapper, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Directive"],
    args: [{
      selector: '[matTabLabelWrapper]',
      inputs: ['disabled'],
      host: {
        '[class.mat-tab-disabled]': 'disabled',
        '[attr.aria-disabled]': '!!disabled'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Config used to bind passive event listeners */


var passiveEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_21__["normalizePassiveListenerOptions"])({
  passive: true
});
/**
 * The distance in pixels that will be overshot when scrolling a tab label into view. This helps
 * provide a small affordance to the label next to it.
 */

var EXAGGERATED_OVERSCROLL = 60;
/**
 * Amount of milliseconds to wait before starting to scroll the header automatically.
 * Set a little conservatively in order to handle fake events dispatched on touch devices.
 */

var HEADER_SCROLL_DELAY = 650;
/**
 * Interval in milliseconds at which to scroll the header
 * while the user is holding their pointer.
 */

var HEADER_SCROLL_INTERVAL = 100;
/**
 * Base class for a tab header that supported pagination.
 * @docs-private
 */

var MatPaginatedTabHeader = /*#__PURE__*/function () {
  function MatPaginatedTabHeader(_elementRef, _changeDetectorRef, _viewportRuler, _dir, _ngZone, _platform, _animationMode) {
    var _this12 = this;

    Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatPaginatedTabHeader);

    this._elementRef = _elementRef;
    this._changeDetectorRef = _changeDetectorRef;
    this._viewportRuler = _viewportRuler;
    this._dir = _dir;
    this._ngZone = _ngZone;
    this._platform = _platform;
    this._animationMode = _animationMode;
    /** The distance in pixels that the tab labels should be translated to the left. */

    this._scrollDistance = 0;
    /** Whether the header should scroll to the selected index after the view has been checked. */

    this._selectedIndexChanged = false;
    /** Emits when the component is destroyed. */

    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_15__["Subject"]();
    /** Whether the controls for pagination should be displayed */

    this._showPaginationControls = false;
    /** Whether the tab list can be scrolled more towards the end of the tab label list. */

    this._disableScrollAfter = true;
    /** Whether the tab list can be scrolled more towards the beginning of the tab label list. */

    this._disableScrollBefore = true;
    /** Stream that will stop the automated scrolling. */

    this._stopScrolling = new rxjs__WEBPACK_IMPORTED_MODULE_15__["Subject"]();
    /**
     * Whether pagination should be disabled. This can be used to avoid unnecessary
     * layout recalculations if it's known that pagination won't be required.
     */

    this.disablePagination = false;
    this._selectedIndex = 0;
    /** Event emitted when the option is selected. */

    this.selectFocusedIndex = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["EventEmitter"]();
    /** Event emitted when a label is focused. */

    this.indexFocused = new _angular_core__WEBPACK_IMPORTED_MODULE_12__["EventEmitter"](); // Bind the `mouseleave` event on the outside since it doesn't change anything in the view.

    _ngZone.runOutsideAngular(function () {
      Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["fromEvent"])(_elementRef.nativeElement, 'mouseleave').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(_this12._destroyed)).subscribe(function () {
        _this12._stopInterval();
      });
    });
  }
  /** The index of the active tab. */


  Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(MatPaginatedTabHeader, [{
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this13 = this;

      // We need to handle these events manually, because we want to bind passive event listeners.
      Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["fromEvent"])(this._previousPaginator.nativeElement, 'touchstart', passiveEventListenerOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this._destroyed)).subscribe(function () {
        _this13._handlePaginatorPress('before');
      });
      Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["fromEvent"])(this._nextPaginator.nativeElement, 'touchstart', passiveEventListenerOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this._destroyed)).subscribe(function () {
        _this13._handlePaginatorPress('after');
      });
    }
  }, {
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      var _this14 = this;

      var dirChange = this._dir ? this._dir.change : Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["of"])(null);

      var resize = this._viewportRuler.change(150);

      var realign = function realign() {
        _this14.updatePagination();

        _this14._alignInkBarToSelectedTab();
      };

      this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusKeyManager"](this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap();

      this._keyManager.updateActiveItem(this._selectedIndex); // Defer the first call in order to allow for slower browsers to lay out the elements.
      // This helps in cases where the user lands directly on a page with paginated tabs.


      typeof requestAnimationFrame !== 'undefined' ? requestAnimationFrame(realign) : realign(); // On dir change or window resize, realign the ink bar and update the orientation of
      // the key manager if the direction has changed.

      Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["merge"])(dirChange, resize, this._items.changes).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this._destroyed)).subscribe(function () {
        // We need to defer this to give the browser some time to recalculate the element dimensions.
        Promise.resolve().then(realign);

        _this14._keyManager.withHorizontalOrientation(_this14._getLayoutDirection());
      }); // If there is a change in the focus key manager we need to emit the `indexFocused`
      // event in order to provide a public event that notifies about focus changes. Also we realign
      // the tabs container by scrolling the new focused tab into the visible section.

      this._keyManager.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this._destroyed)).subscribe(function (newFocusIndex) {
        _this14.indexFocused.emit(newFocusIndex);

        _this14._setTabFocus(newFocusIndex);
      });
    }
  }, {
    key: "ngAfterContentChecked",
    value: function ngAfterContentChecked() {
      // If the number of tab labels have changed, check if scrolling should be enabled
      if (this._tabLabelCount != this._items.length) {
        this.updatePagination();
        this._tabLabelCount = this._items.length;

        this._changeDetectorRef.markForCheck();
      } // If the selected index has changed, scroll to the label and check if the scrolling controls
      // should be disabled.


      if (this._selectedIndexChanged) {
        this._scrollToLabel(this._selectedIndex);

        this._checkScrollingControls();

        this._alignInkBarToSelectedTab();

        this._selectedIndexChanged = false;

        this._changeDetectorRef.markForCheck();
      } // If the scroll distance has been changed (tab selected, focused, scroll controls activated),
      // then translate the header to reflect this.


      if (this._scrollDistanceChanged) {
        this._updateTabScrollPosition();

        this._scrollDistanceChanged = false;

        this._changeDetectorRef.markForCheck();
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._destroyed.next();

      this._destroyed.complete();

      this._stopScrolling.complete();
    }
    /** Handles keyboard events on the header. */

  }, {
    key: "_handleKeydown",
    value: function _handleKeydown(event) {
      // We don't handle any key bindings with a modifier key.
      if (Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_22__["hasModifierKey"])(event)) {
        return;
      }

      switch (event.keyCode) {
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_22__["ENTER"]:
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_22__["SPACE"]:
          if (this.focusIndex !== this.selectedIndex) {
            this.selectFocusedIndex.emit(this.focusIndex);

            this._itemSelected(event);
          }

          break;

        default:
          this._keyManager.onKeydown(event);

      }
    }
    /**
     * Callback for when the MutationObserver detects that the content has changed.
     */

  }, {
    key: "_onContentChanges",
    value: function _onContentChanges() {
      var _this15 = this;

      var textContent = this._elementRef.nativeElement.textContent; // We need to diff the text content of the header, because the MutationObserver callback
      // will fire even if the text content didn't change which is inefficient and is prone
      // to infinite loops if a poorly constructed expression is passed in (see #14249).

      if (textContent !== this._currentTextContent) {
        this._currentTextContent = textContent || ''; // The content observer runs outside the `NgZone` by default, which
        // means that we need to bring the callback back in ourselves.

        this._ngZone.run(function () {
          _this15.updatePagination();

          _this15._alignInkBarToSelectedTab();

          _this15._changeDetectorRef.markForCheck();
        });
      }
    }
    /**
     * Updates the view whether pagination should be enabled or not.
     *
     * WARNING: Calling this method can be very costly in terms of performance. It should be called
     * as infrequently as possible from outside of the Tabs component as it causes a reflow of the
     * page.
     */

  }, {
    key: "updatePagination",
    value: function updatePagination() {
      this._checkPaginationEnabled();

      this._checkScrollingControls();

      this._updateTabScrollPosition();
    }
    /** Tracks which element has focus; used for keyboard navigation */

  }, {
    key: "_isValidIndex",

    /**
     * Determines if an index is valid.  If the tabs are not ready yet, we assume that the user is
     * providing a valid index and return true.
     */
    value: function _isValidIndex(index) {
      if (!this._items) {
        return true;
      }

      var tab = this._items ? this._items.toArray()[index] : null;
      return !!tab && !tab.disabled;
    }
    /**
     * Sets focus on the HTML element for the label wrapper and scrolls it into the view if
     * scrolling is enabled.
     */

  }, {
    key: "_setTabFocus",
    value: function _setTabFocus(tabIndex) {
      if (this._showPaginationControls) {
        this._scrollToLabel(tabIndex);
      }

      if (this._items && this._items.length) {
        this._items.toArray()[tabIndex].focus(); // Do not let the browser manage scrolling to focus the element, this will be handled
        // by using translation. In LTR, the scroll left should be 0. In RTL, the scroll width
        // should be the full width minus the offset width.


        var containerEl = this._tabListContainer.nativeElement;

        var dir = this._getLayoutDirection();

        if (dir == 'ltr') {
          containerEl.scrollLeft = 0;
        } else {
          containerEl.scrollLeft = containerEl.scrollWidth - containerEl.offsetWidth;
        }
      }
    }
    /** The layout direction of the containing app. */

  }, {
    key: "_getLayoutDirection",
    value: function _getLayoutDirection() {
      return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
    }
    /** Performs the CSS transformation on the tab list that will cause the list to scroll. */

  }, {
    key: "_updateTabScrollPosition",
    value: function _updateTabScrollPosition() {
      if (this.disablePagination) {
        return;
      }

      var scrollDistance = this.scrollDistance;
      var translateX = this._getLayoutDirection() === 'ltr' ? -scrollDistance : scrollDistance; // Don't use `translate3d` here because we don't want to create a new layer. A new layer
      // seems to cause flickering and overflow in Internet Explorer. For example, the ink bar
      // and ripples will exceed the boundaries of the visible tab bar.
      // See: https://github.com/angular/components/issues/10276
      // We round the `transform` here, because transforms with sub-pixel precision cause some
      // browsers to blur the content of the element.

      this._tabList.nativeElement.style.transform = "translateX(".concat(Math.round(translateX), "px)"); // Setting the `transform` on IE will change the scroll offset of the parent, causing the
      // position to be thrown off in some cases. We have to reset it ourselves to ensure that
      // it doesn't get thrown off. Note that we scope it only to IE and Edge, because messing
      // with the scroll position throws off Chrome 71+ in RTL mode (see #14689).

      if (this._platform.TRIDENT || this._platform.EDGE) {
        this._tabListContainer.nativeElement.scrollLeft = 0;
      }
    }
    /** Sets the distance in pixels that the tab header should be transformed in the X-axis. */

  }, {
    key: "_scrollHeader",

    /**
     * Moves the tab list in the 'before' or 'after' direction (towards the beginning of the list or
     * the end of the list, respectively). The distance to scroll is computed to be a third of the
     * length of the tab list view window.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */
    value: function _scrollHeader(direction) {
      var viewLength = this._tabListContainer.nativeElement.offsetWidth; // Move the scroll distance one-third the length of the tab list's viewport.

      var scrollAmount = (direction == 'before' ? -1 : 1) * viewLength / 3;
      return this._scrollTo(this._scrollDistance + scrollAmount);
    }
    /** Handles click events on the pagination arrows. */

  }, {
    key: "_handlePaginatorClick",
    value: function _handlePaginatorClick(direction) {
      this._stopInterval();

      this._scrollHeader(direction);
    }
    /**
     * Moves the tab list such that the desired tab label (marked by index) is moved into view.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */

  }, {
    key: "_scrollToLabel",
    value: function _scrollToLabel(labelIndex) {
      if (this.disablePagination) {
        return;
      }

      var selectedLabel = this._items ? this._items.toArray()[labelIndex] : null;

      if (!selectedLabel) {
        return;
      } // The view length is the visible width of the tab labels.


      var viewLength = this._tabListContainer.nativeElement.offsetWidth;
      var _selectedLabel$elemen = selectedLabel.elementRef.nativeElement,
          offsetLeft = _selectedLabel$elemen.offsetLeft,
          offsetWidth = _selectedLabel$elemen.offsetWidth;
      var labelBeforePos, labelAfterPos;

      if (this._getLayoutDirection() == 'ltr') {
        labelBeforePos = offsetLeft;
        labelAfterPos = labelBeforePos + offsetWidth;
      } else {
        labelAfterPos = this._tabList.nativeElement.offsetWidth - offsetLeft;
        labelBeforePos = labelAfterPos - offsetWidth;
      }

      var beforeVisiblePos = this.scrollDistance;
      var afterVisiblePos = this.scrollDistance + viewLength;

      if (labelBeforePos < beforeVisiblePos) {
        // Scroll header to move label to the before direction
        this.scrollDistance -= beforeVisiblePos - labelBeforePos + EXAGGERATED_OVERSCROLL;
      } else if (labelAfterPos > afterVisiblePos) {
        // Scroll header to move label to the after direction
        this.scrollDistance += labelAfterPos - afterVisiblePos + EXAGGERATED_OVERSCROLL;
      }
    }
    /**
     * Evaluate whether the pagination controls should be displayed. If the scroll width of the
     * tab list is wider than the size of the header container, then the pagination controls should
     * be shown.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */

  }, {
    key: "_checkPaginationEnabled",
    value: function _checkPaginationEnabled() {
      if (this.disablePagination) {
        this._showPaginationControls = false;
      } else {
        var isEnabled = this._tabList.nativeElement.scrollWidth > this._elementRef.nativeElement.offsetWidth;

        if (!isEnabled) {
          this.scrollDistance = 0;
        }

        if (isEnabled !== this._showPaginationControls) {
          this._changeDetectorRef.markForCheck();
        }

        this._showPaginationControls = isEnabled;
      }
    }
    /**
     * Evaluate whether the before and after controls should be enabled or disabled.
     * If the header is at the beginning of the list (scroll distance is equal to 0) then disable the
     * before button. If the header is at the end of the list (scroll distance is equal to the
     * maximum distance we can scroll), then disable the after button.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */

  }, {
    key: "_checkScrollingControls",
    value: function _checkScrollingControls() {
      if (this.disablePagination) {
        this._disableScrollAfter = this._disableScrollBefore = true;
      } else {
        // Check if the pagination arrows should be activated.
        this._disableScrollBefore = this.scrollDistance == 0;
        this._disableScrollAfter = this.scrollDistance == this._getMaxScrollDistance();

        this._changeDetectorRef.markForCheck();
      }
    }
    /**
     * Determines what is the maximum length in pixels that can be set for the scroll distance. This
     * is equal to the difference in width between the tab list container and tab header container.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */

  }, {
    key: "_getMaxScrollDistance",
    value: function _getMaxScrollDistance() {
      var lengthOfTabList = this._tabList.nativeElement.scrollWidth;
      var viewLength = this._tabListContainer.nativeElement.offsetWidth;
      return lengthOfTabList - viewLength || 0;
    }
    /** Tells the ink-bar to align itself to the current label wrapper */

  }, {
    key: "_alignInkBarToSelectedTab",
    value: function _alignInkBarToSelectedTab() {
      var selectedItem = this._items && this._items.length ? this._items.toArray()[this.selectedIndex] : null;
      var selectedLabelWrapper = selectedItem ? selectedItem.elementRef.nativeElement : null;

      if (selectedLabelWrapper) {
        this._inkBar.alignToElement(selectedLabelWrapper);
      } else {
        this._inkBar.hide();
      }
    }
    /** Stops the currently-running paginator interval.  */

  }, {
    key: "_stopInterval",
    value: function _stopInterval() {
      this._stopScrolling.next();
    }
    /**
     * Handles the user pressing down on one of the paginators.
     * Starts scrolling the header after a certain amount of time.
     * @param direction In which direction the paginator should be scrolled.
     */

  }, {
    key: "_handlePaginatorPress",
    value: function _handlePaginatorPress(direction, mouseEvent) {
      var _this16 = this;

      // Don't start auto scrolling for right mouse button clicks. Note that we shouldn't have to
      // null check the `button`, but we do it so we don't break tests that use fake events.
      if (mouseEvent && mouseEvent.button != null && mouseEvent.button !== 0) {
        return;
      } // Avoid overlapping timers.


      this._stopInterval(); // Start a timer after the delay and keep firing based on the interval.


      Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["timer"])(HEADER_SCROLL_DELAY, HEADER_SCROLL_INTERVAL) // Keep the timer going until something tells it to stop or the component is destroyed.
      .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["merge"])(this._stopScrolling, this._destroyed))).subscribe(function () {
        var _this16$_scrollHeader = _this16._scrollHeader(direction),
            maxScrollDistance = _this16$_scrollHeader.maxScrollDistance,
            distance = _this16$_scrollHeader.distance; // Stop the timer if we've reached the start or the end.


        if (distance === 0 || distance >= maxScrollDistance) {
          _this16._stopInterval();
        }
      });
    }
    /**
     * Scrolls the header to a given position.
     * @param position Position to which to scroll.
     * @returns Information on the current scroll distance and the maximum.
     */

  }, {
    key: "_scrollTo",
    value: function _scrollTo(position) {
      if (this.disablePagination) {
        return {
          maxScrollDistance: 0,
          distance: 0
        };
      }

      var maxScrollDistance = this._getMaxScrollDistance();

      this._scrollDistance = Math.max(0, Math.min(maxScrollDistance, position)); // Mark that the scroll distance has changed so that after the view is checked, the CSS
      // transformation can move the header.

      this._scrollDistanceChanged = true;

      this._checkScrollingControls();

      return {
        maxScrollDistance: maxScrollDistance,
        distance: this._scrollDistance
      };
    }
  }, {
    key: "selectedIndex",
    get: function get() {
      return this._selectedIndex;
    },
    set: function set(value) {
      value = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_19__["coerceNumberProperty"])(value);

      if (this._selectedIndex != value) {
        this._selectedIndexChanged = true;
        this._selectedIndex = value;

        if (this._keyManager) {
          this._keyManager.updateActiveItem(value);
        }
      }
    }
  }, {
    key: "focusIndex",
    get: function get() {
      return this._keyManager ? this._keyManager.activeItemIndex : 0;
    }
    /** When the focus index is set, we must manually send focus to the correct label */
    ,
    set: function set(value) {
      if (!this._isValidIndex(value) || this.focusIndex === value || !this._keyManager) {
        return;
      }

      this._keyManager.setActiveItem(value);
    }
  }, {
    key: "scrollDistance",
    get: function get() {
      return this._scrollDistance;
    },
    set: function set(value) {
      this._scrollTo(value);
    }
  }]);

  return MatPaginatedTabHeader;
}();

MatPaginatedTabHeader.ɵfac = function MatPaginatedTabHeader_Factory(t) {
  return new (t || MatPaginatedTabHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_21__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ANIMATION_MODULE_TYPE"], 8));
};

MatPaginatedTabHeader.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineDirective"]({
  type: MatPaginatedTabHeader,
  inputs: {
    disablePagination: "disablePagination"
  }
});

MatPaginatedTabHeader.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]
  }, {
    type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__["ViewportRuler"]
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__["Directionality"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["NgZone"]
  }, {
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_21__["Platform"]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
      args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ANIMATION_MODULE_TYPE"]]
    }]
  }];
};

MatPaginatedTabHeader.propDecorators = {
  disablePagination: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵsetClassMetadata"](MatPaginatedTabHeader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Directive"]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]
    }, {
      type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__["ViewportRuler"]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__["Directionality"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["NgZone"]
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_21__["Platform"]
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
        args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ANIMATION_MODULE_TYPE"]]
      }]
    }];
  }, {
    disablePagination: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Base class with all of the `MatTabHeader` functionality.
 * @docs-private
 */


var _MatTabHeaderBase = /*#__PURE__*/function (_MatPaginatedTabHeade) {
  Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(_MatTabHeaderBase, _MatPaginatedTabHeade);

  var _super8 = Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(_MatTabHeaderBase);

  function _MatTabHeaderBase(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode) {
    var _this17;

    Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, _MatTabHeaderBase);

    _this17 = _super8.call(this, elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
    _this17._disableRipple = false;
    return _this17;
  }
  /** Whether the ripple effect is disabled or not. */


  Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(_MatTabHeaderBase, [{
    key: "_itemSelected",
    value: function _itemSelected(event) {
      event.preventDefault();
    }
  }, {
    key: "disableRipple",
    get: function get() {
      return this._disableRipple;
    },
    set: function set(value) {
      this._disableRipple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_19__["coerceBooleanProperty"])(value);
    }
  }]);

  return _MatTabHeaderBase;
}(MatPaginatedTabHeader);

_MatTabHeaderBase.ɵfac = function _MatTabHeaderBase_Factory(t) {
  return new (t || _MatTabHeaderBase)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_21__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ANIMATION_MODULE_TYPE"], 8));
};

_MatTabHeaderBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineDirective"]({
  type: _MatTabHeaderBase,
  inputs: {
    disableRipple: "disableRipple"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]]
});

_MatTabHeaderBase.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]
  }, {
    type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__["ViewportRuler"]
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__["Directionality"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["NgZone"]
  }, {
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_21__["Platform"]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
      args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ANIMATION_MODULE_TYPE"]]
    }]
  }];
};

_MatTabHeaderBase.propDecorators = {
  disableRipple: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵsetClassMetadata"](_MatTabHeaderBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Directive"]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]
    }, {
      type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__["ViewportRuler"]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__["Directionality"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["NgZone"]
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_21__["Platform"]
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
        args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ANIMATION_MODULE_TYPE"]]
      }]
    }];
  }, {
    disableRipple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }]
  });
})();
/**
 * The header of the tab group which displays a list of all the tabs in the tab group. Includes
 * an ink bar that follows the currently selected tab. When the tabs list's width exceeds the
 * width of the header container, then arrows will be displayed to allow the user to scroll
 * left and right across the header.
 * @docs-private
 */


var MatTabHeader = /*#__PURE__*/function (_MatTabHeaderBase2) {
  Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MatTabHeader, _MatTabHeaderBase2);

  var _super9 = Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(MatTabHeader);

  function MatTabHeader(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode) {
    Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatTabHeader);

    return _super9.call(this, elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
  }

  return MatTabHeader;
}(_MatTabHeaderBase);

MatTabHeader.ɵfac = function MatTabHeader_Factory(t) {
  return new (t || MatTabHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_21__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ANIMATION_MODULE_TYPE"], 8));
};

MatTabHeader.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: MatTabHeader,
  selectors: [["mat-tab-header"]],
  contentQueries: function MatTabHeader_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵcontentQuery"](dirIndex, MatTabLabelWrapper, false);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx._items = _t);
    }
  },
  viewQuery: function MatTabHeader_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstaticViewQuery"](MatInkBar, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstaticViewQuery"](_c5, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstaticViewQuery"](_c6, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c7, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c8, true);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx._inkBar = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx._tabListContainer = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx._tabList = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx._nextPaginator = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx._previousPaginator = _t.first);
    }
  },
  hostAttrs: [1, "mat-tab-header"],
  hostVars: 4,
  hostBindings: function MatTabHeader_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("mat-tab-header-pagination-controls-enabled", ctx._showPaginationControls)("mat-tab-header-rtl", ctx._getLayoutDirection() == "rtl");
    }
  },
  inputs: {
    selectedIndex: "selectedIndex"
  },
  outputs: {
    selectFocusedIndex: "selectFocusedIndex",
    indexFocused: "indexFocused"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c0,
  decls: 13,
  vars: 8,
  consts: [["aria-hidden", "true", "mat-ripple", "", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-before", "mat-elevation-z4", 3, "matRippleDisabled", "click", "mousedown", "touchend"], ["previousPaginator", ""], [1, "mat-tab-header-pagination-chevron"], [1, "mat-tab-label-container", 3, "keydown"], ["tabListContainer", ""], ["role", "tablist", 1, "mat-tab-list", 3, "cdkObserveContent"], ["tabList", ""], [1, "mat-tab-labels"], ["aria-hidden", "true", "mat-ripple", "", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-after", "mat-elevation-z4", 3, "matRippleDisabled", "mousedown", "click", "touchend"], ["nextPaginator", ""]],
  template: function MatTabHeader_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function MatTabHeader_Template_div_click_0_listener() {
        return ctx._handlePaginatorClick("before");
      })("mousedown", function MatTabHeader_Template_div_mousedown_0_listener($event) {
        return ctx._handlePaginatorPress("before", $event);
      })("touchend", function MatTabHeader_Template_div_touchend_0_listener() {
        return ctx._stopInterval();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("keydown", function MatTabHeader_Template_div_keydown_3_listener($event) {
        return ctx._handleKeydown($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("cdkObserveContent", function MatTabHeader_Template_div_cdkObserveContent_5_listener() {
        return ctx._onContentChanges();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵprojection"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "mat-ink-bar");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "div", 8, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("mousedown", function MatTabHeader_Template_div_mousedown_10_listener($event) {
        return ctx._handlePaginatorPress("after", $event);
      })("click", function MatTabHeader_Template_div_click_10_listener() {
        return ctx._handlePaginatorClick("after");
      })("touchend", function MatTabHeader_Template_div_touchend_10_listener() {
        return ctx._stopInterval();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("mat-tab-header-pagination-disabled", ctx._disableScrollBefore);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollBefore || ctx.disableRipple);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("mat-tab-header-pagination-disabled", ctx._disableScrollAfter);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollAfter || ctx.disableRipple);
    }
  },
  directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatRipple"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_9__["CdkObserveContent"], MatInkBar],
  styles: [".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:\"\";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-labels{display:flex}[mat-align-tabs=center]>.mat-tab-header .mat-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-tab-header .mat-tab-labels{justify-content:flex-end}.mat-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}._mat-animation-noopable.mat-tab-list{transition:none;animation:none}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{min-width:72px}}\n"],
  encapsulation: 2
});

MatTabHeader.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]
  }, {
    type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__["ViewportRuler"]
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__["Directionality"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["NgZone"]
  }, {
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_21__["Platform"]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
      args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ANIMATION_MODULE_TYPE"]]
    }]
  }];
};

MatTabHeader.propDecorators = {
  _items: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ContentChildren"],
    args: [MatTabLabelWrapper, {
      descendants: false
    }]
  }],
  _inkBar: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
    args: [MatInkBar, {
      static: true
    }]
  }],
  _tabListContainer: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
    args: ['tabListContainer', {
      static: true
    }]
  }],
  _tabList: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
    args: ['tabList', {
      static: true
    }]
  }],
  _nextPaginator: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
    args: ['nextPaginator']
  }],
  _previousPaginator: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
    args: ['previousPaginator']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵsetClassMetadata"](MatTabHeader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Component"],
    args: [{
      selector: 'mat-tab-header',
      template: "<div class=\"mat-tab-header-pagination mat-tab-header-pagination-before mat-elevation-z4\"\n     #previousPaginator\n     aria-hidden=\"true\"\n     mat-ripple [matRippleDisabled]=\"_disableScrollBefore || disableRipple\"\n     [class.mat-tab-header-pagination-disabled]=\"_disableScrollBefore\"\n     (click)=\"_handlePaginatorClick('before')\"\n     (mousedown)=\"_handlePaginatorPress('before', $event)\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-tab-header-pagination-chevron\"></div>\n</div>\n\n<div class=\"mat-tab-label-container\" #tabListContainer (keydown)=\"_handleKeydown($event)\">\n  <div\n    #tabList\n    class=\"mat-tab-list\"\n    [class._mat-animation-noopable]=\"_animationMode === 'NoopAnimations'\"\n    role=\"tablist\"\n    (cdkObserveContent)=\"_onContentChanges()\">\n    <div class=\"mat-tab-labels\">\n      <ng-content></ng-content>\n    </div>\n    <mat-ink-bar></mat-ink-bar>\n  </div>\n</div>\n\n<div class=\"mat-tab-header-pagination mat-tab-header-pagination-after mat-elevation-z4\"\n     #nextPaginator\n     aria-hidden=\"true\"\n     mat-ripple [matRippleDisabled]=\"_disableScrollAfter || disableRipple\"\n     [class.mat-tab-header-pagination-disabled]=\"_disableScrollAfter\"\n     (mousedown)=\"_handlePaginatorPress('after', $event)\"\n     (click)=\"_handlePaginatorClick('after')\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-tab-header-pagination-chevron\"></div>\n</div>\n",
      inputs: ['selectedIndex'],
      outputs: ['selectFocusedIndex', 'indexFocused'],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewEncapsulation"].None,
      // tslint:disable-next-line:validate-decorators
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectionStrategy"].Default,
      host: {
        'class': 'mat-tab-header',
        '[class.mat-tab-header-pagination-controls-enabled]': '_showPaginationControls',
        '[class.mat-tab-header-rtl]': "_getLayoutDirection() == 'rtl'"
      },
      styles: [".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:\"\";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-labels{display:flex}[mat-align-tabs=center]>.mat-tab-header .mat-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-tab-header .mat-tab-labels{justify-content:flex-end}.mat-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}._mat-animation-noopable.mat-tab-list{transition:none;animation:none}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{min-width:72px}}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]
    }, {
      type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__["ViewportRuler"]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__["Directionality"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["NgZone"]
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_21__["Platform"]
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
        args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ANIMATION_MODULE_TYPE"]]
      }]
    }];
  }, {
    _items: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ContentChildren"],
      args: [MatTabLabelWrapper, {
        descendants: false
      }]
    }],
    _inkBar: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
      args: [MatInkBar, {
        static: true
      }]
    }],
    _tabListContainer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
      args: ['tabListContainer', {
        static: true
      }]
    }],
    _tabList: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
      args: ['tabList', {
        static: true
      }]
    }],
    _nextPaginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
      args: ['nextPaginator']
    }],
    _previousPaginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
      args: ['previousPaginator']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Base class with all of the `MatTabNav` functionality.
 * @docs-private
 */


var _MatTabNavBase = /*#__PURE__*/function (_MatPaginatedTabHeade2) {
  Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(_MatTabNavBase, _MatPaginatedTabHeade2);

  var _super10 = Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(_MatTabNavBase);

  function _MatTabNavBase(elementRef, dir, ngZone, changeDetectorRef, viewportRuler, platform, animationMode) {
    var _this18;

    Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, _MatTabNavBase);

    _this18 = _super10.call(this, elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
    _this18._disableRipple = false;
    /** Theme color of the nav bar. */

    _this18.color = 'primary';
    return _this18;
  }
  /** Background color of the tab nav. */


  Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(_MatTabNavBase, [{
    key: "_itemSelected",
    value: function _itemSelected() {// noop
    }
  }, {
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      var _this19 = this;

      // We need this to run before the `changes` subscription in parent to ensure that the
      // selectedIndex is up-to-date by the time the super class starts looking for it.
      this._items.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this._destroyed)).subscribe(function () {
        _this19.updateActiveLink();
      });

      Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(_MatTabNavBase.prototype), "ngAfterContentInit", this).call(this);
    }
    /** Notifies the component that the active link has been changed. */

  }, {
    key: "updateActiveLink",
    value: function updateActiveLink() {
      if (!this._items) {
        return;
      }

      var items = this._items.toArray();

      for (var i = 0; i < items.length; i++) {
        if (items[i].active) {
          this.selectedIndex = i;

          this._changeDetectorRef.markForCheck();

          return;
        }
      } // The ink bar should hide itself if no items are active.


      this.selectedIndex = -1;

      this._inkBar.hide();
    }
  }, {
    key: "backgroundColor",
    get: function get() {
      return this._backgroundColor;
    },
    set: function set(value) {
      var classList = this._elementRef.nativeElement.classList;
      classList.remove("mat-background-".concat(this.backgroundColor));

      if (value) {
        classList.add("mat-background-".concat(value));
      }

      this._backgroundColor = value;
    }
    /** Whether the ripple effect is disabled or not. */

  }, {
    key: "disableRipple",
    get: function get() {
      return this._disableRipple;
    },
    set: function set(value) {
      this._disableRipple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_19__["coerceBooleanProperty"])(value);
    }
  }]);

  return _MatTabNavBase;
}(MatPaginatedTabHeader);

_MatTabNavBase.ɵfac = function _MatTabNavBase_Factory(t) {
  return new (t || _MatTabNavBase)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_21__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ANIMATION_MODULE_TYPE"], 8));
};

_MatTabNavBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineDirective"]({
  type: _MatTabNavBase,
  inputs: {
    color: "color",
    backgroundColor: "backgroundColor",
    disableRipple: "disableRipple"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]]
});

_MatTabNavBase.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__["Directionality"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["NgZone"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]
  }, {
    type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__["ViewportRuler"]
  }, {
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_21__["Platform"]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
      args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ANIMATION_MODULE_TYPE"]]
    }]
  }];
};

_MatTabNavBase.propDecorators = {
  backgroundColor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  disableRipple: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }],
  color: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵsetClassMetadata"](_MatTabNavBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Directive"]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__["Directionality"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["NgZone"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]
    }, {
      type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__["ViewportRuler"]
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_21__["Platform"]
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
        args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ANIMATION_MODULE_TYPE"]]
      }]
    }];
  }, {
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    backgroundColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }],
    disableRipple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }]
  });
})();
/**
 * Navigation component matching the styles of the tab group header.
 * Provides anchored navigation with animated ink bar.
 */


var MatTabNav = /*#__PURE__*/function (_MatTabNavBase2) {
  Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MatTabNav, _MatTabNavBase2);

  var _super11 = Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(MatTabNav);

  function MatTabNav(elementRef, dir, ngZone, changeDetectorRef, viewportRuler, platform, animationMode) {
    Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatTabNav);

    return _super11.call(this, elementRef, dir, ngZone, changeDetectorRef, viewportRuler, platform, animationMode);
  }

  return MatTabNav;
}(_MatTabNavBase);

MatTabNav.ɵfac = function MatTabNav_Factory(t) {
  return new (t || MatTabNav)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_21__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ANIMATION_MODULE_TYPE"], 8));
};

MatTabNav.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: MatTabNav,
  selectors: [["", "mat-tab-nav-bar", ""]],
  contentQueries: function MatTabNav_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵcontentQuery"](dirIndex, MatTabLink, true);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx._items = _t);
    }
  },
  viewQuery: function MatTabNav_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstaticViewQuery"](MatInkBar, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstaticViewQuery"](_c5, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstaticViewQuery"](_c6, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c7, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c8, true);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx._inkBar = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx._tabListContainer = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx._tabList = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx._nextPaginator = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx._previousPaginator = _t.first);
    }
  },
  hostAttrs: [1, "mat-tab-nav-bar", "mat-tab-header"],
  hostVars: 10,
  hostBindings: function MatTabNav_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("mat-tab-header-pagination-controls-enabled", ctx._showPaginationControls)("mat-tab-header-rtl", ctx._getLayoutDirection() == "rtl")("mat-primary", ctx.color !== "warn" && ctx.color !== "accent")("mat-accent", ctx.color === "accent")("mat-warn", ctx.color === "warn");
    }
  },
  inputs: {
    color: "color"
  },
  exportAs: ["matTabNavBar", "matTabNav"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]],
  attrs: _c9,
  ngContentSelectors: _c0,
  decls: 13,
  vars: 8,
  consts: [["aria-hidden", "true", "mat-ripple", "", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-before", "mat-elevation-z4", 3, "matRippleDisabled", "click", "mousedown", "touchend"], ["previousPaginator", ""], [1, "mat-tab-header-pagination-chevron"], [1, "mat-tab-link-container", 3, "keydown"], ["tabListContainer", ""], [1, "mat-tab-list", 3, "cdkObserveContent"], ["tabList", ""], [1, "mat-tab-links"], ["aria-hidden", "true", "mat-ripple", "", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-after", "mat-elevation-z4", 3, "matRippleDisabled", "mousedown", "click", "touchend"], ["nextPaginator", ""]],
  template: function MatTabNav_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function MatTabNav_Template_div_click_0_listener() {
        return ctx._handlePaginatorClick("before");
      })("mousedown", function MatTabNav_Template_div_mousedown_0_listener($event) {
        return ctx._handlePaginatorPress("before", $event);
      })("touchend", function MatTabNav_Template_div_touchend_0_listener() {
        return ctx._stopInterval();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("keydown", function MatTabNav_Template_div_keydown_3_listener($event) {
        return ctx._handleKeydown($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("cdkObserveContent", function MatTabNav_Template_div_cdkObserveContent_5_listener() {
        return ctx._onContentChanges();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵprojection"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "mat-ink-bar");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "div", 8, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("mousedown", function MatTabNav_Template_div_mousedown_10_listener($event) {
        return ctx._handlePaginatorPress("after", $event);
      })("click", function MatTabNav_Template_div_click_10_listener() {
        return ctx._handlePaginatorClick("after");
      })("touchend", function MatTabNav_Template_div_touchend_10_listener() {
        return ctx._stopInterval();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("mat-tab-header-pagination-disabled", ctx._disableScrollBefore);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollBefore || ctx.disableRipple);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("mat-tab-header-pagination-disabled", ctx._disableScrollAfter);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollAfter || ctx.disableRipple);
    }
  },
  directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatRipple"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_9__["CdkObserveContent"], MatInkBar],
  styles: [".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:\"\";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-tab-links{display:flex}[mat-align-tabs=center]>.mat-tab-link-container .mat-tab-links{justify-content:center}[mat-align-tabs=end]>.mat-tab-link-container .mat-tab-links{justify-content:flex-end}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}.mat-tab-link{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;vertical-align:top;text-decoration:none;position:relative;overflow:hidden;-webkit-tap-highlight-color:transparent}.mat-tab-link:focus{outline:none}.mat-tab-link:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-link:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-link.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-link.mat-tab-disabled{opacity:.5}.mat-tab-link .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-link{opacity:1}[mat-stretch-tabs] .mat-tab-link{flex-basis:0;flex-grow:1}.mat-tab-link.mat-tab-disabled{pointer-events:none}@media(max-width: 599px){.mat-tab-link{min-width:72px}}\n"],
  encapsulation: 2
});

MatTabNav.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__["Directionality"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["NgZone"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]
  }, {
    type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__["ViewportRuler"]
  }, {
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_21__["Platform"]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
      args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ANIMATION_MODULE_TYPE"]]
    }]
  }];
};

MatTabNav.propDecorators = {
  _items: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ContentChildren"],
    args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_12__["forwardRef"])(function () {
      return MatTabLink;
    }), {
      descendants: true
    }]
  }],
  _inkBar: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
    args: [MatInkBar, {
      static: true
    }]
  }],
  _tabListContainer: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
    args: ['tabListContainer', {
      static: true
    }]
  }],
  _tabList: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
    args: ['tabList', {
      static: true
    }]
  }],
  _nextPaginator: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
    args: ['nextPaginator']
  }],
  _previousPaginator: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
    args: ['previousPaginator']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵsetClassMetadata"](MatTabNav, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Component"],
    args: [{
      selector: '[mat-tab-nav-bar]',
      exportAs: 'matTabNavBar, matTabNav',
      inputs: ['color'],
      template: "<div class=\"mat-tab-header-pagination mat-tab-header-pagination-before mat-elevation-z4\"\n     #previousPaginator\n     aria-hidden=\"true\"\n     mat-ripple [matRippleDisabled]=\"_disableScrollBefore || disableRipple\"\n     [class.mat-tab-header-pagination-disabled]=\"_disableScrollBefore\"\n     (click)=\"_handlePaginatorClick('before')\"\n     (mousedown)=\"_handlePaginatorPress('before', $event)\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-tab-header-pagination-chevron\"></div>\n</div>\n\n<div class=\"mat-tab-link-container\" #tabListContainer (keydown)=\"_handleKeydown($event)\">\n  <div\n    class=\"mat-tab-list\"\n    [class._mat-animation-noopable]=\"_animationMode === 'NoopAnimations'\"\n    #tabList\n    (cdkObserveContent)=\"_onContentChanges()\">\n    <div class=\"mat-tab-links\">\n      <ng-content></ng-content>\n    </div>\n    <mat-ink-bar></mat-ink-bar>\n  </div>\n</div>\n\n<div class=\"mat-tab-header-pagination mat-tab-header-pagination-after mat-elevation-z4\"\n     #nextPaginator\n     aria-hidden=\"true\"\n     mat-ripple [matRippleDisabled]=\"_disableScrollAfter || disableRipple\"\n     [class.mat-tab-header-pagination-disabled]=\"_disableScrollAfter\"\n     (mousedown)=\"_handlePaginatorPress('after', $event)\"\n     (click)=\"_handlePaginatorClick('after')\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-tab-header-pagination-chevron\"></div>\n</div>\n",
      host: {
        'class': 'mat-tab-nav-bar mat-tab-header',
        '[class.mat-tab-header-pagination-controls-enabled]': '_showPaginationControls',
        '[class.mat-tab-header-rtl]': "_getLayoutDirection() == 'rtl'",
        '[class.mat-primary]': 'color !== "warn" && color !== "accent"',
        '[class.mat-accent]': 'color === "accent"',
        '[class.mat-warn]': 'color === "warn"'
      },
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewEncapsulation"].None,
      // tslint:disable-next-line:validate-decorators
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectionStrategy"].Default,
      styles: [".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:\"\";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-tab-links{display:flex}[mat-align-tabs=center]>.mat-tab-link-container .mat-tab-links{justify-content:center}[mat-align-tabs=end]>.mat-tab-link-container .mat-tab-links{justify-content:flex-end}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}.mat-tab-link{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;vertical-align:top;text-decoration:none;position:relative;overflow:hidden;-webkit-tap-highlight-color:transparent}.mat-tab-link:focus{outline:none}.mat-tab-link:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-link:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-link.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-link.mat-tab-disabled{opacity:.5}.mat-tab-link .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-link{opacity:1}[mat-stretch-tabs] .mat-tab-link{flex-basis:0;flex-grow:1}.mat-tab-link.mat-tab-disabled{pointer-events:none}@media(max-width: 599px){.mat-tab-link{min-width:72px}}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__["Directionality"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["NgZone"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ChangeDetectorRef"]
    }, {
      type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__["ViewportRuler"]
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_21__["Platform"]
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
        args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ANIMATION_MODULE_TYPE"]]
      }]
    }];
  }, {
    _items: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ContentChildren"],
      args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_12__["forwardRef"])(function () {
        return MatTabLink;
      }), {
        descendants: true
      }]
    }],
    _inkBar: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
      args: [MatInkBar, {
        static: true
      }]
    }],
    _tabListContainer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
      args: ['tabListContainer', {
        static: true
      }]
    }],
    _tabList: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
      args: ['tabList', {
        static: true
      }]
    }],
    _nextPaginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
      args: ['nextPaginator']
    }],
    _previousPaginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"],
      args: ['previousPaginator']
    }]
  });
})(); // Boilerplate for applying mixins to MatTabLink.


var MatTabLinkMixinBase = function MatTabLinkMixinBase() {
  Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatTabLinkMixinBase);
};

var _MatTabLinkMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_13__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_13__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_13__["mixinDisabled"])(MatTabLinkMixinBase)));
/** Base class with all of the `MatTabLink` functionality. */


var _MatTabLinkBase = /*#__PURE__*/function (_MatTabLinkMixinBase2) {
  Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(_MatTabLinkBase, _MatTabLinkMixinBase2);

  var _super12 = Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(_MatTabLinkBase);

  function _MatTabLinkBase(_tabNavBar,
  /** @docs-private */
  elementRef, globalRippleOptions, tabIndex, _focusMonitor, animationMode) {
    var _this20;

    Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, _MatTabLinkBase);

    _this20 = _super12.call(this);
    _this20._tabNavBar = _tabNavBar;
    _this20.elementRef = elementRef;
    _this20._focusMonitor = _focusMonitor;
    /** Whether the tab link is active or not. */

    _this20._isActive = false;
    _this20.rippleConfig = globalRippleOptions || {};
    _this20.tabIndex = parseInt(tabIndex) || 0;

    if (animationMode === 'NoopAnimations') {
      _this20.rippleConfig.animation = {
        enterDuration: 0,
        exitDuration: 0
      };
    }

    return _this20;
  }
  /** Whether the link is active. */


  Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(_MatTabLinkBase, [{
    key: "focus",

    /** Focuses the tab link. */
    value: function focus() {
      this.elementRef.nativeElement.focus();
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      this._focusMonitor.monitor(this.elementRef);
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._focusMonitor.stopMonitoring(this.elementRef);
    }
  }, {
    key: "active",
    get: function get() {
      return this._isActive;
    },
    set: function set(value) {
      var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_19__["coerceBooleanProperty"])(value);

      if (newValue !== this._isActive) {
        this._isActive = value;

        this._tabNavBar.updateActiveLink();
      }
    }
    /**
     * Whether ripples are disabled on interaction.
     * @docs-private
     */

  }, {
    key: "rippleDisabled",
    get: function get() {
      return this.disabled || this.disableRipple || this._tabNavBar.disableRipple || !!this.rippleConfig.disabled;
    }
  }]);

  return _MatTabLinkBase;
}(_MatTabLinkMixinBase);

_MatTabLinkBase.ɵfac = function _MatTabLinkBase_Factory(t) {
  return new (t || _MatTabLinkBase)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_MatTabNavBase), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MAT_RIPPLE_GLOBAL_OPTIONS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ANIMATION_MODULE_TYPE"], 8));
};

_MatTabLinkBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineDirective"]({
  type: _MatTabLinkBase,
  inputs: {
    active: "active"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]]
});

_MatTabLinkBase.ctorParameters = function () {
  return [{
    type: _MatTabNavBase
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MAT_RIPPLE_GLOBAL_OPTIONS"]]
    }]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Attribute"],
      args: ['tabindex']
    }]
  }, {
    type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
      args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ANIMATION_MODULE_TYPE"]]
    }]
  }];
};

_MatTabLinkBase.propDecorators = {
  active: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵsetClassMetadata"](_MatTabLinkBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Directive"]
  }], function () {
    return [{
      type: _MatTabNavBase
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MAT_RIPPLE_GLOBAL_OPTIONS"]]
      }]
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Attribute"],
        args: ['tabindex']
      }]
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"]
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
        args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ANIMATION_MODULE_TYPE"]]
      }]
    }];
  }, {
    active: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Input"]
    }]
  });
})();
/**
 * Link inside of a `mat-tab-nav-bar`.
 */


var MatTabLink = /*#__PURE__*/function (_MatTabLinkBase2) {
  Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MatTabLink, _MatTabLinkBase2);

  var _super13 = Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(MatTabLink);

  function MatTabLink(tabNavBar, elementRef, ngZone, platform, globalRippleOptions, tabIndex, focusMonitor, animationMode) {
    var _this21;

    Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatTabLink);

    _this21 = _super13.call(this, tabNavBar, elementRef, globalRippleOptions, tabIndex, focusMonitor, animationMode);
    _this21._tabLinkRipple = new _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["RippleRenderer"](Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this21), ngZone, elementRef, platform);

    _this21._tabLinkRipple.setupTriggerEvents(elementRef.nativeElement);

    return _this21;
  }

  Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(MatTabLink, [{
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MatTabLink.prototype), "ngOnDestroy", this).call(this);

      this._tabLinkRipple._removeTriggerEvents();
    }
  }]);

  return MatTabLink;
}(_MatTabLinkBase);

MatTabLink.ɵfac = function MatTabLink_Factory(t) {
  return new (t || MatTabLink)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](MatTabNav), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_21__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MAT_RIPPLE_GLOBAL_OPTIONS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ANIMATION_MODULE_TYPE"], 8));
};

MatTabLink.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineDirective"]({
  type: MatTabLink,
  selectors: [["", "mat-tab-link", ""], ["", "matTabLink", ""]],
  hostAttrs: [1, "mat-tab-link", "mat-focus-indicator"],
  hostVars: 7,
  hostBindings: function MatTabLink_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("aria-current", ctx.active ? "page" : null)("aria-disabled", ctx.disabled)("tabIndex", ctx.tabIndex);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("mat-tab-disabled", ctx.disabled)("mat-tab-label-active", ctx.active);
    }
  },
  inputs: {
    disabled: "disabled",
    disableRipple: "disableRipple",
    tabIndex: "tabIndex"
  },
  exportAs: ["matTabLink"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]]
});

MatTabLink.ctorParameters = function () {
  return [{
    type: MatTabNav
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["NgZone"]
  }, {
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_21__["Platform"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MAT_RIPPLE_GLOBAL_OPTIONS"]]
    }]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Attribute"],
      args: ['tabindex']
    }]
  }, {
    type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
      args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ANIMATION_MODULE_TYPE"]]
    }]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵsetClassMetadata"](MatTabLink, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Directive"],
    args: [{
      selector: '[mat-tab-link], [matTabLink]',
      exportAs: 'matTabLink',
      inputs: ['disabled', 'disableRipple', 'tabIndex'],
      host: {
        'class': 'mat-tab-link mat-focus-indicator',
        '[attr.aria-current]': 'active ? "page" : null',
        '[attr.aria-disabled]': 'disabled',
        '[attr.tabIndex]': 'tabIndex',
        '[class.mat-tab-disabled]': 'disabled',
        '[class.mat-tab-label-active]': 'active'
      }
    }]
  }], function () {
    return [{
      type: MatTabNav
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["NgZone"]
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_21__["Platform"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MAT_RIPPLE_GLOBAL_OPTIONS"]]
      }]
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Attribute"],
        args: ['tabindex']
      }]
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"]
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["Inject"],
        args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ANIMATION_MODULE_TYPE"]]
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var MatTabsModule = function MatTabsModule() {
  Object(C_Users_admin_Desktop_Web_app_CDTT_testagain_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatTabsModule);
};

MatTabsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
  type: MatTabsModule
});
MatTabsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
  factory: function MatTabsModule_Factory(t) {
    return new (t || MatTabsModule)();
  },
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatCommonModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__["PortalModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatRippleModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_9__["ObserversModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["A11yModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatCommonModule"]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](MatTabsModule, {
    declarations: function declarations() {
      return [MatTabGroup, MatTabLabel, MatTab, MatInkBar, MatTabLabelWrapper, MatTabNav, MatTabLink, MatTabBody, MatTabBodyPortal, MatTabHeader, MatTabContent];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatCommonModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__["PortalModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatRippleModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_9__["ObserversModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["A11yModule"]];
    },
    exports: function exports() {
      return [_angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatCommonModule"], MatTabGroup, MatTabLabel, MatTab, MatTabNav, MatTabLink, MatTabContent];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵsetClassMetadata"](MatTabsModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["NgModule"],
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatCommonModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__["PortalModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatRippleModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_9__["ObserversModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["A11yModule"]],
      // Don't export all components because some are only to be used internally.
      exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatCommonModule"], MatTabGroup, MatTabLabel, MatTab, MatTabNav, MatTabLink, MatTabContent],
      declarations: [MatTabGroup, MatTabLabel, MatTab, MatInkBar, MatTabLabelWrapper, MatTabNav, MatTabLink, MatTabBody, MatTabBodyPortal, MatTabHeader, MatTabContent]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "x0XS":
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function() { return ProfileRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.component */ "Y5Lh");





var routes = [
    {
        path: "",
        component: _profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"],
    }
];
var ProfileRoutingModule = /** @class */ (function () {
    function ProfileRoutingModule() {
    }
    ProfileRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProfileRoutingModule });
    ProfileRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProfileRoutingModule_Factory(t) { return new (t || ProfileRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return ProfileRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=profile-profile-module.js.map