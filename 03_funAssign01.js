console.log("===========Assignment 01=============");
console.log("===========STEP 01=================");
function functionOne()
{
    console.log("This is Vishnu");
}
function functionTwo()
{
    console.log("I am a UI developer");
}
functionOne();
functionTwo();

console.log("===========STEP 02=================");
function personalDetails(firstName,lastName,collegeName)
{
    console.log("My first name is : ", firstName);
    console.log("My last name is : ", lastName);
    console.log("My collegeName name is : ", collegeName);
}
personalDetails("Vishnu","Bhangale","IMR college Jalgaon");

console.log("==========STEP 03===============");
function swapValues(arg1,arg2)
{
    console.log("Before swap the value arg1: ",arg1," arg2: " ,arg2);
    var temp=arg1;
    arg1=arg2;
    arg2=temp
    console.log("After swap the value arg1 : ",arg1,"arg2 : ", arg2);
}
swapValues("Virat","Anushka");
swapValues(1000,2000);
console.log("==========STEP 04===============");
function addThreeValue(arg1,arg2,arg3)
{
    console.log("Before addition value arg1: ",arg1," arg2: " ,arg2," arg3: " ,arg3);
    var result=arg1 + arg2 + arg3;
    console.log("Addition is : ",result);
}
addThreeValue(10.23,600,40);
addThreeValue("Hello"," Good"," Morning");