"use strict";
function printPet(pet) {
    if ("jump" in pet)
        pet.jump();
}
printPet({
    jump: () => {
        console.log("Nadando");
    },
});
function printPets(pets) {
    if (pets) {
        pets.run();
    }
}
printPets({
    run: () => {
        console.log("Corriendo"); //
    },
});
