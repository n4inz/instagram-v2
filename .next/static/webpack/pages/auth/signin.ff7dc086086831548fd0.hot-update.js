"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/auth/signin",{

/***/ "./pages/auth/signin.js":
/*!******************************!*\
  !*** ./pages/auth/signin.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Header */ \"./components/Header.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/var/www/html/Belajar/React/instagram-v2/pages/auth/signin.js\";\n\n\n\n\n\nfunction signIn(_ref) {\n  var _this = this;\n\n  var providers = _ref.providers;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: \"flex flex-col items-center justify-center min-h-screen py-2 -mt-52 px-14 text-center\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n        className: \"w-80\",\n        src: \"https://links.papareact.com/ocw\",\n        alt: \"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n        className: \"font-xs italic\",\n        children: \"This in not a REAL app. it is build in learning purposes only\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"mt-40\",\n        children: Object.values(providers).map(function (provider) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n              className: \"p-3 bg-blue-500 rounded-lg text-white\",\n              onClick: function onClick() {\n                return (0,next_auth_react__WEBPACK_IMPORTED_MODULE_0__.signIn)(provider.id);\n              },\n              children: [\"Sign in with \", provider.name]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 20,\n              columnNumber: 25\n            }, _this)\n          }, provider.name, false, {\n            fileName: _jsxFileName,\n            lineNumber: 19,\n            columnNumber: 21\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true);\n}\n\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (signIn);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdXRoL3NpZ25pbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7Ozs7QUFHQSxTQUFTQSxNQUFULE9BQTZCO0FBQUE7O0FBQUEsTUFBWkcsU0FBWSxRQUFaQSxTQUFZO0FBRXpCLHNCQUVJO0FBQUEsNEJBQ0ksOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBSyxlQUFTLEVBQUMsc0ZBQWY7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUMsTUFBZjtBQUFzQixXQUFHLEVBQUMsaUNBQTFCO0FBQTRELFdBQUcsRUFBQztBQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFHLGlCQUFTLEVBQUMsZ0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQUtJO0FBQUssaUJBQVMsRUFBQyxPQUFmO0FBQUEsa0JBQ0tDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjRixTQUFkLEVBQXlCRyxHQUF6QixDQUE2QixVQUFDQyxRQUFEO0FBQUEsOEJBQzlCO0FBQUEsbUNBQ0k7QUFBUSx1QkFBUyxFQUFDLHVDQUFsQjtBQUEwRCxxQkFBTyxFQUFFO0FBQUEsdUJBQU1OLHVEQUFnQixDQUFDTSxRQUFRLENBQUNDLEVBQVYsQ0FBdEI7QUFBQSxlQUFuRTtBQUFBLDBDQUNjRCxRQUFRLENBQUNFLElBRHZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLGFBQVVGLFFBQVEsQ0FBQ0UsSUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEOEI7QUFBQSxTQUE3QjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBLGtCQUZKO0FBc0JIOzs7QUFTRCwrREFBZVQsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hdXRoL3NpZ25pbi5qcz9lOTg4Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgZ2V0UHJvdmlkZXJzLCBzaWduSW4gYXMgU2lnbkludG9Qcm92aWRlciB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIlxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9IZWFkZXJcIlxuXG5cbmZ1bmN0aW9uIHNpZ25Jbih7cHJvdmlkZXJzfSkge1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4taC1zY3JlZW4gcHktMiAtbXQtNTIgcHgtMTQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInctODBcIiBzcmM9XCJodHRwczovL2xpbmtzLnBhcGFyZWFjdC5jb20vb2N3XCIgYWx0PVwiXCIvPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQteHMgaXRhbGljXCI+XG4gICAgICAgICAgICAgICAgICAgIFRoaXMgaW4gbm90IGEgUkVBTCBhcHAuIGl0IGlzIGJ1aWxkIGluIGxlYXJuaW5nIHB1cnBvc2VzIG9ubHlcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00MFwiPlxuICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LnZhbHVlcyhwcm92aWRlcnMpLm1hcCgocHJvdmlkZXIpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Byb3ZpZGVyLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwLTMgYmctYmx1ZS01MDAgcm91bmRlZC1sZyB0ZXh0LXdoaXRlXCIgb25DbGljaz17KCkgPT4gU2lnbkludG9Qcm92aWRlcihwcm92aWRlci5pZCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgU2lnbiBpbiB3aXRoIHtwcm92aWRlci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gICAgY29uc3QgcHJvdmlkZXJzID0gYXdhaXQgZ2V0UHJvdmlkZXJzKClcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHsgcHJvdmlkZXJzIH0sXG4gICAgfVxuICB9XG4gIFxuZXhwb3J0IGRlZmF1bHQgc2lnbkluXG4iXSwibmFtZXMiOlsic2lnbkluIiwiU2lnbkludG9Qcm92aWRlciIsIkhlYWRlciIsInByb3ZpZGVycyIsIk9iamVjdCIsInZhbHVlcyIsIm1hcCIsInByb3ZpZGVyIiwiaWQiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/auth/signin.js\n");

/***/ })

});