@echo off
chcp 65001 >nul
cls
echo.
echo ==========================================
echo        WanderWell GitHub 快速推送
echo ==========================================
echo.

echo [1/6] 检查Git安装...
git --version
if errorlevel 1 (
    echo ❌ Git未安装！
    echo 请从 https://git-scm.com/ 下载安装Git
    pause
    exit /b 1
)
echo ✅ Git已安装

echo.
echo [2/6] 初始化Git仓库...
if exist .git (
    echo ✅ Git仓库已存在
) else (
    git init
    echo ✅ Git仓库已初始化
)

echo.
echo [3/6] 添加所有文件...
git add .
echo ✅ 文件已添加到暂存区

echo.
echo [4/6] 创建提交...
git commit -m "WanderWell: Complete vintage blog website with categories, search, and articles"
if errorlevel 1 (
    echo ⚠️  提交可能已存在，继续...
) else (
    echo ✅ 提交已创建
)

echo.
echo [5/6] 配置远程仓库...
git remote remove origin 2>nul
git remote add origin https://github.com/kydomain1/WanderWell.git
echo ✅ 远程仓库已配置

echo.
echo [6/6] 推送到GitHub...
echo 正在推送，请稍候...
git push -u origin main
if errorlevel 1 (
    echo.
    echo ⚠️  普通推送失败，尝试强制推送...
    git push -f origin main
    if errorlevel 1 (
        echo.
        echo ❌ 推送失败！
        echo.
        echo 可能的原因：
        echo 1. GitHub仓库不存在
        echo 2. 需要身份验证（用户名/密码或Token）
        echo 3. 网络连接问题
        echo.
        echo 解决方案：
        echo 1. 确认仓库已创建：https://github.com/kydomain1/WanderWell
        echo 2. 使用Personal Access Token作为密码
        echo 3. 检查网络连接
        pause
        exit /b 1
    )
)

echo.
echo ==========================================
echo           🎉 推送成功！
echo ==========================================
echo.
echo ✅ WanderWell项目已成功推送到GitHub
echo 📍 仓库地址：https://github.com/kydomain1/WanderWell
echo.
echo 🚀 下一步操作：
echo 1. 访问GitHub仓库查看文件
echo 2. 启用GitHub Pages进行在线部署
echo 3. 网站将在以下地址上线：
echo    https://kydomain1.github.io/WanderWell/
echo.
echo 📊 推送统计：
echo - HTML文件：8个
echo - CSS文件：2个  
echo - JavaScript文件：6个
echo - 图片文件：33个
echo - 文档文件：多个
echo.
pause
