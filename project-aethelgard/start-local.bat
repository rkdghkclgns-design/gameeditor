@echo off
chcp 65001 > nul
echo ==================================================
echo 🚀 PROJECT AETHELGARD: QUICK START (No Docker)
echo ==================================================
echo Starting Server and Client...
echo ==================================================

cd /d "%~dp0"

echo.
echo [1/4] 🛑 Cleaning up existing processes...
echo.
taskkill /F /IM node.exe 2>nul
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :3000 ^| findstr LISTENING') do taskkill /F /PID %%a 2>nul
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :4000 ^| findstr LISTENING') do taskkill /F /PID %%a 2>nul
timeout /t 1 /nobreak > nul

echo.
echo [2/4] 📦 Installing dependencies...
echo.

cd server
if not exist "node_modules" (
    echo Installing server dependencies...
    call npm install
)
cd ..

cd client
if not exist "node_modules" (
    echo Installing client dependencies...
    call npm install
)
cd ..

echo.
echo [3/4] 🚀 Starting Backend Server (Port 4000)...
echo.
start "AETHELGARD SERVER" cmd /k "cd /d %~dp0server && npm start"

timeout /t 3 /nobreak > nul

echo.
echo [4/4] 🌐 Starting Frontend Client (Port 3000)...
echo.
start "AETHELGARD CLIENT" cmd /k "cd /d %~dp0client && npm run dev"

echo.
echo ==================================================
echo ✅ System Started!
echo ==================================================
echo.
echo 🌐 Frontend: http://localhost:3000
echo 🔧 Backend:  http://localhost:4000
echo 📊 Control:  http://localhost:3000/control
echo.
echo Press any key to open browser...
pause > nul

start http://localhost:3000

exit
