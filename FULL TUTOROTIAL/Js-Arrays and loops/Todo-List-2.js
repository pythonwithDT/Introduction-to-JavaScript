const todoList = ['make dinner', 'wash dishes'];


renderTodoList(); // this calls the function to dsipaly the todolist on the html page.

function renderTodoList () {  // a function to be able to reuse the code anytime

    let todoListHTML = ''  // this is a accumulator variable. this gets the results.

    for (let i = 0; i < todoList.length; i++) {  // loops through the todoLst array
        const todo = todoList[i]; // this picks out each value in the array(get the string of each index)
        const html = `<p>${todo}</p>`; // create an html to get any value or index in the array
        todoListHTML += html;  // this adds the hmtl to to the ccumulator variable at the top. 
    }
    
    console.log(todoListHTML);
    
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;  // this gets the div and puts the p-tag into the div.
    
}

// const todoList = []; // create an empty array to stroe todolist items 

function addTodo() { // a function is created 

    const inputElement = document.querySelector('.js-name-input');  // a querry is called to get the class na e of the input
    const name = inputElement.value   // this gets the value/text of the todolist written in the input
    

    todoList.push(name);   // this pushes the value/text into the todoList empty array
    console.log(todoList); // this prints this in the console

    inputElement.value = ''

    renderTodoList()
}



 