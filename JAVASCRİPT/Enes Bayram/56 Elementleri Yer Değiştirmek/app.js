//Elementleri Değiştirmek

const cardBody = document.querySelectorAll(".card-body")[1];

// <h5 class="card-title">Todo List Sayfası </h5>

const newTitle = document.createElement("h2");
newTitle.className ="card-title";
newTitle.textContent ="Todo Listesi - Yeni";

cardBody.replaceChild(newTitle,cardBody.childNodes[1]);

console.log(cardBody);