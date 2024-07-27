
// array = a variable like strucutre that can 
//          hold more than one(1) value

let fruits = ['apple', "orange", "banana"];

fruits[1] = 'grape';

fruits.push('coconut'); // - add an element to an array

fruits.pop(); // remove last element

fruits.unshift('mango') // - add an element to the begining 

fruits.shift(); // - remove an element from the begining 

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);



// // or we can use for loop to print all the values in the array
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
//     };
