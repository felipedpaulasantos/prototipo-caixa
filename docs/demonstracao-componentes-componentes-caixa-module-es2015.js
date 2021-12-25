(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demonstracao-componentes-componentes-caixa-module"],{

/***/ "2RtK":
/*!***********************************************************************************************!*\
  !*** ./src/app/demonstracao/componentes/tabber-demonstracao/tabber-demonstracao.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: TabberDemonstracaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabberDemonstracaoComponent", function() { return TabberDemonstracaoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_guia_caixa_components_stepper_tabber_component_tabber_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/guia-caixa/components/stepper/tabber-component/tabber-item */ "R6nX");
/* harmony import */ var _componentes_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../componentes-interface */ "pRMn");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-highlightjs */ "dJsq");
/* harmony import */ var _shared_components_documentacao_template_documentacao_template_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/documentacao-template/documentacao-template.component */ "r5ma");
/* harmony import */ var _guia_caixa_components_stepper_tabber_component_tabber_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../guia-caixa/components/stepper/tabber-component/tabber.component */ "ZFIN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _shared_components_code_fixed_nav_code_fixed_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/code-fixed-nav/code-fixed-nav.component */ "j1XF");
/* harmony import */ var _guia_caixa_components_select_caixa_select_caixa_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../guia-caixa/components/select-caixa/select-caixa.component */ "1sbq");
/* harmony import */ var _guia_caixa_components_select_caixa_select_caixa_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../guia-caixa/components/select-caixa/select-caixa.directive */ "IQkg");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _guia_caixa_components_stepper_stepper_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../guia-caixa/components/stepper/stepper-directive */ "IJq/");














const _c0 = ["scrollElement"];
function TabberDemonstracaoComponent_ng_container_48_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const aba_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](aba_r8.name);
} }
function TabberDemonstracaoComponent_ng_container_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TabberDemonstracaoComponent_ng_container_48_div_1_Template, 3, 1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function TabberDemonstracaoComponent_ng_container_71_div_1_h4_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Conte\u00FAdo sem valida\u00E7\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TabberDemonstracaoComponent_ng_container_71_div_1_h4_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Conte\u00FAdo OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TabberDemonstracaoComponent_ng_container_71_div_1_h4_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Conte\u00FAdo com erro n\u00E3o impeditivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TabberDemonstracaoComponent_ng_container_71_div_1_h4_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Conte\u00FAdo com erro impeditivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TabberDemonstracaoComponent_ng_container_71_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TabberDemonstracaoComponent_ng_container_71_div_1_h4_3_Template, 2, 0, "h4", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TabberDemonstracaoComponent_ng_container_71_div_1_h4_4_Template, 2, 0, "h4", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TabberDemonstracaoComponent_ng_container_71_div_1_h4_5_Template, 2, 0, "h4", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TabberDemonstracaoComponent_ng_container_71_div_1_h4_6_Template, 2, 0, "h4", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const aba_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](aba_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !aba_r11.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", aba_r11.state === ctx_r12.tabberState.SUCCESS);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", aba_r11.state === ctx_r12.tabberState.WARNING);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", aba_r11.state === "error");
} }
function TabberDemonstracaoComponent_ng_container_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TabberDemonstracaoComponent_ng_container_71_div_1_Template, 7, 5, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function TabberDemonstracaoComponent_ng_container_205_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const tab_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", tab_r18.name, "!");
} }
function TabberDemonstracaoComponent_ng_container_205_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TabberDemonstracaoComponent_ng_container_205_ng_container_1_Template, 3, 1, "ng-container", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
const _c1 = function () { return ["html"]; };
const _c2 = function () { return ["ts"]; };
class TabberDemonstracaoComponent extends _componentes_interface__WEBPACK_IMPORTED_MODULE_2__["ComponentesInterface"] {
    constructor(toastr) {
        super(toastr);
        this.toastr = toastr;
        this.sectionOffset = 0;
        this.spiedTags = ["APP-DOCUMENTACAO-TEMPLATE"];
        this.currentSection = "painelTabber";
        this.stylesExample = "styles='{ height: '300px'; }'";
        this.codeDescricao = `<cx-tabber [tabs]="abas"></cx-tabber>`.trim();
        this.codeTsDescricao = `abas: TabberItem[] = [
  { name: "Home", icon: "fa fa-home" },
  { name: "Componentes", icon: "fa fa-toolbox" },
  { name: "Tipografia", icon: "fa fa-font" },
  { name: "Cores", icon: "fa fa-palette" },
  { name: "Configurações", icon: "fa fa-wrench" },
  { name: "Páginas", icon: "fa fa-newspaper" }
];`.trim();
        this.htmlCodeTabber = `<cx-tabber [tabs]="abas" #tabberExemplo>
  <ng-container *ngFor="let aba of abas">
     <div *cxStepper>
        <h2 class="text-center">{{ aba.name }}</h2>
     </div>
  </ng-container>
</cx-tabber>

<button [disabled]="tabberExemplo.currentTab == 0"
(click)="tabberExemplo.first()" class="btn btn-aux mx-2">
  Primeiro
</button>

<button [disabled]="tabberExemplo.currentTab == 0"
(click)="tabberExemplo.previous()" class="btn btn-cancel mx-2">
  Voltar
</button>

<button [disabled]="tabberExemplo.currentTab == abas.length - 1"
(click)="tabberExemplo.next()" class="btn btn-accent mx-2">
  Avançar
</button>

<button [disabled]="tabberExemplo.currentTab == abas.length - 1"
(click)="tabberExemplo.last()" class="btn btn-aux mx-2">
   Último
</button>`.trim();
        this.tsCodeTabber = `  import { Component } from '@angular/core';

@Component({
    selector: 'app-stepper',
    templateUrl: './stepper.component.html',
    styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {

  constructor() {}

  abas: TabberItem[] = [
    { name: "Home", icon: "fa fa-home" },
    { name: "Componentes", icon: "fa fa-toolbox" },
    { name: "Tipografia", icon: "fa fa-font" },
    { name: "Cores", icon: "fa fa-palette" },
    { name: "Configurações", icon: "fa fa-wrench" },
    { name: "Páginas", icon: "fa fa-newspaper" }
  ];
  abaAtual = 0;

}
  `.trimRight();
        this.htmlCodeTabberState = `<cx-tabber [tabs]="abasComEstado" #tabberExemploState>
  <ng-container *ngFor="let aba of abasComEstado">
    <div *cxStepper class="text-center">
      <h2>{{ aba.name }}</h2>
      <h4 *ngIf="!aba.state">Conteúdo sem validação</h4>
      <h4 *ngIf="aba.state === tabberState.SUCCESS">Conteúdo OK</h4>
      <h4 *ngIf="aba.state === tabberState.WARNING">Conteúdo com erro não impeditivo</h4>
      <h4 *ngIf="aba.state === 'error'">Conteúdo com erro impeditivo</h4>
    </div>
  </ng-container>
</cx-tabber>

<button [disabled]="tabberExemploState.currentTab == 0" (click)="tabberExemploState.first()"
  class="btn btn-aux mt-3 mx-2">
  Primeiro
</button>

<button [disabled]="tabberExemploState.currentTab == 0" (click)="tabberExemploState.previous()"
  class="btn btn-cancel mx-2">
  Voltar
</button>

<button [disabled]="tabberExemploState.currentTab == abas.length - 1" (click)="tabberExemploState.next()"
  class="btn btn-accent mx-2">
  Avançar
</button>

<button [disabled]="tabberExemploState.currentTab == abas.length - 1" (click)="tabberExemploState.last()"
  class="btn btn-aux mx-2">
  Último
</button>`.trim();
        this.tsCodeTabberState = `import { Component } from '@angular/core';
import { TabberItem, TabberItemState } from "../stepper/tabber-component/tabber-item";

@Component({
    selector: 'app-stepper',
    templateUrl: './stepper.component.html',
    styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {

  constructor() {}

  tabberState = TabberItemState;

  abasComEstado: TabberItem[] = [
    { name: "Home", icon: "fa fa-home", state: "success" },
    { name: "Componentes", icon: "fa fa-toolbox", state: "warning" },
    { name: "Tipografia", icon: "fa fa-font", state: this.tabberState.SUCCESS },
    { name: "Cores", icon: "fa fa-palette", state: "error" },
    { name: "Configurações", icon: "fa fa-wrench" },
    { name: "Páginas", icon: "fa fa-newspaper", state: this.tabberState.ERROR }
  ];
  abaComEstadoAtual = 0;

}
  `.trimRight();
        this.navItems = [
            { id: "painelTabber", name: "Visão Geral" },
            { id: "painelTabberState", name: "Estado" }
        ];
        this.tabberOrientation = 0;
        this.abas = [
            { name: "Home", icon: "fa fa-home" },
            { name: "Componentes", icon: "fa fa-toolbox" },
            { name: "Tipografia", icon: "fa fa-font" },
            { name: "Cores", icon: "fa fa-palette" },
            { name: "Configurações", icon: "fa fa-wrench" },
            { name: "Páginas", icon: "fa fa-newspaper" }
        ];
        this.abaAtual = 0;
        this.tabberState = src_app_guia_caixa_components_stepper_tabber_component_tabber_item__WEBPACK_IMPORTED_MODULE_1__["TabberItemState"];
        this.abasComEstado = [
            { name: "Home", icon: "fa fa-home", state: "success" },
            { name: "Componentes", icon: "fa fa-toolbox", state: "warning" },
            { name: "Tipografia", icon: "fa fa-font", state: this.tabberState.SUCCESS },
            { name: "Cores", icon: "fa fa-palette", state: "error" },
            { name: "Configurações", icon: "fa fa-wrench" },
            { name: "Páginas", icon: "fa fa-newspaper", state: this.tabberState.ERROR }
        ];
        this.abaComEstadoAtual = 0;
        this.currentTab = 0;
        this.tabs = [
            { name: "Home", icon: "fa fa-home" },
            { name: "Componentes", icon: "fa fa-toolbox" },
            { name: "Tipografia", icon: "fa fa-font" },
            { name: "Cores", icon: "fa fa-palette" },
            { name: "Configurações", icon: "fa fa-wrench" },
            { name: "Páginas", icon: "fa fa-newspaper" }
        ];
    }
    changeTabberOrientation(value) {
        this.tabberOrientation = value;
    }
    addTab(nome) {
        const newIndex = this.tabs.length + 1;
        const newTab = {
            name: nome ? nome : `Aba ${newIndex}`,
            icon: "fa fa-plus"
        };
        this.tabs.push(newTab);
        this.tabs = [].concat(this.tabs);
    }
    mudarTab(tab) {
        this.currentTab = tab;
    }
}
TabberDemonstracaoComponent.ɵfac = function TabberDemonstracaoComponent_Factory(t) { return new (t || TabberDemonstracaoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"])); };
TabberDemonstracaoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabberDemonstracaoComponent, selectors: [["ng-component"]], viewQuery: function TabberDemonstracaoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollElement = _t.first);
    } }, hostBindings: function TabberDemonstracaoComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function TabberDemonstracaoComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 234, vars: 42, consts: [[1, "titulo"], [1, "my-4"], [1, "citation-highlight"], [1, "font-fam-bold"], [3, "highlight", "languages"], ["role", "tablist", 1, "nav", "nav-pills", "tab-caixa"], [1, "nav-item"], ["data-toggle", "tab", "href", "#visaoGeral", "role", "tab", 1, "nav-link", "text-uppercase", "active"], ["data-toggle", "tab", "href", "#api", "role", "tab", 1, "nav-link", "text-uppercase"], ["data-toggle", "tab", "href", "#exemplos", "role", "tab", 1, "nav-link", "text-uppercase"], [1, "tab-content"], ["id", "visaoGeral", "role", "tabpanel", 1, "tab-pane", "fade", "show", "active"], [1, "row", "no-gutters"], [1, "col-12", "col-xl-9", "pr-2"], ["scrollElement", ""], ["id", "painelTabber", 3, "cardTitle", "codeViewId", "htmlTabId", "htmlCode", "tsTabId", "tsCode"], [1, "descricao"], [1, "conteudo"], [3, "tabs"], ["tabberVisaoGeral", ""], [4, "ngFor", "ngForOf"], [1, "btn", "btn-aux", "mx-2", 3, "disabled", "click"], [1, "btn", "btn-cancel", "mx-2", 3, "disabled", "click"], [1, "btn", "btn-accent", "mx-2", 3, "disabled", "click"], ["id", "painelTabberState", 3, "cardTitle", "codeViewId", "htmlTabId", "htmlCode", "tsTabId", "tsCode"], ["tabberExemploState", ""], [1, "btn", "btn-aux", "mt-3", "mx-2", 3, "disabled", "click"], ["id", "navSection", 1, "d-none", "col-3", "d-xl-flex", "pl-4"], [3, "items", "currentSection"], ["id", "api", "role", "tabpanel", 1, "tab-pane", "fade"], [1, "card"], [1, "card-body"], [1, "header-subtitulo-caixa"], ["href", "https://angular.io/guide/structural-directives", "target", "blank", 1, "text-link"], [1, "table-responsive"], [1, "table", "table-bordered", "table-striped"], [3, "highlight"], ["id", "exemplos", "role", "tabpanel", 1, "tab-pane", "fade"], ["id", "tabberSandbox", 1, "mb-5"], [3, "tabs", "orientation"], ["tabberExemplo", ""], [1, "d-flex", "justify-content-center"], ["title", "Primeiro", 1, "btn", "btn-aux", "mr-2", 3, "disabled", "click"], [1, "fa", "fa-angle-double-left", "fa-lg"], [1, "btn", "btn-cancel", "mr-2", 3, "disabled", "click"], [1, "fa", "fa-angle-left", "fa-lg"], [1, "btn", "btn-accent", 3, "disabled", "click"], [1, "fa", "fa-angle-right", "fa-lg"], ["title", "\u00DAltimo", 1, "btn", "btn-aux", "ml-2", 3, "disabled", "click"], [1, "fa", "fa-angle-double-right", "fa-lg"], [1, "row"], [1, "col", "d-flex", "align-items-center"], ["title", "Remover", 1, "btn", "btn-danger", "ml-2", 3, "disabled", "click"], [1, "fa", "fa-minus", "fa-lg"], ["title", "Adicionar", 1, "btn", "btn-success", "ml-2", 3, "disabled", "click"], [1, "fa", "fa-plus", "fa-lg"], ["placeholder", "Nome da nova aba", 1, "form-control", "d-inline", "w-50", "ml-2"], ["inputNovaAba", ""], [1, "col-4"], ["selectCaixa", "", 3, "change"], ["value", "0"], ["value", "1"], [4, "cxStepper"], [1, "text-center"], ["class", "text-center", 4, "cxStepper"], [4, "ngIf"], [1, "text-center", "my-4"]], template: function TabberDemonstracaoComponent_Template(rf, ctx) { if (rf & 1) {
        const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Tabber\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "O componente alternativo Tabber ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "cx-tabber");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " difere do Stepper ao n\u00E3o implementar qualquer rela\u00E7\u00E3o de sequ\u00EAncia entre as etapas, apenas organizando o conte\u00FAdo em abas. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "HTML:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "code", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "TS:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "code", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Vis\u00E3o Geral ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " API ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Exemplos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "section", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "app-documentacao-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "O atributo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " recebe uma lista de objetos do tipo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "TabberItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, ", com as propriedades \"name\" e \"icon\". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Todas as funcionalidades de navega\u00E7\u00E3o do Stepper est\u00E3o presentes tamb\u00E9m neste componente. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "cx-tabber", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, TabberDemonstracaoComponent_ng_container_48_Template, 2, 0, "ng-container", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabberDemonstracaoComponent_Template_button_click_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](47); return _r1.first(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Primeiro ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabberDemonstracaoComponent_Template_button_click_51_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](47); return _r1.previous(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Voltar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabberDemonstracaoComponent_Template_button_click_53_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](47); return _r1.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Avan\u00E7ar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabberDemonstracaoComponent_Template_button_click_55_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](47); return _r1.last(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " \u00DAltimo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "app-documentacao-template", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "O atributo opcional ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "state");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " pode receber um dos valores da enum ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "TabberItemState");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "('success', 'warning' ou 'error'), acrescentando um pequeno \u00EDcone que representa sua situa\u00E7\u00E3o atual. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "cx-tabber", 18, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, TabberDemonstracaoComponent_ng_container_71_Template, 2, 0, "ng-container", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabberDemonstracaoComponent_Template_button_click_72_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](70); return _r3.first(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Primeiro ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabberDemonstracaoComponent_Template_button_click_74_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](70); return _r3.previous(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Voltar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabberDemonstracaoComponent_Template_button_click_76_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](70); return _r3.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Avan\u00E7ar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabberDemonstracaoComponent_Template_button_click_78_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](70); return _r3.last(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " \u00DAltimo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "nav", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "app-code-fixed-nav", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "*cxStepper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Diretiva que permite a inclus\u00E3o de conte\u00FAdo din\u00E2mico dentro do componente Stepper. O asterisco \u00E9 necess\u00E1rio por se tratar de uma ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "diretiva estrutural");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Usar como: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "*cxStepper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " no elemento a ser exibido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Cx-Tabber");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " Componente de exibi\u00E7\u00E3o de abas que pode ou n\u00E3o englobar o conte\u00FAdo que ser\u00E1 exibido em cada aba. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Usar como: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "cx-tabber");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h6", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Propriedades");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "table", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Nome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Descri\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "readonly MINIMUM_TABS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " Quantidade m\u00EDnima de abas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " Valor: 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "readonly MAXIMUM_TABS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " Quantidade m\u00E1xima de abas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " Valor: 7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "@Input( )");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "tabs: TabberItem[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " Atributo obrigat\u00F3rio com a lista de abas, contendo sua descri\u00E7\u00E3o e \u00EDcone.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " Padr\u00E3o: [] ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "@Input( )");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "currentTab: string | number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, " \u00CDndice da aba atual.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " Padr\u00E3o: 0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "@Input( )");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "orientation: enum StepperOrientation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " Orienta\u00E7\u00E3o do componente, que pode ser horizontal (StepperOrientation.horizontal | \"0\") ou vertical (StepperOrientation.vertical | \"1\").");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, " Padr\u00E3o: StepperOrientation.horizontal | \"0\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "@Input( )");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "styles: [class: string]: any | string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, " Objeto de estilo a ser passado para o card-button-wrapper.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "code", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "@Output( )");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "changeTab: EventEmitter<number>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, " Evento disparado sempre que um \u00EDcone v\u00E1lido \u00E9 clicado, transmitindo o \u00EDndice deste \u00EDcone. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "next( ): void");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, " Avan\u00E7a para a pr\u00F3xima aba. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "previous( ): void");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, " Retorna para a aba anterior. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "first( ): void");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, " Retorna para a primeira aba. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "last( ): void");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, " Avan\u00E7a para a \u00FAltima aba. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "update( ): void");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, " Atualiza manualmente o template do componente cx-tabber. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "section", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "cx-tabber", 39, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](205, TabberDemonstracaoComponent_ng_container_205_Template, 2, 0, "ng-container", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabberDemonstracaoComponent_Template_button_click_209_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](204); return _r5.first(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabberDemonstracaoComponent_Template_button_click_211_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](204); return _r5.previous(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabberDemonstracaoComponent_Template_button_click_213_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](204); return _r5.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabberDemonstracaoComponent_Template_button_click_215_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](204); return _r5.last(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabberDemonstracaoComponent_Template_button_click_219_listener() { ctx.tabs.pop(); return ctx.tabs = [].concat(ctx.tabs); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "button", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabberDemonstracaoComponent_Template_button_click_221_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](224); ctx.addTab(_r7.value); return _r7.value = ""; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "input", 56, 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "cx-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "Orienta\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "select", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TabberDemonstracaoComponent_Template_select_change_229_listener($event) { return ctx.changeTabberOrientation($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "option", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "Horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "option", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "Vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](47);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](70);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](204);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.codeDescricao)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](40, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.codeTsDescricao)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](41, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardTitle", "Tabber")("codeViewId", "viewTabber")("htmlTabId", "htmlCodeTabber")("htmlCode", ctx.htmlCodeTabber)("tsTabId", "tsCodeTabber")("tsCode", ctx.tsCodeTabber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabs", ctx.abas);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.abas);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r1.currentTab == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r1.currentTab == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r1.currentTab == ctx.abas.length - 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r1.currentTab == ctx.abas.length - 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardTitle", "Estado")("codeViewId", "viewTabberState")("htmlTabId", "htmlCodeTabberState")("htmlCode", ctx.htmlCodeTabberState)("tsTabId", "tsCodeTabberState")("tsCode", ctx.tsCodeTabberState);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabs", ctx.abasComEstado);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.abasComEstado);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r3.currentTab == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r3.currentTab == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r3.currentTab == ctx.abas.length - 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r3.currentTab == ctx.abas.length - 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.navItems)("currentSection", ctx.currentSection);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.stylesExample);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabs", ctx.tabs)("orientation", ctx.tabberOrientation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r5.currentTab == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r5.currentTab <= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r5.currentTab == ctx.tabs.length - 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r5.currentTab == ctx.tabs.length - 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.tabs.length == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.tabs.length == _r5.MAXIMUM_TABS);
    } }, directives: [ngx_highlightjs__WEBPACK_IMPORTED_MODULE_4__["Highlight"], _shared_components_documentacao_template_documentacao_template_component__WEBPACK_IMPORTED_MODULE_5__["DocumentacaoTemplateComponent"], _guia_caixa_components_stepper_tabber_component_tabber_component__WEBPACK_IMPORTED_MODULE_6__["TabberComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _shared_components_code_fixed_nav_code_fixed_nav_component__WEBPACK_IMPORTED_MODULE_8__["CodeFixedNavComponent"], _guia_caixa_components_select_caixa_select_caixa_component__WEBPACK_IMPORTED_MODULE_9__["SelectCaixaComponent"], _guia_caixa_components_select_caixa_select_caixa_directive__WEBPACK_IMPORTED_MODULE_10__["SelectCaixaDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_x"], _guia_caixa_components_stepper_stepper_directive__WEBPACK_IMPORTED_MODULE_12__["StepperDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW9uc3RyYWNhby9jb21wb25lbnRlcy90YWJiZXItZGVtb25zdHJhY2FvL3RhYmJlci1kZW1vbnN0cmFjYW8uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabberDemonstracaoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: "./tabber-demonstracao.component.html",
                styleUrls: ["./tabber-demonstracao.component.scss"],
                host: { "(window:scroll)": "onScroll($event)" }
            }]
    }], function () { return [{ type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }]; }, { scrollElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["scrollElement"]
        }] }); })();


/***/ }),

/***/ "6hVy":
/*!***************************************************************************************************!*\
  !*** ./src/app/demonstracao/componentes/timeline-demonstracao/timeline-demonstracao.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: TimelineDemonstracaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineDemonstracaoComponent", function() { return TimelineDemonstracaoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_guia_caixa_components_timeline_timeline_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/guia-caixa/components/timeline/timeline-item */ "nYL4");
/* harmony import */ var _componentes_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../componentes-interface */ "pRMn");
/* harmony import */ var _timeline_api_props__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timeline-api-props */ "tt0y");
/* harmony import */ var _timeline_code_examples__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timeline-code-examples */ "xZGi");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-highlightjs */ "dJsq");
/* harmony import */ var _shared_components_documentacao_template_documentacao_template_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/documentacao-template/documentacao-template.component */ "r5ma");
/* harmony import */ var _guia_caixa_components_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../guia-caixa/components/timeline/timeline.component */ "3HFG");
/* harmony import */ var _shared_components_code_fixed_nav_code_fixed_nav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/code-fixed-nav/code-fixed-nav.component */ "j1XF");
/* harmony import */ var _shared_components_documentacao_api_table_documentacao_api_table_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/components/documentacao-api-table/documentacao-api-table.component */ "XNAu");
/* harmony import */ var _guia_caixa_components_select_caixa_select_caixa_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../guia-caixa/components/select-caixa/select-caixa.component */ "1sbq");
/* harmony import */ var _guia_caixa_components_select_caixa_select_caixa_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../guia-caixa/components/select-caixa/select-caixa.directive */ "IQkg");
















const _c0 = ["scrollElement"];
const _c1 = function () { return ["html"]; };
const _c2 = function () { return ["ts"]; };
const _c3 = function () { return { height: "350px", width: "auto" }; };
class TimelineDemonstracaoComponent extends _componentes_interface__WEBPACK_IMPORTED_MODULE_3__["ComponentesInterface"] {
    constructor(toastr, fb) {
        super(toastr);
        this.toastr = toastr;
        this.fb = fb;
        this.sandboxForm = this.fb.group({
            title: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            date: [null],
            dateString: [null],
            formato: [null],
            state: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.sectionOffset = 0;
        this.spiedTags = ["APP-DOCUMENTACAO-TEMPLATE"];
        this.currentSection = "painelTimeline";
        this.navItems = [
            { id: "painelTimeline", name: "Padrão" },
            { id: "painelTimelineExtenso", name: "Extenso" }
        ];
        this.propsApi = _timeline_api_props__WEBPACK_IMPORTED_MODULE_4__["timelineApiProps"];
        this.timelineItems = [
            { title: "Item sucesso", state: src_app_guia_caixa_components_timeline_timeline_item__WEBPACK_IMPORTED_MODULE_2__["TimelineState"].SUCCESS, date: new Date() },
            { title: "Item warning", state: "warning", date: new Date(), dateFormat: "full" },
            { title: "Item warning-stop", state: "warning-stop", dateString: "05/12/2020" },
            { title: "Item erro", state: "error", dateString: "03/12/2020" },
            { title: "Item info", state: "info", dateString: "06/12/2020" }
        ];
        this.timelineItemsExtenso = [
            { title: "Item sucesso", state: src_app_guia_caixa_components_timeline_timeline_item__WEBPACK_IMPORTED_MODULE_2__["TimelineState"].SUCCESS, date: new Date() },
            { title: "Item warning", state: "warning", date: new Date(), dateFormat: "full" },
            { title: "Item warning-stop", state: "warning-stop", dateString: "05/12/2020" },
            { title: "Item erro", state: "error", dateString: "03/12/2020" },
            { title: "Item info", state: "info", dateString: "06/12/2020" },
            { title: "Item sucesso", state: src_app_guia_caixa_components_timeline_timeline_item__WEBPACK_IMPORTED_MODULE_2__["TimelineState"].SUCCESS, date: new Date() },
            { title: "Item warning", state: "warning", date: new Date(), dateFormat: "full" },
            { title: "Item warning-stop", state: "warning-stop", dateString: "05/12/2020" },
            { title: "Item erro", state: "error", dateString: "03/12/2020" },
            { title: "Item info", state: "info", dateString: "06/12/2020" }
        ];
        this.sandboxTimelineItems = [
            { title: "Item sucesso", state: src_app_guia_caixa_components_timeline_timeline_item__WEBPACK_IMPORTED_MODULE_2__["TimelineState"].SUCCESS, date: new Date() },
            { title: "Item warning", state: "warning", date: new Date(), dateFormat: "full" },
        ];
        this.timelineOrientation = 1;
        this.examples = _timeline_code_examples__WEBPACK_IMPORTED_MODULE_5__["TimelineCodeExamples"];
    }
    ngOnInit() { }
    addItem() {
        const newItem = {};
        newItem.title = this.sandboxForm.get("title").value;
        newItem.state = this.sandboxForm.get("state").value;
        if (this.sandboxForm.get("dateString").value) {
            newItem.dateString = this.sandboxForm.get("dateString").value;
        }
        else {
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
    removeItem() {
        this.sandboxTimelineItems.pop();
        this.sandboxTimelineItems = [].concat(this.sandboxTimelineItems);
    }
}
TimelineDemonstracaoComponent.ɵfac = function TimelineDemonstracaoComponent_Factory(t) { return new (t || TimelineDemonstracaoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
TimelineDemonstracaoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimelineDemonstracaoComponent, selectors: [["ng-component"]], viewQuery: function TimelineDemonstracaoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollElement = _t.first);
    } }, hostBindings: function TimelineDemonstracaoComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function TimelineDemonstracaoComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 141, vars: 30, consts: [[1, "titulo"], [1, "my-4"], [1, "citation-highlight"], [1, "font-fam-bold"], [3, "highlight", "languages"], ["role", "tablist", 1, "nav", "nav-pills", "tab-caixa"], [1, "nav-item"], ["data-toggle", "tab", "href", "#visaoGeral", "role", "tab", 1, "nav-link", "text-uppercase", "active"], ["data-toggle", "tab", "href", "#api", "role", "tab", 1, "nav-link", "text-uppercase"], ["data-toggle", "tab", "href", "#exemplos", "role", "tab", 1, "nav-link", "text-uppercase"], [1, "tab-content"], ["id", "visaoGeral", "role", "tabpanel", 1, "tab-pane", "fade", "show", "active"], [1, "row", "no-gutters"], [1, "col-12", "col-xl-9", "pr-2"], ["scrollElement", ""], ["id", "painelTimeline", 3, "cardTitle", "codeViewId", "htmlTabId", "htmlCode", "tsTabId", "tsCode"], [1, "descricao"], ["target", "_blank", "href", "https://angular.io/api/common/DatePipe#pre-defined-format-options", 1, "text-link"], [1, "conteudo"], [3, "items"], ["id", "painelTimelineExtenso", 3, "cardTitle", "codeViewId", "htmlTabId", "htmlCode", "tsTabId", "tsCode"], [3, "styles", "items"], ["id", "navSection", 1, "d-none", "col-3", "d-xl-flex", "pl-4"], [3, "items", "currentSection"], ["id", "api", "role", "tabpanel", 1, "tab-pane", "fade"], [1, "card"], [1, "card-body"], [1, "header-subtitulo-caixa"], [3, "props"], ["id", "exemplos", "role", "tabpanel", 1, "tab-pane", "fade"], ["id", "timelineSandbox", 1, "mb-5"], [3, "items", "orientation"], ["timelineSandbox", ""], [3, "formGroup"], [1, "card", "mt-2"], [1, "row"], [1, "col-3"], ["formControlName", "title", 1, "form-control"], [1, "col-2"], ["formControlName", "dateString", 1, "form-control"], ["formControlName", "date", "type", "date", 1, "form-control"], ["formControlName", "formato", "type", "text", 1, "form-control"], ["selectCaixa", "", "formControlName", "state"], ["value", "success"], ["value", "error"], ["value", "warning"], ["value", "warning-stop"], ["value", "info"], [1, "col-3", "d-flex", "align-items-center"], ["title", "Remover", 1, "btn", "btn-danger", "ml-2", 3, "disabled", "click"], [1, "fa", "fa-minus", "fa-lg"], ["title", "Adicionar", 1, "btn", "btn-success", "ml-2", 3, "disabled", "click"], [1, "fa", "fa-plus", "fa-lg"]], template: function TimelineDemonstracaoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Timeline\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "O componente Timeline apresenta uma linha do tempo simples com \u00EDcones e cores que indicam a natureza de cada acontecimento.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "O atributo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "items");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " deve sempre receber uma lista de TimelineItem.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "HTML:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "code", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "TS:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "code", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Vis\u00E3o Geral ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " API ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Exemplos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "section", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "app-documentacao-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "O componente recebe a lista de ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "TimelineItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " e desenha, por padr\u00E3o na vertical, a linha do tempo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Os estados poss\u00EDveis podem ser informados utilizando a enum ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "TimelineState");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, ", ou informando a string diretamente (ex. \"success\"). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "A data deve ser informada pelo atributo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, ", do tipo Date, ou pelo atributo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "dateString");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, ", do tipo String.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Caso a formata\u00E7\u00E3o padr\u00E3o do objeto Date n\u00E3o seja a desejada, pode-se informar pelo atributo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "dateFormat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " qualquer um dos formatos suportados pelo DatePipe do Angular: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " https://angular.io/api/common/DatePipe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "cx-timeline", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "app-documentacao-template", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Caso a lista de acontecimentos seja extensa, \u00E9 poss\u00EDvel atribuir valores para os propriedades do componente, como ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "height");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " ou ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "width");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, ", pelo atributo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "styles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "O componente exibir\u00E1 uma barra de rolagem e destacar\u00E1 a parte final da lista por padr\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "cx-timeline", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "nav", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "app-code-fixed-nav", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h5", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Cx-Timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " Componente de exibi\u00E7\u00E3o de acontecimentos sequenciais. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Usar como: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "cx-timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "app-documentacao-api-table", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "section", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "cx-timeline", 31, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "form", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "T\u00EDtulo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Data - Texto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Data - objeto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Formato");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "cx-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "select", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Sucesso");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "option", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Erro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "option", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Alerta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "option", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Alerta - decis\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "option", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimelineDemonstracaoComponent_Template_button_click_137_listener() { return ctx.removeItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimelineDemonstracaoComponent_Template_button_click_139_listener() { return ctx.addItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.examples.codeDescricao)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.examples.codeTsDescricao)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardTitle", "Timeline Padr\u00E3o")("codeViewId", "viewTimelinePadrao")("htmlTabId", "htmlCodeTimelinePadrao")("htmlCode", ctx.examples.htmlCodeTimelinePadrao)("tsTabId", "tsCodeTimelinePadrao")("tsCode", ctx.examples.tsCodeTimelinePadrao);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.timelineItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardTitle", "Timeline Extenso")("codeViewId", "viewTimelineExtenso")("htmlTabId", "htmlCodeTimelineExtenso")("htmlCode", ctx.examples.htmlCodeTimelineExtenso)("tsTabId", "tsCodeTimelineExtenso")("tsCode", ctx.examples.tsCodeTimelineExtenso);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styles", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c3))("items", ctx.timelineItemsExtenso);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.navItems)("currentSection", ctx.currentSection);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("props", ctx.propsApi);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.sandboxTimelineItems)("orientation", ctx.timelineOrientation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.sandboxForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.sandboxTimelineItems.length == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.sandboxForm.valid);
    } }, directives: [ngx_highlightjs__WEBPACK_IMPORTED_MODULE_7__["Highlight"], _shared_components_documentacao_template_documentacao_template_component__WEBPACK_IMPORTED_MODULE_8__["DocumentacaoTemplateComponent"], _guia_caixa_components_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_9__["TimelineComponent"], _shared_components_code_fixed_nav_code_fixed_nav_component__WEBPACK_IMPORTED_MODULE_10__["CodeFixedNavComponent"], _shared_components_documentacao_api_table_documentacao_api_table_component__WEBPACK_IMPORTED_MODULE_11__["DocumentacaoApiTableComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _guia_caixa_components_select_caixa_select_caixa_component__WEBPACK_IMPORTED_MODULE_12__["SelectCaixaComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _guia_caixa_components_select_caixa_select_caixa_directive__WEBPACK_IMPORTED_MODULE_13__["SelectCaixaDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimelineDemonstracaoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: "./timeline-demonstracao.component.html",
                host: { "(window:scroll)": "onScroll($event)" }
            }]
    }], function () { return [{ type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { scrollElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["scrollElement"]
        }] }); })();


/***/ }),

/***/ "CrpL":
/*!*************************************************************************************************!*\
  !*** ./src/app/demonstracao/componentes/stepper-demonstracao/stepper-demonstracao.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: StepperDemonstracaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepperDemonstracaoComponent", function() { return StepperDemonstracaoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _componentes_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../componentes-interface */ "pRMn");
/* harmony import */ var _stepper_api_props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stepper-api-props */ "mS55");
/* harmony import */ var _stepper_code_examples__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stepper-code-examples */ "bWHl");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-highlightjs */ "dJsq");
/* harmony import */ var _shared_components_documentacao_template_documentacao_template_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/documentacao-template/documentacao-template.component */ "r5ma");
/* harmony import */ var _guia_caixa_components_stepper_stepper_component_stepper_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../guia-caixa/components/stepper/stepper-component/stepper.component */ "oYOg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _guia_caixa_components_stepper_stepper_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../guia-caixa/components/stepper/stepper-directive */ "IJq/");
/* harmony import */ var _shared_components_code_fixed_nav_code_fixed_nav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/code-fixed-nav/code-fixed-nav.component */ "j1XF");
/* harmony import */ var _shared_components_documentacao_api_table_documentacao_api_table_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/components/documentacao-api-table/documentacao-api-table.component */ "XNAu");
/* harmony import */ var _guia_caixa_components_select_caixa_select_caixa_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../guia-caixa/components/select-caixa/select-caixa.component */ "1sbq");
/* harmony import */ var _guia_caixa_components_select_caixa_select_caixa_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../guia-caixa/components/select-caixa/select-caixa.directive */ "IQkg");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "s7LF");
















const _c0 = ["scrollElement"];
function StepperDemonstracaoComponent_div_52_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StepperDemonstracaoComponent_div_52_ng_container_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.passoAtual = ctx_r15.passoAtual - 1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Voltar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StepperDemonstracaoComponent_div_52_ng_container_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.passoAtual = ctx_r17.passoAtual + 1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Avan\u00E7ar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const passo_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](passo_r12.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r14.passoAtual == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r14.passoAtual == ctx_r14.passos.length - 1);
} }
function StepperDemonstracaoComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StepperDemonstracaoComponent_div_52_ng_container_1_Template, 7, 3, "ng-container", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r13 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r13 == ctx_r1.passoAtual);
} }
function StepperDemonstracaoComponent_div_66_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StepperDemonstracaoComponent_div_66_ng_container_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.passoAtual = ctx_r22.passoAtual - 1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Voltar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StepperDemonstracaoComponent_div_66_ng_container_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.passoAtual = ctx_r24.passoAtual + 1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Avan\u00E7ar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const passo_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](passo_r19.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r21.passoAtual == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r21.passoAtual == ctx_r21.passos.length - 1);
} }
function StepperDemonstracaoComponent_div_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StepperDemonstracaoComponent_div_66_ng_container_1_Template, 7, 3, "ng-container", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r20 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r20 == ctx_r2.passoAtual);
} }
function StepperDemonstracaoComponent_div_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Primeiro conte\u00FAdo interno");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StepperDemonstracaoComponent_div_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Segundo conte\u00FAdo interno");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StepperDemonstracaoComponent_div_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Terceiro conte\u00FAdo interno");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StepperDemonstracaoComponent_div_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Quarto conte\u00FAdo interno");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StepperDemonstracaoComponent_div_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Quinto conte\u00FAdo interno");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StepperDemonstracaoComponent_ng_container_125_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const step_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", step_r26.title, "!");
} }
function StepperDemonstracaoComponent_ng_container_125_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StepperDemonstracaoComponent_ng_container_125_ng_container_1_Template, 3, 1, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
const _c1 = function () { return ["html"]; };
const _c2 = function () { return ["ts"]; };
class StepperDemonstracaoComponent extends _componentes_interface__WEBPACK_IMPORTED_MODULE_1__["ComponentesInterface"] {
    constructor(toastr) {
        super(toastr);
        this.toastr = toastr;
        this.sectionOffset = 0;
        this.spiedTags = ["APP-DOCUMENTACAO-TEMPLATE"];
        this.currentSection = "painelStepperPadrao";
        this.navItems = [
            { id: "painelStepperPadrao", name: "Navegação livre" },
            { id: "painelStepperGuiado", name: "Navegação guiada" },
            { id: "painelStepperInterno", name: "Conteúdo Interno" }
        ];
        this.examples = _stepper_code_examples__WEBPACK_IMPORTED_MODULE_3__["StepperCodeExamples"];
        this.propsApi = _stepper_api_props__WEBPACK_IMPORTED_MODULE_2__["stepperApiProps"];
        this.showTabsStepperPadrao = false;
        this.passos = [
            { title: "Primeiro passo" },
            { title: "Segundo passo" },
            { title: "Terceiro passo" },
            { title: "Quarto passo" },
            { title: "Quinto passo" }
        ];
        this.passoAtual = 0;
        this.steps = [
            { title: "Um primeiro passo" },
            { title: "Um segundo passo" },
            { title: "Um terceiro passo" },
            { title: "Um quarto passo" },
            { title: "Fim" }
        ];
        this.stepperFreeOrientation = 0;
        this.stepperGuidedOrientation = 0;
        this.hideStepsOnCompleted = true;
        this.completedMessage = null;
        this.completedIcon = null;
        this.freeNavigation = true;
        this.showCompletedMessage = true;
    }
    ngOnInit() { }
    changeStepperFreeOrientation(value) {
        this.stepperFreeOrientation = value;
    }
    changeStepperGuidedOrientation(value) {
        this.stepperGuidedOrientation = value;
    }
    changeHideSteps(value) {
        this.hideStepsOnCompleted = value;
    }
    addStep(nome) {
        const newIndex = this.steps.length + 1;
        const newStep = { title: "" };
        newStep.title = nome ? nome : `Passo ${newIndex}`;
        this.steps.push(newStep);
        this.steps = [].concat(this.steps);
    }
    removeStep() {
        this.steps.pop();
        this.steps = [].concat(this.steps);
    }
    mudarPasso(passo) {
        this.passoAtual = passo;
    }
}
StepperDemonstracaoComponent.ɵfac = function StepperDemonstracaoComponent_Factory(t) { return new (t || StepperDemonstracaoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
StepperDemonstracaoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StepperDemonstracaoComponent, selectors: [["ng-component"]], viewQuery: function StepperDemonstracaoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollElement = _t.first);
    } }, hostBindings: function StepperDemonstracaoComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function StepperDemonstracaoComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 160, vars: 49, consts: [[1, "titulo"], [1, "my-4"], [1, "citation-highlight"], [1, "font-fam-bold"], [3, "highlight", "languages"], ["role", "tablist", 1, "nav", "nav-pills", "tab-caixa"], [1, "nav-item"], ["data-toggle", "tab", "href", "#visaoGeral", "role", "tab", 1, "nav-link", "text-uppercase", "active"], ["data-toggle", "tab", "href", "#api", "role", "tab", 1, "nav-link", "text-uppercase"], ["data-toggle", "tab", "href", "#exemplos", "role", "tab", 1, "nav-link", "text-uppercase"], [1, "tab-content"], ["id", "visaoGeral", "role", "tabpanel", 1, "tab-pane", "fade", "show", "active"], [1, "row", "no-gutters"], [1, "col-12", "col-xl-9", "pr-2"], ["scrollElement", ""], ["id", "painelStepperPadrao", 3, "cardTitle", "codeViewId", "htmlTabId", "htmlCode", "tsTabId", "tsCode"], [1, "descricao"], [1, "conteudo"], ["completedMessage", "Passos conclu\u00EDdos!", 3, "steps", "currentStep", "changeStep"], [4, "ngFor", "ngForOf"], ["id", "painelStepperGuiado", 3, "cardTitle", "codeViewId", "htmlTabId", "htmlCode", "tsTabId", "tsCode"], [3, "freeNavigation", "steps", "currentStep", "changeStep"], ["id", "painelStepperInterno", 3, "cardTitle", "codeViewId", "htmlTabId", "htmlCode", "tsTabId", "tsCode"], [3, "steps"], ["stepperInterno", ""], [4, "cxStepper"], [1, "btn", "btn-aux", "mx-2", 3, "disabled", "click"], [1, "btn", "btn-cancel", "mx-2", 3, "disabled", "click"], [1, "btn", "btn-accent", "mx-2", 3, "disabled", "click"], ["id", "navSection", 1, "d-none", "col-3", "d-xl-flex", "pl-4"], [3, "items", "currentSection"], ["id", "api", "role", "tabpanel", 1, "tab-pane", "fade"], [1, "card"], [1, "card-body"], [1, "header-subtitulo-caixa"], ["href", "https://angular.io/guide/structural-directives", "target", "blank", 1, "text-link"], [3, "props"], ["id", "exemplos", "role", "tabpanel", 1, "tab-pane", "fade"], ["id", "stepperSandbox", 1, "mb-5"], [3, "steps", "orientation", "freeNavigation"], ["stepperFree", ""], [1, "row"], [1, "col"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "checkFreeNavigation", 1, "custom-control-input", 3, "checked", "change"], ["for", "checkFreeNavigation", 1, "custom-control-label"], [1, "d-flex", "justify-content-center"], ["title", "Primeiro", 1, "btn", "btn-aux", "mr-2", 3, "disabled", "click"], [1, "fa", "fa-angle-double-left", "fa-lg"], [1, "btn", "btn-cancel", "mr-2", 3, "disabled", "click"], [1, "fa", "fa-angle-left", "fa-lg"], [1, "btn", "btn-accent", 3, "disabled", "click"], [1, "fa", "fa-angle-right", "fa-lg"], ["title", "\u00DAltimo", 1, "btn", "btn-aux", "ml-2", 3, "disabled", "click"], [1, "fa", "fa-angle-double-right", "fa-lg"], [1, "col", "d-flex", "align-items-center"], ["title", "Remover", 1, "btn", "btn-danger", "ml-2", 3, "disabled", "click"], [1, "fa", "fa-minus", "fa-lg"], ["title", "Adicionar", 1, "btn", "btn-success", "ml-2", 3, "disabled", "click"], [1, "fa", "fa-plus", "fa-lg"], ["placeholder", "Nome do novo passo", 1, "form-control", "d-inline", "w-50", "ml-2"], ["inputNovoStepFree", ""], [1, "col-5"], ["selectCaixa", "", 3, "change"], ["value", "0"], ["value", "1"], [4, "ngIf"], [1, "text-center"], [1, "text-center", "my-4"]], template: function StepperDemonstracaoComponent_Template(rf, ctx) { if (rf & 1) {
        const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Stepper\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "O componente Stepper apresenta um fluxo visual simples que representa os passos de algum processo l\u00F3gico.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "O atributo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "steps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " deve sempre receber uma lista de strings, com o nome de cada passo.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "HTML:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "code", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "TS:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "code", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Vis\u00E3o Geral ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " API ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Exemplos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "section", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "app-documentacao-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Em seu comportamento padr\u00E3o, de ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "navega\u00E7\u00E3o livre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, ", o usu\u00E1rio pode retornar a qualquer passo anterior clicando nos \u00EDcones.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "O controle de navega\u00E7\u00E3o pode ser feito utilizando uma vari\u00E1vel externa, como no exemplo abaixo. A vari\u00E1vel deve estar vinculada ao atributo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "currentStep");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " e ao evento ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "changeStep");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, ", emitido cada vez que o usu\u00E1rio clica diretamente no \u00EDcone de um passo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "cx-stepper", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changeStep", function StepperDemonstracaoComponent_Template_cx_stepper_changeStep_51_listener($event) { return ctx.passoAtual = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, StepperDemonstracaoComponent_div_52_Template, 2, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "app-documentacao-template", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Passando o valor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " para a propriedade ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "freeNavigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, ", o usu\u00E1rio s\u00F3 poder\u00E1 retornar ao passo imediatamente anterior. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "cx-stepper", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changeStep", function StepperDemonstracaoComponent_Template_cx_stepper_changeStep_65_listener($event) { return ctx.passoAtual = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, StepperDemonstracaoComponent_div_66_Template, 2, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "app-documentacao-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "O conte\u00FAdo din\u00E2mico a ser exibido tamb\u00E9m pode ser colocado dentro do componente Stepper, identificando-o com a diretiva ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "*cxStepper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "A posi\u00E7\u00E3o do passo na lista (index) e a ordem de defini\u00E7\u00E3o dos elementos no template estar\u00E3o relacionados. O primeiro elemento com a diretiva corresponder\u00E1 ao index 0, o segundo, ao index 1, e assim por diante. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Utilizar conte\u00FAdo interno e acesso por template string torna desnecess\u00E1rio implementar qualquer controle condicional de exibi\u00E7\u00E3o. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "cx-stepper", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, StepperDemonstracaoComponent_div_82_Template, 3, 0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, StepperDemonstracaoComponent_div_83_Template, 3, 0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, StepperDemonstracaoComponent_div_84_Template, 3, 0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, StepperDemonstracaoComponent_div_85_Template, 3, 0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, StepperDemonstracaoComponent_div_86_Template, 3, 0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StepperDemonstracaoComponent_Template_button_click_87_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](81); return _r3.first(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Primeiro ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StepperDemonstracaoComponent_Template_button_click_89_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](81); return _r3.previous(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Voltar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StepperDemonstracaoComponent_Template_button_click_91_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](81); return _r3.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " Avan\u00E7ar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "nav", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "app-code-fixed-nav", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h5", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "*cxStepper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " Diretiva que permite a inclus\u00E3o de conte\u00FAdo din\u00E2mico dentro do componente Stepper. O asterisco \u00E9 necess\u00E1rio por se tratar de uma ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "diretiva estrutural");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Usar como: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "*cxStepper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " no elemento a ser exibido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h5", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Cx-Stepper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " Componente de exibi\u00E7\u00E3o de passos em sequ\u00EAncia que pode ou n\u00E3o englobar o conte\u00FAdo que ser\u00E1 exibido em cada passo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Usar como: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "cx-stepper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "app-documentacao-api-table", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "section", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "cx-stepper", 39, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](125, StepperDemonstracaoComponent_ng_container_125_Template, 2, 0, "ng-container", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function StepperDemonstracaoComponent_Template_input_change_131_listener($event) { return ctx.freeNavigation = $event.target.checked; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " Navega\u00E7\u00E3o Livre ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StepperDemonstracaoComponent_Template_button_click_135_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](124); return _r9.first(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StepperDemonstracaoComponent_Template_button_click_137_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](124); return _r9.previous(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StepperDemonstracaoComponent_Template_button_click_139_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](124); return _r9.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StepperDemonstracaoComponent_Template_button_click_141_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](124); return _r9.toStepByIndex(ctx.steps.length - 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "i", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StepperDemonstracaoComponent_Template_button_click_145_listener() { return ctx.removeStep(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "i", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StepperDemonstracaoComponent_Template_button_click_147_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](150); ctx.addStep(_r11.value); return _r11.value = ""; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "i", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "input", 60, 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "cx-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Orienta\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "select", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function StepperDemonstracaoComponent_Template_select_change_155_listener($event) { return ctx.stepperFreeOrientation = $event.target.value; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "option", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "option", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](81);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.examples.codeDescricao)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](47, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.examples.codeTsDescricao)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](48, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardTitle", "Navega\u00E7\u00E3o Livre")("codeViewId", "viewStepperPadrao")("htmlTabId", "htmlCodeStepperPadrao")("htmlCode", ctx.examples.htmlCodeStepperPadrao)("tsTabId", "tsCodeStepperPadrao")("tsCode", ctx.examples.tsCodeStepperPadrao);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("steps", ctx.passos)("currentStep", ctx.passoAtual);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.passos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardTitle", "Navega\u00E7\u00E3o Guiada")("codeViewId", "viewStepperGuiado")("htmlTabId", "htmlCodeStepperGuiado")("htmlCode", ctx.examples.htmlCodeStepperGuiado)("tsTabId", "tsCodeStepperGuiado")("tsCode", ctx.examples.tsCodeStepperGuiado);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("freeNavigation", false)("steps", ctx.passos)("currentStep", ctx.passoAtual);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.passos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardTitle", "Conte\u00FAdo dentro do componente")("codeViewId", "viewStepperInterno")("htmlTabId", "htmlCodeStepperInterno")("htmlCode", ctx.examples.htmlCodeStepperInterno)("tsTabId", "tsCodeStepperInterno")("tsCode", ctx.examples.tsCodeStepperInterno);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("steps", ctx.passos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r3.currentStep == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r3.currentStep == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r3.currentStep == ctx.passos.length - 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.navItems)("currentSection", ctx.currentSection);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("props", ctx.propsApi);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("steps", ctx.steps)("orientation", ctx.stepperFreeOrientation)("freeNavigation", ctx.freeNavigation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.steps);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.freeNavigation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r9.currentStep == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r9.currentStep <= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r9.currentStep == ctx.steps.length - 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.steps.length == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.steps.length == _r9.MAXIMUM_STEPS);
    } }, directives: [ngx_highlightjs__WEBPACK_IMPORTED_MODULE_5__["Highlight"], _shared_components_documentacao_template_documentacao_template_component__WEBPACK_IMPORTED_MODULE_6__["DocumentacaoTemplateComponent"], _guia_caixa_components_stepper_stepper_component_stepper_component__WEBPACK_IMPORTED_MODULE_7__["StepperComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _guia_caixa_components_stepper_stepper_directive__WEBPACK_IMPORTED_MODULE_9__["StepperDirective"], _shared_components_code_fixed_nav_code_fixed_nav_component__WEBPACK_IMPORTED_MODULE_10__["CodeFixedNavComponent"], _shared_components_documentacao_api_table_documentacao_api_table_component__WEBPACK_IMPORTED_MODULE_11__["DocumentacaoApiTableComponent"], _guia_caixa_components_select_caixa_select_caixa_component__WEBPACK_IMPORTED_MODULE_12__["SelectCaixaComponent"], _guia_caixa_components_select_caixa_select_caixa_directive__WEBPACK_IMPORTED_MODULE_13__["SelectCaixaDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StepperDemonstracaoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: "./stepper-demonstracao.component.html",
                host: { "(window:scroll)": "onScroll($event)" }
            }]
    }], function () { return [{ type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }]; }, { scrollElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["scrollElement"]
        }] }); })();


/***/ }),

/***/ "GdjL":
/*!**********************************************************************!*\
  !*** ./src/app/demonstracao/componentes/componentes-caixa.module.ts ***!
  \**********************************************************************/
/*! exports provided: ComponentesCaixaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentesCaixaModule", function() { return ComponentesCaixaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _componentes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./componentes.component */ "xyGQ");
/* harmony import */ var _componentes_basicos_cards_cards_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../componentes-basicos/cards/cards.component */ "ia4M");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _componentes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componentes-routing.module */ "Tl4Q");
/* harmony import */ var _componentes_basicos_mensagens_mensagens_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../componentes-basicos/mensagens/mensagens.component */ "LWRd");
/* harmony import */ var _inputs_inputs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inputs/inputs.component */ "OsIZ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-mask */ "bOtU");
/* harmony import */ var _datatable_demonstracao_datatable_demonstracao_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./datatable-demonstracao/datatable-demonstracao.component */ "XiIV");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-datatables */ "oTcB");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-highlightjs */ "dJsq");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "aLe/");
/* harmony import */ var _select_select_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./select/select.component */ "OM9c");
/* harmony import */ var src_app_guia_caixa_guia_caixa_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/guia-caixa/guia-caixa.module */ "0JuT");
/* harmony import */ var _tabber_demonstracao_tabber_demonstracao_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tabber-demonstracao/tabber-demonstracao.component */ "2RtK");
/* harmony import */ var _stepper_demonstracao_stepper_demonstracao_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./stepper-demonstracao/stepper-demonstracao.component */ "CrpL");
/* harmony import */ var _card_button_demonstracao_card_button_demonstracao_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./card-button-demonstracao/card-button-demonstracao.component */ "mPP4");
/* harmony import */ var _timeline_demonstracao_timeline_demonstracao_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./timeline-demonstracao/timeline-demonstracao.component */ "6hVy");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var _button_control_demonstracao_button_control_demonstracao_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./button-control-demonstracao/button-control-demonstracao.component */ "d8Py");























class ComponentesCaixaModule {
}
ComponentesCaixaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ComponentesCaixaModule });
ComponentesCaixaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ComponentesCaixaModule_Factory(t) { return new (t || ComponentesCaixaModule)(); }, imports: [[
            _componentes_routing_module__WEBPACK_IMPORTED_MODULE_5__["ComponentesRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            ngx_mask__WEBPACK_IMPORTED_MODULE_9__["NgxMaskModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_20__["NgSelectModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_11__["DataTablesModule"],
            ngx_highlightjs__WEBPACK_IMPORTED_MODULE_12__["HighlightModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__["PerfectScrollbarModule"],
            src_app_guia_caixa_guia_caixa_module__WEBPACK_IMPORTED_MODULE_15__["GuiaCaixaModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentesCaixaModule, { declarations: [_componentes_component__WEBPACK_IMPORTED_MODULE_2__["ComponentesCaixaComponent"],
        _componentes_basicos_cards_cards_component__WEBPACK_IMPORTED_MODULE_3__["CardsComponent"],
        _componentes_basicos_mensagens_mensagens_component__WEBPACK_IMPORTED_MODULE_6__["MensagensComponent"],
        _inputs_inputs_component__WEBPACK_IMPORTED_MODULE_7__["InputsComponent"],
        _datatable_demonstracao_datatable_demonstracao_component__WEBPACK_IMPORTED_MODULE_10__["DatatableDemonstracaoComponent"],
        _select_select_component__WEBPACK_IMPORTED_MODULE_14__["SelectComponent"],
        _tabber_demonstracao_tabber_demonstracao_component__WEBPACK_IMPORTED_MODULE_16__["TabberDemonstracaoComponent"],
        _stepper_demonstracao_stepper_demonstracao_component__WEBPACK_IMPORTED_MODULE_17__["StepperDemonstracaoComponent"],
        _card_button_demonstracao_card_button_demonstracao_component__WEBPACK_IMPORTED_MODULE_18__["CardButtonDemonstracaoComponent"],
        _timeline_demonstracao_timeline_demonstracao_component__WEBPACK_IMPORTED_MODULE_19__["TimelineDemonstracaoComponent"],
        _button_control_demonstracao_button_control_demonstracao_component__WEBPACK_IMPORTED_MODULE_21__["ButtonControlDemonstracaoComponent"]], imports: [_componentes_routing_module__WEBPACK_IMPORTED_MODULE_5__["ComponentesRoutingModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        ngx_mask__WEBPACK_IMPORTED_MODULE_9__["NgxMaskModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_20__["NgSelectModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_11__["DataTablesModule"],
        ngx_highlightjs__WEBPACK_IMPORTED_MODULE_12__["HighlightModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__["PerfectScrollbarModule"],
        src_app_guia_caixa_guia_caixa_module__WEBPACK_IMPORTED_MODULE_15__["GuiaCaixaModule"]], exports: [_componentes_basicos_cards_cards_component__WEBPACK_IMPORTED_MODULE_3__["CardsComponent"],
        _componentes_basicos_mensagens_mensagens_component__WEBPACK_IMPORTED_MODULE_6__["MensagensComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentesCaixaModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _componentes_routing_module__WEBPACK_IMPORTED_MODULE_5__["ComponentesRoutingModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                    ngx_mask__WEBPACK_IMPORTED_MODULE_9__["NgxMaskModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_20__["NgSelectModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_11__["DataTablesModule"],
                    ngx_highlightjs__WEBPACK_IMPORTED_MODULE_12__["HighlightModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__["PerfectScrollbarModule"],
                    src_app_guia_caixa_guia_caixa_module__WEBPACK_IMPORTED_MODULE_15__["GuiaCaixaModule"]
                ],
                declarations: [
                    _componentes_component__WEBPACK_IMPORTED_MODULE_2__["ComponentesCaixaComponent"],
                    _componentes_basicos_cards_cards_component__WEBPACK_IMPORTED_MODULE_3__["CardsComponent"],
                    _componentes_basicos_mensagens_mensagens_component__WEBPACK_IMPORTED_MODULE_6__["MensagensComponent"],
                    _inputs_inputs_component__WEBPACK_IMPORTED_MODULE_7__["InputsComponent"],
                    _datatable_demonstracao_datatable_demonstracao_component__WEBPACK_IMPORTED_MODULE_10__["DatatableDemonstracaoComponent"],
                    _select_select_component__WEBPACK_IMPORTED_MODULE_14__["SelectComponent"],
                    _tabber_demonstracao_tabber_demonstracao_component__WEBPACK_IMPORTED_MODULE_16__["TabberDemonstracaoComponent"],
                    _stepper_demonstracao_stepper_demonstracao_component__WEBPACK_IMPORTED_MODULE_17__["StepperDemonstracaoComponent"],
                    _card_button_demonstracao_card_button_demonstracao_component__WEBPACK_IMPORTED_MODULE_18__["CardButtonDemonstracaoComponent"],
                    _timeline_demonstracao_timeline_demonstracao_component__WEBPACK_IMPORTED_MODULE_19__["TimelineDemonstracaoComponent"],
                    _button_control_demonstracao_button_control_demonstracao_component__WEBPACK_IMPORTED_MODULE_21__["ButtonControlDemonstracaoComponent"]
                ],
                exports: [
                    _componentes_basicos_cards_cards_component__WEBPACK_IMPORTED_MODULE_3__["CardsComponent"],
                    _componentes_basicos_mensagens_mensagens_component__WEBPACK_IMPORTED_MODULE_6__["MensagensComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "OM9c":
/*!*********************************************************************!*\
  !*** ./src/app/demonstracao/componentes/select/select.component.ts ***!
  \*********************************************************************/
/*! exports provided: SelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return SelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _componentes_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../componentes-interface */ "pRMn");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _shared_components_documentacao_template_documentacao_template_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/documentacao-template/documentacao-template.component */ "r5ma");
/* harmony import */ var _guia_caixa_components_select_caixa_select_caixa_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../guia-caixa/components/select-caixa/select-caixa.component */ "1sbq");
/* harmony import */ var _guia_caixa_components_select_caixa_select_caixa_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../guia-caixa/components/select-caixa/select-caixa.directive */ "IQkg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");










const _c0 = ["selectTeste"];
const _c1 = ["scrollElement"];
function SelectComponent_option_131_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Clique no bot\u00E3o para atualizar as op\u00E7\u00F5es");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SelectComponent_option_132_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opcao_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](opcao_r3);
} }
const _c2 = function () { return { liveSearch: true }; };
const _c3 = function () { return { actionsBox: true }; };
const _c4 = function (a0) { return { "active": a0 }; };
class SelectComponent extends _componentes_interface__WEBPACK_IMPORTED_MODULE_1__["ComponentesInterface"] {
    constructor(toastr, fb) {
        super(toastr);
        this.toastr = toastr;
        this.fb = fb;
        this.sectionOffset = 0;
        this.spiedTags = ["APP-DOCUMENTACAO-TEMPLATE"];
        this.currentSection = "painelSelect";
        this.formulario = this.fb.group({
            comida: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            filme: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(11)]]
        });
        this.opcoesAsync = [];
        this.htmlCodeSelectBasico = `						<form>
  <cx-select>
    <label>Número favorito</label>
    <select selectCaixa>
      <option value="0"></option>
      <option value="1"></option>
      <option value="2"></option>
      <option value="3"></option>
    </select>
  </cx-select>
</form>`.trim();
        this.htmlCodeSelectValidacao = `						<form [formGroup]="formulario">
  <cx-select>
    <label>Comida favorita</label>
    <select selectCaixa formControlName="comida">
      <option value="" selected>Selecione uma opção</option>
      <option value="Lasanha">Lasanha</option>
      <option value="Feijoada">Feijoada</option>
      <option value="Churrasco">Churrasco</option>
    </select>
  </cx-select>

  <cx-select>
    <label>Filme favorito</label>
    <select selectCaixa formControlName="filme">
      <option value="" selected>Selecione uma opção</option>
      <option value="Senhor dos Anéis">Senhor dos Anéis</option>
      <option value="O Poderoso Chefão">O Poderoso Chefão</option>
      <option value="Vingadores">Vingadores</option>
    </select>
  </cx-select>
</form>`.trim();
        this.tsCodeSelectValidacao = `  import { Component } from '@angular/core';
  import { FormBuilder, Validators } from '@angular/forms';

  @Component({
      selector: 'app-select',
      templateUrl: './select.component.html',
      styleUrls: ['./select.component.scss']
  })
  export class SelectComponent {

    constructor(
      private fb: FormBuilder
    ) {}

    formulario = this.fb.group({
      comida: [null, [Validators.required]],
      filme: [null, [Validators.required, Validators.minLength(11)]]
    });
  }
  `.trimRight();
        this.htmlCodeVariantes = `						<form>
  <cx-select>
    <label>Seleção múltipla</label>
    <select selectCaixa multiple>
      <option value="Lasanha">Lasanha</option>
      <option value="Feijoada">Feijoada</option>
      <option value="Churrasco">Churrasco</option>
    </select>
  </cx-select>

  <cx-select [options]="{ liveSearch: true }">
    <label>Filtro de opções</label>
    <select selectCaixa>
      <option value="Lasanha">Lasanha</option>
      <option value="Feijoada">Feijoada</option>
      <option value="Churrasco">Churrasco</option>
    </select>
  </cx-select>

  <cx-select [options]="{ actionsBox: true }">
    <label>Botões e subtítulos</label>
    <select selectCaixa multiple>
      <optgroup label="Massas">
        <option>Pizza</option>
        <option>Lasanha</option>
        <option>Macarrão</option>
      </optgroup>
      <optgroup label="Carne">
        <option>Picanha</option>
        <option>Alcatra</option>
        <option>Torresmo</option>
      </optgroup>
    </select>
  </cx-select>
</form>`.trim();
        this.htmlCodeSelectAsync = `						<form>
  <cx-select [initTrigger]="opcoesAsync">
    <label>Número favorito</label>
    <select selectCaixa>
      <option *ngFor="let opcao of opcoesAsync">{{ opcao }}</option>
    </select>
  </cx-select>

  <button (click)="atualizaOpcoes()" class="btn btn-primario">
    <i class="fa fa-sync mr-2"></i>
    Atualizar opções
  </button>
</form>`.trim();
        this.tsCodeSelectAsync = `  import { Component } from '@angular/core';

  @Component({
      selector: 'app-select',
      templateUrl: './select.component.html',
      styleUrls: ['./select.component.scss']
  })
  export class SelectComponent {

    constructor() {}

    opcoesAsync = [];

    atualizaOpcoes() {
      this.opcoesAsync = [this.getRandomInt(), this.getRandomInt(), this.getRandomInt()];
    }

    // Retorna um número inteiro aleatório entre 1 e 100
    getRandomInt() {
      return Math.floor(Math.random() * (101 - 1)) + 1;
    }
  }`.trimRight();
    }
    ngOnInit() {
    }
    atualizaOpcoes() {
        this.opcoesAsync = [this.getRandomInt(), this.getRandomInt(), this.getRandomInt()];
    }
    getRandomInt() {
        return Math.floor(Math.random() * (101 - 1)) + 1;
    }
}
SelectComponent.ɵfac = function SelectComponent_Factory(t) { return new (t || SelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
SelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectComponent, selectors: [["ng-component"]], viewQuery: function SelectComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.selectCaixa = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollElement = _t.first);
    } }, hostBindings: function SelectComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function SelectComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 146, vars: 40, consts: [[1, "titulo"], [1, "row", "no-gutters"], [1, "col-12", "col-xl-9", "pr-2"], ["scrollElement", ""], ["id", "painelSelect", 3, "cardTitle", "codeViewId", "htmlTabId", "htmlCode"], [1, "descricao"], [1, "citation-highlight"], ["target", "_blank", "href", "https://developer.snapappointments.com/bootstrap-select/options/", 1, "text-link"], [1, "conteudo"], [1, "row"], [1, "col-12", "col-md-6", "col-lg-6"], ["selectCaixa", ""], ["value", "0"], ["value", "1"], ["value", "2"], ["value", "3"], ["id", "painelSelectValidacao", 3, "cardTitle", "codeViewId", "htmlTabId", "htmlCode", "tsTabId", "tsCode"], [3, "formGroup"], ["selectCaixa", "", "formControlName", "comida"], ["value", "", "selected", ""], ["value", "Lasanha"], ["value", "Feijoada"], ["value", "Churrasco"], ["selectCaixa", "", "formControlName", "filme"], ["value", "Senhor dos An\u00E9is"], ["value", "O Poderoso Chef\u00E3o"], ["value", "Vingadores"], ["id", "painelSelectVariantes", 3, "cardTitle", "codeViewId", "htmlTabId", "htmlCode"], ["selectCaixa", "", "multiple", ""], [3, "options"], ["label", "Massas"], ["label", "Carne"], ["id", "painelSelectAsync", 3, "cardTitle", "codeViewId", "htmlTabId", "htmlCode", "tsTabId", "tsCode"], [3, "initTrigger"], ["value", "", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-primario", 3, "click"], [1, "fa", "fa-sync", "mr-2"], ["id", "navSection", 1, "d-none", "col-3", "d-xl-flex", "justify-content-center"], [1, "position-fixed", "list-group", "list-group-caixa", "shadow-caixa", "border-0"], ["role", "button", 1, "list-group-item", "list-group-item-action", 3, "ngClass", "click"], ["value", ""]], template: function SelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Select\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-documentacao-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " A diretiva ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "selectCaixa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " em conjunto com o componente ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "cx-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " permite a estiliza\u00E7\u00E3o e valida\u00E7\u00E3o autom\u00E1tica dos selects. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " O componente utiliza a biblioteca ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Bootstrap-Select ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "cx-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "N\u00FAmero favorito");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "app-documentacao-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " A valida\u00E7\u00E3o observa os Validators do Angular. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "form", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "cx-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Comida favorita");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Selecione uma op\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Lasanha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Feijoada");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Churrasco");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "cx-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Filme favorito");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "select", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Selecione uma op\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Senhor dos An\u00E9is");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "O Poderoso Chef\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Vingadores");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "app-documentacao-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Todas as op\u00E7\u00F5es da biblioteca ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Bootstrap-Select ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " est\u00E3o dispon\u00EDveis. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "cx-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Sele\u00E7\u00E3o m\u00FAltipla");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "select", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Lasanha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Feijoada");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Churrasco");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "cx-select", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Filtro de op\u00E7\u00F5es");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Lasanha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Feijoada");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Churrasco");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "cx-select", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Bot\u00F5es e subt\u00EDtulos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "select", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "optgroup", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Pizza");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Lasanha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Macarr\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "optgroup", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Picanha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Alcatra");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Torresmo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "app-documentacao-template", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " Para op\u00E7\u00F5es carregadas de forma ass\u00EDncrona, \u00E9 necess\u00E1rio atualizar a propriedade ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "initTrigger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " para recarregar o componente. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "cx-select", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "N\u00FAmero da sorte");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](131, SelectComponent_option_131_Template, 2, 0, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](132, SelectComponent_option_132_Template, 2, 1, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectComponent_Template_button_click_133_listener() { return ctx.atualizaOpcoes(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, " Atualizar op\u00E7\u00F5es ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "nav", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectComponent_Template_a_click_138_listener() { return ctx.scrollTo("painelSelect"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, " Select b\u00E1sico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectComponent_Template_a_click_140_listener() { return ctx.scrollTo("painelSelectValidacao"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " Valida\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectComponent_Template_a_click_142_listener() { return ctx.scrollTo("painelSelectVariantes"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, " Configura\u00E7\u00F5es");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectComponent_Template_a_click_144_listener() { return ctx.scrollTo("painelSelectAsync"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, " Op\u00E7\u00F5es Ass\u00EDncronas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardTitle", "Select b\u00E1sico")("codeViewId", "viewSelectBasico")("htmlTabId", "htmlCodeSelectBasico")("htmlCode", ctx.htmlCodeSelectBasico);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardTitle", "Valida\u00E7\u00E3o")("codeViewId", "viewSelectValidacao")("htmlTabId", "htmlCodeSelectValidacao")("htmlCode", ctx.htmlCodeSelectValidacao)("tsTabId", "tsCodeSelectValidacao")("tsCode", ctx.tsCodeSelectValidacao);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formulario);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardTitle", "Configura\u00E7\u00F5es")("codeViewId", "viewSelectVariantes")("htmlTabId", "htmlCodeVariantes")("htmlCode", ctx.htmlCodeVariantes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardTitle", "Op\u00E7\u00F5es ass\u00EDncronas")("codeViewId", "viewSelectAsync")("htmlTabId", "htmlCodeSelectAsync")("htmlCode", ctx.htmlCodeSelectAsync)("tsTabId", "tsCodeSelectAsync")("tsCode", ctx.tsCodeSelectAsync);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("initTrigger", ctx.opcoesAsync);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.opcoesAsync == null ? null : ctx.opcoesAsync.length) == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.opcoesAsync);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](32, _c4, ctx.currentSection == "painelSelect"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](34, _c4, ctx.currentSection == "painelSelectValidacao"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](36, _c4, ctx.currentSection == "painelSelectVariantes"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](38, _c4, ctx.currentSection == "painelSelectAsync"));
    } }, directives: [_shared_components_documentacao_template_documentacao_template_component__WEBPACK_IMPORTED_MODULE_4__["DocumentacaoTemplateComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _guia_caixa_components_select_caixa_select_caixa_component__WEBPACK_IMPORTED_MODULE_5__["SelectCaixaComponent"], _guia_caixa_components_select_caixa_select_caixa_directive__WEBPACK_IMPORTED_MODULE_6__["SelectCaixaDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: "./select.component.html",
                host: { "(window:scroll)": "onScroll($event)" }
            }]
    }], function () { return [{ type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, { selectCaixa: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["selectTeste"]
        }], scrollElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["scrollElement"]
        }] }); })();


/***/ }),

/***/ "OsIZ":
/*!*********************************************************************!*\
  !*** ./src/app/demonstracao/componentes/inputs/inputs.component.ts ***!
  \*********************************************************************/
/*! exports provided: InputsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputsComponent", function() { return InputsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_shared_validators_date_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/validators/date.validator */ "FDju");
/* harmony import */ var _componentes_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../componentes-interface */ "pRMn");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _shared_components_documentacao_template_documentacao_template_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/documentacao-template/documentacao-template.component */ "r5ma");
/* harmony import */ var _guia_caixa_components_input_caixa_input_caixa_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../guia-caixa/components/input-caixa/input-caixa.component */ "k8ed");
/* harmony import */ var _guia_caixa_components_input_caixa_input_caixa_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../guia-caixa/components/input-caixa/input-caixa.directive */ "OBdX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");











const _c0 = ["scrollElement"];
const _c1 = function (a0) { return { "ng-invalid": a0 }; };
const _c2 = function () { return { "simpleDate": "Data inv\u00E1lida" }; };
const _c3 = function (a0) { return { "active": a0 }; };
class InputsComponent extends _componentes_interface__WEBPACK_IMPORTED_MODULE_3__["ComponentesInterface"] {
    constructor(fb, toastr) {
        super(toastr);
        this.fb = fb;
        this.toastr = toastr;
        this.CELLPHONE = '(00) 00000-0000';
        this.LANDLINE = '(00) 0000-0000';
        this.phoneMask = this.LANDLINE;
        this.phoneNumberLength = 0;
        this.phoneNumber = '';
        this.previusLength = 0;
        this.sectionOffset = 0;
        this.spiedTags = ['APP-DOCUMENTACAO-TEMPLATE'];
        this.currentSection = "painelInputBasico";
        this.formulario = this.fb.group({
            nome: ['Fulano da Silva'],
            tel: [11985163524, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10)]],
            idade: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(18), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(100)]],
            nascimento: ['01/01/1985', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, src_app_shared_validators_date_validator__WEBPACK_IMPORTED_MODULE_2__["DateValidator"].simpleDate]],
            mesAno: ['04/2020', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, src_app_shared_validators_date_validator__WEBPACK_IMPORTED_MODULE_2__["DateValidator"].simpleMonthDate]],
            texto: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(20)]]
        });
        this.mesError = [
            { "simpleMonthDate": "Data do tipo mês/ano inválida" }
        ];
        this.formularioLogin = this.fb.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            senha: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10)]]
        });
        this.formulario2 = this.fb.group({
            mensagem: ['Campo para mensagens grandes, com várias linhas.\nComo este exemplo.', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            comida: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            filme: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            marque: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].requiredTrue]],
            valor: [50, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(50)]],
            condicoes: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].requiredTrue]]
        });
        this.ngModelTeste = 'Teste';
        this.showTabsInputBasico = false;
        this.htmlCodeInputBasico = `<form>
  <cx-input>
    <label>Nome</label>
    <input inputCaixa placeholder="Digite seu nome aqui" value="Fulano da Silva">
  </cx-input>
</form>
  `.trim();
        this.showTabsInputClasse = false;
        this.htmlCodeInputClasse = `<form>
  <label>Input Caixa (Padrão)</label>
  <input class="form-control">

  <br>

  <label>Input Base</label>
  <input class="input-base">

  <br>

  <label>Input Info</label>
  <input class="form-control-info">

  <br>

  <label>Input Aux Dark</label>
  <input class="form-control-aux-dark">
</form>
  `.trim();
        this.showTabsValidacao = false;
        this.htmlCodeValidacao = `<form [formGroup]="formulario">
  <cx-input>
    <label>Texto</label>
    <input inputCaixa formControlName="texto" placeholder="Vazio ou pelo menos 5 caracteres">
  </cx-input>

  <cx-input>
    <label>Idade</label>
    <input inputCaixa formControlName="idade" placeholder="Obrigatório - Entre 18 e 100" type=number>
  </cx-input>
</form>

<cx-input>
  <label>NG Model</label>
  <input inputCaixa placeholder="Inválido se vazio" [(ngModel)]="ngModelTeste" #ctrl="ngModel" required
    [ngClass]="{'ng-invalid': ngModelTeste == ''}">
</cx-input>
  `.trim();
        this.tsCodeValidacao = `  import { Component } from '@angular/core';
  import { FormBuilder, Validators } from '@angular/forms';

  @Component({
      selector: 'app-formularios',
      templateUrl: './formularios.component.html',
      styleUrls: ['./formularios.component.scss']
  })
  export class FormulariosComponent {

    constructor(
      private fb: FormBuilder
    ) {}

    formulario = this.fb.group({
      texto: [null, [Validators.minLength(5)]],
      idade: [null, [Validators.required, Validators.min(18), Validators.max(100)]]
    });

    ngModelTeste = 'Teste';
  }
  `.trimRight();
        this.showTabsCustomValidacao = false;
        this.htmlCodeCustomValidacao = `<form [formGroup]="formulario">
  <cx-input [customErrors]='{"simpleDate": "Data inválida"}'>
    <label>Data de Nascimento</label>
    <input inputCaixa formControlName="nascimento" placeholder="dd/mm/aaaa">
  </cx-input>

  <cx-input [customErrors]="mesError">
    <label>Mês / Ano</label>
    <input inputCaixa formControlName="mesAno" placeholder="mm/aaaa">
  </cx-input>
</form>
  `.trim();
        this.tsCodeCustomValidacao = `  import { Component } from '@angular/core';
  import { FormBuilder, Validators } from '@angular/forms';

  @Component({
      selector: 'app-formularios',
      templateUrl: './formularios.component.html',
      styleUrls: ['./formularios.component.scss']
  })
  export class FormulariosComponent {

    constructor(
      private fb: FormBuilder
    ) {}

    /* dd/mm/aaaa */
    simpleDateValidator = (control: FormControl) => {
      const simpleDateRegexp = /([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
      return simpleDateRegexp.test(control.value) || control.value == ""
        ? null
        : { simpleDate: true };
    }

    /* mm/aaaa */
    simpleMonthDateValidator = (control: FormControl) => {
      const simpleDateRegexp = /^(0[1-9]|10|11|12)\/20[0-9]{2}$/i;
      return simpleDateRegexp.test(control.value) || control.value == ""
        ? null
        : { simpleMonthDate: true };
    }

    mesError = [
      { "simpleMonthDate": "Data do tipo mês/ano inválida" }
    ];

    formulario = this.fb.group({
      nascimento: ['01/01/1985', [Validators.required, simpleDateValidator]],
      mesAno: ['04/2020', [Validators.required, simpleMonthDateValidator]],
    });
  }
  `.trimRight();
        this.showTabsInputIcone = false;
        this.htmlCodeInputIcone = `<form [formGroup]="formularioLogin">
  <cx-input>
    <label>E-mail</label>
    <img src="/assets/images/caixa-logo-x.png" class="img-logo prefix-icon">
    <input inputCaixa formControlName="email" placeholder="Endereço de e-mail válido">
  </cx-input>

  <cx-input>
    <label>Senha</label>
    <i class="fa fa-key prefix-icon"></i>
    <input inputCaixa formControlName="senha" placeholder="Mínimo de 10 caracteres" type="password">
  </cx-input>
</form>
  `.trim();
        this.tsCodeInputIcone = `  import { Component } from '@angular/core';
  import { FormBuilder, Validators } from '@angular/forms';

  @Component({
      selector: 'app-formularios',
      templateUrl: './formularios.component.html',
      styleUrls: ['./formularios.component.scss']
  })
  export class FormulariosComponent {

    constructor(
      private fb: FormBuilder
    ) {}

    formularioLogin = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(10)]]
    });
  }
  `.trimRight();
        this.cssCodeInputIcone = `.img-logo {
  max-width: 20px;
  max-height: 20px;
}
  `.trimRight();
    }
    onPhoneChanged(phoneNumber) {
        this.phoneNumber = phoneNumber.target.value;
        this.phoneNumberLength = phoneNumber.target.value.length;
        if (this.phoneNumberLength <= 14 && this.phoneMask === this.CELLPHONE) {
            this.phoneMask = this.LANDLINE;
        }
        else if (this.phoneNumberLength === 14 && this.phoneMask === this.LANDLINE && this.previusLength === 14) {
            this.phoneMask = this.CELLPHONE;
        }
        this.previusLength = this.phoneNumberLength;
    }
}
InputsComponent.ɵfac = function InputsComponent_Factory(t) { return new (t || InputsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
InputsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputsComponent, selectors: [["app-inputs"]], viewQuery: function InputsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollElement = _t.first);
    } }, hostBindings: function InputsComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function InputsComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 219, vars: 47, consts: [[1, "titulo"], ["role", "tablist", 1, "nav", "nav-pills", "tab-caixa"], [1, "nav-item"], ["data-toggle", "tab", "href", "#visaoGeral", "role", "tab", 1, "nav-link", "text-uppercase", "active"], ["data-toggle", "tab", "href", "#api", "role", "tab", 1, "nav-link", "text-uppercase"], ["data-toggle", "tab", "href", "#exemplos", "role", "tab", 1, "nav-link", "text-uppercase"], [1, "tab-content"], ["id", "visaoGeral", "role", "tabpanel", 1, "tab-pane", "fade", "show", "active"], [1, "row", "no-gutters"], [1, "col-12", "col-xl-9", "pr-2"], ["scrollElement", ""], ["id", "painelInputBasico", 3, "cardTitle", "codeViewId", "htmlTabId", "htmlCode"], [1, "descricao"], [1, "citation-highlight"], [1, "conteudo"], [1, "row"], [1, "col-12", "col-md-6", "col-lg-6"], ["inputCaixa", "", "placeholder", "Digite seu nome aqui...", "value", "Jos\u00E9 da Silva"], ["id", "painelValidadores", 3, "cardTitle", "codeViewId", "htmlTabId", "htmlCode", "tsTabId", "tsCode"], [3, "formGroup"], ["inputCaixa", "", "formControlName", "texto", "placeholder", "Vazio ou pelo menos 20 caracteres"], ["inputCaixa", "", "formControlName", "idade", "placeholder", "Obrigat\u00F3rio - Entre 18 e 100", "type", "number"], ["inputCaixa", "", "placeholder", "Inv\u00E1lido se vazio", "required", "", 3, "ngModel", "ngClass", "ngModelChange"], ["ctrl", "ngModel"], ["id", "painelCustomValidadores", 3, "cardTitle", "codeViewId", "htmlTabId", "htmlCode", "tsTabId", "tsCode"], [3, "customErrors"], ["inputCaixa", "", "formControlName", "nascimento", "placeholder", "dd/mm/aaaa"], ["inputCaixa", "", "formControlName", "mesAno", "placeholder", "mm/aaaa"], ["id", "navSection", 1, "d-none", "col-3", "d-xl-flex", "justify-content-center"], [1, "position-fixed", "list-group", "list-group-caixa", "shadow-caixa", "border-0"], ["role", "button", 1, "list-group-item", "list-group-item-action", 3, "ngClass", "click"], ["id", "api", "role", "tabpanel", 1, "tab-pane", "fade"], [1, "col", "col-md-8"], [1, "header-subtitulo-caixa"], [1, "table-responsive"], [1, "table", "table-bordered", "table-caixa"], ["id", "exemplos", "role", "tabpanel", 1, "tab-pane", "fade"], ["id", "painelInputIcone", 3, "cardTitle", "codeViewId", "htmlTabId", "htmlCode", "tsTabId", "tsCode"], ["src", "assets/images/caixa-logo-x.png", 1, "img-logo", "prefix-icon"], ["inputCaixa", "", "formControlName", "email", "placeholder", "Endere\u00E7o de e-mail v\u00E1lido"], [1, "fa", "fa-key", "prefix-icon"], ["inputCaixa", "", "formControlName", "senha", "placeholder", "M\u00EDnimo de 10 caracteres", "type", "password"], ["id", "painelInputClasse", 3, "cardTitle", "codeViewId", "htmlTabId", "htmlCode"], [1, "form-control"], [1, "input-base"], [1, "form-control-info"], [1, "form-control-aux-dark"]], template: function InputsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Inputs\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Vis\u00E3o Geral ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " API ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Exemplos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "section", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "app-documentacao-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " A diretiva ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "inputCaixa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " utilizada em conjunto com o componente ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "<cx-input>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " permite a estiliza\u00E7\u00E3o e valida\u00E7\u00E3o autom\u00E1tica do campo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "cx-input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Nome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "app-documentacao-template", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " O componente exibir\u00E1 mensagens predefinidas para cada um dos \"Validators\" do Angular Forms. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "form", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "cx-input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Texto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "textarea", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "cx-input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Idade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "cx-input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "NG Model");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "input", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InputsComponent_Template_input_ngModelChange_54_listener($event) { return ctx.ngModelTeste = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "app-documentacao-template", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Validadores customizados podem ser utilizados passando-os como argumento pela propriedade ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "customErrors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, ", como um objeto ou um Array de objetos no formato: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "{ \"nomeDoErro\": \"Mensagem a ser exibida\" }");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "form", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "cx-input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Data de Nascimento");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "cx-input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "M\u00EAs / Ano");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "nav", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputsComponent_Template_a_click_81_listener() { return ctx.scrollTo("painelInputBasico"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " Inputs b\u00E1sicos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputsComponent_Template_a_click_83_listener() { return ctx.scrollTo("painelValidadores"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " Valida\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputsComponent_Template_a_click_85_listener() { return ctx.scrollTo("painelCustomValidadores"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " Valida\u00E7\u00E3o Customizada");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h5", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "InputCaixa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " Diretiva que permite a intera\u00E7\u00E3o entre os elementos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " e ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " com o componente ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "cx-input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Usar como: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "inputCaixa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "h5", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Cx-Input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " Componente que engloba o campo com a diretiva ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "inputCaixa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, ", e exibe os \u00EDcones e mensagens de feedback. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Usar como: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "inputCaixa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "h6", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Propriedades");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "table", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Nome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Descri\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "@Input( )");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "showFeedbackIcon: boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " Exibir \u00EDcone de feedback quando campo est\u00E1 v\u00E1lido ou inv\u00E1lido.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " Padr\u00E3o: true ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "@Input( )");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "showFeedbackMessage: boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, " Exibir mensagem de erro abaixo do campo quando est\u00E1 inv\u00E1lido.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, " Padr\u00E3o: true ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "@Input( )");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "customErrors: string | any[ ]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, " Validators personalizados que possuem suas pr\u00F3prias mensagens de feedback.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " Utiliza-se um array de objetos, onde cada validator deve ser representado como: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, " Padr\u00E3o: true ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "@Input( )");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "formato: string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, " Campo opcional para sugerir ao usu\u00E1rio o formato necess\u00E1rio para o campo.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, " Diferentemente do atributo placeholder, o formato ser\u00E1 exibido abaixo do campo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "app-documentacao-template", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, " Pode-se exibir \u00EDcones utilizando a classe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "prefix-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, " em qualquer elemento. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "form", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "cx-input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "cx-input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Senha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "app-documentacao-template", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, " Uma vers\u00E3o mais simples, sem a valida\u00E7\u00E3o autom\u00E1tica, pode ser utilizada apenas com a classe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "input-caixa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, " ou, para diferentes temas, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "input-caixa-(tema)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Input Caixa (Padr\u00E3o)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Input Base");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Input Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Input Aux Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardTitle", "Input b\u00E1sico")("codeViewId", "viewInputBasico")("htmlTabId", "htmlCodeInputBasico")("htmlCode", ctx.htmlCodeInputBasico);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardTitle", "Valida\u00E7\u00E3o")("codeViewId", "viewIValidacao")("htmlTabId", "htmlIdValidacao")("htmlCode", ctx.htmlCodeValidacao)("tsTabId", "tsIdValidacao")("tsCode", ctx.tsCodeValidacao);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formulario);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ngModelTeste)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](38, _c1, ctx.ngModelTeste == ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardTitle", "Valida\u00E7\u00E3o customizada")("codeViewId", "viewIValidacaoCustom")("htmlTabId", "htmlIdValidacaoCustom")("htmlCode", ctx.htmlCodeCustomValidacao)("tsTabId", "tsIdValidacaoCustom")("tsCode", ctx.tsCodeCustomValidacao);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formulario);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("customErrors", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](40, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("customErrors", ctx.mesError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](41, _c3, ctx.currentSection == "painelInputBasico"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](43, _c3, ctx.currentSection == "painelValidadores"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](45, _c3, ctx.currentSection == "painelCustomValidadores"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", "{", " \"nomeDoValidator\": \"Mensagem de erro do Validator\" ", "}", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardTitle", "\u00CDcones")("codeViewId", "viewIcone")("htmlTabId", "htmlIdIcone")("htmlCode", ctx.htmlCodeInputIcone)("tsTabId", "tsIdIcone")("tsCode", ctx.tsCodeInputIcone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formularioLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardTitle", "Classe")("codeViewId", "viewClasse")("htmlTabId", "htmlIdClasse")("htmlCode", ctx.htmlCodeInputClasse);
    } }, directives: [_shared_components_documentacao_template_documentacao_template_component__WEBPACK_IMPORTED_MODULE_5__["DocumentacaoTemplateComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _guia_caixa_components_input_caixa_input_caixa_component__WEBPACK_IMPORTED_MODULE_6__["InputCaixaComponent"], _guia_caixa_components_input_caixa_input_caixa_directive__WEBPACK_IMPORTED_MODULE_7__["InputCaixaDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"]], styles: [".img-logo[_ngcontent-%COMP%] {\n  max-width: 20px;\n  max-height: 20px;\n}\n\n#painelFormularios[_ngcontent-%COMP%] {\n  position: relative;\n  height: 75vh;\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtb25zdHJhY2FvL2NvbXBvbmVudGVzL2lucHV0cy9pbnB1dHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7QUFDRDs7QUFFQTtFQUNDLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC9kZW1vbnN0cmFjYW8vY29tcG9uZW50ZXMvaW5wdXRzL2lucHV0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctbG9nbyB7XHJcblx0bWF4LXdpZHRoOiAyMHB4O1xyXG5cdG1heC1oZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbiNwYWluZWxGb3JtdWxhcmlvcyB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGhlaWdodDogNzV2aDtcclxuXHRvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-inputs',
                templateUrl: './inputs.component.html',
                styleUrls: ['./inputs.component.scss'],
                host: { '(window:scroll)': 'onScroll($event)' }
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }]; }, { scrollElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["scrollElement"]
        }] }); })();


/***/ }),

/***/ "Q0Ph":
/*!****************************************************************************************!*\
  !*** ./src/app/demonstracao/componentes/datatable-demonstracao/datatable-api-props.ts ***!
  \****************************************************************************************/
/*! exports provided: datatableApiProps, datatableConfigProps, datatableConfigOptionsProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "datatableApiProps", function() { return datatableApiProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "datatableConfigProps", function() { return datatableConfigProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "datatableConfigOptionsProps", function() { return datatableConfigOptionsProps; });
const datatableApiProps = [
    {
        nome: `@Input()<br>settings: DataTableSettings`,
        descricao: `Configurações gerais da tabela.<br>
      Pode ser uma das configurações pré-definidas da classe DataTableConfig, ou uma configuração personalizada obtida através do método DataTableConfig.getDataTableSettings( )<br>
      Padrão: DatatableConfig.DEFAULT_SETTINGS`
    }, {
        nome: `@Input()<br>columnFilterType: DataTableColumnFilterType`,
        descricao: `Tipo de filtro individual por coluna. Pode ser 'input', 'select' ou 'none'.<br>
      Padrão: DataTableColumnFilterType.NONE`
    }, {
        nome: `@Input()<br>columnFilterPosition: DataTableColumnFilterPosition`,
        descricao: `Posição do filtro individual por coluna. Pode ser 'top', 'bottom' ou 'none'.<br>
      Obs.: Ao utilizar filtros definidos especificamente para cada coluna (por meio do th data-filter=""), é necessário definir um valor diferente de 'none' para essa propriedade.<br>
      Padrão: DataTableColumnFilterPosition.NONE`
    }, {
        nome: `@Input()<br>trigger: Subject<any>`,
        descricao: `Subject que dispara a reinicialização da tabela ao ser acionado pelo .next( ).<br>
      Obs.: A DataTable também pode ser recarregada pelo método reloadTable( )`
    }, {
        nome: `reloadTable( ): void`,
        descricao: `Reinicializa a tabela.`
    }, {
        nome: `updateSettings(settings: DataTableSettings): void`,
        descricao: `Atualiza as configurações da tabela.`
    }, {
        nome: `updateFilterColumnPosition(position: string): void`,
        descricao: `Atualiza a posição dos filtros individuais por coluna.`
    }, {
        nome: `updateFilterColumnType(type: string): void`,
        descricao: `Atualiza o tipo dos filtros individuais por coluna.`
    }
];
const datatableConfigProps = [
    {
        nome: `static DEFAULT_SETTINGS: DataTableSettings`,
        descricao: `Configuração padrão.`
    }, {
        nome: `static COMPLETE_SETTINGS: DataTableSettings`,
        descricao: `Configuração com todos os recursos.`
    }, {
        nome: `static COMPLETE_NO_BUTTON_SETTINGS: DataTableSettings`,
        descricao: `Configuração completa exceto botões.`
    }, {
        nome: `static PAGINATION_INFO_SETTINGS: DataTableSettings`,
        descricao: `Apenas paginação e informação de registros.`
    }, {
        nome: `getDataTableSettings(options: DataTableConfigOptions): DataTableSettings`,
        descricao: `Método que recebe um objeto options com um ou mais parâmetros e retorna a configuração desejada da DataTable.`
    }
];
const datatableConfigOptionsProps = [
    {
        nome: `showFilter: boolean`,
        descricao: `Exibir campo de filtro geral.`
    }, {
        nome: `showLength: boolean`,
        descricao: `Exibir campo select que permite selecionar o número de linhas por página.`
    }, {
        nome: `showButtons: boolean`,
        descricao: `Exibir botões.`
    }, {
        nome: `showInfo: boolean`,
        descricao: `Exibir informações no rodapé da tabela sobre o total de registros.`
    }, {
        nome: `showPagination: boolean`,
        descricao: `Exibir e realizar paginação.`
    }, {
        nome: `menuLength: number[ ]`,
        descricao: `Caso o 'showLength' esteja habilitado, permite informar quais as quantidades de linhas por página o usuário poderá escolher.`
    }
];


/***/ }),

/***/ "Tl4Q":
/*!************************************************************************!*\
  !*** ./src/app/demonstracao/componentes/componentes-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: ComponentesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentesRoutingModule", function() { return ComponentesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _componentes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./componentes.component */ "xyGQ");
/* harmony import */ var _componentes_basicos_cards_cards_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../componentes-basicos/cards/cards.component */ "ia4M");
/* harmony import */ var _componentes_basicos_mensagens_mensagens_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../componentes-basicos/mensagens/mensagens.component */ "LWRd");
/* harmony import */ var _datatable_demonstracao_datatable_demonstracao_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datatable-demonstracao/datatable-demonstracao.component */ "XiIV");
/* harmony import */ var _inputs_inputs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inputs/inputs.component */ "OsIZ");
/* harmony import */ var _select_select_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./select/select.component */ "OM9c");
/* harmony import */ var _stepper_demonstracao_stepper_demonstracao_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stepper-demonstracao/stepper-demonstracao.component */ "CrpL");
/* harmony import */ var _tabber_demonstracao_tabber_demonstracao_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tabber-demonstracao/tabber-demonstracao.component */ "2RtK");
/* harmony import */ var _card_button_demonstracao_card_button_demonstracao_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./card-button-demonstracao/card-button-demonstracao.component */ "mPP4");
/* harmony import */ var _timeline_demonstracao_timeline_demonstracao_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./timeline-demonstracao/timeline-demonstracao.component */ "6hVy");
/* harmony import */ var _button_control_demonstracao_button_control_demonstracao_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./button-control-demonstracao/button-control-demonstracao.component */ "d8Py");















const routes = [
    {
        path: "",
        component: _componentes_component__WEBPACK_IMPORTED_MODULE_2__["ComponentesCaixaComponent"],
        // canActivate: [AuthGuard],
        data: {
            title: "Componentes",
            breadcrumb: "Componentes"
        }
    },
    {
        path: "cards",
        component: _componentes_basicos_cards_cards_component__WEBPACK_IMPORTED_MODULE_3__["CardsComponent"],
        data: {
            title: "Cards",
            breadcrumb: "Cards",
            animation: "Cards"
        }
    },
    {
        path: "mensagens",
        component: _componentes_basicos_mensagens_mensagens_component__WEBPACK_IMPORTED_MODULE_4__["MensagensComponent"],
        data: {
            title: "Mensagens",
            breadcrumb: "Mensagens",
            animation: "Mensagens"
        }
    },
    {
        path: "inputs",
        component: _inputs_inputs_component__WEBPACK_IMPORTED_MODULE_6__["InputsComponent"],
        data: {
            title: "Inputs",
            breadcrumb: "Inputs",
            animation: "Inputs"
        }
    },
    {
        path: "select",
        component: _select_select_component__WEBPACK_IMPORTED_MODULE_7__["SelectComponent"],
        data: {
            title: "Select",
            breadcrumb: "Select",
            animation: "Select"
        }
    },
    {
        path: "stepper",
        component: _stepper_demonstracao_stepper_demonstracao_component__WEBPACK_IMPORTED_MODULE_8__["StepperDemonstracaoComponent"],
        data: {
            title: "Stepper",
            breadcrumb: "Stepper",
            animation: "Stepper"
        }
    },
    {
        path: "tabber",
        component: _tabber_demonstracao_tabber_demonstracao_component__WEBPACK_IMPORTED_MODULE_9__["TabberDemonstracaoComponent"],
        data: {
            title: "Tabber",
            breadcrumb: "Tabber",
            animation: "Tabber"
        }
    },
    {
        path: "card-button",
        component: _card_button_demonstracao_card_button_demonstracao_component__WEBPACK_IMPORTED_MODULE_10__["CardButtonDemonstracaoComponent"],
        data: {
            title: "Card-button",
            breadcrumb: "Card-button",
            animation: "Card-button"
        }
    },
    {
        path: "timeline",
        component: _timeline_demonstracao_timeline_demonstracao_component__WEBPACK_IMPORTED_MODULE_11__["TimelineDemonstracaoComponent"],
        data: {
            title: "Timeline",
            breadcrumb: "Timeline",
            animation: "Timeline"
        }
    },
    {
        path: "datatable",
        component: _datatable_demonstracao_datatable_demonstracao_component__WEBPACK_IMPORTED_MODULE_5__["DatatableDemonstracaoComponent"],
        data: {
            title: "Tabelas",
            breadcrumb: "Tabelas",
            animation: "Tabelas"
        }
    },
    {
        path: "button-control",
        component: _button_control_demonstracao_button_control_demonstracao_component__WEBPACK_IMPORTED_MODULE_12__["ButtonControlDemonstracaoComponent"],
        data: {
            title: "Button control",
            breadcrumb: "Button contro",
            animation: "Button contro"
        }
    },
    {
        path: "**",
        redirectTo: "",
        pathMatch: "full"
    }
];
class ComponentesRoutingModule {
}
ComponentesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ComponentesRoutingModule });
ComponentesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ComponentesRoutingModule_Factory(t) { return new (t || ComponentesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "XiIV":
/*!*****************************************************************************************************!*\
  !*** ./src/app/demonstracao/componentes/datatable-demonstracao/datatable-demonstracao.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: DatatableDemonstracaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableDemonstracaoComponent", function() { return DatatableDemonstracaoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-datatables */ "oTcB");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _componentes_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../componentes-interface */ "pRMn");
/* harmony import */ var src_app_guia_caixa_components_datatable_datatable_definitions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/guia-caixa/components/datatable/datatable-definitions */ "9Ex1");
/* harmony import */ var _datatable_api_props__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datatable-api-props */ "Q0Ph");
/* harmony import */ var _datatable_code_examples__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./datatable-code-examples */ "ngTx");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_demonstracao_componentes_datatable_demonstracao_random_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/demonstracao/componentes/datatable-demonstracao/random-data.service */ "uZDt");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "7g+E");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-highlightjs */ "dJsq");
/* harmony import */ var _shared_components_documentacao_template_documentacao_template_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/components/documentacao-template/documentacao-template.component */ "r5ma");
/* harmony import */ var _guia_caixa_components_datatable_datatable_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../guia-caixa/components/datatable/datatable.component */ "ixlL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _shared_components_code_fixed_nav_code_fixed_nav_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/components/code-fixed-nav/code-fixed-nav.component */ "j1XF");
/* harmony import */ var _shared_components_documentacao_api_table_documentacao_api_table_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/components/documentacao-api-table/documentacao-api-table.component */ "XNAu");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var _guia_caixa_components_card_caixa_card_caixa_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../guia-caixa/components/card-caixa/card-caixa.component */ "PZSm");





















const _c0 = ["tabela"];
const _c1 = ["tabela2"];
const _c2 = ["tabelaChildRows"];
const _c3 = ["scrollElement"];
function DatatableDemonstracaoComponent_tr_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r5.dish);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r5.ingredient);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r5.measurement);
} }
function DatatableDemonstracaoComponent_tr_133_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r6.dish);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r6.ingredient);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r6.measurement);
} }
function DatatableDemonstracaoComponent_cx_card_259_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r9.dish);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r9.ingredient);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r9.measurement);
} }
function DatatableDemonstracaoComponent_cx_card_259_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "cx-card", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Tabela");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "cx-datatable", 23, 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Prato");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Ingrediente");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Medida");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DatatableDemonstracaoComponent_cx_card_259_tr_19_Template, 9, 4, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("settings", ctx_r3.settings)("trigger", ctx_r3.dtTrigger);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.rows);
} }
function DatatableDemonstracaoComponent_cx_card_260_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r12 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-content", ctx_r11.childRowContent)("data-child-name", row_r12.id)("data-child-value", row_r12.dish);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r12.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r12.dish);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r12.ingredient);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r12.measurement);
} }
function DatatableDemonstracaoComponent_cx_card_260_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "cx-card", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Linhas afilhadas (em desenvolvimento)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "cx-datatable", 23, 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Prato");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Ingrediente");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Medida");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, DatatableDemonstracaoComponent_cx_card_260_tr_20_Template, 11, 7, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("settings", ctx_r4.settings)("trigger", ctx_r4.dtTrigger);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.rows);
} }
class DatatableDemonstracaoComponent extends _componentes_interface__WEBPACK_IMPORTED_MODULE_3__["ComponentesInterface"] {
    constructor(toastr, fb, randomDataService, spinner, cdr) {
        super(toastr);
        this.toastr = toastr;
        this.fb = fb;
        this.randomDataService = randomDataService;
        this.spinner = spinner;
        this.cdr = cdr;
        this.examples = _datatable_code_examples__WEBPACK_IMPORTED_MODULE_6__["DataTableCodeExamples"];
        this.formDTConfig = this.fb.group({
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
        this.spiedTags = ["APP-DOCUMENTACAO-TEMPLATE"];
        this.sectionOffset = 0;
        this.currentSection = "painelTabelaDatatable";
        this.rows = [];
        this.dtCompleteOptions = {};
        this.dtCustomOptions = {};
        this.dtSimpleOptions = {};
        this.settings = src_app_guia_caixa_components_datatable_datatable_definitions__WEBPACK_IMPORTED_MODULE_4__["DataTableConfig"].DEFAULT_SETTINGS;
        this.settingsPadrao = src_app_guia_caixa_components_datatable_datatable_definitions__WEBPACK_IMPORTED_MODULE_4__["DataTableConfig"].DEFAULT_SETTINGS;
        this.settingsCompleta = src_app_guia_caixa_components_datatable_datatable_definitions__WEBPACK_IMPORTED_MODULE_4__["DataTableConfig"].COMPLETE_SETTINGS;
        this.settingsCompletaSemBotoes = src_app_guia_caixa_components_datatable_datatable_definitions__WEBPACK_IMPORTED_MODULE_4__["DataTableConfig"].COMPLETE_NO_BUTTON_SETTINGS;
        this.settingsInfo = src_app_guia_caixa_components_datatable_datatable_definitions__WEBPACK_IMPORTED_MODULE_4__["DataTableConfig"].PAGINATION_INFO_SETTINGS;
        this.settingsSimples = src_app_guia_caixa_components_datatable_datatable_definitions__WEBPACK_IMPORTED_MODULE_4__["DataTableConfig"].SIMPLE_SETTINGS;
        this.settingsCustom = src_app_guia_caixa_components_datatable_datatable_definitions__WEBPACK_IMPORTED_MODULE_4__["DataTableConfig"].getDataTableSettings({
            showInfo: true,
            showPagination: true,
            showLength: true,
            menuLength: [5, 10, 15]
        });
        this.settingsComTodosBotoes = src_app_guia_caixa_components_datatable_datatable_definitions__WEBPACK_IMPORTED_MODULE_4__["DataTableConfig"].getDataTableSettings({
            buttons: [
                src_app_guia_caixa_components_datatable_datatable_definitions__WEBPACK_IMPORTED_MODULE_4__["DataTableButtons"].EXCEL.button,
                src_app_guia_caixa_components_datatable_datatable_definitions__WEBPACK_IMPORTED_MODULE_4__["DataTableButtons"].PRINT.button,
            ],
            showButtons: true,
            showFilter: true,
            showInfo: true,
            showLength: true,
            showPagination: true,
            showProcessing: true
        });
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.navItems = [
            { id: "painelDatatable", name: "Configuração" },
            { id: "painelDatatableFiltros", name: "Filtros por coluna" },
            { id: "painelDatatableReinicializacao", name: "Reinicialização" }
        ];
        this.propsApi = _datatable_api_props__WEBPACK_IMPORTED_MODULE_5__["datatableApiProps"];
        this.propsConfig = _datatable_api_props__WEBPACK_IMPORTED_MODULE_5__["datatableConfigProps"];
        this.propsConfigOptions = _datatable_api_props__WEBPACK_IMPORTED_MODULE_5__["datatableConfigOptionsProps"];
        this.filterPosition = "";
        this.cols = 0;
        this.trigger = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.showTable = true;
        this.codeDataFilterInput = `<th data-filter="input">Título</th>`;
        this.codeDataFilterSelect = `<th data-filter="select">Título</th>`;
        this.codeDataFilterAllColumns = `<cx-datatable columnFilterPosition="bottom" columnFilterType="select">...</cx-datatable>`;
        this.codeHtmlTemplateString = `<cx-datatable #tabelaExemplo>...</cx-datatable>`;
        this.childRowContent = [];
    }
    ngOnInit() {
        this.dtSimpleOptions = src_app_guia_caixa_components_datatable_datatable_definitions__WEBPACK_IMPORTED_MODULE_4__["DataTableConfig"].SIMPLE_SETTINGS;
        this.dtCompleteOptions = src_app_guia_caixa_components_datatable_datatable_definitions__WEBPACK_IMPORTED_MODULE_4__["DataTableConfig"].COMPLETE_SETTINGS;
        this.dtCustomOptions = src_app_guia_caixa_components_datatable_datatable_definitions__WEBPACK_IMPORTED_MODULE_4__["DataTableConfig"].getDataTableSettings({
            buttons: [src_app_guia_caixa_components_datatable_datatable_definitions__WEBPACK_IMPORTED_MODULE_4__["DataTableConfig"].DEFAULT_BUTTONS.EXCEL],
            showInfo: true,
            showFilter: true,
            showPagination: true,
            menuLength: [5, 10, 50]
        });
    }
    ngOnDestroy() {
        this.dtTrigger.unsubscribe();
    }
    updateSettings(newConfig) {
        this.settings = JSON.parse(JSON.stringify(newConfig));
        this.cdr.detectChanges();
        this.table.updateSettings(this.settings);
        /*     this.formDTConfig.get("columnFilterType").setValue(this.settings.columnFilterType);
            this.formDTConfig.get("columnFilterPosition").setValue(this.settings.columnFilterPosition); */
    }
    updateConfigOption(option, value) {
        switch (option) {
            case "buttons":
                this.settings["buttons"] = value ? src_app_guia_caixa_components_datatable_datatable_definitions__WEBPACK_IMPORTED_MODULE_4__["DatatableDefaultButtonsList"] : [];
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
    getTableConfig() {
        if (this.formDTConfig.get("showButtons").value) {
            this.formDTConfig.get("buttons").setValue(src_app_guia_caixa_components_datatable_datatable_definitions__WEBPACK_IMPORTED_MODULE_4__["DatatableDefaultButtonsList"]);
        }
        else {
            this.formDTConfig.get("buttons").setValue([]);
        }
        const newConfig = src_app_guia_caixa_components_datatable_datatable_definitions__WEBPACK_IMPORTED_MODULE_4__["DataTableConfig"].getDataTableSettings(this.formDTConfig.value);
        this.settings = JSON.parse(JSON.stringify(newConfig));
        this.table.updateSettings(this.settings);
        this.tableChildRows.updateSettings(this.settings);
    }
    hasProperty(prop) {
        return this.settings.dom.toLowerCase().includes(prop);
    }
    printConfig() {
        const configPrint = JSON.parse(JSON.stringify(this.settings));
        configPrint["language"] = null;
        return configPrint;
    }
    setFilterPosition(position) {
        this.table.updateFilterColumnPosition(position);
    }
    consultarDados() {
        if (!this.rows || (this.rows && this.rows.length < 1)) {
            this.fetchData();
        }
    }
    fetchData() {
        this.spinner.show("global");
        this.randomDataService.getFoodData(100).subscribe((foodArray) => {
            this.rows = foodArray;
            /*       if (this.table) {
                    this.table.reloadTable();
                  } */
            this.dtTrigger.next();
            this.spinner.hide("global");
        });
    }
    atualizar() {
        // this.getTableConfig();
        this.settings = src_app_guia_caixa_components_datatable_datatable_definitions__WEBPACK_IMPORTED_MODULE_4__["DataTableConfig"].PAGINATION_INFO_SETTINGS;
        this.table.reloadTable();
    }
}
DatatableDemonstracaoComponent.ɵfac = function DatatableDemonstracaoComponent_Factory(t) { return new (t || DatatableDemonstracaoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_demonstracao_componentes_datatable_demonstracao_random_data_service__WEBPACK_IMPORTED_MODULE_9__["RandomDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
DatatableDemonstracaoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DatatableDemonstracaoComponent, selectors: [["app-tabelas"]], viewQuery: function DatatableDemonstracaoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_1__["DataTableDirective"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.datatableElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table2 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tableChildRows = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollElement = _t.first);
    } }, hostBindings: function DatatableDemonstracaoComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function DatatableDemonstracaoComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 261, vars: 40, consts: [[1, "titulo", "mb-0"], [1, "my-4"], [1, "citation-highlight"], ["target", "_blank", "href", "https://www.npmjs.com/package/angular-datatables", 1, "text-destaque"], [1, "alert", "alert-outline-warning"], [1, "lista-alert"], ["href", "https://datatables.net/forums/discussion/30847/cannot-use-colspan-in-tbody", "target", "_blank"], [1, "font-fam-bold"], [3, "highlight"], ["role", "tablist", 1, "nav", "nav-pills", "tab-caixa"], [1, "nav-item"], ["data-toggle", "tab", "href", "#visaoGeral", "role", "tab", 1, "nav-link", "text-uppercase", "active"], ["data-toggle", "tab", "href", "#api", "role", "tab", 1, "nav-link", "text-uppercase"], ["data-toggle", "tab", "href", "#exemplos", "role", "tab", 1, "nav-link", "text-uppercase", 3, "click"], [1, "tab-content"], ["id", "visaoGeral", "role", "tabpanel", 1, "tab-pane", "fade", "show", "active"], [1, "row", "no-gutters"], [1, "col-12", "col-xl-9", "pr-2"], ["scrollElement", ""], ["id", "painelDatatable", 3, "cardTitle", "codeViewId", "htmlTabId", "htmlCode", "tsTabId", "tsCode"], [1, "descricao"], ["data-toggle", "collapse", "href", "#conteudoPainelDatatable", 1, "btn", "btn-accent", 3, "click"], ["id", "conteudoPainelDatatable", 1, "conteudo", "collapse"], [3, "settings", "trigger"], ["datatable", "", 1, "table", "table-striped", "table-hover"], [4, "ngFor", "ngForOf"], ["id", "painelDatatableFiltros", 3, "cardTitle", "codeViewId", "htmlTabId", "htmlCode", "tsTabId", "tsCode"], [1, "my-2"], ["data-toggle", "collapse", "href", "#conteudoPainelFiltro", 1, "btn", "btn-accent", 3, "click"], ["id", "conteudoPainelFiltro", 1, "conteudo", "collapse"], ["columnFilterPosition", "top", 3, "settings", "trigger"], ["data-filter", "input"], ["data-filter", "select"], ["id", "painelDatatableReinicializacao", 3, "cardTitle", "codeViewId", "showCodeButton"], ["id", "conteudoPainelReload", 1, "conteudo", "collapse"], ["id", "navSection", 1, "d-none", "col-3", "d-xl-flex", "pl-4"], [3, "items", "currentSection"], ["id", "api", "role", "tabpanel", 1, "tab-pane", "fade"], [1, "card"], [1, "card-body"], [3, "props"], ["titulo", "DataTableConfig", "descricao", "Classe de configura\u00E7\u00F5es pr\u00E9-definidas e m\u00E9todos auxiliares", 3, "props"], ["titulo", "DataTableConfigOptions", "descricao", "Par\u00E2metros para o m\u00E9todo DataTableConfig.getDataTableSettings( )", 3, "props"], ["id", "exemplos", "role", "tabpanel", 1, "tab-pane", "fade"], ["id", "cardFiltros", 1, "card", "mb-4"], [3, "formGroup"], [1, "subtitulo", "mb-4"], [1, "row", "align-items-center", "mb-3"], [1, "col-2"], [1, "custom-control", "custom-checkbox"], ["formControlName", "showButtons", "type", "checkbox", "id", "checkBotoes", 1, "custom-control-input", 3, "checked", "change"], ["for", "checkBotoes", 1, "custom-control-label"], ["formControlName", "showFilter", "type", "checkbox", "id", "checkFiltro", 1, "custom-control-input", 3, "checked", "change"], ["for", "checkFiltro", 1, "custom-control-label"], ["formControlName", "showPagination", "type", "checkbox", "id", "checkPaging", 1, "custom-control-input", 3, "checked", "change"], ["for", "checkPaging", 1, "custom-control-label"], ["formControlName", "showInfo", "type", "checkbox", "id", "checkInfo", 1, "custom-control-input", 3, "checked", "change"], ["for", "checkInfo", 1, "custom-control-label"], ["formControlName", "showLength", "type", "checkbox", "id", "checkLength", 1, "custom-control-input", 3, "checked", "change"], ["for", "checkLength", 1, "custom-control-label"], [1, "row"], [1, "col-3", "my-3"], ["formControlName", "columnFilterType", 3, "ngModelChange"], ["value", "input", "selected", ""], ["value", "select"], ["formControlName", "columnFilterPosition", 3, "ngModelChange"], ["value", "top", "selected", ""], ["value", "bottom"], [1, "btn", "btn-accent", 3, "click"], [1, "fa", "fa-cog", "mr-2"], [1, "fa", "fa-sync", "mr-2"], [1, "fa", "fa-eye", "mr-2"], [1, "my-5"], ["id", "cardTabelaSandbox", "class", "my-3", 4, "ngIf"], ["id", "cardTabelaSandboxChildRows", "class", "card my-3", 4, "ngIf"], ["id", "cardTabelaSandbox", 1, "my-3"], [1, "card-header"], [1, "subtitulo"], ["tabela", ""], ["id", "cardTabelaSandboxChildRows", 1, "card", "my-3"], ["tabelaChildRows", ""], ["datatable", "", 1, "table", "table-striped"], [1, "table-expand-button"], [1, "fa", "fa-plus"]], template: function DatatableDemonstracaoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " DataTable\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "O componente ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "cx-datatable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " em conjunto com a diretiva ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "datatable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " adiciona funcionalidades especiais a tabelas comuns como filtro, ordena\u00E7\u00E3o, pagina\u00E7\u00E3o, exporta\u00E7\u00E3o em .xls e impress\u00E3o.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "O componente implementa a biblioteca ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Angular + Datatables");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Este componente ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "n\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " funciona nas seguintes situa\u00E7\u00F5es: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Tabela com 'colspan' no 'tbody' ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, ". A biblioteca DataTables exige que todas as linhas do 'tbody' tenham a mesma quantidade de colunas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " OBS: \u00C9 poss\u00EDvel contornar essa limita\u00E7\u00E3o acrescentando os 'td's faltantes com 'display: none', mas os efeitos s\u00E3o imprevis\u00EDveis. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Tabela dentro de outra tabela");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "HTML:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "code", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Vis\u00E3o Geral ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " API ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatatableDemonstracaoComponent_Template_a_click_43_listener() { return ctx.consultarDados(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Exemplos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "section", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "app-documentacao-template", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "O atributo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " recebe um objeto do tipo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "DataTableSettings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " com a configura\u00E7\u00E3o desejada da tabela, informando quais elementos ser\u00E3o exibidos.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "A classe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "DataTableConfig");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " possui configura\u00E7\u00F5es pr\u00E9-definidas mas pode-se utilizar o m\u00E9todo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "getDataTableSettings( )");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " para definir configura\u00E7\u00F5es customizadas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Os elementos configur\u00E1veis s\u00E3o: Bot\u00F5es, Filtro geral, Quantidade de linhas por p\u00E1gina, Informativo e Pagina\u00E7\u00E3o.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Caso o atributo n\u00E3o seja informado \u00E9 aplicada a configura\u00E7\u00E3o padr\u00E3o, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "DataTableConfig.DEFAULT_SETTINGS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatatableDemonstracaoComponent_Template_button_click_76_listener() { return ctx.consultarDados(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Exibir tabela");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "cx-datatable", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "table", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Prato");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Ingrediente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Medida");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, DatatableDemonstracaoComponent_tr_90_Template, 7, 3, "tr", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "app-documentacao-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Filtros individuais por coluna podem ser acrescentados com os atributos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "columnFilterType: DataTableColumnFilterType");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " (\"input\" ou \"select\") e ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "columnFilterPosition: DataTableColumnFilterPosition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " (\"top\" ou \"bottom\"). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " Neste caso abaixo, todas as colunas ter\u00E3o um campo de filtro do tipo select na parte de baixo da tabela: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "code", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " Caso os filtros precisem ser informados coluna a coluna, deve-se atribuir apenas o ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "columnFilterPosition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, ", e depois, em cada ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " do header, informar o tipo do filtro desta forma: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "code", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " ou ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "pre", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "code", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatatableDemonstracaoComponent_Template_button_click_119_listener() { return ctx.consultarDados(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Exibir tabela");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "cx-datatable", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "table", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Prato");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Ingrediente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Medida");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](133, DatatableDemonstracaoComponent_tr_133_Template, 7, 3, "tr", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "app-documentacao-template", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Na grande maioria dos casos os dados das tabelas s\u00E3o carregados de fontes ass\u00EDncronas, como uma consulta a um servi\u00E7o. Assim, quando os dados da tabela forem atualizados, h\u00E1 duas maneiras de reinicializar a DataTable.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Uma delas \u00E9 a forma exibida nos exemplos anteriores. O componente ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "cx-datatable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, " recebe no atributo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "trigger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " um ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, ". Quando for necess\u00E1rio atualizar a tabela, basta chamar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "subject.next( )");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "A alternativa \u00E9 acessar o componente diretamente. Coloca-se uma template string no componente ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "cx-datatable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, ", e ent\u00E3o o seleciona utilizando o recurso ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "@ViewChild");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, ". Para atualizar a tabela, chama-se o m\u00E9todo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "datatable.reloadTable( )");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "OBS: O atributo \"static: true\" na configura\u00E7\u00E3o do @ViewChild \u00E9 necess\u00E1rio quando h\u00E1 a possibilidade da tabela ser retirada do DOM, estando dentro de um ngIf, por exemplo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "HTML:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "code", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "TS:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "code", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "nav", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "app-code-fixed-nav", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "app-documentacao-api-table", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "app-documentacao-api-table", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "app-documentacao-api-table", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "form", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "h5", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Op\u00E7\u00F5es");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DatatableDemonstracaoComponent_Template_input_change_194_listener() { return ctx.getTableConfig(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "label", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, " Bot\u00F5es ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "input", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DatatableDemonstracaoComponent_Template_input_change_199_listener() { return ctx.getTableConfig(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "label", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, " Filtro Geral ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DatatableDemonstracaoComponent_Template_input_change_204_listener() { return ctx.getTableConfig(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "label", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, " Pagina\u00E7\u00E3o ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "input", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DatatableDemonstracaoComponent_Template_input_change_209_listener() { return ctx.getTableConfig(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "label", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, " Informativo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "input", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DatatableDemonstracaoComponent_Template_input_change_214_listener() { return ctx.getTableConfig(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "label", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, " Linhas por p\u00E1gina ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Filtro por coluna");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "ng-select", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DatatableDemonstracaoComponent_Template_ng_select_ngModelChange_221_listener($event) { return ctx.updateConfigOption("columnFilterType", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "ng-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "Nenhum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "ng-option", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "Campo simples");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "ng-option", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "Campo select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "Posi\u00E7\u00E3o do filtro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "ng-select", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DatatableDemonstracaoComponent_Template_ng_select_ngModelChange_231_listener($event) { return ctx.setFilterPosition($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "ng-option", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "Topo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "ng-option", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "Rodap\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "button", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatatableDemonstracaoComponent_Template_button_click_238_listener() { return ctx.updateSettings(ctx.settingsPadrao); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, " Configura\u00E7\u00E3o Padr\u00E3o ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "button", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatatableDemonstracaoComponent_Template_button_click_242_listener() { return ctx.updateSettings(ctx.settingsComTodosBotoes); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](243, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, " Configura\u00E7\u00E3o Completa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "button", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatatableDemonstracaoComponent_Template_button_click_246_listener() { return ctx.updateSettings(ctx.settingsSimples); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](247, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, " Configura\u00E7\u00E3o Simples ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "button", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatatableDemonstracaoComponent_Template_button_click_251_listener() { return ctx.fetchData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](252, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, " Buscar novos dados ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "button", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatatableDemonstracaoComponent_Template_button_click_255_listener() { return ctx.showTable = !ctx.showTable; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](256, "i", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, " Exibir / Ocultar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](258, "hr", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](259, DatatableDemonstracaoComponent_cx_card_259_Template, 20, 3, "cx-card", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](260, DatatableDemonstracaoComponent_cx_card_260_Template, 21, 3, "cx-card", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.examples.codeDescricao);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardTitle", "Configura\u00E7\u00E3o")("codeViewId", "codePainelDatatable")("htmlTabId", "htmlCodeDatatable")("htmlCode", ctx.examples.htmlCodeDatatable)("tsTabId", "tsCodeDatatable")("tsCode", ctx.examples.tsCodeDatatable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("settings", ctx.settingsCompleta)("trigger", ctx.dtTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.rows);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardTitle", "Filtros por coluna")("codeViewId", "codePainelFiltros")("htmlTabId", "htmlCodeDatatableFilter")("htmlCode", ctx.examples.htmlCodeDatatableFilter)("tsTabId", "tsCodeDatatableFilter")("tsCode", ctx.examples.tsCodeDatatableFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.codeDataFilterAllColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.codeDataFilterInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.codeDataFilterSelect);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("settings", ctx.settingsCustom)("trigger", ctx.dtTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.rows.slice(0, 10));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardTitle", "Reinicializa\u00E7\u00E3o")("codeViewId", "codePainelReload")("showCodeButton", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.codeHtmlTemplateString);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.examples.codeTsTemplateString);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.navItems)("currentSection", ctx.currentSection);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("props", ctx.propsApi);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("props", ctx.propsConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("props", ctx.propsConfigOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formDTConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.settings.configOptions.showButtons);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.settings.configOptions.showFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.settings.configOptions.showPagination);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.settings.configOptions.showInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.settings.configOptions.showLength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showTable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showTable);
    } }, directives: [ngx_highlightjs__WEBPACK_IMPORTED_MODULE_11__["Highlight"], _shared_components_documentacao_template_documentacao_template_component__WEBPACK_IMPORTED_MODULE_12__["DocumentacaoTemplateComponent"], _guia_caixa_components_datatable_datatable_component__WEBPACK_IMPORTED_MODULE_13__["DataTableComponent"], angular_datatables__WEBPACK_IMPORTED_MODULE_1__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _shared_components_code_fixed_nav_code_fixed_nav_component__WEBPACK_IMPORTED_MODULE_15__["CodeFixedNavComponent"], _shared_components_documentacao_api_table_documentacao_api_table_component__WEBPACK_IMPORTED_MODULE_16__["DocumentacaoApiTableComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControlName"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__["NgSelectComponent"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__["ɵr"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _guia_caixa_components_card_caixa_card_caixa_component__WEBPACK_IMPORTED_MODULE_18__["CardCaixaComponent"]], styles: [".lista-alert[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  margin-bottom: 0;\n}\n.lista-alert[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtb25zdHJhY2FvL2NvbXBvbmVudGVzL2RhdGF0YWJsZS1kZW1vbnN0cmFjYW8vZGF0YXRhYmxlLWRlbW9uc3RyYWNhby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNHLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDSDtBQUFHO0VBQ0csa0JBQUE7QUFFTiIsImZpbGUiOiJzcmMvYXBwL2RlbW9uc3RyYWNhby9jb21wb25lbnRlcy9kYXRhdGFibGUtZGVtb25zdHJhY2FvL2RhdGF0YWJsZS1kZW1vbnN0cmFjYW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdGEtYWxlcnQge1xyXG4gICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICBsaSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatatableDemonstracaoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-tabelas",
                templateUrl: "./datatable-demonstracao.component.html",
                styleUrls: ["./datatable-demonstracao.component.scss"],
                host: { "(window:scroll)": "onScroll($event)" }
            }]
    }], function () { return [{ type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] }, { type: src_app_demonstracao_componentes_datatable_demonstracao_random_data_service__WEBPACK_IMPORTED_MODULE_9__["RandomDataService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { datatableElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [angular_datatables__WEBPACK_IMPORTED_MODULE_1__["DataTableDirective"]]
        }], table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["tabela"]
        }], table2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["tabela2"]
        }], tableChildRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["tabelaChildRows"]
        }], scrollElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["scrollElement"]
        }] }); })();


/***/ }),

/***/ "bWHl":
/*!****************************************************************************************!*\
  !*** ./src/app/demonstracao/componentes/stepper-demonstracao/stepper-code-examples.ts ***!
  \****************************************************************************************/
/*! exports provided: StepperCodeExamples */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepperCodeExamples", function() { return StepperCodeExamples; });
class StepperCodeExamples {
}
StepperCodeExamples.codeDescricao = `<cx-stepper
   [steps]="passos" 
   [currentStep]="passoAtual"
   (changeStep)="passoAtual = $event">
 </cx-stepper>`.trim();
StepperCodeExamples.codeTsDescricao = `  passos: StepperItem[] = [
   { title: "Primeiro passo" },
   { title: "Segundo passo" },
   { title: "Terceiro passo" },
   { title: "Quarto passo" },
   { title: "Quinto passo" }
 ];
 passoAtual = 0;`.trim();
StepperCodeExamples.htmlCodeStepperPadrao = `<cx-stepper [steps]="passos" [currentStep]="passoAtual" (changeStep)="passoAtual = $event"></cx-stepper>
 
 <div *ngFor="let passo of passos; let i = index">
   <ng-container *ngIf="i == passoAtual">
     <h2 class="text-center">{{ passo }}</h2>
 
     <button [disabled]="passoAtual == 0"
     (click)="passoAtual = passoAtual - 1" class="btn btn-cancel mx-2">
         Voltar
     </button>
 
     <button [disabled]="passoAtual == passos.length - 1"
     (click)="passoAtual = passoAtual + 1" class="btn btn-accent mx-2">
         Avançar
     </button>
   </ng-container>
 </div>`.trim();
StepperCodeExamples.tsCodeStepperPadrao = `  import { Component } from '@angular/core';
 
   @Component({
       selector: 'app-stepper',
       templateUrl: './stepper.component.html',
       styleUrls: ['./stepper.component.scss']
   })
   export class StepperComponent {
 
     constructor() {}
 
     passoAtual = 0;
 
     passos = [
       'Primeiro passo',
       'Segundo passo',
       'Terceiro passo',
       'Quarto passo',
       'Passo final'
     ];
   }
   `.trimRight();
StepperCodeExamples.htmlCodeStepperGuiado = `<cx-stepper [freeNavigation]="false" [steps]="passos" [currentStep]="passoAtual" (changeStep)="passoAtual = $event"></cx-stepper>
 
 <div *ngFor="let passo of passos; let i = index">
   <ng-container *ngIf="i == passoAtual">
     <h2 class="text-center">{{ passo }}</h2>
 
     <button [disabled]="passoAtual == 0"
     (click)="passoAtual = passoAtual - 1" class="btn btn-cancel mx-2">
         Voltar
     </button>
 
     <button [disabled]="passoAtual == passos.length - 1"
     (click)="passoAtual = passoAtual + 1" class="btn btn-accent mx-2">
         Avançar
     </button>
   </ng-container>
 </div>`.trim();
StepperCodeExamples.tsCodeStepperGuiado = `  import { Component } from '@angular/core';
 
   @Component({
       selector: 'app-stepper',
       templateUrl: './stepper.component.html',
       styleUrls: ['./stepper.component.scss']
   })
   export class StepperComponent {
 
     constructor() {}
 
     passoAtual = 0;
 
     passos = [
       'Primeiro passo',
       'Segundo passo',
       'Terceiro passo',
       'Quarto passo',
       'Passo final'
     ];
   }
   `.trimRight();
StepperCodeExamples.htmlCodeStepperTemplate = `<cx-stepper [steps]="passos" #stepperExemplo (changeStep)="passoAtual = $event"></cx-stepper>
 
   <div *ngFor="let passo of passos; let i = index">
      <ng-container *ngIf="i == passoAtual">
         <h2 class="text-center">{{ passo }}</h2>
      </ng-container>
   </div>
 
   <button [disabled]="stepperExemplo.currentStep == 0"
   (click)="stepperExemplo.first()" class="btn btn-aux mx-2">
      Primeiro
   </button>
 
   <button [disabled]="stepperExemplo.currentStep == 0"
   (click)="stepperExemplo.previous()" class="btn btn-cancel mx-2">
      Voltar
   </button>
 
   <button [disabled]="stepperExemplo.currentStep == passos.length - 1"
   (click)="stepperExemplo.next()" class="btn btn-accent mx-2">
      Avançar
   </button>`.trim();
StepperCodeExamples.tsCodeStepperTemplate = `  import { Component } from '@angular/core';
 
   @Component({
       selector: 'app-stepper',
       templateUrl: './stepper.component.html',
       styleUrls: ['./stepper.component.scss']
   })
   export class StepperComponent {
 
     constructor() {}
 
     passoAtual = 0;
 
     passos = [
       'Primeiro passo',
       'Segundo passo',
       'Terceiro passo',
       'Quarto passo',
       'Passo final'
     ];
   }
   `.trimRight();
StepperCodeExamples.htmlCodeStepperInterno = `<cx-stepper [steps]="passos" #stepperInterno>
   <div *cxStepper>
      <h2 class="text-center">Primeiro conteúdo interno</h2>
   </div>
 
   <div *cxStepper>
      <h2 class="text-center">Segundo conteúdo interno</h2>
   </div>
 
   <div *cxStepper>
      <h2 class="text-center">Terceiro conteúdo interno</h2>
   </div>
 
   <div *cxStepper>
      <h2 class="text-center">Quarto conteúdo interno</h2>
   </div>
 
   <div *cxStepper>
      <h2 class="text-center">Quinto conteúdo interno</h2>
   </div>
 </cx-stepper>
 
 <button [disabled]="stepperInterno.currentStep == 0"
 (click)="stepperInterno.first()" class="btn btn-aux mx-2">
   Primeiro
 </button>
 
 <button [disabled]="stepperInterno.currentStep == 0"
 (click)="stepperInterno.previous()" class="btn btn-cancel mx-2">
   Voltar
 </button>
 
 <button [disabled]="stepperInterno.currentStep == passos.length - 1"
 (click)="stepperInterno.next()" class="btn btn-accent mx-2">
   Avançar
 </button>`.trim();
StepperCodeExamples.tsCodeStepperInterno = `  import { Component } from '@angular/core';
 
   @Component({
       selector: 'app-stepper',
       templateUrl: './stepper.component.html',
       styleUrls: ['./stepper.component.scss']
   })
   export class StepperComponent {
 
     constructor() {}
 
     passos = [
       'Primeiro passo',
       'Segundo passo',
       'Terceiro passo',
       'Quarto passo',
       'Passo final'
     ];
 
   }
   `.trimRight();


/***/ }),

/***/ "d8Py":
/*!***************************************************************************************************************!*\
  !*** ./src/app/demonstracao/componentes/button-control-demonstracao/button-control-demonstracao.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: ButtonControlDemonstracaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonControlDemonstracaoComponent", function() { return ButtonControlDemonstracaoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class ButtonControlDemonstracaoComponent {
    constructor() { }
    ngOnInit() {
    }
}
ButtonControlDemonstracaoComponent.ɵfac = function ButtonControlDemonstracaoComponent_Factory(t) { return new (t || ButtonControlDemonstracaoComponent)(); };
ButtonControlDemonstracaoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonControlDemonstracaoComponent, selectors: [["ng-component"]], decls: 2, vars: 0, template: function ButtonControlDemonstracaoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "button-control-demonstracao works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonControlDemonstracaoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: "./button-control-demonstracao.component.html"
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "gvoB":
/*!************************************************************************************************!*\
  !*** ./src/app/demonstracao/componentes/card-button-demonstracao/card-button-code-examples.ts ***!
  \************************************************************************************************/
/*! exports provided: CardButtonCodeExamples */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardButtonCodeExamples", function() { return CardButtonCodeExamples; });
class CardButtonCodeExamples {
}
CardButtonCodeExamples.codeDescricao = `<cx-card-button leftIcon="fa fa-home" leftTitle="Título do lado esquerdo">
   <h5>Título do lado direito</h5>
   <p>Texto do lado direito</p>
 </cx-card-button>`.trim();
CardButtonCodeExamples.htmlCodeCardButton = `<cx-card-button leftIcon="fa fa-home">
   <h5>Lorem Ipsum</h5>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sint perspiciatis soluta
   saepe est nam, sunt accusantium.
 </cx-card-button>
 `.trim();
CardButtonCodeExamples.htmlCodeCardCheckbox = `<cx-card-button type="checkbox" [(ngModel)]="user" value="user" leftIcon="fa fa-user">
   <label>Usuário</label>
   <input [disabled]="!user" value="Fulano" class="input-caixa">
 </cx-card-button>
 
 <br>
 
 <cx-card-button type="checkbox" [(ngModel)]="email" value="email" leftIcon="fa fa-at">
   <label>E-mail</label>
   <input [disabled]="!email" value="fulano@email.com" class="input-caixa">
 </cx-card-button>`
    .trim();
CardButtonCodeExamples.tsCodeCardCheckbox = `import { Component } from "@angular/core";
 
 @Component({
   templateUrl: "./card-button-exemplo.component.html",
   styleUrls: ["./card-button-exemplo.component.scss"]
 })
 export class CardButtonExemplo {
 
   constructor() {}
 
   user;
   email;
 
 }`.trim();
CardButtonCodeExamples.htmlCodeCardRadio = `<form [formGroup]="formFone">
   <cx-card-button type="radio" formControlName="tipoFone" value="fixo" leftIcon="fa fa-phone-alt">
      <label>Fixo</label>
      <input [disabled]="formFone.get('tipoFone').value !== 'fixo'" class="input-caixa"
         placeholder="(00) 0000-0000">
   </cx-card-button>
 
   <br>
 
   <cx-card-button type="radio" formControlName="tipoFone" value="celular" leftIcon="fa fa-mobile-alt">
      <label>Celular</label>
      <input [disabled]="formFone.get('tipoFone').value !== 'celular'" class="input-caixa"
         placeholder="(00) 00000-0000">
   </cx-card-button>
 </form>`.trim();
CardButtonCodeExamples.tsCodeCardRadio = `import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
 
 @Component({
   templateUrl: "./card-button-exemplo.component.html",
   styleUrls: ["./card-button-exemplo.component.scss"]
 })
 export class CardButtonExemplo {
 
   constructor(
     private fb: FormBuilder
   ) { }
 
   formFone = this.fb.group({
     tipoFone: [null]
   });
 
 }`.trim();
CardButtonCodeExamples.cardWidth = `<cx-card-button
   leftTitle="Largura: 100%"
   [styles]="{ width: '100%' }"
 ></cx-card-button>`.trim();
CardButtonCodeExamples.cardHeight = `<cx-card-button leftIcon="fa fa-user" leftTitle="Altura: auto" leftText="Conteúdo extenso"
 [styles]="{ height: 'auto' }">
     <div class="py-3">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, deserunt enim aspernatur suscipit
       doloribus eius deleniti porro, qui tempore totam officiis 
       nemo distinctio dolore perspiciatis ratione
       voluptas non maxime doloremque!
       <br>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, deserunt enim aspernatur suscipit
       doloribus eius deleniti porro, qui tempore totam officiis 
       nemo distinctio dolore perspiciatis ratione
       voluptas non maxime doloremque!
     </div>
 </cx-card-button>`.trim();
CardButtonCodeExamples.htmlCodeCores = `<cx-card-button color="secondary" leftIcon="fa fa-home fa-lg">
   Principal
 </cx-card-button>

 <br>

 <cx-card-button type="checkbox" color="success" leftIcon="fa fa-check">
   Sucesso
 </cx-card-button>

 <br>

 <cx-card-button color="danger" leftIcon="fa fa-times">
   Perigo
 </cx-card-button>`.trim();


/***/ }),

/***/ "mPP4":
/*!*********************************************************************************************************!*\
  !*** ./src/app/demonstracao/componentes/card-button-demonstracao/card-button-demonstracao.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: CardButtonDemonstracaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardButtonDemonstracaoComponent", function() { return CardButtonDemonstracaoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _componentes_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../componentes-interface */ "pRMn");
/* harmony import */ var _card_button_api_props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card-button-api-props */ "spHw");
/* harmony import */ var _card_button_code_examples__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card-button-code-examples */ "gvoB");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-highlightjs */ "dJsq");
/* harmony import */ var _shared_components_documentacao_template_documentacao_template_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/documentacao-template/documentacao-template.component */ "r5ma");
/* harmony import */ var _guia_caixa_components_card_button_card_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../guia-caixa/components/card-button/card-button.component */ "XNHp");
/* harmony import */ var _shared_components_code_fixed_nav_code_fixed_nav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/code-fixed-nav/code-fixed-nav.component */ "j1XF");
/* harmony import */ var _shared_components_documentacao_api_table_documentacao_api_table_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/components/documentacao-api-table/documentacao-api-table.component */ "XNAu");













const _c0 = ["scrollElement"];
const _c1 = function () { return ["html"]; };
const _c2 = function () { return { width: "100%" }; };
const _c3 = function () { return { height: "auto" }; };
class CardButtonDemonstracaoComponent extends _componentes_interface__WEBPACK_IMPORTED_MODULE_1__["ComponentesInterface"] {
    constructor(toastr, fb, sanitizer) {
        super(toastr);
        this.toastr = toastr;
        this.fb = fb;
        this.sanitizer = sanitizer;
        this.sectionOffset = 0;
        this.spiedTags = ["APP-DOCUMENTACAO-TEMPLATE"];
        this.currentSection = "painelCardButton";
        this.navItems = [
            { id: "painelCardButton", name: "Layout" },
            { id: "painelCardButtonCheckbox", name: "Checkbox" },
            { id: "painelCardButtonRadio", name: "Radio" },
            { id: "painelCardButtonColor", name: "Cores" }
        ];
        this.formFone = this.fb.group({
            tipoFone: [null]
        });
        this.propsApi = _card_button_api_props__WEBPACK_IMPORTED_MODULE_2__["cardButtonApiProps"];
        this.examples = _card_button_code_examples__WEBPACK_IMPORTED_MODULE_3__["CardButtonCodeExamples"];
    }
}
CardButtonDemonstracaoComponent.ɵfac = function CardButtonDemonstracaoComponent_Factory(t) { return new (t || CardButtonDemonstracaoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"])); };
CardButtonDemonstracaoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardButtonDemonstracaoComponent, selectors: [["ng-component"]], viewQuery: function CardButtonDemonstracaoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollElement = _t.first);
    } }, hostBindings: function CardButtonDemonstracaoComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function CardButtonDemonstracaoComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 140, vars: 40, consts: [[1, "titulo"], [1, "my-4"], [1, "font-fam-bold"], [3, "highlight", "languages"], ["role", "tablist", 1, "nav", "nav-pills", "tab-caixa"], [1, "nav-item"], ["data-toggle", "tab", "href", "#visaoGeral", "role", "tab", 1, "nav-link", "text-uppercase", "active"], ["data-toggle", "tab", "href", "#api", "role", "tab", 1, "nav-link", "text-uppercase"], ["data-toggle", "tab", "href", "#exemplos", "role", "tab", 1, "nav-link", "text-uppercase"], [1, "tab-content"], ["id", "visaoGeral", "role", "tabpanel", 1, "tab-pane", "fade", "show", "active"], [1, "row", "no-gutters"], [1, "col-12", "col-xl-9", "pr-2"], ["scrollElement", ""], ["id", "painelCardButton", 3, "cardTitle", "codeViewId", "htmlTabId", "htmlCode"], [1, "descricao"], [1, "citation-highlight"], [1, "conteudo"], ["leftIcon", "fa fa-home", 1, ""], ["id", "painelCardButtonCheckbox", 3, "cardTitle", "codeViewId", "htmlTabId", "htmlCode", "tsTabId", "tsCode"], ["type", "checkbox", "value", "user", "leftIcon", "fa fa-user", 1, "mb-3", 3, "ngModel", "ngModelChange"], ["value", "Fulano", 1, "form-control", 3, "disabled"], ["type", "checkbox", "value", "email", "leftIcon", "fa fa-at", 3, "ngModel", "ngModelChange"], ["value", "fulano@email.com", 1, "form-control", 3, "disabled"], ["id", "painelCardButtonRadio", 3, "cardTitle", "codeViewId", "htmlTabId", "htmlCode", "tsTabId", "tsCode"], [3, "formGroup"], ["type", "radio", "formControlName", "tipoFone", "value", "fixo", "leftIcon", "fa fa-phone-alt"], ["placeholder", "(00) 0000-0000", 1, "form-control", 3, "disabled"], ["type", "radio", "formControlName", "tipoFone", "value", "celular", "leftIcon", "fa fa-mobile-alt"], ["placeholder", "(00) 00000-0000", 1, "form-control", 3, "disabled"], ["id", "painelCardButtonColor", 3, "cardTitle", "codeViewId", "htmlTabId", "htmlCode"], ["color", "secondary", "leftIcon", "fa fa-home fa-lg"], ["type", "checkbox", "color", "success", "leftIcon", "fa fa-check"], ["color", "danger", "leftIcon", "fa fa-times"], ["id", "navSection", 1, "d-none", "col-3", "d-xl-flex", "pl-4"], [3, "items", "currentSection"], ["id", "api", "role", "tabpanel", 1, "tab-pane", "fade"], [1, "card", "mb-4"], [1, "card-body"], [1, "header-subtitulo-caixa"], [3, "props"], ["id", "exemplos", "role", "tabpanel", 1, "tab-pane", "fade"], ["id", "cardButtonSandbox", 1, "mb-5"], [1, "row"], [1, "col"], ["leftTitle", "Largura: 100%", 3, "styles"], [3, "highlight"], ["leftIcon", "fa fa-user", "leftTitle", "Altura: auto", "leftText", "Conte\u00FAdo extenso", 3, "styles"], [1, "py-3"]], template: function CardButtonDemonstracaoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Card Button\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "O componente Card-button oferece um layout semelhante a um card por\u00E9m com a funcionalidade de um checkbox ou radio.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u00C0 esquerda pode ser exibido um \u00EDcone, t\u00EDtulo ou texto de descri\u00E7\u00E3o. Seu conte\u00FAdo a direita \u00E9 totalmente din\u00E2mico. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "HTML:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "code", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Vis\u00E3o Geral ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " API ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Exemplos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "section", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "app-documentacao-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Os atributos iniciados com left, como ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "leftIcon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " recebem os elementos a serem exibidos do lado esquerdo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Qualquer conte\u00FAdo colocado dentro do componente ser\u00E1 exibido do lado direito. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "cx-card-button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Lorem Ipsum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sint perspiciatis soluta saepe est nam, sunt accusantium. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "app-documentacao-template", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "A funcionalidade de checkbox/radio \u00E9 ativada ao: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "- Informar o atributo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " como \"checkbox\" ou \"radio\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "- Atribuir uma das diretivas de formul\u00E1rio do Angular, seja do TemplateForms (ngModel) ou ReactiveForms (formControlName)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "cx-card-button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CardButtonDemonstracaoComponent_Template_cx_card_button_ngModelChange_55_listener($event) { return ctx.user = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Usu\u00E1rio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "cx-card-button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CardButtonDemonstracaoComponent_Template_cx_card_button_ngModelChange_60_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "app-documentacao-template", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Informando o mesmo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "model");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " ao componente, ele passa a se comportar como um radio. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "O valor \"checkbox\" para o atributo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " adapta o visual do card.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "form", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "cx-card-button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Fixo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "cx-card-button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Celular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "app-documentacao-template", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "A cor geral do card pode ser alterada pelo atributo \"color\", passando um dos temas da enum CardButtonColor ou a string diretamente (primary, secondary, success, danger, info, warning). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "cx-card-button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " Principal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "cx-card-button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " Sucesso ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "cx-card-button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " Perigo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "nav", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "app-code-fixed-nav", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "h5", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Cx-Card-Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " Componente de exibi\u00E7\u00E3o ou intera\u00E7\u00E3o com funcionalidade de checkbox ou radio. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Usar como: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "cx-card-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "app-documentacao-api-table", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "section", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "cx-card-button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " HTML ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "code", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "cx-card-button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, deserunt enim aspernatur suscipit doloribus eius deleniti porro, qui tempore totam officiis nemo distinctio dolore perspiciatis ratione voluptas non maxime doloremque! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, deserunt enim aspernatur suscipit doloribus eius deleniti porro, qui tempore totam officiis nemo distinctio dolore perspiciatis ratione voluptas non maxime doloremque! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " HTML ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "code", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.examples.codeDescricao)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](37, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardTitle", "Card Button")("codeViewId", "viewCardButton")("htmlTabId", "htmlCodeCardButton")("htmlCode", ctx.examples.htmlCodeCardButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardTitle", "Checkbox")("codeViewId", "viewCardCheckbox")("htmlTabId", "htmlCodeCardCheckbox")("htmlCode", ctx.examples.htmlCodeCardCheckbox)("tsTabId", "tsCodeCardCheckbox")("tsCode", ctx.examples.tsCodeCardCheckbox);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardTitle", "Radio")("codeViewId", "viewCardRadio")("htmlTabId", "htmlCodeCardRadio")("htmlCode", ctx.examples.htmlCodeCardRadio)("tsTabId", "tsCodeCardRadio")("tsCode", ctx.examples.tsCodeCardRadio);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formFone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.formFone.get("tipoFone").value !== "fixo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.formFone.get("tipoFone").value !== "celular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formFone.get("tipoFone").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardTitle", "Cores")("codeViewId", "viewCardCores")("htmlTabId", "htmlCodeCores")("htmlCode", ctx.examples.htmlCodeCores);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.navItems)("currentSection", ctx.currentSection);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("props", ctx.propsApi);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styles", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](38, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.examples.cardWidth);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styles", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](39, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.examples.cardHeight);
    } }, directives: [ngx_highlightjs__WEBPACK_IMPORTED_MODULE_7__["Highlight"], _shared_components_documentacao_template_documentacao_template_component__WEBPACK_IMPORTED_MODULE_8__["DocumentacaoTemplateComponent"], _guia_caixa_components_card_button_card_button_component__WEBPACK_IMPORTED_MODULE_9__["CardButtonComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _shared_components_code_fixed_nav_code_fixed_nav_component__WEBPACK_IMPORTED_MODULE_10__["CodeFixedNavComponent"], _shared_components_documentacao_api_table_documentacao_api_table_component__WEBPACK_IMPORTED_MODULE_11__["DocumentacaoApiTableComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardButtonDemonstracaoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: "./card-button-demonstracao.component.html",
                host: { "(window:scroll)": "onScroll($event)" }
            }]
    }], function () { return [{ type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] }]; }, { scrollElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["scrollElement"]
        }] }); })();


/***/ }),

/***/ "mS55":
/*!************************************************************************************!*\
  !*** ./src/app/demonstracao/componentes/stepper-demonstracao/stepper-api-props.ts ***!
  \************************************************************************************/
/*! exports provided: stepperApiProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepperApiProps", function() { return stepperApiProps; });
const stylesExample = "styles='{ height: '300px'; }'";
const stepperApiProps = [
    {
        nome: `readonly MINIMUM_STEPS`,
        descricao: `Quantidade mínima de passos.<br>
      Valor: 2`
    }, {
        nome: `readonly MAXIMUM_STEPS`,
        descricao: `Quantidade máxima de passos.<br>
      Valor: 7`
    }, {
        nome: `@Input( )<br>steps: string[ ]`,
        descricao: `Atributo obrigatório com a lista de 'descrições' dos passos,
      que serão exibidos ao lado dos ícones.<br>
      Padrão: [ ]`
    }, {
        nome: `@Input( )<br>currentStep: string | number`,
        descricao: `Índice do passo atual.<br>
      Padrão: 0`
    }, {
        nome: `@Input( )<br>orientation: enum StepperOrientation | string | number`,
        descricao: `Orientação do componente, que pode ser horizontal (StepperOrientation.horizontal | "0")
      ou vertical (StepperOrientation.vertical | "1").<br>
      Padrão: StepperOrientation.horizontal | "0"`
    }, {
        nome: `@Input( )<br>freeNavigation: boolean`,
        descricao: `Define a variante do stepper. Com o atributo habilitado, o usuário poderá
      retornar para qualquer passo anterior.<br>
      Do contrário, apenas será possível retornar ao passo imediatamente anterior.<br>
      Padrão: true`
    }, {
        nome: `@Input( )<br>styles: [class: string]: any | string`,
        descricao: `Objeto de estilo a ser passado para o stepper-wrapper`,
        codeExample: stylesExample,
        codeLang: "css"
    }, {
        nome: `@Output( )<br>changeStep: EventEmitter&#60;number>`,
        descricao: `Evento disparado sempre que um ícone válido é clicado, transmitindo o índice deste ícone. `
    }, {
        nome: `next( ): void`,
        descricao: `Avança para o próximo passo.`
    }, {
        nome: `previous( ): void`,
        descricao: `Retorna para o passo anterior.`
    }, {
        nome: `first( ): void`,
        descricao: `Retorna para o primeiro passo. Apenas na navegação livre.`
    }, {
        nome: `update( ): void`,
        descricao: `Atualiza manualmente o template do componente cx-stepper.`
    }
];


/***/ }),

/***/ "ngTx":
/*!********************************************************************************************!*\
  !*** ./src/app/demonstracao/componentes/datatable-demonstracao/datatable-code-examples.ts ***!
  \********************************************************************************************/
/*! exports provided: DataTableCodeExamples */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableCodeExamples", function() { return DataTableCodeExamples; });
class DataTableCodeExamples {
}
DataTableCodeExamples.codeDescricao = `<cx-datatable>
   <table datatable class="table table-striped table-hover">
     <thead>
       <tr>
         <th>Coluna 1</th>
         <th>Coluna 2</th>
         <th>Coluna 3</th>
       </tr>
     </thead>
     <tbody>
       <tr *ngFor="let linha of linhas">
         <td>{{ linha.dado1 }}</td>
         <td>{{ linha.dado2 }}</td>
         <td>{{ linha.dado3 }}</td>
       </tr>
     </tbody>
   </table>
 </cx-datatable>`;
DataTableCodeExamples.codeTsTemplateString = `import { Component, ViewChild } from '@angular/core';
import { DadosTabelaService } from '~dados-tabela.service.ts';

@Component({
  selector: 'app-tabelas',
  templateUrl: './tabelas.component.html',
  styleUrls: ['./tabelas.component.scss']
})
export class TabelasComponent {

  @ViewChild("tabelaExemplo", { static: true })
  datatable: DataTableComponent;

  dadosDaTabela = [];

  constructor(private service: DadosTabelaService) {}

  ngOnInit() {
    this.service.consultarDados().subscribe((response: any[]) => {
      this.dadosDaTabela = response;
      if (this.datatable) {
        this.datatable.reloadTable();
      }
    });
  }

}
`.trim();
DataTableCodeExamples.htmlCodeDatatable = `						<cx-datatable [settings]="settingsCompleta" [trigger]="dtTrigger">
  <table datatable class="table table-striped table-hover">
    <thead>
      <tr>
        <th>Prato</th>
        <th>Ingrediente</th>
        <th>Medida</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let row of rows">
        <td>{{ row.dish }}</td>
        <td>{{ row.ingredient }}</td>
        <td>{{ row.measurement }}</td>
      </tr>
    </tbody>
  </table>
</cx-datatable>`.trim();
DataTableCodeExamples.tsCodeDatatable = `import { Component } from '@angular/core';
import { DataTableConfig } from "~datatable-definitions";
import { RandomDataService, RandomDataFood } from "~random-data.service";

@Component({
  selector: 'app-tabelas',
  templateUrl: './tabelas.component.html',
  styleUrls: ['./tabelas.component.scss']
})
export class TabelasComponent {

  /* Exemplo de configuração pré-definida */
  settingsCompleta = DataTableConfig.COMPLETE_SETTINGS;

  /* Exemplo de configuração customizada */
  settingsCustom = DataTableConfig.getDataTableSettings({
    showInfo: true,
    showPagination: true,
    showLength: true,
    menuLength: [5, 10, 15]
  });

  constructor (
    public randomDataService: RandomDataService
  ) {}

  rows = [];
  dtTrigger: Subject<any> = new Subject();

  ngOnInit() {
    this.randomDataService.getFoodData(100).subscribe((foodArray: RandomDataFood[]) => {
      this.rows = foodArray;
      this.dtTrigger.next();
    });
  }

}
`.trimRight();
DataTableCodeExamples.htmlCodeDatatableFilter = `						<cx-datatable [settings]="settingsCustom" [trigger]="dtTrigger" columnFilterPosition="top">
  <table datatable class="table table-striped table-hover">
    <thead>
      <tr>
        <th data-filter="input">Prato</th>
        <th>Ingrediente</th>
        <th data-filter="select">Medida</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let row of rows.slice(0, 10)">
        <td>{{ row.dish }}</td>
        <td>{{ row.ingredient }}</td>
        <td>{{ row.measurement }}</td>
      </tr>
    </tbody>
  </table>
</cx-datatable>`.trim();
DataTableCodeExamples.tsCodeDatatableFilter = `import { Component } from '@angular/core';
import { DataTableConfig } from "~datatable-definitions";
import { RandomDataService, RandomDataFood } from "~random-data.service";

  @Component({
    selector: 'app-tabelas',
    templateUrl: './tabelas.component.html',
    styleUrls: ['./tabelas.component.scss']
  })
  export class TabelasComponent {

    settingsCustom = DataTableConfig.getDataTableSettings({
      showInfo: true,
      showPagination: true,
      showLength: true,
      menuLength: [5, 10, 15]
    });

    constructor (
      public randomDataService: RandomDataService
    ) {}

    rows = [];
    dtTrigger: Subject<any> = new Subject();

    ngOnInit() {
      this.randomDataService.getFoodData(100).subscribe((foodArray: RandomDataFood[]) => {
        this.rows = foodArray;
        this.dtTrigger.next();
      });
    }

  }
`.trimRight();


/***/ }),

/***/ "spHw":
/*!********************************************************************************************!*\
  !*** ./src/app/demonstracao/componentes/card-button-demonstracao/card-button-api-props.ts ***!
  \********************************************************************************************/
/*! exports provided: cardButtonApiProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardButtonApiProps", function() { return cardButtonApiProps; });
const stylesExample = "styles='{ height: '300px'; }'";
const cardButtonApiProps = [
    {
        nome: `@Input( )<br>cardId: string`,
        descricao: `Nome ou identificação opcional para o componente.<br>
     Valor: ""`
    }, {
        nome: `@Input( )<br>data: any`,
        descricao: `Atributo opcional que será emitido internamente no evento CardButtonEventChecked.<br>
     Valor: null`
    }, {
        nome: `@Input( )<br>leftIcon: string`,
        descricao: `Classe do ícone a ser exibido no lado esquerdo, ex: "fa fa-home".<br>
     Padrão: ""`
    }, {
        nome: `@Input( )<br>leftTitle: string | number`,
        descricao: `Título a ser exibido do lado esquerdo, em uma tag 'h5'.<br>
     Padrão: ""`
    }, {
        nome: `@Input( )<br>leftText: string`,
        descricao: `Texto a ser exibido do lado esquerdo, em uma tag 'span'.<br>
     Padrão: ""`
    }, {
        nome: `@Input( )<br>styles: [class: string]: any | string`,
        descricao: `Objeto de estilo a ser passado para o card-button-wrapper`,
        codeExample: stylesExample,
        codeLang: "css"
    }, {
        nome: `@Input( )<br>type: string`,
        descricao: `Define o visual do container de checkbox / radio. Pode ser 'checkbox', 'radio',
     ou algum valor falso (null / false / '') para não exibir o container.<br>
     Padrão: ''`
    }, {
        nome: `@Input( )<br>color: CardButtonColor | string`,
        descricao: `Define a cor geral do componente (lado esquerdo e borda) quando estiver selecionado.<br>
     Padrão: 'primary'`
    }, {
        nome: `@Output( )<br>checked: EventEmitter&#60;CardButtonCheckEvent>`,
        descricao: `Evento emitido ao ativar o botão, contendo o próprio componente e seus atributos
     na propriedade (target).`
    }, {
        nome: `isChecked( ): boolean`,
        descricao: `Retorna o estado atual do componente, se está marcado ou não.`
    }, {
        nome: `toggleValue( ): void`,
        descricao: `Troca o estado atual do componente.`
    }
];


/***/ }),

/***/ "tt0y":
/*!**************************************************************************************!*\
  !*** ./src/app/demonstracao/componentes/timeline-demonstracao/timeline-api-props.ts ***!
  \**************************************************************************************/
/*! exports provided: timelineApiProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timelineApiProps", function() { return timelineApiProps; });
const stylesExample = "styles='{ height: '300px'; }'";
const timelineApiProps = [
    {
        nome: `@Input( )<br>items: TimelineItem[ ]`,
        descricao: `Atributo obrigatório com a lista de items/eventos.<br>
      Padrão: [ ]`
    }, {
        nome: `@Input( )<br>orientation: enum TimelineOrientation | string | number`,
        descricao: `Orientação do componente, que pode ser horizontal (TimelineOrientation.horizontal | "0")
      ou vertical (TimelineOrientation.vertical | "1").<br>
      Padrão: TimelineOrientation.vertical | "1"`
    }, {
        nome: `@Input( )<br>styles: [class: string]: any | string`,
        descricao: `Objeto de estilo a ser passado para o timeline-wrapper.`,
        codeExample: stylesExample,
        codeLang: "css"
    }
];


/***/ }),

/***/ "xZGi":
/*!******************************************************************************************!*\
  !*** ./src/app/demonstracao/componentes/timeline-demonstracao/timeline-code-examples.ts ***!
  \******************************************************************************************/
/*! exports provided: TimelineCodeExamples */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineCodeExamples", function() { return TimelineCodeExamples; });
class TimelineCodeExamples {
}
TimelineCodeExamples.codeDescricao = `<cx-timeline [items]="timelineItems"></cx-timeline>`.trim();
TimelineCodeExamples.codeTsDescricao = `timelineItems: TimelineItem[] = [
  { title: "Item sucesso", state: TimelineState.SUCCESS, date: new Date()  },
  { title: "Item warning", state: "warning", date: new Date(), dateFormat: "full" },
  { title: "Item warning-stop", state: "warning-stop", dateString: "05/12/2020" },
  { title: "Item erro", state: "error", dateString: "03/12/2020" },
  { title: "Item info", state: "info", dateString: "06/12/2020" }
];`.trim();
TimelineCodeExamples.htmlCodeTimelinePadrao = `<cx-timeline [items]="timelineItems"></cx-timeline>`.trim();
TimelineCodeExamples.tsCodeTimelinePadrao = `import { Component } from '@angular/core';
import { TimelineItem, TimelineState } from "./timeline/timeline-item";

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss']
})
export class TimelineDemonstracaoComponent {

  constructor() {}

  timelineItems: TimelineItem[] = [
    { title: "Item sucesso", state: TimelineState.SUCCESS, date: new Date()  },
    { title: "Item warning", state: "warning", date: new Date(), dateFormat: "full" },
    { title: "Item warning-stop", state: "warning-stop", dateString: "05/12/2020" },
    { title: "Item erro", state: "error", dateString: "03/12/2020" },
    { title: "Item info", state: "info", dateString: "06/12/2020" }
  ];
}
`.trimRight();
// tslint:disable-next-line:max-line-length
TimelineCodeExamples.htmlCodeTimelineExtenso = `<cx-timeline [styles]="{ height: '350px', width: 'auto' }" [items]="timelineItemsExtenso"></cx-timeline>`.trim();
TimelineCodeExamples.tsCodeTimelineExtenso = `import { Component } from '@angular/core';
import { TimelineItem, TimelineState } from "./timeline/timeline-item";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineDemonstracaoComponent {

  constructor() {}

  timelineItemsExtenso: TimelineItem[] = [
    { title: "Item sucesso", state: TimelineState.SUCCESS, date: new Date()  },
    { title: "Item warning", state: "warning", date: new Date(), dateFormat: "full" },
    { title: "Item warning-stop", state: "warning-stop", dateString: "05/12/2020" },
    { title: "Item erro", state: "error", dateString: "03/12/2020" },
    { title: "Item info", state: "info", dateString: "06/12/2020" },
    { title: "Item sucesso", state: TimelineState.SUCCESS, date: new Date()  },
    { title: "Item warning", state: "warning", date: new Date(), dateFormat: "full" },
    { title: "Item warning-stop", state: "warning-stop", dateString: "05/12/2020" },
    { title: "Item erro", state: "error", dateString: "03/12/2020" },
    { title: "Item info", state: "info", dateString: "06/12/2020" }
  ];
}
`.trimRight();


/***/ }),

/***/ "xyGQ":
/*!*******************************************************************!*\
  !*** ./src/app/demonstracao/componentes/componentes.component.ts ***!
  \*******************************************************************/
/*! exports provided: ComponentesCaixaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentesCaixaComponent", function() { return ComponentesCaixaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_menu_side_menu_side_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/menu/side-menu/side-menu.service */ "LhWq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");





function ComponentesCaixaComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const resource_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", resource_r3.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", resource_r3.iconClass, " fa-lg mr-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", resource_r3.name, " ");
} }
function ComponentesCaixaComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ComponentesCaixaComponent_div_2_div_1_Template, 7, 5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cols_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", cols_r1);
} }
class ComponentesCaixaComponent {
    constructor(menuService) {
        this.menuService = menuService;
        this.rows = [];
        this.resources = [];
    }
    ngOnInit() {
        this.menuService.menuItems$.subscribe(items => {
            const componentes = items.find((item) => item.url === "/componentes-caixa").submenu;
            componentes.forEach(item => {
                this.resources.push(item);
            });
            this.resources = [].concat(this.resources);
            this.rows = this.groupColumns(this.resources);
        });
    }
    groupColumns(resources) {
        const newRows = [];
        for (let index = 0; index < resources.length; index += 3) {
            newRows.push(resources.slice(index, index + 3));
        }
        return newRows;
    }
}
ComponentesCaixaComponent.ɵfac = function ComponentesCaixaComponent_Factory(t) { return new (t || ComponentesCaixaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_menu_side_menu_side_menu_service__WEBPACK_IMPORTED_MODULE_1__["SideMenuService"])); };
ComponentesCaixaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ComponentesCaixaComponent, selectors: [["app-componentes"]], decls: 3, vars: 1, consts: [[1, "titulo"], ["class", "row d-flex justify-content-center", 4, "ngFor", "ngForOf"], [1, "row", "d-flex", "justify-content-center"], ["class", "col-10 col-md-6 col-xl-4", 4, "ngFor", "ngForOf"], [1, "col-10", "col-md-6", "col-xl-4"], ["role", "button", "optionalClasses", "button-card-min-height", "routerLinkActive", "active", 1, "card", "w-75", "card-hover", "button-card", 3, "routerLink"], [1, "card-body"], [1, "header-subtitulo-caixa", "m-0", "mr-3", "text-center"]], template: function ComponentesCaixaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Componentes Caixa\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ComponentesCaixaComponent_div_2_Template, 2, 1, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.rows);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW9uc3RyYWNhby9jb21wb25lbnRlcy9jb21wb25lbnRlcy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentesCaixaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-componentes",
                templateUrl: "./componentes.component.html",
                styleUrls: ["./componentes.component.css"]
            }]
    }], function () { return [{ type: src_app_menu_side_menu_side_menu_service__WEBPACK_IMPORTED_MODULE_1__["SideMenuService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=demonstracao-componentes-componentes-caixa-module-es2015.js.map