// Parametreli metot tanımlamak

// function yazdir(isim,soyisim) {
//     console.log(isim + " " + soyisim);
// }
// yazdir("Emre","Karadağ");
// yazdir("Ali","Kasa");


// function cube(sayi) {
//     console.log(sayi*sayi*sayi);
// }

// cube(5);
// cube(3);

let yas = Number(prompt("Lütfen yaşınızı giriniz"));

function kontrolEt(yas) {
if(yas>=18) {
    alert("Ehliyet alabilir")
}else{
    alert("Ehliyet alamaz")
}
}

kontrolEt(yas);