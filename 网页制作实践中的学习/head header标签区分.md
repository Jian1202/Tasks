在网页开发和编程领域，head 和 header 是不同的概念，下面为你详细区分：
HTML 中的 `<head> `标签
用途：`<head> `标签用于包含那些不直接显示在网页上的元数据，这些数据为浏览器和搜索引擎提供了关于网页的重要信息。
包含内容：它可以包含页面的标题（`<title>`）、字符编码（`<meta charset>`）、搜索引擎优化相关的元数据（`<meta name="description">`）、外部样式表（`<link>`）以及内联脚本（`<script>`）等。
示例代码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>示例页面标题</title>
    <link rel="stylesheet" href="styles.css">
    <script src="script.js"></script>
</head>
<body>
    <!-- 页面内容 -->
</body>
</html>
```
在上述代码里，`<head>` 标签内包含了字符编码、视口设置、页面标题、外部样式表链接以及外部脚本链接。
HTML 中的 `<header>` 标签
用途：`<header>` 标签是 HTML5 引入的语义化标签，用于表示页面、章节或文章的介绍性内容。通常包含标题、副标题、导航链接等。
包含内容：常见的有 `<h1>` - `<h6>` 标签表示的标题、logo、导航菜单等。
示例代码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>示例页面</title>
</head>
<body>
    <header>
        <h1>网站标题</h1>
        <nav>
            <ul>
                <li><a href="#">首页</a></li>
                <li><a href="#">关于我们</a></li>
                <li><a href="#">联系我们</a></li>
            </ul>
        </nav>
    </header>
    <!-- 页面其他内容 -->
</body>
</html>
```
此代码中，`<header>` 标签包含了网站标题和导航菜单。
综上所述，`<head>` 主要用于存放网页的元数据，而 `<header>` 用于展示页面的头部内容。