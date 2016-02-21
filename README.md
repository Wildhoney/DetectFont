# DetectFont

## Usage

```javascript
import detectFont from 'detect-font';

// ...

const element = document.querySelector('...');
console.log(detectFont(element));
```

`detectFont` will yield `false` if any of the following conditions are `true`:

* Cannot find a `font-family` property on the supplied element;
* Supplied element is `undefined` or not a valid element;
* Font cannot be determined based on the given `font-family`;

Whenever `sans-serif`, `serif` or `monospace` are found then they are returned and no further processing will take place.

## Links

* Based on Reddit discussion: https://www.reddit.com/r/javascript/comments/46k23v/how_to_get_the_computed_fontfamily/
* Thanks to http://www.lalit.org/lab/javascript-css-font-detect/
