//OOP Giriş

 class Insan { //sınıf
    /*
    1-Özellikler
    2-Yapıcı metot
    3-Function
    */

    constructor(isim,soyisim,yas,maas){    //!Yapıcı metot
      this.isim = isim;
      this.soyisim = soyisim;
      this.yas = yas;
      this.maas = maas;
    }
    bilgileriGoster(){
        console.log(
            `
            İsim : ${this.isim}
            Soyisim : ${this.soyisim}
            Yas : ${this.yas}
            Maas : ${this.maas}
            `)
    }

}
//Nesne Oluşturmak
const insan1 = new Insan("Emre","Karadağ", 28, 10000);
const insan2 = new Insan("Nida","Çınar",14,5000)

insan1.bilgileriGoster()
insan2.bilgileriGoster()


