var express = require('express');
var dex = require('pokedex-promise-v2');
var bodyParser = require('body-parser');

var p = new dex();

var ground = p.getTypeByName('ground', function(res, err){
	if (!err){
		res.pokemon.forEach(pkmn => {
			console.log(pkmn.pokemon.name);
		})
	} else {
		console.log(err);
	}
});

var urlencodedParser = bodyParser.urlencoded({ extended: false });

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.htm');
});

app.post('/', urlencodedParser, function(req, res){
	console.log(req.body);
	res.sendFile(__dirname + '/index.htm');
});

app.listen(port, () => console.log('listening'));
