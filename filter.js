const numbers = [1, 2, 3, 4, 5];
const testScorePercentages = [95, 77, 40, 63, 85, 90, 70];

const getEvens = (arr) => {
    let output = [];
    
    for (const number of arr) {
        if(number % 2 === 0){
            output.push(number);
        }
    }
    return output;
}

const getEvens1 = (arr) => {
    return arr.filter((number) => number % 2 === 0 )
}

// console.log(getEvens1(numbers));

const persons = [
    { name: 'Rick', age: 70 },
    { name: 'Morty', age: 14 },
    { name: 'Summer', age: 17 },
    { name: 'Beth', age: 34 },
];

const drinkingPersonsAge = persons.filter((person) => person.age > 21).map((person) => person.name)

console.log(drinkingPersonsAge)

console.log(persons)