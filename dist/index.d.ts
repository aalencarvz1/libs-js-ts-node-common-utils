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
export declare function addFullMonths(date: Date, months: number): void;
export declare function arraySplit(array: any[any], tamanho: number): any[any];
export declare function arrayToObject(array?: any, key?: any, valueAsArray?: boolean): any;
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
