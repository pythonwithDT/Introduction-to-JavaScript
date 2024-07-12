 // -- Control Flow -- //
 // Loops // 
 
 // for loops

//for(let i = 0; i <5; i++){
    //console.log('inloop:', i);
//}
//console.log('loop finished');

//const names = ['shaun', 'mario', 'luigi'];

//for(let i = 0; i < names.length; i++){

    //console.log(i);
//} 

//for(let i = 0; i < names.length; i++){

    //console.log(names[i]);
//}
 
//for(let i = 0; i < names.length; i++){
   
    //let html = `<div>${names[i]}</div>`;
    //console.log(html);
//} 


// while loops


//let i = 0
//while(i < 5){
//    console.log('inloop:', i);
//    i++;
//}

//const names = ['shaun', 'mario', 'luigi'];
 
//let i = 0
//while(i < names.length){
//    console.log(names[i]);
//    i++;
//}


// do while loops 

//let i = 5;

//do{
//    console.log('val of i is: ', i);
//    i++;
//} while(i < 5);



// break and continue 

//const scores = [50, 25, 0, 30, 100, 20, 10] 

//for(let i = 0; i < scores.length; i++){
     
//    if(scores[i] === 0){
//        console.log('Game over');
//        continue;
//    }

//    console.log('your score: ', scores[i]);

 //   if(scores[i] === 100){
 //       console.log('you got the high score!');
 //       break;
 //   }
//}






// if statements

//const age = 25 

//if(age > 20){
//    console.log('you are over 20 years old');
//}

//const ninjas = ['shaun', "ryu", "chun-li", "yoshi"];

//if(ninjas.length > 3){
//    console.log("thats's a lot of ninjas");
//}

//const password = 'pass$';

//if(password.length >= 8){
//    console.log("that password is long enough");
//} else {
//    console.log("password is not long enough");
//}


// else-if statements

//const passwordi = 'wjhdu'

//if(passwordi.length >= 12 ){
//    console.log("that password is mighty strong");
//} else if(passwordi.length >= 8){
//    console.log("that password is long enough");
//} else {
//    console.log("password is not long enough");
//}


// Logical operators - OR || and AND &&

//const passwordi = 'wjhduwh@'

//if(passwordi.length >= 12  && passwordi.includes('@')){
//    console.log("that password is mighty strong");
//} else if(passwordi.length >= 8 || passwordi.includes('@') && passwordi.length >5){
//    console.log("that password is long enough");
//} else {
//    console.log("password is not long enough");
//}


// Logical NOT (!)

//console.log(!true);
//console.log(!false);
//
//let user = false;

//if(!user){
//    console.log("you must be logged in to view this page");
//}



// switch statements 

const grade = 'D'

switch(grade){
    case 'A':
        console.log('you are a genius');
        break;
    case 'B':
        console.log('you are a smart cookie');
        break;
    case 'C':
        console.log('you are a good student');
        break;
    case 'D':
        console.log('you are a hard worker');
        break;
    case 'E':
        console.log('you are a good person');
        break;
    case 'F':
        console.log('you are a bad person');
        break;
    default:
        console.log('you are a sweet person');
}


// variables & block scope 

let age = 30;

if(true){
    let age = 31;
    console.log('inside 1st code of block: ', age);

    if(true){
    console.log('inside 2nd code of block: ', age);
    }
}

console.log("outside code block: ", age);











