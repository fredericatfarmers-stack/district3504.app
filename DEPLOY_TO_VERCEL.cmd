@echo off
setlocal
cd /d "%~dp0"

echo.
echo ==========================================================
echo   District 3504 - Deploy team photos to Vercel
echo ==========================================================
echo.

where node >nul 2>&1
if errorlevel 1 (
  echo Node.js is not installed on this computer.
  echo Install the current Node.js LTS version, then run this file again.
  echo.
  pause
  exit /b 1
)

echo This package is linked to the existing Vercel project:
echo district3504-app

echo.
echo Vercel may open a browser window and ask you to sign in.
echo Use frederic.at.farmers@gmail.com.
echo.

call npx --yes vercel@latest --prod --yes
if errorlevel 1 (
  echo.
  echo Deployment did not complete. Leave this window open and send Blue
  echo a screenshot of the error shown above.
  echo.
  pause
  exit /b 1
)

echo.
echo SUCCESS. The updated site has been sent to production.
echo Open https://district3504-app.vercel.app and press Ctrl+F5.
echo.
pause
