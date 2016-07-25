'use strict';

var decryption = (function() {

  function decode(str, shift, callback) {
    if (shift <= 25 && shift >= -25) {
      var decodedText = caesarShift(str, shift);
      callback(null, {
        'status': 'ok',
        'text': decodedText
      });
    } else {
      callback({
        'status': 'error',
        'error': 'Shift is out of bound'
      });
    }
  }

  function caesarShift(str, shift) {
    var output = '';
    for (var i = 0; i < str.length; i++) {
      var c = str.charCodeAt(i);
      if (c >= 65 && c <= 90) {
        output += String.fromCharCode(mod(c - 65 - shift, 26) + 65);
      } else if (c >= 97 && c <= 122) {
        output += String.fromCharCode(mod(c - 97 - shift, 26) + 97);
      } else {
        output += str.charAt(i);
      }
    }
    return output;
  }

  function mod(x, y) {
    return (x % y + y) % y;
  }

  return {
    decode: decode,
    caesarShift: caesarShift
  }

})();

module.exports = decryption;
