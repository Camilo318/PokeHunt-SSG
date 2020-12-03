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
      marginPagesDisplayed: 3,
      onPageChange: paginate,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIkhvbWUiLCJwb2tlZGV4IiwidXNlU3RhdGUiLCJwZXJQYWdlIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsInVwcGVyTGltaXQiLCJsb3dlckxpbWl0IiwiY3VycmVudCIsInNsaWNlIiwicGFnZUNvdW50IiwiTWF0aCIsImNlaWwiLCJsZW5ndGgiLCJtYXAiLCJwb2tlbW9uIiwibmFtZSIsInBhZ2luYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFhQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFpQjtBQUFBOztBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYzs7QUFBQSxrQkFFUkMsc0RBQVEsQ0FBQyxFQUFELENBRkE7QUFBQSxNQUVuQkMsT0FGbUI7O0FBQUEsbUJBR1lELHNEQUFRLENBQUMsQ0FBRCxDQUhwQjtBQUFBLE1BR25CRSxXQUhtQjtBQUFBLE1BR05DLGNBSE07O0FBSTFCLE1BQU1DLFVBQVUsR0FBR0gsT0FBTyxJQUFJQyxXQUFXLEdBQUcsQ0FBbEIsQ0FBMUI7QUFDQSxNQUFNRyxVQUFVLEdBQUdELFVBQVUsR0FBR0gsT0FBaEM7QUFDQSxNQUFNSyxPQUFPLEdBQUdQLE9BQU8sQ0FBQ1EsS0FBUixDQUFjRixVQUFkLEVBQTBCRCxVQUExQixDQUFoQjtBQUNBLE1BQU1JLFNBQVMsR0FBR0MsSUFBSSxDQUFDQyxJQUFMLENBQVVYLE9BQU8sQ0FBQ1ksTUFBUixHQUFpQlYsT0FBM0IsQ0FBbEI7QUFFQSxzQkFDUTtBQUFBLDRCQUNBO0FBQVMsZUFBUyxFQUFDLFNBQW5CO0FBQUEsZ0JBQ0tLLE9BQU8sQ0FBQ00sR0FBUixDQUFZLFVBQUFDLE9BQU87QUFBQSw0QkFDaEI7QUFBQSxvQkFDS0EsT0FBTyxDQUFDQztBQURiO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGdCO0FBQUEsT0FBbkI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREEsZUFRQSxxRUFBQyxxREFBRDtBQUNBLG1CQUFhLEVBQUUsTUFEZjtBQUVBLGVBQVMsRUFBRSxNQUZYO0FBR0EsZ0JBQVUsRUFBRSxLQUhaO0FBSUEsZUFBUyxFQUFFTixTQUpYO0FBS0Esd0JBQWtCLEVBQUUsRUFMcEI7QUFNQSwwQkFBb0IsRUFBRSxDQU50QjtBQU9BLGtCQUFZLEVBQUVPLFFBUGQ7QUFRQSxtQkFBYSxFQUFFLE1BUmY7QUFTQSx1QkFBaUIsRUFBRSxNQVRuQjtBQVVBLG1CQUFhLEVBQUUsTUFWZjtBQVdBLHVCQUFpQixFQUFFLE1BWG5CO0FBWUEsdUJBQWlCLEVBQUUsTUFabkI7QUFhQSwyQkFBcUIsRUFBRSxNQWJ2QjtBQWNBLHlCQUFtQixFQUFFLFFBZHJCO0FBZUEsaUJBQVcsRUFBRWI7QUFmYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkE7QUFBQSxrQkFEUjtBQTJCSCxDQXBDRDs7R0FBTUosSTs7S0FBQUEsSTs7QUFzQ1NBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjY5ZTE2YzRjNmRhOGYxMzUzN2UwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdFBhZ2luYXRlIGZyb20gJ3JlYWN0LXBhZ2luYXRlJ1xuY29uc3QgYXBpID0gJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi8/b2Zmc2V0PTAmbGltaXQ9ODQxJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYXBpKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHBva2VkZXg6IGRhdGEucmVzdWx0c1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBIb21lID0gKHsgcG9rZWRleCB9KSA9PiB7XG5cbiAgICBjb25zdCBbcGVyUGFnZV0gPSB1c2VTdGF0ZSgxOClcbiAgICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDApXG4gICAgY29uc3QgdXBwZXJMaW1pdCA9IHBlclBhZ2UgKiAoY3VycmVudFBhZ2UgKyAxKVxuICAgIGNvbnN0IGxvd2VyTGltaXQgPSB1cHBlckxpbWl0IC0gcGVyUGFnZVxuICAgIGNvbnN0IGN1cnJlbnQgPSBwb2tlZGV4LnNsaWNlKGxvd2VyTGltaXQsIHVwcGVyTGltaXQpXG4gICAgY29uc3QgcGFnZUNvdW50ID0gTWF0aC5jZWlsKHBva2VkZXgubGVuZ3RoIC8gcGVyUGFnZSlcblxuICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicG9rZWRleFwiPlxuICAgICAgICAgICAgICAgIHtjdXJyZW50Lm1hcChwb2tlbW9uID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwb2tlbW9uLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPFJlYWN0UGFnaW5hdGUgXG4gICAgICAgICAgICBwcmV2aW91c0xhYmVsPXsncHJldid9XG4gICAgICAgICAgICBuZXh0TGFiZWw9eyduZXh0J31cbiAgICAgICAgICAgIGJyZWFrTGFiZWw9eycuLi4nfVxuICAgICAgICAgICAgcGFnZUNvdW50PXtwYWdlQ291bnR9XG4gICAgICAgICAgICBwYWdlUmFuZ2VEaXNwbGF5ZWQ9ezEyfVxuICAgICAgICAgICAgbWFyZ2luUGFnZXNEaXNwbGF5ZWQ9ezN9XG4gICAgICAgICAgICBvblBhZ2VDaGFuZ2U9e3BhZ2luYXRlfVxuICAgICAgICAgICAgcGFnZUNsYXNzTmFtZT17J3BhZ2UnfVxuICAgICAgICAgICAgcHJldmlvdXNDbGFzc05hbWU9eydwYWdlJ31cbiAgICAgICAgICAgIG5leHRDbGFzc05hbWU9eydwYWdlJ31cbiAgICAgICAgICAgIHBhZ2VMaW5rQ2xhc3NOYW1lPXsnbGluayd9XG4gICAgICAgICAgICBuZXh0TGlua0NsYXNzTmFtZT17J2xpbmsnfVxuICAgICAgICAgICAgcHJldmlvdXNMaW5rQ2xhc3NOYW1lPXsnbGluayd9XG4gICAgICAgICAgICBhY3RpdmVMaW5rQ2xhc3NOYW1lPXsnYWN0aXZlJ31cbiAgICAgICAgICAgIGluaXRpYWxQYWdlPXtjdXJyZW50UGFnZX0vPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdLCJzb3VyY2VSb290IjoiIn0=