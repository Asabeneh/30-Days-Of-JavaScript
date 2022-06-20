<div align="center">
  <h1> 30 Days Of JavaScript: Functions</h1>
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

[<< Day 6](../06_Day_Loops/06_day_loops.md) | [Day 8 >>](../08_Day_Objects/08_day_objects.md)

![Thirty Days Of JavaScript](../../images/banners/day_1_7.png)

- [📔 Giorno 7](#-day-7)
	- [Funzioni](#functions)
		- [Dichiarare una Funzione](#function-declaration)
		- [Funzione senza parametro e valore di ritorno](#function-without-a-parameter-and-return)
		- [Funzione con valore di ritorno](#function-returning-value)
		- [Funzione con un parametro](#function-with-a-parameter)
		- [Funzione con due parametri](#function-with-two-parameters)
		- [Funzione con molti parametri](#function-with-many-parameters)
		- [Funzione con numero illimitato di parametri](#function-with-unlimited-number-of-parameters)
			- [Numero illimitato di parametri nelle funzioni regolari](#unlimited-number-of-parameters-in-regular-function)
			- [Numero illimitato di parametri nelle arrow function](#unlimited-number-of-parameters-in-arrow-function)
		- [Anonymous Function](#anonymous-function)
		- [Expression Function](#expression-function)
		- [Self Invoking Functions](#self-invoking-functions)
		- [Arrow Function](#arrow-function)
		- [Funzioni con parametri di default](#function-with-default-parameters)
		- [Dichiarazione di funzione vs Arrow function](#function-declaration-versus-arrow-function)
	- [💻 Esercizi](#-exercises)
		- [Esercizi: Livello 1](#exercises-level-1)
		- [Esercizi: Livello 2](#exercises-level-2)
		- [Esercizi: Livello 3](#exercises-level-3)

# 📔 Giorno 7

## Funzioni

Finora abbiamo visto molte funzioni JavaScript integrate. In questa sezione ci concentreremo sulle funzioni personalizzate. Che cos'è una funzione? Prima di iniziare a creare funzioni, cerchiamo di capire cos'è una funzione e perché ne abbiamo bisogno.

Una funzione è un blocco riutilizzabile di codice o di istruzioni di programmazione progettato per eseguire un determinato compito.
Una funzione è dichiarata da una parola chiave seguita da un nome, seguita da parentesi (). Una parentesi può contenere un parametro. Se una funzione accetta un parametro, verrà chiamata con un argomento. Una funzione può anche accettare un parametro predefinito. Per memorizzare un dato in una funzione, questa deve restituire determinati tipi di dati. Per ottenere il valore si chiama o si invoca una funzione.
Le funzioni rendono il codice

- pulito e facile da leggere
- riutilizzabile
- facile da testare

Una funzione può essere dichiarata o creata in due modi:

- _Declaration function_
- _Expression function_
- _Anonymous function_
- _Arrow function_

### Dichiarare una Funzione

Vediamo come dichiarare una funzione e come chiamare una funzione.

```js
//declaring a function without a parameter
function functionName() {
  // code goes here
}
functionName() // calling function by its name and with parentheses
```

### Funzione senza parametro e valore di ritorno

Le funzioni possono essere dichiarate senza parametri.

**Esempio:**

```js
// function without parameter,  a function which make a number square
function square() {
  let num = 2
  let sq = num * num
  console.log(sq)
}

square() // 4

// function without parameter
function addTwoNumbers() {
  let numOne = 10
  let numTwo = 20
  let sum = numOne + numTwo

  console.log(sum)
}

addTwoNumbers() // a function has to be called by its name to be executed 
```

```js
  function printFullName (){
      let firstName = 'Asabeneh'
      let lastName = 'Yetayeh'
      let space = ' '
      let fullName = firstName + space + lastName
      console.log(fullName)
}

printFullName() // calling a function
```

### Funzione con valore di ritorno

Le funzioni possono anche restituire valori; se una funzione non restituisce valori, il valore della funzione è indefinito. Scriviamo le funzioni di cui sopra con il ritorno. D'ora in poi, restituiremo il valore a una funzione invece di stamparlo.

```js
function printFullName (){
      let firstName = 'Asabeneh'
      let lastName = 'Yetayeh'
      let space = ' '
      let fullName = firstName + space + lastName
      return fullName
}
console.log(printFullName())
```

```js

  function addTwoNumbers() {
      let numOne = 2
      let numTwo = 3
      let total = numOne + numTwo
      return total

  }

console.log(addTwoNumbers())
```

### Funzione con un parametro

In una funzione si possono passare come parametri diversi tipi di dati (numero, stringa, booleano, oggetto, funzione).

```js
// function with one parameter
function functionName(parm1) {
  //code goes her
}
functionName(parm1) // during calling or invoking one argument needed

function areaOfCircle(r) {
  let area = Math.PI * r * r
  return area
}

console.log(areaOfCircle(10)) // should be called with one argument

function square(number) {
  return number * number
}

console.log(square(10))
```

### Funzione con due parametri

```js
// function with two parameters
function functionName(parm1, parm2) {
  //code goes her
}
functionName(parm1, parm2) // during calling or invoking two arguments needed
// Function without parameter doesn't take input, so lets make a function with parameters
function sumTwoNumbers(numOne, numTwo) {
  let sum = numOne + numTwo
  console.log(sum)
}
sumTwoNumbers(10, 20) // calling functions
// If a function doesn't return it doesn't store data, so it should return

function sumTwoNumbers(numOne, numTwo) {
  let sum = numOne + numTwo
  return sum
}

console.log(sumTwoNumbers(10, 20))
function printFullName(firstName, lastName) {
  return `${firstName} ${lastName}`
}
console.log(printFullName('Asabeneh', 'Yetayeh'))
```

### Funzione con molti parametri

```js
// function with multiple parameters
function functionName(parm1, parm2, parm3,...){
  //code goes here
}
functionName(parm1,parm2,parm3,...) // during calling or invoking three arguments needed


// this function takes array as a parameter and sum up the numbers in the array
function sumArrayValues(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
const numbers = [1, 2, 3, 4, 5];
    //calling a function
console.log(sumArrayValues(numbers));


    const areaOfCircle = (radius) => {
      let area = Math.PI * radius * radius;
      return area;
    }
console.log(areaOfCircle(10))

```

### Funzione con numero illimitato di parametri

A volte non sappiamo quanti argomenti l'utente ci passerà. Pertanto, dobbiamo sapere come scrivere una funzione che può accettare un numero illimitato di argomenti. Il modo in cui lo facciamo presenta una differenza significativa tra una dichiarazione di funzione (funzione regolare) e una funzione freccia (arrow function). Vediamo alcuni esempi di dichiarazione di funzione e di funzione freccia.

#### Numero illimitato di parametri nelle funzioni regolari

 Una dichiarazione di funzione fornisce un array di argomenti con ambito di funzione come un oggetto. Qualsiasi cosa passata come argomento nella funzione può essere accessibile dall'oggetto argomenti all'interno delle funzioni. Vediamo un esempio

 ```js
// Let us access the arguments object
​
function sumAllNums() {
  console.log(arguments)
}

sumAllNums(1, 2, 3, 4)
// Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]

```

```js
// function declaration
​
function sumAllNums() {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}

console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173
```

#### Numero illimitato di parametri nelle arrow function

 La funzione Arrow non ha l'oggetto argomenti con ambito di funzione. Per implementare una funzione che accetta un numero illimitato di argomenti, in una funzione freccia si utilizza l'operatore spread seguito da un qualsiasi nome di parametro.  Qualsiasi cosa passata come argomento nella funzione può essere accessibile come array nella funzione freccia. Vediamo un esempio

 ```js
// Let us access the arguments object
​
const sumAllNums = (...args) => {
  // console.log(arguments), arguments object not found in arrow function
  // instead we use a parameter followed by spread operator (...)
  console.log(args)
}

sumAllNums(1, 2, 3, 4)
// [1, 2, 3, 4]

```

```js
// function declaration
​
const sumAllNums = (...args) => {
  let sum = 0
  for (const element of args) {
    sum += element
  }
  return sum
}

console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173
```

### Anonymous Function

Funzione anonima o senza nome

```js
const anonymousFun = function() {
  console.log(
    'I am an anonymous function and my value is stored in anonymousFun'
  )
}
```

### Expression Function

Le Expression Function sono funzioni anonime. Dopo aver creato una funzione senza nome, la assegniamo a una variabile. Per restituire un valore dalla funzione, dobbiamo chiamare la variabile. Guardate l'esempio seguente.

```js

// Function expression
const square = function(n) {
  return n * n
}

console.log(square(2)) // -> 4
```

### Self Invoking Functions

Le funzioni Self Invoking sono funzioni anonime che non hanno bisogno di essere chiamate per restituire un valore.

```js
(function(n) {
  console.log(n * n)
})(2) // 4, but instead of just printing if we want to return and store the data, we do as shown below

let squaredNum = (function(n) {
  return n * n
})(10)

console.log(squaredNum)
```

### Arrow Function

La Arrow function è un'alternativa per scrivere una funzione, tuttavia la dichiarazione di funzione e la Arrow function presentano alcune piccole differenze.

La Arrow function utilizza la freccia invece della parola chiave *function* per dichiarare una funzione. Vediamo la dichiarazione di funzione e la funzione freccia.

```js
// This is how we write normal or declaration function
// Let us change this declaration function to an arrow function
function square(n) {
  return n * n
}

console.log(square(2)) // 4

const square = n => {
  return n * n
}

console.log(square(2))  // -> 4

// if we have only one line in the code block, it can be written as follows, explicit return
const square = n => n * n  // -> 4
```

```js
const changeToUpperCase = arr => {
  const newArr = []
  for (const element of arr) {
    newArr.push(element.toUpperCase())
  }
  return newArr
}

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(changeToUpperCase(countries))

// ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]
```

```js
const printFullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`
}

console.log(printFullName('Asabeneh', 'Yetayeh'))
```

La funzione di cui sopra ha solo l'istruzione return, quindi possiamo restituirla esplicitamente come segue.

```js
const printFullName = (firstName, lastName) => `${firstName} ${lastName}`

console.log(printFullName('Asabeneh', 'Yetayeh'))
```

### Funzioni con parametri di default

A volte si passano dei valori predefiniti ai parametri; quando si invoca la funzione, se non si passa un argomento, verrà utilizzato il valore predefinito. Sia la dichiarazione di funzione che la funzione freccia possono avere uno o più valori predefiniti.

```js
// syntax
// Declaring a function
function functionName(param = value) {
  //codes
}

// Calling function
functionName()
functionName(arg)
```

**Esempio:**

```js
function greetings(name = 'Peter') {
  let message = `${name}, welcome to 30 Days Of JavaScript!`
  return message
}

console.log(greetings())
console.log(greetings('Asabeneh'))
```

```js
function generateFullName(firstName = 'Asabeneh', lastName = 'Yetayeh') {
  let space = ' '
  let fullName = firstName + space + lastName
  return fullName
}

console.log(generateFullName())
console.log(generateFullName('David', 'Smith'))
```

```js
function calculateAge(birthYear, currentYear = 2019) {
  let age = currentYear - birthYear
  return age
}

console.log('Age: ', calculateAge(1819))
```

```js
function weightOfObject(mass, gravity = 9.81) {
  let weight = mass * gravity + ' N' // the value has to be changed to string first
  return weight
}

console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 gravity at the surface of Earth
console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // gravity at surface of Moon
```

Vediamo come scrivere le funzioni di cui sopra con le funzioni a freccia

```js
// syntax
// Declaring a function
const functionName = (param = value) => {
  //codes
}

// Calling function
functionName()
functionName(arg)
```

**Esempio:**

```js
const greetings = (name = 'Peter') => {
  let message = name + ', welcome to 30 Days Of JavaScript!'
  return message
}

console.log(greetings())
console.log(greetings('Asabeneh'))
```

```js
const generateFullName = (firstName = 'Asabeneh', lastName = 'Yetayeh') => {
  let space = ' '
  let fullName = firstName + space + lastName
  return fullName
}

console.log(generateFullName())
console.log(generateFullName('David', 'Smith'))
```

```js

const calculateAge = (birthYear, currentYear = 2019) => currentYear - birthYear
console.log('Age: ', calculateAge(1819))
```

```js
const weightOfObject = (mass, gravity = 9.81) => mass * gravity + ' N'
  
console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 gravity at the surface of Earth
console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // gravity at surface of Moon
```

### Dichiarazione di funzione vs Arrow function

Verrà trattato in un'altra sezione.

🌕 Sei una stella nascente, ora conosci le funzioni. Sei super carico del potere delle funzioni. Hai appena completato le sfide del 7° giorno e sei a 7 passi dalla strada verso la grandezza. Ora fai qualche esercizio per il cervello e per i muscoli.



## 💻 Esercizi

### Esercizi: Livello 1

1. Dichiarare una funzione _fullName_ e stampare il proprio nome completo.
2. Dichiarare una funzione _fullName_ che prenda come parametro firstName e lastName e restituisca il nome completo.
3. Dichiarate una funzione _addNumbers_ che prende due parametri e restituisce la somma.
4. L'area di un rettangolo si calcola come segue: _area = lunghezza x larghezza_. Scrivete una funzione che calcoli l'_area del rettangolo_.
5. Il perimetro di un rettangolo si calcola come segue: _perimetro= 2x(lunghezza + larghezza)_. Scrivete una funzione che calcoli il _perimetro del rettangolo_.
6. Il volume di un prisma rettangolare si calcola come segue: _volume = lunghezza x larghezza x altezza_. Scrivete una funzione che calcoli il _volume del prisma rettangolare_.
7. L'area di un cerchio si calcola come segue: _area = π x r x r_. Scrivere una funzione che calcoli _areaOfCircle_.
8. La circonferenza di un cerchio si calcola come segue: _circonferenza = 2πr_. Scrivere una funzione che calcoli _circonferenza_.
9. La densità di una sostanza si calcola come segue:_densità= massa/volume_. Scrivete una funzione che calcoli la _densità_.
10. La velocità si calcola dividendo la distanza totale coperta da un oggetto in movimento per il tempo totale impiegato. Scrivete una funzione che calcoli la velocità di un oggetto in movimento, _velocità_.
11. Il peso di una sostanza si calcola come segue: _peso = massa x gravità_. Scrivete una funzione che calcoli il _peso_.
12. La temperatura in oC può essere convertita in oF utilizzando questa formula: _oF = (oC x 9/5) + 32_. Scrivete una funzione che converta oC in oF _convertCelsiusToFahrenheit_.
13. L'indice di massa corporea (BMI) si calcola come segue: _bmi = peso in Kg / (altezza x altezza) in m2_. Scrivete una funzione che calcoli il _bmi_. L'IMC viene utilizzato per definire in modo generale diversi gruppi di peso negli adulti di 20 anni o più.Verificate se una persona è _sottopeso, normale, sovrappeso_ o _obesa_ sulla base delle informazioni fornite di seguito.

    - Gli stessi gruppi si applicano sia agli uomini che alle donne.
    - Sottopeso: L'IMC è inferiore a 18,5
    - Peso normale: L'IMC è compreso tra 18,5 e 24,9
    - Sovrappeso: IMC compreso tra 25 e 29,9
    - _Obesità_: IMC pari o superiore a 30

14. Scrivete una funzione chiamata _checkSeason_, che prende un parametro mese e restituisce la stagione: autunno, inverno, primavera o estate.
15. Math.max restituisce il suo argomento più grande. Scrivete una funzione findMax che prenda tre argomenti e restituisca il loro massimo senza usare il metodo Math.max.

    ```js
    console.log(findMax(0, 10, 5))
    10
    console.log(findMax(0, -10, -2))
    0
    ```
  
### Esercizi: Livello 2

1. L'equazione lineare è calcolata come segue: _ax + by + c = 0_. Scrivete una funzione che calcola il valore di un'equazione lineare, _solveLinEquation_.
2. L'equazione quadratica si calcola come segue: _ax2 + bx + c = 0_. Scrivete una funzione che calcoli il valore o i valori di un'equazione quadratica, _solveQuadEquation_.

    ```js
    console.log(solveQuadratic()) // {0}
    console.log(solveQuadratic(1, 4, 4)) // {-2}
    console.log(solveQuadratic(1, -1, -2)) // {2, -1}
    console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
    console.log(solveQuadratic(1, 0, -4)) //{2, -2}
    console.log(solveQuadratic(1, -1, 0)) //{1, 0}
    ```

3. Dichiarare una funzione chiamata _printArray_. Prende un array come parametro e stampa ogni valore dell'array.
4. Scrivete una funzione di nome _showDateTime_ che mostra l'ora in questo formato: 08/01/2020 04:08 utilizzando l'oggetto Date.

    ```sh
    showDateTime()
    08/01/2020 04:08
    ```

5. Dichiarare il nome della funzione _swapValues_. Questa funzione scambia il valore di x con quello di y.

    ```js
    swapValues(3, 4) // x => 4, y=>3
    swapValues(4, 5) // x = 5, y = 4
    ```

6. Dichiarare una funzione chiamata _reverseArray_. Prende un array come parametro e restituisce l'inverso dell'array (non usare il metodo).

    ```js
    console.log(reverseArray([1, 2, 3, 4, 5]))
    //[5, 4, 3, 2, 1]
    console.log(reverseArray(['A', 'B', 'C']))
    //['C', 'B', 'A']
    ```

7. Dichiarare il nome della funzione _capitalizeArray_. Prende l'array come parametro e restituisce l'array - maiuscolo.
8. Dichiarare una funzione di nome _addItem_. Prende come parametro un elemento e restituisce un array dopo l'aggiunta dell'elemento.
9. Dichiarare una funzione di nome _removeItem_. Richiede un parametro indice e restituisce un array dopo la rimozione di un elemento.
10. Dichiarare una funzione di nome _sumOfNumbers_. Richiede un parametro numero e somma tutti i numeri in quell'intervallo.
11. Dichiarare una funzione di nome _sumOfOdds_. Prende come parametro un numero e somma tutti i numeri dispari in quell'intervallo.
12. Dichiarare una funzione di nome _sumOfEven_. Prende come parametro un numero e somma tutti i numeri pari in quell'intervallo.
13. Dichiarare il nome di una funzione _EvensAndOdds_. Prende come parametro un numero intero positivo e conta il numero di pari e dispari nel numero.

    ```sh
    evensAndOdds(100);
    The number of odds are 50.
    The number of evens are 51.
    ```

14. Scrivere una funzione che accetta un numero qualsiasi di argomenti e restituisce la somma degli argomenti.

    ```js
    sum(1, 2, 3) // -> 6
    sum(1, 2, 3, 4) // -> 10
    ```

15. Scrivere una funzione che generi un _randomUserIp_.
16. Scrivere una funzione che generi un _randomMacAddress_.
17. Dichiarare il nome di una funzione _randomHexaNumberGenerator_. Quando questa funzione viene chiamata, genera un numero esadecimale casuale. La funzione restituisce il numero esadecimale.

    ```sh
    console.log(randomHexaNumberGenerator());
    '#ee33df'
    ```

18. Dichiarare il nome della funzione _userIdGenerator_. Quando questa funzione viene chiamata, genera un id di sette caratteri. La funzione restituisce l'id.

    ```sh
    console.log(userIdGenerator());
    41XTDbE
    ```

### Esercizi: Livello 3

1. Modificare la funzione _userIdGenerator_. Dichiarare il nome della funzione _userIdGeneratedByUser_. Non accetta alcun parametro, ma prende due input tramite prompt(). Uno di questi è il numero di caratteri e il secondo è il numero di ID che devono essere generati.

    ```sh
    userIdGeneratedByUser()
    'kcsy2
    SMFYb
    bWmeq
    ZXOYh
    2Rgxf
    '
    userIdGeneratedByUser()
    '1GCSgPLMaBAVQZ26
    YD7eFwNQKNs7qXaT
    ycArC5yrRupyG00S
    UbGxOFI7UXSWAyKN
    dIV0SSUTgAdKwStr
    '
    ```

2. Scrivete una funzione chiamata _rgbColorGenerator_ che genera i colori rgb.

    ```sh
    rgbColorGenerator()
    rgb(125,244,255)
    ```

3. Scrivere una funzione **_arrayOfHexaColors_** che restituisca un numero qualsiasi di colori esadecimali in un array.
4. Scrivete una funzione **_arrayOfRgbColors_** che restituisca un numero qualsiasi di colori RGB in una matrice.
5. Scrivere una funzione **_convertHexaToRgb_** che converta il colore hexa in rgb e restituisca un colore rgb.
6. Scrivere una funzione **_convertRgbToHexa_** che converta il colore rgb in hexa e restituisca un colore hexa.
7. Scrivere una funzione **_generateColors_** che possa generare un numero qualsiasi di colori hexa o rgb.

    ```js
    console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
    console.log(generateColors('hexa', 1)) // '#b334ef'
    console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
    console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
    ```

8. Chiamare la funzione _shuffleArray_, che prende un array come parametro e restituisce un array mescolato.
9. Chiamate la vostra funzione _factorial_, che prende un numero intero come parametro e restituisce un fattoriale del numero
10. Chiamate la funzione _isEmpty_, che prende un parametro e controlla se è vuoto o meno.
11. Chiamate la funzione _sum_, che accetta un numero qualsiasi di argomenti e restituisce la somma.
12. Scrivete una funzione chiamata _sumOfArrayItems_, che accetta un parametro dell'array e restituisce la somma di tutti gli elementi. Verificare se tutti gli elementi dell'array sono di tipo numero. In caso contrario, restituire un feedback ragionevole.
13. Scrivete una funzione chiamata _media_, che accetta un parametro di array e restituisce la media degli elementi. Verificate se tutti gli elementi dell'array sono di tipo numero. In caso contrario, restituire un feedback ragionevole.
14. Scrivere una funzione chiamata _modifyArray_ che prenda come parametro un array e modifichi il quinto elemento dell'array e restituisca l'array. Se la lunghezza dell'array è inferiore a cinque, restituisce "elemento non trovato".

    ```js
    console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
    ```

    ```sh
    ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
    ```

    ```js
    console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
    ```

    ```sh
    ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
    ```

    ```js
    console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
    ```

    ```sh
      'Not Found'
    ```

15. Scrivere una funzione chiamata _isPrime_, che verifichi se un numero è un numero primo.
16. Scrivete una funzione che verifichi se tutti gli elementi sono unici nell'array.
17. Scrivete una funzione che verifichi se tutti gli elementi dell'array sono dello stesso tipo di dati.
18. Il nome della variabile JavaScript non supporta caratteri speciali o simboli, tranne \$ o \_. Scrivete una funzione **isValidVariable** che controlli se una variabile è valida o non valida.
19. Scrivete una funzione che restituisca un array di sette numeri casuali in un intervallo compreso tra 0 e 9. Tutti i numeri devono essere unici. Tutti i numeri devono essere unici.

    ```js
    sevenRandomNumbers()
    [(1, 4, 5, 7, 9, 8, 0)]
    ```

20. Scrivere una funzione chiamata reverseCountries, che prenda un array di paesi e prima copi l'array e restituisca l'inverso dell'array originale.

🎉 CONGRATULAZIONI ! 🎉

[<< Day 6](../06_Day_Loops/06_day_loops.md) | [Day 8 >>](../08_Day_Objects/08_day_objects.md)