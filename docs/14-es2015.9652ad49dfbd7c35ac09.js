(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{s3sr:function(t,e,i){"use strict";i.r(e),i.d(e,"PaginasModule",(function(){return j}));var n=i("ofXK"),a=i("tyNb"),o=i("njyG"),s=i("XNiG"),c=i("nYL4"),r=i("9Ex1"),l=i("fXoL"),d=i("3Pt+"),b=i("JqCM"),f=i("5eHb"),u=i("PZSm"),p=i("wSNa"),m=i("ixlL"),h=i("1sbq"),g=i("IQkg");let T=(()=>{class t{transform(t){if(!t)return;let e=t.trim().replace(/\D/g,"");e.length<11?e=e.padStart(11,"0"):e.length>11&&(e=e.slice(0,11));const i=e.match(/.{1,3}/g);return`${i[0]}.${i[1]}.${i[2]}-${i[3]}`}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=l.Mb({name:"cpf",type:t,pure:!0}),t})(),S=(()=>{class t{transform(t,e=2){if(0===t)return"0 Bytes";const i=e<0?0:e,n=Math.floor(Math.log(t)/Math.log(1024));return parseFloat((t/Math.pow(1024,n)).toFixed(i))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][n]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=l.Mb({name:"bytesize",type:t,pure:!0}),t})();const v=["cardHome"],w=["cardChave"],x=["cardCDC"],C=["cardVazio"];function I(t,e){1&t&&(l.Tb(0,"div",40),l.Ob(1,"i",41),l.Tb(2,"h5"),l.Hc(3,"Adicione alguma imagem ao lado"),l.Sb(),l.Sb())}function y(t,e){if(1&t){const t=l.Ub();l.Rb(0),l.Tb(1,"div",42),l.bc("click",(function(){l.yc(t);const e=l.dc(2);return e.open(e.previaSrc)})),l.Ob(2,"img",43),l.Sb(),l.Qb()}if(2&t){const t=l.dc(2);l.zb(1),l.jc("title",t.uploadedFile.name),l.zb(1),l.jc("src",t.previaSrc,l.Ac)}}function N(t,e){if(1&t&&(l.Tb(0,"div",44),l.Tb(1,"cx-select"),l.Tb(2,"label"),l.Hc(3,"Tipo do Documento"),l.Sb(),l.Tb(4,"select",45),l.Tb(5,"option"),l.Hc(6,"Documento de Identifica\xe7\xe3o"),l.Sb(),l.Tb(7,"option"),l.Hc(8,"Comprovante de Resid\xeancia"),l.Sb(),l.Tb(9,"option"),l.Hc(10,"Comprovante de Renda"),l.Sb(),l.Sb(),l.Sb(),l.Tb(11,"span",46),l.Tb(12,"span",47),l.Ob(13,"i",48),l.Sb(),l.Hc(14),l.Sb(),l.Tb(15,"span",46),l.Tb(16,"span",47),l.Ob(17,"i",49),l.Sb(),l.Hc(18),l.ec(19,"bytesize"),l.Sb(),l.Tb(20,"span",50),l.Tb(21,"span",47),l.Ob(22,"i",51),l.Sb(),l.Hc(23),l.ec(24,"date"),l.Sb(),l.Sb()),2&t){const t=l.dc(2);l.zb(14),l.Jc(" ",t.uploadedFile.name," "),l.zb(4),l.Jc(" ",l.fc(19,3,t.uploadedFile.size)," "),l.zb(5),l.Jc(" ",l.fc(24,5,t.uploadedFile.lastModified)," ")}}function F(t,e){if(1&t){const t=l.Ub();l.Tb(0,"button",52),l.bc("click",(function(){return l.yc(t),l.dc(2).addDocumento()})),l.Ob(1,"i",53),l.Hc(2," Adicionar Documento "),l.Sb()}}function H(t,e){if(1&t&&(l.Tb(0,"tr"),l.Tb(1,"td"),l.Hc(2),l.Sb(),l.Tb(3,"td"),l.Hc(4),l.Sb(),l.Tb(5,"td"),l.Hc(6),l.ec(7,"currency"),l.Sb(),l.Tb(8,"td"),l.Tb(9,"button",54),l.Ob(10,"i",55),l.Sb(),l.Tb(11,"button",56),l.Ob(12,"i",57),l.Sb(),l.Tb(13,"button",58),l.Ob(14,"i",59),l.Sb(),l.Sb(),l.Sb()),2&t){const t=e.$implicit;l.zb(2),l.Ic(t.numero),l.zb(2),l.Ic(t.situacao),l.zb(2),l.Ic(l.gc(7,3,t.valor,"R$"))}}function O(t,e){if(1&t){const t=l.Ub();l.Rb(0),l.Tb(1,"section",2),l.Tb(2,"div",3),l.Tb(3,"cx-card",4),l.Tb(4,"div",5),l.Tb(5,"h5",6),l.Hc(6,"Informa\xe7\xf5es Pessoais"),l.Sb(),l.Sb(),l.Tb(7,"div",7),l.Tb(8,"div",8),l.Tb(9,"span",9),l.Hc(10,"Nome:"),l.Sb(),l.Hc(11),l.Sb(),l.Tb(12,"div",8),l.Tb(13,"span",9),l.Hc(14,"CPF:"),l.Sb(),l.Hc(15),l.ec(16,"cpf"),l.Sb(),l.Tb(17,"div",8),l.Tb(18,"span",9),l.Hc(19,"Nome da m\xe3e:"),l.Sb(),l.Hc(20),l.Sb(),l.Tb(21,"div",8),l.Tb(22,"span",9),l.Hc(23,"Nascimento:"),l.Sb(),l.Hc(24),l.Sb(),l.Sb(),l.Tb(25,"div",10),l.Tb(26,"button",11),l.Ob(27,"i",12),l.Hc(28," Editar "),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Tb(29,"section",13),l.Tb(30,"h4",6),l.Hc(31," Novo documento "),l.Sb(),l.Tb(32,"div",14),l.Tb(33,"div",15),l.Tb(34,"div",16),l.Tb(35,"div",17,18),l.bc("drop",(function(e){l.yc(t);const i=l.wc(36);return l.dc().drop(e,i)}))("dragover",(function(e){l.yc(t);const i=l.wc(36);return l.dc().dragOver(e,i)}))("dragleave",(function(e){l.yc(t);const i=l.wc(36);return l.dc().dragLeave(e,i)})),l.Tb(37,"div",7),l.Tb(38,"div",19),l.Tb(39,"h5",20),l.Ob(40,"i",21),l.Hc(41," Arraste e solte o arquivo aqui "),l.Sb(),l.Tb(42,"h5",20),l.Hc(43,"ou"),l.Sb(),l.Tb(44,"div",22),l.Tb(45,"input",23,24),l.bc("change",(function(e){return l.yc(t),l.dc().uploadArquivo(e.target.files)})),l.Sb(),l.Tb(47,"button",25),l.bc("click",(function(){return l.yc(t),l.wc(46).click()})),l.Ob(48,"i",26),l.Hc(49," Selecione um arquivo para upload... "),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Tb(50,"div",27),l.Tb(51,"div",28),l.Tb(52,"div",5),l.Tb(53,"h5",6),l.Hc(54,"Pr\xe9via"),l.Sb(),l.Sb(),l.Tb(55,"div",7),l.Ob(56,"cx-spinner",29),l.Tb(57,"div",30),l.Fc(58,I,4,0,"div",31),l.Tb(59,"div",32),l.Fc(60,y,3,2,"ng-container",1),l.Sb(),l.Tb(61,"div",32),l.Fc(62,N,25,7,"div",33),l.Sb(),l.Sb(),l.Sb(),l.Tb(63,"div",34),l.Tb(64,"div",35),l.Fc(65,F,3,0,"button",36),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Tb(66,"section",37),l.Tb(67,"cx-card"),l.Tb(68,"div",5),l.Tb(69,"h5",6),l.Hc(70," Contratos "),l.Sb(),l.Sb(),l.Tb(71,"div",7),l.Tb(72,"cx-datatable"),l.Tb(73,"table",38),l.Tb(74,"thead"),l.Tb(75,"tr"),l.Tb(76,"th"),l.Hc(77,"N\xfamero"),l.Sb(),l.Tb(78,"th"),l.Hc(79,"Situa\xe7\xe3o"),l.Sb(),l.Tb(80,"th"),l.Hc(81,"Valor"),l.Sb(),l.Tb(82,"th"),l.Hc(83,"A\xe7\xf5es"),l.Sb(),l.Sb(),l.Sb(),l.Tb(84,"tbody"),l.Fc(85,H,15,6,"tr",39),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Qb()}if(2&t){const t=l.dc();l.zb(3),l.jc("draggable",!0),l.zb(8),l.Jc(" ",t.cliente.nome," "),l.zb(4),l.Jc(" ",l.fc(16,12,t.cliente.cpf)," "),l.zb(5),l.Jc(" ",t.cliente.nomeMae," "),l.zb(4),l.Jc(" ",t.cliente.dataNascimento," "),l.zb(32),l.jc("fullscreen",!1)("name","spinnerUpload"),l.zb(2),l.jc("ngIf",!t.previaSrc&&!t.uploadedFile),l.zb(2),l.jc("ngIf",t.previaSrc),l.zb(2),l.jc("ngIf",t.uploadedFile),l.zb(3),l.jc("ngIf",t.uploadedFile),l.zb(20),l.jc("ngForOf",t.contratos)}}const P=[{path:"",component:(()=>{class t{constructor(t,e,i,n){this.fb=t,this.spinner=e,this.toastr=i,this.renderer=n,this.cliente=null,this.uploadedFile=null,this.contratos=[],this.passoAtual=0,this.passos=[{title:"Passo 1"},{title:"Passo 2"},{title:"Passo 3"},{title:"Passo 4"},{title:"Passo 5"}],this.abas=[{name:"Passo 1",icon:"fa fa-home"},{name:"Passo 2",icon:"fa fa-home"},{name:"Passo 3",icon:"fa fa-home"},{name:"Passo 4",icon:"fa fa-home"},{name:"Passo 5",icon:"fa fa-home"}],this.timelineItems=[{title:"Item sucesso",state:c.b.SUCCESS,date:new Date},{title:"Item warning",state:"warning",date:new Date,dateFormat:"full"},{title:"Item warning-stop",state:"warning-stop",dateString:"05/12/2020"},{title:"Item erro",state:"error",dateString:"03/12/2020"},{title:"Item info",state:"info",dateString:"06/12/2020"}],this.valor="",this.rotas=[{url:"tal-rota"},{url:"tal-rota"},{url:"tal-rota"},{url:"tal-rota"},{url:"tal-rota"}],this.formCpfNis=this.fb.group({tipoId:[null],cpf:[null],nis:[null]}),this.code1Html='<cx-timeline [items]="timelineItems"></cx-timeline>\n',this.code1Ts='timelineItems: TimelineItem[] = [\n  { title: "Item sucesso", state: TimelineState.SUCCESS, date: new Date()  },\n  { title: "Item warning", state: "warning", date: new Date(), dateFormat: "full" },\n  { title: "Item warning-stop", state: "warning-stop", dateString: "05/12/2020" },\n  { title: "Item erro", state: "error", dateString: "03/12/2020" },\n  { title: "Item info", state: "info", dateString: "06/12/2020" }\n];',this.code2Html='<cx-timeline [items]="timelineItems" [styles]="{ height: \'250px\' }"></cx-timeline>\n',this.code3Html="<cx-timeline [items]=\"timelineItems\" [styles]=\"{ width: 'auto', height: '350px' }\"></cx-timeline>\n",this.code4Html='<div class="card">\n  <div class="card-body">\n    <cx-timeline [items]="timelineItems" [styles]="{ height: \'350px\' }"></cx-timeline>\n  </div>\n</div>',this.code6Html='<cx-timeline [items]="timelineItems" [orientation]="0"></cx-timeline>\n',this.rows=[],this.config=r.d.COMPLETE_SETTINGS,this.configCompleta=r.d.COMPLETE_SETTINGS,this.configCompletaSemBotoes=r.d.COMPLETE_NO_BUTTON_SETTINGS,this.configFilter=r.d.FILTER_SETTINGS,this.configInfo=r.d.PAGINATION_INFO_SETTINGS,this.configSimples=r.d.SIMPLE_SETTINGS,this.dtTrigger=new s.a,this.filterPosition="",this.cols=0}exibirEvento(t){console.log(t)}ngOnInit(){this.clientePesquisado(),this.populaContratos(),this.preventDragDropDefault(),this.cols=3;for(let t=0;t<100;t++)this.rows.push(`Linha ${t+1}`);this.rows=[].concat(this.rows)}populaContratos(){for(let t=0;t<10;t++)this.contratos.push({numero:`4200.160.0150${t}-${t}`,valor:5e4+1e3*t,situacao:"Pago"})}get isCpfNisInvalid(){return this.formCpfNis.get("cpf").invalid&&this.formCpfNis.get("nis").invalid||this.formCpfNis.get("cpf").valid&&this.formCpfNis.get("nis").valid}pesquisarCpf(){this.spinner.show("global"),setTimeout(()=>{this.spinner.hide("global"),this.toastr.success("Cliente pesquisado com sucesso"),this.clientePesquisado()},2e3)}clientePesquisado(){this.cliente={nome:"Fulano da Silva",cpf:this.formCpfNis.get("cpf").value||this.formCpfNis.get("nis").value||"111.111.111-11",nis:this.formCpfNis.get("nis").value||"",dataNascimento:"01/01/1920",nomeMae:"Ciclana da Silva"}}drop(t,e){t.preventDefault(),t.dataTransfer&&t.dataTransfer.files&&t.dataTransfer.files[0]&&this.uploadArquivo(t.dataTransfer.files),this.dragLeave(null,e)}dragOver(t,e){this.renderer.addClass(e,"drag-hover")}dragLeave(t,e){this.renderer.removeClass(e,"drag-hover")}uploadArquivo(t){this.previaSrc=null,this.uploadedFile=null,this.spinner.show("spinnerUpload");const e=t[0];setTimeout(()=>{this.fromFileToBase64(e).then(t=>{this.previaSrc=`data:${e.type};base64,${t}`,this.uploadedFile=e,this.spinner.hide("spinnerUpload")})},2e3)}addDocumento(){this.toastr.success("Documento adicionado com sucesso!","",{positionClass:"toast-top-right"})}fromFileToBase64(t,e=!1){return new Promise((i,n)=>{const a=new FileReader;a.readAsDataURL(t),a.onload=()=>{const t=a.result.toString(),n=t.replace(/^data:(.*,)?/,"");let o=e?t:n;o.length%4>0&&(o+="=".repeat(4-n.length%4)),i(o)},a.onerror=t=>n(t)})}open(t){window.open(t)}preventDragDropDefault(){window.addEventListener("dragover",(function(t){t.preventDefault()}),!1),window.addEventListener("drop",(function(t){t.preventDefault()}),!1)}ngAfterViewInit(){console.log("CONFIG",this.config),this.dtTrigger.next(),this.datatableElement.dtInstance.then(t=>{const e=t.context[0].nTable,i=$(e).children("thead")[0],n=$(e).children("tfoot")[0];console.log("TABLE",e),console.log("THEAD",i),console.log("TFOOT",n),this.drawColumnFilters(t,e,i,n)})}updateConfig(t){console.log("NEW CONFIG",t),this.config=JSON.parse(JSON.stringify(t)),this.updateTable()}updateConfigOption(t,e){switch(t){case"buttons":this.config.buttons=e?r.e:[];break;case"filter":this.config.searching=e;break;case"pagination":this.config.paging=e;break;case"length":this.config.lengthChange=e;break;case"columnFilter":this.config.columnFilter=e}this.updateTable()}updateTable(){this.datatableElement.dtOptions=this.config,this.datatableElement.dtInstance.then(t=>{t.destroy(),this.ngAfterViewInit()})}drawColumnFilters(t,e,i,n){if(this.config.columnFilter){if(!n){let e="";for(let i=0;i<t.columns()[0].length;i++)e+="<td></td>";e=`<tfoot><tr>${e}</tr></tfoot>`,$(e).insertAfter(i)}}else t.columns().every((function(){$(this.footer()).remove()}));n&&"top"===this.filterPosition?$(n).addClass("d-table-row-group"):n&&"bottom"===this.filterPosition&&$(n).removeClass("d-table-row-group"),"input"===this.config.columnFilter&&t.columns().every((function(){const t=this;$("<input class='form-control' placeholder='Filtro'>").appendTo($(t.footer()).empty()).on("keyup change",(function(){t.search()!==this.value&&t.search(this.value).draw()}))})),"select"===this.config.columnFilter&&t.columns().every((function(){const t=this,e=$("<select class='form-control'><option value=\"\">Filtro</option></select>").appendTo($(t.footer()).empty()).on("change",(function(){const e=$.fn.dataTable.util.escapeRegex(String($(this).val()));t.search(e?"^"+e+"$":"",!0,!1).draw()}));t.data().unique().sort().each((function(t,i){e.append('<option value="'+t+'">'+t+"</option>")}))}))}}return t.\u0275fac=function(e){return new(e||t)(l.Nb(d.c),l.Nb(b.c),l.Nb(f.b),l.Nb(l.D))},t.\u0275cmp=l.Hb({type:t,selectors:[["ng-component"]],viewQuery:function(t,e){var i;1&t&&(l.Nc(v,!0),l.Nc(w,!0),l.Nc(x,!0),l.Nc(C,!0),l.Nc(o.a,!0)),2&t&&(l.vc(i=l.cc())&&(e.cardHome=i.first),l.vc(i=l.cc())&&(e.cardChave=i.first),l.vc(i=l.cc())&&(e.cardCDC=i.first),l.vc(i=l.cc())&&(e.cardVazio=i.first),l.vc(i=l.cc())&&(e.datatableElement=i.first))},decls:2,vars:1,consts:[["id","painelTestesDiversos"],[4,"ngIf"],["id","secaoInformacoesPessoais",1,"row","mt-4"],[1,"col-12","col-xl-4","mb-3","mb-xl-0"],[3,"draggable"],[1,"card-header"],[1,"header-subtitulo-caixa"],[1,"card-body"],[1,"py-2"],[1,"font-weight-bold"],[1,"card-footer","text-right"],[1,"btn","btn-caixa","btn-accent"],[1,"fa","fa-edit"],["id","secaoUploadArquivo",1,"my-5"],[1,"row"],[1,"col-5"],[1,"p-4","bg-cinza","border"],[1,"card","card-upload",3,"drop","dragover","dragleave"],["cardDragDrop",""],[1,"d-flex","h-100","justify-content-center","align-items-center","text-center","flex-column"],[1,"mb-5"],[1,"fa","fa-hand-rock","fa-lg","text-muted","mr-2"],[1,"d-flex","w-100","align-items-center"],["name","arquivo","type","file","accept",".pdf, .tiff, .jpg, .jpeg, .png, .gif",1,"d-none",3,"change"],["inputUploadDocIdentidade",""],["title","Upload de arquivo",1,"btn","btn-outline-accent","btn-caixa","mx-auto","d-flex","align-items-center",3,"click"],[1,"fas","fa-file-upload","fa-2x","mr-2"],[1,"col-7"],[1,"card","h-100","w-100"],[3,"fullscreen","name"],[1,"row","h-100"],["class","col-12 d-flex flex-column align-items-center justify-content-center",4,"ngIf"],[1,"col"],["class","p-3",4,"ngIf"],[1,"card-footer"],[1,"d-flex"],["class","btn btn-caixa btn-success ml-auto",3,"click",4,"ngIf"],["id","secaoTabelaContratos",1,"mt-5"],["datatable","",1,"table","table-caixa"],[4,"ngFor","ngForOf"],[1,"col-12","d-flex","flex-column","align-items-center","justify-content-center"],[1,"fa","fa-file-image","fa-10x","text-cancel","mb-4"],["role","button",1,"d-flex","h-100","w-100","align-items-center","justify-content-center",3,"title","click"],[1,"img-previa",3,"src"],[1,"p-3"],["selectCaixa",""],[1,"d-block","mb-3"],[1,"font-fam-bold"],["title","Nome do arquivo",1,"fa","fa-file-signature","fa-lg","mr-2"],["title","Tamanho do arquivo",1,"fa","fa-weight-hanging","fa-lg","mr-2"],[1,"d-block"],["title","Data da \xfaltima modifica\xe7\xe3o",1,"fa","fa-calendar-day","fa-lg","mr-2"],[1,"btn","btn-caixa","btn-success","ml-auto",3,"click"],[1,"fa","fa-plus","fa-lg","mr-2"],["title","Detalhar",1,"btn","btn-sm","btn-outline-aux","mr-2"],[1,"fa","fa-search"],["title","Excluir",1,"btn","btn-sm","btn-outline-aux","mr-2"],[1,"fa","fa-trash"],["title","Confirmar",1,"btn","btn-sm","btn-outline-aux"],[1,"fa","fa-check"]],template:function(t,e){1&t&&(l.Tb(0,"div",0),l.Fc(1,O,86,14,"ng-container",1),l.Sb()),2&t&&(l.zb(1),l.jc("ngIf",e.cliente))},directives:[n.p,u.a,p.a,m.a,o.a,n.o,h.a,g.a,d.n,d.u],pipes:[T,S,n.f,n.d],styles:[".card-upload[_ngcontent-%COMP%]{display:flex;height:400px;width:500px;margin:auto;transition:border .2s,opacity .3s;border:2px transparent}.drag-hover[_ngcontent-%COMP%]{opacity:.4;border:2px dashed #d3d3d3}.img-previa[_ngcontent-%COMP%]{display:flex;margin:auto;border:1px solid #d3d3d3;height:100%;max-height:300px;width:100%;max-width:350px;border-radius:5px;transition:all .5s ease}.img-previa[_ngcontent-%COMP%]:hover{filter:brightness(70%);-webkit-filter:brightness(70%)}tfoot[_ngcontent-%COMP%]{display:table-header-group}"]}),t})()}];let D=(()=>{class t{}return t.\u0275mod=l.Lb({type:t}),t.\u0275inj=l.Kb({factory:function(e){return new(e||t)},imports:[[a.h.forChild(P)],a.h]}),t})();var E=i("PCNd"),z=i("tmjD"),k=i("0JuT"),M=i("OtPg");let j=(()=>{class t{}return t.\u0275mod=l.Lb({type:t}),t.\u0275inj=l.Kb({factory:function(e){return new(e||t)},imports:[[n.c,D,E.a,o.b,k.a,d.f,d.q,z.b,M.b]]}),t})()}}]);