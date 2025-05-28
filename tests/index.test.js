
import { typeOf, hasValue, firstValid, getTempNumberId, toBool, toNumber } from '../dist/index.js';



describe("common-utils", () => {

    test('typeOf', () => {
        expect(typeOf('') ).toBe('string');
        expect(typeOf(1)).toBe('number');
        expect(typeOf(true)).toBe('boolean');
        expect(typeOf({})).toBe('object');
        expect(typeOf([])).toBe('array');
    });


    test('toBool', () => {
        expect(toBool('')).toBe(false);
        expect(toBool("0")).toBe(false);
        expect(toBool("not")).toBe(false);
        expect(toBool("no")).toBe(false);
        expect(toBool("n")).toBe(false);
        expect(toBool("false")).toBe(false);
        expect(toBool("1")).toBe(true);
        expect(toBool("yes")).toBe(true);
        expect(toBool("y")).toBe(true);
        expect(toBool("true")).toBe(true);
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

    test('toNumber', () => {
        expect(toNumber('')).toBe(0);
        expect(toNumber("0")).toBe(0);
        expect(toNumber(null)).toBe(0);
        expect(toNumber(undefined)).toBe(0);
        expect(toNumber(1)).toBe(1);
        expect(toNumber('1')).toBe(1);
        expect(toNumber('1.1')).toBe(1.1);
        expect(toNumber('1,1')).toBe(1.1);
        expect(toNumber('1.111.1')).toBe(NaN); // Invalid format
        expect(toNumber('1.111,1')).toBe(1111.1);
        expect(toNumber('1,111,1')).toBe(NaN); // Invalid format
        expect(toNumber('1,111.1')).toBe(1111.1);
        expect(toNumber('-1.111,1')).toBe(-1111.1);
        expect(toNumber('aaaa')).toBe(NaN);
    });

    test('getTempNumberId', () => {
        expect(getTempNumberId([])).toBeGreaterThan(0);
        expect(getTempNumberId([{tempId:0},{tempId:0.0000000000001}])).toBeGreaterThan(0.0000000000001);
    })
    
});
