// DOM
// querySelector

// const para = document.querySelector('p');  //  -a single element
// console.log(para);

// const paraa = document.querySelector('.error');
// console.log(paraa);

// const paran = document.querySelector('div.error');
// console.log(paran);

// const paras = document.querySelectorAll('p'); //  -to select all

// paras.forEach(para => {
//     console.log(para);
// })

// console.log(paras)

// const errors = document.querySelectorAll('.error');
// console.log(errors)


// get an element ID

// const title = document.getElementById('page-tittle')

// console.log(title);
 
 


// Gget element by thier class name 

// const errors = document.getElementsByClassName('error'); // - cant use for each in an HTMLcollection

// console.log(errors);
// console.log(errors[1])



// get elements by thier tag name 

// const paras = document.getElementsByTagName('p')

// console.log(paras);


 // chnaging text

 const para = document.querySelector('p');

 para.textContent = ' ninjas are awesome!'; // - to change the text of an element

 console.log(para);

 // changing yext of several items

 const paras = document.querySelectorAll('p');

 paras.forEach(callback => {
    console.log(callback.innerText);
    callback.innerText += ' ninjas are awesome!';
 });

 