
// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.todo-filter');

let nextTodoItemId = 1;

// Event Listeners
document.addEventListener('DOMContentLoaded', loadTodosFromLocalStorage);
todoButton.addEventListener('click', addTodo);
filterOption.addEventListener('change', filterTodo);

// Functions
function addTodo(event) {
    // prevent form from submitting
    event.preventDefault();

    // prevent empty todo items
    if(todoInput.value === '') {
        todoInput.focus();
        return;
    }

    addTodoItem(todoInput.value, nextTodoItemId);

    // add todo item to local storage
    saveTodosInLocalStorage({ 
        todoItemName: todoInput.value, 
        todoItemId: nextTodoItemId,
        todoItemIsDone: false
    });

    nextTodoItemId++;

    todoInput.value = '';
    todoInput.focus();
}


function addTodoItem(todoItem, todoItemId, todoItemIsDone = false) {
    // create todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // create li 
    const newTodo = document.createElement('li');
    newTodo.innerText = todoItem;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    // completed button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('btn-completed');
    todoDiv.appendChild(completedButton);

    // add event listener to completed button
    completedButton.addEventListener('click', (e) => {
        const todoDomItem = e.currentTarget.parentNode;
        todoDomItem.classList.toggle('todo-item-completed');

        // update todo item, toggle todoItemIsDone
        updateTodoInLocalStorage({
            todoItemId: todoItemId,
            todoItemIsDone: todoDomItem.classList.contains('todo-item-completed')
        })
    });

    if(todoItemIsDone) {
        todoDiv.classList.toggle('todo-item-completed');
    }

    // delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('btn-delete');
    todoDiv.appendChild(deleteButton);

    // add event listener to delete button
    deleteButton.addEventListener('click', (e) => {
        const todoDomItem = e.currentTarget.parentNode;
        // delete animation
        todoDomItem.classList.add('todo-item-delete');

        // wait for delete animation to end
        todoDomItem.addEventListener('transitionend', e => {
            removeTodoFromLocalStorage({
                todoItem, 
                todoItemId
            });
            todoDomItem.remove();
        });
    });
    

    todoList.appendChild(todoDiv);
}


function filterTodo(event) {
    const todos = todoList.childNodes;
    
    todos.forEach(function(todo) {
        // ensure todo item has classlist
        // (if ul has empty spaces inside the html code, 
        //  this would lead to an error,
        //  because the empty space has no classlist!)
        if(typeof todo.classList !== 'undefined') {
            switch(event.target.value) {
                case 'all':
                    // show all todos
                    todo.style.display = 'flex';
                    break;
                
                case 'completed':
                    // show only completed todos
                    if(todo.classList.contains('todo-item-completed')) {
                        todo.style.display = 'flex';
                    } else {
                        todo.style.display = 'none';
                    }
                    break;
                case 'uncompleted':
                    // show only completed todos
                    if(!todo.classList.contains('todo-item-completed')) {
                        todo.style.display = 'flex';
                    } else {
                        todo.style.display = 'none';
                    }
                    break;
            }
        }
    });
}


function loadTodosFromLocalStorage() {
    let todos = null;
    // check for todos elements
    if(localStorage.getItem('todos') === null) {
        // no todos yet
        todos = [];
    } else {
        // we have already todos
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.forEach((todo) => {
        addTodoItem(todo.todoItemName, todo.todoItemId, todo.todoItemIsDone);
        nextTodoItemId = todo.todoItemId;
    });

    nextTodoItemId++;
}


function saveTodosInLocalStorage(todo) {
    let todos = null;
    // check for todos elements
    if(localStorage.getItem('todos') === null) {
        // no todos yet
        todos = [];
    } else {
        // we have already todos
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}


function updateTodoInLocalStorage(todo) {
    let todos = null;
    // check for todos elements
    if(localStorage.getItem('todos') === null) {
        // no todos yet
        todos = [];
    } else {
        // we have already todos
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    for(let i = 0; i < todos.length; i++) {
        if(todos[i].todoItemId === todo.todoItemId) {
            // we found the element, toggle the finished flag
            todos[i].todoItemIsDone = todo.todoItemIsDone;
            break;
        }
    }

    localStorage.setItem("todos", JSON.stringify(todos));
}


function removeTodoFromLocalStorage(todo) {
    let todos = null;
    // check for todos elements
    if(localStorage.getItem('todos') === null) {
        // no todos yet
        todos = [];
    } else {
        // we have already todos
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    let todoIndex = -1;
    for(let i = 0; i < todos.length; i++) {
        if(todos[i].todoItemId === todo.todoItemId) {
            // we found the element, remove the item
            todoIndex = i;
            break;
        }
    }

    if(todoIndex !== -1) {
        // remove item from array
        todos.splice(todoIndex, 1);
    }

    console.log(todos);

    localStorage.setItem("todos", JSON.stringify(todos));
}