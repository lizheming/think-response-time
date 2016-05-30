var connect = require('http-connect');
var responseTime = require('response-time');

module.export = function() {
  var args = arguments;
  return function(http) {
    return new Promise(function(resolve, reject) {
      var app = new connect(http);
      var response = responseTime.apply(responseTime, args);
      app.use(response);
    });
  }
}
