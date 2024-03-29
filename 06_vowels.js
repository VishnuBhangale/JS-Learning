const str="I am Vishnu UI Developer";
let strVowels="a,e,i,o,u";
//let word=str.toLocaleLowerCase().split("");
let cnt=0;
let vowels='';
console.log(`=======================`);
console.log(`Given String:  ${str}`);
for (const item of str.toLocaleLowerCase()) {
    if(strVowels.includes(item))
       {
        vowels+=item + ','
       cnt++;
    }
} 
console.log(`Vowels in string is : ${vowels} and count is : ${cnt}`);
console.log(`=======================`);


