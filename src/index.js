import {
    abbreviate,
    bytes,
    exponential,
    exposedNumeral,
    ordinal,
    percentage,
    separator
} from './filters.js';

const vueNumeralFilterInstaller = {
    install (vue) {
        vue.filter('abbreviate', abbreviate);
        vue.filter('bytes', bytes);
        vue.filter('exponential', exponential);
        vue.filter('numeral', exposedNumeral);
        vue.filter('ordinal', ordinal);
        vue.filter('percentage', percentage);
        vue.filter('separator', separator);
    }
};

export default vueNumeralFilterInstaller;

if (typeof window !== 'undefined' && window.Vue) {
    Vue.use(vueNumeralFilterInstaller);
}