const givenJson=
`{
    "name": "Alex Melon",
    "id": "E00245",
    "role":[
        "Dev",
        "DBA"
    ],
    "age":23,
    "doj":"11-12-2019",
    "married":false,
   "address":{
    "street":"32 Laham st",
    "city":"Innsbruck",
    "country":"Austria"
    },
"referred-by":"E0012"
}`;
const objDetails=JSON.parse(givenJson);
console.log(`1.convert and log object`);
console.log(objDetails);
console.log(`2.log role DEV`);
console.log(objDetails.role[0]);
console.log(`3.log last name Melon`);

console.log(objDetails.name.split(" ")[1]);
console.log(`4.log last name Melon`);

console.log(objDetails.doj.split("-")[2]);
