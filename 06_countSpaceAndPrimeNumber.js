function isPrime(num)
{
    for (let index = 2; index < num; index++) {
        if (num % index == 0) {
            return false;
        }
    }
    return true;
}


const array=[3,9,7,6,19,29,53];
console.log(`Given array ${array}`);
let cnt=0;
let isPrimeNum=false;
for (const arrNum of array) {
    isPrimeNum=isPrime(arrNum);
    if (isPrimeNum) {
        cnt++;
    }
}
console.log(`Total prime number is : ${cnt}`);

console.log(`Count space from given string `);

function spaceCount(str)
{
    let cnt=0;
    let split=str.split("");   
    for (const iterator of split) {       
    
    if (iterator==' ') {
        cnt++;
    }
    
}
return cnt;
}
let str="Revision is the mother of success";
let result=spaceCount(str);
console.log(`Given string is '${str}' and total number of spaces are : ${result}`);
 str="Java Script is the language of internet world";
 result=spaceCount(str);
console.log(`Given string is '${str}' and total number of spaces are : ${result}`);