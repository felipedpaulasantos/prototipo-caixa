function _defineProperties(t,e){for(var o=0;o<e.length;o++){var a=e[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function _createClass(t,e,o){return e&&_defineProperties(t.prototype,e),o&&_defineProperties(t,o),t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _createSuper(t){var e=_isNativeReflectConstruct();return function(){var o,a=_getPrototypeOf(t);if(e){var c=_getPrototypeOf(this).constructor;o=Reflect.construct(a,arguments,c)}else o=a.apply(this,arguments);return _possibleConstructorReturn(this,o)}}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{ia4M:function(t,e,o){"use strict";o.d(e,"a",(function(){return b}));var a=o("pRMn"),c=o("fXoL"),n=o("5eHb"),d=o("r5ma"),i=o("OtPg"),s=o("j1XF"),r=["scrollElement"],l=function(){return["html"]},b=function(){var t=function(t){_inherits(o,t);var e=_createSuper(o);function o(t){var a;return _classCallCheck(this,o),(a=e.call(this,t)).toastr=t,a.spiedTags=["APP-DOCUMENTACAO-TEMPLATE"],a.sectionOffset=0,a.currentSection="painelCards",a.navItems=[{id:"painelCards",name:"Padr\xe3o"},{id:"painelCardsTematicos",name:"Tem\xe1ticos"},{id:"painelCardsEfeito",name:"Com efeito"}],a.cardsIntroducao='<div class="card">\n  <div class="card-header">\n    <h4 class="subtitulo">T\xedtulo</h4>\n  </div>\n  <div class="card-body">\n    <h5>Este \xe9 um subt\xedtulo</h5>\n    <span>Este \xe9 o corpo do card</span>\n  </div>\n  <div class="card-footer">\n    <h5>Isso \xe9 um rodap\xe9</h5>\n  </div>\n</div>'.trim(),a.cardsTematicos='<div class="row">\n  <div class="col-12 col-md-6 my-2">\n    <div class="card bg-contraste text-base">\n      <div class="card-header">\n        <h4 class="subtitulo">T\xedtulo</h4>\n      </div>\n      <div class="card-body">\n        <h5>Este \xe9 um subt\xedtulo</h5>\n        <span>Este \xe9 o corpo do card</span>\n      </div>\n      <div class="card-footer">\n        <h5>Isso \xe9 um rodap\xe9</h5>\n      </div>\n    </div>\n  </div>\n\n  <div class="col my-2">\n    <div class="card bg-destaque text-base">\n      <div class="card-header">\n        <h4 class="subtitulo">T\xedtulo</h4>\n      </div>\n      <div class="card-body">\n        <h5>Este \xe9 um subt\xedtulo</h5>\n        <span>Este \xe9 o corpo do card</span>\n      </div>\n      <div class="card-footer">\n        <h5>Isso \xe9 um rodap\xe9</h5>\n      </div>\n    </div>\n  </div>\n</div>'.trim(),a.cardsSombra='<div class="card card-hover">\n  <div class="card-body">\n    <span>Este card possui efeito de sombra.</span>\n  </div>\n</div>'.trim(),a.cardHome='<div id="cardHome" class="card card-hover border border-dark">\n  <div class="card-body">\n    <i class="fa fa-home fa-4x mr-4"></i>\n    <h2 class="d-inline font-fam-bold mb-0">HOME</h2>\n  </div>\n</div>\n\n<style>\n  #cardHome {\n    max-width: 20rem;\n  }\n</style>'.trim(),a.htmlCodeCards='            <div class="card">\n  <div class="card-header">\n    <h4 class="subtitulo">T\xedtulo</h4>\n  </div>\n  <div class="card-body">\n    <h5>Este \xe9 um subt\xedtulo</h5>\n    <span>Este \xe9 o corpo do card</span>\n  </div>\n  <div class="card-footer">\n    <h5>Isso \xe9 um rodap\xe9</h5>\n  </div>\n</div>'.trim(),a.htmlCodeCardsTematicos='            <div class="row">\n  <div class="col-12 col-md-6 my-2">\n    <div class="card bg-grafite text-cinza">\n      <div class="card-header">\n        <h4 class="subtitulo">T\xedtulo</h4>\n      </div>\n      <div class="card-body">\n        <h5>Este \xe9 um subt\xedtulo</h5>\n        <span>Este \xe9 o corpo do card</span>\n      </div>\n      <div class="card-footer">\n        <h5>Isso \xe9 um rodap\xe9</h5>\n      </div>\n    </div>\n  </div>  \x3c!-- Coluna --\x3e\n\n  <div class="col my-2">\n    <div class="card bg-destaque text-cinza">\n      <div class="card-header">\n        <h4 class="subtitulo">T\xedtulo</h4>\n      </div>\n      <div class="card-body">\n        <h5>Este \xe9 um subt\xedtulo</h5>\n        <span>Este \xe9 o corpo do card</span>\n      </div>\n      <div class="card-footer">\n        <h5>Isso \xe9 um rodap\xe9</h5>\n      </div>\n    </div>\n  </div>  \x3c!-- Coluna --\x3e\n</div>  \x3c!-- Linha --\x3e'.trim(),a.htmlCodeCardsEfeito='        <div class="card card-hover">\n  <div class="card-body">\n    <span>Este card possui efeito de sombra.</span>\n  </div>\n</div>'.trim(),a.htmlCodeCardBotao='        <div class="row">\n  <div class="col-6 col-md-4 mb-3">\n    <div class="card card-hover border border-dark">\n      <div class="card-body">\n        <i class="fa fa-home fa-4x mr-4"></i>\n        <h2 class="d-inline font-fam-bold mb-0">HOME</h2>\n      </div>\n    </div>  \x3c!-- Card --\x3e\n  </div>  \x3c!-- Col --\x3e\n  <div class="col-6 col-md-4 mb-3">\n    <div class="card card-hover border border-primary bg-gradient-ceu text-white">\n      <div class="card-body">\n        <i class="fa fa-users fa-4x"></i>\n      </div>\n    </div>  \x3c!-- Card --\x3e\n  </div>  \x3c!-- Col --\x3e\n  <div class="col-6 col-md-4 mb-3">\n    <div class="card card-hover bg-opacity-2 border border-dark-dark">\n      <div class="card-body">\n        <i class="fa fa-file-archive fa-4x"></i>\n      </div>\n    </div>  \x3c!-- Card --\x3e\n  </div>  \x3c!-- Col --\x3e\n</div>  \x3c!-- Row --\x3e'.trim(),a.cssCodeCardBotao=".cards-menu .card {\n  cursor: pointer;\n  margin-right: 2rem;\n  border-width: 2px !important;\n  border-top-left-radius: 0px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 0px;\n  border-bottom-right-radius: 0px;\n}".trim(),a.htmlCodeCardLayout='<div id="cardDadosProposta" class="card">\n  <div class="card-header">\n    <h4 class="d-inline-block mr-2 font-fam-bold">Dados da proposta</h4>\n    <a class="text-link">0007.1556.0000112-3</a>\n  </div>\n  <div class="card-body p-0">\n    <div class="info-row bg-fundo border-top border-bottom">\n      <div class="row">\n        <div class="col">\n          <h6 class="subtitulo">C\xf3digo da Reserva</h6>\n          1.797\n        </div>\n        <div class="col">\n          <h6 class="subtitulo">Fonte de recurso</h6>\n          SBPE\n        </div>\n      </div>\n    </div>  \x3c!-- Info-Row --\x3e\n    <div class="info-row border-bottom">\n      <div class="row">\n        <div class="col">\n          <h6 class="subtitulo">Tipo de financiamento</h6>\n          143 - CCSBPE - AQUISI\xc7\xc3O DE TERRENO E CONSTRU\xc7\xc3O - PF -SHF - POS\n        </div>\n      </div>\n    </div>  \x3c!-- Info-Row --\x3e\n    <div class="info-row bg-fundo border-bottom">\n      <div class="row">\n        <div class="col">\n          <h6 class="subtitulo">Seguradora</h6>\n          CAIXA SEGUROS\n        </div>\n        <div class="col">\n          <h6 class="subtitulo">Ap\xf3lice</h6>\n          61170 - CAIXA SEGUROS - SBPE\n        </div>\n      </div>\n    </div>  \x3c!-- Info-Row --\x3e\n  </div>  \x3c!-- Card-body --\x3e\n  <div class="card-footer text-center">\n    <i class="fa fa-chevron-down mr-3"></i>\n    <span>Mais dados da proposta</span>\n  </div>\n</div>'.trim(),a.cssCodeCardLayout="#cardDadosProposta {\n  width: 800px;\n}\n.info-row {\n  padding: 1.2rem;\n}".trim(),a}return o}(a.a);return t.\u0275fac=function(e){return new(e||t)(c.Mb(n.b))},t.\u0275cmp=c.Gb({type:t,selectors:[["app-cards"]],viewQuery:function(t,e){var o;1&t&&c.Mc(r,!0),2&t&&c.uc(o=c.bc())&&(e.scrollElement=o.first)},hostBindings:function(t,e){1&t&&c.ac("scroll",(function(t){return e.onScroll(t)}),!1,c.wc)},features:[c.wb],decls:147,vars:41,consts:[[1,"titulo"],["role","tablist",1,"nav","nav-pills","tab-caixa"],[1,"nav-item"],["data-toggle","tab","href","#visaoGeral","role","tab",1,"nav-link","text-uppercase","active"],["data-toggle","tab","href","#exemplos","role","tab",1,"nav-link","text-uppercase"],[1,"tab-content"],["id","visaoGeral","role","tabpanel",1,"tab-pane","fade","show","active"],[1,"row","no-gutters"],[1,"col-12","col-xl-9","pr-2","mb-5"],["scrollElement",""],["id","painelCards",3,"cardTitle","codeViewId","htmlTabId","htmlCode"],[1,"descricao"],["target","_blank","href","https://getbootstrap.com/docs/4.6/components/card/",1,"text-destaque"],[1,"conteudo"],[1,"card"],[1,"card-header"],[1,"subtitulo"],[1,"card-body"],[1,"card-footer"],[1,"mt-3"],[3,"highlight","languages"],["id","painelCardsTematicos",3,"showCodeButton","cardTitle","codeViewId","htmlTabId","htmlCode"],[1,"citation-highlight"],[1,"row"],[1,"col-12","col-md-6","my-2"],[1,"card","bg-contraste","text-base"],[1,"col","my-2"],[1,"card","bg-destaque","text-base"],["id","painelCardsEfeito",3,"showCodeButton","cardTitle","codeViewId","htmlTabId","htmlCode"],[1,"card","card-hover"],["id","navSection",1,"d-none","col-3","d-xl-flex","pl-4"],[3,"items","currentSection"],["id","exemplos","role","tabpanel",1,"tab-pane","fade"],[3,"showCodeButton","cardTitle","codeViewId","htmlTabId","htmlCode","cssTabId","cssCode"],["id","cardHome",1,"card","card-hover","border","border-dark"],[1,"fa","fa-home","fa-4x","mr-4"],[1,"d-inline","font-fam-bold","mb-0"],[3,"cardTitle","codeViewId","htmlTabId","htmlCode","cssTabId","cssCode"],["id","cardDadosProposta",1,"card"],[1,"d-inline-block","mr-2","font-fam-bold"],[1,"text-link"],[1,"card-body","p-0"],[1,"info-row","bg-fundo","border-top","border-bottom"],[1,"col"],[1,"info-row","border-bottom"],[1,"info-row","bg-fundo","border-bottom"],[1,"card-footer","text-center"],[1,"fa","fa-chevron-down","mr-3"]],template:function(t,e){1&t&&(c.Sb(0,"h1",0),c.Gc(1," Cards\n"),c.Rb(),c.Sb(2,"ul",1),c.Sb(3,"li",2),c.Sb(4,"a",3),c.Gc(5," Vis\xe3o Geral "),c.Rb(),c.Rb(),c.Sb(6,"li",2),c.Sb(7,"a",4),c.Gc(8," Exemplos "),c.Rb(),c.Rb(),c.Rb(),c.Nb(9,"br"),c.Sb(10,"div",5),c.Sb(11,"div",6),c.Sb(12,"div",7),c.Sb(13,"section",8,9),c.Sb(15,"app-documentacao-template",10),c.Sb(16,"div",11),c.Gc(17," Utilizar o template definido pelo "),c.Sb(18,"a",12),c.Gc(19,"Bootstrap"),c.Rb(),c.Gc(20,"."),c.Nb(21,"br"),c.Gc(22," Observa\xe7\xe3o: "),c.Sb(23,"strong"),c.Gc(24,"n\xe3o"),c.Rb(),c.Gc(25,' utilizar a classe "panel", que foi substitu\xedda pelo "card" na vers\xe3o 4 do framework. '),c.Rb(),c.Sb(26,"div",13),c.Sb(27,"div",14),c.Sb(28,"div",15),c.Sb(29,"h4",16),c.Gc(30,"T\xedtulo"),c.Rb(),c.Rb(),c.Sb(31,"div",17),c.Sb(32,"h5"),c.Gc(33,"Este \xe9 um subt\xedtulo"),c.Rb(),c.Sb(34,"span"),c.Gc(35,"Este \xe9 o corpo do card"),c.Rb(),c.Rb(),c.Sb(36,"div",18),c.Sb(37,"h5"),c.Gc(38,"Isso \xe9 um rodap\xe9"),c.Rb(),c.Rb(),c.Rb(),c.Sb(39,"pre",19),c.Nb(40,"code",20),c.Rb(),c.Rb(),c.Rb(),c.Nb(41,"br"),c.Sb(42,"app-documentacao-template",21),c.Sb(43,"div",11),c.Gc(44," Qualquer classe tem\xe1tica pode ser utilizada nos cards, com "),c.Sb(45,"span",22),c.Gc(46,"bg-(tema)"),c.Rb(),c.Gc(47," e "),c.Sb(48,"span",22),c.Gc(49,"text-(tema)"),c.Rb(),c.Gc(50,". "),c.Rb(),c.Sb(51,"div",13),c.Sb(52,"div",23),c.Sb(53,"div",24),c.Sb(54,"div",25),c.Sb(55,"div",15),c.Sb(56,"h4",16),c.Gc(57,"T\xedtulo"),c.Rb(),c.Rb(),c.Sb(58,"div",17),c.Sb(59,"h5"),c.Gc(60,"Este \xe9 um subt\xedtulo"),c.Rb(),c.Sb(61,"span"),c.Gc(62,"Este \xe9 o corpo do card"),c.Rb(),c.Rb(),c.Sb(63,"div",18),c.Sb(64,"h5"),c.Gc(65,"Isso \xe9 um rodap\xe9"),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Sb(66,"div",26),c.Sb(67,"div",27),c.Sb(68,"div",15),c.Sb(69,"h4",16),c.Gc(70,"T\xedtulo"),c.Rb(),c.Rb(),c.Sb(71,"div",17),c.Sb(72,"h5"),c.Gc(73,"Este \xe9 um subt\xedtulo"),c.Rb(),c.Sb(74,"span"),c.Gc(75,"Este \xe9 o corpo do card"),c.Rb(),c.Rb(),c.Sb(76,"div",18),c.Sb(77,"h5"),c.Gc(78,"Isso \xe9 um rodap\xe9"),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Sb(79,"pre",19),c.Nb(80,"code",20),c.Rb(),c.Rb(),c.Rb(),c.Nb(81,"br"),c.Sb(82,"app-documentacao-template",28),c.Sb(83,"div",11),c.Gc(84," Um efeito de sombra ao passar o mouse pode ser adicionado com a classe "),c.Sb(85,"span",22),c.Gc(86,"card-hover"),c.Rb(),c.Gc(87,". "),c.Rb(),c.Sb(88,"div",13),c.Sb(89,"div",29),c.Sb(90,"div",17),c.Sb(91,"span"),c.Gc(92,"Este card possui efeito de sombra."),c.Rb(),c.Rb(),c.Rb(),c.Sb(93,"pre",19),c.Nb(94,"code",20),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Sb(95,"nav",30),c.Nb(96,"app-code-fixed-nav",31),c.Rb(),c.Rb(),c.Rb(),c.Sb(97,"div",32),c.Sb(98,"app-documentacao-template",33),c.Sb(99,"div",13),c.Sb(100,"div",34),c.Sb(101,"div",17),c.Nb(102,"i",35),c.Sb(103,"h2",36),c.Gc(104,"HOME"),c.Rb(),c.Rb(),c.Rb(),c.Sb(105,"pre",19),c.Nb(106,"code",20),c.Rb(),c.Rb(),c.Rb(),c.Nb(107,"br"),c.Sb(108,"app-documentacao-template",37),c.Sb(109,"div",13),c.Sb(110,"div",38),c.Sb(111,"div",15),c.Sb(112,"h4",39),c.Gc(113,"Dados da proposta"),c.Rb(),c.Sb(114,"a",40),c.Gc(115,"0007.1556.0000112-3"),c.Rb(),c.Rb(),c.Sb(116,"div",41),c.Sb(117,"div",42),c.Sb(118,"div",23),c.Sb(119,"div",43),c.Sb(120,"h6",16),c.Gc(121,"C\xf3digo da Reserva"),c.Rb(),c.Gc(122," 1.797 "),c.Rb(),c.Sb(123,"div",43),c.Sb(124,"h6",16),c.Gc(125,"Fonte de recurso"),c.Rb(),c.Gc(126," SBPE "),c.Rb(),c.Rb(),c.Rb(),c.Sb(127,"div",44),c.Sb(128,"div",23),c.Sb(129,"div",43),c.Sb(130,"h6",16),c.Gc(131,"Tipo de financiamento"),c.Rb(),c.Gc(132," 143 - CCSBPE - AQUISI\xc7\xc3O DE TERRENO E CONSTRU\xc7\xc3O - PF -SHF - POS "),c.Rb(),c.Rb(),c.Rb(),c.Sb(133,"div",45),c.Sb(134,"div",23),c.Sb(135,"div",43),c.Sb(136,"h6",16),c.Gc(137,"Seguradora"),c.Rb(),c.Gc(138," CAIXA SEGUROS "),c.Rb(),c.Sb(139,"div",43),c.Sb(140,"h6",16),c.Gc(141,"Ap\xf3lice"),c.Rb(),c.Gc(142," 61170 - CAIXA SEGUROS - SBPE "),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Sb(143,"div",46),c.Nb(144,"i",47),c.Sb(145,"span"),c.Gc(146,"Mais dados da proposta"),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb()),2&t&&(c.zb(15),c.ic("cardTitle","Cards")("codeViewId","viewCards")("htmlTabId","htmlCodeCards")("htmlCode",e.htmlCodeCards),c.zb(25),c.ic("highlight",e.cardsIntroducao)("languages",c.oc(37,l)),c.zb(2),c.ic("showCodeButton",!1)("cardTitle","Cards tem\xe1ticos")("codeViewId","viewCardsTematicos")("htmlTabId","htmlCodeCardsTematicos")("htmlCode",e.htmlCodeCardsTematicos),c.zb(38),c.ic("highlight",e.cardsTematicos)("languages",c.oc(38,l)),c.zb(2),c.ic("showCodeButton",!1)("cardTitle","Cards com efeito")("codeViewId","viewCardsEfeito")("htmlTabId","htmlCodeCardsEfeito")("htmlCode",e.htmlCodeCardsEfeito),c.zb(12),c.ic("highlight",e.cardsSombra)("languages",c.oc(39,l)),c.zb(2),c.ic("items",e.navItems)("currentSection",e.currentSection),c.zb(2),c.ic("showCodeButton",!1)("cardTitle","Cards customizados")("codeViewId","viewCardMenu")("htmlTabId","htmlCodeCardBotao")("htmlCode",e.htmlCodeCardBotao)("cssTabId","cssCodeCardBotao")("cssCode",e.cssCodeCardBotao),c.zb(8),c.ic("highlight",e.cardHome)("languages",c.oc(40,l)),c.zb(2),c.ic("cardTitle","Layouts complexos")("codeViewId","viewCardLayout")("htmlTabId","htmlCodeCardLayout")("htmlCode",e.htmlCodeCardLayout)("cssTabId","cssCodeCardLayout")("cssCode",e.cssCodeCardLayout))},directives:[d.a,i.a,s.a],styles:[".img-view[_ngcontent-%COMP%]{width:150px;height:100px;display:flex;margin:auto}.cards-menu[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{cursor:pointer;margin-right:2rem;border-width:2px!important;border-top-left-radius:0;border-top-right-radius:10px;border-bottom-left-radius:0;border-bottom-right-radius:0}#cardDadosProposta[_ngcontent-%COMP%]{width:800px}.bg-fade[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.01)}.info-row[_ngcontent-%COMP%]{padding:1.2rem}#cardHome[_ngcontent-%COMP%]{max-width:20rem}"]}),t}()},j1XF:function(t,e,o){"use strict";o.d(e,"a",(function(){return i}));var a=o("fXoL"),c=o("ofXK"),n=function(t){return{active:t}};function d(t,e){if(1&t){var o=a.Tb();a.Sb(0,"a",2),a.ac("click",(function(){a.xc(o);var t=e.$implicit;return a.cc().scrollTo(t.id)})),a.Gc(1),a.Rb()}if(2&t){var c=e.$implicit,d=a.cc();a.ic("ngClass",a.pc(2,n,d.currentSection==c.id)),a.zb(1),a.Ic(" ",c.name," ")}}var i=function(){var t=function(){function t(){_classCallCheck(this,t),this.currentSection="",this.items=[],this.toolbarHeight=64}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"scrollTo",value:function(t){window.scrollBy({top:-this.toolbarHeight}),document.querySelector("#"+t).scrollIntoView({behavior:"smooth"})}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Gb({type:t,selectors:[["app-code-fixed-nav"]],inputs:{currentSection:"currentSection",items:"items"},decls:2,vars:1,consts:[[1,"position-sticky","list-group","list-group-caixa","shadow-caixa","border-0","mx-auto"],["class","list-group-item list-group-item-action","role","button",3,"ngClass","click",4,"ngFor","ngForOf"],["role","button",1,"list-group-item","list-group-item-action",3,"ngClass","click"]],template:function(t,e){1&t&&(a.Sb(0,"div",0),a.Ec(1,d,2,4,"a",1),a.Rb()),2&t&&(a.zb(1),a.ic("ngForOf",e.items))},directives:[c.o,c.n],styles:[".position-sticky[_ngcontent-%COMP%]{top:80px}"],changeDetection:0}),t}()},pRMn:function(t,e,o){"use strict";o.d(e,"a",(function(){return a}));var a=function(){function t(e){_classCallCheck(this,t),this.toastr=e,this.sectionOffset=0,this.currentSection=""}return _createClass(t,[{key:"scrollTo",value:function(t){window.scrollBy({top:-64}),document.querySelector("#"+t).scrollIntoView({behavior:"smooth"})}},{key:"onSectionChange",value:function(t){this.currentSection=t}},{key:"copiarConteudo",value:function(t){var e=document.createElement("textarea");e.style.position="fixed",e.style.left="0",e.style.top="0",e.style.opacity="0",e.value=t,document.body.appendChild(e),e.focus(),e.select(),document.execCommand("copy"),document.body.removeChild(e),this.toastr.info("Conte\xfado copiado!")}},{key:"setSectionOffset",value:function(){if(!this.sectionOffset&&this.scrollElement.nativeElement.getBoundingClientRect()){var t=this.scrollElement.nativeElement.getBoundingClientRect(),e=-(window.scrollY?window.scrollY:window.pageYOffset);this.sectionOffset=t.top-e}}},{key:"onScroll",value:function(t){var e,o=this;if(this.setSectionOffset(),this.scrollElement&&this.scrollElement.nativeElement){var a=this.scrollElement.nativeElement.children,c=t.target.scrollingElement.scrollTop;if(a&&c){for(var n=function(t){var n=a[t];o.spiedTags.some((function(t){return t===n.tagName}))&&n.offsetTop-o.sectionOffset<=c&&(e=n.id,console.log(e))},d=0;d<a.length;d++)n(d);e!==this.currentSection&&(this.currentSection=e)}}}}]),t}()},r5ma:function(t,e,o){"use strict";o.d(e,"a",(function(){return R}));var a=o("fXoL"),c=o("ofXK"),n=o("5eHb"),d=o("OtPg"),i=function(){return["html"]};function s(t,e){if(1&t){var o=a.Tb();a.Sb(0,"div",8),a.Sb(1,"button",9),a.ac("click",(function(){a.xc(o);var t=a.cc(2);return t.copiarConteudo(t.htmlCode)})),a.Nb(2,"i",10),a.Rb(),a.Sb(3,"pre"),a.Nb(4,"code",11),a.Rb(),a.Rb()}if(2&t){var c=a.cc(2);a.jc("id",c.htmlTabId),a.zb(4),a.ic("highlight",c.htmlCode)("languages",a.oc(3,i))}}var r=function(){return["ts"]};function l(t,e){if(1&t){var o=a.Tb();a.Sb(0,"div",12),a.Sb(1,"button",9),a.ac("click",(function(){a.xc(o);var t=a.cc(2);return t.copiarConteudo(t.tsCode)})),a.Nb(2,"i",10),a.Rb(),a.Sb(3,"pre"),a.Nb(4,"code",11),a.Rb(),a.Rb()}if(2&t){var c=a.cc(2);a.jc("id",c.tsTabId),a.zb(4),a.ic("highlight",c.tsCode)("languages",a.oc(3,r))}}var b=function(){return["css"]};function u(t,e){if(1&t){var o=a.Tb();a.Sb(0,"div",12),a.Sb(1,"button",9),a.ac("click",(function(){a.xc(o);var t=a.cc(2);return t.copiarConteudo(t.cssCode)})),a.Nb(2,"i",10),a.Rb(),a.Sb(3,"pre"),a.Nb(4,"code",11),a.Rb(),a.Rb()}if(2&t){var c=a.cc(2);a.jc("id",c.cssTabId),a.zb(4),a.ic("highlight",c.cssCode)("languages",a.oc(3,b))}}var h=function(t){return{disabled:t}};function v(t,e){if(1&t&&(a.Qb(0),a.Sb(1,"ul",1),a.Sb(2,"li",2),a.Sb(3,"a",3),a.Gc(4," HTML "),a.Rb(),a.Rb(),a.Sb(5,"li",2),a.Sb(6,"a",4),a.Gc(7," TS "),a.Rb(),a.Rb(),a.Sb(8,"li",2),a.Sb(9,"a",4),a.Gc(10," CSS "),a.Rb(),a.Rb(),a.Rb(),a.Sb(11,"div",5),a.Ec(12,s,5,4,"div",6),a.Ec(13,l,5,4,"div",7),a.Ec(14,u,5,4,"div",7),a.Rb(),a.Pb()),2&t){var o=a.cc();a.zb(2),a.ic("ngClass",a.pc(15,h,!o.htmlTabId||!o.htmlCode)),a.zb(1),a.kc("id","",o.htmlTabId,"-tab"),a.kc("href","#",o.htmlTabId,"",a.zc),a.ic("ngClass",a.pc(17,h,!o.htmlTabId||!o.htmlCode)),a.zb(2),a.ic("ngClass",a.pc(19,h,!o.tsTabId||!o.tsCode)),a.zb(1),a.kc("id","",o.tsTabId,"-tab"),a.kc("href","#",o.tsTabId,"",a.zc),a.ic("ngClass",a.pc(21,h,!o.tsTabId||!o.tsCode)),a.zb(2),a.ic("ngClass",a.pc(23,h,!o.cssTabId||!o.cssCode)),a.zb(1),a.kc("id","",o.cssTabId,"-tab"),a.kc("href","#",o.cssTabId,"",a.zc),a.ic("ngClass",a.pc(25,h,!o.cssTabId||!o.cssCode)),a.zb(3),a.ic("ngIf",o.htmlTabId&&o.htmlCode),a.zb(1),a.ic("ngIf",o.tsTabId&&o.tsCode),a.zb(1),a.ic("ngIf",o.cssTabId&&o.cssCode)}}var p,m=((p=function(){function t(e){_classCallCheck(this,t),this.toastr=e}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"copiarConteudo",value:function(t){var e=document.createElement("textarea");e.style.position="fixed",e.style.left="0",e.style.top="0",e.style.opacity="0",e.value=t,document.body.appendChild(e),e.focus(),e.select(),document.execCommand("copy"),document.body.removeChild(e),this.toastr.info("Conte\xfado copiado!",null,{positionClass:"toast-bottom-center",progressBar:!1,timeOut:3e3})}}]),t}()).\u0275fac=function(t){return new(t||p)(a.Mb(n.b))},p.\u0275cmp=a.Gb({type:p,selectors:[["cx-code-view"]],inputs:{htmlTabId:"htmlTabId",htmlCode:"htmlCode",tsTabId:"tsTabId",tsCode:"tsCode",cssTabId:"cssTabId",cssCode:"cssCode"},decls:1,vars:1,consts:[[4,"ngIf"],["role","tablist",1,"nav","nav-pills","tab-caixa"],[1,"nav-item","ripple-dark",3,"ngClass"],["data-toggle","tab","role","tab",1,"nav-link","nav-link-caixa","text-uppercase","active","px-4","px-md-5",3,"id","href","ngClass"],["data-toggle","tab","role","tab",1,"nav-link","nav-link-caixa","text-uppercase","px-4","px-md-5",3,"id","href","ngClass"],[1,"tab-content"],["class","tab-pane fade bg-light show active border","role","tabpanel",3,"id",4,"ngIf"],["class","tab-pane fade bg-light border","role","tabpanel",3,"id",4,"ngIf"],["role","tabpanel",1,"tab-pane","fade","bg-light","show","active","border",3,"id"],[1,"btn","btn-caixa","shadow-none","text-contrast-light","float-right","rounded-circle",3,"click"],[1,"fa","fa-copy","fa-lg"],[3,"highlight","languages"],["role","tabpanel",1,"tab-pane","fade","bg-light","border",3,"id"]],template:function(t,e){1&t&&a.Ec(0,v,15,27,"ng-container",0),2&t&&a.ic("ngIf",e.htmlTabId&&e.htmlCode)},directives:[c.p,c.n,d.a],styles:[".hljs[_ngcontent-%COMP%]{background:transparent!important}pre[_ngcontent-%COMP%]{margin-bottom:0;padding:.5rem}"],changeDetection:0}),p);function f(t,e){if(1&t&&(a.Sb(0,"div",10),a.Sb(1,"a",11),a.Nb(2,"i",12),a.Rb(),a.Rb()),2&t){var o=a.cc();a.zb(1),a.kc("href","#",o.codeViewId,"",a.zc)}}var C,g=[[["",8,"descricao"]],[["",8,"conteudo"]]],S=[".descricao",".conteudo"],R=((C=function(){function t(){_classCallCheck(this,t),this.showCodeButton=!0}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||C)},C.\u0275cmp=a.Gb({type:C,selectors:[["app-documentacao-template"]],inputs:{showCodeButton:"showCodeButton",painelId:"painelId",cardTitle:"cardTitle",codeViewId:"codeViewId",htmlTabId:"htmlTabId",htmlCode:"htmlCode",tsTabId:"tsTabId",tsCode:"tsCode",cssTabId:"cssTabId",cssCode:"cssCode",cardId:"cardId"},ngContentSelectors:S,decls:14,vars:11,consts:[[3,"id"],[1,"card","shadow-none",3,"id"],[1,"card-header","d-flex","align-items-center"],[1,"mr-auto"],[1,"header-subtitulo-caixa","mb-0"],["class","ml-auto",4,"ngIf"],[1,"card-body"],[1,"descricao-wrapper"],[1,"collapse",3,"id"],[3,"htmlTabId","htmlCode","tsTabId","tsCode","cssTabId","cssCode"],[1,"ml-auto"],["data-toggle","collapse","title","Visualizar c\xf3digo",1,"btn","btn-flat","rounded-circle","p-2",3,"href"],[1,"fa","fa-lg","fa-code"]],template:function(t,e){1&t&&(a.hc(g),a.Sb(0,"section",0),a.Sb(1,"div",1),a.Sb(2,"div",2),a.Sb(3,"div",3),a.Sb(4,"h5",4),a.Gc(5),a.Rb(),a.Rb(),a.Ec(6,f,3,1,"div",5),a.Rb(),a.Sb(7,"div",6),a.Sb(8,"div",7),a.gc(9),a.Rb(),a.Sb(10,"div",8),a.Nb(11,"cx-code-view",9),a.Nb(12,"br"),a.Rb(),a.gc(13,1),a.Rb(),a.Rb(),a.Rb()),2&t&&(a.jc("id",e.painelId),a.zb(1),a.jc("id",e.cardId),a.zb(4),a.Hc(e.cardTitle),a.zb(1),a.ic("ngIf",e.showCodeButton),a.zb(4),a.jc("id",e.codeViewId),a.zb(1),a.ic("htmlTabId",e.htmlTabId)("htmlCode",e.htmlCode)("tsTabId",e.tsTabId)("tsCode",e.tsCode)("cssTabId",e.cssTabId)("cssCode",e.cssCode))},directives:[c.p,m],styles:[".descricao-wrapper[_ngcontent-%COMP%]:not(:empty){margin-bottom:1rem}.descricao-wrapper[_ngcontent-%COMP%]:empty{display:none}"],changeDetection:0}),C)}}]);