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

var vueNumeralFilterInstaller = {
  install: function install(vue) {
    vue.filter('abbreviate', abbreviate);
    vue.filter('bytes', bytes);
    vue.filter('exponential', exponential);
    vue.filter('numeral', exposedNumeral);
    vue.filter('ordinal', ordinal);
    vue.filter('percentage', percentage);
    vue.filter('separator', separator);
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  Vue.use(vueNumeralFilterInstaller);
}

export default vueNumeralFilterInstaller;
