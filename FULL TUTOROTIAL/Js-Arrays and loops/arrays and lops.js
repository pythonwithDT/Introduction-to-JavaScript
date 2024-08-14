// Array and Loops

// // Arrays

// [10, 20, 30] // - an array 

// const myArray = [10,20,40];
// console.log(myArray)

// console.log(myArray[2]) // getting tje last value 

// myArray[0] = 99  // changing values in an array 
// console.log(myArray)


// let array = [1, 'helllo', true, {name:'socks'} [1, 2]]
// console.log(array)

// console.log(Array.isArray([1, 'helllo', true, {name:'socks'} [1, 2]]))


// console.log(myArray.length); // checks for length 


// myArray.push(60);
// console.log(myArray) // adds a valuen to the end pf an array 


// myArray.splice(1, 2); // splicing vlaues
// console.log(myArray)




// // Loops\

// // while loop

// let i = 4

// while (i <= 5) {
//     console.log(i)
//     i++;
// }



// // for loop 

// for (let i = 1; i <= 5; i++) {
//     console.log(i)
// }

// looping through a array 

// const todoList = [
//     'make dinner',
//     'wash dishes',
//     'watch youtube'
// ];

// // for (let index = 0; index <= todoList.length - 1; index++) {
// //     const value = todoList[index]
// //     console.log(value);
// // }

// for (let i = 0; i < todoList.length; i++) {  // shortcut 
//     const value = todoList[i]
//     console.log(value);
// }



// Accumlator pattern

// we have an array of numbers 
// ho do we calculate the total?

const nums = [1, 1, 3]
let total = 0;  // accumlator vairable

for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    total += num
}
 
console.log(total)

// create a copy of the array where each number is doubled 

const numsDoubled = [];

for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    numsDoubled.push(num * 2);
}

console.log(numsDoubled)

