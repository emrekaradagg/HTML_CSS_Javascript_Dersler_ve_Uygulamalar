//Tüm Elementleri Seçmek

const form = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.querySelector("#clearButton");

let todos=[];

runEvents();

function runEvents(){
    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",pageLoaded);
    secondCardBody.addEventListener("click",removeTodoToUI);
}

function pageLoaded(){
    checkTodosFromStorage();
    todos.forEach(function(todo){
        addTodoToUI(todo);
    })
}

function removeTodoToUI(e){
    if(e.target.className==="fa fa-remove"){
        //Ekrandan Silme
     const todo = e.target.parentElement.parentElement;
     todo.remove();
     
     //Storage'dan Silme
     removeTodoToStorage(todo.textContent);
     showAlert("success","Todo başarıyla silindi");   
    }
}

function removeTodoToStorage(removeTodo){
    checkTodosFromStorage();
    todos.forEach(function(todo,index){
        if(removeTodo===todo){
            todos.splice(index,1);
        }
    });
    localStorage.setItem("todos",JSON.stringify(todos));
}

function addTodo(e){
    const inputText = addInput.value.trim();
    if(inputText==null || inputText==""){
        showAlert("warning","Lütfen boş bırakmayınız!");
    }else{
     //Arayüz ekleme
        addTodoToUI(inputText);
        addTodoToStorage(inputText);
        showAlert("success","Todo Eklendi");
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

function addTodoToStorage(newTodo){
   checkTodosFromStorage();
   todos.push(newTodo);
   localStorage.setItem("todos",JSON.stringify(todos));
}

function checkTodosFromStorage(){
     if(localStorage.getItem("todos")===null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"))
    }
}

function showAlert(type, message){
//     <div class="alert alert-warning" role="alert">
//          This is a warning alert—check it out!
//    </div>

const div = document.createElement("div");
// div.className ="alert alert-"+type;
div.className = 'alert alert-${type}';
div.textContent = message;

firstCardBody.appendChild(div);

setTimeout(function(){
div.remove();
},2000)


}

