webpackHotUpdate("bundle",{

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


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYW5pbWF0ZWQtdHlwZS13cml0ZXIvYW5pbWF0ZWQtdHlwZS13cml0ZXIuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9hbmltYXRlZC10eXBlLXdyaXRlci9hbmltYXRlZC10eXBlLXdyaXRlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtEO0FBR21COzs7QUFPOUQsTUFBTSwyQkFBMkI7SUFFcEMsZ0JBQWdCLENBQUM7SUFFakIsUUFBUSxLQUFLLENBQUM7SUFFZCxLQUFLLENBQUMsSUFBZTtRQUNqQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsTUFBYztRQUNoQyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQVU7UUFFakQsTUFBTSxTQUFTLEdBQUcsdUJBQXVCO1FBRXpDLE1BQU0sR0FBRyxHQUEwQjtZQUMvQixLQUFLLEVBQUUsQ0FBQyxHQUFFLEVBQUM7WUFDWCxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsT0FBTyxFQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLFNBQVMsQ0FBQyxNQUFNLEVBQUMsR0FBQztZQUN6RCxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtnQkFDUixHQUFHLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkQsQ0FBQztTQUVKO1FBRUQsaUVBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7O3NHQXRCUSwyQkFBMkI7MkdBQTNCLDJCQUEyQjtRQ1Z4QywwRUFBZ0Y7UUFDaEYsaUZBQ0k7UUFBQSxzRUFBNEQ7UUFDNUQsNEVBQTBEO1FBQXRCLHFKQUFPLGlCQUFhLElBQUM7UUFBQyw0REFBUztRQUNuRSxzRUFBa0U7UUFDdEUsNERBQWM7OzZGREtELDJCQUEyQjtjQUx2Qyx1REFBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFdBQVcsRUFBRSxxQ0FBcUM7YUFDckQiLCJmaWxlIjoiYnVuZGxlLjI1MThhZTgyMWExNGQ0NzI2MGUxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRXZlbnREYXRhLCBMYWJlbCwgVmlldyB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5cbmltcG9ydCB7IGFuaW1hdGUsIEpTQW5pbWF0aW9uRGVmaW5pdGlvbiB9IGZyb20gXCIuLi9hbmltYXRpb24taGVscGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbnMtYW5pbWF0ZWQtdHlwZS13cml0ZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnYW5pbWF0ZWQtdHlwZS13cml0ZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgQW5pbWF0ZWRUeXBlV3JpdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7IH1cblxuICAgIG9uVGFwKGFyZ3M6IEV2ZW50RGF0YSl7XG4gICAgICAgIGNvbnN0IHZpZXcgPSBhcmdzLm9iamVjdCBhcyBWaWV3XG4gICAgICAgIGNvbnN0IGxibCA9IHZpZXcucGFnZS5nZXRWaWV3QnlJZCgnbGJsJykgYXMgTGFiZWxcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGZpbmFsVGV4dCA9IFwiSGVsbG8gYmVhdXRpZnVsIHdvcmxkXCJcblxuICAgICAgICBjb25zdCBkZWY6IEpTQW5pbWF0aW9uRGVmaW5pdGlvbiA9IHtcbiAgICAgICAgICAgIGN1cnZlOiB0PT50LFxuICAgICAgICAgICAgZ2V0UmFuZ2U6ICgpID0+IHsgcmV0dXJuIHtmcm9tOiAwLCB0bzogZmluYWxUZXh0Lmxlbmd0aH19LFxuICAgICAgICAgICAgc3RlcDogKHYpID0+IHtcbiAgICAgICAgICAgICAgICBsYmwudGV4dCA9IGZpbmFsVGV4dC5zdWJzdHJpbmcoMCwgTWF0aC5jZWlsKHYpKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBhbmltYXRlKDIwMDAsIFtkZWZdKTtcbiAgICB9XG59IiwiPEFjdGlvbkJhciB0aXRsZT1cIkFuaW1hdGVkIFR5cGUgV3JpdGVyXCIgYmFja2dyb3VuZENvbG9yPVwibGlnaHRCbHVlXCI+PC9BY3Rpb25CYXI+XG48U3RhY2tMYXlvdXQgY2xhc3M9XCJwLTIwXCI+XG4gICAgPExhYmVsIHRleHQ9XCJUYXAgdGhlIGJ1dHRvblwiIGNsYXNzPVwiaDEgdGV4dC1jZW50ZXJcIj48L0xhYmVsPlxuICAgIDxCdXR0b24gdGV4dD1cIlRBUFwiIGNsYXNzPVwiLXByaW1hcnlcIiAodGFwKT1cIm9uVGFwKCRldmVudClcIj48L0J1dHRvbj5cbiAgICA8TGFiZWwgaWQ9XCJsYmxcIiB0ZXh0PVwiSGVsbG8gV29ybGRcIiBjbGFzcz1cImgyIHRleHQtY2VudGVyXCI+PC9MYWJlbD5cbjwvU3RhY2tMYXlvdXQ+Il0sInNvdXJjZVJvb3QiOiIifQ==