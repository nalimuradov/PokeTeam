var request = require('request');
var async = require('async');

function callType(t, callback){

	getType = {
		method: 'GET',
		url: 'https://pokeapi.co/api/v2/type/' + t + '/'
	};

	request(getType, function(err, resp, body){
		var typeArr = [];
		if (!err){
			var body = JSON.parse(body);
			for (i = 0; i < body.pokemon.length; i++){
				typeArr[i] = body.pokemon[i].pokemon.name;
			}
			callback(typeArr);
		}
	})	
}

function callRegion(r, callback){

	getRegion = {
		method: 'GET',
		url: 'https://pokeapi.co/api/v2/pokedex/' + r + '/'
	};

	request(getRegion, function(err, resp, body){
		var regionArr = [];
		if (!err){
			var body = JSON.parse(body);
			for (i = 0; i < body.pokemon_entries.length; i++){
				regionArr[i] = body.pokemon_entries[i].pokemon_species.name;
			}
			callback(regionArr);
		}
	})
}

var finalArray = [];

function typeReg(t, r, callback){
	callRegion(r, function(regionArr){
		callType(t, function(typeArr){

			var totalArray = [];

			var type1 = [];
			var reg1 = [];
			type1 = typeArr;
			reg1 = regionArr;

			for (i = 0; i < typeArr.length; i++){
				for (j = 0; j < regionArr.length; j++){
					if (typeArr[i] == regionArr[j]){
						totalArray.push(typeArr[i]);
					}
				}
			}
			finalArray = totalArray;
			callback();
		})
	});
}

// output to screen here
function output(){
	console.log(finalArray);
}

var t, r;
module.exports = {
	params: function(arg1, arg2){
		t = arg1;
		r = arg2;
	},

	out: function(){
		typeReg(t, r, output);
	}
};
