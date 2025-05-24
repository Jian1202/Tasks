# Grid 布局

## 零、概述

Grid（网格）布局是一种**==二维==布局模型**，允许开发者同时控制元素在***行（row）与列（column）***方向上的排布。它<u>**最适合**</u>用于<u>构建网页的整体布局或复杂的组件结构</u>。

启用方法：

```css
.container {
  display: grid; /* 或 inline-grid */
}
```

在 Grid 布局中，我们也主要关注两类对象：**Grid 容器（Grid Container）** 与 **Grid 项目（Grid Item）**。

------

## 一、Grid 容器属性（Grid Container）

### 1. `display`：是否为网格容器

- `grid`：定义为块级网格容器。
- `inline-grid`：定义为行内网格容器。

------

### 2. `grid-template-columns` / `grid-template-rows`：定义轨道（列/行）

指定网格中每一列或行的宽度或高度：

```css
grid-template-columns: 100px 1fr 2fr;
grid-template-rows: 50px auto;
```

- 支持单位：`px`、`%`、`fr`（分数单位）、`auto`、`min-content`、`max-content` 等。
- `fr` 单位表示“剩余空间的份额”，常用于响应式布局。

------

### 3. `grid-template-areas`：命名网格区域

使用 ASCII 风格命名区域，使 HTML 更语义化：

```css
grid-template-areas:
  "header header"
  "sidebar main"
  "footer footer";
```

需要配合 `grid-area: 区域名;` 使用。

------

### 4. `grid-template`（简写）

简写方式，同时定义行高、列宽、区域：

```css
grid-template:
  "a a" 100px
  "b c" auto
  "d d" 50px
  / 1fr 2fr;
```

------

### 5. `grid-auto-rows` / `grid-auto-columns`：自动轨道尺寸

用于定义自动生成的行或列的大小：

```css
grid-auto-rows: 100px;
grid-auto-columns: 1fr;
```

当没有明确指定 `grid-template-rows` 或 `grid-template-columns` 时，自动添加的行/列使用这个值。

------

### 6. `grid-auto-flow`：自动排布方向

控制没有明确位置的项目如何自动填入网格中：

- `row`（默认）：按行优先排列
- `column`：按列优先排列
- `row dense` / `column dense`：密集排布，尽量填补空隙

------

### 7. `gap` / `row-gap` / `column-gap`：网格间距

控制行与列之间的间距：

```css
gap: 10px 20px; /* 行10px，列20px */
```

------

## 二、Grid 项目属性（Grid Item）

### 1. `grid-column-start` / `grid-column-end`

### 2. `grid-row-start` / `grid-row-end`

控制项目在网格线之间的跨度：

```css
grid-column-start: 2;
grid-column-end: 4;
```

- 数字表示第几条网格线（从1开始，负数从末尾倒数）
- 也可使用：
  - `auto`：自动放置
  - `span 2`：跨越2个轨道
  - 命名线名：与 `grid-template-areas` 命名结合使用

------

### 3. `grid-column` / `grid-row`（简写）

```css
grid-column: 2 / 4;     /* 从第2列线开始，到第4列线结束 */
grid-row: 1 / span 2;   /* 从第1行线开始，跨2行 */
```

------

### 4. `grid-area`（四参数语法）

```css
grid-area: row-start / column-start / row-end / column-end;
```

通过指定两个角（左上、右下）四条网格线，定义项目的完整矩形区域。

------

### 5. `justify-self`：水平方向对齐

定义项目在**自身网格区域内**的水平对齐方式：

- `start`：靠左
- `end`：靠右
- `center`：居中
- `stretch`（默认）：拉伸填满

------

### 6. `align-self`：垂直方向对齐

定义项目在**自身网格区域内**的垂直对齐方式：

- 同上：`start`、`end`、`center`、`stretch`

------

### 7. `place-self`（简写）

```css
place-self: align-self justify-self;
```

------

### 8. `order`：显示顺序

- 默认值：`0`，可设置正负整数。
- 值越小，项目越靠前显示。
- 通常不推荐在 Grid 中使用 `order` 管理布局（用于动画或视觉重排时可用）。

------

## 三、Grid 特点与 Flex 区别

| 特性     | Grid                   | Flex                 |
| -------- | ---------------------- | -------------------- |
| 布局维度 | 二维（行+列）          | 一维（行 ==或== 列） |
| 对象     | 区域为主               | 项目为主             |
| 排布能力 | 精确控制区域大小与位置 | 灵活自适应内容       |
| 常用场景 | 整体页面布局，复杂模块 | 局部对齐，列表组件   |

------



## 注：

已通过 [Grid Garden](https://cssgridgarden.com/)、MDN 文档与 ChatGPT 练习掌握网格布局基础，基本熟悉所有属性语法与逻辑。今后将配合设计图实战进一步掌握区域划分与网格命名技巧。

