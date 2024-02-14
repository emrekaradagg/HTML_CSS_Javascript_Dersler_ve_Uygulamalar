//MOUSE EVENTLARI

//DOMContentLoaded
//load
//click
//dblclick : çift tıklanınca çalışır
//mouseover
//mauseout
//mauseenter
//mauseleave

// document.addEventListener("DOMContentLoaded",run);
// window.addEventListener("load",run);

// function run(){
//     alert("Sayfa yüklendi");
// }


const cardTitle = document.querySelectorAll(".card-title")[1];
const cardBody = document.querySelectorAll(".card-body")[1];

// cardTitle.addEventListener("click",run);
// cardTitle.addEventListener("dblclick",run);
// cardBody.addEventListener("mouseover",run);
// cardBody.addEventListener("mouseout",run);

// cardBody.addEventListener("mouseenter",run);
cardBody.addEventListener("mouseleave",run);





function run(e){
    alert("Tıklandı...");
}