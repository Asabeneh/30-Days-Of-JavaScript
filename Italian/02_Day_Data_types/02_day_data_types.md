<div align="center">
  <h1> 30 Days Of JavaScript: Data Types</h1>
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
</div>

[<< Giorno 1](../readMe.md) | [Giorno 3 >>](../03_Day_Booleans_operators_date/03_booleans_operators_date.md)

![Thirty Days Of JavaScript](../../images/banners/day_1_2.png)

- [📔 Giorno 2](#-day-2)
	- [Tipi di Dati](#data-types)
		- [Tipi di Dati Primitivi](#primitive-data-types)
		- [Tipi di Dati Non Primitivi](#non-primitive-data-types)
	- [Numbers](#numbers)
		- [Dichiarare un Tipo Number](#declaring-number-data-types)
		- [L'Oggetto Math](#math-object)
			- [Random Number Generator](#random-number-generator)
	- [Strings](#strings)
		- [Concatenare Stringhe](#string-concatenation)
			- [Concatenare Usando l'Operatore Addizione](#concatenating-using-addition-operator)
			- [Stringe Letterali Lunghe](#long-literal-strings)
			- [Sequenze di Escape nelle Stringhe](#escape-sequences-in-strings)
			- [Stringhe Parametriche (Template Strings)](#template-literals-template-strings)
		- [Metodi del Tipo String](#string-methods)
	- [Verificare il Ripo di Dato ed Eseguire Casting](#checking-data-types-and-casting)
		- [Verificare il Tipo di Dato](#checking-data-types)
		- [Cambiare il Tipo di Dato (Casting)](#changing-data-type-casting)
			- [Da String a Int](#string-to-int)
			- [Da String a Float](#string-to-float)
			- [Da Float a Int](#float-to-int)
	- [💻 Giorno 2: Esercizi](#-day-2-exercises)
		- [Esercizi: Livello 1](#exercise-level-1)
		- [Esercizi: Livello 2](#exercise-level-2)
		- [Esercizi: Livello 3](#exercises-level-3)

# 📔 Giorno 2

## Tipi di Dati

Nella sezione precedente abbiamo parlato un po' dei tipi di dati. I dati o i valori hanno tipi di dati. I tipi di dati descrivono le caratteristiche dei dati. I tipi di dati possono essere suddivisi in due categorie:

1. Tipi di Dati Primitivi
2. Tipi di Dati Non Primitivi (Object References)

### Tipi di Dati Primitivi

I tipi di dati primitivi in JavaScript includono:

 1. Numbers - Interi, float
 2. Strings - Qualsiasi dato tra virgolette singole, virgolette doppie o virgolette rovesciate.
 3. Boolean - valore vero o falso
 4. Null - valore vuoto o nessun valore
 5. Undefined - una variabile dichiarata senza valore
 6. Symbol - Un valore unico che può essere generato dal costruttore Symbol.

I tipi di dati non primitivi in JavaScript includono:

1. Objects
2. Arrays

Vediamo ora cosa significano esattamente i tipi di dati primitivi e non primitivi.
I tipi di dati *primitivi* sono tipi di dati immutabili (non modificabili). Una volta creato un tipo di dati primitivo, non è possibile modificarlo.

**Esempio:**

```js
let word = 'JavaScript'
```

Se si tenta di modificare la stringa memorizzata nella variabile *word*, JavaScript dovrebbe sollevare un errore. Qualsiasi tipo di dato sotto una virgoletta singola, una doppia virgoletta o una virgola rovesciata è un tipo di dato stringa.

```js
word[0] = 'Y'
```

Questa espressione non modifica la stringa memorizzata nella variabile *word*. Quindi, possiamo dire che le stringhe non sono modificabili o, in altre parole, immutabili.
I tipi di dati primitivi vengono confrontati in base ai loro valori. Confrontiamo diversi valori di dati. Si veda l'esempio seguente:

```js
let numOne = 3
let numTwo = 3

console.log(numOne == numTwo)      // true

let js = 'JavaScript'
let py = 'Python'

console.log(js == py)             //false 

let lightOn = true
let lightOff = false

console.log(lightOn == lightOff) // false
```

### Tipi di dati non primitivi

I tipi di dati *non primitivi* sono modificabili o mutabili. È possibile modificare il valore dei tipi di dati non primitivi dopo la loro creazione.
Vediamo come creare un array. Una matrice è un elenco di valori di dati in una parentesi quadra. Gli array possono contenere lo stesso tipo di dati o tipi diversi. I valori degli array sono referenziati dal loro indice. In JavaScript l'indice dell'array inizia da zero. Cioè, il primo elemento di un array si trova all'indice zero, il secondo elemento all'indice uno, il terzo elemento all'indice due e così via.

```js
let nums = [1, 2, 3]
nums[0] = 10

console.log(nums)  // [10, 2, 3]
```

Come si può notare, un array, che è un tipo di dati non primitivo, è mutabile. I tipi di dati non primitivi non possono essere confrontati per valore. Anche se due tipi di dati non primitivi hanno le stesse proprietà e gli stessi valori, non sono strettamente uguali.

```js
let nums = [1, 2, 3]
let numbers = [1, 2, 3]

console.log(nums == numbers)  // false

let userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

let userTwo = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

console.log(userOne == userTwo) // false
```

Regola generale: non si confrontano tipi di dati non primitivi. Non si confrontano array, funzioni o oggetti.
I valori non primitivi vengono definiti tipi di riferimento, perché vengono confrontati in base al riferimento anziché al valore. Due oggetti sono strettamente uguali solo se fanno riferimento allo stesso oggetto sottostante.

```js
let nums = [1, 2, 3]
let numbers = nums

console.log(nums == numbers)  // true

let userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

let userTwo = userOne

console.log(userOne == userTwo)  // true
```

Se avete difficoltà a capire la differenza tra tipi di dati primitivi e non primitivi, non siete gli unici. Calmatevi, passate alla sezione successiva e provate a tornare dopo qualche tempo. Ora iniziamo i tipi di dati con il tipo di numero.

## Numbers

I numeri sono valori interi e decimali che possono eseguire tutte le operazioni aritmetiche.
Vediamo alcuni esempi di numeri.

### Dichiarare i tipi di dati numerici

```js
let age = 35
const gravity = 9.81  // we use const for non-changing values, gravitational constant in  m/s2
let mass = 72         // mass in Kilogram
const PI = 3.14       // pi a geometrical constant

// More Esempios
const boilingPoint = 100 // temperature in oC, boiling point of water which is a constant
const bodyTemp = 37      // oC average human body temperature, which is a constant

console.log(age, gravity, mass, PI, boilingPoint, bodyTemp)
```

### L'Oggetto Math

In JavaScript l'oggetto Math fornisce molti metodi per lavorare con i numeri.

```js
const PI = Math.PI

console.log(PI)                            // 3.141592653589793

// Rounding to the closest number
// if above .5 up if less 0.5 down rounding

console.log(Math.round(PI))                // 3 to round values to the nearest number

console.log(Math.round(9.81))              // 10

console.log(Math.floor(PI))                // 3 rounding down

console.log(Math.ceil(PI))                 // 4 rounding up

console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5, returns the minimum value

console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20, returns the maximum value

const randNum = Math.random() // creates random number between 0 to 0.999999
console.log(randNum)

// Let us  create random number between 0 to 10

const num = Math.floor(Math.random () * 11) // creates random number between 0 and 10
console.log(num)

//Absolute value
console.log(Math.abs(-10))      // 10

//Square root
console.log(Math.sqrt(100))     // 10

console.log(Math.sqrt(2))       // 1.4142135623730951

// Power
console.log(Math.pow(3, 2))     // 9

console.log(Math.E)             // 2.718

// Logarithm
// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2))        // 0.6931471805599453
console.log(Math.log(10))       // 2.302585092994046

// Returns the natural logarithm of 2 and 10 respectively
console.log(Math.LN2)           // 0.6931471805599453
console.log(Math.LN10)          // 2.302585092994046

// Trigonometry
Math.sin(0)
Math.sin(60)

Math.cos(0)
Math.cos(60)
```

#### Random Number Generator

L'oggetto JavaScript Math ha un generatore di numeri con il metodo random() che genera numeri da 0 a 0,9999999...

```js
let randomNum = Math.random() // generates 0 to 0.999...
```

Vediamo ora come utilizzare il metodo random() per generare un numero casuale compreso tra 0 e 10:

```js
let randomNum = Math.random()         // generates 0 to 0.999
let numBtnZeroAndTen = randomNum * 11

console.log(numBtnZeroAndTen)         // this gives: min 0 and max 10.99

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
console.log(randomNumRoundToFloor)    // this gives between 0 and 10
```

## Strings

Le stringhe sono testi, che si trovano sotto le virgolette  **_singole_**, **_doppie_**, **_back-tick_**. Per dichiarare una stringa, abbiamo bisogno di un nome di variabile, di un operatore di assegnazione, di un valore tra virgolette singole, virgolette doppie o virgolette back-tick.

```js
let space = ' '           // an empty space string
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let quote = "The saying,'Seeing is Believing' is not correct in 2020."
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`
```

### Concatenazione di Stringhe

Il collegamento di due o più stringhe tra loro si chiama concatenazione.
Utilizzando le stringhe dichiarate nella precedente sezione:

```js
let fullName = firstName + space + lastName; // concatenation, merging two string together.
console.log(fullName);
```

```sh
Asabeneh Yetayeh
```

Possiamo concatenare le stringhe in diversi modi.

#### Concatenare Usando l'Operatore Addizione

La concatenazione con l'operatore di addizione è un vecchio metodo. Questo modo di concatenare è noioso e soggetto ad errori. È bene sapere come concatenare in questo modo, ma suggerisco vivamente di usare le stringhe modello ES6 (spiegate più avanti).

```js
// Declaring different variables of different data types
let space = ' '
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let age = 250


let fullName =firstName + space + lastName
let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country; // ES5 string addition

console.log(personInfoOne)
```

```sh
Asabeneh Yetayeh. I am 250. I live in Finland
```

#### Stringhe Letterali Lunghe

Una stringa può essere un singolo carattere, un paragrafo o una pagina. Se la lunghezza della stringa è eccessiva, non può essere contenuta in una riga. Possiamo usare il carattere backslash (\) alla fine di ogni riga per indicare che la stringa continuerà sulla riga successiva.

**Esempio:**

```js
const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log(paragraph)
```

#### Escape Sequences nelle Stringhe

In JavaScript e in altri linguaggi di programmazione il carattere \ seguito da alcuni caratteri è una sequenza di escape. Vediamo i caratteri di escape più comuni:

- \n: new line
- \t: Tab, means 8 spaces
- \\\\: Back slash
- \\': Single quote (')
- \\": Double quote (")
  
```js
console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tEsercizios')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')
```

Output in console:

```sh
I hope everyone is enjoying the 30 Days Of JavaScript challenge.
Do you ?
Days  Topics  Esercizios
Day 1 3 5
Day 2 3 5
Day 3 3 5
Day 4 3 5
This is a backslash  symbol (\)
In every programming language it starts with "Hello, World!"
In every programming language it starts with 'Hello, World!'
The saying 'Seeing is Believing' isn't correct in 2020
```

#### Stringhe Parametriche (Template Strings)

Per creare una stringa modello, utilizziamo due back-tick. Possiamo iniettare dati come espressioni all'interno di una stringa modello. Per iniettare dati, si racchiude l'espressione con una parentesi graffa ({}) preceduta dal segno $. Si veda la sintassi qui sotto.

```js
//Syntax
`String literal text`
`String literal text ${expression}`
```

**Esempio: 1**

```js
console.log(`The sum of 2 and 3 is 5`)              // statically writing the data
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`) // injecting the data dynamically
```

**Esempio:2**

```js
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let age = 250
let fullName = firstName + ' ' + lastName

let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.` //ES6 - String interpolation method
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`
console.log(personInfoTwo)
console.log(personInfoThree)
```

```sh
I am Asabeneh Yetayeh. I am 250. I live in Finland.
I am Asabeneh Yetayeh. I live in Helsinki, Finland. I am a teacher. I teach JavaScript.
```

Utilizzando un modello di stringa o un metodo di interpolazione delle stringhe, si possono aggiungere espressioni, che possono essere un valore o alcune operazioni (confronto, operazioni aritmetiche, operazioni ternarie).

```js
let a = 2
let b = 3
console.log(`${a} is greater than ${b}: ${a > b}`)
```

```sh
2 is greater than 3: false
```

### Medoti del Tipo String

Tutto in JavaScript è un oggetto. Una stringa è un tipo di dati primitivo, il che significa che non è possibile modificarla una volta creata. L'oggetto stringa ha molti metodi per le stringhe. Esistono diversi metodi per le stringhe che possono aiutarci a lavorare con le stringhe.

1. *length*: Il metodo stringa *length* restituisce il numero di caratteri di una stringa inclusi gli spazi vuoti.

**Esempio:**

```js
let js = 'JavaScript'
console.log(js.length)         // 10
let firstName = 'Asabeneh'
console.log(firstName.length)  // 8
```

2. *Accedere ai caratteri di una stringa*: È possibile accedere a ciascun carattere di una stringa utilizzando il suo indice. Nella programmazione, il conteggio inizia da 0. Il primo indice della stringa è zero e l'ultimo indice è la lunghezza della stringa meno uno.

  ![Accessing sting by index](../../images/string_indexes.png)
  
Accediamo ai diversi caratteri della stringa 'JavaScript'.

```js
let string = 'JavaScript'
let firstLetter = string[0]

console.log(firstLetter)           // J

let secondLetter = string[1]       // a
let thirdLetter = string[2]
let lastLetter = string[9]

console.log(lastLetter)            // t

let lastIndex = string.length - 1

console.log(lastIndex)  // 9
console.log(string[lastIndex])    // t
```

3. *toUpperCase()*: questo metodo cambia la stringa in lettere maiuscole.

```js
let string = 'JavaScript'

console.log(string.toUpperCase())     // JAVASCRIPT

let firstName = 'Asabeneh'

console.log(firstName.toUpperCase())  // ASABENEH

let country = 'Finland'

console.log(country.toUpperCase())    // FINLAND
```

4. *toLowerCase()*: questo metodo cambia la stringa in lettere minuscole.

```js
let string = 'JavasCript'

console.log(string.toLowerCase())     // javascript

let firstName = 'Asabeneh'

console.log(firstName.toLowerCase())  // asabeneh

let country = 'Finland'

console.log(country.toLowerCase())   // finland
```

5. *substr()*: Richiede due argomenti, l'indice iniziale e il numero di caratteri da tagliare.

```js
let string = 'JavaScript'
console.log(string.substr(4,6))    // Script

let country = 'Finland'
console.log(country.substr(3, 4))   // land
```

6. *substring()*: Richiede due argomenti, l'indice iniziale e l'indice finale, ma non include il carattere all'indice finale.

```js
let string = 'JavaScript'

console.log(string.substring(0,4))     // Java
console.log(string.substring(4,10))    // Script
console.log(string.substring(4))       // Script

let country = 'Finland'

console.log(country.substring(0, 3))   // Fin
console.log(country.substring(3, 7))   // land
console.log(country.substring(3))      // land
```

7. *split()*: Il metodo split divide una stringa in un punto specificato.

```js
let string = '30 Days Of JavaScript'

console.log(string.split())     // Changes to an array -> ["30 Days Of JavaScript"]
console.log(string.split(' '))  // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]

let firstName = 'Asabeneh'

console.log(firstName.split())    // Change to an array - > ["Asabeneh"]
console.log(firstName.split(''))  // Split to an array at each letter ->  ["A", "s", "a", "b", "e", "n", "e", "h"]

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'

console.log(countries.split(','))  // split to any array at comma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(', ')) //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]
```

8. *trim()*: Rimuove lo spazio di coda all'inizio o alla fine di una stringa.

```js
let string = '   30 Days Of JavaScript   '

console.log(string)
console.log(string.trim(' '))

let firstName = ' Asabeneh '

console.log(firstName)
console.log(firstName.trim())  // still removes spaces at the beginning and the end of the string
```

```sh
   30 Days Of JavasCript   
30 Days Of JavasCript
  Asabeneh 
Asabeneh
```

9. *includes()*: Prende un argomento di sottostringa e controlla se l'argomento di sottostringa esiste nella stringa. *include()* restituisce un booleano. Se una sottostringa esiste in una stringa, restituisce true, altrimenti restituisce false.

```js
let string = '30 Days Of JavaScript'

console.log(string.includes('Days'))     // true
console.log(string.includes('days'))     // false - it is case sensitive!
console.log(string.includes('Script'))   // true
console.log(string.includes('script'))   // false
console.log(string.includes('java'))     // false
console.log(string.includes('Java'))     // true

let country = 'Finland'

console.log(country.includes('fin'))     // false
console.log(country.includes('Fin'))     // true
console.log(country.includes('land'))    // true
console.log(country.includes('Land'))    // false
```

10. *replace()*: prende come parametro la vecchia sottostringa e una nuova sottostringa.

```js
string.replace(oldsubstring, newsubstring)
```

```js
let string = '30 Days Of JavaScript'
console.log(string.replace('JavaScript', 'Python')) // 30 Days Of Python

let country = 'Finland'
console.log(country.replace('Fin', 'Noman'))       // Nomanland
```

11. *charAt()*: Prende l'indice e restituisce il valore in corrispondenza di quell'indice

```js
string.charAt(index)
```

```js
let string = '30 Days Of JavaScript'
console.log(string.charAt(0))        // 3

let lastIndex = string.length - 1
console.log(string.charAt(lastIndex)) // t
```

12. *charCodeAt()*: Prende l'indice e restituisce il codice char (numero ASCII) del valore in corrispondenza dell'indice.

```js
string.charCodeAt(index)
```

```js
let string = '30 Days Of JavaScript'
console.log(string.charCodeAt(3))        // D ASCII number is 68

let lastIndex = string.length - 1
console.log(string.charCodeAt(lastIndex)) // t ASCII is 116

```

13.  *indexOf()*: Prende una sottostringa e se la sottostringa esiste in una stringa restituisce la prima posizione della sottostringa se non esiste restituisce -1

```js
string.indexOf(substring)
```

```js
let string = '30 Days Of JavaScript'

console.log(string.indexOf('D'))          // 3
console.log(string.indexOf('Days'))       // 3
console.log(string.indexOf('days'))       // -1
console.log(string.indexOf('a'))          // 4
console.log(string.indexOf('JavaScript')) // 11
console.log(string.indexOf('Script'))     //15
console.log(string.indexOf('script'))     // -1
```

14.  *lastIndexOf()*: Prende una sottostringa e se la sottostringa esiste in una stringa restituisce l'ultima posizione della sottostringa se non esiste restituisce -1


```js
//syntax
string.lastIndexOf(substring)
```

```js
let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'

console.log(string.lastIndexOf('love'))       // 67
console.log(string.lastIndexOf('you'))        // 63
console.log(string.lastIndexOf('JavaScript')) // 38
```

15. *concat()*: prende molte sottostringhe e le unisce.

```js
string.concat(substring, substring, substring)
```

```js
let string = '30'
console.log(string.concat("Days", "Of", "JavaScript")) // 30DaysOfJavaScript

let country = 'Fin'
console.log(country.concat("land")) // Finland
```

16. *startsWith*: prende una sottostringa come argomento e verifica se la stringa inizia con la sottostringa specificata. Restituisce un booleano (vero o falso).

```js
//syntax
string.startsWith(substring)
```

```js
let string = 'Love is the best to in this world'

console.log(string.startsWith('Love'))   // true
console.log(string.startsWith('love'))   // false
console.log(string.startsWith('world'))  // false

let country = 'Finland'

console.log(country.startsWith('Fin'))   // true
console.log(country.startsWith('fin'))   // false
console.log(country.startsWith('land'))  //  false
```

17. *endsWith*: prende una sottostringa come argomento e verifica se la stringa termina con la sottostringa specificata. Restituisce un booleano (vero o falso).

```js
string.endsWith(substring)
```

```js
let string = 'Love is the most powerful feeling in the world'

console.log(string.endsWith('world'))         // true
console.log(string.endsWith('love'))          // false
console.log(string.endsWith('in the world')) // true

let country = 'Finland'

console.log(country.endsWith('land'))         // true
console.log(country.endsWith('fin'))          // false
console.log(country.endsWith('Fin'))          //  false
```

18. *search*: prende come argomento una sottostringa e restituisce l'indice della prima corrispondenza. Il valore di ricerca può essere una stringa o un modello di espressione regolare.

```js
string.search(substring)
```

```js
let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.search('love'))          // 2
console.log(string.search(/javascript/gi))  // 7
```

prende come argomento una sottostringa o un modello di espressione regolare e restituisce un array se c'è corrispondenza, altrimenti restituisce null. Vediamo come si presenta un modello di espressione regolare. Inizia con il segno / e termina con il segno /.

```js
let string = 'love'
let patternOne = /love/     // with out any flag
let patternTwo = /love/gi   // g-means to search in the whole text, i - case insensitive
```

Match syntax

```js
// syntax
string.match(substring)
```

```js
let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.match('love'))
```

```sh
["love", index: 2, input: "I love JavaScript. If you do not love JavaScript what else can you love.", groups: undefined]
```

```js
let pattern = /love/gi
console.log(string.match(pattern))   // ["love", "love", "love"]
```

Estraiamo i numeri dal testo utilizzando un'espressione regolare. Questa non è la sezione delle espressioni regolari, niente panico! Tratteremo le espressioni regolari più avanti.

```js
let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/

// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere.

console.log(txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]
```

20. *repeat()*: prende come argomento un numero e restituisce la versione ripetuta della stringa.

```js
string.repeat(n)
```

```js
let string = 'love'
console.log(string.repeat(10)) // lovelovelovelovelovelovelovelovelovelove
```

## Verificiare i Tipi di Dati ed eseguire Casting

### Verificiare i Tipi di Dati

Per verificare il tipo di dati di una certa variabile si utilizza il metodo _typeof_.

**Esempio:**

```js
// Different javascript data types
// Let's declare different data types

let firstName = 'Asabeneh'      // string
let lastName = 'Yetayeh'        // string
let country = 'Finland'         // string
let city = 'Helsinki'           // string
let age = 250                   // number, it is not my real age, do not worry about it
let job                         // undefined, because a value was not assigned

console.log(typeof 'Asabeneh')  // string
console.log(typeof firstName)   // string
console.log(typeof 10)          // number
console.log(typeof 3.14)        // number
console.log(typeof true)        // boolean
console.log(typeof false)       // boolean
console.log(typeof NaN)         // number
console.log(typeof job)         // undefined
console.log(typeof undefined)   // undefined
console.log(typeof null)        // object
```

### Cambiare il Tipo di Dato (Casting)

- Casting: Conversione di un tipo di dati in un altro tipo di dati. Utilizziamo _parseInt()_, _parseFloat()_, _Number()_, _+ sign_, _str()_.
  Quando si eseguono operazioni aritmetiche, i numeri di stringa devono essere prima convertiti in numeri interi o float, altrimenti viene restituito un errore.

#### Da String a Int

Possiamo convertire un numero di stringa in un numero. Qualsiasi numero all'interno di un apice è un numero stringa. Un esempio di numero stringa: '10', '5', ecc.
Possiamo convertire una stringa in un numero utilizzando i seguenti metodi:

- parseInt()
- Number()
- Plus sign(+)

```js
let num = '10'
let numInt = parseInt(num)
console.log(numInt) // 10
```

```js
let num = '10'
let numInt = Number(num)

console.log(numInt) // 10
```

```js
let num = '10'
let numInt = +num

console.log(numInt) // 10
```

#### Da String a Float

Possiamo convertire un numero float stringa in un numero float. Qualsiasi numero float all'interno di una citazione è un numero float stringa. Un esempio di numero stringa float: '9,81', '3,14', '1,44', ecc.
È possibile convertire una stringa float in un numero utilizzando i seguenti metodi:

- parseFloat()
- Number()
- Plus sign(+)

```js
let num = '9.81'
let numFloat = parseFloat(num)

console.log(numFloat) // 9.81
```

```js
let num = '9.81'
let numFloat = Number(num)

console.log(numFloat) // 9.81
```

```js
let num = '9.81'
let numFloat = +num

console.log(numFloat) // 9.81
```

#### Da Float a Int

Possiamo convertire i numeri float in numeri interi.
Per convertire i float in int utilizziamo il metodo seguente:

- parseInt()
  
```js
let num = 9.81
let numInt = parseInt(num)

console.log(numInt) // 9
```

🌕  Fantastico. Hai appena completato le sfide del secondo giorno e sei due passi avanti sulla via della grandezza. Ora fai qualche esercizio per il cervello e per i muscoli.  

## 💻 Giorno 2: Esercizi

### Esercizio: Livello 1

1. Dichiarare una variabile chiamata sfida e assegnarle un valore iniziale **'30 Days Of JavaScript'**.
2. Stampate la stringa sulla console del browser usando __console.log()__.
3. Stampate la __lunghezza__ della stringa nella console del browser usando _console.log()_.
4. Cambiare tutti i caratteri della stringa in lettere maiuscole utilizzando il metodo __toUpperCase()__.
5. Cambiare tutti i caratteri della stringa in lettere minuscole usando il metodo __toLowerCase()__.
6. Tagliare (slice) la prima parola della stringa utilizzando il metodo __substr()__ o __substring()__.
7. Tagliare la frase *Giorni di JavaScript* da *30 Giorni di JavaScript*.
8. Verificare se la stringa contiene la parola __Script__ utilizzando il metodo __includes()__.
9. Dividere la __stringa__ in un __array__ usando il metodo __split()__.
10. Dividere la stringa 30 Days Of JavaScript nello spazio usando il metodo __split()__.
11. Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon" __split__ la stringa alla virgola e la trasforma in un array.
12. Cambiare 30 Days Of JavaScript in 30 Days Of Python usando il metodo __replace()__.
13. Qual è il carattere all'indice 15 nella stringa '30 giorni di JavaScript'? Usate il metodo __charAt()__.
14. Qual è il codice del carattere J nella stringa '30 Days Of JavaScript' usando il metodo __charCodeAt()__.
15. Usate __indexOf__ per determinare la posizione della prima occorrenza di __a__ in 30 Giorni Di JavaScript.
16. Usate __lastIndexOf__ per determinare la posizione dell'ultima occorrenza di __a__ in 30 Days Of JavaScript.
17. Usate __indexOf__ per trovare la posizione della prima occorrenza della parola __perché__ nella seguente frase:__"Non si può terminare una frase con perché perché perché è una congiunzione"__.
18. Usate __lastIndexOf__ per trovare la posizione dell'ultima occorrenza della parola __because__ nella seguente frase:__'Non si può concludere una frase con perché perché perché è una congiunzione'__.
19. Usare __search__ per trovare la posizione della prima occorrenza della parola __because__ nella seguente frase:__'Non si può terminare una frase con perché perché perché è una congiunzione'__
20. Usate __trim()__ per rimuovere gli spazi bianchi all'inizio e alla fine di una stringa, ad esempio ' 30 Days Of JavaScript '.
21. Usate il metodo __startsWith()__ con la stringa *30 Days Of JavaScript* e rendete il risultato vero.
22. Usate il metodo __endsWith()__ con la stringa *30 Days Of JavaScript* e fate in modo che il risultato sia vero.
23. Usare il metodo __match()__ per trovare tutti gli __a__ in 30 Giorni Di JavaScript
24. Usare il metodo __concat()__ e unire '30 giorni di' e 'JavaScript' in un'unica stringa, '30 giorni di JavaScript'.
25. Usate il metodo __repeat()__ per stampare 30 Giorni Di JavaScript 2 volte.

### Esercizio: Livello 2

1. Utilizzando console.log() stampate la seguente dichiarazione:

    ```sh
    The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
    ```

2. Utilizzando console.log() stampate la seguente citazione di Madre Teresa:

    ```sh
    "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
    ```

3. Verificare se typeof '10' è esattamente uguale a 10. Se non lo è, renderlo esattamente uguale.
4. Verificare se parseFloat('9.8') è uguale a 10. In caso contrario, renderlo esattamente uguale a 10.
5. Controllare se 'on' si trova sia in python che in jargon.
6. Spero che questo corso non sia pieno di jargon. Verificate se _il gergo_ è presente nella frase.
7. Generare un numero casuale compreso tra 0 e 100.
8. Generare un numero casuale compreso tra 50 e 100, incluso.
9. Generare un numero casuale compreso tra 0 e 255 incluso.
10. Accedere ai caratteri della stringa 'JavaScript' utilizzando un numero casuale.
11. Usare console.log() e i caratteri di escape per stampare il seguente schema.

    ```js
    1 1 1 1 1
    2 1 2 4 8
    3 1 3 9 27
    4 1 4 16 64
    5 1 5 25 125
    ```

12.  Usa __substr__ per tagliare la frase __perché perché perché perché__ dalla seguente frase:__'Non si può concludere una frase con perché perché perché è una congiunzione'__

### Esercizio: Livello 3

1. L'amore è la cosa migliore di questo mondo. Alcuni hanno trovato il loro amore e altri lo stanno ancora cercando". Contate il numero di parole __amore__ in questa frase.
2. Usate __match()__ per contare il numero di tutti i __perché__ nella seguente frase:__"Non si può concludere una frase con perché perché perché è una congiunzione"__.
3. Pulite il testo seguente e trovate la parola più frequente (suggerimento: usate replace ed espressioni regolari).

    ```js
        const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
    ```

4. Calcolare il reddito totale annuo della persona estraendo i numeri dal testo seguente. 'Guadagna 5000 euro di stipendio al mese, 10000 euro di bonus annuale, 15000 euro di corsi online al mese'.

🎉 CONGRATULAZIONI ! 🎉

[<< Giorno 1](../readMe.md) | [Giorno 3 >>](../03_Day_Booleans_operators_date/03_booleans_operators_date.md)
