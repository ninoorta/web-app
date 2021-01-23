(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"],{

/***/ "8D7W":
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/components/menu-bar/menu-bar.component */ "HczI");




var PagesComponent = /** @class */ (function () {
    function PagesComponent() {
    }
    PagesComponent.prototype.ngOnInit = function () {
    };
    PagesComponent.ɵfac = function PagesComponent_Factory(t) { return new (t || PagesComponent)(); };
    PagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PagesComponent, selectors: [["app-pages"]], decls: 6, vars: 0, consts: [[1, "d-flex", "main-page"], [1, "main-page-content"], [1, "main-page-table"], [1, "menu-bar"]], template: function PagesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-menu-bar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _shared_components_menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_2__["MenuBarComponent"]], styles: ["button {\n  cursor: pointer;\n}\n\n  .customScrollbars {\n  \n  \n  \n  \n}\n\n  .customScrollbars ::-webkit-scrollbar {\n  width: 5px;\n}\n\n  .customScrollbars ::-webkit-scrollbar {\n  width: 5px;\n}\n\n  .customScrollbars ::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 5px #b3b3b3;\n  border-radius: 10px;\n}\n\n  .customScrollbars ::-webkit-scrollbar-thumb {\n  background: #d5e7f7;\n  border-radius: 10px;\n}\n\n  .customScrollbars ::-webkit-scrollbar-thumb:hover {\n  background: #d5e7f7;\n}\n\n  .insideShadow {\n  box-shadow: 4px 3px 10px 0px #b3b3b3;\n  border-radius: 10px;\n  padding: 3px;\n}\n\n  .outsideShadow {\n  box-shadow: inset 0 0 10px #d3d3d3;\n  border-radius: 10px;\n  padding: 3px;\n}\n\n.main-page[_ngcontent-%COMP%] {\n  flex-direction: column;\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  height: 100vh;\n}\n\n.main-page-content[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  overflow: hidden;\n}\n\n.main-page-table[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: white;\n  height: auto;\n}\n\n.user-login[_ngcontent-%COMP%] {\n  max-height: 100px;\n  position: fixed;\n  top: 15px;\n  right: 10px;\n}\n\n  button {\n  outline: none;\n}\n\n  .add-button {\n  border: none;\n  background: none;\n  outline: none;\n  color: #224177;\n  margin: 0px !important;\n}\n\n  .add-button i {\n  font-size: 2em;\n}\n\n  .dialog-container {\n  min-width: 25rem;\n  min-height: 20rem;\n  padding: 24px;\n}\n\n  .dialog-container .dialog-title {\n  background: #224177;\n  color: #ffffff;\n  padding: 0.7em;\n  border: none;\n  border-radius: 10px;\n  outline: none;\n  text-align: center;\n  font-size: 1.2em;\n}\n\n  .dialog-container .close-button {\n  font-size: 2em;\n  cursor: pointer;\n}\n\n  .customBtn {\n  background: #375384;\n  color: #fff;\n  border-radius: 10px;\n}\n\n  .customBtn:hover {\n  box-shadow: inset 5px 5px 10px #162135, inset -5px -5px 10px #5885d3;\n  border: 1px solid;\n  color: #fff;\n}\n\n  .btnGroup {\n  text-align: center;\n  position: fixed;\n  left: 50%;\n  bottom: 70px;\n}\n\n  .imageForm {\n  width: 100%;\n  max-width: 30em;\n  height: 200px;\n  border: 1px solid;\n  position: relative;\n  border-radius: 10px;\n}\n\n  .imageForm img {\n  width: 100%;\n  height: 100%;\n  border-radius: 10px;\n}\n\n  .imageForm i,   .imageForm span {\n  position: absolute;\n  bottom: 45%;\n  right: 45%;\n  color: #375384;\n  font-size: x-large;\n}\n\n  table.customTableStyle {\n  width: 100%;\n  border-collapse: separate;\n  font-family: \"Segoe UI\", sans-serif;\n  font-weight: 600;\n}\n\n  table.customTableStyle th.mat-header-cell {\n  background-color: #6b80a4;\n  color: white;\n  text-align: center !important;\n}\n\n  table.customTableStyle th.mat-header-cell:first-of-type {\n  padding-left: 0px;\n}\n\n  table.customTableStyle th.mat-header-cell:last-of-type {\n  padding-right: 0px;\n}\n\n  table.customTableStyle td:first-child {\n  border-top-left-radius: 10px;\n  border-bottom-left-radius: 10px;\n}\n\n  table.customTableStyle td:first-child content td:first-child {\n  border-top-left-radius: 10px;\n  border-bottom-left-radius: 10px;\n}\n\n  table.customTableStyle td:last-child {\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n\n  table.customTableStyle   tr {\n  border-bottom: none;\n}\n\n  table.customTableStyle th {\n  border-right: 1px solid;\n}\n\n  table.customTableStyle th:nth-child(1) {\n  border-top-left-radius: 10px;\n  border-bottom-left-radius: 10px;\n  border-right: 1px solid;\n  border-bottom: none;\n}\n\n  table.customTableStyle th:last-child {\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n  border-left: 1px solid;\n  border-bottom: none;\n}\n\n  table.customTableStyle .mat-elevation-z8 {\n  border-radius: 10px;\n}\n\n  table.customTableStyle .content td {\n  padding: 0rem 0 !important;\n}\n\n  table.customTableStyle tr.mat-header-row {\n  height: 35px !important;\n}\n\n  table.customTableStyle th.mat-header-cell {\n  border-bottom-style: none;\n}\n\n  .mat-dialog-container {\n  padding: 0 !important;\n}\n\n .mat-paginator .mat-paginator-container {\n  justify-content: space-between !important;\n}\n\n  th.mat-header-cell {\n  background-color: #6b80a4;\n  color: white;\n  text-align: center !important;\n}\n\n  tr {\n  border-bottom: none;\n}\n\n  tr.mat-row {\n  padding-top: 20px;\n}\n\n  td.mat-cell:first-of-type, td.mat-footer-cell[_ngcontent-%COMP%]:first-of-type, th.mat-header-cell[_ngcontent-%COMP%]:first-of-type {\n  padding: auto;\n}\n\n  textarea {\n  height: 17px;\n  resize: vertical;\n  \n}\n\n  .titleBox {\n  border-radius: 15px;\n  background-color: #6b80a4;\n  color: #fff;\n  border-radius: 10px;\n  padding: 5px 20px 5px 20px;\n  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.16);\n  font-weight: 600;\n  font-size: 13px;\n  text-align: center;\n  display: inline-block;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBhZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZUFBQTtBQURGOztBQUdBO0VBQ0UsVUFBQTtFQVFBLFVBQUE7RUFNQSxXQUFBO0VBTUEsb0JBQUE7QUFqQkY7O0FBRkU7RUFDRSxVQUFBO0FBSUo7O0FBRkU7RUFDRSxVQUFBO0FBSUo7O0FBQUU7RUFDRSxpQ0FBQTtFQUNBLG1CQUFBO0FBRUo7O0FBRUU7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBSUU7RUFDRSxtQkFBQTtBQUZKOztBQUtBO0VBRUUsb0NBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFIRjs7QUFNQTtFQUNFLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBSEY7O0FBTUE7RUFDRSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUhGOztBQUtBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUZGOztBQUlBO0VBQ0UsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUFERjs7QUFFRTtFQUNFLGNBQUE7QUFBSjs7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FBREY7O0FBRUU7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFFQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFHRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBREo7O0FBS0E7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFFQSxtQkFBQTtBQUhGOztBQUtFO0VBQ0Usb0VBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFISjs7QUFNQTtFQUVFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FBSkY7O0FBT0E7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFKRjs7QUFNRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFKSjs7QUFPRTs7RUFFRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBTEo7O0FBV0E7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGdCQUFBO0FBUkY7O0FBVUU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQVJKOztBQVdFO0VBQ0UsaUJBQUE7QUFUSjs7QUFXRTtFQUNFLGtCQUFBO0FBVEo7O0FBV0U7RUFDRSw0QkFBQTtFQUNBLCtCQUFBO0FBVEo7O0FBVUk7RUFDRSw0QkFBQTtFQUNBLCtCQUFBO0FBUk47O0FBV0U7RUFDRSw2QkFBQTtFQUNBLGdDQUFBO0FBVEo7O0FBV0U7RUFDRSxtQkFBQTtBQVRKOztBQVdFO0VBQ0UsdUJBQUE7QUFUSjs7QUFXRTtFQUNFLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBVEo7O0FBV0U7RUFDRSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQVRKOztBQVdFO0VBQ0UsbUJBQUE7QUFUSjs7QUFXRTtFQUNFLDBCQUFBO0FBVEo7O0FBV0U7RUFDRSx1QkFBQTtBQVRKOztBQVdFO0VBQ0UseUJBQUE7QUFUSjs7QUFhQTtFQUNFLHFCQUFBO0FBVkY7O0FBWUE7RUFDRSx5Q0FBQTtBQVRGOztBQVdBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7QUFSRjs7QUFVQTtFQUNFLG1CQUFBO0FBUEY7O0FBU0E7RUFDRSxpQkFBQTtBQU5GOztBQVFBOzs7RUFHRSxhQUFBO0FBTEY7O0FBUUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFBa0IsMERBQUE7QUFKcEI7O0FBT0E7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBSkYiLCJmaWxlIjoicGFnZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmdDb2xvcjogIzM3NTM4NDtcclxuXHJcbjo6bmctZGVlcCBidXR0b24ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG46Om5nLWRlZXAgLmN1c3RvbVNjcm9sbGJhcnMge1xyXG4gIC8qIHdpZHRoICovXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogNXB4O1xyXG4gIH1cclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA1cHg7XHJcbiAgfVxyXG5cclxuICAvKiBUcmFjayAqL1xyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCAjYjNiM2IzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcblxyXG4gIC8qIEhhbmRsZSAqL1xyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogI2Q1ZTdmNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAvKiBIYW5kbGUgb24gaG92ZXIgKi9cclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNkNWU3Zjc7XHJcbiAgfVxyXG59XHJcbjo6bmctZGVlcCAuaW5zaWRlU2hhZG93IHtcclxuICAvLyBib3gtc2hhZG93OiA0cHggM3B4IDEwcHggMHB4ICM0YzRjNGM7XHJcbiAgYm94LXNoYWRvdzogNHB4IDNweCAxMHB4IDBweCAjYjNiM2IzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogM3B4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm91dHNpZGVTaGFkb3cge1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4ICNkM2QzZDM7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiAzcHg7XHJcbn1cclxuXHJcbi5tYWluLXBhZ2Uge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG4ubWFpbi1wYWdlLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLm1haW4tcGFnZS10YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4udXNlci1sb2dpbiB7XHJcbiAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMTVweDtcclxuICByaWdodDogMTBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIGJ1dHRvbiB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5hZGQtYnV0dG9uIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGNvbG9yOiAjMjI0MTc3O1xyXG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgaSB7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgbWluLXdpZHRoOiAyNXJlbTtcclxuICBtaW4taGVpZ2h0OiAyMHJlbTtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG4gIC5kaWFsb2ctdGl0bGUge1xyXG4gICAgYmFja2dyb3VuZDogIzIyNDE3NztcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgLy8gd2lkdGg6IDEwcmVtO1xyXG4gICAgcGFkZGluZzogMC43ZW07XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgfVxyXG4gIC5jbG9zZS1idXR0b24ge1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAgLmN1c3RvbUJ0biB7XHJcbiAgYmFja2dyb3VuZDogIzM3NTM4NDtcclxuICBjb2xvcjogI2ZmZjtcclxuICAvLyB3aWR0aDogNjIlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgLy8gbWFyZ2luLWxlZnQ6IC0xN3B4O1xyXG4gICY6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgNXB4IDVweCAxMHB4ICMxNjIxMzUsIGluc2V0IC01cHggLTVweCAxMHB4ICM1ODg1ZDM7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxufVxyXG46Om5nLWRlZXAgLmJ0bkdyb3VwIHtcclxuICAvLyB3aWR0aDogMTAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogNTAlO1xyXG4gIGJvdHRvbTogNzBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5pbWFnZUZvcm0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMzBlbTtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgaSxcclxuICBzcGFuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogNDUlO1xyXG4gICAgcmlnaHQ6IDQ1JTtcclxuICAgIGNvbG9yOiAjMzc1Mzg0O1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgLy8gYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIC8vIHBhZGRpbmc6IDJweDtcclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCB0YWJsZS5jdXN0b21UYWJsZVN0eWxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbiAgdGgubWF0LWhlYWRlci1jZWxsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2YjgwYTQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIHRoLm1hdC1oZWFkZXItY2VsbDpmaXJzdC1vZi10eXBlIHtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gIH1cclxuICB0aC5tYXQtaGVhZGVyLWNlbGw6bGFzdC1vZi10eXBlIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICB9XHJcbiAgdGQ6Zmlyc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICBjb250ZW50IHRkOmZpcnN0LWNoaWxkIHtcclxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIH1cclxuICB9XHJcbiAgdGQ6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuICA6Om5nLWRlZXAgdHIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICB9XHJcbiAgdGgge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQ7XHJcbiAgfVxyXG4gIHRoOm50aC1jaGlsZCgxKSB7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICB9XHJcbiAgdGg6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZDtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgfVxyXG4gIC5tYXQtZWxldmF0aW9uLXo4IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG4gIC5jb250ZW50IHRkIHtcclxuICAgIHBhZGRpbmc6IDByZW0gMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICB0ci5tYXQtaGVhZGVyLXJvdyB7XHJcbiAgICBoZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgdGgubWF0LWhlYWRlci1jZWxsIHtcclxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuOjpuZy1kZWVwLm1hdC1wYWdpbmF0b3IgLm1hdC1wYWdpbmF0b3ItY29udGFpbmVyIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAgdGgubWF0LWhlYWRlci1jZWxsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmI4MGE0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAgdHIge1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuOjpuZy1kZWVwIHRyLm1hdC1yb3cge1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcbjo6bmctZGVlcCB0ZC5tYXQtY2VsbDpmaXJzdC1vZi10eXBlLFxyXG50ZC5tYXQtZm9vdGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSxcclxudGgubWF0LWhlYWRlci1jZWxsOmZpcnN0LW9mLXR5cGUge1xyXG4gIHBhZGRpbmc6IGF1dG87XHJcbn1cclxuXHJcbjo6bmctZGVlcCB0ZXh0YXJlYSB7XHJcbiAgaGVpZ2h0OiAxN3B4O1xyXG4gIHJlc2l6ZTogdmVydGljYWw7IC8qIGVuYWJsZXMgdmVydGljYWwgaGVpZ2h0IGR1ZSB0byBzaXplIG9mIGNvbnRhaW5lZCB0ZXh0ICovXHJcbn1cclxuXHJcbjo6bmctZGVlcCAudGl0bGVCb3gge1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZiODBhNDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDVweCAyMHB4IDVweCAyMHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */"] });
    return PagesComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pages',
                styleUrls: ['pages.component.scss'],
                template: "\n      <div class=\"d-flex main-page\">\n        <div class=\"main-page-content\">\n            <div class=\"main-page-table\">\n                <router-outlet></router-outlet>\n            </div>\n        </div>\n        <div class=\"menu-bar\">\n            <app-menu-bar> </app-menu-bar>\n        </div>\n    </div>\n  \n  "
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Lzvh":
/*!**********************************************!*\
  !*** ./src/app/pages/page-routing.module.ts ***!
  \**********************************************/
/*! exports provided: PagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function() { return PagesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages.component */ "8D7W");


//component



var routes = [
    {
        path: '',
        component: _pages_component__WEBPACK_IMPORTED_MODULE_2__["PagesComponent"],
        children: [
            {
                path: 'home',
                loadChildren: function () { return __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "99Un"))
                    .then(function (m) { return m.HomeModule; }); }
            },
            {
                path: 'camera',
                loadChildren: function () { return __webpack_require__.e(/*! import() | camera-camera-module */ "camera-camera-module").then(__webpack_require__.bind(null, /*! ./camera/camera.module */ "eoT/"))
                    .then(function (m) { return m.CameraModule; }); }
            },
            {
                path: 'profile',
                loadChildren: function () { return __webpack_require__.e(/*! import() | profile-profile-module */ "profile-profile-module").then(__webpack_require__.bind(null, /*! ./profile/profile.module */ "723k"))
                    .then(function (m) { return m.ProfileModule; }); }
            },
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full',
            }
        ]
    }
];
var PagesRoutingModule = /** @class */ (function () {
    function PagesRoutingModule() {
    }
    PagesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PagesRoutingModule });
    PagesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PagesRoutingModule_Factory(t) { return new (t || PagesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return PagesRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "dgmN":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-routing.module */ "Lzvh");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages.component */ "8D7W");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");




//shared


var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PagesModule });
    PagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PagesModule_Factory(t) { return new (t || PagesModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _page_routing_module__WEBPACK_IMPORTED_MODULE_2__["PagesRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            ]] });
    return PagesModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesModule, { declarations: [_pages_component__WEBPACK_IMPORTED_MODULE_3__["PagesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _page_routing_module__WEBPACK_IMPORTED_MODULE_2__["PagesRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_pages_component__WEBPACK_IMPORTED_MODULE_3__["PagesComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _page_routing_module__WEBPACK_IMPORTED_MODULE_2__["PagesRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-pages-module.js.map