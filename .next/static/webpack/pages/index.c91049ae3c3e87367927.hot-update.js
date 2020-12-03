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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: "pokedex",
    children: current.map(function (pokemon) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: pokemon.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }, _this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIkhvbWUiLCJwb2tlZGV4IiwidXNlU3RhdGUiLCJwZXJQYWdlIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsInVwcGVyTGltaXQiLCJsb3dlckxpbWl0IiwiY3VycmVudCIsInNsaWNlIiwicGFnZUNvdW50IiwiTWF0aCIsImNlaWwiLCJsZW5ndGgiLCJtYXAiLCJwb2tlbW9uIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQWFBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWlCO0FBQUE7O0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjOztBQUFBLGtCQUVSQyxzREFBUSxDQUFDLEVBQUQsQ0FGQTtBQUFBLE1BRW5CQyxPQUZtQjs7QUFBQSxtQkFHWUQsc0RBQVEsQ0FBQyxDQUFELENBSHBCO0FBQUEsTUFHbkJFLFdBSG1CO0FBQUEsTUFHTkMsY0FITTs7QUFJMUIsTUFBTUMsVUFBVSxHQUFHSCxPQUFPLElBQUlDLFdBQVcsR0FBRyxDQUFsQixDQUExQjtBQUNBLE1BQU1HLFVBQVUsR0FBR0QsVUFBVSxHQUFHSCxPQUFoQztBQUNBLE1BQU1LLE9BQU8sR0FBR1AsT0FBTyxDQUFDUSxLQUFSLENBQWNGLFVBQWQsRUFBMEJELFVBQTFCLENBQWhCO0FBQ0EsTUFBTUksU0FBUyxHQUFHQyxJQUFJLENBQUNDLElBQUwsQ0FBVVgsT0FBTyxDQUFDWSxNQUFSLEdBQWlCVixPQUEzQixDQUFsQjtBQUVBLHNCQUNJO0FBQVMsYUFBUyxFQUFDLFNBQW5CO0FBQUEsY0FDS0ssT0FBTyxDQUFDTSxHQUFSLENBQVksVUFBQUMsT0FBTztBQUFBLDBCQUNoQjtBQUFBLGtCQUNLQSxPQUFPLENBQUNDO0FBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURnQjtBQUFBLEtBQW5CO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBU0gsQ0FsQkQ7O0dBQU1oQixJOztLQUFBQSxJOztBQW9CU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzkxMDQ5YWUzYzNlODczNjc5MjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuY29uc3QgYXBpID0gJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi8/b2Zmc2V0PTAmbGltaXQ9ODQxJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYXBpKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHBva2VkZXg6IGRhdGEucmVzdWx0c1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBIb21lID0gKHsgcG9rZWRleCB9KSA9PiB7XG5cbiAgICBjb25zdCBbcGVyUGFnZV0gPSB1c2VTdGF0ZSgxOClcbiAgICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDApXG4gICAgY29uc3QgdXBwZXJMaW1pdCA9IHBlclBhZ2UgKiAoY3VycmVudFBhZ2UgKyAxKVxuICAgIGNvbnN0IGxvd2VyTGltaXQgPSB1cHBlckxpbWl0IC0gcGVyUGFnZVxuICAgIGNvbnN0IGN1cnJlbnQgPSBwb2tlZGV4LnNsaWNlKGxvd2VyTGltaXQsIHVwcGVyTGltaXQpXG4gICAgY29uc3QgcGFnZUNvdW50ID0gTWF0aC5jZWlsKHBva2VkZXgubGVuZ3RoIC8gcGVyUGFnZSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInBva2VkZXhcIj5cbiAgICAgICAgICAgIHtjdXJyZW50Lm1hcChwb2tlbW9uID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICB7cG9rZW1vbi5uYW1lfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdLCJzb3VyY2VSb290IjoiIn0=