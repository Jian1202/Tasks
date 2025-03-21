# GitHub入门及进阶

## **一、GitHub入门**

### 1. 基本概念
- **Repository（仓库）**：项目的存储空间，包含代码、文档、提交历史等。
- **Branch（分支）**：独立开发线，默认分支通常为`main`或`master`。
- **Commit（提交）**：代码变更的记录，包含唯一哈希值、作者、时间戳和描述。
- **Pull Request（PR）**：请求将分支代码合并到主分支，用于代码审查和协作。
- **Issue（问题）**：任务、Bug跟踪或讨论的载体。
- **Fork（分叉）**：将他人仓库复制到自己的账户，用于贡献代码。

### 2. 创建第一个仓库
1. 登录GitHub → 点击右上角 `+` → `New repository`。
2. 输入仓库名、描述，选择公开/私有，勾选初始化`README.md`。
3. 点击 `Create repository`。

### 3. Git基础操作
```bash
# 克隆仓库到本地 （username/repo --> 用户名/仓库）
git clone https://github.com/username/repo.git

# 添加文件到暂存区
git add filename  # 或 git add .（添加所有变更）

# 提交变更
git commit -m "描述本次提交"

# 推送代码到远程仓库
git push origin main

# 拉取远程仓库最新代码
git pull origin main

# 创建并切换分支
git checkout -b new-branch
```

### 4. 协作流程
1. **Fork他人仓库**：在GitHub页面点击右上角 `Fork`。
2. **克隆自己的Fork仓库**：`git clone your-fork-url`。
3. **添加远程源**：
   
   ```bash
   git remote add upstream original-repo-url
   git fetch upstream  # 同步原仓库变更(获取上游最新更新、变动)
   ```
4. 提交代码后，在GitHub发起 `Pull Request`（PR）。

---

## **二、GitHub进阶**
### 1. 分支管理策略
- **Git Flow**：
  - `main`：稳定生产代码。
  - `develop`：开发主分支。
  - `feature/*`：功能分支，开发完成后合并到`develop`。
  - `release/*`：预发布分支。
  - `hotfix/*`：紧急修复分支。
- **GitHub Flow**（简化版）：
  - 所有开发基于`main`分支创建新分支。
  - 通过PR快速合并和部署。

### 2. 处理合并冲突
1. 更新本地分支：`git pull origin main`。
2. 手动解决冲突文件（标记`<<<<<<<`和`>>>>>>>`的部分）。
3. 添加解决后的文件并提交：
   ```bash
   git add conflicted-file
   git commit -m "Resolve merge conflict"
   ```

### *3. 高级Git操作
```bash
# 变基（Rebase）：整理提交历史
git checkout feature-branch
git rebase main  # 将当前分支的提交“移动”到main分支最新提交之后

# 储藏变更（Stash）：临时保存未提交的修改
git stash
git stash pop  # 恢复储藏内容

# 选择性提交（Cherry-pick）
git cherry-pick commit-hash  # 将某次提交应用到当前分支

# 回退提交
git reset --soft HEAD~1  # 撤销提交但保留修改
git reset --hard HEAD~1  # 彻底丢弃提交和修改
```

### *4. GitHub高级功能
- **GitHub Actions**：自动化CI/CD流程。
  - 示例：自动运行测试或部署到服务器。
  - 配置文件路径：`.github/workflows/*.yml`。
  
- **GitHub Pages**：免费静态网站托管。
  - 启用方式：仓库设置 → Pages → 选择分支（如`gh-pages`）。

- **Projects**：项目管理面板，支持看板视图和自动化任务流。

- **Codespaces**：云端开发环境，直接在线编码。

### *5. 参与开源项目
1. 通过 `Fork` + `PR` 贡献代码。
2. 使用 `Issues` 报告Bug或提议新功能。
3. 遵循项目的`CONTRIBUTING.md`规范。

---

## **三、协作与最佳实践**
### 1. **代码审查**
   - PR描述清晰，说明修改内容和关联的Issue。
   - 使用`@mention`通知相关人员。
   - 通过评论提出具体建议。

### 2. **Issue管理**
   - 用标签（Label）分类（如`bug`、`enhancement`）。
   - 使用模板标准化提交内容。

### 3. **文档规范**
   - 编写清晰的`README.md`（项目简介、安装步骤、使用示例）。
   - 维护`CHANGELOG.md`记录版本更新。

### 4. **敏感信息处理**
   - 避免提交密码、API密钥（使用`.gitignore`过滤文件）。
   - 若误提交，使用`git filter-branch`或`BFG Repo-Cleaner`清理历史。

---

## **四、安全与维护**
- **SSH密钥配置**：免密推送代码。
  
  ```bash
  ssh-keygen -t ed25519
  cat ~/.ssh/id_ed25519.pub  # 将公钥添加到GitHub账户
  ```
  
- **双因素认证（2FA）**：增强账户安全。

- **分支保护规则**：
  
  - 要求PR通过检查后才能合并。
  - 禁止直接向`main`分支推送代码。

---

## **五、学习资源**
1. 官方文档：[GitHub Docs](https://docs.github.com/)
2. Git教程：[Pro Git Book](https://git-scm.com/book/)
3. 交互式练习：[Learn Git Branching](https://learngitbranching.js.org/)
