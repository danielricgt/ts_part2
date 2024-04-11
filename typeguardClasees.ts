class Bird {
    fly():void{
        console.log('Volando');
    }
}

class Fish {
    swim():void{
        console.log('Nadando');
    } 
}

type UnknowPets = Fish | Bird;



function printPetos(pets: UnknowPets) {
  if (pets instanceof Bird) pets.fly();
  }


const pets = new Fish();
printPetos(pets);

