# vue-numeral-filter

[![npm version](https://badge.fury.io/js/vue-numeral-filter.svg)](https://badge.fury.io/js/vue-numeral-filter)
[![MadeWithVueJs.com shield](https://madewithvuejs.com/storage/repo-shields/838-shield.svg)](https://madewithvuejs.com/p/vue-js-filter-for-numeral-js/shield-link)
[![](https://data.jsdelivr.com/v1/package/npm/vue-numeral-filter/badge)](https://www.jsdelivr.com/package/npm/vue-numeral-filter)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)


Vue.js filter for Numeral.js

Allows for [Numeral.js](http://numeraljs.com/) to be used inline in the template section of a component. This can be a convenient way of rendering numerically formatted data in situations where you do not wish to create a computed property.

## Demonstration
https://jsfiddle.net/lloydjatkinson/uaq69zjc/

## Installation

### NPM
*This is the recommended approach.*
```
npm install vue-numeral-filter
```
```js
import vueNumeralFilterInstaller from 'vue-numeral-filter';

Vue.use(vueNumeralFilterInstaller, { locale: 'en-gb' });
```


### CDN - Browser UMD Module
The UMD bundle will automatically install the filters.
```html
<script src="https://cdn.jsdelivr.net/npm/vue-numeral-filter/dist/vue-numeral-filter.min.js"></script>
```

### Usage
The `numeral` filter accepts any of the formats specified in the [Numeral.js](http://numeraljs.com/) documentation. For example:
```html
{{ 561739482 | numeral('0,0') }} // => 561,739,482
```

###  Predefined Filters
A number of commonly used predefined filters are also provided for ease-of-use and readability.

| Type                | Numeral                                   | Alias                            | Result      |
|---------------------|-------------------------------------------|----------------------------------|-------------|
| Bytes               | <code>{{ 10485760 &#124; numeral('0b') }}</code>            | <code>{{ 10485760 &#124; bytes }}</code>           | 10 MB       |
| Percentage          | <code>{{ 0.5567 &#124; numeral('0.[00]%') }}</code>         | <code>{{ 0.5567 &#124; percentage }}</code>        | 55.67%      |
| Thousands Separator | <code>{{ 561739482 &#124; numeral('0,0') }}</code>          | <code>{{ 561739482 &#124; separator }}</code>      | 561,739,482 |
| Ordinal             | <code>{{ 20 &#124; numeral('Oo') }}</code>                  | <code>{{ 20 &#124; ordinal }}</code>               | 20th        |
| Abbreviate          | <code>{{ 1000000 &#124; numeral('0.0a') }}</code>           | <code>{{ 1000000 &#124; abbreviate }}</code>       | 1.0m        |
| Exponential         | <code>{{ 123987.202 &#124; numeral('0.[00]e+0') }}</code> | <code>{{ 123987.202 &#124; exponential }}</code> | 1.24e+5     |
|Currency| <code>{{ 200.42 &#124; numeral('$0,0.00') }}</code>|<code>{{ 200.42 &#124; currency }}</code>|£200.42|

### Locales

See the list of locales here: https://github.com/adamwdraper/Numeral-js/tree/master/src/locales


### Find this library useful?

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/K3K71ND3U)