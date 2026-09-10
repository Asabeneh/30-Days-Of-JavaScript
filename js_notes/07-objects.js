// 07 · 对象(Object)
// 学练复习一体:概念总结 → 示范 → 轮到你
// 跑法:Quokka / 右上角 ▷ / node 本文件
// 示范区带预期输出;轮到你区只给要求,自己写

// ═════ 概念总结 ═════
//
// 对象 = 一组"键值对"(key-value),用 {} 包起来。
// 数组是"有序列表"(按下标),对象是"带标签的数据"(按名字)。
// 用来表示真实世界的东西:一个人、一辆车。
//
// 0. 对象到底是什么?——两层含义 ⭐⭐(总纲)
//    表面:对象 = 键值对(键: 值)的集合,用 {} 装(就是下面 §1 讲的)。
//    本质:JS 的类型分【两大阵营】—— 原始值 vs 对象:
//      • 原始值(7 个):number / string / boolean / undefined / null / bigint / symbol
//      • 对象(就 1 个大类,却装下几乎其余一切):普通 {}、【数组】、【函数】、Date、正则……
//        它们本质【都是对象】,只是"特殊的对象"。
//    判据:能往它身上挂属性(键:值)的,就是对象 ——
//      const arr = [1, 2]; arr.myTag = 'hi'   // 数组能挂 → 数组是对象
//      const fn = () => {}; fn.count = 5       // 函数能挂 → 函数是对象
//      typeof []       // 'object'   ← 数组是对象
//      typeof (()=>{}) // 'function' ← 函数特殊显示,但它也是对象
//    这一条解释了你早前所有疑问:typeof [] 是 object、函数能当值传/能挂属性、
//    {} 叫"对象字面量"、对象是【引用类型】(共享,见 00-concepts/value-vs-reference.md)。
//    ⚠️ typeof null 也是 'object' → 那是历史 bug,null 不是对象(见 02 章 §5)。
//    💡 TS 里对象在【值层面完全一样】,只是多一层:可用 interface/type 描述
//       "这个对象长什么样"(有哪些键、各是什么类型)—— 第 19 章讲,现在知道有这层即可。
//
// 1. 创建 & 结构
//       const person = {
//         name: 'Asabeneh',        // 键: 值
//         age: 100,
//         isMarried: true,
//         skills: ['HTML', 'CSS', 'JS'],  // 值可以是数组
//       }
//    - 每个 键: 值 之间用逗号隔开
//    - 键(key) 是名字(字符串),值(value) 可以是任何类型(数字、字符串、数组、甚至另一个对象)
//
// 2. 取值:两种方式 ⭐
//       person.name    // 'Asabeneh'    ← 方式一:点号 .(最常用)
//       person['name'] // 'Asabeneh'    ← 方式二:方括号 ['键']
//       const key = 'age'
//       person[key]    // 100           ← 键名存在变量里,只能用方括号
//    记:固定键名用 .name;键名是变量时用 [变量]。
//    person.key 和 person[key] 不一样!前者找叫 "key" 的键,后者找变量 key 的值对应的键。
//
// 3. 增 / 改 / 删
//    对象是引用类型(和数组一样),可以原地改:
//       const p = { name: 'Tom' }
//       p.age = 20      // 增:直接给新键赋值
//       p.name = 'Jerry'// 改:给已有键赋新值
//       delete p.age    // 删:用 delete
//    delete 是运算符,专删对象属性 —— 数组别用它 ⭐
//    delete 是一元运算符(和 typeof 同类),不是方法 → 写 delete obj.key,不是 obj.delete()。
//       delete p.age    // ✅ 对象属性
//       p.delete('age') // ❌ 对象没有 delete 方法
//    ⚠️ 数组虽然是特殊对象、语法上能 delete,但会留下"空洞",不该用:
//       const arr = [1, 2, 3]
//       delete arr[1]   // [1, empty, 3]  ← 抹空但不移位、长度还是 3!畸形
//    数组删元素用 splice(见 06 章):arr2.splice(1, 1) // [1, 3] 真删除、前移、长度变 2 ✅
//    ┌──────────────┬──────────────────┬────────────────┐
//    │ 目标         │ delete 能用吗    │ 该用什么       │
//    ├──────────────┼──────────────────┼────────────────┤
//    │ 对象属性     │ ✅ 正解          │ delete obj.key │
//    │ 数组元素     │ ⚠️ 留空洞,别用  │ splice         │
//    │ 变量/原始值  │ ❌ 无效          │ ——             │
//    └──────────────┴──────────────────┴────────────────┘
//
// 4. 键不存在 → undefined(不报错)⭐
//       const p = { name: 'Tom' }
//       p.height // undefined  ← 没这个键,返回 undefined,不报错
//    可以用它判断"有没有某个键":
//       if (p.name) …    // name 有值 → 真
//       if (p.height) …  // undefined 是假 → 不执行
//
// 5. 常用工具:Object.keys / values / entries ⭐
//    这些是静态方法(复习 00-concepts/call-forms.md:数据传进去):
//       const p = { name: 'Tom', age: 20 }
//       Object.keys(p)    // ['name', 'age']                  ← 所有键
//       Object.values(p)  // ['Tom', 20]                      ← 所有值
//       Object.entries(p) // [['name','Tom'], ['age',20]]     ← 键值对数组
//    注意是 Object.keys(p)(大写 Object,p 传进去),不是 p.keys()。
//
// 6. 检查键是否存在
//       'name' in p              // true    ← in 运算符
//       'age' in p               // false
//       p.hasOwnProperty('name') // true
//
// 7. 对象里放函数 = "方法"
//    值如果是函数,就叫这个对象的方法:
//       const person = {
//         name: 'Tom',
//         greet: function () {
//           return 'Hi, I am ' + this.name  // this 指这个对象自己
//         },
//       }
//       person.greet() // 'Hi, I am Tom'
//    this 指"调用这个方法的对象"。这里 person.greet() 里的 this 就是 person。
//    (this 是个大话题,后面深入;现在知道"this = 当前对象"即可)
//
// 8. 数组 + 对象 = 最常见的数据形状 ⭐
//    真实数据几乎都是"对象数组":
//       const users = [
//         { name: 'Tom', age: 20 },
//         { name: 'Jerry', age: 18 },
//       ]
//       users[0].name // 'Tom'  ← 先取第0个对象,再取它的 name
//       users[1].age  // 18
//    这就是后端返回的 JSON、后面高阶函数处理的典型数据。记住"数组套对象"的形状。
//
// ✅ 本主题要点回顾
//   0. 本质:JS 分"原始值 vs 对象"两阵营;数组/函数本质都是对象(能挂属性)⭐⭐
//   1. 对象 = {键: 值} 键值对;表示真实事物
//   2. 取值:.键(固定名)/ [变量](键名是变量)⭐
//   3. 增改直接赋值,删用 delete;是引用类型可原地改
//   4. 键不存在返回 undefined(不报错)⭐
//   5. Object.keys/values/entries(obj) 拿键/值/键值对 ⭐
//   6. 对象里的函数 = 方法,用 this 指自己
//   7. "对象数组"是最常见的数据形状 ⭐

// ═════ 示范 ═════

// ── 1. 创建 & 结构 ───────────────────────────────
const person = {
  name: 'Asabeneh',
  age: 100,
  isMarried: true,
  skills: ['HTML', 'CSS', 'JS'],
}
console.log(person) // 整个对象

// ── 2. 取值:点号 vs 方括号 ⭐ ────────────────────
console.log(person.name) // Asabeneh
console.log(person['age']) // 100
const key = 'isMarried'
console.log(person[key]) // true   ← 键名在变量里,只能用方括号
console.log(person.skills[0]) // HTML   ← 值是数组,继续用下标

// ── 3. 增 / 改 / 删 ──────────────────────────────
const p = { name: 'Tom' }
p.age = 20 // 增
p.name = 'Jerry' // 改
delete p.age // 删
console.log(p) // { name: 'Jerry' }

// ── 4. 键不存在 → undefined ⭐ ────────────────────
console.log(person.height) // undefined  ← 不报错

// ── 5. Object.keys / values / entries ⭐ ─────────
const q = { name: 'Tom', age: 20 }
console.log(Object.keys(q)) // ['name', 'age']
console.log(Object.values(q)) // ['Tom', 20]
console.log(Object.entries(q)) // [['name','Tom'], ['age',20]]

// ── 6. 检查键是否存在 ────────────────────────────
console.log('name' in q) // true
console.log('height' in q) // false

// ── 7. 对象里的方法 + this ───────────────────────
const dog = {
  name: 'WangCai',
  bark: function () {
    return this.name + ' says woof'
  },
}
console.log(dog.bark()) // WangCai says woof

// ── 8. 对象数组(最常见形状)⭐ ──────────────────
const users = [
  { name: 'Tom', age: 20 },
  { name: 'Jerry', age: 18 },
]
console.log(users[0].name) // Tom
console.log(users[1].age) // 18

// ═════ 轮到你 ═════

// 👇 轮到你(只给要求,自己写代码)

// 练习 A:创建一个对象 book,包含:
//   title: 'JavaScript', pages: 300, published: true
//   然后分别用【点号】打印 title,用【方括号】打印 pages

const book  = {
  title: "JavaScript",
  pages: 64,
  published: true

}
console.log(book.title)
console.log(book['pages'])


// 练习 B:接着上面的 book
//   ① 给它增加一个新键 author,值是你的名字
//   ② 把 pages 改成 350
//   ③ 删除 published 这个键
//   ④ 打印最终的 book

book['author'] = "author"
delete book['published']
console.log(book)


// 练习 C:有 const car = { brand: 'Tesla', color: 'red', year: 2024 }
//   ① 用 Object.keys 打印所有键
//   ② 用 Object.values 打印所有值
//   ③ 判断 car 里有没有 'price' 这个键(用 in)
const cat = { brand: 'Tesla', color: 'red', year: 2024 }
console.log(Object.keys(cat))
console.log(Object.values(cat))
console.log("price" in cat)



// 练习 D:有 const student = { name: 'Amy', grade: 90 }
//   给它加一个方法 describe,调用时返回 'Amy: 90'
//   (提示:方法里用 this.name 和 this.grade)
//   写完调用它并打印

// ❌
// const student = { name: 'Amy', grade: 90, describe: () => {
//   return this.name + ": " + this.grade
// }}


const student = { 
  name: 'Amy', 
  grade: 90, 
  describe: function() {
    return this.name + ": " + this.grade
  }
}
console.log(student.describe())


// 练习 E(挑战):有下面这个对象数组
//   const people = [
//     { name: 'Tom', age: 20 },
//     { name: 'Jerry', age: 18 },
//     { name: 'Spike', age: 25 },
//   ]
//   打印出第 2 个人(Jerry)的年龄,以及第 3 个人的名字。
const people = [
  { name: 'Tom', age: 20 },
  { name: 'Jerry', age: 18 },
  { name: 'Spike', age: 25 },
]
console.log(people[1].age + "\n" + people[2].name)