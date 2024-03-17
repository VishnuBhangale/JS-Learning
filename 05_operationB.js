console.log("========STEP1===============");
function greaterNumber(num1,num2)
{
 console.log(`Value of Num1: ${num1} and Num2 ${num2}`);

 console.log(`Greatest number is ${num1 > num2 ? num1:num2}`);
}
greaterNumber(10,-10);
greaterNumber(800,899);
console.log("========STEP2===============");

function isEvenOrOdd(num)
{
    return num % 2 == 0 ? "Even":"Odd";       
}
var num=1;
var res=isEvenOrOdd(num);
console.log(`Given number ${num} is ${res} number`);
num=44;
res=isEvenOrOdd(44);
console.log(`Given number ${num} is ${res} number`);
num=0;
res=isEvenOrOdd(0);
console.log(`Given number ${num} is ${res} number`);
num=101;
res=isEvenOrOdd(101);
console.log(`Given number ${num} is ${res} number`);

console.log("========STEP3===============");
function wordLength(str)
{
    var len=str.length;
    return len % 2 == 0 ? "Even" : "Odd"; 
}
var word="JavaScript";
var res=wordLength(word);
console.log(`Given word ${word} length is ${word.length} and it is ${res} number`);
word="developer";
res=wordLength(word);
console.log(`Given word ${word} length is ${word.length} and it is ${res} number`);
word="Google";
res=wordLength(word);
console.log(`Given word ${word} length is ${word.length} and it is ${res} number`);