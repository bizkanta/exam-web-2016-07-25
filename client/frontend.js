'use strict';

(function(document, Xhr_request){

  var request = new Xhr_request();

  var encryptedText = document.querySelector('textarea');
  var shift = document.querySelector('#number');
  var button = document.querySelector('button');
  var newText = document.querySelector('p');
  button.addEventListener('click', decodeText);

  function decodeText() {
    var decodedText = {
      text: encryptedText.value,
      shift: shift.value
    }
    loading();
    request.sendTextToServer(decodedText, displayDecodedText)
  }

  function displayDecodedText(text) {
    if (text.text) {
      newText.innerHTML = text.text;
    } else {
      alert('Shift is out of bound');
      newText.innerHTML = text.error;
    }
  };

  function loading(){
    newText.innerHTML = 'Loading...';
  }

})(document, Xhr_request)
