# Markdown原理简析

Markdown 是一种轻量级标记语言，旨在简化文本到结构化 HTML 的转换。
其核心原理是通过易读易写的纯文本格式，使用特定符号标记内容结构，再通过解析器将其转换为标准 HTML 或其他格式。以下是其工作原理的详细解析：

---

### **1. 核心设计理念**
- **可读性优先**：语法符号直观（如 `#` 表示标题，`*` 表示列表），即使未渲染也能清晰阅读。
- **兼容性**：可直接嵌入 HTML 标签，支持混合使用。
- **轻量化**：无需复杂编辑器，纯文本即可编写。

---

### **2. 语法与转换规则**
Markdown 通过符号标记不同内容类型，解析器按规则将其转换为 HTML：

#### **块级元素（Block Elements）**
- **标题**：  
  `# 标题` → `<h1>标题</h1>`  
  根据 `#` 数量对应 `<h1>` 到 `<h6>`。
- **段落**：  
  连续文本行 → `<p>...</p>`。
- **列表**：
  - 无序列表：`- 项` → `<ul><li>项</li></ul>`。
  - 有序列表：`1. 项` → `<ol><li>项</li></ol>`。
- **代码块**：  
  ` ```代码` → `<pre><code>代码</code></pre>`。
- **引用**：  
  `> 引用` → `<blockquote>引用</blockquote>`。

#### **行内元素（Inline Elements）**
- **加粗/斜体**：  
  `**粗体**` → `<strong>粗体</strong>`，`*斜体*` → `<em>斜体</em>`。
- **链接**：  
  `[文本](URL)` → `<a href="URL">文本</a>`。
- **图片**：  
  `![alt](URL)` → `<img src="URL" alt="alt">`。
- **行内代码**：  
  `` `代码` `` → `<code>代码</code>`。

---

### **3. 解析流程**
1. **分块处理**：将文本按空行分割为块级元素（如段落、标题）。
2. **行内解析**：在每个块内识别行内元素（如链接、粗体）。
3. **语法树生成**：构建抽象语法树（AST），表示文档结构。
4. **渲染输出**：将 AST 转换为目标格式（如 HTML、PDF）。

---

### **4. 扩展语法**
不同平台通过扩展支持更丰富的格式：
- **表格**：用 `|` 分隔列，`---` 对齐。
  ```markdown
  | Header | Header |
  |--------|--------|
  | Cell   | Cell   |
  ```
- **任务列表**：`- [x] 任务` → 带复选框的列表。
- **脚注**：`[^1]` 和 `[^1]: 注释`。
- **数学公式**：用 `$$...$$` 包裹 LaTeX 公式（如 GitHub Flavored Markdown）。

---

### **5. 解析器实现**
- **正则表达式**：匹配特定模式（如 `#+` 匹配标题）。
- **状态机**：跟踪上下文（如列表嵌套层级）。

---

### **6. 示例转换**
**Markdown 输入**：
```markdown
# 标题
这是一个段落，包含**粗体**和[链接](https://example.com)。
- 列表项
```
**HTML 输出**：
```html
<h1>标题</h1>
<p>这是一个段落，包含<strong>粗体</strong>和<a href="https://example.com">链接</a>。</p>
<ul>
  <li>列表项</li>
</ul>
```

