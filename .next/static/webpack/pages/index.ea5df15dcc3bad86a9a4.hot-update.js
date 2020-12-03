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
/* harmony import */ var _styles_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Pagination.module.scss */ "./components/styles/Pagination.module.scss");
/* harmony import */ var _styles_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "/mnt/c/Users/camil/Documents/Projects/PokeHunt-SSG/components/Pagination.jsx",
    _this = undefined;





var Pagination = function Pagination(_ref) {
  var pageCount = _ref.pageCount,
      currentPage = _ref.currentPage;
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
    lineNumber: 8,
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

/***/ "./components/styles/Pagination.module.scss":
/*!**************************************************!*\
  !*** ./components/styles/Pagination.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Pagination.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/styles/Pagination.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Pagination.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/styles/Pagination.module.scss",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Pagination.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/styles/Pagination.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/styles/Pagination.module.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/styles/Pagination.module.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".Pagination_pagination__17jxM {\n  position: fixed;\n  bottom: 2%;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n     -moz-transform: translateX(-50%);\n          transform: translateX(-50%);\n  z-index: 1;\n  width: 90%;\n  background-color: #fafafa;\n  border-radius: 5px;\n  overflow: auto;\n  padding: 0 1rem;\n}\n.Pagination_pagination__17jxM::-webkit-scrollbar {\n  display: none;\n}\n.Pagination_pagination__17jxM ul {\n  list-style: none;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  padding: 0;\n  margin: 0;\n  -webkit-align-items: center;\n     -moz-box-align: center;\n          align-items: center;\n}\n\n.Pagination_page__397r5 {\n  -webkit-flex: 1 1;\n     -moz-box-flex: 1;\n          flex: 1 1;\n  padding: 1rem;\n  cursor: pointer;\n}\n\n.Pagination_link__2acms {\n  color: #00343d;\n  font-weight: 500;\n  padding: 0.5rem;\n  display: block;\n  border-radius: 5px;\n  text-align: center;\n}\n.Pagination_link__2acms:hover {\n  background-color: #0bd8a2;\n}\n.Pagination_link__2acms:focus {\n  outline: none;\n}\n\n.Pagination_active__23isb {\n  background-color: #dafff3;\n}", "",{"version":3,"sources":["webpack://Pagination.module.scss"],"names":[],"mappings":"AAAA;EACI,eAAA;EACA,UAAA;EACA,SAAA;EACA,mCAAA;KAAA,gCAAA;UAAA,2BAAA;EACA,UAAA;EACA,UAAA;EACA,yBAAA;EACA,kBAAA;EACA,cAAA;EACA,eAAA;AACJ;AAAI;EACI,aAAA;AAER;AAAI;EACI,gBAAA;EACA,qBAAA;EAAA,iBAAA;EAAA,aAAA;EACA,UAAA;EACA,SAAA;EACA,2BAAA;KAAA,sBAAA;UAAA,mBAAA;AAER;;AAEA;EACI,iBAAA;KAAA,gBAAA;UAAA,SAAA;EACA,aAAA;EACA,eAAA;AACJ;;AAEA;EACI,cAAA;EACA,gBAAA;EACA,eAAA;EACA,cAAA;EACA,kBAAA;EACA,kBAAA;AACJ;AAAI;EACI,yBAAA;AAER;AAAI;EACI,aAAA;AAER;;AAEA;EACI,yBAAA;AACJ","sourcesContent":[".pagination {\n    position: fixed;\n    bottom: 2%;\n    left: 50%;\n    transform: translateX(-50%);\n    z-index: 1;\n    width: 90%;\n    background-color: #fafafa;\n    border-radius: 5px;\n    overflow: auto;\n    padding: 0 1rem;\n    &::-webkit-scrollbar {\n        display: none;\n    }\n    ul {\n        list-style: none;\n        display: flex;\n        padding: 0;\n        margin: 0;\n        align-items: center;\n    }\n}\n\n.page {\n    flex: 1;\n    padding: 1rem;\n    cursor: pointer;\n}\n\n.link {\n    color: #00343d;\n    font-weight: 500;\n    padding: 0.5rem;\n    display: block;\n    border-radius: 5px;\n    text-align: center;\n    &:hover {\n        background-color: #0bd8a2;\n    }\n    &:focus {\n        outline: none;\n    }\n}\n\n.active {\n    background-color: #dafff3;\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"pagination": "Pagination_pagination__17jxM",
	"page": "Pagination_page__397r5",
	"link": "Pagination_link__2acms",
	"active": "Pagination_active__23isb"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdpbmF0aW9uLmpzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdHlsZXMvUGFnaW5hdGlvbi5tb2R1bGUuc2Nzcz8yNTI0Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3N0eWxlcy9QYWdpbmF0aW9uLm1vZHVsZS5zY3NzIl0sIm5hbWVzIjpbIlBhZ2luYXRpb24iLCJwYWdlQ291bnQiLCJjdXJyZW50UGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQWdDO0FBQUEsTUFBN0JDLFNBQTZCLFFBQTdCQSxTQUE2QjtBQUFBLE1BQWxCQyxXQUFrQixRQUFsQkEsV0FBa0I7QUFDL0Msc0JBQ0kscUVBQUMscURBQUQ7QUFDSSxpQkFBYSxFQUFFLE1BRG5CO0FBRUksYUFBUyxFQUFFLE1BRmY7QUFHSSxjQUFVLEVBQUUsS0FIaEI7QUFJSSxhQUFTLEVBQUVELFNBSmY7QUFLSSxzQkFBa0IsRUFBRSxFQUx4QjtBQU1JLHdCQUFvQixFQUFFLENBTjFCLENBT0k7QUFQSjtBQVFJLHNCQUFrQixFQUFFLFlBUnhCO0FBU0ksaUJBQWEsRUFBRSxNQVRuQjtBQVVJLHFCQUFpQixFQUFFLE1BVnZCO0FBV0ksaUJBQWEsRUFBRSxNQVhuQjtBQVlJLHFCQUFpQixFQUFFLE1BWnZCO0FBYUkscUJBQWlCLEVBQUUsTUFidkI7QUFjSSx5QkFBcUIsRUFBRSxNQWQzQjtBQWVJLHVCQUFtQixFQUFFLFFBZnpCO0FBZ0JJLGVBQVcsRUFBRUM7QUFoQmpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQW9CSCxDQXJCRDs7S0FBTUYsVTtBQXVCU0EseUVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCQSxVQUFVLG1CQUFPLENBQUMsc0pBQTJFO0FBQzdGLDBCQUEwQixtQkFBTyxDQUFDLGdnQkFBb1M7O0FBRXRVOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUEsbUNBQW1DO0FBQ25DO0FBQ0Esc0VBQXNFLHdDQUF3QztBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxJQUFJLElBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLGdnQkFBb1M7QUFDMVM7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyxnZ0JBQW9TOztBQUU5VDs7QUFFQTtBQUNBLDRCQUE0QixRQUFTO0FBQ3JDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLHNDOzs7Ozs7Ozs7OztBQzdFQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHdHQUFtRDtBQUM3RjtBQUNBO0FBQ0EsOEJBQThCLFFBQVMsa0NBQWtDLG9CQUFvQixlQUFlLGNBQWMsd0NBQXdDLHdDQUF3Qyx3Q0FBd0MsZUFBZSxlQUFlLDhCQUE4Qix1QkFBdUIsbUJBQW1CLG9CQUFvQixHQUFHLG9EQUFvRCxrQkFBa0IsR0FBRyxvQ0FBb0MscUJBQXFCLDBCQUEwQixzQkFBc0Isa0JBQWtCLGVBQWUsY0FBYyxnQ0FBZ0MsOEJBQThCLGdDQUFnQyxHQUFHLDZCQUE2QixzQkFBc0Isd0JBQXdCLHNCQUFzQixrQkFBa0Isb0JBQW9CLEdBQUcsNkJBQTZCLG1CQUFtQixxQkFBcUIsb0JBQW9CLG1CQUFtQix1QkFBdUIsdUJBQXVCLEdBQUcsaUNBQWlDLDhCQUE4QixHQUFHLGlDQUFpQyxrQkFBa0IsR0FBRywrQkFBK0IsOEJBQThCLEdBQUcsT0FBTyx1RkFBdUYsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLHNDQUFzQyxzQkFBc0IsaUJBQWlCLGdCQUFnQixrQ0FBa0MsaUJBQWlCLGlCQUFpQixnQ0FBZ0MseUJBQXlCLHFCQUFxQixzQkFBc0IsNEJBQTRCLHdCQUF3QixPQUFPLFVBQVUsMkJBQTJCLHdCQUF3QixxQkFBcUIsb0JBQW9CLDhCQUE4QixPQUFPLEdBQUcsV0FBVyxjQUFjLG9CQUFvQixzQkFBc0IsR0FBRyxXQUFXLHFCQUFxQix1QkFBdUIsc0JBQXNCLHFCQUFxQix5QkFBeUIseUJBQXlCLGVBQWUsb0NBQW9DLE9BQU8sZUFBZSx3QkFBd0IsT0FBTyxHQUFHLGFBQWEsZ0NBQWdDLEdBQUcsbUJBQW1CO0FBQ3ZnRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmVhNWRmMTVkY2MzYmFkODZhOWE0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RQYWdpbmF0ZSBmcm9tICdyZWFjdC1wYWdpbmF0ZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvUGFnaW5hdGlvbi5tb2R1bGUuc2NzcydcblxuXG5jb25zdCBQYWdpbmF0aW9uID0gKHsgcGFnZUNvdW50LCBjdXJyZW50UGFnZSB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJlYWN0UGFnaW5hdGVcbiAgICAgICAgICAgIHByZXZpb3VzTGFiZWw9eydwcmV2J31cbiAgICAgICAgICAgIG5leHRMYWJlbD17J25leHQnfVxuICAgICAgICAgICAgYnJlYWtMYWJlbD17Jy4uLid9XG4gICAgICAgICAgICBwYWdlQ291bnQ9e3BhZ2VDb3VudH1cbiAgICAgICAgICAgIHBhZ2VSYW5nZURpc3BsYXllZD17MTJ9XG4gICAgICAgICAgICBtYXJnaW5QYWdlc0Rpc3BsYXllZD17M31cbiAgICAgICAgICAgIC8vIG9uUGFnZUNoYW5nZT17cGFnaW5hdGV9XG4gICAgICAgICAgICBjb250YWluZXJDbGFzc05hbWU9eydwYWdpbmF0aW9uJ31cbiAgICAgICAgICAgIHBhZ2VDbGFzc05hbWU9eydwYWdlJ31cbiAgICAgICAgICAgIHByZXZpb3VzQ2xhc3NOYW1lPXsncGFnZSd9XG4gICAgICAgICAgICBuZXh0Q2xhc3NOYW1lPXsncGFnZSd9XG4gICAgICAgICAgICBwYWdlTGlua0NsYXNzTmFtZT17J2xpbmsnfVxuICAgICAgICAgICAgbmV4dExpbmtDbGFzc05hbWU9eydsaW5rJ31cbiAgICAgICAgICAgIHByZXZpb3VzTGlua0NsYXNzTmFtZT17J2xpbmsnfVxuICAgICAgICAgICAgYWN0aXZlTGlua0NsYXNzTmFtZT17J2FjdGl2ZSd9XG4gICAgICAgICAgICBpbml0aWFsUGFnZT17Y3VycmVudFBhZ2V9XG4gICAgICAgIC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vUGFnaW5hdGlvbi5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiKSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9QYWdpbmF0aW9uLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL1BhZ2luYXRpb24ubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLlBhZ2luYXRpb25fcGFnaW5hdGlvbl9fMTdqeE0ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAyJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIHotaW5kZXg6IDE7XFxuICB3aWR0aDogOTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbn1cXG4uUGFnaW5hdGlvbl9wYWdpbmF0aW9uX18xN2p4TTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLlBhZ2luYXRpb25fcGFnaW5hdGlvbl9fMTdqeE0gdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAtbW96LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uUGFnaW5hdGlvbl9wYWdlX18zOTdyNSB7XFxuICAtd2Via2l0LWZsZXg6IDEgMTtcXG4gICAgIC1tb3otYm94LWZsZXg6IDE7XFxuICAgICAgICAgIGZsZXg6IDEgMTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5QYWdpbmF0aW9uX2xpbmtfXzJhY21zIHtcXG4gIGNvbG9yOiAjMDAzNDNkO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uUGFnaW5hdGlvbl9saW5rX18yYWNtczpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGJkOGEyO1xcbn1cXG4uUGFnaW5hdGlvbl9saW5rX18yYWNtczpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uUGFnaW5hdGlvbl9hY3RpdmVfXzIzaXNiIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYWZmZjM7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9QYWdpbmF0aW9uLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsbUNBQUE7S0FBQSxnQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFDSjtBQUFJO0VBQ0ksYUFBQTtBQUVSO0FBQUk7RUFDSSxnQkFBQTtFQUNBLHFCQUFBO0VBQUEsaUJBQUE7RUFBQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtLQUFBLHNCQUFBO1VBQUEsbUJBQUE7QUFFUjs7QUFFQTtFQUNJLGlCQUFBO0tBQUEsZ0JBQUE7VUFBQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQUk7RUFDSSx5QkFBQTtBQUVSO0FBQUk7RUFDSSxhQUFBO0FBRVI7O0FBRUE7RUFDSSx5QkFBQTtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5wYWdpbmF0aW9uIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDIlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgcGFkZGluZzogMCAxcmVtO1xcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuICAgIHVsIHtcXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG59XFxuXFxuLnBhZ2Uge1xcbiAgICBmbGV4OiAxO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5saW5rIHtcXG4gICAgY29sb3I6ICMwMDM0M2Q7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAmOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwYmQ4YTI7XFxuICAgIH1cXG4gICAgJjpmb2N1cyB7XFxuICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICB9XFxufVxcblxcbi5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFmZmYzO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJwYWdpbmF0aW9uXCI6IFwiUGFnaW5hdGlvbl9wYWdpbmF0aW9uX18xN2p4TVwiLFxuXHRcInBhZ2VcIjogXCJQYWdpbmF0aW9uX3BhZ2VfXzM5N3I1XCIsXG5cdFwibGlua1wiOiBcIlBhZ2luYXRpb25fbGlua19fMmFjbXNcIixcblx0XCJhY3RpdmVcIjogXCJQYWdpbmF0aW9uX2FjdGl2ZV9fMjNpc2JcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9