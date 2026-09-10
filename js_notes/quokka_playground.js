// 🐿️ Quokka 试验场(免费版写法)
// 免费版不支持 //? ,但支持实时 console.log —— 值会显示在行尾
// 用法:Cmd+Shift+P → "Quokka: Start on Current File"
// 然后随便改数字/代码,右边的值会实时变化,不用保存、不用切终端

// 1) 基本变量
const a = 2
const b = 3
console.log(a + b) // 实时显示 5

// 2) 字符串
const name = 'JavaScript'
console.log(name.length) // 10
console.log(name.toUpperCase()) // 'JAVASCRIPT'

// 3) 数组方法(练前 20 天最常玩的东西)
const nums = [1, 2, 3, 4, 5]
console.log(nums.map((n) => n * 2)) // [2, 4, 6, 8, 10]
console.log(nums.filter((n) => n % 2 === 0)) // [2, 4]
console.log(nums.reduce((sum, n) => sum + n, 0)) // 15

// 4) 试试改这里的值,看右边跟着变 👇
let radius = 5
const area = Math.PI * radius ** 2
console.log(area) // 改 radius 试试,这个值会实时跟着变
