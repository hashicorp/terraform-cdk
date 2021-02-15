@echo off
setlocal EnableExtensions
setlocal EnableDelayedExpansion
cd /D %~dp0

npx jest --runInBand %CD%/test.js