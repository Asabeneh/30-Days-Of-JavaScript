// 06 · 数组(Array)
// 学练复习一体:概念总结 → 示范 → 轮到你
// 跑法:Quokka / 右上角 ▷ / node 本文件
// 示范区带预期输出;轮到你区只给要求,自己写

// ═════ 概念总结 ═════
//
// 数组 = 有序的一组值,用 [] 包起来。JS 里最常用的数据结构。
//
// 0. 回顾:数组是"引用类型" ⭐
//    复习 00-concepts/value-vs-reference.md:数组是对象/引用类型,
//    - typeof [1,2,3] → 'object'(不是 'array')
//    - 判断是不是数组用 Array.isArray(arr)
//    - 可以原地修改(和字符串不可变相反)
//    - let b = a 是共享同一个数组,不是复制
//
// 1. 创建 & 取值
//       const fruits = ['apple', 'banana', 'cherry']
//       fruits[0]                 // 'apple'   ← 下标从 0 开始
//       fruits[2]                 // 'cherry'
//       fruits[fruits.length - 1] // 'cherry'  ← 最后一个
//       fruits.length             // 3         ← 长度(属性,不加括号)
//
// 2. 增删(会改原数组)⭐
//    ┌─────────────┬──────────────────────────────┬────────┐
//    │ 方法        │ 作用                         │ 位置   │
//    ├─────────────┼──────────────────────────────┼────────┤
//    │ .push(x)    │ 加到末尾                     │ 尾     │
//    │ .pop()      │ 删最后一个(并返回它)       │ 尾     │
//    │ .unshift(x) │ 加到开头                     │ 头     │
//    │ .shift()    │ 删第一个(并返回它)         │ 头     │
//    └─────────────┴──────────────────────────────┴────────┘
//    记忆:push/pop 管尾,shift/unshift 管头。这四个都直接改原数组。
//
// 3. 查找
//    ┌────────────────┬──────────────┬────────────────────┐
//    │ 方法           │ 作用         │ 返回               │
//    ├────────────────┼──────────────┼────────────────────┤
//    │ .includes(x)   │ 是否包含     │ true/false         │
//    │ .indexOf(x)    │ 首次出现下标 │ 数字;找不到 -1    │
//    └────────────────┴──────────────┴────────────────────┘
//
// 4. 截取 & 拼接
//    .slice(start, end) —— 不改原数组,返回新的(不含 end):
//       const a = [1, 2, 3, 4, 5]
//       a.slice(1, 3) // [2, 3]   ← 和字符串 slice 一样,不含 end
//       a.slice(2)    // [3, 4, 5]
//    .concat() / 展开 —— 合并数组:
//       [1, 2].concat([3, 4]) // [1,2,3,4]
//       [...[1, 2], ...[3, 4]] // [1,2,3,4]  ← 展开语法(后面章节详讲)
//
// 5. ⚠️ .splice() —— 强力但会改原数组
//    splice(起点, 删几个, 要插入的...) 能删能插,直接改原数组:
//       const a = [1, 2, 3, 4]
//       a.splice(1, 2)              // 从下标1删2个 → a: [1, 4]
//       const b = ['a', 'd']
//       b.splice(1, 0, 'b', 'c')    // 下标1删0个,插入 b,c → b: ['a','b','c','d']
//    第一个参数是"下标",插入发生在该下标之前 ⭐
//    插入的新元素会占据 index 这个位置,原本在此及以后的元素全部后移。
//    缝隙心智模型(同时解释 slice):把下标看成元素之间的"缝":
//        [ first , third ]
//        ↑      ↑       ↑
//       缝0    缝1     缝2
//    splice(index, 0, x) = 把 x 塞进"缝 index":
//       ['first','third'].splice(0, 0, 'x') // ['x','first','third']  塞缝0=最前
//       ['first','third'].splice(1, 0, 'x') // ['first','x','third']  塞缝1=中间 ✅
//       ['first','third'].splice(2, 0, 'x') // ['first','third','x']  塞缝2=最后(index=length)
//    同一模型解释 slice(1,3):从缝1切到缝3,夹住的是下标1、2 → 所以"不含 end"。
//    ⚠️ splice 的返回值是"被删元素",不是修改后的数组:
//       const q = ['first', 'third']
//       const removed = q.splice(1, 0, 'second')
//       console.log(q)       // ['first','second','third']  ← 改的是原数组,要打印它
//       console.log(removed) // []   ← 返回值是被删的元素,删0个就是空数组
//    所以插入后要 console.log(q)(原数组),别打印 q.splice(...) 的返回值。
//    ⚠️ 别把 slice(切片,不改原,返回切出的新数组)和 splice(剪接,改原,
//       返回被删元素)搞混!差一个字母,行为完全不同。
//
// 6. 数组 ↔ 字符串
//       ['a', 'b', 'c'].join('-') // 'a-b-c'      ← 数组转字符串
//       'a-b-c'.split('-')        // ['a','b','c'] ← 字符串转数组(复习 04)
//
// 7. 一个坑:== 比不了数组内容
//    数组是引用类型,=== 比的是"是不是同一个对象",不是内容:
//       [1, 2] === [1, 2] // false!  ← 两个不同的数组对象
//    比内容要逐个比,或转成字符串比(后面有更好的办法)。
//
// ✅ 本主题要点回顾
//   1. 数组是引用类型(可原地改;let b=a 是共享)⭐
//   2. [0] 取值,下标从 0;.length 长度
//   3. push/pop 管尾,shift/unshift 管头,都改原数组 ⭐
//   4. .slice 不改原(返回切出的新数组);.splice 改原(删/插,返回被删元素,
//      插入后要打印原数组)—— 别搞混 ⭐
//      splice 第一个参数是下标,插入在其之前;用"缝隙模型"记(缝index)
//   5. .join() 数组→字符串,.split() 字符串→数组
//   6. [1,2] === [1,2] 是 false(比的是对象不是内容)⭐

// ═════ 示范 ═════

// ── 0. 数组是引用类型(复习)──────────────────────
console.log(typeof [1, 2, 3]) // object   ← 不是 'array'
console.log(Array.isArray([1, 2, 3])) // true

// ── 1. 创建 & 取值 ───────────────────────────────
const fruits = ['apple', 'banana', 'cherry']
console.log(fruits[0]) // apple
console.log(fruits[fruits.length - 1]) // cherry
console.log(fruits.length) // 3

// ── 2. 增删:push/pop 管尾,shift/unshift 管头 ⭐ ──
const a = [1, 2, 3]
a.push(4)
console.log(a) // [1, 2, 3, 4]
a.pop()
console.log(a) // [1, 2, 3]
a.unshift(0)
console.log(a) // [0, 1, 2, 3]
a.shift()
console.log(a) // [1, 2, 3]

// ── 3. 查找 ──────────────────────────────────────
console.log([1, 2, 3].includes(2)) // true
console.log([1, 2, 3].indexOf(3)) // 2
console.log([1, 2, 3].indexOf(9)) // -1

// ── 4. slice 不改原(不含 end)────────────────────
const b = [1, 2, 3, 4, 5]
console.log(b.slice(1, 3)) // [2, 3]
console.log(b) // [1, 2, 3, 4, 5]  ← 原数组没变

// ── 5. splice 改原(删/插)⚠️ 别和 slice 混 ────────
const c = [1, 2, 3, 4]
c.splice(1, 2) // 从下标1删2个
console.log(c) // [1, 4]

// ── 6. 数组 ↔ 字符串 ─────────────────────────────
console.log(['a', 'b', 'c'].join('-')) // a-b-c
console.log('a-b-c'.split('-')) // ['a', 'b', 'c']

// ── 7. === 比不了内容 ────────────────────────────
console.log([1, 2] === [1, 2]) // false  ← 是两个不同对象

// ═════ 轮到你 ═════

// 👇 轮到你(只给要求,自己写代码)

// 练习 A:有 const nums = [10, 20, 30]
//   ① 在末尾加上 40
//   ② 在开头加上 5
//   ③ 打印最终数组和它的长度
//   (最终应是 [5, 10, 20, 30, 40],长度 5)

const num = [10, 20, 30]
num.push(40)
num.unshift(5)
console.log(num)
console.log(num.length)



// 练习 B:有 const colors = ['red', 'green', 'blue']
//   ① 用 includes 判断有没有 'green'
//   ② 打印 'blue' 的下标
//   ③ 用 join 把它们拼成 'red, green, blue'(用 ', ' 连接)
const colors = ['red', 'green', 'blue']
console.log(colors.includes('green'))
console.log(colors.indexOf('blue'))
console.log(colors.join(', '))




// 练习 C:有 const letters = ['a', 'b', 'c', 'd', 'e']
//   用 slice 取出中间三个 ['b', 'c', 'd'],并打印。
//   打印完再打印一次 letters 本身,确认它没被改动。
const letters = ['a', 'b', 'c', 'd', 'e']
console.log(letters.slice(1, 4))
console.log(letters)


// 练习 D(动脑):有 const q = ['first', 'third']
//   用 splice 在 'first' 和 'third' 之间插入 'second',
//   让它变成 ['first', 'second', 'third'],打印。
//   提示:splice(位置, 删几个, 插入什么) —— 这里"删几个"是 0
const q = ['first', 'third']

// ❌ splice 返回的是“被删除的元素"，不是修改后的数组
// console.log(q.splice(0, 0, 'second'))

// ✅
q.splice(1, 0, 'second')
console.log(q)

// 练习 E(挑战):有 const sentence = 'I love java script'
//   ① 用 split 把它拆成单词数组
//   ② 用 join 把单词用 '-' 重新连起来
//   (最终得到 'I-love-java-script')
const sentence = 'I love java script'


// ❌ 
// sentence.split(' ')
// console.log(sentence)
// sentence.join('-')


// ❌ 直接写 array = ... 而没声明。这在普通模式下能跑(JS 会偷偷创建一个全局变量),但这是坏习惯,而且埋雷:
// - 严格模式('use strict')下会直接报错:array is not defined
// - 它会"泄漏"成全局变量,以后可能和别处撞名,制造诡异 bug
// array = sentence.split(' ')

// ✅
const array = sentence.split(' ')
console.log(array.join('-'))