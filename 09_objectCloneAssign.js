console.log("1.Create the object bankSbi with 4 properties");
const bankSbi = {
  bankName: "SBI",
  branch: "Shivaji Nagar",
  iFSCCode: 123456,
  address: "Pune",
};

console.log("2.Create the object bankLocation with properties street,city,pin");
const bankLocation = {
  street: "JM Road",
  city: "Shivaji Nagar",
  pin: 411009,
};
//console.log(bankLocation);
console.log("3. Clone Step 1 and Step 2 Using Object.assign()");
const cloneObject = Object.assign(bankSbi, bankLocation);
console.log(cloneObject);

console.log(
  "4.Create the object rateOfInterest with properties homeLoanInterest,personalLoanInterest,dueInterest"
);
const rateOfInterest = {
  homeLoanInterest: 8.3,
  personalLoanInterest: 12.05,
  dueInterest: 13.1,
};

console.log("5. Merge Step 1, Step 2 and Step 4 object in sbiDetails object");
const sbiDetails = Object.assign(bankSbi, bankLocation, rateOfInterest);
console.log(sbiDetails);

console.log(`6. Traverse the step 5 object using for in loop `);


  for (const key in sbiDetails) {
    console.log(`${key}==> ${sbiDetails[key]}`);
  
}
