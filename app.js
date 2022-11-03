class shipFactory {
    constructor(factoryType) {
      this.factoryType = factoryType;
      this.shipCollection = [];
    }
}
  
    class humanShip{
        constructor(){
            this.hull=20
            this.firePower= 5
            this.accuracy=.7
        }
    }
    class alienShip {
        constructor(hull,firePower,accuracy){
        this.hull = randomHull(3,6)
        this.firePower = randomFirePower(2,4)
        this.accuracy = randomAccuracy()
    }
    }
    function randomHull(min, max){
        return Math.floor(Math.random() * (max - min+1) + min)
}
    
   function randomFirePower(min, max){ 
        return Math.floor(Math.random() * (max - min+1) + min)
   }
    function randomAccuracy() {
        return (Math.floor(Math.random() * 3) + 6) / 10
    }


    // makeNewBadGuy(damage, health, attackShout) {
    //     const newBadGuy = new BadGuy(this.factoryType, damage, health, attackShout);
    //     this.badGuyCollection.push(newBadGuy);
    //   }
    
  let alienShip1 = new alienShip
  let USSHumanShip = new humanShip
  let createShipFactory = new shipFactory
  
    console.log(alienShip1)