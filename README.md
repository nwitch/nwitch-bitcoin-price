# nwitch-bitcoin-price

[![Build Status](https://travis-ci.org/nwitch/nwitch-bitcoin-price.svg)](https://travis-ci.org/nwitch/nwitch-bitcoin-price)
[![Dependency Status](https://gemnasium.com/nwitch/nwitch-bitcoin-price.png)](https://gemnasium.com/nwitch/nwitch-bitcoin-price)

nwitch plugin for getting bitstamp's last sell price.

## Installation

``` bash
$ npm install --save nwitch-bitcoin-price
```

## Usage

``` toml
[plugins]
nwitch-bitcoin-price = true
```

``` irc
15:44 <KenanY> !bitcoin
15:44 <nwitch> Last Bitcoin price: $636.36
```