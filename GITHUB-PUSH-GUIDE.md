# 📚 GitHub推送指南 - WanderWell项目

## 🎯 目标
将WanderWell项目推送到GitHub仓库：https://github.com/kydomain1/WanderWell.git

## 📋 准备工作

### 1. 确认GitHub仓库
请确保您已经在GitHub上创建了仓库：
- 仓库名称：WanderWell
- 仓库URL：https://github.com/kydomain1/WanderWell.git
- 仓库可以是空的（推荐）或者已有README

### 2. 确认Git已安装
在命令提示符中运行：
```bash
git --version
```
如果没有安装Git，请从 https://git-scm.com/ 下载安装。

## 🚀 推送步骤

### 步骤1：打开命令提示符
1. 按 `Win + R`，输入 `cmd`，按回车
2. 使用 `cd` 命令导航到WanderWell文件夹：
   ```bash
   cd D:\WanderWell
   ```

### 步骤2：初始化Git仓库
```bash
git init
```

### 步骤3：添加所有文件
```bash
git add .
```

### 步骤4：创建初始提交
```bash
git commit -m "Initial commit: WanderWell vintage blog website"
```

### 步骤5：添加远程仓库
```bash
git remote add origin https://github.com/kydomain1/WanderWell.git
```

### 步骤6：设置主分支
```bash
git branch -M main
```

### 步骤7：推送到GitHub
```bash
git push -u origin main
```

## 🔐 身份验证

如果遇到身份验证问题，您可能需要：

### 选项1：使用Personal Access Token（推荐）
1. 访问 GitHub → Settings → Developer settings → Personal access tokens
2. 生成新的token，给予repo权限
3. 在推送时，用户名使用GitHub用户名，密码使用token

### 选项2：使用SSH（高级用户）
1. 生成SSH密钥：`ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`
2. 添加SSH密钥到GitHub账户
3. 使用SSH URL：`git remote set-url origin git@github.com:kydomain1/WanderWell.git`

## 📁 推送的文件清单

以下文件将被推送到GitHub：

### 🌐 网页文件
- `index.html` - 主页
- `categories.html` - 分类页面
- `search.html` - 搜索页面
- `article.html` - 文章页面
- `about.html` - 关于页面
- `contact.html` - 联系页面
- `privacy.html` - 隐私政策
- `terms.html` - 服务条款

### 🎨 样式文件
- `css/style.css` - 主样式表
- `css/pages.css` - 页面特定样式

### ⚡ JavaScript文件
- `js/script.js` - 核心功能
- `js/articles.js` - 文章数据
- `js/categories.js` - 分类页面功能
- `js/search.js` - 搜索功能
- `js/article-page.js` - 文章页面功能

### 🖼️ 图片文件
- `images/` 文件夹中的所有图片（33个文件）
- 包括logo、文章图片、背景图片等

### 📄 项目文件
- `README.md` - 项目说明
- `.gitignore` - Git忽略文件配置
- `package.json` - 项目配置
- `favicon.svg` - 网站图标

### 🔧 工具文件
- `check-website-status.html` - 网站状态检查器
- `GITHUB-PUSH-GUIDE.md` - 本指南
- 各种文档和指南文件

## ✅ 验证推送成功

推送完成后，请验证：

1. **访问GitHub仓库**：https://github.com/kydomain1/WanderWell.git
2. **检查文件**：确认所有文件都已上传
3. **查看README**：确认README.md正确显示
4. **测试GitHub Pages**：
   - 进入仓库设置 → Pages
   - 选择main分支作为源
   - 访问：https://kydomain1.github.io/WanderWell/

## 🆘 常见问题解决

### 问题1：权限被拒绝
```
remote: Permission to kydomain1/WanderWell.git denied
```
**解决方案**：
- 确认GitHub用户名和密码正确
- 使用Personal Access Token代替密码
- 确认您有仓库的写权限

### 问题2：仓库不存在
```
remote: Repository not found
```
**解决方案**：
- 确认仓库URL正确
- 确认仓库已在GitHub上创建
- 检查仓库名称拼写

### 问题3：推送被拒绝
```
! [rejected] main -> main (fetch first)
```
**解决方案**：
- 如果GitHub仓库已有内容，先拉取：`git pull origin main`
- 或者强制推送：`git push -f origin main`（谨慎使用）

### 问题4：文件太大
```
remote: error: File too large
```
**解决方案**：
- 检查是否有大文件被意外添加
- 使用 `git rm --cached <large-file>` 移除大文件
- 重新提交

## 🎉 成功后的下一步

推送成功后，您可以：

1. **启用GitHub Pages**：让网站在线访问
2. **设置自定义域名**：如果有自己的域名
3. **邀请协作者**：添加其他开发者
4. **创建Issues**：追踪bug和功能请求
5. **设置分支保护**：保护主分支

## 📞 需要帮助？

如果遇到问题：
1. 检查错误信息
2. 参考GitHub官方文档
3. 搜索Stack Overflow
4. 在GitHub仓库创建Issue

---

**祝您推送顺利！** 🚀

*WanderWell项目即将在GitHub上展示给全世界！*
