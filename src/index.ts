
export const MS_PER_DAY = 1000 * 60 * 60 * 24;
export const YEARS = [0,1,2,3,4,5,6,7,8,9].map(el=>el - 5 + new Date().getFullYear());
export const MONTHS = ['january','february','march','april','may','june','july','august','september','october','november','december'];
export const SHORT_MONTHS = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];


export function getMoment() : string {
    let moment : any = new Date();
    moment=moment.getDate().toString().padStart(2,'0')+'/'+((moment.getMonth()+1).toString().padStart(2,'0'))+'/'+moment.getFullYear()+' '+moment.getHours()+':'+moment.getMinutes()+':'+moment.getSeconds()+'.'+moment.getMilliseconds();
    return moment;
};

export function toBool(pValue : any) : boolean{
    switch(typeof pValue) {
        case "boolean":
            return pValue;
        case "string":
            return ["0","false","not","no","n","não","never"," ","","null"].indexOf(pValue.trim().toLowerCase()) === -1;                
        case "number": 
            return pValue !== 0;
        default:
            return pValue?true:false;
    }
}


/**
 * returns type of value
 * @version 1.0.0
 * @created 2025-01-17
 */
export function typeOf(value : any) : "array" | "object" | "function" | "string" | "number" | "boolean" | "undefined" | "symbol" | "bigint" | "null" | "unknown" {
    if (typeof NodeList != 'undefined') {
        if (Array.isArray(value) || value instanceof NodeList || value instanceof Array) {
            return "array";
        }
    } else {
        if (Array.isArray(value) || value instanceof Array) {
            return "array";
        }
    }
    return typeof value;
}

export function isArray(value : any) : value is any[] | NodeList {
    return typeOf(value) === "array";
}
  

/**
 * returns first element of array that has value
 * @version 1.0.0
 * @created 2025-01-17
 */
export function firstValid(arr_valores: any[],check_null: boolean = true) : any {
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
							};
						}
					} else {
						for (let i = 0; i < q; i++) {
							if (typeof arr_valores[i] !== "undefined") {
								return arr_valores[i];
							}
						}
					}
				} else {
					throw new Error("tipo nao esperado: " + typeOf(arr_valores));
				}
			} 
		}            
		return null;
	}catch(e: any){
		console.error(e);
		return null;
	} 
};


/**
 * 
 * @param {any} pValue 
 * @returns {boolean}
 */
export function hasValue<T>(pValue: T | null | undefined) : pValue is T {
    let result = false;
    const tpof = typeOf(pValue);
    if (tpof !== "undefined" && pValue != null) { // eslint-disable-line eqeqeq
        if (tpof === "object") {
            if (Object.keys(pValue).length > 0
                || Object.getOwnPropertySymbols(pValue).length > 0
                || ['DATE'].indexOf(pValue?.constructor?.name?.toUpperCase()) > - 1
            ) {
                result = true;
            } 
        } else if (tpof === "array") {
            if ((pValue as any[]).length > 0) {
                result = true;
            }
        } else if (tpof === "string") {
            if ((pValue as string).trim().length > 0) {
                result = true;
            }
        } else {
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
export function toNumber(v: any) : number {
	let r : number = 0;
	try {
		const t = typeof v;
		if (t === 'number') {
			r = v;
		} else {
			if (t === 'boolean') {
				r = Number(v);  
			} else if (t === 'string') {
				r = Number(v);
				if (isNaN(r)) {
					v = v.replace(/[^\d|,|.|\-|+]+/ig,'');
					if (v.length > 0) { 
						const pc = v.indexOf(",");
						const pp = v.indexOf(".");
						if (pc > -1 && pp > -1) {
							if (pp > pc) {
								r = Number(v.replaceAll(",",""));
							} else {
								r = Number(v.replaceAll(".","").replace(",","."));
							}
						} else {
							if (pc > -1) {
								r = Number(v.replace(",","."));
							} else {
								r = Number(v);
							}
						}
					}
				}
			}
		}
	} catch(e: any) {
		console.error(e);
	}
	return r;
}


export function addFullMonths(date: Date, months: number) : void {
	const currentMonth = date.getUTCMonth();        
	date.setUTCMonth(date.getUTCMonth() + months);
	if (date.getUTCMonth() > currentMonth + months) {
		date.setUTCDate(0);
	} 
	if (date.getUTCDate() != 1) {
		const lastDate = new Date(date.getUTCFullYear(),date.getUTCMonth()+1,0);
		date.setUTCDate(lastDate.getUTCDate());
	}
}

export function arraySplit(array: any[any], tamanho: number) : any[any] {
	const result : any[any] = [];
	for (let i : number = 0; i < array.length; i += tamanho) {
		result.push(array.slice(i, i + tamanho));
	}
	return result;
}

export function arrayToObject(array?: any,key?: any, valueAsArray?: boolean) : any {
	const result : any = {};
	if (array && key) {
		valueAsArray = firstValid([valueAsArray,true]);
		if (typeOf(key) === 'array') {                
			let currentPath = null;
			if (key.length > 1) {
				for(const i in array) {
					result[array[i][key[0]]] = result[array[i][key[0]]] || {};
					currentPath = result[array[i][key[0]]];
					for(let j : number = 1; j < key.length; j++) {
						currentPath[array[i][key[j]]] = currentPath[array[i][key[j]]] || {};                        
						if (j === key.length -1) {
							if (valueAsArray) {
								if (typeOf(currentPath[array[i][key[j]]]) !== 'array') currentPath[array[i][key[j]]] = []; 
								currentPath[array[i][key[j]]].push(array[i]);
							} else {
								currentPath[array[i][key[j]]] = array[i];
							}
						}
						currentPath = currentPath[array[i][key[j]]];                        
					}
				}
			} else {
				if (valueAsArray) {
					for(const i in array) {
						result[array[i][key[0]]] = result[array[i][key[0]]] || [];
						result[array[i][key[0]]].push(array[i]);
					}                    
				} else {
					for(const i in array) {
					result[array[i][key[0]]] = array[i];
				} 
				}
			}
		} else {
			if (valueAsArray) {
				for(const i in array) { 
					result[array[i][key]] = result[array[i][key]] || [];
					result[array[i][key]].push(array[i]);
				}
			} else {
				for(const i in array) { 
					result[array[i][key]] = array[i];
				}
			}
		}
	}        
	return result;
}

export function currentMonthDateShort() : string  {
	let result : Date | string = new Date();
	result = result.toISOString();
	result = result.substring(0,10);
	return result;
}


export function calculateGtinDigit(code: string) : number {
	let sum = 0;
	let multiplier = 3;

	// Percorre os dígitos de trás para frente (exceto o último, que é o check digit)
	for (let i : number = code.length - 2; i >= 0; i--) {
		let num = parseInt(code[i]);
		sum += num * multiplier;
		multiplier = multiplier === 3 ? 1 : 3; // Alterna entre 3 e 1
	}

	let digit = (10 - (sum % 10)) % 10; // Se for 10, vira 0
	return digit;
};


export function getGtinType(code?: any) : any {
	const result : any = {
		isGtin : false
	};
	if (hasValue(code)) {
		if (typeof code !== 'string') code = code.toString();
		const numbers = code?.replace(/\D/g, "") || ""; // Remove caracteres não numéricos        
		if (![8, 12, 13, 14].includes(numbers.length)) return result;
	
		const calculatedDigit = calculateGtinDigit(numbers);
		const informatedDigit = parseInt(numbers[numbers.length - 1]);
		result.isGtin = calculatedDigit === informatedDigit;
		if (result.isGtin) {
			result.type = numbers.length;
		}
	}
	return result;
};


export function deleteNotExistsProperty(object: any,properties: any) : void{
	properties = toArray(properties || []);
	properties = properties.join(',').toLowerCase().split(',');
	for(const k2 in object) {
		if (properties.indexOf(k2.toLowerCase().trim()) === -1) {
			delete object[k2];
		}
	}
}

// a and b are javascript Date objects
export function dateDiffInDays(a: Date, b: Date) : number {
	
	// Discard the time and time-zone information.
	const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
	const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

	return Math.floor((utc2 - utc1) / MS_PER_DAY);
}

export function deepCopy(arr: any[any], subKey: string, key: string, ignoreIds?: any[], replacements?: any[]) : any[any] {
	const result = [];
	for (const k in arr) {
		if ((ignoreIds||[]).indexOf(arr[k][key]) === -1) {                
			let toPush = {...arr[k]};
			const subsTemp = toPush[subKey];                
			toPush[subKey] = null;

			toPush = (replacements||[]).find(el=>el[key] == toPush[key]) || toPush; // eslint-disable-line eqeqeq

			delete toPush[subKey];
			result.push(toPush);
			if (subsTemp && Array.isArray(subsTemp)) {
				result[result.length-1][subKey] = deepCopy(subsTemp, subKey, key, ignoreIds, replacements);
			}
		}

		
	}
	return result; 
}


export function deepFindByKey(arr: any[any], key: string, targetId: any, subKey: string, returnArrayKey?: boolean) : any {
	//for (const obj of arr) {
	for (const k in arr) {
		// Verifica se o id atual é o que estamos procurando
		if (arr[k][key] === targetId) {
			return returnArrayKey ? {array:arr,key:k} : arr[k]; // Retorna o objeto encontrado
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

export function firstMonthDateShort() : string {
	let result : Date | string = new Date();
	result.setDate(1);
	result = result.toISOString();
	result = result.substring(0,10);
	return result;
} 

/**
 * Retorna todas as propriedades e métodos, incluindo as herdadas.
 * @param obj Objeto ou protótipo a ser analisado.
 * @returns Lista de nomes de propriedades e métodos.
 */
export function getAllProperties(obj: any): string[] {
	const properties = new Set<string>();

	while (obj && obj !== Object.prototype) {
		// Adiciona todas as propriedades e métodos do nível atual
		Object.getOwnPropertyNames(obj).forEach((prop) => properties.add(prop));
		obj = Object.getPrototypeOf(obj); // Move para o próximo nível da herança
	}

	return [...properties];
}


export function getKey(obj: object | Function | null | undefined, key: string) : string | null {  // eslint-disable-line @typescript-eslint/no-unsafe-function-type
	let result = null;
	try {
		const tObj = typeof obj;
		if (tObj !== "undefined" && obj != null) { // eslint-disable-line eqeqeq
			if (tObj === "object" || tObj === "function") {
				if (typeof key !== "undefined" && key != null) { // eslint-disable-line eqeqeq
					//let objKeys = Object.keys(obj);
					const objKeys = Object.getOwnPropertyNames(obj);
					const keyTemp = key.trim().toLowerCase();
					for(let i = 0; i < objKeys.length; i++) {
						if (objKeys[i].trim().toLowerCase() === keyTemp) {
							result = objKeys[i];
							break;
						}
					}
				}                    
			}
		}
	} catch(e: any){
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
export function getMethodName(obj:any,methodName:string) : string | null{
	const ownPropName : string = `${obj.name}_hashMethodsNames`;
	if (!hasValue(obj[ownPropName])) {            
		obj[ownPropName] = {};

		let obj2 = obj;
		do {
			if (obj2 && typeof obj2 !== 'undefined' && obj2 !== undefined && obj2 !== null) {
				const keys : any = Reflect.ownKeys(obj2);
				if (keys && typeof keys !== 'undefined' && keys.length > 0) {
					for (const k in keys) {
						try {
							if (typeof keys[k] === 'string' && [ 'caller', 'callee', 'arguments'].indexOf(keys[k]) === -1 && typeof (obj2||{})[keys[k]]  === 'function') obj[ownPropName][keys[k].toLowerCase()] = keys[k];
						} catch {
							obj[ownPropName][keys[k].toLowerCase()] = keys[k];
						}
					};
				}
			}
		} while (obj2 = Reflect.getPrototypeOf(obj2)); 
	}

	if (obj[ownPropName][methodName.trim().toLowerCase()]) {
		return obj[ownPropName][methodName.trim().toLowerCase()];
	} 
	return null;
}


export function isClass(func: any): boolean {
	return (
		typeof func === 'function' &&
		func.prototype &&
		Object.getOwnPropertyNames(func.prototype).includes('constructor')
	);
}


export function singleArrayEquals(arr1?:any[], arr2?:any[]) : boolean {
	if (arr1?.length !== arr2?.length) return false;
	return arr1?.every((val, index) => val === (arr2||[])[index]) || false;
}


export function to01(value?: any) : number {
	return toBool(value) ? 1 : 0;
}

export function toArray(value?: any,delimiter?: string ) : any[] | null | undefined {
	let result = value;
	if (value) {
		if (typeof value === 'string') {
			delimiter = delimiter || ',';
			result = value.split(delimiter || ',');
		} else if (typeOf(value) !== 'array') {
			result = [value];
		}
	}
	return result;
}

export function toDate(pValue: any, pFormat?: any ) : Date {
	let result : any = null;
	if (pValue && pValue != null) {
		if (typeof pValue === 'object') {
			result = new Date(pValue);
		} else {
			if (pValue.indexOf("-") > -1) {
				pValue = pValue.substring(0,10).split("-").map(Number);
				result = new Date(pValue[0],pValue[1]-1,pValue[2]);
			} else if (pValue.indexOf("/") > -1) {
				pValue = pValue.substring(0,10).split("/").reverse().map(Number)
				result = new Date(pValue[0],pValue[1]-1,pValue[2]);
			} else {
				if (hasValue(pFormat)) {
					switch(pFormat.trim().toLowerCase()) {
						case "yyyymmdd":
							if(!/^(\d){8}$/.test(pValue)) throw new Error(`invalid date: ${pValue}`);
							let y = pValue.substr(0,4),
								m = pValue.substr(4,2),
								d = pValue.substr(6,2);
							result = new Date(y,m,d);
							break;
						default:
							throw new Error(`not expected date format: ${pFormat}`);
					}
				} else {
					result = new Date(pValue);
				}
			}
		}
	}
	return result;
}


export function toYesNo(value?: any) : string {
	return toBool(value) ? 'yes' : 'no';
}

export function valueOrNull(value?: any) : any {
	return hasValue(value) ? value : null;
}

export function valueOrUndef(value?: any) : any {
	return hasValue(value) ? value : undefined;
}

export function getTempNumberId(currentData: any[], tempIdPropName: string) : number {
	let result = Math.random();
	if (hasValue(currentData)) {
		tempIdPropName = tempIdPropName || 'tempId';
		while(hasValue(currentData.find(el=>el[tempIdPropName] == result))) result = Math.random();
	}
	return result;
}

/**
 * get or create property or array element if not exists
 * @param getWhere where find
 * @param key key to find
 * @param initialValue initial value, if is created
 * @created 2025-10-06
 * @version 1.0.0
 * @author aalencarvz1
 */
export function getOrCreateProp(getWhere: any, key: string, initialValue?: any) : any {
	let result;
	if (hasValue(key)) {
		if (typeOf(getWhere) === 'array') {
			result = getWhere.find((el: any)=>typeOf(el) === 'object' && Object.keys(el).indexOf(key) > -1);
			if (typeof result === "undefined") {
				result = {
					[key]: initialValue
				}
				getWhere.push(result);
			} 
            result = result[key];
		} else if (typeOf(getWhere) === 'object') {
			let realKey = getKey(getWhere,key);
			if (hasValue(realKey)) {
				result = getWhere[realKey];
			} else {
				getWhere[key] = initialValue;
				result = getWhere[key];
			}			
		} 
	}
	return result;
}

/**
 * set or create property or array element if not exists with initialValue
 * @param getWhere where find
 * @param key key to find
 * @param initialValue initial value, if is created
 * @created 2025-10-06
 * @version 1.0.0
 * @author aalencarvz1
 */
export function setOrCreateProp(getWhere: any, key: string, initialValue?: any) : any {
	let result : any;
	if (hasValue(key)) {
		if (typeOf(getWhere) === 'array') {
			let index = getWhere.findIndex((el: any)=>typeOf(el) === 'object' && Object.keys(el).indexOf(key) > -1);
			if (typeof index === "undefined" || index === -1) {
				result = {
					[key]: initialValue
				}
				getWhere.push(result);
			} else {
                result = getWhere[index];
                result[key] = initialValue || result[key];
            }
            result = result[key];
		} else if (typeOf(getWhere) === 'object') {
			let realKey = getKey(getWhere,key);
			if (hasValue(realKey)) {
                getWhere[realKey] = initialValue || getWhere[realKey];
				result = getWhere[realKey];
			} else {
				getWhere[key] = initialValue;
				result = getWhere[key];
			}			
		} 
	}
	return result;
}


export function hexToHsl(hex: string) {
  hex = hex.replace('#', '');

  let r = parseInt(hex.substring(0,2), 16) / 255;
  let g = parseInt(hex.substring(2,4), 16) / 255;
  let b = parseInt(hex.substring(4,6), 16) / 255;

  let max = Math.max(r, g, b),
      min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }

    (h as any) /= 6;
  }

  return {
    h: Math.round((h as any) * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  };
}

export function hslToHex(h: number, s: number, l: number) : string {
  s /= 100;
  l /= 100;

  let c = (1 - Math.abs(2*l - 1)) * s;
  let x = c * (1 - Math.abs((h/60) % 2 - 1));
  let m = l - c/2;
  let r=0, g=0, b=0;

  if (h < 60) [r,g,b] = [c,x,0];
  else if (h < 120) [r,g,b] = [x,c,0];
  else if (h < 180) [r,g,b] = [0,c,x];
  else if (h < 240) [r,g,b] = [0,x,c];
  else if (h < 300) [r,g,b] = [x,0,c];
  else [r,g,b] = [c,0,x];

  r = Math.round((r+m)*255);
  g = Math.round((g+m)*255);
  b = Math.round((b+m)*255);

  return "#" + [r,g,b].map(v => v.toString(16).padStart(2,'0')).join('');
}

export function adjustLightness(hex: string, percent: number) : string {
	let result = hex;
	const { h, s, l } = hexToHsl(hex);
	const newL = Math.max(0, Math.min(100, l + percent));
	result = hslToHex(h, s, l);
	console.log('iiiiiiiiiiii x ',hex, h,s,l,percent,result);
	return result;
}

export function hexToOklch(hex: string) : any {
  hex = hex.replace("#", "");

  let r = parseInt(hex.slice(0, 2), 16) / 255;
  let g = parseInt(hex.slice(2, 4), 16) / 255;
  let b = parseInt(hex.slice(4, 6), 16) / 255;

  // sRGB → Linear
  [r, g, b] = [r, g, b].map(v =>
    v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
  );

  // Linear RGB → OKLab
  const l = 0.4122214708*r + 0.5363325363*g + 0.0514459929*b;
  const m = 0.2119034982*r + 0.6806995451*g + 0.1073969566*b;
  const s = 0.0883024619*r + 0.2817188376*g + 0.6299787005*b;

  const l_ = Math.cbrt(l);
  const m_ = Math.cbrt(m);
  const s_ = Math.cbrt(s);

  const L = 0.2104542553*l_ + 0.7936177850*m_ - 0.0040720468*s_;
  const a = 1.9779984951*l_ - 2.4285922050*m_ + 0.4505937099*s_;
  const b2 = 0.0259040371*l_ + 0.7827717662*m_ - 0.8086757660*s_;

  // OKLab → OKLCH
  const C = Math.sqrt(a*a + b2*b2);
  const H = (Math.atan2(b2, a) * 180 / Math.PI + 360) % 360;

  return { L, C, H };
}

export function oklchToHex(L: number, C: number, H: number) : string {
  const hRad = H * Math.PI / 180;
  const a = C * Math.cos(hRad);
  const b = C * Math.sin(hRad);

  const l_ = L + 0.3963377774*a + 0.2158037573*b;
  const m_ = L - 0.1055613458*a - 0.0638541728*b;
  const s_ = L - 0.0894841775*a - 1.2914855480*b;

  const l = l_**3;
  const m = m_**3;
  const s = s_**3;

  let r =  4.0767416621*l - 3.3077115913*m + 0.2309699292*s;
  let g = -1.2684380046*l + 2.6097574011*m - 0.3413193965*s;
  let b2 = -0.0041960863*l - 0.7034186147*m + 1.7076147010*s;

  // Linear → sRGB
  [r, g, b2] = [r, g, b2].map(v =>
    v <= 0.0031308 ? 12.92*v : 1.055*Math.pow(v, 1/2.4) - 0.055
  );

  const toHex = (v: number) =>
    Math.max(0, Math.min(255, Math.round(v * 255)))
      .toString(16)
      .padStart(2, "0");

  return `#${toHex(r)}${toHex(g)}${toHex(b2)}`;
}

export function adjustOklchLightness(hex: string, percent: number) : string {
  const { L, C, H } = hexToOklch(hex);
  const newL = Math.max(0, Math.min(1, L + percent));
  return oklchToHex(newL, C, H);
}

