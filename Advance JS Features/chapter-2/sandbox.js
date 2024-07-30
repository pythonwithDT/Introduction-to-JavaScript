// objects 
// key-value pairs in curly braces

// const myObj = { name: 'Dave' }
// console.log(myObj);
// console.log(myObj.name); // - print the value of the key 'name' in the object
// console.log(myObj['name']); // - print the value of the key 'name' in the object using bracket notation

// const anotherObj = {
//     alive: true,
//     answer: 43,
//     hobbies: ['Eat', 'Sleep', 'Code'], // - you can have an array in an obj 
//     address: { // you can have a nested object in an object
//         street: '123 Main St',
//         city: 'Anytown',
//         state: 'CA',
//         zip: '12345'
//         },
//     action: function(){  // - u can have methods in an obj
//         return 'I am alive';
//     } ,
//     place: function(){  // - u can refer to an information inside a function in an obj
//         return `This is ${this.address.city}`;  // this refers to the obj
//     }     
// }
// console.log(anotherObj);
// console.log(anotherObj.alive); // - print the value of the key 'alive'
// console.log(anotherObj['alive']); // - print the value of the key 'alive'    
// console.log(anotherObj.hobbies); // - print the value of the key 'hobbies
// console.log(anotherObj.address); // - print the value of the key 'address'
// console.log(anotherObj.address.street); // - print the value of the key 'street'
// console.log(anotherObj.address['city']); // - print the value of the key 'city
// console.log(anotherObj.hobbies[2]); // - prints out the index of in an array
// console.log(anotherObj.action()); // - prints out the value of the method in an object
// console.log(anotherObj.place()); // - prints out the value of the method in an object


// // inheritance 

// const vehicle = {
//     wheels: 4,
//     engine: function () {
//         return 'Vrooom!';
//     }
// };

// const car = Object.create(vehicle);
// car.doors = 4;
// car.engine = function() {
//     return "Whooooosh!";
// };

// console.log(car.engine());
// console.log(car.doors);
// console.log(car.wheels);

// const tesla = Object.create(car);
// tesla.engine = function() {
//     return "Shhhhhhh...."
// }

// console.log(tesla.wheels);
// console.log(tesla.engine());

const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bohman"
};

// band.keyboard = "Emmanuel Tetteh";  // - adding values and properties to objects 
// band.start = function(){ return "yeah"};  // adding a method  
// delete band.drums;  // deleting an exiting property or method 

// console.log(Object.keys(band));
// console.log(Object.values(band));

// for (let job in band) {
//     // console.log(band[job]);
//     console.log(`on ${job}. ,its ${band[job]}!`);
// }


// destructring objects 

const { vocals, guitar, bass, drums } = band;

console.log(guitar);
console.log(vocals);

function sings({vocals}) {
    return `${vocals} sings!`
};
console.log(sings(band));




 