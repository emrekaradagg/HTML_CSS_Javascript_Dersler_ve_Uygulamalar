//Tüm Elementleri Seçmek

const form = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.querySelector("#clearButton");

runEvents();

function runEvents(){
    form.addEventListener("submit",addTodo);
}

function addTodo(e){
    const inputText = addInput.value.trim();
    if(inputText==null || inputText==""){
        alert("Lütfen bir değer giriniz!")
    }else{
     //Arayüz ekleme
        addTodoToUI(inputText);
    }
     //Storage ekleme
    e.preventDefault();
}

function addTodoToUI(newTodo){
   /*
   <li class="list-group-item d-flex justify-content-between">Todo 1
                                    <a href="#" class="delete-item">
                                        <i class="fa fa-remove"></i>
                                    </a>
                                </li>
                                */
   const li = document.createElement("li");                           
    li.className = "list-group-item d-flex justify-content-between";
    li.textContent = newTodo;

    const a = document.createElement("a");
    a.href="#";
    a.className = "delete-item";

    const i = document.createElement("i");
    i.className = "fa fa-remove";

    a.appendChild(i);
    li.appendChild(a);
    todoList.appendChild(li);

    addInput.value ="";
}

