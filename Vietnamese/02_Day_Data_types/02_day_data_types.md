<div align="center">
  <h1> Học JavaScript trong 30 ngày: Kiểu dữ liệu</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/asabeneh/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/Asabeneh">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/asabeneh?style=social">
  </a>

  <sub>Tác giả:
  <a href="https://www.linkedin.com/in/asabeneh/" target="_blank">Asabeneh Yetayeh</a><br>
  <small> Tháng 1, 2020</small>
  </sub>
</div>
</div>

[<< Ngày 1](../README.md) | [Ngày 3 >>](../03_Day_Booleans_operators_date/03_booleans_operators_date.md)

![Ngày thứ hai học JavaScript](../../images/banners/day_1_2.png)

- [📔 Ngày 2](#-day-2)
	- [Kiểu dữ liệu](#data-types)
		- [Kiểu dữ liệu nguyên thuỷ](#primitive-data-types)
		- [Kiểu dữ liệu không nguyên thủy](#non-primitive-data-types)
	- [Số](#numbers)
		- [Khai báo kiểu dữ liệu Number](#declaring-number-data-types)
		- [Đối tượng math](#math-object)
			- [Tạo số ngẫu nhiên](#random-number-generator)
	- [Chuỗi](#strings)
		- [Nối chuỗi](#string-concatenation)
			- [Nối chuỗi bằng toán tử cộng](#concatenating-using-addition-operator)
			- [Chuỗi dài](#long-literal-strings)
			- [Chuỗi thoát trong Strings](#escape-sequences-in-strings)
			- [Template Literals (Template Strings)](#template-literals-template-strings)
		- [Phương thức chuỗi](#string-methods)
	- [Xác định kiểu dữ liệu và truyền](#checking-data-types-and-casting)
		- [Kiểm tra kiểu dữ liệu](#checking-data-types)
		- [Thay đổi kiểu dữ liệu (Truyền)](#changing-data-type-casting)
			- [String thành Int](#string-to-int)
			- [String thành Float](#string-to-float)
			- [Float thành Int](#float-to-int)
	- [💻 Day 2: Bài tập](#-day-2-exercises)
		- [Bài tập: Cấp độ 1](#exercise-level-1)
		- [Bài tập: Cấp độ 2](#exercise-level-2)
		- [Bài tập: Cấp độ 3](#exercises-level-3)

# 📔 Ngày 2

## Kiểu dữ liệu

Trong phần trước, chúng ta đã đề cập một chút về kiểu dữ liệu. Dữ liệu hoặc giá trị có kiểu dữ liệu. Kiểu dữ liệu mô tả các đặc điểm của dữ liệu. Các kiểu dữ liệu có thể được chia thành hai:

1. Kiểu dữ liệu nguyên thủy
2. Kiểu dữ liệu không nguyên thủy (Tham chiếu đối tượng)

### Kiểu dữ liệu nguyên thuỷ

Các kiểu dữ liệu nguyên thuỷ trong JavaScript bao gồm:

 1. Số - Số thực, số nguyên
 2. Chuỗi - Bất kỳ ký tự nào nằm trong dấu nháy đơn nháy kép, back-tick
 3. Boolean - `true` hoặc `false`
 4. Null - rỗng hoặc không có giá trị
 5. Undefined - khai báo không gán giá trị

Các kiểu dữ liệu không nguyên thủy trong JavaScript bao gồm:

1. Objects
2. Functions
3. Arrays

Bây giờ, chúng ta hãy xem các kiểu dữ liệu nguyên thủy và không nguyên thủy chính xác nghĩa là gì.
Kiểu dữ liệu *nguyên thủy* là kiểu dữ liệu bất biến (không thể sửa đổi). Khi một kiểu dữ liệu nguyên thủy được tạo, chúng ta không thể sửa đổi nó.

**Example:**

```js
let word = 'JavaScript'
```

Nếu chúng tôi cố gắng sửa đổi chuỗi được lưu trữ trong biến *word*, JavaScript sẽ phát sinh lỗi. Bất kỳ kiểu dữ liệu nào dưới dấu ngoặc kép, dấu ngoặc kép hoặc dấu ngoặc kép đều là kiểu dữ liệu chuỗi.

```js
word[0] = 'Y'
```

Biểu thức này không thay đổi chuỗi được lưu trữ trong biến *word*. Vì vậy, chúng ta có thể nói rằng các chuỗi không thể sửa đổi hay nói cách khác là bất biến.
Các kiểu dữ liệu ban đầu được so sánh bằng các giá trị của nó. Hãy để chúng tôi so sánh các giá trị dữ liệu khác nhau. Xem ví dụ bên dưới:

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

### Kiểu dữ liệu không nguyên thuỷ

Các kiểu dữ liệu *không nguyên thủy* có thể sửa đổi hoặc thay đổi được. Chúng ta có thể sửa đổi giá trị của các kiểu dữ liệu không nguyên thủy sau khi nó được tạo.
Hãy để chúng tôi xem bằng cách tạo một mảng. Mảng là một danh sách các giá trị dữ liệu trong một dấu ngoặc vuông. Mảng có thể chứa các kiểu dữ liệu giống nhau hoặc khác nhau. Giá trị mảng được tham chiếu bởi chỉ mục của chúng. Trong JavaScript, chỉ mục mảng bắt đầu từ 0. Tức là, phần tử đầu tiên của một mảng được tìm thấy ở chỉ số 0, phần tử thứ hai ở chỉ mục một và phần tử thứ ba ở chỉ mục hai, v.v.

```js
let nums = [1, 2, 3]
nums[0] = 10

console.log(nums)  // [10, 2, 3]
```

Như bạn có thể thấy, một mảng, một kiểu dữ liệu không phải nguyên thủy có thể thay đổi được. Các kiểu dữ liệu không nguyên thủy không thể được so sánh theo giá trị. Ngay cả khi hai kiểu dữ liệu không nguyên thủy có cùng thuộc tính và giá trị, chúng cũng không hoàn toàn bằng nhau.

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

Quy tắc ngón tay cái, chúng tôi không so sánh các kiểu dữ liệu không nguyên thủy. Không so sánh mảng, hàm hoặc đối tượng.
Các giá trị không nguyên thủy được gọi là kiểu tham chiếu, vì chúng đang được so sánh bằng tham chiếu thay vì giá trị. Hai đối tượng chỉ hoàn toàn bằng nhau nếu chúng tham chiếu đến cùng một đối tượng cơ bản.

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

Nếu bạn gặp khó khăn trong việc hiểu sự khác biệt giữa kiểu dữ liệu nguyên thủy và kiểu dữ liệu không nguyên thủy, bạn không phải là người duy nhất. Hãy bình tĩnh và chuyển sang phần tiếp theo và cố gắng quay lại sau một thời gian. Bây giờ chúng ta hãy bắt đầu các kiểu dữ liệu theo kiểu số.

## Số

Số là số nguyên và giá trị thập phân có thể thực hiện tất cả các phép toán số học.
Hãy xem một số ví dụ về Số.

### Khai báo kiểu dữ liệu số

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

### Đối tượng Math

Trong JavaScript, Đối tượng Math cung cấp rất nhiều phương thức để tương tác các con số.

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

#### Tạo số ngẫu nhiên

Đối tượng Math trong JavaScript có phương thức `random()` để tạo ra số ngẫu nhiên từ 0 đến 0,999999999...

```js
let randomNum = Math.random() // generates 0 to 0.999...
```

Bây giờ, chúng ta hãy xem cách sử dụng phương thức `random()` để tạo số ngẫu nhiên từ 0 đến 10:

```js
let randomNum = Math.random()         // generates 0 to 0.999
let numBtnZeroAndTen = randomNum * 11

console.log(numBtnZeroAndTen)         // this gives: min 0 and max 10.99

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
console.log(randomNumRoundToFloor)    // số từ 0 đến 10
```

## Chuỗi

Chuỗi là văn bản, nằm dưới dấu **nháy kép**, **nháy đơn**, **back-tick**. Để khai báo một chuỗi, chúng ta cần tên biến, toán tử gán, giá trị dưới dấu nháy đơn, dấu nháy kép hoặc dấu ngoặc kép.
Hãy xem một số ví dụ về chuỗi:

```js
let space = ' '           // chuỗi rỗng
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let quote = "The saying,'Seeing is Believing' is not correct in 2020."
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`
```

### Nối chuỗi

Nối hai hoặc nhiều chuỗi với nhau được gọi là nối chuỗi.
Sử dụng các chuỗi được khai báo trong phần Chuỗi trước:

```js
let fullName = firstName + space + lastName; // nối hai chuỗi với nhau.
console.log(fullName);
```

```sh
Asabeneh Yetayeh
```

Chúng ta có thể nối các chuỗi theo nhiều cách khác nhau.

#### Sử dụng toán tử cộng để nối chuỗi

Nối chuỗi bằng cách sử dụng toán tử bổ sung là một cách cũ. Cách nối này tẻ nhạt và dễ xảy ra lỗi. Thật tốt khi biết cách nối theo cách này, nhưng tôi thực sự khuyên bạn nên sử dụng chuỗi mẫu ES6 (sẽ giải thích ở phần sau).

```js
// Khai báo biến với các kiểu dữ liệu khác nhau
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

#### Chuỗi dài

Một chuỗi có thể là một ký tự hoặc đoạn hoặc một trang. Nếu độ dài chuỗi quá lớn, nó không vừa với một dòng. Chúng ta có thể sử dụng ký tự gạch chéo ngược (\\) ở cuối mỗi dòng để chỉ ra rằng chuỗi sẽ tiếp tục ở dòng tiếp theo.

**Ví dụ:**

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

#### Chuỗi thoát trong Strings

Trong JavaScript và các ngôn ngữ lập trình khác \ theo sau một số ký tự là một chuỗi thoát. Hãy xem các ký tự thoát phổ biến nhất:

- \n: new line
- \t: Tab, means 8 spaces
- \\\\: Back slash
- \\': Single quote (')
- \\": Double quote (")
  
```js
console.log('I hope everyone is enjoying the Học JavaScript trong 30 ngày challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // Để viết một dấu gạch chéo ngược
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')
```

Kết quả trong console:

```sh
I hope everyone is enjoying the Học JavaScript trong 30 ngày challenge.
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

Để tạo chuỗi mẫu, chúng tôi sử dụng hai dấu tích. Chúng ta có thể đưa dữ liệu vào dưới dạng các biểu thức bên trong một chuỗi mẫu. Để nhập dữ liệu, chúng tôi đặt biểu thức bằng một dấu ngoặc nhọn ({}) trước dấu $. Xem cú pháp bên dưới.

```js
//Syntax
`String literal text`
`String literal text ${expression}`
```

**Ví dụ: 1**

```js
console.log(`The sum of 2 and 3 is 5`)              // statically writing the data
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`) // injecting the data dynamically
```

**Ví dụ: 2**

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

Using a string template or string interpolation method, we can add expressions, which could be a value, or some operations (comparison, arithmetic operations, ternary operation).

```js
let a = 2
let b = 3
console.log(`${a} is greater than ${b}: ${a > b}`)
```

```sh
2 is greater than 3: false
```

### Phương thức String

Mọi thứ trong JavaScript đều là một đối tượng. Chuỗi là một kiểu dữ liệu nguyên thủy có nghĩa là chúng ta không thể sửa đổi nó sau khi nó được tạo. Đối tượng string có nhiều phương thức string. Có nhiều phương thức chuỗi khác nhau có thể giúp chúng tôi làm việc với chuỗi.

1. *length*: Phương thức `length` trả về độ dài của chuỗi bao gồm không gian trống.

**Example:**

```js
let js = 'JavaScript'
console.log(js.length)         // 10
let firstName = 'Asabeneh'
console.log(firstName.length)  // 8
```

2. *Truy cập các ký tự trong chuỗi*: Chúng ta có thể truy cập từng ký tự trong một chuỗi bằng cách sử dụng chỉ mục của nó. Trong lập trình, việc đếm bắt đầu từ 0. Chỉ số đầu tiên của chuỗi bằng 0 và chỉ số cuối cùng là độ dài của chuỗi trừ đi một.

  ![Truy cập string theo index](../../images/string_indexes.png)
  
phương thức này thay đổi chuỗi thành chữ thường..

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

3. *toUpperCase()*: thay đổi chuỗi thành chữ hoa.

```js
let string = 'JavaScript'

console.log(string.toUpperCase())     // JAVASCRIPT

let firstName = 'Asabeneh'

console.log(firstName.toUpperCase())  // ASABENEH

let country = 'Finland'

console.log(country.toUpperCase())    // FINLAND
```

4. *toLowerCase()*: thay đổi chuỗi thành chữ thường.

```js
let string = 'JavasCript'

console.log(string.toLowerCase())     // javascript

let firstName = 'Asabeneh'

console.log(firstName.toLowerCase())  // asabeneh

let country = 'Finland'

console.log(country.toLowerCase())   // finland
```

5. *substr()*: Cần có hai đối số, index bắt đầu và số ký tự để cắt.

```js
let string = 'JavaScript'
console.log(string.substr(4,6))    // Script

let country = 'Finland'
console.log(country.substr(3, 4))   // land
```

6. *substring()*: Nó có hai đối số, index bắt đầu và index dừng nhưng nó không bao gồm ký tự ở index dừng.

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

7. *split()*: Tách một chuỗi tại một vị trí được chỉ định.

```js
let string = 'Học JavaScript trong 30 ngày'

console.log(string.split())     // Changes to an array -> ["Học JavaScript trong 30 ngày"]
console.log(string.split(' '))  // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]

let firstName = 'Asabeneh'

console.log(firstName.split())    // Change to an array - > ["Asabeneh"]
console.log(firstName.split(''))  // Split to an array at each letter ->  ["A", "s", "a", "b", "e", "n", "e", "h"]

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'

console.log(countries.split(','))  // tách thành mảng tại dấu phẩy -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(', ')) //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]
```

8. *trim()*: Loại bỏ khoảng trắng ở đầu hoặc cuối chuỗi.

```js
let string = '   Học JavaScript trong 30 ngày   '

console.log(string)
console.log(string.trim(' '))

let firstName = ' Asabeneh '

console.log(firstName)
console.log(firstName.trim())  // vẫn xóa khoảng trắng ở đầu và cuối chuỗi
```

```sh
   Học JavaScript trong 30 ngày   
Học JavaScript trong 30 ngày
  Asabeneh 
Asabeneh
```

9. *includes()*: Nó nhận một đối số chuỗi con và nó kiểm tra xem đối số chuỗi con có tồn tại trong chuỗi hay không. `include()` trả về kiểu boolean. Nếu một chuỗi con tồn tại trong một chuỗi, nó trả về `true`, ngược lại là `false`.

```js
let string = 'Học JavaScript trong 30 ngày'

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

10. *replace()*: nhận như một tham số là chuỗi con cũ và một chuỗi con mới.

```js
string.replace(oldsubstring, newsubstring)
```

```js
let string = 'Học JavaScript trong 30 ngày'
console.log(string.replace('JavaScript', 'Python')) // 30 Days Of Python

let country = 'Finland'
console.log(country.replace('Fin', 'Noman'))       // Nomanland
```

11. *charAt()*: Lấy index và nó trả về giá trị tại index đó

```js
string.charAt(index)
```

```js
let string = 'Học JavaScript trong 30 ngày'
console.log(string.charAt(0))        // 3

let lastIndex = string.length - 1
console.log(string.charAt(lastIndex)) // t
```

12. *charCodeAt()*: Lấy index và nó trả về mã char (số ASCII) của giá trị tại index đó.

```js
string.charCodeAt(index)
```

```js
let string = 'Học JavaScript trong 30 ngày'
console.log(string.charCodeAt(3))        // D ASCII number is 68

let lastIndex = string.length - 1
console.log(string.charCodeAt(lastIndex)) // t ASCII is 116

```

13.  *indexOf()*: Lấy một chuỗi con và nếu chuỗi con tồn tại trong một chuỗi, nó trả về vị trí đầu tiên của chuỗi con nếu không tồn tại nó trả về `-1`.

```js
string.indexOf(substring)
```

```js
let string = 'Học JavaScript trong 30 ngày'

console.log(string.indexOf('D'))          // 3
console.log(string.indexOf('Days'))       // 3
console.log(string.indexOf('days'))       // -1
console.log(string.indexOf('a'))          // 4
console.log(string.indexOf('JavaScript')) // 11
console.log(string.indexOf('Script'))     //15
console.log(string.indexOf('script'))     // -1
```

14.  *lastIndexOf()*: Lấy một chuỗi con và nếu chuỗi con tồn tại trong một chuỗi, nó trả về vị trí cuối cùng của chuỗi con nếu nó không tồn tại, nó trả về `-1`.


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

15. *concat()*: nối các chuỗi được truyền vào nó

```js
string.concat(substring, substring, substring)
```

```js
let string = '30'
console.log(string.concat("Days", "Of", "JavaScript")) // 30DaysOfJavaScript

let country = 'Fin'
console.log(country.concat("land")) // Finland
```

16. *startsWith*: nó nhận một chuỗi con làm đối số và nó kiểm tra xem chuỗi có bắt đầu bằng chuỗi con được chỉ định hay không. Nó trả về kiểu boolean (`true` hoặc `false`).

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

17. *endsWith*: nó nhận một chuỗi con làm đối số và nó kiểm tra xem chuỗi có kết thúc bằng chuỗi con được chỉ định hay không. Nó trả về kiểu boolean (`true` hoặc `false`).

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

18. *search*: nó nhận một chuỗi con làm đối số và nó trả về index của kết quả khớp đầu tiên. Giá trị tìm kiếm có thể là một chuỗi hoặc một mẫu biểu thức chính quy.

```js
string.search(substring)
```

```js
let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.search('love'))          // 2
console.log(string.search(/javascript/gi))  // 7
```

19. *match*: nó nhận một chuỗi con hoặc một mẫu biểu thức chính quy làm đối số và nó trả về một mảng nếu có khớp nếu không thì nó trả về null. Hãy để chúng tôi xem mẫu biểu thức chính quy trông như thế nào. Nó bắt đầu bằng dấu / và kết thúc bằng dấu /.

```js
let string = 'love'
let patternOne = /love/     // with out any flag
let patternTwo = /love/gi   // g-means to search in the whole text, i - case insensitive
```

Cú pháp match

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

Chúng ta hãy tách các số từ văn bản bằng cách sử dụng một biểu thức chính quy. Đây không phải là phần biểu thức chính quy, đừng hoảng sợ! Chúng ta sẽ đề cập đến các cụm từ thông dụng ở phần sau.

```js
let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/

// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere.

console.log(txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]
```

20. *repeat()*: lặp lại 1 chuỗi với số lần được truyền vào nó.

```js
string.repeat(n)
```

```js
let string = 'love'
console.log(string.repeat(10)) // lovelovelovelovelovelovelovelovelovelove
```

## Kiểm tra kiểu dữ liệu và Ép kiểu

### Kiểm tra kiểu dữ liệu

Để kiểm tra kiểu dữ liệu của một biến nào đó, sử dụng từ khoá `typeof`.

**Ví dụ:**

```js
// Các kiểu dữ liệu trong Javascript
// Dưới đây là các kiểu khai báo dữ liệu khác nhau

let firstName = 'Asabeneh'      // string
let lastName = 'Yetayeh'        // string
let country = 'Finland'         // string
let city = 'Helsinki'           // string
let age = 250                   // number
let job                         // undefined, vì chưa gán giá trị

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

### Đổi kiểu dữ liệu (Ép kiểu)

- Kép kiểu: Chuyển đổi một kiểu dữ liệu này sang kiểu dữ liệu khác. Có các phương thức như `parseInt()`, `parseFloat()`, `Number()`, `dấu +`, `str()`.
Khi chúng ta thực hiện các phép toán số học, đầu tiên chuỗi số phải được chuyển đổi thành số nguyên hoặc float nếu không nó sẽ trả về lỗi.

#### String thành Int

Chúng ta có thể chuyển đổi chuỗi số thành một số. Bất kỳ số nào bên trong một dấu ngoặc kép là một chuỗi số. Ví dụ về chuỗi số: '10', '5', v.v.
Chúng ta có thể chuyển đổi chuỗi thành số bằng các phương pháp sau:

- parseInt()
- Number()
- Dấu cộng (+)

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

#### String thành Float

Chúng ta có thể chuyển đổi chuỗi số thực thành một số thực. Bất kỳ số thực nào bên trong dấu ngoặc kép đều là chuỗi số thực. Ví dụ về chuỗi số thực: '9.81', '3.14', '1.44', v.v.
Chúng ta có thể chuyển đổi chuỗi số thực thành số bằng các phương pháp sau:

- parseFloat()
- Number()
- Dấu cộng (+)

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

#### Float thành Int

Chúng ta có thể chuyển đổi số thực thành số nguyên.
Sử dụng phương thức `parseInt()` để chuyển đổi float thành int:
  
```js
let num = 9.81
let numInt = parseInt(num)

console.log(numInt) // 9
```

🌕  Bạn thật tuyệt vời. Bạn vừa hoàn thành thử thách ngày thứ 2 và bạn đang đi trước hai bước trên con đường vươn tới sự vĩ đại. Bây giờ hãy thực hiện một số bài tập cho não và cho cơ của bạn.

## 💻 Ngày 2: Bài tập

### Bài tập: Cấp độ 1

1. Khai báo một biến có tên là challenge và gán giá trị là **'Học JavaScript trong 30 ngày'**.
2. In chuỗi trên console của trình duyệt bằng __console.log()__.
3. In __độ dài__ của chuỗi trên console của trình duyệt bằng cách sử dụng __console.log()__.
4. Đổi thành chữ in hoa tất cả ký tự trong chuỗi bằng phương thức __toUpperCase()__.
5. Đổi thành chữ thường tất cả ký tự trong chuỗi bằng phương thức __toLowerCase()__.
6. Cắt (slice) từ đầu tiên của chuỗi bằng cách sử dụng phương thức __substr()__ hoặc __substring()__.
7. Cắt bỏ cụm từ *Học JavaScript* from *Học JavaScript trong 30 ngày*.
8. Sử dụng phương thức __includes()__ để kiểm tra xem __Script__ có trong chuỗi hay không.
9. Tách __string__ thành __array__ sử dụng phương thức __split()__
10. Tách chuỗi __Học JavaScript trong 30 ngày__ tại khoảng trắng bằng phương thức __split()__
11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' __tách__ chuỗi tại dấu phẩy và đổi thành một mảng.
12. Sử dụng __replace()__ để đổi __Học JavaScript trong 30 ngày__ thành __Học Python trong 30 ngày__.
13. Ký tự ở index 15 trong chuỗi 'Học JavaScript trong 30 ngày' là gì? Sử dụng phương thức __charAt()__.
14. Mã ký tự của J trong chuỗi 'Học JavaScript trong 30 ngày' bằng cách sử dụng là gì __charCodeAt()__
15. Sử dụng phương thức __indexOf__ để xác định vị trí của lần xuất hiện đầu tiên của từ __o__ trong Học JavaScript trong 30 ngày
16. Sử dụng phương thức __lastIndexOf__ để xác định vị trí của lần xuất hiện cuối cùng của từ __o__ trong __Học JavaScript trong 30 ngày__.
17. Sử dụng phương thức __indexOf__ để tìm vị trí xuất hiện đầu tiên của từ __vì__ trong câu sau:__'Bạn không thể kết thúc câu bằng bởi vì bởi vì bởi vì là một liên từ'__
18. Sử dụng phương thức __lastIndexOf__ để tìm vị trí xuất hiện cuối cùng của từ __vì__ trong câu sau:__'Bạn không thể kết thúc câu bằng bởi vì bởi vì bởi vì là một liên từ'__
19. Sử dụng phương thức __search__ để tìm vị trí xuất hiện đầu tiên của từ __vì__ trong câu sau:__'Bạn không thể kết thúc câu bằng bởi vì bởi vì bởi vì là một liên từ'__
20. Sử dụng phương thức __trim()__ để xóa mọi khoảng trắng ở đầu và cuối chuỗi. ví dụ ' Học JavaScript trong 30 ngày '.
21. Sử dụng phương thức __startsWith()__ với  chuỗi *Học JavaScript trong 30 ngày* và làm kết quả thành `true`.
22. Sử dụng phương thức __endsWith()__ với chuỗi *Học JavaScript trong 30 ngày* và làm cho kết quả thành `true`.
23. Sử dụng phương thức __match()__ để tìm tất cả chữ __o__ có trong __Học JavaScript trong 30 ngày__
24. Sử dụng __concat()__ để thêm 'Học JavaScript trong' và '30 ngày' vào 1 chuỗi, 'Học JavaScript trong 30 ngày'
25. Sử dụng phương thức __repeat()__ để in __Học JavaScript trong 30 ngày__ 2 lần.

### Bài tập: Cấp độ 2

1. `Sử dụng console.log()` in ra câu lệnh sau:

    ```sh
    The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
    ```

2. Sử dụng `console.log()` in ra câu trích dẫn sau đây của Mẹ Teresa:

    ```sh
    "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
    ```

3. Kiểm tra xem typeof '10' có bằng 10 hay không. Nếu không, hãy làm cho nó bằng nhau.
4. Kiểm tra xem `parseFloat('9, 8')` có bằng 10 hay không nếu không hãy làm cho nó bằng 10.
5. Kiểm tra xem có tìm thấy 'on' trong python và jargon không.
6. _Tôi hy vọng khóa học này không chứa đầy những biệt ngữ_. Kiểm tra nếu _biệt ngữ_ có trong câu.
7. Tạo một số ngẫu nhiên từ 0 đến 100.
8. Tạo một số ngẫu nhiên từ 50 đến 100.
9. Tạo một số ngẫu nhiên từ 0 đến 255.
10. Truy cập các ký tự chuỗi 'JavaScript' bằng cách sử dụng số ngẫu nhiên.
11. Sử dụng `console.log()` và các ký tự thoát để in mẫu sau.

    ```js
    1 1 1 1 1
    2 1 2 4 8
    3 1 3 9 27
    4 1 4 16 64
    5 1 5 25 125
    ```

12.  Sử dụng __substr__ để cắt ra cụm từ __bởi vì bởi vì__ từ câu sau:__'Bạn không thể kết thúc câu bằng bởi vì bởi vì bởi vì là một liên từ'__

### Bài tập: Cấp độ 3

1. 'Tình yêu là điều tuyệt vời nhất trên thế giới này. Một số đã tìm thấy tình yêu của mình và một số vẫn đang tìm kiếm tình yêu của mình.' Đếm số từ __tình yêu__ trong câu này.
2. Sử dụng __match()__ để đếm số lần từ __vì_ trong câu sau:__'Bạn không thể kết thúc câu bằng bởi vì bởi vì bởi vì là một liên từ'__
3. Clean the following text and find the most frequent word (hint, use replace and regular expressions).

    ```js
        const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
    ```

4. Tính tổng thu nhập hàng năm của người đó bằng cách trích các số từ văn bản sau. 'Anh ấy kiếm được 5000 euro từ lương mỗi tháng, 10000 euro tiền thưởng hàng năm, các khóa học trực tuyến 15000 euro mỗi tháng.'

🎉 CHÚC MỪNG ! 🎉

[<< Ngày 1](../README.md) | [Ngày 3 >>](../03_Day_Booleans_operators_date/03_booleans_operators_date.md)
