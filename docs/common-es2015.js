(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "uZDt":
/*!****************************************************************************************!*\
  !*** ./src/app/demonstracao/componentes/datatable-demonstracao/random-data.service.ts ***!
  \****************************************************************************************/
/*! exports provided: RandomDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RandomDataService", function() { return RandomDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class RandomDataService {
    constructor(http) {
        this.http = http;
        this.BASE_URL = "https://random-data-api.com/api";
    }
    getFoodData(size) {
        const sizeParam = size ? `?size=${size}` : "";
        return this.http.get(`${this.BASE_URL}/food/random_food${sizeParam}`);
    }
    getRandomStripeData(size) {
        const sizeParam = size ? `?size=${size}` : "";
        return this.http.get(`${this.BASE_URL}/stripe/random_stripe${sizeParam}`);
    }
    getCep() {
        return this.http.get("https://ws.apicep.com/cep/12071000.json");
    }
}
RandomDataService.ɵfac = function RandomDataService_Factory(t) { return new (t || RandomDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
RandomDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RandomDataService, factory: RandomDataService.ɵfac, providedIn: "root" });


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map