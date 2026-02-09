export declare const MS_PER_DAY: number;
export declare const YEARS: number[];
export declare const MONTHS: string[];
export declare const SHORT_MONTHS: string[];
export declare function getMoment(): string;
export declare function toBool(pValue: any): boolean;
/**
 * returns type of value
 * @version 1.0.0
 * @created 2025-01-17
 */
export declare function typeOf(value: any): "array" | "object" | "function" | "string" | "number" | "boolean" | "undefined" | "symbol" | "bigint" | "null" | "unknown";
export declare function isArray(value: any): value is any[] | NodeList;
/**
 * returns first element of array that has value
 * @version 1.0.0
 * @created 2025-01-17
 */
export declare function firstValid(arr_valores: any[], check_null?: boolean): any;
/**
 *
 * @param {any} pValue
 * @returns {boolean}
 */
export declare function hasValue<T>(pValue: T | null | undefined): pValue is T;
/**
 * try convert any value to number
 * @version 1.0.0
 * @created 2025-01-17
 */
export declare function toNumber(v: any): number;
export declare function addFullMonths(date: Date, months: number): void;
export declare function arraySplit(array: any[any], tamanho: number): any[any];
export declare function arrayToObject(array?: any, key?: any, valueAsArray?: boolean): any;
export declare function flatToNestedArray(inputFlatedArray: any[], idKey?: string, parentIdKey?: string): any[];
export declare function currentMonthDateShort(): string;
export declare function calculateGtinDigit(code: string): number;
export declare function getGtinType(code?: any): any;
export declare function deleteNotExistsProperty(object: any, properties: any): void;
export declare function dateDiffInDays(a: Date, b: Date): number;
export declare function deepCopy(arr: any[any], subKey: string, key: string, ignoreIds?: any[], replacements?: any[]): any[any];
export declare function deepFindByKey(arr: any[any], key: string, targetId: any, subKey: string, returnArrayKey?: boolean): any;
export declare function firstMonthDateShort(): string;
/**
 * Retorna todas as propriedades e métodos, incluindo as herdadas.
 * @param obj Objeto ou protótipo a ser analisado.
 * @returns Lista de nomes de propriedades e métodos.
 */
export declare function getAllProperties(obj: any): string[];
export declare function getKey(obj: object | Function | null | undefined, key: string): string | null;
/**
 *
 * @param {*} obj
 * @param {*} methodName
 * @returns string | null
 * @created 2024-07-13
 * @version 1.0.1
 */
export declare function getMethodName(obj: any, methodName: string): string | null;
export declare function isClass(func: any): boolean;
export declare function singleArrayEquals(arr1?: any[], arr2?: any[]): boolean;
export declare function to01(value?: any): number;
export declare function toArray(value?: any, delimiter?: string): any[] | null | undefined;
export declare function toDate(pValue: any, pFormat?: any): Date;
export declare function toYesNo(value?: any): string;
export declare function valueOrNull(value?: any): any;
export declare function valueOrUndef(value?: any): any;
export declare function getTempNumberId(currentData: any[], tempIdPropName: string): number;
/**
 * get or create property or array element if not exists
 * @param getWhere where find
 * @param key key to find
 * @param initialValue initial value, if is created
 * @created 2025-10-06
 * @version 1.0.0
 * @author aalencarvz1
 */
export declare function getOrCreateProp(getWhere: any, key: string, initialValue?: any): any;
/**
 * set or create property or array element if not exists with initialValue
 * @param getWhere where find
 * @param key key to find
 * @param initialValue initial value, if is created
 * @created 2025-10-06
 * @version 1.0.0
 * @author aalencarvz1
 */
export declare function setOrCreateProp(getWhere: any, key: string, initialValue?: any): any;
export declare function hexToHsl(hex: string): {
    h: number;
    s: number;
    l: number;
};
export declare function hslToHex(h: number, s: number, l: number): string;
export declare function adjustLightness(hex: string, percent: number): string;
export declare function hexToOklch(hex: string): any;
export declare function oklchToHex(L: number, C: number, H: number): string;
export declare function adjustOklchLightness(hex: string, percent: number): string;
