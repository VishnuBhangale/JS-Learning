function isPrime(num)
{
    for (let index = 2; index < num; index++) {
        if (num % index == 0) {
            return false;
        }
    }
    return true;
}
let num=7;
let result=isPrime(num);
console.log(`is ${num} is prime number : ${result}`);

 num=9;
 result=isPrime(num);
console.log(`is ${num} is prime number : ${result}`);

