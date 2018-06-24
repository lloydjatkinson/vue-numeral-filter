import numeral from 'numeral';

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

var installer = function installer(Vue) {
  Vue.filter('abbreviate', abbreviate);
  Vue.filter('bytes', bytes);
  Vue.filter('exponential', exponential);
  Vue.filter('numeral', exposedNumeral);
  Vue.filter('ordinal', ordinal);
  Vue.filter('percentage', percentage);
  Vue.filter('separator', separator);
};

if (typeof window !== 'undefined' && window.Vue) {
  Vue.use(installer);
}

export default installer;
