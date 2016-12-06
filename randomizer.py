import csv
import random as rand

cardsGem= []
cardsRelic = []
cardsSpell = []

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

##def pickSetup():
##    gems = rand.sample(cardsGem, 3)
##    for x in gems:
##        print (x)
##
##    spells = rand.sample(cardsSpell, 4)
##    for x in spells:
##        print (x)
##
##    relics = rand.sample(cardsRelic, 2)
##    for x in relics:
##        print (x)

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

#function to check if a specified mage or card is in an array of expansions
def checkExp(card, exp):
    return card.expansion in exp
    

class Mage(object):
    def __init__(self, name, ability, expansion):
        self.name = name
        self.ability = ability
        self.expansion = expansion    

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
pickSetup()
