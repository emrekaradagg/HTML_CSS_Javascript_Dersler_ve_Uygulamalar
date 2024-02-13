// KLAVYE EVENTLARI

//keypress : harf ve sayılarda tetiklenen eventtır

//keydown : HEPSİNDE ÇALIŞIR

//keyup : tuştan elini kaldırdığında çalışan eventtır

// document.addEventListener("keypress",run);

// function run(e){
    // console.log(e.type);
//     console.log(e.keyCode);
//     console.log(e.which);
// }

// document.addEventListener("keydown",run);

// function run(e){
//      console.log(e.key);
//         console.log(e.which);
//      console.log(e.keyCode);
// if(e.keyCode ==116){
//     alert("Sayfa yenileme engellendi");
// }
// e.preventDefault();
// }

// document.addEventListener("keyup",run);

// function run(e){
//     console.log(e.key);
//      console.log(e.keyCode);
//      console.log(e.which);
// }

const cardTitle = document.querySelectorAll(".card-title")[0];

const input = document.querySelector("#todoName");

input.addEventListener("keypress",run);

function run(e){
    
    console.log(e.target.value);
}


input.addEventListener("keyup",run);

function run(e){
    cardTitle.textContent = e.target.value;
    
}