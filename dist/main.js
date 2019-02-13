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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n<app-footer *ngIf=\"removeFooter()\"></app-footer>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var AppComponent = /** @class */ (function () {
    function AppComponent(renderer, router, document, element, location) {
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }).subscribe(function (event) {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            }
            else {
                window.document.activeElement.scrollTop = 0;
            }
            _this.navbar.sidebarClose();
        });
        this.renderer.listenGlobal('window', 'scroll', function (event) {
            var number = window.scrollY;
            if (number > 150 || window.pageYOffset > 150) {
                // add logic
                navbar.classList.remove('navbar-transparent');
            }
            else {
                // remove logic
                navbar.classList.add('navbar-transparent');
            }
        });
        var ua = window.navigator.userAgent;
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            var version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        if (version) {
            var body = document.getElementsByTagName('body')[0];
            body.classList.add('ie-background');
        }
    };
    AppComponent.prototype.removeFooter = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (titlee === 'signup' || titlee === 'nucleoicons') {
            return false;
        }
        else {
            return true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"]),
        __metadata("design:type", _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"])
    ], AppComponent.prototype, "navbar", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
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
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__["LandingComponent"],
                _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_11__["HomeModule"]
            ],
            providers: [],
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
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _components_nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/nucleoicons/nucleoicons.component */ "./src/app/components/nucleoicons/nucleoicons.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'user-profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"] },
    { path: 'landing', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_7__["LandingComponent"] },
    { path: 'nucleoicons', component: _components_nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_8__["NucleoiconsComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/blog/blog.component.html":
/*!******************************************!*\
  !*** ./src/app/blog/blog.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"blog-5\">\r\n  <div class=\"container\">\r\n    <h2 class=\"title text-center\">Mon portfolio</h2>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-7\">\r\n        <div class=\"card\" data-background=\"image\" style=\"background-image: url('./assets/img/sections/uriel-soberanes.jpg')\">\r\n          <div class=\"card-body\">\r\n            <h6 class=\"card-category\">\r\n              <i class=\"fa fa-newspaper-o\"></i> Lifestyle</h6>\r\n            <a href=\"#pablo\">\r\n              <h3 class=\"card-title\">Twenty-Something Travel - Virtual Wayfarer</h3>\r\n            </a>\r\n            <p class=\"card-description\">\r\n              As happens in most of these hearings so far, that argument led to a back-and-forth between Uber and Waymo’s lawyers over the pre-trial discovery...\r\n            </p>\r\n            <div class=\"card-footer\">\r\n              <div class=\"author\">\r\n                <a href=\"#pablo\">\r\n                  <img src=\"./assets/img/faces/joe-gardner-2.jpg\" alt=\"...\" class=\"avatar img-raised\">\r\n                  <span>Lynne Barrett</span>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-5\">\r\n        <div class=\"card\" data-background=\"image\" style=\"background-image: url('./assets/img/sections/forest-bg.jpg')\">\r\n          <div class=\"card-body\">\r\n            <h6 class=\"card-category\">\r\n              <i class=\"fa fa-newspaper-o\"></i> Media</h6>\r\n            <a href=\"#pablo\">\r\n              <h3 class=\"card-title\">The aesthetic quality of a product</h3>\r\n            </a>\r\n            <p class=\"card-description\">\r\n              It clarifies the product’s structure. Better still, it can make the product clearly express its function by making use of the user’s intuition.\r\n            </p>\r\n            <div class=\"card-footer\">\r\n              <div class=\"author\">\r\n                <a href=\"#pablo\">\r\n                  <img src=\"./assets/img/faces/erik-lucatero-2.jpg\" alt=\"...\" class=\"avatar img-raised\">\r\n                  <span>Eric J Barnes</span>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <div class=\"card\" data-background=\"image\" style=\"background-image: url('./assets/img/sections/pavel-kosov.jpg')\">\r\n          <div class=\"card-body\">\r\n            <h6 class=\"card-category\">\r\n              <i class=\"fa fa-newspaper-o\"></i>Design</h6>\r\n            <a href=\"#pablo\">\r\n              <h3 class=\"card-title\">“Good Design”</h3>\r\n            </a>\r\n            <p class=\"card-description\">\r\n              Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Jay-z...\r\n            </p>\r\n            <div class=\"card-footer\">\r\n              <div class=\"author\">\r\n                <a href=\"#pablo\">\r\n                  <img src=\"./assets/img/faces/kaci-baum-2.jpg\" alt=\"...\" class=\"avatar img-raised\">\r\n                  <span>Patricia Beatty</span>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"card\" data-background=\"image\" style=\"background-image: url('./assets/img/sections/ilya-yakover.jpg')\">\r\n          <div class=\"card-body\">\r\n            <h6 class=\"card-category\">\r\n              <i class=\"fa fa-newspaper-o\"></i> Development</h6>\r\n            <a href=\"#pablo\">\r\n              <h3 class=\"card-title\">In need of a good development</h3>\r\n            </a>\r\n            <p class=\"card-description\">\r\n              Speed up your development time or get inspired with the large number of example pages. You can jump start your development with our pre-built example pages.\r\n            </p>\r\n            <div class=\"card-footer\">\r\n              <div class=\"author\">\r\n                <a href=\"#pablo\">\r\n                  <img src=\"./assets/img/faces/clem-onojeghuo-3.jpg\" alt=\"...\" class=\"avatar img-raised\">\r\n                  <span>Robert Brandon</span>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <div class=\"card\" data-background=\"image\" style=\"background-image: url('./assets/img/sections/vincent-versluis.jpg')\">\r\n          <div class=\"card-body\">\r\n            <h6 class=\"card-category\">\r\n              <i class=\"fa fa-newspaper-o\"></i> Technology</h6>\r\n            <a href=\"#pablo\">\r\n              <h3 class=\"card-title\">A Little Adrift</h3>\r\n            </a>\r\n            <p class=\"card-description\">\r\n              But from the perspective of founders, there’s bound to be some confusion. In an ideal world we will see a meeting of the minds\r\n            </p>\r\n            <div class=\"card-footer\">\r\n              <div class=\"author\">\r\n                <a href=\"#pablo\">\r\n                  <img src=\"./assets/img/faces/ayo-ogunseinde-2.jpg\" alt=\"...\" class=\"avatar img-raised\">\r\n                  <span>Ayo Michael</span>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/blog/blog.component.scss":
/*!******************************************!*\
  !*** ./src/app/blog/blog.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
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

var BlogComponent = /** @class */ (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.scss */ "./src/app/blog/blog.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/components/basicelements/basicelements.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/basicelements/basicelements.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section section-buttons\">\r\n    <div class=\"container\">\r\n        <div class=\"tim-title\">\r\n            <h2>Basic Components</h2>\r\n        </div>\r\n        <div id=\"buttons\">\r\n            <div class=\"tim-title\">\r\n                <h3>Buttons\r\n                    <br/>\r\n                    <small>Pick your style</small>\r\n                </h3>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8\">\r\n                    <button type=\"button\" class=\"btn btn-danger\">Default</button>\r\n                    <button type=\"button\" class=\"btn btn-danger btn-round\">Round</button>\r\n                    <button type=\"button\" class=\"btn btn-danger btn-round\"><i class=\"fa fa-heart\"></i> With Icon</button>\r\n                    <button type=\"button\" class=\"btn btn-danger btn-just-icon\"><i class=\"fa fa-heart\"></i></button>\r\n                    <button type=\"button\" class=\"btn btn-danger btn-link\">Simple</button>\r\n                </div>\r\n            </div>\r\n            <div class=\"tim-title\">\r\n                <h3><small>Pick your size</small></h3>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8\">\r\n                    <button type=\"button\" class=\"btn btn-outline-danger btn-sm\">Small</button>\r\n                    <button type=\"button\" class=\"btn btn-outline-danger\">Regular</button>\r\n                    <button type=\"button\" class=\"btn btn-outline-danger btn-lg\">Large</button>\r\n                </div>\r\n            </div>\r\n            <div class=\"tim-title\">\r\n                <h3><small>Pick your color</small></h3>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8\">\r\n                    <button type=\"button\" class=\"btn btn-outline-default btn-round\">Default</button><button type=\"button\" class=\"btn btn-outline-primary btn-round\">Primary</button>\r\n                    <button type=\"button\" class=\"btn btn-outline-info btn-round\">Info</button>\r\n                    <button type=\"button\" class=\"btn btn-outline-success btn-round\">Success</button>\r\n                    <button type=\"button\" class=\"btn btn-outline-warning btn-round\">Warning</button>\r\n                    <button type=\"button\" class=\"btn btn-outline-danger btn-round\">Danger</button>\r\n                </div>\r\n            </div>\r\n            <br/>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8\">\r\n                    <button type=\"button\" class=\"btn btn-default btn-round\">Default</button>\r\n                    <button type=\"button\" class=\"btn btn-primary btn-round\">Primary</button>\r\n                    <button type=\"button\" class=\"btn btn-info btn-round\">Info</button>\r\n                    <button type=\"button\" class=\"btn btn-success btn-round\">Success</button>\r\n                    <button type=\"button\" class=\"btn btn-warning btn-round\">Warning</button>\r\n                    <button type=\"button\" class=\"btn btn-danger btn-round\">Danger</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n            <br/>\r\n        <div class=\"tim-title\">\r\n            <h3>Links</h3>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-8\">\r\n                <a href=\"#0\" class=\"btn btn-link btn-default\">Default</a>\r\n                <a href=\"#0\" class=\"btn btn-link btn-primary\">Primary</a>\r\n                <a href=\"#0\" class=\"btn btn-link btn-success\">Success</a>\r\n                <a href=\"#0\" class=\"btn btn-link btn-info\">Info</a>\r\n                <a href=\"#0\" class=\"btn btn-link btn-warning\">Warning</a>\r\n                <a href=\"#0\" class=\"btn btn-link btn-danger\">Danger</a>\r\n                <a href=\"#0\" class=\"btn btn-link btn-neutral\">Neutral</a>\r\n            </div>\r\n        </div>\r\n        <br/>\r\n        <div class=\"tim-title\">\r\n            <h3>Inputs</h3>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-3\">\r\n                <div class=\"form-group\">\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Default\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-3\">\r\n                <div class=\"form-group has-success\">\r\n                    <input type=\"text\" class=\"form-control form-control-success\" id=\"inputSuccess1\" value=\"Success\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-3\">\r\n                <div class=\"form-group has-danger\">\r\n                    <input type=\"text\" class=\"form-control form-control-danger\" id=\"inputDanger1\" value=\"Error\">\r\n                    <div class=\"form-control-feedback\">Sorry, that username's taken. Try another?</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-3\">\r\n                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Username\" aria-describedby=\"basic-addon1\" (focus)=\"focus=true\" (blur)=\"focus=false\" >\r\n                    <div class=\"input-group-append\">\r\n                      <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-group\" aria-hidden=\"true\"></i></span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <br/>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6 col-lg-3\">\r\n                <div class=\"tim-title\">\r\n                    <h3>Checkboxes</h3>\r\n                </div>\r\n                <div class=\"form-check\">\r\n                  <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\r\n                    Unchecked\r\n                    <span class=\"form-check-sign\"></span>\r\n                  </label>\r\n                </div>\r\n                <div class=\"form-check\">\r\n                  <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\">\r\n                    Checked\r\n                    <span class=\"form-check-sign\"></span>\r\n                  </label>\r\n                </div>\r\n                <div class=\"form-check disabled\">\r\n                  <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\" disabled=\"\">\r\n                    Disabled unchecked\r\n                    <span class=\"form-check-sign\"></span>\r\n                  </label>\r\n                </div>\r\n                <div class=\"form-check disabled\">\r\n                  <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\" disabled=\"\">\r\n                    Disabled checked\r\n                    <span class=\"form-check-sign\"></span>\r\n                  </label>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-6 col-lg-3\">\r\n                <div class=\"tim-title\">\r\n                    <h3>Radio Buttons</h3>\r\n                </div>\r\n                <div class=\"form-check-radio\">\r\n                  <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\" >\r\n                    Radio is off\r\n                    <span class=\"form-check-sign\"></span>\r\n                  </label>\r\n                </div>\r\n                <div class=\"form-check-radio\">\r\n                  <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios2\" value=\"option2\" checked=\"\">\r\n                    Radio is on\r\n                    <span class=\"form-check-sign\"></span>\r\n                  </label>\r\n                </div>\r\n                <div class=\"form-check-radio disabled\">\r\n                  <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios1\" id=\"exampleRadios3\" value=\"option3\" disabled=\"\">\r\n                    Disabled Radio is off\r\n                    <span class=\"form-check-sign\"></span>\r\n                  </label>\r\n                </div>\r\n                <div class=\"form-check-radio disabled\">\r\n                  <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios1\" id=\"exampleRadios4\" value=\"option3\" checked disabled=\"\">\r\n                    Disabled Radio is on\r\n                    <span class=\"form-check-sign\"></span>\r\n                  </label>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-6 col-lg-3\">\r\n                <div class=\"tim-title\">\r\n                    <h3>Toggle Buttons</h3>\r\n                </div>\r\n                <bSwitch\r\n                    [switch-on-color]=\"'primary'\">\r\n                </bSwitch>\r\n                <bSwitch\r\n                    [switch-on-color]=\"'primary'\"\r\n                    [(ngModel)]=\"state_default\"> Toggle is off\r\n                </bSwitch>\r\n            </div>\r\n            <div class=\"col-sm-6 col-lg-3\">\r\n                <div class=\"tim-title\">\r\n                    <h3>Sliders</h3>\r\n                </div>\r\n                <nouislider [connect]=\"false\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"simpleSlider\" [tooltips]=\"false\" class=\"slider\"></nouislider>\r\n                <br>\r\n                <nouislider class=\"slider slider-info\" [connect]=\"true\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"doubleSlider\" [tooltips]=\"false\"></nouislider>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/basicelements/basicelements.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/basicelements/basicelements.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/basicelements/basicelements.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/basicelements/basicelements.component.ts ***!
  \*********************************************************************/
/*! exports provided: BasicelementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicelementsComponent", function() { return BasicelementsComponent; });
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

var BasicelementsComponent = /** @class */ (function () {
    function BasicelementsComponent() {
        this.simpleSlider = 40;
        this.doubleSlider = [20, 60];
        this.state_default = true;
    }
    BasicelementsComponent.prototype.ngOnInit = function () { };
    BasicelementsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basicelements',
            template: __webpack_require__(/*! ./basicelements.component.html */ "./src/app/components/basicelements/basicelements.component.html"),
            styles: [__webpack_require__(/*! ./basicelements.component.scss */ "./src/app/components/basicelements/basicelements.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicelementsComponent);
    return BasicelementsComponent;
}());



/***/ }),

/***/ "./src/app/components/components.component.html":
/*!******************************************************!*\
  !*** ./src/app/components/components.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-basicelements></app-basicelements>\r\n<app-navigation></app-navigation>\r\n<div class=\"section\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"tim-title\">\r\n                    <h3>Progress Bar</h3>\r\n                    <br/>\r\n                </div>\r\n                <ngb-progressbar type=\"success\" [value]=\"25\">25</ngb-progressbar><br>\r\n                <ngb-progressbar type=\"info\" [value]=\"50\">Copying file <b>2 of 4</b>...</ngb-progressbar><br>\r\n                <ngb-progressbar type=\"warning\" [value]=\"75\" [striped]=\"true\" [animated]=\"true\"><i>50%</i></ngb-progressbar><br>\r\n                <ngb-progressbar type=\"danger\" [value]=\"100\" [striped]=\"true\">Completed!</ngb-progressbar>\r\n\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"tim-title\">\r\n                    <h3>Pagination</h3>\r\n                    <br/>\r\n                </div>\r\n                <ngb-pagination [collectionSize]=\"70\" [(page)]=\"page\" aria-label=\"Default pagination\"></ngb-pagination>\r\n                <br/>\r\n                <ngb-pagination [collectionSize]=\"100\" [(page)]=\"page1\" [maxSize]=\"5\" [rotate]=\"true\"></ngb-pagination>\r\n            </div>\r\n        </div>\r\n        <br/>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"tim-title\">\r\n                    <h3>Navigation Tabs</h3>\r\n                </div>\r\n\r\n                <div class=\"nav-tabs-navigation\">\r\n                    <div class=\"nav-tabs-wrapper\">\r\n                        <ngb-tabset [justify]=\"'center'\">\r\n                            <ngb-tab title=\"Home\">\r\n                                <ng-template ngbTabContent>\r\n                                    <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient. With a smooth metal surface that seamlessly meets the new Retina HD display.</p>\r\n                                </ng-template>\r\n                            </ngb-tab>\r\n                            <ngb-tab title=\"Profile\">\r\n                                <ng-template ngbTabContent>\r\n                                    <p>Here is your profile.</p>\r\n                                </ng-template>\r\n                            </ngb-tab>\r\n                            <ngb-tab title=\"Messages\">\r\n                                <ng-template ngbTabContent>\r\n                                    <p>Here are your messages.</p>\r\n                                </ng-template>\r\n                            </ngb-tab>\r\n                        </ngb-tabset>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"col-md-6\">\r\n                <div class=\"tim-title\">\r\n                    <h3>Labels</h3>\r\n                </div>\r\n                <span class=\"label label-default\">Default</span>\r\n                <span class=\"label label-primary\">Primary</span>\r\n                <span class=\"label label-info\">Info</span>\r\n                <span class=\"label label-success\">Success</span>\r\n                <span class=\"label label-warning\">Warning</span>\r\n                <span class=\"label label-danger\">Danger</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"section section-notifications\" id=\"notifications\">\r\n    <div class=\"container\">\r\n        <div class=\"tim-title\">\r\n            <h3>Notification</h3>\r\n        </div>\r\n    </div>\r\n    <app-notification></app-notification>\r\n</div>\r\n<app-typography></app-typography>\r\n<div class=\"section javascript-components\">\r\n    <div class=\"container\">\r\n        <div class=\"tim-title\">\r\n            <h2>Angular Native Components</h2>\r\n        </div>\r\n        <div class=\"row\" id=\"modals\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"tim-title\">\r\n                    <h3>Modal</h3>\r\n                </div>\r\n                <app-modal-component></app-modal-component>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"tim-title\">\r\n                    <h3>Popovers</h3>\r\n                </div>\r\n\r\n                <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"right\"\r\n                    ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on right\">\r\n                    on right\r\n                </button>\r\n\r\n                <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"top\"\r\n                    ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on top\">\r\n                    on top\r\n                </button>\r\n\r\n                <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"left\"\r\n                    ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on left\">\r\n                    on left\r\n                </button>\r\n\r\n                <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"bottom\"\r\n                    ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on bottom\">\r\n                    on bottom\r\n                </button>\r\n\r\n            </div>\r\n            <br/>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"tim-title\">\r\n                    <h3>Datepicker</h3>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class='col-sm-6'>\r\n                        <form class=\"form-inline\">\r\n                            <div class=\"form-group\">\r\n                                <div class=\"input-group date\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                                    <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\r\n                                         name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\" (click)=\"d.toggle()\" (focus)=\"focus=true\" (blur)=\"focus=false\" />\r\n                                    <div class=\"input-group-append\">\r\n                                        <span class=\"glyphicon glyphicon-calendar input-group-text\">\r\n                                          <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"tim-title\">\r\n                    <h3>Tooltips</h3>\r\n                </div>\r\n\r\n                <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"right\" ngbTooltip=\"Tooltip on right\">\r\n                   on right\r\n               </button>\r\n               <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"left\" ngbTooltip=\"Tooltip on left\">\r\n                  on left\r\n               </button>\r\n                <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"top\" ngbTooltip=\"Tooltip on top\">\r\n                   on top\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"bottom\" ngbTooltip=\"Tooltip on bottom\">\r\n                   on bottom\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"section\" id=\"carousel\">\r\n    <div class=\"container\">\r\n        <div class=\"tim-title\">\r\n            <h3>Carousel</h3>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-8 mr-auto ml-auto\">\r\n                <div class=\"card page-carousel\">\r\n                    <ngb-carousel>\r\n                        <ng-template ngbSlide>\r\n                            <img src=\"./assets/img/soroush-karimi.jpg\" alt=\"Random first slide\">\r\n                            <div class=\"carousel-caption\">\r\n                                <p>Somewhere</p>\r\n                            </div>\r\n                        </ng-template>\r\n                        <ng-template ngbSlide>\r\n                            <img src=\"./assets/img/federico-beccari.jpg\" alt=\"Random second slide\">\r\n                            <div class=\"carousel-caption\">\r\n                                <p>Somewhere else</p>\r\n                            </div>\r\n                        </ng-template>\r\n                        <ng-template ngbSlide>\r\n                            <img src=\"./assets/img/joshua-stannard.jpg\" alt=\"Random third slide\">\r\n                            <div class=\"carousel-caption\">\r\n                                <p>Here it is</p>\r\n                            </div>\r\n                        </ng-template>\r\n                    </ngb-carousel>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

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
    function ComponentsComponent(renderer) {
        this.renderer = renderer;
        this.page = 4;
        this.page1 = 5;
    }
    ComponentsComponent.prototype.isWeekend = function (date) {
        var d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    };
    ComponentsComponent.prototype.isDisabled = function (date, current) {
        return date.month !== current.month;
    };
    ComponentsComponent.prototype.ngOnInit = function () {
        var input_group_focus = document.getElementsByClassName('form-control');
        var input_group = document.getElementsByClassName('input-group');
        var _loop_1 = function (i) {
            input_group[i].children[0].addEventListener('focus', function () {
                input_group[i].classList.add('input-group-focus');
            });
            input_group[i].children[0].addEventListener('blur', function () {
                input_group[i].classList.remove('input-group-focus');
            });
        };
        for (var i = 0; i < input_group.length; i++) {
            _loop_1(i);
        }
    };
    ComponentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-components',
            template: __webpack_require__(/*! ./components.component.html */ "./src/app/components/components.component.html"),
            styles: ["\n    ngb-progressbar {\n        margin-top: 5rem;\n    }\n    "]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"]])
    ], ComponentsComponent);
    return ComponentsComponent;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-nouislider */ "./node_modules/ng2-nouislider/src/ng2-nouislider.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "./node_modules/jw-bootstrap-switch-ng2/fesm5/jw-bootstrap-switch-ng2.js");
/* harmony import */ var _basicelements_basicelements_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./basicelements/basicelements.component */ "./src/app/components/basicelements/basicelements.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./typography/typography.component */ "./src/app/components/typography/typography.component.ts");
/* harmony import */ var _nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nucleoicons/nucleoicons.component */ "./src/app/components/nucleoicons/nucleoicons.component.ts");
/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components.component */ "./src/app/components/components.component.ts");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/components/notification/notification.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/components/modal/modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__["NouisliderModule"],
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__["JwBootstrapSwitchNg2Module"]
            ],
            declarations: [
                _components_component__WEBPACK_IMPORTED_MODULE_10__["ComponentsComponent"],
                _basicelements_basicelements_component__WEBPACK_IMPORTED_MODULE_6__["BasicelementsComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__["NavigationComponent"],
                _typography_typography_component__WEBPACK_IMPORTED_MODULE_8__["TypographyComponent"],
                _nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_9__["NucleoiconsComponent"],
                _notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_12__["NgbdModalComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_12__["NgbdModalContent"]
            ],
            entryComponents: [_modal_modal_component__WEBPACK_IMPORTED_MODULE_12__["NgbdModalContent"]],
            exports: [_components_component__WEBPACK_IMPORTED_MODULE_10__["ComponentsComponent"]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/modal/modal.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/modal/modal.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>You can pass an existing component as content of the modal window. In this case remember to add content component\r\nas an <code>entryComponents</code> section of your <code>NgModule</code>.</p>\r\n\r\n<button class=\"btn btn-outline-danger btn-round\" (click)=\"open()\">Launch demo modal</button>\r\n"

/***/ }),

/***/ "./src/app/components/modal/modal.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: NgbdModalContent, NgbdModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalContent", function() { return NgbdModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalComponent", function() { return NgbdModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdModalContent = /** @class */ (function () {
    function NgbdModalContent(activeModal) {
        this.activeModal = activeModal;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgbdModalContent.prototype, "name", void 0);
    NgbdModalContent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-content',
            template: "\n    <div class=\"modal-header\">\n        <h5 class=\"modal-title text-center\">Modal title</h5>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\"> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.\n    </div>\n    <div class=\"modal-footer\">\n        <div class=\"left-side\">\n            <button type=\"button\" class=\"btn btn-default btn-link\" (click)=\"activeModal.close('Close click')\">Never mind</button>\n        </div>\n        <div class=\"divider\"></div>\n        <div class=\"right-side\">\n            <button type=\"button\" class=\"btn btn-danger btn-link\" (click)=\"activeModal.close('Close click')\">DELETE</button>\n        </div>\n    </div>\n    "
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], NgbdModalContent);
    return NgbdModalContent;
}());

var NgbdModalComponent = /** @class */ (function () {
    function NgbdModalComponent(modalService) {
        this.modalService = modalService;
    }
    NgbdModalComponent.prototype.open = function () {
        var modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
    };
    NgbdModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-component',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/components/modal/modal.component.html")
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], NgbdModalComponent);
    return NgbdModalComponent;
}());



/***/ }),

/***/ "./src/app/components/navigation/navigation.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section section-navbars\">\r\n    <div class=\"container\" id=\"menu-dropdown\">\r\n        <div class=\"tim-title\">\r\n            <h3>Menu</h3>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <nav class=\"navbar navbar-expand-lg bg-primary\">\r\n                    <div class=\"container\">\r\n                        <a class=\"navbar-brand\" href=\"#\">Menu</a>\r\n                        <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-menu\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                            <span class=\"navbar-toggler-icon\"></span>\r\n                            <span class=\"navbar-toggler-icon\"></span>\r\n                            <span class=\"navbar-toggler-icon\"></span>\r\n                        </button>\r\n                        <div class=\"collapse navbar-collapse\" id=\"navbar-menu\">\r\n                            <ul class=\"navbar-nav\">\r\n                                <li class=\"nav-item\">\r\n                                    <a class=\"nav-link\" href=\"#pk\">Link</a>\r\n                                </li>\r\n                                <li class=\"nav-item\">\r\n                                    <a class=\"nav-link\" href=\"#pk\">Link</a>\r\n                                </li>\r\n                                <li class=\"nav-item\">\r\n                                    <div ngbDropdown class=\"d-inline-block dropdown\">\r\n                                        <a class=\"nav-link\" id=\"dropdownBasic1\" ngbDropdownToggle>Dropdown</a>\r\n                                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\" class=\"dropdown-primary\">\r\n                                            <a class=\"dropdown-item\">Action - 1</a>\r\n                                            <a class=\"dropdown-item\">Another Action</a>\r\n                                            <a class=\"dropdown-item\">Something else is here</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </nav>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <nav class=\"navbar navbar-expand-lg bg-danger\">\r\n                    <div class=\"container\">\r\n                        <a class=\"navbar-brand\" href=\"#\">Icons</a>\r\n                        <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-menu-icon\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                            <span class=\"navbar-toggler-icon\"></span>\r\n                            <span class=\"navbar-toggler-icon\"></span>\r\n                            <span class=\"navbar-toggler-icon\"></span>\r\n                        </button>\r\n                        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbar-menu-icon\">\r\n                            <ul class=\"navbar-nav\">\r\n                                <li class=\"nav-item\">\r\n                                    <a class=\"nav-link\" href=\"#pk\"><i class=\"nc-icon nc-email-85\" aria-hidden=\"true\"></i></a>\r\n                                </li>\r\n                                <li class=\"nav-item\">\r\n                                    <a class=\"nav-link\" href=\"#pk\"><i class=\"nc-icon nc-single-02\" aria-hidden=\"true\"></i></a>\r\n                                </li>\r\n                                <li class=\"nav-item \">\r\n                                    <div ngbDropdown class=\"dropdown\" placement=\"bottom-left\">\r\n                                    <a class=\"nav-link\" id=\"dropdownBasic1\" ngbDropdownToggle><i class=\"nc-icon nc-settings-gear-65\" aria-hidden=\"true\"></i></a>\r\n                                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\" class=\"dropdown-danger dropdown-menu-right\">\r\n                                            <a class=\"dropdown-item\">Action - 1</a>\r\n                                            <a class=\"dropdown-item\">Another Action</a>\r\n                                            <a class=\"dropdown-item\">Something else is here</a>\r\n                                            <div class=\"dropdown-divider\"></div>\r\n                                            <a class=\"dropdown-item\">Separated link</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div id=\"navbar\">\r\n        <div class=\"container\">\r\n            <div class=\"tim-title\">\r\n                <h3>Navigation</h3>\r\n                <br/>\r\n            </div>\r\n        </div>\r\n        <div class=\"navigation-example\">\r\n            <nav class=\"navbar navbar-expand-lg bg-primary\">\r\n                <div class=\"container\">\r\n                    <a class=\"navbar-brand\" href=\"#\">Primary Color</a>\r\n                    <button class=\"navbar-toggler navbar-toggler-right burger-menu\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-primary\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                        <span class=\"navbar-toggler-bar\"></span>\r\n                        <span class=\"navbar-toggler-bar\"></span>\r\n                        <span class=\"navbar-toggler-bar\"></span>\r\n                    </button>\r\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-primary\">\r\n                        <ul class=\"navbar-nav ml-auto\">\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-compass-05\" aria-hidden=\"true\"></i>&nbsp;Discover</a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-single-02\" aria-hidden=\"true\"></i>&nbsp;Profile</a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-settings-gear-65\" aria-hidden=\"true\"></i>&nbsp;Settings</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <nav class=\"navbar navbar-expand-lg bg-info\">\r\n                <div class=\"container\">\r\n                    <a class=\"navbar-brand\" href=\"#\">Info Color</a>\r\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-info\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                        <span class=\"navbar-toggler-bar\"></span>\r\n                        <span class=\"navbar-toggler-bar\"></span>\r\n                        <span class=\"navbar-toggler-bar\"></span>\r\n                    </button>\r\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-info\">\r\n                        <ul class=\"navbar-nav ml-auto\">\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\">Discover</a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\">Profile</a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\">Settings</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <nav class=\"navbar navbar-expand-lg bg-success\">\r\n                <div class=\"container\">\r\n                    <a class=\"navbar-brand\" href=\"#\">Success Color</a>\r\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-success\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                        <span class=\"navbar-toggler-bar\"></span>\r\n                        <span class=\"navbar-toggler-bar\"></span>\r\n                        <span class=\"navbar-toggler-bar\"></span>\r\n                    </button>\r\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-success\">\r\n                        <ul class=\"navbar-nav ml-auto\">\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-compass-05\" aria-hidden=\"true\"></i></a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-single-02\" aria-hidden=\"true\"></i> </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-settings-gear-65\" aria-hidden=\"true\"></i></a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <nav class=\"navbar navbar-expand-lg bg-warning\">\r\n                <div class=\"container\">\r\n                    <a class=\"navbar-brand\" href=\"#\">Warning Color</a>\r\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-warning\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                        <span class=\"navbar-toggler-bar\"></span>\r\n                        <span class=\"navbar-toggler-bar\"></span>\r\n                        <span class=\"navbar-toggler-bar\"></span>\r\n                    </button>\r\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-warning\">\r\n                        <ul class=\"navbar-nav ml-auto\">\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i></a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i></a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <nav class=\"navbar navbar-expand-lg bg-danger\">\r\n                <div class=\"container\">\r\n                    <a class=\"navbar-brand\" href=\"#\">Danger Color</a>\r\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-danger\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                        <span class=\"navbar-toggler-bar\"></span>\r\n                        <span class=\"navbar-toggler-bar\"></span>\r\n                        <span class=\"navbar-toggler-bar\"></span>\r\n                    </button>\r\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-danger\">\r\n                        <ul class=\"navbar-nav ml-auto\">\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i> Share</a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i> Tweet</a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-pinterest\" aria-hidden=\"true\"></i> Pin</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <nav class=\"navbar navbar-expand-lg navbar-transparent\">\r\n                <div class=\"container\">\r\n                    <a class=\"navbar-brand\" href=\"#\">Transparent</a>\r\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-transparent\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                        <span class=\"navbar-toggler-bar\"></span>\r\n                        <span class=\"navbar-toggler-bar\"></span>\r\n                        <span class=\"navbar-toggler-bar\"></span>\r\n                    </button>\r\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-transparent\">\r\n                        <ul class=\"navbar-nav ml-auto\">\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i> Facebook</a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i> Twitter</a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i> Instagram</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
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

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () { };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/components/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/components/navigation/navigation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/components/notification/notification.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/notification/notification.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p *ngFor=\"let alert of alerts\">\r\n    <ngb-alert [type]=\"alert.type\"  [dismissible]=\"false\">\r\n        <div class=\"container\">\r\n            <ng-container *ngIf=\"alert.icon\">\r\n                <i class=\"nc-icon {{alert.icon}}\"></i>\r\n            </ng-container>\r\n\r\n            {{ alert.message }}\r\n            <button type=\"button\" name=\"button\" class=\"close\" (click)=\"closeAlert(alert)\">\r\n                <i class=\"nc-icon nc-simple-remove\"></i>\r\n            </button>\r\n        </div>\r\n    </ngb-alert>\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/notification/notification.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/notification/notification.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/notification/notification.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/notification/notification.component.ts ***!
  \*******************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
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

var NotificationComponent = /** @class */ (function () {
    function NotificationComponent() {
        this.alerts = [];
        this.alerts.push({
            id: 1,
            type: 'success',
            message: 'This is an success alert',
        }, {
            id: 2,
            type: 'info',
            message: 'This is an info alert',
        }, {
            id: 3,
            type: 'warning',
            message: 'This is a warning alert',
            icon: 'nc-bell-55'
        }, {
            id: 4,
            type: 'danger',
            message: 'This is a danger alert',
            icon: 'nc-bell-55'
        });
        this.backup = this.alerts.map(function (alert) { return Object.assign({}, alert); });
    }
    NotificationComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], NotificationComponent.prototype, "alerts", void 0);
    NotificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! ./notification.component.html */ "./src/app/components/notification/notification.component.html"),
            styles: [__webpack_require__(/*! ./notification.component.scss */ "./src/app/components/notification/notification.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/components/nucleoicons/nucleoicons.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/nucleoicons/nucleoicons.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n    <h1>Paper Kit 2 Icons</h1>\r\n    <p>Built with <a href=\"https://nucleoapp.com/?ref=1712\">nucleoapp.com</a></p>\r\n</header>\r\n\r\n<div id=\"icons-wrapper\">\r\n    <section>\r\n        <ul>\r\n            <li>\r\n                <i class=\"nc-icon nc-air-baloon\"></i>\r\n                <p>nc-air-baloon</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-album-2\"></i>\r\n                <p>nc-album-2</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-alert-circle-i\"></i>\r\n                <p>nc-alert-circle-i</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-align-center\"></i>\r\n                <p>nc-align-center</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-align-left-2\"></i>\r\n                <p>nc-align-left-2</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-ambulance\"></i>\r\n                <p>nc-ambulance</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-app\"></i>\r\n                <p>nc-app</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-atom\"></i>\r\n                <p>nc-atom</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-badge\"></i>\r\n                <p>nc-badge</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-bag-16\"></i>\r\n                <p>nc-bag-16</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-bank\"></i>\r\n                <p>nc-bank</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-basket\"></i>\r\n                <p>nc-basket</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-bell-55\"></i>\r\n                <p>nc-bell-55</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-bold\"></i>\r\n                <p>nc-bold</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-book-bookmark\"></i>\r\n                <p>nc-book-bookmark</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-bookmark-2\"></i>\r\n                <p>nc-bookmark-2</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-box-2\"></i>\r\n                <p>nc-box-2</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-box\"></i>\r\n                <p>nc-box</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-briefcase-24\"></i>\r\n                <p>nc-briefcase-24</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-bulb-63\"></i>\r\n                <p>nc-bulb-63</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-bullet-list-67\"></i>\r\n                <p>nc-bullet-list-67</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-bus-front-12\"></i>\r\n                <p>nc-bus-front-12</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-button-pause\"></i>\r\n                <p>nc-button-pause</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-button-play\"></i>\r\n                <p>nc-button-play</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-button-power\"></i>\r\n                <p>nc-button-power</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-calendar-60\"></i>\r\n                <p>nc-calendar-60</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-camera-compact\"></i>\r\n                <p>nc-camera-compact</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-caps-small\"></i>\r\n                <p>nc-caps-small</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-cart-simple\"></i>\r\n                <p>nc-cart-simple</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-chart-bar-32\"></i>\r\n                <p>nc-chart-bar-32</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-chart-pie-36\"></i>\r\n                <p>nc-chart-pie-36</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-chat-33\"></i>\r\n                <p>nc-chat-33</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-check-2\"></i>\r\n                <p>nc-check-2</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-circle-10\"></i>\r\n                <p>nc-circle-10</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-cloud-download-93\"></i>\r\n                <p>nc-cloud-download-93</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-cloud-upload-94\"></i>\r\n                <p>nc-cloud-upload-94</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-compass-05\"></i>\r\n                <p>nc-compass-05</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-controller-modern\"></i>\r\n                <p>nc-controller-modern</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-credit-card\"></i>\r\n                <p>nc-credit-card</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-delivery-fast\"></i>\r\n                <p>nc-delivery-fast</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-diamond\"></i>\r\n                <p>nc-diamond</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-email-85\"></i>\r\n                <p>nc-email-85</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-favourite-28\"></i>\r\n                <p>nc-favourite-28</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-glasses-2\"></i>\r\n                <p>nc-glasses-2</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-globe-2\"></i>\r\n                <p>nc-globe-2</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-globe\"></i>\r\n                <p>nc-globe</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-hat-3\"></i>\r\n                <p>nc-hat-3</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-headphones\"></i>\r\n                <p>nc-headphones</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-html5\"></i>\r\n                <p>nc-html5</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-image\"></i>\r\n                <p>nc-image</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-istanbul\"></i>\r\n                <p>nc-istanbul</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-key-25\"></i>\r\n                <p>nc-key-25</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-laptop\"></i>\r\n                <p>nc-laptop</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-layout-11\"></i>\r\n                <p>nc-layout-11</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-lock-circle-open\"></i>\r\n                <p>nc-lock-circle-open</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-map-big\"></i>\r\n                <p>nc-map-big</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-minimal-down\"></i>\r\n                <p>nc-minimal-down</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-minimal-left\"></i>\r\n                <p>nc-minimal-left</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-minimal-right\"></i>\r\n                <p>nc-minimal-right</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-minimal-up\"></i>\r\n                <p>nc-minimal-up</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-mobile\"></i>\r\n                <p>nc-mobile</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-money-coins\"></i>\r\n                <p>nc-money-coins</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-note-03\"></i>\r\n                <p>nc-note-03</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-palette\"></i>\r\n                <p>nc-palette</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-paper\"></i>\r\n                <p>nc-paper</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-pin-3\"></i>\r\n                <p>nc-pin-3</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-planet\"></i>\r\n                <p>nc-planet</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-refresh-69\"></i>\r\n                <p>nc-refresh-69</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-ruler-pencil\"></i>\r\n                <p>nc-ruler-pencil</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-satisfied\"></i>\r\n                <p>nc-satisfied</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-scissors\"></i>\r\n                <p>nc-scissors</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-send\"></i>\r\n                <p>nc-send</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-settings-gear-65\"></i>\r\n                <p>nc-settings-gear-65</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-settings\"></i>\r\n                <p>nc-settings</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-share-66\"></i>\r\n                <p>nc-share-66</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-shop\"></i>\r\n                <p>nc-shop</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-simple-add\"></i>\r\n                <p>nc-simple-add</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-simple-delete\"></i>\r\n                <p>nc-simple-delete</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-simple-remove\"></i>\r\n                <p>nc-simple-remove</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-single-02\"></i>\r\n                <p>nc-single-02</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-single-copy-04\"></i>\r\n                <p>nc-single-copy-04</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-sound-wave\"></i>\r\n                <p>nc-sound-wave</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-spaceship\"></i>\r\n                <p>nc-spaceship</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-sun-fog-29\"></i>\r\n                <p>nc-sun-fog-29</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-support-17\"></i>\r\n                <p>nc-support-17</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-tablet-2\"></i>\r\n                <p>nc-tablet-2</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-tag-content\"></i>\r\n                <p>nc-tag-content</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-tap-01\"></i>\r\n                <p>nc-tap-01</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-tie-bow\"></i>\r\n                <p>nc-tie-bow</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-tile-56\"></i>\r\n                <p>nc-tile-56</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-time-alarm\"></i>\r\n                <p>nc-time-alarm</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-touch-id\"></i>\r\n                <p>nc-touch-id</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-trophy\"></i>\r\n                <p>nc-trophy</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-tv-2\"></i>\r\n                <p>nc-tv-2</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-umbrella-13\"></i>\r\n                <p>nc-umbrella-13</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-user-run\"></i>\r\n                <p>nc-user-run</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-vector\"></i>\r\n                <p>nc-vector</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-watch-time\"></i>\r\n                <p>nc-watch-time</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-world-2\"></i>\r\n                <p>nc-world-2</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-zoom-split\"></i>\r\n                <p>nc-zoom-split</p>\r\n            </li>\r\n            <!-- list of icons here with the proper class-->\r\n        </ul>\r\n    </section>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/nucleoicons/nucleoicons.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/nucleoicons/nucleoicons.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/nucleoicons/nucleoicons.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/nucleoicons/nucleoicons.component.ts ***!
  \*****************************************************************/
/*! exports provided: NucleoiconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NucleoiconsComponent", function() { return NucleoiconsComponent; });
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

var NucleoiconsComponent = /** @class */ (function () {
    function NucleoiconsComponent(element) {
        this.element = element;
    }
    NucleoiconsComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('app-nucleoicons')[0];
        var navbar = document.getElementsByTagName('app-navbar')[0].children[0];
        navbar.classList.add('navbar-hidden');
        body.classList.add('demo-icons');
    };
    NucleoiconsComponent.prototype.ngOnDestroy = function () {
        var navbar = document.getElementsByTagName('app-navbar')[0].children[0];
        navbar.classList.remove('navbar-hidden');
    };
    NucleoiconsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nucleoicons',
            template: __webpack_require__(/*! ./nucleoicons.component.html */ "./src/app/components/nucleoicons/nucleoicons.component.html"),
            styles: [__webpack_require__(/*! ./nucleoicons.component.scss */ "./src/app/components/nucleoicons/nucleoicons.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], NucleoiconsComponent);
    return NucleoiconsComponent;
}());



/***/ }),

/***/ "./src/app/components/typography/typography.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/typography/typography.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\r\n    <div class=\"container tim-container\">\r\n        <div class=\"tim-title\">\r\n            <h3>Typography</h3>\r\n            <br/>\r\n        </div>\r\n        <div id=\"typography\">\r\n            <div class=\"row\">\r\n                <div class=\"typography-line\">\r\n                    <h1>\r\n                        <span class=\"note\">Header 1</span> Thinking in textures\r\n                    </h1>\r\n                </div>\r\n                <div class=\"typography-line\">\r\n                    <h2>\r\n                        <span class=\"note\">Header 2</span> Thinking in textures\r\n                    </h2>\r\n                </div>\r\n                <div class=\"typography-line\">\r\n                    <h3>\r\n                        <span class=\"note\">Header 3</span> Thinking in textures\r\n                    </h3>\r\n                </div>\r\n                <div class=\"typography-line\">\r\n                    <h4>\r\n                        <span class=\"note\">Header 4</span> Thinking in textures\r\n                    </h4>\r\n                </div>\r\n                <div class=\"typography-line\">\r\n                    <h5>\r\n                        <span class=\"note\">Header 5</span> Thinking in textures\r\n                    </h5>\r\n                </div>\r\n                <div class=\"typography-line\">\r\n                    <h6>\r\n                        <span class=\"note\">Header 6</span> Thinking in textures\r\n                    </h6>\r\n                </div>\r\n                <div class=\"typography-line\">\r\n                    <p>\r\n                        <span class=\"note\">Paragraph</span> Thinking in textures\r\n                    </p>\r\n                </div>\r\n                <div class=\"typography-line\">\r\n                    <span class=\"note\">Quote</span>\r\n                    <blockquote class=\"blockquote\">\r\n                        <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\r\n                        <footer class=\"blockquote-footer\">Someone famous in <cite title=\"source Title\">Source Title</cite></footer>\r\n                    </blockquote>\r\n                </div>\r\n                <div class=\"typography-line\">\r\n                    <span class=\"note\">Muted text</span>\r\n                    <p class=\"text-muted\">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>\r\n                </div>\r\n                <div class=\"typography-line\">\r\n                    <span class=\"note\">Primary text</span>\r\n                    <p class=\"text-primary\">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\r\n                </div>\r\n                <div class=\"typography-line\">\r\n                    <span class=\"note\">Success text</span>\r\n                    <p class=\"text-success\">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>\r\n                </div>\r\n                <div class=\"typography-line\">\r\n                    <span class=\"note\">Info text</span>\r\n                    <p class=\"text-info\">Maecenas sed diam eget risus varius blandit sit amet non magna.</p>\r\n                </div>\r\n                <div class=\"typography-line\">\r\n                    <span class=\"note\">Warning text</span>\r\n                    <p class=\"text-warning\">Etiam porta sem malesuada magna mollis euismod.</p>\r\n                </div>\r\n                <div class=\"typography-line\">\r\n                    <span class=\"note\">Danger text</span>\r\n                    <p class=\"text-danger\">Donec ullamcorper nulla non metus auctor fringilla.</p>\r\n                </div>\r\n                <div class=\"typography-line\">\r\n                    <h2><span class=\"note\">Small tag</span>Header with small subtitle\r\n                        <br/>\r\n                        <small>\".small\" is a tag for the headers</small>\r\n                    </h2>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <br/>\r\n        <div id=\"images\">\r\n            <div class=\"container\">\r\n                <div class=\"tim-title\">\r\n                    <h3>Images</h3>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-8 col-sm-6 col-md-3\">\r\n                        <h4 class=\"images-title\">Rounded Image</h4>\r\n                        <img src=\"assets/img/uriel-soberanes.jpg\" class=\"img-rounded img-responsive\" alt=\"Rounded Image\">\r\n                        <div class=\"img-details\">\r\n                            <div class=\"author\">\r\n                                <img src=\"assets/img/faces/clem-onojeghuo-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\r\n                            </div>\r\n                            <p>Chet Faker</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-xs-6  col-sm-3 col-md-2 offset-md-1\">\r\n                        <h4 class=\"images-title\">Circle Image</h4>\r\n                        <img src=\"assets/img/faces/joe-gardner-2.jpg\" class=\"img-circle img-no-padding img-responsive\" alt=\"Rounded Image\">\r\n                        <p class=\"text-center\">Joe Gardner</p>\r\n                    </div>\r\n                    <div class=\"col-xs-6  col-sm-3 col-md-2 offset-md-1\">\r\n                        <h4 class=\"images-title\">Thumbnail</h4>\r\n                        <img src=\"assets/img/faces/clem-onojeghuo-3.jpg\" class=\"img-thumbnail img-responsive\" alt=\"Rounded Image\">\r\n                        <p class=\"text-center\">Erik Faker</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/typography/typography.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/typography/typography.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/typography/typography.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/typography/typography.component.ts ***!
  \***************************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
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

var TypographyComponent = /** @class */ (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () { };
    TypographyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-typography',
            template: __webpack_require__(/*! ./typography.component.html */ "./src/app/components/typography/typography.component.html"),
            styles: [__webpack_require__(/*! ./typography.component.scss */ "./src/app/components/typography/typography.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\r\n    <link href=\"./assets/css/paper-kit.css?v=2.2.2\" rel=\"stylesheet\" />\r\n</head>\r\n<div class=\"section section-contactus cd-section\" id=\"contact-us\">\r\n    <div class=\"contactus-1 section-image\"  style=\"background-image: url('./assets/img/login-image.jpg');\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-10 ml-auto mr-auto\">\r\n            <div class=\"card card-contact no-transition\">\r\n              <h3 class=\"card-title text-center\">Contactez moi</h3>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-5 ml-auto\">\r\n                  <div class=\"card-body\">                                                                               \r\n                    <div class=\"info info-horizontal\">\r\n                      <div class=\"icon icon-info\">\r\n                        <i class=\"nc-icon nc-pin-3\" aria-hidden=\"true\"></i>\r\n                      </div>\r\n                      <div class=\"description\">\r\n                        <h4 class=\"info-title\">Mon adresse</h4>\r\n                        <p> 55 rue Ampère,\r\n                          <br> 38490 Saint André le Gaz,\r\n                          <br> France\r\n                        </p>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"info info-horizontal\">\r\n                      <div class=\"icon icon-danger\">\r\n                        <i class=\"nc-icon nc-badge\" aria-hidden=\"true\"></i>\r\n                      </div>\r\n                      <div class=\"description\">\r\n                        <h4 class=\"info-title\">Appelez moi !</h4>\r\n                        <p> Adeline Delbecq\r\n                          <br> +33 6 45 80 88 31\r\n                        </p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-5 mr-auto\">\r\n                  <form role=\"form\" id=\"contact-form\" method=\"post\">\r\n                    <div class=\"card-body\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                          <div class=\"form-group label-floating\">\r\n                            <label class=\"control-label\">Prénom</label>\r\n                            <input type=\"text\" name=\"name\" class=\"form-control\" placeholder=\"Prénom\">\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                          <div class=\"form-group label-floating\">\r\n                            <label class=\"control-label\">Nom</label>\r\n                            <input type=\"text\" name=\"name\" class=\"form-control\" placeholder=\"Nom\">\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group label-floating\">\r\n                        <label class=\"control-label\">Email</label>\r\n                        <input type=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email\" />\r\n                      </div>\r\n                      <div class=\"form-group label-floating\">\r\n                        <label class=\"control-label\">Votre message</label>\r\n                        <textarea name=\"message\" class=\"form-control\" id=\"message\" rows=\"6\" placeholder=\"Message\"></textarea>\r\n                      </div>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                          <div class=\"form-check\">\r\n                            <label class=\"form-check-label\">\r\n                              <input class=\"form-check-input\" type=\"checkbox\" value=\"\"> Je ne suis pas un robot !\r\n                              <span class=\"form-check-sign\"></span>\r\n                            </label>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                          <button type=\"submit\" class=\"btn btn-primary pull-right\">Envoyer</button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
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
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"main\">\r\n        <app-profile></app-profile>\r\n        <app-timeline></app-timeline>\r\n        <app-blog></app-blog>\r\n        <app-contact></app-contact>           \r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.model = {
            left: true,
            middle: false,
            right: false
        };
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../timeline/timeline.component */ "./src/app/timeline/timeline.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
            ],
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _blog_blog_component__WEBPACK_IMPORTED_MODULE_7__["BlogComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"], _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_10__["TimelineComponent"]],
            exports: [_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]],
            providers: []
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/landing/landing.component.html":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\" data-parallax=\"true\" style=\"background-image: url('./assets/img/daniel-olahh.jpg');\">\r\n    <div class=\"filter\"></div>\r\n    <div class=\"container\">\r\n        <div class=\"motto text-center\">\r\n            <h1>Example page</h1>\r\n            <h3>Start designing your landing page here.</h3>\r\n            <br />\r\n            <a href=\"https://www.youtube.com/watch?v=dQw4w9WgXcQ\" class=\"btn btn-outline-neutral btn-round\"><i class=\"fa fa-play\"></i>Watch video</a>\r\n            <button type=\"button\" class=\"btn btn-outline-neutral btn-round\">Download</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"main\">\r\n    <div class=\"section text-center\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-8 mr-auto ml-auto\">\r\n                <h2 class=\"title\">Let's talk product</h2>\r\n                <h5 class=\"description\">This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn't scroll to get here. Add a button if you want the user to see more.</h5>\r\n                <br>\r\n                <a href=\"#paper-kit\" class=\"btn btn-danger btn-round\">See Details</a>\r\n            </div>\r\n        </div>\r\n        <br/><br/>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-3\">\r\n                <div class=\"info\">\r\n                    <div class=\"icon icon-danger\">\r\n                        <i class=\"nc-icon nc-album-2\"></i>\r\n                    </div>\r\n                    <div class=\"description\">\r\n                        <h4 class=\"info-title\">Beautiful Gallery</h4>\r\n                        <p class=\"description\">Spend your time generating new ideas. You don't have to think of implementing.</p>\r\n                        <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n                <div class=\"info\">\r\n                    <div class=\"icon icon-danger\">\r\n                        <i class=\"nc-icon nc-bulb-63\"></i>\r\n                    </div>\r\n                    <div class=\"description\">\r\n                        <h4 class=\"info-title\">New Ideas</h4>\r\n                        <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient.</p>\r\n                        <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n                <div class=\"info\">\r\n                    <div class=\"icon icon-danger\">\r\n                        <i class=\"nc-icon nc-chart-bar-32\"></i>\r\n                    </div>\r\n                    <div class=\"description\">\r\n                        <h4 class=\"info-title\">Statistics</h4>\r\n                        <p>Choose from a veriety of many colors resembling sugar paper pastels.</p>\r\n                        <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n                <div class=\"info\">\r\n                    <div class=\"icon icon-danger\">\r\n                        <i class=\"nc-icon nc-sun-fog-29\"></i>\r\n                    </div>\r\n                    <div class=\"description\">\r\n                        <h4 class=\"info-title\">Delightful design</h4>\r\n                        <p>Find unique and handmade delightful designs related items directly from our sellers.</p>\r\n                        <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<div class=\"section section-dark text-center\">\r\n    <div class=\"container\">\r\n        <h2 class=\"title\">Let's talk about us</h2>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n                <div class=\"card card-profile card-plain\">\r\n                    <div class=\"card-avatar\">\r\n                        <a href=\"#avatar\"><img src=\"./assets/img/faces/clem-onojeghuo-3.jpg\" alt=\"...\"></a>\r\n                    </div>\r\n                    <div class=\"card-block\">\r\n                        <a href=\"#paper-kit\">\r\n                            <div class=\"author\">\r\n                                <h4 class=\"card-title\">Henry Ford</h4>\r\n                                <h6 class=\"card-category\">Product Manager</h6>\r\n                            </div>\r\n                        </a>\r\n                        <p class=\"card-description text-center\">\r\n                        Teamwork is so important that it is virtually impossible for you to reach the heights of your capabilities or make the money that you want without becoming very good at it.\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"card-footer text-center\">\r\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-twitter\"></i></a>\r\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-google-plus\"></i></a>\r\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-linkedin\"></i></a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-4\">\r\n                <div class=\"card card-profile card-plain\">\r\n                    <div class=\"card-avatar\">\r\n                        <a href=\"#avatar\"><img src=\"./assets/img/faces/joe-gardner-2.jpg\" alt=\"...\"></a>\r\n                    </div>\r\n                    <div class=\"card-block\">\r\n                        <a href=\"#paper-kit\">\r\n                            <div class=\"author\">\r\n                                <h4 class=\"card-title\">Sophie West</h4>\r\n                                <h6 class=\"card-category\">Designer</h6>\r\n                            </div>\r\n                        </a>\r\n                        <p class=\"card-description text-center\">\r\n                        A group becomes a team when each member is sure enough of himself and his contribution to praise the skill of the others. No one can whistle a symphony. It takes an orchestra to play it.\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"card-footer text-center\">\r\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-twitter\"></i></a>\r\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-google-plus\"></i></a>\r\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-linkedin\"></i></a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-4\">\r\n                <div class=\"card card-profile card-plain\">\r\n                    <div class=\"card-avatar\">\r\n                        <a href=\"#avatar\"><img src=\"./assets/img/faces/erik-lucatero-2.jpg\" alt=\"...\"></a>\r\n                    </div>\r\n                    <div class=\"card-block\">\r\n                        <a href=\"#paper-kit\">\r\n                            <div class=\"author\">\r\n                                <h4 class=\"card-title\">Robert Orben</h4>\r\n                                <h6 class=\"card-category\">Developer</h6>\r\n                            </div>\r\n                        </a>\r\n                        <p class=\"card-description text-center\">\r\n                        The strength of the team is each individual member. The strength of each member is the team. If you can laugh together, you can work together, silence isn’t golden, it’s deadly.\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"card-footer text-center\">\r\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-twitter\"></i></a>\r\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-google-plus\"></i></a>\r\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-linkedin\"></i></a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n    <div class=\"section landing-section\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8 mr-auto ml-auto\">\r\n                    <h2 class=\"text-center\">Keep in touch?</h2>\r\n                    <form class=\"contact-form\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <label>Name</label>\r\n                                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                                    <div class=\"input-group-prepend\">\r\n                                      <span class=\"input-group-text\"><i class=\"nc-icon nc-single-02\"></i></span>\r\n                                    </div>\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Name\" (focus)=\"focus=true\" (blur)=\"focus=false\" >\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <label>Email</label>\r\n                                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus1===true}\">\r\n                                    <div class=\"input-group-prepend\">\r\n                                      <span class=\"input-group-text\">  <i class=\"nc-icon nc-email-85\"></i></span>\r\n                                    </div>\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Email\" (focus)=\"focus1=true\" (blur)=\"focus1=false\" >\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <label>Message</label>\r\n                        <textarea class=\"form-control\" rows=\"4\" placeholder=\"Tell us your thoughts and feelings...\"></textarea>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-4 mr-auto ml-auto\">\r\n                                <button class=\"btn btn-danger btn-lg btn-fill\">Send Message</button>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/landing/landing.component.scss":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
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

var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () { };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.scss */ "./src/app/landing/landing.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n        <div class=\"page-header page-header-small\" filter-color=\"orange\">\r\n                <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-8\" style=\"background-image: url('assets/img/bg7.jpg') ;\">\r\n                </div>\r\n                <div class=\"container\">\r\n                    <div class=\"content-center\">\r\n                        <div class=\"photo-container\">\r\n                            <img src=\"assets/img/faces/Adeline.jpg\" alt=\"\">\r\n                        </div>\r\n                        <h3 class=\"title\">{{name}}</h3>\r\n                        <p class=\"category\">{{description}}</p>\r\n                        <div class=\"content\">\r\n                            <div class=\"social-description\">\r\n                                <h2>19</h2>\r\n                                <p>Ans</p>\r\n                            </div>\r\n                            <div class=\"social-description\">\r\n                                <h2>26</h2>\r\n                                <p>Comments</p>\r\n                            </div>\r\n                            <div class=\"social-description\">\r\n                                <h2>48</h2>\r\n                                <p>Bookmarks</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n    <div class=\"section\">\r\n        <div class=\"container\">\r\n            <div class=\"button-container\">\r\n                <a href=\"#button\" class=\"btn btn-default btn-round btn-lg btn-icon\" rel=\"tooltip\" title=\"GitHub\">\r\n                    <i class=\"fa fa-github\"></i>\r\n                </a>\r\n                <a href=\"#button\" class=\"btn btn-default btn-round btn-lg btn-icon\" rel=\"tooltip\" title=\"Suis moi sur Instagram\">\r\n                    <i class=\"fa fa-instagram\"></i>\r\n                </a>\r\n                <a href=\"#button\" class=\"btn btn-default btn-round btn-lg btn-icon\" rel=\"tooltip\" title=\"Suis moi sur Linkedin\">\r\n                        <i class=\"fa fa-linkedin\"></i>\r\n                    </a>\r\n            </div>\r\n            <h3 class=\"title\">A propos de moi</h3>\r\n          <h5 class=\"description\">Actuellement en deuxième année de Bachelor en Informatique (Architecte Informatique et systèmes d'information) à Ingésup sur le campus Ynov à Lyon, je suis en quête d'expériences professionnelles en développement informatique particulièrement en développement de logiciel.</h5>\r\n            <div class=\"card-deck\">\r\n                <div class=\"card text-white bg-dark mb-3\">\r\n                    <div class=\"card-body\">\r\n                            <div class=\"welcome_text\">\r\n                                    <h4>A propos de moi</h4>\r\n                                    <p>Actuellement en deuxième année de Bachelor en Informatique (Architecte Informatique et systèmes d'information) à Ingésup sur le campus Ynov à Lyon, je suis en quête d'expériences professionnelles en développement informatique particulièrement en développement de logiciel.\r\n                                        \r\n                                    </p>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-4\">\r\n                                            <div class=\"wel_item\">\r\n                                                <i class=\"lnr lnr-database\"></i>\r\n                                                <h4>19 ans</h4>\r\n                                                <p>Math</p>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-sm-4\">\r\n                                            <div class=\"wel_item\">\r\n                                                <i class=\"lnr lnr-book\"></i>\r\n                                                <h4>1465</h4>\r\n                                                <p>Sportive</p>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-sm-4\">\r\n                                            <div class=\"wel_item\">\r\n                                                <i class=\"lnr lnr-users\"></i>\r\n                                                <h4>3965</h4>\r\n                                                <p>Total Volunteers</p>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                    </div>\r\n                 \r\n                </div>\r\n                <div class=\"card text-white bg-dark mb-3\">\r\n                    <div class=\"card-body\">\r\n                            <div class=\"tools_expert\">\r\n                                    <h3>Mes compétences</h3>\r\n                                    <div class=\"skill_main\">\r\n                                        <div class=\"skill_item\">\r\n                                            <h4>After Effects <span class=\"counter\">85</span>%</h4>\r\n                                            <div class=\"progress\">\r\n                                                <div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" style=\"width: 85%\" aria-valuenow=\"85\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"skill_item\">\r\n                                            <h4>Photoshop <span class=\"counter\">90</span>%</h4>\r\n                                            <div class=\"progress\">\r\n                                                    <div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" style=\"width: 90%\" aria-valuenow=\"90\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"skill_item\">\r\n                                            <h4>Illustrator <span class=\"counter\">70</span>%</h4>\r\n                                            <div class=\"progress\">\r\n                                                    <div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" style=\"width: 70%\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"skill_item\">\r\n                                            <h4>Sublime <span class=\"counter\">95</span>%</h4>\r\n                                            <div class=\"progress\">\r\n                                                    <div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" style=\"width: 80%\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"skill_item\">\r\n                                            <h4>Sketch <span class=\"counter\">75</span>%</h4>\r\n                                            <div class=\"progress\">\r\n                                                    <div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" style=\"width: 75%\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rellax */ "./node_modules/rellax/rellax.js");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
        this.name = "Adeline Delbecq";
        this.description = "Développeuse";
        this.zoom = 14;
        this.lat = 44.445248;
        this.lng = 26.099672;
        this.styles = [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }];
        this.data = new Date();
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var rellaxHeader = new rellax__WEBPACK_IMPORTED_MODULE_1__('.rellax-header');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('profile-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    };
    ProfileComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('profile-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <nav class=\"footer-nav\">\r\n                <ul>\r\n                    <li><a >Adeline Delbecq</a></li>\r\n                    <li><a href=\"http://blog.creative-tim.com\">Blog</a></li>\r\n                    <li><a href=\"https://www.creative-tim.com/license\">Licenses</a></li>\r\n                </ul>\r\n            </nav>\r\n            <div class=\"credits ml-auto\">\r\n                <span class=\"copyright\">\r\n                    © {{test | date: 'yyyy'}}, fait avec le<i class=\"fa fa-heart heart\"></i> par Adeline Delbecq\r\n                </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent\" color-on-scroll=\"500\">\r\n    <div class=\"container\">\r\n        <div class=\"navbar-translate\">\r\n            <a class=\"navbar-brand\" href=\"https://www.creative-tim.com\">{{title}}</a>\r\n            <button class=\"navbar-toggler navbar-burger\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"sidebarToggle()\">\r\n                <span class=\"navbar-toggler-bar\"></span>\r\n                <span class=\"navbar-toggler-bar\"></span>\r\n                <span class=\"navbar-toggler-bar\"></span>\r\n            </button>\r\n        </div>\r\n        <div class=\"navbar-collapse\" id=\"navbarToggler\">\r\n            <ul class=\"navbar-nav ml-auto\">\r\n                <li class=\"nav-item\" *ngIf=\"!isDocumentation()\">\r\n                    <a class=\"nav-link\" rel=\"tooltip\" title=\"Star on GitHub\" data-placement=\"bottom\" href=\"https://www.github.com/CreativeTimOfficial/paper-kit-2-angular\" target=\"_blank\">\r\n                        <i class=\"fa fa-github\"></i>\r\n                        <p class=\"d-lg-none\">GitHub</p>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item\" *ngIf=\"isHome()\">\r\n                    <a target=\"_blank\" class=\"btn btn-danger btn-round\">Login</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element) {
        this.location = location;
        this.element = element;
        this.title = "Adeline Delbecq";
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // console.log(toggleButton, 'toggle');
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.isHome = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '/home') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.isDocumentation = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '/documentation') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/shared/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"page-header\" style=\"background-image: url('./assets/img/login-image.jpg');\">\r\n        <div class=\"filter\"></div>\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-4 col-sm-6 mr-auto ml-auto\">\r\n                      <div class=\"card card-register\">\r\n                          <h3 class=\"title\">Welcome</h3>\r\n                          <div class=\"social-line text-center\">\r\n                              <a href=\"#pablo\" class=\"btn btn-neutral btn-facebook btn-just-icon\">\r\n                                  <i class=\"fa fa-facebook-square\"></i>\r\n                              </a>\r\n                              <a href=\"#pablo\" class=\"btn btn-neutral btn-google btn-just-icon\">\r\n                                  <i class=\"fa fa-google-plus\"></i>\r\n                              </a>\r\n                              <a href=\"#pablo\" class=\"btn btn-neutral btn-twitter btn-just-icon\">\r\n                                  <i class=\"fa fa-twitter\"></i>\r\n                              </a>\r\n                          </div>\r\n                          <form class=\"register-form\">\r\n                              <label>Email</label>\r\n                              <div class=\"input-group form-group-no-border\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                                <div class=\"input-group-prepend\">\r\n                                  <span class=\"input-group-text\">\r\n                                      <i class=\"nc-icon nc-email-85\"></i>\r\n                                  </span>\r\n                                </div>\r\n\r\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"Email\" (focus)=\"focus=true\" (blur)=\"focus=false\" >\r\n                              </div>\r\n\r\n                              <label>Password</label>\r\n                              <div class=\"input-group form-group-no-border\" [ngClass]=\"{'input-group-focus':focus1===true}\">\r\n                                <div class=\"input-group-prepend\">\r\n                                  <span class=\"input-group-text\">\r\n                                      <i class=\"nc-icon nc-key-25\"></i>\r\n                                  </span>\r\n                                </div>\r\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"Password\" (focus)=\"focus1=true\" (blur)=\"focus1=false\" >\r\n                              </div>\r\n                              <button class=\"btn btn-danger btn-block btn-round\">Register</button>\r\n                          </form>\r\n                          <div class=\"forgot\">\r\n                              <a href=\"#\" class=\"btn btn-link btn-danger\">Forgot password?</a>\r\n                          </div>\r\n                      </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"footer register-footer text-center\">\r\n                    <h6>&copy;{{test | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by Creative Tim</h6>\r\n                </div>\r\n            </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/signup/signup.component.scss":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
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

var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
        this.test = new Date();
    }
    SignupComponent.prototype.ngOnInit = function () { };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/timeline/timeline.component.html":
/*!**************************************************!*\
  !*** ./src/app/timeline/timeline.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h4>Timeline Style : Demo-7</h4>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"main-timeline7\">\r\n                <div class=\"timeline\">\r\n                    <div class=\"timeline-icon\"><i class=\"fa fa-globe\"></i></div>\r\n                    <span class=\"year\">2018</span>\r\n                    <div class=\"timeline-content\">\r\n                        <h5 class=\"title\">Développeuse Angular</h5>\r\n                        <p class=\"description\">\r\n                            INTÉGRÉE AU PROJET STSI DANS UNE\r\n\r\n\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"timeline\">\r\n                    <div class=\"timeline-icon\"><i class=\"fa fa-rocket\"></i></div>\r\n                    <span class=\"year\">2017</span>\r\n                    <div class=\"timeline-content\">\r\n                        <h5 class=\"title\">Web Developer</h5>\r\n                        <p class=\"description\">\r\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac venenatis enim. Aenean hendrerit justo sed.\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"timeline\">\r\n                    <div class=\"timeline-icon\"><i class=\"fa fa-briefcase\"></i></div>\r\n                    <span class=\"year\">2016</span>\r\n                    <div class=\"timeline-content\">\r\n                        <h5 class=\"title\">Web Desginer</h5>\r\n                        <p class=\"description\">\r\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac venenatis enim. Aenean hendrerit justo sed.\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"timeline\">\r\n                    <div class=\"timeline-icon\"><i class=\"fa fa-mobile\"></i></div>\r\n                    <span class=\"year\">2015</span>\r\n                    <div class=\"timeline-content\">\r\n                        <h5 class=\"title\">Web Developer</h5>\r\n                        <p class=\"description\">\r\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac venenatis enim. Aenean hendrerit justo sed.\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/timeline/timeline.component.scss":
/*!**************************************************!*\
  !*** ./src/app/timeline/timeline.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-timeline7 {\n  overflow: hidden;\n  position: relative; }\n\n.main-timeline7 .timeline {\n  width: 50%;\n  float: left;\n  z-index: 1;\n  position: relative; }\n\n.main-timeline7 .timeline:after, .main-timeline7 .timeline:before {\n  content: \"\";\n  display: block;\n  clear: both; }\n\n.main-timeline7 .timeline:before {\n  content: \"\";\n  width: 40px;\n  height: 90%;\n  background: #727cb6;\n  position: absolute;\n  top: 10%;\n  right: -20px; }\n\n.main-timeline7 .timeline:last-child:before {\n  height: 0; }\n\n.main-timeline7 .timeline-icon {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: #727cb6;\n  overflow: hidden;\n  text-align: center;\n  position: absolute;\n  top: 0;\n  right: -40px;\n  z-index: 3; }\n\n.main-timeline7 .timeline-icon:before {\n  content: \"\";\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  background: #fff;\n  border: 2px solid #727cb6;\n  box-shadow: 0 0 0 4px #a5afe4;\n  margin: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0; }\n\n.main-timeline7 .timeline-icon i {\n  font-size: 35px;\n  color: #303a3b;\n  line-height: 80px;\n  z-index: 1;\n  position: relative; }\n\n.main-timeline7 .year {\n  display: block;\n  padding: 0 60px 0 30px;\n  font-size: 30px;\n  color: #303a3b;\n  text-align: right;\n  border-bottom: 2px solid #303a3b;\n  z-index: 2;\n  position: relative; }\n\n.main-timeline7 .year:before {\n  content: \"\";\n  display: block;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: #727cb6;\n  border: 5px solid #fff;\n  box-shadow: 0 0 0 4px #727cb6;\n  margin: auto;\n  position: absolute;\n  bottom: -15px;\n  left: 4px; }\n\n.main-timeline7 .year:after {\n  content: \"\";\n  border-left: 10px solid #303a3b;\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  position: absolute;\n  bottom: -11px;\n  left: 50px; }\n\n.main-timeline7 .timeline-content {\n  padding: 18px 60px 18px 40px;\n  text-align: right;\n  position: relative;\n  z-index: 1; }\n\n.main-timeline7 .timeline-content:after, .main-timeline7 .timeline-content:before {\n  content: \"\";\n  width: 80px;\n  height: 150px;\n  border-radius: 50%;\n  background: #fff;\n  position: absolute;\n  top: -7%;\n  right: 15px;\n  z-index: -1; }\n\n.main-timeline7 .timeline-content:after {\n  left: auto;\n  right: -95px; }\n\n.main-timeline7 .timeline:last-child .timeline-content:after, .main-timeline7 .timeline:last-child .timeline-content:before {\n  width: 0;\n  height: 0; }\n\n.main-timeline7 .title {\n  font-size: 22px;\n  font-weight: 700;\n  color: #727cb6;\n  margin-top: 0; }\n\n.main-timeline7 .description {\n  font-size: 15px;\n  color: #7f8386;\n  line-height: 25px; }\n\n.main-timeline7 .timeline:nth-child(2) {\n  margin-top: 140px; }\n\n.main-timeline7 .timeline:nth-child(even) {\n  margin-bottom: 80px; }\n\n.main-timeline7 .timeline:nth-child(odd) {\n  margin: -140px 0 0; }\n\n.main-timeline7 .timeline:first-child, .main-timeline7 .timeline:last-child:nth-child(even) {\n  margin: 0 !important; }\n\n.main-timeline7 .timeline:nth-child(2n) .timeline-icon, .main-timeline7 .timeline:nth-child(2n):before {\n  right: auto;\n  left: -20px;\n  background: #e77e21; }\n\n.main-timeline7 .timeline:nth-child(2n) .timeline-icon {\n  left: -40px; }\n\n.main-timeline7 .timeline:nth-child(2n) .year {\n  padding: 0 30px 0 60px;\n  text-align: left; }\n\n.main-timeline7 .timeline:nth-child(2n) .year:before {\n  left: auto;\n  right: 3px; }\n\n.main-timeline7 .timeline:nth-child(2n) .year:after {\n  border-left: none;\n  border-right: 10px solid #303a3b;\n  right: 50px; }\n\n.main-timeline7 .timeline:nth-child(2n) .timeline-content {\n  padding: 18px 40px 18px 60px;\n  text-align: left; }\n\n.main-timeline7 .timeline:nth-child(2n) .timeline-content:before {\n  left: -95px; }\n\n.main-timeline7 .timeline:nth-child(2n) .timeline-content:after {\n  left: 15px; }\n\n.main-timeline7 .timeline:nth-child(2n) .timeline-icon:before {\n  border-color: #e77e21;\n  box-shadow: 0 0 0 4px #f1a563; }\n\n.main-timeline7 .timeline:nth-child(2n) .year:before {\n  background: #e77e21;\n  box-shadow: 0 0 0 4px #e77e21; }\n\n.main-timeline7 .timeline:nth-child(2n) .title {\n  color: #e77e21; }\n\n.main-timeline7 .timeline:nth-child(3n) .timeline-icon, .main-timeline7 .timeline:nth-child(3n):before {\n  background: #008b8b; }\n\n.main-timeline7 .timeline:nth-child(3n) .timeline-icon:before {\n  border-color: #008b8b;\n  box-shadow: 0 0 0 4px #50b5b4; }\n\n.main-timeline7 .timeline:nth-child(3n) .year:before {\n  background: #008b8b;\n  box-shadow: 0 0 0 4px #008b8b; }\n\n.main-timeline7 .timeline:nth-child(3n) .title {\n  color: #008b8b; }\n\n.main-timeline7 .timeline:nth-child(4n) .timeline-icon, .main-timeline7 .timeline:nth-child(4n):before {\n  background: #ed687c; }\n\n.main-timeline7 .timeline:nth-child(4n) .timeline-icon:before {\n  border-color: #ed687c;\n  box-shadow: 0 0 0 4px #f798a8; }\n\n.main-timeline7 .timeline:nth-child(4n) .year:before {\n  background: #ed687c;\n  box-shadow: 0 0 0 4px #ed687c; }\n\n.main-timeline7 .timeline:nth-child(4n) .title {\n  color: #ed687c; }\n\n@media only screen and (max-width: 990px) {\n  .main-timeline7 .timeline {\n    width: 100%; }\n  .main-timeline7 .timeline:nth-child(even), .main-timeline7 .timeline:nth-child(odd) {\n    margin: 0; }\n  .main-timeline7 .timeline:before, .main-timeline7 .timeline:nth-child(2n):before {\n    width: 30px;\n    height: 100%;\n    left: 25px; }\n  .main-timeline7 .timeline-icon, .main-timeline7 .timeline:nth-child(2n) .timeline-icon {\n    left: 0; }\n  .main-timeline7 .timeline:nth-child(2n) .year, .main-timeline7 .year {\n    text-align: left;\n    padding: 0 30px 0 100px; }\n  .main-timeline7 .timeline:nth-child(2n) .year:before, .main-timeline7 .year:before {\n    left: auto;\n    right: 4px; }\n  .main-timeline7 .year:after {\n    left: auto;\n    right: 50px;\n    border-right: 10px solid #303a3b;\n    border-left: none; }\n  .main-timeline7 .timeline-content .description {\n    color: #666; }\n  .main-timeline7 .timeline-content, .main-timeline7 .timeline:nth-child(2n) .timeline-content {\n    text-align: left;\n    padding: 18px 40px 18px 100px; }\n  .main-timeline7 .timeline-content:after, .main-timeline7 .timeline-content:before {\n    width: 0;\n    height: 0; } }\n"

/***/ }),

/***/ "./src/app/timeline/timeline.component.ts":
/*!************************************************!*\
  !*** ./src/app/timeline/timeline.component.ts ***!
  \************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
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

var TimelineComponent = /** @class */ (function () {
    function TimelineComponent() {
    }
    TimelineComponent.prototype.ngOnInit = function () {
    };
    TimelineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timeline',
            template: __webpack_require__(/*! ./timeline.component.html */ "./src/app/timeline/timeline.component.html"),
            styles: [__webpack_require__(/*! ./timeline.component.scss */ "./src/app/timeline/timeline.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TimelineComponent);
    return TimelineComponent;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCeEWlDEO3-XkUyBGB86_8OlLdn8IiSjSM",
        authDomain: "adeline-delbecq-website.firebaseapp.com",
        databaseURL: "https://adeline-delbecq-website.firebaseio.com",
        projectId: "adeline-delbecq-website",
        storageBucket: "adeline-delbecq-website.appspot.com",
        messagingSenderId: "499033344990"
    }
};


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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Wappin\Desktop\Adeline\Adeline_Website\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map