!function(e){var t={};function i(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=t,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(r,o,function(t){return e[t]}.bind(null,o));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p=".",i(i.s=0)}({"./src/backgroundVideoVimeo.css":function(e,t){},"./src/backgroundVideoVimeo.js":function(e,t,i){"use strict";i.r(t);i("./src/backgroundVideoVimeo.css");window.vcv.on("ready",(function(e,t){if("merge"!==e){var i="[data-vce-assets-video-vimeo]";i=t?'[data-vcv-element="'+t+'"] '+i:i,window.vceAssetsBackgroundVideoVimeo(i)}}))},"./src/plugin.js":function(e,t){!function(e,t){var i=function(i){var r=t.querySelectorAll(i);return(r=[].slice.call(r)).forEach((function(t){t.getVceVimeoVideo?t.getVceVimeoVideo.updatePlayer():function(t){({element:null,player:null,vimeoPlayer:null,videoId:null,resizer:null,ratio:null,iframe:null,timeoutId:null,setup:function(t){return t.getVceVimeoVideo?this.updatePlayer():(t.getVceVimeoVideo=this,this.element=t,this.resizer=t.querySelector(".vce-asset-video-vimeo-sizer"),this.checkVimeo(),this.checkOrientation=this.checkOrientation.bind(this),e.addEventListener("resize",this.checkOrientation)),t.getVceVimeoVideo},updatePlayerData:function(){this.player=t.querySelector(t.dataset.vceAssetsVideoReplacer),this.videoId=t.dataset.vceAssetsVideoVimeo||null},checkVimeo:function(){var e=arguments.length<=0||void 0===arguments[0]?0:arguments[0];if("undefined"!=typeof Vimeo&&"undefined"!==Vimeo.Player)this.createPlayer();else{if(e>100)return void console.warn("Too many attempts to load Vimeo Player API");var t=this;setTimeout((function(){e++,t.checkVimeo(e)}),100)}},createPlayer:function(){var e=this;this.updatePlayerData(),this.vimeoPlayer=new Vimeo.Player(this.player,{id:this.videoId,autopause:!1,byline:!1,portrait:!1,title:!1,autoplay:!0,loop:!0,muted:!0}),this.vimeoPlayer.setVolume(0),this.vimeoPlayer.on("loaded",(function(){var t=[e.vimeoPlayer.getVideoWidth(),e.vimeoPlayer.getVideoHeight()];Promise.all(t).then((function(t){e.resizer.setAttribute("width",t[0]),e.resizer.setAttribute("height",t[1]),e.resizer.setAttribute("data-vce-assets-video-state","visible"),e.ratio=parseInt(t[0])/parseInt(t[1]),e.checkOrientation()}))}))},updatePlayer:function(){this.vimeoPlayer&&(this.updatePlayerData(),this.vimeoPlayer.loadVideo(this.videoId))},checkOrientation:function(){var t=this.element.dataset.vceAssetsVideoOrientationClass||null,i=e.getComputedStyle(this.element.parentNode);t&&(parseInt(i.width)/parseInt(i.height)>this.ratio?this.element.classList.add(t):this.element.classList.remove(t)),void 0!==e.InstallTrigger&&(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(this.videoBackgroundEnlarge.bind(this),50))},videoBackgroundEnlarge:function(){this.iframe||(this.iframe=this.element.querySelector("iframe"),this.iframeAspect=parseInt(this.iframe.getAttribute("height"))/parseInt(this.iframe.getAttribute("width")));var t=e.innerHeight/e.innerWidth;t>this.iframeAspect?this.element.style.width=t/this.iframeAspect*110+"%":this.element.style.width="100%"}}).setup(t)}(t)})),1===r.length?r.pop():r};e.vceAssetsBackgroundVideoVimeo=i}(window,document)},"./src/vimeoPlayerApi.js":function(e,t){!function(e,t){if(!t.getElementById("vcv-asset-vimeo-player-api")){var i=t.createElement("script");i.id="vcv-asset-vimeo-player-api",i.src="https://player.vimeo.com/api/player.js",t.head.appendChild(i)}}(window,document)},0:function(e,t,i){i("./src/vimeoPlayerApi.js"),i("./src/plugin.js"),e.exports=i("./src/backgroundVideoVimeo.js")}});