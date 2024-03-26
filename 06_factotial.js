function factorial(num) {
    var result='';
  if (num < 0 || num == null || num == "undefined" || num == "NaN") {
    console.log(`Invalid input ${num}`);
  } else {
    let fact = 1;
    for (let index = num; index >= 1; index--) {
      fact = fact * index;
    }
    console.log(`Factorial of number ${num} is: ${fact}`);
  }
}
factorial(5);
factorial(3);
factorial(null);
factorial(8);
factorial(undefined);
factorial(9);
factorial(0);
factorial(-2);
