
console.log("1) WAP to print numbers from 5 to 15 by incrementing 1");
var str='';
for (let index = 5; index <= 15; index++) {
    str+= index+ " ";
  
}
console.log(`Output : ${str}`);
console.log("2) WAP to print numbers from 50 to 40. decrementing by 1");
var str1='';
for (let index = 50; index >= 40; index--) {
    str1 += index + " ";
}
console.log(`Output : ${str1}`);

console.log("3) WAP to find first 15 odd numbers");
var str2='';
var cnt = 0;
for (let index = 0; cnt < 15; index++) {
  if (index % 2 == 1) {
    str2 += index + " ";
    cnt = cnt + 1;
  }
}
console.log(`Output : ${str2}`);

console.log("4) WAP to find first 10 even numbers");
var str3='';
var cnt = 0;
for (i = 0; cnt < 10; i++) {
  if (i % 2 == 0) {
    str3 += i + " ";
    cnt = cnt + 1;
  }
}
console.log(`Output : ${str3}`);

console.log("5) WAP to print table of 5 like 5 10 15 20 25...... 50");
var cnt = 5;
var str4='';
for (i = 1; i <= 10; i++) {     
    str4 += i * cnt + " ";
}
console.log(`Output : ${str4}`);

console.log("6) WAP to print table of 10 like 10 20 30 40 ......100");
var cnt = 10;
var str5='';
for (i = 1; i <= 10; i++) {     
    str5 += i * cnt + " ";
}
console.log(`Output : ${str5}`);

console.log("7) WAP to print table of 10 in reverse order like  100 90 80 70 ...... 10");
var cnt = 10;
var str6='';
for (i = 10; i >= 1; i--) {     
    str6 += i * cnt + " ";
}
console.log(`Output : ${str6}`);
