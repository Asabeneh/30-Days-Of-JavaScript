<div align="center">
  <h1> 30 Days Of JavaScript: Sets and Maps</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/asabeneh/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/Asabeneh">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/asabeneh?style=social">
  </a>

<sub>Autore:
<a href="https://www.linkedin.com/in/asabeneh/" target="_blank">Asabeneh Yetayeh</a><br>
<small> Gennaio, 2020</small>
</sub>

</div>

[<< Day 9](../09_Day_Higher_order_functions/09_day_higher_order_functions.md) | [Day 11>>](../11_Day_Destructuring_and_spreading/11_day_destructuring_and_spreading.md)

![Day 10](../../images/banners/day_1_10.png)

- [Day 10](#day-10)
	- [Set](#set)
		- [Creare un set vuoto](#creating-an-empty-set)
		- [Creare un set da un array](#creating-set-from-array)
		- [Aggiungere un elemento ad un set](#adding-an-element-to-a-set)
		- [Eliminare un elemento dal set](#deleting-an-element-a-set)
		- [Verificare la presenza di un elemento nel set](#checking-an-element-in-the-set)
		- [Svuotare il set](#clearing-the-set)
		- [Unione di set](#union-of-sets)
		- [Intersezione di set](#intersection-of-sets)
		- [Differenza tra set](#difference-of-sets)
	- [Map](#map)
		- [Creare un map vuoto](#creating-an-empty-map)
		- [Creare un map da un array](#creating-an-map-from-array)
		- [Aggiungere valori ad un map](#adding-values-to-the-map)
		- [Ottenere un valore dal map](#getting-a-value-from-map)
		- [Controllare le key del map](#checking-key-in-map)
	- [Esercizi](#exercises)
		- [Esercizi: Livello 1](#exerciseslevel-1)
		- [Esercizi: Livello 2](#exerciseslevel-2)
		- [Esercizi: Livello 3](#exerciseslevel-3)

# Day 10

## Set

L'insieme è una collezione di elementi. L'insieme può contenere solo elementi unici.
Vediamo come creare un insieme nella sezione seguente.

### Creare un set vuoto

```js
const companies = new Set()
console.log(companies)
```

```sh
Set(0) {}
```

### Creare un set da un array

```js
const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
]

const setOfLanguages = new Set(languages)
console.log(setOfLanguages)
```

```sh
Set(4) {"English", "Finnish", "French", "Spanish"}
```

Set è un oggetto iterabile e possiamo iterare attraverso ogni elemento.

```js
const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
]

const setOfLanguages = new Set(languages)

for (const language of setOfLanguages) {
  console.log(language)
}
```

```sh
  English
  Finnish
  French
  Spanish
```

### Aggiungere un elemento ad un set

```js
const companies = new Set() // creating an empty set
console.log(companies.size) // 0

companies.add('Google') // add element to the set
companies.add('Facebook')
companies.add('Amazon')
companies.add('Oracle')
companies.add('Microsoft')
console.log(companies.size) // 5 elements in the set
console.log(companies)
```

```sh
Set(5) {"Google", "Facebook", "Amazon", "Oracle", "Microsoft"}
```

Possiamo anche usare il ciclo per aggiungere elementi a un insieme.

```js
const companies = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']
setOfCompanies = new Set()
for (const company of companies) {
  setOfCompanies.add(company)
}
```

```sh
Set(5) {"Google", "Facebook", "Amazon", "Oracle", "Microsoft"}

```

### Eliminare un elemento dal set

Possiamo eliminare un elemento da un insieme utilizzando un metodo di cancellazione.

```js
console.log(companies.delete('Google'))
console.log(companies.size) // 4 elements left in the set
```

### Verificare la presenza di un elemento nel set

Il metodo has può aiutare a sapere se un certo elemento esiste in un insieme.

```js
console.log(companies.has('Apple')) // false
console.log(companies.has('Facebook')) // true
```

### Svuotare il set

Rimuove tutti gli elementi da un insieme.

```js
companies.clear()
console.log(companies)
```

```sh
Set(0) {}
```

Vedere l'esempio seguente per imparare a usare set.

```js
const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
]
const langSet = new Set(languages)
console.log(langSet) // Set(4) {"English", "Finnish", "French", "Spanish"}
console.log(langSet.size) // 4

const counts = []
const count = {}

for (const l of langSet) {
  const filteredLang = languages.filter((lng) => lng === l)
  console.log(filteredLang) // ["English", "English", "English"]
  counts.push({ lang: l, count: filteredLang.length })
}
console.log(counts)
```

```js
[
  { lang: 'English', count: 3 },
  { lang: 'Finnish', count: 1 },
  { lang: 'French', count: 2 },
  { lang: 'Spanish', count: 1 },
]
```

Altri casi d'uso di set. Ad esempio, per contare gli elementi unici di un array.

```js
const numbers = [5, 3, 2, 5, 5, 9, 4, 5]
const setOfNumbers = new Set(numbers)

console.log(setOfNumbers)
```

```sh
Set(5) {5, 3, 2, 9, 4}
```

### Unione di set

Per trovare l'unione di due insiemi si può utilizzare l'operatore di divisione. Troviamo l'unione dell'insieme A e dell'insieme B (A U B)

```js
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C)
```

```sh
Set(6) {1, 2, 3, 4, 5,6}
```

### Intersezione di set

Per trovare l'intersezione di due insiemi si può utilizzare un filtro. Troviamo l'intersezione dell'insieme A e dell'insieme B (A ∩ B)

```js
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]

let A = new Set(a)
let B = new Set(b)

let c = a.filter((num) => B.has(num))
let C = new Set(c)

console.log(C)
```

```sh
Set(3) {3, 4, 5}
```

### Differenza tra set

Per trovare la differenza tra due insiemi si può utilizzare un filtro. Troviamo la differenza tra l'insieme A e l'insieme B (A \ B)

```js
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]

let A = new Set(a)
let B = new Set(b)

let c = a.filter((num) => !B.has(num))
let C = new Set(c)

console.log(C)
```

```sh
Set(2) {1, 2}
```

## Map

### Creare un map vuoto

```js
const map = new Map()
console.log(map)
```

```sh
Map(0) {}
```

### Creare un map da un array

```js
countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo'],
]
const map = new Map(countries)
console.log(map)
console.log(map.size)
```

```sh
Map(3) {"Finland" => "Helsinki", "Sweden" => "Stockholm", "Norway" => "Oslo"}
3
```

### Aggiungere valori ad un map

```js
const countriesMap = new Map()
console.log(countriesMap.size) // 0
countriesMap.set('Finland', 'Helsinki')
countriesMap.set('Sweden', 'Stockholm')
countriesMap.set('Norway', 'Oslo')
console.log(countriesMap)
console.log(countriesMap.size)
```

```sh
Map(3) {"Finland" => "Helsinki", "Sweden" => "Stockholm", "Norway" => "Oslo"}
3
```

### Ottenere un valore dal map

```js
console.log(countriesMap.get('Finland'))
```

```sh
Helsinki
```

### Controllare le key del map

Controlla se una chiave esiste in una mappa usando il metodo _has_. Restituisce _true_ o _false_.

```js
console.log(countriesMap.has('Finland'))
```

```sh
true
```

Ottenere tutti i valori dalla mappa utilizzando il ciclo

```js
for (const country of countriesMap) {
  console.log(country)
}
```

```sh
(2) ["Finland", "Helsinki"]
(2) ["Sweden", "Stockholm"]
(2) ["Norway", "Oslo"]
```

```js
for (const [country, city] of countriesMap){
 console.log(country, city)
}
```

```sh
Finland Helsinki
Sweden Stockholm
Norway Oslo
```

🌕 Hai raggiunto un grande traguardo, sei inarrestabile. Continua così! Hai appena completato le sfide del 10° giorno e sei a 10 passi dalla tua strada verso la grandezza. Ora fai qualche esercizio per il cervello e per i muscoli.

## Esercizi

### Esercizi: Livello 1

```js
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']
```

1. creare un insieme vuoto
2. Creare un insieme contenente da 0 a 10 utilizzando il ciclo
3. Rimuovere un elemento da un insieme
4. Cancellare un insieme
5. Creare un insieme di 5 elementi stringa da un array
6. Creare una mappa di paesi e il numero di caratteri di un paese

### Esercizi: Livello 2

1. Trovare un'unione b
2. Trovare un'intersezione b
3. Trovare a con b

### Esercizi: Livello 3

1. Quante lingue sono presenti nel file oggetto Paesi.

1. \*\*\* Utilizzate i dati dei Paesi per trovare le 10 lingue più parlate:

```js
   // Your output should look like this
   console.log(mostSpokenLanguages(countries, 10))
   [
     { English: 91 },
     { French: 45 },
     { Arabic: 25 },
     { Spanish: 24 },
     { Russian: 9 },
     { Portuguese: 9 },
     { Dutch: 8 },
     { German: 7 },
     { Chinese: 5 },
     { Swahili: 4 },
     { Serbian: 4 }
   ]

  // Your output should look like this
  console.log(mostSpokenLanguages(countries, 3))
  [
  {English:91},
  {French:45},
  {Arabic:25}
  ]
```

🎉 CONGRATULAZIONI ! 🎉

[<< Day 9](../09_Day_Higher_order_functions/09_day_higher_order_functions.md) | [Day 11 >>](../11_Day_Destructuring_and_spreading/11_day_destructuring_and_spreading.md)
