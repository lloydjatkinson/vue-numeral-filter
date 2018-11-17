import numeral from 'numeral';
import 'numeral/locales';

var abbreviate = function abbreviate(value) {
  return numeral(value).format('0.0a');
};

var bytes = function bytes(value) {
  return numeral(value).format('0 b');
};

var exposedNumeral = function exposedNumeral(value, format) {
  return numeral(value).format(format);
};

var exponential = function exponential(value) {
  return numeral(value).format('0.[00]e+0');
};

var ordinal = function ordinal(value) {
  return numeral(value).format('Oo');
};

var percentage = function percentage(value) {
  return numeral(value).format('0.[00]%');
};

var separator = function separator(value) {
  return numeral(value).format('0,0');
};

var currency = function currency(value) {
  return numeral(value).format('$0,0.00');
};

var vueNumeralFilterInstaller = {
  install: function install(vue) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$locale = _ref.locale,
        locale = _ref$locale === void 0 ? 'en-gb' : _ref$locale;

    numeral.locale(locale);
    vue.filter('abbreviate', abbreviate);
    vue.filter('bytes', bytes);
    vue.filter('exponential', exponential);
    vue.filter('numeral', exposedNumeral);
    vue.filter('ordinal', ordinal);
    vue.filter('percentage', percentage);
    vue.filter('separator', separator);
    vue.filter('currency', currency);
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  Vue.use(vueNumeralFilterInstaller);
}

export default vueNumeralFilterInstaller;
