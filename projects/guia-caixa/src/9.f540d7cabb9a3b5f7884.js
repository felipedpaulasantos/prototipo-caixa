(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{h3ID:function(e,o,t){"use strict";t.r(o),t.d(o,"LayoutModule",(function(){return S}));var n=t("Valr"),a=t("QJY3"),c=t("DUip"),i=t("uj/u"),b=t("TYT/"),r=t("wCNd"),l=t("1sbq"),s=t("IQkg");function u(e,o){if(1&e&&(b.Sb(0,"option",18),b.Bc(1),b.dc(2,"titlecase"),b.Rb()),2&e){var t=o.$implicit;b.Db("bg-",t.name," text-",t.textColor," font-fam-bold"),b.jc("value",t.name),b.zb(1),b.Dc(" ",b.ec(2,6,t.name)," ")}}function d(e,o){if(1&e&&(b.Sb(0,"option",18),b.Bc(1),b.dc(2,"titlecase"),b.Rb()),2&e){var t=o.$implicit;b.Db("font-fam-bold bg-",t.name," text-",t.textColor,""),b.jc("value",t.name),b.zb(1),b.Dc(" ",b.ec(2,6,t.name)," ")}}function m(e,o){if(1&e&&(b.Sb(0,"option",18),b.Bc(1),b.dc(2,"titlecase"),b.Rb()),2&e){var t=o.$implicit;b.Db("bg-",t.name," text-",t.textColor," font-fam-bold"),b.jc("value",t.name),b.zb(1),b.Dc(" ",b.ec(2,6,t.name)," ")}}var g=[{path:"",component:function(){function e(e,o){this.styleService=e,this.fb=o,this.logoBranco=i.c,this.logoPadrao=i.d,this.logoCompleto=i.f,this.logoCompletoBranco=i.e,this.temas=[],this.temasGradiente=[],this.formToolbar=this.fb.group({icone:[""],bg:[""],tom:[""]}),this.formSidemenu=this.fb.group({bg:[""],tom:[""]})}return e.prototype.ngOnInit=function(){this.temas=i.a.getTemas(),this.temasGradiente=i.b.getTemas()},e.prototype.onIconChange=function(e){e&&this.styleService.setToolbarIcon(e)},e.prototype.onToolbarBgChange=function(e,o){if(void 0===o&&(o=""),e){var t=this.temas.find((function(o){return o.name===e}))||this.temasGradiente.find((function(o){return o.name===e}));t&&(!o&&this.formToolbar.get("tom").value?o=this.formToolbar.get("tom").value:o&&!e.includes("gradient")||(o=""),this.styleService.setToolbarBg(t.name+o),this.styleService.setToolbarText(t.textColor))}},e.prototype.onSidemenuBgChange=function(e,o){var t=this.temas.find((function(o){return o.name===e}))||{name:"light-light"};!o&&this.formSidemenu.get("tom").value?o=this.formSidemenu.get("tom").value:o||(o=""),this.styleService.setSidemenuBg(t.name+o)},e.prototype.onConteudoPrincipalChange=function(e){this.styleService.setConteudoPrincipalBg(e)},e.\u0275fac=function(o){return new(o||e)(b.Mb(r.a),b.Mb(a.c))},e.\u0275cmp=b.Gb({type:e,selectors:[["app-layout"]],decls:83,vars:21,consts:[[1,"header-principal-caixa"],[1,"header-line-caixa"],[1,"mb-3"],[1,"row"],[1,"col-md-4"],[3,"formGroup"],[1,"card","card-caixa"],[1,"card-header"],[1,"header-subtitulo-caixa"],[1,"card-body"],[3,"showFeedback"],["selectCaixa","","formControlName","bg",3,"change"],["value",""],[3,"class","value",4,"ngFor","ngForOf"],["selectCaixa","","formControlName","tom",3,"change"],["value","-light"],["value","-dark"],["selectCaixa","","formControlName","icone",3,"change"],[3,"value"],["selectCaixa","",3,"change"],["value","",3,"selected"],["value","bg-light",3,"selected"]],template:function(e,o){1&e&&(b.Sb(0,"h1",0),b.Bc(1," Layout\n"),b.Rb(),b.Nb(2,"hr",1),b.Sb(3,"h5",2),b.Bc(4,"Personaliza\xe7\xe3o tem\xe1tica dos principais componentes"),b.Rb(),b.Sb(5,"div",3),b.Sb(6,"div",4),b.Sb(7,"div",5),b.Sb(8,"div",6),b.Sb(9,"div",7),b.Sb(10,"h5",8),b.Bc(11," Toolbar (barra-superior) "),b.Rb(),b.Rb(),b.Sb(12,"div",9),b.Sb(13,"cx-select",10),b.Sb(14,"label"),b.Bc(15,"Cor de fundo"),b.Rb(),b.Sb(16,"select",11),b.ac("change",(function(e){return o.onToolbarBgChange(e.target.value)})),b.Sb(17,"option",12),b.Bc(18,"Escolha um tema"),b.Rb(),b.zc(19,u,3,8,"option",13),b.zc(20,d,3,8,"option",13),b.Rb(),b.Rb(),b.Sb(21,"cx-select",10),b.Sb(22,"label"),b.Bc(23,"Tom"),b.Rb(),b.Sb(24,"select",14),b.ac("change",(function(e){return o.onToolbarBgChange(o.formToolbar.get("bg").value,e.target.value)})),b.Sb(25,"option",12),b.Bc(26,"Padr\xe3o"),b.Rb(),b.Sb(27,"option",15),b.Bc(28,"Claro"),b.Rb(),b.Sb(29,"option",16),b.Bc(30,"Escuro"),b.Rb(),b.Rb(),b.Rb(),b.Sb(31,"cx-select",10),b.Sb(32,"label"),b.Bc(33,"\xcdcone"),b.Rb(),b.Sb(34,"select",17),b.ac("change",(function(e){return o.onIconChange(e.target.value)})),b.Sb(35,"option",18),b.Bc(36,"Logo X branco"),b.Rb(),b.Sb(37,"option",18),b.Bc(38,"Logo completo branco"),b.Rb(),b.Sb(39,"option",18),b.Bc(40,"Logo X azul"),b.Rb(),b.Sb(41,"option",18),b.Bc(42,"Logo completo azul"),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(43,"div",4),b.Sb(44,"div",6),b.Sb(45,"div",7),b.Sb(46,"h5",8),b.Bc(47," Menu Lateral "),b.Rb(),b.Rb(),b.Sb(48,"div",9),b.Sb(49,"div",5),b.Sb(50,"cx-select",10),b.Sb(51,"label"),b.Bc(52,"Cor de fundo"),b.Rb(),b.Sb(53,"select",11),b.ac("change",(function(e){return o.onSidemenuBgChange(e.target.value)})),b.Sb(54,"option",12),b.Bc(55,"Escolha um tema"),b.Rb(),b.zc(56,m,3,8,"option",13),b.Rb(),b.Rb(),b.Sb(57,"cx-select",10),b.Sb(58,"label"),b.Bc(59,"Tom"),b.Rb(),b.Sb(60,"select",14),b.ac("change",(function(e){return o.onSidemenuBgChange(o.formSidemenu.get("bg").value,e.target.value)})),b.Sb(61,"option",12),b.Bc(62,"Padr\xe3o"),b.Rb(),b.Sb(63,"option",15),b.Bc(64,"Claro"),b.Rb(),b.Sb(65,"option",16),b.Bc(66,"Escuro"),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(67,"div",4),b.Sb(68,"div",6),b.Sb(69,"div",7),b.Sb(70,"h5",8),b.Bc(71," Conte\xfado Principal "),b.Rb(),b.Rb(),b.Sb(72,"div",9),b.Sb(73,"cx-select",10),b.Sb(74,"label"),b.Bc(75,"Cor de fundo"),b.Rb(),b.Sb(76,"select",19),b.ac("change",(function(e){return o.onConteudoPrincipalChange(e.target.value)})),b.Sb(77,"option",20),b.dc(78,"async"),b.Bc(79," Branco "),b.Rb(),b.Sb(80,"option",21),b.dc(81,"async"),b.Bc(82," Claro "),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb()),2&e&&(b.zb(7),b.ic("formGroup",o.formToolbar),b.zb(6),b.ic("showFeedback",!1),b.zb(6),b.ic("ngForOf",o.temas),b.zb(1),b.ic("ngForOf",o.temasGradiente),b.zb(1),b.ic("showFeedback",!1),b.zb(10),b.ic("showFeedback",!1),b.zb(4),b.ic("value",o.logoBranco),b.zb(2),b.ic("value",o.logoCompletoBranco),b.zb(2),b.ic("value",o.logoPadrao),b.zb(2),b.ic("value",o.logoCompleto),b.zb(8),b.ic("formGroup",o.formSidemenu),b.zb(1),b.ic("showFeedback",!1),b.zb(6),b.ic("ngForOf",o.temas),b.zb(1),b.ic("showFeedback",!1),b.zb(16),b.ic("showFeedback",!1),b.zb(4),b.ic("selected",""==b.ec(78,17,o.styleService.conteudoPrincipalBg$)),b.zb(3),b.ic("selected","bg-light"==b.ec(81,19,o.styleService.conteudoPrincipalBg$)))},directives:[a.n,a.e,l.a,a.u,s.a,a.m,a.d,a.q,a.w,n.n],pipes:[n.b,n.s],styles:[""]}),e}()}],h=function(){function e(){}return e.\u0275mod=b.Kb({type:e}),e.\u0275inj=b.Jb({factory:function(o){return new(o||e)},imports:[[c.h.forChild(g)],c.h]}),e}(),p=t("PCNd"),f=t("0JuT"),S=function(){function e(){}return e.\u0275mod=b.Kb({type:e}),e.\u0275inj=b.Jb({factory:function(o){return new(o||e)},imports:[[n.c,h,p.a,a.g,a.s,f.a]]}),e}()}}]);