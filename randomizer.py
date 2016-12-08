import csv
import random as rand

cardsGem= []
cardsRelic = []
cardsSpell = []
mages  = []

#takes in the csv and makes arrays of all the cards
def processCards(fileName = "cards.csv"):
    with open(fileName) as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            name = row['Name of card']
            cost = int(row['cost'])
            cardType = row['type'].capitalize()
            text = row['description']
            expansion = row['Product (base, stretch, exp)']
            if cost == 0:
                continue
            if cardType == "":
                continue
            if row['Card Status'] == "":
                continue
            card = Card(name, cardType, cost, text, expansion)
            if cardType == 'Spell':
                cardsSpell.append(card)
            if cardType == 'Relic':
                cardsRelic.append(card)
            if cardType == 'Gem':
                cardsGem.append(card)
    return

#takes in the csv and makes arrays of all the mages
def processMages(fileName = "mages.csv"):
    with open(fileName) as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            name = row['Name']
            ability = row['Ability Description']
            expansion = row['Product (base, stretch, exp)']
            mages.append(Mage(name, ability, expansion))
    return

#function to pick a specified number of each type of card
def pickSetup(gemNum=3, speNum=2, relNum=4):
    gems = rand.sample(cardsGem, gemNum)
    for x in gems:
        print (x)

    spells = rand.sample(cardsSpell, speNum)
    for x in spells:
        print (x)

    relics = rand.sample(cardsRelic, relNum)
    for x in relics:
        print (x)

#function to pick a specified number of mages
def pickMages(exps=["Base, Expansion, Stretch"], players = 4):
    picks = rand.sample(mages, players)
    for x in picks:
        print (x)



#function to pick a specified number of each type
#from a specified set of expansions
def pickSetupFilter(exps=["Base, Expansion, Stretch"], gemNum=3, speNum=2, relNum=4):
    fGems = [x for x in cardsGem if checkExp(x, exps)]
    gems = rand.sample(fGems, gemNum)
    for x in gems:
        print (x)
    fSpells = [x for x in cardsSpell if checkExp(x, exps)]
    spells = rand.sample(fSpells, speNum)
    for x in spells:
        print (x)
    fRelics = [x for x in cardsRelic if checkExp(x, exps)]
    relics = rand.sample(fRelics, relNum)
    for x in relics:
        print (x)



#function to check if a specified mage or card is in an array of expansions
def checkExp(card, exp):
    return card.expansion in exp

def setupOne(exps):
    fGems = [x for x in cardsGem if checkExp(x, exps)]
    fourGems = [x for x in fGems if x.cost == 4]
    smallGems = [x for x in fGems if x.cost < 4]
    smallGem = rand.choice(smallGems)
    print (smallGem)
    fGems.remove(smallGem)
    fourGem = rand.choice(fourGems)
    print (fourGem)
    fGems.remove(fourGem)
    gem = rand.choice(fGems)
    print (gem)
    fRelics = [x for x in cardsRelic if checkExp(x, exps)]
    relics = rand.sample(fRelics, 2)
    for x in relics:
        print (x)
    fSpells = [x for x in cardsSpell if checkExp(x, exps)]
    smallSpells = [x for x in fSpells if x.cost < 5]
    bigSpells = [x for x in fSpells if x.cost > 5]
    spells = rand.sample(smallSpells, 2)+ rand.sample(bigSpells, 2)
    for x in spells:
        print (x)

def setupTwo(exps):
    fGems = [x for x in cardsGem if checkExp(x, exps)]
    largeGems = [x for x in fGems if x.cost > 3]
    gems = rand.sample(largeGems, 3)
    for x in gems:
        print (x)
    fRelics = [x for x in cardsRelic if checkExp(x, exps)]
    largeRelics = [x for x in fRelics if x.cost > 4]
    largeRelic = rand.choice(largeRelics)
    print (largeRelic)
    fRelics.remove(largeRelic)
    relic = rand.choice(fRelics)
    print (relic)    
    fSpells = [x for x in cardsSpell if checkExp(x, exps)]
    smallSpells = [x for x in fSpells if x.cost < 6]
    bigSpells = [x for x in fSpells if x.cost > 6]
    spells = rand.sample(smallSpells, 3)+ rand.sample(bigSpells, 1)
    for x in spells:
        print (x)
    
def setupThree(exps):
    fGems = [x for x in cardsGem if checkExp(x, exps)]
    largeGems = [x for x in fGems if x.cost == 4 or x.cost == 5]
    smallGems = [x for x in fGems if x.cost < 4]
    gems = rand.sample(smallGems, 1)+rand.sample(largeGems, 2)
    for x in gems:
        print (x)
    fRelics = [x for x in cardsRelic if checkExp(x, exps)]
    relic = rand.choice(fRelics)
    print (relic)
    fSpells = [x for x in cardsSpell if checkExp(x, exps)]
    threeSpells = [x for x in fSpells if x.cost == 3]
    fourSpells = [x for x in fSpells if x.cost == 4]
    bigSpells = [x for x in fSpells if x.cost > 5]
    spells = rand.sample(threeSpells, 1)+ rand.sample(fourSpells, 1)+rand.sample(bigSpells, 3)
    for x in spells:
        print (x)
    
def setupFour(exps):
    fGems = [x for x in cardsGem if checkExp(x, exps)]
    largeGems = [x for x in fGems if x.cost > 4]
    gem = rand.choice(largeGems)
    fGems.remove(gem)
    print (gem)
    gems = rand.sample(fGems, 2)
    for x in gems:
        print (x)
    fRelics = [x for x in cardsRelic if checkExp(x, exps)]
    smallRelics = [x for x in fRelics if x.cost <4]
    bigRelics = [x for x in fRelics if x.cost > 4]
    smallRelic = rand.choice(smallRelics)
    print(smallRelic)
    fRelics.remove(smallRelic)
    bigRelic = rand.choice(bigRelics)
    print(bigRelic)
    fRelics.remove(bigRelic)
    relic = rand.choice(fRelics)
    print(relic)
    fSpells = [x for x in cardsSpell if checkExp(x, exps)]
    smallSpells = [x for x in fSpells if x.cost < 5]
    bigSpells = [x for x in fSpells if x.cost > 5]
    smallSpell = rand.choice(smallSpells)
    print(smallSpell)
    fSpells.remove(smallSpell)
    bigSpell = rand.choice(bigSpells)
    print(bigSpell)
    fSpells.remove(bigSpell)
    spell = rand.choice(fSpells)
    print(spell)

def setupFive(exps):
    fGems = [x for x in cardsGem if checkExp(x, exps)]
    for c in [2,3,4,5]:
        print (rand.choice([x for x in fGems if x.cost == c]))
    fRelics = [x for x in cardsRelic if checkExp(x, exps)]
    print (rand.choice(fRelics))
    fSpells = [x for x in cardsSpell if checkExp(x, exps)]
    for c in [4,5,6]:
        print (rand.choice([x for x in fSpells if x.cost == c]))
    print (rand.choice([x for x in fSpells if x.cost > 6]))

def setupSix(exps):
    fGems = [x for x in cardsGem if checkExp(x, exps)]
    for c in [3,4]:
        print (rand.choice([x for x in fGems if x.cost == c]))
    fRelics = [x for x in cardsRelic if checkExp(x, exps)]
    smallRelics = [x for x in fRelics if x.cost <4]
    bigRelics = [x for x in fRelics if x.cost > 4]
    smallRelic = rand.choice(smallRelics)
    print(smallRelic)
    fRelics.remove(smallRelic)
    bigRelic = rand.choice(bigRelics)
    print(bigRelic)
    fRelics.remove(bigRelic)
    relic = rand.choice(fRelics)
    print(relic)
    fSpells = [x for x in cardsSpell if checkExp(x, exps)]
    print (rand.choice([x for x in fSpells if (x.cost == 3 or x.cost == 4)]))
    spells = rand.sample([x for x in fSpells if (x.cost == 5 or x.cost == 6)],2)
    for x in spells:
        print (x)
    print (rand.choice([x for x in fSpells if x.cost > 6]))

                
class Mage(object):
    def __init__(self, name, ability, expansion):
        self.name = name
        self.ability = ability
        self.expansion = expansion    

    def __str__(self):
        return self.name + " " + self.expansion


class Card(object):

    def __init__(self, name, cardType, cost, text, expansion):
        self.name = name
        self.cardType = cardType
        self.cost = cost
        self.text = text
        self.expansion = expansion

    def __str__(self):
        return self.name + " " + self.cardType + " " + str(self.cost) + " " + self.expansion


processCards()
processMages()
pickSetup()
pickMages()
