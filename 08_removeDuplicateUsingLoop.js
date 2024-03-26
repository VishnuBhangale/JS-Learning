let arrayNumbers = [2, 4, 1, 7, 9, 8, 7, 4, 1];
let unique=[];
console.log(`Given Array: ${arrayNumbers}`);
for (let index = 0; index < arrayNumbers.length; index++) {
    if (!unique.includes(arrayNumbers[index]))
    {
        unique.push(arrayNumbers[index]);
    }
}
console.log(`After Remove Duplicate result: ${unique}`);