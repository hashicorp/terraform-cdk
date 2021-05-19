@echo off
echo "Starting sync, press ctrl+C to abort"

:loop
echo "Copying files"
CMD /C %~dp0windows-copy-to-vm.bat
timeout /T 1  > nul

goto loop
echo "Done"