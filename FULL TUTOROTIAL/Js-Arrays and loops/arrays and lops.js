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



// // Accumlator pattern

// // we have an array of numbers 
// // ho do we calculate the total?

// const nums = [1, 1, 3]

// let total = 0;  // accumlator vairable

// for (let i = 0; i < nums.length; i++) {
//     const num = nums[i]
//     total = total + num
// }
 
// console.log(total)

// // create a copy of the array where each number is doubled 

// const numsDoubled = [];

// for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     numsDoubled.push(num * 2);
// }

// console.log(numsDoubled)


// // arrays are references 

// // arrays

// const array1 = [1, 2, 3];
// const array2 = array1
// array2.push(4);
// console.log(array1);
// console.log(array2);


// // destructuring 
//  // eg - get the fist and second calue out of this array  
//  // const array3 = [1, 2, 3];
 
//  // normal way --- // const firstValue = array3[0];
//                     //  const secondValue = array3[1]

// // destructuring way

// const [firstValue, secondValue]= [1, 2, 3];

// console.log(firstValue)


// // loops 

// // - break ==> exit a loop early 
// // - continue ==> skip 1 iteration

// // eg- create a loop that counts from 1 to 10 ==== when i = 8, stop the loop early 

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//     if (i === 8) {
//         break;
//     } 
// }


// // eg- create a loop that counts from 1 to 10 ==== when i = 8, stop the loop early  == skip the number when its 3

// for (let i = 1; i <= 10; i++) {
//     if (i === 3) {
//         continue;
//     }
//     console.log(i);
//     if (i === 8) {
//         break;
//     } 
// }


// // skip a number if its divisible by 3 

// for (let i = 1; i <= 10; i++) {
//     if (i % 3) {
//         continue;
//     }
//     console.log(i);
//     if (i === 8) {
//         break;
//     } 
// }


// using continue in while loop
// eg- count from 1 to 10 usig a while loop === skip numbers that are divisible by 3 (3, 6, 9)

let i = 1

while (i <= 10) {
    if (i % 3 === 0) {
        i++
        continue;
    }
    console.log(i);
    i++;
}