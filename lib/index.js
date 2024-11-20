"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeLanguage = changeLanguage;
exports.t = t;
var _i18next = _interopRequireDefault(require("i18next"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var resources = {
  en_US: {
    translation: require('./locales/en_US/common.json')
  },
  zh_CN: {
    translation: require('./locales/zh_CN/common.json')
  }
};
_i18next["default"].init({
  lng: 'zh_CN',
  fallbackLng: 'zh_CN',
  resources: resources
});
function t(key) {
  return _i18next["default"].t(key);
}
function changeLanguage(lng) {
  return _i18next["default"].changeLanguage(lng);
}