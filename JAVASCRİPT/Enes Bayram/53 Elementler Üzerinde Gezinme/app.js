// HTML Elementleri üzerinde gezinmek

const todo = document.querySelector(".list-group-item");
const todoList = document.querySelector(".list-group");
const todoLastChild = document.querySelector(".list-group-item:nth-child(4");
const card = document.querySelector(".card");
const row = document.querySelector(".row");

let value;

value = todoList.children[0];
value = todoList.children[3];
value = todoList.children[todoList.children.length-1];
value = todoList.children[3].textContent = "Degisti";

// value = Array.from(todoList.children);

// value.forEach(function(todo){
//     console.log(todo.textContent);
// })

//Çocuktan anneye erişmek

value = todo;
let ul = todo.parentElement;
let cardBody= ul.parentElement;
let cardElement = cardBody.parentElement;
let row1 = cardElement.parentElement;
let container = row.parentElement;


//Kardeşler arasında gezinmek

value = todo;
let kardes1 = todo.nextElementSibling;
let kardes2 = kardes1.nextElementSibling;

value = todoLastChild;
value =todoLastChild.previousElementSibling;

let todo2 = todoList.children[1];
let todo3 = todoList.children[3];
todo2.textContent ="Todo 2";
todo2.style.backgroundColor = "gray";
todo3.style.color ="red";


console.log(todo2);