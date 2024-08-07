"use strict";
(() => {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 931:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Document)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/configs/appConfig.ts
const appConfig = {
    GTM_KEY: "GTM-5H65MS9V"
};

// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.2.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/document.js
var next_document = __webpack_require__(2017);
;// CONCATENATED MODULE: ./src/pages/_document.tsx
/* eslint-disable @next/next/next-script-for-ga */ 


function Document() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(next_document.Html, {
        lang: "en",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_document.Head, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "dns-prefetch",
                    crossOrigin: "anonymous",
                    href: "https://www.googletagmanager.com/"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_document.Main, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_document.NextScript, {}),
                    Boolean(appConfig.GTM_KEY) && /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        async: true,
                        src: `https://www.googletagmanager.com/gtag/js?id=${appConfig.GTM_KEY}`
                    }),
                    Boolean(appConfig.GTM_KEY) && /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        async: true,
                        dangerouslySetInnerHTML: {
                            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${appConfig.GTM_KEY}');
            `
                        }
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [17], () => (__webpack_exec__(931)));
module.exports = __webpack_exports__;

})();