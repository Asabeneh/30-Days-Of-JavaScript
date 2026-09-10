// 11 · 高阶函数 + 回调(Higher-order functions & callbacks)
// 学练复习一体:概念总结 → 示范 → 轮到你
// 跑法:Quokka / 右上角 ▷ / node js_notes/11-higher-order-functions.js
// 示范区带预期输出;轮到你区只给要求,自己写
//
// ═════════════════════ 概念总结 ═════════════════════
//
// 你在第 10 章练习 F 已经摸到门了:repeat(fn, times) 把【函数当参数传进去】再调用。
// 这一章把这个能力用到最常见的地方:处理数组。这三个方法(map/filter/reduce)是
// pi/TS 真实代码里【出现频率最高】的东西,是读懂真实代码的第一道门槛。
//
// ── 0. 两个词:高阶函数 & 回调 ⭐ ────────────────
//   • 回调函数(callback):被你【传给别人、由别人来调用】的那个函数。
//   • 高阶函数(higher-order function):【接收函数当参数】或【返回一个函数】的函数。
//   map/filter/reduce/forEach 都是高阶函数;你传给它们的箭头函数就是回调。
//     [1,2,3].map(n => n * 2)
//     └─ map 是高阶函数        └─ n => n*2 是回调(map 会对每个元素调用它)
//   💡 这正是 agent/pi 的核心套路:你注册"工具函数",框架在合适时机回调它们。
//
// ── 1. map:每个元素做变换,返回【等长】新数组 ⭐⭐ ──
//   const nums = [1, 2, 3]
//   nums.map(n => n * 2)   // [2, 4, 6]   ← 一进一出,长度不变
//   回调的返回值 = 新数组对应位置的元素。不改原数组(返回新的)。
//   常用:从对象数组里"抽一列":
//   users.map(u => u.name) // ['Tom', 'Jerry']
//
// ── 2. filter:挑出【回调返回 true】的元素 ⭐⭐ ──
//   const nums = [1, 2, 3, 4]
//   nums.filter(n => n % 2 === 0) // [2, 4]   ← 回调返回 true 的才留下
//   回调要返回【布尔】(条件);返回 true 保留,false 丢弃。长度可能变短。不改原数组。
//
// ── 3. reduce:把整个数组【归并成一个值】⭐⭐(最难,最强)──
//   nums.reduce((acc, n) => acc + n, 0)
//                └acc └当前元素        └初始值
//   • acc(accumulator 累加器):跨每一轮"攒结果"的容器,上一轮的返回值传给下一轮
//   • 第二个参数 0 是 acc 的【初始值】(强烈建议总是写上)
//   过程(求和 [1,2,3],初始 0):
//     轮1 acc=0, n=1 → 返回 1
//     轮2 acc=1, n=2 → 返回 3
//     轮3 acc=3, n=3 → 返回 6   ← 最终结果
//   reduce 能做 map/filter 能做的一切(求和、找最大、计数、拼接…),但先把上面三个用熟。
//
// ── 4. 其他常用高阶方法(顺带认识)──────────────
//   forEach(fn)  只遍历做事,【没有返回值】(想要新数组用 map,别用 forEach)
//   find(fn)     返回【第一个】让回调为 true 的元素(找不到 undefined)
//   some(fn)     只要【有一个】满足 → true
//   every(fn)    【全部】满足 → true
//
// ── 5. 链式调用(chaining)⭐ ────────────────────
//   map/filter 返回新数组 → 可以接着点下一个方法,像流水线:
//     nums.filter(n => n % 2 === 1).map(n => n * 10)
//     先挑出奇数,再各 ×10。真实代码里到处是这种"过滤→变换"的链。
//
// ═════ 要点回顾 ═════
// 1. 高阶函数=接收/返回函数;回调=被传进去、由别人调用的函数 ⭐
// 2. map:变换,等长新数组(回调返回值=新元素)⭐⭐
// 3. filter:筛选,回调返回布尔,true 才留 ⭐⭐
// 4. reduce:归并成一个值,(acc, n) => ...,别忘初始值 ⭐⭐
// 5. forEach 无返回值;find/some/every 各司其职
// 6. map/filter 返回新数组 → 可链式;都不改原数组 ⭐
//
// ═════════════════════ 示范 ═════════════════════

const nums = [1, 2, 3, 4, 5]

// ── 1. map:每个 ×2,等长新数组 ⭐ ─────────────────
console.log(nums.map((n) => n * 2)) // [ 2, 4, 6, 8, 10 ]
console.log(nums) // [ 1, 2, 3, 4, 5 ]  ← 原数组没变

// ── 2. filter:只留偶数 ⭐ ─────────────────────────
console.log(nums.filter((n) => n % 2 === 0)) // [ 2, 4 ]

// ── 3. reduce:求和(初始值 0)⭐ ──────────────────
console.log(nums.reduce((acc, n) => acc + n, 0)) // 15
// 看清过程:把每一轮打印出来
nums.reduce((acc, n) => {
  console.log(`  acc=${acc}, n=${n} → ${acc + n}`) // 0,1→1 / 1,2→3 / 3,3→6 / 6,4→10 / 10,5→15
  return acc + n
}, 0)

// ── 4. forEach:只做事,无返回值 ──────────────────
nums.forEach((n) => process.stdout.write(n + ' ')) // 1 2 3 4 5
console.log('← forEach 遍历')
console.log(nums.forEach((n) => n)) // undefined  ← forEach 没有返回值!

// ── 5. find / some / every ───────────────────────
console.log(nums.find((n) => n > 3)) // 4     ← 第一个大于 3 的
console.log(nums.some((n) => n > 4)) // true  ← 有一个大于 4
console.log(nums.every((n) => n > 0)) // true  ← 全部大于 0

// ── 6. 链式:先筛奇数,再各 ×10 ⭐ ─────────────────
console.log(nums.filter((n) => n % 2 === 1).map((n) => n * 10)) // [ 10, 30, 50 ]

// ── 7. 对象数组(呼应 07 章,真实数据形状)⭐ ──────
const users = [
  { name: 'Tom', age: 20 },
  { name: 'Jerry', age: 18 },
]
console.log(users.map((u) => u.name)) // [ 'Tom', 'Jerry' ]     ← 抽一列
console.log(users.filter((u) => u.age >= 20)) // [ { name: 'Tom', age: 20 } ]  ← 挑成年

// ═════════════════════ 轮到你 ═════════════════════
// (只给要求,自己写代码)

// 练习 A(map):有 const prices = [10, 20, 30]
//   用 map 给每个价格打八折(×0.8),打印新数组([8, 16, 24])
const prices = [10, 20, 30]
console.log(prices.map(n => n * 0.8))


// 练习 B(filter):有 const ages = [12, 18, 25, 9, 30]
//   用 filter 挑出所有 >= 18 的,打印([18, 25, 30])
const ages = [12, 18, 25, 9, 30]
console.log(ages.filter(n => n >= 18))


// 练习 C(reduce):有 const nums = [3, 8, 1, 10, 5]
//   用 reduce 算出它们的总和,打印(27)
//   提示:回调是 (acc, n) => ...,初始值给 0
const nums_ = [3, 8, 1, 10, 5]
console.log(nums_.reduce((acc, n) => acc + n, 0))


// 练习 D(map + 对象数组):有下面这个 products
//   const products = [
//     { name: '苹果', price: 5 },
//     { name: '香蕉', price: 3 },
//   ]
//   用 map 得到一个【只含名字】的数组 ['苹果', '香蕉'],打印
const products = [
  { name: '苹果', price: 5 },
  { name: '香蕉', price: 3 },
]
console.log(products.map(product => product.name))



// 练习 E(链式,动脑):还是上面的 nums = [3, 8, 1, 10, 5]
//   先用 filter 挑出偶数,再用 map 把它们各自平方,打印。
//   提示:两个方法链着写,filter(...).map(...)
// ❌ ^ 在 JS 是"按位异或"不是乘方:8^2=10、10^2=8 → 得 [10, 8],和平方无关
// console.log(nums_.filter(n => n % 2 === 0).map(n => n^2))
// ✅ 乘方用 **(或 n*n)
console.log(nums_.filter(n => n % 2 === 0).map(n => n**2)) // [ 64, 100 ]


// 练习 F(reduce 进阶,挑战):有 const words = ['I', 'love', 'js']
//   用 reduce 把它们拼成一句话 'I love js'(单词间加空格)。
const words = ['I', 'love', 'js']

// ❌ 初始值给 ""：第一轮 acc="" → " I"，开头多一个空格 → 结果 " I love js"
// let sentence = words.reduce((acc, n) => `${acc} ${n}`, "")
// ❌ 想切掉开头空格却写错:sentence[1, ...] 的逗号是"逗号运算符"，只取最后一个值，
//    等于 sentence[9] → 取【单个字符】's'，不是切片(切片要用 .slice)
// console.log(sentence[1, sentence.length-1])
// 🔸 能救回来但不优雅:事后 slice 掉开头空格
// console.log(sentence.slice(1))

// ✅ 从源头解决:不给初始值 → reduce 拿第一个词当初始 acc、从第二个开始拼 → 开头无空格
const sentence = words.reduce((acc, n) => `${acc} ${n}`)
console.log(sentence) // I love js