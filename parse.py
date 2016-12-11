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
            expansion = row['Product (base, stretch, exp)']
            if cost == 0:
                continue
            if cardType == "":
                continue
         #   if row['Card Status'] == "":
         #       continue
            card = Card(name, cardType, cost, expansion)
            if cardType == 'Spell':
                cardsSpell.append(card)
            if cardType == 'Relic':
                cardsRelic.append(card)
            if cardType == 'Gem':
                cardsGem.append(card)

    f.write("cardsGem = [")
    for x in cardsGem:
        f.write(str(x)+",")
    f.write("];\n")
    f.write("cardsSpell = [")
    for x in cardsSpell:
        f.write(str(x)+ ",")
    f.write("];\n")
    f.write("cardsRelic = [")
    for x in cardsRelic:
        f.write(str(x)+ ",")
    f.write("];\n")
    f.close()
    return

class Card(object):

    def __init__(self, name, cardType, cost, expansion):
        self.name = name.replace(" ", "").replace("'", "")
        self.cardType = cardType
        self.cost = cost
        self.expansion = expansion
#leaves an extra comma at the very end of the array
    def __str__(self):
        return "new Card(\"" + self.name + "\", '" + self.cardType + "', " + str(self.cost) + ", '" + self.expansion + "')"
        

processCards()
