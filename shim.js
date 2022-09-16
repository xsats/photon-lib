// since new TCP/TLS module for React Native has different api from what is expected from nodejs/net & nodejs/tls
// (or from old module) we wrap this module in adapter:
global.net = require('./src/blue_modules/net');
global.tls = require('./src/blue_modules/tls');