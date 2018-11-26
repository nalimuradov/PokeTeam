var express = require('express');
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.htm');
});

app.post('/', urlencodedParser, function(req, res){
	console.log(req.body.type);
	res.sendFile(__dirname + '/index.htm');
});

app.listen(port, () => console.log('listening'));
