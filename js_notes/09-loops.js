// 09 · 循环(Loops)
// 跑法:Quokka 或 右上角 ▷ / node js_notes/09-loops.js
//
// ═════════════════════ 概念总结 ═════════════════════
//
// 循环 = 重复做一件事。JS 有好几种,按场景选:
//
//   循环种类           用途                       建议
//   ─────────────────────────────────────────────────
//   for               经典计数循环,能控制下标      需要下标时
//   while             条件为真就一直循环           不知道次数、靠条件停
//   do...while        先做一次再判断               至少执行一次
//   for...of          遍历【值】(数组/字符串/Set) ⭐ 最常用,遍历元素
//   for...in          遍历【键】(对象的 key)      遍历对象属性
//
// ── 1. for:三段式 ⭐ ────────────────────────────
//   for (初始; 条件; 每轮结束后) { ... }
//   for (let i = 0; i < 5; i++)  →  i 从 0 到 4
//   i++ 是 i = i + 1 的简写
//
// ── 2. for...of:遍历值(最常用)⭐⭐ ─────────────
//   for (const x of [10,20,30])  →  x 依次是 10,20,30
//   直接拿到【元素本身】,不用管下标。数组/字符串/Set/Map 都能用。
//
// ── 3. for...in:遍历对象的键 ────────────────────
//   for (const key in obj)  →  key 依次是对象的每个键名
//   注意:for...in 拿到的是【键】,要取值就用 obj[key]
//
//   ⚠️ 口诀:of 拿值(value),in 拿键/下标(index/key)
//   ⚠️ 别用 for...in 遍历数组(会有意外的坑),数组用 for...of 或 for
//
// ── 4. while / do...while ───────────────────────
//   while (条件) { ... }           条件先判断,可能一次都不跑
//   do { ... } while (条件)        先跑一次再判断,至少跑一次
//   ⚠️ 循环体里必须有让条件最终变假的语句,否则【死循环】
//
// ── 5. break / continue ⭐ ──────────────────────
//   break     立刻【跳出】整个循环
//   continue  跳过【本轮】剩下的,直接进下一轮
//   默认只作用于【最近的一层】循环。
//
// ── 6. 标签 label:给循环起名字,跳出【外层】(冷门,了解即可)──
//   嵌套循环里,想让 break/continue 作用到外层,先给外层贴个"标签":
//     outer: for (...) {        // outer: 就是标签,形如 `名字:`
//       for (...) {
//         if (...) break outer  // 直接跳出【外层】,而非最近这层
//       }
//     }
//   标签语法 `名字:` 平时几乎用不到,但要【知道它存在】——因为它和对象的
//   `键:` 长得一样,会在别处坑你(见 10 章:箭头函数 => { name: name } 里
//   name: 被当成标签,导致静默返回 undefined)。
//
// ═════ 要点回顾 ═════
// 1. for 需要下标;for...of 遍历值(最常用);for...in 遍历对象键
// 2. of 拿值,in 拿键 —— 别记反 ⭐
// 3. 数组别用 for...in
// 4. while 靠条件停,当心死循环
// 5. break 跳出整个循环,continue 跳过本轮(默认作用于最近一层)⭐
// 6. 标签 `名字:` 可让 break/continue 跳出外层;它和对象 `键:` 同形,别混(见10章坑)
//
// ═════════════════════ 示范 ═════════════════════

// ── 1. for 经典计数 ──────────────────────────────
for (let i = 0; i < 3; i++) {
  console.log('for i =', i) // 0, 1, 2
}

// 用 for + 下标遍历数组
const arr = ['a', 'b', 'c']
for (let i = 0; i < arr.length; i++) {
  console.log(i, arr[i]) // 0 a / 1 b / 2 c
}

// ── 2. for...of 遍历值(最常用)⭐ ─────────────────
for (const fruit of ['apple', 'banana']) {
  console.log('of:', fruit) // apple / banana  ← 直接拿到值
}
for (const ch of 'Hi') {
  console.log('char:', ch) // H / i  ← 字符串也能遍历
}

// ── 3. for...in 遍历对象的键 ─────────────────────
const person = { name: 'Tom', age: 20 }
for (const key of Object.keys(person)) {
  console.log('key(of):', key) // name / age
}
for (const key in person) {
  console.log('in:', key, '=', person[key]) // name = Tom / age = 20
}

// ── 4. while ─────────────────────────────────────
let n = 3
while (n > 0) {
  console.log('while:', n) // 3, 2, 1
  n-- // ← 必须让 n 变化,否则死循环
}

// ── 5. break / continue ──────────────────────────
for (let i = 0; i < 5; i++) {
  if (i === 3) break // i 到 3 就整个跳出
  console.log('break demo:', i) // 0, 1, 2
}
for (let i = 0; i < 5; i++) {
  if (i % 2 === 0) continue // 偶数跳过本轮
  console.log('continue demo:', i) // 1, 3  ← 只打印奇数
}

// ═════════════════════ 轮到你 ═════════════════════
// (只给要求,自己写代码)

// 练习 A:用 for 循环打印 1 到 5(注意:是 1 到 5,不是 0 到 4)
for (let i = 1; i <= 5; i++) {
  console.log(i)
}



// 练习 B:有 const nums = [4, 7, 2, 9]
//   用 for...of 遍历,把每个数字打印出来
const nums = [4, 7, 2, 9]
for (const num of nums) {
  console.log(num)
}

// 练习 C:有 const car = { brand: 'Tesla', year: 2024, color: 'red' }
//   用 for...in 遍历,按 "键: 值" 的格式打印每一项
//   (例如 brand: Tesla)
const car = { brand: 'Tesla', year: 2024, color: 'red' }
for (const i in car) {
  console.log(`${i}` + ": " + car[i]) // ✅
  console.log(i + ": ", car[i]) // ❌
  console.log(i + ":", car[i]) // ✅
}



// 练习 D:用 for 循环算出 1 + 2 + 3 + ... + 100 的总和,打印结果
//   提示:在循环外先定义一个 let sum = 0,每轮把 i 加进去
//   (答案应该是 5050)
let sum = 0
for (let i = 1; i <= 100; i++) {
  sum += i
}
console.log(sum)



// 练习 E(动脑):有 const nums = [3, 8, 1, 10, 5]
//   用循环找出里面【最大】的数并打印。
//   提示:先假设第一个是最大(let max = nums[0]),
//   遍历时遇到更大的就更新 max。
const nums_ = [3, 8, 1, 10, 5]
let max = nums_[0]
for (const num of nums_) {
  max = num > max? num : max
}
console.log(max)



// 练习 F(挑战):打印 1 到 20,但遇到偶数就跳过(用 continue),
//   只打印奇数。
for (let i = 1; i <= 20; i+=1) {
  if (i % 2 == 0) // ❌
  if (i % 2 === 0) // ✅
  
    continue    // ❌
    {continue}    // ✅
  console.log(i)
}
