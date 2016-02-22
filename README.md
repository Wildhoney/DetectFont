# DetectFont

> Detect which font your system has cherry-picked from font-family.

![Travis](http://img.shields.io/travis/Wildhoney/DetectFont.svg?style=flat-square)
&nbsp;
![npm](http://img.shields.io/npm/v/detect-font.svg?style=flat-square)
&nbsp;
![License MIT](http://img.shields.io/badge/License-MIT-lightgrey.svg?style=flat-square)

* **npm:** `npm install detect-font --save`

---

## Usage

```javascript
import { detectFont } from 'detect-font';

// ...

const element = document.querySelector('...');
console.log(detectFont(element));
```

`detectFont` will yield `false` if any of the following conditions are `true`:

* Supplied element is `undefined` or not a valid element;
* Font cannot be determined based on the given `font-family`;

Whenever `sans-serif`, `serif` or `monospace` are found then they are returned and no further processing will take place.

You may also use the `supportedFonts` function to determine which fonts are supported for the passed node.

## Links

* Inspired by https://www.reddit.com/r/javascript/comments/46k23v/how_to_get_the_computed_fontfamily/
* Thanks to https://www.kirupa.com/html5/detect_whether_font_is_installed.htm
