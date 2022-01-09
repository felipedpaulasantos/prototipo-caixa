"use strict";
(self["webpackChunkprototipo_caixa"] = self["webpackChunkprototipo_caixa"] || []).push([["src_app_demonstracao_paginas_paginas_module_ts"],{

/***/ 88461:
/*!****************************************************************!*\
  !*** ./src/app/demonstracao/paginas/paginas-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginasRoutingModule": () => (/* binding */ PaginasRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _paginas_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paginas.component */ 7673);
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload/upload.component */ 98937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: "", component: _paginas_component__WEBPACK_IMPORTED_MODULE_0__.PaginasComponent
    },
    {
        path: "upload", component: _upload_upload_component__WEBPACK_IMPORTED_MODULE_1__.UploadComponent,
    }
];
class PaginasRoutingModule {
}
PaginasRoutingModule.ɵfac = function PaginasRoutingModule_Factory(t) { return new (t || PaginasRoutingModule)(); };
PaginasRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PaginasRoutingModule });
PaginasRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PaginasRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 7673:
/*!***********************************************************!*\
  !*** ./src/app/demonstracao/paginas/paginas.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginasComponent": () => (/* binding */ PaginasComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-ui-loader */ 99581);
/* harmony import */ var _componentes_datatable_demonstracao_random_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../componentes/datatable-demonstracao/random-data.service */ 59038);
/* harmony import */ var _guia_caixa_components_extrato_extrato_extrato_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../guia-caixa/components/extrato/extrato/extrato.component */ 61723);
/* harmony import */ var _guia_caixa_components_extrato_extrato_tabela_extrato_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../guia-caixa/components/extrato/extrato/tabela-extrato.directive */ 41996);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);









const _c0 = ["extratoTeste"];
function PaginasComponent_tr_82_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PaginasComponent_tr_82_Template_td_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const stripe_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.teste(stripe_r2.valid_card); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stripe_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](stripe_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](stripe_r2.valid_card);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](stripe_r2.ccv);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", stripe_r2.year, "-", stripe_r2.month, "-01");
} }
const _c1 = function () { return { "text-success": true }; };
const _c2 = function () { return { "text-danger": false }; };
const _c3 = function () { return { "text-danger": true }; };
const _c4 = function (a0) { return { "text-cancel": a0 }; };
class PaginasComponent {
    constructor(ngxLoader, fb, randomService) {
        this.ngxLoader = ngxLoader;
        this.fb = fb;
        this.randomService = randomService;
        this.formTeste = this.fb.group({
            cpf: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("39761837840", []),
            nis: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("21070628575", []),
            cnpj: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("00360305000104", [])
        });
        this.cpf = this.formTeste.controls.cpf;
        this.nis = this.formTeste.controls.nis;
        this.cnpj = this.formTeste.controls.cnpj;
        this.formCampoUnico = this.fb.group({
            campoUnico: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("39761837840", []),
            tipoCampo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("cpf")
        });
        this.campoUnico = this.formCampoUnico.controls.campoUnico;
        this.tipoCampo = this.formCampoUnico.controls.tipoCampo;
        this.randomStripes = [];
        this.sortFunctionTeste = (a, b) => {
            return (a < b) ? -1 : ((a > b) ? 1 : 0);
        };
    }
    ngOnInit() {
        this.ngxLoader.start("loader-1");
        this.randomService.getRandomStripeData(20).subscribe((response) => {
            this.randomStripes = response;
            if (this.extratoTeste) {
                this.extratoTeste.reload();
            }
        });
    }
    validaCampo(valor) {
        if (this.isCpf(valor)) {
            this.tipoCampo.setValue("cpf");
        }
        else if (this.isCpnj(valor)) {
            this.tipoCampo.setValue("cnpj");
        }
        else if (this.isNis(valor)) {
            this.tipoCampo.setValue("nis");
        }
        else {
            this.tipoCampo.setValue("cpf / cnpj / nis");
        }
    }
    isCpf(cpf) {
        const multiplicador1 = [10, 9, 8, 7, 6, 5, 4, 3, 2];
        const multiplicador2 = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
        let tempCpf, digito, soma, resto;
        cpf = cpf.trim().replace(".", "").replace("-", "");
        if (cpf.length != 11) {
            return false;
        }
        tempCpf = cpf.substring(0, 9);
        soma = 0;
        for (let i = 0; i < 9; i++) {
            soma += Number.parseInt(tempCpf[i].toString()) * multiplicador1[i];
        }
        resto = soma % 11;
        if (resto < 2) {
            resto = 0;
        }
        else {
            resto = 11 - resto;
        }
        digito = resto.toString();
        tempCpf = tempCpf + digito;
        soma = 0;
        for (let i = 0; i < 10; i++) {
            soma += Number.parseInt(tempCpf[i].toString()) * multiplicador2[i];
        }
        resto = soma % 11;
        if (resto < 2) {
            resto = 0;
        }
        else {
            resto = 11 - resto;
        }
        digito = digito + resto.toString();
        return cpf.endsWith(digito);
    }
    isNis(pis) {
        const multiplicador = [3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        let soma, resto;
        if (pis.trim().length != 11) {
            return false;
        }
        pis = pis.trim().replace("-", "").replace(".", "").padStart(11, "0");
        soma = 0;
        for (let i = 0; i < 10; i++) {
            soma += Number.parseInt(pis[i].toString()) * multiplicador[i];
        }
        resto = soma % 11;
        if (resto < 2) {
            resto = 0;
        }
        else {
            resto = 11 - resto;
        }
        return pis.endsWith(resto.toString());
    }
    isCpnj(cnpj) {
        const multiplicador1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        const multiplicador2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        let soma, resto, digito, tempCnpj;
        cnpj = cnpj.trim().replace(".", "").replace("-", "").replace("/", "");
        if (cnpj.length != 14) {
            return false;
        }
        tempCnpj = cnpj.substring(0, 12);
        soma = 0;
        for (let i = 0; i < 12; i++) {
            soma += Number.parseInt(tempCnpj[i].toString()) * multiplicador1[i];
        }
        resto = (soma % 11);
        if (resto < 2) {
            resto = 0;
        }
        else {
            resto = 11 - resto;
        }
        digito = resto.toString();
        tempCnpj = tempCnpj + digito;
        soma = 0;
        for (let i = 0; i < 13; i++) {
            soma += Number.parseInt(tempCnpj[i].toString()) * multiplicador2[i];
        }
        resto = (soma % 11);
        if (resto < 2) {
            resto = 0;
        }
        else {
            resto = 11 - resto;
        }
        digito = digito + resto.toString();
        return cnpj.endsWith(digito);
    }
    teste(msg) {
        alert(msg);
    }
}
PaginasComponent.ɵfac = function PaginasComponent_Factory(t) { return new (t || PaginasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_5__.NgxUiLoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_componentes_datatable_demonstracao_random_data_service__WEBPACK_IMPORTED_MODULE_0__.RandomDataService)); };
PaginasComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PaginasComponent, selectors: [["app-paginas"]], viewQuery: function PaginasComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.extratoTeste = _t.first);
    } }, decls: 306, vars: 44, consts: [[1, "mb-5"], [1, "subtitulo"], ["cxTabelaExtrato", "", 1, "table"], ["data-agrupador", "true"], [3, "ngClass"], [1, "btn", "btn-accent", 3, "click"], ["routerLink", "/inicio", 1, "btn", "btn-accent"], [3, "sortFunctionAgrupamentos"], ["extratoTeste", ""], ["cxTabelaExtrato", "", 1, "table", "table-striped", "mb-0", "table-bordered"], [4, "ngFor", "ngForOf"], [1, "row", "my-3", 3, "formGroup"], [1, "col-4"], [1, "card"], [1, "card-body"], ["formControlName", "campoUnico", "minlength", "9", "maxlength", "14", 1, "form-control", 3, "input"], [1, "row", "my-5", 3, "formGroup"], [1, "col"], ["formControlName", "cpf", 1, "form-control"], ["formControlName", "nis", 1, "form-control"], ["formControlName", "cnpj", 1, "form-control"], ["id", "cliente-tab"], [1, "cliente-tab-wrapper"], [1, "cliente-tab", "cliente-close", "cliente-current"], [1, "row", "no-gutters"], [1, "col-4", "cliente-tab-left-side"], [1, "left-side-container"], [1, "left-side-container-title"], [1, "col-8", "cliente-tab-right-side"], [1, "cliente-picture-container"], ["src", "assets/images/picture-2.jpeg", "alt", "", 1, "cliente-picture"], [1, "cliente-info-container"], [1, "cliente-tab", "cliente-close"], ["src", "assets/images/profile-picture-round.jpeg", "alt", "", 1, "cliente-picture"], [1, "cliente-tab", "cliente-far"], [1, "col-12", "cliente-tab-left-side"], [1, "consulta-direta-container"], [1, "d-block"], [1, "col-9"], ["placeholder", "CPF / CNPJ", 1, "form-control"], [1, "btn", "btn-accent", "btn-sm", "ml-2"], ["id", "circle-buttons"], [1, "circle-button-container"], [1, "circle-button"], [1, "fa", "fa-pen", "circle-button-icon"], [1, "circle-button-text"], [1, "fa", "fa-users-cog", "circle-button-icon"], [1, "fa", "fa-calendar-plus", "circle-button-icon"], [1, "fa", "fa-chart-pie", "circle-button-icon"], ["id", "agenda"], [1, "calendar-box-container"], [1, "card", "calendar-box", "calendar-box-pending"], [1, "card-header"], [1, "d-flex", "align-items-center"], [1, "d-flex", "align-items-center", "mr-auto"], [1, "fa", "fa-calendar-alt", "calendar-box-icon", "fa-2x", "mr-3"], [1, "ml-auto"], [1, "calendar-box-button", "mr-2"], [1, "fa", "fa-check"], [1, "calendar-box-button"], [1, "fa", "fa-times"], [1, "card", "calendar-box", "calendar-box-done"], [1, "calendar-box-button", "calendar-box-button-check", "mr-2"], [1, "calendar-box-button", "calendar-box-button-times"], [1, "card", "calendar-box", "calendar-box-missed"], [3, "loaderId"], ["id", "card-vertical card-vertical-pending"], [1, "card-vertical-wrapper"], [1, "card-vertical", "card-vertical-pending"], [1, "card-vertical-topside"], [1, "fa", "fa-dollar-sign", "topside-icon"], [1, "mt-2"], [1, "card-vertical-middle"], [1, "card-vertical-bottomside"], [1, "btn", "btn-outline-accent", "btn-sm", "mt-2"], [1, "fa", "fa-pen", "mr-2"], [1, "card-vertical", "card-vertical-ok"], [1, "fa", "fa-credit-card", "topside-icon"], [1, "btn", "btn-accent", "btn-sm", "mt-2"], [1, "progress-line"], [1, "mt-5"], [1, "cursor-pointer", "text-accent", 3, "click"]], template: function PaginasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Extrato est\u00E1tico descendente");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "cx-extrato");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Valor");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Tipo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "2000.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "2021-09-17");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Pagamento");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "3000.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "2021-09-17");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Pagamento");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "4000.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "2021-09-06");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PaginasComponent_Template_button_click_34_listener() { return ctx.teste("teste"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Teste");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "4000.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "2021-09-06");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Pagamento");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "4000.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "2021-09-04");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Ir para o in\u00EDcio");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "4000.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "2021-09-04");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "Pagamento");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "4000.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "2021-09-04");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "Pagamento");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "Extrato din\u00E2mico crescente");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "cx-extrato", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "Valid Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "CCV");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, "Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](82, PaginasComponent_tr_82_Template, 9, 5, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89, "CPF");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90, " / ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](92, "CNPJ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93, " / ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](95, "NIS");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function PaginasComponent_Template_input_input_96_listener($event) { return ctx.validaCampo($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](97, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](101, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](102, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](103);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](105);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](106, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](107, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](108);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](111, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](116, "CPF");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](117, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](118, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](119);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](121);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](122, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](126, "NIS");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](127, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](128, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](129);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](130, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](131);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](132, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](136, "CNPJ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](137, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](138, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](139);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](140, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](141);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](142, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](143, "section", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](144, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](145, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](146, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](148, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](149, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](150, "Atendimento");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](151, "h4", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](152, "Direto");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](153, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](154, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](155, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](156, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](157, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](158, "Fulano de Tal");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](159, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](160, "(99) 9999-9999");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](161, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](162, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](163, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](164, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](165, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](166, "Senha");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](167, "h4", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](168, "LL887");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](169, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](170, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](171, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](172, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](173, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](174, "Ciclana da Silva");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](175, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](176, "(99) 9999-9999");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](177, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](178, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](179, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](180, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](181, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](182, "Senha");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](183, "h4", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](184, "CD2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](185, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](186, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](187, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](188, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](189, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](190, "Senha");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](191, "h4", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](192, "PE062");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](193, "section", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](194, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](195, "Atendimento direto");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](196, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](197, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](198, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](199, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](200, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](201, "Atender");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](202, "section", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](203, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](204, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](205, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](206, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](207, " Gerenciador de atendimento ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](208, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](209, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](210, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](211, " Configura\u00E7\u00F5es pessoais ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](212, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](213, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](214, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](215, " Nova agenda ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](216, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](217, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](218, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](219, " Novas metas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](220, "section", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](221, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](222, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](223, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](224, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](225, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](226, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](227, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](228, "15/05/2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](229, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](230, "button", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](231, "i", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](232, "button", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](233, "i", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](234, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](235, " Lorem ipsum dolor sit amet consectetur adipisicing elit. At nemo corrupti similique sapiente, eos ab ex voluptate necessitatibus culpa ullam ipsa libero. Provident debitis eaque pariatur itaque sit rem accusamus? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](236, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](237, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](238, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](239, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](240, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](241, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](242, "15/05/2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](243, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](244, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](245, "i", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](246, "button", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](247, "i", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](248, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](249, " Lorem ipsum dolor sit amet consectetur adipisicing elit. At nemo corrupti similique sapiente, eos ab ex voluptate necessitatibus culpa ullam ipsa libero. Provident debitis eaque pariatur itaque sit rem accusamus? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](250, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](251, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](252, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](253, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](254, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](255, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](256, "15/05/2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](257, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](258, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](259, "i", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](260, "button", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](261, "i", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](262, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](263, " Lorem ipsum dolor sit amet consectetur adipisicing elit. At nemo corrupti similique sapiente, eos ab ex voluptate necessitatibus culpa ullam ipsa libero. Provident debitis eaque pariatur itaque sit rem accusamus? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](264, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](265, "ngx-ui-loader", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](266, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](267, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](268, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](269, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](270, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](271, "15/05/2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](272, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](273, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](274, "i", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](275, "button", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](276, "i", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](277, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](278, " Lorem ipsum dolor sit amet consectetur adipisicing elit. At nemo corrupti similique sapiente, eos ab ex voluptate necessitatibus culpa ullam ipsa libero. Provident debitis eaque pariatur itaque sit rem accusamus? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](279, "section", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](280, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](281, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](282, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](283, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](284, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](285, "h5", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](286, "Cr\u00E9dito Consignado");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](287, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](288, " Avalia\u00E7\u00E3o de Risco ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](289, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](290, "button", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](291, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](292, "Regularizar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](293, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](294, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](295, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](296, "i", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](297, "h5", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](298, "Cart\u00E3o de Cr\u00E9dito");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](299, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](300, "i", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](301, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](302, "button", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](303, " Contratar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](304, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](305, "hr", 80);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](35, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](36, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](37, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("sortFunctionAgrupamentos", ctx.sortFunctionTeste);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.randomStripes);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.formCampoUnico);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](38, _c4, !ctx.isCpf(ctx.campoUnico.value)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](40, _c4, !ctx.isCpnj(ctx.campoUnico.value)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](42, _c4, !ctx.isNis(ctx.campoUnico.value)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" IS VALID CPF ", ctx.campoUnico.value, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.isCpf(ctx.campoUnico.value) ? "V\u00C1LIDO" : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](101, 23, "INV\u00C1LIDO"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" IS VALID NIS ", ctx.campoUnico.value, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.isNis(ctx.campoUnico.value) ? "V\u00C1LIDO" : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](106, 25, "INV\u00C1LIDO"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" IS VALID CNPJ ", ctx.campoUnico.value, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.isCpnj(ctx.campoUnico.value) ? "V\u00C1LIDO" : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](111, 27, "INV\u00C1LIDO"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.formTeste);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" IS VALID CPF ", ctx.cpf.value, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.isCpf(ctx.cpf.value) ? "V\u00C1LIDO" : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](122, 29, "INV\u00C1LIDO"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" IS VALID NIS ", ctx.nis.value, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.isNis(ctx.nis.value) ? "V\u00C1LIDO" : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](132, 31, "INV\u00C1LIDO"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" IS VALID CNPJ ", ctx.cnpj.value, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.isCpnj(ctx.cnpj.value) ? "V\u00C1LIDO" : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](142, 33, "INV\u00C1LIDO"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](124);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("loaderId", "loader-1");
    } }, directives: [_guia_caixa_components_extrato_extrato_extrato_component__WEBPACK_IMPORTED_MODULE_1__.ExtratoComponent, _guia_caixa_components_extrato_extrato_tabela_extrato_directive__WEBPACK_IMPORTED_MODULE_2__.TabelaExtratoDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator, ngx_ui_loader__WEBPACK_IMPORTED_MODULE_5__["ɵb"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.UpperCasePipe], styles: ["section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n\n\n\n.cliente-tab-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  height: 7.2rem;\n  border-bottom: solid 1px var(--cxCancel);\n  overflow: hidden;\n}\n\n.cliente-tab-wrapper[_ngcontent-%COMP%]   .cliente-tab[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n}\n\n.cliente-tab-wrapper[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-of-type {\n  margin-right: 2rem;\n}\n\n.consulta-direta-container[_ngcontent-%COMP%] {\n  display: block;\n  flex-direction: column;\n  width: 22rem;\n}\n\n.consulta-direta-container[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n\n.cliente-tab[_ngcontent-%COMP%] {\n  display: inline-block;\n  min-height: 6.15rem;\n  height: 6.15rem;\n  width: 23.07rem;\n  max-width: 23.07rem;\n  border-style: solid;\n  border-width: 2px;\n  border-color: var(--cxCancel);\n  border-radius: var(--cxBorderRadius);\n  box-shadow: var(--cxShadowSm);\n  transition: border 0.2s;\n  position: relative;\n  background: linear-gradient(to right, var(--cxAccent) 0%, var(--cxBase) 100%) no-repeat;\n}\n\n.cliente-tab[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  width: 100%;\n  height: 3px;\n  background-color: transparent;\n  position: absolute;\n  bottom: -1.1rem;\n  transition: background-color 0.2s;\n}\n\n.cliente-tab.cliente-current[_ngcontent-%COMP%]::after {\n  background-color: var(--cxAccent);\n}\n\n.cliente-tab.cliente-close[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.cliente-tab.cliente-close[_ngcontent-%COMP%]:hover {\n  border-color: var(--cxAccent);\n}\n\n.cliente-tab.cliente-far[_ngcontent-%COMP%] {\n  width: 9.23rem;\n  border-radius: var(--cxBorderRadius);\n}\n\n.cliente-tab.cliente-far[_ngcontent-%COMP%]   .cliente-tab-left-side[_ngcontent-%COMP%] {\n  background-color: var(--cxAux);\n  border-radius: var(--cxBorderRadius);\n}\n\n.cliente-tab[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  height: 100%;\n  min-height: 100%;\n  max-height: 100%;\n}\n\n.cliente-tab[_ngcontent-%COMP%]   .cliente-tab-left-side[_ngcontent-%COMP%] {\n  background-color: var(--cxAccent);\n  color: var(--cxBase);\n  border-top-left-radius: var(--cxBorderRadius);\n  border-bottom-left-radius: var(--cxBorderRadius);\n}\n\n.cliente-tab[_ngcontent-%COMP%]   .cliente-tab-left-side[_ngcontent-%COMP%]   .left-side-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0.5rem;\n  height: 100%;\n}\n\n.cliente-tab[_ngcontent-%COMP%]   .cliente-tab-left-side[_ngcontent-%COMP%]   .left-side-container[_ngcontent-%COMP%]   .left-side-container-title[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.cliente-tab[_ngcontent-%COMP%]   .cliente-tab-right-side[_ngcontent-%COMP%] {\n  background-color: var(--cxBase);\n  display: flex;\n}\n\n.cliente-tab[_ngcontent-%COMP%]   .cliente-tab-right-side[_ngcontent-%COMP%]   .cliente-picture-container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 70px;\n}\n\n.cliente-tab[_ngcontent-%COMP%]   .cliente-tab-right-side[_ngcontent-%COMP%]   .cliente-picture-container[_ngcontent-%COMP%]   .cliente-picture[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 5rem;\n  height: 5rem;\n  border: solid 2px var(--cxCancel);\n  box-shadow: var(--cxShadowSm);\n  border-radius: var(--cxBorderRadiusRound);\n  -o-object-fit: cover;\n  object-fit: cover;\n  position: absolute;\n  top: 7px;\n  left: -10px;\n}\n\n.cliente-tab[_ngcontent-%COMP%]   .cliente-tab-right-side[_ngcontent-%COMP%]   .cliente-info-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0.5rem 0.25rem;\n  flex: 1;\n}\n\n.cliente-tab[_ngcontent-%COMP%]   .cliente-tab-right-side[_ngcontent-%COMP%]   .cliente-info-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .cliente-tab[_ngcontent-%COMP%]   .cliente-tab-right-side[_ngcontent-%COMP%]   .cliente-info-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .cliente-tab[_ngcontent-%COMP%]   .cliente-tab-right-side[_ngcontent-%COMP%]   .cliente-info-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .cliente-tab[_ngcontent-%COMP%]   .cliente-tab-right-side[_ngcontent-%COMP%]   .cliente-info-container[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .cliente-tab[_ngcontent-%COMP%]   .cliente-tab-right-side[_ngcontent-%COMP%]   .cliente-info-container[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .cliente-tab[_ngcontent-%COMP%]   .cliente-tab-right-side[_ngcontent-%COMP%]   .cliente-info-container[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-family: var(--cxFontFamilyBold);\n  color: var(--cxAccent);\n}\n\n\n\n.circle-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.circle-button-container[_ngcontent-%COMP%]   .circle-button[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n}\n\n.circle-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 10rem;\n  width: 10rem;\n  border-style: solid;\n  border-width: 2px;\n  border-color: var(--cxCancel);\n  border-radius: var(--cxBorderRadiusRound);\n  background-color: var(--cxBase);\n  text-align: center;\n  cursor: pointer;\n  transition: border 0.2s, box-shadow 0.2s;\n  box-shadow: var(--cxShadowSm);\n}\n\n.circle-button[_ngcontent-%COMP%]:hover {\n  border-color: var(--cxAccent);\n}\n\n.circle-button[_ngcontent-%COMP%]   .circle-button-icon[_ngcontent-%COMP%] {\n  color: var(--cxAccent);\n  font-size: 2rem;\n  margin-bottom: 1rem;\n}\n\n.circle-button[_ngcontent-%COMP%]   .circle-button-text[_ngcontent-%COMP%] {\n  line-height: 1.3rem;\n  position: relative;\n}\n\n\n\n.calendar-box-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n}\n\n.calendar-box-container[_ngcontent-%COMP%]   .calendar-box[_ngcontent-%COMP%]:not(:last-of-type) {\n  margin-right: 2rem;\n}\n\n.calendar-box[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-width: 23.07rem;\n  max-width: 23.07rem;\n  min-height: 16.92rem;\n  height: auto;\n  border-style: solid;\n  border-width: 2px;\n  border-color: var(--cxCancel);\n  transition: border 0.2s;\n  box-shadow: var(--cxShadowSm);\n}\n\n.calendar-box[_ngcontent-%COMP%]:hover {\n  border-color: var(--cxAccent);\n}\n\n.calendar-box[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  opacity: 0.9;\n  border-bottom: solid 2px var(--cxCancel);\n  border-radius: 0;\n}\n\n.calendar-box[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .calendar-box-icon[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\n\n.calendar-box[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .calendar-box-button[_ngcontent-%COMP%] {\n  background-color: var(--cxCancel);\n  color: var(--cxBase);\n  border: solid 1px var(--cxCancel);\n  border-radius: 1rem;\n  height: 2rem;\n  width: 2rem;\n  text-align: center;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition: background-color 0.2s, border 0.2s, color 0.2s;\n}\n\n.calendar-box[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .calendar-box-button[_ngcontent-%COMP%]:hover {\n  color: var(--cxBase);\n  border: solid 1px var(--cxCancel);\n  background-color: var(--cxAux);\n}\n\n.calendar-box.calendar-box-pending[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  background-color: var(--cxAccent);\n  color: var(--cxBase);\n}\n\n.calendar-box.calendar-box-done[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .calendar-box-button.calendar-box-button-check[_ngcontent-%COMP%] {\n  background-color: var(--cxSuccess);\n  color: var(--cxBase);\n  border: solid 1px var(--cxSuccess);\n}\n\n.calendar-box.calendar-box-done[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  background-color: var(--cxBase);\n  color: var(--cxSuccess);\n}\n\n.calendar-box.calendar-box-missed[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .calendar-box-button.calendar-box-button-times[_ngcontent-%COMP%] {\n  background-color: var(--cxDanger);\n  color: var(--cxBase);\n  border: solid 1px var(--cxDanger);\n}\n\n.calendar-box.calendar-box-missed[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  background-color: var(--cxBase);\n  color: var(--cxAux);\n}\n\n\n\n.card-vertical-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.card-vertical-wrapper[_ngcontent-%COMP%]   .card-vertical[_ngcontent-%COMP%]:not(:last-of-type) {\n  margin-right: 2rem;\n}\n\n.card-vertical[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n  width: 13.07rem;\n  min-height: 13.84rem;\n  border-style: solid;\n  border-width: 2px;\n  border-color: var(--cxCancel);\n  border-radius: var(--cxBorderRadius);\n  position: relative;\n  background: linear-gradient(to bottom, var(--cxAccent) 0%, var(--cxBase) 100%) no-repeat;\n  transition: border 0.2s, box-shadow 0.2s;\n  box-shadow: var(--cxShadowSm);\n}\n\n.card-vertical[_ngcontent-%COMP%]:hover {\n  border-color: var(--cxAccent);\n}\n\n.card-vertical[_ngcontent-%COMP%]   .card-vertical-topside[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--cxAccent);\n  color: var(--cxBase);\n  height: 65%;\n  border: solid 1px var(--cxAccent);\n  border-top-right-radius: var(--cxBorderRadius);\n  border-top-left-radius: var(--cxBorderRadius);\n}\n\n.card-vertical[_ngcontent-%COMP%]   .card-vertical-topside[_ngcontent-%COMP%]   .topside-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n\n.card-vertical[_ngcontent-%COMP%]   .card-vertical-middle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 2rem;\n  position: absolute;\n  bottom: 3.8rem;\n  text-align: center;\n}\n\n.card-vertical.card-vertical-pending[_ngcontent-%COMP%]   .card-vertical-middle[_ngcontent-%COMP%] {\n  border-radius: 1rem;\n  width: 90%;\n  position: absolute;\n  bottom: 3.8rem;\n  background-color: var(--cxMain);\n  color: var(--cxContrast);\n  font-size: 0.9rem;\n}\n\n.card-vertical.card-vertical-ok[_ngcontent-%COMP%]   .card-vertical-middle[_ngcontent-%COMP%] {\n  border-radius: var(--cxBorderRadiusRound);\n  width: 2rem;\n  border: solid 2px var(--cxBase);\n  background-color: var(--cxAccent);\n}\n\n.card-vertical[_ngcontent-%COMP%]   .card-vertical-bottomside[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  flex-grow: 1;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  background-color: var(--cxBase);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2luYXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyxtQkFBQTtBQUNIOztBQUVBOztDQUFBOztBQUdBO0VBQ0csYUFBQTtFQUNBLGNBQUE7RUFDQSx3Q0FBQTtFQUNBLGdCQUFBO0FBQ0g7O0FBQUc7RUFDRyxrQkFBQTtBQUVOOztBQUFHO0VBQ0csa0JBQUE7QUFFTjs7QUFDQTtFQUNHLGNBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFFSDs7QUFERztFQUNHLHFCQUFBO0FBR047O0FBQUE7RUFDRyxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUZBQUE7QUFHSDs7QUFGRztFQUNHLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FBSU47O0FBRkc7RUFDRyxpQ0FBQTtBQUlOOztBQUZHO0VBQ0csZUFBQTtBQUlOOztBQUhNO0VBQ0csNkJBQUE7QUFLVDs7QUFGRztFQUNHLGNBQUE7RUFDQSxvQ0FBQTtBQUlOOztBQUhNO0VBQ0csOEJBQUE7RUFDQSxvQ0FBQTtBQUtUOztBQUZHO0VBQ0csWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFJTjs7QUFGRztFQUNHLGlDQUFBO0VBQ0Esb0JBQUE7RUFDQSw2Q0FBQTtFQUNBLGdEQUFBO0FBSU47O0FBSE07RUFDRyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBS1Q7O0FBSlM7RUFDRyxnQkFBQTtBQU1aOztBQUZHO0VBQ0csK0JBQUE7RUFDQSxhQUFBO0FBSU47O0FBSE07RUFDRyxhQUFBO0VBQ0EsV0FBQTtBQUtUOztBQUpTO0VBQ0cscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0EsNkJBQUE7RUFDQSx5Q0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FBTVo7O0FBSE07RUFDRyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLE9BQUE7QUFLVDs7QUFKUztFQUNHLG9DQUFBO0VBQ0Esc0JBQUE7QUFNWjs7QUFFQTs7Q0FBQTs7QUFHQTtFQUNHLGFBQUE7RUFDQSxtQkFBQTtBQUNIOztBQUFHO0VBQ0csa0JBQUE7QUFFTjs7QUFDQTtFQUNHLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5Q0FBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSw2QkFBQTtBQUVIOztBQURHO0VBQ0csNkJBQUE7QUFHTjs7QUFERztFQUNHLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBR047O0FBREc7RUFDRyxtQkFBQTtFQUNBLGtCQUFBO0FBR047O0FBRUE7O0NBQUE7O0FBR0E7RUFDRyxhQUFBO0VBQ0EsdUJBQUE7QUFDSDs7QUFBRztFQUNHLGtCQUFBO0FBRU47O0FBQ0E7RUFDRyxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0FBRUg7O0FBREc7RUFDRyw2QkFBQTtBQUdOOztBQURHO0VBQ0csWUFBQTtFQUNBLHdDQUFBO0VBQ0EsZ0JBQUE7QUFHTjs7QUFGTTtFQUNHLGlCQUFBO0FBSVQ7O0FBRk07RUFDRyxpQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSwwREFBQTtBQUlUOztBQUhTO0VBQ0csb0JBQUE7RUFDQSxpQ0FBQTtFQUNBLDhCQUFBO0FBS1o7O0FBQU07RUFDRyxpQ0FBQTtFQUNBLG9CQUFBO0FBRVQ7O0FBR1M7RUFDRyxrQ0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0NBQUE7QUFEWjs7QUFJTTtFQUNHLCtCQUFBO0VBQ0EsdUJBQUE7QUFGVDs7QUFPUztFQUNHLGlDQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQ0FBQTtBQUxaOztBQVFNO0VBQ0csK0JBQUE7RUFDQSxtQkFBQTtBQU5UOztBQVdBOztDQUFBOztBQUdBO0VBQ0csYUFBQTtBQVJIOztBQVNHO0VBQ0csa0JBQUE7QUFQTjs7QUFVQTtFQUNHLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0ZBQUE7RUFDQSx3Q0FBQTtFQUNBLDZCQUFBO0FBUEg7O0FBUUc7RUFDRyw2QkFBQTtBQU5OOztBQVFHO0VBQ0csYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlDQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSw4Q0FBQTtFQUNBLDZDQUFBO0FBTk47O0FBT007RUFDRyxlQUFBO0FBTFQ7O0FBUUc7RUFDRyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQU5OOztBQVNNO0VBQ0csbUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsK0JBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0FBUFQ7O0FBV007RUFDRyx5Q0FBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtFQUNBLGlDQUFBO0FBVFQ7O0FBWUc7RUFDRyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtBQVZOIiwiZmlsZSI6InBhZ2luYXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcclxuICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuLyogXHJcbiAgIENMSUVOVEUgVEFCXHJcbiovXHJcbi5jbGllbnRlLXRhYi13cmFwcGVyIHtcclxuICAgZGlzcGxheTogZmxleDtcclxuICAgaGVpZ2h0OiA3LjJyZW07XHJcbiAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCB2YXIoLS1jeENhbmNlbCk7XHJcbiAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgIC5jbGllbnRlLXRhYiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgfVxyXG4gICA+IGRpdjpsYXN0LW9mLXR5cGUge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XHJcbiAgIH1cclxufVxyXG4uY29uc3VsdGEtZGlyZXRhLWNvbnRhaW5lciB7XHJcbiAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICB3aWR0aDogMjJyZW07XHJcbiAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgIH1cclxufVxyXG4uY2xpZW50ZS10YWIge1xyXG4gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgIG1pbi1oZWlnaHQ6IDYuMTVyZW07XHJcbiAgIGhlaWdodDogNi4xNXJlbTtcclxuICAgd2lkdGg6IDIzLjA3cmVtO1xyXG4gICBtYXgtd2lkdGg6IDIzLjA3cmVtO1xyXG4gICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jeENhbmNlbCk7XHJcbiAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWN4Qm9yZGVyUmFkaXVzKTtcclxuICAgYm94LXNoYWRvdzogdmFyKC0tY3hTaGFkb3dTbSk7XHJcbiAgIHRyYW5zaXRpb246IGJvcmRlciAwLjJzO1xyXG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tY3hBY2NlbnQpIDAlLCB2YXIoLS1jeEJhc2UpIDEwMCUpIG5vLXJlcGVhdDtcclxuICAgJjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAzcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvdHRvbTogLTEuMXJlbTtcclxuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xyXG4gICB9XHJcbiAgICYuY2xpZW50ZS1jdXJyZW50OjphZnRlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN4QWNjZW50KTtcclxuICAgfVxyXG4gICAmLmNsaWVudGUtY2xvc2Uge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWN4QWNjZW50KTtcclxuICAgICAgfVxyXG4gICB9XHJcbiAgICYuY2xpZW50ZS1mYXIge1xyXG4gICAgICB3aWR0aDogOS4yM3JlbTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tY3hCb3JkZXJSYWRpdXMpO1xyXG4gICAgICAuY2xpZW50ZS10YWItbGVmdC1zaWRlIHtcclxuICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3hBdXgpO1xyXG4gICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1jeEJvcmRlclJhZGl1cyk7XHJcbiAgICAgIH1cclxuICAgfVxyXG4gICAucm93IHtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICB9XHJcbiAgIC5jbGllbnRlLXRhYi1sZWZ0LXNpZGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jeEFjY2VudCk7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1jeEJhc2UpO1xyXG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiB2YXIoLS1jeEJvcmRlclJhZGl1cyk7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IHZhcigtLWN4Qm9yZGVyUmFkaXVzKTtcclxuICAgICAgLmxlZnQtc2lkZS1jb250YWluZXIge1xyXG4gICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgIC5sZWZ0LXNpZGUtY29udGFpbmVyLXRpdGxlIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgIH1cclxuICAgLmNsaWVudGUtdGFiLXJpZ2h0LXNpZGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jeEJhc2UpO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAuY2xpZW50ZS1waWN0dXJlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgICAgICAuY2xpZW50ZS1waWN0dXJlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogNXJlbTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1cmVtO1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1jeENhbmNlbCk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWN4U2hhZG93U20pO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1jeEJvcmRlclJhZGl1c1JvdW5kKTtcclxuICAgICAgICAgICAgLW8tb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogN3B4O1xyXG4gICAgICAgICAgICBsZWZ0OiAtMTBweDtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5jbGllbnRlLWluZm8tY29udGFpbmVyIHtcclxuICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgcGFkZGluZzogMC41cmVtIDAuMjVyZW07XHJcbiAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tY3hGb250RmFtaWx5Qm9sZCk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jeEFjY2VudCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9XHJcbn1cclxuXHJcblxyXG5cclxuLyogXHJcbiAgIENJUkNMRSBCVVRUT04gXHJcbiovXHJcbi5jaXJjbGUtYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgIC5jaXJjbGUtYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICB9XHJcbn1cclxuLmNpcmNsZS1idXR0b24ge1xyXG4gICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgIGhlaWdodDogMTByZW07XHJcbiAgIHdpZHRoOiAxMHJlbTtcclxuICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgIGJvcmRlci1jb2xvcjogdmFyKC0tY3hDYW5jZWwpO1xyXG4gICBib3JkZXItcmFkaXVzOiB2YXIoLS1jeEJvcmRlclJhZGl1c1JvdW5kKTtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3hCYXNlKTtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgIHRyYW5zaXRpb246IGJvcmRlciAwLjJzLCBib3gtc2hhZG93IDAuMnM7XHJcbiAgIGJveC1zaGFkb3c6IHZhcigtLWN4U2hhZG93U20pO1xyXG4gICAmOmhvdmVyIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jeEFjY2VudCk7XHJcbiAgIH1cclxuICAgLmNpcmNsZS1idXR0b24taWNvbiB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1jeEFjY2VudCk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgfVxyXG4gICAuY2lyY2xlLWJ1dHRvbi10ZXh0IHtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuM3JlbTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICB9XHJcbn1cclxuXHJcblxyXG4vKiBcclxuICAgQ0FMRU5EQVIgQk9YXHJcbiovXHJcbi5jYWxlbmRhci1ib3gtY29udGFpbmVyIHtcclxuICAgZGlzcGxheTogZmxleDtcclxuICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgIC5jYWxlbmRhci1ib3g6bm90KDpsYXN0LW9mLXR5cGUpIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xyXG4gICB9XHJcbn1cclxuLmNhbGVuZGFyLWJveCB7XHJcbiAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICBtaW4td2lkdGg6IDIzLjA3cmVtO1xyXG4gICBtYXgtd2lkdGg6IDIzLjA3cmVtO1xyXG4gICBtaW4taGVpZ2h0OiAxNi45MnJlbTtcclxuICAgaGVpZ2h0OiBhdXRvO1xyXG4gICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jeENhbmNlbCk7XHJcbiAgIHRyYW5zaXRpb246IGJvcmRlciAwLjJzO1xyXG4gICBib3gtc2hhZG93OiB2YXIoLS1jeFNoYWRvd1NtKTtcclxuICAgJjpob3ZlciB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY3hBY2NlbnQpO1xyXG4gICB9XHJcbiAgIC5jYXJkLWhlYWRlciB7XHJcbiAgICAgIG9wYWNpdHk6IDAuOTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IHZhcigtLWN4Q2FuY2VsKTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgLmNhbGVuZGFyLWJveC1pY29uIHtcclxuICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgIH1cclxuICAgICAgLmNhbGVuZGFyLWJveC1idXR0b24ge1xyXG4gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jeENhbmNlbCk7XHJcbiAgICAgICAgIGNvbG9yOiB2YXIoLS1jeEJhc2UpO1xyXG4gICAgICAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1jeENhbmNlbCk7XHJcbiAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICAgICAgIGhlaWdodDogMnJlbTtcclxuICAgICAgICAgd2lkdGg6IDJyZW07XHJcbiAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMsIGJvcmRlciAwLjJzLCBjb2xvciAwLjJzO1xyXG4gICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWN4QmFzZSk7XHJcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWN4Q2FuY2VsKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3hBdXgpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfVxyXG4gICAmLmNhbGVuZGFyLWJveC1wZW5kaW5nIHtcclxuICAgICAgLmNhcmQtYm9keSB7XHJcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN4QWNjZW50KTtcclxuICAgICAgICAgY29sb3I6IHZhcigtLWN4QmFzZSk7XHJcbiAgICAgIH1cclxuICAgfVxyXG4gICAmLmNhbGVuZGFyLWJveC1kb25lIHtcclxuICAgICAgLmNhcmQtaGVhZGVyIHtcclxuICAgICAgICAgLmNhbGVuZGFyLWJveC1idXR0b24uY2FsZW5kYXItYm94LWJ1dHRvbi1jaGVjayB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN4U3VjY2Vzcyk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jeEJhc2UpO1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1jeFN1Y2Nlc3MpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmNhcmQtYm9keSB7XHJcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN4QmFzZSk7XHJcbiAgICAgICAgIGNvbG9yOiB2YXIoLS1jeFN1Y2Nlc3MpO1xyXG4gICAgICB9XHJcbiAgIH0gXHJcbiAgICYuY2FsZW5kYXItYm94LW1pc3NlZCB7XHJcbiAgICAgIC5jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgIC5jYWxlbmRhci1ib3gtYnV0dG9uLmNhbGVuZGFyLWJveC1idXR0b24tdGltZXMge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jeERhbmdlcik7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jeEJhc2UpO1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1jeERhbmdlcik7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuY2FyZC1ib2R5IHtcclxuICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3hCYXNlKTtcclxuICAgICAgICAgY29sb3I6IHZhcigtLWN4QXV4KTtcclxuICAgICAgfVxyXG4gICB9IFxyXG59XHJcblxyXG4vKiBcclxuICAgQ0FSRCBWRVJUSUNBTFxyXG4qL1xyXG4uY2FyZC12ZXJ0aWNhbC13cmFwcGVyIHtcclxuICAgZGlzcGxheTogZmxleDtcclxuICAgLmNhcmQtdmVydGljYWw6bm90KDpsYXN0LW9mLXR5cGUpIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xyXG4gICB9XHJcbn1cclxuLmNhcmQtdmVydGljYWwge1xyXG4gICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgd2lkdGg6IDEzLjA3cmVtO1xyXG4gICBtaW4taGVpZ2h0OiAxMy44NHJlbTtcclxuICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgIGJvcmRlci1jb2xvcjogdmFyKC0tY3hDYW5jZWwpO1xyXG4gICBib3JkZXItcmFkaXVzOiB2YXIoLS1jeEJvcmRlclJhZGl1cyk7XHJcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgdmFyKC0tY3hBY2NlbnQpIDAlLCB2YXIoLS1jeEJhc2UpIDEwMCUpIG5vLXJlcGVhdDtcclxuICAgdHJhbnNpdGlvbjogYm9yZGVyIDAuMnMsIGJveC1zaGFkb3cgMC4ycztcclxuICAgYm94LXNoYWRvdzogdmFyKC0tY3hTaGFkb3dTbSk7XHJcbiAgICY6aG92ZXIge1xyXG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWN4QWNjZW50KTtcclxuICAgfVxyXG4gICAuY2FyZC12ZXJ0aWNhbC10b3BzaWRlIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN4QWNjZW50KTtcclxuICAgICAgY29sb3I6IHZhcigtLWN4QmFzZSk7XHJcbiAgICAgIGhlaWdodDogNjUlO1xyXG4gICAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1jeEFjY2VudCk7XHJcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiB2YXIoLS1jeEJvcmRlclJhZGl1cyk7XHJcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IHZhcigtLWN4Qm9yZGVyUmFkaXVzKTtcclxuICAgICAgLnRvcHNpZGUtaWNvbiB7XHJcbiAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgfVxyXG4gICB9XHJcbiAgIC5jYXJkLXZlcnRpY2FsLW1pZGRsZSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAzLjhyZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgfVxyXG4gICAmLmNhcmQtdmVydGljYWwtcGVuZGluZyB7XHJcbiAgICAgIC5jYXJkLXZlcnRpY2FsLW1pZGRsZSB7XHJcbiAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgYm90dG9tOiAzLjhyZW07XHJcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN4TWFpbik7XHJcbiAgICAgICAgIGNvbG9yOiB2YXIoLS1jeENvbnRyYXN0KTtcclxuICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgIH1cclxuICAgfVxyXG4gICAmLmNhcmQtdmVydGljYWwtb2sge1xyXG4gICAgICAuY2FyZC12ZXJ0aWNhbC1taWRkbGUge1xyXG4gICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1jeEJvcmRlclJhZGl1c1JvdW5kKTtcclxuICAgICAgICAgd2lkdGg6IDJyZW07XHJcbiAgICAgICAgIGJvcmRlcjogc29saWQgMnB4IHZhcigtLWN4QmFzZSk7XHJcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN4QWNjZW50KTtcclxuICAgICAgfVxyXG4gICB9XHJcbiAgIC5jYXJkLXZlcnRpY2FsLWJvdHRvbXNpZGUge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN4QmFzZSk7XHJcbiAgIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 63346:
/*!********************************************************!*\
  !*** ./src/app/demonstracao/paginas/paginas.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginasModule": () => (/* binding */ PaginasModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _paginas_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paginas-routing.module */ 88461);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _paginas_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paginas.component */ 7673);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-mask */ 84409);
/* harmony import */ var src_app_guia_caixa_guia_caixa_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/guia-caixa/guia-caixa.module */ 93981);
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./upload/upload.component */ 98937);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ 51282);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-highlightjs */ 70090);
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-ui-loader */ 99581);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);












class PaginasModule {
}
PaginasModule.ɵfac = function PaginasModule_Factory(t) { return new (t || PaginasModule)(); };
PaginasModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: PaginasModule });
PaginasModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _paginas_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaginasRoutingModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            angular_datatables__WEBPACK_IMPORTED_MODULE_5__.DataTablesModule,
            src_app_guia_caixa_guia_caixa_module__WEBPACK_IMPORTED_MODULE_3__.GuiaCaixaModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            ngx_mask__WEBPACK_IMPORTED_MODULE_9__.NgxMaskModule,
            ngx_highlightjs__WEBPACK_IMPORTED_MODULE_10__.HighlightModule,
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_11__.NgxUiLoaderModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](PaginasModule, { declarations: [_paginas_component__WEBPACK_IMPORTED_MODULE_1__.PaginasComponent, _upload_upload_component__WEBPACK_IMPORTED_MODULE_4__.UploadComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _paginas_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaginasRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        angular_datatables__WEBPACK_IMPORTED_MODULE_5__.DataTablesModule,
        src_app_guia_caixa_guia_caixa_module__WEBPACK_IMPORTED_MODULE_3__.GuiaCaixaModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        ngx_mask__WEBPACK_IMPORTED_MODULE_9__.NgxMaskModule,
        ngx_highlightjs__WEBPACK_IMPORTED_MODULE_10__.HighlightModule,
        ngx_ui_loader__WEBPACK_IMPORTED_MODULE_11__.NgxUiLoaderModule] }); })();


/***/ }),

/***/ 98937:
/*!*****************************************************************!*\
  !*** ./src/app/demonstracao/paginas/upload/upload.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadComponent": () => (/* binding */ UploadComponent)
/* harmony export */ });
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-datatables */ 51282);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var src_app_guia_caixa_components_timeline_timeline_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/guia-caixa/components/timeline/timeline-item */ 10877);
/* harmony import */ var src_app_guia_caixa_components_datatable_datatable_definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/guia-caixa/components/datatable/datatable-definitions */ 38073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-spinner */ 63947);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _guia_caixa_components_button_control_button_control_button_control_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../guia-caixa/components/button-control/button-control/button-control.component */ 84652);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _guia_caixa_components_card_caixa_card_caixa_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../guia-caixa/components/card-caixa/card-caixa.component */ 45290);
/* harmony import */ var _guia_caixa_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../guia-caixa/components/spinner/spinner.component */ 28768);
/* harmony import */ var _guia_caixa_components_datatable_datatable_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../guia-caixa/components/datatable/datatable.component */ 93785);
/* harmony import */ var _guia_caixa_components_select_caixa_select_caixa_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../guia-caixa/components/select-caixa/select-caixa.component */ 99536);
/* harmony import */ var _guia_caixa_components_select_caixa_select_caixa_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../guia-caixa/components/select-caixa/select-caixa.directive */ 20365);
/* harmony import */ var _shared_pipes_cpf_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/pipes/cpf-pipe */ 42091);
/* harmony import */ var _shared_pipes_bytesize_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/pipes/bytesize-pipe */ 19539);


















const _c0 = ["cardHome"];
const _c1 = ["cardChave"];
const _c2 = ["cardCDC"];
const _c3 = ["cardVazio"];
function UploadComponent_ng_container_6_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Adicione alguma imagem ao lado");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function UploadComponent_ng_container_6_ng_container_60_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UploadComponent_ng_container_6_ng_container_60_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r8.open(ctx_r8.previaSrc); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", ctx_r4.uploadedFile.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", ctx_r4.previaSrc, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
} }
function UploadComponent_ng_container_6_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "cx-select");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Tipo do Documento");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "select", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "Documento de Identifica\u00E7\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, "Comprovante de Resid\u00EAncia");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, "Comprovante de Renda");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](17, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](19, "bytesize");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](22, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](24, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r5.uploadedFile.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](19, 3, ctx_r5.uploadedFile.size), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](24, 5, ctx_r5.uploadedFile.lastModified), " ");
} }
function UploadComponent_ng_container_6_button_65_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UploadComponent_ng_container_6_button_65_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r10.addDocumento(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, " Adicionar Documento ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function UploadComponent_ng_container_6_tr_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](10, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](12, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](14, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contrato_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](contrato_r12.numero);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](contrato_r12.situacao);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](7, 3, contrato_r12.valor, "R$"));
} }
function UploadComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "section", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "cx-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "Informa\u00E7\u00F5es Pessoais");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, "Nome:");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, "CPF:");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](16, "cpf");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](19, "Nome da m\u00E3e:");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23, "Nascimento:");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](27, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](28, " Editar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](29, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](30, "h4", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](31, " Novo documento ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](33, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](34, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "div", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("drop", function UploadComponent_ng_container_6_Template_div_drop_35_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r15); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](36); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r14.drop($event, _r1); })("dragover", function UploadComponent_ng_container_6_Template_div_dragover_35_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r15); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](36); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r16.dragOver($event, _r1); })("dragleave", function UploadComponent_ng_container_6_Template_div_dragleave_35_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r15); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](36); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r17.dragLeave($event, _r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](37, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](38, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](39, "h5", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](40, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](41, " Arraste e solte o arquivo aqui ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](42, "h5", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](43, "ou");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](44, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](45, "input", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function UploadComponent_ng_container_6_Template_input_change_45_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r15); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r18.uploadArquivo($event.target.files); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](47, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UploadComponent_ng_container_6_Template_button_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r15); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](46); return _r2.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](48, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](49, " Selecione um arquivo para upload... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](50, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](51, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](52, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](53, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](54, "Pr\u00E9via");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](55, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](56, "cx-spinner", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](57, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](58, UploadComponent_ng_container_6_div_58_Template, 4, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](59, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](60, UploadComponent_ng_container_6_ng_container_60_Template, 3, 2, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](61, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](62, UploadComponent_ng_container_6_div_62_Template, 25, 7, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](63, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](64, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](65, UploadComponent_ng_container_6_button_65_Template, 3, 0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](66, "section", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](67, "cx-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](68, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](69, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](70, " Contratos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](71, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](72, "cx-datatable");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](73, "table", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](74, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](75, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](76, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](77, "N\u00FAmero");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](78, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](79, "Situa\u00E7\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](80, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](81, "Valor");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](82, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](83, "A\u00E7\u00F5es");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](84, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](85, UploadComponent_ng_container_6_tr_85_Template, 15, 6, "tr", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("draggable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r0.cliente.nome, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](16, 12, ctx_r0.cliente.cpf), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r0.cliente.nomeMae, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r0.cliente.dataNascimento, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("fullscreen", false)("name", "spinnerUpload");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r0.previaSrc && !ctx_r0.uploadedFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.previaSrc);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.uploadedFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.uploadedFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r0.contratos);
} }
class UploadComponent {
    constructor(fb, spinner, toastr, renderer) {
        this.fb = fb;
        this.spinner = spinner;
        this.toastr = toastr;
        this.renderer = renderer;
        this.cliente = null;
        this.uploadedFile = null;
        this.contratos = [];
        this.passoAtual = 0;
        this.passos = [
            { title: "Passo 1" },
            { title: "Passo 2" },
            { title: "Passo 3" },
            { title: "Passo 4" },
            { title: "Passo 5" }
        ];
        this.abas = [
            { name: "Passo 1", icon: "fa fa-home" },
            { name: "Passo 2", icon: "fa fa-home" },
            { name: "Passo 3", icon: "fa fa-home" },
            { name: "Passo 4", icon: "fa fa-home" },
            { name: "Passo 5", icon: "fa fa-home" }
        ];
        this.timelineItems = [
            { title: "Item sucesso", state: src_app_guia_caixa_components_timeline_timeline_item__WEBPACK_IMPORTED_MODULE_1__.TimelineState.SUCCESS, date: new Date() },
            { title: "Item warning", state: "warning", date: new Date(), dateFormat: "full" },
            { title: "Item warning-stop", state: "warning-stop", dateString: "05/12/2020" },
            { title: "Item erro", state: "error", dateString: "03/12/2020" },
            { title: "Item info", state: "info", dateString: "06/12/2020" }
        ];
        this.valor = "";
        this.rotas = [
            { url: "tal-rota" },
            { url: "tal-rota" },
            { url: "tal-rota" },
            { url: "tal-rota" },
            { url: "tal-rota" },
        ];
        this.formCpfNis = this.fb.group({
            tipoId: [null],
            cpf: [null],
            nis: [null]
        });
        this.code1Html = `<cx-timeline [items]="timelineItems"></cx-timeline>
`;
        this.code1Ts = `timelineItems: TimelineItem[] = [
  { title: "Item sucesso", state: TimelineState.SUCCESS, date: new Date()  },
  { title: "Item warning", state: "warning", date: new Date(), dateFormat: "full" },
  { title: "Item warning-stop", state: "warning-stop", dateString: "05/12/2020" },
  { title: "Item erro", state: "error", dateString: "03/12/2020" },
  { title: "Item info", state: "info", dateString: "06/12/2020" }
];`;
        this.code2Html = `<cx-timeline [items]="timelineItems" [styles]="{ height: '250px' }"></cx-timeline>
`;
        this.code3Html = `<cx-timeline [items]="timelineItems" [styles]="{ width: 'auto', height: '350px' }"></cx-timeline>
`;
        this.code4Html = `<div class="card">
  <div class="card-body">
    <cx-timeline [items]="timelineItems" [styles]="{ height: '350px' }"></cx-timeline>
  </div>
</div>`;
        this.code6Html = `<cx-timeline [items]="timelineItems" [orientation]="0"></cx-timeline>
`;
        this.rows = [];
        this.config = src_app_guia_caixa_components_datatable_datatable_definitions__WEBPACK_IMPORTED_MODULE_2__.DataTableConfig.COMPLETE_SETTINGS;
        this.configCompleta = src_app_guia_caixa_components_datatable_datatable_definitions__WEBPACK_IMPORTED_MODULE_2__.DataTableConfig.COMPLETE_SETTINGS;
        this.configCompletaSemBotoes = src_app_guia_caixa_components_datatable_datatable_definitions__WEBPACK_IMPORTED_MODULE_2__.DataTableConfig.COMPLETE_NO_BUTTON_SETTINGS;
        this.configInfo = src_app_guia_caixa_components_datatable_datatable_definitions__WEBPACK_IMPORTED_MODULE_2__.DataTableConfig.PAGINATION_INFO_SETTINGS;
        this.configSimples = src_app_guia_caixa_components_datatable_datatable_definitions__WEBPACK_IMPORTED_MODULE_2__.DataTableConfig.SIMPLE_SETTINGS;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Subject();
        this.filterPosition = "";
        this.cols = 0;
    }
    exibirEvento(evento) {
        console.log(evento);
    }
    ngOnInit() {
        this.clientePesquisado();
        this.populaContratos();
        this.preventDragDropDefault();
        this.cols = 3;
        for (let index = 0; index < 100; index++) {
            const element = `Linha ${index + 1}`;
            this.rows.push(element);
        }
        this.rows = [].concat(this.rows);
    }
    populaContratos() {
        for (let index = 0; index < 10; index++) {
            const contrato = {
                numero: `4200.160.0150${index}-${index}`,
                valor: 50000 + (index * 1000),
                situacao: "Pago"
            };
            this.contratos.push(contrato);
        }
    }
    get isCpfNisInvalid() {
        return (this.formCpfNis.get("cpf").invalid && this.formCpfNis.get("nis").invalid)
            || (this.formCpfNis.get("cpf").valid && this.formCpfNis.get("nis").valid);
    }
    pesquisarCpf() {
        this.spinner.show("global");
        setTimeout(() => {
            this.spinner.hide("global");
            this.toastr.success("Cliente pesquisado com sucesso");
            this.clientePesquisado();
        }, 2000);
    }
    clientePesquisado() {
        this.cliente = {
            nome: "Fulano da Silva",
            cpf: this.formCpfNis.get("cpf").value || this.formCpfNis.get("nis").value || "111.111.111-11",
            nis: this.formCpfNis.get("nis").value || "",
            dataNascimento: "01/01/1920",
            nomeMae: "Ciclana da Silva"
        };
    }
    drop(ev, cardEl) {
        ev.preventDefault();
        if (ev.dataTransfer && ev.dataTransfer.files && ev.dataTransfer.files[0]) {
            const files = ev.dataTransfer.files;
            this.uploadArquivo(files);
        }
        this.dragLeave(null, cardEl);
    }
    dragOver(ev, cardEl) {
        this.renderer.addClass(cardEl, "drag-hover");
    }
    dragLeave(ev, cardEl) {
        this.renderer.removeClass(cardEl, "drag-hover");
    }
    uploadArquivo(files) {
        this.previaSrc = null;
        this.uploadedFile = null;
        this.spinner.show("spinnerUpload");
        const file = files[0];
        setTimeout(() => {
            this.fromFileToBase64(file).then((base64) => {
                this.previaSrc = `data:${file.type};base64,${base64}`;
                this.uploadedFile = file;
                this.spinner.hide("spinnerUpload");
            });
        }, 2000);
    }
    addDocumento() {
        this.toastr.success("Documento adicionado com sucesso!", "", { positionClass: "toast-top-right" });
    }
    fromFileToBase64(file, comMetadata = false) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                /* Metadata: 'data:{mimetype};base64,' */
                const resultComMetadata = reader.result.toString();
                const resultSemMetadata = resultComMetadata.replace(/^data:(.*,)?/, "");
                let base64 = comMetadata ? resultComMetadata : resultSemMetadata;
                /* Preenche o base64 com '=' caso não seja múltiplo de 4 - correção de padding */
                if ((base64.length % 4) > 0) {
                    base64 += "=".repeat(4 - (resultSemMetadata.length % 4));
                }
                resolve(base64);
            };
            reader.onerror = error => reject(error);
        });
    }
    open(src) {
        window.open(src);
    }
    preventDragDropDefault() {
        window.addEventListener("dragover", function (e) {
            e.preventDefault();
        }, false);
        window.addEventListener("drop", function (e) {
            e.preventDefault();
        }, false);
    }
    ngAfterViewInit() {
        this.dtTrigger.next();
        this.datatableElement.dtInstance.then((dtInstance) => {
            const table = dtInstance["context"][0]["nTable"];
            const thead = $(table).children("thead")[0];
            const tfoot = $(table).children("tfoot")[0];
            this.drawColumnFilters(dtInstance, table, thead, tfoot);
        });
    }
    updateConfig(newConfig) {
        this.config = JSON.parse(JSON.stringify(newConfig));
        this.updateTable();
    }
    updateConfigOption(option, value) {
        switch (option) {
            case "buttons":
                this.config["buttons"] = value ? src_app_guia_caixa_components_datatable_datatable_definitions__WEBPACK_IMPORTED_MODULE_2__.DatatableDefaultButtonsList : [];
                break;
            case "filter":
                this.config.searching = value;
                break;
            case "pagination":
                this.config.paging = value;
                break;
            case "length":
                this.config.lengthChange = value;
                break;
            case "columnFilter":
                this.config["columnFilter"] = value;
                break;
        }
        this.updateTable();
    }
    updateTable() {
        this.datatableElement.dtOptions = this.config;
        this.datatableElement.dtInstance.then((dtInstance) => {
            dtInstance.destroy();
            this.ngAfterViewInit();
        });
    }
    drawColumnFilters(dtInstance, table, thead, tfoot) {
        if (!this.config["columnFilter"]) {
            dtInstance.columns().every(function () {
                $(this.footer()).remove();
            });
        }
        else if (!tfoot) {
            let tfootHtml = "";
            for (let index = 0; index < dtInstance.columns()[0].length; index++) {
                tfootHtml += `<td></td>`;
            }
            tfootHtml = `<tfoot><tr>${tfootHtml}</tr></tfoot>`;
            $(tfootHtml).insertAfter(thead);
        }
        if (tfoot && this.filterPosition === "top") {
            $(tfoot).addClass("d-table-row-group");
        }
        else if (tfoot && this.filterPosition === "bottom") {
            $(tfoot).removeClass("d-table-row-group");
        }
        if (this.config["columnFilter"] === "input") {
            dtInstance.columns().every(function () {
                const column = this;
                const input = $(`<input class='form-control' placeholder='Filtro'>`)
                    .appendTo($(column.footer()).empty())
                    .on("keyup change", function () {
                    if (column.search() !== this["value"]) {
                        column
                            .search(this["value"])
                            .draw();
                    }
                });
            });
        }
        if (this.config["columnFilter"] === "select") {
            dtInstance.columns().every(function () {
                const column = this;
                const select = $(`<select class='form-control'><option value=\"\">Filtro</option></select>`)
                    .appendTo($(column.footer()).empty())
                    .on("change", function () {
                    const val = $.fn.dataTable.util.escapeRegex(String($(this).val()));
                    column
                        .search(val ? "^" + val + "$" : "", true, false)
                        .draw();
                });
                column.data().unique().sort().each(function (d, j) {
                    select.append("<option value=\"" + d + "\">" + d + "</option>");
                });
            });
        }
    }
}
UploadComponent.ɵfac = function UploadComponent_Factory(t) { return new (t || UploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_14__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_15__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__.Renderer2)); };
UploadComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: UploadComponent, selectors: [["ng-component"]], viewQuery: function UploadComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_0__.DataTableDirective, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.cardHome = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.cardChave = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.cardCDC = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.cardVazio = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.datatableElement = _t.first);
    } }, decls: 7, vars: 1, consts: [["type", "checkbox", 1, "mr-2"], ["type", "radio"], ["id", "painelTestesDiversos"], [4, "ngIf"], ["id", "secaoInformacoesPessoais", 1, "row", "mt-4"], [1, "col-12", "col-xl-4", "mb-3", "mb-xl-0"], [3, "draggable"], [1, "card-header"], [1, "header-subtitulo-caixa"], [1, "card-body"], [1, "py-2"], [1, "font-weight-bold"], [1, "card-footer", "text-right"], [1, "btn", "btn-accent"], [1, "fa", "fa-edit"], ["id", "secaoUploadArquivo", 1, "my-5"], [1, "row"], [1, "col-5"], [1, "p-4", "bg-cinza", "border"], [1, "card", "card-upload", 3, "drop", "dragover", "dragleave"], ["cardDragDrop", ""], [1, "d-flex", "h-100", "justify-content-center", "align-items-center", "text-center", "flex-column"], [1, "mb-5"], [1, "fa", "fa-hand-rock", "fa-lg", "text-muted", "mr-2"], [1, "d-flex", "w-100", "align-items-center"], ["name", "arquivo", "type", "file", "accept", ".pdf, .tiff, .jpg, .jpeg, .png, .gif", 1, "d-none", 3, "change"], ["inputUploadDocIdentidade", ""], ["title", "Upload de arquivo", 1, "btn", "btn-outline-accent", "mx-auto", "d-flex", "align-items-center", 3, "click"], [1, "fas", "fa-file-upload", "fa-2x", "mr-2"], [1, "col-7"], [1, "card", "h-100", "w-100"], [3, "fullscreen", "name"], [1, "row", "h-100"], ["class", "col-12 d-flex flex-column align-items-center justify-content-center", 4, "ngIf"], [1, "col"], ["class", "p-3", 4, "ngIf"], [1, "card-footer"], [1, "d-flex"], ["class", "btn btn-success ml-auto", 3, "click", 4, "ngIf"], ["id", "secaoTabelaContratos", 1, "mt-5"], ["datatable", "", 1, "table", "table-caixa"], [4, "ngFor", "ngForOf"], [1, "col-12", "d-flex", "flex-column", "align-items-center", "justify-content-center"], [1, "fa", "fa-file-image", "fa-10x", "text-cancel", "mb-4"], ["role", "button", 1, "d-flex", "h-100", "w-100", "align-items-center", "justify-content-center", 3, "title", "click"], [1, "img-previa", 3, "src"], [1, "p-3"], ["selectCaixa", ""], [1, "d-block", "mb-3"], [1, "font-fam-bold"], ["title", "Nome do arquivo", 1, "fa", "fa-file-signature", "fa-lg", "mr-2"], ["title", "Tamanho do arquivo", 1, "fa", "fa-weight-hanging", "fa-lg", "mr-2"], [1, "d-block"], ["title", "Data da \u00FAltima modifica\u00E7\u00E3o", 1, "fa", "fa-calendar-day", "fa-lg", "mr-2"], [1, "btn", "btn-success", "ml-auto", 3, "click"], [1, "fa", "fa-plus", "fa-lg", "mr-2"], ["title", "Detalhar", 1, "btn", "btn-sm", "btn-outline-aux", "mr-2"], [1, "fa", "fa-search"], ["title", "Excluir", 1, "btn", "btn-sm", "btn-outline-aux", "mr-2"], [1, "fa", "fa-trash"], ["title", "Confirmar", 1, "btn", "btn-sm", "btn-outline-aux"], [1, "fa", "fa-check"]], template: function UploadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "cx-button-control", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Teste\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "cx-button-control", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " Teste\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](6, UploadComponent_ng_container_6_Template, 86, 14, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.cliente);
    } }, directives: [_guia_caixa_components_button_control_button_control_button_control_component__WEBPACK_IMPORTED_MODULE_3__.ButtonControlComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _guia_caixa_components_card_caixa_card_caixa_component__WEBPACK_IMPORTED_MODULE_4__.CardCaixaComponent, _guia_caixa_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_5__.SpinnerCaixaComponent, _guia_caixa_components_datatable_datatable_component__WEBPACK_IMPORTED_MODULE_6__.DataTableComponent, angular_datatables__WEBPACK_IMPORTED_MODULE_0__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _guia_caixa_components_select_caixa_select_caixa_component__WEBPACK_IMPORTED_MODULE_7__.SelectCaixaComponent, _guia_caixa_components_select_caixa_select_caixa_directive__WEBPACK_IMPORTED_MODULE_8__.SelectCaixaDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgSelectMultipleOption"]], pipes: [_shared_pipes_cpf_pipe__WEBPACK_IMPORTED_MODULE_9__.CpfPipe, _shared_pipes_bytesize_pipe__WEBPACK_IMPORTED_MODULE_10__.ByteSizePipe, _angular_common__WEBPACK_IMPORTED_MODULE_16__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_16__.CurrencyPipe], styles: [".card-upload[_ngcontent-%COMP%] {\n  display: flex;\n  height: 400px;\n  width: 500px;\n  margin: auto;\n  transition: border 0.2s, opacity 0.3s;\n  border: 2px transparent;\n}\n\n.drag-hover[_ngcontent-%COMP%] {\n  opacity: 0.4;\n  border: 2px lightgray dashed;\n}\n\n.img-previa[_ngcontent-%COMP%] {\n  display: flex;\n  margin: auto;\n  border: 1px lightgray solid;\n  height: 100%;\n  max-height: 300px;\n  width: 100%;\n  max-width: 350px;\n  border-radius: var(--cxBorderRadius);\n  transition: all 0.5s ease;\n}\n\n.img-previa[_ngcontent-%COMP%]:hover {\n  filter: brightness(70%);\n  -webkit-filter: brightness(70%);\n}\n\ntfoot[_ngcontent-%COMP%] {\n  display: table-header-group;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwbG9hZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGFBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtFQUNBLHVCQUFBO0FBQ0Q7O0FBRUE7RUFDQyxZQUFBO0VBQ0EsNEJBQUE7QUFDRDs7QUFFQTtFQUNDLGFBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtFQUtBLHlCQUFBO0FBQ0Q7O0FBQUM7RUFDQyx1QkFBQTtFQUNBLCtCQUFBO0FBRUY7O0FBRUE7RUFDQywyQkFBQTtBQUNEIiwiZmlsZSI6InVwbG9hZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLXVwbG9hZCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRoZWlnaHQ6IDQwMHB4O1xyXG5cdHdpZHRoOiA1MDBweDtcclxuXHRtYXJnaW46IGF1dG87XHJcblx0dHJhbnNpdGlvbjogYm9yZGVyIDAuMnMsIG9wYWNpdHkgMC4zcztcclxuXHRib3JkZXI6IDJweCB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmRyYWctaG92ZXIge1xyXG5cdG9wYWNpdHk6IDAuNDtcclxuXHRib3JkZXI6IDJweCBsaWdodGdyYXkgZGFzaGVkO1xyXG59XHJcblxyXG4uaW1nLXByZXZpYSB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRtYXJnaW46IGF1dG87XHJcblx0Ym9yZGVyOiAxcHggbGlnaHRncmF5IHNvbGlkO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRtYXgtaGVpZ2h0OiAzMDBweDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRtYXgtd2lkdGg6IDM1MHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IHZhcigtLWN4Qm9yZGVyUmFkaXVzKTtcdFxyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuXHQtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcblx0LW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuXHQtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG5cdCY6aG92ZXIge1xyXG5cdFx0ZmlsdGVyOiBicmlnaHRuZXNzKDcwJSk7XHJcblx0XHQtd2Via2l0LWZpbHRlcjogYnJpZ2h0bmVzcyg3MCUpO1xyXG5cdH1cclxufVxyXG5cclxudGZvb3Qge1xyXG5cdGRpc3BsYXk6IHRhYmxlLWhlYWRlci1ncm91cDtcclxufSJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_demonstracao_paginas_paginas_module_ts.js.map