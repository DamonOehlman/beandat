var path = require('path');

// production config
exports.production = {
  path: '/var/dat'
};

// dev config
exports.dev = {
  path: path.resolve('.dat')
};
