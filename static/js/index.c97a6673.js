(function(n){function e(e){for(var o,r,c=e[0],s=e[1],u=e[2],g=0,d=[];g<c.length;g++)r=c[g],Object.prototype.hasOwnProperty.call(t,r)&&t[r]&&d.push(t[r][0]),t[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(n[o]=s[o]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var n,e=0;e<i.length;e++){for(var a=i[e],o=!0,r=1;r<a.length;r++){var s=a[r];0!==t[s]&&(o=!1)}o&&(i.splice(e--,1),n=c(c.s=a[0]))}return n}var o={},t={index:0},i=[];function r(n){return c.p+"static/js/"+({"pages-auth-auth":"pages-auth-auth","pages-cart-cart":"pages-cart-cart","pages-catarage-catarage":"pages-catarage-catarage","pages-collect-collect":"pages-collect-collect","pages-feedBack-index":"pages-feedBack-index","pages-goods_detail-main":"pages-goods_detail-main","pages-goods_list-goods_list":"pages-goods_list-goods_list","pages-index-index":"pages-index-index","pages-login-login":"pages-login-login","pages-order-order":"pages-order-order","pages-pay-pay":"pages-pay-pay","pages-search-search":"pages-search-search","pages-user-user":"pages-user-user"}[n]||n)+"."+{"pages-auth-auth":"5b4d2a66","pages-cart-cart":"d9182698","pages-catarage-catarage":"4e285c6e","pages-collect-collect":"afd5963d","pages-feedBack-index":"9f212aa5","pages-goods_detail-main":"e94f4c9b","pages-goods_list-goods_list":"3c32f084","pages-index-index":"68f4c957","pages-login-login":"fe1bd207","pages-order-order":"bc220a92","pages-pay-pay":"52d1558e","pages-search-search":"59198fa3","pages-user-user":"6cdfb00d"}[n]+".js"}function c(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return n[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(n){var e=[],a=t[n];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,o){a=t[n]=[e,o]}));e.push(a[2]=o);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=r(n);var u=new Error;i=function(e){s.onerror=s.onload=null,clearTimeout(g);var a=t[n];if(0!==a){if(a){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;u.message="Loading chunk "+n+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,a[1](u)}t[n]=void 0}};var g=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(e)},c.m=n,c.c=o,c.d=function(n,e,a){c.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:a})},c.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},c.t=function(n,e){if(1&e&&(n=c(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)c.d(a,o,function(e){return n[e]}.bind(null,o));return a},c.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return c.d(e,"a",e),e},c.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},c.p="./",c.oe=function(n){throw console.error(n),n};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var g=0;g<s.length;g++)e(s[g]);var l=u;i.push([0,"chunk-vendors"]),a()})({0:function(n,e,a){n.exports=a("2c90")},"2c90":function(n,e,a){"use strict";var o=a("4ea4"),t=o(a("5530"));a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("2efc"),a("1c31");var i=o(a("e143")),r=o(a("4b23"));i.default.config.productionTip=!1,r.default.mpType="app";var c=new i.default((0,t.default)({},r.default));c.$mount()},"2efc":function(n,e,a){"use strict";(function(n){var e=a("4ea4");a("13d5"),a("d3b7"),a("ac1f"),a("5319"),a("ddb0");var o=e(a("e143")),t={keys:function(){return[]}};n["____51A8AEE____"]=!0,delete n["____51A8AEE____"],n.__uniConfig={globalStyle:{navigationBarTextStyle:"white",navigationBarBackgroundColor:"#eb4450",backgroundColor:"#F8F8F8"},tabBar:{selectedColor:"#eb4450",color:"#ccc",list:[{pagePath:"pages/index/index",text:"首页",iconPath:"static/home.png",selectedIconPath:"static/home_active.png",redDot:!1,badge:""},{pagePath:"pages/catarage/catarage",text:"分类",iconPath:"static/netpng.png",selectedIconPath:"static/net_active.png",redDot:!1,badge:""},{pagePath:"pages/cart/cart",text:"购物车",iconPath:"static/shop.png",selectedIconPath:"static/shop_active.png",redDot:!1,badge:""},{pagePath:"pages/user/user",text:"我的",iconPath:"static/profile.png",selectedIconPath:"static/profile_active.png",redDot:!1,badge:""}],backgroundColor:"",borderStyle:"black"}},n.__uniConfig.compilerVersion="3.4.7",n.__uniConfig.router={mode:"hash",base:"./"},n.__uniConfig.publicPath="./",n.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},n.__uniConfig.debug=!1,n.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},n.__uniConfig.sdkConfigs={},n.__uniConfig.qqMapKey=void 0,n.__uniConfig.googleMapKey=void 0,n.__uniConfig.locale="",n.__uniConfig.fallbackLocale=void 0,n.__uniConfig.locales=t.keys().reduce((function(n,e){var a=e.replace(/\.\/(uni-app.)?(.*).json/,"$2"),o=t(e);return Object.assign(n[a]||(n[a]={}),o.common||o),n}),{}),n.__uniConfig.nvue={"flex-direction":"column"},n.__uniConfig.__webpack_chunk_load__=a.e,o.default.component("pages-index-index",(function(n){var e={component:a.e("pages-index-index").then(function(){return n(a("712a"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),o.default.component("pages-cart-cart",(function(n){var e={component:a.e("pages-cart-cart").then(function(){return n(a("454e"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),o.default.component("pages-catarage-catarage",(function(n){var e={component:a.e("pages-catarage-catarage").then(function(){return n(a("fa63"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),o.default.component("pages-search-search",(function(n){var e={component:a.e("pages-search-search").then(function(){return n(a("6126"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),o.default.component("pages-goods_list-goods_list",(function(n){var e={component:a.e("pages-goods_list-goods_list").then(function(){return n(a("2b47"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),o.default.component("pages-goods_detail-main",(function(n){var e={component:a.e("pages-goods_detail-main").then(function(){return n(a("7d30"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),o.default.component("pages-pay-pay",(function(n){var e={component:a.e("pages-pay-pay").then(function(){return n(a("04ef"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),o.default.component("pages-auth-auth",(function(n){var e={component:a.e("pages-auth-auth").then(function(){return n(a("277a"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),o.default.component("pages-order-order",(function(n){var e={component:a.e("pages-order-order").then(function(){return n(a("dc15"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),o.default.component("pages-login-login",(function(n){var e={component:a.e("pages-login-login").then(function(){return n(a("38ff"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),o.default.component("pages-user-user",(function(n){var e={component:a.e("pages-user-user").then(function(){return n(a("0c8b"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),o.default.component("pages-collect-collect",(function(n){var e={component:a.e("pages-collect-collect").then(function(){return n(a("b553"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),o.default.component("pages-feedBack-index",(function(n){var e={component:a.e("pages-feedBack-index").then(function(){return n(a("9424"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),n.__uniRoutes=[{path:"/",alias:"/pages/index/index",component:{render:function(n){return n("Page",{props:Object.assign({isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0},__uniConfig.globalStyle,{navigationBarTitleText:"优购首页"})},[n("pages-index-index",{slot:"page"})])}},meta:{id:1,name:"pages-index-index",isNVue:!1,maxWidth:0,pagePath:"pages/index/index",isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0,windowTop:44}},{path:"/pages/cart/cart",component:{render:function(n){return n("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:2},__uniConfig.globalStyle,{navigationBarTitleText:"购物车"})},[n("pages-cart-cart",{slot:"page"})])}},meta:{id:2,name:"pages-cart-cart",isNVue:!1,maxWidth:0,pagePath:"pages/cart/cart",isQuit:!0,isTabBar:!0,tabBarIndex:2,windowTop:44}},{path:"/pages/catarage/catarage",component:{render:function(n){return n("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:1},__uniConfig.globalStyle,{navigationBarTitleText:"商品分类"})},[n("pages-catarage-catarage",{slot:"page"})])}},meta:{id:3,name:"pages-catarage-catarage",isNVue:!1,maxWidth:0,pagePath:"pages/catarage/catarage",isQuit:!0,isTabBar:!0,tabBarIndex:1,windowTop:44}},{path:"/pages/search/search",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{})},[n("pages-search-search",{slot:"page"})])}},meta:{name:"pages-search-search",isNVue:!1,maxWidth:0,pagePath:"pages/search/search",windowTop:44}},{path:"/pages/goods_list/goods_list",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"商品列表",enablePullDownRefresh:!0})},[n("pages-goods_list-goods_list",{slot:"page"})])}},meta:{name:"pages-goods_list-goods_list",isNVue:!1,maxWidth:0,pagePath:"pages/goods_list/goods_list",windowTop:44}},{path:"/pages/goods_detail/main",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"商品详情",enablePullDownRefresh:!0})},[n("pages-goods_detail-main",{slot:"page"})])}},meta:{name:"pages-goods_detail-main",isNVue:!1,maxWidth:0,pagePath:"pages/goods_detail/main",windowTop:44}},{path:"/pages/pay/pay",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"支付",enablePullDownRefresh:!1})},[n("pages-pay-pay",{slot:"page"})])}},meta:{name:"pages-pay-pay",isNVue:!1,maxWidth:0,pagePath:"pages/pay/pay",windowTop:44}},{path:"/pages/auth/auth",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"支付",enablePullDownRefresh:!1})},[n("pages-auth-auth",{slot:"page"})])}},meta:{name:"pages-auth-auth",isNVue:!1,maxWidth:0,pagePath:"pages/auth/auth",windowTop:44}},{path:"/pages/order/order",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"订单",enablePullDownRefresh:!1})},[n("pages-order-order",{slot:"page"})])}},meta:{name:"pages-order-order",isNVue:!1,maxWidth:0,pagePath:"pages/order/order",windowTop:44}},{path:"/pages/login/login",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"登录",enablePullDownRefresh:!1})},[n("pages-login-login",{slot:"page"})])}},meta:{name:"pages-login-login",isNVue:!1,maxWidth:0,pagePath:"pages/login/login",windowTop:44}},{path:"/pages/user/user",component:{render:function(n){return n("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:3},__uniConfig.globalStyle,{navigationBarTitleText:"个人中心",enablePullDownRefresh:!1})},[n("pages-user-user",{slot:"page"})])}},meta:{id:4,name:"pages-user-user",isNVue:!1,maxWidth:0,pagePath:"pages/user/user",isQuit:!0,isTabBar:!0,tabBarIndex:3,windowTop:44}},{path:"/pages/collect/collect",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"收藏商品",enablePullDownRefresh:!1})},[n("pages-collect-collect",{slot:"page"})])}},meta:{name:"pages-collect-collect",isNVue:!1,maxWidth:0,pagePath:"pages/collect/collect",windowTop:44}},{path:"/pages/feedBack/index",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"意见反馈",enablePullDownRefresh:!1})},[n("pages-feedBack-index",{slot:"page"})])}},meta:{name:"pages-feedBack-index",isNVue:!1,maxWidth:0,pagePath:"pages/feedBack/index",windowTop:44}},{path:"/preview-image",component:{render:function(n){return n("Page",{props:{navigationStyle:"custom"}},[n("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(n){return n("Page",{props:{navigationStyle:"custom"}},[n("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(n){return n("Page",{props:{navigationStyle:"custom"}},[n("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],n.UniApp&&new n.UniApp}).call(this,a("c8ba"))},"3e28":function(n,e,a){var o=a("24fb");e=o(!1),e.push([n.i,'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*每个页面公共css */uni-view,uni-text,uni-image,uni-swiper-item,uni-navigator{padding:0;margin:0;box-sizing:border-box}uni-image{width:100%}@font-face{font-family:iconfont; /* Project id 3352093 */src:url(//at.alicdn.com/t/font_3352093_mmgrqycojzk.woff2?t=1650682111165) format("woff2"),url(//at.alicdn.com/t/font_3352093_mmgrqycojzk.woff?t=1650682111165) format("woff"),url(//at.alicdn.com/t/font_3352093_mmgrqycojzk.ttf?t=1650682111165) format("truetype")}.iconfont{font-family:iconfont!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-shiwujiaoxing:before{content:"\\e634"}.icon-gouwuche:before{content:"\\e63f"}.icon-erji:before{content:"\\e605"}.icon-fukuantongzhi:before{content:"\\e60c"}.icon-fenxiang_o:before{content:"\\ebab"}.icon-huoche:before{content:"\\e640"}.icon-ding_dan:before{content:"\\e61b"}.icon-tuihuotuikuan_dianpu:before{content:"\\e773"}.icon-kongxinwujiaoxing:before{content:"\\e625"}',""]),n.exports=e},"49b5":function(n,e,a){"use strict";var o;a.d(e,"b",(function(){return t})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return o}));var t=function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("App",{attrs:{keepAliveInclude:n.keepAliveInclude}})},i=[]},"4b23":function(n,e,a){"use strict";a.r(e);var o=a("49b5"),t=a("bf50");for(var i in t)"default"!==i&&function(n){a.d(e,n,(function(){return t[n]}))}(i);a("55c8");var r,c=a("f0c5"),s=Object(c["a"])(t["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);e["default"]=s.exports},"55c8":function(n,e,a){"use strict";var o=a("5ad7"),t=a.n(o);t.a},"5ad7":function(n,e,a){var o=a("3e28");"string"===typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);var t=a("4f06").default;t("03b28c70",o,!0,{sourceMap:!1,shadowMode:!1})},"665d":function(n,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};e.default=o},bf50:function(n,e,a){"use strict";a.r(e);var o=a("665d"),t=a.n(o);for(var i in o)"default"!==i&&function(n){a.d(e,n,(function(){return o[n]}))}(i);e["default"]=t.a}});