/* function copy(object, config){

    return {...object, ...config};


}

const obj = {name: "valera" , lastname: "pup"};
const newObj = copy(obj);

console.log(obj);
console.log(newObj);

obj === newObj;

 */


arr = [1,2,2,2,3,4,4,5,5]

 function filter(...string) {
    
    Arr = [string];
    newArray = new Set(string);
    return [...newArray];
}

console.log(filter(1,2,2,3,4,1)); 

console.log(filter(...arr));