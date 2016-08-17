var express = require('express');
var app = express();
var port = process.env.PORT || 4000
var sanitizeHtml = require('sanitize-html');

app.use(express.static(__dirname + '/public'));

var request = require('request');

app.use(express.static('public'));


app.get('/1', function(req, res){
		request({
		    url: 'http://codedoll.com/api/get_recent_posts/',
		    json: true
		}, function (error, response, body) {

		    if (!error && response.statusCode === 200) {
		        console.log(body) // Print the json response
		        res.send(body)
		    }
		});
})
 
// var html = "<strong>hello world</strong>";
// console.log(sanitizeHtml(html));
// console.log(sanitizeHtml("1 <img src=x onerror=alert('img') />"));
// console.log(sanitizeHtml("2 console.log('hello world')"));
// console.log(sanitizeHtml("4 <script>alert('hello world')</script>"));

app.listen(port, function() {
    console.log('listening');
})