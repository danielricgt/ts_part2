//una interseccion es combniar tipos

type User = {
    name: string,
    startDate: Date
}

type Admin = {
    name: string,
    permission: string [];
}

type UserAdmin= User & Admin;


const doctor: UserAdmin = {
    name: "Rodrigo",
    startDate: new Date(),
    permission: ["Ver paciente"],

};

//union types tambien se puede interfaces

interface Dog  {

    name: string;
    birthDate: Date;


}

interface Mammal {
    tipo: string,
    raza: string[]

}

interface DogMammal extends Dog,Mammal{

}


const bulldog: DogMammal = {
    name: "Zeus",
    tipo: "Bulldog Frances",
    birthDate: new Date(),
    raza:['Frances']

}
