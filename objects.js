//objects are reference type and is the top level of heirarchy in javascript
//Object class is used like a class to get features like : inheritance and polymorphims

var Employee = {
    EmpName : "David",
    EmpID : 1,
    getEmployeeDetail : function () {
        return this.EmpName +" "+ this.EmpID
    }
}

//console.log(Employee.getEmployeeDetail())

//1. one way to create object in js is by using new keyword
//i am copying the Employee references to SE
// var SoftwareEngg = new Object(Employee);

// SoftwareEngg.Specialist = "MERNStack"

// console.log(Employee.getEmployeeDetail())
// console.log(SoftwareEngg.getEmployeeDetail())

//2.  by using create method of object we can create clone of parent

var SoftwareEngg = Object.create(Employee);

SoftwareEngg.EmpName = "Tien"

SoftwareEngg.Specialist = "MERNStack"

//over-riding happens here
SoftwareEngg.getEmployeeDetail = function () {
    return this.EmpName +" "+ this.EmpID +" " + this.Specialist
}

console.log(Employee.getEmployeeDetail())
console.log(SoftwareEngg.getEmployeeDetail())