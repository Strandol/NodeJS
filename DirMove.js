'use strict';

function ShowHelp() {
    console.log("\n");
    console.log("Перемещение файлов и папок.");
    console.log("\n");
    console.log("DirMove [/Y | /-Y] [диск:][путь] назначение [/A[:]аттрибуты] [+источник[...]]");
    console.log("\n");
    console.log("  [диск:][путь]   Определяет местоположение папки содержимое которой требуется перенести.");
    console.log("  Назначение      Определяет новое местоположение каталога.");
    console.log("\n");
    console.log("  /Y              Перезаписывать существующие файлы назначения без предупреждения.");
    console.log("  /-Y             Предупреждать при перезаписи существующего файла назначения.");
    console.log("\n");
    console.log("  Аттрибуты       R            Файлы только для чтения.");
    console.log("                  H            Скрытые файлы.");
    console.log("                  A            Архивные.");
    console.log("                  S            Системные файлы.");
    console.log("                  -            Префикс '-' имеет значение НЕ.");
    console.log("\n");
    console.log("Ключ /Y можно установить через переменную среды COPYCMD.");
    console.log("Ключ /-Y переопределяет такую установку");
    //console.log("По умолчанию замена файлов проходит без подтверждения пользователя.");
    console.log("\n");
}

function GetEnvVariable(Argv) {
    switch(Argv){
        case '/Y':
            COPYCMD = '/Y';
            break;
        case '/-Y':
            COPYCMD = '/-Y';
            break;
        default:
            process.argv[2] = '/Y';
            COPYCMD = '/Y';
    }
}

function ShowError(errorNumber) {
    switch (errorNumber){
        case 1:
            console.log('Путь откуда перемещать файлы - не существует!');
            break;
        case 2:
            console.log('Путь куда перемещать файлы - не существует!');
            break;
    }

    process.exit(errorNumber);
}

if (process.argv[2] == 'help' || process.argv[2] == '/?'){
    ShowHelp();
    process.exit(0);
}

var COPYCMD = '/Y';
var pathFrom = null;
var pathTo = null;
var attributes = [];
var masks = [];
for(var i = 2; i < process.argv.length; i++){
    if(process.argv[i].startsWith('/Y') || process.argv[i].startsWith('/-Y')){
        GetEnvVariable(process.argv[2]);
        continue;
    }

    if(pathTo == null) {
        if (process.argv[i] && process.argv[i].search(/:\\/) && !process.argv[i].startsWith('/A') && !process.argv[i].startsWith('*') && !process.argv[i].startsWith('?')) {
            if (pathFrom == null) {
                pathFrom = process.argv[i];
                continue;
            } else {
                pathTo = process.argv[i];
                continue;
            }
        }
    }

    if (process.argv[i].substr(1, 1) === 'A') {
        var str = process.argv[i].replace(":", "");
        for (var k = 2, a = 0; k < str.length; a++, k++) {
            attributes.push(str[k]);
        }
    } else if ((process.argv[i].substr(0, 1) === '?') || (process.argv[i].substr(0, 1) === '*')) {
        //str = process.argv[i].split('*');
        str = process.argv[i].replace("?", ".");
        if (str == process.argv[i]) {
            //str = process.argv[i].split('?');
            str = process.argv[i].replace("*", ".*");
        }
        //str.shift();
        masks.push(str);
    }

}

if(pathFrom == null){
    ShowError(1);
}

if(pathTo == null){
    ShowError(2);
}
var FindFile = require('./FileFunctions');
FindFile.MoveFunction(COPYCMD, pathFrom, pathTo, masks, attributes);
return 0;
