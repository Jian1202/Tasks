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

    ```JS
    //函数表达式
    const greetExpression = function(name) {
        return "你好, " + name + "!";
    };
    console.log(greetExpression("朋友")); // 输出: 你好, 朋友!
    ```

**函数声明会整体提升（包括函数体），而表达式只提升变量名。**



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

  * ==箭头函数没有自己的 `this`，不能作构造函数！！！==

### 2、调用方法

**函数的调用方式决定了函数内部 `this` 关键字的指向以及参数的传递。**

* **全局调用**

  * <u>当一个函数**不作为任何对象的方法被直接调用**时，它就是全局调用。</u>

    * 在非严格模式下，this 指向全局对象（浏览器中是 window，Node.js 中是 global）。

    * 在严格模式下，this 是 undefined。

      ```js
      function showThis() {
        console.log(this);
      }
      showThis(); // 非严格模式下输出 window/global，严格模式下输出 undefined
      ```

* **构造函数调用**（`new`）

  * **<u>当函数与 `new` 关键字一起使用时，它作为构造函数被调用。</u>**

    * **JavaScript引擎在运行时执行的指令集：**

    	1. 创建一个新的空对象。

       ```JS
       let obj = {};
       ```

    	2. 这个新对象被设置为函数调用的 `this`。

       ```JS
       function Person(name) {
         this.name = name;
       }
       
       let p = new Person("Alice");
       ```

    	3. 新对象的 `[[Prototype]]` (或 `__proto__`) [^1]被设置为构造函数的 `prototype` 对象。

       

    	4. 如果函数没有显式返回一个对象，则隐式返回这个新创建的 `this` 对象。
    	
    	

* **函数方法调用**

  * 

* **apply**

* **call**

### 3、闭包

## 二、作用域（作用域链）

## 三、深挖JS更多语法

* 正则表达式
* 错误
* 事件

## 四、严格模式

## 五、JSON

## 六、DOM API 

## 七、Ajax

## 八、ES6

### 1、let和const

### 2、Promise&async/awati异步编程

## 九、使用JS实现Web端的调试





## 注释

[^1]: **每个对象都有一个 `[[Prototype]]` 内部链接：** <br>在 JavaScript 中，几乎所有的对象在创建时都会关联到另一个对象，这个“另一个对象”就是它的**原型 (prototype)**。<br> 这个关联是通过一个内部的、不可直接访问的属性 `[[Prototype]]` 来实现的。 <br>当你试图访问一个对象的属性或方法时，如果对象本身没有这个属性/方法，JavaScript 引擎就会通过 `[[Prototype]]` 链接去它的原型对象上查找。如果原型对象上也没有，就会继续沿着原型对象的 `[[Prototype]]` 链接向上查找，直到找到该属性/方法，或者到达原型链的末端（通常是 `Object.prototype`，它的 `[[Prototype]]` 是 `null`）。这个查找过程形成的链条就是**原型链**。 <br>虽然 `[[Prototype]]` 是内部的，但我们可以通过以下方式访问或观察它：<br> **`__proto__` (双下划线proto双下划线)：** 这是一个非标准的、但被广泛浏览器支持的访问器属性，可以直接获取或设置对象的 `[[Prototype]]`。（不推荐在生产代码中直接修改 `__proto__`）<br> **`Object.getPrototypeOf(obj)`：** 这是 ES5 引入的标准方法，用于获取一个对象的 `[[Prototype]]`。 <br>**`Object.setPrototypeOf(obj, prototype)`：** 这是 ES6 引入的标准方法，用于设置一个对象的 `[[Prototype]]`。   <br>**每个函数都有一个 `prototype` 属性 (注意，这里是 `prototype`，不是 `[[Prototype]]`)：** <br>当你定义一个函数时（特指可以作为构造函数的普通函数，箭头函数没有 `prototype` 属性），JavaScript 会自动为这个函数创建一个名为 `prototype` 的属性。<br>**这个 `函数名.prototype` 属性本身是一个普通的对象。** 它不是函数本身的原型，而是预备给“由这个函数作为构造函数创建出来的实例对象”作为它们的 `[[Prototype]]` 链接目标的。 我们通常在这个 `函数名.prototype` 对象上定义希望所有实例共享的方法和属性。 <br>例如，`function MyConstructor() {}`，那么 `MyConstructor.prototype` 就是一个对象。默认情况下，`MyConstructor.prototype` 会有一个 `constructor` 属性，它指回 `MyConstructor` 函数本身。