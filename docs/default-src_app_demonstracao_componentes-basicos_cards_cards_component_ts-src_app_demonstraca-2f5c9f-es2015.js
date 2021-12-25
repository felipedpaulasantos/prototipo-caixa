"use strict";
(self["webpackChunkprototipo_caixa"] = self["webpackChunkprototipo_caixa"] || []).push([["default-src_app_demonstracao_componentes-basicos_cards_cards_component_ts-src_app_demonstraca-2f5c9f"],{

/***/ 94081:
/*!***************************************************************************!*\
  !*** ./src/app/demonstracao/componentes-basicos/cards/cards.component.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardsComponent": function() { return /* binding */ CardsComponent; }
/* harmony export */ });
/* harmony import */ var _componentes_componentes_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../componentes/componentes-interface */ 31438);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 83315);
/* harmony import */ var _shared_components_documentacao_template_documentacao_template_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/documentacao-template/documentacao-template.component */ 8990);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-highlightjs */ 24971);
/* harmony import */ var _shared_components_code_fixed_nav_code_fixed_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/code-fixed-nav/code-fixed-nav.component */ 72994);






const _c0 = ["scrollElement"];
const _c1 = function () { return ["html"]; };
class CardsComponent extends _componentes_componentes_interface__WEBPACK_IMPORTED_MODULE_0__.ComponentesInterface {
    constructor(toastr) {
        super(toastr);
        this.toastr = toastr;
        this.spiedTags = ["APP-DOCUMENTACAO-TEMPLATE"];
        this.sectionOffset = 0;
        this.currentSection = "painelCards";
        this.navItems = [
            { id: "painelCards", name: "Padrão" },
            { id: "painelCardsTematicos", name: "Temáticos" },
            { id: "painelCardsEfeito", name: "Com efeito" }
        ];
        this.cardsIntroducao = `<div class="card">
  <div class="card-header">
    <h4 class="subtitulo">Título</h4>
  </div>
  <div class="card-body">
    <h5>Este é um subtítulo</h5>
    <span>Este é o corpo do card</span>
  </div>
  <div class="card-footer">
    <h5>Isso é um rodapé</h5>
  </div>
</div>`.trim();
        this.cardsTematicos = `<div class="row">
  <div class="col-12 col-md-6 my-2">
    <div class="card bg-contraste text-base">
      <div class="card-header">
        <h4 class="subtitulo">Título</h4>
      </div>
      <div class="card-body">
        <h5>Este é um subtítulo</h5>
        <span>Este é o corpo do card</span>
      </div>
      <div class="card-footer">
        <h5>Isso é um rodapé</h5>
      </div>
    </div>
  </div>

  <div class="col my-2">
    <div class="card bg-accent text-base">
      <div class="card-header">
        <h4 class="subtitulo">Título</h4>
      </div>
      <div class="card-body">
        <h5>Este é um subtítulo</h5>
        <span>Este é o corpo do card</span>
      </div>
      <div class="card-footer">
        <h5>Isso é um rodapé</h5>
      </div>
    </div>
  </div>
</div>`.trim();
        this.cardsSombra = `<div class="card card-hover">
  <div class="card-body">
    <span>Este card possui efeito de sombra.</span>
  </div>
</div>`.trim();
        this.cardHome = `<div id="cardHome" class="card card-hover border border-dark">
  <div class="card-body">
    <i class="fa fa-home fa-4x mr-4"></i>
    <h2 class="d-inline font-fam-bold mb-0">HOME</h2>
  </div>
</div>

<style>
  #cardHome {
    max-width: 20rem;
  }
</style>`.trim();
        this.htmlCodeCards = `            <div class="card">
  <div class="card-header">
    <h4 class="subtitulo">Título</h4>
  </div>
  <div class="card-body">
    <h5>Este é um subtítulo</h5>
    <span>Este é o corpo do card</span>
  </div>
  <div class="card-footer">
    <h5>Isso é um rodapé</h5>
  </div>
</div>`.trim();
        this.htmlCodeCardsTematicos = `            <div class="row">
  <div class="col-12 col-md-6 my-2">
    <div class="card bg-grafite text-cinza">
      <div class="card-header">
        <h4 class="subtitulo">Título</h4>
      </div>
      <div class="card-body">
        <h5>Este é um subtítulo</h5>
        <span>Este é o corpo do card</span>
      </div>
      <div class="card-footer">
        <h5>Isso é um rodapé</h5>
      </div>
    </div>
  </div>  <!-- Coluna -->

  <div class="col my-2">
    <div class="card bg-accent text-cinza">
      <div class="card-header">
        <h4 class="subtitulo">Título</h4>
      </div>
      <div class="card-body">
        <h5>Este é um subtítulo</h5>
        <span>Este é o corpo do card</span>
      </div>
      <div class="card-footer">
        <h5>Isso é um rodapé</h5>
      </div>
    </div>
  </div>  <!-- Coluna -->
</div>  <!-- Linha -->`.trim();
        this.htmlCodeCardsEfeito = `        <div class="card card-hover">
  <div class="card-body">
    <span>Este card possui efeito de sombra.</span>
  </div>
</div>`.trim();
        this.htmlCodeCardBotao = `        <div class="row">
  <div class="col-6 col-md-4 mb-3">
    <div class="card card-hover border border-dark">
      <div class="card-body">
        <i class="fa fa-home fa-4x mr-4"></i>
        <h2 class="d-inline font-fam-bold mb-0">HOME</h2>
      </div>
    </div>  <!-- Card -->
  </div>  <!-- Col -->
  <div class="col-6 col-md-4 mb-3">
    <div class="card card-hover border border-primary bg-gradient-ceu text-white">
      <div class="card-body">
        <i class="fa fa-users fa-4x"></i>
      </div>
    </div>  <!-- Card -->
  </div>  <!-- Col -->
  <div class="col-6 col-md-4 mb-3">
    <div class="card card-hover bg-opacity-2 border border-dark-dark">
      <div class="card-body">
        <i class="fa fa-file-archive fa-4x"></i>
      </div>
    </div>  <!-- Card -->
  </div>  <!-- Col -->
</div>  <!-- Row -->`.trim();
        this.cssCodeCardBotao = `.cards-menu .card {
  cursor: pointer;
  margin-right: 2rem;
  border-width: 2px !important;
  border-top-left-radius: 0px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}`.trim();
        this.htmlCodeCardLayout = `<div id="cardDadosProposta" class="card">
  <div class="card-header">
    <h4 class="d-inline-block mr-2 font-fam-bold">Dados da proposta</h4>
    <a class="text-link">0007.1556.0000112-3</a>
  </div>
  <div class="card-body p-0">
    <div class="info-row bg-fundo border-top border-bottom">
      <div class="row">
        <div class="col">
          <h6 class="subtitulo">Código da Reserva</h6>
          1.797
        </div>
        <div class="col">
          <h6 class="subtitulo">Fonte de recurso</h6>
          SBPE
        </div>
      </div>
    </div>  <!-- Info-Row -->
    <div class="info-row border-bottom">
      <div class="row">
        <div class="col">
          <h6 class="subtitulo">Tipo de financiamento</h6>
          143 - CCSBPE - AQUISIÇÃO DE TERRENO E CONSTRUÇÃO - PF -SHF - POS
        </div>
      </div>
    </div>  <!-- Info-Row -->
    <div class="info-row bg-fundo border-bottom">
      <div class="row">
        <div class="col">
          <h6 class="subtitulo">Seguradora</h6>
          CAIXA SEGUROS
        </div>
        <div class="col">
          <h6 class="subtitulo">Apólice</h6>
          61170 - CAIXA SEGUROS - SBPE
        </div>
      </div>
    </div>  <!-- Info-Row -->
  </div>  <!-- Card-body -->
  <div class="card-footer text-center">
    <i class="fa fa-chevron-down mr-3"></i>
    <span>Mais dados da proposta</span>
  </div>
</div>`.trim();
        this.cssCodeCardLayout = `#cardDadosProposta {
  width: 800px;
}
.info-row {
  padding: 1.2rem;
}`.trim();
    }
}
CardsComponent.ɵfac = function CardsComponent_Factory(t) { return new (t || CardsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService)); };
CardsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CardsComponent, selectors: [["app-cards"]], viewQuery: function CardsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.scrollElement = _t.first);
    } }, hostBindings: function CardsComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("scroll", function CardsComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 147, vars: 41, consts: [[1, "titulo"], ["role", "tablist", 1, "nav", "nav-pills", "tab-caixa"], [1, "nav-item"], ["data-toggle", "tab", "href", "#visaoGeral", "role", "tab", 1, "nav-link", "text-uppercase", "active"], ["data-toggle", "tab", "href", "#exemplos", "role", "tab", 1, "nav-link", "text-uppercase"], [1, "tab-content"], ["id", "visaoGeral", "role", "tabpanel", 1, "tab-pane", "fade", "show", "active"], [1, "row", "no-gutters"], [1, "col-12", "col-xl-9", "pr-2", "mb-5"], ["scrollElement", ""], ["id", "painelCards", 3, "cardTitle", "codeViewId", "htmlTabId", "htmlCode"], [1, "descricao"], ["target", "_blank", "href", "https://getbootstrap.com/docs/4.6/components/card/", 1, "text-destaque"], [1, "conteudo"], [1, "card"], [1, "card-header"], [1, "subtitulo"], [1, "card-body"], [1, "card-footer"], [1, "mt-3"], [3, "highlight", "languages"], ["id", "painelCardsTematicos", 3, "showCodeButton", "cardTitle", "codeViewId", "htmlTabId", "htmlCode"], [1, "citation-highlight"], [1, "row"], [1, "col-12", "col-md-6", "my-2"], [1, "card", "bg-contraste", "text-base"], [1, "col", "my-2"], [1, "card", "bg-accent", "text-base"], ["id", "painelCardsEfeito", 3, "showCodeButton", "cardTitle", "codeViewId", "htmlTabId", "htmlCode"], [1, "card", "card-hover"], ["id", "navSection", 1, "d-none", "col-3", "d-xl-flex", "pl-4"], [3, "items", "currentSection"], ["id", "exemplos", "role", "tabpanel", 1, "tab-pane", "fade"], [3, "showCodeButton", "cardTitle", "codeViewId", "htmlTabId", "htmlCode", "cssTabId", "cssCode"], ["id", "cardHome", 1, "card", "card-hover", "border", "border-dark"], [1, "fa", "fa-home", "fa-4x", "mr-4"], [1, "d-inline", "font-fam-bold", "mb-0"], [3, "cardTitle", "codeViewId", "htmlTabId", "htmlCode", "cssTabId", "cssCode"], ["id", "cardDadosProposta", 1, "card"], [1, "d-inline-block", "mr-2", "font-fam-bold"], [1, "text-link"], [1, "card-body", "p-0"], [1, "info-row", "bg-fundo", "border-top", "border-bottom"], [1, "col"], [1, "info-row", "border-bottom"], [1, "info-row", "bg-fundo", "border-bottom"], [1, "card-footer", "text-center"], [1, "fa", "fa-chevron-down", "mr-3"]], template: function CardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Cards\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Vis\u00E3o Geral ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Utilizar o template definido pelo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Bootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " Observa\u00E7\u00E3o: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "n\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, " utilizar a classe \"panel\", que foi substitu\u00EDda pelo \"card\" na vers\u00E3o 4 do framework. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "T\u00EDtulo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Este \u00E9 um subt\u00EDtulo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Este \u00E9 o corpo do card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Isso \u00E9 um rodap\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "pre", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "code", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "app-documentacao-template", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, " Qualquer classe tem\u00E1tica pode ser utilizada nos cards, com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "bg-(tema)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, " e ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "text-(tema)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "T\u00EDtulo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "Este \u00E9 um subt\u00EDtulo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "Este \u00E9 o corpo do card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "Isso \u00E9 um rodap\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "T\u00EDtulo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "Este \u00E9 um subt\u00EDtulo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "Este \u00E9 o corpo do card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "Isso \u00E9 um rodap\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "pre", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](80, "code", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](81, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "app-documentacao-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, " Um efeito de sombra ao passar o mouse pode ser adicionado com a classe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, "card-hover");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](92, "Este card possui efeito de sombra.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "pre", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](94, "code", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "nav", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](96, "app-code-fixed-nav", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "app-documentacao-template", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](102, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "h2", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](104, "HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "pre", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](106, "code", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](107, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "app-documentacao-template", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "h4", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](113, "Dados da proposta");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](115, "0007.1556.0000112-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "h6", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](121, "C\u00F3digo da Reserva");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](122, " 1.797 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "h6", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](125, "Fonte de recurso");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](126, " SBPE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](130, "h6", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](131, "Tipo de financiamento");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](132, " 143 - CCSBPE - AQUISI\u00C7\u00C3O DE TERRENO E CONSTRU\u00C7\u00C3O - PF -SHF - POS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](136, "h6", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](137, "Seguradora");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](138, " CAIXA SEGUROS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](139, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](140, "h6", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](141, "Ap\u00F3lice");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](142, " 61170 - CAIXA SEGUROS - SBPE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](143, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](144, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](145, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](146, "Mais dados da proposta");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("cardTitle", "Cards")("codeViewId", "viewCards")("htmlTabId", "htmlCodeCards")("htmlCode", ctx.htmlCodeCards);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("highlight", ctx.cardsIntroducao)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](37, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("showCodeButton", false)("cardTitle", "Cards tem\u00E1ticos")("codeViewId", "viewCardsTematicos")("htmlTabId", "htmlCodeCardsTematicos")("htmlCode", ctx.htmlCodeCardsTematicos);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("highlight", ctx.cardsTematicos)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](38, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("showCodeButton", false)("cardTitle", "Cards com efeito")("codeViewId", "viewCardsEfeito")("htmlTabId", "htmlCodeCardsEfeito")("htmlCode", ctx.htmlCodeCardsEfeito);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("highlight", ctx.cardsSombra)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](39, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", ctx.navItems)("currentSection", ctx.currentSection);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("showCodeButton", false)("cardTitle", "Cards customizados")("codeViewId", "viewCardMenu")("htmlTabId", "htmlCodeCardBotao")("htmlCode", ctx.htmlCodeCardBotao)("cssTabId", "cssCodeCardBotao")("cssCode", ctx.cssCodeCardBotao);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("highlight", ctx.cardHome)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](40, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("cardTitle", "Layouts complexos")("codeViewId", "viewCardLayout")("htmlTabId", "htmlCodeCardLayout")("htmlCode", ctx.htmlCodeCardLayout)("cssTabId", "cssCodeCardLayout")("cssCode", ctx.cssCodeCardLayout);
    } }, directives: [_shared_components_documentacao_template_documentacao_template_component__WEBPACK_IMPORTED_MODULE_1__.DocumentacaoTemplateComponent, ngx_highlightjs__WEBPACK_IMPORTED_MODULE_5__.Highlight, _shared_components_code_fixed_nav_code_fixed_nav_component__WEBPACK_IMPORTED_MODULE_2__.CodeFixedNavComponent], styles: [".img-view[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 100px;\n  display: flex;\n  margin: auto;\n}\n\n.cards-menu[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-right: 2rem;\n  border-width: 2px !important;\n  border-top-left-radius: 0px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 0px;\n  border-bottom-right-radius: 0px;\n}\n\n#cardDadosProposta[_ngcontent-%COMP%] {\n  width: 800px;\n}\n\n.bg-fade[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.01);\n}\n\n.info-row[_ngcontent-%COMP%] {\n  padding: 1.2rem;\n}\n\n#cardHome[_ngcontent-%COMP%] {\n  max-width: 20rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUNEOztBQUNBO0VBQ0MsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtBQUVEOztBQUFBO0VBQ0MsWUFBQTtBQUdEOztBQURBO0VBQ0MscUNBQUE7QUFJRDs7QUFGQTtFQUNDLGVBQUE7QUFLRDs7QUFGQTtFQUNDLGdCQUFBO0FBS0QiLCJmaWxlIjoiY2FyZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLXZpZXcge1xyXG5cdHdpZHRoOiAxNTBweDtcclxuXHRoZWlnaHQ6IDEwMHB4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0bWFyZ2luOiBhdXRvO1xyXG59XHJcbi5jYXJkcy1tZW51IC5jYXJkIHtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0bWFyZ2luLXJpZ2h0OiAycmVtO1xyXG5cdGJvcmRlci13aWR0aDogMnB4ICFpbXBvcnRhbnQ7XHJcblx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xyXG5cdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG5cdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcclxuXHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xyXG59XHJcbiNjYXJkRGFkb3NQcm9wb3N0YSB7XHJcblx0d2lkdGg6IDgwMHB4O1xyXG59XHJcbi5iZy1mYWRlIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogYmxhY2ssICRhbHBoYTogMC4wMSk7XHJcbn1cclxuLmluZm8tcm93IHtcclxuXHRwYWRkaW5nOiAxLjJyZW07XHJcbn1cclxuXHJcbiNjYXJkSG9tZSB7XHJcblx0bWF4LXdpZHRoOiAyMHJlbTtcclxufSJdfQ== */"] });


/***/ }),

/***/ 12861:
/*!***********************************************************************************!*\
  !*** ./src/app/demonstracao/componentes-basicos/mensagens/mensagens.component.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MensagensComponent": function() { return /* binding */ MensagensComponent; }
/* harmony export */ });
/* harmony import */ var _componentes_componentes_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../componentes/componentes-interface */ 31438);
/* harmony import */ var src_app_guia_caixa_components_modal_modal_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/guia-caixa/components/modal/modal-options */ 58161);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 83315);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ 55314);
/* harmony import */ var src_app_guia_caixa_services_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/guia-caixa/services/modal.service */ 79556);
/* harmony import */ var _shared_components_documentacao_template_documentacao_template_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/documentacao-template/documentacao-template.component */ 8990);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ 36868);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _shared_components_code_fixed_nav_code_fixed_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/code-fixed-nav/code-fixed-nav.component */ 72994);











const _c0 = ["scrollElement"];
function MensagensComponent_ng_option_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tamanho_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", tamanho_r5.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", tamanho_r5.key, " ");
} }
class MensagensComponent extends _componentes_componentes_interface__WEBPACK_IMPORTED_MODULE_0__.ComponentesInterface {
    constructor(toastr, spinner, modalService) {
        super(toastr);
        this.toastr = toastr;
        this.spinner = spinner;
        this.modalService = modalService;
        this.modalSize = src_app_guia_caixa_components_modal_modal_options__WEBPACK_IMPORTED_MODULE_1__.ModalSize;
        this.spiedTags = ["APP-DOCUMENTACAO-TEMPLATE"];
        this.sectionOffset = 0;
        this.currentSection = "painelMensagens";
        this.navItems = [
            { id: "painelMensagens", name: "Notificações" },
            { id: "painelModal", name: "Modais" },
            { id: "painelSpinner", name: "Carregamento" }
        ];
        this.htmlCodeMensagens = `        <button class="btn btn-success" (click)="exibirSucesso()">
  Sucesso!
</button> &nbsp;

<button class="btn btn-danger" (click)="exibirErro()">
  Erro!
</button> &nbsp;

<button class="btn btn-alerta" (click)="exibirAlerta()">
  Alerta!
</button> &nbsp;

<button class="btn btn-info" (click)="exibirInfo()">
  Informação!
</button> &nbsp;`.trim();
        this.tsCodeMensagens = `  import { Component } from '@angular/core';
  import { ToastrService } from 'ngx-toastr';

  @Component({
      selector: 'app-mensagens',
      templateUrl: './mensagens.component.html',
      styleUrls: ['./mensagens.component.scss']
  })
  export class MensagensComponent {

    constructor(
      private toastr: ToastrService
    ) {}

    exibirSucesso() {
      this.toastr.success('Sucesso!');
    }

    exibirErro() {
      this.toastr.error('Ocorreu um erro!', 'Erro!');
    }

    exibirAlerta() {
      this.toastr.warning('Alerta!', null, { positionClass: 'toast-top-right', progressBar: false });
    }

    exibirInfo() {
      this.toastr.info('Informação!', 'Importante!', { positionClass: 'toast-bottom-right', progressBar: false });
    }
  }
  `.trimRight();
        this.htmlCodeSpinner = `        <button class="btn btn-outline-dark" (click)="exibirSpinner()">
  Mostrar tela de carregamento
</button>`.trim();
        this.tsCodeSpinner = `  import { Component } from '@angular/core';
  import { NgxSpinnerService } from 'ngx-spinner';

  @Component({
      selector: 'app-mensagens',
      templateUrl: './mensagens.component.html',
      styleUrls: ['./mensagens.component.scss']
  })
  export class MensagensComponent {

    constructor(
      private spinner: NgxSpinnerService
    ) {}

    exibirSpinner() {
      this.spinner.show();
      setTimeout(() => {
        this.spinner.hide();
      }, 3000);
    }
  }
  `.trimRight();
        this.htmlCodeModal = `        <button class="btn btn-outline-dark" (click)="exibirModal()">
  <i class="fa fa-lg fa-external-link-alt mr-2"></i>
  Mostrar modal
</button>`.trim();
        this.tsCodeModal = `  import { Component } from '@angular/core';
  import { ModalService } from 'src/app/shared/services/modal.service';
  import { ModalSize } from 'src/app/shared/components/modal/modal-options';

  @Component({
      selector: 'app-mensagens',
      templateUrl: './mensagens.component.html',
      styleUrls: ['./mensagens.component.scss']
  })
  export class MensagensComponent {

    constructor(
      private modalService: ModalService
    ) {}

    exibirModal() {
      this.modalService.show({
        showCancelar: true,
        classTitulo: "",
        titulo: "Título do modal",
        mensagem: "Mensagem do modal"
      });
    }
  }
  `.trimRight();
        this.tamanhoModal = src_app_guia_caixa_components_modal_modal_options__WEBPACK_IMPORTED_MODULE_1__.ModalSize.NORMAL;
    }
    ngOnInit() {
    }
    exibirSucesso() {
        this.toastr.success("Sucesso!", "", { disableTimeOut: true });
    }
    exibirErro() {
        this.toastr.error("Ocorreu um erro!", "Erro!", { disableTimeOut: true });
    }
    exibirAlerta() {
        this.toastr.warning("Alerta!", null, { disableTimeOut: true });
        /*     this.toastr.warning("Alerta!", null, { positionClass: "toast-top-right", progressBar: false, disableTimeOut: true }); */
    }
    exibirInfo() {
        this.toastr.info("Informação!", "Importante!", { disableTimeOut: true });
    }
    exibirSpinner() {
        this.spinner.show("global");
        setTimeout(() => {
            this.spinner.hide("global");
        }, 3000);
    }
    showTesteModal(titulo, mensagem, tamanho, centro) {
        this.modalService.show({
            showCancelar: true,
            classTitulo: "",
            titulo: titulo || "Título do modal",
            mensagem: mensagem || "Mensagem do modal",
            centralizado: centro,
            tamanho: tamanho
        });
    }
    exibirModal() {
        this.modalService.show({
            showCancelar: true,
            titulo: "Título do modal",
            mensagem: "Mensagem do modal",
            btOkTexto: "OK",
            centralizado: true
        });
    }
}
MensagensComponent.ɵfac = function MensagensComponent_Factory(t) { return new (t || MensagensComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_guia_caixa_services_modal_service__WEBPACK_IMPORTED_MODULE_2__.ModalService)); };
MensagensComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: MensagensComponent, selectors: [["app-mensagens"]], viewQuery: function MensagensComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.scrollElement = _t.first);
    } }, hostBindings: function MensagensComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("scroll", function MensagensComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveWindow"]);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 192, vars: 36, consts: [[1, "titulo"], ["role", "tablist", 1, "nav", "nav-pills", "text-uppercase", "tab-caixa"], [1, "nav-item"], ["data-toggle", "tab", "href", "#visaoGeral", "role", "tab", 1, "nav-link", "active"], ["data-toggle", "tab", "href", "#api", "role", "tab", 1, "nav-link"], [1, "tab-content"], ["id", "visaoGeral", "role", "tabpanel", 1, "tab-pane", "fade", "show", "active"], [1, "row", "no-gutters"], [1, "col-12", "col-xl-9", "pr-2", "mb-5"], ["scrollElement", ""], ["id", "painelMensagens", 3, "cardTitle", "codeViewId", "htmlTabId", "htmlCode", "tsTabId", "tsCode"], [1, "descricao"], [1, "citation-highlight"], ["href", "https://www.npmjs.com/package/ngx-toastr", "target", "_blank", 1, "text-link"], [1, "conteudo"], [1, "btn", "btn-success", 3, "click"], [1, "btn", "btn-danger", 3, "click"], [1, "btn", "btn-warning", 3, "click"], [1, "btn", "btn-info", 3, "click"], ["id", "painelModal", 3, "showCodeButton", "cardTitle", "codeViewId", "htmlTabId", "htmlCode", "tsTabId", "tsCode"], ["id", "painelModal"], [1, "row"], [1, "col-8"], [1, "col-6"], ["value", "T\u00EDtulo do Modal", 1, "form-control"], ["modalTitulo", ""], [1, "col-3"], [3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-3", "d-flex", "align-items-center"], [1, "custom-control", "custom-switch"], ["id", "modalCentro", "type", "checkbox", 1, "custom-control-input"], ["modalCentralizado", ""], ["for", "modalCentro", 1, "custom-control-label"], [1, "col", "my-3"], ["rows", "3", 1, "form-control", 3, "innerHTML"], ["modalMensagem", ""], [1, "btn", "btn-aux", "mt-3", 3, "click"], [1, "fa", "fa-lg", "fa-external-link-alt", "mr-2"], ["id", "painelSpinner", 3, "cardTitle", "codeViewId", "htmlTabId", "htmlCode", "tsTabId", "tsCode"], ["href", "https://www.npmjs.com/package/ngx-spinner", "target", "_blank", 1, "text-link"], [1, "btn", "btn-aux", 3, "click"], ["id", "navSection", 1, "d-none", "col-3", "d-xl-flex", "pl-4"], [3, "items", "currentSection"], ["id", "api", "role", "tabpanel", 1, "tab-pane", "fade"], [1, "card"], [1, "card-body"], [1, "header-subtitulo-caixa"], [1, "table-responsive"], [1, "table", "table-bordered", "table-striped"], [1, "bg-cinza"], [3, "value"]], template: function MensagensComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Mensagens (Em desenvolvimento)\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " Vis\u00E3o Geral ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " API ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "section", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "app-documentacao-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, " As notifica\u00E7\u00F5es que n\u00E3o demandam intera\u00E7\u00E3o do usu\u00E1rio devem ser apresentadas no formato \"toast\". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, " A chamada \u00E9 feita pelo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Toastr Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, ", da biblioteca ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Ngx-Toastr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MensagensComponent_Template_button_click_28_listener() { return ctx.exibirSucesso(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, " Sucesso! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MensagensComponent_Template_button_click_31_listener() { return ctx.exibirErro(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, " Erro! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MensagensComponent_Template_button_click_34_listener() { return ctx.exibirAlerta(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, " Alerta! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MensagensComponent_Template_button_click_37_listener() { return ctx.exibirInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, " Informa\u00E7\u00E3o! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "app-documentacao-template", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, " Quando houver a necessidade de intera\u00E7\u00E3o do usu\u00E1rio com o conte\u00FAdo apresentado, deve-se utilizar um modal. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, " Pode-se exibir pelo servi\u00E7o ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "ModalService");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, ", com v\u00E1rias op\u00E7\u00F5es de customiza\u00E7\u00E3o. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "T\u00EDtulo");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](57, "input", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61, "Tamanho");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "ng-select", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MensagensComponent_Template_ng_select_ngModelChange_62_listener($event) { return ctx.tamanhoModal = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](63, MensagensComponent_ng_option_63_Template, 2, 2, "ng-option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](64, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](67, "input", 31, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70, "Centralizado");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73, "Mensagem");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](74, "textarea", 35, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MensagensComponent_Template_button_click_76_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](58); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](75); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](68); return ctx.showTesteModal(_r1.value, _r4.value, ctx.tamanhoModal, _r3.checked); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](77, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](78, " Mostrar modal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](79, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "app-documentacao-template", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](82, " O \"spinner\" de carregamento pode ser chamado pelo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](84, "NgxSpinnerService");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](85, ", da biblioteca ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](87, "Ngx Spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](88, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MensagensComponent_Template_button_click_90_listener() { return ctx.exibirSpinner(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](91, " Mostrar tela de carregamento ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "nav", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](93, "app-code-fixed-nav", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](98, "h5", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](99, "Notifica\u00E7\u00F5es (Toastr)");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](100, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](101, "Biblioteca ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](102, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](103, "Ngx-Toastr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](104, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](105, "No m\u00F3dulo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](106, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](108, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](109, "No componente:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](110, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](111);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](112, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](113, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](114, "h5", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](115, "Spinner (NgxSpinner)");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](116, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](117, "Biblioteca ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](118, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](119, "NgxSpinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](120, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](121, "No AppModule:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](122, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](123);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](124, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](125, "No AppComponent (.ts):");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](126, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](127);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](128, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](129, "No AppComponent (.html):");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](130, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](131, "<cx-spinner [fullscreen]=true></cx-spinner>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](132, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](133, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](134, "h5", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](135, "Modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](136, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](137, "No AppComponent (.html):");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](138, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](139, "<cx-modal></cx-modal>");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](140, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](141, "No componente:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](142, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](143);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](144, "h6", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](145, "M\u00E9todos");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](146, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](147, "table", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](148, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](149, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](150, "td", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](151, "show()");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](152, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](153, " Exibir o modal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](154, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](155, "td", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](156, "Par\u00E2metros");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](157, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](158, " modalOptions?: ModalOptions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](159, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](160, "table", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](161, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](162, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](163, "td", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](164, "ModalOptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](165, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](166, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](167, " titulo: string");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](168, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](169, " mensagem: string");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](170, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](171, " btOkTexto: string");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](172, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](173, " btCancelarTexto: string");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](174, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](175, " showCancelar: boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](176, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](177, " classTitulo: string");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](178, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](179, " btnOkClass: string");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](180, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](181, " btnCancelarClass: string");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](182, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](183, " modalBodyClass: string");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](184, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](185, " modalHeaderClass: string");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](186, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](187, " modalFooterClass: string");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](188, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](189, " centralizado: boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](190, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](191, " tamanho: ModalSize ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("cardTitle", "Notifica\u00E7\u00F5es")("codeViewId", "viewMensagens")("htmlTabId", "htmlCodeMensagens")("htmlCode", ctx.htmlCodeMensagens)("tsTabId", "tsCodeMensagens")("tsCode", ctx.tsCodeMensagens);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("showCodeButton", false)("cardTitle", "Modal")("codeViewId", "viewModal")("htmlTabId", "htmlCodeModal")("htmlCode", ctx.htmlCodeModal)("tsTabId", "tsCodeModal")("tsCode", ctx.tsCodeModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.tamanhoModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](64, 34, ctx.modalSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", "Mensagem do modal", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("cardTitle", "Spinner (Tela de carregamento)")("codeViewId", "viewSpinner")("htmlTabId", "htmlCodeSpinner")("htmlCode", ctx.htmlCodeSpinner)("tsTabId", "tsCodeSpinner")("tsCode", ctx.tsCodeSpinner);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx.navItems)("currentSection", ctx.currentSection);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("import ", "{", " ToastrModule  ", "}", " from 'ngx-toastr';");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("import ", "{", " ToastrService ", "}", " from 'ngx-toastr';");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("import ", "{", " NgxSpinnerModule  ", "}", " from 'ngx-toastr';");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("import ", "{", " NgxSpinnerService ", "}", " from 'ngx-spinner';");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("import ", "{", " ModalService ", "}", " from 'src/app/guia-caixa/services/modal.service';");
    } }, directives: [_shared_components_documentacao_template_documentacao_template_component__WEBPACK_IMPORTED_MODULE_3__.DocumentacaoTemplateComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _shared_components_code_fixed_nav_code_fixed_nav_component__WEBPACK_IMPORTED_MODULE_4__.CodeFixedNavComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["ɵr"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.KeyValuePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW5zYWdlbnMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ })

}]);
//# sourceMappingURL=default-src_app_demonstracao_componentes-basicos_cards_cards_component_ts-src_app_demonstraca-2f5c9f-es2015.js.map