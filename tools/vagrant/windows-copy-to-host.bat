@echo off
setlocal EnableExtensions
setlocal EnableDelayedExpansion

echo d | xcopy C:\Users\vagrant\terraform-cdk C:\Users\vagrant\terraform-cdk-origin /E /d /s /y
