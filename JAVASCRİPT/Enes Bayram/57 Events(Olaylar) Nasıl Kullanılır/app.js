//EVENT OLAY
//addEventListener()

const clearButton = document.querySelector("#clearButton");

clearButton.addEventListener("click",function(){
    alert("Merhaba");
    document.querySelectorAll(".card-title")[1].textContent="Todo Değişti"
});




// function changeTitle() {
//     document.querySelectorAll('.card-title')[1].textContent="Todo Değişti..."
// }