interface Square {
    type:"square"
    size: number;

}

interface Rectange {
    type: "rectangle";
    height: number;
}

interface Circle {
    type: "circle",
    daius: number;
}
//Typo de dato  Union
type Shape  = Square | Rectange | Circle;

function print(shape:Shape) {
    switch(shape.type){
        case"square":
        shape.size  && console.log("Size is : ", shape.size);
            break;
        
        case "rectangle":
           shape.height && console.log("Height is : ", shape.height);
           break;

           case "circle":
             shape.daius && console.log("Dias is : ", shape.daius);
    }
     }

     const myShape: Shape = {
        type: "square",
        size: 5,
    };
    
    print(myShape);