@echo off
setlocal EnableExtensions
setlocal EnableDelayedExpansion

cd /D %~dp0

for /d %%d in ("test-*") do (
    if exist "%%d\" (
        if exist "%%d\test.js" (
            echo --------------------------------------------------------------------
            echo %%d
            echo --------------------------------------------------------------------
            call node "%%d\test.js"
        )
    )
)