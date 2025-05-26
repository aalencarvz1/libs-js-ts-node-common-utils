
import { typeOf, hasValue, firstValid, getTempNumberId } from '../dist/index.js';



describe("common-utils", () => {

    test('typeOf', () => {
        expect(typeOf('') ).toBe('string');
        expect(typeOf(1)).toBe('number');
        expect(typeOf(true)).toBe('boolean');
        expect(typeOf({})).toBe('object');
        expect(typeOf([])).toBe('array');
    });

    test('hasValue', () => {
        expect(hasValue(null)).toBe(false);
        expect(hasValue(undefined)).toBe(false);
        expect(hasValue([])).toBe(false);
        expect(hasValue([1])).toBe(true);
        expect(hasValue({})).toBe(false);
        expect(hasValue({a:1})).toBe(true);
        expect(hasValue('')).toBe(false);
        expect(hasValue('a')).toBe(true);
        expect(hasValue(0)).toBe(true);
        expect(hasValue(1)).toBe(true);
        expect(hasValue(false)).toBe(true);
        expect(hasValue(true)).toBe(true);
    });

    test('firstValid', () => {
        expect(firstValid([null,undefined,false])).toBe(false);
        expect(firstValid([null,undefined,true])).toBe(true);
        expect(firstValid([null,undefined,''])).toBe('');
    })

    test('getTempNumberId', () => {
        expect(getTempNumberId([])).toBeGreaterThan(0);
        expect(getTempNumberId([{tempId:0},{tempId:0.0000000000001}])).toBeGreaterThan(0.0000000000001);
    })
    
});
