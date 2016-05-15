var express = require('express'),
app = express(),
path = require('path');

var cacheTime = 86400000;  

app.use('/public', express.static(__dirname + '/public', { maxAge: cacheTime } ));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname + '/about.html'));
});  

var port = process.env.PORT || 8080;
app.listen(port);    