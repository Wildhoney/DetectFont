import isElement from 'is-element';

/**
 * @constant DEFAULT_OPTIONS
 * @type {Object}
 */
const DEFAULT_OPTIONS = {
    text: 'abcdefghijklmnopqrstuvwxyz0123456789',
    fontSize: 72,
    baseFont: 'monospace'
};

/**
 * @constant BASE_FONTS
 * @type {String[]}
 */
const BASE_FONTS = ['sans-serif', 'serif', 'monospace'];

/**
 * @method removeQuotes
 * @param {String} name
 * @return {String}
 */
export const removeQuotes = name => {
    const matches = String(name).match(/^["']?(.+?)["']?$/i);
    return Array.isArray(matches) ? matches[1] : '';
};

/**
 * @method throwException
 * @param {String} message
 * @return {void}
 * @throw {Error}
 */
const throwException = message => {
    throw new Error(`DetectFont: ${message}.`);
};

/**
 * @method assertText
 * @param {String} text
 * @return {void}
 * @throw {Error}
 */
const assertText = text => {
    text === '' && throwException('Setting text to an empty string will always yield false positives');
};

/**
 * @method assertFontSize
 * @param {Number} fontSize
 * @return {void}
 * @throw {Error}
 */
const assertFontSize = fontSize => {
    fontSize === 0 && throwException('Setting font size to zero will always yield false positives');
};

/**
 * @method detectFont
 * @param {HTMLElement} element
 * @param {Object} [options = DEFAULT_OPTIONS]
 * @return {String|Boolean}
 * @throw {Error}
 */
export const detectFont = (element, options = DEFAULT_OPTIONS) => {

    if (!isElement(element)) {
        return void throwException('Cannot detect font on a non-element');
    }

    return supportedFonts(element, options)[0] || false;

};

/**
 * @method supportedFonts
 * @param {HTMLElement} element
 * @param {Object} [options = DEFAULT_OPTIONS]
 * @return {Array}
 */
export const supportedFonts = (element, options = DEFAULT_OPTIONS) => {

    if (!isElement(element)) {
        return [];
    }

    const opts = { ...DEFAULT_OPTIONS, ...options };

    assertText(options.text);
    assertFontSize(options.fontSize);

    const properties = window.getComputedStyle(element);
    const fontFamily = properties.getPropertyValue('font-family') || element.style.fontFamily || 'serif';
    const fonts = fontFamily.split(',');
    const canvas = window.document.createElement('canvas');
    const context = canvas.getContext('2d');

    return fonts.map(font => font.trim()).map(removeQuotes).map(fontName => {

        if (!!~BASE_FONTS.indexOf(fontName.toLowerCase())) {
            return fontName;
        }

        context.font = `${opts.fontSize}px ${options.baseFont}`;
        const baselineSize = context.measureText(opts.text).width;

        context.font = `${opts.fontSize}px ${fontName}, ${options.baseFont}`;
        return baselineSize !== context.measureText(opts.text).width ? fontName : false;

    }).filter(value => value !== false);

};
