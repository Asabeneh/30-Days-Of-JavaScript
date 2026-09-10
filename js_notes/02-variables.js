// 02 · 变量与数据类型
// 学练复习一体:概念总结 → 示范 → 轮到你
// 跑法:Quokka / 右上角 ▷ / node 本文件
// 示范区每行后注释是【预期输出】,跑完自己对答案

// ═════ 概念总结 ═════
//
// 1. 什么是变量
//    变量就是给数据起个名字,方便反复使用和修改。
//      let age = 18     // 把 18 存进名叫 age 的盒子
//      age = 19         // 改成 19
//
// 2. let / const / ~~var~~ ⭐
//    ┌────────┬──────────┬──────────────────────────────────┐
//    │ 关键字 │ 能改值吗 │ 什么时候用                       │
//    ├────────┼──────────┼──────────────────────────────────┤
//    │ const  │ ❌ 不能  │ 默认首选,值不变的都用它         │
//    │ let    │ ✅ 能改  │ 需要改变的值(计数器、累加等)   │
//    │ var    │ ✅ 能改  │ ⚠️ 老写法,有坑,别用            │
//    └────────┴──────────┴──────────────────────────────────┘
//    原则:优先 const,确实要改再换 let。防手滑改错,代码也更好读。
//      const PI = 3.14   // 常量,不会变
//      let count = 0     // 会变的用 let;count = count + 1 ✅
//      // PI = 3.15      // ❌ 报错:const 不能重新赋值
//    ⚠️ var 为啥"有坑"?一个典型:变量声明前就用它,var 会【静默给 undefined】
//       把 bug 藏起来;而 const/let 会【当场报错】(TDZ),让你一眼发现。
//       (详见 10-functions.js "提升 hoisting" 一节)
//
// 3. 变量命名规则 ⭐
//    必须遵守(否则报错):
//    - 只能用字母、数字、_、$;不能以数字开头
//    - 不能用关键字(如 let、const)
//    - 区分大小写(age 和 Age 是两个变量)
//    社区惯例(建议遵守):
//    - 用 camelCase 小驼峰:firstName、isMarried、myAge
//    - 名字要有意义:age 好过 a
//
// 4. 八种数据类型
//    原始类型(Primitive)—— 7 种,最常用前 3 个:
//    ┌───────────┬──────────────────┬──────────────────────────┐
//    │ 类型      │ 例子             │ 说明                     │
//    ├───────────┼──────────────────┼──────────────────────────┤
//    │ number    │ 18, 3.14, -5     │ 数字(整数小数不分家)   │
//    │ string    │ 'hi', "abc"      │ 字符串                   │
//    │ boolean   │ true, false      │ 真/假                    │
//    │ undefined │ undefined        │ 声明了但没赋值           │
//    │ null      │ null             │ 手动表示"空"             │
//    │ bigint    │ 10n              │ 超大整数(少见)         │
//    │ symbol    │ Symbol()         │ 唯一标识(少见)         │
//    └───────────┴──────────────────┴──────────────────────────┘
//    引用类型(非原始):object —— {}、[]、函数等(后面专门讲)
//
// 5. typeof —— 查一个值是什么类型 ⭐
//      typeof 18        // 'number'
//      typeof 'hi'      // 'string'
//      typeof true      // 'boolean'
//      typeof undefined // 'undefined'
//    小坑:typeof null 会返回 'object',这是 JS 历史遗留 bug,记住即可。
//
//    ── 三个最爱混的值,typeof 都出人意料(速查)⭐⭐ ──
//    ┌───────────┬──────────────┬────────────────────────────────────┐
//    │ 值        │ typeof 结果  │ 一句话 + 坑                         │
//    ├───────────┼──────────────┼────────────────────────────────────┤
//    │ undefined │ 'undefined'  │ 系统给的"还没值";自成一个类型      │
//    │ null      │ 'object' ⚠️  │ 你给的"空";typeof 说它 object 是坑 │
//    │ NaN       │ 'number' ⚠️  │ 无效数字,属 number;NaN!==NaN 是坑 │
//    └───────────┴──────────────┴────────────────────────────────────┘
//    记:null 不是真 object(历史 bug);NaN 不是"不是数字",它就是 number。
//    详见下方 §6(undefined vs null)、§7(NaN)。
//
// 6. undefined vs null ⭐
//    两个都表示"没有",区别在【谁放的、是不是有意】:
//    - undefined:系统给的"还没值"(默认状态)。像杯子你还没倒过。
//    - null:你主动给的"这里【有意】空着"(刻意清空/占位)。像杯子你特意倒空并标记。
//      let x; console.log(x)  // undefined  ← 没赋值,系统默认
//      let y = null           // null       ← 你主动清空
//      null === undefined     // false      ← 概念不同:一个"未设置",一个"设为空"
//
//    ── null 到底是什么?怎么理解 ⭐ ──
//    null 是一个【独立的原始值】,自成一类,类里只有它一个成员;含义="有意的空"。
//    • typeof null // 'object' ← 这是 1995 年的历史 bug(底层用全 0 表示,被误判)。
//      全世界老代码都依赖它了,改了会崩,只好将错就错。→ null 不是对象,是原始值!
//      (呼应 00-concepts/value-vs-reference.md:null 明列在"原始值"栏)
//    • 怎么判断是不是 null?直接用 === 就行,可靠(不像 NaN 连自己都不等):
//        if (x === null) { ... }   // ✅ null === null 成立
//        // ❌ 别用 typeof x === 'object' 判 null:{}、[] 也是 'object',会误伤
//    • 什么时候用:"这位置将来会有个对象,但现在还没有"→ 用 null 明确占位:
//        let currentUser = null           // 还没登录,主动标记"当前无用户"
//        currentUser = { name: 'Tom' }    // 登录后再填
//      比放 undefined 更能表达"我【知道】这里暂时空,不是忘了"(agent 代码常见)。
//
// 7. NaN / Infinity 都属于 number ⭐
//    NaN(Not a Number)名字唬人,但它自己的类型偏偏是 number ——
//    它是 number 家族里表示"无效数字"的特殊值,不是独立的第 8 种类型。
//      typeof NaN       // 'number'   ← 名叫"不是数字",类型却是数字!
//      typeof Infinity  // 'number'
//    ┌────────────────┬──────────┬──────────────────────────────────┐
//    │ 特殊 number 值 │ 含义     │ 怎么产生                         │
//    ├────────────────┼──────────┼──────────────────────────────────┤
//    │ NaN            │ 无效数字 │ 'abc' - 1、Number('hi') 转换失败 │
//    │ Infinity       │ 正无穷   │ 1 / 0                            │
//    │ -Infinity      │ 负无穷   │ -1 / 0                           │
//    └────────────────┴──────────┴──────────────────────────────────┘
//    大坑:NaN 不等于它自己 ⭐
//      NaN === NaN      // false   ← 连自己都不等于!
//    所以不能用 === NaN 判断,要用专门函数:
//      Number.isNaN(x)  // 这才是判断"是不是 NaN"的正确方法
//
// ✅ 本主题要点回顾
//   1. 变量 = 给数据起名字
//   2. 优先 const,要改才用 let,别用 var ⭐
//   3. 命名:小驼峰、有意义、不能数字开头
//   4. 常用类型:number / string / boolean,外加 undefined / null
//      (null 是"有意的空",独立原始值;判断用 === null,typeof null==='object' 是坑)
//   5. typeof 查类型(注意 typeof null === 'object' 是坑)
//   6. NaN / Infinity 都属于 number;NaN !== NaN,判断用 Number.isNaN() ⭐

// ═════ 示范 ═════

// ── 1. let 可以改,const 不能改 ⭐ ─────────────────
let age = 18
console.log(age) // 18
age = 19 // let 允许重新赋值
console.log(age) // 19

const PI = 3.14
console.log(PI) // 3.14
// PI = 3.15   // ← 取消注释会报错:Assignment to constant variable

// ── 2. const 首选,会变的才用 let ─────────────────
let count = 0
count = count + 1
count = count + 1
console.log('count =', count) // count = 2

// ── 3. 常用数据类型 ───────────────────────────────
const myNumber = 100 // number
const myString = 'JavaScript' // string
const myBool = true // boolean
console.log(myNumber, myString, myBool) // 100 JavaScript true

// ── 4. typeof 查类型 ⭐ ───────────────────────────
console.log(typeof 18) // number
console.log(typeof 'hi') // string
typeof 'hi' // ← 这行会算,但文件里【看不到】任何输出(见第 8 组)
console.log(typeof true) // boolean
console.log(typeof undefined) // undefined
console.log(typeof null) // object  ← 历史遗留坑,记住即可

// ── 5. undefined vs null ─────────────────────────
let x // 声明但没赋值
console.log(x) // undefined  ← 系统默认
let y = null // 主动清空
console.log(y) // null       ← 你给的

// ── 6. 小驼峰命名 + 反引号拼句子(复习上一章) ──────
const firstName = 'Asabeneh'
const country = 'Finland'
console.log(`${firstName} lives in ${country}`) // Asabeneh lives in Finland

// ── 7. 数组的 typeof 是 'object' ⭐ ───────────────
// 数组不是独立类型,本质是特殊的 object,所以 06-arrays 才专门讲
const arr = [1, 2, 3]
console.log(typeof arr) // object   ← 不是 'array'!
console.log(Array.isArray(arr)) // true     ← 想确认是不是数组用这个

// ── 8. "能算" ≠ "能看见":文件里必须 console.log ⭐ ─
typeof 'hi' // 这行会算出 'string',但在文件里【看不到】任何东西
console.log(typeof 'hi') // string   ← 用 console.log 包起来才显示

// typeof 是运算符不是函数 → 后面加不加括号都行:
console.log(typeof 'hi') // string
console.log(typeof ('hi')) // string  ← 这括号只是分组,不是函数调用

// ═════ 轮到你 ═════

// 👇 轮到你(把 ??? 换掉,取消注释,跑一下对答案)

// 练习 A:声明一个 const 存你的名字,再用反引号打印 "我叫 xxx"
// const myName = '???'
// console.log(`我叫 ${myName}`)

// 练习 B:声明一个 let 叫 score = 0,让它加 10,再加 5,打印结果(应为 15)
// let score = ???
// score = ???
// score = ???
// console.log('score =', score)

// 练习 C:用 typeof 查一下 3.14 是什么类型,打印出来(应为 number)
// console.log(typeof ???)

const myName = "Jaydon"
console.log(`我叫 ${myName}`) // 我叫 Jaydon  ← 是 ${} 不是 &{} !

let score = 0
score += 10
score += 5
console.log(score)
