//Function Expression
function isEven(num) {
    return num % 2 === 0;
}

// Function Declaration
const isEven1 = function (num) {
    return num % 2 === 0;
}

// Arrow Function
const isEven2 = (num) => {
    return num % 2 === 0;
}

const isEven3 = (num) => num % 2 === 0;

const isEven4 = (num, callBack) => {
    return callBack(num)
}

// (num)=>{
//     return num % 2 === 0
// }

console.log(isEven4(2,isEven3))