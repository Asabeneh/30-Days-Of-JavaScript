// 10 · 函数(Functions)
// 学练复习一体:概念总结 → 示范 → 轮到你
// 跑法:Quokka / 右上角 ▷ / node js_notes/10-functions.js
// 示范区带预期输出;轮到你区只给要求,自己写
//
// ═════════════════════ 概念总结 ═════════════════════
//
// 函数 = 把一段"要重复用的逻辑"打包起来,起个名字,以后一句话就能调用。
// 它是编程从"流水账"走向"可复用、可组合"的关键。后面的异步、高阶函数、
// 类、agent 循环,全都建立在函数之上 —— 这章是地基中的地基。
//
// ── 1. 两种写法:声明 vs 表达式 ⭐ ────────────────
//   // (a) 函数声明(declaration)
//   function add(a, b) {
//     return a + b
//   }
//   // (b) 函数表达式(expression)—— 把函数当"值"存进变量
//   const add = function (a, b) {
//     return a + b
//   }
//   区别(初学先记一条):声明会被"提升"(hoisting),定义前就能调用;
//   表达式不会,必须先定义后调用。现代代码更常用【表达式 + 箭头函数】。
//
//   ── 函数的"名字" vs 装它的"变量名" ⭐(易混,重点)──
//   三种写法,分清"函数自己叫啥"和"你用哪个名字调用它":
//     (1) const xxx = () => {}            // 箭头函数本体【匿名】,但赋值给 xxx 后,
//                                         //   引擎自动把它 .name 推断成 'xxx'
//                                         //   → 日常说"函数叫 xxx"没问题;调用用 xxx()
//     (2) const xxx = function yyy() {}   // 【具名函数表达式】:函数自己叫 yyy,xxx 是变量
//                                         //   xxx()  ✅ 用变量名调用
//                                         //   yyy()  ❌ ReferenceError!yyy 只在函数【内部】可见
//     (3) function yyy() {}               // 函数声明:函数就叫 yyy,直接 yyy() 调用(且会提升)
//
//   ⭐ 重点(2 里的坑与用途):yyy 这个名字【只在函数体内部能用】,外面看不到。
//     那 yyy 有啥用?主要一个:让函数能在【内部调用自己(递归)】,顺便 debug 时显示名字。
//     平时几乎不这么写,了解即可。
//     💡 呼应练习 F:想用递归让 repeat 调用自己,靠的就是"函数有个内部能引用的名字"——
//        函数声明 function repeat(){} 的 repeat、或具名表达式的名字,都能做到;
//        而纯箭头 const repeat = () => {} 若要递归,只能靠外层变量名 repeat 引用自己。
//
//   ── 什么叫"提升(hoisting)"?⭐ ──
//   一句话说透:JS 真正执行前,会先扫一遍代码,把某些声明"吊"到所在作用域的顶端。
//   所以你能在"字面写的位置之前"就用到它。hoisting = 吊起、提起。
//     • 函数声明 function f(){} → 【整个函数】(名字+函数体)被提到顶
//         → 定义前调用 ✅ 能用
//     • 函数表达式 const f = function(){} / 箭头 → 只有【变量名】被登记,
//       "= 赋值"留在原地不动 → 定义前调用 ❌ 报错(见下)
//
//   ── "名字提了却不让碰",提它有啥用?⭐⭐(易困惑)──
//   提升的用途【不是】让你提前用,而是另外两件事:
//     用途一:一进作用域就把所有声明"登记"好 → "这个名字归本作用域"从第一行
//            起就板上钉钉,不会前半段指外层、后半段指内层(名字归属一致)。
//     用途二:const/let 提升后标记为"未初始化,禁止访问",这段区间叫
//            【TDZ 暂时性死区】。你若在赋值前就用它 → 【当场报错】
//            ReferenceError: Cannot access 'x' before initialization。
//   对照老式 var:var 也提升,但预设值是 undefined → 提前用【静默给 undefined】,
//   把 bug 藏起来。const/let 是在这个教训上改的:保留提升(用途一),
//   但把"提前读到 undefined"升级成"提前读就报错"(用途二)。
//   → 一句话:提升负责"提前登记名字",TDZ 负责"用早了就当场拦下"。
//
//   实用建议:别去利用提升在定义前调用函数(代码会难读)。养成"先定义后用"
//   的习惯,提升对你就几乎无感 —— 而 const+箭头本来就必须先定义后用。
//
// ── 2. 箭头函数 => ⭐⭐(pi/TS 代码里到处是)────────
//   const add = (a, b) => a + b             // 无 {}:自动 return
//   const add = (a, b) => { return a + b }  // 有 {}:必须自己 return
//   const square = (n) => n * n
//   const hi = () => 'hi'                    // 没参数也要写空括号 ()
//
//   起点(记住这一句,其余都是推论):
//   ⭐⭐ => 右边【期望一个表达式】—— 即"能算出一个值的东西"(a+b、n*n、'hi' 都是)。
//     • 你给它一个表达式 → 它就是那个值 → JS 直接把这个值 return 出去(这叫"隐式返回")
//     • 所以此处 return 不但多余,而且【非法】:return 是【语句】不是表达式,
//       放在"要表达式的位置"→ 直接语法报错:
//         const add = (a, b) => return a + b   // ❌ SyntaxError(这里要表达式,return 是语句)
//
//   那要写多行逻辑呢?→ { } 是【逃生舱】:
//     一旦 => 右边以 { 开头,JS 特判它为【函数体代码块】(装语句的地方),不再当表达式看。
//     代码块只是"一堆动作",本身不产出值 → JS 不猜你要交啥 → 必须自己 return,否则返回 undefined。
//   一句话:=> 后给"值(表达式)"就自动还;开了"{代码块}"就得自己 return。
//
//   ⚠️ 由上面那句核心推出:对象字面量 { } 也以 { 开头 → 会撞上"代码块"这条特判!
//     想直接返回对象,用 () 裹住,强行回到"表达式"语境:
//       const make = (name) => { name: name }    // ❌ { 被当代码块 → 返回 undefined
//       const make = (name) => ({ name: name })  // ✅ () 逼它当表达式 → 返回对象
//     为什么 ❌ 那行不【报错】只是静默 undefined?因为 { 当代码块后,里面 `name:`
//     被当成【标签语句】(JS 给循环起名字的老语法,形如 `outer:`,见 09 章),
//     语法完全合法 → 不报错却啥也没返回。这种"静默 undefined"最难查。
//   ⚠️ 单个参数可省括号(n => n*n),但 0 个或 ≥2 个必须带括号。
//   ⚠️ 箭头函数没有自己的 this(复习 07 章坑 L:对象方法别用箭头)。
//
// ── 3. 参数 vs 实参、默认参数 ────────────────────
//   function greet(name) { ... }   // name 是"形参"(占位)
//   greet('Tom')                   // 'Tom' 是"实参"(真值)
//   function greet(name = '游客') { ... }  // 默认参数:没传就用默认值
//     greet()      // name = '游客'
//     greet('Tom') // name = 'Tom'
//
// ── 4. return:把结果"交出来" ⭐ ──────────────────
//   - return 后面的值就是"函数调用的结果",可以接住:const r = add(1,2)
//   - 函数没写 return → 返回 undefined(常见坑:算了但没交出来)
//   - return 一执行,函数【立刻结束】,后面的代码不再跑
//   ⚠️ return 后面别换行!(复习分号笔记坑2:return 换行会被强行补 ; 返回 undefined)
//
// ── 5. 作用域 scope:变量的"可见范围"⭐ ───────────
//   - 函数里 let/const 声明的变量,只在函数内可见(出了函数就不存在)
//   - 里面能看到外面(外层变量),外面看不到里面(封装)
//   - {} 块级作用域:let/const 只在那对花括号内有效
//     function f() { const secret = 1 }
//     console.log(secret) // ❌ ReferenceError:出了函数就看不见
//
// ── 6. 函数是"一等公民":能当值传来传去 ⭐⭐ ───────
//   函数本身也是一种值,可以:存进变量、当参数传给别的函数、被返回。
//   把"函数当参数传进去"的那个函数,就叫【高阶函数】(下一章专讲):
//     [1,2,3].map(n => n * 2)   // 把箭头函数传给 map
//   💡 这正是 agent/pi 的核心套路:注册一堆"工具函数",框架在合适时机回调它们。
//
//   ── 为什么函数还"有属性"?因为函数就是【可调用的对象】⭐ ──
//   函数本质是【对象】(复习 07 章 §0),只是比普通对象多一个本事:能被 () 调用。
//   既然是对象,"能挂键值对属性"就是它天生的能力:
//     • 自带属性(不是你加的,存"关于函数自己的信息"):
//         const greet = (a, b) => a + b
//         greet.name    // 'greet'  ← 函数的名字(上次问"函数叫啥"就是读它)
//         greet.length  // 2        ← 声明了几个参数
//     • 你也能自己挂(因为它是对象)——让函数"随身带状态":
//         function counter() { counter.callCount++ }
//         counter.callCount = 0
//         counter(); counter()      // counter.callCount 变成 2
//   一条因果链把这几天的知识串起来 ⭐:
//     函数是一等公民 → 所以它得是个【值(对象)】→ 所以能挂属性、能当参数传
//     → 所以才有 map/filter/回调 这套玩法。根子都在"一等公民"这一句。
//   💡 对比 Python:Python 函数【同样】是对象、是一等公民(__name__ 自带属性、
//      也能挂自定义属性、能当参数传 map)。区别只在习惯:Python 给函数挂属性较少见,
//      且更爱用【列表推导式 [n*2 for n in xs]】而非 map。底层道理一致,直觉可迁移。
//
// ═════ 要点回顾 ═════
// 1. 两种写法:function 声明(会提升)/ const = function 表达式(不提升)
// 2. 箭头函数 (a,b) => a+b:单表达式自动 return;没自己的 this ⭐⭐
// 3. 默认参数 name = '游客':没传就用默认
// 4. return 交出结果;不写 return 得 undefined;return 后别换行 ⭐
// 5. 作用域:里能看外,外看不到里;let/const 是块级 ⭐
// 6. 函数能当值传递 → 回调 / 高阶函数(下一章)⭐⭐
//    根源:函数是"可调用的对象"→ 所以有属性(.name/.length)、能当参数;Python 同理
//
// ═════════════════════ 示范 ═════════════════════

// ── 1. 函数声明 ──────────────────────────────────
function add(a, b) {
  return a + b
}
console.log(add(2, 3)) // 5

// ── 2. 函数表达式(把函数存进变量)────────────────
const multiply = function (a, b) {
  return a * b
}
console.log(multiply(4, 5)) // 20

// ── 2.5 提升 hoisting:声明能"提前用",表达式不能 ⭐ ──
console.log(hoisted()) // works!  ← 在定义【上面】就调用,函数声明被整体提升,能用
function hoisted() {
  return 'works!'
}
// 对照:const/箭头是表达式,提前用会报错(TDZ)。取消注释验证:
// console.log(notYet())            // ❌ ReferenceError: Cannot access 'notYet' before initialization
// const notYet = () => 'nope'

// ── 3. 箭头函数:三种写法,越来越短 ⭐ ─────────────
const addArrow1 = (a, b) => {
  return a + b // 带 {} 要自己写 return
}
const addArrow2 = (a, b) => a + b // 单表达式:自动 return
const square = (n) => n * n // 单参数,可省外层括号(这里保留更清晰)
const sayHi = () => 'hi' // 无参数:空括号不能省
console.log(addArrow1(1, 2)) // 3
console.log(addArrow2(1, 2)) // 3
console.log(square(5)) // 25
console.log(sayHi()) // hi

// ── 4. 默认参数 ──────────────────────────────────
const greet = (name = '游客') => `你好, ${name}`
console.log(greet()) // 你好, 游客   ← 没传,用默认
console.log(greet('Tom')) // 你好, Tom    ← 传了,用传的

// ── 4.5 箭头返回对象:{ 的两种身份(呼应概念 2)⭐ ──
const makeBad = (name) => { name: name } // { 被当"代码块",不是对象
console.log(makeBad('Tom')) // undefined   ← 坑!啥都没返回
const makeGood = (name) => ({ name: name }) // () 强制当"值" → 真的返回对象
console.log(makeGood('Tom')) // { name: 'Tom' }

// ── 5. return 交出结果;不写 return → undefined ⭐ ─
const noReturn = (x) => {
  x * 2 // 算了,但没 return 出来
}
console.log(noReturn(10)) // undefined  ← 没交出来!

// return 一执行,函数立刻结束
const firstPositive = (a, b) => {
  if (a > 0) return a // a 是正数就直接返回,下面不再跑
  return b
}
console.log(firstPositive(5, 9)) // 5
console.log(firstPositive(-1, 9)) // 9

// ── 6. 作用域:里能看外,外看不到里 ⭐ ─────────────
const outer = 'I am outside'
const showScope = () => {
  const inner = 'I am inside'
  console.log(outer) // I am outside  ← 里面能看到外面
  console.log(inner) // I am inside
}
showScope()
// console.log(inner) // ← 取消注释会报错:inner is not defined(外面看不到里面)

// ── 7. 函数当值传递(回调的雏形)⭐⭐ ──────────────
// 把一个函数作为参数传给另一个函数
const applyTwice = (fn, x) => fn(fn(x)) // fn 是"传进来的函数"
const inc = (n) => n + 1
console.log(applyTwice(inc, 5)) // 7   ← inc(inc(5)) = 7
// 💡 pi 里注册工具、事件回调,本质就是这样"把函数传进去,框架来调用"

// ═════════════════════ 轮到你 ═════════════════════
// (只给要求,自己写代码)

// 练习 A:写一个【函数声明】叫 double,接收一个数字,返回它的两倍。
//   调用 double(8) 并打印(应为 16)
function double(num) {
  return num * 2
}
console.log(double(8))

// 练习 B:把练习 A 改写成【箭头函数】版本(单表达式、自动 return),
//   存进 const doubleArrow,调用并打印
const doubleArrow = num => num * 2
console.log(doubleArrow(8))


// 练习 C:写一个箭头函数 greetUser(name),
//   给 name 一个默认值 'guest',返回 `Hello, xxx`。
//   分别在"传名字"和"不传"两种情况下调用并打印
const greetUser = (name = 'guest') => `Hello, ${name}`
console.log(greetUser())
console.log(greetUser("sample name"))

// 练习 D:写一个函数 max2(a, b),返回两个数里较大的那个。
//   要求用到 return 提前结束(想想练习示范 5 的 firstPositive)。
//   用 max2(3, 9) 和 max2(10, 2) 各测一次
function max2(a, b) {
  if ( a >= b) {
    return a
  }
  return b
}



// 练习 E(动脑):下面这段为什么打印 undefined?先想再动手改好它,
//   让它正确返回并打印 triple(7)。(提示:看 return)
//   const triple = (n) => { n * 3 }
//   console.log(triple(...))   ← 你来补,并修好 triple
const triple = (n) => {return n * 3 }
console.log(triple(7))




// 练习 F(挑战,连接下一章):写一个高阶函数 repeat(fn, times),
//   它把传进来的函数 fn 连续调用 times 次(每次打印一句话即可)。
//   例:repeat(() => console.log('hi'), 3) 应打印三行 hi。
//   提示:times 次 → 用循环;fn 是"传进来的函数",直接 fn() 就能调用

const fn = () => {console.log("执行一次fn函数")}

// ❌ 最初版:把 repeat 和 fn 搞混,fn(fn, times-1) —— fn 不会递归,只执行一次
// const repeat = (fn, times) => {
//   if (times === 0) return
//   return fn(fn, times -1)
// }

// ❌ 第二版:fn() 在前、判断在后 —— 能跑,但 repeat(fn, 0) 会先打印再停 = 打印 1 次(边界错)
// const repeat = (fn, times) => {
//   fn()
//   times -= 1
//   if (times === 0) return
//   repeat(fn, times)
// }

// ✅ 终版:判断在前 → repeat(fn, 0) 直接返回,打印 0 次(边界正确)
const repeat = (fn, times) => {
  if (times === 0) return // 先判断:times 为 0 就不打印(edge case 处理对)
  fn()
  times-=1
  // return repeat(fn, times)
  repeat(fn, times) // 不需要 return 也行(不需要返回值)
}

repeat(fn, 3)


// 函数也是对象:验证"赋值共享同一个"
let x = fn
let y = x // x、y 指向同一个函数对象(x === y 为 true)

// ❌ 用 .name 验证共享会"看走眼":.name 是只读属性,这次赋值【静默失败】
y.name = "修改y的name"
console.log(x.name) // 'fn'  ← 没变!不是"没共享",是 .name 改不动(writable:false)

// ✅ 用普通属性才验证到共享:改 y.foo,x.foo 立刻跟着变
y.foo = "shared!"
console.log(x.foo) // 'shared!'  ← 这才证明 x、y 是同一个对象

// .name 为什么改不动?看它的属性描述:writable:false = 只读
console.log(Object.getOwnPropertyDescriptor(x, "name")) // { value:'fn', writable:false, ... }
