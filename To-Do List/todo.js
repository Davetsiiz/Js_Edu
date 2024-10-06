const form=document.querySelector('#todo-form');
const todoInput=document.querySelector('#todo');
const todoList=document.querySelector('.list-group');
const firstCardBody=document.querySelectorAll(".card-body");
const secondCardBody=document.querySelectorAll(".card-body");
const filter=document.querySelector('#filter');
const clearButton=document.querySelector('clear-todos');
eventListeners();

function eventListeners(){
    form.addEventListener("submit",addTodo);
}


function addTodo(e){
    const newToDO=todoInput.ariaValueMax;
    e.preventDefault();
}