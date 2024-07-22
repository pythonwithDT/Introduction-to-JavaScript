// // // query the dom by id
// // const banner = document.getElementById('page-banner');

// // console.log(banner);


// // // query the dom by class
// // const classname = document.getElementsByClassName('title');

// // console.log(classname);


// // // query the dom by tagname
// // const tags = document.getElementsByTagName('li');

// // console.log(tags)


// // // how to cycle through anhtml collection -- using loops
// // const titles = document.getElementsByTagName('li');
// // for(i=0; i <titles.length; i++){
// //     console.log(titles[i]);
// // }



// // // how to cycle through html elements which are'nt an array
// // const titles = document.getElementsByTagName('li');

// // console.log(Array.isArray(titles));
// // console.log(Array.isArray(Array.from(titles))); // - convertst to an array


// // Array.from(titles).forEach(function(item){
// //     console.log(item);
// // });



// // query selector 

// const wrap = document.querySelector('#wrapper');
// console.log(wrap);

// // grabbing a technical elenent

// const books = document.querySelector('#book-list li:nth-child(2) .name');
// console.log(books);


// // grabbing every single tag

// const book = document.querySelector('#book-list li .name'); // - single element
// console.log(book);


// // grabbing every single tag

const booki = document.querySelectorAll('#book-list li .name'); // - multiple elements
// console.log(booki);


// how to cycle through  collection of books

Array.from(booki).forEach(function(book){
    console.log(book);
})
