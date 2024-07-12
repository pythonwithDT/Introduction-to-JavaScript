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

const passwordi = 'wjhduwh@'

if(passwordi.length >= 12  && passwordi.includes('@')){
    console.log("that password is mighty strong");
} else if(passwordi.length >= 8 || passwordi.includes('@') && passwordi.length >5){
    console.log("that password is long enough");
} else {
    console.log("password is not long enough");
}





