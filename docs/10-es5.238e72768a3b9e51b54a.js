function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _createSuper(t){var e=_isNativeReflectConstruct();return function(){var n,o=_getPrototypeOf(t);if(e){var a=_getPrototypeOf(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{R4qh:function(t,e,n){"use strict";n.r(e),n.d(e,"ComponentesBasicosModule",(function(){return G}));var o=n("ofXK"),a=n("tyNb"),c=n("pRMn"),b=n("fXoL"),i=n("5eHb"),s=n("r5ma"),l=n("OtPg"),r=n("j1XF"),d=["scrollElement"];function u(t,e){if(1&t&&(b.Rb(0),b.Tb(1,"tr"),b.Tb(2,"td"),b.Tb(3,"button"),b.Hc(4,"Padr\xe3o"),b.Sb(),b.Sb(),b.Tb(5,"td"),b.Tb(6,"button"),b.Hc(7,"Pequeno"),b.Sb(),b.Sb(),b.Tb(8,"td"),b.Tb(9,"button"),b.Hc(10,"Grande"),b.Sb(),b.Sb(),b.Tb(11,"td"),b.Tb(12,"button"),b.Hc(13,"Outline"),b.Sb(),b.Sb(),b.Tb(14,"td"),b.Tb(15,"button",39),b.Hc(16,"Desabilitado"),b.Sb(),b.Sb(),b.Sb(),b.Qb()),2&t){var n=e.$implicit;b.zb(3),b.Cb("btn btn-",null==n?null:n.name,""),b.zb(3),b.Cb("btn btn-",null==n?null:n.name," btn-sm"),b.zb(3),b.Cb("btn btn-",null==n?null:n.name," btn-lg"),b.zb(3),b.Cb("btn btn-outline-",null==n?null:n.name,""),b.zb(3),b.Cb("btn btn-",null==n?null:n.name,"")}}var m,p=function(){return["html"]},f=((m=function(t){_inherits(n,t);var e=_createSuper(n);function n(t){var o;return _classCallCheck(this,n),(o=e.call(this,t)).toastr=t,o.temas=[{name:"principal"},{name:"destaque"},{name:"cancel"},{name:"aux"},{name:"success"},{name:"danger"},{name:"info"},{name:"warning"}],o.spiedTags=["APP-DOCUMENTACAO-TEMPLATE"],o.sectionOffset=0,o.currentSection="painelBotoes",o.navItems=[{id:"painelBotoes",name:"Padr\xe3o"},{id:"painelBotoesTamanho",name:"\xedcones"}],o.botoesIntroducao='<button class="btn btn-main">Principal</button>;\n<button class="btn btn-accent">Destaque</button>;\n<button class="btn btn-cancel">Cancel</button>;\n<button class="btn btn-outline-aux">Auxiliar</button>;\n<button class="btn btn-danger btn-sm">Perigo</button>;\n<button class="btn btn-success btn-lg">Sucesso</button>;\n<button class="btn btn-warning">Alerta</button>\n<button class="btn btn-info">Informativo</button>\n<button class="btn btn-link">Link</button>',o.botoesIcones='<button class="btn btn-accent btn-sm">\n  <i class="fa fa-plus mr-2"></i>Incluir\n</button>\n\n<button class="btn btn-outline-accent">\n  <i class="fa fa-edit mr-2"></i>Editar\n</button>\n\n<button class="btn btn-main btn-lg">\n  <i class="fa fa-lg fa-save mr-3"></i>Salvar\n</button>',o.htmlCodeBotoes='<button class="btn btn-caixa btn-cancel">Bot\xe3o</button>'.trim(),o.htmlCodeBotoesTematicos='        <button class="btn btn-caixa btn-accent">Prim\xe1rio</button> &nbsp;\n<button class="btn btn-caixa btn-danger-dark">Erro com tom escuro</button> &nbsp;\n<button class="btn btn-caixa btn-apoio-light">Apoio com tom claro</button> &nbsp;\n<button class="btn btn-caixa btn-outline-info">Info - outline</button>'.trim(),o.htmlCodeBotoesTamanho='        <button class="btn btn-caixa btn-outline-dark btn-sm">Pequeno</button> &nbsp;\n<button class="btn btn-caixa btn-primario btn-lg">Grande</button> &nbsp;\n<button class="btn btn-caixa btn-primario btn-lg disabled">Grande desabilitado</button> &nbsp;\n<button class="btn btn-caixa btn-outline-accent">\n  <i class="fa fa-edit mr-2"></i>\n  Com \xedcone\n</button>'.trim(),o.htmlCodeExemplo='          <button class="btn btn-caixa btn-flat">\n  Flat\n</button>\n<button class="btn btn-caixa btn-flat rounded-circle p-3">\n  <i class="fa fa-bars fa-2x"></i>\n</button>\n<button class="btn btn-caixa btn-flat text-principal rounded-circle p-2">\n  <i class="fa fa-home fa-2x"></i>\n</button>\n<button class="btn btn-caixa btn-outline-apoio rounded-circle p-2">\n  <i class="fa fa-check fa-lg"></i>\n</button>\n<button class="btn btn-caixa btn-primario rounded-circle p-3">\n  <i class="fa fa-play fa-lg"></i>\n</button>\n<button class="btn btn-caixa btn-outline-perigo rounded-circle shadow-none p-4">\n  <i class="fa fa-trash fa-2x"></i>\n</button>\n<button class="btn btn-caixa btn-aux shadow-none">\n  Sem sombra\n</button>'.trim(),o.cssCodeExemplo=".btn-exemplo button {\n    margin-left: 1rem;\n    margin-right: 1rem;\n}".trim(),o.htmlCodeTodosTematicos='        <div class="table-responsive">\n  <table class="table table-caixa table-borderless">\n    <tbody>\n      <ng-container *ngFor="let tema of temas; let i = index">\n        <tr>\n          <td><button class="btn btn-caixa btn-{{tema.name}}">Padr\xe3o</button></td>\n          <td><button class="btn btn-caixa btn-{{tema.name}}-light">Claro</button></td>\n          <td><button class="btn btn-caixa btn-{{tema.name}}-dark">Escuro</button></td>\n          <td><button class="btn btn-caixa btn-outline-{{tema.name}}">Outline</button></td>\n          <td><button class="btn btn-caixa btn-outline-{{tema.name}}-light">Claro</button></td>\n          <td><button class="btn btn-caixa btn-outline-{{tema.name}}-dark">Escuro</button></td>\n        </tr>\n      </ng-container>\n    </tbody>\n  </table>\n</div>'.trim(),o.tsCodeTodosTematicos='  import { Component } from \'@angular/core\';\n\n  @Component({\n      selector: \'app-botoes\',\n      templateUrl: \'./botoes.component.html\',\n      styleUrls: [\'./botoes.component.scss\']\n  })\n  export class BotoesComponent {\n\n    temas = [\n      { "name": "primary" },\n      { "name": "secondary" },\n      { "name": "success" },\n      { "name": "danger" },\n      { "name": "info" },\n      { "name": "warning" },\n      { "name": "apoio" },\n      { "name": "aux" },\n      { "name": "light" },\n      { "name": "dark" }\n    ]\n  }\n  '.trimRight(),o}return _createClass(n,[{key:"ngOnInit",value:function(){}}]),n}(c.a)).\u0275fac=function(t){return new(t||m)(b.Nb(i.b))},m.\u0275cmp=b.Hb({type:m,selectors:[["app-botoes"]],viewQuery:function(t,e){var n;1&t&&b.Nc(d,!0),2&t&&b.vc(n=b.cc())&&(e.scrollElement=n.first)},hostBindings:function(t,e){1&t&&b.bc("scroll",(function(t){return e.onScroll(t)}),!1,b.xc)},features:[b.wb],decls:92,vars:26,consts:[[1,"titulo"],["role","tablist",1,"nav","nav-pills","tab-caixa"],[1,"nav-item"],["data-toggle","tab","href","#visaoGeral","role","tab",1,"nav-link","text-uppercase","active"],["data-toggle","tab","href","#exemplos","role","tab",1,"nav-link","text-uppercase"],[1,"tab-content"],["id","visaoGeral","role","tabpanel",1,"tab-pane","fade","show","active"],[1,"row","no-gutters"],[1,"col-12","col-xl-9","pr-2","mb-5"],["scrollElement",""],["id","painelBotoes",3,"showCodeButton","cardTitle","codeViewId","htmlTabId","htmlCode"],[1,"descricao"],["routerLink","/cores",1,"text-destaque"],[1,"conteudo"],[1,"btn","btn-main"],[1,"btn","btn-accent"],[1,"btn","btn-cancel"],[1,"btn","btn-outline-aux"],[1,"btn","btn-danger","btn-sm"],[1,"btn","btn-success","btn-lg"],[1,"btn","btn-warning"],[1,"btn","btn-info"],[1,"btn","btn-link"],[1,"mt-3"],[3,"highlight","languages"],["id","painelBotoesTamanho",3,"showCodeButton","cardTitle","codeViewId","htmlTabId","htmlCode"],[1,"btn","btn-accent","btn-sm"],[1,"fa","fa-plus","mr-2"],[1,"btn","btn-outline-accent"],[1,"fa","fa-edit","mr-2"],[1,"btn","btn-main","btn-lg"],[1,"fa","fa-lg","fa-save","mr-3"],["id","navSection",1,"d-none","col-3","d-xl-flex","pl-4"],[3,"items","currentSection"],["id","exemplos","role","tabpanel",1,"tab-pane","fade"],[3,"showCodeButton","cardTitle","codeViewId","htmlTabId","htmlCode","tsTabId","tsCode"],[1,"table-responsive"],[1,"table","table-caixa","table-borderless"],[4,"ngFor","ngForOf"],["disabled",""]],template:function(t,e){1&t&&(b.Tb(0,"h1",0),b.Hc(1," Bot\xf5es\n"),b.Sb(),b.Tb(2,"ul",1),b.Tb(3,"li",2),b.Tb(4,"a",3),b.Hc(5," Vis\xe3o Geral "),b.Sb(),b.Sb(),b.Tb(6,"li",2),b.Tb(7,"a",4),b.Hc(8," Exemplos "),b.Sb(),b.Sb(),b.Sb(),b.Ob(9,"br"),b.Tb(10,"div",5),b.Tb(11,"div",6),b.Tb(12,"div",7),b.Tb(13,"section",8,9),b.Tb(15,"app-documentacao-template",10),b.Tb(16,"div",11),b.Hc(17," Seguir o padr\xe3o do Bootstrap com as classes tem\xe1ticas definidas no menu "),b.Tb(18,"a",12),b.Hc(19,"Cores"),b.Sb(),b.Hc(20,"."),b.Ob(21,"br"),b.Hc(22," Todas as variantes (outline, block, lg, sm) est\xe3o dispon\xedveis. "),b.Sb(),b.Tb(23,"div",13),b.Tb(24,"button",14),b.Hc(25,"Principal"),b.Sb(),b.Hc(26,"\xa0 "),b.Tb(27,"button",15),b.Hc(28,"Destaque"),b.Sb(),b.Hc(29,"\xa0 "),b.Tb(30,"button",16),b.Hc(31,"Cancel"),b.Sb(),b.Hc(32,"\xa0 "),b.Tb(33,"button",17),b.Hc(34,"Auxiliar"),b.Sb(),b.Hc(35,"\xa0 "),b.Tb(36,"button",18),b.Hc(37,"Perigo"),b.Sb(),b.Hc(38,"\xa0 "),b.Tb(39,"button",19),b.Hc(40,"Sucesso"),b.Sb(),b.Hc(41,"\xa0 "),b.Tb(42,"button",20),b.Hc(43,"Alerta"),b.Sb(),b.Hc(44,"\xa0 "),b.Tb(45,"button",21),b.Hc(46,"Informativo"),b.Sb(),b.Hc(47,"\xa0 "),b.Tb(48,"button",22),b.Hc(49,"Link"),b.Sb(),b.Tb(50,"pre",23),b.Ob(51,"code",24),b.Sb(),b.Sb(),b.Sb(),b.Ob(52,"br"),b.Tb(53,"app-documentacao-template",25),b.Tb(54,"div",11),b.Hc(55," Utilizar \xedcones ao lado esquerdo do texto, conforme segue:"),b.Ob(56,"br"),b.Tb(57,"b"),b.Hc(58,"- Bot\xf5es pequenos:"),b.Sb(),b.Hc(59,' \xedcones comuns (classe "fa/fas/far") com espa\xe7amento \xe0 direita padr\xe3o de 0.5rem (classe "mr-2").'),b.Ob(60,"br"),b.Tb(61,"strong"),b.Hc(62,"- Bot\xf5es de tamanho normal:"),b.Sb(),b.Hc(63,' \xedcones comuns (classe "fa/fas/far") com espa\xe7amento \xe0 direita padr\xe3o de 0.5rem (classe "mr-2").'),b.Ob(64,"br"),b.Tb(65,"b"),b.Hc(66,"- Bot\xf5es grandes:"),b.Sb(),b.Hc(67,' \xedcones grandes (classe "fa/fas/far" acompanhada da "fa-lg") com espa\xe7amento \xe0 direita padr\xe3o de 1rem (classe "mr-3").'),b.Ob(68,"br"),b.Sb(),b.Tb(69,"div",13),b.Tb(70,"button",26),b.Ob(71,"i",27),b.Hc(72,"Incluir "),b.Sb(),b.Hc(73," \xa0 "),b.Tb(74,"button",28),b.Ob(75,"i",29),b.Hc(76,"Editar "),b.Sb(),b.Hc(77," \xa0 "),b.Tb(78,"button",30),b.Ob(79,"i",31),b.Hc(80,"Salvar "),b.Sb(),b.Tb(81,"pre",23),b.Ob(82,"code",24),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Tb(83,"nav",32),b.Ob(84,"app-code-fixed-nav",33),b.Sb(),b.Sb(),b.Sb(),b.Tb(85,"div",34),b.Tb(86,"app-documentacao-template",35),b.Tb(87,"div",13),b.Tb(88,"div",36),b.Tb(89,"table",37),b.Tb(90,"tbody"),b.Fc(91,u,17,15,"ng-container",38),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Sb()),2&t&&(b.zb(15),b.jc("showCodeButton",!1)("cardTitle","Padr\xe3o")("codeViewId","viewBotoes")("htmlTabId","htmlCodeBotoes")("htmlCode",e.htmlCodeBotoes),b.zb(36),b.jc("highlight",e.botoesIntroducao)("languages",b.pc(24,p)),b.zb(2),b.jc("showCodeButton",!1)("cardTitle","\xcdcones")("codeViewId","viewBotoesTamanho")("htmlTabId","htmlCodeBotoesTamanho")("htmlCode",e.htmlCodeBotoesTamanho),b.zb(29),b.jc("highlight",e.botoesIcones)("languages",b.pc(25,p)),b.zb(2),b.jc("items",e.navItems)("currentSection",e.currentSection),b.zb(2),b.jc("showCodeButton",!1)("cardTitle","Tem\xe1ticos")("codeViewId","viewBotoesTodosTematicos")("htmlTabId","htmlCodeTodosTematicos")("htmlCode",e.htmlCodeTodosTematicos)("tsTabId","tsCodeTodosTematicos")("tsCode",e.tsCodeTodosTematicos),b.zb(5),b.jc("ngForOf",e.temas))},directives:[s.a,a.g,l.a,r.a,o.o],styles:[".btn-exemplo[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:1rem;margin-right:1rem}"]}),m),g=n("ia4M"),T=n("LhWq");function h(t,e){if(1&t&&(b.Tb(0,"div",4),b.Tb(1,"div",5),b.Tb(2,"div",6),b.Tb(3,"h5",7),b.Ob(4,"i"),b.Hc(5),b.Sb(),b.Sb(),b.Sb(),b.Ob(6,"br"),b.Sb()),2&t){var n=e.$implicit;b.zb(1),b.kc("routerLink",n.url),b.zb(3),b.Cb("",n.iconClass," fa-lg mr-1"),b.zb(1),b.Jc(" ",n.name," ")}}function v(t,e){if(1&t&&(b.Tb(0,"div",2),b.Fc(1,h,7,5,"div",3),b.Sb()),2&t){var n=e.$implicit;b.zb(1),b.jc("ngForOf",n)}}var S,C=((S=function(){function t(e){_classCallCheck(this,t),this.menuService=e,this.rows=[],this.resources=[]}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.menuService.menuItems$.subscribe((function(e){e.find((function(t){return"/componentes-basicos"===t.url})).submenu.forEach((function(e){t.resources.push(e)})),t.resources=[].concat(t.resources),t.rows=t.groupColumns(t.resources)}))}},{key:"groupColumns",value:function(t){for(var e=[],n=0;n<t.length;n+=3)e.push(t.slice(n,n+3));return e}}]),t}()).\u0275fac=function(t){return new(t||S)(b.Nb(T.a))},S.\u0275cmp=b.Hb({type:S,selectors:[["app-componentes-basicos"]],decls:3,vars:1,consts:[[1,"titulo"],["class","row d-flex justify-content-center",4,"ngFor","ngForOf"],[1,"row","d-flex","justify-content-center"],["class","col-10 col-md-6 col-xl-4",4,"ngFor","ngForOf"],[1,"col-10","col-md-6","col-xl-4"],["role","button","optionalClasses","button-card-min-height","routerLinkActive","active",1,"card","w-75","card-hover","button-card",3,"routerLink"],[1,"card-body"],[1,"header-subtitulo-caixa","m-0","mr-3","text-center"]],template:function(t,e){1&t&&(b.Tb(0,"h1",0),b.Hc(1," Componentes b\xe1sicos "),b.Sb(),b.Fc(2,v,2,1,"div",1)),2&t&&(b.zb(2),b.jc("ngForOf",e.rows))},directives:[o.o,a.f,a.e],styles:[""]}),S),x=n("3Pt+"),H=n("wTG2"),O=["scrollElement"];function k(t,e){1&t&&(b.Tb(0,"span"),b.Hc(1,"E-mail inv\xe1lido"),b.Sb())}function y(t,e){1&t&&(b.Tb(0,"span"),b.Hc(1,"Campo obrigat\xf3rio"),b.Sb())}function w(t,e){1&t&&(b.Tb(0,"span"),b.Hc(1,"Idade inv\xe1lida - deve ser entre 18 e 70"),b.Sb())}var I,R,B,V=function(){return["html"]},z=((I=function(t){_inherits(n,t);var e=_createSuper(n);function n(t,o){var a;return _classCallCheck(this,n),(a=e.call(this,t)).toastr=t,a.fb=o,a.spiedTags=["APP-DOCUMENTACAO-TEMPLATE"],a.sectionOffset=0,a.currentSection="painelInputs",a.navItems=[{id:"painelInputs",name:"Inputs e Text-area"},{id:"painelSelect",name:"Select"},{id:"painelCheckbox",name:"Checkbox"},{id:"painelRadio",name:"Radio"},{id:"painelRange",name:"Range"},{id:"painelValidacao",name:"Valida\xe7\xe3o"}],a.formValidation=a.fb.group({email:[null,[x.t.email]],linkedin:[null],perfil:[null,[x.t.required]],idade:[50,[x.t.min(18),x.t.max(70)]]}),a.inputExemplo='<div class="form-group">\n  <label>Nome</label>\n  <input class="form-control">\n</div>\n\n<label>Idade</label>\n<input class="form-control mb-3" type="number">\n\n<label>Observa\xe7\xf5es</label>\n<textarea class="form-control"></textarea>'.trim(),a.selectExemplo='<label>Sexo</label>\n<ng-select class="mb-3">\n  <ng-option>Masculino</ng-option>\n  <ng-option>Feminino</ng-option>\n</ng-select>\n\n<label>Naturalidade</label>\n<select class="form-control mb-3">\n  <option>Brasileiro</option>\n  <option>Estrangeiro</option>\n</select>'.trim(),a.checkboxExemplo='<div class="custom-control custom-checkbox mb-3">\n  <input type="checkbox" class="custom-control-input" id="customCheck1">\n  <label class="custom-control-label" for="customCheck1">Marque esse checkbox</label>\n</div>\n\n<div class="custom-control custom-checkbox">\n  <input type="checkbox" class="custom-control-input" id="customCheck2" checked>\n  <label class="custom-control-label" for="customCheck2">Desmarque esse checkbox</label>\n</div>'.trim(),a.radioExemplo='<div class="custom-control custom-radio mb-3">\n  <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">\n  <label class="custom-control-label" for="customRadio1">Ou esse fica marcado</label>\n</div>\n<div class="custom-control custom-radio">\n  <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">\n  <label class="custom-control-label" for="customRadio2">Ou esse aqui</label>\n</div>'.trim(),a.rangeExemplo='<label for="customRange1">Exemplo</label>\n<input type="range" class="custom-range" id="customRange1">'.trim(),a.htmlCodeValidacao='<form [formGroup]="formValidation">\n  <div class="form-group">\n    <label>E-mail</label>\n    <input class="form-control" type="text" formControlName="email">\n    <p class="feedback-msg">\n      <span *ngIf="formValidation.get(\'email\').invalid">E-mail inv\xe1lido</span>\n    </p>\n  </div>\n\n  <div class="form-group">\n    <label>LinkedIn</label>\n    <input class="form-control" type="text" formControlName="linkedin">\n    <p class="feedback-msg">\n      <span>Campo opcional</span>\n    </p>\n  </div>\n\n  <div class="form-group">\n    <label>Perfil</label>\n    <ng-select formControlName="perfil">\n      <ng-option value="">Selecione...</ng-option>\n      <ng-option value="Visitante">Visitante</ng-option>\n      <ng-option value="Desenvolvedor">Desenvolvedor</ng-option>\n      <ng-option value="Gestor">Gestor</ng-option>\n    </ng-select>\n    <p class="feedback-msg">\n      <span *ngIf="formValidation.get(\'perfil\').invalid">Campo obrigat\xf3rio</span>\n    </p>\n  </div>\n\n  <div class="form-group">\n    <label>Idade</label>\n    <input class="custom-range" type="range" formControlName="idade" min="0" max="100">\n    <p>{{ formValidation.get(\'idade\').value }}</p>\n    <p class="feedback-msg">\n      <span *ngIf="formValidation.get(\'idade\').invalid">Idade inv\xe1lida - deve ser entre 18 e 70</span>\n    </p>\n  </div>\n\n  <button class="btn btn-cancel" (click)="formValidation.reset()">Resetar</button>\n</form>'.trim(),a.tsCodeValidacao="import { Component } from '@angular/core';\nimport { FormBuilder, Validators } from \"@angular/forms\";\n\n@Component({\n    selector: 'app-forms',\n    templateUrl: './forms.component.html',\n    styleUrls: ['./forms.component.scss']\n})\nexport class FormsComponent {\n\n  constructor() {}\n\n  formValidation = this.fb.group({\n    email: [null, [Validators.email]],\n    linkedin: [null],\n    perfil: [null, [Validators.required]],\n    idade: [50, [Validators.min(18), Validators.max(70)]]\n  });\n\n}".trimRight(),a.cssCodeValidacao=".feedback-msg {\n  height: 1.5rem;\n  color: var(--aux);\n  margin-top: 0.5rem;\n  font-size: 0.9rem;\n}".trimRight(),a}return _createClass(n,[{key:"ngOnInit",value:function(){}}]),n}(c.a)).\u0275fac=function(t){return new(t||I)(b.Nb(i.b),b.Nb(x.c))},I.\u0275cmp=b.Hb({type:I,selectors:[["ng-component"]],viewQuery:function(t,e){var n;1&t&&b.Nc(O,!0),2&t&&b.vc(n=b.cc())&&(e.scrollElement=n.first)},hostBindings:function(t,e){1&t&&b.bc("scroll",(function(t){return e.onScroll(t)}),!1,b.xc)},features:[b.wb],decls:194,vars:43,consts:[[1,"titulo"],[1,"mb-5"],["target","_blank","href","https://getbootstrap.com/docs/4.6/components/forms/",1,"text-destaque"],["role","tablist",1,"nav","nav-pills","tab-caixa"],[1,"nav-item"],["data-toggle","tab","href","#visaoGeral","role","tab",1,"nav-link","text-uppercase","active"],["data-toggle","tab","href","#exemplos","role","tab",1,"nav-link","text-uppercase"],[1,"tab-content"],["id","visaoGeral","role","tabpanel",1,"tab-pane","fade","show","active"],[1,"row","no-gutters"],[1,"col-12","col-xl-9","pr-2","mb-5"],["scrollElement",""],["id","painelInputs",3,"showCodeButton","cardTitle"],[1,"descricao"],[1,"conteudo"],[1,"form-group"],[1,"form-control"],["type","number",1,"form-control","mb-3"],[1,"mt-3"],[3,"highlight","languages"],["id","painelSelect",3,"showCodeButton","cardTitle"],["href","https://www.npmjs.com/package/@ng-select/ng-select","target","_blank",1,"text-destaque"],[1,"mb-3"],[1,"form-control","mb-3"],["id","painelCheckbox",3,"showCodeButton","cardTitle"],[1,"custom-control","custom-checkbox","mb-3"],["type","checkbox","id","customCheck1",1,"custom-control-input"],["for","customCheck1",1,"custom-control-label"],[1,"custom-control","custom-checkbox"],["type","checkbox","id","customCheck2","checked","",1,"custom-control-input"],["for","customCheck2",1,"custom-control-label"],["id","painelRadio",3,"showCodeButton","cardTitle"],[1,"custom-control","custom-radio","mb-3"],["type","radio","id","customRadio1","name","customRadio",1,"custom-control-input"],["for","customRadio1",1,"custom-control-label"],[1,"custom-control","custom-radio"],["type","radio","id","customRadio2","name","customRadio",1,"custom-control-input"],["for","customRadio2",1,"custom-control-label"],["id","painelRange",3,"showCodeButton","cardTitle"],["for","customRange1"],["type","range","id","customRange1",1,"custom-range"],["id","painelValidacao",3,"cardTitle","codeViewId","htmlTabId","htmlCode","tsTabId","tsCode","cssTabId","cssCode"],[3,"formGroup"],["type","text","formControlName","email",1,"form-control"],[1,"feedback-msg"],[4,"ngIf"],["type","text","formControlName","linkedin",1,"form-control"],["formControlName","perfil"],["value",""],["value","Visitante"],["value","Desenvolvedor"],["value","Gestor"],["type","range","formControlName","idade","min","0","max","100",1,"custom-range"],[1,"btn","btn-cancel",3,"click"],["id","navSection",1,"d-none","col-3","d-xl-flex","pl-4"],[3,"items","currentSection"],["id","exemplos","role","tabpanel",1,"tab-pane","fade"],["id","painelDisabled",3,"showCodeButton","cardTitle"],[1,"row"],[1,"col","mb-3"],["type","text","disabled","",1,"form-control"],[3,"readonly"],["disabled","",1,"form-control"],["type","range","id","customRange1","disabled","",1,"custom-range"],["type","checkbox","id","customCheck3","disabled","",1,"custom-control-input"],["for","customCheck3",1,"custom-control-label"],["type","radio","id","customRadio3","name","customRadio","disabled","",1,"custom-control-input"],["for","customRadio3",1,"custom-control-label"],["type","radio","id","customRadio4","name","customRadio","disabled","",1,"custom-control-input"],["for","customRadio4",1,"custom-control-label"]],template:function(t,e){1&t&&(b.Tb(0,"h1",0),b.Hc(1," Forms\n"),b.Sb(),b.Tb(2,"h5",1),b.Hc(3," Os estilos dos campos de formul\xe1rio seguem o padr\xe3o definido pelo "),b.Tb(4,"a",2),b.Hc(5,"Bootstrap."),b.Sb(),b.Ob(6,"br"),b.Ob(7,"br"),b.Hc(8," As variantes de tamanho, status e layout descritas na documenta\xe7\xe3o do link acima devem ser seguidos sem altera\xe7\xe3o.\n"),b.Sb(),b.Tb(9,"ul",3),b.Tb(10,"li",4),b.Tb(11,"a",5),b.Hc(12," Vis\xe3o Geral "),b.Sb(),b.Sb(),b.Tb(13,"li",4),b.Tb(14,"a",6),b.Hc(15," Exemplos "),b.Sb(),b.Sb(),b.Sb(),b.Ob(16,"br"),b.Tb(17,"div",7),b.Tb(18,"div",8),b.Tb(19,"div",9),b.Tb(20,"section",10,11),b.Tb(22,"app-documentacao-template",12),b.Tb(23,"div",13),b.Hc(24,' Para campos do tipo "input" e "text-area" utilizar a classe padr\xe3o "form-control" do Bootstrap.'),b.Ob(25,"br"),b.Ob(26,"br"),b.Hc(27," O espa\xe7amento entre campos pode ser implementado de duas maneiras:"),b.Ob(28,"br"),b.Hc(29,' - Envolvendo o label e o campo num container com a classe "form-group";'),b.Ob(30,"br"),b.Hc(31,' - Utilizando a classe auxiliar do Bootstrap "mb-3" (espa\xe7amento inferior de 1rem). '),b.Sb(),b.Tb(32,"div",14),b.Tb(33,"div",15),b.Tb(34,"label"),b.Hc(35,"Nome"),b.Sb(),b.Ob(36,"input",16),b.Sb(),b.Tb(37,"label"),b.Hc(38,"Idade"),b.Sb(),b.Ob(39,"input",17),b.Tb(40,"label"),b.Hc(41,"Observa\xe7\xf5es"),b.Sb(),b.Ob(42,"textarea",16),b.Tb(43,"pre",18),b.Ob(44,"code",19),b.Sb(),b.Sb(),b.Sb(),b.Ob(45,"br"),b.Tb(46,"app-documentacao-template",20),b.Tb(47,"div",13),b.Hc(48,' Para campos do tipo "select" utilizar por padr\xe3o o componente da biblioteca '),b.Tb(49,"a",21),b.Hc(50,"Ng-Select"),b.Sb(),b.Hc(51,", que j\xe1 oferece funcionalidades de filtro, autocomplete e multi-sele\xe7\xe3o."),b.Ob(52,"br"),b.Ob(53,"br"),b.Hc(54,' Caso n\xe3o seja poss\xedvel inserir o componente, utilizar a classe "form-control" no elemento "select". '),b.Sb(),b.Tb(55,"div",14),b.Tb(56,"label"),b.Hc(57,"Sexo"),b.Sb(),b.Tb(58,"ng-select",22),b.Tb(59,"ng-option"),b.Hc(60,"Masculino"),b.Sb(),b.Tb(61,"ng-option"),b.Hc(62,"Feminino"),b.Sb(),b.Sb(),b.Tb(63,"label"),b.Hc(64,"Naturalidade"),b.Sb(),b.Tb(65,"select",23),b.Tb(66,"option"),b.Hc(67,"Brasileiro"),b.Sb(),b.Tb(68,"option"),b.Hc(69,"Estrangeiro"),b.Sb(),b.Sb(),b.Tb(70,"pre",18),b.Ob(71,"code",19),b.Sb(),b.Sb(),b.Sb(),b.Ob(72,"br"),b.Tb(73,"app-documentacao-template",24),b.Tb(74,"div",13),b.Hc(75,' O Checkbox deve seguir o estilo "custom". '),b.Sb(),b.Tb(76,"div",14),b.Tb(77,"div",25),b.Ob(78,"input",26),b.Tb(79,"label",27),b.Hc(80,"Marque esse checkbox"),b.Sb(),b.Sb(),b.Tb(81,"div",28),b.Ob(82,"input",29),b.Tb(83,"label",30),b.Hc(84,"Desmarque esse checkbox"),b.Sb(),b.Sb(),b.Tb(85,"pre",18),b.Ob(86,"code",19),b.Sb(),b.Sb(),b.Sb(),b.Ob(87,"br"),b.Tb(88,"app-documentacao-template",31),b.Tb(89,"div",13),b.Hc(90,' O Radio, assim como o checkbox, tamb\xe9m deve seguir o estilo "custom". '),b.Sb(),b.Tb(91,"div",14),b.Tb(92,"div",32),b.Ob(93,"input",33),b.Tb(94,"label",34),b.Hc(95,"Ou esse fica marcado"),b.Sb(),b.Sb(),b.Tb(96,"div",35),b.Ob(97,"input",36),b.Tb(98,"label",37),b.Hc(99,"Ou esse aqui"),b.Sb(),b.Sb(),b.Tb(100,"pre",18),b.Ob(101,"code",19),b.Sb(),b.Sb(),b.Sb(),b.Ob(102,"br"),b.Tb(103,"app-documentacao-template",38),b.Tb(104,"div",13),b.Hc(105,' Para o elemento Range utilizar a classe "custom-range". '),b.Sb(),b.Tb(106,"div",14),b.Tb(107,"label",39),b.Hc(108,"Exemplo"),b.Sb(),b.Ob(109,"input",40),b.Tb(110,"pre",18),b.Ob(111,"code",19),b.Sb(),b.Sb(),b.Sb(),b.Ob(112,"br"),b.Tb(113,"app-documentacao-template",41),b.Tb(114,"div",13),b.Hc(115," As classes do Angular Forms (ng-dirty, ng-valid, ng-invalid) alteram o visual dos campos conforme seu estado de valida\xe7\xe3o. "),b.Sb(),b.Tb(116,"div",14),b.Tb(117,"form",42),b.Tb(118,"div",15),b.Tb(119,"label"),b.Hc(120,"E-mail"),b.Sb(),b.Ob(121,"input",43),b.Tb(122,"p",44),b.Fc(123,k,2,0,"span",45),b.Sb(),b.Sb(),b.Tb(124,"div",15),b.Tb(125,"label"),b.Hc(126,"LinkedIn"),b.Sb(),b.Ob(127,"input",46),b.Tb(128,"p",44),b.Tb(129,"span"),b.Hc(130,"Campo opcional"),b.Sb(),b.Sb(),b.Sb(),b.Tb(131,"div",15),b.Tb(132,"label"),b.Hc(133,"Perfil"),b.Sb(),b.Tb(134,"ng-select",47),b.Tb(135,"ng-option",48),b.Hc(136,"Selecione..."),b.Sb(),b.Tb(137,"ng-option",49),b.Hc(138,"Visitante"),b.Sb(),b.Tb(139,"ng-option",50),b.Hc(140,"Desenvolvedor"),b.Sb(),b.Tb(141,"ng-option",51),b.Hc(142,"Gestor"),b.Sb(),b.Sb(),b.Tb(143,"p",44),b.Fc(144,y,2,0,"span",45),b.Sb(),b.Sb(),b.Tb(145,"div",15),b.Tb(146,"label"),b.Hc(147,"Idade"),b.Sb(),b.Ob(148,"input",52),b.Tb(149,"p"),b.Hc(150),b.Sb(),b.Tb(151,"p",44),b.Fc(152,w,2,0,"span",45),b.Sb(),b.Sb(),b.Tb(153,"button",53),b.bc("click",(function(){return e.formValidation.reset()})),b.Hc(154,"Resetar"),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Tb(155,"nav",54),b.Ob(156,"app-code-fixed-nav",55),b.Sb(),b.Sb(),b.Sb(),b.Tb(157,"div",56),b.Tb(158,"app-documentacao-template",57),b.Tb(159,"div",14),b.Tb(160,"div",58),b.Tb(161,"div",59),b.Tb(162,"label"),b.Hc(163,"Input"),b.Sb(),b.Ob(164,"input",60),b.Sb(),b.Tb(165,"div",59),b.Tb(166,"label"),b.Hc(167,"Select"),b.Sb(),b.Tb(168,"ng-select",61),b.Hc(169,"Select"),b.Sb(),b.Sb(),b.Sb(),b.Tb(170,"div",58),b.Tb(171,"div",59),b.Tb(172,"label"),b.Hc(173,"Text Area"),b.Sb(),b.Ob(174,"textarea",62),b.Sb(),b.Tb(175,"div",59),b.Tb(176,"label"),b.Hc(177,"Range"),b.Sb(),b.Ob(178,"input",63),b.Sb(),b.Sb(),b.Tb(179,"div",58),b.Tb(180,"div",59),b.Tb(181,"div",28),b.Ob(182,"input",64),b.Tb(183,"label",65),b.Hc(184,"Checkbox"),b.Sb(),b.Sb(),b.Sb(),b.Tb(185,"div",59),b.Tb(186,"div",32),b.Ob(187,"input",66),b.Tb(188,"label",67),b.Hc(189,"Radio"),b.Sb(),b.Sb(),b.Tb(190,"div",35),b.Ob(191,"input",68),b.Tb(192,"label",69),b.Hc(193,"Radio 2"),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Sb()),2&t&&(b.zb(22),b.jc("showCodeButton",!1)("cardTitle","Inputs e Text-area"),b.zb(22),b.jc("highlight",e.inputExemplo)("languages",b.pc(38,V)),b.zb(2),b.jc("showCodeButton",!1)("cardTitle","Select"),b.zb(25),b.jc("highlight",e.selectExemplo)("languages",b.pc(39,V)),b.zb(2),b.jc("showCodeButton",!1)("cardTitle","Checkbox"),b.zb(13),b.jc("highlight",e.checkboxExemplo)("languages",b.pc(40,V)),b.zb(2),b.jc("showCodeButton",!1)("cardTitle","Radio"),b.zb(13),b.jc("highlight",e.radioExemplo)("languages",b.pc(41,V)),b.zb(2),b.jc("showCodeButton",!1)("cardTitle","Range"),b.zb(8),b.jc("highlight",e.rangeExemplo)("languages",b.pc(42,V)),b.zb(2),b.jc("cardTitle","Valida\xe7\xe3o")("codeViewId","formsValidacao")("htmlTabId","htmlCodeValidacao")("htmlCode",e.htmlCodeValidacao)("tsTabId","tsCodeValidacao")("tsCode",e.tsCodeValidacao)("cssTabId","cssCodeValidacao")("cssCode",e.cssCodeValidacao),b.zb(4),b.jc("formGroup",e.formValidation),b.zb(6),b.jc("ngIf",e.formValidation.get("email").invalid),b.zb(21),b.jc("ngIf",e.formValidation.get("perfil").invalid),b.zb(6),b.Ic(e.formValidation.get("idade").value),b.zb(2),b.jc("ngIf",e.formValidation.get("idade").invalid),b.zb(4),b.jc("items",e.navItems)("currentSection",e.currentSection),b.zb(2),b.jc("showCodeButton",!1)("cardTitle","Desabilitados"),b.zb(10),b.jc("readonly",!0))},directives:[s.a,l.a,H.a,H.c,x.n,x.u,x.v,x.k,x.e,x.b,x.j,x.d,o.p,x.p,r.a],styles:[".feedback-msg[_ngcontent-%COMP%]{height:1.5rem;color:var(--cxAux);margin-top:.5rem;font-size:.9rem}"]}),I),j=n("LWRd"),_=[{path:"",component:C,data:{title:"Componentes b\xe1sicos",breadcrumb:"Componentes b\xe1sicos"}},{path:"botoes",component:f,data:{title:"Bot\xf5es",breadcrumb:"Bot\xf5es",animation:"Bot\xf5es"}},{path:"cards",component:g.a,data:{title:"Cards",breadcrumb:"Cards",animation:"Cards"}},{path:"forms",component:z,data:{title:"Forms",breadcrumb:"Forms",animation:"Forms"}},{path:"mensagens",component:j.a,data:{title:"Mensagens",breadcrumb:"Mensagens",animation:"Mensagens"}}],E=((R=function t(){_classCallCheck(this,t)}).\u0275mod=b.Lb({type:R}),R.\u0275inj=b.Kb({factory:function(t){return new(t||R)},imports:[[a.h.forChild(_)],a.h]}),R),P=n("njyG"),F=n("tmjD"),N=n("Kdsb"),q=n("PCNd"),A=n("0JuT"),G=((B=function t(){_classCallCheck(this,t)}).\u0275mod=b.Lb({type:B}),B.\u0275inj=b.Kb({factory:function(t){return new(t||B)},imports:[[o.c,E,q.a,x.f,H.b,x.q,F.b,P.b,l.b,N.c,A.a]]}),B)}}]);