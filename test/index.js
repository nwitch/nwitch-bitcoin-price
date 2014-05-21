var nwitchBitcoinPrice = require('../');
var test = require('tape');
var isFunction = require('lodash.isfunction');
var Stream = require('readable-stream').PassThrough;
var irc = require('slate-irc');

test('exports a function which returns a function when called', function(t) {
  t.plan(2);
  t.ok(isFunction(nwitchBitcoinPrice));
  t.ok(isFunction(nwitchBitcoinPrice()));
});

test('replies when commanded', function(t) {
  t.plan(2);
  var stream = new Stream();
  var client = irc(stream);
  client.use(nwitchBitcoinPrice());

  var n = 0;
  stream.on('data', function(chunk) {
    switch (n++) {
      case 0:
        t.equal(chunk, 'PRIVMSG #nwitch :!bitcoin\r\n');
        break;
      case 1:
        t.ok(/Last Bitcoin price: \$/.test(chunk));
        break;
    }
  });

  stream.write('PRIVMSG #nwitch :!bitcoin\r\n');
});