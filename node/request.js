var request = require('request');

var getHoennDex = {
	method: 'GET',
	url: 'https://pokeapi.co/api/v2/pokedex/hoenn/'
};

var getFireTypes = {
	method: 'GET',
	url: 'https://pokeapi.co/api/v2/type/fire/'
};

function fireType(callback){
	request(getFireTypes, function(err, resp, body){
		var fireTypes = [];
		if (!err){
			var fire = JSON.parse(body);
			for (i = 0; i < fire.pokemon.length; i++){
				fireTypes[i] = fire.pokemon[i].pokemon.name;
			}
			callback(fireTypes);
		}
	})	
}

function hoenn(callback){
	request(getHoennDex, function(err, resp, body){
		var hoennDex = [];
		if (!err){
			var hoenn = JSON.parse(body);
			for (i = 0; i < hoenn.pokemon_entries.length; i++){
				hoennDex[i] = hoenn.pokemon_entries[i].pokemon_species.name;
			}
			callback(hoennDex);
		}
	});
}

var storeHoenn = [];
var storeFire = [];

hoenn(function(hoennDex){
	fireType(function(fireTypes){
		var totalArray = [];
		storeFire = fireTypes;
		storeHoenn = hoennDex;

		for (i = 0; i < storeFire.length; i++){
			for (j = 0; j < storeHoenn.length; j++){
				if (storeFire[i] == storeHoenn[j]){
					totalArray.push(storeFire[i]);
				}
			}
		}
		console.log(totalArray);
	})
});






// get array of all hoenn pokemon
// get array of all fire pokemon