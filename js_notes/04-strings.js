// 04 · 字符串常用方法
// 学练复习一体:概念总结 → 示范 → 轮到你
// 跑法:Quokka / 右上角 ▷ / node 本文件
// 示范区带预期输出;轮到你区只给要求,自己写

// ═════ 概念总结 ═════
//
// 字符串(string)是一串文字。JS 给它内置了很多"方法"(method),
// 可以查长度、截取、替换、大小写转换等。
//
// 1. 长度:.length(是属性,不是方法)⭐
//    .length 后面不加括号,因为它是"属性"不是"方法"。
//       'hello'.length // 5
//    区分:.length 是属性(不加括号);.toUpperCase() 是方法(加括号)。
//    判断法:方法是"动作",要加 ();属性是"数据",不加。
//
// 2. 大小写
//    ┌────────────────┬────────┬────────────────────────────┐
//    │ 方法           │ 作用   │ 例子                       │
//    ├────────────────┼────────┼────────────────────────────┤
//    │ .toUpperCase() │ 转大写 │ 'hi'.toUpperCase() → 'HI'  │
//    │ .toLowerCase() │ 转小写 │ 'HI'.toLowerCase() → 'hi'  │
//    └────────────────┴────────┴────────────────────────────┘
//
// 3. 按位置取字符
//       const s = 'hello'
//       s[0]            // 'h'  ← 下标从 0 开始!
//       s[1]            // 'e'
//       s[s.length - 1] // 'o'  ← 最后一个字符的通用写法
//    关键:下标从 0 开始,第 1 个字符是 s[0],最后一个是 s[length-1]。
//
// 4. 截取:.slice(start, end) ⭐
//    从 start 截到 end(不含 end)。
//       const s = 'JavaScript'
//       s.slice(0, 4) // 'Java'   ← 取下标 0,1,2,3(不含 4)
//       s.slice(4)    // 'Script' ← 省略 end 则取到结尾
//       s.slice(-6)   // 'Script' ← 负数从右边数
//    "不含 end"是初学最容易错的点:slice(0, 4) 拿的是 4 个字符,不是 5 个。
//
// 5. 查找
//    ┌──────────────────┬──────────────┬───────────────────────────────┐
//    │ 方法             │ 作用         │ 返回                          │
//    ├──────────────────┼──────────────┼───────────────────────────────┤
//    │ .includes('x')   │ 是否包含     │ true/false                    │
//    │ .indexOf('x')    │ 首次出现下标 │ 数字;找不到返回 -1           │
//    │ .startsWith('x') │ 是否以…开头  │ true/false                    │
//    │ .endsWith('x')   │ 是否以…结尾  │ true/false                    │
//    └──────────────────┴──────────────┴───────────────────────────────┘
//       'hello'.includes('ell') // true
//       'hello'.indexOf('l')    // 2
//       'hello'.indexOf('z')    // -1   ← 找不到是 -1,不是报错
//
// 6. 替换与去空格
//       'a-b-c'.replace('-', '+')    // 'a+b-c'  ← 只换第一个
//       'a-b-c'.replaceAll('-', '+') // 'a+b+c'  ← 全换
//       '  hi  '.trim()              // 'hi'     ← 去掉两端空格
//
// 7. 拆分:.split() ⭐(字符串 → 数组)
//       'a,b,c'.split(',') // ['a', 'b', 'c']       ← 按逗号拆成数组
//       'hello'.split('')  // ['h','e','l','l','o'] ← 拆成单个字符
//    split 是字符串通向数组的桥梁,后面数组章会经常一起用。
//
// ⚠️ 一个重要特性:字符串不可变(immutable)
//    字符串方法都不会改原字符串,而是返回一个新字符串。
//       let s = 'hello'
//       s.toUpperCase()     // 'HELLO'(返回新的)
//       console.log(s)      // 'hello'  ← 原来的没变!
//       s = s.toUpperCase() // 想保留结果,得重新赋值
//    记住:想要变化生效,必须把返回值赋回去(或存到新变量)。
//
// ✅ 本主题要点回顾
//   1. .length 是属性(不加括号);方法要加 ()
//   2. 下标从 0 开始,最后一个是 [length-1]
//   3. .slice(start, end) 截取,不含 end ⭐
//   4. .includes / .indexOf(找不到返回 -1)
//   5. .split() 把字符串拆成数组 ⭐
//   6. 字符串不可变:方法返回新串,想生效要赋值回去 ⭐

// ═════ 示范 ═════

// ── 1. 长度 .length(属性,不加括号)──────────────
console.log('hello'.length) // 5

// ── 2. 大小写 ─────────────────────────────────────
console.log('hi'.toUpperCase()) // HI
console.log('HI'.toLowerCase()) // hi

// ── 3. 按下标取字符(从 0 开始)────────────────────
const s = 'hello'
console.log(s[0]) // h
console.log(s[s.length - 1]) // o   ← 最后一个字符

// ── 4. 截取 .slice(start, end),不含 end ⭐ ────────
const lang = 'JavaScript'
console.log(lang.slice(0, 4)) // Java    ← 取 0,1,2,3(不含4)
console.log(lang.slice(4)) // Script  ← 到结尾
console.log(lang.slice(-6)) // Script  ← 负数从右数

// ── 5. 查找 ───────────────────────────────────────
console.log('hello'.includes('ell')) // true
console.log('hello'.indexOf('l')) // 2
console.log('hello'.indexOf('z')) // -1   ← 找不到是 -1

// ── 6. 替换 / 去空格 ──────────────────────────────
console.log('a-b-c'.replace('-', '+')) // a+b-c   ← 只换第一个
console.log('a-b-c'.replaceAll('-', '+')) // a+b+c   ← 全换
console.log('  hi  '.trim()) // hi      ← 去两端空格

// ── 7. 拆分 .split() → 数组 ⭐ ────────────────────
console.log('a,b,c'.split(',')) // ['a', 'b', 'c']
console.log('hello'.split('')) // ['h','e','l','l','o']

// ── 8. 字符串不可变 ⭐ ────────────────────────────
let word = 'hello'
word.toUpperCase() // 返回新串,但没接住
console.log(word) // hello   ← 原串没变!
word = word.toUpperCase() // 赋值回去才生效
console.log(word) // HELLO

// 想直接改某个字符?改不动 —— 字符串不可变
let text = 'hello'
text[0] = 'x' // 非严格模式:这行被静默忽略;严格模式/ESM:直接抛 TypeError
console.log(text) // hello   ← 没变!要改只能整串重新赋值(见上面第 8 组)

// ═════ 轮到你 ═════

// 👇 轮到你(只给要求,自己写代码)

// 练习 A:有字符串 const city = 'Helsinki'
//   ① 打印它的长度
//   ② 打印它的大写形式
//   ③ 打印它的第一个字符

const city = 'Helsinki'
console.log(city.length)
console.log(city.toUpperCase())
console.log(city[0])


// 练习 B:有 const email = 'user@example.com'
//   ① 用 includes 判断它是否包含 '@'(应得 true)
//   ② 用 split 按 '@' 拆开,打印结果(想想会得到什么形状)
const email = 'user@example.com'
console.log(email.includes('@'))
console.log(email.split('@'))


// 练习 C:有 const raw = '  JavaScript  '(两端有空格)
//   先去掉两端空格,再转成小写,最后打印。
//   提示:去空格和转小写各有一个方法,两个可以【链式】连着写(前一个的结果接着点下一个)
const raw = '  JavaScript  '
console.log(raw.trim().toLowerCase())



// 练习 D(动脑):const name = 'javascript'
//   只用你学过的方法,把它变成首字母大写的 'Javascript' 再打印。
//   提示:第一个字符大写 + 剩下的部分,用 + 拼起来。
const name = 'javascript'
console.log(name[0].toUpperCase() + name.slice(1, name.length))
