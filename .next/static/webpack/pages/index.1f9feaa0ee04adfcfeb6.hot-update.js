"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Suggestions.js":
/*!***********************************!*\
  !*** ./components/Suggestions.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _var_www_html_Belajar_React_instagram_v2_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _var_www_html_Belajar_React_instagram_v2_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! faker */ \"./node_modules/faker/index.js\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/var/www/html/Belajar/React/instagram-v2/components/Suggestions.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_var_www_html_Belajar_React_instagram_v2_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nfunction Suggestions() {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      suggestions = _useState[0],\n      setSuggestions = _useState[1];\n\n  console.log('sess: ', suggestions);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var suggestion = (0,_var_www_html_Belajar_React_instagram_v2_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(Array(5)).map(function (_, i) {\n      return _objectSpread(_objectSpread({}, faker__WEBPACK_IMPORTED_MODULE_3___default().helpers.contextualCard()), {}, {\n        id: i\n      });\n    });\n\n    setSuggestions(suggestion);\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n    className: \"mt-4 ml-10\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: \"flex justify-between text-sm mb-5\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h3\", {\n        className: \"text-sm font-bold text-gray-400\",\n        children: \"Suggestions for you\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"button\", {\n        className: \"text-gray-600 font-semibold\",\n        children: \"See All\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }, this), suggestions === null || suggestions === void 0 ? void 0 : suggestions.map(function (profile) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: \"flex item-center justify-between mt-3\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"img\", {\n          className: \"w-10 h-10 rounded-full border p-[2px]\",\n          src: profile.avatar,\n          alt: \"\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 25\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n          className: \"flex-1 ml-4\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h2\", {\n            className: \"font-semibold text-sm\",\n            children: profile.username\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 29\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h3\", {\n            className: \"text-xs text-gray-400\",\n            children: [\"Works at \", profile.company.name]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 29\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 25\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"button\", {\n          className: \"text-blue-400\",\n          children: \"Follow\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 25\n        }, _this)]\n      }, profile.id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 21\n      }, _this);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Suggestions, \"cVWhEdBKwDGxELTDgzq6aPbYbyA=\");\n\n_c = Suggestions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Suggestions);\n\nvar _c;\n\n$RefreshReg$(_c, \"Suggestions\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1N1Z2dlc3Rpb25zLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQ0EsU0FBU0csV0FBVCxHQUF1QjtBQUFBOztBQUFBOztBQUNuQixrQkFBc0NGLCtDQUFRLEVBQTlDO0FBQUEsTUFBT0csV0FBUDtBQUFBLE1BQW9CQyxjQUFwQjs7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFxQkgsV0FBckI7QUFHQUosRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBTVEsVUFBVSxHQUFHLDJJQUFJQyxLQUFLLENBQUMsQ0FBRCxDQUFULEVBQWNDLEdBQWQsQ0FBa0IsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsNkNBRzFCVixtRUFBQSxFQUgwQjtBQUk3QmEsUUFBQUEsRUFBRSxFQUFFSDtBQUp5QjtBQUFBLEtBQWxCLENBQW5COztBQVFBUCxJQUFBQSxjQUFjLENBQUNHLFVBQUQsQ0FBZDtBQUNILEdBVlEsRUFVTixFQVZNLENBQVQ7QUFXQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUMsbUNBQWY7QUFBQSw4QkFDSTtBQUFJLGlCQUFTLEVBQUMsaUNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQVEsaUJBQVMsRUFBQyw2QkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixFQU9RSixXQVBSLGFBT1FBLFdBUFIsdUJBT1FBLFdBQVcsQ0FBRU0sR0FBYixDQUFpQixVQUFBTSxPQUFPO0FBQUEsMEJBQ3BCO0FBQXNCLGlCQUFTLEVBQUMsdUNBQWhDO0FBQUEsZ0NBQ0k7QUFBSyxtQkFBUyxFQUFDLHVDQUFmO0FBQXVELGFBQUcsRUFBRUEsT0FBTyxDQUFDQyxNQUFwRTtBQUE0RSxhQUFHLEVBQUM7QUFBaEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQUssbUJBQVMsRUFBQyxhQUFmO0FBQUEsa0NBQ0k7QUFBSSxxQkFBUyxFQUFDLHVCQUFkO0FBQUEsc0JBQXVDRCxPQUFPLENBQUNFO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFJLHFCQUFTLEVBQUMsdUJBQWQ7QUFBQSxvQ0FBZ0RGLE9BQU8sQ0FBQ0csT0FBUixDQUFnQkMsSUFBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQU1JO0FBQVEsbUJBQVMsRUFBQyxlQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFOSjtBQUFBLFNBQVVKLE9BQU8sQ0FBQ0QsRUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURvQjtBQUFBLEtBQXhCLENBUFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFzQkg7O0dBdENRWjs7S0FBQUE7QUF3Q1QsK0RBQWVBLFdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdWdnZXN0aW9ucy5qcz9mNGZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBmYWtlciAgZnJvbSBcImZha2VyXCI7XG5mdW5jdGlvbiBTdWdnZXN0aW9ucygpIHtcbiAgICBjb25zdCBbc3VnZ2VzdGlvbnMsIHNldFN1Z2dlc3Rpb25zXSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc29sZS5sb2coJ3Nlc3M6ICcsc3VnZ2VzdGlvbnMpXG4gICBcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1Z2dlc3Rpb24gPSBbLi4uQXJyYXkoNSldLm1hcCgoXywgaSkgPT4gKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLi4uZmFrZXIuaGVscGVycy5jb250ZXh0dWFsQ2FyZCgpLFxuICAgICAgICAgICAgICAgIGlkOiBpXG4gICAgICAgICAgICB9XG4gICAgICAgICkpXG5cbiAgICAgICAgc2V0U3VnZ2VzdGlvbnMoc3VnZ2VzdGlvbilcbiAgICB9LCBbXSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgbWwtMTBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdGV4dC1zbSBtYi01XCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIHRleHQtZ3JheS00MDBcIj5TdWdnZXN0aW9ucyBmb3IgeW91PC9oMz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgZm9udC1zZW1pYm9sZFwiPlNlZSBBbGw8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3VnZ2VzdGlvbnM/Lm1hcChwcm9maWxlID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Byb2ZpbGUuaWR9IGNsYXNzTmFtZT1cImZsZXggaXRlbS1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG10LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy0xMCBoLTEwIHJvdW5kZWQtZnVsbCBib3JkZXIgcC1bMnB4XVwiIHNyYz17cHJvZmlsZS5hdmF0YXJ9IGFsdD1cIlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIG1sLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LXNtXCI+e3Byb2ZpbGUudXNlcm5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNDAwXCI+V29ya3MgYXQge3Byb2ZpbGUuY29tcGFueS5uYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMFwiPkZvbGxvdzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdWdnZXN0aW9uc1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZmFrZXIiLCJTdWdnZXN0aW9ucyIsInN1Z2dlc3Rpb25zIiwic2V0U3VnZ2VzdGlvbnMiLCJjb25zb2xlIiwibG9nIiwic3VnZ2VzdGlvbiIsIkFycmF5IiwibWFwIiwiXyIsImkiLCJoZWxwZXJzIiwiY29udGV4dHVhbENhcmQiLCJpZCIsInByb2ZpbGUiLCJhdmF0YXIiLCJ1c2VybmFtZSIsImNvbXBhbnkiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Suggestions.js\n");

/***/ })

});