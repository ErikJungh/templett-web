/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 34991:
/*!*******************!*\
  !*** ./server.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppServerModule: () => (/* reexport safe */ _src_main_server__WEBPACK_IMPORTED_MODULE_5__.AppServerModule),
/* harmony export */   app: () => (/* binding */ app),
/* harmony export */   renderApplication: () => (/* reexport safe */ _angular_platform_server__WEBPACK_IMPORTED_MODULE_7__.renderApplication),
/* harmony export */   renderModule: () => (/* reexport safe */ _angular_platform_server__WEBPACK_IMPORTED_MODULE_7__.renderModule),
/* harmony export */   "ɵSERVER_CONTEXT": () => (/* reexport safe */ _angular_platform_server__WEBPACK_IMPORTED_MODULE_7__["ɵSERVER_CONTEXT"])
/* harmony export */ });
/* harmony import */ var zone_js_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/node */ 20650);
/* harmony import */ var zone_js_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_node__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 34228);
/* harmony import */ var _nguniversal_express_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nguniversal/express-engine */ 93389);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ 35162);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var node_fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! node:fs */ 87561);
/* harmony import */ var node_fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(node_fs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var node_path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! node:path */ 49411);
/* harmony import */ var node_path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(node_path__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_main_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/main.server */ 49174);
/* harmony import */ var _angular_platform_server__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-server */ 97014);







// The Express app is exported so that it can be used by serverless Functions.
function app() {
  const server = express__WEBPACK_IMPORTED_MODULE_2__();
  const distFolder = (0,node_path__WEBPACK_IMPORTED_MODULE_4__.join)(process.cwd(), 'dist/templett-web/browser');
  const indexHtml = (0,node_fs__WEBPACK_IMPORTED_MODULE_3__.existsSync)((0,node_path__WEBPACK_IMPORTED_MODULE_4__.join)(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';
  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/main/modules/express-engine)
  server.engine('html', (0,_nguniversal_express_engine__WEBPACK_IMPORTED_MODULE_1__.ngExpressEngine)({
    bootstrap: _src_main_server__WEBPACK_IMPORTED_MODULE_5__.AppServerModule
  }));
  server.set('view engine', 'html');
  server.set('views', distFolder);
  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express__WEBPACK_IMPORTED_MODULE_2__["static"](distFolder, {
    maxAge: '1y'
  }));
  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, {
      req,
      providers: [{
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_6__.APP_BASE_HREF,
        useValue: req.baseUrl
      }]
    });
  });
  return server;
}
function run() {
  const port = process.env['PORT'] || 4000;
  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}
const mainModule = require.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}


  // EXPORTS added by @angular-devkit/build-angular
  
  

/***/ }),

/***/ 11838:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 68804);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 59936);



const routes = [];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking'
    }), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 96846:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 59936);
/* harmony import */ var _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/hero/hero.component */ 43201);
/* harmony import */ var _directives_animate_div_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives/animate-div.directive */ 24995);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ 73149);
/* harmony import */ var _components_about_section_about_section_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/about-section/about-section.component */ 3954);
/* harmony import */ var _components_offers_section_offers_section_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/offers-section/offers-section.component */ 44651);
/* harmony import */ var _components_stats_section_stats_section_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/stats-section/stats-section.component */ 54512);
/* harmony import */ var _components_benefits_section_benefits_section_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/benefits-section/benefits-section.component */ 82848);
/* harmony import */ var _components_faq_section_faq_section_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/faq-section/faq-section.component */ 86646);
/* harmony import */ var _components_mobile_benefits_section_mobile_benefits_section_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/mobile-benefits-section/mobile-benefits-section.component */ 34226);
/* harmony import */ var _components_mobile_header_mobile_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/mobile-header/mobile-header.component */ 61329);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/footer/footer.component */ 49186);
/* harmony import */ var _components_product_video_product_video_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/product-video/product-video.component */ 94952);
/* harmony import */ var _components_manual_downloads_manual_downloads_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/manual-downloads/manual-downloads.component */ 62353);
/* harmony import */ var _components_basic_stickers_info_basic_stickers_info_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/basic-stickers-info/basic-stickers-info.component */ 64369);
/* harmony import */ var _components_animated_sticker_animated_sticker_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/animated-sticker/animated-sticker.component */ 39265);
















class AppComponent {
  constructor() {
    this.title = 'templett-web';
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 26,
    vars: 0,
    consts: [["id", "body", 1, "h-auto", "w-full"], [1, "w-full", "h-auto", "bg-primary"], ["animateDivEntry", "", 1, "hide-before-animate"], ["animateDivEntry", "", 1, "pt-8", "lg:pt-12", "hide-before-animate"], ["animateDivEntry", "", 1, "py-20", "lg:py-40", "hide-before-animate"], ["animateDivEntry", "", 1, "lg:pt-12", "hidden", "lg:block", "hide-before-animate"], ["animateDivEntry", "", 1, "pt-12", "block", "lg:hidden", "hide-before-animate"], ["animateDivEntry", "", 1, "lg:pt-20", "hide-before-animate"], ["animateDivEntry", "", 1, "pt-12", "hide-before-animate"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "app-header")(2, "app-mobile-header")(3, "app-hero");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "div", 1)(5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](6, "app-about-section");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](8, "app-basic-stickers-info");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](10, "app-animated-sticker");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](12, "app-product-video");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](14, "app-offers-section");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](16, "app-benefits-section");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](18, "app-mobile-benefits-section");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](20, "app-stats-section");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](22, "app-faq-section");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](24, "app-manual-downloads");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](25, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_components_hero_hero_component__WEBPACK_IMPORTED_MODULE_0__.HeroComponent, _directives_animate_div_directive__WEBPACK_IMPORTED_MODULE_1__.AnimateDivDirective, _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _components_about_section_about_section_component__WEBPACK_IMPORTED_MODULE_3__.AboutSectionComponent, _components_offers_section_offers_section_component__WEBPACK_IMPORTED_MODULE_4__.OffersSectionComponent, _components_stats_section_stats_section_component__WEBPACK_IMPORTED_MODULE_5__.StatsSectionComponent, _components_benefits_section_benefits_section_component__WEBPACK_IMPORTED_MODULE_6__.BenefitsSectionComponent, _components_faq_section_faq_section_component__WEBPACK_IMPORTED_MODULE_7__.FaqSectionComponent, _components_mobile_benefits_section_mobile_benefits_section_component__WEBPACK_IMPORTED_MODULE_8__.MobileBenefitsSectionComponent, _components_mobile_header_mobile_header_component__WEBPACK_IMPORTED_MODULE_9__.MobileHeaderComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__.FooterComponent, _components_product_video_product_video_component__WEBPACK_IMPORTED_MODULE_11__.ProductVideoComponent, _components_manual_downloads_manual_downloads_component__WEBPACK_IMPORTED_MODULE_12__.ManualDownloadsComponent, _components_basic_stickers_info_basic_stickers_info_component__WEBPACK_IMPORTED_MODULE_13__.BasicStickersInfoComponent, _components_animated_sticker_animated_sticker_component__WEBPACK_IMPORTED_MODULE_14__.AnimatedStickerComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 50041:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser */ 41081);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 11838);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 96846);
/* harmony import */ var _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/hero/hero.component */ 43201);
/* harmony import */ var _directives_hero_scroll_animation_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives/hero-scroll-animation.directive */ 34595);
/* harmony import */ var _directives_rotate_div_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives/rotate-div.directive */ 64088);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ 73149);
/* harmony import */ var _components_phone_animation_phone_animation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/phone-animation/phone-animation.component */ 68202);
/* harmony import */ var _components_about_section_about_section_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/about-section/about-section.component */ 3954);
/* harmony import */ var _directives_animate_div_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/animate-div.directive */ 24995);
/* harmony import */ var _components_offers_section_offers_section_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/offers-section/offers-section.component */ 44651);
/* harmony import */ var _components_stats_section_stats_section_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/stats-section/stats-section.component */ 54512);
/* harmony import */ var _components_benefits_section_benefits_section_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/benefits-section/benefits-section.component */ 82848);
/* harmony import */ var _components_faq_section_faq_section_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/faq-section/faq-section.component */ 86646);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/platform-browser/animations */ 97378);
/* harmony import */ var _directives_animated_increment_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./directives/animated-increment.directive */ 38959);
/* harmony import */ var _components_sticker_sticker_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/sticker/sticker.component */ 43209);
/* harmony import */ var _components_mobile_benefits_section_mobile_benefits_section_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/mobile-benefits-section/mobile-benefits-section.component */ 34226);
/* harmony import */ var _components_mobile_header_mobile_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/mobile-header/mobile-header.component */ 61329);
/* harmony import */ var _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/sidenav/sidenav.component */ 39452);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/footer/footer.component */ 49186);
/* harmony import */ var _components_vertical_rotating_carousel_vertical_rotating_carousel_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/vertical-rotating-carousel/vertical-rotating-carousel.component */ 43273);
/* harmony import */ var _components_product_video_product_video_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/product-video/product-video.component */ 94952);
/* harmony import */ var _components_manual_downloads_manual_downloads_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/manual-downloads/manual-downloads.component */ 62353);
/* harmony import */ var _components_basic_stickers_info_basic_stickers_info_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/basic-stickers-info/basic-stickers-info.component */ 64369);
/* harmony import */ var _components_animated_sticker_animated_sticker_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/animated-sticker/animated-sticker.component */ 39265);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ 59936);




























class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineInjector"]({
    providers: [(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__.provideClientHydration)()],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__.BrowserAnimationsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_2__.HeroComponent, _directives_hero_scroll_animation_directive__WEBPACK_IMPORTED_MODULE_3__.ScrollHeroAnimationDirective, _directives_animated_increment_directive__WEBPACK_IMPORTED_MODULE_13__.AnimateIncrementDirective, _directives_animate_div_directive__WEBPACK_IMPORTED_MODULE_8__.AnimateDivDirective, _directives_rotate_div_directive__WEBPACK_IMPORTED_MODULE_4__.RotateOnScrollDirective, _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__.HeaderComponent, _components_phone_animation_phone_animation_component__WEBPACK_IMPORTED_MODULE_6__.PhoneAnimationComponent, _components_about_section_about_section_component__WEBPACK_IMPORTED_MODULE_7__.AboutSectionComponent, _components_offers_section_offers_section_component__WEBPACK_IMPORTED_MODULE_9__.OffersSectionComponent, _components_stats_section_stats_section_component__WEBPACK_IMPORTED_MODULE_10__.StatsSectionComponent, _components_benefits_section_benefits_section_component__WEBPACK_IMPORTED_MODULE_11__.BenefitsSectionComponent, _components_faq_section_faq_section_component__WEBPACK_IMPORTED_MODULE_12__.FaqSectionComponent, _components_sticker_sticker_component__WEBPACK_IMPORTED_MODULE_14__.StickerComponent, _components_mobile_benefits_section_mobile_benefits_section_component__WEBPACK_IMPORTED_MODULE_15__.MobileBenefitsSectionComponent, _components_mobile_header_mobile_header_component__WEBPACK_IMPORTED_MODULE_16__.MobileHeaderComponent, _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_17__.SidenavComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_18__.FooterComponent, _components_vertical_rotating_carousel_vertical_rotating_carousel_component__WEBPACK_IMPORTED_MODULE_19__.VerticalRotatingCarouselComponent, _components_product_video_product_video_component__WEBPACK_IMPORTED_MODULE_20__.ProductVideoComponent, _components_manual_downloads_manual_downloads_component__WEBPACK_IMPORTED_MODULE_21__.ManualDownloadsComponent, _components_basic_stickers_info_basic_stickers_info_component__WEBPACK_IMPORTED_MODULE_22__.BasicStickersInfoComponent, _components_animated_sticker_animated_sticker_component__WEBPACK_IMPORTED_MODULE_23__.AnimatedStickerComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__.BrowserAnimationsModule]
  });
})();

/***/ }),

/***/ 21463:
/*!**************************************!*\
  !*** ./src/app/app.server.module.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppServerModule: () => (/* binding */ AppServerModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-server */ 97014);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.module */ 50041);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 96846);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 59936);




class AppServerModule {
  static #_ = this.ɵfac = function AppServerModule_Factory(t) {
    return new (t || AppServerModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: AppServerModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule, _angular_platform_server__WEBPACK_IMPORTED_MODULE_3__.ServerModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppServerModule, {
    imports: [_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule, _angular_platform_server__WEBPACK_IMPORTED_MODULE_3__.ServerModule]
  });
})();

/***/ }),

/***/ 3954:
/*!*********************************************************************!*\
  !*** ./src/app/components/about-section/about-section.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutSectionComponent: () => (/* binding */ AboutSectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 59936);

class AboutSectionComponent {
  static #_ = this.ɵfac = function AboutSectionComponent_Factory(t) {
    return new (t || AboutSectionComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AboutSectionComponent,
    selectors: [["app-about-section"]],
    decls: 16,
    vars: 0,
    consts: [["id", "aboutUsSection", 1, "w-full", "h-auto", "justify-center", "flex", "max-w-[1200px]", "mx-auto", "flex-col", "items-center", "scroll-mt-8"], [1, "templett-main-header", "text-primaryText", "max-w-[800px]"], [1, "flex", "flex-col-reverse", "lg:flex-row", "w-[80%]", "pt-12", "gap-8"], [1, "flex", "flex-col", "w-full", "lg:w-1/2"], ["leftAboutUsDiv", ""], [1, "text-3xl", "font-semibold", "pb-3", "text-primaryText"], [1, "text-primaryText"], [1, "text-primaryText", "pt-3"], [1, "flex", "w-full", "lg:w-1/2", "pb-8", "lg:pb-0", "lg:mx-4"], ["rightAboutUsDiv", ""], ["src", "./assets/images/templett_logo.svg", "alt", "about-image", 1, "p-4", "lg:pb-20", "lg:pl-20", "lg:pt-0", "lg:pr-0"]],
    template: function AboutSectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "header")(2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Ta kontroll \u00F6ver din verksamhets digitalisering med Templett's smarta stickers! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2)(5, "div", 3, 4)(7, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Om oss");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Vi \u00E4r grundarna av Templett och brinner f\u00F6r att skapa innovativa l\u00F6sningar f\u00F6r att f\u00F6renkla folks vardag p\u00E5 olika s\u00E4tt. V\u00E5r passion f\u00F6r teknik och entrepren\u00F6rskap har drivit oss att utveckla Templett \u2013 en plattform som hj\u00E4lper butiks\u00E4gare att skapa en sp\u00E4nnande och interaktiv shoppingmilj\u00F6. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Driver du en verksamhet med tillg\u00E5ng till en bra hemsida med information som exempelvis veckobrev, annonser, recepttips eller liknande och vill f\u00F6rmedla denna informationen till dina kunder? D\u00E5 \u00E4r vi p\u00E5 Templett h\u00E4r f\u00F6r att hj\u00E4lpa dig! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 39265:
/*!***************************************************************************!*\
  !*** ./src/app/components/animated-sticker/animated-sticker.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimatedStickerComponent: () => (/* binding */ AnimatedStickerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 59936);

class AnimatedStickerComponent {
  static #_ = this.ɵfac = function AnimatedStickerComponent_Factory(t) {
    return new (t || AnimatedStickerComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AnimatedStickerComponent,
    selectors: [["app-animated-sticker"]],
    decls: 34,
    vars: 0,
    consts: [["id", "app", 1, "root-element"], [1, "stickerID"], [1, "papers", 2, "--total", "5"], [1, "nfcChip"], [1, "paper", 2, "--i", "0"], [1, "segment", "i-0"], [1, "segment", "i-1"], [1, "segment", "i-6"], [1, "segment", "i-7"], [1, "segment", "i-8"], [1, "paper", 2, "--i", "1"], [1, "segment", "i-2"], [1, "segment", "i-3"], [1, "paper", 2, "--i", "2"], [1, "segment", "i-4"], [1, "segment", "i-5"], [1, "paper", 2, "--i", "3"], [1, "paper", 2, "--i", "4"]],
    template: function AnimatedStickerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10)(11, "div", 11)(12, "div", 12)(13, "div", 7)(14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13)(17, "div", 14)(18, "div", 15)(19, "div", 7)(20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16)(23, "div", 5)(24, "div", 6)(25, "div", 7)(26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17)(29, "div", 11)(30, "div", 12)(31, "div", 7)(32, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      }
    },
    styles: ["*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\n  box-sizing: border-box;\n  position: relative;\n}\n\n*[_ngcontent-%COMP%] {\n  transform-style: preserve-3d;\n}\n\n.root-element[_ngcontent-%COMP%] {\n  --duration: 10s;\n  --stagger: 2s;\n  --easing: cubic-bezier(0.36, 0.07, 0.25, 1);\n  --offscreen: 130vmax;\n  --color-bg: #ef735a;\n  --color-blue: #384969;\n  --color-shadow: #211842;\n}\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n}\n\nbody[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: var(--color-bg);\n}\n\n#app[_ngcontent-%COMP%] {\n  height: 19vmin;\n  width: 90vmin;\n  max-width: 800px;\n  max-height: 230px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: auto;\n  margin-right: auto;\n  transform: rotateX(-20deg) rotateY(-55deg);\n  background: var(--color-blue);\n  border-radius: 2vmin;\n  perspective: 10000px;\n}\n#app[_ngcontent-%COMP%]:before {\n  border: 2vmin solid white;\n  background: white;\n  border-radius: inherit;\n  content: \"\";\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  border-left-width: 2vmin;\n  border-right-width: 2vmin;\n}\n#app[_ngcontent-%COMP%]    > .papers[_ngcontent-%COMP%], #app[_ngcontent-%COMP%]:before {\n  transform: translateZ(3vmin);\n}\n#app[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  background: inherit;\n  border-radius: inherit;\n  transform: translateZ(1.5vmin);\n}\n#app[_ngcontent-%COMP%]    > .stickerID[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 10px;\n  left: 10px;\n  background: transparent;\n  font-weight: 600;\n  height: 15%;\n  width: 15%;\n  background-image: url('1.svg');\n  background-repeat: no-repeat;\n  background-size: contain;\n  transform: translateZ(3vmin);\n}\n#app[_ngcontent-%COMP%]    > .stickerID[_ngcontent-%COMP%]:before {\n  position: absolute;\n  transform: translateZ(3vmin);\n}\n#app[_ngcontent-%COMP%]    > .stickerID[_ngcontent-%COMP%]:after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  transform: translateZ(1.5vmin);\n}\n#app[_ngcontent-%COMP%]   .papers[_ngcontent-%COMP%] {\n  width: 60vmin;\n  height: 19vmin;\n  background: white;\n  max-width: 700px;\n  max-height: 230px;\n}\n#app[_ngcontent-%COMP%]   .papers[_ngcontent-%COMP%]    > .nfcChip[_ngcontent-%COMP%] {\n  margin: auto;\n  top: 25%;\n  font-weight: 600;\n  height: 50%;\n  width: 20%;\n  background-image: url('nfc-chip.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n#app[_ngcontent-%COMP%]   .papers[_ngcontent-%COMP%]    > .nfcChip[_ngcontent-%COMP%]:before {\n  position: absolute;\n  transform: translateZ(3vmin);\n}\n#app[_ngcontent-%COMP%]   .papers[_ngcontent-%COMP%]    > .nfcChip[_ngcontent-%COMP%]:after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  transform: translateZ(1.5vmin);\n}\n\n@media screen and (max-width: 1024px) {\n  #app[_ngcontent-%COMP%]:before {\n    border-radius: 2vmin;\n  }\n  .papers[_ngcontent-%COMP%] {\n    font-size: 12px !important;\n  }\n}\n.paper[_ngcontent-%COMP%] {\n  --segments: 5;\n  --segment: calc(100% / var(--segments));\n  position: absolute;\n  top: 0;\n  left: 0;\n  transform: translateZ(-0.02vmin);\n  height: 100%;\n  width: 100%;\n  animation: _ngcontent-%COMP%_fly-in var(--duration) var(--easing) infinite;\n  animation-delay: calc(var(--i) * var(--stagger));\n}\n@keyframes _ngcontent-%COMP%_fly-in {\n  0%, 2% {\n    transform: translateZ(var(--offscreen)) translateY(80%) rotateX(30deg);\n  }\n  80%, 100% {\n    transform: translateZ(0px) translateY(0%) rotateX(0deg);\n  }\n}\n.paper[_ngcontent-%COMP%]    > .segment[_ngcontent-%COMP%] {\n  height: var(--segment);\n}\n\n.segment[_ngcontent-%COMP%] {\n  --rotate: 20deg;\n  height: 100%;\n  transform-origin: top center;\n  background: white;\n  border-top: none;\n  border-bottom: none;\n  background-size: cover;\n  background-repeat: no-repeat;\n  animation: inherit;\n  animation-name: _ngcontent-%COMP%_curve-paper;\n}\n.segment[_ngcontent-%COMP%]    > .segment[_ngcontent-%COMP%] {\n  top: 98%;\n}\n.segment.i-0[_ngcontent-%COMP%] {\n  background-image: url('sticker_fragment_9.png');\n}\n.segment.i-1[_ngcontent-%COMP%] {\n  background-image: url('sticker_fragment_6.png');\n}\n.segment.i-2[_ngcontent-%COMP%] {\n  background-image: url('sticker_fragment_7.png');\n}\n.segment.i-3[_ngcontent-%COMP%] {\n  background-image: url('sticker_fragment_8.png');\n}\n.segment.i-4[_ngcontent-%COMP%] {\n  background-image: url('sticker_fragment_2.png');\n}\n.segment.i-5[_ngcontent-%COMP%] {\n  background-image: url('sticker_fragment_3.png');\n}\n.segment.i-6[_ngcontent-%COMP%] {\n  background-image: url('sticker_fragment_4.png');\n}\n.segment.i-7[_ngcontent-%COMP%] {\n  background-image: url('sticker_fragment_1.png');\n}\n.segment.i-8[_ngcontent-%COMP%] {\n  background-image: url('sticker_fragment_5.png');\n}\n@keyframes _ngcontent-%COMP%_curve-paper {\n  0%, 2% {\n    transform: rotateX(var(--rotate, 0deg));\n  }\n  90%, 100% {\n    transform: rotateX(0deg);\n  }\n}\n\n\n\n.paper.-rogue[_ngcontent-%COMP%] {\n  transform-origin: top center -5vmin;\n}\n.paper.-rogue[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%] {\n  --rotate: 30deg;\n  animation-name: _ngcontent-%COMP%_curve-rogue-paper;\n}\n@keyframes _ngcontent-%COMP%_curve-rogue-paper {\n  0%, 50% {\n    transform: rotateX(var(--rotate));\n  }\n  100% {\n    transform: rotateX(0deg);\n  }\n}\n.paper.-rogue[_ngcontent-%COMP%]    > .segment[_ngcontent-%COMP%] {\n  animation: inherit;\n  animation-name: _ngcontent-%COMP%_rogue-paper;\n  transform-origin: left top 20vmin;\n}\n@keyframes _ngcontent-%COMP%_rogue-paper {\n  0%, 2% {\n    transform: rotateX(1.5turn);\n  }\n  80%, 100% {\n    transform: rotateX(0turn);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hbmltYXRlZC1zdGlja2VyL2FuaW1hdGVkLXN0aWNrZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztFQUdFLHNCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLDRCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDJDQUFBO0VBQ0Esb0JBQUE7RUFFQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7QUFBRjs7QUFHQTs7RUFFRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFFQSxXQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0FBREY7QUFHRTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFHQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0FBREo7QUFJRTtFQUVFLDRCQUFBO0FBSEo7QUFNRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFKSjtBQU1FO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0FBSko7QUFNSTtFQUNFLGtCQUFBO0VBQ0EsNEJBQUE7QUFKTjtBQU1JO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLDhCQUFBO0FBSk47QUFRRTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBTko7QUFRSTtFQUNFLFlBQUE7RUFFQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUVBLHFDQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtBQVJOO0FBU007RUFDRSxrQkFBQTtFQUNBLDRCQUFBO0FBUFI7QUFTTTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSw4QkFBQTtBQVBSOztBQWFBO0VBRUk7SUFDRSxvQkFBQTtFQVhKO0VBY0E7SUFDRSwwQkFBQTtFQVpGO0FBQ0Y7QUFlQTtFQUNFLGFBQUE7RUFDQSx1Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxnQ0FBQTtFQUVBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esd0RBQUE7RUFDQSxnREFBQTtBQWRGO0FBZ0JFO0VBQ0U7SUFFRSxzRUFBQTtFQWZKO0VBaUJFO0lBRUUsdURBQUE7RUFoQko7QUFDRjtBQW1CRTtFQUNFLHNCQUFBO0FBakJKOztBQXFCQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtFQUVBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBcUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUF2REY7QUFtQkU7RUFDRSxRQUFBO0FBakJKO0FBb0JFO0VBQ0UsK0NBQUE7QUFsQko7QUFvQkU7RUFDRSwrQ0FBQTtBQWxCSjtBQXFCRTtFQUNFLCtDQUFBO0FBbkJKO0FBcUJFO0VBQ0UsK0NBQUE7QUFuQko7QUFzQkU7RUFDRSwrQ0FBQTtBQXBCSjtBQXNCRTtFQUNFLCtDQUFBO0FBcEJKO0FBdUJFO0VBQ0UsK0NBQUE7QUFyQko7QUF1QkU7RUFDRSwrQ0FBQTtBQXJCSjtBQXVCRTtFQUNFLCtDQUFBO0FBckJKO0FBMkJFO0VBQ0U7SUFFRSx1Q0FBQTtFQTFCSjtFQTRCRTtJQUVFLHdCQUFBO0VBM0JKO0FBQ0Y7O0FBK0JBLHVDQUFBO0FBRUE7RUFDRSxtQ0FBQTtBQTdCRjtBQStCRTtFQUNFLGVBQUE7RUFDQSxpQ0FBQTtBQTdCSjtBQStCSTtFQUNFO0lBRUUsaUNBQUE7RUE5Qk47RUFnQ0k7SUFDRSx3QkFBQTtFQTlCTjtBQUNGO0FBbUNFO0VBQ0Usa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGlDQUFBO0FBakNKO0FBbUNJO0VBQ0U7SUFFRSwyQkFBQTtFQWxDTjtFQW9DSTtJQUVFLHlCQUFBO0VBbkNOO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIqLFxyXG4qOmJlZm9yZSxcclxuKjphZnRlciB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbioge1xyXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbn1cclxuXHJcbi5yb290LWVsZW1lbnQge1xyXG4gIC0tZHVyYXRpb246IDEwcztcclxuICAtLXN0YWdnZXI6IDJzO1xyXG4gIC0tZWFzaW5nOiBjdWJpYy1iZXppZXIoMC4zNiwgMC4wNywgMC4yNSwgMSk7XHJcbiAgLS1vZmZzY3JlZW46IDEzMHZtYXg7XHJcbiAgLy9jdWJpYy1iZXppZXIoLjUsIDAsIC40LCAxKTtcclxuICAtLWNvbG9yLWJnOiAjZWY3MzVhO1xyXG4gIC0tY29sb3ItYmx1ZTogIzM4NDk2OTtcclxuICAtLWNvbG9yLXNoYWRvdzogIzIxMTg0MjtcclxufVxyXG5cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYmcpO1xyXG59XHJcblxyXG4jYXBwIHtcclxuICBoZWlnaHQ6IDE5dm1pbjtcclxuICB3aWR0aDogOTB2bWluO1xyXG4gIG1heC13aWR0aDogODAwcHg7XHJcbiAgbWF4LWhlaWdodDogMjMwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTIwZGVnKSByb3RhdGVZKC01NWRlZyk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYmx1ZSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMnZtaW47XHJcbiAgcGVyc3BlY3RpdmU6IDEwMDAwcHg7XHJcblxyXG4gICY6YmVmb3JlIHtcclxuICAgIGJvcmRlcjogMnZtaW4gc29saWQgd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAydm1pbjtcclxuICAgIGJvcmRlci1yaWdodC13aWR0aDogMnZtaW47XHJcbiAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAydm1pbjtcclxuICAgIGJvcmRlci1yaWdodC13aWR0aDogMnZtaW47XHJcbiAgfVxyXG5cclxuICA+IC5wYXBlcnMsXHJcbiAgJjpiZWZvcmUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDN2bWluKTtcclxuICB9XHJcblxyXG4gICY6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDEuNXZtaW4pO1xyXG4gIH1cclxuICA+IC5zdGlja2VySUQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG4gICAgbGVmdDogMTBweDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGhlaWdodDogMTUlO1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvMS5zdmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDN2bWluKTtcclxuXHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDN2bWluKTtcclxuICAgIH1cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDEuNXZtaW4pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnBhcGVycyB7XHJcbiAgICB3aWR0aDogNjB2bWluO1xyXG4gICAgaGVpZ2h0OiAxOXZtaW47XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIG1heC13aWR0aDogNzAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAyMzBweDtcclxuXHJcbiAgICA+IC5uZmNDaGlwIHtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICAgICAgdG9wOiAyNSU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGhlaWdodDogNTAlO1xyXG4gICAgICB3aWR0aDogMjAlO1xyXG5cclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9uZmMtY2hpcC5wbmdcIik7XHJcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooM3ZtaW4pO1xyXG4gICAgICB9XHJcbiAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMS41dm1pbik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICNhcHAge1xyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAydm1pbjtcclxuICAgIH1cclxuICB9XHJcbiAgLnBhcGVycyB7XHJcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5wYXBlciB7XHJcbiAgLS1zZWdtZW50czogNTtcclxuICAtLXNlZ21lbnQ6IGNhbGMoMTAwJSAvIHZhcigtLXNlZ21lbnRzKSk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMC4wMnZtaW4pO1xyXG5cclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYW5pbWF0aW9uOiBmbHktaW4gdmFyKC0tZHVyYXRpb24pIHZhcigtLWVhc2luZykgaW5maW5pdGU7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiBjYWxjKCh2YXIoLS1pKSAqIHZhcigtLXN0YWdnZXIpKSk7XHJcblxyXG4gIEBrZXlmcmFtZXMgZmx5LWluIHtcclxuICAgIDAlLFxyXG4gICAgMiUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVoodmFyKC0tb2Zmc2NyZWVuKSkgdHJhbnNsYXRlWSg4MCUpIHJvdGF0ZVgoMzBkZWcpO1xyXG4gICAgfVxyXG4gICAgODAlLFxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpIHRyYW5zbGF0ZVkoMCUpIHJvdGF0ZVgoMGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICA+IC5zZWdtZW50IHtcclxuICAgIGhlaWdodDogdmFyKC0tc2VnbWVudCk7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VnbWVudCB7XHJcbiAgLS1yb3RhdGU6IDIwZGVnO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG5cclxuICBib3JkZXItdG9wOiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cclxuICA+IC5zZWdtZW50IHtcclxuICAgIHRvcDogOTglO1xyXG4gIH1cclxuICAvL1bDg8KlcmEgZXJianVkYW5kZW4gaGVhZGVyXHJcbiAgJi5pLTAge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zdGlja2VyX2ZyYWdtZW50XzkucG5nXCIpO1xyXG4gIH1cclxuICAmLmktMSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3N0aWNrZXJfZnJhZ21lbnRfNi5wbmdcIik7XHJcbiAgfVxyXG4gIC8vVmVja2FucyBtaWRkYWdzdGlwcyBoZWFkZXJcclxuICAmLmktMiB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3N0aWNrZXJfZnJhZ21lbnRfNy5wbmdcIik7XHJcbiAgfVxyXG4gICYuaS0zIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc3RpY2tlcl9mcmFnbWVudF84LnBuZ1wiKTtcclxuICB9XHJcbiAgLy9GcnVrdCBvIGdyw4PCtm50IGhlYWRlclxyXG4gICYuaS00IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc3RpY2tlcl9mcmFnbWVudF8yLnBuZ1wiKTtcclxuICB9XHJcbiAgJi5pLTUge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zdGlja2VyX2ZyYWdtZW50XzMucG5nXCIpO1xyXG4gIH1cclxuICAvL0JvZHkgcGllY2VzXHJcbiAgJi5pLTYge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zdGlja2VyX2ZyYWdtZW50XzQucG5nXCIpO1xyXG4gIH1cclxuICAmLmktNyB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3N0aWNrZXJfZnJhZ21lbnRfMS5wbmdcIik7XHJcbiAgfVxyXG4gICYuaS04IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc3RpY2tlcl9mcmFnbWVudF81LnBuZ1wiKTtcclxuICB9XHJcblxyXG4gIGFuaW1hdGlvbjogaW5oZXJpdDtcclxuICBhbmltYXRpb24tbmFtZTogY3VydmUtcGFwZXI7XHJcblxyXG4gIEBrZXlmcmFtZXMgY3VydmUtcGFwZXIge1xyXG4gICAgMCUsXHJcbiAgICAyJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWCh2YXIoLS1yb3RhdGUsIDBkZWcpKTtcclxuICAgIH1cclxuICAgIDkwJSxcclxuICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4ucGFwZXIuLXJvZ3VlIHtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgY2VudGVyIC01dm1pbjtcclxuXHJcbiAgLnNlZ21lbnQge1xyXG4gICAgLS1yb3RhdGU6IDMwZGVnO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGN1cnZlLXJvZ3VlLXBhcGVyO1xyXG5cclxuICAgIEBrZXlmcmFtZXMgY3VydmUtcm9ndWUtcGFwZXIge1xyXG4gICAgICAwJSxcclxuICAgICAgNTAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgodmFyKC0tcm90YXRlKSk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBGaXJzdCBzZWdtZW50IG9mIHRoZSBwYXBlclxyXG4gID4gLnNlZ21lbnQge1xyXG4gICAgYW5pbWF0aW9uOiBpbmhlcml0O1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IHJvZ3VlLXBhcGVyO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3AgMjB2bWluO1xyXG5cclxuICAgIEBrZXlmcmFtZXMgcm9ndWUtcGFwZXIge1xyXG4gICAgICAwJSxcclxuICAgICAgMiUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgxLjV0dXJuKTtcclxuICAgICAgfVxyXG4gICAgICA4MCUsXHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgwdHVybik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 64369:
/*!*********************************************************************************!*\
  !*** ./src/app/components/basic-stickers-info/basic-stickers-info.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BasicStickersInfoComponent: () => (/* binding */ BasicStickersInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 59936);
/* harmony import */ var _directives_rotate_div_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../directives/rotate-div.directive */ 64088);
/* harmony import */ var _sticker_sticker_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sticker/sticker.component */ 43209);



class BasicStickersInfoComponent {
  static #_ = this.ɵfac = function BasicStickersInfoComponent_Factory(t) {
    return new (t || BasicStickersInfoComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: BasicStickersInfoComponent,
    selectors: [["app-basic-stickers-info"]],
    decls: 21,
    vars: 6,
    consts: [["id", "ourProductsSection", 1, "w-full", "h-auto", "justify-center", "flex", "max-w-[1100px]", "mx-auto", "flex-col", "scroll-my-20"], [1, "templett-flow-header", "text-primaryText"], [1, "flex", "flex-col-reverse", "lg:flex-row-reverse", "w-[80%]", "pt-12", "gap-8", "mx-auto"], [1, "flex", "flex-col", "w-full", "lg:w-1/2"], ["leftStickersDiv", ""], [1, "text-3xl", "font-semibold", "pb-3", "text-primaryText"], [1, "text-primaryText"], [1, "text-primaryText", "pt-3"], ["container", "", 1, "flex", "w-full", "lg:w-1/2", "lg:mx-4"], ["sticker", ""], [1, "sticker-div"], ["rotateOnScroll", "", 1, "sticker", 3, "rotationIncrement"], [3, "title"]],
    template: function BasicStickersInfoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "V\u00E5ra produkter");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2)(4, "div", 3, 4)(6, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Templett Stickers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Templett erbjuder en bred upps\u00E4ttning av digitala stickers. Alla v\u00E5ra stickers \u00E4r utrustade med NFC-Chip som g\u00F6r det m\u00F6jligt att h\u00E5lla en smartphone mot texten p\u00E5 stickern och bli vidareskickad till en valfri webbplats. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Dessa stickers kan placeras vartsomhelst i en butik eller annan verksamhet och n\u00E4rsomhelst uppdateras med nya webbplatser genom att s\u00E4tta \u00F6ver en ny modul-sticker med en ny text och genom v\u00E5r kundservice eller kundportal \u00E4ndra vilken l\u00E4nk chippet ska leda till. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8, 9)(14, "div", 10)(15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "app-sticker", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "app-sticker", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "app-sticker", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rotationIncrement", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", "Veckans erbjudanden");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rotationIncrement", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", "Veckans Middagstips");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rotationIncrement", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", "Frukt och gr\u00F6nt i s\u00E4song");
      }
    },
    dependencies: [_directives_rotate_div_directive__WEBPACK_IMPORTED_MODULE_0__.RotateOnScrollDirective, _sticker_sticker_component__WEBPACK_IMPORTED_MODULE_1__.StickerComponent],
    styles: [".sticker-div[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 330px !important;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n}\n\n@media screen and (max-width: 768px) {\n  .sticker-div[_ngcontent-%COMP%] {\n    height: 250px !important;\n    justify-content: center;\n    display: flex;\n    margin: auto;\n  }\n}\n.sticker[_ngcontent-%COMP%] {\n  position: fixed;\n  transform-origin: top left;\n  transform: rotate(270deg);\n  margin-left: -50px;\n  opacity: 0.3;\n}\n\n.sticker[_ngcontent-%COMP%]:nth-child(1) {\n  margin-bottom: -40px;\n}\n\n.sticker[_ngcontent-%COMP%]:nth-child(2) {\n  margin-bottom: -20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9iYXNpYy1zdGlja2Vycy1pbmZvL2Jhc2ljLXN0aWNrZXJzLWluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usd0JBQUE7SUFDQSx1QkFBQTtJQUNBLGFBQUE7SUFFQSxZQUFBO0VBQUY7QUFDRjtBQUVBO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLG9CQUFBO0FBQUY7O0FBR0E7RUFDRSxvQkFBQTtBQUFGIiwic291cmNlc0NvbnRlbnQiOlsiLnN0aWNrZXItZGl2IHtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMzMwcHggIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuc3RpY2tlci1kaXYge1xyXG4gICAgaGVpZ2h0OiAyNTBweCAhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcbn1cclxuLnN0aWNrZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xyXG4gIG1hcmdpbi1sZWZ0OiAtNTBweDtcclxuICBvcGFjaXR5OiAwLjM7XHJcbn1cclxuXHJcbi5zdGlja2VyOm50aC1jaGlsZCgxKSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTQwcHg7XHJcbn1cclxuXHJcbi5zdGlja2VyOm50aC1jaGlsZCgyKSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTIwcHg7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 82848:
/*!***************************************************************************!*\
  !*** ./src/app/components/benefits-section/benefits-section.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BenefitsSectionComponent: () => (/* binding */ BenefitsSectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 59936);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 34228);
/* harmony import */ var _directives_animate_div_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../directives/animate-div.directive */ 24995);



function BenefitsSectionComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5, 6)(2, "div", 7, 8)(4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 11)(7, "div", 12)(8, "h2", 13)(9, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const benefit_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "./assets/images/", benefit_r1.icon, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", benefit_r1.title, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", benefit_r1.substring, " ");
  }
}
class BenefitsSectionComponent {
  constructor() {
    this.benefits = [{
      title: "Digitala annonsblad",
      substring: "Templett-Stickers möjliggör skapandet av digitala annonsblad där butiksägare kan länka till kampanjer, produktinformation eller annat relevant innehåll på nätet som ofta glöms bort.",
      icon: "newsletter-new.svg"
    }, {
      title: "Rekommendera recept",
      substring: "Med Templett-Stickers kan butiksägare enkelt dela recept eller matrelaterade tips till sina kunder och generea merförsäljning. Genom att länka chippen inuti Templett-stickers till receptsidor eller matbloggar kan butiken erbjuda värdefulla råd eller inspirera kunderna till nya matupplevelser.",
      icon: "recipe.svg"
    }, {
      title: "Öka försäljning",
      substring: "Genom att använda Templett-Stickers kan butiksägare locka fler kunder och öka försäljningen. De kan marknadsföra produkter, kampanjer eller erbjudanden direkt till kundernas smartphones när de interagerar med Templett-stickers i butiken.",
      icon: "chart.svg"
    }, {
      title: "Uppmärksamma rabatter",
      substring: "Templett-Stickers möjliggör en effektiv marknadsföring av rabatter eller specialerbjudanden. Butiksägare kan skapa länkar till sidor med kampanjkoder eller kuponger för att locka kunder till att göra inköp i butiken.",
      icon: "pricetag.svg"
    }, {
      title: "Modernisera butiken",
      substring: "Genom att införa NFC-teknologi med Templett-Stickers kan butiker skapa en modern och interaktiv shoppingupplevelse för sina kunder. Detta visar engagemang för att utveckla och hålla butiken uppdaterad med den senaste tekniken.",
      icon: "database.svg"
    }, {
      title: "Skapa trender",
      substring: "Med Templett-Stickers har butiksägare möjlighet att vara innovativa och skapa trender inom sin bransch. Genom att erbjuda unika och intressanta digitala upplevelser för kunder kan butiker positionera sig som ledande inom sin marknad.",
      icon: "trends.svg"
    }];
  }
  static #_ = this.ɵfac = function BenefitsSectionComponent_Factory(t) {
    return new (t || BenefitsSectionComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: BenefitsSectionComponent,
    selectors: [["app-benefits-section"]],
    decls: 6,
    vars: 1,
    consts: [[1, "w-full", "h-auto", "justify-center", "flex", "max-w-[1200px]", "mx-auto"], ["animateDivEntry", "", 1, "hide-before-animate", "w-full"], [1, "templett-flow-header", "text-primaryText"], [1, "w-full", "h-auto", "grid", "grid-cols-2", "gap-8", "p-8"], ["class", "flex w-full h-auto", 4, "ngFor", "ngForOf"], [1, "flex", "w-full", "h-auto"], ["leftBenefitsDiv", ""], [1, "flex", "flex-row", "w-full", "h-full", "space-between", "bg-secondary", "rounded-default", "p-8"], ["benefitsCard", ""], [1, "w-24", "h-full"], ["alt", "Benefit Icon", 1, "h-full", 3, "src"], [1, "flex-col", "flex", "w-full", "h-full", "ml-8"], [1, "w-full", "justify-center", "flex", "flex-col"], [1, "text-md", "text-secondaryText", "text-left", "mt-2"], [1, "font-semibold"]],
    template: function BenefitsSectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Varf\u00F6r Templett?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, BenefitsSectionComponent_div_5_Template, 12, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.benefits);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _directives_animate_div_directive__WEBPACK_IMPORTED_MODULE_0__.AnimateDivDirective],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 86646:
/*!*****************************************************************!*\
  !*** ./src/app/components/faq-section/faq-section.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaqSectionComponent: () => (/* binding */ FaqSectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ 46012);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 59936);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 34228);
/* harmony import */ var _directives_animate_div_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../directives/animate-div.directive */ 24995);




function FaqSectionComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FaqSectionComponent_div_6_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const i_r2 = restoredCtx.index;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.toggleExpand(i_r2 == ctx_r4.isExpanded ? -1 : i_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 8)(3, "h5", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 11)(7, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const question_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", question_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("transform", ctx_r0.isExpanded !== i_r2 ? "rotate(45deg)" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@rotateAnimation", ctx_r0.isExpanded !== i_r2 ? "rotated" : "notRotated");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@expandCollapse", ctx_r0.isExpanded == i_r2 ? "expanded" : "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", question_r1.body, " ");
  }
}
class FaqSectionComponent {
  constructor() {
    this.isExpanded = -1;
    this.questions = [{
      title: "Hur används Templett-Stickers?",
      body: "Templett-Stickers används genom att butiksägare köper stickers med insatta NFC-chip från Templett. Dessa stickers placeras sedan i butiken och kopplas till en specifik webbadress eller hemsida. När kunderna passerar med en smartphone, kan de enkelt 'blippa' sin telefon mot dessa stickers för att nå information eller länkar till olika onlineplatser eller tjänster."
    }, {
      title: "Kan min verksamhet dra nytta av Templett Stickers?",
      body: "Absolut! Templett stickers går att använda för alla verksamheter som har tillgång till en hemsida med information som de enklare vill förmedla till kunderna. Ju mer information som finns på hemsidan desto fler möjligheter finns det att öka kundengagemang eller försäljning med hjälp av Templett-stickers."
    }, {
      title: "Vilka stickers behöver jag?",
      body: "För att använda Templett-Stickers behöver du stickers som är utrustade med de programmerade chip som Templett tillhandahåller. Dessa chippade stickers kan sedan ändras för att leda till önskade webbadresser eller hemsidor när de blippas med via smarta mobila enheter. Utöver dessa chippade stickers krävs även Templett's modul-stickers som informerar kunden om vart de hamnar då de blippar en sticker."
    }, {
      title: "Vart sätter jag chippen?",
      body: "Chippen kan placeras på olika platser inom din butik, exempelvis på insidan av kundkorgar, handtaget på kundvagnar eller andra ytor som är tillgängliga för kunder. Det är viktigt att placera dem på platser där kunder lätt kan interagera med dem med sina mobila enheter för att få åtkomst till den önskade informationen eller webbplatsen."
    }, {
      title: "Vad kan chippen göra?",
      body: "Templett-chippen gör det möjligt för dina kunder att blippa sina smartphones mot dina Templett-Stickers. Genom att interagera med chippen i Templett-stickers kan kunderna få tillgång till webbadresser, hemsidor eller annan information som är programmerad till chippen. Det kan vara produktinformation, kampanjer, webbplatser eller annat innehåll relaterat till din butik eller dina tjänster."
    }, {
      title: "Kan jag ändra vad chippen leder till?",
      body: "Ja, du kan enkelt ändra vilken webbadress eller hemsida Templett-chippen leder till. Kontakta Templett via kontakt@templett.se för att uppdatera destinationswebbadressen som är kopplad till chippen i dina Templett-stickers. Detta gör det möjligt att anpassa och uppdatera informationen som kunderna når när de interagerar med dina Templett-stickers."
    }];
  }
  toggleExpand(index) {
    this.isExpanded = index;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function FaqSectionComponent_Factory(t) {
    return new (t || FaqSectionComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: FaqSectionComponent,
    selectors: [["app-faq-section"]],
    decls: 7,
    vars: 1,
    consts: [["id", "faqSection", 1, "w-full", "h-auto", "justify-center", "flex", "max-w-[1000px]", "mx-auto", "scroll-my-20"], ["animateDivEntry", "", 1, "w-full"], [1, "templett-flow-header", "text-primaryText"], [1, "flex", "flex-col", "w-full", "items-center", "py-4"], [1, "flex", "flex-col", "w-[90%]", "lg:w-full", "h-auto", "mx-8"], ["class", "flex-col flex w-full h-full bg-secondary rounded-default px-8 py-5 my-2 hide-before-animate cursor-pointer", "animateDivEntry", "", 3, "click", 4, "ngFor", "ngForOf"], ["animateDivEntry", "", 1, "flex-col", "flex", "w-full", "h-full", "bg-secondary", "rounded-default", "px-8", "py-5", "my-2", "hide-before-animate", "cursor-pointer", 3, "click"], ["faqCard", ""], [1, "w-full", "justify-between", "flex", "flex-row"], [1, "text-md", "lg:text-3xl", "text-secondaryText", "text-left", "font-semibold", "flex", "items-center"], ["src", "./assets/images/close.svg", "alt", "Bullet Point Icon", 1, "h-10", "cursor-pointer"], [1, "additional-text"], [1, "py-4"]],
    template: function FaqSectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Fr\u00E5gor och svar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, FaqSectionComponent_div_6_Template, 9, 6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.questions);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _directives_animate_div_directive__WEBPACK_IMPORTED_MODULE_0__.AnimateDivDirective],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)("expandCollapse", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.state)("collapsed", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
        height: "0",
        opacity: "0",
        overflow: "hidden"
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.state)("expanded", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
        height: "*",
        opacity: "1",
        overflow: "visible"
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)("collapsed <=> expanded", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)("300ms ease-in-out")])]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)("rotateAnimation", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.state)("rotated", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
        transform: "rotate(45deg)"
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.state)("notRotated", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
        transform: "rotate(0deg)"
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)("notRotated <=> rotated", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)("0.3s ease-in-out")])])]
    }
  });
}

/***/ }),

/***/ 49186:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ 46012);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 59936);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 34228);



const _c0 = ["phoneInfo"];
const _c1 = ["mailInfo"];
function FooterComponent_h6_12_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Kopiera");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function FooterComponent_h6_12_span_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function FooterComponent_h6_12_span_4_Template_span_mouseleave_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.onMouseLeave());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Kopierad!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function FooterComponent_h6_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_h6_12_Template_h6_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.onPhoneInfoClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " +46 793 479 334 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FooterComponent_h6_12_span_3_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FooterComponent_h6_12_span_4_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.phoneInfoCopied);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.phoneInfoCopied);
  }
}
function FooterComponent_h6_13_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Kopiera");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function FooterComponent_h6_13_span_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function FooterComponent_h6_13_span_4_Template_span_mouseleave_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r12.onMouseLeave());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Kopierad!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function FooterComponent_h6_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 13, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_h6_13_Template_h6_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r14.onMailInfoClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FooterComponent_h6_13_span_3_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FooterComponent_h6_13_span_4_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.contactEmail, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.emailInfoCopied);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.emailInfoCopied);
  }
}
class FooterComponent {
  constructor(el, renderer) {
    this.el = el;
    this.renderer = renderer;
    this.contactEmail = "kontakt@templett.se";
    this.showPhoneInfo = false;
    this.showEmailInfo = false;
    this.emailInfoCopied = false;
    this.phoneInfoCopied = false;
  }
  ngOnInit() {
    const screenHeight = window.innerHeight;
    let element = document.getElementById("footerSection");
    if (element) {
      this.renderer.setStyle(element, "height", `${screenHeight * 0.4}px`);
    }
  }
  togglePhoneInfo() {
    this.showPhoneInfo = !this.showPhoneInfo;
    // Hide email info when showing phone info
    this.showEmailInfo = false;
  }
  toggleEmailInfo() {
    this.showEmailInfo = !this.showEmailInfo;
    // Hide phone info when showing email info
    this.showPhoneInfo = false;
  }
  scrollToSection(targetSectionId) {
    const targetEl = this.el.nativeElement.ownerDocument.getElementById(targetSectionId);
    if (targetEl) {
      targetEl.scrollIntoView({
        behavior: "smooth"
      });
    }
  }
  copyToClipboard(text) {
    const tempTextArea = this.renderer.createElement("textarea");
    tempTextArea.value = text;
    this.renderer.appendChild(document.body, tempTextArea);
    tempTextArea.select();
    document.execCommand("copy");
    this.renderer.removeChild(document.body, tempTextArea);
    console.log("Content copied to clipboard: " + text);
  }
  onPhoneInfoClick() {
    this.phoneInfoCopied = true;
    const phoneInfoText = this.phoneInfo.nativeElement.textContent.trim();
    const splitText = phoneInfoText.split(" ");
    splitText.pop();
    const phoneNumber = splitText.join(" ");
    this.copyToClipboard(phoneNumber);
  }
  onMailInfoClick() {
    this.emailInfoCopied = true;
    const emailInfoText = this.mailInfo.nativeElement.textContent.trim();
    const splitText = emailInfoText.split(" ");
    splitText.pop();
    const email = splitText.join(" ");
    this.copyToClipboard(email);
  }
  onMouseLeave() {
    this.emailInfoCopied = false;
    this.phoneInfoCopied = false;
  }
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    viewQuery: function FooterComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.phoneInfo = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mailInfo = _t.first);
      }
    },
    decls: 19,
    vars: 2,
    consts: [["id", "footerSection", 1, "flex", "flex-col", "w-full", "bg-primary", "footer", "justify-evenly", "items-center"], [1, "flex"], [1, "text-primaryText", "text-xl", "font-semibold"], [1, "flex", "text-primaryText", "flex-row", "w-[80%]", "max-w-[400px]", "justify-evenly"], [1, "backToTopButton", "cursor-pointer", 3, "click"], ["alt", "phone", "src", "./assets/images/phone.svg", 1, "invert"], ["alt", "email", "src", "./assets/images/email.svg", 1, "invert"], ["href", "https://www.linkedin.com/company/templett-ab", "target", "_blank", 1, "backToTopButton", "cursor-pointer"], ["alt", "linkedin", "src", "./assets/images/linkedin.svg", 1, "invert", "opacity-75"], [1, "overlay", "h-6"], ["class", "text-primaryText font-semibold cursor-pointer position-relative", 3, "click", 4, "ngIf"], [1, "text-primaryText", "text-lg", "font-semibold"], ["alt", "chevron-up", "src", "./assets/images/chevron-up.svg", 1, "invert"], [1, "text-primaryText", "font-semibold", "cursor-pointer", "position-relative", 3, "click"], ["phoneInfo", ""], ["class", "tooltip", 4, "ngIf"], ["class", "tooltip", 3, "mouseleave", 4, "ngIf"], [1, "tooltip"], [1, "tooltip", 3, "mouseleave"], ["mailInfo", ""]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "H\u00F6r av er till oss!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3)(5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_div_click_5_listener() {
          return ctx.togglePhoneInfo();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_div_click_7_listener() {
          return ctx.toggleEmailInfo();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FooterComponent_h6_12_Template, 5, 3, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, FooterComponent_h6_13_Template, 5, 4, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1)(15, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " \u00A9 Templett 2023-2024 G\u00F6teborg ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_div_click_17_listener() {
          return ctx.scrollToSection("body");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showPhoneInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showEmailInfo);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
    styles: [".footer[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to bottom, #071420, #000000);\n}\n\n.position-relative[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n\n\n.tooltip[_ngcontent-%COMP%] {\n  visibility: hidden;\n  background-color: black;\n  color: white;\n  text-align: center;\n  padding: 5px;\n  border-radius: 5px;\n  position: absolute;\n  z-index: 1;\n  bottom: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  white-space: nowrap;\n}\n\n\n\n.position-relative[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOERBQUE7QUFDRjs7QUFNQTtFQUNFLGtCQUFBO0FBSEY7O0FBTUEsNEJBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQSw4QkFBQTtBQUNBO0VBQ0UsbUJBQUE7QUFIRiIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIGJvdHRvbSxcclxuICAgIHRoZW1lKFwiY29sb3JzLnByaW1hcnlcIiksXHJcbiAgICAjMDAwMDAwXHJcbiAgKTtcclxufVxyXG5cclxuLnBvc2l0aW9uLXJlbGF0aXZlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi8qIFN0eWxpbmcgZm9yIHRoZSB0b29sdGlwICovXHJcbi50b29sdGlwIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGJvdHRvbTogMTAwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi8qIFNob3cgdGhlIHRvb2x0aXAgb24gaG92ZXIgKi9cclxuLnBvc2l0aW9uLXJlbGF0aXZlOmhvdmVyIC50b29sdGlwIHtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)("fadeInOut", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.state)("void", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
        opacity: 0,
        transform: "scale(0.8)" // Initial scale
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.state)("*", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
        opacity: 1,
        transform: "scale(1)" // Full scale
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)("void => *", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)("300ms ease-in")) // Animation timing
      ])]
    }
  });
}

/***/ }),

/***/ 73149:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 59936);

class HeaderComponent {
  constructor(el) {
    this.el = el;
    this.isScrolledPastHero = false;
  }
  scrollToSection(targetSectionId) {
    const targetEl = this.el.nativeElement.ownerDocument.getElementById(targetSectionId);
    if (targetEl) {
      targetEl.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
        scrollIntoViewOptions: {
          block: "start",
          inline: "start",
          behavior: "smooth",
          offsetTop: 1000
        }
      });
    }
  }
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const heightLimit = 0.85 * window.innerHeight; // Calculate 320vh in pixels
    // Check if scroll position is greater than or equal to 320vh
    this.isScrolledPastHero = scrollPosition >= heightLimit;
  }
  static #_ = this.ɵfac = function HeaderComponent_Factory(t) {
    return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HeaderComponent,
    selectors: [["app-header"]],
    hostBindings: function HeaderComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HeaderComponent_scroll_HostBindingHandler() {
          return ctx.onWindowScroll();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
      }
    },
    decls: 14,
    vars: 2,
    consts: [[1, "h-16", "sticky", "top-0", "z-50", "overflow-x-hidden", "hidden", "lg:block"], [1, "w-full", "h-full", "flex", "flex-row", "justify-between", "px-8"], [1, "w-1/2", "h-full", "flex", "flex-row", "items-center", "gap-8"], [1, "flex", "text-center", "text-primaryText", "font-semibold", "text-lg", "cursor-pointer", "hover:underline", "text", 3, "click"], [1, "w-1/2", "h-full", "flex", "flex-row-reverse", "items-center"], [1, "flex", "text-center", "text-primaryText", "font-semibold", "text-xl", "cursor-pointer", "logo", 3, "click"], ["alt", "TextOnlyLogo", "src", "./assets/images/logoText.svg", 1, "h-16", "w-32"]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_h3_click_3_listener() {
          return ctx.scrollToSection("aboutUsSection");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Om ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_h3_click_5_listener() {
          return ctx.scrollToSection("ourProductsSection");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " V\u00E5ra produkter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_h3_click_7_listener() {
          return ctx.scrollToSection("faqSection");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Fr\u00E5gor? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_h3_click_9_listener() {
          return ctx.scrollToSection("footerSection");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Kontakta oss ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4)(12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_12_listener() {
          return ctx.scrollToSection("body");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("background-color", ctx.isScrolledPastHero);
      }
    },
    styles: [".background-color[_ngcontent-%COMP%] {\n  background-color: #071420;\n  transition: background-color 0.5s ease; \n\n}\n\n.logo[_ngcontent-%COMP%] {\n  font-family: \"rowdies\", Arial, sans-serif;\n  \n\n}\n\n.text[_ngcontent-%COMP%] {\n  font: 500 18px/1.2 \"Oswald\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxzQ0FBQSxFQUFBLHNEQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5Q0FBQTtFQUNBLGdGQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1Q0FBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQtY29sb3Ige1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRoZW1lKFwiY29sb3JzLnByaW1hcnlcIik7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2U7IC8qIEFkanVzdCB0aGUgZHVyYXRpb24gYW5kIHRpbWluZyBmdW5jdGlvbiBhcyBuZWVkZWQgKi9cclxufVxyXG5cclxuLmxvZ28ge1xyXG4gIGZvbnQtZmFtaWx5OiBcInJvd2RpZXNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgLyogRmFsbGJhY2sgZm9udHMgKEFyaWFsLCBzYW5zLXNlcmlmKSB3aWxsIGJlIHVzZWQgaWYgJ3Jvd2RpZXMnIGlzIHVuYXZhaWxhYmxlICovXHJcbn1cclxuXHJcbi50ZXh0IHtcclxuICBmb250OiA1MDAgMThweC8xLjIgXCJPc3dhbGRcIiwgc2Fucy1zZXJpZjtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 43201:
/*!***************************************************!*\
  !*** ./src/app/components/hero/hero.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeroComponent: () => (/* binding */ HeroComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 59936);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 34228);


const _c0 = ["carousel"];
class HeroComponent {
  constructor(el, renderer) {
    this.el = el;
    this.renderer = renderer;
    this.activeIndex = 1;
  }
  scrollToSection(targetSectionId) {
    const targetEl = this.el.nativeElement.ownerDocument.getElementById(targetSectionId);
    if (targetEl) {
      targetEl.scrollIntoView({
        behavior: "smooth"
      });
    }
  }
  scrollPage(index) {
    const carousel = this.el.nativeElement.querySelector(".carousel__viewport");
    if (carousel) {
      const slide = this.el.nativeElement.querySelector(`#carousel__slide${index}`);
      if (slide) {
        const scrollTo = slide.offsetLeft;
        carousel.scrollTo({
          left: scrollTo,
          behavior: "smooth"
        });
        // Adding a listener for the 'scroll' event to detect when the scrolling is completed
        carousel.addEventListener("scroll", this.checkScrollComplete.bind(this));
      }
    }
  }
  checkScrollComplete() {
    const carousel = this.el.nativeElement.querySelector(".carousel__viewport");
    if (carousel) {
      carousel.removeEventListener("scroll", this.checkScrollComplete.bind(this)); // Remove the scroll event listener
      this.checkElementsInViewport();
    }
  }
  ngOnInit() {
    // Set the height of the hero to a fixed height initially
    const screenHeight = window.innerHeight;
    let element = document.getElementById("carousel");
    if (element) {
      this.renderer.setStyle(element, "height", `${screenHeight * 0.95}px`);
    }
    this.checkElementsInViewport();
    this.scrollPage(1);
  }
  checkElementsInViewport() {
    const elementsToAnimate = this.el.nativeElement.querySelectorAll(".appear-from-bottom-primary, .appear-from-bottom-secondary, .appear-from-bottom-tertiary");
    elementsToAnimate.forEach(element => {
      const rect = element.getBoundingClientRect();
      const elementInView = rect.left >= 0 && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
      if (elementInView) {
        if (element.id) {
          this.activeIndex = parseInt(element.id);
        }
        element.classList.add("animate");
      } else {
        element.classList.remove("animate");
      }
    });
  }
  static #_ = this.ɵfac = function HeroComponent_Factory(t) {
    return new (t || HeroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HeroComponent,
    selectors: [["app-hero"]],
    viewQuery: function HeroComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
      }
    },
    decls: 69,
    vars: 8,
    consts: [["id", "carousel", "aria-label", "Gallery", 1, "carousel", "-mt-16"], ["carousel", ""], [1, "carousel__viewport", "bg-primary"], ["id", "carousel__slide1", "tabindex", "0", 1, "carousel__slide"], [1, "overlay"], [1, "carousel__snapper"], [1, "w-full", "h-full", "justify-center", "flex", "flex-col", "items-center"], ["id", "1", 1, "text-primaryText", "title", "appear-from-bottom-primary", "text-center"], [1, "text-primaryText", "text", "appear-from-bottom-secondary"], [1, "btn", "mt-8", "appear-from-bottom-tertiary", "cursor-pointer", 3, "disabled", "click"], [1, "btn-inner"], [1, "carousel__prev", "cursor-pointer", 3, "click"], [1, "carousel__next", "cursor-pointer", 3, "click"], ["id", "carousel__slide2", "tabindex", "0", 1, "carousel__slide"], ["id", "2", 1, "text-primaryText", "title", "appear-from-bottom-primary", "text-center"], ["id", "carousel__slide3", "tabindex", "0", 1, "carousel__slide"], ["id", "3", 1, "text-primaryText", "title", "appear-from-bottom-primary", "text-center"], ["id", "carousel__slide4", "tabindex", "0", 1, "carousel__slide"], ["id", "4", 1, "text-primaryText", "title", "appear-from-bottom-primary", "text-center"], [1, "carousel__navigation"], [1, "carousel__navigation-list"], [1, "carousel__navigation-item"], [1, "carousel__navigation-button", "cursor-pointer", 3, "ngClass", "click"], [1, "carousel__navigation-button-line"]],
    template: function HeroComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0, 1)(2, "ol", 2)(3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Butiker ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Digitalisera dina kundkorgar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroComponent_Template_button_click_11_listener() {
          return ctx.scrollToSection("aboutUsSection");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Visa Mer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroComponent_Template_a_click_14_listener() {
          return ctx.scrollPage(4);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroComponent_Template_a_click_15_listener() {
          return ctx.scrollPage(2);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5)(19, "div", 6)(20, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " GYM ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Inspirera och informera ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroComponent_Template_button_click_24_listener() {
          return ctx.scrollToSection("aboutUsSection");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Visa Mer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroComponent_Template_a_click_27_listener() {
          return ctx.scrollPage(1);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroComponent_Template_a_click_28_listener() {
          return ctx.scrollPage(3);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5)(32, "div", 6)(33, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Resturanger ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " F\u00F6rb\u00E4ttra kundupplevelsen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroComponent_Template_button_click_37_listener() {
          return ctx.scrollToSection("aboutUsSection");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Visa Mer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroComponent_Template_a_click_40_listener() {
          return ctx.scrollPage(2);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroComponent_Template_a_click_41_listener() {
          return ctx.scrollPage(4);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 5)(45, "div", 6)(46, "h3", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Marknader ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " H\u00E5ll koll p\u00E5 priser ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroComponent_Template_button_click_50_listener() {
          return ctx.scrollToSection("aboutUsSection");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Visa Mer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroComponent_Template_a_click_53_listener() {
          return ctx.scrollPage(3);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroComponent_Template_a_click_54_listener() {
          return ctx.scrollPage(1);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "aside", 19)(56, "ol", 20)(57, "li", 21)(58, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroComponent_Template_a_click_58_listener() {
          return ctx.scrollPage(1);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li", 21)(61, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroComponent_Template_a_click_61_listener() {
          return ctx.scrollPage(2);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li", 21)(64, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroComponent_Template_a_click_64_listener() {
          return ctx.scrollPage(3);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li", 21)(67, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroComponent_Template_a_click_67_listener() {
          return ctx.scrollPage(4);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.activeIndex !== 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.activeIndex !== 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.activeIndex !== 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.activeIndex !== 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.activeIndex === 1 ? "opacity-90" : "opacity-30");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.activeIndex === 2 ? "opacity-90" : "opacity-30");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.activeIndex === 3 ? "opacity-90" : "opacity-30");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.activeIndex === 4 ? "opacity-90" : "opacity-30");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
    styles: ["@keyframes _ngcontent-%COMP%_tonext {\n  75% {\n    left: 0;\n  }\n  95% {\n    left: 100%;\n  }\n  98% {\n    left: 100%;\n  }\n  99% {\n    left: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_tostart {\n  75% {\n    left: 0;\n  }\n  95% {\n    left: -300%;\n  }\n  98% {\n    left: -300%;\n  }\n  99% {\n    left: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_snap {\n  96% {\n    scroll-snap-align: center;\n  }\n  97% {\n    scroll-snap-align: none;\n  }\n  99% {\n    scroll-snap-align: none;\n  }\n  100% {\n    scroll-snap-align: center;\n  }\n}\nbody[_ngcontent-%COMP%] {\n  max-width: 37.5rem;\n  margin: 0 auto;\n  font-family: \"Lato\", sans-serif;\n}\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  scrollbar-color: transparent transparent; \n\n  scrollbar-width: 0px;\n}\n\n*[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0;\n}\n\n*[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n*[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: transparent;\n  border: none;\n}\n\n*[_ngcontent-%COMP%] {\n  -ms-overflow-style: none;\n}\n\nol[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n@media screen and (max-width: 768px) {\n  .title[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n  }\n}\n\n\n.carousel[_ngcontent-%COMP%] {\n  height: 95vh;\n  perspective: 100px;\n}\n\n.carousel__viewport[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  overflow-x: scroll;\n  counter-reset: item;\n  scroll-behavior: smooth;\n  scroll-snap-type: x mandatory;\n}\n\n.carousel__slide[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 0 0 100%;\n  width: 100%;\n}\n\n.carousel__slide[_ngcontent-%COMP%]:nth-child(1) {\n  position: relative;\n}\n\n.carousel__slide[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  background-color: rgba(7, 20, 32, 0.6);\n  width: 100vw;\n  height: 100%;\n}\n\n.carousel__slide[_ngcontent-%COMP%]:nth-child(1) {\n  background-image: url(\"https://www.alixbdanthenay.fr/wp-content/uploads/2015/07/Indispensable-1.jpg\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  \n\n}\n\n.carousel__slide[_ngcontent-%COMP%]:nth-child(2) {\n  background-image: url(\"https://www.alixbdanthenay.fr/wp-content/uploads/2015/07/Indispensable-4-1.jpg\");\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.carousel__slide[_ngcontent-%COMP%]:nth-child(3) {\n  background-image: url(\"https://www.alixbdanthenay.fr/wp-content/uploads/2016/11/11.jpg\");\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.carousel__slide[_ngcontent-%COMP%]:nth-child(4) {\n  background-image: url(\"https://www.alixbdanthenay.fr/wp-content/uploads/2016/11/20mars17-sans-typo.jpg\");\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.carousel__slide[_ngcontent-%COMP%]:before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate3d(-50%, -40%, 70px);\n  color: #fff;\n  font-size: 2em;\n}\n\n.carousel__snapper[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  scroll-snap-align: center;\n}\n\n@media (hover: hover) {\n  .carousel__snapper[_ngcontent-%COMP%] {\n    animation-name: _ngcontent-%COMP%_tonext, _ngcontent-%COMP%_snap;\n    animation-timing-function: ease;\n  }\n  .carousel__slide[_ngcontent-%COMP%]:last-child   .carousel__snapper[_ngcontent-%COMP%] {\n    animation-name: _ngcontent-%COMP%_tostart, _ngcontent-%COMP%_snap;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .carousel__snapper[_ngcontent-%COMP%] {\n    animation-name: none;\n  }\n}\n.carousel[_ngcontent-%COMP%]:hover   .carousel__snapper[_ngcontent-%COMP%], .carousel[_ngcontent-%COMP%]:focus-within   .carousel__snapper[_ngcontent-%COMP%] {\n  animation-name: none;\n}\n\n.carousel__navigation[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  bottom: 30px;\n  left: 0;\n  text-align: center;\n}\n\n.carousel__navigation-list[_ngcontent-%COMP%], .carousel__navigation-item[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.carousel__navigation-button[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 4.5rem;\n  height: 20px;\n  background-clip: content-box;\n  border-left: 0.7rem solid transparent;\n  border-right: 0.7rem solid transparent;\n  font-size: 0;\n  transition: transform 0.1s;\n}\n\n.carousel__navigation-button-line[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 4.5rem;\n  height: 3px;\n  margin-top: 10px;\n  background-color: #fff;\n  background-clip: content-box;\n  border-left: 0.7rem solid transparent;\n  border-right: 0.7rem solid transparent;\n  font-size: 0;\n  transition: transform 0.1s;\n}\n\n.carousel[_ngcontent-%COMP%]::before, .carousel[_ngcontent-%COMP%]::after, .carousel__prev[_ngcontent-%COMP%], .carousel__next[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  margin-top: 50vh;\n  width: 4rem;\n  height: 4rem;\n  transform: translateY(-50%);\n  border-radius: 50%;\n  font-size: 0;\n  outline: 0;\n  user-select: none;\n  -moz-user-select: none;\n  -khtml-user-select: none;\n  -webkit-user-select: none;\n  -o-user-select: none;\n}\n\n.carousel[_ngcontent-%COMP%]::before, .carousel__prev[_ngcontent-%COMP%] {\n  left: 1rem;\n}\n\n.carousel[_ngcontent-%COMP%]::after, .carousel__next[_ngcontent-%COMP%] {\n  right: 1rem;\n}\n\n.carousel[_ngcontent-%COMP%]::before, .carousel[_ngcontent-%COMP%]::after {\n  content: \"\";\n  z-index: 1;\n  background-repeat: no-repeat;\n  background-position: center center;\n  font-size: 2.5rem;\n  line-height: 4rem;\n  text-align: center;\n  pointer-events: none;\n}\n\n.carousel[_ngcontent-%COMP%]::before {\n  background-image: url('chevron-left.svg');\n}\n\n.carousel[_ngcontent-%COMP%]::after {\n  background-image: url('chevron-right.svg');\n}\n\n.title[_ngcontent-%COMP%] {\n  margin: 0 auto 15px;\n  z-index: 1;\n  max-width: 1000px;\n  font: 300 50px/1.2 \"Oswald\", sans-serif;\n  letter-spacing: 0.35em;\n  text-transform: uppercase;\n  user-select: none;\n  -moz-user-select: none;\n  -khtml-user-select: none;\n  -webkit-user-select: none;\n  -o-user-select: none;\n}\n\n.text[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 1000px;\n  font-size: 18px;\n  font: 300 22px/1.2 \"Oswald\", sans-serif;\n  line-height: 1.4;\n  user-select: none;\n  -moz-user-select: none;\n  -khtml-user-select: none;\n  -webkit-user-select: none;\n  -o-user-select: none;\n}\n\n\n\n@keyframes _ngcontent-%COMP%_slideInFromBottom {\n  0% {\n    opacity: 0;\n    transform: translateY(10vh);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.appear-from-bottom-primary[_ngcontent-%COMP%], .appear-from-bottom-secondary[_ngcontent-%COMP%], .appear-from-bottom-tertiary[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  opacity: 0;\n}\n\n.animate[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideInFromBottom 1.2s ease forwards;\n}\n\n.btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 13px 20px;\n  color: #fff;\n  text-decoration: none;\n  position: relative;\n  background: transparent;\n  border: 2px solid #e1e1e1;\n  font: 12px/1.2 \"Oswald\", sans-serif;\n  letter-spacing: 0.4em;\n  text-align: center;\n  text-indent: 2px;\n  text-transform: uppercase;\n  transition: color 0.1s linear 0.05s;\n}\n.btn[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 100%;\n  height: 1px;\n  background: #e1e1e1;\n  z-index: 1;\n  opacity: 0;\n  transition: height 0.2s ease, top 0.2s ease, opacity 0s linear 0.2s;\n}\n.btn[_ngcontent-%COMP%]::after {\n  transition: border 0.1s linear 0.05s;\n}\n.btn[_ngcontent-%COMP%]   .btn-inner[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  color: #373737;\n  transition: color 0.1s linear 0s;\n}\n.btn[_ngcontent-%COMP%]:hover::before {\n  top: 0;\n  height: 100%;\n  opacity: 1;\n  transition: height 0.2s ease, top 0.2s ease, opacity 0s linear 0s;\n}\n.btn[_ngcontent-%COMP%]:hover::after {\n  border-color: #373737;\n  transition: border 0.1s linear 0s;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9oZXJvL2hlcm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLE9BQUE7RUFDRjtFQUNBO0lBQ0UsVUFBQTtFQUNGO0VBQ0E7SUFDRSxVQUFBO0VBQ0Y7RUFDQTtJQUNFLE9BQUE7RUFDRjtBQUNGO0FBRUE7RUFDRTtJQUNFLE9BQUE7RUFBRjtFQUVBO0lBQ0UsV0FBQTtFQUFGO0VBRUE7SUFDRSxXQUFBO0VBQUY7RUFFQTtJQUNFLE9BQUE7RUFBRjtBQUNGO0FBR0E7RUFDRTtJQUNFLHlCQUFBO0VBREY7RUFHQTtJQUNFLHVCQUFBO0VBREY7RUFHQTtJQUNFLHVCQUFBO0VBREY7RUFHQTtJQUNFLHlCQUFBO0VBREY7QUFDRjtBQUlBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBRUEsK0JBQUE7QUFIRjs7QUFNQTtFQUNFLHNCQUFBO0VBQ0Esd0NBQUEsRUFBQSwwQkFBQTtFQUNBLG9CQUFBO0FBSEY7O0FBTUE7RUFDRSxRQUFBO0FBSEY7O0FBTUE7RUFDRSx1QkFBQTtBQUhGOztBQU1BO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0FBSEY7O0FBTUE7RUFDRSx3QkFBQTtBQUhGOztBQU1BOztFQUVFLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFIRjs7QUFLQTtFQUNFO0lBQ0UsMEJBQUE7RUFGRjtBQUNGO0FBS0Esc0NBQUE7QUFDQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0Esc0NBQUE7RUFFQSxZQUFBO0VBQ0EsWUFBQTtBQUpGOztBQU9BO0VBQ0UscUdBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUVBQUE7QUFKRjs7QUFNQTtFQUNFLHVHQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQUhGOztBQUtBO0VBQ0Usd0ZBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FBRkY7O0FBSUE7RUFDRSx3R0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx3Q0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQURGOztBQUlBO0VBQ0U7SUFDRSw0QkFBQTtJQUNBLCtCQUFBO0VBREY7RUFJQTtJQUNFLDZCQUFBO0VBRkY7QUFDRjtBQUtBO0VBQ0U7SUFDRSxvQkFBQTtFQUhGO0FBQ0Y7QUFNQTs7RUFFRSxvQkFBQTtBQUpGOztBQU9BO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtBQUpGOztBQU9BOztFQUVFLHFCQUFBO0FBSkY7O0FBT0E7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBRUEsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FBTEY7O0FBUUE7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxzQ0FBQTtFQUVBLFlBQUE7RUFDQSwwQkFBQTtBQU5GOztBQVNBOzs7O0VBSUUsa0JBQUE7RUFDQSxNQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUFORjs7QUFTQTs7RUFFRSxVQUFBO0FBTkY7O0FBU0E7O0VBRUUsV0FBQTtBQU5GOztBQVNBOztFQUVFLFdBQUE7RUFDQSxVQUFBO0VBRUEsNEJBQUE7RUFDQSxrQ0FBQTtFQUVBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBUkY7O0FBV0E7RUFDRSx5Q0FBQTtBQVJGOztBQVdBO0VBQ0UsMENBQUE7QUFSRjs7QUFXQTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUNBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtBQVJGOztBQVVBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHVDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0FBUEY7O0FBU0EsaUNBQUE7QUFDQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDJCQUFBO0VBTkY7RUFRQTtJQUNFLFVBQUE7SUFDQSx3QkFBQTtFQU5GO0FBQ0Y7QUFTQTs7O0VBR0UsaUJBQUE7RUFDQSxVQUFBO0FBUEY7O0FBVUE7RUFDRSwrQ0FBQTtBQVBGOztBQVVBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1DQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQ0FBQTtBQVBGO0FBU0U7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxtRUFBQTtBQVBKO0FBVUU7RUFDRSxvQ0FBQTtBQVJKO0FBV0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUFUSjtBQVlFO0VBQ0UsY0FBQTtFQUNBLGdDQUFBO0FBVko7QUFZSTtFQUNFLE1BQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGlFQUFBO0FBVk47QUFhSTtFQUNFLHFCQUFBO0VBQ0EsaUNBQUE7QUFYTiIsInNvdXJjZXNDb250ZW50IjpbIkBrZXlmcmFtZXMgdG9uZXh0IHtcclxuICA3NSUge1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcbiAgOTUlIHtcclxuICAgIGxlZnQ6IDEwMCU7XHJcbiAgfVxyXG4gIDk4JSB7XHJcbiAgICBsZWZ0OiAxMDAlO1xyXG4gIH1cclxuICA5OSUge1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgdG9zdGFydCB7XHJcbiAgNzUlIHtcclxuICAgIGxlZnQ6IDA7XHJcbiAgfVxyXG4gIDk1JSB7XHJcbiAgICBsZWZ0OiAtMzAwJTtcclxuICB9XHJcbiAgOTglIHtcclxuICAgIGxlZnQ6IC0zMDAlO1xyXG4gIH1cclxuICA5OSUge1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc25hcCB7XHJcbiAgOTYlIHtcclxuICAgIHNjcm9sbC1zbmFwLWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIDk3JSB7XHJcbiAgICBzY3JvbGwtc25hcC1hbGlnbjogbm9uZTtcclxuICB9XHJcbiAgOTklIHtcclxuICAgIHNjcm9sbC1zbmFwLWFsaWduOiBub25lO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHNjcm9sbC1zbmFwLWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5ib2R5IHtcclxuICBtYXgtd2lkdGg6IDM3LjVyZW07XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBzY3JvbGxiYXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50OyAvKiB0aHVtYiBhbmQgdHJhY2sgY29sb3IgKi9cclxuICBzY3JvbGxiYXItd2lkdGg6IDBweDtcclxufVxyXG5cclxuKjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiAwO1xyXG59XHJcblxyXG4qOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbio6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbioge1xyXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcclxufVxyXG5cclxub2wsXHJcbmxpIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLyogRGVmYXVsdCBoZWlnaHQgZm9yIGxhcmdlciBzY3JlZW5zICovXHJcbi5jYXJvdXNlbCB7XHJcbiAgaGVpZ2h0OiA5NXZoO1xyXG4gIHBlcnNwZWN0aXZlOiAxMDBweDtcclxufVxyXG5cclxuLmNhcm91c2VsX192aWV3cG9ydCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICBjb3VudGVyLXJlc2V0OiBpdGVtO1xyXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG4gIHNjcm9sbC1zbmFwLXR5cGU6IHggbWFuZGF0b3J5O1xyXG59XHJcblxyXG4uY2Fyb3VzZWxfX3NsaWRlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxleDogMCAwIDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jYXJvdXNlbF9fc2xpZGU6bnRoLWNoaWxkKDEpIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jYXJvdXNlbF9fc2xpZGUgLm92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDcsIDIwLCAzMiwgMC42KTtcclxuXHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmNhcm91c2VsX19zbGlkZTpudGgtY2hpbGQoMSkge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vd3d3LmFsaXhiZGFudGhlbmF5LmZyL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE1LzA3L0luZGlzcGVuc2FibGUtMS5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIC8qIFlvdSBtaWdodCBuZWVkIHRvIGFkanVzdCBvdGhlciBwcm9wZXJ0aWVzIGJhc2VkIG9uIHlvdXIgZGVzaWduICovXHJcbn1cclxuLmNhcm91c2VsX19zbGlkZTpudGgtY2hpbGQoMikge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vd3d3LmFsaXhiZGFudGhlbmF5LmZyL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE1LzA3L0luZGlzcGVuc2FibGUtNC0xLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuLmNhcm91c2VsX19zbGlkZTpudGgtY2hpbGQoMykge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vd3d3LmFsaXhiZGFudGhlbmF5LmZyL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE2LzExLzExLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuLmNhcm91c2VsX19zbGlkZTpudGgtY2hpbGQoNCkge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vd3d3LmFsaXhiZGFudGhlbmF5LmZyL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE2LzExLzIwbWFyczE3LXNhbnMtdHlwby5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4uY2Fyb3VzZWxfX3NsaWRlOmJlZm9yZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIC00MCUsIDcwcHgpO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG59XHJcblxyXG4uY2Fyb3VzZWxfX3NuYXBwZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgc2Nyb2xsLXNuYXAtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcclxuICAuY2Fyb3VzZWxfX3NuYXBwZXIge1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IHRvbmV4dCwgc25hcDtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XHJcbiAgfVxyXG5cclxuICAuY2Fyb3VzZWxfX3NsaWRlOmxhc3QtY2hpbGQgLmNhcm91c2VsX19zbmFwcGVyIHtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiB0b3N0YXJ0LCBzbmFwO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcclxuICAuY2Fyb3VzZWxfX3NuYXBwZXIge1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4uY2Fyb3VzZWw6aG92ZXIgLmNhcm91c2VsX19zbmFwcGVyLFxyXG4uY2Fyb3VzZWw6Zm9jdXMtd2l0aGluIC5jYXJvdXNlbF9fc25hcHBlciB7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IG5vbmU7XHJcbn1cclxuXHJcbi5jYXJvdXNlbF9fbmF2aWdhdGlvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMzBweDtcclxuICBsZWZ0OiAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcm91c2VsX19uYXZpZ2F0aW9uLWxpc3QsXHJcbi5jYXJvdXNlbF9fbmF2aWdhdGlvbi1pdGVtIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5jYXJvdXNlbF9fbmF2aWdhdGlvbi1idXR0b24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogNC41cmVtO1xyXG4gIGhlaWdodDogMjBweDtcclxuXHJcbiAgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveDtcclxuICBib3JkZXItbGVmdDogMC43cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yaWdodDogMC43cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGZvbnQtc2l6ZTogMDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcztcclxufVxyXG5cclxuLmNhcm91c2VsX19uYXZpZ2F0aW9uLWJ1dHRvbi1saW5lIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDQuNXJlbTtcclxuICBoZWlnaHQ6IDNweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveDtcclxuICBib3JkZXItbGVmdDogMC43cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yaWdodDogMC43cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xyXG5cclxuICBmb250LXNpemU6IDA7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXM7XHJcbn1cclxuXHJcbi5jYXJvdXNlbDo6YmVmb3JlLFxyXG4uY2Fyb3VzZWw6OmFmdGVyLFxyXG4uY2Fyb3VzZWxfX3ByZXYsXHJcbi5jYXJvdXNlbF9fbmV4dCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBtYXJnaW4tdG9wOiA1MHZoO1xyXG4gIHdpZHRoOiA0cmVtO1xyXG4gIGhlaWdodDogNHJlbTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGZvbnQtc2l6ZTogMDtcclxuICBvdXRsaW5lOiAwO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi5jYXJvdXNlbDo6YmVmb3JlLFxyXG4uY2Fyb3VzZWxfX3ByZXYge1xyXG4gIGxlZnQ6IDFyZW07XHJcbn1cclxuXHJcbi5jYXJvdXNlbDo6YWZ0ZXIsXHJcbi5jYXJvdXNlbF9fbmV4dCB7XHJcbiAgcmlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbi5jYXJvdXNlbDo6YmVmb3JlLFxyXG4uY2Fyb3VzZWw6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHotaW5kZXg6IDE7XHJcblxyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuXHJcbiAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDRyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4uY2Fyb3VzZWw6OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9jaGV2cm9uLWxlZnQuc3ZnXCIpO1xyXG59XHJcblxyXG4uY2Fyb3VzZWw6OmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2NoZXZyb24tcmlnaHQuc3ZnXCIpO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIG1hcmdpbjogMCBhdXRvIDE1cHg7XHJcbiAgei1pbmRleDogMTtcclxuICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICBmb250OiAzMDAgNTBweC8xLjIgXCJPc3dhbGRcIiwgc2Fucy1zZXJpZjtcclxuICBsZXR0ZXItc3BhY2luZzogMC4zNWVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtby11c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG4udGV4dCB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQ6IDMwMCAyMnB4LzEuMiBcIk9zd2FsZFwiLCBzYW5zLXNlcmlmO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtby11c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG4vKiBDU1MgZm9yIHRoZSBhbmltYXRpb24gZWZmZWN0ICovXHJcbkBrZXlmcmFtZXMgc2xpZGVJbkZyb21Cb3R0b20ge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTB2aCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcbn1cclxuXHJcbi5hcHBlYXItZnJvbS1ib3R0b20tcHJpbWFyeSxcclxuLmFwcGVhci1mcm9tLWJvdHRvbS1zZWNvbmRhcnksXHJcbi5hcHBlYXItZnJvbS1ib3R0b20tdGVydGlhcnkge1xyXG4gIG1heC13aWR0aDogMTAwMHB4O1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5hbmltYXRlIHtcclxuICBhbmltYXRpb246IHNsaWRlSW5Gcm9tQm90dG9tIDEuMnMgZWFzZSBmb3J3YXJkcztcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDEzcHggMjBweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNlMWUxZTE7XHJcbiAgZm9udDogMTJweC8xLjIgXCJPc3dhbGRcIiwgc2Fucy1zZXJpZjtcclxuICBsZXR0ZXItc3BhY2luZzogMC40ZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtaW5kZW50OiAycHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjFzIGxpbmVhciAwLjA1cztcclxuXHJcbiAgJjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTFlMWUxO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4ycyBlYXNlLCB0b3AgMC4ycyBlYXNlLCBvcGFjaXR5IDBzIGxpbmVhciAwLjJzO1xyXG4gIH1cclxuXHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyIDAuMXMgbGluZWFyIDAuMDVzO1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1pbm5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogIzM3MzczNztcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMXMgbGluZWFyIDBzO1xyXG5cclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4ycyBlYXNlLCB0b3AgMC4ycyBlYXNlLCBvcGFjaXR5IDBzIGxpbmVhciAwcztcclxuICAgIH1cclxuXHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogIzM3MzczNztcclxuICAgICAgdHJhbnNpdGlvbjogYm9yZGVyIDAuMXMgbGluZWFyIDBzO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 62353:
/*!***************************************************************************!*\
  !*** ./src/app/components/manual-downloads/manual-downloads.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ManualDownloadsComponent: () => (/* binding */ ManualDownloadsComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ 46012);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 59936);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 34228);
/* harmony import */ var _directives_animate_div_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../directives/animate-div.directive */ 24995);




function ManualDownloadsComponent_div_6_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14)(1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManualDownloadsComponent_div_6_div_7_Template_a_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManualDownloadsComponent_div_6_div_7_Template_a_click_3_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 17)(5, "h6", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Ladda ner");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const question_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", question_r1.href, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](question_r1.body);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", question_r1.href, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function ManualDownloadsComponent_div_6_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const question_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", question_r1.body, " ");
  }
}
function ManualDownloadsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManualDownloadsComponent_div_6_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const i_r2 = restoredCtx.index;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.toggleExpand(i_r2 == ctx_r10.isExpanded ? -1 : i_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 8)(3, "h5", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ManualDownloadsComponent_div_6_div_7_Template, 8, 3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ManualDownloadsComponent_div_6_p_8_Template, 2, 1, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const question_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", question_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("transform", ctx_r0.isExpanded !== i_r2 ? "rotate(45deg)" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@rotateAnimation", ctx_r0.isExpanded !== i_r2 ? "rotated" : "notRotated");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@expandCollapse", ctx_r0.isExpanded == i_r2 ? "expanded" : "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", question_r1.href);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !question_r1.href);
  }
}
class ManualDownloadsComponent {
  constructor() {
    this.isExpanded = -1;
    this.questions = [{
      title: "Templett Modulära NFC-Stickers - Matbutiker",
      body: "Templett_NFC_Stickers_Användarmanual_svenska.pdf ",
      href: "https://drive.google.com/uc?export=download&id=186NegHRc_Y4Vayvke9P9NLkicdiwFEui"
    }, {
      title: "Templett Modulära NFC-Stickers - Gym",
      body: "Kommer snart."
    }, {
      title: "Templett Modulära NFC-Stickers - Resturanger",
      body: "Kommer snart."
    }];
  }
  toggleExpand(index) {
    this.isExpanded = index;
  }
  static #_ = this.ɵfac = function ManualDownloadsComponent_Factory(t) {
    return new (t || ManualDownloadsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ManualDownloadsComponent,
    selectors: [["app-manual-downloads"]],
    decls: 7,
    vars: 1,
    consts: [["id", "downloadManualsSection", 1, "w-full", "h-auto", "justify-center", "flex", "max-w-[1000px]", "mx-auto"], ["animateDivEntry", "", 1, "w-full"], [1, "templett-flow-header", "text-primaryText"], [1, "flex", "flex-col", "w-full", "items-center", "py-4"], [1, "flex", "flex-col", "w-[90%]", "lg:w-full", "h-auto", "mx-8"], ["class", "flex-col flex w-full h-full bg-secondary rounded-default px-8 py-5 my-2 hide-before-animate cursor-pointer", "animateDivEntry", "", 3, "click", 4, "ngFor", "ngForOf"], ["animateDivEntry", "", 1, "flex-col", "flex", "w-full", "h-full", "bg-secondary", "rounded-default", "px-8", "py-5", "my-2", "hide-before-animate", "cursor-pointer", 3, "click"], ["faqCard", ""], [1, "w-full", "justify-between", "flex", "flex-row"], [1, "text-md", "lg:text-3xl", "text-secondaryText", "text-left", "font-semibold", "flex", "items-center"], ["src", "./assets/images/close.svg", "alt", "Bullet Point Icon", 1, "h-10", "cursor-pointer"], [1, "additional-text"], ["class", "w-full justify-between flex flex-col lg:flex-row pt-8 pb-4", 4, "ngIf"], ["class", "py-4", 4, "ngIf"], [1, "w-full", "justify-between", "flex", "flex-col", "lg:flex-row", "pt-8", "pb-4"], ["download", "desired_filename.ext", 1, "cursor-pointer", "hover:underline", "hover:text-blue-500", "font-semibold", "truncate", "max-w-[100%]", 3, "href", "click"], ["download", "desired_filename.ext", 1, "flex", "items-center", "gap-1", "cursor-pointer", "hover:underline", "hover:text-blue-500", "font-semibold", "whitespace-nowrap", "btn", 3, "href", "click"], [1, "flex", "flex-row", "gap-x-4", "justify-between"], [1, "btn-inner", "flex"], ["src", "./assets/images/download.svg", "alt", "Download icon", 1, "cursor-pointer", "h-5", "w-5", "btn-inner", "flex"], [1, "py-4"]],
    template: function ManualDownloadsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Manualer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ManualDownloadsComponent_div_6_Template, 9, 7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.questions);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _directives_animate_div_directive__WEBPACK_IMPORTED_MODULE_0__.AnimateDivDirective],
    styles: [".btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 13px 20px;\n  color: #000000;\n  text-decoration: none;\n  position: relative;\n  background: transparent;\n  border: 2px solid #e1e1e1;\n  text-align: center;\n  text-indent: 2px;\n  transition: color 0.1s linear 0.05s;\n}\n.btn[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 100%;\n  height: 1px;\n  background: #e1e1e1;\n  z-index: 1;\n  opacity: 0;\n  transition: height 0.2s ease, top 0.2s ease, opacity 0s linear 0.2s;\n}\n.btn[_ngcontent-%COMP%]::after {\n  transition: border 0.1s linear 0.05s;\n}\n.btn[_ngcontent-%COMP%]   .btn-inner[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  color: #373737;\n  transition: color 0.1s linear 0s;\n}\n.btn[_ngcontent-%COMP%]:hover::before {\n  top: 0;\n  height: 100%;\n  opacity: 1;\n  transition: height 0.2s ease, top 0.2s ease, opacity 0s linear 0s;\n}\n.btn[_ngcontent-%COMP%]:hover::after {\n  border-color: #373737;\n  transition: border 0.1s linear 0s;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tYW51YWwtZG93bmxvYWRzL21hbnVhbC1kb3dubG9hZHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBRUEsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1DQUFBO0FBQUY7QUFFRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLG1FQUFBO0FBQUo7QUFHRTtFQUNFLG9DQUFBO0FBREo7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQUZKO0FBS0U7RUFDRSxjQUFBO0VBQ0EsZ0NBQUE7QUFISjtBQUtJO0VBQ0UsTUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsaUVBQUE7QUFITjtBQU1JO0VBQ0UscUJBQUE7RUFDQSxpQ0FBQTtBQUpOIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0biB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDEzcHggMjBweDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNlMWUxZTE7XHJcblxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWluZGVudDogMnB4O1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMXMgbGluZWFyIDAuMDVzO1xyXG5cclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGJhY2tncm91bmQ6ICNlMWUxZTE7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjJzIGVhc2UsIHRvcCAwLjJzIGVhc2UsIG9wYWNpdHkgMHMgbGluZWFyIDAuMnM7XHJcbiAgfVxyXG5cclxuICAmOjphZnRlciB7XHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXIgMC4xcyBsaW5lYXIgMC4wNXM7XHJcbiAgfVxyXG5cclxuICAuYnRuLWlubmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMzczNzM3O1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4xcyBsaW5lYXIgMHM7XHJcblxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjJzIGVhc2UsIHRvcCAwLjJzIGVhc2UsIG9wYWNpdHkgMHMgbGluZWFyIDBzO1xyXG4gICAgfVxyXG5cclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjMzczNzM3O1xyXG4gICAgICB0cmFuc2l0aW9uOiBib3JkZXIgMC4xcyBsaW5lYXIgMHM7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)("expandCollapse", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.state)("collapsed", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
        height: "0",
        opacity: "0",
        overflow: "hidden"
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.state)("expanded", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
        height: "*",
        opacity: "1",
        overflow: "visible"
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)("collapsed <=> expanded", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)("300ms ease-in-out")])]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)("rotateAnimation", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.state)("rotated", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
        transform: "rotate(45deg)"
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.state)("notRotated", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
        transform: "rotate(0deg)"
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)("notRotated <=> rotated", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)("0.3s ease-in-out")])])]
    }
  });
}

/***/ }),

/***/ 34226:
/*!*****************************************************************************************!*\
  !*** ./src/app/components/mobile-benefits-section/mobile-benefits-section.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MobileBenefitsSectionComponent: () => (/* binding */ MobileBenefitsSectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 59936);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 34228);
/* harmony import */ var _directives_animate_div_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../directives/animate-div.directive */ 24995);



function MobileBenefitsSectionComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5, 6)(2, "div", 7, 8)(4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 11)(7, "div", 12)(8, "h2", 13)(9, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const benefit_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "./assets/images/", benefit_r1.icon, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", benefit_r1.title, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", benefit_r1.substring, " ");
  }
}
class MobileBenefitsSectionComponent {
  constructor() {
    this.benefits = [{
      title: "Digitala annonsblad",
      substring: "Templett-Stickers möjliggör skapandet av digitala annonsblad där butiksägare kan länka till kampanjer, produktinformation eller annat relevant innehåll på nätet.",
      icon: "newsletter-new.svg"
    }, {
      title: "Rekommendera recept",
      substring: "Med Templett-Stickers kan butiksägare enkelt dela recept eller matrelaterade tips till sina kunder. Genom att länka NFC-chippen till receptsidor eller matbloggar kan butiken erbjuda värdefulla råd eller inspirera kunderna till nya matupplevelser.",
      icon: "recipe.svg"
    }, {
      title: "Öka försäljning",
      substring: "Genom att använda Templett-Stickers kan butiksägare locka fler kunder och öka försäljningen. De kan marknadsföra produkter, kampanjer eller erbjudanden direkt till kundernas smartphones när de interagerar med NFC-stickers i butiken.",
      icon: "chart.svg"
    }, {
      title: "Uppmärksamma rabatter",
      substring: "Templett-Stickers möjliggör en effektiv marknadsföring av rabatter eller specialerbjudanden. Butiksägare kan skapa NFC-länkar till sidor med kampanjkoder eller kuponger för att locka kunder till att göra inköp i butiken.",
      icon: "pricetag.svg"
    }, {
      title: "Modernisera butiken",
      substring: "Genom att införa NFC-teknologi med Templett-Stickers kan butiker skapa en modern och interaktiv shoppingupplevelse för sina kunder. Detta visar engagemang för att utveckla och hålla butiken uppdaterad med den senaste tekniken.",
      icon: "database.svg"
    }, {
      title: "Skapa trender",
      substring: "Med Templett-Stickers har butiksägare möjlighet att vara innovativa och skapa trender inom sin bransch. Genom att erbjuda unika och intressanta digitala upplevelser för kunder kan butiker positionera sig som ledande inom sin marknad.",
      icon: "trends.svg"
    }];
  }
  static #_ = this.ɵfac = function MobileBenefitsSectionComponent_Factory(t) {
    return new (t || MobileBenefitsSectionComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MobileBenefitsSectionComponent,
    selectors: [["app-mobile-benefits-section"]],
    decls: 6,
    vars: 1,
    consts: [["id", "benefitsSection", 1, "w-full", "h-auto", "justify-center", "flex", "mx-auto"], ["animateDivEntry", "", 1, "hide-before-animate", "w-full"], [1, "templett-flow-header", "text-primaryText"], [1, "w-full", "h-auto", "flex", "flex-row", "px-8", "gap-8", "overflow-x-scroll", "overflow-y-hidden"], ["class", "flex mx-auto w-full h-auto", 4, "ngFor", "ngForOf"], [1, "flex", "mx-auto", "w-full", "h-auto"], ["leftBenefitsDiv", ""], [1, "flex", "flex-col", "w-[80vw]", "h-[80vw]", "max-w-[400px]", "max-h-[400px]", "space-between", "bg-secondary", "rounded-default", "p-8"], ["benefitsCard", ""], [1, "w-auto", "h-1/5"], ["alt", "Benefit Icon", 1, "h-full", 3, "src"], [1, "flex-col", "flex", "w-full", "h-full", "pt-2"], [1, "w-full", "justify-center", "flex", "flex-col"], [1, "text-sm", "text-secondaryText", "text-left", "mt-2"], [1, "font-semibold"]],
    template: function MobileBenefitsSectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Varf\u00F6r Templett");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MobileBenefitsSectionComponent_div_5_Template, 12, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.benefits);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _directives_animate_div_directive__WEBPACK_IMPORTED_MODULE_0__.AnimateDivDirective],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 61329:
/*!*********************************************************************!*\
  !*** ./src/app/components/mobile-header/mobile-header.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MobileHeaderComponent: () => (/* binding */ MobileHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ 46012);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 59936);
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sidenav/sidenav.component */ 39452);



class MobileHeaderComponent {
  toggleExpand() {
    this.isExpanded = !this.isExpanded;
    this.toggleBodyScroll(!this.isExpanded);
  }
  constructor(el) {
    this.el = el;
    this.isExpanded = false;
    this.isScrolledPastHero = false;
  }
  scrollToSection(targetSectionId) {
    const targetEl = this.el.nativeElement.ownerDocument.getElementById(targetSectionId);
    if (targetEl) {
      targetEl.scrollIntoView({
        behavior: "smooth"
      });
    }
  }
  onExpandChange(value) {
    this.isExpanded = value; // Update the value in the parent component
  }

  toggleBodyScroll(enableScroll) {
    if (enableScroll) {
      document.body.classList.remove("no-scroll");
    } else {
      document.body.classList.add("no-scroll");
    }
  }
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const heightLimit = 0.85 * window.innerHeight;
    this.isScrolledPastHero = scrollPosition >= heightLimit;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function MobileHeaderComponent_Factory(t) {
    return new (t || MobileHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MobileHeaderComponent,
    selectors: [["app-mobile-header"]],
    hostBindings: function MobileHeaderComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function MobileHeaderComponent_scroll_HostBindingHandler() {
          return ctx.onWindowScroll();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
      }
    },
    inputs: {
      isExpanded: "isExpanded"
    },
    decls: 13,
    vars: 3,
    consts: [[1, "w-screen", "h-16", "fixed", "top-0", "z-[9999]", "overflow-x-hidden", "block", "lg:hidden", "align-baseline", "box-border"], [1, "w-full", "h-full", "flex", "flex-row", "justify-between", "px-4"], [1, "w-full", "h-full", "flex", "flex-row", "items-center", "gap-8", "justify-between"], [1, "menu-body"], ["for", "animatedCheck"], ["type", "checkbox", "id", "animatedCheck", 3, "click"], [1, "w-1/2", "h-full", "flex", "flex-row-reverse", "items-center"], [1, "flex", "text-center", "text-primaryText", "font-semibold", "text-2xl", 3, "click"], [3, "isExpanded", "isExpandedChange"]],
    template: function MobileHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "label", 4)(5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MobileHeaderComponent_Template_input_click_5_listener() {
          return ctx.toggleExpand();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span")(7, "span")(8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6)(10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MobileHeaderComponent_Template_div_click_10_listener() {
          return ctx.scrollToSection("body");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " alt=\"logoTextOnly\" class=\"h-16 w-32\" src=\"./assets/images/logoText.svg\" /> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "app-sidenav", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("isExpandedChange", function MobileHeaderComponent_Template_app_sidenav_isExpandedChange_12_listener($event) {
          return ctx.onExpandChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("background-color", ctx.isScrolledPastHero);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isExpanded", ctx.isExpanded);
      }
    },
    dependencies: [_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_0__.SidenavComponent],
    styles: [".menu[_ngcontent-%COMP%] {\n  background-image: url('menu.svg');\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.menu-body[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  scale: 0.7;\n  margin: 0;\n  padding: 0;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 70px;\n  cursor: pointer;\n}\n\nlabel[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 10px;\n  height: 7px;\n  margin: 7px 0;\n  transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);\n}\n\nspan[_ngcontent-%COMP%]:nth-of-type(1) {\n  width: 50%;\n}\n\nspan[_ngcontent-%COMP%]:nth-of-type(2) {\n  width: 100%;\n}\n\nspan[_ngcontent-%COMP%]:nth-of-type(3) {\n  width: 75%;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%] {\n  display: none;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%]:checked    ~ span[_ngcontent-%COMP%]:nth-of-type(1) {\n  transform-origin: bottom;\n  transform: rotatez(45deg) translate(8px, 0px);\n}\n\ninput[type=checkbox][_ngcontent-%COMP%]:checked    ~ span[_ngcontent-%COMP%]:nth-of-type(2) {\n  transform-origin: top;\n  transform: rotatez(-45deg);\n}\n\ninput[type=checkbox][_ngcontent-%COMP%]:checked    ~ span[_ngcontent-%COMP%]:nth-of-type(3) {\n  transform-origin: bottom;\n  width: 50%;\n  transform: translate(30px, -11px) rotatez(45deg);\n}\n\n.background-color[_ngcontent-%COMP%] {\n  background-color: #071420;\n  transition: background-color 0.5s ease; \n\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tb2JpbGUtaGVhZGVyL21vYmlsZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9EQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3QkFBQTtFQUNBLDZDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLDBCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3QkFBQTtFQUNBLFVBQUE7RUFDQSxnREFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxzQ0FBQSxFQUFBLHNEQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9tZW51LnN2Z1wiKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbi5tZW51LWJvZHkge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICBzY2FsZTogMC43O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiA3MHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxubGFiZWwgc3BhbiB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGhlaWdodDogN3B4O1xyXG4gIG1hcmdpbjogN3B4IDA7XHJcbiAgdHJhbnNpdGlvbjogMC40cyBjdWJpYy1iZXppZXIoMC42OCwgLTAuNiwgMC4zMiwgMS42KTtcclxufVxyXG5cclxuc3BhbjpudGgtb2YtdHlwZSgxKSB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuc3BhbjpudGgtb2YtdHlwZSgyKSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnNwYW46bnRoLW9mLXR5cGUoMykge1xyXG4gIHdpZHRoOiA3NSU7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgfiBzcGFuOm50aC1vZi10eXBlKDEpIHtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XHJcbiAgdHJhbnNmb3JtOiByb3RhdGV6KDQ1ZGVnKSB0cmFuc2xhdGUoOHB4LCAwcHgpO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCB+IHNwYW46bnRoLW9mLXR5cGUoMikge1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZXooLTQ1ZGVnKTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgfiBzcGFuOm50aC1vZi10eXBlKDMpIHtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XHJcbiAgd2lkdGg6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMHB4LCAtMTFweCkgcm90YXRleig0NWRlZyk7XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kLWNvbG9yIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtZShcImNvbG9ycy5wcmltYXJ5XCIpO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlOyAvKiBBZGp1c3QgdGhlIGR1cmF0aW9uIGFuZCB0aW1pbmcgZnVuY3Rpb24gYXMgbmVlZGVkICovXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)("expandCollapse", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.state)("collapsed", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
        height: "0",
        opacity: "0",
        overflow: "hidden"
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.state)("expanded", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
        height: "*",
        opacity: "1",
        overflow: "visible"
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)("collapsed <=> expanded", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)("300ms ease-in-out")])]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)("rotateAnimation", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.state)("rotated", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
        transform: "rotate(45deg)"
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.state)("notRotated", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
        transform: "rotate(0deg)"
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)("notRotated <=> rotated", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)("0.3s ease-in-out")])])]
    }
  });
}

/***/ }),

/***/ 44651:
/*!***********************************************************************!*\
  !*** ./src/app/components/offers-section/offers-section.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OffersSectionComponent: () => (/* binding */ OffersSectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 59936);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 34228);
/* harmony import */ var _directives_animate_div_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../directives/animate-div.directive */ 24995);



function OffersSectionComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20)(1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const bulletPoint_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "./assets/images/", bulletPoint_r9.icon, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", bulletPoint_r9.text, " ");
  }
}
function OffersSectionComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20)(1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const bulletPoint_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "./assets/images/", bulletPoint_r10.icon, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", bulletPoint_r10.text, " ");
  }
}
function OffersSectionComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20)(1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const bulletPoint_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "./assets/images/", bulletPoint_r11.icon, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", bulletPoint_r11.text, " ");
  }
}
class OffersSectionComponent {
  constructor(el) {
    this.el = el;
    this.bulletPoints = [{
      icon: "checkmark.svg",
      text: "Träningsprogram och övningar"
    }, {
      icon: "checkmark.svg",
      text: "Nyheter och info"
    }, {
      icon: "checkmark.svg",
      text: "Kost och näringsråd"
    }, {
      icon: "checkmark.svg",
      text: "Erbjudanden"
    }, {
      icon: "checkmark.svg",
      text: "Evenemang och pass"
    }];
    this.bulletPoints2 = [{
      icon: "checkmark.svg",
      text: "Veckans annonsblad"
    }, {
      icon: "checkmark.svg",
      text: "Frukost, lunch och middags-tips"
    }, {
      icon: "checkmark.svg",
      text: "Säsongsvaror"
    }, {
      icon: "checkmark.svg",
      text: "Butiksinformation och nyheter"
    }, {
      icon: "checkmark.svg",
      text: "Jobbannonser"
    }];
    this.bulletPoints3 = [{
      icon: "checkmark.svg",
      text: "Webbshop"
    }, {
      icon: "checkmark.svg",
      text: "Nyhetsbrev och information"
    }, {
      icon: "checkmark.svg",
      text: "Event och workshops"
    }, {
      icon: "checkmark.svg",
      text: "Öppettider"
    }, {
      icon: "checkmark.svg",
      text: "Din egna idé"
    }];
  }
  scrollToSection(targetSectionId) {
    const targetEl = this.el.nativeElement.ownerDocument.getElementById(targetSectionId);
    if (targetEl) {
      targetEl.scrollIntoView({
        behavior: "smooth"
      });
    }
  }
  static #_ = this.ɵfac = function OffersSectionComponent_Factory(t) {
    return new (t || OffersSectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: OffersSectionComponent,
    selectors: [["app-offers-section"]],
    decls: 49,
    vars: 3,
    consts: [["id", "offersSection", 1, "w-full", "h-auto", "justify-center", "flex", "max-w-[1200px]", "2xl:max-w-[1200px]", "mx-auto", "scroll-my-20"], ["animateDivEntry", "", 1, "hide-before-animate", "w-full"], [1, "templett-flow-header", "text-primaryText"], [1, "flex", "flex-col", "lg:flex-row", "w-full", "pb-4", "lg:pt-12"], [1, "flex", "w-[75%]", "lg:w-1/3", "h-auto", "mx-auto", "my-12", "lg:my-0", "lg:mx-8"], ["leftOffersDiv", ""], [1, "flex-col", "flex", "w-full", "h-full", "bg-secondary", "rounded-default", "p-8"], ["offerCard", ""], [1, "w-full", "justify-center", "flex", "flex-col"], [1, "text-3xl", "text-secondaryText", "text-center", "font-semibold"], [1, "text-xl", "text-secondaryText", "text-center", "mt-4"], [1, "w-full", "h-[1px]", "bg-primary", "mx-auto", "my-8"], ["class", "flex flex-row w-full justify-between my-2 lg:my-3", 4, "ngFor", "ngForOf"], [1, "btn", "h-20", "mt-4", "cursor-pointer", 3, "click"], [1, "btn-inner"], [1, "flex", "w-[75%]", "lg:w-1/3", "h-auto", "scale-110", "mx-auto", "my-12", "lg:my-0", "lg:mx-8"], ["centerOffersDiv", ""], [1, "card-ribbon"], [1, "btn2", "h-20", "mt-4", "cursor-pointer", 3, "click"], ["rightOffersDiv", ""], [1, "flex", "flex-row", "w-full", "justify-between", "my-2", "lg:my-3"], [1, "flex", "w-1/5", "h-8"], ["alt", "Bullet Point Icon", 3, "src"], [1, "text-base", "lg:text-lg", "w-4/5", "items-center", "flex", "text-left", "ml-4"]],
    template: function OffersSectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Verksamheter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "div", 4, 5)(7, "div", 6, 7)(9, "div", 8)(10, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Gym ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " F\u00F6rb\u00E4ttra tr\u00E4ningsupplevelsen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, OffersSectionComponent_div_15_Template, 5, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OffersSectionComponent_Template_button_click_16_listener() {
          return ctx.scrollToSection("footerSection");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h6", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Kontakta oss");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 15, 16)(21, "div", 6, 7)(23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Popul\u00E4rast");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 8)(26, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Butiker ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " Digitalisera och informera ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, OffersSectionComponent_div_31_Template, 5, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OffersSectionComponent_Template_button_click_32_listener() {
          return ctx.scrollToSection("footerSection");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "h6", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Kontakta oss");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 4, 19)(37, "div", 6, 7)(39, "div", 8)(40, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " Fler verksamheter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " Vi skr\u00E4ddarsyr en l\u00F6sning ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, OffersSectionComponent_div_45_Template, 5, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OffersSectionComponent_Template_button_click_46_listener() {
          return ctx.scrollToSection("footerSection");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "h6", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Kontakta oss");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.bulletPoints);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.bulletPoints2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.bulletPoints3);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _directives_animate_div_directive__WEBPACK_IMPORTED_MODULE_0__.AnimateDivDirective],
    styles: [".btn[_ngcontent-%COMP%], .btn2[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 13px 20px;\n  color: #000000;\n  text-decoration: none;\n  position: relative;\n  background: transparent;\n  border: 2px solid #e1e1e1;\n  text-align: center;\n  text-indent: 2px;\n  transition: color 0.1s linear 0.05s;\n}\n.btn[_ngcontent-%COMP%]::before, .btn2[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 100%;\n  height: 1px;\n  background: #e1e1e1;\n  z-index: 1;\n  opacity: 0;\n  transition: height 0.2s ease, top 0.2s ease, opacity 0s linear 0.2s;\n}\n.btn[_ngcontent-%COMP%]::after, .btn2[_ngcontent-%COMP%]::after {\n  transition: border 0.1s linear 0.05s;\n}\n.btn[_ngcontent-%COMP%]   .btn-inner[_ngcontent-%COMP%], .btn2[_ngcontent-%COMP%]   .btn-inner[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n.btn[_ngcontent-%COMP%]:hover, .btn2[_ngcontent-%COMP%]:hover {\n  color: #373737;\n  transition: color 0.1s linear 0s;\n}\n.btn[_ngcontent-%COMP%]:hover::before, .btn2[_ngcontent-%COMP%]:hover::before {\n  top: 0;\n  height: 100%;\n  opacity: 1;\n  transition: height 0.2s ease, top 0.2s ease, opacity 0s linear 0s;\n}\n.btn[_ngcontent-%COMP%]:hover::after, .btn2[_ngcontent-%COMP%]:hover::after {\n  border-color: #373737;\n  transition: border 0.1s linear 0s;\n}\n\n.btn2[_ngcontent-%COMP%] {\n  border: 2px solid #FFD700;\n}\n.btn2[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 100%;\n  height: 1px;\n  background: #FFD700;\n  z-index: 1;\n  opacity: 0;\n  transition: height 0.2s ease, top 0.2s ease, opacity 0s linear 0.2s;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9vZmZlcnMtc2VjdGlvbi9vZmZlcnMtc2VjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUNBQUE7QUFBSjtBQUdJO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsbUVBQUE7QUFEUjtBQUlJO0VBQ0ksb0NBQUE7QUFGUjtBQUtJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FBSFI7QUFNSTtFQUNJLGNBQUE7RUFDQSxnQ0FBQTtBQUpSO0FBTVE7RUFDSSxNQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxpRUFBQTtBQUpaO0FBT1E7RUFDSSxxQkFBQTtFQUNBLGlDQUFBO0FBTFo7O0FBU0E7RUFDUSx5QkFBQTtBQU5SO0FBT1E7RUFDUSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxtRUFBQTtBQUxoQiIsInNvdXJjZXNDb250ZW50IjpbIi5idG4sIC5idG4yIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDEzcHggMjBweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZTFlMWUxO1xyXG4gICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWluZGVudDogMnB4O1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4xcyBsaW5lYXIgMC4wNXM7XHJcbiAgICBcclxuXHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2UxZTFlMTtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuMnMgZWFzZSwgdG9wIDAuMnMgZWFzZSwgb3BhY2l0eSAwcyBsaW5lYXIgMC4ycztcclxuICAgIH1cclxuXHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyIDAuMXMgbGluZWFyIDAuMDVzO1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4taW5uZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgfVxyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjMzczNzM3O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMXMgbGluZWFyIDBzO1xyXG5cclxuICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuMnMgZWFzZSwgdG9wIDAuMnMgZWFzZSwgb3BhY2l0eSAwcyBsaW5lYXIgMHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzM3MzczNztcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyIDAuMXMgbGluZWFyIDBzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uYnRuMiB7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdGhlbWUoJ2NvbG9ycy50ZXJ0aWFyeScpO1xyXG4gICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdGhlbWUoJ2NvbG9ycy50ZXJ0aWFyeScpOztcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuMnMgZWFzZSwgdG9wIDAuMnMgZWFzZSwgb3BhY2l0eSAwcyBsaW5lYXIgMC4ycztcclxuICAgICAgICAgICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 68202:
/*!*************************************************************************!*\
  !*** ./src/app/components/phone-animation/phone-animation.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PhoneAnimationComponent: () => (/* binding */ PhoneAnimationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 59936);

class PhoneAnimationComponent {
  static #_ = this.ɵfac = function PhoneAnimationComponent_Factory(t) {
    return new (t || PhoneAnimationComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PhoneAnimationComponent,
    selectors: [["app-phone-animation"]],
    decls: 6,
    vars: 0,
    consts: [["openPhoneAnimation", "", 1, "section"], [1, "phonescreen", "flex", "justify-center", "items-center"], ["src", "./assets/images/phone.png", "alt", "train", 1, "z-10", "relative", "top-0", "h-auto", "w-auto"], [1, "justify-center", "items-center", "flex", "w-[93%]", "h-[95%]", "bg-white", "rounded-2xl", "z-50", "absolute", "animate"]],
    template: function PhoneAnimationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " text ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
    },
    styles: [".section[_ngcontent-%COMP%] {\n  background-color: #FFF;\n}\n.section[_ngcontent-%COMP%]   .phonescreen[_ngcontent-%COMP%] {\n  animation-delay: inherit;\n  background-color: white;\n}\n.section[_ngcontent-%COMP%]   .phonescreen[_ngcontent-%COMP%]   .animate[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_openAppAnimation 0.25s linear;\n  animation-play-state: paused;\n  animation-delay: inherit;\n  animation-fill-mode: forwards;\n}\n\n@keyframes _ngcontent-%COMP%_openAppAnimation {\n  to {\n    transform: scale(0);\n  }\n  from {\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9waG9uZS1hbmltYXRpb24vcGhvbmUtYW5pbWF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksc0JBQUE7QUFBSjtBQUNJO0VBQ0ksd0JBQUE7RUFDQSx1QkFBQTtBQUNSO0FBQ1E7RUFDSSx3Q0FBQTtFQUNJLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSw2QkFBQTtBQUNoQjs7QUFNQTtFQUNJO0lBQ0ksbUJBQUE7RUFITjtFQUtFO0lBQ0ksbUJBQUE7RUFITjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5zZWN0aW9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICAgIC5waG9uZXNjcmVlbiB7XHJcbiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiBpbmhlcml0O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxuICAgICAgICAuYW5pbWF0ZXtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBvcGVuQXBwQW5pbWF0aW9uIDAuMjVzIGxpbmVhcjtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkczsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBvcGVuQXBwQW5pbWF0aW9uIHtcclxuICAgIHRvIHtcclxuICAgICAgICB0cmFuc2Zvcm06ICBzY2FsZSgwKTtcclxuICAgIH1cclxuICAgIGZyb20ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogIHNjYWxlKDEpO1xyXG5cclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 94952:
/*!*********************************************************************!*\
  !*** ./src/app/components/product-video/product-video.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductVideoComponent: () => (/* binding */ ProductVideoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 59936);
/* harmony import */ var _directives_animate_div_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../directives/animate-div.directive */ 24995);


class ProductVideoComponent {
  static #_ = this.ɵfac = function ProductVideoComponent_Factory(t) {
    return new (t || ProductVideoComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ProductVideoComponent,
    selectors: [["app-product-video"]],
    decls: 11,
    vars: 0,
    consts: [["id", "productVideoSection", "animateDivEntry", "", 1, "w-full", "h-auto", "justify-center", "items-center", "flex-col", "max-w-[1200px]", "mx-auto", "hide-before-animate"], [1, "flex", "mx-auto", "flex-col-reverse", "lg:flex-row", "w-[80%]", "pt-12", "gap-8"], [1, "flex", "flex-col", "w-full", "lg:w-1/2"], ["leftAboutUsDiv", ""], [1, "text-3xl", "font-semibold", "pb-3", "text-primaryText"], [1, "text-primaryText"], [1, "flex", "w-full", "lg:w-1/2", "pb-8", "lg:pb-0", "lg:mx-4"], ["rightAboutUsDiv", ""], ["width", "100%", "height", "250", "src", "https://www.youtube.com/embed/qp5il7yhM4Y", "title", "YouTube video player", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 1, "rounded-default"]],
    template: function ProductVideoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2, 3)(4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Se v\u00E5r produktvideo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Se v\u00E5r introduktionsvideo till hur Templett stickers fungerar. H\u00E4r f\u00F6rtydligar vi allt som kan beh\u00F6vas veta. Denna video \u00E4r \u00E4nnu ej inspelad och kommer s\u00E5 sm\u00E5ning om att dyka upp h\u00E4r. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "iframe", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
    },
    dependencies: [_directives_animate_div_directive__WEBPACK_IMPORTED_MODULE_0__.AnimateDivDirective],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 39452:
/*!*********************************************************!*\
  !*** ./src/app/components/sidenav/sidenav.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidenavComponent: () => (/* binding */ SidenavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 59936);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ 46012);



class SidenavComponent {
  constructor(el) {
    this.el = el;
    this.isExpanded = false;
    this.isExpandedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  scrollToSection(targetSectionId) {
    this.isExpanded = !this.isExpanded;
    this.isExpandedChange.emit(this.isExpanded);
    document.body.classList.remove("no-scroll");
    const checkboxEl = this.el.nativeElement.ownerDocument.getElementById("animatedCheck");
    if (checkboxEl) {
      checkboxEl.checked = !checkboxEl.checked;
    }
    const targetEl = this.el.nativeElement.ownerDocument.getElementById(targetSectionId);
    if (targetEl) {
      targetEl.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
        // Adding an offset to the scroll position
        // Note: scrollIntoViewOptions might not be supported in all browsers
        scrollIntoViewOptions: {
          block: "start",
          inline: "start",
          behavior: "smooth",
          offsetTop: 100 // Adjust this to set the offset from the top
        }
      });
    }
  }
  static #_ = this.ɵfac = function SidenavComponent_Factory(t) {
    return new (t || SidenavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SidenavComponent,
    selectors: [["app-sidenav"]],
    inputs: {
      isExpanded: "isExpanded"
    },
    outputs: {
      isExpandedChange: "isExpandedChange"
    },
    decls: 19,
    vars: 1,
    consts: [[1, "sidenav", "p-8"], [3, "click"], [1, "text-primaryText", "text-lg", "py-2", "cursor-pointer"], [1, "h-32", "justify-center", "items-center", "flex", "absolute", "bottom-0"], ["alt", "Logo", "src", "./assets/images/templett_logo.svg", 1, "h-24", "w-24", "my-4"]],
    template: function SidenavComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "ul")(2, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_Template_li_click_2_listener() {
          return ctx.scrollToSection("aboutUsSection");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Om");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_Template_li_click_5_listener() {
          return ctx.scrollToSection("ourProductsSection");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " V\u00E5ra produkter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_Template_li_click_8_listener() {
          return ctx.scrollToSection("benefitsSection");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Varf\u00F6r Templett? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_Template_li_click_11_listener() {
          return ctx.scrollToSection("faqSection");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Fr\u00E5gor och svar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_Template_li_click_14_listener() {
          return ctx.scrollToSection("footerSection");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Kontakta oss");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@sidenavAnimation", ctx.isExpanded ? "expanded" : "collapsed");
      }
    },
    styles: [".sidenav[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 4rem;\n  left: 0;\n  height: calc(100% - 4rem);\n  width: 100vw;\n  background-color: #071420;\n  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);\n  z-index: 1000;\n  overflow-y: auto;\n  transform: translateX(-100%);\n  opacity: 0;\n}\n\n.sidenav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n}\n\n.sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHdDQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQSw0QkFBQTtBQUNBO0VBQ0UsY0FBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDRyZW07XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDRyZW0pO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtZShcImNvbG9ycy5wcmltYXJ5XCIpO1xyXG4gIGJveC1zaGFkb3c6IDJweCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLnNpZGVuYXYgdWwge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uc2lkZW5hdiBsaSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLyogRGVmaW5lIGFuaW1hdGlvbiBzdHlsZXMgKi9cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)("sidenavAnimation", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)("collapsed", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
        transform: "translateX(-100%)",
        opacity: 0
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)("expanded", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
        transform: "translateX(0)",
        opacity: 0.98
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)("collapsed => expanded", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)("300ms ease-in")), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)("expanded => collapsed", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)("300ms ease-out"))])]
    }
  });
}

/***/ }),

/***/ 54512:
/*!*********************************************************************!*\
  !*** ./src/app/components/stats-section/stats-section.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatsSectionComponent: () => (/* binding */ StatsSectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 59936);
/* harmony import */ var _directives_animated_increment_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../directives/animated-increment.directive */ 38959);
/* harmony import */ var _directives_animate_div_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../directives/animate-div.directive */ 24995);



class StatsSectionComponent {
  static #_ = this.ɵfac = function StatsSectionComponent_Factory(t) {
    return new (t || StatsSectionComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: StatsSectionComponent,
    selectors: [["app-stats-section"]],
    decls: 32,
    vars: 3,
    consts: [[1, "w-full", "h-auto", "justify-center", "flex", "max-w-[1100px]", "2xl:max-w-[1300px]", "mx-auto"], ["animateDivEntry", "", 1, "hide-before-animate", "w-full"], [1, "templett-flow-header", "text-primaryText"], [1, "flex", "flex-col", "lg:flex-row", "gap-8", "w-full", "py-4", "items-center"], [1, "flex", "w-[90%]", "lg:w-1/3", "h-auto"], ["leftStatsDiv", ""], [1, "flex-col", "flex", "w-full", "h-full", "bg-secondary", "rounded-default", "p-8"], ["statCard", ""], [1, "w-full", "justify-center", "flex", "flex-col"], [1, "text-4xl", "text-secondaryText", "text-center", "font-semibold", 3, "animateIncrement"], [1, "text-xl", "text-secondaryText", "text-center", "mt-3"], ["centerStatsDiv", ""], ["rightStatsDiv", ""]],
    template: function StatsSectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Statistik");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "div", 4, 5)(7, "div", 6, 7)(9, "div", 8)(10, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " 0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " Dagliga anv\u00E4ndare ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 4, 11)(16, "div", 6, 7)(18, "div", 8)(19, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " 0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " Stickersdesigner ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 4, 12)(25, "div", 6, 7)(27, "div", 8)(28, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " 0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " Aktiva kunder ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("animateIncrement", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("animateIncrement", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("animateIncrement", 100);
      }
    },
    dependencies: [_directives_animated_increment_directive__WEBPACK_IMPORTED_MODULE_0__.AnimateIncrementDirective, _directives_animate_div_directive__WEBPACK_IMPORTED_MODULE_1__.AnimateDivDirective],
    styles: [".pulsate-once[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_pulsate 0.3s ease-in-out;\n}\n\n@keyframes _ngcontent-%COMP%_pulsate {\n  0% {\n    transform: scale(1);\n    opacity: 0.6;\n  }\n  33% {\n    transform: scale(1.1);\n    opacity: 0.8;\n  }\n  66% {\n    transform: scale(0.9);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zdGF0cy1zZWN0aW9uL3N0YXRzLXNlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQ0FBQTtBQUNKOztBQUVBO0VBQ0k7SUFDSSxtQkFBQTtJQUNRLFlBQUE7RUFDZDtFQUVFO0lBQ0kscUJBQUE7SUFDUSxZQUFBO0VBQWQ7RUFHRTtJQUNJLHFCQUFBO0lBQ0EsVUFBQTtFQUROO0VBSUU7SUFDSSxtQkFBQTtJQUNRLFVBQUE7RUFGZDtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnB1bHNhdGUtb25jZSB7XHJcbiAgICBhbmltYXRpb246IHB1bHNhdGUgLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHB1bHNhdGUge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAzMyUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgIH1cclxuXHJcbiAgICA2NiUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG5cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 43209:
/*!*********************************************************!*\
  !*** ./src/app/components/sticker/sticker.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StickerComponent: () => (/* binding */ StickerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 59936);

class StickerComponent {
  static #_ = this.ɵfac = function StickerComponent_Factory(t) {
    return new (t || StickerComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: StickerComponent,
    selectors: [["app-sticker"]],
    inputs: {
      title: "title"
    },
    decls: 11,
    vars: 1,
    consts: [[1, "bg-white", "w-[320px]", "lg:w-[435px]", "h-[100px]", "lg:h-[120px]", "rounded-[18px]", "flex", "flex-col", "justify-center", "items-center", "scale-75"], [1, "flex", "text-[#E13205]", "text-lg", "lg:text-xl", "font-semibold", "pb-2"], [1, "flex", "text-white", "rounded-[18px]", "bg-[#E13205]", "text-xl", "font-semibold", "w-auto", "lg:w-[300px]", "text-center", "items-center"], [1, "flex", "px-8", "py-2", "mx-auto", "text-xs", "lg:text-lg"], [1, "icon"], [1, "flex", "text-[#8D8D8D]", "pt-2", "text-xs", "lg:text-sm", "font-semibold"]],
    template: function StickerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2)(5, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Blippa mig");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5)(9, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "H\u00E5ll telefonen mot texten");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
      }
    },
    styles: [".icon[_ngcontent-%COMP%] {\n  background-image: url('nfc-scan.svg');\n  background-repeat: no-repeat;\n  background-size: contain;\n  height: 96px;\n  width: 96px;\n  position: absolute;\n  right: 20px;\n  top: 20px;\n}\n\n@media screen and (max-width: 1024px) {\n  .icon[_ngcontent-%COMP%] {\n    height: 54px;\n    width: 54px;\n    position: absolute;\n    right: 65px;\n    top: 32px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zdGlja2VyL3N0aWNrZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFDRjs7QUFDQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxTQUFBO0VBRUY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL25mYy1zY2FuLnN2Z1wiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICBoZWlnaHQ6IDk2cHg7XHJcbiAgd2lkdGg6IDk2cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG4gIHRvcDogMjBweDtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAuaWNvbiB7XHJcbiAgICBoZWlnaHQ6IDU0cHg7XHJcbiAgICB3aWR0aDogNTRweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiA2NXB4O1xyXG4gICAgdG9wOiAzMnB4O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 43273:
/*!***********************************************************************************************!*\
  !*** ./src/app/components/vertical-rotating-carousel/vertical-rotating-carousel.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VerticalRotatingCarouselComponent: () => (/* binding */ VerticalRotatingCarouselComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 59936);
/* harmony import */ var _sticker_sticker_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sticker/sticker.component */ 43209);


class VerticalRotatingCarouselComponent {
  static #_ = this.ɵfac = function VerticalRotatingCarouselComponent_Factory(t) {
    return new (t || VerticalRotatingCarouselComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: VerticalRotatingCarouselComponent,
    selectors: [["app-vertical-rotating-carousel"]],
    decls: 22,
    vars: 10,
    consts: [[1, "wrapper"], [1, "carousel"], [1, "carousel__item"], [3, "title"]],
    template: function VerticalRotatingCarouselComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-sticker", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "app-sticker", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-sticker", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "app-sticker", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "app-sticker", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "app-sticker", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "app-sticker", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "app-sticker", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "app-sticker", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "app-sticker", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "V\u00E5ra erbjudanden!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Veckans annonsbrev");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Veckans middagstips");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Sp\u00E4nnande Frukost-tips");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Slumpa ett recept");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Vi s\u00F6ker kollegor");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Bygg ett marabouhus!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "V\u00E5ra erbjudanden!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Veckans annonsbrev");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Veckans middagstips");
      }
    },
    dependencies: [_sticker_sticker_component__WEBPACK_IMPORTED_MODULE_0__.StickerComponent],
    styles: ["*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n}\n\nbody[_ngcontent-%COMP%], .cd__main[_ngcontent-%COMP%] {\n  font-weight: 400;\n  height: 100vh;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  background: linear-gradient(60deg, #420285, #08bdbd);\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.carousel[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.carousel__item[_ngcontent-%COMP%] {\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  width: 100%;\n  padding: 0 12px;\n  opacity: 0;\n  filter: drop-shadow(0 2px 2px #555);\n  will-change: transform, opacity;\n  animation: _ngcontent-%COMP%_carousel-animate-vertical 27s linear infinite;\n}\n\n.carousel__item[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: -3s;\n}\n\n.carousel__item[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0s;\n}\n\n.carousel__item[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 3s;\n}\n\n.carousel__item[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 6s;\n}\n\n.carousel__item[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: 9s;\n}\n\n.carousel__item[_ngcontent-%COMP%]:nth-child(6) {\n  animation-delay: 12s;\n}\n\n.carousel__item[_ngcontent-%COMP%]:nth-child(7) {\n  animation-delay: 15s;\n}\n\n.carousel__item[_ngcontent-%COMP%]:nth-child(8) {\n  animation-delay: 18s;\n}\n\n.carousel__item[_ngcontent-%COMP%]:last-child {\n  animation-delay: -6s;\n}\n@keyframes _ngcontent-%COMP%_carousel-animate-vertical {\n  0% {\n    transform: translateY(100%) scale(0.5);\n    opacity: 0;\n    visibility: hidden;\n  }\n  3%, 11.1111111111% {\n    transform: translateY(100%) scale(0.7);\n    opacity: 0.4;\n    visibility: visible;\n  }\n  14.1111111111%, 22.2222222222% {\n    transform: translateY(0) scale(1);\n    opacity: 1;\n    visibility: visible;\n  }\n  25.2222222222%, 33.3333333333% {\n    transform: translateY(-100%) scale(0.7);\n    opacity: 0.4;\n    visibility: visible;\n  }\n  36.3333333333% {\n    transform: translateY(-100%) scale(0.5);\n    opacity: 0;\n    visibility: visible;\n  }\n  100% {\n    transform: translateY(-100%) scale(0.5);\n    opacity: 0;\n    visibility: hidden;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy92ZXJ0aWNhbC1yb3RhdGluZy1jYXJvdXNlbC92ZXJ0aWNhbC1yb3RhdGluZy1jYXJvdXNlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0VBR0Usc0JBQUE7QUFDRjs7QUFFQTs7RUFFRSxnQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLG9EQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLG1DQUFBO0VBQ0EsK0JBQUE7RUFFQSx3REFBQTtBQUNGOztBQUVBO0VBRUUsb0JBQUE7QUFDRjs7QUFFQTtFQUVFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFFRSxtQkFBQTtBQUNGOztBQUVBO0VBRUUsbUJBQUE7QUFDRjs7QUFFQTtFQUVFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFFRSxvQkFBQTtBQUNGOztBQUVBO0VBRUUsb0JBQUE7QUFDRjs7QUFFQTtFQUVFLG9CQUFBO0FBQ0Y7O0FBRUE7RUFFRSxvQkFBQTtBQUNGO0FBc0NBO0VBQ0U7SUFDRSxzQ0FBQTtJQUNBLFVBQUE7SUFDQSxrQkFBQTtFQUhGO0VBS0E7SUFFRSxzQ0FBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtFQUpGO0VBTUE7SUFFRSxpQ0FBQTtJQUNBLFVBQUE7SUFDQSxtQkFBQTtFQUxGO0VBT0E7SUFFRSx1Q0FBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtFQU5GO0VBUUE7SUFDRSx1Q0FBQTtJQUNBLFVBQUE7SUFDQSxtQkFBQTtFQU5GO0VBUUE7SUFDRSx1Q0FBQTtJQUNBLFVBQUE7SUFDQSxrQkFBQTtFQU5GO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIqLFxyXG4qOjpiZWZvcmUsXHJcbio6OmFmdGVyIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5ib2R5LFxyXG4uY2RfX21haW4ge1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLndyYXBwZXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzQyMDI4NSwgIzA4YmRiZCk7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJvdXNlbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmNhcm91c2VsX19pdGVtIHtcclxuICB6LWluZGV4OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMCAxMnB4O1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDJweCAycHggIzU1NSk7XHJcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybSwgb3BhY2l0eTtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogY2Fyb3VzZWwtYW5pbWF0ZS12ZXJ0aWNhbCAyN3MgbGluZWFyIGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbjogY2Fyb3VzZWwtYW5pbWF0ZS12ZXJ0aWNhbCAyN3MgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG4uY2Fyb3VzZWxfX2l0ZW06bnRoLWNoaWxkKDEpIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogY2FsYygzcyAqIC0xKTtcclxuICBhbmltYXRpb24tZGVsYXk6IGNhbGMoM3MgKiAtMSk7XHJcbn1cclxuXHJcbi5jYXJvdXNlbF9faXRlbTpudGgtY2hpbGQoMikge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiBjYWxjKDNzICogMCk7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiBjYWxjKDNzICogMCk7XHJcbn1cclxuXHJcbi5jYXJvdXNlbF9faXRlbTpudGgtY2hpbGQoMykge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiBjYWxjKDNzICogMSk7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiBjYWxjKDNzICogMSk7XHJcbn1cclxuXHJcbi5jYXJvdXNlbF9faXRlbTpudGgtY2hpbGQoNCkge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiBjYWxjKDNzICogMik7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiBjYWxjKDNzICogMik7XHJcbn1cclxuXHJcbi5jYXJvdXNlbF9faXRlbTpudGgtY2hpbGQoNSkge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiBjYWxjKDNzICogMyk7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiBjYWxjKDNzICogMyk7XHJcbn1cclxuXHJcbi5jYXJvdXNlbF9faXRlbTpudGgtY2hpbGQoNikge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiBjYWxjKDNzICogNCk7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiBjYWxjKDNzICogNCk7XHJcbn1cclxuXHJcbi5jYXJvdXNlbF9faXRlbTpudGgtY2hpbGQoNykge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiBjYWxjKDNzICogNSk7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiBjYWxjKDNzICogNSk7XHJcbn1cclxuXHJcbi5jYXJvdXNlbF9faXRlbTpudGgtY2hpbGQoOCkge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiBjYWxjKDNzICogNik7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiBjYWxjKDNzICogNik7XHJcbn1cclxuXHJcbi5jYXJvdXNlbF9faXRlbTpsYXN0LWNoaWxkIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogY2FsYygtM3MgKiAyKTtcclxuICBhbmltYXRpb24tZGVsYXk6IGNhbGMoLTNzICogMik7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBjYXJvdXNlbC1hbmltYXRlLXZlcnRpY2FsIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSkgc2NhbGUoMC41KTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG4gIDMlLFxyXG4gIDExLjExMTExMTExMTElIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKSBzY2FsZSgwLjcpO1xyXG4gICAgb3BhY2l0eTogMC40O1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB9XHJcbiAgMTQuMTExMTExMTExMSUsXHJcbiAgMjIuMjIyMjIyMjIyMiUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDEpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfVxyXG4gIDI1LjIyMjIyMjIyMjIlLFxyXG4gIDMzLjMzMzMzMzMzMzMlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSkgc2NhbGUoMC43KTtcclxuICAgIG9wYWNpdHk6IDAuNDtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfVxyXG4gIDM2LjMzMzMzMzMzMzMlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSkgc2NhbGUoMC41KTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSkgc2NhbGUoMC41KTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGNhcm91c2VsLWFuaW1hdGUtdmVydGljYWwge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKSBzY2FsZSgwLjUpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcbiAgMyUsXHJcbiAgMTEuMTExMTExMTExMSUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpIHNjYWxlKDAuNyk7XHJcbiAgICBvcGFjaXR5OiAwLjQ7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIH1cclxuICAxNC4xMTExMTExMTExJSxcclxuICAyMi4yMjIyMjIyMjIyJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMSk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB9XHJcbiAgMjUuMjIyMjIyMjIyMiUsXHJcbiAgMzMuMzMzMzMzMzMzMyUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKSBzY2FsZSgwLjcpO1xyXG4gICAgb3BhY2l0eTogMC40O1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB9XHJcbiAgMzYuMzMzMzMzMzMzMyUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKSBzY2FsZSgwLjUpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKSBzY2FsZSgwLjUpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 24995:
/*!*****************************************************!*\
  !*** ./src/app/directives/animate-div.directive.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimateDivDirective: () => (/* binding */ AnimateDivDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 59936);

class AnimateDivDirective {
  constructor(elementRef, renderer) {
    this.elementRef = elementRef;
    this.renderer = renderer;
  }
  ngOnInit() {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.01
    };
    this.intersectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateElement();
          this.intersectionObserver.unobserve(this.elementRef.nativeElement);
        }
      });
    }, options);
    this.intersectionObserver.observe(this.elementRef.nativeElement);
  }
  ngOnDestroy() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }
  animateElement() {
    // Add your animation class here
    this.renderer.addClass(this.elementRef.nativeElement, "animate-div");
  }
  static #_ = this.ɵfac = function AnimateDivDirective_Factory(t) {
    return new (t || AnimateDivDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: AnimateDivDirective,
    selectors: [["", "animateDivEntry", ""]]
  });
}

/***/ }),

/***/ 38959:
/*!************************************************************!*\
  !*** ./src/app/directives/animated-increment.directive.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimateIncrementDirective: () => (/* binding */ AnimateIncrementDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 59936);

class AnimateIncrementDirective {
  constructor(elementRef, renderer) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.finalValue = 0;
    this.animated = false;
  }
  ngOnInit() {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.animated) {
          this.animateValue(0, this.finalValue);
          this.animated = true;
          this.observer?.unobserve(this.elementRef.nativeElement);
        }
      });
    });
    this.observer.observe(this.elementRef.nativeElement);
  }
  ngOnDestroy() {
    this.observer?.disconnect();
  }
  animateValue(start, end) {
    let current = start;
    const increment = Math.ceil(end / 100);
    const interval = setInterval(() => {
      current += increment;
      if (current >= end) {
        current = end;
        clearInterval(interval);
      }
      this.elementRef.nativeElement.textContent = current.toString();
      if (current == end) {
        const element = this.elementRef.nativeElement;
        element.textContent = "Kommer snart";
        this.renderer.addClass(element, "pulsate-once");
        setTimeout(() => {
          this.renderer.removeClass(element, "pulsate-once");
        }, 1000);
      }
    }, 10);
  }
  static #_ = this.ɵfac = function AnimateIncrementDirective_Factory(t) {
    return new (t || AnimateIncrementDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: AnimateIncrementDirective,
    selectors: [["", "animateIncrement", ""]],
    inputs: {
      finalValue: ["animateIncrement", "finalValue"]
    }
  });
}

/***/ }),

/***/ 34595:
/*!***************************************************************!*\
  !*** ./src/app/directives/hero-scroll-animation.directive.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScrollHeroAnimationDirective: () => (/* binding */ ScrollHeroAnimationDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 59936);

class ScrollHeroAnimationDirective {
  scroll() {
    const primaryElement = this.el.nativeElement.querySelector(".animate");
    const secondaryElement = this.el.nativeElement.querySelector(".animate-secondary");
    const thirdElement = this.el.nativeElement.querySelector(".animate-third");
    const fourthElement = this.el.nativeElement.querySelector(".tunnel");
    const rect = this.el.nativeElement.getBoundingClientRect();
    let primaryScroll = this.mapRange(0, window.innerHeight, 0, 1, rect.top + rect.height / 2);
    let secondaryScroll = primaryScroll;
    let thirdScroll = primaryScroll;
    let fourthScroll = primaryScroll;
    primaryScroll = primaryScroll + 1.4;
    secondaryScroll = secondaryScroll + 0.6;
    thirdScroll = thirdScroll + 0.3;
    fourthScroll = fourthScroll + 2.0;
    primaryScroll = primaryScroll < 0 ? 0 : primaryScroll > 1 ? 1 : primaryScroll;
    secondaryScroll = secondaryScroll < 0 ? 0 : secondaryScroll > 1 ? 1 : secondaryScroll;
    thirdScroll = thirdScroll < 0 ? 0 : thirdScroll > 1 ? 1 : thirdScroll;
    fourthScroll = fourthScroll < 0 ? 0 : fourthScroll > 1 ? 1 : fourthScroll;
    this.primaryDelay = `-${primaryScroll.toFixed(2)}s`;
    this.secondaryDelay = `-${secondaryScroll.toFixed(2)}s`;
    this.thirdDelay = `-${thirdScroll.toFixed(2)}s`;
    this.fourthDelay = `-${fourthScroll.toFixed(2)}s`;
    this.renderer.setStyle(primaryElement, "animation-delay", this.primaryDelay);
    this.renderer.setStyle(secondaryElement, "animation-delay", this.secondaryDelay);
    this.renderer.setStyle(thirdElement, "animation-delay", this.thirdDelay);
    this.renderer.setStyle(fourthElement, "animation-delay", this.fourthDelay);
  }
  mapRange(a1, a2, b1, b2, value) {
    return (b1 + (value - a1) * (b2 - b1) / (a2 - a1)) * -1;
  }
  constructor(el, renderer) {
    this.el = el;
    this.renderer = renderer;
  }
  static #_ = this.ɵfac = function ScrollHeroAnimationDirective_Factory(t) {
    return new (t || ScrollHeroAnimationDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: ScrollHeroAnimationDirective,
    selectors: [["", "appScrollAnimation", ""]],
    hostBindings: function ScrollHeroAnimationDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ScrollHeroAnimationDirective_scroll_HostBindingHandler() {
          return ctx.scroll();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
      }
    }
  });
}

/***/ }),

/***/ 64088:
/*!****************************************************!*\
  !*** ./src/app/directives/rotate-div.directive.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RotateOnScrollDirective: () => (/* binding */ RotateOnScrollDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 59936);

class RotateOnScrollDirective {
  constructor(elRef, renderer) {
    this.elRef = elRef;
    this.renderer = renderer;
    this.rotationIncrement = 30;
  }
  ngOnInit() {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5
    };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentRotation = this.getCurrentRotation(entry.target);
          const newRotation = currentRotation + this.rotationIncrement; // Use rotation increment from Input
          console.log("rotate");
          this.renderer.setStyle(entry.target, "transition", "transform 1s , opacity 1s");
          this.renderer.setStyle(entry.target, "opacity", "1");
          this.renderer.setStyle(entry.target, "transform", `rotate(${newRotation}deg)`);
          observer.unobserve(entry.target);
        }
      });
    }, options);
    observer.observe(this.elRef.nativeElement);
  }
  getCurrentRotation(element) {
    const transformString = window.getComputedStyle(element).getPropertyValue("transform");
    if (transformString && transformString !== "none") {
      // Extract the current rotation from the transform matrix
      const values = transformString.split("(")[1].split(")")[0].split(",");
      const a = parseFloat(values[0]);
      const b = parseFloat(values[1]);
      const rotation = Math.round(Math.atan2(b, a) * (180 / Math.PI));
      return rotation >= 0 ? rotation : rotation + 360; // Ensure positive rotation value
    }

    return 0;
  }
  static #_ = this.ɵfac = function RotateOnScrollDirective_Factory(t) {
    return new (t || RotateOnScrollDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: RotateOnScrollDirective,
    selectors: [["", "rotateOnScroll", ""]],
    inputs: {
      rotationIncrement: "rotationIncrement"
    }
  });
}

/***/ }),

/***/ 49174:
/*!****************************!*\
  !*** ./src/main.server.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppServerModule: () => (/* reexport safe */ _app_app_server_module__WEBPACK_IMPORTED_MODULE_0__.AppServerModule)
/* harmony export */ });
/* harmony import */ var _app_app_server_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.server.module */ 21463);


/***/ }),

/***/ 18967:
/*!****************************************!*\
  !*** ./node_modules/express/lib/ sync ***!
  \****************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 18967;
module.exports = webpackEmptyContext;

/***/ }),

/***/ 50852:
/*!******************************!*\
  !*** external "async_hooks" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("async_hooks");

/***/ }),

/***/ 14300:
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ 6113:
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 82361:
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 57147:
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 13685:
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 95687:
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 41808:
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ 87561:
/*!**************************!*\
  !*** external "node:fs" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:fs");

/***/ }),

/***/ 49411:
/*!****************************!*\
  !*** external "node:path" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:path");

/***/ }),

/***/ 22037:
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 71017:
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 63477:
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ 12781:
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 71576:
/*!*********************************!*\
  !*** external "string_decoder" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");

/***/ }),

/***/ 39512:
/*!*************************!*\
  !*** external "timers" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("timers");

/***/ }),

/***/ 76224:
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ 57310:
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 73837:
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 59796:
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		__webpack_require__.O(undefined, [736], () => (__webpack_require__(56394)))
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [736], () => (__webpack_require__(34991)))
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + (chunkId === 736 ? "vendor" : chunkId) + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			179: 1
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.require = (chunkId) => (installedChunks[chunkId]);
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 			__webpack_require__.O();
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("./" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			__webpack_require__.e(736);
/******/ 			return next();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map