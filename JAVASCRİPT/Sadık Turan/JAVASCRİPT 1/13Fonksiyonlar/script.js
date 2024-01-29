function yasHesapla(dogumYili){
    return new Date().getFullYear() - dogumYili;
}

let yasEmre =yasHesapla(1994);
let yasAli =yasHesapla(1950);

console.log(yasEmre,yasAli);


function emekliligeKaçYilKaldi (dogumYili, isim) {
    let yas = yasHesapla(dogumYili);
    let kalan_sene = 65 - yas;
    if(kalan_sene > 0) {
        console.log(`${isim},emekli olmanıza ${kalan_sene} yıl kaldı.`);
    } else {
        console.log("zaten emekli oldunuz.");
    }
}

emekliligeKaçYilKaldi(1994,"Emre");
emekliligeKaçYilKaldi(1950,"Ali");