//SELECTORS (Seçiciler) - Style özellikleri

//getElementById : id ye göre elementi yakalar
//getElementByClassName : class ismine göre elementi yakalar
//getElementByTagName : etiket ismine göre elementi yakalar



const button = document.getElementById("todoAddButton");





// console.log(button);
// console.log(button.id);
// console.log(button.getAttribute("class"));

// const classListesi = button.classList;
// const classListesi = button.classList[2];

// const classListesi = button.classList;

// classListesi.forEach(function(className){
//     console.log(className);
// })

// console.log(classListesi);

// let buttonText = button.textContent;
// let buttonText2 = button.innerHTML;

// console.log(buttonText);
// console.log(buttonText2);


// button.textContent="<b>Todo Ekleyin</b>";
// button.innerHTML="<b>Todo Ekleyin</b>";

// const todoList =Array.from (document.getElementsByClassName("list-group-item"));

// todoList.forEach(function(todo){
//     console.log(todo.textContent);
// })



// console.log(todoList);

// const forms =Array.from (document.getElementsByTagName("form"));
// forms.forEach(function(form){
//     console.log(form);
// })

// console.log(forms);

// const todoList =document.getElementsByTagName("li");
// console.log(todoList);

// const clearButton = document.querySelector("#clearButton");

// console.log(clearButton);

// const todoList = document.querySelector(".list-group");
// console.log(todoList);

// const todoList = document.querySelectorAll(".list-group-item");
// console.log(todoList);

// const todoList = document.querySelectorAll(".list-group-item")[2];
// console.log(todoList);

// const todoList = document.querySelectorAll(".list-group-item")[document.querySelectorAll(".list-group-item").length-1];
// console.log(todoList);

// const todoList = document.querySelectorAll("li:first-child");
// console.log(todoList);

// const todoList = document.querySelectorAll("li:nth-last-child(2)");
// console.log(todoList);

//odd ve even  odd : tekleri seçer  even : çiftleri seçer 
const todoList = Array.from (document.querySelectorAll("li:nth-child(even)"));

todoList.forEach(function(todo){
    todo.style.backgroundColor = "lightgrey";
})

console.log(todoList);