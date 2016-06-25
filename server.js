var express = require('express'),
  // added this line in class
  requestProxy = require('express-request-proxy'),
  port = process.env.PORT || 3000, // can set this to whatever you'd like, default is 3000
  app = express();

// added all of this function in class
var proxyGitHub = function(request, response) { // s in params???
  console.log('Routing GitHub request for ', request.params[0]); // first parameter // comma is alt method of concatenation // next invoke variable
  (requestProxy({
    url: 'https://api.github.com/' + request.params[0],
    headers: {Authorization: 'token ' + process.env.GITHUB_TOKEN} // environment variable instead of github token
  }))(request, response);
};

// added this in class
app.get('/github/*', proxyGitHub);

app.use(express.static('./'));

app.get('*', function(request, response) {
  console.log('New request:', request.url);
  response.sendFile('index.html', { root: '.' });
});

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});
