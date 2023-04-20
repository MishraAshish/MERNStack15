
//javascript is functional programming language - it behaviour oriented

var literals = require("./literals")

console.log(globalThis.myGlobalValue)

console.log(pi);
console.log(Rectangle(5,6));

function Rectangle(length, breadth) {
    return length*breadth;
}

console.log(Rectangle(5,6));

var pi = 3.14; //variable declaration

function Circle(radius) {
    return pi*radius*radius;
}
 


//create a circle function to give circle area


//classes and methods - object oriented
// class Area {
//     int length, breadth, radius;

//     Rectangle(l,b)
//     Square(l)
//     Circle(radius)
// }

// Area rectObj = new Area();
// reactObj.Rectangle(5,6);