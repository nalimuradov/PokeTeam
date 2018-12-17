var request = require('request');
var async = require('async');
var rp = require('request-promise'); 

var reg = 'kanto';
var type = 'bug';

getRegion = {
	method: 'GET',
	url: 'https://pokeapi.co/api/v2/pokedex/' + reg + '/'
};

getType = {
	method: 'GET',
	url: 'https://pokeapi.co/api/v2/type/' + type + '/'
};

var regionArr = [];
var typeArr = [];

rp(getRegion).then(function(data){
	var body = JSON.parse(data).pokemon_entries;
	for (i = 0; i < body.length; i++){
		regionArr.push(body[i].pokemon_species.name);
	}
}).catch(function(err){
	console.log(err);
});

console.log(regionArr);
