                    
let isGameOver = false
class AlienShipFactory{
    constructor(){
        this.alienShipCollection=[]
    }
    makeAlienShip(name){
        const newAlienShip=new AlienShip(name)
        this.alienShipCollection.push(newAlienShip)
    }
    printAlienShips()  {
        for(let AlienShip of this.alienShipCollection){
        console.log(AlienShip)
    }
}
}


class USSShip{
    constructor(name) {
      this.name=name 
      this.hull= 20
      this.firePower = 5
      this.accuracy = .7
    }
    attack(evilAlien){
        checkGame() 

        
        if(isGameOver == false){
            if(this.hull>0){
                console.log(`I ${this.name} have ${this.hull} life left`)
                if(Math.floor(Math.random()*Math.floor(9))/10<= this.accuracy){
                    evilAlien.hull-= this.firePower
                    console.log(`you hit the ${evilAlien.name}and they have ${evilAlien.hull} life left`)
                }else{
                 evilAlien.firePower-=this.hull
                }
            }else{
                console.log('You missed it')
                if(evilAlien.hull>0){
                    evilAlien.firePower-=this.hull

                }
            }
        
      }
    }
}

    class AlienShip {
            constructor(){
               // super();
                //this.name ='Alien';
                this.hull= this.#randomValue(3,6)
                this.firePower=this.#randomValue(2,4)
                this.accuracy=this.#randomValue(.6,.8)
            }
            death(){
                alienShipGenerator.alienShipCollection.shift()

            }
            alienAttack(MyShip){
                if(this.hull>0){
                    console.log(`The ${this.name} has ${this.hull} life left`)
                    if(Math.floor(Math.random()*Math.floor(9))/10 <= this.accuracy){
                        MyShip.hull-=this.firePower
                        console.log(`${this.name} hit you and you have ${MyShip.hull} life left`)
                    }if(MyShip.hull<= 0){
                        console.log('You are dead' )
                    }else if(this.hull <= 0){
                        console.log('Hurray!, you won')
                    }
                }
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
            //this is not working
            // variables for modal
        //     const modal = document.querySelector(".modal")
        // const trigger = document.querySelector(".trigger")
        //     const closeButton = document.querySelector(".close-button")
        //     const modalPlay = document.querySelector(".modal-play")
        //     const modalRetreat = document.querySelector(".modal-retreat")

            let alienShipGenerator= new AlienShipFactory()
            alienShipGenerator.makeAlienShip('Alien ship 1')
            alienShipGenerator.makeAlienShip('Alien ship 2')
            alienShipGenerator.makeAlienShip('Alien ship 3')
            alienShipGenerator.makeAlienShip('Alien ship 4')
            alienShipGenerator.makeAlienShip('Alien ship 5')
            alienShipGenerator.makeAlienShip('Alien ship 6')

            let MyShip = new USSShip('USS Generator')
            console.log(alienShipGenerator.alienShipCollection)
            
         let myGameRound={
            toggleModal(){
                modal.classList.add("show-modal")

            },
             closeModal(){
                // modal.classList.remove("show-modal")

             },
            promptMyModal(event){
                if(event.target === alienShipGenerator.alienShipCollection[0]){
                    toggleModal()
                }

            },
            continueToPlay(){
                modal.classList.remove("show-modal")
                doBattle()
            },
            endThisGame(){
                console.log('The game is over')
            }
         } 
         //This is not working
        //  trigger.addEventListener("click",myGameRound.toggleModal)  
        //  closeButton.addEventListener("click",myGameRound.closeModal)  
        //  window.addEventListener("load",myGameRound.promptMyModal)  
        //  modalPlay.addEventListener("click",myGameRound.continueToPlay)  
        //  modalRetreat.addEventListener("click",myGameRound.endThisGame)  


         alienShipGenerator.alienShipCollection[0].hull=10

         alienShipGenerator.alienShipCollection[0].alienAttack(MyShip)


         function doBattle(){
            let alien = alienShipGenerator.alienShipCollection[0]
            while(true){
                console.log(alien)
                console.log(alienShipGenerator.alienShipCollection)
               MyShip.attack(alien)
               if(alien.hull>0){
               alien.alienAttack(MyShip)
               }else{
                console.log('ship is dead')
                alien.death()
                if(alienShipGenerator.alienShipCollection.length >0){
                    setTimeout(()=>{
                        myGameRound.toggleModal()
                    },600)
                }else{
                    myGameRound.endThisGame()
                }
                return
               }
            }
        }

         doBattle()   
         
