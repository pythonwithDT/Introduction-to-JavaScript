// Arrow functions 

// // regualar functions 

// const regualarFunction = function(param, param1) {
//     console.log('hello');
//     return(5);
// }
// regualarFunction();


// // arrow function

// const arrowFunctions = (param, param2) => {
//     console.log('hello')
//     return(10);
// };
// arrowFunctions();


// // differences

// const oneParam = (param) => {
//     console.log(param + 1);
// };
// oneParam(2)


// // one-line arrow funtion 
// // when an arrow function has only one line we cann put them on one line 

// const oneLine = () => {  // remove the brackets
//     return 2 + 3; // remove the return 
// }

// const oneLine = () =>  2 + 3;  // this is the shorter way
// console.log(oneLine());


// using arrow functions inside an object

// const object2 = {
//     method: () => {

//     }, 
//     method() {  // shorthad method synthax ==> when saving a function in an abject we use this 

//     }
// }


// Add eventListner 



// const buttonElement = document.querySelector('.js-button');

// const eventListner =  () => { // the function is stored in a variable to able to reused later
//     console.log('click');
// }

// buttonElement.addEventListener('click', eventListner);   // this adds two parameters 1. event ==> 2. a fucntion we want to run when we click the element

// // removing an eventlistener

// buttonElement.removeEventListener('click', eventListner)

// buttonElement.addEventListener('click', () => {
//     console.log('click2')
// });


// More features that use functions as values 
