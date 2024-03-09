console.log("==============STEP 1=============");
var bankName;
console.log("==============Before Initialization=============");
var typeOfBankName=typeof bankName;
console.log("Bank Name Value:", bankName);
console.log("Data Type of BankName:",typeOfBankName);

bankName="SBI Bank";
console.log("==============After Initialization=============");
typeOfBankName=typeof bankName;
console.log("Bank Name Value:", bankName);
console.log("Data Type of BankName:",typeOfBankName);

console.log("==============STEP 2=============");
var marks='90%';
typeOfmark=typeof marks;
console.log("Marks Value:", marks);
console.log("Data Type of marks:",typeOfmark);

console.log("==============STEP 3=============");
var isWorking;
console.log("==============Before Initialization=============");
var typeOfisWorking=typeof isWorking;
console.log("isWorking Value:", isWorking);
console.log("Data Type isWorking:",typeOfisWorking);

isWorking=true;
console.log("==============After Initialization=============");
typeOfisWorking=typeof isWorking;
console.log("isWorking Value:", isWorking);
console.log("Data Type of isWorking:",typeOfisWorking);

console.log("==============STEP 4 a =============");
var totalCount="Hundred and Seven";
var typeOftotalCount=typeof totalCount;
console.log("TotalCount Value:", totalCount);
console.log("Data Type totalCount:",typeOftotalCount);
totalCount=107;
console.log("==============STEP 4 b After Update Variable=============");
typeOftotalCount=typeof totalCount;
console.log("TotalCount Value:", totalCount);
console.log("Data Type of TotalCount:",typeOftotalCount);