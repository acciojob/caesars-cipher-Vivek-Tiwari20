// Your Script here.

function rot13(str) {
var decoded = "";

for (var i = 0; i < str.length; i++) {
var code = str.charCodeAt(i);
if (code >= 65 && code <= 90) {
code = ((code - 65 + 13) % 26) + 65;
}
decoded += String.fromCharCode(code);
}

return decoded;
}



module.exports = rot13;

module.exports = rot13;
