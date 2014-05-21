# nwitch-bitcoin-price

[![Build Status](https://travis-ci.org/nwitch/nwitch-bitcoin-price.svg)](https://travis-ci.org/nwitch/nwitch-bitcoin-price)
[![Dependency Status](https://gemnasium.com/nwitch/nwitch-bitcoin-price.png)](https://gemnasium.com/nwitch/nwitch-bitcoin-price)

[nwitch][] (and [slate-irc][]) plugin for getting bitstamp's last sell price.

``` irc
15:44 <KenanY> !bitcoin
15:44 <nwitch> Last Bitcoin price: $636.36
```

## Example

As a [nwitch][] plugin (using `config.toml`):

``` toml
[plugins]
nwitch-bitcoin-price = true
```

Or through [nwitch][]'s API:

``` javascript
var Nwitch = require('nwitch');
var nwitchBitcoinPrice = require('nwitch-bitcoin-price');

var nwitch = new Nwitch({
  irc: {
    address: 'irc.freenode.org',
    port: 6667
  }
});

nwitch.use(nwitchBitcoinPrice());
```

Technically, all [nwitch][] plugins are just [slate-irc][] plugins, so you could
also use this as a [slate-irc][] plugin:

``` javascript
var net = require('net');
var irc = require('slate-irc');
var nwitchBitcoinPrice = require('nwitch-bitcoin-price');

var stream = net.connect({
  port: 6667,
  host: 'irc.freenode.org'
});

var client = irc(stream);
client.use(nwitchBitcoinPrice());
```

## Installation

``` bash
$ npm install --save nwitch-bitcoin-price
```

## API

``` javascript
var nwitchBitcoinPrice = require('nwitch-bitcoin-price');
```

### nwitchBitcoinPrice()

Returns a function that accepts an instance of [slate-irc][].

   [nwitch]: https://github.com/KenanY/nwitch
   [slate-irc]: https://github.com/slate/slate-irc