webpackJsonp([1],{"7jCY":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("7+uW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var r=n("VU/8")({name:"App"},i,!1,function(e){n("gsu9")},null,null).exports,c=n("/ocq"),a=n("Zrlr"),o=n.n(a),u=n("wxAW"),h=n.n(u),f=function(){return"/switch-my-reading-coach/static"},l=function e(t,n){o()(this,e),this.eng=t,this.kor=n},p=n("afOB"),d=n.n(p),v=function(){function e(){o()(this,e)}return h()(e,[{key:"parse",value:function(e){var t=this,n=[];return e.map(function(e){return t.readText(f()+e,function(e){t.parseJson(e).data.forEach(function(e){return n.push(new l(e[0],e[1]))})})}),n}},{key:"readText",value:function(e,t){var n=new XMLHttpRequest;n.open("GET",e,!1),n.onload=function(e){t(e.target.response)},n.send()}},{key:"parseJson",value:function(e){return d.a.parse(e,{delimiter:"|",skipEmptyLines:!0})}}]),e}(),m={name:"Switcher",data:function(){return{msg:"Welcome to Hell",data:[],filePaths:["/data/source-01.csv"],sentences:[],selectedSentence:{}}},created:function(){this.fetch()},methods:{fetch:function(){var e=(new v).parse(this.filePaths);this.shuffle(e),this.sentences=e},shuffle:function(e){e.sort(function(){return Math.random()-.5})},next:function(){this.sentences.length>0?(this.selectedSentence=this.sentences.shift(),this.msg=this.selectedSentence.kor):this.fetch()},viewEnglish:function(){alert(this.selectedSentence.eng)}}},g={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{on:{click:this.next}},[t("h1",[this._v(this._s(this.msg))])]),this._v(" "),t("button",{staticClass:"btn btn-dark",on:{click:this.viewEnglish}},[this._v("보기")])])},staticRenderFns:[]};var w=n("VU/8")(m,g,!1,function(e){n("7jCY")},"data-v-1823b39b",null).exports;s.a.use(c.a);var k=new c.a({routes:[{path:"/",name:"Switcher",component:w}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:k,components:{App:r},template:"<App/>"})},gsu9:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.0921ded59588d1cf8d7c.js.map