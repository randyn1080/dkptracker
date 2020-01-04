
// Databases?
const raiders = {}
const items = {}
// --------------


class Raider {

  character = String;
  classType = String;
  dkp = Number;
  itemsPurchased = new Object;

  constructor(character, classType, dkp){
    this.character = character;
    this.classType = classType;
    this.dkp = dkp; 
    this.itemsPurchased;
  }

  static createRaider(raiderName, classType, dkp) {
    const newRaider = new Raider (
      raiderName,
      classType,
      dkp
    );
    raiders[raiderName] = newRaider
  }
  
}



class Item {

  itemName = String;
  dkpValue = Number;

  constructor(itemName, dkpVal) {
    this.itemName = itemName;
    this.dkpValue = dkpVal
  }

  static createItem(itemName, dkpVal) {
    const newItem = new Item (
      itemName,
      dkpVal
    )
    items[itemName] = newItem
  }

}



class LootTransactions {

  purchase(item, dkpSpent) {
    
  }

}

class DkpAdjustmentTools {

  dkpGain(value) {
  
  }

  dkpReduce(value) {

  }

}



Raider.createRaider(
  'Zibooru',
  'Priest',
  9
);

Raider.createRaider(
  'Gwrath',
  'Hunter',
  72
);

Raider.createRaider(
  'Hkimpact',
  'Rogue',
  150
);

Item.createItem(
  'Hand of Ragnaros',
  75
)