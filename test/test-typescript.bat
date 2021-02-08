@echo off
setlocal EnableExtensions
setlocal EnableDelayedExpansion

cd /D %~dp0

for /d %%d in ("test-typescript*") do (
    if exist "%%d\" (
        if exist "%%d\test.js" (
            echo --------------------------------------------------------------------
            echo %%d
            echo --------------------------------------------------------------------
            set startTime=%time%
            call node "%%d\test.js"
            echo Start Time: %startTime%
            echo Finish Time: %time%
            IF !ERRORLEVEL! NEQ 0 exit /B 1
        )
    )
)