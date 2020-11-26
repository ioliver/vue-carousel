(function(t){function e(e){for(var r,l,a=e[0],i=e[1],u=e[2],f=0,d=[];f<a.length;f++)l=a[f],Object.prototype.hasOwnProperty.call(s,l)&&s[l]&&d.push(s[l][0]),s[l]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);c&&c(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,a=1;a<n.length;a++){var i=n[a];0!==s[i]&&(r=!1)}r&&(o.splice(e--,1),t=l(l.s=n[0]))}return t}var r={},s={app:0},o=[];function l(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=r,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(n,r,function(e){return t[e]}.bind(null,r));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/vue-carousel/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var c=i;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},3591:function(t,e,n){"use strict";n("36a5")},"36a5":function(t,e,n){},"50bd":function(t,e,n){"use strict";n("6486")},5109:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h3",[t._v("Pages")]),n("WidgetPages"),n("br"),n("h3",[t._v("Fixed width (200px)")]),n("WidgetFixedWidth"),n("br"),n("h3",[t._v("Intrinsic width")]),n("WidgetIntrinsicWidth"),n("br"),n("h3",[t._v("Vertical")]),n("WidgetVertical"),n("br"),n("br")],1)},o=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Carousel",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.page,s=e.pages;return[n("CarouselContent",t._l(5,(function(e){return n("div",{key:e,staticClass:"item",style:{background:"hsl(0, 0%, "+(50+3*e)+"%)"}},[t._v(t._s(e))])})),0),n("div",{staticClass:"flex"},[n("CarouselScrollToPage",{staticClass:"mr-a",attrs:{page:r-1}},[t._v("Prev")]),t._l(s,(function(e){return n("CarouselScrollToPage",{key:e,attrs:{page:e}},[t._v(t._s(e))])})),n("CarouselScrollToPage",{staticClass:"ml-a",attrs:{page:r+1}},[t._v("Next")])],2)]}}])})},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._t("default",null,{page:t.page,pages:t.pages})],2)},u=[],c=n("f678"),f=n.n(c),d={provide:function(){return{carousel:this}},data:function(){return{width:0,pageWidth:0,offset:0}},computed:{pages:function(){return Math.ceil(this.width/this.pageWidth)||0},page:function(){return this.offset+this.pageWidth>=this.width?this.pages:Math.round(100*this.offset/this.pageWidth)/100+1},isNext:function(){return this.offset+this.pageWidth<this.width},isPrev:function(){return this.offset>0}},methods:{init:function(t,e,n){this.width=t,this.pageWidth=e,this.scrollUpdate(n)},scrollUpdate:function(t){this.offset=t},scrollToPage:function(t){this.$emit("scrollTo",(f()(this.pages,1,t)-1)*this.pageWidth)},next:function(){this.$emit("next")},prev:function(){this.$emit("prev")}}},p=d,h=n("2877"),v=Object(h["a"])(p,i,u,!1,null,null,null),g=v.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"scrollContainer",class:{"scrollContainer--noBar":!t.bar}},[t._t("default")],2)},_=[],C=(n("96cf"),n("1da1")),m=n("b047"),x=n.n(m),y={inject:["carousel"],props:{bar:{type:Boolean,default:!1}},mounted:function(){var t=this;return Object(C["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick();case 2:t.init(),n=x()(t.scrollUpdate,50),r=x()(t.init,100),t.$el.addEventListener("scroll",n),window.addEventListener("resize",r),t.$once("hook:beforeDestroy",(function(){t.$el.removeEventListener("scroll",n),window.removeEventListener("resize",r)})),t.carousel.$on("scrollTo",t.scrollTo),t.carousel.$on("next",t.next),t.carousel.$on("prev",t.prev);case 11:case"end":return e.stop()}}),e)})))()},updated:function(){var t=this;return Object(C["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick();case 2:t.init();case 3:case"end":return e.stop()}}),e)})))()},methods:{init:function(){this.carousel.init(this.$el.scrollWidth,this.$el.clientWidth,this.$el.scrollLeft)},scrollUpdate:function(){this.carousel.scrollUpdate(this.$el.scrollLeft)},scrollTo:function(t){this.$el.scrollTo({left:t,behavior:"smooth"})},next:function(){for(var t=0,e=this.carousel.offset+this.carousel.pageWidth,n=this.$el.children,r=0,s=n.length;r<s;r++){var o=t+n[r].clientWidth;if(o>e)break;t=o}this.scrollTo(t)},prev:function(){var t=this.carousel.width,e=this.carousel.offset-this.carousel.pageWidth,n=this.$el.children;if(e>0)for(var r=n.length-1;r>0;r-=1){var s=t-n[r].clientWidth;if(s<e)break;t=s}else t=0;this.scrollTo(t)}}},w=y,P=(n("50bd"),Object(h["a"])(w,b,_,!1,null,null,null)),k=P.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{attrs:{type:"button",disabled:t.disabled},on:{click:function(e){return t.carousel.scrollToPage(t.page)}}},[t._t("default")],2)},j=[],W=(n("a9e3"),{inject:["carousel"],props:{page:{type:Number,required:!0}},computed:{disabled:function(){return this.page<1||this.page>this.carousel.pages||this.page===this.carousel.page}}}),O=W,T=Object(h["a"])(O,$,j,!1,null,null,null),S=T.exports,E={components:{Carousel:g,CarouselContent:k,CarouselScrollToPage:S}},N=E,M=(n("a3f9"),Object(h["a"])(N,l,a,!1,null,null,null)),L=M.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Carousel",[n("CarouselContent",t._l(17,(function(e){return n("div",{key:e,staticClass:"item-2",style:{background:"hsl(0, 0%, "+(50+3*e)+"%)"}},[t._v(t._s(e))])})),0),n("div",{staticClass:"flex"},[n("CarouselPrev",{staticClass:"mr-a"},[t._v("Prev")]),n("CarouselNext",{staticClass:"ml-a"},[t._v("Next")])],1)],1)},U=[],R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{attrs:{type:"button",disabled:!t.carousel.isPrev},on:{click:function(e){return t.carousel.prev()}}},[t._t("default")],2)},F=[],V={inject:["carousel"]},z=V,A=Object(h["a"])(z,R,F,!1,null,null,null),B=A.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{attrs:{type:"button",disabled:!t.carousel.isNext},on:{click:function(e){return t.carousel.next()}}},[t._t("default")],2)},q=[],D={inject:["carousel"]},G=D,H=Object(h["a"])(G,J,q,!1,null,null,null),K=H.exports,Q={components:{Carousel:g,CarouselContent:k,CarouselPrev:B,CarouselNext:K}},X=Q,Y=(n("3591"),Object(h["a"])(X,I,U,!1,null,null,null)),Z=Y.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Carousel",[n("CarouselContent",t._l(20,(function(e){return n("div",{key:e,staticClass:"item-3",style:{background:"hsl(0, 0%, "+(50+3*e)+"%)",width:Math.floor(141*Math.random())+60+"px"}},[t._v(t._s(e))])})),0),n("div",{staticClass:"flex"},[n("CarouselPrev",{staticClass:"mr-a"},[t._v("Prev")]),n("CarouselNext",{staticClass:"ml-a"},[t._v("Next")])],1)],1)},et=[],nt={components:{Carousel:g,CarouselContent:k,CarouselPrev:B,CarouselNext:K},computed:{width:function(){for(var t=[],e=0,n=20;e<n;e++)t.push(Math.floor(61*Math.random())+60);return t}}},rt=nt,st=(n("d7ef"),Object(h["a"])(rt,tt,et,!1,null,null,null)),ot=st.exports,lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vertical-container"},[n("Carousel",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.page,s=e.pages;return[n("CarouselContent",t._l(t.chunkedItems,(function(e,r){return n("div",{key:r,staticClass:"chunk"},t._l(e,(function(e,r){return n("div",{key:r,staticClass:"item-4",style:{background:"hsl(0, 0%, "+(50+3*r)+"%)"}},[t._v(" "+t._s(e)+" ")])})),0)})),0),n("div",{staticClass:"flex"},[n("CarouselScrollToPage",{staticClass:"mr-a",attrs:{page:r-1}},[t._v("Prev")]),t._l(s,(function(e){return n("CarouselScrollToPage",{key:e,attrs:{page:e}},[t._v(t._s(e))])})),n("CarouselScrollToPage",{staticClass:"ml-a",attrs:{page:r+1}},[t._v("Next")])],2)]}}])})],1)},at=[],it=(n("d81d"),n("2909")),ut=n("91c8"),ct=n.n(ut),ft=Object(it["a"])(Array(10)).map((function(t,e){return e+1})),dt={components:{Carousel:g,CarouselContent:k,CarouselScrollToPage:S},computed:{chunkedItems:function(){return ct()(ft,4)}}},pt=dt,ht=(n("df89"),Object(h["a"])(pt,lt,at,!1,null,null,null)),vt=ht.exports,gt={name:"App",components:{WidgetPages:L,WidgetFixedWidth:Z,WidgetIntrinsicWidth:ot,WidgetVertical:vt}},bt=gt,_t=(n("5c0b"),Object(h["a"])(bt,s,o,!1,null,null,null)),Ct=_t.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(Ct)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},6486:function(t,e,n){},"9c0c":function(t,e,n){},a3f9:function(t,e,n){"use strict";n("e0a2")},b8ef:function(t,e,n){},d7ef:function(t,e,n){"use strict";n("5109")},df89:function(t,e,n){"use strict";n("b8ef")},e0a2:function(t,e,n){}});
//# sourceMappingURL=app.2bfb6954.js.map