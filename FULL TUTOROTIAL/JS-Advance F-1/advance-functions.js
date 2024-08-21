// // // Advanced Functions

// // // function greeting() {
// // //     console.log('hello');
// // // }

// // // greeting(); // calling the function


// // // // functions are values 

// // // const num = 2;

// // // const function1 = function greeting() {
// // //     console.log('hello2');
// // // }

// // // console.log(function1);
// // // console.log(typeof function1);
// // // functiojn1();


// // // // anonymous function ==> a function without a name

// // // const function1 = function() {
// // //     console.log('hello2');
// // // }


// // const object1 = {  // this called a method ===> when we have a function saved inside an object
// //     num: 2, 
// //     fun: function() {
// //         console.log('hello3')
// //     }
// // };

// // object1.fun();


// // // we can pass a value into a function 

// // function display(param) {
// //     console.log(param);
// // };

// // display(2) // this takes the value two and saves it inside the param


// // // we can also pass a function into a function

// // function run(param) {
// //     param();  // param can be used as a varaible to call the function since it contains a function
// // };
// // run(function(){  // this is a callback function
// //     console.log('Hello4') // this takes this function and saves it into param
// // })


// // setTimeout()
// // allows us to run a function in the future

// setTimeout(function() { // ==> this is the function we want to run in the future
//     console.log('timeout');
//     console.log('timeout3');
// }, 3000); // ==> this is how long to wait before running the function (this is a number in milliseconds 1000milliseconds = 1sec)

// console.log('next line');


// // setInterval()

// setInterval(function() { // ==> this is the function we want to run in the future
//     console.log('interval')
// }, 3000); // ==> this is how long to wait before running the function (this is a number in milliseconds 1000milliseconds = 1sec)
//             // ==> this keep running every 3secods 

// console.log('next line 2');


// // another way to loop through an array 

// // forEach ===> is the prefered way to loop through an array

// [
//     'make dineer',
//     'wash dishes',
//     'watch youtube'
// ].forEach(function(value, index) {  // the array's value is stored into the parameter(value). 
//                             // so loops through it and picks it one by one anytime its called
//     console.log(value);
// });


// if value is "wash dishes", we are going to skip it

[
    'make dineer',
    'wash dishes',
    'watch youtube'
].forEach( (value, index) => {  // the array's value is stored into the parameter(value). 
                            // so loops through it and picks it one by one anytime its called
    if (value === 'wash dishes') {
        return;
    }
    console.log(value);
});
