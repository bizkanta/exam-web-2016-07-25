'use strict';

var decryption = (function(){

  function caesarShift(str, shift, callback) {
    var output = "";
    for (var i = 0; i < str.length; i++) {
      var c = str.charCodeAt(i);
      if (c >= 65 && c <=  90) output += String.fromCharCode(mod(c - 65 - shift, 26) + 65);
      else if (c >= 97 && c <= 122) output += String.fromCharCode(mod(c - 97 - shift, 26) + 97);
      else output += str.charAt(i);
    }
    if (shift <= 26 && shift >= -26) {
      return callback(null, {
        'status': 'ok',
        'text': output
      });
    } else {
      callback({
        'status': 'error',
        'error': 'Shift is out of bound'
      });
    }
  }

  function mod(x, y) {
    return (x % y + y) % y;
  }

  return {
    caesarShift: caesarShift
  }

})();

module.exports = decryption;
