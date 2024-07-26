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

// const booki = document.querySelectorAll('#book-list li .name'); // - multiple elements
// console.log(booki);


// // how to cycle through  collection of books

// Array.from(booki).forEach(function(book){
//     console.log(book);
// })


// // edititng hmtl and text

// const books = document.querySelectorAll('#book-list li .name');

// Array.from(books).forEach(function(book){
//     book.textContent += ' (book title)';
// });


// const booklist = document.querySelector('#book-list');
// booklist.innerHTML += '<p>This is a new p tag</p>'


// // dom nodes 

// const banner = document.querySelector('#page-banner')

// console.log('#page-banner node type is:', banner.nodeType);
// console.log('#page-banner node name is:', banner.nodeName);

// console.log('#page-banner has any child nodes?', banner.hasChildNodes());

// // clone a node 

// const clonedBanner = banner.cloneNode(true);
// console.log('clonedBanner', clonedBanner);


// // dom traversal(parent-child)

// const booklist = document.querySelector('#book-list');

// console.log('the name of the node is:', booklist.parentNode);

// console.log('the parent element is:', booklist.parentElement.parentElement);

// console.log(booklist.childNodes);  
// console.log(booklist.children);  // - elements


// // dom traversal(sibling)

// const booklist = document.querySelector('#book-list');

// console.log('book-list next sibling is:', booklist.nextSibling);
// console.log('book-list next element sibling is:', booklist.nextElementSibling);


// console.log('book-list previous sibling is:', booklist.previousSibling);
// console.log('book-list previous element sibling is:', booklist.previousElementSibling);

// booklist.previousElementSibling.querySelector('p').innerHTML += '<br /> Too cool for every one else!';


//  // dom events - removing content

// const btns = document.querySelectorAll('#book-list .delete');

// Array.from(btns).forEach(function(btn){
//     btn.addEventListener('click', function(e){
//         const li = e.target.parentElement;
//         li.parentNode.removeChild(li);
//     });
// });


document.addEventListener('DOMContentLoaded', function(){
    // event bubbling

const list = document.querySelector('#book-list ul');

// delete books
list.addEventListener('click', function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});



// add booklist 

const addform = document.forms['add-book'];
addform.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addform.querySelector('input[type="text"]').value;
    
    // create elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span'); 
    
    // add contnent 
    deleteBtn.textContent = 'delete';
    bookName.textContent = value;

    // add classes
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');

    // append to document
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);


    // clear the add book input field after adding the book 
    addform.querySelector('input[type=text]').value = '';
})


// hide books
 
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
    if(hideBox.checked){
        list.style.display = 'none';
        } else{
            list.style.display = 'block';
            }
})


// filter books

const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach(function(book){
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1){
            book.style.display = 'block';
            } else{
                book.style.display = 'none';
                }
            });
            // searchBar.value = '';
});
            

// tabed content

const tabs = document.querySelectorAll('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.forEach(function(tab){
    tab.addEventListener('click', function(e){
        if(e.target.tagName === 'LI'){
            const targetPanel = document.querySelector(e.target.dataset.target);
            panels.forEach(function(panel){
                if(panel === targetPanel){
                    panel.classList.add('active');
                }else {
                    panel.classList.remove('active');
                }
            });
        }
    });

});

})