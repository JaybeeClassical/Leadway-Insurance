parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"EoVk":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function(){return'\n        <header>\n            <input class="search-bar" type"text" placeholder="Find insurance plan that suit you"/>\n        </header>\n    '},t=e;exports.default=t;
},{}],"DXUH":[function(require,module,exports) {

},{"./..\\asset\\background-image.png":[["background-image.4f5d6266.png","OsjH"],"OsjH"],"./..\\asset\\previous.svg":[["previous.c42197ae.svg","DWBi"],"DWBi"],"./..\\asset\\next.svg":[["next.2f189218.svg","y0iL"],"y0iL"]}],"PpFb":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function(){return'\n        <how-it-works>\n            <h4>how it works?</h4>\n            <div class="how-it-works-box">\n                <div class="box1">\n                    <img src="https://res.cloudinary.com/techibytes/image/upload/v1587949807/box1_ojnc2w.svg" class="step1-image" />\n                    <h2>Step #1</h2>\n                    <p>Create an account with leadway <br/>\n                    assurance if you don\'t already have one.</p>  \n                </div>\n                <div class="box2">\n                    <img src="https://res.cloudinary.com/techibytes/image/upload/v1587949807/box1_ojnc2w.svg" class="step2-image" />\n                    <h2>Step #2</h2>\n                    <p>Choose your Insurance plan or any of<br/>\n                    our offered services</p>\n                </div>\n                <div class="box3">\n                    <img src="https://res.cloudinary.com/techibytes/image/upload/v1587949807/box2_akbznq.svg" class="step3-image" />\n                    <h2>Step #3</h2>\n                    <p>Get a quote by clicking on the get a<br/>\n                     quote button or you can give us a call if you aren\'t clear enough.</p>\n                </div>\n            </div>\n        </how-it-works>\n    '},o=e;exports.default=o;
},{}],"e3ei":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=function(){return'\n        <plan>\n            <h4 class="plan-text">Choose your Plan</h4>\n            <div class="plan-card-wrapper">\n                <div class="previous-arrow"></div>\n                    <div class="plan-card">\n                        <div class="each-card">\n                            <h4 class="each-cardh4">SAVINGS</h4>\n                            <span class="amount">FLEXIBLE</span>\n                            <hr/>\n                            <ul>\n                                <li>Personalised plans</li>\n                                <li>Flexible payments</li>\n                                <li>cancel at anytime</li>\n                                <li>10% additional payment</li>\n                            </ul>\n                            <hr/>\n                            <button>GET A QUOTE</button>\n                        </div>\n\n                        <div class="each-card">\n                            <h4 class="each-cardh4">ANNUITY</h4>\n                            <span class="amount">$99.99</span>\n                            <hr/>\n                            <ul>\n                                <li>Personalised plans</li>\n                                <li>Cancel at anytime</li>\n                                <li>Receive payment anytime</li>\n                                <li>5% Extra payment</li>\n                            </ul>\n                            <hr/>\n                            <button>GET A QUOTE</button>\n                        </div>\n\n                        <div class="each-card">\n                            <h4 class="each-cardh4">FLEXA</h4>\n                            <span class="amount">$149.99</span>\n                            <hr/>\n                            <ul>\n                                <li>Flexible business insurance</li>\n                                <li>Tools and Machinery insured</li>\n                                <li>Staff welfare insurance</li>\n                                <li>Work accident\'s and harzards</li>\n                            </ul>\n                            <hr/>\n                            <button>GET A QUOTE</button>\n                        </div>\n                    </div>\n                <div class="next-arrow"></div>\n            </div>\n        </plan>\n    '},a=n;exports.default=a;
},{}],"ffN9":[function(require,module,exports) {
"use strict";var e=t(require("./components/header"));require("./styles/main.scss");var r=t(require("./components/howItWorks")),n=t(require("./components/plan"));function t(e){return e&&e.__esModule?e:{default:e}}var o=function(){document.querySelector(".header").innerHTML=(0,e.default)(),document.querySelector(".how-it-works").innerHTML=(0,r.default)(),document.querySelector(".plan").innerHTML=(0,n.default)()},u=document.querySelector(".hamburger"),c=document.querySelector(".nav-links");u.addEventListener("click",function(){c.classList.toggle("open")}),o();
},{"./components/header":"EoVk","./styles/main.scss":"DXUH","./components/howItWorks":"PpFb","./components/plan":"e3ei"}]},{},["ffN9"], null)
//# sourceMappingURL=app.fb9045b8.js.map