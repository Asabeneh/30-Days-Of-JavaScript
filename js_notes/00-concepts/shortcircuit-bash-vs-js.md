# 通用概念 · `&&` / `||`:Linux(bash) vs JavaScript

> 跨环境对照。shell 和 JS 来回切时看这篇。相关:`../05-conditionals/notes.md` 第 5 节。

## 相同点:都是"短路求值"

"左边决定要不要看右边"—— 这个思路两边完全一致。

```bash
# bash
命令A && 命令B    # A 成功才执行 B
命令A || 命令B    # A 失败才执行 B
```
```js
// JS
a && b // a 为真才看 b
a || b // a 为假才看 b
```

## 不同点:操作数是"命令" vs "值"

| | Linux (bash) | JavaScript |
|---|---|---|
| 左右两边是 | **命令**(程序) | **值 / 表达式** |
| "真/假"看什么 | **退出码**:`0`=成功=真,非0=失败=假 | **truthy/falsy**:值本身 |
| 返回什么 | 最后执行命令的退出码 | **操作数原值** |

## ⚠️ 最大的坑:`0` 的真假正好相反

```bash
# Linux:退出码 0 = 成功 = 真
true && echo yes # 打印 yes(true 的退出码是 0)
```
```js
// JS:数字 0 = falsy = 假
0 && console.log('yes') // 不打印(0 是假)
```

- Linux 的 `0`:退出码 0 = "没出错" = **真**
- JS 的 `0`:数值零 = "空/无" = **假**

**同一个 `0`,两个世界真假颠倒。** 这是切换时最容易栽的地方。

## 相同的惯用法(思路可直接迁移)

```bash
# bash:|| 兜底
result=$(cat file) || result="default"
# bash:&& 前置守卫
[ -f config ] && load_config
```
```js
// JS:|| 设默认值
const result = readFile() || 'default'
// JS:&& 守卫
config && loadConfig()
```

## ⚠️ 另一个差异:两边"能串什么"

bash 的 `&&`/`||` 串的是**命令**(任意命令都行,`mkdir dir && cd dir`)。
JS 的 `&&`/`||` 是**运算符**,两边只收**表达式**(有值的东西),不能塞【语句】:

```js
user && user.login()     // ✅ 函数调用是表达式,行(守卫)
cache || compute()       // ✅ 兜底
true && const x = 1      // ❌ SyntaxError:const 声明是【语句】
true && if (a) {...}     // ❌ SyntaxError:if 是【语句】
```

→ 所以【不能】像 shell 那样用 `&&` 串任意语句块。要按条件跑一段带 if/for/多行的逻辑,
就老老实实用 `if`;`&&`/`||` 只适合串"一个简短表达式"(一次函数调用、一个赋值)。
(为什么?见 `expression-vs-statement.md`:运算符两边只接表达式。)

## ✅ 一句话

> 短路逻辑 Linux 和 JS **一致**,惯用法也像(`||`兜底、`&&`守卫)。
> 区别:**bash 操作"命令"看退出码,JS 操作"值"看 truthy/falsy**;
> 最大的坑:**`0` 在 bash 是真(成功),在 JS 是假**。
