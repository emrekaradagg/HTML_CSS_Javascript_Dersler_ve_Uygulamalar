/*
1-Javascript senkron çalışan bir programlama dilidir
--------------ASENKRON ÇALIŞMASINA SEBEP OLANLAR--------------
1-Timing
2-Event(olay)
3-Http isteklerinde

---------- CALLBACK - PROMİSE - ASYNC & AWAIT ------------
----->Asenkron yapıları senkrona çevirip yönetiyoruz...

*/

// selamla()
// console.log("1")
// console.log("2")
// console.log("Emre")

// function selamla(){
//     console.log("Selam")
// }

console.log("Emre");

setTimeout(() => {
    console.log("Süre doldu ve çalıştı")
}, 1000);

setTimeout(() => {
    console.log("Yarım saniye bekledi ve çalıştı")
}, 500);

setTimeout(() => {
    console.log("750 ms bekledi ve çalıştı")
}, 750);

console.log("Karadağ")