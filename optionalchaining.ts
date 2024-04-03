interface Media {

    title: string,
    genre: string[],
    director?: {name: string}
}

const fetchmediaData : Media = {
    title: "el origen",
    genre:  ["ciencia ficción", "Acción"],
  //  director: { name: "Christopher Nolan" },

};

console.log(fetchmediaData.director?? 'Director no encotrado');