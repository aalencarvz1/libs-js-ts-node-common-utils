export const MS_PER_DAY = 1000 * 60 * 60 * 24;
export const YEARS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(el => el - 5 + new Date().getFullYear());
export const MONTHS = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
export const SHORT_MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
export function getMoment() {
    let moment = new Date();
    moment = moment.getDate().toString().padStart(2, '0') + '/' + ((moment.getMonth() + 1).toString().padStart(2, '0')) + '/' + moment.getFullYear() + ' ' + moment.getHours() + ':' + moment.getMinutes() + ':' + moment.getSeconds() + '.' + moment.getMilliseconds();
    return moment;
}
;
export function toBool(pValue) {
    let result = false;
    if (typeof pValue !== "undefined" && pValue != null) { // eslint-disable-line eqeqeq
        if (typeof pValue === "boolean") {
            result = pValue;
        }
        else if (typeof pValue === "string" && ["0", "false", "not", "no", "n", "não", "never", " ", "", "null"].indexOf(pValue.trim().toLowerCase()) === -1) {
            result = true;
        }
        else if (typeof pValue === "number" && pValue !== 0) {
            return true;
        }
        else {
            result = pValue ? true : false;
        }
    }
    return result;
}
/**
 * returns type of value
 * @version 1.0.0
 * @created 2025-01-17
 */
export function typeOf(value) {
    if (typeof NodeList != 'undefined') {
        if (Array.isArray(value) || value instanceof NodeList || value instanceof Array) {
            return "array";
        }
    }
    else {
        if (Array.isArray(value) || value instanceof Array) {
            return "array";
        }
    }
    return typeof value;
}
export function isArray(obj) {
    return typeOf(obj) === "array";
}
/**
 * returns first element of array that has value
 * @version 1.0.0
 * @created 2025-01-17
 */
export function firstValid(arr_valores, check_null = true) {
    try {
        if (typeof arr_valores !== "undefined") {
            check_null = check_null === false ? false : true;
            if (arr_valores !== null) {
                if (typeOf(arr_valores) === "array") {
                    const q = arr_valores.length;
                    if (check_null) {
                        for (let i = 0; i < q; i++) {
                            if (typeof arr_valores[i] !== "undefined" && arr_valores[i] !== null) {
                                return arr_valores[i];
                            }
                            ;
                        }
                    }
                    else {
                        for (let i = 0; i < q; i++) {
                            if (typeof arr_valores[i] !== "undefined") {
                                return arr_valores[i];
                            }
                        }
                    }
                }
                else {
                    throw new Error("tipo nao esperado: " + typeOf(arr_valores));
                }
            }
        }
        return null;
    }
    catch (e) {
        console.error(e);
        return null;
    }
}
;
/**
 *
 * @param {any} pValue
 * @returns {boolean}
 */
export function hasValue(pValue) {
    let result = false;
    const tpof = typeOf(pValue);
    if (tpof !== "undefined" && pValue != null) { // eslint-disable-line eqeqeq
        if (tpof === "object") {
            if (Object.keys(pValue).length > 0
                || Object.getOwnPropertySymbols(pValue).length > 0
                || ['DATE'].indexOf(pValue?.constructor?.name?.toUpperCase()) > -1) {
                result = true;
            }
        }
        else if (tpof === "array") {
            if (pValue.length > 0) {
                result = true;
            }
        }
        else if (tpof === "string") {
            if (pValue.trim().length > 0) {
                result = true;
            }
        }
        else {
            result = true;
        }
    }
    return result;
}
/**
 * try convert any value to number
 * @version 1.0.0
 * @created 2025-01-17
 */
export function toNumber(v) {
    let r = 0;
    try {
        const t = typeof v;
        if (t === 'number') {
            r = v;
        }
        else {
            if (t === 'boolean') {
                r = Number(v);
            }
            else if (t === 'string') {
                r = Number(v);
                if (isNaN(r)) {
                    v = v.replace(/[^\d|,|.|\-|+]+/ig, '');
                    if (v.length > 0) {
                        const pc = v.indexOf(",");
                        const pp = v.indexOf(".");
                        if (pc > -1 && pp > -1) {
                            if (pp > pc) {
                                r = Number(v.replaceAll(",", ""));
                            }
                            else {
                                r = Number(v.replaceAll(".", "").replace(",", "."));
                            }
                        }
                        else {
                            if (pc > -1) {
                                r = Number(v.replace(",", "."));
                            }
                            else {
                                r = Number(v);
                            }
                        }
                    }
                }
            }
        }
    }
    catch (e) {
        console.error(e);
    }
    return r;
}
