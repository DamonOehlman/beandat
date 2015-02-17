var dat = require('dat');
var quitter = require('quitter')();

var config = require('./config')[process.env.NODE_ENV || 'dev'];
var port = process.env.PORT || 3000;

var db = dat(config.path, config.opts, quitter(handleInit));

function handleInit() {
  db.listen(port, quitter(handleRunning));
}

function handleRunning() {
  console.log('server is running @ http://localhost:' + port + '/');
}
