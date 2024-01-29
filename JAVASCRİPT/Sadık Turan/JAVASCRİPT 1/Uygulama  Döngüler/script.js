//let sayilar = [1,5,7,15,3,25,12,6,4];

//sayilar listesindeki her bir elemanın karesini yazdırınız

/*for (let sayi of sayilar) {
    console.log(sayi * sayi);
}*/

//sayilar listesindeki hangi sayılar 5 in katıdır.

/*for(let i=0; i<sayilar.length; i++){
    if(sayilar[i] % 5 == 0){
        console.log(sayilar[i]);
    }
}*/

//sayilar listesindeki çift sayıların toplamını bulunuz.
// let toplam = 0;
// for(let i in sayilar){
// if(sayilar[i] % 2 ==0){
//     toplam += sayilar[i];
//     }
// }
// console.log(toplam);

//Ürünler listesindeki tüm ürünleri büyük harfle yazdırınız.

//let urunler =["iphone 12","samsung s22","iphone 13","samsung s23"];

// for (let urun of urunler){
//     console.log (urun.toUpperCase());   
// }

//urnler listesinde samsung geçen kaç urun vardır 
// let adet=0;
// for(let urun of urunler) {
//     if(urun.includes("samsung")){
//         adet++;
//     }
// }
// console.log(adet);


//çğrenciler listesindeki her öğrencinin not ortalaması ve başarı durumlarını yazdırınız.

let ogrenciler = [
    {"ad":"yiğit", "soyad": "bilgi", "notlar": [60,70,60]},
    {"ad":"ada", "soyad": "bilgi", "notlar": [80,70,80]},
    {"ad":"çınar", "soyad": "turan", "notlar": [10,20,60]}
];

for(let ogrenci of ogrenciler) {
    let not_toplam =0;
    let ortalama = 0;
    let adet = 0;
    for(let not of ogrenci.notlar) {
        not_toplam += not;
        adet++;
    }
    ortalama = not_toplam / adet;

    console.log(`${ogrenci.ad} ${ogrenci.soyad} isimli öğrencinin not ortalaması : ${ortalama}. `);
    
    if(ortalama>=50) {
        console.log("başarılı.");
    }
    else {
        console.log("başarısız.");
    }
}