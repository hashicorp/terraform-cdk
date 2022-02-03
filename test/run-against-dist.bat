@echo off
setlocal EnableExtensions
setlocal EnableDelayedExpansion

set scriptdir=%~dp0

set CDKTF_DIST=%scriptdir%\..\dist
set cwd=%cd%

cd /D %CDKTF_DIST%

rem verify this is indeed a "dist" directory
if not exist "js" if not exist "python" if not exist "java" if not exist "dotnet" if not exist "go" (
  echo "ERROR: unable to find the subdirectories 'js', 'python', 'java', 'dotnet' and 'go' which should be in the 'dist' directory"
  echo "Did you run 'yarn run package' to create the 'dist' directory?"
  exit /B 1
)

rem install the CLI from dist/js in a temporary area and add to path
echo "Extracting CLI from 'dist'..."
for /f "tokens=2 delims==" %%I in ('wmic os get localdatetime /format:list') do set datetime=%%I
set datetime=%datetime:~0,18%
set staging=%tmp%\%datetime%
mkdir %staging%
cd /D %staging%
call npm init -y >nul 2>&1
IF %ERRORLEVEL% NEQ 0 exit /B 1
set expanded_list=
for /f %%f in ('dir /b /s "%CDKTF_DIST%\js\*.tgz" ^| sort /r') do call set expanded_list=%%expanded_list%% "%%f"
@echo on
call npm install %expanded_list%
@echo off
IF %ERRORLEVEL% NEQ 0 exit /B 1
set PATH=%staging%\node_modules\.bin;%PATH%

rem restore working directory
cd /D %cwd%
echo %~1
call %~1