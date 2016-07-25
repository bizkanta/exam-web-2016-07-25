'use strict';

var tape = require('tape');
var decrypt = require('./decryption');

tape('empty string', function (t) {
   t.deepEqual(decrypt.caesarShift('', 5), (''));
   t.end();
});

tape('one single letter', function (t) {
   t.deepEqual(decrypt.caesarShift('f', 5), ('a'));
   t.end();
});

tape('with special char', function (t) {
   t.deepEqual(decrypt.caesarShift('f!', 5), ('a!'));
   t.end();
});

tape('test task', function (t) {
   t.deepEqual(decrypt.caesarShift('oruhp lsvxp groru vlw', 3), ('lorem ipsum dolor sit'));
   t.end();
});
