webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-paginate */ "./node_modules/react-paginate/dist/react-paginate.js");
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_paginate__WEBPACK_IMPORTED_MODULE_2__);



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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: "pokedex",
      children: current.map(function (pokemon) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: pokemon.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_paginate__WEBPACK_IMPORTED_MODULE_2___default.a, {
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
      lineNumber: 33,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIkhvbWUiLCJwb2tlZGV4IiwidXNlU3RhdGUiLCJwZXJQYWdlIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsInVwcGVyTGltaXQiLCJsb3dlckxpbWl0IiwiY3VycmVudCIsInNsaWNlIiwicGFnZUNvdW50IiwiTWF0aCIsImNlaWwiLCJsZW5ndGgiLCJtYXAiLCJwb2tlbW9uIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBYUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBaUI7QUFBQTs7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7O0FBQUEsa0JBRVJDLHNEQUFRLENBQUMsRUFBRCxDQUZBO0FBQUEsTUFFbkJDLE9BRm1COztBQUFBLG1CQUdZRCxzREFBUSxDQUFDLENBQUQsQ0FIcEI7QUFBQSxNQUduQkUsV0FIbUI7QUFBQSxNQUdOQyxjQUhNOztBQUkxQixNQUFNQyxVQUFVLEdBQUdILE9BQU8sSUFBSUMsV0FBVyxHQUFHLENBQWxCLENBQTFCO0FBQ0EsTUFBTUcsVUFBVSxHQUFHRCxVQUFVLEdBQUdILE9BQWhDO0FBQ0EsTUFBTUssT0FBTyxHQUFHUCxPQUFPLENBQUNRLEtBQVIsQ0FBY0YsVUFBZCxFQUEwQkQsVUFBMUIsQ0FBaEI7QUFDQSxNQUFNSSxTQUFTLEdBQUdDLElBQUksQ0FBQ0MsSUFBTCxDQUFVWCxPQUFPLENBQUNZLE1BQVIsR0FBaUJWLE9BQTNCLENBQWxCO0FBRUEsc0JBQ1E7QUFBQSw0QkFDQTtBQUFTLGVBQVMsRUFBQyxTQUFuQjtBQUFBLGdCQUNLSyxPQUFPLENBQUNNLEdBQVIsQ0FBWSxVQUFBQyxPQUFPO0FBQUEsNEJBQ2hCO0FBQUEsb0JBQ0tBLE9BQU8sQ0FBQ0M7QUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURnQjtBQUFBLE9BQW5CO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURBLGVBUUEscUVBQUMscURBQUQ7QUFDQSxtQkFBYSxFQUFFLE1BRGY7QUFFQSxlQUFTLEVBQUUsTUFGWDtBQUdBLGdCQUFVLEVBQUUsS0FIWjtBQUlBLGVBQVMsRUFBRU4sU0FKWDtBQUtBLHdCQUFrQixFQUFFLEVBTHBCO0FBTUEsMEJBQW9CLEVBQUUsQ0FOdEIsQ0FPQTtBQVBBO0FBUUEsd0JBQWtCLEVBQUUsWUFScEI7QUFTQSxtQkFBYSxFQUFFLE1BVGY7QUFVQSx1QkFBaUIsRUFBRSxNQVZuQjtBQVdBLG1CQUFhLEVBQUUsTUFYZjtBQVlBLHVCQUFpQixFQUFFLE1BWm5CO0FBYUEsdUJBQWlCLEVBQUUsTUFibkI7QUFjQSwyQkFBcUIsRUFBRSxNQWR2QjtBQWVBLHlCQUFtQixFQUFFLFFBZnJCO0FBZ0JBLGlCQUFXLEVBQUVOO0FBaEJiO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSQTtBQUFBLGtCQURSO0FBNEJILENBckNEOztHQUFNSixJOztLQUFBQSxJOztBQXVDU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzE3NTcwZjhhZjhhOGIzMzU4ZDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0UGFnaW5hdGUgZnJvbSAncmVhY3QtcGFnaW5hdGUnXG5jb25zdCBhcGkgPSAnaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uLz9vZmZzZXQ9MCZsaW1pdD04NDEnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChhcGkpXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgcG9rZWRleDogZGF0YS5yZXN1bHRzXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IEhvbWUgPSAoeyBwb2tlZGV4IH0pID0+IHtcblxuICAgIGNvbnN0IFtwZXJQYWdlXSA9IHVzZVN0YXRlKDE4KVxuICAgIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoMClcbiAgICBjb25zdCB1cHBlckxpbWl0ID0gcGVyUGFnZSAqIChjdXJyZW50UGFnZSArIDEpXG4gICAgY29uc3QgbG93ZXJMaW1pdCA9IHVwcGVyTGltaXQgLSBwZXJQYWdlXG4gICAgY29uc3QgY3VycmVudCA9IHBva2VkZXguc2xpY2UobG93ZXJMaW1pdCwgdXBwZXJMaW1pdClcbiAgICBjb25zdCBwYWdlQ291bnQgPSBNYXRoLmNlaWwocG9rZWRleC5sZW5ndGggLyBwZXJQYWdlKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwb2tlZGV4XCI+XG4gICAgICAgICAgICAgICAge2N1cnJlbnQubWFwKHBva2Vtb24gPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge3Bva2Vtb24ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8UmVhY3RQYWdpbmF0ZSBcbiAgICAgICAgICAgIHByZXZpb3VzTGFiZWw9eydwcmV2J31cbiAgICAgICAgICAgIG5leHRMYWJlbD17J25leHQnfVxuICAgICAgICAgICAgYnJlYWtMYWJlbD17Jy4uLid9XG4gICAgICAgICAgICBwYWdlQ291bnQ9e3BhZ2VDb3VudH1cbiAgICAgICAgICAgIHBhZ2VSYW5nZURpc3BsYXllZD17MTJ9XG4gICAgICAgICAgICBtYXJnaW5QYWdlc0Rpc3BsYXllZD17M31cbiAgICAgICAgICAgIC8vIG9uUGFnZUNoYW5nZT17cGFnaW5hdGV9XG4gICAgICAgICAgICBjb250YWluZXJDbGFzc05hbWU9eydwYWdpbmF0aW9uJ31cbiAgICAgICAgICAgIHBhZ2VDbGFzc05hbWU9eydwYWdlJ31cbiAgICAgICAgICAgIHByZXZpb3VzQ2xhc3NOYW1lPXsncGFnZSd9XG4gICAgICAgICAgICBuZXh0Q2xhc3NOYW1lPXsncGFnZSd9XG4gICAgICAgICAgICBwYWdlTGlua0NsYXNzTmFtZT17J2xpbmsnfVxuICAgICAgICAgICAgbmV4dExpbmtDbGFzc05hbWU9eydsaW5rJ31cbiAgICAgICAgICAgIHByZXZpb3VzTGlua0NsYXNzTmFtZT17J2xpbmsnfVxuICAgICAgICAgICAgYWN0aXZlTGlua0NsYXNzTmFtZT17J2FjdGl2ZSd9XG4gICAgICAgICAgICBpbml0aWFsUGFnZT17Y3VycmVudFBhZ2V9Lz5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXSwic291cmNlUm9vdCI6IiJ9