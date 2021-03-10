function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _slicedToArray(e,n){return _arrayWithHoles(e)||_iterableToArrayLimit(e,n)||_unsupportedIterableToArray(e,n)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,n){if(e){if("string"==typeof e)return _arrayLikeToArray(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(e,n):void 0}}function _arrayLikeToArray(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function _iterableToArrayLimit(e,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,a=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(t.push(o.value),!n||t.length!==n);r=!0);}catch(l){a=!0,i=l}finally{try{r||null==s.return||s.return()}finally{if(a)throw i}}return t}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _inherits(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&_setPrototypeOf(e,n)}function _setPrototypeOf(e,n){return(_setPrototypeOf=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function _createSuper(e){var n=_isNativeReflectConstruct();return function(){var t,r=_getPrototypeOf(e);if(n){var a=_getPrototypeOf(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return _possibleConstructorReturn(this,t)}}function _possibleConstructorReturn(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?_assertThisInitialized(e):n}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{ECCn:function(e,n){function t(e){Object.freeze(e);var n="function"==typeof e;return Object.getOwnPropertyNames(e).forEach((function(r){!Object.hasOwnProperty.call(e,r)||null===e[r]||"object"!=typeof e[r]&&"function"!=typeof e[r]||n&&("caller"===r||"callee"===r||"arguments"===r)||Object.isFrozen(e[r])||t(e[r])})),e}var r=function(){function e(n){_classCallCheck(this,e),void 0===n.data&&(n.data={}),this.data=n.data}return _createClass(e,[{key:"ignoreMatch",value:function(){this.ignore=!0}}]),e}();function a(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function i(e){var n={};for(var t in e)n[t]=e[t];for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];return a.forEach((function(e){for(var t in e)n[t]=e[t]})),n}function o(e){return e.nodeName.toLowerCase()}var s=Object.freeze({__proto__:null,escapeHTML:a,inherit:i,nodeStream:function(e){var n=[];return function e(t,r){for(var a=t.firstChild;a;a=a.nextSibling)3===a.nodeType?r+=a.nodeValue.length:1===a.nodeType&&(n.push({event:"start",offset:r,node:a}),r=e(a,r),o(a).match(/br|hr|img|input/)||n.push({event:"stop",offset:r,node:a}));return r}(e,0),n},mergeStreams:function(e,n,t){var r=0,i="",s=[];function l(){return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n}function u(e){i+="<"+o(e)+[].map.call(e.attributes,(function(e){return" "+e.nodeName+'="'+a(e.value)+'"'})).join("")+">"}function c(e){i+="</"+o(e)+">"}function f(e){("start"===e.event?u:c)(e.node)}for(;e.length||n.length;){var d=l();if(i+=a(t.substring(r,d[0].offset)),r=d[0].offset,d===e){s.reverse().forEach(c);do{f(d.splice(0,1)[0]),d=l()}while(d===e&&d.length&&d[0].offset===r);s.reverse().forEach(u)}else"start"===d[0].event?s.push(d[0].node):s.pop(),f(d.splice(0,1)[0])}return i+a(t.substr(r))}}),l=function(e){return!!e.kind},u=function(){function e(n,t){_classCallCheck(this,e),this.buffer="",this.classPrefix=t.classPrefix,n.walk(this)}return _createClass(e,[{key:"addText",value:function(e){this.buffer+=a(e)}},{key:"openNode",value:function(e){if(l(e)){var n=e.kind;e.sublanguage||(n="".concat(this.classPrefix).concat(n)),this.span(n)}}},{key:"closeNode",value:function(e){l(e)&&(this.buffer+="</span>")}},{key:"value",value:function(){return this.buffer}},{key:"span",value:function(e){this.buffer+='<span class="'.concat(e,'">')}}]),e}(),c=function(e){_inherits(t,e);var n=_createSuper(t);function t(e){var r;return _classCallCheck(this,t),(r=n.call(this)).options=e,r}return _createClass(t,[{key:"addKeyword",value:function(e,n){""!==e&&(this.openNode(n),this.addText(e),this.closeNode())}},{key:"addText",value:function(e){""!==e&&this.add(e)}},{key:"addSublanguage",value:function(e,n){var t=e.root;t.kind=n,t.sublanguage=!0,this.add(t)}},{key:"toHTML",value:function(){return new u(this,this.options).value()}},{key:"finalize",value:function(){return!0}}]),t}(function(){function e(){_classCallCheck(this,e),this.rootNode={children:[]},this.stack=[this.rootNode]}return _createClass(e,[{key:"add",value:function(e){this.top.children.push(e)}},{key:"openNode",value:function(e){var n={kind:e,children:[]};this.add(n),this.stack.push(n)}},{key:"closeNode",value:function(){if(this.stack.length>1)return this.stack.pop()}},{key:"closeAllNodes",value:function(){for(;this.closeNode(););}},{key:"toJSON",value:function(){return JSON.stringify(this.rootNode,null,4)}},{key:"walk",value:function(e){return this.constructor._walk(e,this.rootNode)}},{key:"top",get:function(){return this.stack[this.stack.length-1]}},{key:"root",get:function(){return this.rootNode}}],[{key:"_walk",value:function(e,n){var t=this;return"string"==typeof n?e.addText(n):n.children&&(e.openNode(n),n.children.forEach((function(n){return t._walk(e,n)})),e.closeNode(n)),e}},{key:"_collapse",value:function(n){"string"!=typeof n&&n.children&&(n.children.every((function(e){return"string"==typeof e}))?n.children=[n.children.join("")]:n.children.forEach((function(n){e._collapse(n)})))}}]),e}());function f(e){return e?"string"==typeof e?e:e.source:null}var d="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",g={begin:"\\\\[\\s\\S]",relevance:0},h={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[g]},p={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[g]},v={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},b=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=i({className:"comment",begin:e,end:n,contains:[]},t);return r.contains.push(v),r.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),r},y=b("//","$"),m=b("/\\*","\\*/"),_=b("#","$"),w=Object.freeze({__proto__:null,IDENT_RE:"[a-zA-Z]\\w*",UNDERSCORE_IDENT_RE:"[a-zA-Z_]\\w*",NUMBER_RE:"\\b\\d+(\\.\\d+)?",C_NUMBER_RE:d,BINARY_NUMBER_RE:"\\b(0b[01]+)",RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=/^#![ ]*\//;return e.binary&&(e.begin=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.map((function(e){return f(e)})).join("")}(n,/.*\b/,e.binary,/\b.*/)),i({className:"meta",begin:n,end:/$/,relevance:0,"on:begin":function(e,n){0!==e.index&&n.ignoreMatch()}},e)},BACKSLASH_ESCAPE:g,APOS_STRING_MODE:h,QUOTE_STRING_MODE:p,PHRASAL_WORDS_MODE:v,COMMENT:b,C_LINE_COMMENT_MODE:y,C_BLOCK_COMMENT_MODE:m,HASH_COMMENT_MODE:_,NUMBER_MODE:{className:"number",begin:"\\b\\d+(\\.\\d+)?",relevance:0},C_NUMBER_MODE:{className:"number",begin:d,relevance:0},BINARY_NUMBER_MODE:{className:"number",begin:"\\b(0b[01]+)",relevance:0},CSS_NUMBER_MODE:{className:"number",begin:"\\b\\d+(\\.\\d+)?(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},REGEXP_MODE:{begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[g,{begin:/\[/,end:/\]/,relevance:0,contains:[g]}]}]},TITLE_MODE:{className:"title",begin:"[a-zA-Z]\\w*",relevance:0},UNDERSCORE_TITLE_MODE:{className:"title",begin:"[a-zA-Z_]\\w*",relevance:0},METHOD_GUARD:{begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0},END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":function(e,n){n.data._beginMatch=e[1]},"on:end":function(e,n){n.data._beginMatch!==e[1]&&n.ignoreMatch()}})}}),x="of and for in not or if then".split(" ");function E(e,n){return n?Number(n):function(e){return x.includes(e.toLowerCase())}(e)?0:1}var k=a,R=i,N=s.nodeStream,O=s.mergeStreams,A=Symbol("nomatch"),T=function(e){var n=[],a={},o={},s=[],l=!0,u=/(^(<[^>]+>|\t|)+|\n)/gm,d="Could not find the language '{}', did you forget to load/include a language module?",g={disableAutodetect:!0,name:"Plain text",contains:[]},h={noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:null,__emitter:c};function p(e){return h.noHighlightRe.test(e)}function v(e,n,t,r){var a={code:n,language:e};S("before:highlight",a);var i=a.result?a.result:b(a.language,a.code,t,r);return i.code=a.code,S("after:highlight",i),i}function b(e,n,t,o){var s=n;function u(e,n){var t=_.case_insensitive?n[0].toLowerCase():n[0];return Object.prototype.hasOwnProperty.call(e.keywords,t)&&e.keywords[t]}function c(){null!=R.subLanguage?function(){if(""!==C){var e=null;if("string"==typeof R.subLanguage){if(!a[R.subLanguage])return void O.addText(C);e=b(R.subLanguage,C,!0,N[R.subLanguage]),N[R.subLanguage]=e.top}else e=y(C,R.subLanguage.length?R.subLanguage:null);R.relevance>0&&(M+=e.relevance),O.addSublanguage(e.emitter,e.language)}}():function(){if(R.keywords){var e=0;R.keywordPatternRe.lastIndex=0;for(var n=R.keywordPatternRe.exec(C),t="";n;){t+=C.substring(e,n.index);var r=u(R,n);if(r){var a=_slicedToArray(r,2),i=a[0],o=a[1];O.addText(t),t="",M+=o,O.addKeyword(n[0],i)}else t+=n[0];e=R.keywordPatternRe.lastIndex,n=R.keywordPatternRe.exec(C)}t+=C.substr(e),O.addText(t)}else O.addText(C)}(),C=""}function g(e){return e.className&&O.openNode(e.className),R=Object.create(e,{parent:{value:R}})}function p(e){return 0===R.matcher.regexIndex?(C+=e[0],1):(j=!0,0)}var v={};function m(n,a){var i=a&&a[0];if(C+=n,null==i)return c(),0;if("begin"===v.type&&"end"===a.type&&v.index===a.index&&""===i){if(C+=s.slice(a.index,a.index+1),!l){var o=new Error("0 width match regex");throw o.languageName=e,o.badRule=v.rule,o}return 1}if(v=a,"begin"===a.type)return function(e){for(var n=e[0],t=e.rule,a=new r(t),i=0,o=[t.__beforeBegin,t["on:begin"]];i<o.length;i++){var s=o[i];if(s&&(s(e,a),a.ignore))return p(n)}return t&&t.endSameAsBegin&&(t.endRe=new RegExp(n.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")),t.skip?C+=n:(t.excludeBegin&&(C+=n),c(),t.returnBegin||t.excludeBegin||(C=n)),g(t),t.returnBegin?0:n.length}(a);if("illegal"===a.type&&!t){var u=new Error('Illegal lexeme "'+i+'" for mode "'+(R.className||"<unnamed>")+'"');throw u.mode=R,u}if("end"===a.type){var f=function(e){var n=e[0],t=s.substr(e.index),a=function e(n,t,a){var i=function(e,n){var t=e&&e.exec(n);return t&&0===t.index}(n.endRe,a);if(i){if(n["on:end"]){var o=new r(n);n["on:end"](t,o),o.ignore&&(i=!1)}if(i){for(;n.endsParent&&n.parent;)n=n.parent;return n}}if(n.endsWithParent)return e(n.parent,t,a)}(R,e,t);if(!a)return A;var i=R;i.skip?C+=n:(i.returnEnd||i.excludeEnd||(C+=n),c(),i.excludeEnd&&(C=n));do{R.className&&O.closeNode(),R.skip||R.subLanguage||(M+=R.relevance),R=R.parent}while(R!==a.parent);return a.starts&&(a.endSameAsBegin&&(a.starts.endRe=a.endRe),g(a.starts)),i.returnEnd?0:n.length}(a);if(f!==A)return f}if("illegal"===a.type&&""===i)return 1;if(I>1e5&&I>3*a.index)throw new Error("potential infinite loop, way more iterations than matches");return C+=i,i.length}var _=T(e);if(!_)throw console.error(d.replace("{}",e)),new Error('Unknown language: "'+e+'"');var w=function(e){function n(n,t){return new RegExp(f(n),"m"+(e.case_insensitive?"i":"")+(t?"g":""))}var t=function(){function e(){_classCallCheck(this,e),this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}return _createClass(e,[{key:"addRule",value:function(e,n){n.position=this.position++,this.matchIndexes[this.matchAt]=n,this.regexes.push([n,e]),this.matchAt+=function(e){return new RegExp(e.toString()+"|").exec("").length-1}(e)+1}},{key:"compile",value:function(){0===this.regexes.length&&(this.exec=function(){return null});var e=this.regexes.map((function(e){return e[1]}));this.matcherRe=n(function(e){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"|",t=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,r=0,a="",i=0;i<e.length;i++){var o=r+=1,s=f(e[i]);for(i>0&&(a+=n),a+="(";s.length>0;){var l=t.exec(s);if(null==l){a+=s;break}a+=s.substring(0,l.index),s=s.substring(l.index+l[0].length),"\\"===l[0][0]&&l[1]?a+="\\"+String(Number(l[1])+o):(a+=l[0],"("===l[0]&&r++)}a+=")"}return a}(e),!0),this.lastIndex=0}},{key:"exec",value:function(e){this.matcherRe.lastIndex=this.lastIndex;var n=this.matcherRe.exec(e);if(!n)return null;var t=n.findIndex((function(e,n){return n>0&&void 0!==e})),r=this.matchIndexes[t];return n.splice(0,t),Object.assign(n,r)}}]),e}(),r=function(){function e(){_classCallCheck(this,e),this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}return _createClass(e,[{key:"getMatcher",value:function(e){if(this.multiRegexes[e])return this.multiRegexes[e];var n=new t;return this.rules.slice(e).forEach((function(e){var t=_slicedToArray(e,2),r=t[0],a=t[1];return n.addRule(r,a)})),n.compile(),this.multiRegexes[e]=n,n}},{key:"considerAll",value:function(){this.regexIndex=0}},{key:"addRule",value:function(e,n){this.rules.push([e,n]),"begin"===n.type&&this.count++}},{key:"exec",value:function(e){var n=this.getMatcher(this.regexIndex);n.lastIndex=this.lastIndex;var t=n.exec(e);return t&&(this.regexIndex+=t.position+1,this.regexIndex===this.count&&(this.regexIndex=0)),t}}]),e}();function a(e,n){"."!==e.input[e.index-1]&&"."!==e.input[e.index+e[0].length]||n.ignoreMatch()}if(e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return function t(o,s){var l,u=o;if(o.compiled)return u;o.compiled=!0,o.__beforeBegin=null,o.keywords=o.keywords||o.beginKeywords;var c=null;if("object"==typeof o.keywords&&(c=o.keywords.$pattern,delete o.keywords.$pattern),o.keywords&&(o.keywords=function(e,n){var t={};return"string"==typeof e?r("keyword",e):Object.keys(e).forEach((function(n){r(n,e[n])})),t;function r(e,r){n&&(r=r.toLowerCase()),r.split(" ").forEach((function(n){var r=n.split("|");t[r[0]]=[e,E(r[0],r[1])]}))}}(o.keywords,e.case_insensitive)),o.lexemes&&c)throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");return u.keywordPatternRe=n(o.lexemes||c||/\w+/,!0),s&&(o.beginKeywords&&(o.begin="\\b("+o.beginKeywords.split(" ").join("|")+")(?=\\b|\\s)",o.__beforeBegin=a),o.begin||(o.begin=/\B|\b/),u.beginRe=n(o.begin),o.endSameAsBegin&&(o.end=o.begin),o.end||o.endsWithParent||(o.end=/\B|\b/),o.end&&(u.endRe=n(o.end)),u.terminator_end=f(o.end)||"",o.endsWithParent&&s.terminator_end&&(u.terminator_end+=(o.end?"|":"")+s.terminator_end)),o.illegal&&(u.illegalRe=n(o.illegal)),void 0===o.relevance&&(o.relevance=1),o.contains||(o.contains=[]),o.contains=(l=[]).concat.apply(l,_toConsumableArray(o.contains.map((function(e){return function(e){return e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map((function(n){return i(e,{variants:null},n)}))),e.cached_variants?e.cached_variants:function e(n){return!!n&&(n.endsWithParent||e(n.starts))}(e)?i(e,{starts:e.starts?i(e.starts):null}):Object.isFrozen(e)?i(e):e}("self"===e?o:e)})))),o.contains.forEach((function(e){t(e,u)})),o.starts&&t(o.starts,s),u.matcher=function(e){var n=new r;return e.contains.forEach((function(e){return n.addRule(e.begin,{rule:e,type:"begin"})})),e.terminator_end&&n.addRule(e.terminator_end,{type:"end"}),e.illegal&&n.addRule(e.illegal,{type:"illegal"}),n}(u),u}(e)}(_),x="",R=o||w,N={},O=new h.__emitter(h);!function(){for(var e=[],n=R;n!==_;n=n.parent)n.className&&e.unshift(n.className);e.forEach((function(e){return O.openNode(e)}))}();var C="",M=0,S=0,I=0,j=!1;try{for(R.matcher.considerAll();;){I++,j?j=!1:(R.matcher.lastIndex=S,R.matcher.considerAll());var L=R.matcher.exec(s);if(!L)break;var P=m(s.substring(S,L.index),L);S=L.index+P}return m(s.substr(S)),O.closeAllNodes(),O.finalize(),x=O.toHTML(),{relevance:M,value:x,language:e,illegal:!1,emitter:O,top:R}}catch(B){if(B.message&&B.message.includes("Illegal"))return{illegal:!0,illegalBy:{msg:B.message,context:s.slice(S-100,S+100),mode:B.mode},sofar:x,relevance:0,value:k(s),emitter:O};if(l)return{illegal:!1,relevance:0,value:k(s),emitter:O,language:e,top:R,errorRaised:B};throw B}}function y(e,n){n=n||h.languages||Object.keys(a);var t=function(e){var n={relevance:0,emitter:new h.__emitter(h),value:k(e),illegal:!1,top:g};return n.emitter.addText(e),n}(e),r=t;return n.filter(T).filter(M).forEach((function(n){var a=b(n,e,!1);a.language=n,a.relevance>r.relevance&&(r=a),a.relevance>t.relevance&&(r=t,t=a)})),r.language&&(t.second_best=r),t}function m(e){return h.tabReplace||h.useBR?e.replace(u,(function(e){return"\n"===e?h.useBR?"<br>":e:h.tabReplace?e.replace(/\t/g,h.tabReplace):e})):e}function _(e){var n=null,t=function(e){var n=e.className+" ",t=h.languageDetectRe.exec(n+=e.parentNode?e.parentNode.className:"");if(t){var r=T(t[1]);return r||(console.warn(d.replace("{}",t[1])),console.warn("Falling back to no-highlight mode for this block.",e)),r?t[1]:"no-highlight"}return n.split(/\s+/).find((function(e){return p(e)||T(e)}))}(e);if(!p(t)){S("before:highlightBlock",{block:e,language:t}),h.useBR?(n=document.createElement("div")).innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,"\n"):n=e;var r=n.textContent,a=t?v(t,r,!0):y(r),i=N(n);if(i.length){var s=document.createElement("div");s.innerHTML=a.value,a.value=O(i,N(s),r)}a.value=m(a.value),S("after:highlightBlock",{block:e,result:a}),e.innerHTML=a.value,e.className=function(e,n,t){var r=n?o[n]:t,a=[e.trim()];return e.match(/\bhljs\b/)||a.push("hljs"),e.includes(r)||a.push(r),a.join(" ").trim()}(e.className,t,a.language),e.result={language:a.language,re:a.relevance,relavance:a.relevance},a.second_best&&(e.second_best={language:a.second_best.language,re:a.second_best.relevance,relavance:a.second_best.relevance})}}var x=function e(){if(!e.called){e.called=!0;var t=document.querySelectorAll("pre code");n.forEach.call(t,_)}};function T(e){return e=(e||"").toLowerCase(),a[e]||a[o[e]]}function C(e,n){var t=n.languageName;"string"==typeof e&&(e=[e]),e.forEach((function(e){o[e]=t}))}function M(e){var n=T(e);return n&&!n.disableAutodetect}function S(e,n){var t=e;s.forEach((function(e){e[t]&&e[t](n)}))}for(var I in Object.assign(e,{highlight:v,highlightAuto:y,fixMarkup:m,highlightBlock:_,configure:function(e){h=R(h,e)},initHighlighting:x,initHighlightingOnLoad:function(){window.addEventListener("DOMContentLoaded",x,!1)},registerLanguage:function(n,t){var r=null;try{r=t(e)}catch(i){if(console.error("Language definition for '{}' could not be registered.".replace("{}",n)),!l)throw i;console.error(i),r=g}r.name||(r.name=n),a[n]=r,r.rawDefinition=t.bind(null,e),r.aliases&&C(r.aliases,{languageName:n})},listLanguages:function(){return Object.keys(a)},getLanguage:T,registerAliases:C,requireLanguage:function(e){var n=T(e);if(n)return n;throw new Error("The '{}' language is required, but not loaded.".replace("{}",e))},autoDetection:M,inherit:R,addPlugin:function(e){s.push(e)}}),e.debugMode=function(){l=!1},e.safeMode=function(){l=!0},e.versionString="10.1.1",w)"object"==typeof w[I]&&t(w[I]);return Object.assign(e,w),e}({});e.exports=T}}]);