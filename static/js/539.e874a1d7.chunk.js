"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[539],{991:function(t,e,n){n.d(e,{Jh:function(){return v},_r:function(){return y},e2:function(){return s},s_:function(){return m},z1:function(){return p}});var r=n(861),a=n(757),c=n.n(a),o=n(388),u="b8a30f96df20651d83fae821e2a7d792",i="https://api.themoviedb.org/3";function s(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="/trending/movie/day?api_key=".concat(u),t.next=3,(0,o.Z)("".concat(i).concat(e));case 3:return n=t.sent,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="/search/movie?api_key=".concat(u,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"),t.next=3,(0,o.Z)("".concat(i).concat(n));case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="/movie/".concat(e,"?api_key=").concat(u,"&language=en-US"),t.next=3,(0,o.Z)("".concat(i).concat(n));case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="/movie/".concat(e,"/credits?api_key=").concat(u,"&language=en-US"),t.next=3,(0,o.Z)("".concat(i).concat(n));case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){return _.apply(this,arguments)}function _(){return(_=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="/movie/".concat(e,"/reviews?api_key=").concat(u,"&language=en-US"),t.next=3,(0,o.Z)("".concat(i).concat(n));case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},219:function(t,e,n){n.d(e,{O:function(){return s}});var r=n(87),a=n(689),c="MovieList_list__MPHyX",o="MovieList_item__K68oi",u="MovieList_text__0LsPf",i=n(184),s=function(t){var e=t.movies,n=(0,a.TH)();return(0,i.jsx)("ul",{className:c,children:e.map((function(t){return(0,i.jsx)("li",{className:o,children:(0,i.jsxs)(r.rU,{to:"/movies/".concat(t.id),state:{from:n},children:[(0,i.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(t.poster_path),alt:""}),(0,i.jsx)("p",{className:u,children:t.title||t.name})]})},t.id)}))})}},539:function(t,e,n){n.r(e),n.d(e,{default:function(){return d}});var r=n(439),a=n(991),c="SearchBox_form__GByKm",o="SearchBox_input__+nuoc",u="SearchBox_btn__YGf58",i=n(983);function s(t){return(0,i.w_)({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M15.504 13.616l-3.79-3.223c-0.392-0.353-0.811-0.514-1.149-0.499 0.895-1.048 1.435-2.407 1.435-3.893 0-3.314-2.686-6-6-6s-6 2.686-6 6 2.686 6 6 6c1.486 0 2.845-0.54 3.893-1.435-0.016 0.338 0.146 0.757 0.499 1.149l3.223 3.79c0.552 0.613 1.453 0.665 2.003 0.115s0.498-1.452-0.115-2.003zM6 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"}}]})(t)}var l=n(184),p=function(t){var e=t.onSubmit;return(0,l.jsxs)("form",{className:c,onSubmit:function(t){t.preventDefault(),e(t.target.elements.query.value)},children:[(0,l.jsx)("input",{className:o,name:"query",type:"text",placeholder:"Search films"}),(0,l.jsx)("button",{className:u,type:"submit",children:(0,l.jsx)(s,{})})]})},f=n(791),m=n(87),h="Movies_box__hd5an",v=n(219),d=function(){var t,e=(0,m.lr)(),n=(0,r.Z)(e,2),c=n[0],o=n[1],u=null!==(t=c.get("query"))&&void 0!==t?t:"",i=(0,f.useState)([]),s=(0,r.Z)(i,2),d=s[0],y=s[1];(0,f.useEffect)((function(){u&&(0,a.z1)(u).then((function(t){return y(t.data.results)}))}),[u]);return(0,l.jsxs)("main",{className:h,children:[(0,l.jsx)(p,{onSubmit:function(t){o(""!==t?{query:t}:{})}}),(0,l.jsx)(v.O,{movies:d})]})}},983:function(t,e,n){n.d(e,{w_:function(){return s}});var r=n(791),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},c=r.createContext&&r.createContext(a),o=function(){return o=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},o.apply(this,arguments)},u=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(n[r[a]]=t[r[a]])}return n};function i(t){return t&&t.map((function(t,e){return r.createElement(t.tag,o({key:e},t.attr),i(t.child))}))}function s(t){return function(e){return r.createElement(l,o({attr:o({},t.attr)},e),i(t.child))}}function l(t){var e=function(e){var n,a=t.attr,c=t.size,i=t.title,s=u(t,["attr","size","title"]),l=c||e.size||"1em";return e.className&&(n=e.className),t.className&&(n=(n?n+" ":"")+t.className),r.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,a,s,{className:n,style:o(o({color:t.color||e.color},e.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),i&&r.createElement("title",null,i),t.children)};return void 0!==c?r.createElement(c.Consumer,null,(function(t){return e(t)})):e(a)}}}]);
//# sourceMappingURL=539.e874a1d7.chunk.js.map