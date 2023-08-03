/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/comments.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/comments.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.modal-background {\r\n  position: fixed;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  top: 0;\r\n  display: none;\r\n  place-items: center;\r\n  z-index: 1;\r\n  padding: 0.5em 0;\r\n  overflow: auto;\r\n}\r\n\r\n.modal-background.active {\r\n  display: grid;\r\n  background-color: rgb(0, 0, 0, 0.35);\r\n}\r\n\r\n.modal {\r\n  border-radius: 1rem;\r\n  background-color: var(--CL-neutral-white);\r\n  width: 95%;\r\n  max-width: 450px;\r\n  margin: auto;\r\n  padding: 0.5em;\r\n}\r\n\r\n.modal-header {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.modal-close {\r\n  border: none;\r\n  background: none;\r\n  font-size: 1rem;\r\n  cursor: pointer;\r\n  transition: 0.25s;\r\n  position: relative;\r\n  border-radius: 50%;\r\n  display: grid;\r\n  place-items: center;\r\n  padding: 0.5em 0.65em;\r\n}\r\n\r\n.modal-close:hover {\r\n  background-color: var(--CL-primary-blue-gray);\r\n  color: var(--CL-primary-blue-light);\r\n  transform: scale(1.2);\r\n}\r\n\r\n.modal-image {\r\n  margin: 0.25em auto;\r\n  width: 300px;\r\n  height: 200px;\r\n  object-fit: cover;\r\n  border-radius: 0.5rem;\r\n  box-shadow: 0 5px 5px 2px var(--CL-primary-blue-gray);\r\n}\r\n\r\n.modal-title {\r\n  text-align: center;\r\n  font-size: 1rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.modal-list {\r\n  padding: 0 0 0 1.3em;\r\n  list-style-type: none;\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n}\r\n\r\n.modal-item {\r\n  font-size: 0.85rem;\r\n  transition: transform 0.25s;\r\n}\r\n\r\n.modal-item.active > * {\r\n  font-style: italic;\r\n  color: var(--CL-primary-blue-light);\r\n}\r\n\r\n.modal-item.active:hover {\r\n  transform: translateX(1rem);\r\n}\r\n\r\n/* Comments Section */\r\n.modal-text {\r\n  text-align: center;\r\n}\r\n\r\n.modal-comments {\r\n  display: grid;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  max-height: 5em;\r\n  overflow-y: auto;\r\n}\r\n\r\n.modal-comment {\r\n  border: 1px solid var(--CL-primary-blue-gray);\r\n  width: 90%;\r\n  max-width: 23em;\r\n  margin: 0 auto;\r\n  font-size: 0.9rem;\r\n  padding: 0.35em 0;\r\n}\r\n\r\n/* Modal Form */\r\n.form-group {\r\n  display: grid;\r\n  width: 90%;\r\n  max-width: 23em;\r\n  margin: 0.5em auto;\r\n  gap: 0.25em;\r\n  overflow: auto;\r\n}\r\n\r\n.form-label,\r\n.form-button,\r\n.form-input {\r\n  font-size: 0.85rem;\r\n}\r\n\r\n.form-input {\r\n  padding: 0.25em;\r\n}\r\n\r\n.form-textarea {\r\n  min-height: 3em;\r\n  max-height: 3em;\r\n  resize: none;\r\n}\r\n\r\n.form-button {\r\n  padding: 0.5em 0;\r\n  font-weight: bold;\r\n  background-color: var(--CL-primary-blue-light);\r\n  color: var(--CL-neutral-white);\r\n  border: none;\r\n  cursor: pointer;\r\n  margin: 0.5em 0 0 0;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .modal {\r\n    margin: auto;\r\n    padding: 1em;\r\n  }\r\n\r\n  .modal-title {\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  .modal-image {\r\n    width: 375px;\r\n    height: 225px;\r\n  }\r\n\r\n  .modal-list {\r\n    padding: 0 0 0 3.25em;\r\n  }\r\n\r\n  .modal-item {\r\n    font-size: 1rem;\r\n  }\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-template/./src/css/comments.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/footer.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/footer.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.footer {\r\n  padding: 1em 0;\r\n  background-color: var(--CL-primary-blue-dark);\r\n  box-shadow: 0 -3px 5px var(--CL-primary-blue-dark);\r\n  margin: auto 0 0 0;\r\n}\r\n\r\n.footer-description {\r\n  font-size: 0.9rem;\r\n  text-align: center;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .footer {\r\n    padding: 2em 0;\r\n  }\r\n\r\n  .footer-description {\r\n    text-align: left;\r\n  }\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-template/./src/css/footer.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/header.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/header.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.header {\r\n  padding: 1em 0;\r\n  box-shadow: 0 3px 5px var(--CL-primary-blue-dark);\r\n}\r\n\r\n.header-title {\r\n  font-size: 1.5rem;\r\n  margin: 0;\r\n  line-height: 1.1;\r\n}\r\n\r\n.header-flex {\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 1em;\r\n}\r\n\r\n.header-logo {\r\n  max-width: 2.5em;\r\n}\r\n\r\n.header-list {\r\n  padding: 0;\r\n  list-style-type: none;\r\n  margin: 0;\r\n}\r\n\r\n.header-item {\r\n  transition: transform 0.25s;\r\n}\r\n\r\n.header-item:hover {\r\n  transform: translateY(-0.35em);\r\n}\r\n\r\n.header-link {\r\n  color: var(--CL-primary-blue-light);\r\n}\r\n\r\n.header-item:hover .header-link {\r\n  text-decoration: none;\r\n}\r\n\r\n.header-link.active {\r\n  font-weight: bold;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .header {\r\n    padding: 2em 0;\r\n  }\r\n\r\n  .header-flex {\r\n    flex-direction: row;\r\n  }\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-template/./src/css/header.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/home.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/home.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.h1 {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.cards {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-around;\r\n}\r\n\r\n.card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 20px;\r\n  background-color: var(--CL-primary-blue-dark);\r\n  padding: 30px;\r\n  border-radius: 8px;\r\n}\r\n\r\n.card-img {\r\n  height: 200px;\r\n  width: 300px;\r\n  object-fit: cover;\r\n  border-radius: 0.5rem;\r\n}\r\n\r\n.small-cont {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding-top: 20px;\r\n}\r\n\r\n.h3 {\r\n  font-size: 0.95rem;\r\n}\r\n\r\n.buttons {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.card-btn {\r\n  margin: 10px;\r\n  padding: 12px 8px;\r\n  width: 200px;\r\n  border-radius: 4px;\r\n  color: antiquewhite;\r\n  background-color: var(--CL-primary-blue-light);\r\n  font-size: large;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n  border: none;\r\n  transition: 0.25s;\r\n}\r\n\r\n.card-btn:hover {\r\n  background-color: var(--CL-neutral-black);\r\n}\r\n\r\n.likes {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.likes-count {\r\n  margin: 0;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-template/./src/css/home.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.cdnfonts.com/css/poppins);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n  --CL-primary-blue-light: #386bf3;\r\n  --CL-primary-blue-dark: #f4f7fc;\r\n  --CL-primary-blue-gray: #ebeef0;\r\n  --CL-neutral-white: #fff;\r\n  --CL-neutral-black: #000;\r\n  --FF-poppins: 'Poppins', sans-serif;\r\n}\r\n\r\n*,\r\n*::after,\r\n*::before {\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  font-family: var(--FF-poppins);\r\n  margin: 0;\r\n}\r\n\r\nimg,\r\nsvg,\r\nvideo {\r\n  display: block;\r\n  max-width: 100%;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: var(--CL-neutral-black);\r\n}\r\n\r\ninput,\r\ntextarea,\r\nlabel,\r\nbutton {\r\n  font-family: var(--FF-poppins);\r\n}\r\n\r\n/* main {\r\n  height: 71.5%;\r\n} */\r\n\r\n/* Container */\r\n.container {\r\n  max-width: 1280px;\r\n  width: 95%;\r\n  margin: 0 auto;\r\n}\r\n\r\n/* Flex */\r\n.d-flex {\r\n  display: flex;\r\n}\r\n\r\n.align-center {\r\n  align-items: center;\r\n}\r\n\r\n.justify-between {\r\n  justify-content: space-between;\r\n}\r\n\r\n/* Font */\r\n.fw-bold {\r\n  font-weight: bold;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-template/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-template/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-template/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/comments.css":
/*!******************************!*\
  !*** ./src/css/comments.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_comments_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./comments.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/comments.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_comments_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_comments_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_comments_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_comments_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-template/./src/css/comments.css?");

/***/ }),

/***/ "./src/css/footer.css":
/*!****************************!*\
  !*** ./src/css/footer.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./footer.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/footer.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-template/./src/css/footer.css?");

/***/ }),

/***/ "./src/css/header.css":
/*!****************************!*\
  !*** ./src/css/header.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./header.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/header.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-template/./src/css/header.css?");

/***/ }),

/***/ "./src/css/home.css":
/*!**************************!*\
  !*** ./src/css/home.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./home.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/home.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-template/./src/css/home.css?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-template/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _css_home_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/home.css */ \"./src/css/home.css\");\n/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/cards */ \"./src/modules/cards.js\");\n/* harmony import */ var _css_header_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/header.css */ \"./src/css/header.css\");\n/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/header */ \"./src/modules/header.js\");\n/* harmony import */ var _css_footer_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/footer.css */ \"./src/css/footer.css\");\n/* harmony import */ var _css_comments_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./css/comments.css */ \"./src/css/comments.css\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_cards__WEBPACK_IMPORTED_MODULE_2__]);\n_modules_cards__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n/* Home Page */\n\n\n/* Header CSS & JS */\n\n\n/* Footer CSS & JS */\n\n/* PopUp Window */\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://webpack-template/./src/index.js?");

/***/ }),

/***/ "./src/modules/cards.js":
/*!******************************!*\
  !*** ./src/modules/cards.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _unsplash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unsplash */ \"./src/modules/unsplash.js\");\n/* harmony import */ var _unsplash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_unsplash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _involvement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./involvement */ \"./src/modules/involvement.js\");\n/* harmony import */ var _involvement__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_involvement__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n// Functionality to get or assign the Application ID\nconst loadApp = async () => {\n  const application = await (0,_involvement__WEBPACK_IMPORTED_MODULE_1__.getAppID)();\n  const item = localStorage.getItem('APPID');\n  if (!item) {\n    localStorage.setItem('APPID', application);\n    return application;\n  }\n\n  return item;\n};\n\n// Global Const\nconst APPID = await loadApp();\n\n// Functionality to get all the Comments related to an specific Item (Card)\nconst loadComments = async (itemID) => {\n  const commentData = await (0,_involvement__WEBPACK_IMPORTED_MODULE_1__.getComments)(APPID, itemID);\n\n  const modalComments = document.querySelector('#modal-comments');\n  modalComments.innerHTML = commentData\n    .map(\n      (comment) => `\n      <li class=\"modal-comment\"><span class=\"fw-bold\">${comment.creation_date} ${comment.username}:</span> ${comment.comment}</li>\n    `,\n    )\n    .join('');\n};\n\nconst formElement = document.querySelector('#comment-form');\nformElement.addEventListener('submit', async (event) => {\n  event.preventDefault();\n  const ID = formElement.getAttribute('data-item');\n  const name = formElement.querySelector('#name').value;\n  const comment = formElement.querySelector('#comment').value;\n\n  await (0,_involvement__WEBPACK_IMPORTED_MODULE_1__.setComment)(APPID, ID, name, comment);\n  await loadComments(ID);\n\n  formElement.reset();\n});\n\nconst cards = await (0,_unsplash__WEBPACK_IMPORTED_MODULE_0__.getImages)();\nconst cardsCon = document.querySelector('.cards');\n\nconst displayModal = async (cardID) => {\n  // Get the Image Information (Details)\n  const imageData = await (0,_unsplash__WEBPACK_IMPORTED_MODULE_0__.getImageByID)(cardID);\n\n  const modalElement = document.querySelector('#modal');\n  const modalBackground = document.querySelector('#modal-background');\n  const modalInformation = document.querySelector('#modal-information');\n  const modalComments = document.querySelector('#modal-comments');\n  const modalClose = document.querySelector('#modal-close');\n  const pageLink = imageData.download_url;\n\n  // Functionality to close the Modal Window\n  modalClose.addEventListener('click', () => {\n    document.body.style.overflow = 'auto';\n    modalBackground.classList.remove('active');\n    modalInformation.innerHTML = '';\n    modalComments.innerHTML = '';\n  });\n\n  // Display the Information (Details)\n  modalInformation.innerHTML = `\n    <img\n      loading=\"lazy\"\n      id=\"modal-image\"\n      src=\"${pageLink}\"\n      alt=\"Preview Image - ${imageData.author}\"\n      class=\"modal-image\"\n    />\n    <p class=\"modal-title\">${imageData.author}</p>\n    <ul class=\"modal-list\">\n      <li class=\"modal-item\"><span class=\"fw-bold\">ID:</span> ${imageData.id}</li>\n      <li class=\"modal-item active\">\n        <a href=\"${pageLink}\" id=\"page\" target=\"_blank\">\n          <span class=\"fw-bold\">Page:</span> Download\n        </a>\n      </li>\n      <li class=\"modal-item\"><span class=\"fw-bold\">Width:</span> ${imageData.width}px</li>\n      <li class=\"modal-item\">\n        <span class=\"fw-bold\">Height:</span> ${imageData.height}px\n      </li>\n    </ul>\n  `;\n\n  // Function to get the Comments from a specific Item (Card)\n  await loadComments(cardID);\n  formElement.setAttribute('data-item', cardID);\n\n  // Display the Modal\n  document.body.style.overflow = 'hidden';\n  modalElement.style.display = 'block';\n  modalBackground.classList.add('active');\n};\n\ncards.forEach((card) => {\n  const cardElement = document.createElement('div');\n  cardsCon.appendChild(cardElement);\n  cardElement.setAttribute('id', card.id);\n  cardElement.classList.add('card');\n  cardElement.getAttribute('id', 'card');\n\n  const img = document.createElement('img');\n  cardElement.appendChild(img);\n  img.classList.add('card-img');\n  img.setAttribute('src', card.download_url);\n  img.getAttribute('id', 'card-img');\n\n  const smallCont = document.createElement('div');\n  cardElement.appendChild(smallCont);\n  smallCont.classList.add('small-cont');\n  smallCont.getAttribute('id', 'small-cont');\n\n  const h3 = document.createElement('h3');\n  smallCont.appendChild(h3);\n  h3.classList.add('h3');\n  h3.innerHTML = card.author;\n\n  const likes = document.createElement('div');\n  smallCont.appendChild(likes);\n  likes.classList.add('likes');\n  likes.getAttribute('id', 'likes');\n\n  const icon = document.createElement('i');\n  likes.appendChild(icon);\n  icon.classList.add('fa-solid', 'fa-heart');\n\n  const likesCount = document.createElement('p');\n  likes.appendChild(likesCount);\n  likesCount.classList.add('likes-count');\n  likesCount.getAttribute('id', 'likes-count');\n  likesCount.innerHTML = '5 likes';\n\n  const btns = document.createElement('div');\n  cardElement.appendChild(btns);\n  btns.classList.add('buttons');\n  smallCont.getAttribute('id', 'buttons');\n\n  const commentBtn = document.createElement('button');\n  btns.appendChild(commentBtn);\n  commentBtn.classList.add('card-btn');\n  commentBtn.getAttribute('id', 'comment');\n  commentBtn.innerHTML = 'Comments';\n  commentBtn.addEventListener('click', () => {\n    displayModal(cardElement.id);\n  });\n\n  const reserveBtn = document.createElement('button');\n  btns.appendChild(reserveBtn);\n  reserveBtn.classList.add('card-btn');\n  reserveBtn.getAttribute('id', 'reservation');\n  reserveBtn.innerHTML = 'Reservations';\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://webpack-template/./src/modules/cards.js?");

/***/ }),

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/logo.png */ \"./src/assets/images/logo.png\");\n\n\ndocument.querySelector('#header-logo').src = _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_0__;\ndocument.querySelector('#favicon').href = _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_0__;\n\n\n//# sourceURL=webpack://webpack-template/./src/modules/header.js?");

/***/ }),

/***/ "./src/modules/involvement.js":
/*!************************************!*\
  !*** ./src/modules/involvement.js ***!
  \************************************/
/***/ ((module) => {

eval("const API = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';\n\nconst getAppID = async () => {\n  const response = await fetch(`${API}/apps/`, {\n    method: 'POST',\n    body: {},\n  });\n  return response.text();\n};\n\nconst getComments = async (APPID, itemID = '') => {\n  const response = await fetch(`${API}/apps/${APPID}/comments?item_id=${itemID}`, {\n    method: 'GET',\n  });\n\n  if (!response.ok) {\n    return [];\n  }\n\n  return response.json();\n};\n\nconst setComment = async (APPID, ID, username, comment) => {\n  const itemObject = {\n    item_id: ID, // eslint-disable-line no-console\n    username,\n    comment,\n  };\n\n  const response = await fetch(`${API}/apps/${APPID}/comments`, {\n    method: 'POST',\n    body: JSON.stringify(itemObject),\n    headers: {\n      'Content-Type': 'application/json',\n    },\n  });\n\n  return response.text();\n};\n\nmodule.exports = {\n  getAppID,\n  getComments,\n  setComment,\n};\n\n\n//# sourceURL=webpack://webpack-template/./src/modules/involvement.js?");

/***/ }),

/***/ "./src/modules/unsplash.js":
/*!*********************************!*\
  !*** ./src/modules/unsplash.js ***!
  \*********************************/
/***/ ((module) => {

eval("const API = 'https://picsum.photos';\n\nconst getRandomInt = (max) => Math.floor(Math.random() * max);\n\nconst getImages = () => fetch(`${API}/v2/list?page=${getRandomInt(20)}&limit=9`)\n  .then((response) => response.json())\n  .catch(() => 'Nothing found');\n\nconst getImageByID = (imageID) => fetch(`${API}/id/${imageID}/info`)\n  .then((response) => response.json())\n  .catch(() => 'Nothing found');\n\nmodule.exports = {\n  getImageByID,\n  getImages,\n};\n\n\n//# sourceURL=webpack://webpack-template/./src/modules/unsplash.js?");

/***/ }),

/***/ "./src/assets/images/logo.png":
/*!************************************!*\
  !*** ./src/assets/images/logo.png ***!
  \************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAEbeAABG3gGOJjJbAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAtxQTFRF////AwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEywNDsgAAAPN0Uk5TAAECAwQFBgcICQoLDA0ODxAREhMUFRYXGBkaGxwdHh8hIiMkJSYnKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFDREVGR0hJS0xNTk9QUVJTVFVWV1haW1xdXl9gYWJjZGVmZ2hpamtsbW5wcXJzdHV2d3h5ent8fX5/gIGChIWGh4iJiouMjY6PkJGSk5SVlpeYmZqbnJ2en6Cho6Slpqipqqusra6vsLGys7S1tre4ubq7vL/AwcLDxMXGx8jJysvMzc7P0NHS09TV1tfY2drb3N7g4eLj5OXm5+jp6uvs7e7v8PHy8/T19vf4+fr7/P3+Z9P5mwAAFQ1JREFUGBntwYuDjmXeB/DvM2OmYdphMmS1JZHDqBwiErKd1itpa1ZSa4mWEqm0ZRirlE27KqWkIjZJ6WSlJKqhlHPbGErO59OYw/P9B97ajmQO93Xfz1y/675/nw+glFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJK/az50MlzPvjMKR/MmTy0OVQAGk7+io76anJDKH9Oe+gIHXbkodOgzKXfv4+O23d/OpShnO0Mge05UEYGljEUygZCGRgWZ0jEh0F5dg9D5B4oj/IYKnlQngxmyAyG8qDRAYbMgUZQVbeIobMIqsq6M4S6Q1XVqwyhV6GqqHEZQ6isMVTVjGYojYaqmlUMpVVQVdKcIdUcqipGM6RGQ1XFaobUaqgqaM7Qag5VuVyGVi5U5VYztFZDVao5Q6w5VGVyGWK5UJVZzRBbDVWJFgy1FlAVy2Wo5UJVbA1DbQ1UhVow5FpAVWQMQ24MVEXWMOTWQFWgBUOvBVT5xjD0xkCVbw1Dbw1UuVoyAlpClWcMI2AMVHnWMgLWQpWjJSOhJdTJjWUkjIU6ubWMhLVQJ9WSEdES6mTGMiLGQp3MWkbEWqiTyGZkZEP92lhGxlioX1vHyFgH9SvZjJBsqBPlMULyoE60jhGyDuoE2YyUbKjj5TFS8qCOt46Rsg7qOK0YMa2gfimPEZMH9UvrGTHroX6hFSOnFdTPxjFyxkH9bD0jZz3UT85jBJ0H9aNxjKBxUD9azwhaD/WDNoykNlDfm85Ieg7qf+oXMZKOnQ71nYcYUY9AfevCEkZUaQcopK5mZK1JReTVmM0Im10DEXfKa4y0105BpNVayIhbWAsRlrGEkbckA5HVMJ+K+Q0RTZkPHaH61pGHMhE96X/bR/WDfX9LR7SkD91G9QvbhqYjGmL1Lrgq9/1iqhMUv5971QX1YhCrdod+419etmrjzqNUQh3duXHVspfH9+tQG8HKyplaQOWQgqk5WQhI49yVcSrnxFfmNoZvdQYtoXLWkkF14EfGA0eonHbkgQyYShm2k8p5O4elwEhOAVUoFOTAu64fU4XGx13hzbnzqUJl/rnwoOcBqpA50BNVNqqMKnTKRqFq0l6kCqUX01AFDfOpQiq/ISrVfgtVaG1pj0r0PUoVYkf7okJ9qUKuLyrQ/ihVyB1tj3I13EIVelsaohxp+VQRkJ+Gk3uRKhJexEmNooqIUTiJnmVUEVHWE79y7gGqyDhwLk40nypC5uMEXakipSuO9zEjpmjnxs8/WDBn+vQ5Cz74fOPOIkbMxzhODqNh19Lpd/fqmH1WZgpOkJJ5VnbHXndPX7qL0ZCDX0gpYMgVr5s3of/FdVEFdS/uP2HeumKGXEEKfjaMYbb5hZubJsOj5KY3v7CZYTYMP8nYybDaPntQExhrMmj2dobVzgz86AGG0p55t2fDt+zb5+1hKD2AH9Q5wvDZmNc2CQFJapu3keFzpA6+N4hhs+/pLjEEKtbl6X0Mm0H43hKGSskbOWlIgLScN0oYKkvwP40ZJp/ecToS5vQ7PmWYNMZ3chkaeye2QoK1mriXoZGL76xkSOwYlYFqkDFqB0NiJb6VFWcofH1HLVSTWnd8zVCIZwHIYRhsHHwKqtEpgzcyDHIATKX7NtxcA9Wsxs0b6L6pAArous9zkmBBUs7ndF0BUJuO29YvBkti/bbRcbXRgU4re7wOLKrzeBmd1gH96LKP2sKyth/RZf0wnu7afUsM1sVu2U13jcfLdFV8WhZEyJoWp6texjI6amUniNFpJR21DKvopKLhyRAkeXgRnbQKG+migrYQpm0BXbQRO+mgORkQJ2MOHbQTR+mcoqEQaWgRnXMUdE5BWwjVtoDVo2zp3wf/X9uOf7x90jr6BLrmpQyIlfESq8FH/evhJ03v2kw/QLcUDYFoQ4qYYF9eh+Ol3bWH5kCnFLSBcG0KmFAPpuBXMufTGOiS/CyIl5XPxDl6A04m6UGaAh2yIB0OSF/ARDl0EcoxkIZAd8xMgRNSZjIx4teiXA/RDOiMSTE4IjaJCZGL8iW9QSOgK+6BQ+5hAuTHUIG6+2gCdEPJn+GUP5cwcN1RoVE0ATrhcA84psdhBuwtVKzm1zQAumB3Jzin024Gqzsq8TcaAB2wvzUc1Ho/g7QrGZXIpgFQvqJucFK3IgZoOipVQO9A8UqvhaOuLWVwrkelHqd3oHiD4KxBDE4HVGokvQOlux8Ou5+BOQuVuoHegcI9Bqc9xqCcgkp1o3egbLOT4LSk2QxGvAYq1ZnegaK9kwrHpb7DYDREpa6nd6Bky0+F805dzkC0RaXuoHegYN/URwjU/4ZBuBqVeoTegXKVXopQuLSUAfgXKrWS3oFy5SIkchmATajMWTQAirUoCSGRtIgBaItKDKUBUKptDZBoKZlntmhxZmYKEq3BNvr3LCqWtIoGQKHKfo9Eqd910CNvri7cVcQfFO0qXP3mI4O61kei/L6MvpW1QoX60wQo1Dgkwhk3PrNsD8u1Z9kzN56BRBhH/95ARWp+RROgTO8lI2gN+kz9L6vgv1P7NEDQkt+jfzehAk/QCCjSjoYIVpNx6+jBunFNEKyGO+hbUUeU61aaASWKX4kgZd66jJ4tuzUTQboyTt+2NkI5fl9MM6BEUxCc5KtfLqKRopevTkZwptC/rZ1wUn8uoiFQoO2ZCErKgC/pw5cDUhCUzO30r+hm/FryIzQGCnQTAlLz9s30afPtNRGQmxiEBefjBD3X0Bwoz2IE4zd3b2MAtt39GwRjMYNQ9kKnJPwkref79AMUpyQbQYgN2MmA7BwQQxCySxiM7c/e2K1JrTrZlw965TD9AcV5GEFovYwBWtYaQXiY4oDSbE6Hf7UnlzJQpZNrw7/0zZQGlOZa+Nd3KwO3tS/8u5bSgMK8Bd8y5jAh5mTAt7coDCjL0XPgV9sCJkhBW/h1zlHKAsqSB7+GFDFhiobArzzKAoqyrzb8yXiJCfVSBvypvY+igKKMhz9Nv2SCfdkU/oynKKAkh+vBl3Y7mHA72sGXeocpCSjJo/DlsoOsBgcvgy+PUhJQkGNnwI8/HWO1OPYn+HHGMQoCCjIVftxexmpSdjv8mEpBQDlKG8OHe1mN7oUPjUspByjHDPgwkNVqIHyYQTlAMeItYa5XKatVaS+YaxmnGKAYc2Guy1FWs6NdYG4uxQDFaAdj5+1ltdt7Hoy1oxigFCtg7KwttGDLWTC2glKAUgyDqdR8WpGfClPDKAUoREk9mPonLfknTNUroRCgEPNhqjet6Q1T8ykEKMR1MHT2Xlqz92wYuo5CgDLsPQVmUpfTouWpMHPKXsoAyvAUDD1Kqx6FoacoAyjDxTDTvoxWlbWHmYspAyhCAcwkLadly5NgpoAigCLkwsxfad1fYSaXIoASxM+GkXp7aN2eejBydpwSgBIsg5nnKMBzMLOMEoASjIWRznEKEO8MI2MpAShBVxhZShGWwkhXSgAKcCQVJrpRiG4wkXqEAoACLISRhRRiIYwspACgAPfCRHuK0R4m7qUAoAAXwcQ8ijEPJi6iAKB9+5NhIDtOMeLZMJC8n/aB9r0OEzMpyEyYeJ32gfYNh4E6RRSkqA4MDKd9oH2tYWAwRRkMA61pH2jdrhgMLKUoS2EgtovWgdbNhYEmFKYJDMyldaB1o2Egj8LkwcBoWgdalwPvYhspzMYYvMuhdaB158O7SyjOJfDufFoH2havCe8epDgPwruacdoG2lYIA/kUJx8GCmkbaNt/4F3tUopTWhve/Ye2gbZNhne9KFAveDeZtoG2DYV3/6JA/4J3Q2kbaNtl8G4NBVoD7y6jbaBtZ8Kz0ynS6fDsTNoGWnYoBs+upkhXw7PYIVoGWrYS3t1Fke6CdytpGWjZHHg3jSJNg3dzaBlo2TPwbglFWgLvnqFloGWT4N12irQd3k2iZaBlefCsDoWqA8/yaBlo2Uh4dhGFugiejaRloGWD4Vk/CtUPng2mZaBlfeHZcAo1HJ71pWWgZVfDszEUagw8u5qWgZZ1h2f/oFD/gGfdaRlo2YXwbCqFmgrPLqRloGXN4NksCjULnjWjZaBlDeHZGxTqDXjWkJaBlmXAs8UUajE8y6BloGXJ8GwFhVoBz5JpGWhZOjxbQqGWwLN0WgZa1gCevUWh3oJnDWgZaFlTePZvCvVveNaUloGWtYVn0yjUNHjWlpaBlnWFZ5Mo1CR41pWWgZb1gGd5FCoPnvWgZaBlfeDZSAo1Ep71oWWgZbfAswEUagA8u4WWgZaNgGddKVRXeDaCloGWjYFnDShUA3g2hpaBlk2Ed/sp0n54N5GWgZY9Be/yKVI+vHuKloGWzYJ3MynSTHg3i5aBln0I70ZTpNHw7kNaBlq2B97lUKQceLeHloG21YNnTShSE3hWj7aBtl0C7zZToM3w7hLaBto2AN49T4Geh3cDaBto28Pwrh8F6gfvHqZtoG2vwbszKNAZ8O412gbatgEGNlCcDTCwgbaBthXXgHdTKM4UeFejmLaB1p0L73pRnF7w7lxaB1rXE96l7qYwu1PhXU9aB1o3EgamUJgpMDCS1oHWPQ8DHSlMRxh4ntaB1hXCxBcU5QuYKKR1oH2NYeB+inI/DDSmfaB9A2GgUZyCxBvBwEDaB9o3CyYWUZBFMDGL9oH2bYWJyynI5TCxlfaBArSAiXyKkQ8TLSgAKMBQmLiGYlwDE0MpACjAXJiIraYQq2MwMZcCgALsToKJGyjEDTCRtJsCgBK0gYnkAopQkAwTbSgBKMGdMNKXIvSFkTspASjB2zDzLgV4F2bepgSgBMVZMNKimNYVt4CRrGJKAIpwG8xMoHUTYOY2igCKkA8z6Zto2aZ0mMmnCKAMzWHmGlp2Dcw0pwygDONh6FVa9SoMjacMoAybYjBT9yta9FVdmIltogygEN1hqHMJrSnpDEPdKQQoxHMwNYrW3ANTz1EIUIgDtWAo9jYteTsGQ7UOUAhQihtgKutrWvF1FkzdQClAKRbAWOciWlDUGcYWUApQitIzYeyPZax2ZX+EsTNLKQUoxmSYu5XV7laYm0wxQDGO1Ie5MaxmY2Cu/hGKAcoxAT5MYbWaAh8mUA5QjgOZMJc0h9VoThLMZR6gHKAgufAhZQarzYwU+JBLQUBBdp8KH2KPsJo8EoMPp+6mIKAkI+HL3awWd8OXkZQElGRrGny5uYQJV3IzfEnbSklAUYbAnx6HmWCHe8CfIRQFFKUwBf5kr2VCrc2GPymFFAWU5S/wqdZzTKDnasGnv1AWUJZtdeDXTYeYIIdugl91tlEWUJgn4Fvz1UyI1c3h2xMUBhSm7EL4VnNiCQNXMrEmfLuwjMKA0ixPgn/ZixmwxdnwL2k5pQHFGYIg9NvGAG3rhyAMoTigOHtPRxBqP1bKgJQ+VhtBOH0vxQHlmYFgtJpdxgCUzW6FYMygPKBAlyIgzZ4voU8lzzdDQC6lQKBA61IQlLOnHqMPx6aejaCkrKNAoET3Iji/G7+JhjaN/x2Ccy8lAiU6ko0AxbpN20fP9k3rFkOAso9QIlCktbUQqLSc14vpQfHrOWkIVK21FAmUaTqCln7VxE/KWAVln0y8Kh1Bm06ZQKFuRAJk9n5s1TFW4Niqx3pnIgFupFCgUAebITGSm/QY8dS73/AE37z71IgeTZKRGM0OUihQqs/SkEg1Mhu16nTFdf37X3dFp1aNMmsgkdI+o1SgWE8iNJ6kWKBcOQiJHMoFyrX/HITCOfspFyjYilSEQOoKCgZKNiMG58VmUDJQtElw3iSKBsp2Dxx3D2UDhesPp/WncKBwpT3hsJ6lFA6U7sglcNYlRygdKN7eVnBUq70UD5RvSyM4qdEWygc64IssOCjrCzoAdMHnv4Vzfvs5XQA6YWNTOKbpRjoBdMOOdnBKux10A+iIg5fDIZcfpCNAVxzrA2f0OUZXgM6ID4MjhsXpDNAhD8AJD9AhoEueTYZ4yc/SJaBT3syEcJlv0imgWwovgmgXFdItoGOKR0CwEcV0DOic1zIhVOZrdA7onk0dIVLHTXQP6KDiOyHQncV0EOik+adBmNPm00mgmzZ1hiidN9FNoKPiz9SFGHWfidNRoLN2DYxBhNjAXXQW6LAP20CANh/SYaDLSifXhmW1J5fSZaDbtt0Iq27cRreBrnuvJaxp+R5dBzqv+OlzYMU5TxfTeWAIlM7MRrXLnlnKEABDIf5KO1Srdq/EGQpgWCzogmrTZQHDAgyP969EtbjyfYYHGCYr+tZCgtXqu4JhAobLgemXxpAwsUunH2C4gKGz6e/NkBDN/r6JoQOG0UdD6iJgdYd8xDACw+nYvN41EZiavecdYziBoXVs8ZguqfAttcuYxccYWmCoHV44qkMyjCV3GLXwMEMNDL3984dfEINnsQuGz9/P0AMj4dAns8b0aZOOKklv02fMrE8OMRLACIl/teiJYVc0SkM50hpdMeyJRV/FGSGIM3pK9mxa+9E7r7zw+IT7hg27b8LjL7zyzkdrN+0pYfTEcYgqwg5hG1WEbUMBVYQV4DOqCPsMS6gibAlmUkXYTIymirDRuJ4qwq7H+VQRdj7SyqgiqywN+JQqsj4FMJEqsiYCuIoqsq4CkF5MFVHF6fjW+1QR9T6+cxtVRN2G72QVU0VScRb+51WqSHoV37uWKpKuxfdSt1JF0NZU/OBWqgi6FT+qsYEqcjbUwE96U0VOb/zCUqqIWYpfupgqYi7GcV6hipRXcLxmJVQRUtIMJ3iSKkKexImyCqkiozALv3L+QaqIOHg+TuKaOFUkxK/BSd1HFQn3oRyzqCJgFspTczlV6C2viXI13EIVclsaogLtD1GF2qH2qNAFhVQhVngBKlH/A6rQ+qA+KpU6nSqkpqeiKkaUUoVQ6QhU0R/2UYXOvj+gypp/SRUyXzaHB6fmHaIKkUN5p8KbBk+WUIVEyZMN4F2zuVShMLcZzHRaQuW8JZ1grtdKKqet7AV/Wj+6ncpR2x9tDf9q9JxeSOWcwuk9ayAojQe8uL6YyhHF618c0BhBq9G058hJ015asGzlZ0qklcsWvDRt0sieTWtAKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUPP8PBuplXRAtbycAAAAASUVORK5CYII=\";\n\n//# sourceURL=webpack://webpack-template/./src/assets/images/logo.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;