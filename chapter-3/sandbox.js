// function declaration
// function greet(){
//     console.log("Hello World");
// }
// greet();




// function expression  -- when we store a function into a variable
// const speak = function(){
//    console.log("Good day!");
// };
// speak();


// Hoisting with declaration and expression

// greet();
// greet();

// function greet(){
//    console.log("Hello World");
// } // hositing works with function decalration not function 


// arguments & parameters 
 
// const speak = function(name){  // name - is an parameter
//     console.log(`good day ${name}`);
// };
// speak("mario"); // mario - is an argument 


// const speak = function(name, time){  // Passing mutiple details 
//    console.log(`good day ${name} ${time}`);
// };
// speak("mario", "morning")


// const speak = function(name = "luigi", time = "night"){  // If a function is called without passing anything in it
//    console.log(`good ${time} ${name}`);
// };
// speak("shaun") 


// returning values 


// const calcArea = function(raduis){
//    return 3.14 * raduis**2;
// };

// const area = calcArea(5);
// console.log(area)

// regular function

// const calcArea = function(raduis){
//    return 3.14 * raduis**2;
// };


// arrow function

// const calcArea = radius => {  // if u are to pass two characters, u need the parenthesis
//     return 3.14 * radius**2; 
// };

// const calcArea = radius => 3.14 * radius**2; // this is one  returning something simple


// const area = calcArea(5);
// console.log("area is:", area)







// pratice arrow functions 

// const greet = function(){ // - regular function
//    return "hello, world";
// };

// solution 

// const greet = () => "hello, world"; // - arrow function
// const result = greet();
// console.log(result)


// const bill = function(products, tax){  // -regular function
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }

// console.log(bill([10,25,30], 0.2));

// const bill = (products, tax) => { // -arrow function
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }
// console.log(bill([10,25,30], 0.2));






