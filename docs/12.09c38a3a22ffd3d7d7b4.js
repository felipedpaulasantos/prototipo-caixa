(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{s3sr:function(t,e,i){"use strict";i.r(e),i.d(e,"PaginasModule",(function(){return B}));var n=i("Valr"),o=i("DUip"),a=i("njyG"),c=i("K9Ia"),r=i("nYL4"),b=i("bmKk"),s=i("TYT/"),l=i("QJY3"),d=i("XrkE"),u=i("qT8p"),f=i("jPUR"),p=i("PZSm"),m=i("wSNa"),h=i("1sbq"),g=i("IQkg"),T=function(){function t(){}return t.prototype.transform=function(t){if(t){var e=t.trim().replace(/\D/g,"");e.length<11?e=e.padStart(11,"0"):e.length>11&&(e=e.slice(0,11));var i=e.match(/.{1,3}/g);return i[0]+"."+i[1]+"."+i[2]+"-"+i[3]}},t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=s.Mb({name:"cpf",type:t,pure:!0}),t}(),v=function(){function t(){}return t.prototype.transform=function(t,e){if(void 0===e&&(e=2),0===t)return"0 Bytes";var i=e<0?0:e,n=Math.floor(Math.log(t)/Math.log(1024));return parseFloat((t/Math.pow(1024,n)).toFixed(i))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][n]},t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=s.Mb({name:"bytesize",type:t,pure:!0}),t}(),S=["cardHome"],I=["cardChave"],C=["cardCDC"],k=["cardVazio"];function x(t,e){if(1&t&&(s.Tb(0,"tr"),s.Tb(1,"td"),s.Ic(2),s.Sb(),s.Tb(3,"td"),s.Ic(4),s.Sb(),s.Tb(5,"td"),s.Ic(6),s.Sb(),s.Sb()),2&t){var i=e.$implicit;s.zb(2),s.Jc(i),s.zb(2),s.Jc(i),s.zb(2),s.Jc(i)}}function y(t,e){if(1&t){var i=s.Ub();s.Rb(0),s.Tb(1,"div",69),s.bc("click",(function(){s.zc(i);var t=s.dc(2);return t.open(t.previaSrc)})),s.Ob(2,"img",70),s.Sb(),s.Qb()}if(2&t){var n=s.dc(2);s.zb(1),s.kc("title",n.uploadedFile.name),s.zb(1),s.kc("src",n.previaSrc,s.Bc)}}function w(t,e){if(1&t&&(s.Tb(0,"div",71),s.Tb(1,"cx-select"),s.Tb(2,"label"),s.Ic(3,"Tipo do Documento"),s.Sb(),s.Tb(4,"select",72),s.Tb(5,"option"),s.Ic(6,"Documento de Identifica\xe7\xe3o"),s.Sb(),s.Tb(7,"option"),s.Ic(8,"Comprovante de Resid\xeancia"),s.Sb(),s.Tb(9,"option"),s.Ic(10,"Comprovante de Renda"),s.Sb(),s.Sb(),s.Sb(),s.Tb(11,"span",73),s.Tb(12,"span",74),s.Ob(13,"i",75),s.Sb(),s.Ic(14),s.Sb(),s.Tb(15,"span",73),s.Tb(16,"span",74),s.Ob(17,"i",76),s.Sb(),s.Ic(18),s.ec(19,"bytesize"),s.Sb(),s.Tb(20,"span",77),s.Tb(21,"span",74),s.Ob(22,"i",78),s.Sb(),s.Ic(23),s.ec(24,"date"),s.Sb(),s.Sb()),2&t){var i=s.dc(2);s.zb(14),s.Kc(" ",i.uploadedFile.name," "),s.zb(4),s.Kc(" ",s.fc(19,3,i.uploadedFile.size)," "),s.zb(5),s.Kc(" ",s.fc(24,5,i.uploadedFile.lastModified)," ")}}function O(t,e){if(1&t){var i=s.Ub();s.Tb(0,"button",79),s.bc("click",(function(){return s.zc(i),s.dc(2).addDocumento()})),s.Ob(1,"i",80),s.Ic(2," Adicionar Documento "),s.Sb()}}function F(t,e){if(1&t&&(s.Tb(0,"tr"),s.Tb(1,"td"),s.Ic(2),s.Sb(),s.Tb(3,"td"),s.Ic(4),s.Sb(),s.Tb(5,"td"),s.Ic(6),s.ec(7,"currency"),s.Sb(),s.Tb(8,"td"),s.Tb(9,"button",81),s.Ob(10,"i",33),s.Sb(),s.Tb(11,"button",82),s.Ob(12,"i",83),s.Sb(),s.Tb(13,"button",84),s.Ob(14,"i",85),s.Sb(),s.Sb(),s.Sb()),2&t){var i=e.$implicit;s.zb(2),s.Jc(i.numero),s.zb(2),s.Jc(i.situacao),s.zb(2),s.Jc(s.gc(7,3,i.valor,"R$"))}}function P(t,e){if(1&t){var i=s.Ub();s.Rb(0),s.Tb(1,"section",35),s.Tb(2,"div",36),s.Tb(3,"cx-card",37),s.Tb(4,"div",38),s.Tb(5,"h5",39),s.Ic(6,"Informa\xe7\xf5es Pessoais"),s.Sb(),s.Sb(),s.Tb(7,"div",21),s.Tb(8,"div",40),s.Tb(9,"span",41),s.Ic(10,"Nome:"),s.Sb(),s.Ic(11),s.Sb(),s.Tb(12,"div",40),s.Tb(13,"span",41),s.Ic(14,"CPF:"),s.Sb(),s.Ic(15),s.ec(16,"cpf"),s.Sb(),s.Tb(17,"div",40),s.Tb(18,"span",41),s.Ic(19,"Nome da m\xe3e:"),s.Sb(),s.Ic(20),s.Sb(),s.Tb(21,"div",40),s.Tb(22,"span",41),s.Ic(23,"Nascimento:"),s.Sb(),s.Ic(24),s.Sb(),s.Sb(),s.Tb(25,"div",42),s.Tb(26,"button",43),s.Ob(27,"i",44),s.Ic(28," Editar "),s.Sb(),s.Sb(),s.Sb(),s.Sb(),s.Sb(),s.Tb(29,"section",45),s.Tb(30,"h4",39),s.Ic(31," Novo documento "),s.Sb(),s.Tb(32,"div",27),s.Tb(33,"div",46),s.Tb(34,"div",47),s.Tb(35,"div",48,49),s.bc("drop",(function(t){s.zc(i);var e=s.xc(36);return s.dc().drop(t,e)}))("dragover",(function(t){s.zc(i);var e=s.xc(36);return s.dc().dragOver(t,e)}))("dragleave",(function(t){s.zc(i);var e=s.xc(36);return s.dc().dragLeave(t,e)})),s.Tb(37,"div",21),s.Tb(38,"div",50),s.Tb(39,"h5",51),s.Ob(40,"i",52),s.Ic(41," Arraste e solte o arquivo aqui "),s.Sb(),s.Tb(42,"h5",51),s.Ic(43,"ou"),s.Sb(),s.Tb(44,"div",53),s.Tb(45,"input",54,55),s.bc("change",(function(t){return s.zc(i),s.dc().uploadArquivo(t.target.files)})),s.Sb(),s.Tb(47,"button",56),s.bc("click",(function(){return s.zc(i),s.xc(46).click()})),s.Ob(48,"i",57),s.Ic(49," Selecione um arquivo para upload... "),s.Sb(),s.Sb(),s.Sb(),s.Sb(),s.Sb(),s.Sb(),s.Sb(),s.Tb(50,"div",58),s.Tb(51,"div",59),s.Tb(52,"div",38),s.Tb(53,"h5",39),s.Ic(54,"Pr\xe9via"),s.Sb(),s.Sb(),s.Tb(55,"div",21),s.Ob(56,"cx-spinner",60),s.Tb(57,"div",61),s.Tb(58,"div",62),s.Gc(59,y,3,2,"ng-container",34),s.Sb(),s.Tb(60,"div",62),s.Gc(61,w,25,7,"div",63),s.Sb(),s.Sb(),s.Sb(),s.Tb(62,"div",64),s.Tb(63,"div",65),s.Gc(64,O,3,0,"button",66),s.Sb(),s.Sb(),s.Sb(),s.Sb(),s.Sb(),s.Sb(),s.Tb(65,"section",67),s.Tb(66,"cx-card"),s.Tb(67,"div",38),s.Tb(68,"h5",39),s.Ic(69," Contratos "),s.Sb(),s.Sb(),s.Tb(70,"div",21),s.Tb(71,"div",22),s.Tb(72,"table",68),s.Tb(73,"thead"),s.Tb(74,"tr"),s.Tb(75,"th"),s.Ic(76,"N\xfamero"),s.Sb(),s.Tb(77,"th"),s.Ic(78,"Situa\xe7\xe3o"),s.Sb(),s.Tb(79,"th"),s.Ic(80,"Valor"),s.Sb(),s.Tb(81,"th"),s.Ic(82,"A\xe7\xf5es"),s.Sb(),s.Sb(),s.Sb(),s.Tb(83,"tbody"),s.Gc(84,F,15,6,"tr",24),s.Sb(),s.Sb(),s.Sb(),s.Sb(),s.Sb(),s.Sb(),s.Qb()}if(2&t){var n=s.dc();s.zb(3),s.kc("draggable",!0),s.zb(8),s.Kc(" ",n.cliente.nome," "),s.zb(4),s.Kc(" ",s.fc(16,11,n.cliente.cpf)," "),s.zb(5),s.Kc(" ",n.cliente.nomeMae," "),s.zb(4),s.Kc(" ",n.cliente.dataNascimento," "),s.zb(32),s.kc("fullscreen",!1)("name","spinnerUpload"),s.zb(3),s.kc("ngIf",n.previaSrc),s.zb(2),s.kc("ngIf",n.uploadedFile),s.zb(3),s.kc("ngIf",n.uploadedFile),s.zb(20),s.kc("ngForOf",n.contratos)}}var z=[{path:"",component:function(){function t(t,e,i,n){this.fb=t,this.spinner=e,this.toastr=i,this.renderer=n,this.cliente=null,this.uploadedFile=null,this.contratos=[],this.passoAtual=0,this.passos=[{title:"Passo 1"},{title:"Passo 2"},{title:"Passo 3"},{title:"Passo 4"},{title:"Passo 5"}],this.abas=[{name:"Passo 1",icon:"fa fa-home"},{name:"Passo 2",icon:"fa fa-home"},{name:"Passo 3",icon:"fa fa-home"},{name:"Passo 4",icon:"fa fa-home"},{name:"Passo 5",icon:"fa fa-home"}],this.timelineItems=[{title:"Item sucesso",state:r.b.SUCCESS,date:new Date},{title:"Item warning",state:"warning",date:new Date,dateFormat:"full"},{title:"Item warning-stop",state:"warning-stop",dateString:"05/12/2020"},{title:"Item erro",state:"error",dateString:"03/12/2020"},{title:"Item info",state:"info",dateString:"06/12/2020"}],this.valor="",this.rotas=[{url:"tal-rota"},{url:"tal-rota"},{url:"tal-rota"},{url:"tal-rota"},{url:"tal-rota"}],this.formCpfNis=this.fb.group({tipoId:[null],cpf:[null],nis:[null]}),this.code1Html='<cx-timeline [items]="timelineItems"></cx-timeline>\n',this.code1Ts='timelineItems: TimelineItem[] = [\n  { title: "Item sucesso", state: TimelineState.SUCCESS, date: new Date()  },\n  { title: "Item warning", state: "warning", date: new Date(), dateFormat: "full" },\n  { title: "Item warning-stop", state: "warning-stop", dateString: "05/12/2020" },\n  { title: "Item erro", state: "error", dateString: "03/12/2020" },\n  { title: "Item info", state: "info", dateString: "06/12/2020" }\n];',this.code2Html='<cx-timeline [items]="timelineItems" [styles]="{ height: \'250px\' }"></cx-timeline>\n',this.code3Html="<cx-timeline [items]=\"timelineItems\" [styles]=\"{ width: 'auto', height: '350px' }\"></cx-timeline>\n",this.code4Html='<div class="card">\n  <div class="card-body">\n    <cx-timeline [items]="timelineItems" [styles]="{ height: \'350px\' }"></cx-timeline>\n  </div>\n</div>',this.code6Html='<cx-timeline [items]="timelineItems" [orientation]="0"></cx-timeline>\n',this.rows=[],this.config=b.a.CONFIG_COMPLETA,this.configCompleta=b.a.CONFIG_COMPLETA,this.configCompletaSemBotoes=b.a.CONFIG_COMPLETA_SEM_BOTOES,this.configFilter=b.a.CONFIG_FILTRO,this.configInfo=b.a.CONFIG_INFO_PAGINACAO,this.configSimples=b.a.CONFIG_SIMPLES,this.dtTrigger=new c.a,this.filterPosition="",this.cols=0}return t.prototype.exibirEvento=function(t){console.log(t)},t.prototype.ngOnInit=function(){this.clientePesquisado(),this.populaContratos(),this.preventDragDropDefault(),this.cols=3;for(var t=0;t<100;t++)this.rows.push("Linha "+(t+1));this.rows=[].concat(this.rows)},t.prototype.populaContratos=function(){for(var t=0;t<10;t++)this.contratos.push({numero:"4200.160.0150"+t+"-"+t,valor:5e4+1e3*t,situacao:"Pago"})},Object.defineProperty(t.prototype,"isCpfNisInvalid",{get:function(){return this.formCpfNis.get("cpf").invalid&&this.formCpfNis.get("nis").invalid||this.formCpfNis.get("cpf").valid&&this.formCpfNis.get("nis").valid},enumerable:!0,configurable:!0}),t.prototype.pesquisarCpf=function(){var t=this;this.spinner.show("global"),setTimeout((function(){t.spinner.hide("global"),t.toastr.success("Cliente pesquisado com sucesso"),t.clientePesquisado()}),2e3)},t.prototype.clientePesquisado=function(){this.cliente={nome:"Fulano da Silva",cpf:this.formCpfNis.get("cpf").value||this.formCpfNis.get("nis").value||"111.111.111-11",nis:this.formCpfNis.get("nis").value||"",dataNascimento:"01/01/1920",nomeMae:"Ciclana da Silva"}},t.prototype.drop=function(t,e){t.preventDefault(),t.dataTransfer&&t.dataTransfer.files&&t.dataTransfer.files[0]&&this.uploadArquivo(t.dataTransfer.files),this.dragLeave(null,e)},t.prototype.dragOver=function(t,e){this.renderer.addClass(e,"drag-hover")},t.prototype.dragLeave=function(t,e){this.renderer.removeClass(e,"drag-hover")},t.prototype.uploadArquivo=function(t){var e=this;this.previaSrc=null,this.uploadedFile=null,this.spinner.show("spinnerUpload");var i=t[0];setTimeout((function(){e.fromFileToBase64(i).then((function(t){e.previaSrc="data:"+i.type+";base64,"+t,e.uploadedFile=i,e.spinner.hide("spinnerUpload")}))}),2e3)},t.prototype.addDocumento=function(){this.toastr.success("Documento adicionado com sucesso!")},t.prototype.fromFileToBase64=function(t,e){return void 0===e&&(e=!1),new Promise((function(i,n){var o=new FileReader;o.readAsDataURL(t),o.onload=function(){var t=o.result.toString(),n=t.replace(/^data:(.*,)?/,""),a=e?t:n;a.length%4>0&&(a+="=".repeat(4-n.length%4)),i(a)},o.onerror=function(t){return n(t)}}))},t.prototype.open=function(t){window.open(t)},t.prototype.preventDragDropDefault=function(){window.addEventListener("dragover",(function(t){t.preventDefault()}),!1),window.addEventListener("drop",(function(t){t.preventDefault()}),!1)},t.prototype.ngAfterViewInit=function(){var t=this;console.log("CONFIG",this.config),this.dtTrigger.next(),this.datatableElement.dtInstance.then((function(e){var i=e.context[0].nTable,n=$(i).children("thead")[0],o=$(i).children("tfoot")[0];console.log("TABLE",i),console.log("THEAD",n),console.log("TFOOT",o),t.drawColumnFilters(e,i,n,o)}))},t.prototype.updateConfig=function(t){console.log("NEW CONFIG",t),this.config=JSON.parse(JSON.stringify(t)),this.updateTable()},t.prototype.updateConfigOption=function(t,e){switch(t){case"buttons":this.config.buttons=e?b.b:[];break;case"filter":this.config.searching=e;break;case"pagination":this.config.paging=e;break;case"length":this.config.lengthChange=e;break;case"columnFilter":this.config.columnFilter=e}this.updateTable()},t.prototype.updateTable=function(){var t=this;this.datatableElement.dtOptions=this.config,this.datatableElement.dtInstance.then((function(e){e.destroy(),t.ngAfterViewInit()}))},t.prototype.drawColumnFilters=function(t,e,i,n){if(this.config.columnFilter){if(!n){for(var o="",a=0;a<t.columns()[0].length;a++)o+="<td></td>";o="<tfoot><tr>"+o+"</tr></tfoot>",$(o).insertAfter(i)}}else t.columns().every((function(){$(this.footer()).remove()}));n&&"top"===this.filterPosition?$(n).addClass("d-table-row-group"):n&&"bottom"===this.filterPosition&&$(n).removeClass("d-table-row-group"),"input"===this.config.columnFilter&&t.columns().every((function(){var t=this;$("<input class='form-control' placeholder='Filtro'>").appendTo($(t.footer()).empty()).on("keyup change",(function(){t.search()!==this.value&&t.search(this.value).draw()}))})),"select"===this.config.columnFilter&&t.columns().every((function(){var t=this,e=$("<select class='custom-select'><option value=\"\">Filtro</option></select>").appendTo($(t.footer()).empty()).on("change",(function(){var e=$.fn.dataTable.util.escapeRegex(String($(this).val()));t.search(e?"^"+e+"$":"",!0,!1).draw()}));t.data().unique().sort().each((function(t,i){e.append('<option value="'+t+'">'+t+"</option>")}))}))},t.\u0275fac=function(e){return new(e||t)(s.Nb(l.c),s.Nb(d.c),s.Nb(u.b),s.Nb(s.D))},t.\u0275cmp=s.Hb({type:t,selectors:[["ng-component"]],viewQuery:function(t,e){var i;1&t&&(s.Oc(S,!0),s.Oc(I,!0),s.Oc(C,!0),s.Oc(k,!0),s.Oc(a.a,!0)),2&t&&(s.wc(i=s.cc())&&(e.cardHome=i.first),s.wc(i=s.cc())&&(e.cardChave=i.first),s.wc(i=s.cc())&&(e.cardCDC=i.first),s.wc(i=s.cc())&&(e.cardVazio=i.first),s.wc(i=s.cc())&&(e.datatableElement=i.first))},decls:79,vars:15,consts:[[1,"mb-3"],[1,"btn","btn-secundario","mr-3",3,"click"],[1,"row","mb-3"],[1,"col-3"],[1,"custom-control","custom-checkbox"],["type","checkbox","id","checkBotoes","name","checkBotoes",1,"custom-control-input",3,"disabled","checked","change"],["for","checkBotoes",1,"custom-control-label"],["type","checkbox","id","checkFiltro","name","checkFiltro",1,"custom-control-input",3,"disabled","checked","change"],["for","checkFiltro",1,"custom-control-label"],["type","checkbox","id","checkPaging","name","checkPaging",1,"custom-control-input",3,"disabled","checked","change"],["for","checkPaging",1,"custom-control-label"],["type","checkbox","id","checkLength","name","checkLength",1,"custom-control-input",3,"checked","change"],["for","checkLength",1,"custom-control-label"],[1,"col-3","my-3"],[1,"custom-select",3,"value","change"],["value",""],["value","input"],["value","select"],["value","top"],["value","bottom"],[1,"card","my-3"],[1,"card-body"],[1,"table-responsive"],["datatable","",1,"table",3,"dtTrigger"],[4,"ngFor","ngForOf"],["id","painelTestesDiversos"],[3,"formGroup","submit"],[1,"row"],[1,"col-12","col-md-5","col-lg-4"],["name","cpf","placeholder","Informe o CPF","mask","000.000.000-00","formControlName","cpf",1,"form-control"],["name","nis","placeholder","Informe o NIS","mask","000.000.000-00","formControlName","nis",1,"form-control"],[1,"col","d-flex","align-items-center","mt-2","mt-md-0"],["type","submit",1,"btn","btn-caixa","btn-primario",3,"disabled","title"],[1,"fa","fa-search"],[4,"ngIf"],["id","secaoInformacoesPessoais",1,"row","mt-4"],[1,"col-12","col-xl-4","mb-3","mb-xl-0"],[3,"draggable"],[1,"card-header"],[1,"header-subtitulo-caixa"],[1,"py-2"],[1,"font-weight-bold"],[1,"card-footer","text-right"],[1,"btn","btn-caixa","btn-secundario"],[1,"fa","fa-edit"],["id","secaoUploadArquivo",1,"my-5"],[1,"col-5"],[1,"p-4","bg-cinza","border"],[1,"card","card-caixa","card-upload",3,"drop","dragover","dragleave"],["cardDragDrop",""],[1,"d-flex","h-100","justify-content-center","align-items-center","text-center","flex-column"],[1,"mb-5"],[1,"fa","fa-hand-rock","fa-lg","text-muted","mr-2"],[1,"d-flex","w-100","align-items-center"],["name","arquivo","type","file","accept",".pdf, .tiff, .jpg, .jpeg, .png, .gif",1,"d-none",3,"change"],["inputUploadDocIdentidade",""],["title","Upload de arquivo",1,"btn","btn-outline-secundario","btn-caixa","mx-auto","d-flex","align-items-center",3,"click"],[1,"fas","fa-file-upload","fa-2x","mr-2"],[1,"col-7"],[1,"card","card-caixa","h-100","w-100"],[3,"fullscreen","name"],[1,"row","h-100"],[1,"col"],["class","p-3",4,"ngIf"],[1,"card-footer"],[1,"d-flex"],["class","btn btn-caixa btn-sucesso ml-auto",3,"click",4,"ngIf"],["id","secaoTabelaContratos",1,"mt-5"],["datatable","",1,"table","table-caixa"],["role","button",1,"d-flex","h-100","w-100","align-items-center","justify-content-center",3,"title","click"],[1,"img-previa",3,"src"],[1,"p-3"],["selectCaixa",""],[1,"d-block","mb-3"],[1,"font-fam-bold"],["title","Nome do arquivo",1,"fa","fa-file-signature","fa-lg","mr-2"],["title","Tamanho do arquivo",1,"fa","fa-weight-hanging","fa-lg","mr-2"],[1,"d-block"],["title","Data da \xfaltima modifica\xe7\xe3o",1,"fa","fa-calendar-day","fa-lg","mr-2"],[1,"btn","btn-caixa","btn-sucesso","ml-auto",3,"click"],[1,"fa","fa-plus","fa-lg","mr-2"],["title","Detalhar",1,"btn","btn-caixa","btn-sm","btn-outline-secundario","mr-2"],["title","Excluir",1,"btn","btn-caixa","btn-sm","btn-outline-perigo","mr-2"],[1,"fa","fa-trash"],["title","Confirmar",1,"btn","btn-caixa","btn-sm","btn-outline-sucesso"],[1,"fa","fa-check"]],template:function(t,e){1&t&&(s.Tb(0,"div",0),s.Tb(1,"button",1),s.bc("click",(function(){return e.updateConfig(e.configCompleta)})),s.Ic(2," Completa "),s.Sb(),s.Tb(3,"button",1),s.bc("click",(function(){return e.updateConfig(e.configCompletaSemBotoes)})),s.Ic(4," Completa sem bot\xf5es "),s.Sb(),s.Tb(5,"button",1),s.bc("click",(function(){return e.updateConfig(e.configFilter)})),s.Ic(6," Com filtro geral "),s.Sb(),s.Tb(7,"button",1),s.bc("click",(function(){return e.updateConfig(e.configInfo)})),s.Ic(8," Com info e pagina\xe7\xe3o "),s.Sb(),s.Tb(9,"button",1),s.bc("click",(function(){return e.updateConfig(e.configSimples)})),s.Ic(10," Simples "),s.Sb(),s.Sb(),s.Tb(11,"div",2),s.Tb(12,"div",3),s.Tb(13,"div",4),s.Tb(14,"input",5),s.bc("change",(function(t){return e.updateConfigOption("buttons",t.target.checked)})),s.Sb(),s.Tb(15,"label",6),s.Ic(16," Bot\xf5es "),s.Sb(),s.Sb(),s.Sb(),s.Tb(17,"div",3),s.Tb(18,"div",4),s.Tb(19,"input",7),s.bc("change",(function(t){return e.updateConfigOption("filter",t.target.checked)})),s.Sb(),s.Tb(20,"label",8),s.Ic(21," Filtro "),s.Sb(),s.Sb(),s.Sb(),s.Tb(22,"div",3),s.Tb(23,"div",4),s.Tb(24,"input",9),s.bc("change",(function(t){return e.updateConfigOption("pagination",t.target.checked)})),s.Sb(),s.Tb(25,"label",10),s.Ic(26," Pagina\xe7\xe3o "),s.Sb(),s.Sb(),s.Sb(),s.Tb(27,"div",3),s.Tb(28,"div",4),s.Tb(29,"input",11),s.bc("change",(function(t){return e.updateConfigOption("length",t.target.checked)})),s.Sb(),s.Tb(30,"label",12),s.Ic(31," Comprimento "),s.Sb(),s.Sb(),s.Sb(),s.Tb(32,"div",13),s.Tb(33,"label"),s.Ic(34,"Filtro por coluna"),s.Sb(),s.Tb(35,"select",14),s.bc("change",(function(t){return e.updateConfigOption("columnFilter",t.target.value)})),s.Tb(36,"option",15),s.Ic(37,"Nenhum"),s.Sb(),s.Tb(38,"option",16),s.Ic(39,"Campo simples"),s.Sb(),s.Tb(40,"option",17),s.Ic(41,"Campo select"),s.Sb(),s.Sb(),s.Sb(),s.Tb(42,"div",13),s.Tb(43,"label"),s.Ic(44,"Posi\xe7\xe3o do filtro"),s.Sb(),s.Tb(45,"select",14),s.bc("change",(function(t){return e.filterPosition=t.target.value,e.updateTable()})),s.Tb(46,"option",18),s.Ic(47,"Topo"),s.Sb(),s.Tb(48,"option",19),s.Ic(49,"Rodap\xe9"),s.Sb(),s.Sb(),s.Sb(),s.Sb(),s.Tb(50,"div",20),s.Tb(51,"div",21),s.Tb(52,"div",22),s.Tb(53,"table",23),s.Tb(54,"thead"),s.Tb(55,"tr"),s.Tb(56,"th"),s.Ic(57,"Coluna 1"),s.Sb(),s.Tb(58,"th"),s.Ic(59,"Coluna 2"),s.Sb(),s.Tb(60,"th"),s.Ic(61,"Coluna 3"),s.Sb(),s.Sb(),s.Sb(),s.Tb(62,"tbody"),s.Gc(63,x,7,3,"tr",24),s.Sb(),s.Sb(),s.Sb(),s.Sb(),s.Sb(),s.Tb(64,"div",25),s.Tb(65,"form",26),s.bc("submit",(function(){return e.pesquisarCpf()})),s.Tb(66,"div",27),s.Tb(67,"div",28),s.Tb(68,"label"),s.Ic(69,"CPF"),s.Sb(),s.Ob(70,"input",29),s.Sb(),s.Tb(71,"div",28),s.Tb(72,"label"),s.Ic(73,"NIS"),s.Sb(),s.Ob(74,"input",30),s.Sb(),s.Tb(75,"div",31),s.Tb(76,"button",32),s.Ob(77,"i",33),s.Sb(),s.Sb(),s.Sb(),s.Sb(),s.Gc(78,P,85,13,"ng-container",34),s.Sb()),2&t&&(s.zb(14),s.kc("disabled",!e.config.buttons)("checked",e.config.buttons&&e.config.buttons.length>0),s.zb(5),s.kc("disabled",!e.config.searching)("checked",e.config.searching),s.zb(5),s.kc("disabled",!e.config.paging)("checked",e.config.paging),s.zb(5),s.kc("checked",e.config.lengthChange),s.zb(6),s.kc("value",e.config.columnFilter),s.zb(10),s.kc("value",e.filterPosition),s.zb(8),s.kc("dtTrigger",e.dtTrigger),s.zb(10),s.kc("ngForOf",e.rows),s.zb(2),s.kc("formGroup",e.formCpfNis),s.zb(11),s.kc("disabled",e.isCpfNisInvalid)("title",e.isCpfNisInvalid?"Preencha um dos campos":"Pesquisar"),s.zb(2),s.kc("ngIf",e.cliente))},directives:[l.n,l.t,a.a,n.o,l.u,l.k,l.e,f.a,l.b,l.j,l.d,n.p,p.a,m.a,h.a,g.a],pipes:[T,v,n.f,n.d],styles:[".card-upload[_ngcontent-%COMP%]{display:flex;height:400px;width:500px;margin:auto;transition:border .2s,opacity .3s;border:2px transparent}.drag-hover[_ngcontent-%COMP%]{opacity:.4;border:2px dashed #d3d3d3}.img-previa[_ngcontent-%COMP%]{display:flex;margin:auto;border:1px solid #d3d3d3;height:100%;max-height:300px;width:100%;max-width:350px;border-radius:5px;transition:all .5s ease}.img-previa[_ngcontent-%COMP%]:hover{filter:brightness(70%);-webkit-filter:brightness(70%)}tfoot[_ngcontent-%COMP%]{display:table-header-group}"]}),t}()}],N=function(){function t(){}return t.\u0275mod=s.Lb({type:t}),t.\u0275inj=s.Kb({factory:function(e){return new(e||t)},imports:[[o.h.forChild(z)],o.h]}),t}(),D=i("PCNd"),E=i("0JuT"),q=i("DUSf"),B=function(){function t(){}return t.\u0275mod=s.Lb({type:t}),t.\u0275inj=s.Kb({factory:function(e){return new(e||t)},imports:[[n.c,N,D.a,a.b,E.a,l.f,l.p,f.b,q.b]]}),t}()}}]);