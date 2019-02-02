import React from "react";
import Form from "./components/form";
import Pkmn from "./components/pkmn";

class App extends React.Component {
  state = {
    pk1: undefined,
    pk1Img: undefined,
    pk2: undefined,
    pk2Img: undefined,
    pk3: undefined,
    pk3Img: undefined,
    pk4: undefined,
    pk4Img: undefined,
    pk5: undefined,
    pk5Img: undefined,
    pk6: undefined,
    pk6Img: undefined
  }

  getPkmn = async (e) => {
    e.preventDefault();
    var r = 1;
    const x = e.target.elements.regions.value;
    var starters = e.target.elements.starters.checked;
    var legendaries = e.target.elements.legendaries.checked;

    if (x === "Kanto"){
      r = 2;
    } else if (x === "Johto"){
      r = 3;
    } else if (x === "Hoenn"){
      r = 4;
    } else if (x === "Sinnoh"){
      r = 5;
    } else if (x === "Unova"){
      r = 8;
    } else if (x === "Kalos"){
      r = 12;
    }
 
    const size = 6;

    const apiCall = await fetch(`https://pokeapi.co/api/v2/pokedex/1/`);
    const regCall = await fetch(`https://pokeapi.co/api/v2/pokedex/${r}/`)
    const dataNational = await apiCall.json();
    const dataRegion = await regCall.json();

    if (r){
      var natArr = [];
      var regArr = [];
      dataNational.pokemon_entries.forEach(x => natArr.push(x.pokemon_species.name));
      dataRegion.pokemon_entries.forEach(x => regArr.push(x.pokemon_species.name));
      var out = filter(natArr, regArr);
      //console.log(out);

      var team = assignTeam(size, out);

      console.log()

      this.setState({
        pk1: out[team[0]],
        pk1Img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + nums(starters, legendaries)[getNumFromName(out[team[0]])] + '.png',
        pk2: out[team[1]],
        pk2Img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + nums(false, legendaries)[getNumFromName(out[team[1]])] + '.png',
        pk3: out[team[2]],
        pk3Img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + nums(false, legendaries)[getNumFromName(out[team[2]])] + '.png',
        pk4: out[team[3]],
        pk4Img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + nums(false, legendaries)[getNumFromName(out[team[3]])] + '.png',
        pk5: out[team[4]],
        pk5Img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + nums(false, legendaries)[getNumFromName(out[team[4]])] + '.png',
        pk6: out[team[5]],
        pk6Img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + nums(false, legendaries)[getNumFromName(out[team[5]])] + '.png'
      });
      //console.log(out);
    } else {
      this.setState({
        pk1: undefined,
        pk1Img: undefined,
        pk2: undefined,
        pk2Img: undefined,
        pk3: undefined,
        pk3Img: undefined,
        pk4: undefined,
        pk4Img: undefined,
        pk5: undefined,
        pk5Img: undefined,
        pk6: undefined,
        pk6Img: undefined
      });
    }
  };
  render() {
    return (
      <div>
        <div className="wrapper">
          
            <div className="container">
              <div className="form-container">
                  <Form getPkmn={this.getPkmn}/>
                  <Pkmn
                      pk1={this.state.pk1}
                      pk1Img={this.state.pk1Img}
                      pk2={this.state.pk2}
                      pk2Img={this.state.pk2Img}
                      pk3={this.state.pk3}
                      pk3Img={this.state.pk3Img}
                      pk4={this.state.pk4}
                      pk4Img={this.state.pk4Img}
                      pk5={this.state.pk5}
                      pk5Img={this.state.pk5Img}
                      pk6={this.state.pk6}
                      pk6Img={this.state.pk6Img}
                   />
              </div>
            </div>
          </div>
        
      </div>
    );
  };
};

function filter(nat, reg){

      var output = [];

      for (var i = 0; i < nums().length; i++){
        if (nat[nums()[i]-1] != null){
          output.push(nat[nums()[i]-1]);
        }
      }

      var out = [];

      for (var k = 0; k < output.length; k++){
        for (var j = 0; j < reg.length; j++){
          if (reg[j] === output[k]){
            out.push(reg[j]);
          }
        }
      }

      return out;
}

// takes in the size and makes team for specified reg
function assignTeam(size, out){
  var n = [];
  n[0] = Math.floor(Math.random()*out.length);

  while (true){
    n[1] = Math.floor(Math.random()*out.length);
    if (n[1] === n[0]){
      continue;
    } else {
      break;
    }
  }

  while (true){
    n[2] = Math.floor(Math.random()*out.length);
    if (n[2] === n[1] || n[2] === n[0]){
      continue;
    } else {
      break;
    }
  }

  while (true){
    n[3] = Math.floor(Math.random()*out.length);
    if (n[3] === n[2] || n[3] === n[1] || n[3] === n[0]){
      continue;
    } else {
      break;
    }
  }

  while (true){
    n[4] = Math.floor(Math.random()*out.length);
    if (n[4] === n[3] || n[4] === n[2] || n[4] === n[1] || n[4] === n[0]){
      continue;
    } else {
      break;
    }
  }

  while (true){
    n[5] = Math.floor(Math.random()*out.length);
    if (n[5] === n[4] || n[5] === n[3] || n[5] === n[2] || n[5] === n[1] || n[5] === n[0]){
      continue;
    } else {
      break;
    }
  }


  /*
  for (var i = 1; i < size; i++){
    n[i] = Math.floor(Math.random()*out.length);
  }
  */
  return n;
}

function getNumFromName(x){
  var names = ["Venusaur","Charizard","Blastoise","Butterfree","Beedrill","Pidgeot","Raticate","Fearow","Arbok","Raichu","Sandslash","Nidoqueen","Nidoking","Clefable","Ninetales","Wigglytuff","Vileplume","Parasect","Venomoth","Dugtrio","Persian","Golduck","Primeape","Arcanine","Poliwrath","Alakazam","Machamp","Victreebel","Tentacruel","Golem","Rapidash","Slowbro","Farfetchd","Dodrio","Dewgong","Muk","Cloyster","Gengar","Hypno","Kingler","Electrode","Exeggutor","Marowak","Hitmonlee","Hitmonchan","Weezing","Kangaskhan","Seaking","Starmie","Mr-Mime","Jynx","Pinsir","Tauros","Gyarados","Lapras","Ditto","Vaporeon","Jolteon","Flareon","Omastar","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dragonite","Mewtwo","Mew","Meganium","Typhlosion","Feraligatr","Furret","Noctowl","Ledian","Ariados","Crobat","Lanturn","Xatu","Ampharos","Bellossom","Azumarill","Sudowoodo","Politoed","Jumpluff","Sunflora","Quagsire","Espeon","Umbreon","Slowking","Unown","Wobbuffet","Girafarig","Forretress","Dunsparce","Steelix","Granbull","Qwilfish","Scizor","Shuckle","Heracross","Ursaring","Magcargo","Corsola","Octillery","Delibird","Mantine","Skarmory","Houndoom","Kingdra","Donphan","Stantler","Smeargle","Hitmontop","Miltank","Blissey","Raikou","Entei","Suicune","Tyranitar","Lugia","Ho-Oh","Celebi","Sceptile","Blaziken","Swampert","Mightyena","Linoone","Beautifly","Dustox","Ludicolo","Shiftry","Swellow","Pelipper","Gardevoir","Masquerain","Breloom","Slaking","Ninjask","Shedinja","Exploud","Hariyama","Delcatty","Sableye","Mawile","Aggron","Medicham","Manectric","Plusle","Minun","Volbeat","Illumise","Swalot","Sharpedo","Wailord","Camerupt","Torkoal","Grumpig","Spinda","Flygon","Cacturne","Altaria","Zangoose","Seviper","Lunatone","Solrock","Whiscash","Crawdaunt","Claydol","Cradily","Armaldo","Milotic","Castform","Kecleon","Banette","Tropius","Chimecho","Absol","Glalie","Walrein","Huntail","Gorebyss","Relicanth","Luvdisc","Salamence","Metagross","Regirock","Regice","Registeel","Latias","Latios","Kyogre","Groudon","Rayquaza","Jirachi","Deoxys","Torterra","Infernape","Empoleon","Staraptor","Bibarel","Kricketune","Luxray","Roserade","Rampardos","Bastiodon","Wormadam","Mothim","Vespiquen","Pachirisu","Floatzel","Cherrim","Gastrodon","Ambipom","Drifblim","Lopunny","Mismagius","Honchkrow","Purugly","Skuntank","Bronzong","Chatot","Spiritomb","Garchomp","Lucario","Hippowdon","Drapion","Toxicroak","Carnivine","Lumineon","Abomasnow","Weavile","Magnezone","Lickilicky","Rhyperior","Tangrowth","Electivire","Magmortar","Togekiss","Yanmega","Leafeon","Glaceon","Gliscor","Mamoswine","Porygon-Z","Gallade","Probopass","Dusknoir","Froslass","Rotom","Uxie","Mesprit","Azelf","Dialga","Palkia","Heatran","Regigigas","Giratina","Cresselia","Phione","Manaphy","Darkrai","Shaymin","Arceus","Victini","Serperior","Emboar","Samurott","Watchog","Stoutland","Liepard","Simisage","Simisear","Simipour","Musharna","Unfezant","Zebstrika","Gigalith","Swoobat","Excadrill","Audino","Conkeldurr","Seismitoad","Throh","Sawk","Leavanny","Scolipede","Whimsicott","Lilligant","Basculin","Krookodile","Darmanitan","Maractus","Crustle","Scrafty","Sigilyph","Cofagrigus","Carracosta","Archeops","Garbodor","Zoroark","Cinccino","Gothitelle","Reuniclus","Swanna","Vanilluxe","Sawsbuck","Emolga","Escavalier","Amoonguss","Jellicent","Alomomola","Galvantula","Ferrothorn","Klinklang","Eelektross","Beheeyem","Chandelure","Haxorus","Beartic","Cryogonal","Accelgor","Stunfisk","Mienshao","Druddigon","Golurk","Bisharp","Bouffalant","Braviary","Mandibuzz","Heatmor","Durant","Hydreigon","Volcarona","Cobalion","Terrakion","Virizion","Tornadus","Thundurus","Reshiram","Zekrom","Landorus","Kyurem","Keldeo","Meloetta","Genesect","Chesnaught","Delphox","Greninja","Diggersby","Talonflame","Vivillon","Pyroar","Florges","Gogoat","Pangoro","Furfrou","Meowstic","Aegislash","Aromatisse","Slurpuff","Malamar","Barbaracle","Dragalge","Clawitzer","Heliolisk","Tyrantrum","Aurorus","Sylveon","Hawlucha","Dedenne","Carbink","Goodra","Klefki","Trevenant","Gourgeist","Avalugg","Noivern","Xerneas","Yveltal","Zygarde","Diancie","Hoopa","Volcanion","Decidueye","Incineroar","Primarina","Toucannon","Gumshoos","Vikavolt","Crabominable","Oricorio","Ribombee","Lycanroc","Wishiwashi","Toxapex","Mudsdale","Araquanid","Lurantis","Shiinotic","Salazzle","Bewear","Tsareena","Comfey","Oranguru","Passimian","Golisopod","Palossand","Pyukumuku","Silvally","Minior","Komala","Turtonator","Togedemaru","Mimikyu","Bruxish","Drampa","Dhelmise","Kommo-o","Tapu Koko","Tapu Lele","Tapu Bulu","Tapu Fini","Solgaleo","Lunala","Nihilego","Buzzwole","Pheromosa","Xurkitree","Celesteela","Kartana","Guzzlord","Necrozma","Magearna","Marshadow","Naganadel","Stakataka","Blacephalon","Zeraora"];
  var index = 0;
  for (var i = 0; i < names.length; i++){
    if (x != null){
      if (names[i].toUpperCase() === x.toUpperCase()){
        index = i;
        break;
      }
    } else {
      return -1;
    }
  }
  return index;
}

function nums(starters, legendaries){
  var num = [3,6,9,12,15,18,20,22,24,26,28,31,34,36,38,40,45,47,49,51,53,55,57,59,62,65,68,71,73,76,78,80,83,85,87,89,91,94,97,99,101,103,105,106,107,110,115,119,121,
          122,124,127,128,130,131,132,134,135,136,139,141,142,143,144,145,146,149,150,151,154,157,160,162,164,166,168,169,171,178,181,182,184,185,186,189,192,195,
          196,197,199,201,202,203,205,206,208,210,211,212,213,214,217,219,222,224,225,226,227,229,230,232,234,235,237,241,242,243,244,245,248,249,250,251,254,257,
          260,262,264,267,269,272,275,277,279,282,284,286,289,291,292,295,297,301,302,303,306,308,310,311,312,313,314,317,319,321,323,324,326,327,330,332,334,335,
          336,337,338,340,342,344,346,348,350,351,352,354,357,358,359,362,365,367,368,369,370,373,376,377,378,379,380,381,382,383,384,385,386,389,392,395,398,400,
          402,405,407,409,411,413,414,416,417,419,421,423,424,426,428,429,430,432,435,437,441,442,445,448,450,452,454,455,457,460,461,462,463,464,465,466,467,468,
          469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,497,500,503,505,508,510,512,514,516,518,521,523,
          526,528,530,531,534,537,538,539,542,545,547,549,550,553,555,556,558,560,561,563,565,567,569,571,573,576,579,581,584,586,587,589,591,593,594,596,598,601,
          604,606,609,612,614,615,617,618,620,621,623,625,626,628,630,631,632,635,637,638,639,640,641,642,643,644,645,646,647,648,649,652,655,658,660,663,666,668,
          671,673,675,676,678,681,683,685,687,689,691,693,695,697,699,700,701,702,703,706,707,709,711,713,715,716,717,718,719,720,721,724,727,730,733,735,738,740,
          741,743,745,746,748,750,752,754,756,758,760,763,764,765,766,768,770,771,773,774,775,776,777,778,779,780,781,784,785,786,787,788,791,792,793,794,795,796,
          797,798,799,800,801,802,804,805,806,807];

  return num;
}

export default App;

/*
 1 - national
 2 - kanto
 3 - original-johto
 4 - hoenn
 5 - original-sinnoh
 6 - extenden-sinnoh
 7 - updated-johto
 8 - original-unova
 9 - updated-unova
 12 - kalos-central
 13 - kalos-coastal
 14 - kalos-mountain
 15 - updated-hoenn

*/
