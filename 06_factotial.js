function factorial(num){
    let fact=1;
    for (let index = num; index >= 1; index--) {
         fact=fact*index;     
    }
    console.log(`Factorial of number ${num} is: ${fact}`);
}
factorial(5);
factorial(1);
factorial(0);
