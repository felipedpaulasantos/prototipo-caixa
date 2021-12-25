(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["prototipador-prototipador-module"], {
    /***/
    "6aPM":
    /*!*************************************************************************!*\
      !*** ./src/app/prototipador/menu-elementos/menu-elementos.component.ts ***!
      \*************************************************************************/

    /*! exports provided: MenuElementosComponent */

    /***/
    function aPM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuElementosComponent", function () {
        return MenuElementosComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function MenuElementosComponent_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MenuElementosComponent_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "escondido": a0
        };
      };

      var MenuElementosComponent = /*#__PURE__*/function () {
        function MenuElementosComponent() {
          _classCallCheck(this, MenuElementosComponent);

          this.isAberto = false;
        }

        _createClass(MenuElementosComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MenuElementosComponent;
      }();

      MenuElementosComponent.ɵfac = function MenuElementosComponent_Factory(t) {
        return new (t || MenuElementosComponent)();
      };

      MenuElementosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MenuElementosComponent,
        selectors: [["app-menu-elementos"]],
        decls: 6,
        vars: 5,
        consts: [["id", "menuLateralElementos", 1, "shadow-caixa", "p-4", 3, "ngClass"], ["id", "botaoExibirMenuElementos", 1, "btn", "btn-accent", "rounded-circle", 3, "click"], [4, "ngIf"], [1, "fa", "fa-plus", "fa-lg"], [1, "fa", "fa-eye-slash", "fa-lg"]],
        template: function MenuElementosComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuElementosComponent_Template_button_click_3_listener() {
              return ctx.isAberto = !ctx.isAberto;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MenuElementosComponent_span_4_Template, 2, 0, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MenuElementosComponent_span_5_Template, 2, 0, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, !ctx.isAberto));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAberto);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAberto);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: ["#menuLateralElementos[_ngcontent-%COMP%] {\n  width: 500px;\n  height: calc(100vh - 64px);\n  position: fixed;\n  right: 0;\n  top: 64px;\n  transition: 0.2s;\n}\n#menuLateralElementos.escondido[_ngcontent-%COMP%] {\n  right: -500px;\n  visibility: hidden;\n}\n#botaoExibirMenuElementos[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  bottom: 1rem;\n  right: 1rem;\n  height: 3rem;\n  width: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtZW51LWVsZW1lbnRvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNHLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBQ0g7QUFBRztFQUNHLGFBQUE7RUFDQSxrQkFBQTtBQUVOO0FBRUE7RUFDRyxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNIIiwiZmlsZSI6Im1lbnUtZWxlbWVudG9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21lbnVMYXRlcmFsRWxlbWVudG9zIHtcclxuICAgd2lkdGg6IDUwMHB4O1xyXG4gICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2NHB4KTtcclxuICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICByaWdodDogMDtcclxuICAgdG9wOiA2NHB4O1xyXG4gICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gICAmLmVzY29uZGlkbyB7XHJcbiAgICAgIHJpZ2h0OiAtNTAwcHg7XHJcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgfVxyXG59XHJcblxyXG4jYm90YW9FeGliaXJNZW51RWxlbWVudG9zIHtcclxuICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgYm90dG9tOiAxcmVtO1xyXG4gICByaWdodDogMXJlbTtcclxuICAgaGVpZ2h0OiAzcmVtO1xyXG4gICB3aWR0aDogM3JlbTtcclxufSJdfQ== */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    "BpQ5":
    /*!*****************************************************!*\
      !*** ./src/app/prototipador/prototipador.module.ts ***!
      \*****************************************************/

    /*! exports provided: PrototipadorModule */

    /***/
    function BpQ5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrototipadorModule", function () {
        return PrototipadorModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _prototipador_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./prototipador-routing.module */
      "ipeR");
      /* harmony import */


      var _prototipador_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./prototipador.component */
      "yll1");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _guia_caixa_guia_caixa_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../guia-caixa/guia-caixa.module */
      "0JuT");
      /* harmony import */


      var angular_resizable_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! angular-resizable-element */
      "/qmH");
      /* harmony import */


      var _menu_elementos_menu_elementos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./menu-elementos/menu-elementos.component */
      "6aPM");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PrototipadorModule = /*#__PURE__*/_createClass(function PrototipadorModule() {
        _classCallCheck(this, PrototipadorModule);
      });

      PrototipadorModule.ɵfac = function PrototipadorModule_Factory(t) {
        return new (t || PrototipadorModule)();
      };

      PrototipadorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: PrototipadorModule
      });
      PrototipadorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _prototipador_routing_module__WEBPACK_IMPORTED_MODULE_1__["PrototipadorRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _guia_caixa_guia_caixa_module__WEBPACK_IMPORTED_MODULE_4__["GuiaCaixaModule"], angular_resizable_element__WEBPACK_IMPORTED_MODULE_5__["ResizableModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](PrototipadorModule, {
          declarations: [_prototipador_component__WEBPACK_IMPORTED_MODULE_2__["PrototipadorComponent"], _menu_elementos_menu_elementos_component__WEBPACK_IMPORTED_MODULE_6__["MenuElementosComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _prototipador_routing_module__WEBPACK_IMPORTED_MODULE_1__["PrototipadorRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _guia_caixa_guia_caixa_module__WEBPACK_IMPORTED_MODULE_4__["GuiaCaixaModule"], angular_resizable_element__WEBPACK_IMPORTED_MODULE_5__["ResizableModule"]]
        });
      })();
      /***/

    },

    /***/
    "ipeR":
    /*!*************************************************************!*\
      !*** ./src/app/prototipador/prototipador-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: PrototipadorRoutingModule */

    /***/
    function ipeR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrototipadorRoutingModule", function () {
        return PrototipadorRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _prototipador_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./prototipador.component */
      "yll1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _prototipador_component__WEBPACK_IMPORTED_MODULE_1__["PrototipadorComponent"]
      }];

      var PrototipadorRoutingModule = /*#__PURE__*/_createClass(function PrototipadorRoutingModule() {
        _classCallCheck(this, PrototipadorRoutingModule);
      });

      PrototipadorRoutingModule.ɵfac = function PrototipadorRoutingModule_Factory(t) {
        return new (t || PrototipadorRoutingModule)();
      };

      PrototipadorRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: PrototipadorRoutingModule
      });
      PrototipadorRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PrototipadorRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "yll1":
    /*!********************************************************!*\
      !*** ./src/app/prototipador/prototipador.component.ts ***!
      \********************************************************/

    /*! exports provided: PrototipadorComponent */

    /***/
    function yll1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrototipadorComponent", function () {
        return PrototipadorComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _menu_elementos_menu_elementos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./menu-elementos/menu-elementos.component */
      "6aPM");
      /* harmony import */


      var _guia_caixa_components_card_caixa_card_caixa_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../guia-caixa/components/card-caixa/card-caixa.component */
      "PZSm");
      /* harmony import */


      var angular_resizable_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! angular-resizable-element */
      "/qmH");

      var _c0 = ["prototipadorGrid"];

      var _c1 = function _c1() {
        return {
          bottom: true,
          right: true,
          top: true,
          left: true
        };
      };

      function PrototipadorComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "cx-card", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function PrototipadorComponent_ng_container_2_Template_cx_card_close_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var i_r5 = ctx.index;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.destroy(i_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resizeEnd", function PrototipadorComponent_ng_container_2_Template_div_resizeEnd_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.onResizeEnd($event, _r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("draggable", true)("expandable", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("enableGhostResize", true)("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1))("innerHTML", item_r4.html, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      function PrototipadorComponent_span_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ocultar linhas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PrototipadorComponent_span_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Exibir linhas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c2 = function _c2(a0) {
        return {
          "card-grid-no-border": a0
        };
      };

      var PrototipadorComponent = /*#__PURE__*/function () {
        function PrototipadorComponent(sanitizer, renderer, componentFactoryResolver, cdr) {
          _classCallCheck(this, PrototipadorComponent);

          this.sanitizer = sanitizer;
          this.renderer = renderer;
          this.componentFactoryResolver = componentFactoryResolver;
          this.cdr = cdr;
          this.showBorder = true;
          this.items = [];
        }

        _createClass(PrototipadorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onResizeEnd",
          value: function onResizeEnd(event, cardBody) {
            var style = {
              width: "".concat(event.rectangle.width, "px"),
              height: "".concat(event.rectangle.height, "px")
            };
            this.renderer.setStyle(cardBody, "width", style.width);
            this.renderer.setStyle(cardBody, "height", style.height);
          }
        }, {
          key: "addInput",
          value: function addInput() {
            var element = this.sanitizer.bypassSecurityTrustHtml("<input class='input-caixa'>");
            this.items.push({
              html: element
            });
            this.items = [].concat(this.items);
          }
        }, {
          key: "addCardButton",
          value: function addCardButton() {
            var element = this.sanitizer.bypassSecurityTrustHtml("<cx-card-button></cx-card-button>");
            this.items.push({
              html: element
            });
            this.items = [].concat(this.items);
          }
        }, {
          key: "addCampoTexto",
          value: function addCampoTexto() {
            var element = this.sanitizer.bypassSecurityTrustHtml("<textarea class='w-100 h-100 border-0 shadow-none'></textarea>");
            this.items.push({
              html: element
            });
            this.items = [].concat(this.items);
          }
        }, {
          key: "destroy",
          value: function destroy(index) {
            this.items.splice(index);
            this.items = [].concat(this.items);
          }
        }]);

        return PrototipadorComponent;
      }();

      PrototipadorComponent.ɵfac = function PrototipadorComponent_Factory(t) {
        return new (t || PrototipadorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      PrototipadorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PrototipadorComponent,
        selectors: [["app-prototipador"]],
        viewQuery: function PrototipadorComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.prototipadorGrid = _t.first);
          }
        },
        decls: 14,
        vars: 6,
        consts: [["id", "prototipadorGrid", 3, "ngClass"], ["prototipadorGrid", ""], [4, "ngFor", "ngForOf"], [1, "mt-5"], [1, "btn", "btn-accent", 3, "click"], [1, "btn", "btn-accent", "ml-2", 3, "click"], [4, "ngIf"], [1, "d-inline-block", "w-auto", "border-0", "shadow-none", 3, "draggable", "expandable", "close"], ["cardItem", ""], ["mwlResizable", "", 1, "card-body", "card-grid", 3, "enableGhostResize", "resizeEdges", "innerHTML", "resizeEnd"], ["cardBody", ""]],
        template: function PrototipadorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PrototipadorComponent_ng_container_2_Template, 5, 6, "ng-container", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrototipadorComponent_Template_button_click_4_listener() {
              return ctx.addInput();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Adicionar input ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrototipadorComponent_Template_button_click_6_listener() {
              return ctx.addCampoTexto();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Adicionar campo de texto ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrototipadorComponent_Template_button_click_8_listener() {
              return ctx.addCardButton();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Adicionar card button ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrototipadorComponent_Template_button_click_10_listener() {
              return ctx.showBorder = !ctx.showBorder;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PrototipadorComponent_span_11_Template, 2, 0, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PrototipadorComponent_span_12_Template, 2, 0, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-menu-elementos");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c2, !ctx.showBorder));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showBorder);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showBorder);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _menu_elementos_menu_elementos_component__WEBPACK_IMPORTED_MODULE_3__["MenuElementosComponent"], _guia_caixa_components_card_caixa_card_caixa_component__WEBPACK_IMPORTED_MODULE_4__["CardCaixaComponent"], angular_resizable_element__WEBPACK_IMPORTED_MODULE_5__["ResizableDirective"]],
        styles: ["#prototipadorGrid[_ngcontent-%COMP%]   .card-body.card-grid[_ngcontent-%COMP%] {\n  border: dashed 1px grey;\n}\n#prototipadorGrid.card-grid-no-border[_ngcontent-%COMP%]   .card-body.card-grid[_ngcontent-%COMP%] {\n  border: solid 1px transparent;\n}\nmwlResizable[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.resize-handle-top[_ngcontent-%COMP%], .resize-handle-bottom[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 5px;\n  cursor: row-resize;\n  width: 100%;\n}\n.resize-handle-top[_ngcontent-%COMP%] {\n  top: 0;\n}\n.resize-handle-bottom[_ngcontent-%COMP%] {\n  bottom: 0;\n}\n.resize-handle-left[_ngcontent-%COMP%], .resize-handle-right[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  cursor: col-resize;\n  width: 5px;\n}\n.resize-handle-left[_ngcontent-%COMP%] {\n  left: 0;\n}\n.resize-handle-right[_ngcontent-%COMP%] {\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb3RvdGlwYWRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRztFQUNHLHVCQUFBO0FBQU47QUFHTTtFQUNHLDZCQUFBO0FBRFQ7QUFNQTtFQUNHLHNCQUFBO0FBSEg7QUFNQzs7RUFFRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFISDtBQU1DO0VBQ0UsTUFBQTtBQUhIO0FBTUM7RUFDRSxTQUFBO0FBSEg7QUFNQzs7RUFFRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFISDtBQU1DO0VBQ0UsT0FBQTtBQUhIO0FBTUM7RUFDRSxRQUFBO0FBSEgiLCJmaWxlIjoicHJvdG90aXBhZG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Byb3RvdGlwYWRvckdyaWQge1xyXG4gICAuY2FyZC1ib2R5LmNhcmQtZ3JpZCB7XHJcbiAgICAgIGJvcmRlcjogZGFzaGVkIDFweCBncmV5O1xyXG4gICB9XHJcbiAgICYuY2FyZC1ncmlkLW5vLWJvcmRlciB7XHJcbiAgICAgIC5jYXJkLWJvZHkuY2FyZC1ncmlkIHtcclxuICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggdHJhbnNwYXJlbnQ7XHJcbiAgICAgIH1cclxuICAgfVxyXG59XHJcblxyXG5td2xSZXNpemFibGUge1xyXG4gICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvLyByZXF1aXJlZCBmb3IgdGhlIGVuYWJsZUdob3N0UmVzaXplIG9wdGlvbiB0byB3b3JrXHJcbiB9XHJcblxyXG4gLnJlc2l6ZS1oYW5kbGUtdG9wLFxyXG4gLnJlc2l6ZS1oYW5kbGUtYm90dG9tIHtcclxuICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICBoZWlnaHQ6IDVweDtcclxuICAgY3Vyc29yOiByb3ctcmVzaXplO1xyXG4gICB3aWR0aDogMTAwJTtcclxuIH1cclxuXHJcbiAucmVzaXplLWhhbmRsZS10b3Age1xyXG4gICB0b3A6IDA7XHJcbiB9XHJcblxyXG4gLnJlc2l6ZS1oYW5kbGUtYm90dG9tIHtcclxuICAgYm90dG9tOiAwO1xyXG4gfVxyXG5cclxuIC5yZXNpemUtaGFuZGxlLWxlZnQsXHJcbiAucmVzaXplLWhhbmRsZS1yaWdodCB7XHJcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgaGVpZ2h0OiAxMDAlO1xyXG4gICBjdXJzb3I6IGNvbC1yZXNpemU7XHJcbiAgIHdpZHRoOiA1cHg7XHJcbiB9XHJcblxyXG4gLnJlc2l6ZS1oYW5kbGUtbGVmdCB7XHJcbiAgIGxlZnQ6IDA7XHJcbiB9XHJcblxyXG4gLnJlc2l6ZS1oYW5kbGUtcmlnaHQge1xyXG4gICByaWdodDogMDtcclxuIH0iXX0= */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=prototipador-prototipador-module-es5.js.map