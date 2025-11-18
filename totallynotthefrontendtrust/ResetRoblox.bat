@echo off
echo Resetting Roblox input, camera, and VR settings...
taskkill /f /im RobloxPlayerBeta.exe >nul 2>&1
taskkill /f /im RobloxStudioBeta.exe >nul 2>&1

REM Delete LocalAppData Roblox folders
rmdir /s /q "%localappdata%\Roblox\ClientSettings"
rmdir /s /q "%localappdata%\Roblox\GlobalSettings_13"
rmdir /s /q "%localappdata%\Roblox\Versions"

REM Delete Roblox registry key
reg delete "HKEY_CURRENT_USER\Software\Roblox" /f

echo Roblox reset complete.
pause