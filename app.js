var express = require('express')
var app = express()

app.get('/', function(req, res){
	res.send('My first commit for Neddit; a nodejs version of reddit');
})

app.get('/hello', function(req, res){
	res.send('Hello world');
})

app.listen( 3000,function() {
	console.log('Neddit app listening to port 3000');
})