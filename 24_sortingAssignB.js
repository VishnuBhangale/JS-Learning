class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) 
    { this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company=emp_company;
    }
   
}
const emp_anil = new Employee (22, "Anil", "IT", 50000, "TCS"); 
const emp_radha = new Employee (33, "Radha", "HR", 74000, "Wipro"); 
const emp_rishi = new Employee (55, "Rishi", "Finance", 47000, "TCS"); 
const emp_sonali = new Employee (66, "Sonali", "Finance", 45000, "Infy");
 const emp_monika = new Employee (77, "Monika", "IT", 40000, "Wipro"); 
 const emp_viny = new Employee (88, "Vinayak", "IT", 75000, "TCS"); 
const emp_mahi = new Employee (99, "Mahesh", "HR", 85000, "Infy");

let arrayEmps=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

console.log(`1. sorting arrayEmps descending order of emp id's`);
let sortedEmps=arrayEmps.sort().reverse();
sortedEmps.forEach(element=>{
    console.log(`Emp Id : ${element.emp_id} , Name : ${element.emp_name}, Department: ${element.emp_dept}`);
});
console.log(`======================================================`);
console.log(`2.sort arrayEmps as an ascending order of employee department `);
sortedEmps.sort( (p1,p2) => {
    return p1.emp_dept >= p2.emp_dept ? 1: -1;
});
sortedEmps.forEach(element=>{
    console.log(`Emp Id : ${element.emp_id} , Department: ${element.emp_dept}, Company : ${element.emp_company},`);
});

console.log(`======================================================`);
console.log(`3.sort arrayEmps as an descending order of employee salary `);
sortedEmps.sort( (p1,p2) => {
    return p1.emp_salary >= p2.emp_salary ? -1 : 1;
});
sortedEmps.forEach(element=>{
    console.log(`Name : ${element.emp_name} , Salary : ${element.emp_salary}, Department: ${element.emp_dept}`);
});