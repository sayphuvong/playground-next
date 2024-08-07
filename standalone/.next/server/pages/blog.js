(() => {
var exports = {};
exports.id = 195;
exports.ids = [195];
exports.modules = {

/***/ 9007:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "ArticleCard_card___9Tln",
	"rating": "ArticleCard_rating__F1cAP",
	"title": "ArticleCard_title__D443C",
	"footer": "ArticleCard_footer__1r0_Y"
};


/***/ }),

/***/ 8038:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "root_main__Qlv1F"
};


/***/ }),

/***/ 6844:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ ArticleCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2236);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8613);
/* harmony import */ var _ArticleCard_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9007);
/* harmony import */ var _ArticleCard_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ArticleCard_module_css__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mantine_core__WEBPACK_IMPORTED_MODULE_2__]);
_mantine_core__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function ArticleCard(props) {
    const { description , link , tag , thumbnail , title , user  } = props;
    const linkProps = {
        href: "/blog",
        target: "_blank",
        rel: "noopener noreferrer"
    };
    const theme = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.useMantineTheme)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Card, {
        withBorder: true,
        radius: "md",
        className: (_ArticleCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Card.Section, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    ...linkProps,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Image, {
                        src: thumbnail || "https://i.imgur.com/Cij5vdL.png",
                        height: 180,
                        className: "aspect-[3/2]",
                        alt: ""
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Badge, {
                className: (_ArticleCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().rating),
                variant: "gradient",
                gradient: {
                    from: "yellow",
                    to: "red"
                },
                children: tag || "outstanding"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Text, {
                className: (_ArticleCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),
                fw: 500,
                component: "a",
                ...linkProps,
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Text, {
                fz: "sm",
                c: "dimmed",
                lineClamp: 4,
                children: description
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Group, {
                justify: "space-between",
                className: (_ArticleCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().footer),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Center, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Avatar, {
                                src: user.avatar || "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",
                                size: 24,
                                radius: "xl",
                                mr: "xs"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                fz: "sm",
                                inline: true,
                                children: user.name
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Group, {
                        gap: 8,
                        mr: 0,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.ActionIcon, {
                                className: (_ArticleCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().action),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconHeart, {
                                    style: {
                                        width: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.rem)(16),
                                        height: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.rem)(16)
                                    },
                                    color: theme.colors.red[2]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.ActionIcon, {
                                className: (_ArticleCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().action),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconBookmark, {
                                    style: {
                                        width: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.rem)(16),
                                        height: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.rem)(16)
                                    },
                                    color: theme.colors.yellow[2]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.ActionIcon, {
                                className: (_ArticleCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().action),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconShare, {
                                    style: {
                                        width: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.rem)(16),
                                        height: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.rem)(16)
                                    },
                                    color: theme.colors.blue[2]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7115:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Blog),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ArticleCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6844);
/* harmony import */ var _styles_root_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8038);
/* harmony import */ var _styles_root_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_root_module_css__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ArticleCard__WEBPACK_IMPORTED_MODULE_1__]);
_components_ArticleCard__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// posts will be populated at build time by getStaticProps()
function Blog({ posts  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
            className: (_styles_root_module_css__WEBPACK_IMPORTED_MODULE_2___default().main),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "mb-[60px] text-5xl font-medium",
                    children: "Blog"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    className: "grid grid-cols-3 gap-6",
                    children: posts.slice(0, 9).map((post)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: "h-full",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ArticleCard__WEBPACK_IMPORTED_MODULE_1__/* .ArticleCard */ .T, {
                                thumbnail: "",
                                title: post.title,
                                description: post.body,
                                link: "",
                                tag: "",
                                user: {
                                    avatar: "",
                                    name: ""
                                }
                            })
                        }, post.id))
                })
            ]
        })
    });
}
// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            posts
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2236:
/***/ ((module) => {

"use strict";
module.exports = require("@tabler/icons-react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 8613:
/***/ ((module) => {

"use strict";
module.exports = import("@mantine/core");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7115));
module.exports = __webpack_exports__;

})();