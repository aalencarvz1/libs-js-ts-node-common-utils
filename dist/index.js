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
    switch (typeof pValue) {
        case "boolean":
            return pValue;
        case "string":
            return ["0", "false", "not", "no", "n", "não", "never", " ", "", "null"].indexOf(pValue.trim().toLowerCase()) === -1;
        case "number":
            return pValue !== 0;
        default:
            return pValue ? true : false;
    }
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
export function addFullMonths(date, months) {
    const currentMonth = date.getUTCMonth();
    date.setUTCMonth(date.getUTCMonth() + months);
    if (date.getUTCMonth() > currentMonth + months) {
        date.setUTCDate(0);
    }
    if (date.getUTCDate() != 1) {
        const lastDate = new Date(date.getUTCFullYear(), date.getUTCMonth() + 1, 0);
        date.setUTCDate(lastDate.getUTCDate());
    }
}
export function arraySplit(array, tamanho) {
    const result = [];
    for (let i = 0; i < array.length; i += tamanho) {
        result.push(array.slice(i, i + tamanho));
    }
    return result;
}
export function arrayToObject(array, key) {
    const result = {};
    if (array && key) {
        if (typeOf(key) === 'array') {
            let currentPath = null;
            if (key.length > 1) {
                for (const i in array) {
                    result[array[i][key[0]]] = result[array[i][key[0]]] || {};
                    currentPath = result[array[i][key[0]]];
                    for (let j = 1; j < key.length; j++) {
                        currentPath[array[i][key[j]]] = currentPath[array[i][key[j]]] || {};
                        if (j === key.length - 1) {
                            if (typeOf(currentPath[array[i][key[j]]]) !== 'array')
                                currentPath[array[i][key[j]]] = [];
                            currentPath[array[i][key[j]]].push(array[i]);
                        }
                        currentPath = currentPath[array[i][key[j]]];
                    }
                }
            }
            else {
                for (const i in array) {
                    result[array[i][key[0]]] = result[array[i][key[0]]] || [];
                    result[array[i][key[0]]].push(array[i]);
                }
            }
        }
        else {
            for (const i in array) {
                result[array[i][key]] = result[array[i][key]] || [];
                result[array[i][key]].push(array[i]);
            }
        }
    }
    return result;
}
export function currentMonthDateShort() {
    let result = new Date();
    result = result.toISOString();
    result = result.substring(0, 10);
    return result;
}
export function calculateGtinDigit(code) {
    let sum = 0;
    let multiplier = 3;
    // Percorre os dígitos de trás para frente (exceto o último, que é o check digit)
    for (let i = code.length - 2; i >= 0; i--) {
        let num = parseInt(code[i]);
        sum += num * multiplier;
        multiplier = multiplier === 3 ? 1 : 3; // Alterna entre 3 e 1
    }
    let digit = (10 - (sum % 10)) % 10; // Se for 10, vira 0
    return digit;
}
;
export function getGtinType(code) {
    const result = {
        isGtin: false
    };
    if (hasValue(code)) {
        if (typeof code !== 'string')
            code = code.toString();
        const numbers = code?.replace(/\D/g, "") || ""; // Remove caracteres não numéricos        
        if (![8, 12, 13, 14].includes(numbers.length))
            return result;
        const calculatedDigit = calculateGtinDigit(numbers);
        const informatedDigit = parseInt(numbers[numbers.length - 1]);
        result.isGtin = calculatedDigit === informatedDigit;
        if (result.isGtin) {
            result.type = numbers.length;
        }
    }
    return result;
}
;
export function deleteNotExistsProperty(object, properties) {
    properties = toArray(properties || []);
    properties = properties.join(',').toLowerCase().split(',');
    for (const k2 in object) {
        if (properties.indexOf(k2.toLowerCase().trim()) === -1) {
            delete object[k2];
        }
    }
}
// a and b are javascript Date objects
export function dateDiffInDays(a, b) {
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
    return Math.floor((utc2 - utc1) / MS_PER_DAY);
}
export function deepCopy(arr, subKey, key, ignoreIds, replacements) {
    const result = [];
    for (const k in arr) {
        if ((ignoreIds || []).indexOf(arr[k][key]) === -1) {
            let toPush = { ...arr[k] };
            const subsTemp = toPush[subKey];
            toPush[subKey] = null;
            toPush = (replacements || []).find(el => el[key] == toPush[key]) || toPush; // eslint-disable-line eqeqeq
            delete toPush[subKey];
            result.push(toPush);
            if (subsTemp && Array.isArray(subsTemp)) {
                result[result.length - 1][subKey] = deepCopy(subsTemp, subKey, key, ignoreIds, replacements);
            }
        }
    }
    return result;
}
export function deepFindByKey(arr, key, targetId, subKey, returnArrayKey) {
    //for (const obj of arr) {
    for (const k in arr) {
        // Verifica se o id atual é o que estamos procurando
        if (arr[k][key] === targetId) {
            return returnArrayKey ? { array: arr, key: k } : arr[k]; // Retorna o objeto encontrado
        }
        // Se o objeto tem uma propriedade "subs", busca recursivamente
        if (arr[k][subKey] && Array.isArray(arr[k][subKey])) {
            const result = deepFindByKey(arr[k][subKey], key, targetId, subKey, returnArrayKey);
            if (result) {
                return result; // Retorna o resultado se encontrado nos subs
            }
        }
    }
    return null; // Retorna null se não encontrar o id
}
export function firstMonthDateShort() {
    let result = new Date();
    result.setDate(1);
    result = result.toISOString();
    result = result.substring(0, 10);
    return result;
}
/**
 * Retorna todas as propriedades e métodos, incluindo as herdadas.
 * @param obj Objeto ou protótipo a ser analisado.
 * @returns Lista de nomes de propriedades e métodos.
 */
export function getAllProperties(obj) {
    const properties = new Set();
    while (obj && obj !== Object.prototype) {
        // Adiciona todas as propriedades e métodos do nível atual
        Object.getOwnPropertyNames(obj).forEach((prop) => properties.add(prop));
        obj = Object.getPrototypeOf(obj); // Move para o próximo nível da herança
    }
    return [...properties];
}
export function getKey(obj, key) {
    let result = null;
    try {
        const tObj = typeof obj;
        if (tObj !== "undefined" && obj != null) { // eslint-disable-line eqeqeq
            if (tObj === "object" || tObj === "function") {
                if (typeof key !== "undefined" && key != null) { // eslint-disable-line eqeqeq
                    //let objKeys = Object.keys(obj);
                    const objKeys = Object.getOwnPropertyNames(obj);
                    const keyTemp = key.trim().toLowerCase();
                    for (let i = 0; i < objKeys.length; i++) {
                        if (objKeys[i].trim().toLowerCase() === keyTemp) {
                            result = objKeys[i];
                            break;
                        }
                    }
                }
            }
        }
    }
    catch (e) {
        console.log(e);
    }
    return result;
}
/**
 *
 * @param {*} obj
 * @param {*} methodName
 * @returns string | null
 * @created 2024-07-13
 * @version 1.0.1
 */
export function getMethodName(obj, methodName) {
    const ownPropName = `${obj.name}_hashMethodsNames`;
    if (!hasValue(obj[ownPropName])) {
        obj[ownPropName] = {};
        let obj2 = obj;
        do {
            if (obj2 && typeof obj2 !== 'undefined' && obj2 !== undefined && obj2 !== null) {
                const keys = Reflect.ownKeys(obj2);
                if (keys && typeof keys !== 'undefined' && keys.length > 0) {
                    for (const k in keys) {
                        try {
                            if (typeof keys[k] === 'string' && ['caller', 'callee', 'arguments'].indexOf(keys[k]) === -1 && typeof (obj2 || {})[keys[k]] === 'function')
                                obj[ownPropName][keys[k].toLowerCase()] = keys[k];
                        }
                        catch {
                            obj[ownPropName][keys[k].toLowerCase()] = keys[k];
                        }
                    }
                    ;
                }
            }
        } while (obj2 = Reflect.getPrototypeOf(obj2));
    }
    if (obj[ownPropName][methodName.trim().toLowerCase()]) {
        return obj[ownPropName][methodName.trim().toLowerCase()];
    }
    return null;
}
export function isClass(func) {
    return (typeof func === 'function' &&
        func.prototype &&
        Object.getOwnPropertyNames(func.prototype).includes('constructor'));
}
export function singleArrayEquals(arr1, arr2) {
    if (arr1?.length !== arr2?.length)
        return false;
    return arr1?.every((val, index) => val === (arr2 || [])[index]) || false;
}
export function to01(value) {
    return toBool(value) ? 1 : 0;
}
export function toArray(value, delimiter) {
    let result = value;
    if (value) {
        if (typeof value === 'string') {
            delimiter = delimiter || ',';
            result = value.split(delimiter || ',');
        }
        else if (typeOf(value) !== 'array') {
            result = [value];
        }
    }
    return result;
}
export function toDate(pValue, pFormat) {
    let result = null;
    if (pValue && pValue != null) {
        if (typeof pValue === 'object') {
            result = new Date(pValue);
        }
        else {
            if (pValue.indexOf("-") > -1) {
                result = new Date(pValue.substring(0, 10).split("-").map(Number));
            }
            else if (pValue.indexOf("/") > -1) {
                result = new Date(pValue.substring(0, 10).split("/").reverse().map(Number));
            }
            else {
                if (hasValue(pFormat)) {
                    switch (pFormat.trim().toLowerCase()) {
                        case "yyyymmdd":
                            if (!/^(\d){8}$/.test(pValue))
                                throw new Error(`invalid date: ${pValue}`);
                            let y = pValue.substr(0, 4), m = pValue.substr(4, 2), d = pValue.substr(6, 2);
                            result = new Date(y, m, d);
                            break;
                        default:
                            throw new Error(`not expected date format: ${pFormat}`);
                    }
                }
                else {
                    result = new Date(pValue);
                }
            }
        }
    }
    return result;
}
export function toYesNo(value) {
    return toBool(value) ? 'yes' : 'no';
}
export function valueOrNull(value) {
    return hasValue(value) ? value : null;
}
export function valueOrUndef(value) {
    return hasValue(value) ? value : undefined;
}
export function getTempNumberId(currentData, tempIdPropName) {
    let result = Math.random();
    if (hasValue(currentData)) {
        tempIdPropName = tempIdPropName || 'tempId';
        while (hasValue(currentData.find(el => el[tempIdPropName] == result)))
            result = Math.random();
    }
    return result;
}
