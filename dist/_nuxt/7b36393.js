(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{480:function(e,t,r){var content=r(537);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(70).default)("7e7f141b",content,!0,{sourceMap:!1})},536:function(e,t,r){"use strict";r(480)},537:function(e,t,r){var n=r(69)(!1);n.push([e.i,".container[data-v-71ee9b8e]{margin-top:30px}.container h1[data-v-71ee9b8e],.container h2[data-v-71ee9b8e]{text-align:center}.container h2[data-v-71ee9b8e]{color:#fff;padding-top:15%}.swiper[data-v-71ee9b8e]{height:360px}swiper-slide[data-v-71ee9b8e]{background-position:50%;background-size:cover}",""]),e.exports=n},544:function(e,t,r){"use strict";r.r(t);var n=r(27),o=(r(85),r(449)),c=r.n(o),d={asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$axios,t.next=3,r.$get("http://icanhazip.com");case 3:return n=t.sent,t.abrupt("return",{ip:n});case 5:case"end":return t.stop()}}),t)})))()},data:function(){return{mygogoro:"",table_tr:[],resilt:[],url:"https://drive.google.com/drive/folders/1ejTJ9dRo885UsOUXCOtBTKNKHsqBepcr"}},created:function(){},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.fetchUrl();case 1:case"end":return t.stop()}}),t)})))()},methods:{fetchUrl:function(){var e=this;this.$axios.get("https://cors-anywhere.herokuapp.com/https://drive.google.com/drive/folders/1ejTJ9dRo885UsOUXCOtBTKNKHsqBepcr").then((function(t){var r=c.a.load(t.data);r(".WYuW0e ").each((function(t,element){var n=r(element).attr("data-id");e.resilt.push(n)}))}))}}},f=(r(536),r(81)),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("audio",{attrs:{id:"myaudi",src:"https://drive.google.com/uc?export=download&id=1zdkZRPx4Tq3XZ2oy17dZmWDG3dJaj0jk",controls:""}})])}],!1,null,"71ee9b8e",null);t.default=component.exports}}]);