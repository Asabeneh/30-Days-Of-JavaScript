| 第#天 |                                        内容                                        |
| :---- | :--------------------------------------------------------------------------------: |
| 01    |                             [引入 Introduction](link)                              |
| 02    |                                数据类型 Data Types                                 |
| 03    |                   布尔值、操作符、日期 Booleans, Operators, Date                   |
| 04    |                               条件结构 Conditionals                                |
| 05    |                                    列表 Arrays                                     |
| 06    |                                   循环结构 Loops                                   |
| 07    |                                   函数 Functions                                   |
| 08    |                                    对象 Objects                                    |
| 09    |                          高级函数 Higher Order Functions                           |
| 10    |                              集合与映射 Sets and Maps                              |
| 11    |                       解构与展开 Destructuring and Spreading                       |
| 12    |                           正则表达式 Regular Expressions                           |
| 13    |                       控制台对象方法 Console Object Methods                        |
| 14    |                              错误处理 Error Handling                               |
| 15    |                                     类 Classes                                     |
| 16    |                                        JSON                                        |
| 17    |                             网络内容存储 Web Storages                              |
| 18    |                                 承诺函数 Promises                                  |
| 19    |                                    闭包 Closure                                    |
| 20    |                         撰写清晰的代码 Writing Clean Code                          |
| 21    |                                  文档对象模型 DOM                                  |
| 22    |                        操作DOM对象 Manipulating DOM Object                         |
| 23    |                             事件监听器 Event Listeners                             |
| 24    |                    迷你项目：太阳系 Mini Project: Solar System                     |
| 25    | 迷你项目：世界各国家数据可视化1 Mini Project: World Countries Data Visualization 1 |
| 26    | 迷你项目：世界各国家数据可视化1 Mini Project: World Countries Data Visualization 2 |
| 27    |                      迷你项目：项目集 Mini Project: Portfolio                      |
| 28    |                     迷你项目：排行榜 Mini Project: Leaderboard                     |
| 29    |               迷你项目：动画字符 Mini Project: Animating characters                |
| 30    |                              毕业项目 Final Projects                               |

🧡🧡🧡 HAPPY CODING 🧡🧡🧡

<div>
<small>请支持 <strong>作者</strong> 创造更多教学材料</small> <br />  
<a href = "https://www.paypal.me/asabeneh"><img src='https://1000logos.net/wp-content/uploads/2021/04/Paypal-logo.png' alt='Paypal Logo' style="width:10%"/></a>
</div>

<div align="center">
  <h1> 30天入门JavaScript：引入</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/asabeneh/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/Asabeneh">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/asabeneh?style=social">
  </a>

  <sub>作者:
  <a href="https://www.linkedin.com/in/asabeneh/" target="_blank">Asabeneh Yetayeh</a><br>
  <small> 1月, 2020</small>
</sub>

</div>

[Day 2 >>]()

![Thirty Days Of JavaScript](../images/day_1_1.png)

- [📔 第一天](#-第一天)
  - [引入](#引入)
  - [在开始路程前，你需要具备](#在开始路程前你需要具备)
  - [准备工作](#准备工作)
    - [安装 Node.js](#安装-nodejs)
    - [浏览器](#浏览器)
      - [安装谷歌Chrome](#安装谷歌chrome)
      - [开启Chrome控制台](#开启chrome控制台)
      - [在控制台写代码](#在控制台写代码)
        - [Console.log方法](#consolelog方法)
        - [Console.log 支持多个输入参数](#consolelog-支持多个输入参数)
        - [注释](#注释)
        - [语法](#语法)
      - [算术](#算术)
    - [代码编辑器](#代码编辑器)
      - [安装Visual Studio Code](#安装visual-studio-code)
      - [如何使用 Visual Studio Code](#如何使用-visual-studio-code)
  - [将 JavaScript 添加到网页](#将-javascript-添加到网页)
    - [文内代码 Inline Script](#文内代码-inline-script)
    - [内部代码 Internal Script](#内部代码-internal-script)
    - [外部代码 External Script](#外部代码-external-script)
    - [多个外部代码 Multiple External Scripts](#多个外部代码-multiple-external-scripts)
  - [数据类型](#数据类型)
    - [数值 Numbers](#数值-numbers)
    - [字符串 Strings](#字符串-strings)
    - [布尔值 Booleans](#布尔值-booleans)
    - [未定义值 Undefined](#未定义值-undefined)
    - [空 Null](#空-null)
  - [检查数据类型](#检查数据类型)
  - [注释，再次介绍](#注释再次介绍)
  - [变量](#变量)
- [💻 第一天: 作业](#-第一天-作业)

# 📔 第一天

## 引入

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**恭喜你** 决定踏上30天入门Javascript的旅途。在这30天里，你将会学到成为JS程序员（或者更广泛一些，编程）的必备知识。最终，你将获得30天入门JavaScript 证书。若你需要其他帮助或想帮助其他人，请加入[TG群](https://t.me/ThirtyDaysOfJavaScript).

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**30天入门Javascript** 挑战适合初学者和进阶开发人员。欢迎来到JavaScript的世界。 JavaScript是互联网的语言。我在使用和教学JavaScript的过程中感受到了生命的大和谐，也希望你可以和我一同和谐。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本教程将循序渐进带你学习人类历史上最受欢迎的语言之一 - JavaScript。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JavaScript一般应用场景包括： **_为网页添加交互功能、开发移动应用、桌面应用、游戏等 _** ，现在甚至可应用于 **_机器学习_** 和 **_人工智能_**. **_JavaScript (JS)_** 的人气在近几年不断上升且已经连续六年成为排头编程语言，而且是github上使用最多的语言之一。

## 在开始路程前，你需要具备

其实本课程不要求任何编程知识，你只需要有:

1. 主观能动性
2. 一台电脑
3. 村里连上网
4. 浏览器
5. 代码编辑器

## 准备工作

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;相信你已经有充足的主观能动性和意愿成为一个程序开发商，另外，你也已经有电脑和连上网了。具备这些软硬件，就可以出发了！

### 安装 Node.js

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;虽然现在还用不上Node.js，但之后也会需要，所以先装了没毛病 -> [node.js](https://nodejs.org/en/).

![Node download](../images/download_node.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;下载安装包并安装

![Install node](../images/install_node.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;安装完毕后，可以调出控制台检查是否安装成功。

```sh
asabeneh $ node -v
v12.14.0
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在编制本教程时，我使用的Node版本是12.14.0, 不过推荐版本是v14.17.6, 在你观看本教程时相信已经有更新的版本了。

### 浏览器

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;浏览器有很多选择，但我强烈推荐谷歌Chrome。

#### 安装谷歌Chrome

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;若你目前没有Chrome，可按此安装[Google Chrome](https://www.google.com/chrome/) 。我们可以在浏览器控制台写一些小型的JavaScript代码，不过不会使用控制台来开发应用。

![Google Chrome](images/google_chrome.png)

#### 开启Chrome控制台

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;可以通过点按右上角的三个点的按钮，选择 _更多工具 -> 开发者工具_ 或快捷键，我更推荐快捷键。

![Opening chrome](../images/opening_developer_tool.png)

快捷键：

```sh
Mac
Command+Option+J

Windows/Linux:
Ctl+Shift+J
```

![Opening console](../images/opening_chrome_console_shortcut.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;开启控制台后，我们来探索一下里面的元素。之后我们大部分学习将围绕控制台展开，这里是JavsScript代码运行的地方。谷歌控制台V8引擎将你的JavaScript代码转换为机器语言。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;接下来我们开始在控制台里写一些JavaScript代码：

![write code on console](../images/js_code_on_chrome_console.png)

#### 在控制台写代码

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们可以在谷歌（或其他浏览器）的控制台里写任意代码。不过在本教程里我们主要是用谷歌控制台。首先，用快捷键开启控制台

```sh
Mac
Command+Option+I

Windows:
Ctl+Shift+I
```

##### Console.log方法

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第一行代码将用到一个JavaScript内建函数 **console.log()**。我们输入一串字符作为这个函数的参数，函数将会在控制台展示我们输入的字符。比如 `'Hello, World'` 。

```js
console.log('Hello, World!')
```

##### Console.log 支持多个输入参数

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**`console.log()`** 函数可以接收多个参数，用逗号分隔。语法： **`console.log(参数1, 参数2, 参数3)`**

![console log multiple arguments](../images/console_log_multipl_arguments.png)

```js
console.log('Hello', 'World', '!')
console.log('HAPPY', 'NEW', 'YEAR', 2020)
console.log('Welcome', 'to', 30, 'Days', 'Of', 'JavaScript')
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;从上面截图可以看到, _`console.log()`_ 可以接受多个参数

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;恭喜！你成功写出了第一句使用_`console.log()`_函数的JavaScript代码! 

##### 注释

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们可以为我们的代码添加注释。注释可以另我们的代码更好理解。JavaScript会略过注释内容。在JavaScript中，在语句的最开头输入 // 以代表其后的语句为注释。

**例1：单行注释**

```js
// 这是第一个注释
// 这是第二个注释 
// 这是单行注释
```

**例2：多行注释**

```js
/*
这是多行注释，
顾名思义，可以包含多行文字，
JavaScrpt是互联网的语言
 */
```

##### 语法

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;编程语言和人类语言很类似。英语或其他语言通过字词句段篇章等来传达信息。“语法”的意思是 _语言中通过排列文字、词语、短语以创造结构化的句子_ 而编程世界中，“语法”代表计算机语言的结构。每个编程语言都有自己的语法。JavaScript也不例外。如果我们编写的语法JavaScript理解不了，那么就会产生各种各样的错误。我们会在之后的课程中学习各种常见的错误。现在，我们先学习什么是“语法错误 (symtax error)” 。

![Error](../images/raising_syntax_error.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在此我特意制造了一个错误，控制台抛出了错误提示。可以看到，错误提示已经非常清晰地提示了我们犯了哪一类错误。根据错误反馈指引，我们可以修改代码改正错误。这个过程又叫做纠错(debugging)。让我来解决这个错误：

```js
console.log('Hello, World!')
console.log('Hello, World!')
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，我们已经知道如何使用 _`console.log()`_. 来展示字符。如果我们希望 _`console.log()`_ 输出我们需要的结果，那么输入的参数必须用单引号、双引号或反引号(`)框住。
**例:**

```js
console.log('Hello, World!')
console.log("Hello, World!")
console.log(`Hello, World!`)
```

#### 算术

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 现在，让我们尝试用数字类型作为 _`console.log()`_ 的参数
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 除了文字，我们可以用JavaScript作数学运算，让我们先试试一些简单的计算。
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 在浏览器的控制台中其实不需要使用 **_`console.log()`_** 函数就可以输出结果。不过我们在这里统一使用，因为之后大部分的教程需要在文字编辑器里写代码，必须通过 **_`console.log()`_** 函数来输出结果。

![Arithmetic](../images/arithmetic.png)

```js
console.log(2 + 3) // Addition
console.log(3 - 2) // Subtraction
console.log(2 * 3) // Multiplication
console.log(3 / 2) // Division
console.log(3 % 2) // Modulus - finding remainder
console.log(3 ** 2) // Exponentiation 3 ** 2 == 3 * 3
```

### 代码编辑器

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 我们可以在控制台里直接写代码，但是这种做法不利于建立大型项目。在真实场景中，开发人员一般用各种代码编辑器来写代码。在本教程里，我们会使用Visual Studio Code来写代码。

#### 安装Visual Studio Code

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Visual Studio Code 是一个非常流行的开源代码编辑器。我一般都推荐使用 [Visual Studio Code](https://code.visualstudio.com/), 当然，如果你已经习惯使用别的编辑器也可以。

![Vscode](../images/vscode.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 安装好Visual Studio Code后我们继续课程。


#### 如何使用 Visual Studio Code

双击开启 Visual Studio Code，你会看到如下界面，可按下图操作。

![Vscode ui](../images/vscode_ui.png)

![Vscode add project](../images/adding_project_to_vscode.png)

![Vscode open project](../images/opening_project_on_vscode.png)

![script file](../images/scripts_on_vscode.png)

![Installing Live Server](../images/vsc_live_server.png)

![running script](../images/running_script.png)

![coding running](../images/launched_on_new_tab.png)

## 将 JavaScript 添加到网页

在网页中添加 JavaScript 有三种方式：

- **_文内代码 Inline script_**
- **_内部代码 Internal script_**
- **_外部代码 External script_**
- **_多个外部代码 Multiple External scripts_**

我们将会演示每一种方法。

### 文内代码 Inline Script

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 在电脑桌面（或其他路径）创建一个项目文档，命名为“30DaysOfJS”，并在文档哪创建一个名为 **_`index.html`_** 的文件。然后将以下代码复制粘贴到文件内，并用浏览器打开，例如[Chrome](https://www.google.com/chrome/).

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>30DaysOfScript:Inline Script</title>
  </head>
  <body>
    <button onclick="alert('Welcome to 30DaysOfJavaScript!')">Click Me</button>
  </body>
</html>
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 现在，你已经写了人生第一句文内代码，这段代码用JavaScript内建的_`alert()`_函数生成了一个对话框并显示一段文字。

### 内部代码 Internal Script

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 内部代码可以写在HTML文档的 _`head`_ 块或 _`body`_块，但一般推荐是摆在body块。现在让我们先试试在head块中编写代码：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>30DaysOfScript:Internal Script</title>
    <script>
      console.log('Welcome to 30DaysOfJavaScript')
    </script>
  </head>
  <body></body>
</html>
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 下方则是常见的内部代码编写模式，即在HTML的body块内编写代码。用浏览器打开该文件可以在控制台看到 `console.log()`的输出结果。

```html
<!DOCTYPE html>
<html lang="en">
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

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Open the browser console to see the output from the `console.log()`.

![js code from vscode](../images/js_code_vscode.png)

### 外部代码 External Script

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 与内部代码类似，外部代码可以摆在header或body块，但是建议摆在body。
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 首先，我们在project文件夹中建立一个外部的 JavaScript 文件（.js后缀），命名为“introduction.js“。复制粘贴以下代码到文件中并保存并在HTML的body块中链接此.js文件。

```js
console.log('Welcome to 30DaysOfJavaScript')
```

在 _head_ 中插入外部代码:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>30DaysOfJavaScript:External script</title>
    <script src="introduction.js"></script>
  </head>
  <body></body>
</html>
```

在 _body_ 中插入外部代码:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>30DaysOfJavaScript:External script</title>
  </head>
  <body>
    <!-- JavaScript external link could be in the header or in the body --> 
    <!-- Before the closing tag of the body is the recommended place to put the external JavaScript script -->
    <script src="introduction.js"></script>
  </body>
</html>
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  开启浏览器控制台查看 `console.log()`的输出结果。

### 多个外部代码 Multiple External Scripts

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 在HTML文件中可以同时链接多个JavaScript文件。例如，在项目文件夹内创建一个新的.js文件命名为“`helloworld.js`”并写入以下代码：

```js
console.log('Hello, World!')
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Multiple External Scripts</title>
  </head>
  <body>
    <script src="./helloworld.js"></script>
    <script src="./introduction.js"></script>
  </body>
</html>
```

_最重要的.js文件需要摆在所有其他代码文件签名，这点非常重要。_

![Multiple Script](../images/multiple_script.png)

## 数据类型


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; JavaScript和其他编程语言一样，支持多种数据类型。JavaScript 的原始数据类型包括: _String, Number, Boolean, undefined, Null_, and _Symbol_.

### 数值 Numbers

- 证书 Integers: 整型（负整数、0、正整数）数值
  例:
  ... -3, -2, -1, 0, 1, 2, 3 ...
- 浮点数值 Float-point numbers: 小数
  例：
  ... -3.5, -2.25, -1.0, 0.0, 1.1, 2.2, 3.5 ...

### 字符串 Strings


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 一个或多个字符的集合，需用单引号、双引号或反引号框住。

**例:**

```js
'a'
'Asabeneh'
"Asabeneh"
'Finland'
'JavaScript是美妙的编程语言'
'I love teaching'
'I hope you are enjoying the first day'
`We can also create a string using a backtick`
'A string could be just as small as one character or as big as many pages'
'Any data type under a single quote, double quote or backtick is a string'
```

### 布尔值 Booleans


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 布尔值的取值范围只有两个数：true 或 false. 所有对比操作都会返回布尔值。

**例:**

```js
true // if the light is on, the value is true
false // if the light is off, the value is false
```

### 未定义值 Undefined


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 在 JavaScript 中，如果我们没有给一个变量赋值，那么这个变量的值就是“未定义值”。另外，如果一个函数没有任何返回值，那么默认返回“未定义值”

```js
let firstName
console.log(firstName) // undefined, because it is not assigned to a value yet
```

### 空 Null

“空” Null 代表空白值

```js
let emptyValue = null
```

## 检查数据类型


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 通过 **typeof** 操作符可以检查数据类型，比如以下例子：

```js
console.log(typeof 'Asabeneh') // 字符串 string
console.log(typeof 5) // 数值 number
console.log(typeof true) // 布尔值 boolean
console.log(typeof null) // 对象类型 object type
console.log(typeof undefined) // 未定义值 undefined
```

## 注释，再次介绍


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; JavaScript里的注释也和其他编程语言一样，主要服务于代码的可读性。
有两种注释类型：

- _单行注释_
- _多行注释_

单行注释：
```js
// commenting the code itself with a single comment
// let firstName = 'Asabeneh'; single line comment
// let lastName = 'Yetayeh'; single line comment
```

多行注释:

```js
/*
  let location = 'Helsinki';
  let age = 100;
  let isMarried = true;
  This is a Multiple line comment
*/
```

## 变量

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 变量是数据的_容器_，数据通过变量_存储_在内存中。当声明一个变量时，一部分内存被留存。当该变量被赋值时，这部分内存就相应填充所赋的值。JavaScript用 _var_，_let_，或 _const_ 关键字来声明变量。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 用 _let_ 来声明取值可变的变量，用 _const_ 来声明去值不会变的变量（比如PI，国家名字、重力加速度等）。在此教程中我们不会使用 var，因为我不建议使用这个关键词。这个关键词很容易产生各种错误。在别的章节会详细介绍var和const。

JavaScript 变量需要遵循以下规则：

- 首字符不能是数字。
- 除了下划线和美元符号，不可以使用其他特殊符号。
- 骆驼型字符命名，例如aJavaScriptVariable
- 不能有空格。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 以下是合规范的变量名。

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

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 例子中的头两个变量就是骆驼型变量名的形式。在此教程中，我们会采用首字母小写骆驼型命名变量，用首字母大写骆驼型命名类。

不合规的变量名例子：

```js
  first-name
  1_num
  num_#_1
```

接着，我们可以用各种数据类型声明变量。语法是 _let_ 或 _const_ 关键字 + 变量名 = 数值

```js
// Syntax
let nameOfVariable = value
```

nameOfVriable 是一个变量，他的值是value

**例：声明变量**

```js
// 声明不同数据类型的变量 Declaring different variables of different data types
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
// Variables can also be declaring in one line separated by comma, however I recommend to use a seperate line to make code more readble
let name = 'Asabeneh', job = 'teacher', live = 'Finland'
console.log(name, job, live)
```

```sh
Asabeneh teacher Finland
```

当你用浏览器打开 _index.html_ 时，你会看见:

![Day one](../images/day_1.png)

🌕 你真牛逼！你已经完成了第一天的挑战，并朝牛逼头子更进一步。现在让我们来做一些轻松愉快的作业吧～

# 💻 第一天: 作业

1. 写一句单行注释，内容为_comments can make code readable_。Write a single line comment which says, _comments can make code readable_
2. 写一句单行注释，内容为_Welcome to 30DaysOfJavaScript_。Write another single comment which says, _Welcome to 30DaysOfJavaScript_
3. 写一段多行注释，内容为 _comments can make code readable, easy to reuse_
   _and informative_。Write a multiline comment which says, _comments can make code readable, easy to reuse_
   _and informative_

4. 创建一个名为 variable.js 的文件，并声明类型为字符串、布尔值、未定义值及空值的变量。Create a variable.js file and declare variables and assign string, boolean, undefined and null data types
5. 创建一个名为 datatypes.js 的文件，并使用 **_typeof_** 操作符来检查每一个变量的数据类型。Create datatypes.js file and use the JavaScript **_typeof_** operator to check different data types. Check the data type of each variable
6. 声明一个变量，不要赋值。Declare four variables without assigning values
7. 声明一个变量并赋值。Declare four variables with assigned values
8. 用多行代码声明多个变量来存储你的姓、名、婚姻状况、国际、年龄。Declare variables to store your first name, last name, marital status, country and age in multiple lines
9. 用**一**行代码声明多个变量来存储你的姓、名、婚姻状况、国际、年龄。Declare variables to store your first name, last name, marital status, country and age in a single line
10. 声明两个变量 _myAge_ 和 _yourAge_ 并赋值，在浏览器控制台输出以下结果。Declare two variables _myAge_ and _yourAge_ and assign them initial values and log to the browser console.

```sh
I am 25 years old.
You are 30 years old.
```

🎉 恭喜！🎉

[Day 2 >>](./02_Day_Data_types/02_day_data_types.md)
