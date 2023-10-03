@echo off 
setlocal
SET /A n= 0
SET /A t= 0
SET /A p= 0
SET /A m= 999
md kr
cd kr
md 001-100
cd 001-100

:loop

goto update
:return1
goto folder

:return2
cd ..
md %fold%

goto show
:return3

goto filesql
:return5

cd %fold%

goto download
:return4



if %n%==%m% (goto end) else (goto loop)

:download
set file="Stamp_%o%.png"
set maxbytesize=1000

    if not exist %file% (
        COLOR 05
        curl -o %file% https://storage.sekai.best/sekai-kr-assets/stamp/stamp%o%_rip/stamp%o%/stamp%o%.png
        COLOR 05
    )
    FOR /F "usebackq" %%A IN ('%file%') DO set /A size=%%~zA
    if %size% LEQ %maxbytesize% (
        color 04
        echo - 2 Skipped And NOT DOWNLOADED
        del "Stamp_%o%.png"
        ) ELSE (
            color 02
            echo - 0 Donwloaded
        )
        
goto return4

:update

SET /A n=n+1
goto return1


:filesql
if %n% GEQ 1 SET o=000%n%
if %n% GEQ 10 SET o=00%n%
if %n% GEQ 100 SET o=0%n%
if %n% GEQ 1000 SET o=%n%
goto return5

:folder
if %n% GEQ 1 set fold=001-100
if %n% GEQ 101 set fold=101-200
if %n% GEQ 201 set fold=201-300
if %n% GEQ 301 set fold=301-400
if %n% GEQ 401 set fold=401-500
if %n% GEQ 501 set fold=501-600
if %n% GEQ 601 set fold=601-700
if %n% GEQ 701 set fold=701-800
if %n% GEQ 801 set fold=801-900
if %n% GEQ 901 set fold=901-1000
if %n% GEQ 1001 set fold=1001-1100
goto return2


:show 
cls

SET /A nop=n*100
SET /A p=nop/m
SET /A p=p
echo =================================
echo -
echo -   Downloading...
echo -
echo - Files: %n% / %m% (%p%)
echo - Folder: ./kr/%fold%/Stamp_%n%.png
echo -
echo =================================
goto return3

:end
cls
echo =================================
echo -
echo -   Download Complete
echo -
echo - Files: %n% / %m% (%p%)
echo - Folder: ----------------
echo -
echo =================================
endlocal
timeout /T 10  