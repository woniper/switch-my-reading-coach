webpackJsonp([1],{NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App"},i,!1,function(t){n("gsu9")},null,null).exports,r=n("/ocq"),o=n("//Fk"),c=n.n(o),u=function(){return"/switch-my-reading-coach/static"},h=n("R/3D");a.a.use(h.a);var l={name:"Switcher",data:function(){return{msg:"Welcome to Hell",data:[],eng:""}},created:function(){var t=this;this.readTextFile(u()+"/data/source-01.csv").then(function(e){var n=t.$papa.parse(e,{delimiter:"|",skipEmptyLines:!0});n&&(t.data=n.data,t.shuffle(t.data),console.log(t.data))})},methods:{readTextFile:function(t){var e=new XMLHttpRequest;return e.open("GET",t,!1),new c.a(function(t){e.onload=function(e){t(e.target.response)},e.send()})},shuffle:function(t){t.sort(function(){return Math.random()-.5})},next:function(){if(this.data.length>0){var t=this.data.shift();this.eng=t[0],this.msg=t[1]}else alert("재 시작")},viewEnglish:function(){alert(this.eng)}}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{on:{click:this.next}},[e("h1",[this._v(this._s(this.msg))]),this._v(" "),e("button",{on:{click:this.viewEnglish}},[this._v("보기")])])},staticRenderFns:[]};var p=n("VU/8")(l,d,!1,function(t){n("PMIQ")},"data-v-97e9771a",null).exports;a.a.use(r.a);var f=new r.a({routes:[{path:"/",name:"Switcher",component:p}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:f,components:{App:s},template:"<App/>"})},PMIQ:function(t,e){},gsu9:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.761a4a4ea60da60da52f.js.map