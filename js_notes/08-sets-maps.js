// 08 · Set 与 Map
// 学练复习一体:概念总结 → 示范 → 轮到你
// 跑法:Quokka / 右上角 ▷ / node 本文件
// 示范区带预期输出;轮到你区只给要求,自己写

// ═════ 概念总结 ═════
//
// Set 和 Map 是对"数组/对象"的补充。数组允许重复、对象的键只能是字符串 ——
// 这两个新结构补上了这两个短板。
//
// 1. Set —— 不重复的集合 ⭐
//    Set 里的值自动去重,不会有重复项。
//       const s = new Set([1, 2, 2, 3, 3, 3])
//       console.log(s) // Set(3) {1, 2, 3}   ← 重复的自动没了
//    常用操作:
//       const s = new Set()
//       s.add(1)      // 加
//       s.add(2)
//       s.add(1)      // 重复的,无效
//       s.has(1)      // true   ← 查是否存在
//       s.delete(2)   // 删
//       s.size        // 1      ← 数量(注意是 size,不是 length!)
//    ⚠️ Set/Map 用 .size 数数量,不是数组的 .length。
//    最常见用途:数组去重 ⭐⭐
//       const arr = [1, 1, 2, 3, 3]
//       const unique = [...new Set(arr)] // [1, 2, 3]
//       //             ↑ 转成 Set 去重,再用 ... 展开回数组
//    这是一个必会的惯用法:[...new Set(数组)] = 数组去重。
//
// 2. Map —— 更强的键值对 ⭐
//    Map 像对象,但键可以是任何类型(对象的键只能是字符串/symbol)。
//       const m = new Map()
//       m.set('name', 'Tom')    // set(键, 值)
//       m.set(1, 'number key')  // 键可以是数字!
//       m.set(true, 'bool key') // 甚至布尔、对象
//       m.get('name')           // 'Tom'   ← 用 get 取值
//       m.has(1)                // true
//       m.delete(true)
//       m.size                  // 2
//    Map vs 对象:什么时候用哪个
//    ┌──────────┬──────────────────────────┬──────────────────────┐
//    │          │ 对象 {}                  │ Map                  │
//    ├──────────┼──────────────────────────┼──────────────────────┤
//    │ 键的类型 │ 只能字符串/symbol        │ 任意类型             │
//    │ 数量     │ Object.keys(o).length    │ m.size(直接)        │
//    │ 顺序     │ 基本按插入序,整数键会重排│ 严格保证插入顺序     │
//    │ 遍历     │ 需 Object.keys 等        │ 直接可迭代           │
//    └──────────┴──────────────────────────┴──────────────────────┘
//    ⚠️ 对象的"顺序"有个坑:字符串键按【插入顺序】,但【整数样式的键】
//       (如 '2'、'10')会被自动提前、按升序排,无视你插入的次序:
//          Object.keys({ b: 1, 2: 1, a: 1, 10: 1 }) // ['2','10','b','a']
//                                                    // 整数键 2,10 被提前且升序
//       Map 则严格按插入序,不管键是什么类型 —— 这才是"键是数字又在意顺序时用 Map"的真正理由。
//    日常大多数场景用对象就够;需要"非字符串键""频繁增删""严格保序"时用 Map。
//
// 3. 创建时初始化
//       const s = new Set(['a', 'b', 'c'])  // Set:传数组
//       const m = new Map([                 // Map:传"键值对数组"(和 Object.entries 形状一样!)
//         ['name', 'Tom'],
//         ['age', 20],
//       ])
//       m.get('age') // 20
//    呼应 07 章:Object.entries(obj) 返回的正是这种 [[k,v],...] 形状,
//    所以 new Map(Object.entries(obj)) 能把对象转成 Map。
//
// 4. 遍历(先知道,循环章会详讲)
//       const s = new Set([1, 2, 3])
//       for (const x of s) console.log(x)          // 1 2 3
//       const m = new Map([['a', 1], ['b', 2]])
//       for (const [k, v] of m) console.log(k, v)  // a 1 / b 2
//
// ✅ 本主题要点回顾
//   1. Set = 不重复集合;add/has/delete/size ⭐
//   2. [...new Set(arr)] = 数组去重(必会惯用法)⭐⭐
//   3. Map = 键可任意类型的键值对;set/get/has/delete/size ⭐
//   4. Set/Map 数数量用 .size,不是 .length
//   5. Map 保证插入顺序;需非字符串键/保序/频繁增删时用 Map,否则对象够用

// ═════ 示范 ═════

// ── 1. Set 自动去重 ⭐ ────────────────────────────
const s = new Set([1, 2, 2, 3, 3, 3])
console.log(s) // Set(3) {1, 2, 3}

// ── 2. Set 常用操作 ──────────────────────────────
const s2 = new Set()
s2.add(1)
s2.add(2)
s2.add(1) // 重复,无效
console.log(s2.has(1)) // true
s2.delete(2)
console.log(s2.size) // 1   ← 注意是 size 不是 length

// ── 3. 数组去重惯用法 ⭐⭐ ─────────────────────────
const arr = [1, 1, 2, 3, 3]
console.log([...new Set(arr)]) // [1, 2, 3]

// ── 4. Map:键可任意类型 ⭐ ────────────────────────
const m = new Map()
m.set('name', 'Tom')
m.set(1, 'number key')
console.log(m.get('name')) // Tom
console.log(m.get(1)) // number key
console.log(m.has(1)) // true
console.log(m.size) // 2

// ── 5. Map 初始化(键值对数组)───────────────────
const m2 = new Map([
  ['name', 'Tom'],
  ['age', 20],
])
console.log(m2.get('age')) // 20

// ── 6. 遍历 ──────────────────────────────────────
for (const x of new Set([1, 2, 3])) console.log('set item:', x) // 1,2,3
for (const [k, v] of m2) console.log('map:', k, v) // name Tom / age 20

// ═════ 轮到你 ═════

// 👇 轮到你(只给要求,自己写代码)

// 练习 A:有 const nums = [5, 3, 5, 2, 3, 1, 1]
//   ① 用 Set 给它去重,得到一个新数组并打印
//   ② 打印去重后有几个元素

// 练习 B:创建一个空 Set,叫 tags
//   ① 依次 add 'js', 'css', 'js'(注意第二个 js 重复)
//   ② 打印 tags 的 size(想想是几)
//   ③ 判断里面有没有 'css'

// 练习 C:创建一个 Map,叫 scores
//   ① 存入:'Amy' → 90,'Bob' → 85
//   ② 取出并打印 Amy 的分数
//   ③ 打印 scores 里有几对(用 size)

// 练习 D(动脑):有一句话 const text = 'a b a c b a'
//   数一数里面有几个【不重复】的字母(空格不算)。
//   提示:先 split 成数组,想办法过滤掉空格,再用 Set 去重数 size。
//   (答案应该是 3:a b c)

// 练习 E(挑战):有 const obj = { name: 'Tom', age: 20 }
//   把这个【对象】转成【Map】,然后打印 Map 的 size。
//   提示:回忆 07 章的 Object.entries,它的返回形状正好能喂给 new Map()
