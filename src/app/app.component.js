"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
// let test: unknown = 4;
// test = 5;
// let test2: unknown = {
//   b: 1,
//   x: () => {}
// }
// test.b = 1;
// test.x();
function make(a) {
    return Array(5).fill(null).map(function () { return a; });
}
function extended(a, b) {
    return Object.assign({}, a, b);
}
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'my-new-app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.sass']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
