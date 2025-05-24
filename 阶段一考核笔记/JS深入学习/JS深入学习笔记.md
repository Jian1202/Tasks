# JavaScript 深入学习笔记

## 一、JavaScript 与 HTML 的交互

### 1. 常见DOM [^1]操作

JavaScript 可以通过 DOM（文档对象模型）操作 HTML 元素。

#### document.getElementById(id)

通过元素的 ID 获取**元素**。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>getElementById Example</title>
</head>

<body>
    <button id="myButton">点击我</button>
    <script>//点击按钮弹出提示框
        const button = document.getElementById('myButton');
        button.addEventListener('click', function () {
            alert('你点击了按钮！');
        });
    </script>
</body>

</html>
```
![image-20250331193543734](./assets/image-20250331193543734-1746967245336-2.png)

#### document.getElementsByClassName(className)

通过类名获取**元素集合**。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>getElementsByClassName Example</title>
</head>

<body>
    <p class="highlight">这是一个高亮段落。</p>
    <p class="highlight">这也是一个高亮段落。</p>
    <script>
        const paragraphs = document.getElementsByClassName('highlight');
        for (let i = 0; i < paragraphs.length; i++) {
            paragraphs[i].style.color = 'gold';
        }
    </script>
</body>

</html>
```
![image-20250331193608531](./../assets/image-20250331193608531.png)

---

#### document.querySelector(selector)

使用 CSS 选择器获取**第一个匹配的元素**。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>querySelector Example</title>
</head>

<body>
    <ul>
        <li>列表项 1</li>
        <li>列表项 2</li>
        <li>列表项 3</li>
    </ul>
    <script>
        const firstListItem = document.querySelector('ul li');
        firstListItem.style.fontWeight = 'bold';
    </script>
</body>

</html>
```
![image-20250331193649918](./../assets/image-20250331193649918.png)
#### document.querySelectorAll(selector)

使用 CSS 选择器获取**所有匹配的元素集合**。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>querySelectorAll Example</title>
</head>

<body>
    <ul>
        <li>列表项 1</li>
        <li>列表项 2</li>
        <li>列表项 3</li>
    </ul>
    <script>
        const listItems = document.querySelectorAll('ul li');
        listItems.forEach(function (item) {
            item.style.textDecoration = 'underline';
        });
    </script>
</body>

</html>
```

![image-20250331193713978](./../assets/image-20250331193713978.png)


### 2. 事件处理

JavaScript 可以处理 HTML 元素的==事件==，如**点击、鼠标悬停、键盘输入等**。

#### 点击事件

点击事件是 Web 开发中常用的交互方式，可通过多种方式实现：

##### 1. 在 HTML 标签中直接添加

可以直接在 HTML 元素的标签里使用 `onclick` 属性来指定点击事件触发的函数。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML 标签直接添加点击事件</title>
</head>
<body>
    <button onclick="showMessage()">点击我</button>
    <script>
        function showMessage() {
            alert('按钮被点击了');
        }
    </script>
</body>
</html>
```

在这个例子中，当按钮被点击时，`showMessage` 函数会被调用，弹出提示框。

![image-20250331193418067](./../assets/image-20250331193418067.png)

##### 2. 通过 DOM 获取元素添加

使用 `document.getElementById` 等方法获取元素，然后设置其 `onclick` 属性为一个函数。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>通过 DOM 获取元素添加点击事件</title>
</head>
<body>
    <button id="btn">点击我</button>
    <script>
        document.getElementById("btn").onclick = function() {
            alert('按钮被点击了');
        };
    </script>
</body>
</html>
```

这里通过 `document.getElementById` 获取按钮元素，接着将其 `onclick` 属性设为一个**匿名函数**，点击按钮时会弹出提示框。

![image-20250331193446328](./../assets/image-20250331193446328.png)

##### 3. 使用事件监听方式添加

利用 `addEventListener` 方法为元素添加点击事件监听器。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>使用事件监听方式添加点击事件</title>
</head>
<body>
    <button id="btn">点击我</button>
    <script>
        var el = document.getElementById("btn");
        el.addEventListener("click", function() {
            alert('按钮被点击了');
        }, false);
    </script>
</body>
</html>
```

在这个示例中，通过 `addEventListener` 方法为按钮添加了一个点击事件监听器，点击按钮时会弹出提示框。`addEventListener` 方法的第三个参数 `false` 表示使用冒泡阶段。

![image-20250331193513771](./../assets/image-20250331193513771.png)

**==可以看到上述三种情况html代码呈现情况是一致的==，但本质上还是有些区别的：**

| 对比项               | 在 HTML 标签中直接添加 `onclick` 属性                        | 通过 DOM 获取元素添加 `onclick` 属性                         | 使用 `addEventListener` 方法添加事件监听器                   |
| -------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 语法和代码位置       | 将 JavaScript 代码直接写在 HTML 标签的 `onclick` 属性里，代码与 HTML **紧密耦合** | 先使用 `document.getElementById` 等方法获取 HTML 元素，然后为其`onclick` 属性**赋值一个函数**，代码通常写在 `<script>` 标签内 | 先获取 HTML 元素，再调用 `addEventListener` 方法添加**事件监听器**，代码写在 `<script>` 标签内 |
| 事件绑定数量         | **一个元素只能绑定一个 `onclick` 事件处理函数**，多次赋值时后面的<u>会覆盖</u>前面的 | **一个元素只能绑定一个 `onclick` 事件处理函数**，多次赋值时后面的<u>会覆盖</u>前面的 | **可以为同一个元素的同一个事件类型添加多个事件处理函数**，这些函数会按照添加的<u>顺序依次执行</u> |
| 事件流控制           | <u>无法对事件流（冒泡和捕获）进行控制，默认使用冒泡阶段</u>  | <u>无法对事件流（冒泡和捕获）进行控制，默认使用冒泡阶段</u>  | 可以通过第三个参数来控制事件是在冒泡阶段[^2]还是捕获阶段[^3]触发。当第三个参数为 `true` 时，事件在捕获阶段触发；为 `false` 或省略时，事件在冒泡阶段触发 |
| 代码可维护性和分离性 | HTML 和 JavaScript 代码混杂在一起，不利于代码的维护和管理，在大型项目中会使代码结构混乱 | HTML 和 JavaScript 代码分离，提高了代码的可维护性和可读性，方便后续开发和修改 | HTML 和 JavaScript 代码分离，提高了代码的可维护性和可读性，方便后续开发和修改 |

> [!CAUTION]
>
> **(标记：捕获阶段和冒泡阶段还是了解不太到位，不清楚底层逻辑，不理解，暂放)**

#### 鼠标悬停事件

鼠标悬停事件能增强用户与页面元素的交互效果，有多种实现途径：

##### 1. 使用 HTML 的 onmouseover 属性

将函数**直接绑定**到 HTML 元素的 `onmouseover` 属性上，当鼠标悬停在该元素上时，相应的函数将被调用。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>使用 HTML 的 onmouseover 属性</title>
</head>
<body>
    <button onmouseover="changeColor(this)">悬停触发函数</button>
    <script>
        function changeColor(element) {
            element.style.backgroundColor ='red';
        }
    </script>
</body>
</html>
```

此例中，当鼠标悬停在按钮上时，`changeColor` 函数会被调用，按钮背景颜色变为红色。

![image-20250331194144133](./../assets/image-20250331194144133.png)

![image-20250331194343768](./../assets/image-20250331194343768.png)

##### 2. 使用 JavaScript 的 addEventListener 方法

使用 `addEventListener` 方法来为 HTML 元素**添加鼠标悬停事件的监听器**。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>使用 JavaScript 的 addEventListener 方法</title>
</head>
<body>
    <button id="myButton">悬停我</button>
    <script>
        function changeColor() {
            this.style.backgroundColor = 'green';
        }
        document.getElementById("myButton").addEventListener("mouseover", changeColor);
    </script>
</body>
</html>
```

这里通过 `addEventListener` 方法为按钮添加了鼠标悬停事件监听器，鼠标悬停时按钮背景颜色变为绿色。

![image-20250331195550582](./../assets/image-20250331195550582.png)

![image-20250331195655639](./../assets/image-20250331195655639.png)

##### *3. 使用 jQuer[^4] 的 hover 方法

如果使用了 jQuery 库，可以使用其 `hover` 方法来实现鼠标悬停事件的绑定。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>使用 jQuery 的 hover 方法</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
    <button id="myButton">悬停我</button>
    <script>
        $("#myButton").hover(function() {
            $(this).css("background-color", "yellow");
        }, function() {
            $(this).css("background-color", "");
        });
    </script>
</body>
</html>
```

此示例中，当鼠标悬停在按钮上时，按钮背景颜色变为黄色，鼠标离开时恢复默认颜色。

> [!CAUTION]
>
> **此方法暂不做入计划学习**

#### 键盘输入事件

键盘输入事件可捕捉用户在键盘上的操作，包含以下几种类型：

##### 1. keydown 事件

当**按下键盘上的某个键时触发**，**并在按住该键时重复触发**。可以通过 `event.keyCode` 或 `event.which` 获取按下键的编码信息。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>keydown 事件</title>
</head>
<body>
    <input type="text" id="message">
    <script>
        let msg = document.getElementById('message');
        msg.addEventListener("keydown", (event) => {
            console.log('按下键的编码：', event.keyCode);
        });
    </script>
</body>
</html>
```

在这个例子中，当在文本框中按下键盘上的键时，会在控制台输出按下键的编码。

##### 2. keyup 事件

当释放键盘上的键时触发。同样可以通过 `event.keyCode` 等属性获取相关信息。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>keyup 事件</title>
</head>
<body>
    <input type="text" id="message">
    <script>
        let msg = document.getElementById('message');
        msg.addEventListener("keyup", (event) => {
            console.log('释放键的编码：', event.keyCode);
        });
    </script>
</body>
</html>
```

此示例中，当在文本框中释放键盘上的键时，会在控制台输出释放键的编码。

##### 3. keypress 事件

当按下字符键盘（如 `a`、`b`、`c` 等）时触发，而不是方向键等控制键。不过在中文输入法下，有些浏览器可能不会触发此事件。可通过 `event.charCode`（非 IE 浏览器）或 `event.keyCode`（IE 浏览器）获取输入字符的编码。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>keypress 事件</title>
</head>
<body>
    <input type="text" id="message">
    <script>
        let msg = document.getElementById('message');
        msg.addEventListener("keypress", (event) => {
            console.log('输入字符的编码：', event.charCode || event.keyCode);
        });
    </script>
</body>
</html>
```

这里当在文本框中按下字符键时，会在控制台输出输入字符的编码。


> [!TIP]
>
> ### 事件监听器和事件处理程序
>
> **事件监听器**和**事件处理程序**是用来<u>处理页面上各类事件的关键概念</u>
>
> #### **事件处理程序**
>
> 事件处理程序是一段在特定事件发生时执行的代码。可以把它看作是对事件做出**响应的函数**。事件处理程序能够直接绑定到 HTML 元素上，或者通过 JavaScript 动态添加。以下是事件处理程序的几种常见绑定方式：
>
> ##### **内联事件处理程序**
>
> 直接在 HTML 标签中使用事件属性（如 `onclick`、`onkeyup` 等）来指定事件处理程序。
>
> ```html
> <!DOCTYPE html>
> <html lang="en">
> 
> <body>
> <!-- 当按钮被点击时，会调用 alert 函数弹出警告框 -->
> <button onclick="alert('Button clicked!')">Click me</button>
> </body>
> 
> </html>
> ```
>
> 在这个例子中，`onclick` 属性的值是一个 JavaScript 代码片段，当按钮被点击时，该代码片段会被执行。
>
> **DOM0 级事件处理程序**
>
> 通过 JavaScript 代码将一个函数赋值给元素的事件属性。
>
> ```html
> <!DOCTYPE html>
> <html lang="en">
> 
> <body>
> <button id="myButton">Click me</button>
> <script>
>  // 获取按钮元素
>  const button = document.getElementById('myButton');
>  // 为按钮的 onclick 事件绑定一个函数
>  button.onclick = function () {
>    alert('Button clicked!');
>  };
> </script>
> </body>
> 
> </html>
> ```
>
> 在这个例子中，我们先获取了按钮元素，然后将一个匿名函数赋值给 `button` 的 `onclick` 属性，当按钮被点击时，该函数会被执行。
>
> #### **事件监听器**
>
> 事件监听器是一种更灵活、更强大的处理事件的方式。它允许你为一个元素的同一个事件绑定多个处理程序，并且可以控制事件的捕获和冒泡阶段。可以使用 `addEventListener` 方法来添加事件监听器。
>
> ```html
> <!DOCTYPE html>
> <html lang="en">
> 
> <body>
> <button id="myButton">Click me</button>
> <script>
>  // 获取按钮元素
>  const button = document.getElementById('myButton');
>  // 为按钮添加一个点击事件监听器
>  button.addEventListener('click', function () {
>    alert('Button clicked!');
>  });
>  // 为按钮添加另一个点击事件监听器
>  button.addEventListener('click', function () {
>    console.log('Button clicked again!');
>  });
> </script>
> </body>
> 
> </html>
> ```
>
> 在这个例子中，我们为按钮元素添加了两个点击事件监听器。当按钮被点击时，这两个事件处理程序都会按顺序执行。
>
> ### **事件监听器和事件处理程序的区别**
>
> - **灵活性**：事件监听器更为灵活，它可以为一个元素的同一个事件绑定多个处理程序，而事件处理程序（如 DOM0 级）同一时间只能绑定一个函数到事件属性上。
> - **事件阶段控制**：事件监听器可以通过第三个参数控制事件是在捕获阶段还是冒泡阶段触发，而事件处理程序只能在冒泡阶段触发。
> - **移除事件**：事件监听器可以使用 `removeEventListener` 方法移除，而事件处理程序（如内联事件处理程序）移除起来相对麻烦。
>
> 总之，事件处理程序是对事件做出响应的具体代码，而事件监听器是管理和触发这些处理程序的机制。在实际开发中，建议优先使用事件监听器，因为它提供了更多的灵活性和控制能力。

### 3. 表单验证

JavaScript 可以用于表单验证，确保用户输入符合要求。


```html
<form id="my-form">
    <input type="text" id="user-name" required>
    <input type="email" id="user-email" required>
    <button type="submit">Submit</button>
</form>
```

```javascript
// 获取 ID 为 "my-form" 的表单元素，并将其赋值给变量 form
let form = document.getElementById("my-form");

// 为表单的提交事件绑定一个处理函数
form.onsubmit = function(e) {
    // 阻止表单的默认提交行为，避免页面刷新
    e.preventDefault();

    // 获取 ID 为 "user-name" 的输入框元素，并将其赋值给变量 nameInput
    let nameInput = document.getElementById("user-name");
    // 获取 ID 为 "user-email" 的输入框元素，并将其赋值给变量 emailInput
    let emailInput = document.getElementById("user-email");

    // 检查用户输入的姓名是否为空（去除首尾空格后）
    if (nameInput.value.trim() === "") {
        // 如果姓名为空，弹出提示框，提示用户输入姓名
        alert("Please enter your name.");
    // 若姓名不为空，检查用户输入的邮箱格式是否有效
    } else if (!isValidEmail(emailInput.value)) {
        // 如果邮箱格式无效，弹出提示框，提示用户输入有效的邮箱地址
        alert("Please enter a valid email address.");
    } else {
        // 如果姓名和邮箱格式都符合要求，弹出提示框，提示表单提交成功
        alert("Form submitted!");
    }
};

/**
 * 验证邮箱格式是否有效的函数
 * @param {string} email - 要验证的邮箱地址
 * @returns {boolean} - 如果邮箱格式有效返回 true，否则返回 false
 */
function isValidEmail(email) {
    // 定义一个简单的邮箱格式验证正则表达式
    // 该正则表达式要求邮箱地址由非空字符、@符号、非空字符、.符号和非空字符组成
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // 使用正则表达式的 test 方法检查邮箱地址是否匹配该模式，并返回结果
    return emailPattern.test(email);
}
```

### 4. 动态创建元素

JavaScript 可以动态创建 HTML 元素并将其添加到页面中。


```javascript
let newList = document.createElement("ul");
newList.id = "dynamic-list";

for (let i = 1; i <= 5; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = "Item " + i;
    newList.appendChild(listItem);
}

document.body.appendChild(newList);
```

## 二、JavaScript 与 CSS 的交互（常用）

### 1. 修改样式

JavaScript 可以**动态修改** HTML 元素的样式。


```javascript
let heading = document.getElementById("main-heading");
heading.style.color = "blue";
heading.style.fontSize = "24px";
heading.style.transition = "all 0.3s ease";

// 使用样式表
let styleSheet = document.styleSheets[0];
styleSheet.insertRule(".highlight { animation: fadeIn 1s; }", styleSheet.cssRules.length);
```

### 2. 类操作

可以使用 `classList` 方法添加、移除或切换 CSS 类。


```javascript
heading.classList.add("highlight");
heading.classList.remove("highlight");
heading.classList.toggle("highlight");

// 检查类是否存在
if (heading.classList.contains("highlight")) {
    console.log("Element has the 'highlight' class");
}
```

### 3. 动画与过渡

结合 CSS 动画和 JavaScript，可以创建复杂的交互效果。


```css
/* 定义一个名为 fadeIn 的关键帧动画 */
/* 该动画的起始状态（from）是元素的不透明度为 0，即完全透明 */
/* 动画的结束状态（to）是元素的不透明度为 1，即完全可见 */
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

/* 定义一个名为 highlight 的类 */
/* 为使用这个类的元素应用 fadeIn 动画，动画持续时间为 1 秒 */
.highlight {
    animation: fadeIn 1s;
}

/* 定义一个名为 slideIn 的关键帧动画 */
/* 该动画的起始状态（from）是元素在水平方向上向左偏移 100% */
/* 动画的结束状态（to）是元素回到原来的位置，即水平偏移量为 0 */
@keyframes slideIn {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
}

/* 定义一个名为 slide-in 的类 */
/* 为使用这个类的元素应用 slideIn 动画，动画持续时间为 0.5 秒 */
/* 动画的过渡效果使用 ease 函数，即开始和结束时较慢，中间较快 */
.slide-in {
    animation: slideIn 0.5s ease;
}
```


```javascript
button.onclick = function() {
    heading.classList.add("highlight");
    heading.classList.add("slide-in");
};

// 动画结束后移除类
heading.addEventListener("animationend", function() {
    heading.classList.remove("highlight");
    heading.classList.remove("slide-in");
});
```

### 4. 响应式设计

JavaScript 可以根据屏幕尺寸动态调整样式。


```javascript
function updateLayout() {
    if (window.innerWidth < 768) {
        document.body.style.layout = "single-column";
    } else {
        document.body.style.layout = "double-column";
    }
}

window.addEventListener("resize", updateLayout);
updateLayout();
```

## *注释

[^1]:“DOM” 即文档对象模型（Document Object Model）。它是一种用于 HTML 和 XML 文档的**编程接口**，<u>将网页文档表示为一个由节点组成的树形结构</u>。通过 DOM，可以使用编程语言（如 JavaScript）来<u>访问和操作</u>网页中的各个元素，如修改文本内容、改变样式、添加或删除节点等。DOM 提供了一种标准化的方法来处理网页文档，使得开发者能够更方便地与网页进行交互和动态更新。
[^2]:冒泡阶段是指事件从具体的<u>目标元素</u>开始**向上传播**，依次经过其祖先元素，就像水中的气泡从底部往上升一样。例如，在一个嵌套的 HTML 元素结构中，当内部元素上发生一个点击事件时，这个事件会先在内部元素上触发，然后依次向上在其父元素、祖父元素等上触发，**直到到达文档的根元素**。
[^3]:捕获阶段则是事件从最外层的<u>祖先元素</u>开始**向下传播**，直到到达具体的目标元素。在这个过程中，事件先在祖先元素上触发，**然后逐渐向目标元素靠近**。
[^4]:jQuery 是一个快速、简洁的 <u>JavaScript **库**</u>。它极大地简化了 HTML 文档遍历、事件处理、动画效果和 Ajax 交互等操作。可以方便地操作 DOM 元素、处理事件、实现动画效果等，提高了网页开发的效率。

