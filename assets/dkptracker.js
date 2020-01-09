// Databases?
// const raiders = {}
// const items = {}
// --------------


class Boss{ // create a button to be displayed on page PER BOSS that when clicked will create a popup that will accept a CSV list of raiders.  When that input is accepted, distribute the dkpValue of the boss to everyone as a dkpGain.

  // following that event, create a similar yet smaller (contained) popup of buttons containing the boss's loot table.  When a loot Item is clicked, create an input field to accept a Raider and a dkpVal to automatically pass to LootTransactions.purchase(Raider, Item, DkpVal).

  bossName = String;
  dkpValue = Number;
  lootTable = []

  constructor(name, dkpVal) {
    this.bossName = name;
    this.dkpValue = dkpVal
    this.lootTable = [];
  }

  createBoss(boss, dkpVal) {
    const newBoss = new Boss(
      boss,
      dkpVal
    )
    this.bosses[boss] = newBoss
  }

}



class Raider {
  
  character = String;
  classType = String;
  dkp = Number;
  itemsPurchased = [];
  
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
    
    dkpSubtract(val) {
      this.dkp = this.dkp - val
    }
    
    dkpAdd(val) {
      this.dkp = this.dkp + val
    }
    
  }
  
  
  
  class Item {
    
    id = Number
    itemName = String;
    dkpValHist = [];
    
    constructor(id, itemName, dkpVal) {
      this.id = id;
      this.itemName = itemName;
      this.dkpValHist = [{
        purchaser:'Starting Price',
      DkpValue:dkpVal
    }];
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
    
    averageDkpSpent() {
      const numOfPurchases = this.dkpValHist.length - 1
      const purchasesAmountArr = []
      for (let i = 1; i <= numOfPurchases; i++) {
        purchasesAmountArr.push(this.dkpValHist[i].DkpValue)
        console.log(this.dkpValHist[i].DkpValue)
      }
      return +(purchasesAmountArr.reduce((a,b)=>a+b) / numOfPurchases).toFixed(2)
    }
    
  }
  
  
  
  class LootTransactions { // add logic to adjust DKP based on the dkpValSpent for a purchased item
    
    static purchase(purchaser, itemPurchased, dkpValSpent) {
      
      listOfItems[itemPurchased].dkpValHist.push({purchaser:purchaser, DkpValue:dkpValSpent});
      
      listOfRaiders[purchaser].itemsPurchased.push(listOfItems[itemPurchased]);
      
      listOfRaiders[purchaser].dkpSubtract(dkpValSpent)
      
    }
    
  }



  class BossList extends Boss {
  
    constructor() {
      super()
    }
  
    bosses = {};
  
    populateBosses() {
      this.createBoss(
        'Ragnaros',
        3
      );
  
      this.createBoss(
        'Onyxia',
        3
      );
  
      this.createBoss(
        'Magmadar',
        3
      );
  
      this.createBoss(
        'Lucifron'
      );
  
    }
  
  }
  
  
  
  class RaiderList extends Raider{
    
    constructor() {
      super()
    }
    
  raiders = {};

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

  items = {}

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
const bossList = new BossList()
raiderList.populateRaiders();
itemsList.populateItems();
bossList.populateBosses();

const listOfItems = itemsList.items;
const listOfRaiders = raiderList.raiders;
const listOfBosses = bossList.bosses;


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