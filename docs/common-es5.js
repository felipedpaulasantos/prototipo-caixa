(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "uZDt":
    /*!****************************************************************************************!*\
      !*** ./src/app/demonstracao/componentes/datatable-demonstracao/random-data.service.ts ***!
      \****************************************************************************************/

    /*! exports provided: RandomDataService */

    /***/
    function uZDt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RandomDataService", function () {
        return RandomDataService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var RandomDataService = /*#__PURE__*/function () {
        function RandomDataService(http) {
          _classCallCheck(this, RandomDataService);

          this.http = http;
          this.BASE_URL = "https://random-data-api.com/api";
        }

        _createClass(RandomDataService, [{
          key: "getFoodData",
          value: function getFoodData(size) {
            var sizeParam = size ? "?size=".concat(size) : "";
            return this.http.get("".concat(this.BASE_URL, "/food/random_food").concat(sizeParam));
          }
        }, {
          key: "getRandomStripeData",
          value: function getRandomStripeData(size) {
            var sizeParam = size ? "?size=".concat(size) : "";
            return this.http.get("".concat(this.BASE_URL, "/stripe/random_stripe").concat(sizeParam));
          }
        }, {
          key: "getCep",
          value: function getCep() {
            return this.http.get("https://ws.apicep.com/cep/12071000.json");
          }
        }]);

        return RandomDataService;
      }();

      RandomDataService.ɵfac = function RandomDataService_Factory(t) {
        return new (t || RandomDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      RandomDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: RandomDataService,
        factory: RandomDataService.ɵfac,
        providedIn: "root"
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map