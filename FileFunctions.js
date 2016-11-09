var fs = require('fs');
var path = require('path');
var attrBool = false;
var maskBool = false;
function Move(pathFrom, mask, attributes) {
    fs.readdir(pathFrom, function (err, files) {
        if (err) return console.error(err);
        files.forEach(function (file) {
            for (var i = 0; i < mask.length; i++) {
                if (path.extname(file) == extension) {
                    maskBool = true;
                }
            }
            for(i = 0; i < attributes.length; i++){
            //    if(path.) ДОПИСАТЬ
            }
        })
    })
}
