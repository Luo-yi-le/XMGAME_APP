(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"027b":function(t,e,i){"use strict";i("33f3");var a=s(i("b0ce")),n=s(i("a878"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(n.default))},a878:function(t,e,i){"use strict";i.r(e);var a=i("a8fa"),n=i("ffe0");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("c5ae");var u=i("2877"),c=Object(u["a"])(n["default"],a["a"],a["b"],!1,null,null,null);e["default"]=c.exports},a8fa:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",[i("view",{staticStyle:{"text-align":"center",height:"120rpx"}},[i("view",{staticStyle:{background:"#fff"}},[i("view",{staticStyle:{"border-bottom":"15rpx solid #f1f1f1",background:"#fff"}},[i("view",{staticClass:"view1"},[i("image",{staticStyle:{"flex-shrink":"0",width:"50rpx",height:"50rpx"},attrs:{src:"../../static/logo.png"}}),i("view",{staticClass:"textName"},[t._v("用户:"+t._s(t.userName))]),i("view",{staticClass:"textName"},[t._v("积分:"+t._s(t.integral))])])])])]),i("view",[i("ul",t._l(t.Imag,function(e,a){return i("li",{staticClass:"getWidth",style:{height:t.Height+"upx"}},[i("img",{staticClass:"am-thumbnail",attrs:{src:e.imgs,eventid:"fdfd28ca-0-"+a},on:{click:function(i){t.begin(e.Id,t.userName)}}})])}))],1)])},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},b23d:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{title:"Hello",userName:"张三",loginID:"1008687788",integral:"100",Height:"",Imag:[{Id:1,imgs:"../../static/img/u1.jpg"},{Id:2,imgs:"../../static/img/u2.jpg"},{Id:3,imgs:"../../static/img/u3.jpg"},{Id:4,imgs:"../../static/img/u4.jpg"}]}},onLoad:function(){},methods:{GetGame:function(){t.navigateTo({url:"../game/game"})},setHeight:function(){var t=document.getElementsByClassName("getWidth");this.Height=t[0].offsetWidth},begin:function(e,i){console.log(e,i);t.redirectTo({url:"../load/load"})}}};e.default=i}).call(this,i("6e42")["default"])},c5ae:function(t,e,i){"use strict";var a=i("fa48"),n=i.n(a);n.a},fa48:function(t,e,i){},ffe0:function(t,e,i){"use strict";i.r(e);var a=i("b23d"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a}},[["027b","common/runtime","common/vendor"]]]);