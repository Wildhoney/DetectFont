import isElement from 'is-element';
import getFont from 'get-font-styles';

/**
 * @method detectFont
 * @param {HTMLElement} element
 * @return {String|Boolean}
 */
export default function detectFont(element) {

    if (!isElement(element)) {
        return false;
    }

    const {styles} = getFont(element);

};
