import csv

cardsGem= []
cardsRelic = []
cardsSpell = []
mages  = []

def processCards(fileName = "cards.csv"):
    writeTo = "parsed.txt"
    f = open(writeTo, "w")
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
                f.write(str(card)+ " ")
            if cardType == 'Relic':
                cardsRelic.append(card)
                f.write(str(card)+ " ")
            if cardType == 'Gem':
                cardsGem.append(card)
                f.write(str(card)+ " ")
        f.close()
    return

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
