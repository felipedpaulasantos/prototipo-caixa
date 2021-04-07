function _classCallCheck(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,o){for(var t=0;t<o.length;t++){var a=o[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,o,t){return o&&_defineProperties(e.prototype,o),t&&_defineProperties(e,t),e}function _inherits(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),o&&_setPrototypeOf(e,o)}function _setPrototypeOf(e,o){return(_setPrototypeOf=Object.setPrototypeOf||function(e,o){return e.__proto__=o,e})(e,o)}function _createSuper(e){var o=_isNativeReflectConstruct();return function(){var t,a=_getPrototypeOf(e);if(o){var n=_getPrototypeOf(this).constructor;t=Reflect.construct(a,arguments,n)}else t=a.apply(this,arguments);return _possibleConstructorReturn(this,t)}}function _possibleConstructorReturn(e,o){return!o||"object"!=typeof o&&"function"!=typeof o?_assertThisInitialized(e):o}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{LWRd:function(e,o,t){"use strict";t.d(o,"a",(function(){return h}));var a=t("pRMn"),n=t("l36o"),r=t("fXoL"),i=t("5eHb"),s=t("JqCM"),c=t("c2tx"),d=t("r5ma"),b=t("wTG2"),l=t("3Pt+"),m=t("ofXK"),p=t("j1XF"),u=["scrollElement"];function v(e,o){if(1&e&&(r.Tb(0,"ng-option",51),r.Hc(1),r.Sb()),2&e){var t=o.$implicit;r.jc("value",t.value),r.zb(1),r.Jc(" ",t.key," ")}}var h=function(){var e=function(e){_inherits(t,e);var o=_createSuper(t);function t(e,a,r){var i;return _classCallCheck(this,t),(i=o.call(this,e)).toastr=e,i.spinner=a,i.modalService=r,i.modalSize=n.a,i.spiedTags=["APP-DOCUMENTACAO-TEMPLATE"],i.sectionOffset=0,i.currentSection="painelMensagens",i.navItems=[{id:"painelMensagens",name:"Notifica\xe7\xf5es"},{id:"painelModal",name:"Modais"},{id:"painelSpinner",name:"Carregamento"}],i.htmlCodeMensagens='        <button class="btn btn-caixa btn-success" (click)="exibirSucesso()">\n  Sucesso!\n</button> &nbsp;\n\n<button class="btn btn-caixa btn-danger" (click)="exibirErro()">\n  Erro!\n</button> &nbsp;\n\n<button class="btn btn-caixa btn-alerta" (click)="exibirAlerta()">\n  Alerta!\n</button> &nbsp;\n\n<button class="btn btn-caixa btn-info" (click)="exibirInfo()">\n  Informa\xe7\xe3o!\n</button> &nbsp;'.trim(),i.tsCodeMensagens="  import { Component } from '@angular/core';\n  import { ToastrService } from 'ngx-toastr';\n\n  @Component({\n      selector: 'app-mensagens',\n      templateUrl: './mensagens.component.html',\n      styleUrls: ['./mensagens.component.scss']\n  })\n  export class MensagensComponent {\n\n    constructor(\n      private toastr: ToastrService\n    ) {}\n\n    exibirSucesso() {\n      this.toastr.success('Sucesso!');\n    }\n\n    exibirErro() {\n      this.toastr.error('Ocorreu um erro!', 'Erro!');\n    }\n\n    exibirAlerta() {\n      this.toastr.warning('Alerta!', null, { positionClass: 'toast-top-right', progressBar: false });\n    }\n\n    exibirInfo() {\n      this.toastr.info('Informa\xe7\xe3o!', 'Importante!', { positionClass: 'toast-bottom-right', progressBar: false });\n    }\n  }\n  ".trimRight(),i.htmlCodeSpinner='        <button class="btn btn-caixa btn-outline-dark" (click)="exibirSpinner()">\n  Mostrar tela de carregamento\n</button>'.trim(),i.tsCodeSpinner="  import { Component } from '@angular/core';\n  import { NgxSpinnerService } from 'ngx-spinner';\n\n  @Component({\n      selector: 'app-mensagens',\n      templateUrl: './mensagens.component.html',\n      styleUrls: ['./mensagens.component.scss']\n  })\n  export class MensagensComponent {\n\n    constructor(\n      private spinner: NgxSpinnerService\n    ) {}\n\n    exibirSpinner() {\n      this.spinner.show();\n      setTimeout(() => {\n        this.spinner.hide();\n      }, 3000);\n    }\n  }\n  ".trimRight(),i.htmlCodeModal='        <button class="btn btn-caixa btn-outline-dark" (click)="exibirModal()">\n  <i class="fa fa-lg fa-external-link-alt mr-2"></i>\n  Mostrar modal\n</button>'.trim(),i.tsCodeModal="  import { Component } from '@angular/core';\n  import { ModalService } from 'src/app/shared/services/modal.service';\n  import { ModalSize } from 'src/app/shared/components/modal/modal-options';\n\n  @Component({\n      selector: 'app-mensagens',\n      templateUrl: './mensagens.component.html',\n      styleUrls: ['./mensagens.component.scss']\n  })\n  export class MensagensComponent {\n\n    constructor(\n      private modalService: ModalService\n    ) {}\n\n    exibirModal() {\n      this.modalService.show({\n        showCancelar: true,\n        classTitulo: \"\",\n        titulo: \"T\xedtulo do modal\",\n        mensagem: \"Mensagem do modal\"\n      });\n    }\n  }\n  ".trimRight(),i.tamanhoModal=n.a.NORMAL,i}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"exibirSucesso",value:function(){this.toastr.success("Sucesso!","",{disableTimeOut:!0})}},{key:"exibirErro",value:function(){this.toastr.error("Ocorreu um erro!","Erro!",{disableTimeOut:!0})}},{key:"exibirAlerta",value:function(){this.toastr.warning("Alerta!",null,{disableTimeOut:!0})}},{key:"exibirInfo",value:function(){this.toastr.info("Informa\xe7\xe3o!","Importante!",{disableTimeOut:!0})}},{key:"exibirSpinner",value:function(){var e=this;this.spinner.show("global"),setTimeout((function(){e.spinner.hide("global")}),3e3)}},{key:"showTesteModal",value:function(e,o,t,a){this.modalService.show({showCancelar:!0,classTitulo:"",titulo:e||"T\xedtulo do modal",mensagem:o||"Mensagem do modal",centralizado:a,tamanho:t})}},{key:"exibirModal",value:function(){this.modalService.show({showCancelar:!0,titulo:"T\xedtulo do modal",mensagem:"Mensagem do modal",btOkTexto:"OK",centralizado:!0})}}]),t}(a.a);return e.\u0275fac=function(o){return new(o||e)(r.Nb(i.b),r.Nb(s.c),r.Nb(c.a))},e.\u0275cmp=r.Hb({type:e,selectors:[["app-mensagens"]],viewQuery:function(e,o){var t;1&e&&r.Nc(u,!0),2&e&&r.vc(t=r.cc())&&(o.scrollElement=t.first)},hostBindings:function(e,o){1&e&&r.bc("scroll",(function(e){return o.onScroll(e)}),!1,r.xc)},features:[r.wb],decls:192,vars:36,consts:[[1,"titulo"],["role","tablist",1,"nav","nav-pills","text-uppercase","tab-caixa"],[1,"nav-item"],["data-toggle","tab","href","#visaoGeral","role","tab",1,"nav-link","active"],["data-toggle","tab","href","#api","role","tab",1,"nav-link"],[1,"tab-content"],["id","visaoGeral","role","tabpanel",1,"tab-pane","fade","show","active"],[1,"row","no-gutters"],[1,"col-12","col-xl-9","pr-2","mb-5"],["scrollElement",""],["id","painelMensagens",3,"cardTitle","codeViewId","htmlTabId","htmlCode","tsTabId","tsCode"],[1,"descricao"],[1,"citation-highlight"],["href","https://www.npmjs.com/package/ngx-toastr","target","_blank",1,"text-link"],[1,"conteudo"],[1,"btn","btn-caixa","btn-success",3,"click"],[1,"btn","btn-caixa","btn-danger",3,"click"],[1,"btn","btn-caixa","btn-warning",3,"click"],[1,"btn","btn-caixa","btn-info",3,"click"],["id","painelModal",3,"showCodeButton","cardTitle","codeViewId","htmlTabId","htmlCode","tsTabId","tsCode"],["id","painelModal"],[1,"row"],[1,"col-8"],[1,"col-6"],["value","T\xedtulo do Modal",1,"form-control"],["modalTitulo",""],[1,"col-3"],[3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"col-3","d-flex","align-items-center"],[1,"custom-control","custom-switch"],["id","modalCentro","type","checkbox",1,"custom-control-input"],["modalCentralizado",""],["for","modalCentro",1,"custom-control-label"],[1,"col","my-3"],["rows","3",1,"form-control",3,"innerHTML"],["modalMensagem",""],[1,"btn","btn-caixa","btn-aux","mt-3",3,"click"],[1,"fa","fa-lg","fa-external-link-alt","mr-2"],["id","painelSpinner",3,"cardTitle","codeViewId","htmlTabId","htmlCode","tsTabId","tsCode"],["href","https://www.npmjs.com/package/ngx-spinner","target","_blank",1,"text-link"],[1,"btn","btn-caixa","btn-aux",3,"click"],["id","navSection",1,"d-none","col-3","d-xl-flex","pl-4"],[3,"items","currentSection"],["id","api","role","tabpanel",1,"tab-pane","fade"],[1,"card"],[1,"card-body"],[1,"header-subtitulo-caixa"],[1,"table-responsive"],[1,"table","table-bordered","table-striped"],[1,"bg-cinza"],[3,"value"]],template:function(e,o){if(1&e){var t=r.Ub();r.Tb(0,"h1",0),r.Hc(1," Mensagens (Em desenvolvimento)\n"),r.Sb(),r.Tb(2,"ul",1),r.Tb(3,"li",2),r.Tb(4,"a",3),r.Hc(5," Vis\xe3o Geral "),r.Sb(),r.Sb(),r.Tb(6,"li",2),r.Tb(7,"a",4),r.Hc(8," API "),r.Sb(),r.Sb(),r.Sb(),r.Ob(9,"br"),r.Tb(10,"div",5),r.Tb(11,"div",6),r.Tb(12,"div",7),r.Tb(13,"section",8,9),r.Tb(15,"app-documentacao-template",10),r.Tb(16,"div",11),r.Tb(17,"p"),r.Hc(18,' As notifica\xe7\xf5es que n\xe3o demandam intera\xe7\xe3o do usu\xe1rio devem ser apresentadas no formato "toast". '),r.Sb(),r.Tb(19,"p"),r.Hc(20," A chamada \xe9 feita pelo "),r.Tb(21,"span",12),r.Hc(22,"Toastr Service"),r.Sb(),r.Hc(23,", da biblioteca "),r.Tb(24,"a",13),r.Hc(25,"Ngx-Toastr"),r.Sb(),r.Hc(26,". "),r.Sb(),r.Sb(),r.Tb(27,"div",14),r.Tb(28,"button",15),r.bc("click",(function(){return o.exibirSucesso()})),r.Hc(29," Sucesso! "),r.Sb(),r.Hc(30," \xa0 "),r.Tb(31,"button",16),r.bc("click",(function(){return o.exibirErro()})),r.Hc(32," Erro! "),r.Sb(),r.Hc(33," \xa0 "),r.Tb(34,"button",17),r.bc("click",(function(){return o.exibirAlerta()})),r.Hc(35," Alerta! "),r.Sb(),r.Hc(36," \xa0 "),r.Tb(37,"button",18),r.bc("click",(function(){return o.exibirInfo()})),r.Hc(38," Informa\xe7\xe3o! "),r.Sb(),r.Hc(39," \xa0 "),r.Sb(),r.Sb(),r.Ob(40,"br"),r.Tb(41,"app-documentacao-template",19),r.Tb(42,"div",11),r.Tb(43,"p"),r.Hc(44," Quando houver a necessidade de intera\xe7\xe3o do usu\xe1rio com o conte\xfado apresentado, deve-se utilizar um modal. "),r.Sb(),r.Tb(45,"p"),r.Hc(46," Pode-se exibir pelo servi\xe7o "),r.Tb(47,"span",12),r.Hc(48,"ModalService"),r.Sb(),r.Hc(49,", com v\xe1rias op\xe7\xf5es de customiza\xe7\xe3o. "),r.Sb(),r.Tb(50,"div",20),r.Tb(51,"div",21),r.Tb(52,"div",22),r.Tb(53,"div",21),r.Tb(54,"div",23),r.Tb(55,"label"),r.Hc(56,"T\xedtulo"),r.Sb(),r.Ob(57,"input",24,25),r.Sb(),r.Tb(59,"div",26),r.Tb(60,"label"),r.Hc(61,"Tamanho"),r.Sb(),r.Tb(62,"ng-select",27),r.bc("ngModelChange",(function(e){return o.tamanhoModal=e})),r.Fc(63,v,2,2,"ng-option",28),r.ec(64,"keyvalue"),r.Sb(),r.Sb(),r.Tb(65,"div",29),r.Tb(66,"div",30),r.Ob(67,"input",31,32),r.Tb(69,"label",33),r.Hc(70,"Centralizado"),r.Sb(),r.Sb(),r.Sb(),r.Tb(71,"div",34),r.Tb(72,"label"),r.Hc(73,"Mensagem"),r.Sb(),r.Ob(74,"textarea",35,36),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Tb(76,"button",37),r.bc("click",(function(){r.yc(t);var e=r.wc(58),a=r.wc(75),n=r.wc(68);return o.showTesteModal(e.value,a.value,o.tamanhoModal,n.checked)})),r.Ob(77,"i",38),r.Hc(78," Mostrar modal "),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Ob(79,"br"),r.Tb(80,"app-documentacao-template",39),r.Tb(81,"div",11),r.Hc(82,' O "spinner" de carregamento pode ser chamado pelo '),r.Tb(83,"span",12),r.Hc(84,"NgxSpinnerService"),r.Sb(),r.Hc(85,", da biblioteca "),r.Tb(86,"a",40),r.Hc(87,"Ngx Spinner"),r.Sb(),r.Hc(88,". "),r.Sb(),r.Tb(89,"div",14),r.Tb(90,"button",41),r.bc("click",(function(){return o.exibirSpinner()})),r.Hc(91," Mostrar tela de carregamento "),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Tb(92,"nav",42),r.Ob(93,"app-code-fixed-nav",43),r.Sb(),r.Sb(),r.Sb(),r.Tb(94,"div",44),r.Tb(95,"div",45),r.Tb(96,"div",46),r.Tb(97,"div"),r.Tb(98,"h5",47),r.Hc(99,"Notifica\xe7\xf5es (Toastr)"),r.Sb(),r.Tb(100,"p"),r.Hc(101,"Biblioteca "),r.Tb(102,"a",13),r.Hc(103,"Ngx-Toastr"),r.Sb(),r.Sb(),r.Tb(104,"span"),r.Hc(105,"No m\xf3dulo:"),r.Sb(),r.Tb(106,"pre"),r.Hc(107),r.Sb(),r.Tb(108,"span"),r.Hc(109,"No componente:"),r.Sb(),r.Tb(110,"pre"),r.Hc(111),r.Sb(),r.Sb(),r.Ob(112,"br"),r.Tb(113,"div"),r.Tb(114,"h5",47),r.Hc(115,"Spinner (NgxSpinner)"),r.Sb(),r.Tb(116,"p"),r.Hc(117,"Biblioteca "),r.Tb(118,"a",40),r.Hc(119,"NgxSpinner"),r.Sb(),r.Sb(),r.Tb(120,"span"),r.Hc(121,"No AppModule:"),r.Sb(),r.Tb(122,"pre"),r.Hc(123),r.Sb(),r.Tb(124,"span"),r.Hc(125,"No AppComponent (.ts):"),r.Sb(),r.Tb(126,"pre"),r.Hc(127),r.Sb(),r.Tb(128,"span"),r.Hc(129,"No AppComponent (.html):"),r.Sb(),r.Tb(130,"pre"),r.Hc(131,"<cx-spinner [fullscreen]=true></cx-spinner>"),r.Sb(),r.Sb(),r.Ob(132,"br"),r.Tb(133,"div"),r.Tb(134,"h5",47),r.Hc(135,"Modal"),r.Sb(),r.Tb(136,"span"),r.Hc(137,"No AppComponent (.html):"),r.Sb(),r.Tb(138,"pre"),r.Hc(139,"<cx-modal></cx-modal>"),r.Sb(),r.Tb(140,"span"),r.Hc(141,"No componente:"),r.Sb(),r.Tb(142,"pre"),r.Hc(143),r.Sb(),r.Tb(144,"h6",47),r.Hc(145,"M\xe9todos"),r.Sb(),r.Tb(146,"div",48),r.Tb(147,"table",49),r.Tb(148,"tbody"),r.Tb(149,"tr"),r.Tb(150,"td",50),r.Hc(151,"show()"),r.Sb(),r.Tb(152,"td"),r.Hc(153," Exibir o modal "),r.Sb(),r.Sb(),r.Tb(154,"tr"),r.Tb(155,"td",50),r.Hc(156,"Par\xe2metros"),r.Sb(),r.Tb(157,"td"),r.Hc(158," modalOptions?: ModalOptions "),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Ob(159,"br"),r.Tb(160,"table",49),r.Tb(161,"tbody"),r.Tb(162,"tr"),r.Tb(163,"td",50),r.Hc(164,"ModalOptions"),r.Sb(),r.Sb(),r.Tb(165,"tr"),r.Tb(166,"td"),r.Hc(167," titulo: string"),r.Ob(168,"br"),r.Hc(169," mensagem: string"),r.Ob(170,"br"),r.Hc(171," btOkTexto: string"),r.Ob(172,"br"),r.Hc(173," btCancelarTexto: string"),r.Ob(174,"br"),r.Hc(175," showCancelar: boolean"),r.Ob(176,"br"),r.Hc(177," classTitulo: string"),r.Ob(178,"br"),r.Hc(179," btnOkClass: string"),r.Ob(180,"br"),r.Hc(181," btnCancelarClass: string"),r.Ob(182,"br"),r.Hc(183," modalBodyClass: string"),r.Ob(184,"br"),r.Hc(185," modalHeaderClass: string"),r.Ob(186,"br"),r.Hc(187," modalFooterClass: string"),r.Ob(188,"br"),r.Hc(189," centralizado: boolean"),r.Ob(190,"br"),r.Hc(191," tamanho: ModalSize "),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb()}2&e&&(r.zb(15),r.jc("cardTitle","Notifica\xe7\xf5es")("codeViewId","viewMensagens")("htmlTabId","htmlCodeMensagens")("htmlCode",o.htmlCodeMensagens)("tsTabId","tsCodeMensagens")("tsCode",o.tsCodeMensagens),r.zb(26),r.jc("showCodeButton",!1)("cardTitle","Modal")("codeViewId","viewModal")("htmlTabId","htmlCodeModal")("htmlCode",o.htmlCodeModal)("tsTabId","tsCodeModal")("tsCode",o.tsCodeModal),r.zb(21),r.jc("ngModel",o.tamanhoModal),r.zb(1),r.jc("ngForOf",r.fc(64,34,o.modalSize)),r.zb(11),r.jc("innerHTML","Mensagem do modal",r.zc),r.zb(6),r.jc("cardTitle","Spinner (Tela de carregamento)")("codeViewId","viewSpinner")("htmlTabId","htmlCodeSpinner")("htmlCode",o.htmlCodeSpinner)("tsTabId","tsCodeSpinner")("tsCode",o.tsCodeSpinner),r.zb(13),r.jc("items",o.navItems)("currentSection",o.currentSection),r.zb(14),r.Kc("import ","{"," ToastrModule  ","}"," from 'ngx-toastr';"),r.zb(4),r.Kc("import ","{"," ToastrService ","}"," from 'ngx-toastr';"),r.zb(12),r.Kc("import ","{"," NgxSpinnerModule  ","}"," from 'ngx-toastr';"),r.zb(4),r.Kc("import ","{"," NgxSpinnerService ","}"," from 'ngx-spinner';"),r.zb(16),r.Kc("import ","{"," ModalService ","}"," from 'src/app/guia-caixa/services/modal.service';"))},directives:[d.a,b.a,l.j,l.m,m.o,p.a,b.c],pipes:[m.i],styles:[""]}),e}()},ia4M:function(e,o,t){"use strict";t.d(o,"a",(function(){return l}));var a=t("pRMn"),n=t("fXoL"),r=t("5eHb"),i=t("r5ma"),s=t("OtPg"),c=t("j1XF"),d=["scrollElement"],b=function(){return["html"]},l=function(){var e=function(e){_inherits(t,e);var o=_createSuper(t);function t(e){var a;return _classCallCheck(this,t),(a=o.call(this,e)).toastr=e,a.spiedTags=["APP-DOCUMENTACAO-TEMPLATE"],a.sectionOffset=0,a.currentSection="painelCards",a.navItems=[{id:"painelCards",name:"Padr\xe3o"},{id:"painelCardsTematicos",name:"Tem\xe1ticos"},{id:"painelCardsEfeito",name:"Com efeito"}],a.cardsIntroducao='<div class="card">\n  <div class="card-header">\n    <h4 class="subtitulo">T\xedtulo</h4>\n  </div>\n  <div class="card-body">\n    <h5>Este \xe9 um subt\xedtulo</h5>\n    <span>Este \xe9 o corpo do card</span>\n  </div>\n  <div class="card-footer">\n    <h5>Isso \xe9 um rodap\xe9</h5>\n  </div>\n</div>'.trim(),a.cardsTematicos='<div class="row">\n  <div class="col-12 col-md-6 my-2">\n    <div class="card bg-contraste text-base">\n      <div class="card-header">\n        <h4 class="subtitulo">T\xedtulo</h4>\n      </div>\n      <div class="card-body">\n        <h5>Este \xe9 um subt\xedtulo</h5>\n        <span>Este \xe9 o corpo do card</span>\n      </div>\n      <div class="card-footer">\n        <h5>Isso \xe9 um rodap\xe9</h5>\n      </div>\n    </div>\n  </div>\n\n  <div class="col my-2">\n    <div class="card bg-destaque text-base">\n      <div class="card-header">\n        <h4 class="subtitulo">T\xedtulo</h4>\n      </div>\n      <div class="card-body">\n        <h5>Este \xe9 um subt\xedtulo</h5>\n        <span>Este \xe9 o corpo do card</span>\n      </div>\n      <div class="card-footer">\n        <h5>Isso \xe9 um rodap\xe9</h5>\n      </div>\n    </div>\n  </div>\n</div>'.trim(),a.cardsSombra='<div class="card card-hover">\n  <div class="card-body">\n    <span>Este card possui efeito de sombra.</span>\n  </div>\n</div>'.trim(),a.cardHome='<div id="cardHome" class="card card-hover border border-dark">\n  <div class="card-body">\n    <i class="fa fa-home fa-4x mr-4"></i>\n    <h2 class="d-inline font-fam-bold mb-0">HOME</h2>\n  </div>\n</div>\n\n<style>\n  #cardHome {\n    max-width: 20rem;\n  }\n</style>'.trim(),a.htmlCodeCards='            <div class="card">\n  <div class="card-header">\n    <h4 class="subtitulo">T\xedtulo</h4>\n  </div>\n  <div class="card-body">\n    <h5>Este \xe9 um subt\xedtulo</h5>\n    <span>Este \xe9 o corpo do card</span>\n  </div>\n  <div class="card-footer">\n    <h5>Isso \xe9 um rodap\xe9</h5>\n  </div>\n</div>'.trim(),a.htmlCodeCardsTematicos='            <div class="row">\n  <div class="col-12 col-md-6 my-2">\n    <div class="card bg-grafite text-cinza">\n      <div class="card-header">\n        <h4 class="subtitulo">T\xedtulo</h4>\n      </div>\n      <div class="card-body">\n        <h5>Este \xe9 um subt\xedtulo</h5>\n        <span>Este \xe9 o corpo do card</span>\n      </div>\n      <div class="card-footer">\n        <h5>Isso \xe9 um rodap\xe9</h5>\n      </div>\n    </div>\n  </div>  \x3c!-- Coluna --\x3e\n\n  <div class="col my-2">\n    <div class="card bg-destaque text-cinza">\n      <div class="card-header">\n        <h4 class="subtitulo">T\xedtulo</h4>\n      </div>\n      <div class="card-body">\n        <h5>Este \xe9 um subt\xedtulo</h5>\n        <span>Este \xe9 o corpo do card</span>\n      </div>\n      <div class="card-footer">\n        <h5>Isso \xe9 um rodap\xe9</h5>\n      </div>\n    </div>\n  </div>  \x3c!-- Coluna --\x3e\n</div>  \x3c!-- Linha --\x3e'.trim(),a.htmlCodeCardsEfeito='        <div class="card card-hover">\n  <div class="card-body">\n    <span>Este card possui efeito de sombra.</span>\n  </div>\n</div>'.trim(),a.htmlCodeCardBotao='        <div class="row">\n  <div class="col-6 col-md-4 mb-3">\n    <div class="card card-hover border border-dark">\n      <div class="card-body">\n        <i class="fa fa-home fa-4x mr-4"></i>\n        <h2 class="d-inline font-fam-bold mb-0">HOME</h2>\n      </div>\n    </div>  \x3c!-- Card --\x3e\n  </div>  \x3c!-- Col --\x3e\n  <div class="col-6 col-md-4 mb-3">\n    <div class="card card-hover border border-primary bg-gradient-ceu text-white">\n      <div class="card-body">\n        <i class="fa fa-users fa-4x"></i>\n      </div>\n    </div>  \x3c!-- Card --\x3e\n  </div>  \x3c!-- Col --\x3e\n  <div class="col-6 col-md-4 mb-3">\n    <div class="card card-hover bg-opacity-2 border border-dark-dark">\n      <div class="card-body">\n        <i class="fa fa-file-archive fa-4x"></i>\n      </div>\n    </div>  \x3c!-- Card --\x3e\n  </div>  \x3c!-- Col --\x3e\n</div>  \x3c!-- Row --\x3e'.trim(),a.cssCodeCardBotao=".cards-menu .card {\n  cursor: pointer;\n  margin-right: 2rem;\n  border-width: 2px !important;\n  border-top-left-radius: 0px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 0px;\n  border-bottom-right-radius: 0px;\n}".trim(),a.htmlCodeCardLayout='<div id="cardDadosProposta" class="card">\n  <div class="card-header">\n    <h4 class="d-inline-block mr-2 font-fam-bold">Dados da proposta</h4>\n    <a class="text-link">0007.1556.0000112-3</a>\n  </div>\n  <div class="card-body p-0">\n    <div class="info-row bg-fundo border-top border-bottom">\n      <div class="row">\n        <div class="col">\n          <h6 class="subtitulo">C\xf3digo da Reserva</h6>\n          1.797\n        </div>\n        <div class="col">\n          <h6 class="subtitulo">Fonte de recurso</h6>\n          SBPE\n        </div>\n      </div>\n    </div>  \x3c!-- Info-Row --\x3e\n    <div class="info-row border-bottom">\n      <div class="row">\n        <div class="col">\n          <h6 class="subtitulo">Tipo de financiamento</h6>\n          143 - CCSBPE - AQUISI\xc7\xc3O DE TERRENO E CONSTRU\xc7\xc3O - PF -SHF - POS\n        </div>\n      </div>\n    </div>  \x3c!-- Info-Row --\x3e\n    <div class="info-row bg-fundo border-bottom">\n      <div class="row">\n        <div class="col">\n          <h6 class="subtitulo">Seguradora</h6>\n          CAIXA SEGUROS\n        </div>\n        <div class="col">\n          <h6 class="subtitulo">Ap\xf3lice</h6>\n          61170 - CAIXA SEGUROS - SBPE\n        </div>\n      </div>\n    </div>  \x3c!-- Info-Row --\x3e\n  </div>  \x3c!-- Card-body --\x3e\n  <div class="card-footer text-center">\n    <i class="fa fa-chevron-down mr-3"></i>\n    <span>Mais dados da proposta</span>\n  </div>\n</div>'.trim(),a.cssCodeCardLayout="#cardDadosProposta {\n  width: 800px;\n}\n.info-row {\n  padding: 1.2rem;\n}".trim(),a}return t}(a.a);return e.\u0275fac=function(o){return new(o||e)(n.Nb(r.b))},e.\u0275cmp=n.Hb({type:e,selectors:[["app-cards"]],viewQuery:function(e,o){var t;1&e&&n.Nc(d,!0),2&e&&n.vc(t=n.cc())&&(o.scrollElement=t.first)},hostBindings:function(e,o){1&e&&n.bc("scroll",(function(e){return o.onScroll(e)}),!1,n.xc)},features:[n.wb],decls:147,vars:41,consts:[[1,"titulo"],["role","tablist",1,"nav","nav-pills","tab-caixa"],[1,"nav-item"],["data-toggle","tab","href","#visaoGeral","role","tab",1,"nav-link","text-uppercase","active"],["data-toggle","tab","href","#exemplos","role","tab",1,"nav-link","text-uppercase"],[1,"tab-content"],["id","visaoGeral","role","tabpanel",1,"tab-pane","fade","show","active"],[1,"row","no-gutters"],[1,"col-12","col-xl-9","pr-2","mb-5"],["scrollElement",""],["id","painelCards",3,"cardTitle","codeViewId","htmlTabId","htmlCode"],[1,"descricao"],["target","_blank","href","https://getbootstrap.com/docs/4.6/components/card/",1,"text-destaque"],[1,"conteudo"],[1,"card"],[1,"card-header"],[1,"subtitulo"],[1,"card-body"],[1,"card-footer"],[1,"mt-3"],[3,"highlight","languages"],["id","painelCardsTematicos",3,"showCodeButton","cardTitle","codeViewId","htmlTabId","htmlCode"],[1,"citation-highlight"],[1,"row"],[1,"col-12","col-md-6","my-2"],[1,"card","bg-contraste","text-base"],[1,"col","my-2"],[1,"card","bg-destaque","text-base"],["id","painelCardsEfeito",3,"showCodeButton","cardTitle","codeViewId","htmlTabId","htmlCode"],[1,"card","card-hover"],["id","navSection",1,"d-none","col-3","d-xl-flex","pl-4"],[3,"items","currentSection"],["id","exemplos","role","tabpanel",1,"tab-pane","fade"],[3,"showCodeButton","cardTitle","codeViewId","htmlTabId","htmlCode","cssTabId","cssCode"],["id","cardHome",1,"card","card-hover","border","border-dark"],[1,"fa","fa-home","fa-4x","mr-4"],[1,"d-inline","font-fam-bold","mb-0"],[3,"cardTitle","codeViewId","htmlTabId","htmlCode","cssTabId","cssCode"],["id","cardDadosProposta",1,"card"],[1,"d-inline-block","mr-2","font-fam-bold"],[1,"text-link"],[1,"card-body","p-0"],[1,"info-row","bg-fundo","border-top","border-bottom"],[1,"col"],[1,"info-row","border-bottom"],[1,"info-row","bg-fundo","border-bottom"],[1,"card-footer","text-center"],[1,"fa","fa-chevron-down","mr-3"]],template:function(e,o){1&e&&(n.Tb(0,"h1",0),n.Hc(1," Cards\n"),n.Sb(),n.Tb(2,"ul",1),n.Tb(3,"li",2),n.Tb(4,"a",3),n.Hc(5," Vis\xe3o Geral "),n.Sb(),n.Sb(),n.Tb(6,"li",2),n.Tb(7,"a",4),n.Hc(8," Exemplos "),n.Sb(),n.Sb(),n.Sb(),n.Ob(9,"br"),n.Tb(10,"div",5),n.Tb(11,"div",6),n.Tb(12,"div",7),n.Tb(13,"section",8,9),n.Tb(15,"app-documentacao-template",10),n.Tb(16,"div",11),n.Hc(17," Utilizar o template definido pelo "),n.Tb(18,"a",12),n.Hc(19,"Bootstrap"),n.Sb(),n.Hc(20,"."),n.Ob(21,"br"),n.Hc(22," Observa\xe7\xe3o: "),n.Tb(23,"strong"),n.Hc(24,"n\xe3o"),n.Sb(),n.Hc(25,' utilizar a classe "panel", que foi substitu\xedda pelo "card" na vers\xe3o 4 do framework. '),n.Sb(),n.Tb(26,"div",13),n.Tb(27,"div",14),n.Tb(28,"div",15),n.Tb(29,"h4",16),n.Hc(30,"T\xedtulo"),n.Sb(),n.Sb(),n.Tb(31,"div",17),n.Tb(32,"h5"),n.Hc(33,"Este \xe9 um subt\xedtulo"),n.Sb(),n.Tb(34,"span"),n.Hc(35,"Este \xe9 o corpo do card"),n.Sb(),n.Sb(),n.Tb(36,"div",18),n.Tb(37,"h5"),n.Hc(38,"Isso \xe9 um rodap\xe9"),n.Sb(),n.Sb(),n.Sb(),n.Tb(39,"pre",19),n.Ob(40,"code",20),n.Sb(),n.Sb(),n.Sb(),n.Ob(41,"br"),n.Tb(42,"app-documentacao-template",21),n.Tb(43,"div",11),n.Hc(44," Qualquer classe tem\xe1tica pode ser utilizada nos cards, com "),n.Tb(45,"span",22),n.Hc(46,"bg-(tema)"),n.Sb(),n.Hc(47," e "),n.Tb(48,"span",22),n.Hc(49,"text-(tema)"),n.Sb(),n.Hc(50,". "),n.Sb(),n.Tb(51,"div",13),n.Tb(52,"div",23),n.Tb(53,"div",24),n.Tb(54,"div",25),n.Tb(55,"div",15),n.Tb(56,"h4",16),n.Hc(57,"T\xedtulo"),n.Sb(),n.Sb(),n.Tb(58,"div",17),n.Tb(59,"h5"),n.Hc(60,"Este \xe9 um subt\xedtulo"),n.Sb(),n.Tb(61,"span"),n.Hc(62,"Este \xe9 o corpo do card"),n.Sb(),n.Sb(),n.Tb(63,"div",18),n.Tb(64,"h5"),n.Hc(65,"Isso \xe9 um rodap\xe9"),n.Sb(),n.Sb(),n.Sb(),n.Sb(),n.Tb(66,"div",26),n.Tb(67,"div",27),n.Tb(68,"div",15),n.Tb(69,"h4",16),n.Hc(70,"T\xedtulo"),n.Sb(),n.Sb(),n.Tb(71,"div",17),n.Tb(72,"h5"),n.Hc(73,"Este \xe9 um subt\xedtulo"),n.Sb(),n.Tb(74,"span"),n.Hc(75,"Este \xe9 o corpo do card"),n.Sb(),n.Sb(),n.Tb(76,"div",18),n.Tb(77,"h5"),n.Hc(78,"Isso \xe9 um rodap\xe9"),n.Sb(),n.Sb(),n.Sb(),n.Sb(),n.Sb(),n.Tb(79,"pre",19),n.Ob(80,"code",20),n.Sb(),n.Sb(),n.Sb(),n.Ob(81,"br"),n.Tb(82,"app-documentacao-template",28),n.Tb(83,"div",11),n.Hc(84," Um efeito de sombra ao passar o mouse pode ser adicionado com a classe "),n.Tb(85,"span",22),n.Hc(86,"card-hover"),n.Sb(),n.Hc(87,". "),n.Sb(),n.Tb(88,"div",13),n.Tb(89,"div",29),n.Tb(90,"div",17),n.Tb(91,"span"),n.Hc(92,"Este card possui efeito de sombra."),n.Sb(),n.Sb(),n.Sb(),n.Tb(93,"pre",19),n.Ob(94,"code",20),n.Sb(),n.Sb(),n.Sb(),n.Sb(),n.Tb(95,"nav",30),n.Ob(96,"app-code-fixed-nav",31),n.Sb(),n.Sb(),n.Sb(),n.Tb(97,"div",32),n.Tb(98,"app-documentacao-template",33),n.Tb(99,"div",13),n.Tb(100,"div",34),n.Tb(101,"div",17),n.Ob(102,"i",35),n.Tb(103,"h2",36),n.Hc(104,"HOME"),n.Sb(),n.Sb(),n.Sb(),n.Tb(105,"pre",19),n.Ob(106,"code",20),n.Sb(),n.Sb(),n.Sb(),n.Ob(107,"br"),n.Tb(108,"app-documentacao-template",37),n.Tb(109,"div",13),n.Tb(110,"div",38),n.Tb(111,"div",15),n.Tb(112,"h4",39),n.Hc(113,"Dados da proposta"),n.Sb(),n.Tb(114,"a",40),n.Hc(115,"0007.1556.0000112-3"),n.Sb(),n.Sb(),n.Tb(116,"div",41),n.Tb(117,"div",42),n.Tb(118,"div",23),n.Tb(119,"div",43),n.Tb(120,"h6",16),n.Hc(121,"C\xf3digo da Reserva"),n.Sb(),n.Hc(122," 1.797 "),n.Sb(),n.Tb(123,"div",43),n.Tb(124,"h6",16),n.Hc(125,"Fonte de recurso"),n.Sb(),n.Hc(126," SBPE "),n.Sb(),n.Sb(),n.Sb(),n.Tb(127,"div",44),n.Tb(128,"div",23),n.Tb(129,"div",43),n.Tb(130,"h6",16),n.Hc(131,"Tipo de financiamento"),n.Sb(),n.Hc(132," 143 - CCSBPE - AQUISI\xc7\xc3O DE TERRENO E CONSTRU\xc7\xc3O - PF -SHF - POS "),n.Sb(),n.Sb(),n.Sb(),n.Tb(133,"div",45),n.Tb(134,"div",23),n.Tb(135,"div",43),n.Tb(136,"h6",16),n.Hc(137,"Seguradora"),n.Sb(),n.Hc(138," CAIXA SEGUROS "),n.Sb(),n.Tb(139,"div",43),n.Tb(140,"h6",16),n.Hc(141,"Ap\xf3lice"),n.Sb(),n.Hc(142," 61170 - CAIXA SEGUROS - SBPE "),n.Sb(),n.Sb(),n.Sb(),n.Sb(),n.Tb(143,"div",46),n.Ob(144,"i",47),n.Tb(145,"span"),n.Hc(146,"Mais dados da proposta"),n.Sb(),n.Sb(),n.Sb(),n.Sb(),n.Sb(),n.Sb(),n.Sb()),2&e&&(n.zb(15),n.jc("cardTitle","Cards")("codeViewId","viewCards")("htmlTabId","htmlCodeCards")("htmlCode",o.htmlCodeCards),n.zb(25),n.jc("highlight",o.cardsIntroducao)("languages",n.pc(37,b)),n.zb(2),n.jc("showCodeButton",!1)("cardTitle","Cards tem\xe1ticos")("codeViewId","viewCardsTematicos")("htmlTabId","htmlCodeCardsTematicos")("htmlCode",o.htmlCodeCardsTematicos),n.zb(38),n.jc("highlight",o.cardsTematicos)("languages",n.pc(38,b)),n.zb(2),n.jc("showCodeButton",!1)("cardTitle","Cards com efeito")("codeViewId","viewCardsEfeito")("htmlTabId","htmlCodeCardsEfeito")("htmlCode",o.htmlCodeCardsEfeito),n.zb(12),n.jc("highlight",o.cardsSombra)("languages",n.pc(39,b)),n.zb(2),n.jc("items",o.navItems)("currentSection",o.currentSection),n.zb(2),n.jc("showCodeButton",!1)("cardTitle","Cards customizados")("codeViewId","viewCardMenu")("htmlTabId","htmlCodeCardBotao")("htmlCode",o.htmlCodeCardBotao)("cssTabId","cssCodeCardBotao")("cssCode",o.cssCodeCardBotao),n.zb(8),n.jc("highlight",o.cardHome)("languages",n.pc(40,b)),n.zb(2),n.jc("cardTitle","Layouts complexos")("codeViewId","viewCardLayout")("htmlTabId","htmlCodeCardLayout")("htmlCode",o.htmlCodeCardLayout)("cssTabId","cssCodeCardLayout")("cssCode",o.cssCodeCardLayout))},directives:[i.a,s.a,c.a],styles:[".img-view[_ngcontent-%COMP%]{width:150px;height:100px;display:flex;margin:auto}.cards-menu[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{cursor:pointer;margin-right:2rem;border-width:2px!important;border-top-left-radius:0;border-top-right-radius:10px;border-bottom-left-radius:0;border-bottom-right-radius:0}#cardDadosProposta[_ngcontent-%COMP%]{width:800px}.bg-fade[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.01)}.info-row[_ngcontent-%COMP%]{padding:1.2rem}#cardHome[_ngcontent-%COMP%]{max-width:20rem}"]}),e}()}}]);