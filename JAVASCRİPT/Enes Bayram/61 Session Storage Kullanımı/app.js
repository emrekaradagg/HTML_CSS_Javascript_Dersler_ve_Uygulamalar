//Session Storage : site kapatılınca veriler kaybolur

//Değer Ekleme

sessionStorage.setItem("256","Emre");
sessionStorage.setItem("230","Göknur");
sessionStorage.setItem("150","Ahmet");
sessionStorage.setItem(552,34);

//Değer Silme

// sessionStorage.removeItem("150");

// let value = sessionStorage.getItem("230");
// if(value==null){
//     console.log("Değer bulunamadı");
// }else{
//     console.log("Değer bulundu",value);
// }

//Hepsini Silme

// sessionStorage.clear();

// let value = sessionStorage.getItem(552);
// console.log(typeof value);

let names =["Ali","Enes","Kübra","Adem","Ayşenur"];

sessionStorage.setItem("names",JSON.stringify(names));

let value =JSON.parse (sessionStorage.getItem("names"));
value.forEach(function(name){
    console.log(name);
})