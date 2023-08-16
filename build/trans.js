"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isZdjd = exports.zdjd2human = exports.human2zdjd = void 0;
var js_base64_1 = require("js-base64");
var b64 = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/=';
var leftEye = ['o', '0', 'O', 'Ö'];
var mouse = ['w', 'v', '\.', '_'];
var rightEye = ['o', '0', 'O', 'Ö'];
var table = [];
var separator = ' ';
var makeTable = function () {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            for (var k = 0; k < 4; k++) {
                table.push("".concat(leftEye[i]).concat(mouse[j]).concat(rightEye[k]));
            }
        }
    }
};
makeTable();
var addCalls = function (t) {
    return t;
};
var human2zdjd = function (t) {
    t = js_base64_1.Base64.encode(t);
    var len = t.length;
    var arr = [];
    for (var i = 0; i < len; i++) {
        var c = t.charAt(i);
        var n = b64.indexOf(c);
        arr.push(table[n]);
    }
    var data = arr.join(separator);
    return addCalls(data);
};
exports.human2zdjd = human2zdjd;
var zdjd2human = function (t) {
    var arr = t.split(separator);
    var len = arr.length;
    var resultArr = [];
    for (var i = 0; i < len; i++) {
        var c = arr[i];
        if (!c) {
            continue;
        }
        var n = table.indexOf(c);
        if (n < 0) {
            throw new Error('Invalid zdjd code');
        }
        resultArr.push(b64.charAt(n));
    }
    t = resultArr.join('');
    t = js_base64_1.Base64.decode(t);
    return t;
};
exports.zdjd2human = zdjd2human;
var isZdjd = function (t) {
    try {
        (0, exports.zdjd2human)(t);
        return true;
    }
    catch (e) {
        return false;
    }
};
exports.isZdjd = isZdjd;
//# sourceMappingURL=trans.js.map