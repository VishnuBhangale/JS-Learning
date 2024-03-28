console.log(`1. Create object professor`);
console.log(`2. Adding nested object degrees`);
console.log(`3. Adding array certificates inside object`);
const professor={
    Name:"Ram",
    age:35,
    salary:50000,
    experience:'5 years',
    expertise: 'Math',
    college:'COEP',
    city:'Pune',
    degrees:{
        engineering: 'CSC', 
        PHD : 'Adv Computing'
    },
    certificates: ['Hacker Rank Participation','Certificate in IFE course', 'Certificate in Adv Programming']

}
console.log(professor);
console.log(`4. Adding "totalExperience" property in object `);
professor.totalExperience="14 years";

console.log(professor);
console.log(`5. modify existing property "totalExperience" in object `);
professor.totalExperience="10 years";
console.log(professor);
console.log(`6.Add one new certificate "Oracle Certified" at the 2nd index of array certificates`);
professor.certificates.splice(2,0,'Oracle Certified')
console.log(professor);
console.log(`7. Log the last element of the array certificates.`);
console.log(professor.certificates.pop());
console.log(`8. Log complete object on console.`);
console.log(professor);
console.log(`9. Traverse array certificates using for of loop`);
for (const item of professor.certificates) {
    console.log(`Certificates : ${item}`);
}
