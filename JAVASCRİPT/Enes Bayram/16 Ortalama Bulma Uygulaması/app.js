// DERS ORTALAMASI BULMA

// vize1 %30 , vize2 % 30 , final %40

let vize1 = Number (prompt("vize birinici notunuzu giriniz"));
let vize2 = Number (prompt("vize ikinci notunuzu giriniz"));
let final = Number (prompt("final notunuzu giriniz"));

let ortalama = (vize1 *0.3) + (vize2 *0.3) + (final *0.4);

if(ortalama>=60) {
    alert("Sınav notunuz :" + ortalama + " Geçtiniz");
}else {
    alert("Sınav notunuz :" + ortalama + " Kaldınız" );
}