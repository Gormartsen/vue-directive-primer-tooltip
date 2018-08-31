# vue-directive-primer-tooltip
VueJS directive to use GitHub primer tooltip (css only based)
Very light and performance oriented.

### Usage

JS:

```js
var Tooltip = require('vue-directive-primer-tooltip')
Vue.use(Tooltip)
```

Template:
```html
<span v-primer-tooltip.ne.no-delay="'my text'">some text</span>
```

SCSS:
```scss
@import "vue-directive-primer-tooltip/index.scss"
```

More details about GitHub Primer is [here](https://primer.github.io/archive/tooltips/).

### License

The code is available under the [MIT](LICENSE) license.

### Contributing

We are open to contributions.


### Changelog
- 0.1.2 - IE compatibility (no support forEach), If no value - do not apply tooltip
- 0.1.1 - fix typo for auto update tooltip from computed

