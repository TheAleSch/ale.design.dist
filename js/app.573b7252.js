(function(e){function t(t){for(var n,o,c=t[0],i=t[1],s=t[2],l=0,p=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);f&&f(t);while(p.length)p.shift()();return u.push.apply(u,s||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,o=1;o<r.length;o++){var c=r[o];0!==a[c]&&(n=!1)}n&&(u.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},a={app:0},u=[];function c(e){return i.p+"js/"+({about:"about",project:"project"}[e]||e)+"."+{about:"3c2a94b7",project:"c8eb10c8"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={about:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({about:"about",project:"project"}[e]||e)+"."+{about:"5522f420",project:"31d6cfe0"}[e]+".css",a=i.p+n,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===n||l===a))return t()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){s=p[c],l=s.getAttribute("data-href");if(l===n||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=n,delete o[e],f.parentNode.removeChild(f),r(u)},f.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var u=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var p=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",p.name="ChunkLoadError",p.type=n,p.request=o,r[1](p)}a[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var f=l;u.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"214d":function(e,t,r){"use strict";r("6e54")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app"},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),r("router-link",{attrs:{to:"/about"}},[e._v("About me")]),e._v(" | "),r("router-link",{attrs:{to:"/project"}},[e._v("Project")])],1),r("transition",{attrs:{name:"fade",mode:"out-in"}},[r("router-view")],1)],1)},a=[],u=(r("5c0b"),r("2877")),c={},i=Object(u["a"])(c,o,a,!1,null,null,null),s=i.exports,l=(r("d3b7"),r("8c4f")),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("pagheader"),e._m(0)],1)},f=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"title-huge"},[r("h2",[e._v("Work")])])}],d=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},h=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("header",{staticClass:"bg-cube"},[r("span",{staticClass:"huge"},[e._v("Hi")]),r("span",{staticClass:"big"},[e._v("I’m Alexandre Schrammel")]),r("span",{staticClass:"small"},[e._v("a Designer based in São Paulo")])])])}],m={name:"pagheader"},v=m,b=(r("779a"),Object(u["a"])(v,d,h,!1,null,"22cb87bd",null)),g=b.exports,_={name:"Home",components:{pagheader:g}},y=_,j=(r("214d"),Object(u["a"])(y,p,f,!1,null,"773be3b0",null)),w=j.exports;n["a"].use(l["a"]);var C=[{path:"/",name:"Home",component:w},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"/project",name:"Project",component:function(){return r.e("project").then(r.bind(null,"07bd"))}}],O=new l["a"]({routes:C}),E=O,P=r("0284"),k=r.n(P);n["a"].config.productionTip=!1,n["a"].use(k.a,{id:"UA-183485136-1",router:E}),new n["a"]({router:E,render:function(e){return e(s)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";r("9c0c")},"6ac8":function(e,t,r){},"6e54":function(e,t,r){},"779a":function(e,t,r){"use strict";r("6ac8")},"9c0c":function(e,t,r){}});
//# sourceMappingURL=app.573b7252.js.map