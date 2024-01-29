// Benzin İstasyonu

/*
    1-Dizel  :40.20
    2-Benzin :37.96
    3-LPG    :20


    Gelen müşteriden alacağımız bilgiler;
    1-Yakıt tipi
    2-Yüklenecek yakıt litresi

*/

let dizel = 40.20, benzin = 37.96, lpg =20
const yeniSatir = "\r\n";

const yakitMetni = "1-Dizel"+yeniSatir
+"2-Benzin"+yeniSatir
+"3-LPG"+yeniSatir
+"Yakıt türünü seçiniz";

let yakitTipi = Number(prompt(yakitMetni));
if(yakitTipi =="1" || yakitTipi =="2" || yakitTipi =="3") {
let yakitLitresi = Number(prompt("Alacağınız litreyi giriniz"));
let bakiye = Number(prompt("Bakiyenizi giriniz"));
    
    if(yakitTipi =="1") {
        //Dizel
        let odenecekTutar = dizel*yakitLitresi;
        if(odenecekTutar<bakiye) {
            //bakiye yeterli
            bakiye = bakiye - odenecekTutar;
            alert("Yakıt alma işlemi başarılı"+yeniSatir
            +"Kalan bakiye :"+ bakiye)
        }else {
            //bakiye yetreli değil
            alert("Bakiyeniz yeterli değildir"+yeniSatir
            +"Ödenecek tutar :"+ odenecekTutar+yeniSatir
            +"Bakiye :"+ bakiye+yeniSatir
            +"Eksik Tutar :"+ (odenecekTutar-bakiye));
        }
        }else if(yakitTipi =="2") {
        //Benzin
        let odenecekTutar = benzin*yakitLitresi;
        if(odenecekTutar<bakiye) {
            //bakiye yeterli
            bakiye = bakiye- odenecekTutar;
            alert("Yakıt alma işlemi başarılı"+yeniSatir
            +"Kalan bakiye :"+ bakiye)
        }else {
            //Bakiye yeterli değildir
            alert("Bakiyeniz yetreli değil"+yeniSatir
            +"Ödenecek tutar :"+ odenecekTutar+yeniSatir
            +"Bakiye :"+ bakiye+yeniSatir
            +"Eksik Tutar :"+ (odenecekTutar-bakiye));
        }
        }else if(yakitTipi =="3") {
        //LPG
        let odenecekTutar = lpg*yakitLitresi;
        if(odenecekTutar<bakiye) {
            //bakiye yeterli
            bakiye = bakiye - odenecekTutar;
            alert("Yakıt alma işlemi başarılı"+yeniSatir
            +"Kalan bakiye :"+ bakiye)
        }else {
            //bakiye yetreli değil
            alert("Bakiyeniz yeterli değildir"+yeniSatir
            +"Ödenecek tutar :"+ odenecekTutar+yeniSatir
            +"Bakiye :"+ bakiye+yeniSatir
            +"Eksik Tutar :"+ (odenecekTutar-bakiye));
        }
        }

}


else {
    alert("Lütfen yukarıdaki yakıt tiplerinden birini seçiniz !!!")
}