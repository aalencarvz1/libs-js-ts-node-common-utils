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
export declare function typeOf(value: any): string;
export declare function isArray(obj: any): boolean;
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
