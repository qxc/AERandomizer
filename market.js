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

mages = [new Mage("Adelheim", 'AE'), new Mage("Phaedraxa", 'AE'), new Mage("Brama", 'AE'), new Mage("Kadir", 'AE'), new Mage("Mist", 'AE'), new Mage("Jian", 'AE'), new Mage("Zhana", 'Depths'), new Mage("Nym", 'Depths'), new Mage("Reeve", 'Depths'), new Mage("Malastar", 'Nameless'), new Mage("Xaxos", 'AE'), new Mage("Lash", 'AE'),new Mage('Dezmodia','WE'),new Mage('Garu','WE'),new Mage('Gex','WE'),new Mage('Mazahaedron','WE'),new Mage('MistWE','WE'),new Mage('Quilius','WE'),new Mage('Ulgimor','WE'),new Mage('YanMagda','WE'),new Mage('Sparrow','TV'),new Mage('XaxosTV','TV'),new Mage('Indira','OD'),new Mage('Remnant','OD'),new Mage('Legacy1','Legacy'),new Mage('Legacy2','Legacy'),new Mage('Legacy3','Legacy'),new Mage('Legacy4','Legacy'),new Mage('Legacy5','Legacy'),new Mage('Legacy6','Legacy'),new Mage('Legacy7','Legacy'),new Mage('Legacy8','Legacy')];
cardsGem = [new Card("Jade", 'Gem', 2, 'AE'),new Card("SiftersPearl", 'Gem', 3, 'AE'),new Card("VriswoodAmber", 'Gem', 3, 'AE'),new Card("LeechingAgate", 'Gem', 3, 'Nameless'),new Card("DiamondCluster", 'Gem', 4, 'AE'),new Card("SearingRuby", 'Gem', 4, 'AE'),new Card("BurningOpal", 'Gem', 5, 'AE'),new Card("BanishingTopaz", 'Gem', 5, 'Depths'),new Card("CloudedSapphire", 'Gem', 6, 'AE'),new Card('BloodstoneJewel','Gem',6,'WE'),new Card('BreachOre','Gem',4,'WE'),new Card('DreadDiamond','Gem',3,'WE'),new Card('ErraticIngot','Gem',5,'WE'),new Card('FrozenMagmite','Gem',3,'WE'),new Card('ScoriaSlag','Gem',4,'WE'),new Card('VolcanicGlass','Gem',3,'WE'),new Card('AlienElement','Gem',4,'OD'),new Card('HauntedBerylite','Gem',3,'OD'),new Card('PainStone','Gem',6,'OD'),new Card('FossilizedScarab','Gem',3,'TV'),new Card("AncientCyanolith", 'Gem', 3, 'Legacy'),new Card("ArcingSilicate", 'Gem', 4, 'Legacy'),new Card("BranchingRadite", 'Gem', 4, 'Legacy'),new Card("ConductiveGrit", 'Gem', 3, 'Legacy'),new Card("CrumblingCompound", 'Gem', 5, 'Legacy'),new Card("EntangledShard", 'Gem', 4, 'Legacy'),new Card("FulmiteSlab", 'Gem', 6, 'Legacy'),new Card("GildedMarble", 'Gem', 6, 'Legacy'),new Card("JoltingCrust", 'Gem', 3, 'BS'),new Card("MentiteChunk", 'Gem', 5, 'BS'),new Card("MutedLacosite", 'Gem', 5, 'BS'),new Card("ObliviumResin", 'Gem', 5, 'BS'),new Card("PhasedPortalite", 'Gem', 4, 'Legacy'),new Card("RefinedLumenium", 'Gem', 5, 'Legacy'),new Card("ShiningTetrite", 'Gem', 6, 'BS'),new Card("SoothingTorporene", 'Gem', 3, 'Legacy'),new Card("Summonite", 'Gem', 3, 'BS'),new Card("TripliteCore", 'Gem', 4, 'BS'),new Card("VoidiumSpike", 'Gem', 3, 'BS')];
cardsSpell = [new Card("PhoenixFlame", 'Spell', 3, 'AE'),new Card("SpectralEcho", 'Spell', 3, 'AE'),new Card("AmplifyVision", 'Spell', 4, 'AE'),new Card("Ignite", 'Spell', 4, 'AE'),new Card("LavaTendril", 'Spell', 4, 'AE'),new Card("VoidBond", 'Spell', 4, 'Depths'),new Card("Blaze", 'Spell', 4, 'Nameless'),new Card("DarkFire", 'Spell', 5, 'AE'),new Card("EssenceTheft", 'Spell', 5, 'AE'),new Card("FeralLightning", 'Spell', 5, 'AE'),new Card("OblivionSwell", 'Spell', 5, 'AE'),new Card("Combustion", 'Spell', 5, 'Depths'),new Card("ChaosArc", 'Spell', 6, 'AE'),new Card("PlanarInsight", 'Spell', 6, 'AE'),new Card("WildfireWhip", 'Spell', 6, 'AE'),new Card("DevouringShadow", 'Spell', 6, 'Depths'),new Card("ScryingBolt", 'Spell', 6, 'Nameless'),new Card("ArcaneNexus", 'Spell', 7, 'AE'),new Card("ConsumingVoid", 'Spell', 7, 'AE'),new Card("DisintegratingScythe", 'Spell', 7, 'Depths'),new Card("SagesBrand", 'Spell', 7, 'Nameless'),new Card("MonstrousInferno", 'Spell', 8, 'Depths'),new Card("Radiance", 'Spell', 8, 'Nameless'), new Card('Aurora','Spell',5,'WE'),new Card('Carbonize','Spell',4,'WE'),new Card('ConjureTheLost','Spell',6,'WE'),new Card('CelestialSpire','Spell',5,'WE'),new Card('ConvectionField','Spell',5,'WE'),new Card('Crystallize','Spell',8,'WE'),new Card('Equilibrium','Spell',7,'WE'),new Card('FieryTorrent','Spell',5,'WE'),new Card('JaggedLightning','Spell',4,'WE'),new Card('Kindle','Spell',4,'WE'),new Card('NovaForge','Spell',6,'WE'),new Card('PyrotechnicSurge','Spell',4,'WE'),new Card('ReduceToAsh','Spell',7,'WE'),new Card('ThoughtformFamiliar','Spell',3,'WE'),new Card('Char','Spell',8,'OD'),new Card('Catalyst','Spell',6,'OD'),new Card('FeedbackAura','Spell',5,'OD'),new Card('NetherConduit','Spell',7,'OD'),new Card('Pyromancy','Spell',7,'OD'),new Card('Scorch','Spell',5,'OD'),new Card('Resonate','Spell',6,'TV'),new Card('Conflagration','Spell',3,'TV'),new Card('Fulminate','Spell',5,'TV'),new Card('InnerFire','Spell',2,'TV'),new Card('ThermalDart','Spell',4,'TV'),new Card("ArcaneSalvo", 'Spell', 5, 'Legacy'),new Card("BendingBeam", 'Spell', 5, 'Legacy'),new Card("BladeOfWisdom", 'Spell', 6, 'BS'),new Card("BreachCollision", 'Spell', 7, 'Legacy'),new Card("BreachCommunion", 'Spell', 4, 'Legacy'),new Card("BreachFlare", 'Spell', 3, 'Legacy'),new Card("BurningCurrent", 'Spell', 3, 'BS'),new Card("DoubleTap", 'Spell', 3, 'BS'),new Card("DrainingTouch", 'Spell', 2, 'BS'),new Card("FieryConclusion", 'Spell', 5, 'Legacy'),new Card("FireChakram", 'Spell', 2, 'Legacy'),new Card("FlashOfIntellect", 'Spell', 4, 'BS'),new Card("ForceTransfusion", 'Spell', 4, 'Legacy'),new Card("GravityNode", 'Spell', 5, 'Legacy'),new Card("IncineratingFist", 'Spell', 4, 'Legacy'),new Card("NerveJab", 'Spell', 2, 'BS'),new Card("PrecisionShot", 'Spell', 3, 'BS'),new Card("PsychicEruption", 'Spell', 8, 'BS'),new Card("PyroGeist", 'Spell', 6, 'Legacy'),new Card("SparkingSiphon", 'Spell', 3, 'Legacy'),new Card("SphereOfInversion", 'Spell', 9, 'Legacy'),new Card("StarfireFrenzy", 'Spell', 6, 'Legacy'),new Card("StunningForce", 'Spell', 5, 'BS'),new Card("ThunderousOath", 'Spell', 8, 'Legacy'),new Card("WarpingHaze", 'Spell', 3, 'Legacy')];
cardsRelic = [new Card("FlexingDagger", 'Relic', 2, 'AE'),new Card("BottledVortex", 'Relic', 3, 'AE'),new Card("UnstablePrism", 'Relic', 3, 'AE'),new Card("BlastingStaff", 'Relic', 4, 'AE'),new Card("FocusingOrb", 'Relic', 4, 'AE'),new Card("Transmogrifier", 'Relic', 4, 'Depths'),new Card("VimDynamo", 'Relic', 4, 'Depths'),new Card("MagesTalisman", 'Relic', 5, 'AE'),new Card("MoltenHammer", 'Relic', 5, 'Nameless'),new Card("TemporalHelix", 'Relic', 7, 'Nameless'),new Card('CairnCompass','Relic',4,'WE'),new Card('ConclaveScroll','Relic',3,'WE'),new Card('FiendCatcher','Relic',3,'WE'),new Card('MagesTotem','Relic',2,'WE'),new Card('PrimordialFetish','Relic',4,'WE'),new Card('VortexGauntlet','Relic',6,'WE'),new Card('AstralCube','Relic',5,'OD'),new Card('RiddleSphere','Relic',3,'OD'),new Card('DimensionalKey','Relic',8,'TV'),new Card('EternityCharm','Relic',3,'TV'),new Card("AdrenalBatteries", 'Relic', 7, 'Legacy'),new Card("BottledStar", 'Relic', 7, 'BS'),new Card("BraneKnife", 'Relic', 3, 'Legacy'),new Card("EtherealHand", 'Relic', 6, 'Legacy'),new Card("Geophage", 'Relic', 3, 'Legacy'),new Card("InfernalMirror", 'Relic', 5, 'Legacy'),new Card("LivingGauntlet", 'Relic', 4, 'BS'),new Card("ManifoldContainer", 'Relic', 4, 'BS'),new Card("NeuralWreath", 'Relic', 4, 'Legacy'),new Card("PropheticLens", 'Relic', 4, 'Legacy'),new Card("RealityStabilizer", 'Relic', 6, 'Legacy'),new Card("ScholarsOpus", 'Relic', 3, 'BS'),new Card("SoulCords", 'Relic', 5, 'BS'),new Card("VoidMill", 'Relic', 5, 'Legacy'),new Card("VoltaicRelay", 'Relic', 4, 'Legacy')];
bosses = [new Boss("RageBorne", 'AE'), new Boss("CarapaceQueen", 'AE'), new Boss("CrookedMask", 'AE'),new Boss("PrinceOfGluttons", 'AE'), new Boss("HordeCrone", 'Depths'), new Boss("BlightLord", 'Nameless'), new Boss("WaywardOne", 'Nameless'),new Boss('HollowCrown','WE'),new Boss('UmbraTitan','WE'),new Boss('GateWitch','WE'),new Boss('MagusOfCloaks','WE'),new Boss('KnightOfShackles','TV'),new Boss('MaidenOfThorns','TV'),new Boss('Wraithmonger','OD'),new Boss('ThriceDeadProphet','OD'),new Boss('Bladius', 'Legacy'),new Boss('SpawningHorror', 'Legacy'),new Boss('FungalMesh', 'Legacy'),new Boss('Deathmind', 'Legacy'),new Boss('MaelstromRisen', 'Legacy'),new Boss('XaxosAscended', 'Legacy')];

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
  var twoGems = gems.filter(function(gem) {return gem.cost== 2 || gem.cost==3});
  cards = cards.concat(_.sample(twoGems, 2));
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

hasBaseGame = function(exp) {
  return ["AE", "WE", "Legacy"].includes(exp)
}

inExp = function(exps, card) {
  return exps.includes(card.expansion)
};

buttonPress = function(j) {
  exps = Array.from(document.querySelectorAll('input[name="expansions"]'))
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => checkbox.value);

  if(!exps.some(hasBaseGame)){
    alert("Select Aeon's End, War Eternal, Legacy or a combination of the three in addition to other expansions.");
    return;
  }

  boundInExp = inExp.bind(this, exps);
  var fGems = cardsGem.filter(boundInExp);
  var fRelics = cardsRelic.filter(boundInExp);
  var fSpells = cardsSpell.filter(boundInExp);
  var fMages = mages.filter(boundInExp);
  var cards = genMarket(fGems, fRelics, fSpells, j);
  var chosenMages = _.sample(fMages,4);

  cards.forEach(function(card, i) {
    var imageName = "image" + i.toString();
    var cardName = card + ".jpg";
    var temp = "images/" + card.cardType.toLowerCase() + "s/" + cardName;
    document.getElementById(imageName).src = temp;
  });

  chosenMages.forEach(function(mage, i) {
    var imageName = "mage" + i.toString();
    var mageName = mage + ".jpg";
    var temp = "images/mages/" + mageName;
    document.getElementById(imageName).src = temp;

    var mageText = "#" + imageName + "Cont p";
    document.querySelector(mageText).innerHTML = mage;
  });

  var imageName = "boss0";
  var fBosses = bosses.filter(boundInExp);
  var chosenBoss = _.sample(fBosses) + ".jpg";
  var temp = "images/bosses/" + chosenBoss;
  document.getElementById(imageName).src = temp;
};

createItem = function(parent, input, img) {
  var label = document.createElement("label");
  label.appendChild(input);
  label.appendChild(img);
  parent.appendChild(label);
};

createInput = function(type, value, name, checked = false) {
  var input = document.createElement("input");
  input.type = type;
  input.name = name;
  input.value = value;
  input.checked = checked;

  return input;
};

createImage = function(imageName, width) {
  var img = document.createElement("img");
  img.src = "images/" + imageName + ".jpg";
  img.style.width = width;

  return img;
};

createExpBoxes = function() {
  var ae1 = new Map([["AE", "AeonsEnd"], ["Depths", "TheDepths"], ["Nameless", "TheNameless"]]);
  var ae2 = new Map([["WE", "WarEternal"], ["TV", "TheVoid"], ["OD", "TheOuterDark"]]);
  var ae3 = new Map([["Legacy", "Legacy"], ["BS", "BuriedSecrets"]]);
  var ae4 = new Map([["NA", "NewAge"]]);
  var waves = [ae1, ae2, ae3];
  var expansions = document.getElementById("expansions")

  waves.forEach(function(waveMap) {
    waveMap.forEach(function(imageName, value, map) {
      var input = createInput("checkbox", value, "expansions");
      var img = createImage("waves/" + imageName, "30%");
      createItem(expansions, input, img);
    });

    var br = document.createElement("br");
    expansions.appendChild(br);
  });
};

createRandomizers = function() {
  var market = document.getElementById("marketSetup")
  var list = [...Array(7).keys()].map(number => "market" + number);
  list[0] = "balanced";

  list.forEach(function(name, i) {
    var input = createInput("radio", name.toString(), "setup", i == 0);
    var img = createImage("market/" + name, "180px");
    img.onclick = function() { buttonPress(i) };
    createItem(market, input, img);
  });
};

window.onload = function() {
  createExpBoxes();
  createRandomizers();
};
