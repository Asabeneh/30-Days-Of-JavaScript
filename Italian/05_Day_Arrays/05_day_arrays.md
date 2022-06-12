<div align="center">
  <h1> 30 Days Of JavaScript: Arrays</h1>
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

[<< Day 4](../04_Day_Conditionals/04_day_conditionals.md) | [Day 6 >>](../06_Day_Loops/06_day_loops.md)

![Day 5](../../images/banners/day_1_5.png)

- [📔 Giorno 5](#-day-5)
	- [Arrays](#arrays)
		- [Come creare un array vuoto](#how-to-create-an-empty-array)
		- [Come creare un array contenente valori](#how-to-create-an-array-with-values)
		- [Creare un array usando la funzione split](#creating-an-array-using-split)
		- [Accedere agli elementi dell'array usando l'indice](#accessing-array-items-using-index)
		- [Modificare gli elementi dell'array](#modifying-array-element)
		- [Metodi per manipolare gli array](#methods-to-manipulate-array)
			- [Il Costruttore dell'array](#array-constructor)
			- [Creare valori statici con fill](#creating-static-values-with-fill)
			- [Concatenare array usando concat](#concatenating-array-using-concat)
			- [Ottenere la lunghezza dell'array](#getting-array-length)
			- [Ottenere l'indice di un elemento nell'array](#getting-index-an-element-in-arr-array)
			- [Ottenere l'ultimo indice di un elemento nell'array](#getting-last-index-of-an-element-in-array)
			- [Verificare l'array](#checking-array)
			- [Convertire l'array in stringa](#converting-array-to-string)
			- [Unire elementi array](#joining-array-elements)
			- [Dividere gli elementi dell'array](#slice-array-elements)
			- [Il metodo Splice con gli array](#splice-method-in-array)
			- [Aggiungere un elemento all'array usando push](#adding-item-to-an-array-using-push)
			- [Rimuovere l'ultimo elemento usando pop](#removing-the-end-element-using-pop)
			- [Rimuovere un elemento dall'inizio dell'array](#removing-an-element-from-the-beginning)
			- [Aggiungere un elemento in prima posizione dell'array](#add-an-element-from-the-beginning)
			- [Invertire l'ordine dell'array](#reversing-array-order)
			- [Ordinare gli elementi di un array](#sorting-elements-in-array)
		- [Array di array](#array-of-arrays)
	- [💻 Esercizio](#-exercise)
		- [Esercizio: Livello 1](#exercise-level-1)
		- [Esercizio: Livello 2](#exercise-level-2)
		- [Esercizio: Livello 3](#exercise-level-3)

# 📔 Giorno 5

## Arrays

A differenza delle variabili, un array può memorizzare _molti valori_. Ogni valore in un array ha un _indice_ e ogni indice ha _un riferimento in un indirizzo di memoria_. È possibile accedere a ciascun valore utilizzando i loro _indici_. L'indice di un array parte da _zero_ e l'indice dell'ultimo elemento è diminuito di uno rispetto alla lunghezza dell'array.

Un array è una raccolta di diversi tipi di dati ordinati e modificabili. Un array consente di memorizzare elementi duplicati e tipi di dati diversi. Una array può essere vuoto o può contenere valori di tipi di dati diversi.

### Come creare un array vuoto

In JavaScript, possiamo creare un array in diversi modi. Vediamo i diversi modi per creare un array.
È molto comune usare _const_ invece di _let_ per dichiarare una variabile di un array. Se si usa const, significa che non si usa più il nome di quella variabile.

- Usare il costruttore Array

```js
// syntax
const arr = Array()
// or
// let arr = new Array()
console.log(arr) // []
```

- Usare le parentesi quadre ([])

```js
// syntax
// This the most recommended way to create an empty list
const arr = []
console.log(arr)
```

### Come creare un array contenente valori

Array con valori iniziali. Utilizziamo la proprietà _length_ per trovare la lunghezza di un array.

```js
const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// Print the array and its length

console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)

console.log('Fruits:', fruits)
console.log('Number of fruits:', fruits.length)

console.log('Vegetables:', vegetables)
console.log('Number of vegetables:', vegetables.length)

console.log('Animal products:', animalProducts)
console.log('Number of animal products:', animalProducts.length)

console.log('Web technologies:', webTechs)
console.log('Number of web technologies:', webTechs.length)

console.log('Countries:', countries)
console.log('Number of countries:', countries.length)
```

```sh
Numbers: [0, 3.14, 9.81, 37, 98.6, 100]
Number of numbers: 6
Fruits: ['banana', 'orange', 'mango', 'lemon']
Number of fruits: 4
Vegetables: ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']
Number of vegetables: 5
Animal products: ['milk', 'meat', 'butter', 'yoghurt']
Number of animal products: 4
Web technologies: ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB']
Number of web technologies: 7
Countries: ['Finland', 'Estonia', 'Denmark', 'Sweden', 'Norway']
Number of countries: 5
```

- Un array può contenere elementi di diversi tipi di dati

```js
const arr = [
    'Asabeneh',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
] // arr containing different data types
console.log(arr)
```

### Creare un array usando la funzione split

Come abbiamo visto nella sezione precedente, possiamo dividere una stringa in diverse posizioni e convertirla in un array. Vediamo gli esempi seguenti.

```js
let js = 'JavaScript'
const charsInJavaScript = js.split('')

console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')

console.log(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
let txt =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = txt.split(' ')

console.log(words)
// the text has special characters think how you can just get only the words
// ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]
```

### Accedere agli elementi dell'array usando l'indice

Si accede a ciascun elemento di un array utilizzando il suo indice. L'indice di un array parte da 0. L'immagine seguente mostra chiaramente l'indice di ciascun elemento dell'array.

![arr index](../images/array_index.png)

```js
const fruits = ['banana', 'orange', 'mango', 'lemon']
let firstFruit = fruits[0] // we are accessing the first item using its index

console.log(firstFruit) // banana

secondFruit = fruits[1]
console.log(secondFruit) // orange

let lastFruit = fruits[3]
console.log(lastFruit) // lemon
// Last index can be calculated as follows

let lastIndex = fruits.length - 1
lastFruit = fruits[lastIndex]

console.log(lastFruit)  // lemon
```

```js
const numbers = [0, 3.14, 9.81, 37, 98.6, 100]  // set of numbers

console.log(numbers.length)  // => to know the size of the array, which is 6
console.log(numbers)         // -> [0, 3.14, 9.81, 37, 98.6, 100]
console.log(numbers[0])      //  -> 0
console.log(numbers[5])      //  -> 100

let lastIndex = numbers.length - 1;
console.log(numbers[lastIndex]) // -> 100
```

```js
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
] // List of web technologies

console.log(webTechs)        // all the array items
console.log(webTechs.length) // => to know the size of the array, which is 7
console.log(webTechs[0])     //  -> HTML
console.log(webTechs[6])     //  -> MongoDB

let lastIndex = webTechs.length - 1
console.log(webTechs[lastIndex]) // -> MongoDB
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
  'Kenya'
] // List of countries

console.log(countries)      // -> all countries in array
console.log(countries[0])   //  -> Albania
console.log(countries[10])  //  -> Kenya

let lastIndex = countries.length - 1;
console.log(countries[lastIndex]) //  -> Kenya
```

```js
const shoppingCart = [
  'Milk',
  'Mango',
  'Tomato',
  'Potato',
  'Avocado',
  'Meat',
  'Eggs',
  'Sugar'
] // List of food products

console.log(shoppingCart) // -> all shoppingCart in array
console.log(shoppingCart[0]) //  -> Milk
console.log(shoppingCart[7]) //  -> Sugar

let lastIndex = shoppingCart.length - 1;
console.log(shoppingCart[lastIndex]) //  -> Sugar
```

### Modificare gli elementi dell'array

Un array è mutabile (modificabile). Una volta creato un array, è possibile modificarne il contenuto degli elementi.

```js
const numbers = [1, 2, 3, 4, 5]
numbers[0] = 10      // changing 1 at index 0 to 10
numbers[1] = 20      // changing  2 at index 1 to 20

console.log(numbers) // [10, 20, 3, 4, 5]

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
  'Kenya'
]

countries[0] = 'Afghanistan'  // Replacing Albania by Afghanistan
let lastIndex = countries.length - 1
countries[lastIndex] = 'Korea' // Replacing Kenya by Korea

console.log(countries)
```

```sh
["Afghanistan", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Korea"]
```

### Methods to manipulate array

Esistono diversi metodi per manipolare un array. Questi sono alcuni dei metodi disponibili per gestire gli array:_Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift_

#### Il Costruttore dell'array

Array: Crea un array.

```js
const arr = Array() // creates an an empty array
console.log(arr)

const eightEmptyValues = Array(8) // it creates eight empty values
console.log(eightEmptyValues) // [empty x 8]
```

#### Creare valori statici con fill

fill: Riempe l'array con l'elemento specificato.

```js
const arr = Array() // creates an an empty array
console.log(arr)

const eightXvalues = Array(8).fill('X') // it creates eight element values filled with 'X'
console.log(eightXvalues) // ['X', 'X','X','X','X','X','X','X']

const eight0values = Array(8).fill(0) // it creates eight element values filled with '0'
console.log(eight0values) // [0, 0, 0, 0, 0, 0, 0, 0]

const four4values = Array(4).fill(4) // it creates 4 element values filled with '4'
console.log(four4values) // [4, 4, 4, 4]
```

#### Concatenare array usando concat

concat: Concatena due array.

```js
const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)

console.log(thirdList) // [1, 2, 3, 4, 5, 6]
```

```js
const fruits = ['banana', 'orange', 'mango', 'lemon']                 // array of fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of vegetables
const fruitsAndVegetables = fruits.concat(vegetables)                 // concatenate the two arrays

console.log(fruitsAndVegetables)
```

```sh
["banana", "orange", "mango", "lemon", "Tomato", "Potato", "Cabbage", "Onion", "Carrot"]
```

#### Ottenere la lunghezza dell'array

Length:Per conoscere la lunghezza dell'array.

```js
const numbers = [1, 2, 3, 4, 5]
console.log(numbers.length) // -> 5 is the size of the array
```

#### Ottenere l'indice di un elemento nell'array

indexOf:Per verificare se un elemento esiste in un array. Se esiste, viene restituito l'indice, altrimenti viene restituito -1.

```js
const numbers = [1, 2, 3, 4, 5]

console.log(numbers.indexOf(5)) // -> 4
console.log(numbers.indexOf(0)) // -> -1
console.log(numbers.indexOf(1)) // -> 0
console.log(numbers.indexOf(6)) // -> -1
```

Controlla che l'elemento esista nell'array.

- Controlla gli elementi in una lista.
  
```js
// let us check if a banana exist in the array

const fruits = ['banana', 'orange', 'mango', 'lemon']
let index = fruits.indexOf('banana')  // 0

if(index === -1){
   console.log('This fruit does not exist in the array')  
} else {
    console.log('This fruit does exist in the array')
}
// This fruit does exist in the array

// we can use also ternary here
index === -1 ? console.log('This fruit does not exist in the array'): console.log('This fruit does exist in the array')

// let us check if an avocado exist in the array
let indexOfAvocado = fruits.indexOf('avocado')  // -1, if the element not found index is -1
if(indexOfAvocado === -1){
   console.log('This fruit does not exist in the array')  
} else {
    console.log('This fruit does exist in the array')
}
// This fruit does not exist in the array
```

#### Ottenere l'ultimo indice di un elemento nell'array

lastIndexOf: Fornisce la posizione dell'ultimo elemento dell'array. Se esiste, restituisce l'indice, altrimenti restituisce -1.

```js
const numbers = [1, 2, 3, 4, 5, 3, 1, 2]

console.log(numbers.lastIndexOf(2)) // 7
console.log(numbers.lastIndexOf(0)) // -1
console.log(numbers.lastIndexOf(1)) //  6
console.log(numbers.lastIndexOf(4)) //  3
console.log(numbers.lastIndexOf(6)) // -1
```

includes:Per verificare se un elemento esiste in un array. Se esiste, restituisce true, altrimenti restituisce false.

```js
const numbers = [1, 2, 3, 4, 5]

console.log(numbers.includes(5)) // true
console.log(numbers.includes(0)) // false
console.log(numbers.includes(1)) // true
console.log(numbers.includes(6)) // false

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
] // List of web technologies

console.log(webTechs.includes('Node'))  // true
console.log(webTechs.includes('C'))     // false
```

#### Verificare l'array

Array.isArray:Per verificare se il tipo di dato è un array.

```js
const numbers = [1, 2, 3, 4, 5]
console.log(Array.isArray(numbers)) // true

const number = 100
console.log(Array.isArray(number)) // false
```

#### Convertire l'array in stringa

toString:Converts array to string

```js
const numbers = [1, 2, 3, 4, 5]
console.log(numbers.toString()) // 1,2,3,4,5

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
console.log(names.toString()) // Asabeneh,Mathias,Elias,Brook
```

#### Unire elementi array

join: Viene utilizzato per unire gli elementi dell'array; l'argomento passato nel metodo join verrà unito con l'array e restituito come stringa. Per impostazione predefinita, unisce con una virgola, ma possiamo passare diversi parametri stringa che possono unire gli elementi.

```js
const numbers = [1, 2, 3, 4, 5]
console.log(numbers.join()) // 1,2,3,4,5

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

console.log(names.join()) // Asabeneh,Mathias,Elias,Brook
console.log(names.join('')) //AsabenehMathiasEliasBrook
console.log(names.join(' ')) //Asabeneh Mathias Elias Brook
console.log(names.join(', ')) //Asabeneh, Mathias, Elias, Brook
console.log(names.join(' # ')) //Asabeneh # Mathias # Elias # Brook

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
] // List of web technologies

console.log(webTechs.join())       // "HTML,CSS,JavaScript,React,Redux,Node,MongoDB"
console.log(webTechs.join(' # '))  // "HTML # CSS # JavaScript # React # Redux # Node # MongoDB"
```

#### Dividere gli elementi dell'array

Slice: Per ritagliare più elementi in un intervallo. Richiede due parametri: posizione iniziale e posizione finale. Non include la posizione finale.

```js
  const numbers = [1,2,3,4,5]

  console.log(numbers.slice()) // -> it copies all  item
  console.log(numbers.slice(0)) // -> it copies all  item
  console.log(numbers.slice(0, numbers.length)) // it copies all  item
  console.log(numbers.slice(1,4)) // -> [2,3,4] // it doesn't include the ending position
```

#### Il metodo Splice con gli array

Splice: Richiede tre parametri: posizione iniziale, numero di volte da rimuovere e numero di elementi da aggiungere.

```js
  const numbers = [1, 2, 3, 4, 5]
  numbers.splice()
  console.log(numbers)                // -> remove all items

```

```js
  const numbers = [1, 2, 3, 4, 5]
	numbers.splice(0,1)
  console.log(numbers)            // remove the first item
```

```js
  const numbers = [1, 2, 3, 4, 5, 6]
	numbers.splice(3, 3, 7, 8, 9)
  console.log(numbers.splice(3, 3, 7, 8, 9))  // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items
```

#### Aggiungere un elemento all'array usando push

Push: Per aggiungere un elemento alla fine di un array esistente, si usa il metodo push.

```js
// syntax
const arr  = ['item1', 'item2','item3']
arr.push('new item')
console.log(arr)
// ['item1', 'item2','item3','new item']
```

```js
const numbers = [1, 2, 3, 4, 5]
numbers.push(6)
console.log(numbers) // -> [1,2,3,4,5,6]

numbers.pop() // -> remove one item from the end
console.log(numbers) // -> [1,2,3,4,5]
```

```js
let fruits = ['banana', 'orange', 'mango', 'lemon']
fruits.push('apple')
console.log(fruits)    // ['banana', 'orange', 'mango', 'lemon', 'apple']

fruits.push('lime')
console.log(fruits)   // ['banana', 'orange', 'mango', 'lemon', 'apple', 'lime']
```

#### Rimuovere l'ultimo elemento usando pop

pop: Rimuove l' elemento in coda.

```js
const numbers = [1, 2, 3, 4, 5]
numbers.pop() // -> remove one item from the end
console.log(numbers) // -> [1,2,3,4]
```

#### Rimuovere un elemento dall'inizio dell'array

shift: Rimuove l'elemento in testa (prima posizione).

```js
const numbers = [1, 2, 3, 4, 5]
numbers.shift() // -> remove one item from the beginning
console.log(numbers) // -> [2,3,4,5]
```

#### Aggiungere un elemento in prima posizione dell'array

unshift: Aggiunge un elemento in prima posizione.

```js
const numbers = [1, 2, 3, 4, 5]
numbers.unshift(0) // -> add one item from the beginning
console.log(numbers) // -> [0,1,2,3,4,5]
```

#### Invertire l'ordine dell'array

reverse: Inverti l'ordine degli elementi.

```js
const numbers = [1, 2, 3, 4, 5]
numbers.reverse() // -> reverse array order
console.log(numbers) // [5, 4, 3, 2, 1]

numbers.reverse()
console.log(numbers) // [1, 2, 3, 4, 5]
```

#### Ordinare gli elementi di un array

sort: dispone gli elementi dell'array in ordine crescente. L'ordinamento richiede una funzione di richiamo; vedremo come utilizzare l'ordinamento con una funzione di richiamo nelle prossime sezioni.

```js
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

webTechs.sort()
console.log(webTechs) // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

webTechs.reverse() // after sorting we can reverse it
console.log(webTechs) // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]
```

### Array di array

Gli array possono memorizzare diversi tipi di dati, compreso l'array stesso. Creiamo un array di array

```js
const firstNums = [1, 2, 3]
const secondNums = [1, 4, 9]

const arrayOfArray =  [[1, 2, 3], [1, 2, 3]]
console.log(arrayOfArray[0]) // [1, 2, 3]

 const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
 const backEnd = ['Node','Express', 'MongoDB']
 const fullStack = [frontEnd, backEnd]
 console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
 console.log(fullStack.length)  // 2
 console.log(fullStack[0])  // ["HTML", "CSS", "JS", "React", "Redux"]
 console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]
```

🌕  Sei diligenti e hai già ottenuto molti risultati. Hai appena completato le sfide del 5° giorno e sei a 5 passi dalla tua strada verso la grandezza. Ora fai qualche esercizio per il cervello e per i muscoli.

## 💻 Esercizio

### Esercizio: Livello 1

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
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
```

1. Dichiarare un array _vuoto_;
2. Dichiarare un array con un numero di elementi superiore a 5
3. Trovare la lunghezza dell'array
4. Ottenere il primo elemento, l'elemento centrale e l'ultimo elemento dell'array.
5. Dichiarare un array chiamato _mixedDataTypes_, inserire diversi tipi di dati nell'array e trovare la lunghezza dell'array. La dimensione dell'array deve essere maggiore di 5
6. Dichiarare una variabile array chiamata itAziende e assegnare i valori iniziali Facebook, Google, Microsoft, Apple, IBM, Oracle e Amazon.
7. Stampare l'array utilizzando _console.log()_.
8. Stampare il numero di aziende nell'array
9. Stampare la prima azienda, la metà e l'ultima azienda
10. Stampare ogni azienda
11. Cambiare il nome di ogni azienda in maiuscolo, uno per uno, e stamparli.
12. Stampare la matrice come una frase: Facebook, Google, Microsoft, Apple, IBM, Oracle e Amazon sono grandi aziende IT.
13. Controllare se una certa azienda esiste nell'array itCompanies. Se esiste, restituisce l'azienda, altrimenti restituisce un'azienda _non trovata_.
14. Filtrare le aziende che hanno più di una "o" senza il metodo del filtro.
15. Ordinare l'array usando il metodo _sort()_.
16. Invertire l'array utilizzando il metodo _reverse()_.
17. Estrarre le prime 3 società dall'array.
18. Eliminare le ultime 3 aziende dall'array.
19. Eliminare dall'array l'azienda o le aziende IT centrali.
20. Rimuovere la prima azienda IT dall'array
21. Rimuovere l'azienda o le aziende IT centrali dall'array.
22. Rimuovere l'ultima azienda IT dall'array
23. Rimuovere tutte le aziende IT

### Esercizio: Livello 2

1. Creare un file separato countries.js e memorizzare l'array dei Paesi in questo file, creare un file separato web_techs.js e memorizzare l'array webTechs in questo file. Accedere a entrambi i file nel file main.js
1. Per prima cosa rimuovete tutte le punteggiature, cambiate la stringa in array e contate il numero di parole nell'array.

    ```js
    let text =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
    console.log(words)
    console.log(words.length)
    ```

    ```sh
    ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
  
    13
    ```

1. Nel seguente carrello della spesa aggiungere, rimuovere, modificare gli articoli

    ```js
    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    ```

   - aggiungere "Carne" all'inizio del carrello se non è già stato aggiunto
   - aggiungere "Zucchero" alla fine del carrello se non è già stato aggiunto
   - rimuovere "Miele" se si è allergici al miele
   - modificare il tè in "Tè verde".
1. Nell'array dei Paesi controllare se 'Etiopia' esiste nell'array, se esiste stampare 'ETIOPIA'. Se non esiste, aggiungerlo all'elenco dei paesi.
1. Nell'array webTechs verificare se Sass esiste nell'array e se esiste stampare 'Sass è un preprocesso CSS'. Se non esiste, aggiungere Sass all'array e stampare l'array.
1. Concatenare le due variabili seguenti e memorizzarle in una variabile fullStack.

    ```js
    const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
    const backEnd = ['Node','Express', 'MongoDB']
  
    console.log(fullStack)
    ```

    ```sh
    ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
    ```

### Esercizio: Livello 3

1. Di seguito è riportata una serie di 10 studenti di età:

    ```js
    const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    ```

    - Ordinare l'array e trovare l'età minima e massima
    - Trovare l'età mediana (un elemento centrale o due elementi centrali divisi per due)
    - Trovare l'età media (tutti gli elementi divisi per il numero di elementi)
    - Trovare l'intervallo delle età (max meno min)
    - Confrontare il valore di (min - media) e (max - media), utilizzando il metodo _abs()_.
1.Tagliare i primi dieci Paesi dalla [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)
1. Trovare il/i Paese/i centrale/i nella [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)
2. Dividere l'array di paesi in due array uguali se è pari.  Se l'array dei paesi non è pari, un altro paese per la prima metà.
  
🎉 CONGRATULAZIONI ! 🎉

[<< Day 4](../04_Day_Conditionals/04_day_Conditionals.md) | [Day 6 >>](../06_Day_Loops/06_day_loops.md)
