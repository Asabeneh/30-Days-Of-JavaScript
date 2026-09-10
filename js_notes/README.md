# 📚 我的 JavaScript 学习笔记

跟着 `30-Days-Of-JavaScript` 教程学,但**按知识体系整理**,方便日后复习。
开始于 2026-07。

---

## 🧭 怎么用这个目录

- 每个主题就是**根目录下一个 `编号-主题.js` 单文件**(如 `08-sets-maps.js`),
  学练复习一体,内含三段:
  1. **概念总结区**(文件顶部注释,含 ASCII 表格)—— 复习先看这里
  2. **示范区** —— 带预期输出的可运行代码
  3. **轮到你区** —— 练习题,只给要求不给答案
  用 `// ═════ 概念总结 ═════` / `// ═════ 示范 ═════` / `// ═════ 轮到你 ═════` 分隔。
- 编号(`01-`, `02-`…)只表示**推荐学习顺序**,不是"第几天"
- 例外:`00-concepts/` 仍是文件夹(跨主题通用概念一组,多为 `.md`)

> 📌 结构演变:早期用 `NN-topic/`(内含 `notes.md`+`practice.js`)分开两文件,
> 现已扁平化为**根目录单文件 `NN-topic.js`**(概念写进代码注释),减少重复、复习更快。

### 运行代码的三种方式

| 方式 | 怎么做 | 适合 |
|---|---|---|
| **Quokka(免费版)** | `Cmd+Shift+P` → `Quokka: Start on Current File` | 边写边看 `console.log` 的值(纯逻辑练习) |
| **Code Runner ▷** | 右上角 ▷,或 `Ctrl+Alt+N` | 在终端跑整个文件 |
| **浏览器 + F12** | 打开 `index.html`,看 Console | 涉及 `document`/DOM 的代码 |

> ⚠️ 判断能不能用 ▷/Quokka 跑:文件**自包含**(自己定义自己用、无 `document`)就能跑;
> 依赖别的文件的变量、或含 `document` 的,要用**浏览器**。

---

## 🗺️ 知识地图(带进度)

### 〇、通用概念(跨主题,随时查)
- `00-concepts/my-mistakes.md` —— 🕳️ **我的踩坑记录**(复习先看这个!含报错秒查表)⭐
- `00-concepts/call-forms.md` —— 三种调用形式:`值.方法()` vs `函数()` vs `类.方法()`
- `00-concepts/value-vs-reference.md` —— 值 vs 引用:复制 vs 共享、字符串不可变 ⭐
- `00-concepts/shortcircuit-bash-vs-js.md` —— `&&`/`||`:bash vs JS(`0` 真假相反)
- `00-concepts/semicolons-and-asi.md` —— 分号 `;` 什么时候【必须】写(ASI 的坑:行首 `(`/`[`、`return` 换行)⭐
- `00-concepts/expression-vs-statement.md` —— 表达式 vs 语句:谁有值/能当值用(串起箭头 `=>`、三元、return)⭐

### 一、基础与数据
- [x] `01-basics` 基础:输出、注释、表达式、字符串引号、运行方式
- [x] `02-variables` 变量与数据类型
- [x] `03-operators` 运算符
- [x] `04-strings` 字符串(常用方法)
- [x] `05-conditionals` 条件与布尔

### 二、数据结构
- [x] `06-arrays` 数组
- [x] `07-objects` 对象
- [x] `08-sets-maps` Set 与 Map

> 🎯 **本路线已为目标「用 pi 搭 agent + 读懂 pi 关键源码」做过适配**:
> 异步大幅提前(agent 命脉)、新增模块与 TS 专题、前端相关暂缓。原教程的
> day 顺序仅作参考。

### 三、逻辑与函数(pi 前置 · 核心)
- [x] `09-loops` 循环
- [x] `10-functions` 函数(声明/表达式、箭头、参数、返回、作用域、提升/TDZ)
- [x] `11-higher-order-functions` 高阶函数 + 回调(map / filter / reduce、链式)← 读 TS 必备
- [ ] `12-destructuring-spread` 解构与展开 ← pi 源码里到处是,读代码前置
- [ ] `13-closures` 闭包(理解 agent 状态、回调捕获)

### 四、异步与工程结构(agent 的命脉)⭐
- [ ] `14-modules` 模块 import / export ← 新增:monorepo/多包的地基
- [ ] `15-promises-async` 异步 Promise / async-await ← 从原第18提前!每个 LLM 调用都是异步
- [ ] `16-error-handling` 错误处理 try/catch ← 和 await 搭配
- [ ] `17-classes` 类 class ← agent 运行时/状态管理常用
- [ ] `18-json` JSON ← LLM 的输入输出、tool calling 都是 JSON

### 五、TypeScript(看懂 pi 的门票)⭐
- [ ] `19-ts-basics` TS 基础:为什么要类型、类型标注、`interface` / `type`
- [ ] `20-ts-generics` 泛型 `<T>`、联合类型、如何读懂函数签名
- [ ] `21-ts-project` 工程:模块类型、`tsconfig`、怎么读 `.d.ts` 和别人的类型

### 六、Agent 领域 + pi 实战
- [ ] `22-agent-concepts` 领域概念:LLM API、tool calling、agent loop 是什么
- [ ] `23-pi-hello` 用 pi 搭一个最小可跑的 agent
- [ ] `24-pi-source-reading` 精读 pi 源码(挑软柿子,逐行带读,不求全懂)

### 附:暂缓(和 pi 无关,想做前端再回来)
- 正则表达式 / DOM 操作 / 事件监听 / Web Storage / 综合前端项目

---

## 📏 练习规矩(给协作者/AI)

- **练习题让用户自己改**,不要替他写答案。
- **出题不写答案**:"轮到你"区域只给要求,不放正确答案(哪怕注释掉也不行,会剧透)。
- **提示只给方向,不给完整写法**:如 `raw.trim().toLowerCase()` 这种整句提示等于给答案,不行;
  应改成"两个方法可以链式连写"这种点思路的说法。
- 示范区(讲解用的例子)可带预期输出;题目区不带。
- **用户每犯一个新错,吸收进 `00-concepts/my-mistakes.md`**(错法→现象→正解→教训),
  并带 **📍来源索引**(原题文件+练习号、相关笔记章节),方便跳回原题。复习时才记得住坑在哪。

## ✍️ 命名约定

- 文件夹:`编号-英文主题`,如 `06-arrays`
- 笔记:`notes.md`;练习:`practice.js`
- 一个主题内容多时,练习可拆成 `practice_01_xxx.js` 等
