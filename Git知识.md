# Git 学习笔记

---

## 一、Git 是什么？起源小故事 😃

### 1.1 Git 的定义
**Git 是一个开源的分布式版本控制系统**，用于高效管理项目版本。它能跟踪文件变化，支持多人协作开发，适用于各类规模的项目。

### 1.2 Git 的起源
- **背景**：Linux 内核开发初期，Linus Torvalds 手工合并代码效率低下。
- **转折**：2002 年使用 BitKeeper，后因社区成员尝试逆向协议被收回授权。
- **诞生**：2005 年 Linus 用两周时间开发 Git，一个月内 Linux 源码迁移完成。
- **发展**：2008 年 GitHub 上线，成为开源项目的主要托管平台。

---

## 二、Git 与 SVN 的核心区别

### 2.1 架构差异
| **特性**         | **Git（分布式）**                            | **SVN（集中式）**                          |
|------------------|---------------------------------------------|--------------------------------------------|
| **数据存储**     | 每个用户拥有完整仓库（含历史记录）          | 依赖中央服务器，本地仅存储当前文件镜像      |
| **网络依赖**     | 支持离线操作（提交、查看历史等）            | 必须联网才能执行提交、更新等操作           |
| **分支管理**     | 轻量级分支，秒级创建/切换                   | 分支是目录拷贝，创建耗时且占用空间         |
| **提交速度**     | 本地提交，无需网络延迟                      | 每次提交需与中央服务器通信                 |
| **容灾能力**     | 每个本地仓库都是完整备份                    | 中央服务器故障可能导致数据丢失             |

### 2.2 关键概念对比
- **Git 的 SHA-1 哈希**  
  每个提交生成唯一 40 位哈希值（如 `eaadf4e385e4d3d905c3a2a31b6e5d6d`），用于保证数据完整性。
- **SVN 的全局版本号**  
  每次提交递增全局版本号（如 Revision 100），便于直观追踪变更。

---

## 三、Git 安装与配置

### 3.1 Windows 安装步骤
1. **下载安装包**  
   [Git 官网下载](https://git-scm.com/downloads)，按默认选项安装。
2. **验证安装**  
   打开 Git Bash，输入 `git --version` 显示版本号即成功。

### 3.2 全局配置
```bash
# 设置用户名和邮箱（提交记录标识）
git config --global user.name "Your Name"
git config --global user.email "email@example.com"
```

---

## 四、Git 仓库管理

### 4.1 创建仓库
```bash
mkdir myproject    # 创建项目目录
cd myproject       # 进入目录
git init           # 初始化仓库
```
- **`.git` 目录**：隐藏文件夹，存储版本控制元数据，严禁手动修改！

### 4.2 添加与提交文件
1. **添加文件到暂存区**  
   ```bash
   git add README.md   # 添加单个文件
   git add .           # 添加所有修改
   ```
2. **提交到本地仓库**  
   ```bash
   git commit -m "Initial commit: add README"
   ```
   - `-m` 参数必须添加有意义的提交说明（如修复的 Bug ID 或功能描述）。

---

## 五、Git 核心操作

### 5.1 状态与日志
| 命令                  | 作用                           | 示例输出片段                          |
|-----------------------|--------------------------------|---------------------------------------|
| `git status`          | 查看工作区/暂存区状态          | `Changes not staged for commit: ...` |
| `git log`             | 查看提交历史                   | `commit eaadf4e... (HEAD -> master)`  |
| `git log --oneline`   | 简洁版提交历史                 | `eaadf4e Initial commit`             |

### 5.2 分支管理
```bash
git branch feature-login      # 创建分支
git checkout feature-login    # 切换分支
git merge feature-login       # 合并分支到当前分支
```

### 5.3 撤销操作
| 场景                 | 命令                          |
|----------------------|-------------------------------|
| 撤销工作区修改       | `git checkout -- <file>`      |
| 撤销暂存区文件       | `git reset HEAD <file>`       |
| 回退到历史提交       | `git reset --hard <commit-id>`|

---

## 六、GitHub 协作流程

### 6.1 参与开源项目步骤
1. **Fork 项目**  
   在 GitHub 点击项目页面的 `Fork` 按钮，创建个人副本。
2. **克隆到本地**  
   ```bash
   git clone https://github.com/your-username/project.git
   ```
3. **开发与推送**  
   - 创建分支开发新功能
   - 推送分支到远程仓库：
     ```bash
     git push origin feature-branch
     ```
4. **发起 Pull Request (PR)**  
   在 GitHub 仓库页面提交 PR，描述修改内容。

### 6.2 同步上游仓库
```bash
git remote add upstream https://github.com/original/project.git
git fetch upstream           # 获取上游更新
git merge upstream/main      # 合并到本地分支
```

---

## 七、Git 高级技巧

### 7.1 忽略文件配置
创建 `.gitignore` 文件，定义需忽略的文件/目录：
```plaintext
# 忽略所有 .log 文件
*.log

# 忽略 node_modules 目录
node_modules/
```

### 7.2 标签管理
```bash
git tag v1.0.0                 # 创建轻量标签
git tag -a v1.0.1 -m "Release" # 含注释的附注标签
git push origin --tags          # 推送所有标签到远程
```

---

## 八、Git 与 GitHub 的关系

| **Git**                        | **GitHub**                          |
|--------------------------------|-------------------------------------|
| 本地版本控制工具               | 基于 Git 的远程代码托管平台         |
| 管理本地代码历史               | 提供代码托管、PR 审核、Issue 跟踪   |
| 无需网络即可操作               | 依赖网络访问，增强团队协作功能      |

---

## 九、常见问题 FAQ

### Q1：`git add` 和 `git commit` 的区别？
- `git add`：将工作区修改添加到暂存区（准备提交的内容快照）。
- `git commit`：将暂存区内容永久保存到本地仓库。

### Q2：如何解决合并冲突？
1. 打开冲突文件，定位 `<<<<<<<` 标记。
2. 手动修改代码，保留需要的部分。
3. 删除冲突标记后，重新提交：
   ```bash
   git add resolved-file.txt
   git commit -m "Resolve merge conflict"
   ```

---

> 通过本文档，您已掌握 Git 的核心概念和常用操作。建议结合实战练习（如 GitHub 项目协作）加深理解。更多高级功能可参考 [Pro Git 电子书](https://git-scm.com/book/zh/v2)。

