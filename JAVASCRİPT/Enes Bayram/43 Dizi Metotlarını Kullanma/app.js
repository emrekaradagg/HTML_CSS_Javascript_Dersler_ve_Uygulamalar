

let arabalar =["audio","bmw","toyota","renault","skoda"];
let araçlar =["volvo","tofaş"]

// PUSH METOT : sona yeni eleman ekler

// arabalar.push("opel");
// console.log(arabalar);

//UNSHİFT METOT : başa eleman ekler

// arabalar.unshift("volvo");
// console.log(arabalar);

//POP : son eleman silinir

// let silinenEleman=arabalar.pop();
// console.log(arabalar);
// console.log(silinenEleman);   //silinen eleman döner

//SHİFT : ilk eleman silinir

// let silinenEleman = arabalar.shift();
// console.log(arabalar);
// console.log(silinenEleman);

//SPLİCE METOT : hem ekleme hem de silme işlemi yapar

// arabalar.splice(4,0,"hundai");
// console.log(arabalar);

// arabalar.splice(1,2);
// console.log(arabalar);

//TOSTRİNG METOT

// console.log(typeof arabalar);
// let stringArabalar = arabalar.toString();
// console.log(typeof stringArabalar);

//JOİN METOT : diziyi stringe çevirir ve araya eleman ekleyebilir

// let stringArabalar = arabalar.join("-");
// console.log(stringArabalar);

//CONCAT METOT : dizileri birleştirmek için kullanılır

// let tum=arabalar.concat(araçlar);
// console.log(tum);

//SLİCE :dizi içindeki elemanları bölüp ayrı dizi oluşturur

// console.log(arabalar);
// let ayriDizi=arabalar.slice(2);
// console.log(ayriDizi);

//LENGTH 

// console.log(arabalar.length);

//REVERSE : Ters çevirme

// arabalar.reverse();
// console.log(arabalar);

//SPLİT

// let isimler = "Enes,Ali,Veli";

// let isimlerDizi = isimler.split(",");
// console.log(isimlerDizi);

//İNDEXOF

// let index = arabalar.indexOf("toyota");
// console.log(index);

//İNCLUDES

// let sonuc = arabalar.includes("bmw");
// console.log(sonuc);