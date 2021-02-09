@echo off
setlocal EnableExtensions
setlocal EnableDelayedExpansion
set buildTarget=%~1
cd /D %~dp0

for /d %%d in ("test-!buildTarget!*") do (
    if exist "%%d\" (
        if exist "%%d\test.js" (
            echo --------------------------------------------------------------------
            echo %%d
            echo --------------------------------------------------------------------
            call node "%%d\test.js"
            IF !ERRORLEVEL! NEQ 0 exit /B 1
        )
    )
)