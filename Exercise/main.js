 
// --- Exercise 1: Working with Variables and Data Types --- // 
 
 let name = 'Emmanuel';
 let age = 28;
 let isStudent = false;
 let address = {city:'Accra', country:'Ghana'};
 let hobbies = ['Photography', 'Videography', 'Cooking'];
 let undefinedVaraible;
 let nullVaraible = null;

console.log('Name:', name, 'Type:', typeof name);
console.log('Age', age, 'Type:', typeof age);
console.log('Is Student', isStudent, 'Type:', typeof isStudent);
console.log('Address:', address, 'Type:', typeof address);
console.log('Hobbies', hobbies, 'Type:', typeof hobbies);
console.log(undefinedVaraible, typeof undefinedVaraible);
console.log(nullVaraible, typeof nullVaraible);


// --- Exercise 2: Calculate Year of Birth --- // 

let userName = prompt("Please enter your name: ");
let userAge = prompt("Please enter your age: ");


// Calculate year of birth 
let currentYear = new Date().getFullYear();
let yearOfBirth = currentYear - userAge;
alert('Hello ' + userName + '! You were born in the year ' + yearOfBirth + '.');














 
