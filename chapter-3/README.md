### Functions in JavaScript

Functions are reusable blocks of code that perform a specific task. Let's explore different ways to define and use functions in JavaScript, with explanations and practical examples.

#### Function Declaration

A function declaration defines a named function. 

```javascript
// Function declaration
function greet() {
    console.log("Hello World");
}
greet(); // Calls the function, output: "Hello World"
```

**Explanation**: The `greet` function is declared and then called. It prints "Hello World" to the console.

**Practical Example**:
```javascript
// Function to add two numbers
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // Output: 5
```

#### Function Expression

A function expression defines a function and assigns it to a variable.

```javascript
// Function expression
const speak = function() {
    console.log("Good day!");
};
speak(); // Calls the function, output: "Good day!"
```

**Explanation**: The `speak` function is defined and assigned to the variable `speak`, which is then called.

**Practical Example**:
```javascript
// Function to multiply two numbers
const multiply = function(a, b) {
    return a * b;
};
console.log(multiply(4, 5)); // Output: 20
```

#### Hoisting with Declarations and Expressions

Hoisting allows function declarations to be called before they are defined, but function expressions cannot be called before they are defined.

```javascript
// Hoisting with function declaration
greet();
function greet() {
    console.log("Hello World");
} // Output: "Hello World"

// Hoisting with function expression
try {
    speak(); // Throws an error
} catch (e) {
    console.error(e);
}
const speak = function() {
    console.log("Good day!");
};
```

**Explanation**: Function declarations are hoisted, meaning they can be called before their actual definition in the code. Function expressions are not hoisted and will result in an error if called before their definition.

**Practical Example**:
```javascript
// Hoisted function declaration
sayHello();
function sayHello() {
    console.log("Hello!");
}

// Non-hoisted function expression
try {
    sayGoodbye(); // Throws an error
} catch (e) {
    console.error(e);
}
const sayGoodbye = function() {
    console.log("Goodbye!");
};
```

#### Arguments and Parameters

Functions can accept parameters, which are variables defined in the function signature, and arguments, which are the values passed to the function when it is called.

```javascript
// Function with one parameter
const speak = function(name) { // 'name' is a parameter
    console.log(`Good day, ${name}`);
};
speak("Mario"); // 'Mario' is an argument, output: "Good day, Mario"

// Function with multiple parameters
const greet = function(name, time) { // 'name' and 'time' are parameters
    console.log(`Good ${time}, ${name}`);
};
greet("Mario", "morning"); // 'Mario' and 'morning' are arguments, output: "Good morning, Mario"

// Default parameters
const welcome = function(name = "Luigi", time = "night") {
    console.log(`Good ${time}, ${name}`);
};
welcome("Shaun"); // Output: "Good night, Shaun"
welcome(); // Output: "Good night, Luigi"
```

**Explanation**: Functions can accept any number of parameters, and default values can be provided for parameters if they are not supplied during the function call.

**Practical Example**:
```javascript
// Function to calculate the area of a rectangle
const calculateArea = function(length = 1, width = 1) {
    return length * width;
};
console.log(calculateArea(5, 10)); // Output: 50
console.log(calculateArea(7)); // Output: 7, uses default width of 1
```

#### Returning Values

Functions can return values using the `return` statement.

```javascript
// Function to calculate the area of a circle
const calcArea = function(radius) {
    return 3.14 * radius ** 2;
};

const area = calcArea(5); // Calls the function and stores the result in 'area'
console.log(area); // Output: 78.5
```

**Explanation**: The `calcArea` function calculates the area of a circle and returns the result. The returned value can be stored in a variable and used later.

**Practical Example**:
```javascript
// Function to find the maximum of two numbers
const findMax = function(a, b) {
    if (a > b) return a;
    else return b;
};
console.log(findMax(8, 5)); // Output: 8
```

#### Arrow Functions

Arrow functions provide a shorter syntax for writing functions.

```javascript
// Regular function
const calcArea = function(radius) {
    return 3.14 * radius ** 2;
};

// Arrow function
const calcArea = radius => 3.14 * radius ** 2; // Shorter syntax

const area = calcArea(5);
console.log("Area is:", area); // Output: "Area is: 78.5"
```

**Explanation**: Arrow functions allow you to write shorter function expressions. They omit the `function` keyword and use a `=>` arrow.

**Practical Example**:
```javascript
// Arrow function to calculate the square of a number
const square = num => num ** 2;
console.log(square(4)); // Output: 16
```

#### Practice Arrow Functions

Convert regular functions to arrow functions.

```javascript
// Regular function
const greet = function() {
    return "Hello, world";
};

// Arrow function
const greet = () => "Hello, world";
const result = greet();
console.log(result); // Output: "Hello, world"

// Regular function to calculate total bill
const bill = function(products, tax) {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
};
console.log(bill([10, 25, 30], 0.2)); // Output: 78

// Arrow function to calculate total bill
const bill = (products, tax) => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
};
console.log(bill([10, 25, 30], 0.2)); // Output: 78
```

#### Methods & Functions

Methods are functions that belong to an object.

```javascript
// Function
const greet = () => "hello";

let resultOne = greet();
console.log(resultOne); // Output: "hello"

// Method
const person = "shaun";
let resultTwo = person.toUpperCase();
console.log(resultTwo); // Output: "SHAUN"
```

**Explanation**: Methods are called on objects (like `toUpperCase` on a string), while functions are standalone blocks of code.

**Practical Example**:
```javascript
// Method to get the length of a string
const name = "Mario";
console.log(name.length); // Output: 5
```

#### Callbacks & forEach

A callback function is passed as an argument to another function to be executed later.

```javascript
// Callback function
const myFunc = (callbackFunc) => {
    // Do something
    let value = 50;
    callbackFunc(value); // Calls the callback function with 'value'
};

myFunc(function(value) { // Regular function as a callback
    console.log(value); // Output: 50
});

myFunc(value => { // Arrow function as a callback
    console.log(value); // Output: 50
});

// forEach method
let people = ["mario", "luigi", "ryu", "shaun", "chun-li"];

people.forEach(function(person) { // Regular function as a callback
    console.log(person); // Logs each person
});

people.forEach((person, index) => { // Arrow function as a callback
    console.log(index, person); // Logs the index and person
});

// Defining a callback function separately
const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
};
people.forEach(logPerson); // Passing the callback function to forEach
```

**Explanation**: Callback functions are used for asynchronous operations or when you want to defer execution. The `forEach` method iterates over each element in an array, calling the provided callback function for each element.

**Practical Example**:
```javascript
// Using forEach to capitalize names
let names = ["john", "jane", "jack"];
names.forEach((name, index) => {
    names[index] = name.charAt(0).toUpperCase() + name.slice(1);
});
console.log(names); // Output: ["John", "Jane", "Jack"]
```

#### Manipulating the DOM with forEach

You can use `forEach` to dynamically manipulate the DOM.

```javascript
// Get a reference to the "ul"
const ul = document.querySelector(".people");

const people = ["mario", "luigi", "ryu", "shaun", "chun-li"];

let html = ``;

people.forEach(function(person) { // Regular function as a callback
    html += `<li style="color: purple">${person}</li>`;
});

console.log(html);

 // Logs the generated HTML
ul.innerHTML = html; // Inserts the HTML into the ul element

people.forEach(person => { // Arrow function as a callback
    html += `<li style="color: purple">${person}</li>`;
});

console.log(html); // Logs the generated HTML
ul.innerHTML = html; // Inserts the HTML into the ul element
```

**Explanation**: You can use `forEach` to loop through an array and generate HTML dynamically. This is useful for creating lists or other elements based on array data.

**Practical Example**:
```javascript
// Dynamically create a list of fruits
const fruitList = document.querySelector(".fruits");
const fruits = ["apple", "banana", "cherry"];

let fruitHtml = ``;
fruits.forEach(fruit => {
    fruitHtml += `<li>${fruit}</li>`;
});
fruitList.innerHTML = fruitHtml; // Inserts the list items into the ul element with class "fruits"
```

These examples and explanations should help you understand the basics of functions in JavaScript. Practice by modifying and running these examples to see how they work.