# DetectFont

<img src="media/font.png" align="right" width="70" />

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

* `detectFont` will yield `false` if the font cannot be determined based on the given `font-family`.
* Whenever `sans-serif`, `serif` or `monospace` are found then they are returned and no further processing will take place.
* In cases where the font is surrounded in quotes &mdash; such as "Times New Roman" &mdash; `DetectFont` will attempt to remove them.
* Any issues you find, [please raise an issue](https://github.com/Wildhoney/DetectFont/issues/new)!
* Use the `supportedFonts` function to yield an array of supported fonts for the given node;
```

## Links

* Experiment from https://www.reddit.com/r/javascript/comments/46k23v/how_to_get_the_computed_fontfamily/
* Thanks to https://www.kirupa.com/html5/detect_whether_font_is_installed.htm

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)
