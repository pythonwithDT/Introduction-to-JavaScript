
// // array = a variable like strucutre that can 
// //          hold more than one(1) value

// let fruits = ['apple', "orange", "banana", 'coconut'];

// fruits[1] = 'grape';

// fruits.push('coconut'); // - add an element to an array

// fruits.pop(); // remove last element

// fruits.unshift('mango') // - add an element to the begining 

// fruits.shift(); // - remove an element from the begining 

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);


// let numofFruits = fruits.length;
// console.log(numofFruits); // - print the number of elements in the array

// let index = fruits.indexOf('orange');
// console.log(index); // - print the index of the element in the array // - getting -1 means the element was not found 



// // or we can use for loop to print all the values in the array
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
//     };

// // enhance for loop 
// for(let fruit of fruits){
//     console.log(fruit);
// }

// // sorting elements 
// fruits.sort();
// console.log(fruits); // - sort the array in ascending order
// // reverse the array
// fruits.reverse();
// console.log(fruits); // - sort the array in descending order


// objects 
// key-value paris in curly braces

// const myObj = { name: 'Dave' }
// console.log(myObj);
// console.log(myObj.name); // - print the value of the key 'name' in the object
// console.log(myObj['name']); // - print the value of the key 'name' in the object using bracket notation

// const anotherObj = {
//     alive: true,
//     answer: 43,
//     hobbies: ['Eat', 'Sleep', 'Code'], // - you can have an array in an obj 
//     address: { // you can have a nested object in an object
//         street: '123 Main St',
//         city: 'Anytown',
//         state: 'CA',
//         zip: '12345'
//         },
//     action: function(){  // - u can have methods in an obj
//         return 'I am alive';
//     } ,
//     place: function(){  // - u can refer to an information inside a function in an obj
//         return `This is ${this.address.city}`;
//     }     
// }
// console.log(anotherObj);
// console.log(anotherObj.alive); // - print the value of the key 'alive'
// console.log(anotherObj['alive']); // - print the value of the key 'alive'    
// console.log(anotherObj.hobbies); // - print the value of the key 'hobbies
// console.log(anotherObj.address); // - print the value of the key 'address'
// console.log(anotherObj.address.street); // - print the value of the key 'street'
// console.log(anotherObj.address['city']); // - print the value of the key 'city
// console.log(anotherObj.hobbies[2]); // - prints out the index of in an array
// console.log(anotherObj.action()); // - prints out the value of the method in an object
// console.log(anotherObj.place()); // - prints out the value of the method in an object

