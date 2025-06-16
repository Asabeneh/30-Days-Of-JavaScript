<div align="center">
  <h1> 30 Days Of JavaScript: Types de données </h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/asabeneh/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/Asabeneh">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/asabeneh?style=social">
  </a>

  <sub>Auteur:
  <a href="https://www.linkedin.com/in/asabeneh/" target="_blank">Asabeneh Yetayeh</a><br>
  <small> Janvier, 2020</small>
  </sub>
</div>
</div>

[<< Day 1](../readMe.md) | [Day 3 >>](../03_Day_Booleans_operators_date/03_booleans_operators_date.md)

![Thirty days of JavaScript](../images/banners/day_1_2.png)

- [📔 Day 2](#-day-2)
	- [Type de données](#data-types)
		- [Types de données primitifs](#primitive-data-types)
		- [Type de données non-primitifs](#non-primitive-data-types)
	- [Nombre](#numbers)
		- [Déclaration des types de données numériques](#declaring-number-data-types)
		- [Math Objets](#math-object)
			- [Générateur de nombre aléatoire](#random-number-generator)
	- [Chaîne de caractère](#strings)
		- [Concaténation de chaînes de caractères](#string-concatenation)
			- [Concaténation à l'aide de l'opérateur d'addition](#concatenating-using-addition-operator)
			- [Longue chaîne de caractère litteral](#long-literal-strings)
			- [Séquences d'échappement dans les chaînes ](#escape-sequences-in-strings)
			- [Littéraux de gabarit (Chaînes de gabarit)](#template-literals-template-strings)
		- [Méthode de chaîne de caractère](#string-methods)
	- [Vérification des types de données et casting](#checking-data-types-and-casting)
		- [Vérification des types de données](#checking-data-types)
		- [Changement de type de données (Casting)](#changing-data-type-casting)
			- [Chaîne à entier](#string-to-int)
			- [Chaîne à flottant](#string-to-float)
			- [Flottant à entier](#float-to-int)
	- [💻 Day 2: Exercises](#-day-2-exercises)
		- [Exercise: Niveau 1](#exercise-level-1)
		- [Exercise: Niveau 2](#exercise-level-2)
		- [Exercises: Niveau 3](#exercises-level-3)

# 📔 Day 2

## Types de données

Dans la section précédente, nous avons mentionné brièvement les types de données. Les données ou valeurs ont des types de données. Les types de données décrivent les caractéristiques des données. Les types de données peuvent être divisés en deux parties.


1. Les Types de données primitif
2. Les Types de données non-primitif(References d'objets)

### Les Types de données primitif

Les types de données primitif en JavaScript inclus:

 1. Nombre - Integers, flottant
 2. Chaîne de caractère - Toute donnée entre guillemets simples, guillemets doubles ou backticks.
 3. Booleans - Valeur vrai ou faux
 4. Null - Une valeur vide ou aucune valeur
 5. Undefined - une variable déclaré qui n'as pas de valeur
 6. Symbol - Une valeur unique qui peut être générée par le constructeur Symbol.

Les types de données non primitifs en JavaScript incluent:

1. Objets
2. Tableau (Arrays)

Voyons maintenant ce que signifient exactement les types de données primitifs et non primitifs.
Les Types de données *Primitif* sont des types de données immuable (non modifiable). Une fois qu'un type de données primitif est créé, nous ne pouvons pas le modifier.

**Example:**

```js
let word = 'JavaScript'
```

Si nous essayons de stocker une chaîne de caractère dans la variable *word*, Javascript devrait générer une erreur. Tout type de donnée entre guillemets simples, guillemets doubles ou backticks est un type de donnée chaîne (string).

```js
word[0] = 'Y'
```

Cette expression ne modifie pas la chaîne stockée dans la variable *word*. Nous pouvons donc dire que les chaînes ne sont pas modifiables, ou en d'autres termes, qu'elles sont immuables.
Les types de données primitifs sont comparés par leurs valeurs. Comparons différentes valeurs de données. Voici l'exemple ci-dessous :

```js
let numOne = 3
let numTwo = 3

console.log(numOne == numTwo)      // true

let js = 'JavaScript'
let py = 'Python'

console.log(js == py)             // false 

let lightOn = true
let lightOff = false

console.log(lightOn == lightOff) // false
```

### Types de données non-primitif

Les types de données *non-primitif*. Nous pouvons modifier la valeur des types de données non primitifs après leur création.
Voyons cela en créant un tableau. Un tableau est une liste de valeurs de données entre crochets. Les tableaux peuvent contenir des types de données identiques ou différents. Les valeurs d'un tableau sont référencées par leur index. Dans JavaScript, l'index des tableaux commence à zéro. C'est-à-dire que le premier élément d'un tableau se trouve à l'index zéro, le deuxième élément à l'index un, et le troisième élément à l'index deux, etc.

```js
let nums = [1, 2, 3]
nums[0] = 10

console.log(nums)  // [10, 2, 3]
```

Comme vous pouvez le voir, un tableau, qui est un type de données non primitif, est mutable. Les types de données non primitifs ne peuvent pas être comparés par valeur. Même si deux types de données non primitifs ont les mêmes propriétés et valeurs, ils ne sont pas strictement égaux.

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

Règle générale : nous ne comparons pas les types de données non primitifs. Évitez de comparer les tableaux, les fonctions ou les objets. Les valeurs non primitives sont appelées types de référence, car elles sont comparées par référence plutôt que par valeur. Deux objets ne sont strictement égaux que s'ils font référence au même objet sous-jacent.

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

Si vous avez du mal à comprendre la différence entre les types de données primitifs et non primitifs, vous n'êtes pas le seul. Restez calme et passez simplement à la section suivante, puis essayez de revenir plus tard. Maintenant, commençons par les types de données numériques.

## Nombres

Les nombres sont des valeurs entières et décimales qui peuvent effectuer toutes les opérations arithmétiques. Voyons quelques exemples de nombres.

### Declaring Number Data Types

```js
let age = 35
const gravity = 9.81  // we use const for non-changing values, gravitational constant in  m/s2
let mass = 72         // mass in Kilogram
const PI = 3.14       // pi a geometrical constant

// More Examples
const boilingPoint = 100 // temperature in oC, boiling point of water which is a constant
const bodyTemp = 37      // oC average human body temperature, which is a constant

console.log(age, gravity, mass, PI, boilingPoint, bodyTemp)
```

### Math Object

En Javascript le Math Object fournit de nombreuses méthodes afin de travailler avec des nombres.

```js
const PI = Math.PI

console.log(PI)                            // 3.141592653589793

// Arrondir au nombre le plus proche
// Si supérieur à 0,5, arrondir vers le haut ; si inférieur à 0,5, arrondir vers le bas

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

#### Générateur de nombre alétoire

L'objet Math de JavaScript possède une méthode random() qui génère un nombre compris entre 0 et 0,999999999...

```js
let randomNum = Math.random() // generates 0 to 0.999...
```

Voyons maintenant comment nous pouvons utiliser la méthode random() pour générer un nombre aléatoire entre 0 et 10 :

```js
let randomNum = Math.random()         // generates 0 to 0.999
let numBtnZeroAndTen = randomNum * 11

console.log(numBtnZeroAndTen)         // this gives: min 0 and max 10.99

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
console.log(randomNumRoundToFloor)    // this gives between 0 and 10
```

## Chaîne de caractère

Les chaînes de caractères sont des textes, qui se trouvent entre des **_guillemets_** simples, **_guillemets doubles_** ou **_back-tick_**. Pour déclarer une chaîne, nous avons besoin d'un nom de variable, d'un opérateur d'assignation et d'une valeur entre guillemets simples, guillemets doubles ou backticks.
Voyons quelques exemples de chaînes :

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

### Concaténation de chaînes

Connecter deux ou plusieurs chaînes ensemble s'appelle la concaténation.
Utilisons les chaînes déclarées dans la section précédente sur les chaînes :

```js
let fullName = firstName + space + lastName; // concatenation, merging two string together.
console.log(fullName);
```

```sh
Asabeneh Yetayeh
```

We can concatenate strings in different ways.

#### Concaténation à l'aide de l'opérateur d'addition

La concaténation à l'aide de l'opérateur d'addition est une méthode ancienne. Cette façon de concaténer est fastidieuse et sujette aux erreurs. Il est bon de savoir comment concaténer de cette manière, mais je recommande fortement d'utiliser les chaînes de gabarit ES6 (sera expliquées plus tard).

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

#### Long Literal Strings

Une chaîne peut être un seul caractère, un paragraphe ou une page. Si la longueur de la chaîne est trop grande, elle ne tient pas sur une seule ligne. Nous pouvons utiliser le caractère de barre oblique inversée (\) à la fin de chaque ligne pour indiquer que la chaîne se poursuivra sur la ligne suivante.
**Example:**

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

#### Séquences d'échappement dans les chaînes

In JavaScript and other programming languages \ followed by some characters is an escape sequence. Let's see the most common escape characters:

- \n: nouvelle ligne
- \t: tabulation, équivaut à 8 espaces
- \\\\: Back slash
- \\': guillemet simple (')
- \\": guillemet double (")
  
```js
console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
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
Days  Topics  Exercises
Day 1 3 5
Day 2 3 5
Day 3 3 5
Day 4 3 5
This is a backslash  symbol (\)
In every programming language it starts with "Hello, World!"
In every programming language it starts with 'Hello, World!'
The saying 'Seeing is Believing' isn't correct in 2020
```

#### Template Literals (Template Strings)

Pour créer des chaînes de gabarit, nous utilisons deux backticks. Nous pouvons injecter des données sous forme d'expressions à l'intérieur d'une chaîne de gabarit. Pour injecter des données, nous entourons l'expression avec des accolades ({}) précédées d'un signe dollar ($). Voici la syntaxe ci-dessous.

```js
//Syntax
`String literal text`
`String literal text ${expression}`
```

**Example: 1**

```js
console.log(`The sum of 2 and 3 is 5`)              // statically writing the data
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`) // injecting the data dynamically
```

**Example:2**

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

En utilisant une chaîne de gabarit ou la méthode d'interpolation de chaînes, nous pouvons ajouter des expressions, qui peuvent être une valeur ou certaines opérations (comparaison, opérations arithmétiques, opération ternaire).

```js
let a = 2
let b = 3
console.log(`${a} is greater than ${b}: ${a > b}`)
```

```sh
2 is greater than 3: false
```

### Méthodes de chaîne

Tout en JavaScript est un objet. Une chaîne est un type de donnée primitif, ce qui signifie que nous ne pouvons pas la modifier une fois qu'elle est créée. L'objet chaîne possède de nombreuses méthodes de chaîne. Il existe différentes méthodes de chaîne qui peuvent nous aider à travailler avec les chaînes.

1. *length* : La méthode *length* d'une chaîne renvoie le nombre de caractères dans une chaîne, y compris les espaces vides.

**Example:**

```js
let js = 'JavaScript'
console.log(js.length)         // 10
let firstName = 'Asabeneh'
console.log(firstName.length)  // 8
```

2. *Accessing characters in a string*: Nous pouvons accéder à chaque caractère d'une chaîne en utilisant son index. En programmation, le comptage commence à 0. Le premier index de la chaîne est zéro, et le dernier index est la longueur de la chaîne moins un.

  ![Accessing sting by index](../images/string_indexes.png)
  
Accédons à différents caractères de la chaîne 'JavaScript'.

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

3. *toUpperCase()*: Cette méthode change la chaîne de caractètre (string) en lettre majuscule.

```js
let string = 'JavaScript'

console.log(string.toUpperCase())     // JAVASCRIPT

let firstName = 'Asabeneh'

console.log(firstName.toUpperCase())  // ASABENEH

let country = 'Finland'

console.log(country.toUpperCase())    // FINLAND
```

4. *toLowerCase()*: Cette méthode change la chaîne de caractère (string) en lettre minuscule.

```js
let string = 'JavasCript'

console.log(string.toLowerCase())     // javascript

let firstName = 'Asabeneh'

console.log(firstName.toLowerCase())  // asabeneh

let country = 'Finland'

console.log(country.toLowerCase())   // finland
```

5. *substr()*: Elle prend deux arguments : l'index de départ et le nombre de caractères à extraire.

```js
let string = 'JavaScript'
console.log(string.substr(4,6))    // Script

let country = 'Finland'
console.log(country.substr(3, 4))   // land
```

6. *substring()*: Elle prend deux arguments : l'index de départ et l'index d'arrêt, mais elle n'inclut pas le caractère à l'index d'arrêt.

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

7. *split()*: La méthode split divise une chaîne à un endroit spécifié.

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

8. *trim()*: Supprime les espaces superflus au début ou à la fin d'une chaîne.

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

9. *includes()*: Elle prend un argument de sous-chaîne et vérifie si cet argument de sous-chaîne existe dans la chaîne. La méthode includes() renvoie un booléen. Si la sous-chaîne existe dans la chaîne, elle renvoie true ; sinon, elle renvoie false.

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

10. *replace()*: Elle prend en paramètre l'ancienne sous-chaîne et la nouvelle sous-chaîne.

```js
string.replace(oldsubstring, newsubstring)
```

```js
let string = '30 Days Of JavaScript'
console.log(string.replace('JavaScript', 'Python')) // 30 Days Of Python

let country = 'Finland'
console.log(country.replace('Fin', 'Noman'))       // Nomanland
```

11. *charAt()*: Prend un index et renvoie la valeur à cet index.

```js
string.charAt(index)
```

```js
let string = '30 Days Of JavaScript'
console.log(string.charAt(0))        // 3

let lastIndex = string.length - 1
console.log(string.charAt(lastIndex)) // t
```

12. *charCodeAt()*: Prend un index et renvoie le code de caractère (numéro ASCII) de la valeur à cet index.

```js
string.charCodeAt(index)
```

```js
let string = '30 Days Of JavaScript'
console.log(string.charCodeAt(3))        // D ASCII number is 68

let lastIndex = string.length - 1
console.log(string.charCodeAt(lastIndex)) // t ASCII is 116

```

13.  *indexOf()*: Prend une sous-chaîne et, si la sous-chaîne existe dans la chaîne, elle renvoie la première position de la sous-chaîne ; si elle n'existe pas, elle renvoie -1.

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

14.  *lastIndexOf()*: Prend une sous-chaîne et, si la sous-chaîne existe dans la chaîne, elle renvoie la dernière position de la sous-chaîne ; si elle n'existe pas, elle renvoie -1.


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

15. *concat()*: Elle prend plusieurs sous-chaînes et les joint.

```js
string.concat(substring, substring, substring)
```

```js
let string = '30'
console.log(string.concat("Days", "Of", "JavaScript")) // 30DaysOfJavaScript

let country = 'Fin'
console.log(country.concat("land")) // Finland
```

16. *startsWith*: Elle prend une sous-chaîne en argument et vérifie si la chaîne commence par cette sous-chaîne spécifiée. Elle renvoie un booléen (true ou false).

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

17. *endsWith*: Elle prend une sous-chaîne en argument et vérifie si la chaîne se termine par cette sous-chaîne spécifiée. Elle renvoie un booléen (true ou false).

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

18. *search*: Elle prend une sous-chaîne en argument et renvoie l'index de la première correspondance. La valeur de recherche peut être une chaîne ou un motif d'expression régulière.

```js
string.search(substring)
```

```js
let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.search('love'))          // 2
console.log(string.search(/javascript/gi))  // 7
```

19. *match*: Elle prend une sous-chaîne ou un motif d'expression régulière en argument et renvoie un tableau s'il y a une correspondance ; sinon, elle renvoie null. Voyons à quoi ressemble un motif d'expression régulière. Il commence par un signe / et se termine par un signe /.

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

Let us extract numbers from text using a regular expression. This is not the regular expression section, do not panic! We will cover regular expressions later on.

```js
let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/

// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere.

console.log(txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]
```

20. *repeat()*: Elle prend un nombre en argument et renvoie la version répétée de la chaîne.

```js
string.repeat(n)
```

```js
let string = 'love'
console.log(string.repeat(10)) // lovelovelovelovelovelovelovelovelovelove
```

## Vérification des types de données et conversion (ou casting)

### Vérification des types de données

Pour vérifier le type de données d'une certaine variable, nous utilisons la méthode _typeof_.

**Example:**

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

### Changement de type de données (Casting)

- Casting: : Conversion d'un type de données en un autre type de données.  Nous utilisons _parseInt()_, _parseFloat()_, _Number()_, _+ sign_, _str()_. Lorsque nous effectuons des opérations arithmétiques, les chaînes de caractères représentant des nombres doivent d'abord être converties en entier ou en flottant ; sinon, cela renvoie une erreur.

#### String to Int

Nous pouvons convertir une chaîne de caractères représentant un nombre en un nombre. Tout nombre à l'intérieur de guillemets est une chaîne de caractères représentant un nombre. Un exemple de chaîne de caractères représentant un nombre : '10', '5', etc.
Nous pouvons convertir une chaîne en nombre en utilisant les méthodes suivantes :

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

#### Chaîne à Flottant

Nous pouvons convertir une chaîne de caractères représentant un nombre flottant en un nombre flottant. Tout nombre flottant à l'intérieur de guillemets est une chaîne de caractères représentant un nombre flottant. Un exemple de chaîne de caractères représentant un nombre flottant : '9.81', '3.14', '1.44', etc.

Nous pouvons convertir une chaîne flottante en nombre en utilisant les méthodes suivantes :

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

#### Flottant à Entier

Nous pouvons convertir des nombres flottants en entiers.
Nous utilisons les méthodes suivantes pour convertir un flottant en entier :

- parseInt()
  
```js
let num = 9.81
let numInt = parseInt(num)

console.log(numInt) // 9
```

🌕 Vous êtes extraordinaire  ! Vous venez de terminer les défis du jour 2 et vous êtes deux étapes en avance sur votre chemin vers la réussite. Maintenant, faites quelques exercices pour votre cerveau et pour vos muscles.

## 💻 Day 2: Exercises

### Exercise: Niveau 1

1. Déclarez une variable nommée challenge et assignez-lui une valeur initiale **'30 Days Of JavaScript'**.
2. Affichez la chaîne dans la console du navigateur en utilisant __console.log()__.
3. Affichez la __longueur__ de la chaîne dans la console du navigateur en utilisant _console.log()_.
4. Changez tous les caractères de la chaîne en lettres majuscules en utilisant la méthode __toUpperCase()__.
5. Changez tous les caractères de la chaîne en lettres minuscules en utilisant la méthode __toLowerCase()__.
6. Coupez (slice) le premier mot de la chaîne en utilisant la méthode __substr()__ ou __substring()__.
7. Coupez la phrase *Days Of JavaScript* de *30 Days Of JavaScript*.
8. Vérifiez si la chaîne contient le mot __Script__ en utilisant la méthode __includes()__.
9. Divisez la __chaîne__ en un __tableau__ en utilisant la méthode __split()__.
10. Divisez la chaîne 30 Days Of JavaScript à l'espace en utilisant la méthode __split()__.
11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' __divisez__ la chaîne à la virgule et changez-la en un tableau (array).
12. Changez 30 Days Of JavaScript en 30 Days Of Python en utilisant la méthode __replace()__.
13. Quel est le caractère à l'index 15 dans la chaîne '30 Days Of JavaScript' ? Utilisez la méthode __charAt()__.
14. Quel est le code de caractère de J dans la chaîne '30 Days Of JavaScript' en utilisant __charCodeAt()__ ?
15. Utilisez __indexOf__ pour déterminer la position de la première occurrence de __a__ dans 30 Days Of JavaScript.
16. Utilisez __lastIndexOf__ pour déterminer la position de la dernière occurrence de __a__ dans 30 Days Of JavaScript.
17. Utilisez __indexOf__ pour trouver la position de la première occurrence du mot __because__ dans la phrase suivante : __'You cannot end a sentence with because because because is a conjunction'__.
18. Utilisez __lastIndexOf__ pour trouver la position de la dernière occurrence du mot __because__ dans la phrase suivante : __'You cannot end a sentence with because because because is a conjunction'__.
19. Utilisez __search__ pour trouver la position de la première occurrence du mot __because__ dans la phrase suivante : __'You cannot end a sentence with because because because is a conjunction'__.
20. Utilisez __trim()__ pour supprimer tout espace inutile au début et à la fin d'une chaîne. Par exemple, ' 30 Days Of JavaScript '.
21. Utilisez la méthode __startsWith()__ avec la chaîne *30 Days Of JavaScript* et faites en sorte que le résultat soit vrai.
22. Utilisez la méthode __endsWith()__ avec la chaîne *30 Days Of JavaScript* et faites en sorte que le résultat soit vrai.
23. Utilisez la méthode __match()__ pour trouver tous les __a__ dans 30 Days Of JavaScript.
24. Utilisez __concat()__ et fusionnez '30 Days of' et 'JavaScript' en une seule chaîne, '30 Days Of JavaScript'.
25. Utilisez la méthode __repeat()__ pour afficher 30 Days Of JavaScript 2 fois.

### Exercise: Niveau 2

1. Utilise console.log() pour afficher la phrase suivante: 

    ```sh
    The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
    ```

2. Utilise console.log() pour afficher la citation de Mère Teresa:

    ```sh
    "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
    ```

3. Vérifiez si typeof '10' est exactement égal à 10. Si ce n'est pas le cas, rendez-le exactement égal.
4. Vérifiez si parseFloat('9.8') est égal à 10. Si ce n'est pas le cas, rendez-le exactement égal à 10.
5. Vérifiez si 'on' est trouvé à la fois dans python et jargon.
6. _J'espère que ce cours n'est pas plein de jargon_. Vérifiez si _jargon_ est dans la phrase.
7. Générez un nombre aléatoire entre 0 et 100 inclusivement.
8. Générez un nombre aléatoire entre 50 et 100 inclusivement.
9. Générez un nombre aléatoire entre 0 et 255 inclusivement.
10. Accédez aux caractères de la chaîne 'JavaScript' en utilisant un nombre aléatoire.
11. Utilisez console.log() et des caractères d'échappement pour imprimer le motif suivant.

    ```js
    1 1 1 1 1
    2 1 2 4 8
    3 1 3 9 27
    4 1 4 16 64
    5 1 5 25 125
    ```

12.  Utilisez __substr__ afin de retirer __because because because__ de la phrase suivante:__'You cannot end a sentence with because because because is a conjunction'__

### Exercises: Level 3

1. 'L'amour est la meilleure chose dans ce monde. Certains ont trouvé leur amour et certains cherchent encore leur amour.' Comptez le nombre de fois que le mot __amour__ apparaît dans cette phrase.
2. Utilisez __match()__ pour compter le nombre de tous les __because__ dans la phrase suivante:__'You cannot end a sentence with because because because is a conjunction'__
3. Nettoyez le texte suivant et trouvez le mot le plus fréquent (indice : utilisez replace et des expressions régulières).

    ```js
        const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
    ```

4. Calculez le revenu annuel total de la personne en extrayant les chiffres du texte suivant : 'Il gagne 5000 euros de salaire par mois, 10000 euros de prime annuelle, 15000 euros de cours en ligne par mois.'

🎉 FÉLICITATIONS  ! 🎉

[<< Day 1](../readMe.md) | [Day 3 >>](../03_Day_Booleans_operators_date/03_booleans_operators_date.md)
