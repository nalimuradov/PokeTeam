(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,a,t){e.exports=t(26)},16:function(e,a,t){},22:function(e,a,t){},26:function(e,a,t){"use strict";t.r(a);var o=t(0),r=t.n(o),n=t(8),i=t.n(n),l=(t(16),t(6)),s=t.n(l),c=t(9),p=t(1),u=t(2),m=t(4),g=t(3),h=t(5),k=function(e){function a(){return Object(p.a)(this,a),Object(m.a)(this,Object(g.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.props.getPkmn},r.a.createElement("div",null,r.a.createElement("select",{id:"regions",name:"regions"},r.a.createElement("option",{value:"Kanto"},"Kanto"),r.a.createElement("option",{value:"Johto"},"Johto"),r.a.createElement("option",{value:"Hoenn"},"Hoenn"),r.a.createElement("option",{value:"Sinnoh"},"Sinnoh"),r.a.createElement("option",{value:"Unova"},"Unova"),r.a.createElement("option",{value:"Kalos"},"Kalos"))),r.a.createElement("input",{type:"checkbox",id:"check",name:"starters",value:"Starters"})," ",r.a.createElement("p",{id:"lab"},"Starters"),r.a.createElement("input",{type:"checkbox",id:"check",name:"legendaries",value:"Legendaries"})," ",r.a.createElement("p",{id:"lab"},"Legendaries"),r.a.createElement("button",null,"Generate"))}}]),a}(r.a.Component),d=function(e){function a(){return Object(p.a)(this,a),Object(m.a)(this,Object(g.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row",id:"nope"},r.a.createElement("div",{id:"pkmnCol",className:"col-m-4"},r.a.createElement("object",null,r.a.createElement("img",{src:this.props.pk1Img,alt:"",draggable:"false"})),r.a.createElement("p",{className:"pkmn__value"},this.props.pk1),r.a.createElement("object",null,r.a.createElement("img",{src:this.props.pk2Img,alt:"",draggable:"false"})),r.a.createElement("p",{className:"pkmn__value"},this.props.pk2)),r.a.createElement("div",{id:"pkmnCol",className:"col-m-4"},r.a.createElement("object",null,r.a.createElement("img",{src:this.props.pk3Img,alt:"",draggable:"false"})),r.a.createElement("p",{className:"pkmn__value"},this.props.pk3),r.a.createElement("object",null,r.a.createElement("img",{src:this.props.pk4Img,alt:"",draggable:"false"})),r.a.createElement("p",{className:"pkmn__value"},this.props.pk4)),r.a.createElement("div",{id:"pkmnCol",className:"col-m-4"},r.a.createElement("object",null,r.a.createElement("img",{src:this.props.pk5Img,alt:"",draggable:"false"})),r.a.createElement("p",{className:"pkmn__value"},this.props.pk5),r.a.createElement("object",null,r.a.createElement("img",{src:this.props.pk6Img,alt:"",draggable:"false"})),r.a.createElement("p",{className:"pkmn__value"},this.props.pk6))))}}]),a}(r.a.Component),f=function(e){function a(){return Object(p.a)(this,a),Object(m.a)(this,Object(g.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",{id:"footer"},"Pokemon is \xa9 Nintendo"))}}]),a}(r.a.Component),v=function(e){function a(){var e,t;Object(p.a)(this,a);for(var o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return(t=Object(m.a)(this,(e=Object(g.a)(a)).call.apply(e,[this].concat(r)))).state={pk1:void 0,pk1Img:void 0,pk2:void 0,pk2Img:void 0,pk3:void 0,pk3Img:void 0,pk4:void 0,pk4Img:void 0,pk5:void 0,pk5Img:void 0,pk6:void 0,pk6Img:void 0},t.getPkmn=function(){var e=Object(c.a)(s.a.mark(function e(a){var o,r,n,i,l,c,p,u,m,g,h,k,d;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),o=1,r=a.target.elements.regions.value,n=a.target.elements.starters.checked,i=a.target.elements.legendaries.checked,"Kanto"===r?o=2:"Johto"===r?o=3:"Hoenn"===r?o=4:"Sinnoh"===r?o=5:"Unova"===r?o=8:"Kalos"===r&&(o=12),l=6,e.next=9,fetch("https://pokeapi.co/api/v2/pokedex/1/");case 9:return c=e.sent,e.next=12,fetch("https://pokeapi.co/api/v2/pokedex/".concat(o,"/"));case 12:return p=e.sent,e.next=15,c.json();case 15:return u=e.sent,e.next=18,p.json();case 18:m=e.sent,o?(g=[],h=[],u.pokemon_entries.forEach(function(e){return g.push(e.pokemon_species.name)}),m.pokemon_entries.forEach(function(e){return h.push(e.pokemon_species.name)}),k=b(g,h,i,n),d=y(l,k),t.setState({pk1:k[d[0]],pk1Img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+w()[S(k[d[0]],i,n)]+".png",pk2:k[d[1]],pk2Img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+w()[S(k[d[1]],i,n)]+".png",pk3:k[d[2]],pk3Img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+w()[S(k[d[2]],i,n)]+".png",pk4:k[d[3]],pk4Img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+w()[S(k[d[3]],i,n)]+".png",pk5:k[d[4]],pk5Img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+w()[S(k[d[4]],i,n)]+".png",pk6:k[d[5]],pk6Img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+w()[S(k[d[5]],i,n)]+".png"})):t.setState({pk1:void 0,pk1Img:void 0,pk2:void 0,pk2Img:void 0,pk3:void 0,pk3Img:void 0,pk4:void 0,pk4Img:void 0,pk5:void 0,pk5Img:void 0,pk6:void 0,pk6Img:void 0});case 20:case"end":return e.stop()}},e,this)}));return function(a){return e.apply(this,arguments)}}(),t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"form-container"},r.a.createElement(k,{getPkmn:this.getPkmn}),r.a.createElement(d,{pk1:this.state.pk1,pk1Img:this.state.pk1Img,pk2:this.state.pk2,pk2Img:this.state.pk2Img,pk3:this.state.pk3,pk3Img:this.state.pk3Img,pk4:this.state.pk4,pk4Img:this.state.pk4Img,pk5:this.state.pk5,pk5Img:this.state.pk5Img,pk6:this.state.pk6,pk6Img:this.state.pk6Img})),r.a.createElement(f,null))))}}]),a}(r.a.Component);function b(e,a,t,o){for(var r=["Articuno","Zapdos","Moltres","Mewtwo","Mew","Raikou","Entei","Suicune","Lugia","Ho-Oh","Celebi","Regirock","Regice","Registeel","Latias","Latios","Kyogre","Groudon","Rayquaza","Jirachi","Deoxys","Uxie","Mesprit","Azelf","Dialga","Palkia","Heatran","Regigigas","Giratina","Cresselia","Phione","Manaphy","Darkrai","Shaymin","Arceus","Victini","Cobalion","Terrakion","Virizion","Tornadus","Thundurus","Reshiram","Zekrom","Landorus","Kyurem","Keldeo","Meloetta","Genesect","Xerneas","Yveltal","Zygarde","Diancie","Hoopa","Volcanion"],n=["Venusaur","Charizard","Blastoise","Meganium","Typhlosion","Feraligatr","Sceptile","Blaziken","Swampert","Torterra","Infernape","Empoleon","Serperior","Emboar","Samurott","Decidueye","Incineroar","Primarina"],i=[],l=0;l<w().length;l++)null!=e[w()[l]-1]&&i.push(e[w()[l]-1]);for(var s=[],c=0;c<i.length;c++)for(var p=0;p<a.length;p++)a[p]===i[c]&&s.push(a[p]);if(!t)for(l=0;l<r.length;l++)s.includes(r[l].toLowerCase())&&s.splice(s.indexOf(r[l].toLowerCase()),1);if(!o)for(l=0;l<n.length;l++)s.includes(n[l].toLowerCase())&&s.splice(s.indexOf(n[l].toLowerCase()),1);return s}function y(e,a){var t=[];for(t[0]=Math.floor(Math.random()*a.length);t[1]=Math.floor(Math.random()*a.length),t[1]===t[0];);for(;t[2]=Math.floor(Math.random()*a.length),t[2]===t[1]||t[2]===t[0];);for(;t[3]=Math.floor(Math.random()*a.length),t[3]===t[2]||t[3]===t[1]||t[3]===t[0];);for(;t[4]=Math.floor(Math.random()*a.length),t[4]===t[3]||t[4]===t[2]||t[4]===t[1]||t[4]===t[0];);for(;t[5]=Math.floor(Math.random()*a.length),t[5]===t[4]||t[5]===t[3]||t[5]===t[2]||t[5]===t[1]||t[5]===t[0];);return t}function S(e,a,t){for(var o=["Venusaur","Charizard","Blastoise","Butterfree","Beedrill","Pidgeot","Raticate","Fearow","Arbok","Raichu","Sandslash","Nidoqueen","Nidoking","Clefable","Ninetales","Wigglytuff","Vileplume","Parasect","Venomoth","Dugtrio","Persian","Golduck","Primeape","Arcanine","Poliwrath","Alakazam","Machamp","Victreebel","Tentacruel","Golem","Rapidash","Slowbro","Farfetchd","Dodrio","Dewgong","Muk","Cloyster","Gengar","Hypno","Kingler","Electrode","Exeggutor","Marowak","Hitmonlee","Hitmonchan","Weezing","Kangaskhan","Seaking","Starmie","Mr-Mime","Jynx","Pinsir","Tauros","Gyarados","Lapras","Ditto","Vaporeon","Jolteon","Flareon","Omastar","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dragonite","Mewtwo","Mew","Meganium","Typhlosion","Feraligatr","Furret","Noctowl","Ledian","Ariados","Crobat","Lanturn","Xatu","Ampharos","Bellossom","Azumarill","Sudowoodo","Politoed","Jumpluff","Sunflora","Quagsire","Espeon","Umbreon","Slowking","Unown","Wobbuffet","Girafarig","Forretress","Dunsparce","Steelix","Granbull","Qwilfish","Scizor","Shuckle","Heracross","Ursaring","Magcargo","Corsola","Octillery","Delibird","Mantine","Skarmory","Houndoom","Kingdra","Donphan","Stantler","Smeargle","Hitmontop","Miltank","Blissey","Raikou","Entei","Suicune","Tyranitar","Lugia","Ho-Oh","Celebi","Sceptile","Blaziken","Swampert","Mightyena","Linoone","Beautifly","Dustox","Ludicolo","Shiftry","Swellow","Pelipper","Gardevoir","Masquerain","Breloom","Slaking","Ninjask","Shedinja","Exploud","Hariyama","Delcatty","Sableye","Mawile","Aggron","Medicham","Manectric","Plusle","Minun","Volbeat","Illumise","Swalot","Sharpedo","Wailord","Camerupt","Torkoal","Grumpig","Spinda","Flygon","Cacturne","Altaria","Zangoose","Seviper","Lunatone","Solrock","Whiscash","Crawdaunt","Claydol","Cradily","Armaldo","Milotic","Castform","Kecleon","Banette","Tropius","Chimecho","Absol","Glalie","Walrein","Huntail","Gorebyss","Relicanth","Luvdisc","Salamence","Metagross","Regirock","Regice","Registeel","Latias","Latios","Kyogre","Groudon","Rayquaza","Jirachi","Deoxys","Torterra","Infernape","Empoleon","Staraptor","Bibarel","Kricketune","Luxray","Roserade","Rampardos","Bastiodon","Wormadam","Mothim","Vespiquen","Pachirisu","Floatzel","Cherrim","Gastrodon","Ambipom","Drifblim","Lopunny","Mismagius","Honchkrow","Purugly","Skuntank","Bronzong","Chatot","Spiritomb","Garchomp","Lucario","Hippowdon","Drapion","Toxicroak","Carnivine","Lumineon","Abomasnow","Weavile","Magnezone","Lickilicky","Rhyperior","Tangrowth","Electivire","Magmortar","Togekiss","Yanmega","Leafeon","Glaceon","Gliscor","Mamoswine","Porygon-Z","Gallade","Probopass","Dusknoir","Froslass","Rotom","Uxie","Mesprit","Azelf","Dialga","Palkia","Heatran","Regigigas","Giratina","Cresselia","Phione","Manaphy","Darkrai","Shaymin","Arceus","Victini","Serperior","Emboar","Samurott","Watchog","Stoutland","Liepard","Simisage","Simisear","Simipour","Musharna","Unfezant","Zebstrika","Gigalith","Swoobat","Excadrill","Audino","Conkeldurr","Seismitoad","Throh","Sawk","Leavanny","Scolipede","Whimsicott","Lilligant","Basculin","Krookodile","Darmanitan","Maractus","Crustle","Scrafty","Sigilyph","Cofagrigus","Carracosta","Archeops","Garbodor","Zoroark","Cinccino","Gothitelle","Reuniclus","Swanna","Vanilluxe","Sawsbuck","Emolga","Escavalier","Amoonguss","Jellicent","Alomomola","Galvantula","Ferrothorn","Klinklang","Eelektross","Beheeyem","Chandelure","Haxorus","Beartic","Cryogonal","Accelgor","Stunfisk","Mienshao","Druddigon","Golurk","Bisharp","Bouffalant","Braviary","Mandibuzz","Heatmor","Durant","Hydreigon","Volcarona","Cobalion","Terrakion","Virizion","Tornadus","Thundurus","Reshiram","Zekrom","Landorus","Kyurem","Keldeo","Meloetta","Genesect","Chesnaught","Delphox","Greninja","Diggersby","Talonflame","Vivillon","Pyroar","Florges","Gogoat","Pangoro","Furfrou","Meowstic","Aegislash","Aromatisse","Slurpuff","Malamar","Barbaracle","Dragalge","Clawitzer","Heliolisk","Tyrantrum","Aurorus","Sylveon","Hawlucha","Dedenne","Carbink","Goodra","Klefki","Trevenant","Gourgeist","Avalugg","Noivern","Xerneas","Yveltal","Zygarde","Diancie","Hoopa","Volcanion","Decidueye","Incineroar","Primarina","Toucannon","Gumshoos","Vikavolt","Crabominable","Oricorio","Ribombee","Lycanroc","Wishiwashi","Toxapex","Mudsdale","Araquanid","Lurantis","Shiinotic","Salazzle","Bewear","Tsareena","Comfey","Oranguru","Passimian","Golisopod","Palossand","Pyukumuku","Silvally","Minior","Komala","Turtonator","Togedemaru","Mimikyu","Bruxish","Drampa","Dhelmise","Kommo-o","Tapu Koko","Tapu Lele","Tapu Bulu","Tapu Fini","Solgaleo","Lunala","Nihilego","Buzzwole","Pheromosa","Xurkitree","Celesteela","Kartana","Guzzlord","Necrozma","Magearna","Marshadow","Naganadel","Stakataka","Blacephalon","Zeraora"],r=0,n=0;n<o.length;n++){if(null==e)return-1;if(o[n].toUpperCase()===e.toUpperCase()){r=n;break}}return r}function w(){return[3,6,9,12,15,18,20,22,24,26,28,31,34,36,38,40,45,47,49,51,53,55,57,59,62,65,68,71,73,76,78,80,83,85,87,89,91,94,97,99,101,103,105,106,107,110,115,119,121,122,124,127,128,130,131,132,134,135,136,139,141,142,143,144,145,146,149,150,151,154,157,160,162,164,166,168,169,171,178,181,182,184,185,186,189,192,195,196,197,199,201,202,203,205,206,208,210,211,212,213,214,217,219,222,224,225,226,227,229,230,232,234,235,237,241,242,243,244,245,248,249,250,251,254,257,260,262,264,267,269,272,275,277,279,282,284,286,289,291,292,295,297,301,302,303,306,308,310,311,312,313,314,317,319,321,323,324,326,327,330,332,334,335,336,337,338,340,342,344,346,348,350,351,352,354,357,358,359,362,365,367,368,369,370,373,376,377,378,379,380,381,382,383,384,385,386,389,392,395,398,400,402,405,407,409,411,413,414,416,417,419,421,423,424,426,428,429,430,432,435,437,441,442,445,448,450,452,454,455,457,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,497,500,503,505,508,510,512,514,516,518,521,523,526,528,530,531,534,537,538,539,542,545,547,549,550,553,555,556,558,560,561,563,565,567,569,571,573,576,579,581,584,586,587,589,591,593,594,596,598,601,604,606,609,612,614,615,617,618,620,621,623,625,626,628,630,631,632,635,637,638,639,640,641,642,643,644,645,646,647,648,649,652,655,658,660,663,666,668,671,673,675,676,678,681,683,685,687,689,691,693,695,697,699,700,701,702,703,706,707,709,711,713,715,716,717,718,719,720,721,724,727,730,733,735,738,740,741,743,745,746,748,750,752,754,756,758,760,763,764,765,766,768,770,771,773,774,775,776,777,778,779,780,781,784,785,786,787,788,791,792,793,794,795,796,797,798,799,800,801,802,804,805,806,807]}Array.prototype.diff=function(e){return this.filter(function(a){return e.indexOf(a)<0})};var E=v;t(20),t(22),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.25c4129c.chunk.js.map