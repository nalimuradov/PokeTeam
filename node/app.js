var http = require('http');
var express = require('express');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.htm');
});

app.listen(port, () => console.log('listening'));
