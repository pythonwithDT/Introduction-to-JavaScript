
// --- Variables --- //
//let myAge = 30;
//let year = 2023;
//console.log(year,myAge);

//age=(25);
//console .log(age);

// ---------------------------------------------------- ///

// --- Constants --- //   
//const points = 100;  
//console.log(points);

// ---------------------------------------------------- ///

// Javascript Data Types //

// --- Strings --- //
//console.log('hello, world');

//let email = "mariao@thenetninja.co.uk"
//console.log(email);


// String Concatenation -- joining two strings together
//let firstName = "Marie"
//let lastName = "Ogundipe"
//let fullname = firstName + " " + lastName; 
//console.log(fullname);

// Getting Characters
//console.log(fullname[3]);

// String Length
//console.log(fullname.length);


// Strings Method
//console.log(fullname.toUpperCase());
//let result = fullname.toLowerCase(); //-- stores a resust into a variable
//console.log(result);

//let index = email.indexOf('@') // -- finds the position of a string
//console.log(index);


// Common String Methods
//let email = 'maria@thenetninja.co.uk';

//let result = email.lastIndexOf('n')

//let result= email.slice(4,5); // -- it slices a section from a string

//let result = email.substr(4,10);

//let result= email.replace('m', 'w');

//let result = email.replace('n', 'w');
//console.log(result)

// ---------------------------------------------------- ///


// -- Numbers --- //

//let radius = 10;
//const pi = 3.14;

// Math opperators +, -, *, /, **, %

//console.log(10/2); 

//let result = radius % 3;

//let result = pi * radius **2;

 // --- order of operation - B - bracket, I - INDICIES, D - DIVISON, M - multiplicaton, A - addition,  S - substraction   --- //

 //let result = 5 * (10-3)**2 
//console.log(result);

// Shorthand notation //
//let likes = 10;

//likes = likes + 1; // - long way

//likes++; // -- simple way
//likes--;

//likes += 10;
//likes -= 10;
//likes *= 2;
//likes /= 2;

//console.log(likes);


//let result = 'the blog has ' + likes + ' likes';
//console.log(result);

// ---------------------------------------------------- ///

// -- template strings or template literal  
//const title = 'Best reads of 2019';
//const author = 'John Doe';
//const likes = 30;


// concatenation
//let result = 'The blog titled ' + title + ' by ' + author + ' has ' + likes + ' likes'
//console.log(result);


// template string way
//let result = `The blog called ${title} by ${author} has ${likes} likes`;
//console.log(result);

// creating html templates
//let html = `
    //<h2>${title}>/h2>
    //<p>By ${author}</p>
    //<span>This blogs has ${likes} likes</span>
//`;
//console.log(html);

// ---------------------------------------------------- ///



// -- Arrays -- // -- they are used to store collecton of things like strings or numbers 
//let ninjas = ['shaun', 'ryu', 'chun-li'];

//console.log(ninjas);
 
//ninjas[2] = 'ben';  // -- override certain values in an array  
//console.log(ninjas[2]);

//let ages = [20,30,40,50,45]
//console.log(ages[2]);

//let random = ['shaun', 'crystal', 30, 20]
//console.log(random);


// Array Methods //

//console.log(ninjas.length); // - lenght property 

// let result = ninjas.join('_')

//let result = ninjas.indexOf('ryu')

//let result = ninjas.concat(['ken', 'crytal']);

//let result = ninjas.push('ken');
//result = ninjas.pop();


//console.log(result)


// ---------------------------------------------------- ///


// Boolean -- booleans evaluate conditions in our code to check if things are true or false //
// booleans & comparisons 
//console.log(true, false, 'false', 'true');

// methods can return booleans

//let email = 'luigi@thenetninja.co.uk';
//let names = ['mario', 'luigi', 'toad']

//let result = email.includes('!');
//let result = names.includes('luigi');

//console.log(result);


// comparison operators 
 
//let age = 25

//console.log(age == 25);
//console.log(age == 30);
//console.log(age != 25); // - not equal to 
//console.log(age > 25); // - greater than
//console.log(age < 25); // - less than
//console.log(age >= 20); // - greater than or equal to
//console.log(age <= 25); // - less than or equal to


// loose comparison (different types can still be equal)


//let age = 25
//console.log(age == 25);
//console.log(age == '25');  // -- converts the string to numbers

//console.log(age != 25);
//console.log(age != '25');

 



// strict comparison (different types cannot be equal)

//console.log(age === 25);
//console.log(age === '25');

//console.log(age !== 25);
//console.log(age !== '25');


// ---------------------------------------------------- ///

// Undefined --- // Null --- //
// undefined is a type of value that is assigned to a variable that has not been assigned a value

//let age;

//console.log(age, age + 3, `the age is ${age}`);



// type conversion 
//let score = '100';

//score = Number(score)
//console.log(score + 1);
//console.log(typeof score); // - check the type of

//let result = Number('Hello'); // cant convert a string to a number
//console.log(result);

//let result = String(50);
//console.log(result);

//let result = Boolean(100) // --positive and minus number are true
//let result = Boolean(0) // --0 is false 
//let result = Boolean('0')
//console.log(result);

// Object   