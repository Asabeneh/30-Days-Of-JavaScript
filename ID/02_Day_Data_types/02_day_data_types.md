<div align="center">
  <h1> 30 Days Of JavaScript: Data Types</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/asabeneh/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/Asabeneh">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/asabeneh?style=social">
  </a>

  <sub>Author:
  <a href="https://www.linkedin.com/in/asabeneh/" target="_blank">Asabeneh Yetayeh</a><br>
  <small> January, 2020</small>
  </sub>
</div>
</div>

[<< Day 1](../readMe.md) | [Day 3 >>](../03_Day_Booleans_operators_date/03_booleans_operators_date.md)

![Thirty Days Of JavaScript](../images/banners/day_1_2.png)

- [📔 Day 2](#-day-2)
  - [Data Types](#data-types)
    - [Primitive Data Types](#primitive-data-types)
    - [Non-Primitive Data Types](#non-primitive-data-types)
  - [Numbers](#numbers)
    - [Declaring Number Data Types](#declaring-number-data-types)
    - [Math Object](#math-object)
      - [Random Number Generator](#random-number-generator)
  - [Strings](#strings)
    - [String Concatenation](#string-concatenation)
      - [Concatenating Using Addition Operator](#concatenating-using-addition-operator)
      - [Long Literal Strings](#long-literal-strings)
      - [Escape Sequences in Strings](#escape-sequences-in-strings)
      - [Template Literals (Template Strings)](#template-literals-template-strings)
    - [String Methods](#string-methods)
  - [Checking Data Types and Casting](#checking-data-types-and-casting)
    - [Checking Data Types](#checking-data-types)
    - [Changing Data Type (Casting)](#changing-data-type-casting)
      - [String to Int](#string-to-int)
      - [String to Float](#string-to-float)
      - [Float to Int](#float-to-int)
  - [💻 Day 2: Exercises](#-day-2-exercises)
    - [Exercise: Level 1](#exercise-level-1)
    - [Exercise: Level 2](#exercise-level-2)
    - [Exercises: Level 3](#exercises-level-3)

# 📔 Day 2

## Data Types

Pada bagian sebelumnya, kami menyebutkan sedikit tentang tipe data. Data atau nilai memiliki tipe data. Tipe data menggambarkan karakteristik data. Tipe data dapat dibagi menjadi dua:

1. Tipe data Primitive
2. Tipe data non-Primitive (Referensi Objek)

### Primitive Data Types

Tipe data Primitive di JavaScript meliputi:

 1. Numbers - Integers, floats
 2. Strings - Semua data di bawah kutipan tunggal, kutipan ganda atau kutipan backtick
 3. Booleans - true or false value
 4. Null - nilai kosong atau tidak ada nilai
 5. Undefined - variabel yang dideklarasikan tanpa nilai

Tipe data non-Primitive di JavaScript meliputi:

1. Objects
2. Functions
3. Arrays

Sekarang, mari kita lihat apa sebenarnya arti tipe data Primitive dan non-Primitive.
*Primitive* tipe data tidak dapat diubah(non-modifiable) tipe data. Setelah tipe data Primitive dibuat, kami tidak dapat memodifikasinya.

**Contoh:**

```js
let word = 'JavaScript'
```

Jika kita mencoba memodifikasi string yang disimpan dalam variabel*word*, JavaScript seharusnya memunculkan kesalahan. Semua tipe data di bawah kutipan tunggal, kutipan ganda, atau kutipan backtick adalah tipe data string.

```js
word[0] = 'Y'
```

Ekspresi ini tidak mengubah string yang disimpan dalam variabel*word*. Jadi, kita dapat mengatakan bahwa string tidak dapat dimodifikasi atau dengan kata lain tidak dapat diubah.
Tipe data Primitive dibandingkan dengan nilainya. Mari kita bandingkan nilai data yang berbeda. Lihat contoh di bawah ini:

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

### Non-Primitive Data Types

*Non-primitive* tipe data dapat dimodifikasi atau diubah. Kita dapat mengubah nilai tipe data non-primitif setelah dibuat.
Mari kita lihat dengan membuat sebuah array. Array adalah daftar nilai data dalam tanda kurung siku. Array bisa berisi tipe data yang sama atau berbeda. Nilai array direferensikan oleh indeksnya. Dalam indeks array JavaScript dimulai dari nol. Yaitu, elemen pertama dari sebuah array ditemukan di indeks nol, elemen kedua di indeks satu, dan elemen ketiga di indeks dua, dll.

```js
let nums = [1, 2, 3]
nums[0] = 10

console.log(nums)  // [10, 2, 3]
```

Seperti yang Anda lihat, array, yang merupakan tipe data non-primitive bisa berubah. Tipe data non-primitive tidak dapat dibandingkan dengan nilai. Meskipun dua tipe data non-primitive memiliki properti dan nilai yang sama, keduanya tidak sama persis.

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

Rule of thumb, kami tidak membandingkan tipe data non-primitif. Jangan membandingkan array, fungsi, atau objek.
Nilai non-primitive  disebut sebagai tipe referensi, karena mereka dibandingkan dengan referensi, bukan nilai. Dua objek hanya benar-benar sama jika mengacu pada objek dasar yang sama.

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

Jika Anda kesulitan memahami perbedaan antara tipe data primitive dan tipe data non-primitive, Anda bukan satu-satunya. Tenang dan lanjutkan saja ke bagian berikutnya dan coba kembali setelah beberapa saat. Sekarang mari kita mulai tipe data berdasarkan tipe angka.

## Numbers

Bilangan adalah bilangan bulat dan nilai desimal yang dapat melakukan semua operasi aritmatika.
Mari kita lihat beberapa contoh Bilangan.

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

Dalam JavaScript, Objek Matematika menyediakan banyak metode untuk bekerja dengan angka.

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

// Trigonometry
Math.sin(0)
Math.sin(60)

Math.cos(0)
Math.cos(60)
```

#### Random Number Generator

Objek Matematika JavaScript memiliki generator nomor method random () yang menghasilkan angka dari 0 hingga 0.999999999 ...

```js
let randomNum = Math.random() // generates 0 to 0.999...
```

Sekarang, mari kita lihat bagaimana kita dapat menggunakan method random () untuk menghasilkan nomor acak antara 0 dan 10:

```js
let randomNum = Math.random()         // generates 0 to 0.999
let numBtnZeroAndTen = randomNum * 11

console.log(numBtnZeroAndTen)         // this gives: min 0 and max 10.99

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
console.log(randomNumRoundToFloor)    // this gives between 0 and 10
```

## Strings

String adalah teks, yang berada di bawah **_single_**, **_double_**, **_back-tick_** kutipan. Untuk mendeklarasikan string, kita membutuhkan nama variabel, operator penugasan, nilai di bawah kutipan tunggal, kutipan ganda, atau kutipan backtick.
Mari kita lihat beberapa contoh string:

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

### String Concatenation

Menghubungkan dua atau lebih string bersama-sama disebut penggabungan.
Menggunakan string yang dideklarasikan di bagian String sebelumnya:

```js
let fullName = firstName + space + lastName; // concatenation, merging two string together.
console.log(fullName);
```

```sh
Asabeneh Yetayeh
```

Kami dapat menggabungkan string dengan berbagai cara.

#### Concatenating Using Addition Operator

Menggabungkan menggunakan operator penjumlahan adalah cara lama. Cara penggabungan ini membosankan dan rawan kesalahan. Mengetahui cara menggabungkan dengan cara ini adalah hal yang baik, tetapi saya sangat menyarankan untuk menggunakan string template ES6 (dijelaskan nanti).

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

String bisa berupa satu karakter atau paragraf atau halaman. Jika panjang tali terlalu besar maka tidak muat dalam satu baris. Kita dapat menggunakan karakter garis miring terbalik (\\) di akhir setiap baris untuk menunjukkan bahwa string akan berlanjut di baris berikutnya.
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

#### Escape Sequences in Strings

Dalam JavaScript dan bahasa pemrograman lain \ diikuti oleh beberapa karakter merupakan urutan escape. Mari kita lihat karakter paling umum escape:

- \n: new line
- \t: Tab, means 8 spaces
- \\\\: Back slash
- \\': Single quote (')
- \\": Double quote (")
  
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

Untuk membuat string template, kami menggunakan dua tanda centang. Kita bisa memasukkan data sebagai ekspresi di dalam string template. Untuk memasukkan data, kami mengapit ekspresi dengan kurung kurawal ({}) diawali dengan tanda $. Lihat sintaks di bawah ini.

```js
//Syntax
`String literal text`
`String literal text ${expression}`
```

**Contoh: 1**

```js
console.log(`The sum of 2 and 3 is 5`)              // statically writing the data
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`) // injecting the data dynamically
```

**Contoh:2**

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

Dengan menggunakan template string atau metode interpolasi string, kita dapat menambahkan ekspresi, yang bisa berupa nilai, atau beberapa operasi (comparison, arithmetic operations, ternary operation).

```js
let a = 2
let b = 3
console.log(`${a} is greater than ${b}: ${a > b}`)
```

```sh
2 is greater than 3: false
```

### String Methods

Segala sesuatu di JavaScript adalah sebuah objek. Sebuah string adalah tipe data primitive yang berarti kita tidak dapat memodifikasinya setelah dibuat. Objek string memiliki banyak metode string. Ada berbagai metode string yang dapat membantu kita bekerja dengan string.

1. *length*: Metode string *length* mengembalikan jumlah karakter dalam string termasuk ruang kosong.

**Example:**

```js
let js = 'JavaScript'
console.log(js.length)         // 10
let firstName = 'Asabeneh'
console.log(firstName.length)  // 8
```

2. *Mengakses karakter dalam string*: Kita dapat mengakses setiap karakter dalam string menggunakan indeksnya. Dalam pemrograman, penghitungan dimulai dari 0. Indeks pertama dari string adalah nol, dan indeks terakhir adalah panjang dari string minus satu.

  ![Accessing sting by index](../images/string_indexes.png)
  
Mari kita akses karakter yang berbeda dalam string 'JavaScript'.

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

3. *toUpperCase()*: metode ini mengubah string menjadi huruf besar.

```js
let string = 'JavaScript'

console.log(string.toUpperCase())     // JAVASCRIPT

let firstName = 'Asabeneh'

console.log(firstName.toUpperCase())  // ASABENEH

let country = 'Finland'

console.log(country.toUpperCase())    // FINLAND
```

4. *toLowerCase()*: metode ini mengubah string menjadi huruf kecil.

```js
let string = 'JavasCript'

console.log(string.toLowerCase())     // javascript

let firstName = 'Asabeneh'

console.log(firstName.toLowerCase())  // asabeneh

let country = 'Finland'

console.log(country.toLowerCase())   // finland
```

5. *substr()*: Dibutuhkan dua argumen, indeks awal dan jumlah karakter untuk diiris/slice.

```js
let string = 'JavaScript'
console.log(string.substr(4,6))    // Script

let country = 'Finland'
console.log(country.substr(3, 4))   // land
```

6. *substring()*: Dibutuhkan dua argumen, indeks awal dan indeks berhenti tetapi tidak menyertakan karakter pada indeks berhenti.

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

7. *split()*: Metode pemisahan membagi string di tempat yang ditentukan.

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

8. *trim()*: Menghapus spasi di awal atau akhir string.

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

9. *includes()*: Dibutuhkan argumen substring dan memeriksa apakah argumen substring ada dalam string. *includes()* mengembalikan boolean. Jika substring ada dalam sebuah string, ia mengembalikan true, jika tidak ia mengembalikan false.

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

10. *replace()*: mengambil parameter substring lama dan substring baru.

```js
string.replace(oldsubstring, newsubstring)
```

```js
let string = '30 Days Of JavaScript'
console.log(string.replace('JavaScript', 'Python')) // 30 Days Of Python

let country = 'Finland'
console.log(country.replace('Fin', 'Noman'))       // Nomanland
```

11. *charAt()*: Mengambil indeks dan mengembalikan nilai pada indeks itu

```js
string.charAt(index)
```

```js
let string = '30 Days Of JavaScript'
console.log(string.charAt(0))        // 3

let lastIndex = string.length - 1
console.log(string.charAt(lastIndex)) // t
```

12. *charCodeAt()*: Mengambil indeks dan mengembalikan kode karakter (ASCII number) dari nilai pada indeks itu

```js
string.charCodeAt(index)
```

```js
let string = '30 Days Of JavaScript'
console.log(string.charCodeAt(3))        // D ASCII number is 68

let lastIndex = string.length - 1
console.log(string.charCodeAt(lastIndex)) // t ASCII is 116

```

13.  *indexOf()*: Mengambil substring dan jika substring ada dalam string, ia mengembalikan posisi pertama substring jika tidak ada ia mengembalikan -1

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

14.  *lastIndexOf()*: Mengambil substring dan jika substring ada dalam string, ia mengembalikan posisi terakhir substring jika tidak ada ia mengembalikan -1


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

15. *concat()*: dibutuhkan banyak substring dan menggabungkannya.

```js
string.concat(substring, substring, substring)
```

```js
let string = '30'
console.log(string.concat("Days", "Of", "JavaScript")) // 30DaysOfJavaScript

let country = 'Fin'
console.log(country.concat("land")) // Finland
```

16. *startsWith*: itu mengambil substring sebagai argumen dan memeriksa apakah string dimulai dengan substring yang ditentukan. Ia mengembalikan boolean (true atau false).

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

17. *endsWith*: itu mengambil substring sebagai argumen dan memeriksa apakah string diakhiri dengan substring yang ditentukan. Ia mengembalikan boolean (true atau false).

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

18. *search*: itu mengambil substring sebagai argumen dan mengembalikan indeks pertandingan pertama. Nilai pencarian dapat berupa string atau pola ekspresi reguler.

```js
string.search(substring)
```

```js
let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.search('love'))          // 2
console.log(string.search(/javascript/gi))  // 7
```

19. *match*: it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null. Let us see how a regular expression pattern looks like. It starts with / sign and ends with / sign.

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

Mari kita mengekstrak angka dari teks menggunakan ekspresi reguler. Ini bukan bagian ekspresi reguler, jangan panik! Kami akan membahas ekspresi reguler nanti.

```js
let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/

// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere.

console.log(txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]
```

20. *repeat()*: itu mengambil angka sebagai argumen dan mengembalikan versi berulang dari string.

```js
string.repeat(n)
```

```js
let string = 'love'
console.log(string.repeat(10)) // lovelovelovelovelovelovelovelovelovelove
```

## Checking Data Types and Casting

### Checking Data Types

Untuk memeriksa tipe data dari variabel tertentu kami menggunakan method _typeof_.

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

### Changing Data Type (Casting)

- Transmisi: Mengonversi satu jenis data ke jenis data lain. Kita gunakan _parseInt()_, _parseFloat()_, _Number()_, _+ sign_, _str()_
  Ketika kita melakukan operasi aritmatika, nomor string harus diubah terlebih dahulu menjadi integer atau float jika tidak mengembalikan kesalahan.

#### String to Int

Kita dapat mengubah nomor string menjadi angka. Nomor apa pun di dalam kutipan adalah nomor string. Contoh nomor string: '10', '5', dll.
Kita dapat mengonversi string menjadi angka menggunakan metode berikut:

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

#### String to Float

Kita dapat mengubah nomor float string menjadi nomor float. Setiap nomor float di dalam kutipan adalah nomor float string. Contoh nomor float string: '9.81', '3.14', '1.44', dll.
Kita dapat mengonversi string float menjadi number menggunakan metode berikut:

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

console.log(numInt) // 9.81
```

#### Float to Int

Kita dapat mengonversi bilangan float menjadi bilangan bulat.
Kami menggunakan metode berikut untuk mengubah float menjadi int:

- parseInt()
  
```js
let num = 9.81
let numInt = parseInt(num)

console.log(numInt) // 9
```

🌕  Kamu Menakjubkan. Anda baru saja menyelesaikan tantangan hari ke-2 dan Anda berada dua langkah di depan dalam perjalanan menuju kehebatan. Sekarang lakukan beberapa latihan untuk otak dan otot Anda.  

## 💻 Day 2: Exercises

### Exercise: Level 1

1. Deklarasikan variabel bernama challenge dan tetapkan ke nilai awal **'30 Days Of JavaScript'**.
2. Cetak string di konsol browser menggunakan __console.log ()__
3. Cetak __length__ string pada konsol browser menggunakan _console.log ()_
4. Ubah semua karakter string menjadi huruf kapital menggunakan metode __toUpperCase ()__
5. Ubah semua karakter string menjadi huruf kecil menggunakan metode __toLowerCase ()__
6. Potong (potong) kata pertama dari string menggunakan metode __substr ()__ atau __substring ()__
7. Singkirkan frasa *Days Of JavaScript * dari * 30 Days Of JavaScript*.
8. Periksa apakah string berisi kata __Script__ menggunakan metode __includes ()__
9. Pisahkan __string__ menjadi __array__ menggunakan metode __split ()__
10. Pisahkan string 30 Days Of JavaScript pada ruang tersebut menggunakan metode __split ()__
11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' __split__ string di koma dan mengubahnya menjadi array.
12. Ubah 30 Hari JavaScript menjadi 30 Hari Python menggunakan metode __replace ()__.
13. Apa karakter pada indeks 15 dalam string '30 Days Of JavaScript '? Gunakan metode __charAt ()__.
14. Apa kode karakter J dalam string '30 Days Of JavaScript 'menggunakan __charCodeAt ()__
15. Gunakan __indexOf__ untuk menentukan posisi kemunculan pertama __a__ dalam 30 Hari JavaScript
16. Gunakan __lastIndexOf__ untuk menentukan posisi kemunculan terakhir __a__ dalam 30 Hari JavaScript.
17. Gunakan __indexOf__ untuk mencari posisi kemunculan pertama kata __because__ dalam kalimat berikut: __'Anda tidak dapat mengakhiri kalimat dengan karena karena merupakan konjungsi'__
18. Gunakan __lastIndexOf__ untuk mencari posisi kemunculan terakhir kata __because__ dalam kalimat berikut: __'Anda tidak dapat mengakhiri kalimat dengan karena karena merupakan konjungsi'__
19. Gunakan __search__ untuk menemukan posisi kemunculan pertama kata __because__ dalam kalimat berikut: __'Anda tidak dapat mengakhiri kalimat dengan karena karena merupakan konjungsi'__
20. Gunakan __trim ()__ untuk menghapus spasi kosong di awal dan akhir string. Misalnya '30 Days Of JavaScript'.
21. Gunakan metode __startsWith ()__ dengan string * 30 Days Of JavaScript * dan buat hasilnya benar
22. Gunakan metode __endsWith ()__ dengan string * 30 Days Of JavaScript * dan buat hasilnya benar
23. Gunakan metode __match ()__ untuk menemukan semua __a__ dalam 30 Hari JavaScript
24. Gunakan __concat ()__ dan gabungkan '30 Days of 'dan' JavaScript 'ke satu string, '30 Days Of JavaScript'
25. Gunakan metode __repeat ()__ untuk mencetak 30 Days Of JavaScript 2 kali

### Exercise: Level 2

1. Menggunakan console.log () mencetak pernyataan berikut:

    ```sh
    The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
    ```

2. Menggunakan console.log () mencetak kutipan berikut oleh Bunda Teresa:

    ```sh
    "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
    ```

3. Periksa apakah tipe '10' sama persis dengan 10. Jika tidak, buatlah sama persis.
4. Periksa apakah parseFloat ('9.8') sama dengan 10 jika tidak membuatnya sama persis dengan 10.
5. Periksa apakah 'on' ditemukan di python dan jargon
6. _I hope this course is not full of jargon_. Periksa apakah _jargon_ ada di dalam kalimat.
7. Hasilkan nomor acak antara 0 dan 100 secara inklusif.
8. Hasilkan nomor acak antara 50 dan 100 secara inklusif.
9. Hasilkan nomor acak antara 0 dan 255 secara inklusif.
10. Akses karakter string 'JavaScript' menggunakan nomor acak.
11. Gunakan console.log () dan karakter escape untuk mencetak pola berikut.

    ```js
    1 1 1 1 1
    2 1 2 4 8
    3 1 3 9 27
    4 1 4 16 64
    5 1 5 25 125
    ```

12.  Menggunakan __substr__ untuk memotong frasa __because because because__ dari kalimat berikut:__'You cannot end a sentence with because because because is a conjunction'__

### Exercises: Level 3

1. 'Cinta adalah hal terbaik di dunia ini. Beberapa menemukan cinta mereka dan beberapa masih mencari cinta mereka. ' Hitung jumlah kata __love__ in this sentence.
2. Menggunakan __match()__ untuk menghitung jumlah semuanya __because__ dalam kalimat berikut:__'You cannot end a sentence with because because because is a conjunction'__
3. Bersihkan teks berikut dan temukan kata yang paling sering (petunjuk, gunakan ganti dan ekspresi reguler).

    ```js
        const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
    ```

4. Hitung total pendapatan tahunan orang tersebut dengan mengekstrak angka-angka dari teks berikut. Dia mendapatkan 5.000 euro dari gaji per bulan, bonus tahunan 10.000 euro, kursus online 15.000 euro per bulan.'

🎉 CONGRATULATIONS ! 🎉

[<< Day 1](../readMe.md) | [Day 3 >>](../03_Day_Booleans_operators_date/03_booleans_operators_date.md)
