import { detectFont, supportedFonts, removeQuotes } from '../src/detect-font';

describe('DetectFont:', () => {

    describe('Font Detection:', () => {

        const node = document.createElement('div');

        it('Should yield the first supported font;', () => {
            node.style.fontFamily = 'Arial, Tahoma, Helvetica';
            expect(detectFont(node)).toEqual('Arial');
            node.style.fontFamily = `UnknownFont, 'Tahoma', Helvetica`;
            expect(detectFont(node)).toEqual('Tahoma');
        });

        it('Should yield the only font if supported;', () => {
            node.style.fontFamily = 'Helvetica';
            expect(detectFont(node)).toEqual('Helvetica');
        });

        it('Should yield font which includes spaces;', () => {
            node.style.fontFamily = 'GoodnessKnows, "Times New Roman"';
            expect(detectFont(node)).toEqual('Times New Roman');
        });

        it('Should yield base font when discovered;', () => {
            node.style.fontFamily = 'Nothingness, monospace, "Times New Roman", sans-serif';
            expect(detectFont(node)).toEqual('monospace');
        });

        it('Should yield base font when reached end;', () => {
            node.style.fontFamily = 'Nothingness, GoodnessKnows, AbsolutelyNothing, "sans-serif"';
            expect(detectFont(node)).toEqual('sans-serif');
        });

        it('Should yield browser default when no font specified;', () => {
            const node = document.createElement('section');
            node.style.fontFamily = '';
            expect(detectFont(node)).toEqual('serif');
        });

        it('Should yield browser default when font cannot be recognised;', () => {
            const node = document.createElement('section');
            node.style.fontFamily = 'Nothingness, GoodnessKnows, AbsolutelyNothing';
            expect(detectFont(node)).toEqual(false);
        });

        it('Should return an array of supported fonts;', () => {
            node.style.fontFamily = 'GoodnessKnows, "Times New Roman", Arial, Nothingness, monospace, Tahoma';
            expect(supportedFonts(node)).toEqual(['Times New Roman', 'Arial', 'monospace', 'Tahoma']);
        });

        it('Should return an empty array', () => {
            node.style.fontFamily = '"test fontName"';
            expect(supportedFonts(node)).toEqual([]);
        });

        it('Should be case-insensitive;', () => {
            node.style.fontFamily = 'ARIAL, TAHOMA, HELVETICA';
            expect(detectFont(node)).toEqual('ARIAL');
            node.style.fontFamily = 'MONOSPACE, ARIAL, SANS-SERIF';
            expect(detectFont(node)).toEqual('monospace');
        });

        it('Should be able to change the font size', () => {
            node.style.fontFamily = '"Goodness Knows", Arial';
            expect(detectFont(node, { fontSize: 1 })).toEqual('Arial');
        });

    });

    describe('Error Handling:', () => {

        it('Should raise an exception when passed a non-element;', () => {
            expect(() => detectFont(1)).toThrow(new Error('DetectFont: Cannot detect font on a non-element.'));
        });

        it('Should raise an exception when font size is set to 0;', () => {
            const node = document.createElement('span');
            node.fontFamily = 'GoodnessKnows, Arial, Tahoma, Helvetica';
            expect(() => detectFont(node, { fontSize: 0 })).toThrow(new Error('DetectFont: Setting font size to zero will always yield false positives.'));
        });

        it('Should raise an exception if non-text has been passed into `options`', () => {
            const node = document.createElement('span');
            node.fontFamily = 'GoodnessKnows, Arial, Tahoma, Helvetica';
            expect(() => detectFont(node, { text: '' })).toThrow(new Error('DetectFont: Setting text to an empty string will always yield false positives.'));
        });

    });

    describe('Remove Quotes:', () => {

        it('Should remove optional quoting from the string;', () => {
            expect(removeQuotes(`Times New Roman`)).toEqual('Times New Roman');
            expect(removeQuotes(`'Times New Roman'`)).toEqual('Times New Roman');
            expect(removeQuotes(`"Times New Roman"`)).toEqual('Times New Roman');
        });

    });

});
