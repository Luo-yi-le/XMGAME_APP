var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  


__wxAppCode__['app.json']={"pages":["pages/login/login","pages/index/index","pages/user/user","pages/load/load","pages/play/play","pages/over/over","pages/register/register","pages/record/record","pages/roomGet/roomGet"],"subPackages":[],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"usingComponents":{},"tabBar":{"color":"#8F8F94","selectedColor":"#11cd6e","borderStyle":"black","list":[{"selectedIconPath":"static/icon/home.png","iconPath":"static/icon/home1.png","pagePath":"pages/index/index","text":"首页"},{"selectedIconPath":"static/icon/me.png","iconPath":"static/icon/me1.png","pagePath":"pages/user/user","text":"用户"}]},"splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"Game02","compilerVersion":"1.9.4"};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['pages/index/index.json']={"usingComponents":{},"navigationBarTitleText":"游戏首页"};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/load/load.json']={"usingComponents":{},"navigationBarTitleText":"加载页","titleNView":false};
__wxAppCode__['pages/load/load.wxml']=$gwx('./pages/load/load.wxml');

__wxAppCode__['pages/login/login.json']={"usingComponents":{},"navigationBarTitleText":"登录","titleNView":false};
__wxAppCode__['pages/login/login.wxml']=$gwx('./pages/login/login.wxml');

__wxAppCode__['pages/over/over.json']={"usingComponents":{},"navigationBarTitleText":"结束页","titleNView":false};
__wxAppCode__['pages/over/over.wxml']=$gwx('./pages/over/over.wxml');

__wxAppCode__['pages/play/play.json']={"usingComponents":{},"navigationBarTitleText":"游戏页","titleNView":false};
__wxAppCode__['pages/play/play.wxml']=$gwx('./pages/play/play.wxml');

__wxAppCode__['pages/record/record.json']={"usingComponents":{},"navigationBarTitleText":"所有游戏记录"};
__wxAppCode__['pages/record/record.wxml']=$gwx('./pages/record/record.wxml');

__wxAppCode__['pages/register/register.json']={"usingComponents":{},"navigationBarTitleText":"注册页"};
__wxAppCode__['pages/register/register.wxml']=$gwx('./pages/register/register.wxml');

__wxAppCode__['pages/roomGet/roomGet.json']={"usingComponents":{},"navigationBarTitleText":"单条记录"};
__wxAppCode__['pages/roomGet/roomGet.wxml']=$gwx('./pages/roomGet/roomGet.wxml');

__wxAppCode__['pages/user/user.json']={"usingComponents":{},"navigationBarTitleText":"用户信息","titleNView":{"buttons":[{"text":"我的","fontSize":"14","float":"left"},{"text":"设置","fontSize":"14","float":"right"}]}};
__wxAppCode__['pages/user/user.wxml']=$gwx('./pages/user/user.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"4e76":function(n,t,e){"use strict";var r=e("ff9a"),u=e.n(r);u.a},"8b93":function(n,t,e){"use strict";e.r(t);var r=e("dd28");for(var u in r)"default"!==u&&function(n){e.d(t,n,function(){return r[n]})}(u);e("4e76");var o,f,c=e("2877"),a=Object(c["a"])(r["default"],o,f,!1,null,null,null);t["default"]=a.exports},c6c7:function(n,t,e){},dd28:function(n,t,e){"use strict";e.r(t);var r=e("c6c7"),u=e.n(r);for(var o in r)"default"!==o&&function(n){e.d(t,n,function(){return r[n]})}(o);t["default"]=u.a},f7f3:function(n,t,e){"use strict";e("7f50");var r=o(e("f3d3")),u=o(e("8b93"));function o(n){return n&&n.__esModule?n:{default:n}}function f(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.forEach(function(t){c(n,t,e[t])})}return n}function c(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}r.default.config.productionTip=!1,u.default.mpType="app";var a=new r.default(f({},u.default));a.$mount()},ff9a:function(n,t,e){}},[["f7f3","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function r(r) {
    for (var n, l, i = r[0], a = r[1], f = r[2], p = 0, s = []; p < i.length; p++) {
      l = i[p], o[l] && s.push(o[l][0]), o[l] = 0;
    }

    for (n in a) {
      Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    }

    c && c(r);

    while (s.length) {
      s.shift()();
    }

    return u.push.apply(u, f || []), t();
  }

  function t() {
    for (var e, r = 0; r < u.length; r++) {
      for (var t = u[r], n = !0, i = 1; i < t.length; i++) {
        var a = t[i];
        0 !== o[a] && (n = !1);
      }

      n && (u.splice(r--, 1), e = l(l.s = t[0]));
    }

    return e;
  }

  var n = {},
      o = {
    "common/runtime": 0
  },
      u = [];

  function l(r) {
    if (n[r]) return n[r].exports;
    var t = n[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(t.exports, t, t.exports, l), t.l = !0, t.exports;
  }

  l.m = e, l.c = n, l.d = function (e, r, t) {
    l.o(e, r) || Object.defineProperty(e, r, {
      enumerable: !0,
      get: t
    });
  }, l.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, l.t = function (e, r) {
    if (1 & r && (e = l(e)), 8 & r) return e;
    if (4 & r && "object" === typeof e && e && e.__esModule) return e;
    var t = Object.create(null);
    if (l.r(t), Object.defineProperty(t, "default", {
      enumerable: !0,
      value: e
    }), 2 & r && "string" != typeof e) for (var n in e) {
      l.d(t, n, function (r) {
        return e[r];
      }.bind(null, n));
    }
    return t;
  }, l.n = function (e) {
    var r = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return l.d(r, "a", r), r;
  }, l.o = function (e, r) {
    return Object.prototype.hasOwnProperty.call(e, r);
  }, l.p = "/";
  var i = global["webpackJsonp"] = global["webpackJsonp"] || [],
      a = i.push.bind(i);
  i.push = r, i = i.slice();

  for (var f = 0; f < i.length; f++) {
    r(i[f]);
  }

  var c = a;
  t();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"13f5":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.RecordList=e.wsuri=e.getGames=e.updateIntegral=e.AddRecord=e.UpdateRecord=e.GetRecords=e.GetTopic=e.GetRecordInfo=e.userInfo=e.registerUser=e.loginUser=e.baseUrl=void 0;var r="http://localhost:60996";e.baseUrl=r;var o=r+"/Login/login";e.loginUser=o;var i=r+"/Login/Register";e.registerUser=i;var a=r+"/User/GetUserInfo";e.userInfo=a;var s=r+"/Record/GetRecordInfo";e.GetRecordInfo=s;var c=r+"/Game/GetTopic";e.GetTopic=c;var u=r+"/Record/GetRecords";e.GetRecords=u;var f=r+"/Record/UpdateRecord";e.UpdateRecord=f;var p=r+"/Record/AddRecord";e.AddRecord=p;var l=r+"/User/UpdateIntegral";e.updateIntegral=l;var d=r+"/Game/GetGames";e.getGames=d;var h="ws://172.16.31.232:4000";e.wsuri=h;var v="";e.RecordList=v},2877:function(t,e,n){"use strict";function r(t,e,n,r,o,i,a,s){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),a?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=c):o&&(c=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(u.functional){u._injectStyles=c;var f=u.render;u.render=function(t,e){return c.call(e),f(t,e)}}else{var p=u.beforeCreate;u.beforeCreate=p?[].concat(p,c):[c]}return{exports:t,options:u}}n.d(e,"a",function(){return r})},"6e42":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=gt,e.createPage=wt,e.createComponent=At,e.default=void 0;var r=o(n("f3d3"));function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a=Object.prototype.toString,s=Object.prototype.hasOwnProperty;function c(t){return"function"===typeof t}function u(t){return"string"===typeof t}function f(t){return"[object Object]"===a.call(t)}function p(t,e){return s.call(t,e)}function l(){}function d(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var h=/-(\w)/g,v=d(function(t){return t.replace(h,function(t,e){return e?e.toUpperCase():""})}),_=/requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$/,y=/^create|Manager$/,m=/^on/;function g(t){return y.test(t)}function $(t){return _.test(t)}function b(t){return m.test(t)}function w(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function x(t){return!(g(t)||$(t)||b(t))}function A(t,e){return x(t)?function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return c(t.success)||c(t.fail)||c(t.complete)?e.apply(void 0,[t].concat(r)):w(new Promise(function(n,o){e.apply(void 0,[Object.assign({},t,{success:n,fail:o})].concat(r)),Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})}}))}:e}var O=1e-4,k=750,C=!1,S=0,P=0;function j(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,r=t.windowWidth;S=r,P=n,C="ios"===e}function I(t,e){if(0===S&&j(),t=Number(t),0===t)return 0;var n=t/k*(e||S);return n<0&&(n=-n),n=Math.floor(n+O),0===n?1!==P&&C?.5:1:t<0?-n:n}var E={},T=["success","fail","cancel","complete"];function D(t,e,n){return function(r){return e(R(t,r,n))}}function N(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(f(e)){var i=!0===o?e:{};for(var a in c(n)&&(n=n(e,i)||{}),e)if(p(n,a)){var s=n[a];c(s)&&(s=s(e[a],e,i)),s?u(s)?i[s]=e[a]:f(s)&&(i[s.name?s.name:a]=s.value):console.warn("app-plus ".concat(t,"暂不支持").concat(a))}else-1!==T.indexOf(a)?i[a]=D(t,e[a],r):o||(i[a]=e[a]);return i}return c(e)&&(e=D(t,e,r)),e}function R(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return c(E.returnValue)&&(e=E.returnValue(t,e)),N(t,e,n,{},r)}function M(t,e){if(p(E,t)){var n=E[t];return n?function(e,r){var o=n;c(n)&&(o=n(e)),e=N(t,e,o.args,o.returnValue);var i=wx[o.name||t](e,r);return $(t)?R(t,i,o.returnValue,g(t)):i}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var B=Object.create(null),U=["subscribePush","unsubscribePush","onPush","offPush","share"];function L(t){return function(e){var n=e.fail,r=e.complete,o={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};c(n)&&n(o),c(r)&&r(o)}}function V(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}U.forEach(function(t){B[t]=L(t)});var W=Object.freeze({requireNativePlugin:V}),F=Page,H=Component,G=/:/g,z=d(function(t){return v(t.replace(G,"-"))});function J(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return e.apply(t,[z(n)].concat(o))}}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e="onLoad",n=t[e];return t[e]=n?function(){J(this);for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return n.apply(this,e)}:function(){J(this)},F(t)};var q=Behavior({created:function(){J(this)}});Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(t.behaviors||(t.behaviors=[])).unshift(q),H(t)};var K=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function X(t,e){t.triggerEvent("__l",t.$vm||e,{bubbles:!0,composed:!0})}function Z(t){t.detail.$mp?t.detail.$parent||(t.detail.$parent=this.$vm,t.detail.$parent.$children.push(t.detail),t.detail.$root=this.$vm.$root):t.detail.parent||(t.detail.parent=this.$vm)}function Q(t){Y(t)}function Y(t){t.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))}}function tt(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){p(n,e)&&(t[e]=n[e])})}function et(t,e){e.forEach(function(e){t[e]=function(t){return this.$vm.__call_hook(e,t)}})}function nt(t,e){var n=t.data||{},r=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(o){Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(o){}return f(n)||(n={}),Object.keys(r).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||p(n,t)||(n[t]=r[t])}),n}var rt=[String,Number,Boolean,Object,Array,null];function ot(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function it(t){var e=t["behaviors"],n=t["extends"],r=t["mixins"],o=t["props"];o||(t["props"]=o=[]);var i=[];return Array.isArray(e)&&e.forEach(function(t){i.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(o)?(o.push("name"),o.push("value")):(o["name"]=String,o["value"]=null))}),f(n)&&n.props&&i.push(Behavior({properties:st(n.props,!0)})),Array.isArray(r)&&r.forEach(function(t){f(t)&&t.props&&i.push(Behavior({properties:st(t.props,!0)}))}),i}function at(t,e,n,r){return Array.isArray(e)&&1===e.length?e[0]:e}function st(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r={};return e||(r.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){r[t]={type:null,observer:ot(t)}}):f(t)&&Object.keys(t).forEach(function(e){var o=t[e];if(f(o)){var i=o["default"];c(i)&&(i=i()),o.type=at(e,o.type,i,n),r[e]={type:-1!==rt.indexOf(o.type)?o.type:null,value:i,observer:ot(e)}}else{var a=at(e,o,null,n);r[e]={type:-1!==rt.indexOf(a)?a:null,observer:ot(e)}}}),r}function ct(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=l,t.preventDefault=l,t.target=t.target||{},p(t,"detail")||(t.detail={}),f(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function ut(t,e){var n=t;return e.forEach(function(e){var r=e[0],o=e[2];if(r||"undefined"!==typeof o){var i=e[1],a=e[3],s=r?t.__get_value(r,n):n;Number.isInteger(s)?n=o:i?Array.isArray(s)?n=s.find(function(e){return t.__get_value(i,e)===o}):f(s)?n=Object.keys(s).find(function(e){return t.__get_value(i,s[e])===o}):console.error("v-for 暂不支持循环数据：",s):n=s[o],a&&(n=t.__get_value(a,n))}}),n}function ft(t,e,n){var r={};return Array.isArray(e)&&e.length&&e.forEach(function(e,o){"string"===typeof e?e?"$event"===e?r["$"+o]=n:0===e.indexOf("$event.")?r["$"+o]=t.__get_value(e.replace("$event.",""),n):r["$"+o]=t.__get_value(e):r["$"+o]=t:r["$"+o]=ut(t,e)}),r}function pt(t){for(var e={},n=1;n<t.length;n++){var r=t[n];e[r[0]]=r[1]}return e}function lt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,a=!1;if(o&&(a=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return a?[e]:e.detail.__args__||e.detail;var s=ft(t,r,e),c=[];return n.forEach(function(t){"$event"===t?"__set_model"!==i||o?o&&!a?c.push(e.detail.__args__[0]):c.push(e):c.push(e.target.value):Array.isArray(t)&&"o"===t[0]?c.push(pt(t)):"string"===typeof t&&p(s,t)?c.push(s[t]):c.push(t)}),c}var dt="~",ht="^";function vt(t){var e=this;t=ct(t);var n=(t.currentTarget||t.target).dataset.eventOpts;if(!n)return console.warn("事件信息不存在");var r=t.type;n.forEach(function(n){var o=n[0],i=n[1],a=o.charAt(0)===ht;o=a?o.slice(1):o;var s=o.charAt(0)===dt;o=s?o.slice(1):o,i&&r===o&&i.forEach(function(n){var r=n[0];if(r){var o=e.$vm[r];if(!c(o))throw new Error(" _vm.".concat(r," is not a function"));if(s){if(o.once)return;o.once=!0}o.apply(e.$vm,lt(e.$vm,t,n[1],n[2],a,r))}})})}function _t(t){var e=t.$mp[t.mpType];Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var r=e.selectAllComponents(".vue-ref-in-for");return r.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}var yt=["onHide","onError","onPageNotFound","onUniNViewMessage"];function mt(t){this.$vm||(this.$vm=t,this.$vm.$mp={app:this})}function gt(t){r.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=i({data:{}},this.mpType,this.$options.mpInstance),delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(_t(this),tt(this,K)))},created:function(){this.__init_injections(this),this.__init_provide(this)}});var e={onLaunch:function(e){mt.call(this,t),this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onLaunch",e)},onShow:function(e){mt.call(this,t),this.$vm.__call_hook("onShow",e)}};return e.globalData=t.$options.globalData||{},et(e,yt),App(e),t}var $t=["onShow","onHide","onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap","onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function bt(t){this.$vm||(this.$vm=new t({mpType:"page",mpInstance:this}),this.$vm.__call_hook("created"),this.$vm.$mount())}function wt(t){var e;t=t.default||t,c(t)?(e=t,t=e.extendOptions):e=r.default.extend(t);var n={options:{multipleSlots:!0,addGlobalClass:!0},data:nt(t,r.default.prototype),lifetimes:{attached:function(){bt.call(this,e)},ready:function(){this.$vm.__call_hook("beforeMount"),this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady")},detached:function(){this.$vm.$destroy()}},methods:{onLoad:function(t){bt.call(this,e),this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},onUnload:function(){this.$vm.__call_hook("onUnload")},__e:vt,__l:Z}};return et(n.methods,$t),Q(n),Component(n)}function xt(t){if(!this.$vm){var e={mpType:"component",mpInstance:this,propsData:this.properties};this.$vm=new t(e);var n=this.properties.vueSlots;if(Array.isArray(n)&&n.length){var r=Object.create(null);n.forEach(function(t){r[t]=!0}),this.$vm.$scopedSlots=this.$vm.$slots=r}this.$vm.$mount()}}function At(t){t=t.default||t;var e=it(t),n=st(t.props,!1,t.__file),o=r.default.extend(t),i={options:{multipleSlots:!0,addGlobalClass:!0},data:nt(t,r.default.prototype),behaviors:e,properties:n,lifetimes:{attached:function(){xt.call(this,o)},ready:function(){xt.call(this,o),X(this),this.$vm.__call_hook("created"),this.$vm.__call_hook("beforeMount"),this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady")},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__e:vt,__l:Z}};return Y(i),Component(i)}var Ot={};"undefined"!==typeof Proxy?Ot=new Proxy({},{get:function(t,e){return"upx2px"===e?I:W[e]?A(e,W[e]):p(wx,e)||p(E,e)?A(e,M(e,wx[e])):void 0}}):(Ot.upx2px=I,Object.keys(W).forEach(function(t){Ot[t]=A(t,W[t])}),Object.keys(wx).forEach(function(t){(p(wx,t)||p(E,t))&&(Ot[t]=A(t,M(t,wx[t])))}));var kt=Ot,Ct=kt;e.default=Ct},"7f50":function(t,e,n){},b0ce:function(t,e,n){"use strict";n.r(e);var r=n("f3d3"),o=n.n(r);function i(t,e,n){var r,o=t.$options[e];if("onError"===e&&o&&(o=[o]),"function"===typeof o&&(o=[o]),o)for(var a=0,s=o.length;a<s;a++)r=o[a].call(t,n);return t._hasHookEvent&&t.$emit("hook:"+e),t.$children.length&&t.$children.forEach(function(t){return i(t,e,n)}),r}function a(t){return t.$vm.$root}e["default"]=function(t){return{data:{$root:{}},onLoad:function(e){var n=new o.a(t);this.$vm=n;var r=n.$root;r.__wxExparserNodeId__=this.__wxExparserNodeId__,r.__wxWebviewId__=this.__wxWebviewId__,r.$mp||(r.$mp={});var i=r.$mp;i.mpType="page",i.page=this,i.query=e,i.status="load",n.$mount()},handleProxy:function(t){var e=a(this);return e.$handleProxyWithVue(t)},onShow:function(){var t=a(this),e=t.$mp;e.status="show",i(t,"onShow"),t.$nextTick(function(){t._initDataToMP()})},onReady:function(){var t=a(this),e=t.$mp;e.status="ready",i(t,"onReady")},onHide:function(){var t=a(this),e=t.$mp;e.status="hide",i(t,"onHide")},onUnload:function(){var t=a(this);i(t,"onUnload"),t.$destroy()},onPullDownRefresh:function(){var t=a(this);i(t,"onPullDownRefresh")},onReachBottom:function(){var t=a(this);i(t,"onReachBottom")},onPageScroll:function(t){var e=a(this);i(e,"onPageScroll",t)},onTabItemTap:function(t){var e=a(this);i(e,"onTabItemTap",t)},onShareAppMessage:t.onShareAppMessage?function(t){var e=a(this);return i(e,"onShareAppMessage",t)}:null,onNavigationBarButtonTap:function(t){var e=a(this);i(e,"onNavigationBarButtonTap",t)},onNavigationBarSearchInputChanged:function(t){var e=a(this);i(e,"onNavigationBarSearchInputChanged",t)},onNavigationBarSearchInputConfirmed:function(t){var e=a(this);i(e,"onNavigationBarSearchInputConfirmed",t)},onNavigationBarSearchInputClicked:function(t){var e=a(this);i(e,"onNavigationBarSearchInputClicked",t)},onBackPress:function(t){var e=a(this);return i(e,"onBackPress",t)},$getAppWebview:function(t){return plus.webview.getWebviewById(""+this.__wxWebviewId__)}}}},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},f3d3:function(t,e,n){(function(e){try{e||(e={}),e.process=e.process||{},e.process.env=e.process.env||{},e.App=e.App||App,e.Page=e.Page||Page,e.Component=e.Component||Component,e.getApp=e.getApp||getApp}catch(n){}(function(e,n){t.exports=n()})(0,function(){"use strict";function t(e,n,r,o){if(r!==o&&void 0!==r)if(null==r||null==o||typeof r!==typeof o)e[n]=r;else if(Array.isArray(r)&&Array.isArray(o))if(r.length===o.length)for(var i=0,a=r.length;i<a;++i)t(e,n+"["+i+"]",r[i],o[i]);else e[n]=r;else if("object"===typeof r&&"object"===typeof o){var s=Object.keys(r),c=Object.keys(o);if(s.length!==c.length)e[n]=r;else{var u=Object.create(null);for(i=0,a=s.length;i<a;++i)u[s[i]]=!0,u[c[i]]=!0;if(Object.keys(u).length!==s.length)e[n]=r;else for(i=0,a=s.length;i<a;++i){var f=s[i];t(e,n+"."+f,r[f],o[f])}}}else r!==o&&(e[n]=r)}function r(e,n){for(var r=Object.keys(e),o={},i=0,a=r.length;i<a;++i){for(var s=r[i],c=s.split("."),u=n[c[0]],f=1,p=c.length;f<p&&void 0!==u;++f)u=u[c[f]];t(o,s,e[s],u)}return o}function o(t){return void 0===t||null===t}function i(t){return void 0!==t&&null!==t}function a(t){return!0===t}function s(t){return!1===t}function c(t){return"string"===typeof t||"number"===typeof t}function u(t){return null!==t&&"object"===typeof t}var f=Object.prototype.toString;function p(t){return"[object Object]"===f.call(t)}function l(t){return"[object RegExp]"===f.call(t)}function d(t){var e=parseFloat(t);return e>=0&&Math.floor(e)===e&&isFinite(t)}function h(t){return null==t?"":"object"===typeof t?JSON.stringify(t,null,2):String(t)}function v(t){var e=parseFloat(t);return isNaN(e)?t:e}function _(t,e){for(var n=Object.create(null),r=t.split(","),o=0;o<r.length;o++)n[r[o]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}_("slot,component",!0);var y=_("key,ref,slot,is");function m(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var g=Object.prototype.hasOwnProperty;function $(t,e){return g.call(t,e)}function b(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var w=/-(\w)/g,x=b(function(t){return t.replace(w,function(t,e){return e?e.toUpperCase():""})}),A=b(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),O=/([^-])([A-Z])/g,k=b(function(t){return t.replace(O,"$1-$2").replace(O,"$1-$2").toLowerCase()});function C(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function S(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function P(t,e){for(var n in e)t[n]=e[n];return t}function j(t){for(var e={},n=0;n<t.length;n++)t[n]&&P(e,t[n]);return e}function I(t,e,n){}var E=function(t,e,n){return!1},T=function(t){return t};function D(t,e){var r=u(t),o=u(e);if(!r||!o)return!r&&!o&&String(t)===String(e);try{return JSON.stringify(t)===JSON.stringify(e)}catch(n){return t===e}}function N(t,e){for(var n=0;n<t.length;n++)if(D(t[n],e))return n;return-1}function R(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var M="data-server-rendered",B=["component","directive","filter"],U=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","onLaunch","onLoad","onShow","onReady","onHide","onUnload","onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onTabItemTap","attached","ready","moved","detached","onUniNViewMessage","onNavigationBarButtonTap","onBackPress"],L={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:E,isReservedAttr:E,isUnknownElement:E,getTagNamespace:I,parsePlatformTagName:T,mustUseProp:E,_lifecycleHooks:U},V=Object.freeze({});function W(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function F(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var H=/[^\w.$]/;function G(t){if(!H.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var z=I;function J(t,e,n){if(L.errorHandler)L.errorHandler.call(null,t,e,n);else{if(!X||"undefined"===typeof console)throw t;console.error(t)}}var q,K="__proto__"in{},X="undefined"!==typeof window,Z=["mpvue-runtime"].join(),Q=(Z&&/msie|trident/.test(Z),Z&&Z.indexOf("msie 9.0"),Z&&Z.indexOf("edge/")>0),Y=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)),tt=(Z&&/chrome\/\d+/.test(Z),{}.watch);if(X)try{var et={};Object.defineProperty(et,"passive",{get:function(){!0}}),window.addEventListener("test-passive",null,et)}catch(n){}var nt=function(){return void 0===q&&(q=!X&&"undefined"!==typeof e&&"server"===e["process"].env.VUE_ENV),q},rt=X&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ot(t){return"function"===typeof t&&/native code/.test(t.toString())}var it,at="undefined"!==typeof Symbol&&ot(Symbol)&&"undefined"!==typeof Reflect&&ot(Reflect.ownKeys),st=function(){var t,e=[],r=!1;function o(){r=!1;var t=e.slice(0);e.length=0;for(var n=0;n<t.length;n++)t[n]()}if("undefined"!==typeof Promise&&ot(Promise)){var i=Promise.resolve(),a=function(t){console.error(t)};t=function(){i.then(o).catch(a),Y&&setTimeout(I)}}else t=function(){setTimeout(o,0)};return function(o,i){var a;if(e.push(function(){if(o)try{o.call(i)}catch(n){J(n,i,"nextTick")}else a&&a(i)}),r||(r=!0,t()),!o&&"undefined"!==typeof Promise)return new Promise(function(t,e){a=t})}}();it="undefined"!==typeof Set&&ot(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ct=0,ut=function(){this.id=ct++,this.subs=[]};ut.prototype.addSub=function(t){this.subs.push(t)},ut.prototype.removeSub=function(t){m(this.subs,t)},ut.prototype.depend=function(){ut.target&&ut.target.addDep(this)},ut.prototype.notify=function(){for(var t=this.subs.slice(),e=0,n=t.length;e<n;e++)t[e].update()},ut.target=null;var ft=[];function pt(t){ut.target&&ft.push(ut.target),ut.target=t}function lt(){ut.target=ft.pop()}var dt=Array.prototype,ht=Object.create(dt);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(t){var e=dt[t];F(ht,t,function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var o,i=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":o=n;break;case"splice":o=n.slice(2);break}return o&&a.observeArray(o),a.dep.notify(),i})});var vt=Object.getOwnPropertyNames(ht),_t={shouldConvert:!0},yt=function(t){if(this.value=t,this.dep=new ut,this.vmCount=0,F(t,"__ob__",this),Array.isArray(t)){var e=K?mt:gt;e(t,ht,vt),this.observeArray(t)}else this.walk(t)};function mt(t,e,n){t.__proto__=e}function gt(t,e,n){for(var r=0,o=n.length;r<o;r++){var i=n[r];F(t,i,e[i])}}function $t(t,e){var n;if(u(t))return $(t,"__ob__")&&t.__ob__ instanceof yt?n=t.__ob__:_t.shouldConvert&&!nt()&&(Array.isArray(t)||p(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new yt(t)),e&&n&&n.vmCount++,n}function bt(t,e,n,r,o){var i=new ut,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,c=a&&a.set,u=!o&&$t(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return ut.target&&(i.depend(),u&&u.dep.depend(),Array.isArray(e)&&At(e)),e},set:function(e){var r=s?s.call(t):n;e===r||e!==e&&r!==r||(c?c.call(t,e):n=e,u=!o&&$t(e),i.notify())}})}}function wt(t,e,n){if(Array.isArray(t)&&d(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if($(t,e))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(bt(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function xt(t,e){if(Array.isArray(t)&&d(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||$(t,e)&&(delete t[e],n&&n.dep.notify())}}function At(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&At(e)}yt.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)bt(t,e[n],t[e[n]])},yt.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)$t(t[e])};var Ot=L.optionMergeStrategies;function kt(t,e){if(!e)return t;for(var n,r,o,i=Object.keys(e),a=0;a<i.length;a++)n=i[a],r=t[n],o=e[n],$(t,n)?p(r)&&p(o)&&kt(r,o):wt(t,n,o);return t}function Ct(t,e,n){return n?t||e?function(){var r="function"===typeof e?e.call(n):e,o="function"===typeof t?t.call(n):void 0;return r?kt(r,o):o}:void 0:e?t?function(){return kt("function"===typeof e?e.call(this):e,t.call(this))}:e:t}function St(t,e){return e?t?t.concat(e):Array.isArray(e)?e:[e]:t}function Pt(t,e){var n=Object.create(t||null);return e?P(n,e):n}Ot.data=function(t,e,n){return n?Ct(t,e,n):e&&"function"!==typeof e?t:Ct.call(this,t,e)},U.forEach(function(t){Ot[t]=St}),B.forEach(function(t){Ot[t+"s"]=Pt}),Ot.watch=function(t,e){if(t===tt&&(t=void 0),e===tt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var n={};for(var r in P(n,t),e){var o=n[r],i=e[r];o&&!Array.isArray(o)&&(o=[o]),n[r]=o?o.concat(i):Array.isArray(i)?i:[i]}return n},Ot.props=Ot.methods=Ot.inject=Ot.computed=function(t,e){if(!e)return Object.create(t||null);if(!t)return e;var n=Object.create(null);return P(n,t),P(n,e),n},Ot.provide=Ct;var jt=function(t,e){return void 0===e?t:e};function It(t){var e=t.props;if(e){var n,r,o,i={};if(Array.isArray(e)){n=e.length;while(n--)r=e[n],"string"===typeof r&&(o=x(r),i[o]={type:null})}else if(p(e))for(var a in e)r=e[a],o=x(a),i[o]=p(r)?r:{type:r};t.props=i}}function Et(t){var e=t.inject;if(Array.isArray(e))for(var n=t.inject={},r=0;r<e.length;r++)n[e[r]]=e[r]}function Tt(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Dt(t,e,n){"function"===typeof e&&(e=e.options),It(e),Et(e),Tt(e);var r=e.extends;if(r&&(t=Dt(t,r,n)),e.mixins)for(var o=0,i=e.mixins.length;o<i;o++)t=Dt(t,e.mixins[o],n);var a,s={};for(a in t)c(a);for(a in e)$(t,a)||c(a);function c(r){var o=Ot[r]||jt;s[r]=o(t[r],e[r],n,r)}return s}function Nt(t,e,n,r){if("string"===typeof n){var o=t[e];if($(o,n))return o[n];var i=x(n);if($(o,i))return o[i];var a=A(i);if($(o,a))return o[a];var s=o[n]||o[i]||o[a];return s}}function Rt(t,e,n,r){var o=e[t],i=!$(n,t),a=n[t];if(Ut(Boolean,o.type)&&(i&&!$(o,"default")?a=!1:Ut(String,o.type)||""!==a&&a!==k(t)||(a=!0)),void 0===a){a=Mt(r,o,t);var s=_t.shouldConvert;_t.shouldConvert=!0,$t(a),_t.shouldConvert=s}return a}function Mt(t,e,n){if($(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==Bt(e.type)?r.call(t):r}}function Bt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Ut(t,e){if(!Array.isArray(e))return Bt(e)===Bt(t);for(var n=0,r=e.length;n<r;n++)if(Bt(e[n])===Bt(t))return!0;return!1}var Lt=function(t,e,n,r,o,i,a,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=o,this.ns=void 0,this.context=i,this.functionalContext=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},Vt={child:{}};Vt.child.get=function(){return this.componentInstance},Object.defineProperties(Lt.prototype,Vt);var Wt=function(t){void 0===t&&(t="");var e=new Lt;return e.text=t,e.isComment=!0,e};function Ft(t){return new Lt(void 0,void 0,void 0,String(t))}function Ht(t){var e=new Lt(t.tag,t.data,t.children,t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.isCloned=!0,e}function Gt(t){for(var e=t.length,n=new Array(e),r=0;r<e;r++)n[r]=Ht(t[r]);return n}var zt,Jt=b(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}});function qt(t){function e(){var t=arguments,n=e.fns;if(!Array.isArray(n))return n.apply(null,arguments);for(var r=n.slice(),o=0;o<r.length;o++)r[o].apply(null,t)}return e.fns=t,e}function Kt(t,e,n,r,i){var a,s,c,u;for(a in t)s=t[a],c=e[a],u=Jt(a),o(s)||(o(c)?(o(s.fns)&&(s=t[a]=qt(s)),n(u.name,s,u.once,u.capture,u.passive)):s!==c&&(c.fns=s,t[a]=c));for(a in e)o(t[a])&&(u=Jt(a),r(u.name,e[a],u.capture))}function Xt(t,e,n){var r=e.options.props;if(!o(r)){var a={},s=t.attrs,c=t.props;if(i(s)||i(c))for(var u in r){var f=k(u);Zt(a,c,u,f,!0)||Zt(a,s,u,f,!1)}return a}}function Zt(t,e,n,r,o){if(i(e)){if($(e,n))return t[n]=e[n],o||delete e[n],!0;if($(e,r))return t[n]=e[r],o||delete e[r],!0}return!1}function Qt(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function Yt(t){return c(t)?[Ft(t)]:Array.isArray(t)?ee(t):void 0}function te(t){return i(t)&&i(t.text)&&s(t.isComment)}function ee(t,e){var n,r,s,u=[];for(n=0;n<t.length;n++)r=t[n],o(r)||"boolean"===typeof r||(s=u[u.length-1],Array.isArray(r)?u.push.apply(u,ee(r,(e||"")+"_"+n)):c(r)?te(s)?s.text+=String(r):""!==r&&u.push(Ft(r)):te(r)&&te(s)?u[u.length-1]=Ft(s.text+r.text):(a(t._isVList)&&i(r.tag)&&o(r.key)&&i(e)&&(r.key="__vlist"+e+"_"+n+"__"),u.push(r)));return u}function ne(t,e){return t.__esModule&&t.default&&(t=t.default),u(t)?e.extend(t):t}function re(t,e,n,r,o){var i=Wt();return i.asyncFactory=t,i.asyncMeta={data:e,context:n,children:r,tag:o},i}function oe(t,e,n){if(a(t.error)&&i(t.errorComp))return t.errorComp;if(i(t.resolved))return t.resolved;if(a(t.loading)&&i(t.loadingComp))return t.loadingComp;if(!i(t.contexts)){var r=t.contexts=[n],s=!0,c=function(){for(var t=0,e=r.length;t<e;t++)r[t].$forceUpdate()},f=R(function(n){t.resolved=ne(n,e),s||c()}),p=R(function(e){i(t.errorComp)&&(t.error=!0,c())}),l=t(f,p);return u(l)&&("function"===typeof l.then?o(t.resolved)&&l.then(f,p):i(l.component)&&"function"===typeof l.component.then&&(l.component.then(f,p),i(l.error)&&(t.errorComp=ne(l.error,e)),i(l.loading)&&(t.loadingComp=ne(l.loading,e),0===l.delay?t.loading=!0:setTimeout(function(){o(t.resolved)&&o(t.error)&&(t.loading=!0,c())},l.delay||200)),i(l.timeout)&&setTimeout(function(){o(t.resolved)&&p(null)},l.timeout))),s=!1,t.loading?t.loadingComp:t.resolved}t.contexts.push(n)}function ie(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(i(n)&&i(n.componentOptions))return n}}function ae(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&ue(t,e)}function se(t,e,n){n?zt.$once(t,e):zt.$on(t,e)}function ce(t,e){zt.$off(t,e)}function ue(t,e,n){zt=t,Kt(e,n||{},se,ce,t)}function fe(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this,o=this;if(Array.isArray(t))for(var i=0,a=t.length;i<a;i++)r.$on(t[i],n);else(o._events[t]||(o._events[t]=[])).push(n),e.test(t)&&(o._hasHookEvent=!0);return o},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this,r=this;if(!arguments.length)return r._events=Object.create(null),r;if(Array.isArray(t)){for(var o=0,i=t.length;o<i;o++)n.$off(t[o],e);return r}var a,s=r._events[t];if(!s)return r;if(1===arguments.length)return r._events[t]=null,r;var c=s.length;while(c--)if(a=s[c],a===e||a.fn===e){s.splice(c,1);break}return r},t.prototype.$emit=function(t){var e=this,r=e._events[t];if(r){r=r.length>1?S(r):r;for(var o=S(arguments,1),i=0,a=r.length;i<a;i++)try{r[i].apply(e,o)}catch(n){J(n,e,'event handler for "'+t+'"')}}return e}}function pe(t,e){var n={};if(!t)return n;for(var r=[],o=0,i=t.length;o<i;o++){var a=t[o];if(a.context!==e&&a.functionalContext!==e||!a.data||null==a.data.slot)r.push(a);else{var s=a.data.slot,c=n[s]||(n[s]=[]);"template"===a.tag?c.push.apply(c,a.children):c.push(a)}}return r.every(le)||(n.default=r),n}function le(t){return t.isComment||" "===t.text}function de(t,e){e=e||{};for(var n=0;n<t.length;n++)Array.isArray(t[n])?de(t[n],e):e[t[n].key]=t[n].fn;return e}var he=null;function ve(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function _e(t){t.prototype._update=function(t,e){var n=this;n._isMounted&&we(n,"beforeUpdate");var r=n.$el,o=n._vnode,i=he;he=n,n._vnode=t,o?n.$el=n.__patch__(o,t):(n.$el=n.__patch__(n.$el,t,e,!1,n.$options._parentElm,n.$options._refElm),n.$options._parentElm=n.$options._refElm=null),he=i,r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){we(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||m(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),we(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null)}}}function ye(t,e,n){var r;return t.$el=e,t.$options.render||(t.$options.render=Wt),we(t,"beforeMount"),r=function(){t._update(t._render(),n)},t._watcher=new Re(t,r,I),n=!1,null==t.$vnode&&(t._isMounted=!0,we(t,"mounted")),t}function me(t,e,n,r,o){var i=!!(o||t.$options._renderChildren||r.data.scopedSlots||t.$scopedSlots!==V);if(t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=o,t.$attrs=r.data&&r.data.attrs,t.$listeners=n,e&&t.$options.props){_t.shouldConvert=!1;for(var a=t._props,s=t.$options._propKeys||[],c=0;c<s.length;c++){var u=s[c];a[u]=Rt(u,t.$options.props,e,t)}_t.shouldConvert=!0,t.$options.propsData=e}if(n){var f=t.$options._parentListeners;t.$options._parentListeners=n,ue(t,n,f)}i&&(t.$slots=pe(o,r.context),t.$forceUpdate())}function ge(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function $e(t,e){if(e){if(t._directInactive=!1,ge(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)$e(t.$children[n]);we(t,"activated")}}function be(t,e){if((!e||(t._directInactive=!0,!ge(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)be(t.$children[n]);we(t,"deactivated")}}function we(t,e){var r=t.$options[e];if(r)for(var o=0,i=r.length;o<i;o++)try{r[o].call(t)}catch(n){J(n,t,e+" hook")}t._hasHookEvent&&t.$emit("hook:"+e)}var xe=[],Ae=[],Oe={},ke=!1,Ce=!1,Se=0;function Pe(){Se=xe.length=Ae.length=0,Oe={},ke=Ce=!1}function je(){var t,e;for(Ce=!0,xe.sort(function(t,e){return t.id-e.id}),Se=0;Se<xe.length;Se++)t=xe[Se],e=t.id,Oe[e]=null,t.run();var n=Ae.slice(),r=xe.slice();Pe(),Te(n),Ie(r),rt&&L.devtools&&rt.emit("flush")}function Ie(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&we(r,"updated")}}function Ee(t){t._inactive=!1,Ae.push(t)}function Te(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,$e(t[e],!0)}function De(t){var e=t.id;if(null==Oe[e]){if(Oe[e]=!0,Ce){var n=xe.length-1;while(n>Se&&xe[n].id>t.id)n--;xe.splice(n+1,0,t)}else xe.push(t);ke||(ke=!0,st(je))}}var Ne=0,Re=function(t,e,n,r){this.vm=t,t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Ne,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new it,this.newDepIds=new it,this.expression="","function"===typeof e?this.getter=e:(this.getter=G(e),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get()};Re.prototype.get=function(){var t;pt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(n){if(!this.user)throw n;J(n,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&Be(t),lt(),this.cleanupDeps()}return t},Re.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Re.prototype.cleanupDeps=function(){var t=this,e=this.deps.length;while(e--){var n=t.deps[e];t.newDepIds.has(n.id)||n.removeSub(t)}var r=this.depIds;this.depIds=this.newDepIds,this.newDepIds=r,this.newDepIds.clear(),r=this.deps,this.deps=this.newDeps,this.newDeps=r,this.newDeps.length=0},Re.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():De(this)},Re.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||u(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(n){J(n,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Re.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Re.prototype.depend=function(){var t=this,e=this.deps.length;while(e--)t.deps[e].depend()},Re.prototype.teardown=function(){var t=this;if(this.active){this.vm._isBeingDestroyed||m(this.vm._watchers,this);var e=this.deps.length;while(e--)t.deps[e].removeSub(t);this.active=!1}};var Me=new it;function Be(t){Me.clear(),Ue(t,Me)}function Ue(t,e){var n,r,o=Array.isArray(t);if((o||u(t))&&Object.isExtensible(t)){if(t.__ob__){var i=t.__ob__.dep.id;if(e.has(i))return;e.add(i)}if(o){n=t.length;while(n--)Ue(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)Ue(t[r[n]],e)}}}var Le={enumerable:!0,configurable:!0,get:I,set:I};function Ve(t,e,n){Le.get=function(){return this[e][n]},Le.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Le)}function We(t){t._watchers=[];var e=t.$options;e.props&&Fe(t,e.props),e.methods&&Xe(t,e.methods),e.data?He(t):$t(t._data={},!0),e.computed&&Je(t,e.computed),e.watch&&e.watch!==tt&&Ze(t,e.watch)}function Fe(t,e){var n=t.$options.propsData||{},r=t._props={},o=t.$options._propKeys=[],i=!t.$parent;_t.shouldConvert=i;var a=function(i){o.push(i);var a=Rt(i,e,n,t);bt(r,i,a),i in t||Ve(t,"_props",i)};for(var s in e)a(s);_t.shouldConvert=!0}function He(t){var e=t.$options.data;e=t._data="function"===typeof e?Ge(e,t):e||{},p(e)||(e={});var n=Object.keys(e),r=t.$options.props,o=(t.$options.methods,n.length);while(o--){var i=n[o];r&&$(r,i)||W(i)||Ve(t,"_data",i)}$t(e,!0)}function Ge(t,e){try{return t.call(e)}catch(n){return J(n,e,"data()"),{}}}var ze={lazy:!0};function Je(t,e){var n=t._computedWatchers=Object.create(null);for(var r in e){var o=e[r],i="function"===typeof o?o:o.get;n[r]=new Re(t,i,I,ze),r in t||qe(t,r,o)}}function qe(t,e,n){"function"===typeof n?(Le.get=Ke(e),Le.set=I):(Le.get=n.get?!1!==n.cache?Ke(e):n.get:I,Le.set=n.set?n.set:I),Object.defineProperty(t,e,Le)}function Ke(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),ut.target&&e.depend(),e.value}}function Xe(t,e){t.$options.props;for(var n in e)t[n]=null==e[n]?I:C(e[n],t)}function Ze(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var o=0;o<r.length;o++)Qe(t,n,r[o]);else Qe(t,n,r)}}function Qe(t,e,n,r){return p(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function Ye(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=wt,t.prototype.$delete=xt,t.prototype.$watch=function(t,e,n){var r=this;if(p(e))return Qe(r,t,e,n);n=n||{},n.user=!0;var o=new Re(r,t,e,n);return n.immediate&&e.call(r,o.value),function(){o.teardown()}}}function tn(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function en(t){var e=nn(t.$options.inject,t);e&&(_t.shouldConvert=!1,Object.keys(e).forEach(function(n){bt(t,n,e[n])}),_t.shouldConvert=!0)}function nn(t,e){if(t){for(var n=Object.create(null),r=at?Reflect.ownKeys(t):Object.keys(t),o=0;o<r.length;o++){var i=r[o],a=t[i],s=e;while(s){if(s._provided&&a in s._provided){n[i]=s._provided[a];break}s=s.$parent}0}return n}}function rn(t,e,n,r,o){var a={},s=t.options.props;if(i(s))for(var c in s)a[c]=Rt(c,s,e||{});else i(n.attrs)&&on(a,n.attrs),i(n.props)&&on(a,n.props);var u=Object.create(r),f=function(t,e,n,r){return vn(u,t,e,n,r,!0)},p=t.options.render.call(null,f,{data:n,props:a,children:o,parent:r,listeners:n.on||{},injections:nn(t.options.inject,r),slots:function(){return pe(o,r)}});return p instanceof Lt&&(p.functionalContext=r,p.functionalOptions=t.options,n.slot&&((p.data||(p.data={})).slot=n.slot)),p}function on(t,e){for(var n in e)t[x(n)]=e[n]}var an={init:function(t,e,n,r){if(!t.componentInstance||t.componentInstance._isDestroyed){var o=t.componentInstance=un(t,he,n,r);o.$mount(e?t.elm:void 0,e)}else if(t.data.keepAlive){var i=t;an.prepatch(i,i)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;me(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,we(n,"mounted")),t.data.keepAlive&&(e._isMounted?Ee(n):$e(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?be(e,!0):e.$destroy())}},sn=Object.keys(an);function cn(t,e,n,r,s){if(!o(t)){var c=n.$options._base;if(u(t)&&(t=c.extend(t)),"function"===typeof t){var f;if(o(t.cid)&&(f=t,t=oe(f,c,n),void 0===t))return re(f,e,n,r,s);e=e||{},Tn(t),i(e.model)&&ln(t.options,e);var p=Xt(e,t,s);if(a(t.options.functional))return rn(t,p,e,n,r);var l=e.on;if(a(t.options.abstract)){var d=e.slot;e={},d&&(e.slot=d)}fn(e);var h=t.options.name||s,v=new Lt("vue-component-"+t.cid+(h?"-"+h:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:p,listeners:l,tag:s,children:r},f);return v}}}function un(t,e,n,r){var o=t.componentOptions,a={_isComponent:!0,parent:e,propsData:o.propsData,_componentTag:o.tag,_parentVnode:t,_parentListeners:o.listeners,_renderChildren:o.children,_parentElm:n||null,_refElm:r||null},s=t.data.inlineTemplate;return i(s)&&(a.render=s.render,a.staticRenderFns=s.staticRenderFns),new o.Ctor(a)}function fn(t){t.hook||(t.hook={});for(var e=0;e<sn.length;e++){var n=sn[e],r=t.hook[n],o=an[n];t.hook[n]=r?pn(o,r):o}}function pn(t,e){return function(n,r,o,i){t(n,r,o,i),e(n,r,o,i)}}function ln(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.props||(e.props={}))[n]=e.model.value;var o=e.on||(e.on={});i(o[r])?o[r]=[e.model.callback].concat(o[r]):o[r]=e.model.callback}var dn=1,hn=2;function vn(t,e,n,r,o,i){return(Array.isArray(n)||c(n))&&(o=r,r=n,n=void 0),a(i)&&(o=hn),_n(t,e,n,r,o)}function _n(t,e,n,r,o){if(i(n)&&i(n.__ob__))return Wt();if(i(n)&&i(n.is)&&(e=n.is),!e)return Wt();var a,s,c;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),o===hn?r=Yt(r):o===dn&&(r=Qt(r)),"string"===typeof e)?(s=L.getTagNamespace(e),a=L.isReservedTag(e)?new Lt(L.parsePlatformTagName(e),n,r,void 0,void 0,t):i(c=Nt(t.$options,"components",e))?cn(c,n,t,r,e):new Lt(e,n,r,void 0,void 0,t)):a=cn(e,n,t,r);return i(a)?(s&&yn(a,s),a):Wt()}function yn(t,e){if(t.ns=e,"foreignObject"!==t.tag&&i(t.children))for(var n=0,r=t.children.length;n<r;n++){var a=t.children[n];i(a.tag)&&o(a.ns)&&yn(a,e)}}function mn(t,e){var n,r,o,a,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,o=t.length;r<o;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(u(t))for(a=Object.keys(t),n=new Array(a.length),r=0,o=a.length;r<o;r++)s=a[r],n[r]=e(t[s],s,r);return i(n)&&(n._isVList=!0),n}function gn(t,e,n,r){var o=this.$scopedSlots[t];if(o)return n=n||{},r&&(n=P(P({},r),n)),o(n)||e;var i=this.$slots[t];return i||e}function $n(t){return Nt(this.$options,"filters",t,!0)||T}function bn(t,e,n){var r=L.keyCodes[e]||n;return Array.isArray(r)?-1===r.indexOf(t):r!==t}function wn(t,e,n,r,o){if(n)if(u(n)){var i;Array.isArray(n)&&(n=j(n));var a=function(a){if("class"===a||"style"===a||y(a))i=t;else{var s=t.attrs&&t.attrs.type;i=r||L.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}if(!(a in i)&&(i[a]=n[a],o)){var c=t.on||(t.on={});c["update:"+a]=function(t){n[a]=t}}};for(var s in n)a(s)}else;return t}function xn(t,e){var n=this._staticTrees[t];return n&&!e?Array.isArray(n)?Gt(n):Ht(n):(n=this._staticTrees[t]=this.$options.staticRenderFns[t].call(this._renderProxy),On(n,"__static__"+t,!1),n)}function An(t,e,n){return On(t,"__once__"+e+(n?"_"+n:""),!0),t}function On(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&kn(t[r],e+"_"+r,n);else kn(t,e,n)}function kn(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Cn(t,e){if(e)if(p(e)){var n=t.on=t.on?P({},t.on):{};for(var r in e){var o=n[r],i=e[r];n[r]=o?[].concat(i,o):i}}else;return t}function Sn(t){t._vnode=null,t._staticTrees=null;var e=t.$vnode=t.$options._parentVnode,n=e&&e.context;t.$slots=pe(t.$options._renderChildren,n),t.$scopedSlots=V,t._c=function(e,n,r,o){return vn(t,e,n,r,o,!1)},t.$createElement=function(e,n,r,o){return vn(t,e,n,r,o,!0)};var r=e&&e.data;bt(t,"$attrs",r&&r.attrs,null,!0),bt(t,"$listeners",r&&r.on,null,!0)}function Pn(t){t.prototype.$nextTick=function(t){return st(t,this)},t.prototype._render=function(){var t,e=this,r=e.$options,o=r.render,i=r.staticRenderFns,a=r._parentVnode;if(e._isMounted)for(var s in e.$slots)e.$slots[s]=Gt(e.$slots[s]);e.$scopedSlots=a&&a.data.scopedSlots||V,i&&!e._staticTrees&&(e._staticTrees=[]),e.$vnode=a;try{t=o.call(e._renderProxy,e.$createElement)}catch(n){J(n,e,"render function"),t=e._vnode}return t instanceof Lt||(t=Wt()),t.parent=a,t},t.prototype._o=An,t.prototype._n=v,t.prototype._s=h,t.prototype._l=mn,t.prototype._t=gn,t.prototype._q=D,t.prototype._i=N,t.prototype._m=xn,t.prototype._f=$n,t.prototype._k=bn,t.prototype._b=wn,t.prototype._v=Ft,t.prototype._e=Wt,t.prototype._u=de,t.prototype._g=Cn}var jn=0;function In(t){t.prototype._init=function(t){var e=this;e._uid=jn++,e._isVue=!0,t&&t._isComponent?En(e,t):e.$options=Dt(Tn(e.constructor),t||{},e),e._renderProxy=e,e._self=e,ve(e),ae(e),Sn(e),we(e,"beforeCreate"),en(e),We(e),tn(e),we(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function En(t,e){var n=t.$options=Object.create(t.constructor.options);n.parent=e.parent,n.propsData=e.propsData,n._parentVnode=e._parentVnode,n._parentListeners=e._parentListeners,n._renderChildren=e._renderChildren,n._componentTag=e._componentTag,n._parentElm=e._parentElm,n._refElm=e._refElm,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function Tn(t){var e=t.options;if(t.super){var n=Tn(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var o=Dn(t);o&&P(t.extendOptions,o),e=t.options=Dt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function Dn(t){var e,n=t.options,r=t.extendOptions,o=t.sealedOptions;for(var i in n)n[i]!==o[i]&&(e||(e={}),e[i]=Nn(n[i],r[i],o[i]));return e}function Nn(t,e,n){if(Array.isArray(t)){var r=[];n=Array.isArray(n)?n:[n],e=Array.isArray(e)?e:[e];for(var o=0;o<t.length;o++)(e.indexOf(t[o])>=0||n.indexOf(t[o])<0)&&r.push(t[o]);return r}return t}function Rn(t){this._init(t)}function Mn(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=S(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function Bn(t){t.mixin=function(t){return this.options=Dt(this.options,t),this}}function Un(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,o=t._Ctor||(t._Ctor={});if(o[r])return o[r];var i=t.name||n.options.name,a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=Dt(n.options,t),a["super"]=n,a.options.props&&Ln(a),a.options.computed&&Vn(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,B.forEach(function(t){a[t]=n[t]}),i&&(a.options.components[i]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=P({},a.options),o[r]=a,a}}function Ln(t){var e=t.options.props;for(var n in e)Ve(t.prototype,"_props",n)}function Vn(t){var e=t.options.computed;for(var n in e)qe(t.prototype,n,e[n])}function Wn(t){B.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&p(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}In(Rn),Ye(Rn),fe(Rn),_e(Rn),Pn(Rn);var Fn=[String,RegExp,Array];function Hn(t){return t&&(t.Ctor.options.name||t.tag)}function Gn(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!l(t)&&t.test(e)}function zn(t,e,n){for(var r in t){var o=t[r];if(o){var i=Hn(o.componentOptions);i&&!n(i)&&(o!==e&&Jn(o),t[r]=null)}}}function Jn(t){t&&t.componentInstance.$destroy()}var qn={name:"keep-alive",abstract:!0,props:{include:Fn,exclude:Fn},created:function(){this.cache=Object.create(null)},destroyed:function(){var t=this;for(var e in t.cache)Jn(t.cache[e])},watch:{include:function(t){zn(this.cache,this._vnode,function(e){return Gn(t,e)})},exclude:function(t){zn(this.cache,this._vnode,function(e){return!Gn(t,e)})}},render:function(){var t=ie(this.$slots.default),e=t&&t.componentOptions;if(e){var n=Hn(e);if(n&&(this.include&&!Gn(this.include,n)||this.exclude&&Gn(this.exclude,n)))return t;var r=null==t.key?e.Ctor.cid+(e.tag?"::"+e.tag:""):t.key;this.cache[r]?t.componentInstance=this.cache[r].componentInstance:this.cache[r]=t,t.data.keepAlive=!0}return t}},Kn={KeepAlive:qn};function Xn(t){var e={get:function(){return L}};Object.defineProperty(t,"config",e),t.util={warn:z,extend:P,mergeOptions:Dt,defineReactive:bt},t.set=wt,t.delete=xt,t.nextTick=st,t.options=Object.create(null),B.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,P(t.options.components,Kn),Mn(t),Bn(t),Un(t),Wn(t)}Xn(Rn),Object.defineProperty(Rn.prototype,"$isServer",{get:nt}),Object.defineProperty(Rn.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Rn.version="2.4.1",Rn.mpvueVersion="1.0.12";var Zn=_("template,script,style,element,content,slot,link,meta,svg,view,a,div,img,image,text,span,richtext,input,switch,textarea,spinner,select,slider,slider-neighbor,indicator,trisition,trisition-group,canvas,list,cell,header,loading,loading-indicator,refresh,scrollable,scroller,video,web,embed,tabbar,tabheader,datepicker,timepicker,marquee,countdown",!0),Qn=_("style,class");_("web,spinner,switch,video,textarea,canvas,indicator,marquee,countdown",!0),_("embed,img,image,input,link,meta",!0);function Yn(){}function tr(){}function er(){}function nr(t){return t&&t.$attrs?t.$attrs["mpcomid"]:"0"}var rr={tap:["tap","click"],touchstart:["touchstart"],touchmove:["touchmove"],touchcancel:["touchcancel"],touchend:["touchend"],longtap:["longtap"],input:["input"],blur:["change","blur"],submit:["submit"],focus:["focus"],scrolltoupper:["scrolltoupper"],scrolltolower:["scrolltolower"],scroll:["scroll"]},or={};function ir(t,e){return or}function ar(t,e){return or}function sr(t){return or}function cr(t){return or}function ur(t,e,n){}function fr(t,e){}function pr(t,e){}function lr(t){return or}function dr(t){return or}function hr(t){return"div"}function vr(t,e){return or}function _r(t,e,n){return or}var yr=Object.freeze({createElement:ir,createElementNS:ar,createTextNode:sr,createComment:cr,insertBefore:ur,removeChild:fr,appendChild:pr,parentNode:lr,nextSibling:dr,tagName:hr,setTextContent:vr,setAttribute:_r}),mr={create:function(t,e){gr(e)},update:function(t,e){t.data.ref!==e.data.ref&&(gr(t,!0),gr(e))},destroy:function(t){gr(t,!0)}};function gr(t,e){var n=t.data.ref;if(n){var r=t.context,o=t.componentInstance||t.elm,i=r.$refs;e?Array.isArray(i[n])?m(i[n],o):i[n]===o&&(i[n]=void 0):t.data.refInFor?Array.isArray(i[n])?i[n].indexOf(o)<0&&i[n].push(o):i[n]=[o]:i[n]=o}}var $r=new Lt("",{},[]),br=["create","activate","update","remove","destroy"];function wr(t,e){return t.key===e.key&&(t.tag===e.tag&&t.isComment===e.isComment&&i(t.data)===i(e.data)&&xr(t,e)||a(t.isAsyncPlaceholder)&&t.asyncFactory===e.asyncFactory&&o(e.asyncFactory.error))}function xr(t,e){if("input"!==t.tag)return!0;var n,r=i(n=t.data)&&i(n=n.attrs)&&n.type,o=i(n=e.data)&&i(n=n.attrs)&&n.type;return r===o}function Ar(t,e,n){var r,o,a={};for(r=e;r<=n;++r)o=t[r].key,i(o)&&(a[o]=r);return a}function Or(t){var e,n,r={},s=t.modules,u=t.nodeOps;for(e=0;e<br.length;++e)for(r[br[e]]=[],n=0;n<s.length;++n)i(s[n][br[e]])&&r[br[e]].push(s[n][br[e]]);function f(t){return new Lt(u.tagName(t).toLowerCase(),{},[],void 0,t)}function p(t,e){function n(){0===--n.listeners&&l(t)}return n.listeners=e,n}function l(t){var e=u.parentNode(t);i(e)&&u.removeChild(e,t)}function d(t,e,n,r,o){if(t.isRootInsert=!o,!h(t,e,n,r)){var s=t.data,c=t.children,f=t.tag;i(f)?(t.elm=t.ns?u.createElementNS(t.ns,f):u.createElement(f,t),w(t),g(t,c,e),i(s)&&b(t,e),m(n,t.elm,r)):a(t.isComment)?(t.elm=u.createComment(t.text),m(n,t.elm,r)):(t.elm=u.createTextNode(t.text),m(n,t.elm,r))}}function h(t,e,n,r){var o=t.data;if(i(o)){var s=i(t.componentInstance)&&o.keepAlive;if(i(o=o.hook)&&i(o=o.init)&&o(t,!1,n,r),i(t.componentInstance))return v(t,e),a(s)&&y(t,e,n,r),!0}}function v(t,e){i(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,$(t)?(b(t,e),w(t)):(gr(t),e.push(t))}function y(t,e,n,o){var a,s=t;while(s.componentInstance)if(s=s.componentInstance._vnode,i(a=s.data)&&i(a=a.transition)){for(a=0;a<r.activate.length;++a)r.activate[a]($r,s);e.push(s);break}m(n,t.elm,o)}function m(t,e,n){i(t)&&(i(n)?n.parentNode===t&&u.insertBefore(t,e,n):u.appendChild(t,e))}function g(t,e,n){if(Array.isArray(e))for(var r=0;r<e.length;++r)d(e[r],n,t.elm,null,!0);else c(t.text)&&u.appendChild(t.elm,u.createTextNode(t.text))}function $(t){while(t.componentInstance)t=t.componentInstance._vnode;return i(t.tag)}function b(t,n){for(var o=0;o<r.create.length;++o)r.create[o]($r,t);e=t.data.hook,i(e)&&(i(e.create)&&e.create($r,t),i(e.insert)&&n.push(t))}function w(t){var e,n=t;while(n)i(e=n.context)&&i(e=e.$options._scopeId)&&u.setAttribute(t.elm,e,""),n=n.parent;i(e=he)&&e!==t.context&&i(e=e.$options._scopeId)&&u.setAttribute(t.elm,e,"")}function x(t,e,n,r,o,i){for(;r<=o;++r)d(n[r],i,t,e)}function A(t){var e,n,o=t.data;if(i(o))for(i(e=o.hook)&&i(e=e.destroy)&&e(t),e=0;e<r.destroy.length;++e)r.destroy[e](t);if(i(e=t.children))for(n=0;n<t.children.length;++n)A(t.children[n])}function O(t,e,n,r){for(;n<=r;++n){var o=e[n];i(o)&&(i(o.tag)?(k(o),A(o)):l(o.elm))}}function k(t,e){if(i(e)||i(t.data)){var n,o=r.remove.length+1;for(i(e)?e.listeners+=o:e=p(t.elm,o),i(n=t.componentInstance)&&i(n=n._vnode)&&i(n.data)&&k(n,e),n=0;n<r.remove.length;++n)r.remove[n](t,e);i(n=t.data.hook)&&i(n=n.remove)?n(t,e):e()}else l(t.elm)}function C(t,e,n,r,a){var s,c,f,p,l=0,h=0,v=e.length-1,_=e[0],y=e[v],m=n.length-1,g=n[0],$=n[m],b=!a;while(l<=v&&h<=m)o(_)?_=e[++l]:o(y)?y=e[--v]:wr(_,g)?(S(_,g,r),_=e[++l],g=n[++h]):wr(y,$)?(S(y,$,r),y=e[--v],$=n[--m]):wr(_,$)?(S(_,$,r),b&&u.insertBefore(t,_.elm,u.nextSibling(y.elm)),_=e[++l],$=n[--m]):wr(y,g)?(S(y,g,r),b&&u.insertBefore(t,y.elm,_.elm),y=e[--v],g=n[++h]):(o(s)&&(s=Ar(e,l,v)),c=i(g.key)?s[g.key]:null,o(c)?(d(g,r,t,_.elm),g=n[++h]):(f=e[c],wr(f,g)?(S(f,g,r),e[c]=void 0,b&&u.insertBefore(t,f.elm,_.elm),g=n[++h]):(d(g,r,t,_.elm),g=n[++h])));l>v?(p=o(n[m+1])?null:n[m+1].elm,x(t,p,n,h,m,r)):h>m&&O(t,e,l,v)}function S(t,e,n,s){if(t!==e){var c=e.elm=t.elm;if(a(t.isAsyncPlaceholder))i(e.asyncFactory.resolved)?I(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(a(e.isStatic)&&a(t.isStatic)&&e.key===t.key&&(a(e.isCloned)||a(e.isOnce)))e.componentInstance=t.componentInstance;else{var f,p=e.data;i(p)&&i(f=p.hook)&&i(f=f.prepatch)&&f(t,e);var l=t.children,d=e.children;if(i(p)&&$(e)){for(f=0;f<r.update.length;++f)r.update[f](t,e);i(f=p.hook)&&i(f=f.update)&&f(t,e)}o(e.text)?i(l)&&i(d)?l!==d&&C(c,l,d,n,s):i(d)?(i(t.text)&&u.setTextContent(c,""),x(c,null,d,0,d.length-1,n)):i(l)?O(c,l,0,l.length-1):i(t.text)&&u.setTextContent(c,""):t.text!==e.text&&u.setTextContent(c,e.text),i(p)&&i(f=p.hook)&&i(f=f.postpatch)&&f(t,e)}}}function P(t,e,n){if(a(n)&&i(t.parent))t.parent.data.pendingInsert=e;else for(var r=0;r<e.length;++r)e[r].data.hook.insert(e[r])}var j=_("attrs,style,class,staticClass,staticStyle,key");function I(t,n,r){if(a(n.isComment)&&i(n.asyncFactory))return n.elm=t,n.isAsyncPlaceholder=!0,!0;n.elm=t;var o=n.tag,s=n.data,c=n.children;if(i(s)&&(i(e=s.hook)&&i(e=e.init)&&e(n,!0),i(e=n.componentInstance)))return v(n,r),!0;if(i(o)){if(i(c))if(t.hasChildNodes()){for(var u=!0,f=t.firstChild,p=0;p<c.length;p++){if(!f||!I(f,c[p],r)){u=!1;break}f=f.nextSibling}if(!u||f)return!1}else g(n,c,r);if(i(s))for(var l in s)if(!j(l)){b(n,r);break}}else t.data!==n.text&&(t.data=n.text);return!0}return function(t,e,n,s,c,p){if(!o(e)){var l=!1,h=[];if(o(t))l=!0,d(e,h,c,p);else{var v=i(t.nodeType);if(!v&&wr(t,e))S(t,e,h,s);else{if(v){if(1===t.nodeType&&t.hasAttribute(M)&&(t.removeAttribute(M),n=!0),a(n)&&I(t,e,h))return P(e,h,!0),t;t=f(t)}var _=t.elm,y=u.parentNode(_);if(d(e,h,_._leaveCb?null:y,u.nextSibling(_)),i(e.parent)){var m=e.parent;while(m)m.elm=e.elm,m=m.parent;if($(e))for(var g=0;g<r.create.length;++g)r.create[g]($r,e.parent)}i(y)?O(y,[t],0,0):i(t.tag)&&A(t)}}return P(e,h,l),e.elm}i(t)&&A(t)}}var kr=[mr],Cr=Or({nodeOps:yr,modules:kr});function Sr(){Cr.apply(this,arguments),this.$updateDataToMP()}function Pr(t,e,r){var o,i=t.$options[e];if("onError"===e&&i&&(i=[i]),i)for(var a=0,s=i.length;a<s;a++)try{o=i[a].call(t,r)}catch(n){J(n,t,e+" hook")}return t._hasHookEvent&&t.$emit("hook:"+e),t.$children.length&&t.$children.forEach(function(t){return Pr(t,e,r)}),o}function jr(t,e){var n=e.$mp;t&&t.globalData&&(n.appOptions=t.globalData.appOptions)}function Ir(t,e,n){if(t){var r,o,i;if(Array.isArray(t)){r=t.length;while(r--)o=t[r],"string"===typeof o&&(i=x(o),e[i]={type:null})}else if(p(t))for(var a in t)o=t[a],i=x(a),e[i]=p(o)?o:{type:o};for(var s in e)if(e.hasOwnProperty(s)){var c=e[s];c.default&&(c.value=c.default);var u=c.observer;c.observer=function(t,e){n[i]=t,"function"===typeof u&&u.call(n,t,e)}}return e}}function Er(t){var e=t.$options.properties,n=t.$options.props,r={};return Ir(e,r,t),Ir(n,r,t),r}function Tr(t){var e=t._mpProps={},n=Object.keys(t.$options.properties||{});n.forEach(function(n){n in t||(Ve(t,"_mpProps",n),e[n]=void 0)}),$t(e,!0)}function Dr(t,n){var r=this.$root;r.$mp||(r.$mp={});var o=r.$mp;if(o.status)return"app"===t?Pr(this,"onLaunch",o.appOptions):(this.__wxWebviewId__=r.__wxWebviewId__,this.__wxExparserNodeId__=r.__wxExparserNodeId__,Pr(this,"onLoad",o.query)),n();if(o.mpType=t,o.status="register","app"===t)e.App({globalData:{appOptions:{}},handleProxy:function(t){return r.$handleProxyWithVue(t)},onLaunch:function(t){void 0===t&&(t={}),o.app=this,o.status="launch",this.globalData.appOptions=o.appOptions=t,Pr(r,"onLaunch",t),n()},onShow:function(t){void 0===t&&(t={}),o.status="show",this.globalData.appOptions=o.appOptions=t,Pr(r,"onShow",t)},onHide:function(){o.status="hide",Pr(r,"onHide")},onError:function(t){Pr(r,"onError",t)},onUniNViewMessage:function(t){Pr(r,"onUniNViewMessage",t)}});else if("component"===t)Tr(r),e.Component({properties:Er(r),data:{$root:{}},methods:{handleProxy:function(t){return r.$handleProxyWithVue(t)}},created:function(){o.status="created",o.page=this},attached:function(){o.status="attached",Pr(r,"attached")},ready:function(){o.status="ready",Pr(r,"ready"),n(),r.$nextTick(function(){r._initDataToMP()})},moved:function(){Pr(r,"moved")},detached:function(){o.status="detached",Pr(r,"detached")}});else{var i=e.getApp();e.Page({data:{$root:{}},handleProxy:function(t){return r.$handleProxyWithVue(t)},onLoad:function(t){r.__wxWebviewId__=this.__wxWebviewId__,r.__wxExparserNodeId__=this.__wxExparserNodeId__,o.page=this,o.query=t,o.status="load",jr(i,r),r.$options&&"function"===typeof r.$options.data&&Object.assign(r.$data,r.$options.data()),Pr(r,"onLoad",t)},onShow:function(){r.__wxWebviewId__=this.__wxWebviewId__,r.__wxExparserNodeId__=this.__wxExparserNodeId__,o.page=this,o.status="show",Pr(r,"onShow"),r.$nextTick(function(){r._initDataToMP()})},onReady:function(){o.status="ready",Pr(r,"onReady"),n()},onHide:function(){o.status="hide",Pr(r,"onHide")},onUnload:function(){o.status="unload",Pr(r,"onUnload"),o.page=null},onPullDownRefresh:function(){Pr(r,"onPullDownRefresh")},onReachBottom:function(){Pr(r,"onReachBottom")},onShareAppMessage:r.$options.onShareAppMessage?function(t){return Pr(r,"onShareAppMessage",t)}:null,onPageScroll:function(t){Pr(r,"onPageScroll",t)},onTabItemTap:function(t){Pr(r,"onTabItemTap",t)}})}}function Nr(t){var e=[].concat(Object.keys(t._data||{}),Object.keys(t._props||{}),Object.keys(t._mpProps||{}),Object.keys(t._computedWatchers||{}));return e.reduce(function(e,n){return e[n]=t[n],e},{})}function Rr(t,e){void 0===e&&(e=[]);var n=t||{},r=n.$parent;return r?(e.unshift(nr(r)),r.$parent?Rr(r,e):e):e}function Mr(t){var e=Rr(t).join(","),n=e+(e?",":"")+nr(t),r=Object.assign(Nr(t),{$k:n,$kk:n+",",$p:e}),o="$root."+n,i={};return i[o]=r,i}function Br(t,e){void 0===e&&(e={});var n=t.$children;return n&&n.length&&n.forEach(function(t){return Br(t,e)}),Object.assign(e,Mr(t))}function Ur(t,e,n){var r,o,i,a=null,s=0;function c(){s=!1===n.leading?0:Date.now(),a=null,i=t.apply(r,o),a||(r=o=null)}return n||(n={}),function(u,f){var p=Date.now();s||!1!==n.leading||(s=p);var l=e-(p-s);return r=this,o=o?[u,Object.assign(o[1],f)]:[u,f],l<=0||l>e?(clearTimeout(a),a=null,s=p,i=t.apply(r,o),a||(r=o=null)):a||!1===n.trailing||(a=setTimeout(c,l)),i}}var Lr=Ur(function(t,e){t&&t(e)},50);function Vr(t){var e=t.$root,n=e.$mp||{},r=n.mpType;void 0===r&&(r="");var o=n.page;if("app"!==r&&o&&"function"===typeof o.setData)return o}function Wr(){var t=Vr(this);if(t){var e=JSON.parse(JSON.stringify(Mr(this)));Lr(t.setData.bind(t),r(e,t.data))}}function Fr(){var t=Vr(this);if(t){var e=Br(this.$root);t.setData(JSON.parse(JSON.stringify(e)))}}function Hr(t,e){void 0===e&&(e=[]);var n=e.slice(1);return n.length?n.reduce(function(t,e){for(var n=t.$children.length,r=0;r<n;r++){var o=t.$children[r],i=nr(o);if(i===e)return t=o,t}return t},t):t}function Gr(t,e,n){void 0===n&&(n=[]);var r=[];if(!t||!t.tag)return r;var o=t||{},i=o.data;void 0===i&&(i={});var a=o.children;void 0===a&&(a=[]);var s=o.componentInstance;s?Object.keys(s.$slots).forEach(function(t){var o=s.$slots[t],i=Array.isArray(o)?o:[o];i.forEach(function(t){r=r.concat(Gr(t,e,n))})}):a.forEach(function(t){r=r.concat(Gr(t,e,n))});var c=i.attrs,u=i.on;return c&&u&&c["eventid"]===e?(n.forEach(function(t){var e=u[t];"function"===typeof e?r.push(e):Array.isArray(e)&&(r=r.concat(e))}),r):r}function zr(t){var e=t.type,n=t.timeStamp,r=t.touches,o=t.detail;void 0===o&&(o={});var i=t.target;void 0===i&&(i={});var a=t.currentTarget;void 0===a&&(a={});var s=o.x,c=o.y,u={mp:t,type:e,timeStamp:n,x:s,y:c,target:Object.assign({},i,o),detail:o,currentTarget:a,stopPropagation:I,preventDefault:I};return r&&r.length&&(Object.assign(u,r[0]),u.touches=r),u}function Jr(t){var e=this.$root,n=t.type,r=t.target;void 0===r&&(r={});var o=t.currentTarget,i=o||r,a=i.dataset;void 0===a&&(a={});var s=a.comkey;void 0===s&&(s="");var c=a.eventid,u=Hr(e,s.split(","));if(u){var f=rr[n]||[n],p=Gr(u._vnode,c,f);if(p.length){var l=zr(t);if(1===p.length){var d=p[0](l);return d}p.forEach(function(t){return t(l)})}}}return Rn.config.mustUseProp=Yn,Rn.config.isReservedTag=Zn,Rn.config.isReservedAttr=Qn,Rn.config.getTagNamespace=tr,Rn.config.isUnknownElement=er,Rn.prototype.__patch__=Sr,Rn.prototype.$mount=function(t,e){var n=this,r=this.$options;if(r&&(r.render||r.mpType)){var o=r.mpType;return void 0===o&&(o="page"),this._initMP(o,function(){return ye(n,void 0,void 0)})}return ye(this,void 0,void 0)},Rn.prototype._initMP=Dr,Rn.prototype.$updateDataToMP=Wr,Rn.prototype._initDataToMP=Fr,Rn.prototype.$handleProxyWithVue=Jr,Rn})}).call(this,n("c8ba"))}}]);
});
define('static/js/api.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RecordList = exports.wsuri = exports.getGames = exports.updateIntegral = exports.AddRecord = exports.UpdateRecord = exports.GetRecords = exports.GetTopic = exports.GetRecordInfo = exports.userInfo = exports.registerUser = exports.loginUser = exports.baseUrl = void 0;

/*
 用户对象
 public class User 
    {
        public int ID { get; set; }
		//登录名
        public string AccountName { get; set; }
		//密码
        public string UserPassWord { get; set; }
		//积分
        public int Integral { get; set; } = 0;

    }
	
	游戏记录
	 public class Record
    {
        public int ID { get; set; }
		//登录名
        public string AccountName { get; set; }
		//积分
        public int Integral { get; set; }
		//创建时间
        public DateTime  CreateTime{ get; set; }
		//结束时间
        public DateTime EndTime { get; set; }


    }
	
	游戏表
	   public class Game
    {
		
        public int ID { get; set; }
		//名
        public string Name { get; set; }
        //描述
        public string Describe { get; set; }
		
        public string Url { get; set; }
    }
	
	视图对象
	  public class ResponseVo
    {
        /// <summary>
        /// 状态码：200 成功 500 失败
        /// </summary>
        public int Code { get; set; }

        /// <summary>
        /// 返回数据
        /// </summary>
        public object Data { get; set; }

        /// <summary>
        /// 响应消息
        /// </summary>
        public string Message { get; set; }

    }
	
		webSocket 消息对象
	
	 public class SocketEntity
    {
		//来自谁
        public string FromUser { get; set; } = "";
		//接受者
        public List<string> ToUser { get; set; } = new List<string>();
		//消息
        public string Message { get; set; } = "";
		//标记
        public string Tag { get; set; } = "";
		//房间ID
        public string RoomID { get; set; } = "";

    }	
	
*/
//后台连接地址 例如 export const baseUrl='http://127.0.0.7:8080'
var baseUrl = 'http://localhost:60996'; //例:如下
//用户登陆

exports.baseUrl = baseUrl;
var loginUser = baseUrl + '/Login/login'; //返回ResponseVo ->User对象
//用户注册

exports.loginUser = loginUser;
var registerUser = baseUrl + '/Login/Register'; //根据ID 查询用户信息

exports.registerUser = registerUser;
var userInfo = baseUrl + '/User/GetUserInfo'; //需要参数名id
//获取用户游戏记录

exports.userInfo = userInfo;
var GetRecordInfo = baseUrl + '/Record/GetRecordInfo'; //需要参数 用户登录名accountName
//得到题目

exports.GetRecordInfo = GetRecordInfo;
var GetTopic = baseUrl + '/Game/GetTopic'; //获得用户对战的排行榜

exports.GetTopic = GetTopic;
var GetRecords = baseUrl + '/Record/GetRecords'; //修改一条记录（游戏完成后修改结束时间 和所得积分）

exports.GetRecords = GetRecords;
var UpdateRecord = baseUrl + '/Record/UpdateRecord'; //增加一条记录

exports.UpdateRecord = UpdateRecord;
var AddRecord = baseUrl + '/Record/AddRecord'; //修改积分

exports.AddRecord = AddRecord;
var updateIntegral = baseUrl + '/User/UpdateIntegral'; //需要参数 用户ID 修改后的积分
//获取到游戏列表

exports.updateIntegral = updateIntegral;
var getGames = baseUrl + '/Game/GetGames'; //WebSocket 通信

/*
	标识码： m , s ,i , r , q , b
	1.m :代表发送的是普通信息（用户间交流）（后端判断）
	2.s:代表是系统信息（比如：xxx进入游戏之类的信息）（前台判断）
	3.i:代表用户进入房间（后台判断）
	4.r:用户房间准备（前台判断）
	5.q:退出房间(后台判断)
	6.b:游戏开始（前台判断）
	
*/

exports.getGames = getGames;
var wsuri = 'ws://172.16.31.232:4000'; //export const wsuri = 'ws://127.0.0.1:4000';
//export const wsuri = 'ws://172.16.31.236:4009';
//获取添加记录

exports.wsuri = wsuri;
var RecordList = "";
exports.RecordList = RecordList;
});
define('static/js/jquery-1.11.2.min.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

/*! jQuery v1.11.2 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function (a, b) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");
    return b(a);
  } : b(a);
}("undefined" != typeof window ? window : void 0, function (a, b) {
  var c = [],
      d = c.slice,
      e = c.concat,
      f = c.push,
      g = c.indexOf,
      h = {},
      i = h.toString,
      j = h.hasOwnProperty,
      k = {},
      l = "1.11.2",
      m = function m(a, b) {
    return new m.fn.init(a, b);
  },
      n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      o = /^-ms-/,
      p = /-([\da-z])/gi,
      q = function q(a, b) {
    return b.toUpperCase();
  };

  m.fn = m.prototype = {
    jquery: l,
    constructor: m,
    selector: "",
    length: 0,
    toArray: function toArray() {
      return d.call(this);
    },
    get: function get(a) {
      return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this);
    },
    pushStack: function pushStack(a) {
      var b = m.merge(this.constructor(), a);
      return b.prevObject = this, b.context = this.context, b;
    },
    each: function each(a, b) {
      return m.each(this, a, b);
    },
    map: function map(a) {
      return this.pushStack(m.map(this, function (b, c) {
        return a.call(b, c, b);
      }));
    },
    slice: function slice() {
      return this.pushStack(d.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    eq: function eq(a) {
      var b = this.length,
          c = +a + (0 > a ? b : 0);
      return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor(null);
    },
    push: f,
    sort: c.sort,
    splice: c.splice
  }, m.extend = m.fn.extend = function () {
    var a,
        b,
        c,
        d,
        e,
        f,
        g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;

    for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || m.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) {
      if (null != (e = arguments[h])) for (d in e) {
        a = g[d], c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c));
      }
    }

    return g;
  }, m.extend({
    expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function error(a) {
      throw new Error(a);
    },
    noop: function noop() {},
    isFunction: function isFunction(a) {
      return "function" === m.type(a);
    },
    isArray: Array.isArray || function (a) {
      return "array" === m.type(a);
    },
    isWindow: function isWindow(a) {
      return null != a && a == a.window;
    },
    isNumeric: function isNumeric(a) {
      return !m.isArray(a) && a - parseFloat(a) + 1 >= 0;
    },
    isEmptyObject: function isEmptyObject(a) {
      var b;

      for (b in a) {
        return !1;
      }

      return !0;
    },
    isPlainObject: function isPlainObject(a) {
      var b;
      if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a)) return !1;

      try {
        if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1;
      } catch (c) {
        return !1;
      }

      if (k.ownLast) for (b in a) {
        return j.call(a, b);
      }

      for (b in a) {
        ;
      }

      return void 0 === b || j.call(a, b);
    },
    type: function type(a) {
      return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a;
    },
    globalEval: function globalEval(b) {
      b && m.trim(b) && (a.execScript || function (b) {
        a.eval.call(a, b);
      })(b);
    },
    camelCase: function camelCase(a) {
      return a.replace(o, "ms-").replace(p, q);
    },
    nodeName: function nodeName(a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
    },
    each: function each(a, b, c) {
      var d,
          e = 0,
          f = a.length,
          g = r(a);

      if (c) {
        if (g) {
          for (; f > e; e++) {
            if (d = b.apply(a[e], c), d === !1) break;
          }
        } else for (e in a) {
          if (d = b.apply(a[e], c), d === !1) break;
        }
      } else if (g) {
        for (; f > e; e++) {
          if (d = b.call(a[e], e, a[e]), d === !1) break;
        }
      } else for (e in a) {
        if (d = b.call(a[e], e, a[e]), d === !1) break;
      }

      return a;
    },
    trim: function trim(a) {
      return null == a ? "" : (a + "").replace(n, "");
    },
    makeArray: function makeArray(a, b) {
      var c = b || [];
      return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c;
    },
    inArray: function inArray(a, b, c) {
      var d;

      if (b) {
        if (g) return g.call(b, a, c);

        for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++) {
          if (c in b && b[c] === a) return c;
        }
      }

      return -1;
    },
    merge: function merge(a, b) {
      var c = +b.length,
          d = 0,
          e = a.length;

      while (c > d) {
        a[e++] = b[d++];
      }

      if (c !== c) while (void 0 !== b[d]) {
        a[e++] = b[d++];
      }
      return a.length = e, a;
    },
    grep: function grep(a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) {
        d = !b(a[f], f), d !== h && e.push(a[f]);
      }

      return e;
    },
    map: function map(a, b, c) {
      var d,
          f = 0,
          g = a.length,
          h = r(a),
          i = [];
      if (h) for (; g > f; f++) {
        d = b(a[f], f, c), null != d && i.push(d);
      } else for (f in a) {
        d = b(a[f], f, c), null != d && i.push(d);
      }
      return e.apply([], i);
    },
    guid: 1,
    proxy: function proxy(a, b) {
      var c, e, f;
      return "string" == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments, 2), e = function e() {
        return a.apply(b || this, c.concat(d.call(arguments)));
      }, e.guid = a.guid = a.guid || m.guid++, e) : void 0;
    },
    now: function now() {
      return +new Date();
    },
    support: k
  }), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
    h["[object " + b + "]"] = b.toLowerCase();
  });

  function r(a) {
    var b = a.length,
        c = m.type(a);
    return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
  }

  var s = function (a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u = "sizzle" + 1 * new Date(),
        v = a.document,
        w = 0,
        x = 0,
        y = hb(),
        z = hb(),
        A = hb(),
        B = function B(a, b) {
      return a === b && (l = !0), 0;
    },
        C = 1 << 31,
        D = {}.hasOwnProperty,
        E = [],
        F = E.pop,
        G = E.push,
        H = E.push,
        I = E.slice,
        J = function J(a, b) {
      for (var c = 0, d = a.length; d > c; c++) {
        if (a[c] === b) return c;
      }

      return -1;
    },
        K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        L = "[\\x20\\t\\r\\n\\f]",
        M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        N = M.replace("w", "w#"),
        O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]",
        P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
        Q = new RegExp(L + "+", "g"),
        R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
        S = new RegExp("^" + L + "*," + L + "*"),
        T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
        U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
        V = new RegExp(P),
        W = new RegExp("^" + N + "$"),
        X = {
      ID: new RegExp("^#(" + M + ")"),
      CLASS: new RegExp("^\\.(" + M + ")"),
      TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
      ATTR: new RegExp("^" + O),
      PSEUDO: new RegExp("^" + P),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + K + ")$", "i"),
      needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
    },
        Y = /^(?:input|select|textarea|button)$/i,
        Z = /^h\d$/i,
        $ = /^[^{]+\{\s*\[native \w/,
        _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ab = /[+~]/,
        bb = /'|\\/g,
        cb = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
        db = function db(a, b, c) {
      var d = "0x" + b - 65536;
      return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
    },
        eb = function eb() {
      m();
    };

    try {
      H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
    } catch (fb) {
      H = {
        apply: E.length ? function (a, b) {
          G.apply(a, I.call(b));
        } : function (a, b) {
          var c = a.length,
              d = 0;

          while (a[c++] = b[d++]) {
            ;
          }

          a.length = c - 1;
        }
      };
    }

    function gb(a, b, d, e) {
      var f, h, j, k, l, o, r, s, w, x;
      if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d;

      if (!e && p) {
        if (11 !== k && (f = _.exec(a))) if (j = f[1]) {
          if (9 === k) {
            if (h = b.getElementById(j), !h || !h.parentNode) return d;
            if (h.id === j) return d.push(h), d;
          } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d;
        } else {
          if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;
          if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), d;
        }

        if (c.qsa && (!q || !q.test(a))) {
          if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
            o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;

            while (l--) {
              o[l] = s + rb(o[l]);
            }

            w = ab.test(a) && pb(b.parentNode) || b, x = o.join(",");
          }

          if (x) try {
            return H.apply(d, w.querySelectorAll(x)), d;
          } catch (y) {} finally {
            r || b.removeAttribute("id");
          }
        }
      }

      return i(a.replace(R, "$1"), b, d, e);
    }

    function hb() {
      var a = [];

      function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
      }

      return b;
    }

    function ib(a) {
      return a[u] = !0, a;
    }

    function jb(a) {
      var b = n.createElement("div");

      try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null;
      }
    }

    function kb(a, b) {
      var c = a.split("|"),
          e = a.length;

      while (e--) {
        d.attrHandle[c[e]] = b;
      }
    }

    function lb(a, b) {
      var c = b && a,
          d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
      if (d) return d;
      if (c) while (c = c.nextSibling) {
        if (c === b) return -1;
      }
      return a ? 1 : -1;
    }

    function mb(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a;
      };
    }

    function nb(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a;
      };
    }

    function ob(a) {
      return ib(function (b) {
        return b = +b, ib(function (c, d) {
          var e,
              f = a([], c.length, b),
              g = f.length;

          while (g--) {
            c[e = f[g]] && (c[e] = !(d[e] = c[e]));
          }
        });
      });
    }

    function pb(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }

    c = gb.support = {}, f = gb.isXML = function (a) {
      var b = a && (a.ownerDocument || a).documentElement;
      return b ? "HTML" !== b.nodeName : !1;
    }, m = gb.setDocument = function (a) {
      var b,
          e,
          g = a ? a.ownerDocument || a : v;
      return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", eb, !1) : e.attachEvent && e.attachEvent("onunload", eb)), p = !f(g), c.attributes = jb(function (a) {
        return a.className = "i", !a.getAttribute("className");
      }), c.getElementsByTagName = jb(function (a) {
        return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length;
      }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = jb(function (a) {
        return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length;
      }), c.getById ? (d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c = b.getElementById(a);
          return c && c.parentNode ? [c] : [];
        }
      }, d.filter.ID = function (a) {
        var b = a.replace(cb, db);
        return function (a) {
          return a.getAttribute("id") === b;
        };
      }) : (delete d.find.ID, d.filter.ID = function (a) {
        var b = a.replace(cb, db);
        return function (a) {
          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
          return c && c.value === b;
        };
      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
      } : function (a, b) {
        var c,
            d = [],
            e = 0,
            f = b.getElementsByTagName(a);

        if ("*" === a) {
          while (c = f[e++]) {
            1 === c.nodeType && d.push(c);
          }

          return d;
        }

        return f;
      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
        return p ? b.getElementsByClassName(a) : void 0;
      }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (jb(function (a) {
        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
      }), jb(function (a) {
        var b = g.createElement("input");
        b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
      })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && jb(function (a) {
        c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P);
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
            d = b && b.parentNode;
        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
      } : function (a, b) {
        if (b) while (b = b.parentNode) {
          if (b === a) return !0;
        }
        return !1;
      }, B = b ? function (a, b) {
        if (a === b) return l = !0, 0;
        var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
        return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
      } : function (a, b) {
        if (a === b) return l = !0, 0;
        var c,
            d = 0,
            e = a.parentNode,
            f = b.parentNode,
            h = [a],
            i = [b];
        if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
        if (e === f) return lb(a, b);
        c = a;

        while (c = c.parentNode) {
          h.unshift(c);
        }

        c = b;

        while (c = c.parentNode) {
          i.unshift(c);
        }

        while (h[d] === i[d]) {
          d++;
        }

        return d ? lb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0;
      }, g) : n;
    }, gb.matches = function (a, b) {
      return gb(a, null, null, b);
    }, gb.matchesSelector = function (a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
        var d = s.call(a, b);
        if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
      } catch (e) {}
      return gb(b, n, null, [a]).length > 0;
    }, gb.contains = function (a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b);
    }, gb.attr = function (a, b) {
      (a.ownerDocument || a) !== n && m(a);
      var e = d.attrHandle[b.toLowerCase()],
          f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
      return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
    }, gb.error = function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a);
    }, gb.uniqueSort = function (a) {
      var b,
          d = [],
          e = 0,
          f = 0;

      if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++]) {
          b === a[f] && (e = d.push(f));
        }

        while (e--) {
          a.splice(d[e], 1);
        }
      }

      return k = null, a;
    }, e = gb.getText = function (a) {
      var b,
          c = "",
          d = 0,
          f = a.nodeType;

      if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent) return a.textContent;

          for (a = a.firstChild; a; a = a.nextSibling) {
            c += e(a);
          }
        } else if (3 === f || 4 === f) return a.nodeValue;
      } else while (b = a[d++]) {
        c += e(b);
      }

      return c;
    }, d = gb.selectors = {
      cacheLength: 50,
      createPseudo: ib,
      match: X,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function ATTR(a) {
          return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
        },
        CHILD: function CHILD(a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || gb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && gb.error(a[0]), a;
        },
        PSEUDO: function PSEUDO(a) {
          var b,
              c = !a[6] && a[2];
          return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(a) {
          var b = a.replace(cb, db).toLowerCase();
          return "*" === a ? function () {
            return !0;
          } : function (a) {
            return a.nodeName && a.nodeName.toLowerCase() === b;
          };
        },
        CLASS: function CLASS(a) {
          var b = y[a + " "];
          return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(a, b, c) {
          return function (d) {
            var e = gb.attr(d, a);
            return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
          };
        },
        CHILD: function CHILD(a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b;
          return 1 === d && 0 === e ? function (a) {
            return !!a.parentNode;
          } : function (b, c, i) {
            var j,
                k,
                l,
                m,
                n,
                o,
                p = f !== g ? "nextSibling" : "previousSibling",
                q = b.parentNode,
                r = h && b.nodeName.toLowerCase(),
                s = !i && !h;

            if (q) {
              if (f) {
                while (p) {
                  l = b;

                  while (l = l[p]) {
                    if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                  }

                  o = p = "only" === a && !o && "nextSibling";
                }

                return !0;
              }

              if (o = [g ? q.firstChild : q.lastChild], g && s) {
                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];

                while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) {
                  if (1 === l.nodeType && ++m && l === b) {
                    k[a] = [w, n, m];
                    break;
                  }
                }
              } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];else while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) {
                if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break;
              }

              return m -= e, m === d || m % d === 0 && m / d >= 0;
            }
          };
        },
        PSEUDO: function PSEUDO(a, b) {
          var c,
              e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || gb.error("unsupported pseudo: " + a);
          return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ib(function (a, c) {
            var d,
                f = e(a, b),
                g = f.length;

            while (g--) {
              d = J(a, f[g]), a[d] = !(c[d] = f[g]);
            }
          }) : function (a) {
            return e(a, 0, c);
          }) : e;
        }
      },
      pseudos: {
        not: ib(function (a) {
          var b = [],
              c = [],
              d = h(a.replace(R, "$1"));
          return d[u] ? ib(function (a, b, c, e) {
            var f,
                g = d(a, null, e, []),
                h = a.length;

            while (h--) {
              (f = g[h]) && (a[h] = !(b[h] = f));
            }
          }) : function (a, e, f) {
            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
          };
        }),
        has: ib(function (a) {
          return function (b) {
            return gb(a, b).length > 0;
          };
        }),
        contains: ib(function (a) {
          return a = a.replace(cb, db), function (b) {
            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
          };
        }),
        lang: ib(function (a) {
          return W.test(a || "") || gb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(), function (b) {
            var c;

            do {
              if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
            } while ((b = b.parentNode) && 1 === b.nodeType);

            return !1;
          };
        }),
        target: function target(b) {
          var c = a.location && a.location.hash;
          return c && c.slice(1) === b.id;
        },
        root: function root(a) {
          return a === o;
        },
        focus: function focus(a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
        },
        enabled: function enabled(a) {
          return a.disabled === !1;
        },
        disabled: function disabled(a) {
          return a.disabled === !0;
        },
        checked: function checked(a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && !!a.checked || "option" === b && !!a.selected;
        },
        selected: function selected(a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
        },
        empty: function empty(a) {
          for (a = a.firstChild; a; a = a.nextSibling) {
            if (a.nodeType < 6) return !1;
          }

          return !0;
        },
        parent: function parent(a) {
          return !d.pseudos.empty(a);
        },
        header: function header(a) {
          return Z.test(a.nodeName);
        },
        input: function input(a) {
          return Y.test(a.nodeName);
        },
        button: function button(a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && "button" === a.type || "button" === b;
        },
        text: function text(a) {
          var b;
          return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
        },
        first: ob(function () {
          return [0];
        }),
        last: ob(function (a, b) {
          return [b - 1];
        }),
        eq: ob(function (a, b, c) {
          return [0 > c ? c + b : c];
        }),
        even: ob(function (a, b) {
          for (var c = 0; b > c; c += 2) {
            a.push(c);
          }

          return a;
        }),
        odd: ob(function (a, b) {
          for (var c = 1; b > c; c += 2) {
            a.push(c);
          }

          return a;
        }),
        lt: ob(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; --d >= 0;) {
            a.push(d);
          }

          return a;
        }),
        gt: ob(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; ++d < b;) {
            a.push(d);
          }

          return a;
        })
      }
    }, d.pseudos.nth = d.pseudos.eq;

    for (b in {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) {
      d.pseudos[b] = mb(b);
    }

    for (b in {
      submit: !0,
      reset: !0
    }) {
      d.pseudos[b] = nb(b);
    }

    function qb() {}

    qb.prototype = d.filters = d.pseudos, d.setFilters = new qb(), g = gb.tokenize = function (a, b) {
      var c,
          e,
          f,
          g,
          h,
          i,
          j,
          k = z[a + " "];
      if (k) return b ? 0 : k.slice(0);
      h = a, i = [], j = d.preFilter;

      while (h) {
        (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
          value: c,
          type: e[0].replace(R, " ")
        }), h = h.slice(c.length));

        for (g in d.filter) {
          !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
            value: c,
            type: g,
            matches: e
          }), h = h.slice(c.length));
        }

        if (!c) break;
      }

      return b ? h.length : h ? gb.error(a) : z(a, i).slice(0);
    };

    function rb(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) {
        d += a[b].value;
      }

      return d;
    }

    function sb(a, b, c) {
      var d = b.dir,
          e = c && "parentNode" === d,
          f = x++;
      return b.first ? function (b, c, f) {
        while (b = b[d]) {
          if (1 === b.nodeType || e) return a(b, c, f);
        }
      } : function (b, c, g) {
        var h,
            i,
            j = [w, f];

        if (g) {
          while (b = b[d]) {
            if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
          }
        } else while (b = b[d]) {
          if (1 === b.nodeType || e) {
            if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];
            if (i[d] = j, j[2] = a(b, c, g)) return !0;
          }
        }
      };
    }

    function tb(a) {
      return a.length > 1 ? function (b, c, d) {
        var e = a.length;

        while (e--) {
          if (!a[e](b, c, d)) return !1;
        }

        return !0;
      } : a[0];
    }

    function ub(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) {
        gb(a, b[d], c);
      }

      return c;
    }

    function vb(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) {
        (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
      }

      return g;
    }

    function wb(a, b, c, d, e, f) {
      return d && !d[u] && (d = wb(d)), e && !e[u] && (e = wb(e, f)), ib(function (f, g, h, i) {
        var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || ub(b || "*", h.nodeType ? [h] : h, []),
            q = !a || !f && b ? p : vb(p, m, a, h, i),
            r = c ? e || (f ? a : o || d) ? [] : g : q;

        if (c && c(q, r, h, i), d) {
          j = vb(r, n), d(j, [], h, i), k = j.length;

          while (k--) {
            (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
        }

        if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;

              while (k--) {
                (l = r[k]) && j.push(q[k] = l);
              }

              e(null, r = [], j, i);
            }

            k = r.length;

            while (k--) {
              (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
            }
          }
        } else r = vb(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
      });
    }

    function xb(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sb(function (a) {
        return a === b;
      }, h, !0), l = sb(function (a) {
        return J(b, a) > -1;
      }, h, !0), m = [function (a, c, d) {
        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
        return b = null, e;
      }]; f > i; i++) {
        if (c = d.relative[a[i].type]) m = [sb(tb(m), c)];else {
          if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
            for (e = ++i; f > e; e++) {
              if (d.relative[a[e].type]) break;
            }

            return wb(i > 1 && tb(m), i > 1 && rb(a.slice(0, i - 1).concat({
              value: " " === a[i - 2].type ? "*" : ""
            })).replace(R, "$1"), c, e > i && xb(a.slice(i, e)), f > e && xb(a = a.slice(e)), f > e && rb(a));
          }

          m.push(c);
        }
      }

      return tb(m);
    }

    function yb(a, b) {
      var c = b.length > 0,
          e = a.length > 0,
          f = function f(_f, g, h, i, k) {
        var l,
            m,
            o,
            p = 0,
            q = "0",
            r = _f && [],
            s = [],
            t = j,
            u = _f || e && d.find.TAG("*", k),
            v = w += null == t ? 1 : Math.random() || .1,
            x = u.length;

        for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
          if (e && l) {
            m = 0;

            while (o = a[m++]) {
              if (o(l, g, h)) {
                i.push(l);
                break;
              }
            }

            k && (w = v);
          }

          c && ((l = !o && l) && p--, _f && r.push(l));
        }

        if (p += q, c && q !== p) {
          m = 0;

          while (o = b[m++]) {
            o(r, s, g, h);
          }

          if (_f) {
            if (p > 0) while (q--) {
              r[q] || s[q] || (s[q] = F.call(i));
            }
            s = vb(s);
          }

          H.apply(i, s), k && !_f && s.length > 0 && p + b.length > 1 && gb.uniqueSort(i);
        }

        return k && (w = v, j = t), r;
      };

      return c ? ib(f) : f;
    }

    return h = gb.compile = function (a, b) {
      var c,
          d = [],
          e = [],
          f = A[a + " "];

      if (!f) {
        b || (b = g(a)), c = b.length;

        while (c--) {
          f = xb(b[c]), f[u] ? d.push(f) : e.push(f);
        }

        f = A(a, yb(e, d)), f.selector = a;
      }

      return f;
    }, i = gb.select = function (a, b, e, f) {
      var i,
          j,
          k,
          l,
          m,
          n = "function" == typeof a && a,
          o = !f && g(a = n.selector || a);

      if (e = e || [], 1 === o.length) {
        if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
          if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b) return e;
          n && (b = b.parentNode), a = a.slice(j.shift().value.length);
        }

        i = X.needsContext.test(a) ? 0 : j.length;

        while (i--) {
          if (k = j[i], d.relative[l = k.type]) break;

          if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && pb(b.parentNode) || b))) {
            if (j.splice(i, 1), a = f.length && rb(j), !a) return H.apply(e, f), e;
            break;
          }
        }
      }

      return (n || h(a, o))(f, b, !p, e, ab.test(a) && pb(b.parentNode) || b), e;
    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = jb(function (a) {
      return 1 & a.compareDocumentPosition(n.createElement("div"));
    }), jb(function (a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
    }) || kb("type|href|height|width", function (a, b, c) {
      return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
    }), c.attributes && jb(function (a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
    }) || kb("value", function (a, b, c) {
      return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
    }), jb(function (a) {
      return null == a.getAttribute("disabled");
    }) || kb(K, function (a, b, c) {
      var d;
      return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
    }), gb;
  }(a);

  m.find = s, m.expr = s.selectors, m.expr[":"] = m.expr.pseudos, m.unique = s.uniqueSort, m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains;
  var t = m.expr.match.needsContext,
      u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      v = /^.[^:#\[\.,]*$/;

  function w(a, b, c) {
    if (m.isFunction(b)) return m.grep(a, function (a, d) {
      return !!b.call(a, d, a) !== c;
    });
    if (b.nodeType) return m.grep(a, function (a) {
      return a === b !== c;
    });

    if ("string" == typeof b) {
      if (v.test(b)) return m.filter(b, a, c);
      b = m.filter(b, a);
    }

    return m.grep(a, function (a) {
      return m.inArray(a, b) >= 0 !== c;
    });
  }

  m.filter = function (a, b, c) {
    var d = b[0];
    return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function (a) {
      return 1 === a.nodeType;
    }));
  }, m.fn.extend({
    find: function find(a) {
      var b,
          c = [],
          d = this,
          e = d.length;
      if ("string" != typeof a) return this.pushStack(m(a).filter(function () {
        for (b = 0; e > b; b++) {
          if (m.contains(d[b], this)) return !0;
        }
      }));

      for (b = 0; e > b; b++) {
        m.find(a, d[b], c);
      }

      return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c;
    },
    filter: function filter(a) {
      return this.pushStack(w(this, a || [], !1));
    },
    not: function not(a) {
      return this.pushStack(w(this, a || [], !0));
    },
    is: function is(a) {
      return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length;
    }
  });

  var x,
      y = a.document,
      z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      A = m.fn.init = function (a, b) {
    var c, d;
    if (!a) return this;

    if ("string" == typeof a) {
      if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a);

      if (c[1]) {
        if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), u.test(c[1]) && m.isPlainObject(b)) for (c in b) {
          m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
        }
        return this;
      }

      if (d = y.getElementById(c[2]), d && d.parentNode) {
        if (d.id !== c[2]) return x.find(a);
        this.length = 1, this[0] = d;
      }

      return this.context = y, this.selector = a, this;
    }

    return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), m.makeArray(a, this));
  };

  A.prototype = m.fn, x = m(y);
  var B = /^(?:parents|prev(?:Until|All))/,
      C = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };
  m.extend({
    dir: function dir(a, b, c) {
      var d = [],
          e = a[b];

      while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c))) {
        1 === e.nodeType && d.push(e), e = e[b];
      }

      return d;
    },
    sibling: function sibling(a, b) {
      for (var c = []; a; a = a.nextSibling) {
        1 === a.nodeType && a !== b && c.push(a);
      }

      return c;
    }
  }), m.fn.extend({
    has: function has(a) {
      var b,
          c = m(a, this),
          d = c.length;
      return this.filter(function () {
        for (b = 0; d > b; b++) {
          if (m.contains(this, c[b])) return !0;
        }
      });
    },
    closest: function closest(a, b) {
      for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++) {
        for (c = this[d]; c && c !== b; c = c.parentNode) {
          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
            f.push(c);
            break;
          }
        }
      }

      return this.pushStack(f.length > 1 ? m.unique(f) : f);
    },
    index: function index(a) {
      return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(a, b) {
      return this.pushStack(m.unique(m.merge(this.get(), m(a, b))));
    },
    addBack: function addBack(a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    }
  });

  function D(a, b) {
    do {
      a = a[b];
    } while (a && 1 !== a.nodeType);

    return a;
  }

  m.each({
    parent: function parent(a) {
      var b = a.parentNode;
      return b && 11 !== b.nodeType ? b : null;
    },
    parents: function parents(a) {
      return m.dir(a, "parentNode");
    },
    parentsUntil: function parentsUntil(a, b, c) {
      return m.dir(a, "parentNode", c);
    },
    next: function next(a) {
      return D(a, "nextSibling");
    },
    prev: function prev(a) {
      return D(a, "previousSibling");
    },
    nextAll: function nextAll(a) {
      return m.dir(a, "nextSibling");
    },
    prevAll: function prevAll(a) {
      return m.dir(a, "previousSibling");
    },
    nextUntil: function nextUntil(a, b, c) {
      return m.dir(a, "nextSibling", c);
    },
    prevUntil: function prevUntil(a, b, c) {
      return m.dir(a, "previousSibling", c);
    },
    siblings: function siblings(a) {
      return m.sibling((a.parentNode || {}).firstChild, a);
    },
    children: function children(a) {
      return m.sibling(a.firstChild);
    },
    contents: function contents(a) {
      return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes);
    }
  }, function (a, b) {
    m.fn[a] = function (c, d) {
      var e = m.map(this, b, c);
      return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = m.filter(d, e)), this.length > 1 && (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), this.pushStack(e);
    };
  });
  var E = /\S+/g,
      F = {};

  function G(a) {
    var b = F[a] = {};
    return m.each(a.match(E) || [], function (a, c) {
      b[c] = !0;
    }), b;
  }

  m.Callbacks = function (a) {
    a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);

    var b,
        c,
        d,
        e,
        f,
        g,
        h = [],
        i = !a.once && [],
        j = function j(l) {
      for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++) {
        if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
          c = !1;
          break;
        }
      }

      b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable());
    },
        k = {
      add: function add() {
        if (h) {
          var d = h.length;
          !function f(b) {
            m.each(b, function (b, c) {
              var d = m.type(c);
              "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c);
            });
          }(arguments), b ? e = h.length : c && (g = d, j(c));
        }

        return this;
      },
      remove: function remove() {
        return h && m.each(arguments, function (a, c) {
          var d;

          while ((d = m.inArray(c, h, d)) > -1) {
            h.splice(d, 1), b && (e >= d && e--, f >= d && f--);
          }
        }), this;
      },
      has: function has(a) {
        return a ? m.inArray(a, h) > -1 : !(!h || !h.length);
      },
      empty: function empty() {
        return h = [], e = 0, this;
      },
      disable: function disable() {
        return h = i = c = void 0, this;
      },
      disabled: function disabled() {
        return !h;
      },
      lock: function lock() {
        return i = void 0, c || k.disable(), this;
      },
      locked: function locked() {
        return !i;
      },
      fireWith: function fireWith(a, c) {
        return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this;
      },
      fire: function fire() {
        return k.fireWith(this, arguments), this;
      },
      fired: function fired() {
        return !!d;
      }
    };

    return k;
  }, m.extend({
    Deferred: function Deferred(a) {
      var b = [["resolve", "done", m.Callbacks("once memory"), "resolved"], ["reject", "fail", m.Callbacks("once memory"), "rejected"], ["notify", "progress", m.Callbacks("memory")]],
          c = "pending",
          d = {
        state: function state() {
          return c;
        },
        always: function always() {
          return e.done(arguments).fail(arguments), this;
        },
        then: function then() {
          var a = arguments;
          return m.Deferred(function (c) {
            m.each(b, function (b, f) {
              var g = m.isFunction(a[b]) && a[b];
              e[f[1]](function () {
                var a = g && g.apply(this, arguments);
                a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments);
              });
            }), a = null;
          }).promise();
        },
        promise: function promise(a) {
          return null != a ? m.extend(a, d) : d;
        }
      },
          e = {};
      return d.pipe = d.then, m.each(b, function (a, f) {
        var g = f[2],
            h = f[3];
        d[f[1]] = g.add, h && g.add(function () {
          c = h;
        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
          return e[f[0] + "With"](this === e ? d : this, arguments), this;
        }, e[f[0] + "With"] = g.fireWith;
      }), d.promise(e), a && a.call(e, e), e;
    },
    when: function when(a) {
      var b = 0,
          c = d.call(arguments),
          e = c.length,
          f = 1 !== e || a && m.isFunction(a.promise) ? e : 0,
          g = 1 === f ? a : m.Deferred(),
          h = function h(a, b, c) {
        return function (e) {
          b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
        };
      },
          i,
          j,
          k;

      if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) {
        c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
      }
      return f || g.resolveWith(k, c), g.promise();
    }
  });
  var H;
  m.fn.ready = function (a) {
    return m.ready.promise().done(a), this;
  }, m.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function holdReady(a) {
      a ? m.readyWait++ : m.ready(!0);
    },
    ready: function ready(a) {
      if (a === !0 ? ! --m.readyWait : !m.isReady) {
        if (!y.body) return setTimeout(m.ready);
        m.isReady = !0, a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]), m.fn.triggerHandler && (m(y).triggerHandler("ready"), m(y).off("ready")));
      }
    }
  });

  function I() {
    y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1), a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J), a.detachEvent("onload", J));
  }

  function J() {
    (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(), m.ready());
  }

  m.ready.promise = function (b) {
    if (!H) if (H = m.Deferred(), "complete" === y.readyState) setTimeout(m.ready);else if (y.addEventListener) y.addEventListener("DOMContentLoaded", J, !1), a.addEventListener("load", J, !1);else {
      y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);
      var c = !1;

      try {
        c = null == a.frameElement && y.documentElement;
      } catch (d) {}

      c && c.doScroll && !function e() {
        if (!m.isReady) {
          try {
            c.doScroll("left");
          } catch (a) {
            return setTimeout(e, 50);
          }

          I(), m.ready();
        }
      }();
    }
    return H.promise(b);
  };

  var K = "undefined",
      L;

  for (L in m(k)) {
    break;
  }

  k.ownLast = "0" !== L, k.inlineBlockNeedsLayout = !1, m(function () {
    var a, b, c, d;
    c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d));
  }), function () {
    var a = y.createElement("div");

    if (null == k.deleteExpando) {
      k.deleteExpando = !0;

      try {
        delete a.test;
      } catch (b) {
        k.deleteExpando = !1;
      }
    }

    a = null;
  }(), m.acceptData = function (a) {
    var b = m.noData[(a.nodeName + " ").toLowerCase()],
        c = +a.nodeType || 1;
    return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b;
  };
  var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      N = /([A-Z])/g;

  function O(a, b, c) {
    if (void 0 === c && 1 === a.nodeType) {
      var d = "data-" + b.replace(N, "-$1").toLowerCase();

      if (c = a.getAttribute(d), "string" == typeof c) {
        try {
          c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c;
        } catch (e) {}

        m.data(a, b, c);
      } else c = void 0;
    }

    return c;
  }

  function P(a) {
    var b;

    for (b in a) {
      if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
    }

    return !0;
  }

  function Q(a, b, d, e) {
    if (m.acceptData(a)) {
      var f,
          g,
          h = m.expando,
          i = a.nodeType,
          j = i ? m.cache : a,
          k = i ? a[h] : a[h] && h;
      if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || m.guid++ : h), j[k] || (j[k] = i ? {} : {
        toJSON: m.noop
      }), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, f;
    }
  }

  function R(a, b, c) {
    if (m.acceptData(a)) {
      var d,
          e,
          f = a.nodeType,
          g = f ? m.cache : a,
          h = f ? a[m.expando] : m.expando;

      if (g[h]) {
        if (b && (d = c ? g[h] : g[h].data)) {
          m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;

          while (e--) {
            delete d[b[e]];
          }

          if (c ? !P(d) : !m.isEmptyObject(d)) return;
        }

        (c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null);
      }
    }
  }

  m.extend({
    cache: {},
    noData: {
      "applet ": !0,
      "embed ": !0,
      "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
    },
    hasData: function hasData(a) {
      return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a);
    },
    data: function data(a, b, c) {
      return Q(a, b, c);
    },
    removeData: function removeData(a, b) {
      return R(a, b);
    },
    _data: function _data(a, b, c) {
      return Q(a, b, c, !0);
    },
    _removeData: function _removeData(a, b) {
      return R(a, b, !0);
    }
  }), m.fn.extend({
    data: function data(a, b) {
      var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;

      if (void 0 === a) {
        if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, "parsedAttrs"))) {
          c = g.length;

          while (c--) {
            g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)), O(f, d, e[d])));
          }

          m._data(f, "parsedAttrs", !0);
        }

        return e;
      }

      return "object" == typeof a ? this.each(function () {
        m.data(this, a);
      }) : arguments.length > 1 ? this.each(function () {
        m.data(this, a, b);
      }) : f ? O(f, a, m.data(f, a)) : void 0;
    },
    removeData: function removeData(a) {
      return this.each(function () {
        m.removeData(this, a);
      });
    }
  }), m.extend({
    queue: function queue(a, b, c) {
      var d;
      return a ? (b = (b || "fx") + "queue", d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), d || []) : void 0;
    },
    dequeue: function dequeue(a, b) {
      b = b || "fx";

      var c = m.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = m._queueHooks(a, b),
          g = function g() {
        m.dequeue(a, b);
      };

      "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
    },
    _queueHooks: function _queueHooks(a, b) {
      var c = b + "queueHooks";
      return m._data(a, c) || m._data(a, c, {
        empty: m.Callbacks("once memory").add(function () {
          m._removeData(a, b + "queue"), m._removeData(a, c);
        })
      });
    }
  }), m.fn.extend({
    queue: function queue(a, b) {
      var c = 2;
      return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function () {
        var c = m.queue(this, a, b);
        m._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a);
      });
    },
    dequeue: function dequeue(a) {
      return this.each(function () {
        m.dequeue(this, a);
      });
    },
    clearQueue: function clearQueue(a) {
      return this.queue(a || "fx", []);
    },
    promise: function promise(a, b) {
      var c,
          d = 1,
          e = m.Deferred(),
          f = this,
          g = this.length,
          h = function h() {
        --d || e.resolveWith(f, [f]);
      };

      "string" != typeof a && (b = a, a = void 0), a = a || "fx";

      while (g--) {
        c = m._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
      }

      return h(), e.promise(b);
    }
  });

  var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      T = ["Top", "Right", "Bottom", "Left"],
      U = function U(a, b) {
    return a = b || a, "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a);
  },
      V = m.access = function (a, b, c, d, e, f, g) {
    var h = 0,
        i = a.length,
        j = null == c;

    if ("object" === m.type(c)) {
      e = !0;

      for (h in c) {
        m.access(a, b, h, c[h], !0, f, g);
      }
    } else if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b2, c) {
      return j.call(m(a), c);
    })), b)) for (; i > h; h++) {
      b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    }

    return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  },
      W = /^(?:checkbox|radio)$/i;

  !function () {
    var a = y.createElement("input"),
        b = y.createElement("div"),
        c = y.createDocumentFragment();

    if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = !b.getElementsByTagName("tbody").length, k.htmlSerialize = !!b.getElementsByTagName("link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), k.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function () {
      k.noCloneEvent = !1;
    }), b.cloneNode(!0).click()), null == k.deleteExpando) {
      k.deleteExpando = !0;

      try {
        delete b.test;
      } catch (d) {
        k.deleteExpando = !1;
      }
    }
  }(), function () {
    var b,
        c,
        d = y.createElement("div");

    for (b in {
      submit: !0,
      change: !0,
      focusin: !0
    }) {
      c = "on" + b, (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), k[b + "Bubbles"] = d.attributes[c].expando === !1);
    }

    d = null;
  }();
  var X = /^(?:input|select|textarea)$/i,
      Y = /^key/,
      Z = /^(?:mouse|pointer|contextmenu)|click/,
      $ = /^(?:focusinfocus|focusoutblur)$/,
      _ = /^([^.]*)(?:\.(.+)|)$/;

  function ab() {
    return !0;
  }

  function bb() {
    return !1;
  }

  function cb() {
    try {
      return y.activeElement;
    } catch (a) {}
  }

  m.event = {
    global: {},
    add: function add(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          n,
          o,
          p,
          q,
          r = m._data(a);

      if (r) {
        c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function (a) {
          return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments);
        }, k.elem = a), b = (b || "").match(E) || [""], h = b.length;

        while (h--) {
          f = _.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = m.event.special[o] || {}, l = m.extend({
            type: o,
            origType: q,
            data: d,
            handler: c,
            guid: c.guid,
            selector: e,
            needsContext: e && m.expr.match.needsContext.test(e),
            namespace: p.join(".")
          }, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(l), m.event.global[o] = !0);
        }

        a = null;
      }
    },
    remove: function remove(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          n,
          o,
          p,
          q,
          r = m.hasData(a) && m._data(a);

      if (r && (k = r.events)) {
        b = (b || "").match(E) || [""], j = b.length;

        while (j--) {
          if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
            l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length;

            while (f--) {
              g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1), g.selector && n.delegateCount--, l.remove && l.remove.call(a, g));
            }

            i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), delete k[o]);
          } else for (o in k) {
            m.event.remove(a, o + b[j], c, d, !0);
          }
        }

        m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events"));
      }
    },
    trigger: function trigger(b, c, d, e) {
      var f,
          g,
          h,
          i,
          k,
          l,
          n,
          o = [d || y],
          p = j.call(b, "type") ? b.type : b,
          q = j.call(b, "namespace") ? b.namespace.split(".") : [];

      if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[m.expando] ? b : new m.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : m.makeArray(c, [b]), k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
        if (!e && !k.noBubble && !m.isWindow(d)) {
          for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode); h; h = h.parentNode) {
            o.push(h), l = h;
          }

          l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a);
        }

        n = 0;

        while ((h = o[n++]) && !b.isPropagationStopped()) {
          b.type = n > 1 ? i : k.bindType || p, f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
        }

        if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
          l = d[g], l && (d[g] = null), m.event.triggered = p;

          try {
            d[p]();
          } catch (r) {}

          m.event.triggered = void 0, l && (d[g] = l);
        }

        return b.result;
      }
    },
    dispatch: function dispatch(a) {
      a = m.event.fix(a);
      var b,
          c,
          e,
          f,
          g,
          h = [],
          i = d.call(arguments),
          j = (m._data(this, "events") || {})[a.type] || [],
          k = m.event.special[a.type] || {};

      if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
        h = m.event.handlers.call(this, a, j), b = 0;

        while ((f = h[b++]) && !a.isPropagationStopped()) {
          a.currentTarget = f.elem, g = 0;

          while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped()) {
            (!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()));
          }
        }

        return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function handlers(a, b) {
      var c,
          d,
          e,
          f,
          g = [],
          h = b.delegateCount,
          i = a.target;
      if (h && i.nodeType && (!a.button || "click" !== a.type)) for (; i != this; i = i.parentNode || this) {
        if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
          for (e = [], f = 0; h > f; f++) {
            d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [i]).length), e[c] && e.push(d);
          }

          e.length && g.push({
            elem: i,
            handlers: e
          });
        }
      }
      return h < b.length && g.push({
        elem: this,
        handlers: b.slice(h)
      }), g;
    },
    fix: function fix(a) {
      if (a[m.expando]) return a;
      var b,
          c,
          d,
          e = a.type,
          f = a,
          g = this.fixHooks[e];
      g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new m.Event(f), b = d.length;

      while (b--) {
        c = d[b], a[c] = f[c];
      }

      return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a;
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function filter(a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function filter(a, b) {
        var c,
            d,
            e,
            f = b.button,
            g = b.fromElement;
        return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a;
      }
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function trigger() {
          if (this !== cb() && this.focus) try {
            return this.focus(), !1;
          } catch (a) {}
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function trigger() {
          return this === cb() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function trigger() {
          return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0;
        },
        _default: function _default(a) {
          return m.nodeName(a.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
        }
      }
    },
    simulate: function simulate(a, b, c, d) {
      var e = m.extend(new m.Event(), c, {
        type: a,
        isSimulated: !0,
        originalEvent: {}
      });
      d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
    }
  }, m.removeEvent = y.removeEventListener ? function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c, !1);
  } : function (a, b, c) {
    var d = "on" + b;
    a.detachEvent && (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c));
  }, m.Event = function (a, b) {
    return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ab : bb) : this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void (this[m.expando] = !0)) : new m.Event(a, b);
  }, m.Event.prototype = {
    isDefaultPrevented: bb,
    isPropagationStopped: bb,
    isImmediatePropagationStopped: bb,
    preventDefault: function preventDefault() {
      var a = this.originalEvent;
      this.isDefaultPrevented = ab, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
    },
    stopPropagation: function stopPropagation() {
      var a = this.originalEvent;
      this.isPropagationStopped = ab, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0);
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var a = this.originalEvent;
      this.isImmediatePropagationStopped = ab, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation();
    }
  }, m.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (a, b) {
    m.event.special[a] = {
      delegateType: b,
      bindType: b,
      handle: function handle(a) {
        var c,
            d = this,
            e = a.relatedTarget,
            f = a.handleObj;
        return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
      }
    };
  }), k.submitBubbles || (m.event.special.submit = {
    setup: function setup() {
      return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function (a) {
        var b = a.target,
            c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0;
        c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function (a) {
          a._submit_bubble = !0;
        }), m._data(c, "submitBubbles", !0));
      });
    },
    postDispatch: function postDispatch(a) {
      a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0));
    },
    teardown: function teardown() {
      return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit");
    }
  }), k.changeBubbles || (m.event.special.change = {
    setup: function setup() {
      return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function (a) {
        "checked" === a.originalEvent.propertyName && (this._just_changed = !0);
      }), m.event.add(this, "click._change", function (a) {
        this._just_changed && !a.isTrigger && (this._just_changed = !1), m.event.simulate("change", this, a, !0);
      })), !1) : void m.event.add(this, "beforeactivate._change", function (a) {
        var b = a.target;
        X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function (a) {
          !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0);
        }), m._data(b, "changeBubbles", !0));
      });
    },
    handle: function handle(a) {
      var b = a.target;
      return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0;
    },
    teardown: function teardown() {
      return m.event.remove(this, "._change"), !X.test(this.nodeName);
    }
  }), k.focusinBubbles || m.each({
    focus: "focusin",
    blur: "focusout"
  }, function (a, b) {
    var c = function c(a) {
      m.event.simulate(b, a.target, m.event.fix(a), !0);
    };

    m.event.special[b] = {
      setup: function setup() {
        var d = this.ownerDocument || this,
            e = m._data(d, b);

        e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1);
      },
      teardown: function teardown() {
        var d = this.ownerDocument || this,
            e = m._data(d, b) - 1;
        e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b));
      }
    };
  }), m.fn.extend({
    on: function on(a, b, c, d, e) {
      var f, g;

      if ("object" == typeof a) {
        "string" != typeof b && (c = c || b, b = void 0);

        for (f in a) {
          this.on(f, b, c, a[f], e);
        }

        return this;
      }

      if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = bb;else if (!d) return this;
      return 1 === e && (g = d, d = function d(a) {
        return m().off(a), g.apply(this, arguments);
      }, d.guid = g.guid || (g.guid = m.guid++)), this.each(function () {
        m.event.add(this, a, d, c, b);
      });
    },
    one: function one(a, b, c, d) {
      return this.on(a, b, c, d, 1);
    },
    off: function off(a, b, c) {
      var d, e;
      if (a && a.preventDefault && a.handleObj) return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;

      if ("object" == typeof a) {
        for (e in a) {
          this.off(e, b, a[e]);
        }

        return this;
      }

      return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = bb), this.each(function () {
        m.event.remove(this, a, c, b);
      });
    },
    trigger: function trigger(a, b) {
      return this.each(function () {
        m.event.trigger(a, b, this);
      });
    },
    triggerHandler: function triggerHandler(a, b) {
      var c = this[0];
      return c ? m.event.trigger(a, b, c, !0) : void 0;
    }
  });

  function db(a) {
    var b = eb.split("|"),
        c = a.createDocumentFragment();
    if (c.createElement) while (b.length) {
      c.createElement(b.pop());
    }
    return c;
  }

  var eb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
      fb = / jQuery\d+="(?:null|\d+)"/g,
      gb = new RegExp("<(?:" + eb + ")[\\s/>]", "i"),
      hb = /^\s+/,
      ib = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      jb = /<([\w:]+)/,
      kb = /<tbody/i,
      lb = /<|&#?\w+;/,
      mb = /<(?:script|style|link)/i,
      nb = /checked\s*(?:[^=]|=\s*.checked.)/i,
      ob = /^$|\/(?:java|ecma)script/i,
      pb = /^true\/(.*)/,
      qb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      rb = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    legend: [1, "<fieldset>", "</fieldset>"],
    area: [1, "<map>", "</map>"],
    param: [1, "<object>", "</object>"],
    thead: [1, "<table>", "</table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
  },
      sb = db(y),
      tb = sb.appendChild(y.createElement("div"));
  rb.optgroup = rb.option, rb.tbody = rb.tfoot = rb.colgroup = rb.caption = rb.thead, rb.th = rb.td;

  function ub(a, b) {
    var c,
        d,
        e = 0,
        f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== K ? a.querySelectorAll(b || "*") : void 0;
    if (!f) for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) {
      !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ub(d, b));
    }
    return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f;
  }

  function vb(a) {
    W.test(a.type) && (a.defaultChecked = a.checked);
  }

  function wb(a, b) {
    return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
  }

  function xb(a) {
    return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type, a;
  }

  function yb(a) {
    var b = pb.exec(a.type);
    return b ? a.type = b[1] : a.removeAttribute("type"), a;
  }

  function zb(a, b) {
    for (var c, d = 0; null != (c = a[d]); d++) {
      m._data(c, "globalEval", !b || m._data(b[d], "globalEval"));
    }
  }

  function Ab(a, b) {
    if (1 === b.nodeType && m.hasData(a)) {
      var c,
          d,
          e,
          f = m._data(a),
          g = m._data(b, f),
          h = f.events;

      if (h) {
        delete g.handle, g.events = {};

        for (c in h) {
          for (d = 0, e = h[c].length; e > d; d++) {
            m.event.add(b, c, h[c][d]);
          }
        }
      }

      g.data && (g.data = m.extend({}, g.data));
    }
  }

  function Bb(a, b) {
    var c, d, e;

    if (1 === b.nodeType) {
      if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) {
        e = m._data(b);

        for (d in e.events) {
          m.removeEvent(b, d, e.handle);
        }

        b.removeAttribute(m.expando);
      }

      "script" === c && b.text !== a.text ? (xb(b).text = a.text, yb(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
    }
  }

  m.extend({
    clone: function clone(a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i = m.contains(a.ownerDocument, a);
      if (k.html5Clone || m.isXMLDoc(a) || !gb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (tb.innerHTML = a.outerHTML, tb.removeChild(f = tb.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a))) for (d = ub(f), h = ub(a), g = 0; null != (e = h[g]); ++g) {
        d[g] && Bb(e, d[g]);
      }
      if (b) if (c) for (h = h || ub(a), d = d || ub(f), g = 0; null != (e = h[g]); g++) {
        Ab(e, d[g]);
      } else Ab(a, f);
      return d = ub(f, "script"), d.length > 0 && zb(d, !i && ub(a, "script")), d = h = e = null, f;
    },
    buildFragment: function buildFragment(a, b, c, d) {
      for (var e, f, g, h, i, j, l, n = a.length, o = db(b), p = [], q = 0; n > q; q++) {
        if (f = a[q], f || 0 === f) if ("object" === m.type(f)) m.merge(p, f.nodeType ? [f] : f);else if (lb.test(f)) {
          h = h || o.appendChild(b.createElement("div")), i = (jb.exec(f) || ["", ""])[1].toLowerCase(), l = rb[i] || rb._default, h.innerHTML = l[1] + f.replace(ib, "<$1></$2>") + l[2], e = l[0];

          while (e--) {
            h = h.lastChild;
          }

          if (!k.leadingWhitespace && hb.test(f) && p.push(b.createTextNode(hb.exec(f)[0])), !k.tbody) {
            f = "table" !== i || kb.test(f) ? "<table>" !== l[1] || kb.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length;

            while (e--) {
              m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
            }
          }

          m.merge(p, h.childNodes), h.textContent = "";

          while (h.firstChild) {
            h.removeChild(h.firstChild);
          }

          h = o.lastChild;
        } else p.push(b.createTextNode(f));
      }

      h && o.removeChild(h), k.appendChecked || m.grep(ub(p, "input"), vb), q = 0;

      while (f = p[q++]) {
        if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f), h = ub(o.appendChild(f), "script"), g && zb(h), c)) {
          e = 0;

          while (f = h[e++]) {
            ob.test(f.type || "") && c.push(f);
          }
        }
      }

      return h = null, o;
    },
    cleanData: function cleanData(a, b) {
      for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++) {
        if ((b || m.acceptData(d)) && (f = d[i], g = f && j[f])) {
          if (g.events) for (e in g.events) {
            n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
          }
          j[f] && (delete j[f], l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i) : d[i] = null, c.push(f));
        }
      }
    }
  }), m.fn.extend({
    text: function text(a) {
      return V(this, function (a) {
        return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a));
      }, null, a, arguments.length);
    },
    append: function append() {
      return this.domManip(arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = wb(this, a);
          b.appendChild(a);
        }
      });
    },
    prepend: function prepend() {
      return this.domManip(arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = wb(this, a);
          b.insertBefore(a, b.firstChild);
        }
      });
    },
    before: function before() {
      return this.domManip(arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this);
      });
    },
    after: function after() {
      return this.domManip(arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
      });
    },
    remove: function remove(a, b) {
      for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++) {
        b || 1 !== c.nodeType || m.cleanData(ub(c)), c.parentNode && (b && m.contains(c.ownerDocument, c) && zb(ub(c, "script")), c.parentNode.removeChild(c));
      }

      return this;
    },
    empty: function empty() {
      for (var a, b = 0; null != (a = this[b]); b++) {
        1 === a.nodeType && m.cleanData(ub(a, !1));

        while (a.firstChild) {
          a.removeChild(a.firstChild);
        }

        a.options && m.nodeName(a, "select") && (a.options.length = 0);
      }

      return this;
    },
    clone: function clone(a, b) {
      return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
        return m.clone(this, a, b);
      });
    },
    html: function html(a) {
      return V(this, function (a) {
        var b = this[0] || {},
            c = 0,
            d = this.length;
        if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(fb, "") : void 0;

        if (!("string" != typeof a || mb.test(a) || !k.htmlSerialize && gb.test(a) || !k.leadingWhitespace && hb.test(a) || rb[(jb.exec(a) || ["", ""])[1].toLowerCase()])) {
          a = a.replace(ib, "<$1></$2>");

          try {
            for (; d > c; c++) {
              b = this[c] || {}, 1 === b.nodeType && (m.cleanData(ub(b, !1)), b.innerHTML = a);
            }

            b = 0;
          } catch (e) {}
        }

        b && this.empty().append(a);
      }, null, a, arguments.length);
    },
    replaceWith: function replaceWith() {
      var a = arguments[0];
      return this.domManip(arguments, function (b) {
        a = this.parentNode, m.cleanData(ub(this)), a && a.replaceChild(b, this);
      }), a && (a.length || a.nodeType) ? this : this.remove();
    },
    detach: function detach(a) {
      return this.remove(a, !0);
    },
    domManip: function domManip(a, b) {
      a = e.apply([], a);
      var c,
          d,
          f,
          g,
          h,
          i,
          j = 0,
          l = this.length,
          n = this,
          o = l - 1,
          p = a[0],
          q = m.isFunction(p);
      if (q || l > 1 && "string" == typeof p && !k.checkClone && nb.test(p)) return this.each(function (c) {
        var d = n.eq(c);
        q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
      });

      if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
        for (g = m.map(ub(i, "script"), xb), f = g.length; l > j; j++) {
          d = i, j !== o && (d = m.clone(d, !0, !0), f && m.merge(g, ub(d, "script"))), b.call(this[j], d, j);
        }

        if (f) for (h = g[g.length - 1].ownerDocument, m.map(g, yb), j = 0; f > j; j++) {
          d = g[j], ob.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qb, "")));
        }
        i = c = null;
      }

      return this;
    }
  }), m.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (a, b) {
    m.fn[a] = function (a) {
      for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++) {
        c = d === h ? this : this.clone(!0), m(g[d])[b](c), f.apply(e, c.get());
      }

      return this.pushStack(e);
    };
  });
  var Cb,
      Db = {};

  function Eb(b, c) {
    var d,
        e = m(c.createElement(b)).appendTo(c.body),
        f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display");
    return e.detach(), f;
  }

  function Fb(a) {
    var b = y,
        c = Db[a];
    return c || (c = Eb(a, b), "none" !== c && c || (Cb = (Cb || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Cb[0].contentWindow || Cb[0].contentDocument).document, b.write(), b.close(), c = Eb(a, b), Cb.detach()), Db[a] = c), c;
  }

  !function () {
    var a;

    k.shrinkWrapBlocks = function () {
      if (null != a) return a;
      a = !1;
      var b, c, d;
      return c = y.getElementsByTagName("body")[0], c && c.style ? (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(y.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0;
    };
  }();
  var Gb = /^margin/,
      Hb = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
      Ib,
      Jb,
      Kb = /^(top|right|bottom|left)$/;
  a.getComputedStyle ? (Ib = function Ib(b) {
    return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null);
  }, Jb = function Jb(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.style;
    return c = c || Ib(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), Hb.test(g) && Gb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + "";
  }) : y.documentElement.currentStyle && (Ib = function Ib(a) {
    return a.currentStyle;
  }, Jb = function Jb(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.style;
    return c = c || Ib(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Hb.test(g) && !Kb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto";
  });

  function Lb(a, b) {
    return {
      get: function get() {
        var c = a();
        if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments);
      }
    };
  }

  !function () {
    var b, c, d, e, f, g, h;

    if (b = y.createElement("div"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = d && d.style) {
      var _i = function _i() {
        var b, c, d, i;
        c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", e = f = !1, h = !0, a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null) || {}).top, f = "4px" === (a.getComputedStyle(b, null) || {
          width: "4px"
        }).width, i = b.appendChild(y.createElement("div")), i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", b.style.width = "1px", h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight), b.removeChild(i)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = b.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", g = 0 === i[0].offsetHeight, g && (i[0].style.display = "", i[1].style.display = "none", g = 0 === i[0].offsetHeight), c.removeChild(d));
      };

      c.cssText = "float:left;opacity:.5", k.opacity = "0.5" === c.opacity, k.cssFloat = !!c.cssFloat, b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === b.style.backgroundClip, k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, m.extend(k, {
        reliableHiddenOffsets: function reliableHiddenOffsets() {
          return null == g && _i(), g;
        },
        boxSizingReliable: function boxSizingReliable() {
          return null == f && _i(), f;
        },
        pixelPosition: function pixelPosition() {
          return null == e && _i(), e;
        },
        reliableMarginRight: function reliableMarginRight() {
          return null == h && _i(), h;
        }
      });
    }
  }(), m.swap = function (a, b, c, d) {
    var e,
        f,
        g = {};

    for (f in b) {
      g[f] = a.style[f], a.style[f] = b[f];
    }

    e = c.apply(a, d || []);

    for (f in b) {
      a.style[f] = g[f];
    }

    return e;
  };
  var Mb = /alpha\([^)]*\)/i,
      Nb = /opacity\s*=\s*([^)]*)/,
      Ob = /^(none|table(?!-c[ea]).+)/,
      Pb = new RegExp("^(" + S + ")(.*)$", "i"),
      Qb = new RegExp("^([+-])=(" + S + ")", "i"),
      Rb = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      Sb = {
    letterSpacing: "0",
    fontWeight: "400"
  },
      Tb = ["Webkit", "O", "Moz", "ms"];

  function Ub(a, b) {
    if (b in a) return b;
    var c = b.charAt(0).toUpperCase() + b.slice(1),
        d = b,
        e = Tb.length;

    while (e--) {
      if (b = Tb[e] + c, b in a) return b;
    }

    return d;
  }

  function Vb(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) {
      d = a[g], d.style && (f[g] = m._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fb(d.nodeName)))) : (e = U(d), (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display"))));
    }

    for (g = 0; h > g; g++) {
      d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
    }

    return a;
  }

  function Wb(a, b, c) {
    var d = Pb.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
  }

  function Xb(a, b, c, d, e) {
    for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) {
      "margin" === c && (g += m.css(a, c + T[f], !0, e)), d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)), "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e), "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e)));
    }

    return g;
  }

  function Yb(a, b, c) {
    var d = !0,
        e = "width" === b ? a.offsetWidth : a.offsetHeight,
        f = Ib(a),
        g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);

    if (0 >= e || null == e) {
      if (e = Jb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Hb.test(e)) return e;
      d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
    }

    return e + Xb(a, b, c || (g ? "border" : "content"), d, f) + "px";
  }

  m.extend({
    cssHooks: {
      opacity: {
        get: function get(a, b) {
          if (b) {
            var c = Jb(a, "opacity");
            return "" === c ? "1" : c;
          }
        }
      }
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      "float": k.cssFloat ? "cssFloat" : "styleFloat"
    },
    style: function style(a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
            f,
            g,
            h = m.camelCase(b),
            i = a.style;
        if (b = m.cssProps[h] || (m.cssProps[h] = Ub(i, h)), g = m.cssHooks[b] || m.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
        if (f = typeof c, "string" === f && (e = Qb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
          i[b] = c;
        } catch (j) {}
      }
    },
    css: function css(a, b, c, d) {
      var e,
          f,
          g,
          h = m.camelCase(b);
      return b = m.cssProps[h] || (m.cssProps[h] = Ub(a.style, h)), g = m.cssHooks[b] || m.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Jb(a, b, d)), "normal" === f && b in Sb && (f = Sb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f) : f;
    }
  }), m.each(["height", "width"], function (a, b) {
    m.cssHooks[b] = {
      get: function get(a, c, d) {
        return c ? Ob.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Rb, function () {
          return Yb(a, b, d);
        }) : Yb(a, b, d) : void 0;
      },
      set: function set(a, c, d) {
        var e = d && Ib(a);
        return Wb(a, c, d ? Xb(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0);
      }
    };
  }), k.opacity || (m.cssHooks.opacity = {
    get: function get(a, b) {
      return Nb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : "";
    },
    set: function set(a, b) {
      var c = a.style,
          d = a.currentStyle,
          e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
          f = d && d.filter || c.filter || "";
      c.zoom = 1, (b >= 1 || "" === b) && "" === m.trim(f.replace(Mb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Mb.test(f) ? f.replace(Mb, e) : f + " " + e);
    }
  }), m.cssHooks.marginRight = Lb(k.reliableMarginRight, function (a, b) {
    return b ? m.swap(a, {
      display: "inline-block"
    }, Jb, [a, "marginRight"]) : void 0;
  }), m.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (a, b) {
    m.cssHooks[a + b] = {
      expand: function expand(c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) {
          e[a + T[d] + b] = f[d] || f[d - 2] || f[0];
        }

        return e;
      }
    }, Gb.test(a) || (m.cssHooks[a + b].set = Wb);
  }), m.fn.extend({
    css: function css(a, b) {
      return V(this, function (a, b, c) {
        var d,
            e,
            f = {},
            g = 0;

        if (m.isArray(b)) {
          for (d = Ib(a), e = b.length; e > g; g++) {
            f[b[g]] = m.css(a, b[g], !1, d);
          }

          return f;
        }

        return void 0 !== c ? m.style(a, b, c) : m.css(a, b);
      }, a, b, arguments.length > 1);
    },
    show: function show() {
      return Vb(this, !0);
    },
    hide: function hide() {
      return Vb(this);
    },
    toggle: function toggle(a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        U(this) ? m(this).show() : m(this).hide();
      });
    }
  });

  function Zb(a, b, c, d, e) {
    return new Zb.prototype.init(a, b, c, d, e);
  }

  m.Tween = Zb, Zb.prototype = {
    constructor: Zb,
    init: function init(a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (m.cssNumber[c] ? "" : "px");
    },
    cur: function cur() {
      var a = Zb.propHooks[this.prop];
      return a && a.get ? a.get(this) : Zb.propHooks._default.get(this);
    },
    run: function run(a) {
      var b,
          c = Zb.propHooks[this.prop];
      return this.pos = b = this.options.duration ? m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Zb.propHooks._default.set(this), this;
    }
  }, Zb.prototype.init.prototype = Zb.prototype, Zb.propHooks = {
    _default: {
      get: function get(a) {
        var b;
        return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop];
      },
      set: function set(a) {
        m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
      }
    }
  }, Zb.propHooks.scrollTop = Zb.propHooks.scrollLeft = {
    set: function set(a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
    }
  }, m.easing = {
    linear: function linear(a) {
      return a;
    },
    swing: function swing(a) {
      return .5 - Math.cos(a * Math.PI) / 2;
    }
  }, m.fx = Zb.prototype.init, m.fx.step = {};

  var $b,
      _b,
      ac = /^(?:toggle|show|hide)$/,
      bc = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
      cc = /queueHooks$/,
      dc = [ic],
      ec = {
    "*": [function (a, b) {
      var c = this.createTween(a, b),
          d = c.cur(),
          e = bc.exec(b),
          f = e && e[3] || (m.cssNumber[a] ? "" : "px"),
          g = (m.cssNumber[a] || "px" !== f && +d) && bc.exec(m.css(c.elem, a)),
          h = 1,
          i = 20;

      if (g && g[3] !== f) {
        f = f || g[3], e = e || [], g = +d || 1;

        do {
          h = h || ".5", g /= h, m.style(c.elem, a, g + f);
        } while (h !== (h = c.cur() / d) && 1 !== h && --i);
      }

      return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c;
    }]
  };

  function fc() {
    return setTimeout(function () {
      $b = void 0;
    }), $b = m.now();
  }

  function gc(a, b) {
    var c,
        d = {
      height: a
    },
        e = 0;

    for (b = b ? 1 : 0; 4 > e; e += 2 - b) {
      c = T[e], d["margin" + c] = d["padding" + c] = a;
    }

    return b && (d.opacity = d.width = a), d;
  }

  function hc(a, b, c) {
    for (var d, e = (ec[b] || []).concat(ec["*"]), f = 0, g = e.length; g > f; f++) {
      if (d = e[f].call(c, b, a)) return d;
    }
  }

  function ic(a, b, c) {
    var d,
        e,
        f,
        g,
        h,
        i,
        j,
        l,
        n = this,
        o = {},
        p = a.style,
        q = a.nodeType && U(a),
        r = m._data(a, "fxshow");

    c.queue || (h = m._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
      h.unqueued || i();
    }), h.unqueued++, n.always(function () {
      n.always(function () {
        h.unqueued--, m.queue(a, "fx").length || h.empty.fire();
      });
    })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = m.css(a, "display"), l = "none" === j ? m._data(a, "olddisplay") || Fb(a.nodeName) : j, "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fb(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", k.shrinkWrapBlocks() || n.always(function () {
      p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2];
    }));

    for (d in b) {
      if (e = b[d], ac.exec(e)) {
        if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
          if ("show" !== e || !r || void 0 === r[d]) continue;
          q = !0;
        }

        o[d] = r && r[d] || m.style(a, d);
      } else j = void 0;
    }

    if (m.isEmptyObject(o)) "inline" === ("none" === j ? Fb(a.nodeName) : j) && (p.display = j);else {
      r ? "hidden" in r && (q = r.hidden) : r = m._data(a, "fxshow", {}), f && (r.hidden = !q), q ? m(a).show() : n.done(function () {
        m(a).hide();
      }), n.done(function () {
        var b;

        m._removeData(a, "fxshow");

        for (b in o) {
          m.style(a, b, o[b]);
        }
      });

      for (d in o) {
        g = hc(q ? r[d] : 0, d, n), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0));
      }
    }
  }

  function jc(a, b) {
    var c, d, e, f, g;

    for (c in a) {
      if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g && "expand" in g) {
        f = g.expand(f), delete a[d];

        for (c in f) {
          c in a || (a[c] = f[c], b[c] = e);
        }
      } else b[d] = e;
    }
  }

  function kc(a, b, c) {
    var d,
        e,
        f = 0,
        g = dc.length,
        h = m.Deferred().always(function () {
      delete i.elem;
    }),
        i = function i() {
      if (e) return !1;

      for (var b = $b || fc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) {
        j.tweens[g].run(f);
      }

      return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
    },
        j = h.promise({
      elem: a,
      props: m.extend({}, b),
      opts: m.extend(!0, {
        specialEasing: {}
      }, c),
      originalProperties: b,
      originalOptions: c,
      startTime: $b || fc(),
      duration: c.duration,
      tweens: [],
      createTween: function createTween(b, c) {
        var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
        return j.tweens.push(d), d;
      },
      stop: function stop(b) {
        var c = 0,
            d = b ? j.tweens.length : 0;
        if (e) return this;

        for (e = !0; d > c; c++) {
          j.tweens[c].run(1);
        }

        return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this;
      }
    }),
        k = j.props;

    for (jc(k, j.opts.specialEasing); g > f; f++) {
      if (d = dc[f].call(j, a, k, j.opts)) return d;
    }

    return m.map(k, hc, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(m.extend(i, {
      elem: a,
      anim: j,
      queue: j.opts.queue
    })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
  }

  m.Animation = m.extend(kc, {
    tweener: function tweener(a, b) {
      m.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");

      for (var c, d = 0, e = a.length; e > d; d++) {
        c = a[d], ec[c] = ec[c] || [], ec[c].unshift(b);
      }
    },
    prefilter: function prefilter(a, b) {
      b ? dc.unshift(a) : dc.push(a);
    }
  }), m.speed = function (a, b, c) {
    var d = a && "object" == typeof a ? m.extend({}, a) : {
      complete: c || !c && b || m.isFunction(a) && a,
      duration: a,
      easing: c && b || b && !m.isFunction(b) && b
    };
    return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
      m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue);
    }, d;
  }, m.fn.extend({
    fadeTo: function fadeTo(a, b, c, d) {
      return this.filter(U).css("opacity", 0).show().end().animate({
        opacity: b
      }, a, c, d);
    },
    animate: function animate(a, b, c, d) {
      var e = m.isEmptyObject(a),
          f = m.speed(b, c, d),
          g = function g() {
        var b = kc(this, m.extend({}, a), f);
        (e || m._data(this, "finish")) && b.stop(!0);
      };

      return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
    },
    stop: function stop(a, b, c) {
      var d = function d(a) {
        var b = a.stop;
        delete a.stop, b(c);
      };

      return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
        var b = !0,
            e = null != a && a + "queueHooks",
            f = m.timers,
            g = m._data(this);

        if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) {
          g[e] && g[e].stop && cc.test(e) && d(g[e]);
        }

        for (e = f.length; e--;) {
          f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
        }

        (b || !c) && m.dequeue(this, a);
      });
    },
    finish: function finish(a) {
      return a !== !1 && (a = a || "fx"), this.each(function () {
        var b,
            c = m._data(this),
            d = c[a + "queue"],
            e = c[a + "queueHooks"],
            f = m.timers,
            g = d ? d.length : 0;

        for (c.finish = !0, m.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
          f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
        }

        for (b = 0; g > b; b++) {
          d[b] && d[b].finish && d[b].finish.call(this);
        }

        delete c.finish;
      });
    }
  }), m.each(["toggle", "show", "hide"], function (a, b) {
    var c = m.fn[b];

    m.fn[b] = function (a, d, e) {
      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gc(b, !0), a, d, e);
    };
  }), m.each({
    slideDown: gc("show"),
    slideUp: gc("hide"),
    slideToggle: gc("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (a, b) {
    m.fn[a] = function (a, c, d) {
      return this.animate(b, a, c, d);
    };
  }), m.timers = [], m.fx.tick = function () {
    var a,
        b = m.timers,
        c = 0;

    for ($b = m.now(); c < b.length; c++) {
      a = b[c], a() || b[c] !== a || b.splice(c--, 1);
    }

    b.length || m.fx.stop(), $b = void 0;
  }, m.fx.timer = function (a) {
    m.timers.push(a), a() ? m.fx.start() : m.timers.pop();
  }, m.fx.interval = 13, m.fx.start = function () {
    _b || (_b = setInterval(m.fx.tick, m.fx.interval));
  }, m.fx.stop = function () {
    clearInterval(_b), _b = null;
  }, m.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, m.fn.delay = function (a, b) {
    return a = m.fx ? m.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
      var d = setTimeout(b, a);

      c.stop = function () {
        clearTimeout(d);
      };
    });
  }, function () {
    var a, b, c, d, e;
    b = y.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = y.createElement("select"), e = c.appendChild(y.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", k.getSetAttribute = "t" !== b.className, k.style = /top/.test(d.getAttribute("style")), k.hrefNormalized = "/a" === d.getAttribute("href"), k.checkOn = !!a.value, k.optSelected = e.selected, k.enctype = !!y.createElement("form").enctype, c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement("input"), a.setAttribute("value", ""), k.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), k.radioValue = "t" === a.value;
  }();
  var lc = /\r/g;
  m.fn.extend({
    val: function val(a) {
      var b,
          c,
          d,
          e = this[0];
      {
        if (arguments.length) return d = m.isFunction(a), this.each(function (c) {
          var e;
          1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function (a) {
            return null == a ? "" : a + "";
          })), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
        });
        if (e) return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(lc, "") : null == c ? "" : c);
      }
    }
  }), m.extend({
    valHooks: {
      option: {
        get: function get(a) {
          var b = m.find.attr(a, "value");
          return null != b ? b : m.trim(m.text(a));
        }
      },
      select: {
        get: function get(a) {
          for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) {
            if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
              if (b = m(c).val(), f) return b;
              g.push(b);
            }
          }

          return g;
        },
        set: function set(a, b) {
          var c,
              d,
              e = a.options,
              f = m.makeArray(b),
              g = e.length;

          while (g--) {
            if (d = e[g], m.inArray(m.valHooks.option.get(d), f) >= 0) try {
              d.selected = c = !0;
            } catch (h) {
              d.scrollHeight;
            } else d.selected = !1;
          }

          return c || (a.selectedIndex = -1), e;
        }
      }
    }
  }), m.each(["radio", "checkbox"], function () {
    m.valHooks[this] = {
      set: function set(a, b) {
        return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0;
      }
    }, k.checkOn || (m.valHooks[this].get = function (a) {
      return null === a.getAttribute("value") ? "on" : a.value;
    });
  });
  var mc,
      nc,
      oc = m.expr.attrHandle,
      pc = /^(?:checked|selected)$/i,
      qc = k.getSetAttribute,
      rc = k.input;
  m.fn.extend({
    attr: function attr(a, b) {
      return V(this, m.attr, a, b, arguments.length > 1);
    },
    removeAttr: function removeAttr(a) {
      return this.each(function () {
        m.removeAttr(this, a);
      });
    }
  }), m.extend({
    attr: function attr(a, b, c) {
      var d,
          e,
          f = a.nodeType;
      if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nc : mc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void m.removeAttr(a, b));
    },
    removeAttr: function removeAttr(a, b) {
      var c,
          d,
          e = 0,
          f = b && b.match(E);
      if (f && 1 === a.nodeType) while (c = f[e++]) {
        d = m.propFix[c] || c, m.expr.match.bool.test(c) ? rc && qc || !pc.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""), a.removeAttribute(qc ? c : d);
      }
    },
    attrHooks: {
      type: {
        set: function set(a, b) {
          if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
            var c = a.value;
            return a.setAttribute("type", b), c && (a.value = c), b;
          }
        }
      }
    }
  }), nc = {
    set: function set(a, b, c) {
      return b === !1 ? m.removeAttr(a, c) : rc && qc || !pc.test(c) ? a.setAttribute(!qc && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0, c;
    }
  }, m.each(m.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = oc[b] || m.find.attr;
    oc[b] = rc && qc || !pc.test(b) ? function (a, b, d) {
      var e, f;
      return d || (f = oc[b], oc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, oc[b] = f), e;
    } : function (a, b, c) {
      return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null;
    };
  }), rc && qc || (m.attrHooks.value = {
    set: function set(a, b, c) {
      return m.nodeName(a, "input") ? void (a.defaultValue = b) : mc && mc.set(a, b, c);
    }
  }), qc || (mc = {
    set: function set(a, b, c) {
      var d = a.getAttributeNode(c);
      return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0;
    }
  }, oc.id = oc.name = oc.coords = function (a, b, c) {
    var d;
    return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null;
  }, m.valHooks.button = {
    get: function get(a, b) {
      var c = a.getAttributeNode(b);
      return c && c.specified ? c.value : void 0;
    },
    set: mc.set
  }, m.attrHooks.contenteditable = {
    set: function set(a, b, c) {
      mc.set(a, "" === b ? !1 : b, c);
    }
  }, m.each(["width", "height"], function (a, b) {
    m.attrHooks[b] = {
      set: function set(a, c) {
        return "" === c ? (a.setAttribute(b, "auto"), c) : void 0;
      }
    };
  })), k.style || (m.attrHooks.style = {
    get: function get(a) {
      return a.style.cssText || void 0;
    },
    set: function set(a, b) {
      return a.style.cssText = b + "";
    }
  });
  var sc = /^(?:input|select|textarea|button|object)$/i,
      tc = /^(?:a|area)$/i;
  m.fn.extend({
    prop: function prop(a, b) {
      return V(this, m.prop, a, b, arguments.length > 1);
    },
    removeProp: function removeProp(a) {
      return a = m.propFix[a] || a, this.each(function () {
        try {
          this[a] = void 0, delete this[a];
        } catch (b) {}
      });
    }
  }), m.extend({
    propFix: {
      "for": "htmlFor",
      "class": "className"
    },
    prop: function prop(a, b, c) {
      var d,
          e,
          f,
          g = a.nodeType;
      if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !m.isXMLDoc(a), f && (b = m.propFix[b] || b, e = m.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
    },
    propHooks: {
      tabIndex: {
        get: function get(a) {
          var b = m.find.attr(a, "tabindex");
          return b ? parseInt(b, 10) : sc.test(a.nodeName) || tc.test(a.nodeName) && a.href ? 0 : -1;
        }
      }
    }
  }), k.hrefNormalized || m.each(["href", "src"], function (a, b) {
    m.propHooks[b] = {
      get: function get(a) {
        return a.getAttribute(b, 4);
      }
    };
  }), k.optSelected || (m.propHooks.selected = {
    get: function get(a) {
      var b = a.parentNode;
      return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null;
    }
  }), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    m.propFix[this.toLowerCase()] = this;
  }), k.enctype || (m.propFix.enctype = "encoding");
  var uc = /[\t\r\n\f]/g;
  m.fn.extend({
    addClass: function addClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h = 0,
          i = this.length,
          j = "string" == typeof a && a;
      if (m.isFunction(a)) return this.each(function (b) {
        m(this).addClass(a.call(this, b, this.className));
      });
      if (j) for (b = (a || "").match(E) || []; i > h; h++) {
        if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : " ")) {
          f = 0;

          while (e = b[f++]) {
            d.indexOf(" " + e + " ") < 0 && (d += e + " ");
          }

          g = m.trim(d), c.className !== g && (c.className = g);
        }
      }
      return this;
    },
    removeClass: function removeClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h = 0,
          i = this.length,
          j = 0 === arguments.length || "string" == typeof a && a;
      if (m.isFunction(a)) return this.each(function (b) {
        m(this).removeClass(a.call(this, b, this.className));
      });
      if (j) for (b = (a || "").match(E) || []; i > h; h++) {
        if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : "")) {
          f = 0;

          while (e = b[f++]) {
            while (d.indexOf(" " + e + " ") >= 0) {
              d = d.replace(" " + e + " ", " ");
            }
          }

          g = a ? m.trim(d) : "", c.className !== g && (c.className = g);
        }
      }
      return this;
    },
    toggleClass: function toggleClass(a, b) {
      var c = typeof a;
      return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function (c) {
        m(this).toggleClass(a.call(this, c, this.className, b), b);
      } : function () {
        if ("string" === c) {
          var b,
              d = 0,
              e = m(this),
              f = a.match(E) || [];

          while (b = f[d++]) {
            e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
          }
        } else (c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "");
      });
    },
    hasClass: function hasClass(a) {
      for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) {
        if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(uc, " ").indexOf(b) >= 0) return !0;
      }

      return !1;
    }
  }), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
    m.fn[b] = function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
    };
  }), m.fn.extend({
    hover: function hover(a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    },
    bind: function bind(a, b, c) {
      return this.on(a, null, b, c);
    },
    unbind: function unbind(a, b) {
      return this.off(a, null, b);
    },
    delegate: function delegate(a, b, c, d) {
      return this.on(b, a, c, d);
    },
    undelegate: function undelegate(a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
    }
  });
  var vc = m.now(),
      wc = /\?/,
      xc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  m.parseJSON = function (b) {
    if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
    var c,
        d = null,
        e = m.trim(b + "");
    return e && !m.trim(e.replace(xc, function (a, b, e, f) {
      return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "");
    })) ? Function("return " + e)() : m.error("Invalid JSON: " + b);
  }, m.parseXML = function (b) {
    var c, d;
    if (!b || "string" != typeof b) return null;

    try {
      a.DOMParser ? (d = new DOMParser(), c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b));
    } catch (e) {
      c = void 0;
    }

    return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b), c;
  };
  var yc,
      zc,
      Ac = /#.*$/,
      Bc = /([?&])_=[^&]*/,
      Cc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
      Dc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Ec = /^(?:GET|HEAD)$/,
      Fc = /^\/\//,
      Gc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      Hc = {},
      Ic = {},
      Jc = "*/".concat("*");

  try {
    zc = location.href;
  } catch (Kc) {
    zc = y.createElement("a"), zc.href = "", zc = zc.href;
  }

  yc = Gc.exec(zc.toLowerCase()) || [];

  function Lc(a) {
    return function (b, c) {
      "string" != typeof b && (c = b, b = "*");
      var d,
          e = 0,
          f = b.toLowerCase().match(E) || [];
      if (m.isFunction(c)) while (d = f[e++]) {
        "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
      }
    };
  }

  function Mc(a, b, c, d) {
    var e = {},
        f = a === Ic;

    function g(h) {
      var i;
      return e[h] = !0, m.each(a[h] || [], function (a, h) {
        var j = h(b, c, d);
        return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
      }), i;
    }

    return g(b.dataTypes[0]) || !e["*"] && g("*");
  }

  function Nc(a, b) {
    var c,
        d,
        e = m.ajaxSettings.flatOptions || {};

    for (d in b) {
      void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
    }

    return c && m.extend(!0, a, c), a;
  }

  function Oc(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.contents,
        i = a.dataTypes;

    while ("*" === i[0]) {
      i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
    }

    if (e) for (g in h) {
      if (h[g] && h[g].test(e)) {
        i.unshift(g);
        break;
      }
    }
    if (i[0] in c) f = i[0];else {
      for (g in c) {
        if (!i[0] || a.converters[g + " " + i[0]]) {
          f = g;
          break;
        }

        d || (d = g);
      }

      f = f || d;
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }

  function Pc(a, b, c, d) {
    var e,
        f,
        g,
        h,
        i,
        j = {},
        k = a.dataTypes.slice();
    if (k[1]) for (g in a.converters) {
      j[g.toLowerCase()] = a.converters[g];
    }
    f = k.shift();

    while (f) {
      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
        if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) {
          if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
            break;
          }
        }
        if (g !== !0) if (g && a["throws"]) b = g(b);else try {
          b = g(b);
        } catch (l) {
          return {
            state: "parsererror",
            error: g ? l : "No conversion from " + i + " to " + f
          };
        }
      }
    }

    return {
      state: "success",
      data: b
    };
  }

  m.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: zc,
      type: "GET",
      isLocal: Dc.test(yc[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Jc,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": m.parseJSON,
        "text xml": m.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(a, b) {
      return b ? Nc(Nc(a, m.ajaxSettings), b) : Nc(m.ajaxSettings, a);
    },
    ajaxPrefilter: Lc(Hc),
    ajaxTransport: Lc(Ic),
    ajax: function ajax(a, b) {
      "object" == typeof a && (b = a, a = void 0), b = b || {};
      var c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = m.ajaxSetup({}, b),
          l = k.context || k,
          n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event,
          o = m.Deferred(),
          p = m.Callbacks("once memory"),
          q = k.statusCode || {},
          r = {},
          s = {},
          t = 0,
          u = "canceled",
          v = {
        readyState: 0,
        getResponseHeader: function getResponseHeader(a) {
          var b;

          if (2 === t) {
            if (!j) {
              j = {};

              while (b = Cc.exec(f)) {
                j[b[1].toLowerCase()] = b[2];
              }
            }

            b = j[a.toLowerCase()];
          }

          return null == b ? null : b;
        },
        getAllResponseHeaders: function getAllResponseHeaders() {
          return 2 === t ? f : null;
        },
        setRequestHeader: function setRequestHeader(a, b) {
          var c = a.toLowerCase();
          return t || (a = s[c] = s[c] || a, r[a] = b), this;
        },
        overrideMimeType: function overrideMimeType(a) {
          return t || (k.mimeType = a), this;
        },
        statusCode: function statusCode(a) {
          var b;
          if (a) if (2 > t) for (b in a) {
            q[b] = [q[b], a[b]];
          } else v.always(a[v.status]);
          return this;
        },
        abort: function abort(a) {
          var b = a || u;
          return i && i.abort(b), x(0, b), this;
        }
      };
      if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || zc) + "").replace(Ac, "").replace(Fc, yc[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (c = Gc.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === yc[1] && c[2] === yc[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yc[3] || ("http:" === yc[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)), Mc(Hc, k, b, v), 2 === t) return v;
      h = m.event && k.global, h && 0 === m.active++ && m.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Ec.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (wc.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Bc.test(e) ? e.replace(Bc, "$1_=" + vc++) : e + (wc.test(e) ? "&" : "?") + "_=" + vc++)), k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]), m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jc + "; q=0.01" : "") : k.accepts["*"]);

      for (d in k.headers) {
        v.setRequestHeader(d, k.headers[d]);
      }

      if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
      u = "abort";

      for (d in {
        success: 1,
        error: 1,
        complete: 1
      }) {
        v[d](k[d]);
      }

      if (i = Mc(Ic, k, b, v)) {
        v.readyState = 1, h && n.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
          v.abort("timeout");
        }, k.timeout));

        try {
          t = 1, i.send(r, x);
        } catch (w) {
          if (!(2 > t)) throw w;
          x(-1, w);
        }
      } else x(-1, "No Transport");

      function x(a, b, c, d) {
        var j,
            r,
            s,
            u,
            w,
            x = b;
        2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Oc(k, v, c)), u = Pc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (m.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (m.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (n.trigger("ajaxComplete", [v, k]), --m.active || m.event.trigger("ajaxStop")));
      }

      return v;
    },
    getJSON: function getJSON(a, b, c) {
      return m.get(a, b, c, "json");
    },
    getScript: function getScript(a, b) {
      return m.get(a, void 0, b, "script");
    }
  }), m.each(["get", "post"], function (a, b) {
    m[b] = function (a, c, d, e) {
      return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax({
        url: a,
        type: b,
        dataType: e,
        data: c,
        success: d
      });
    };
  }), m._evalUrl = function (a) {
    return m.ajax({
      url: a,
      type: "GET",
      dataType: "script",
      async: !1,
      global: !1,
      "throws": !0
    });
  }, m.fn.extend({
    wrapAll: function wrapAll(a) {
      if (m.isFunction(a)) return this.each(function (b) {
        m(this).wrapAll(a.call(this, b));
      });

      if (this[0]) {
        var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
        this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
          var a = this;

          while (a.firstChild && 1 === a.firstChild.nodeType) {
            a = a.firstChild;
          }

          return a;
        }).append(this);
      }

      return this;
    },
    wrapInner: function wrapInner(a) {
      return this.each(m.isFunction(a) ? function (b) {
        m(this).wrapInner(a.call(this, b));
      } : function () {
        var b = m(this),
            c = b.contents();
        c.length ? c.wrapAll(a) : b.append(a);
      });
    },
    wrap: function wrap(a) {
      var b = m.isFunction(a);
      return this.each(function (c) {
        m(this).wrapAll(b ? a.call(this, c) : a);
      });
    },
    unwrap: function unwrap() {
      return this.parent().each(function () {
        m.nodeName(this, "body") || m(this).replaceWith(this.childNodes);
      }).end();
    }
  }), m.expr.filters.hidden = function (a) {
    return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display"));
  }, m.expr.filters.visible = function (a) {
    return !m.expr.filters.hidden(a);
  };
  var Qc = /%20/g,
      Rc = /\[\]$/,
      Sc = /\r?\n/g,
      Tc = /^(?:submit|button|image|reset|file)$/i,
      Uc = /^(?:input|select|textarea|keygen)/i;

  function Vc(a, b, c, d) {
    var e;
    if (m.isArray(b)) m.each(b, function (b, e) {
      c || Rc.test(a) ? d(a, e) : Vc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
    });else if (c || "object" !== m.type(b)) d(a, b);else for (e in b) {
      Vc(a + "[" + e + "]", b[e], c, d);
    }
  }

  m.param = function (a, b) {
    var c,
        d = [],
        e = function e(a, b) {
      b = m.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
    };

    if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery && !m.isPlainObject(a)) m.each(a, function () {
      e(this.name, this.value);
    });else for (c in a) {
      Vc(c, a[c], b, e);
    }
    return d.join("&").replace(Qc, "+");
  }, m.fn.extend({
    serialize: function serialize() {
      return m.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var a = m.prop(this, "elements");
        return a ? m.makeArray(a) : this;
      }).filter(function () {
        var a = this.type;
        return this.name && !m(this).is(":disabled") && Uc.test(this.nodeName) && !Tc.test(a) && (this.checked || !W.test(a));
      }).map(function (a, b) {
        var c = m(this).val();
        return null == c ? null : m.isArray(c) ? m.map(c, function (a) {
          return {
            name: b.name,
            value: a.replace(Sc, "\r\n")
          };
        }) : {
          name: b.name,
          value: c.replace(Sc, "\r\n")
        };
      }).get();
    }
  }), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
    return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zc() || $c();
  } : Zc;
  var Wc = 0,
      Xc = {},
      Yc = m.ajaxSettings.xhr();
  a.attachEvent && a.attachEvent("onunload", function () {
    for (var a in Xc) {
      Xc[a](void 0, !0);
    }
  }), k.cors = !!Yc && "withCredentials" in Yc, Yc = k.ajax = !!Yc, Yc && m.ajaxTransport(function (a) {
    if (!a.crossDomain || k.cors) {
      var _b3;

      return {
        send: function send(c, d) {
          var e,
              f = a.xhr(),
              g = ++Wc;
          if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) {
            f[e] = a.xhrFields[e];
          }
          a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");

          for (e in c) {
            void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
          }

          f.send(a.hasContent && a.data || null), _b3 = function b(c, e) {
            var h, i, j;
            if (_b3 && (e || 4 === f.readyState)) if (delete Xc[g], _b3 = void 0, f.onreadystatechange = m.noop, e) 4 !== f.readyState && f.abort();else {
              j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);

              try {
                i = f.statusText;
              } catch (k) {
                i = "";
              }

              h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404;
            }
            j && d(h, i, j, f.getAllResponseHeaders());
          }, a.async ? 4 === f.readyState ? setTimeout(_b3) : f.onreadystatechange = Xc[g] = _b3 : _b3();
        },
        abort: function abort() {
          _b3 && _b3(void 0, !0);
        }
      };
    }
  });

  function Zc() {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  }

  function $c() {
    try {
      return new a.ActiveXObject("Microsoft.XMLHTTP");
    } catch (b) {}
  }

  m.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /(?:java|ecma)script/
    },
    converters: {
      "text script": function textScript(a) {
        return m.globalEval(a), a;
      }
    }
  }), m.ajaxPrefilter("script", function (a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1);
  }), m.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var b,
          c = y.head || m("head")[0] || y.documentElement;
      return {
        send: function send(d, e) {
          b = y.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) {
            (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"));
          }, c.insertBefore(b, c.firstChild);
        },
        abort: function abort() {
          b && b.onload(void 0, !0);
        }
      };
    }
  });
  var _c = [],
      ad = /(=)\?(?=&|$)|\?\?/;
  m.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var a = _c.pop() || m.expando + "_" + vc++;
      return this[a] = !0, a;
    }
  }), m.ajaxPrefilter("json jsonp", function (b, c, d) {
    var e,
        f,
        g,
        h = b.jsonp !== !1 && (ad.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ad.test(b.data) && "data");
    return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(ad, "$1" + e) : b.jsonp !== !1 && (b.url += (wc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
      return g || m.error(e + " was not called"), g[0];
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
      g = arguments;
    }, d.always(function () {
      a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _c.push(e)), g && m.isFunction(f) && f(g[0]), g = f = void 0;
    }), "script") : void 0;
  }), m.parseHTML = function (a, b, c) {
    if (!a || "string" != typeof a) return null;
    "boolean" == typeof b && (c = b, b = !1), b = b || y;
    var d = u.exec(a),
        e = !c && [];
    return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e), e && e.length && m(e).remove(), m.merge([], d.childNodes));
  };
  var bd = m.fn.load;
  m.fn.load = function (a, b, c) {
    if ("string" != typeof a && bd) return bd.apply(this, arguments);
    var d,
        e,
        f,
        g = this,
        h = a.indexOf(" ");
    return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && m.ajax({
      url: a,
      type: f,
      dataType: "html",
      data: b
    }).done(function (a) {
      e = arguments, g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a);
    }).complete(c && function (a, b) {
      g.each(c, e || [a.responseText, b, a]);
    }), this;
  }, m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
    m.fn[b] = function (a) {
      return this.on(b, a);
    };
  }), m.expr.filters.animated = function (a) {
    return m.grep(m.timers, function (b) {
      return a === b.elem;
    }).length;
  };
  var cd = a.document.documentElement;

  function dd(a) {
    return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1;
  }

  m.offset = {
    setOffset: function setOffset(a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = m.css(a, "position"),
          l = m(a),
          n = {};
      "static" === k && (a.style.position = "relative"), h = l.offset(), f = m.css(a, "top"), i = m.css(a, "left"), j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), m.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (n.top = b.top - h.top + g), null != b.left && (n.left = b.left - h.left + e), "using" in b ? b.using.call(a, n) : l.css(n);
    }
  }, m.fn.extend({
    offset: function offset(a) {
      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
        m.offset.setOffset(this, a, b);
      });
      var b,
          c,
          d = {
        top: 0,
        left: 0
      },
          e = this[0],
          f = e && e.ownerDocument;
      if (f) return b = f.documentElement, m.contains(b, e) ? (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()), c = dd(f), {
        top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
        left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
      }) : d;
    },
    position: function position() {
      if (this[0]) {
        var a,
            b,
            c = {
          top: 0,
          left: 0
        },
            d = this[0];
        return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), m.nodeName(a[0], "html") || (c = a.offset()), c.top += m.css(a[0], "borderTopWidth", !0), c.left += m.css(a[0], "borderLeftWidth", !0)), {
          top: b.top - c.top - m.css(d, "marginTop", !0),
          left: b.left - c.left - m.css(d, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var a = this.offsetParent || cd;

        while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position")) {
          a = a.offsetParent;
        }

        return a || cd;
      });
    }
  }), m.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (a, b) {
    var c = /Y/.test(b);

    m.fn[a] = function (d) {
      return V(this, function (a, d, e) {
        var f = dd(a);
        return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e);
      }, a, d, arguments.length, null);
    };
  }), m.each(["top", "left"], function (a, b) {
    m.cssHooks[b] = Lb(k.pixelPosition, function (a, c) {
      return c ? (c = Jb(a, b), Hb.test(c) ? m(a).position()[b] + "px" : c) : void 0;
    });
  }), m.each({
    Height: "height",
    Width: "width"
  }, function (a, b) {
    m.each({
      padding: "inner" + a,
      content: b,
      "": "outer" + a
    }, function (c, d) {
      m.fn[d] = function (d, e) {
        var f = arguments.length && (c || "boolean" != typeof d),
            g = c || (d === !0 || e === !0 ? "margin" : "border");
        return V(this, function (b, c, d) {
          var e;
          return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g);
        }, b, f ? d : void 0, f, null);
      };
    });
  }), m.fn.size = function () {
    return this.length;
  }, m.fn.andSelf = m.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
    return m;
  });
  var ed = a.jQuery,
      fd = a.$;
  return m.noConflict = function (b) {
    return a.$ === m && (a.$ = fd), b && a.jQuery === m && (a.jQuery = ed), m;
  }, typeof b === K && (a.jQuery = a.$ = m), m;
});
});
define('static/js/proxy.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

//用户实体类
var a = '121';
var b = '121';

function User(loginId, passwrod) {
  this.loginId = loginId;
  this.passwrod = passwrod;
}

;
User.prototype = {
  getLoginId: function getLoginId() {
    return this.loginId;
  },
  getPassword: function getPassword() {
    return this.passwrod;
  },
  success: function success() {
    console.log("登陆成功！");
  },
  errer: function errer() {
    console.log("登陆成功！");
  }
}; //代理用户类

function Land(user) {
  this.user = user;
}

;
Land.prototype = {
  getUser: function getUser() {
    return this.user;
  },
  login: function login() {
    if (this.user.getLoginId == a && this.user.getPassword == b) {
      return this.user.success();
    } else {
      return this.user.errer();
    }
  }
}; //实现方法

function test() {
  this.run = function () {
    new Land(new User("1213", "123")).login();
  };
}

; //调用方法

new test().run();
;
/******************************************************************/

{
  var person = {
    loginId: '10086',
    passwrod: '123'
  };
  var proxy = new Proxy(person, {
    get: function get(target, property) {
      if (property in target) {
        return target[property];
      } else {
        throw new ReferenceError("Property \"" + property + "\" does not exist.");
      }
    }
  });
  proxy.name; // "张三"
}
});
define('static/js/proxy01.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

var user = {
  name: '张三',
  password: '123'
};
var handler = {
  has: function has(target, prop) {
    if (prop === 'login' && user.name != '张三' && user.password != '123') {
      console.log("".concat(target.name, " \u767B\u9646\u5931\u8D25"));
      return false;
    } else {
      console.log("".concat(target.name, " \u767B\u9646\u6210\u529F"));
      return true;
    }
  }
};
var por = new Proxy(user, handler);
'login' in por;
});
define('static/js/SuperSocket.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

//心跳检测
var heartCheck = {
  timeout: 540000,
  //9分钟发一次心跳
  timeoutObj: null,
  serverTimeoutObj: null,
  reset: function reset() {
    clearTimeout(this.timeoutObj);
    clearTimeout(this.serverTimeoutObj);
    return this;
  },
  start: function start() {
    var self = this;
    this.timeoutObj = setTimeout(function () {
      //这里发送一个心跳，后端收到后，返回一个心跳消息，
      //onmessage拿到返回的心跳就说明连接正常
      ws.send("ping");
      console.log("ping!");
      self.serverTimeoutObj = setTimeout(function () {
        //如果超过一定时间还没重置，说明后端主动断开了
        ws.close(); //如果onclose会执行reconnect，我们执行ws.close()就行了.如果直接执行reconnect 会触发onclose导致重连两次
      }, self.timeout);
    }, this.timeout);
  }
};
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');


__wxRoute = 'pages/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/login.js';

define('pages/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"5c40":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s,o=i(n("13f5"));function i(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var s=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};s.get||s.set?Object.defineProperty(e,n,s):e[n]=t[n]}return e.default=t,e}var a={data:function(){return{user:{accountName:"",password:""},title:"LOGIN",test_loginId1:"dzk",test_pwd1:"123",test_loginId2:"kkk",test_pwd2:"123"}},onLoad:function(){},methods:{onreg:function(e){t.navigateTo({url:"../register/register"})},login:function(){this.initWebSocket()},getTest1:function(){this.user.accountName=this.test_loginId1,this.user.password=this.test_pwd1},getTest2:function(){this.user.accountName=this.test_loginId2,this.user.password=this.test_pwd2},openConsole:function(){var t=new Image;Object.defineProperty(t,"id",{get:function(){}}),console.log("%cl",t)},webSocketClientOnopen:function(){console.log("打开成功");var t={AccountName:this.user.accountName,UserPassWord:this.user.password},e=JSON.stringify(t),n={Message:e,Tag:"ac",ActionMethod:"UserBLL.Login"};this.websocketsend(n)},webSocketClientOnmessage:function(e){var n=JSON.parse(e.data),s=JSON.parse(n.Message);200==s.Code?(console.log(s.Data),localStorage.setItem("userInfo",JSON.stringify(s.Data)),t.showToast({title:s.Data.AccountName+s.Message,duration:1e3}),setTimeout(function(){t.reLaunch({url:"../index/index"})},1001)):alert("请检查账号密码是否正确！")},initWebSocket:function(){s=new WebSocket(o.wsuri),s.onopen=this.webSocketClientOnopen,s.onmessage=this.webSocketClientOnmessage,s.onerror=this.webSocketClientOnerror,s.onclose=this.webSocketClientOnclose},websocketsend:function(t){console.log("数据发送："+JSON.stringify(t)),s.send(JSON.stringify(t))},webSocketClientOnerror:function(t){this.initWebSocket(),console.log("websock连接错误,重新连接",t)},webSocketClientOnclose:function(t){console.log("websock连接关闭",t)}},created:function(){this.openConsole()}};e.default=a}).call(this,n("6e42")["default"])},"60e2":function(t,e,n){"use strict";n("7f50");var s=i(n("b0ce")),o=i(n("88bf"));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(o.default))},"667a":function(t,e,n){"use strict";var s=n("edeb"),o=n.n(s);o.a},"88bf":function(t,e,n){"use strict";n.r(e);var s=n("e4b1"),o=n("bf1d");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("667a");var a=n("2877"),c=Object(a["a"])(o["default"],s["a"],s["b"],!1,null,null,null);e["default"]=c.exports},bf1d:function(t,e,n){"use strict";n.r(e);var s=n("5c40"),o=n.n(s);for(var i in s)"default"!==i&&function(t){n.d(e,t,function(){return s[t]})}(i);e["default"]=o.a},e4b1:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"content"},[n("view",[n("view",[n("text",[t._v("账号1:")]),n("text",[t._v(t._s(t.test_loginId1))]),n("text",[t._v("密码:")]),n("text",[t._v(t._s(t.test_pwd1))]),n("text",{attrs:{eventid:"e8e5b498-0"},on:{click:function(e){t.getTest1()}}},[t._v("<使用账号1>")])]),n("view",[n("text",[t._v("账号2:")]),n("text",[t._v(t._s(t.test_loginId2))]),n("text",[t._v("密码:")]),n("text",[t._v(t._s(t.test_pwd2))]),n("text",{attrs:{eventid:"e8e5b498-1"},on:{click:function(e){t.getTest2()}}},[t._v("<使用账号2>")])])]),n("image",{staticClass:"logo",attrs:{src:"/static/logo.png"}}),n("view",[n("text",{staticClass:"title",staticStyle:{color:"#ECECEC"}},[t._v(t._s(t.title))])]),n("view",{staticClass:"content_view1"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.accountName,expression:"user.accountName"}],staticClass:"content_view2",attrs:{type:"text",maxlength:"9",placeholder:"  手机号  用户名  邮箱",eventid:"e8e5b498-2"},domProps:{value:t.user.accountName},on:{input:function(e){e.target.composing||(t.user.accountName=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"content_view3",attrs:{type:"password",id:"userpwd",placeholder:"  密码/请输入登录密码",maxlength:"12",eventid:"e8e5b498-3"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||(t.user.password=e.target.value)}}}),n("view",{staticClass:"content_view4"},[n("button",{staticClass:"content_but",attrs:{eventid:"e8e5b498-4"},on:{click:function(e){t.login()}}},[t._v("登陆")])],1),n("view",{staticClass:"content_view5"},[n("text",{staticClass:"content_text1",attrs:{eventid:"e8e5b498-5"},on:{click:t.onreg}},[t._v("注册新用户")]),n("text",{staticClass:"content_text2"},[t._v("忘记密码")])]),n("view",{staticClass:"content_view6"}),t._m(0),t._m(1)])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"content_view7"},[n("text",{staticClass:"content_text3"},[t._v("第三方登录")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"content_text8"},[n("view",{staticStyle:{flex:"1"}},[n("image",{staticClass:"content_img",attrs:{src:"../../static/img/qq.png"}})]),n("view",{staticStyle:{flex:"1"}},[n("image",{staticClass:"content_img",attrs:{src:"../../static/img/weixin.png"}})]),n("view",{staticStyle:{flex:"1"}},[n("image",{staticClass:"content_img",attrs:{src:"../../static/img/xinlang.png"}})])])}];n.d(e,"a",function(){return s}),n.d(e,"b",function(){return o})},edeb:function(t,e,n){}},[["60e2","common/runtime","common/vendor"]]]);
});
require('pages/login/login.js');
__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"332f":function(e,t,n){"use strict";var i=n("7bb6"),o=n.n(i);o.a},"37c8":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",[n("view",{staticClass:"index_view"},[n("view",{staticClass:"index_view2"},[n("view",{staticClass:"index_view3"},[n("view",{staticClass:"view1"},[n("image",{staticClass:"index_view4",attrs:{src:"../../static/logo.png"}}),n("view",{staticClass:"textName"},[e._v("用户:"+e._s(e.user.AccountName))]),n("view",{staticClass:"textName"},[e._v("积分:"+e._s(e.user.Integral))])])])])]),n("view",[n("ul",e._l(e.Imag,function(t,i){return n("li",{staticClass:"getWidth",style:{height:e.Height+"upx"}},[n("img",{staticClass:"am-thumbnail",attrs:{src:t.imgs,eventid:"e5d1b474-0-"+i},on:{click:function(t){e.begin()}}})])}))],1)])},o=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o})},"7bb6":function(e,t,n){},9371:function(e,t,n){"use strict";n.r(t);var i=n("37c8"),o=n("c0b1");for(var s in o)"default"!==s&&function(e){n.d(t,e,function(){return o[e]})}(s);n("332f");var r=n("2877"),c=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,null,null);t["default"]=c.exports},b17e:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,o=s(n("13f5"));function s(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};i.get||i.set?Object.defineProperty(t,n,i):t[n]=e[n]}return t.default=e,t}var r={data:function(){return{title:"Hello",user:"",Height:"",GameList:[],roomID:"",Imag:[{Id:1,imgs:"../../static/img/u1.jpg"}]}},onLoad:function(){},methods:{GetGame:function(){e.navigateTo({url:"../game/game"})},setHeight:function(){var e=document.getElementsByClassName("getWidth");this.Height=e[0].offsetWidth},begin:function(t){var n=this;e.reLaunch({url:"../load/load?token="+n.user.Token})},selectUserInfo:function(){var e=this;e.user=JSON.parse(localStorage.getItem("userInfo"))},initWebSocket:function(){i=new WebSocket(o.wsuri),i.onopen=this.webSocketClientOnopen,i.onmessage=this.webSocketClientOnmessage,i.onerror=this.webSocketClientOnerror,i.onclose=this.webSocketClientOnclose},webSocketClientOnopen:function(e){var t={FromUser:this.user.Token,Tag:"c"};this.websocketsend(t)},webSocketClientOnmessage:function(e){var t=JSON.parse(e.data);console.log(t)},websocketsend:function(e){console.log(e),i.send(JSON.stringify(e))},webSocketClientOnclose:function(e){},webSocketClientOnerror:function(){initWebSocket()}},created:function(){this.initWebSocket()},onShow:function(){this.selectUserInfo()}};t.default=r}).call(this,n("6e42")["default"])},c0b1:function(e,t,n){"use strict";n.r(t);var i=n("b17e"),o=n.n(i);for(var s in i)"default"!==s&&function(e){n.d(t,e,function(){return i[e]})}(s);t["default"]=o.a},e76b:function(e,t,n){"use strict";n("7f50");var i=s(n("b0ce")),o=s(n("9371"));function s(e){return e&&e.__esModule?e:{default:e}}Page((0,i.default)(o.default))}},[["e76b","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/user/user';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/user.js';

define('pages/user/user.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/user"],{"11dc":function(t,e,s){"use strict";var n=s("df02"),a=s.n(n);a.a},3040:function(t,e,s){"use strict";s.r(e);var n=s("3233"),a=s.n(n);for(var i in n)"default"!==i&&function(t){s.d(e,t,function(){return n[t]})}(i);e["default"]=a.a},3233:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,a=i(s("13f5"));function i(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var s in t)if(Object.prototype.hasOwnProperty.call(t,s)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,s):{};n.get||n.set?Object.defineProperty(e,s,n):e[s]=t[s]}return e.default=t,e}var o={data:function(){return{money:200,Fabulous:300,user:"",UserInfoByID:"",UserInfoByToken:"",IntegralData:"",Answer:""}},methods:{selectUserInfo:function(){var t=this,e=localStorage.getItem("userInfo");t.user=JSON.parse(e),console.log(t.user)},getTokenForUser:function(t){var e={Token:t},s=JSON.stringify(e),a={Message:s,Tag:"ac",ActionMethod:"UserBLL.GetUserInfoByToken"};n.send(JSON.stringify(a))},getIdForUser:function(t){console.log(t);var e={ID:t},s=JSON.stringify(e),a={Message:s,Tag:"ac",ActionMethod:"UserBLL.GetUserInfoByID"};n.send(JSON.stringify(a))},isRight:function(t){var e={AccountName:t,QuestionID:1,Reply:"1",RecordID:1090},s=JSON.stringify(e),n={Message:s,Tag:"ac",ActionMethod:"RecordQuestionBLL.IsRight"};this.websocketsend(n)},updateIntegral:function(t){var e={AccountName:t,Integral:38},s=JSON.stringify(e),n={Message:s,Tag:"ac",ActionMethod:"UserBLL.UpdateIntegral"};console.log(n),this.websocketsend(n)},webSocketClientOnmessage:function(t){var e=JSON.parse(t.data),s="string"==typeof e?JSON.parse(e):e;if("UserBLL.GetUserInfoByID"==s.ActionMethod){var n=JSON.parse(s.Message),a=n;200===a.Code&&(this.UserInfoByID=a.Data,console.log("根据ID:"+this.UserInfoByID))}else if("UserBLL.GetUserInfoByToken"==s.ActionMethod){n=JSON.parse(s.Message),a=n;200===a.Code&&(this.UserInfoByToken=a.Data,console.log("根据Token:"+this.UserInfoByToken))}else if("RecordQuestionBLL.IsRight"==s.ActionMethod){n=JSON.parse(s.Message);console.log("模拟答题："+JSON.stringify(n));a=n;200===a.Code&&(this.Answer=a.Data,console.log("模拟答题:"+this.Answer))}else if("UserBLL.UpdateIntegral"==s.ActionMethod){n=JSON.parse(s.Message);console.log("修改积分："+JSON.stringify(n));a=n;200===a.Code&&(this.IntegralData=a.Data,console.log("修改积分:"+this.IntegralData))}},initWebSocket:function(){n=new WebSocket(a.wsuri),n.onopen=this.webSocketClientOnopen,n.onmessage=this.webSocketClientOnmessage,n.onerror=this.webSocketClientOnerror,n.onclose=this.webSocketClientOnclose},webSocketClientOnopen:function(){var t={FromUser:this.user.Token,Tag:"c"};this.websocketsend(t)},websocketsend:function(t){n.send(JSON.stringify(t))},webSocketClientOnerror:function(t){this.initWebSocket(),console.log("websock连接错误,重新连接",t)},webSocketClientOnclose:function(t){console.log("websock连接关闭",t)}},created:function(){this.selectUserInfo(),this.initWebSocket()},onLoad:function(){}};e.default=o},"52fe":function(t,e,s){"use strict";s("7f50");var n=i(s("b0ce")),a=i(s("7f6e"));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(a.default))},"7f6e":function(t,e,s){"use strict";s.r(e);var n=s("b1da"),a=s("3040");for(var i in a)"default"!==i&&function(t){s.d(e,t,function(){return a[t]})}(i);s("11dc");var o=s("2877"),r=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,null,null);e["default"]=r.exports},b1da:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"text-font"},[s("view",{staticClass:"list-content"},[s("view",{staticClass:"list"},[t.user?s("view",{staticClass:"li noborder"},[s("image",{staticClass:"icon",attrs:{src:"../../static/logo.png"}}),s("view",{staticClass:"textName"},[t._v("用户名："),s("text",[t._v(t._s(t.user.AccountName))])]),s("view",{staticClass:"textName"},[t._v("编号："),s("text",[t._v(t._s(t.user.ID))])])]):s("view",{staticClass:"li noborder"},[s("navigator",{attrs:{url:"../login/login"}},[t._v("你还没登陆，请去登陆")])],1),s("view",{staticClass:"user-data-bar"},[s("view",{staticClass:"data-bar"},[t._v("积分:"),s("text",{staticClass:"data-bar-num"},[t._v(t._s(t.user.Integral))])]),s("view",{staticClass:"data-bar"},[t._v("现金:"),s("text",{staticClass:"data-bar-num"},[t._v(t._s(t.money))])]),s("view",{staticClass:"data-bar"},[t._v("排名:"),s("text",{staticClass:"data-bar-num"},[t._v(t._s(t.Fabulous))])])])])]),s("view",{staticClass:"list-content",staticStyle:{"margin-top":"15rpx"}},[s("view",{staticClass:"list"},[s("view",{staticClass:"li"},[s("image",{staticClass:"icon",attrs:{src:"../../static/logo.png"}}),s("view",{staticClass:"text"},[s("navigator",{attrs:{url:"../record/record"}},[t._v("游戏记录")])],1)])]),t._m(0),s("view",{staticClass:"list"},[s("view",{staticClass:"li noborder"},[s("image",{staticClass:"icon",attrs:{src:"../../static/logo.png"}}),s("view",{staticClass:"text",attrs:{eventid:"55ebd440-0"},on:{click:function(e){t.getIdForUser(t.user.ID)}}},[t._v("根据ID")])])]),s("view",{staticClass:"list"},[s("view",{staticClass:"li noborder"},[s("image",{staticClass:"icon",attrs:{src:"../../static/logo.png"}}),s("view",{staticClass:"text",attrs:{eventid:"55ebd440-1"},on:{click:function(e){t.getTokenForUser(t.user.Token)}}},[t._v("根据Token")])])]),s("view",{staticClass:"list"},[s("view",{staticClass:"li noborder"},[s("image",{staticClass:"icon",attrs:{src:"../../static/logo.png"}}),s("view",{staticClass:"text",attrs:{eventid:"55ebd440-2"},on:{click:function(e){t.isRight(t.user.Token)}}},[t._v("模拟用户答题")])])]),s("view",{staticClass:"list"},[s("view",{staticClass:"li noborder"},[s("image",{staticClass:"icon",attrs:{src:"../../static/logo.png"}}),s("view",{staticClass:"text",attrs:{eventid:"55ebd440-3"},on:{click:function(e){t.updateIntegral(t.user.Token)}}},[t._v("修改积分")])])])])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"list"},[s("view",{staticClass:"li noborder"},[s("image",{staticClass:"icon",attrs:{src:"../../static/logo.png"}}),s("view",{staticClass:"text"},[t._v("进入游戏")])])])}];s.d(e,"a",function(){return n}),s.d(e,"b",function(){return a})},df02:function(t,e,s){}},[["52fe","common/runtime","common/vendor"]]]);
});
require('pages/user/user.js');
__wxRoute = 'pages/load/load';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/load/load.js';

define('pages/load/load.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/load/load"],{"0d8a":function(e,t,s){"use strict";s.r(t);var o=s("a71e"),n=s("caf5");for(var a in n)"default"!==a&&function(e){s.d(t,e,function(){return n[e]})}(a);s("f595");var i=s("2877"),r=Object(i["a"])(n["default"],o["a"],o["b"],!1,null,null,null);t["default"]=r.exports},"40d3":function(e,t,s){"use strict";s("7f50");var o=a(s("b0ce")),n=a(s("0d8a"));function a(e){return e&&e.__esModule?e:{default:e}}Page((0,o.default)(n.default))},a71e:function(e,t,s){"use strict";var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("view",{staticClass:"Parentlevel"},[e._m(0),s("view",{staticClass:"Waitfor"},[e._v("等待对手加入...")]),s("view",{staticClass:"Option"},[e._m(1),s("view",{staticClass:"userInfo"},[s("view",{staticClass:"user"},[s("view",{staticClass:"userName"},[e._v("用户名:"),s("text",[e._v(e._s(e.user.AccountName))])]),s("view",{staticClass:"userIntegral"},[e._v("积分:"),s("text",[e._v(e._s(e.user.Integral))])])])])]),s("button",{staticClass:"load_but",attrs:{eventid:"d70365c0-0"},on:{click:e.preGames}},[e._v("准备游戏")]),s("button",{staticClass:"load_but",attrs:{eventid:"d70365c0-1"},on:{click:e.onover}},[e._v("取消游戏")])],1)},n=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("view",{staticClass:"Headportrait"},[s("image",{staticClass:"load_view",attrs:{src:"../../static/img/ut2.png"}})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("view",{staticClass:"P_hostile"},[s("view",[s("view",{staticClass:"P_GameplayerA"})]),s("view",{staticClass:"P_GameplayerVS"},[s("span",{staticClass:"P_span"},[e._v("VS")])]),s("view",{staticClass:"P_GameplayerB"},[s("span",{staticClass:"P_Gsapn"},[e._v("?")])])])}];s.d(t,"a",function(){return o}),s.d(t,"b",function(){return n})},caf5:function(e,t,s){"use strict";s.r(t);var o=s("cd2f"),n=s.n(o);for(var a in o)"default"!==a&&function(e){s.d(t,e,function(){return o[e]})}(a);t["default"]=n.a},cd2f:function(e,t,s){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,n=a(s("13f5"));function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,s):{};o.get||o.set?Object.defineProperty(t,s,o):t[s]=e[s]}return t.default=e,t}var i={data:function(){return{token:"",roomID:"",user:"",game:"",createTime:"",recordEndTime:"",n_integral:-20,RecordList:""}},methods:{onover:function(t){e.switchTab({url:"../index/index"})},webSocketClientOnmessage:function(t){var s=JSON.parse(t.data);if(console.log("数据："+JSON.stringify(s)),"r"==s.Tag)e.showToast({title:s.Message+": "+s.RoomID,duration:2e3});else if("i"==s.Tag)this.roomID=s.RoomID;else if("b"==s.Tag){var o={AccountName:this.token,Integral:this.n_integral,CreateTime:this.createTime,EndTime:this.recordEndTime,RoomID:this.game.RoomID},a=JSON.stringify(o);console.log(a);var i={Message:a,Tag:"ac",ActionMethod:"RecordBLL.AddRecord"};this.websocketsend(i)}else if("ac"==s.Tag&&"RecordBLL.AddRecord"==s.ActionMethod){var r=JSON.parse(s.Message);200==r.Code&&(n.RecordList=r.Data,e.reLaunch({url:"../play/play?token="+this.token+"&roomID="+s.RoomID}))}localStorage.setItem("game",JSON.stringify(s))},initWebSocket:function(){o=new WebSocket(n.wsuri),o.onopen=this.webSocketClientOnopen,o.onmessage=this.webSocketClientOnmessage,o.onerror=this.webSocketClientOnerror,o.onclose=this.webSocketClientOnclose},webSocketClientOnopen:function(e){var t={FromUser:this.token,Tag:"c"};this.websocketsend(t);var s={FromUser:this.token,Tag:"i",RoomID:""==this.roomID?"":this.roomID};this.websocketsend(s)},websocketsend:function(e){o.send(JSON.stringify(e))},webSocketClientOnclose:function(e){console.log("关闭")},webSocketClientOnerror:function(){this.initWebSocket()},showUser:function(){var t=localStorage.getItem("game");this.game=JSON.parse(t),console.log(this.game.FromUser),e.showToast({title:this.game.Message+": "+this.game.RoomID,duration:3e3})},preGames:function(){localStorage.getItem("game");var e={FromUser:this.token,Tag:"r",RoomID:this.game.RoomID};this.websocketsend(e)},selectUserInfo:function(){var e=this;e.user=JSON.parse(localStorage.getItem("userInfo"))},getSystemTime:function(){var e=new Date,t=e.getFullYear(),s=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1,o=e.getDate()<10?"0"+e.getDate():e.getDate(),n=e.getHours()<10?"0"+e.getHours():e.getHours(),a=e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes(),i=e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds(),r=t+"-"+s+"-"+o+" "+n+":"+a+":"+i,c=t+"-"+s+"-"+o+" "+n+":"+a+":"+(i+parseInt(10));return this.recordEndTime=c,this.createTime=r,this.createTime}},onLoad:function(e){this.token=e.token,console.log(this.token)},created:function(){var e=this;this.selectUserInfo(),this.getSystemTime(),setTimeout(function(){e.showUser()},500),this.initWebSocket()}};t.default=i}).call(this,s("6e42")["default"])},f595:function(e,t,s){"use strict";var o=s("fe51"),n=s.n(o);n.a},fe51:function(e,t,s){}},[["40d3","common/runtime","common/vendor"]]]);
});
require('pages/load/load.js');
__wxRoute = 'pages/play/play';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/play/play.js';

define('pages/play/play.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/play/play"],{"1ebc":function(e,t,o){"use strict";var i=o("c799"),n=o.n(i);n.a},"4a72":function(e,t,o){"use strict";o.r(t);var i=o("774c"),n=o.n(i);for(var s in i)"default"!==s&&function(e){o.d(t,e,function(){return i[e]})}(s);t["default"]=n.a},"72da":function(e,t,o){"use strict";var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("view",{staticClass:"play_view"},[o("view",{staticClass:"zhu"},[o("view",{staticClass:"play_view1"},[e._v(e._s(e.TopIndex+1)+" / "+e._s(e.getTopicList.length))]),e._m(0),o("view",[o("image",{staticClass:"play_img",attrs:{src:"../../static/img/body.png"}}),o("view",{staticStyle:{}},[e._v("积分:"+e._s(e.userInfo.Integral))])])]),o("view",{staticClass:"play_view4"},[o("view",[e._v("题目类型")]),o("view",[o("view",{staticClass:"play_view5"},[e._v(e._s(e.getTopicList[e.TopIndex].GenreName))])]),o("view",{staticClass:"play_view6"},[o("label",{staticClass:"play_view7"},[e._v(e._s(e.count))])],1),o("view",{staticClass:"play_view8"},[o("view",[e._v("问题：")]),o("view",{staticClass:"play_view9"},[e._v(e._s(e.getTopicList[e.TopIndex].Topic)+"=？")])]),o("view",{staticClass:"play_view10"},[o("view",[e._v("答案：")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.answer,expression:"answer"}],staticStyle:{"border-bottom":"10rpx"},attrs:{type:"text",placeholder:"输入答案",eventid:"5c77e440-0"},domProps:{value:e.answer},on:{input:function(t){t.target.composing||(e.answer=t.target.value)}}})]),o("button",{staticClass:"bb1",style:{display:e.forbid},attrs:{eventid:"5c77e440-1"},on:{click:e.isRight}},[e._v("下一题")]),o("button",{staticStyle:{margin:"50rpx"},attrs:{eventid:"5c77e440-2"},on:{click:e.over}},[e._v("结束游戏")])],1)])},n=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("view",{staticClass:"play_view2"},[o("text",{staticClass:"play_text"},[e._v("玩家")])])}];o.d(t,"a",function(){return i}),o.d(t,"b",function(){return n})},"774c":function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,n=s(o("13f5"));function s(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,o):{};i.get||i.set?Object.defineProperty(t,o,i):t[o]=e[o]}return t.default=e,t}var a={data:function(){return{bingo:0,TopIndex:0,integral:0,count:10,userInfo:"",forbid:"",getTopicList:[],token:"",roomId:"",answer:"",RecordList:""}},onLoad:function(e){var t=this;this.roomId=e.roomID,this.token=e.token,console.log(this.roomId),this.timer=setInterval(function(){t.count=t.count-1,0==t.count&&(t.getTopicList.length-1==t.TopIndex?(t.forbid="none",clearInterval(t.timer)):(t.TopIndex=t.TopIndex+1,t.count=10))},1e3)},methods:{over:function(t){this.getTopicList[this.TopIndex].Answer==this.answer&&(this.count>0?(console.log("答对了"),this.bingo=this.bingo+1,this.integral=this.integral+2,console.log("积分:"+this.integral)):console.log("超时了！")),e.redirectTo({url:"../over/over?roomId="+this.roomId+"&token="+this.token+"&bingo="+this.bingo})},selectUserInfo:function(){var e=this,t=localStorage.getItem("userInfo");e.userInfo=JSON.parse(t)},isRight:function(){var e=this.getTopicList[this.TopIndex].ID,t={AccountName:this.token,QuestionID:e,Reply:this.answer,RecordID:n.RecordList.ID},o=JSON.stringify(t),i={Message:o,Tag:"ac",ActionMethod:"RecordQuestionBLL.IsRight"};console.log(JSON.stringify(i)),this.websocketsend(i),this.answer="",this.TopIndex=this.TopIndex+1,this.count=10,this.getTopicList.length-1==this.TopIndex&&(this.forbid="none")},getGameRoomID:function(){var e=localStorage.getItem("game");this.game=JSON.parse(e)},initWebSocket:function(){i=new WebSocket(n.wsuri),i.onopen=this.webSocketClientOnopen,i.onmessage=this.webSocketClientOnmessage,i.onerror=this.webSocketClientOnerror,i.onclose=this.webSocketClientOnclose},webSocketClientOnopen:function(){console.log("打开成功");var e={Tag:"ac",ActionMethod:"QuestionBLL.GetQuestions"};this.websocketsend(e)},webSocketClientOnmessage:function(e){var t=JSON.parse(e.data),o="string"==typeof t?JSON.parse(t):t;if("QuestionBLL.GetQuestions"==o.ActionMethod){var i=JSON.parse(t.Message);console.log(i.Data),200==i.Code&&(this.getTopicList=i.Data)}else if("RecordQuestionBLL.IsRight"==o.ActionMethod){var n=JSON.parse(o.Message);console.log("模拟答题："+JSON.stringify(n));var s=n;200===s.Code&&(this.Answer=s.Data,console.log("模拟答题:"+this.Answer))}},websocketsend:function(e){console.log("数据发送："+JSON.stringify(e)),i.send(JSON.stringify(e))},webSocketClientOnerror:function(e){this.initWebSocket(),console.log("websock连接错误,重新连接",e)},webSocketClientOnclose:function(e){console.log("websock连接关闭",e)}},created:function(){this.getGameRoomID(),this.initWebSocket(),this.selectUserInfo(),console.log("api:"+n.RecordList)}};t.default=a}).call(this,o("6e42")["default"])},9275:function(e,t,o){"use strict";o("7f50");var i=s(o("b0ce")),n=s(o("d6b5"));function s(e){return e&&e.__esModule?e:{default:e}}Page((0,i.default)(n.default))},c799:function(e,t,o){},d6b5:function(e,t,o){"use strict";o.r(t);var i=o("72da"),n=o("4a72");for(var s in n)"default"!==s&&function(e){o.d(t,e,function(){return n[e]})}(s);o("1ebc");var a=o("2877"),r=Object(a["a"])(n["default"],i["a"],i["b"],!1,null,null,null);t["default"]=r.exports}},[["9275","common/runtime","common/vendor"]]]);
});
require('pages/play/play.js');
__wxRoute = 'pages/over/over';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/over/over.js';

define('pages/over/over.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/over/over"],{"12e6":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,s=i(n("13f5"));function i(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};o.get||o.set?Object.defineProperty(e,n,o):e[n]=t[n]}return e.default=t,e}var r={data:function(){return{roomId:"",name:"",getRecordsList:[],FracRest:"",FractionA:"5",FractionB:"1",ResultA:"胜利",ResultB:"失败"}},methods:{onpus:function(e){t.redirectTo({url:"../load/load?roomId="+this.roomId+"&name="+this.name})},onover:function(e){t.switchTab({url:"../index/index?roomId="+this.roomId+"&name="+this.name})},GetRecords:function(){var t={RoomID:this.roomId},e=JSON.stringify(t),n={Message:e,Tag:"ac",ActionMethod:"RecordQuestionBLL.GetByRoomID"};this.websocketsend(n)},initWebSocket:function(){o=new WebSocket(s.wsuri),o.onopen=this.webSocketClientOnopen,o.onmessage=this.webSocketClientOnmessage,o.onerror=this.webSocketClientOnerror,o.onclose=this.webSocketClientOnclose},webSocketClientOnopen:function(t){console.log("打开成功")},webSocketClientOnmessage:function(t){var e=JSON.parse(t.data),n=JSON.parse(e.Message);console.log(n),200==n.Code&&(this.getRecordsList=n.Data,console.log("getRecordsList:"+JSON.stringify(n)))},websocketsend:function(t){o.send(JSON.stringify(t))},webSocketClientOnclose:function(t){},webSocketClientOnerror:function(){this.initWebSocket()}},onLoad:function(t){this.roomId=t.roomId,this.name=t.name},created:function(){var t=this;this.initWebSocket(),setTimeout(function(){t.GetRecords()},500)},computed:{range:function(){return this.getRecordsList.sort(function(t,e){return t.Integral-e.Integral}).reverse()}}};e.default=r}).call(this,n("6e42")["default"])},"68fe":function(t,e,n){"use strict";n.r(e);var o=n("c068"),s=n("e153");for(var i in s)"default"!==i&&function(t){n.d(e,t,function(){return s[t]})}(i);n("88b5");var r=n("2877"),a=Object(r["a"])(s["default"],o["a"],o["b"],!1,null,null,null);e["default"]=a.exports},"73a3":function(t,e,n){"use strict";n("7f50");var o=i(n("b0ce")),s=i(n("68fe"));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,o.default)(s.default))},"88b5":function(t,e,n){"use strict";var o=n("a2ec"),s=n.n(o);s.a},a2ec:function(t,e,n){},c068:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{attrs:{id:"box"}},[n("view",{staticClass:"square"},[n("view",{staticClass:"R_ftext"},[t.FractionA>t.FractionB?n("text",{staticClass:"R_text"},[t._v(t._s(t.ResultA))]):n("text",{staticClass:"R_text"},[t._v(t._s(t.ResultB))])]),n("view",[n("table",[n("tr",[n("th",[n("view",{staticClass:"R_ptr"},[t._v("玩家")])]),n("th",[n("view",{staticClass:"R_ptr"},[t._v("结果")])]),n("th",[n("view",{staticClass:"R_ptr"},[t._v("积分")])])],1),t._l(t.getRecordsList,function(e,o){return n("tr",[n("th",[t._v(t._s(e.AccountName))]),n("th",[n("view",{staticClass:"R_ptr"},[n("text",[t._v("对:")]),n("text",[t._v("7")]),n("text",[t._v("题")])])]),e.Integral>0?n("th",[n("text",[t._v("+")]),n("text",[t._v(t._s(e.Integral))])]):n("th",[n("text"),n("text",[t._v(t._s(e.Integral))])])],1)})],2)],1),n("view",{staticClass:"R_vi"},[n("view",{staticClass:"R_via",attrs:{eventid:"13f211e0-0"},on:{click:t.onpus}},[n("text",[t._v("再来一局")])]),n("view",{staticClass:"R_via",attrs:{eventid:"13f211e0-1"},on:{click:t.onpus}},[n("text",[t._v("重新匹配")])]),n("view",{staticStyle:{clear:"both"}})]),n("view",{staticClass:"Close",attrs:{eventid:"13f211e0-2"},on:{click:t.onover}},[n("text",[t._v("关闭")])])])])},s=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return s})},e153:function(t,e,n){"use strict";n.r(e);var o=n("12e6"),s=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e["default"]=s.a}},[["73a3","common/runtime","common/vendor"]]]);
});
require('pages/over/over.js');
__wxRoute = 'pages/register/register';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/register/register.js';

define('pages/register/register.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"077a":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=s(n("13f5"));function s(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}var i={data:function(){return{user:{AccountName:"",UserPassWord:""}}},methods:{loginUser:function(){this.initWebSocket()},webSocketClientOnopen:function(){console.log("打开成功");var e={AccountName:this.user.AccountName,UserPassWord:this.user.UserPassWord},t=JSON.stringify(e),n={Message:t,Tag:"ac",ActionMethod:"UserBLL.Register"};r.send(JSON.stringify(n))},webSocketClientOnmessage:function(t){var n=JSON.parse(t.data);n=JSON.parse(n.Message),200==n.Code?(e.setStorageSync("userInfo",JSON.stringify(n.Data)),e.showToast({duration:1e3}),setTimeout(function(){e.reLaunch({url:"../login/login"})},1001)):alert("请检查账号步骤是否正确！")},websocketsend:function(e){console.log("数据发送："+JSON.stringify(e)),r.send(JSON.stringify(e))},webSocketClientOnerror:function(e){this.initWebSocket(),console.log("websock连接错误,重新连接",e)},webSocketClientOnclose:function(e){console.log("websock连接关闭",e)},initWebSocket:function(){r=new WebSocket(o.wsuri),r.onopen=this.webSocketClientOnopen,r.onmessage=this.webSocketClientOnmessage,r.onerror=this.webSocketClientOnerror,r.onclose=this.webSocketClientOnclose}},created:function(){}};t.default=i}).call(this,n("6e42")["default"])},"17dd":function(e,t,n){"use strict";var r=n("449e"),o=n.n(r);o.a},2139:function(e,t,n){"use strict";n("7f50");var r=s(n("b0ce")),o=s(n("811c"));function s(e){return e&&e.__esModule?e:{default:e}}Page((0,r.default)(o.default))},"449e":function(e,t,n){},"44ad":function(e,t,n){"use strict";n.r(t);var r=n("077a"),o=n.n(r);for(var s in r)"default"!==s&&function(e){n.d(t,e,function(){return r[e]})}(s);t["default"]=o.a},"811c":function(e,t,n){"use strict";n.r(t);var r=n("8d34"),o=n("44ad");for(var s in o)"default"!==s&&function(e){n.d(t,e,function(){return o[e]})}(s);n("17dd");var i=n("2877"),a=Object(i["a"])(o["default"],r["a"],r["b"],!1,null,null,null);t["default"]=a.exports},"8d34":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",{staticClass:"Register"},[n("view",{staticClass:"R_from"},[n("view",{},[n("table",[n("tr",[n("th",[n("text",[e._v("账号：")])]),n("th",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.AccountName,expression:"user.AccountName"}],staticClass:"Register_input",attrs:{type:"text",maxlength:"9",placeholder:"账号",eventid:"122ec440-0"},domProps:{value:e.user.AccountName},on:{input:function(t){t.target.composing||(e.user.AccountName=t.target.value)}}})])],1)],1)],1),n("view",{},[n("table",[n("tr",[n("th",[n("text",[e._v("密码：")])]),n("th",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.UserPassWord,expression:"user.UserPassWord"}],staticClass:"Register_input",attrs:{type:"password",maxlength:"9",placeholder:"密码",eventid:"122ec440-1"},domProps:{value:e.user.UserPassWord},on:{input:function(t){t.target.composing||(e.user.UserPassWord=t.target.value)}}})])],1)],1)],1),n("view",{},[n("table",[n("tr",[n("th",[n("text",[e._v("邮箱：")])]),n("th",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.mailbox,expression:"user.mailbox"}],staticClass:"Register_input",attrs:{type:"text",maxlength:"9",placeholder:"邮箱",eventid:"122ec440-2"},domProps:{value:e.user.mailbox},on:{input:function(t){t.target.composing||(e.user.mailbox=t.target.value)}}})])],1)],1)],1),n("view",{staticClass:"R_register"},[n("button",{attrs:{type:"primary",id:"btnadd",eventid:"122ec440-3"},on:{click:function(t){e.loginUser()}}},[e._v("注册")])],1)])])},o=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o})}},[["2139","common/runtime","common/vendor"]]]);
});
require('pages/register/register.js');
__wxRoute = 'pages/record/record';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/record/record.js';

define('pages/record/record.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/record/record"],{"11db":function(e,t,n){"use strict";n.r(t);var i=n("a0b8"),c=n("3a1b");for(var s in c)"default"!==s&&function(e){n.d(t,e,function(){return c[e]})}(s);n("943e");var o=n("2877"),a=Object(o["a"])(c["default"],i["a"],i["b"],!1,null,null,null);t["default"]=a.exports},"1b4e":function(e,t,n){"use strict";n.r(t);var i=n("dea6"),c=n("2c60");for(var s in c)"default"!==s&&function(e){n.d(t,e,function(){return c[e]})}(s);n("9c1f");var o=n("2877"),a=Object(o["a"])(c["default"],i["a"],i["b"],!1,null,null,null);t["default"]=a.exports},"1f6c":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",{staticClass:"cmd-result-page"},[n("image",{staticClass:"cmd-result-page-image",attrs:{src:e.setSrc,mode:"aspectFit"}}),n("view",{staticClass:"cmd-result-page-text"},[e._v(e._s(e.setText))]),n("view",{staticClass:"cmd-result-page-subtext"},[e._v(e._s(e.setSubText))]),e.buttons.length?n("view",{staticClass:"cmd-result-page-buttons"},e._l(e.buttons,function(t,i){return n("button",{key:i,attrs:{type:t.type,plain:"true",size:"mini",eventid:"58d47a94-0-"+i},on:{click:t.handler}},[e._v(e._s(t.text))])})):e._e()])},c=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return c})},"256c":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=c(n("11db"));function c(e){return e&&e.__esModule?e:{default:e}}var s={name:"uni-collapse-item",components:{uniIcon:i.default},data:function(){var e="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{isOpen:this.open,height:0,elId:e}},watch:{open:function(e){this.isOpen=e}},computed:{index:function(){return this.$parent.$children.indexOf(this)},nameSync:function(){return 0===this.name?this.index:this.name},setCollapseCellClass:function(){var e=["uni-collapse-cell"];return!0!==this.disabled&&"true"!==this.disabled||e.push("uni-collapse-cell--disabled"),!0!==this.isOpen&&"true"!==this.isOpen||e.push("uni-collapse-cell--open"),e},setActive:function(){var e=[];return!0!==this.isOpen&&"true"!==this.isOpen||e.push("uni-active"),e},setContClass:function(){var e=[];return!0!==this.isOpen&&"true"!==this.isOpen||e.push("uni-active"),"inner"===this.animation&&e.push("uni-collapse-cell__inner"),e}},props:{animation:{type:String,default:"outer"},title:String,name:{type:[Number,String],default:0},disabled:{type:[Boolean,String],default:!1},open:{type:[Boolean,String],default:!1},icon:String,thumb:String},created:function(){var e=this.$parent||this.$root,t=e.$options.name;while(e&&"uni-collapse"!==t)e=e.$parent,e&&(t=e.$options.name);this.parent=e},onReady:function(){var t=this,n=e.createSelectorQuery().select("#".concat(this.elId));n.fields({size:!0},function(e){t.height=e.height}).exec()},methods:{onClick:function(){var e=this;if(!this.disabled){var t=!!this.parent.accordion&&this.parent.accordion;!0!==t&&"true"!==t||this.$parent.$children.forEach(function(t){t!==e&&(t.isOpen=!1)}),1==this.isOpen||"true"==this.isOpen?this.isOpen=!1:this.isOpen=!0,this.$emit("onIsOpen",this.isOpen),this.parent.onChange&&this.parent.onChange(this)}}}};t.default=s}).call(this,n("6e42")["default"])},"2c60":function(e,t,n){"use strict";n.r(t);var i=n("c9d4"),c=n.n(i);for(var s in i)"default"!==s&&function(e){n.d(t,e,function(){return i[e]})}(s);t["default"]=c.a},"3a1b":function(e,t,n){"use strict";n.r(t);var i=n("baa8"),c=n.n(i);for(var s in i)"default"!==s&&function(e){n.d(t,e,function(){return i[e]})}(s);t["default"]=c.a},"3e11":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",{class:e.setCollapseCellClass,attrs:{"hover-class":!0===e.disabled||"true"===e.disabled?"":"uni-collapse-cell--hover"}},[n("view",{staticClass:"uni-collapse-cell__title",attrs:{eventid:"a795c5b0-0"},on:{click:e.onClick}},[n("view",{staticClass:"iconfont uni-collapse-cell__title-inner"},[n("view",{staticClass:"uni-collapse-cell__title-text"},[n("image",{staticClass:"icon",attrs:{src:e.icon}}),e._v(e._s(e.title))])]),n("view",{staticClass:"uni-collapse-cell__title-arrow",class:e.setActive},[n("uni-icon",{attrs:{color:"#666",size:"20",type:"arrowright",mpcomid:"a795c5b0-0"}})],1)]),n("view",{staticClass:"uni-collapse-cell__content",class:"outer"===e.animation?"uni-collapse-cell--animation":"",style:{height:"true"===e.isOpen||!0===e.isOpen?e.height+"px":"0px"}},[n("view",{class:e.setContClass,attrs:{id:e.elId}},[e._t("default",null,{mpcomid:"a795c5b0-1"})],2)])])},c=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return c})},"3f19":function(e,t,n){"use strict";n.r(t);var i=n("b32e"),c=n.n(i);for(var s in i)"default"!==s&&function(e){n.d(t,e,function(){return i[e]})}(s);t["default"]=c.a},"3f69":function(e,t,n){},5784:function(e,t,n){"use strict";n.r(t);var i=n("7602"),c=n("7345");for(var s in c)"default"!==s&&function(e){n.d(t,e,function(){return c[e]})}(s);n("9c75");var o=n("2877"),a=Object(o["a"])(c["default"],i["a"],i["b"],!1,null,null,null);t["default"]=a.exports},"678f":function(e,t,n){},"6a45":function(e,t,n){"use strict";n.r(t);var i=n("3e11"),c=n("8a27");for(var s in c)"default"!==s&&function(e){n.d(t,e,function(){return c[e]})}(s);n("8a21");var o=n("2877"),a=Object(o["a"])(c["default"],i["a"],i["b"],!1,null,null,null);t["default"]=a.exports},7345:function(e,t,n){"use strict";n.r(t);var i=n("7b2f"),c=n.n(i);for(var s in i)"default"!==s&&function(e){n.d(t,e,function(){return i[e]})}(s);t["default"]=c.a},7602:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",[n("uni-collapse",{attrs:{mpcomid:"6c14a000-1"}},[e._l(e.ArrayTest,function(t,i){return n("block",[n("uni-collapse-item",{key:i,attrs:{title:t.AccountName,open:!1,mpcomid:"6c14a000-0-"+i}},[n("view",{staticClass:"all"},[n("image",{staticClass:"img",attrs:{src:"../../static/img/body.png",eventid:"6c14a000-0-"+i},on:{click:function(n){e.selectOneRecord(e.user.Token,t.RoomID)}}}),n("view",{attrs:{eventid:"6c14a000-1-"+i},on:{click:function(n){e.selectOneRecord(e.user.Token,t.RoomID)}}},[t.Integral<0?n("view",{staticClass:"jf1"},[e._v(e._s(t.Integral))]):n("view",{staticClass:"jf2"},[e._v("+"+e._s(t.Integral))]),n("view",{staticClass:"user"},[e._v(e._s(t.AccountName))])]),n("view",{staticClass:"roomid"},[e._v("房号："+e._s(t.RoomID))]),n("view",{staticClass:"good",attrs:{eventid:"6c14a000-2-"+i},on:{click:function(n){e.selectOneRecord(e.user.Token,t.RoomID)}}},[n("view",[e._v("开始："+e._s(t.CreateTime))]),n("view",[e._v("结束："+e._s(t.EndTime))])]),t.Integral<0?n("view",{staticClass:"failure",attrs:{eventid:"6c14a000-4-"+i},on:{click:function(n){e.selectRecord(t.RoomID)}}},[e._v("失败")]):n("view",{staticClass:"successful",attrs:{eventid:"6c14a000-3-"+i},on:{click:function(n){e.selectRecord(t.RoomID)}}},[e._v("胜利")]),n("view",{staticClass:"fuhao",attrs:{eventid:"6c14a000-5-"+i},on:{click:function(n){e.selectRecord(t.RoomID)}}},[e._v(">")])])])],1)}),n("view",{staticClass:"list"})],2)],1)},c=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return c})},"7b2f":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,c=A(n("13f5")),s=r(n("1b4e")),o=r(n("6a45")),a=r(n("9f21"));function r(e){return e&&e.__esModule?e:{default:e}}function A(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};i.get||i.set?Object.defineProperty(t,n,i):t[n]=e[n]}return t.default=e,t}var u={components:{uniCollapse:s.default,uniCollapseItem:o.default,cmdResultPage:a.default},data:function(){return{ArrayTest:[],user:"",oneRecord:"",getRecord:""}},created:function(){this.getUser()},onLoad:function(){this.initWebSocket()},methods:{getUser:function(){var e=this;e.user=JSON.parse(localStorage.getItem("userInfo"))},selectOneRecord:function(e,t){var n=this,i={AccountName:e,RoomID:t},c=JSON.stringify(i),s={Message:c,Tag:"ac",ActionMethod:"RecordBLL.GetRecordByUserAndRoom"};this.websocketsend(s),setTimeout(function(){alert("用户名："+n.oneRecord.AccountName+"\n积分："+n.oneRecord.Integral+"\n开始时间："+n.oneRecord.CreateTime+"\n结束时间："+n.oneRecord.EndTime)},500)},selectRecord:function(e){var t=this,n={RoomID:e},i=JSON.stringify(n),c={Message:i,Tag:"ac",ActionMethod:"RecordBLL.GetRecords"};this.websocketsend(c),setTimeout(function(){alert("用户："+t.getRecord[0].AccountName+"  VS  "+t.getRecord[1].AccountName+"\n积分："+t.getRecord[0].Integral+"  VS  "+t.getRecord[1].Integral+"\n开始时间："+t.getRecord[0].CreateTime+"  VS  "+t.getRecord[1].CreateTime+"\n结束时间："+t.getRecord[0].EndTime+"  VS  "+t.getRecord[1].EndTime)},500)},webSocketClientOnmessage:function(e){var t=JSON.parse(e.data),n="string"==typeof t?JSON.parse(t):t;if("RecordBLL.GetRecordInfo"==n.ActionMethod){var i=JSON.parse(n.Message),c=i;200===c.Code&&(this.ArrayTest=c.Data)}else if("RecordBLL.GetRecordByUserAndRoom"==n.ActionMethod){i=JSON.parse(n.Message);200==i.Code&&(this.oneRecord=i.Data)}else if("RecordBLL.GetRecords"==n.ActionMethod){i=JSON.parse(n.Message);console.log("res:"+JSON.stringify(i)),200==i.Code&&(this.getRecord=i.Data,console.log("res:"+JSON.stringify(this.getRecord)))}else console.log("错误")},initWebSocket:function(){i=new WebSocket(c.wsuri),i.onopen=this.webSocketClientOnopen,i.onmessage=this.webSocketClientOnmessage,i.onerror=this.webSocketClientOnerror,i.onclose=this.webSocketClientOnclose},webSocketClientOnopen:function(){var e={AccountName:this.user.Token},t=JSON.stringify(e),n={Message:t,Tag:"ac",ActionMethod:"RecordBLL.GetRecordInfo"};this.websocketsend(n)},websocketsend:function(e){i.send(JSON.stringify(e))},webSocketClientOnerror:function(e){this.initWebSocket(),console.log("websock连接错误,重新连接",e)},webSocketClientOnclose:function(e){console.log("websock连接关闭",e)}}};t.default=u},"7fb3":function(e,t,n){},"8a21":function(e,t,n){"use strict";var i=n("3f69"),c=n.n(i);c.a},"8a27":function(e,t,n){"use strict";n.r(t);var i=n("256c"),c=n.n(i);for(var s in i)"default"!==s&&function(e){n.d(t,e,function(){return i[e]})}(s);t["default"]=c.a},"943e":function(e,t,n){"use strict";var i=n("984d"),c=n.n(i);c.a},"984d":function(e,t,n){},"9c1f":function(e,t,n){"use strict";var i=n("7fb3"),c=n.n(i);c.a},"9c75":function(e,t,n){"use strict";var i=n("b7f3"),c=n.n(i);c.a},"9f15":function(e,t,n){"use strict";n("7f50");var i=s(n("b0ce")),c=s(n("5784"));function s(e){return e&&e.__esModule?e:{default:e}}Page((0,i.default)(c.default))},"9f21":function(e,t,n){"use strict";n.r(t);var i=n("1f6c"),c=n("3f19");for(var s in c)"default"!==s&&function(e){n.d(t,e,function(){return c[e]})}(s);n("a402");var o=n("2877"),a=Object(o["a"])(c["default"],i["a"],i["b"],!1,null,null,null);t["default"]=a.exports},a0b8:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",{staticClass:"uni-icon",class:["uni-icon-"+e.type],style:{color:e.color,"font-size":e.fontSize},attrs:{eventid:"448d1f7a-0"},on:{click:function(t){e.onClick()}}})},c=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return c})},a402:function(e,t,n){"use strict";var i=n("678f"),c=n.n(i);c.a},b32e:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"cmd-result-page",props:{src:{type:String,default:""},text:{type:String,default:""},subtext:{type:String,default:""},type:{type:String,default:"empty"},buttons:{type:Array,default:function(){return[]}}},data:function(){return{typeSrc:{network:"data:image/png;base64,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",lost:"data:image/png;base64,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",empty:"data:image/png;base64,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"},typeText:{network:"网络连接异常",empty:"暂无信息"},typeSubText:{network:"点击屏幕，重新加载",lost:"您要访问的页面已丢失"}}},computed:{setSrc:function(){var e=this.typeSrc[this.type];return this.src&&(e=this.src),e},setText:function(){var e=this.typeText[this.type];return this.text&&(e=this.text),e},setSubText:function(){var e=this.typeSubText[this.type];return this.subtext&&(e=this.subtext),e}}};t.default=i},b7f3:function(e,t,n){},baa8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"uni-icon",props:{type:String,color:String,size:[Number,String]},computed:{fontSize:function(){return"".concat(this.size,"px")}},methods:{onClick:function(){this.$emit("click")}}};t.default=i},c9d4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"uni-collapse",props:{accordion:{type:[Boolean,String],default:!1}},data:function(){return{}},mounted:function(){var e=this.$children,t=[];this.getChildren(e,t),this.childrens=t,!0!==this.accordion&&"true"!==this.accordion||t.forEach(function(e,n){t.forEach(function(t,i){n>=i||t.isOpen&&(e.isOpen=!1)})})},methods:{onChange:function(e){var t=[];this.childrens.forEach(function(e,n){e.isOpen&&t.push(e.nameSync)}),this.$emit("change",t)},getChildren:function(e,t){for(var n=0,i=e.length;n<i;n++){var c=e[n].$options.name;"uni-collapse-item"!==c?e[n].$children&&this.getChildren(e[n].$children,t):t.push(e[n])}}}};t.default=i},dea6:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",{staticClass:"uni-collapse"},[e._t("default",null,{mpcomid:"b5f3b70c-0"})],2)},c=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return c})}},[["9f15","common/runtime","common/vendor"]]]);
});
require('pages/record/record.js');
__wxRoute = 'pages/roomGet/roomGet';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/roomGet/roomGet.js';

define('pages/roomGet/roomGet.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/roomGet/roomGet"],{"1cc9":function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n;s(o("13f5"));function s(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,o):{};n.get||n.set?Object.defineProperty(t,o,n):t[o]=e[o]}return t.default=e,t}var i={data:function(){return{roomid:"",ArrayTest:[]}},onLoad:function(){},methods:{initWebSocket:function(){n=new WebSocket("ws://172.16.31.232:4000"),n.onopen=this.webSocketClientOnopen,console.log("打开成功"),n.onmessage=this.webSocketClientOnmessage,n.onerror=this.webSocketClientOnerror,n.onclose=this.webSocketClientOnclose},webSocketClientOnopen:function(){console.log("打开成功");var e={roomID:this.roomid};console.log(e);var t=JSON.stringify(e);console.log(t);var o={Message:t,Tag:"ac",ActionMethod:"RecordBLL.GetRecords"};console.log(o),this.websocketsend(o)},webSocketClientOnmessage:function(t){console.log("获取到数据："+t.data);var o=JSON.parse(t.data),n=JSON.parse(o.Message);console.log(n),200==n.Code?(console.log("通讯正常"),this.ArrayTest=n.Data,console.log(n.Data.length),0==n.Data.length&&e.showToast({title:"你输入的房号有误，请重新输入"})):console.log("通讯有误")},websocketsend:function(e){console.log("数据发送："+JSON.stringify(e)),n.send(JSON.stringify(e))},webSocketClientOnerror:function(e){this.initWebSocket(),console.log("websock连接错误,重新连接",e)},webSocketClientOnclose:function(e){console.log("websock连接关闭",e)},select:function(){this.initWebSocket()}}};t.default=i}).call(this,o("6e42")["default"])},"4a34":function(e,t,o){"use strict";o("7f50");var n=i(o("b0ce")),s=i(o("ecd3"));function i(e){return e&&e.__esModule?e:{default:e}}Page((0,n.default)(s.default))},"4cc4":function(e,t,o){"use strict";o.r(t);var n=o("1cc9"),s=o.n(n);for(var i in n)"default"!==i&&function(e){o.d(t,e,function(){return n[e]})}(i);t["default"]=s.a},5170:function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("view",[o("view",{staticClass:"topset"},[o("view",[e._v("查询:")]),o("view",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.roomid,expression:"roomid"}],attrs:{type:"text",placeholder:"请输入房号",eventid:"dd80a250-0"},domProps:{value:e.roomid},on:{input:function(t){t.target.composing||(e.roomid=t.target.value)}}})]),o("button",{attrs:{type:"primary",eventid:"dd80a250-1"},on:{click:e.select}},[e._v("查询")])],1),o("view",{staticClass:"list"},[o("view",[e._v("房间纪录如下：")]),o("view",e._l(e.ArrayTest,function(t,n){return o("view",[o("view",{staticClass:"all"},[o("image",{staticClass:"img",attrs:{src:"../../static/img/body.png"}}),o("view",[t.Integral<0?o("view",{staticClass:"jf1"},[e._v(e._s(t.Integral))]):o("view",{staticClass:"jf2"},[e._v("+"+e._s(t.Integral))]),o("view",{staticClass:"user"},[e._v(e._s(t.AccountName))])]),o("view",{staticClass:"roomid"},[e._v("房号："+e._s(t.RoomID))]),o("view",{staticClass:"good"},[o("view",[e._v("开始："+e._s(t.CreateTime))]),o("view",[e._v("结束："+e._s(t.EndTime))])]),t.Integral<0?o("view",{staticClass:"failure"},[e._v("失败")]):o("view",{staticClass:"successful"},[e._v("胜利")]),o("view",{staticClass:"fuhao"},[e._v(">")])])])}))])])},s=[];o.d(t,"a",function(){return n}),o.d(t,"b",function(){return s})},"6d83":function(e,t,o){"use strict";var n=o("eaca"),s=o.n(n);s.a},eaca:function(e,t,o){},ecd3:function(e,t,o){"use strict";o.r(t);var n=o("5170"),s=o("4cc4");for(var i in s)"default"!==i&&function(e){o.d(t,e,function(){return s[e]})}(i);o("6d83");var a=o("2877"),c=Object(a["a"])(s["default"],n["a"],n["b"],!1,null,null,null);t["default"]=c.exports}},[["4a34","common/runtime","common/vendor"]]]);
});
require('pages/roomGet/roomGet.js');


