const test = require('tape');
const searchModule = require('../search.js');

var dict = searchModule.dictionaryImport();

test('Check tape is working with a simple passing test', function (t) {
  t.pass('a message to print out on success');
  t.end();
});

test('Check if output is empty', function(assert){

  assert.deepEqual(searchModule.search(' ', dict), [], 'no input returns an empty array');
  assert.end();
});

test('Check if search function works', function(assert){
  var aArray = ["aardvark",
    "abyssinian",
    "adelie penguin",
    "affenpinscher",
    "afghan hound"
  ]
  var aiArray = ['ainu dog',
  'airedale terrier'
  ]
  assert.deepEqual(searchModule.search('z', dict), ['zebra'], 'z returns zebra');
  assert.deepEqual(searchModule.search('a', dict), aArray, 'a returns aArray')
  assert.deepEqual(searchModule.search('ai', dict), aiArray, 'ai returns aiArray')
  assert.end();
})
