var fruits_Seasonal=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`1. Log the first and last element on console`);
console.log(fruits_Seasonal);
console.log(`First Element : ${fruits_Seasonal[0]}, Last Element : ${fruits_Seasonal[fruits_Seasonal.length-1]}`);
console.log(`2. Add element Papaya before the element 'Banana' and then log array on console`);
console.log(fruits_Seasonal);
 fruits_Seasonal.unshift("Papaya");
console.log(fruits_Seasonal);
console.log(`3. Remove 'Mango' from the array`);
var fruits_Seasonal=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruits_Seasonal);
 var sub_Array=fruits_Seasonal.splice(3,1)
 console.log(fruits_Seasonal);
 console.log(`4.Add element or insert an element 'Pineapple' at the last position`);
 var fruits_Seasonal=["Banana","Orange","Apple","Mango","Water Melon"];
 console.log(fruits_Seasonal);
 fruits_Seasonal.push("Pineapple");
 console.log(fruits_Seasonal);
 console.log(`5. Insert an element -'Dragon Fruit' before "Water Melon" `);
 var fruits_Seasonal=["Banana","Orange","Apple","Mango","Water Melon"];
 console.log(fruits_Seasonal);
 fruits_Seasonal.splice(4,0,"Dragon Fruit")
 console.log(fruits_Seasonal);
 console.log(`6. Replace an element 'Orange' with 'Kiwi'`);
 var fruits_Seasonal=["Banana","Orange","Apple","Mango","Water Melon"];
 fruits_Seasonal[1]="Kiwi";
 console.log(fruits_Seasonal);
 console.log(`7. Log the elements starting from index 1 to 4`);
 var fruits_Seasonal=["Banana","Orange","Apple","Mango","Water Melon"];
 var subArray=fruits_Seasonal.slice(1,4);
 console.log(subArray);
 console.log(`8. Only select last 3 element and log on console: Use the length property`);
 var fruits_Seasonal=["Banana","Orange","Apple","Mango","Water Melon"];
 console.log(fruits_Seasonal);
 subArray=fruits_Seasonal.slice(fruits_Seasonal.length-3);
 console.log(subArray);


