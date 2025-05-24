# 🛠️ common-utils

Utilitários comuns para facilitar o desenvolvimento em **JavaScript** e **Node.js**.

[![npm version](https://badge.fury.io/js/common-utils.svg)](https://badge.fury.io/js/common-utils)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
![TypeScript](https://badgen.net/badge/Built%20with/TypeScript/blue)

## 📦 Instalação

```bash
npm install github:aalencarvz1/libs-js-ts-node-common-utils
```

## 🚀 Uso

```ts
import { getMoment, toBool, MS_PER_DAY, YEARS, MONTHS, SHORT_MONTHS } from 'common-utils';

console.log(getMoment());
console.log(toBool("true"));
console.log(MS_PER_DAY);
console.log(YEARS);
```

## 📚 API

### 📆 Constantes

#### `MS_PER_DAY: number`

Quantidade de milissegundos em um dia (24h).

```ts
console.log(MS_PER_DAY); // 86400000
```

---

#### `YEARS: number[]`

Array de 10 anos, com base no ano atual, contendo 5 anos anteriores e 5 posteriores.

```ts
console.log(YEARS); // Ex: [2019, 2020, ..., 2028]
```

---

#### `MONTHS: string[]`

Array com o nome dos meses em inglês, por extenso.

```ts
console.log(MONTHS); // ['january', 'february', ..., 'december']
```

---

#### `SHORT_MONTHS: string[]`

Array com o nome dos meses em inglês, em formato abreviado.

```ts
console.log(SHORT_MONTHS); // ['jan', 'feb', ..., 'dec']
```

---

### 🕒 Funções

#### `getMoment(): string`

Retorna a data e hora atual no formato `dd/mm/yyyy hh:mm:ss.mmm`.

```ts
console.log(getMoment()); 
// Exemplo: "24/05/2025 16:33:12.123"
```

---

#### `toBool(value: any): boolean`

Converte diferentes tipos de entrada para `boolean`.

- Strings como `"true"`, `"1"`, `"yes"` retornam `true`.
- Strings como `"false"`, `"0"`, `"no"` retornam `false`.
- Números positivos retornam `true`.
- Zero, `null`, `undefined`, strings vazias retornam `false`.

```ts
toBool("true");      // true
toBool("false");     // false
toBool(1);           // true
toBool(0);           // false
toBool("yes");       // true
toBool("no");        // false
```

---

#### `typeOf(value: any): string`

Retorna o tipo do valor fornecido, com tratamento especial para arrays e `NodeList`.

- Retorna `"array"` se o valor for um array ou um `NodeList`.
- Caso contrário, retorna o resultado de `typeof`.

🔍 **Diferencial:** ao contrário do operador `typeof`, que retorna `"object"` para arrays, essa função retorna `"array"` explicitamente.

```ts
typeOf([1, 2, 3]);            // "array"
typeOf(document.querySelectorAll('div')); // "array" (se houver DOM)
typeOf("texto");              // "string"
typeOf(42);                   // "number"
typeOf({ nome: "João" });     // "object"
typeOf(null);                 // "object"
```

---

#### `firstValid(arr_valores: any[], check_null?: boolean): any`

Retorna o **primeiro valor válido** de um array. A função percorre os elementos do array e retorna o primeiro que:

- **Não é `undefined`**, e
- **Não é `null`** (a menos que `check_null` seja definido como `false`)

Se não encontrar nenhum valor válido ou se o parâmetro não for um array, retorna `null` e exibe erro no console.

##### Parâmetros:
- `arr_valores`: array com os valores a verificar.
- `check_null`: se `true` (padrão), também ignora valores `null`.

```ts
firstValid([undefined, null, 0]);      // 0
firstValid([undefined, null, "x"]);    // "x"
firstValid([undefined, null], false);  // null
firstValid(["", 0, "a"]);              // "" (string vazia é válida)
```

---

#### `hasValue<T>(pValue: T | null | undefined): pValue is T`

Verifica se um valor pode ser considerado **"não vazio"** de forma segura e inteligente, com base no seu tipo.

##### Considerações:
- Para **strings**: retorna `true` se não for vazia nem composta apenas por espaços.
- Para **arrays**: `true` se tiver ao menos um item.
- Para **objetos**: `true` se tiver propriedades ou for uma instância de `Date`.
- Para tipos primitivos: `true` se não for `null` ou `undefined`.
- Para **objetos vazios**, arrays vazios ou strings vazias: `false`.

##### Exemplo de uso:

```ts
hasValue("teste");          // true
hasValue("   ");            // false
hasValue([1, 2, 3]);        // true
hasValue([]);               // false
hasValue({ a: 1 });         // true
hasValue({});               // false
hasValue(new Date());       // true
hasValue(undefined);        // false
hasValue(null);             // false
```

---

#### `toNumber(v: any): number | null`

Converte um valor para número, com suporte a strings numéricas em formatos internacionais (vírgula e ponto como separadores decimais).

##### Funcionalidades:
- Aceita `number`, `boolean` e `string`.
- Remove caracteres não numéricos.
- Interpreta corretamente formatos como:
  - `1,23` → `1.23`
  - `1.234,56` → `1234.56`
  - `1,234.56` → `1234.56`

##### Retorna:
- Um `number` válido, se possível.
- `null`, caso a conversão não seja possível.

##### Exemplos:

```ts
toNumber(42);              // 42
toNumber(true);            // 1
toNumber("123");           // 123
toNumber("1,23");          // 1.23
toNumber("1.234,56");      // 1234.56
toNumber("1,234.56");      // 1234.56
toNumber("abc");           // null
toNumber(null);            // null
```

---


## 🧰 Tecnologias

- [TypeScript](https://www.typescriptlang.org/)

## 👤 Autor

[![Aalencar](https://avatars.githubusercontent.com/u/69355209?v=4&size=32)](https://github.com/aalencarvz)

Desenvolvido por [@aalencarvz](https://github.com/aalencarvz)


## 📄 Licença

Distribuído sob a licença ISC. Veja `LICENSE` para mais informações.
