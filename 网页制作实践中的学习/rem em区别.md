 CSS 里，`rem` 和 `em` 都是相对长度单位，不过它们的参照基准有所不同，以下为你详细介绍二者的区别：

### 参照基准

- **`em`**：`em` 是相对于当前元素的字体大小。如果当前元素没有设置字体大小，它会继承其父元素的字体大小。比如父元素字体大小是 `16px`，子元素设置为 `2em`，那么子元素的实际字体大小就是 `32px`。要是子元素自身设置了字体大小，后续使用 `em` 时就会以自身字体大小为参照。
- **`rem`**：`rem` 是相对于根元素（即 `<html>` 元素）的字体大小。无论当前元素处于什么层级，`1rem` 都等于根元素的字体大小。假设根元素字体大小是 `16px`，那么在页面任何地方使用 `2rem` 都会是 `32px`。

### 示例代码

下面的代码展示了二者的区别：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        html {
            font-size: 16px;
        }

        .parent {
            font-size: 20px;
        }

        .em-child {
            font-size: 1.5em;
            /* 相对于父元素的字体大小，实际为 20px * 1.5 = 30px */
            width: 5em;
            /* 相对于自身字体大小，实际为 30px * 5 = 150px */
            background-color: lightblue;
        }

        .rem-child {
            font-size: 1.5rem;
            /* 相对于根元素的字体大小，实际为 16px * 1.5 = 24px */
            width: 5rem;
            /* 相对于根元素的字体大小，实际为 16px * 5 = 80px */
            background-color: lightgreen;
        }
    </style>
</head>

<body>
    <div class="parent">
        这是父元素
        <div class="em-child">这是使用 em 单位的子元素</div>
        <div class="rem-child">这是使用 rem 单位的子元素</div>
    </div>
</body>

</html>
```

### 应用场景

- **`em`**：当你希望元素的尺寸根据其父元素或自身的字体大小动态变化时，`em` 是不错的选择。例如，设计一个按钮，让按钮的内边距和边框宽度等根据按钮的字体大小自适应调整。
- **`rem`**：`rem` 更适合用于全局布局和字体大小的设置。在响应式设计中，通过改变根元素的字体大小，可以方便地调整整个页面的布局和字体大小。

综上所述，`rem` 和 `em` 的主要区别在于参照基准不同，在实际使用中需要根据具体需求来选择合适的单位。