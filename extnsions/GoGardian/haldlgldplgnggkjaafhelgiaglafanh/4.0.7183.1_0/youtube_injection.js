!function(e){var t={};function i(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},i.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=879)}({116:function(e,t,i){(function(t){var i="object"==typeof t&&t&&t.Object===Object&&t;e.exports=i}).call(this,i(12))},12:function(e,t){var i;i=function(){return this}();try{i=i||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(i=window)}e.exports=i},127:function(e,t){for(var i=[],n=0;n<256;++n)i[n]=(n+256).toString(16).substr(1);e.exports=function(e,t){var n=t||0,o=i;return o[e[n++]]+o[e[n++]]+o[e[n++]]+o[e[n++]]+"-"+o[e[n++]]+o[e[n++]]+"-"+o[e[n++]]+o[e[n++]]+"-"+o[e[n++]]+o[e[n++]]+"-"+o[e[n++]]+o[e[n++]]+o[e[n++]]+o[e[n++]]+o[e[n++]]+o[e[n++]]}},128:function(e,t,i){(function(t){var i,n=t.crypto||t.msCrypto;if(n&&n.getRandomValues){var o=new Uint8Array(16);i=function(){return n.getRandomValues(o),o}}if(!i){var r=new Array(16);i=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),r[t]=e>>>((3&t)<<3)&255;return r}}e.exports=i}).call(this,i(12))},132:function(e,t,i){var n=i(280),o=i(279),r=o;r.v1=n,r.v4=o,e.exports=r},239:function(e,t){var i=Object.prototype.toString;e.exports=function(e){return i.call(e)}},240:function(e,t,i){var n=i(82),o=Object.prototype,r=o.hasOwnProperty,s=o.toString,a=n?n.toStringTag:void 0;e.exports=function(e){var t=r.call(e,a),i=e[a];try{e[a]=void 0;var n=!0}catch(e){}var o=s.call(e);return n&&(t?e[a]=i:delete e[a]),o}},279:function(e,t,i){var n=i(128),o=i(127);e.exports=function(e,t,i){var r=t&&i||0;"string"==typeof e&&(t="binary"==e?new Array(16):null,e=null);var s=(e=e||{}).random||(e.rng||n)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,t)for(var a=0;a<16;++a)t[r+a]=s[a];return t||o(s)}},280:function(e,t,i){var n=i(128),o=i(127),r=n(),s=[1|r[0],r[1],r[2],r[3],r[4],r[5]],a=16383&(r[6]<<8|r[7]),l=0,d=0;e.exports=function(e,t,i){var n=t&&i||0,r=t||[],c=void 0!==(e=e||{}).clockseq?e.clockseq:a,u=void 0!==e.msecs?e.msecs:(new Date).getTime(),h=void 0!==e.nsecs?e.nsecs:d+1,p=u-l+(h-d)/1e4;if(p<0&&void 0===e.clockseq&&(c=c+1&16383),(p<0||u>l)&&void 0===e.nsecs&&(h=0),h>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");l=u,d=h,a=c;var y=(1e4*(268435455&(u+=122192928e5))+h)%4294967296;r[n++]=y>>>24&255,r[n++]=y>>>16&255,r[n++]=y>>>8&255,r[n++]=255&y;var f=u/4294967296*1e4&268435455;r[n++]=f>>>8&255,r[n++]=255&f,r[n++]=f>>>24&15|16,r[n++]=f>>>16&255,r[n++]=c>>>8|128,r[n++]=255&c;for(var v=e.node||s,g=0;g<6;++g)r[n+g]=v[g];return t||o(r)}},43:function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},45:function(e,t,i){var n=i(116),o="object"==typeof self&&self&&self.Object===Object&&self,r=n||o||Function("return this")();e.exports=r},46:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},47:function(e,t,i){var n=i(82),o=i(240),r=i(239),s="[object Null]",a="[object Undefined]",l=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?a:s:l&&l in Object(e)?o(e):r(e)}},595:function(e,t,i){var n=i(47),o=i(46),r="[object Symbol]";e.exports=function(e){return"symbol"==typeof e||o(e)&&n(e)==r}},665:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MsgToCS=function(e){return new CustomEvent("GG_YT_MSG_FROM_PAGE",{detail:{action:e}})}},82:function(e,t,i){var n=i(45).Symbol;e.exports=n},871:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={holder:"position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  z-index: 4;",titleDiv:"font-size: 15px;\n  overflow: hidden;\n  white-space: nowrap;\n  width: 100%;\n  position:absolute;\n  color:white;\n  top: 0px;\n  left: 0px;\n  background: -webkit-gradient(linear, left top, right top,\n  color-stop(2%,rgba(0,0,0,1)),\n  color-stop(50%,rgba(0,0,0,1)),\n  color-stop(98%,rgba(0, 0, 0, 0.25)),\n  color-stop(100%,rgba(0, 0, 0, 0)));\n  padding: 5px 0px;",titleSpan:"margin-left: 10px; margin-right: 10px;",lockDiv:"text-align: center;\n  position: absolute;\n  right: 0px;\n  bottom: 0px;\n  padding: 4px;\n  color: #4098D7;\n  width: 100px",lockImage:"width: 100%;\n  -webkit-border-image: none;\n  border: none;\n  background: none;",blockedDiv:"font-size: 16px;\n  background: -webkit-gradient(linear, left top, right top,\n  color-stop(0%,rgba(0, 0, 0, 0)),\n  color-stop(2%,rgba(0, 0, 0, 0.25)),\n  color-stop(50%,rgba(0,0,0,1)),\n  color-stop(98%,rgba(0, 0, 0, 0.25)),\n  color-stop(100%,rgba(0, 0, 0, 0)));\n  overflow:hidden;\n  line-height: 1.3;\n  width:100%;\n  position: absolute;\n  color:white;\n  top: 45%;\n  left: 0px;\n  text-align: center;\n  padding: 5px 0px;",backgroundImage:"top: 0px;\n  left: 0px;\n  background-size: cover;\n  margin: 0px;\n  border: 0px;\n  width: 100%;\n  height: 100%;\n  -webkit-filter: blur(15px);"},e.exports=t.default},872:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=i(871),r=(n=o)&&n.__esModule?n:{default:n};t.default=class{constructor(e,t="",i){this.videoId=e,this.videoTitle=t,this.reason=i,this.createOverlay()}createOverlay(){this.overlay=document.createElement("div"),this.overlay.id="goguardian-youtube-filter",this.overlay.style.cssText=r.default.holder;const e=document.createElement("div");e.style.cssText=`background: url(https://i.ytimg.com/vi/${this.videoId}/hqdefault.jpg) no-repeat; ${r.default.backgroundImage}`,this.overlay.appendChild(e);const t=document.createElement("div");t.className="gg-player-title",t.style.cssText=r.default.titleDiv,t.title=this.videoTitle;const i=document.createElement("span");i.style.cssText=r.default.titleSpan,i.textContent=this.videoTitle,t.appendChild(i),this.overlay.appendChild(t);const n=document.createElement("div");n.style.cssText=r.default.lockDiv;const o=document.createElement("img");o.style.cssText=r.default.lockImage,o.src="https://static.goguardian.com/images/logos/shared/gg-dark-shield-notification.png",n.appendChild(o),this.overlay.appendChild(n);const s=document.createElement("div");s.className="gg-player-blocked",s.style.cssText=r.default.blockedDiv;const a=document.createElement("span");a.textContent=`This video is blocked because ${this.reason}`,s.appendChild(a),this.overlay.appendChild(s)}html(){return this.overlay}remove(){this.overlay.parentElement&&this.overlay.parentElement.removeChild(this.overlay)}},e.exports=t.default},873:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GoGuardianPlayer=void 0;var n,o=i(872),r=(n=o)&&n.__esModule?n:{default:n},s=i(665);const a={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,VIDEO_CUED:5},l=["getVideoData","getPlayerResponse","getDebugText","getPlayerState","getVideoUrl","getVideoStats","playVideo","pauseVideo","mute","unMute","addEventListener","removeEventListener"];t.GoGuardianPlayer=class{constructor(e,t){this.checkVideo=(()=>{const e=this.getVideoId();e&&(e!==this.currentVideo.id?(this.currentVideo.id&&this.currentVideo.blocked&&this.restoreVideo(),this.currentVideo.id=e,this.currentVideo.metadata={},this.currentVideo.blocked=!1,this.currentVideo.reason="",window.dispatchEvent((0,s.MsgToCS)({type:"VIDEO_CHECK",payload:e,meta:this.id}))):this.currentVideo.id&&this.currentVideo.blocked&&this.blockVideo())}),this.id=e,this.player=t,this.currentVideo={id:"",metadata:{},blocked:!1,reason:""},this.verifyPlayerMethods(),this.player.addEventListener("onStateChange",this.checkVideo),this.checkVideo()}verifyPlayerMethods(){const e=l.filter(e=>!this.player[e]);e.length>0&&window.dispatchEvent((0,s.MsgToCS)({type:"COLLECT_METRIC",payload:{metric:"player_api.missing_methods",tags:e}}))}cleanup(){this.player.removeEventListener("onStateChange",this.checkVideo),this.player.style.display="",this.overlay&&(this.overlay.remove(),delete this.overlay),this.currentVideo.id="",this.currentVideo.metadata={},this.currentVideo.blocked=!1,this.currentVideo.reason=""}getVideoId(){if(this.player.getVideoData){const e=this.player.getVideoData();if(e)return e.video_id}if(this.player.getPlayerResponse){const e=this.player.getPlayerResponse();if(e&&e.videoDetails)return e.videoDetails.videoId}if(this.player.getDebugText){const e=this.player.getDebugText();if(e)try{const t=JSON.parse(e);if(t)return t.debug_videoId}catch(e){}}if(this.player.getVideoUrl){const e=this.player.getVideoUrl();if(e)try{const t=new URL(e),i=new URLSearchParams(t.searchParams);if(i.get("v"))return i.get("v")}catch(e){}}if(this.player.getVideoStats){const e=this.player.getVideoStats();if(e)return e.debug_videoId}return""}constructOverlay(){const{id:e,metadata:t,reason:i}=this.currentVideo;this.overlay=new r.default(e,t.title,i)}blockVideo(){this.player.pauseVideo(),this.player.mute(),"none"!==this.player.style.display&&(this.player.style.display="none");const e=this.overlay.html(),t=this.player.parentElement;t&&!t.contains(e)&&t.appendChild(e),setTimeout(()=>{this.player.getAdState&&this.player.cancelPlayback&&1===this.player.getAdState()&&this.player.cancelPlayback()},1e3)}restoreVideo(){this.overlay&&this.overlay.remove(),this.player.style.display="",this.player.playVideo(),this.player.unMute()}trackVideo(){this.player.getPlayerState()===a.PLAYING?this.messageVideoPlayed():this.listenForVideoPlay(this.currentVideo.id)}listenForVideoPlay(e){const t=i=>{i===a.PLAYING&&(this.player.removeEventListener("onStateChange",t),e===this.currentVideo.id&&this.messageVideoPlayed())};this.player.addEventListener("onStateChange",t)}messageVideoPlayed(){window.dispatchEvent((0,s.MsgToCS)({type:"VIDEO_PLAYED",payload:this.currentVideo.metadata}))}}},874:function(e,t,i){var n=i(43),o=i(595),r=NaN,s=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,d=/^0o[0-7]+$/i,c=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return r;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(s,"");var i=l.test(e);return i||d.test(e)?c(e.slice(2),i?2:8):a.test(e)?r:+e}},875:function(e,t,i){var n=i(45);e.exports=function(){return n.Date.now()}},876:function(e,t,i){var n=i(43),o=i(875),r=i(874),s="Expected a function",a=Math.max,l=Math.min;e.exports=function(e,t,i){var d,c,u,h,p,y,f=0,v=!1,g=!1,b=!0;if("function"!=typeof e)throw new TypeError(s);function m(t){var i=d,n=c;return d=c=void 0,f=t,h=e.apply(n,i)}function x(e){var i=e-y;return void 0===y||i>=t||i<0||g&&e-f>=u}function E(){var e=o();if(x(e))return V(e);p=setTimeout(E,function(e){var i=t-(e-y);return g?l(i,u-(e-f)):i}(e))}function V(e){return p=void 0,b&&d?m(e):(d=c=void 0,h)}function w(){var e=o(),i=x(e);if(d=arguments,c=this,y=e,i){if(void 0===p)return function(e){return f=e,p=setTimeout(E,t),v?m(e):h}(y);if(g)return p=setTimeout(E,t),m(y)}return void 0===p&&(p=setTimeout(E,t)),h}return t=r(t)||0,n(i)&&(v=!!i.leading,u=(g="maxWait"in i)?a(r(i.maxWait)||0,t):u,b="trailing"in i?!!i.trailing:b),w.cancel=function(){void 0!==p&&clearTimeout(p),f=0,d=y=c=p=void 0},w.flush=function(){return void 0===p?h:V(o())},w}},877:function(e,t,i){var n=i(876),o=i(43),r="Expected a function";e.exports=function(e,t,i){var s=!0,a=!0;if("function"!=typeof e)throw new TypeError(r);return o(i)&&(s="leading"in i?!!i.leading:s,a="trailing"in i?!!i.trailing:a),n(e,t,{leading:s,maxWait:t,trailing:a})}},878:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.YouTubeInjection=void 0;var n=a(i(877)),o=a(i(132)),r=i(873),s=i(665);function a(e){return e&&e.__esModule?e:{default:e}}t.YouTubeInjection=class{constructor(){this.handleCSMessage=(e=>{const{action:t}=e.detail;switch(t.type){case"SETTINGS_RECEIVED":this.configure(t.payload);break;case"VIDEO_CHECK_RESULT":this.enforce(t);break;case"DESTROY":this.destroy()}}),this.onMutation=(()=>{const{filterEnabled:e,blockComments:t,blockSidebar:i,blockLiveChat:n,selectors:s}=this.settings;s.player.forEach(e=>{document.querySelectorAll(e).forEach(e=>{let t=!1;if(this.ggPlayers.forEach(({player:i})=>{e===i&&(t=!0)}),!t){const t=o.default.v4();this.ggPlayers.set(t,new r.GoGuardianPlayer(t,e))}})}),this.ggPlayers.forEach(({player:e},t)=>{document.body&&!document.body.contains(e)&&this.ggPlayers.delete(t)}),e&&this.topLevel&&(t&&this.queryAndHide(s.comments),i&&this.queryAndHide(s.sidebar),n&&this.queryAndHide(s.liveChat))}),this.enforce=(e=>{const{videoId:t,metadata:i,blocked:n,reason:o}=e.payload,{filterEnabled:r,monitorEnabled:s}=this.settings,a=e.meta,l=this.ggPlayers.get(a);l&&(!document.body||document.body.contains(l.player)?(l.currentVideo.id=t,l.currentVideo.metadata=i,l.currentVideo.blocked=n,l.currentVideo.reason=o,r&&n?(l.constructOverlay(),l.blockVideo(),l.messageVideoPlayed()):s&&l.trackVideo()):this.ggPlayers.delete(a))}),this.enabled=!1,this.topLevel=window.top===window.self,this.ggPlayers=new Map,this.throttledOnMutation=(0,n.default)(this.onMutation,1e3,{trailing:!0,leading:!0}),this.observer=new MutationObserver(this.throttledOnMutation),window.addEventListener("GG_YT_MSG_FROM_CS",this.handleCSMessage),window.dispatchEvent((0,s.MsgToCS)({type:"SETTINGS_REQUEST"})),window.dispatchEvent((0,s.MsgToCS)({type:"INJECTION_HEALTHY"}))}configure(e){this.settings=e;const{filterEnabled:t,monitorEnabled:i,blockComments:n,blockSidebar:o,blockLiveChat:r,selectors:s}=this.settings;t||i?(this.enable(),this.topLevel&&(t&&n||this.queryAndRestore(s.comments),t&&o||this.queryAndRestore(s.sidebar),t&&r||this.queryAndRestore(s.liveChat)),this.throttledOnMutation()):this.disable()}enable(){this.enabled||(this.observer||(this.observer=new MutationObserver(this.throttledOnMutation)),document.body&&this.observer.observe(document.body,{childList:!0,characterData:!1,characterDataOldValue:!1,attributes:!1,attributeOldValue:!1,subtree:!0}),this.enabled=!0)}disable(){if(this.enabled){if(this.observer&&(this.observer.takeRecords(),this.observer.disconnect(),this.throttledOnMutation.cancel()),this.ggPlayers.forEach(e=>{e.cleanup()}),this.ggPlayers.clear(),this.topLevel){const{selectors:e}=this.settings;this.queryAndRestore(e.comments),this.queryAndRestore(e.sidebar),this.queryAndRestore(e.liveChat)}this.enabled=!1}}destroy(){this.disable(),window.removeEventListener("GG_YT_MSG_FROM_CS",this.handleCSMessage)}queryAndHide(e){e.some(e=>{const t=document.querySelector(e);if(t&&"none"!==t.style.display)return t.style.display="none",!0})}queryAndRestore(e){e.some(e=>{const t=document.querySelector(e);if(t&&"none"===t.style.display)return t.style.display="",!0})}}},879:function(e,t,i){"use strict";new(i(878).YouTubeInjection)}});