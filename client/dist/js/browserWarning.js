webpackJsonp([4],{

/***/ 968:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _detectBrowser = __webpack_require__(810);

var _detectBrowser2 = _interopRequireDefault(_detectBrowser);

var _jquery = __webpack_require__(11);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (_detectBrowser2.default.name === 'ie' && parseInt(_detectBrowser2.default.version, 10) <= 10) {
  (0, _jquery2.default)('.browser-warning-wrapper').removeClass('hide');
}

/***/ })

},[968]);
//# sourceMappingURL=browserWarning.js.map