'use strict';

function Xhr_request(){
  this.url = 'http://127.0.0.1:3000/decode';

  this.sendTextToServer = function(text, callback){
    var encryptedText = JSON.stringify(text);
    this.createRequest('POST', this.url, encryptedText, callback);
  }

  this.createRequest = function(method, url, data, callback){
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader('content-type', 'application/json');
    console.log(data);
    xhr.send(data);
    xhr.onload = function() {
      if (xhr.readyState === xhr.DONE) {
        var response = JSON.parse(xhr.response);
        callback(response);
      };
    };
  }
}
