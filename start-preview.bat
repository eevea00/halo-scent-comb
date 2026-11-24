@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo ========================================================
echo   HALO Scent Comb - Local Web Preview Server
echo   URL: http://127.0.0.1:8000/
echo   Press Ctrl+C in this window to stop the server.
echo ========================================================
echo.

where python >nul 2>nul
if %errorlevel%==0 (
  start "" cmd /c "timeout /t 1 /nobreak >nul && start http://127.0.0.1:8000/"
  python -m http.server 8000 --bind 127.0.0.1
  goto :eof
)

where py >nul 2>nul
if %errorlevel%==0 (
  start "" cmd /c "timeout /t 1 /nobreak >nul && start http://127.0.0.1:8000/"
  py -3 -m http.server 8000 --bind 127.0.0.1
  goto :eof
)

echo [!] Python 3 was not found in PATH.
echo Please install Python 3 or run a static HTTP server in this folder,
echo or visit the live site: https://eevea00.github.io/halo-scent-comb/
pause
