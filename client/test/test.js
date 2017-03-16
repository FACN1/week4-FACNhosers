
QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

QUnit.test('test, addEventListener for keyup in the searchbox', function (assert){
  var sBox = document.querySelector('#sBox');
  var keypressed=false;
  assert.deepEqual(keypressed, false, 'check initially false')

  eventListenerModule.searchBox(function(){
    console.log('pressed')
    keypressed=true;
  })

  var keyboardEvent = document.createEvent('KeyboardEvent');

  keyboardEvent.initKeyboardEvent('keyup');

  sBox.dispatchEvent(keyboardEvent);

  assert.equal(keypressed, true, 'check true after press')


} )
