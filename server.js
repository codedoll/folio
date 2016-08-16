var express = require('express');
var app = express();
var port = process.env.PORT || 4000

app.use(express.static('public'));

app.get('/', function (req, res) {

});

app.listen(port, function() {
    console.log('listening');
})