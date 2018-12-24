var express = require('express');
var bodyParser = require('body-parser');
var api = require('./api.js');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render('index');
});

app.post('/', urlencodedParser, function(req, res){
	api.params(req.body.game);
	api.out();
	res.render('res');
});

app.listen(port, () => console.log('listening'));


function no(x){
	console.log(x);
}
