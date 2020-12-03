webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Pagination.jsx":
/*!***********************************!*\
  !*** ./components/Pagination.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-paginate */ "./node_modules/react-paginate/dist/react-paginate.js");
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_paginate__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "/mnt/c/Users/camil/Documents/Projects/PokeHunt-SSG/components/Pagination.jsx",
    _this = undefined;




var Pagination = function Pagination() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_paginate__WEBPACK_IMPORTED_MODULE_2___default.a, {
    previousLabel: 'prev',
    nextLabel: 'next',
    breakLabel: '...',
    pageCount: pageCount,
    pageRangeDisplayed: 12,
    marginPagesDisplayed: 3 // onPageChange={paginate}
    ,
    containerClassName: 'pagination',
    pageClassName: 'page',
    previousClassName: 'page',
    nextClassName: 'page',
    pageLinkClassName: 'link',
    nextLinkClassName: 'link',
    previousLinkClassName: 'link',
    activeLinkClassName: 'active',
    initialPage: currentPage
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, _this);
};

_c = Pagination;
/* harmony default export */ __webpack_exports__["default"] = (Pagination);

var _c;

$RefreshReg$(_c, "Pagination");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Pagination */ "./components/Pagination.jsx");



var _jsxFileName = "/mnt/c/Users/camil/Documents/Projects/PokeHunt-SSG/pages/index.jsx",
    _this = undefined,
    _s = $RefreshSig$();




var Home = function Home(_ref) {
  _s();

  var pokedex = _ref.pokedex;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(18),
      perPage = _useState[0];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      currentPage = _useState2[0],
      setCurrentPage = _useState2[1];

  var upperLimit = perPage * (currentPage + 1);
  var lowerLimit = upperLimit - perPage;
  var current = pokedex.slice(lowerLimit, upperLimit);
  var pageCount = Math.ceil(pokedex.length / perPage);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: "pokedex",
      children: current.map(function (pokemon) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: pokemon.name
        }, pokemon.url, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, _this)
  }, void 0, false);
};

_s(Home, "7/Cl9z4iwrk7NdeRrc4pLVwZUF8=");

_c = Home;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdpbmF0aW9uLmpzeCIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIlBhZ2luYXRpb24iLCJwYWdlQ291bnQiLCJjdXJyZW50UGFnZSIsIkhvbWUiLCJwb2tlZGV4IiwidXNlU3RhdGUiLCJwZXJQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJ1cHBlckxpbWl0IiwibG93ZXJMaW1pdCIsImN1cnJlbnQiLCJzbGljZSIsIk1hdGgiLCJjZWlsIiwibGVuZ3RoIiwibWFwIiwicG9rZW1vbiIsIm5hbWUiLCJ1cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUdBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDckIsc0JBQ0kscUVBQUMscURBQUQ7QUFDSSxpQkFBYSxFQUFFLE1BRG5CO0FBRUksYUFBUyxFQUFFLE1BRmY7QUFHSSxjQUFVLEVBQUUsS0FIaEI7QUFJSSxhQUFTLEVBQUVDLFNBSmY7QUFLSSxzQkFBa0IsRUFBRSxFQUx4QjtBQU1JLHdCQUFvQixFQUFFLENBTjFCLENBT0k7QUFQSjtBQVFJLHNCQUFrQixFQUFFLFlBUnhCO0FBU0ksaUJBQWEsRUFBRSxNQVRuQjtBQVVJLHFCQUFpQixFQUFFLE1BVnZCO0FBV0ksaUJBQWEsRUFBRSxNQVhuQjtBQVlJLHFCQUFpQixFQUFFLE1BWnZCO0FBYUkscUJBQWlCLEVBQUUsTUFidkI7QUFjSSx5QkFBcUIsRUFBRSxNQWQzQjtBQWVJLHVCQUFtQixFQUFFLFFBZnpCO0FBZ0JJLGVBQVcsRUFBRUM7QUFoQmpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQW9CSCxDQXJCRDs7S0FBTUYsVTtBQXVCU0EseUVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUNBOztBQWFBLElBQU1HLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWlCO0FBQUE7O0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjOztBQUFBLGtCQUVSQyxzREFBUSxDQUFDLEVBQUQsQ0FGQTtBQUFBLE1BRW5CQyxPQUZtQjs7QUFBQSxtQkFHWUQsc0RBQVEsQ0FBQyxDQUFELENBSHBCO0FBQUEsTUFHbkJILFdBSG1CO0FBQUEsTUFHTkssY0FITTs7QUFJMUIsTUFBTUMsVUFBVSxHQUFHRixPQUFPLElBQUlKLFdBQVcsR0FBRyxDQUFsQixDQUExQjtBQUNBLE1BQU1PLFVBQVUsR0FBR0QsVUFBVSxHQUFHRixPQUFoQztBQUNBLE1BQU1JLE9BQU8sR0FBR04sT0FBTyxDQUFDTyxLQUFSLENBQWNGLFVBQWQsRUFBMEJELFVBQTFCLENBQWhCO0FBQ0EsTUFBTVAsU0FBUyxHQUFHVyxJQUFJLENBQUNDLElBQUwsQ0FBVVQsT0FBTyxDQUFDVSxNQUFSLEdBQWlCUixPQUEzQixDQUFsQjtBQUVBLHNCQUNRO0FBQUEsMkJBQ0E7QUFBUyxlQUFTLEVBQUMsU0FBbkI7QUFBQSxnQkFDS0ksT0FBTyxDQUFDSyxHQUFSLENBQVksVUFBQUMsT0FBTztBQUFBLDRCQUNoQjtBQUFBLG9CQUNLQSxPQUFPLENBQUNDO0FBRGIsV0FBVUQsT0FBTyxDQUFDRSxHQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURnQjtBQUFBLE9BQW5CO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLG1CQURSO0FBWUgsQ0FyQkQ7O0dBQU1mLEk7O0tBQUFBLEk7O0FBdUJTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44NGY0Nzk0ZDg5NmJlOTE5MDc1OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0UGFnaW5hdGUgZnJvbSAncmVhY3QtcGFnaW5hdGUnXG5cblxuY29uc3QgUGFnaW5hdGlvbiA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8UmVhY3RQYWdpbmF0ZSBcbiAgICAgICAgICAgIHByZXZpb3VzTGFiZWw9eydwcmV2J31cbiAgICAgICAgICAgIG5leHRMYWJlbD17J25leHQnfVxuICAgICAgICAgICAgYnJlYWtMYWJlbD17Jy4uLid9XG4gICAgICAgICAgICBwYWdlQ291bnQ9e3BhZ2VDb3VudH1cbiAgICAgICAgICAgIHBhZ2VSYW5nZURpc3BsYXllZD17MTJ9XG4gICAgICAgICAgICBtYXJnaW5QYWdlc0Rpc3BsYXllZD17M31cbiAgICAgICAgICAgIC8vIG9uUGFnZUNoYW5nZT17cGFnaW5hdGV9XG4gICAgICAgICAgICBjb250YWluZXJDbGFzc05hbWU9eydwYWdpbmF0aW9uJ31cbiAgICAgICAgICAgIHBhZ2VDbGFzc05hbWU9eydwYWdlJ31cbiAgICAgICAgICAgIHByZXZpb3VzQ2xhc3NOYW1lPXsncGFnZSd9XG4gICAgICAgICAgICBuZXh0Q2xhc3NOYW1lPXsncGFnZSd9XG4gICAgICAgICAgICBwYWdlTGlua0NsYXNzTmFtZT17J2xpbmsnfVxuICAgICAgICAgICAgbmV4dExpbmtDbGFzc05hbWU9eydsaW5rJ31cbiAgICAgICAgICAgIHByZXZpb3VzTGlua0NsYXNzTmFtZT17J2xpbmsnfVxuICAgICAgICAgICAgYWN0aXZlTGlua0NsYXNzTmFtZT17J2FjdGl2ZSd9XG4gICAgICAgICAgICBpbml0aWFsUGFnZT17Y3VycmVudFBhZ2V9XG4gICAgICAgIC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnaW5hdGlvbidcbmNvbnN0IGFwaSA9ICdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24vP29mZnNldD0wJmxpbWl0PTg0MSdcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFwaSlcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBwb2tlZGV4OiBkYXRhLnJlc3VsdHNcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgSG9tZSA9ICh7IHBva2VkZXggfSkgPT4ge1xuXG4gICAgY29uc3QgW3BlclBhZ2VdID0gdXNlU3RhdGUoMTgpXG4gICAgY29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZSgwKVxuICAgIGNvbnN0IHVwcGVyTGltaXQgPSBwZXJQYWdlICogKGN1cnJlbnRQYWdlICsgMSlcbiAgICBjb25zdCBsb3dlckxpbWl0ID0gdXBwZXJMaW1pdCAtIHBlclBhZ2VcbiAgICBjb25zdCBjdXJyZW50ID0gcG9rZWRleC5zbGljZShsb3dlckxpbWl0LCB1cHBlckxpbWl0KVxuICAgIGNvbnN0IHBhZ2VDb3VudCA9IE1hdGguY2VpbChwb2tlZGV4Lmxlbmd0aCAvIHBlclBhZ2UpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInBva2VkZXhcIj5cbiAgICAgICAgICAgICAgICB7Y3VycmVudC5tYXAocG9rZW1vbiA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtwb2tlbW9uLnVybH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cG9rZW1vbi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIFxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdLCJzb3VyY2VSb290IjoiIn0=