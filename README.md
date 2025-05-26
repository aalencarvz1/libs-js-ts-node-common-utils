# 🛠️ common-utils

A lightweight TypeScript utility library providing helper functions for date manipulation, type checking, array operations, GTIN validation, and more.

[![npm version](https://badge.fury.io/js/common-utils.svg)](https://badge.fury.io/js/common-utils)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
![TypeScript](https://badgen.net/badge/Built%20with/TypeScript/blue)

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Functions](#functions)
- [License](#license)


## 📦 Instalation

You can install `common-utils` via npm (assuming it's published) or by cloning the repository.

### Using npm
```bash
npm install @aalencarv/common-utils
```

### From Source
Clone the repository and install dependencies:

```bash
git clone https://github.com/aalencarvz1/libs-js-ts-node-common-utils.git common-utils
cd common-utils
npm install
```

## Usage

Import the functions you need in your TypeScript or JavaScript project:

```typescript
import { getMoment, toBool, toNumber } from '@aalencarv/common-utils';

// Example: Get current date and time
console.log(getMoment()); // e.g., "26/05/2025 11:39:00.123"

// Example: Convert value to boolean
console.log(toBool("yes")); // true
console.log(toBool("0")); // false

// Example: Convert string to number
console.log(toNumber("123.45")); // 123.45
```

## Functions

The following table lists all exported functions in the `common-utils` library, including their parameters, return types, and a brief description of their functionality.

| Name                     | Parameters                                      | Return Type | Description                                                                 |
|--------------------------|------------------------------------------------|-------------|-----------------------------------------------------------------------------|
| `getMoment`              | None                                           | `string`    | Returns the current date and time in the format `DD/MM/YYYY HH:mm:ss.SSS`.  |
| `toBool`                 | `pValue: any`                                  | `boolean`   | Converts a value to a boolean based on specific rules (e.g., non-zero numbers, non-empty strings). |
| `typeOf`                 | `value: any`                                   | `string`    | Returns the type of a value, handling arrays and NodeList specifically.     |
| `isArray`                | `obj: any`                                     | `boolean`   | Checks if a value is an array.                                             |
| `firstValid`             | `arr_valores: any[]`, `check_null: boolean = true` | `any`       | Returns the first non-undefined (and optionally non-null) element in an array. |
| `hasValue`               | `pValue: T \| null \| undefined`                 | `boolean`   | Checks if a value is defined, non-null, and non-empty (for strings, arrays, objects). |
| `toNumber`               | `v: any`                                       | `number`    | Converts a value to a number, handling strings with commas or dots.         |
| `addFullMonths`          | `date: Date`, `months: number`                 | `void`      | Adds a specified number of months to a Date object, adjusting to the last day if needed. |
| `arraySplit`             | `array: any[]`, `tamanho: number`              | `any[][]`   | Splits an array into chunks of a specified size.                           |
| `arrayToObject`          | `array?: any`, `key?: any`                     | `any`       | Converts an array of objects to a nested object based on specified keys.    |
| `currentMonthDateShort`  | None                                           | `string`    | Returns the current date in `YYYY-MM-DD` format.                            |
| `calculateGtinDigit`     | `code: string`                                 | `number`    | Calculates the check digit for a GTIN code.                                 |
| `getGtinType`            | `code?: any`                                   | `any`       | Validates a GTIN code and returns its type (8, 12, 13, or 14) if valid.     |
| `deleteNotExistsProperty`| `object: any`, `properties: any`               | `void`      | Deletes properties from an object that are not in the provided list.        |
| `dateDiffInDays`         | `a: Date`, `b: Date`                           | `number`    | Calculates the difference in days between two dates.                        |
| `deepCopy`               | `arr: any[]`, `subKey: string`, `key: string`, `ignoreIds?: any[]`, `replacements?: any[]` | `any[]` | Creates a deep copy of an array of objects, ignoring specified IDs and applying replacements. |
| `deepFindByKey`          | `arr: any[]`, `key: string`, `targetId: any`, `subKey: string`, `returnArrayKey?: boolean` | `any` | Recursively finds an object in an array by a key, optionally returning the array and index. |
| `firstMonthDateShort`    | None                                           | `string`    | Returns the first day of the current month in `YYYY-MM-DD` format.          |
| `getAllProperties`       | `obj: any`                                     | `string[]`  | Returns all properties and methods of an object, including inherited ones.  |
| `getKey`                 | `obj: object \| Function \| null \| undefined`, `key: string` | `string \| null` | Finds a case-insensitive key in an object or function.                     |
| `getMethodName`          | `obj: any`, `methodName: string`               | `string \| null` | Finds a case-insensitive method name in an object or its prototype chain.  |
| `isClass`                | `func: any`                                    | `boolean`   | Checks if a function is a class (has a constructor in its prototype).      |
| `singleArrayEquals`      | `arr1?: any[]`, `arr2?: any[]`                 | `boolean`   | Checks if two arrays are equal by comparing elements.                       |
| `to01`                   | `value?: any`                                  | `number`    | Converts a value to 1 (true) or 0 (false) based on `toBool`.                |
| `toArray`                | `value?: any`, `delimiter?: string`            | `any[] \| null \| undefined` | Converts a value to an array, splitting strings by a delimiter.            |
| `toDate`                 | `pValue: any`, `pFormat?: any`                 | `Date`      | Converts a value to a Date object, supporting various formats.              |
| `toYesNo`                | `value?: any`                                  | `string`    | Converts a value to "yes" or "no" based on `toBool`.                        |
| `valueOrNull`            | `value?: any`                                  | `any`       | Returns the value if it has a value, otherwise null.                        |
| `valueOrUndef`           | `value?: any`                                  | `any`       | Returns the value if it has a value, otherwise undefined.                   |
| `getTempNumberId`        | `currentData: any[], tempIdPropName: string `  | `number`    | Generates a unique random number ID for an array of objects, avoiding duplicates based on the specified property name (defaults to 'tempId'). |


## 🧰 Tecnologies

- [TypeScript](https://www.typescriptlang.org/)

## 👤 Author

[![Aalencar](https://avatars.githubusercontent.com/u/69355209?v=4&size=32)](https://github.com/aalencarvz1)
[@aalencarvz1](https://github.com/aalencarvz1)


## 📄 Licence

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
