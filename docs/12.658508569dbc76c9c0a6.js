(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{s3sr:function(t,e,i){"use strict";i.r(e),i.d(e,"PaginasModule",(function(){return L}));var n=i("Valr"),a=i("DUip"),o=i("nYL4"),c=i("TYT/"),r=i("QJY3"),b=i("XrkE"),s=i("qT8p"),l=i("3HFG"),d=i("DUSf"),p=i("jPUR"),u=i("PZSm"),f=i("wSNa"),m=i("njyG"),h=i("1sbq"),v=i("IQkg"),g=function(){function t(){}return t.prototype.transform=function(t){if(t){var e=t.trim().replace(/\D/g,"");e.length<11?e=e.padStart(11,"0"):e.length>11&&(e=e.slice(0,11));var i=e.match(/.{1,3}/g);return i[0]+"."+i[1]+"."+i[2]+"-"+i[3]}},t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=c.Lb({name:"cpf",type:t,pure:!0}),t}(),S=function(){function t(){}return t.prototype.transform=function(t,e){if(void 0===e&&(e=2),0===t)return"0 Bytes";var i=e<0?0:e,n=Math.floor(Math.log(t)/Math.log(1024));return parseFloat((t/Math.pow(1024,n)).toFixed(i))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][n]},t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=c.Lb({name:"bytesize",type:t,pure:!0}),t}(),R=["cardHome"],x=["cardChave"],y=["cardCDC"],N=["cardVazio"];function H(t,e){if(1&t){var i=c.Tb();c.Qb(0),c.Sb(1,"div",54),c.ac("click",(function(){c.yc(i);var t=c.cc(3);return t.open(t.previaSrc)})),c.Nb(2,"img",55),c.Rb(),c.Pb()}if(2&t){var n=c.cc(3);c.zb(1),c.jc("title",n.uploadedFile.name),c.zb(1),c.jc("src",n.previaSrc,c.Ac)}}function w(t,e){if(1&t&&(c.Sb(0,"div",56),c.Sb(1,"cx-select"),c.Sb(2,"label"),c.Hc(3,"Tipo do Documento"),c.Rb(),c.Sb(4,"select",57),c.Sb(5,"option"),c.Hc(6,"Documento de Identifica\xe7\xe3o"),c.Rb(),c.Sb(7,"option"),c.Hc(8,"Comprovante de Resid\xeancia"),c.Rb(),c.Sb(9,"option"),c.Hc(10,"Comprovante de Renda"),c.Rb(),c.Rb(),c.Rb(),c.Sb(11,"span",58),c.Sb(12,"span",59),c.Nb(13,"i",60),c.Rb(),c.Hc(14),c.Rb(),c.Sb(15,"span",58),c.Sb(16,"span",59),c.Nb(17,"i",61),c.Rb(),c.Hc(18),c.dc(19,"bytesize"),c.Rb(),c.Sb(20,"span",62),c.Sb(21,"span",59),c.Nb(22,"i",63),c.Rb(),c.Hc(23),c.dc(24,"date"),c.Rb(),c.Rb()),2&t){var i=c.cc(3);c.zb(14),c.Jc(" ",i.uploadedFile.name," "),c.zb(4),c.Jc(" ",c.ec(19,3,i.uploadedFile.size)," "),c.zb(5),c.Jc(" ",c.ec(24,5,i.uploadedFile.lastModified)," ")}}function I(t,e){if(1&t){var i=c.Tb();c.Sb(0,"button",64),c.ac("click",(function(){return c.yc(i),c.cc(3).addDocumento()})),c.Nb(1,"i",65),c.Hc(2," Adicionar Documento "),c.Rb()}}function C(t,e){if(1&t&&(c.Sb(0,"tr"),c.Sb(1,"td"),c.Hc(2),c.Rb(),c.Sb(3,"td"),c.Hc(4),c.Rb(),c.Sb(5,"td"),c.Hc(6),c.dc(7,"currency"),c.Rb(),c.Sb(8,"td"),c.Sb(9,"button",66),c.Nb(10,"i",16),c.Rb(),c.Sb(11,"button",67),c.Nb(12,"i",68),c.Rb(),c.Sb(13,"button",69),c.Nb(14,"i",70),c.Rb(),c.Rb(),c.Rb()),2&t){var i=e.$implicit;c.zb(2),c.Ic(i.numero),c.zb(2),c.Ic(i.situacao),c.zb(2),c.Ic(c.fc(7,3,i.valor,"R$"))}}function z(t,e){if(1&t){var i=c.Tb();c.Qb(0),c.Sb(1,"section",18),c.Sb(2,"div",19),c.Sb(3,"cx-card",20),c.Sb(4,"div",21),c.Sb(5,"h5",22),c.Hc(6,"Informa\xe7\xf5es Pessoais"),c.Rb(),c.Rb(),c.Sb(7,"div",7),c.Sb(8,"div",23),c.Sb(9,"span",24),c.Hc(10,"Nome:"),c.Rb(),c.Hc(11),c.Rb(),c.Sb(12,"div",23),c.Sb(13,"span",24),c.Hc(14,"CPF:"),c.Rb(),c.Hc(15),c.dc(16,"cpf"),c.Rb(),c.Sb(17,"div",23),c.Sb(18,"span",24),c.Hc(19,"Nome da m\xe3e:"),c.Rb(),c.Hc(20),c.Rb(),c.Sb(21,"div",23),c.Sb(22,"span",24),c.Hc(23,"Nascimento:"),c.Rb(),c.Hc(24),c.Rb(),c.Rb(),c.Sb(25,"div",25),c.Sb(26,"button",26),c.Nb(27,"i",27),c.Hc(28," Editar "),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Sb(29,"section",28),c.Sb(30,"h4",22),c.Hc(31," Novo documento "),c.Rb(),c.Nb(32,"hr",29),c.Sb(33,"div",1),c.Sb(34,"div",30),c.Sb(35,"div",31),c.Sb(36,"div",32,33),c.ac("drop",(function(t){c.yc(i);var e=c.wc(37);return c.cc(2).drop(t,e)}))("dragover",(function(t){c.yc(i);var e=c.wc(37);return c.cc(2).dragOver(t,e)}))("dragleave",(function(t){c.yc(i);var e=c.wc(37);return c.cc(2).dragLeave(t,e)})),c.Sb(38,"div",7),c.Sb(39,"div",34),c.Sb(40,"h5",35),c.Nb(41,"i",36),c.Hc(42," Arraste e solte o arquivo aqui "),c.Rb(),c.Sb(43,"h5",35),c.Hc(44,"ou"),c.Rb(),c.Sb(45,"div",37),c.Sb(46,"input",38,39),c.ac("change",(function(t){return c.yc(i),c.cc(2).uploadArquivo(t.target.files)})),c.Rb(),c.Sb(48,"button",40),c.ac("click",(function(){return c.yc(i),c.wc(47).click()})),c.Nb(49,"i",41),c.Hc(50," Selecione um arquivo para upload... "),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Sb(51,"div",42),c.Sb(52,"div",43),c.Sb(53,"div",21),c.Sb(54,"h5",22),c.Hc(55,"Pr\xe9via"),c.Rb(),c.Rb(),c.Sb(56,"div",7),c.Nb(57,"cx-spinner",44),c.Sb(58,"div",45),c.Sb(59,"div",2),c.Fc(60,H,3,2,"ng-container",17),c.Rb(),c.Sb(61,"div",2),c.Fc(62,w,25,7,"div",46),c.Rb(),c.Rb(),c.Rb(),c.Sb(63,"div",47),c.Sb(64,"div",48),c.Fc(65,I,3,0,"button",49),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Sb(66,"section",50),c.Sb(67,"cx-card"),c.Sb(68,"div",21),c.Sb(69,"h5",22),c.Hc(70," Contratos "),c.Rb(),c.Rb(),c.Sb(71,"div",7),c.Sb(72,"div",51),c.Sb(73,"table",52),c.Sb(74,"thead"),c.Sb(75,"tr"),c.Sb(76,"th"),c.Hc(77,"N\xfamero"),c.Rb(),c.Sb(78,"th"),c.Hc(79,"Situa\xe7\xe3o"),c.Rb(),c.Sb(80,"th"),c.Hc(81,"Valor"),c.Rb(),c.Sb(82,"th"),c.Hc(83,"A\xe7\xf5es"),c.Rb(),c.Rb(),c.Rb(),c.Sb(84,"tbody"),c.Fc(85,C,15,6,"tr",53),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Pb()}if(2&t){var n=c.cc(2);c.zb(3),c.jc("draggable",!0),c.zb(8),c.Jc(" ",n.cliente.nome," "),c.zb(4),c.Jc(" ",c.ec(16,11,n.cliente.cpf)," "),c.zb(5),c.Jc(" ",n.cliente.nomeMae," "),c.zb(4),c.Jc(" ",n.cliente.dataNascimento," "),c.zb(33),c.jc("fullscreen",!1)("name","spinnerUpload"),c.zb(3),c.jc("ngIf",n.previaSrc),c.zb(2),c.jc("ngIf",n.uploadedFile),c.zb(3),c.jc("ngIf",n.uploadedFile),c.zb(20),c.jc("ngForOf",n.contratos)}}function P(t,e){if(1&t){var i=c.Tb();c.Sb(0,"div",9),c.Sb(1,"form",10),c.ac("submit",(function(){return c.yc(i),c.cc().pesquisarCpf()})),c.Sb(2,"div",1),c.Sb(3,"div",11),c.Sb(4,"label"),c.Hc(5,"CPF"),c.Rb(),c.Nb(6,"input",12),c.Rb(),c.Sb(7,"div",11),c.Sb(8,"label"),c.Hc(9,"NIS"),c.Rb(),c.Nb(10,"input",13),c.Rb(),c.Sb(11,"div",14),c.Sb(12,"button",15),c.Nb(13,"i",16),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Fc(14,z,86,13,"ng-container",17),c.Rb()}if(2&t){var n=c.cc();c.zb(1),c.jc("formGroup",n.formCpfNis),c.zb(11),c.jc("disabled",n.isCpfNisInvalid)("title",n.isCpfNisInvalid?"Preencha um dos campos":"Pesquisar"),c.zb(2),c.jc("ngIf",n.cliente)}}var j=function(){return{height:"250px"}},D=function(){return{width:"auto",height:"350px"}},T=function(){return{height:"350px"}},F=[{path:"",component:function(){function t(t,e,i,n){this.fb=t,this.spinner=e,this.toastr=i,this.renderer=n,this.cliente=null,this.uploadedFile=null,this.contratos=[],this.passoAtual=0,this.passos=[{title:"Passo 1"},{title:"Passo 2"},{title:"Passo 3"},{title:"Passo 4"},{title:"Passo 5"}],this.abas=[{name:"Passo 1",icon:"fa fa-home"},{name:"Passo 2",icon:"fa fa-home"},{name:"Passo 3",icon:"fa fa-home"},{name:"Passo 4",icon:"fa fa-home"},{name:"Passo 5",icon:"fa fa-home"}],this.timelineItems=[{title:"Item sucesso",state:o.b.SUCCESS,date:new Date},{title:"Item warning",state:"warning",date:new Date,dateFormat:"full"},{title:"Item warning-stop",state:"warning-stop",dateString:"05/12/2020"},{title:"Item erro",state:"error",dateString:"03/12/2020"},{title:"Item info",state:"info",dateString:"06/12/2020"}],this.valor="",this.rotas=[{url:"tal-rota"},{url:"tal-rota"},{url:"tal-rota"},{url:"tal-rota"},{url:"tal-rota"}],this.formCpfNis=this.fb.group({tipoId:[null],cpf:[null],nis:[null]}),this.code1Html='<cx-timeline [items]="timelineItems"></cx-timeline>\n',this.code1Ts='timelineItems: TimelineItem[] = [\n  { title: "Item sucesso", state: TimelineState.SUCCESS, date: new Date()  },\n  { title: "Item warning", state: "warning", date: new Date(), dateFormat: "full" },\n  { title: "Item warning-stop", state: "warning-stop", dateString: "05/12/2020" },\n  { title: "Item erro", state: "error", dateString: "03/12/2020" },\n  { title: "Item info", state: "info", dateString: "06/12/2020" }\n];',this.code2Html='<cx-timeline [items]="timelineItems" [styles]="{ height: \'250px\' }"></cx-timeline>\n',this.code3Html="<cx-timeline [items]=\"timelineItems\" [styles]=\"{ width: 'auto', height: '350px' }\"></cx-timeline>\n",this.code4Html='<div class="card">\n  <div class="card-body">\n    <cx-timeline [items]="timelineItems" [styles]="{ height: \'350px\' }"></cx-timeline>\n  </div>\n</div>',this.code6Html='<cx-timeline [items]="timelineItems" [orientation]="0"></cx-timeline>\n'}return t.prototype.exibirEvento=function(t){console.log(t)},t.prototype.ngOnInit=function(){this.clientePesquisado(),this.populaContratos(),this.preventDragDropDefault()},t.prototype.populaContratos=function(){for(var t=0;t<10;t++)this.contratos.push({numero:"4200.160.0150"+t+"-"+t,valor:5e4+1e3*t,situacao:"Pago"})},Object.defineProperty(t.prototype,"isCpfNisInvalid",{get:function(){return this.formCpfNis.get("cpf").invalid&&this.formCpfNis.get("nis").invalid||this.formCpfNis.get("cpf").valid&&this.formCpfNis.get("nis").valid},enumerable:!0,configurable:!0}),t.prototype.pesquisarCpf=function(){var t=this;this.spinner.show("global"),setTimeout((function(){t.spinner.hide("global"),t.toastr.success("Cliente pesquisado com sucesso"),t.clientePesquisado()}),2e3)},t.prototype.clientePesquisado=function(){this.cliente={nome:"Fulano da Silva",cpf:this.formCpfNis.get("cpf").value||this.formCpfNis.get("nis").value||"111.111.111-11",nis:this.formCpfNis.get("nis").value||"",dataNascimento:"01/01/1920",nomeMae:"Ciclana da Silva"}},t.prototype.drop=function(t,e){t.preventDefault(),t.dataTransfer&&t.dataTransfer.files&&t.dataTransfer.files[0]&&this.uploadArquivo(t.dataTransfer.files),this.dragLeave(null,e)},t.prototype.dragOver=function(t,e){this.renderer.addClass(e,"drag-hover")},t.prototype.dragLeave=function(t,e){this.renderer.removeClass(e,"drag-hover")},t.prototype.uploadArquivo=function(t){var e=this;this.previaSrc=null,this.uploadedFile=null,this.spinner.show("spinnerUpload");var i=t[0];setTimeout((function(){e.fromFileToBase64(i).then((function(t){e.previaSrc="data:"+i.type+";base64,"+t,e.uploadedFile=i,e.spinner.hide("spinnerUpload")}))}),2e3)},t.prototype.addDocumento=function(){this.toastr.success("Documento adicionado com sucesso!")},t.prototype.fromFileToBase64=function(t,e){return void 0===e&&(e=!1),new Promise((function(i,n){var a=new FileReader;a.readAsDataURL(t),a.onload=function(){var t=a.result.toString(),n=t.replace(/^data:(.*,)?/,""),o=e?t:n;o.length%4>0&&(o+="=".repeat(4-n.length%4)),i(o)},a.onerror=function(t){return n(t)}}))},t.prototype.open=function(t){window.open(t)},t.prototype.preventDragDropDefault=function(){window.addEventListener("dragover",(function(t){t.preventDefault()}),!1),window.addEventListener("drop",(function(t){t.preventDefault()}),!1)},t.\u0275fac=function(e){return new(e||t)(c.Mb(r.b),c.Mb(b.c),c.Mb(s.b),c.Mb(c.D))},t.\u0275cmp=c.Gb({type:t,selectors:[["ng-component"]],viewQuery:function(t,e){var i;1&t&&(c.Nc(R,!0),c.Nc(x,!0),c.Nc(y,!0),c.Nc(N,!0)),2&t&&(c.vc(i=c.bc())&&(e.cardHome=i.first),c.vc(i=c.bc())&&(e.cardChave=i.first),c.vc(i=c.bc())&&(e.cardCDC=i.first),c.vc(i=c.bc())&&(e.cardVazio=i.first))},decls:43,vars:19,consts:[["id","painelTestesDiversos",4,"ngIf"],[1,"row"],[1,"col"],[3,"items"],[3,"highlight"],[3,"items","styles"],[1,"card"],[1,"card-body"],[3,"items","orientation"],["id","painelTestesDiversos"],[3,"formGroup","submit"],[1,"col-12","col-md-5","col-lg-4"],["name","cpf","placeholder","Informe o CPF","mask","000.000.000-00","formControlName","cpf",1,"input-caixa"],["name","nis","placeholder","Informe o NIS","mask","000.000.000-00","formControlName","nis",1,"input-caixa"],[1,"col","d-flex","align-items-center","mt-2","mt-md-0"],["type","submit",1,"btn","btn-caixa","btn-primario",3,"disabled","title"],[1,"fa","fa-search"],[4,"ngIf"],["id","secaoInformacoesPessoais",1,"row","mt-4"],[1,"col-12","col-xl-4","mb-3","mb-xl-0"],[3,"draggable"],[1,"card-header"],[1,"header-subtitulo-caixa"],[1,"py-2"],[1,"font-weight-bold"],[1,"card-footer","text-right"],[1,"btn","btn-caixa","btn-secundario"],[1,"fa","fa-edit"],["id","secaoUploadArquivo",1,"my-5"],[1,"header-line-caixa"],[1,"col-5"],[1,"p-4","bg-cinza","border"],[1,"card","card-caixa","card-upload",3,"drop","dragover","dragleave"],["cardDragDrop",""],[1,"d-flex","h-100","justify-content-center","align-items-center","text-center","flex-column"],[1,"mb-5"],[1,"fa","fa-hand-rock","fa-lg","text-muted","mr-2"],[1,"d-flex","w-100","align-items-center"],["name","arquivo","type","file","accept",".pdf, .tiff, .jpg, .jpeg, .png, .gif",1,"d-none",3,"change"],["inputUploadDocIdentidade",""],["title","Upload de arquivo",1,"btn","btn-outline-secundario","btn-caixa","mx-auto","d-flex","align-items-center",3,"click"],[1,"fas","fa-file-upload","fa-2x","mr-2"],[1,"col-7"],[1,"card","card-caixa","h-100","w-100"],[3,"fullscreen","name"],[1,"row","h-100"],["class","p-3",4,"ngIf"],[1,"card-footer"],[1,"d-flex"],["class","btn btn-caixa btn-success ml-auto",3,"click",4,"ngIf"],["id","secaoTabelaContratos",1,"mt-5"],[1,"table-responsive"],["datatable","",1,"table","table-caixa"],[4,"ngFor","ngForOf"],["role","button",1,"d-flex","h-100","w-100","align-items-center","justify-content-center",3,"title","click"],[1,"img-previa",3,"src"],[1,"p-3"],["selectCaixa",""],[1,"d-block","mb-3"],[1,"font-fam-bold"],["title","Nome do arquivo",1,"fa","fa-file-signature","fa-lg","mr-2"],["title","Tamanho do arquivo",1,"fa","fa-weight-hanging","fa-lg","mr-2"],[1,"d-block"],["title","Data da \xfaltima modifica\xe7\xe3o",1,"fa","fa-calendar-day","fa-lg","mr-2"],[1,"btn","btn-caixa","btn-success","ml-auto",3,"click"],[1,"fa","fa-plus","fa-lg","mr-2"],["title","Detalhar",1,"btn","btn-caixa","btn-sm","btn-outline-secundario","mr-2"],["title","Excluir",1,"btn","btn-caixa","btn-sm","btn-outline-danger","mr-2"],[1,"fa","fa-trash"],["title","Confirmar",1,"btn","btn-caixa","btn-sm","btn-outline-success"],[1,"fa","fa-check"]],template:function(t,e){1&t&&(c.Fc(0,P,15,4,"div",0),c.Sb(1,"div",1),c.Sb(2,"div",2),c.Nb(3,"cx-timeline",3),c.Rb(),c.Sb(4,"div",2),c.Hc(5," HTML "),c.Sb(6,"pre"),c.Nb(7,"code",4),c.Rb(),c.Hc(8," TS "),c.Sb(9,"pre"),c.Nb(10,"code",4),c.Rb(),c.Rb(),c.Rb(),c.Nb(11,"hr"),c.Sb(12,"div",1),c.Sb(13,"div",2),c.Nb(14,"cx-timeline",5),c.Rb(),c.Sb(15,"div",2),c.Hc(16," HTML "),c.Sb(17,"pre"),c.Nb(18,"code",4),c.Rb(),c.Rb(),c.Rb(),c.Nb(19,"hr"),c.Sb(20,"div",1),c.Sb(21,"div",2),c.Nb(22,"cx-timeline",5),c.Rb(),c.Sb(23,"div",2),c.Hc(24," HTML "),c.Sb(25,"pre"),c.Nb(26,"code",4),c.Rb(),c.Rb(),c.Rb(),c.Nb(27,"hr"),c.Sb(28,"div",1),c.Sb(29,"div",2),c.Sb(30,"div",6),c.Sb(31,"div",7),c.Nb(32,"cx-timeline",5),c.Rb(),c.Rb(),c.Rb(),c.Sb(33,"div",2),c.Hc(34," HTML "),c.Sb(35,"pre"),c.Nb(36,"code",4),c.Rb(),c.Rb(),c.Rb(),c.Nb(37,"hr"),c.Nb(38,"cx-timeline",8),c.Nb(39,"br"),c.Hc(40," HTML\n"),c.Sb(41,"pre"),c.Nb(42,"code",4),c.Rb()),2&t&&(c.jc("ngIf",!1),c.zb(3),c.jc("items",e.timelineItems),c.zb(4),c.jc("highlight",e.code1Html),c.zb(3),c.jc("highlight",e.code1Ts),c.zb(4),c.jc("items",e.timelineItems)("styles",c.pc(16,j)),c.zb(4),c.jc("highlight",e.code2Html),c.zb(4),c.jc("items",e.timelineItems)("styles",c.pc(17,D)),c.zb(4),c.jc("highlight",e.code3Html),c.zb(6),c.jc("items",e.timelineItems)("styles",c.pc(18,T)),c.zb(4),c.jc("highlight",e.code4Html),c.zb(2),c.jc("items",e.timelineItems)("orientation",0),c.zb(4),c.jc("highlight",e.code6Html))},directives:[n.p,l.a,d.a,r.t,r.j,r.d,p.a,r.a,r.i,r.c,u.a,f.a,m.a,n.o,h.a,v.a,r.m,r.s],pipes:[g,S,n.f,n.d],styles:[".card-upload[_ngcontent-%COMP%]{display:flex;height:400px;width:500px;margin:auto;transition:border .2s,opacity .3s;border:2px transparent}.drag-hover[_ngcontent-%COMP%]{opacity:.4;border:2px dashed #d3d3d3}.img-previa[_ngcontent-%COMP%]{display:flex;margin:auto;border:1px solid #d3d3d3;height:100%;max-height:300px;width:100%;max-width:350px;border-radius:5px;transition:all .5s ease}.img-previa[_ngcontent-%COMP%]:hover{filter:brightness(70%);-webkit-filter:brightness(70%)}"]}),t}()}],M=function(){function t(){}return t.\u0275mod=c.Kb({type:t}),t.\u0275inj=c.Jb({factory:function(e){return new(e||t)},imports:[[a.h.forChild(F)],a.h]}),t}(),q=i("PCNd"),k=i("0JuT"),L=function(){function t(){}return t.\u0275mod=c.Kb({type:t}),t.\u0275inj=c.Jb({factory:function(e){return new(e||t)},imports:[[n.c,M,q.a,m.b,k.a,r.e,r.o,p.b,d.b]]}),t}()}}]);