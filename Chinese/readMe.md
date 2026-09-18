# 30 天 JavaScript

| # 天数 |                                                              主题                                                              |
| ------ | :----------------------------------------------------------------------------------------------------------------------------: |
| 01     |                                                      [介绍](./readMe.md)                                                       |
| 02     |                                      [数据类型](./02_Day_Data_types/02_day_data_types.md)                                      |
| 03     |                     [布尔值、运算符、日期](./03_Day_Booleans_operators_date/03_booleans_operators_date.md)                     |
| 04     |                                    [条件语句](./04_Day_Conditionals/04_day_conditionals.md)                                    |
| 05     |                                            [数组](./05_Day_Arrays/05_day_arrays.md)                                            |
| 06     |                                             [循环](./06_Day_Loops/06_day_loops.md)                                             |
| 07     |                                         [函数](./07_Day_Functions/07_day_functions.md)                                         |
| 08     |                                           [对象](./08_Day_Objects/08_day_objects.md)                                           |
| 09     |                          [高阶函数](./09_Day_Higher_order_functions/09_day_higher_order_functions.md)                          |
| 10     |                                  [集合和映射](./10_Day_Sets_and_Maps/10_day_Sets_and_Maps.md)                                  |
| 11     |                    [解构和扩展](./11_Day_Destructuring_and_spreading/11_day_destructuring_and_spreading.md)                    |
| 12     |                            [正则表达式](./12_Day_Regular_expressions/12_day_regular_expressions.md)                            |
| 13     |                       [控制台对象方法](./13_Day_Console_object_methods/13_day_console_object_methods.md)                       |
| 14     |                                  [错误处理](./14_Day_Error_handling/14_day_error_handling.md)                                  |
| 15     |                                            [类](./15_Day_Classes/15_day_classes.md)                                            |
| 16     |                                              [JSON](./16_Day_JSON/16_day_json.md)                                              |
| 17     |                                    [网络存储](./17_Day_Web_storages/17_day_web_storages.md)                                    |
| 18     |                                        [Promises](./18_Day_Promises/18_day_promises.md)                                        |
| 19     |                                          [闭包](./19_Day_Closures/19_day_closures.md)                                          |
| 20     |                          [编写干净的代码](./20_Day_Writing_clean_codes/20_day_writing_clean_codes.md)                          |
| 21     |                                               [DOM](./21_Day_DOM/21_day_dom.md)                                                |
| 22     |                      [操作 DOM 对象](./22_Day_Manipulating_DOM_object/22_day_manipulating_DOM_object.md)                       |
| 23     |                                [事件监听器](./23_Day_Event_listeners/23_day_event_listeners.md)                                |
| 24     |                        [迷你项目：太阳系](./24_Day_Project_solar_system/24_day_project_solar_system.md)                        |
| 25     | [迷你项目：世界国家数据可视化 1](./25_Day_World_countries_data_visualization_1/25_day_world_countries_data_visualization_1.md) |
| 26     | [迷你项目：世界国家数据可视化 2](./26_Day_World_countries_data_visualization_2/26_day_world_countries_data_visualization_2.md) |
| 27     |                      [迷你项目：作品集](./27_Day_Mini_project_portfolio/27_day_mini_project_portfolio.md)                      |
| 28     |                    [迷你项目：排行榜](./28_Day_Mini_project_leaderboard/28_day_mini_project_leaderboard.md)                    |
| 29     |          [迷你项目：角色动画](./29_Day_Mini_project_animating_characters/29_day_mini_project_animating_characters.md)          |
| 30     |                              [最终项目](./30_Day_Mini_project_final/30_day_mini_project_final.md)                              |

🧡🧡🧡 快乐编码 🧡🧡🧡

<div>
<small>支持 <strong>作者</strong> 创作更多教育材料</small> <br />  
<a href = "https://www.paypal.me/asabeneh"><img src='./images/paypal_lg.png' alt='Paypal Logo' style="width:10%"/></a>
</div>

<div align="center">
  <h1> 30 天 JavaScript：介绍</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/asabeneh/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/Asabeneh">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/asabeneh?style=social">
  </a>

<sub>作者：
<a href="https://www.linkedin.com/in/asabeneh/" target="_blank">Asabeneh Yetayeh</a><br>
<small> 2020 年 1 月</small>
</sub>

<div>

🇬🇧 [English](./readMe.md)
🇪🇸 [Spanish](./Spanish/readme.md)
🇮🇹 [Italian](./Italian/readMe.md)
🇷🇺 [Russian](./RU/README.md)
🇹🇷 [Turkish](./Turkish/readMe.md)
🇦🇿 [Azerbaijan](./Azerbaijani/readMe.md)
🇰🇷 [Korean](./Korea/README.md)
🇻🇳 [Vietnamese](./Vietnamese/README.md)
🇵🇱 [Polish](./Polish/readMe.md)
🇧🇷 [Portuguese](./Portuguese/readMe.md)

</div>

</div>
</div>

[第 2 天 >>](./02_Day_Data_types/02_day_data_types.md)

![30 天 JavaScript](./images/day_1_1.png)

- [30 天 JavaScript](#30-days-of-javascript)
- [📔 第 1 天](#-day-1)
  - [介绍](#introduction)
  - [要求](#requirements)
  - [设置](#setup)
    - [安装 Node.js](#install-nodejs)
    - [浏览器](#browser)
      - [安装 Google Chrome](#installing-google-chrome)
      - [打开 Google Chrome 控制台](#opening-google-chrome-console)
      - [在浏览器控制台中编写代码](#writing-code-on-browser-console)
        - [Console.log](#consolelog)
        - [Console.log 带多个参数](#consolelog-with-multiple-arguments)
        - [注释](#comments)
        - [语法](#syntax)
      - [算术](#arithmetics)
    - [代码编辑器](#code-editor)
      - [安装 Visual Studio Code](#installing-visual-studio-code)
      - [如何使用 Visual Studio Code](#how-to-use-visual-studio-code)
  - [将 JavaScript 添加到网页](#adding-javascript-to-a-web-page)
    - [内联脚本](#inline-script)
    - [内部脚本](#internal-script)
    - [外部脚本](#external-script)
    - [多个外部脚本](#multiple-external-scripts)
  - [数据类型介绍](#introduction-to-data-types)
    - [数字](#numbers)
    - [字符串](#strings)
    - [布尔值](#booleans)
    - [未定义](#undefined)
    - [空值](#null)
  - [检查数据类型](#checking-data-types)
  - [再次注释](#comments-again)
  - [变量](#variables)
- [💻 第 1 天：练习](#-day-1-exercises)

# 📔 第 1 天

## 介绍

**恭喜你** 决定参加 30 天 JavaScript 编程挑战。在这个挑战中，你将学习成为 JavaScript 程序员所需的一切，并全面了解编程的概念。在挑战结束时，你将获得 30 天 JavaScript 编程挑战完成证书。如果你需要帮助或愿意帮助他人，你可以加入专门的 [Telegram 群组](https://t.me/ThirtyDaysOfJavaScript)。

**30 天 JavaScript** 挑战是为初学者和高级 JavaScript 开发人员提供的指南。欢迎来到 JavaScript。JavaScript 是网络的语言。我喜欢使用和教授 JavaScript，希望你也会如此。

在这个循序渐进的 JavaScript 挑战中，你将学习 JavaScript，这个历史上最流行的编程语言。
JavaScript 被用于 **_为网站添加交互性、开发移动应用、桌面应用、游戏_**，... 如今 JavaScript 可用于 **服务器端编程**、 **_机器学习_** 和 **_人工智能_**。

**_JavaScript (JS)_** 近年来越来越受欢迎，并且在过去十年中一直是领先的编程语言，也是 GitHub 上最常用的编程语言。

这个挑战容易阅读，用对话式英语书写，具有吸引力、激励性，同时也非常具有挑战性。你需要花费大量时间来完成这个挑战。如果你是视觉学习者，可以在 <a href="https://www.youtube.com/channel/UC7PNRuno1rzYPb1xLa4yktw"> Washera</a> YouTube 频道上获得视频课程。订阅该频道，在 YouTube 视频中发表评论和提问，积极参与，作者最终会注意到你。

作者喜欢听到你对挑战的看法，请通过表达你对 30 天 JavaScript 挑战的想法与作者分享。你可以在这个 [链接](https://testimonial-vdzd.onrender.com/) 上留下你的感言。

## 要求

跟随这个挑战不需要编程的先前知识。你只需要：

1. 动力
2. 一台电脑
3. 网络
4. 浏览器
5. 代码编辑器

## 设置

我相信你有动力和成为开发人员的强烈愿望，并且有电脑和网络。如果你有这些，那么你已经拥有了开始所需的一切。

### 安装 Node.js

你现在可能不需要 Node.js，但以后可能会需要。安装 [node.js](https://nodejs.org/en/)。

![Node 下载](images/download_node.png)

下载后双击并安装

![安装 Node](images/install_node.png)

我们可以通过打开设备终端或命令提示符来检查是否在本地计算机上安装了 Node。

```sh
asabeneh $ node -v
v12.14.0
```

在编写本教程时，我使用的是 Node 版本 12.14.0，但现在推荐下载的 Node.js 版本是 v14.17.6，当你使用这些材料时，可能会有更高的 Node.js 版本。

### 浏览器

市面上有很多浏览器。然而，我强烈推荐使用 Google Chrome。

#### 安装 Google Chrome

如果你还没有，请安装 [Google Chrome](https://www.google.com/chrome/)。我们可以在浏览器控制台中编写小的 JavaScript 代码，但我们不会使用浏览器控制台来开发应用程序。

![Google Chrome](images/google_chrome.png)

#### 打开 Google Chrome 控制台

你可以通过点击浏览器右上角的三个点，选择 _更多工具 -> 开发者工具_ 或使用键盘快捷键打开 Google Chrome 控制台。我更喜欢使用快捷键。

![打开 Chrome](images/opening_developer_tool.png)

要使用键盘快捷键打开 Chrome 控制台。

```sh
Mac
Command+Option+J

Windows/Linux:
Ctrl+Shift+J
```

![打开控制台](images/opening_chrome_console_shortcut.png)

打开 Google Chrome 控制台后，尝试探索标记的按钮。我们大部分时间会在控制台中度过。控制台是你的 JavaScript 代码所在的地方。Google 控制台 V8 引擎将你的 JavaScript 代码转换为机器代码。
让我们在 Google Chrome 控制台上编写 JavaScript 代码：

![在控制台上编写代码](./images/js_code_on_chrome_console.png)

#### 在浏览器控制台中编写代码

我们可以在 Google 控制台或任何浏览器控制台中编写任何 JavaScript 代码。然而，在这个挑战中，我们只关注 Google Chrome 控制台。使用以下方法打开控制台：

```sh
Mac
Command+Option+I

Windows:
Ctrl+Shift+I
```

##### Console.log

要编写我们的第一个 JavaScript 代码，我们使用了一个内置函数 **console.log()**。我们传递了一个参数作为输入数据，函数显示输出。我们传递了 'Hello, World' 作为输入数据或参数给 console.log() 函数。

```js
console.log("Hello, World!");
```

##### Console.log 带多个参数

**`console.log()`** 函数可以接受多个以逗号分隔的参数。语法如下所示：**`console.log(param1, param2, param3)`**

```js
console.log("Hello", "World", "!");
console.log("HAPPY", "NEW", "YEAR", 2020);
console.log("Welcome", "to", 30, "Days", "Of", "JavaScript");
```

如上面的代码片段所示，_`console.log()`_ 可以接受多个参数。

恭喜你！你使用 _`console.log()`_ 编写了你的第一个 JavaScript 代码。

##### 注释

我们可以在代码中添加注释。注释对于使代码更具可读性和在代码中留下备注非常重要。JavaScript 不执行代码中的注释部分。在 JavaScript 中，任何以 // 开头的文本行都是注释，任何像这样 `//` 包围的内容也是注释。

**示例：单行注释**

```js
// 这是第一个注释
// 这是第二个注释
// 我是一个单行注释
```

**示例：多行注释**

```js
/*
这是一个多行注释  
 多行注释可以占用多行  
 JavaScript 是网络的语言  
 */
```

##### 语法

编程语言类似于人类语言。英语或许多其他语言使用单词、短语、句子、复合句子等来传达有意义的信息。语法的英语意思是 _单词和短语的排列以创建语言中的结构良好的句子_。技术上语法的定义是计算机语言中语句的结构。编程语言有语法。JavaScript 是一种编程语言，像其他编程语言一样，它有自己的语法。如果我们不编写 JavaScript 能理解的语法，它将引发不同类型的错误。我们稍后将探索不同类型的 JavaScript 错误。现在，让我们看看语法错误。

![错误](images/raising_syntax_error.png)

我故意犯了一个错误。因此，控制台引发了语法错误。实际上，语法非常具有信息性。它通知犯了什么类型的错误。通过阅读错误反馈指南，我们可以纠正语法并修复问题。识别和消除程序中的错误的过程称为调试。让我们修复错误：

```js
console.log("Hello, World!");
console.log("Hello, World!");
```

到目前为止，我们已经看到了如何使用 _`console.log()`_ 显示文本。如果我们使用 _`console.log()`_ 打印文本或字符串，文本必须在单引号、双引号或反引号内。
**示例：**

```js
console.log("Hello, World!");
console.log("Hello, World!");
console.log(`Hello, World!`);
```

#### 算术

现在，让我们在 Google Chrome 控制台上使用 _`console.log()`_ 练习更多编写 JavaScript 代码以处理数字数据类型。
除了文本，我们还可以使用 JavaScript 进行数学计算。让我们进行以下简单计算。
可以直接在 Google Chrome 控制台上编写 JavaScript 代码，而无需使用 **_`console.log()`_** 函数。然而，在这个介绍中包含它，因为这个挑战的大部分内容将发生在文本编辑器中，使用该函数将是必要的。你可以直接在控制台上玩弄指令。

![算术](images/arithmetic.png)

```js
console.log(2 + 3); // 加法
console.log(3 - 2); // 减法
console.log(2 * 3); // 乘法
console.log(3 / 2); // 除法
console.log(3 % 2); // 取模 - 找余数
console.log(3 ** 2); // 指数 3 ** 2 == 3 * 3
```

### 代码编辑器

我们可以在浏览器控制台中编写代码，但这不适用于更大的项目。在实际工作环境中，开发人员使用不同的代码编辑器编写代码。在这个 30 天 JavaScript 挑战中，我们将使用 Visual Studio Code。

#### 安装 Visual Studio Code

Visual Studio Code 是一个非常流行的开源文本编辑器。我建议 [下载 Visual Studio Code](https://code.visualstudio.com/)，但如果你喜欢其他编辑器，可以随意使用。

![Vscode](images/vscode.png)

如果你安装了 Visual Studio Code，让我们开始使用它。

#### 如何使用 Visual Studio Code

通过双击 Visual Studio 图标打开 Visual Studio Code。打开后，你将看到这种界面。尝试与标记的图标进行交互。

![Vscode 界面](./images/vscode_ui.png)

![Vscode 添加项目](./images/adding_project_to_vscode.png)

![Vscode 打开项目](./images/opening_project_on_vscode.png)

![脚本文件](images/scripts_on_vscode.png)

![安装 Live Server](images/vsc_live_server.png)

![运行脚本](./images/running_script.png)

![代码运行](./images/launched_on_new_tab.png)

## 将 JavaScript 添加到网页

JavaScript 可以通过三种不同方式添加到网页：

- **_内联脚本_**
- **_内部脚本_**
- **_外部脚本_**
- **_多个外部脚本_**

以下部分展示了将 JavaScript 代码添加到网页的不同方法。

### 内联脚本

在桌面或任何位置创建一个项目文件夹，命名为 30DaysOfJS，并在项目文件夹中创建一个 **_`index.html`_** 文件。然后粘贴以下代码并在浏览器中打开它，例如 [Chrome](https://www.google.com/chrome/)。

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

现在，你刚刚编写了你的第一个内联脚本。我们可以使用内置函数*`alert()`* 创建一个弹出警告消息。

### 内部脚本

内部脚本可以写在 _`head`_ 或 *`body`*中，但建议将其放在 HTML 文档的 body 部分。首先，让我们在页面的 head 部分编写。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>30DaysOfScript:Internal Script</title>
    <script>
      console.log("Welcome to 30DaysOfJavaScript");
    </script>
  </head>
  <body></body>
</html>
```

这是我们大多数时候编写内部脚本的方式。将 JavaScript 代码写在 body 部分是最推荐的选项。打开浏览器控制台查看 `console.log()`的输出。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>30DaysOfScript:Internal Script</title>
  </head>
  <body>
    <button onclick="alert('Welcome to 30DaysOfJavaScript!');">Click Me</button>
    <script>
      console.log("Welcome to 30DaysOfJavaScript");
    </script>
  </body>
</html>
```

打开浏览器控制台以查看`console.log()`的输出。

![js code from vscode](./images/js_code_vscode.png)

### 外部脚本

与内部脚本类似，外部脚本链接可以放在头部或 body 中，但建议将其放在 body 中。首先，我们应该创建一个扩展名为 .js 的外部 JavaScript 文件。所有以 .js 结尾的文件都是 JavaScript 文件。在你的项目目录中创建一个名为 introduction.js 的文件，写下以下代码，并在 body 底部链接此 .js 文件。

```js
console.log("Welcome to 30DaysOfJavaScript");
```

在*head*中的外部脚本:

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

在*body*中的外部脚本:

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

打开浏览器控制台以查看`console.log()`的输出。

### 多个外部脚本

我们也可以将多个外部 JavaScript 文件链接到网页上。

在 30DaysOfJS 文件夹中创建一个`helloworld.js`文件，并编写以下代码。

```js
console.log("Hello, World!");
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

您的 main.js 文件应该位于所有其他脚本之下。记住这一点非常重要。

![Multiple Script](./images/multiple_script.png)

## 数据类型简介

在 JavaScript 和其他编程语言中，有不同类型的数据。以下是 JavaScript 的原始数据类型：_字符串（String）, 数字（Number）, 布尔值（Boolean）, 未定义（undefined）, 空值（Null）_, 和 _符号（Symbol）_。

### 数字

- 整数: 整数 (负数、零和正数)

例子:

... -3, -2, -1, 0, 1, 2, 3 ...

- 浮点数: 小数

例子:

... -3.5, -2.25,-1.0 ,0.0 ,1.1 ,2.2 ,3.5 ...

### 字符串

由单引号、双引号或反引号括起来的一个或多个字符的集合。

**例子:**

```js
"a";
"Asabeneh";
"Asabeneh";
"Finland";
"JavaScript is a beautiful programming language";
"I love teaching";
"I hope you are enjoying the first day"`We can also create a string using a backtick`;
("A string could be just as small as one character or as big as many pages");
("Any data type under a single quote, double quote or backtick is a string");
```

### 布尔值

布尔值要么是 True，要么是 False。任何比较都会返回一个布尔值，它要么为 true，要么为 false。

布尔数据类型要么是 true 值，要么是 false 值。

**示例：**

```js
true; // if the light is on, the value is true
false; // if the light is off, the value is false
```

### 未定义

在 JavaScript 中，如果我们不为变量赋值，该值是未定义的。除此之外，如果一个函数没有返回任何内容，它就会返回未定义。

```js
let firstName;
console.log(firstName); // undefined, because it is not assigned to a value yet
```

### 空值

JavaScript 中的 Null 意味着一个空值。

```js
let emptyValue = null;
```

## 检查数据类型

要检查特定变量的数据类型，我们使用 **typeof** 运算符。请参见以下示例。

```js
console.log(typeof "Asabeneh"); // string
console.log(typeof 5); // number
console.log(typeof true); // boolean
console.log(typeof null); // object type
console.log(typeof undefined); // undefined
```

## 再次评论

请记住，在 JavaScript 中进行注释类似于其他编程语言。注释对于使您的代码更易读非常重要。

有两种方式可以进行注释：

- _单行注释_

- _多行注释_

```js
// commenting the code itself with a single comment
// let firstName = 'Asabeneh'; single line comment
// let lastName = 'Yetayeh'; single line comment
```

多行注释：

```js
/*
  let location = 'Helsinki';
  let age = 100;
  let isMarried = true;
  This is a Multiple line comment
*/
```

## 变量

变量是数据的“容器”。变量用于在内存位置中“存储”数据。当声明一个变量时，会保留一个内存位置。当将一个值（数据）赋给一个变量时，该内存空间将被填充上这个数据。要声明一个变量，我们使用 _var_、_let_ 或 _const_ 关键字。

对于在不同时间改变的变量，我们使用 _let_。如果数据根本不会改变，我们使用 _const_。例如，圆周率、国家名称、重力等都不会改变，因此可以使用 _const_. 在这个挑战中我们将不再使用 var，并且我也不建议你使用它。这种方式声明的变量容易出错并且存在很多问题。我们稍后会在其他部分（作用域）详细讨论 var、let 和 const 更多内容。目前以上解释足够了。

有效的 JavaScript 变量名必须遵循以下规则：

- JavaScript 变量名不能以数字开头。
- JavaScript 变量量名除了美元符号和下划线外不能包含特殊字符。

- JavaScript 变量名遵循驼峰命名法约定。

- JavaScript 变量名单词之间不能有空格。

以下是有效的 JavaScript 变数示例。

```js
firstName;
lastName;
country;
city;
capitalCity;
age;
isMarried;

first_name;
last_name;
is_married;
capital_city;

num1;
num_1;
_num_1;
$num1;
year2020;
year_2020;
```

列表中的第一个和第二个变量遵循 JavaScript 中声明的驼峰命名约定。在这份材料中，我们将使用驼峰命名变量（单峰骆驼）。我们使用 CamelCase（双峰骆驼）来声明类，我们将在其他部分讨论类和对象。

无效变量示例：

```js
  first-name
  1_num
  num_#_1
```

让我们声明具有不同数据类型的变量。要声明一个变量，我们需要在变量名之前使用 _let_ 或 _const_ 关键字。在变量名后面，我们写一个等号（赋值运算符），然后是一个值（分配的数据）。

```js
// 语法

let 变量名称 = 值;
```

变量名称是存储不同数值的名称。请参阅下面的详细示例。

**已声明变量的示例**

```js
// Declaring different variables of different data types
let firstName = "Asabeneh"; // first name of a person
let lastName = "Yetayeh"; // last name of a person
let country = "Finland"; // country
let city = "Helsinki"; // capital city
let age = 100; // age in years
let isMarried = true;

console.log(firstName, lastName, country, city, age, isMarried);
```

```sh
Asabeneh Yetayeh Finland Helsinki 100 true
```

```js
// Declaring variables with number values
let age = 100; // age in years
const gravity = 9.81; // earth gravity  in m/s2
const boilingPoint = 100; // water boiling point, temperature in °C
const PI = 3.14; // geometrical constant
console.log(gravity, boilingPoint, PI);
```

```sh
9.81 100 3.14
```

```js
// Variables can also be declaring in one line separated by comma, however I recommend to use a seperate line to make code more readble
let name = "Asabeneh",
  job = "teacher",
  live = "Finland";
console.log(name, job, live);
```

```sh
Asabeneh teacher Finland
```

当您在 01-Day 文件夹中运行 _index.html_ 文件时，您应该会看到以下内容：

![Day one](./images/day_1.png)

🌕 你真棒！你刚完成了第一天的挑战，现在正走向伟大。现在为您的大脑和肌肉做一些练习吧。

# 💻 第 1 天：练习

1. 写一个单行注释，内容是“注释可以使代码可读性更好”

2. 再写一个单行注释，内容是“欢迎来到 30 天 JavaScript 挑战”

3. 写一个多行注释，内容是“注释可以使代码可读性更好、易于重用”以及“并提供信息”

4. 创建 variable.js 文件，并声明变量并分配字符串、布尔值、未定义和空数据类型

5. 创建 datatypes.js 文件，并使用 JavaScript 的 **_typeof_** 运算符检查不同的数据类型。检查每个变量的数据类型

6. 声明四个没有分配值的变量

7. 声明四个已经分配了了值的变量

8. 声明变量以存储您的名字、姓氏、婚姻状况、国家和年龄（使用多行）

9. 声明变量以存储您的名字、姓氏、婚姻状况、国家和年龄（使用单行）

10. 声明两个变量 _myAge_ 和 _yourAge_ 并给它们赋初值，并将其记录到浏览器控制台。

```sh
我今年25岁。
你今年30岁。
```

🎉 恭喜！ 🎉

[第 2 天 >>](./02_Day_Data_types/02_day_data_types.md)
