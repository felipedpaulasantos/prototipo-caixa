function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{s3sr:function(t,e,n){"use strict";n.r(e),n.d(e,"PaginasModule",(function(){return V}));var i=n("ofXK"),o=n("tyNb"),a=n("njyG"),c=n("XNiG"),r=n("nYL4"),s=n("9Ex1"),l=n("fXoL"),d=n("3Pt+"),b=n("JqCM"),u=n("5eHb");function f(t,e){if(1&t&&l.Ob(0,"div",6),2&t){var n=l.dc();l.jc("ngClass",n.type)}}var p,h,g,m=function(t){return{checked:t}},v=["*"],T=((p=function(){function t(e,n){_classCallCheck(this,t),this.changeDetector=e,this.ngControl=n,this.type="checkbox",this.checked=new l.n,this.model=void 0,this.onChange=function(){},this.onTouch=function(){},n&&(n.valueAccessor=this)}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.ngControl&&this.ngControl.control.valueChanges.subscribe((function(e){t.writeValue(e)}))}},{key:"isChecked",value:function(){return this.model===this.value}},{key:"toggleValue",value:function(){this.type&&("checkbox"===this.type&&(this.model=this.isChecked()?null:this.value),"radio"===this.type&&(this.model=this.value),this.onChange(this.model),this.emitChecked())}},{key:"emitChecked",value:function(){this.checked.emit({target:this})}},{key:"registerOnChange",value:function(t){this.onChange=t}},{key:"registerOnTouched",value:function(t){this.onTouch=t}},{key:"writeValue",value:function(t){this.model=t,this.changeDetector.detectChanges()}}]),t}()).\u0275fac=function(t){return new(t||p)(l.Nb(l.h),l.Nb(d.i,10))},p.\u0275cmp=l.Hb({type:p,selectors:[["cx-button-control"]],inputs:{value:"value",styles:"styles",type:"type"},outputs:{checked:"checked"},ngContentSelectors:v,decls:7,vars:5,consts:[[1,"button-control-wrapper",3,"ngStyle","ngClass","click"],[1,"row","no-gutters"],[1,"col-5","left-side"],[1,"checkbox-wrapper"],["class","checkmark",3,"ngClass",4,"ngIf"],[1,"col-7","right-side"],[1,"checkmark",3,"ngClass"]],template:function(t,e){1&t&&(l.ic(),l.Tb(0,"div",0),l.bc("click",(function(){return e.toggleValue()})),l.Tb(1,"div",1),l.Tb(2,"div",2),l.Tb(3,"div",3),l.Fc(4,f,1,1,"div",4),l.Sb(),l.Sb(),l.Tb(5,"div",5),l.hc(6),l.Sb(),l.Sb(),l.Sb()),2&t&&(l.jc("ngStyle",e.styles)("ngClass",l.qc(3,m,!e.type||e.model===e.value)),l.zb(4),l.jc("ngIf",e.type))},directives:[i.q,i.n,i.p],styles:['.button-control-wrapper[_ngcontent-%COMP%]{display:inline-block;min-width:100px;padding:.6rem 1rem;background-color:var(--cxAux);color:var(--cxBase);border-radius:.25rem;border:1px solid var(--cxAux)}.button-control-wrapper.checked[_ngcontent-%COMP%]{border-color:var(--cxAccent);background-color:var(--cxAccent)}.button-control-wrapper[_ngcontent-%COMP%]:hover{cursor:pointer}.button-control-wrapper[_ngcontent-%COMP%] > .row[_ngcontent-%COMP%] > .left-side[_ngcontent-%COMP%] > .checkbox-wrapper[_ngcontent-%COMP%]{position:relative;height:100%;display:flex;align-items:center}.button-control-wrapper[_ngcontent-%COMP%] > .row[_ngcontent-%COMP%] > .left-side[_ngcontent-%COMP%] > .checkbox-wrapper[_ngcontent-%COMP%] > .checkmark[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;position:relative;height:16px;width:16px;background-color:var(--cxBase);border:1px solid var(--cxCancel)}.button-control-wrapper[_ngcontent-%COMP%] > .row[_ngcontent-%COMP%] > .left-side[_ngcontent-%COMP%] > .checkbox-wrapper[_ngcontent-%COMP%] > .checkmark.radio[_ngcontent-%COMP%]{border-radius:15px;display:flex;align-items:center;justify-content:center}.button-control-wrapper[_ngcontent-%COMP%] > .row[_ngcontent-%COMP%] > .left-side[_ngcontent-%COMP%] > .checkbox-wrapper[_ngcontent-%COMP%] > .checkmark[_ngcontent-%COMP%]:after{position:absolute;content:"";opacity:0;transition:opacity .2s}.button-control-wrapper[_ngcontent-%COMP%] > .row[_ngcontent-%COMP%] > .left-side[_ngcontent-%COMP%] > .checkbox-wrapper[_ngcontent-%COMP%] > .checkmark.checkbox[_ngcontent-%COMP%]:after{width:5px;height:10px;border-color:var(--cxContrast);border-style:solid;border-width:0 2px 2px 0;transform:rotate(45deg)}.button-control-wrapper[_ngcontent-%COMP%] > .row[_ngcontent-%COMP%] > .left-side[_ngcontent-%COMP%] > .checkbox-wrapper[_ngcontent-%COMP%] > .checkmark.radio[_ngcontent-%COMP%]:after{width:8px;height:8px;border:4px solid var(--cxContrast);border-radius:15px;background-color:var(--cxContrast)}.button-control-wrapper.checked[_ngcontent-%COMP%] > .row[_ngcontent-%COMP%] > .left-side[_ngcontent-%COMP%] > .checkbox-wrapper[_ngcontent-%COMP%] > .checkmark[_ngcontent-%COMP%]:after{opacity:1}'],changeDetection:0}),p),C=n("PZSm"),S=n("wSNa"),x=n("ixlL"),y=n("1sbq"),w=n("IQkg"),k=((g=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"transform",value:function(t){if(t){var e=t.trim().replace(/\D/g,"");e.length<11?e=e.padStart(11,"0"):e.length>11&&(e=e.slice(0,11));var n=e.match(/.{1,3}/g);return"".concat(n[0],".").concat(n[1],".").concat(n[2],"-").concat(n[3])}}}]),t}()).\u0275fac=function(t){return new(t||g)},g.\u0275pipe=l.Mb({name:"cpf",type:g,pure:!0}),g),O=((h=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"transform",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===t)return"0 Bytes";var n=e<0?0:e,i=Math.floor(Math.log(t)/Math.log(1024));return parseFloat((t/Math.pow(1024,i)).toFixed(n))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][i]}}]),t}()).\u0275fac=function(t){return new(t||h)},h.\u0275pipe=l.Mb({name:"bytesize",type:h,pure:!0}),h),P=["cardHome"],_=["cardChave"],I=["cardCDC"],M=["cardVazio"];function N(t,e){1&t&&(l.Tb(0,"div",42),l.Ob(1,"i",43),l.Tb(2,"h5"),l.Hc(3,"Adicione alguma imagem ao lado"),l.Sb(),l.Sb())}function H(t,e){if(1&t){var n=l.Ub();l.Rb(0),l.Tb(1,"div",44),l.bc("click",(function(){l.yc(n);var t=l.dc(2);return t.open(t.previaSrc)})),l.Ob(2,"img",45),l.Sb(),l.Qb()}if(2&t){var i=l.dc(2);l.zb(1),l.jc("title",i.uploadedFile.name),l.zb(1),l.jc("src",i.previaSrc,l.Ac)}}function F(t,e){if(1&t&&(l.Tb(0,"div",46),l.Tb(1,"cx-select"),l.Tb(2,"label"),l.Hc(3,"Tipo do Documento"),l.Sb(),l.Tb(4,"select",47),l.Tb(5,"option"),l.Hc(6,"Documento de Identifica\xe7\xe3o"),l.Sb(),l.Tb(7,"option"),l.Hc(8,"Comprovante de Resid\xeancia"),l.Sb(),l.Tb(9,"option"),l.Hc(10,"Comprovante de Renda"),l.Sb(),l.Sb(),l.Sb(),l.Tb(11,"span",48),l.Tb(12,"span",49),l.Ob(13,"i",50),l.Sb(),l.Hc(14),l.Sb(),l.Tb(15,"span",48),l.Tb(16,"span",49),l.Ob(17,"i",51),l.Sb(),l.Hc(18),l.ec(19,"bytesize"),l.Sb(),l.Tb(20,"span",52),l.Tb(21,"span",49),l.Ob(22,"i",53),l.Sb(),l.Hc(23),l.ec(24,"date"),l.Sb(),l.Sb()),2&t){var n=l.dc(2);l.zb(14),l.Jc(" ",n.uploadedFile.name," "),l.zb(4),l.Jc(" ",l.fc(19,3,n.uploadedFile.size)," "),l.zb(5),l.Jc(" ",l.fc(24,5,n.uploadedFile.lastModified)," ")}}function D(t,e){if(1&t){var n=l.Ub();l.Tb(0,"button",54),l.bc("click",(function(){return l.yc(n),l.dc(2).addDocumento()})),l.Ob(1,"i",55),l.Hc(2," Adicionar Documento "),l.Sb()}}function E(t,e){if(1&t&&(l.Tb(0,"tr"),l.Tb(1,"td"),l.Hc(2),l.Sb(),l.Tb(3,"td"),l.Hc(4),l.Sb(),l.Tb(5,"td"),l.Hc(6),l.ec(7,"currency"),l.Sb(),l.Tb(8,"td"),l.Tb(9,"button",56),l.Ob(10,"i",57),l.Sb(),l.Tb(11,"button",58),l.Ob(12,"i",59),l.Sb(),l.Tb(13,"button",60),l.Ob(14,"i",61),l.Sb(),l.Sb(),l.Sb()),2&t){var n=e.$implicit;l.zb(2),l.Ic(n.numero),l.zb(2),l.Ic(n.situacao),l.zb(2),l.Ic(l.gc(7,3,n.valor,"R$"))}}function z(t,e){if(1&t){var n=l.Ub();l.Rb(0),l.Tb(1,"section",4),l.Tb(2,"div",5),l.Tb(3,"cx-card",6),l.Tb(4,"div",7),l.Tb(5,"h5",8),l.Hc(6,"Informa\xe7\xf5es Pessoais"),l.Sb(),l.Sb(),l.Tb(7,"div",9),l.Tb(8,"div",10),l.Tb(9,"span",11),l.Hc(10,"Nome:"),l.Sb(),l.Hc(11),l.Sb(),l.Tb(12,"div",10),l.Tb(13,"span",11),l.Hc(14,"CPF:"),l.Sb(),l.Hc(15),l.ec(16,"cpf"),l.Sb(),l.Tb(17,"div",10),l.Tb(18,"span",11),l.Hc(19,"Nome da m\xe3e:"),l.Sb(),l.Hc(20),l.Sb(),l.Tb(21,"div",10),l.Tb(22,"span",11),l.Hc(23,"Nascimento:"),l.Sb(),l.Hc(24),l.Sb(),l.Sb(),l.Tb(25,"div",12),l.Tb(26,"button",13),l.Ob(27,"i",14),l.Hc(28," Editar "),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Tb(29,"section",15),l.Tb(30,"h4",8),l.Hc(31," Novo documento "),l.Sb(),l.Tb(32,"div",16),l.Tb(33,"div",17),l.Tb(34,"div",18),l.Tb(35,"div",19,20),l.bc("drop",(function(t){l.yc(n);var e=l.wc(36);return l.dc().drop(t,e)}))("dragover",(function(t){l.yc(n);var e=l.wc(36);return l.dc().dragOver(t,e)}))("dragleave",(function(t){l.yc(n);var e=l.wc(36);return l.dc().dragLeave(t,e)})),l.Tb(37,"div",9),l.Tb(38,"div",21),l.Tb(39,"h5",22),l.Ob(40,"i",23),l.Hc(41," Arraste e solte o arquivo aqui "),l.Sb(),l.Tb(42,"h5",22),l.Hc(43,"ou"),l.Sb(),l.Tb(44,"div",24),l.Tb(45,"input",25,26),l.bc("change",(function(t){return l.yc(n),l.dc().uploadArquivo(t.target.files)})),l.Sb(),l.Tb(47,"button",27),l.bc("click",(function(){return l.yc(n),l.wc(46).click()})),l.Ob(48,"i",28),l.Hc(49," Selecione um arquivo para upload... "),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Tb(50,"div",29),l.Tb(51,"div",30),l.Tb(52,"div",7),l.Tb(53,"h5",8),l.Hc(54,"Pr\xe9via"),l.Sb(),l.Sb(),l.Tb(55,"div",9),l.Ob(56,"cx-spinner",31),l.Tb(57,"div",32),l.Fc(58,N,4,0,"div",33),l.Tb(59,"div",34),l.Fc(60,H,3,2,"ng-container",3),l.Sb(),l.Tb(61,"div",34),l.Fc(62,F,25,7,"div",35),l.Sb(),l.Sb(),l.Sb(),l.Tb(63,"div",36),l.Tb(64,"div",37),l.Fc(65,D,3,0,"button",38),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Tb(66,"section",39),l.Tb(67,"cx-card"),l.Tb(68,"div",7),l.Tb(69,"h5",8),l.Hc(70," Contratos "),l.Sb(),l.Sb(),l.Tb(71,"div",9),l.Tb(72,"cx-datatable"),l.Tb(73,"table",40),l.Tb(74,"thead"),l.Tb(75,"tr"),l.Tb(76,"th"),l.Hc(77,"N\xfamero"),l.Sb(),l.Tb(78,"th"),l.Hc(79,"Situa\xe7\xe3o"),l.Sb(),l.Tb(80,"th"),l.Hc(81,"Valor"),l.Sb(),l.Tb(82,"th"),l.Hc(83,"A\xe7\xf5es"),l.Sb(),l.Sb(),l.Sb(),l.Tb(84,"tbody"),l.Fc(85,E,15,6,"tr",41),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Qb()}if(2&t){var i=l.dc();l.zb(3),l.jc("draggable",!0),l.zb(8),l.Jc(" ",i.cliente.nome," "),l.zb(4),l.Jc(" ",l.fc(16,12,i.cliente.cpf)," "),l.zb(5),l.Jc(" ",i.cliente.nomeMae," "),l.zb(4),l.Jc(" ",i.cliente.dataNascimento," "),l.zb(32),l.jc("fullscreen",!1)("name","spinnerUpload"),l.zb(2),l.jc("ngIf",!i.previaSrc&&!i.uploadedFile),l.zb(2),l.jc("ngIf",i.previaSrc),l.zb(2),l.jc("ngIf",i.uploadedFile),l.zb(3),l.jc("ngIf",i.uploadedFile),l.zb(20),l.jc("ngForOf",i.contratos)}}var j,A,q,L=[{path:"",component:(j=function(){function t(e,n,i,o){_classCallCheck(this,t),this.fb=e,this.spinner=n,this.toastr=i,this.renderer=o,this.cliente=null,this.uploadedFile=null,this.contratos=[],this.passoAtual=0,this.passos=[{title:"Passo 1"},{title:"Passo 2"},{title:"Passo 3"},{title:"Passo 4"},{title:"Passo 5"}],this.abas=[{name:"Passo 1",icon:"fa fa-home"},{name:"Passo 2",icon:"fa fa-home"},{name:"Passo 3",icon:"fa fa-home"},{name:"Passo 4",icon:"fa fa-home"},{name:"Passo 5",icon:"fa fa-home"}],this.timelineItems=[{title:"Item sucesso",state:r.b.SUCCESS,date:new Date},{title:"Item warning",state:"warning",date:new Date,dateFormat:"full"},{title:"Item warning-stop",state:"warning-stop",dateString:"05/12/2020"},{title:"Item erro",state:"error",dateString:"03/12/2020"},{title:"Item info",state:"info",dateString:"06/12/2020"}],this.valor="",this.rotas=[{url:"tal-rota"},{url:"tal-rota"},{url:"tal-rota"},{url:"tal-rota"},{url:"tal-rota"}],this.formCpfNis=this.fb.group({tipoId:[null],cpf:[null],nis:[null]}),this.code1Html='<cx-timeline [items]="timelineItems"></cx-timeline>\n',this.code1Ts='timelineItems: TimelineItem[] = [\n  { title: "Item sucesso", state: TimelineState.SUCCESS, date: new Date()  },\n  { title: "Item warning", state: "warning", date: new Date(), dateFormat: "full" },\n  { title: "Item warning-stop", state: "warning-stop", dateString: "05/12/2020" },\n  { title: "Item erro", state: "error", dateString: "03/12/2020" },\n  { title: "Item info", state: "info", dateString: "06/12/2020" }\n];',this.code2Html='<cx-timeline [items]="timelineItems" [styles]="{ height: \'250px\' }"></cx-timeline>\n',this.code3Html="<cx-timeline [items]=\"timelineItems\" [styles]=\"{ width: 'auto', height: '350px' }\"></cx-timeline>\n",this.code4Html='<div class="card">\n  <div class="card-body">\n    <cx-timeline [items]="timelineItems" [styles]="{ height: \'350px\' }"></cx-timeline>\n  </div>\n</div>',this.code6Html='<cx-timeline [items]="timelineItems" [orientation]="0"></cx-timeline>\n',this.rows=[],this.config=s.d.COMPLETE_SETTINGS,this.configCompleta=s.d.COMPLETE_SETTINGS,this.configCompletaSemBotoes=s.d.COMPLETE_NO_BUTTON_SETTINGS,this.configFilter=s.d.FILTER_SETTINGS,this.configInfo=s.d.PAGINATION_INFO_SETTINGS,this.configSimples=s.d.SIMPLE_SETTINGS,this.dtTrigger=new c.a,this.filterPosition="",this.cols=0}return _createClass(t,[{key:"exibirEvento",value:function(t){console.log(t)}},{key:"ngOnInit",value:function(){this.clientePesquisado(),this.populaContratos(),this.preventDragDropDefault(),this.cols=3;for(var t=0;t<100;t++)this.rows.push("Linha ".concat(t+1));this.rows=[].concat(this.rows)}},{key:"populaContratos",value:function(){for(var t=0;t<10;t++)this.contratos.push({numero:"4200.160.0150".concat(t,"-").concat(t),valor:5e4+1e3*t,situacao:"Pago"})}},{key:"pesquisarCpf",value:function(){var t=this;this.spinner.show("global"),setTimeout((function(){t.spinner.hide("global"),t.toastr.success("Cliente pesquisado com sucesso"),t.clientePesquisado()}),2e3)}},{key:"clientePesquisado",value:function(){this.cliente={nome:"Fulano da Silva",cpf:this.formCpfNis.get("cpf").value||this.formCpfNis.get("nis").value||"111.111.111-11",nis:this.formCpfNis.get("nis").value||"",dataNascimento:"01/01/1920",nomeMae:"Ciclana da Silva"}}},{key:"drop",value:function(t,e){t.preventDefault(),t.dataTransfer&&t.dataTransfer.files&&t.dataTransfer.files[0]&&this.uploadArquivo(t.dataTransfer.files),this.dragLeave(null,e)}},{key:"dragOver",value:function(t,e){this.renderer.addClass(e,"drag-hover")}},{key:"dragLeave",value:function(t,e){this.renderer.removeClass(e,"drag-hover")}},{key:"uploadArquivo",value:function(t){var e=this;this.previaSrc=null,this.uploadedFile=null,this.spinner.show("spinnerUpload");var n=t[0];setTimeout((function(){e.fromFileToBase64(n).then((function(t){e.previaSrc="data:".concat(n.type,";base64,").concat(t),e.uploadedFile=n,e.spinner.hide("spinnerUpload")}))}),2e3)}},{key:"addDocumento",value:function(){this.toastr.success("Documento adicionado com sucesso!","",{positionClass:"toast-top-right"})}},{key:"fromFileToBase64",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return new Promise((function(n,i){var o=new FileReader;o.readAsDataURL(t),o.onload=function(){var t=o.result.toString(),i=t.replace(/^data:(.*,)?/,""),a=e?t:i;a.length%4>0&&(a+="=".repeat(4-i.length%4)),n(a)},o.onerror=function(t){return i(t)}}))}},{key:"open",value:function(t){window.open(t)}},{key:"preventDragDropDefault",value:function(){window.addEventListener("dragover",(function(t){t.preventDefault()}),!1),window.addEventListener("drop",(function(t){t.preventDefault()}),!1)}},{key:"ngAfterViewInit",value:function(){var t=this;console.log("CONFIG",this.config),this.dtTrigger.next(),this.datatableElement.dtInstance.then((function(e){var n=e.context[0].nTable,i=$(n).children("thead")[0],o=$(n).children("tfoot")[0];console.log("TABLE",n),console.log("THEAD",i),console.log("TFOOT",o),t.drawColumnFilters(e,n,i,o)}))}},{key:"updateConfig",value:function(t){console.log("NEW CONFIG",t),this.config=JSON.parse(JSON.stringify(t)),this.updateTable()}},{key:"updateConfigOption",value:function(t,e){switch(t){case"buttons":this.config.buttons=e?s.e:[];break;case"filter":this.config.searching=e;break;case"pagination":this.config.paging=e;break;case"length":this.config.lengthChange=e;break;case"columnFilter":this.config.columnFilter=e}this.updateTable()}},{key:"updateTable",value:function(){var t=this;this.datatableElement.dtOptions=this.config,this.datatableElement.dtInstance.then((function(e){e.destroy(),t.ngAfterViewInit()}))}},{key:"drawColumnFilters",value:function(t,e,n,i){if(this.config.columnFilter){if(!i){for(var o="",a=0;a<t.columns()[0].length;a++)o+="<td></td>";o="<tfoot><tr>".concat(o,"</tr></tfoot>"),$(o).insertAfter(n)}}else t.columns().every((function(){$(this.footer()).remove()}));i&&"top"===this.filterPosition?$(i).addClass("d-table-row-group"):i&&"bottom"===this.filterPosition&&$(i).removeClass("d-table-row-group"),"input"===this.config.columnFilter&&t.columns().every((function(){var t=this;$("<input class='form-control' placeholder='Filtro'>").appendTo($(t.footer()).empty()).on("keyup change",(function(){t.search()!==this.value&&t.search(this.value).draw()}))})),"select"===this.config.columnFilter&&t.columns().every((function(){var t=this,e=$("<select class='form-control'><option value=\"\">Filtro</option></select>").appendTo($(t.footer()).empty()).on("change",(function(){var e=$.fn.dataTable.util.escapeRegex(String($(this).val()));t.search(e?"^"+e+"$":"",!0,!1).draw()}));t.data().unique().sort().each((function(t,n){e.append('<option value="'+t+'">'+t+"</option>")}))}))}},{key:"isCpfNisInvalid",get:function(){return this.formCpfNis.get("cpf").invalid&&this.formCpfNis.get("nis").invalid||this.formCpfNis.get("cpf").valid&&this.formCpfNis.get("nis").valid}}]),t}(),j.\u0275fac=function(t){return new(t||j)(l.Nb(d.c),l.Nb(b.c),l.Nb(u.b),l.Nb(l.D))},j.\u0275cmp=l.Hb({type:j,selectors:[["ng-component"]],viewQuery:function(t,e){var n;1&t&&(l.Nc(P,!0),l.Nc(_,!0),l.Nc(I,!0),l.Nc(M,!0),l.Nc(a.a,!0)),2&t&&(l.vc(n=l.cc())&&(e.cardHome=n.first),l.vc(n=l.cc())&&(e.cardChave=n.first),l.vc(n=l.cc())&&(e.cardCDC=n.first),l.vc(n=l.cc())&&(e.cardVazio=n.first),l.vc(n=l.cc())&&(e.datatableElement=n.first))},decls:7,vars:1,consts:[["type","checkbox",1,"mr-2"],["type","radio"],["id","painelTestesDiversos"],[4,"ngIf"],["id","secaoInformacoesPessoais",1,"row","mt-4"],[1,"col-12","col-xl-4","mb-3","mb-xl-0"],[3,"draggable"],[1,"card-header"],[1,"header-subtitulo-caixa"],[1,"card-body"],[1,"py-2"],[1,"font-weight-bold"],[1,"card-footer","text-right"],[1,"btn","btn-caixa","btn-accent"],[1,"fa","fa-edit"],["id","secaoUploadArquivo",1,"my-5"],[1,"row"],[1,"col-5"],[1,"p-4","bg-cinza","border"],[1,"card","card-upload",3,"drop","dragover","dragleave"],["cardDragDrop",""],[1,"d-flex","h-100","justify-content-center","align-items-center","text-center","flex-column"],[1,"mb-5"],[1,"fa","fa-hand-rock","fa-lg","text-muted","mr-2"],[1,"d-flex","w-100","align-items-center"],["name","arquivo","type","file","accept",".pdf, .tiff, .jpg, .jpeg, .png, .gif",1,"d-none",3,"change"],["inputUploadDocIdentidade",""],["title","Upload de arquivo",1,"btn","btn-outline-accent","btn-caixa","mx-auto","d-flex","align-items-center",3,"click"],[1,"fas","fa-file-upload","fa-2x","mr-2"],[1,"col-7"],[1,"card","h-100","w-100"],[3,"fullscreen","name"],[1,"row","h-100"],["class","col-12 d-flex flex-column align-items-center justify-content-center",4,"ngIf"],[1,"col"],["class","p-3",4,"ngIf"],[1,"card-footer"],[1,"d-flex"],["class","btn btn-caixa btn-success ml-auto",3,"click",4,"ngIf"],["id","secaoTabelaContratos",1,"mt-5"],["datatable","",1,"table","table-caixa"],[4,"ngFor","ngForOf"],[1,"col-12","d-flex","flex-column","align-items-center","justify-content-center"],[1,"fa","fa-file-image","fa-10x","text-cancel","mb-4"],["role","button",1,"d-flex","h-100","w-100","align-items-center","justify-content-center",3,"title","click"],[1,"img-previa",3,"src"],[1,"p-3"],["selectCaixa",""],[1,"d-block","mb-3"],[1,"font-fam-bold"],["title","Nome do arquivo",1,"fa","fa-file-signature","fa-lg","mr-2"],["title","Tamanho do arquivo",1,"fa","fa-weight-hanging","fa-lg","mr-2"],[1,"d-block"],["title","Data da \xfaltima modifica\xe7\xe3o",1,"fa","fa-calendar-day","fa-lg","mr-2"],[1,"btn","btn-caixa","btn-success","ml-auto",3,"click"],[1,"fa","fa-plus","fa-lg","mr-2"],["title","Detalhar",1,"btn","btn-sm","btn-outline-aux","mr-2"],[1,"fa","fa-search"],["title","Excluir",1,"btn","btn-sm","btn-outline-aux","mr-2"],[1,"fa","fa-trash"],["title","Confirmar",1,"btn","btn-sm","btn-outline-aux"],[1,"fa","fa-check"]],template:function(t,e){1&t&&(l.Tb(0,"cx-button-control",0),l.Hc(1," Teste\n"),l.Sb(),l.Tb(2,"cx-button-control",1),l.Hc(3," Teste\n"),l.Sb(),l.Ob(4,"br"),l.Tb(5,"div",2),l.Fc(6,z,86,14,"ng-container",3),l.Sb()),2&t&&(l.zb(6),l.jc("ngIf",e.cliente))},directives:[T,i.p,C.a,S.a,x.a,a.a,i.o,y.a,w.a,d.n,d.u],pipes:[k,O,i.f,i.d],styles:[".card-upload[_ngcontent-%COMP%]{display:flex;height:400px;width:500px;margin:auto;transition:border .2s,opacity .3s;border:2px transparent}.drag-hover[_ngcontent-%COMP%]{opacity:.4;border:2px dashed #d3d3d3}.img-previa[_ngcontent-%COMP%]{display:flex;margin:auto;border:1px solid #d3d3d3;height:100%;max-height:300px;width:100%;max-width:350px;border-radius:5px;transition:all .5s ease}.img-previa[_ngcontent-%COMP%]:hover{filter:brightness(70%);-webkit-filter:brightness(70%)}tfoot[_ngcontent-%COMP%]{display:table-header-group}"]}),j)}],B=((A=function t(){_classCallCheck(this,t)}).\u0275mod=l.Lb({type:A}),A.\u0275inj=l.Kb({factory:function(t){return new(t||A)},imports:[[o.h.forChild(L)],o.h]}),A),J=n("PCNd"),U=n("tmjD"),G=n("0JuT"),R=n("OtPg"),V=((q=function t(){_classCallCheck(this,t)}).\u0275mod=l.Lb({type:q}),q.\u0275inj=l.Kb({factory:function(t){return new(t||q)},imports:[[i.c,B,J.a,a.b,G.a,d.f,d.q,U.b,R.b]]}),q)}}]);