(function () {
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunkprototipo_caixa"] = self["webpackChunkprototipo_caixa"] || []).push([["src_app_prototipador_prototipador_module_ts"], {
    /***/
    44886:
    /*!*************************************************************************!*\
      !*** ./src/app/prototipador/menu-elementos/menu-elementos.component.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MenuElementosComponent": function MenuElementosComponent() {
          return (
            /* binding */
            _MenuElementosComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      54364);

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

      var _MenuElementosComponent = /*#__PURE__*/function () {
        function _MenuElementosComponent() {
          _classCallCheck(this, _MenuElementosComponent);

          this.isAberto = false;
        }

        _createClass(_MenuElementosComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _MenuElementosComponent;
      }();

      _MenuElementosComponent.ɵfac = function MenuElementosComponent_Factory(t) {
        return new (t || _MenuElementosComponent)();
      };

      _MenuElementosComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _MenuElementosComponent,
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
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
        styles: ["#menuLateralElementos[_ngcontent-%COMP%] {\n  width: 500px;\n  height: calc(100vh - 64px);\n  position: fixed;\n  right: 0;\n  top: 64px;\n  transition: 0.2s;\n}\n#menuLateralElementos.escondido[_ngcontent-%COMP%] {\n  right: -500px;\n  visibility: hidden;\n}\n#botaoExibirMenuElementos[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  bottom: 1rem;\n  right: 1rem;\n  height: 3rem;\n  width: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUtZWxlbWVudG9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csWUFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFDSDtBQUFHO0VBQ0csYUFBQTtFQUNBLGtCQUFBO0FBRU47QUFFQTtFQUNHLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0giLCJmaWxlIjoibWVudS1lbGVtZW50b3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWVudUxhdGVyYWxFbGVtZW50b3Mge1xyXG4gICB3aWR0aDogNTAwcHg7XHJcbiAgIGhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xyXG4gICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgIHJpZ2h0OiAwO1xyXG4gICB0b3A6IDY0cHg7XHJcbiAgIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgICYuZXNjb25kaWRvIHtcclxuICAgICAgcmlnaHQ6IC01MDBweDtcclxuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICB9XHJcbn1cclxuXHJcbiNib3Rhb0V4aWJpck1lbnVFbGVtZW50b3Mge1xyXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICBib3R0b206IDFyZW07XHJcbiAgIHJpZ2h0OiAxcmVtO1xyXG4gICBoZWlnaHQ6IDNyZW07XHJcbiAgIHdpZHRoOiAzcmVtO1xyXG59Il19 */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    15043:
    /*!*************************************************************!*\
      !*** ./src/app/prototipador/prototipador-routing.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PrototipadorRoutingModule": function PrototipadorRoutingModule() {
          return (
            /* binding */
            _PrototipadorRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _prototipador_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./prototipador.component */
      63699);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        component: _prototipador_component__WEBPACK_IMPORTED_MODULE_0__.PrototipadorComponent
      }];

      var _PrototipadorRoutingModule = /*#__PURE__*/_createClass(function _PrototipadorRoutingModule() {
        _classCallCheck(this, _PrototipadorRoutingModule);
      });

      _PrototipadorRoutingModule.ɵfac = function PrototipadorRoutingModule_Factory(t) {
        return new (t || _PrototipadorRoutingModule)();
      };

      _PrototipadorRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _PrototipadorRoutingModule
      });
      _PrototipadorRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_PrototipadorRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    63699:
    /*!********************************************************!*\
      !*** ./src/app/prototipador/prototipador.component.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PrototipadorComponent": function PrototipadorComponent() {
          return (
            /* binding */
            _PrototipadorComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _menu_elementos_menu_elementos_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./menu-elementos/menu-elementos.component */
      44886);
      /* harmony import */


      var _guia_caixa_components_card_caixa_card_caixa_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../guia-caixa/components/card-caixa/card-caixa.component */
      45290);
      /* harmony import */


      var angular_resizable_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! angular-resizable-element */
      7593);

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
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "cx-card", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("close", function PrototipadorComponent_ng_container_2_Template_cx_card_close_1_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);

            var i_r5 = restoredCtx.index;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r8.destroy(i_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resizeEnd", function PrototipadorComponent_ng_container_2_Template_div_resizeEnd_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);

            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r10.onResizeEnd($event, _r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("draggable", true)("expandable", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("enableGhostResize", true)("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c1))("innerHTML", item_r4.html, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        }
      }

      function PrototipadorComponent_span_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ocultar linhas");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function PrototipadorComponent_span_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Exibir linhas");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var _c2 = function _c2(a0) {
        return {
          "card-grid-no-border": a0
        };
      };

      var _PrototipadorComponent = /*#__PURE__*/function () {
        function _PrototipadorComponent(sanitizer, renderer, componentFactoryResolver, cdr) {
          _classCallCheck(this, _PrototipadorComponent);

          this.sanitizer = sanitizer;
          this.renderer = renderer;
          this.componentFactoryResolver = componentFactoryResolver;
          this.cdr = cdr;
          this.showBorder = true;
          this.items = [];
        }

        _createClass(_PrototipadorComponent, [{
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

        return _PrototipadorComponent;
      }();

      _PrototipadorComponent.ɵfac = function PrototipadorComponent_Factory(t) {
        return new (t || _PrototipadorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef));
      };

      _PrototipadorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _PrototipadorComponent,
        selectors: [["app-prototipador"]],
        viewQuery: function PrototipadorComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.prototipadorGrid = _t.first);
          }
        },
        decls: 14,
        vars: 6,
        consts: [["id", "prototipadorGrid", 3, "ngClass"], ["prototipadorGrid", ""], [4, "ngFor", "ngForOf"], [1, "mt-5"], [1, "btn", "btn-accent", 3, "click"], [1, "btn", "btn-accent", "ml-2", 3, "click"], [4, "ngIf"], [1, "d-inline-block", "w-auto", "border-0", "shadow-none", 3, "draggable", "expandable", "close"], ["cardItem", ""], ["mwlResizable", "", 1, "card-body", "card-grid", 3, "enableGhostResize", "resizeEdges", "innerHTML", "resizeEnd"], ["cardBody", ""]],
        template: function PrototipadorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PrototipadorComponent_ng_container_2_Template, 5, 6, "ng-container", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PrototipadorComponent_Template_button_click_4_listener() {
              return ctx.addInput();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Adicionar input ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PrototipadorComponent_Template_button_click_6_listener() {
              return ctx.addCampoTexto();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Adicionar campo de texto ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PrototipadorComponent_Template_button_click_8_listener() {
              return ctx.addCardButton();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Adicionar card button ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PrototipadorComponent_Template_button_click_10_listener() {
              return ctx.showBorder = !ctx.showBorder;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, PrototipadorComponent_span_11_Template, 2, 0, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, PrototipadorComponent_span_12_Template, 2, 0, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "app-menu-elementos");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c2, !ctx.showBorder));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.items);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showBorder);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.showBorder);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _menu_elementos_menu_elementos_component__WEBPACK_IMPORTED_MODULE_0__.MenuElementosComponent, _guia_caixa_components_card_caixa_card_caixa_component__WEBPACK_IMPORTED_MODULE_1__.CardCaixaComponent, angular_resizable_element__WEBPACK_IMPORTED_MODULE_5__.ResizableDirective],
        styles: ["#prototipadorGrid[_ngcontent-%COMP%]   .card-body.card-grid[_ngcontent-%COMP%] {\n  border: dashed 1px grey;\n}\n#prototipadorGrid.card-grid-no-border[_ngcontent-%COMP%]   .card-body.card-grid[_ngcontent-%COMP%] {\n  border: solid 1px transparent;\n}\nmwlResizable[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.resize-handle-top[_ngcontent-%COMP%], .resize-handle-bottom[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 5px;\n  cursor: row-resize;\n  width: 100%;\n}\n.resize-handle-top[_ngcontent-%COMP%] {\n  top: 0;\n}\n.resize-handle-bottom[_ngcontent-%COMP%] {\n  bottom: 0;\n}\n.resize-handle-left[_ngcontent-%COMP%], .resize-handle-right[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  cursor: col-resize;\n  width: 5px;\n}\n.resize-handle-left[_ngcontent-%COMP%] {\n  left: 0;\n}\n.resize-handle-right[_ngcontent-%COMP%] {\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3RvdGlwYWRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRztFQUNHLHVCQUFBO0FBQU47QUFHTTtFQUNHLDZCQUFBO0FBRFQ7QUFNQTtFQUNHLHNCQUFBO0FBSEg7QUFNQzs7RUFFRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFISDtBQU1DO0VBQ0UsTUFBQTtBQUhIO0FBTUM7RUFDRSxTQUFBO0FBSEg7QUFNQzs7RUFFRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFISDtBQU1DO0VBQ0UsT0FBQTtBQUhIO0FBTUM7RUFDRSxRQUFBO0FBSEgiLCJmaWxlIjoicHJvdG90aXBhZG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Byb3RvdGlwYWRvckdyaWQge1xyXG4gICAuY2FyZC1ib2R5LmNhcmQtZ3JpZCB7XHJcbiAgICAgIGJvcmRlcjogZGFzaGVkIDFweCBncmV5O1xyXG4gICB9XHJcbiAgICYuY2FyZC1ncmlkLW5vLWJvcmRlciB7XHJcbiAgICAgIC5jYXJkLWJvZHkuY2FyZC1ncmlkIHtcclxuICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggdHJhbnNwYXJlbnQ7XHJcbiAgICAgIH1cclxuICAgfVxyXG59XHJcblxyXG5td2xSZXNpemFibGUge1xyXG4gICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvLyByZXF1aXJlZCBmb3IgdGhlIGVuYWJsZUdob3N0UmVzaXplIG9wdGlvbiB0byB3b3JrXHJcbiB9XHJcblxyXG4gLnJlc2l6ZS1oYW5kbGUtdG9wLFxyXG4gLnJlc2l6ZS1oYW5kbGUtYm90dG9tIHtcclxuICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICBoZWlnaHQ6IDVweDtcclxuICAgY3Vyc29yOiByb3ctcmVzaXplO1xyXG4gICB3aWR0aDogMTAwJTtcclxuIH1cclxuXHJcbiAucmVzaXplLWhhbmRsZS10b3Age1xyXG4gICB0b3A6IDA7XHJcbiB9XHJcblxyXG4gLnJlc2l6ZS1oYW5kbGUtYm90dG9tIHtcclxuICAgYm90dG9tOiAwO1xyXG4gfVxyXG5cclxuIC5yZXNpemUtaGFuZGxlLWxlZnQsXHJcbiAucmVzaXplLWhhbmRsZS1yaWdodCB7XHJcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgaGVpZ2h0OiAxMDAlO1xyXG4gICBjdXJzb3I6IGNvbC1yZXNpemU7XHJcbiAgIHdpZHRoOiA1cHg7XHJcbiB9XHJcblxyXG4gLnJlc2l6ZS1oYW5kbGUtbGVmdCB7XHJcbiAgIGxlZnQ6IDA7XHJcbiB9XHJcblxyXG4gLnJlc2l6ZS1oYW5kbGUtcmlnaHQge1xyXG4gICByaWdodDogMDtcclxuIH0iXX0= */"]
      });
      /***/
    },

    /***/
    99010:
    /*!*****************************************************!*\
      !*** ./src/app/prototipador/prototipador.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PrototipadorModule": function PrototipadorModule() {
          return (
            /* binding */
            _PrototipadorModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _prototipador_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./prototipador-routing.module */
      15043);
      /* harmony import */


      var _prototipador_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./prototipador.component */
      63699);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/shared.module */
      44466);
      /* harmony import */


      var _guia_caixa_guia_caixa_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../guia-caixa/guia-caixa.module */
      93981);
      /* harmony import */


      var angular_resizable_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! angular-resizable-element */
      7593);
      /* harmony import */


      var _menu_elementos_menu_elementos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./menu-elementos/menu-elementos.component */
      44886);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _PrototipadorModule = /*#__PURE__*/_createClass(function _PrototipadorModule() {
        _classCallCheck(this, _PrototipadorModule);
      });

      _PrototipadorModule.ɵfac = function PrototipadorModule_Factory(t) {
        return new (t || _PrototipadorModule)();
      };

      _PrototipadorModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _PrototipadorModule
      });
      _PrototipadorModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _prototipador_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrototipadorRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _guia_caixa_guia_caixa_module__WEBPACK_IMPORTED_MODULE_3__.GuiaCaixaModule, angular_resizable_element__WEBPACK_IMPORTED_MODULE_7__.ResizableModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_PrototipadorModule, {
          declarations: [_prototipador_component__WEBPACK_IMPORTED_MODULE_1__.PrototipadorComponent, _menu_elementos_menu_elementos_component__WEBPACK_IMPORTED_MODULE_4__.MenuElementosComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _prototipador_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrototipadorRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _guia_caixa_guia_caixa_module__WEBPACK_IMPORTED_MODULE_3__.GuiaCaixaModule, angular_resizable_element__WEBPACK_IMPORTED_MODULE_7__.ResizableModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_prototipador_prototipador_module_ts-es5.js.map