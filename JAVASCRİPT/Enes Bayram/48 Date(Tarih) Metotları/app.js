// DATE KULLANIMI

let tarih = new Date();

console.log(typeof tarih);
// console.log(tarih);

// console.log(tarih.getFullYear());
// console.log(tarih.getDate());
// console.log(tarih.getHours());
// console.log(tarih.getMilliseconds());
// console.log(tarih.getMinutes());
// console.log(tarih.getMonth()+1);
// console.log(tarih.getSeconds());
// console.log(tarih.toLocaleDateString());
// console.log(tarih.toLocaleTimeString());
// console.log(tarih.toLocaleString());

// SET METOTLARI : yeni değer vermek için kullanılır

console.log(tarih);
tarih.setHours(3);
tarih.setDate(15);
tarih.setMonth(3);
tarih.setMinutes(45)
tarih.setHours(tarih.setHours()+2);

console.log(tarih);