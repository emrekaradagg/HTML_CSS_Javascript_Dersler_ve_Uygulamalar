//Kelime sayısı bulma uygulaması

let metin = prompt("Lütfen kelimeyi yazınız");

let harf = prompt("Lütfen harfi giriniz");

let sonuc = bul(harf);
alert("Harf sayısı :" + sonuc);

function bul(harf) {
    let toplam=0;
    for(i=0; i<metin.length; i++) {
        if(metin.charAt(i).toLowerCase()===harf.toLowerCase()) {
            toplam+=1;
        }
    }
    return toplam;
}