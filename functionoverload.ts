type StringOrArray = string[] | string;

function reverse(stringorArray:string):string;
function reverse(stringorArray:string[]):string[];
function reverse(stringorArray:StringOrArray):StringOrArray {

    return typeof stringorArray === "string" ?
    stringorArray 
    .split("") // convert the string into an array of
    .reverse()
    .join("")
    :stringorArray.slice().reverse();
    
}

const output = reverse(['a','b','c','d']);
output.map

const output_dos = reverse('amelia');
output_dos.slice;


console.log(output);// dcba