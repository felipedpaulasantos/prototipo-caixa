(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demonstracao-componentes-basicos-componentes-basicos-module"],{

/***/ "19O9":
/*!***********************************************************************************!*\
  !*** ./src/app/demonstracao/componentes-basicos/componentes-basicos.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ComponentesBasicosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentesBasicosComponent", function() { return ComponentesBasicosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_menu_side_menu_side_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/menu/side-menu/side-menu.service */ "LhWq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




function ComponentesBasicosComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
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
function ComponentesBasicosComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ComponentesBasicosComponent_div_2_div_1_Template, 7, 5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cols_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", cols_r1);
} }
class ComponentesBasicosComponent {
    constructor(menuService) {
        this.menuService = menuService;
        this.rows = [];
        this.resources = [];
    }
    ngOnInit() {
        this.menuService.menuItems$.subscribe(items => {
            const componentes = items.find((item) => item.url === "/componentes-basicos").submenu;
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
ComponentesBasicosComponent.ɵfac = function ComponentesBasicosComponent_Factory(t) { return new (t || ComponentesBasicosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_menu_side_menu_side_menu_service__WEBPACK_IMPORTED_MODULE_1__["SideMenuService"])); };
ComponentesBasicosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ComponentesBasicosComponent, selectors: [["app-componentes-basicos"]], decls: 3, vars: 1, consts: [[1, "titulo"], ["class", "row d-flex justify-content-center", 4, "ngFor", "ngForOf"], [1, "row", "d-flex", "justify-content-center"], ["class", "col-10 col-md-6 col-xl-4", 4, "ngFor", "ngForOf"], [1, "col-10", "col-md-6", "col-xl-4"], ["role", "button", "optionalClasses", "button-card-min-height", "routerLinkActive", "active", 1, "card", "w-75", "card-hover", "button-card", 3, "routerLink"], [1, "card-body"], [1, "header-subtitulo-caixa", "m-0", "mr-3", "text-center"]], template: function ComponentesBasicosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Componentes b\u00E1sicos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ComponentesBasicosComponent_div_2_Template, 2, 1, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.rows);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wb25lbnRlcy1iYXNpY29zLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "LkGr":
/*!***************************************************************************!*\
  !*** ./src/app/demonstracao/componentes-basicos/forms/forms.component.ts ***!
  \***************************************************************************/
/*! exports provided: FormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsComponent", function() { return FormsComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _componentes_componentes_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../componentes/componentes-interface */ "pRMn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _shared_components_documentacao_template_documentacao_template_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/documentacao-template/documentacao-template.component */ "r5ma");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-highlightjs */ "OtPg");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var _guia_caixa_components_button_control_button_control_button_control_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../guia-caixa/components/button-control/button-control/button-control.component */ "Yk9i");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_code_fixed_nav_code_fixed_nav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/code-fixed-nav/code-fixed-nav.component */ "j1XF");











const _c0 = ["scrollElement"];
function FormsComponent_span_134_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "E-mail inv\u00E1lido");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function FormsComponent_span_155_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Campo obrigat\u00F3rio");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function FormsComponent_span_163_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Idade inv\u00E1lida - deve ser entre 18 e 70");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c1 = function () { return ["html"]; };
class FormsComponent extends _componentes_componentes_interface__WEBPACK_IMPORTED_MODULE_1__["ComponentesInterface"] {
    constructor(toastr, fb) {
        super(toastr);
        this.toastr = toastr;
        this.fb = fb;
        this.spiedTags = ["APP-DOCUMENTACAO-TEMPLATE"];
        this.sectionOffset = 0;
        this.currentSection = "painelInputs";
        this.navItems = [
            { id: "painelInputs", name: "Inputs e Text-area" },
            { id: "painelSelect", name: "Select" },
            { id: "painelCheckbox", name: "Checkbox" },
            { id: "painelRadio", name: "Radio" },
            { id: "painelRange", name: "Range" },
            { id: "painelValidacao", name: "Validação" }
        ];
        this.formValidation = this.fb.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            linkedin: [null],
            perfil: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            idade: [50, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(18), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].max(70)]]
        });
        this.inputExemplo = `<div class="form-group">
  <label>Nome</label>
  <input class="form-control">
</div>

<label>Idade</label>
<input class="form-control mb-3" type="number">

<label>Observações</label>
<textarea class="form-control"></textarea>`.trim();
        this.selectExemplo = `<label>Sexo</label>
<ng-select class="mb-3">
  <ng-option>Masculino</ng-option>
  <ng-option>Feminino</ng-option>
</ng-select>

<label>Naturalidade</label>
<select class="form-control mb-3">
  <option>Brasileiro</option>
  <option>Estrangeiro</option>
</select>`.trim();
        this.checkboxExemplo = `<div class="custom-control custom-checkbox mb-3">
  <input type="checkbox" class="custom-control-input" id="customCheck1">
  <label class="custom-control-label" for="customCheck1">Marque esse checkbox</label>
</div>

<div class="custom-control custom-checkbox">
  <input type="checkbox" class="custom-control-input" id="customCheck2" checked>
  <label class="custom-control-label" for="customCheck2">Desmarque esse checkbox</label>
</div>`.trim();
        this.radioExemplo = `<div class="custom-control custom-radio mb-3">
  <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
  <label class="custom-control-label" for="customRadio1">Ou esse fica marcado</label>
</div>
<div class="custom-control custom-radio">
  <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
  <label class="custom-control-label" for="customRadio2">Ou esse aqui</label>
</div>`.trim();
        this.rangeExemplo = `<label for="customRange1">Exemplo</label>
<input type="range" class="custom-range" id="customRange1">`.trim();
        this.htmlCodeValidacao = `<form [formGroup]="formValidation">
  <div class="form-group">
    <label>E-mail</label>
    <input class="form-control" type="text" formControlName="email">
    <p class="feedback-msg">
      <span *ngIf="formValidation.get('email').invalid">E-mail inválido</span>
    </p>
  </div>

  <div class="form-group">
    <label>LinkedIn</label>
    <input class="form-control" type="text" formControlName="linkedin">
    <p class="feedback-msg">
      <span>Campo opcional</span>
    </p>
  </div>

  <div class="form-group">
    <label>Perfil</label>
    <ng-select formControlName="perfil">
      <ng-option value="">Selecione...</ng-option>
      <ng-option value="Visitante">Visitante</ng-option>
      <ng-option value="Desenvolvedor">Desenvolvedor</ng-option>
      <ng-option value="Gestor">Gestor</ng-option>
    </ng-select>
    <p class="feedback-msg">
      <span *ngIf="formValidation.get('perfil').invalid">Campo obrigatório</span>
    </p>
  </div>

  <div class="form-group">
    <label>Idade</label>
    <input class="custom-range" type="range" formControlName="idade" min="0" max="100">
    <p>{{ formValidation.get('idade').value }}</p>
    <p class="feedback-msg">
      <span *ngIf="formValidation.get('idade').invalid">Idade inválida - deve ser entre 18 e 70</span>
    </p>
  </div>

  <button class="btn btn-cancel" (click)="formValidation.reset()">Resetar</button>
</form>`.trim();
        this.tsCodeValidacao = `import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: 'app-forms',
    templateUrl: './forms.component.html',
    styleUrls: ['./forms.component.scss']
})
export class FormsComponent {

  constructor() {}

  formValidation = this.fb.group({
    email: [null, [Validators.email]],
    linkedin: [null],
    perfil: [null, [Validators.required]],
    idade: [50, [Validators.min(18), Validators.max(70)]]
  });

}`.trimRight();
        this.cssCodeValidacao = `.feedback-msg {
  height: 1.5rem;
  color: var(--aux);
  margin-top: 0.5rem;
  font-size: 0.9rem;
}`.trimRight();
        this.buttonControlExample = `<cx-button-control type="checkbox" value="valor_do_checkbox">
  Checkbox
</cx-button-control>

<cx-button-control type="radio" value="valor_do_radio" class="ml-3">
  Radio
</cx-button-control>`;
    }
    ngOnInit() {
    }
}
FormsComponent.ɵfac = function FormsComponent_Factory(t) { return new (t || FormsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
FormsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FormsComponent, selectors: [["ng-component"]], viewQuery: function FormsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.scrollElement = _t.first);
    } }, hostBindings: function FormsComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("scroll", function FormsComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 205, vars: 48, consts: [[1, "titulo"], [1, "mb-5"], ["target", "_blank", "href", "https://getbootstrap.com/docs/4.6/components/forms/", 1, "text-destaque"], ["role", "tablist", 1, "nav", "nav-pills", "tab-caixa"], [1, "nav-item"], ["data-toggle", "tab", "href", "#visaoGeral", "role", "tab", 1, "nav-link", "text-uppercase", "active"], ["data-toggle", "tab", "href", "#exemplos", "role", "tab", 1, "nav-link", "text-uppercase"], [1, "tab-content"], ["id", "visaoGeral", "role", "tabpanel", 1, "tab-pane", "fade", "show", "active"], [1, "row", "no-gutters"], [1, "col-12", "col-xl-9", "pr-2", "mb-5"], ["scrollElement", ""], ["id", "painelInputs", 3, "showCodeButton", "cardTitle"], [1, "descricao"], [1, "conteudo"], [1, "form-group"], [1, "form-control"], ["type", "number", 1, "form-control", "mb-3"], [1, "mt-3"], [3, "highlight", "languages"], ["id", "painelSelect", 3, "showCodeButton", "cardTitle"], ["href", "https://www.npmjs.com/package/@ng-select/ng-select", "target", "_blank", 1, "text-destaque"], [1, "mb-3"], [1, "form-control", "mb-3"], ["id", "painelCheckbox", 3, "showCodeButton", "cardTitle"], [1, "custom-control", "custom-checkbox", "mb-3"], ["type", "checkbox", "id", "customCheck1", 1, "custom-control-input"], ["for", "customCheck1", 1, "custom-control-label"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "customCheck2", "checked", "", 1, "custom-control-input"], ["for", "customCheck2", 1, "custom-control-label"], ["id", "painelRadio", 3, "showCodeButton", "cardTitle"], [1, "custom-control", "custom-radio", "mb-3"], ["type", "radio", "id", "customRadio1", "name", "customRadio", 1, "custom-control-input"], ["for", "customRadio1", 1, "custom-control-label"], [1, "custom-control", "custom-radio"], ["type", "radio", "id", "customRadio2", "name", "customRadio", 1, "custom-control-input"], ["for", "customRadio2", 1, "custom-control-label"], ["id", "painelButtonControl", 3, "showCodeButton", "cardTitle"], ["type", "checkbox", "value", "valor_do_checkbox"], ["type", "radio", "value", "valor_do_radio", 1, "ml-3"], ["id", "painelRange", 3, "showCodeButton", "cardTitle"], ["for", "customRange1"], ["type", "range", "id", "customRange1", 1, "custom-range"], ["id", "painelValidacao", 3, "cardTitle", "codeViewId", "htmlTabId", "htmlCode", "tsTabId", "tsCode", "cssTabId", "cssCode"], [3, "formGroup"], ["type", "text", "formControlName", "email", 1, "form-control"], [1, "feedback-msg"], [4, "ngIf"], ["type", "text", "formControlName", "linkedin", 1, "form-control"], ["formControlName", "perfil"], ["value", ""], ["value", "Visitante"], ["value", "Desenvolvedor"], ["value", "Gestor"], ["type", "range", "formControlName", "idade", "min", "0", "max", "100", 1, "custom-range"], [1, "btn", "btn-cancel", 3, "click"], ["id", "navSection", 1, "d-none", "col-3", "d-xl-flex", "pl-4"], [3, "items", "currentSection"], ["id", "exemplos", "role", "tabpanel", 1, "tab-pane", "fade"], ["id", "painelDisabled", 3, "showCodeButton", "cardTitle"], [1, "row"], [1, "col", "mb-3"], ["type", "text", "disabled", "", 1, "form-control"], [3, "readonly"], ["disabled", "", 1, "form-control"], ["type", "range", "id", "customRange1", "disabled", "", 1, "custom-range"], ["type", "checkbox", "id", "customCheck3", "disabled", "", 1, "custom-control-input"], ["for", "customCheck3", 1, "custom-control-label"], ["type", "radio", "id", "customRadio3", "name", "customRadio", "disabled", "", 1, "custom-control-input"], ["for", "customRadio3", 1, "custom-control-label"], ["type", "radio", "id", "customRadio4", "name", "customRadio", "disabled", "", 1, "custom-control-input"], ["for", "customRadio4", 1, "custom-control-label"]], template: function FormsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Forms\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Os estilos dos campos de formul\u00E1rio seguem o padr\u00E3o definido pelo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Bootstrap.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " As variantes de tamanho, status e layout descritas na documenta\u00E7\u00E3o do link acima devem ser seguidos sem altera\u00E7\u00E3o.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Vis\u00E3o Geral ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Exemplos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "section", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "app-documentacao-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " Para campos do tipo \"input\" e \"text-area\" utilizar a classe padr\u00E3o \"form-control\" do Bootstrap.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " O espa\u00E7amento entre campos pode ser implementado de duas maneiras:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " - Envolvendo o label e o campo num container com a classe \"form-group\";");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " - Utilizando a classe auxiliar do Bootstrap \"mb-3\" (espa\u00E7amento inferior de 1rem). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Nome");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Idade");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Observa\u00E7\u00F5es");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "textarea", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "pre", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "code", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "app-documentacao-template", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, " Para campos do tipo \"select\" utilizar por padr\u00E3o o componente da biblioteca ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Ng-Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, ", que j\u00E1 oferece funcionalidades de filtro, autocomplete e multi-sele\u00E7\u00E3o.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, " Caso n\u00E3o seja poss\u00EDvel inserir o componente, utilizar a classe \"form-control\" no elemento \"select\". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Sexo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "ng-select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "ng-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Masculino");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "ng-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "Feminino");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "Naturalidade");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "select", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Brasileiro");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "Estrangeiro");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "pre", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](71, "code", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](72, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "app-documentacao-template", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, " O Checkbox deve seguir o estilo \"custom\". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](78, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "Marque esse checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](82, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "Desmarque esse checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "pre", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](86, "code", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](87, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "app-documentacao-template", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, " O Radio, assim como o checkbox, tamb\u00E9m deve seguir o estilo \"custom\". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](93, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, "Ou esse fica marcado");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](97, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, "Ou esse aqui");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "pre", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](101, "code", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](102, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "app-documentacao-template", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, " O componente 'cx-button-control' se comporta como radio ou checkbox, conforme o valor passado no atributo 'type'. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "cx-button-control", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108, " Checkbox ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "cx-button-control", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, " Radio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "pre", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](112, "code", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](113, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "app-documentacao-template", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, " Para o elemento Range utilizar a classe \"custom-range\". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119, "Exemplo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](120, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "pre", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](122, "code", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](123, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "app-documentacao-template", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](126, " As classes do Angular Forms (ng-dirty, ng-valid, ng-invalid) alteram o visual dos campos conforme seu estado de valida\u00E7\u00E3o. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "form", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](131, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](132, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](134, FormsComponent_span_134_Template, 2, 0, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](137, "LinkedIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](138, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](141, "Campo opcional");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](143, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](144, "Perfil");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "ng-select", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](146, "ng-option", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](147, "Selecione...");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "ng-option", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](149, "Visitante");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "ng-option", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](151, "Desenvolvedor");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "ng-option", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](153, "Gestor");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](154, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](155, FormsComponent_span_155_Template, 2, 0, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](157, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](158, "Idade");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](159, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](161);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](163, FormsComponent_span_163_Template, 2, 0, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](164, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormsComponent_Template_button_click_164_listener() { return ctx.formValidation.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](165, "Resetar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](166, "nav", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](167, "app-code-fixed-nav", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](168, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](169, "app-documentacao-template", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](170, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](171, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](172, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](173, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](174, "Input");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](175, "input", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](176, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](177, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](178, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](179, "ng-select", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](180, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](181, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](182, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](183, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](184, "Text Area");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](185, "textarea", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](186, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](187, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](188, "Range");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](189, "input", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](190, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](191, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](192, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](193, "input", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](194, "label", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](195, "Checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](196, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](197, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](198, "input", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](199, "label", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](200, "Radio");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](201, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](202, "input", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](203, "label", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](204, "Radio 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showCodeButton", false)("cardTitle", "Inputs e Text-area");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("highlight", ctx.inputExemplo)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](42, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showCodeButton", false)("cardTitle", "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("highlight", ctx.selectExemplo)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](43, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showCodeButton", false)("cardTitle", "Checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("highlight", ctx.checkboxExemplo)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](44, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showCodeButton", false)("cardTitle", "Radio");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("highlight", ctx.radioExemplo)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](45, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showCodeButton", false)("cardTitle", "Button Control");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("highlight", ctx.buttonControlExample)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](46, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showCodeButton", false)("cardTitle", "Range");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("highlight", ctx.rangeExemplo)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](47, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cardTitle", "Valida\u00E7\u00E3o")("codeViewId", "formsValidacao")("htmlTabId", "htmlCodeValidacao")("htmlCode", ctx.htmlCodeValidacao)("tsTabId", "tsCodeValidacao")("tsCode", ctx.tsCodeValidacao)("cssTabId", "cssCodeValidacao")("cssCode", ctx.cssCodeValidacao);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.formValidation);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.formValidation.get("email").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.formValidation.get("perfil").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.formValidation.get("idade").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.formValidation.get("idade").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("items", ctx.navItems)("currentSection", ctx.currentSection);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showCodeButton", false)("cardTitle", "Desabilitados");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("readonly", true);
    } }, directives: [_shared_components_documentacao_template_documentacao_template_component__WEBPACK_IMPORTED_MODULE_4__["DocumentacaoTemplateComponent"], ngx_highlightjs__WEBPACK_IMPORTED_MODULE_5__["Highlight"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectComponent"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["ɵr"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"], _guia_caixa_components_button_control_button_control_button_control_component__WEBPACK_IMPORTED_MODULE_7__["ButtonControlComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RangeValueAccessor"], _shared_components_code_fixed_nav_code_fixed_nav_component__WEBPACK_IMPORTED_MODULE_9__["CodeFixedNavComponent"]], styles: [".feedback-msg[_ngcontent-%COMP%] {\n  height: 1.5rem;\n  color: var(--cxAux);\n  margin-top: 0.5rem;\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZm9ybXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0giLCJmaWxlIjoiZm9ybXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmVlZGJhY2stbXNnIHtcclxuICAgaGVpZ2h0OiAxLjVyZW07XHJcbiAgIGNvbG9yOiB2YXIoLS1jeEF1eCk7XHJcbiAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICAgZm9udC1zaXplOiAwLjlyZW07XHJcbn0iXX0= */"] });


/***/ }),

/***/ "R4qh":
/*!********************************************************************************!*\
  !*** ./src/app/demonstracao/componentes-basicos/componentes-basicos.module.ts ***!
  \********************************************************************************/
/*! exports provided: ComponentesBasicosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentesBasicosModule", function() { return ComponentesBasicosModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _componentes_basicos_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./componentes-basicos-routing.module */ "clel");
/* harmony import */ var _componentes_basicos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./componentes-basicos.component */ "19O9");
/* harmony import */ var _botoes_botoes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./botoes/botoes.component */ "pHB9");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "njyG");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-highlightjs */ "OtPg");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-mask */ "tmjD");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var src_app_guia_caixa_guia_caixa_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/guia-caixa/guia-caixa.module */ "0JuT");
/* harmony import */ var _forms_forms_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./forms/forms.component */ "LkGr");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");














class ComponentesBasicosModule {
}
ComponentesBasicosModule.ɵfac = function ComponentesBasicosModule_Factory(t) { return new (t || ComponentesBasicosModule)(); };
ComponentesBasicosModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: ComponentesBasicosModule });
ComponentesBasicosModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _componentes_basicos_routing_module__WEBPACK_IMPORTED_MODULE_1__["ComponentesBasicosRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            ngx_mask__WEBPACK_IMPORTED_MODULE_7__["NgxMaskModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
            ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__["HighlightModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"],
            src_app_guia_caixa_guia_caixa_module__WEBPACK_IMPORTED_MODULE_10__["GuiaCaixaModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](ComponentesBasicosModule, { declarations: [_componentes_basicos_component__WEBPACK_IMPORTED_MODULE_2__["ComponentesBasicosComponent"], _botoes_botoes_component__WEBPACK_IMPORTED_MODULE_3__["BotoesComponent"], _forms_forms_component__WEBPACK_IMPORTED_MODULE_11__["FormsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _componentes_basicos_routing_module__WEBPACK_IMPORTED_MODULE_1__["ComponentesBasicosRoutingModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        ngx_mask__WEBPACK_IMPORTED_MODULE_7__["NgxMaskModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
        ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__["HighlightModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"],
        src_app_guia_caixa_guia_caixa_module__WEBPACK_IMPORTED_MODULE_10__["GuiaCaixaModule"]] }); })();


/***/ }),

/***/ "clel":
/*!****************************************************************************************!*\
  !*** ./src/app/demonstracao/componentes-basicos/componentes-basicos-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: ComponentesBasicosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentesBasicosRoutingModule", function() { return ComponentesBasicosRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _botoes_botoes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./botoes/botoes.component */ "pHB9");
/* harmony import */ var _cards_cards_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cards/cards.component */ "ia4M");
/* harmony import */ var _componentes_basicos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componentes-basicos.component */ "19O9");
/* harmony import */ var _forms_forms_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forms/forms.component */ "LkGr");
/* harmony import */ var _mensagens_mensagens_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mensagens/mensagens.component */ "LWRd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    {
        path: "",
        component: _componentes_basicos_component__WEBPACK_IMPORTED_MODULE_3__["ComponentesBasicosComponent"],
        // canActivate: [AuthGuard],
        data: {
            title: "Componentes básicos",
            breadcrumb: "Componentes básicos"
        }
    },
    {
        path: "botoes",
        component: _botoes_botoes_component__WEBPACK_IMPORTED_MODULE_1__["BotoesComponent"],
        data: {
            title: "Botões",
            breadcrumb: "Botões",
            animation: "Botões"
        }
    },
    {
        path: "cards",
        component: _cards_cards_component__WEBPACK_IMPORTED_MODULE_2__["CardsComponent"],
        data: {
            title: "Cards",
            breadcrumb: "Cards",
            animation: "Cards"
        }
    },
    {
        path: "forms",
        component: _forms_forms_component__WEBPACK_IMPORTED_MODULE_4__["FormsComponent"],
        data: {
            title: "Forms",
            breadcrumb: "Forms",
            animation: "Forms"
        }
    },
    {
        path: "mensagens",
        component: _mensagens_mensagens_component__WEBPACK_IMPORTED_MODULE_5__["MensagensComponent"],
        data: {
            title: "Mensagens",
            breadcrumb: "Mensagens",
            animation: "Mensagens"
        }
    },
];
class ComponentesBasicosRoutingModule {
}
ComponentesBasicosRoutingModule.ɵfac = function ComponentesBasicosRoutingModule_Factory(t) { return new (t || ComponentesBasicosRoutingModule)(); };
ComponentesBasicosRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: ComponentesBasicosRoutingModule });
ComponentesBasicosRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ComponentesBasicosRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "pHB9":
/*!*****************************************************************************!*\
  !*** ./src/app/demonstracao/componentes-basicos/botoes/botoes.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BotoesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotoesComponent", function() { return BotoesComponent; });
/* harmony import */ var _componentes_componentes_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../componentes/componentes-interface */ "pRMn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _shared_components_documentacao_template_documentacao_template_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/documentacao-template/documentacao-template.component */ "r5ma");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-highlightjs */ "OtPg");
/* harmony import */ var _shared_components_code_fixed_nav_code_fixed_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/code-fixed-nav/code-fixed-nav.component */ "j1XF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");








const _c0 = ["scrollElement"];
function BotoesComponent_ng_container_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Padr\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Pequeno");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Grande");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Desabilitado");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const tema_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("btn btn-", tema_r2 == null ? null : tema_r2.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("btn btn-", tema_r2 == null ? null : tema_r2.name, " btn-sm");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("btn btn-", tema_r2 == null ? null : tema_r2.name, " btn-lg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("btn btn-outline-", tema_r2 == null ? null : tema_r2.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("btn btn-", tema_r2 == null ? null : tema_r2.name, "");
} }
const _c1 = function () { return ["html"]; };
class BotoesComponent extends _componentes_componentes_interface__WEBPACK_IMPORTED_MODULE_0__["ComponentesInterface"] {
    constructor(toastr) {
        super(toastr);
        this.toastr = toastr;
        /*   temas = BootstrapTheme.getTemas(); */
        this.temas = [
            { "name": "main" },
            { "name": "accent" },
            { "name": "cancel" },
            { "name": "aux" },
            { "name": "success" },
            { "name": "danger" },
            { "name": "info" },
            { "name": "warning" }
        ];
        this.spiedTags = ["APP-DOCUMENTACAO-TEMPLATE"];
        this.sectionOffset = 0;
        this.currentSection = "painelBotoes";
        this.navItems = [
            { id: "painelBotoes", name: "Padrão" },
            { id: "painelBotoesTamanho", name: "ícones" }
        ];
        this.botoesIntroducao = `<button class="btn btn-main">Principal</button>;
<button class="btn btn-accent">Destaque</button>;
<button class="btn btn-cancel">Cancel</button>;
<button class="btn btn-outline-aux">Auxiliar</button>;
<button class="btn btn-danger btn-sm">Perigo</button>;
<button class="btn btn-success btn-lg">Sucesso</button>;
<button class="btn btn-warning">Alerta</button>
<button class="btn btn-info">Informativo</button>
<button class="btn btn-link">Link</button>`;
        this.botoesIcones = `<button class="btn btn-accent btn-sm">
  <i class="fa fa-plus mr-2"></i>Incluir
</button>

<button class="btn btn-outline-accent">
  <i class="fa fa-edit mr-2"></i>Editar
</button>

<button class="btn btn-main btn-lg">
  <i class="fa fa-lg fa-save mr-3"></i>Salvar
</button>`;
        this.htmlCodeBotoes = `<button class="btn btn-cancel">Botão</button>`.trim();
        this.htmlCodeBotoesTematicos = `        <button class="btn btn-accent">Primário</button> &nbsp;
<button class="btn btn-danger-dark">Erro com tom escuro</button> &nbsp;
<button class="btn btn-apoio-light">Apoio com tom claro</button> &nbsp;
<button class="btn btn-outline-info">Info - outline</button>`.trim();
        this.htmlCodeBotoesTamanho = `        <button class="btn btn-outline-dark btn-sm">Pequeno</button> &nbsp;
<button class="btn btn-primario btn-lg">Grande</button> &nbsp;
<button class="btn btn-primario btn-lg disabled">Grande desabilitado</button> &nbsp;
<button class="btn btn-outline-accent">
  <i class="fa fa-edit mr-2"></i>
  Com ícone
</button>`.trim();
        this.htmlCodeExemplo = `          <button class="btn btn-link">
  Flat
</button>
<button class="btn btn-link rounded-circle p-3">
  <i class="fa fa-bars fa-2x"></i>
</button>
<button class="btn btn-link text-main rounded-circle p-2">
  <i class="fa fa-home fa-2x"></i>
</button>
<button class="btn btn-outline-apoio rounded-circle p-2">
  <i class="fa fa-check fa-lg"></i>
</button>
<button class="btn btn-primario rounded-circle p-3">
  <i class="fa fa-play fa-lg"></i>
</button>
<button class="btn btn-outline-perigo rounded-circle shadow-none p-4">
  <i class="fa fa-trash fa-2x"></i>
</button>
<button class="btn btn-aux shadow-none">
  Sem sombra
</button>`.trim();
        this.cssCodeExemplo = `.btn-exemplo button {
    margin-left: 1rem;
    margin-right: 1rem;
}`.trim();
        this.htmlCodeTodosTematicos = `        <div class="table-responsive">
  <table class="table table-caixa table-borderless">
    <tbody>
      <ng-container *ngFor="let tema of temas; let i = index">
        <tr>
          <td><button class="btn btn-{{tema.name}}">Padrão</button></td>
          <td><button class="btn btn-{{tema.name}}-light">Claro</button></td>
          <td><button class="btn btn-{{tema.name}}-dark">Escuro</button></td>
          <td><button class="btn btn-outline-{{tema.name}}">Outline</button></td>
          <td><button class="btn btn-outline-{{tema.name}}-light">Claro</button></td>
          <td><button class="btn btn-outline-{{tema.name}}-dark">Escuro</button></td>
        </tr>
      </ng-container>
    </tbody>
  </table>
</div>`.trim();
        this.tsCodeTodosTematicos = `  import { Component } from '@angular/core';

  @Component({
      selector: 'app-botoes',
      templateUrl: './botoes.component.html',
      styleUrls: ['./botoes.component.scss']
  })
  export class BotoesComponent {

    temas = [
      { "name": "primary" },
      { "name": "secondary" },
      { "name": "success" },
      { "name": "danger" },
      { "name": "info" },
      { "name": "warning" },
      { "name": "apoio" },
      { "name": "aux" },
      { "name": "light" },
      { "name": "dark" }
    ]
  }
  `.trimRight();
    }
    ngOnInit() {
    }
}
BotoesComponent.ɵfac = function BotoesComponent_Factory(t) { return new (t || BotoesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"])); };
BotoesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BotoesComponent, selectors: [["app-botoes"]], viewQuery: function BotoesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.scrollElement = _t.first);
    } }, hostBindings: function BotoesComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function BotoesComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 92, vars: 26, consts: [[1, "titulo"], ["role", "tablist", 1, "nav", "nav-pills", "tab-caixa"], [1, "nav-item"], ["data-toggle", "tab", "href", "#visaoGeral", "role", "tab", 1, "nav-link", "text-uppercase", "active"], ["data-toggle", "tab", "href", "#exemplos", "role", "tab", 1, "nav-link", "text-uppercase"], [1, "tab-content"], ["id", "visaoGeral", "role", "tabpanel", 1, "tab-pane", "fade", "show", "active"], [1, "row", "no-gutters"], [1, "col-12", "col-xl-9", "pr-2", "mb-5"], ["scrollElement", ""], ["id", "painelBotoes", 3, "showCodeButton", "cardTitle", "codeViewId", "htmlTabId", "htmlCode"], [1, "descricao"], ["routerLink", "/cores", 1, "text-destaque"], [1, "conteudo"], [1, "btn", "btn-main"], [1, "btn", "btn-accent"], [1, "btn", "btn-cancel"], [1, "btn", "btn-outline-aux"], [1, "btn", "btn-danger", "btn-sm"], [1, "btn", "btn-success", "btn-lg"], [1, "btn", "btn-warning"], [1, "btn", "btn-info"], [1, "btn", "btn-link"], [1, "mt-3"], [3, "highlight", "languages"], ["id", "painelBotoesTamanho", 3, "showCodeButton", "cardTitle", "codeViewId", "htmlTabId", "htmlCode"], [1, "btn", "btn-accent", "btn-sm"], [1, "fa", "fa-plus", "mr-2"], [1, "btn", "btn-outline-accent"], [1, "fa", "fa-edit", "mr-2"], [1, "btn", "btn-main", "btn-lg"], [1, "fa", "fa-lg", "fa-save", "mr-3"], ["id", "navSection", 1, "d-none", "col-3", "d-xl-flex", "pl-4"], [3, "items", "currentSection"], ["id", "exemplos", "role", "tabpanel", 1, "tab-pane", "fade"], [3, "showCodeButton", "cardTitle", "codeViewId", "htmlTabId", "htmlCode", "tsTabId", "tsCode"], [1, "table-responsive"], [1, "table", "table-caixa", "table-borderless"], [4, "ngFor", "ngForOf"], ["disabled", ""]], template: function BotoesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Bot\u00F5es\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Vis\u00E3o Geral ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Exemplos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "section", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "app-documentacao-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Seguir o padr\u00E3o do Bootstrap com as classes tem\u00E1ticas definidas no menu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Cores");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Todas as variantes (outline, block, lg, sm) est\u00E3o dispon\u00EDveis. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Principal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Destaque");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Auxiliar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Perigo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Sucesso");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Alerta");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Informativo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "pre", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "code", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "app-documentacao-template", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, " Utilizar \u00EDcones ao lado esquerdo do texto, conforme segue:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "- Bot\u00F5es pequenos:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, " \u00EDcones comuns (classe \"fa/fas/far\") com espa\u00E7amento \u00E0 direita padr\u00E3o de 0.5rem (classe \"mr-2\").");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "- Bot\u00F5es de tamanho normal:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, " \u00EDcones comuns (classe \"fa/fas/far\") com espa\u00E7amento \u00E0 direita padr\u00E3o de 0.5rem (classe \"mr-2\").");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "- Bot\u00F5es grandes:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, " \u00EDcones grandes (classe \"fa/fas/far\" acompanhada da \"fa-lg\") com espa\u00E7amento \u00E0 direita padr\u00E3o de 1rem (classe \"mr-3\").");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Incluir ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Editar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Salvar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "pre", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "code", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "nav", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "app-code-fixed-nav", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "app-documentacao-template", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "table", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](91, BotoesComponent_ng_container_91_Template, 17, 15, "ng-container", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showCodeButton", false)("cardTitle", "Padr\u00E3o")("codeViewId", "viewBotoes")("htmlTabId", "htmlCodeBotoes")("htmlCode", ctx.htmlCodeBotoes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx.botoesIntroducao)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](24, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showCodeButton", false)("cardTitle", "\u00CDcones")("codeViewId", "viewBotoesTamanho")("htmlTabId", "htmlCodeBotoesTamanho")("htmlCode", ctx.htmlCodeBotoesTamanho);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx.botoesIcones)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](25, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.navItems)("currentSection", ctx.currentSection);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showCodeButton", false)("cardTitle", "Tem\u00E1ticos")("codeViewId", "viewBotoesTodosTematicos")("htmlTabId", "htmlCodeTodosTematicos")("htmlCode", ctx.htmlCodeTodosTematicos)("tsTabId", "tsCodeTodosTematicos")("tsCode", ctx.tsCodeTodosTematicos);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.temas);
    } }, directives: [_shared_components_documentacao_template_documentacao_template_component__WEBPACK_IMPORTED_MODULE_3__["DocumentacaoTemplateComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], ngx_highlightjs__WEBPACK_IMPORTED_MODULE_5__["Highlight"], _shared_components_code_fixed_nav_code_fixed_nav_component__WEBPACK_IMPORTED_MODULE_6__["CodeFixedNavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: [".btn-exemplo[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n\tmargin-left: 1rem;\r\n\tmargin-right: 1rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvdG9lcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsaUJBQWlCO0NBQ2pCLGtCQUFrQjtBQUNuQiIsImZpbGUiOiJib3RvZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tZXhlbXBsbyBidXR0b24ge1xyXG5cdG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG5cdG1hcmdpbi1yaWdodDogMXJlbTtcclxufSJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=demonstracao-componentes-basicos-componentes-basicos-module-es2015.js.map