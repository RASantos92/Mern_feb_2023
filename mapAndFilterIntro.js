const numbers = [1, 2, 3, 4, 5];



const doubleNums = (arr) => {
    let output = [];
    
    for (let i = 0; i < arr.length; i++) {
        output.push(arr[i] * 2)
    }
    
    return output;
}
const doubleNums1 = (arr) => {
    const callBack = (number) => {
        return number * 2
    }
    return arr.map(callBack)
}



console.log(numbers.map((number) => number * 5))
console.log(numbers)
// console.log(doubleNums1(numbers))

const testScorePercentages = [95, 77, 40, 63, 85, 90, 70];


Array.prototype.map2 = function (callBack) {
    const newArr = [];
    for(let i = 0; i < this.length; i++){
        const newItem = callBack(this[i], i, this);
        newArr.push(newItem)
    }
    return newArr;
}

const callBack1 = (numGrade) => {
    if(numGrade < 65){
        return 'F'
    }
    if(numGrade < 70){
        return 'D'
    }
    if(numGrade < 80){
        return 'C'
    }
    if(numGrade < 90){
        return 'B'
    }
    if(numGrade < 100){
        return 'A'
    }
}

const letterGrades = testScorePercentages.map2(callBack1)

// console.log(letterGrades)

const persons = [
    { name: 'Rick', age: 70 },
    { name: 'Morty', age: 14 },
    { name: 'Summer', age: 17 },
    { name: 'Beth', age: 34 },
];

const over21 = (persons) => {
    const output = persons.map((person) => {
        if(person.age > 21){
            return person.name + " is above 21"
        } else {
            return person.name + " is not above 21s"
        }
    })
    return output
}

const over21v2 = (persons) => {
    const output = persons.map((person) => {
        return person.age > 21 ? person.name + " is above 21" : person.name + " is not above 21"
    })
    return output
}

// console.log(over21v2(persons))