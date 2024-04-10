const arrayNumbers=[20,11,40,25,23,11,9,31,60,2,19]
console.log(`Given array ${arrayNumbers}`);

console.log(`1. add 10 to each element and log`);
const addingNumbers=arrayNumbers.map((value)=>{
    return value+10;
});
console.log(addingNumbers);
console.log(`=====================================`);
console.log(`2.cube the each element and log`);
const cubeNumbers=arrayNumbers.map((value)=>{
    return value*value*value;
});
console.log(cubeNumbers);
console.log(`=====================================`);
console.log(`3.Add the index into it's corresponding each array element and log new array result`);
const newArrayNumbers=arrayNumbers.map((value,index)=>{
    return value;
});
console.log(newArrayNumbers);