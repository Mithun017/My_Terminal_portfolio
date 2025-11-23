@echo off
echo ==========================================
echo      3D Portfolio - GitHub Setup
echo ==========================================
echo.
echo This script will help you push your portfolio to GitHub.
echo.
echo [STEP 1] Initializing Git...
git init
echo.

echo [STEP 2] Adding files...
git add .
echo.

echo [STEP 3] Committing files...
git commit -m "Initial commit: 3D Terminal Portfolio"
echo.

echo ==========================================
echo IMPORTANT:
echo 1. Go to https://github.com/new
echo 2. Create a new repository (name it 'portfolio' or similar).
echo 3. DO NOT add a README, .gitignore, or license.
echo 4. Copy the HTTPS URL (e.g., https://github.com/username/repo.git)
echo ==========================================
echo.
set /p REPO_URL="Paste your GitHub Repository URL here: "

echo.
echo [STEP 4] Linking to GitHub...
git remote remove origin 2>nul
git remote add origin %REPO_URL%
git branch -M main

echo.
echo [STEP 5] Pushing to GitHub...
git push -u origin main

echo.
echo ==========================================
echo              DONE!
echo ==========================================
pause
