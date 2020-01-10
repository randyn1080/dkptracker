// Databases?
// const raiders = {}
// const items = {}
// --------------

// add logic to track DKP add and subtracts, definitely linked to the invividual raiders and also maybe boss or some other list


class Boss{ // create a button to be displayed on page PER BOSS that when clicked will create a popup that will accept a CSV/SemiColon list of raiders.  When that input is accepted, distribute the dkpValue of the boss to everyone as a dkpGain.

  // following that event, create a similar yet smaller (contained) popup of buttons containing the boss's loot table.  When a loot Item is clicked, create an input field to accept a Raider and a dkpVal to automatically pass to LootTransactions.purchase(Raider, Item, DkpVal).

  bossName = String;
  dkpValue = Number;
  lootTable;

  constructor(name, dkpVal, ...items) {
    this.bossName = name;
    this.dkpValue = dkpVal
    this.lootTable = items;
  }

  createBoss(boss, dkpVal, ...items) {
    const newBoss = new Boss(
      boss,
      dkpVal,
      ...items
    )
    this.bosses[boss] = newBoss
  }

  listBossLootTable() {
    this.lootTable.forEach((lootTblObj, indx) =>
      console.log(`ID #${lootTblObj.id} : ${lootTblObj.itemName} at index ${indx}`)
    )
  }

  bossKill(raidersPresent) { // figure out how to convert it directly to a string, incase the original copy paste from WoW isn't in string form (containing ' ') but rather flat text.
    const date = new Date()
    console.log(raidersPresent)
    listOfRaiders
    const raidersPres = raidersPresent.split(';')
    for (const raider of raidersPres) {
      if(listOfRaiders[raider]){
        listOfRaiders[raider].dkpAdd(this.dkpValue)
        listOfRaiders[raider].dkpHistory.push({
          Reason:`${this.bossName} Slain ${date.toLocaleString()}`,
          Dkp:Math.abs(this.dkpValue)
        })
        console.log(`${listOfRaiders[raider].character} dkp increased from ${listOfRaiders[raider].dkp - this.dkpValue} to ${listOfRaiders[raider].dkp}`)
      } else {
        console.log(`${raider} not in database.`)
      }
    }
    console.log(`Congratulations on killing ${this.bossName}`)
  }

}

// listOfRaiders[purchaser].dkpHistory.push({
//   Reason:'Loot Transaction',
//   Dkp:-Math.abs(dkpValSpent)
// })



class Raider {
  
  character = String;
  classType = String;
  dkp = Number;
  itemsPurchased = [];
  dkpHistory = []
  
  constructor(character, classType, dkp){
    this.character = character;
    this.classType = classType;
    this.dkp = dkp; 
    this.itemsPurchased;
    this.dkpHistory
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
    console.log(`Subtract called! for ${this.character}`)
  }
    
  dkpAdd(val) {
    this.dkp = this.dkp + val
    console.log(`Add called! for ${this.character}`)
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

    const date = new Date()
    
    listOfItems[itemPurchased].dkpValHist.push({
      purchaser:purchaser, 
      DkpValue:dkpValSpent
    });
    
    listOfRaiders[purchaser].itemsPurchased.push(listOfItems[itemPurchased]);
    
    listOfRaiders[purchaser].dkpSubtract(dkpValSpent)

    listOfRaiders[purchaser].dkpHistory.push({
      Reason:`${itemPurchased} purchased ${date.toLocaleString()}`,
      Dkp:-Math.abs(dkpValSpent)
    })
    
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
      3,
      listOfItems['Hand of Ragnaros'],
      listOfItems['Leggings of Transcendence'],
      listOfItems['Perdition\'s Blade'],
      listOfItems['Bonereaver\'s Edge']
    );

    this.createBoss(
      'Majordomo',
      3,
      listOfItems['Core Hound Tooth'],
      listOfItems['Eye of Divinity'],
      listOfItems['Ancient Petrified Leaf']
    );

    this.createBoss(
      'Onyxia',
      3,
      listOfItems['Yances Special Burger Patti'],
      listOfItems['Ancient Cornerstone Grimoire'],
      listOfItems['Nemesis Skullcap'],
      listOfItems['Netherwind Crown']
    );

    this.createBoss(
      'Magmadar',
      3,
      listOfItems['Striker\'s Mark'],
      listOfItems['Cenarion Leggings'],
      listOfItems['Arcanist Leggings']
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

  test(){
    console.log(this)
  }

  render(){

    const table = document.querySelector('#tablebod')

    for(const raider in this.raiders){

      const newRow = document.createElement('tr')

      newRow.innerHTML = `
        <td>${this.raiders[raider].character}</td>
        <td>${this.raiders[raider].classType}</td>
        <td>${this.raiders[raider].dkp}</td>
        <button id="addBtn${this.raiders[raider].character}">Add DKP</button>
        <button id="subBtn${this.raiders[raider].character}">Subtract DKP</button>
      `;

      table.append(newRow)

      const addBtn = document.querySelector(`button#addBtn${this.raiders[raider].character}`)
      const subBtn = document.querySelector(`button#subBtn${this.raiders[raider].character}`)

      addBtn.addEventListener('click',this.dkpAdd.bind(this.raiders[raider]))
      subBtn.addEventListener('click',this.dkpSubtract.bind(this.raiders[raider]))
    }
    
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
      35,
    );

    this.createItem(
      this.randomIdAssignment(),
      'Ancient Petrified Leaf',
      25
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

    this.createItem(
      this.randomIdAssignment(),
      'Leggings of Transcendence',
      20
    );

    this.createItem(
      this.randomIdAssignment(),
      'Perdition\'s Blade',
      25
    );

    this.createItem(
      this.randomIdAssignment(),
      'Bonereaver\'s Edge',
      25
    );

    this.createItem(
      this.randomIdAssignment(),
      'Ancient Cornerstone Grimoire',
      15
    );
    
    this.createItem(
      this.randomIdAssignment(),
      'Nemesis Skullcap',
      20
    );

    this.createItem(
      this.randomIdAssignment(),
      'Netherwind Crown',
      20
    );

    this.createItem(
      this.randomIdAssignment(),
      'Striker\'s Mark',
      15
    );

    this.createItem(
      this.randomIdAssignment(),
      'Cenarion Leggings',
      15
    );

    this.createItem(
      this.randomIdAssignment(),
      'Arcanist Leggings',
      15
    )
  }

}



// create instances
const raiderList = new RaiderList();
const itemsList = new ItemsList();


// populate lists
raiderList.populateRaiders();
itemsList.populateItems();


// tie lists to simple constants for testing
const listOfItems = itemsList.items;
const listOfRaiders = raiderList.raiders;

// boss lists depend on item lists, so we must do these last.
const bossList = new BossList()
bossList.populateBosses();
const listOfBosses = bossList.bosses;

raiderList.render()

// ================================
// need to understand how to make this work.  Possible it will only work once I begin to render things?
// ================================

// class App {

//   static init(){
//     const raiderList = new RaiderList();
//     const itemsList = new ItemsList()
//     const bossList = new BossList();

//     raiderList.populateRaiders()
//     itemsList.populateItems()
//     bossList.populateBosses()
//   }

// }

// App.init()



//===================================

// FUTURE LOGIC TO RENDER INFO TO PAGE

//====================================



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

  // render(){

  //   const table = document.querySelector('#tablebod')
  //   for(const raider of this.raiders){
  //     const newRow = document.createElement('tr')
  //     newRow.innerHTML = `
  //       <td>${raider.character}</td>
  //       <td>${raider.classType}</td>
  //       <td>${raider.dkp}</td>
  //       <td><button>Edit DKP</button></td>
  //     `;
  //     table.append(newRow)
  //     console.log(raider.character)
  //   }
    
  // }

// }

// const raiderList = new RaiderList()
// raiderList.populateRaiderList()
// raiderList.render()