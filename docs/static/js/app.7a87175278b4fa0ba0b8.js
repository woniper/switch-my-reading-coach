webpackJsonp([1],{"DnY/":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("7+uW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var r=n("VU/8")({name:"App"},i,!1,function(e){n("gsu9")},null,null).exports,c=n("/ocq"),a=n("Zrlr"),u=n.n(a),o=n("wxAW"),h=n.n(o),f=function(){return"/switch-my-reading-coach/static"},l=function e(t,n){u()(this,e),this.eng=t,this.kor=n},d=n("afOB"),p=n.n(d),v=function(){function e(){u()(this,e)}return h()(e,[{key:"parse",value:function(e){var t=this,n=[];return e.map(function(e){return t.readText(f()+e,function(e){t.parseJson(e).data.forEach(function(e){return n.push(new l(e[0],e[1]))})})}),n}},{key:"readText",value:function(e,t){var n=new XMLHttpRequest;n.open("GET",e,!1),n.onload=function(e){t(e.target.response)},n.send()}},{key:"parseJson",value:function(e){return p.a.parse(e,{delimiter:"|",skipEmptyLines:!0})}}]),e}(),m={name:"Switcher",data:function(){return{msg:"Welcome to Hell",data:[],filePaths:["/data/source-01.csv"],sentences:[],selectedSentence:{}}},created:function(){this.fetch()},methods:{fetch:function(){var e=(new v).parse(this.filePaths);this.shuffle(e),this.sentences=e},shuffle:function(e){e.sort(function(){return Math.random()-.5})},next:function(){this.sentences.length>0?(this.selectedSentence=this.sentences.shift(),this.msg=this.selectedSentence.kor):this.fetch()},viewEnglish:function(){this.selectedSentence.eng&&alert(this.selectedSentence.eng)}}},g={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{on:{click:this.next}},[t("h1",[this._v(this._s(this.msg))])]),this._v(" "),t("b-button",{attrs:{variant:"danger"},on:{click:this.viewEnglish}},[this._v("영문장 보기")])],1)},staticRenderFns:[]};var w=n("VU/8")(m,g,!1,function(e){n("DnY/")},"data-v-38ecfde8",null).exports,_=n("Tqaz");s.default.use(_.a),s.default.use(c.a);var k=new c.a({routes:[{path:"/",name:"Switcher",component:w}]});s.default.config.productionTip=!1,new s.default({el:"#app",router:k,components:{App:r},template:"<App/>"})},gsu9:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.7a87175278b4fa0ba0b8.js.map