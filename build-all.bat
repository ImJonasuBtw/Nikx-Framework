@echo off
echo -------------------------
echo 1. Entering nikx-compiler
echo -------------------------
cd nikx-compiler

echo Installing dependencies...
call npm install

echo Running 'npm run generate'...
call npm run generate

echo Running 'npm run build'...
call npm run build

echo ----------------------------
echo 2. Entering nikx-vite-plugin
echo ----------------------------
cd ..\nikx-vite-plugin

echo Installing dependencies...
call npm install

echo Building...
call npm run build

echo ----------------------
echo 3. Entering nikx-application
echo ----------------------
cd ..\nikx-application

echo Installing dependencies...
call npm install

echo Building...
call npm run build

echo ----------------------
echo Done!
echo ----------------------
pause
