import {
    abbreviate,
    bytes,
    exponential,
    exposedNumeral,
    ordinal,
    percentage,
    separator
} from './filters.js';

/**
 * Installs a Vue filter into the given Vue instance.
 * @param {*} vueInstance The Vue instance to install the filter into.
 * @param {Function} filter The filter to install.
 * @param {String} name The name of the filter being installed.
 */
const installFilter = (vueInstance, filter, name) => vueInstance.filter(name, filter);

console.log(bytes(1234143222));