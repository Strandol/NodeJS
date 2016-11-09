function ShowHelp() {
    console.log("Утилита для перемещения файлов и подпапок определенной папки.");
    console.log("[/Y | /-Y] [диск:][путь] назначение [/A[:]аттрибуты] [+источник[...]]");
    console.log("  [диск:][путь]   Определяет местоположение папки содержимое которой требуется перенести.");
    console.log("  Назначение      Определяет новое местоположение каталога.");
    console.log("  /Y              Перезаписывать существующие файлы без подтверждения пользователя.");
    console.log("  /-Y             Перезаписывать существующие файлы с подтверждением пользователя.");
    console.log("  Аттрибуты       R            Файлы только для чтения.");
    console.log("                  H            Скрытые файлы.");
    console.log("                  D            Каталоги.");
    console.log("                  -            Префикс '-' имеет значение НЕ.");
    console.log("Ключ /Y можно установить через переменную среды COPYCMD.");
    console.log("Ключ /-Y переопределяет такую установку");
    console.log("По умолчанию замена файлов проходит без подтверждения пользователя.");
}

var FindFile = require('./FindFile');
if(process.argv[2] == 'help'){
    ShowHelp();
}

var EnvVariable = '/-Y';
var pathFrom;
var pathTo;
var attributes = [];
var mask = [];

if(process.argv[2] == '/Y') {
    EnvVariable = '/Y';
}

if(process.argv[2] == '-/Y'){
    EnvVariable = '/-Y';
}

//process.argv[3] = "E:\progr";
if(process.argv[3] && process.argv[3].search(/:\\/)){
    pathFrom = process.argv[3];
}else{
    console.log("Введите путь откуда производить перемещение!!!");
    process.exit(1);
}


//process.argv[4] = "E:\progr\TEST";
if(process.argv[4] && process.argv[4].search(/:\\/)){
    pathTo = process.argv[4];
}else{
    console.log("Введите путь куда производить перемещение!!!");
    process.exit(1);
}

if(process.argv[5]) {
    if (process.argv[5].substr(1, 1) == 'A') {
        var str = process.argv[5].replace(":", "");
        for (var i = 2, a = 0; i < str.length; a++, i++) {
            attributes.push(str[i]);
        }
    } else {
        var count = 5;
        while(process.argv[count]){
            str = process.argv[count].split('*');
            if(str == process.argv[count]){
                str = process.argv[count].split('?');
            }
            str.shift();
            mask.push(str);
            count++;
        }
    }
}

console.log("Проверка успешно завершена!");
process.exit(0);

