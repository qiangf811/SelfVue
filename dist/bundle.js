!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}([function(t,e){t.exports=class{constructor(){this.subs=[]}addSub(t){this.subs.push(t)}notify(){this.subs.forEach(t=>{t.update()})}}},function(t,e,n){const r=n(0);t.exports=function(t,e,n){return new class{constructor(t,e,n){this.cb=n,this.vm=t,this.exp=e,this.value=this.get()}update(){this.run()}run(){let t=this.vm.data[this.exp],e=this.value;t!==e&&(this.value=t,this.cb.call(this.vm,t,e))}get(){r.target=this;var t=this.vm.data[this.exp];return r.target=null,t}}(t,e,n)}},function(t,e,n){const r=n(0);t.exports=function(t){return new class{constructor(t){this.defineData(t)}defineData(t){t&&"object"==typeof t&&Object.keys(t).forEach(e=>{this.defineReactive(t,e,t[e])})}defineReactive(t,e,n){this.defineData(n);let o=new r;Object.defineProperty(t,e,{configurable:!0,enumerable:!0,set:t=>{n!==t&&(console.log(e+"改变了",n+"变成了"+t),n=t,o.notify())},get:()=>(r.target&&o.addSub(r.target),n)})}}(t)}},function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function c(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(t){r=u}}();var s,a=[],l=!1,f=-1;function h(){l&&s&&(l=!1,s.length?a=s.concat(a):f=-1,a.length&&d())}function d(){if(!l){var t=c(h);l=!0;for(var e=a.length;e;){for(s=a,a=[];++f<e;)s&&s[f].run();f=-1,e=a.length}s=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function m(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];a.push(new p(t,e)),1!==a.length||l||c(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e,n){(function(e){const r=n(2),o=n(1);e.evn&&console.log(e.evn),t.exports=class{constructor(t,e,n){let i=this;return i.data=t,Object.keys(t).forEach(t=>{i.proxyKeys(t)}),r(t),e.innerHTML=i.data[n],o(i,n,t=>{e.innerHTML=t}),i}proxyKeys(t){let e=this;Object.defineProperty(this,t,{configurable:!0,enumerable:!0,get:()=>e.data[t],set:n=>{e.data[t]=n}})}}}).call(this,n(3))},function(t,e,n){var r=new(n(4))({name:"hello-world "},document.querySelector("#name"),"name");window.setTimeout(function(){r.name="change"},2e3)},function(t,e,n){t.exports=n(5)}]);