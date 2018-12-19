const url = 'https://bulbapedia.bulbagarden.net/wiki/List_of_fully_evolved_Pok%C3%A9mon_by_base_stats';
const rp = require('request-promise');
const ch = require('cheerio');
var fs = require('fs');

var x = [];

rp(url).then(function(html){

	for (i = 0; i < 533; i++){
		var out = ch('[id="mw-content-text"] > table[class="sortable roundy"] > tbody > tr > td[class="r"] > b', html)[i].children[0].data;
		x.push(out);
		// get unique values
		// put into text file
	}

	console.log(x);
	var u = x.filter(onlyUnique);

	fs.writeFile('evol.txt', u, function(err, data){

	});
	
}).catch(function(err){
	console.log(err);
});

function onlyUnique(value, index, self){
	return self.indexOf(value) === index;
}

//*[@id="mw-content-text"]/table[1]/tbody/tr[1]