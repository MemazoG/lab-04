//Botones
let post = document.getElementById("btnPost");
let clear = document.getElementById("btnClear");
let mark = document.getElementById("btnMark");
let del = document.getElementById("btnDelete");

//Donde se van a listar los todos
let todoList = document.getElementById("todoList");

//Event listeners botones
post.addEventListener("click", todoPost);
clear.addEventListener("click", todoClear);
mark.addEventListener("click", todoMark);
del.addEventListener("click", todoDel);

//Función POST
function todoPost(e) {
    e.preventDefault();

    //Contenedor donde estara el todo
    let div = document.createElement("div");

    //Texto todo
    let todo = document.getElementById("todoText");

    //Elementos de un todo
    let checkbox = document.createElement("input");
    let label = document.createElement("label");

    checkbox.type = "checkbox";
    checkbox.name = "todo";
    label.textContent = todo.value;
    div.appendChild(checkbox);
    div.appendChild(label);

    todoList.appendChild(div);
    todo.value = "";
}

//Función CLEAR
function todoClear() {
    let todos = document.getElementsByName("todo");
    for(let i=0; i < todos.length; i++) {
        todos[i].checked = false;
    }
}

//Función MARK
function todoMark() {
    let todos = document.getElementsByName("todo");
    for(let i=0; i < todos.length; i++) {
        todos[i].checked = true;
    }
}

//Función DELETE
function todoDel() {
    while(todoList.firstChild) { 
        todoList.removeChild(todoList.lastChild);
    }
}