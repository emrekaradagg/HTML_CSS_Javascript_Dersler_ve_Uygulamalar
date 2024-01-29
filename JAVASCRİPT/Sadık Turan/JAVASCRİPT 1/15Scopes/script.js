var isim ="Ahmet";

function yazdir() {
    var isim = "Ayşe";
    var yas = 20;
    console.log("function scope:", isim, yas);
}

if(true) {
    let isim = "Zeynep";
    console.log(isim);
}

console.log(isim);

yazdir();