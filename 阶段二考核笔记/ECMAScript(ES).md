# ECMAScript

## 一、什么是 ECMAScript？

**ECMAScript（简称 ES）** 是由 ECMA 国际制定的一种**脚本语言标准**，JavaScript 是它的最著名实现。

- **JavaScript** 是一种基于 ECMAScript 规范的语言，除此之外还包括：
  - DOM（文档对象模型）
  - BOM（浏览器对象模型）
- ECMAScript 定义的是语言的**语法、关键字、数据类型、运算符、语句、函数、类等核心功能**。

------

## 二、ECMAScript 的版本演进（重要版本）

| 版本                               | 发布时间 | 主要特性                                                   |
| ---------------------------------- | -------- | ---------------------------------------------------------- |
| ES1                                | 1997年   | 初始版本                                                   |
| ES3                                | 1999年   | 正式被广泛使用                                             |
| ES5                                | 2009年   | 严格模式、JSON、Array 方法                                 |
| **ES6（ES2015）**                  | 2015年   | let/const、箭头函数、Promise、模块、类、解构、模板字符串等 |
| ES7（2016）                        | 2016年   | Array.prototype.includes、指数运算符 `**`                  |
| ES8（2017）                        | 2017年   | async/await、Object.entries/values                         |
| ES9（2018）                        | 2018年   | 异步迭代器、Rest/Spread 支持对象                           |
| ES10（2019）                       | 2019年   | flat/flatMap、trimStart/trimEnd、Optional catch binding    |
| ES11（2020）                       | 2020年   | 可选链 `?.`、空值合并 `??`、Promise.allSettled             |
| 之后每年都有更新，逐步完善语言功能 |          |                                                            |



>  **ES6 是一个分水岭**，现代 JavaScript 基本都建立在 ES6 及以后的语法基础上。

------

## 三、ECMAScript 与 JavaScript 的关系

| ECMAScript                         | JavaScript               |
| ---------------------------------- | ------------------------ |
| 语言标准                           | 实际实现                 |
| 只定义核心语言                     | 包括 DOM/BOM/Web API     |
| 浏览器、Node.js 依 ECMAScript 实现 | 各浏览器提供实际运行环境 |



------

## 四、ECMAScript 主要内容包括哪些？

1. **变量声明**：`var`、`let`、`const`
2. **数据类型**：基本类型 + 引用类型
3. **运算符**
4. **控制语句**：if、switch、for、while 等
5. **函数定义与调用**：普通函数、箭头函数、参数默认值、剩余参数
6. **对象操作**：对象创建、对象方法、对象解构、扩展运算符
7. **类与继承**
8. **模块化**：`export` / `import`
9. **异步编程**：Promise、async/await
10. **错误处理**：try/catch/finally
11. **新特性支持**：可选链、空值合并、私有属性等