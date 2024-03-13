
function stringHandsOn()
{
    var str="   Hey you are doing good, keep it up   ";
    console.log(`Step 1: Given string is:  ${str}`);    
    var len=str.length;
    console.log(`Step 2: Length of string is:  ${len}`);
    var strTrim=str.trim();
    console.log(`Step 3: String after Trim : ${strTrim}`);
    var strTrimLength=strTrim.length;
    console.log(`Step 4: Total Number of extra spaces : ${len-strTrimLength}`);
    console.log(`Step 5: First character after trim : ${strTrim.charAt(0)} , Last character after trim ${strTrim.charAt(strTrimLength-1)}`);
    var totalWord=strTrim.split(" ");
    console.log(`Step 6: Total Number of word after trim : ${totalWord.length}`);
    console.log(`Step 7: Index of word "good" is : ${str.indexOf('good')}`);
    console.log(`Step 8: Substring starting from index 22 : ${str.substring(22,str.length)}`);
    console.log(`Step 9: String end with "up" after trim : ${strTrim.endsWith('up')}`);
    console.log(`Step 10: String start with "Hey" after trim : ${strTrim.startsWith('Hey')}`);
}
stringHandsOn();
