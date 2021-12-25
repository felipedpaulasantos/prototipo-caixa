(function () {
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (self["webpackChunkprototipo_caixa"] = self["webpackChunkprototipo_caixa"] || []).push([["src_app_demonstracao_componentes-basicos_componentes-basicos_module_ts"], {
    /***/
    65077:
    /*!*****************************************************************************!*\
      !*** ./src/app/demonstracao/componentes-basicos/botoes/botoes.component.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BotoesComponent": function BotoesComponent() {
          return (
            /* binding */
            _BotoesComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _componentes_componentes_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../componentes/componentes-interface */
      31438);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-toastr */
      83315);
      /* harmony import */


      var _shared_components_documentacao_template_documentacao_template_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/components/documentacao-template/documentacao-template.component */
      8990);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-highlightjs */
      24971);
      /* harmony import */


      var _shared_components_code_fixed_nav_code_fixed_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/components/code-fixed-nav/code-fixed-nav.component */
      72994);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);

      var _c0 = ["scrollElement"];

      function BotoesComponent_ng_container_91_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Padr\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Pequeno");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Grande");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Outline");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Desabilitado");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var tema_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("btn btn-", tema_r2 == null ? null : tema_r2.name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("btn btn-", tema_r2 == null ? null : tema_r2.name, " btn-sm");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("btn btn-", tema_r2 == null ? null : tema_r2.name, " btn-lg");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("btn btn-outline-", tema_r2 == null ? null : tema_r2.name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("btn btn-", tema_r2 == null ? null : tema_r2.name, "");
        }
      }

      var _c1 = function _c1() {
        return ["html"];
      };

      var _BotoesComponent = /*#__PURE__*/function (_componentes_componen) {
        _inherits(_BotoesComponent, _componentes_componen);

        var _super = _createSuper(_BotoesComponent);

        function _BotoesComponent(toastr) {
          var _this;

          _classCallCheck(this, _BotoesComponent);

          _this = _super.call(this, toastr);
          _this.toastr = toastr;
          /*   temas = BootstrapTheme.getTemas(); */

          _this.temas = [{
            "name": "main"
          }, {
            "name": "accent"
          }, {
            "name": "cancel"
          }, {
            "name": "aux"
          }, {
            "name": "success"
          }, {
            "name": "danger"
          }, {
            "name": "info"
          }, {
            "name": "warning"
          }];
          _this.spiedTags = ["APP-DOCUMENTACAO-TEMPLATE"];
          _this.sectionOffset = 0;
          _this.currentSection = "painelBotoes";
          _this.navItems = [{
            id: "painelBotoes",
            name: "Padrão"
          }, {
            id: "painelBotoesTamanho",
            name: "ícones"
          }];
          _this.botoesIntroducao = "<button class=\"btn btn-main\">Principal</button>;\n<button class=\"btn btn-accent\">Destaque</button>;\n<button class=\"btn btn-cancel\">Cancel</button>;\n<button class=\"btn btn-outline-aux\">Auxiliar</button>;\n<button class=\"btn btn-danger btn-sm\">Perigo</button>;\n<button class=\"btn btn-success btn-lg\">Sucesso</button>;\n<button class=\"btn btn-warning\">Alerta</button>\n<button class=\"btn btn-info\">Informativo</button>\n<button class=\"btn btn-link\">Link</button>";
          _this.botoesIcones = "<button class=\"btn btn-accent btn-sm\">\n  <i class=\"fa fa-plus mr-2\"></i>Incluir\n</button>\n\n<button class=\"btn btn-outline-accent\">\n  <i class=\"fa fa-edit mr-2\"></i>Editar\n</button>\n\n<button class=\"btn btn-main btn-lg\">\n  <i class=\"fa fa-lg fa-save mr-3\"></i>Salvar\n</button>";
          _this.htmlCodeBotoes = "<button class=\"btn btn-cancel\">Bot\xE3o</button>".trim();
          _this.htmlCodeBotoesTematicos = "        <button class=\"btn btn-accent\">Prim\xE1rio</button> &nbsp;\n<button class=\"btn btn-danger-dark\">Erro com tom escuro</button> &nbsp;\n<button class=\"btn btn-apoio-light\">Apoio com tom claro</button> &nbsp;\n<button class=\"btn btn-outline-info\">Info - outline</button>".trim();
          _this.htmlCodeBotoesTamanho = "        <button class=\"btn btn-outline-dark btn-sm\">Pequeno</button> &nbsp;\n<button class=\"btn btn-primario btn-lg\">Grande</button> &nbsp;\n<button class=\"btn btn-primario btn-lg disabled\">Grande desabilitado</button> &nbsp;\n<button class=\"btn btn-outline-accent\">\n  <i class=\"fa fa-edit mr-2\"></i>\n  Com \xEDcone\n</button>".trim();
          _this.htmlCodeExemplo = "          <button class=\"btn btn-link\">\n  Flat\n</button>\n<button class=\"btn btn-link rounded-circle p-3\">\n  <i class=\"fa fa-bars fa-2x\"></i>\n</button>\n<button class=\"btn btn-link text-main rounded-circle p-2\">\n  <i class=\"fa fa-home fa-2x\"></i>\n</button>\n<button class=\"btn btn-outline-apoio rounded-circle p-2\">\n  <i class=\"fa fa-check fa-lg\"></i>\n</button>\n<button class=\"btn btn-primario rounded-circle p-3\">\n  <i class=\"fa fa-play fa-lg\"></i>\n</button>\n<button class=\"btn btn-outline-perigo rounded-circle shadow-none p-4\">\n  <i class=\"fa fa-trash fa-2x\"></i>\n</button>\n<button class=\"btn btn-aux shadow-none\">\n  Sem sombra\n</button>".trim();
          _this.cssCodeExemplo = ".btn-exemplo button {\n    margin-left: 1rem;\n    margin-right: 1rem;\n}".trim();
          _this.htmlCodeTodosTematicos = "        <div class=\"table-responsive\">\n  <table class=\"table table-caixa table-borderless\">\n    <tbody>\n      <ng-container *ngFor=\"let tema of temas; let i = index\">\n        <tr>\n          <td><button class=\"btn btn-{{tema.name}}\">Padr\xE3o</button></td>\n          <td><button class=\"btn btn-{{tema.name}}-light\">Claro</button></td>\n          <td><button class=\"btn btn-{{tema.name}}-dark\">Escuro</button></td>\n          <td><button class=\"btn btn-outline-{{tema.name}}\">Outline</button></td>\n          <td><button class=\"btn btn-outline-{{tema.name}}-light\">Claro</button></td>\n          <td><button class=\"btn btn-outline-{{tema.name}}-dark\">Escuro</button></td>\n        </tr>\n      </ng-container>\n    </tbody>\n  </table>\n</div>".trim();
          _this.tsCodeTodosTematicos = "  import { Component } from '@angular/core';\n\n  @Component({\n      selector: 'app-botoes',\n      templateUrl: './botoes.component.html',\n      styleUrls: ['./botoes.component.scss']\n  })\n  export class BotoesComponent {\n\n    temas = [\n      { \"name\": \"primary\" },\n      { \"name\": \"secondary\" },\n      { \"name\": \"success\" },\n      { \"name\": \"danger\" },\n      { \"name\": \"info\" },\n      { \"name\": \"warning\" },\n      { \"name\": \"apoio\" },\n      { \"name\": \"aux\" },\n      { \"name\": \"light\" },\n      { \"name\": \"dark\" }\n    ]\n  }\n  ".trimRight();
          return _this;
        }

        _createClass(_BotoesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _BotoesComponent;
      }(_componentes_componentes_interface__WEBPACK_IMPORTED_MODULE_0__.ComponentesInterface);

      _BotoesComponent.ɵfac = function BotoesComponent_Factory(t) {
        return new (t || _BotoesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService));
      };

      _BotoesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _BotoesComponent,
        selectors: [["app-botoes"]],
        viewQuery: function BotoesComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.scrollElement = _t.first);
          }
        },
        hostBindings: function BotoesComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("scroll", function BotoesComponent_scroll_HostBindingHandler($event) {
              return ctx.onScroll($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
        decls: 92,
        vars: 26,
        consts: [[1, "titulo"], ["role", "tablist", 1, "nav", "nav-pills", "tab-caixa"], [1, "nav-item"], ["data-toggle", "tab", "href", "#visaoGeral", "role", "tab", 1, "nav-link", "text-uppercase", "active"], ["data-toggle", "tab", "href", "#exemplos", "role", "tab", 1, "nav-link", "text-uppercase"], [1, "tab-content"], ["id", "visaoGeral", "role", "tabpanel", 1, "tab-pane", "fade", "show", "active"], [1, "row", "no-gutters"], [1, "col-12", "col-xl-9", "pr-2", "mb-5"], ["scrollElement", ""], ["id", "painelBotoes", 3, "showCodeButton", "cardTitle", "codeViewId", "htmlTabId", "htmlCode"], [1, "descricao"], ["routerLink", "/cores", 1, "text-destaque"], [1, "conteudo"], [1, "btn", "btn-main"], [1, "btn", "btn-accent"], [1, "btn", "btn-cancel"], [1, "btn", "btn-outline-aux"], [1, "btn", "btn-danger", "btn-sm"], [1, "btn", "btn-success", "btn-lg"], [1, "btn", "btn-warning"], [1, "btn", "btn-info"], [1, "btn", "btn-link"], [1, "mt-3"], [3, "highlight", "languages"], ["id", "painelBotoesTamanho", 3, "showCodeButton", "cardTitle", "codeViewId", "htmlTabId", "htmlCode"], [1, "btn", "btn-accent", "btn-sm"], [1, "fa", "fa-plus", "mr-2"], [1, "btn", "btn-outline-accent"], [1, "fa", "fa-edit", "mr-2"], [1, "btn", "btn-main", "btn-lg"], [1, "fa", "fa-lg", "fa-save", "mr-3"], ["id", "navSection", 1, "d-none", "col-3", "d-xl-flex", "pl-4"], [3, "items", "currentSection"], ["id", "exemplos", "role", "tabpanel", 1, "tab-pane", "fade"], [3, "showCodeButton", "cardTitle", "codeViewId", "htmlTabId", "htmlCode", "tsTabId", "tsCode"], [1, "table-responsive"], [1, "table", "table-caixa", "table-borderless"], [4, "ngFor", "ngForOf"], ["disabled", ""]],
        template: function BotoesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Bot\xF5es\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ul", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Vis\xE3o Geral ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Exemplos ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "section", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "app-documentacao-template", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Seguir o padr\xE3o do Bootstrap com as classes tem\xE1ticas definidas no menu ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Cores");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " Todas as variantes (outline, block, lg, sm) est\xE3o dispon\xEDveis. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Principal");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Destaque");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Auxiliar");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Perigo");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Sucesso");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Alerta");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Informativo");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "Link");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "pre", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "code", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "app-documentacao-template", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, " Utilizar \xEDcones ao lado esquerdo do texto, conforme segue:");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "- Bot\xF5es pequenos:");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, " \xEDcones comuns (classe \"fa/fas/far\") com espa\xE7amento \xE0 direita padr\xE3o de 0.5rem (classe \"mr-2\").");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](60, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "- Bot\xF5es de tamanho normal:");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, " \xEDcones comuns (classe \"fa/fas/far\") com espa\xE7amento \xE0 direita padr\xE3o de 0.5rem (classe \"mr-2\").");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](64, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "- Bot\xF5es grandes:");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, " \xEDcones grandes (classe \"fa/fas/far\" acompanhada da \"fa-lg\") com espa\xE7amento \xE0 direita padr\xE3o de 1rem (classe \"mr-3\").");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](68, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](71, "i", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "Incluir ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, " \xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](75, "i", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "Editar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, " \xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](79, "i", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, "Salvar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "pre", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](82, "code", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "nav", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](84, "app-code-fixed-nav", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "app-documentacao-template", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "table", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](91, BotoesComponent_ng_container_91_Template, 17, 15, "ng-container", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("showCodeButton", false)("cardTitle", "Padr\xE3o")("codeViewId", "viewBotoes")("htmlTabId", "htmlCodeBotoes")("htmlCode", ctx.htmlCodeBotoes);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("highlight", ctx.botoesIntroducao)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](24, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("showCodeButton", false)("cardTitle", "\xCDcones")("codeViewId", "viewBotoesTamanho")("htmlTabId", "htmlCodeBotoesTamanho")("htmlCode", ctx.htmlCodeBotoesTamanho);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("highlight", ctx.botoesIcones)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](25, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", ctx.navItems)("currentSection", ctx.currentSection);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("showCodeButton", false)("cardTitle", "Tem\xE1ticos")("codeViewId", "viewBotoesTodosTematicos")("htmlTabId", "htmlCodeTodosTematicos")("htmlCode", ctx.htmlCodeTodosTematicos)("tsTabId", "tsCodeTodosTematicos")("tsCode", ctx.tsCodeTodosTematicos);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.temas);
          }
        },
        directives: [_shared_components_documentacao_template_documentacao_template_component__WEBPACK_IMPORTED_MODULE_1__.DocumentacaoTemplateComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__.Highlight, _shared_components_code_fixed_nav_code_fixed_nav_component__WEBPACK_IMPORTED_MODULE_2__.CodeFixedNavComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf],
        styles: [".btn-exemplo[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n\tmargin-left: 1rem;\r\n\tmargin-right: 1rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvdG9lcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsaUJBQWlCO0NBQ2pCLGtCQUFrQjtBQUNuQiIsImZpbGUiOiJib3RvZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tZXhlbXBsbyBidXR0b24ge1xyXG5cdG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG5cdG1hcmdpbi1yaWdodDogMXJlbTtcclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    30355:
    /*!****************************************************************************************!*\
      !*** ./src/app/demonstracao/componentes-basicos/componentes-basicos-routing.module.ts ***!
      \****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ComponentesBasicosRoutingModule": function ComponentesBasicosRoutingModule() {
          return (
            /* binding */
            _ComponentesBasicosRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _botoes_botoes_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./botoes/botoes.component */
      65077);
      /* harmony import */


      var _cards_cards_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./cards/cards.component */
      94081);
      /* harmony import */


      var _componentes_basicos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./componentes-basicos.component */
      45703);
      /* harmony import */


      var _forms_forms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./forms/forms.component */
      10743);
      /* harmony import */


      var _mensagens_mensagens_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./mensagens/mensagens.component */
      12861);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: "",
        component: _componentes_basicos_component__WEBPACK_IMPORTED_MODULE_2__.ComponentesBasicosComponent,
        // canActivate: [AuthGuard],
        data: {
          title: "Componentes básicos",
          breadcrumb: "Componentes básicos"
        }
      }, {
        path: "botoes",
        component: _botoes_botoes_component__WEBPACK_IMPORTED_MODULE_0__.BotoesComponent,
        data: {
          title: "Botões",
          breadcrumb: "Botões",
          animation: "Botões"
        }
      }, {
        path: "cards",
        component: _cards_cards_component__WEBPACK_IMPORTED_MODULE_1__.CardsComponent,
        data: {
          title: "Cards",
          breadcrumb: "Cards",
          animation: "Cards"
        }
      }, {
        path: "forms",
        component: _forms_forms_component__WEBPACK_IMPORTED_MODULE_3__.FormsComponent,
        data: {
          title: "Forms",
          breadcrumb: "Forms",
          animation: "Forms"
        }
      }, {
        path: "mensagens",
        component: _mensagens_mensagens_component__WEBPACK_IMPORTED_MODULE_4__.MensagensComponent,
        data: {
          title: "Mensagens",
          breadcrumb: "Mensagens",
          animation: "Mensagens"
        }
      }];

      var _ComponentesBasicosRoutingModule = /*#__PURE__*/_createClass(function _ComponentesBasicosRoutingModule() {
        _classCallCheck(this, _ComponentesBasicosRoutingModule);
      });

      _ComponentesBasicosRoutingModule.ɵfac = function ComponentesBasicosRoutingModule_Factory(t) {
        return new (t || _ComponentesBasicosRoutingModule)();
      };

      _ComponentesBasicosRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _ComponentesBasicosRoutingModule
      });
      _ComponentesBasicosRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_ComponentesBasicosRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    45703:
    /*!***********************************************************************************!*\
      !*** ./src/app/demonstracao/componentes-basicos/componentes-basicos.component.ts ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ComponentesBasicosComponent": function ComponentesBasicosComponent() {
          return (
            /* binding */
            _ComponentesBasicosComponent
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

      function ComponentesBasicosComponent_div_2_div_1_Template(rf, ctx) {
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

      function ComponentesBasicosComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ComponentesBasicosComponent_div_2_div_1_Template, 7, 5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cols_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", cols_r1);
        }
      }

      var _ComponentesBasicosComponent = /*#__PURE__*/function () {
        function _ComponentesBasicosComponent(menuService) {
          _classCallCheck(this, _ComponentesBasicosComponent);

          this.menuService = menuService;
          this.rows = [];
          this.resources = [];
        }

        _createClass(_ComponentesBasicosComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.menuService.menuItems$.subscribe(function (items) {
              var componentes = items.find(function (item) {
                return item.url === "/componentes-basicos";
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

        return _ComponentesBasicosComponent;
      }();

      _ComponentesBasicosComponent.ɵfac = function ComponentesBasicosComponent_Factory(t) {
        return new (t || _ComponentesBasicosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_menu_side_menu_side_menu_service__WEBPACK_IMPORTED_MODULE_0__.SideMenuService));
      };

      _ComponentesBasicosComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _ComponentesBasicosComponent,
        selectors: [["app-componentes-basicos"]],
        decls: 3,
        vars: 1,
        consts: [[1, "titulo"], ["class", "row d-flex justify-content-center", 4, "ngFor", "ngForOf"], [1, "row", "d-flex", "justify-content-center"], ["class", "col-10 col-md-6 col-xl-4", 4, "ngFor", "ngForOf"], [1, "col-10", "col-md-6", "col-xl-4"], ["role", "button", "optionalClasses", "button-card-min-height", "routerLinkActive", "active", 1, "card", "w-75", "card-hover", "button-card", 3, "routerLink"], [1, "card-body"], [1, "header-subtitulo-caixa", "m-0", "mr-3", "text-center"]],
        template: function ComponentesBasicosComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Componentes b\xE1sicos ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ComponentesBasicosComponent_div_2_Template, 2, 1, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.rows);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wb25lbnRlcy1iYXNpY29zLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    30812:
    /*!********************************************************************************!*\
      !*** ./src/app/demonstracao/componentes-basicos/componentes-basicos.module.ts ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ComponentesBasicosModule": function ComponentesBasicosModule() {
          return (
            /* binding */
            _ComponentesBasicosModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _componentes_basicos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./componentes-basicos-routing.module */
      30355);
      /* harmony import */


      var _componentes_basicos_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./componentes-basicos.component */
      45703);
      /* harmony import */


      var _botoes_botoes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./botoes/botoes.component */
      65077);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! angular-datatables */
      29290);
      /* harmony import */


      var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-highlightjs */
      24971);
      /* harmony import */


      var ngx_mask__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-mask */
      30247);
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      29150);
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      44466);
      /* harmony import */


      var src_app_guia_caixa_guia_caixa_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/guia-caixa/guia-caixa.module */
      93981);
      /* harmony import */


      var _forms_forms_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./forms/forms.component */
      10743);
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ng-select/ng-select */
      36868);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ComponentesBasicosModule = /*#__PURE__*/_createClass(function _ComponentesBasicosModule() {
        _classCallCheck(this, _ComponentesBasicosModule);
      });

      _ComponentesBasicosModule.ɵfac = function ComponentesBasicosModule_Factory(t) {
        return new (t || _ComponentesBasicosModule)();
      };

      _ComponentesBasicosModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: _ComponentesBasicosModule
      });
      _ComponentesBasicosModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _componentes_basicos_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComponentesBasicosRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__.NgSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, ngx_mask__WEBPACK_IMPORTED_MODULE_11__.NgxMaskModule, angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTablesModule, ngx_highlightjs__WEBPACK_IMPORTED_MODULE_12__.HighlightModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__.PerfectScrollbarModule, src_app_guia_caixa_guia_caixa_module__WEBPACK_IMPORTED_MODULE_5__.GuiaCaixaModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](_ComponentesBasicosModule, {
          declarations: [_componentes_basicos_component__WEBPACK_IMPORTED_MODULE_1__.ComponentesBasicosComponent, _botoes_botoes_component__WEBPACK_IMPORTED_MODULE_2__.BotoesComponent, _forms_forms_component__WEBPACK_IMPORTED_MODULE_6__.FormsComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _componentes_basicos_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComponentesBasicosRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__.NgSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, ngx_mask__WEBPACK_IMPORTED_MODULE_11__.NgxMaskModule, angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTablesModule, ngx_highlightjs__WEBPACK_IMPORTED_MODULE_12__.HighlightModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__.PerfectScrollbarModule, src_app_guia_caixa_guia_caixa_module__WEBPACK_IMPORTED_MODULE_5__.GuiaCaixaModule]
        });
      })();
      /***/

    },

    /***/
    10743:
    /*!***************************************************************************!*\
      !*** ./src/app/demonstracao/componentes-basicos/forms/forms.component.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FormsComponent": function FormsComponent() {
          return (
            /* binding */
            _FormsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _componentes_componentes_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../componentes/componentes-interface */
      31438);
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


      var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-highlightjs */
      24971);
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-select/ng-select */
      36868);
      /* harmony import */


      var _guia_caixa_components_button_control_button_control_button_control_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../guia-caixa/components/button-control/button-control/button-control.component */
      84652);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _shared_components_code_fixed_nav_code_fixed_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../shared/components/code-fixed-nav/code-fixed-nav.component */
      72994);

      var _c0 = ["scrollElement"];

      function FormsComponent_span_134_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "E-mail inv\xE1lido");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function FormsComponent_span_155_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Campo obrigat\xF3rio");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function FormsComponent_span_163_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Idade inv\xE1lida - deve ser entre 18 e 70");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      var _c1 = function _c1() {
        return ["html"];
      };

      var _FormsComponent = /*#__PURE__*/function (_componentes_componen2) {
        _inherits(_FormsComponent, _componentes_componen2);

        var _super2 = _createSuper(_FormsComponent);

        function _FormsComponent(toastr, fb) {
          var _this3;

          _classCallCheck(this, _FormsComponent);

          _this3 = _super2.call(this, toastr);
          _this3.toastr = toastr;
          _this3.fb = fb;
          _this3.spiedTags = ["APP-DOCUMENTACAO-TEMPLATE"];
          _this3.sectionOffset = 0;
          _this3.currentSection = "painelInputs";
          _this3.navItems = [{
            id: "painelInputs",
            name: "Inputs e Text-area"
          }, {
            id: "painelSelect",
            name: "Select"
          }, {
            id: "painelCheckbox",
            name: "Checkbox"
          }, {
            id: "painelRadio",
            name: "Radio"
          }, {
            id: "painelRange",
            name: "Range"
          }, {
            id: "painelValidacao",
            name: "Validação"
          }];
          _this3.formValidation = _this3.fb.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]],
            linkedin: [null],
            perfil: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            idade: [50, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.min(18), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.max(70)]]
          });
          _this3.inputExemplo = "<div class=\"form-group\">\n  <label>Nome</label>\n  <input class=\"form-control\">\n</div>\n\n<label>Idade</label>\n<input class=\"form-control mb-3\" type=\"number\">\n\n<label>Observa\xE7\xF5es</label>\n<textarea class=\"form-control\"></textarea>".trim();
          _this3.selectExemplo = "<label>Sexo</label>\n<ng-select class=\"mb-3\">\n  <ng-option>Masculino</ng-option>\n  <ng-option>Feminino</ng-option>\n</ng-select>\n\n<label>Naturalidade</label>\n<select class=\"form-control mb-3\">\n  <option>Brasileiro</option>\n  <option>Estrangeiro</option>\n</select>".trim();
          _this3.checkboxExemplo = "<div class=\"custom-control custom-checkbox mb-3\">\n  <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\n  <label class=\"custom-control-label\" for=\"customCheck1\">Marque esse checkbox</label>\n</div>\n\n<div class=\"custom-control custom-checkbox\">\n  <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck2\" checked>\n  <label class=\"custom-control-label\" for=\"customCheck2\">Desmarque esse checkbox</label>\n</div>".trim();
          _this3.radioExemplo = "<div class=\"custom-control custom-radio mb-3\">\n  <input type=\"radio\" id=\"customRadio1\" name=\"customRadio\" class=\"custom-control-input\">\n  <label class=\"custom-control-label\" for=\"customRadio1\">Ou esse fica marcado</label>\n</div>\n<div class=\"custom-control custom-radio\">\n  <input type=\"radio\" id=\"customRadio2\" name=\"customRadio\" class=\"custom-control-input\">\n  <label class=\"custom-control-label\" for=\"customRadio2\">Ou esse aqui</label>\n</div>".trim();
          _this3.rangeExemplo = "<label for=\"customRange1\">Exemplo</label>\n<input type=\"range\" class=\"custom-range\" id=\"customRange1\">".trim();
          _this3.htmlCodeValidacao = "<form [formGroup]=\"formValidation\">\n  <div class=\"form-group\">\n    <label>E-mail</label>\n    <input class=\"form-control\" type=\"text\" formControlName=\"email\">\n    <p class=\"feedback-msg\">\n      <span *ngIf=\"formValidation.get('email').invalid\">E-mail inv\xE1lido</span>\n    </p>\n  </div>\n\n  <div class=\"form-group\">\n    <label>LinkedIn</label>\n    <input class=\"form-control\" type=\"text\" formControlName=\"linkedin\">\n    <p class=\"feedback-msg\">\n      <span>Campo opcional</span>\n    </p>\n  </div>\n\n  <div class=\"form-group\">\n    <label>Perfil</label>\n    <ng-select formControlName=\"perfil\">\n      <ng-option value=\"\">Selecione...</ng-option>\n      <ng-option value=\"Visitante\">Visitante</ng-option>\n      <ng-option value=\"Desenvolvedor\">Desenvolvedor</ng-option>\n      <ng-option value=\"Gestor\">Gestor</ng-option>\n    </ng-select>\n    <p class=\"feedback-msg\">\n      <span *ngIf=\"formValidation.get('perfil').invalid\">Campo obrigat\xF3rio</span>\n    </p>\n  </div>\n\n  <div class=\"form-group\">\n    <label>Idade</label>\n    <input class=\"custom-range\" type=\"range\" formControlName=\"idade\" min=\"0\" max=\"100\">\n    <p>{{ formValidation.get('idade').value }}</p>\n    <p class=\"feedback-msg\">\n      <span *ngIf=\"formValidation.get('idade').invalid\">Idade inv\xE1lida - deve ser entre 18 e 70</span>\n    </p>\n  </div>\n\n  <button class=\"btn btn-cancel\" (click)=\"formValidation.reset()\">Resetar</button>\n</form>".trim();
          _this3.tsCodeValidacao = "import { Component } from '@angular/core';\nimport { FormBuilder, Validators } from \"@angular/forms\";\n\n@Component({\n    selector: 'app-forms',\n    templateUrl: './forms.component.html',\n    styleUrls: ['./forms.component.scss']\n})\nexport class FormsComponent {\n\n  constructor() {}\n\n  formValidation = this.fb.group({\n    email: [null, [Validators.email]],\n    linkedin: [null],\n    perfil: [null, [Validators.required]],\n    idade: [50, [Validators.min(18), Validators.max(70)]]\n  });\n\n}".trimRight();
          _this3.cssCodeValidacao = ".feedback-msg {\n  height: 1.5rem;\n  color: var(--aux);\n  margin-top: 0.5rem;\n  font-size: 0.9rem;\n}".trimRight();
          _this3.buttonControlExample = "<cx-button-control type=\"checkbox\" value=\"valor_do_checkbox\">\n  Checkbox\n</cx-button-control>\n\n<cx-button-control type=\"radio\" value=\"valor_do_radio\" class=\"ml-3\">\n  Radio\n</cx-button-control>";
          return _this3;
        }

        _createClass(_FormsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _FormsComponent;
      }(_componentes_componentes_interface__WEBPACK_IMPORTED_MODULE_0__.ComponentesInterface);

      _FormsComponent.ɵfac = function FormsComponent_Factory(t) {
        return new (t || _FormsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder));
      };

      _FormsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _FormsComponent,
        selectors: [["ng-component"]],
        viewQuery: function FormsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.scrollElement = _t.first);
          }
        },
        hostBindings: function FormsComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("scroll", function FormsComponent_scroll_HostBindingHandler($event) {
              return ctx.onScroll($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
        decls: 205,
        vars: 48,
        consts: [[1, "titulo"], [1, "mb-5"], ["target", "_blank", "href", "https://getbootstrap.com/docs/4.6/components/forms/", 1, "text-destaque"], ["role", "tablist", 1, "nav", "nav-pills", "tab-caixa"], [1, "nav-item"], ["data-toggle", "tab", "href", "#visaoGeral", "role", "tab", 1, "nav-link", "text-uppercase", "active"], ["data-toggle", "tab", "href", "#exemplos", "role", "tab", 1, "nav-link", "text-uppercase"], [1, "tab-content"], ["id", "visaoGeral", "role", "tabpanel", 1, "tab-pane", "fade", "show", "active"], [1, "row", "no-gutters"], [1, "col-12", "col-xl-9", "pr-2", "mb-5"], ["scrollElement", ""], ["id", "painelInputs", 3, "showCodeButton", "cardTitle"], [1, "descricao"], [1, "conteudo"], [1, "form-group"], [1, "form-control"], ["type", "number", 1, "form-control", "mb-3"], [1, "mt-3"], [3, "highlight", "languages"], ["id", "painelSelect", 3, "showCodeButton", "cardTitle"], ["href", "https://www.npmjs.com/package/@ng-select/ng-select", "target", "_blank", 1, "text-destaque"], [1, "mb-3"], [1, "form-control", "mb-3"], ["id", "painelCheckbox", 3, "showCodeButton", "cardTitle"], [1, "custom-control", "custom-checkbox", "mb-3"], ["type", "checkbox", "id", "customCheck1", 1, "custom-control-input"], ["for", "customCheck1", 1, "custom-control-label"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "customCheck2", "checked", "", 1, "custom-control-input"], ["for", "customCheck2", 1, "custom-control-label"], ["id", "painelRadio", 3, "showCodeButton", "cardTitle"], [1, "custom-control", "custom-radio", "mb-3"], ["type", "radio", "id", "customRadio1", "name", "customRadio", 1, "custom-control-input"], ["for", "customRadio1", 1, "custom-control-label"], [1, "custom-control", "custom-radio"], ["type", "radio", "id", "customRadio2", "name", "customRadio", 1, "custom-control-input"], ["for", "customRadio2", 1, "custom-control-label"], ["id", "painelButtonControl", 3, "showCodeButton", "cardTitle"], ["type", "checkbox", "value", "valor_do_checkbox"], ["type", "radio", "value", "valor_do_radio", 1, "ml-3"], ["id", "painelRange", 3, "showCodeButton", "cardTitle"], ["for", "customRange1"], ["type", "range", "id", "customRange1", 1, "custom-range"], ["id", "painelValidacao", 3, "cardTitle", "codeViewId", "htmlTabId", "htmlCode", "tsTabId", "tsCode", "cssTabId", "cssCode"], [3, "formGroup"], ["type", "text", "formControlName", "email", 1, "form-control"], [1, "feedback-msg"], [4, "ngIf"], ["type", "text", "formControlName", "linkedin", 1, "form-control"], ["formControlName", "perfil"], ["value", ""], ["value", "Visitante"], ["value", "Desenvolvedor"], ["value", "Gestor"], ["type", "range", "formControlName", "idade", "min", "0", "max", "100", 1, "custom-range"], [1, "btn", "btn-cancel", 3, "click"], ["id", "navSection", 1, "d-none", "col-3", "d-xl-flex", "pl-4"], [3, "items", "currentSection"], ["id", "exemplos", "role", "tabpanel", 1, "tab-pane", "fade"], ["id", "painelDisabled", 3, "showCodeButton", "cardTitle"], [1, "row"], [1, "col", "mb-3"], ["type", "text", "disabled", "", 1, "form-control"], [3, "readonly"], ["disabled", "", 1, "form-control"], ["type", "range", "id", "customRange1", "disabled", "", 1, "custom-range"], ["type", "checkbox", "id", "customCheck3", "disabled", "", 1, "custom-control-input"], ["for", "customCheck3", 1, "custom-control-label"], ["type", "radio", "id", "customRadio3", "name", "customRadio", "disabled", "", 1, "custom-control-input"], ["for", "customRadio3", 1, "custom-control-label"], ["type", "radio", "id", "customRadio4", "name", "customRadio", "disabled", "", 1, "custom-control-input"], ["for", "customRadio4", 1, "custom-control-label"]],
        template: function FormsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Forms\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h5", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Os estilos dos campos de formul\xE1rio seguem o padr\xE3o definido pelo ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Bootstrap.");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " As variantes de tamanho, status e layout descritas na documenta\xE7\xE3o do link acima devem ser seguidos sem altera\xE7\xE3o.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " Vis\xE3o Geral ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " Exemplos ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "section", 10, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "app-documentacao-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, " Para campos do tipo \"input\" e \"text-area\" utilizar a classe padr\xE3o \"form-control\" do Bootstrap.");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, " O espa\xE7amento entre campos pode ser implementado de duas maneiras:");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, " - Envolvendo o label e o campo num container com a classe \"form-group\";");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, " - Utilizando a classe auxiliar do Bootstrap \"mb-3\" (espa\xE7amento inferior de 1rem). ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Nome");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Idade");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](39, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Observa\xE7\xF5es");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](42, "textarea", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "pre", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](44, "code", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](45, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "app-documentacao-template", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, " Para campos do tipo \"select\" utilizar por padr\xE3o o componente da biblioteca ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "Ng-Select");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, ", que j\xE1 oferece funcionalidades de filtro, autocomplete e multi-sele\xE7\xE3o.");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](52, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](53, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, " Caso n\xE3o seja poss\xEDvel inserir o componente, utilizar a classe \"form-control\" no elemento \"select\". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "Sexo");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "ng-select", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "ng-option");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "Masculino");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "ng-option");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "Feminino");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "Naturalidade");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "select", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, "Brasileiro");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69, "Estrangeiro");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "pre", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](71, "code", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](72, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "app-documentacao-template", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75, " O Checkbox deve seguir o estilo \"custom\". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](78, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "label", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80, "Marque esse checkbox");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](82, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "label", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84, "Desmarque esse checkbox");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "pre", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](86, "code", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](87, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "app-documentacao-template", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](90, " O Radio, assim como o checkbox, tamb\xE9m deve seguir o estilo \"custom\". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](93, "input", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "label", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](95, "Ou esse fica marcado");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](97, "input", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "label", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](99, "Ou esse aqui");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "pre", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](101, "code", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](102, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](103, "app-documentacao-template", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](104, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](105, " O componente 'cx-button-control' se comporta como radio ou checkbox, conforme o valor passado no atributo 'type'. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](107, "cx-button-control", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](108, " Checkbox ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "cx-button-control", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](110, " Radio ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "pre", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](112, "code", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](113, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](114, "app-documentacao-template", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](115, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](116, " Para o elemento Range utilizar a classe \"custom-range\". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](117, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](118, "label", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](119, "Exemplo");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](120, "input", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](121, "pre", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](122, "code", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](123, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](124, "app-documentacao-template", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](125, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](126, " As classes do Angular Forms (ng-dirty, ng-valid, ng-invalid) alteram o visual dos campos conforme seu estado de valida\xE7\xE3o. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](127, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](128, "form", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](129, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](130, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](131, "E-mail");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](132, "input", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](133, "p", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](134, FormsComponent_span_134_Template, 2, 0, "span", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](135, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](136, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](137, "LinkedIn");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](138, "input", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](139, "p", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](140, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](141, "Campo opcional");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](142, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](143, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](144, "Perfil");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](145, "ng-select", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](146, "ng-option", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](147, "Selecione...");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](148, "ng-option", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](149, "Visitante");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](150, "ng-option", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](151, "Desenvolvedor");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](152, "ng-option", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](153, "Gestor");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](154, "p", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](155, FormsComponent_span_155_Template, 2, 0, "span", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](156, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](157, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](158, "Idade");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](159, "input", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](160, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](161);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](162, "p", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](163, FormsComponent_span_163_Template, 2, 0, "span", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](164, "button", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FormsComponent_Template_button_click_164_listener() {
              return ctx.formValidation.reset();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](165, "Resetar");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](166, "nav", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](167, "app-code-fixed-nav", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](168, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](169, "app-documentacao-template", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](170, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](171, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](172, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](173, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](174, "Input");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](175, "input", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](176, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](177, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](178, "Select");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](179, "ng-select", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](180, "Select");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](181, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](182, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](183, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](184, "Text Area");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](185, "textarea", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](186, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](187, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](188, "Range");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](189, "input", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](190, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](191, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](192, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](193, "input", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](194, "label", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](195, "Checkbox");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](196, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](197, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](198, "input", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](199, "label", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](200, "Radio");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](201, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](202, "input", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](203, "label", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](204, "Radio 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("showCodeButton", false)("cardTitle", "Inputs e Text-area");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("highlight", ctx.inputExemplo)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](42, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("showCodeButton", false)("cardTitle", "Select");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("highlight", ctx.selectExemplo)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](43, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("showCodeButton", false)("cardTitle", "Checkbox");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("highlight", ctx.checkboxExemplo)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](44, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("showCodeButton", false)("cardTitle", "Radio");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("highlight", ctx.radioExemplo)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](45, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("showCodeButton", false)("cardTitle", "Button Control");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("highlight", ctx.buttonControlExample)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](46, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("showCodeButton", false)("cardTitle", "Range");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("highlight", ctx.rangeExemplo)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](47, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("cardTitle", "Valida\xE7\xE3o")("codeViewId", "formsValidacao")("htmlTabId", "htmlCodeValidacao")("htmlCode", ctx.htmlCodeValidacao)("tsTabId", "tsCodeValidacao")("tsCode", ctx.tsCodeValidacao)("cssTabId", "cssCodeValidacao")("cssCode", ctx.cssCodeValidacao);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.formValidation);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.formValidation.get("email").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.formValidation.get("perfil").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.formValidation.get("idade").value);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.formValidation.get("idade").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", ctx.navItems)("currentSection", ctx.currentSection);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("showCodeButton", false)("cardTitle", "Desabilitados");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("readonly", true);
          }
        },
        directives: [_shared_components_documentacao_template_documentacao_template_component__WEBPACK_IMPORTED_MODULE_1__.DocumentacaoTemplateComponent, ngx_highlightjs__WEBPACK_IMPORTED_MODULE_7__.Highlight, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["ɵr"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _guia_caixa_components_button_control_button_control_button_control_component__WEBPACK_IMPORTED_MODULE_2__.ButtonControlComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RangeValueAccessor, _shared_components_code_fixed_nav_code_fixed_nav_component__WEBPACK_IMPORTED_MODULE_3__.CodeFixedNavComponent],
        styles: [".feedback-msg[_ngcontent-%COMP%] {\n  height: 1.5rem;\n  color: var(--cxAux);\n  margin-top: 0.5rem;\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm1zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUNIIiwiZmlsZSI6ImZvcm1zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZlZWRiYWNrLW1zZyB7XHJcbiAgIGhlaWdodDogMS41cmVtO1xyXG4gICBjb2xvcjogdmFyKC0tY3hBdXgpO1xyXG4gICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbiAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59Il19 */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_demonstracao_componentes-basicos_componentes-basicos_module_ts-es5.js.map