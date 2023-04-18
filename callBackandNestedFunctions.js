//callback - function is a function passed as parameter


function ArithmaticOperation(oprn, val1, val2) {
    if(oprn == "Add"){
        return val1 + val2
    }else{
        return val1 * val2
    }
}

function DoAddition(callback, param1, param2) {
    console.log(callback("Add", param1, param2))
}


function Multiply(func, param1, param2) {
    console.log(func("Multiply", param1, param2))
}

DoAddition(ArithmaticOperation, 5, 3)
Multiply(ArithmaticOperation, 5, 9)

setTimeout(function() {
    DoAddition(ArithmaticOperation, 9, 3)
}, 1000)


//write a callback function to print details of the user, calling function should be GetUserInfo