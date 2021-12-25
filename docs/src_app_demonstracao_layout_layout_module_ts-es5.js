(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkprototipo_caixa"] = self["webpackChunkprototipo_caixa"] || []).push([["src_app_demonstracao_layout_layout_module_ts"], {
    /***/
    85586:
    /*!**************************************************************!*\
      !*** ./src/app/demonstracao/layout/layout-routing.module.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LayoutRoutingModule": function LayoutRoutingModule() {
          return (
            /* binding */
            _LayoutRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./layout.component */
      69063);
      /* harmony import */


      var _tipografia_tipografia_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tipografia/tipografia.component */
      71284);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: "",
        component: _layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent,
        data: {
          title: "Layout",
          breadcrumb: "Layout"
        }
      }, {
        path: "tipografia",
        component: _tipografia_tipografia_component__WEBPACK_IMPORTED_MODULE_1__.TipografiaComponent,
        data: {
          title: "Tipografia",
          breadcrumb: "Tipografia"
        }
      }];

      var _LayoutRoutingModule = /*#__PURE__*/_createClass(function _LayoutRoutingModule() {
        _classCallCheck(this, _LayoutRoutingModule);
      });

      _LayoutRoutingModule.ɵfac = function LayoutRoutingModule_Factory(t) {
        return new (t || _LayoutRoutingModule)();
      };

      _LayoutRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _LayoutRoutingModule
      });
      _LayoutRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_LayoutRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    69063:
    /*!*********************************************************!*\
      !*** ./src/app/demonstracao/layout/layout.component.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LayoutComponent": function LayoutComponent() {
          return (
            /* binding */
            _LayoutComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_app_guia_caixa_constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/guia-caixa/constants/constants */
      95052);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_guia_caixa_services_style_guia_caixa_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/guia-caixa/services/style-guia-caixa.service */
      63587);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var src_app_menu_side_menu_side_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/menu/side-menu/side-menu.service */
      81518);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _guia_caixa_components_select_caixa_select_caixa_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../guia-caixa/components/select-caixa/select-caixa.component */
      99536);
      /* harmony import */


      var _guia_caixa_components_select_caixa_select_caixa_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../guia-caixa/components/select-caixa/select-caixa.directive */
      20365);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      71258);

      function LayoutComponent_div_2_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h5", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var resource_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("routerLink", resource_r6.url);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("", resource_r6.iconClass, " fa-lg mr-1");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", resource_r6.name, " ");
        }
      }

      function LayoutComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, LayoutComponent_div_2_div_1_Template, 7, 5, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cols_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", cols_r4);
        }
      }

      function LayoutComponent_option_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tema_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate2"]("bg-", tema_r7.name, " text-", tema_r7.textColor, " font-fam-bold");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", tema_r7.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 6, tema_r7.name), " ");
        }
      }

      function LayoutComponent_option_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tema_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate2"]("font-fam-bold bg-", tema_r8.name, " text-", tema_r8.textColor, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", tema_r8.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 6, tema_r8.name), " ");
        }
      }

      function LayoutComponent_option_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tema_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate2"]("bg-", tema_r9.name, " text-", tema_r9.textColor, " font-fam-bold");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", tema_r9.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 6, tema_r9.name), " ");
        }
      }

      var _LayoutComponent = /*#__PURE__*/function () {
        function _LayoutComponent(styleService, fb, menuService) {
          _classCallCheck(this, _LayoutComponent);

          this.styleService = styleService;
          this.fb = fb;
          this.menuService = menuService;
          this.logoBranco = src_app_guia_caixa_constants_constants__WEBPACK_IMPORTED_MODULE_0__.LOGO_CAIXA_BRANCO_SRC;
          this.logoPadrao = src_app_guia_caixa_constants_constants__WEBPACK_IMPORTED_MODULE_0__.LOGO_CAIXA_SRC;
          this.logoCompleto = src_app_guia_caixa_constants_constants__WEBPACK_IMPORTED_MODULE_0__.LOGO_COMPLETO_SRC;
          this.logoCompletoBranco = src_app_guia_caixa_constants_constants__WEBPACK_IMPORTED_MODULE_0__.LOGO_COMPLETO_BRANCO_SRC;
          this.temas = [];
          this.temasGradiente = [];
          this.formToolbar = this.fb.group({
            icone: [""],
            bg: [""],
            tom: [""]
          });
          this.formSidemenu = this.fb.group({
            bg: [""],
            tom: [""]
          });
          this.rows = [];
          this.resources = [];
        }

        _createClass(_LayoutComponent, [{
          key: "groupColumns",
          value: function groupColumns(resources) {
            var newRows = [];

            for (var index = 0; index < resources.length; index += 3) {
              newRows.push(resources.slice(index, index + 3));
            }

            return newRows;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.temas = src_app_guia_caixa_constants_constants__WEBPACK_IMPORTED_MODULE_0__.BootstrapTheme.getTemas();
            this.temasGradiente = src_app_guia_caixa_constants_constants__WEBPACK_IMPORTED_MODULE_0__.GradientTheme.getTemas();
            this.menuService.menuItems$.subscribe(function (items) {
              var componentes = items.find(function (item) {
                return item.url === "/layout";
              }).submenu;
              componentes.forEach(function (item) {
                _this.resources.push(item);
              });
              _this.resources = [].concat(_this.resources);
              _this.rows = _this.groupColumns(_this.resources);
            });
          }
        }, {
          key: "onIconChange",
          value: function onIconChange(src) {
            if (!src) {
              return;
            }

            this.styleService.setToolbarIcon(src);
          }
        }, {
          key: "onToolbarBgChange",
          value: function onToolbarBgChange(theme) {
            var tom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

            if (!theme) {
              return;
            }

            var temaSelecionado = this.temas.find(function (tema) {
              return tema.name === theme;
            }) || this.temasGradiente.find(function (tema) {
              return tema.name === theme;
            });

            if (!temaSelecionado) {
              return;
            }

            if (!tom && this.formToolbar.get("tom").value) {
              tom = this.formToolbar.get("tom").value;
            } else if (!tom || theme.includes("gradient")) {
              tom = "";
            }

            this.styleService.setToolbarBg(temaSelecionado.name + tom);
            this.styleService.setToolbarText(temaSelecionado.textColor);
          }
        }, {
          key: "onSidemenuBgChange",
          value: function onSidemenuBgChange(theme, tom) {
            var temaSelecionado = this.temas.find(function (tema) {
              return tema.name === theme;
            }) || {
              name: "light-light"
            };

            if (!tom && this.formSidemenu.get("tom").value) {
              tom = this.formSidemenu.get("tom").value;
            } else if (!tom) {
              tom = "";
            }

            this.styleService.setSidemenuBg(temaSelecionado.name + tom);
            this.styleService.setSidemenuText(temaSelecionado.textColor);
          }
        }, {
          key: "onConteudoPrincipalChange",
          value: function onConteudoPrincipalChange(theme) {
            this.styleService.setConteudoPrincipalBg(theme);
          }
        }]);

        return _LayoutComponent;
      }();

      _LayoutComponent.ɵfac = function LayoutComponent_Factory(t) {
        return new (t || _LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_guia_caixa_services_style_guia_caixa_service__WEBPACK_IMPORTED_MODULE_1__.GuiaCaixaStyleService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_menu_side_menu_side_menu_service__WEBPACK_IMPORTED_MODULE_2__.SideMenuService));
      };

      _LayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _LayoutComponent,
        selectors: [["app-layout"]],
        decls: 81,
        vars: 22,
        consts: [[1, "titulo"], ["class", "row d-flex justify-content-center", 4, "ngFor", "ngForOf"], [1, "row", "collapse"], [1, "col-md-6", "col-xl-4", "mb-3"], [3, "formGroup"], [1, "card"], [1, "card-header"], [1, "header-subtitulo-caixa"], [1, "card-body"], [3, "showFeedback"], ["selectCaixa", "", "formControlName", "bg", 3, "change"], ["value", ""], [3, "class", "value", 4, "ngFor", "ngForOf"], ["selectCaixa", "", "formControlName", "tom", 3, "change"], ["value", "-light"], ["value", "-dark"], ["selectCaixa", "", "formControlName", "icone", 3, "change"], [3, "value"], ["selectCaixa", "", 3, "change"], ["value", "", 3, "selected"], ["value", "bg-cinza", 3, "selected"], [1, "row", "d-flex", "justify-content-center"], ["class", "col-10 col-md-6 col-xl-4", 4, "ngFor", "ngForOf"], [1, "col-10", "col-md-6", "col-xl-4"], ["role", "button", "optionalClasses", "button-card-min-height", "routerLinkActive", "active", 1, "card", "w-75", "card-hover", "button-card", 3, "routerLink"], [1, "header-subtitulo-caixa", "m-0", "mr-3", "text-center"]],
        template: function LayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Layout\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, LayoutComponent_div_2_Template, 2, 1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "h5", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " Toolbar (barra-superior) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "cx-select", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Cor de fundo");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "select", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function LayoutComponent_Template_select_change_14_listener($event) {
              return ctx.onToolbarBgChange($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Escolha um tema");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, LayoutComponent_option_17_Template, 3, 8, "option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, LayoutComponent_option_18_Template, 3, 8, "option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "cx-select", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Tom");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "select", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function LayoutComponent_Template_select_change_22_listener($event) {
              return ctx.onToolbarBgChange(ctx.formToolbar.get("bg").value, $event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Padr\xE3o");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Claro");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Escuro");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "cx-select", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "\xCDcone");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "select", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function LayoutComponent_Template_select_change_32_listener($event) {
              return ctx.onIconChange($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "option", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Logo X branco");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "option", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Logo completo branco");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "option", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "Logo X azul");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "option", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Logo completo azul");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "h5", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, " Menu Lateral ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "cx-select", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "Cor de fundo");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "select", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function LayoutComponent_Template_select_change_51_listener($event) {
              return ctx.onSidemenuBgChange($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "Escolha um tema");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](54, LayoutComponent_option_54_Template, 3, 8, "option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "cx-select", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, "Tom");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "select", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function LayoutComponent_Template_select_change_58_listener($event) {
              return ctx.onSidemenuBgChange(ctx.formSidemenu.get("bg").value, $event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "Padr\xE3o");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, "Claro");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, "Escuro");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "h5", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](69, " Conte\xFAdo Principal ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "cx-select", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73, "Cor de fundo");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "select", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function LayoutComponent_Template_select_change_74_listener($event) {
              return ctx.onConteudoPrincipalChange($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](76, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](77, " Branco ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "option", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](79, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](80, " Claro ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.rows);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.formToolbar);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("showFeedback", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.temas);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.temasGradiente);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("showFeedback", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("showFeedback", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.logoBranco);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.logoCompletoBranco);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.logoPadrao);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.logoCompleto);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.formSidemenu);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("showFeedback", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.temas);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("showFeedback", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("showFeedback", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selected", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](76, 18, ctx.styleService.conteudoPrincipalBg$) == "");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selected", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](79, 20, ctx.styleService.conteudoPrincipalBg$) == "bg-cinza");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _guia_caixa_components_select_caixa_select_caixa_component__WEBPACK_IMPORTED_MODULE_3__.SelectCaixaComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _guia_caixa_components_select_caixa_select_caixa_directive__WEBPACK_IMPORTED_MODULE_4__.SelectCaixaDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.TitleCasePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    60802:
    /*!******************************************************!*\
      !*** ./src/app/demonstracao/layout/layout.module.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LayoutModule": function LayoutModule() {
          return (
            /* binding */
            _LayoutModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _layout_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./layout-routing.module */
      85586);
      /* harmony import */


      var _layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./layout.component */
      69063);
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      44466);
      /* harmony import */


      var src_app_guia_caixa_guia_caixa_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/guia-caixa/guia-caixa.module */
      93981);
      /* harmony import */


      var _tipografia_tipografia_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./tipografia/tipografia.component */
      71284);
      /* harmony import */


      var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-highlightjs */
      24971);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _LayoutModule = /*#__PURE__*/_createClass(function _LayoutModule() {
        _classCallCheck(this, _LayoutModule);
      });

      _LayoutModule.ɵfac = function LayoutModule_Factory(t) {
        return new (t || _LayoutModule)();
      };

      _LayoutModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _LayoutModule
      });
      _LayoutModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _layout_routing_module__WEBPACK_IMPORTED_MODULE_0__.LayoutRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, ngx_highlightjs__WEBPACK_IMPORTED_MODULE_8__.HighlightModule, src_app_guia_caixa_guia_caixa_module__WEBPACK_IMPORTED_MODULE_3__.GuiaCaixaModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_LayoutModule, {
          declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_1__.LayoutComponent, _tipografia_tipografia_component__WEBPACK_IMPORTED_MODULE_4__.TipografiaComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _layout_routing_module__WEBPACK_IMPORTED_MODULE_0__.LayoutRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, ngx_highlightjs__WEBPACK_IMPORTED_MODULE_8__.HighlightModule, src_app_guia_caixa_guia_caixa_module__WEBPACK_IMPORTED_MODULE_3__.GuiaCaixaModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_demonstracao_layout_layout_module_ts-es5.js.map