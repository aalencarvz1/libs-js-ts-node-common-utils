# 🛠️ common-utils

Utilitários comuns para facilitar o desenvolvimento em **JavaScript** e **Node.js**.

[![npm version](https://badge.fury.io/js/common-utils.svg)](https://badge.fury.io/js/common-utils)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
![TypeScript](https://badgen.net/badge/Built%20with/TypeScript/blue)

## 📦 Instalação

```bash
npm install common-utils
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

## 🛠️ Scripts disponíveis

- `npm run build` – Compila os arquivos TypeScript para JavaScript em `dist/`.

## 🧰 Tecnologias

- [TypeScript](https://www.typescriptlang.org/)

## 👤 Autor

Desenvolvido por [aalencarvz@gmail.com](mailto:aalencarvz@gmail.com)

## 📄 Licença

Distribuído sob a licença ISC. Veja `LICENSE` para mais informações.
