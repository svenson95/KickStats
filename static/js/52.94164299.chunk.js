(this.webpackJsonpkickstats=this.webpackJsonpkickstats||[]).push([[52],{121:function(t,r,i){"use strict";i.r(r),i.d(r,"ion_card",(function(){return e})),i.d(r,"ion_card_content",(function(){return a})),i.d(r,"ion_card_header",(function(){return c})),i.d(r,"ion_card_subtitle",(function(){return s})),i.d(r,"ion_card_title",(function(){return l}));var n=i(26),o=(i(7),i(193)),e=function(){function t(t){Object(n.l)(this,t),this.button=!1,this.type="button",this.disabled=!1,this.routerDirection="forward"}return t.prototype.isClickable=function(){return void 0!==this.href||this.button},t.prototype.renderCard=function(t){var r=this.isClickable();if(!r)return[Object(n.i)("slot",null)];var i=this.href,e=this.routerDirection,a=r?void 0===i?"button":"a":"div",c="button"===a?{type:this.type}:{download:this.download,href:this.href,rel:this.rel,target:this.target};return Object(n.i)(a,Object.assign({},c,{class:"card-native",disabled:this.disabled,onClick:function(t){return Object(o.d)(i,t,e)}}),Object(n.i)("slot",null),r&&"md"===t&&Object(n.i)("ion-ripple-effect",null))},t.prototype.render=function(){var t,r=Object(n.e)(this);return Object(n.i)(n.a,{class:Object.assign(Object.assign((t={},t[r]=!0,t),Object(o.a)(this.color)),{"card-disabled":this.disabled,"ion-activatable":this.isClickable()})},this.renderCard(r))},Object.defineProperty(t,"style",{get:function(){return".sc-ion-card-ios-h{--ion-safe-area-left:0px;--ion-safe-area-right:0px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);overflow:hidden}.ion-color.sc-ion-card-ios-h{background:var(--ion-color-base)}.ion-color.sc-ion-card-ios-h, .sc-ion-card-ios-h.ion-color.sc-ion-card-ios-s  ion-card-header , .sc-ion-card-ios-h.ion-color.sc-ion-card-ios-s  ion-card-subtitle , .sc-ion-card-ios-h.ion-color.sc-ion-card-ios-s  ion-card-title {color:var(--ion-color-contrast)}.sc-ion-card-ios-s  img {display:block;width:100%}.sc-ion-card-ios-s  ion-list {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.card-disabled.sc-ion-card-ios-h{cursor:default;opacity:.3;pointer-events:none}.card-native.sc-ion-card-ios{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background)}.card-native.sc-ion-card-ios::-moz-focus-inner{border:0}a.sc-ion-card-ios, button.sc-ion-card-ios{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}ion-ripple-effect.sc-ion-card-ios{color:var(--ripple-color)}.sc-ion-card-ios-h{--background:var(--ion-item-background,transparent);--color:var(--ion-color-step-600,#666);margin-left:16px;margin-right:16px;margin-top:24px;margin-bottom:24px;border-radius:8px;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition:-webkit-transform .5s cubic-bezier(.12,.72,.29,1);transition:-webkit-transform .5s cubic-bezier(.12,.72,.29,1);transition:transform .5s cubic-bezier(.12,.72,.29,1);transition:transform .5s cubic-bezier(.12,.72,.29,1),-webkit-transform .5s cubic-bezier(.12,.72,.29,1);font-size:14px;-webkit-box-shadow:0 4px 16px rgba(0,0,0,.12);box-shadow:0 4px 16px rgba(0,0,0,.12)}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-card-ios-h{margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px}}.activated.sc-ion-card-ios-h{-webkit-transform:scale3d(.97,.97,1);transform:scale3d(.97,.97,1)}"},enumerable:!0,configurable:!0}),t}(),a=function(){function t(t){Object(n.l)(this,t)}return t.prototype.render=function(){var t,r=Object(n.e)(this);return Object(n.i)(n.a,{class:(t={},t[r]=!0,t["card-content-"+r]=!0,t)})},Object.defineProperty(t,"style",{get:function(){return"ion-card-content{display:block;position:relative}.card-content-ios{padding-left:20px;padding-right:20px;padding-top:20px;padding-bottom:20px;font-size:16px;line-height:1.4}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.card-content-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}.card-content-ios h1{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:24px;font-weight:400}.card-content-ios h2{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:16px;font-weight:400}.card-content-ios h3,.card-content-ios h4,.card-content-ios h5,.card-content-ios h6{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:14px;font-weight:400}.card-content-ios p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:14px}"},enumerable:!0,configurable:!0}),t}(),c=function(){function t(t){Object(n.l)(this,t),this.translucent=!1}return t.prototype.render=function(){var t,r=Object(n.e)(this);return Object(n.i)(n.a,{class:Object.assign(Object.assign({},Object(o.a)(this.color)),(t={"card-header-translucent":this.translucent},t[r]=!0,t))},Object(n.i)("slot",null))},Object.defineProperty(t,"style",{get:function(){return":host{display:block;position:relative;background:var(--background);color:var(--color)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.ion-color) ::slotted(ion-card-subtitle),:host(.ion-color) ::slotted(ion-card-title){color:currentColor}:host{padding-left:20px;padding-right:20px;padding-top:20px;padding-bottom:16px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){:host(.card-header-translucent){background-color:rgba(var(--ion-background-color-rgb,255,255,255),.9);-webkit-backdrop-filter:saturate(180%) blur(30px);backdrop-filter:saturate(180%) blur(30px)}}"},enumerable:!0,configurable:!0}),t}(),s=function(){function t(t){Object(n.l)(this,t)}return t.prototype.render=function(){var t,r=Object(n.e)(this);return Object(n.i)(n.a,{role:"heading","aria-level":"3",class:Object.assign(Object.assign({},Object(o.a)(this.color)),(t={},t[r]=!0,t))},Object(n.i)("slot",null))},Object.defineProperty(t,"style",{get:function(){return":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-600,#666);margin-left:0;margin-right:0;margin-top:0;margin-bottom:4px;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:12px;font-weight:700;letter-spacing:.4px;text-transform:uppercase}"},enumerable:!0,configurable:!0}),t}(),l=function(){function t(t){Object(n.l)(this,t)}return t.prototype.render=function(){var t,r=Object(n.e)(this);return Object(n.i)(n.a,{role:"heading","aria-level":"2",class:Object.assign(Object.assign({},Object(o.a)(this.color)),(t={},t[r]=!0,t))},Object(n.i)("slot",null))},Object.defineProperty(t,"style",{get:function(){return":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-text-color,#000);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:28px;font-weight:700;line-height:1.2}"},enumerable:!0,configurable:!0}),t}()},193:function(t,r,i){"use strict";i.d(r,"a",(function(){return e})),i.d(r,"b",(function(){return a})),i.d(r,"c",(function(){return o})),i.d(r,"d",(function(){return s}));var n=i(2),o=function(t,r){return null!==r.closest(t)},e=function(t){var r;return"string"===typeof t&&t.length>0?((r={"ion-color":!0})["ion-color-"+t]=!0,r):void 0},a=function(t){var r={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return r[t]=!0})),r},c=/^[a-z][a-z0-9+\-.]*:/,s=function(t,r,i){return Object(n.a)(void 0,void 0,void 0,(function(){var o;return Object(n.c)(this,(function(n){return null!=t&&"#"!==t[0]&&!c.test(t)&&(o=document.querySelector("ion-router"))?(null!=r&&r.preventDefault(),[2,o.push(t,i)]):[2,!1]}))}))}}}]);
//# sourceMappingURL=52.94164299.chunk.js.map