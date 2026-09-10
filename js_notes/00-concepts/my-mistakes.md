# 🕳️ 我的踩坑记录

> 这里记录我**自己真实犯过**的错(不是泛泛知识点)。复习时先扫这里 —— 我最容易在这些地方翻车。
> 每条格式:**错法 → 现象 → 正解 → 教训**,并标注**📍来源**(点开可回到原题)。

---

## A. 方法忘加括号

📍来源:`../04-strings/practice.js` 练习 A(`../04-strings/notes.md` §1)
```js
city.toUpperCase // ❌ 打印出 [Function: toUpperCase],不是结果
city.toUpperCase() // ✅ 加 () 才执行
```
- **现象**:打印出一堆 `[Function: xxx]` 而不是想要的值
- **教训**:**方法是"动作",必须加 `()`**;`.length` 是属性不加括号。分不清就问:这是"数据"还是"动作"?

## B. 模板字符串用错符号

📍来源:`../02-variables/practice.js` 第 6 组(`../01-basics/notes.md` §4)
```js
`我叫 &{myName}` // ❌ 用了 &,原样打印 "我叫 &{myName}"
`我叫 ${myName}` // ✅ 是 $ 不是 &
```
- **教训**:模板插值是 **`$` + `{}`**,不是 `&`。且只在反引号 `` ` `` 里生效。

## C. 方法名拼写错

📍来源:`../04-strings/practice.js` 练习 B
```js
email.spilt('@') // ❌ 报错:email.spilt is not a function
email.split('@') // ✅
```
- **现象**:`X is not a function`
- **教训**:看到 `is not a function`,先检查**拼写**。

## D. "能算 ≠ 能看见"(反复犯)

📍来源:`../04-strings/practice.js` 练习 E、`../06-arrays/practice.js` 练习 E(`../01-basics/notes.md` §5)
```js
array.join('-') // ❌ 算出来了但没打印,屏幕啥都没有
console.log(array.join('-')) // ✅
```
- **教训**:文件里**必须 `console.log`** 才看得到结果。裸表达式会算但不显示。

## E. 方法返回值没接住(反复犯)⭐

📍来源:`../04-strings/practice.js` 练习 D/E、`../06-arrays/practice.js` 练习 E
```js
sentence.split(' ') // ❌ 拆了但没接住,等于白拆
const words = sentence.split(' ') // ✅ 用变量接住
```
- **教训**:`slice / split / join / map / toUpperCase...` 都**返回新值、不改原**,必须用变量接住或直接打印。

## F. 改原 vs 返回新,分不清 ⭐⭐

📍来源:`../06-arrays/practice.js` 练习 D/E(`../06-arrays/notes.md` §4-5)

- **改原数组**:`push / pop / shift / unshift / splice`
- **返回新值(不改原)**:`slice / split / join / map / filter`
- `splice` 尤其坑:**返回的是"被删元素",不是修改后的数组** → 插入后要打印**原数组**,别打印返回值
```js
q.splice(1, 0, 'x') // 改的是 q 本身
console.log(q) // ✅ 打印原数组
console.log(q.splice(...)) // ❌ 打印的是被删元素([])
```

## G. slice 用 length-1 丢了最后一个字符

📍来源:`../04-strings/practice.js` 练习 D(`../04-strings/notes.md` §4)
```js
name.slice(1, name.length - 1) // ❌ -1 少取一位
name.slice(1) // ✅ 省略 end 取到结尾
```
- **教训**:`slice` **不含 end**;要取到结尾直接省略第二个参数。

## H. 变量没声明就赋值

📍来源:`../06-arrays/practice.js` 练习 E(`../02-variables/notes.md` §2-3)
```js
array = sentence.split(' ') // ❌ 裸奔,泄漏成全局变量(严格模式报错)
const array = sentence.split(' ') // ✅ 必须 const/let 声明
```
- **教训**:变量**一定先声明**。

## I. 引号不配对

📍来源:`../07-objects/practice.js` 练习 A(`../01-basics/notes.md` §4)
```js
title: "JavaScript' // ❌ 双开单关,整个文件从这里崩
title: "JavaScript" // ✅ 开关同一种
```
- **现象**:从这行起后面全报错
- **教训**:引号**开和关必须同种**。

## J. 变量名定义和使用对不上

📍来源:`../07-objects/practice.js` 练习 C
```js
const cat = {...}
Object.values(car) // ❌ car is not defined(定义 cat 用 car)
```
- **现象**:`X is not defined`
- **教训**:看到 `is not defined`,检查**名字是否一致**(typo)。

## K. 下标从 0 开始,越界读 undefined ⭐

📍来源:`../07-objects/practice.js` 练习 E(`../06-arrays/notes.md` §1)
```js
// 3 个元素:people[0] people[1] people[2]
people[3].name // ❌ 越界:Cannot read properties of undefined
```
- **教训**:下标**从 0 开始**,"第 N 个" = `[N-1]`;最后一个 = `[length-1]`。

## L. 对象方法用了箭头函数,this 失效 ⭐⭐

📍来源:`../07-objects/practice.js` 练习 D(`../07-objects/notes.md` §7)
```js
describe: () => this.name        // ❌ 箭头函数没有自己的 this → undefined
describe: function () { return this.name } // ✅ 用 function
describe: function () => {...}   // ❌ 语法错:function 和 => 不能同时写
```
- **教训**:**对象方法用 `function`,不用箭头 `=>`**(箭头没有自己的 this)。两种写法只能选一种。

## M. const 同名声明两次

📍来源:`../07-objects/practice.js` 练习 D;又见 `../10-functions.js` 练习 F
```js
const student = {...}
const student = {...} // ❌ Identifier 'student' has already been declared
```
- **教训**:同作用域 `const` 不能重名;想留"错误对照"就**注释掉**旧的,别当活代码。
- **重演情境(10章F)**:迭代改进时【新写了一版更好的 `const repeat`,却忘了删/注释掉旧版】
  → 两个活的 `const repeat` → 整个文件直接报错跑不了。
  改进代码时:**旧版要么删,要么注释成 ❌ 对照,绝不能两个都当活代码**。

## N. 以为"代码块能算出值、会自动返回"⭐⭐(概念推错,非手滑)

📍来源:`../10-functions.js` 概念区第 2 节(箭头函数)
```js
const add = (a, b) => { a + b }   // ❌ 以为块算出 a+b 就会返回 → 实际返回 undefined
const add = (a, b) => a + b       // ✅ 无 {}:右边是表达式(值),自动返回
const add = (a, b) => { return a + b } // ✅ 有 {}:块里必须手写 return
```
- **现象**:函数默默返回 `undefined`,**不报错**(最难查)
- **根源**:核心一句 —— **`=>` 右边期望一个「表达式」(能算出值的东西)**。
  - 表达式(`a+b`)=【有值】→ 直接返回;能赋值 `const x = a+b` ✅
  - 代码块(`{...}`)=【一堆动作,不产值】→ 不能赋值 `const x = {a+b}` ❌ 报错
  - 所以 `{ a+b }` 里那个 `a+b` 被算出来**却被丢弃**,函数无 return → undefined
- **教训**:别把"代码块"当"能出值的表达式"。**块不产值**,所以进了 `{}` 就必须自己 `return`。

## O. 箭头函数返回对象忘加括号 ⭐

📍来源:`../10-functions.js` 概念区第 2 节
```js
const make = (name) => { name: name }   // ❌ { 被当代码块,返回 undefined(不报错!)
const make = (name) => ({ name: name }) // ✅ () 逼它当表达式 → 返回对象
```
- **现象**:想返回对象,却得到 `undefined`,且**不报错**
- **根源**:对象字面量和代码块都以 `{` 开头,`=> {` 会被优先当**代码块**;
  里面的 `name:` 又被当成**标签语句**(JS 给循环起名字的老语法,`名字:`),于是静默返回 undefined
- **教训**:箭头函数**直接返回对象**,用 `()` 把对象裹起来,逼回"表达式"语境。

## P. 用 `^` 当乘方(其实是按位异或)⭐(能跑不报错)

📍来源:`../11-higher-order-functions.js` 练习 E
```js
8 ** 2  // 64  ✅ 乘方用 **(或 n*n)
8 ^ 2   // 10  ❌ ^ 是"按位异或(XOR)",不是乘方!8^2=10、10^2=8
```
- **现象**:算出个莫名其妙的数,**不报错**(最难发现),和平方毫无关系
- **教训**:JS 的乘方是 `**`;`^` 是位运算(异或)。从数学/别的语境迁移来的人常栽。

## Q. `arr[a, b]` 当成切片(其实是逗号运算符,取单个)⭐

📍来源:`../11-higher-order-functions.js` 练习 F
```js
s[1, s.length-1] // ❌ 逗号运算符只取最后一个值 → 等于 s[s.length-1],取【单个字符】
s.slice(1)       // ✅ 切片要用 .slice(见 04 章)
```
- **现象**:想切一段,却只得到一个字符
- **教训**:JS 没有 `[start, end]` 切片语法;`[]` 里的逗号是"逗号运算符"。
  逗号运算符 `a, b`:**从左到右全都算一遍,但整个表达式的值 = 最后一个**
  (`(1,2,3)` 的值是 `3`)。所以 `s[1, len-1]` = `s[len-1]`,取单个字符。
  切字符串/数组一律用 `.slice(start, end)`。日常几乎用不到逗号运算符,认得它别踩坑即可。

---

## 🔁 高频报错 → 秒查表

| 报错信息 | 最可能的原因 | 看哪条 |
|---|---|---|
| `X is not a function` | 方法名拼错 | C |
| `X is not defined` | 变量名 typo / 没声明 | H、J |
| `Cannot read properties of undefined` | 下标越界 / 键不存在 | K |
| `has already been declared` | const 重名 | M |
| 打印出 `[Function: xxx]` | 方法忘加 `()` | A |
| 屏幕啥都没有 | 忘了 console.log / 没接住返回值 | D、E |
| 从某行起全报错 | 引号没配对 | I |
| 函数返回 `undefined`(不报错) | `{}` 里忘 return / 箭头返回对象没加 `()` | N、O |
| 算出莫名其妙的数(不报错) | `^` 当乘方(实为异或)/ `[a,b]` 当切片 | P、Q |
