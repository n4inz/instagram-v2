/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/auth/signin",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/var/www/html/Belajar/React/instagram-v2/components/Header.js\",\n    _s = $RefreshSig$();\n\n\n\n // import { useRouter } from \"next/dist/client/router\";\n\n\n\n\n\nfunction Header() {\n  _s();\n\n  var _session$user;\n\n  var _useSession = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)(),\n      session = _useSession.data;\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n    className: \"shadow-sm border-b bg-white sticky top-0 z-50\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: \"flex justify-between max-w-6xl mx-5 lg:mx-auto\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        onClick: function onClick() {\n          return router.push('/');\n        },\n        className: \"relative hidden lg:inline-grid w-24  cursor-pointer\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {\n          src: \"https://links.papareact.com/ocw\",\n          layout: \"fill\",\n          objectFit: \"contain\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 25\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 21\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: \"relative w-10  lg:hidden flex-shrink-0 cursor-pointer\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {\n          src: \"https://links.papareact.com/jjm\",\n          layout: \"fill\",\n          objectFit: \"contain\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 25\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 21\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: \"max-w-xs\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n          className: \"relative mt-1 p-3 rounded-md\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n            className: \"absolute inset-y-0 pl-3 flex items-center pointer-events-none\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__.SearchIcon, {\n              className: \"h-5 w-5 text-gray-500\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 42,\n              columnNumber: 29\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"input\", {\n            type: \"text\",\n            placeholder: \"Search\",\n            className: \"bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-end space-x-4\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__.HomeIcon, {\n          onClick: function onClick() {\n            return router.push('/');\n          },\n          className: \"navBtn\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__.MenuIcon, {\n          className: \"h-6 md:hidden cursor-pointer\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 21\n        }, this), session ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n            className: \"relative navBtn\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__.PaperAirplaneIcon, {\n              className: \"navBtn rotate-45\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 56,\n              columnNumber: 25\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n              className: \"absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse\",\n              children: \"3\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 57,\n              columnNumber: 25\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 21\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__.PlusCircleIcon, {\n            className: \"navBtn\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 21\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__.UserGroupIcon, {\n            className: \"navBtn\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 21\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__.HeartIcon, {\n            className: \"navBtn\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 21\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"img\", {\n            src: session === null || session === void 0 ? void 0 : (_session$user = session.user) === null || _session$user === void 0 ? void 0 : _session$user.image,\n            onClick: next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut,\n            alt: \"profile pic\",\n            className: \"h-10 w-10 rounded-full cursor-pointer\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 21\n          }, this)]\n        }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"button\", {\n          onClick: next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn,\n          children: \"Sign in\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Header, \"O9zqVcLpFUzXXven54LjLpBJzy0=\", false, function () {\n  return [next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession, next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];\n});\n\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBb0UscUJBQVMsRUFBQztBQUE5RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVJKO0FBQUEsd0JBRFEsZ0JBWUo7QUFBUSxpQkFBTyxFQUFFRCxtREFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBaEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTdCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUEyREg7O0dBOURRSTtVQUNvQkYseURBQ1ZDOzs7S0FGVkM7QUFnRVQsK0RBQWVBLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanM/NmY0YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7XG4gICAgU2VhcmNoSWNvbixcbiAgICBQbHVzQ2lyY2xlSWNvbixcbiAgICBVc2VyR3JvdXBJY29uLFxuICAgIEhlYXJ0SWNvbixcbiAgICBQYXBlckFpcnBsYW5lSWNvbixcbiAgICBNZW51SWNvbixcbiAgICBIb21lSWNvblxufSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9zb2xpZFwiO1xuaW1wb3J0IHsgc2lnbkluLCBzaWduT3V0LCB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuLy8gaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvcm91dGVyXCI7XG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCJcbmZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgICBjb25zdCB7ZGF0YSA6IHNlc3Npb259ID0gdXNlU2Vzc2lvbigpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3ctc20gYm9yZGVyLWIgYmctd2hpdGUgc3RpY2t5IHRvcC0wIHotNTBcIj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBtYXgtdy02eGwgbXgtNSBsZzpteC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgIHsvKiBMZWZ0ICovfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvJyl9IGNsYXNzTmFtZT1cInJlbGF0aXZlIGhpZGRlbiBsZzppbmxpbmUtZ3JpZCB3LTI0ICBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vbGlua3MucGFwYXJlYWN0LmNvbS9vY3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LTEwICBsZzpoaWRkZW4gZmxleC1zaHJpbmstMCBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vbGlua3MucGFwYXJlYWN0LmNvbS9qam1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7LyogTWlkbGUgU2VhcmNoIGlucHV0ICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXcteHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtdC0xIHAtMyByb3VuZGVkLW1kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LXktMCBwbC0zIGZsZXggaXRlbXMtY2VudGVyIHBvaW50ZXItZXZlbnRzLW5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VhcmNoSWNvbiBjbGFzc05hbWU9XCJoLTUgdy01IHRleHQtZ3JheS01MDBcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgY2xhc3NOYW1lPVwiYmctZ3JheS01MCBibG9jayB3LWZ1bGwgcGwtMTAgc206dGV4dC1zbSBib3JkZXItZ3JheS0zMDAgZm9jdXM6cmluZy1ibGFjayBmb2N1czpib3JkZXItYmxhY2sgcm91bmRlZC1tZFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7LyogUmlnaHQgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZCBzcGFjZS14LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPEhvbWVJY29uIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvJyl9IGNsYXNzTmFtZT1cIm5hdkJ0blwiLz5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJY29uIGNsYXNzTmFtZT1cImgtNiBtZDpoaWRkZW4gY3Vyc29yLXBvaW50ZXJcIi8+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAge3Nlc3Npb24gPyAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBuYXZCdG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYXBlckFpcnBsYW5lSWNvbiBjbGFzc05hbWU9XCJuYXZCdG4gcm90YXRlLTQ1XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtdG9wLTEgLXJpZ2h0LTIgdGV4dC14cyB3LTUgaC01IGJnLXJlZC01MDAgcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGFuaW1hdGUtcHVsc2VcIj4zPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8UGx1c0NpcmNsZUljb24gY2xhc3NOYW1lPVwibmF2QnRuXCIvPlxuICAgICAgICAgICAgICAgICAgICA8VXNlckdyb3VwSWNvbiBjbGFzc05hbWU9XCJuYXZCdG5cIi8+XG4gICAgICAgICAgICAgICAgICAgIDxIZWFydEljb24gY2xhc3NOYW1lPVwibmF2QnRuXCIvPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17c2Vzc2lvbj8udXNlcj8uaW1hZ2V9IG9uQ2xpY2s9e3NpZ25PdXR9IGFsdD1cInByb2ZpbGUgcGljXCIgY2xhc3NOYW1lPVwiaC0xMCB3LTEwIHJvdW5kZWQtZnVsbCBjdXJzb3ItcG9pbnRlclwiLz5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApOiAoXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2lnbklufT5TaWduIGluPC9idXR0b24+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlNlYXJjaEljb24iLCJQbHVzQ2lyY2xlSWNvbiIsIlVzZXJHcm91cEljb24iLCJIZWFydEljb24iLCJQYXBlckFpcnBsYW5lSWNvbiIsIk1lbnVJY29uIiwiSG9tZUljb24iLCJzaWduSW4iLCJzaWduT3V0IiwidXNlU2Vzc2lvbiIsInVzZVJvdXRlciIsIkhlYWRlciIsInNlc3Npb24iLCJkYXRhIiwicm91dGVyIiwicHVzaCIsInVzZXIiLCJpbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ }),

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/client/router */ \"./node_modules/next/dist/client/router.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9yb3V0ZXIuanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsNkdBQWdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L3JvdXRlci5qcz9kYjQ2Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9yb3V0ZXInKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/router.js\n");

/***/ })

});