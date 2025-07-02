# JS 深度学习

## 一、函数

### 1、自定义函数

* **函数声明**(==声明前可调用==<=>函数声明可提升)

  * **function** 函数名(参数1,……) {函数体}

    ```js
    // 函数声明
    
    //单参
    function greet(name) {
        return "Hello, " + name;
    }
    
    //多参
    function sum(num1,num2){
        return "Sum" = num1 + num2;
    }
    ```

  

* **函数表达式**

  * const 表达式名=function 函数名(参数) {函数体}

    * ==必须写完整，不能漏函数体！！！==
    * ==调用必须在声明之后==
    
    ```JS
    //函数表达式
    const greetExpression = function(name) {
        return "你好, " + name + "!";
    };
    console.log(greetExpression("朋友")); // 输出: 你好, 朋友!
    ```

⚠️ **函数声明会==整体提升==（包括函数体），而函数表达式==只提升变量声明==（其值为 `undefined`），赋值部分不会提升。**



* **箭头函数（ES6）**

  * const  表达式名= (参数) => {函数体}/函数体（单句）

    ```JS
    //箭头函数
    const add = (a, b) => {
        return a + b;
    };
    // 或者更简洁的写法 (隐式返回)
    const multiply = (a, b) => a * b;
    
    console.log(add(5, 3));       // 输出: 8
    console.log(multiply(5, 3)); // 输出: 15
    ```

  * ==箭头函数没有自己的 `this`==，它会捕获其所在上下文的 `this` 值。因此，**它不能用作构造函数**，也没有 `arguments` 对象。



### 2、调用方法

**<u>函数的==调用方式决定了函数内部 `this` 关键字的指向==以及参数的传递。</u>**

* **全局调用**

  * <u>当一个函数**不作为任何对象的方法被直接调用**时，它就是全局调用。</u>

    * 在非严格模式下，this 指向全局对象（<u>浏览器中是 window，Node.js 中是 global</u>）。

    * 在严格模式下，this 是 <u>undefined</u>。

      * 🤓严格与非严格：简单来说，严格模式是<u>为了更严谨的的规范</u>而做的为非严格模式**打补丁**的操作
      
      ```js
      function showThis() {
        console.log(this);
      }
      showThis(); // 非严格模式下输出 window/global，严格模式下输出 undefined
      ```

* **构造函数调用**（`new`）

  * **<u>当函数与 `new` 关键字一起使用时，它作为构造函数被调用。</u>**

    * **JavaScript引擎在运行时执行的指令集：**

    	1. **创建一个新的空对象**。
    	   * new来一块<u>“新地方”</u>
      
       ```JS
       let obj = {};
    	 ```
    	
    	2. 这个新对象被设置为函数调用的 `this`。
         * 重置 this， <u>把 this 指向“新地方”装数据</u>
      
       ```JS
       function Person(name) {
         this.name = name;
       }
       
    	 let p = new Person("Alice");
    	 ```

      3. **新对象的 `[[Prototype]]` (或 `__proto__`) 被设置为构造函数的 `prototype` 对象**。
    	   * <u>“加载”</u> 模板
    	
    	3. **执行构造函数内部的代码**。
    	   
    	4. **如果函数没有显式返回一个对象，则隐式返回这个新创建的 `this` 对象**。
    	   * 无显式对象时返回隐式对象（即this），<u>没特殊返回就把“新地方”交出去</u>
    	

* **函数方法调用**

  * **当一个函数作为对象的一个属性（即方法）被调用时，`this` 指向==调用该方法的对象==。**

    * 函数作为对象的一个属性出现

      ```JS
      obj.method();  //  典型的方法调用
      
      //这里的 method() 是一个函数，它作为 obj 的属性存在。
      ```

      * this指向obj

    ⚠️ 把方法赋值给变量，再调用，会变成“普通函数调用”

    ```js
    const obj = {
      name: "Bob",
      sayHi() {
        console.log(this.name);
      }
    };
    
    const f = obj.sayHi;
    f(); // ❌ this 是 undefined 或 window，不再是 obj
    ```
	  * 原因：this是==**动态绑定**==对象的指针




* **apply**

  * **apply() 方法调用一个函数，并允许你为其指定 this 值，以及一个参数==数组==（或类数组对象）。**

    * 语法：func.apply(thisArg, [argsArray])

      * `thisArg` ：函数执行时的 `this` 指向
      * `[arg1, arg2, ...]` ：传递给函数的参数（**数组形式**）
      
    ```JS
    function greet(greeting, punctuation) {
      console.log(greeting + ", " + this.name + punctuation);
    }
    const user = { name: "李四" };
    greet.apply(user, ["你好", "!"]); // 输出: 你好, 李四!
    
    const numbers = [5, 6, 2, 3, 7];
    const max = Math.max.apply(null, numbers); // null 因为 Math.max 不依赖 this
    console.log(max); // 输出: 7
    ```
    
    
  
* **call**

  * **call() 方法也调用一个函数，并允许你为其指定 this 值，但参数是直接==逐个传递==的，而不是作为数组。**

    * 语法：func.call(thisArg, arg1, arg2, ...)

      * `thisArg` ：函数执行时的 `this` 值
    * `arg1...` ：要传给函数的参数
    
    ```JS
    function introduce(city, country) {
      console.log("我叫 " + this.name + "，我来自 " + country + " 的 " + city + "。");
    }
    const person = { name: "王五" };
    introduce.call(person, "北京", "中国"); // 输出: 我叫 王五，我来自 中国 的 北京。
    ```

区分：


| 方法    | 参数形式               |
| ------- | ---------------------- |
| `call`  | 参数用逗号分隔（常规） |
| `apply` | 参数必须是一个**数组** |

* *** bind**

  * 创建一个 **新函数**，这个新函数的 `this` 永久绑定为你指定的对象。
    但注意：**它不会立即执行**，只是“返回一个已绑定的函数”。

    * 语法：func.bind(thisArg, arg1, arg2, ...)
      * `thisArg`：你想让函数里的 `this` 指向谁
      * 后续参数：调用时的默认参数（可选）

    ```JS
    const person = {
      name: "Alice"
    };
    
    function greet(greeting) {
      console.log(`${greeting}, I'm ${this.name}`);
    }
    
    const sayHi = greet.bind(person); // 👈 绑定了 this
    sayHi("Hello"); // 输出：Hello, I'm Alice
    ```

仨区别：

| 特性           | `call` / `apply`     | `bind`                     |
| -------------- | -------------------- | -------------------------- |
| 是否立即执行   | ✅ 是                 | ❌ 否（返回新函数）         |
| 是否修改原函数 | ❌ 否                 | ❌ 否（返回新函数）         |
| this 绑定      | ✅ 临时绑定一次       | ✅ 永久绑定在新函数中       |
| 是否可复用     | ❌ 不可（每次都要写） | ✅ 可（保存为变量重复使用） |



**小总结**

| 调用方式         | 语法示例                              | `this` 指向                               | 参数传递方式               | 是否立即执行 | 典型用途 / 特点                            |
| ---------------- | ------------------------------------- | ----------------------------------------- | -------------------------- | ------------ | ------------------------------------------ |
| **全局调用**     | `func()`                              | 非严格模式：`window`严格模式：`undefined` | 普通参数                   | ✅ 是         | 最普通调用方式，容易丢失 `this`            |
| **构造函数调用** | `new Func()`                          | 新建的对象（实例）                        | 普通参数                   | ✅ 是         | 创建实例对象，`this` 指向新建对象          |
| **方法调用**     | `obj.method()`                        | `obj`（调用函数的对象）                   | 普通参数                   | ✅ 是         | 常见的对象方法调用方式                     |
| **apply**        | `func.apply(thisArg, [args])`         | 显式绑定为 `thisArg`                      | 参数以数组形式传入         | ✅ 是         | 参数是数组/类数组时使用                    |
| **call**         | `func.call(thisArg, arg1, arg2, ...)` | 显式绑定为 `thisArg`                      | 参数逐个传入（逗号分隔）   | ✅ 是         | 参数固定时手动绑定 `this`                  |
| * **bind**       | `const f = func.bind(thisArg)`        | 永久绑定为 `thisArg`                      | 可预设部分参数，执行时补足 | ❌ 否（延迟） | 返回新函数，不立即执行，适合回调、事件处理 |



### 3、闭包

==闭包并不是一个语法结构，而是一种**运行时的行为结果**。==

闭包：函数“记住”了它定义时的作用域环境，即使它脱离了原来的作用域，也能访问那里定义的变量。

**本质**：<u>闭包 = 函数 + 其“定义时”所处的词法作用域</u>

**核心特性：**

1. 函数嵌套函数。
2. 内部函数可以引用外部函数的变量。
3. 外部函数返回内部函数，或者内部函数被传递到外部作用域。
   故：==外层函数的变量不会被垃圾回收机制回收==，即**“还活着”**，因为内层函数仍在引用它。

```JS
function createCounter() {
  let count = 0; // 这个变量被闭包捕获 
				 //⚠️变量会被修改时不能使用 const！！
				 //使用闭包时常用let，因为let不会有变量提升，不会被重新声明，更安全

  return function() { // 这是内部函数，是一个闭包
    count++;
    console.log(count);
  };
}

const counter1 = createCounter();
counter1(); // 输出: 1
counter1(); // 输出: 2

const counter2 = createCounter(); // 创建了新的闭包环境
counter2(); // 输出: 1
```

**梳理下流程**：

* 第一步：在函数内部**定义另一个函数**（形成词法作用域嵌套）
  * <u>内部函数就是闭包的“候选人”，它有机会访问外层函数的变量。</u>

* 第二步：把内部函数**“导出”**到外部作用域（脱离定义环境）
  * <u>通常是通过 `return` 返回，或者赋值到某处</u>

* 第三步：在外部调用这个内部函数，**触发闭包**效果
  

**闭包用途：**

- **数据封装和私有变量：** 外部无法直接访问 count，只能通过闭包提供的接口。
- **创建特定状态的函数：** 如计数器、事件处理回调。
- **模块化：** 在ES6模块出现之前，闭包是实现模块模式（暴露公共接口，隐藏内部实现）的常用方式。

**优缺点：**

- **优点**：
  - **数据封装和私有变量**：可以创建只有特定函数才能访问的私有变量。
  - **持久化变量**：让变量的值始终保存在内存中。

- **缺点**：
  - **内存泄漏**：由于闭包会使得函数中的变量都被保存在内存中，如果滥用闭包，可能会导致内存消耗过大，甚至造成==内存泄漏==。



## 二、作用域 作用域链

- **作用域**：规定了变量和函数的可访问范围。它控制着变量的生命周期，并实现了信息的隔离。

  * 也就<u>是变量的“可见范围”，决定了你在代码中**可以访问哪些变量**。</u>

  

  * **分类**：

    * **全局作用域**：在代码的最外层定义的变量拥有全局作用域，在任何地方都可以访问。
      * `var` 声明的变量会挂载到 `window`（或 Node 的 global）对象上
        意思就是

    * **函数作用域**：在函数内部定义的变量，只能在该函数内部访问。
      *  <u>函数内部访问全局变量时，不会产生作用域污染</u>
        * 因为函数虽然访问的是全局变量，但并<u>不会“复制”变量进来</u>，函数只是**通过作用域链**查找使用它
    * **块级作用域**：由 `{}` 包裹的范围，如 `if`、`for` 语句块。
      * `let` 和 `const` 声明的变量具有块级作用域。
      * var **没有**块级作用域，因为 `var` 只受函数作用域影响，不受 `{}` 块限制。

  | 作用域类型 | 支持的声明方式        | 推荐使用方式                    |
  | ---------- | --------------------- | ------------------------------- |
  | 全局作用域 | `var`、`let`、`const` | 用 `const` 或 `let`，避免 `var` |
  | 函数作用域 | `var`、`let`、`const` | 通常用 `const`/`let`            |
  | 块级作用域 | `let` 、 `const`      | 必须用 `let` 或 `const`         |



- **作用域链**：

  - 当我们在函数中访问一个变量时，**如果当前作用域中没有这个变量**，就会==**沿着外层作用域一层一层向上查找**==，直到找到为止 —— <u>这条查找链条就叫 **作用域链**</u>。
    
  - **工作机制**：当访问一个变量时，JavaScript 引擎会**首先在当前作用域中查找**。如果找不到，就会<u>**沿着作用域链向上级作用域查找**</u>，直到找到该变量或者到达最顶层的全局作用域。如果全局作用域也没有找到，则会抛出 `ReferenceError`[^1]。

  ```JS
  let globalVar = 'global'; // 全局作用域
  
  function outerFunc() {
      let outerVar = 'outer'; // outerFunc 的函数作用域
  
      function innerFunc() {
          let innerVar = 'inner'; // innerFunc 的函数作用域
          // 作用域链: innerFunc -> outerFunc -> global
          console.log(innerVar);  // 在当前作用域找到 'inner'
          console.log(outerVar);  // 在父级作用域找到 'outer'
          console.log(globalVar); // 在全局作用域找到 'global'
      }
  
      innerFunc();
  }
  outerFunc();
  ```



- **作用域 vs `this` vs 闭包：**
  * **作用域** 决定你“能访问谁”
  *  **this** 决定“谁来调用我”
  * **闭包** 决定“我还能记得谁”

| 特性                 | 作用域                             | `this`                           | 闭包                                        |
| -------------------- | ---------------------------------- | -------------------------------- | ------------------------------------------- |
| **绑定时机**         | ✅ **定义时**                       | ❌ **调用时**                     | ✅ **定义时**                                |
| **控制的内容**       | 变量的“查找路径”                   | 当前函数的调用上下文             | 函数对外部变量的引用关系                    |
| **与调用方式关系**   | ❌ 无关                             | ✅ 紧密相关                       | ❌ 无关                                      |
| **是否静态结构**     | ✅ 静态                             | ❌ 动态                           | ✅ 静态（创建时固定）                        |
| **是否影响生命周期** | ❌ 不影响                           | ❌ 不影响                         | ✅ **保留变量，防止被 GC[2] 回收**           |
| **常见混淆点**       | `this` 是不是作用域？<br>❌**不是** | `this` 是不是闭包？<br>❌**不是** | 闭包是不是 `this` 的特殊形式？<br>❌**不是** |

## 



## 三、深挖JS更多语法

### 1、正则表达式

- **定义**：一个描述字符模式的对象，用于字符串的==模式匹配、搜索和替换==。

- **创建方式**：

  1. **字面量**： `const regex = /pattern/flags;` (<u>推荐，性能更好</u>)
  2. **构造函数**： `const regex = new RegExp('pattern', 'flags');`

  - `flags` (标志):
    - `g`: **全局搜索**
    - `i`: **忽略大小写**
    - `m`: **多行匹配**

- **常用方法**：

  - `RegExp.prototype.test(str)`: 测试字符串是否匹配模式，返回 `true` 或 `false`。

  - `RegExp.prototype.exec(str)`: 执行搜索，返回一个包含匹配信息的数组，或在未找到匹配时返回 `null`。

  - `String.prototype.match(regex)`: 找到一个或多个正则表达式的匹配。

  - `String.prototype.search(regex)`: 返回第一个匹配项的索引，未找到则返回 `-1`。

  - `String.prototype.replace(regex, replacement)`: 替换匹配的子字符串。

  - `String.prototype.split(regex)`: 使用正则表达式或固定字符串分割一个字符串，并将分割后的子字符串存储到数组中。

    ```JS
    const text = "Hello World! hello 123.";
    const pattern = /hello/gi; // 全局、不区分大小写地搜索 "hello"
    
    console.log(pattern.test(text)); // true
    console.log(text.match(pattern)); // ["Hello", "hello"]
    console.log(text.replace(pattern, "Hi")); // "Hi World! Hi 123."
    ```

### 2、错误处理

- **`try...catch...finally` 语句**：

  - `try`: <u>包含可能抛出错误的代码块。</u>
  - `catch (error)`: <u>如果 `try` 块中发生错误，则执行此代码块。</u>`error` 对象包含错误信息。
  - `finally`: <u>无论是否发生错误，都会执行此代码块。</u>通常用于清理工作。

  ```JS
  try {
      // let data = JSON.parse("{'name': 'John'}"); // 错误的 JSON 格式
      console.log("尝试执行代码...");
      nonExistentFunction(); // 这会抛出一个 ReferenceError
  } catch (error) {
      console.error("捕获到错误了!");
      console.error("错误名称:", error.name);     // e.g., "ReferenceError"
      console.error("错误消息:", error.message); // e.g., "nonExistentFunction is not defined"
  } finally {
      console.log("无论如何，我都会执行。");
  }
  ```

### 3、事件

- **事件模型**：

  - **事件捕获（Capturing Phase）**：事件从 `window` 对象开始，逐级向下传播到目标元素。
  - **目标阶段（Target Phase）**：事件到达目标元素。
  - **事件冒泡（Bubbling Phase）**：事件从目标元素开始，逐级向上传播到 `window` 对象。（==默认行为==）

- **事件监听**：

  - `element.addEventListener(event, handler, useCapture)`
    - `event`: 事件名称（如 `'click'`, `'mouseover'`）。
    - `handler`: 事件触发时执行的函数。
    - `useCapture`: 布尔值。`true` 表示在捕获阶段处理，`false`（默认）表示在冒泡阶段处理。

- **事件委托（Event Delegation）**：利用事件冒泡，只在父元素上设置一个监听器来管理所有子元素的事件。这可以==提高性能并简化代码==。

  ```html
  <ul id="parent-list">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
  </ul>
  ```

  ```JS
  const list = document.getElementById('parent-list');
  
  list.addEventListener('click', function(event) {
      // event.target 是实际被点击的元素 (可能是 <li> 或 <ul>)
      if (event.target && event.target.nodeName === 'LI') {
          console.log('Clicked on:', event.target.textContent);
      }
  });
  ```



## 四、严格模式

**严格模式**是 ES5 引入的一种 **以更严格方式执行 JavaScript 代码的机制**，

* 主要目的是：

  * **避免潜在的错误行为**
  * **限制某些不安全的语法**
  * **提高性能优化的可能性**

  选择一种更严格的 JavaScript 执行模式，它会==消除一些静默错误==，并修复一些导致 JavaScript 引擎难以优化的缺陷。

**开启方式**：

  - **全局开启**：在脚本文件的顶部添加 `'use strict';`。
  - **函数内开启**：在函数体的顶部添加 `'use strict';`。

**主要变化**：

1. **禁止使用未声明的变量**：`x = 10;` 在严格模式下会直接报错。
2. **全局 `this` 指向 `undefined`**：在全局函数或匿名函数中，`this` 不再指向 `window`。
3. **禁止删除变量、函数或参数**：`delete myVar;` 会报错。
4. **要求函数参数名唯一**。
5. **`eval` 和 `arguments` 受到限制**。

**严格模式的主要特性**:

| 特性 / 行为                 | 非严格模式                     | 严格模式下                     |
| --------------------------- | ------------------------------ | ------------------------------ |
| ❌ 未声明变量直接赋值        | 默认变全局变量                 | 报错                           |
| ❌ this 默认指向全局对象     | 函数中 this → window（浏览器） | this 为 undefined              |
| ❌ 不能删除变量              | delete 变量无效果              | 报错                           |
| ❌ 重名参数                  | 函数允许参数同名               | 报错                           |
| ❌ 八进制数支持（以 0 开头） | 支持 `0123` 代表八进制         | 报错                           |
| ❌ 写入只读属性/不可扩展对象 | 默默失败                       | 报错                           |
| ❌ 禁用 `with` 语句          | 允许                           | 报错                           |
| ❌ eval 更安全               | eval 创建变量 → 当前作用域     | 严格模式中 eval 创建私有作用域 |
| ❌ 未来保留字限制更严        | 某些词保留但可用               | 保留字如 `implements` 报错     |

## 五、JSON

**==JSON 是“一种用字符串包裹 JS 数据结构的格式”==**,它是 JavaScript 对象的字符串表示法。

**JSON**（JavaScript Object Notation）是 **JavaScript 对象表示法的子集**，用来以**字符串形式**表达数据结构，具有以下特点：

- 轻量级
- 可读性强
- 平台无关
- 极易解析与生成

**核心方法**：

- `JSON.stringify(object)`: 将 JavaScript 对象或值转换为 JSON 字符串。
- `JSON.parse(string)`: 将 JSON 字符串解析为 JavaScript 对象或值。

**小细节**：

- `JSON.stringify` 会==忽略==值为 `undefined`、`function` 和 `symbol` 的属性。
- `JSON.stringify` 转换==循环引用==的对象时会报错。
- `JSON.parse` 只能解析==严格的 JSON 格式==（例如，属性名必须用双引号）。

## 六、DOM API 

- **定义 (Document Object Model)**：一个跨平台和语言无关的接口，它允许程序和脚本==动态地访问和更新文档的内容、结构和样式==。DOM 将 HTML 或 XML 文档表示为一个由节点和对象组成的**树状结构**。
- **常用 API**：
  - **选择元素**：
    - `document.getElementById('id')`
    - `document.getElementsByClassName('class')` (返回 HTMLCollection)
    - `document.getElementsByTagName('tag')` (返回 HTMLCollection)
    - `document.querySelector('css-selector')` (<u>返回第一个匹配的元素</u>)
    - `document.querySelectorAll('css-selector')` (返回 NodeList)
  - **操作元素**：
    - `element.innerHTML`: 获取或设置元素内的 HTML 内容。
    - `element.textContent`: 获取或设置元素内的文本内容（<u>性能更好，更安全</u>）。
    - `element.style.property = 'value'`: 修改 CSS 样式。
    - `element.setAttribute('name', 'value')` / `element.getAttribute('name')`
    - `element.classList.add()`, `.remove()`, `.toggle()`
  - **创建和插入/删除节点**：
    - `document.createElement('tag')`
    - `parentNode.appendChild(childNode)`
    - `parentNode.removeChild(childNode)`

## 七、性能优化

### 1、防抖 (Debounce)

- **概念**：在事件被触发 n 秒后再执行回调，如果在这 n 秒内又被触发，则重新计时。==只执行最后一次操作==。

- **场景**：**输入框搜索联想**、**窗口 `resize` 事件**。

- **实现**：

  ```JS
  function debounce(func, delay) {
      let timeoutId;
      return function(...args) {
          clearTimeout(timeoutId); // 清除上一个定时器
          timeoutId = setTimeout(() => {
              func.apply(this, args); // 执行函数
          }, delay);
      };
  }
  ```

### 2、节流 (Throttle)

- **概念**：规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。==固定频率执行==。

- **场景**：**`scroll` 事件**（如懒加载、滚动动画）、**拖拽事件**。

- **实现**：

  ```JS
  function throttle(func, limit) {
      let inThrottle;
      return function(...args) {
          if (!inThrottle) {
              func.apply(this, args);
              inThrottle = true;
              setTimeout(() => inThrottle = false, limit);
          }
      };
  }
  ```

## 八、Ajax & Fetch

- **Ajax (Asynchronous JavaScript and XML)**：一种在==无需重新加载整个网页的情况下，能够更新部分网页==的技术。

- **`XMLHttpRequest` (传统方式)**：像一个“老式电话”，步骤繁琐，需要监听多个状态。

  ```JS
  const xhr = new XMLHttpRequest();
  xhr.open('GET', '[https://api.example.com/data](https://api.example.com/data)', true); // true for asynchronous
  xhr.onreadystatechange = function() { // 监听状态变化
      if (xhr.readyState === 4 && xhr.status === 200) { // 确认通信完成且成功
          console.log(JSON.parse(xhr.responseText));
      }
  };
  xhr.onerror = function() { // 处理网络错误
      console.error("Request failed");
  };
  xhr.send();
  ```

- **`fetch` API (现代方式, 基于 Promise)**：一个更现代、更强大、更灵活的网络请求 API。

## 九、ES6

### 1、let 和 const

- **`var` 的问题**：<u>函数作用域、变量提升、可重复声明</u>。
- **`let`**：
  - **块级作用域**：只在定义的 `{...}` 内有效。
  - **不存在变量提升**（存在“==暂时性死区==” TDZ）。
  - **不可重复声明**。
- **`const`**：
  - 特性与 `let` 基本相同。
  - **必须在声明时初始化**。
  - 声明的是一个**只读的常量**。一旦声明，<u>原始类型的值不能改变</u>；<u>引用类型的指针不能改变</u>，但其内部属性可以修改。

### 2、Promise & async/await 异步编程

- **核心思想：==解决“未来的事”==**
- **`Promise`：==一张未来的“兑换券”==**
- **`async/await`：==像写剧本一样写异步代码==**

## 十、使用JS实现Web端的调试

- **`console` 对象**：你的“调试打印机”
  - `console.log()`: 最常用的输出信息。
  - `console.warn()`: 输出警告信息（黄色）。
  - `console.error()`: 输出错误信息（红色），并附带堆栈跟踪。
  - `console.table(array/object)`: 以==表格形式==展示数组或对象，非常直观。
  - `console.dir(object)`: 交互式地列出对象的属性，方便查看DOM节点的详细信息。
  - `console.group()` / `console.groupEnd()`: 创建一个可折叠的日志组，用于组织复杂的日志输出。
  - `console.time()` / `console.timeEnd()`: 启动一个计时器，用于测量代码块的执行时间。
- **`debugger` 语句**：代码中的“暂停按钮”
  - 在代码中插入 `debugger;`，当浏览器开发者工具打开时，代码执行到该行会==自动暂停==，进入断点调试模式。
- **浏览器开发者工具（F12）**：
  - **Elements 面板**：查看和实时编辑页面的HTML和CSS。
  - **Console 面板**：执行JS代码，查看日志。
  - **Sources 面板**：查看源代码，手动设置断点（点击行号），单步执行（Step over, Step into, Step out），监控变量值（Watch），查看调用栈（Call Stack）。
  - **Network 面板**：查看所有网络请求的状态、耗时、请求头和响应体。

## 注释

[^1]:`ReferenceError` 是 JavaScript 中的一种 **错误类型（Error Type）**，`ReferenceError` 表示你访问了一个**压根没在作用域链上声明的变量**，这时候 JS 引擎只能选择报错。
[^2]:GC（Garbage Collection）是 JavaScript 引擎自动执行的机制，用于**回收不再被使用的内存**。
