//length
console.log("======= length=====");
var greet = "Good Morning";
var totalChars = greet.length;
console.log("Total number of chars is:" , totalChars);

//charAt()
console.log("======= charAt() =====");
var charAt0 = greet.charAt(0);
console.log("Character at index 0 is: ", charAt0);

var charAt6 = greet.charAt(6);
console.log("Character at index 6 is: ", charAt6);

var charAt11 = greet.charAt(11);
console.log("Character at index 11 is: ", charAt11);

var sentence = "When you join meetings, webinars, chats or channels hosted on Zoom, your profile information";
var totalChars = sentence.length;
var lastChar = sentence.charAt(totalChars-1);
console.log("Last char is:" , lastChar);
console.log("===========indexOf()============");
var greet = "Good Morning";
var indexOfM = greet.indexOf('M');
console.log("Index of char M is: ", indexOfM);
console.log("========== concat() ==================");
var firstName = "Gajanan";
var lastName= " Kharat";
var resultConcat = firstName.concat(lastName);
console.log("Concat result is:", resultConcat);
console.log("========== replace() ==================")
var greet = "Good Morning";
const afterReplace = greet.replace("Morning", "Afternoon");
console.log(`After replace string is: ${afterReplace}`);

console.log(`========== toUpperCase() ==================`);
var greet = "Good Morning";
var greetInUpperCase = greet.toUpperCase();
console.log(`${greet} in upper case is : ${greetInUpperCase}`);

console.log(`========== toLowerCase() ==================`);
var greet = "Good Morning";
var greetInLowerCase = greet.toLowerCase();
console.log(`${greet} in lower case is : ${greetInLowerCase}`);

console.log(`========== trim() ==================`);
var greet = " Good Morning ";
var trim = greet.trim();
console.log(`${greet} after Trim  is : ${trim}`);

console.log(`========== Include() ==================`);
var str = "my name is vishnu";
var include = str.includes('name');
console.log(`include result is : ${include}`);

console.log(`========== Include() ==================`);
var str = "my name is vishnu";
var include = str.includes('NAME');
console.log(`include result for NAME is : ${include}`);

console.log(`========== Slice() ==================`);
var str = "Developers World";
var slice = str.slice(0,9);
console.log(`slice result is : ${slice}`);

console.log(`========== Slice() ==================`);
var str = "Developers World";
var slice = str.slice(3,6);
console.log(`slice result is : ${slice}`);

//Get Trim space length
console.log(`========== trim() ==================`);
var greet = "   Good Morning   ";
var lengthBeforeTrim = greet.length;
console.log(` ${greet} it's length is : ${lengthBeforeTrim} `);

var greetAfterTrim = greet.trim();
var lengthAfterTrim = greetAfterTrim.length;
console.log(` ${greetAfterTrim} it's length is : ${lengthAfterTrim} `);

console.log(`Total spaces removed is ${lengthBeforeTrim-lengthAfterTrim}`);

console.log(`========== search() ==================`);
var greet = "Good Morning";
var result = greet.search("Morning");
console.log(`'Morning' is available at ${result}`);

var result = greet.search("r");
console.log(`'r' is available at ${result}`);

console.log(`========== slice() ==================`);
var greet = "Good Morning";
var result = greet.slice(3, 10);
console.log(`Slice is ${result}`);

console.log(`========== split() ==================`);
var greet = "Good Morning";
var resultValue = greet.split(" ")
console.log(resultValue);
console.log(`Total words are: ${resultValue.length}`);

console.log("=========Using Function WAP to count total word from string============");
function totalWord(arg)
{
    var resultValue = arg.split(" ")
    return resultValue.length;
    
}
console.log("=========First String============");
var str1="I am happy Buddy";
var result=totalWord(str1);
console.log(`Total words are: ${result}`);
console.log("=========Second String============");
var str2="I am learning JS the language of internet";
result=totalWord(str2);
console.log(`Total words are: ${result}`);
