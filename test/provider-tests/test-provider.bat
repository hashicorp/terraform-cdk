@echo off
setlocal EnableExtensions
setlocal EnableDelayedExpansion

set scriptdir=%~dp0

call node %scriptdir%\generate-provider-test.js %~1
call %scriptdir%\..\run-against-dist.bat npx jest ".\providers\%~1"
