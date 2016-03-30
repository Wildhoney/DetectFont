<img src="media/logo.png" width="295" />

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
import { detectFont, supportedFonts } from 'detect-font';

const element = document.querySelector('...');

// Yield the first font that is supported on the element.
console.log(detectFont(element));

// Otherwise display all valid fonts for the element.
console.log(supportedFonts(element));
```

When a typeface is encountered &mdash; `monospace`, `sans-serif` or `serif` &mdash; then it will be returned and the font discovery will not continue. For example in the following case `monospace` will be returned &mdash; the fonts will not be considered:

```css
.example {
    font-family: monospace, "Times New Roman", Arial;
}
```

In the unlikely event that a valid font cannot be determined `detectFont` will yield `false` &mdash; an empty array will be returned by `supportedFonts`.

<img src="media/github.png" width="15" /> Found a problem? Please [raise an issue](https://github.com/Wildhoney/DetectFont/issues/new).

## Links

* Experiment from https://www.reddit.com/r/javascript/comments/46k23v/how_to_get_the_computed_fontfamily/
* Thanks to https://www.kirupa.com/html5/detect_whether_font_is_installed.htm

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)
