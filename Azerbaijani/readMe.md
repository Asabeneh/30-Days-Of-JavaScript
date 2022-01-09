# 30 Günlük JavaScript dərsləri 

| # Gün |                                                                       Mövzular                                                                      |
| ----- | :-------------------------------------------------------------------------------------------------------------------------------------------------: |
| 01    |                                                             [Giriş](./readMe.md)                                                             |
| 02    |                                               [Data Types](./02_Day_Data_types/02_day_data_types.md)                                                |
| 03    |                             [Booleans, Operators, Date](./03_Day_Booleans_operators_date/03_booleans_operators_date.md)                             |
| 04    |                                            [Conditionals](./04_Day_Conditionals/04_day_conditionals.md)                                             |
| 05    |                                                     [Arrays](./05_Day_Arrays/05_day_arrays.md)                                                      |
| 06    |                                                       [Loops](./06_Day_Loops/06_day_loops.md)                                                       |
| 07    |                                                 [Functions](./07_Day_Functions/07_day_functions.md)                                                 |
| 08    |                                                    [Objects](./08_Day_Objects/08_day_objects.md)                                                    |
| 09    |                             [Higher Order Functions](./09_Day_Higher_order_functions/09_day_higher_order_functions.md)                              |
| 10    |                                           [Sets and Maps](./10_Day_Sets_and_Maps/10_day_Sets_and_Maps.md)                                           |
| 11    |                      [Destructuring and Spreading](./11_Day_Destructuring_and_spreading/11_day_destructuring_and_spreading.md)                      |
| 12    |                                  [Regular Expressions](./12_Day_Regular_expressions/12_day_regular_expressions.md)                                  |
| 13    |                             [Console Object Methods](./13_Day_Console_object_methods/13_day_console_object_methods.md)                              |
| 14    |                                         [Error Handling](./14_Day_Error_handling/14_day_error_handling.md)                                          |
| 15    |                                                    [Classes](./15_Day_Classes/15_day_classes.md)                                                    |
| 16    |                                                        [JSON](./16_Day_JSON/16_day_json.md)                                                         |
| 17    |                                            [Web Storages](./17_Day_Web_storages/17_day_web_storages.md)                                             |
| 18    |                                                  [Promises](./18_Day_Promises/18_day_promises.md)                                                   |
| 19    |                                                   [Closure](./19_Day_Closures/19_day_closures.md)                                                   |
| 20    |                                  [Writing Clean Code](./20_Day_Writing_clean_codes/20_day_writing_clean_codes.md)                                   |
| 21    |                                                          [DOM](./21_Day_DOM/21_day_dom.md)                                                          |
| 22    |                            [Manipulating DOM Object](./22_Day_Manipulating_DOM_object/22_day_manipulating_DOM_object.md)                            |
| 23    |                                        [Event Listeners](./23_Day_Event_listeners/23_day_event_listeners.md)                                        |
| 24    |                             [Mini Project: Solar System](./24_Day_Project_solar_system/24_day_project_solar_system.md)                              |
| 25    | [Mini Project: World Countries Data Visulalization 1](./25_Day_World_countries_data_visualization_1/25_day_world_countries_data_visualization_1.md) |
| 26    | [Mini Project: World Countries Data Visulalization 2](./26_Day_World_countries_data_visualization_2/26_day_world_countries_data_visualization_2.md) |
| 27    |                             [Mini Project: Portfolio](./27_Day_Mini_project_portfolio/27_day_mini_project_portfolio.md)                             |
| 28    |                          [Mini Project: Leaderboard](./28_Day_Mini_project_leaderboard/28_day_mini_project_leaderboard.md)                          |
| 29    |             [Mini Project:Animating characters](./29_Day_Mini_project_animating_characters/29_day_mini_project_animating_characters.md)             |
| 30    |                                     [Final Projects](./30_Day_Mini_project_final/30_day_mini_project_final.md)                                      |

🧡🧡🧡 Xoş kodlamalar 🧡🧡🧡

<div>
<small><strong>Müəllifi</strong> dəstəkləməklə daha çox təhsil materialı yaratmasına kömək ola bilərsiniz</small> <br />  
<a href = "https://www.paypal.me/asabeneh"><img src='../images/paypal_lg.png' alt='Paypal Logo' style="width:10%"/></a>
</div>

<div align="center">
  <h1> 30 Günlük JavaScript: Giriş</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/asabeneh/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/Asabeneh">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/asabeneh?style=social">
  </a>

<sub>Author:
<a href="https://www.linkedin.com/in/asabeneh/" target="_blank">Asabeneh Yetayeh</a><br>
<small> Yanvar, 2020</small>
</sub>

  <div>

🇬🇧 [English](./readMe.md)
🇪🇸 [Spanish](./Spanish/readme.md)
🇷🇺 [Russian](./RU/README.md)
Az [Azerbaijan](./Azerbaijani/readMe.md)

  </div>

</div>
</div>

[Gün 2 >>](./02_Day_Data_types/02_day_data_types.md)

![30 Günlük JavaScript dərsləri](../images/day_1_1.png)

- [30 Günlük JavaScript dərsləri](#30-days-of-javascript)
- [📔 Gün 1](#-day-1)
  - [Giriş](#introduction)
  - [İlkin tələblər](#requirements)
  - [Hazırlıq](#setup)
    - [Node.js yüklə](#install-nodejs)
    - [Brauzer](#browser)
      - [Google Chrome yüklənməsi](#installing-google-chrome)
      - [Google Chrome brauzer konsolu açmaq](#opening-google-chrome-console)
      - [Brauzer konsolunda kod yazılması](#writing-code-on-browser-console)
        - [Console.log](#consolelog)
        - [Console.log - birneçə arqument ilə](#consolelog-with-multiple-arguments)
        - [Şərhlər](#comments)
        - [Sintaksis](#syntax)
      - [Riyazi əməliyyatlar](#arithmetics)
    - [Kod editoru](#code-editor)
      - [Visual Studio Code'un yüklənməsi](#installing-visual-studio-code)
      - [Visual Studio Code istifadəsi](#how-to-use-visual-studio-code)
  - [Veb səhifəyə JavaScript əlavə edilməsi](#adding-javascript-to-a-web-page)
    - [Sətirdaxili (inline) skript](#inline-script)
    - [Daxili (internal) skript](#internal-script)
    - [Xarici skript](#external-script)
    - [Birneçə xarici skript](#multiple-external-scripts)
  - [Verilənlərin tiplərinə giriş](#introduction-to-data-types)
    - [Ədəd tipləri](#numbers)
    - [Sətir tipləri](#strings)
    - [Məntiqi tiplər](#booleans)
    - [Undefined](#undefined)
    - [Null](#null)
  - [Verilənlərin tiplərinin yoxlanılması](#checking-data-types)
  - [Şərhlər (daha artıq)](#comments-again)
  - [Dəyişənlər](#variables)
- [💻 Gün 1: Tapşırıqlar](#-day-1-exercises)

# 📔 Gün 1

## Giriş

30 günlük JavaScript proqramlaşdırma müsabiqəsində iştirak etmək qərarına gəldiyiniz üçün sizi **təbrik edirik**. Bu çağırışda siz JavaScript proqramçısı olmaq üçün lazım olan hər şeyi və ümumiyyətlə, proqramlaşdırmanın bütün konsepsiyasını öyrənəcəksiniz. Müsabiqənin sonunda siz 30DaysOfJavaScript proqramlaşdırma testini tamamlama sertifikatı alacaqsınız. Yardıma ehtiyacınız olarsa və ya başqalarına kömək etmək istəyirsinizsə, rəsmi [telegram qrupuna](https://t.me/ThirtyDaysOfJavaScript) qoşula bilərsiniz

**30GünlükJavaScript** çağırışı həm yeni başlayanlar, həm də təcrübəli JavaScript proqramçıları üçün bələdçidir. JavaScript-ə xoş gəlmisiniz. JavaScript internetin dilidir. Mən JavaScript istifadə etməkdən və öyrətməkdən həzz alıram və ümid edirəm ki, siz də bunu edəcəksiniz.

Bu addım-addım JavaScript dərslərində siz bəşəriyyət tarixində ən populyar proqramlaşdırma dili olan JavaScript-i öyrənəcəksiniz.JavaScript **_veb-saytlara interaktivlik əlavə etmək, mobil proqramlar, masaüstü proqramlar, oyunlar hazırlamaq_** üçün istifadə olunur və bu gün JavaScript hətta **_maşın öyrənməsi_** və **_AI (süni intellekt)_** üçün istifadə edilə bilər.
**_JavaScript (JS)_** son illərdə populyarlığı artıb və son altı ildir ki, ardıcıl olaraq ən məhşur və ən çox istifadə olunan proqramlaşdırma dilidir
Mənbə: Github.

## Tələblər

İlkin olaraq heç bir proqramlaşdırma biliyi tələb olunmur. Yalnız ehtiyacınız var:

1. Motivasiya
2. Kompüter
3. Internet
4. Brauzer
5. Kod yazmaq üçün editor

## Hazırlıq

İnanıram ki, sizdə proqramçı olmaq üçün kompüter, internet, motivasiya və güclü istək var. Bunlara sahibsinizsə, başlamaq üçün hər şeyiniz var.

### Node.js-in yüklənilməsi

İndi olmasa belə daha sonrakı addımlar üçün Node-a ehtiyaciniz var. Yükləmək üçün [buraya](https://nodejs.org/en/) istinad edin.

![Node Yüklənməsi](images/download_node.png)

Yükləndikdən sonra quraşdırılma üçün

![Node quraşdırılması](images/install_node.png)

Əməliyyat sistemi terminalımızı açaraq maşınımızda node quraşdırılıb-quraşdırılmadığını yoxlaya bilərik.

```sh
asabeneh $ node -v
v12.14.0
```

Bu dərsliyi hazırlayarkən mən Node versiyası 12.14.0-dan istifadə edirdim, lakin indi yükləmək üçün Node.js-in tövsiyə olunan versiyası v14.17.6-dır.

### Brauzer

Hazırda bir çox brauzer mövcud olsa da müəllif Google Chrome istifadəsini tövsiyə edir.

#### Google Chrome yükləmək

Google Chrome sizdə mövcud deyilsə bu [linkə](https://www.google.com/chrome/) istinad edin. Biz brauzer konsolunda kiçik JavaScript kodu yaza bilərik, lakin ciddi proqramların hazırlanması üçün brauzer konsolundan istifadə etmirik.

![Google Chrome](../images/google_chrome.png)

#### Google Chrome konsola giriş

Siz Google Chrome konsolunu brauzerin yuxarı sağ küncündə üç nöqtəyə klikləməklə, _Əlavə alətlər -> Tərtibatçı alətləri_ seçməklə və ya klaviatura qısa yolundan istifadə etməklə aça bilərsiniz. Mən qısayollardan istifadə etməyi üstün tuturam.

![Brauzerə giriş](../images/opening_developer_tool.png)

Klaviatura qısayolu ilə brauzer açmaq üçün

```sh
Mac
Command+Option+J

Windows/Linux:
Ctl+Shift+J
```

![Konsolu açmaq](../images/opening_chrome_console_shortcut.png)

Google Chrome konsolunu açdıqdan sonra işarələnmiş düymələri araşdırmağa çalışın. Biz vaxtımızın çox hissəsini Konsolda keçirəcəyik. Konsol JavaScript kodunuzun mövcud olduğu yerdir. Google Console V8 mühərriki JavaScript kodunuzu maşın koduna tərcümə edir.
Gəlin Google Chrome konsolunda JavaScript kodu yazaq:

![Konsolda kodun yazılması](../images/js_code_on_chrome_console.png)

#### Brauzer konsolunda kodun yazılması

Biz istənilən JavaScript kodunu Google konsolunda və ya istənilən brauzer konsolunda yaza bilərik. Bununla belə, bu problem üçün biz yalnız Google Chrome konsoluna diqqət yetiririk. Konsolu aşağıdakılardan istifadə edərək açın:

```sh
Mac
Command+Option+I

Windows:
Ctl+Shift+I
```

##### Console.log

İlk JavaScript kodumuzu yazmaq üçün biz daxili funksiyadan istifadə etdik **console.log()**. Biz arqumenti giriş məlumatları kimi ötürdük və funksiya çıxışı göstərir. Biz console.log() funksiyasında giriş məlumatı və ya arqument kimi "Salam, Dünya"nı ötürdük.

```js
console.log('Salam, Dünya!')
```

##### Console.log - birneçə arqument ilə

**console.log()** funksiyasi vergüllə ayrılmış istənilən sayda parametri qəbul edə bilər. 
Sintaksis: **console.log(param1, param2, param3)**

![console log - birneçə arqument ilə](../images/console_log_multipl_arguments.png)

```js
console.log('Hello', 'World', '!')
console.log('HAPPY', 'NEW', 'YEAR', 2020)
console.log('Welcome', 'to', 30, 'Days', 'Of', 'JavaScript')
```

Yuxarıdakı kod parçasından göründüyü kimi, _console.log()_ çoxlu arqument qəbul edə bilər.

Təbrik edirik! Siz ilk JavaScript kodunuzu _console.log()_ istifadə edərək yazdınız.

##### Şərhlər

Kodumuza şərhlər əlavə edirik. Kodu daha oxunaqlı etmək və kodumuzda qeydlər daxil etmək üçün şərhlər çox vacibdir. JavaScript kodumuzun şərh hissəsini qeydə almır və maşın dilinə tərcümə etmir. JavaScript-də // ilə başlayan hər hansı mətn sətiri şərhdir və həmçinin buna /\* \*/ kimi əlavə edilən hər şey də şərhdir.

**Nümunə: Tək sətirli şərhlər**

// Bu bir şərhdir  
 // Bu da bir şərhdir
 // Bu da həmçinin

**Nümunə: Çoxsətirli şərhlər**

/*
Çoxsətirli şərhlər  
 Çoxsətirli şərhlər bir neçə sətiri ehtiva edə bilir  
 JavaScript web-in dilidir  
 */

##### Sintaksis

Proqramlaşdırma dilləri insan dillərinə bənzəyir. İngilis və ya bir çox başqa dil mənalı mesajı çatdırmaq üçün sözlər, ifadələr, cümlələr, mürəkkəb cümlələr və sair istifadə edir. Sintaksisin ingiliscə mənası _dildə yaxşı formalaşmış cümlələr yaratmaq üçün söz və ifadələrin düzülüşüdür_. Sintaksisin texniki tərifi kompüter dilində ifadələrin strukturudur. Proqramlaşdırma dillərində sintaksis var. JavaScript proqramlaşdırma dilidir və digər proqramlaşdırma dilləri kimi onun da öz sintaksisi var. JavaScript-in başa düşdüyü sintaksisi yazmasaq, o, müxtəlif növ xətaları bizə qaytaracaq. Müxtəlif növ JavaScript xətalarını daha sonra araşdıracağıq. Hələlik gəlin sintaksis səhvlərinə baxaq.

![Errorlar](../images/raising_syntax_error.png)

Mən qəsdən səhv etdim. Nəticədə, konsol sintaksis səhvlərini qaytarır. Əslində, sintaksis çox informativdir. Hansı növ səhvə yol verildiyini bildirir. Səhv rəyi təlimatını oxumaqla biz sintaksisi düzəldə və problemi həll edə bilərik. Proqramdakı xətaların müəyyən edilməsi və aradan qaldırılması prosesi "debugging" adlanır. Gəlin səhvləri düzəldək:
```js
console.log('Hello, World!')
console.log('Hello, World!')
```

So far, we saw how to display text using the _console.log()_. If we are printing text or string using _console.log()_, the text has to be inside the single quotes, double quotes, or a backtick quotes.
**Example:**

```js
console.log('Hello, World!')
console.log("Hello, World!")
console.log(`Hello, World!`)
```

#### Arithmetics

Now, let us practice more writing JavaScript codes using _console.log()_ on google chrome console for number data types.
In addition to the text, we can also do mathematical calculations using JavaScript. Let us do the following simple calculations.
The console can directly take arguments without the **_console.log()_** function. However, it is included in this introduction because most of this challenge would be taking place in a text editor where the usage of the function would be mandatory. You can play around directly with instructions on the console.

![Arithmetic](images/arithmetic.png)

```js
console.log(2 + 3) // Addition
console.log(3 - 2) // Subtraction
console.log(2 * 3) // Multiplication
console.log(3 / 2) // Division
console.log(3 % 2) // Modulus - finding remainder
console.log(3 ** 2) // Exponentiation 3 ** 2 == 3 * 3
```

### Code Editor

We can write our codes on the browser console, but it won't do for bigger projects. In a real working environment, developers use different code editors to write their codes. In this 30 days JavaScript challenge, we will be using Visual Studio Code.

#### Installing Visual Studio Code

Visual studio code is a very popular open-source text editor. I would recommend to [download Visual Studio Code](https://code.visualstudio.com/), but if you are in favor of other editors, feel free to follow with what you have.

![Vscode](images/vscode.png)

If you installed Visual Studio Code, let us start using it.

#### How to Use Visual Studio Code

Open the Visual Studio Code by double-clicking its icon. When you open it, you will get this kind of interface. Try to interact with the labeled icons.

![Vscode ui](./images/vscode_ui.png)

![Vscode add project](./images/adding_project_to_vscode.png)

![Vscode open project](./images/opening_project_on_vscode.png)

![script file](images/scripts_on_vscode.png)

![Installing Live Server](images/vsc_live_server.png)

![running script](./images/running_script.png)

![coding running](./images/launched_on_new_tab.png)

## Adding JavaScript to a Web Page

JavaScript can be added to a web page in three different ways:

- **_Inline script_**
- **_Internal script_**
- **_External script_**
- **_Multiple External scripts_**

The following sections show different ways of adding JavaScript code to your web page.

### Inline Script

Create a project folder on your desktop or in any location, name it 30DaysOfJS and create an **_index.html_** file in the project folder. Then paste the following code and open it in a browser, for example [Chrome](https://www.google.com/chrome/).

```html
<!DOCTYPE html>
<html>
  <head>
    <title>30DaysOfScript:Inline Script</title>
  </head>
  <body>
    <button onclick="alert('Welcome to 30DaysOfJavaScript!')">Click Me</button>
  </body>
</html>
```

Now, you just wrote your first inline script. We can create a pop up alert message using the _alert()_ built-in function.

### Internal Script

The internal script can be written in the _head_ or the _body_, but it is preferred to put it on the body of the HTML document.
First, let us write on the head part of the page.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>30DaysOfScript:Internal Script</title>
    <script>
      console.log('Welcome to 30DaysOfJavaScript')
    </script>
  </head>
  <body></body>
</html>
```

This is how we write an internal script most of the time. Writing the JavaScript code in the body section is the most preferred option. Open the browser console to see the output from the console.log()

```html
<!DOCTYPE html>
<html>
  <head>
    <title>30DaysOfScript:Internal Script</title>
  </head>
  <body>
    <button onclick="alert('Welcome to 30DaysOfJavaScript!');">Click Me</button>
    <script>
      console.log('Welcome to 30DaysOfJavaScript')
    </script>
  </body>
</html>
```

Open the browser console to see the output from the console.log()

![js code from vscode](./images/js_code_vscode.png)

### External Script

Similar to the internal script, the external script link can be on the header or body, but it is preferred to put it in the body.
First, we should create an external JavaScript file with .js extension. All files ending with .js extension are JavaScript files. Create a file named introduction.js inside your project directory and write the following code and link this .js file at the bottom of the body.

```js
console.log('Welcome to 30DaysOfJavaScript')
```

External scripts in the _head_:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>30DaysOfJavaScript:External script</title>
    <script src="introduction.js"></script>
  </head>
  <body></body>
</html>
```

External scripts in the _body_:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>30DaysOfJavaScript:External script</title>
  </head>
  <body>
    <!-- it could be in the header or in the body --> 
    <!-- Here is the recommended place to put the external script -->
    <script src="introduction.js"></script>
  </body>
</html>
```

Open the browser console to see the output of the console.log()

### Multiple External Scripts

We can also link multiple external JavaScript files to a web page.
Create a helloworld.js file inside the 30DaysOfJS folder and write the following code.

```js
console.log('Hello, World!')
```

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Multiple External Scripts</title>
  </head>
  <body>
    <script src="./helloworld.js"></script>
    <script src="./introduction.js"></script>
  </body>
</html>
```

_Your main.js file should be below all other scripts_. It is very important to remember this.

![Multiple Script](./images/multiple_script.png)

## Introduction to Data types

In JavaScript and also other programming languages, there are different kinds of data types. The following are JavaScript primitive data types:_String, Number, Boolean, undefined, Null_, and _Symbol_.

### Numbers

- Integers: Integer (negative, zero and positive) numbers
  Example:
  ... -3, -2, -1, 0, 1, 2, 3 ...
- Float-point numbers: Decimal number
  Example
  ... -3.5, -2.25, -1.0, 0.0, 1.1, 2.2, 3.5 ...

### Strings

A collection of one or more characters between two single quotes, double quotes, or backticks.
**Example:**

```js
'Asabeneh'
'Finland'
'JavaScript is a beautiful programming language'
'I love teaching'
'I hope you are enjoying the first day'
`We can also create a string using a backtick`
'A string could be just as small as one character as big as many pages'
```

### Booleans

A boolean value is either True or False. Any comparisons returns a boolean value, which is either true or false.

A boolean data type is either a true or false value.

**Example:**

```js
true // if the light is on, the value is true
false // if the light is off, the value is false
```

### Undefined

In JavaScript, if we don't assign a value to a variable, the value is undefined. In addition to that, if a function is not returning anything, it returns undefined.

```js
let firstName
console.log(firstName) // undefined, because it is not assigned to a value yet
```

### Null

Null in JavaScript means an empty value.

```js
let emptyValue = null
```

## Checking Data Types

To check the data type of a certain variable, we use the **typeof** operator. See the following example.

```js
console.log(typeof 'Asabeneh') // string
console.log(typeof 5) // number
console.log(typeof true) // boolean
console.log(typeof null) // object type
console.log(typeof undefined) // undefined
```

## Comments Again

Remember that commenting in JavaScript is similar to other programming languages. Comments are important in making your code more readable.
There are two ways of commenting:

- _Single line commenting_
- _Multiline commenting_

```js
// commenting the code itself with a single comment
// let firstName = 'Asabeneh'; single line comment
// let lastName = 'Yetayeh'; single line comment
```

Multiline commenting:

```js
/*
  let location = 'Helsinki';
  let age = 100;
  let isMarried = true;
  This is a Multiple line comment

*/
```

## Variables

Variables are _containers_ of data. Variables are used to _store_ data in a memory location. When a variable is declared, a memory location is reserved. When a variable is assigned to a value (data), the memory space will be filled with that data. To declare a variable, we use _var_, _let_, or _const_ keywords.

For a variable that changes at a different time, we use _let_. If the data does not change at all, we use _const_. For example, PI, country name, gravity do not change, and we can use _const_. We will not use var in this challenge and I don't recommend you to use it. It is error prone way of declaring variable it has lots of leak. We will talk more about var, let, and const in detail in other sections (scope). For now, the above explanation is enough.

A valid JavaScript variable name must follow the following rules:

- A JavaScript variable name should not begin with a number.
- A JavaScript variable name does not allow special characters except dollar sign and underscore.
- A JavaScript variable name follows a camelCase convention.
- A JavaScript variable name should not have space between words.

The following are examples of valid JavaScript variables.

```js
firstName
lastName
country
city
capitalCity
age
isMarried

first_name
last_name
is_married
capital_city

num1
num_1
_num_1
$num1
year2020
year_2020
```

The first and second variables on the list follows the camelCase convention of declaring in JavaScript. In this material, we will use camelCase variables.

Example of invalid variables:

```sh
  first-name
  1_num
  num_#_1
```

Let us declare variables with different data types. To declare a variable, we need to use _let_ or _const_ keyword before the variable name. Following the variable name, we write an equal sign (assignment operator), and a value(assigned data).

```js
// Syntax
let nameOfVariable = value
```

**Examples of declared variables**

```js
// Declaring different variables of different data types
let firstName = 'Asabeneh' // first name of a person
let lastName = 'Yetayeh' // last name of a person
let country = 'Finland' // country
let city = 'Helsinki' // capital city
let age = 100 // age in years
let isMarried = true

console.log(firstName, lastName, country, city, age, isMarried)
```

```sh
Asabeneh Yetayeh Finland Helsinki 100 true
```

```js
// Declaring variables with number values
let age = 100 // age in years
const gravity = 9.81 // earth gravity  in m/s2
const boilingPoint = 100 // water boiling point, temperature in °C
const PI = 3.14 // geometrical constant
console.log(gravity, boilingPoint, PI)
```

```sh
9.81 100 3.14
```

```js
// Variables can also be declaring in one line separated by comma
let name = 'Asabeneh', // name of a person
job = 'teacher',
live = 'Finland'
console.log(name, job, live)
```

```sh
Asabeneh teacher Finland
```

When you run _index.html_ file in the 01-Day folder you should get this:

![Day one](./images/day_1.png)

🌕 You are amazing! You have just completed day 1 challenge and you are on your way to greatness. Now do some exercises for your brain and muscle.

# 💻 Day 1: Exercises

1. Write a single line comment which says, _comments can make code readable_
2. Write another single comment which says, _Welcome to 30DaysOfJavaScript_
3. Write a multiline comment which says, _comments can make code readable, easy to reuse_
   _and informative_

4. Create a variable.js file and declare variables and assign string, boolean, undefined and null data types
5. Create datatypes.js file and use the JavaScript **_typeof_** operator to check different data types. Check the data type of each variable
6. Declare four variables without assigning values
7. Declare four variables with assigned values
8. Declare variables to store your first name, last name, marital status, country and age in multiple lines
9. Declare variables to store your first name, last name, marital status, country and age in a single line
10. Declare two variables _myAge_ and _yourAge_ and assign them initial values and log to the browser console.

```sh
I am 25 years old.
You are 30 years old.
```

🎉 CONGRATULATIONS ! 🎉

[Day 2 >>](./02_Day_Data_types/02_day_data_types.md)
