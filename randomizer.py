import csv
import random as rand

cardsGem = []
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
            if cardType == 'Spell':
                cardsSpell.append(Card(name, cardType, cost, text, expansion))
            if cardType == 'Relic':
                cardsRelic.append(Card(name, cardType, cost, text, expansion))
            if cardType == 'Gem':
                cardsGem.append(Card(name, cardType, cost, text, expansion))
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

#checks cost
def checkCost(card, cost, op):
    if op == "less":
        return card.cost < cost
    if op == "equal":
        return card.cost == cost
    if op == "greater":
        return card.cost > cost
    

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
