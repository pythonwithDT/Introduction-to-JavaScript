const todoList = [ {
    name : 'make dinner',
    dueDate: '2022-12-22'
}, { name: 'wash dishes',
    dueDate: '2022-12-22'
}];


renderTodoList(); // this calls the function to dsipaly the todolist on the html page.

function renderTodoList () {  // a function to be able to reuse the code anytime

    let todoListHTML = ''  // this is a accumulator variable. this gets the results.

    for (let i = 0; i < todoList.length; i++) {  // loops through the todoLst array
        const todoObject = todoList[i]; // this picks out each value in the array(get the string of each index)
        // const name = todoObject.name;
        // const dueDate = todoObject.dueDate;
        const {name, dueDate} = todoObject 
        const html = `
        <p>
        ${name} ${dueDate}
        <button onclick="

            todoList.splice(${i}, 1);
            renderTodoList();

        ">Delete</button>
        </p>
        `; // create an html to get any value or index in the array
        todoListHTML += html;  // this adds the hmtl to to the ccumulator variable at the top. 
    }
    
    console.log(todoListHTML);
    
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;  // this gets the div and puts the p-tag into the div.
    
}

// const todoList = []; // create an empty array to stroe todolist items 

function addTodo() { // a function is created 

    const inputElement = document.querySelector('.js-name-input');  // a querry is called to get the class na e of the input
    const name = inputElement.value   // this gets the value/text of the todolist written in the input

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;
    

    todoList.push({
        // name: name,
        // dueDate: dueDate
        name, dueDate
    });   // this pushes the value/text into the todoList empty array
    console.log(todoList); // this prints this in the console

    inputElement.value = ''

    renderTodoList()
}



 