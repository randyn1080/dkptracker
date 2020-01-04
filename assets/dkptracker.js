// Databases?
// const raiders = {}
// const items = {}
// --------------


class Raider {

  raiders = new Object();

  character = String;
  classType = String;
  dkp = Number;
  itemsPurchased = new Object();

  constructor(character, classType, dkp){
    this.character = character;
    this.classType = classType;
    this.dkp = dkp; 
    this.itemsPurchased;
  }

  createRaider(raiderName, classType, dkp) {
    const newRaider = new Raider (
      raiderName,
      classType,
      dkp
    );
    this.raiders[raiderName] = newRaider
  }

  populateRaiders(){
    this.createRaider(
      'Zibooru',
      'Priest',
      9
    );
    
    this.createRaider(
      'Gwrath',
      'Hunter',
      72
    );
    
    this.createRaider(
      'Hkimpact',
      'Rogue',
      150
    );
  }
  
}



class Item {

  items = new Object();

  id = Number
  itemName = String;
  dkpValHist = new Array();

  constructor(id, itemName, dkpVal) {
    this.id = id;
    this.itemName = itemName;
    this.dkpValHist = [dkpVal];
  }

  createItem(id, itemName, dkpVal) {
    const newItem = new Item (
      id,
      itemName,
      dkpVal
    );
    this.items[itemName] = newItem
  }

  randomIdAssignment(){
    return Math.floor(Math.random()*100000)
  }

  populateItems() {
    this.createItem(
      this.randomIdAssignment(),
      'Hand of Ragnaros',
      75
    );
    
    this.createItem(
      this.randomIdAssignment(),
      'Eye of Divinity',
      15
    );
    
    this.createItem(
      this.randomIdAssignment(),
      'Core Hound Tooth',
      45
    )
    
    this.createItem(
      this.randomIdAssignment(),
      'Yances Special Burger Patti',
      102
    )
  }

}



class LootTransactions {

  purchase() {

  }

  // starter logic ?
  // raiders.Zibooru.itemsPurchased = items['Eye of Divinity']
}


class DkpAdjustmentTools {

  dkpGain(value) {
  
  }

  dkpReduce(value) {

  }

}


// class App {

//   raid = new Raider()
//   items = new Item()

//   static init(){
//     raid.populateRaiders()
//     items.populateItems()
//   }

// }

// App.init()

const raid = new Raider();
const items = new Item();
raid.populateRaiders()
items.populateItems()



// ================= POPULATE RAIDERS


// Raider.createRaider(
//   'Zibooru',
//   'Priest',
//   9
// );

// Raider.createRaider(
//   'Gwrath',
//   'Hunter',
//   72
// );

// Raider.createRaider(
//   'Hkimpact',
//   'Rogue',
//   150
// );


// ====================== POPULATE ITEMS

// Item.createItem(
//   Item.randomIdAssignment(),
//   'Hand of Ragnaros',
//   75
// );

// Item.createItem(
//   Item.randomIdAssignment(),
//   'Eye of Divinity',
//   15
// );

// Item.createItem(
//   Item.randomIdAssignment(),
//   'Core Hound Tooth',
//   45
// )

// Item.createItem(
//   Item.randomIdAssignment(),
//   'Yances Special Burger Patti',
//   102
// )