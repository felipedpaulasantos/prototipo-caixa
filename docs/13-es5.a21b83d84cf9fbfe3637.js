function _classCallCheck(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,o){for(var t=0;t<o.length;t++){var a=o[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,o,t){return o&&_defineProperties(e.prototype,o),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{h3ID:function(e,o,t){"use strict";t.r(o),t.d(o,"LayoutModule",(function(){return C}));var a=t("ofXK"),n=t("3Pt+"),c=t("tyNb"),i=t("uj/u"),b=t("fXoL"),r=t("d1Es"),l=t("1sbq"),s=t("IQkg");function u(e,o){if(1&e&&(b.Sb(0,"option",17),b.Gc(1),b.dc(2,"titlecase"),b.Rb()),2&e){var t=o.$implicit;b.Db("bg-",t.name," text-",t.textColor," font-fam-bold"),b.jc("value",t.name),b.zb(1),b.Ic(" ",b.ec(2,6,t.name)," ")}}function d(e,o){if(1&e&&(b.Sb(0,"option",17),b.Gc(1),b.dc(2,"titlecase"),b.Rb()),2&e){var t=o.$implicit;b.Db("font-fam-bold bg-",t.name," text-",t.textColor,""),b.jc("value",t.name),b.zb(1),b.Ic(" ",b.ec(2,6,t.name)," ")}}function m(e,o){if(1&e&&(b.Sb(0,"option",17),b.Gc(1),b.dc(2,"titlecase"),b.Rb()),2&e){var t=o.$implicit;b.Db("bg-",t.name," text-",t.textColor," font-fam-bold"),b.jc("value",t.name),b.zb(1),b.Ic(" ",b.ec(2,6,t.name)," ")}}var f,g,h,S=[{path:"",component:(f=function(){function e(o,t){_classCallCheck(this,e),this.styleService=o,this.fb=t,this.logoBranco=i.c,this.logoPadrao=i.d,this.logoCompleto=i.f,this.logoCompletoBranco=i.e,this.temas=[],this.temasGradiente=[],this.formToolbar=this.fb.group({icone:[""],bg:[""],tom:[""]}),this.formSidemenu=this.fb.group({bg:[""],tom:[""]})}return _createClass(e,[{key:"ngOnInit",value:function(){this.temas=i.a.getTemas(),this.temasGradiente=i.b.getTemas()}},{key:"onIconChange",value:function(e){e&&this.styleService.setToolbarIcon(e)}},{key:"onToolbarBgChange",value:function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(e){var t=this.temas.find((function(o){return o.name===e}))||this.temasGradiente.find((function(o){return o.name===e}));t&&(!o&&this.formToolbar.get("tom").value?o=this.formToolbar.get("tom").value:o&&!e.includes("gradient")||(o=""),this.styleService.setToolbarBg(t.name+o),this.styleService.setToolbarText(t.textColor))}}},{key:"onSidemenuBgChange",value:function(e,o){var t=this.temas.find((function(o){return o.name===e}))||{name:"light-light"};!o&&this.formSidemenu.get("tom").value?o=this.formSidemenu.get("tom").value:o||(o=""),this.styleService.setSidemenuBg(t.name+o),this.styleService.setSidemenuText(t.textColor)}},{key:"onConteudoPrincipalChange",value:function(e){this.styleService.setConteudoPrincipalBg(e)}}]),e}(),f.\u0275fac=function(e){return new(e||f)(b.Mb(r.a),b.Mb(n.c))},f.\u0275cmp=b.Gb({type:f,selectors:[["app-layout"]],decls:82,vars:21,consts:[[1,"header-principal-caixa"],[1,"mb-3"],[1,"row"],[1,"col-md-6","col-xl-4","mb-3"],[3,"formGroup"],[1,"card"],[1,"card-header"],[1,"header-subtitulo-caixa"],[1,"card-body"],[3,"showFeedback"],["selectCaixa","","formControlName","bg",3,"change"],["value",""],[3,"class","value",4,"ngFor","ngForOf"],["selectCaixa","","formControlName","tom",3,"change"],["value","-light"],["value","-dark"],["selectCaixa","","formControlName","icone",3,"change"],[3,"value"],["selectCaixa","",3,"change"],["value","",3,"selected"],["value","bg-cinza",3,"selected"]],template:function(e,o){1&e&&(b.Sb(0,"h1",0),b.Gc(1," Layout\n"),b.Rb(),b.Sb(2,"h5",1),b.Gc(3,"Personaliza\xe7\xe3o tem\xe1tica dos principais componentes"),b.Rb(),b.Sb(4,"div",2),b.Sb(5,"div",3),b.Sb(6,"div",4),b.Sb(7,"div",5),b.Sb(8,"div",6),b.Sb(9,"h5",7),b.Gc(10," Toolbar (barra-superior) "),b.Rb(),b.Rb(),b.Sb(11,"div",8),b.Sb(12,"cx-select",9),b.Sb(13,"label"),b.Gc(14,"Cor de fundo"),b.Rb(),b.Sb(15,"select",10),b.ac("change",(function(e){return o.onToolbarBgChange(e.target.value)})),b.Sb(16,"option",11),b.Gc(17,"Escolha um tema"),b.Rb(),b.Ec(18,u,3,8,"option",12),b.Ec(19,d,3,8,"option",12),b.Rb(),b.Rb(),b.Sb(20,"cx-select",9),b.Sb(21,"label"),b.Gc(22,"Tom"),b.Rb(),b.Sb(23,"select",13),b.ac("change",(function(e){return o.onToolbarBgChange(o.formToolbar.get("bg").value,e.target.value)})),b.Sb(24,"option",11),b.Gc(25,"Padr\xe3o"),b.Rb(),b.Sb(26,"option",14),b.Gc(27,"Claro"),b.Rb(),b.Sb(28,"option",15),b.Gc(29,"Escuro"),b.Rb(),b.Rb(),b.Rb(),b.Sb(30,"cx-select",9),b.Sb(31,"label"),b.Gc(32,"\xcdcone"),b.Rb(),b.Sb(33,"select",16),b.ac("change",(function(e){return o.onIconChange(e.target.value)})),b.Sb(34,"option",17),b.Gc(35,"Logo X branco"),b.Rb(),b.Sb(36,"option",17),b.Gc(37,"Logo completo branco"),b.Rb(),b.Sb(38,"option",17),b.Gc(39,"Logo X azul"),b.Rb(),b.Sb(40,"option",17),b.Gc(41,"Logo completo azul"),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(42,"div",3),b.Sb(43,"div",5),b.Sb(44,"div",6),b.Sb(45,"h5",7),b.Gc(46," Menu Lateral "),b.Rb(),b.Rb(),b.Sb(47,"div",8),b.Sb(48,"div",4),b.Sb(49,"cx-select",9),b.Sb(50,"label"),b.Gc(51,"Cor de fundo"),b.Rb(),b.Sb(52,"select",10),b.ac("change",(function(e){return o.onSidemenuBgChange(e.target.value)})),b.Sb(53,"option",11),b.Gc(54,"Escolha um tema"),b.Rb(),b.Ec(55,m,3,8,"option",12),b.Rb(),b.Rb(),b.Sb(56,"cx-select",9),b.Sb(57,"label"),b.Gc(58,"Tom"),b.Rb(),b.Sb(59,"select",13),b.ac("change",(function(e){return o.onSidemenuBgChange(o.formSidemenu.get("bg").value,e.target.value)})),b.Sb(60,"option",11),b.Gc(61,"Padr\xe3o"),b.Rb(),b.Sb(62,"option",14),b.Gc(63,"Claro"),b.Rb(),b.Sb(64,"option",15),b.Gc(65,"Escuro"),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(66,"div",3),b.Sb(67,"div",5),b.Sb(68,"div",6),b.Sb(69,"h5",7),b.Gc(70," Conte\xfado Principal "),b.Rb(),b.Rb(),b.Sb(71,"div",8),b.Sb(72,"cx-select",9),b.Sb(73,"label"),b.Gc(74,"Cor de fundo"),b.Rb(),b.Sb(75,"select",18),b.ac("change",(function(e){return o.onConteudoPrincipalChange(e.target.value)})),b.Sb(76,"option",19),b.dc(77,"async"),b.Gc(78," Branco "),b.Rb(),b.Sb(79,"option",20),b.dc(80,"async"),b.Gc(81," Claro "),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb()),2&e&&(b.zb(6),b.ic("formGroup",o.formToolbar),b.zb(6),b.ic("showFeedback",!1),b.zb(6),b.ic("ngForOf",o.temas),b.zb(1),b.ic("ngForOf",o.temasGradiente),b.zb(1),b.ic("showFeedback",!1),b.zb(10),b.ic("showFeedback",!1),b.zb(4),b.ic("value",o.logoBranco),b.zb(2),b.ic("value",o.logoCompletoBranco),b.zb(2),b.ic("value",o.logoPadrao),b.zb(2),b.ic("value",o.logoCompleto),b.zb(8),b.ic("formGroup",o.formSidemenu),b.zb(1),b.ic("showFeedback",!1),b.zb(6),b.ic("ngForOf",o.temas),b.zb(1),b.ic("showFeedback",!1),b.zb(16),b.ic("showFeedback",!1),b.zb(4),b.ic("selected",""==b.ec(77,17,o.styleService.conteudoPrincipalBg$)),b.zb(3),b.ic("selected","bg-cinza"==b.ec(80,19,o.styleService.conteudoPrincipalBg$)))},directives:[n.k,n.e,l.a,n.r,s.a,n.j,n.d,n.n,n.t,a.o],pipes:[a.b,a.w],styles:[""]}),f)}],p=((g=function e(){_classCallCheck(this,e)}).\u0275mod=b.Kb({type:g}),g.\u0275inj=b.Jb({factory:function(e){return new(e||g)},imports:[[c.h.forChild(S)],c.h]}),g),v=t("PCNd"),R=t("0JuT"),C=((h=function e(){_classCallCheck(this,e)}).\u0275mod=b.Kb({type:h}),h.\u0275inj=b.Jb({factory:function(e){return new(e||h)},imports:[[a.c,p,v.a,n.f,n.p,R.a]]}),h)}}]);