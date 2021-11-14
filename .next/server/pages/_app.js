module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/_app": 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Components/Loading.tsx":
/*!********************************!*\
  !*** ./Components/Loading.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ \"@emotion/core\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/emilykondziola/DEV/projects/emilykondziola.com/Components/Loading.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/** @jsx jsx */\n\n\nconst Loading = () => {\n  const Loading = _emotion_core__WEBPACK_IMPORTED_MODULE_1__[\"css\"]`\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    font-size: 2rem;\n    text-align: center;\n  `;\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"p\", {\n    css: Loading,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 10\n    }\n  }, \"WOW this website loads FAST\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Loading);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL0xvYWRpbmcudHN4P2EyMzQiXSwibmFtZXMiOlsiTG9hZGluZyIsImNzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxPQUFPLEdBQUcsTUFBTTtBQUNwQixRQUFNQSxPQUFPLEdBQUdDLGlEQUFJO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBUEU7QUFTQSxTQUFPO0FBQUcsT0FBRyxFQUFFRCxPQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBQVA7QUFDRCxDQVhEOztBQWFlQSxzRUFBZiIsImZpbGUiOiIuL0NvbXBvbmVudHMvTG9hZGluZy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcblxuY29uc3QgTG9hZGluZyA9ICgpID0+IHtcbiAgY29uc3QgTG9hZGluZyA9IGNzc2BcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGBcblxuICByZXR1cm4gPHAgY3NzPXtMb2FkaW5nfT5XT1cgdGhpcyB3ZWJzaXRlIGxvYWRzIEZBU1Q8L3A+XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/Loading.tsx\n");

/***/ }),

/***/ "./Components/ThemeProvider.js":
/*!*************************************!*\
  !*** ./Components/ThemeProvider.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _util_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @util/context */ \"./util/context.js\");\n/* harmony import */ var _util_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @util/reducer */ \"./util/reducer.js\");\n/* harmony import */ var _pages_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/index */ \"./pages/index.tsx\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @styles/theme */ \"./styles/theme.tsx\");\nvar _jsxFileName = \"/Users/emilykondziola/DEV/projects/emilykondziola.com/Components/ThemeProvider.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nconst GlobalStyles = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"createGlobalStyle\"]`\nbody, #root {\n    background: ${({\n  theme\n}) => theme.background};\n    color: ${({\n  theme\n}) => theme.text};\n    align-items: center;\n    padding: 0.5rem;\n    margin: 0;\n    width: 100%;\n    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\n      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n  }\n\n  a {\n    background: linear-gradient(to left, #41e975, #3381c5);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n    font-weight: 600;\n  }\n\n    * {\n      box-sizing: border-box;\n    }\n}\n`;\nconst light = {\n  text: _styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"theme\"].colors.lightBlue,\n  background: '#fff'\n};\nconst dark = {\n  text: '#fff',\n  background: _styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"theme\"].colors.darkBlue\n};\n\nconst Theme = () => {\n  const {\n    0: state,\n    1: dispatch\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useReducer\"])(_util_reducer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    isDark: true\n  });\n  return __jsx(_util_context__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Provider, {\n    value: {\n      state,\n      dispatch\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 5\n    }\n  }, __jsx(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"ThemeProvider\"], {\n    theme: state.isDark ? dark : light,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }\n  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(GlobalStyles, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 11\n    }\n  }), __jsx(_pages_index__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 11\n    }\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Theme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL1RoZW1lUHJvdmlkZXIuanM/MWMyYiJdLCJuYW1lcyI6WyJHbG9iYWxTdHlsZXMiLCJjcmVhdGVHbG9iYWxTdHlsZSIsInRoZW1lIiwiYmFja2dyb3VuZCIsInRleHQiLCJsaWdodCIsImNvbG9ycyIsImxpZ2h0Qmx1ZSIsImRhcmsiLCJkYXJrQmx1ZSIsIlRoZW1lIiwic3RhdGUiLCJkaXNwYXRjaCIsInVzZVJlZHVjZXIiLCJSZWR1Y2VyIiwiaXNEYXJrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFlBQVksR0FBR0MsbUVBQWtCO0FBQ3ZDO0FBQ0Esa0JBQWtCLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsVUFBVztBQUNsRCxhQUFhLENBQUM7QUFBRUQ7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0UsSUFBSztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBdkJBO0FBeUJBLE1BQU1DLEtBQUssR0FBRztBQUNaRCxNQUFJLEVBQUVGLG1EQUFLLENBQUNJLE1BQU4sQ0FBYUMsU0FEUDtBQUVaSixZQUFVLEVBQUU7QUFGQSxDQUFkO0FBS0EsTUFBTUssSUFBSSxHQUFHO0FBQ1hKLE1BQUksRUFBRSxNQURLO0FBRVhELFlBQVUsRUFBRUQsbURBQUssQ0FBQ0ksTUFBTixDQUFhRztBQUZkLENBQWI7O0FBS0EsTUFBTUMsS0FBSyxHQUFHLE1BQU07QUFDbEIsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQyx3REFBVSxDQUFDQyxxREFBRCxFQUFVO0FBQzVDQyxVQUFNLEVBQUU7QUFEb0MsR0FBVixDQUFwQztBQUlBLFNBQ0UsTUFBQyxxREFBRCxDQUFTLFFBQVQ7QUFBa0IsU0FBSyxFQUFFO0FBQUVKLFdBQUY7QUFBU0M7QUFBVCxLQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrREFBRDtBQUFlLFNBQUssRUFBRUQsS0FBSyxDQUFDSSxNQUFOLEdBQWVQLElBQWYsR0FBc0JILEtBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxtRUFDRSxNQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixDQURGLENBREY7QUFVRCxDQWZEOztBQWlCZUssb0VBQWYiLCJmaWxlIjoiLi9Db21wb25lbnRzL1RoZW1lUHJvdmlkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciwgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBDb250ZXh0IGZyb20gJ0B1dGlsL2NvbnRleHQnXG5pbXBvcnQgUmVkdWNlciBmcm9tICdAdXRpbC9yZWR1Y2VyJ1xuaW1wb3J0IEluZGV4IGZyb20gJy4uL3BhZ2VzL2luZGV4J1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICdAc3R5bGVzL3RoZW1lJ1xuXG5jb25zdCBHbG9iYWxTdHlsZXMgPSBjcmVhdGVHbG9iYWxTdHlsZWBcbmJvZHksICNyb290IHtcbiAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJhY2tncm91bmR9O1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHR9O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIG1hcmdpbjogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLCBPeHlnZW4sXG4gICAgICBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZjtcbiAgfVxuXG4gIGEge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjNDFlOTc1LCAjMzM4MWM1KTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG5cbiAgICAqIHtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxufVxuYFxuXG5jb25zdCBsaWdodCA9IHtcbiAgdGV4dDogdGhlbWUuY29sb3JzLmxpZ2h0Qmx1ZSxcbiAgYmFja2dyb3VuZDogJyNmZmYnLFxufVxuXG5jb25zdCBkYXJrID0ge1xuICB0ZXh0OiAnI2ZmZicsXG4gIGJhY2tncm91bmQ6IHRoZW1lLmNvbG9ycy5kYXJrQmx1ZSxcbn1cblxuY29uc3QgVGhlbWUgPSAoKSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihSZWR1Y2VyLCB7XG4gICAgaXNEYXJrOiB0cnVlLFxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgc3RhdGUsIGRpc3BhdGNoIH19PlxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3N0YXRlLmlzRGFyayA/IGRhcmsgOiBsaWdodH0+XG4gICAgICAgIDw+XG4gICAgICAgICAgPEdsb2JhbFN0eWxlcyAvPlxuICAgICAgICAgIDxJbmRleCAvPlxuICAgICAgICA8Lz5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICA8L0NvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/ThemeProvider.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Components_ThemeProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/ThemeProvider */ \"./Components/ThemeProvider.js\");\nvar _jsxFileName = \"/Users/emilykondziola/DEV/projects/emilykondziola.com/pages/_app.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return __jsx(_Components_ThemeProvider__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 5\n    }\n  }, __jsx(Component, _extends({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }\n  })));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBeUM7QUFDdkMsU0FDRSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFNBQUQsZUFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREYsQ0FERjtBQUtEOztBQUVjRixvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGhlbWUgZnJvbSAnLi4vQ29tcG9uZW50cy9UaGVtZVByb3ZpZGVyJ1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8VGhlbWU+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9UaGVtZT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ \"@emotion/core\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"next/dynamic\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Loading */ \"./Components/Loading.tsx\");\nvar _jsxFileName = \"/Users/emilykondziola/DEV/projects/emilykondziola.com/pages/index.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/** @jsx jsx */\n\n\n\nconst Home = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! @components/Home */ \"./Components/Home.tsx\")), {\n  loading: () => Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(_components_Loading__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 18\n    }\n  }),\n  ssr: false,\n  loadableGenerated: {\n    webpack: () => [/*require.resolve*/(/*! @components/Home */ \"./Components/Home.tsx\")],\n    modules: ['@components/Home']\n  }\n});\n\nconst Index = () => {\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(Home, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJIb21lIiwiZHluYW1pYyIsImxvYWRpbmciLCJzc3IiLCJJbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNQSxJQUFJLEdBQUdDLG1EQUFPLENBQUMsTUFBTSw4SEFBUCxFQUFtQztBQUNyREMsU0FBTyxFQUFFLE1BQU0sMERBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURzQztBQUVyREMsS0FBRyxFQUFFLEtBRmdEO0FBQUE7QUFBQSx3Q0FBckIsK0NBQXFCO0FBQUEsY0FBckIsa0JBQXFCO0FBQUE7QUFBQSxDQUFuQyxDQUFwQjs7QUFLQSxNQUFNQyxLQUFLLEdBQUcsTUFBTTtBQUNsQixTQUNFLHVIQUNFLDBEQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREY7QUFLRCxDQU5EOztBQVFlQSxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcbmltcG9ydCBMb2FkaW5nIGZyb20gJ0Bjb21wb25lbnRzL0xvYWRpbmcnXG5jb25zdCBIb21lID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ0Bjb21wb25lbnRzL0hvbWUnKSwge1xuICBsb2FkaW5nOiAoKSA9PiA8TG9hZGluZyAvPixcbiAgc3NyOiBmYWxzZSxcbn0pXG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SG9tZSAvPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./styles/theme.tsx":
/*!**************************!*\
  !*** ./styles/theme.tsx ***!
  \**************************/
/*! exports provided: theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"theme\", function() { return theme; });\nconst theme = {\n  mediaQuery: {\n    ipad: '@media screen and (min-width: 702px)',\n    desktop: '@media screen and (min-width: 1200px)'\n  },\n  colors: {\n    lightBlue: '#015c92',\n    darkBlue: 'rgb(2, 0, 36)'\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvdGhlbWUudHN4PzVhM2YiXSwibmFtZXMiOlsidGhlbWUiLCJtZWRpYVF1ZXJ5IiwiaXBhZCIsImRlc2t0b3AiLCJjb2xvcnMiLCJsaWdodEJsdWUiLCJkYXJrQmx1ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFPLE1BQU1BLEtBQUssR0FBRztBQUNuQkMsWUFBVSxFQUFFO0FBQ1ZDLFFBQUksRUFBRSxzQ0FESTtBQUVWQyxXQUFPLEVBQUU7QUFGQyxHQURPO0FBTW5CQyxRQUFNLEVBQUU7QUFDTkMsYUFBUyxFQUFFLFNBREw7QUFFTkMsWUFBUSxFQUFFO0FBRko7QUFOVyxDQUFkIiwiZmlsZSI6Ii4vc3R5bGVzL3RoZW1lLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCB0aGVtZSA9IHtcbiAgbWVkaWFRdWVyeToge1xuICAgIGlwYWQ6ICdAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDJweCknLFxuICAgIGRlc2t0b3A6ICdAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpJyxcbiAgfSxcblxuICBjb2xvcnM6IHtcbiAgICBsaWdodEJsdWU6ICcjMDE1YzkyJyxcbiAgICBkYXJrQmx1ZTogJ3JnYigyLCAwLCAzNiknLFxuICB9LFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/theme.tsx\n");

/***/ }),

/***/ "./util/context.js":
/*!*************************!*\
  !*** ./util/context.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlsL2NvbnRleHQuanM/NWE3YiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWVBLHdIQUFLLENBQUNDLGFBQU4sQ0FBb0IsSUFBcEIsQ0FBZiIsImZpbGUiOiIuL3V0aWwvY29udGV4dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./util/context.js\n");

/***/ }),

/***/ "./util/reducer.js":
/*!*************************!*\
  !*** ./util/reducer.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Reducer = (state = {}, action) => {\n  switch (action.type) {\n    case 'TOGGLE_DARK_MODE':\n      return {\n        isDark: !state.isDark\n      };\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlsL3JlZHVjZXIuanM/Y2ZlMiJdLCJuYW1lcyI6WyJSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiaXNEYXJrIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU1BLE9BQU8sR0FBRyxDQUFDQyxLQUFLLEdBQUcsRUFBVCxFQUFhQyxNQUFiLEtBQXdCO0FBQ3RDLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUssa0JBQUw7QUFDRSxhQUFPO0FBQ0xDLGNBQU0sRUFBRSxDQUFDSCxLQUFLLENBQUNHO0FBRFYsT0FBUDs7QUFHRjtBQUNFLGFBQU9ILEtBQVA7QUFOSjtBQVFELENBVEQ7O0FBV2VELHNFQUFmIiwiZmlsZSI6Ii4vdXRpbC9yZWR1Y2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUmVkdWNlciA9IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ1RPR0dMRV9EQVJLX01PREUnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNEYXJrOiAhc3RhdGUuaXNEYXJrLFxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWR1Y2VyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./util/reducer.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@emotion/core":
/*!********************************!*\
  !*** external "@emotion/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@emotion/core\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZW1vdGlvbi9jb3JlXCI/Y2IxNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAZW1vdGlvbi9jb3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGVtb3Rpb24vY29yZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@emotion/core\n");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dynamic\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2R5bmFtaWNcIj82ZDNmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvZHluYW1pYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZHluYW1pY1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/dynamic\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-switch":
/*!*******************************!*\
  !*** external "react-switch" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-switch\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zd2l0Y2hcIj84NTVmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LXN3aXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXN3aXRjaFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-switch\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });