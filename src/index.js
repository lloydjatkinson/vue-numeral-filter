import {
    abbreviate,
    bytes,
    exponential,
    exposedNumeral,
    ordinal,
    percentage,
    separator
} from './filters.js';

const installer = Vue => {
    Vue.filter('abbreviate', abbreviate);
    Vue.filter('bytes', bytes);
    Vue.filter('exponential', exponential);
    Vue.filter('numeral', exposedNumeral);
    Vue.filter('ordinal', ordinal);
    Vue.filter('percentage', percentage);
    Vue.filter('separator', separator);
};

export default installer;

if (typeof window !== 'undefined' && window.Vue) {
    Vue.use(installer);
}