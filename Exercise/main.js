 
// // // --- Exercise 1: Working with Variables and Data Types --- // 
 
// //  let name = 'Emmanuel';
// //  let age = 28;
// //  let isStudent = false;
// //  let address = {city:'Accra', country:'Ghana'};
// //  let hobbies = ['Photography', 'Videography', 'Cooking'];
// //  let undefinedVaraible;
// //  let nullVaraible = null;

// // console.log('Name:', name, 'Type:', typeof name);
// // console.log('Age', age, 'Type:', typeof age);
// // console.log('Is Student', isStudent, 'Type:', typeof isStudent);
// // console.log('Address:', address, 'Type:', typeof address);
// // console.log('Hobbies', hobbies, 'Type:', typeof hobbies);
// // console.log(undefinedVaraible, typeof undefinedVaraible);
// // console.log(nullVaraible, typeof nullVaraible);


// // // --- Exercise 2: Calculate Year of Birth --- // 

// // let userName = prompt("Please enter your name: ");
// // let userAge = prompt("Please enter your age: ");


// // // Calculate year of birth 
// // let currentYear = new Date().getFullYear();
// // let yearOfBirth = currentYear - userAge;
// // alert('Hello ' + userName + '! You were born in the year ' + yearOfBirth + '.');


// // -- Conditional Execrcise

// let number = 7;

// if (number > 0) {
//     console.log(number + " is poitive");
// } else if (number < 0) {
//     console.log(number + " is negative");
// } else {
//     console.log(number + " is zero");
// }


// for (let i = 1; i <= 10; i++){
//     console.log(i);
// } 


// function sum(num1, num2) {
//     return num1 + num2;
// }

// let result = sum(5,9);
// console.log('The sum is: ' + result)




// const operation = (num1, num2, calllback) => {
//     return calllback(num1, num2);
// }

// const add = (a,b) => a + b;
// const substract = (a,b) => a - b;

// console.log(operation(5, 3, add)); 
// console.log(operation(5, 3, substract));


// ----------------------------- //



// function operation(num1, num2, callback) {
//     return callback(num1, num2);
// }

// function add(a, b) {
//     return a + b;
// }

// function sub(a, b) {
//     return a - b;
// }

// let result0 = operation(5, 3, add);
// console.log("Callback of 5 and 3", result0);

// let result1 = operation(5, 3, sub);
// console.log("Callback of 5 and 3", result1);



// const fruits = ["banana", "pineapple", "strawberry"];

const printFruits = (array, callback) => {
    array.forEach(callback);
};

const printUppercase = fruit => {
    console.log(fruit.toUpperCase());
}

printFruits(fruits, printUppercase);


const fruits = ["banana", "pineapple", "strawberry"];

function logFruitInUpperCase(fruit) {
    console.log(fruit.toUpperCase());
}

function printFruits(array, callback) {
    array.forEach(callback);
}

printFruits(fruits, logFruitInUpperCase);







 
