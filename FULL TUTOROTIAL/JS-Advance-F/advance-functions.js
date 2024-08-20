// Advanced Functions

// function greeting() {
//     console.log('hello');
// }

// greeting(); // calling the function


// // functions are values 

// const num = 2;

// const function1 = function greeting() {
//     console.log('hello2');
// }

// console.log(function1);
// console.log(typeof function1);
// function1();


// // anonymous function ==> a function without a name

// const function1 = function() {
//     console.log('hello2');
// }


const object1 = {  // this called a method ===> when we have a function saved inside an object
    num: 2, 
    fun: function() {
        console.log('hello3')
    }
};

object1.fun();


// we can pass a value into a function 

