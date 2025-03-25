# JavaScript 深入学习笔记

## 一、JavaScript 与 HTML 的交互

### 1. DOM 操作

JavaScript 可以通过 DOM（文档对象模型）操作 HTML 元素。常用的 DOM 操作方法包括：

- `document.getElementById(id)`：通过元素的 ID 获取元素。
- `document.getElementsByClassName(className)`：通过类名获取元素集合。
- `document.querySelector(selector)`：使用 CSS 选择器获取第一个匹配的元素。
- `document.querySelectorAll(selector)`：使用 CSS 选择器获取所有匹配的元素集合。

JavaScript复制

```javascript
let heading = document.getElementById("main-heading");
heading.textContent = "New Heading";

let items = document.getElementsByClassName("item");
for (let i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = "#f0f0f0";
}

let firstItem = document.querySelector(".item");
firstItem.style.color = "red";

let allItems = document.querySelectorAll(".item");
allItems.forEach(item => {
    item.style.padding = "10px";
});
```

### 2. 事件处理

JavaScript 可以处理 HTML 元素的事件，如点击、鼠标悬停、键盘输入等。

HTML复制

```html
<button id="my-button">Click me</button>
<input type="text" id="my-input">
```

预览

JavaScript复制

```javascript
let button = document.getElementById("my-button");
button.onclick = function() {
    alert("Button clicked!");
};

let input = document.getElementById("my-input");
input.onkeyup = function() {
    console.log("Key pressed:", this.value);
};

// 使用 addEventListener 添加多个事件监听器
button.addEventListener("click", function() {
    console.log("Button clicked using addEventListener!");
});

button.addEventListener("dblclick", function() {
    console.log("Button double clicked!");
});
```

### 3. 表单验证

JavaScript 可以用于表单验证，确保用户输入符合要求。

HTML复制

```html
<form id="my-form">
    <input type="text" id="user-name" required>
    <input type="email" id="user-email" required>
    <button type="submit">Submit</button>
</form>
```

预览

JavaScript复制

```javascript
let form = document.getElementById("my-form");
form.onsubmit = function(e) {
    e.preventDefault();
    let nameInput = document.getElementById("user-name");
    let emailInput = document.getElementById("user-email");

    if (nameInput.value.trim() === "") {
        alert("Please enter your name.");
    } else if (!isValidEmail(emailInput.value)) {
        alert("Please enter a valid email address.");
    } else {
        alert("Form submitted!");
    }
};

function isValidEmail(email) {
    // 简单的邮箱格式验证
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
```

### 4. 动态创建元素

JavaScript 可以动态创建 HTML 元素并将其添加到页面中。

JavaScript复制

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

## 二、JavaScript 与 CSS 的交互

### 1. 修改样式

JavaScript 可以动态修改 HTML 元素的样式。

JavaScript复制

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

JavaScript复制

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

css复制

```css
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.highlight {
    animation: fadeIn 1s;
}

@keyframes slideIn {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
}

.slide-in {
    animation: slideIn 0.5s ease;
}
```

JavaScript复制

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

JavaScript复制

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

## 三、实例练习

### 1. 创建一个简单的网页计数器

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Counter</title>
    <style>
        .counter {
            font-size: 24px;
            text-align: center;
            margin: 20px;
        }
        .buttons {
            display: flex;
            justify-content: center;
            gap: 10px;
        }
        button {
            padding: 8px 16px;
            font-size: 16px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="counter" id="counter">0</div>
    <div class="buttons">
        <button id="decrement">-</button>
        <button id="increment">+</button>
    </div>

    <script>
        let counter = 0;
        const counterElement = document.getElementById("counter");
        const decrementButton = document.getElementById("decrement");
        const incrementButton = document.getElementById("increment");

        decrementButton.onclick = function() {
            counter--;
            counterElement.textContent = counter;
        };

        incrementButton.onclick = function() {
            counter++;
            counterElement.textContent = counter;
        };
    </script>
</body>
</html>
```

### 2. 创建一个待办事项列表

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
    <style>
        .todo-container {
            max-width: 500px;
            margin: 20px auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        .todo-input {
            width: 100%;
            padding: 8px;
            margin-bottom: 10px;
        }
        .todo-item {
            padding: 8px;
            margin-bottom: 8px;
            background-color: #f9f9f9;
            border-radius: 3px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .todo-item.completed {
            text-decoration: line-through;
            color: #888;
        }
        .todo-buttons {
            display: flex;
            gap: 5px;
        }
        button {
            padding: 4px 8px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="todo-container">
        <h1>To-Do List</h1>
        <input type="text" class="todo-input" id="todo-input" placeholder="Enter a new task">
        <button id="add-todo">Add</button>
        <div id="todo-list"></div>
    </div>

    <script>
        let todos = [];

        function saveTodos() {
            localStorage.setItem("todos", JSON.stringify(todos));
        }

        function loadTodos() {
            const savedTodos = localStorage.getItem("todos");
            if (savedTodos) {
                todos = JSON.parse(savedTodos);
                renderTodos();
            }
        }

        function renderTodos() {
            const todoListElement = document.getElementById("todo-list");
            todoListElement.innerHTML = "";
            todos.forEach((todo, index) => {
                const todoElement = document.createElement("div");
                todoElement.className = `todo-item ${todo.completed ? "completed" : ""}`;
                todoElement.innerHTML = `
                    <span>${todo.text}</span>
                    <div class="todo-buttons">
                        <button class="toggle-complete" data-index="${index}">${todo.completed ? "Undo" : "Complete"}</button>
                        <button class="delete" data-index="${index}">Delete</button>
                    </div>
                `;
                todoListElement.appendChild(todoElement);
            });
        }

        document.getElementById("add-todo").onclick = function() {
            const todoInput = document.getElementById("todo-input");
            const todoText = todoInput.value.trim();
            if (todoText !== "") {
                todos.push({ text: todoText, completed: false });
                saveTodos();
                renderTodos();
                todoInput.value = "";
            }
        };

        document.getElementById("todo-input").onkeypress = function(e) {
            if (e.key === "Enter") {
                document.getElementById("add-todo").click();
            }
        };

        document.getElementById("todo-list").addEventListener("click", function(e) {
            if (e.target.classList.contains("toggle-complete")) {
                const index = parseInt(e.target.getAttribute("data-index"));
                todos[index].completed = !todos[index].completed;
                saveTodos();
                renderTodos();
            } else if (e.target.classList.contains("delete")) {
                const index = parseInt(e.target.getAttribute("data-index"));
                todos.splice(index, 1);
                saveTodos();
                renderTodos();
            }
        });

        loadTodos();
    </script>
</body>
</html>
```

