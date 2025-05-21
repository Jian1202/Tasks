# Flex布局

## 零、概述

Flex 布局（Flexible Box Layout）是一种==一维==布局模型，用于在 ***行（row）或列（column*）** 方向上<u>分配空间、对齐项目</u>，并支持项目**<u>在剩余空间中的伸展或收缩</u>**。
在实际使用中，通过在父元素上设置：

```css
.container {
  display: flex; /* 或 inline-flex */
}
```

即可将其子元素自动转换为弹性项目。

在学习 CSS Flex 布局时，我们主要关注两大核心：**Flex 容器（Flex Container）与Flex 项目（Flex Item）**。

## 一、Flex 容器属性（Flex Container）

==Flex 容器属性用于定义**布局方向**、**换行行为**、**主轴与交叉轴对齐方式**以及项目间距等。==

### 1. `display`：显示类型（是否为弹性容器）

- `flex`：定义为块级弹性容器。
- `inline-flex`：定义为行内弹性容器。

### 2. `flex-direction`：主轴方向

指定主轴的方向，决定项目的排列方向：

- `row`（默认）：从左到右排列。
- `row-reverse`：从右到左排列。
- `column`：从上到下排列。
- `column-reverse`：从下到上排列。

### 3. `justify-content`：主轴对齐方式

定义项目在主轴上的对齐方式：

- `flex-start`：项目靠主轴起点对齐。
- `flex-end`：项目靠主轴终点对齐。
- `center`：项目居中对齐。
- `space-between`：项目之间的间隔相等，首尾项目紧贴容器边缘。
- `space-around`：项目之间的间隔相等，首尾项目与容器边缘有一半的间隔。
- `space-evenly`：项目之间的间隔相等，包括首尾项目与容器边缘的间隔。

### 4. `align-items`：交叉轴对齐方式（单行）

定义项目在交叉轴（垂直于主轴）上的对齐方式：

- `flex-start`：项目靠交叉轴起点对齐。
- `flex-end`：项目靠交叉轴终点对齐。
- `center`：项目居中对齐。
- `baseline`：项目的基线对齐。
- `stretch`（默认）：项目拉伸以填充容器。

### 5. `align-content`：交叉轴对齐方式（多行）

当有多行项目时，定义行与行之间的对齐方式：

- `flex-start`：行靠交叉轴起点对齐。
- `flex-end`：行靠交叉轴终点对齐。
- `center`：行居中对齐。
- `space-between`：行之间的间隔相等。
- `space-around`：行之间的间隔相等，首尾行与容器边缘有一半的间隔。
- `space-evenly`：行之间的间隔相等，包括首尾行与容器边缘的间隔。
- `stretch`（默认）：行拉伸以填充容器。

### 6. `flex-wrap`：是否换行

定义项目是否换行：

- `nowrap`（默认）：不换行。
- `wrap`：换行，第一行在上方。
- `wrap-reverse`：换行，第一行在下方。

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

定义项目的排列顺序，默认值为 `0`。值越小，项目越靠前显示。可设为任意整数，数值相同时保留源顺序。

------

### 2. `flex-grow`：放大比例

定义项目在容器有剩余空间时的放大比例，默认值为 `0`，即不放大。接受非负数，值越大，占用剩余空间越多。

------

### 3. `flex-shrink`：收缩比例

定义项目在容器空间不足时的收缩比例，默认值为 `1`，即允许按比例缩小。值越大，越先收缩；设为 `0` 表示不缩小。

------

### 4. `flex-basis`：初始尺寸

定义在分配多余空间之前，项目占据的主轴空间。默认值为 `auto`，即依据内容大小或宽高属性确定初始尺寸。可设置长度值（如 `100px`）、百分比或关键字（如 `content`）。

------

### 5. `flex`（简写）

是 `flex-grow`、`flex-shrink` 和 `flex-basis` 的简写形式：

```css
flex: <flex-grow> <flex-shrink> <flex-basis>;
```

常见组合值：

- `auto`: `1 1 auto`：允许放大和缩小，初始尺寸为内容大小
- `none`: `0 0 auto`：不放大、不缩小，固定尺寸
- `<number>`: `<number> 1 0`：按比例放大，不保留初始尺寸

------

### 6. `align-self`：单独对齐

允许单个项目设置自己的对齐方式，覆盖父容器的 `align-items`：

- `auto`: 继承父容器设置
- `flex-start`: 交叉轴起点对齐
- `flex-end`: 交叉轴终点对齐
- `center`: 交叉轴居中对齐
- `baseline`: 项目文字基线对齐
- `stretch`: 自动拉伸填满交叉轴空间（未设置具体尺寸时生效）





## 注：

已在[Flexbox Froggy](https://flexboxfroggy.com)网站已练习Flex的容器属性（加上order），已在[codecademy](https://www.codecademy.com/)网站学习并练习了弹性盒子的教学练习。

其余学习资料来自与MDN官方文档以及ChatGPT、Deepseek总结，并加以深入理解了各元素属性含义。

