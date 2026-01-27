@echo off
chcp 65001 > nul
echo ==================================================
echo 🛑 AETHELGARD: Stopping All Processes
echo ==================================================

echo Killing Node.js processes...
taskkill /F /IM node.exe 2>nul
if %errorlevel% equ 0 (
    echo ✅ All Node processes terminated
) else (
    echo ℹ️  No Node processes found
)

echo.
echo Killing processes on port 3000...
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :3000 ^| findstr LISTENING') do (
    taskkill /F /PID %%a 2>nul
    if %errorlevel% equ 0 (
        echo ✅ Port 3000 freed
    )
)

echo.
echo Killing processes on port 4000...
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :4000 ^| findstr LISTENING') do (
    taskkill /F /PID %%a 2>nul
    if %errorlevel% equ 0 (
        echo ✅ Port 4000 freed
    )
)

echo.
echo ==================================================
echo ✅ Cleanup Complete
echo ==================================================
timeout /t 2 /nobreak > nul
