# dkptracker

DKP tracker for WoW Guilds as a third party Web App

Goal of this project: 

!!> Above all else, maintain an Object Oriented Programming style for this project <!!

1. Track and manipulate DKP values of individual raiders
2. Adjust DKP of everyone in raid and standby based on DKP adjustment events (on time bonus, boss kills, end of raid ect.)
3. Log boss kills, with attached loot tables
4. Log boss loot drops following kills (separate from assigning loot drops to individual raiders)
5. Assign loot drops to individual raiders
6. Adjust individual raiders DKP based on amount spent for loot drop purchases
7. Assign DKP spent history to items following loot drop purchases




Structure:

1. Raider List Structure:
    
RaiderList will be an Object with a collection of Objects of raiders inside, with the properties of:

List of Raiders {

    Raider 1 {

        Character: String
        classType: String
        DKP: Number
        itemsPurchased: Array to which Objects of items are pushed for logging history

    }

    Raider 2 {

        Character: String
        classType: String
        DKP: Number
        itemsPurchased: Array to which Objects of items are pushed for logging history

    }

}



Raiderlist = { >>EXAMPLE RAIDER LIST<<

    Zibooru: {  >>EXAMPLE RAIDER 1<<
        Character: 'Zibooru',
        classType: 'Priest',
        DKP: 9,
        itemsPurchased: [
            {
                id: 5114,
                itemName: 'Eye of Divinity',
                dkpValHist: [
                    {
                        purchaser: 'Starting Price',
                        DkpValue: 25
                    },
                    {
                        purchaser: 'Zibooru',
                        dkpValue: 69
                    }
                ]
            },
            {
                id: 5163,
                itemName: 'Hand of Ragnaros',
                dkpValHist: [
                    {
                        purchaser: 'Starting Price',
                        DkpValue: 35
                    },
                    {
                        purchaser: 'Zibooru',
                        DkpValue: 150
                    }
                ]
            }
        ]
    }

    Gwrath: {  >>EXAMPLE RAIDER 2<<
        Character: 'Gwrath',
        classType: 'Hunter',
        DKP: 150,
        itemsPurchased: [
            {
                id: 5163,
                itemName: 'Core Hound Tooth',
                dkpValHist: [
                    {
                        purchaser: 'Starting Price',
                        DkpValue: 25
                    },
                    {
                        purchaser: 'Gwrath',
                        DkpValue: 35
                    }
                ]
            }
        ]
    }

}



2. Item List Structure:

ItemList will be an Object with a collection of Objects of Items inside, with the properties of:

ItemList = {

    "Item 1"(NOTE: THIS IS A STRING) {

        id: Number(eventually linking GUID of ingame item -OR- GUID of wowhead item link.)
        itemName: String (NOTE: SAME AS OBJECT POINTER)
        dkpValHist: Array to which Objects of purchase information is pushed for price logging history

    }

    "Item 2"(NOTE: THIS IS A STRING) {

        id: Number(eventually linking GUID of ingame item -OR- GUID of wowhead item link.)
        itemName: String (NOTE: SAME AS OBJECT POINTER)
        dkpValHist: Array to which Objects of purchase information is pushed for price logging history

    }

}



ItemList = { >>EXAMPLE ITEM LIST<<

    'Core Hound Tooth': { >>EXAMPLE ITEM 1<<
        id: 5163,
        itemName: 'Core Hound Tooth'
        dkpValHist: [
            {
                purchaser: 'Starting Price',
                DkpValue: 25
            },
            {
                purchaser: 'Gwrath',
                DkpValue: 35
            }
        ]
    },

    'Eye of Divinity': { >>EXAMPLE ITEM 2<<
        id: 5114,
        itemName: 'Eye of Divinity',
        dkpValHist: [
            {
                purchaser: 'Starting Price',
                DkpValue: 25
            },
            {
                purchaser: 'Zibooru',
                DkpValue: 35
            },
            {
                purchaser: 'Manikan',
                DkpValue: 45
            }
        ]
    }

}
