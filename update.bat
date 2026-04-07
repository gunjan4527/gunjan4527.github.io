@echo off
setlocal

REM Ensure Git is available in this shell
where git >nul 2>nul
if errorlevel 1 (
  if exist "C:\Program Files\Git\cmd\git.exe" (
    set "PATH=C:\Program Files\Git\cmd;%PATH%"
  )
)

where git >nul 2>nul
if errorlevel 1 (
  echo ERROR: Git is not installed or not available in PATH.
  pause
  exit /b 1
)

REM Stage all changes
git add .
if errorlevel 1 (
  echo ERROR: git add failed.
  pause
  exit /b 1
)

REM Commit only when there are staged changes
git diff --cached --quiet
if errorlevel 1 (
  git commit -m "update portfolio"
  if errorlevel 1 (
    echo ERROR: git commit failed.
    pause
    exit /b 1
  )
) else (
  echo No changes to commit. Continuing with push and deploy...
)

git push
if errorlevel 1 (
  echo ERROR: git push failed.
  pause
  exit /b 1
)

npm run deploy
if errorlevel 1 (
  echo ERROR: deployment failed.
  pause
  exit /b 1
)

echo Deployment successful.
pause