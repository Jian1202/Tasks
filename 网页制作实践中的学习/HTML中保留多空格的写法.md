
 # HTML 多空格输入方法

 ## 一、基础方法
 ### 1. 连续空格实体
 ```html
 文本A&nbsp;&nbsp;&nbsp;&nbsp;文本B
 ```
 效果：
文本A    文本B

 ### 2. 预格式化标签

```
 <pre>文本C    文本D</pre>
```

 效果：
文本C    文本D


 ## 二、CSS 方案
 ### 1. 行内样式
 ```html
 <span style="white-space: pre">文本E    文本F</span>
 ```
 效果：文本E    文本F

 ### 2. 块级样式
 ```html
 <div style="white-space: pre-wrap">
   文本G    文本H
 </div>
 ```
 效果：文本G    文本H

 ## 三、高级实体
 ```html
 文本I&ensp;&ensp;文本J  <!-- 半角空格 -->
 文本K&emsp;&emsp;文本L  <!-- 全角空格 -->
 ```
 效果：
 文本I  文本J  
 文本K  文本L