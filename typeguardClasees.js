"use strict";
class Bird {
    fly() {
        console.log('Volando');
    }
}
class Fish {
    swim() {
        console.log('Nadando');
    }
}
function printPetos(pets) {
    if (pets instanceof Bird)
        pets.fly();
}
const pets = new Fish();
printPetos(pets);
