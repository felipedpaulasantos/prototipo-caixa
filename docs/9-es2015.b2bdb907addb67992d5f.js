(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{R4qh:function(t,o,n){"use strict";n.r(o),n.d(o,"ComponentesBasicosModule",(function(){return O}));var e=n("ofXK"),a=n("tyNb"),b=n("pRMn"),i=n("fXoL"),s=n("5eHb"),c=n("r5ma"),l=n("OtPg"),r=n("j1XF");const d=["scrollElement"];function m(t,o){if(1&t&&(i.Qb(0),i.Sb(1,"tr"),i.Sb(2,"td"),i.Sb(3,"button"),i.Gc(4,"Padr\xe3o"),i.Rb(),i.Rb(),i.Sb(5,"td"),i.Sb(6,"button"),i.Gc(7,"Pequeno"),i.Rb(),i.Rb(),i.Sb(8,"td"),i.Sb(9,"button"),i.Gc(10,"Grande"),i.Rb(),i.Rb(),i.Sb(11,"td"),i.Sb(12,"button"),i.Gc(13,"Outline"),i.Rb(),i.Rb(),i.Sb(14,"td"),i.Sb(15,"button",39),i.Gc(16,"Desabilitado"),i.Rb(),i.Rb(),i.Rb(),i.Pb()),2&t){const t=o.$implicit;i.zb(3),i.Cb("btn btn-",null==t?null:t.name,""),i.zb(3),i.Cb("btn btn-",null==t?null:t.name," btn-sm"),i.zb(3),i.Cb("btn btn-",null==t?null:t.name," btn-lg"),i.zb(3),i.Cb("btn btn-outline-",null==t?null:t.name,""),i.zb(3),i.Cb("btn btn-",null==t?null:t.name,"")}}const u=function(){return["html"]};let p=(()=>{class t extends b.a{constructor(t){super(t),this.toastr=t,this.temas=[{name:"principal"},{name:"destaque"},{name:"cancel"},{name:"aux"},{name:"success"},{name:"danger"},{name:"info"},{name:"warning"}],this.spiedTags=["APP-DOCUMENTACAO-TEMPLATE"],this.sectionOffset=0,this.currentSection="painelBotoes",this.navItems=[{id:"painelBotoes",name:"Padr\xe3o"},{id:"painelBotoesTamanho",name:"\xedcones"}],this.botoesIntroducao='<button class="btn btn-principal">Principal</button>;\n<button class="btn btn-destaque">Destaque</button>;\n<button class="btn btn-cancel">Cancel</button>;\n<button class="btn btn-outline-aux">Auxiliar</button>;\n<button class="btn btn-danger btn-sm">Perigo</button>;\n<button class="btn btn-success btn-lg">Sucesso</button>;\n<button class="btn btn-warning">Alerta</button>\n<button class="btn btn-info">Informativo</button>\n<button class="btn btn-link">Link</button>',this.botoesIcones='<button class="btn btn-destaque btn-sm">\n  <i class="fa fa-plus mr-2"></i>Incluir\n</button>\n\n<button class="btn btn-outline-destaque">\n  <i class="fa fa-edit mr-2"></i>Editar\n</button>\n\n<button class="btn btn-principal btn-lg">\n  <i class="fa fa-lg fa-save mr-3"></i>Salvar\n</button>',this.htmlCodeBotoes='<button class="btn btn-caixa btn-cancel">Bot\xe3o</button>'.trim(),this.htmlCodeBotoesTematicos='        <button class="btn btn-caixa btn-destaque">Prim\xe1rio</button> &nbsp;\n<button class="btn btn-caixa btn-danger-dark">Erro com tom escuro</button> &nbsp;\n<button class="btn btn-caixa btn-apoio-light">Apoio com tom claro</button> &nbsp;\n<button class="btn btn-caixa btn-outline-info">Info - outline</button>'.trim(),this.htmlCodeBotoesTamanho='        <button class="btn btn-caixa btn-outline-dark btn-sm">Pequeno</button> &nbsp;\n<button class="btn btn-caixa btn-primario btn-lg">Grande</button> &nbsp;\n<button class="btn btn-caixa btn-primario btn-lg disabled">Grande desabilitado</button> &nbsp;\n<button class="btn btn-caixa btn-outline-destaque">\n  <i class="fa fa-edit mr-2"></i>\n  Com \xedcone\n</button>'.trim(),this.htmlCodeExemplo='          <button class="btn btn-caixa btn-flat">\n  Flat\n</button>\n<button class="btn btn-caixa btn-flat rounded-circle p-3">\n  <i class="fa fa-bars fa-2x"></i>\n</button>\n<button class="btn btn-caixa btn-flat text-principal rounded-circle p-2">\n  <i class="fa fa-home fa-2x"></i>\n</button>\n<button class="btn btn-caixa btn-outline-apoio rounded-circle p-2">\n  <i class="fa fa-check fa-lg"></i>\n</button>\n<button class="btn btn-caixa btn-primario rounded-circle p-3">\n  <i class="fa fa-play fa-lg"></i>\n</button>\n<button class="btn btn-caixa btn-outline-perigo rounded-circle shadow-none p-4">\n  <i class="fa fa-trash fa-2x"></i>\n</button>\n<button class="btn btn-caixa btn-aux shadow-none">\n  Sem sombra\n</button>'.trim(),this.cssCodeExemplo=".btn-exemplo button {\n    margin-left: 1rem;\n    margin-right: 1rem;\n}".trim(),this.htmlCodeTodosTematicos='        <div class="table-responsive">\n  <table class="table table-caixa table-borderless">\n    <tbody>\n      <ng-container *ngFor="let tema of temas; let i = index">\n        <tr>\n          <td><button class="btn btn-caixa btn-{{tema.name}}">Padr\xe3o</button></td>\n          <td><button class="btn btn-caixa btn-{{tema.name}}-light">Claro</button></td>\n          <td><button class="btn btn-caixa btn-{{tema.name}}-dark">Escuro</button></td>\n          <td><button class="btn btn-caixa btn-outline-{{tema.name}}">Outline</button></td>\n          <td><button class="btn btn-caixa btn-outline-{{tema.name}}-light">Claro</button></td>\n          <td><button class="btn btn-caixa btn-outline-{{tema.name}}-dark">Escuro</button></td>\n        </tr>\n      </ng-container>\n    </tbody>\n  </table>\n</div>'.trim(),this.tsCodeTodosTematicos='  import { Component } from \'@angular/core\';\n\n  @Component({\n      selector: \'app-botoes\',\n      templateUrl: \'./botoes.component.html\',\n      styleUrls: [\'./botoes.component.scss\']\n  })\n  export class BotoesComponent {\n\n    temas = [\n      { "name": "primary" },\n      { "name": "secondary" },\n      { "name": "success" },\n      { "name": "danger" },\n      { "name": "info" },\n      { "name": "warning" },\n      { "name": "apoio" },\n      { "name": "aux" },\n      { "name": "light" },\n      { "name": "dark" }\n    ]\n  }\n  '.trimRight()}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)(i.Mb(s.b))},t.\u0275cmp=i.Gb({type:t,selectors:[["app-botoes"]],viewQuery:function(t,o){var n;1&t&&i.Mc(d,!0),2&t&&i.uc(n=i.bc())&&(o.scrollElement=n.first)},hostBindings:function(t,o){1&t&&i.ac("scroll",(function(t){return o.onScroll(t)}),!1,i.wc)},features:[i.wb],decls:92,vars:26,consts:[[1,"titulo"],["role","tablist",1,"nav","nav-pills","tab-caixa"],[1,"nav-item"],["data-toggle","tab","href","#visaoGeral","role","tab",1,"nav-link","text-uppercase","active"],["data-toggle","tab","href","#exemplos","role","tab",1,"nav-link","text-uppercase"],[1,"tab-content"],["id","visaoGeral","role","tabpanel",1,"tab-pane","fade","show","active"],[1,"row","no-gutters"],[1,"col-12","col-xl-9","pr-2","mb-5"],["scrollElement",""],["id","painelBotoes",3,"showCodeButton","cardTitle","codeViewId","htmlTabId","htmlCode"],[1,"descricao"],["routerLink","/cores",1,"text-destaque"],[1,"conteudo"],[1,"btn","btn-principal"],[1,"btn","btn-destaque"],[1,"btn","btn-cancel"],[1,"btn","btn-outline-aux"],[1,"btn","btn-danger","btn-sm"],[1,"btn","btn-success","btn-lg"],[1,"btn","btn-warning"],[1,"btn","btn-info"],[1,"btn","btn-link"],[1,"mt-3"],[3,"highlight","languages"],["id","painelBotoesTamanho",3,"showCodeButton","cardTitle","codeViewId","htmlTabId","htmlCode"],[1,"btn","btn-destaque","btn-sm"],[1,"fa","fa-plus","mr-2"],[1,"btn","btn-outline-destaque"],[1,"fa","fa-edit","mr-2"],[1,"btn","btn-principal","btn-lg"],[1,"fa","fa-lg","fa-save","mr-3"],["id","navSection",1,"d-none","col-3","d-xl-flex","pl-4"],[3,"items","currentSection"],["id","exemplos","role","tabpanel",1,"tab-pane","fade"],[3,"showCodeButton","cardTitle","codeViewId","htmlTabId","htmlCode","tsTabId","tsCode"],[1,"table-responsive"],[1,"table","table-caixa","table-borderless"],[4,"ngFor","ngForOf"],["disabled",""]],template:function(t,o){1&t&&(i.Sb(0,"h1",0),i.Gc(1," Bot\xf5es\n"),i.Rb(),i.Sb(2,"ul",1),i.Sb(3,"li",2),i.Sb(4,"a",3),i.Gc(5," Vis\xe3o Geral "),i.Rb(),i.Rb(),i.Sb(6,"li",2),i.Sb(7,"a",4),i.Gc(8," Exemplos "),i.Rb(),i.Rb(),i.Rb(),i.Nb(9,"br"),i.Sb(10,"div",5),i.Sb(11,"div",6),i.Sb(12,"div",7),i.Sb(13,"section",8,9),i.Sb(15,"app-documentacao-template",10),i.Sb(16,"div",11),i.Gc(17," Seguir o padr\xe3o do Bootstrap com as classes tem\xe1ticas definidas no menu "),i.Sb(18,"a",12),i.Gc(19,"Cores"),i.Rb(),i.Gc(20,"."),i.Nb(21,"br"),i.Gc(22," Todas as variantes (outline, block, lg, sm) est\xe3o dispon\xedveis. "),i.Rb(),i.Sb(23,"div",13),i.Sb(24,"button",14),i.Gc(25,"Principal"),i.Rb(),i.Gc(26,"\xa0 "),i.Sb(27,"button",15),i.Gc(28,"Destaque"),i.Rb(),i.Gc(29,"\xa0 "),i.Sb(30,"button",16),i.Gc(31,"Cancel"),i.Rb(),i.Gc(32,"\xa0 "),i.Sb(33,"button",17),i.Gc(34,"Auxiliar"),i.Rb(),i.Gc(35,"\xa0 "),i.Sb(36,"button",18),i.Gc(37,"Perigo"),i.Rb(),i.Gc(38,"\xa0 "),i.Sb(39,"button",19),i.Gc(40,"Sucesso"),i.Rb(),i.Gc(41,"\xa0 "),i.Sb(42,"button",20),i.Gc(43,"Alerta"),i.Rb(),i.Gc(44,"\xa0 "),i.Sb(45,"button",21),i.Gc(46,"Informativo"),i.Rb(),i.Gc(47,"\xa0 "),i.Sb(48,"button",22),i.Gc(49,"Link"),i.Rb(),i.Sb(50,"pre",23),i.Nb(51,"code",24),i.Rb(),i.Rb(),i.Rb(),i.Nb(52,"br"),i.Sb(53,"app-documentacao-template",25),i.Sb(54,"div",11),i.Gc(55," Utilizar \xedcones ao lado esquerdo do texto, conforme segue:"),i.Nb(56,"br"),i.Sb(57,"b"),i.Gc(58,"- Bot\xf5es pequenos:"),i.Rb(),i.Gc(59,' \xedcones comuns (classe "fa/fas/far") com espa\xe7amento \xe0 direita padr\xe3o de 0.5rem (classe "mr-2").'),i.Nb(60,"br"),i.Sb(61,"strong"),i.Gc(62,"- Bot\xf5es de tamanho normal:"),i.Rb(),i.Gc(63,' \xedcones comuns (classe "fa/fas/far") com espa\xe7amento \xe0 direita padr\xe3o de 0.5rem (classe "mr-2").'),i.Nb(64,"br"),i.Sb(65,"b"),i.Gc(66,"- Bot\xf5es grandes:"),i.Rb(),i.Gc(67,' \xedcones grandes (classe "fa/fas/far" acompanhada da "fa-lg") com espa\xe7amento \xe0 direita padr\xe3o de 1rem (classe "mr-3").'),i.Nb(68,"br"),i.Rb(),i.Sb(69,"div",13),i.Sb(70,"button",26),i.Nb(71,"i",27),i.Gc(72,"Incluir "),i.Rb(),i.Gc(73," \xa0 "),i.Sb(74,"button",28),i.Nb(75,"i",29),i.Gc(76,"Editar "),i.Rb(),i.Gc(77," \xa0 "),i.Sb(78,"button",30),i.Nb(79,"i",31),i.Gc(80,"Salvar "),i.Rb(),i.Sb(81,"pre",23),i.Nb(82,"code",24),i.Rb(),i.Rb(),i.Rb(),i.Rb(),i.Sb(83,"nav",32),i.Nb(84,"app-code-fixed-nav",33),i.Rb(),i.Rb(),i.Rb(),i.Sb(85,"div",34),i.Sb(86,"app-documentacao-template",35),i.Sb(87,"div",13),i.Sb(88,"div",36),i.Sb(89,"table",37),i.Sb(90,"tbody"),i.Ec(91,m,17,15,"ng-container",38),i.Rb(),i.Rb(),i.Rb(),i.Rb(),i.Rb(),i.Rb(),i.Rb()),2&t&&(i.zb(15),i.ic("showCodeButton",!1)("cardTitle","Padr\xe3o")("codeViewId","viewBotoes")("htmlTabId","htmlCodeBotoes")("htmlCode",o.htmlCodeBotoes),i.zb(36),i.ic("highlight",o.botoesIntroducao)("languages",i.oc(24,u)),i.zb(2),i.ic("showCodeButton",!1)("cardTitle","\xcdcones")("codeViewId","viewBotoesTamanho")("htmlTabId","htmlCodeBotoesTamanho")("htmlCode",o.htmlCodeBotoesTamanho),i.zb(29),i.ic("highlight",o.botoesIcones)("languages",i.oc(25,u)),i.zb(2),i.ic("items",o.navItems)("currentSection",o.currentSection),i.zb(2),i.ic("showCodeButton",!1)("cardTitle","Tem\xe1ticos")("codeViewId","viewBotoesTodosTematicos")("htmlTabId","htmlCodeTodosTematicos")("htmlCode",o.htmlCodeTodosTematicos)("tsTabId","tsCodeTodosTematicos")("tsCode",o.tsCodeTodosTematicos),i.zb(5),i.ic("ngForOf",o.temas))},directives:[c.a,a.g,l.a,r.a,e.o],styles:[".btn-exemplo[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:1rem;margin-right:1rem}"]}),t})();var f=n("ia4M"),g=n("LhWq");function h(t,o){if(1&t&&(i.Sb(0,"div",4),i.Sb(1,"div",5),i.Sb(2,"div",6),i.Sb(3,"h5",7),i.Nb(4,"i"),i.Gc(5),i.Rb(),i.Rb(),i.Rb(),i.Nb(6,"br"),i.Rb()),2&t){const t=o.$implicit;i.zb(1),i.jc("routerLink",t.url),i.zb(3),i.Cb("",t.iconClass," fa-lg mr-1"),i.zb(1),i.Ic(" ",t.name," ")}}function R(t,o){if(1&t&&(i.Sb(0,"div",2),i.Ec(1,h,7,5,"div",3),i.Rb()),2&t){const t=o.$implicit;i.zb(1),i.ic("ngForOf",t)}}let S=(()=>{class t{constructor(t){this.menuService=t,this.rows=[],this.resources=[]}ngOnInit(){this.menuService.menuItems$.subscribe(t=>{t.find(t=>"/componentes-basicos"===t.url).submenu.forEach(t=>{this.resources.push(t)}),this.resources=[].concat(this.resources),this.rows=this.groupColumns(this.resources)})}groupColumns(t){const o=[];for(let n=0;n<t.length;n+=3)o.push(t.slice(n,n+3));return o}}return t.\u0275fac=function(o){return new(o||t)(i.Mb(g.a))},t.\u0275cmp=i.Gb({type:t,selectors:[["app-componentes-basicos"]],decls:3,vars:1,consts:[[1,"titulo"],["class","row d-flex justify-content-center",4,"ngFor","ngForOf"],[1,"row","d-flex","justify-content-center"],["class","col-10 col-md-6 col-xl-4",4,"ngFor","ngForOf"],[1,"col-10","col-md-6","col-xl-4"],["role","button","optionalClasses","button-card-min-height","routerLinkActive","active",1,"card","w-75","card-hover","button-card",3,"routerLink"],[1,"card-body"],[1,"header-subtitulo-caixa","m-0","mr-3","text-center"]],template:function(t,o){1&t&&(i.Sb(0,"h1",0),i.Gc(1," Componentes b\xe1sicos "),i.Rb(),i.Ec(2,R,2,1,"div",1)),2&t&&(i.zb(2),i.ic("ngForOf",o.rows))},directives:[e.o,a.f,a.e],styles:[""]}),t})();var v=n("3Pt+"),x=n("wTG2");const C=["scrollElement"];function G(t,o){1&t&&(i.Sb(0,"span"),i.Gc(1,"E-mail inv\xe1lido"),i.Rb())}function k(t,o){1&t&&(i.Sb(0,"span"),i.Gc(1,"Campo obrigat\xf3rio"),i.Rb())}function T(t,o){1&t&&(i.Sb(0,"span"),i.Gc(1,"Idade inv\xe1lida - deve ser entre 18 e 70"),i.Rb())}const N=function(){return["html"]},w=[{path:"",component:S,data:{title:"Componentes b\xe1sicos",breadcrumb:"Componentes b\xe1sicos"}},{path:"botoes",component:p,data:{title:"Bot\xf5es",breadcrumb:"Bot\xf5es",animation:"Bot\xf5es"}},{path:"cards",component:f.a,data:{title:"Cards",breadcrumb:"Cards",animation:"Cards"}},{path:"forms",component:(()=>{class t extends b.a{constructor(t,o){super(t),this.toastr=t,this.fb=o,this.spiedTags=["APP-DOCUMENTACAO-TEMPLATE"],this.sectionOffset=0,this.currentSection="painelInputs",this.navItems=[{id:"painelInputs",name:"Inputs e Text-area"},{id:"painelSelect",name:"Select"},{id:"painelCheckbox",name:"Checkbox"},{id:"painelRadio",name:"Radio"},{id:"painelRange",name:"Range"},{id:"painelValidacao",name:"Valida\xe7\xe3o"}],this.formValidation=this.fb.group({email:[null,[v.t.email]],linkedin:[null],perfil:[null,[v.t.required]],idade:[50,[v.t.min(18),v.t.max(70)]]}),this.inputExemplo='<div class="form-group">\n  <label>Nome</label>\n  <input class="form-control">\n</div>\n\n<label>Idade</label>\n<input class="form-control mb-3" type="number">\n\n<label>Observa\xe7\xf5es</label>\n<textarea class="form-control"></textarea>'.trim(),this.selectExemplo='<label>Sexo</label>\n<ng-select class="mb-3">\n  <ng-option>Masculino</ng-option>\n  <ng-option>Feminino</ng-option>\n</ng-select>\n\n<label>Naturalidade</label>\n<select class="form-control mb-3">\n  <option>Brasileiro</option>\n  <option>Estrangeiro</option>\n</select>'.trim(),this.checkboxExemplo='<div class="custom-control custom-checkbox mb-3">\n  <input type="checkbox" class="custom-control-input" id="customCheck1">\n  <label class="custom-control-label" for="customCheck1">Marque esse checkbox</label>\n</div>\n\n<div class="custom-control custom-checkbox">\n  <input type="checkbox" class="custom-control-input" id="customCheck2" checked>\n  <label class="custom-control-label" for="customCheck2">Desmarque esse checkbox</label>\n</div>'.trim(),this.radioExemplo='<div class="custom-control custom-radio mb-3">\n  <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">\n  <label class="custom-control-label" for="customRadio1">Ou esse fica marcado</label>\n</div>\n<div class="custom-control custom-radio">\n  <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">\n  <label class="custom-control-label" for="customRadio2">Ou esse aqui</label>\n</div>'.trim(),this.rangeExemplo='<label for="customRange1">Example range</label>\n<input type="range" class="custom-range" id="customRange1">'.trim(),this.htmlCodeValidacao='<form [formGroup]="formValidation">\n  <div class="form-group">\n    <label>E-mail</label>\n    <input class="form-control" type="text" formControlName="email">\n    <p class="feedback-msg">\n      <span *ngIf="formValidation.get(\'email\').invalid">E-mail inv\xe1lido</span>\n    </p>\n  </div>\n\n  <div class="form-group">\n    <label>LinkedIn</label>\n    <input class="form-control" type="text" formControlName="linkedin">\n    <p class="feedback-msg">\n      <span>Campo opcional</span>\n    </p>\n  </div>\n\n  <div class="form-group">\n    <label>Perfil</label>\n    <ng-select formControlName="perfil">\n      <ng-option value="">Selecione...</ng-option>\n      <ng-option value="Visitante">Visitante</ng-option>\n      <ng-option value="Desenvolvedor">Desenvolvedor</ng-option>\n      <ng-option value="Gestor">Gestor</ng-option>\n    </ng-select>\n    <p class="feedback-msg">\n      <span *ngIf="formValidation.get(\'perfil\').invalid">Campo obrigat\xf3rio</span>\n    </p>\n  </div>\n\n  <div class="form-group">\n    <label>Idade</label>\n    <input class="custom-range" type="range" formControlName="idade" min="0" max="100">\n    <p>{{ formValidation.get(\'idade\').value }}</p>\n    <p class="feedback-msg">\n      <span *ngIf="formValidation.get(\'idade\').invalid">Idade inv\xe1lida - deve ser entre 18 e 70</span>\n    </p>\n  </div>\n\n  <button class="btn btn-cancel" (click)="formValidation.reset()">Resetar</button>\n</form>'.trim(),this.tsCodeValidacao="import { Component } from '@angular/core';\nimport { FormBuilder, Validators } from \"@angular/forms\";\n\n@Component({\n    selector: 'app-forms',\n    templateUrl: './forms.component.html',\n    styleUrls: ['./forms.component.scss']\n})\nexport class FormsComponent {\n\n  constructor() {}\n\n  formValidation = this.fb.group({\n    email: [null, [Validators.email]],\n    linkedin: [null],\n    perfil: [null, [Validators.required]],\n    idade: [50, [Validators.min(18), Validators.max(70)]]\n  });\n\n}".trimRight(),this.cssCodeValidacao=".feedback-msg {\n  height: 1.5rem;\n  color: var(--aux);\n  margin-top: 0.5rem;\n  font-size: 0.9rem;\n}".trimRight()}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)(i.Mb(s.b),i.Mb(v.c))},t.\u0275cmp=i.Gb({type:t,selectors:[["ng-component"]],viewQuery:function(t,o){var n;1&t&&i.Mc(C,!0),2&t&&i.uc(n=i.bc())&&(o.scrollElement=n.first)},hostBindings:function(t,o){1&t&&i.ac("scroll",(function(t){return o.onScroll(t)}),!1,i.wc)},features:[i.wb],decls:194,vars:43,consts:[[1,"titulo"],[1,"mb-5"],["target","_blank","href","https://getbootstrap.com/docs/4.6/components/forms/",1,"text-destaque"],["role","tablist",1,"nav","nav-pills","tab-caixa"],[1,"nav-item"],["data-toggle","tab","href","#visaoGeral","role","tab",1,"nav-link","text-uppercase","active"],["data-toggle","tab","href","#exemplos","role","tab",1,"nav-link","text-uppercase"],[1,"tab-content"],["id","visaoGeral","role","tabpanel",1,"tab-pane","fade","show","active"],[1,"row","no-gutters"],[1,"col-12","col-xl-9","pr-2","mb-5"],["scrollElement",""],["id","painelInputs",3,"showCodeButton","cardTitle"],[1,"descricao"],[1,"conteudo"],[1,"form-group"],[1,"form-control"],["type","number",1,"form-control","mb-3"],[1,"mt-3"],[3,"highlight","languages"],["id","painelSelect",3,"showCodeButton","cardTitle"],["href","https://www.npmjs.com/package/@ng-select/ng-select","target","_blank",1,"text-destaque"],[1,"mb-3"],[1,"form-control","mb-3"],["id","painelCheckbox",3,"showCodeButton","cardTitle"],[1,"custom-control","custom-checkbox","mb-3"],["type","checkbox","id","customCheck1",1,"custom-control-input"],["for","customCheck1",1,"custom-control-label"],[1,"custom-control","custom-checkbox"],["type","checkbox","id","customCheck2","checked","",1,"custom-control-input"],["for","customCheck2",1,"custom-control-label"],["id","painelRadio",3,"showCodeButton","cardTitle"],[1,"custom-control","custom-radio","mb-3"],["type","radio","id","customRadio1","name","customRadio",1,"custom-control-input"],["for","customRadio1",1,"custom-control-label"],[1,"custom-control","custom-radio"],["type","radio","id","customRadio2","name","customRadio",1,"custom-control-input"],["for","customRadio2",1,"custom-control-label"],["id","painelRange",3,"showCodeButton","cardTitle"],["for","customRange1"],["type","range","id","customRange1",1,"custom-range"],["id","painelValidacao",3,"cardTitle","codeViewId","htmlTabId","htmlCode","tsTabId","tsCode","cssTabId","cssCode"],[3,"formGroup"],["type","text","formControlName","email",1,"form-control"],[1,"feedback-msg"],[4,"ngIf"],["type","text","formControlName","linkedin",1,"form-control"],["formControlName","perfil"],["value",""],["value","Visitante"],["value","Desenvolvedor"],["value","Gestor"],["type","range","formControlName","idade","min","0","max","100",1,"custom-range"],[1,"btn","btn-cancel",3,"click"],["id","navSection",1,"d-none","col-3","d-xl-flex","pl-4"],[3,"items","currentSection"],["id","exemplos","role","tabpanel",1,"tab-pane","fade"],["id","painelDisabled",3,"showCodeButton","cardTitle"],[1,"row"],[1,"col","mb-3"],["type","text","disabled","",1,"form-control"],[3,"readonly"],["disabled","",1,"form-control"],["type","range","id","customRange1","disabled","",1,"custom-range"],["type","checkbox","id","customCheck3","disabled","",1,"custom-control-input"],["for","customCheck3",1,"custom-control-label"],["type","radio","id","customRadio3","name","customRadio","disabled","",1,"custom-control-input"],["for","customRadio3",1,"custom-control-label"],["type","radio","id","customRadio4","name","customRadio","disabled","",1,"custom-control-input"],["for","customRadio4",1,"custom-control-label"]],template:function(t,o){1&t&&(i.Sb(0,"h1",0),i.Gc(1," Forms\n"),i.Rb(),i.Sb(2,"h5",1),i.Gc(3," Os estilos dos campos de formul\xe1rio seguem o padr\xe3o definido pelo "),i.Sb(4,"a",2),i.Gc(5,"Bootstrap."),i.Rb(),i.Nb(6,"br"),i.Nb(7,"br"),i.Gc(8," As variantes de tamanho, status e layout descritas na documenta\xe7\xe3o do link acima devem ser seguidos sem altera\xe7\xe3o.\n"),i.Rb(),i.Sb(9,"ul",3),i.Sb(10,"li",4),i.Sb(11,"a",5),i.Gc(12," Vis\xe3o Geral "),i.Rb(),i.Rb(),i.Sb(13,"li",4),i.Sb(14,"a",6),i.Gc(15," Exemplos "),i.Rb(),i.Rb(),i.Rb(),i.Nb(16,"br"),i.Sb(17,"div",7),i.Sb(18,"div",8),i.Sb(19,"div",9),i.Sb(20,"section",10,11),i.Sb(22,"app-documentacao-template",12),i.Sb(23,"div",13),i.Gc(24,' Para campos do tipo "input" e "text-area" utilizar a classe padr\xe3o "form-control" do Bootstrap.'),i.Nb(25,"br"),i.Nb(26,"br"),i.Gc(27," O espa\xe7amento entre campos pode ser implementado de duas maneiras:"),i.Nb(28,"br"),i.Gc(29,' - Envolvendo o label e o campo num container com a classe "form-group";'),i.Nb(30,"br"),i.Gc(31,' - Utilizando a classe auxiliar do Bootstrap "mb-3" (espa\xe7amento inferior de 1rem). '),i.Rb(),i.Sb(32,"div",14),i.Sb(33,"div",15),i.Sb(34,"label"),i.Gc(35,"Nome"),i.Rb(),i.Nb(36,"input",16),i.Rb(),i.Sb(37,"label"),i.Gc(38,"Idade"),i.Rb(),i.Nb(39,"input",17),i.Sb(40,"label"),i.Gc(41,"Observa\xe7\xf5es"),i.Rb(),i.Nb(42,"textarea",16),i.Sb(43,"pre",18),i.Nb(44,"code",19),i.Rb(),i.Rb(),i.Rb(),i.Nb(45,"br"),i.Sb(46,"app-documentacao-template",20),i.Sb(47,"div",13),i.Gc(48,' Para campos do tipo "select" utilizar por padr\xe3o o componente da biblioteca '),i.Sb(49,"a",21),i.Gc(50,"Ng-Select"),i.Rb(),i.Gc(51,", que j\xe1 oferece funcionalidades de filtro, autocomplete e multi-sele\xe7\xe3o."),i.Nb(52,"br"),i.Nb(53,"br"),i.Gc(54,' Caso n\xe3o seja poss\xedvel inserir o componente, utilizar a classe "form-control" no elemento "select". '),i.Rb(),i.Sb(55,"div",14),i.Sb(56,"label"),i.Gc(57,"Sexo"),i.Rb(),i.Sb(58,"ng-select",22),i.Sb(59,"ng-option"),i.Gc(60,"Masculino"),i.Rb(),i.Sb(61,"ng-option"),i.Gc(62,"Feminino"),i.Rb(),i.Rb(),i.Sb(63,"label"),i.Gc(64,"Naturalidade"),i.Rb(),i.Sb(65,"select",23),i.Sb(66,"option"),i.Gc(67,"Brasileiro"),i.Rb(),i.Sb(68,"option"),i.Gc(69,"Estrangeiro"),i.Rb(),i.Rb(),i.Sb(70,"pre",18),i.Nb(71,"code",19),i.Rb(),i.Rb(),i.Rb(),i.Nb(72,"br"),i.Sb(73,"app-documentacao-template",24),i.Sb(74,"div",13),i.Gc(75,' O Checkbox deve seguir o estilo "custom". '),i.Rb(),i.Sb(76,"div",14),i.Sb(77,"div",25),i.Nb(78,"input",26),i.Sb(79,"label",27),i.Gc(80,"Marque esse checkbox"),i.Rb(),i.Rb(),i.Sb(81,"div",28),i.Nb(82,"input",29),i.Sb(83,"label",30),i.Gc(84,"Desmarque esse checkbox"),i.Rb(),i.Rb(),i.Sb(85,"pre",18),i.Nb(86,"code",19),i.Rb(),i.Rb(),i.Rb(),i.Nb(87,"br"),i.Sb(88,"app-documentacao-template",31),i.Sb(89,"div",13),i.Gc(90,' O Radio, assim como o checkbox, tamb\xe9m deve seguir o estilo "custom". '),i.Rb(),i.Sb(91,"div",14),i.Sb(92,"div",32),i.Nb(93,"input",33),i.Sb(94,"label",34),i.Gc(95,"Ou esse fica marcado"),i.Rb(),i.Rb(),i.Sb(96,"div",35),i.Nb(97,"input",36),i.Sb(98,"label",37),i.Gc(99,"Ou esse aqui"),i.Rb(),i.Rb(),i.Sb(100,"pre",18),i.Nb(101,"code",19),i.Rb(),i.Rb(),i.Rb(),i.Nb(102,"br"),i.Sb(103,"app-documentacao-template",38),i.Sb(104,"div",13),i.Gc(105,' Para o elemento Range utilizar a classe "custom-range". '),i.Rb(),i.Sb(106,"div",14),i.Sb(107,"label",39),i.Gc(108,"Exemplo"),i.Rb(),i.Nb(109,"input",40),i.Sb(110,"pre",18),i.Nb(111,"code",19),i.Rb(),i.Rb(),i.Rb(),i.Nb(112,"br"),i.Sb(113,"app-documentacao-template",41),i.Sb(114,"div",13),i.Gc(115," As classes do Angular Forms (ng-dirty, ng-valid, ng-invalid) alteram o visual dos campos conforme seu estado de valida\xe7\xe3o. "),i.Rb(),i.Sb(116,"div",14),i.Sb(117,"form",42),i.Sb(118,"div",15),i.Sb(119,"label"),i.Gc(120,"E-mail"),i.Rb(),i.Nb(121,"input",43),i.Sb(122,"p",44),i.Ec(123,G,2,0,"span",45),i.Rb(),i.Rb(),i.Sb(124,"div",15),i.Sb(125,"label"),i.Gc(126,"LinkedIn"),i.Rb(),i.Nb(127,"input",46),i.Sb(128,"p",44),i.Sb(129,"span"),i.Gc(130,"Campo opcional"),i.Rb(),i.Rb(),i.Rb(),i.Sb(131,"div",15),i.Sb(132,"label"),i.Gc(133,"Perfil"),i.Rb(),i.Sb(134,"ng-select",47),i.Sb(135,"ng-option",48),i.Gc(136,"Selecione..."),i.Rb(),i.Sb(137,"ng-option",49),i.Gc(138,"Visitante"),i.Rb(),i.Sb(139,"ng-option",50),i.Gc(140,"Desenvolvedor"),i.Rb(),i.Sb(141,"ng-option",51),i.Gc(142,"Gestor"),i.Rb(),i.Rb(),i.Sb(143,"p",44),i.Ec(144,k,2,0,"span",45),i.Rb(),i.Rb(),i.Sb(145,"div",15),i.Sb(146,"label"),i.Gc(147,"Idade"),i.Rb(),i.Nb(148,"input",52),i.Sb(149,"p"),i.Gc(150),i.Rb(),i.Sb(151,"p",44),i.Ec(152,T,2,0,"span",45),i.Rb(),i.Rb(),i.Sb(153,"button",53),i.ac("click",(function(){return o.formValidation.reset()})),i.Gc(154,"Resetar"),i.Rb(),i.Rb(),i.Rb(),i.Rb(),i.Rb(),i.Sb(155,"nav",54),i.Nb(156,"app-code-fixed-nav",55),i.Rb(),i.Rb(),i.Rb(),i.Sb(157,"div",56),i.Sb(158,"app-documentacao-template",57),i.Sb(159,"div",14),i.Sb(160,"div",58),i.Sb(161,"div",59),i.Sb(162,"label"),i.Gc(163,"Input"),i.Rb(),i.Nb(164,"input",60),i.Rb(),i.Sb(165,"div",59),i.Sb(166,"label"),i.Gc(167,"Select"),i.Rb(),i.Sb(168,"ng-select",61),i.Gc(169,"Select"),i.Rb(),i.Rb(),i.Rb(),i.Sb(170,"div",58),i.Sb(171,"div",59),i.Sb(172,"label"),i.Gc(173,"Text Area"),i.Rb(),i.Nb(174,"textarea",62),i.Rb(),i.Sb(175,"div",59),i.Sb(176,"label"),i.Gc(177,"Range"),i.Rb(),i.Nb(178,"input",63),i.Rb(),i.Rb(),i.Sb(179,"div",58),i.Sb(180,"div",59),i.Sb(181,"div",28),i.Nb(182,"input",64),i.Sb(183,"label",65),i.Gc(184,"Checkbox"),i.Rb(),i.Rb(),i.Rb(),i.Sb(185,"div",59),i.Sb(186,"div",32),i.Nb(187,"input",66),i.Sb(188,"label",67),i.Gc(189,"Radio"),i.Rb(),i.Rb(),i.Sb(190,"div",35),i.Nb(191,"input",68),i.Sb(192,"label",69),i.Gc(193,"Radio 2"),i.Rb(),i.Rb(),i.Rb(),i.Rb(),i.Rb(),i.Rb(),i.Rb(),i.Rb()),2&t&&(i.zb(22),i.ic("showCodeButton",!1)("cardTitle","Inputs e Text-area"),i.zb(22),i.ic("highlight",o.inputExemplo)("languages",i.oc(38,N)),i.zb(2),i.ic("showCodeButton",!1)("cardTitle","Select"),i.zb(25),i.ic("highlight",o.selectExemplo)("languages",i.oc(39,N)),i.zb(2),i.ic("showCodeButton",!1)("cardTitle","Checkbox"),i.zb(13),i.ic("highlight",o.checkboxExemplo)("languages",i.oc(40,N)),i.zb(2),i.ic("showCodeButton",!1)("cardTitle","Radio"),i.zb(13),i.ic("highlight",o.radioExemplo)("languages",i.oc(41,N)),i.zb(2),i.ic("showCodeButton",!1)("cardTitle","Range"),i.zb(8),i.ic("highlight",o.rangeExemplo)("languages",i.oc(42,N)),i.zb(2),i.ic("cardTitle","Valida\xe7\xe3o")("codeViewId","formsValidacao")("htmlTabId","htmlCodeValidacao")("htmlCode",o.htmlCodeValidacao)("tsTabId","tsCodeValidacao")("tsCode",o.tsCodeValidacao)("cssTabId","cssCodeValidacao")("cssCode",o.cssCodeValidacao),i.zb(4),i.ic("formGroup",o.formValidation),i.zb(6),i.ic("ngIf",o.formValidation.get("email").invalid),i.zb(21),i.ic("ngIf",o.formValidation.get("perfil").invalid),i.zb(6),i.Hc(o.formValidation.get("idade").value),i.zb(2),i.ic("ngIf",o.formValidation.get("idade").invalid),i.zb(4),i.ic("items",o.navItems)("currentSection",o.currentSection),i.zb(2),i.ic("showCodeButton",!1)("cardTitle","Desabilitados"),i.zb(10),i.ic("readonly",!0))},directives:[c.a,l.a,x.a,x.c,v.n,v.u,v.v,v.k,v.e,v.b,v.j,v.d,e.p,v.p,r.a],styles:[".feedback-msg[_ngcontent-%COMP%]{height:1.5rem;color:var(--aux);margin-top:.5rem;font-size:.9rem}"]}),t})(),data:{title:"Forms",breadcrumb:"Forms",animation:"Forms"}}];let I=(()=>{class t{}return t.\u0275mod=i.Kb({type:t}),t.\u0275inj=i.Jb({factory:function(o){return new(o||t)},imports:[[a.h.forChild(w)],a.h]}),t})();var y=n("njyG"),B=n("tmjD"),E=n("Kdsb"),V=n("PCNd"),z=n("0JuT");let O=(()=>{class t{}return t.\u0275mod=i.Kb({type:t}),t.\u0275inj=i.Jb({factory:function(o){return new(o||t)},imports:[[e.c,I,V.a,v.f,x.b,v.q,B.b,y.b,l.b,E.c,z.a]]}),t})()}}]);