webpackJsonp([1],{"6Ra2":function(e,n){},"9M+g":function(e,n){},Jmt5:function(e,n){},NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=t("7+uW"),i={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var c=t("VU/8")({name:"App"},i,!1,function(e){t("gsu9")},null,null).exports,a=t("/ocq"),r=t("Zrlr"),o=t.n(r),u=t("wxAW"),h=t.n(u),d=function(){return"/switch-my-reading-coach/static"},l=function e(n,t){o()(this,e),this.eng=n,this.kor=t},v=t("afOB"),f=t.n(v),m=function(){function e(){o()(this,e)}return h()(e,[{key:"parse",value:function(e){var n=this,t=[];return e.map(function(e){return n.readText(d()+e,function(e){n.parseJson(e).data.forEach(function(e){return t.push(new l(e[0],e[1]))})})}),t}},{key:"readText",value:function(e,n){var t=new XMLHttpRequest;t.open("GET",e,!1),t.onload=function(e){n(e.target.response)},t.send()}},{key:"parseJson",value:function(e){return f.a.parse(e,{delimiter:"|",skipEmptyLines:!0})}}]),e}(),p={name:"Switcher",data:function(){return{msg:"Welcome to Hell",dismissEnglish:!1,filePaths:["/data/A01-01.csv","/data/A02-03.csv","/data/A03-05.csv","/data/A04-07.csv","/data/B01-02.csv","/data/B02-04.csv","/data/B03-06.csv","/data/B04-08.csv","/data/B05-10.csv"],sentences:[],selectedSentence:{},selectedSentenceIndex:0,sentencesSize:0,dismissSecs:5,dismissCountDown:0}},created:function(){this.fetch()},methods:{fetch:function(){var e=(new m).parse(this.filePaths);this.sentencesSize=e.length,this.selectedSentenceIndex=0,this.dismissEnglish=!1,this.sentences=this.shuffle(e),console.info(e)},shuffle:function(e){return e.sort(function(){return Math.random()-.5}),e},next:function(){this.isLastSentence()&&(alert("모든 문장이 끝났습니다. 다시 시작합니다."),this.fetch()),this.selectedSentence=this.nextSentence(),this.msg=this.selectedSentence.kor,this.showAlert()},nextSentence:function(){var e=this.sentences[this.selectedSentenceIndex++];return this.selectedSentence=e,e},isLastSentence:function(){return this.selectedSentenceIndex===this.sentences.length},previous:function(){this.isFirstSentence()?alert("현재 문장이 첫 문장입니다."):(this.selectedSentence=this.previousSentence(),this.msg=this.selectedSentence.kor,this.showAlert())},previousSentence:function(){var e=this.sentences[this.selectedSentenceIndex--];return this.selectedSentence=e,e},isFirstSentence:function(){return 0===this.selectedSentenceIndex},showEnglish:function(){this.selectedSentence.eng&&(this.dismissEnglish=!this.dismissEnglish)},countDownChanged:function(e){this.dismissCountDown=e},showAlert:function(){this.dismissCountDown=this.dismissSecs,this.dismissEnglish=!1}}},w={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("div",[t("b-alert",{attrs:{show:"",variant:"success"}},[t("h4",{staticClass:"alert-heading"},[e._v(" "+e._s(e.msg)+" ")]),e._v(" "),t("hr",{directives:[{name:"show",rawName:"v-show",value:e.dismissEnglish,expression:"dismissEnglish"}]}),e._v(" "),t("p",{directives:[{name:"show",rawName:"v-show",value:e.dismissEnglish,expression:"dismissEnglish"}],staticClass:"mb-0"},[e._v("\n        "+e._s(e.selectedSentence.eng)+"\n      ")])])],1),e._v(" "),t("b-alert",{attrs:{show:e.dismissCountDown,dismissible:"",variant:"warning"},on:{dismissed:function(n){e.dismissCountDown=0},"dismiss-count-down":e.countDownChanged}},[t("p",[e._v("CountDown : "+e._s(e.dismissCountDown)+" seconds...")]),e._v(" "),t("b-progress",{attrs:{variant:"warning",max:e.dismissSecs,value:e.dismissCountDown,height:"4px"}})],1),e._v(" "),t("b-button",{attrs:{variant:"info"},on:{click:e.previous}},[e._v("Previous")]),e._v(" "),t("b-button",{attrs:{variant:"danger"},on:{click:e.showEnglish}},[e._v("Show English")]),e._v(" "),t("b-button",{attrs:{variant:"info"},on:{click:e.next}},[e._v("Next")])],1)},staticRenderFns:[]};var g=t("VU/8")(p,w,!1,function(e){t("6Ra2")},"data-v-11950a65",null).exports,S=t("Tqaz");s.default.use(S.a),s.default.use(a.a);var _=new a.a({routes:[{path:"/",name:"Switcher",component:g}]});t("Jmt5"),t("9M+g");s.default.config.productionTip=!1,new s.default({el:"#app",router:_,components:{App:c},template:"<App/>"})},gsu9:function(e,n){}},["NHnr"]);
//# sourceMappingURL=app.282b804682791a623394.js.map