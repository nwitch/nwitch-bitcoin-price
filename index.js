var behest = require('behest');
var Bitstamp = require('bitstamp');
var bitstamp = new Bitstamp();

function plugin() {
  return function(irc) {
    irc.on('message', function(evt) {
      var from = evt.from;
      var to = evt.to;
      var message = evt.message;

      if (!behest.isValid(message)) {
        return;
      }

      var command = behest(message).command;
      if (command === 'bitcoin') {
        var destination = to.charAt(0) === '#' ? to : from;

        bitstamp.ticker(function(error, ticker) {
          if (error) {
            irc.send(destination, 'Error getting Bitcoin price.');
            return;
          }

          irc.send(destination, 'Last Bitcoin price: $' + ticker.last);
        });
      }
    });
  };
}

module.exports = plugin;