(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{479:function(t,e,n){var content=n(537);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(70).default)("0a7de1b2",content,!0,{sourceMap:!1})},536:function(t,e,n){"use strict";n(479)},537:function(t,e,n){var r=n(69)(!1);r.push([t.i,".container[data-v-857665d0]{margin-top:30px}.container h1[data-v-857665d0],.container h2[data-v-857665d0]{text-align:center}.container h2[data-v-857665d0]{color:#fff;padding-top:15%}.swiper[data-v-857665d0]{height:360px}",""]),t.exports=r},538:function(t,e,n){"use strict";n.r(e);var r=n(27),o=(n(85),n(2),n(20),n(53),n(480),n(482)),c=n.n(o),l={data:function(){return{myselectdada:"",localdata:[],listArr:[],listName:[],totalList:[],tempSRT:""}},mounted:function(){this.getmusicAPI()},methods:{importAll:function(t){var e=this;t.keys().forEach((function(t){return e.localdata.push({pathShort:t.replaceAll("./","")})}))},searccc:function(){this.tempSRT="https://drive.google.com/uc?export=download&id="+this.myselectdada},getmusicAPI:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.totalList=[],t.listArr=[],t.listName=[],t.$axios.get("https://nameless-island-05514.herokuapp.com/https://drive.google.com/drive/folders/1ejTJ9dRo885UsOUXCOtBTKNKHsqBepcr",{headers:{"X-Requested-With":"XMLHttpRequest"}}).then((function(e){var n=c.a.load(e.data);n(".WYuW0e ").each((function(e,element){var r=n(element).attr("data-id");t.listArr.push(r)})),n(".Q5txwe ").each((function(e,element){var r=n(element).attr("data-tooltip");t.listName.push(r)}));for(var i=0;i<t.listName.length;)t.totalList.push({name:t.listName[i],url:t.listArr[i]}),i++}));case 4:case"end":return e.stop()}}),e)})))()}}},d=(n(536),n(81)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("audio",{attrs:{id:"myaudi",src:t.tempSRT,controls:""}}),t._v(" "),n("el-select",{attrs:{placeholder:"選你的音樂"},on:{change:function(e){return t.searccc()}},model:{value:t.myselectdada,callback:function(e){t.myselectdada=e},expression:"myselectdada"}},t._l(t.totalList,(function(t){return n("el-option",{key:t.id,attrs:{label:t.name,value:t.url}})})),1),t._v(" "),n("el-button",{on:{click:function(e){return t.getmusicAPI()}}},[t._v("\n    刷新\n  ")]),t._v(" "),n("div",[t._v("\n    現有歌單(ㄏ)\n  ")]),t._v(" "),t._l(t.totalList,(function(e,r){return n("div",{key:r},[n("p",[t._v(t._s(r+1)+" . "+t._s(e.name)+" ")])])}))],2)}),[],!1,null,"857665d0",null);e.default=component.exports}}]);