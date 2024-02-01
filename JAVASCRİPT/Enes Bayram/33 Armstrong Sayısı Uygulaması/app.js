// 153 370 407 sayısı amstrong

// 153 = 1*1*1 5*5*5 3*3*3 = 1+125+27 =153

let sayi =prompt("Lütfen bir sayı giriniz");
let toplam =0;
for(i=0; i<sayi.length; i++ ) {
    let rakam = sayi.charAt(i);
    toplam+=rakam*rakam*rakam;
}
if(Number(sayi)==toplam) {
    alert("Amstrong sayıdır :)");
}else{
    alert("Amstrong değildir");
}