webpackJsonp([1],{"9kr7":function(t,e){},L2z2:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s,n=i("7+uW"),r=i("bOdI"),a=i.n(r),h={data:function(){return{stage:null,canvas:null,boxWidth:50,boxHeight:20,gameWidth:300,gameHeight:480,createjs:null,numberBoxes:[],fallingSpeed:.8,ticksPerNewBox:80,calculationText:null,controlHeight:100,inputs:[],result:1,boundaryY:320,initialLifes:3,lifes:3,hearts:[],heartsContainer:null,gameOverShow:!1}},mounted:function(){this.init(),this.generateNumberBox(),this.stage.update()},methods:(s={init:function(){this.createjs=window.createjs,this.canvas=document.getElementById("canvas"),this.stage=new this.createjs.Stage(this.canvas),this.createjs.Ticker.setFPS(40),this.createjs.Ticker.addEventListener("tick",this.tick),this.calculationText=new this.createjs.Text("1X1=1","18px Impact","White"),this.calculationText.textAlign="center",this.calculationText.x=this.gameWidth/2,this.calculationText.y=this.gameHeight-this.controlHeight-30,this.stage.addChild(this.calculationText);var t=new this.createjs.Bitmap("../../static/images/line.png");t.y=this.boundaryY,this.stage.addChild(t),this.initHearts()},initHearts:function(){this.heartsContainer=new this.createjs.Container,this.heartsContainer.x=5,this.heartsContainer.y=5,this.stage.addChild(this.heartsContainer),this.resetHearts()},resetHearts:function(){this.heartsContainer.removeAllChildren(),this.hearts.length=0;for(var t=0;t<this.initialLifes;t++){var e=new this.createjs.Bitmap("../../static/images/heart.png");e.x=20*t,this.heartsContainer.addChild(e),this.hearts.push(e)}},deduceLife:function(){this.lifes-=1;var t=this.hearts[this.lifes];this.heartsContainer.removeChild(t),this.lifes<=0&&this.gameOver()},gameOver:function(){this.createjs.setPaused(!0)},updateText:function(t){this.calculationText.text=t},controlClicked:function(t){var e=t.target.dataset.value,i=this.addInput(e);this.updateText(i),this.checkResult()},addInput:function(t){return this.inputs.length>=2&&this.clearInputs(),this.inputs.push(t),this.result*=t,this.inputs.join("X")+"="+this.result},clearInputs:function(){this.inputs.length=0,this.result=1},tick:function(t){(this.stage.update(),t.paused)||(this.moveObjects(),this.createjs.Ticker.getTicks(!0)%this.ticksPerNewBox==0&&this.generateNumberBox())},moveObjects:function(){for(var t=0;t<this.numberBoxes.length;){var e=this.numberBoxes[t];e.y>this.boundaryY?(this.removeNumberBox(e),this.deduceLife()):(e.y+=this.fallingSpeed,t++)}},removeNumberBox:function(t){for(var e=0,i=this.numberBoxes.length;e<i;e++){var s=this.numberBoxes[e];if(s===t)return this.numberBoxes.splice(e,1),void this.stage.removeChild(s)}},findNumberBoxWithValue:function(t){for(var e=0,i=this.numberBoxes.length;e<i;e++){var s=this.numberBoxes[e];if(s.value===t)return s}},checkResult:function(){var t=this.findNumberBoxWithValue(this.result);t&&(this.showCircle(t.x,t.y),this.removeNumberBox(t),this.clearInputs())},showCircle:function(t,e){var i=new this.createjs.Bitmap("../../static/circle.png");i.x=t||0,i.y=e||0,this.stage.addChild(i),this.createjs.Tween.get(i).wait(500).to({alpha:0},1e3).call(function(){this.stage.removeChild(i)}.bind(this))},rectShape:function(t,e,i){var s=new this.createjs.Container;(i=i||{}).strokeWidth=i.strokeWidth||0,i.strokeColor=i.strokeColor||0,i.fillColor=i.fillColor||"rgb(255, 255, 0, 1)";var n=new this.createjs.Shape;return n.graphics.setStrokeStyle(i.strokeWidth).beginStroke(i.strokeColor).beginFill(i.fillColor).drawRect(0,0,t,e),s.addChild(n),s},box:function(){var t=new this.createjs.Container,e=new this.createjs.Bitmap("../../static/images/box.png");return t.addChild(e),t},numberBox:function(t){var e=this.box(),i=new this.createjs.Text(t,"24px Impact","red");return i.textBaseline="top",i.textAlign="center",i.x=this.boxWidth/2,void 0===i.y&&console.log("in numberBox"),i.y=this.boxHeight/2,e.addChild(i),e.value=t,e},randomInt:function(t,e){return Math.floor(Math.random()*(e-t+1)+t)},generateNumberBox:function(){var t=this.randomInt(1,12)*this.randomInt(1,12),e=this.numberBox(t);e.x=Math.random()*(this.gameWidth-this.boxWidth),void 0===e.y&&console.log("generaeNumberBox"),e.y=0,this.stage.addChild(e),this.numberBoxes.push(e)}},a()(s,"gameOver",function(){this.createjs.Ticker.setPaused(!0),this.showGameOver()}),a()(s,"showGameOver",function(){this.gameOverShow=!0}),a()(s,"hideGameOver",function(){this.gameOverShow=!1}),a()(s,"gameOverClicked",function(){this.lifes=this.initialLifes,this.removeAllNumberBoxes(),this.hideGameOver(),this.resetHearts(),this.createjs.Ticker.setPaused(!1),console.log(this.gameOverShow)}),a()(s,"removeAllNumberBoxes",function(){for(var t=0,e=this.numberBoxes.length;t<e;t++){var i=this.numberBoxes[t];this.stage.removeChild(i)}this.numberBoxes.length=0}),s)},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("canvas",{attrs:{id:"canvas",width:"300",height:"480"}}),t._v(" "),i("div",{attrs:{id:"control-box"}},t._l(12,function(e){return i("a",{staticClass:"control",attrs:{"data-value":e,href:"#"},on:{click:t.controlClicked}},[t._v("\n    "+t._s(e)+"\n    ")])})),t._v(" "),i("div",{class:{hide:!t.gameOverShow,show:t.gameOverShow},attrs:{id:"game-over"},on:{click:t.gameOverClicked}})])},staticRenderFns:[]};var l={components:{GameScene:i("VU/8")(h,o,!1,function(t){i("L2z2")},"data-v-76039472",null).exports}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this._m(0),this._v(" "),e("section",{staticClass:"row",attrs:{id:"game"}},[e("game-scene")],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("div",{staticClass:"row"},[e("h1",[this._v("Multiply Defense")])])])}]};var u={components:{GameContainer:i("VU/8")(l,c,!1,function(t){i("9kr7")},"data-v-679e4b66",null).exports},name:"app"},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("game-container")],1)},staticRenderFns:[]},d=i("VU/8")(u,v,!1,null,null,null).exports,m=i("/ocq"),g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hello"},[i("h1",[t._v(t._s(t.msg))]),t._v(" "),i("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),i("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[i("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),i("br"),t._v(" "),i("li",[i("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var f=i("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},g,!1,function(t){i("Ugm9")},"data-v-694cd902",null).exports;n.a.use(m.a);var p=new m.a({routes:[{path:"/",name:"HelloWorld",component:f}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:p,components:{App:d},template:"<App/>"})},Ugm9:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.768684fbf0b2697acd81.js.map