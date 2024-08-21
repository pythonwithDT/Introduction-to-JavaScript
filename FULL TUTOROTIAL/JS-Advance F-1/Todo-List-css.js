const todoList = [ { // this was removed from a string to an object in the array as to contain the date and name(todolist)
    name : 'make dinner',
    dueDate: '2022-12-22'
}, { name: 'wash dishes',
    dueDate: '2022-12-22'
}];


renderTodoList(); // this calls the function to dsipaly the todolist on the html page.



function renderTodoList () {  // a function to be able to reuse the code anytime

    let todoListHTML = ''  // this is a accumulator variable. this gets the results.

    todoList.forEach( (todoObject, index) => {
        // const todoObject = todoList[index]; // this picks out each value in the array(get the string of each index)
        // const name = todoObject.name;
        // const dueDate = todoObject.dueDate;
        const {name, dueDate} = todoObject // this picks out each value in the object in the array which is the date and name(todolist)
        const html = `
        <div> ${name} </div>
        <div>${dueDate}</div>
        <button onclick="
    
            todoList.splice(${index}, 1); 
            renderTodoList();
    
        " class= "delete-todo-button">Delete</button> 
        </div>
        `; // create an html to get any value or index in the array  --- the paragrah now contains the name and duedate displayed on the html as well as the button added to it 
        todoListHTML += html;  // this adds the hmtl to to the ccumulator variable at the top.  
    });

    
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;  // this gets the div and puts the p-tag into the div.
    
}

// const todoList = []; // create an empty array to stroe todolist items 

function addTodo() { // a function is created 

    const inputElement = document.querySelector('.js-name-input');  // a querry is called to get the class na e of the input
    const name = inputElement.value   // this gets the value/text of the todolist written in the input

    const dateInputElement = document.querySelector('.js-due-date-input');  // a qerry  is called to get the class of the second input which cotains the date
    const dueDate = dateInputElement.value; // this gets the value/date of the date in the input
    

    todoList.push({
        // name: name,
        // dueDate: dueDate
        name, dueDate
    });   // this pushes the value/text and date into the todoList empty array
    console.log(todoList); // this prints this in the console

    inputElement.value = ''

    renderTodoList()
}



 