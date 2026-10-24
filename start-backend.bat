@echo off
echo ===============================================
echo   GRO-HIT RURAL SUPPORT PLATFORM
echo   Starting Backend Server...
echo ===============================================
echo.
echo Backend API: http://localhost:5000/api
echo Frontend:    Open index.html in browser
echo.
echo Press Ctrl+C to stop the server.
echo.
cd /d "%~dp0backend"
node server.js
