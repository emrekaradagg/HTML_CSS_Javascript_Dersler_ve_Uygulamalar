/* 
Diyalog Kutuları
-ALERT
-PROMPT
-CONFİRM
*/

//Alert : Uyarı

// alert("İşleminize devam etmeden önce kaydetmelisiniz");

//Prompt : Kullanıcıdan değer alabiliyoruz

// let isim = prompt("Lütfen isim giriniz");
// let yas = prompt("Lütfen yaşınızı giriniz");
// document.write("İsminiz :  " + isim); 
// document.write("Yaşınız :  " + yas);


//Confirm : Onaylama

let onay = confirm("Silmek istediğinize emin misiniz");
if(onay == true) {
    console.log("Onaylandı");
}else {
    console.log("İptal edildi")
}
