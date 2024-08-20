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
// functiojn1();


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

function display(param) {
    console.log(param);
};

display(2) // this takes the value two and saves it inside the param


// we can also pass a function into a function

function run(param) {
    param();  // param can be used as a varaible to call the function since it contains a function
};
run(function(){  // this is a callback function
    console.log('Hello4') // this takes this function and saves it into param
})