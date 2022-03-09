# 자바스크립트 30일 정복 😎

| # Day |                                                                  Topics                                                                  |
| ----- | :--------------------------------------------------------------------------------------------------------------------------------------: |
| 01    |                                                           [소개](./readMe.md)                                                            |
| 02    |                                            [자료형](./02_Day_Data_types/02_day_data_types.md)                                            |
| 03    |                          [불리언, 연산자, 날짜](./03_Day_Booleans_operators_date/03_booleans_operators_date.md)                          |
| 04    |                                          [조건문](./04_Day_Conditionals/04_day_conditionals.md)                                          |
| 05    |                                                 [배열](./05_Day_Arrays/05_day_arrays.md)                                                 |
| 06    |                                                 [반복문](./06_Day_Loops/06_day_loops.md)                                                 |
| 07    |                                              [함수](./07_Day_Functions/07_day_functions.md)                                              |
| 08    |                                                [객체](./08_Day_Objects/08_day_objects.md)                                                |
| 09    |                              [고차 함수](./09_Day_Higher_order_functions/09_day_higher_order_functions.md)                               |
| 10    |                                       [집합과 맵](./10_Day_Sets_and_Maps/10_day_Sets_and_Maps.md)                                        |
| 11    |                [구조 분해 할당과 전개 연산자](./11_Day_Destructuring_and_spreading/11_day_destructuring_and_spreading.md)                |
| 12    |                                 [정규표현식](./12_Day_Regular_expressions/12_day_regular_expressions.md)                                 |
| 13    |                           [콘솔 객체 메서드](./13_Day_Console_object_methods/13_day_console_object_methods.md)                           |
| 14    |                                     [오류 핸들링](./14_Day_Error_handling/14_day_error_handling.md)                                      |
| 15    |                                               [클래스](./15_Day_Classes/15_day_classes.md)                                               |
| 16    |                                                   [JSON](./16_Day_JSON/16_day_json.md)                                                   |
| 17    |                                        [웹 저장소](./17_Day_Web_storages/17_day_web_storages.md)                                         |
| 18    |                                             [프로미스](./18_Day_Promises/18_day_promises.md)                                             |
| 19    |                                              [클로져](./19_Day_Closures/19_day_closures.md)                                              |
| 20    |                              [클린 코드 작성법](./20_Day_Writing_clean_codes/20_day_writing_clean_codes.md)                              |
| 21    |                                                    [DOM](./21_Day_DOM/21_day_dom.md)                                                     |
| 22    |                           [DOM 객체 조작](./22_Day_Manipulating_DOM_object/22_day_manipulating_DOM_object.md)                            |
| 23    |                                   [이벤트 리스너](./23_Day_Event_listeners/23_day_event_listeners.md)                                    |
| 24    |                          [미니 프로젝트: 태양계](./24_Day_Project_solar_system/24_day_project_solar_system.md)                           |
| 25    | [미니 프로젝트: 세계 도시 데이터 시각화 1](./25_Day_World_countries_data_visualization_1/25_day_world_countries_data_visualization_1.md) |
| 26    | [미니 프로젝트: 세계 도시 데이터 시각화 2](./26_Day_World_countries_data_visualization_2/26_day_world_countries_data_visualization_2.md) |
| 27    |                      [미니 프로젝트: 포트폴리오](./27_Day_Mini_project_portfolio/27_day_mini_project_portfolio.md)                       |
| 28    |                     [미니 프로젝트: 리더보드](./28_Day_Mini_project_leaderboard/28_day_mini_project_leaderboard.md)                      |
| 29    |         [미니 프로젝트: 캐릭터 움직이기](./29_Day_Mini_project_animating_characters/29_day_mini_project_animating_characters.md)         |
| 30    |                                [최종 프로젝트](./30_Day_Mini_project_final/30_day_mini_project_final.md)                                 |

🇬🇧 [English](../readMe.md)
🇪🇸 [Spanish](../Spanish/readme.md)
🇷🇺 [Russian](../RU/README.md)

[2일차 >>](./02_Day_Data_types/02_day_data_types.md)

![Thirty Days Of JavaScript](../images/day_1_1.png)

- [자바스크립트 30일 정복](#30-days-of-javascript)
- [📔 1일차](#📔-1일차)
  - [소개](#소개)
  - [요구 사항](#요구사항)
  - [설정](#설정)
    - [Node.js 설치](#Node.js-설치)
    - [브라우저](#브라우저)
      - [구글 크롬 설치](#구글-크롬-설치)
      - [구글 크롬 콘솔창 열기](#구글-크롬-콘솔창-열기)
      - [콘솔창에서 코드 작성해 보기](#콘솔창에서-코드-작성해-보기)
        - [Console.log로 출력하기](#Console.log로-출력하기)
        - [Console.log로 여러 인자 출력하기](#Console.log로-여러-인자-출력하기)
        - [주석](#주석)
        - [문법](#문법)
      - [산술](#산술)
    - [코드 편집기](#코드-편집기)
      - [Visual Studio Code 설치](#Visual-Studio-Code-설치)
      - [Visual Studio Code 사용법](#Visual-Studio-Code-사용법)
  - [웹 페이지에서 자바스크립트 코드 적용](#웹-페이지에서-자바스크립트-코드-적용)
    - [인라인 자바스크립트](#인라인-자바스크립트)
    - [내부 자바스크립트](#내부-자바스크립트)
    - [외부 자바스크립트](#외부-자바스크립트)
    - [여러 외부 자바스크립트](#여러-외부-자바스크립트)
  - [자료형 소개](#자료형-소개)
    - [숫자](#숫자)
    - [문자열](#문자열)
    - [불리언](#불리언)
    - [Undefined](#Undefined)
    - [Null](#Null)
  - [자료형 확인하기](#자료형-확인하기)
  - [주석을 다시](#주석을-다시)
  - [변수](#변수)
- [💻 1일차: 실습](#-1일차-실습)

# 📔 1일차

## 소개

자바스크립트 30일 정복 프로그래밍 챌린지에 참여 결정하신 것을 축하드립니다. 이번 챌린지에서는 자바스크립트 프로그래머가 되기 위해서 필요한 모든 것들과, 일반적인 프로그래밍에 대한 개념을 다룹니다. 해당 챌린지를 모두 완료하셨다면, 30DaysOfJavaScript 프로그래밍 챌린지 완료 인증서를 받게 됩니다. 도움이 필요하거나, 다른 사람을 도와주고 싶은 경우 [텔레그램 그룹](https://t.me/ThirtyDaysOfJavaScript)에 연락을 주세요.

**자바스크립트 30일 정복 챌린지**는 초보자와 숙련된 자바스크립트 개발자를 위한 지침서입니다. 자바스크립트에 오신 것을 환영합니다. 자바스크립트는 웹을 다루는 언어입니다. 저는 여러분들을 가르치고 사용하는 것을 즐깁니다. 여러분도 그렇게 되셨으면 좋겠습니다.

자바스크립트 30일 정복 챌린지를 단계별로 진행하면서, 인류 역사상 가장 인기있는 자바스크립트를 배우게 될 것입니다.
자바스크립트는 **_상호작용을 하는 웹사이트를 만들거나, 모바일 애플리케이션 혹은 데스크탑 애플리케이션, 게임_**을 만드는 데에 사용이 됩니다. 요즈음 자바스크립트는 **_머신러닝과 AI_**를 하는데에도 사용이 됩니다. **_자바스크립트(JS)_**는 최근 몇 년간 인기가 상승하여 선두를 달리고 있습니다. 실제로 깃헙에서 6년동안 가장 많이 사용되고 있습니다.

## 요구사항

프로그래밍에 대한 선수 지식은 해당 챌린지에서 필요하지 않습니다. 대신 아래에 대한 요구사항이 필요합니다.

1. 열정
2. 컴퓨터
3. 인터넷
4. 브라우저
5. 코드 편집기

## 설정

저는 여러분이 개발자, 컴퓨터, 인터넷이 되기 위해서 강한 욕구와 동기부여가 있다고 믿습니다. 만약 이런 것들을 가지고 있다면, 해당 챌린지를 시작할 수 있습니다.

### Node.js 설치

여러분은 Node.js가 당장은 필요 없지만, 나중을 위해 설치가 필요합니다. [해당 사이트](https://nodejs.org/en/)에서 설치를 진행해 주세요.

![노드 다운로드](../images/download_node.png)

다운로드가 끝이 나면 파일을 더블 클릭해서 열고 설치합니다.

![노드 설치](../images/install_node.png)

우리의 로컬 컴퓨터에 터미널 창을 열거나, 명령 프롬포트를 통해서 노드가 설치되어 있는지 알 수 있습니다.

```sh
asabeneh $ node -v
v12.14.0
```

해당 챌린지을 제작할 때에는 Node 12.14.0 버전을 사용했으나, 현재는 Node 14.17.6 버전을 권장하고 있습니다.

### 브라우저

브라우저는 많은 것들이 존재합니다. 그러나, 우리는 구글 크롬을 강력하게 권장합니다.

#### 구글 크롬 설치

[구글 크롬](https://www.google.com/chrome/)이 설치되어있지 않다면, 설치를 해 주세요. 우리는 브라우저 콘솔창에서 간단한 자바스크립트 코드를 작성할 수 있습니다. 그러나 우리는 애플리케이션을 개발하기 위해 브라우저 콘솔을 사용하지 않습니다.

![구글 크롬](../images/google_chrome.png)

#### 구글 크롬 콘솔창 열기

브라우저 오른쪽 상단에 있는 점 3개를 클릭하고 **추가 도구 -> 개발자 도구**를 선택하거나 바로 가기 키를 사용하여 구글 크롬 콘솔창을 열 수 있습니다. 저는 단축키 사용을 선호합니다.

![Opening chrome](../images/opening_developer_tool.png)

콘솔창을 열기위한 단축키는 아래와 같습니다.

```sh
Mac
Command+Option+J

Windows/Linux:
Ctl+Shift+J
```

![Opening console](../images/opening_chrome_console_shortcut.png)

콘솔창을 열고 나서, 표시된 버튼을 경험해 보세요. 우리는 콘솔창에서 많은 시간을 보내게 될 것 입니다. 콘솔창은 자바스크립트 코드가 저장되는 위치입니다. 구글 크롬의 콘솔창의 V8 엔진은 자바스크립트 코드를 기계 코드로 변경시켜줍니다.

콘솔창에서 간단한 자바스크립트 코드 예제를 적어봅시다.

![write code on console](../images/js_code_on_chrome_console.png)

#### 콘솔창에서 코드 작성해 보기

우리는 구글 크롬이 아니더라도, 콘솔창에서 간단한 코드를 작성해볼 수 있습니다. 그러나 이 챌린지를 위해서는 오직 구글 크롬 콘솔창에만 집중합시다. 콘솔창을 열어 주세요.

```sh
Mac
Command+Option+I

Windows:
Ctl+Shift+I
```

##### Console.log로 출력하기

우리의 첫 번째 코드는, 내장되어있는 함수인 **console.log()**입니다. 인수로 입력 데이터를 전달하면, 해당 함수가 결과물을 콘솔창에 표시합니다. 우리는 console.log() 함수에 'Hello, World'를 인풋으로 전달을 해 봅시다.

```js
console.log('Hello, World!');
```

##### Console.log로 여러 인자 출력하기

**console.log()** 함수는 반점(comma)로 여러개의 인자를 구분할 수 있습니다. 문법은 다음과 같습니다. **console.log(param1, param2, param3)**

![console log multiple arguments](../images/console_log_multipl_arguments.png)

```js
console.log('Hello', 'World', '!');
console.log('HAPPY', 'NEW', 'YEAR', 2020);
console.log('Welcome', 'to', 30, 'Days', 'Of', 'JavaScript');
```

위의 예시 코드와 같이, *console.log()*함수는 여러 인자를 사용할 수 있습니다.

축하드립니다! 당신은 *console.log()*를 이용해서 첫 자바스크립트 코드를 작성했습니다.

##### 주석

우리는 우리의 코드에 주석을 추가합니다. 주석은 코드의 가독성과, 코드의 설명을 남기는데에 매우 중요합니다. 자바스크립트는 코드 내부에 주석을 실행하지 않습니다. 자바스크립트에서 //로 시작하는 것은 주석이며, /\*로 시작해서 \*/로 닫히는 것 또한 주석이 될 수 있습니다.

**한 줄 주석 예시**

// 첫 번째 주석입니다.  
// 두 번째 주석입니다.
// 한 줄 주석입니다.

**여러 줄 주석 예시**

/_
여러 줄 주석할 때 사용합니다.
여러줄 주석은 여러 줄을 입력할 수 있습니다.
자바스크립트는 웹을 다루는 프로그래밍 언어입니다.
_/

##### 문법

프로그래밍 언어는 인간의 언어와 유사합니다. 영어 혹은 다른 모든 언어는 단어부터 시작해서 문법, 문장, 복잡한 문장을 사용하고 의미있는 메시지들을 전달합니다. 영어에서의 구문의 의미는 언어에서 잘 만들어진 문장을 만들기 위한 단어와 문법의 배열입니다. 문법의 기술적인 정의는 컴퓨터 언어에서의 문장 구조입니다. 프로그래밍 언어에는 문법이 있습니다. 자바스크립트와, 다른 프로그래밍 언어는 문법을 가지고 있습니다. 우리는 자바스크립트가 이해할 수 있는 문법을 작성하지 않는다면, 해당 코드는 여러 가지 오류를 일으킬 것입니다. 오류에 대한 다양한 종류는 다음에 살펴봅시다. 지금부터는 간단한 문법 오류를 살펴봅시다.

![Error](../images/raising_syntax_error.png)

고의적으로 실수를 저질렀습니다. 그 결과 콘솔창은 구문 오류를 발생시키고 있습니다. 실제로 이런 구문은 매우 유익합니다. 어떤 실수가 일어났는지 알려줍니다. 오류 피드백에 대한 가이드라인을 읽으면서 우리는 구문을 수정하고 문제를 해결할 수 있습니다. 프로그램으로부터 발생한 오류를 구별하고 제거하는 과정을 디버깅이라고 말합니다. 아래 오류를 수정해 봅시다:

```js
console.log('Hello, World!');
console.log('Hello, World!');
```

지금까지, 우리는 _console.log()_ 함수를 통해서 문자열을 표시하는 방법을 다루었습니다. _console.log()_ 를 이용해서 문자열을 입력하려면 작은 따옴표나, 큰 따옴표 혹은 백틱 따옴표안에 들어가있어야 합니다.

**예시:**

```js
console.log('Hello, World!');
console.log('Hello, World!');
console.log(`Hello, World!`);
```

#### 산술

이번에는 구글 크롬 콘솔창에서 숫자 자료형을 _console.log()_ 로 작성하는 법에 대해서 공부해 봅시다.

문자열외에도 자바스크립트를 이용해서 수학적인 계산도 가능합니다. 다음과 같은 간단한 계산을 해 봅시다.
콘솔창은 **_console.log()_** 함수 없이 직접 인수를 사용할 수 있습니다. 그러나 앞선 말한 것은 함수 사용이 필수적인 텍스트 편집기에서 일어나기 때문에, 맨 앞 부분에 포함되어 있습니다. 콘솔창을 통해서 명령어들을 가지고 놀 수 있습니다.

![Arithmetic](../images/arithmetic.png)

```js
console.log(2 + 3); // 덧셈
console.log(3 - 2); // 뺄셈
console.log(2 * 3); // 곱셈
console.log(3 / 2); // 나눗셈
console.log(3 % 2); // 나눗셈 - 나머지 구하기
console.log(3 ** 2); // 제곱 3 ** 2 == 3 * 3
```

### 코드 편집기

우리는 브라우저의 콘솔에서 코드를 작성할 수 있지만, 큰 프로젝트에서는 바람직하지 않습니다. 실제 일하는 환경에서 개발자는 코드를 작성하기 위해서 서로 다른 코드 편집기를 사용합니다. 해당 자바스크립트 30일 정복 챌린지에서는 Visual Studio Code를 사용할 예정입니다.

#### Visual Studio Code 설치

Visual Studio Code는 매우 유명한 오픈 소스 텍스트 편집기입니다. 우리는 [Visual Studio Code](https://code.visualstudio.com/)를 다운로드 하는 것을 권장합니다. 그렇지만 다른 편집기가 마음에 든다면, 원하시는 대로 사용하면 됩니다.

![Vscode](../images/vscode.png)

Visual Studio Code를 설치했다면, 실제로 사용해 봅시다.

#### Visual Studio Code 사용법

Visual Studio Code의 아이콘을 더블 클릭해서 실행합시다. 실행이 되었다면 다음과 같은 화면을 볼 수 있습니다. 라벨이 적혀져있는 아이콘들을 사용해 봅시다.

![Vscode ui](../images/vscode_ui.png)

![Vscode add project](../images/adding_project_to_vscode.png)

![Vscode open project](../images/opening_project_on_vscode.png)

![script file](../images/scripts_on_vscode.png)

![Installing Live Server](../images/vsc_live_server.png)

![running script](../images/running_script.png)

![coding running](../images/launched_on_new_tab.png)

## 웹 페이지에서 자바스크립트 코드 적용

자바스크립트 코드는 웹 페이지에 세 가지 방법으로 적용할 수 있습니다:

- **인라인 자바스크립트**
- **내부 자바스크립트**
- **외부 자바스크립트**
- **여러 외부 자바스크립트**

해당 섹션에서는 웹페이지에 자바스크립트 코드를 추가하는 각 방법을 다룰 예정입니다.

### 인라인 자바스크립트

데스크탑 등 아무 곳에서 30DaysOfJS라는 이름으로 프로젝트 폴더를 만들어 주세요. 만들고 나서, **_index.html_**을 생성합시다. 아래의 코드를 붙여넣고 크롬과 같은 브라우저로 열어봅시다.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>30DaysOfScript:Inline Script</title>
  </head>
  <body>
    <button onclick="alert('Welcome to 30DaysOfJavaScript!')">
      클릭해 주세요
    </button>
  </body>
</html>
```

지금 첫 인라인 자바스크립트를 작성했습니다. 우리는 자바스크립트 내장 함수 _alert()_ 를 이용해서 경고 메시지가 뜨게할 수 있습니다.

### 내부 자바스크립트

내부 자바스크립트는 _head_ 혹은 _body_ 에서 작성할 수 있습니다. 그러나, HTML문서에서 body에 넣는 것이 더 선호 됩니다.
첫 번째로, 페이지의 head부분에 작성해 봅시다.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>30DaysOfScript:Internal Script</title>
    <script>
      console.log('Welcome to 30DaysOfJavaScript');
    </script>
  </head>
  <body></body>
</html>
```

우리는 위와 같이 내부 자바스크립트를 사용합니다. 위에서 언급했듯이, body부분에 자바스크립트 코드를 넣는 것이 더 선호됩니다.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>30DaysOfScript:Internal Script</title>
  </head>
  <body>
    <button onclick="alert('Welcome to 30DaysOfJavaScript!');">Click Me</button>
    <script>
      console.log('Welcome to 30DaysOfJavaScript');
    </script>
  </body>
</html>
```

브라우저의 콘솔창을 열고 console.log()의 출력값을 확인해 봅시다.

![js code from vscode](../images/js_code_vscode.png)

### 외부 자바스크립트

내부 자바스크립트 방식과 유사하게, 외부 자바스크립트 방식은 header 혹은 body에 존재합니다. 그러나 이 역시 body에 적는 것이 선호됩니다.
우선, .js 확장자를 가진 자바스크립트 파일을 생성해야 합니다. .js 확장자로 끝나는 모든 파일은 자바스크립트 파일입니다. introduction.js 프로젝트 폴더 내부에 파일을 생성하고 아래와 같은 코드를 넣어 봅시다. 그리고 본문 하단에 이 .js파일을 연결해 봅시다.

```js
console.log('Welcome to 30DaysOfJavaScript');
```

_head_ 에서의 외부 자바스크립트:

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

_body_ 에서의 외부 자바스크립트:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>30DaysOfJavaScript:External script</title>
  </head>
  <body>
    <!-- header 혹은 body 어디에 넣든 상관이 없습니다. -->
    <!-- 그러나, 여기에 넣는 것이 선호되는 편입니다. -->
    <script src="introduction.js"></script>
  </body>
</html>
```

브라우저의 콘솔창을 열고 console.log()의 출력값을 확인해 봅시다.

### 여러 외부 자바스크립트

우리는 한 개의 웹 페이지에 여러 자바스크립트 파일을 연결할 수 있습니다.
프로젝트 폴더 내에 helloworld.js 파일을 생성하고 아래 코드를 작성해 봅시다.

```js
console.log('Hello, World!');
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

_main.js 파일은 다른 모든 자바스크립트 파일 아래에 있어야 합니다_ 이것은 매우 중요합니다.

![Multiple Script](../images/multiple_script.png)

## 자료형 소개

자바스크립트와 다른 프로그래밍 언어는 여러 자료형들이 있습니다. 다음은 자바스크립트 기본 자료형입니다: _문자열, 숫자, 불리언, undefined, null_ 추가로 _Symbol_ 이 있습니다.

### 숫자

- 정수 자료형: 정수 (음수, 0, 양수) 숫자
  예시:
  ... -3, -2, -1, 0, 1, 2, 3 ...
- 실수 자료형: 소수 숫자
  예시
  ... -3.5, -2.25, -1.0, 0.0, 1.1, 2.2, 3.5 ...

### 문자열

작은 따옴표, 큰 따옴표, 백틱 따옴표 사이에 있는 한 개 혹은 그 이상의 모음입니다.

**예시:**

```js
'Asabeneh';
'Finland';
'JavaScript is a beautiful programming language';
'I love teaching';
'I hope you are enjoying the first day'`We can also create a string using a backtick`;
('A string could be just as small as one character as big as many pages');
```

### 불리언

불리언 자료형은 참값과 거짓값이 있습니다. 모든 비교는 참 혹은 거짓값을 갖는 불리언 값을 반환합니다.

불리언 자료형은 참 혹은 거짓입니다.

**예시:**

```js
true; // 불이 켜져있다면 값은 true입니다.
false; // 불이 꺼져있다면 값은 true입니다.
```

### Undefined

자바스크립트에서 변수에 아무 값도 할당하지 않으면, 변수는 undefined값을 가집니다. 덧붙여 얘가하면 함수가 아무 값도 반환하지 않으면, 그것은 undefined를 반환합니다.

```js
let firstName;
console.log(firstName); // undefined이다. 할당이 되지 않았기 때문이다.
```

### Null

자바스크립트에서 값이 비어있으면 변수는 null값을 가집니다.

```js
let emptyValue = null;
```

## 자료형 확인하기

특정 변수의 자료형을 확인하고 싶으면 **typeof** 연산자를 사용하면 됩니다. 예시를 확인해 봅시다.

```js
console.log(typeof 'Asabeneh'); // 문자열
console.log(typeof 5); // 숫자
console.log(typeof true); // 불리언
console.log(typeof null); // null
console.log(typeof undefined); // undefined
```

## 주석을 다시

자바스크립트는 다른 프로그래밍언어처럼 주석을 달 수 있던 것을 기억해 봅시다. 주석은 가독성을 위해서 매우 중요합니다.
주석에는 두 방법이 있습니다.

- _한 줄 주석_
- _여러 줄 주석_

한 줄 주석:

```js
// 한 줄 주석으로 코드 자체에 주석 달기
// let firstName = 'Asabeneh'; 한 줄 주석
// let lastName = 'Yetayeh'; 한 줄 주석
```

여러 줄 주석:

```js
/*
  let location = 'Helsinki';
  let age = 100;
  let isMarried = true;
  This is a Multiple line comment
*/
```

## 변수

변수는 데이터의 _컨테이너_ 입니다. 변수는 메모리 공간에 데이터를 저장할 때 사용합니다. 우리가 변수를 선언하면, 메모리가 할당이 됩니다. 변수에 값을 할당하면은, 메모리 주소는 데이터로 채워집니다. 변수를 선언하기 위해서는 _var_, _let_, _const_ 키워드를 사용합니다.

프로그램이 돌아가면서 변수의 값이 바뀌는 경우, _let_ 키워드를 사용합니다. 만약 변수의 값이 아예 바뀌지 않을 것이라면, _const_ 키워드를 사용합니다. 예로들어 PI, 국가명, 중력은 변하지 않으므로 _const_ 를 사용합니다. 우리는 이 챌린지에서 _var_ 키워드는 사용하지 않을 것이고, 사용하지 않는 것을 권장합니다. 그것은 많은 약점을 가지고 있고, 오류를 발생하기 쉬운 방법입니다. 각 키워드의 자세한 사항, 다른 범위(scope)에서 다음에 알아봅시다. 지금은 위에서 언급한 부분이면 충분합니다.

유효한 자바스크립트 변수 이름을 위해서는 아래와 같은 규칙을 따라야합니다:

- 숫자로 시작하지 않습니다.
- 달러 기호($), 밑줄(\_)을 제외한 특수문자를 사용하면 안됩니다.
- camelCase 네이밍 컨벤션을 따릅니다.
- 변수 이름 단어 사이에 공백이 없어야 합니다.

자바스크립트 변수를 올바르게 이름짓는 법을 예시를 통해 확인해 봅시다.

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

첫 번째와 두 번째 변수들은 camelCase 네이밍컨벤션을 따릅니다. 우리 자료에서는 camelCase를 사용할 예정입니다.

다음은 적절하지 못한 예시입니다:

```sh
  first-name
  1_num
  num_#_1
```

서로 다른 유형의 데이터로 변수를 선언합시다. 변수를 선언하렴녀 _let_, _const_ 키워드를 사용합니다. 변수 이름 뒤에 등호와 값을 사용해 봅시다.

```js
// Syntax
let nameOfVariable = value;
```

**Examples of declared variables**

```js
// 다른 자료형을 가지고 있는 변수 선언
let firstName = 'Asabeneh'; // 이름
let lastName = 'Yetayeh'; // 성
let country = 'Finland'; // 나라
let city = 'Helsinki'; // 수도
let age = 100; // 나이
let isMarried = true; // 결혼 여부

console.log(firstName, lastName, country, city, age, isMarried);
```

```sh
Asabeneh Yetayeh Finland Helsinki 100 true
```

```js
// 각각 다른 숫자 자료형 선언
let age = 100; // 정수 (나이)
const gravity = 9.81; // 실수 (중력)
const boilingPoint = 100; // 정수 (끓는 점)
const PI = 3.14; // 실수 (파이)
console.log(gravity, boilingPoint, PI);
```

```sh
9.81 100 3.14
```

```js
// 쉼표(,)를 통해 변수를 구분해서 정의할 수 있습니다.
let name = 'Asabeneh', // 이름
  job = 'teacher', // 직업
  live = 'Finland'; // 사는 곳
console.log(name, job, live);
```

```sh
Asabeneh teacher Finland
```

01-Day 폴더에서 _index.html_ 파일을 실행하면 다음과 같은 메시지가 나타납니다.

![Day one](../images/day_1.png)

🌕 당신은 대단합니다! 1일차 도전을 완료했고, 우리는 멋져지고 있습니다. 이제 뇌와 근육을 운동해 봅시다!

# 💻 1일차: 실습

1. 다음의 의미를 갖는 주석을 만들어 봅시다. _주석은 코드를 읽을 수 있게 만듭니다._
2. 또 다른 주석을 만들어 봅시다. _30DaysOfJavascript에_ 오신 것을 환영합니다.
3. 여러 줄 주석을 사용해 봅시다. _주석은 읽기 편하고, 재사용하기 쉽고, 정보를 담고 있습니다_
4. variable.js 파일을 만들고, 문자열 변수, 불리언 변수, undefined 변수, null 변수를 선언해 봅시다.
5. datatype.js 파일을 만들고 **_typeof_** 연산을 통해서 데이터의 자료형을 확인해 봅시다. 모든 변수를 확인합시다!
6. 값을 할당하지 않고 변수를 만들어 봅니다.
7. 값을 할당하면서 변수를 만들어 봅니다.
8. 변수 성, 이름, 결혼 여부, 사는 곳, 나이를 여러 줄로 선언해 봅시다.
9. 변수 성, 이름, 결혼 여부, 사는 곳, 나이를 각각 한 줄로 선언해 봅시다.
10. 두 변수 _myAge_ 와 _yourAge_ 를 만들어서 초기값을 할당하고, 콘솔창에 띄어봅시다.

```sh
I am 25 years old.
You are 30 years old.
```

🎉 축하드립니다 ! 🎉

[Day 2 >>](./02_Day_Data_types/02_day_data_types.md)
