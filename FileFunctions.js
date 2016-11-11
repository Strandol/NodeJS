'use strict';

var attr = require('winattr');
var fs = require('fs');
var path = require('path');
var read = require('read');
var dir = require('mkdirp');
var readline = require('readline');

var attrBool = false;
var maskBool = false;

function FilterByFileAttributes(filterAttributes, file) {
    var negativeAttr = false;
    var attrs = attr.getSync(file);
    for(var i = 0; i < filterAttributes.length; i++) {
        if (filterAttributes[i] == '-') {
            negativeAttr = true;
            continue;
        }

        if (negativeAttr == true) {
            switch (filterAttributes[i]) {
                case 'A':
                    if (attrs['archive'] == false) {
                        attrBool = true;
                    } else {
                        attrBool = false;
                    }
                    break;
                case 'H':
                    if (attrs['hidden'] == false) {
                        attrBool = true;
                    } else {
                        attrBool = false;
                    }
                    break;
                case 'R':
                    if (attrs['readonly'] == false) {
                        attrBool = true;
                    } else {
                        attrBool = false;
                    }
                    break;
                case 'S':
                    if (attrs['system'] == false) {
                        attrBool = true;
                    } else {
                        attrBool = false;
                    }
                    break;

            }
        } else {
            switch (filterAttributes[i]) {
                case 'A':
                    if (attrs['archive'] == true) {
                        attrBool = true;
                    } else {
                        attrBool = false;
                    }
                    break;
                case 'H':
                    if (attrs['hidden'] == true) {
                        attrBool = true;
                    } else {
                        attrBool = false;
                    }
                    break;
                case 'R':
                    if (attrs['readonly'] == true) {
                        attrBool = true;
                    } else {
                        attrBool = false;
                    }
                    break;
                case 'S':
                    if (attrs['system'] == true) {
                        attrBool = true;
                    } else {
                        attrBool = false;
                    }
                    break;

            }
        }

        negativeAttr = false;
        if(attrBool == true){
            break;
        }
    }

    if(attrBool == true) {
        return true;
    } else {
        return false;
    }
}

function Move(envVariable, pathFrom, pathTo, mask, attributes){
    fs.readdir(pathFrom + '\\', function (err, files) {
        if (err) {
            console.log("Указана несуществующая папка!");
            process.exit(1);
        }
        files.forEach(function (file) {

            var filePath = pathFrom + '/' + file;

            fs.stat(filePath, function (err, stat) {
                if (err) return err;

                if (stat.isDirectory()) {
                    fs.stat(pathTo + '/' + file, function (err, stat) {
                        if(err != null) { // ПАПКА НЕ СУЩЕСТВУЕТ
                            dir(pathTo + '/' + file, function (err) {
                                if (err) return err;
                            });
                        }
                    });
                    Move(envVariable, filePath, pathTo + '/' + file, mask, attributes, function (err) {
                        if (err) return console.log(err);
                    });
                } else {
                    if (stat.isFile()) {
                        maskBool = false;
                        attrBool = false;
                        if (mask.length != 0) {
                            for (var i = 0; i < mask.length; i++) {
                                //if (path.extname(file) == mask[i]) {
                                if( filePath.indexOf(mask[i]) + 1){
                                    maskBool = true;
                                    break;
                                }
                            }
                        } else {
                            maskBool = true;
                        }

                        if(attributes.length != 0) {
                            if (FilterByFileAttributes(attributes, filePath) == true) {
                                attrBool = true;
                            } else {
                                attrBool = false;
                            }
                        } else {
                            attrBool = true;
                        }

                        if (maskBool == true && attrBool == true) {
                            fs.stat(pathTo + '/' + file, function(err, stat) {
                                if(err != null){
                                    console.log('');
                                }
                                if (envVariable == "/-Y") {
                                    if (err == null) { // ТАКОЙ ФАЙЛ УЖЕ ЕСТЬ
                                        var answer = null;
                                        console.log('Файл ' + file + " уже есть в каталоге что вы указали для назначения! Заменить файл?(Y/N)");
                                        read({ prompt : '' }, function (err, answer) {
                                            if(answer == 'Y') {
                                                fs.rename(pathFrom + '\\' + file, pathTo + '\\' + file);
                                            }
                                            process.stdin.destroy();
                                        })
                                    } else {
                                        fs.rename(pathFrom + '\\' + file, pathTo + '\\' + file);
                                    }
                                } else {
                                    fs.rename(pathFrom + '\\' + file, pathTo + '\\' + file);
                                }
                            });
                        }
                    }
                }
            });
        })
    })
    return 0;
}

module.exports.MoveFunction = Move;

