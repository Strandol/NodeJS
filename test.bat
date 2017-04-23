@ECHO OFF
mode con:cols=90 lines=36
RD /S/Q TEST_2
RD /S/Q TEST_3
RD /S/Q TEST_4
RD /S/Q TEST_5
RD /S/Q TEST_6
cls
XCOPY ForCopy /E
CLS
ECHO Утилита для перемещения файлов.
ECHO Написал утилиту студент группы ПЗ-15-2 Коваленко Илья.
ECHO Начинаем тестирование утилиты.
PAUSE
CLS

ECHO Test №1:
ECHO Откроем help утилиты
ECHO node DirMove.js /?
PAUSE
node DirMove.js /?
IF ERRORLEVEL 0 ECHO TEST OK!
PAUSE
CLS

ECHO Test №2:
ECHO Обозначим папку источник - которой не существует
ECHO node DirMove.js DirMove G:\ E:\progr\NodeJS\MyProjects\Kovalenko(Lab2)\TEST_2\
PAUSE
node DirMove.js G:\ E:\progr\NodeJS\MyProjects\Kovalenko(Lab2)\TEST_2\
IF ERRORLEVEL 1 ECHO TEST OK!
PAUSE
CLS

ECHO Test №3:
ECHO node DirMove.js /Y E:\progr\NodeJS\MyProjects\Kovalenko(Lab2)\TEST_3\SourceFolder\ E:\progr\NodeJS\MyProjects\Kovalenko(Lab2)\TEST_3\TargetFolder\
PAUSE
node DirMove.js /Y E:\progr\NodeJS\MyProjects\Kovalenko(Lab2)\TEST_3\SourceFolder\ E:\progr\NodeJS\MyProjects\Kovalenko(Lab2)\TEST_3\TargetFolder\
CLS
IF ERRORLEVEL 0 ECHO TEST OK!
IF NOT ERRORLEVEL 0 ECHO TEST WRONG!
PAUSE
CLS

ECHO Test №4:
ECHO Установим переменную окружения и запишем маску для файлов ?rar
PAUSE
ECHO SET COPYCMD=/Y
ECHO node DirMove.js /Y E:\progr\NodeJS\MyProjects\Kovalenko(Lab2)\TEST_4\SourceFolder\ E:\progr\NodeJS\MyProjects\Kovalenko(Lab2)\TEST_4\TargetFolder\ ?rar
PAUSE
SET COPYCMD=/Y
node DirMove.js /Y E:\progr\NodeJS\MyProjects\Kovalenko(Lab2)\TEST_4\SourceFolder\ E:\progr\NodeJS\MyProjects\Kovalenko(Lab2)\TEST_4\TargetFolder\ ?rar
CLS
IF ERRORLEVEL 0 ECHO TEST OK!
IF NOT ERRORLEVEL 0 ECHO TEST WRONG!
PAUSE
CLS

ECHO Test №5:
ECHO Установим аттрибут /A:R
ECHO node DirMove.js /-Y E:\progr\NodeJS\MyProjects\Kovalenko(Lab2)\TEST_5\SourceFolder\ E:\progr\NodeJS\MyProjects\Kovalenko(Lab2)\TEST_5\TargetFolder\ /A:R
PAUSE
node DirMove.js /-Y E:\progr\NodeJS\MyProjects\Kovalenko(Lab2)\TEST_5\SourceFolder\ E:\progr\NodeJS\MyProjects\Kovalenko(Lab2)\TEST_5\TargetFolder\ /A:R
IF ERRORLEVEL 0 ECHO TEST OK!
IF NOT ERRORLEVEL 0 ECHO TEST WRONG!
PAUSE
CLS

ECHO Test №6:
ECHO Установим аттрибут и маску одновременно
PAUSE
ECHO node DirMove.js /-Y E:\progr\NodeJS\MyProjects\Kovalenko(Lab2)\TEST_6\SourceFolder\ E:\progr\NodeJS\MyProjects\Kovalenko(Lab2)\TEST_6\TargetFolder\ /A:H-R ?rar ?txt
PAUSE
node DirMove.js /-Y E:\progr\NodeJS\MyProjects\Kovalenko(Lab2)\TEST_6\SourceFolder\ E:\progr\NodeJS\MyProjects\Kovalenko(Lab2)\TEST_6\TargetFolder\ /A:H-R ?rar ?txt
CLS
IF ERRORLEVEL 0 ECHO TEST OK!
IF NOT ERRORLEVEL 0 ECHO TEST WRONG!
PAUSE
CLS

ECHO ТЕСТ ЗАВЕРШЕН!
PAUSE



