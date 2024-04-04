class Student{
    rollNumber
    name
    division
    constructor(rollNumber,name,division)
    {
        this.rollNumber=rollNumber;
        this.name=name,
        this.division=division;
    }
    getDetail()
    {
        console.log(`Student Details => Roll Number: ${this.rollNumber}, Name: ${this.name}, Division: ${this.division}`);
    }
}
const jenny=new Student(1,"Jenny","A");
jenny.getDetail();
const bill=new Student("2","Bill","B");
bill.getDetail();
const elon = new Student("3", "Elon", "C");
elon.getDetail();
