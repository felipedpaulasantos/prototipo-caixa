function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{PZSm:function(e,t,i){"use strict";i.d(t,"a",(function(){return m}));var n=i("fXoL"),r=i("ofXK"),s=["moveButton"];function a(e,t){if(1&e){var i=n.Ub();n.Tb(0,"a",8),n.bc("click",(function(){return n.yc(i),n.dc().reset()})),n.Ob(1,"i",9),n.Sb()}}function l(e,t){if(1&e){var i=n.Ub();n.Tb(0,"a",10),n.bc("click",(function(){return n.yc(i),n.dc().minimizar()})),n.Ob(1,"i",11),n.Sb()}}function o(e,t){if(1&e){var i=n.Ub();n.Tb(0,"a",10),n.bc("click",(function(){return n.yc(i),n.dc().maximizar()})),n.Ob(1,"i",12),n.Sb()}}function c(e,t){1&e&&n.Ob(0,"i",15)}function d(e,t){1&e&&n.Ob(0,"i",16)}function u(e,t){if(1&e){var i=n.Ub();n.Tb(0,"a",10),n.bc("click",(function(){return n.yc(i),n.dc().toggleFullscreen()})),n.Fc(1,c,1,0,"i",13),n.Fc(2,d,1,0,"i",14),n.Sb()}if(2&e){var r=n.dc();n.zb(1),n.jc("ngIf",!r.isFullscreen),n.zb(1),n.jc("ngIf",r.isFullscreen)}}var h=function(e){return{"d-none":e}},f=["*"],m=function(){var e=function(){function e(t,i,r){_classCallCheck(this,e),this.renderer=i,this.vcRef=r,this.close=new n.n,this.draggable=!1,this.wasMoved=!1,this.expandable=!0,this.isFullscreen=!1,this.minimizable=!0,this.isMinimized=!1,this.isClosed=!1,this.cardElement=t.nativeElement}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"ngAfterContentInit",value:function(){this.draggable&&this.dragElement(),this.minimizable&&this.setChildren()}},{key:"setChildren",value:function(){var e=this.cardElement.children;if(e&&e.length)for(var t=0;t<e.length;t++){var i=e[t];if(!i.classList)return;i.classList.contains("card-header")&&(this.cardHeaderElement=i),i.classList.contains("card-body")&&(this.cardBodyElement=i),i.classList.contains("card-footer")&&(this.cardFooterElement=i)}}},{key:"setOriginalPosition",value:function(){this.originalTopPosition=this.cardElement.style.top,this.originalLeftPosition=this.cardElement.style.left}},{key:"setOriginalSize",value:function(){this.originalHeight=this.cardElement.offsetHeight,this.originalWidth=this.cardElement.offsetWidth}},{key:"preventResize",value:function(){var e=this.originalHeight+"px",t=this.originalWidth+"px";this.renderer.setStyle(this.cardElement,"minHeight",e),this.renderer.setStyle(this.cardElement,"height",e),this.renderer.setStyle(this.cardElement,"minWidth",t),this.renderer.setStyle(this.cardElement,"width",t)}},{key:"resetOriginalPosition",value:function(){this.cardElement.style.left=this.originalLeftPosition,this.cardElement.style.top=this.originalTopPosition,this.cardElement.style.position="relative",this.wasMoved=!1}},{key:"resetOriginalSize",value:function(){this.renderer.setStyle(this.cardElement,"minHeight",this.originalMinHeight||null),this.renderer.setStyle(this.cardElement,"maxHeight",this.originalMaxHeight||null),this.renderer.setStyle(this.cardElement,"height",this.originalHeight+"px"),this.renderer.setStyle(this.cardElement,"height",null),this.renderer.setStyle(this.cardElement,"minWidth",this.originalMinWidth||null),this.renderer.setStyle(this.cardElement,"maxWidth",this.originalMaxWidth||null),this.renderer.setStyle(this.cardElement,"width",this.originalWidth+"px"),this.renderer.setStyle(this.cardElement,"width",null)}},{key:"reset",value:function(){this.resetOriginalPosition(),this.resetOriginalSize()}},{key:"moved",value:function(){this.wasMoved=!0,this.preventResize()}},{key:"onMouseUp",value:function(e){}},{key:"setPosition",value:function(e){this.renderer.setStyle(this.cardElement,"position",e)}},{key:"toggleFullscreen",value:function(){var e=this;this.cardElement&&(this.checkFullscreen()?document.exitFullscreen().then((function(){return e.isFullscreen=!1})):this.cardElement.requestFullscreen&&(this.cardElement.requestFullscreen(),this.isFullscreen=!0))}},{key:"checkFullscreen",value:function(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)}},{key:"dragElement",value:function(){this.setOriginalPosition(),this.setOriginalSize();var e=this.cardElement,t=0,i=0,n=0,r=0;function s(e){e.preventDefault(),n=e.clientX,r=e.clientY,document.onmouseup=l,document.onmousemove=a}function a(s){e.style.position="absolute",e.style.minHeight=this.originalHeight,e.style.minWidth=this.originalWidth,s.preventDefault(),t=n-s.clientX,i=r-s.clientY,n=s.clientX,r=s.clientY,e.style.top=e.offsetTop-i+"px",e.style.left=e.offsetLeft-t+"px"}function l(){document.onmouseup=null,document.onmousemove=null}this.moveButton.nativeElement?this.moveButton.nativeElement.onmousedown=s:e.onmousedown=s}},{key:"minimizar",value:function(){this.cardBodyElement&&this.renderer.addClass(this.cardBodyElement,"d-none"),this.cardFooterElement&&this.renderer.addClass(this.cardFooterElement,"d-none"),this.isMinimized=!0}},{key:"maximizar",value:function(){this.cardBodyElement&&this.renderer.removeClass(this.cardBodyElement,"d-none"),this.cardFooterElement&&this.renderer.removeClass(this.cardFooterElement,"d-none"),this.isMinimized=!1}},{key:"destruir",value:function(){this.close.emit(!0),this.isClosed=!0}},{key:"ngOnDestroy",value:function(){}}]),e}();return e.\u0275fac=function(t){return new(t||e)(n.Nb(n.l),n.Nb(n.D),n.Nb(n.N))},e.\u0275cmp=n.Hb({type:e,selectors:[["cx-card"]],viewQuery:function(e,t){var i;1&e&&n.Dc(s,!0),2&e&&n.vc(i=n.cc())&&(t.moveButton=i.first)},hostAttrs:[1,"card"],inputs:{draggable:"draggable",expandable:"expandable",minimizable:"minimizable"},ngContentSelectors:f,decls:11,vars:10,consts:[[1,"card-caixa-botoes"],["title","Resetar posi\xe7\xe3o","class","btn btn-caixa text-contrast-light shadow-none rounded-circle p-2",3,"click",4,"ngIf"],["class","btn btn-caixa text-contrast-light shadow-none rounded-circle p-2",3,"click",4,"ngIf"],["title","Destruir",1,"btn","btn-caixa","text-contrast-light","shadow-none","rounded-circle","p-2",3,"ngClass","click"],[1,"fa","fa-lg","fa-times"],["title","Mover",1,"btn","btn-caixa","text-contrast-light","shadow-none","rounded-circle","p-2",3,"ngClass","mousedown","mouseup"],["moveButton",""],[1,"fa","fa-lg","fa-arrows-alt"],["title","Resetar posi\xe7\xe3o",1,"btn","btn-caixa","text-contrast-light","shadow-none","rounded-circle","p-2",3,"click"],[1,"fa","fa-lg","fa-undo-alt"],[1,"btn","btn-caixa","text-contrast-light","shadow-none","rounded-circle","p-2",3,"click"],["title","Minimizar",1,"fa","fa-lg","fa-caret-down"],["title","Maximizar",1,"fa","fa-lg","fa-caret-up"],["class","fa fa-lg fa-expand","title","Tela Cheia",4,"ngIf"],["class","fa fa-lg fa-compress","title","Sair do modo Tela Cheia",4,"ngIf"],["title","Tela Cheia",1,"fa","fa-lg","fa-expand"],["title","Sair do modo Tela Cheia",1,"fa","fa-lg","fa-compress"]],template:function(e,t){1&e&&(n.ic(),n.Tb(0,"div",0),n.Fc(1,a,2,0,"a",1),n.Fc(2,l,2,0,"a",2),n.Fc(3,o,2,0,"a",2),n.Fc(4,u,3,2,"a",2),n.Tb(5,"a",3),n.bc("click",(function(){return t.destruir()})),n.Ob(6,"i",4),n.Sb(),n.Tb(7,"a",5,6),n.bc("mousedown",(function(){return t.moved()}))("mouseup",(function(e){return t.onMouseUp(e)})),n.Ob(9,"i",7),n.Sb(),n.Sb(),n.hc(10)),2&e&&(n.zb(1),n.jc("ngIf",t.draggable&&t.wasMoved),n.zb(1),n.jc("ngIf",t.cardHeaderElement&&!t.isMinimized),n.zb(1),n.jc("ngIf",t.cardHeaderElement&&t.isMinimized),n.zb(1),n.jc("ngIf",t.expandable),n.zb(1),n.jc("ngClass",n.qc(6,h,!t.draggable||t.isFullscreen)),n.zb(2),n.jc("ngClass",n.qc(8,h,!t.draggable||t.isFullscreen)))},directives:[r.p,r.n],styles:[".card-caixa-botoes[_ngcontent-%COMP%]{position:absolute;width:100%;text-align:right;opacity:0;transition:.2s;right:.2rem}.card-caixa-botoes[_ngcontent-%COMP%]:hover{opacity:1}.card.card-caixa[_nghost-%COMP%], .card.card-caixa   [_nghost-%COMP%]{z-index:1}"]}),e}()},nYL4:function(e,t,i){"use strict";i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return r}));var n=function(e){return e[e.HORIZONTAL=0]="HORIZONTAL",e[e.VERTICAL=1]="VERTICAL",e}({}),r=function(e){return e.SUCCESS="success",e.INFO="info",e.WARNING="warning",e.WARNING_STOP="warning-stop",e.ERROR="error",e}({})}}]);