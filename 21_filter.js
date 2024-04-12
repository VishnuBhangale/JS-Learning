let array=[2,4,1,7,8,9];
const newArray=array.filter( (element)=> {
  return element % 2 == 0;
}  );
console.log(newArray);

console.log(`Multiple of 3 from an array`);
let arrayNum = [21,42,1,7,8,9]
const multipleOfThree=arrayNum.filter( (element)=>{
        return element % 3 ==0;
}  );

console.log(multipleOfThree);