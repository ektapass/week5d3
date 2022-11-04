//let alienArr = []                                        //create a humanShip class.

//let alienShip =[]
class SpaceShip{
    constructor() {
      this.name='Spaceship';  
      this.hull= 20;
      this.firePower = 5;
      this.accuracy = .7;
    }
    getHull(){
        return this.hull;
    }
    getFirePower(){
        return this.firePower;
    }
    getAccuracy(){
        return this.accuracy;
    }
    setHull(value){
        this.hull = value;
     }
}//end of Spaceshipclass
class USSShip extends SpaceShip{
    constructor(){
        super();
        this.name= 'USS Assembly';  
    }

}//end of USSShip class
class alienShip extends SpaceShip{
    constructor(){
        super();
        this.name ='Alien';
        this.hull= this.#randomValue(3,6);
        this.firePower=this.#randomValue(2,4);
        this.accuracy=this.#randomValue(.6,.8);

    }

#randomValue(minInclusive,maxExclusive){
    let min;
    let max;
    if(minInclusive< 1 && maxExclusive< 1){
        min =Math.ceil(minInclusive*10);
        max= Math.floor(maxExclusive*10);
        return(Math.floor(Math.random()*(max-min)+min)/10);

    }else{
        let min= Math.ceil(minInclusive);
        let max = Math.floor(maxExclusive);
        return Math.floor(Math.random()*(max-min)+min);
    }
}
}
let USSShip1= new USSShip();
let USSShip2= new USSShip();
console.log(USSShip1);
console.log(USSShip1)
let alienShip1= new alienShip();
let alienShip2 = new alienShip()
console.log(alienShip1);
console.log(alienShip2)

  
//     class HumanShip {
//         constructor(){
//             this.hull=20;
//             this.firePower= 5;
//             this.accuracy=.7;
//         }
//     }
//     class AlienShip {
//         constructor(hull,firePower,accuracy){
//         this.hull = randomHull(3,6)
//         this.firePower = randomFirePower(2,4)
//         this.accuracy = randomAccuracy()
//     }
//     }
//     function randomHull(min, max){
//         return Math.floor(Math.random() * (max - min+1) + min)
// }
    
//    function randomFirePower(min, max){ 
//         return Math.floor(Math.random() * (max - min+1) + min)
//    }
//     function randomAccuracy() {
//         return (Math.floor(Math.random() * 3) + 6) / 10
//     }


//     // makeNewBadGuy(damage, health, attackShout) {
//     //     const newBadGuy = new BadGuy(this.factoryType, damage, health, attackShout);
//     //     this.badGuyCollection.push(newBadGuy);
//     //   }
    
//   let alienShip1 = new AlienShip
//   let alienShip2 = new AlienShip
//   let alienShip3 = new AlienShip
//   let USSHumanShip = new HumanShip
// //   let createShipFactory = new ShipFactory

// // //   for(let i=0; i<=5;i++){
// //     let alienShip[i]=new AlienShip
// //     alienArr.push(alienShip[i])
// //   }
// //   alienArr.push(alienShip)
//     console.log(alienShip1)
//     console.log(alienShip2)
//     console.log(alienShip3)
//     console.log(alienArr)
//     console.log(USSHumanShip)
    //console.log(createShipFactory)
   //const  battleWinCheck= alienShip
