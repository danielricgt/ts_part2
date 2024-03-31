interface Perrito {
  run(): void;
}

interface Gat {
  jump(): void;
}

type UnknowPet = Perrito | Gat;

function printPet(pet: UnknowPet) {
  if ("jump" in pet) pet.jump();
}

printPet({
  jump: () => {
    console.log("Nadando");
  },
});

function printPets(pets: UnknowPet) {
  if (pets as Perrito) {
    (pets as Perrito).run();
  }
}

printPets({
    run:() => {  
    console.log("Corriendo"); //

 },
  })
