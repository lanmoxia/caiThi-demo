parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"epB2":[function(require,module,exports) {
var n=document.querySelector("#html"),r=document.querySelector("#style"),a="/*你好，我是一名前端新人\n* 准备尝试做一个太极八卦图\n* 我要开始操作div了\n* 先给它添加css样式**/\nbody{\n  font-family: PingFangSC-Light, sans-serif;\n}\n#div1{\n  border: 1px solid rgba(0,0,0,0.3);\n  width: 200px;\n  height: 200px;\n  box-shadow: 0 0 0 1px rgba(0,0,0,0.3);\n}\n/*接下来我会把div变成一个圆\n* */\n#div1{\n  border: none;\n  border-radius: 50%;\n}\n/*天地有混沌 八卦分阴阳\n* 一黑一白\n**/\n#div1{\n  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);\n}\n#div1::before{\n  width: 100px;\n  height: 100px;\n  border: 1px solid white;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  border-radius: 50%;\n  background: #fff;\n  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(252,252,252,1) 100%);\n}\n#div1::after{\n  width: 100px;\n  height: 100px;\n  border: 1px solid black;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  border-radius: 50%;\n  background: #000;\n  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,249,249,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);\n}\n",e="",d=0,i=function i(){setTimeout(function(){"\n"===a[d]?e+="</br>":" "===a[d]?e+="&nbsp;":e+=a[d],n.innerHTML=e,r.innerHTML=a.substring(0,d),window.scrollTo(0,99999),n.scrollTo(0,99999),d+1<a.length&&(d+=1,i())},20)};i();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.24d71513.map