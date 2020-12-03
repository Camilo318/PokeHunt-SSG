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
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Pagination */ "./components/Pagination.jsx");
/* harmony import */ var _components_Pokemon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Pokemon */ "./components/Pokemon.jsx");



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

  function paginate(page) {
    setCurrentPage(page.selected);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: "pokedex",
      children: current.map(function (pokemon, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Pokemon__WEBPACK_IMPORTED_MODULE_3__["default"], {
          id: index + 1,
          children: pokemon.name
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Pagination__WEBPACK_IMPORTED_MODULE_2__["default"], {
      pageCount: pageCount,
      currentPage: currentPage,
      paginate: paginate
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIkhvbWUiLCJwb2tlZGV4IiwidXNlU3RhdGUiLCJwZXJQYWdlIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsInVwcGVyTGltaXQiLCJsb3dlckxpbWl0IiwiY3VycmVudCIsInNsaWNlIiwicGFnZUNvdW50IiwiTWF0aCIsImNlaWwiLCJsZW5ndGgiLCJwYWdpbmF0ZSIsInBhZ2UiLCJzZWxlY3RlZCIsIm1hcCIsInBva2Vtb24iLCJpbmRleCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBY0EsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBaUI7QUFBQTs7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7O0FBQUEsa0JBRVJDLHNEQUFRLENBQUMsRUFBRCxDQUZBO0FBQUEsTUFFbkJDLE9BRm1COztBQUFBLG1CQUdZRCxzREFBUSxDQUFDLENBQUQsQ0FIcEI7QUFBQSxNQUduQkUsV0FIbUI7QUFBQSxNQUdOQyxjQUhNOztBQUkxQixNQUFNQyxVQUFVLEdBQUdILE9BQU8sSUFBSUMsV0FBVyxHQUFHLENBQWxCLENBQTFCO0FBQ0EsTUFBTUcsVUFBVSxHQUFHRCxVQUFVLEdBQUdILE9BQWhDO0FBQ0EsTUFBTUssT0FBTyxHQUFHUCxPQUFPLENBQUNRLEtBQVIsQ0FBY0YsVUFBZCxFQUEwQkQsVUFBMUIsQ0FBaEI7QUFDQSxNQUFNSSxTQUFTLEdBQUdDLElBQUksQ0FBQ0MsSUFBTCxDQUFVWCxPQUFPLENBQUNZLE1BQVIsR0FBaUJWLE9BQTNCLENBQWxCOztBQUVBLFdBQVNXLFFBQVQsQ0FBa0JDLElBQWxCLEVBQXdCO0FBQ3BCVixrQkFBYyxDQUFDVSxJQUFJLENBQUNDLFFBQU4sQ0FBZDtBQUNIOztBQUVELHNCQUNJO0FBQUEsNEJBQ0k7QUFBUyxlQUFTLEVBQUMsU0FBbkI7QUFBQSxnQkFDS1IsT0FBTyxDQUFDUyxHQUFSLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxLQUFWO0FBQUEsNEJBQ1QscUVBQUMsMkRBQUQ7QUFBcUIsWUFBRSxFQUFHQSxLQUFLLEdBQUcsQ0FBbEM7QUFBQSxvQkFDS0QsT0FBTyxDQUFDRTtBQURiLFdBQWNELEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUztBQUFBLE9BQVo7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFTSSxxRUFBQyw4REFBRDtBQUNBLGVBQVMsRUFBRVQsU0FEWDtBQUVBLGlCQUFXLEVBQUVOLFdBRmI7QUFHQSxjQUFRLEVBQUVVO0FBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRKO0FBQUEsa0JBREo7QUFnQkgsQ0E3QkQ7O0dBQU1kLEk7O0tBQUFBLEk7O0FBK0JTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jODBiNTExMjUwZTU2NDZlYzFiNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2luYXRpb24nXG5pbXBvcnQgUG9rZW1vbiBmcm9tICcuLi9jb21wb25lbnRzL1Bva2Vtb24nXG5cbmNvbnN0IGFwaSA9ICdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24vP29mZnNldD0wJmxpbWl0PTg0MSdcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFwaSlcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBwb2tlZGV4OiBkYXRhLnJlc3VsdHNcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgSG9tZSA9ICh7IHBva2VkZXggfSkgPT4ge1xuXG4gICAgY29uc3QgW3BlclBhZ2VdID0gdXNlU3RhdGUoMTgpXG4gICAgY29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZSgwKVxuICAgIGNvbnN0IHVwcGVyTGltaXQgPSBwZXJQYWdlICogKGN1cnJlbnRQYWdlICsgMSlcbiAgICBjb25zdCBsb3dlckxpbWl0ID0gdXBwZXJMaW1pdCAtIHBlclBhZ2VcbiAgICBjb25zdCBjdXJyZW50ID0gcG9rZWRleC5zbGljZShsb3dlckxpbWl0LCB1cHBlckxpbWl0KVxuICAgIGNvbnN0IHBhZ2VDb3VudCA9IE1hdGguY2VpbChwb2tlZGV4Lmxlbmd0aCAvIHBlclBhZ2UpXG5cbiAgICBmdW5jdGlvbiBwYWdpbmF0ZShwYWdlKSB7XG4gICAgICAgIHNldEN1cnJlbnRQYWdlKHBhZ2Uuc2VsZWN0ZWQpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInBva2VkZXhcIj5cbiAgICAgICAgICAgICAgICB7Y3VycmVudC5tYXAoKHBva2Vtb24sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxQb2tlbW9uIGtleT17aW5kZXh9IGlkPXsoaW5kZXggKyAxKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cG9rZW1vbi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L1Bva2Vtb24+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgIDxQYWdpbmF0aW9uXG4gICAgICAgICAgICBwYWdlQ291bnQ9e3BhZ2VDb3VudH1cbiAgICAgICAgICAgIGN1cnJlbnRQYWdlPXtjdXJyZW50UGFnZX1cbiAgICAgICAgICAgIHBhZ2luYXRlPXtwYWdpbmF0ZX0vPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdLCJzb3VyY2VSb290IjoiIn0=