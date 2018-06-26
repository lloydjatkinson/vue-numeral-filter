import {
    abbreviate,
    bytes,
    currency,
    exponential,
    exposedNumeral,
    ordinal,
    percentage,
    separator
} from './filters.js';

import numeral from 'numeral';

const vueNumeralFilterInstaller = {
    install (vue, options) {
        if (options) {
            numeral.locale(options.locale || 'en-gb');
        }

        vue.filter('abbreviate', abbreviate);
        vue.filter('bytes', bytes);
        vue.filter('currency', currency);
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