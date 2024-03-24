const arrayNumber=[20,31,40,25,23,11,29,9,60,2,11];
// 1
console.log(`1.Find the total elements available or length and log on console `);
console.log(`Given Array [${arrayNumber}]`);
console.log(`Output: ${arrayNumber.length}`);
// 2
console.log(`2. Log the first element and last element in arrayNumbers and log on console `);
console.log(`Given Array [${arrayNumber}]`);
console.log(`Output: First Element ${arrayNumber.shift()} , Last Element ${arrayNumber.pop()}`);
// 3
console.log(`3. Log the third last element using length property and log on console`);
console.log(`Given Array [${arrayNumber}]`);
console.log(`Output: Third last element Using length ${arrayNumber[arrayNumber.length-3]}`);

// 4
console.log(`4.Find the all even numbers using for of loop and log on console`);
console.log(`Given Array [${arrayNumber}]`);
let even_Numbers='';
for (const item of arrayNumber) {
    if  (item % 2==0)
    {
        even_Numbers+=item+',';
    }
}
console.log(`Output: all even number are  ${even_Numbers}`);

// 5
console.log(`4.Find the odd numbers using for of loop and log on console`);
console.log(`Given Array [${arrayNumber}]`);
let odd_Numbers='';
for (const item of arrayNumber) {
    if  (item % 2!=0)
    {
        odd_Numbers+=item+',';
    }
}
console.log(`Output: all odd number are  ${odd_Numbers}`);

// 6
console.log(`6. Find all the even positioned elements from arrayNumbers, sum it and log on console`);
console.log(`Given Array [${arrayNumber}]`);
 even_Numbers='';
 var sum=0;
for (const item of arrayNumber) {
    if  (item % 2==0)
    {
        even_Numbers+=item+',';
        sum=sum+item;
    }
}
console.log(`Output: all even number are  ${even_Numbers} and sum is ${sum}`);

// 7
console.log(`7. Find all the odd positioned elements from arrayNumbers, sum it and log on console`);
console.log(`Given Array [${arrayNumber}]`);
 odd_Numbers='';
 var sum=0;
for (const item of arrayNumber) {
    if  (item % 2 !=0 )
    {
        odd_Numbers+=item+',';
        sum=sum+item;
    }
}
console.log(`Output: all odd number are  ${odd_Numbers} and sum is ${sum}`);

// 8
console.log(`8. Find the sum of all elements from arrayNumbers, log on console`);
console.log(`Given Array [${arrayNumber}]`);
 var sum=0;
for (const item of arrayNumber) {

        sum=sum+item;
}
console.log(`Output: sum of all array element is :  ${sum}`);


// 9
console.log(`9.Find the numbers which are multiple of 5`);
console.log(`Given Array [${arrayNumber}]`);
 var sum=0;
 let multipleOf5='';
 for (const item of arrayNumber) {
        if(item % 5 ==0)
        {
            multipleOf5 +=item +',';
        }
}
console.log(`Output: Multiple of 5 numbers :  ${multipleOf5}`);

// 10
console.log(`10. Is number 115 available in arrayNumbers ?`);
console.log(`Given Array [${arrayNumber}]`);
var isNumberAvailable=arrayNumber.includes(115) ? true : false;
console.log(`Output: Is number 115 available :  ${isNumberAvailable}`);

// 11
console.log(`11. Is number 23 available in arrayNumbers ?`);
console.log(`Given Array [${arrayNumber}]`);
var isNumberAvailable=arrayNumber.includes(23) ? true : false;
console.log(`Output: Is number 23 available :  ${isNumberAvailable}`);

// 12
console.log(`12. Insert numbers → 55, 66 at index 3 and log array on console`);
console.log(`Given Array [${arrayNumber}]`);
arrayNumber.splice(3,0,55,66);
console.log(`Output: ${arrayNumber}`);

// 13
console.log(`13. Delete 3 elements starting from index 4 and log arrayNumbers on console`);
console.log(`Given Array [${arrayNumber}]`);
var deleteElement=arrayNumber.splice(4,3)
console.log(`Output: ${deleteElement}`);