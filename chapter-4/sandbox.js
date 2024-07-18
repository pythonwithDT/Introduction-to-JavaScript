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

//  const para = document.querySelector('p');

//  para.textContent = ' ninjas are awesome!'; // - to change the text of an element

//  console.log(para);

 // changing yext of several items

//  const paras = document.querySelectorAll('p');

//  paras.forEach(callback => {
//     console.log(callback.innerText);
//     callback.innerText += ' ninjas are awesome!';
//  });

// changing the html of somethig 

// const content = document.querySelector('.content');

// content.innerHTML += '<h2>THIS IS A NEW H2</h2> <p>this is awesome!</P>';
// console.log(content);


// embeding into the html

// const people = ['mario', 'luigi', 'yoshi'];

// people.forEach(callback => {
//     content.innerHTML += `<p>${callback}</p>`
// });



// how to get and set and attribute 

// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www.emmanueltdortey.co.ca/');
// link.innerHTML = 'PYHTONWITHDT WEBSITE';


// const mssg = document.querySelector('p');

// console.log(mssg.getAttribute('class'));
// mssg.setAttribute('class', 'special');


// how to set attributes that dont exit

// mssg.setAttribute('style', 'color:purple;');


// how to add style to a text

// const title = document.querySelector('h1');

// tittle.setAttribute('style', ;'margin: 50px');  // - this overrides the current attribute that has been set which is the color 

// title.style.margin = '50px';
// title.style.color = 'purple';  // -overwritten the original color
// console.log(title.style);


// change font-size

// title.style.fontSize = '60px';

// delete a style 

// title.style.margin = '';


// how to add and remove classes from element

const content = document.querySelector('p');

console.log(content.classList);

content.classList.remove('error');
content.classList.add('success');

// -- example

const paras = document.querySelectorAll('p')

paras.forEach(p => {
    if(p.textContent.includes('error')){
        p.classList.add('error')
    }
    if(p.textContent.includes('success')){
        p.classList.add('success')
    }
});
 