module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Pagination.jsx":
/*!***********************************!*\
  !*** ./components/Pagination.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-paginate */ "react-paginate");
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_paginate__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/mnt/c/Users/camil/Documents/Projects/PokeHunt-SSG/components/Pagination.jsx";



const Pagination = ({
  pageCount,
  currentPage,
  paginate
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: "pagination",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_paginate__WEBPACK_IMPORTED_MODULE_2___default.a, {
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
      lineNumber: 7,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ }),

/***/ "./components/Pokemon.jsx":
/*!********************************!*\
  !*** ./components/Pokemon.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Pokemon_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/Pokemon.module.scss */ "./components/styles/Pokemon.module.scss");
/* harmony import */ var _styles_Pokemon_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Pokemon_module_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/mnt/c/Users/camil/Documents/Projects/PokeHunt-SSG/components/Pokemon.jsx";



const Pokemon = ({
  id,
  children
}) => {
  const image = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_Pokemon_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.pokemon,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Pokemon_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.pokemon__img,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: image,
        alt: "pokemon"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Pokemon);

/***/ }),

/***/ "./components/styles/Pokemon.module.scss":
/*!***********************************************!*\
  !*** ./components/styles/Pokemon.module.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"pokemon": "Pokemon_pokemon__Iekfk",
	"pokemon__img": "Pokemon_pokemon__img__1KoLz"
};


/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Pagination */ "./components/Pagination.jsx");
/* harmony import */ var _components_Pokemon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Pokemon */ "./components/Pokemon.jsx");


var _jsxFileName = "/mnt/c/Users/camil/Documents/Projects/PokeHunt-SSG/pages/index.jsx";



const api = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=841';
async function getStaticProps() {
  const res = await fetch(api);
  const data = await res.json();
  return {
    props: {
      pokedex: data.results
    }
  };
}

const Home = ({
  pokedex
}) => {
  const {
    0: perPage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(18);
  const {
    0: currentPage,
    1: setCurrentPage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const upperLimit = perPage * (currentPage + 1);
  const lowerLimit = upperLimit - perPage;
  const current = pokedex.slice(lowerLimit, upperLimit);
  const pageCount = Math.ceil(pokedex.length / perPage);

  function paginate(page) {
    setCurrentPage(page.selected);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: "pokedex",
      children: current.map((pokemon, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Pokemon__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: index + 1 + perPage * currentPage,
        children: pokemon.name
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 21
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Pagination__WEBPACK_IMPORTED_MODULE_2__["default"], {
      pageCount: pageCount,
      currentPage: currentPage,
      paginate: paginate
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-paginate":
/*!*********************************!*\
  !*** external "react-paginate" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-paginate");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QYWdpbmF0aW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bva2Vtb24uanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3R5bGVzL1Bva2Vtb24ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcGFnaW5hdGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJQYWdpbmF0aW9uIiwicGFnZUNvdW50IiwiY3VycmVudFBhZ2UiLCJwYWdpbmF0ZSIsIlBva2Vtb24iLCJpZCIsImNoaWxkcmVuIiwiaW1hZ2UiLCJzdHlsZSIsInBva2Vtb24iLCJwb2tlbW9uX19pbWciLCJhcGkiLCJnZXRTdGF0aWNQcm9wcyIsInJlcyIsImZldGNoIiwiZGF0YSIsImpzb24iLCJwcm9wcyIsInBva2VkZXgiLCJyZXN1bHRzIiwiSG9tZSIsInBlclBhZ2UiLCJ1c2VTdGF0ZSIsInNldEN1cnJlbnRQYWdlIiwidXBwZXJMaW1pdCIsImxvd2VyTGltaXQiLCJjdXJyZW50Iiwic2xpY2UiLCJNYXRoIiwiY2VpbCIsImxlbmd0aCIsInBhZ2UiLCJzZWxlY3RlZCIsIm1hcCIsImluZGV4IiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Es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QUFDQSxRQUFNRSxVQUFVLEdBQUdILE9BQU8sSUFBSW5CLFdBQVcsR0FBRyxDQUFsQixDQUExQjtBQUNBLFFBQU11QixVQUFVLEdBQUdELFVBQVUsR0FBR0gsT0FBaEM7QUFDQSxRQUFNSyxPQUFPLEdBQUdSLE9BQU8sQ0FBQ1MsS0FBUixDQUFjRixVQUFkLEVBQTBCRCxVQUExQixDQUFoQjtBQUNBLFFBQU12QixTQUFTLEdBQUcyQixJQUFJLENBQUNDLElBQUwsQ0FBVVgsT0FBTyxDQUFDWSxNQUFSLEdBQWlCVCxPQUEzQixDQUFsQjs7QUFFQSxXQUFTbEIsUUFBVCxDQUFrQjRCLElBQWxCLEVBQXdCO0FBQ3BCUixrQkFBYyxDQUFDUSxJQUFJLENBQUNDLFFBQU4sQ0FBZDtBQUNIOztBQUVELHNCQUNJO0FBQUEsNEJBQ0k7QUFBUyxlQUFTLEVBQUMsU0FBbkI7QUFBQSxnQkFDS04sT0FBTyxDQUFDTyxHQUFSLENBQVksQ0FBQ3hCLE9BQUQsRUFBVXlCLEtBQVYsa0JBQ1QscUVBQUMsMkRBQUQ7QUFFQSxVQUFFLEVBQUdBLEtBQUssR0FBRyxDQUFULEdBQWViLE9BQU8sR0FBR25CLFdBRjdCO0FBQUEsa0JBR0tPLE9BQU8sQ0FBQzBCO0FBSGIsU0FDS0QsS0FETDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURIO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQVdJLHFFQUFDLDhEQUFEO0FBQ0EsZUFBUyxFQUFFakMsU0FEWDtBQUVBLGlCQUFXLEVBQUVDLFdBRmI7QUFHQSxjQUFRLEVBQUVDO0FBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYSjtBQUFBLGtCQURKO0FBa0JILENBL0JEOztBQWlDZWlCLG1FQUFmLEU7Ozs7Ozs7Ozs7O0FDakRBLGtDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc3hcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RQYWdpbmF0ZSBmcm9tICdyZWFjdC1wYWdpbmF0ZSdcblxuY29uc3QgUGFnaW5hdGlvbiA9ICh7IHBhZ2VDb3VudCwgY3VycmVudFBhZ2UsIHBhZ2luYXRlIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uXCI+XG4gICAgICAgICAgICA8UmVhY3RQYWdpbmF0ZVxuICAgICAgICAgICAgICAgIHByZXZpb3VzTGFiZWw9eydwcmV2J31cbiAgICAgICAgICAgICAgICBuZXh0TGFiZWw9eyduZXh0J31cbiAgICAgICAgICAgICAgICBicmVha0xhYmVsPXsnLi4uJ31cbiAgICAgICAgICAgICAgICBwYWdlQ291bnQ9e3BhZ2VDb3VudH1cbiAgICAgICAgICAgICAgICBwYWdlUmFuZ2VEaXNwbGF5ZWQ9ezEyfVxuICAgICAgICAgICAgICAgIG1hcmdpblBhZ2VzRGlzcGxheWVkPXszfVxuICAgICAgICAgICAgICAgIG9uUGFnZUNoYW5nZT17cGFnaW5hdGV9XG4gICAgICAgICAgICAgICAgcGFnZUNsYXNzTmFtZT17J3BhZ2UnfVxuICAgICAgICAgICAgICAgIHByZXZpb3VzQ2xhc3NOYW1lPXsncGFnZSd9XG4gICAgICAgICAgICAgICAgbmV4dENsYXNzTmFtZT17J3BhZ2UnfVxuICAgICAgICAgICAgICAgIHBhZ2VMaW5rQ2xhc3NOYW1lPXsnbGluayd9XG4gICAgICAgICAgICAgICAgbmV4dExpbmtDbGFzc05hbWU9eydsaW5rJ31cbiAgICAgICAgICAgICAgICBwcmV2aW91c0xpbmtDbGFzc05hbWU9eydsaW5rJ31cbiAgICAgICAgICAgICAgICBhY3RpdmVMaW5rQ2xhc3NOYW1lPXsnYWN0aXZlJ31cbiAgICAgICAgICAgICAgICBpbml0aWFsUGFnZT17Y3VycmVudFBhZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZXMvUG9rZW1vbi5tb2R1bGUuc2NzcydcblxuY29uc3QgUG9rZW1vbiA9ICh7IGlkLCBjaGlsZHJlbiB9KSA9PiB7XG4gICAgY29uc3QgaW1hZ2UgPSBgaHR0cHM6Ly9wb2tlcmVzLmJhc3Rpb25ib3Qub3JnL2ltYWdlcy9wb2tlbW9uLyR7aWR9LnBuZ2BcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUucG9rZW1vbn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUucG9rZW1vbl9faW1nfT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IGFsdD1cInBva2Vtb25cIi8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxoND57IGNoaWxkcmVuIH08L2g0PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBva2Vtb25cbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInBva2Vtb25cIjogXCJQb2tlbW9uX3Bva2Vtb25fX0lla2ZrXCIsXG5cdFwicG9rZW1vbl9faW1nXCI6IFwiUG9rZW1vbl9wb2tlbW9uX19pbWdfXzFLb0x6XCJcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnaW5hdGlvbidcbmltcG9ydCBQb2tlbW9uIGZyb20gJy4uL2NvbXBvbmVudHMvUG9rZW1vbidcblxuY29uc3QgYXBpID0gJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi8/b2Zmc2V0PTAmbGltaXQ9ODQxJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYXBpKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHBva2VkZXg6IGRhdGEucmVzdWx0c1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBIb21lID0gKHsgcG9rZWRleCB9KSA9PiB7XG5cbiAgICBjb25zdCBbcGVyUGFnZV0gPSB1c2VTdGF0ZSgxOClcbiAgICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDApXG4gICAgY29uc3QgdXBwZXJMaW1pdCA9IHBlclBhZ2UgKiAoY3VycmVudFBhZ2UgKyAxKVxuICAgIGNvbnN0IGxvd2VyTGltaXQgPSB1cHBlckxpbWl0IC0gcGVyUGFnZVxuICAgIGNvbnN0IGN1cnJlbnQgPSBwb2tlZGV4LnNsaWNlKGxvd2VyTGltaXQsIHVwcGVyTGltaXQpXG4gICAgY29uc3QgcGFnZUNvdW50ID0gTWF0aC5jZWlsKHBva2VkZXgubGVuZ3RoIC8gcGVyUGFnZSlcblxuICAgIGZ1bmN0aW9uIHBhZ2luYXRlKHBhZ2UpIHtcbiAgICAgICAgc2V0Q3VycmVudFBhZ2UocGFnZS5zZWxlY3RlZClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicG9rZWRleFwiPlxuICAgICAgICAgICAgICAgIHtjdXJyZW50Lm1hcCgocG9rZW1vbiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFBva2Vtb25cbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgaWQ9eyhpbmRleCArIDEpICsgKHBlclBhZ2UgKiBjdXJyZW50UGFnZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3Bva2Vtb24ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9Qb2tlbW9uPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICA8UGFnaW5hdGlvblxuICAgICAgICAgICAgcGFnZUNvdW50PXtwYWdlQ291bnR9XG4gICAgICAgICAgICBjdXJyZW50UGFnZT17Y3VycmVudFBhZ2V9XG4gICAgICAgICAgICBwYWdpbmF0ZT17cGFnaW5hdGV9Lz5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1wYWdpbmF0ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==