(function () {
  "use strict";

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunkprototipo_caixa"] = self["webpackChunkprototipo_caixa"] || []).push([["src_app_demonstracao_componentes_componentes-caixa_module_ts"], {
    /***/
    39260:
    /*!***************************************************************************************************************!*\
      !*** ./src/app/demonstracao/componentes/button-control-demonstracao/button-control-demonstracao.component.ts ***!
      \***************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ButtonControlDemonstracaoComponent": function ButtonControlDemonstracaoComponent() {
          return (
            /* binding */
            _ButtonControlDemonstracaoComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ButtonControlDemonstracaoComponent = /*#__PURE__*/function () {
        function _ButtonControlDemonstracaoComponent() {
          _classCallCheck(this, _ButtonControlDemonstracaoComponent);
        }

        _createClass(_ButtonControlDemonstracaoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ButtonControlDemonstracaoComponent;
      }();

      _ButtonControlDemonstracaoComponent.ɵfac = function ButtonControlDemonstracaoComponent_Factory(t) {
        return new (t || _ButtonControlDemonstracaoComponent)();
      };

      _ButtonControlDemonstracaoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ButtonControlDemonstracaoComponent,
        selectors: [["ng-component"]],
        decls: 2,
        vars: 0,
        template: function ButtonControlDemonstracaoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "button-control-demonstracao works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        encapsulation: 2
      });
      /***/
    },

    /***/
    66609:
    /*!********************************************************************************************!*\
      !*** ./src/app/demonstracao/componentes/card-button-demonstracao/card-button-api-props.ts ***!
      \********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "cardButtonApiProps": function cardButtonApiProps() {
          return (
            /* binding */
            _cardButtonApiProps
          );
        }
        /* harmony export */

      });

      var stylesExample = "styles='{ height: '300px'; }'";
      var _cardButtonApiProps = [{
        nome: "@Input( )<br>cardId: string",
        descricao: "Nome ou identifica\xE7\xE3o opcional para o componente.<br>\n     Valor: \"\""
      }, {
        nome: "@Input( )<br>data: any",
        descricao: "Atributo opcional que ser\xE1 emitido internamente no evento CardButtonEventChecked.<br>\n     Valor: null"
      }, {
        nome: "@Input( )<br>leftIcon: string",
        descricao: "Classe do \xEDcone a ser exibido no lado esquerdo, ex: \"fa fa-home\".<br>\n     Padr\xE3o: \"\""
      }, {
        nome: "@Input( )<br>leftTitle: string | number",
        descricao: "T\xEDtulo a ser exibido do lado esquerdo, em uma tag 'h5'.<br>\n     Padr\xE3o: \"\""
      }, {
        nome: "@Input( )<br>leftText: string",
        descricao: "Texto a ser exibido do lado esquerdo, em uma tag 'span'.<br>\n     Padr\xE3o: \"\""
      }, {
        nome: "@Input( )<br>styles: [class: string]: any | string",
        descricao: "Objeto de estilo a ser passado para o card-button-wrapper",
        codeExample: stylesExample,
        codeLang: "css"
      }, {
        nome: "@Input( )<br>type: string",
        descricao: "Define o visual do container de checkbox / radio. Pode ser 'checkbox', 'radio',\n     ou algum valor falso (null / false / '') para n\xE3o exibir o container.<br>\n     Padr\xE3o: ''"
      }, {
        nome: "@Input( )<br>color: CardButtonColor | string",
        descricao: "Define a cor geral do componente (lado esquerdo e borda) quando estiver selecionado.<br>\n     Padr\xE3o: 'primary'"
      }, {
        nome: "@Output( )<br>checked: EventEmitter&#60;CardButtonCheckEvent>",
        descricao: "Evento emitido ao ativar o bot\xE3o, contendo o pr\xF3prio componente e seus atributos\n     na propriedade (target)."
      }, {
        nome: "isChecked( ): boolean",
        descricao: "Retorna o estado atual do componente, se est\xE1 marcado ou n\xE3o."
      }, {
        nome: "toggleValue( ): void",
        descricao: "Troca o estado atual do componente."
      }];
      /***/
    },

    /***/
    8314:
    /*!************************************************************************************************!*\
      !*** ./src/app/demonstracao/componentes/card-button-demonstracao/card-button-code-examples.ts ***!
      \************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CardButtonCodeExamples": function CardButtonCodeExamples() {
          return (
            /* binding */
            _CardButtonCodeExamples
          );
        }
        /* harmony export */

      });

      var _CardButtonCodeExamples = /*#__PURE__*/_createClass(function _CardButtonCodeExamples() {
        _classCallCheck(this, _CardButtonCodeExamples);
      });

      _CardButtonCodeExamples.codeDescricao = "<cx-card-button leftIcon=\"fa fa-home\" leftTitle=\"T\xEDtulo do lado esquerdo\">\n   <h5>T\xEDtulo do lado direito</h5>\n   <p>Texto do lado direito</p>\n </cx-card-button>".trim();
      _CardButtonCodeExamples.htmlCodeCardButton = "<cx-card-button leftIcon=\"fa fa-home\">\n   <h5>Lorem Ipsum</h5>\n   Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sint perspiciatis soluta\n   saepe est nam, sunt accusantium.\n </cx-card-button>\n ".trim();
      _CardButtonCodeExamples.htmlCodeCardCheckbox = "<cx-card-button type=\"checkbox\" [(ngModel)]=\"user\" value=\"user\" leftIcon=\"fa fa-user\">\n   <label>Usu\xE1rio</label>\n   <input [disabled]=\"!user\" value=\"Fulano\" class=\"input-caixa\">\n </cx-card-button>\n \n <br>\n \n <cx-card-button type=\"checkbox\" [(ngModel)]=\"email\" value=\"email\" leftIcon=\"fa fa-at\">\n   <label>E-mail</label>\n   <input [disabled]=\"!email\" value=\"fulano@email.com\" class=\"input-caixa\">\n </cx-card-button>".trim();
      _CardButtonCodeExamples.tsCodeCardCheckbox = "import { Component } from \"@angular/core\";\n \n @Component({\n   templateUrl: \"./card-button-exemplo.component.html\",\n   styleUrls: [\"./card-button-exemplo.component.scss\"]\n })\n export class CardButtonExemplo {\n \n   constructor() {}\n \n   user;\n   email;\n \n }".trim();
      _CardButtonCodeExamples.htmlCodeCardRadio = "<form [formGroup]=\"formFone\">\n   <cx-card-button type=\"radio\" formControlName=\"tipoFone\" value=\"fixo\" leftIcon=\"fa fa-phone-alt\">\n      <label>Fixo</label>\n      <input [disabled]=\"formFone.get('tipoFone').value !== 'fixo'\" class=\"input-caixa\"\n         placeholder=\"(00) 0000-0000\">\n   </cx-card-button>\n \n   <br>\n \n   <cx-card-button type=\"radio\" formControlName=\"tipoFone\" value=\"celular\" leftIcon=\"fa fa-mobile-alt\">\n      <label>Celular</label>\n      <input [disabled]=\"formFone.get('tipoFone').value !== 'celular'\" class=\"input-caixa\"\n         placeholder=\"(00) 00000-0000\">\n   </cx-card-button>\n </form>".trim();
      _CardButtonCodeExamples.tsCodeCardRadio = "import { Component } from \"@angular/core\";\nimport { FormBuilder } from \"@angular/forms\";\n \n @Component({\n   templateUrl: \"./card-button-exemplo.component.html\",\n   styleUrls: [\"./card-button-exemplo.component.scss\"]\n })\n export class CardButtonExemplo {\n \n   constructor(\n     private fb: FormBuilder\n   ) { }\n \n   formFone = this.fb.group({\n     tipoFone: [null]\n   });\n \n }".trim();
      _CardButtonCodeExamples.cardWidth = "<cx-card-button\n   leftTitle=\"Largura: 100%\"\n   [styles]=\"{ width: '100%' }\"\n ></cx-card-button>".trim();
      _CardButtonCodeExamples.cardHeight = "<cx-card-button leftIcon=\"fa fa-user\" leftTitle=\"Altura: auto\" leftText=\"Conte\xFAdo extenso\"\n [styles]=\"{ height: 'auto' }\">\n     <div class=\"py-3\">\n       Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, deserunt enim aspernatur suscipit\n       doloribus eius deleniti porro, qui tempore totam officiis \n       nemo distinctio dolore perspiciatis ratione\n       voluptas non maxime doloremque!\n       <br>\n       Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, deserunt enim aspernatur suscipit\n       doloribus eius deleniti porro, qui tempore totam officiis \n       nemo distinctio dolore perspiciatis ratione\n       voluptas non maxime doloremque!\n     </div>\n </cx-card-button>".trim();
      _CardButtonCodeExamples.htmlCodeCores = "<cx-card-button color=\"secondary\" leftIcon=\"fa fa-home fa-lg\">\n   Principal\n </cx-card-button>\n\n <br>\n\n <cx-card-button type=\"checkbox\" color=\"success\" leftIcon=\"fa fa-check\">\n   Sucesso\n </cx-card-button>\n\n <br>\n\n <cx-card-button color=\"danger\" leftIcon=\"fa fa-times\">\n   Perigo\n </cx-card-button>".trim();
      /***/
    },

    /***/
    40611:
    /*!*********************************************************************************************************!*\
      !*** ./src/app/demonstracao/componentes/card-button-demonstracao/card-button-demonstracao.component.ts ***!
      \*********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CardButtonDemonstracaoComponent": function CardButtonDemonstracaoComponent() {
          return (
            /* binding */
            _CardButtonDemonstracaoComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _componentes_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../componentes-interface */
      31438);
      /* harmony import */


      var _card_button_api_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./card-button-api-props */
      66609);
      /* harmony import */


      var _card_button_code_examples__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./card-button-code-examples */
      8314);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-toastr */
      83315);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);
      /* harmony import */


      var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-highlightjs */
      24971);
      /* harmony import */


      var _shared_components_documentacao_template_documentacao_template_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../shared/components/documentacao-template/documentacao-template.component */
      8990);
      /* harmony import */


      var _guia_caixa_components_card_button_card_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../guia-caixa/components/card-button/card-button.component */
      74298);
      /* harmony import */


      var _shared_components_code_fixed_nav_code_fixed_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../shared/components/code-fixed-nav/code-fixed-nav.component */
      72994);
      /* harmony import */


      var _shared_components_documentacao_api_table_documentacao_api_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../shared/components/documentacao-api-table/documentacao-api-table.component */
      17841);

      var _c0 = ["scrollElement"];

      var _c1 = function _c1() {
        return ["html"];
      };

      var _c2 = function _c2() {
        return {
          width: "100%"
        };
      };

      var _c3 = function _c3() {
        return {
          height: "auto"
        };
      };

      var _CardButtonDemonstracaoComponent = /*#__PURE__*/function (_componentes_interfac) {
        _inherits(_CardButtonDemonstracaoComponent, _componentes_interfac);

        var _super = _createSuper(_CardButtonDemonstracaoComponent);

        function _CardButtonDemonstracaoComponent(toastr, fb, sanitizer) {
          var _this;

          _classCallCheck(this, _CardButtonDemonstracaoComponent);

          _this = _super.call(this, toastr);
          _this.toastr = toastr;
          _this.fb = fb;
          _this.sanitizer = sanitizer;
          _this.sectionOffset = 0;
          _this.spiedTags = ["APP-DOCUMENTACAO-TEMPLATE"];
          _this.currentSection = "painelCardButton";
          _this.navItems = [{
            id: "painelCardButton",
            name: "Layout"
          }, {
            id: "painelCardButtonCheckbox",
            name: "Checkbox"
          }, {
            id: "painelCardButtonRadio",
            name: "Radio"
          }, {
            id: "painelCardButtonColor",
            name: "Cores"
          }];
          _this.formFone = _this.fb.group({
            tipoFone: [null]
          });
          _this.propsApi = _card_button_api_props__WEBPACK_IMPORTED_MODULE_1__.cardButtonApiProps;
          _this.examples = _card_button_code_examples__WEBPACK_IMPORTED_MODULE_2__.CardButtonCodeExamples;
          return _this;
        }

        return _createClass(_CardButtonDemonstracaoComponent);
      }(_componentes_interface__WEBPACK_IMPORTED_MODULE_0__.ComponentesInterface);

      _CardButtonDemonstracaoComponent.ɵfac = function CardButtonDemonstracaoComponent_Factory(t) {
        return new (t || _CardButtonDemonstracaoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.DomSanitizer));
      };

      _CardButtonDemonstracaoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: _CardButtonDemonstracaoComponent,
        selectors: [["ng-component"]],
        viewQuery: function CardButtonDemonstracaoComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.scrollElement = _t.first);
          }
        },
        hostBindings: function CardButtonDemonstracaoComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("scroll", function CardButtonDemonstracaoComponent_scroll_HostBindingHandler($event) {
              return ctx.onScroll($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresolveWindow"]);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
        decls: 140,
        vars: 40,
        consts: [[1, "titulo"], [1, "my-4"], [1, "font-fam-bold"], [3, "highlight", "languages"], ["role", "tablist", 1, "nav", "nav-pills", "tab-caixa"], [1, "nav-item"], ["data-toggle", "tab", "href", "#visaoGeral", "role", "tab", 1, "nav-link", "text-uppercase", "active"], ["data-toggle", "tab", "href", "#api", "role", "tab", 1, "nav-link", "text-uppercase"], ["data-toggle", "tab", "href", "#exemplos", "role", "tab", 1, "nav-link", "text-uppercase"], [1, "tab-content"], ["id", "visaoGeral", "role", "tabpanel", 1, "tab-pane", "fade", "show", "active"], [1, "row", "no-gutters"], [1, "col-12", "col-xl-9", "pr-2"], ["scrollElement", ""], ["id", "painelCardButton", 3, "cardTitle", "codeViewId", "htmlTabId", "htmlCode"], [1, "descricao"], [1, "citation-highlight"], [1, "conteudo"], ["leftIcon", "fa fa-home", 1, ""], ["id", "painelCardButtonCheckbox", 3, "cardTitle", "codeViewId", "htmlTabId", "htmlCode", "tsTabId", "tsCode"], ["type", "checkbox", "value", "user", "leftIcon", "fa fa-user", 1, "mb-3", 3, "ngModel", "ngModelChange"], ["value", "Fulano", 1, "form-control", 3, "disabled"], ["type", "checkbox", "value", "email", "leftIcon", "fa fa-at", 3, "ngModel", "ngModelChange"], ["value", "fulano@email.com", 1, "form-control", 3, "disabled"], ["id", "painelCardButtonRadio", 3, "cardTitle", "codeViewId", "htmlTabId", "htmlCode", "tsTabId", "tsCode"], [3, "formGroup"], ["type", "radio", "formControlName", "tipoFone", "value", "fixo", "leftIcon", "fa fa-phone-alt"], ["placeholder", "(00) 0000-0000", 1, "form-control", 3, "disabled"], ["type", "radio", "formControlName", "tipoFone", "value", "celular", "leftIcon", "fa fa-mobile-alt"], ["placeholder", "(00) 00000-0000", 1, "form-control", 3, "disabled"], ["id", "painelCardButtonColor", 3, "cardTitle", "codeViewId", "htmlTabId", "htmlCode"], ["color", "secondary", "leftIcon", "fa fa-home fa-lg"], ["type", "checkbox", "color", "success", "leftIcon", "fa fa-check"], ["color", "danger", "leftIcon", "fa fa-times"], ["id", "navSection", 1, "d-none", "col-3", "d-xl-flex", "pl-4"], [3, "items", "currentSection"], ["id", "api", "role", "tabpanel", 1, "tab-pane", "fade"], [1, "card", "mb-4"], [1, "card-body"], [1, "header-subtitulo-caixa"], [3, "props"], ["id", "exemplos", "role", "tabpanel", 1, "tab-pane", "fade"], ["id", "cardButtonSandbox", 1, "mb-5"], [1, "row"], [1, "col"], ["leftTitle", "Largura: 100%", 3, "styles"], [3, "highlight"], ["leftIcon", "fa fa-user", "leftTitle", "Altura: auto", "leftText", "Conte\xFAdo extenso", 3, "styles"], [1, "py-3"]],
        template: function CardButtonDemonstracaoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Card Button\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "O componente Card-button oferece um layout semelhante a um card por\xE9m com a funcionalidade de um checkbox ou radio.");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " \xC0 esquerda pode ser exibido um \xEDcone, t\xEDtulo ou texto de descri\xE7\xE3o. Seu conte\xFAdo a direita \xE9 totalmente din\xE2mico. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "h6", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "HTML:");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "code", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, " Vis\xE3o Geral ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, " API ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, " Exemplos ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "section", 12, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "app-documentacao-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "Os atributos iniciados com left, como ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "leftIcon");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, " recebem os elementos a serem exibidos do lado esquerdo. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, "Qualquer conte\xFAdo colocado dentro do componente ser\xE1 exibido do lado direito. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "cx-card-button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "Lorem Ipsum");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sint perspiciatis soluta saepe est nam, sunt accusantium. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](42, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "app-documentacao-template", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, "A funcionalidade de checkbox/radio \xE9 ativada ao: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48, "- Informar o atributo ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50, "type");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51, " como \"checkbox\" ou \"radio\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53, "- Atribuir uma das diretivas de formul\xE1rio do Angular, seja do TemplateForms (ngModel) ou ReactiveForms (formControlName)");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "cx-card-button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CardButtonDemonstracaoComponent_Template_cx_card_button_ngModelChange_55_listener($event) {
              return ctx.user = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](57, "Usu\xE1rio");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](58, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](59, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "cx-card-button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CardButtonDemonstracaoComponent_Template_cx_card_button_ngModelChange_60_listener($event) {
              return ctx.email = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](62, "E-mail");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](63, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](64, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "app-documentacao-template", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](68, "Informando o mesmo ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](70, "model");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](71, " ao componente, ele passa a se comportar como um radio. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](73, "O valor \"checkbox\" para o atributo ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](75, "type");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](76, " adapta o visual do card.");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "form", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "cx-card-button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](81, "Fixo");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](82, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](83, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](84, "cx-card-button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](85, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](86, "Celular");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](87, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](88, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](89, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](90);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](91, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](92, "app-documentacao-template", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](93, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](94, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](95, "A cor geral do card pode ser alterada pelo atributo \"color\", passando um dos temas da enum CardButtonColor ou a string diretamente (primary, secondary, success, danger, info, warning). ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](96, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](97, "cx-card-button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](98, " Principal ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](99, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](100, "cx-card-button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](101, " Sucesso ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](102, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](103, "cx-card-button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](104, " Perigo ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](105, "nav", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](106, "app-code-fixed-nav", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](107, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](108, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](109, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](110, "h5", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](111, "Cx-Card-Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](112, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](113, " Componente de exibi\xE7\xE3o ou intera\xE7\xE3o com funcionalidade de checkbox ou radio. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](114, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](115, "Usar como: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](116, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](117, "cx-card-button");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](118, "app-documentacao-api-table", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](119, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](120, "section", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](121, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](122, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](123, "cx-card-button", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](124, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](125, " HTML ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](126, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](127, "code", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](128, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](129, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](130, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](131, "cx-card-button", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](132, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](133, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, deserunt enim aspernatur suscipit doloribus eius deleniti porro, qui tempore totam officiis nemo distinctio dolore perspiciatis ratione voluptas non maxime doloremque! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](134, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](135, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, deserunt enim aspernatur suscipit doloribus eius deleniti porro, qui tempore totam officiis nemo distinctio dolore perspiciatis ratione voluptas non maxime doloremque! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](136, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](137, " HTML ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](138, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](139, "code", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("highlight", ctx.examples.codeDescricao)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](37, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("cardTitle", "Card Button")("codeViewId", "viewCardButton")("htmlTabId", "htmlCodeCardButton")("htmlCode", ctx.examples.htmlCodeCardButton);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("cardTitle", "Checkbox")("codeViewId", "viewCardCheckbox")("htmlTabId", "htmlCodeCardCheckbox")("htmlCode", ctx.examples.htmlCodeCardCheckbox)("tsTabId", "tsCodeCardCheckbox")("tsCode", ctx.examples.tsCodeCardCheckbox);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.user);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.user);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("cardTitle", "Radio")("codeViewId", "viewCardRadio")("htmlTabId", "htmlCodeCardRadio")("htmlCode", ctx.examples.htmlCodeCardRadio)("tsTabId", "tsCodeCardRadio")("tsCode", ctx.examples.tsCodeCardRadio);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.formFone);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.formFone.get("tipoFone").value !== "fixo");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.formFone.get("tipoFone").value !== "celular");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.formFone.get("tipoFone").value);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("cardTitle", "Cores")("codeViewId", "viewCardCores")("htmlTabId", "htmlCodeCores")("htmlCode", ctx.examples.htmlCodeCores);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("items", ctx.navItems)("currentSection", ctx.currentSection);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("props", ctx.propsApi);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("styles", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](38, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("highlight", ctx.examples.cardWidth);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("styles", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](39, _c3));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("highlight", ctx.examples.cardHeight);
          }
        },
        directives: [ngx_highlightjs__WEBPACK_IMPORTED_MODULE_11__.Highlight, _shared_components_documentacao_template_documentacao_template_component__WEBPACK_IMPORTED_MODULE_3__.DocumentacaoTemplateComponent, _guia_caixa_components_card_button_card_button_component__WEBPACK_IMPORTED_MODULE_4__.CardButtonComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _shared_components_code_fixed_nav_code_fixed_nav_component__WEBPACK_IMPORTED_MODULE_5__.CodeFixedNavComponent, _shared_components_documentacao_api_table_documentacao_api_table_component__WEBPACK_IMPORTED_MODULE_6__.DocumentacaoApiTableComponent],
        encapsulation: 2
      });
      /***/
    },

    /***/
    37588:
    /*!**********************************************************************!*\
      !*** ./src/app/demonstracao/componentes/componentes-caixa.module.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ComponentesCaixaModule": function ComponentesCaixaModule() {
          return (
            /* binding */
            _ComponentesCaixaModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _componentes_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./componentes.component */
      49906);
      /* harmony import */


      var _componentes_basicos_cards_cards_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../componentes-basicos/cards/cards.component */
      94081);
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      44466);
      /* harmony import */


      var _componentes_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./componentes-routing.module */
      60536);
      /* harmony import */


      var _componentes_basicos_mensagens_mensagens_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../componentes-basicos/mensagens/mensagens.component */
      12861);
      /* harmony import */


      var _inputs_inputs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./inputs/inputs.component */
      59781);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var ngx_mask__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ngx-mask */
      30247);
      /* harmony import */


      var _datatable_demonstracao_datatable_demonstracao_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./datatable-demonstracao/datatable-demonstracao.component */
      65773);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! angular-datatables */
      29290);
      /* harmony import */


      var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ngx-highlightjs */
      24971);
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      29150);
      /* harmony import */


      var _select_select_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./select/select.component */
      16657);
      /* harmony import */


      var src_app_guia_caixa_guia_caixa_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/guia-caixa/guia-caixa.module */
      93981);
      /* harmony import */


      var _tabber_demonstracao_tabber_demonstracao_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./tabber-demonstracao/tabber-demonstracao.component */
      94323);
      /* harmony import */


      var _stepper_demonstracao_stepper_demonstracao_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./stepper-demonstracao/stepper-demonstracao.component */
      17262);
      /* harmony import */


      var _card_button_demonstracao_card_button_demonstracao_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./card-button-demonstracao/card-button-demonstracao.component */
      40611);
      /* harmony import */


      var _timeline_demonstracao_timeline_demonstracao_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./timeline-demonstracao/timeline-demonstracao.component */
      24014);
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @ng-select/ng-select */
      36868);
      /* harmony import */


      var _button_control_demonstracao_button_control_demonstracao_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./button-control-demonstracao/button-control-demonstracao.component */
      39260);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ComponentesCaixaModule = /*#__PURE__*/_createClass(function _ComponentesCaixaModule() {
        _classCallCheck(this, _ComponentesCaixaModule);
      });

      _ComponentesCaixaModule.ɵfac = function ComponentesCaixaModule_Factory(t) {
        return new (t || _ComponentesCaixaModule)();
      };

      _ComponentesCaixaModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({
        type: _ComponentesCaixaModule
      });
      _ComponentesCaixaModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({
        imports: [[_componentes_routing_module__WEBPACK_IMPORTED_MODULE_3__.ComponentesRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule, ngx_mask__WEBPACK_IMPORTED_MODULE_18__.NgxMaskModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__.NgSelectModule, angular_datatables__WEBPACK_IMPORTED_MODULE_7__.DataTablesModule, ngx_highlightjs__WEBPACK_IMPORTED_MODULE_20__.HighlightModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_21__.PerfectScrollbarModule, src_app_guia_caixa_guia_caixa_module__WEBPACK_IMPORTED_MODULE_9__.GuiaCaixaModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](_ComponentesCaixaModule, {
          declarations: [_componentes_component__WEBPACK_IMPORTED_MODULE_0__.ComponentesCaixaComponent, _componentes_basicos_cards_cards_component__WEBPACK_IMPORTED_MODULE_1__.CardsComponent, _componentes_basicos_mensagens_mensagens_component__WEBPACK_IMPORTED_MODULE_4__.MensagensComponent, _inputs_inputs_component__WEBPACK_IMPORTED_MODULE_5__.InputsComponent, _datatable_demonstracao_datatable_demonstracao_component__WEBPACK_IMPORTED_MODULE_6__.DatatableDemonstracaoComponent, _select_select_component__WEBPACK_IMPORTED_MODULE_8__.SelectComponent, _tabber_demonstracao_tabber_demonstracao_component__WEBPACK_IMPORTED_MODULE_10__.TabberDemonstracaoComponent, _stepper_demonstracao_stepper_demonstracao_component__WEBPACK_IMPORTED_MODULE_11__.StepperDemonstracaoComponent, _card_button_demonstracao_card_button_demonstracao_component__WEBPACK_IMPORTED_MODULE_12__.CardButtonDemonstracaoComponent, _timeline_demonstracao_timeline_demonstracao_component__WEBPACK_IMPORTED_MODULE_13__.TimelineDemonstracaoComponent, _button_control_demonstracao_button_control_demonstracao_component__WEBPACK_IMPORTED_MODULE_14__.ButtonControlDemonstracaoComponent],
          imports: [_componentes_routing_module__WEBPACK_IMPORTED_MODULE_3__.ComponentesRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule, ngx_mask__WEBPACK_IMPORTED_MODULE_18__.NgxMaskModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__.NgSelectModule, angular_datatables__WEBPACK_IMPORTED_MODULE_7__.DataTablesModule, ngx_highlightjs__WEBPACK_IMPORTED_MODULE_20__.HighlightModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_21__.PerfectScrollbarModule, src_app_guia_caixa_guia_caixa_module__WEBPACK_IMPORTED_MODULE_9__.GuiaCaixaModule],
          exports: [_componentes_basicos_cards_cards_component__WEBPACK_IMPORTED_MODULE_1__.CardsComponent, _componentes_basicos_mensagens_mensagens_component__WEBPACK_IMPORTED_MODULE_4__.MensagensComponent]
        });
      })();
      /***/

    },

    /***/
    60536:
    /*!************************************************************************!*\
      !*** ./src/app/demonstracao/componentes/componentes-routing.module.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ComponentesRoutingModule": function ComponentesRoutingModule() {
          return (
            /* binding */
            _ComponentesRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _componentes_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./componentes.component */
      49906);
      /* harmony import */


      var _componentes_basicos_cards_cards_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../componentes-basicos/cards/cards.component */
      94081);
      /* harmony import */


      var _componentes_basicos_mensagens_mensagens_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../componentes-basicos/mensagens/mensagens.component */
      12861);
      /* harmony import */


      var _datatable_demonstracao_datatable_demonstracao_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./datatable-demonstracao/datatable-demonstracao.component */
      65773);
      /* harmony import */


      var _inputs_inputs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./inputs/inputs.component */
      59781);
      /* harmony import */


      var _select_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./select/select.component */
      16657);
      /* harmony import */


      var _stepper_demonstracao_stepper_demonstracao_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./stepper-demonstracao/stepper-demonstracao.component */
      17262);
      /* harmony import */


      var _tabber_demonstracao_tabber_demonstracao_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./tabber-demonstracao/tabber-demonstracao.component */
      94323);
      /* harmony import */


      var _card_button_demonstracao_card_button_demonstracao_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./card-button-demonstracao/card-button-demonstracao.component */
      40611);
      /* harmony import */


      var _timeline_demonstracao_timeline_demonstracao_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./timeline-demonstracao/timeline-demonstracao.component */
      24014);
      /* harmony import */


      var _button_control_demonstracao_button_control_demonstracao_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./button-control-demonstracao/button-control-demonstracao.component */
      39260);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: "",
        component: _componentes_component__WEBPACK_IMPORTED_MODULE_0__.ComponentesCaixaComponent,
        // canActivate: [AuthGuard],
        data: {
          title: "Componentes",
          breadcrumb: "Componentes"
        }
      }, {
        path: "cards",
        component: _componentes_basicos_cards_cards_component__WEBPACK_IMPORTED_MODULE_1__.CardsComponent,
        data: {
          title: "Cards",
          breadcrumb: "Cards",
          animation: "Cards"
        }
      }, {
        path: "mensagens",
        component: _componentes_basicos_mensagens_mensagens_component__WEBPACK_IMPORTED_MODULE_2__.MensagensComponent,
        data: {
          title: "Mensagens",
          breadcrumb: "Mensagens",
          animation: "Mensagens"
        }
      }, {
        path: "inputs",
        component: _inputs_inputs_component__WEBPACK_IMPORTED_MODULE_4__.InputsComponent,
        data: {
          title: "Inputs",
          breadcrumb: "Inputs",
          animation: "Inputs"
        }
      }, {
        path: "select",
        component: _select_select_component__WEBPACK_IMPORTED_MODULE_5__.SelectComponent,
        data: {
          title: "Select",
          breadcrumb: "Select",
          animation: "Select"
        }
      }, {
        path: "stepper",
        component: _stepper_demonstracao_stepper_demonstracao_component__WEBPACK_IMPORTED_MODULE_6__.StepperDemonstracaoComponent,
        data: {
          title: "Stepper",
          breadcrumb: "Stepper",
          animation: "Stepper"
        }
      }, {
        path: "tabber",
        component: _tabber_demonstracao_tabber_demonstracao_component__WEBPACK_IMPORTED_MODULE_7__.TabberDemonstracaoComponent,
        data: {
          title: "Tabber",
          breadcrumb: "Tabber",
          animation: "Tabber"
        }
      }, {
        path: "card-button",
        component: _card_button_demonstracao_card_button_demonstracao_component__WEBPACK_IMPORTED_MODULE_8__.CardButtonDemonstracaoComponent,
        data: {
          title: "Card-button",
          breadcrumb: "Card-button",
          animation: "Card-button"
        }
      }, {
        path: "timeline",
        component: _timeline_demonstracao_timeline_demonstracao_component__WEBPACK_IMPORTED_MODULE_9__.TimelineDemonstracaoComponent,
        data: {
          title: "Timeline",
          breadcrumb: "Timeline",
          animation: "Timeline"
        }
      }, {
        path: "datatable",
        component: _datatable_demonstracao_datatable_demonstracao_component__WEBPACK_IMPORTED_MODULE_3__.DatatableDemonstracaoComponent,
        data: {
          title: "Tabelas",
          breadcrumb: "Tabelas",
          animation: "Tabelas"
        }
      }, {
        path: "button-control",
        component: _button_control_demonstracao_button_control_demonstracao_component__WEBPACK_IMPORTED_MODULE_10__.ButtonControlDemonstracaoComponent,
        data: {
          title: "Button control",
          breadcrumb: "Button contro",
          animation: "Button contro"
        }
      }, {
        path: "**",
        redirectTo: "",
        pathMatch: "full"
      }];

      var _ComponentesRoutingModule = /*#__PURE__*/_createClass(function _ComponentesRoutingModule() {
        _classCallCheck(this, _ComponentesRoutingModule);
      });

      _ComponentesRoutingModule.ɵfac = function ComponentesRoutingModule_Factory(t) {
        return new (t || _ComponentesRoutingModule)();
      };

      _ComponentesRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
        type: _ComponentesRoutingModule
      });
      _ComponentesRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](_ComponentesRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    49906:
    /*!*******************************************************************!*\
      !*** ./src/app/demonstracao/componentes/componentes.component.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ComponentesCaixaComponent": function ComponentesCaixaComponent() {
          return (
            /* binding */
            _ComponentesCaixaComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_menu_side_menu_side_menu_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/menu/side-menu/side-menu.service */
      81518);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);

      function ComponentesCaixaComponent_div_2_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var resource_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("routerLink", resource_r3.url);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("", resource_r3.iconClass, " fa-lg mr-1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", resource_r3.name, " ");
        }
      }

      function ComponentesCaixaComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ComponentesCaixaComponent_div_2_div_1_Template, 7, 5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cols_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", cols_r1);
        }
      }

      var _ComponentesCaixaComponent = /*#__PURE__*/function () {
        function _ComponentesCaixaComponent(menuService) {
          _classCallCheck(this, _ComponentesCaixaComponent);

          this.menuService = menuService;
          this.rows = [];
          this.resources = [];
        }

        _createClass(_ComponentesCaixaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.menuService.menuItems$.subscribe(function (items) {
              var componentes = items.find(function (item) {
                return item.url === "/componentes-caixa";
              }).submenu;
              componentes.forEach(function (item) {
                _this2.resources.push(item);
              });
              _this2.resources = [].concat(_this2.resources);
              _this2.rows = _this2.groupColumns(_this2.resources);
            });
          }
        }, {
          key: "groupColumns",
          value: function groupColumns(resources) {
            var newRows = [];

            for (var index = 0; index < resources.length; index += 3) {
              newRows.push(resources.slice(index, index + 3));
            }

            return newRows;
          }
        }]);

        return _ComponentesCaixaComponent;
      }();

      _ComponentesCaixaComponent.ɵfac = function ComponentesCaixaComponent_Factory(t) {
        return new (t || _ComponentesCaixaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_menu_side_menu_side_menu_service__WEBPACK_IMPORTED_MODULE_0__.SideMenuService));
      };

      _ComponentesCaixaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _ComponentesCaixaComponent,
        selectors: [["app-componentes"]],
        decls: 3,
        vars: 1,
        consts: [[1, "titulo"], ["class", "row d-flex justify-content-center", 4, "ngFor", "ngForOf"], [1, "row", "d-flex", "justify-content-center"], ["class", "col-10 col-md-6 col-xl-4", 4, "ngFor", "ngForOf"], [1, "col-10", "col-md-6", "col-xl-4"], ["role", "button", "optionalClasses", "button-card-min-height", "routerLinkActive", "active", 1, "card", "w-75", "card-hover", "button-card", 3, "routerLink"], [1, "card-body"], [1, "header-subtitulo-caixa", "m-0", "mr-3", "text-center"]],
        template: function ComponentesCaixaComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Componentes Caixa\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ComponentesCaixaComponent_div_2_Template, 2, 1, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.rows);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wb25lbnRlcy5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    15729:
    /*!****************************************************************************************!*\
      !*** ./src/app/demonstracao/componentes/datatable-demonstracao/datatable-api-props.ts ***!
      \****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "datatableApiProps": function datatableApiProps() {
          return (
            /* binding */
            _datatableApiProps
          );
        },

        /* harmony export */
        "datatableConfigProps": function datatableConfigProps() {
          return (
            /* binding */
            _datatableConfigProps
          );
        },

        /* harmony export */
        "datatableConfigOptionsProps": function datatableConfigOptionsProps() {
          return (
            /* binding */
            _datatableConfigOptionsProps
          );
        }
        /* harmony export */

      });

      var _datatableApiProps = [{
        nome: "@Input()<br>settings: DataTableSettings",
        descricao: "Configura\xE7\xF5es gerais da tabela.<br>\n      Pode ser uma das configura\xE7\xF5es pr\xE9-definidas da classe DataTableConfig, ou uma configura\xE7\xE3o personalizada obtida atrav\xE9s do m\xE9todo DataTableConfig.getDataTableSettings( )<br>\n      Padr\xE3o: DatatableConfig.DEFAULT_SETTINGS"
      }, {
        nome: "@Input()<br>columnFilterType: DataTableColumnFilterType",
        descricao: "Tipo de filtro individual por coluna. Pode ser 'input', 'select' ou 'none'.<br>\n      Padr\xE3o: DataTableColumnFilterType.NONE"
      }, {
        nome: "@Input()<br>columnFilterPosition: DataTableColumnFilterPosition",
        descricao: "Posi\xE7\xE3o do filtro individual por coluna. Pode ser 'top', 'bottom' ou 'none'.<br>\n      Obs.: Ao utilizar filtros definidos especificamente para cada coluna (por meio do th data-filter=\"\"), \xE9 necess\xE1rio definir um valor diferente de 'none' para essa propriedade.<br>\n      Padr\xE3o: DataTableColumnFilterPosition.NONE"
      }, {
        nome: "@Input()<br>trigger: Subject<any>",
        descricao: "Subject que dispara a reinicializa\xE7\xE3o da tabela ao ser acionado pelo .next( ).<br>\n      Obs.: A DataTable tamb\xE9m pode ser recarregada pelo m\xE9todo reloadTable( )"
      }, {
        nome: "reloadTable( ): void",
        descricao: "Reinicializa a tabela."
      }, {
        nome: "updateSettings(settings: DataTableSettings): void",
        descricao: "Atualiza as configura\xE7\xF5es da tabela."
      }, {
        nome: "updateFilterColumnPosition(position: string): void",
        descricao: "Atualiza a posi\xE7\xE3o dos filtros individuais por coluna."
      }, {
        nome: "updateFilterColumnType(type: string): void",
        descricao: "Atualiza o tipo dos filtros individuais por coluna."
      }];
      var _datatableConfigProps = [{
        nome: "static DEFAULT_SETTINGS: DataTableSettings",
        descricao: "Configura\xE7\xE3o padr\xE3o."
      }, {
        nome: "static COMPLETE_SETTINGS: DataTableSettings",
        descricao: "Configura\xE7\xE3o com todos os recursos."
      }, {
        nome: "static COMPLETE_NO_BUTTON_SETTINGS: DataTableSettings",
        descricao: "Configura\xE7\xE3o completa exceto bot\xF5es."
      }, {
        nome: "static PAGINATION_INFO_SETTINGS: DataTableSettings",
        descricao: "Apenas pagina\xE7\xE3o e informa\xE7\xE3o de registros."
      }, {
        nome: "getDataTableSettings(options: DataTableConfigOptions): DataTableSettings",
        descricao: "M\xE9todo que recebe um objeto options com um ou mais par\xE2metros e retorna a configura\xE7\xE3o desejada da DataTable."
      }];
      var _datatableConfigOptionsProps = [{
        nome: "showFilter: boolean",
        descricao: "Exibir campo de filtro geral."
      }, {
        nome: "showLength: boolean",
        descricao: "Exibir campo select que permite selecionar o n\xFAmero de linhas por p\xE1gina."
      }, {
        nome: "showButtons: boolean",
        descricao: "Exibir bot\xF5es."
      }, {
        nome: "showInfo: boolean",
        descricao: "Exibir informa\xE7\xF5es no rodap\xE9 da tabela sobre o total de registros."
      }, {
        nome: "showPagination: boolean",
        descricao: "Exibir e realizar pagina\xE7\xE3o."
      }, {
        nome: "menuLength: number[ ]",
        descricao: "Caso o 'showLength' esteja habilitado, permite informar quais as quantidades de linhas por p\xE1gina o usu\xE1rio poder\xE1 escolher."
      }];
      /***/
    },

    /***/
    10151:
    /*!********************************************************************************************!*\
      !*** ./src/app/demonstracao/componentes/datatable-demonstracao/datatable-code-examples.ts ***!
      \********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DataTableCodeExamples": function DataTableCodeExamples() {
          return (
            /* binding */
            _DataTableCodeExamples
          );
        }
        /* harmony export */

      });

      var _DataTableCodeExamples = /*#__PURE__*/_createClass(function _DataTableCodeExamples() {
        _classCallCheck(this, _DataTableCodeExamples);
      });

      _DataTableCodeExamples.codeDescricao = "<cx-datatable>\n   <table datatable class=\"table table-striped table-hover\">\n     <thead>\n       <tr>\n         <th>Coluna 1</th>\n         <th>Coluna 2</th>\n         <th>Coluna 3</th>\n       </tr>\n     </thead>\n     <tbody>\n       <tr *ngFor=\"let linha of linhas\">\n         <td>{{ linha.dado1 }}</td>\n         <td>{{ linha.dado2 }}</td>\n         <td>{{ linha.dado3 }}</td>\n       </tr>\n     </tbody>\n   </table>\n </cx-datatable>";
      _DataTableCodeExamples.codeTsTemplateString = "import { Component, ViewChild } from '@angular/core';\nimport { DadosTabelaService } from '~dados-tabela.service.ts';\n\n@Component({\n  selector: 'app-tabelas',\n  templateUrl: './tabelas.component.html',\n  styleUrls: ['./tabelas.component.scss']\n})\nexport class TabelasComponent {\n\n  @ViewChild(\"tabelaExemplo\", { static: true })\n  datatable: DataTableComponent;\n\n  dadosDaTabela = [];\n\n  constructor(private service: DadosTabelaService) {}\n\n  ngOnInit() {\n    this.service.consultarDados().subscribe((response: any[]) => {\n      this.dadosDaTabela = response;\n      if (this.datatable) {\n        this.datatable.reloadTable();\n      }\n    });\n  }\n\n}\n".trim();
      _DataTableCodeExamples.htmlCodeDatatable = "\t\t\t\t\t\t<cx-datatable [settings]=\"settingsCompleta\" [trigger]=\"dtTrigger\">\n  <table datatable class=\"table table-striped table-hover\">\n    <thead>\n      <tr>\n        <th>Prato</th>\n        <th>Ingrediente</th>\n        <th>Medida</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let row of rows\">\n        <td>{{ row.dish }}</td>\n        <td>{{ row.ingredient }}</td>\n        <td>{{ row.measurement }}</td>\n      </tr>\n    </tbody>\n  </table>\n</cx-datatable>".trim();
      _DataTableCodeExamples.tsCodeDatatable = "import { Component } from '@angular/core';\nimport { DataTableConfig } from \"~datatable-definitions\";\nimport { RandomDataService, RandomDataFood } from \"~random-data.service\";\n\n@Component({\n  selector: 'app-tabelas',\n  templateUrl: './tabelas.component.html',\n  styleUrls: ['./tabelas.component.scss']\n})\nexport class TabelasComponent {\n\n  /* Exemplo de configura\xE7\xE3o pr\xE9-definida */\n  settingsCompleta = DataTableConfig.COMPLETE_SETTINGS;\n\n  /* Exemplo de configura\xE7\xE3o customizada */\n  settingsCustom = DataTableConfig.getDataTableSettings({\n    showInfo: true,\n    showPagination: true,\n    showLength: true,\n    menuLength: [5, 10, 15]\n  });\n\n  constructor (\n    public randomDataService: RandomDataService\n  ) {}\n\n  rows = [];\n  dtTrigger: Subject<any> = new Subject();\n\n  ngOnInit() {\n    this.randomDataService.getFoodData(100).subscribe((foodArray: RandomDataFood[]) => {\n      this.rows = foodArray;\n      this.dtTrigger.next();\n    });\n  }\n\n}\n".trimRight();
      _DataTableCodeExamples.htmlCodeDatatableFilter = "\t\t\t\t\t\t<cx-datatable [settings]=\"settingsCustom\" [trigger]=\"dtTrigger\" columnFilterPosition=\"top\">\n  <table datatable class=\"table table-striped table-hover\">\n    <thead>\n      <tr>\n        <th data-filter=\"input\">Prato</th>\n        <th>Ingrediente</th>\n        <th data-filter=\"select\">Medida</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let row of rows.slice(0, 10)\">\n        <td>{{ row.dish }}</td>\n        <td>{{ row.ingredient }}</td>\n        <td>{{ row.measurement }}</td>\n      </tr>\n    </tbody>\n  </table>\n</cx-datatable>".trim();
      _DataTableCodeExamples.tsCodeDatatableFilter = "import { Component } from '@angular/core';\nimport { DataTableConfig } from \"~datatable-definitions\";\nimport { RandomDataService, RandomDataFood } from \"~random-data.service\";\n\n  @Component({\n    selector: 'app-tabelas',\n    templateUrl: './tabelas.component.html',\n    styleUrls: ['./tabelas.component.scss']\n  })\n  export class TabelasComponent {\n\n    settingsCustom = DataTableConfig.getDataTableSettings({\n      showInfo: true,\n      showPagination: true,\n      showLength: true,\n      menuLength: [5, 10, 15]\n    });\n\n    constructor (\n      public randomDataService: RandomDataService\n    ) {}\n\n    rows = [];\n    dtTrigger: Subject<any> = new Subject();\n\n    ngOnInit() {\n      this.randomDataService.getFoodData(100).subscribe((foodArray: RandomDataFood[]) => {\n        this.rows = foodArray;\n        this.dtTrigger.next();\n      });\n    }\n\n  }\n".trimRight();
      /***/
    },

    /***/
    65773:
    /*!*****************************************************************************************************!*\
      !*** ./src/app/demonstracao/componentes/datatable-demonstracao/datatable-demonstracao.component.ts ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DatatableDemonstracaoComponent": function DatatableDemonstracaoComponent() {
          return (
            /* binding */
            _DatatableDemonstracaoComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! angular-datatables */
      29290);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var _componentes_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../componentes-interface */
      31438);
      /* harmony import */


      var src_app_guia_caixa_components_datatable_datatable_definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/guia-caixa/components/datatable/datatable-definitions */
      38073);
      /* harmony import */


      var _datatable_api_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./datatable-api-props */
      15729);
      /* harmony import */


      var _datatable_code_examples__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./datatable-code-examples */
      10151);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-toastr */
      83315);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var src_app_demonstracao_componentes_datatable_demonstracao_random_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/demonstracao/componentes/datatable-demonstracao/random-data.service */
      59038);
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ngx-spinner */
      55314);
      /* harmony import */


      var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ngx-highlightjs */
      24971);
      /* harmony import */


      var _shared_components_documentacao_template_documentacao_template_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../shared/components/documentacao-template/documentacao-template.component */
      8990);
      /* harmony import */


      var _guia_caixa_components_datatable_datatable_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../guia-caixa/components/datatable/datatable.component */
      93785);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _shared_components_code_fixed_nav_code_fixed_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../shared/components/code-fixed-nav/code-fixed-nav.component */
      72994);
      /* harmony import */


      var _shared_components_documentacao_api_table_documentacao_api_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../shared/components/documentacao-api-table/documentacao-api-table.component */
      17841);
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ng-select/ng-select */
      36868);
      /* harmony import */


      var _guia_caixa_components_card_caixa_card_caixa_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../guia-caixa/components/card-caixa/card-caixa.component */
      45290);

      var _c0 = ["tabela"];
      var _c1 = ["tabela2"];
      var _c2 = ["tabelaChildRows"];
      var _c3 = ["scrollElement"];

      function DatatableDemonstracaoComponent_tr_90_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](row_r5.dish);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](row_r5.ingredient);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](row_r5.measurement);
        }
      }

      function DatatableDemonstracaoComponent_tr_133_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](row_r6.dish);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](row_r6.ingredient);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](row_r6.measurement);
        }
      }

      function DatatableDemonstracaoComponent_cx_card_259_tr_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](row_r9.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](row_r9.dish);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](row_r9.ingredient);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](row_r9.measurement);
        }
      }

      function DatatableDemonstracaoComponent_cx_card_259_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "cx-card", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "h5", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Tabela");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "cx-datatable", 23, 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "table", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, "ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13, "Prato");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15, "Ingrediente");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17, "Medida");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](19, DatatableDemonstracaoComponent_cx_card_259_tr_19_Template, 9, 4, "tr", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("settings", ctx_r3.settings)("trigger", ctx_r3.dtTrigger);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r3.rows);
        }
      }

      function DatatableDemonstracaoComponent_cx_card_260_tr_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "td", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "i", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r12 = ctx.$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵattribute"]("data-content", ctx_r11.childRowContent)("data-child-name", row_r12.id)("data-child-value", row_r12.dish);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](row_r12.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](row_r12.dish);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](row_r12.ingredient);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](row_r12.measurement);
        }
      }

      function DatatableDemonstracaoComponent_cx_card_260_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "cx-card", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "h5", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Linhas afilhadas (em desenvolvimento)");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "cx-datatable", 23, 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "table", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](10, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, "ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, "Prato");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16, "Ingrediente");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](18, "Medida");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](20, DatatableDemonstracaoComponent_cx_card_260_tr_20_Template, 11, 7, "tr", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("settings", ctx_r4.settings)("trigger", ctx_r4.dtTrigger);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r4.rows);
        }
      }

      var _DatatableDemonstracaoComponent = /*#__PURE__*/function (_componentes_interfac2) {
        _inherits(_DatatableDemonstracaoComponent, _componentes_interfac2);

        var _super2 = _createSuper(_DatatableDemonstracaoComponent);

        function _DatatableDemonstracaoComponent(toastr, fb, randomDataService, spinner, cdr) {
          var _this3;

          _classCallCheck(this, _DatatableDemonstracaoComponent);

          _this3 = _super2.call(this, toastr);
          _this3.toastr = toastr;
          _this3.fb = fb;
          _this3.randomDataService = randomDataService;
          _this3.spinner = spinner;
          _this3.cdr = cdr;
          _this3.examples = _datatable_code_examples__WEBPACK_IMPORTED_MODULE_4__.DataTableCodeExamples;
          _this3.formDTConfig = _this3.fb.group({
            buttons: true,
            searching: true,
            showFilter: true,
            showLength: true,
            showButtons: true,
            showTable: true,
            showInfo: true,
            showProcessing: true,
            showPagination: true,
            columnFilterType: "",
            columnFilterPosition: ""
          });
          _this3.spiedTags = ["APP-DOCUMENTACAO-TEMPLATE"];
          _this3.sectionOffset = 0;
          _this3.currentSection = "painelTabelaDatatable";
          _this3.rows = [];
          _this3.dtCompleteOptions = {};
          _this3.dtCustomOptions = {};
          _this3.dtSimpleOptions = {};
          _this3.settings = src_app_guia_caixa_components_datatable_datatable_definitions__WEBPACK_IMPORTED_MODULE_2__.DataTableConfig.DEFAULT_SETTINGS;
          _this3.settingsPadrao = src_app_guia_caixa_components_datatable_datatable_definitions__WEBPACK_IMPORTED_MODULE_2__.DataTableConfig.DEFAULT_SETTINGS;
          _this3.settingsCompleta = src_app_guia_caixa_components_datatable_datatable_definitions__WEBPACK_IMPORTED_MODULE_2__.DataTableConfig.COMPLETE_SETTINGS;
          _this3.settingsCompletaSemBotoes = src_app_guia_caixa_components_datatable_datatable_definitions__WEBPACK_IMPORTED_MODULE_2__.DataTableConfig.COMPLETE_NO_BUTTON_SETTINGS;
          _this3.settingsInfo = src_app_guia_caixa_components_datatable_datatable_definitions__WEBPACK_IMPORTED_MODULE_2__.DataTableConfig.PAGINATION_INFO_SETTINGS;
          _this3.settingsSimples = src_app_guia_caixa_components_datatable_datatable_definitions__WEBPACK_IMPORTED_MODULE_2__.DataTableConfig.SIMPLE_SETTINGS;
          _this3.settingsCustom = src_app_guia_caixa_components_datatable_datatable_definitions__WEBPACK_IMPORTED_MODULE_2__.DataTableConfig.getDataTableSettings({
            showInfo: true,
            showPagination: true,
            showLength: true,
            menuLength: [5, 10, 15]
          });
          _this3.settingsComTodosBotoes = src_app_guia_caixa_components_datatable_datatable_definitions__WEBPACK_IMPORTED_MODULE_2__.DataTableConfig.getDataTableSettings({
            buttons: [src_app_guia_caixa_components_datatable_datatable_definitions__WEBPACK_IMPORTED_MODULE_2__.DataTableButtons.EXCEL.button, src_app_guia_caixa_components_datatable_datatable_definitions__WEBPACK_IMPORTED_MODULE_2__.DataTableButtons.PRINT.button
            /*       DataTableButtons.COPY.button,
                  DataTableButtons.COLVIS.button */
            ],
            showButtons: true,
            showFilter: true,
            showInfo: true,
            showLength: true,
            showPagination: true,
            showProcessing: true
          });
          _this3.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Subject();
          _this3.navItems = [{
            id: "painelDatatable",
            name: "Configuração"
          }, {
            id: "painelDatatableFiltros",
            name: "Filtros por coluna"
          }, {
            id: "painelDatatableReinicializacao",
            name: "Reinicialização"
          }];
          _this3.propsApi = _datatable_api_props__WEBPACK_IMPORTED_MODULE_3__.datatableApiProps;
          _this3.propsConfig = _datatable_api_props__WEBPACK_IMPORTED_MODULE_3__.datatableConfigProps;
          _this3.propsConfigOptions = _datatable_api_props__WEBPACK_IMPORTED_MODULE_3__.datatableConfigOptionsProps;
          _this3.filterPosition = "";
          _this3.cols = 0;
          _this3.trigger = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Subject();
          _this3.showTable = true;
          _this3.codeDataFilterInput = "<th data-filter=\"input\">T\xEDtulo</th>";
          _this3.codeDataFilterSelect = "<th data-filter=\"select\">T\xEDtulo</th>";
          _this3.codeDataFilterAllColumns = "<cx-datatable columnFilterPosition=\"bottom\" columnFilterType=\"select\">...</cx-datatable>";
          _this3.codeHtmlTemplateString = "<cx-datatable #tabelaExemplo>...</cx-datatable>";
          _this3.childRowContent = [];
          return _this3;
        }

        _createClass(_DatatableDemonstracaoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.dtSimpleOptions = src_app_guia_caixa_components_datatable_datatable_definitions__WEBPACK_IMPORTED_MODULE_2__.DataTableConfig.SIMPLE_SETTINGS;
            this.dtCompleteOptions = src_app_guia_caixa_components_datatable_datatable_definitions__WEBPACK_IMPORTED_MODULE_2__.DataTableConfig.COMPLETE_SETTINGS;
            this.dtCustomOptions = src_app_guia_caixa_components_datatable_datatable_definitions__WEBPACK_IMPORTED_MODULE_2__.DataTableConfig.getDataTableSettings({
              buttons: [src_app_guia_caixa_components_datatable_datatable_definitions__WEBPACK_IMPORTED_MODULE_2__.DataTableConfig.DEFAULT_BUTTONS.EXCEL],
              showInfo: true,
              showFilter: true,
              showPagination: true,
              menuLength: [5, 10, 50]
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.dtTrigger.unsubscribe();
          }
        }, {
          key: "updateSettings",
          value: function updateSettings(newConfig) {
            this.settings = JSON.parse(JSON.stringify(newConfig));
            this.cdr.detectChanges();
            this.table.updateSettings(this.settings);
            /*     this.formDTConfig.get("columnFilterType").setValue(this.settings.columnFilterType);
                this.formDTConfig.get("columnFilterPosition").setValue(this.settings.columnFilterPosition); */
          }
        }, {
          key: "updateConfigOption",
          value: function updateConfigOption(option, value) {
            switch (option) {
              case "buttons":
                this.settings["buttons"] = value ? src_app_guia_caixa_components_datatable_datatable_definitions__WEBPACK_IMPORTED_MODULE_2__.DatatableDefaultButtonsList : [];
                break;

              case "filter":
                this.settings.searching = value;
                break;

              case "pagination":
                this.settings.paging = value;
                break;

              case "length":
                this.settings.lengthChange = value;
                break;

              case "columnFilterType":
                this.settings.columnFilterType = value;
                break;
            }

            this.table.updateSettings(this.settings);
            this.tableChildRows.updateSettings(this.settings);
          }
        }, {
          key: "getTableConfig",
          value: function getTableConfig() {
            if (this.formDTConfig.get("showButtons").value) {
              this.formDTConfig.get("buttons").setValue(src_app_guia_caixa_components_datatable_datatable_definitions__WEBPACK_IMPORTED_MODULE_2__.DatatableDefaultButtonsList);
            } else {
              this.formDTConfig.get("buttons").setValue([]);
            }

            var newConfig = src_app_guia_caixa_components_datatable_datatable_definitions__WEBPACK_IMPORTED_MODULE_2__.DataTableConfig.getDataTableSettings(this.formDTConfig.value);
            this.settings = JSON.parse(JSON.stringify(newConfig));
            this.table.updateSettings(this.settings);
            this.tableChildRows.updateSettings(this.settings);
          }
        }, {
          key: "hasProperty",
          value: function hasProperty(prop) {
            return this.settings.dom.toLowerCase().includes(prop);
          }
        }, {
          key: "printConfig",
          value: function printConfig() {
            var configPrint = JSON.parse(JSON.stringify(this.settings));
            configPrint["language"] = null;
            return configPrint;
          }
        }, {
          key: "setFilterPosition",
          value: function setFilterPosition(position) {
            this.table.updateFilterColumnPosition(position);
          }
        }, {
          key: "consultarDados",
          value: function consultarDados() {
            if (!this.rows || this.rows && this.rows.length < 1) {
              this.fetchData();
            }
          }
        }, {
          key: "fetchData",
          value: function fetchData() {
            var _this4 = this;

            this.spinner.show("global");
            this.randomDataService.getFoodData(100).subscribe(function (foodArray) {
              _this4.rows = foodArray;
              /*       if (this.table) {
                      this.table.reloadTable();
                    } */

              _this4.dtTrigger.next();

              _this4.spinner.hide("global");
            });
          }
        }, {
          key: "atualizar",
          value: function atualizar() {
            // this.getTableConfig();
            this.settings = src_app_guia_caixa_components_datatable_datatable_definitions__WEBPACK_IMPORTED_MODULE_2__.DataTableConfig.PAGINATION_INFO_SETTINGS;
            this.table.reloadTable();
          }
        }]);

        return _DatatableDemonstracaoComponent;
      }(_componentes_interface__WEBPACK_IMPORTED_MODULE_1__.ComponentesInterface);

      _DatatableDemonstracaoComponent.ɵfac = function DatatableDemonstracaoComponent_Factory(t) {
        return new (t || _DatatableDemonstracaoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_13__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_demonstracao_componentes_datatable_demonstracao_random_data_service__WEBPACK_IMPORTED_MODULE_5__.RandomDataService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_15__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef));
      };

      _DatatableDemonstracaoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
        type: _DatatableDemonstracaoComponent,
        selectors: [["app-tabelas"]],
        viewQuery: function DatatableDemonstracaoComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_0__.DataTableDirective, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c0, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c1, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c2, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c3, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.datatableElement = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.table2 = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.tableChildRows = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.scrollElement = _t.first);
          }
        },
        hostBindings: function DatatableDemonstracaoComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("scroll", function DatatableDemonstracaoComponent_scroll_HostBindingHandler($event) {
              return ctx.onScroll($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresolveWindow"]);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]],
        decls: 261,
        vars: 40,
        consts: [[1, "titulo", "mb-0"], [1, "my-4"], [1, "citation-highlight"], ["target", "_blank", "href", "https://www.npmjs.com/package/angular-datatables", 1, "text-destaque"], [1, "alert", "alert-outline-warning"], [1, "lista-alert"], ["href", "https://datatables.net/forums/discussion/30847/cannot-use-colspan-in-tbody", "target", "_blank"], [1, "font-fam-bold"], [3, "highlight"], ["role", "tablist", 1, "nav", "nav-pills", "tab-caixa"], [1, "nav-item"], ["data-toggle", "tab", "href", "#visaoGeral", "role", "tab", 1, "nav-link", "text-uppercase", "active"], ["data-toggle", "tab", "href", "#api", "role", "tab", 1, "nav-link", "text-uppercase"], ["data-toggle", "tab", "href", "#exemplos", "role", "tab", 1, "nav-link", "text-uppercase", 3, "click"], [1, "tab-content"], ["id", "visaoGeral", "role", "tabpanel", 1, "tab-pane", "fade", "show", "active"], [1, "row", "no-gutters"], [1, "col-12", "col-xl-9", "pr-2"], ["scrollElement", ""], ["id", "painelDatatable", 3, "cardTitle", "codeViewId", "htmlTabId", "htmlCode", "tsTabId", "tsCode"], [1, "descricao"], ["data-toggle", "collapse", "href", "#conteudoPainelDatatable", 1, "btn", "btn-accent", 3, "click"], ["id", "conteudoPainelDatatable", 1, "conteudo", "collapse"], [3, "settings", "trigger"], ["datatable", "", 1, "table", "table-striped", "table-hover"], [4, "ngFor", "ngForOf"], ["id", "painelDatatableFiltros", 3, "cardTitle", "codeViewId", "htmlTabId", "htmlCode", "tsTabId", "tsCode"], [1, "my-2"], ["data-toggle", "collapse", "href", "#conteudoPainelFiltro", 1, "btn", "btn-accent", 3, "click"], ["id", "conteudoPainelFiltro", 1, "conteudo", "collapse"], ["columnFilterPosition", "top", 3, "settings", "trigger"], ["data-filter", "input"], ["data-filter", "select"], ["id", "painelDatatableReinicializacao", 3, "cardTitle", "codeViewId", "showCodeButton"], ["id", "conteudoPainelReload", 1, "conteudo", "collapse"], ["id", "navSection", 1, "d-none", "col-3", "d-xl-flex", "pl-4"], [3, "items", "currentSection"], ["id", "api", "role", "tabpanel", 1, "tab-pane", "fade"], [1, "card"], [1, "card-body"], [3, "props"], ["titulo", "DataTableConfig", "descricao", "Classe de configura\xE7\xF5es pr\xE9-definidas e m\xE9todos auxiliares", 3, "props"], ["titulo", "DataTableConfigOptions", "descricao", "Par\xE2metros para o m\xE9todo DataTableConfig.getDataTableSettings( )", 3, "props"], ["id", "exemplos", "role", "tabpanel", 1, "tab-pane", "fade"], ["id", "cardFiltros", 1, "card", "mb-4"], [3, "formGroup"], [1, "subtitulo", "mb-4"], [1, "row", "align-items-center", "mb-3"], [1, "col-2"], [1, "custom-control", "custom-checkbox"], ["formControlName", "showButtons", "type", "checkbox", "id", "checkBotoes", 1, "custom-control-input", 3, "checked", "change"], ["for", "checkBotoes", 1, "custom-control-label"], ["formControlName", "showFilter", "type", "checkbox", "id", "checkFiltro", 1, "custom-control-input", 3, "checked", "change"], ["for", "checkFiltro", 1, "custom-control-label"], ["formControlName", "showPagination", "type", "checkbox", "id", "checkPaging", 1, "custom-control-input", 3, "checked", "change"], ["for", "checkPaging", 1, "custom-control-label"], ["formControlName", "showInfo", "type", "checkbox", "id", "checkInfo", 1, "custom-control-input", 3, "checked", "change"], ["for", "checkInfo", 1, "custom-control-label"], ["formControlName", "showLength", "type", "checkbox", "id", "checkLength", 1, "custom-control-input", 3, "checked", "change"], ["for", "checkLength", 1, "custom-control-label"], [1, "row"], [1, "col-3", "my-3"], ["formControlName", "columnFilterType", 3, "ngModelChange"], ["value", "input", "selected", ""], ["value", "select"], ["formControlName", "columnFilterPosition", 3, "ngModelChange"], ["value", "top", "selected", ""], ["value", "bottom"], [1, "btn", "btn-accent", 3, "click"], [1, "fa", "fa-cog", "mr-2"], [1, "fa", "fa-sync", "mr-2"], [1, "fa", "fa-eye", "mr-2"], [1, "my-5"], ["id", "cardTabelaSandbox", "class", "my-3", 4, "ngIf"], ["id", "cardTabelaSandboxChildRows", "class", "card my-3", 4, "ngIf"], ["id", "cardTabelaSandbox", 1, "my-3"], [1, "card-header"], [1, "subtitulo"], ["tabela", ""], ["id", "cardTabelaSandboxChildRows", 1, "card", "my-3"], ["tabelaChildRows", ""], ["datatable", "", 1, "table", "table-striped"], [1, "table-expand-button"], [1, "fa", "fa-plus"]],
        template: function DatatableDemonstracaoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " DataTable\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "O componente ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, "cx-datatable");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, " em conjunto com a diretiva ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, "datatable");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, " adiciona funcionalidades especiais a tabelas comuns como filtro, ordena\xE7\xE3o, pagina\xE7\xE3o, exporta\xE7\xE3o em .xls e impress\xE3o.");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13, "O componente implementa a biblioteca ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15, " Angular + Datatables");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](18, " Este componente ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20, "n\xE3o");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](21, " funciona nas seguintes situa\xE7\xF5es: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](25, " Tabela com 'colspan' no 'tbody' ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](26, ". A biblioteca DataTables exige que todas as linhas do 'tbody' tenham a mesma quantidade de colunas.");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](27, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](28, " OBS: \xC9 poss\xEDvel contornar essa limita\xE7\xE3o acrescentando os 'td's faltantes com 'display: none', mas os efeitos s\xE3o imprevis\xEDveis. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](29, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](30, "Tabela dentro de outra tabela");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](31, "h6", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](32, "HTML:");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](33, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](34, "code", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "ul", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](36, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](37, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](38, " Vis\xE3o Geral ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](39, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](40, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](41, " API ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](42, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](43, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DatatableDemonstracaoComponent_Template_a_click_43_listener() {
              return ctx.consultarDados();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](44, " Exemplos ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](45, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](46, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](47, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](48, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](49, "section", 17, 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](51, "app-documentacao-template", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](52, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](53, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](54, "O atributo ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](55, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](56, "settings");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](57, " recebe um objeto do tipo ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](58, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](59, "DataTableSettings");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](60, " com a configura\xE7\xE3o desejada da tabela, informando quais elementos ser\xE3o exibidos.");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](61, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](62, "A classe ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](63, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](64, "DataTableConfig");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](65, " possui configura\xE7\xF5es pr\xE9-definidas mas pode-se utilizar o m\xE9todo ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](66, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](67, "getDataTableSettings( )");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](68, " para definir configura\xE7\xF5es customizadas.");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](69, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](70, "Os elementos configur\xE1veis s\xE3o: Bot\xF5es, Filtro geral, Quantidade de linhas por p\xE1gina, Informativo e Pagina\xE7\xE3o.");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](71, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](72, "Caso o atributo n\xE3o seja informado \xE9 aplicada a configura\xE7\xE3o padr\xE3o, ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](73, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](74, "DataTableConfig.DEFAULT_SETTINGS");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](75, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](76, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DatatableDemonstracaoComponent_Template_button_click_76_listener() {
              return ctx.consultarDados();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](77, "Exibir tabela");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](78, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](79, "cx-datatable", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](80, "table", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](81, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](82, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](83, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](84, "Prato");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](85, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](86, "Ingrediente");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](87, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](88, "Medida");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](89, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](90, DatatableDemonstracaoComponent_tr_90_Template, 7, 3, "tr", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](91, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](92, "app-documentacao-template", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](93, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](94, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](95, "Filtros individuais por coluna podem ser acrescentados com os atributos ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](96, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](97, "columnFilterType: DataTableColumnFilterType");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](98, " (\"input\" ou \"select\") e ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](99, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](100, "columnFilterPosition: DataTableColumnFilterPosition");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](101, " (\"top\" ou \"bottom\"). ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](102, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](103, " Neste caso abaixo, todas as colunas ter\xE3o um campo de filtro do tipo select na parte de baixo da tabela: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](104, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](105, "code", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](106, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](107, " Caso os filtros precisem ser informados coluna a coluna, deve-se atribuir apenas o ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](108, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](109, "columnFilterPosition");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](110, ", e depois, em cada ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](111, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](112, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](113, " do header, informar o tipo do filtro desta forma: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](114, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](115, "code", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](116, " ou ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](117, "pre", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](118, "code", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](119, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DatatableDemonstracaoComponent_Template_button_click_119_listener() {
              return ctx.consultarDados();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](120, "Exibir tabela");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](121, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](122, "cx-datatable", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](123, "table", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](124, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](125, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](126, "th", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](127, "Prato");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](128, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](129, "Ingrediente");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](130, "th", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](131, "Medida");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](132, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](133, DatatableDemonstracaoComponent_tr_133_Template, 7, 3, "tr", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](134, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](135, "app-documentacao-template", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](136, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](137, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](138, "Na grande maioria dos casos os dados das tabelas s\xE3o carregados de fontes ass\xEDncronas, como uma consulta a um servi\xE7o. Assim, quando os dados da tabela forem atualizados, h\xE1 duas maneiras de reinicializar a DataTable.");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](139, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](140, "Uma delas \xE9 a forma exibida nos exemplos anteriores. O componente ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](141, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](142, "cx-datatable");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](143, " recebe no atributo ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](144, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](145, "trigger");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](146, " um ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](147, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](148, "Subject");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](149, ". Quando for necess\xE1rio atualizar a tabela, basta chamar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](150, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](151, "subject.next( )");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](152, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](153, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](154, "A alternativa \xE9 acessar o componente diretamente. Coloca-se uma template string no componente ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](155, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](156, "cx-datatable");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](157, ", e ent\xE3o o seleciona utilizando o recurso ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](158, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](159, "@ViewChild");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](160, ". Para atualizar a tabela, chama-se o m\xE9todo ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](161, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](162, "datatable.reloadTable( )");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](163, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](164, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](165, "OBS: O atributo \"static: true\" na configura\xE7\xE3o do @ViewChild \xE9 necess\xE1rio quando h\xE1 a possibilidade da tabela ser retirada do DOM, estando dentro de um ngIf, por exemplo. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](166, "h6", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](167, "HTML:");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](168, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](169, "code", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](170, "h6", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](171, "TS:");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](172, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](173, "code", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](174, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](175, "nav", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](176, "app-code-fixed-nav", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](177, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](178, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](179, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](180, "app-documentacao-api-table", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](181, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](182, "app-documentacao-api-table", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](183, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](184, "app-documentacao-api-table", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](185, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](186, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](187, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](188, "form", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](189, "h5", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](190, "Op\xE7\xF5es");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](191, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](192, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](193, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](194, "input", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function DatatableDemonstracaoComponent_Template_input_change_194_listener() {
              return ctx.getTableConfig();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](195, "label", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](196, " Bot\xF5es ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](197, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](198, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](199, "input", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function DatatableDemonstracaoComponent_Template_input_change_199_listener() {
              return ctx.getTableConfig();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](200, "label", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](201, " Filtro Geral ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](202, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](203, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](204, "input", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function DatatableDemonstracaoComponent_Template_input_change_204_listener() {
              return ctx.getTableConfig();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](205, "label", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](206, " Pagina\xE7\xE3o ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](207, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](208, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](209, "input", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function DatatableDemonstracaoComponent_Template_input_change_209_listener() {
              return ctx.getTableConfig();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](210, "label", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](211, " Informativo ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](212, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](213, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](214, "input", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function DatatableDemonstracaoComponent_Template_input_change_214_listener() {
              return ctx.getTableConfig();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](215, "label", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](216, " Linhas por p\xE1gina ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](217, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](218, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](219, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](220, "Filtro por coluna");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](221, "ng-select", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function DatatableDemonstracaoComponent_Template_ng_select_ngModelChange_221_listener($event) {
              return ctx.updateConfigOption("columnFilterType", $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](222, "ng-option");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](223, "Nenhum");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](224, "ng-option", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](225, "Campo simples");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](226, "ng-option", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](227, "Campo select");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](228, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](229, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](230, "Posi\xE7\xE3o do filtro");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](231, "ng-select", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function DatatableDemonstracaoComponent_Template_ng_select_ngModelChange_231_listener($event) {
              return ctx.setFilterPosition($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](232, "ng-option", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](233, "Topo");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](234, "ng-option", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](235, "Rodap\xE9");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](236, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](237, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](238, "button", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DatatableDemonstracaoComponent_Template_button_click_238_listener() {
              return ctx.updateSettings(ctx.settingsPadrao);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](239, "i", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](240, " Configura\xE7\xE3o Padr\xE3o ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](241, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](242, "button", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DatatableDemonstracaoComponent_Template_button_click_242_listener() {
              return ctx.updateSettings(ctx.settingsComTodosBotoes);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](243, "i", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](244, " Configura\xE7\xE3o Completa ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](245, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](246, "button", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DatatableDemonstracaoComponent_Template_button_click_246_listener() {
              return ctx.updateSettings(ctx.settingsSimples);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](247, "i", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](248, " Configura\xE7\xE3o Simples ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](249, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](250, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](251, "button", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DatatableDemonstracaoComponent_Template_button_click_251_listener() {
              return ctx.fetchData();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](252, "i", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](253, " Buscar novos dados ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](254, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](255, "button", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DatatableDemonstracaoComponent_Template_button_click_255_listener() {
              return ctx.showTable = !ctx.showTable;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](256, "i", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](257, " Exibir / Ocultar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](258, "hr", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](259, DatatableDemonstracaoComponent_cx_card_259_Template, 20, 3, "cx-card", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](260, DatatableDemonstracaoComponent_cx_card_260_Template, 21, 3, "cx-card", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](34);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("highlight", ctx.examples.codeDescricao);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("cardTitle", "Configura\xE7\xE3o")("codeViewId", "codePainelDatatable")("htmlTabId", "htmlCodeDatatable")("htmlCode", ctx.examples.htmlCodeDatatable)("tsTabId", "tsCodeDatatable")("tsCode", ctx.examples.tsCodeDatatable);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("settings", ctx.settingsCompleta)("trigger", ctx.dtTrigger);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.rows);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("cardTitle", "Filtros por coluna")("codeViewId", "codePainelFiltros")("htmlTabId", "htmlCodeDatatableFilter")("htmlCode", ctx.examples.htmlCodeDatatableFilter)("tsTabId", "tsCodeDatatableFilter")("tsCode", ctx.examples.tsCodeDatatableFilter);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("highlight", ctx.codeDataFilterAllColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("highlight", ctx.codeDataFilterInput);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("highlight", ctx.codeDataFilterSelect);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("settings", ctx.settingsCustom)("trigger", ctx.dtTrigger);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.rows.slice(0, 10));

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("cardTitle", "Reinicializa\xE7\xE3o")("codeViewId", "codePainelReload")("showCodeButton", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](34);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("highlight", ctx.codeHtmlTemplateString);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("highlight", ctx.examples.codeTsTemplateString);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("items", ctx.navItems)("currentSection", ctx.currentSection);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("props", ctx.propsApi);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("props", ctx.propsConfig);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("props", ctx.propsConfigOptions);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.formDTConfig);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("checked", ctx.settings.configOptions.showButtons);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("checked", ctx.settings.configOptions.showFilter);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("checked", ctx.settings.configOptions.showPagination);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("checked", ctx.settings.configOptions.showInfo);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("checked", ctx.settings.configOptions.showLength);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](45);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.showTable);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.showTable);
          }
        },
        directives: [ngx_highlightjs__WEBPACK_IMPORTED_MODULE_16__.Highlight, _shared_components_documentacao_template_documentacao_template_component__WEBPACK_IMPORTED_MODULE_6__.DocumentacaoTemplateComponent, _guia_caixa_components_datatable_datatable_component__WEBPACK_IMPORTED_MODULE_7__.DataTableComponent, angular_datatables__WEBPACK_IMPORTED_MODULE_0__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _shared_components_code_fixed_nav_code_fixed_nav_component__WEBPACK_IMPORTED_MODULE_8__.CodeFixedNavComponent, _shared_components_documentacao_api_table_documentacao_api_table_component__WEBPACK_IMPORTED_MODULE_9__.DocumentacaoApiTableComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControlName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__["ɵr"], _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _guia_caixa_components_card_caixa_card_caixa_component__WEBPACK_IMPORTED_MODULE_10__.CardCaixaComponent],
        styles: [".lista-alert[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  margin-bottom: 0;\n}\n.lista-alert[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGF0YWJsZS1kZW1vbnN0cmFjYW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyxnQkFBQTtFQUNBLGdCQUFBO0FBQ0g7QUFBRztFQUNHLGtCQUFBO0FBRU4iLCJmaWxlIjoiZGF0YXRhYmxlLWRlbW9uc3RyYWNhby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0YS1hbGVydCB7XHJcbiAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgIGxpIHtcclxuICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gICB9XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    59781:
    /*!*********************************************************************!*\
      !*** ./src/app/demonstracao/componentes/inputs/inputs.component.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InputsComponent": function InputsComponent() {
          return (
            /* binding */
            _InputsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var src_app_shared_validators_date_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/validators/date.validator */
      76006);
      /* harmony import */


      var _componentes_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../componentes-interface */
      31438);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-toastr */
      83315);
      /* harmony import */


      var _shared_components_documentacao_template_documentacao_template_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/components/documentacao-template/documentacao-template.component */
      8990);
      /* harmony import */


      var _guia_caixa_components_input_caixa_input_caixa_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../guia-caixa/components/input-caixa/input-caixa.component */
      31274);
      /* harmony import */


      var _guia_caixa_components_input_caixa_input_caixa_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../guia-caixa/components/input-caixa/input-caixa.directive */
      57274);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      54364);

      var _c0 = ["scrollElement"];

      var _c1 = function _c1(a0) {
        return {
          "ng-invalid": a0
        };
      };

      var _c2 = function _c2() {
        return {
          "simpleDate": "Data inv\xE1lida"
        };
      };

      var _c3 = function _c3(a0) {
        return {
          "active": a0
        };
      };

      var _InputsComponent = /*#__PURE__*/function (_componentes_interfac3) {
        _inherits(_InputsComponent, _componentes_interfac3);

        var _super3 = _createSuper(_InputsComponent);

        function _InputsComponent(fb, toastr) {
          var _this5;

          _classCallCheck(this, _InputsComponent);

          _this5 = _super3.call(this, toastr);
          _this5.fb = fb;
          _this5.toastr = toastr;
          _this5.CELLPHONE = '(00) 00000-0000';
          _this5.LANDLINE = '(00) 0000-0000';
          _this5.phoneMask = _this5.LANDLINE;
          _this5.phoneNumberLength = 0;
          _this5.phoneNumber = '';
          _this5.previusLength = 0;
          _this5.sectionOffset = 0;
          _this5.spiedTags = ['APP-DOCUMENTACAO-TEMPLATE'];
          _this5.currentSection = "painelInputBasico";
          _this5.formulario = _this5.fb.group({
            nome: ['Fulano da Silva'],
            tel: [11985163524, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(10)]],
            idade: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.min(18), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.max(100)]],
            nascimento: ['01/01/1985', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, src_app_shared_validators_date_validator__WEBPACK_IMPORTED_MODULE_0__.DateValidator.simpleDate]],
            mesAno: ['04/2020', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, src_app_shared_validators_date_validator__WEBPACK_IMPORTED_MODULE_0__.DateValidator.simpleMonthDate]],
            texto: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(20)]]
          });
          _this5.mesError = [{
            "simpleMonthDate": "Data do tipo mês/ano inválida"
          }];
          _this5.formularioLogin = _this5.fb.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]],
            senha: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(10)]]
          });
          _this5.formulario2 = _this5.fb.group({
            mensagem: ['Campo para mensagens grandes, com várias linhas.\nComo este exemplo.', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            comida: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            filme: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            marque: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.requiredTrue]],
            valor: [50, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.min(50)]],
            condicoes: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.requiredTrue]]
          });
          _this5.ngModelTeste = 'Teste';
          _this5.showTabsInputBasico = false;
          _this5.htmlCodeInputBasico = "<form>\n  <cx-input>\n    <label>Nome</label>\n    <input inputCaixa placeholder=\"Digite seu nome aqui\" value=\"Fulano da Silva\">\n  </cx-input>\n</form>\n  ".trim();
          _this5.showTabsInputClasse = false;
          _this5.htmlCodeInputClasse = "<form>\n  <label>Input Caixa (Padr\xE3o)</label>\n  <input class=\"form-control\">\n\n  <br>\n\n  <label>Input Base</label>\n  <input class=\"input-base\">\n\n  <br>\n\n  <label>Input Info</label>\n  <input class=\"form-control-info\">\n\n  <br>\n\n  <label>Input Aux Dark</label>\n  <input class=\"form-control-aux-dark\">\n</form>\n  ".trim();
          _this5.showTabsValidacao = false;
          _this5.htmlCodeValidacao = "<form [formGroup]=\"formulario\">\n  <cx-input>\n    <label>Texto</label>\n    <input inputCaixa formControlName=\"texto\" placeholder=\"Vazio ou pelo menos 5 caracteres\">\n  </cx-input>\n\n  <cx-input>\n    <label>Idade</label>\n    <input inputCaixa formControlName=\"idade\" placeholder=\"Obrigat\xF3rio - Entre 18 e 100\" type=number>\n  </cx-input>\n</form>\n\n<cx-input>\n  <label>NG Model</label>\n  <input inputCaixa placeholder=\"Inv\xE1lido se vazio\" [(ngModel)]=\"ngModelTeste\" #ctrl=\"ngModel\" required\n    [ngClass]=\"{'ng-invalid': ngModelTeste == ''}\">\n</cx-input>\n  ".trim();
          _this5.tsCodeValidacao = "  import { Component } from '@angular/core';\n  import { FormBuilder, Validators } from '@angular/forms';\n\n  @Component({\n      selector: 'app-formularios',\n      templateUrl: './formularios.component.html',\n      styleUrls: ['./formularios.component.scss']\n  })\n  export class FormulariosComponent {\n\n    constructor(\n      private fb: FormBuilder\n    ) {}\n\n    formulario = this.fb.group({\n      texto: [null, [Validators.minLength(5)]],\n      idade: [null, [Validators.required, Validators.min(18), Validators.max(100)]]\n    });\n\n    ngModelTeste = 'Teste';\n  }\n  ".trimRight();
          _this5.showTabsCustomValidacao = false;
          _this5.htmlCodeCustomValidacao = "<form [formGroup]=\"formulario\">\n  <cx-input [customErrors]='{\"simpleDate\": \"Data inv\xE1lida\"}'>\n    <label>Data de Nascimento</label>\n    <input inputCaixa formControlName=\"nascimento\" placeholder=\"dd/mm/aaaa\">\n  </cx-input>\n\n  <cx-input [customErrors]=\"mesError\">\n    <label>M\xEAs / Ano</label>\n    <input inputCaixa formControlName=\"mesAno\" placeholder=\"mm/aaaa\">\n  </cx-input>\n</form>\n  ".trim();
          _this5.tsCodeCustomValidacao = "  import { Component } from '@angular/core';\n  import { FormBuilder, Validators } from '@angular/forms';\n\n  @Component({\n      selector: 'app-formularios',\n      templateUrl: './formularios.component.html',\n      styleUrls: ['./formularios.component.scss']\n  })\n  export class FormulariosComponent {\n\n    constructor(\n      private fb: FormBuilder\n    ) {}\n\n    /* dd/mm/aaaa */\n    simpleDateValidator = (control: FormControl) => {\n      const simpleDateRegexp = /([0-2][0-9]|(3)[0-1])(/)(((0)[0-9])|((1)[0-2]))(/)d{4}$/i;\n      return simpleDateRegexp.test(control.value) || control.value == \"\"\n        ? null\n        : { simpleDate: true };\n    }\n\n    /* mm/aaaa */\n    simpleMonthDateValidator = (control: FormControl) => {\n      const simpleDateRegexp = /^(0[1-9]|10|11|12)/20[0-9]{2}$/i;\n      return simpleDateRegexp.test(control.value) || control.value == \"\"\n        ? null\n        : { simpleMonthDate: true };\n    }\n\n    mesError = [\n      { \"simpleMonthDate\": \"Data do tipo m\xEAs/ano inv\xE1lida\" }\n    ];\n\n    formulario = this.fb.group({\n      nascimento: ['01/01/1985', [Validators.required, simpleDateValidator]],\n      mesAno: ['04/2020', [Validators.required, simpleMonthDateValidator]],\n    });\n  }\n  ".trimRight();
          _this5.showTabsInputIcone = false;
          _this5.htmlCodeInputIcone = "<form [formGroup]=\"formularioLogin\">\n  <cx-input>\n    <label>E-mail</label>\n    <img src=\"/assets/images/caixa-logo-x.png\" class=\"img-logo prefix-icon\">\n    <input inputCaixa formControlName=\"email\" placeholder=\"Endere\xE7o de e-mail v\xE1lido\">\n  </cx-input>\n\n  <cx-input>\n    <label>Senha</label>\n    <i class=\"fa fa-key prefix-icon\"></i>\n    <input inputCaixa formControlName=\"senha\" placeholder=\"M\xEDnimo de 10 caracteres\" type=\"password\">\n  </cx-input>\n</form>\n  ".trim();
          _this5.tsCodeInputIcone = "  import { Component } from '@angular/core';\n  import { FormBuilder, Validators } from '@angular/forms';\n\n  @Component({\n      selector: 'app-formularios',\n      templateUrl: './formularios.component.html',\n      styleUrls: ['./formularios.component.scss']\n  })\n  export class FormulariosComponent {\n\n    constructor(\n      private fb: FormBuilder\n    ) {}\n\n    formularioLogin = this.fb.group({\n      email: [null, [Validators.required, Validators.email]],\n      senha: [null, [Validators.required, Validators.minLength(10)]]\n    });\n  }\n  ".trimRight();
          _this5.cssCodeInputIcone = ".img-logo {\n  max-width: 20px;\n  max-height: 20px;\n}\n  ".trimRight();
          return _this5;
        }

        _createClass(_InputsComponent, [{
          key: "onPhoneChanged",
          value: function onPhoneChanged(phoneNumber) {
            this.phoneNumber = phoneNumber.target.value;
            this.phoneNumberLength = phoneNumber.target.value.length;

            if (this.phoneNumberLength <= 14 && this.phoneMask === this.CELLPHONE) {
              this.phoneMask = this.LANDLINE;
            } else if (this.phoneNumberLength === 14 && this.phoneMask === this.LANDLINE && this.previusLength === 14) {
              this.phoneMask = this.CELLPHONE;
            }

            this.previusLength = this.phoneNumberLength;
          }
        }]);

        return _InputsComponent;
      }(_componentes_interface__WEBPACK_IMPORTED_MODULE_1__.ComponentesInterface);

      _InputsComponent.ɵfac = function InputsComponent_Factory(t) {
        return new (t || _InputsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService));
      };

      _InputsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: _InputsComponent,
        selectors: [["app-inputs"]],
        viewQuery: function InputsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.scrollElement = _t.first);
          }
        },
        hostBindings: function InputsComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("scroll", function InputsComponent_scroll_HostBindingHandler($event) {
              return ctx.onScroll($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveWindow"]);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
        decls: 219,
        vars: 47,
        consts: [[1, "titulo"], ["role", "tablist", 1, "nav", "nav-pills", "tab-caixa"], [1, "nav-item"], ["data-toggle", "tab", "href", "#visaoGeral", "role", "tab", 1, "nav-link", "text-uppercase", "active"], ["data-toggle", "tab", "href", "#api", "role", "tab", 1, "nav-link", "text-uppercase"], ["data-toggle", "tab", "href", "#exemplos", "role", "tab", 1, "nav-link", "text-uppercase"], [1, "tab-content"], ["id", "visaoGeral", "role", "tabpanel", 1, "tab-pane", "fade", "show", "active"], [1, "row", "no-gutters"], [1, "col-12", "col-xl-9", "pr-2"], ["scrollElement", ""], ["id", "painelInputBasico", 3, "cardTitle", "codeViewId", "htmlTabId", "htmlCode"], [1, "descricao"], [1, "citation-highlight"], [1, "conteudo"], [1, "row"], [1, "col-12", "col-md-6", "col-lg-6"], ["inputCaixa", "", "placeholder", "Digite seu nome aqui...", "value", "Jos\xE9 da Silva"], ["id", "painelValidadores", 3, "cardTitle", "codeViewId", "htmlTabId", "htmlCode", "tsTabId", "tsCode"], [3, "formGroup"], ["inputCaixa", "", "formControlName", "texto", "placeholder", "Vazio ou pelo menos 20 caracteres"], ["inputCaixa", "", "formControlName", "idade", "placeholder", "Obrigat\xF3rio - Entre 18 e 100", "type", "number"], ["inputCaixa", "", "placeholder", "Inv\xE1lido se vazio", "required", "", 3, "ngModel", "ngClass", "ngModelChange"], ["ctrl", "ngModel"], ["id", "painelCustomValidadores", 3, "cardTitle", "codeViewId", "htmlTabId", "htmlCode", "tsTabId", "tsCode"], [3, "customErrors"], ["inputCaixa", "", "formControlName", "nascimento", "placeholder", "dd/mm/aaaa"], ["inputCaixa", "", "formControlName", "mesAno", "placeholder", "mm/aaaa"], ["id", "navSection", 1, "d-none", "col-3", "d-xl-flex", "justify-content-center"], [1, "position-fixed", "list-group", "list-group-caixa", "shadow-caixa", "border-0"], ["role", "button", 1, "list-group-item", "list-group-item-action", 3, "ngClass", "click"], ["id", "api", "role", "tabpanel", 1, "tab-pane", "fade"], [1, "col", "col-md-8"], [1, "header-subtitulo-caixa"], [1, "table-responsive"], [1, "table", "table-bordered", "table-caixa"], ["id", "exemplos", "role", "tabpanel", 1, "tab-pane", "fade"], ["id", "painelInputIcone", 3, "cardTitle", "codeViewId", "htmlTabId", "htmlCode", "tsTabId", "tsCode"], ["src", "assets/images/caixa-logo-x.png", 1, "img-logo", "prefix-icon"], ["inputCaixa", "", "formControlName", "email", "placeholder", "Endere\xE7o de e-mail v\xE1lido"], [1, "fa", "fa-key", "prefix-icon"], ["inputCaixa", "", "formControlName", "senha", "placeholder", "M\xEDnimo de 10 caracteres", "type", "password"], ["id", "painelInputClasse", 3, "cardTitle", "codeViewId", "htmlTabId", "htmlCode"], [1, "form-control"], [1, "input-base"], [1, "form-control-info"], [1, "form-control-aux-dark"]],
        template: function InputsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Inputs\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "ul", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " Vis\xE3o Geral ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " API ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, " Exemplos ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "section", 9, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "app-documentacao-template", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, " A diretiva ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "inputCaixa");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, " utilizada em conjunto com o componente ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "<cx-input>");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, " permite a estiliza\xE7\xE3o e valida\xE7\xE3o autom\xE1tica do campo. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "cx-input");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Nome");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](34, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](35, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "app-documentacao-template", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, " O componente exibir\xE1 mensagens predefinidas para cada um dos \"Validators\" do Angular Forms. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "form", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "cx-input");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "Texto");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](46, "textarea", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "cx-input");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, "Idade");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](50, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "cx-input");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, "NG Model");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "input", 22, 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function InputsComponent_Template_input_ngModelChange_54_listener($event) {
              return ctx.ngModelTeste = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](56, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "app-documentacao-template", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59, " Validadores customizados podem ser utilizados passando-os como argumento pela propriedade ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](61, "customErrors");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62, ", como um objeto ou um Array de objetos no formato: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](63, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65, "{ \"nomeDoErro\": \"Mensagem a ser exibida\" }");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](66, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "form", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "cx-input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](73, "Data de Nascimento");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](74, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](75, "cx-input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](77, "M\xEAs / Ano");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](78, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "nav", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function InputsComponent_Template_a_click_81_listener() {
              return ctx.scrollTo("painelInputBasico");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](82, " Inputs b\xE1sicos");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function InputsComponent_Template_a_click_83_listener() {
              return ctx.scrollTo("painelValidadores");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](84, " Valida\xE7\xE3o");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function InputsComponent_Template_a_click_85_listener() {
              return ctx.scrollTo("painelCustomValidadores");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](86, " Valida\xE7\xE3o Customizada");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](87, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](88, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](89, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](90, "h5", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](91, "InputCaixa");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](92, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](93, " Diretiva que permite a intera\xE7\xE3o entre os elementos ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](94, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](95, "input");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](96, " e ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](97, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](98, "textarea");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](99, " com o componente ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](100, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](101, "cx-input");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](102, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](103, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](104, "Usar como: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](105, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](106, "inputCaixa");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](107, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](108, "h5", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](109, "Cx-Input");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](110, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](111, " Componente que engloba o campo com a diretiva ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](112, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](113, "inputCaixa");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](114, ", e exibe os \xEDcones e mensagens de feedback. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](115, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](116, "Usar como: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](117, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](118, "inputCaixa");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](119, "h6", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](120, "Propriedades");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](121, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](122, "table", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](123, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](124, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](125, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](126, "Nome");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](127, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](128, "Descri\xE7\xE3o");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](129, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](130, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](131, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](132, "@Input( )");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](133, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](134, "showFeedbackIcon: boolean");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](135, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](136, " Exibir \xEDcone de feedback quando campo est\xE1 v\xE1lido ou inv\xE1lido.");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](137, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](138, " Padr\xE3o: true ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](139, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](140, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](141, "@Input( )");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](142, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](143, "showFeedbackMessage: boolean");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](144, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](145, " Exibir mensagem de erro abaixo do campo quando est\xE1 inv\xE1lido.");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](146, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](147, " Padr\xE3o: true ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](148, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](149, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](150, "@Input( )");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](151, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](152, "customErrors: string | any[ ]");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](153, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](154, " Validators personalizados que possuem suas pr\xF3prias mensagens de feedback.");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](155, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](156, " Utiliza-se um array de objetos, onde cada validator deve ser representado como: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](157, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](158);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](159, " Padr\xE3o: true ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](160, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](161, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](162, "@Input( )");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](163, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](164, "formato: string");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](165, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](166, " Campo opcional para sugerir ao usu\xE1rio o formato necess\xE1rio para o campo.");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](167, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](168, " Diferentemente do atributo placeholder, o formato ser\xE1 exibido abaixo do campo. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](169, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](170, "app-documentacao-template", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](171, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](172, " Pode-se exibir \xEDcones utilizando a classe ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](173, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](174, "prefix-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](175, " em qualquer elemento. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](176, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](177, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](178, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](179, "form", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](180, "cx-input");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](181, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](182, "E-mail");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](183, "img", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](184, "input", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](185, "cx-input");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](186, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](187, "Senha");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](188, "i", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](189, "input", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](190, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](191, "app-documentacao-template", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](192, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](193, " Uma vers\xE3o mais simples, sem a valida\xE7\xE3o autom\xE1tica, pode ser utilizada apenas com a classe ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](194, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](195, "input-caixa");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](196, " ou, para diferentes temas, ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](197, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](198, "input-caixa-(tema)");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](199, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](200, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](201, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](202, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](203, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](204, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](205, "Input Caixa (Padr\xE3o)");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](206, "input", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](207, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](208, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](209, "Input Base");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](210, "input", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](211, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](212, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](213, "Input Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](214, "input", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](215, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](216, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](217, "Input Aux Dark");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](218, "input", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("cardTitle", "Input b\xE1sico")("codeViewId", "viewInputBasico")("htmlTabId", "htmlCodeInputBasico")("htmlCode", ctx.htmlCodeInputBasico);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("cardTitle", "Valida\xE7\xE3o")("codeViewId", "viewIValidacao")("htmlTabId", "htmlIdValidacao")("htmlCode", ctx.htmlCodeValidacao)("tsTabId", "tsIdValidacao")("tsCode", ctx.tsCodeValidacao);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.formulario);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.ngModelTeste)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](38, _c1, ctx.ngModelTeste == ""));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("cardTitle", "Valida\xE7\xE3o customizada")("codeViewId", "viewIValidacaoCustom")("htmlTabId", "htmlIdValidacaoCustom")("htmlCode", ctx.htmlCodeCustomValidacao)("tsTabId", "tsIdValidacaoCustom")("tsCode", ctx.tsCodeCustomValidacao);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.formulario);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("customErrors", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](40, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("customErrors", ctx.mesError);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](41, _c3, ctx.currentSection == "painelInputBasico"));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](43, _c3, ctx.currentSection == "painelValidadores"));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](45, _c3, ctx.currentSection == "painelCustomValidadores"));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](73);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", "{", " \"nomeDoValidator\": \"Mensagem de erro do Validator\" ", "}", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("cardTitle", "\xCDcones")("codeViewId", "viewIcone")("htmlTabId", "htmlIdIcone")("htmlCode", ctx.htmlCodeInputIcone)("tsTabId", "tsIdIcone")("tsCode", ctx.tsCodeInputIcone);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.formularioLogin);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("cardTitle", "Classe")("codeViewId", "viewClasse")("htmlTabId", "htmlIdClasse")("htmlCode", ctx.htmlCodeInputClasse);
          }
        },
        directives: [_shared_components_documentacao_template_documentacao_template_component__WEBPACK_IMPORTED_MODULE_2__.DocumentacaoTemplateComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _guia_caixa_components_input_caixa_input_caixa_component__WEBPACK_IMPORTED_MODULE_3__.InputCaixaComponent, _guia_caixa_components_input_caixa_input_caixa_directive__WEBPACK_IMPORTED_MODULE_4__.InputCaixaDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass],
        styles: [".img-logo[_ngcontent-%COMP%] {\n  max-width: 20px;\n  max-height: 20px;\n}\n\n#painelFormularios[_ngcontent-%COMP%] {\n  position: relative;\n  height: 75vh;\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtBQUNEOztBQUVBO0VBQ0Msa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDRCIsImZpbGUiOiJpbnB1dHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLWxvZ28ge1xyXG5cdG1heC13aWR0aDogMjBweDtcclxuXHRtYXgtaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4jcGFpbmVsRm9ybXVsYXJpb3Mge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRoZWlnaHQ6IDc1dmg7XHJcblx0b3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59Il19 */"]
      });
      /***/
    },

    /***/
    16657:
    /*!*********************************************************************!*\
      !*** ./src/app/demonstracao/componentes/select/select.component.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SelectComponent": function SelectComponent() {
          return (
            /* binding */
            _SelectComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _componentes_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../componentes-interface */
      31438);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-toastr */
      83315);
      /* harmony import */


      var _shared_components_documentacao_template_documentacao_template_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/components/documentacao-template/documentacao-template.component */
      8990);
      /* harmony import */


      var _guia_caixa_components_select_caixa_select_caixa_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../guia-caixa/components/select-caixa/select-caixa.component */
      99536);
      /* harmony import */


      var _guia_caixa_components_select_caixa_select_caixa_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../guia-caixa/components/select-caixa/select-caixa.directive */
      20365);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);

      var _c0 = ["selectTeste"];
      var _c1 = ["scrollElement"];

      function SelectComponent_option_131_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Clique no bot\xE3o para atualizar as op\xE7\xF5es");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function SelectComponent_option_132_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var opcao_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](opcao_r3);
        }
      }

      var _c2 = function _c2() {
        return {
          liveSearch: true
        };
      };

      var _c3 = function _c3() {
        return {
          actionsBox: true
        };
      };

      var _c4 = function _c4(a0) {
        return {
          "active": a0
        };
      };

      var _SelectComponent = /*#__PURE__*/function (_componentes_interfac4) {
        _inherits(_SelectComponent, _componentes_interfac4);

        var _super4 = _createSuper(_SelectComponent);

        function _SelectComponent(toastr, fb) {
          var _this6;

          _classCallCheck(this, _SelectComponent);

          _this6 = _super4.call(this, toastr);
          _this6.toastr = toastr;
          _this6.fb = fb;
          _this6.sectionOffset = 0;
          _this6.spiedTags = ["APP-DOCUMENTACAO-TEMPLATE"];
          _this6.currentSection = "painelSelect";
          _this6.formulario = _this6.fb.group({
            comida: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            filme: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(11)]]
          });
          _this6.opcoesAsync = [];
          _this6.htmlCodeSelectBasico = "\t\t\t\t\t\t<form>\n  <cx-select>\n    <label>N\xFAmero favorito</label>\n    <select selectCaixa>\n      <option value=\"0\"></option>\n      <option value=\"1\"></option>\n      <option value=\"2\"></option>\n      <option value=\"3\"></option>\n    </select>\n  </cx-select>\n</form>".trim();
          _this6.htmlCodeSelectValidacao = "\t\t\t\t\t\t<form [formGroup]=\"formulario\">\n  <cx-select>\n    <label>Comida favorita</label>\n    <select selectCaixa formControlName=\"comida\">\n      <option value=\"\" selected>Selecione uma op\xE7\xE3o</option>\n      <option value=\"Lasanha\">Lasanha</option>\n      <option value=\"Feijoada\">Feijoada</option>\n      <option value=\"Churrasco\">Churrasco</option>\n    </select>\n  </cx-select>\n\n  <cx-select>\n    <label>Filme favorito</label>\n    <select selectCaixa formControlName=\"filme\">\n      <option value=\"\" selected>Selecione uma op\xE7\xE3o</option>\n      <option value=\"Senhor dos An\xE9is\">Senhor dos An\xE9is</option>\n      <option value=\"O Poderoso Chef\xE3o\">O Poderoso Chef\xE3o</option>\n      <option value=\"Vingadores\">Vingadores</option>\n    </select>\n  </cx-select>\n</form>".trim();
          _this6.tsCodeSelectValidacao = "  import { Component } from '@angular/core';\n  import { FormBuilder, Validators } from '@angular/forms';\n\n  @Component({\n      selector: 'app-select',\n      templateUrl: './select.component.html',\n      styleUrls: ['./select.component.scss']\n  })\n  export class SelectComponent {\n\n    constructor(\n      private fb: FormBuilder\n    ) {}\n\n    formulario = this.fb.group({\n      comida: [null, [Validators.required]],\n      filme: [null, [Validators.required, Validators.minLength(11)]]\n    });\n  }\n  ".trimRight();
          _this6.htmlCodeVariantes = "\t\t\t\t\t\t<form>\n  <cx-select>\n    <label>Sele\xE7\xE3o m\xFAltipla</label>\n    <select selectCaixa multiple>\n      <option value=\"Lasanha\">Lasanha</option>\n      <option value=\"Feijoada\">Feijoada</option>\n      <option value=\"Churrasco\">Churrasco</option>\n    </select>\n  </cx-select>\n\n  <cx-select [options]=\"{ liveSearch: true }\">\n    <label>Filtro de op\xE7\xF5es</label>\n    <select selectCaixa>\n      <option value=\"Lasanha\">Lasanha</option>\n      <option value=\"Feijoada\">Feijoada</option>\n      <option value=\"Churrasco\">Churrasco</option>\n    </select>\n  </cx-select>\n\n  <cx-select [options]=\"{ actionsBox: true }\">\n    <label>Bot\xF5es e subt\xEDtulos</label>\n    <select selectCaixa multiple>\n      <optgroup label=\"Massas\">\n        <option>Pizza</option>\n        <option>Lasanha</option>\n        <option>Macarr\xE3o</option>\n      </optgroup>\n      <optgroup label=\"Carne\">\n        <option>Picanha</option>\n        <option>Alcatra</option>\n        <option>Torresmo</option>\n      </optgroup>\n    </select>\n  </cx-select>\n</form>".trim();
          _this6.htmlCodeSelectAsync = "\t\t\t\t\t\t<form>\n  <cx-select [initTrigger]=\"opcoesAsync\">\n    <label>N\xFAmero favorito</label>\n    <select selectCaixa>\n      <option *ngFor=\"let opcao of opcoesAsync\">{{ opcao }}</option>\n    </select>\n  </cx-select>\n\n  <button (click)=\"atualizaOpcoes()\" class=\"btn btn-primario\">\n    <i class=\"fa fa-sync mr-2\"></i>\n    Atualizar op\xE7\xF5es\n  </button>\n</form>".trim();
          _this6.tsCodeSelectAsync = "  import { Component } from '@angular/core';\n\n  @Component({\n      selector: 'app-select',\n      templateUrl: './select.component.html',\n      styleUrls: ['./select.component.scss']\n  })\n  export class SelectComponent {\n\n    constructor() {}\n\n    opcoesAsync = [];\n\n    atualizaOpcoes() {\n      this.opcoesAsync = [this.getRandomInt(), this.getRandomInt(), this.getRandomInt()];\n    }\n\n    // Retorna um n\xFAmero inteiro aleat\xF3rio entre 1 e 100\n    getRandomInt() {\n      return Math.floor(Math.random() * (101 - 1)) + 1;\n    }\n  }".trimRight();
          return _this6;
        }

        _createClass(_SelectComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "atualizaOpcoes",
          value: function atualizaOpcoes() {
            this.opcoesAsync = [this.getRandomInt(), this.getRandomInt(), this.getRandomInt()];
          }
        }, {
          key: "getRandomInt",
          value: function getRandomInt() {
            return Math.floor(Math.random() * (101 - 1)) + 1;
          }
        }]);

        return _SelectComponent;
      }(_componentes_interface__WEBPACK_IMPORTED_MODULE_0__.ComponentesInterface);

      _SelectComponent.ɵfac = function SelectComponent_Factory(t) {
        return new (t || _SelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder));
      };

      _SelectComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _SelectComponent,
        selectors: [["ng-component"]],
        viewQuery: function SelectComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.selectCaixa = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.scrollElement = _t.first);
          }
        },
        hostBindings: function SelectComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("scroll", function SelectComponent_scroll_HostBindingHandler($event) {
              return ctx.onScroll($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
        decls: 146,
        vars: 40,
        consts: [[1, "titulo"], [1, "row", "no-gutters"], [1, "col-12", "col-xl-9", "pr-2"], ["scrollElement", ""], ["id", "painelSelect", 3, "cardTitle", "codeViewId", "htmlTabId", "htmlCode"], [1, "descricao"], [1, "citation-highlight"], ["target", "_blank", "href", "https://developer.snapappointments.com/bootstrap-select/options/", 1, "text-link"], [1, "conteudo"], [1, "row"], [1, "col-12", "col-md-6", "col-lg-6"], ["selectCaixa", ""], ["value", "0"], ["value", "1"], ["value", "2"], ["value", "3"], ["id", "painelSelectValidacao", 3, "cardTitle", "codeViewId", "htmlTabId", "htmlCode", "tsTabId", "tsCode"], [3, "formGroup"], ["selectCaixa", "", "formControlName", "comida"], ["value", "", "selected", ""], ["value", "Lasanha"], ["value", "Feijoada"], ["value", "Churrasco"], ["selectCaixa", "", "formControlName", "filme"], ["value", "Senhor dos An\xE9is"], ["value", "O Poderoso Chef\xE3o"], ["value", "Vingadores"], ["id", "painelSelectVariantes", 3, "cardTitle", "codeViewId", "htmlTabId", "htmlCode"], ["selectCaixa", "", "multiple", ""], [3, "options"], ["label", "Massas"], ["label", "Carne"], ["id", "painelSelectAsync", 3, "cardTitle", "codeViewId", "htmlTabId", "htmlCode", "tsTabId", "tsCode"], [3, "initTrigger"], ["value", "", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-primario", 3, "click"], [1, "fa", "fa-sync", "mr-2"], ["id", "navSection", 1, "d-none", "col-3", "d-xl-flex", "justify-content-center"], [1, "position-fixed", "list-group", "list-group-caixa", "shadow-caixa", "border-0"], ["role", "button", 1, "list-group-item", "list-group-item-action", 3, "ngClass", "click"], ["value", ""]],
        template: function SelectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Select\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "section", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "app-documentacao-template", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " A diretiva ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "selectCaixa");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " em conjunto com o componente ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "cx-select");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " permite a estiliza\xE7\xE3o e valida\xE7\xE3o autom\xE1tica dos selects. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " O componente utiliza a biblioteca ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " Bootstrap-Select ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "cx-select");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "N\xFAmero favorito");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "select", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "0");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "app-documentacao-template", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, " A valida\xE7\xE3o observa os Validators do Angular. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "form", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "cx-select");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "Comida favorita");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "select", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "Selecione uma op\xE7\xE3o");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "option", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "Lasanha");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "option", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Feijoada");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "option", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "Churrasco");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "cx-select");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "Filme favorito");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "select", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "Selecione uma op\xE7\xE3o");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "Senhor dos An\xE9is");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "option", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "O Poderoso Chef\xE3o");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "option", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, "Vingadores");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](67, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "app-documentacao-template", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, " Todas as op\xE7\xF5es da biblioteca ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72, " Bootstrap-Select ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, " est\xE3o dispon\xEDveis. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "cx-select");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80, "Sele\xE7\xE3o m\xFAltipla");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "select", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "option", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](83, "Lasanha");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "option", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](85, "Feijoada");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "option", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](87, "Churrasco");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "cx-select", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](90, "Filtro de op\xE7\xF5es");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "select", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "option", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](93, "Lasanha");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "option", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](95, "Feijoada");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "option", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](97, "Churrasco");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "cx-select", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](100, "Bot\xF5es e subt\xEDtulos");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](101, "select", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "optgroup", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](103, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](104, "Pizza");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](106, "Lasanha");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](107, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](108, "Macarr\xE3o");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "optgroup", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](111, "Picanha");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](113, "Alcatra");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](114, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](115, "Torresmo");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](116, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](117, "app-documentacao-template", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](118, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](119, " Para op\xE7\xF5es carregadas de forma ass\xEDncrona, \xE9 necess\xE1rio atualizar a propriedade ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](120, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](121, "initTrigger");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](122, " para recarregar o componente. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](123, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](124, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](125, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](126, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](127, "cx-select", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](128, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](129, "N\xFAmero da sorte");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](130, "select", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](131, SelectComponent_option_131_Template, 2, 0, "option", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](132, SelectComponent_option_132_Template, 2, 1, "option", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](133, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SelectComponent_Template_button_click_133_listener() {
              return ctx.atualizaOpcoes();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](134, "i", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](135, " Atualizar op\xE7\xF5es ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](136, "nav", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](137, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](138, "a", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SelectComponent_Template_a_click_138_listener() {
              return ctx.scrollTo("painelSelect");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](139, " Select b\xE1sico");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](140, "a", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SelectComponent_Template_a_click_140_listener() {
              return ctx.scrollTo("painelSelectValidacao");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](141, " Valida\xE7\xE3o");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](142, "a", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SelectComponent_Template_a_click_142_listener() {
              return ctx.scrollTo("painelSelectVariantes");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](143, " Configura\xE7\xF5es");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](144, "a", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SelectComponent_Template_a_click_144_listener() {
              return ctx.scrollTo("painelSelectAsync");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](145, " Op\xE7\xF5es Ass\xEDncronas");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("cardTitle", "Select b\xE1sico")("codeViewId", "viewSelectBasico")("htmlTabId", "htmlCodeSelectBasico")("htmlCode", ctx.htmlCodeSelectBasico);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("cardTitle", "Valida\xE7\xE3o")("codeViewId", "viewSelectValidacao")("htmlTabId", "htmlCodeSelectValidacao")("htmlCode", ctx.htmlCodeSelectValidacao)("tsTabId", "tsCodeSelectValidacao")("tsCode", ctx.tsCodeSelectValidacao);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.formulario);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("cardTitle", "Configura\xE7\xF5es")("codeViewId", "viewSelectVariantes")("htmlTabId", "htmlCodeVariantes")("htmlCode", ctx.htmlCodeVariantes);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](30, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](31, _c3));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("cardTitle", "Op\xE7\xF5es ass\xEDncronas")("codeViewId", "viewSelectAsync")("htmlTabId", "htmlCodeSelectAsync")("htmlCode", ctx.htmlCodeSelectAsync)("tsTabId", "tsCodeSelectAsync")("tsCode", ctx.tsCodeSelectAsync);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("initTrigger", ctx.opcoesAsync);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.opcoesAsync == null ? null : ctx.opcoesAsync.length) == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.opcoesAsync);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](32, _c4, ctx.currentSection == "painelSelect"));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](34, _c4, ctx.currentSection == "painelSelectValidacao"));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](36, _c4, ctx.currentSection == "painelSelectVariantes"));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](38, _c4, ctx.currentSection == "painelSelectAsync"));
          }
        },
        directives: [_shared_components_documentacao_template_documentacao_template_component__WEBPACK_IMPORTED_MODULE_1__.DocumentacaoTemplateComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _guia_caixa_components_select_caixa_select_caixa_component__WEBPACK_IMPORTED_MODULE_2__.SelectCaixaComponent, _guia_caixa_components_select_caixa_select_caixa_directive__WEBPACK_IMPORTED_MODULE_3__.SelectCaixaDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass],
        encapsulation: 2
      });
      /***/
    },

    /***/
    86130:
    /*!************************************************************************************!*\
      !*** ./src/app/demonstracao/componentes/stepper-demonstracao/stepper-api-props.ts ***!
      \************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "stepperApiProps": function stepperApiProps() {
          return (
            /* binding */
            _stepperApiProps
          );
        }
        /* harmony export */

      });

      var stylesExample = "styles='{ height: '300px'; }'";
      var _stepperApiProps = [{
        nome: "readonly MINIMUM_STEPS",
        descricao: "Quantidade m\xEDnima de passos.<br>\n      Valor: 2"
      }, {
        nome: "readonly MAXIMUM_STEPS",
        descricao: "Quantidade m\xE1xima de passos.<br>\n      Valor: 7"
      }, {
        nome: "@Input( )<br>steps: string[ ]",
        descricao: "Atributo obrigat\xF3rio com a lista de 'descri\xE7\xF5es' dos passos,\n      que ser\xE3o exibidos ao lado dos \xEDcones.<br>\n      Padr\xE3o: [ ]"
      }, {
        nome: "@Input( )<br>currentStep: string | number",
        descricao: "\xCDndice do passo atual.<br>\n      Padr\xE3o: 0"
      }, {
        nome: "@Input( )<br>orientation: enum StepperOrientation | string | number",
        descricao: "Orienta\xE7\xE3o do componente, que pode ser horizontal (StepperOrientation.horizontal | \"0\")\n      ou vertical (StepperOrientation.vertical | \"1\").<br>\n      Padr\xE3o: StepperOrientation.horizontal | \"0\""
      }, {
        nome: "@Input( )<br>freeNavigation: boolean",
        descricao: "Define a variante do stepper. Com o atributo habilitado, o usu\xE1rio poder\xE1\n      retornar para qualquer passo anterior.<br>\n      Do contr\xE1rio, apenas ser\xE1 poss\xEDvel retornar ao passo imediatamente anterior.<br>\n      Padr\xE3o: true"
      }, {
        nome: "@Input( )<br>styles: [class: string]: any | string",
        descricao: "Objeto de estilo a ser passado para o stepper-wrapper",
        codeExample: stylesExample,
        codeLang: "css"
      }, {
        nome: "@Output( )<br>changeStep: EventEmitter&#60;number>",
        descricao: "Evento disparado sempre que um \xEDcone v\xE1lido \xE9 clicado, transmitindo o \xEDndice deste \xEDcone. "
      }, {
        nome: "next( ): void",
        descricao: "Avan\xE7a para o pr\xF3ximo passo."
      }, {
        nome: "previous( ): void",
        descricao: "Retorna para o passo anterior."
      }, {
        nome: "first( ): void",
        descricao: "Retorna para o primeiro passo. Apenas na navega\xE7\xE3o livre."
      }, {
        nome: "update( ): void",
        descricao: "Atualiza manualmente o template do componente cx-stepper."
      }];
      /***/
    },

    /***/
    45620:
    /*!****************************************************************************************!*\
      !*** ./src/app/demonstracao/componentes/stepper-demonstracao/stepper-code-examples.ts ***!
      \****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StepperCodeExamples": function StepperCodeExamples() {
          return (
            /* binding */
            _StepperCodeExamples
          );
        }
        /* harmony export */

      });

      var _StepperCodeExamples = /*#__PURE__*/_createClass(function _StepperCodeExamples() {
        _classCallCheck(this, _StepperCodeExamples);
      });

      _StepperCodeExamples.codeDescricao = "<cx-stepper\n   [steps]=\"passos\" \n   [currentStep]=\"passoAtual\"\n   (changeStep)=\"passoAtual = $event\">\n </cx-stepper>".trim();
      _StepperCodeExamples.codeTsDescricao = "  passos: StepperItem[] = [\n   { title: \"Primeiro passo\" },\n   { title: \"Segundo passo\" },\n   { title: \"Terceiro passo\" },\n   { title: \"Quarto passo\" },\n   { title: \"Quinto passo\" }\n ];\n passoAtual = 0;".trim();
      _StepperCodeExamples.htmlCodeStepperPadrao = "<cx-stepper [steps]=\"passos\" [currentStep]=\"passoAtual\" (changeStep)=\"passoAtual = $event\"></cx-stepper>\n \n <div *ngFor=\"let passo of passos; let i = index\">\n   <ng-container *ngIf=\"i == passoAtual\">\n     <h2 class=\"text-center\">{{ passo }}</h2>\n \n     <button [disabled]=\"passoAtual == 0\"\n     (click)=\"passoAtual = passoAtual - 1\" class=\"btn btn-cancel mx-2\">\n         Voltar\n     </button>\n \n     <button [disabled]=\"passoAtual == passos.length - 1\"\n     (click)=\"passoAtual = passoAtual + 1\" class=\"btn btn-accent mx-2\">\n         Avan\xE7ar\n     </button>\n   </ng-container>\n </div>".trim();
      _StepperCodeExamples.tsCodeStepperPadrao = "  import { Component } from '@angular/core';\n \n   @Component({\n       selector: 'app-stepper',\n       templateUrl: './stepper.component.html',\n       styleUrls: ['./stepper.component.scss']\n   })\n   export class StepperComponent {\n \n     constructor() {}\n \n     passoAtual = 0;\n \n     passos = [\n       'Primeiro passo',\n       'Segundo passo',\n       'Terceiro passo',\n       'Quarto passo',\n       'Passo final'\n     ];\n   }\n   ".trimRight();
      _StepperCodeExamples.htmlCodeStepperGuiado = "<cx-stepper [freeNavigation]=\"false\" [steps]=\"passos\" [currentStep]=\"passoAtual\" (changeStep)=\"passoAtual = $event\"></cx-stepper>\n \n <div *ngFor=\"let passo of passos; let i = index\">\n   <ng-container *ngIf=\"i == passoAtual\">\n     <h2 class=\"text-center\">{{ passo }}</h2>\n \n     <button [disabled]=\"passoAtual == 0\"\n     (click)=\"passoAtual = passoAtual - 1\" class=\"btn btn-cancel mx-2\">\n         Voltar\n     </button>\n \n     <button [disabled]=\"passoAtual == passos.length - 1\"\n     (click)=\"passoAtual = passoAtual + 1\" class=\"btn btn-accent mx-2\">\n         Avan\xE7ar\n     </button>\n   </ng-container>\n </div>".trim();
      _StepperCodeExamples.tsCodeStepperGuiado = "  import { Component } from '@angular/core';\n \n   @Component({\n       selector: 'app-stepper',\n       templateUrl: './stepper.component.html',\n       styleUrls: ['./stepper.component.scss']\n   })\n   export class StepperComponent {\n \n     constructor() {}\n \n     passoAtual = 0;\n \n     passos = [\n       'Primeiro passo',\n       'Segundo passo',\n       'Terceiro passo',\n       'Quarto passo',\n       'Passo final'\n     ];\n   }\n   ".trimRight();
      _StepperCodeExamples.htmlCodeStepperTemplate = "<cx-stepper [steps]=\"passos\" #stepperExemplo (changeStep)=\"passoAtual = $event\"></cx-stepper>\n \n   <div *ngFor=\"let passo of passos; let i = index\">\n      <ng-container *ngIf=\"i == passoAtual\">\n         <h2 class=\"text-center\">{{ passo }}</h2>\n      </ng-container>\n   </div>\n \n   <button [disabled]=\"stepperExemplo.currentStep == 0\"\n   (click)=\"stepperExemplo.first()\" class=\"btn btn-aux mx-2\">\n      Primeiro\n   </button>\n \n   <button [disabled]=\"stepperExemplo.currentStep == 0\"\n   (click)=\"stepperExemplo.previous()\" class=\"btn btn-cancel mx-2\">\n      Voltar\n   </button>\n \n   <button [disabled]=\"stepperExemplo.currentStep == passos.length - 1\"\n   (click)=\"stepperExemplo.next()\" class=\"btn btn-accent mx-2\">\n      Avan\xE7ar\n   </button>".trim();
      _StepperCodeExamples.tsCodeStepperTemplate = "  import { Component } from '@angular/core';\n \n   @Component({\n       selector: 'app-stepper',\n       templateUrl: './stepper.component.html',\n       styleUrls: ['./stepper.component.scss']\n   })\n   export class StepperComponent {\n \n     constructor() {}\n \n     passoAtual = 0;\n \n     passos = [\n       'Primeiro passo',\n       'Segundo passo',\n       'Terceiro passo',\n       'Quarto passo',\n       'Passo final'\n     ];\n   }\n   ".trimRight();
      _StepperCodeExamples.htmlCodeStepperInterno = "<cx-stepper [steps]=\"passos\" #stepperInterno>\n   <div *cxStepper>\n      <h2 class=\"text-center\">Primeiro conte\xFAdo interno</h2>\n   </div>\n \n   <div *cxStepper>\n      <h2 class=\"text-center\">Segundo conte\xFAdo interno</h2>\n   </div>\n \n   <div *cxStepper>\n      <h2 class=\"text-center\">Terceiro conte\xFAdo interno</h2>\n   </div>\n \n   <div *cxStepper>\n      <h2 class=\"text-center\">Quarto conte\xFAdo interno</h2>\n   </div>\n \n   <div *cxStepper>\n      <h2 class=\"text-center\">Quinto conte\xFAdo interno</h2>\n   </div>\n </cx-stepper>\n \n <button [disabled]=\"stepperInterno.currentStep == 0\"\n (click)=\"stepperInterno.first()\" class=\"btn btn-aux mx-2\">\n   Primeiro\n </button>\n \n <button [disabled]=\"stepperInterno.currentStep == 0\"\n (click)=\"stepperInterno.previous()\" class=\"btn btn-cancel mx-2\">\n   Voltar\n </button>\n \n <button [disabled]=\"stepperInterno.currentStep == passos.length - 1\"\n (click)=\"stepperInterno.next()\" class=\"btn btn-accent mx-2\">\n   Avan\xE7ar\n </button>".trim();
      _StepperCodeExamples.tsCodeStepperInterno = "  import { Component } from '@angular/core';\n \n   @Component({\n       selector: 'app-stepper',\n       templateUrl: './stepper.component.html',\n       styleUrls: ['./stepper.component.scss']\n   })\n   export class StepperComponent {\n \n     constructor() {}\n \n     passos = [\n       'Primeiro passo',\n       'Segundo passo',\n       'Terceiro passo',\n       'Quarto passo',\n       'Passo final'\n     ];\n \n   }\n   ".trimRight();
      /***/
    },

    /***/
    17262:
    /*!*************************************************************************************************!*\
      !*** ./src/app/demonstracao/componentes/stepper-demonstracao/stepper-demonstracao.component.ts ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StepperDemonstracaoComponent": function StepperDemonstracaoComponent() {
          return (
            /* binding */
            _StepperDemonstracaoComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _componentes_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../componentes-interface */
      31438);
      /* harmony import */


      var _stepper_api_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./stepper-api-props */
      86130);
      /* harmony import */


      var _stepper_code_examples__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./stepper-code-examples */
      45620);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-toastr */
      83315);
      /* harmony import */


      var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-highlightjs */
      24971);
      /* harmony import */


      var _shared_components_documentacao_template_documentacao_template_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../shared/components/documentacao-template/documentacao-template.component */
      8990);
      /* harmony import */


      var _guia_caixa_components_stepper_stepper_component_stepper_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../guia-caixa/components/stepper/stepper-component/stepper.component */
      51879);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _guia_caixa_components_stepper_stepper_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../guia-caixa/components/stepper/stepper-directive */
      60360);
      /* harmony import */


      var _shared_components_code_fixed_nav_code_fixed_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../shared/components/code-fixed-nav/code-fixed-nav.component */
      72994);
      /* harmony import */


      var _shared_components_documentacao_api_table_documentacao_api_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../shared/components/documentacao-api-table/documentacao-api-table.component */
      17841);
      /* harmony import */


      var _guia_caixa_components_select_caixa_select_caixa_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../guia-caixa/components/select-caixa/select-caixa.component */
      99536);
      /* harmony import */


      var _guia_caixa_components_select_caixa_select_caixa_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../guia-caixa/components/select-caixa/select-caixa.directive */
      20365);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/forms */
      1707);

      var _c0 = ["scrollElement"];

      function StepperDemonstracaoComponent_div_52_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "h2", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function StepperDemonstracaoComponent_div_52_ng_container_1_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

            return ctx_r15.passoAtual = ctx_r15.passoAtual - 1;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, " Voltar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function StepperDemonstracaoComponent_div_52_ng_container_1_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r16);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

            return ctx_r17.passoAtual = ctx_r17.passoAtual + 1;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, " Avan\xE7ar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var passo_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](passo_r12.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r14.passoAtual == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r14.passoAtual == ctx_r14.passos.length - 1);
        }
      }

      function StepperDemonstracaoComponent_div_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, StepperDemonstracaoComponent_div_52_ng_container_1_Template, 7, 3, "ng-container", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r13 = ctx.index;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", i_r13 == ctx_r1.passoAtual);
        }
      }

      function StepperDemonstracaoComponent_div_66_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "h2", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function StepperDemonstracaoComponent_div_66_ng_container_1_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

            return ctx_r22.passoAtual = ctx_r22.passoAtual - 1;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, " Voltar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function StepperDemonstracaoComponent_div_66_ng_container_1_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r23);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

            return ctx_r24.passoAtual = ctx_r24.passoAtual + 1;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, " Avan\xE7ar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var passo_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](passo_r19.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r21.passoAtual == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r21.passoAtual == ctx_r21.passos.length - 1);
        }
      }

      function StepperDemonstracaoComponent_div_66_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, StepperDemonstracaoComponent_div_66_ng_container_1_Template, 7, 3, "ng-container", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r20 = ctx.index;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", i_r20 == ctx_r2.passoAtual);
        }
      }

      function StepperDemonstracaoComponent_div_82_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "h2", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Primeiro conte\xFAdo interno");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
      }

      function StepperDemonstracaoComponent_div_83_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "h2", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Segundo conte\xFAdo interno");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
      }

      function StepperDemonstracaoComponent_div_84_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "h2", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Terceiro conte\xFAdo interno");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
      }

      function StepperDemonstracaoComponent_div_85_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "h2", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Quarto conte\xFAdo interno");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
      }

      function StepperDemonstracaoComponent_div_86_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "h2", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Quinto conte\xFAdo interno");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
      }

      function StepperDemonstracaoComponent_ng_container_125_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "h1", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var step_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", step_r26.title, "!");
        }
      }

      function StepperDemonstracaoComponent_ng_container_125_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, StepperDemonstracaoComponent_ng_container_125_ng_container_1_Template, 3, 1, "ng-container", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        }
      }

      var _c1 = function _c1() {
        return ["html"];
      };

      var _c2 = function _c2() {
        return ["ts"];
      };

      var _StepperDemonstracaoComponent = /*#__PURE__*/function (_componentes_interfac5) {
        _inherits(_StepperDemonstracaoComponent, _componentes_interfac5);

        var _super5 = _createSuper(_StepperDemonstracaoComponent);

        function _StepperDemonstracaoComponent(toastr) {
          var _this7;

          _classCallCheck(this, _StepperDemonstracaoComponent);

          _this7 = _super5.call(this, toastr);
          _this7.toastr = toastr;
          _this7.sectionOffset = 0;
          _this7.spiedTags = ["APP-DOCUMENTACAO-TEMPLATE"];
          _this7.currentSection = "painelStepperPadrao";
          _this7.navItems = [{
            id: "painelStepperPadrao",
            name: "Navegação livre"
          }, {
            id: "painelStepperGuiado",
            name: "Navegação guiada"
          }, {
            id: "painelStepperInterno",
            name: "Conteúdo Interno"
          }];
          _this7.examples = _stepper_code_examples__WEBPACK_IMPORTED_MODULE_2__.StepperCodeExamples;
          _this7.propsApi = _stepper_api_props__WEBPACK_IMPORTED_MODULE_1__.stepperApiProps;
          _this7.showTabsStepperPadrao = false;
          _this7.passos = [{
            title: "Primeiro passo"
          }, {
            title: "Segundo passo"
          }, {
            title: "Terceiro passo"
          }, {
            title: "Quarto passo"
          }, {
            title: "Quinto passo"
          }];
          _this7.passoAtual = 0;
          _this7.steps = [{
            title: "Um primeiro passo"
          }, {
            title: "Um segundo passo"
          }, {
            title: "Um terceiro passo"
          }, {
            title: "Um quarto passo"
          }, {
            title: "Fim"
          }];
          _this7.stepperFreeOrientation = 0;
          _this7.stepperGuidedOrientation = 0;
          _this7.hideStepsOnCompleted = true;
          _this7.completedMessage = null;
          _this7.completedIcon = null;
          _this7.freeNavigation = true;
          _this7.showCompletedMessage = true;
          return _this7;
        }

        _createClass(_StepperDemonstracaoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "changeStepperFreeOrientation",
          value: function changeStepperFreeOrientation(value) {
            this.stepperFreeOrientation = value;
          }
        }, {
          key: "changeStepperGuidedOrientation",
          value: function changeStepperGuidedOrientation(value) {
            this.stepperGuidedOrientation = value;
          }
        }, {
          key: "changeHideSteps",
          value: function changeHideSteps(value) {
            this.hideStepsOnCompleted = value;
          }
        }, {
          key: "addStep",
          value: function addStep(nome) {
            var newIndex = this.steps.length + 1;
            var newStep = {
              title: ""
            };
            newStep.title = nome ? nome : "Passo ".concat(newIndex);
            this.steps.push(newStep);
            this.steps = [].concat(this.steps);
          }
        }, {
          key: "removeStep",
          value: function removeStep() {
            this.steps.pop();
            this.steps = [].concat(this.steps);
          }
        }, {
          key: "mudarPasso",
          value: function mudarPasso(passo) {
            this.passoAtual = passo;
          }
        }]);

        return _StepperDemonstracaoComponent;
      }(_componentes_interface__WEBPACK_IMPORTED_MODULE_0__.ComponentesInterface);

      _StepperDemonstracaoComponent.ɵfac = function StepperDemonstracaoComponent_Factory(t) {
        return new (t || _StepperDemonstracaoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_11__.ToastrService));
      };

      _StepperDemonstracaoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
        type: _StepperDemonstracaoComponent,
        selectors: [["ng-component"]],
        viewQuery: function StepperDemonstracaoComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.scrollElement = _t.first);
          }
        },
        hostBindings: function StepperDemonstracaoComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("scroll", function StepperDemonstracaoComponent_scroll_HostBindingHandler($event) {
              return ctx.onScroll($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresolveWindow"]);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]],
        decls: 160,
        vars: 49,
        consts: [[1, "titulo"], [1, "my-4"], [1, "citation-highlight"], [1, "font-fam-bold"], [3, "highlight", "languages"], ["role", "tablist", 1, "nav", "nav-pills", "tab-caixa"], [1, "nav-item"], ["data-toggle", "tab", "href", "#visaoGeral", "role", "tab", 1, "nav-link", "text-uppercase", "active"], ["data-toggle", "tab", "href", "#api", "role", "tab", 1, "nav-link", "text-uppercase"], ["data-toggle", "tab", "href", "#exemplos", "role", "tab", 1, "nav-link", "text-uppercase"], [1, "tab-content"], ["id", "visaoGeral", "role", "tabpanel", 1, "tab-pane", "fade", "show", "active"], [1, "row", "no-gutters"], [1, "col-12", "col-xl-9", "pr-2"], ["scrollElement", ""], ["id", "painelStepperPadrao", 3, "cardTitle", "codeViewId", "htmlTabId", "htmlCode", "tsTabId", "tsCode"], [1, "descricao"], [1, "conteudo"], ["completedMessage", "Passos conclu\xEDdos!", 3, "steps", "currentStep", "changeStep"], [4, "ngFor", "ngForOf"], ["id", "painelStepperGuiado", 3, "cardTitle", "codeViewId", "htmlTabId", "htmlCode", "tsTabId", "tsCode"], [3, "freeNavigation", "steps", "currentStep", "changeStep"], ["id", "painelStepperInterno", 3, "cardTitle", "codeViewId", "htmlTabId", "htmlCode", "tsTabId", "tsCode"], [3, "steps"], ["stepperInterno", ""], [4, "cxStepper"], [1, "btn", "btn-aux", "mx-2", 3, "disabled", "click"], [1, "btn", "btn-cancel", "mx-2", 3, "disabled", "click"], [1, "btn", "btn-accent", "mx-2", 3, "disabled", "click"], ["id", "navSection", 1, "d-none", "col-3", "d-xl-flex", "pl-4"], [3, "items", "currentSection"], ["id", "api", "role", "tabpanel", 1, "tab-pane", "fade"], [1, "card"], [1, "card-body"], [1, "header-subtitulo-caixa"], ["href", "https://angular.io/guide/structural-directives", "target", "blank", 1, "text-link"], [3, "props"], ["id", "exemplos", "role", "tabpanel", 1, "tab-pane", "fade"], ["id", "stepperSandbox", 1, "mb-5"], [3, "steps", "orientation", "freeNavigation"], ["stepperFree", ""], [1, "row"], [1, "col"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "checkFreeNavigation", 1, "custom-control-input", 3, "checked", "change"], ["for", "checkFreeNavigation", 1, "custom-control-label"], [1, "d-flex", "justify-content-center"], ["title", "Primeiro", 1, "btn", "btn-aux", "mr-2", 3, "disabled", "click"], [1, "fa", "fa-angle-double-left", "fa-lg"], [1, "btn", "btn-cancel", "mr-2", 3, "disabled", "click"], [1, "fa", "fa-angle-left", "fa-lg"], [1, "btn", "btn-accent", 3, "disabled", "click"], [1, "fa", "fa-angle-right", "fa-lg"], ["title", "\xDAltimo", 1, "btn", "btn-aux", "ml-2", 3, "disabled", "click"], [1, "fa", "fa-angle-double-right", "fa-lg"], [1, "col", "d-flex", "align-items-center"], ["title", "Remover", 1, "btn", "btn-danger", "ml-2", 3, "disabled", "click"], [1, "fa", "fa-minus", "fa-lg"], ["title", "Adicionar", 1, "btn", "btn-success", "ml-2", 3, "disabled", "click"], [1, "fa", "fa-plus", "fa-lg"], ["placeholder", "Nome do novo passo", 1, "form-control", "d-inline", "w-50", "ml-2"], ["inputNovoStepFree", ""], [1, "col-5"], ["selectCaixa", "", 3, "change"], ["value", "0"], ["value", "1"], [4, "ngIf"], [1, "text-center"], [1, "text-center", "my-4"]],
        template: function StepperDemonstracaoComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Stepper\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "O componente Stepper apresenta um fluxo visual simples que representa os passos de algum processo l\xF3gico.");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "O atributo ");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "steps");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, " deve sempre receber uma lista de strings, com o nome de cada passo.");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "h6", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "HTML:");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "code", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "h6", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "TS:");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "code", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, " Vis\xE3o Geral ");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25, " API ");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28, " Exemplos ");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](29, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "section", 13, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "app-documentacao-template", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38, "Em seu comportamento padr\xE3o, de ");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](40, "navega\xE7\xE3o livre");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](41, ", o usu\xE1rio pode retornar a qualquer passo anterior clicando nos \xEDcones.");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](43, "O controle de navega\xE7\xE3o pode ser feito utilizando uma vari\xE1vel externa, como no exemplo abaixo. A vari\xE1vel deve estar vinculada ao atributo ");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](45, "currentStep");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](46, " e ao evento ");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](48, "changeStep");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](49, ", emitido cada vez que o usu\xE1rio clica diretamente no \xEDcone de um passo. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "cx-stepper", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("changeStep", function StepperDemonstracaoComponent_Template_cx_stepper_changeStep_51_listener($event) {
              return ctx.passoAtual = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](52, StepperDemonstracaoComponent_div_52_Template, 2, 1, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](53, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "app-documentacao-template", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](55, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](57, "Passando o valor ");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](58, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](59, "false");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](60, " para a propriedade ");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](61, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](62, "freeNavigation");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](63, ", o usu\xE1rio s\xF3 poder\xE1 retornar ao passo imediatamente anterior. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](64, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](65, "cx-stepper", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("changeStep", function StepperDemonstracaoComponent_Template_cx_stepper_changeStep_65_listener($event) {
              return ctx.passoAtual = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](66, StepperDemonstracaoComponent_div_66_Template, 2, 1, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](67, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](68, "app-documentacao-template", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](69, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](70, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](71, "O conte\xFAdo din\xE2mico a ser exibido tamb\xE9m pode ser colocado dentro do componente Stepper, identificando-o com a diretiva ");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](72, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](73, "*cxStepper");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](74, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](75, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](76, "A posi\xE7\xE3o do passo na lista (index) e a ordem de defini\xE7\xE3o dos elementos no template estar\xE3o relacionados. O primeiro elemento com a diretiva corresponder\xE1 ao index 0, o segundo, ao index 1, e assim por diante. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](77, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](78, "Utilizar conte\xFAdo interno e acesso por template string torna desnecess\xE1rio implementar qualquer controle condicional de exibi\xE7\xE3o. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](79, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](80, "cx-stepper", 23, 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](82, StepperDemonstracaoComponent_div_82_Template, 3, 0, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](83, StepperDemonstracaoComponent_div_83_Template, 3, 0, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](84, StepperDemonstracaoComponent_div_84_Template, 3, 0, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](85, StepperDemonstracaoComponent_div_85_Template, 3, 0, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](86, StepperDemonstracaoComponent_div_86_Template, 3, 0, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](87, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function StepperDemonstracaoComponent_Template_button_click_87_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r32);

              var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](81);

              return _r3.first();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](88, " Primeiro ");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](89, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function StepperDemonstracaoComponent_Template_button_click_89_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r32);

              var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](81);

              return _r3.previous();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](90, " Voltar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](91, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function StepperDemonstracaoComponent_Template_button_click_91_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r32);

              var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](81);

              return _r3.next();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](92, " Avan\xE7ar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](93, "nav", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](94, "app-code-fixed-nav", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](95, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](96, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](97, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](98, "h5", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](99, "*cxStepper");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](100, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](101, " Diretiva que permite a inclus\xE3o de conte\xFAdo din\xE2mico dentro do componente Stepper. O asterisco \xE9 necess\xE1rio por se tratar de uma ");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](102, "a", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](103, "diretiva estrutural");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](104, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](105, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](106, "Usar como: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](107, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](108, "*cxStepper");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](109, " no elemento a ser exibido");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](110, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](111, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](112, "h5", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](113, "Cx-Stepper");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](114, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](115, " Componente de exibi\xE7\xE3o de passos em sequ\xEAncia que pode ou n\xE3o englobar o conte\xFAdo que ser\xE1 exibido em cada passo. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](116, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](117, "Usar como: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](118, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](119, "cx-stepper");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](120, "app-documentacao-api-table", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](121, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](122, "section", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](123, "cx-stepper", 39, 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](125, StepperDemonstracaoComponent_ng_container_125_Template, 2, 0, "ng-container", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](126, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](127, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](128, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](129, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](130, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](131, "input", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function StepperDemonstracaoComponent_Template_input_change_131_listener($event) {
              return ctx.freeNavigation = $event.target.checked;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](132, "label", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](133, " Navega\xE7\xE3o Livre ");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](134, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](135, "button", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function StepperDemonstracaoComponent_Template_button_click_135_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r32);

              var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](124);

              return _r9.first();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](136, "i", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](137, "button", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function StepperDemonstracaoComponent_Template_button_click_137_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r32);

              var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](124);

              return _r9.previous();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](138, "i", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](139, "button", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function StepperDemonstracaoComponent_Template_button_click_139_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r32);

              var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](124);

              return _r9.next();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](140, "i", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](141, "button", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function StepperDemonstracaoComponent_Template_button_click_141_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r32);

              var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](124);

              return _r9.toStepByIndex(ctx.steps.length - 1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](142, "i", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](143, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](144, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](145, "button", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function StepperDemonstracaoComponent_Template_button_click_145_listener() {
              return ctx.removeStep();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](146, "i", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](147, "button", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function StepperDemonstracaoComponent_Template_button_click_147_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r32);

              var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](150);

              ctx.addStep(_r11.value);
              return _r11.value = "";
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](148, "i", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](149, "input", 60, 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](151, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](152, "cx-select");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](153, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](154, "Orienta\xE7\xE3o");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](155, "select", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function StepperDemonstracaoComponent_Template_select_change_155_listener($event) {
              return ctx.stepperFreeOrientation = $event.target.value;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](156, "option", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](157, "Horizontal");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](158, "option", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](159, "Vertical");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](81);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](124);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("highlight", ctx.examples.codeDescricao)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](47, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("highlight", ctx.examples.codeTsDescricao)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](48, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("cardTitle", "Navega\xE7\xE3o Livre")("codeViewId", "viewStepperPadrao")("htmlTabId", "htmlCodeStepperPadrao")("htmlCode", ctx.examples.htmlCodeStepperPadrao)("tsTabId", "tsCodeStepperPadrao")("tsCode", ctx.examples.tsCodeStepperPadrao);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("steps", ctx.passos)("currentStep", ctx.passoAtual);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.passos);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("cardTitle", "Navega\xE7\xE3o Guiada")("codeViewId", "viewStepperGuiado")("htmlTabId", "htmlCodeStepperGuiado")("htmlCode", ctx.examples.htmlCodeStepperGuiado)("tsTabId", "tsCodeStepperGuiado")("tsCode", ctx.examples.tsCodeStepperGuiado);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("freeNavigation", false)("steps", ctx.passos)("currentStep", ctx.passoAtual);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.passos);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("cardTitle", "Conte\xFAdo dentro do componente")("codeViewId", "viewStepperInterno")("htmlTabId", "htmlCodeStepperInterno")("htmlCode", ctx.examples.htmlCodeStepperInterno)("tsTabId", "tsCodeStepperInterno")("tsCode", ctx.examples.tsCodeStepperInterno);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("steps", ctx.passos);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", _r3.currentStep == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", _r3.currentStep == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", _r3.currentStep == ctx.passos.length - 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("items", ctx.navItems)("currentSection", ctx.currentSection);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("props", ctx.propsApi);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("steps", ctx.steps)("orientation", ctx.stepperFreeOrientation)("freeNavigation", ctx.freeNavigation);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.steps);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("checked", ctx.freeNavigation);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", _r9.currentStep == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", _r9.currentStep <= 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", _r9.currentStep == ctx.steps.length - 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx.steps.length == 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx.steps.length == _r9.MAXIMUM_STEPS);
          }
        },
        directives: [ngx_highlightjs__WEBPACK_IMPORTED_MODULE_12__.Highlight, _shared_components_documentacao_template_documentacao_template_component__WEBPACK_IMPORTED_MODULE_3__.DocumentacaoTemplateComponent, _guia_caixa_components_stepper_stepper_component_stepper_component__WEBPACK_IMPORTED_MODULE_4__.StepperComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _guia_caixa_components_stepper_stepper_directive__WEBPACK_IMPORTED_MODULE_5__.StepperDirective, _shared_components_code_fixed_nav_code_fixed_nav_component__WEBPACK_IMPORTED_MODULE_6__.CodeFixedNavComponent, _shared_components_documentacao_api_table_documentacao_api_table_component__WEBPACK_IMPORTED_MODULE_7__.DocumentacaoApiTableComponent, _guia_caixa_components_select_caixa_select_caixa_component__WEBPACK_IMPORTED_MODULE_8__.SelectCaixaComponent, _guia_caixa_components_select_caixa_select_caixa_directive__WEBPACK_IMPORTED_MODULE_9__.SelectCaixaDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf],
        encapsulation: 2
      });
      /***/
    },

    /***/
    94323:
    /*!***********************************************************************************************!*\
      !*** ./src/app/demonstracao/componentes/tabber-demonstracao/tabber-demonstracao.component.ts ***!
      \***********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TabberDemonstracaoComponent": function TabberDemonstracaoComponent() {
          return (
            /* binding */
            _TabberDemonstracaoComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_app_guia_caixa_components_stepper_tabber_component_tabber_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/guia-caixa/components/stepper/tabber-component/tabber-item */
      27792);
      /* harmony import */


      var _componentes_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../componentes-interface */
      31438);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-toastr */
      83315);
      /* harmony import */


      var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-highlightjs */
      24971);
      /* harmony import */


      var _shared_components_documentacao_template_documentacao_template_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/components/documentacao-template/documentacao-template.component */
      8990);
      /* harmony import */


      var _guia_caixa_components_stepper_tabber_component_tabber_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../guia-caixa/components/stepper/tabber-component/tabber.component */
      84509);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _shared_components_code_fixed_nav_code_fixed_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../shared/components/code-fixed-nav/code-fixed-nav.component */
      72994);
      /* harmony import */


      var _guia_caixa_components_select_caixa_select_caixa_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../guia-caixa/components/select-caixa/select-caixa.component */
      99536);
      /* harmony import */


      var _guia_caixa_components_select_caixa_select_caixa_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../guia-caixa/components/select-caixa/select-caixa.directive */
      20365);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _guia_caixa_components_stepper_stepper_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../guia-caixa/components/stepper/stepper-directive */
      60360);

      var _c0 = ["scrollElement"];

      function TabberDemonstracaoComponent_ng_container_48_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "h2", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var aba_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](aba_r8.name);
        }
      }

      function TabberDemonstracaoComponent_ng_container_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, TabberDemonstracaoComponent_ng_container_48_div_1_Template, 3, 1, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        }
      }

      function TabberDemonstracaoComponent_ng_container_71_div_1_h4_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Conte\xFAdo sem valida\xE7\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      }

      function TabberDemonstracaoComponent_ng_container_71_div_1_h4_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Conte\xFAdo OK");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      }

      function TabberDemonstracaoComponent_ng_container_71_div_1_h4_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Conte\xFAdo com erro n\xE3o impeditivo");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      }

      function TabberDemonstracaoComponent_ng_container_71_div_1_h4_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Conte\xFAdo com erro impeditivo");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      }

      function TabberDemonstracaoComponent_ng_container_71_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, TabberDemonstracaoComponent_ng_container_71_div_1_h4_3_Template, 2, 0, "h4", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, TabberDemonstracaoComponent_ng_container_71_div_1_h4_4_Template, 2, 0, "h4", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, TabberDemonstracaoComponent_ng_container_71_div_1_h4_5_Template, 2, 0, "h4", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, TabberDemonstracaoComponent_ng_container_71_div_1_h4_6_Template, 2, 0, "h4", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var aba_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](aba_r11.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !aba_r11.state);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", aba_r11.state === ctx_r12.tabberState.SUCCESS);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", aba_r11.state === ctx_r12.tabberState.WARNING);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", aba_r11.state === "error");
        }
      }

      function TabberDemonstracaoComponent_ng_container_71_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, TabberDemonstracaoComponent_ng_container_71_div_1_Template, 7, 5, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        }
      }

      function TabberDemonstracaoComponent_ng_container_205_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "h1", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var tab_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", tab_r18.name, "!");
        }
      }

      function TabberDemonstracaoComponent_ng_container_205_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, TabberDemonstracaoComponent_ng_container_205_ng_container_1_Template, 3, 1, "ng-container", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        }
      }

      var _c1 = function _c1() {
        return ["html"];
      };

      var _c2 = function _c2() {
        return ["ts"];
      };

      var _TabberDemonstracaoComponent = /*#__PURE__*/function (_componentes_interfac6) {
        _inherits(_TabberDemonstracaoComponent, _componentes_interfac6);

        var _super6 = _createSuper(_TabberDemonstracaoComponent);

        function _TabberDemonstracaoComponent(toastr) {
          var _this8;

          _classCallCheck(this, _TabberDemonstracaoComponent);

          _this8 = _super6.call(this, toastr);
          _this8.toastr = toastr;
          _this8.sectionOffset = 0;
          _this8.spiedTags = ["APP-DOCUMENTACAO-TEMPLATE"];
          _this8.currentSection = "painelTabber";
          _this8.stylesExample = "styles='{ height: '300px'; }'";
          _this8.codeDescricao = "<cx-tabber [tabs]=\"abas\"></cx-tabber>".trim();
          _this8.codeTsDescricao = "abas: TabberItem[] = [\n  { name: \"Home\", icon: \"fa fa-home\" },\n  { name: \"Componentes\", icon: \"fa fa-toolbox\" },\n  { name: \"Tipografia\", icon: \"fa fa-font\" },\n  { name: \"Cores\", icon: \"fa fa-palette\" },\n  { name: \"Configura\xE7\xF5es\", icon: \"fa fa-wrench\" },\n  { name: \"P\xE1ginas\", icon: \"fa fa-newspaper\" }\n];".trim();
          _this8.htmlCodeTabber = "<cx-tabber [tabs]=\"abas\" #tabberExemplo>\n  <ng-container *ngFor=\"let aba of abas\">\n     <div *cxStepper>\n        <h2 class=\"text-center\">{{ aba.name }}</h2>\n     </div>\n  </ng-container>\n</cx-tabber>\n\n<button [disabled]=\"tabberExemplo.currentTab == 0\"\n(click)=\"tabberExemplo.first()\" class=\"btn btn-aux mx-2\">\n  Primeiro\n</button>\n\n<button [disabled]=\"tabberExemplo.currentTab == 0\"\n(click)=\"tabberExemplo.previous()\" class=\"btn btn-cancel mx-2\">\n  Voltar\n</button>\n\n<button [disabled]=\"tabberExemplo.currentTab == abas.length - 1\"\n(click)=\"tabberExemplo.next()\" class=\"btn btn-accent mx-2\">\n  Avan\xE7ar\n</button>\n\n<button [disabled]=\"tabberExemplo.currentTab == abas.length - 1\"\n(click)=\"tabberExemplo.last()\" class=\"btn btn-aux mx-2\">\n   \xDAltimo\n</button>".trim();
          _this8.tsCodeTabber = "  import { Component } from '@angular/core';\n\n@Component({\n    selector: 'app-stepper',\n    templateUrl: './stepper.component.html',\n    styleUrls: ['./stepper.component.scss']\n})\nexport class StepperComponent {\n\n  constructor() {}\n\n  abas: TabberItem[] = [\n    { name: \"Home\", icon: \"fa fa-home\" },\n    { name: \"Componentes\", icon: \"fa fa-toolbox\" },\n    { name: \"Tipografia\", icon: \"fa fa-font\" },\n    { name: \"Cores\", icon: \"fa fa-palette\" },\n    { name: \"Configura\xE7\xF5es\", icon: \"fa fa-wrench\" },\n    { name: \"P\xE1ginas\", icon: \"fa fa-newspaper\" }\n  ];\n  abaAtual = 0;\n\n}\n  ".trimRight();
          _this8.htmlCodeTabberState = "<cx-tabber [tabs]=\"abasComEstado\" #tabberExemploState>\n  <ng-container *ngFor=\"let aba of abasComEstado\">\n    <div *cxStepper class=\"text-center\">\n      <h2>{{ aba.name }}</h2>\n      <h4 *ngIf=\"!aba.state\">Conte\xFAdo sem valida\xE7\xE3o</h4>\n      <h4 *ngIf=\"aba.state === tabberState.SUCCESS\">Conte\xFAdo OK</h4>\n      <h4 *ngIf=\"aba.state === tabberState.WARNING\">Conte\xFAdo com erro n\xE3o impeditivo</h4>\n      <h4 *ngIf=\"aba.state === 'error'\">Conte\xFAdo com erro impeditivo</h4>\n    </div>\n  </ng-container>\n</cx-tabber>\n\n<button [disabled]=\"tabberExemploState.currentTab == 0\" (click)=\"tabberExemploState.first()\"\n  class=\"btn btn-aux mt-3 mx-2\">\n  Primeiro\n</button>\n\n<button [disabled]=\"tabberExemploState.currentTab == 0\" (click)=\"tabberExemploState.previous()\"\n  class=\"btn btn-cancel mx-2\">\n  Voltar\n</button>\n\n<button [disabled]=\"tabberExemploState.currentTab == abas.length - 1\" (click)=\"tabberExemploState.next()\"\n  class=\"btn btn-accent mx-2\">\n  Avan\xE7ar\n</button>\n\n<button [disabled]=\"tabberExemploState.currentTab == abas.length - 1\" (click)=\"tabberExemploState.last()\"\n  class=\"btn btn-aux mx-2\">\n  \xDAltimo\n</button>".trim();
          _this8.tsCodeTabberState = "import { Component } from '@angular/core';\nimport { TabberItem, TabberItemState } from \"../stepper/tabber-component/tabber-item\";\n\n@Component({\n    selector: 'app-stepper',\n    templateUrl: './stepper.component.html',\n    styleUrls: ['./stepper.component.scss']\n})\nexport class StepperComponent {\n\n  constructor() {}\n\n  tabberState = TabberItemState;\n\n  abasComEstado: TabberItem[] = [\n    { name: \"Home\", icon: \"fa fa-home\", state: \"success\" },\n    { name: \"Componentes\", icon: \"fa fa-toolbox\", state: \"warning\" },\n    { name: \"Tipografia\", icon: \"fa fa-font\", state: this.tabberState.SUCCESS },\n    { name: \"Cores\", icon: \"fa fa-palette\", state: \"error\" },\n    { name: \"Configura\xE7\xF5es\", icon: \"fa fa-wrench\" },\n    { name: \"P\xE1ginas\", icon: \"fa fa-newspaper\", state: this.tabberState.ERROR }\n  ];\n  abaComEstadoAtual = 0;\n\n}\n  ".trimRight();
          _this8.navItems = [{
            id: "painelTabber",
            name: "Visão Geral"
          }, {
            id: "painelTabberState",
            name: "Estado"
          }];
          _this8.tabberOrientation = 0;
          _this8.abas = [{
            name: "Home",
            icon: "fa fa-home"
          }, {
            name: "Componentes",
            icon: "fa fa-toolbox"
          }, {
            name: "Tipografia",
            icon: "fa fa-font"
          }, {
            name: "Cores",
            icon: "fa fa-palette"
          }, {
            name: "Configurações",
            icon: "fa fa-wrench"
          }, {
            name: "Páginas",
            icon: "fa fa-newspaper"
          }];
          _this8.abaAtual = 0;
          _this8.tabberState = src_app_guia_caixa_components_stepper_tabber_component_tabber_item__WEBPACK_IMPORTED_MODULE_0__.TabberItemState;
          _this8.abasComEstado = [{
            name: "Home",
            icon: "fa fa-home",
            state: "success"
          }, {
            name: "Componentes",
            icon: "fa fa-toolbox",
            state: "warning"
          }, {
            name: "Tipografia",
            icon: "fa fa-font",
            state: _this8.tabberState.SUCCESS
          }, {
            name: "Cores",
            icon: "fa fa-palette",
            state: "error"
          }, {
            name: "Configurações",
            icon: "fa fa-wrench"
          }, {
            name: "Páginas",
            icon: "fa fa-newspaper",
            state: _this8.tabberState.ERROR
          }];
          _this8.abaComEstadoAtual = 0;
          _this8.currentTab = 0;
          _this8.tabs = [{
            name: "Home",
            icon: "fa fa-home"
          }, {
            name: "Componentes",
            icon: "fa fa-toolbox"
          }, {
            name: "Tipografia",
            icon: "fa fa-font"
          }, {
            name: "Cores",
            icon: "fa fa-palette"
          }, {
            name: "Configurações",
            icon: "fa fa-wrench"
          }, {
            name: "Páginas",
            icon: "fa fa-newspaper"
          }];
          return _this8;
        }

        _createClass(_TabberDemonstracaoComponent, [{
          key: "changeTabberOrientation",
          value: function changeTabberOrientation(value) {
            this.tabberOrientation = value;
          }
        }, {
          key: "addTab",
          value: function addTab(nome) {
            var newIndex = this.tabs.length + 1;
            var newTab = {
              name: nome ? nome : "Aba ".concat(newIndex),
              icon: "fa fa-plus"
            };
            this.tabs.push(newTab);
            this.tabs = [].concat(this.tabs);
          }
        }, {
          key: "mudarTab",
          value: function mudarTab(tab) {
            this.currentTab = tab;
          }
        }]);

        return _TabberDemonstracaoComponent;
      }(_componentes_interface__WEBPACK_IMPORTED_MODULE_1__.ComponentesInterface);

      _TabberDemonstracaoComponent.ɵfac = function TabberDemonstracaoComponent_Factory(t) {
        return new (t || _TabberDemonstracaoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService));
      };

      _TabberDemonstracaoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
        type: _TabberDemonstracaoComponent,
        selectors: [["ng-component"]],
        viewQuery: function TabberDemonstracaoComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.scrollElement = _t.first);
          }
        },
        hostBindings: function TabberDemonstracaoComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("scroll", function TabberDemonstracaoComponent_scroll_HostBindingHandler($event) {
              return ctx.onScroll($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresolveWindow"]);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]],
        decls: 234,
        vars: 42,
        consts: [[1, "titulo"], [1, "my-4"], [1, "citation-highlight"], [1, "font-fam-bold"], [3, "highlight", "languages"], ["role", "tablist", 1, "nav", "nav-pills", "tab-caixa"], [1, "nav-item"], ["data-toggle", "tab", "href", "#visaoGeral", "role", "tab", 1, "nav-link", "text-uppercase", "active"], ["data-toggle", "tab", "href", "#api", "role", "tab", 1, "nav-link", "text-uppercase"], ["data-toggle", "tab", "href", "#exemplos", "role", "tab", 1, "nav-link", "text-uppercase"], [1, "tab-content"], ["id", "visaoGeral", "role", "tabpanel", 1, "tab-pane", "fade", "show", "active"], [1, "row", "no-gutters"], [1, "col-12", "col-xl-9", "pr-2"], ["scrollElement", ""], ["id", "painelTabber", 3, "cardTitle", "codeViewId", "htmlTabId", "htmlCode", "tsTabId", "tsCode"], [1, "descricao"], [1, "conteudo"], [3, "tabs"], ["tabberVisaoGeral", ""], [4, "ngFor", "ngForOf"], [1, "btn", "btn-aux", "mx-2", 3, "disabled", "click"], [1, "btn", "btn-cancel", "mx-2", 3, "disabled", "click"], [1, "btn", "btn-accent", "mx-2", 3, "disabled", "click"], ["id", "painelTabberState", 3, "cardTitle", "codeViewId", "htmlTabId", "htmlCode", "tsTabId", "tsCode"], ["tabberExemploState", ""], [1, "btn", "btn-aux", "mt-3", "mx-2", 3, "disabled", "click"], ["id", "navSection", 1, "d-none", "col-3", "d-xl-flex", "pl-4"], [3, "items", "currentSection"], ["id", "api", "role", "tabpanel", 1, "tab-pane", "fade"], [1, "card"], [1, "card-body"], [1, "header-subtitulo-caixa"], ["href", "https://angular.io/guide/structural-directives", "target", "blank", 1, "text-link"], [1, "table-responsive"], [1, "table", "table-bordered", "table-striped"], [3, "highlight"], ["id", "exemplos", "role", "tabpanel", 1, "tab-pane", "fade"], ["id", "tabberSandbox", 1, "mb-5"], [3, "tabs", "orientation"], ["tabberExemplo", ""], [1, "d-flex", "justify-content-center"], ["title", "Primeiro", 1, "btn", "btn-aux", "mr-2", 3, "disabled", "click"], [1, "fa", "fa-angle-double-left", "fa-lg"], [1, "btn", "btn-cancel", "mr-2", 3, "disabled", "click"], [1, "fa", "fa-angle-left", "fa-lg"], [1, "btn", "btn-accent", 3, "disabled", "click"], [1, "fa", "fa-angle-right", "fa-lg"], ["title", "\xDAltimo", 1, "btn", "btn-aux", "ml-2", 3, "disabled", "click"], [1, "fa", "fa-angle-double-right", "fa-lg"], [1, "row"], [1, "col", "d-flex", "align-items-center"], ["title", "Remover", 1, "btn", "btn-danger", "ml-2", 3, "disabled", "click"], [1, "fa", "fa-minus", "fa-lg"], ["title", "Adicionar", 1, "btn", "btn-success", "ml-2", 3, "disabled", "click"], [1, "fa", "fa-plus", "fa-lg"], ["placeholder", "Nome da nova aba", 1, "form-control", "d-inline", "w-50", "ml-2"], ["inputNovaAba", ""], [1, "col-4"], ["selectCaixa", "", 3, "change"], ["value", "0"], ["value", "1"], [4, "cxStepper"], [1, "text-center"], ["class", "text-center", 4, "cxStepper"], [4, "ngIf"], [1, "text-center", "my-4"]],
        template: function TabberDemonstracaoComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Tabber\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "O componente alternativo Tabber ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "cx-tabber");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, " difere do Stepper ao n\xE3o implementar qualquer rela\xE7\xE3o de sequ\xEAncia entre as etapas, apenas organizando o conte\xFAdo em abas. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "h6", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "HTML:");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "code", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "h6", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "TS:");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "code", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, " Vis\xE3o Geral ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, " API ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, " Exemplos ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](27, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "section", 13, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "app-documentacao-template", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36, "O atributo ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38, "tabs");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39, " recebe uma lista de objetos do tipo ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, "TabberItem");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](42, ", com as propriedades \"name\" e \"icon\". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, "Todas as funcionalidades de navega\xE7\xE3o do Stepper est\xE3o presentes tamb\xE9m neste componente. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "cx-tabber", 18, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](48, TabberDemonstracaoComponent_ng_container_48_Template, 2, 0, "ng-container", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TabberDemonstracaoComponent_Template_button_click_49_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r24);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](47);

              return _r1.first();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](50, " Primeiro ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TabberDemonstracaoComponent_Template_button_click_51_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r24);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](47);

              return _r1.previous();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](52, " Voltar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TabberDemonstracaoComponent_Template_button_click_53_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r24);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](47);

              return _r1.next();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](54, " Avan\xE7ar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TabberDemonstracaoComponent_Template_button_click_55_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r24);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](47);

              return _r1.last();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](56, " \xDAltimo ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](57, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "app-documentacao-template", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](61, "O atributo opcional ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](63, "state");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](64, " pode receber um dos valores da enum ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](66, "TabberItemState");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](67, "('success', 'warning' ou 'error'), acrescentando um pequeno \xEDcone que representa sua situa\xE7\xE3o atual. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](68, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](69, "cx-tabber", 18, 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](71, TabberDemonstracaoComponent_ng_container_71_Template, 2, 0, "ng-container", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](72, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TabberDemonstracaoComponent_Template_button_click_72_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r24);

              var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](70);

              return _r3.first();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](73, " Primeiro ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](74, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TabberDemonstracaoComponent_Template_button_click_74_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r24);

              var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](70);

              return _r3.previous();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](75, " Voltar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](76, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TabberDemonstracaoComponent_Template_button_click_76_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r24);

              var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](70);

              return _r3.next();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](77, " Avan\xE7ar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](78, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TabberDemonstracaoComponent_Template_button_click_78_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r24);

              var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](70);

              return _r3.last();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](79, " \xDAltimo ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](80, "nav", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](81, "app-code-fixed-nav", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](82, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](83, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](84, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](85, "h5", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](86, "*cxStepper");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](87, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](88, " Diretiva que permite a inclus\xE3o de conte\xFAdo din\xE2mico dentro do componente Stepper. O asterisco \xE9 necess\xE1rio por se tratar de uma ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](89, "a", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](90, "diretiva estrutural");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](91, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](92, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](93, "Usar como: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](94, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](95, "*cxStepper");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](96, " no elemento a ser exibido");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](97, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](98, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](99, "h5", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](100, "Cx-Tabber");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](101, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](102, " Componente de exibi\xE7\xE3o de abas que pode ou n\xE3o englobar o conte\xFAdo que ser\xE1 exibido em cada aba. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](103, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](104, "Usar como: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](105, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](106, "cx-tabber");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](107, "h6", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](108, "Propriedades");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](109, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](110, "table", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](111, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](112, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](113, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](114, "Nome");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](115, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](116, "Descri\xE7\xE3o");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](117, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](118, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](119, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](120, "readonly MINIMUM_TABS");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](121, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](122, " Quantidade m\xEDnima de abas.");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](123, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](124, " Valor: 2 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](125, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](126, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](127, "readonly MAXIMUM_TABS");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](128, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](129, " Quantidade m\xE1xima de abas.");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](130, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](131, " Valor: 7 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](132, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](133, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](134, "@Input( )");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](135, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](136, "tabs: TabberItem[]");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](137, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](138, " Atributo obrigat\xF3rio com a lista de abas, contendo sua descri\xE7\xE3o e \xEDcone.");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](139, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](140, " Padr\xE3o: [] ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](141, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](142, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](143, "@Input( )");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](144, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](145, "currentTab: string | number");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](146, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](147, " \xCDndice da aba atual.");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](148, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](149, " Padr\xE3o: 0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](150, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](151, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](152, "@Input( )");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](153, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](154, "orientation: enum StepperOrientation");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](155, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](156, " Orienta\xE7\xE3o do componente, que pode ser horizontal (StepperOrientation.horizontal | \"0\") ou vertical (StepperOrientation.vertical | \"1\").");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](157, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](158, " Padr\xE3o: StepperOrientation.horizontal | \"0\" ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](159, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](160, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](161, "@Input( )");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](162, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](163, "styles: [class: string]: any | string");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](164, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](165, " Objeto de estilo a ser passado para o card-button-wrapper.");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](166, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](167, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](168, "code", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](169, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](170, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](171, "@Output( )");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](172, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](173, "changeTab: EventEmitter<number>");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](174, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](175, " Evento disparado sempre que um \xEDcone v\xE1lido \xE9 clicado, transmitindo o \xEDndice deste \xEDcone. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](176, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](177, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](178, "next( ): void");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](179, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](180, " Avan\xE7a para a pr\xF3xima aba. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](181, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](182, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](183, "previous( ): void");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](184, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](185, " Retorna para a aba anterior. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](186, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](187, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](188, "first( ): void");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](189, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](190, " Retorna para a primeira aba. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](191, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](192, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](193, "last( ): void");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](194, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](195, " Avan\xE7a para a \xFAltima aba. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](196, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](197, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](198, "update( ): void");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](199, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](200, " Atualiza manualmente o template do componente cx-tabber. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](201, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](202, "section", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](203, "cx-tabber", 39, 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](205, TabberDemonstracaoComponent_ng_container_205_Template, 2, 0, "ng-container", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](206, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](207, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](208, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](209, "button", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TabberDemonstracaoComponent_Template_button_click_209_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r24);

              var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](204);

              return _r5.first();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](210, "i", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](211, "button", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TabberDemonstracaoComponent_Template_button_click_211_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r24);

              var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](204);

              return _r5.previous();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](212, "i", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](213, "button", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TabberDemonstracaoComponent_Template_button_click_213_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r24);

              var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](204);

              return _r5.next();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](214, "i", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](215, "button", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TabberDemonstracaoComponent_Template_button_click_215_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r24);

              var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](204);

              return _r5.last();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](216, "i", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](217, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](218, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](219, "button", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TabberDemonstracaoComponent_Template_button_click_219_listener() {
              ctx.tabs.pop();
              return ctx.tabs = [].concat(ctx.tabs);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](220, "i", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](221, "button", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TabberDemonstracaoComponent_Template_button_click_221_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r24);

              var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](224);

              ctx.addTab(_r7.value);
              return _r7.value = "";
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](222, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](223, "input", 56, 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](225, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](226, "cx-select");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](227, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](228, "Orienta\xE7\xE3o");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](229, "select", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function TabberDemonstracaoComponent_Template_select_change_229_listener($event) {
              return ctx.changeTabberOrientation($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](230, "option", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](231, "Horizontal");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](232, "option", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](233, "Vertical");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](47);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](70);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](204);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("highlight", ctx.codeDescricao)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](40, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("highlight", ctx.codeTsDescricao)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](41, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("cardTitle", "Tabber")("codeViewId", "viewTabber")("htmlTabId", "htmlCodeTabber")("htmlCode", ctx.htmlCodeTabber)("tsTabId", "tsCodeTabber")("tsCode", ctx.tsCodeTabber);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("tabs", ctx.abas);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.abas);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", _r1.currentTab == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", _r1.currentTab == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", _r1.currentTab == ctx.abas.length - 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", _r1.currentTab == ctx.abas.length - 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("cardTitle", "Estado")("codeViewId", "viewTabberState")("htmlTabId", "htmlCodeTabberState")("htmlCode", ctx.htmlCodeTabberState)("tsTabId", "tsCodeTabberState")("tsCode", ctx.tsCodeTabberState);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("tabs", ctx.abasComEstado);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.abasComEstado);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", _r3.currentTab == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", _r3.currentTab == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", _r3.currentTab == ctx.abas.length - 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", _r3.currentTab == ctx.abas.length - 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("items", ctx.navItems)("currentSection", ctx.currentSection);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](87);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("highlight", ctx.stylesExample);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](35);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("tabs", ctx.tabs)("orientation", ctx.tabberOrientation);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.tabs);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", _r5.currentTab == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", _r5.currentTab <= 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", _r5.currentTab == ctx.tabs.length - 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", _r5.currentTab == ctx.tabs.length - 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx.tabs.length == 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx.tabs.length == _r5.MAXIMUM_TABS);
          }
        },
        directives: [ngx_highlightjs__WEBPACK_IMPORTED_MODULE_10__.Highlight, _shared_components_documentacao_template_documentacao_template_component__WEBPACK_IMPORTED_MODULE_2__.DocumentacaoTemplateComponent, _guia_caixa_components_stepper_tabber_component_tabber_component__WEBPACK_IMPORTED_MODULE_3__.TabberComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _shared_components_code_fixed_nav_code_fixed_nav_component__WEBPACK_IMPORTED_MODULE_4__.CodeFixedNavComponent, _guia_caixa_components_select_caixa_select_caixa_component__WEBPACK_IMPORTED_MODULE_5__.SelectCaixaComponent, _guia_caixa_components_select_caixa_select_caixa_directive__WEBPACK_IMPORTED_MODULE_6__.SelectCaixaDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgSelectMultipleOption"], _guia_caixa_components_stepper_stepper_directive__WEBPACK_IMPORTED_MODULE_7__.StepperDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJiZXItZGVtb25zdHJhY2FvLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    9945:
    /*!**************************************************************************************!*\
      !*** ./src/app/demonstracao/componentes/timeline-demonstracao/timeline-api-props.ts ***!
      \**************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "timelineApiProps": function timelineApiProps() {
          return (
            /* binding */
            _timelineApiProps
          );
        }
        /* harmony export */

      });

      var stylesExample = "styles='{ height: '300px'; }'";
      var _timelineApiProps = [{
        nome: "@Input( )<br>items: TimelineItem[ ]",
        descricao: "Atributo obrigat\xF3rio com a lista de items/eventos.<br>\n      Padr\xE3o: [ ]"
      }, {
        nome: "@Input( )<br>orientation: enum TimelineOrientation | string | number",
        descricao: "Orienta\xE7\xE3o do componente, que pode ser horizontal (TimelineOrientation.horizontal | \"0\")\n      ou vertical (TimelineOrientation.vertical | \"1\").<br>\n      Padr\xE3o: TimelineOrientation.vertical | \"1\""
      }, {
        nome: "@Input( )<br>styles: [class: string]: any | string",
        descricao: "Objeto de estilo a ser passado para o timeline-wrapper.",
        codeExample: stylesExample,
        codeLang: "css"
      }];
      /***/
    },

    /***/
    82211:
    /*!******************************************************************************************!*\
      !*** ./src/app/demonstracao/componentes/timeline-demonstracao/timeline-code-examples.ts ***!
      \******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TimelineCodeExamples": function TimelineCodeExamples() {
          return (
            /* binding */
            _TimelineCodeExamples
          );
        }
        /* harmony export */

      });

      var _TimelineCodeExamples = /*#__PURE__*/_createClass(function _TimelineCodeExamples() {
        _classCallCheck(this, _TimelineCodeExamples);
      });

      _TimelineCodeExamples.codeDescricao = "<cx-timeline [items]=\"timelineItems\"></cx-timeline>".trim();
      _TimelineCodeExamples.codeTsDescricao = "timelineItems: TimelineItem[] = [\n  { title: \"Item sucesso\", state: TimelineState.SUCCESS, date: new Date()  },\n  { title: \"Item warning\", state: \"warning\", date: new Date(), dateFormat: \"full\" },\n  { title: \"Item warning-stop\", state: \"warning-stop\", dateString: \"05/12/2020\" },\n  { title: \"Item erro\", state: \"error\", dateString: \"03/12/2020\" },\n  { title: \"Item info\", state: \"info\", dateString: \"06/12/2020\" }\n];".trim();
      _TimelineCodeExamples.htmlCodeTimelinePadrao = "<cx-timeline [items]=\"timelineItems\"></cx-timeline>".trim();
      _TimelineCodeExamples.tsCodeTimelinePadrao = "import { Component } from '@angular/core';\nimport { TimelineItem, TimelineState } from \"./timeline/timeline-item\";\n\n@Component({\n    selector: 'app-timeline',\n    templateUrl: './timeline.component.html',\n    styleUrls: ['./timeline.component.scss']\n})\nexport class TimelineDemonstracaoComponent {\n\n  constructor() {}\n\n  timelineItems: TimelineItem[] = [\n    { title: \"Item sucesso\", state: TimelineState.SUCCESS, date: new Date()  },\n    { title: \"Item warning\", state: \"warning\", date: new Date(), dateFormat: \"full\" },\n    { title: \"Item warning-stop\", state: \"warning-stop\", dateString: \"05/12/2020\" },\n    { title: \"Item erro\", state: \"error\", dateString: \"03/12/2020\" },\n    { title: \"Item info\", state: \"info\", dateString: \"06/12/2020\" }\n  ];\n}\n".trimRight(); // tslint:disable-next-line:max-line-length

      _TimelineCodeExamples.htmlCodeTimelineExtenso = "<cx-timeline [styles]=\"{ height: '350px', width: 'auto' }\" [items]=\"timelineItemsExtenso\"></cx-timeline>".trim();
      _TimelineCodeExamples.tsCodeTimelineExtenso = "import { Component } from '@angular/core';\nimport { TimelineItem, TimelineState } from \"./timeline/timeline-item\";\n\n@Component({\n  selector: 'app-timeline',\n  templateUrl: './timeline.component.html',\n  styleUrls: ['./timeline.component.scss']\n})\nexport class TimelineDemonstracaoComponent {\n\n  constructor() {}\n\n  timelineItemsExtenso: TimelineItem[] = [\n    { title: \"Item sucesso\", state: TimelineState.SUCCESS, date: new Date()  },\n    { title: \"Item warning\", state: \"warning\", date: new Date(), dateFormat: \"full\" },\n    { title: \"Item warning-stop\", state: \"warning-stop\", dateString: \"05/12/2020\" },\n    { title: \"Item erro\", state: \"error\", dateString: \"03/12/2020\" },\n    { title: \"Item info\", state: \"info\", dateString: \"06/12/2020\" },\n    { title: \"Item sucesso\", state: TimelineState.SUCCESS, date: new Date()  },\n    { title: \"Item warning\", state: \"warning\", date: new Date(), dateFormat: \"full\" },\n    { title: \"Item warning-stop\", state: \"warning-stop\", dateString: \"05/12/2020\" },\n    { title: \"Item erro\", state: \"error\", dateString: \"03/12/2020\" },\n    { title: \"Item info\", state: \"info\", dateString: \"06/12/2020\" }\n  ];\n}\n".trimRight();
      /***/
    },

    /***/
    24014:
    /*!***************************************************************************************************!*\
      !*** ./src/app/demonstracao/componentes/timeline-demonstracao/timeline-demonstracao.component.ts ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TimelineDemonstracaoComponent": function TimelineDemonstracaoComponent() {
          return (
            /* binding */
            _TimelineDemonstracaoComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var src_app_guia_caixa_components_timeline_timeline_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/guia-caixa/components/timeline/timeline-item */
      10877);
      /* harmony import */


      var _componentes_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../componentes-interface */
      31438);
      /* harmony import */


      var _timeline_api_props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./timeline-api-props */
      9945);
      /* harmony import */


      var _timeline_code_examples__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./timeline-code-examples */
      82211);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-toastr */
      83315);
      /* harmony import */


      var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-highlightjs */
      24971);
      /* harmony import */


      var _shared_components_documentacao_template_documentacao_template_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../shared/components/documentacao-template/documentacao-template.component */
      8990);
      /* harmony import */


      var _guia_caixa_components_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../guia-caixa/components/timeline/timeline.component */
      36270);
      /* harmony import */


      var _shared_components_code_fixed_nav_code_fixed_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../shared/components/code-fixed-nav/code-fixed-nav.component */
      72994);
      /* harmony import */


      var _shared_components_documentacao_api_table_documentacao_api_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../shared/components/documentacao-api-table/documentacao-api-table.component */
      17841);
      /* harmony import */


      var _guia_caixa_components_select_caixa_select_caixa_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../guia-caixa/components/select-caixa/select-caixa.component */
      99536);
      /* harmony import */


      var _guia_caixa_components_select_caixa_select_caixa_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../guia-caixa/components/select-caixa/select-caixa.directive */
      20365);

      var _c0 = ["scrollElement"];

      var _c1 = function _c1() {
        return ["html"];
      };

      var _c2 = function _c2() {
        return ["ts"];
      };

      var _c3 = function _c3() {
        return {
          height: "350px",
          width: "auto"
        };
      };

      var _TimelineDemonstracaoComponent = /*#__PURE__*/function (_componentes_interfac7) {
        _inherits(_TimelineDemonstracaoComponent, _componentes_interfac7);

        var _super7 = _createSuper(_TimelineDemonstracaoComponent);

        function _TimelineDemonstracaoComponent(toastr, fb) {
          var _this9;

          _classCallCheck(this, _TimelineDemonstracaoComponent);

          _this9 = _super7.call(this, toastr);
          _this9.toastr = toastr;
          _this9.fb = fb;
          _this9.sandboxForm = _this9.fb.group({
            title: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
            date: [null],
            dateString: [null],
            formato: [null],
            state: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]
          });
          _this9.sectionOffset = 0;
          _this9.spiedTags = ["APP-DOCUMENTACAO-TEMPLATE"];
          _this9.currentSection = "painelTimeline";
          _this9.navItems = [{
            id: "painelTimeline",
            name: "Padrão"
          }, {
            id: "painelTimelineExtenso",
            name: "Extenso"
          }];
          _this9.propsApi = _timeline_api_props__WEBPACK_IMPORTED_MODULE_2__.timelineApiProps;
          _this9.timelineItems = [{
            title: "Item sucesso",
            state: src_app_guia_caixa_components_timeline_timeline_item__WEBPACK_IMPORTED_MODULE_0__.TimelineState.SUCCESS,
            date: new Date()
          }, {
            title: "Item warning",
            state: "warning",
            date: new Date(),
            dateFormat: "full"
          }, {
            title: "Item warning-stop",
            state: "warning-stop",
            dateString: "05/12/2020"
          }, {
            title: "Item erro",
            state: "error",
            dateString: "03/12/2020"
          }, {
            title: "Item info",
            state: "info",
            dateString: "06/12/2020"
          }];
          _this9.timelineItemsExtenso = [{
            title: "Item sucesso",
            state: src_app_guia_caixa_components_timeline_timeline_item__WEBPACK_IMPORTED_MODULE_0__.TimelineState.SUCCESS,
            date: new Date()
          }, {
            title: "Item warning",
            state: "warning",
            date: new Date(),
            dateFormat: "full"
          }, {
            title: "Item warning-stop",
            state: "warning-stop",
            dateString: "05/12/2020"
          }, {
            title: "Item erro",
            state: "error",
            dateString: "03/12/2020"
          }, {
            title: "Item info",
            state: "info",
            dateString: "06/12/2020"
          }, {
            title: "Item sucesso",
            state: src_app_guia_caixa_components_timeline_timeline_item__WEBPACK_IMPORTED_MODULE_0__.TimelineState.SUCCESS,
            date: new Date()
          }, {
            title: "Item warning",
            state: "warning",
            date: new Date(),
            dateFormat: "full"
          }, {
            title: "Item warning-stop",
            state: "warning-stop",
            dateString: "05/12/2020"
          }, {
            title: "Item erro",
            state: "error",
            dateString: "03/12/2020"
          }, {
            title: "Item info",
            state: "info",
            dateString: "06/12/2020"
          }];
          _this9.sandboxTimelineItems = [{
            title: "Item sucesso",
            state: src_app_guia_caixa_components_timeline_timeline_item__WEBPACK_IMPORTED_MODULE_0__.TimelineState.SUCCESS,
            date: new Date()
          }, {
            title: "Item warning",
            state: "warning",
            date: new Date(),
            dateFormat: "full"
          }];
          _this9.timelineOrientation = 1;
          _this9.examples = _timeline_code_examples__WEBPACK_IMPORTED_MODULE_3__.TimelineCodeExamples;
          return _this9;
        }

        _createClass(_TimelineDemonstracaoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "addItem",
          value: function addItem() {
            var newItem = {};
            newItem.title = this.sandboxForm.get("title").value;
            newItem.state = this.sandboxForm.get("state").value;

            if (this.sandboxForm.get("dateString").value) {
              newItem.dateString = this.sandboxForm.get("dateString").value;
            } else {
              newItem.date = this.sandboxForm.get("date").value;

              if (this.sandboxForm.get("formato").value) {
                newItem.dateFormat = this.sandboxForm.get("formato").value;
              }
            }

            if (!newItem.dateString && !newItem.date) {
              return;
            }

            this.sandboxTimelineItems.push(newItem);
            this.sandboxTimelineItems = [].concat(this.sandboxTimelineItems);
          }
        }, {
          key: "removeItem",
          value: function removeItem() {
            this.sandboxTimelineItems.pop();
            this.sandboxTimelineItems = [].concat(this.sandboxTimelineItems);
          }
        }]);

        return _TimelineDemonstracaoComponent;
      }(_componentes_interface__WEBPACK_IMPORTED_MODULE_1__.ComponentesInterface);

      _TimelineDemonstracaoComponent.ɵfac = function TimelineDemonstracaoComponent_Factory(t) {
        return new (t || _TimelineDemonstracaoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_12__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder));
      };

      _TimelineDemonstracaoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
        type: _TimelineDemonstracaoComponent,
        selectors: [["ng-component"]],
        viewQuery: function TimelineDemonstracaoComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.scrollElement = _t.first);
          }
        },
        hostBindings: function TimelineDemonstracaoComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("scroll", function TimelineDemonstracaoComponent_scroll_HostBindingHandler($event) {
              return ctx.onScroll($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresolveWindow"]);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]],
        decls: 141,
        vars: 30,
        consts: [[1, "titulo"], [1, "my-4"], [1, "citation-highlight"], [1, "font-fam-bold"], [3, "highlight", "languages"], ["role", "tablist", 1, "nav", "nav-pills", "tab-caixa"], [1, "nav-item"], ["data-toggle", "tab", "href", "#visaoGeral", "role", "tab", 1, "nav-link", "text-uppercase", "active"], ["data-toggle", "tab", "href", "#api", "role", "tab", 1, "nav-link", "text-uppercase"], ["data-toggle", "tab", "href", "#exemplos", "role", "tab", 1, "nav-link", "text-uppercase"], [1, "tab-content"], ["id", "visaoGeral", "role", "tabpanel", 1, "tab-pane", "fade", "show", "active"], [1, "row", "no-gutters"], [1, "col-12", "col-xl-9", "pr-2"], ["scrollElement", ""], ["id", "painelTimeline", 3, "cardTitle", "codeViewId", "htmlTabId", "htmlCode", "tsTabId", "tsCode"], [1, "descricao"], ["target", "_blank", "href", "https://angular.io/api/common/DatePipe#pre-defined-format-options", 1, "text-link"], [1, "conteudo"], [3, "items"], ["id", "painelTimelineExtenso", 3, "cardTitle", "codeViewId", "htmlTabId", "htmlCode", "tsTabId", "tsCode"], [3, "styles", "items"], ["id", "navSection", 1, "d-none", "col-3", "d-xl-flex", "pl-4"], [3, "items", "currentSection"], ["id", "api", "role", "tabpanel", 1, "tab-pane", "fade"], [1, "card"], [1, "card-body"], [1, "header-subtitulo-caixa"], [3, "props"], ["id", "exemplos", "role", "tabpanel", 1, "tab-pane", "fade"], ["id", "timelineSandbox", 1, "mb-5"], [3, "items", "orientation"], ["timelineSandbox", ""], [3, "formGroup"], [1, "card", "mt-2"], [1, "row"], [1, "col-3"], ["formControlName", "title", 1, "form-control"], [1, "col-2"], ["formControlName", "dateString", 1, "form-control"], ["formControlName", "date", "type", "date", 1, "form-control"], ["formControlName", "formato", "type", "text", 1, "form-control"], ["selectCaixa", "", "formControlName", "state"], ["value", "success"], ["value", "error"], ["value", "warning"], ["value", "warning-stop"], ["value", "info"], [1, "col-3", "d-flex", "align-items-center"], ["title", "Remover", 1, "btn", "btn-danger", "ml-2", 3, "disabled", "click"], [1, "fa", "fa-minus", "fa-lg"], ["title", "Adicionar", 1, "btn", "btn-success", "ml-2", 3, "disabled", "click"], [1, "fa", "fa-plus", "fa-lg"]],
        template: function TimelineDemonstracaoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Timeline\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "O componente Timeline apresenta uma linha do tempo simples com \xEDcones e cores que indicam a natureza de cada acontecimento.");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, "O atributo ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9, "items");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, " deve sempre receber uma lista de TimelineItem.");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "h6", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, "HTML:");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](14, "code", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "h6", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16, "TS:");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](18, "code", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22, " Vis\xE3o Geral ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](25, " API ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](28, " Exemplos ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](29, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](30, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](31, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](33, "section", 13, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "app-documentacao-template", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](36, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](37, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](38, "O componente recebe a lista de ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](39, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](40, "TimelineItem");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](41, " e desenha, por padr\xE3o na vertical, a linha do tempo. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](42, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](43, "Os estados poss\xEDveis podem ser informados utilizando a enum ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](44, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](45, "TimelineState");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](46, ", ou informando a string diretamente (ex. \"success\"). ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](47, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](48, "A data deve ser informada pelo atributo ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](49, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](50, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](51, ", do tipo Date, ou pelo atributo ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](52, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](53, "dateString");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](54, ", do tipo String.");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](55, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](56, "Caso a formata\xE7\xE3o padr\xE3o do objeto Date n\xE3o seja a desejada, pode-se informar pelo atributo ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](57, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](58, "dateFormat");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](59, " qualquer um dos formatos suportados pelo DatePipe do Angular: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](60, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](61, " https://angular.io/api/common/DatePipe ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](62, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](63, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](64, "cx-timeline", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](65, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](66, "app-documentacao-template", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](67, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](68, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](69, "Caso a lista de acontecimentos seja extensa, \xE9 poss\xEDvel atribuir valores para os propriedades do componente, como ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](70, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](71, "height");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](72, " ou ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](73, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](74, "width");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](75, ", pelo atributo ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](76, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](77, "styles");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](78, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](79, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](80, "O componente exibir\xE1 uma barra de rolagem e destacar\xE1 a parte final da lista por padr\xE3o");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](81, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](82, "cx-timeline", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](83, "nav", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](84, "app-code-fixed-nav", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](85, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](86, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](87, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](88, "h5", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](89, "Cx-Timeline");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](90, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](91, " Componente de exibi\xE7\xE3o de acontecimentos sequenciais. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](92, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](93, "Usar como: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](94, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](95, "cx-timeline");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](96, "app-documentacao-api-table", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](97, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](98, "section", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](99, "cx-timeline", 31, 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](101, "form", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](102, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](103, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](104, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](105, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](106, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](107, "T\xEDtulo");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](108, "input", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](109, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](110, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](111, "Data - Texto");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](112, "input", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](113, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](114, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](115, "Data - objeto");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](116, "input", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](117, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](118, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](119, "Formato");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](120, "input", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](121, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](122, "cx-select");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](123, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](124, "Estado");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](125, "select", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](126, "option", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](127, "Sucesso");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](128, "option", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](129, "Erro");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](130, "option", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](131, "Alerta");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](132, "option", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](133, "Alerta - decis\xE3o");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](134, "option", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](135, "Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](136, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](137, "button", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function TimelineDemonstracaoComponent_Template_button_click_137_listener() {
              return ctx.removeItem();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](138, "i", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](139, "button", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function TimelineDemonstracaoComponent_Template_button_click_139_listener() {
              return ctx.addItem();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](140, "i", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("highlight", ctx.examples.codeDescricao)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](27, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("highlight", ctx.examples.codeTsDescricao)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](28, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("cardTitle", "Timeline Padr\xE3o")("codeViewId", "viewTimelinePadrao")("htmlTabId", "htmlCodeTimelinePadrao")("htmlCode", ctx.examples.htmlCodeTimelinePadrao)("tsTabId", "tsCodeTimelinePadrao")("tsCode", ctx.examples.tsCodeTimelinePadrao);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("items", ctx.timelineItems);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("cardTitle", "Timeline Extenso")("codeViewId", "viewTimelineExtenso")("htmlTabId", "htmlCodeTimelineExtenso")("htmlCode", ctx.examples.htmlCodeTimelineExtenso)("tsTabId", "tsCodeTimelineExtenso")("tsCode", ctx.examples.tsCodeTimelineExtenso);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("styles", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](29, _c3))("items", ctx.timelineItemsExtenso);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("items", ctx.navItems)("currentSection", ctx.currentSection);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("props", ctx.propsApi);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("items", ctx.sandboxTimelineItems)("orientation", ctx.timelineOrientation);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.sandboxForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx.sandboxTimelineItems.length == 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !ctx.sandboxForm.valid);
          }
        },
        directives: [ngx_highlightjs__WEBPACK_IMPORTED_MODULE_13__.Highlight, _shared_components_documentacao_template_documentacao_template_component__WEBPACK_IMPORTED_MODULE_4__.DocumentacaoTemplateComponent, _guia_caixa_components_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_5__.TimelineComponent, _shared_components_code_fixed_nav_code_fixed_nav_component__WEBPACK_IMPORTED_MODULE_6__.CodeFixedNavComponent, _shared_components_documentacao_api_table_documentacao_api_table_component__WEBPACK_IMPORTED_MODULE_7__.DocumentacaoApiTableComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _guia_caixa_components_select_caixa_select_caixa_component__WEBPACK_IMPORTED_MODULE_8__.SelectCaixaComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.SelectControlValueAccessor, _guia_caixa_components_select_caixa_select_caixa_directive__WEBPACK_IMPORTED_MODULE_9__.SelectCaixaDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgSelectMultipleOption"]],
        encapsulation: 2
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_demonstracao_componentes_componentes-caixa_module_ts-es5.js.map