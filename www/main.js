(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\admin\Desktop\Web-app_CDTT\testagain\master\src\main.ts */"zUnb");


/***/ }),

/***/ "668k":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/loader/loader.component.ts ***!
  \**************************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/loader.service */ "cxgq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function LoaderComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-spinner", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 60)("color", ctx_r0.color)("mode", ctx_r0.mode)("value", ctx_r0.value);
} }
var LoaderComponent = /** @class */ (function () {
    function LoaderComponent(loaderService) {
        this.loaderService = loaderService;
        this.color = 'accent';
        this.mode = 'indeterminate';
        this.value = 50;
        this.isLoading = this.loaderService.isLoading;
    }
    LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"])); };
    LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], decls: 2, vars: 3, consts: [["class", "overlay", 4, "ngIf"], [1, "overlay"], [1, "spinner", 3, "diameter", "color", "mode", "value"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoaderComponent_div_0_Template, 2, 4, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.isLoading));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: [".overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  display: block;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: rgba(74, 74, 74, 0.8);\n  z-index: 99999;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  margin-top: -30px;\n  margin-left: -30px;\n  background: none;\n}\n\n  .mat-progress-spinner.mat-accent circle {\n  stroke: #9CAAC2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbG9hZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsdUNBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBQ0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFDQTtFQUNFLGVBQUE7QUFFRiIsImZpbGUiOiJsb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICB0b3A6MDtcclxuICAgIGxlZnQ6MDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSg3NCw3NCw3NCwuOCk7XHJcbiAgICB6LWluZGV4Ojk5OTk5O1xyXG4gIH1cclxuICAuc3Bpbm5lciB7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcDo1MCU7XHJcbiAgICBsZWZ0OjUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMzBweDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcblxyXG4gIH1cclxuOjpuZy1kZWVwIC5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lci5tYXQtYWNjZW50IGNpcmNsZSB7XHJcbiAgc3Ryb2tlOiAjOUNBQUMyO1xyXG59Il19 */"] });
    return LoaderComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loader',
                templateUrl: './loader.component.html',
                styleUrls: ['./loader.component.scss']
            }]
    }], function () { return [{ type: _services_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "HczI":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/menu-bar/menu-bar.component.ts ***!
  \******************************************************************/
/*! exports provided: MenuBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuBarComponent", function() { return MenuBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _menu_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-item */ "ijh6");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





function MenuBarComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r1 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.splitedUrl.includes(item_r1.elementOnUrl) ? "liActive" : "liDefault");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", item_r1.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", item_r1.name);
} }
var MenuBarComponent = /** @class */ (function () {
    function MenuBarComponent() {
        this.menuItem = _menu_item__WEBPACK_IMPORTED_MODULE_1__["menuItem"];
    }
    MenuBarComponent.prototype.ngDoCheck = function () {
        this.splitedUrl = window.location.href.split('/');
        // console.log("do check:", this.splitedUrl);
    };
    MenuBarComponent.prototype.ngOnInit = function () {
        this.splitedUrl = window.location.href.split('/');
        // console.log("do init:", this.splitedUrl);
    };
    MenuBarComponent.ɵfac = function MenuBarComponent_Factory(t) { return new (t || MenuBarComponent)(); };
    MenuBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuBarComponent, selectors: [["app-menu-bar"]], decls: 3, vars: 1, consts: [[1, "menubar"], [3, "class", "routerLink", 4, "ngFor", "ngForOf"], [3, "routerLink"], [3, "name"]], template: function MenuBarComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MenuBarComponent_li_2_Template, 2, 4, "li", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItem);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["span[_ngcontent-%COMP%] {\n  font-size: 2em;\n  margin-right: 10px;\n}\n\nion-icon[_ngcontent-%COMP%] {\n  font-size: 2em;\n  margin-right: 10px;\n}\n\n.logo[_ngcontent-%COMP%] {\n  width: 200px;\n  text-align: center;\n}\n\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.menubar[_ngcontent-%COMP%] {\n  height: 5rem;\n  background: #d5e7f7;\n  border-top-right-radius: 26px;\n  border-top-left-radius: 26px;\n  display: flex;\n  justify-content: center;\n  position: fixed;\n  z-index: 1001;\n  width: 100%;\n  bottom: 0;\n}\n\n.menubar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding-left: 0;\n  margin-bottom: unset;\n  width: 80%;\n}\n\n.menubar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: #224177;\n}\n\n.liDefault[_ngcontent-%COMP%] {\n  outline: none;\n  list-style: none;\n  color: white;\n  padding: 4px 10px 4px 20px;\n  text-align: center;\n}\n\n.menubar[_ngcontent-%COMP%]   .liActive[_ngcontent-%COMP%] {\n  outline: none;\n  list-style: none;\n  padding: 4px 10px 4px 20px;\n  text-align: center;\n  color: #224177;\n  position: relative;\n  border-radius: 0 10px 10px 0;\n  background-image: url('menu-bar-icon-bg.png');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  margin-top: -0.15rem;\n}\n\n.menubar[_ngcontent-%COMP%]   .liActive[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background-color: #d5e7f7;\n  padding: 1rem;\n  border-radius: 50%;\n  margin-bottom: 2rem;\n  font-size: 3rem;\n}\n\n.menubar[_ngcontent-%COMP%]   .liActive[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  background-color: #d5e7f7;\n  padding: 1rem;\n  border-radius: 50%;\n  margin-bottom: 2rem;\n  font-size: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbWVudS1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUFBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBR0Y7O0FBRkU7RUFDRSxnQkFBQTtBQUlKOztBQURBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFJRjs7QUFGQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7QUFLRjs7QUFIQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUVBLGNBQUE7QUFLRjs7QUFIQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FBTUY7O0FBSEE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUVBLG9CQUFBO0FBS0Y7O0FBSkU7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQU1KOztBQUpFO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFNSiIsImZpbGUiOiJtZW51LWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5pb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5sb2dvIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGltZyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxufVxyXG4ubWVudWJhciB7XHJcbiAgaGVpZ2h0OiA1cmVtO1xyXG4gIGJhY2tncm91bmQ6ICNkNWU3Zjc7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI2cHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjZweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxMDAxO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvdHRvbTogMDtcclxufVxyXG4ubWVudWJhciB1bCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IHVuc2V0O1xyXG4gIHdpZHRoOiA4MCU7XHJcbn1cclxuLm1lbnViYXIgdWwgbGkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAvLyBtYXJnaW4tdG9wOiAwLjJlbTtcclxuICBjb2xvcjogIzIyNDE3NztcclxufVxyXG4ubGlEZWZhdWx0IHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDRweCAxMHB4IDRweCAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1lbnViYXIgLmxpQWN0aXZlIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZzogNHB4IDEwcHggNHB4IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjMjI0MTc3O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXItcmFkaXVzOiAwIDEwcHggMTBweCAwO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbWVudS1iYXItaWNvbi1iZy5wbmdcIik7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAvLyBtYXJnaW4tdG9wOiAtMS4yNXJlbTtcclxuICBtYXJnaW4tdG9wOiAtMC4xNXJlbTtcclxuICBzcGFuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNWU3Zjc7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICB9XHJcbiAgaW9uLWljb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q1ZTdmNztcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
    return MenuBarComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu-bar',
                templateUrl: './menu-bar.component.html',
                styleUrls: ['./menu-bar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Lk/i":
/*!***********************************************************!*\
  !*** ./src/app/shared/interceptors/loader.interceptor.ts ***!
  \***********************************************************/
/*! exports provided: LoaderInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderInterceptor", function() { return LoaderInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/loader.service */ "cxgq");




var LoaderInterceptor = /** @class */ (function () {
    function LoaderInterceptor(loaderService) {
        this.loaderService = loaderService;
    }
    LoaderInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        this.loaderService.show();
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () { return _this.loaderService.hide(); }));
    };
    LoaderInterceptor.ɵfac = function LoaderInterceptor_Factory(t) { return new (t || LoaderInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"])); };
    LoaderInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoaderInterceptor, factory: LoaderInterceptor.ɵfac });
    return LoaderInterceptor;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _services_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"] }]; }, null); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/menu-bar/menu-bar.component */ "HczI");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ "aZ8m");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/loader/loader.component */ "668k");
//Angular module



// import { HttpClientModule } from "@angular/common/http";

//component




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                // MatIconModule,
                // MatSidenavModule,
                // MatDialogModule,
                // MatCardModule,
                // MatFormFieldModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            ], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            // MatSidenavModule,
            // MatIconModule,
            // MatDialogModule,
            // MatCardModule,
            // MatToolbarModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] });
    return SharedModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_4__["MenuBarComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        // NotificationsComponent,
        _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__["LoaderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        // MatIconModule,
        // MatSidenavModule,
        // MatDialogModule,
        // MatCardModule,
        // MatFormFieldModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]], exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        // HttpClientModule,
        // MatAutocompleteModule,
        // MatButtonModule,
        // MatFormFieldModule,
        // MatCheckboxModule,
        // MatCheckboxModule,
        // MatInputModule,
        // MatTableModule,
        // MatPaginatorModule,
        _components_menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_4__["MenuBarComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        // MatSidenavModule,
        // MatIconModule,
        // MatDialogModule,
        // MatCardModule,
        // MatToolbarModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        // MatMenuModule,
        // MatProgressSpinnerModule,
        // MatTabsModule,
        // MatRadioModule,
        // MatSelectModule,
        _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__["LoaderComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_4__["MenuBarComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                    // NotificationsComponent,
                    _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__["LoaderComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    // MatIconModule,
                    // MatSidenavModule,
                    // MatDialogModule,
                    // MatCardModule,
                    // MatFormFieldModule,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ],
                exports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    // HttpClientModule,
                    // MatAutocompleteModule,
                    // MatButtonModule,
                    // MatFormFieldModule,
                    // MatCheckboxModule,
                    // MatCheckboxModule,
                    // MatInputModule,
                    // MatTableModule,
                    // MatPaginatorModule,
                    _components_menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_4__["MenuBarComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                    // MatSidenavModule,
                    // MatIconModule,
                    // MatDialogModule,
                    // MatCardModule,
                    // MatToolbarModule,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    // MatMenuModule,
                    // MatProgressSpinnerModule,
                    // MatTabsModule,
                    // MatRadioModule,
                    // MatSelectModule,
                    _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__["LoaderComponent"],
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-ui-loader */ "gren");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




var AppComponent = /** @class */ (function () {
    function AppComponent(ngxService) {
        this.ngxService = ngxService;
        this.title = 'second';
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.ngxService.start(); // start foreground spinner of the master loader with 'default' taskId
        // // Stop the foreground loading after 5s
        // setTimeout(() => {
        //   this.ngxService.stop(); // stop foreground spinner of the master loader with 'default' taskId
        // }, 5000);
        // // OR
        // this.ngxService.startBackground("do-background-things");
        // // Do something here...
        // this.ngxService.stopBackground("do-background-things");
        // this.ngxService.startLoader("loader-01"); // start foreground spinner of the loader "loader-01" with 'default' taskId
        // // Stop the foreground loading after 5s
        // setTimeout(() => {
        //   this.ngxService.stopLoader("loader-01"); // stop foreground spinner of the loader "loader-01" with 'default' taskId
        // }, 5000);
    };
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_1__["NgxUiLoaderService"])); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-ui-loader");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        } }, directives: [ngx_ui_loader__WEBPACK_IMPORTED_MODULE_1__["ɵb"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["*[_ngcontent-%COMP%] {\n  font-family: \"Segoe UI\", sans-serif !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOENBQUE7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_1__["NgxUiLoaderService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../app/shared/shared.module */ "PCNd");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/services/loader.service */ "cxgq");
/* harmony import */ var _shared_interceptors_loader_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/interceptors/loader.interceptor */ "Lk/i");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-ui-loader */ "gren");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");





// Angular materials
// import { MatTabsModule } from "@angular/material/tabs";
// import { MatMenuModule } from '@angular/material/menu';
// import { MatButton, MatButtonModule } from '@angular/material/button';
// import { MatIconModule } from "@angular/material/icon";
// ---




// --
// Firebase




//shared

// Using loader 




// Fix error not knowing css


// dialog

// snackbar for noti




var ngxUiLoaderConfig = {
    "bgsColor": "red",
    "bgsOpacity": 0.5,
    "bgsPosition": "bottom-right",
    "bgsSize": 60,
    "bgsType": "ball-spin-clockwise",
    "blur": 5,
    "delay": 0,
    "fastFadeOut": true,
    "fgsColor": "#d5e7f7",
    "fgsPosition": "center-center",
    "fgsSize": 60,
    "fgsType": "ball-spin-clockwise",
    "gap": 24,
    "logoPosition": "center-center",
    "logoSize": 120,
    "logoUrl": "",
    "masterLoaderId": "master",
    "overlayBorderRadius": "0",
    "overlayColor": "rgba(40, 40, 40, 0.8)",
    "pbColor": "#d5e7f7",
    "pbDirection": "ltr",
    "pbThickness": 3,
    "hasProgressBar": true,
    "text": "",
    "textColor": "#FFFFFF",
    "textPosition": "center-center",
    "maxTime": -1,
    "minTime": 300
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_14__["LoaderService"],
            {
                provide: _angular_common__WEBPACK_IMPORTED_MODULE_18__["APP_BASE_HREF"],
                useValue: "/",
            },
            // {
            //   provide: HTTP_INTERCEPTORS,
            //   useClass: APIInterceptor,
            //   multi: true,
            // },
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HTTP_INTERCEPTORS"],
                useClass: _shared_interceptors_loader_interceptor__WEBPACK_IMPORTED_MODULE_15__["LoaderInterceptor"],
                multi: true,
            },
            {
                provide: _angular_common__WEBPACK_IMPORTED_MODULE_18__["LocationStrategy"],
                useClass: _angular_common__WEBPACK_IMPORTED_MODULE_18__["HashLocationStrategy"],
            }
        ], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
                ngx_ui_loader__WEBPACK_IMPORTED_MODULE_16__["NgxUiLoaderModule"].forRoot(ngxUiLoaderConfig),
                ngx_ui_loader__WEBPACK_IMPORTED_MODULE_16__["NgxUiLoaderRouterModule"],
                ngx_ui_loader__WEBPACK_IMPORTED_MODULE_16__["NgxUiLoaderHttpModule"].forRoot({ showForeground: true }),
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp({
                    apiKey: "AIzaSyAz--9MYGqCLLNwNDK-S_xp5NxJL_KwiyU",
                    authDomain: "mindx-chat-efd7a.firebaseapp.com",
                    databaseURL: "https://mindx-chat-efd7a.firebaseio.com",
                    projectId: "mindx-chat-efd7a",
                    storageBucket: "mindx-chat-efd7a.appspot.com",
                    messagingSenderId: "488630916249",
                    appId: "1:488630916249:web:2a017e25bd1abb29b55408",
                    measurementId: "G-9P4M4F5VHE"
                }),
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthModule"],
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestoreModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__["MatSnackBarModule"]
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_16__["NgxUiLoaderModule"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_16__["NgxUiLoaderRouterModule"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_16__["NgxUiLoaderHttpModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthModule"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestoreModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__["MatSnackBarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
                    ngx_ui_loader__WEBPACK_IMPORTED_MODULE_16__["NgxUiLoaderModule"].forRoot(ngxUiLoaderConfig),
                    ngx_ui_loader__WEBPACK_IMPORTED_MODULE_16__["NgxUiLoaderRouterModule"],
                    ngx_ui_loader__WEBPACK_IMPORTED_MODULE_16__["NgxUiLoaderHttpModule"].forRoot({ showForeground: true }),
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp({
                        apiKey: "AIzaSyAz--9MYGqCLLNwNDK-S_xp5NxJL_KwiyU",
                        authDomain: "mindx-chat-efd7a.firebaseapp.com",
                        databaseURL: "https://mindx-chat-efd7a.firebaseio.com",
                        projectId: "mindx-chat-efd7a",
                        storageBucket: "mindx-chat-efd7a.appspot.com",
                        messagingSenderId: "488630916249",
                        appId: "1:488630916249:web:2a017e25bd1abb29b55408",
                        measurementId: "G-9P4M4F5VHE"
                    }),
                    _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthModule"],
                    _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestoreModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__["MatSnackBarModule"]
                ],
                providers: [
                    _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_14__["LoaderService"],
                    {
                        provide: _angular_common__WEBPACK_IMPORTED_MODULE_18__["APP_BASE_HREF"],
                        useValue: "/",
                    },
                    // {
                    //   provide: HTTP_INTERCEPTORS,
                    //   useClass: APIInterceptor,
                    //   multi: true,
                    // },
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HTTP_INTERCEPTORS"],
                        useClass: _shared_interceptors_loader_interceptor__WEBPACK_IMPORTED_MODULE_15__["LoaderInterceptor"],
                        multi: true,
                    },
                    {
                        provide: _angular_common__WEBPACK_IMPORTED_MODULE_18__["LocationStrategy"],
                        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_18__["HashLocationStrategy"],
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aZ8m":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 2, vars: 0, template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "header works!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
    return HeaderComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "cxgq":
/*!***************************************************!*\
  !*** ./src/app/shared/services/loader.service.ts ***!
  \***************************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



var LoaderService = /** @class */ (function () {
    function LoaderService() {
        this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    LoaderService.prototype.show = function () {
        this.isLoading.next(true);
    };
    LoaderService.prototype.hide = function () {
        this.isLoading.next(false);
    };
    LoaderService.ɵfac = function LoaderService_Factory(t) { return new (t || LoaderService)(); };
    LoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoaderService, factory: LoaderService.ɵfac });
    return LoaderService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "ijh6":
/*!*********************************************************!*\
  !*** ./src/app/shared/components/menu-bar/menu-item.ts ***!
  \*********************************************************/
/*! exports provided: menuItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuItem", function() { return menuItem; });
var menuItem = [
    {
        elementOnUrl: 'home',
        class: 'material-icons',
        name: 'home-outline',
        icon: 'home',
        link: '/pages/home'
    },
    {
        elementOnUrl: 'camera',
        class: 'material-icons',
        name: 'barcode-outline',
        icon: 'qr_code_scanner',
        link: '/pages/camera'
    },
    {
        elementOnUrl: 'profile',
        class: 'material-icons',
        name: 'person-outline',
        icon: 'person',
        link: '/pages/profile'
    },
];


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




var routes = [
    {
        path: 'login',
        loadChildren: function () { return Promise.all(/*! import() | login-login-module */[__webpack_require__.e("default~camera-camera-module~home-home-module~login-login-module~profile-profile-module"), __webpack_require__.e("default~firebase-auth~login-login-module"), __webpack_require__.e("default~login-login-module~profile-profile-module"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null, /*! ./login/login.module */ "X3zk"))
            .then(function (m) { return m.LoginModule; }); },
    },
    {
        path: 'pages',
        loadChildren: function () { return __webpack_require__.e(/*! import() | pages-pages-module */ "pages-pages-module").then(__webpack_require__.bind(null, /*! ./pages/pages.module */ "dgmN"))
            .then(function (m) { return m.PagesModule; }); }
    },
    { path: '', redirectTo: 'pages', pathMatch: 'full' },
    { path: '**', redirectTo: 'pages' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map