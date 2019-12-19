class Raider {

  character;
  classType;
  dkp;

  constructor(character, classType, dkp){
    this.character = character
    this.classType = classType
    this.dkp = dkp; 
  }

}




class RaiderList {

  raiders = []

  populateRaiderList(){
    this.raiders = [
      new Raider(
        'Zibooru',
        'Priest',
        150
      ),
    
      new Raider(
        'Hkimpact',
        'Rogue',
        150
      ),

      new Raider(
        'Gwrath',
        'Hunter',
        -500
      )
    ]
  }

  render(){

    const table = document.querySelector('#tablebod')
    for(const raider of this.raiders){
      const newRow = document.createElement('tr')
      newRow.innerHTML = `
        <td>${raider.character}</td>
        <td>${raider.classType}</td>
        <td>${raider.dkp}</td>
        <button>Edit DKP</button>
      `;
      table.append(newRow)
      console.log(raider.character)
    }
    
  }

}

const raiderList = new RaiderList()
raiderList.populateRaiderList()
raiderList.render()