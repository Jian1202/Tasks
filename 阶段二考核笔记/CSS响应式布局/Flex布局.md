# Flex布局

## 零、概述

Flex 布局（Flexible Box Layout）是一种**==一维==布局模型**，用于在 ***行（row）或列（column*）** 方向上<u>分配空间、对齐项目</u>，并支持项目**<u>在剩余空间中的伸展或收缩</u>**。
在实际使用中，通过在父元素上设置：

```css
.container {
  display: flex; /* 或 inline-flex */
}
```

即可将其子元素自动转换为弹性项目。

在学习 CSS Flex 布局时，我们主要关注两大对象：**Flex 容器（Flex Container）与Flex 项目（Flex Item）**。

—

## 一、Flex 容器属性（Flex Container）

==Flex 容器属性用于定义**布局方向**、**换行行为**、**主轴与交叉轴对齐方式**以及项目间距等。==

### 1. `display`：显示类型（是否为弹性容器）

- `flex`：定义为块级弹性容器。
- `inline-flex`：定义为行内弹性容器。

---

### 2. `flex-direction`：主轴方向

指定主轴的方向，决定项目的排列方向：

- `row`（默认）：从左到右排列。
- `row-reverse`：从右到左排列。
- `column`：从上到下排列。
- `column-reverse`：从下到上排列。

---

### 3. `justify-content`：主轴对齐方式

定义项目在主轴上的对齐方式：

- `flex-start`：项目靠主轴起点对齐。
- `flex-end`：项目靠主轴终点对齐。
- `center`：项目居中对齐。
- `space-between`：项目之间的间隔相等，首尾项目紧贴容器边缘。
- `space-around`：项目之间的间隔相等，首尾项目与容器边缘有一半的间隔。
- `space-evenly`：项目之间的间隔相等，包括首尾项目与容器边缘的间隔。

---

### 4. `align-items`：交叉轴对齐方式（单行）

定义项目在交叉轴（垂直于主轴）上的对齐方式：

- `flex-start`：项目靠交叉轴起点对齐。
- `flex-end`：项目靠交叉轴终点对齐。
- `center`：项目居中对齐。
- `baseline`：项目的基线对齐。
- `stretch`（默认）：项目拉伸以填充容器。

---

### 5. `align-content`：交叉轴对齐方式（多行）

当有多行项目时，定义行与行之间的对齐方式：

- `flex-start`：行靠交叉轴起点对齐。
- `flex-end`：行靠交叉轴终点对齐。
- `center`：行居中对齐。
- `space-between`：行之间的间隔相等。
- `space-around`：行之间的间隔相等，首尾行与容器边缘有一半的间隔。
- `space-evenly`：行之间的间隔相等，包括首尾行与容器边缘的间隔。
- `stretch`（默认）：行拉伸以填充容器。

---

### 6. `flex-wrap`：是否换行

定义项目是否换行：

- `nowrap`（默认）：不换行。
- `wrap`：换行，第一行在上方。
- `wrap-reverse`：换行，第一行在下方。

---

### 7. `flex-flow`（简写）

`flex-direction` 和 `flex-wrap` 的简写形式：

```css
flex-flow: <flex-direction> <flex-wrap>;
/*例：flex-flow: row wrap;*/
```

------



## 二、Flex 项目属性（Flex Items）

==这些属性用于设置每个<u>子项目</u>的**布局行为**，影响其在容器中的表现。==

### 1. `order`：排列顺序

- 默认值：`0`
- 值越小，项目越靠前显示。
- 支持负数。
- 同一值时，按源代码顺序排列。

改变视觉排列顺序，不改变 HTML 结构顺序。

---

### 2. `flex-grow`：放大比例

定义项目在**容器有剩余空间**时的放大比例。

- 默认值：`0`（不放大）
- 任意非负数：比例值越大，占得越多。

```
.item1 { flex-grow: 1; }
.item2 { flex-grow: 2; }
```

剩余空间为 90px，`.item1` 占 30px，`.item2` 占 60px。

---

### 3. `flex-shrink`：收缩比例

定义项目在**空间不足时的缩小比例**。

- 默认值：`1`（允许收缩）
- 值越大，越容易缩小；设为 `0` 表示不可收缩。

 <u>**常用于阻止某些项目被压缩，如导航栏 logo：**</u>

```
.logo { flex-shrink: 0; }
```

---

### 4. `flex-basis`：主轴初始尺寸

定义项目**在分配剩余空间前**的初始主轴长度：

- 默认值：`auto`（依据内容尺寸或 `width`/`height`）
- 可为具体长度，如 `100px`、`50%` 等。

 <u>**相当于“起始占位宽度”，优先级高于 `width`。**</u>

---

### 5. `flex`（简写）

是 `flex-grow`、`flex-shrink` 和 `flex-basis` 的组合：

```
flex: <grow> <shrink> <basis>;
```

常见写法：

- `flex: auto` → `1 1 auto`
- `flex: none` → `0 0 auto`
- `flex: 1` → `1 1 0%`：常用于平均分配空间。

<u>**推荐使用该属性快速配置项目弹性行为。**</u>

---

### 6. `align-self`：单个项目对齐方式

允许单独设置项目的交叉轴对齐方式，覆盖容器 `align-items` 设置。

- 可选值：`auto`（继承容器）、`flex-start`、`flex-end`、`center`、`baseline`、`stretch`

> **应对少数项目特殊对齐需求（如按钮与图标居中对齐）。**



## 注：

已在[Flexbox Froggy](https://flexboxfroggy.com)网站已练习Flex的容器属性（加上order），已在[codecademy](https://www.codecademy.com/)网站学习并练习了弹性盒子的教学练习。

其余学习资料来自与MDN官方文档以及ChatGPT、Deepseek总结，并加以深入理解了各元素属性含义。

