// let sayi = prompt("Lütfen 1 ile 5 arasında bir sayıu giriniz");

// switch(sayi) {
//     case "1" :
//         console.log("Girilen sayı 1 dir");
//     break;

//     case "2" :
//         console.log("Girilen sayı 2 dir");
//     break;

//     case "3" :
//         console.log("Girilen sayı 3 tür");
//     break;

//     case "4" :
//         console.log("Girilen sayı 4 dür");
//     break;

//     case "5" :
//         console.log("Girilen sayı 5 dir");
//     break;

//     default :
//     console.log("Girilen sayı 1 ile 5 arasında olmalıdır !");
//     break;
// }

let yeniStir ="\r\n";
let metin = "1-Pazartesi"+yeniStir
+"2-Salı"+yeniStir
+"3-Çarşamba"+yeniStir
+"4-Perşembe"+yeniStir
+"5-Cuma"+yeniStir
+"6-Cumartesi"+yeniStir
+"7-Pazar"+yeniStir
+"Lütfen bir seçim yapınız";

let deger = prompt(metin);
switch(deger) {
    
    case "1" :
        alert("Pazartesi");
    break;

    case "2" :
        alert("Salı");
     break;

     case "3" :
        alert("Çarşamba");
     break;

     case "4" :
        alert("Perşembe");
     break;

     case "5" :
        alert("Cuma");
     break;

     case "6" :
        alert("Cumartesi");
     break;

     case "7" :
        alert("Pazar");
     break;

     default :
        alert("Lütfen 1 ile 7 arasında bir sayı giriniz");
     break;
}