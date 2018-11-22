(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navigation\">\n    <input type=\"checkbox\" class=\"navigation__checkbox\" id=\"navi-toggle\">\n    <label for=\"navi-toggle\" class=\"navigation__button\">\n          <span class=\"navigation__icon\">&nbsp;</span>\n    </label>\n    <div class=\"navigation__background\">&nbsp;</div>\n    <nav class=\"navigation__nav\">\n        <ul class=\"navigation__list\">\n            <li class=\"navigation__item\"><a class=\"navigation__link\" [routerLink]=\"['/sobre-mi']\" [routerLinkActive]=\"['actived']\">About</a></li>\n            <li class=\"navigation__item\"><a class=\"navigation__link\" [routerLink]=\"['/proyectos']\" [routerLinkActive]=\"['actived']\">Projects</a></li>\n            <li class=\"navigation__item\"><a class=\"navigation__link\" [routerLink]=\"['/crear-proyecto']\" [routerLinkActive]=\"['actived']\">Create</a></li>\n            <li class=\"navigation__item\"><a class=\"navigation__link\" [routerLink]=\"['/contacto']\" [routerLinkActive]=\"['actived']\">Contact</a></li>\n        </ul>\n    </nav>\n    \n</div>\n\n<header class=\"header\">\n  <div class=\"header__logo-box\">\n    <img src=\"../assets/img/logo-white.png\" class=\"header__logo\" />\n  </div>\n \n  <div class=\"header__text-box\">\n    <h1 class=\"heading-primary\">\n      <span class=\"heading-primary--main\">Daniel Velasco</span>\n      <span class=\"heading-primary--sub\">Web & Graphic Designer / Audiovisual Artist</span>\n    </h1>\n\n    <a href=\"#\" class=\"my-btn my-btn--white my-btn--animated\">Enter site</a>\n  </div>\n</header>\n\n<section id=\"content\" class=\"mt-5\">\n  <router-outlet></router-outlet>\n</section>\n\n<footer>\n  <h4>Daniel Velasco &copy;</h4>\n</footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Daniel Velasco';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/projects/projects.component */ "./src/app/components/projects/projects.component.ts");
/* harmony import */ var _components_create_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/create/create.component */ "./src/app/components/create/create.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/error/error.component */ "./src/app/components/error/error.component.ts");
/* harmony import */ var _components_components_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/components.component */ "./src/app/components/components.component.ts");
/* harmony import */ var _components_detail_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/detail/detail.component */ "./src/app/components/detail/detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsComponent"],
                _components_create_create_component__WEBPACK_IMPORTED_MODULE_9__["CreateComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
                _components_error_error_component__WEBPACK_IMPORTED_MODULE_11__["ErrorComponent"],
                _components_components_component__WEBPACK_IMPORTED_MODULE_12__["ComponentsComponent"],
                _components_detail_detail_component__WEBPACK_IMPORTED_MODULE_13__["DetailComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_4__["routing"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_5__["AngularFontAwesomeModule"]
            ],
            providers: [
                _app_routing__WEBPACK_IMPORTED_MODULE_4__["appRoutingProviders"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: appRoutingProviders, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutingProviders", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/projects/projects.component */ "./src/app/components/projects/projects.component.ts");
/* harmony import */ var _components_create_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/create/create.component */ "./src/app/components/create/create.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/error/error.component */ "./src/app/components/error/error.component.ts");
/* harmony import */ var _components_detail_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/detail/detail.component */ "./src/app/components/detail/detail.component.ts");







var appRoutes = [
    { path: '', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"] },
    { path: 'sobre-mi', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"] },
    { path: 'proyectos', component: _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"] },
    { path: 'crear-proyecto', component: _components_create_create_component__WEBPACK_IMPORTED_MODULE_3__["CreateComponent"] },
    { path: 'contacto', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"] },
    { path: 'proyecto/:id', component: _components_detail_detail_component__WEBPACK_IMPORTED_MODULE_6__["DetailComponent"] },
    { path: '**', component: _components_error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"] },
];
var appRoutingProviders = [];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n    <section class=\"section-about\">\n        <div class=\"u-center-text\">\n            <h2 class=\"heading-secondary mt-5 mb-5\">\n                About my professional skills.\n            </h2>\n        </div>\n        <div class=\"main-grid mt-5\">\n            <div class=\"main-grid__row\">\n                <div class=\"col-1-of-2 p-4\">\n                    <h3 class=\"text-grey\">TECHNOLOGICAL KNOWLEDGE</h3>\n                    <div class=\"light-text\">\n                        <ul>\n                            <li><i class=\"far fa-arrow-alt-circle-right\"></i>Advanced Control of designs software (Photoshop, Illustrator, Animated).</li>\n                            <li>Resposive Web design (CSS Grid /Flex Box, SASS, HTML5).</li>\n                            <li>User Interface designer UI (Wireframes, Skecth, Zepplin, Photoshop)</li>\n                            <li>Front-End Mock-Up (ES6, Jquery, Angular, React, Wordpress).</li>\n                            <li>Post Video and Audio production (After Effects, Premier Pro, FL Studio).</li>\n                        </ul>\n                    </div>\n                    <a href=\"#\" class=\"btn-text\">Work Experience &rarr;</a>\n                </div>\n                <div class=\"col-1-of-2\">\n                    <div class=\"composition\">\n                        <img src=\"../../../assets/img/nat-1-large.jpg\" alt=\"Img 1\" class=\"composition__photo composition__photo--p1\">\n                        <img src=\"../../../assets/img/nat-2-large.jpg\" alt=\"Img 2\" class=\"composition__photo composition__photo--p2\">\n                        <img src=\"../../../assets/img/nat-3-large.jpg\" alt=\"Img 3\" class=\"composition__photo composition__photo--p3\">\n                    </div>\n\n                </div>\n            </div>\n        </div>\n             \n        \n    </section>\n\n</main>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!--\n  <div class=\"main-grid\">\n   <div class=\"main-grid__row\">\n       <div class=\"col-1-of-2\">\n           col 1 of 2\n       </div>\n       <div class=\"col-1-of-2\">\n         col 1 of\n       </div>\n   </div>\n   <div class=\"main-grid__row\">\n    <div class=\"col-1-of-3\">\n        col 1 of 2\n    </div>\n    <div class=\"col-2-of-3\">\n      col 2 of 3\n    </div>\n</div>\n\n</div>\n\n\n\n\n\n<div id=\"title-box\">\n  <h1>{{title}}</h1>\n  <h2>{{subtitle}}</h2>\n  <p>{{email}}</p>\n</div>\n\n-->"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.title = "Daniel Velasco";
        this.subtitle = "Diseñador Grafico & Web";
        this.email = "dldcomerce@gmail.com";
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/components.component.css":
/*!*****************************************************!*\
  !*** ./src/app/components/components.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcG9uZW50cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/components.component.html":
/*!******************************************************!*\
  !*** ./src/app/components/components.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  components works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/components.component.ts":
/*!****************************************************!*\
  !*** ./src/app/components/components.component.ts ***!
  \****************************************************/
/*! exports provided: ComponentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsComponent", function() { return ComponentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComponentsComponent = /** @class */ (function () {
    function ComponentsComponent() {
    }
    ComponentsComponent.prototype.ngOnInit = function () {
    };
    ComponentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-components',
            template: __webpack_require__(/*! ./components.component.html */ "./src/app/components/components.component.html"),
            styles: [__webpack_require__(/*! ./components.component.css */ "./src/app/components/components.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ComponentsComponent);
    return ComponentsComponent;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/contact/contact.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  contact works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/components/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/create/create.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/create/create.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-msg {\r\n    color: red;    \r\n}\r\n\r\nform input[disabled] {\r\n   opacity:0.4;\r\n   cursor: not-allowed;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmVhdGUvY3JlYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0NBQ2Q7O0FBRUQ7R0FDRyxZQUFZO0dBQ1osb0JBQW9CO0NBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jcmVhdGUvY3JlYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3ItbXNnIHtcclxuICAgIGNvbG9yOiByZWQ7ICAgIFxyXG59XHJcblxyXG5mb3JtIGlucHV0W2Rpc2FibGVkXSB7XHJcbiAgIG9wYWNpdHk6MC40O1xyXG4gICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/create/create.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/create/create.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>{{title}}</h2>\n  <div class=\"msg-succes\" *ngIf=\"status == 'success'\">\n    El proyecto se ha creado correctamente.<a [routerLink]=\"['/proyecto', save_project._id]\">Verlo aquí.</a>\n  </div>\n  <div class=\"msg-failed\" *ngIf=\"status == 'failed'\">\n    El proyecto no se ha creado.\n  </div>\n\n\n  <form #projectForm=\"ngForm\" (ngSubmit)=\"onSubmit(projectForm)\">\n    <div class=\"form-group\">\n      <label for=\"name\">Nombre del Proyecto</label>\n      <input class=\"form-control\" type=\"text\" name=\"name\" #name=\"ngModel\" [(ngModel)]=\"project.name\" required />\n      <span class=\"error-msg\" *ngIf=\"name.touched && !name.valid\">\n        El nombre es obligatorio.\n      </span>\n    </div>\n    \n    <div class=\"form-group\">\n      <label for=\"description\">Descripción del Proyecto</label>\n      <textarea class=\"form-control\" name=\"description\" #description=\"ngModel\" [(ngModel)]=\"project.description\" required></textarea>\n      <span class=\"error-msg\" *ngIf=\"description.touched && !description.valid\">\n        La descripción es obligatoria.\n      </span>\n    </div>\n    \n    <div class=\"form-group\">\n      <label for=\"category\">Categoría</label>\n      <input class=\"form-control\" type=\"text\" name=\"category\" #category=\"ngModel\" [(ngModel)]=\"project.category\" required />\n      <span class=\"error-msg\" *ngIf=\"category.touched && !category.valid\">\n        La categoría es obligatoria.\n      </span>\n    </div>\n    \n    <div class=\"form-group\">\n      <label for=\"year\">Año de publicación</label>\n      <input class=\"form-control\" type=\"number\" name=\"year\" #year=\"ngModel\" [(ngModel)]=\"project.year\" required />\n     \n    </div>\n    \n    <div class=\"form-group\"> \n      <label for=\"langs\">Tecnología Aplicada</label>\n      <input class=\"form-control\" type=\"text\" name=\"langs\" #langs=\"ngModel\" [(ngModel)]=\"project.langs\" required />\n      <span class=\"error-msg\" *ngIf=\"langs.touched && !langs.valid\">\n        La tecnología es obligatoria.\n      </span>\n    </div>\n    \n    <div class=\"form-group\">\n      <label for=\"image\">Imagén del Proyecto</label>\n      <input class=\"form-control-file\" type=\"file\" name=\"image\" placeholder=\"Subir Imagén\" (change)=\"fileChangeEvent($event)\"/>\n    \n    </div>\n   \n    <div class=\"form-group mt-3\">\n      <input class=\"btn btn-outline-dark\" type=\"submit\" value=\"Enviar\" [disabled]=\"!projectForm.form.valid\" />\n    </div>\n\n\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/components/create/create.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/create/create.component.ts ***!
  \*******************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/project */ "./src/app/models/project.ts");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/project.service */ "./src/app/services/project.service.ts");
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/upload.service */ "./src/app/services/upload.service.ts");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/global */ "./src/app/services/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateComponent = /** @class */ (function () {
    function CreateComponent(_projectService, _uploadService) {
        this._projectService = _projectService;
        this._uploadService = _uploadService;
        this.title = 'Crear proyecto';
        this.project = new _models_project__WEBPACK_IMPORTED_MODULE_1__["Project"]('', '', '', '', 2019, '', '');
    }
    CreateComponent.prototype.ngOnInit = function () {
    };
    CreateComponent.prototype.onSubmit = function (form) {
        var _this = this;
        console.log(this.project);
        //Guardar datos basicos
        this._projectService.saveProject(this.project).subscribe(function (response) {
            if (response.project) {
                //Subir Imagen
                _this._uploadService.makeFileRequest(_services_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + "upload-image/" + response.project._id, [], _this.filesToUpload, 'image')
                    .then(function (result) {
                    _this.save_project = result.project;
                    _this.status = 'success';
                    form.reset();
                });
            }
            else {
                _this.status = 'failed';
            }
        }, function (error) {
            console.log(error);
        });
    };
    CreateComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
    };
    CreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/components/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.css */ "./src/app/components/create/create.component.css")],
            providers: [_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"], _services_upload_service__WEBPACK_IMPORTED_MODULE_3__["UploadService"]]
        }),
        __metadata("design:paramtypes", [_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"],
            _services_upload_service__WEBPACK_IMPORTED_MODULE_3__["UploadService"]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/components/detail/detail.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/detail/detail.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGV0YWlsL2RldGFpbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/detail/detail.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/detail/detail.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h1>{{project.name}}</h1>\r\n    <div>\r\n        <img src=\"{{url+ 'get-image/' +project.image}}\" *ngIf=\"project.image\" class=\"img-fluid\" />\r\n    </div>\r\n    <h2>{{project.description}}</h2>\r\n    <p>{{project.category}}</p>\r\n    <p>{{project.category}}</p>\r\n    <p>{{project.year}}</p>\r\n\r\n    <button>borrar</button>\r\n    <button>editar</button>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/detail/detail.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/detail/detail.component.ts ***!
  \*******************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/project.service */ "./src/app/services/project.service.ts");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/global */ "./src/app/services/global.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailComponent = /** @class */ (function () {
    function DetailComponent(_projectService, _router, _route) {
        this._projectService = _projectService;
        this._router = _router;
        this._route = _route;
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_2__["Global"].url;
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            var id = params.id;
            _this.getProject(id);
        });
    };
    DetailComponent.prototype.getProject = function (id) {
        var _this = this;
        this._projectService.getProject(id).subscribe(function (response) {
            _this.project = response.project;
        }, function (error) {
            console.log(error);
        });
    };
    DetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! ./detail.component.html */ "./src/app/components/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.css */ "./src/app/components/detail/detail.component.css")],
            providers: [_services_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"]]
        }),
        __metadata("design:paramtypes", [_services_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/components/error/error.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/error/error.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXJyb3IvZXJyb3IuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/error/error.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/error/error.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  error works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/error/error.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/error/error.component.ts ***!
  \*****************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/components/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/components/error/error.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/components/projects/projects.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/projects/projects.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.project {\r\n    list-style: none;\r\n    display:block;\r\n    float: left;\r\n    width: 28%;\r\n    text-align: center;\r\n    margin-left: 20px;\r\n    margin-right:20px;\r\n    margin-bottom: 30px;\r\n }\r\n \r\n .project .image {\r\n     width: 100%;\r\n     height: 150px;\r\n     overflow: hidden;\r\n }\r\n \r\n .project img {\r\n     width: 100%;\r\n }\r\n \r\n .project a {\r\n     text-decoration: none;\r\n     color: black;\r\n }\r\n\r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsb0JBQW9CO0VBQ3RCOztDQUVEO0tBQ0ksWUFBWTtLQUNaLGNBQWM7S0FDZCxpQkFBaUI7RUFDcEI7O0NBRUQ7S0FDSSxZQUFZO0VBQ2Y7O0NBRUQ7S0FDSSxzQkFBc0I7S0FDdEIsYUFBYTtFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLnByb2plY3Qge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAyOCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDoyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuIH1cclxuIFxyXG4gLnByb2plY3QgLmltYWdlIHtcclxuICAgICB3aWR0aDogMTAwJTtcclxuICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiB9XHJcbiBcclxuIC5wcm9qZWN0IGltZyB7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiB9XHJcbiBcclxuIC5wcm9qZWN0IGEge1xyXG4gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICBjb2xvcjogYmxhY2s7XHJcbiB9XHJcblxyXG4gIl19 */"

/***/ }),

/***/ "./src/app/components/projects/projects.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/projects/projects.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n<div class=\"container\">\n  <h2>Projects</h2>\n\n  <ul>\n    <li *ngFor=\"let project of projects\" class=\"project\">\n      <a [routerLink]=\"['/proyecto', project._id]\">\n        <div class=\"image\">\n          <img src=\"{{url+ 'get-image/' +project.image}}\" *ngIf=\"project.image\" />\n        </div>\n        <h2>{{project.name}}</h2>\n        {{project.category}}\n      </a>\n    </li>\n  </ul>\n</div>\n\n-->\n<section class=\"project-container\" id=\"project-container\">\n  <div class=\"u-center-text\">\n      <h2 class=\"heading-secondary\">\n        About my Projects & Designs.\n      </h2>\n  </div>\n\n    <div class=\"project-card\"  *ngFor=\"let project of projects\"  >\n        <a [routerLink]=\"['/proyecto', project._id]\">\n            <div class=\"project-card__side project-card__side--front\">\n                <div class=\"project-card__picture project-card__picture--1\">\n                    <img src=\"{{url+ 'get-image/' +project.image}}\" *ngIf=\"project.image\"  class=\"img-fluid\"/>\n                </div>\n                <h4 class=\"project-card__heading\">\n                    <span class=\"project-card__heading-span project-card__heading-span--1\">{{project.category}}</span>\n                </h4>\n                <div class=\"project-card__details\">\n                    <ul>\n                        <li>Name:&nbsp;<strong>{{project.name}}</strong></li>\n                        <li>Technologies: &nbsp;<strong>{{project.langs}}</strong></li>\n                        <li>Date:&nbsp;<strong>{{project.year}}</strong></li>\n                        <li>More details &nbsp;<i class=\"fa fa-angle-double-right\"></i></li>                        \n                    </ul>\n                </div>\n            </div>\n            <div class=\"project-card__side project-card__side--back project-card__side--back-1\">\n                <div class=\"project-card__cta\">\n                    <div class=\"project-card__price-box\">\n                        <div>\n                            <img src=\"{{url+ 'get-image/' +project.image}}\" *ngIf=\"project.image\" class=\"img-slide\"/>\n                        </div>\n                        <div class=\"project-card__price-box\">\n                            <h4>{{project.name}}</h4>\n                        </div>\n                    </div>\n                    <a href=\"#popup\" class=\"btn btn--white\">Book now!</a>\n                </div>\n            </div>\n        </a>    \n    </div>\n</section>"

/***/ }),

/***/ "./src/app/components/projects/projects.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/projects/projects.component.ts ***!
  \***********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/project.service */ "./src/app/services/project.service.ts");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/global */ "./src/app/services/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(_projectService) {
        this._projectService = _projectService;
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_2__["Global"].url;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    ProjectsComponent.prototype.getProjects = function () {
        var _this = this;
        this._projectService.getProjects().subscribe(function (response) {
            if (response.projects) {
                _this.projects = response.projects;
            }
        }, function (error) {
            console.log(error);
        });
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/components/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/components/projects/projects.component.css")],
            providers: [_services_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"]]
        }),
        __metadata("design:paramtypes", [_services_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/models/project.ts":
/*!***********************************!*\
  !*** ./src/app/models/project.ts ***!
  \***********************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
var Project = /** @class */ (function () {
    function Project(_id, name, description, category, year, langs, image) {
        this._id = _id;
        this.name = name;
        this.description = description;
        this.category = category;
        this.year = year;
        this.langs = langs;
        this.image = image;
    }
    return Project;
}());



/***/ }),

/***/ "./src/app/services/global.ts":
/*!************************************!*\
  !*** ./src/app/services/global.ts ***!
  \************************************/
/*! exports provided: Global */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
var Global = {
    url: 'http://localhost:3700/api/'
};


/***/ }),

/***/ "./src/app/services/project.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/project.service.ts ***!
  \*********************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global */ "./src/app/services/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectService = /** @class */ (function () {
    function ProjectService(_http) {
        this._http = _http;
        this.url = _global__WEBPACK_IMPORTED_MODULE_2__["Global"].url;
    }
    ProjectService.prototype.testService = function () {
        return 'Probando el servicio de Angular';
    };
    ProjectService.prototype.saveProject = function (project) {
        var params = JSON.stringify(project);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this._http.post(this.url + 'save-project', params, { headers: headers });
    };
    ProjectService.prototype.getProjects = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this._http.get(this.url + 'projects', { headers: headers });
    };
    ProjectService.prototype.getProject = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this._http.get(this.url + 'project/' + id, { headers: headers });
    };
    ProjectService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/app/services/upload.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/upload.service.ts ***!
  \********************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global */ "./src/app/services/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UploadService = /** @class */ (function () {
    function UploadService() {
        this.url = _global__WEBPACK_IMPORTED_MODULE_1__["Global"].url;
    }
    UploadService.prototype.makeFileRequest = function (url, params, files, name) {
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append(name, files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open('POST', url, true);
            xhr.send(formData);
        });
    };
    UploadService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UploadService);
    return UploadService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\LEDRUMS\Documents\PORTAFOLIO\frontend\front-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map