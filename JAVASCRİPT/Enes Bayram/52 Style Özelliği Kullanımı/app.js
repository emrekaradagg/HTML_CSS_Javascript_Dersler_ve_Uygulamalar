// Style özelliğini anlamak

const todo = document.querySelectorAll(".list-group-item")[0];
const todoList = document.querySelector(".list-group");
const clearButton = document.querySelector("#clearButton");


console.log(todoList);

todo.style.color ="#fff";
todo.style.background ="purple";
todo.style.fontWeight ="bold";
todo.style.paddingTop ="60px";
todo.style.paddingLeft ="70px";
todo.style.borderRadius ="25px";


todoList.style.marginTop ="75px";
todoList.style.marginLeft ="100px";

clearButton.style.background = "lightgrey";
clearButton.style.fontWeight = "bold";
clearButton.style.padding = "10px";
clearButton.style.borderRadius = "25px";

