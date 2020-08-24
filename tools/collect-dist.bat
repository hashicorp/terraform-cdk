@echo off
setlocal EnableExtensions
setlocal EnableDelayedExpansion

cd /D %~dp0\..

rmdir /Q /S dist
mkdir dist

for /f %%f in ('yarn lerna ls -p') do (
    if exist "%%f\dist\" (
        echo "collecting from %%f\dist
        xcopy /E %%f\dist\ dist\
    )
)