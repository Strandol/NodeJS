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
ECHO �⨫�� ��� ��६�饭�� 䠩���.
ECHO ����ᠫ �⨫��� ��㤥�� ��㯯� ��-15-2 ��������� ����.
ECHO ��稭��� ���஢���� �⨫���.
PAUSE
CLS

ECHO Test �1:
ECHO ��஥� help �⨫���
ECHO node DirMove.js /?
PAUSE
node DirMove.js /?
IF ERRORLEVEL 0 ECHO TEST OK!
PAUSE
CLS

ECHO Test �2:
ECHO ������稬 ����� ���筨� - ���ன �� �������
ECHO node DirMove.js DirMove G:\ E:\progr\NodeJS\MyProjects\Kovalenko(Lab2)\TEST_2\
PAUSE
node DirMove.js G:\ E:\progr\NodeJS\MyProjects\Kovalenko(Lab2)\TEST_2\
IF ERRORLEVEL 1 ECHO TEST OK!
PAUSE
CLS

ECHO Test �3:
ECHO node DirMove.js /Y E:\progr\NodeJS\MyProjects\Kovalenko(Lab2)\TEST_3\SourceFolder\ E:\progr\NodeJS\MyProjects\Kovalenko(Lab2)\TEST_3\TargetFolder\
PAUSE
node DirMove.js /Y E:\progr\NodeJS\MyProjects\Kovalenko(Lab2)\TEST_3\SourceFolder\ E:\progr\NodeJS\MyProjects\Kovalenko(Lab2)\TEST_3\TargetFolder\
CLS
IF ERRORLEVEL 0 ECHO TEST OK!
IF NOT ERRORLEVEL 0 ECHO TEST WRONG!
PAUSE
CLS

ECHO Test �4:
ECHO ��⠭���� ��६����� ���㦥��� � ����襬 ���� ��� 䠩��� ?rar
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

ECHO Test �5:
ECHO ��⠭���� ���ਡ�� /A:R
ECHO node DirMove.js /-Y E:\progr\NodeJS\MyProjects\Kovalenko(Lab2)\TEST_5\SourceFolder\ E:\progr\NodeJS\MyProjects\Kovalenko(Lab2)\TEST_5\TargetFolder\ /A:R
PAUSE
node DirMove.js /-Y E:\progr\NodeJS\MyProjects\Kovalenko(Lab2)\TEST_5\SourceFolder\ E:\progr\NodeJS\MyProjects\Kovalenko(Lab2)\TEST_5\TargetFolder\ /A:R
IF ERRORLEVEL 0 ECHO TEST OK!
IF NOT ERRORLEVEL 0 ECHO TEST WRONG!
PAUSE
CLS

ECHO Test �6:
ECHO ��⠭���� ���ਡ�� � ���� �����६����
PAUSE
ECHO node DirMove.js /-Y E:\progr\NodeJS\MyProjects\Kovalenko(Lab2)\TEST_6\SourceFolder\ E:\progr\NodeJS\MyProjects\Kovalenko(Lab2)\TEST_6\TargetFolder\ /A:H-R ?rar ?txt
PAUSE
node DirMove.js /-Y E:\progr\NodeJS\MyProjects\Kovalenko(Lab2)\TEST_6\SourceFolder\ E:\progr\NodeJS\MyProjects\Kovalenko(Lab2)\TEST_6\TargetFolder\ /A:H-R ?rar ?txt
CLS
IF ERRORLEVEL 0 ECHO TEST OK!
IF NOT ERRORLEVEL 0 ECHO TEST WRONG!
PAUSE
CLS

ECHO ���� ��������!
PAUSE



