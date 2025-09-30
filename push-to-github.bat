@echo off
echo ====================================
echo  WanderWell GitHub Push Script
echo ====================================
echo.

echo Step 1: Initializing Git repository...
git init
if errorlevel 1 (
    echo ERROR: Failed to initialize Git repository
    pause
    exit /b 1
)

echo.
echo Step 2: Adding all files to Git...
git add .
if errorlevel 1 (
    echo ERROR: Failed to add files to Git
    pause
    exit /b 1
)

echo.
echo Step 3: Creating initial commit...
git commit -m "Initial commit: WanderWell vintage blog website with categories, search, and article pages"
if errorlevel 1 (
    echo ERROR: Failed to create commit
    pause
    exit /b 1
)

echo.
echo Step 4: Adding remote repository...
git remote add origin https://github.com/kydomain1/WanderWell.git
if errorlevel 1 (
    echo WARNING: Remote might already exist, continuing...
)

echo.
echo Step 5: Setting default branch to main...
git branch -M main
if errorlevel 1 (
    echo ERROR: Failed to set branch to main
    pause
    exit /b 1
)

echo.
echo Step 6: Pushing to GitHub...
git push -u origin main
if errorlevel 1 (
    echo ERROR: Failed to push to GitHub
    echo.
    echo This might be because:
    echo 1. The repository doesn't exist on GitHub
    echo 2. You don't have permission to push
    echo 3. Authentication is required
    echo.
    echo Please check the repository exists at: https://github.com/kydomain1/WanderWell.git
    pause
    exit /b 1
)

echo.
echo ====================================
echo SUCCESS! Your WanderWell website has been pushed to GitHub!
echo Repository URL: https://github.com/kydomain1/WanderWell.git
echo ====================================
echo.
pause
