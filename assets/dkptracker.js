// Databases?
// const raiders = {}
// const items = {}
// --------------


class Raider {

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
  
}



class Item {

  id = Number
  itemName = String;
  dkpValHist = new Object();

  constructor(id, itemName, dkpVal) {
    this.id = id;
    this.itemName = itemName;
    this.dkpValHist = {Starting_Price:dkpVal};
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

}



class RaiderList extends Raider{

  constructor() {
    super()
  }

  raiders = new Object();

  populateRaiders(){
    this.createRaider(
      'Manikan',
      'Priest',
      99
    );

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



class ItemsList extends Item{

  constructor(){
    super()
  }

  items = new Object()

  populateItems() {
    this.createItem(
      this.randomIdAssignment(),
      'Hand of Ragnaros',
      35
    );
    
    this.createItem(
      this.randomIdAssignment(),
      'Eye of Divinity',
      25
    );
    
    this.createItem(
      this.randomIdAssignment(),
      'Core Hound Tooth',
      20
    );
    
    this.createItem(
      this.randomIdAssignment(),
      'Yances Special Burger Patti',
      15
    );
  }

}



class DkpAdjustmentTools {

  dkpGain(value) {
  
  }

  dkpReduce(value) {

  }

}



class LootTransactions extends DkpAdjustmentTools { // add logic to adjust DKP based on the dkpValSpent for a purchased item

  static purchase(purchaser, itemPurchased, dkpValSpent) {
    listOfItems[itemPurchased].dkpValHist[purchaser] = {purchaser:purchaser, dkpSpent:dkpValSpent}
    listOfRaiders[purchaser].itemsPurchased[itemPurchased] = listOfItems[itemPurchased]
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

const raiderList = new RaiderList();
const itemsList = new ItemsList();
raiderList.populateRaiders();
itemsList.populateItems();

const listOfItems = itemsList.items;
const listOfRaiders = raiderList.raiders;



// class RaiderList {

//   raiders = []

//   populateRaiderList(){
//     this.raiders = [
//       new Raider(
//         'Zibooru',
//         'Priest',
//         150
//       ),
    
//       new Raider(
//         'Hkimpact',
//         'Rogue',
//         150
//       ),

//       new Raider(
//         'Gwrath',
//         'Hunter',
//         -500
//       )
//     ]
//   }

//   render(){

//     const table = document.querySelector('#tablebod')
//     for(const raider of this.raiders){
//       const newRow = document.createElement('tr')
//       newRow.innerHTML = `
//         <td>${raider.character}</td>
//         <td>${raider.classType}</td>
//         <td>${raider.dkp}</td>
//         <td><button>Edit DKP</button></td>
//       `;
//       table.append(newRow)
//       console.log(raider.character)
//     }
    
//   }

// }

// const raiderList = new RaiderList()
// raiderList.populateRaiderList()
// raiderList.render()