webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ImagesZoom/index.js":
/*!****************************************!*\
  !*** ./components/ImagesZoom/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\n\nvar _jsxFileName = \"/Users/gimhyeongjin/Desktop/React-NodeBird/prepare/front/components/ImagesZoom/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  height: 44px;\\n  background: white;\\n  position: relative;\\n  padding: 0;\\n  text-align: center;\\n\\n  & h1 {\\n    margin: 0;\\n    font-size: 17px;\\n    color: #333;\\n    line-height: 44px;\\n  }\\n\\n  & button {\\n    position: absolute;\\n    right: 0;\\n    top: 0;\\n    padding: 15px;\\n    line-height: 14px;\\n    cursor: pointer;\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  position: fixed;\\n  z-index: 5000;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  bottom: 0;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar Overlay = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject());\nvar Header = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].header(_templateObject2());\n_c = Header;\n\nvar ImagesZoom = function ImagesZoom(_ref) {\n  _s();\n\n  var images = _ref.images,\n      onClose = _ref.onClose;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0),\n      currentSlide = _useState[0],\n      setCurrentSlide = _useState[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Header, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: \"\\uC0C1\\uC138 \\uC774\\uBBF8\\uC9C0\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: onClose,\n        children: \"X\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_slick__WEBPACK_IMPORTED_MODULE_4___default.a, {\n          initialSlide: 0,\n          afterChange: function afterChange(slide) {\n            return setCurrentSlide(slide);\n          },\n          infinite: true,\n          arrows: false,\n          slidesToShow: 1,\n          slidesToScroll: 1,\n          children: images.map(function (v) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                src: v.src,\n                alt: v.src\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 59,\n                columnNumber: 17\n              }, _this)\n            }, v.src, false, {\n              fileName: _jsxFileName,\n              lineNumber: 58,\n              columnNumber: 15\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ImagesZoom, \"VQw0KpRgltXDNPWBgmV3GhZXdQE=\");\n\n_c2 = ImagesZoom;\nImagesZoom.propTypes = {\n  images: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object).isRequired,\n  onClose: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImagesZoom);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Header\");\n$RefreshReg$(_c2, \"ImagesZoom\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbWFnZXNab29tL2luZGV4LmpzPzYxODciXSwibmFtZXMiOlsiT3ZlcmxheSIsInN0eWxlZCIsImRpdiIsIkhlYWRlciIsImhlYWRlciIsIkltYWdlc1pvb20iLCJpbWFnZXMiLCJvbkNsb3NlIiwidXNlU3RhdGUiLCJjdXJyZW50U2xpZGUiLCJzZXRDdXJyZW50U2xpZGUiLCJzbGlkZSIsIm1hcCIsInYiLCJzcmMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsbUJBQWI7QUFTQSxJQUFNQyxNQUFNLEdBQUdGLHlEQUFNLENBQUNHLE1BQVYsb0JBQVo7S0FBTUQsTTs7QUF3Qk4sSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBeUI7QUFBQTs7QUFBQSxNQUF0QkMsTUFBc0IsUUFBdEJBLE1BQXNCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjOztBQUFBLGtCQUNGQyxzREFBUSxDQUFDLENBQUQsQ0FETjtBQUFBLE1BQ25DQyxZQURtQztBQUFBLE1BQ3JCQyxlQURxQjs7QUFFMUMsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxNQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQVEsZUFBTyxFQUFFSCxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBS0U7QUFBQSw2QkFDRTtBQUFBLCtCQUNFLHFFQUFDLGtEQUFEO0FBQ0Usc0JBQVksRUFBRSxDQURoQjtBQUVFLHFCQUFXLEVBQUUscUJBQUNJLEtBQUQ7QUFBQSxtQkFBV0QsZUFBZSxDQUFDQyxLQUFELENBQTFCO0FBQUEsV0FGZjtBQUdFLGtCQUFRLE1BSFY7QUFJRSxnQkFBTSxFQUFFLEtBSlY7QUFLRSxzQkFBWSxFQUFFLENBTGhCO0FBTUUsd0JBQWMsRUFBRSxDQU5sQjtBQUFBLG9CQVFHTCxNQUFNLENBQUNNLEdBQVAsQ0FBVyxVQUFDQyxDQUFEO0FBQUEsZ0NBQ1Y7QUFBQSxxQ0FDRTtBQUFLLG1CQUFHLEVBQUVBLENBQUMsQ0FBQ0MsR0FBWjtBQUFpQixtQkFBRyxFQUFFRCxDQUFDLENBQUNDO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixlQUFVRCxDQUFDLENBQUNDLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEVTtBQUFBLFdBQVg7QUFSSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBCRCxDQTVCRDs7R0FBTVQsVTs7TUFBQUEsVTtBQThCTkEsVUFBVSxDQUFDVSxTQUFYLEdBQXVCO0FBQ3JCVCxRQUFNLEVBQUVVLGlEQUFTLENBQUNDLE9BQVYsQ0FBa0JELGlEQUFTLENBQUNFLE1BQTVCLEVBQW9DQyxVQUR2QjtBQUVyQlosU0FBTyxFQUFFUyxpREFBUyxDQUFDSSxJQUFWLENBQWVEO0FBRkgsQ0FBdkI7QUFLZWQseUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0ltYWdlc1pvb20vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFNsaWNrIGZyb20gJ3JlYWN0LXNsaWNrJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBPdmVybGF5ID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA1MDAwO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG5gO1xuXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxuICBoZWlnaHQ6IDQ0cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAmIGgxIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICB9XG5cbiAgJiBidXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbmA7XG5cbmNvbnN0IEltYWdlc1pvb20gPSAoeyBpbWFnZXMsIG9uQ2xvc2UgfSkgPT4ge1xuICBjb25zdCBbY3VycmVudFNsaWRlLCBzZXRDdXJyZW50U2xpZGVdID0gdXNlU3RhdGUoMCk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkZXI+XG4gICAgICAgIDxoMT7sg4HshLgg7J2066+47KeAPC9oMT5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNsb3NlfT5YPC9idXR0b24+XG4gICAgICA8L0hlYWRlcj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFNsaWNrXG4gICAgICAgICAgICBpbml0aWFsU2xpZGU9ezB9XG4gICAgICAgICAgICBhZnRlckNoYW5nZT17KHNsaWRlKSA9PiBzZXRDdXJyZW50U2xpZGUoc2xpZGUpfVxuICAgICAgICAgICAgaW5maW5pdGVcbiAgICAgICAgICAgIGFycm93cz17ZmFsc2V9XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c9ezF9XG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbD17MX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aW1hZ2VzLm1hcCgodikgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17di5zcmN9PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt2LnNyY30gYWx0PXt2LnNyY30gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1NsaWNrPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuSW1hZ2VzWm9vbS5wcm9wVHlwZXMgPSB7XG4gIGltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCkuaXNSZXF1aXJlZCxcbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VzWm9vbTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ImagesZoom/index.js\n");

/***/ })

})