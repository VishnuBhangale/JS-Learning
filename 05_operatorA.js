console.log("===============STEP 1=================");

function squareOfLength(str)
{
    console.log(`Length of word "${str}" is : ${str.length} and Square of Length is : ${str.length*str.length}`);
}

squareOfLength("javaScript");
squareOfLength("Google Chrome");
squareOfLength("Developer Smart");

console.log("===============STEP 2=================");
function operator(){
    var str="I am Angular Developer";
    var totalLength=str.length;
    var totalWord=str.split(" ").length;
    console.log(`Result of division for string length by total number of word is  :${totalLength/totalWord}`);
    console.log(`Result of Multiplication of string length and total number of word is  :${totalLength*totalWord}`);
}
operator()