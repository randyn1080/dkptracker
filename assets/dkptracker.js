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



class Item {

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
    );
    
    this.createItem(
      this.randomIdAssignment(),
      'Yances Special Burger Patti',
      102
    );
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

const raiderList = new RaiderList();
const itemsList = new ItemsList();
raiderList.populateRaiders()
itemsList.populateItems()




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