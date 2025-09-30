@echo off
echo ========================================
echo   WanderWell GitHub 推送脚本
echo ========================================
echo.

echo 正在检查Git状态...
git --version
if errorlevel 1 (
    echo 错误: Git未安装，请先安装Git
    echo 下载地址: https://git-scm.com/
    pause
    exit /b 1
)

echo.
echo 步骤1: 初始化Git仓库...
git init
if errorlevel 1 (
    echo 警告: Git仓库可能已存在，继续...
)

echo.
echo 步骤2: 添加所有文件...
git add .

echo.
echo 步骤3: 创建提交...
git commit -m "WanderWell vintage blog website - complete project with categories, search, and articles"

echo.
echo 步骤4: 添加远程仓库...
git remote remove origin 2>nul
git remote add origin https://github.com/kydomain1/WanderWell.git

echo.
echo 步骤5: 推送到GitHub...
git push -u origin main
if errorlevel 1 (
    echo.
    echo 推送失败，尝试强制推送...
    git push -f origin main
    if errorlevel 1 (
        echo.
        echo ========================================
        echo 推送失败！可能的原因：
        echo 1. GitHub仓库不存在
        echo 2. 需要身份验证
        echo 3. 网络连接问题
        echo.
        echo 请检查：
        echo - 仓库是否已在GitHub创建
        echo - 网址是否正确: https://github.com/kydomain1/WanderWell.git
        echo - 是否需要登录GitHub账户
        echo ========================================
        pause
        exit /b 1
    )
)

echo.
echo ========================================
echo 成功！WanderWell项目已推送到GitHub
echo 仓库地址: https://github.com/kydomain1/WanderWell.git
echo.
echo 下一步建议：
echo 1. 访问GitHub仓库查看文件
echo 2. 启用GitHub Pages进行在线部署
echo 3. 设置仓库描述和标签
echo ========================================
echo.
pause
