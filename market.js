isMobile = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
  
};

var Card = function(name, cardType, cost, expansion){
	this.name = name;
	this.cardType = cardType;
	this.cost = cost;
	this.expansion = expansion;
	
};

Card.prototype.toString = function(){
	return this.name;
};

var Mage = function(name, expansion){
	this.name = name;
	this.expansion = expansion;
};

Mage.prototype.toString = function(){
	return this.name;	
};

var Boss = function(name, expansion){
	this.name = name;
	this.expansion = expansion;
};

Boss.prototype.toString = function(){
	return this.name;	
};

mages = [new Mage("Adelheim", 'Base'), new Mage("Phaedraxa", 'Base'), new Mage("Brama", 'Base'), new Mage("Kadir", 'Base'), new Mage("Mist", 'Base'), new Mage("Jian", 'Base'), new Mage("Zhana", 'Expansion'), new Mage("Nym", 'Expansion'), new Mage("Reeve", 'Expansion'), new Mage("Malastar", 'Stretch'), new Mage("Xaxos", 'Base'), new Mage("Lash", 'Base')];
cardsGem = [new Card("Jade", 'Gem', 2, 'Base'),new Card("SiftersPearl", 'Gem', 3, 'Base'),new Card("VriswoodAmber", 'Gem', 3, 'Base'),new Card("LeechingAgate", 'Gem', 3, 'Stretch'),new Card("DiamondCluster", 'Gem', 4, 'Base'),new Card("SearingRuby", 'Gem', 4, 'Base'),new Card("BurningOpal", 'Gem', 5, 'Base'),new Card("BanishingTopaz", 'Gem', 5, 'Expansion'),new Card("CloudedSapphire", 'Gem', 6, 'Base')];
cardsSpell = [new Card("PhoenixFlame", 'Spell', 3, 'Base'),new Card("SpectralEcho", 'Spell', 3, 'Base'),new Card("AmplifyVision", 'Spell', 4, 'Base'),new Card("Ignite", 'Spell', 4, 'Base'),new Card("LavaTendril", 'Spell', 4, 'Base'),new Card("VoidBond", 'Spell', 4, 'Expansion'),new Card("Blaze", 'Spell', 4, 'Stretch'),new Card("DarkFire", 'Spell', 5, 'Base'),new Card("EssenceTheft", 'Spell', 5, 'Base'),new Card("FeralLightning", 'Spell', 5, 'Base'),new Card("OblivionSwell", 'Spell', 5, 'Base'),new Card("Combustion", 'Spell', 5, 'Expansion'),new Card("ChaosArc", 'Spell', 6, 'Base'),new Card("PlanarInsight", 'Spell', 6, 'Base'),new Card("WildfireWhip", 'Spell', 6, 'Base'),new Card("DevouringShadow", 'Spell', 6, 'Expansion'),new Card("ScryingBolt", 'Spell', 6, 'Stretch'),new Card("ArcaneNexus", 'Spell', 7, 'Base'),new Card("ConsumingVoid", 'Spell', 7, 'Base'),new Card("DisintegratingScythe", 'Spell', 7, 'Expansion'),new Card("SagesBrand", 'Spell', 7, 'Stretch'),new Card("MonstrousInferno", 'Spell', 8, 'Expansion'),new Card("Radiance", 'Spell', 8, 'Stretch')];
cardsRelic = [new Card("FlexingDagger", 'Relic', 2, 'Base'),new Card("BottledVortex", 'Relic', 3, 'Base'),new Card("UnstablePrism", 'Relic', 3, 'Base'),new Card("BlastingStaff", 'Relic', 4, 'Base'),new Card("FocusingOrb", 'Relic', 4, 'Base'),new Card("Transmogrifier", 'Relic', 4, 'Expansion'),new Card("VimDynamo", 'Relic', 4, 'Expansion'),new Card("MagesTalisman", 'Relic', 5, 'Base'),new Card("MoltenHammer", 'Relic', 5, 'Stretch'),new Card("TemporalHelix", 'Relic', 7, 'Stretch')];
bosses = [new Boss("Rageborne", 'Base'), new Boss("CarapaceQueen", 'Base'), new Boss("CrookedMask", 'Base'),new Boss("PrinceOfGluttons", 'Base'), new Boss("HordeCrone", 'Expansion'), new Boss("BlightLord", 'Stretch'), new Boss("WaywardOne", 'Stretch')]; 

exps = ["Base", "Expansion", "Stretch"];

inExp = function(card){
	inExpo = 0;
	for(j = 0; j < exps.length; j++){
		if(card.expansion == exps[j]){
			inExpo = 1;
		};
	};
	return inExpo;
};

randomSetup = function(gems, relics, spells) {
	return _.sample(gems, 3).concat(_.sample(relics, 2)).concat(_.sample(spells, 4));
};

setupOne = function(gems, relics, spells) {
	var cards = [];
	var smallGems = gems.filter(function(gem) {return gem.cost < 4});
	var smallGem = _.sample(smallGems);
	cards.push(smallGem);
	var index = gems.indexOf(smallGem);
	gems.splice(index,1);
	var fourGems =  gems.filter(function(gem) {return gem.cost == 4});
	var fourGem = _.sample(fourGems);
	cards.push(fourGem);
	var index = gems.indexOf(fourGem);
	gems.splice(index,1);
	cards.push(_.sample(gems));

	cards = cards.concat(_.sample(relics,2));
	
	var smallSpells = spells.filter(function(spell) {return spell.cost < 5});
	cards = cards.concat(_.sample(smallSpells,2));
	var bigSpells = spells.filter(function(spell) {return spell.cost > 5});
	cards = cards.concat(_.sample(bigSpells,2));
	return cards;
};

setupTwo = function(gems, relics, spells) {
	var cards = [];
	var largeGems = gems.filter(function(gem) {return gem.cost > 3});
	cards = cards.concat(_.sample(largeGems, 3));

	var largeRelics = relics.filter(function(relic) {return relic.cost > 4});
	var largeRelic = _.sample(largeRelics);
	cards.push(largeRelic);
	var index = relics.indexOf(largeRelic);
	relics.splice(index,1);
	cards.push(_.sample(relics));
	
	var smallSpells = spells.filter(function(spell) {return spell.cost < 6});
	cards = cards.concat(_.sample(smallSpells,3));
	var bigSpells = spells.filter(function(spell) {return spell.cost > 6});
	cards = cards.concat(_.sample(bigSpells,1));
	return cards;
};

setupThree = function(gems, relics, spells) {
	var cards = [];
	var smallGems = gems.filter(function(gem) {return gem.cost < 4});
	var largeGems = gems.filter(function(gem) {return gem.cost == 4 || gem.cost == 5});
	cards.push(_.sample(smallGems));
	cards = cards.concat(_.sample(largeGems, 2));
	
	cards.push(_.sample(relics));
	
	var threeSpells = spells.filter(function(spell) {return spell.cost == 3});
	cards.push(_.sample(threeSpells));
	var fourSpells = spells.filter(function(spell) {return spell.cost == 4});
	cards.push(_.sample(fourSpells));
	var bigSpells = spells.filter(function(spell) {return spell.cost > 5});
	cards = cards.concat(_.sample(bigSpells,3));
	return cards;
};

setupFour = function(gems, relics, spells) {
	var cards = [];
	var largeGems = gems.filter(function(gem) {return gem.cost > 4});
	var largeGem = _.sample(largeGems);
	cards.push(largeGem);
	var index = gems.indexOf(largeGem);
	gems.splice(index,1);
	cards = cards.concat(_.sample(gems,2));
	
	var smallRelics = relics.filter(function(relic) {return relic.cost < 4});
	var smallRelic = _.sample(smallRelics);
	cards.push(smallRelic);
	var index = relics.indexOf(smallRelic);
	relics.splice(index,1);
	var largeRelics = relics.filter(function(relic) {return relic.cost > 4});
	var largeRelic = _.sample(largeRelics);
	cards.push(largeRelic);
	var index = relics.indexOf(largeRelic);
	relics.splice(index,1);
	cards.push(_.sample(relics));
	
	var smallSpells = spells.filter(function(spell) {return spell.cost < 5});
	var smallSpell = _.sample(smallSpells);
	cards.push(smallSpell);
	var index = spells.indexOf(smallSpell);
	spells.splice(index,1);
	var largeSpells = spells.filter(function(spell) {return spell.cost > 5});
	var largeSpell = _.sample(largeSpells);
	cards.push(largeSpell);
	var index = spells.indexOf(largeSpell);
	spells.splice(index,1);
	cards.push(_.sample(spells));
	return cards;
};


setupFive = function(gems, relics, spells) {
	var cards = [];
	var twoGems = gems.filter(function(gem) {return gem.cost== 2});
	cards.push(_.sample(twoGems));
	var threeGems = gems.filter(function(gem) {return gem.cost== 3});
	cards.push(_.sample(threeGems));
	var fourGems = gems.filter(function(gem) {return gem.cost== 4});
	cards.push(_.sample(fourGems));
	var fiveGems = gems.filter(function(gem) {return gem.cost== 5});
	cards.push(_.sample(fiveGems));
	
	cards.push(_.sample(relics));
	
	var fourSpells = spells.filter(function(spell) {return spell.cost == 4});
	cards.push(_.sample(fourSpells));
	var fiveSpells = spells.filter(function(spell) {return spell.cost == 5});
	cards.push(_.sample(fiveSpells));
	var sixSpells = spells.filter(function(spell) {return spell.cost == 6});
	cards.push(_.sample(sixSpells));
	var largeSpells = spells.filter(function(spell) {return spell.cost >6});
	cards.push(_.sample(largeSpells));
	return cards;
};

setupSix = function(gems, relics, spells) {
	var cards = [];
	var threeGems = gems.filter(function(gem) {return gem.cost== 3});
	cards.push(_.sample(threeGems));
	var fourGems = gems.filter(function(gem) {return gem.cost== 4});
	cards.push(_.sample(fourGems));
	
	
	var smallRelics = relics.filter(function(relic) {return relic.cost < 4});
	var smallRelic = _.sample(smallRelics);
	cards.push(smallRelic);
	var index = relics.indexOf(smallRelic);
	relics.splice(index,1);
	var largeRelics = relics.filter(function(relic) {return relic.cost > 4});
	var largeRelic = _.sample(largeRelics);
	cards.push(largeRelic);
	var index = relics.indexOf(largeRelic);
	relics.splice(index,1);
	cards.push(_.sample(relics));
	
	var smallSpells = spells.filter(function(spell) {return spell.cost == 3 || spell.cost == 4});
	cards.push(_.sample(smallSpells));
	var medSpells = spells.filter(function(spell) {return spell.cost == 5 || spell.cost == 6});
	cards = cards.concat(_.sample(medSpells,2));
	var largeSpells = spells.filter(function(spell) {return spell.cost >6});
	cards.push(_.sample(largeSpells));
	return cards;
};


genMarket = function(gems, relics, spells, i){
	var cards = [];
	if (i == 0) {
		cards = randomSetup(gems, relics, spells);
	};
	if (i == 1) {
		cards = setupOne(gems, relics, spells);
	};
	if (i == 2) {
		cards = setupTwo(gems, relics, spells);
	};
	if (i == 3) {
		cards = setupThree(gems, relics, spells);
	};
	if (i == 4) {
		cards = setupFour(gems, relics, spells);
	};
	if (i == 5) {
		cards = setupFive(gems, relics, spells);
	};
	if (i == 6) {
		cards = setupSix(gems, relics, spells);
	};
	return cards;
};

function buttonPress(j) {
	//document.getElementById('image4').scrollIntoView();
	var checkExp = document.forms[0];
	exps = ["Base"];
	for (i = 0; i < checkExp.length; i++) {
        if (checkExp[i].checked) {
            exps.push(checkExp[i].value);
        };
    };
	var fGems = cardsGem.filter(inExp);
	var fRelics = cardsRelic.filter(inExp);
	var fSpells = cardsSpell.filter(inExp);
	var numMages = 4;
	var fMages = mages.filter(inExp);
    var checkSetup = document.forms[1];
    var txt = "";
	var cards = genMarket(fGems, fRelics, fSpells, j);
    var chosenMages = _.sample(fMages,4)
    for (i = 0; i < cards.length; i++) {
		var imageName = "image"+ i.toString();
        document.getElementById(imageName).src="images/" + cards[i] +".jpg";
        //document.getElementById(imageName).width="300"; // example of how you can alter width of an image
    };	
    for (i = 0; i < numMages; i++) {
		var imageName = "mage"+ i.toString();
        document.getElementById(imageName).src="mages/" + chosenMages[i] +".JPG";
        //document.getElementById(imageName).width="300"; // example of how you can alter width of an image
    };
    var imageName = "boss0";
    var fBosses = bosses.filter(inExp);
    var chosenBoss = _.sample(fBosses);
    document.getElementById(imageName).src="bosses/"+chosenBoss +".JPG";
	console.log("check");
    //document.getElementById("market").innerHTML = "You ordered a market with: " + txt;
	//document.getElementById("expo").innerHTML = "You want to use expansions: " + exps+fGems;
	
};

window.onload = function() {
	//isMobile(); //Checks if the user is on a mobile device. Can pass this to buttonPress to have it set the image width differently
	//buttonPress();
  
};