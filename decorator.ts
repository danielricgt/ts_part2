
interface ApiEndPoint {
    get():string[];
    post(request:string):void;

}
let httpServer:{[key:string]:ApiEndPoint} = {};

@registerEndPoint
class Families implements ApiEndPoint {
    private houses = ['Lanister','Targaryen']

    get(){

        return this.houses;
    }

    post(request:string){
      this.houses.push(request);  
    }
}
@registerEndPoint
class Castles implements ApiEndPoint{
    private castles = ['Winterfell','Casterly Rock']

    get(){

        return this.castles;
    }

    post(request:string){
      this.castles.push(request);  
    }
}

function registerEndPoint(target:any){  
    const className = target.name;
    const endpointPath = "/"+className.toLowerCase();
    httpServer[endpointPath] = new target();
}

//registerEndPoint(Families);
//registerEndPoint(Castles);

console.log(httpServer);

console.log(httpServer['/castles'].get());
httpServer['/castles'].post('Winterfell');
console.log(httpServer['/castles'].get());
