(this.webpackJsonpkickstats=this.webpackJsonpkickstats||[]).push([[93],{156:function(o,t,e){"use strict";e.r(t),e.d(t,"ion_icon",(function(){return l}));var i=e(40),n=e(54),r=function o(t){if(1===t.nodeType){if("script"===t.nodeName.toLowerCase())return!1;for(var e=0;e<t.attributes.length;e++){var i=t.attributes[e].value;if(Object(n.d)(i)&&0===i.toLowerCase().indexOf("on"))return!1}for(e=0;e<t.childNodes.length;e++)if(!o(t.childNodes[e]))return!1}return!0},s=new Map,c=new Map,a=function(o){var t=c.get(o);if(!t){if("undefined"===typeof fetch)return s.set(o,""),Promise.resolve();t=fetch(o).then((function(t){if(t.ok)return t.text().then((function(t){s.set(o,function(o){if(o&&"undefined"!==typeof document){var t=document.createElement("div");t.innerHTML=o;for(var e=t.childNodes.length-1;e>=0;e--)"svg"!==t.childNodes[e].nodeName.toLowerCase()&&t.removeChild(t.childNodes[e]);var i=t.firstElementChild;if(i&&"svg"===i.nodeName.toLowerCase()){var n=i.getAttribute("class")||"";if(i.setAttribute("class",(n+" s-ion-icon").trim()),r(i))return t.innerHTML}}return""}(t))}));s.set(o,"")})),c.set(o,t)}return t},l=function(){function o(o){Object(i.e)(this,o),this.isVisible=!1,this.mode=d(),this.lazy=!1}return o.prototype.connectedCallback=function(){var o=this;this.waitUntilVisible(this.el,"50px",(function(){o.isVisible=!0,o.loadIcon()}))},o.prototype.disconnectedCallback=function(){this.io&&(this.io.disconnect(),this.io=void 0)},o.prototype.waitUntilVisible=function(o,t,e){var i=this;if(this.lazy&&"undefined"!==typeof window&&window.IntersectionObserver){var n=this.io=new window.IntersectionObserver((function(o){o[0].isIntersecting&&(n.disconnect(),i.io=void 0,e())}),{rootMargin:t});n.observe(o)}else e()},o.prototype.loadIcon=function(){var o=this;if(this.isVisible){var t=Object(n.c)(this);t&&(s.has(t)?this.svgContent=s.get(t):a(t).then((function(){return o.svgContent=s.get(t)})))}if(!this.ariaLabel){var e=Object(n.b)(this.name,this.icon,this.mode,this.ios,this.md);e&&(this.ariaLabel=e.replace(/\-/g," "))}},o.prototype.render=function(){var o,t,e=this.mode||"md",n=this.flipRtl||this.ariaLabel&&(this.ariaLabel.indexOf("arrow")>-1||this.ariaLabel.indexOf("chevron")>-1)&&!1!==this.flipRtl;return Object(i.d)(i.a,{role:"img",class:Object.assign(Object.assign((o={},o[e]=!0,o),h(this.color)),(t={},t["icon-"+this.size]=!!this.size,t["flip-rtl"]=!!n&&"rtl"===this.el.ownerDocument.dir,t))},this.svgContent?Object(i.d)("div",{class:"icon-inner",innerHTML:this.svgContent}):Object(i.d)("div",{class:"icon-inner"}))},Object.defineProperty(o,"assetsDirs",{get:function(){return["svg"]},enumerable:!0,configurable:!0}),Object.defineProperty(o.prototype,"el",{get:function(){return Object(i.b)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(o,"watchers",{get:function(){return{name:["loadIcon"],src:["loadIcon"],icon:["loadIcon"]}},enumerable:!0,configurable:!0}),Object.defineProperty(o,"style",{get:function(){return":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box!important;box-sizing:content-box!important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width,32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}:host(.flip-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.icon-small){font-size:18px!important}:host(.icon-large){font-size:32px!important}:host(.ion-color){color:var(--ion-color-base)!important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary,#3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary,#0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary,#f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success,#10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning,#ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger,#f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light,#f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium,#989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark,#222428)}"},enumerable:!0,configurable:!0}),o}(),d=function(){return"undefined"!==typeof document&&document.documentElement.getAttribute("mode")||"md"},h=function(o){var t;return o?((t={"ion-color":!0})["ion-color-"+o]=!0,t):null}}}]);
//# sourceMappingURL=93.299a43d7.chunk.js.map