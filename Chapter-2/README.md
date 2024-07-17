### Control Flow in JavaScript

Control flow allows you to specify the order in which your code should be executed. Let's explore some common control flow mechanisms in JavaScript with explanations and practical examples.

#### For Loops

A `for` loop is used to run a block of code a specific number of times.

```javascript
// Basic for loop
for (let i = 0; i < 5; i++) {
    console.log('in loop:', i); // Runs 5 times, logging values 0 to 4
}
console.log('loop finished'); // Outputs after the loop is complete
```
**Explanation**: The loop starts with `i = 0` and runs as long as `i` is less than 5. Each time, it increments `i` by 1 (`i++`).

**Practical Example**:
```javascript
// Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i); // Logs values 1 to 10
}
```

#### While Loops

A `while` loop runs as long as a specified condition is true.

```javascript
let i = 0;
while (i < 5) {
    console.log('in loop:', i); // Runs 5 times, logging values 0 to 4
    i++; // Increment i by 1
}
```
**Explanation**: The loop continues to run while `i` is less than 5. Each time, it increments `i` by 1.

**Practical Example**:
```javascript
// Print even numbers from 0 to 10
let num = 0;
while (num <= 10) {
    if (num % 2 === 0) {
        console.log(num); // Logs even numbers 0, 2, 4, 6, 8, 10
    }
    num++;
}
```

#### Do While Loops

A `do while` loop is similar to a `while` loop, but it always runs at least once before checking the condition.

```javascript
let i = 5;
do {
    console.log('val of i is:', i); // Logs the value of i, which is 5
    i++; // Increment i by 1
} while (i < 5); // Runs only once because the condition is false after the first iteration
```
**Explanation**: The loop executes the code block once before checking the condition.

**Practical Example**:
```javascript
// Ensure user enters a positive number
let userNumber;
do {
    userNumber = prompt("Enter a positive number:");
} while (userNumber <= 0);
console.log(`You entered: ${userNumber}`);
```

#### Break and Continue

`break` exits the loop completely, while `continue` skips the current iteration and moves to the next one.

```javascript
const scores = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < scores.length; i++) {
    if (scores[i] === 0) {
        console.log('Game over'); // Logs 'Game over' and skips the rest of the loop
        continue; // Skip the current iteration
    }

    console.log('your score:', scores[i]); // Logs each score except 0

    if (scores[i] === 100) {
        console.log('you got the high score!');
        break; // Exits the loop when a score of 100 is found
    }
}
```
**Explanation**: The loop processes each score. If the score is 0, it logs 'Game over' and skips to the next iteration. If the score is 100, it logs 'you got the high score!' and exits the loop.

**Practical Example**:
```javascript
// Find the first prime number in an array
const numbers = [4, 6, 8, 9, 11, 12, 15];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 2) continue; // Skip non-prime candidates

    let isPrime = true;
    for (let j = 2; j < numbers[i]; j++) {
        if (numbers[i] % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`First prime number: ${numbers[i]}`);
        break;
    }
}
```

### If Statements

`if` statements allow you to run code based on certain conditions.

```javascript
const age = 25;

if (age > 20) {
    console.log('you are over 20 years old'); // Runs if age is greater than 20
}
```
**Explanation**: This checks if `age` is greater than 20. If true, it logs the message.

**Practical Example**:
```javascript
// Check if a number is positive, negative, or zero
let number = -5;

if (number > 0) {
    console.log('The number is positive');
} else if (number < 0) {
    console.log('The number is negative');
} else {
    console.log('The number is zero');
}
```

### Else-If Statements

`else if` allows you to chain multiple conditions together.

```javascript
const password = 'wjhdu';

if (password.length >= 12) {
    console.log('that password is mighty strong'); // Runs if password is at least 12 characters
} else if (password.length >= 8) {
    console.log('that password is long enough'); // Runs if password is at least 8 but less than 12 characters
} else {
    console.log('password is not long enough'); // Runs if password is less than 8 characters
}
```
**Explanation**: This checks multiple conditions in sequence. It first checks if the length of `password` is at least 12 characters. If not, it checks if it's at least 8 characters. If neither condition is true, it logs the last message.

**Practical Example**:
```javascript
// Determine the grade based on score
let score = 85;

if (score >= 90) {
    console.log('A');
} else if (score >= 80) {
    console.log('B');
} else if (score >= 70) {
    console.log('C');
} else if (score >= 60) {
    console.log('D');
} else {
    console.log('F');
}
```

### Logical Operators

Logical operators are used to combine multiple conditions.

```javascript
const password = 'wjhduwh@';

if (password.length >= 12 && password.includes('@')) {
    console.log('that password is mighty strong'); // Runs if password is at least 12 characters and includes '@'
} else if (password.length >= 8 || (password.includes('@') && password.length > 5)) {
    console.log('that password is long enough'); // Runs if password is at least 8 characters, or includes '@' and is more than 5 characters
} else {
    console.log('password is not long enough'); // Runs if none of the above conditions are true
}
```
**Explanation**: This checks if `password` meets certain criteria using logical operators. It first checks if `password` is at least 12 characters and includes '@'. If not, it checks if it's at least 8 characters or includes '@' and is more than 5 characters. If neither condition is true, it logs the last message.

**Practical Example**:
```javascript
// Check if a user can access a resource
let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn && isAdmin) {
    console.log('Access granted');
} else if (isLoggedIn || isAdmin) {
    console.log('Partial access granted');
} else {
    console.log('Access denied');
}
```

### Logical NOT

The `!` operator negates the value of a boolean.

```javascript
console.log(!true); // Outputs false
console.log(!false); // Outputs true

let user = false;

if (!user) {
    console.log('you must be logged in to view this page'); // Runs if user is false
}
```
**Explanation**: The `!` operator inverts the boolean value. If `user` is false, `!user` is true, so the message is logged.

**Practical Example**:
```javascript
// Toggle a boolean value
let isVisible = true;
isVisible = !isVisible; // isVisible is now false
console.log(isVisible); // Outputs false
```

### Switch Statements

A `switch` statement is used to perform different actions based on different conditions.

```javascript
const grade = 'D';

switch (grade) {
    case 'A':
        console.log('you are a genius');
        break; // Exits the switch statement
    case 'B':
        console.log('you are a smart cookie');
        break; // Exits the switch statement
    case 'C':
        console.log('you are a good student');
        break; // Exits the switch statement
    case 'D':
        console.log('you are a hard worker');
        break; // Exits the switch statement
    case 'E':
        console.log('you are a good person');
        break; // Exits the switch statement
    case 'F':
        console.log('you are a bad person');
        break; // Exits the switch statement
    default:
        console.log('you are a sweet person');
}
``

`
**Explanation**: The `switch` statement checks the value of `grade` and matches it with the cases. If it finds a match, it executes the corresponding code block.

**Practical Example**:
```javascript
// Determine the day of the week
let day = 3;

switch (day) {
    case 0:
        console.log('Sunday');
        break;
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    default:
        console.log('Invalid day');
}
```

### Variables & Block Scope

Variables declared with `let` or `const` are block-scoped, meaning they only exist within the block they're declared in.

```javascript
let age = 30;

if (true) {
    let age = 31;
    console.log('inside 1st code block:', age); // Logs 31
    if (true) {
        console.log('inside 2nd code block:', age); // Logs 31
    }
}
console.log('outside code block:', age); // Logs 30
```
**Explanation**: The `age` variable inside the `if` block is different from the `age` variable outside the block. The inner `age` is only accessible within the block where it's declared. The outer `age` remains unchanged outside the block.

**Practical Example**:
```javascript
// Check variable scope
let color = 'blue';

if (true) {
    let color = 'red';
    console.log('inside block:', color); // Logs 'red'
}
console.log('outside block:', color); // Logs 'blue'
```

These examples and explanations should help you understand the basics of control flow in JavaScript. Practice by modifying and running these examples to see how they work.