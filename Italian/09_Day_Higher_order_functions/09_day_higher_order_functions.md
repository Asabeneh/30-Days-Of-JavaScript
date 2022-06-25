<div align="center">
  <h1> 30 Days Of JavaScript: Higher Order Functions</h1>
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

[<< Day 8](../08_Day_Objects/08_day_objects.md) | [Day 10 >>](../10_Day_Sets_and_Maps/10_day_Sets_and_Maps.md)

![Day 5](../../images/banners/day_1_9.png)

- [Day 9](#day-9)
	- [Higher Order Function](#higher-order-function)
		- [Callback](#callback)
		- [restituire una funzione](#returning-function)
		- [Impostare il tempo](#setting-time)
			- [Impostare un intervallo con la funzione setInterval](#setting-interval-using-a-setinterval-function)
			- [Impostare il tempo di esecuzione di una callback con setTimeout](#setting-a-time-using-a-settimeout)
	- [Functional Programming](#functional-programming)
		- [forEach](#foreach)
		- [map](#map)
		- [filter](#filter)
		- [reduce](#reduce)
		- [every](#every)
		- [find](#find)
		- [findIndex](#findindex)
		- [some](#some)
		- [sort](#sort)
			- [Ordinare i valori string](#sorting-string-values)
			- [Ordinare i valori numbers](#sorting-numeric-values)
			- [Ordinare i valori Object](#sorting-object-arrays)
	- [💻 Esercizi](#-exercises)
		- [Esercizi: Livello 1](#exercises-level-1)
		- [Esercizi: Livello 2](#exercises-level-2)
		- [Esercizi: Livello 3](#exercises-level-3)

# Day 9

## Higher Order Function

Le funzioni di ordine superiore sono funzioni che accettano un'altra funzione come parametro o restituiscono una funzione come valore. La funzione passata come parametro è chiamata callback.

### Callback

Un callback è una funzione che può essere passata come parametro ad altre funzioni. Si veda l'esempio seguente.

```js
// a callback function, the name of the function could be any name
const callback = (n) => {
  return n ** 2
}
​
// function that takes other function as a callback
function cube(callback, n) {
  return callback(n) * n
}
​
console.log(cube(callback, 3))
```

### restituire una funzione

Le funzioni di ordine superiore restituiscono la funzione come valore
​
```js
// Higher order function returning an other function
const higherOrder = n => {
  const doSomething = m => {
    const doWhatEver = t => {
      return 2 * n + 3 * m + t
    }
    return doWhatEver
  }
  return doSomething
}
console.log(higherOrder(2)(3)(10))
```

Vediamo come utilizzare le funzioni di richiamo. Ad esempio, il metodo _forEach_ utilizza il richiamo.

```js
const numbers = [1, 2, 3, 4, 5]
const sumArray = arr => {
  let sum = 0
  const callback = function(element) {
    sum += element
  }
  arr.forEach(callback)
  return sum

}
console.log(sumArray(numbers))
```

```sh
15
```

L'esempio precedente può essere semplificato come segue:

```js
const numbers = [1, 2, 3, 4]
​
const sumArray = arr => {
  let sum = 0
  arr.forEach(function(element) {
    sum += element
  })
  return sum

}
console.log(sumArray(numbers))
```

```sh
15
```

### Impostare il tempo

In JavaScript possiamo eseguire alcune attività in un certo intervallo di tempo oppure possiamo programmare (attendere) l'esecuzione di alcune attività.

- setInterval
- setTimeout

#### Impostare un intervallo con la funzione setInterval

In JavaScript, si usa la funzione di ordine superiore setInterval per eseguire un'attività in modo continuo in un certo intervallo di tempo. Il metodo globale setInterval accetta una funzione di callback e una durata come parametro. La durata è espressa in millisecondi e il callback sarà sempre richiamato in quell'intervallo di tempo.

```js
// syntax
function callback() {
  // code goes here
}
setInterval(callback, duration)
```

```js
function sayHello() {
  console.log('Hello')
}
setInterval(sayHello, 1000) // it prints hello in every second, 1000ms is 1s
```

#### Impostare il tempo di esecuzione di una callback con setTimeout

In JavaScript, si usa la funzione di ordine superiore setTimeout per eseguire un'azione in un momento futuro. Il metodo globale setTimeout accetta una funzione di callback e una durata come parametro. La durata è espressa in millisecondi e il callback attende per questo lasso di tempo.

```js
// syntax
function callback() {
  // code goes here
}
setTimeout(callback, duration) // duration in milliseconds
```

```js
function sayHello() {
  console.log('Hello')
}
setTimeout(sayHello, 2000) // it prints hello after it waits for 2 seconds.
```

## Functional Programming

Invece di scrivere cicli regolari, l'ultima versione di JavaScript ha introdotto molti metodi integrati che possono aiutarci a risolvere problemi complicati. Tutti i metodi incorporati richiedono una funzione di callback. In questa sezione vedremo _forEach_, _map_, _filter_, _reduce_, _find_, _every_, _some_ e _sort_.

### forEach

_forEach_: Itera gli elementi di un array. Si usa _forEach_ solo con gli array. Richiede una funzione di callback con elementi, un parametro indice e l'array stesso. L'indice e l'array sono facoltativi.

```js
arr.forEach(function (element, index, arr) {
  console.log(index, element, arr)
})
// The above code can be written using arrow function
arr.forEach((element, index, arr) => {
  console.log(index, element, arr)
})
// The above code can be written using arrow function and explicit return
arr.forEach((element, index, arr) => console.log(index, element, arr))
```

```js
let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num))
console.log(sum)
```

```sh
1
2
3
4
5
```

```js
let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => sum += num)

console.log(sum)
```

```sh
15
```

```js
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
countries.forEach((element) => console.log(element.toUpperCase()))
```

```sh
FINLAND
DENMARK
SWEDEN
NORWAY
ICELAND
```

### map

_map_: Itera gli elementi di un array e modifica gli elementi dell'array. Prende una funzione di callback con elementi, indice, parametro dell'array e restituisce un nuovo array.

```js
const modifiedArray = arr.map(function (element, index, arr) {
  return element
})
```

```js
/*Arrow function and explicit return
const modifiedArray = arr.map((element,index) => element);
*/
//Example
const numbers = [1, 2, 3, 4, 5]
const numbersSquare = numbers.map((num) => num * num)

console.log(numbersSquare)
```

```sh
[1, 4, 9, 16, 25]
```

```js
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const namesToUpperCase = names.map((name) => name.toUpperCase())
console.log(namesToUpperCase)
```

```sh
['ASABENEH', 'MATHIAS', 'ELIAS', 'BROOK']
```

```js
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]
const countriesToUpperCase = countries.map((country) => country.toUpperCase())
console.log(countriesToUpperCase)

/*
// Arrow function
const countriesToUpperCase = countries.map((country) => {
  return country.toUpperCase();
})
//Explicit return arrow function
const countriesToUpperCase = countries.map(country => country.toUpperCase());
*/
```

```sh
['ALBANIA', 'BOLIVIA', 'CANADA', 'DENMARK', 'ETHIOPIA', 'FINLAND', 'GERMANY', 'HUNGARY', 'IRELAND', 'JAPAN', 'KENYA']
```

```js
const countriesFirstThreeLetters = countries.map((country) =>
  country.toUpperCase().slice(0, 3)
)
```

```sh
 ["ALB", "BOL", "CAN", "DEN", "ETH", "FIN", "GER", "HUN", "IRE", "JAP", "KEN"]
```

### filter

_Filter_: Filtra gli elementi che soddisfano le condizioni di filtraggio e restituisce un nuovo array.

```js
//Filter countries containing land
const countriesContainingLand = countries.filter((country) =>
  country.includes('land')
)
console.log(countriesContainingLand)
```

```sh
['Finland', 'Ireland']
```

```js
const countriesEndsByia = countries.filter((country) => country.endsWith('ia'))
console.log(countriesEndsByia)
```

```sh
['Albania', 'Bolivia','Ethiopia']
```

```js
const countriesHaveFiveLetters = countries.filter(
  (country) => country.length === 5
)
console.log(countriesHaveFiveLetters)
```

```sh
['Japan', 'Kenya']
```

```js
const scores = [
  { name: 'Asabeneh', score: 95 },
   { name: 'Lidiya', score: 98 },
  { name: 'Mathias', score: 80 },
  { name: 'Elias', score: 50 },
  { name: 'Martha', score: 85 },
  { name: 'John', score: 100 },
]

const scoresGreaterEighty = scores.filter((score) => score.score > 80)
console.log(scoresGreaterEighty)
```

```sh
[{name: 'Asabeneh', score: 95}, { name: 'Lidiya', score: 98 },{name: 'Martha', score: 85},{name: 'John', score: 100}]
```

### reduce

_reduce_: Reduce accetta una funzione di richiamo. La funzione di richiamo prende come parametro l'accumulatore, il valore corrente e il valore iniziale opzionale e restituisce un singolo valore. È buona norma definire un valore iniziale per il valore dell'accumulatore. Se non si specifica questo parametro, per impostazione predefinita l'accumulatore otterrà il "primo valore" dell'array. Se la nostra matrice è una matrice _vuota_, allora `Javascript` lancerà un errore.

```js
arr.reduce((acc, cur) => {
  // some operations goes here before returning a value
 return 
}, initialValue)
```

```js
const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce((acc, cur) => acc + cur, 0)

console.log(sum)
```

```js
15
```

### every

_every_: Controlla se tutti gli elementi sono simili in un aspetto. Restituisce un booleano

```js
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const areAllStr = names.every((name) => typeof name === 'string') // Are all strings?

console.log(areAllStr)
```

```sh
true
```

```js
const bools = [true, true, true, true]
const areAllTrue = bools.every((b) => b === true) // Are all true? 

console.log(areAllTrue) // true
```

```sh
true

```

### find

_find_: Restituisce il primo elemento che soddisfa la condizione

```js
const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)

console.log(age)
```

```js
18
```

```js
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const result = names.find((name) => name.length > 7)
console.log(result)
```

```sh
Asabeneh
```

```js
const scores = [
  { name: 'Asabeneh', score: 95 },
  { name: 'Mathias', score: 80 },
  { name: 'Elias', score: 50 },
  { name: 'Martha', score: 85 },
  { name: 'John', score: 100 },
]

const score = scores.find((user) => user.score > 80)
console.log(score)
```

```sh
{ name: "Asabeneh", score: 95 }
```

### findIndex

_findIndex_: Restituisce la posizione del primo elemento che soddisfa la condizione

```js
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const ages = [24, 22, 25, 32, 35, 18]

const result = names.findIndex((name) => name.length > 7)
console.log(result) // 0

const age = ages.findIndex((age) => age < 20)
console.log(age) // 5
```

### some

_some_: Controlla se alcuni elementi sono simili in un aspetto. Restituisce un booleano

```js
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const bools = [true, true, true, true]

const areSomeTrue = bools.some((b) =>  b === true)

console.log(areSomeTrue) //true
```

```js
const areAllStr = names.some((name) => typeof name === 'number') // Are all strings ?
console.log(areAllStr) // false
```

### sort

_sort_: I metodi di ordinamento dispongono gli elementi dell'array in ordine crescente o decrescente. Per impostazione predefinita, il metodo **_sort()_** ordina i valori come stringhe, il che funziona bene per gli elementi dell'array di stringhe, ma non per i numeri. Se i valori numerici vengono ordinati come stringhe, il risultato è sbagliato. Il metodo Sort modifica l'array originale. Si consiglia di copiare i dati originali prima di iniziare a usare il metodo _sort_.

#### Ordinare i valori string

```js
const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort()) // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
//Now the original products array  is also sorted
```

#### Ordinare i valori numbers

Come si può vedere nell'esempio seguente, 100 è arrivato per primo dopo l'ordinamento in ordine crescente. L'ordinamento converte gli elementi in stringhe, poiché '100' e altri numeri sono stati confrontati, 1 che all'inizio della stringa '100' è diventato il più piccolo. Per evitare ciò, utilizziamo una funzione di richiamo di confronto all'interno del metodo sort, che restituisce un valore negativo, zero o positivo.

```js
const numbers = [9.81, 3.14, 100, 37]
// Using sort method to sort number items provide a wrong result. see below
console.log(numbers.sort()) //[100, 3.14, 37, 9.81]
numbers.sort(function (a, b) {
  return a - b
})

console.log(numbers) // [3.14, 9.81, 37, 100]

numbers.sort(function (a, b) {
  return b - a
})
console.log(numbers) //[100, 37, 9.81, 3.14]
```

#### Ordinare i valori Object

Quando si ordinano gli oggetti in una matrice, si utilizza la chiave dell'oggetto da confrontare. Vediamo l'esempio seguente.

```js
objArr.sort(function (a, b) {
  if (a.key < b.key) return -1
  if (a.key > b.key) return 1
  return 0
})

// or

objArr.sort(function (a, b) {
  if (a['key'] < b['key']) return -1
  if (a['key'] > b['key']) return 1
  return 0
})

const users = [
  { name: 'Asabeneh', age: 150 },
  { name: 'Brook', age: 50 },
  { name: 'Eyob', age: 100 },
  { name: 'Elias', age: 22 },
]
users.sort((a, b) => {
  if (a.age < b.age) return -1
  if (a.age > b.age) return 1
  return 0
})
console.log(users) // sorted ascending
// [{…}, {…}, {…}, {…}]
```

🌕Stai andando alla grande. Non arrenderti mai perché le grandi cose richiedono tempo. Hai appena completato le sfide del nono giorno e sei a 9 passi dalla tua strada verso la grandezza. Ora fai qualche esercizio per il cervello e per i muscoli.

## 💻 Esercizi

### Esercizi: Livello 1

```js
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
```

1. Spiegare la differenza tra **_forEach, map, filter e reduce_**.
2. Definire una funzione di callback prima di utilizzarla in forEach, map, filter o reduce.
3. Usate **_forEach_** per registrare in console.log ogni paese nell'array dei paesi.
4. Usare **_forEach_** per registrare in console.log ogni nome nell'array dei nomi.
5. Usare **_forEach_** per registrare in console.log ogni numero nell'array numbers.
6. Usare **_map_** per creare un nuovo array cambiando ogni paese in maiuscolo nell'array paesi.
7. Usare **_map_** per creare un array di paesi di lunghezza pari a quella dell'array paesi.
8. Usare **_map_** per creare un nuovo array cambiando ogni numero in quadrato nell'array dei numeri.
9. Usare **_map_** per cambiare ogni nome in maiuscolo nell'array dei nomi.
10. Usare **_map_** per mappare l'array dei prodotti ai prezzi corrispondenti.
11. Utilizzare **_filtro_** per filtrare i paesi contenenti **_terra_**.
12. Usare **_filtro_** per filtrare i paesi con sei caratteri.
13. Usare **_filtro_** per filtrare i paesi contenenti sei lettere o più nell'array dei paesi.
14. Usare **_filter_** per filtrare i paesi che iniziano con 'E';
15. Usare **_filter_** per filtrare solo i prezzi con valori.
16. Dichiarare una funzione chiamata getStringLists che accetta un array come parametro e restituisce un array contenente solo elementi stringa.
17. Usare **_reduce_** per sommare tutti i numeri nell'array numbers.
18. Usare **_reduce_** per concatenare tutti i paesi e produrre questa frase: **_Estonia, Finlandia, Svezia, Danimarca, Norvegia e IceLand sono paesi del Nord Europa_**.
19. Spiegate la differenza tra **alcuni_** e **tutti_**.
20. Usate **_qualche_** per verificare se la lunghezza di alcuni nomi è maggiore di sette nell'array dei nomi.
21. Usare **_every_** per verificare se tutti i paesi contengono la parola land (terra).
22. Spiegate la differenza tra **_find_** e **_findIndex_**.
23. Usate **_find_** per trovare il primo paese che contiene solo sei lettere nell'array dei paesi.
24. Usare **_findIndex_** per trovare la posizione del primo paese contenente solo sei lettere nell'array dei paesi.
25. Usare **_findIndex_** per trovare la posizione di **_Norvegia_** se non esiste nell'array si otterrà -1.
26. Usare **_findIndex_** per trovare la posizione di **_Russia_** se non esiste nell'array si otterrà -1.

### Esercizi: Livello 2

1. Trovare il prezzo totale dei prodotti concatenando due o più iteratori di array (es. arr.map(callback).filter(callback).reduce(callback))
1. Trovare la somma dei prezzi dei prodotti usando solo reduce(callback))
1. Dichiarare una funzione chiamata **_categorizeCountries_** che restituisce un array di Paesi che hanno un modello comune (l'array dei Paesi si trova in questo repository come countries.js (ad esempio 'land', 'ia', 'island', 'stan')).
1. Creare una funzione che restituisca un array di oggetti, ovvero la lettera e il numero di volte in cui la lettera inizia con il nome di un paese.
1. Dichiarare una funzione **_getFirstTenCountries_** e restituire un array di dieci paesi. Utilizzare una programmazione funzionale diversa per lavorare sull'array countries.js
1. Dichiarare una funzione **_getLastTenCountries_** che restituisca gli ultimi dieci paesi dell'array countries.
1. Scoprite quale _lettera_ viene usata molte _volte_ come iniziale del nome di un paese dall'array dei paesi (es. Finlandia, Figi, Francia ecc.).

### Esercizi: Livello 3

1. Utilizzate le informazioni sui Paesi, contenute nella cartella dei dati. Ordinare i Paesi per nome, per capitale, per popolazione
1. \*\*\* Trovare le 10 lingue più parlate:

   ````js
   // Your output should look like this
   console.log(mostSpokenLanguages(countries, 10))
   [
   {country: 'English',count:91},
   {country: 'French',count:45},
   {country: 'Arabic',count:25},
   {country: 'Spanish',count:24},
   {country:'Russian',count:9},
   {country:'Portuguese', count:9},
   {country:'Dutch',count:8},
   {country:'German',count:7},
   {country:'Chinese',count:5},
   {country:'Swahili',count:4}
   ]

   // Your output should look like this
   console.log(mostSpokenLanguages(countries, 3))
   [
   {country: 'English',count: 91},
   {country: 'French',count: 45},
   {country: 'Arabic',count: 25},
   ]```

   ````

2. \*\*\* Usare il file countries_data.js per creare una funzione che crei i dieci paesi più popolosi.

   ````js
   console.log(mostPopulatedCountries(countries, 10))

   [
   {country: 'China', population: 1377422166},
   {country: 'India', population: 1295210000},
   {country: 'United States of America', population: 323947000},
   {country: 'Indonesia', population: 258705000},
   {country: 'Brazil', population: 206135893},
   {country: 'Pakistan', population: 194125062},
   {country: 'Nigeria', population: 186988000},
   {country: 'Bangladesh', population: 161006790},
   {country: 'Russian Federation', population: 146599183},
   {country: 'Japan', population: 126960000}
   ]

   console.log(mostPopulatedCountries(countries, 3))
   [
   {country: 'China', population: 1377422166},
   {country: 'India', population: 1295210000},
   {country: 'United States of America', population: 323947000}
   ]
   ```

   ````

3. \*\*\* Cercate di sviluppare un programma che calcoli la misura della tendenza centrale di un campione (media, mediana, modalità) e la misura della variabilità (intervallo, varianza, deviazione standard). Oltre a queste misure, trovate il minimo, il massimo, il numero, il percentile e la distribuzione di frequenza del campione. È possibile creare un oggetto chiamato statistiche e creare tutte le funzioni che eseguono calcoli statistici come metodi per l'oggetto statistiche. Verificate l'output qui sotto.

   ```js
   const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

   console.log('Count:', statistics.count()) // 25
   console.log('Sum: ', statistics.sum()) // 744
   console.log('Min: ', statistics.min()) // 24
   console.log('Max: ', statistics.max()) // 38
   console.log('Range: ', statistics.range() // 14
   console.log('Mean: ', statistics.mean()) // 30
   console.log('Median: ',statistics.median()) // 29
   console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
   console.log('Variance: ',statistics.var()) // 17.5
   console.log('Standard Deviation: ', statistics.std()) // 4.2
   console.log('Variance: ',statistics.var()) // 17.5
   console.log('Frequency Distribution: ',statistics.freqDist()) # [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
   ```

   ```sh
   console.log(statistics.describe())
   Count: 25
   Sum:  744
   Min:  24
   Max:  38
   Range:  14
   Mean:  30
   Median:  29
   Mode:  (26, 5)
   Variance:  17.5
   Standard Deviation:  4.2
   Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
   ```

🎉 CONGRATULAZIONI ! 🎉

[<< Day 8](../08_Day_Objects/08_day_objects.md) | [Day 10 >>](../10_Day_Sets_and_Maps/10_day_Sets_and_Maps.md)
