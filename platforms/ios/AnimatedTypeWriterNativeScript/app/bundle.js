require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/@nativescript/webpack/helpers/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/@nativescript/webpack/helpers/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("~@nativescript/theme/css/default.css", () => __webpack_require__("../node_modules/@nativescript/webpack/helpers/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/default.css"));
global.registerModule("@nativescript/theme/css/default.css", () => __webpack_require__("../node_modules/@nativescript/webpack/helpers/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/default.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"comment","comment":"\nIn NativeScript, the app.css file is where you place CSS rules that\nyou would like to apply to your entire application. Check out\nhttp://docs.nativescript.org/ui/styling for a full list of the CSS\nselectors and properties you can use to style UI components.\n\n/*\nIn many cases you may want to use the NativeScript core theme instead\nof writing your own CSS rules. You can learn more about the \nNativeScript core theme at https://github.com/nativescript/theme\nThe imported CSS rules must precede all other types of rules.\n"},{"type":"import","import":"\"~@nativescript/theme/css/core.css\""},{"type":"import","import":"\"~@nativescript/theme/css/default.css\""},{"type":"comment","comment":" Place any CSS rules you want to apply on both iOS and Android here.\nThis is where the vast majority of your CSS code goes. "},{"type":"comment","comment":"\nThe following CSS rule changes the font size of all Buttons that have the\n\"-primary\" class modifier.\n"},{"type":"rule","selectors":["Button.-primary"],"declarations":[{"type":"declaration","property":"font-size","value":"18"}]}],"parsingErrors":[]}};;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app/animated-type-writer/animated-type-writer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimatedTypeWriterComponent", function() { return AnimatedTypeWriterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _animation_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/animation-helper.ts");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/angular/__ivy_ngcc__/fesm2015/nativescript-angular.js");




class AnimatedTypeWriterComponent {
    constructor() { }
    ngOnInit() { }
    onTap(args) {
        const view = args.object;
        const lbl = view.page.getViewById('lbl');
        const finalText = "Hello beautiful world";
        const def = {
            curve: t => t,
            getRange: () => { return { from: 0, to: finalText.length }; },
            step: (v) => {
                lbl.text = finalText.substring(0, Math.ceil(v));
            }
        };
        Object(_animation_helper__WEBPACK_IMPORTED_MODULE_1__["animate"])(2000, [def]);
    }
}
AnimatedTypeWriterComponent.ɵfac = function AnimatedTypeWriterComponent_Factory(t) { return new (t || AnimatedTypeWriterComponent)(); };
AnimatedTypeWriterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnimatedTypeWriterComponent, selectors: [["ns-animated-type-writer"]], decls: 5, vars: 0, consts: [["title", "Animated Type Writer", "backgroundColor", "lightBlue"], [1, "p-20"], ["text", "Tap the button", 1, "h1", "text-center"], ["text", "TAP", 1, "-primary", 3, "tap"], ["id", "lbl", "text", "Hello World", 1, "h2", "text-center"]], template: function AnimatedTypeWriterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ActionBar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "StackLayout", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "Label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "Button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tap", function AnimatedTypeWriterComponent_Template_Button_tap_3_listener($event) { return ctx.onTap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "Label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__["ActionBarComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnimatedTypeWriterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ns-animated-type-writer',
                templateUrl: 'animated-type-writer.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./app/animation-helper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amountFromTo", function() { return amountFromTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animate", function() { return animate; });
function amountFromTo(range) {
    return (t) => {
        const ret = range.from + t * (range.to - range.from);
        return ret;
    };
}
function animate(duration, defs) {
    return new Promise((resolve) => {
        const start = new Date();
        const timerId = setInterval(() => {
            const timePassed = new Date().valueOf() - start.valueOf();
            let progress = timePassed / duration;
            if (progress > 1)
                progress = 1;
            for (let i = 0; i < defs.length; i++) {
                const def = defs[i];
                const delta = def.curve(progress);
                const v = amountFromTo(def.getRange())(delta);
                def.step(v);
            }
            if (progress === 1) {
                clearInterval(timerId);
                resolve;
            }
        }, 17);
    });
}


/***/ }),

/***/ "./app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/__ivy_ngcc__/fesm2015/nativescript-angular.js");
/* harmony import */ var _app_animated_type_writer_animated_type_writer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/animated-type-writer/animated-type-writer.component.ts");





const routes = [
    { path: "", redirectTo: "/animated-type-writer", pathMatch: "full" },
    { path: "animated-type-writer", component: _app_animated_type_writer_animated_type_writer_component__WEBPACK_IMPORTED_MODULE_2__["AnimatedTypeWriterComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forRoot(routes)], _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]], exports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forRoot(routes)],
                exports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/__ivy_ngcc__/fesm2015/nativescript-angular.js");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["ns-app"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "GridLayout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "page-router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["PageRouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "ns-app",
                templateUrl: "./app.component.html"
            }]
    }], null, null); })();


/***/ }),

/***/ "./app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/__ivy_ngcc__/fesm2015/nativescript-angular.js");
/* harmony import */ var _animated_type_writer_animated_type_writer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/animated-type-writer/animated-type-writer.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/app.component.ts");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _animated_type_writer_animated_type_writer_component__WEBPACK_IMPORTED_MODULE_2__["AnimatedTypeWriterComponent"]], imports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                bootstrap: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
                ],
                imports: [
                    _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
                ],
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _animated_type_writer_animated_type_writer_component__WEBPACK_IMPORTED_MODULE_2__["AnimatedTypeWriterComponent"]
                ],
                providers: [],
                schemas: [
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _nativescript_core_bundle_entry_points__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/core/bundle-entry-points.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/__ivy_ngcc__/fesm2015/nativescript-angular.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/app.module.ts");

            __webpack_require__("../node_modules/@nativescript/webpack/helpers/load-application-css-angular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/@nativescript/webpack/hmr/index.js").hmrUpdate;
            global.__coreModulesLiveSync = global.__onLiveSync;

            global.__onLiveSync = function () {
                // handle hot updated on LiveSync
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                // the hot updates are applied, ask the modules to apply the changes
                setTimeout(() => {
                    global.__coreModulesLiveSync({ type, path });
                });
            };

            // handle hot updated on initial app start
            hmrUpdate();
        }
        
            
        
        

var options_Generated = {};

if (true) {
    options_Generated = {
        hmrOptions: {
            moduleTypeFactory: function () { return __webpack_require__("./app/app.module.ts").AppModule; },
            livesyncCallback: function (platformReboot) { setTimeout(platformReboot, 0); }
        }
    };
}

if (true) {
    module["hot"].accept(["./app/app.module.ts"], function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/app.module.ts");
(function () {
        global["hmrRefresh"]({});
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this));
}
// A traditional NativeScript application starts by initializing global objects,
// setting up global CSS rules, creating, and navigating to the main page.
// Angular applications need to take care of their own initialization:
// modules, components, directives, routes, DI providers.
// A NativeScript Angular app needs to make both paradigms work together,
// so we provide a wrapper platform object, platformNativeScriptDynamic,
// that sets up a NativeScript application and can bootstrap the Angular framework.
_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["platformNativeScriptDynamic"](Object.assign({}, options_Generated)).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);

    
        
        
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "~/package.json":
/***/ (function(module, exports) {

module.exports = require("~/package.json");

/***/ })

},[["./main.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC9hbmltYXRlZC10eXBlLXdyaXRlci9hbmltYXRlZC10eXBlLXdyaXRlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FuaW1hdGVkLXR5cGUtd3JpdGVyL2FuaW1hdGVkLXR5cGUtd3JpdGVyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9hbmltYXRpb24taGVscGVyLnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIn4vcGFja2FnZS5qc29uXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSw0Q0FBNEMsV0FBVztBQUN2RDtBQUNBO0FBQ0EseUU7Ozs7Ozs7QUNaQSwrR0FBaUUsbUJBQU8sQ0FBQyxpSUFBK0Y7QUFDeEssZ0VBQWdFLG1CQUFPLENBQUMsaUlBQStGO0FBQ3ZLLG9FQUFvRSxtQkFBTyxDQUFDLG9JQUFrRztBQUM5SyxtRUFBbUUsbUJBQU8sQ0FBQyxvSUFBa0csR0FBRyxrQkFBa0Isa0NBQWtDLFVBQVUsa2pCQUFrakIsRUFBRSxpRUFBaUUsRUFBRSxvRUFBb0UsRUFBRSwySkFBMkosRUFBRSx5SUFBeUksRUFBRSwrREFBK0QseURBQXlELEVBQUU7QUFDNzBDLFFBQVEsSUFBVTtBQUNsQjtBQUNBO0FBQ0EsK0JBQStCLG1DQUFtQztBQUNsRSxTQUFTO0FBQ1Q7Ozs7Ozs7Ozs7QUNUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtEO0FBR21COzs7QUFPOUQsTUFBTSwyQkFBMkI7SUFFcEMsZ0JBQWdCLENBQUM7SUFFakIsUUFBUSxLQUFLLENBQUM7SUFFZCxLQUFLLENBQUMsSUFBZTtRQUNqQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsTUFBYztRQUNoQyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQVU7UUFFakQsTUFBTSxTQUFTLEdBQUcsdUJBQXVCO1FBRXpDLE1BQU0sR0FBRyxHQUEwQjtZQUMvQixLQUFLLEVBQUUsQ0FBQyxHQUFFLEVBQUM7WUFDWCxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsT0FBTyxFQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLFNBQVMsQ0FBQyxNQUFNLEVBQUMsR0FBQztZQUN6RCxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtnQkFDUixHQUFHLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkQsQ0FBQztTQUVKO1FBRUQsaUVBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7O3NHQXRCUSwyQkFBMkI7MkdBQTNCLDJCQUEyQjtRQ1Z4QywwRUFBZ0Y7UUFDaEYsaUZBQ0k7UUFBQSxzRUFBNEQ7UUFDNUQsNEVBQTBEO1FBQXRCLHFKQUFPLGlCQUFhLElBQUM7UUFBQyw0REFBUztRQUNuRSxzRUFBa0U7UUFDdEUsNERBQWM7OzZGREtELDJCQUEyQjtjQUx2Qyx1REFBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFdBQVcsRUFBRSxxQ0FBcUM7YUFDckQ7Ozs7Ozs7Ozs7QUVJRDtBQUFBO0FBQUE7QUFBTyxTQUFTLFlBQVksQ0FBQyxLQUFxQjtJQUM5QyxPQUFPLENBQUMsQ0FBUyxFQUFFLEVBQUU7UUFDakIsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyRCxPQUFPLEdBQUc7SUFDZCxDQUFDO0FBQ0wsQ0FBQztBQUVNLFNBQVMsT0FBTyxDQUNuQixRQUFnQixFQUNoQixJQUE2QjtJQUU3QixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7UUFDM0IsTUFBTSxLQUFLLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUV6QixNQUFNLE9BQU8sR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFFO1lBQzdCLE1BQU0sVUFBVSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBRTFELElBQUksUUFBUSxHQUFHLFVBQVUsR0FBRyxRQUFRLENBQUM7WUFDckMsSUFBSSxRQUFRLEdBQUcsQ0FBQztnQkFBRSxRQUFRLEdBQUcsQ0FBQyxDQUFDO1lBRS9CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNsQyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRXBCLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2xDLE1BQU0sQ0FBQyxHQUFHLFlBQVksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDOUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNmO1lBRUQsSUFBSSxRQUFRLEtBQUssQ0FBQyxFQUFFO2dCQUNoQixhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3ZCLE9BQU87YUFDVjtRQUVMLENBQUMsRUFBQyxFQUFFLENBQUMsQ0FBQztJQUNWLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQzs7Ozs7Ozs7O0FDL0NEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFFd0I7QUFFd0M7OztBQUV6RyxNQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFDcEUsRUFBRSxJQUFJLEVBQUUsc0JBQXNCLEVBQUUsU0FBUyxFQUFFLG9IQUEyQixFQUFDO0NBQzFFLENBQUM7QUFNSyxNQUFNLGdCQUFnQjs7K0ZBQWhCLGdCQUFnQjswSkFBaEIsZ0JBQWdCLGtCQUhoQixDQUFDLDhFQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUN6Qyw4RUFBd0I7bUlBRXpCLGdCQUFnQix5R0FGZiw4RUFBd0I7NkZBRXpCLGdCQUFnQjtjQUo1QixzREFBUTtlQUFDO2dCQUNOLE9BQU8sRUFBRSxDQUFDLDhFQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbkQsT0FBTyxFQUFFLENBQUMsOEVBQXdCLENBQUM7YUFDdEM7Ozs7Ozs7Ozs7QUNkRDtBQUFBO0FBQUE7QUFBQTtBQUEwQzs7O0FBTW5DLE1BQU0sWUFBWTs7d0VBQVosWUFBWTs0RkFBWixZQUFZO1FDTnpCLDZFQUNFO1FBQUEsZ0ZBQXlDO1FBQzNDLDREQUFhOzs2RkRJQSxZQUFZO2NBSnhCLHVEQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLFdBQVcsRUFBRSxzQkFBc0I7YUFDdEM7Ozs7Ozs7Ozs7QUVMRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyRDtBQUNBO0FBQ3lDO0FBRTVDO0FBQ1Q7O0FBb0J4QyxNQUFNLFNBQVM7O3dGQUFULFNBQVMsY0FmZCwyREFBWTs0SUFlUCxTQUFTLG1CQUxQLEVBQUUsWUFSSjtZQUNMLHdFQUFrQjtZQUNsQixvRUFBZ0I7U0FDbkI7bUlBVVEsU0FBUyxtQkFSZCwyREFBWTtRQUNaLGdIQUEyQixhQUwzQix3RUFBa0I7UUFDbEIsb0VBQWdCOzZGQVdYLFNBQVM7Y0FqQnJCLHNEQUFRO2VBQUM7Z0JBQ04sU0FBUyxFQUFFO29CQUNQLDJEQUFZO2lCQUNmO2dCQUNELE9BQU8sRUFBRTtvQkFDTCx3RUFBa0I7b0JBQ2xCLG9FQUFnQjtpQkFDbkI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNWLDJEQUFZO29CQUNaLGdIQUEyQjtpQkFDOUI7Z0JBQ0QsU0FBUyxFQUFFLEVBQUU7Z0JBQ2IsT0FBTyxFQUFFO29CQUNMLDhEQUFnQjtpQkFDbkI7YUFDSjs7Ozs7Ozs7Ozs7Ozs7O0FDckJELE9BQU8sRUFBRSxzQkFBUyxDQUFFLCtFQUF5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0MsY0FBZ0Y7QUFDTjtBQUMxRSxzREFBc0U7QUFDdEUsd0JBQXlEO0FBQ3pELFNBQXlFO0FBQ3pFLFFBQXdFO0FBQ3hFLFlBQW1GO0FBQ25GLFFBQXlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaekQsMkMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0KHJlcSkge1xuXHQvLyBIZXJlIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKSBpcyB1c2VkIGluc3RlYWQgb2YgbmV3IFByb21pc2UoKSB0byBwcmV2ZW50XG5cdC8vIHVuY2F1Z2h0IGV4Y2VwdGlvbiBwb3BwaW5nIHVwIGluIGRldnRvb2xzXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fSk7XG59XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmlkID0gXCIuLi8kJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgcmVjdXJzaXZlXCI7IiwiZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwifkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhQG5hdGl2ZXNjcmlwdC93ZWJwYWNrL2hlbHBlcnMvY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwiQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFAbmF0aXZlc2NyaXB0L3dlYnBhY2svaGVscGVycy9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJ+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFAbmF0aXZlc2NyaXB0L3dlYnBhY2svaGVscGVycy9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIUBuYXRpdmVzY3JpcHQvd2VicGFjay9oZWxwZXJzL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIUBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2RlZmF1bHQuY3NzXCIpKTttb2R1bGUuZXhwb3J0cyA9IHtcInR5cGVcIjpcInN0eWxlc2hlZXRcIixcInN0eWxlc2hlZXRcIjp7XCJydWxlc1wiOlt7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCJcXG5JbiBOYXRpdmVTY3JpcHQsIHRoZSBhcHAuY3NzIGZpbGUgaXMgd2hlcmUgeW91IHBsYWNlIENTUyBydWxlcyB0aGF0XFxueW91IHdvdWxkIGxpa2UgdG8gYXBwbHkgdG8geW91ciBlbnRpcmUgYXBwbGljYXRpb24uIENoZWNrIG91dFxcbmh0dHA6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvdWkvc3R5bGluZyBmb3IgYSBmdWxsIGxpc3Qgb2YgdGhlIENTU1xcbnNlbGVjdG9ycyBhbmQgcHJvcGVydGllcyB5b3UgY2FuIHVzZSB0byBzdHlsZSBVSSBjb21wb25lbnRzLlxcblxcbi8qXFxuSW4gbWFueSBjYXNlcyB5b3UgbWF5IHdhbnQgdG8gdXNlIHRoZSBOYXRpdmVTY3JpcHQgY29yZSB0aGVtZSBpbnN0ZWFkXFxub2Ygd3JpdGluZyB5b3VyIG93biBDU1MgcnVsZXMuIFlvdSBjYW4gbGVhcm4gbW9yZSBhYm91dCB0aGUgXFxuTmF0aXZlU2NyaXB0IGNvcmUgdGhlbWUgYXQgaHR0cHM6Ly9naXRodWIuY29tL25hdGl2ZXNjcmlwdC90aGVtZVxcblRoZSBpbXBvcnRlZCBDU1MgcnVsZXMgbXVzdCBwcmVjZWRlIGFsbCBvdGhlciB0eXBlcyBvZiBydWxlcy5cXG5cIn0se1widHlwZVwiOlwiaW1wb3J0XCIsXCJpbXBvcnRcIjpcIlxcXCJ+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcXFwiXCJ9LHtcInR5cGVcIjpcImltcG9ydFwiLFwiaW1wb3J0XCI6XCJcXFwifkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2RlZmF1bHQuY3NzXFxcIlwifSx7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCIgUGxhY2UgYW55IENTUyBydWxlcyB5b3Ugd2FudCB0byBhcHBseSBvbiBib3RoIGlPUyBhbmQgQW5kcm9pZCBoZXJlLlxcblRoaXMgaXMgd2hlcmUgdGhlIHZhc3QgbWFqb3JpdHkgb2YgeW91ciBDU1MgY29kZSBnb2VzLiBcIn0se1widHlwZVwiOlwiY29tbWVudFwiLFwiY29tbWVudFwiOlwiXFxuVGhlIGZvbGxvd2luZyBDU1MgcnVsZSBjaGFuZ2VzIHRoZSBmb250IHNpemUgb2YgYWxsIEJ1dHRvbnMgdGhhdCBoYXZlIHRoZVxcblxcXCItcHJpbWFyeVxcXCIgY2xhc3MgbW9kaWZpZXIuXFxuXCJ9LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkJ1dHRvbi4tcHJpbWFyeVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE4XCJ9XX1dLFwicGFyc2luZ0Vycm9yc1wiOltdfX07O1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2FwcC5jc3MnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFdmVudERhdGEsIExhYmVsLCBWaWV3IH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcblxuaW1wb3J0IHsgYW5pbWF0ZSwgSlNBbmltYXRpb25EZWZpbml0aW9uIH0gZnJvbSBcIi4uL2FuaW1hdGlvbi1oZWxwZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICducy1hbmltYXRlZC10eXBlLXdyaXRlcicsXG4gICAgdGVtcGxhdGVVcmw6ICdhbmltYXRlZC10eXBlLXdyaXRlci5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBBbmltYXRlZFR5cGVXcml0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHsgfVxuXG4gICAgb25UYXAoYXJnczogRXZlbnREYXRhKXtcbiAgICAgICAgY29uc3QgdmlldyA9IGFyZ3Mub2JqZWN0IGFzIFZpZXdcbiAgICAgICAgY29uc3QgbGJsID0gdmlldy5wYWdlLmdldFZpZXdCeUlkKCdsYmwnKSBhcyBMYWJlbFxuICAgICAgICBcbiAgICAgICAgY29uc3QgZmluYWxUZXh0ID0gXCJIZWxsbyBiZWF1dGlmdWwgd29ybGRcIlxuXG4gICAgICAgIGNvbnN0IGRlZjogSlNBbmltYXRpb25EZWZpbml0aW9uID0ge1xuICAgICAgICAgICAgY3VydmU6IHQ9PnQsXG4gICAgICAgICAgICBnZXRSYW5nZTogKCkgPT4geyByZXR1cm4ge2Zyb206IDAsIHRvOiBmaW5hbFRleHQubGVuZ3RofX0sXG4gICAgICAgICAgICBzdGVwOiAodikgPT4ge1xuICAgICAgICAgICAgICAgIGxibC50ZXh0ID0gZmluYWxUZXh0LnN1YnN0cmluZygwLCBNYXRoLmNlaWwodikpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGFuaW1hdGUoMjAwMCwgW2RlZl0pO1xuICAgIH1cbn0iLCI8QWN0aW9uQmFyIHRpdGxlPVwiQW5pbWF0ZWQgVHlwZSBXcml0ZXJcIiBiYWNrZ3JvdW5kQ29sb3I9XCJsaWdodEJsdWVcIj48L0FjdGlvbkJhcj5cbjxTdGFja0xheW91dCBjbGFzcz1cInAtMjBcIj5cbiAgICA8TGFiZWwgdGV4dD1cIlRhcCB0aGUgYnV0dG9uXCIgY2xhc3M9XCJoMSB0ZXh0LWNlbnRlclwiPjwvTGFiZWw+XG4gICAgPEJ1dHRvbiB0ZXh0PVwiVEFQXCIgY2xhc3M9XCItcHJpbWFyeVwiICh0YXApPVwib25UYXAoJGV2ZW50KVwiPjwvQnV0dG9uPlxuICAgIDxMYWJlbCBpZD1cImxibFwiIHRleHQ9XCJIZWxsbyBXb3JsZFwiIGNsYXNzPVwiaDIgdGV4dC1jZW50ZXJcIj48L0xhYmVsPlxuPC9TdGFja0xheW91dD4iLCJleHBvcnQgaW50ZXJmYWNlIEFuaW1hdGlvblJhbmdle1xuICAgIGZyb206IG51bWJlcjtcbiAgICB0bzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEpTQW5pbWF0aW9uRGVmaW5pdGlvbiB7XG4gICAgZ2V0UmFuZ2U6ICgpID0+IEFuaW1hdGlvblJhbmdlO1xuICAgIGN1cnZlKHByb2dyZXNzOiBudW1iZXIpOiBudW1iZXI7XG4gICAgc3RlcChkZWx0YVJlc3VsdDogbnVtYmVyKTogdm9pZDtcbiAgICAvL2NvbmRpdGlvbjogKCkgPT4gYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFtb3VudEZyb21UbyhyYW5nZTogQW5pbWF0aW9uUmFuZ2Upe1xuICAgIHJldHVybiAodDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHJldCA9IHJhbmdlLmZyb20gKyB0ICogKHJhbmdlLnRvIC0gcmFuZ2UuZnJvbSk7XG4gICAgICAgIHJldHVybiByZXRcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbmltYXRlKFxuICAgIGR1cmF0aW9uOiBudW1iZXIsXG4gICAgZGVmczogSlNBbmltYXRpb25EZWZpbml0aW9uW10pIHtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBjb25zdCBzdGFydCA9IG5ldyBEYXRlKCk7XG5cbiAgICAgICAgY29uc3QgdGltZXJJZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVQYXNzZWQgPSBuZXcgRGF0ZSgpLnZhbHVlT2YoKSAtIHN0YXJ0LnZhbHVlT2YoKTtcblxuICAgICAgICAgICAgbGV0IHByb2dyZXNzID0gdGltZVBhc3NlZCAvIGR1cmF0aW9uO1xuICAgICAgICAgICAgaWYgKHByb2dyZXNzID4gMSkgcHJvZ3Jlc3MgPSAxO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlZnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkZWYgPSBkZWZzW2ldO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZGVsdGEgPSBkZWYuY3VydmUocHJvZ3Jlc3MpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHYgPSBhbW91bnRGcm9tVG8oZGVmLmdldFJhbmdlKCkpKGRlbHRhKTtcbiAgICAgICAgICAgICAgICBkZWYuc3RlcCh2KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHByb2dyZXNzID09PSAxKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcklkKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSwxNyk7XG4gICAgfSk7XG59IiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIkBuYXRpdmVzY3JpcHQvYW5ndWxhclwiO1xuXG5pbXBvcnQgeyBBbmltYXRlZFR5cGVXcml0ZXJDb21wb25lbnQgfSBmcm9tIFwiLi4vYXBwL2FuaW1hdGVkLXR5cGUtd3JpdGVyL2FuaW1hdGVkLXR5cGUtd3JpdGVyLmNvbXBvbmVudFwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL2FuaW1hdGVkLXR5cGUtd3JpdGVyXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcbiAgICB7IHBhdGg6IFwiYW5pbWF0ZWQtdHlwZS13cml0ZXJcIiwgY29tcG9uZW50OiBBbmltYXRlZFR5cGVXcml0ZXJDb21wb25lbnR9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9hcHAuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgeyB9XG4iLCI8R3JpZExheW91dD5cbiAgPHBhZ2Utcm91dGVyLW91dGxldD48L3BhZ2Utcm91dGVyLW91dGxldD5cbjwvR3JpZExheW91dD5cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJAbmF0aXZlc2NyaXB0L2FuZ3VsYXJcIjtcbmltcG9ydCB7IEFuaW1hdGVkVHlwZVdyaXRlckNvbXBvbmVudCB9IGZyb20gXCIuL2FuaW1hdGVkLXR5cGUtd3JpdGVyL2FuaW1hdGVkLXR5cGUtd3JpdGVyLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5cblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgQW5pbWF0ZWRUeXBlV3JpdGVyQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIiwiLy8gdGhpcyBpbXBvcnQgc2hvdWxkIGJlIGZpcnN0IGluIG9yZGVyIHRvIGxvYWQgc29tZSByZXF1aXJlZCBzZXR0aW5ncyAobGlrZSBnbG9iYWxzIGFuZCByZWZsZWN0LW1ldGFkYXRhKVxuaW1wb3J0IHsgcGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljIH0gZnJvbSBcIkBuYXRpdmVzY3JpcHQvYW5ndWxhclwiO1xuXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tIFwiLi9hcHAvYXBwLm1vZHVsZVwiO1xuXG4vLyBBIHRyYWRpdGlvbmFsIE5hdGl2ZVNjcmlwdCBhcHBsaWNhdGlvbiBzdGFydHMgYnkgaW5pdGlhbGl6aW5nIGdsb2JhbCBvYmplY3RzLFxuLy8gc2V0dGluZyB1cCBnbG9iYWwgQ1NTIHJ1bGVzLCBjcmVhdGluZywgYW5kIG5hdmlnYXRpbmcgdG8gdGhlIG1haW4gcGFnZS5cbi8vIEFuZ3VsYXIgYXBwbGljYXRpb25zIG5lZWQgdG8gdGFrZSBjYXJlIG9mIHRoZWlyIG93biBpbml0aWFsaXphdGlvbjpcbi8vIG1vZHVsZXMsIGNvbXBvbmVudHMsIGRpcmVjdGl2ZXMsIHJvdXRlcywgREkgcHJvdmlkZXJzLlxuLy8gQSBOYXRpdmVTY3JpcHQgQW5ndWxhciBhcHAgbmVlZHMgdG8gbWFrZSBib3RoIHBhcmFkaWdtcyB3b3JrIHRvZ2V0aGVyLFxuLy8gc28gd2UgcHJvdmlkZSBhIHdyYXBwZXIgcGxhdGZvcm0gb2JqZWN0LCBwbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMsXG4vLyB0aGF0IHNldHMgdXAgYSBOYXRpdmVTY3JpcHQgYXBwbGljYXRpb24gYW5kIGNhbiBib290c3RyYXAgdGhlIEFuZ3VsYXIgZnJhbWV3b3JrLlxucGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ+L3BhY2thZ2UuanNvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9