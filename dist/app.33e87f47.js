parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"EoVk":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function(){return'\n        <header>\n            <input class="search-bar" type"text" placeholder="Find insurance plan that suit you"/>\n        </header>\n    '},t=e;exports.default=t;
},{}],"DXUH":[function(require,module,exports) {

},{"./..\\asset\\background-image.png":[["background-image.4f5d6266.png","OsjH"],"OsjH"],"./..\\asset\\box1.svg":[["box1.27f5a3aa.svg","Kj6s"],"Kj6s"]}],"PpFb":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=function(){return'\n        <how-it-works>\n            <h4>how it works?</h4>\n            <div class="how-it-works-box">\n                <div class="box1">\n                    <img src="../asset/box1.svg" alt="box1"/>\n                    <h2>step #1</h2>\n                    <p>Create an account with leadway <br/>\n                    assurance if you don\'t already have one.</p>  \n                </div>\n                <div class="box2">\n                    <div class="image-box2"></div>\n                    <h2>step #2</h2>\n                    <p>Choose your Insurance plan or any of<br/>\n                    our offered services</p>\n                </div>\n                <div class="box3">\n                    <div class="image-box1"></div>\n                    <h2>step #3</h2>\n                    <p>Get a quote by clicking on the get a<br/>\n                     quote button or you can give us a call if you aren\'t clear enough.</p>\n                </div>\n            </div>\n        </how-it-works>\n\n    '},e=n;exports.default=e;
},{}],"ffN9":[function(require,module,exports) {
"use strict";var e=t(require("./components/header"));require("./styles/main.scss");var r=t(require("./components/howItWorks"));function t(e){return e&&e.__esModule?e:{default:e}}var n=function(){document.querySelector(".header").innerHTML=(0,e.default)(),document.querySelector(".how-it-works").innerHTML=(0,r.default)()},o=document.querySelector(".hamburger"),u=document.querySelector(".nav-links");o.addEventListener("click",function(){u.classList.toggle("open")}),n();
},{"./components/header":"EoVk","./styles/main.scss":"DXUH","./components/howItWorks":"PpFb"}]},{},["ffN9"], null)
//# sourceMappingURL=app.33e87f47.js.map