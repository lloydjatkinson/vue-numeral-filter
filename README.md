# vue-numeral-filter
Vue.js filter for Numeral.js

Allows for [Numeral.js](http://numeraljs.com/) to be used inline in the template section of a component. This can be a convenient way of rendering numerically formatted data in situations where you do not wish to create a computed property.

## Installation

### NPM
*This is the recommended approach.*
```
npm install vue-numeral-filter
```

### CDN - Browser UMD Module
```html
<script src="https://unpkg.com/vue-numeral-filter/dist/vue-numeral-filter.min.js"></script>
```

### Usage
The `numeral` filter accepts any of the formats specified in the [Numeral.js](http://numeraljs.com/) documentation. For example:
```html
{{ 561739482 | numeral('0,0') }} // => 561,739,482
```

###  Predefined Filters
A number of predefined filters are also provided for ease-of-use and readability.

| Type                | Numeral                                   | Alias                            | Result      |
|---------------------|-------------------------------------------|----------------------------------|-------------|
| Bytes               | <code>{{ 10485760 &#124; numeral('0b') }}</code>            | <code>{{ 10485760 &#124; bytes }}</code>           | 10 MB       |
| Percentage          | <code>{{ 0.5567 &#124; numeral('0.[00]%') }}</code>         | <code>{{ 0.5567 &#124; percentage }}</code>        | 55.67%      |
| Thousands Separator | <code>{{ 561739482 &#124; numeral('0,0') }}</code>          | <code>{{ 561739482 &#124; separator }}</code>      | 561,739,482 |
| Ordinal             | <code>{{ 20 &#124; numeral('Oo') }}</code>                  | <code>{{ 20 &#124; ordinal }}</code>               | 20th        |
| Abbreviate          | <code>{{ 1000000 &#124; numeral('0.0a') }}</code>           | <code>{{ 1000000 &#124; abbreviate }}</code>       | 1.0m        |
| Exponential         | <code>{{ 123987.202 &#124; numeral('0.[00]e+0') }}</code> | <code>{{ 123987.202 &#124; exponential }}</code> | 1.24e+5     |
