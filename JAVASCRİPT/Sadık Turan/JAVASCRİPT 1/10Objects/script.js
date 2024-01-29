let kullaniciA = {
    "ad":"Emre",
    "soyad":"Karadag",
    "yas": 28,
    "adres":{
        "sehir":"Erzurum",
        "ilce":"Yakutiye"
    },

    "hobiler":["sinema","spor"]
}

let kullaniciB = {
    "ad":"Ahmet",
    "soyad":"Çelik",
    "yas": 36,
    "adres":{
        "sehir":"Bursa",
        "ilce":"İnegöl"
    }

}


let sonuc;
sonuc = kullaniciA.ad;
sonuc = kullaniciA.soyad;
sonuc = kullaniciA.yas;
sonuc = kullaniciA.adres.sehir;
sonuc = kullaniciA.adres.ilce;
sonuc = kullaniciA.hobiler[0];

let kullanicilar =[
    kullaniciA,
    kullaniciB
];

sonuc = kullanicilar[1].ad;

let urunler =[
    {
    "urun_adi": "samsung s22",
    "urun_fiyat": 11000
},
{
    "urun_adi": "samsung s23",
    "urun_fiyat": 15000
}
]
sonuc = urunler[0].urun_adi


console.log(sonuc); 