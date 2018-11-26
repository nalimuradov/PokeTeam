var request = require('request');

var reg = 'johto'
var type = 'psychic';


getRegion = {
	method: 'GET',
	url: 'https://pokeapi.co/api/v2/pokedex/' + reg + '/'
};

getType = {
	method: 'GET',
	url: 'https://pokeapi.co/api/v2/type/' + type + '/'
};

function callType(callback){
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

function callRegion(callback){
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

function typeReg(){
	callRegion(function(regionArr){
	callType(function(typeArr){

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
		console.log(totalArray);
	})
});
}

typeReg();
