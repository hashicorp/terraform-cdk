@echo off
setlocal EnableExtensions

set scriptdir=%~dp0

set CDKTF_DIST="%scriptdir%\..\dist"
set cwd=%cd%

cd /D %CDKTF_DIST%

rem verify this is indeed a "dist" directory
if not exist "js" if not exist "python" (
  echo "ERROR: unable to find the subdirectories 'js' and 'python' which should be in the 'dist' directory"
  echo "Did you run 'yarn run package' to create the 'dist' directory?"
  exit /B 1
)

rem install the CLI from dist/js in a temporary area and add to path
echo "Extracting CLI from 'dist'..."
set staging=%tmp%\%random%%time%
cd /D %staging%
npm init -y >nul 2>&1
IF %ERRORLEVEL% NEQ 0 exit /B 1
npm install "%CDKTF_DIST%\js\*.tgz"
IF %ERRORLEVEL% NEQ 0 exit /B 1
set PATH=%staging%\node_modules\.bin;%PATH%

rem restore working directory
cd /D %cwd%
%1 %2