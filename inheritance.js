console.header("inheritance.js");
console.green("Inheritance chain: \nSome Function ---> Function.prototype ---> Object.prototype ---> null");
//======Person Class========

console.header("Function Inheritance");

function Person(firstName, lastName, age){
  console.class("Person");
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

Person.prototype.getFullName = function(){}

console.msg("new Person()");
var person = new Person("Ashvin", "Suthar", "28");
console.log(person);

//======Employee Class========

function Employee(firstName, lastName, age, empNumber){
  console.class("Employee: Inherits Person: Person.call()");
  Person.call(this, firstName, lastName, age);
  this.empNumber = empNumber;
}

Employee.prototype.getSalary = function(){}

console.msg("new Employee(): Before Prototype Inheritance");
var emp1 = new Employee("Ashvin", "Suthar", "28", "123123");
console.log(emp1);

console.msg("new Employee(): After Prototype Inheritance");
Employee.prototype = Object.create(Person.prototype);
var emp2 = new Employee("Ashvin", "Suthar", "28", "123123");
console.log(emp2);

console.msg("Constructor of Employee");
console.log(Employee.prototype.constructor);

console.msg("new Employee(): After Assigning Constructor");
Employee.prototype.constructor = Employee;
var emp3 = new Employee("Ashvin", "Suthar", "28", "123123");
console.log(Employee.prototype.constructor);
console.log(emp3);



